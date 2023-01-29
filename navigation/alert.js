import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { SafeAreaView, TouchableOpacity, TouchableHighlight, Dimensions} from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

function Alert() {
  const messages = [
    "Your baggage can be found at baggage claim 3.",
    "We are about to land soon. Thanks for riding American Airlines!",
    "We are experiencing some turbalnce, please remain seated.",
    "The flight is going to begin in five-minutes.",
    "Now boarding people A1-30.",
    "Your flight is ready to board, please go to gate D7.",
  ]
  const times = [
    "7:01 PM",
    "6:51 PM",
    "6:32 PM",
    "5:39 PM",
    "5:24 PM",
    "5:14 PM"
  ]
  let cnt = 0
  let alertBoxes = []
  for (let message of messages)
  {
    alertBoxes.push(<AlertBox time = {times[cnt]} message={message}/>)
    // return (<Text><AlertBox message={message}/></Text>)
    cnt++
  }

  return (
    <ScrollView style={styles.container}>
      {alertBoxes}
    </ScrollView>

  );
}

function AlertBox({time, message}) {
  return (
    <View style={styles.alert_box}>
    <Text style={{fontSize:11, textAlign:"center", marginBottom:10}}> {time} </Text>
      <Text style={{fontSize:14, textAlign:"center", fontWeight:"bold"}}> {message} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#086591',
    scrollToOverflowEnabled: true,
  },
  homeTitle:{
    color: 'gray',
    top: 100,
    //fontFamily: 'Montserrat-Regular',
    fontSize: 30,
    alignSelf: 'center',

  },
  alert_box: {
    backgroundColor: 'white',
    width: Dimensions.get("window").width - 40,
    height: 85,
    marginTop: 20,
    marginBottom: -10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
});

export default Alert