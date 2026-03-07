# Axioma Watches

Site oficial do canal **Axioma Watches**, de **Claudio Vaz** — canal voltado para a relojoaria quartz e mecânica automática.

Este projeto foi desenvolvido por mim para o meu pai, Claudio Vaz, criador do canal. Trata-se de uma SPA (Single Page Application), um único arquivo HTML que carrega toda a aplicação no navegador, sem recarregamento de página ao navegar entre as seções.

**Links do canal:**

- YouTube: https://www.youtube.com/@axiomawatches
- Instagram: https://www.instagram.com/axiomawatcheschannel
- E-mail: cmvaz2010@gmail.com
- Meu e-mai: caiomarcelo567@hotmail.com
---

## Tecnologias

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 7](https://vite.dev/)
- [Material UI v7](https://mui.com/)
- [EmailJS](https://www.emailjs.com/) — envio de e-mail direto do frontend, sem backend
- Fontes: Playfair Display + Inter (Google Fonts)

---

## Rodando localmente

Pré-requisitos: [Node.js](https://nodejs.org/) 18 ou superior.

```bash
# Instale as dependências (apenas na primeira vez)
npm install

# Inicie o servidor de desenvolvimento
npm start
```

Acesse **http://localhost:5173** no navegador.

---

## Variáveis de ambiente (opcional)

O formulário de contato usa EmailJS para enviar mensagens. Esta etapa é opcional — o site funciona normalmente sem ela, mas o formulário só enviará e-mails de verdade após a configuração.

Crie um arquivo chamado `.env` na raiz do projeto com o seguinte conteúdo:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxx
```

### Como obter as credenciais do EmailJS

1. Crie uma conta gratuita em [emailjs.com](https://www.emailjs.com) (200 e-mails/mês no plano gratuito)
2. Em **Email Services**, conecte seu Gmail ou outro provedor
3. Em **Email Templates**, crie um template com as variáveis abaixo no corpo do e-mail:

```
Nome: {{from_name}}
E-mail: {{from_email}}

{{message}}
```

4. Copie o **Service ID**, **Template ID** e **Public Key** (em Account > General) para o `.env`

---

## Personalizações

### Adicionar a logo

No arquivo `src/components/Hero.tsx`, localize o bloco do placeholder de logo e substitua pelo seu `<img>`:

```tsx
<Box sx={{ mb: 4 }}>
  <img src="/logo.png" alt="Axioma Watches" style={{ width: 60, height: 60, borderRadius: '50%' }} />
</Box>
```

Coloque o arquivo da logo dentro da pasta `public/`.

### Atualizar o vídeo em destaque

No arquivo `src/components/Videos.tsx`, edite a constante no topo:

```ts
const FEATURED_VIDEO_ID = 'abc123XYZ';
```

O ID é a parte após `?v=` na URL do YouTube. Por exemplo, em `https://www.youtube.com/watch?v=abc123XYZ`, o ID é `abc123XYZ`.

---

## Build

```bash
# Gera os arquivos estáticos na pasta dist/
npm run build

# Testa a build localmente antes de subir
npm run preview
```
---

Desenvolvido por **Caio Vaz** — Desenvolvedor Front End Junior.

# Axioma-Watches-SPA
Este projeto foi desenvolvido por mim para o meu pai, Claudio Vaz, criador do canal. Trata-se de uma SPA (Single Page Application), um único arquivo HTML que carrega toda a aplicação no navegador, sem recarregamento de página ao navegar entre as seções.
