import { useState, useEffect } from "react";
import { getBooks } from "./BooksApi";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";

function HomePage() {
  const [books, setBooks] = useState([]);
  const [shelves, setShelves] = useState({
    reading: [],
    wantToRead: [],
    read: [],
  });

  useEffect(() => {
    async function fetchBooks() {
      const books = await getBooks();
      organizeBooks(books);
    }
    fetchBooks();
  }, []);

  const organizeBooks = (books) => {
    const reading = books.filter((book) => book.shelf === "reading");
    const wantToRead = books.filter((book) => book.shelf === "wantToRead");
    const read = books.filter((book) => book.shelf === "read");
    setShelves({ reading, wantToRead, read });
  };

  const moveBook = (book, newShelf) => {
    book.shelf = newShelf;
    organizeBooks([...shelves.reading, ...shelves.wantToRead, ...shelves.read]);
  };

  return (
    <div>
      <h1>Minha Estante de Livros</h1>
      <BookShelf
        title="Estou lendo"
        books={shelves.reading}
        onMove={moveBook}
      />
      <BookShelf
        title="Quero ler"
        books={shelves.wantToRead}
        onMove={moveBook}
      />
      <BookShelf title="Já lido" books={shelves.read} onMove={moveBook} />
      <Link to="/search">Pesquisar Livros</Link>
    </div>
  );
}

export default HomePage;
