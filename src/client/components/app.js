import './app.scss';

import React, { Component } from 'react';

class AppContainer extends Component {
  render() {
    return (
      <section>
        <h1>Hello World</h1>
        <button onClick={this._click.bind(this)}>I am a button</button>
      </section>
    );
  }

  _click() {
    console.log('Stuff');
  }
}

export default AppContainer;
