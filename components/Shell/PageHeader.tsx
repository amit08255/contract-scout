import { Box, Container, Heading, Stack, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { TabLink } from './TabLink'

interface Props{
    links?: Array<{title: string, link: string, active: boolean}>,
    title?: string,
};

export const PageHeader = ({title = '', links = []}:Props) => {
  return (
    <Box bg={mode('white', 'gray.900')} pt="8" shadow="sm">
      <Container maxW="7xl">
        {
            !title ? null : <Heading size="lg" mb="3">{title}</Heading>
        }
        <Stack direction="row" spacing="4">
          {
              links.map((item, index) => (
                <TabLink
                    key={`tab-link-${index + 1}`}
                    aria-current={item.active ? 'page' : 'false'}
                    href={item.link}
                >
                    {item.title}
                </TabLink>
              ))
          }
        </Stack>
      </Container>
    </Box>
  )
}
