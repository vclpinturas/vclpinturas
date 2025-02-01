import Image from 'next/image';
import HeroIMG from '/public/images/hero-bg.jpeg';
import Link from 'next/link';
import ProductsList from '@/components/ProjectsList';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <section className="relative w-full h-[80vh] md:h-screen flex items-center justify-center text-white px-4">
        <Image
          src={HeroIMG}
          layout="fill"
          objectFit="cover"
          alt="hero background"
          priority
        />
        <div className="absolute text-center px-6 max-w-2xl">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Transforme Seu Ambiente com Pinturas de Qualidade
          </h1>
          <p className="text-base md:text-lg mb-6">
            Destaque cada detalhe com a perfeição que sua casa ou empresa merece.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="https://wa.me/5586995407002?text=Olá, gostaria de solicitar um orçamento para pintura"
              target="_blank"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition w-full sm:w-auto text-center"
            >
              Faça um orçamento
            </Link>
            <Link
              href="/servicos"
              className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-gray-800 transition w-full sm:w-auto text-center text-white"
            >
              Veja nossos trabalhos
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 text-center w-full">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Quem Somos</h2>
        <p className="max-w-4xl mx-auto text-base md:text-lg text-gray-700">
          Somos uma equipe apaixonada por transformar ambientes! Com anos de experiência em pintura residencial, comercial e automotiva, oferecemos qualidade, confiança e acabamento perfeito.
        </p>
      </section>

      <section className="py-16 text-center w-full">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">O que nossos clientes dizem</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="max-w-xs bg-gray-50 p-6 rounded-lg shadow-lg w-full sm:w-auto">
            <p className="italic text-gray-600">"Excelente trabalho! O serviço foi impecável e o ambiente ficou incrível."</p>
            <p className="font-bold mt-4 text-gray-800">João Silva</p>
          </div>
          <div className="max-w-xs bg-gray-50 p-6 rounded-lg shadow-lg w-full sm:w-auto">
            <p className="italic text-gray-600">"Profissionalismo e qualidade. Super recomendo para qualquer tipo de pintura."</p>
            <p className="font-bold mt-4 text-gray-800">Maria Oliveira</p>
          </div>
        </div>
      </section>

      <ProductsList demoMode />

      <section className="py-16 bg-blue-600 text-center text-white w-full">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Pronto para transformar seu ambiente?</h2>
        <p className="text-base md:text-lg mb-8">Solicite um orçamento agora mesmo e comece sua transformação com quem entende do assunto!</p>
        <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition w-full max-w-md">
          Solicite um Orçamento
        </button>
      </section>
    </main>
  );
}
