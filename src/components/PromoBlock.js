import React, { Component } from 'react';

class PromoBlock extends Component {
    render () {
        console.log(1)
        return (
            <div className="result-panel">
                <div className="panel panel-success">
                    <div className="panel-heading">{this.props.promoKey}</div>
                        <div className="panel-body">
                            <img src={this.props.imagePath} className="promo-image"/>
                            <p>{this.props.head}</p>
                            <p>{this.props.sell}</p>
                        </div>
                </div>
            </div>
        )
    }
}

export default PromoBlock;