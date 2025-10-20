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
      <div style={{ padding: '20px' }}>
        <h2>📚 Livros Virtuais</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: '20px',
          justifyContent: 'center'
        }}>
          {livros.map(livro => (
            <div key={livro.id} style={{
              background: '#fff',
              borderRadius: '8px',
              padding: '10px',
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
              <button onClick={() => handleDelete(livro.id)}>Excluir</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
