import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import Screen from './Screen';

const Tabs = createMaterialTopTabNavigator();

const App = () => (
  <NavigationContainer>
    <Tabs.Navigator>
      <Tabs.Screen name="SampleOne" component={Screen} />
    </Tabs.Navigator>
  </NavigationContainer>
);

export default App;
