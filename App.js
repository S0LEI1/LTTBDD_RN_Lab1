import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native';
import FirstScreen from './src/screen/FirstScreen';
import Screen1_a from './src/screen/Screen1_a';
import Screen1_b from './src/screen/Screen1_b';
import Screen1_c from './src/screen/Screen1_c';
import Screen1_d from './src/screen/Screen1_d';
import Screen1_e from './src/screen/Screen1_e';
import Screen2_a from './src/screen/Screen2_a';
import ScreenXMEye from './src/screen/ScreenXMEye';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal
      >
        <View style={styles.wrapper}><FirstScreen /></View>
        <View style={styles.wrapper}><Screen1_a /></View>
        <View style={styles.wrapper}><Screen1_b /></View>
        <View style={styles.wrapper}><Screen1_c/></View>
        <View style={styles.wrapper}><Screen1_d /></View>
        <View style={styles.wrapper}><Screen1_e /></View>
        <View style={styles.wrapper}><Screen2_a /></View>
        <View style={styles.wrapper}><ScreenXMEye/></View>
      </ScrollView>
      {/* <View style={styles.wrapper}>
          <Screen1_a />
        </View>
        <View style={styles.wrapper}>
          <Screen1_b />
        </View> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    marginHorizontal: 2
  }
});
