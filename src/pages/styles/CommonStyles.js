import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
  },
  header: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    borderColor: '#F4F5F7',
    borderWidth: 2,
    marginTop: 10,
    marginBottom: 8,
    height: 7,
  },
  today: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  cont: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  commonTxt: {
    marginLeft: 10,
    color: '#3E5481',
    fontSize: 15,
  },
});

export default styles;
