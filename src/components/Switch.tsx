import * as React from "react";
import { MotiTransitionProp, MotiView } from "moti";
import { Pressable, StyleSheet, View } from "react-native";
import { Easing } from "react-native-reanimated";

const COLORS = {
  active: "#2C2C2C",
  inactive: "#DCDCDC",
};

type SwitchProps = {
  size: number;
  onPress: () => void;
  isActive: boolean;
};

const Switch: React.FC<SwitchProps> = ({ size, onPress, isActive }) => {
  const trackWidth = React.useMemo(() => {
    return size * 1.5;
  }, [size]);

  const trackHeight = React.useMemo(() => {
    return size * 0.4;
  }, [size]);

  const knobSize = React.useMemo(() => {
    return size * 0.6;
  }, [size]);

  const transition: MotiTransitionProp = {
    type: "timing",
    duration: 200,
    easing: Easing.inOut(Easing.ease),
  };

  return (
    <>
      <View style={styles.container}>
        <Pressable onPress={onPress}>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <MotiView
              transition={transition}
              animate={{
                backgroundColor: isActive ? COLORS.active : COLORS.inactive,
              }}
              style={{
                position: "absolute",
                width: trackWidth,
                height: trackHeight,
                borderRadius: trackHeight / 2,
                backgroundColor: COLORS.active,
              }}
            />
            <MotiView
              transition={transition}
              animate={{
                translateX: isActive ? trackWidth / 4 : -trackWidth / 4,
              }}
              style={{
                width: size,
                height: size,
                borderRadius: size / 2,
                backgroundColor: "#fff",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MotiView
                transition={transition}
                animate={{
                  width: isActive ? 0 : knobSize,
                  borderColor: isActive ? COLORS.active : COLORS.inactive,
                }}
                style={{
                  width: knobSize,
                  height: knobSize,
                  borderRadius: knobSize / 2,
                  borderWidth: size * 0.1,
                  borderColor: COLORS.active,
                }}
              />
            </MotiView>
          </View>
        </Pressable>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Switch;
