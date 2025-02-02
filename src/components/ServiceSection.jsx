import Image from "next/image";

const services = [
  {
    title: "Pintura Residencial",
    description:
      "Deixe sua casa mais bonita e aconchegante com pinturas de alta qualidade para ambientes internos e externos.",
    imageSrc: "/images/servicos/Pintura-residencial.png",
  },
  {
    title: "Pintura Comercial",
    description:
      "Transforme seu negócio com uma pintura profissional que transmite credibilidade e sofisticação ao seu estabelecimento.",
    imageSrc: "/images/servicos/Pintura-Comercial.png",
  },
  {
    title: "Pintura Industrial",
    description:
      "Proteja e valorize sua estrutura com pinturas industriais resistentes a intempéries e produtos químicos.",
    imageSrc: "/images/servicos/Pintura-Industrial.png",
  },
  {
    title: "Pintura de Ferragens",
    description:
      "Aplique proteção e durabilidade às suas ferragens com pinturas anticorrosivas e de acabamento refinado.",
    imageSrc: "/images/servicos/Pintura-Ferragens.png",
  },
  {
    title: "Revestimento de Pedras Naturais",
    description:
      "Adicione um toque rústico e sofisticado ao seu espaço com revestimentos de pedras naturais de alta qualidade.",
    imageSrc: "/images/servicos/Revestimento-Pedras-Naturais.png",
  },
  {
    title: "Textura Grafiato",
    description:
      "Crie efeitos modernos e personalizados com a textura grafiato, ideal para áreas internas e externas.",
    imageSrc: "/images/servicos/Textura-Grafiato.png",
  },
  {
    title: "Textura Lamato",
    description:
      "Um acabamento sofisticado com textura lamato, trazendo elegância e suavidade às superfícies.",
    imageSrc: "/images/servicos/Textura-Lamato.png",
  },
];

export default function ServiceSection() {
  return (
    <section className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] md:grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]">
      {services.map((service, index) => (
        <div key={index} className="bg-gray-800 text-gray-200 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
          <Image
            src={service.imageSrc}
            alt={service.title}
            width={300}
            height={200}
            className="rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
          <p className="text-gray-300">{service.description}</p>
        </div>
      ))}
    </section>
  );
}
