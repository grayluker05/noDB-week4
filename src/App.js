import React, { Component } from "react";
import "./App.css";
import NewTask from "./components/NewTask";
import Head from "./components/Head";
import Descrip from "./components/Descrip";
import List from "./components/List";
import axios from "axios";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      task: "",
      description: ""
    };
  }

  componentDidMount() {
    axios
      .get("/api/list")
      .then(res => {
        this.setState({
          list: res.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  delete = id => {
    axios.delete(`api/list/${id}`).then(res => {
      this.setState({
        list: res.data
      });
    });
  };

  save = (id, updatedToDo) => {
    console.log("hit save", id, updatedToDo);
    axios.put(`/api/list/${id}`, { updatedToDo: updatedToDo }).then(res =>
      this.setState(
        {
          list: res.data
        },
        () => {
          console.log("heyooo", this.state.list);
        }
      )
    );
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleAddTask = () => {
    axios
      .post("/api/list", {
        task: this.state.task,
        description: this.state.description
      })
      .then(res => this.setState({ list: res.data }));
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <div className="logo">
          <img
            src="http://servicemax123.com/wp-content/uploads/2015/09/red-check-mark-symbol-353215.jpg"
            alt="Check mark"
            height="75px"
            width="100px"
          />
        </div>
        <div className="info">
          <div className="info-button">Information</div>
          <div className="info-button">About</div>
        </div>
        <Head />
        <NewTask
          add={this.handleAddTask}
          update={this.handleInputChange}
          task={this.state.task}
        />
        <Descrip
          enter={this.state.list}
          add={this.handleAddDescrip}
          update={this.handleInputChange}
          description={this.state.description}
        />
        <div className="listflex">
          <List tasks={this.state.list} delete={this.delete} save={this.save} />
        </div>
      </div>
    );
  }
}
