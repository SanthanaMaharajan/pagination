import './App.css';
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import MovieList from './components/MovieList';
import Pagination from './components/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function App() {
  const [movieData, setMovieData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(8)
  const[name,setName]=useState("")

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = (movieData.filter((movie)=>{
    return (name.toLowerCase() ===""? movie : movie.name.toLowerCase().includes(name))
 })).slice(firstPostIndex, lastPostIndex)

  useEffect(() => {
    axios.get('https://api.tvmaze.com/shows/1/episodes')
      .then(res => setMovieData(res.data))
      .catch(error => { console.error("Error in fetching data", error) })
  })
 

  return (
    <div className='App' >

      <h1>Movie List</h1>
      <Form className="d-flex w-75 m-auto">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e)=>setName(e.target.value)}
        />
        <Button variant="outline-success">Search</Button>
      </Form>


      <MovieList movieData={currentPost} />
      <Pagination
        totalPost={movieData.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
