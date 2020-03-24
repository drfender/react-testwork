import React from 'react'
import logo from '../assets/img/logo.svg'
import '../assets/style/header.scss'

export default class Input extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      text: '',
      isNotValid: false
    }
  }

  handleClick =  () => {
    if (this.state.text.length >= 3) {
      this.props.onChange(this.state.text)
      
      this.setState({
        isNotValid: false
      })
    } else {
      this.setState({
        isNotValid: true
      })
    }
  }

  writeData = (val) => {
    this.setState({
      text: val 
    })
  }

  removeError = () => {
    this.setState({
      isNotValid: false
    })
  }

  handleEnterClick = (e) => {
    if (e.key === 'Enter') {
      this.handleClick()
    }
  }

  render () {
    return (
      <header className="header">
        <div className="container header__wrap">
          <img src={logo} alt="" className="header__logo"/>
          <div className={'header__search ' + (this.state.isNotValid ? 'error' : '')}>
            <input
              className="header__search-input"
              type="text"
              placeholder="Movie name"
              value={this.state.text}
              onClick={() => this.removeError()}
              onKeyPress={(e) => this.handleEnterClick(e)}
              onChange={(e) => this.writeData(e.target.value)}
            />
            <div className="header__search-error">Error: film name at least 3 characters</div>
          </div>
          <button className="header__button" onClick={() => this.handleClick()}>Search</button>
        </div>
      </header>
    )
  }
}