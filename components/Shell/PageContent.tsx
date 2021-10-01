import { Box, Container, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'

interface Props{
    padding?: string|number,
    bg?: string,
    shadow?: string,
    node?: React.ReactNode,
    children: React.ReactNode,
};

export const PageContent = ({padding = '6', bg = 'white', shadow = 'base', children, node}:Props) => {
  return (
    <Box as="main" py="8" flex="1">
      <Container maxW="7xl">
        {node}
        <Box bg={mode(bg, 'gray.700')} p={padding} rounded="lg" shadow={shadow}>
          {children}
        </Box>
      </Container>
    </Box>
  )
}
