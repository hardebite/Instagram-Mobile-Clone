import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  Pressable,
  FlatList,
  Dimensions,
  Platform,
  Switch,
  StatusBar,
} from 'react-native';
import Title from '../../components/Title/title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import style from './style';
import UserStory from '../../components/UserStory/UserStory';
import UserPost from '../../components/UserPost/UserPost';
import globalStyle from '../../assets/styles/main';
import {Routes} from '../../navigation/Routes';

const Home = ({navigation}) => {
  const data = [
    {
      firstName: 'Joseph',
      id: 1,
    },
    {
      firstName: 'Doyin',
      id: 2,
    },
    {
      firstName: 'Ada',
      id: 3,
    },
    {
      firstName: 'Comfort',
      id: 4,
    },
    {
      firstName: 'Dotun',
      id: 5,
    },
    {
      firstName: 'Dolapo',
      id: 6,
    },
    {
      firstName: 'Ebuka',
      id: 7,
    },
    {
      firstName: 'Roukie',
      id: 8,
    },
    {
      firstName: 'Amara',
      id: 9,
    },
  ];
  const posts = [
    {
      firstName: 'Joseph',
      lastName: 'Kwame',
      location: 'Capetown, South Africa',
      likes: 1220,
      comments: 50,
      bookmarks: 55,
      id: 1,
    },
    {
      firstName: 'Doyin',
      lastName: 'Adegbite',
      location: 'Ontario,Canada',
      likes: 11220,
      comments: 510,
      bookmarks: 70,
      id: 2,
    },
    {
      firstName: 'Ada',
      lastName: 'Chidimna',
      location: 'lagos, NIgeria',
      likes: 1220,
      comments: 50,
      bookmarks: 55,
      id: 3,
    },
    {
      firstName: 'Comfort',
      lastName: 'Kalu',
      location: 'paris, France',
      likes: 120,
      comments: 5,
      bookmarks: 0,
      id: 4,
    },
    {
      firstName: 'Dolapo',
      lastName: 'Adegbite',
      location: 'Dominica, Dominica',
      likes: 20,
      comments: 2,
      bookmarks: 5,
      id: 5,
    },
    {
      firstName: 'Ebuka',
      lastName: 'Chibizor',
      location: 'lagos, Nigeria',
      likes: 20,
      comments: 5,
      bookmarks: 5,
      id: 6,
    },
    {
      firstName: 'Roukie',
      lastName: 'Collins',
      location: 'Ontario,Canada',
      likes: 1220,
      comments: 50,
      bookmarks: 55,
      id: 7,
    },
    {
      firstName: 'Amara',
      lastName: 'Chidube',
      location: 'Warri, NIgeria',
      likes: 1220,
      comments: 50,
      bookmarks: 55,
      id: 8,
    },
    {
      firstName: 'Ayomide',
      lastName: 'Waisu',
      location: 'warsaw, Poland',
      likes: 200,
      comments: 50,
      bookmarks: 55,
      id: 9,
    },
  ];
  const pageSize = 4;
  const pageSizePost = 2;
  const [pageNumber, setPageNumber] = useState(1);
  const [postPageNumber, setPostPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);
  const [renderedData, setRenderedData] = useState(data.slice(0, pageSize));
  const [renderedDataPosts, setRenderedDataPosts] = useState(
    posts.slice(0, pageSizePost),
  );
  let post = false;
  const [screenData, setScreenData] = useState(Dimensions.get('screen'));
  const [isOn, setIsOn] = useState(false);
  console.log(screenData);
  console.log(Platform);
  useEffect(() => {
    Dimensions.addEventListener('change', result => {
      console.log('change screen data', result.screen);
      setScreenData(result.screen);
    });
  }, []);
  // eslint-disable-next-line no-shadow
  function pagination(data, pageNumber, pageSize, post) {
    let startIndex = (pageNumber - 1) * pageSize;
    if (startIndex > data.length) {
      return [];
    }
    if (!post) {
      setPageNumber(pageNumber);
    } else {
      setPostPageNumber(pageNumber);
    }
    return data.slice(startIndex, startIndex + pageSize);
  }
  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
      <StatusBar backgroundColor={'red'} barStyle={'dark-content'} />
      <FlatList
        ListHeaderComponent={
          <>
            <View style={style.header}>
              <Title title="Let's Explore" />
              {/* <Switch
                    value={isOn}
                    onValueChange={value => setIsOn(value)}
                    style={
                      Platform.OS === 'android' && {
                        transform: [{scaleX: 1.8}, {scaleY: 1.8}],
                      }
                    }
                    trackColor={
                      Platform.OS === 'android' && {false: 'grey', true: 'red'}
                    }
                  /> */}
              <Pressable style={style.messageIcon}>
                <FontAwesomeIcon
                  color={'#CACDDE'}
                  size={20}
                  icon={faEnvelope}
                />

                <View style={style.circleContainer}>
                  <Text
                    style={[style.number, {fontSize: screenData.height / 130}]}>
                    2
                  </Text>
                </View>
              </Pressable>
            </View>
            <View style={style.userStoryContainer}>
              <FlatList
                onMomentumScrollBegin={() => setIsLoading(false)}
                onEndReachedThreshold={0.5}
                keyExtractor={item => item.id.toString()}
                onEndReached={() => {
                  if (!isLoading) {
                    setIsLoading(true);
                    setRenderedData(prev => [
                      ...prev,
                      ...pagination(data, pageNumber + 1, pageSize),
                    ]);
                    setIsLoading(false);
                  }
                }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={renderedData}
                renderItem={({item}) => (
                  <UserStory firstName={item.firstName} />
                )}
              />
            </View>
          </>
        }
        onMomentumScrollBegin={() => setIsLoadingPosts(false)}
        onEndReachedThreshold={0.5}
        keyExtractor={item => item.id.toString() + 'post'}
        onEndReached={() => {
          if (!isLoadingPosts) {
            setIsLoadingPosts(true);
            setRenderedDataPosts(prev => [
              ...prev,
              ...pagination(posts, postPageNumber + 1, pageSizePost, true),
            ]);
            setIsLoadingPosts(false);
          }
        }}
        showsVerticalScrollIndicator={false}
        data={renderedDataPosts}
        renderItem={({item}) => (
          <View style={style.userPostContainer}>
            <UserPost
              firstName={item.firstName}
              lastName={item.lastName}
              comments={item.comments}
              likes={item.likes}
              bookmarks={item.bookmarks}
              location={item.location}
            />
          </View>
        )}
      />
      {/* </View> */}
    </SafeAreaView>
  );
};
export default Home;
