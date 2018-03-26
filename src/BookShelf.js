import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
	render() {
		const { books, onUpdateBooks } = this.props;

		let readingBooks, wantToReadBooks, readedBooks;
		readingBooks = books.filter(book => book.shelf === "currentlyReading");
		wantToReadBooks = books.filter(book => book.shelf === "wantToRead");
		readedBooks = books.filter(book => book.shelf === "read");

		return (
			<div>	
				<div className="bookshelf">
	                  <h2 className="bookshelf-title">Currently Reading</h2>
	                  <div className="bookshelf-books">
	                    <ol className="books-grid">
	                    	{readingBooks.map(book => (
	                    		<li key={book.title}>
	                    			<Book book={book} onUpdateBooks={onUpdateBooks} />
	                    		</li>
	                		))}
	                    </ol>
	                  </div>
	            </div>
    			<div className="bookshelf">
                      <h2 className="bookshelf-title">Want to Read</h2>
                      <div className="bookshelf-books">
                        <ol className="books-grid">
                        	{wantToReadBooks.map(book => (
                        		<li key={book.title}>
                        			<Book book={book} onUpdateBooks={onUpdateBooks} />
                        		</li>
                    		))}
                        </ol>
                      </div>
                </div>
    			<div className="bookshelf">
                      <h2 className="bookshelf-title">Read</h2>
                      <div className="bookshelf-books">
                        <ol className="books-grid">
                        	{readedBooks.map(book => (
                        		<li key={book.title}>
                        			<Book book={book} onUpdateBooks={onUpdateBooks} />
                        		</li>
                    		))}
                        </ol>
                      </div>
                </div>
			</div>

		)
	}
}

export default BookShelf;