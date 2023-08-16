import * as React from "react";
import { MotiView } from "moti";
import { StyleSheet, View } from "react-native";

const LoadingIndicator = ({ size }: { size: number }) => {
  return (
    <MotiView
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: size / 10,
        borderColor: "#fff",
      }}
    />
  );
};
export default function App() {
  return (
    <View style={styles.container}>
      <LoadingIndicator size={100} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#010100",
    alignItems: "center",
    justifyContent: "center",
  },
});
