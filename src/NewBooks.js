import React from 'react'
import PropTypes from 'prop-types'
import CurrentBooks from './currentBooks'


const NewBooks = ({title,authors,imageLinks,handleAdd,id, books,handleSelect}) => {

    for (let book of books) {
        if (book.id == id) {
            return <CurrentBooks
            {...book}
            key={book.id}
            handleSelect={handleSelect}
            />
        }
    }

  return (
    <li>
    <div className="book">
    <div className="book-top">
        <div
        className="book-cover"
        style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${imageLinks !== undefined ? imageLinks.smallThumbnail : null })`
        }}
        ></div>
        <div className="book-shelf-changer">
        <select onChange={(e) => handleAdd(e.target.value,id)}>
            <option value="none" disabled>Add to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </select>
        </div>
    </div>
    <div className="book-title">{title}</div>
    <div className="book-authors">{authors}</div>
    </div>
</li>
  )
}

NewBooks.propTypes = {
    title: PropTypes.string.isRequired,
    authors: PropTypes.string.isRequired,
    imageLinks: PropTypes.string.isRequired,
    handleAdd: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
}

export default NewBooks