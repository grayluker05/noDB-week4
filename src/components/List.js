import React, {Component} from 'react';
import Todo from './Todo';

export default class List extends Component {
    constructor(props){
        super(props);


        this.state = {
            editing: false,
            editInput: props.element
          };
        }
      
        edit = (id) => {
          const { editing } = this.state;
          this.setState({
            editing: !editing
          });
        };
      
        handleInput = e => {
          this.setState({
            [e.target.name]: e.target.value
          });
        };
      
       

    render(){
        console.log(this.props.tasks)
        let list = this.props.tasks.map((element, index) => {
            return <Todo key={index} task={element.task} descrip={element.description} id={element.id} delete={this.props.delete} save={this.props.save}/>;
        })
        return <div>{list}</div>;
    }
}