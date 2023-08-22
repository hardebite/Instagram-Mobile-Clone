import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import style from './style';

const ProfileTabPost = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={style.profilePostContainer}>
      <View style={style.imageContainer}>
        <Image
          resizeMode="contain"
          source={require('../../assets/images/default_post.png')}
          style={style.image}
        />
        <Image
          resizeMode="contain"
          source={require('../../assets/images/default_post.png')}
          style={style.image}
        />
      </View>
      <View style={[style.imageContainer, style.imageUpcomingRowContainer]}>
        <Image
          resizeMode="contain"
          source={require('../../assets/images/default_post.png')}
          style={style.image}
        />
        <Image
          resizeMode="contain"
          source={require('../../assets/images/default_post.png')}
          style={style.image}
        />
      </View>
      <View style={[style.imageContainer, style.imageUpcomingRowContainer]}>
        <Image
          resizeMode="contain"
          source={require('../../assets/images/default_post.png')}
          style={style.image}
        />
        <Image
          resizeMode="contain"
          source={require('../../assets/images/default_post.png')}
          style={style.image}
        />
      </View>
     
    </ScrollView>
  );
};
export default ProfileTabPost;
