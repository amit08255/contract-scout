import * as React from 'react';
import { Box, useColorModeValue as mode } from '@chakra-ui/react'

interface Props{
    border?: string,
    bg?: string,
    shadow?: string,
    width?: string,
    mb?: string,
    children: React.ReactNode,
};

const ShellBox = ({
    children, border = 'gray.200', bg = 'transparent', shadow = 'none', width = 'auto', mb = '0',
}:Props) => (
    <Box
        border="3px dashed currentColor"
        borderColor={border}
        p="6"
        mb={mb}
        rounded="lg"
        bg={mode(bg, 'gray.700')}
        shadow={shadow}
        width={width}
    >
        {children}
    </Box>
);

export default ShellBox;
