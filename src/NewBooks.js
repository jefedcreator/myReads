import React from 'react'

const NewBooks = ({title,authors,imageLinks,type,handleAdd,id}) => {
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

export default NewBooks