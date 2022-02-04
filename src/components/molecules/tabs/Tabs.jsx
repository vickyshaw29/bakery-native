import React ,{useState} from 'react';
import { SafeAreaView, View, Text,TouchableHighlight } from 'react-native';
import styles from './TabStyles';

const Tabs = ({activeTab,setActiveTab,tabs}) => {
  return (
    <View style={styles.tabContainer}>
      {
          tabs.map((t,i)=>(
            <TouchableHighlight
            style={[
                styles.tab,
                {backgroundColor:activeTab===i?'#1FCC79':'#F4F5F7'}
            ]}
            onPress={() => setActiveTab(i)}
            underlayColor="#fff"
          >
            <Text >{t?.name}</Text>
          </TouchableHighlight>
          ))
      }
    </View>
  );
};

export default Tabs;
