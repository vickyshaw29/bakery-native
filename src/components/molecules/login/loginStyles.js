import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: "red",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     // minWidth:'100%',
    //   },
    container: {
      flex: 1,
      backgroundColor: '#E5E5E5',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
  
    image: {
      position: 'absolute',
      right: 10,
    },
  
    inputView: {
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: '#FFC0CB',
      borderRadius: 30,
      width: '80%',
      height: 45,
      marginBottom: 20,
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      borderWidth: 1,
      borderColor: '#D0DBEA',
    },
    TextInput: {
      height: 50,
      flex: 1,
      marginLeft: 16,
    },
  
    title: {
      height: 30,
      color:'#9FA5C0',
      fontSize:15
    },
    start:{
      color:'#2E3E5C',
      fontSize:22,
      fontWeight:'bold',
      marginBottom:17
    }
  ,
    loginBtn: {
      width: '80%',
      borderRadius: 25,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      backgroundColor: '#1FCC79',
    },
    registerText:{
      height: 30,
      fontSize:15,
      marginTop:20
    }
});

export default styles;
