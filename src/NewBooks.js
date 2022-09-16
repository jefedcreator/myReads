import React from 'react'
import PropTypes from 'prop-types'
import CurrentBooks from './currentBooks'


const NewBooks = ({title,authors,imageLinks,handleAdd,id, books,handleSelect,shelf}) => {

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
        <select value={shelf} onChange={(e) => handleAdd(e.target.value,id)}>
            <option disabled>Add to...</option>
            <option value={shelf}>Currently Reading</option>
            <option value={shelf}>Want to Read</option>
            <option value={shelf}>Read</option>
            <option value={shelf} selected={true}>None</option>
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
    authors: PropTypes.array.isRequired,
    imageLinks: PropTypes.object,
    handleAdd: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
}

export default NewBooks