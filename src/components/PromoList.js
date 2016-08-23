import React, { Component } from 'react';
import PromoBlock from './PromoBlock';
import axios from 'axios';
import _ from 'lodash';

class PromoList extends Component {
    getPromos() {
        var this_ = this;
        axios
            .get('http://10.5.18.225:1337/api/promos')
            .then(function(results) {
                return this_.renderPromos(results.data)
            })
    }
    renderPromos(promos) {
        console.log(promos)
        return _.map(promos, (promo, index) =>  
            <PromoBlock key={index} {...promo} {...this.props } /> );
    }
    render () {
        return (
            <div>{this.getPromos()}</div>
        )
    }
}

export default PromoList;