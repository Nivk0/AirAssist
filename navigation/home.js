import { React, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Info from './info';
const Stack = createNativeStackNavigator();
import axios from 'axios';
import moment from 'moment';

const Home = () => {
    const [flightNumber, setFlightNumber] = useState('');
    const [date, setDate] = useState('');
    const [origin, setOrigin] = useState('');
    const [departureTime, setDepartureTime] = useState('');
    const [arrivalTime, setArrivalTime] = useState('');
    const [destination, setDestination] = useState('');
    const [duration, setDuration] = useState('');

    const handleButtonPress = async () => {
        try {
            if (date && flightNumber && origin) {
          const response = await axios.get(`https://airassistant.herokuapp.com/flights?date=${date}&flightNumber=${flightNumber}&origin=${origin}`);
          const data = await response.data[0];
          setDestination(data.destination.code);
          setDuration(data.duration.locale);
          setDepartureTime(data.departureTime);
          setArrivalTime(data.arrivalTime);
          console.log(duration);
          navigation.navigate('Info', { departureTime:departureTime, arrivalTime:arrivalTime, destination:destination, duration:duration})
          setFlightNumber(null);
          setDate(null);
          setOrigin(null);
            }
            else {
                alert("please input all fields")
            }
         
        } catch (error) {
          console.error(error);
        }
    };

const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.header}>Air Assistant</Text>
        <TextInput
          style={styles.input}
          placeholder="Flight Number"
          value={flightNumber}
          onChangeText={text => setFlightNumber(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Departure Date"
          value={date}
          onChangeText={text => setDate(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Departure Airport Code"
          value={origin}
          onChangeText={text => setOrigin(text)}
        />
        <TouchableOpacity style={styles.appButtonContainer} onPress={handleButtonPress}>
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