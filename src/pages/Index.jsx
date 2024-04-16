import { Box, Container, Heading, Text, Image, VStack, Link } from "@chakra-ui/react";
import { FaBirthdayCake, FaUniversity, FaGavel } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={5} align="center">
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1585066039154-a748070bc611?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxHcm92ZXIlMjBDbGV2ZWxhbmQlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTMyODg4NTh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Grover Cleveland" />
        <Heading as="h1" size="xl">
          Grover Cleveland
        </Heading>
        <Text fontSize="lg">22nd and 24th President of the United States</Text>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="md">
            Biography
          </Heading>
          <Text mt={2}>Stephen Grover Cleveland was born on March 18, 1837, in Caldwell, New Jersey. He was the 22nd and 24th President of the United States, the only president to serve two non-consecutive terms.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="md">
            Key Facts
          </Heading>
          <VStack align="start" spacing={3}>
            <Text>
              <FaBirthdayCake /> Born: March 18, 1837
            </Text>
            <Text>
              <FaUniversity /> Education: Did not attend college
            </Text>
            <Text>
              <FaGavel /> Presidency: 1885-1889, 1893-1897
            </Text>
          </VStack>
        </Box>
        <Link href="https://en.wikipedia.org/wiki/Grover_Cleveland" isExternal color="teal.500">
          Learn more on Wikipedia
        </Link>
      </VStack>
    </Container>
  );
};

export default Index;
