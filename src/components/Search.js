import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    }
  }
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name] : value
    });
  }

  onSearch = () => {
    this.props.onSearch(this.state.keyword);

    // console.log(this.state);
  }

  render() {
    var { keyword} = this.state
    return (
      <div className="col-md-6">
        <div className="form-group">
          <input 
            type="text" 
            name='keyword'
            value = { keyword }
            onChange = { this.onChange }
            className="form-control" 
            id="name" 
            placeholder="Enter Key ..." />
        </div>
        <button 
          type="button" 
          className="btn btn-info"
          onClick = { this.onSearch }
        >Search</button>
      </div>
    );
  }
}

export default Search;
