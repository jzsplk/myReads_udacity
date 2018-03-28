import React, { Component } from 'react'
import ShelfSelect from './ShelfSelect'
import PropTypes from 'prop-types'

class Book extends Component {
	static propTypes = {
	    book: PropTypes.object.isRequired,
	    onUpdateBooks: PropTypes.func.isRequired
	};

	render() {
		const { book, onUpdateBooks} = this.props
		const thumbnail = book.imageLinks ? book.imageLinks.thumbnail : 'https://wiki.librarything.com/images/7/7a/Book-cover-blue.jpg'

		return (
			<div className="book">
			  <div className="book-top">
			    <a href={book.infoLink}> <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${thumbnail}")` }}></div> </a>
			    <ShelfSelect book={book} onSelect={onUpdateBooks} />

			  </div>
			  <div className="book-title">{book.title}</div>
			  <div className="book-authors">{book.authors}</div>
			</div>


		)
	}
}

export default Book;