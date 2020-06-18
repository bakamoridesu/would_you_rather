export const RECEIVE_QUESTIONS = 'RECEIVE_USERS'

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}