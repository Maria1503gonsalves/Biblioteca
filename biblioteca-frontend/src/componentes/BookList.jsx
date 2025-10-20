import React, { useEffect, useState } from 'react';
import { getLivros, deleteLivro } from '../api';

export default function BookList() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    getLivros().then(setLivros);
  }, []);

  const handleDelete = async (id) => {
    await deleteLivro(id);
    setLivros(livros.filter(l => l.id !== id));
  };

  return (
    <div>
      <h2>📚 Lista de Livros</h2>
      <ul>
        {livros.map(livro => (
          <li key={livro.id}>
            <strong>{livro.titulo}</strong> — {livro.autor}
            <button onClick={() => handleDelete(livro.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
