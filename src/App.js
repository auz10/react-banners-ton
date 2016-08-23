import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import PromoList from './components/PromoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterVal: ''
    };
  }
  filterInput(value) {
    this.setState({ filterVal: value})    
  }
  render() {
    console.log(this.state.filterVal)
    return (
      <div className="App">
        <div className="row">
          <div className="col-lg-12">
            <SearchBar filterInput={this.filterInput.bind(this)}/>
            <PromoList filterVal={this.state.filterVal} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
