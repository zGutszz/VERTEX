# Vertex — Site institucional

Site institucional premium da Vertex, desenvolvido para apresentar os serviços de tecnologia, marketing e crescimento com uma experiência visual responsiva e preparada para demonstrações comerciais.

## Tecnologias

- React 19 + TypeScript
- Vite
- Tailwind CSS 4
- Framer Motion
- Lucide React
- SVG e CSS para gráficos e mockups visuais

## Como executar

```bash
npm install
npm run dev
```

O Vite exibirá o endereço local, normalmente `http://localhost:5173`.

Para validar e gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Publicação na Vercel

1. Importe o repositório na Vercel.
2. Selecione o preset **Vite**.
3. Use `npm run build` como comando de build e `dist` como diretório de saída.
4. Publique. Não são necessárias variáveis de ambiente ou configurações adicionais.

## Onde editar

- Contatos, navegação, serviços, projetos, processo e públicos: `src/data/siteData.ts`
- Textos específicos de cada seção: `src/components/sections/`
- Estilos globais e responsivos: `src/styles/globals.css`
- Logo: substitua `public/logo-vertex.png` mantendo o nome e a proporção da arte oficial
- Favicon: `public/favicon.png`
- Imagem de compartilhamento: `public/og-vertex.png` (1200 × 630 px)

> A marca incluída no repositório é uma composição provisória baseada no briefing. Substitua os três arquivos de marca pela arte oficial assim que ela estiver disponível.

## Estrutura

```text
src/
├── components/
│   ├── common/    # Elementos reutilizáveis
│   ├── layout/    # Header, footer e WhatsApp
│   ├── sections/  # Seções da página
│   └── visual/    # Dashboard, gráficos e mockups
├── data/          # Conteúdo centralizado
├── hooks/         # Preferências e comportamento
├── pages/         # Composição da página
├── styles/        # CSS global e responsivo
└── utils/         # Link e mensagem do WhatsApp
```

O formulário não envia nem armazena dados: ele valida os campos no navegador e abre uma mensagem preenchida diretamente no WhatsApp.
