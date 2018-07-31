import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf';
import { Route } from 'react-router-dom'
import BookSearch from './BookSearch';

class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeBookStatus = (book, shelf) => {
    let newbooks = this.state.books
    let index = newbooks.findIndex(b => b.id == book.id);
    if(index > 0) {
      newbooks[index].shelf = shelf;
    }
    else{
      book.shelf = shelf
      newbooks = this.state.books.concat([ book ])
    }
    BooksAPI.update(book, shelf).then(() => {
      this.setState((state) => ({
        books: newbooks
      }))
    })

  }

  render() {
    let books = this.state.books;

    return (
      <div>
        <Route exact path='/' render={() => (
          <BookShelf
            books={books}
            onUpdateBook={this.changeBookStatus}
          />
        )} />
        <Route path='/search' render={({ history }) => (
          <BookSearch currentBooks={books}
            onUpdateBook={(book, shelf) => {
              this.changeBookStatus(book, shelf)
              history.push('/')
            }}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
