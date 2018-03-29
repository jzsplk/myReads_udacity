import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateBooks: PropTypes.func.isRequired
  };

	render() {
		const { books, onUpdateBooks } = this.props;

		let shelfs, showShelfs;
    shelfs = [  
              {"shelfName": "Currently Reading", "shelfBooks": "currentlyReading"}, 
              {"shelfName": "Want to Read", "shelfBooks": "wantToRead"}, 
              {"shelfName": "Read", "shelfBooks": "read"} 
            ] 
    showShelfs = shelfs.map(shelf => 
              <div key={shelf.shelfName} className="bookshelf">
                    <h2 className="bookshelf-title">{shelf.shelfName}</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        {books.filter(book => book.shelf === shelf.shelfBooks).map(book => (
                          <li key={book.title}>
                            <Book book={book} onUpdateBooks={onUpdateBooks} />
                          </li>
                      ))}
                      </ol>
                    </div>
              </div>    
    )

		return (
			<div>	
          {/*
            重复利用书架的代码，直接用数组中div形成三个书架
          */}
          {showShelfs}
			</div>

		)
	}
}

export default BookShelf;