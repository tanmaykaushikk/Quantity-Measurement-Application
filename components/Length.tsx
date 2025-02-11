import { Picker } from '@react-native-picker/picker';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';

const Length = () => {
  const [selectedUnit, setSelectedUnitOne] = useState('m');
  const [selectedUnitTwo, setSelectedUnitTwo] = useState('cm');
  const [text, setText] = useState('');
  const [convertedValue, setConvertedValue] = useState('')

  const resetText = () => {
    setText('');
  }

  const convertLength = () => {
    const inputValue = parseFloat(text)

    if (isNaN(inputValue)) {
      setConvertedValue('Invalid Input');
      return
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
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Length</Text>
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
          <Picker.Item label="Centimeters (cm)" value="cm" />
          <Picker.Item label="Meters (m)" value="m" />
          <Picker.Item label="Kilometers (km)" value="km" />
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
          <Picker.Item label="Centimeters (cm)" value="cm" />
          <Picker.Item label="Meters (m)" value="m" />
          <Picker.Item label="Kilometers (km)" value="km" />
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
        <TouchableOpacity onPress={convertLength}>
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

export default Length;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: '#d8e2dc',
    flex: 1,
    padding: 10,
  },
  headingContainer: {
    marginTop: 70,
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