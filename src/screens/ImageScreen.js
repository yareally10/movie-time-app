import React from "react";
import { Button, View, Text, StyleSheet, Image } from "react-native";

const ImageScreen = (props) => {
  console.log(props.route.params.uri);
  return (
    <View style={styles.mainView}>
      <Text>Image Screen</Text>
      <Image
        style={styles.imageView}
        source={{
          uri: props.route.params.uri,
        }}
      />
      <Button
        title="Go Home"
        onPress={() => {
          props.navigation.popToTop();
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
  imageView: {
    width: 400,
    height: 640,
  },
});

export default ImageScreen;
