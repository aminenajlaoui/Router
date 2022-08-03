import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies}) => {
  return (
    // <div>hello</div>
    <div>{movies.map(mv=><MovieCard key={mv.title} movie={mv}/>)}</div>
  )
}

export default MovieList