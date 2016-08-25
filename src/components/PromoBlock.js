import React, { Component } from 'react';

class PromoBlock extends Component {
    render () {
        return (
            <div className="result-panel">
                <div className="panel panel-default">
                    <div className="panel-heading">{this.props.promoKey}</div>
                        <div className="panel-body">
                            <img src={this.props.imagePath} className="promo-image" alt={this.props.name} />
                            <p>{this.props.head}</p>
                            <p>{this.props.sell}</p>
                        </div>
                </div>
            </div>
        )
    }
}

export default PromoBlock;