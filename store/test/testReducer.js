import { INCER, DECRE } from './actionTypes'

export const stateDefault = {
  num: 0
}
export default (state = stateDefault, action) => {
  switch (action.type) {
    case INCER:
      return {
        ...state,
        num: state.num + action.payload
      }
    case DECRE:
      return {
        ...state,
        num: state.num - action.payload
      }
    default:
      return state
  }
}
