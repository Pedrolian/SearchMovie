import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import List from '../components/Movies/List'
import Search from '../components/Movies/Search'
import Show from '../components/Movies/Show'

function MovieScreen() {

  const [searchPhrase, setSearchPhrase] = useState("");
  const [inputSearchPhrase, setinputSearchPhrase] = useState("")
  const [clicked, setClicked] = useState(false);
  const [showMovie, setShowMovie] = useState(null)

  // Show speciific movie
  if(showMovie !== null) {
    return (
      <Show imdbId={showMovie} setShowMovie={setShowMovie} />
    )
  }

  // Show search screen
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Search inputSearchPhrase={inputSearchPhrase}
        setinputSearchPhrase={setinputSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
        setSearchPhrase={setSearchPhrase} />
      </View>
      <List search={searchPhrase} setShowMovie={setShowMovie} />
    </View>
  );
}

export default MovieScreen;

const styles = StyleSheet.create({
  container: { backgroundColor: '#1f1f1f', flex: 1 },
  searchContainer: { backgroundColor: 'rgb(47, 45, 45)',  }
})
