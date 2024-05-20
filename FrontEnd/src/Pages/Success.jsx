import React from 'react'
import { Box, Heading, Image, Text } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import alltutors from '../Data/alltutors.png'

const Success = () => {
  return (
    <Box textAlign="center" justifyContent={'center'} pt={8} px={6}>
      <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Payment Successful
      </Heading>
      <Text color={'gray.500'}>
        Payment has been successfully done...!!
      </Text>

      <Image width={{base:'200%', sm:'150%', md:'100%', lg:'100%'}} src={alltutors}/>
    </Box>
  )
}

export default Success