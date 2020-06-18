export const RECEIVE_QUESTIONS = 'GET_QUESTIONS'

export function receiveQuestions(questions){
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}
