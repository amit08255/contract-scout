import { Box, Grid } from '@chakra-ui/layout';
import React from 'react';
import { Navbar } from '../components/Navbar';

const Homepage = () => (
    <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <Box w="100%" h="10" bg="white" height="210px" shadow="base" border="1px solid" borderColor="gray.300" />
        <Box w="100%" h="10" bg="blue.500" />
        <Box w="100%" h="10" bg="blue.500" />
        <Box w="100%" h="10" bg="blue.500" />
        <Box w="100%" h="10" bg="blue.500" />
    </Grid>
);

export default Homepage;
