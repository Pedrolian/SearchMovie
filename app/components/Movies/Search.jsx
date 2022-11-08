import React from 'react';
import {StyleSheet, View, TextInput, Button,  Keyboard } from 'react-native';
import { Feather, Entypo } from "@expo/vector-icons"

export default function Search({clicked, setClicked,  inputSearchPhrase, setinputSearchPhrase, setSearchPhrase}) {

  return (
    <View style={styles.container}>
      <View
        style={
          clicked
            ? styles.searchBar__clicked
            : styles.searchBar__unclicked
        }
      >
        {/* search Icon */}
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={inputSearchPhrase}
          onChangeText={setinputSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
          onSubmitEditing={() => {
            setSearchPhrase(inputSearchPhrase)
          }}
          blurOnSubmit={true}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
            setinputSearchPhrase("")
          }}/>
        )}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      {clicked && (
        <View>
          <Button
            color={'#b2b2b2'}
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
              setinputSearchPhrase("")
              setSearchPhrase("")
            }}
          ></Button>
        </View>
      )}
    </View>
  );

}

// styles
const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    margin: 12,
    justifyContent: "space-between",
    alignItems: 'center',
    flexDirection: "row",
    width: "94%",

  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#F7F3EA",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#f2eae8",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
});
