import { Box, Divider, Grid, Text } from '@chakra-ui/layout';
import Shell from '../components/Shell';
import React from 'react';
import { IoAddCircleOutline, IoDocumentAttach, IoEye } from 'react-icons/io5';
import { TabCard } from '../components/TabCard';
import InputField from '../components/FormGroup/InputField';
import { DocTitle } from '../components/DocTitle';
import { Parties } from '../components/Parties';

const Homepage = () => (
    <Shell bg="transparent" shadow="none">
        <TabCard />
        <Box width="full" bg="white" mt="6" pb="5">
            <DocTitle />
            <Divider mt="5" mb="5" />
            <Parties />
        </Box>
    </Shell>
);

export default Homepage;
