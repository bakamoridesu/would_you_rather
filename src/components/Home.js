import React, {Component} from 'react'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import Questions from "./Questions";
import 'react-tabs/style/react-tabs.css';
class Home extends Component {

  render() {
    return (
      <div className='container'>
        <Tabs className='question-tabs'
              selectedTabClassName='question-tabs__tab--selected'>
          <TabList className='question-tabs__tab-list'>
            <Tab className='question-tabs__tab'>Answered questions</Tab>
            <Tab className='question-tabs__tab'>Unanswered questions</Tab>
          </TabList>

          <TabPanel>
            <Questions value="Answered"/>
          </TabPanel>
          <TabPanel>
            <Questions value="Unanswered"/>
          </TabPanel>
        </Tabs>
      </div>
    )
  }
}

export default Home