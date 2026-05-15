import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LeadProvider } from "@/context/LeadContext";
import { LeadModal } from "@/components/LeadModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Recriar | Avaliação Neuropsicológica e Psicoterapia em Curitiba",
  description: "Especialistas em Avaliação Neuropsicológica (TDAH, TEA), Psicoterapia Infantojuvenil e Adultos. Atendimento de excelência no Centro Cívico, Curitiba.",
  keywords: ["Neuropsicologia Curitiba", "Avaliação Neuropsicológica", "Psicólogo Curitiba", "TDAH", "TEA", "Psicoterapia", "Saúde Mental"],
  authors: [{ name: "Recriar Psicologia" }],
  creator: "Recriar Psicologia",
  publisher: "Recriar Psicologia",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Recriar | Avaliação Neuropsicológica e Psicoterapia em Curitiba",
    description: "Referência em Neuropsicologia e Saúde Mental. Diagnóstico preciso e tratamento especializado no Centro Cívico.",
    url: "https://centrorecriar.com.br",
    siteName: "Recriar Psicologia",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Recriar Psicologia e Neuropsicologia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recriar | Avaliação Neuropsicológica e Psicoterapia em Curitiba",
    description: "Especialistas em Avaliação Neuropsicológica e Psicoterapia no Centro Cívico, Curitiba.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Recriar Psicologia e Saúde",
    "image": "https://centrorecriar.com.br/logo.png",
    "@id": "https://centrorecriar.com.br",
    "url": "https://centrorecriar.com.br",
    "telephone": "+5541997742133",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Cândido de Abreu, 526 - Torre B, Centro Cívico",
      "addressLocality": "Curitiba",
      "addressRegion": "PR",
      "postalCode": "80530-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -25.4172,
      "longitude": -49.2691
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://instagram.com/neuropsirecriar"
    ]
  };

  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18082531759"
        />
        <Script
          id="google-ads-tag"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag("js", new Date());
            gtag("config", "AW-18082531759", {
              'allow_enhanced_conversions': true
            });

            // Função global para reportar conversões de forma padronizada
            window.gtag_report_conversion = function(url, userData) {
              const callback = function () {
                if (typeof(url) != 'undefined' && url !== null) {
                  window.open(url, '_blank', 'noopener,noreferrer');
                }
              };
              
              const conversionData = {
                'send_to': 'AW-18082531759/MOw4CLnhqJocEK-Ttq5D',
                'event_callback': callback
              };

              // Enhanced Conversions - Envia dados do usuário se disponíveis
              if (userData) {
                gtag('set', 'user_data', {
                  'email': userData.email,
                  'phone_number': userData.phone
                });
              }

              gtag('event', 'conversion', conversionData);
              return false;
            };
          `}
        </Script>
        <LeadProvider>
          {children}
          <LeadModal />
        </LeadProvider>
      </body>
    </html>
  );
}
