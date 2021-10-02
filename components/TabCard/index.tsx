import { Box, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { Navbar } from './Navbar'
import { NavTabLink } from './NavTabLink'

export const TabCard = () => (
  <Box height="60px" bg={useColorModeValue('gray.50', 'gray.700')}>
    <Navbar>
      <Navbar.Links>
        <NavTabLink>Create</NavTabLink>
        <NavTabLink>Full editing</NavTabLink>
        <NavTabLink>Preview</NavTabLink>
      </Navbar.Links>
    </Navbar>
  </Box>
)
