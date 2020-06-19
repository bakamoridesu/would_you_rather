import React, {Component} from 'react';
import Home from "./Home";
import Nav from "./Nav";
import {handleInitialData} from "../actions/shared";
import LoadingBar from 'react-redux-loading'
import {connect} from "react-redux";
import {
  BrowserRouter as Router,
  Route} from 'react-router-dom'
import QuestionSummary from "./QuestionSummary";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <div className="container">
          <LoadingBar/>
          <Nav authedUser={this.props.authedUser} avatarURL={this.props.avatarURL}/>
          {
            this.props.loading === true
              ? null
              : <div>
                  <Route path='/' exact component={Home}/>
                  <Route path='/question/:id' component={QuestionSummary}/>
                  <Route path='/answer/:id' component={QuestionSummary}/>
                </div>
          }
        </div>
      </Router>
    )
  }

}

function mapStateToProps({authedUser, users}) {
  return {
    loading: authedUser === null,
    authedUser,
    avatarURL: users[authedUser] ? users[authedUser].avatarURL : null,
  }
}

export default connect(mapStateToProps)(App);
