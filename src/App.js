import React, { useState } from "react";
import "./App.css";

var allBooks = {
  Productivity: [
    {
      title: "Deep Work",
      author: "Cal Newport",
      rating: "4/5",
      image: "https://m.media-amazon.com/images/I/417yjF+Z5zL.jpg",
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      rating: "4.6/5",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
    },
    {
      title: "Getting Things Done",
      author: "David Allen",
      rating: "4/5",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51KNBNziJXL._SX327_BO1,204,203,200_.jpg",
    },
  ],
  Startup: [
    {
      title: "Zero To One",
      author: "Peter Thiel",
      rating: "4.3/5",
      image: "https://images-na.ssl-images-amazon.com/images/I/71m-MxdJ2WL.jpg",
    },
    {
      title: "The Lean Startup",
      author: "Eric Ries",
      rating: "4/5",
      image: "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg",
    },
    {
      title: "Rework",
      author: "Jason Fried",
      rating: "4.2/5",
      image: "https://images-na.ssl-images-amazon.com/images/I/61GFc+k-5PL.jpg",
    },
  ],
  Biography: [
    {
      title: "Wings of Fire",
      author: "Dr. Abdul Kalam and Arun Tiwari",
      rating: "4.8/5",
      image: "https://3.imimg.com/data3/VM/WT/MY-12313319/kalam-500x500.jpeg",
    },
    {
      title: "Elon Musk",
      author: "Ashlee Vance",
      rating: "4.6/5",
      image: "https://m.media-amazon.com/images/I/5179mrE+WWL.jpg",
    },
    {
      title: "Steve Jobs",
      author: "Walter Isaacson",
      rating: "4/5",
      image: "https://images-na.ssl-images-amazon.com/images/I/81VStYnDGrL.jpg",
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
      rating: "4.8/5",
      image: "https://images-na.ssl-images-amazon.com/images/I/91asIC1fRwL.jpg",
    },
    {
      title: "Clean Code",
      author: "Robert Cecil Martin",
      rating: "4/5",
      image:
        "https://images-eu.ssl-images-amazon.com/images/I/41SH-SvWPxL._SX342_SY445_QL70_ML2_.jpg",
    },
    {
      title: "JavaScript - The Good Parts",
      author: "Douglas Crockford",
      rating: "4.6/5",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX381_BO1,204,203,200_.jpg",
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
                  <div className="img-container">
                    <img src={book.image} alt="book" />
                  </div>
                  <div className="book-content">
                    <div style={{ fontSize: "larger" }}> {book.title} </div>
                    <div style={{ fontSize: "smaller", marginTop: "0.2rem" }}>
                      {book.author}
                    </div>
                    <div className="rating"> {book.rating} </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer">
            <p>
              Developed by{" "}
              <a
                href="https://abhishekkgautam.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                Abhishek Gautam
              </a>
            </p>
            <ul className="social-links list-non-bullet">
              <li className="list-item-inline">
                <a
                  target="_blank"
                  className="link"
                  href="https://github.com/AbhishekkGautam"
                  rel="noreferrer"
                >
                  <i class="fab fa-github fa-1x"></i>
                </a>
              </li>
              <li className="list-item-inline">
                <a
                  target="_blank"
                  className="link"
                  href="https://twitter.com/helloAbhishekk"
                  rel="noreferrer"
                >
                  <i class="fab fa-twitter fa-1x"></i>
                </a>
              </li>
              <li className="list-item-inline">
                <a
                  target="_blank"
                  className="link"
                  href="https://www.linkedin.com/in/abhishek-gautam-54684a167/"
                  rel="noreferrer"
                >
                  <i class="fab fa-linkedin-in fa-1x"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
