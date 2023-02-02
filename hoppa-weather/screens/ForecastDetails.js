import { Image, StyleSheet, Text, View } from 'react-native'

function ForecastDetails (props) {
  const {
    route
  } = props

  return (
    <View style={styles.container}>
      <Image source={{ uri: route.params.day.condition.icon }} resizeMode='cover' style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.conditionText}>{route.params.day.condition.text}</Text>
        <View style={styles.subText}>
          <Text>min {route.params.day.mintemp_c}°C</Text>
          <Text style={styles.maxTemp}>max {route.params.day.maxtemp_c}°C</Text>
        </View>
        <View style={styles.subText}>
          <Text>{route.params.day.daily_will_it_rain}% chance of rain</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 30
  },
  image: {
    height: 150,
    width: 150,
    backgroundColor: 'grey'
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  conditionText: {
    fontSize: 24,
    paddingTop: 10
  },
  subText: {
    flexDirection: 'row',
    paddingTop: 5
  },
  maxTemp: {
    paddingLeft: 10
  }
})

export default ForecastDetails
