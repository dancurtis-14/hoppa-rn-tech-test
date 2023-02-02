import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import ForecastCard from '../components/ForecastCard'
import { getForecast } from '../api/GetForecast'

function Forecast (props) {
  const [forecast, setForecast] = useState([])
  const {
    navigation
  } = props
  useEffect(() => {
    load()
  }, [])

  const load = async () => {
    getForecast()
      .then((data) => data.json())
      .then((result) => {
        setForecast(result.forecast.forecastday)
      })
  }

  const renderForecastCard = ({ item }) => {
    return (
      <ForecastCard day={item.day} date={item.date} navigation={navigation} />
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={forecast}
        renderItem={renderForecastCard}
        keyExtractor={(item) => item.date}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})

export default Forecast
