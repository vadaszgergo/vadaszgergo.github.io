import React from 'react';
import { Box, Flex, Link, Heading } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export const Header = () => {
  return (
    <Box as="header" bg="teal.500" color="white" px={4} py={3}>
      <Flex maxW="1200px" mx="auto" align="center" justify="space-between">
        <Heading as="h1" size="lg">
          <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
            Your Name
          </Link>
        </Heading>
        <Flex gap={6}>
          <Link as={RouterLink} to="/" _hover={{ textDecoration: 'underline' }}>
            Home
          </Link>
          <Link as={RouterLink} to="/articles" _hover={{ textDecoration: 'underline' }}>
            Articles
          </Link>
          <Link as={RouterLink} to="/about" _hover={{ textDecoration: 'underline' }}>
            About
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}; 