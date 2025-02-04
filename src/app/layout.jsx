import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import heroBG from "../../public/images/hero-bg.jpeg"
import GoogleTagManager from "@/components/GTM";
 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Serviços de Pintura Residencial e Comercial",
  description:
    "Oferecemos serviços profissionais de pintura para imóveis residenciais e comerciais, garantindo acabamento de qualidade e eficiência. Atendemos a diversas necessidades de pintura, tanto para ambientes internos quanto externos.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <GoogleTagManager />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="VCL Pinturas" />
        <meta name="keywords" content="pintura residencial, pintura comercial, pintura para empresas, serviços de pintura, pintura de paredes, pintura profissional" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 flex flex-col min-h-screen`}
      >
        <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=GTM-WMCW5PN5`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
        <Header />
        <main className="mx-auto flex-grow w-full">{children}</main>
      </body>
    </html>
  );
}

