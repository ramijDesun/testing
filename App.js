import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Activity from './src/test/activity';
import AppBar from './src/test/appBar';
import AvatarIcon from './src/test/avatar';
import BannerCom from './src/test/banner';


import {
  HomeScreen
} from './src/screens';


export default function App() {
  return (
    <PaperProvider>
      <StatusBar style='auto' />
      {/* <Activity /> */}
      {/* <AppBar /> */}
      {/* <AvatarIcon /> */}
      {/* <BannerCom/> */}
      <HomeScreen />
    </PaperProvider>
  );
}
