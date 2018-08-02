import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, Container, Input, InputGroup } from 'reactstrap'

import { createFetchRequest } from '../../common/actions'
import { TODO_FETCH_LIST, TODO_REMOVE, TODO_ADD } from '../todoActions'

class Todo extends Component {
  constructor(props){
    super(props)

    this.state = {
      todoName: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      todoName: event.target.value
    })
  }

  componentDidMount () {
    this.props.loadTodos()
  }

  addTodo = () => {
    this.props.addTodo({
      name: this.state.todoName
    })
  }

  render() {
    return (
      <Container style={{marginTop: 50}}>
        <InputGroup style={{marginBottom: 20}}>
          <Input 
            onChange={this.handleChange}
            value={this.state.todoName}
            placeholder="naam nieuwe todo"
          />
          <Button onClick={this.addTodo}>Nieuwe todo</Button>
        </InputGroup>
        <h3>Lijst todo's</h3>
        {this.props.todos.length > 0
        ? <ul className="list-group">
          {this.props.todos.map(this.renderTodo)}
        </ul>
        : <p>Nog geen todo's</p>}
      </Container>
    )
  }

  renderTodo = (todo) => {
    return <li className="list-group-item" style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      <span >{todo.name}</span>
      <div className="ml-auto">
        <Button onClick={() => this.props.deleteTodo(todo.id)}>Verwijderen</Button>
      </div>
    </li>
  }
}


const mapStateToProps = state => {
  return {
    todos: state.todo.todos,
    loading: state.todo.loading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadTodos(){
      dispatch(createFetchRequest(TODO_FETCH_LIST))
    },
    deleteTodo(id){
      dispatch(createFetchRequest(TODO_REMOVE, {id}))
    },
    addTodo(payload){
      dispatch(createFetchRequest(TODO_ADD, payload))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)

