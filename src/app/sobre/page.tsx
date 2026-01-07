import Link from "next/link";

export default function Sobre() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-center p-4">
      <h1 className="text-4xl font-bold text-white mb-4">
        Sobre o Projeto
      </h1>

      <p className="max-w-md text-gray-400 mb-8">
        Página para entender como o Next.js trabalha com as rotas.
      </p>

      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        &larr; Voltar para Home
      </Link>
    </div>
  );
}
