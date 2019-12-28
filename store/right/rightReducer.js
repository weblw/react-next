import { CHANGE_LANG, GET_LIST_R } from './actionTypes'

const stateDefualt = {
  lang: 'javascript',
  rightList: []
}

export default (state = stateDefualt, action) => {
  switch (action.type) {
    case CHANGE_LANG:
      return {
        ...state,
        lang: action.lang
      }
    case GET_LIST_R:
      return {
        ...state,
        rightList: action.list
      }
    default:
      return state
  }
}
