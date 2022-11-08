import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, Text, ImageBackground, Button } from 'react-native';
import axios from 'axios'
import Omdb from '../../utility/Omdb'

function Show({ imdbId, setShowMovie }) {

  const [loading, setLoading] = useState(true)
  const [movie, setMovie] = useState(null)


  useEffect(() => {
    setLoading(true)

    Omdb.getMovieByIMDb(imdbId).then(res => {
      setMovie(res)
      setLoading(false)
    }).catch(_ => {
      setMovie(null)
      setLoading(false)
    })

  }, [imdbId])

  if(loading === true) {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Text>
            Loading information..
          </Text>
        </ScrollView>
      </View>
    )
  }

  if(loading === false && movie === null) {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Text>
            Movie does not exist.
          </Text>
        </ScrollView>
      </View>
    )
  }

  return (
    <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollView}>
      <ImageBackground source={{ uri: movie.Poster.replace('._V1_SX3','._V1_SX9') }} style={styles.background} imageStyle={styles.backgroundImage}>
          <View style={{ backgroundColor: 'rgba(24, 22, 25, 0.8)', height: 500  }}>
            <View style={styles.viewTitle}>
              <View style={{  maxWidth: '90%' }}>
                <Text style={styles.textTitle}>
                  {movie.Title}
                </Text>
              </View>
              <View style={{ }}>
                <Text style={styles.textTitle}>
                  {movie.Year}
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.viewInfo}>
          <Text style={styles.textInfo}>{movie.Genre}</Text>
          <Text style={styles.textInfo}>{movie.Runtime}</Text>
        </View>
        <View style={styles.viewPlot}>
          <Text style={[styles.textInfo, styles.textPlot]}>{movie.Plot}</Text>
        </View>
        <View style={styles.viewRatings}>
          <Text style={styles.textRating}>Ratings:</Text>
          {movie.Ratings.map(row => {
            return (
              <View key={row.Source} >
                <Text style={styles.textInfo}>{row.Source} - {row.Value}</Text>
              </View>
            )
          })}
        </View>
      </ScrollView>
      <Button title='Back to searches' color={'#A06D57'} onPress={() => { setShowMovie(null) }} style={styles.buttonBack} />
    </View>
  );
}

export default Show;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f2f2',
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent:  'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#1f1f1f',
  },
  background: {
    flexGrow: 1,
    height: 500,
    width: '100%',
    opacity: 0.90,
  },
  backgroundImage: {
    resizeMode: "stretch",
    alignSelf: "flex-end"
  },
  viewTitle: {
    flexGrow: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'flex-end',
    alignItems: 'flex-end',
  },
  viewInfo: {
    padding: 5,
    flexGrow: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#121212'
  },
  viewPlot: {
    padding: 5,
    backgroundColor: '#1f1f1f',
    flexGrow: 1,
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  viewRatings: {
    padding: 5,
    borderTopColor: 'rgba(245,197,24,0.9)',
    borderTopWidth: 4,
    width: '100%',
    backgroundColor: '#1f1f1f'
  },
  textTitle: {
    color: '#E2D9DB',
    fontSize: 20
  },
  textInfo: {
    fontSize: 14,
    color: '#fff',
  },
  textPlot: {
    fontSize: 15
  },
  textRating: {
    fontSize: 16,
    color: 'rgb(219, 219, 219)'
  },
  buttonBack: {
    position: 'absolute',
    bottom: 0
  }
})
