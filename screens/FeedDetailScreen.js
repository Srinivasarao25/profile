import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';

const FeedDetailScreen = ({route}) => {
  const {feedImages, initialIndex} = route.params;

  return (
    <View style={styles.container}>
      <ScrollView
        pagingEnabled
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainer}
        initialScrollIndex={initialIndex} // Set initial scroll index
      >
        {feedImages.map((feed, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image source={{uri: feed}} style={styles.image} />
            <Text style={styles.description}>
              Feed description {index + 1} goes here...
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  imageContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height, // Ensure full screen height
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '80%',
    resizeMode: 'cover',
  },
  description: {
    margin: 20,
    fontSize: 18,
    color: '#fff',
  },
});

export default FeedDetailScreen;
