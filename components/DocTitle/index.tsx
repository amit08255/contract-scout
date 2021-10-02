import { Input } from '@chakra-ui/input';
import { Box, Text } from '@chakra-ui/layout';
import React from 'react';
import { IoCamera } from 'react-icons/io5';

export const DocTitle = () => (
    <Box width="full" display="flex" alignItems="end" p="9">
        <Box width="full" mr="5">
            <Text fontSize="xs" color="gray.500" fontWeight="medium">Document Title</Text>
            <Input type="text" height="78px" fontSize="5xl" width="full" borderRadius="none" borderColor="gray.400" />
        </Box>
        <Box width="142px" height="142px" border="1px solid" borderColor="gray.400" display="flex" alignContent="center" alignItems="center" justifyContent="center" justifyItems="center" flexDirection="column">
            <Text fontSize="4xl" color="blue"><IoCamera /></Text>
            <Text fontSize="xs" color="gray.500" fontWeight="medium" mt="3">Add Logo</Text>
        </Box>
    </Box>
);
