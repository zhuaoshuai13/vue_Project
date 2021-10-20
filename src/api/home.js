import request from '../utils/request'
import API from './constants'
export const getBanners = () => request({
  url: API.API_TAB + '/1',
  method: 'GET',
  params: {
    start: 0,
  },
}).then((data) => data.banners)
