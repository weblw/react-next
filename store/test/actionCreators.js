import { INCER, DECRE } from './actionTypes'

export const incre = payload => ({
  type: INCER,
  payload
})

export const decre = payload => ({
  type: DECRE,
  payload
})

export const async = payload => dispatch => {
  setTimeout(() => {
    dispatch({
      type: INCER,
      payload
    })
  }, 1000)
}
