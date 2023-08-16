import { Feather } from "@expo/vector-icons";
import { MotiView } from "moti";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Easing } from "react-native-reanimated";

const COLOR: string = "#6E01EF";
const SIZE: number = 100;

const PhoneRingIndicator = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.dot, styles.center]}>
        {[...Array(3).keys()].map((index) => {
          return (
            <MotiView
              from={{
                opacity: 0.7,
                scale: 1,
              }}
              animate={{
                opacity: 0,
                scale: 4,
              }}
              transition={{
                type: "timing",
                duration: 2000,
                easing: Easing.out(Easing.ease),
                delay: index * 500,
                repeatReverse: false,
                loop: true,
              }}
              key={index}
              style={[StyleSheet.absoluteFillObject, styles.dot]}
            />
          );
        })}
        <Feather name="phone-outgoing" size={32} color="#fff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE,
    backgroundColor: COLOR,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PhoneRingIndicator;
