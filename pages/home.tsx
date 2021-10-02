import { Box, Grid, Text } from '@chakra-ui/layout';
import Shell from '../components/Shell';
import React from 'react';
import { IoAddCircleOutline, IoDocumentAttach, IoEye } from 'react-icons/io5';
import { TabCard } from '../components/TabCard';

const Homepage = () => (
    <Shell bg="transparent" shadow="none">
        <TabCard />
    </Shell>
);

export default Homepage;
