import React, { Component } from "react";

export default class Todo extends Component {
  constructor() {
    super();

    this.state = {
      newTask: "",
      newDescription: "",
      editing: false
    };
  }

  handleChange = (e) => {
      const {name, value} = e.target;
      this.setState({
          [name]: value
      })
  }

  saveChange = (id) => {
      console.log(id)
      let newObj = {
          task: this.state.newTask,
          description: this.state.newDescription
      }
      console.log(newObj)
      this.props.save(id, newObj)
      this.setState({
        editing: !this.state.editing
      });
  }

  toggleEdit = () => {
    console.log("hit edit");
    this.setState({
      editing: !this.state.editing
    });
  };

  render() {
    console.log(this.state);
    return (
      <div id="display">
        {this.state.editing ? (
          <div>
            <input value={this.newTask} name='newTask' onChange={(e) => this.handleChange(e)}/>
            <input value={this.newDescription} name ='newDescription' onChange={(e) => this.handleChange(e)}/>
            <button onClick={() => this.saveChange(this.props.id)}>Save</button>
          </div>
        ) : (
          <div>
            <p>{this.props.task}</p>
            <p>{this.props.descrip}</p>
            <button onClick={this.toggleEdit}>Edit</button>
            <button onClick={() => this.props.delete(this.props.id)}>Delete</button>
          </div>
        )}
      </div>
    );
  }
}
