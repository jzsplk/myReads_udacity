import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ShelfSelect extends Component {
	static propTypes = {
	    book: PropTypes.object.isRequired,
	    onSelect: PropTypes.func.isRequired
	};

	state = {
		//为避免搜索出的图书没有shelf属性的情况，指定一个默认的shelf
		shelf: this.props.book.shelf ? this.props.book.shelf : 'none',
		updating: false
	}

	changeShelf = (event) => {
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

		return (
			<div className="book-shelf-changer">
			  <select value={this.state.shelf} onChange={this.changeShelf}>
			    <option value="move" disabled>Move to...</option>
			    <option value="currentlyReading">Currently Reading</option>
			    <option value="wantToRead">Want to Read</option>
			    <option value="read">Read</option>
			    <option value="none">None</option>
			  </select>
				{/*增加一个提示书架转移正在进行中的提示特效 */}
			  { this.state.updating && (<div className="cssload-spin-box"></div>)}
			</div>
		)
	}

}

export default ShelfSelect