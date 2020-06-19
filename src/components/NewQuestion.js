import React, {Component} from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestion } from "../actions/questions";
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    toHome: false,
  }

  handleChangeOptionOne = (e) => {
    e.preventDefault()
    this.setState({
      optionOne: e.target.value,
    })
  }

  handleChangeOptionTwo = (e) => {
    e.preventDefault()
    this.setState({
      optionTwo: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch(handleSaveQuestion(
      this.state.optionOne,
      this.state.optionTwo))
    this.setState({
      optionOne: '',
      optionTwo: '',
      toHome: true
    })
  }

  render() {

    if(this.state.toHome){
      return <Redirect to='/'/>
    }

    return (

      <form className="form-style-5" onSubmit={this.handleSubmit}>
        <legend> Create new question!</legend>
        <hr/>
        <fieldset>
          <label htmlFor='optionOne'>Would you rather...</label>
          <textarea
            id='optionOne'
            type="text"
            placeholder='Enter option 1'
            value={this.state.optionOne}
            onChange={this.handleChangeOptionOne}
          />
          <label htmlFor='optionTwo'> OR </label>
          <textarea
            id='optionTwo'
            type="text"
            placeholder='Enter option 2'
            value={this.state.optionTwo}
            onChange={this.handleChangeOptionTwo}
          />
          <input type="submit" value="Submit"/>
        </fieldset>
      </form>

    )
  }
}

export default connect()(NewQuestion);