import { Brain, User, Users } from "lucide-react";

export function Services() {
  return (
    <section id="especialidades" className="py-24 bg-deepnavy text-offwhite scroll-mt-[90px]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="uppercase tracking-widest text-drygold text-xs font-semibold mb-4 block">
            Serviços de Alta Complexidade
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl mb-6 text-white">
            Soluções precisas para desafios complexos.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="border-t border-white/10 pt-8">
            <div className="flex items-center gap-4 mb-6 text-drygold">
              <Brain className="w-8 h-8" strokeWidth={1.5} />
              <h3 className="font-serif text-3xl text-white">Avaliação Neuropsicológica</h3>
            </div>
            <p className="text-white/70 leading-relaxed font-light mb-6">
              Mapeamento cognitivo avançado e precisão diagnóstica em todas as fases da vida. 
              Nosso processo de avaliação visa investigar de forma profunda e minuciosa as funções neurológicas e psicológicas.
            </p>
            <p className="text-white/70 leading-relaxed font-light">
              Ideal para planejamento de intervenções em quadros de TDAH, Transtorno do Espectro Autista (TEA), 
              déficits de memória, altas habilidades, focando na performance e qualidade de vida do paciente.
            </p>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col gap-12">
            <div>
              <div className="flex items-center gap-4 mb-4 text-drygold">
                <Users className="w-6 h-6" strokeWidth={1.5} />
                <h3 className="font-serif text-2xl text-white">Psicoterapia Infantojuvenil</h3>
              </div>
              <p className="text-white/70 text-sm leading-relaxed font-light">
                Abordagem pautada no desenvolvimento humano estrutural, solucionando sofrimentos e entraves psíquicos de forma precoce, 
                alinhando o suporte individual à orientação parental.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4 text-drygold">
                <User className="w-6 h-6" strokeWidth={1.5} />
                <h3 className="font-serif text-2xl text-white">Psicoterapia de Adultos</h3>
              </div>
              <p className="text-white/70 text-sm leading-relaxed font-light">
                Foco em resolução de problemas complexos. Um ambiente de escuta refinado e análises precisas 
                para lidar com ansiedade, depressão, burnout e transições de carreira desafiadoras.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
