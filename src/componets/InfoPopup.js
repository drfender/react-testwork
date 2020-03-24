import React from 'react'
import '../assets/style/popup'

export default function Popup(props) {
  return (
    <div className="popup">
      <div className="popup__content">
        <div className="popup__close" onClick={(e) => props.close(e)}>x</div>
        <div>Title: {props.info.Title}</div>
        <div>Actors: {props.info.Actors}</div>
        <div>Country: {props.info.Country}</div>
        <div>Director: {props.info.Director}</div>
        <div>Language: {props.info.Language}</div>
        <div>Released: {props.info.Released}</div>
        <div>Genre: {props.info.Genre}</div>
        <div>Type: {props.info.Type}</div>
        <div>Year: {props.info.Year}</div>
      </div>
    </div>
  )
}