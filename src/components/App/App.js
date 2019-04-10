import React, { Component, Fragment } from 'react'
import BoilerplateImage from '/public/images/boilerplate-img.svg'

class App extends Component {
  state = {
    message: 'Have fun building! You got this!'
  }
  render() {
    return (
      <Fragment>
        <h1>Parcel React Boilerplate</h1>
        <p>{this.state.message}</p>
        <img src={BoilerplateImage} alt='heart girl' />
      </Fragment>
    )
  }
}

export default App
