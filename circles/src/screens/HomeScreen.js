import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, Button, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Video } from 'expo-av';
const { width } = Dimensions.get('window');

const storiesData = [
  { id: '1', watched: false },
  { id: '2', watched: false },
  { id: '3', watched: true },
  { id: '4', watched: false },
  { id: '5', watched: true },
  { id: '6', watched: false },
  { id: '7', watched: false },
  // ... add more
];

const circlesData = [
  { id: '1', active: true },
  { id: '2', active: true },
  { id: '3', active: true },
  { id: '4', active: false },
  { id: '5', active: false },
  { id: '6', active: false },
  { id: '7', active: false },
  // ... add more
];

const postData = [
    { id: '1', image: 'https://cdn.midjourney.com/54a2d00e-7cb8-4c78-83cd-798db9182b2c/0_3_384_N.webp', text: 'This is post 1', video: null },
    { id: '2', image: 'https://cdn.midjourney.com/54a2d00e-7cb8-4c78-83cd-798db9182b2c/0_3_384_N.webp', text: 'This is post 1', video: null },
    { id: '3', image: null, text: 'This is post 2', video: 'https://flora-assets-dev.s3.amazonaws.com/2021/images/UI/nurture/videos/bird_of_paradise/nurture_stage5_tropical_birdofparadise/nurture_stage5_tropical_birdofparadise.mp4' },
    { id: '4', image: 'https://cdn.midjourney.com/54a2d00e-7cb8-4c78-83cd-798db9182b2c/0_3_384_N.webp', text: 'This is post 1', video: null },
    { id: '5', image: 'https://cdn.midjourney.com/54a2d00e-7cb8-4c78-83cd-798db9182b2c/0_3_384_N.webp', text: 'This is post 1', video: null },
    { id: '6', image: null, text: 'This is post 2', video: 'https://flora-assets-dev.s3.amazonaws.com/2021/images/UI/nurture/videos/bird_of_paradise/nurture_stage5_tropical_birdofparadise/nurture_stage5_tropical_birdofparadise.mp4' },
    // ... add more
  ];
  
  

const renderStoryItem = ({ item }) => (
  <LinearGradient
    colors={item.watched ? ['transparent'] : ['#FFA07A', '#FF4500']}
    style={styles.storyGradient}
  >
    <View style={styles.story}>
      <Text>{item.id}</Text>
    </View>
  </LinearGradient>
);

const renderCircleItem = ({ item }) => (
  <LinearGradient
    colors={item.active ? ['#ADFF2F', '#32CD32'] : ['transparent']}
    style={styles.circleGradient}
  >
    <View style={styles.circle}>
      <Text>{item.id}</Text>
    </View>
  </LinearGradient>
);

const renderPostItem = ({ item }) => (
    <View style={styles.postContainer}>
      {item.image && (
        <Image
          source={{ uri: item.image }}
          style={styles.postImage}
        />
      )}
      {item.video && (
        <Video
          source={{ uri: item.video }}
          style={styles.postVideo}
          // additional Video component props
          shouldPlay // Video will play automatically when rendered
          isLooping // Optional: loop the video
        />
      )}
      <Text style={styles.postText}>{item.text}</Text>
      <Button title="Threads" onPress={() => {/* navigate to thread */}} />
    </View>
  );
  
export default function HomeScreen() {
    const [showTopBar, setShowTopBar] = React.useState(true);

    const handleScroll = (event) => {
        const scrollY = event.nativeEvent.contentOffset.y;
        if (scrollY <= 0) {
        setShowTopBar(true);
        } else {
        setShowTopBar(false);
        }
    };

    return (
    <ScrollView style={styles.container} onScroll={handleScroll} scrollEventThrottle={16} >
        <View style={styles.listContainer}>
        { showTopBar && (
            <View>
            <View style={styles.singleList}>
                <Text style={styles.storyHeader}>Stories</Text>
                <FlatList
                horizontal
                data={storiesData}
                renderItem={renderStoryItem}
                keyExtractor={item => item.id}
                />
            </View>
    
            <View style={styles.singleList}>
                <Text style={styles.storyHeader}>Circles</Text>
                <FlatList
                horizontal
                data={circlesData}
                renderItem={renderCircleItem}
                keyExtractor={item => item.id}
                />
            </View>
            </View>
        )}

          <View style={styles.singleList}>
            <Text style={styles.storyHeader}>Feed</Text>
            <FlatList
                data={postData}
                renderItem={renderPostItem}
                keyExtractor={item => item.id}
                onEndReached={() => {
                    // load more posts
                }}
            />
          </View>
        </View>
      </ScrollView>
    );
}
  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    listContainer: {
        flex: 1,
    },
    singleList: {
        marginBottom: 15,
    },
    storyHeader: {
        fontSize: 15,
        marginBottom: 2,
    },  
    story: {
        width: 65,
        height: 100,
        borderRadius: 15,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    storyGradient: {
    width: 69,
        height: 104,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginRight: 10,
    },
    circle: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    circleGradient: {
        width: 74,
        height: 74,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 37,
        marginRight: 10,
    },
    postContainer: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    postImage: {
        width: '100%',
        height: 300,
    },
    postVideo: {
        width: '100%',
        height: 200,
    },
    postText: {
        marginTop: 10,
        marginBottom: 10,
    },      
});
