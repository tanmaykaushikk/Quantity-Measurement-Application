import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const QuantityMeasurement = ({ navigation }) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.textStyleOne}>Select One </Text>
        <Text style={styles.textStyleOne}>To measure...</Text>
      </View>

      <View>
        <TouchableOpacity style={styles.buttonOne} onPress={() => navigation.navigate('Temperature')}>
          <Text style={styles.buttonOneText}>Temperature</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonOne} onPress={() => navigation.navigate('Length')}>
          <Text style={styles.buttonOneText}>Length</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonOne} onPress={() => navigation.navigate('Weight')}>
          <Text style={styles.buttonOneText}>Weight</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QuantityMeasurement;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E2C',
  },
  textContainer: {
    padding: 20,
    alignItems: 'center',
  },
  textStyleOne: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
  },
  buttonOne: {
    marginVertical: 15,
    backgroundColor: '#FFD700',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonOneText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E1E2C',
    textAlign: 'center',
  },
});
