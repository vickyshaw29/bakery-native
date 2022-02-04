import React, { useContext, useEffect, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import Message from '../../svg/Message';
import Lock from '../../svg/Lock';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Show from '../../svg/Show';
import styles from './loginStyles';
import Input from '../../atoms/TextInput/Input';
import { AuthContext } from '../../../context/AuthProvider';
import { useNavigation } from '@react-navigation/native';

const LoginForm = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [togglePassword, setTogglePassword] = useState(false);
  const { user, signUp, login } = useContext(AuthContext);

  const handleSubmit = async () => {
    try {
      let foundUser = await login(email, password);
      console.log(foundUser);
      if (foundUser?.user) {
        navigation.navigate('Home');
      }
    } catch (error) {
      navigation.navigate('LoginPage');
      console.warn(error);
    }
  };

  const handleRegisterClick = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <View>{/* <Show /> */}</View>
      <View>
        <Text style={styles.start}>Start Cooking</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Text style={styles.title}>Please Enter your Account here</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputView}>
        <Message />
        <Input
          value={email}
          onChange={(email) => setEmail(email)}
          placeholder="email"
          autoCompleteType="email"
        />
      </View>
      <View style={styles.inputView}>
        <Lock />
        <Input
          value={password}
          onChange={(password) => setPassword(password)}
          togglePassword={togglePassword}
          secureTextEntry={togglePassword ? false : true}
          placeholder="password"
          autoCompleteType="password"
        />
        <Icon
          name={togglePassword ? 'eye-slash' : 'eye'}
          size={15}
          color="#9FA5C0"
          onPress={() => setTogglePassword(!togglePassword)}
          style={{ marginRight: 10 }}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText} onPress={() => handleSubmit()}>
          LOGIN
        </Text>
      </TouchableOpacity>

      <View>
        <TouchableOpacity onPress={() => handleRegisterClick()}>
          <Text style={styles.registerText}>
            Dont have an account ? Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginForm;
