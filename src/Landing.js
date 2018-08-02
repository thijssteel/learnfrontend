import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'


class Landing extends Component {
  render() {
    return (
      <Container style={{marginTop: 50}}>
        <h3>Welkom op deze test app</h3>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Registeren</Link>
          </li>
          <li>
            <Link to="/todo">Todo app</Link>
          </li>
        </ul>
      </Container>
    )
  }
}

export default Landing;
