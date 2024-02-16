import { WebView } from "react-native-webview";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";

export default function WebviewScreen() {
  const insets = useSafeAreaInsets();
  const url = "https://syai.onrender.com";
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#38bdf8',
      justifyContent: 'center',
      paddingTop: insets.top
    },
  });
  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={{ uri: url }}
      />
    </View>
  );
}
