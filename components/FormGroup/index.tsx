import { Box, Button, Heading, HStack, Stack, StackDivider } from '@chakra-ui/react'
import * as React from 'react'
import { FieldGroup } from './FieldGroup';

interface Props{
    title: string,
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    children: React.ReactNode,
};

const FormGroup = ({title, onSubmit, children}:Props) => (
  <Box px={{ base: '4', md: '10' }} py="8" maxWidth="6xl" mx="auto">
    <form
      id="settings-form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e);
      }}
    >
      <Stack spacing="4" divider={<StackDivider />}>
        <Heading size="lg" as="h1" paddingBottom="4">
          {title}
        </Heading>
        {children}
      </Stack>
      <FieldGroup mt="8">
        <HStack width="full">
          <Button type="submit" colorScheme="blue">
            Save Changes
          </Button>
        </HStack>
      </FieldGroup>
    </form>
  </Box>
);

export default FormGroup;
