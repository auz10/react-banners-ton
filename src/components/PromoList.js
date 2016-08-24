import React, { Component } from 'react';
import PromoBlock from './PromoBlock';
import axios from 'axios';
import _ from 'lodash';

class PromoList extends Component {
    constructor (props) {
        super(props)
        this.state = { promos: [],
                       filterVal: props.filterVal || 'justin-intl' 
                    }

    }
    getPromos() {
        axios.get('http://localhost:1337/api/promos').then(function(results) {
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
        var filteredItems = _.filter(this.state.promos, { 'promoKey': this.state.filterVal })
        var items = _.map(filteredItems, (promo, index) =>  
            <PromoBlock key={index} {...promo} {...this.props } /> );

        return (
            <div>  
                {items}
            </div>
        )
    }
}

export default PromoList;