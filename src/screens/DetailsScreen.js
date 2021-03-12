import React, { useEffect, useState } from "react";
import { Button, View, Text, StyleSheet } from "react-native";

const DetailsScreen = ({ navigation, route }) => {
  console.log(route);
  const { movie } = route.params;
  const xhr = new XMLHttpRequest();
  const serverUrl = "http://www.omdbapi.com/";
  const apiKey = "xxxxxx"; // replace with real api key
  const movieTitle = encodeURI(movie.title.replace(" ", "+"));
  const movieYear = encodeURI(movie.release);
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    xhr.open(
      "GET",
      `${serverUrl}?apikey=${apiKey}&t=${movieTitle}&y=${movieYear}`
    );
    xhr.send();
    xhr.onload = () => {
      if (xhr.status === 200) {
        let response = JSON.parse(xhr.response);
        setMovieDetails(response);
        console.log(response);
      } else {
        console.log(
          `HTTP Request Failed.\nStatus: ${xhr.status}\nResponse: ${xhr.response}`
        );
      }
    };
  }, []);

  return (
    <View style={styles.mainView}>
      <Text>{movieDetails && movieDetails.Title}</Text>
      <Text>{movieDetails && movieDetails.Released}</Text>
      <Text>{movieDetails && movieDetails.Plot}</Text>
      <Button
        title="Go to Image"
        onPress={() => {
          if (movieDetails) {
            navigation.navigate("BigImageView", {
              uri: movieDetails.Poster,
            });
          }
        }}
      />
      <Button
        title="More Details"
        onPress={() => {
          movie.screenNumber++;
          navigation.push("Details_to_Details", { movie });
        }}
      />
      <Button
        title="Go Back a Screen"
        onPress={() => {
          navigation.pop();
        }}
      />
      <Button
        title="Go Home"
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DetailsScreen;
