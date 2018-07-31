import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Book from './Book';
import * as BooksAPI from './BooksAPI'

class BookSearch extends Component {
    state = {
        query: '',
        books: [],
        queryReturned: false
    }

    doQuery = (query) => {
        if (query !== '') {
            BooksAPI.search(query).then((books) => {
                if (books !== undefined) {
                    this.setState({ books, queryReturned: true })
                    return
                }
            })
        }
        this.setState({ books: [], queryReturned: false })
    }

    updateQuery = (query) => {
        this.setState({ query })
        this.doQuery(query)
    }

    updateBook = (book, shelf) => {
        if (this.props.onUpdateBook)
            this.props.onUpdateBook(book, shelf)
    }

    render() {
        let query = this.state.query
        let currentBooks = this.props.currentBooks
        let books = this.state.books
        let newbooks = []
        let queryReturned = this.state.queryReturned


        if (books !== undefined && books.length > 0) {
            newbooks = books.map(function (book) {
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
                {!queryReturned &&
                    <div className="showing-books">Books not found.</div>
                }
            </div>
        )
    }
}

export default BookSearch