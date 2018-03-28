import React, { Component } from 'react'

class Book extends Component {
	render() {
		const { book, onUpdateBooks} = this.props
		const thumbnail = book.imageLinks ? book.imageLinks.thumbnail : 'https://wiki.librarything.com/images/7/7a/Book-cover-blue.jpg'

		return (
			<div className="book">
			  <div className="book-top">
			    <a href={book.infoLink}> <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${thumbnail}")` }}></div> </a>
			    <div className="book-shelf-changer">
			      <select value={book.shelf ? book.shelf : 'none'} onChange={(event) => onUpdateBooks(book, event.target.value) }>
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


		)
	}
}

export default Book;