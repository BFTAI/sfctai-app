import { WebView } from "react-native-webview";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef } from 'react';
import { BackHandler } from 'react-native';

export default function WebviewScreen({ refreshing, onRefresh }) {
  const webViewRef = useRef(null);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => backHandler.remove();
  }, []);

  const handleBackPress = () => {
    if (webViewRef.current) {
      webViewRef.current.goBack();
      return true; // Prevent default behavior (e.g., exit the app)
    }
    return false;
  };

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
        ref={webViewRef}
        //originWhitelist={['*']}
        source={{ uri: url }}
        startInLoadingState={true}
        onLoadEnd={() => refreshing && onRefresh()}
      />
      <StatusBar style="auto" />
    </View>
  );
}
