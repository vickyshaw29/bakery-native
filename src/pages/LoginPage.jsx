import React from 'react';
import { View } from 'react-native';
import LoginForm from '../components/molecules/login/LoginForm';
import styles from './styles/CommonStyles';

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <LoginForm />
    </View>
  );
};

export default LoginPage;
