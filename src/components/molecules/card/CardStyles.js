import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const styles = StyleSheet.create({
  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginTop: 20,
    borderRadius: 7,
    elevation: 13,
    backgroundColor: '#fff',
  },
  cardText: {
    color: '#3E5481',
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 14,
  },
  cardText2: {
    color: '#9FA5C0',
    fontWeight: 'bold',
    marginTop: 5,
    fontSize: 14,
  },
  avatarContainer: {
    padding: 4,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    marginHorizontal: 10,
    color: '#2E3E5C',
    fontSize: 13,
  },
  img: {
    width: '100%',
    height: 120,
    borderRadius: 5,
  },
});

export default styles;
