import Image from 'next/image';
import HeroIMG from '/public/images/hero-bg.jpeg';
import Link from 'next/link';
import ProductsList from '@/components/ProjectsList';

export const phoneNumber = "5517997575310"

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <section className="relative w-full h-[80vh] md:h-screen flex items-center justify-center text-white p-0">
        <Image
          src={HeroIMG}
          alt="Imagem de fundo com serviço de pintura residencial e comercial, mostrando profissionais pintando uma parede"
          priority
          className="object-cover w-full h-full"
        />

        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="absolute text-center px-6 max-w-3xl">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">
            Transforme Seu Ambiente com Pintura Residencial e Comercial de Qualidade
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8">
            Destaque cada detalhe com a perfeição que sua casa ou empresa merece. A VCL Pinturas é especializada em serviços de pintura de alta qualidade.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href={`https://wa.me/${phoneNumber}?text=Olá, gostaria de solicitar um orçamento para pintura`}
              target="_blank"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition w-72 max-w-xs sm:w-auto text-center"
            >
              Solicite um Orçamento
            </Link>
            <Link
              href="/servicos"
              className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-gray-800 transition w-72 max-w-xs sm:w-auto text-center text-white"
            >
              Veja Nossos Serviços
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 text-center w-full">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Quem Somos</h2>
        <p className="max-w-4xl mx-auto text-base md:text-lg text-gray-700">
          A VCL Pinturas é especializada em pintura residencial e comercial, com anos de experiência oferecendo serviços de alta qualidade. Se você busca profissionais que garantem um acabamento perfeito para sua casa ou empresa, você está no lugar certo. Oferecemos soluções para interiores e exteriores, com atenção a cada detalhe e compromisso com os prazos.
        </p>
      </section>

      <section className="py-16 text-center w-full">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">O que nossos clientes dizem</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="max-w-xs bg-gray-50 p-6 rounded-lg shadow-lg w-full sm:w-auto">
            <p className="italic text-gray-600">"Excelente trabalho! O serviço de pintura na minha residência ficou impecável e o ambiente renovado ficou incrível."</p>
            <p className="font-bold mt-4 text-gray-800">João Silva</p>
          </div>
          <div className="max-w-xs bg-gray-50 p-6 rounded-lg shadow-lg w-full sm:w-auto">
            <p className="italic text-gray-600">"Profissionalismo e qualidade. Super recomendo para serviços de pintura em ambientes comerciais também!"</p>
            <p className="font-bold mt-4 text-gray-800">Maria Oliveira</p>
          </div>
        </div>
      </section>

      <ProductsList demoMode />

      <section className="py-16 bg-blue-600 text-center text-white w-full">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Pronto para transformar seu ambiente?</h2>
        <p className="text-base md:text-lg mb-8">Solicite um orçamento agora mesmo para pintura residencial ou comercial e comece a transformação com quem entende do assunto!</p>
        <Link
          href={`https://wa.me/${phoneNumber}`}
          target="_blank"
          aria-label="Solicite um orçamento para pintura"
          className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Solicite um Orçamento
        </Link>
      </section>

    </main>
  );
}
