import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav(props) {
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

        </li>
        <li>
           Welcome, {props.userName}
        </li>
      </ul>
      <hr/>
    </nav>
  )
}