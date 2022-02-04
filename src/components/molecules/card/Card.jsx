import React from 'react';
import styles from './CardStyles';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/core';

const Card = ({ food }) => {
  const navigation = useNavigation();

  return (
    <TouchableHighlight
      underlayColor="#fff"
      activeOpacity={0.9}
      onPress={() => navigation.navigate('Details',{food})}
    >
      <View style={styles.card}>
        <View style={styles.avatarContainer}>
          <Avatar.Text
            size={24}
            label={food?.seller_name?.split('').slice(0, 2)}
          />
          <Text style={styles.name}>{food?.seller_name}</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Image style={styles.img} source={{ uri: food?.prod_img }} />
        </View>
        <View style={{ position: 'absolute', right: 0, top: 50 }}>
          <Icon
            name={'heart'}
            size={15}
            color="#FFFFFF"
            style={{ marginRight: 10 }}
          />
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text style={styles.cardText}>{food?.prod_name}</Text>
          <Text style={styles.cardText2}>Unit: {food?.quantity}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default Card;
