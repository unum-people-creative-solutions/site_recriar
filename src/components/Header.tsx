import Link from "next/link";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-offwhite/90 backdrop-blur-md border-b border-drygold/20">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl tracking-wide text-deepnavy font-bold">
          Recriar<span className="text-drygold text-3xl">.</span>
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
