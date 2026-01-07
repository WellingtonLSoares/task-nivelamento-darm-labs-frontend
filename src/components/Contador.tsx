'use client';

import { useState, useEffect } from 'react';

export default function Contador() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Contagem: ${count}`;
  }, [count]);

  return (
    <div className="p-6 rounded-xl bg-zinc-800 border border-zinc-700 shadow-sm">
      <h3 className="text-xl font-bold mb-4 text-gray-100">
        Componente client side
      </h3>
      
      <div className="flex items-center gap-4">
        <span className="text-4xl font-bold">
          {count}
        </span>
        
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-600 hover:bg-blue-700 font-bold py-2 px-4 rounded-lg cursor-pointer"
        >
          Aumentar +
        </button>

        <button 
          onClick={() => setCount(0)}
          className="hover:text-red-500 text-sm underline"
        >
          Zerar
        </button>
      </div>
      
      <p className="mt-4 text-sm">
        Observe o título da aba...
      </p>
    </div>
  );
}
