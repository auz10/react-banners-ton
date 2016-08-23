import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import PromoList from './components/PromoList';

var testData = [
  { promoKey: 'justin-intl', head: 'JUST IN', imagePath: '//cache.theoutnet.com/fluidimages/ext/imgix/week32/Reactive_JustIN_APP.jpg' },
  { promoKey: 'miguelina', head: 'MIGUELINA FOR THE OUTNET', imagePath: '//cache.theoutnet.com/fluidimages/ext/imgix/week27/miguelina_v2.jpg' },
  { promoKey: 'wang', head: 'ALEXANDER WANG', imagePath: '//cache.theoutnet.com/fluidimages/ext/imgix/week15/Alexander_Wang.jpg' },
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testData
    };
  }
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-lg-12">
            <SearchBar />
            <PromoList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
