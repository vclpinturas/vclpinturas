"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const ProductsList = ({ demoMode = false }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/cloudinary");
        const data = await res.json();
        setImages(data);
      } catch (error) {
        console.error("Erro ao buscar imagens:", error);
      } finally {
        setLoading(false);
      }
    };    

    fetchImages();
  }, []);

  const imagesToDisplay = demoMode && Array.isArray(images) ? images.slice(0, 6) : images;

  return (
    <section className="py-12 px-4 w-full">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">Nossos Trabalhos</h2>
      <div className="grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {loading
          ? 
            Array.from({ length: demoMode ? 6 : 10 }).map((_, index) => (
              <div
                key={index}
                className="relative shadow-lg rounded-lg overflow-hidden min-h-80 group bg-gray-300 animate-pulse"
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div
                  className="absolute inset-0 bg-gray-300 animate-pulse rounded-lg"
                  style={{
                    animation: `pulseColor 1.5s ease-in-out infinite, resize 1.5s ease-in-out infinite`,
                  }}
                ></div>
              </div>
            ))
          : imagesToDisplay.length > 0 ? (
              imagesToDisplay.map((src, index) => (
                <div key={index} className="relative shadow-lg rounded-lg overflow-hidden group min-h-24">
                  <Image
                    src={src}
                    alt={`Trabalho ${index + 1}`}
                    width={500}
                    height={300}
                    className="object-fill w-full h-full transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 border-4 border-amber-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-full">Nenhuma imagem disponível.</p>
            )}
      </div>
    </section>
  );
};

export default ProductsList;
