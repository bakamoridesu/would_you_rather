import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from "./User";

class Leaderboard extends Component{
  render() {
    return(
      <ul className='users-list'>
        {this.props.users.map((user) => (
          <li key={user.id}>
            <User user={user}/>
          </li>
        ))}
      </ul>
    )
  }
}

function mapStateToProps({users}) {


  const usersArr = Object.values(users).map((user) => ({
    ...user,
    answers: Object.keys(user.answers).length,
    questions: user.questions.length,
    score: Object.keys(user.answers).length + user.questions.length
  }))

  return {
    users: usersArr.sort((a,b) => b.score - a.score)
  }
}

export default connect(mapStateToProps)(Leaderboard)