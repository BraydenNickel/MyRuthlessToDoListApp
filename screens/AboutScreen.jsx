/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import MainLayout from '../layouts/MainLayout';

export default function AboutScreen({navigation}) {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.title}>About</Text>
        <Text style={styles.subtitle}>Organize your tasks</Text>
        <Text style={styles.subtitle}>By Brayden, 2023-11-24</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
  },
});
