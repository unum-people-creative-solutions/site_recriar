"use client";

import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { IMaskInput } from "react-imask";
import { useLead } from "@/context/LeadContext";
import { sendLeadToCRM, LeadData } from "@/lib/crm";
import { X, Send, Loader2, User, Mail, Phone, AlertCircle } from "lucide-react";

const leadSchema = z.object({
  nome: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("E-mail inválido"),
  telefone: z.string().min(14, "Telefone incompleto"), // (00) 0000-0000 ou (00) 00000-0000
});

type LeadFormValues = z.infer<typeof leadSchema>;

declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "set" | "js",
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

export function LeadModal() {
  const { isOpen, closeModal, whatsappUrl } = useLead();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
    },
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      reset();
    }
  }, [isOpen, reset]);

  if (!isOpen) return null;

  const onSubmit = async (data: LeadFormValues) => {
    setIsLoading(true);

    const urlParams = new URLSearchParams(window.location.search);
    
    const leadData: LeadData = {
      ...data,
      origem: window.location.hostname,
      gclid: urlParams.get("gclid"),
      utm_source: urlParams.get("utm_source"),
      utm_medium: urlParams.get("utm_medium"),
      utm_campaign: urlParams.get("utm_campaign"),
      metadados: {
        url_conversao: whatsappUrl,
        data_hora: new Date().toISOString(),
      },
    };

    try {
      // 1. Tenta enviar para o CRM
      try {
        await sendLeadToCRM(leadData);
      } catch (crmError) {
        console.error("Erro ao enviar para o CRM:", crmError);
      }

      // 2. Tenta registrar a conversão no Google Ads
      if (typeof window !== "undefined" && window.gtag) {
        // Envia dados do usuário para Enhanced Conversions
        window.gtag('set', 'user_data', {
          'email': data.email,
          'phone_number': data.telefone
        });

        window.gtag("event", "conversion", {
          "send_to": "AW-18082531759/MOw4CLnhqJocEK-Ttq5D",
          "value": 1.0,
          "currency": "BRL"
        });
      }
    } catch (error) {
      console.error("Falha ao processar lead:", error);
    } finally {
      // 3. Sempre redireciona para o WhatsApp e fecha o modal
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      closeModal();
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md rounded-lg shadow-2xl overflow-hidden">
        <div className="bg-[#0A192F] p-6 flex justify-between items-center text-white">
          <div>
            <h3 className="font-serif text-xl">Inicie seu atendimento</h3>
            <p className="text-xs text-white/60 font-light mt-1 uppercase tracking-widest">
              Falta pouco para conversarmos
            </p>
          </div>
          <button 
            onClick={closeModal}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-8 flex flex-col gap-6">
          <div className="space-y-4">
            <div className="relative">
              <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1.5 block">
                Nome Completo
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C5A059]" />
                <input
                  {...register("nome")}
                  type="text"
                  placeholder="Seu nome completo"
                  className={`w-full bg-gray-50 border ${errors.nome ? 'border-red-500' : 'border-gray-200'} rounded-sm py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-[#C5A059] transition-colors`}
                />
              </div>
              {errors.nome && (
                <span className="text-[10px] text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.nome.message}
                </span>
              )}
            </div>

            <div className="relative">
              <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1.5 block">
                WhatsApp
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C5A059]" />
                <Controller
                  name="telefone"
                  control={control}
                  render={({ field }) => (
                    <IMaskInput
                      mask="(00) 00000-0000"
                      lazy={true}
                      value={field.value}
                      unmask={false} // Mantemos formatado para o CRM/Ads conforme padrão atual
                      onAccept={(value) => field.onChange(value)}
                      placeholder="(00) 00000-0000"
                      className={`w-full bg-gray-50 border ${errors.telefone ? 'border-red-500' : 'border-gray-200'} rounded-sm py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-[#C5A059] transition-colors`}
                    />
                  )}
                />
              </div>
              {errors.telefone && (
                <span className="text-[10px] text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.telefone.message}
                </span>
              )}
            </div>

            <div className="relative">
              <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1.5 block">
                E-mail
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C5A059]" />
                <input
                  {...register("email")}
                  type="email"
                  placeholder="seu@email.com"
                  className={`w-full bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-sm py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-[#C5A059] transition-colors`}
                />
              </div>
              {errors.email && (
                <span className="text-[10px] text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.email.message}
                </span>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="mt-2 w-full bg-[#C5A059] hover:bg-[#0A192F] text-white py-4 rounded-sm font-medium uppercase tracking-widest text-sm flex items-center justify-center gap-3 transition-all disabled:opacity-70"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                Prosseguir para o WhatsApp
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
          
          <p className="text-[10px] text-center text-gray-400 leading-relaxed">
            Seus dados estão seguros e serão utilizados apenas para este atendimento, <br />
            em conformidade com a LGPD e o sigilo profissional.
          </p>
        </form>
      </div>
    </div>
  );
}
