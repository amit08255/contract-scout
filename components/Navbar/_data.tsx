import * as React from 'react'
import { IoCalendar, IoDocument, IoDocumentAttach, IoGrid, IoHelpBuoy } from 'react-icons/io5'
import { MdWeb } from 'react-icons/md'

export interface Link {
  label: string
  href?: string
  children?: Array<{
    label: string
    description?: string
    href: string
    icon?: React.ReactElement
  }>
}

export const links: Link[] = [
  {
    label: 'Documents',
    children: [
      {
        label: 'Create New Document',
        description: 'Create a new document.',
        href: '#',
        icon: <IoDocumentAttach />,
      },
      {
        label: 'My Documents',
        description: 'View existing documents.',
        href: '#',
        icon: <IoDocument />,
      },
    ],
  },
  { label: 'Account', href: '#' },
  { label: 'Pricing', href: '#' },
]
