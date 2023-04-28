import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import AppThemeProvider from './Providers/AppThemeProvider'
import { CharacterPage } from './Pages/Characters/CharacterPage'
import { ApolloProvider } from '@apollo/client'
import { WebClient } from './Services/Server/WebClient'
import { LocationPage } from './Pages/Locations/LocationPage'
import { AppDataProvider } from './Providers/AppDataProvider'

export const routes = {
  charactersListPage: "/characters",
  charactersDetailPage: "/characters/:id",
  locationsListPage: "/locations",
  locationsDetailPage: "/locations/:id",
  resolve: {
    charactersDetailPage: (id:string) => `${routes.charactersListPage}/${id}`,
    locationsDetailPage: (id: string) => `${routes.locationsListPage}/${id}`
  }
}

function App() {

  return (
    <AppThemeProvider>
        <BrowserRouter>
        <ApolloProvider client={WebClient}>
          <AppDataProvider>
            <Routes>
              <Route path={"/characters/*"} element={<CharacterPage />} />
              <Route path={"/locations/*"} element={<LocationPage />} />
              <Route path="*" element={<Navigate to={routes.charactersListPage} replace />} />
            </Routes>
          </AppDataProvider>
        </ApolloProvider>
      </BrowserRouter>
    </AppThemeProvider>
  )
}

export default App
