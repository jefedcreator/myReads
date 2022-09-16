import React from 'react'
import PropTypes from 'prop-types'

const CurrentBooks = ({title,authors,imageLinks,shelf,handleSelect,id}) => {

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
                <select value={shelf} onChange={(e) => handleSelect(e.target.value,id)}>
                    <option disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option>None</option>
                </select>
                </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors}</div>
            </div>
        </li>
  )
}

CurrentBooks.propTypes = {
    title: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    imageLinks: PropTypes.object,
    shelf: PropTypes.string.isRequired,
    handleSelect: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
}

export default CurrentBooks