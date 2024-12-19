
import { useFonts } from 'expo-font';
import 'react-native-reanimated';
import MarketsOverview1 from '@/components/MarketsOverview1';


export default function RootLayout() {

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });



  if (!loaded) {
    return null;
  }

  return (
    
    <MarketsOverview1/>
  );
}
