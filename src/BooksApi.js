const API_URL =
  "https://api-books-dot-api-samples-423102.uc.r.appspot.com/books";

export async function getBooks() {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Falha ao carregar os livros.");
  return await response.json();
}
