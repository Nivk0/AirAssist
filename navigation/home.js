import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const Home = () => {
const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.header}>Air Assistant</Text>
        <TextInput
          style={styles.input}
          placeholder="Flight Number"
        />
        <TextInput
          style={styles.input}
          placeholder="Departure Date"
        />
        <TextInput
          style={styles.input}
          placeholder="Departure Location"
        />
        <TouchableOpacity style={styles.appButtonContainer} onPress={() => navigation.navigate('Info')}>
            <Text style={styles.appButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#086591',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: 'white',
    width: '80%',
    height: '50%',
    borderRadius: 10,
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
    color: "gray",
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    width: '90%',
  },
  appButtonContainer: {
    backgroundColor: "#086591",
    borderRadius: 300,
    marginTop: 10,
    width: 150,
    height: 50
    
  },
  appButtonText: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 10.7
  },
});

export default Home;