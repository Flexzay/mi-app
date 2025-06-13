import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import * as SplashScreen from 'expo-splash-screen'
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { useEffect } from 'react'
import colors from 'core/constants/colors'

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
      {/* boton nativo */}
      <Button
        title='boton nativo'
        onPress={() => alert('oprimiste el boton nativo')}></Button>
      {/* boton personalizado */}
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => alert('¡Oprimiste el botón Touchable!')}>
        <Text style={styles.text}>✨ Tocar Aquí ✨</Text>
      </TouchableOpacity>

      {/* simulacion de carga */}
      <ActivityIndicator
        size='large'
        color='#0000ff'
        style={{ marginTop: 20 }}
      />

      {/* input de texto */}
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginTop: 20,
          paddingHorizontal: 10,
          width: '80%',
        }}
        placeholder='Escribe algo aquí...'
        />
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
  button: {
    backgroundColor: colors.secondary,
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    marginTop: 20,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 1,
  },
})
