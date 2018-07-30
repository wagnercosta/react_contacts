import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf';

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

    const shelfList = [
      {
        "id": "currentlyReading",
        "title": "Current Reading"
      },
      {
        "id": "wantToRead",
        "title": "Want to Read"
      },
      {
        "id": "read",
        "title": "Read"
      }
    ]

    return (
      <BookShelf books={books} shelfList={shelfList} />
    )
  }
}

export default BooksApp
