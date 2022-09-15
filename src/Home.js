import React from 'react'
import CurrentBooks from './currentBooks'

const Home = ({books,handleSelect}) => {
  return (
    <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
                <div className="bookshelf">
                <div>
                    <h2 className="bookshelf-title">Currently Reading</h2>
                      <div className="bookshelf-books">
                      <ol className="books-grid">
                        {
                            books.filter(book => book.shelf === "currentlyReading").map(book => <CurrentBooks
                                {...book}
                                key={book.id}
                                handleSelect={handleSelect}
                            />)
                        }     
                      </ol>
                      </div>  
                    </div>     
                </div>
                <div className="bookshelf">
                <div>
                    <h2 className="bookshelf-title">Want to Read</h2>
                      <div className="bookshelf-books">
                      <ol className="books-grid">
                        {
                            books.filter(book => book.shelf === "wantToRead").map(book => <CurrentBooks
                                {...book}
                                key={book.id}
                                handleSelect={handleSelect}
                            />)
                        }     
                      </ol>
                      </div>  
                    </div>     
                </div>
                <div className="bookshelf">
                <div>
                    <h2 className="bookshelf-title">Read</h2>
                      <div className="bookshelf-books">
                      <ol className="books-grid">
                        {
                            books.filter(book => book.shelf === "read").map(book => <CurrentBooks
                                {...book}
                                key={book.id}
                                handleSelect={handleSelect}
                            />)
                        }     
                      </ol>
                      </div>  
                    </div>     
                </div>
                
            </div>
          </div>
    </div>
  )
}

export default Home