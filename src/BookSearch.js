import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Book from './Book';
import * as BooksAPI from './BooksAPI'

class BookSearch extends Component {
    state = {
        query: '',
        books: []
    }

    doQuery() {
        if (this.state.query !== '') {
            BooksAPI.search(this.state.query).then((books) => {
                if (books !== undefined) {
                    this.setState({ books })
                    return
                }
            })
        }
        this.setState({ books: [] })
    }

    componentDidMount() {
        this.doQuery()
    }

    updateQuery = (query) => {
        this.setState({ query: query.trim() })
        this.doQuery()
    }

    clearQuery = () => {
        this.setState({ query: '' })
    }

    updateBook = (book, shelf) => {
        if (this.props.onUpdateBook)
            this.props.onUpdateBook(book, shelf)
    }

    render() {
        let query = this.state.query;
        let currentBooks = this.props.currentBooks;
        let newbooks = []

        if (this.state.books !== undefined && this.state.books.length > 0) {
            newbooks = this.state.books.map(function (book) {
                let shelf = 'none'
                let index = currentBooks.findIndex(b => b.id == book.id);

                if (index > 0) { shelf = currentBooks[index].shelf }
                book.shelf = shelf;
                return book;
            });
        }

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className='close-search' to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.updateQuery(event.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                    {newbooks.map((book) => 
                        <Book key={book.id} book={book} onUpdateBook={this.updateBook} />
                    )}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookSearch