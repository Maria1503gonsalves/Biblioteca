 export async function buscarLivrosPorTitulo(titulo) {
   const response = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(titulo)}`);
   if (!response.ok) throw new Error('Erro ao buscar livros');
   const data = await response.json();

   // Pega os primeiros 10 resultados com capa
   return data.docs
     .filter(livro => livro.cover_i)
     .slice(0, 10)
     .map(livro => ({
       id: livro.key,
       titulo: livro.title,
       autor: livro.author_name ? livro.author_name[0] : 'Autor desconhecido',
       capa: `https://covers.openlibrary.org/b/id/${livro.cover_i}-L.jpg`
     }));
 }
