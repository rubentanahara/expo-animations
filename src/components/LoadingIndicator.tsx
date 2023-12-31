import * as React from "react";
import { MotiView } from "moti";
import { StyleSheet, View } from "react-native";
const LoadingIndicator = ({ size }: { size: number }) => {
  return (
    <View style={styles.container}>
      <MotiView
        from={{
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth: 0,
          shadowOpacity: 0.5,
        }}
        animate={{
          width: size + 20,
          height: size + 20,
          borderRadius: (size + 20) / 2,
          borderWidth: size / 10,
          shadowOpacity: 1,
        }}
        transition={{
          type: "timing",
          duration: 1000,
          loop: true,
          //repeat: Infinity,
          //repeatReverse:false
        }}
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth: size / 10,
          borderColor: "#C2C2C2",
          shadowColor: "#fff",
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 1,
          shadowRadius: 10,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#010100",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoadingIndicator;
