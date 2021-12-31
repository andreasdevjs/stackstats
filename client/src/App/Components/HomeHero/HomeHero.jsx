import React from 'react';
import { Box, Heading, Button  } from '@chakra-ui/react';

function HomeHero() {
  return (
    <React.Fragment>
      <Box bg="rgb(44, 45, 48)" textAlign='center' pb='50px'>
        <Heading color='white' fontFamily='GilroySemiBold' className='' textAlign='center' as='h1' fontSize='37px' lineHeight='1' px={4} pt='28px'>
          Welcome to the Bitcoin economy
        </Heading>
        <Heading as='h2' color='white' fontFamily='GilroySemiBold' opacity='0.6' fontSize='16px' textAlign='center' px={4} pt={4} pb={8}>
          Stacksats is a bitcoin-only paid classifieds portal. Earn bitcoin without KYC by offering your services or expertise. No intermediaries.
        </Heading>
        <Button size='lg' height='48px' width='200px' bg='rgb(78, 68, 206)' color='white' fontFamily='GilroySemiBold'>
          Start now
        </Button>
      </Box>
      <Box height='5px' bgColor='#F7931A'></Box>
    </React.Fragment>
  );
}

export default HomeHero;
