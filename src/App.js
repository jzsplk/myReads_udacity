import React from 'react'
import { Link, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'
import Search from './Search'
import './App.css'



class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books : [],
    searchBooks: []
  }



  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      console.log('books', books)
      this.setState({books: books})
    }).catch(e => { console.log('err fetching data from API', e) })
  }

  updateAPIBooks = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      //updage local data
      book.shelf = shelf

      //update the state books
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([ book ])
      }))
    }).catch( e => {console.log('error changing shelf of the book', e)} )
  }

  updateQuery = (query) => {
    if(query) {
      BooksAPI.search(query).then(data => { 
        console.log('search results', data) 
        //检查搜索结果是否在books中，如果在，更新该book的shelf属性
        if(data.length) {
          data.map(book => {
            this.state.books.forEach((b) => {
              if(b.id === book.id) {
                book.shelf = b.shelf
              }
            })
          })
          this.setState({ searchBooks: data })
        }

      }).catch(e => { console.log('error searching books'), e })
    } else {
      this.setState( { searchBooks: [] } )
    }
  }



  render() {
    return (
      <div className="app">
        <Route exact path="/search" render={() => (
          <div className="search-books">
          { this.state.updating && (<div className="cssload-spin-box"></div>)}
            <Search books={this.state.searchBooks} onUpdateQuery={this.updateQuery} onUpdateBooks={this.updateAPIBooks} />
          </div>
        )} />

        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="open-search">
              <Link to="/search" >Add a book</Link>
            </div>
            <BookShelf onUpdateBooks={this.updateAPIBooks} books={this.state.books} />
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
