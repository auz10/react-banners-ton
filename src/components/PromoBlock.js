import React, { Component } from 'react';

class PromoBlock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false
        };
    }
    handleClick () {
        this.setState({ active: !this.state.active })
    }
    handleInputSave (event) {
        event.preventDefault()
    }
    handleChange() {
        this.setState({ 
            head: this.refs.headInput.value,
            sell: this.refs.sellInput.value,
            cta: this.refs.ctaInput.value,
            url: this.refs.urlInput.value,
            image: this.refs.imageInput.value
        })
    }
    isActive (value) {
        return (value === this.state.active) ? 'clicked' : '';
    }
    renderBody() {  
        return (
            <div className="panel panel-default {this.isActive(true)}">
                <div className="panel-heading" onClick={this.handleClick.bind(this)}>{this.props.promoKey}<span>{this.props.channel.join('/')}</span></div>
                <div className="panel-body">
                    <div className="left-col {this.isActive(true)}">
                        <img src={this.props.imagePath} className="promo-image {this.isActive(true)}" alt={this.props.name} />
                    </div>
                    <div className="right-col {this.isActive(true)}">
                        <ul className="list-group">
                            <InfoListItem typeText="Head" defaultValue={this.props.head} onChange={this.handleChange.bind(this)} active={this.state.active}/>
                            <InfoListItem typeText="Sell" defaultValue={this.props.sell} onChange={this.handleChange.bind(this)} active={this.state.active}/>
                            <InfoListItem typeText="CTA" defaultValue={this.props.cta} onChange={this.handleChange.bind(this)} active={this.state.active}/>
                            <InfoListItem typeText="URL" defaultValue={this.props.url} onChange={this.handleChange.bind(this)} active={this.state.active}/>
                            <InfoListItem typeText="Image" defaultValue={this.props.imagePath} onChange={this.handleChange.bind(this)} active={this.state.active}/>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    render () {
        console.log(this.state.active)
        return (
            <div className="result-panel">
                {this.renderBody()}
            </div>
        );
    }
}

class InfoListItem extends Component {
    render () {
        var text = this.props.defaultValue
        if (this.props.active) {
            text = <input defaultValue={this.props.defaultValue}
                onChange={this.props.handleChange}
                ref={this.props.ref}
            />
        } else {
            text = this.props.defaultValue
        }
        return (
            <li className="list-group-item">
                <div className="input-key">{this.props.typeText}</div>
                {text}
            </li>
        );
    }
}

export default PromoBlock;