import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ForumScreen from './src/screens/ForumScreen';
import SocialScreen from './src/screens/SocialScreen';
import ShopScreen from './src/screens/ShopScreen';
import MembershipScreen from './src/screens/MembershipScreen';
import PodcastScreen from './src/screens/PodcastScreen';
import GalleryScreen from './src/screens/GalleryScreen';
import AdminScreen from './src/screens/AdminScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Forum" component={ForumScreen} />
        <Tab.Screen name="Social" component={SocialScreen} />
        <Tab.Screen name="Shop" component={ShopScreen} />
        <Tab.Screen name="Membership" component={MembershipScreen} />
        <Tab.Screen name="Podcast" component={PodcastScreen} />
        <Tab.Screen name="Gallery" component={GalleryScreen} />
        <Tab.Screen name="Admin" component={AdminScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
