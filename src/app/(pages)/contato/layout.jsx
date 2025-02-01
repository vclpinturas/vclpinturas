import Head from "next/head";

export default function ContatoLayout({ children }) {
  return (
    <>
      <Head>
        <title>Entre em Contato - Serviços de Pintura</title>
        <meta
          name="description"
          content="Entre em contato conosco para serviços de pintura residencial e comercial. Oferecemos orçamentos e atendimento pelo WhatsApp e telefone."
        />
        <meta name="keywords" content="pintura, contato, serviços, WhatsApp, telefone" />
        <meta property="og:title" content="Entre em Contato - Serviços de Pintura" />
        <meta
          property="og:description"
          content="Entre em contato conosco para serviços de pintura residencial e comercial. Oferecemos orçamentos e atendimento pelo WhatsApp e telefone."
        />
        <meta property="og:image" content="/images/wall-painted.jpeg" />
        <meta property="og:url" content="https://seusite.com/contato" />
        <link rel="canonical" href="https://seusite.com/contato" />
        <script type="application/ld+json">
          {`
          {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Nome da Empresa",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+5599999999999",
              "contactType": "customer service",
              "areaServed": "BR",
              "availableLanguage": "Portuguese"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Endereço da empresa",
              "addressLocality": "Cidade",
              "addressCountry": "Brasil"
            }
          }
          `}
        </script>
      </Head>
      <div>{children}</div>
    </>
  );
}
