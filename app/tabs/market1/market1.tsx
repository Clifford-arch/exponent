import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Indian from '@/components/MarketsOverview1/Indian';

export default function Market1({ navigation }: { navigation: any }) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Market 1 Overview</Text> */}
      <View><Indian/></View>
      <Button title="Go Back to Home" onPress={() => navigation.navigate('Home')} />
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
