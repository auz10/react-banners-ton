import React, { Component } from 'react';

class PromoBlock extends Component {
    constructor(){
        super()
        this.state = { active: false }
    }
    switchActive () {
        console.log(1)
        this.setState({ active: !this.state.active });
    }
    saveInfo (infoItem) {
        console.log('promoBLock'+infoItem)
    }
    updatePromoField(value) {
        console.log('upv: '+value)
    }
    renderPromoInfo () {
        if(this.state.active) {
            return <PromoInfo>
                <InfoItem typeText="Head" defaultValue={this.props.head} updatePromoField={this.updatePromoField}/>
                <InfoItem typeText="Sell" defaultValue={this.props.sell} updatePromoField={this.updatePromoField}/>
                <InfoItem typeText="CTA" defaultValue={this.props.cta} updatePromoField={this.updatePromoField}/>
                <InfoItem typeText="URL" defaultValue={this.props.url} updatePromoField={this.updatePromoField}/>
                <InfoItem typeText="Image" defaultValue={this.props.imagePath} updatePromoField={this.updatePromoField}/>
                <SaveButton saveInfo={this.saveInfo} />
            </PromoInfo>
        }
    }
    render () {
        return (
            <div className="result-panel">
                <div className="panel panel-default">
                    <div className="panel-heading" onClick={this.switchActive.bind(this)}>
                        {this.props.promoKey}
                        <span>{this.props.channel.join('/')}</span>
                    </div>
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

class InfoItem extends Component {
    constructor (props) {
        super(props)
        this.state = {
            inputValue: this.props.defaultValue
        }
    }
    updateField (e) {
        this.setState({inputValue: e.target.value})
        this.props.updatePromoField(this.state.inputValue)
    }
    render () {
        return (
            <div className="form-group">
                <input type="text" 
                    className="form-control form-control-sm"
                    value={this.state.inputValue} 
                    placeholder={this.props.typeText}
                    onChange={this.updateField.bind(this)}
                />
            </div>
        )
    }
}

class SaveButton extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    handleSubmit() {
        this.props.saveInfo("yo")
    }
    render () {
        return (
            <button type="button" 
                    className="btn btn-primary save-btn"
                    onClick={this.handleSubmit.bind(this)}>
                        Save
            </button>
        )
    }
}

const PromoImage = (props) => (
    <div className="left-col">
        <img src={props.image} className="promo-image" alt={props.alt} />
    </div>
);

const PromoInfo = (props) => (
    <div className="right-col">
        <form>
        {props.children}
        </form>
    </div>
);

export default PromoBlock;