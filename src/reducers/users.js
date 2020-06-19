import {RECEIVE_USERS, USER_SAVE_ANSWER} from "../actions/users";

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
    default:
      return state
  }
}
