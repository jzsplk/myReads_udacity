import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ShelfSelect extends Component {


	state = {
		shelf: this.props.book.shelf ? this.props.book.shelf : 'none',
		updating: false
	}

	changShelf = (event) => {
		this.props.onSelect(this.props.book, event.target.value)
		this.setState({
			shelf: event.target.value,
			updating: true
		})
	}

	componentWillReceiveProps(){
	    // Remove the process indicator
	    this.setState({
	        updating: false
	    });
	}

	render(){
		const { book, onSelect } = this.props

		return (
			<div className="book-shelf-changer">
			  <select value={this.state.shelf} onChange={this.changShelf}>
			    <option value="move" disabled>Move to...</option>
			    <option value="currentlyReading">Currently Reading</option>
			    <option value="wantToRead">Want to Read</option>
			    <option value="read">Read</option>
			    <option value="none">None</option>
			  </select>
			  { this.state.updating && (<div className="cssload-spin-box"></div>)}
			</div>
		)
	}

}

export default ShelfSelect