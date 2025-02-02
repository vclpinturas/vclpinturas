import ServiceSection from "@/components/ServiceSection";
import image from "../../../../public/images/wall-painted.jpeg";
import ProductsList from "@/components/ProjectsList";
import Link from "next/link";

export default function Servicos() {
  return (
    <main
      className="min-h-screen bg-cover bg-center pt-20 sm:pt-28 bg-gray-200">
      <section className="text-center mb-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Nossos Serviços</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Oferecemos uma ampla gama de serviços de pintura para transformar o seu espaço. Com uma equipe experiente, garantimos qualidade e acabamento impecável em cada projeto.
        </p>
      </section>

      <ServiceSection />

      <ProductsList />

      <section className="bg-blue-600 text-center text-white py-16 px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Transforme seu ambiente hoje mesmo</h2>
        <p className="text-md sm:text-lg mb-6 max-w-2xl mx-auto">
          Entre em contato para obter um orçamento e transformar sua casa ou estabelecimento com a nossa pintura de qualidade.
        </p>
        <Link
          href="https://wa.me/5511999999999"
          aria-label="Solicite um orçamento para pintura"
          className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Solicite um Orçamento
        </Link>
      </section>
    </main>
  );
}