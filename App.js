import { SafeAreaProvider } from "react-native-safe-area-context";
import WebviewScreen from "./WebviewScreen";

import React from 'react';
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
} from "react-native";

const App = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaProvider>
      <ScrollView contentContainerStyle={styles.scrollView} 
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <WebviewScreen refreshing={refreshing} onRefresh={onRefresh}/>
      </ScrollView >
    </SafeAreaProvider >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#38bdf8',
    //alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;
