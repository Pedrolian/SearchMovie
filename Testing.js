import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, Alert, Image, View, SafeAreaView, TouchableWithoutFeedback, Button, Platform, StatusBar as ReactStatusBar} from 'react-native';

const handleTextClick = () => {
  /* Alert.alert(
    'Title',
    'Msg',
    [
      {
        text: 'Yes',
        onPress: () => {
          console.log('Yesss');
        }
      },
      {
        text: 'No',
        onPress: () => {
          console.log('No');
        }
      }
    ],
    {cancelable: true}
  ); */
  /* Alert.alert('Alert Title', 'My Alert Msg', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel'
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')}
  ]); */
  console.log('Text pressed.');
};

/*
// Text
<Text numberOfLines={5} onPress={handleTextClick}>
  Sup y'all
</Text>
*/

/*
// Image
<TouchableWithoutFeedback onPress={handleTextClick}>
  <Image style={styles.product} fadeDuration={500} source={{uri: 'https://picsum.photos/200/300'}} />
</TouchableWithoutFeedback>
*/

/*
// Status bar
<StatusBar style='auto' />
*/

/*
// Alert
<Button title='Click me' onPress={handleTextClick} />
*/

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <View style={[styles.containerImage, {backgroundColor: 'dodgerblue'}]}>
          <Text>1</Text>
        </View>
        <View style={[styles.containerImage, {backgroundColor: 'gold'}]}>
          <Text>1</Text>
        </View>
        <View style={[styles.containerImage, {backgroundColor: 'tomato'}]}>
          <Text>1</Text>
        </View>
        <View style={[styles.containerImage, {backgroundColor: 'gray'}]}>
          <Text>1</Text>
        </View>
        <View style={[styles.containerImage, {backgroundColor: 'limegreen'}]}>
          <Text>1</Text>
        </View>
        <View style={[styles.containerImage, {backgroundColor: 'purple'}]}>
          <Text>1</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? ReactStatusBar.currentHeight : 0,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center'
  },
  containerImage: {
    // flex: 1,
    height: 100,
    width: '33.33%'
  },
  imageProduct: {
    width: 350,
    height: 400
  }
});
