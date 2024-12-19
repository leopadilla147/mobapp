import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const ExampleHomeScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button title="CaseList" onPress={() => navigation.navigate('CaseList')} />
          </View>

          <View style={styles.buttonContainer}>
             <Button title="CaseReport" onPress={() => navigation.navigate('CaseReport')} />  
          </View>

      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
    },
    icon: {
      width: 300,
      height: 300,
      alignSelf: 'center',
      justifyContent: 'flex-start',
      marginTop: -120,
      marginBottom: 75,
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
      marginBottom: 20,
      marginTop: -50,
    },
    buttonGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    buttonContainer: {
      width: '48%',
      height: '80%',
      marginBottom: 10,
    },
  });
export default ExampleHomeScreen;