import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class QuestionSummary extends Component {

  preview() {
    const {question, user, answered} = this.props
    return (
      <div className='question-item-preview'>
        <h3 className='question-header'>
          {user.name} asks:
        </h3>
        <hr/>
        <div className='question-list-item'>
          <div className='question-avatar' style={{ backgroundImage: user.avatarURL }}/>
          <div className='question-details'>
            <h4 className='question-subheader'> Would you rather... </h4>
            <div className='option-preview'>...{question.optionOne.text.substring(0, 15)}...</div>
            <Link to={{
              pathname: `/question/${question.id}`,
              state: {
                viewMode: answered? 'results' : 'answer'
              }
            }} className='btn'> View full</Link>
          </div>
        </div>
      </div>
    )
  }

  answer() {
    const {question, user, authedUser} = this.props
    return (
      <div className='question-item-details'>
        <h3 className='question-header'>
          {user.name} asks:
        </h3>
        <hr/>
        <div className='question-list-item'>
          <div className='question-avatar' style={{ backgroundImage: user.avatarURL }}/>
          <div className='question-details'>
            <h4 className='question-subheader'> Would you rather... </h4>
            <ul>
              <p> {question.optionOne.text} </p>
              <p> {question.optionTwo.text} </p>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  results() {
    const {question, user, authedUser} = this.props
    return (
      <div className='question-item-details'>
        <h3 className='question-header'>
          Asked by ${user.name}
        </h3>
        <hr/>
        <div className='question-list-item'>
          <div className='question-avatar' style={{ backgroundImage: user.avatarURL }}/>
          <div className='question-details'>
            <h4 className='question-subheader'> Would you rather... </h4>
            <ul>
              <p> {question.optionOne.text} </p>
              <p> {question.optionTwo.text} </p>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  handleRender(viewMode){
    if(viewMode === 'answer') return this.answer()
    if(viewMode === 'results') return this.results()
    return this.preview()
  }

  render() {
    const {viewMode='preview'} = this.props
    return this.handleRender(viewMode)
  }
}

function mapStateToProps({questions, users, authedUser}, {id, match, location, viewMode}) {
  const questionID = id ? id : match.params.id;
  const question = questions[questionID]
  console.log('????????????????', users)
  // if viewMode is not found in props, search in location or calculate
  if(!viewMode && location && location.state && location.state.viewMode) viewMode = location.state.viewMode
  if(!viewMode){
    if(Object.keys(users[authedUser].answers).includes(questionID)){
      viewMode = 'results'
    } else {
      viewMode = 'answer'
    }
  }

  const user = users[question.author]
  return {
    question,
    user,
    authedUser,
    viewMode,
  }
}

export default connect(mapStateToProps)(QuestionSummary)