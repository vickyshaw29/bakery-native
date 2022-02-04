import React from 'react';
import { TextInput } from 'react-native';
import styles from './InputStyles';

const Input = ({
  value,
  onChange,
  placeholder,
  autoCompleteType,
  secureTextEntry,
}) => {
  return (
    <TextInput
      style={styles.TextInput}
      placeholder={placeholder}
      placeholderTextColor="#003f5c"
      autoCompleteType={autoCompleteType}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={onChange}
    />
  );
};

export default Input;
