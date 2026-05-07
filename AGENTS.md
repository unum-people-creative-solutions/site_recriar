# Centro Recriar - Guia do Agente

Este arquivo contém as diretrizes fundamentais para o desenvolvimento e manutenção do site da Clínica Recriar. **Agente: Leia este arquivo sempre que iniciar uma sessão ou após comandos de compressão de contexto.**

## 🎯 Contexto do Projeto
Site institucional de alto padrão para a Clínica Recriar, focado em conversão para avaliações neuropsicológicas e psicoterapia. O diferencial técnico é a captura inteligente de leads e integração com o CRM Unum People.

## 🏗️ Arquitetura e Componentes
- **Framework**: Next.js 15 (App Router).
- **Estilização**: Tailwind CSS 4.
- **Captura de Leads**: `LeadModal` (intercepta links de WhatsApp).
- **Integração**: Lógica de ingestão em `src/lib/crm.ts` enviando dados para o API Gateway via `X-API-Key`.

## 🛠️ Padrões de Desenvolvimento & Segurança
- **Rastreamento**: É mandatório capturar GCLID e UTMs da URL e persistir no `LeadContext` para envio ao CRM.
- **SEO**: Manter dados estruturados JSON-LD (MedicalBusiness) atualizados.
- **Performance**: Utilizar `next/image` para todas as fotos da clínica.
- **Segurança**: As chaves de API (`NEXT_PUBLIC_API_KEY`) devem ser mantidas no `.env.local` e nunca expostas em código estático.

### 🛡️ Protocolo de Engenharia Defensiva
- **Fluxo de Conversão**: Qualquer alteração nos botões de WhatsApp deve garantir que o `LeadModal` continue sendo disparado antes do redirecionamento.
- **Validação Visual**: Manter a estética minimalista e profissional (Cores da Clínica).

## 🛡️ Diretrizes LGPD & Privacidade
- **Transparência**: O formulário de lead deve informar que os dados serão utilizados para contato profissional.

## 🧠 Persistência de Contexto (Context Anchor)
- **Recuperação**: Execute `cat AGENTS.md` para se reorientar.
- **Integração**: Consulte `CRM_INTEGRATION.md` para detalhes do payload enviado à API.

## 📝 Comandos Úteis
- `npm run dev`: Ambiente de desenvolvimento.
- `npm run build`: Build de produção.
- `npm run lint`: Verificação de padrões.
