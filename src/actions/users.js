export const RECEIVE_USERS = 'RECEIVE_USERS'
export const USER_SAVE_ANSWER = 'USER_SAVE_ANSWER'
export const USER_REMOVE_ANSWER = 'USER_REMOVE_ANSWER'

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function userSaveAnswer(userID, qID, answer){
  return {
    type: USER_SAVE_ANSWER,
    userID,
    qID,
    answer,
  }
}

export function userRemoveAnswer(userID, qID){
  return {
    type: USER_REMOVE_ANSWER,
    userID,
    qID,
  }
}
