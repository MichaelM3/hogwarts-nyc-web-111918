import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer';
// import Hogimgs from '../hog-imgs'

class App extends Component {

  state = {
    hogs: hogs
  }

  filteredHog = (event) => {
    //give me the hogs.
    console.log(event.target.value, 'hello from App');
    const filteredHogs = hogs.filter(hog => {
      if(event.target.value === 'greased') {
        return hog.greased
      } else if (event.target.value === 'all') {
        return true
      }
    }) // end of filter.
    this.setState({hogs: filteredHogs})
  }


  render() {
    return (
      <div className="App">
          < Nav filteredHog={this.filteredHog} />
          <HogContainer hogs={this.state.hogs}/>

      </div>
    )
  }
}

export default App;
