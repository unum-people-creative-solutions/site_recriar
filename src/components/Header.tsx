"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Histerese: Limites diferentes para descer e subir, evitando o "efeito sanfona"
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else if (window.scrollY < 50) {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header className={`sticky top-0 z-50 w-full backdrop-blur-md border-b border-drygold/20 transition-all duration-300 ${isScrolled ? 'bg-offwhite/95 shadow-sm' : 'bg-offwhite/90'}`}>
      <div className={`container mx-auto px-6 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3 md:py-4'}`}>
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Logo Recriar Psicologia" 
            width={600} 
            height={200} 
            className={`w-auto object-contain mix-blend-multiply transition-all duration-500 ease-in-out ${isScrolled ? 'h-16 md:h-20' : 'h-32 md:h-40'}`}
            priority
          />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#especialidades" className="text-sm font-medium hover:text-drygold transition-colors">
            Especialidades
          </Link>
          <Link href="#corpo-clinico" className="text-sm font-medium hover:text-drygold transition-colors">
            Corpo Clínico
          </Link>
          <Link href="#espaco" className="text-sm font-medium hover:text-drygold transition-colors">
            O Espaço
          </Link>
        </nav>

        <div className="hidden md:block">
          <a 
            href="https://api.whatsapp.com/send/?phone=5541997742133&text=Ol%C3%A1%2C+gostaria+de+informa%C3%A7%C3%B5es+sobre+atendimento+na+Cl%C3%ADnica+RECRIAR&type=phone_number&app_absent=0" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={trackWhatsAppClick}
            className="bg-deepnavy hover:bg-leadgray text-offwhite px-6 py-3 text-sm font-medium transition-colors"
          >
            Solicitar Agendamento
          </a>
        </div>

        <button className="md:hidden text-deepnavy p-2">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
