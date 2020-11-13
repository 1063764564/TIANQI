import request from '@/utils/request'

export function getData(city) {
  return request({
    url: `https://hn216.api.yesapi.cn/?s=App.Common_Weather.LiveWeather&app_key=B62F573DA64D74D8EF8493FE2AFC9FCF&sign=&city=${city}`,
    method: 'get',
  })
}