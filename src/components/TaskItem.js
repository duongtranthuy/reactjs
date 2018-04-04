import React, { Component } from 'react';

class TaskItem extends Component {

  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id);
  }

  onDeleteTask = () => {
    this.props.onDeleteTask(this.props.task.id);
  }

  onEditTask = () => {
    this.props.onEditTask(this.props.task.id);
  }

  render() {
    var { task, index } = this.props;

    return (
      <tr>
        <td>{ index }</td>
        <td>{ task.name }</td>
        <td><span 
              className={ task.status === true ? 'label label-success' : 'label label-danger'}
              onClick = { this.onUpdateStatus }
            >{ task.status === true ? 'Active' : 'Disable'}</span></td>
        <td>
          <button 
            type="button" 
            className="btn btn-warning"
            onClick = { this.onEditTask }
          >Edit</button>&nbsp;
          <button 
            type="button" 
            className="btn btn-danger"
            onClick = { this.onDeleteTask }
          >Delete</button>
        </td>
      </tr>
    );
  }
}

export default TaskItem;
