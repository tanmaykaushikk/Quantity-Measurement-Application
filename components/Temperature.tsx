import { Picker } from '@react-native-picker/picker';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';

const QuantityMeasurement = ({ navigation }) => {
  const [selectedUnit, setSelectedUnitOne] = useState('°C');
  const [selectedUnitTwo, setSelectedUnitTwo] = useState('°F');
  const [text, setText] = useState('');
  const [convertedValue, setConvertedValue] = useState('')

  const resetText = () => {
    setText('');
  }

  const convertTemperature = () => {
    const inputValue = parseFloat(text)

    if (isNaN(inputValue)) {
      setConvertedValue('Invalid Input');
      return
    }

    let finalValue = inputValue;

    if (selectedUnit === '°C' && selectedUnitTwo === '°F') {
      finalValue = (inputValue * 9) / 5 + 32;
    } else if (selectedUnit === '°C' && selectedUnitTwo === 'K') {
      finalValue = inputValue + 273.15;
    } else if (selectedUnit === '°F' && selectedUnitTwo === '°C') {
      finalValue = ((inputValue - 32) * 5) / 9;
    } else if (selectedUnit === '°F' && selectedUnitTwo === 'K') {
      finalValue = ((inputValue - 32) * 5) / 9 + 273.15;
    } else if (selectedUnit === 'K' && selectedUnitTwo === '°C') {
      finalValue = inputValue - 273.15;
    } else if (selectedUnit === 'K' && selectedUnitTwo === '°F') {
      finalValue = ((inputValue - 273.15) * 9) / 5 + 32;
    }

    setConvertedValue(finalValue.toFixed(2).toString());
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Quantity Measurement</Text>
      </View>

      <View style={styles.subHeadingContainer}>
        <Text style={styles.subHeadingTwo}>From</Text>
      </View>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedUnit}
          onValueChange={(value) => setSelectedUnitOne(value)}
          style={styles.picker}
        >
          <Picker.Item label="Celsius (°C)" value="°C" />
          <Picker.Item label="Kelvin (K)" value="K" />
          <Picker.Item label="Fahrenheit (°F)" value="°F" />
        </Picker>
      </View>

      <View style={styles.subHeadingContainer}>
        <Text style={styles.subHeadingTwo}>To</Text>
      </View>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedUnitTwo}
          onValueChange={(value) => setSelectedUnitTwo(value)}
          style={styles.picker}
        >
          <Picker.Item label="Celsius (°C)" value="°C" />
          <Picker.Item label="Kelvin (K)" value="K" />
          <Picker.Item label="Fahrenheit (°F)" value="°F" />
        </Picker>
      </View>

      <View style={{ width: '90%', marginLeft: 22, }}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
        />
      </View>

      <View style={{ margin: 50, marginLeft: 100 }}>
        <TouchableOpacity onPress={resetText}>
          <View style={styles.resetButton}>
            <Text style={{ textAlign: 'center', color: '#dfebe2', fontSize: 30 }}>Reset</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ margin: -20, marginLeft: 100 }}>
        <TouchableOpacity onPress={convertTemperature}>
          <View style={styles.resetButton}>
            <Text style={{ textAlign: 'center', color: '#dfebe2', fontSize: 30 }}>Convert</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ width: '90%', marginLeft: 22, margin: 20 }}>
        <TextInput
          style={styles.input}
          value={convertedValue ? `${convertedValue} ${selectedUnitTwo}` : ''}
          editable={false}
        />
      </View>
    </View>
  );
};

export default QuantityMeasurement;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: '#1E1E2C',
    flex: 1,
    padding: 10,
  },
  headingContainer: {
    marginTop: 50,
  },
  heading: {
    fontSize: 35,
    color: 'black',
    textAlign: 'center',
    fontWeight: '700',
  },
  subHeadingContainer: {
    marginTop: 30,
  },
  subHeadingTwo: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 15,
    color: '#9d8189',
  },
  pickerContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#9d8189',
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
  picker: {
    height: 55,
    width: '100%',
    color: '#4F646F',
  },
  input: {
    backgroundColor: 'white',
    marginTop: 40,
    width: '100%',
    borderRadius: 20,
  },
  resetButton: {
    width: 200,
    backgroundColor: '#204028',
    height: 50,
    borderRadius: 45,
    justifyContent: 'center'
  }
});