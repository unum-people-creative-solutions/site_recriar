"use client";

import Image from "next/image";
import Link from "next/link";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

export function Footer() {
  const trackWhatsAppClick = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-18082531759/SUA_LABEL_DE_CONVERSAO_AQUI'
      });
    }
  };

  return (
    <footer className="bg-leadgray text-white/60 py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-24 mb-12">
          
          <div className="flex flex-col items-center text-center gap-6">
            <Link href="/" className="inline-block">
              <Image 
                src="/logo.png" 
                alt="Logo Recriar Psicologia" 
                width={600} 
                height={200} 
                className="h-40 md:h-48 w-auto object-contain opacity-90"
              />
            </Link>
            <p className="text-sm font-light leading-relaxed max-w-sm">
              Excelência em Neuropsicologia e Confidencialidade para a sua Saúde Mental.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white uppercase tracking-widest text-xs font-semibold mb-2">Contato</h4>
            <a 
              href="https://api.whatsapp.com/send/?phone=5541997742133&text=Ol%C3%A1%2C+gostaria+de+informa%C3%A7%C3%B5es+sobre+atendimento+na+Cl%C3%ADnica+RECRIAR&type=phone_number&app_absent=0" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={trackWhatsAppClick}
              className="flex items-center gap-2 text-sm hover:text-white transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              +55 41 99774-2133
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white uppercase tracking-widest text-xs font-semibold mb-2">Redes Sociais</h4>
            <a 
              href="https://instagram.com/neuropsirecriar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-white transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
              @neuropsirecriar
            </a>
            <a 
              href="https://instagram.com/luciananogueirapsico" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-white transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
              @luciananogueirapsico
            </a>
            <a 
              href="https://www.instagram.com/psi.andriellyoliveira/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-white transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
              @psi.andriellyoliveira
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light">
          <p>© {new Date().getFullYear()} Recriar Psicologia. Todos os direitos reservados.</p>
          <p>Design de Alto Padrão</p>
        </div>
      </div>
    </footer>
  );
}
