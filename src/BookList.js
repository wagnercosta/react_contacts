import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Book from './Book';


class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {

    let books = this.props.books

    return (
        <div className="list-books-content">
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {books.map((book) =>
                                <Book book={book}/>
                            )}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default BookList