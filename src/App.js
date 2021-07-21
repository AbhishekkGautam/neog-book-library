import React, { useState } from "react";
import "./App.css";

var allBooks = {
  Productivity: [
    {
      title: "Deep Work",
      author: "Cal Newport",
      rating: "9/10",
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      rating: "9.5/10",
    },
    {
      title: "Getting Things Done",
      author: "David Allen",
      rating: "8/10",
    },
  ],
  Startup: [
    {
      title: "Zero To One",
      author: "Peter Thiel",
      rating: "9/10",
    },
    {
      title: "The Lean Startup",
      author: "Eric Ries",
      rating: "8/10",
    },
    {
      title: "Rework",
      author: "Jason Fried",
      rating: "9/10",
    },
  ],
  Biography: [
    {
      title: "Wings of Fire",
      author: "Dr. Abdul Kalam and Arun Tiwari",
      rating: "10/10",
    },
    {
      title: "Elon Musk",
      author: "Ashlee Vance",
      rating: "10/10",
    },
    {
      title: "Steve Jobs",
      author: "Walter Isaacson",
      rating: "9/10",
    },
    // {
    //   title: "The Story of My Life",
    //   author: "Helen Keller",
    //   rating: "9/10",
    // },
  ],
  Programming: [
    {
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      rating: "10/10",
    },
    {
      title: "Clean Code",
      author: "Robert Cecil Martin",
      rating: "9/10",
    },
    {
      title: "You Don't Know JS",
      author: "Kyle Simpson",
      rating: "9/10",
    },
  ],
};

export default function App() {
  const [bookList, setBookList] = useState(allBooks.Productivity);

  function categoryClickHandler(category) {
    let books = allBooks[category];
    setBookList(books);
  }

  return (
    <div>
      <header className="hero">
        <h1 className="hero-heading">
          Book <span style={{ color: "#5b21b6" }}>Prime</span>
        </h1>
      </header>
      <section className="section">
        <div className="container container-center section-center">
          <p
            style={{
              textAlign: "left",
              marginBottom: "1.5rem",
              paddingLeft: "0.3rem",
            }}
          >
            Checkout my favorite books. Select a genre to get started.
          </p>
          <div>
            {Object.keys(allBooks).map((category) => {
              return (
                <button
                  className="category-btn"
                  onClick={() => categoryClickHandler(category)}
                  key={category}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div style={{ marginTop: "2.5rem" }}>
            <ul>
              {bookList.map((book) => (
                <li key={book.title}>
                  {" "}
                  <div style={{ fontSize: "larger" }}> {book.title} </div>
                  <div style={{ fontSize: "smaller", marginTop: "0.2rem" }}>
                    {" "}
                    {book.author}{" "}
                  </div>
                  <div style={{ marginTop: "0.7rem" }}> {book.rating} </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
