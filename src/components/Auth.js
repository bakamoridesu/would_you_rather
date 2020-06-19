import React, {Component} from 'react'
import {setAuthedUser} from "../actions/authedUser";
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class Auth extends Component {
  handleAuth = () => {
    this.props.dispatch(setAuthedUser('natsudragneel'))
  }

  render() {

    return (
      <div>
        <button onClick={this.handleAuth}>
          Login!
        </button>
      </div>
    )
  }
}

export default connect()(Auth)

