import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function CompanyScreen() {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://images.pexels.com/photos/25460965/pexels-photo-25460965/free-photo-of-close-up-of-a-neon-sign.jpeg?auto=compress&cs=tinysrgb&w=600' }} 
        style={styles.logo} 
        resizeMode="contain"
      />
      <Text style={styles.title}>Welcome to Our Company</Text>
      <Text style={styles.description}>
        We are committed to delivering the best service and products to our customers.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Learn More</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e9f0f7',
    padding: 20,
  },
  logo: {
    width: 180,
    height: 180,
    borderRadius: 90,
    marginBottom: 40,
    borderWidth: 3,
    borderColor: '#007bff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#2a2a2a',
    marginBottom: 20,
    letterSpacing: 0.5,
  },
  description: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 30,
    lineHeight: 26,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 50,
    shadowColor: '#007bff',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default CompanyScreen;
