import React, {Component} from 'react'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import Questions from "./Questions";
import 'react-tabs/style/react-tabs.css';
import {connect} from 'react-redux'

class Home extends Component {

  render() {
    const {answeredQuestions, unansweredQuestions} = this.props

    return (
      <div className='container'>
        <Tabs className='question-tabs'
              selectedTabClassName='question-tabs__tab--selected'>
          <TabList className='question-tabs__tab-list'>
            <Tab className='question-tabs__tab'>Unanswered questions</Tab>
            <Tab className='question-tabs__tab'>Answered questions</Tab>
          </TabList>
          <TabPanel>
            <Questions questions={unansweredQuestions} answered={false}/>
          </TabPanel>
          <TabPanel>
            <Questions questions={answeredQuestions} answered={true}/>
          </TabPanel>

        </Tabs>
      </div>
    )
  }
}

function mapStateToProps({questions, users, authedUser}) {
  const answeredQuestions = Object.keys(users[authedUser].answers)
  const unansweredQuestions = Object.keys(questions).filter((q) => {
    return !answeredQuestions.includes(q)
  })
  return {
    answeredQuestions,
    unansweredQuestions,
  }
}

export default connect(mapStateToProps)(Home)