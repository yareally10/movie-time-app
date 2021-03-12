import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

const DetailsScreen = ({ navigation, route }) => {
  console.log(route);
  const { movie } = route.params;
  return (
    <View style={styles.mainView}>
      <Text style={{ fontSize: 20 }}>
        {movie.title} ({movie.release})
      </Text>
      <Text style={{ fontSize: 100 }}>{movie.screenNumber}</Text>
      <Button
        title="Go to Image"
        onPress={() => {
          navigation.navigate("BigImageView");
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
