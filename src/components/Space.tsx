import Image from "next/image";
import { MapPin, Shield, VolumeX } from "lucide-react";

export function Space() {
  return (
    <section id="espaco" className="py-24 bg-offwhite scroll-mt-28 md:scroll-mt-32">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative h-[500px] w-full bg-leadgray/5">
          <Image
            src="/sala.png"
            alt="Imagem do Consultório"
            fill
            className="object-cover"
          />
          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-drygold/40 z-[-1]"></div>
        </div>
        
        <div className="order-1 lg:order-2 flex flex-col gap-8">
          <div>
            <span className="uppercase tracking-widest text-drygold text-xs font-semibold mb-4 block">
              O Espaço
            </span>
            <h2 className="font-serif text-4xl text-deepnavy mb-6">
              Experiência e Localização.
            </h2>
            <p className="text-leadgray/80 leading-relaxed font-light">
              Desenhado para oferecer a máxima tranquilidade, nosso espaço une design sofisticado a critérios rígidos de privacidade. 
              Um refúgio seguro para avaliações e processos terapêuticos intensos.
            </p>
          </div>

          <div className="grid gap-6 mt-4">
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-drygold shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <h4 className="font-semibold text-deepnavy mb-1">Localização Exclusiva</h4>
                <p className="text-sm text-leadgray/70 font-light">
                  Avenida Cândido de Abreu, 526 - Torre B, Centro Cívico. Curitiba/PR. <br />
                  Fácil acesso, estacionamento no local e segurança reforçada.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Shield className="w-6 h-6 text-drygold shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <h4 className="font-semibold text-deepnavy mb-1">Privacidade Absoluta</h4>
                <p className="text-sm text-leadgray/70 font-light">
                  Salas dispostas e estruturadas para garantir total sigilo, proporcionando conforto para pacientes e acompanhantes.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
