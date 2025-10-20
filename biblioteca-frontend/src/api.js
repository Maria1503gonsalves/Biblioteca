const API_URL = 'http://localhost:3000/livros'; // ajuste para o endereço da sua API

export async function getLivros() {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Erro ao buscar livros');
  return response.json();
}

export async function addLivro(livro) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(livro),
  });
  if (!response.ok) throw new Error('Erro ao adicionar livro');
  return response.json();
}

export async function deleteLivro(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Erro ao excluir livro');
}
