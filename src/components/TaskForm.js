import React, { Component } from 'react';

class TaskForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      status: false
    }
  }

  componentWillMount() {
    if(this.props.task) {
      // console.log(this.props.taskEditing.name);
      this.setState({
        id: this.props.task.id,
        name: this.props.task.name,
        status: this.props.task.status
      });
    }
      console.log(this.state);
  }

  onChange = (event) => {
    event.preventDefault();
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if(name === 'status') {
      value = target.value === 'true' ? true : false;
    }
    // console.log("value :" + value);

    this.setState({
      [name] : value 
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state);
    this.props.onSubmit(this.state);
    this.onClearForm();
    this.onCloseForm();
  }

  onCloseForm = () => {
    this.props.onCloseForm();
  }

  onClearForm = () => {
    console.log("onClearForm");
    this.setState({
      name : '',
      status : false
    });
  }

  render() {
    var { taskEditing } = this.props;
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">{ taskEditing !== null ? 'Edit todo' : 'Add todo'}</h3>
          <span 
            className="btn-close"
            onClick = { this.onCloseForm }
          ><i className="fas fa-window-close"></i></span>
        </div>
        <div className="panel-body">
          <form onSubmit = { this.onSubmit }>
            <div className="form-group">
              <label>Name: </label>
              <input 
                type="text" 
                name="name" 
                value = { this.state.value } 
                onChange = { this.onChange }
                className="form-control" 
              />
            </div>
            <div className="form-group">
              <label>Status: </label>
              <select 
                name="status" 
                value={ this.state.status } 
                onChange = { this.onChange }
                className="form-control" >
                <option value={ true }>Active</option>
                <option value={ false }>Disable</option>
              </select>
            </div>
            <button type="submit" className="btn btn-info">Save</button>&nbsp;
            <button 
              type="button" 
              className="btn btn-danger"
              onClick = { this.onCloseForm }
            >Cancel</button>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;
