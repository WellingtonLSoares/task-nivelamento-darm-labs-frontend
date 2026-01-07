interface Tarefa {
  id: number;
  titulo: string;
  status: string;
}

interface ListaTarefasProps {
  itens: Tarefa[];
}

export default function ListaTarefas({ itens }: ListaTarefasProps) {
  return (
    <ul className="space-y-3">
      {itens.map((tarefa) => (
        <li 
          key={tarefa.id} 
          className="flex justify-between p-4 bg-zinc-800 border border-zinc-700 rounded-lg shadow-sm border-l-4 border-white-500"
        >
          <span className="font-medium">{tarefa.titulo}</span>
          
          <span className={`text-xs px-2 py-1 rounded-full flex items-center ${
            tarefa.status === 'Feito' 
              ? 'bg-green-100 text-green-800'
              : 'bg-yellow-100 text-yellow-800'
          }`}>
            {tarefa.status}
          </span>
        </li>
      ))}
    </ul>
  );
}