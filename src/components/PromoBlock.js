import React, { Component } from 'react';

class PromoBlock extends Component {
    constructor(){
        super()
        this.state = { active: true }
    }
    switchActive () {
        this.setState({ active: !this.state.active });
    }
    renderPromoInfo () {
        if(this.state.active) {
            return <PromoInfo>
                <InfoItem typeText="Head" defaultValue={this.props.head}/>
                <InfoItem typeText="Sell" defaultValue={this.props.sell}/>
                <InfoItem typeText="CTA" defaultValue={this.props.cta}/>
                <InfoItem typeText="URL" defaultValue={this.props.url}/>
                <InfoItem typeText="Image" defaultValue={this.props.imagePath}/>
            </PromoInfo>
        }
    }
    render () {
        return (
            <div className="result-panel">
                <div className="panel panel-default">
                    <PromoHeading onClick={console.log(1)}>
                        {this.props.promoKey}
                        <span>{this.props.channel.join('/')}</span>
                    </PromoHeading>
                    <PromoBody active={this.state.active}>
                        <PromoImage image={this.props.imagePath} alt={this.props.name}/>
                        {this.renderPromoInfo()}
                    </PromoBody>
                </div>
            </div>
        )
    }
}

class PromoBody extends Component {
    render () {
        var body;
        if(this.props.active) {
            body = <div className="panel-body">{this.props.children}</div>
        }
        return (
            <div>{body}</div>
        )
    }
}

const PromoHeading = (props) => (
    <div className="panel-heading">
        {props.children}
    </div>
);

const PromoImage = (props) => (
    <div className="left-col">
        <img src={props.image} className="promo-image" alt={props.alt} />
    </div>
);

const PromoInfo = (props) => (
    <div className="right-col">
        <ul className="list-group">
            {props.children}
        </ul>
    </div>
);

const InfoItem = (props) => (
    <li className="list-group-item">
        <div className="input-key">{props.typeText}</div>
        {props.defaultValue}
    </li>
);

export default PromoBlock;