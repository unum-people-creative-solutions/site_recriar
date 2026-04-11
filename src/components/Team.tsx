import Image from "next/image";

export function Team() {
  const team = [
    {
      name: "Elenice Aparecida Pedroso",
      role: "Psicóloga e Psicanalista",
      description: "Especialista em infância e adolescência. Ampla experiência clínica em intervenções baseadas em evidências psicanalíticas, atuando no suporte emocional e desenvolvimento estrutural de jovens em fases críticas.",
      image: "/elenice.jpeg", // Substitua pelo nome exato do arquivo na pasta public
    },
    {
      name: "Luciana Nogueira da Silva",
      role: "Psicóloga Especialista",
      description: "Especialista em Neuropsicologia e Avaliação. Foco em precisão diagnóstica, mapeamento cognitivo e criação de estratégias terapêuticas para alta performance e superação de déficits neurológicos.",
      image: "/luciana.png", // Substitua pelo nome exato do arquivo na pasta public
    },
    {
      name: "Andrielly Nunes de Almeida",
      role: "Psicóloga Psicanalista",
      description: "Especialista em Psicanálise de bebês, crianças e adolescentes. Abordagem refinada focada na detecção precoce de sofrimentos psíquicos e no fortalecimento de laços familiares e sociais.",
      image: "/andry.jpeg", // Substitua pelo nome exato do arquivo na pasta public
    }
  ];

  return (
    <section id="corpo-clinico" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="uppercase tracking-widest text-drygold text-xs font-semibold mb-4">
            Autoridade & Excelência
          </span>
          <h2 className="font-serif text-4xl text-deepnavy">Corpo Clínico</h2>
          <div className="w-16 h-px bg-drygold mt-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col border border-offwhite hover:border-drygold/30 transition-colors p-8 bg-offwhite/30 rounded-sm group">
              <div className="aspect-square w-full bg-leadgray/5 mb-6 overflow-hidden flex items-center justify-center relative">
                <Image
                  src={member.image}
                  alt={`Retrato de ${member.name}`}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-2xl text-deepnavy mb-2 group-hover:text-drygold transition-colors">
                {member.name}
              </h3>
              <p className="text-xs uppercase tracking-widest text-leadgray/60 mb-6 font-medium">
                {member.role}
              </p>
              <p className="text-sm text-leadgray/80 leading-relaxed font-light">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
