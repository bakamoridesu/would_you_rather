import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionSummary extends Component{
  render() {
    const {question, user, authedUser} = this.props
    return (
    	<div className='question-item-details'>
				<h3>{user.name} asks:</h3>
				<hr/>
				<div className='question-list-item'>
          <div
						className='question-avatar'
						style={{
							backgroundImage: user.avatarURL
						}}></div>
					<div className='question-details'>
						<h4>Would you rather...</h4>
						<ul>
							<p>
								{question.optionOne.text}
							</p>
							<p>
								{question.optionTwo.text}
							</p>
						</ul>
					</div>
        </div>
			</div>

    )
  }
}

function mapStateToProps({questions, users, authedUser}, {id}) {
	const question = questions[id]
	const user = users[question.author]
	return {
		question,
		user,
		authedUser,
	}
}

export default connect(mapStateToProps)(QuestionSummary)