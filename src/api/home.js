import request from '../utils/request'
import API from './constants'

export const getHome = () => request({
  url: API.API_TAB + '/1',
  method: 'GET',
  params: {
    start: 0,
  },
}).then((data) => data)

export const getBanner = () => request({
  url: API.API_TAB + '/1',
  params: {
    start: 0,
  },
  headers: {
    'x-platform': 'pc',
  },
}).then(data => data.banners)

export const getTitle = () => (
  {
    url: API.API_TABS,
  }
).then(data => data)

export const getTab = () => request({
  url: API.API_TABS,
}).then(data => data)

export const getBk = (start = 0) => request({
  url: API.API_BK,
  params: {
    start,
  },
}).then(data => data)
