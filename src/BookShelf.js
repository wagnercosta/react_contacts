import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Book from './Book';
import BookList from './BookList';


class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelfList: PropTypes.array.isRequired
  }

  render() {

    let books = this.props.books
    const shelfList = this.props.shelfList

    return (
        <div className="list-books-content">
            {shelfList.map((shelf) =>
                <div key={shelf.id}>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">{shelf.title}</h2>
                        <BookList books={books} shelf={shelf.id} />
                    </div>
                </div>
            )}
        </div>
    )
  }
}

export default BookShelf