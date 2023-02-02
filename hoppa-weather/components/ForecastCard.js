import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import Day from 'dayjs'

function ForecastCard (props) {
  const {
    day,
    date,
    navigation
  } = props

  const navigate = () => {
    navigation.navigate('Forecast Details', {
      day,
      date: Day(date).format('D MMMM YYYY')
    })
  }

  return (
    <Pressable
      onPress={navigate}
    >
      <View style={styles.container}>
        <Image source={{ uri: `https:${day.condition.icon}` }} resizeMode='cover' style={styles.image} />
        <View style={styles.conditionContainer}>
          <Text style={styles.conditionText}>{day.condition.text}</Text>
          <View style={styles.tempContainer}>
            <Text>min {day.mintemp_c}°C</Text>
            <Text style={styles.maxTemp}>max {day.maxtemp_c}°C</Text>
          </View>
        </View>
        <View style={styles.rainContainer}>
          <Text>{day.daily_will_it_rain}%</Text>
          <Text>chance of rain</Text>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey'
  },
  image: {
    height: 64,
    width: 64
  },
  conditionContainer: {
    flex: 1,
    paddingLeft: 10
  },
  conditionText: {
    fontSize: 20
  },
  tempContainer: {
    flexDirection: 'row'
  },
  maxTemp: {
    paddingLeft: 10
  },
  rainContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default ForecastCard
