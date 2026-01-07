import Link from 'next/link';
import Contador from '@/components/Contador';
import ListaTarefas from '../components/Tarefa';

export default function Home() {
  const tarefas = [
    { id: 1, titulo: 'Configurar Tailwind v4', status: 'Feito' },
    { id: 2, titulo: 'Entender useState e useEffect', status: 'Em andamento' },
    { id: 3, titulo: 'Criar rota /sobre', status: 'Pendente' },
  ];

  return (
    <main className="min-h-screen p-8 bg-zinc-900 font-sans text-gray-100">
      <div className="max-w-2xl mx-auto space-y-8">
        <header className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Task de nivelamento</h1>
          <Link 
            href="/sobre" 
            className="text-sm font-medium hover:text-blue-500 underline"
          >
            Ir para Sobre &rarr;
          </Link>
        </header>

        <Contador />

        <div>
          <h2 className="text-xl font-semibold mb-4">Lista Estática</h2>
          <ListaTarefas itens={tarefas} />
        </div>

      </div>
    </main>
  );
}