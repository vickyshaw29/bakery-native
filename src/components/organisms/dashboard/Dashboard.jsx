import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, ScrollView, FlatList } from 'react-native';
import SearchBar from '../../atoms/SearchBar/SearchBar';
import styles from './DashboardStyles';
import { Subheading } from 'react-native-paper';
import { Divider, Avatar } from 'react-native-paper';
import { onSnapshot, collection, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import Tabs from '../../molecules/tabs/Tabs';
import Card from '../../molecules/card/Card';

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [itemsArr, setItemsArr] = useState([]);

  const onChangeSearch = (query) => setSearchQuery(query);

  useEffect(() => {
    const inventoryListener = onSnapshot(
      collection(db, 'Test'),
      async (snapShot) => {
        const invData = snapShot.docs.map((e) => {
          return {
            ...e.data(),
            id: e.id,
          };
        });
        console.log(invData);
        setItemsArr(invData);
      }
    );

    return () => {
      inventoryListener();
    };
  }, []);

  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { name: 'All', index: 0 },
    { name: 'Food', index: 1 },
    { name: 'Drink', index: 2 },
  ];

  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.searchContainer}>
        <SearchBar value={searchQuery} onChange={onChangeSearch} />
      </View>
      <View>
        <View style={styles.categoryContainer}>
          <Subheading style={styles.categoryTitle}>Category</Subheading>
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
        </View>
        <Divider
          style={{ borderColor: '#F4F5F7', borderWidth: 2, marginTop: 10 }}
        />
        <View>
          {activeTab === 0 && (
            <ScrollView>
              <FlatList
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={itemsArr}
                renderItem={({ item }) => <Card food={item} />}
              />
            </ScrollView>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
