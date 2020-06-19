import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/new' exact activeClassName='active'>
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' exact activeClassName='active'>
              Leaderboard
            </NavLink>
          </li>
          <li>

          </li>
          <li>
            Welcome, {this.props.userName}
          </li>
          <button onClick={this.handleLogout}>
            Logout
          </button>
        </ul>
        <hr/>
      </nav>
    )
  }
}
export default Nav