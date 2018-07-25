import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import * as BooksAPI from './BooksAPI'
import BookList from './BookList';

class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    let books = this.state.books;

    return (
      <div>
        <BookList books={books} />
        <div>
            <ul>
                {books.map((book) =>
                  console.log(book)
                )}
            </ul>
        </div>
      </div>
    )
  }
}

export default BooksApp
