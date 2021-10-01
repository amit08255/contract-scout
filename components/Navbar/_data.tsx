import * as React from 'react'
import { IoDocument, IoDocumentAttach } from 'react-icons/io5'

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
