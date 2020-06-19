import {
  _getQuestions,
  _getUsers,
  _saveQuestionAnswer,
} from './_Data'

export function getInitialData() {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}

export function saveQuestionAnswer(authedUser, qid, answer){
  console.log(qid)
  return _saveQuestionAnswer({authedUser, qid, answer})
}

