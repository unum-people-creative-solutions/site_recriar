import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Recriar Psicologia | Clínica de Alto Padrão em Curitiba",
  description: "Avaliação Neuropsicológica e Psicoterapia de excelência no Centro Cívico, Curitiba. Profissionais especializadas em saúde mental.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-offwhite text-leadgray font-sans flex flex-col">
        {children}
      </body>
    </html>
  );
}
