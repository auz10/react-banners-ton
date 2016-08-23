import React, { Component } from 'react';

class PromoBlock extends Component {
    render () {
        console.log(1)
        return (
            <div className="result-panel">
                <div className="panel panel-success">
                    <div className="panel-heading">{this.props.head}</div>
                        <div className="panel-body">
                            {this.props.imagePath}
                        </div>
                </div>
            </div>
        )
    }
}

export default PromoBlock;