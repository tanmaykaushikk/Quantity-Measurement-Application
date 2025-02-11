import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';

const SignUp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Sign Up Here!</Text>
      </View>

      <View style={styles.mainContainer}>
        <TextInput style={styles.input} placeholder='First Name' />
        <TextInput style={styles.input} placeholder='Last Name' />
        <TextInput style={styles.input} placeholder='Email' />
        <TextInput style={styles.input} secureTextEntry={true} placeholder='Password' />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.text}>Already have an account? Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E2C',
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  boldText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  mainContainer: {
    width: 350,
    padding: 20,
    backgroundColor: '#2C2C3E',
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: '#000',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFD700',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E1E2C',
  },
  text: {
    fontSize: 16,
    color: '#FFD700',
    textAlign: 'center',
  },
});
