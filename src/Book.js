
import React, { Component } from 'react';
import PropTypes from 'prop-types'


class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired
      }

    render() {
        let book = this.props.book

        return (
            <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.smallThumbnail}")` }}></div>
                        <div className="book-shelf-changer">
                            <select>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    {book.authors.map((author) =>
                        <div className="book-authors" key={author}>{author}</div>
                    )
                    }

                </div>
            </li>
        )
    }
}

export default Book

