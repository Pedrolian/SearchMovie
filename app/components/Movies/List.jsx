import React, {useState, useEffect } from 'react';
import {StyleSheet, Text, Image, View, TouchableWithoutFeedback,  ScrollView  } from 'react-native';
import Omdb from '../../utility/Omdb'

export default function List({ search, setShowMovie }) {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    if(search === null || search === undefined || search.length < 3) return;
    setLoading(true)

    Omdb.searchMovieByTitle(search).then(res => {
      setLoading(false)
      setMovies(res)
    })

  }, [search])

  console.log({ search })

  if(search === null || search === undefined || search.length < 3) {
    return (
      <></>
    )
  }

  if(loading === false && movies.length === 0) {
    return (
      <>
      <View style={{ paddingTop: 5 }}>
        <Text style={{ color: 'white' }}>No movies found for .. {search}</Text>
      </View>
      </>
    )
  }

  if(loading === true) {
    return (
      <>
      <View style={{ paddingTop: 5 }}>
        <Text style={{ color: 'white' }}>Searching for .. {search}</Text>
      </View>
      </>
    )
  }

  const displayMovie = (data) => {
    return (
      <TouchableWithoutFeedback key={data.imdbID} onPress={() => { setShowMovie(data.imdbID) }}>
      <View style={stylesMovie.findMovie}>
        <Image resizeMode='contain' source={{ uri: data.Poster, width: '100%', height: 280 }} />
        <View>
          <Text style={{ width: '100%', fontWeight: 'bold', color: 'white' }}>
            {data.Title}
          </Text>
          <Text style={{ color: 'gray' }}>({data.Year})</Text>
        </View>
      </View>
      </TouchableWithoutFeedback>
    )
  }

  return (
    <>
      <View style={stylesMovie.container}>
        <ScrollView contentContainerStyle={stylesMovie.scrollView}>
          {movies.map(movie => displayMovie(movie))}
        </ScrollView>
      </View >
    </>
  )
}

const stylesMovie = StyleSheet.create({
  container: {
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#000',
    paddingTop: 20,
    paddingBottom: 125
  },
  findMovie: {
    width: '50%',
    padding: 5,
    justifyContent: 'center'
  },
})
