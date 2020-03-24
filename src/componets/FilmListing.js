import React from 'react'
import FilmItem from './FilmItem'
import LoadMoreFilms from './LoadMoreFilms'
import '../assets/style/listing.scss'

function ListingFilm (props)  {
  return (
    <div className="film-listing">
      {props.films.map((film) => <FilmItem key={film.imdbID} film={film}></FilmItem>)}
      {props.showLoadMore && <LoadMoreFilms onClick={() => props.handleClick()}/>}
    </div>
  )
}

export default ListingFilm
