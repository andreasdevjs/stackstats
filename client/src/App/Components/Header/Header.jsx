import React from 'react';
import { Link as ReachLink } from 'react-router-dom';
import { Box, Heading, Image, Link } from '@chakra-ui/react';
import DrawerToggleButton from '../DrawerToggleButton/DrawerToggleButton.jsx';

import SatsLogo from '../../Assets/Images/Satoshi_regular_elipse.svg';

const Header = () => {
  return (
    <Box display='flex' alignItems='center' bg="rgb(44, 45, 48)" textAlign="left" paddingX={5} paddingY={4} color='white'>
      <Image width='20px' src={SatsLogo} alt='Satoshis symbol' marginRight='5px' />
      <Heading fontFamily='GilroySemiBold' className='gilroy-semi-bold heading-logo' as='h1' fontSize='28px' lineHeight='1'>
        <Link as={ReachLink} to='/'>stacksats</Link>
      </Heading>
      <Box marginLeft='auto'>
        <DrawerToggleButton />
      </Box>
    </Box>
  );
}

export default Header;