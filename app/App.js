import React from 'react'

import Header from './components/Header'
require('./style.css')

class App extends React.Component {
  render() {
    return(
      <div className="app">
        <Header />
        <h1>Hi</h1>
      </div>
    )
  }
}

export default App
