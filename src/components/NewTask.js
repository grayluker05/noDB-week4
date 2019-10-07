import React, {Component} from 'react';

export default class NewTask extends Component {
    constructor(){
        super();

        this.state = {
            input: ''
        }
    }

    handleAdd = () => {
        this.props.add(this.state.input);
        this.setState({
            input: ''
        });
    }

    render(){
        return(
            <div>
                <input 
                name = 'task'
                value={this.props.task}
                placeholder='New Task'
                onChange={
                    (e) => {
                        this.props.update(e)
                    }
                }
                />
                <button onClick={this.handleAdd}>Add</button>
            </div>
        )
    }
}