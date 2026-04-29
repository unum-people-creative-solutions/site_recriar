"use client";

import React, { useState, useEffect } from "react";
import { useLead } from "@/context/LeadContext";
import { sendLeadToCRM, LeadData } from "@/lib/crm";
import { X, Send, Loader2, User, Mail, Phone } from "lucide-react";

export function LeadModal() {
  const { isOpen, closeModal, whatsappUrl } = useLead();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const getSourceInfo = () => {
    if (typeof window === "undefined") return "Direct";

    const urlParams = new URLSearchParams(window.location.search);
    const utms = [
      urlParams.get("utm_source") && "Source: " + urlParams.get("utm_source"),
      urlParams.get("utm_medium") && "Medium: " + urlParams.get("utm_medium"),
      urlParams.get("utm_campaign") && "Campaign: " + urlParams.get("utm_campaign"),
      urlParams.get("gclid") && "GCLID: " + urlParams.get("gclid"),
      urlParams.get("fbclid") && "FBCLID: " + urlParams.get("fbclid"),
    ].filter(Boolean);

    if (utms.length > 0) return utms.join(" | ");

    const referrer = document.referrer;
    if (referrer) {
      try {
        const refHost = new URL(referrer).hostname;
        return "Referrer: " + refHost;
      } catch {
        return "Referrer: " + referrer;
      }
    }

    return "Direto / Orgânico";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const leadData: LeadData = {
      ...formData,
      origem: getSourceInfo(),
      metadados: {
        url_conversao: whatsappUrl,
        data_hora: new Date().toISOString(),
      },
    };

    try {
      await sendLeadToCRM(leadData);

      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "conversion", {
          "send_to": "AW-18082531759/MOw4CLnhqJocEK-Ttq5D",
          "value": 1.0,
          "currency": "BRL"
        });
      }

      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      
      closeModal();
      setFormData({ nome: "", email: "", telefone: "" });
    } catch (error) {
      console.error("Falha ao processar lead:", error);
      alert("Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente.");
    } finally {
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

        <form onSubmit={handleSubmit} className="p-8 flex flex-col gap-6">
          <div className="space-y-4">
            <div className="relative">
              <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1.5 block">
                Nome Completo
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C5A059]" />
                <input
                  required
                  type="text"
                  placeholder="Seu nome completo"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-sm py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-[#C5A059] transition-colors"
                />
              </div>
            </div>

            <div className="relative">
              <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1.5 block">
                WhatsApp
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C5A059]" />
                <input
                  required
                  type="tel"
                  placeholder="(00) 00000-0000"
                  value={formData.telefone}
                  onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-sm py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-[#C5A059] transition-colors"
                />
              </div>
            </div>

            <div className="relative">
              <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1.5 block">
                E-mail
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C5A059]" />
                <input
                  required
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-sm py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-[#C5A059] transition-colors"
                />
              </div>
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
