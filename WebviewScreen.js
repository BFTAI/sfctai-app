import React, { useEffect, useRef, useState } from 'react';
import { WebView } from "react-native-webview";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleSheet, View, RefreshControl, ScrollView, BackHandler } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function WebviewScreen() {
  const webViewRef = useRef(null);
  const insets = useSafeAreaInsets();
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => backHandler.remove();
  }, []);

  const handleBackPress = () => {
    if (webViewRef.current) {
      webViewRef.current.goBack();
      return true; // Prevent default behavior (e.g. exit the app)
    }
    return false;
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    if (webViewRef.current) {
      webViewRef.current.reload();
    } else {
      setRefreshing(false);
    }
    }, []);

  const onLoadEnd = () => {
    setRefreshing(false);
  };

  const url = "https://syai.onrender.com";
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#38bdf8',
      justifyContent: 'center',
      paddingTop: insets.top
    },
    scrollView: {
      flex: 1,
      backgroundColor: '#38bdf8',
      //alignItems: 'center',
      justifyContent: 'center',
    },
    webView: {
      backgroundColor: '#38bdf8',
    },
  });

  return (
    <ScrollView contentContainerStyle={styles.scrollView} 
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
    <View style={styles.container}>
      <WebView 
        style={styles.webView}
        ref={webViewRef}
        source={{ uri: url }}
        startInLoadingState={true}
        onLoadEnd={onLoadEnd}
        originWhitelist={['*']}
      />
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}
