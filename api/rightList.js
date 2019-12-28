import request from '../axios'

export function GET_RIGHT_LIST(data) {
  return request({
    url: '/resources/github',
    method: 'post',
    data
  })
}
