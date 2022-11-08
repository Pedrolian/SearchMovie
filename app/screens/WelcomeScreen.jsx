import React, {useState} from 'react';
import { StyleSheet, ImageBackground, View, Text, TouchableWithoutFeedback } from 'react-native'
import MovieScreen from './MovieScreen'

function WelcomeScreen(props) {

  const [showMovie, setShowMovie] = useState(false);

  const handleButtonClick = () => {
    setShowMovie(true);
  };

  if (showMovie === true) {
    return (
      <>
        <MovieScreen />
      </>
    );
  }

  return (
    <ImageBackground source={require('../assets/home.png')} style={styles.background}>
      <View style={styles.mainButton}>
          <TouchableWithoutFeedback onPress={handleButtonClick}>
            <Text style={styles.mainButtonText}>Find Movies</Text>
          </TouchableWithoutFeedback>
        </View>
      </ImageBackground>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  mainButton: {
    backgroundColor: '#1f1f1f',
    width: '100%',
    opacity: 0.95
  },
  mainButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 15
  }
})
