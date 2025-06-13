import { StyleSheet,TextInput} from 'react-native'
import React from 'react'

interface InputProps {
    value?: string;
    onChange?: (text: string) => void;
}

export const Input = ({value,onChange}: InputProps) => {
  return (
    <TextInput  value={value} onChangeText={text => onChange?.(text)} style={styles.input} />
  )
}


const styles = StyleSheet.create({
    input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 100,
    fontSize: 16,
    }
})