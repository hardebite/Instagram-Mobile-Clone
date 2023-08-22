import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import {Routes} from './Routes';
import {View, Text, ScrollView} from 'react-native';
import {TabBarIndicator} from 'react-native-tab-view';
import ProfileTabTitle from '../components/ProfileTabTitle/ProfileTabTitle';
import ProfileTabPost from '../components/ProfileTabPost/ProfilePost';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTabs = createMaterialTopTabNavigator();

export const ProfileTabNavigation = () => {
  return (
    <ProfileTabs.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: 'transparent',
          tabBarStyle: {
            elevation: 0,
            zIndex: 0,
          },
        },
      }}>
      <ProfileTabs.Screen
        name={'Tab1'}
        component={ProfileTabPost}
        options={{
          tabBarLabel: ({focused}) => {
            return <ProfileTabTitle title={'Photos'} isFocused={focused} />;
          },
        }}
      />
      <ProfileTabs.Screen
        name={'Tab2'}
        component={ProfileTabPost}
        options={{
          tabBarLabel: ({focused}) => {
            return <ProfileTabTitle title={'Video'} isFocused={focused} />;
          },
        }}
      />
      <ProfileTabs.Screen
        name={'Tab3'}
        component={ProfileTabPost}
        options={{
          tabBarLabel: ({focused}) => {
            return <ProfileTabTitle title={'Saved'} isFocused={focused} />;
          },
        }}
      />
    </ProfileTabs.Navigator>
  );
};
const MainMenuNavigation = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation={false}
      screenOptions={{header: () => null}}>
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen name={Routes.Profile} component={Profile} />
    </Drawer.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Home}
      // screenOptions={{headerShown: false}}>
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={'Drawer'} component={MainMenuNavigation} />
    </Stack.Navigator>
  );
};
export default MainNavigation;
