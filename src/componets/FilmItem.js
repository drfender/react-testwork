import React from 'react'
import notFound from '../assets/img/not-found.png'
import '../assets/style/film.scss'
import InfoPopup from '../componets/InfoPopup'

export default class FilmItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      filmInfo: null,
      isPopupOpen: false
    }
  }

  handleClick = () => {
    fetch(`http://www.omdbapi.com/?apikey=d777cf78&i=${this.props.film.imdbID}`).then(r => r.json()).then((r) => {
      this.setState({
        filmInfo: r,
        isPopupOpen: true
      })
    })
  }

  closePopup = (e) => {
    e.preventDefault()
    e.stopPropagation()
    this.setState({
      isPopupOpen: false
    })
  }

  render () {
    const link = `https://www.imdb.com/title/${this.props.film.imdbID}`
    const title = this.props.film.Title
    let poster = this.props.film.Poster
    if (poster === 'N/A') {
      poster = notFound
    }
    return (
      <div className="film" onClick={() => this.handleClick()}>
        <div className="film__poster">
          <img src={poster} alt="" className="film__image"/>
        </div>
        <div className="film__info">
          {/* eslint-disable-next-line */}
          <a className="film__title" href={link} target="_blank">{title}</a>
        </div>
        {this.state.isPopupOpen && <InfoPopup close={(e) => this.closePopup(e)} info={this.state.filmInfo}/>}
      </div>
    )
  }
}

