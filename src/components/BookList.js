import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetails from "../components/BookDetails";
const BookList = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="booklist">
      <ul>
        {books.map(book => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No books to read, you need to find new one :)</div>
  );
};

export default BookList;
