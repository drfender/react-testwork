import React from 'react'
import FilmListing from './componets/FilmListing'
import SearchHeader from './componets/SearchHeader'
export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      searchText: '',
      listingArray: [],
      page: 1,
      maxPage: 2
    }
    this.handleChange = this.handleChange.bind(this)
    this.fetchFilms = this.fetchFilms.bind(this)
  }

  async fetchFilms (value) {
    if (this.state.page <= this.state.maxPage) {
      let url = new URL('http://www.omdbapi.com/')
      let params = {
        apikey: 'd777cf78',
        s: value,
        type: 'movie',
        page: this.state.page
      }
      let filmList
      let maxPage
      
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
      await fetch(url).then(r => r.json()).then(r => { 
        if (r.Response !== 'False') {
          filmList = r.Search
          maxPage = Math.ceil(+r.totalResults / 10)
        } else {
          filmList = []
        }
      }).catch(() => filmList = [])
      const allFilms = [...this.state.listingArray, ...filmList]
      this.setState({
        listingArray: allFilms,
        maxPage
      })
    }
  }

  handleChange (value) {
    this.setState({
      searchText: value,
      listingArray: [],
      page: 1,
      maxPage: 2
    }, () => {
      this.fetchFilms(value)
    })
  }

  loadMoreFilms = () => {
    this.setState({
      page: this.state.page + 1
    }, () => {
      this.fetchFilms(this.state.searchText)
    })
  }

  render() {
    
    return (
      <div>
        <SearchHeader onChange={this.handleChange} />
        <div className="container content">
          {
            this.state.listingArray.length ? 
              <FilmListing 
                films={this.state.listingArray}
                handleClick={() => this.loadMoreFilms()}
                showLoadMore={this.state.maxPage > this.state.page}
              /> : null
          } 
        </div>
      </div>
    )
  }
}
