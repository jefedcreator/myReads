import "./App.css";
import { useEffect, useState } from "react";
import * as BooksAPI from './BooksAPI'
import {Link, Route, Routes} from 'react-router-dom'
import Home from "./Home";
import Search from "./Search";
import Error from "./error";

function App() {
  const[search, setSearch] = useState([])
  const [books, setBooks] = useState([])

  const getBooks = async() => {
    const books = await BooksAPI.getAll();
    setBooks(books);
  }

  const handleSelect = async(shelf,id) =>{
    const newBooks = books.filter(book => book.id === id).map(book => ({...book, "shelf":shelf}))
    const another = books.filter(book => book.id !== id)
    const res = await BooksAPI.update(id,shelf)
    console.log("update:",res);
    setBooks([...another,...newBooks])
    // console.log("another",another);
  }

  const handleAdd = async(shelf, id) =>{
    const newBooks = search.filter(book => book.id === id).map(book => ({...book, "shelf":shelf}))
    const res = await BooksAPI.update(id,shelf)
    setBooks(books.concat(newBooks))
    const another = search.filter(book => book.id !== id)
    setSearch(another)
  }



  const handleSearch = async (event) =>{
    const value = event.target.value
    const res = await BooksAPI.search(value,10);
    setSearch(res);
  }

  console.log("search:",search);

  useEffect(()=>{
    let unMount = false;
    if(!unMount){
      getBooks()
    }
    return () =>{
      unMount = true;
    } 
  },[])

  return (
    <div className="app">
        <Routes>
          <Route exact path='/' element={
            <Home
              books={books}
              handleSelect={handleSelect}
            />
          }/>
          <Route path='/search' element={
            <Search 
            search={search}
            handleSearch={handleSearch}
            handleAdd={handleAdd}
            books={books}
            handleSelect={handleSelect}
            />
          }/>
          <Route path='*' element={
            <Error/>
          }/>
        </Routes>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
    </div>
  );
}

export default App;
