import React from "react"
import {
  ChakraProvider,
  extendTheme
} from "@chakra-ui/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from 'react-router-dom';
import customTheme from "./theme"

import Sample from "./pages/Main";

const queryClient = new QueryClient()
const theme = extendTheme(customTheme)

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <Routes>
      <Route path="/" element={<Sample />} />
      </Routes>
    </ChakraProvider>
  </QueryClientProvider>
)

export default App