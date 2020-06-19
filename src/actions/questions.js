export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const QUESTION_SAVE_ANSWER = 'QUESTION_SAVE_ANSWER'

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
