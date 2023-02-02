import { SafeAreaProvider } from 'react-native-safe-area-context'

import RootNavigation from './constants/routes/rootNavigation'

export default function App () {
  return (
    <SafeAreaProvider>
      <RootNavigation />
    </SafeAreaProvider>
  )
}
