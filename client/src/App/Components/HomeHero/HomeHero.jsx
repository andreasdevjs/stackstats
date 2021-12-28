import React from 'react';
import { Box, Heading, Button  } from '@chakra-ui/react';

function HomeHero() {
  return (
    <Box bg="rgb(44, 45, 48)" textAlign='center' pb='50px'>
      <Heading color='white' fontFamily='GilroySemiBold' className='' textAlign='center' as='h1' fontSize='30px' lineHeight='1' px={4} pt='28px'>
        Offer your services and get paid in satoshis
      </Heading>
      <Heading as='h2' color='white' fontFamily='GilroySemiBold' opacity='0.6' fontSize='16px' textAlign='center' p={4}>
        Post your ad or offer your expertise and earn bitcoin without KYC. No intermediaries. 
      </Heading>
      <Button size='lg' height='48px' width='200px' bg='rgb(78, 68, 206)' color='white' fontFamily='GilroySemiBold'>
        Start now
      </Button>
    </Box>
  );
}

export default HomeHero;
