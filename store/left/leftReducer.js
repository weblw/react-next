import { CHANGE_CATEGORY, GET_LIST } from './actionTypes'

const stateDefualt = {
  category: 'all',
  leftList: []
}

export default (state = stateDefualt, action) => {
  switch (action.type) {
    case CHANGE_CATEGORY:
      return {
        ...state,
        category: action.category
      }
    case GET_LIST:
      return {
        ...state,
        leftList: action.list
      }
    default:
      return state
  }
}
