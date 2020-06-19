import {ADD_QUESTION_TO_USER, RECEIVE_USERS, USER_SAVE_ANSWER} from "../actions/users";

export default function users(state=[], action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users
    case USER_SAVE_ANSWER:
      return {
        ...state,
        [action.userID]:{
          ...state[action.userID],
          answers: {
            ...state[action.userID].answers,
            [action.qID]: action.answer
          }
        }
      }
    case ADD_QUESTION_TO_USER:
      return {
        ...state,
        [action.userID]:{
          ...state[action.userID],
          questions: state[action.userID].questions.concat([action.qID])
        }
      }
    default:
      return state
  }
}
