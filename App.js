import { SafeAreaProvider } from 'react-native-safe-area-context';
import WebviewScreen from './WebviewScreen';

export default function App() {
  return (
    <SafeAreaProvider>
       <WebviewScreen />
    </SafeAreaProvider>
  );
} 
