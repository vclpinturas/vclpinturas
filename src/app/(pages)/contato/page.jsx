import { Phone, Send } from "lucide-react";
import Link from "next/link";
import image from "../../../../public/images/wall-painted.jpeg";
import { phoneNumber } from "@/app/page";

export default function Contato() {
  return (
    <main
      className="min-h-screen flex items-center justify-center pt-[60px] md:p-4"
      style={{ backgroundImage: `url(${image.src})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
    >
      <div className="w-full h-full flex-grow max-w-6xl bg-white shadow-xl md:rounded-2xl p-4 flex flex-col md:flex-row gap-12 md:h-full">
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Entre em Contato</h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Estamos prontos para atender você. Escolha o melhor canal para falar conosco.
          </p>

          <div className="space-y-4">
            <Link
              href={`https://wa.me/${phoneNumber}?text=Olá, gostaria de solicitar um orçamento para pintura`}
              target="_blank"
              className="flex items-center gap-3 bg-green-600 text-white py-3 px-6 rounded-lg font-medium text-md sm:text-lg hover:bg-green-700 transition-all w-full md:w-auto"
            >
              <Send size={22} /> Fale no WhatsApp
            </Link>

            <div className="flex flex-col gap-2">
              <Link
                href={`tel:+${phoneNumber}`}
                target="_blank"
                className="flex items-center gap-3 text-gray-700 text-lg font-medium hover:underline"
              >
                <Phone size={22} /> +55 (17) 99757-5310
              </Link>
            </div>
          </div>

          <div className="space-y-4 mt-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nossa Localização</h2>
            <p className="text-gray-600 mb-4">
              <strong>R. Marajó, N° 1258 - Vila Virginia, Ribeirão Preto - SP</strong><br />
              CEP: <strong>14030-500</strong>. <br /> Acesse nosso perfil no Google para mais detalhes:
              <Link
                href="https://g.co/kgs/Ftm2ykh"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Ver no Google Maps
              </Link>
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-full p-4">
          <div className="h-full">
            <iframe
              className="w-full h-96 md:h-80 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22937.84522005369!2d-47.8271478!3d-21.1742541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b993bb8031ec57%3A0xa5d11f60bc2c0847!2sR.%20Maraj%C3%B3%2C%20%201258%20-%20Vila%20Virginia%2C%20Ribeir%C3%A3o%20Preto%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1672568813202!5m2!1spt-BR!2sbr&zoom=14"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
