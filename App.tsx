import * as React from "react";
import LoadingIndicator from "./src/components/LoadingIndicator";
import PhoneRingIndicator from "./src/components/PhoneRingIndicator";
import Switch from "./src/components/Switch";
import API_KEY from "./config";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
const { width, height } = Dimensions.get("screen");
const API_URL = `https://api.pexels.com/v1/search?query=nature&orientation=portrait&size=small&per_page=20`;
const fetchData = async () => {
  const data = await fetch(API_URL, {
    headers: {
      Authorization: API_KEY,
    },
  });
  const { photos } = await data.json();

  return photos;
};
export default function App() {
  const [images, setImages] = React.useState(null);
  React.useEffect(() => {
    const fetchImages = async () => {
      const images = await fetchData();
      console.log(images);
      setImages(images);
    };
    fetchImages();
  }, []);

  if (!images) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator
        data={images}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={{ width, height }}>
              <Image
                source={{ uri: item.src.portrait }}
                style={[StyleSheet.absoluteFillObject]}
              />
            </View>
          );
        }}
      />
    </View>
  );
}
