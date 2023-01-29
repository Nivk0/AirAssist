import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, TouchableOpacity, TouchableHighlight } from 'react-native';

function Alert() {
  return (
    <View style={styles.container}>
      <Text style={styles.homeTitle}>Alert</Text>
      <RoundedCornersExample></RoundedCornersExample>
    </View>

  );
}

function RoundedCornersExample() {
  return (
    <SafeAreaView
      style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity style={{ backgroundColor: '#147EFB', padding: 10 }}>
        <Text style={{ color: '#fff' }}>Click me!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#086591',
  },
  homeTitle:{
    color: 'gray',
    top: 100,
    //fontFamily: 'Montserrat-Regular',
    fontSize: 30,
    alignSelf: 'center',
    
  }
});

export default Alert
