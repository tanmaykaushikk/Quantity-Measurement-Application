import { Picker } from '@react-native-picker/picker';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';

const Length = () => {
  const [selectedUnit, setSelectedUnitOne] = useState('m');
  const [selectedUnitTwo, setSelectedUnitTwo] = useState('cm');
  const [text, setText] = useState('');
  const [convertedValue, setConvertedValue] = useState('');

  const resetText = () => {
    setText('');
  };

  const convertLength = () => {
    const inputValue = parseFloat(text);

    if (isNaN(inputValue)) {
      setConvertedValue('Invalid Input');
      return;
    }

    let finalValue = inputValue;

    if (selectedUnit === 'cm' && selectedUnitTwo === 'm') {
      finalValue = inputValue / 100;
    } else if (selectedUnit === 'cm' && selectedUnitTwo === 'km') {
      finalValue = inputValue / 100000;
    } else if (selectedUnit === 'm' && selectedUnitTwo === 'cm') {
      finalValue = inputValue * 100;
    } else if (selectedUnit === 'm' && selectedUnitTwo === 'km') {
      finalValue = inputValue / 1000;
    } else if (selectedUnit === 'km' && selectedUnitTwo === 'cm') {
      finalValue = inputValue * 100000;
    } else if (selectedUnit === 'km' && selectedUnitTwo === 'm') {
      finalValue = inputValue * 1000;
    }

    setConvertedValue(finalValue.toString());
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textOne}>Quantity Measurement</Text>
        <Text style={styles.textTwo}>Length</Text>
      </View>

      <View style={styles.pickerContainer}>
        <Text style={styles.label}>From</Text>
        <Picker
          selectedValue={selectedUnit}
          onValueChange={(value) => setSelectedUnitOne(value)}
          style={styles.picker}
        >
          <Picker.Item label="Centimeters (cm)" value="cm" />
          <Picker.Item label="Meters (m)" value="m" />
          <Picker.Item label="Kilometers (km)" value="km" />
        </Picker>
      </View>

      <View style={styles.pickerContainer}>
        <Text style={styles.label}>To</Text>
        <Picker
          selectedValue={selectedUnitTwo}
          onValueChange={(value) => setSelectedUnitTwo(value)}
          style={styles.picker}
        >
          <Picker.Item label="Centimeters (cm)" value="cm" />
          <Picker.Item label="Meters (m)" value="m" />
          <Picker.Item label="Kilometers (km)" value="km" />
        </Picker>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter value"
          placeholderTextColor="#888"
          value={text}
          onChangeText={setText}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={resetText}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={convertLength}>
          <Text style={styles.buttonText}>Convert</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Result"
          placeholderTextColor="#888"
          value={convertedValue ? `${convertedValue} ${selectedUnitTwo}` : ''}
          editable={false}
        />
      </View>
    </View>
  );
};

export default Length;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E2C',
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  textOne: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  textTwo: {
    fontSize: 38,
    fontWeight: '600',
    color: '#FFD700',
    marginLeft: -170,
  },
  pickerContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFD700',
    marginBottom: 10,
  },
  picker: {
    backgroundColor: '#FFD700',
    borderRadius: 30,
    height: 55,
    color: '#1E1E2C',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#FFD700',
    width: '100%',
    height: 55,
    borderRadius: 30,
    paddingHorizontal: 20,
    fontSize: 18,
    color: '#1E1E2C',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FFD700',
    width: '48%',
    height: 55,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
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
});
