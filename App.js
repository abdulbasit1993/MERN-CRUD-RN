import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import UserList from './src/Screens/UserList';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="UserList"
          component={UserList}
          options={{headerTitle: 'User List'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
