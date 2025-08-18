# ITÁGEO Ambiental - Website Institucional

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/pedro-zucchi90s-projects/v0-itageo)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Styled with Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

## Sobre o Projeto

Website institucional da **ITÁGEO Ambiental**, empresa especializada em consultoria ambiental sustentável. O site apresenta os serviços da empresa, cases de sucesso, informações institucionais e canais de contato, desenvolvido com foco em sustentabilidade e inovação ambiental.

### Objetivos
- Apresentar a empresa e seus valores
- Destacar os serviços de consultoria ambiental
- Exibir cases de sucesso e projetos realizados
- Facilitar o contato com clientes e parceiros
- Promover a imagem de sustentabilidade e inovação

## Tecnologias Utilizadas

- **[Next.js 14](https://nextjs.org/)** - Framework React com App Router
- **[React 18](https://reactjs.org/)** - Biblioteca para interfaces de usuário
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[Shadcn/ui](https://ui.shadcn.com/)** - Componentes de UI reutilizáveis
- **[Lucide React](https://lucide.dev/)** - Ícones SVG otimizados
- **[Google Fonts](https://fonts.google.com/)** - Tipografia (Montserrat + Open Sans)

## Instalação e Configuração

### Pré-requisitos
- Node.js 18+ 
- npm, yarn ou pnpm

### 1. Clonar o Repositório
\`\`\`bash
git clone https://github.com/pedro-zucchi90/ITAGEO-Site.git
cd ITAGEO-Site
\`\`\`

### 2. Instalar Dependências
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 3. Executar em Desenvolvimento
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

O projeto estará disponível em [http://localhost:3000](http://localhost:3000)

### 4. Build para Produção
```bash
npm run build
npm start
```

## Estrutura do Projeto

```
ITAGEO-Site/
├── app/                          # App Router (Next.js 14)
│   ├── cases/                    # Página de Cases de Sucesso
│   │   └── page.tsx
│   ├── contato/                  # Página de Contato
│   │   └── page.tsx
│   ├── sobre/                    # Páginas Institucionais
│   │   ├── localizacao/
│   │   ├── proposito/
│   │   ├── quem-somos/
│   │   ├── servicos/
│   │   └── page.tsx
│   ├── solucoes/                 # Página de Soluções
│   │   └── page.tsx
│   ├── globals.css               # Estilos globais e Tailwind
│   ├── layout.tsx                # Layout raiz da aplicação
│   ├── loading.tsx               # Componente de loading
│   └── page.tsx                  # Página inicial (Homepage)
├── components/                   # Componentes reutilizáveis
│   ├── ui/                       # Componentes base (shadcn/ui)
│   │   ├── accordion.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── navigation-menu.tsx
│   │   ├── select.tsx
│   │   ├── textarea.tsx
│   │   └── ...
│   ├── footer.tsx                # Rodapé do site
│   ├── header.tsx                # Cabeçalho e navegação
│   └── theme-provider.tsx        # Provedor de tema
├── hooks/                        # Hooks customizados
│   ├── use-mobile.ts             # Hook para detecção mobile
│   └── use-toast.ts              # Hook para notificações
├── lib/                          # Utilitários e configurações
│   └── utils.ts                  # Funções utilitárias (cn, etc.)
├── public/                       # Arquivos estáticos
│   ├── images/                   # Imagens do projeto
│   └── favicon.ico
├── scripts/                      # Scripts de automação
├── .gitignore                    # Arquivos ignorados pelo Git
├── next.config.mjs               # Configuração do Next.js
├── package.json                  # Dependências e scripts
├── README.md                     # Documentação do projeto
├── tailwind.config.js            # Configuração do Tailwind CSS
└── tsconfig.json                 # Configuração do TypeScript
```

## Funcionalidades

### Página Inicial
- **Hero Section**: Apresentação principal com call-to-actions
- **Estatísticas**: Métricas de projetos e experiência
- **Quem Somos**: Informações institucionais da empresa
- **Valores**: Pilares e princípios da ITÁGEO
- **Missão e Visão**: Propósito e objetivos da empresa
- **Nossas Soluções**: Overview dos serviços oferecidos
- **Processo**: Metodologia de trabalho em 4 etapas

### Página de Contato
- **Fale Conosco**: Informações de contato direto
- **Trabalhe Conosco**: Formulário para envio de currículos
- **Ouvidoria**: Canal de denúncias e reclamações
- **Localização**: Integração com Google Maps
- **Informações**: Endereço, telefone e horários

### Páginas Institucionais (/sobre)
- **Quem Somos**: História e valores da empresa
- **Nosso Propósito**: Missão, visão e pilares
- **Serviços**: Detalhamento dos serviços oferecidos
- **Localização**: Informações de endereço e atuação

### Página de Soluções
- **Licenciamento Ambiental**: Processos e documentação
- **Consultoria e Assessoria**: Suporte especializado
- **Estudos Ambientais**: Análises e relatórios técnicos
- **Gestão de Resíduos**: Planos e implementação
- **Monitoramento Ambiental**: Acompanhamento contínuo

### Página de Cases
- **Portfolio**: Projetos realizados com sucesso
- **Estudos de Caso**: Detalhamento de soluções implementadas
- **Resultados**: Métricas e impactos alcançados
- **Depoimentos**: Feedback de clientes atendidos

## Design System

### Cores Principais
- **Verde Primário**: `#22c55e` (Sustentabilidade)
- **Verde Escuro**: `#15803d` (Confiança)
- **Verde Claro**: `#86efac` (Inovação)
- **Cinza**: `#6b7280` (Neutralidade)
- **Branco/Preto**: Contraste e legibilidade

### Tipografia
- **Headings**: Montserrat (600, 700)
- **Body**: Open Sans (400, 500)
- **Hierarchy**: text-sm → text-base → text-lg → text-xl → text-2xl

### Componentes
- **Buttons**: Variações primary, secondary, outline
- **Cards**: Elevação sutil com hover effects
- **Forms**: Validação e feedback visual
- **Navigation**: Menu responsivo com dropdowns

## Deploy

### Vercel (Recomendado)
O projeto está configurado para deploy automático na Vercel:

1. Conecte o repositório à Vercel
2. Configure as variáveis de ambiente (se necessário)
3. Deploy automático a cada push na branch `main`

**URL de Produção**: [https://vercel.com/pedro-zucchi90s-projects/v0-itageo](https://vercel.com/pedro-zucchi90s-projects/v0-itageo)

### Outras Plataformas
O projeto também pode ser deployado em:
- Netlify
- AWS Amplify
- Railway
- Render

## Responsividade

O site é totalmente responsivo e otimizado para:
- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## Acessibilidade

- Contraste WCAG AA compliant
- Navegação por teclado
- Textos alternativos em imagens
- Estrutura semântica HTML5
- ARIA labels e roles

## Scripts Disponíveis

```bash
npm run dev          # Desenvolvimento local
npm run build        # Build para produção
npm run start        # Executar build de produção
npm run lint         # Verificar código com ESLint
npm run type-check   # Verificar tipos TypeScript
```

## Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto é propriedade da **ITÁGEO Ambiental**. Todos os direitos reservados.

## Contato

**ITÁGEO Ambiental**
- **Endereço**: Av. Tancredo Neves, 294 - Pioneiros, Itá - SC, 89760-000
- **Telefone**: (49) 3458-2055
- **Horário**: Segunda a Sexta, 8h às 12h e 13h30 às 18h

---

Desenvolvido com 💚 para um futuro mais sustentável
