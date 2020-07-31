import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: '#F4F4F4',
            padding: '1em',
            borderBottom: '1px dotted #555',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;

        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                    {title}{' '}
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>&times;</button>
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    backgroundColor: '#FF0000',
    color: '#FFF',
    outline: 'none',
    border: 'none',
    padding: '0 .3em',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;