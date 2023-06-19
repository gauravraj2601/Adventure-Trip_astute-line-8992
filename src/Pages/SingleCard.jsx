import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

// const SingleCard = () => {
//   const { id } = useParams();

//   return <div>SingleCard - ID: {id}</div>;
// };

// export default SingleCard;


import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
  
    List,
    ListItem,
  } from '@chakra-ui/react';
//   import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
//   import { MdLocalShipping } from 'react-icons/md';
import axios from 'axios';
  
  export default function SingleCard() {
    const { id } = useParams();
    console.log(id,"hai")
    const [tour, setTour]= useState([]);
    const fetchData= async ()=>{
        try {
            const res= await axios.get(`https://shy-blue-llama-sock.cyclic.app/trips/${id}`)
            const data= res.data;
            console.log(tour)
            setTour(data)
        } catch (error) {
            console.log("Error fetching data:",error)
        }
    }
    useEffect(()=>{
        fetchData()
    },[id])
        const {image, title, location, duration, description, difficulty}= tour;
    return (
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={image
              }
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {title}
              </Heading>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text fontSize={'lg'}>
                  {description}
                </Text>
                {/* <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore
                </Text> */}
              </VStack>
             
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Tour Details
                </Text>
  
                <List spacing={2}>
                <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Activity Type:
                    </Text>{' '}
                    {title}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Location:
                    </Text>{' '}
                    {location}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Duration:
                    </Text>{' '}
                    {duration}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Difficulty:
                    </Text>{' '}
                    {difficulty}
                  </ListItem>
                 
                </List>
              </Box>
            </Stack>
  
            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
              Book now
            </Button>
  
            {/* <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <MdLocalShipping />
            </Stack> */}
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }