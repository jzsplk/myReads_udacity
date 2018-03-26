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
	                    			<div className="book">
	                    			  <div className="book-top">
	                    			    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
	                    			    <div className="book-shelf-changer">
	                    			      <select value={book.shelf} onChange={(event) => onUpdateBooks(book, event.target.value)}>
	                    			        <option value="none" disabled>Move to...</option>
	                    			        <option value="currentlyReading">Currently Reading</option>
	                    			        <option value="wantToRead">Want to Read</option>
	                    			        <option value="read">Read</option>
	                    			        <option value="none">None</option>
	                    			      </select>
	                    			    </div>
	                    			  </div>
	                    			  <div className="book-title">{book.title}</div>
	                    			  <div className="book-authors">{book.authors[0]}</div>
	                    			</div>
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
                        			<div className="book">
                        			  <div className="book-top">
                        			    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                        			    <div className="book-shelf-changer">
                        			      <select value={book.shelf} onChange={(event) => onUpdateBooks(book, event.target.value)}>
                        			        <option value="none" disabled>Move to...</option>
                        			        <option value="currentlyReading">Currently Reading</option>
                        			        <option value="wantToRead">Want to Read</option>
                        			        <option value="read">Read</option>
                        			        <option value="none">None</option>
                        			      </select>
                        			    </div>
                        			  </div>
                        			  <div className="book-title">{book.title}</div>
                        			  <div className="book-authors">{book.authors[0]}</div>
                        			</div>
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
                        			<div className="book">
                        			  <div className="book-top">
                        			    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                        			    <div className="book-shelf-changer">
                        			      <select value={book.shelf} onChange={(event) => onUpdateBooks(book, event.target.value)}>
                        			        <option value="none" disabled>Move to...</option>
                        			        <option value="currentlyReading">Currently Reading</option>
                        			        <option value="wantToRead">Want to Read</option>
                        			        <option value="read">Read</option>
                        			        <option value="none">None</option>
                        			      </select>
                        			    </div>
                        			  </div>
                        			  <div className="book-title">{book.title}</div>
                        			  <div className="book-authors">{book.authors[0]}</div>
                        			</div>
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