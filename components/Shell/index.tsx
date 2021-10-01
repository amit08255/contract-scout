import { Flex, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { Navbar } from './Navbar'
import { PageContent } from './PageContent'
import { PageHeader } from './PageHeader'

interface Props{
    links?: Array<{title: string, link: string, active: boolean}>,
    title?: string,
    node?: React.ReactNode,
    header?: boolean,
    padding?: string|number,
    bg?: string,
    shadow?: string,
    children: React.ReactNode,
}

const Shell = ({
    header = false, links = [], title = null, padding = '6', children, bg, shadow, node,
}:Props) => {
  return (
    <Flex direction="column" bg={mode('gray.100', 'gray.800')}>
      <Navbar />
      {
          header !== true ? null : (
            <PageHeader links={links} title={title} />
          )
      }
      <PageContent padding={padding} bg={bg} shadow={shadow} node={node}>
          {children}
      </PageContent>
    </Flex>
  )
};

export default Shell;
