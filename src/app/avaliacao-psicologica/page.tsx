"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  CheckCircle2, 
  XCircle, 
  ChevronDown, 
  Play, 
  ArrowRight,
  ClipboardCheck,
  Brain,
  Eye,
  BarChart3,
  MessageSquareQuote
} from "lucide-react";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { useLead } from "@/context/LeadContext";

// --- Minimalist Components for LP ---

const LPHeader = () => {
  const { openModal } = useLead();
  const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5541997742133&text=Olá, gostaria de informações sobre Avaliação Neuropsicológica&type=phone_number&app_absent=0";

  return (
    <header className="fixed top-0 z-50 w-full bg-offwhite/95 backdrop-blur-md border-b border-drygold/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Logo Recriar Psicologia" 
            width={600} 
            height={200} 
            className="h-16 md:h-20 w-auto object-contain mix-blend-multiply"
            priority
          />
        </div>
        
        <div>
          <button 
            onClick={() => openModal(WHATSAPP_URL)}
            className="bg-deepnavy hover:bg-leadgray text-offwhite px-6 py-3 text-xs md:text-sm font-semibold uppercase tracking-widest transition-colors shadow-sm"
          >
            Solicitar Análise
          </button>
        </div>
      </div>
    </header>
  );
};

const LPSimplifiedFooter = () => {
  return (
    <footer className="bg-leadgray text-white/40 py-8 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-[0.2em] font-light">
        <p suppressHydrationWarning>© {new Date().getFullYear()} Recriar Psicologia e Saúde. Todos os direitos reservados.</p>
        <div className="flex gap-8">
          <span>Curitiba - PR</span>
          <span>Neuropsicologia de Alta Precisão</span>
        </div>
      </div>
    </footer>
  );
};

// --- Page Sections ---

const HeroSection = () => {
  const { openModal } = useLead();
  const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5541997742133&text=Olá, gostaria de informações sobre Avaliação Neuropsicológica&type=phone_number&app_absent=0";

  return (
    <section className="relative min-h-[85vh] flex items-center bg-offwhite pt-32 md:pt-40 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 bg-[url(/sala_extensa_pro.png)] bg-cover bg-center"></div>
      
      <div className="container relative z-10 mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 max-w-2xl">
            <span className="uppercase tracking-[0.3em] text-drygold text-xs font-bold">
              Diagnóstico de Alta Precisão
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-deepnavy">
              Respostas exatas e um mapa de navegação definitivo para o desenvolvimento cognitivo e emocional.
            </h1>
            <p className="text-lg md:text-xl text-leadgray/80 leading-relaxed font-light max-w-xl">
              A clareza técnica que você busca para decisões fundamentais, baseada em rigor científico e exclusividade clínica.
            </p>
            <div className="pt-4">
              <button 
                onClick={() => openModal(WHATSAPP_URL)}
                className="inline-flex items-center justify-center gap-3 bg-deepnavy hover:bg-leadgray text-offwhite px-10 py-5 text-sm uppercase tracking-widest font-semibold transition-all group shadow-xl"
              >
                Solicitar Análise de Caso
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          
          <div className="relative aspect-video bg-deepnavy/5 rounded-sm overflow-hidden border border-drygold/10 shadow-2xl group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-20 h-20 bg-drygold/90 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500">
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>
            </div>
            <Image 
              src="/sala.png" 
              alt="Ambiente de Avaliação Neuropsicológica" 
              fill 
              className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const PainSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-8">
          <span className="uppercase tracking-widest text-drygold text-xs font-semibold">O Custo do Achismo</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deepnavy leading-snug">
            Tratamentos sem diagnóstico preciso são apenas tentativas dispendiosas.
          </h2>
          <div className="w-20 h-px bg-drygold/40 mx-auto"></div>
          <div className="grid md:grid-cols-2 gap-12 text-left mt-8">
            <p className="text-lg text-leadgray/70 leading-relaxed font-light">
              O desgaste emocional e financeiro de intervenções baseadas em suposições pode ser devastador. Laudos superficiais e diagnósticos genéricos não apenas desperdiçam tempo precioso, mas podem mascarar necessidades reais de desenvolvimento.
            </p>
            <p className="text-lg text-leadgray/70 leading-relaxed font-light">
              Na Clínica Recriar, recusamos o "talvez". Oferecemos a precisão necessária para que pais, médicos e pacientes possam traçar estratégias de intervenção seguras, interrompendo o ciclo de incertezas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const MethodologySection = () => {
  const steps = [
    {
      icon: <MessageSquareQuote className="w-6 h-6" />,
      title: "Entrevista inicial",
      description: "Coleta aprofundada de história clínica, queixas, histórico familiar e aspectos comportamentais para compreensão do contexto global."
    },
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "Testes e instrumentos",
      description: "Aplicação de testes neuropsicológicos padronizados para avaliar memória, atenção, linguagem e funções executivas com rigor científico."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Observação clínica",
      description: "Registro rigoroso do comportamento, reações e foco durante as tarefas, captando nuances que os testes quantitativos não alcançam."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Análise dos resultados",
      description: "Cruzamento técnico dos testes com a entrevista inicial para identificar padrões de desempenho e possíveis déficits cognitivos."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Devolutiva",
      description: "Sessão de entrega do feedback detalhado, conclusões clínicas e recomendações estratégicas para uma intervenção eficaz."
    }
  ];

  return (
    <section className="py-24 bg-offwhite">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <span className="uppercase tracking-widest text-drygold text-xs font-semibold block mb-4">O Rigor Técnico</span>
          <h2 className="font-serif text-3xl md:text-4xl text-deepnavy">Metodologia Científica em 5 Etapas</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col gap-4 p-6 bg-white border border-drygold/5 hover:border-drygold/20 transition-all shadow-sm">
              <div className="text-drygold bg-drygold/5 w-12 h-12 flex items-center justify-center rounded-sm">
                {step.icon}
              </div>
              <span className="text-xs font-bold text-drygold/40">0{index + 1}</span>
              <h3 className="font-serif text-xl text-deepnavy leading-tight">{step.title}</h3>
              <p className="text-sm text-leadgray/70 leading-relaxed font-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AuthoritySection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] lg:aspect-square bg-offwhite rounded-sm overflow-hidden border border-drygold/10">
            <Image 
              src="/luciana.png" 
              alt="Luciana Nogueira - Psicóloga com dupla formação avançada em Neuropsicologia" 
              fill 
              className="object-cover object-top"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deepnavy/80 to-transparent p-8 text-white">
              <p className="font-serif text-2xl">Luciana Nogueira da Silva</p>
              <p className="text-sm uppercase tracking-widest opacity-80 font-light">CRP 08/21535</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-8">
            <span className="uppercase tracking-widest text-drygold text-xs font-semibold">Autoridade Clínica</span>
            <h2 className="font-serif text-3xl md:text-4xl text-deepnavy leading-tight">
              A expertise necessária para diagnósticos complexos.
            </h2>
            <p className="text-lg text-leadgray/80 leading-relaxed font-light">
              Conduzido pela Dra. Luciana Nogueira, psicóloga com dupla formação avançada em Neuropsicologia, este serviço une o acolhimento clínico à precisão da neurociência aplicada.
            </p>
            
            <ul className="flex flex-col gap-4">
              {[
                "Psicóloga com dupla formação avançada em Neuropsicologia.",
                "Atuação como supervisora clínica para outros profissionais da área.",
                "Histórico de mais de 250 avaliações validadas por médicos especialistas.",
                "Olhar neuropsicológico profundo focado na individualidade de cada caso."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-drygold shrink-0"></div>
                  <span className="text-leadgray/80 font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const AudienceFilterSection = () => {
  return (
    <section className="py-24 bg-deepnavy text-offwhite">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Critérios de Alinhamento</h2>
          <p className="text-offwhite/60 font-light tracking-wide uppercase text-xs">Para quem prioriza a excelência técnica</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-white/5 p-10 rounded-sm border border-white/10">
            <h3 className="font-serif text-2xl mb-8 flex items-center gap-3 text-drygold">
              <CheckCircle2 className="w-6 h-6" />
              Para quem é:
            </h3>
            <ul className="flex flex-col gap-5">
              {[
                "Busca respostas definitivas baseadas em evidências.",
                "Exige precisão técnica e rigor metodológico.",
                "Valoriza a profundidade analítica em vez de laudos rápidos.",
                "Deseja um mapa claro para o tratamento ou desenvolvimento.",
                "Recusa o amadorismo e soluções de prateleira."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-offwhite/80 font-light">
                  <span className="text-drygold mt-1 shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white/5 p-10 rounded-sm border border-white/10 opacity-70">
            <h3 className="font-serif text-2xl mb-8 flex items-center gap-3 text-leadgray-300">
              <XCircle className="w-6 h-6 text-red-400/50" />
              Para quem NÃO é:
            </h3>
            <ul className="flex flex-col gap-5">
              {[
                "Busca apenas um laudo documental sem interesse na análise.",
                "Decide exclusivamente por preço, ignorando o rigor técnico.",
                "Tem pressa por resultados imediatos sem respeitar o tempo da ciência.",
                "Prefere avaliações genéricas e superficiais.",
                "Não está disposto a se envolver no processo de investigação."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-offwhite/50 font-light italic">
                  <span className="mt-1 shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "Quanto tempo dura o processo de avaliação?",
      answer: "A duração varia conforme a complexidade de cada caso, mas geralmente leva de 8 a 12 sessões. Cada sessão tem uma duração média de 60 minutos, garantindo o tempo necessário para a aplicação rigorosa de testes e observação clínica."
    },
    {
      question: "Quais são as principais indicações para uma Avaliação Neuropsicológica?",
      answer: "As indicações primárias incluem dificuldades de aprendizado, suspeitas de TDAH ou TEA, problemas de memória, traumas cranianos, doenças neurológicas, declínio cognitivo em idosos e necessidade de mapeamento para alta performance acadêmica ou profissional."
    },
    {
      question: "O que recebo ao final do processo?",
      answer: "Você recebe um Laudo Neuropsicológico completo e detalhado, contendo o perfil cognitivo, pontos fortes e fragilidades, além de recomendações estratégicas e encaminhamentos para tratamentos ou intervenções específicas."
    },
    {
      question: "A avaliação é realizada apenas em crianças?",
      answer: "Não. Realizamos avaliações em todas as faixas etárias: crianças (a partir de idade escolar), adolescentes, adultos e idosos, adaptando os instrumentos e a metodologia para cada fase da vida."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="uppercase tracking-widest text-drygold text-xs font-semibold block mb-4">Dúvidas Frequentes</span>
            <h2 className="font-serif text-3xl md:text-4xl text-deepnavy">Esclarecimentos Importantes</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-drygold/10 rounded-sm">
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-offwhite transition-colors"
                >
                  <span className="font-serif text-lg text-deepnavy">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-drygold transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-height-1000 p-6 pt-0 opacity-100" : "max-height-0 p-0 opacity-0"}`} style={{ maxHeight: openIndex === index ? '500px' : '0' }}>
                  <p className="text-leadgray/70 font-light leading-relaxed border-t border-drygold/5 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FooterCTA = () => {
  const { openModal } = useLead();
  const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5541997742133&text=Olá, gostaria de informações sobre Avaliação Neuropsicológica&type=phone_number&app_absent=0";

  return (
    <section className="py-24 bg-offwhite border-t border-drygold/10">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto flex flex-col gap-8">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deepnavy leading-tight">
            Priorize a clareza. Interrompa o ciclo de incertezas agora.
          </h2>
          <p className="text-lg text-leadgray/80 font-light">
            Devido à alta complexidade das análises, mantemos um limite mensal restrito de pacientes para garantir a excelência de cada laudo. Garanta sua vaga para este mês.
          </p>
          <div className="pt-4">
            <button 
              onClick={() => openModal(WHATSAPP_URL)}
              className="inline-flex items-center justify-center gap-3 bg-drygold hover:bg-drygold-hover text-offwhite px-12 py-5 text-sm uppercase tracking-[0.2em] font-bold transition-all shadow-lg hover:shadow-xl"
            >
              Solicitar Análise de Caso
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Page Main ---

export default function AvaliacaoNeuropsicologica() {
  return (
    <>
      <LPHeader />
      <main className="min-h-screen">
        <HeroSection />
        <PainSection />
        <MethodologySection />
        <AuthoritySection />
        <AudienceFilterSection />
        <FAQSection />
        <FooterCTA />
      </main>
      <LPSimplifiedFooter />
      <WhatsAppFloatingButton />
    </>
  );
}
