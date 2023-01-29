import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';

const Info = ({ route }) => {
    const { departureTime, arrivalTime, destination, duration} = route.params
    const timeTsa = "12 Minutes"
    const timeGate = "16 Minutes"
    const optimalTime = "3:58pm"
    
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.header}>Departure Time</Text>
          <Text style={styles.text}>{moment(departureTime).format('HH:mm:ss z')}</Text>
          <Text style={styles.header}>Arrival Time</Text>
          <Text style={styles.text}>{moment(arrivalTime).format('HH:mm:ss z')}</Text>
          <Text style={styles.header}>Airport Destination</Text>
          <Text style={styles.text}>{destination}</Text>
          <Text style={styles.header}>Duration</Text>
          <Text style={styles.text}>{duration}</Text>
          <Text style={styles.header}>Gate Number</Text>
          <Text style={styles.text}>D4</Text>
          <Text style={styles.header}>Time to get through TSA</Text>
          <Text style={styles.text}>{timeTsa}</Text>
          <Text style={styles.header}>Time to gate</Text>
          <Text style={styles.text}>{timeGate}</Text>
          <Text style={styles.header}>Optimal Time to Arrive</Text>
          <Text style={styles.text}>{optimalTime}</Text>
          <></>
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
      height: '80%',
      alignItems: 'center',
      padding: 20,
    },
    header: {
      fontSize: 24,
      marginTop: 10,
      marginBottom: 15,
      fontWeight: "bold",
    },
    text: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 14,
        fontWeight: "bold",
    },
    infoHeader: {
        marginBottom: 20,
        fontSize: 28,
        fontWeight: "bold",
        color: "gray",
      },
  });
  export default Info;
  
  
  