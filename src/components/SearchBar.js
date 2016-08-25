import React, { Component } from 'react';

class FilterBar extends Component {
    constructor (props) {
        super(props)
        this.state = {};
    }
    handleSubmit(event) {
        event.preventDefault()
        this.props.filterInput(this.refs.filterBar.value)
    }
    render() {
        return (
            <form>
                <div className="input-group input-group-lg col-lg-10">             
                <input type="text" 
                       className="form-control" 
                       placeholder="Filter.."
                       ref="filterBar"
                       onKeyUp={this.handleSubmit.bind(this)}
                />
            </div>
            </form>
        )
    }
}

export default FilterBar;