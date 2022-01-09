import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext'
import { makeServer } from '../services/mirage'
import {ReactQueryDevtools} from 'react-query/devtools'

import { QueryClient, QueryClientProvider } from 'react-query'

function MyApp({ Component, pageProps }: AppProps) {

  if (process.env.NODE_ENV === 'development') {
    makeServer();
  }
  const queryClient = new QueryClient()

  return (
    // Toda vez que for utilizado react-quer, é necessário que a queryestaja envolta de um QueryClientProvider recebendo um paramentro client
    <QueryClientProvider client={queryClient}> 
      <ChakraProvider resetCSS theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  )
}

export default MyApp
