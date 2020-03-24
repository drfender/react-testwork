import React from 'react'
import loadMoreImg from '../assets/img/arrow-refresh.png'
import '../assets/style/load-more.scss'

export default function LoadMoreFilms (props) {
  return (
    <div className="film load-more">
      <img 
        src={loadMoreImg}
        alt=""
        className="load-more__img"
        onClick={() => props.onClick()}
      />
    </div>
  )
}