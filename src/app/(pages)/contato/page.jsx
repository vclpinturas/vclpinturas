import { Mail, Phone, Send, MapPin } from "lucide-react";
import Link from "next/link";
import image from "../../../../public/images/wall-painted.jpeg";

export default function Servicos() {
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
              href="https://wa.me/5599999999999"
              target="_blank"
              className="flex items-center gap-3 bg-green-600 text-white py-3 px-6 rounded-lg font-medium text-md sm:text-lg hover:bg-green-700 transition-all w-full md:w-auto"
            >
              <Send size={22} /> Fale no WhatsApp
            </Link>

            <div className="flex flex-col gap-2">
              <Link
                href="tel:+5599999999999"
                className="flex items-center gap-3 text-gray-700 text-lg font-medium hover:underline"
              >
                <Phone size={22} /> (99) 99999-9999
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 w-full md:w-1/2 h-full p-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Nossa Localização</h2>
          <div className="h-full">
            <iframe
              className="w-full h-96 md:h-80 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11302.112482611378!2d-58.4431815!3d-34.6036844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccbdfbb117189%3A0x17c07e408cb8490!2sObelisco%20de%20Buenos%20Aires!5e0!3m2!1sen!2sbr!4v1672580521205!5m2!1sen!2sbr"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
