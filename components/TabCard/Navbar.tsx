import {
  Flex,
  HStack,
  Spacer,
  TabIndicator,
  TabList,
  Tabs,
  useColorModeValue as mode,
  useDisclosure,
} from '@chakra-ui/react'
import React, { isValidElement, ReactElement } from 'react'

export const Template: React.FC = (props) => {
  const children = React.Children.toArray(props.children).filter<ReactElement>(isValidElement)
  const mobileNav = useDisclosure()
  return (
    <Flex
      py={4}
      px={{ base: 4, md: 6, lg: 8 }}
      bg={mode('white', 'gray.800')}
      boxShadow="none"
      borderBottomWidth={mode('0', '1px')}
    >
      {children.find((child) => child.type === Brand)?.props.children}
      <HStack width="full" alignContent="center" alignItems="center" justifyContent="center" justifyItems="center" display={{ base: 'flex', md: 'flex' }} marginStart={4}>
        <Tabs colorScheme="blue" variant="unstyled" isFitted>
          <TabList>{children.find((child) => child.type === Links)?.props.children}</TabList>
          <TabIndicator
            mt="13px"
            height={1}
            borderTopRadius="md"
            bg={mode('blue.500', 'blue.200')}
          />
        </Tabs>
      </HStack>
      <Spacer />
      <HStack display={{ base: 'flex', md: 'flex' }} spacing={3}>
        {children.find((child) => child.type === UserProfile)?.props.children}
      </HStack>
    </Flex>
  )
}

const Brand: React.FC = () => null
const Links: React.FC = () => null
const UserProfile: React.FC = () => null

export const Navbar = Object.assign(Template, { Brand, Links, UserProfile })
