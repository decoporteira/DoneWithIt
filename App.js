import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  //console.log("App executed");
  //const handlePress = () => console.log("Text pressed");
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      {/* <Image source={require("./assets/favicon.png")} /> */}
      <Image 
      // blurRadius={10}
      fadeDuration={10000}
      source={ {
        width: 200,
        height:300,
        uri: 'https://picsum.photos/200/300'} } />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c5c5c5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
