import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {getImageColors} from 'react-native-image-colors';

const mockData = {
  backgroundImage:
    'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=600',
  profileImage:
    'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600',
  name: 'Dr. Jon doe',
  role: 'cardiologist',
  location: 'Vishakapatnam, India',
  followers: 8457,
  description: 'Talks about HeartSurgery, cardiology, etc...',
  hashtags:
    '#Cardiology #HeartHealth #HeartDoctor #Cardiologist #HeartCare #CardiacHealth',
  feedImages: [
    'https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2821823/pexels-photo-2821823.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1390403/pexels-photo-1390403.jpeg?auto=compress&cs=tinysrgb&w=600',
  ],
};

const PersonalScreen = ({navigation}) => {
  const [bgColor, setBgColor] = useState('#000');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchColors = async () => {
      const result = await getImageColors(mockData.backgroundImage, {
        fallback: '#000',
        quality: 'low',
      });

      setBgColor(result.average || '#000');
      setLoading(false); // Set loading to false after fetching colors
    };

    fetchColors();
  }, []);

  const handleImageError = error => {
    console.error('Image failed to load:', error);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <ImageBackground
        source={{uri: mockData.backgroundImage}}
        style={[styles.backgroundContainer, {backgroundColor: bgColor}]}>
        {/* Top Tabs */}
        <View style={styles.topTabs}>
          <TouchableOpacity
            style={[styles.tabButton, styles.selectedTabButton]}
            onPress={() => navigation.navigate('Personal')}>
            <Text style={styles.tabButtonText}>Personal</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabButton}
            onPress={() => navigation.navigate('Professional')}>
            <Text style={styles.tabButtonText}>Professional</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabButton}
            onPress={() => navigation.navigate('Company')}>
            <Text style={styles.tabButtonText}>Company</Text>
          </TouchableOpacity>
        </View>

        {/* Followers Section */}
        <View style={styles.followersSection}>
          <Text style={styles.followersText}>
            {mockData.followers} followers
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Follow</Text>
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.profileImageContainer}>
            <Image
              source={{uri: mockData.profileImage}}
              style={styles.profileImage}
            />
            <Image
              source={{
                uri: 'https://img.icons8.com/ios-filled/50/228BE6/instagram-verification-badge.png',
              }}
              style={styles.badgeImage}
            />
          </View>
          <View style={styles.profileTextContainer}>
            <Text style={styles.name}>{mockData.name}</Text>
            <Text style={styles.role}>{mockData.role}</Text>
            <Text style={styles.location}>{mockData.location}</Text>
            <Text style={styles.description}>{mockData.description}</Text>
            <Text style={styles.hashtags}>{mockData.hashtags}</Text>
          </View>
        </View>
      </ImageBackground>

      {/* Feed Grid */}
      <View style={styles.feedGrid}>
        {mockData.feedImages.map((feed, index) => (
          <View key={index} style={styles.feedItemContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('FeedDetail', {feed})}>
              <Image
                source={{uri: feed}}
                style={styles.feedItem}
                onError={handleImageError}
              />
              {loading && (
                <ActivityIndicator
                  size="small"
                  color="#007bff"
                  style={styles.loadingIndicator}
                />
              )}
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingBottom: 20, // Add padding to avoid content being cut off
  },
  backgroundContainer: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 20,
  },
  topTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
  },
  selectedTabButton: {
    backgroundColor: '#007bff',
  },
  tabButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  followersSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
    width: '100%',
  },
  followersText: {
    fontSize: 14,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#007bff',
    borderRadius: 50,
    backgroundColor: 'transparent',
    width: '45%',
    alignSelf: 'flex-end',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: 'transparent',
  },
  separator: {
    height: '100%',
    width: 1,
    backgroundColor: '#007bff',
  },
  buttonText: {
    color: '#007bff',
    fontSize: 16,
    textAlign: 'center',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  profileTextContainer: {
    flex: 1,
  },
  profileImageContainer: {
    justifyContent: 'center',
    marginRight: 15,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#007bff',
  },
  badgeImage: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 20,
    height: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  role: {
    fontSize: 18,
    color: '#666',
  },
  location: {
    fontSize: 14,
    color: '#999',
  },
  description: {
    fontSize: 14,
    marginTop: 10,
    color: '#333',
    textAlign: 'left',
  },
  hashtags: {
    fontSize: 14,
    marginTop: 5,
    color: '#007bff',
  },
  feedGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 20,
    backgroundColor: '#fff',
    width: '100%', // Ensure the grid takes full width
  },
  feedItemContainer: {
    width: '48%', // Adjust this value to set the number of columns
    marginBottom: 10,
  },
  feedItem: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    backgroundColor: '#f0f0f0', // Light background color in case image fails to load
  },
  loadingIndicator: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: [{translateX: -10}, {translateY: -10}],
  },
});

export default PersonalScreen;
