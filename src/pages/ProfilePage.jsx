import React, { useContext } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import styles from './styles/CommonStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/core';
import { Avatar, Divider, Button } from 'react-native-paper';
import { AuthContext } from '../context/AuthProvider';

const ProfilePage = () => {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Avatar.Text
          size={120}
          label={user?.email?.split('')[0]}
          style={{ marginBottom: 10 }}
        />
        <Text>{user?.email?.split('@')[0]}</Text>
      </View>
      <Divider style={styles.divider} />
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Button mode="contained" onPress={()=>navigation.navigate('Login')}>Log out</Button>
      </View>
    </SafeAreaView>
  );
};

export default ProfilePage;
