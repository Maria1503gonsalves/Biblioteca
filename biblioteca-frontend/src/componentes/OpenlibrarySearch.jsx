import React, { useState } from 'react';
import { buscarLivrosPorTitulo } from '../openLibrary';

export default function OpenLibrarySearch() {
  const [query, setQuery] = useState('');
  const [resultados, setResultados] = useState([]);

  const handleSearch = async () => {
    try {
      const livros = await buscarLivrosPorTitulo(query);
      setResultados(livros);
    } catch (error) {
      console.error(error);
      alert('Erro ao buscar livros');
    }
  };

  return (
    <div style={{ marginTop: '40px' }}>
      <h2>🔍 Buscar Livros Virtuais</h2>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Digite o título do livro"
        style={{ marginRight: '10px' }}
      />
      <button onClick={handleSearch}>Buscar</button>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
        gap: '20px',
        marginTop: '20px'
      }}>
        {resultados.map(livro => (
          <div key={livro.id} style={{
            background: '#fff',
            padding: '10px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <img
              src={livro.capa}
              alt={`Capa de ${livro.titulo}`}
              style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '4px' }}
            />
            <h4 style={{ marginTop: '10px' }}>{livro.titulo}</h4>
            <p style={{ fontSize: '0.9em', color: '#555' }}>{livro.autor}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
