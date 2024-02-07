import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import CommunityLog from "./components/communitylog/CommunityLog.tsx";

function App() {

  return (
    <MantineProvider>
      <CommunityLog />
    </MantineProvider>
  )
}

export default App
