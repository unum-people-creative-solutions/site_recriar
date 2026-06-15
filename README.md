
## 📚 Documentação Oficial (Arquitetura e TDDs)

**Nota Importante:** A documentação técnica detalhada, as regras de IA (Harness), os Technical Design Documents (TDDs) e o log de estado contínuo deste projeto **não ficam armazenados neste repositório**. 

Para obter o contexto arquitetural completo e consultar o *Single Source of Truth* do ecossistema, acesse o repositório centralizado de documentação:
👉 **[unum-people-docs](https://github.com/unum-people-creative-solutions/unum-people-docs.git)**

# Centro Recriar - Clínica de Psicologia e Saúde

Site institucional de alto padrão para a **Clínica Recriar**, localizada em Curitiba. Focado em conversão para avaliações neuropsicológicas e psicoterapia especializada.

## 🚀 Tecnologias

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Ícones**: [Lucide React](https://lucide.dev/)
- **Animações**: Tailwind Animations & Transições nativas

## 🎯 Funcionalidades Principais

- **SEO Avançado**:
  - Metadados dinâmicos e tags OpenGraph/Twitter.
  - Dados estruturados JSON-LD (MedicalBusiness) para SEO Local.
  - Geração automática de `sitemap.xml` e `robots.txt`.
- **Captura de Leads (CRM Integration)**:
  - Interceptação de todos os links de WhatsApp por um Modal de Pré-Agendamento.
  - Coleta de Nome, E-mail e Telefone.
  - Rastreamento automático de origem (UTMs, GCLID, FBCLID, Referrer).
  - Integração via API Gateway para ingestão de leads no CRM.
- **Rastreamento de Conversões**:
  - Integração nativa com Google Ads (Gtag).
  - Disparo de eventos de conversão no momento da submissão do formulário.
- **Interface Premium**:
  - Design minimalista e sofisticado.
  - Responsividade total.
  - Menu flutuante e scroll suave.

## 🛠️ Configuração

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz com as seguintes chaves:

```env
NEXT_PUBLIC_API_GATEWAY_URL=https://seu-api-gateway.com
NEXT_PUBLIC_API_KEY=sua_chave_de_api_aqui
```

### Desenvolvimento

```bash
npm install
npm run dev
```

## 📂 Estrutura de Pastas

- `src/app`: Rotas e layouts da aplicação.
- `src/components`: Componentes de interface (Hero, Services, Team, LeadModal, etc).
- `src/context`: Gerenciamento de estado (LeadContext).
- `src/lib`: Lógica de integração e utilitários (CRM API).
- `public`: Ativos estáticos (Logos e Imagens da Clínica).

---
Desenvolvido com foco em performance, acessibilidade e conversão.
