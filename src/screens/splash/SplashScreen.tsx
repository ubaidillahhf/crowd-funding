import React, { useEffect, useRef } from "react";
import {
  View,
  Animated,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from "react-native";
/**
 * ? Local Imports
 */
import colors from "@colors";
import styles from "./SplashScreen.style";
import Text from "@shared-components/text-wrapper/TextWrapper";

const { height } = Dimensions.get("window");

const SplashScreen: React.FC = () => {
  const fadeOut = useRef(new Animated.Value(1)).current;
  const fadeIn = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeOut, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: false,
    }).start();
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  }, [fadeOut, fadeIn]);

  const transformY = fadeIn.interpolate({
    inputRange: [0, 1],
    outputRange: [height, -height / 2],
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.blue} barStyle="dark-content" />
        <Animated.View style={[styles.quotesContainer, { opacity: fadeOut }]}>
          <Text style={styles.quotes}>"Karena Berbagi Tidak Rugi"</Text>
        </Animated.View>
        <Animated.View
          style={[
            styles.logo,
            { opacity: fadeIn, transform: [{ translateY: transformY }] },
          ]}
        >
          <Text style={styles.textLogo}>CrowdFunding</Text>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
