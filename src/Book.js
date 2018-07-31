
import React, { Component } from 'react';
import PropTypes from 'prop-types'


class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        onUpdateBook: PropTypes.func.isRequired
      }

    render() {
        let book = this.props.book
        console.log(book)
        let cover = ''
        if (book.imageLinks == undefined) {
            cover = <div className="book-cover" style={{ width: 128, height: 193, backgroundColor: 'black' }}></div>
          } else {
            cover = <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.smallThumbnail}")` }}></div>
          }

        return (
            <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                        {cover}
                        <div className="book-shelf-changer">
                            <select value={book.shelf} onChange={(event) => this.props.onUpdateBook(book, event.target.value)} >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </li>
        )
    }
}

export default Book

