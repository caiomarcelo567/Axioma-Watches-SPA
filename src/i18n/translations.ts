export type Lang = 'pt' | 'en';

export interface Translations {
  nav: {
    about: string;
    videos: string;
    partnerships: string;
    contact: string;
  };
  hero: {
    description: string;
    tagline: string;
  };
  about: {
    label: string;
    headingLine1: string;
    headingHighlighted: string;
    body: string;
    imgAlt: string;
    pillars: Array<{ title: string; description: string }>;
  };
  promo: {
    instagram: { title: string; description: string; button: string };
    youtube: { title: string; description: string; button: string };
  };
  partnerships: {
    label: string;
    headingPart1: string;
    headingPart2: string;
    subtitle: string;
    couponLabel: string;
    copied: string;
    watchVideo: string;
    visitSite: string;
    tooltipCopy: string;
    tooltipCopied: string;
    brands: {
      impala: { description: string };
      terranova: { description: string };
    };
  };
  contact: {
    label: string;
    headingLine1: string;
    headingHighlighted: string;
    body: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    socialsLabel: string;
    socialsHeading: string;
    emailDirectLabel: string;
    copy: string;
    copiedTooltip: string;
    success: string;
    error: string;
    validation: {
      nameRequired: string;
      emailRequired: string;
      emailInvalid: string;
      messageRequired: string;
    };
  };
  footer: {
    by: string;
    tagline: string;
  };
  backToTop: string;
}

const translations: Record<Lang, Translations> = {
  pt: {
    nav: {
      about: 'Sobre',
      videos: 'Vídeos',
      partnerships: 'Parcerias',
      contact: 'Contato',
    },
    hero: {
      description: 'Espaço dedicado a boa relojoaria e compartilhamento constante sobre assuntos relacionados ao seguimento.',
      tagline: 'Agregar sempre. Mantendo a verdade nas informações apresentadas.',
    },
    about: {
      label: 'SOBRE O CANAL',
      headingLine1: 'O Universo',
      headingHighlighted: 'Axioma Watches',
      body: 'Criado por Claudio Vaz, o Axioma Watches é um canal voltado para o universo da relojoaria — onde relojoaria não é apenas sobre relógios, é criar histórias, amizades e conexões.',
      imgAlt: 'Relógio de pulso ao pôr do sol',
      pillars: [
        {
          title: 'Informação Verdadeira',
          description: 'Compromisso com a precisão e honestidade nas análises, reviews e informações apresentadas ao canal.',
        },
        {
          title: 'Agregar Sempre',
          description: 'Cada vídeo é pensado para trazer valor real ao entusiasta de relógios, seja iniciante ou colecionador experiente.',
        },
      ],
    },
    promo: {
      instagram: {
        title: 'Divulgação e Parceria',
        description: 'Alcance um público apaixonado pela boa relojoaria. O canal realiza divulgações no Instagram para marcas, lojas e lançamentos relacionados ao segmento com taxa negociável conforme o projeto.',
        button: 'Fale no Instagram',
      },
      youtube: {
        title: 'Reviews e Conteúdo',
        description: 'Reviews técnicos detalhados, comparativos e apresentações de produtos no canal do YouTube. Conteúdo legítimo e informativo para entusiastas, colecionadores e profissionais da área, taxa negociável.',
        button: 'Conheça o Canal',
      },
    },
    partnerships: {
      label: 'PARCERIAS',
      headingPart1: 'Trabalhos',
      headingPart2: 'Realizados',
      subtitle: 'Parcerias com marcas do segmento — use o cupom exclusivo para aproveitar condições especiais.',
      couponLabel: 'CUPOM',
      copied: 'COPIADO!',
      watchVideo: 'ASSISTIR AO VÍDEO',
      visitSite: 'VER SITE',
      tooltipCopy: 'Toque para copiar o cupom',
      tooltipCopied: 'Cupom copiado!',
      brands: {
        impala: {
          description: 'Review completo do relógio SPINNAKER modelo SP-5068-03 HULL — Uma marca Inglesa que produz modelos inspirados em elementos marinhos e náuticos.',
        },
        terranova: {
          description: 'Conteúdo especial em parceria com a Terranova Watches — Uma Micro Brand que despontou no cenário nacional em 2024 e vem conquistando o coração dos amantes da boa relojoaria.',
        },
      },
    },
    contact: {
      label: 'CONTATO',
      headingLine1: 'Fale com o',
      headingHighlighted: 'Canal',
      body: 'Tem uma dúvida, sugestão de pauta ou qualquer assunto sobre a boa relojoaria? Preencha o formulário, envie a mensagem e te responderemos em breve!',
      namePlaceholder: 'Nome',
      emailPlaceholder: 'Seu e-mail',
      messagePlaceholder: 'Mensagem',
      send: 'Enviar Mensagem',
      sending: 'Enviando...',
      socialsLabel: 'REDES SOCIAIS',
      socialsHeading: 'Nos acompanhe',
      emailDirectLabel: 'E-mail direto',
      copy: 'Copiar',
      copiedTooltip: 'Copiado!',
      success: 'Mensagem enviada com sucesso!',
      error: 'Erro ao enviar. Tente novamente ou use o e-mail direto.',
      validation: {
        nameRequired: 'Por favor, informe seu nome.',
        emailRequired: 'Por favor, informe seu e-mail.',
        emailInvalid: 'Informe um e-mail válido.',
        messageRequired: 'Por favor, escreva sua mensagem.',
      },
    },
    footer: {
      by: 'Por Claudio Vaz',
      tagline: 'Espaço voltado para a boa relojoaria sempre.',
    },
    backToTop: 'Voltar ao topo',
  },

  en: {
    nav: {
      about: 'About',
      videos: 'Videos',
      partnerships: 'Partnerships',
      contact: 'Contact',
    },
    hero: {
      description: 'A space dedicated to fine watchmaking and constant sharing of content related to the hobby.',
      tagline: 'Always adding value. Keeping truth in all information presented.',
    },
    about: {
      label: 'ABOUT THE CHANNEL',
      headingLine1: 'The',
      headingHighlighted: 'Axioma Watches Universe',
      body: 'Created by Claudio Vaz, Axioma Watches is a channel dedicated to the world of watchmaking — where watches are not just timepieces, but stories, friendships, and connections.',
      imgAlt: 'Wristwatch at sunset',
      pillars: [
        {
          title: 'True Information',
          description: 'Commitment to accuracy and honesty in all reviews, analyses, and information presented on the channel.',
        },
        {
          title: 'Always Adding Value',
          description: 'Every video is crafted to bring real value to watch enthusiasts, whether beginners or experienced collectors.',
        },
      ],
    },
    promo: {
      instagram: {
        title: 'Promotion & Partnership',
        description: 'Reach an audience passionate about fine watchmaking. The channel promotes brands, stores, and launches on Instagram with a negotiable fee based on the project.',
        button: 'Contact on Instagram',
      },
      youtube: {
        title: 'Reviews & Content',
        description: 'Detailed technical reviews, comparisons, and product presentations on the YouTube channel. Legitimate, informative content for enthusiasts, collectors, and industry professionals. Negotiable fee.',
        button: 'Visit the Channel',
      },
    },
    partnerships: {
      label: 'PARTNERSHIPS',
      headingPart1: 'Completed',
      headingPart2: 'Projects',
      subtitle: 'Partnerships with brands in the segment — use the exclusive coupon to enjoy special conditions.',
      couponLabel: 'COUPON',
      copied: 'COPIED!',
      watchVideo: 'WATCH THE VIDEO',
      visitSite: 'VISIT SITE',
      tooltipCopy: 'Tap to copy the coupon',
      tooltipCopied: 'Coupon copied!',
      brands: {
        impala: {
          description: 'Full review of the SPINNAKER watch model SP-5068-03 HULL — An English brand that produces models inspired by marine and nautical elements.',
        },
        terranova: {
          description: 'Special content in partnership with Terranova Watches — A Micro Brand that emerged on the national scene in 2024, winning the hearts of fine watchmaking enthusiasts.',
        },
      },
    },
    contact: {
      label: 'CONTACT',
      headingLine1: 'Talk to the',
      headingHighlighted: 'Channel',
      body: "Have a question, content suggestion, or anything related to fine watchmaking? Fill out the form, send your message, and we'll get back to you shortly!",
      namePlaceholder: 'Name',
      emailPlaceholder: 'Your e-mail',
      messagePlaceholder: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      socialsLabel: 'SOCIAL MEDIA',
      socialsHeading: 'Follow Us',
      emailDirectLabel: 'Direct e-mail',
      copy: 'Copy',
      copiedTooltip: 'Copied!',
      success: 'Message sent successfully!',
      error: 'Error sending. Please try again or use the direct email.',
      validation: {
        nameRequired: 'Please enter your name.',
        emailRequired: 'Please enter your email.',
        emailInvalid: 'Please enter a valid email.',
        messageRequired: 'Please write your message.',
      },
    },
    footer: {
      by: 'By Claudio Vaz',
      tagline: 'A space dedicated to fine watchmaking, always.',
    },
    backToTop: 'Back to top',
  },
};

export default translations;
