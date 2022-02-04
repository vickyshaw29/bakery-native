import React, { useContext } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import styles from './styles/CommonStyles';
import { AuthContext } from '../context/AuthProvider';

const NotificationPage = () => {
  const { user } = useContext(AuthContext);
  let arr = [];

  for (let i = 0; i < 6; i++) {
    arr.push(i);
  }
  return (
    <SafeAreaView>
      <View style={styles.today}>
        <Text style={{ marginBottom: 10 }}>Today</Text>
        {arr &&
          arr.map((v) => (
            <View style={styles.cont}>
              <Avatar.Text label={user?.email?.split('')[0]} size={26} />
              <View>
                <Text style={styles.commonTxt}>Notification Title</Text>
                <Text style={styles.commonTxt}>Notification Desc 1h</Text>
              </View>
            </View>
          ))}
        <Text style={{ marginBottom: 10 }}>Yesterday</Text>
        {arr &&
          arr.map((v) => (
            <View style={styles.cont}>
              <Avatar.Text label={user?.email?.split('')[0]} size={26} />
              <View>
                <Text style={styles.commonTxt}>Notification Title</Text>
                <Text style={styles.commonTxt}>Notification Desc 1h</Text>
              </View>
            </View>
          ))}
      </View>
    </SafeAreaView>
  );
};

export default NotificationPage;
