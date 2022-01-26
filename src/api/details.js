import API from './constants'
import request from '../utils/request'
export const getDetails = (id) => request({
  url: API.API_DETAILS,
  params: {
    id,
  },
}).then(data => data)
