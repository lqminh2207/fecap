import { Box, Heading, Text, Button, Center } from '@chakra-ui/react';

export interface AlertUnauthorizedWidgetProps {
  onCancel?: () => void;
}

export function AlertUnauthorizedWidget(props: AlertUnauthorizedWidgetProps) {
  const { onCancel } = props;

  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, green.400, green.600)"
        backgroundClip="text"
        lineHeight="14"
      >
        403
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        You are not allowed to access this page
      </Text>
      <Text color="gray.500" mb={6}>
        Contact your administrator if you believe you should have access to this page.
      </Text>

      <Center>
        <Button
          colorScheme="green"
          bgGradient="linear(to-r, green.400, green.500, green.600)"
          color="white"
          variant="solid"
          onClick={onCancel}
        >
          Back
        </Button>
      </Center>
    </Box>
  );
}
