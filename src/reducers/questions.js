import {RECEIVE_QUESTIONS, QUESTION_SAVE_ANSWER} from "../actions/questions";

export default function questions(state=[], action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return action.questions
    case QUESTION_SAVE_ANSWER:
      return {
        ...state,
        [action.qid]:{
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat([action.userID])
          }
        }
      }
    default:
      return state
  }
}
