import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
  },
  tab: {
    padding:10,
    backgroundColor: '#1FCC79',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
    minWidth:80,
    alignItems:'center',
    marginTop:10,
    marginRight:10
  },
  submitText: {
    color: '#fff',
    textAlign: 'center',
  }
});

export default styles;
