import React, { Component } from 'react';

class PromoBlock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            promoClicked: false
        };
    }
    handleClick () {
        console.log(this.props.promoKey)
        this.setState({ promoClicked: !this.state.promoClicked })
    }
    renderBody() {  
        if (this.state.promoClicked) {
            return (
                <div className="panel-body">
                    <img src={this.props.imagePath} className="promo-image lrg" alt={this.props.name} />
                    <p>{this.props.head}</p>
                    <p>{this.props.sell}</p>
                    <p>{this.props.url}</p>
                    <p>{this.props.cta}</p>
                </div>
             )
        } else {
            return (
                <div className="panel-body">
                    <img src={this.props.imagePath} className="promo-image" alt={this.props.name} />
                    <p>{this.props.head}</p>
                    <p>{this.props.sell}</p>
                </div>
             )
        }      
    }
    render () {
        return (
            <div className="result-panel">
                <div className="panel panel-default" onClick={this.handleClick.bind(this)}>
                    <div className="panel-heading">{this.props.promoKey}<span>{this.props.channel.join('/')}</span></div>
                        {this.renderBody()}
                </div>
            </div>
        )
    }
}

export default PromoBlock;