import { CHANGE_LANG, GET_LIST_R } from './actionTypes'

export const change_lang = lang => ({
  type: CHANGE_LANG,
  lang
})
export const get_list = list => ({
  type: GET_LIST_R,
  list
})
