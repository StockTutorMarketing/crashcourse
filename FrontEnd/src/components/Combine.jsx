import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import "./Combine.css";
import { FaCalendar } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import textbg from "../Data/textbg.webp";
import { useNavigate } from "react-router-dom";
import promo from "../Data/promo.mp4";
import { useState } from "react";
import crashtext from "../Data/animatedtext.gif";
import { motion } from "framer-motion";
import logo from "../Data/logo.png"

const Combine = () => {
  const text = "Take Charge of Your Future with StockTutor's 3 Hours Crash Course".split(" ");

  const navigate = useNavigate();
  const [muted, setMuted] = useState(true);

  function handleBook() {
    navigate("/payment");
  }

  const toggleMute = () => {
    setMuted(!muted);
  };

  return (
    <>
      <Box bgGradient="linear(to-r, #131543, #525368, #131543)" pb={{base:2, sm:4, md:16, lg:16}}>
        <Stack p={12} gap={{ base: 4, sm: 8, md: 8, lg: 12 }}>
          <SimpleGrid
            columns={{ base: 1, sm: 1, md: 1, lg: 2 }}
            justifyContent={"space-around"}
            gap={{ base: 5, sm: 5, md: 10, lg: 0 }}
          >
            {/* *************************************Left Portion************************************************* */}
            {/* ************************************************************************************************** */}

            <Stack
              width={{ base: "100%", sm: "100%", md: "80%", lg: "70%" }}
              gap={{ base: 4, sm: 8, md: 8, lg: 12 }}
              margin={"auto"}
            >
            <Box justifyContent={'center'} display={{base:'block', sm:'block', md:'none', lg:'none'}}>
            <Flex gap={{base:2, sm:2, md:0, lg:0}} justifyContent={'center'} alignItems={'center'}>
              <Image width={'22%'} height={'100%'} src={logo} alt="logo"/>
              <Box className="topText" width={{ base: "100%", sm: "100%", md: "100%", lg: "160%" }}>
                {/* <Image src={crashtext} alt="crashcoursetext"/> */}
                {text.map((el, i) => (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.50,
                      delay: i / 10,
                    }}
                    key={i}
                  >
                    {el}{" "}
                  </motion.span>
                ))}
              </Box>
            </Flex> 
            </Box>

              <Box display={{base:'none', sm:'none', md:'block', lg:'block'}}>

              <Box alignItems={'center'} gap={5} display={{base:'none', sm:'none', md:'flex', lg:'flex'}} width={{ base: "100%", sm: "100%", md: "100%", lg: "110%" }}>
              <Image width={'20%'} height={'100%'} src={logo} alt="logo"/>
                <Image src={crashtext} alt="crashcoursetext"/>
              </Box>
              </Box>

              <Box>
                <Text
                  textAlign={{
                    base: "center",
                    sm: "center",
                    md: "center",
                    lg: "justify",
                  }}
                  color={"whitesmoke"}
                  fontSize={{ base: 16, sm: 16, md: 16, lg: 20 }}
                >
                  Discover the ins and outs of stock trading in the most
                  simplest and user-friendly way. Elevate your investment
                  knowledge with StockTutor's easy-to-follow guidance.
                </Text>
              </Box>

              <SimpleGrid
                fontSize={{ base: 12, sm: 12, md: 16, lg: 16 }}
                columns={{ base: 2, sm: 2, md: 2, lg: 2 }}
                gap={{ base: 4, sm: 8, md: 8, lg: 12 }}
                margin={"auto"}
                justifyContent={"space-between"}
                width="100%"
              >
                <Flex
                  className="gradient_anim_btn_combine"
                  borderRadius={10}
                  padding={{
                    base: "4px 8px",
                    sm: "4px 8px",
                    md: "8px 12px",
                    lg: "8px 12px",
                  }}
                  variant="outline"
                  gap={2}
                  justifyItems={"center"}
                  alignItems={"center"}
                >
                  <FaCalendar />
                  <Box>2nd June, 2024</Box>
                </Flex>

                <Flex
                  className="gradient_anim_btn_combine"
                  borderRadius={10}
                  padding={"8px 12px"}
                  variant="outline"
                  gap={2}
                  alignItems={"center"}
                  width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
                >
                  <FaClock />
                  <Box>4:00 PM - 7:00 PM</Box>
                </Flex>
              </SimpleGrid>

              <Button
                onClick={handleBook}
                className="button-50"
                role="button"
                padding={{ base: 4, sm: 4, md: 8, lg: 8 }}
                borderRadius={20}
                bg={"#F5C114"}
                fontWeight={800}
                fontSize={{ base: 12, sm: 12, md: 16, lg: 20 }}
              >
                Book your seat now at ₹399 only
              </Button>
            </Stack>

            {/* ************************************* IFrame ************************************************* */}
            {/* ************************************************************************************** */}
            <Box
              width={{ base: "100%", sm: "100%", md: "70%", lg: "70%" }}
              margin={"auto"}
            >
              <Box>
                <video
                  autoPlay
                  loop
                  muted={muted}
                  onClick={toggleMute}
                  style={{
                    objectFit: "cover",
                    borderRadius: "20px 20px 0px 0px",
                  }}
                >
                  <source src={promo} type="video/mp4" />
                </video>
              </Box>
              <Box
                borderRadius={"0px 0px 20px 20px"}
                bgImage={textbg}
              >
                <Grid
                  padding={{ base: 4, sm: 4, md: 8, lg: 12 }}
                  fontWeight={600}
                  fontSize={{ base: 14, sm: 16, md: 20, lg: 20 }}
                  gap={2}
                >
                  <Flex alignItems={"center"} gap={4}>
                    <Box>
                      <FaCircleCheck />
                    </Box>
                    <Box>Knowing Institutional Activities</Box>
                  </Flex>

                  <Flex alignItems={"center"} gap={4}>
                    <Box>
                      <FaCircleCheck />
                    </Box>
                    <Box>Market Research & Psychology</Box>
                  </Flex>

                  <Flex alignItems={"center"} gap={4}>
                    <Box
                      style={{ alignItem: "center", justifyItems: "center" }}
                    >
                      {" "}
                      <FaCircleCheck />
                    </Box>
                    <Box>Selecting Right Stocks</Box>
                  </Flex>

                  <Flex alignItems={"center"} gap={4}>
                    <Box>
                      <FaCircleCheck />
                    </Box>
                    <Box>Trading Strategies</Box>
                  </Flex>
                </Grid>
              </Box>
            </Box>
          </SimpleGrid>

          {/* ************************************************* Bottom Section ************************************************ */}

          <SimpleGrid
            columns={{ base: 2, sm: 2, md: 2, lg: 4 }}
            className="bottomtab"
            margin={"auto"}
            border={"1px solid black"}
            width={{ base: "100%", sm: "100%", md: "70%", lg: "70%" }}
            justifyContent={"space-between"}
            padding={4}
            borderRadius={20}
            bgColor={"#D7AA3B"}
            gap={{ base: 2, sm: 2, md: 2, lg: 4 }}
          >
            <Box alignContent={"center"}>
              <Heading
                fontSize={{ base: "16px", sm: "20px", md: "20px", lg: "24px" }}
              >
                12k+
              </Heading>
              <Text
                fontSize={{ base: "12px", sm: "14px", md: "16px", lg: "20px" }}
              >
                Students Enrolled
              </Text>
            </Box>

            <Box alignContent={"center"}>
              <Heading
                fontSize={{ base: "16px", sm: "20px", md: "20px", lg: "24px" }}
              >
                25k+
              </Heading>
              <Text
                fontSize={{ base: "12px", sm: "14px", md: "16px", lg: "20px" }}
              >
                Trading Community
              </Text>
            </Box>

            <Box alignContent={"center"}>
              <Heading
                fontSize={{ base: "16px", sm: "20px", md: "20px", lg: "24px" }}
              >
                5
              </Heading>
              <Text
                fontSize={{ base: "12px", sm: "14px", md: "16px", lg: "20px" }}
              >
                NISM Certified Tutors
              </Text>
            </Box>

            <Box alignContent={"center"}>
              <Heading
                fontSize={{ base: "16px", sm: "20px", md: "20px", lg: "24px" }}
              >
                10+
              </Heading>
              <Text
                fontSize={{ base: "12px", sm: "14px", md: "16px", lg: "20px" }}
              >
                Certified Courses
              </Text>
            </Box>
          </SimpleGrid>
        </Stack>
      </Box>
    </>
  );
};

export default Combine;
