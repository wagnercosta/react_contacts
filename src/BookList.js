import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Book from './Book';


class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelf: PropTypes.string.isRequired
  }

  render() {
    return (
        <div className="bookshelf-books">
            <ol className="books-grid">
                {this.props.books.filter(book => book.shelf == this.props.shelf).map((book) => 
                    <Book key={book.id} book={book} />
                )}
            </ol>
        </div>
    )
  }
}

export default BookList