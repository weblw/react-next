import { CHANGE_CATEGORY, GET_LIST } from './actionTypes'

export const change_category = category => ({
  type: CHANGE_CATEGORY,
  category
})
export const get_list = list => ({
  type: GET_LIST,
  list
})
