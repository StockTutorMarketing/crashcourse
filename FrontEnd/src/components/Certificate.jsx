import { Box, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import certificate from "../Data/certificate.PNG";
import './Combine.css'

const Certificate = () => {
  return (
    <>
      <SimpleGrid columns={{base:1, sm:1, md:1, lg:2}} width={"84%"} margin={"auto"} gap={{base:8, sm:12, md:16, lg:24}} py={{base:0, sm:8, md:12, lg:20}} >
        <Box>
          <Image src={certificate} />
        </Box>
        <Stack gap={{base:2, sm:4, md:6, lg:8}} justifyContent={'center'} textAlign={{base:'center', sm:'center', md:'center'}}>      
          <Box>
          <Heading fontFamily={"roboto"} fontSize={{base:24, sm:28, md:32, lg:32}} fontWeight={500} color={'#171945'}>StockTutor</Heading>
          </Box>
          <Box>
            <Text fontFamily={'roboto'} color={'RGB(72 73 76)'} fontSize={{base:15, sm:15, md:16, lg:17}}>
              We're thrilled to extend our heartfelt congratulations on
              completing StockTutor's Financial Mastery Workshop. Your
              dedication and active participation have truly made this workshop
              a success! As a token of appreciation for your commitment to
              expanding your financial knowledge, we're pleased to present each
              of you with a Certificate of Participation. This certificate
              signifies your dedication to enhancing your financial literacy and
              marks the beginning of your journey towards financial empowerment.
              We hope that the insights and strategies shared during the
              workshop will continue to guide you in making informed financial
              decisions and achieving your goals. Once again, congratulations on
              this achievement, and we look forward to seeing your continued
              success in your financial endeavors!
            </Text>
          </Box>
        </Stack>
      </SimpleGrid>
    </>
  );
};

export default Certificate;
