import request from '@/utils/request'

export function getData(city) {
  return request({
    url: `http://hn216.api.yesapi.cn/?s=App.Common_Weather.LiveWeather&app_key=B62F573DA64D74D8EF8493FE2AFC9FCF&sign=&city=${city}&undefined&s=App.Common_Weather.LiveWeather&return_data=0`,
    method: 'get',
  })
}

// https://way.jd.com/jisuapi/weather?city=安顺&cityid=111&citycode=101260301&appkey=您申请的APPKEY