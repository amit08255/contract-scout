import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps /*, AppContext */ } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
  )
}

export default MyApp;
