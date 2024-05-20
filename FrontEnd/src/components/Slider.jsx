import React from 'react';
import { Carousel } from "antd";
import { Box, Flex, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { FaBookOpen } from "react-icons/fa";
import bgimg from "../Data/bgimg.jpg";
import basics from "../Data/Basics.png";
import fundamenta from "../Data/funda.png";
import technical from "../Data/technical.png";
import derivative from "../Data/derivative.png";


const contentStyle = {
    paddingTop:20,
    fontSize:16,
    fontFamily:"roboto",
    color:'#0a2472',
    // height: "auto",
    textAlign: "center",
    background: "transparent",
    
  }; 
  

const Slider = () => {
  return (
    <>
        <Box height={'auto'} bgImage={bgimg} fontFamily={"roboto"} color={'#0a2472'} py={8}>
        <Box width={"50%"} margin={"auto"} textAlign={'center'} pb={8}>
          <Heading fontFamily={'roboto'} fontWeight={500} fontSize={{base:24, sm:28, md:32, lg:32}}>Our Courses</Heading>
        </Box>

        <Stack 

        width={"84%"}
        margin={"auto"} 
        gap={8}
        fontSize={'16px'}>
        <Carousel 
        autoplay 
        loop 
        autoplaySpeed={2500}
        >
        
          <SimpleGrid gap={8} columns={{base:1, sm:1, md:1, lg:1}} justifyItems={"center"} alignItems={"center"} padding={'2%'} justifyContent={'space-around'} margin={'auto'}>
            <Box margin={'auto'} width={'70%'} >
              <Image margin={'auto'} src={basics} />
            </Box>

            <Stack 
            style={contentStyle}
            gap={4} 
            width={'90%'} 
            margin={'auto'} 
            textAlign={'center'}
            >
              <Heading fontFamily={'roboto'} fontWeight={500} fontSize={24}>Basics Of Stock Market</Heading>
              <Text justifyContent={'center'}>
                Grasp the fundamentals, from understanding stocks and stock
                exchanges to decoding market terminology and setting clear
                investment goals
              </Text>
              <SimpleGrid margin={'auto'} justifyContent={'center'} columns={{base:1, sm:1, md:1, lg:2}} gap={1} >
                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Portfolio Management</Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Market Psychology </Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Company Analysis</Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Investment Strategies</Text>
                </Flex>
              </SimpleGrid>
            </Stack>
          </SimpleGrid>

          <SimpleGrid gap={8} columns={{base:1, sm:1, md:1, lg:1}} justifyItems={"center"} alignItems={"center"} padding={'2%'} justifyContent={'space-around'} margin={'auto'}>
            <Box margin={'auto'} width={'68%'} >
              <Image margin={'auto'} src={fundamenta} />
            </Box>

            <Stack style={contentStyle} gap={4} width={'90%'} margin={'auto'} textAlign={'center'}>
              <Heading fontFamily={'roboto'} fontWeight={500} fontSize={24}>Fundamental Analysis</Heading>
              <Text justifyContent={'center'}>
              Discover the essentials of Fundamental Analysis in stock exchange training – demystifying stock market insights. Gain the skills to evaluate companies and make savvy investment choices with confidence.
              </Text>
              <SimpleGrid margin={'auto'} justifyContent={'center'} columns={{base:1, sm:1, md:1, lg:2}} gap={1} >
                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Portfolio Management</Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Market Psychology </Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Company Analysis</Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Investment Strategies</Text>
                </Flex>
              </SimpleGrid>
            </Stack>
          </SimpleGrid>

          <SimpleGrid gap={8} columns={{base:1, sm:1, md:1, lg:1}} justifyItems={"center"} alignItems={"center"} padding={'2%'} justifyContent={'space-around'} margin={'auto'}>
            <Box margin={'auto'} width={'75%'} >
              <Image margin={'auto'} src={technical} />
            </Box>

            <Stack style={contentStyle} gap={4} width={'90%'} margin={'auto'} textAlign={'center'}>
              <Heading fontFamily={'roboto'} fontWeight={500} fontSize={24}>Technical Analysis</Heading>
              <Text justifyContent={'center'}>
              Explore the world of Technical Analysis through our courses regarding stock market, where we break down complex market trends and charts into simple, actionable insights. Acquire the skills to make informed trading decisions confidently.
              </Text>
              <SimpleGrid margin={'auto'} justifyContent={'center'} columns={{base:1, sm:1, md:1, lg:2}} gap={1} >
                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Portfolio Management</Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Market Psychology </Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Company Analysis</Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Investment Strategies</Text>
                </Flex>
              </SimpleGrid>
            </Stack>
          </SimpleGrid>

          <SimpleGrid gap={8} columns={{base:1, sm:1, md:1, lg:1}} justifyItems={"center"} alignItems={"center"} padding={'2%'} justifyContent={'space-around'} margin={'auto'}>
            <Box margin={'auto'} width={'80%'} >
              <Image margin={'auto'} src={derivative} />
            </Box>

            <Stack style={contentStyle} gap={4} width={'90%'} margin={'auto'} textAlign={'center'}>
              <Heading fontFamily={'roboto'} fontWeight={500} fontSize={24}>Derivatives</Heading>
              <Text justifyContent={'center'}>
              Begin your exploration of Derivatives with our online trading courses, where we simplify complex financial instruments. Develop expertise in risk management and trading strategies to gain a thorough grasp of the market.
              </Text>
              <SimpleGrid margin={'auto'} justifyContent={'center'} columns={{base:1, sm:1, md:1, lg:2}} gap={1} >
                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Portfolio Management</Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Market Psychology </Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Company Analysis</Text>
                </Flex>

                <Flex gap={3} alignItems={"center"}>
                  <FaBookOpen />
                  <Text>Investment Strategies</Text>
                </Flex>
              </SimpleGrid>
            </Stack>
          </SimpleGrid>

          </Carousel>
        </Stack>
        </Box>

    </>
  )
}

export default Slider