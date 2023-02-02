import Constants from 'expo-constants'

const endpoint = Constants.expoConfig.extra.endpoints.forecast

export async function getForecast () {
  return fetch(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow'
  })
}
