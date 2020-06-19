import React, {Component} from 'react'
import {setAuthedUser} from "../actions/authedUser";
import {connect} from 'react-redux'


class Auth extends Component {

  state = {
    value: 'natsudragneel'
  }
  handleAuth = (e) => {
    e.preventDefault()
    this.props.dispatch(setAuthedUser(this.state.value))
  }
  handleSelect = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {

    return (
      <div>
        <form className='form-style-5' onSubmit={this.handleAuth}>
          <legend>Welcome to Would you rather app!</legend>
          <hr/>
          <p> Please login with your character to continue </p>
          <select id="user" onChange={this.handleSelect} value={this.state.value}>
            {Object.keys(this.props.users).map((user) => (
              <option key={user} value={user}>{this.props.users[user].name}</option>
            ))}
          </select>
          <input type='submit' value='Login!'/>
        </form>
      </div>
    )
  }
}

function mapStateToProps({users}){
  return {
    users,
  }
}

export default connect(mapStateToProps)(Auth)

