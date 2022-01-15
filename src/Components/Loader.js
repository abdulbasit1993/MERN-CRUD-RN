import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

const Loader = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size="large" color="#000000" />
      <Text style={{marginTop: 10}}>Loading...</Text>
    </View>
  );
};

export default Loader;
