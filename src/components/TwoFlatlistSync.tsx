import * as React from "react";
import API_KEY from "../../config";

import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("screen");
const API_URL = `https://api.pexels.com/v1/search?query=nature&orientation=portrait&size=small&per_page=20`;
const IMAGE_SIZE = 80;
const SPACING = 10;
const fetchData = async () => {
  const data = await fetch(API_URL, {
    headers: {
      Authorization: API_KEY,
    },
  });
  const { photos } = await data.json();

  return photos;
};

const TwoFlatlistSync = () => {
  const [images, setImages] = React.useState(null);
  React.useEffect(() => {
    const fetchImages = async () => {
      const images = await fetchData();
      console.log(images);
      setImages(images);
    };
    fetchImages();
  }, []);

  const topRef = React.useRef();
  const thumbRef = React.useRef();
  const [activeIndex, setActiveIndex] = React.useState(0);

  const scrollToActiveIndex = (index: number) => {
    setActiveIndex(index);
    topRef?.current?.scrollToOffset({
      offset: index * width,
      animated: true,
    });
    if (index * (IMAGE_SIZE + SPACING) - IMAGE_SIZE / 2 > width / 2) {
      thumbRef?.current?.scrollToOffset({
        offset:
          index * (IMAGE_SIZE + SPACING) - width / 2 + IMAGE_SIZE / 2 + SPACING,
        animated: true,
      });
    } else {
      thumbRef?.current?.scrollToOffset({
        offset: 0,
        animated: true,
      });
    }
  };
  if (!images) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FlatList
        ref={topRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator
        data={images}
        keyExtractor={(item) => item.id.toString()}
        onMomentumScrollEnd={(ev) => {
          scrollToActiveIndex(
            Math.floor(ev.nativeEvent.contentOffset.x / width),
          );
        }}
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
      <FlatList
        ref={thumbRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={images}
        keyExtractor={(item) => item.id.toString()}
        style={{ position: "absolute", bottom: IMAGE_SIZE }}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => scrollToActiveIndex(index)}>
              <Image
                source={{ uri: item.src.portrait }}
                style={{
                  width: IMAGE_SIZE,
                  height: IMAGE_SIZE,
                  borderRadius: 12,
                  marginLeft: SPACING,
                  borderWidth: 2,
                  borderColor: activeIndex === index ? "#fff" : "transparent",
                }}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default TwoFlatlistSync;
