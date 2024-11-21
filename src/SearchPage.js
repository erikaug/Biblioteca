import { useState } from "react";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";
import { getBooks } from "./BooksApi";

function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (event) => {
    const searchTerm = event.target.value;
    setQuery(searchTerm);

    if (searchTerm) {
      const books = await getBooks(); // Simulating search by filtering
      const filtered = books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  };

  return (
    <div>
      <Link to="/">Voltar para a Página Principal</Link>
      <input
        type="text"
        placeholder="Pesquisar livros..."
        value={query}
        onChange={handleSearch}
      />
      <div>
        {results.map((book) => (
          <BookCard key={book.id} book={book} onMove={() => {}} />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
