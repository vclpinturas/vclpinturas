import Image from "next/image";
import image from "../../../../public/images/home-hero-bg.jpeg"

export default function Servicos() {
  return (
    <main className="min-h-screen bg-background pt-20 sm:pt-28">
      <section className="text-center mb-16">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Nossos Serviços</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Oferecemos uma ampla gama de serviços de pintura para transformar o seu espaço. Com uma equipe experiente, garantimos qualidade e acabamento impecável em cada projeto.
        </p>
      </section>

      <section className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] py-8 gap-8">
        <div className="bg-gray-800 text-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="h-48 bg-gray-600 rounded-lg mb-4">
            <Image src={image} alt="Pintura Residencial" className="object-cover w-full h-full rounded-lg" />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Pintura Residencial</h2>
          <p className="text-gray-300">
            Transforme sua casa com pinturas internas e externas de alta qualidade, deixando o ambiente mais agradável e acolhedor.
          </p>
        </div>

        <div className="bg-gray-800 text-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="h-48 bg-gray-600 rounded-lg mb-4">
            <Image src={image} alt="Pintura Comercial" className="object-cover w-full h-full rounded-lg" />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Pintura Comercial</h2>
          <p className="text-gray-300">
            Dê uma nova cara para o seu estabelecimento comercial com serviços de pintura especializados para lojas e escritórios.
          </p>
        </div>

        <div className="bg-gray-800 text-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="h-48 bg-gray-600 rounded-lg mb-4">
            <Image src={image} alt="Revestimentos Decorativos" className="object-cover w-full h-full rounded-lg" />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Revestimentos Decorativos</h2>
          <p className="text-gray-300">
            Adicione um toque especial aos seus ambientes com revestimentos decorativos e acabamentos exclusivos.
          </p>
        </div>

        <div className="bg-gray-800 text-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="h-48 bg-gray-600 rounded-lg mb-4">
            <Image src={image} alt="Repintura e Retoques" className="object-cover w-full h-full rounded-lg" />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Repintura e Retoques</h2>
          <p className="text-gray-300">
            Faça sua pintura durar mais com repinturas e retoques que mantêm seu ambiente com aparência sempre nova.
          </p>
        </div>
      </section>

      <section className="bg-blue-600 text-center text-white py-16 px-6">
        <h2 className="text-3xl font-semibold mb-4">Transforme seu ambiente hoje mesmo</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Entre em contato para obter um orçamento e transformar sua casa ou estabelecimento com a nossa pintura de qualidade.
        </p>
        <a
          href="https://wa.me/5511999999999"
          className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Solicite um Orçamento
        </a>
      </section>
    </main>
  );
}