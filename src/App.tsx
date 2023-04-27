import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AppThemeProvider from './Providers/AppThemeProvider'
import { CharacterPage } from './Pages/Characters/CharacterPage'
import { ApolloProvider } from '@apollo/client'
import { WebClient } from './Utilities/WebClient'

function App() {

  return (
      <AppThemeProvider>
    <BrowserRouter>
        <ApolloProvider client={WebClient}>
          <Routes>
            <Route path={"/characters/*"} element={<CharacterPage />} />
          </Routes>
        </ApolloProvider>
    </BrowserRouter>
      </AppThemeProvider>
  )
}

export default App
