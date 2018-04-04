import React, { Component } from 'react';

import Search from './Search';
import Sort from './Sort';

class Control extends Component {
  render() {
    return (
      <div className="action-control-wrapper">
        <div className="row">
          <Search 
            onSearch = { this.props.onSearch }
          />
          <Sort 
            onSort = { this.props.onSort }
            sortBy = { this.props.sortBy }
          />  
        </div>
      </div>
    );
  }
}

export default Control;
