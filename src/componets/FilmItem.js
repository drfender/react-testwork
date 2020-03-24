import React from 'react'
import notFound from '../assets/img/not-found.png'
import '../assets/style/film.scss'

export default function (props) {
  const link = `https://www.imdb.com/title/${props.film.imdbID}`
  const title = props.film.Title
  let poster = props.film.Poster
  if (poster === 'N/A') {
    poster = notFound
  }

  return (
    <div className="film">
      <div className="film__poster">
        <img src={poster} alt="" className="film__image"/>
      </div>
      <div className="film__info">
        {/* eslint-disable-next-line */}
        <a className="film__title" href={link} target="_blank">{title}</a>
      </div>
    </div>
  )
}

