import { NextResponse } from "next/server";

export async function GET() {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  const folder = "projetos";
  const url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/search?expression=folder:${folder}`;

  try {
    const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString("base64");

    const res = await fetch(url, {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });

    if (!res.ok) {
      throw new Error("Erro ao buscar imagens no Cloudinary");
    }

    const data = await res.json();
    const images = data.resources.map((img) => img.secure_url);

    return NextResponse.json(images);
  } catch (error) {
    console.error("Erro:", error);
    return NextResponse.json({ error: "Erro ao buscar imagens" }, { status: 500 });
  }
}
