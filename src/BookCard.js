function BookCard({ book, onMove }) {
  const handleChange = (event) => {
    onMove(book, event.target.value);
  };

  return (
    <div>
      <img src={book.imageLinks?.thumbnail} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.authors?.join(", ")}</p>
      <select value={book.shelf} onChange={handleChange}>
        <option value="none" disabled>
          Move to...
        </option>
        <option value="reading">Estou lendo</option>
        <option value="wantToRead">Quero ler</option>
        <option value="read">Já lido</option>
      </select>
    </div>
  );
}

export default BookCard;
