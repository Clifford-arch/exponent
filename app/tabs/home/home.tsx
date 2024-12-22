import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomePage({ navigation }: { navigation: any }) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Markets Overview</Text>
      <Button title="Go to Market 1" onPress={() =>navigation.navigate('Market1')} />
      <Button title="Go to Market 2" onPress={() =>navigation.navigate('Market2')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});
