import React, { Component } from 'react';
import PromoBlock from './PromoBlock';
import axios from 'axios';
import _ from 'lodash';

class PromoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            promos: []
        }
    }
    componentDidMount() {
        var this_ = this;
        axios
            .get('http://localhost:1337/api/promos')
            .then(function (results) {
                this_.setState({ promos: results.data })
            });
    }
    render() {
        var filteredItems = this.searchPromos(this.props.filterVal, this.state.promos);
        var items = _.map(filteredItems, (promo, index) =>
            <PromoBlock key={index} {...promo} {...this.props } />);

        return (
            <div>
                {items}
            </div>
        )
    }
    searchPromos(filter, promos) {
        var re = new RegExp(filter);
        var reItems = [];
        for (var key in promos) {
            if (re.test(promos[key].promoKey)) {
                reItems.push(promos[key])
            }
        }
        return reItems;
    }
}

export default PromoList;