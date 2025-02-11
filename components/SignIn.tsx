import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import React, { useState } from 'react';

const SignIn = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'Tanmay' && password === '12345') {
      Alert.alert('Welcome', `${username} !`, [
        { text: 'Hop In!', onPress: () => navigation.navigate('Quantity Measurement') }
      ]);
    } else {
      Alert.alert(`User ${username} is not registered!`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Sign In Here!</Text>
      </View>

      <View style={styles.mainContainer}>
        <TextInput
          style={styles.input}
          placeholder='Username'
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          value={password}
          secureTextEntry={true}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert('Forgot Password!')}>
          <Text style={styles.text}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.text}>Don't have an account? Sign Up!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;

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
    marginTop: 10,
  },
});
