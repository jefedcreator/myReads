import React from 'react'
import {Link} from 'react-router-dom'
import NewBooks from './NewBooks'

const Search = ({search, handleAdd, handleSearch}) => {
  return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link to ="/" className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                // value={search}
                onChange={handleSearch}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {
                search !== undefined && search.length > 0
                ?
                search.map(book => <NewBooks
                  {...book}
                  key={book.id}
                  handleAdd={handleAdd} 
              />)
              :
              <p>No result for search query</p>
              }
            </ol>
          </div>
        </div>
  )
}

export default Search