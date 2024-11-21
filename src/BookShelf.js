import BookCard from "./BookCard";

function BookShelf({ title, books, onMove }) {
  return (
    <section>
      <h2>{title}</h2>
      <div>
        {books.map((book) => (
          <BookCard key={book.id} book={book} onMove={onMove} />
        ))}
      </div>
    </section>
  );
}

export default BookShelf;
