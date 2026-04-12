"use client";

import { ArrowRight } from "lucide-react";

export function Hero() {
  const trackWhatsAppClick = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-18082531759/MOw4CLnhqJocEK-Ttq5D',
        'value': 1.0,
        'currency': 'BRL'
      });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-offwhite overflow-hidden">
      {/* Abstract Background Elements for Premium Feel */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('/sala_extensa_pro.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-offwhite via-offwhite/90 to-transparent"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-6 grid md:grid-cols-[1.5fr_1fr] lg:grid-cols-[2fr_1fr] gap-12 items-center">
        <div className="flex flex-col gap-6 max-w-4xl">
                  <span className="uppercase tracking-widest text-drygold text-sm font-semibold">
                    Saúde Mental & Alta Performance
                  </span>

                  <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-deepnavy break-words">
                    Excelência em Neuropsicologia e Confidencialidade absoluta.
                  </h1>
          
          <p className="text-lg md:text-xl text-leadgray/80 leading-relaxed max-w-lg font-light">
            Avaliação Neuropsicológica e Psicoterapia especializada no Centro Cívico, Curitiba.
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <a 
              href="https://api.whatsapp.com/send/?phone=5541997742133&text=Ol%C3%A1%2C+gostaria+de+informa%C3%A7%C3%B5es+sobre+atendimento+na+Cl%C3%ADnica+RECRIAR&type=phone_number&app_absent=0" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={trackWhatsAppClick}
              className="inline-flex items-center justify-center gap-2 bg-deepnavy hover:bg-leadgray text-offwhite px-8 py-4 text-sm uppercase tracking-wider font-medium transition-all group"
            >
              Entre em contato conosco
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
