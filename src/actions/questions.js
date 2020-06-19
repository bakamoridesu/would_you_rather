import { saveQuestion } from "../utils/api";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const QUESTION_SAVE_ANSWER = 'QUESTION_SAVE_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions(questions){
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function questionSaveAnswer(userID, qid, answer){
  return {
    type: QUESTION_SAVE_ANSWER,
    userID,
    answer,
    qid,
  }
}

function addQuestion(question){
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function handleSaveQuestion(optionOneText, optionTwoText){
  return (dispatch, getState) => {
    const {authedUser} = getState()
    console.log('handleSave ', authedUser)
    return saveQuestion(optionOneText, optionTwoText, authedUser)
      .then((question) => dispatch(addQuestion(question)))
  }
}