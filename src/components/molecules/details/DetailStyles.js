import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 280,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 120,
    backgroundColor: '#fff',
    borderColor:'grey',
    borderWidth:1,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  titleContainer: {
    marginHorizontal: 10,
    marginBottom: 10,
  },
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  direction: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    borderColor: '#F4F5F7',
    borderWidth: 2,
    marginTop: 10,
    marginBottom: 8,
  },
  commonItem: {
    color: '#3E5481',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default styles;
