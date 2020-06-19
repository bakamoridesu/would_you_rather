import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {setAuthedUser} from "../actions/authedUser";
import {Link} from 'react-router-dom'

class Nav extends Component {

  handleLogout = () => {
    this.props.dispatch(setAuthedUser(null))
  }

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

          <div className='nav-greet'>
            <span>Welcome, {this.props.userName}</span>
            <span className='user-avatar-min' style={{backgroundImage: this.props.avatarURL}}/>
          </div>

          <li>
            <Link to='/' onClick={this.handleLogout}>
              Logout
            </Link>
          </li>

        </ul>
        <hr/>
      </nav>
    )
  }
}

export default connect()(Nav)