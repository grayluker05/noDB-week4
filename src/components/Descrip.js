import React, {Component} from 'react';

export default class Descrip extends Component {
    constructor(){
        super();

        this.state = {
            input: '',
            editing: false,
            // editInput: this.props.element
        }
    }


    handleAdd = () => {
        this.props.add(this.state.input);
        this.setState({
            input: ''
        });
    }

    render(){
        console.log(this.props)
        return(
            <div>
                <input 
                name='description'
                value={this.props.description}
                placeholder='Description'
                onChange={
                    (e) => {
                        this.props.update(e)
                    }
                }
                />
            </div>
        )
    }
}
