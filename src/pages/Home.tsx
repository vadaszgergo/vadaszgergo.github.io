import React from 'react';
import { Box, Heading, Text, VStack, Container } from '@chakra-ui/react';

export const Home = () => {
  return (
    <Container maxW="1200px" py={10}>
      <VStack spacing={6} align="start">
        <Heading as="h1" size="2xl">
          Welcome to My Portfolio
        </Heading>
        <Text fontSize="xl">
          I'm an IT consultant specializing in [Your Areas of Expertise].
          With experience in various technologies and industries, I help
          organizations achieve their digital transformation goals.
        </Text>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Areas of Expertise
          </Heading>
          <VStack align="start" spacing={2}>
            <Text>• Cloud Architecture (Azure)</Text>
            <Text>• DevOps & CI/CD</Text>
            <Text>• [Add more areas]</Text>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}; 