import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RenderRoutes from './src/components/Navigation';
import AuthProvider from './src/context/AuthProvider';
import LoginForm from './src/components/molecules/login/LoginForm';
import SignUpForm from './src/components/molecules/signup/SignUpForm';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './src/components/molecules/details/Details';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen
            name="Register"
            component={SignUpForm}
            options={{
              title: 'Register',
            }}
          />
          <Stack.Screen
            name="Login"
            component={LoginForm}
            options={{
              title: 'Login',
            }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{
              title: 'Details',
            }}
          />
          <Stack.Screen
            name="Home"
            component={RenderRoutes}
            options={{
              title: 'Home',
            }}
          />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
