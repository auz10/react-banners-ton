import React, { Component } from 'react';
import PromoBlock from './PromoBlock';
import axios from 'axios';
import _ from 'lodash';

class PromoList extends Component {
    constructor (props) {
        super()
        this.state = { promos: [] }
    }
    getPromos() {
        axios.get('http://10.5.18.225:1337/api/promos').then(function(results) {
            return results.data
        })
    }
    componentDidMount () {
        var this_ = this;
        axios
           .get('http://10.5.18.225:1337/api/promos')
           .then(function(results) {
              this_.setState({promos: results.data})
        });
    }
    render () {
        var items = _.map(this.state.promos, (promo, index) =>  
            <PromoBlock key={index} {...promo} {...this.props } /> );

        return (
            <div>  
                {items}
            </div>
        )
    }
}

export default PromoList;