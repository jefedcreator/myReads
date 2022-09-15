import React from 'react'
import {Link} from 'react-router-dom'
import NewBooks from './NewBooks'
import PropTypes from 'prop-types'

const Search = ({search, handleAdd, handleSearch,books,handleSelect}) => {


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
                    books={books}
                    handleAdd={handleAdd} 
                    handleSearch={handleSearch}
                    handleSelect={handleSelect}
                />)
                :
                <p>No result for search query</p>
            }

            </ol>
          </div>
        </div>
  )
}

Search.propTypes = {
    handleAdd: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired,
    search: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired
}

export default Search