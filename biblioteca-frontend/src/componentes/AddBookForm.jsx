import React, { useState } from 'react';
import { addLivro } from '../api';

export default function AddBookForm({ onAdd }) {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const novoLivro = await addLivro({ titulo, autor });
    onAdd(novoLivro);
    setTitulo('');
    setAutor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>➕ Adicionar Livro</h2>
      <input
        value={titulo}
        onChange={e => setTitulo(e.target.value)}
        placeholder="Título"
        required
      />
      <input
        value={autor}
        onChange={e => setAutor(e.target.value)}
        placeholder="Autor"
        required
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
