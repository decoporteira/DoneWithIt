import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

export default function App() {
  //console.log("App executed");
  //const handlePress = () => console.log("Text pressed");
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      {/* <Image source={require("./assets/favicon.png")} /> */}
      <TouchableHighlight onPress={() => console.log("Image Pressed")}>
        <Image 
        // blurRadius={10}
        
        source={ {
          width: 200,
          height:300,
          uri: 'https://picsum.photos/200/300'} } />
        
      </TouchableHighlight>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
