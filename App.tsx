// App.tsx
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import * as SplashScreen from 'expo-splash-screen'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import { useEffect } from 'react'
import CustomButton from './src/core/components/button' 

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
      <StatusBar style='auto' />
      <Text style={styles.title}>¡Bienvenidos 👋!</Text>
      <CustomButton title="Presióname" onPress={() => alert('¡Botón personalizado tocado!')} />
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
  title: {
    fontFamily: 'PlaypenSans-Bold',
    fontSize: 24,
    marginBottom: 20,
  },
})
