import { Box, Heading, SimpleGrid, Stack, Text, Image } from '@chakra-ui/react';
import {  } from 'antd';
import React from 'react';
import sachin from "../Data/sachin.png";
import ayushi from "../Data/ayushi.png";
import udit from "../Data/udit.png";

const Combinebottom = () => {
  return (
    <>
        <Box bgGradient="linear(to-r, #131543, #525368, #131543)" pb={20}>
        <Box margin={'auto'} pb={4} textAlign={{base:'center', sm:'left', md:'left', lg:'left'}} width={'90%'}>
          <Heading fontFamily={'roboto'} color={"whitesmoke"} fontSize={{base:24, sm:24, md:28, lg:36}} fontWeight={500}>Our Tutors</Heading>
        </Box>

        <Box>
          <SimpleGrid
          // border={'2px solid red'}
            width={{base:'100%', sm:'70%', md:'100%', lg:'100%'}}
            margin={'auto'}
            color={"whitesmoke"}
            columns={{ base: 3, sm: 1, md: 1, lg: 3 }}
            alignItems={'center'}
            justifyContent={'center'}
            // gap={{ base: 16, sm: 16, md: 0, lg: 0 }}
            // gap={{ base: 0, sm: 0, md: 0, lg: 0 }}

          >
            <Stack width={{base:"85%", sm:"65%", md:"65%",lg:"65%"}} height={'100%'} margin={"auto"}>
              <Box>
                <Image src={sachin} />
              </Box>
              <Stack>
                <Box>
                  <Text fontWeight={{base:400, sm:400, md:400, lg:600}} fontSize={{base:14, sm:20, md:20, lg:26}}>
                    Sachin Birla
                  </Text>
                  <Text fontSize={{base:10, sm:10, md:12, lg:13}}>MBA Finance, NISM</Text>
                </Box>
                <Text fontWeight={500} fontSize={{base:10, sm:10, md:12, lg:19}}>
                  Basics of Stock Market & Derivatives
                </Text>
                <Text fontSize={{base:12, sm:12, md:12, lg:17}}>
                  20+ years of experience and made thousands of people financially
                  stable.
                </Text>
              </Stack>
            </Stack>

            <Stack width={{base:"85%", sm:"65%", md:"65%",lg:"65%"}} height={'100%'} margin={"auto"}>
              <Box>
                <Image src={ayushi} />
              </Box>
              <Stack>
                <Box>
                  <Text fontWeight={{base:400, sm:400, md:400, lg:600}} fontSize={{base:14, sm:20, md:20,  lg:26}}>
                    Ayushi Verma
                  </Text>
                  <Text fontSize={{base:10, sm:10, md:12, lg:13}}>MBA Finance, NISM</Text>
                </Box>
                <Text fontWeight={500} fontSize={{base:10, sm:10, md:12, lg:19}}>
                Technical Analysis
                </Text>
                <Text fontSize={{base:12, sm:12, md:12, lg:17}}>
                17+ years of experience and made thousands of students technically strong.
                </Text>
              </Stack>
            </Stack>

            <Stack width={{base:"85%", sm:"65%", md:"65%",lg:"65%"}} height={'100%'} margin={"auto"}>
              <Box>
                <Image src={udit} />
              </Box>
              <Stack>
                <Box>
                  <Text fontWeight={{base:400, sm:400, md:400, lg:600}} fontSize={{base:14, sm:20, md:20,  lg:26}}>
                    Udit Dua
                  </Text>
                  <Text fontSize={{base:10, sm:10, md:12, lg:13}}>CA, Corporate Law Advisor</Text>
                </Box>
                <Text fontWeight={500} fontSize={{base:10, sm:10, md:12, lg:19}}>
                Fundamental Analysis
                </Text>
                <Text fontSize={{base:12, sm:12, md:12, lg:17}}>
                15+ years of experience and explains P&L in the simplest way possible.
                </Text>
              </Stack>
            </Stack>

          </SimpleGrid>
        </Box>
        </Box>
    </>
  )
}

export default Combinebottom