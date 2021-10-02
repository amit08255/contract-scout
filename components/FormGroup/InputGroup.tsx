import { VStack } from '@chakra-ui/react';
import * as React from 'react';
import { FieldGroup } from './FieldGroup';

interface Props{
    title: string,
    children: React.ReactNode,
};

const InputGroup = ({ title, children }:Props) => (
    <FieldGroup title={title}>
        <VStack width="full" spacing="6">
            {children}
        </VStack>
    </FieldGroup>
);

export default InputGroup;
