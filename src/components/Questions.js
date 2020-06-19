import React, { Component } from 'react';
import QuestionSummary from "./QuestionSummary";
class Questions extends Component {
  render() {
    return (
      <ul className='question-list'>
        {
          this.props.questions.map((q) => (
            <li key={q}>
              <QuestionSummary id={q} answered={this.props.answered} viewMode='preview'/>
            </li>
          ))
        }
      </ul>
    );
  }

}

export default Questions;
