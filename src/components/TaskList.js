import React, { Component } from 'react';

import TaskItem from './TaskItem';

class TaskList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterName: '',
      filterStatus: -1
    };
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.props.onFilter(
      name === 'filterName' ? value : this.state.filterName,
      name === 'filterStatus' ? value : this.state.filterStatus
    );
    this.setState({
      [name]: value
    });
  }

  render() {
    var { tasks } = this.props;
    var { filterName, filterStatus } = this.state;
    var elementTasks = tasks.map((task, index) => {
      return <TaskItem 
              key = { task.id } 
              index = { index } 
              task =  { task }
              onUpdateStatus = { this.props.onUpdateStatus }
              onDeleteTask = { this.props.onDeleteTask }
              onEditTask = { this.props.onEditTask }
            />;
    });

    return (
      <div className="show-list-todo-wrapper">
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Order</th>
                <th>Name</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th></th>
                <th>
                  <input
                    type="text"
                    className="form-group"
                    name="filterName"
                    value={ this.state.filterName }
                    onChange = { this.onChange }
                  />
                </th>
                <th>
                  <select
                    className="form-group"
                    name="filterStatus"
                    value= { this.state.filterStatus }
                    onChange = { this.onChange }
                  >
                    <option value="-1">All</option>
                    <option value="0">Disable</option>
                    <option value="1">Active</option>
                  </select>
                </th>
                <th></th>
              </tr>
              { elementTasks }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TaskList;
