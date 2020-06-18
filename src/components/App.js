import React, {Component} from 'react';
import Home from "./Home";
import {handleInitialData} from "../actions/shared";
import LoadingBar from 'react-redux-loading'
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div className="container">
        <LoadingBar/>
        <Home/>
      </div>
    )
  }

}

function mapStateToProps({authedUser}){
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
