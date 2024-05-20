import React from "react";
import ImgSource from "../Data/WhatOffer.png";
import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import SchoolIcon from "@mui/icons-material/School";
import VideocamIcon from '@mui/icons-material/Videocam';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { IoBarChartSharp } from "react-icons/io5";
import { LuBrainCircuit } from "react-icons/lu";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { BsCameraReels } from "react-icons/bs";





// import styled from "styled-components";
// import { keyframes } from "styled-components";


const WhatOffer = () => {
  return (
    <>
      <Box bgImage={ImgSource} maxH={"100%"} paddingY={8}>
        <Center>
          <Heading fontSize={{base:24, sm:28, md:32, lg:32}} style={{ fontFamily: "roboto", color:'#171945' }} fontWeight={500}>What we offer</Heading>
        </Center>
        <Center>
          <Text fontSize={{base:17, sm:17, md:18, lg:20}} color={"gray.600"} paddingX={{base:12, sm:12, md:16,lg:20}} textAlign={'center'}>
            One complete solution for all your financial problems
          </Text>
        </Center>
        <SimpleGrid
          columns={{base:1, sm:1, md:2, lg:3}}
          spacing={2}
          padding={8}
          paddingTop={10}
          justifyItems={"center"}
        >
          
          <a href="https://stocktutor.com/Masterclass">
          <Stack
            padding={5}
            width={300}
            height={250}
            gap={"20px"}
            alignItems={"center"}
            color={'#171945'}
            _hover={{
              cursor: 'pointer',
              borderRadius: "20px",
              bgColor: "#171945",
              opacity: 1,
              color: "white",
              transition: ".5s",
              boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
              
            }}
          >

            <LiveTvIcon style={{ fontSize: 50, alignItems: "center" }} />
            <Heading fontFamily={"roboto"} fontSize={28} fontWeight={500}>
              Live Masterclass
            </Heading>
            <Text align={"center"}>
              {" "}
              Elevate your trading expertise with real-time insights and expert
              guidance
            </Text>
          </Stack>
          </a>
          <a href="https://stocktutor.com/virtual-trading">
          <Stack
            padding={5}
            width={300}
            height={250}
            gap={"20px"}
            alignItems={"center"}
            color={'#171945'}
            _hover={{
              cursor: 'pointer',
              borderRadius: "20px",
              // border: '2px solid red',
              bgColor: "#171945",
              opacity: 1,
              color: "white",
              transition: ".5s",
              boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'
            }}
          >
            <IoBarChartSharp style={{ fontSize: 42, alignItems: "center" }} />
            <Heading fontFamily={"roboto"} fontSize={28} fontWeight={500}>
              Virtual Trading
            </Heading>
            <Text align={"center"}>
              {" "}
              Learn, practice, and refine your stock trading skills in a
              risk-free virtual environment
            </Text>
          </Stack>
          </a>
          <a href="https://stocktutor.com/AllCourses">
          <Stack
            padding={5}
            width={300}
            height={250}
            gap={"20px"}
            alignItems={"center"}
            color={'#171945'}
            _hover={{
              cursor: 'pointer',
              borderRadius: "20px",
              // border: '2px solid red',
              bgColor: "#171945",
              opacity: 1,
              color: "white",
              transition: ".5s",
              boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'
            }}
          >
            <BsCameraReels style={{ fontSize: 42, alignItems: "center" }} />
            <Heading fontFamily={"roboto"} fontSize={28} fontWeight={500}>
              Recorded Course
            </Heading>
            <Text align={"center"}>
              {" "}
              Access expert trading knowledge anytime, anywhere with our
              convenient on-demand sessions
            </Text>
          </Stack>
          </a>
          <a href="https://stocktutor.com/virtual-trading">
          <Stack
            padding={5}
            width={300}
            height={250}
            gap={"20px"}
            alignItems={"center"}
            color={'#171945'}
            _hover={{
              cursor: 'pointer',
              borderRadius: "20px",
              // border: '2px solid red',
              bgColor: "#171945",
              opacity: 1,
              color: "white",
              transition: ".5s",
              boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'
            }}
          >
            <PsychologyIcon style={{ fontSize: 50, alignItems: "center" }} />
            <Heading fontFamily={"roboto"} fontSize={28} fontWeight={500}>
              Practical Learning
            </Heading>
            <Text align={"center"}>
              {" "}
              Gain hands-on trading experience and real-world skills for success in the stock market
            </Text>
          </Stack>
          </a>
          <a href="https://stocktutor.com/Blog">
          <Stack
            padding={5}
            width={300}
            height={250}
            gap={"20px"}
            alignItems={"center"}
            color={'#171945'}
            _hover={{
              cursor: 'pointer',
              borderRadius: "20px",
              // border: '2px solid red',
              bgColor: "#171945",
              opacity: 1,
              color: "white",
              transition: ".5s",
              boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'
            }}
          >
            <LuBrainCircuit style={{ fontSize: 50, alignItems: "center" }} />
            <Heading fontFamily={"roboto"} fontSize={28} fontWeight={500}>
            Trading Strategies
            </Heading>
            <Text align={"center"}>
              {" "}
              Master the art of trading with proven tactics and expert insights tailored for success in the stock market
            </Text>
          </Stack>
          </a>
          <a href="https://stocktutor.com/Masterclass">
          <Stack
            padding={5}
            width={300}
            height={250}
            gap={"20px"}
            alignItems={"center"}
            color={'#171945'}
            _hover={{
              cursor: 'pointer',
              borderRadius: "20px",
              // border: '2px solid red',
              bgColor: "#171945",
              opacity: 1,
              color: "white",
              transition: ".5s",
              boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'
            }}
          >
            <HiOutlineAcademicCap style={{ fontSize: 50, alignItems: "center" }} />
            <Heading fontFamily={"roboto"} fontSize={28} fontWeight={500}>
              Career Support
            </Heading>
            <Text align={"center"}>
              {" "}
              Unlock your potential in the financial world with tailored guidance and industry insights
            </Text>
          </Stack>
          </a>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default WhatOffer;
