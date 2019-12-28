import request from '../axios'

export function GET_LEFT_LIST(data) {
  return request({
    url: '/resources/gold',
    method: 'post',
    data
  })
}
