   import React, { useState } from 'react';
   import BookList from './componentes/BookList.jsx';
   import AddBookForm from './componentes/AddBookForm.jsx';
   import OpenLibrarySearch from './componentes/OpenLibrarySearch.jsx';

   function App() {
     const [livros, setLivros] = useState([]);

     const handleAdd = (livro) => {
       setLivros([...livros, livro]);
     };

     return (
       <div style={{
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',
         justifyContent: 'center',
         minHeight: '100vh',
         fontFamily: 'Arial',
         backgroundColor: '#f5f5f5',
         padding: '20px'
       }}>
         <h1>📖 Minha Biblioteca Virtual</h1>
   
         {/* Busca de livros da Open Library */}
         <OpenLibrarySearch />

         {/* Formulário para adicionar livros manualmente */}
         <AddBookForm onAdd={handleAdd} />

         {/* Lista de livros adicionados */}
         <BookList livros={livros} setLivros={setLivros} />
       </div>
     );
   }

   export default App;
