import React, { Component } from 'react';

class Sort extends Component {

  onChange = (event) => {
    event.preventDefault();
    var target = event.target;
    var name = target.name;
    var value = target.value;
    // console.log(name + " = " + value );

    this.props.onSort(value);
  }

  render() {

    return (
      <div className="col-md-6">
        <div className="form-group">
          <select 
            name="sortValue"
            onChange={ this.onChange }
            className="form-control" 
            >
            <option value="">Order by</option>
            <option value="1">A -> Z</option>
            <option value="-1">Z -> A</option>
            <option value="2">By Active</option>
            <option value="-2">By Disable</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Sort;
