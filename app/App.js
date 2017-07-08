import React from 'react'
import { Grid } from 'react-bootstrap'

import Header from './components/Header'
import About from './components/About'
require('./style.css')

class App extends React.Component {
  render() {
    return(
      <div className="app">
        <Grid>
          <Header />
          <About />
        </Grid>
      </div>
    )
  }
}

export default App
