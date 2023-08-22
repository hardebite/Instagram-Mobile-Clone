/* eslint-disable react-native/no-inline-styles */
// import android.os.Bundle;
// import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import MainNavigation from './navigation/MainNavigation';
import {NavigationContainer} from '@react-navigation/native';

// import {
//   SafeAreaView,
//   Text,
//   View,
//   ScrollView,
//   Pressable,
//   FlatList,
//   Dimensions,
//   Platform,
//   Switch,
//   StatusBar,
// } from 'react-native';
// import Title from './components/Title/title';
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
// import style from './assets/styles/main';
// import UserStory from './components/UserStory/UserStory';
// import UserPost from './components/UserPost/UserPost';
function App() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}

export default App;
