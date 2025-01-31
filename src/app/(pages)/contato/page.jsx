// app/contato/page.tsx
export default function Contato() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Contato</h1>
      <p className="text-gray-700 mb-6">Entre em contato conosco para agendar um orçamento ou para mais informações sobre nossos serviços.</p>
      <form className="space-y-4">
        <input type="text" placeholder="Seu Nome" className="w-full p-2 border border-gray-300 rounded" />
        <input type="email" placeholder="Seu Email" className="w-full p-2 border border-gray-300 rounded" />
        <textarea placeholder="Sua Mensagem" className="w-full p-2 border border-gray-300 rounded" rows="4"></textarea>
        <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600">Enviar</button>
      </form>
    </main>
  )
}
