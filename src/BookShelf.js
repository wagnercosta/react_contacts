import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Book from './Book';
import BookList from './BookList';
import { Link } from 'react-router-dom'


class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {

    let books = this.props.books
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
        <div className="app">
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    {shelfList.map((shelf) =>
                        <div key={shelf.id}>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">{shelf.title}</h2>
                                <BookList books={books} shelf={shelf.id} onUpdateBook={this.props.onUpdateBook} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="open-search">
                <Link to='/search'>Add a Book</Link>
            </div>
        </div>
    )
  }
}

export default BookShelf
