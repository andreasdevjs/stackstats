import React from 'react';
import { Box, Heading, Image } from '@chakra-ui/react';

import SatsLogo from '../../Assets/Images/Satoshi_regular_elipse.svg';

const Header = () => {
  return (
    <Box display='flex' bg="rgb(44, 45, 48)" textAlign="left" paddingX={5} paddingY={4} color="white">
      <Image width='20px' src={SatsLogo} alt='Satoshis symbol' marginRight='5px' />
      <Heading fontFamily='GilroySemiBold' className='gilroy-semi-bold heading-logo' as='h1' fontSize='28px' lineHeight='1'>
        stacksats
      </Heading>
    </Box>
  )
}

export default Header;
