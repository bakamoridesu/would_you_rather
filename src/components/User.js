import React, {Component} from 'react'

class User extends Component {
  render() {
    const {user} = this.props
    return (
      <div>
        <div className='users-list-item'>
          <div className='question-avatar' style={{backgroundImage: user.avatarURL}}/>
          <div className='user-details'>
            <h3 className='question-subheader'> {user.name} </h3>
            <ul>
              <p> Answered: {user.answers} </p>
              <p> Created: {user.questions} </p>
            </ul>
          </div>
          <div className='user-score'>
            <p>Score</p>
            <div className='user-score-number'>
              {user.score}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default User