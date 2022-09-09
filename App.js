import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import HomeScreen from './src/screens/HomeScreen';

import {FlyIcon, MapIcon, WalletIcon} from './src/assets/svg';

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#F1F3F6',
  },

  headerStyles: {
    headerBackTitleVisible: false,
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerTintColor: '#F1F3F6',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
};

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();

function HomeStackScreen(props) {
  return (
    <HomeStack.Navigator options={{tabStyle: {display: 'none'}}}>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
}

function ActiveTabBar(props) {
  return (
    <View style={[{justifyContent: 'center', alignItems: 'center'}]}>
      <Text style={[{color: '#EF550A'}]}>{props.title}</Text>
      <View
        style={{
          width: 8,
          height: 8,
          backgroundColor: '#EF550A',
          borderRadius: 10,
          marginTop: 4,
        }}
      />
    </View>
  );
}

function RootTabs({navigation, route}) {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 85,
          backgroundColor: '#fff',
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        },
        tabBarHideOnKeyboard: true,
      })}>
      <Tab.Screen
        name={'HomeScreen'}
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({focused, color, size}) =>
            !focused ? (
              <MapIcon width={28} height={28} />
            ) : (
              <ActiveTabBar title={'Explore'} />
            ),
        }}
      />
      <Tab.Screen
        name={'MapScreen'}
        component={() => <View />}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({focused, color, size}) =>
            !focused ? (
              <MapIcon width={28} height={28} />
            ) : (
              <ActiveTabBar title={'Map'} />
            ),
        }}
      />
      <Tab.Screen
        name={'FlyScreen'}
        component={() => <View />}
        options={{
          tabBarLabel: 'Fly',
          tabBarIcon: ({focused, color, size}) =>
            !focused ? (
              <FlyIcon width={28} height={28} />
            ) : (
              <ActiveTabBar title={'Fly'} />
            ),
        }}
      />
      <Tab.Screen
        name={'WalletScreen'}
        component={() => <View />}
        options={{
          tabBarLabel: 'Wallet',
          tabBarIcon: ({focused, color, size}) =>
            !focused ? (
              <WalletIcon width={28} height={28} />
            ) : (
              <ActiveTabBar title={'Wallet'} />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={RootTabs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
