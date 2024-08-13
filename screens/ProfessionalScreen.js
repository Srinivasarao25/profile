import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function ProfessionalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Professional Profile</Text>
      <Text style={styles.description}>
        Welcome to the Professional section.Hi Here you'll find detailed
        information about professional achievements, experiences, and expertise.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default ProfessionalScreen;
