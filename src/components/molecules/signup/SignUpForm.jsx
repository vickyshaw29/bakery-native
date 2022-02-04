import React, { useContext, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import Message from '../../svg/Message';
import Lock from '../../svg/Lock';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Show from '../../svg/Show';
import styles from '../login/loginStyles';
import Input from '../../atoms/TextInput/Input';
import { AuthContext } from '../../../context/AuthProvider';
import { useNavigation } from '@react-navigation/native';
// import { auth } from '../../../firebase';

const SignUpForm = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [togglePassword, setTogglePassword] = useState(false);
  const { user, signUp } = useContext(AuthContext);

  // const handleSubmit=async()=>{
  //   const user=await auth.createUserWithEmailAndPassword(email,password)
  //   console.warn(user)
  // }
  const handleSubmit = () => {
    try {
      let user = signUp(email, password);
      if(user){
          navigation.navigate("LoginPage")
      }
    } catch (error) {
        navigation.navigate("Register")
        setEmail("")
        setPassword("")
    }
  };
  return (
    <View style={styles.container}>
      <View>{/* <Show /> */}</View>
      <View>
        <Text style={styles.start}>Start Cooking</Text>
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
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpForm;
