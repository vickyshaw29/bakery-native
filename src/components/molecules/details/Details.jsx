import React from 'react';
import { SafeAreaView, View, Text, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './DetailStyles';
import cardStyles from '../card/CardStyles';
import { useNavigation } from '@react-navigation/core';
import { Avatar, Divider } from 'react-native-paper';

const Details = ({ navigation, route }) => {
  let { food } = route.params;
  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <View style={styles.header}>
        <Icon
          name="arrow-left"
          size={18}
          color="#9FA5C0"
          onPress={() => navigation.navigate('Home')}
          style={{ marginRight: 10 }}
        />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Details</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={{ uri: food?.prod_img }} />
        </View>
        <View style={styles.details}>
          <View style={styles.titleContainer}>
            <Text style={cardStyles.cardText}>{food?.prod_name}</Text>
            <Text style={cardStyles.cardText2}>Unit: {food?.quantity}</Text>
          </View>
          <View style={styles.avatarContainer}>
            <View style={cardStyles.avatarContainer}>
              <Avatar.Text
                size={24}
                label={food?.seller_name?.split('').slice(0, 2)}
                style={{ marginLeft: 4 }}
              />
              <Text style={cardStyles.name}>{food?.seller_name}</Text>
            </View>
            <View style={styles.direction}>
              <Icon
                name={'heart'}
                size={15}
                color="#1FCC79"
                style={{ marginRight: 10 }}
              />
              <Text>273 Likes</Text>
            </View>
          </View>
          <Divider style={styles.divider} />
          <View>
            <Text style={styles.commonItem}>Instructions</Text>
            <Text style={{ color: '#9FA5C0', fontSize: 15 }}>
              Your recipe has been uploaded, you can see it on your profile.
              Your recipe has been uploaded, you can see it on your
            </Text>
          </View>
          <Divider style={styles.divider} />
          <View>
            <Text style={styles.commonItem}>Ingredients</Text>
            {/*  */}
            <View style={styles.direction}>
              <Icon
                name={'check'}
                size={15}
                color="#1FCC79"
                style={{ marginRight: 10 }}
              />
              <Text>4 Eggs</Text>
            </View>

            <View style={styles.direction}>
              <Icon
                name={'check'}
                size={15}
                color="#1FCC79"
                style={{ marginRight: 10 }}
              />
              <Text>1/2 Butter</Text>
            </View>
            <View style={styles.direction}>
              <Icon
                name={'check'}
                size={15}
                color="#1FCC79"
                style={{ marginRight: 10 }}
              />
              <Text>1/2 Peanut</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;
