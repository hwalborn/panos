import React from 'react'

import Header from './components/Header'
import About from './components/About'
require('./style.css')

class App extends React.Component {
  render() {
    return(
      <div className="app">
        <Header />
        <About />
      </div>
    )
  }
}

export default App
