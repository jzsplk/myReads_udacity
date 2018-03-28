import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as _ from 'lodash'

class Search extends Component {
	static propTypes = {
	    books: PropTypes.array.isRequired,
	    onUpdateQuery: PropTypes.func.isRequired
	};

	state = {
		query: ''
	}


	updateQuery = _.debounce(query => {
			if(query) {
				this.props.onUpdateQuery(query.trim())	
				this.setState({query: query})
			} else {
				this.setState( { query: ''} )
			}
		}, 400)

	// (query) => {
	// 	if(query) {
	// 		this.props.onUpdateQuery(query.trim())	
	// 		this.setState({query: query})
	// 	} else {
	// 		this.setState( { query: ''} )
	// 	}

	// }



	render() {
		const { books, onUpdateBooks } = this.props;

		return (
			<div className="search-books">
			  <div className="search-books-bar">
			    <Link  to="/" className="close-search" >Close</Link>
			    <div className="search-books-input-wrapper">
			      {/*
			        NOTES: The search from BooksAPI is limited to a particular set of search terms.
			        You can find these search terms here:
			        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

			        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
			        you don't find a specific author or title. Every search is limited by search terms.
			      */}
			      <input 
			      	type="text" 
			      	placeholder="Search by title or author"
			      	value={this.state.query}
			      	onChange={(event) => this.updateQuery(event.target.value)}
			      />
			    </div>
			  </div>
			  <div className="search-books-results">
			    <ol className="books-grid">
		        	{books.map(book => (
		        		<li key={book.id} className="contact-list-item">
		        			<Book book={book} onUpdateBooks={onUpdateBooks} />
		        		</li>
		    		))}
			    </ol>
			  </div>
			</div>
		)
	}
}

export default Search;