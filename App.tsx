import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';

// store
import store from './src/store/configureStore';

// Pages 
import SignInPage from './src/pages/SignIn/SignIn';
import HomePage from './src/pages/Home/Home';
import TravelsPage from './src/pages/Travels/Travels';
import CustomerPage from './src/pages/Customer/Customer';

function App(): React.JSX.Element {
  enableScreens();
  const navigationRef = createNavigationContainerRef();
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator initialRouteName="signin" screenOptions={_ => {
            return {
              headerShown: false
            }
          }}>
            <Stack.Screen name="signin" component={SignInPage} />
            <Stack.Screen name="home" component={HomePage} />
            <Stack.Screen name="travel" component={TravelsPage} />
            <Stack.Screen name="customer" component={CustomerPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
