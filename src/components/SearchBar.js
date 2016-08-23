import React, { Component } from 'react';

class FilterBar extends Component {
    handleSubmit(event) {
        event.preventDefault()
        console.log(this.refs.filterBar.value)
        this.props.getPromos(this.refs.filterBar.value);
        this.refs.filterBar.value = '';
    }
    render() {
        return (
            <form onSubmit={ this.handleSubmit.bind(this) }>
                <div className="input-group input-group-lg col-lg-10">             
                <input type="text" 
                       className="form-control" 
                       placeholder="Filter.."
                       ref="filterBar"
                />
            </div>
            </form>
        )
    }
}

export default FilterBar;