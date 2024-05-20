import React from 'react'
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import alltutors from '../Data/alltutors.png'

const Failure = () => {
  return (
    <Box textAlign="center" pt={8} px={6}>
      <Box display="inline-block">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bg={'red.500'}
          rounded={'50px'}
          w={'55px'}
          h={'55px'}
          textAlign="center">
          <CloseIcon boxSize={'20px'} color={'white'} />
        </Flex>
      </Box>
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Payment Failed
      </Heading>
      <Text color={'gray.500'}>
        Payment has been declined...!!
      </Text>

      <Image width={{base:'200%', sm:'150%', md:'100%', lg:'100%'}} src={alltutors}/>
    </Box>
  )
}

export default Failure