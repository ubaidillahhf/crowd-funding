import { ViewStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
  quotesContainer: ViewStyle;
  quotes: ViewStyle;
  logo: ViewStyle;
  textLogo: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  quotesContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  quotes: {
    fontSize: 14,
    color: "white",
  },
  logo: {
    alignItems: "center",
    justifyContent: "flex-end",
  },
  textLogo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
