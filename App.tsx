import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import * as SplashScreen from 'expo-splash-screen'
import { StyleSheet, Text, View } from 'react-native'
import { useEffect } from 'react'

export default function App() {
  const [loaded, error] = useFonts({
    'PlaypenSans-Bold': require('./assets/fonts/PlaypenSans-Bold.ttf'),
    'PlaypenSans-Regular': require('./assets/fonts/PlaypenSans-Regular.ttf'),
    'PlaypenSans-Light': require('./assets/fonts/PlaypenSans-Light.ttf'),
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola mundo estoy con fuente bold!</Text>
      <Text style={styles.text1}>Hola mundo estoy con fuente  light!</Text>
      <Text style={styles.text2}>Hola mundo estoy con fuente regular!</Text>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'PlaypenSans-Bold',
  },
  text1: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'PlaypenSans-Light',
  },
  text2: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'PlaypenSans-Regular',
  },
})
