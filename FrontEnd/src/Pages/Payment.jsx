import {
  Box,
  ButtonGroup,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { cashfree } from "../cashfree/utils";
import axios from "axios";
import { PhoneIcon } from "@chakra-ui/icons";
// import { Button } from "antd";
import payment from "../Data/payment.png";

const Payment = () => {
  const toast = useToast();
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sessionId, setSessionId] = useState("");
  let uri = "http://localhost:4500/api/v1/payment";

  const handleClick = () => {
    if (fname !== "" && email !== "" && phone !== "") {
      if (email !== "") {
        const domain = email.split("@");
        if (domain.length !== 2) {
          return toast({
            title: "Pls Enter Valid Email id.",
            description: `Please Fill Required Details`,
            status: "error",
            duration: 2000,
            isClosable: true,
          });
        }
      }

      if (phone !== "") {
        if (phone.length !== 10) {
          return toast({
            title: "Pls Enter Valid Phone No.",
            description: `Phone Number Should be of Length 10`,
            status: "error",
            duration: 2000,
            isClosable: true,
          });
        }
      }
      const name = `${fname}`;
      const userData = {
        name,
        email,
        phone,
        price: 1,
      };

      axios
        .post(uri, userData)
        .then((res) => {
          setSessionId(res.data.message);
          toast({
            title: "Data submitted successfully",
            status: "success",
            duration: 2500,
            isClosable: true,
          });
          setFname("");
          setEmail("");
          setPhone("");
          console.log(userData);
        })
        .catch((err) => {
          toast({
            title: "Error in Registration.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
          console.log(userData);
          console.log(err);
        });
    } else {
      toast({
        title: "All Fields Required",
        description: `Please Fill Required Details`,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    if (sessionId !== "") {
      handlePayment();
    }
  }, [sessionId]);

  const handlePayment = () => {
    let checkoutOptions = {
      paymentSessionId: sessionId,
      returnUrl: `http://localhost:4500/api/v1/status/{order_id}`,
    };
    cashfree.checkout(checkoutOptions).then(function (result) {
      if (result.error) {
        alert(result.error.message);
      }
      if (result.redirect) {
        console.log(result);
        console.log("Redirection");
      }
    });
  };

  return (
    <Box>
      <Flex
      boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}
        // border={"2px solid silver"}
        borderRadius={20}
        width={{base:'90%', sm:'80%', md:'60%', lg:"60%"}}
        margin={"auto"}
        // height={600}
        mt={{base:4, sm:8, md:8, lg:20}}
        padding={4}
      >
        {/* ******************************************************  ********************************************************** */}
        <Stack width={"100%"}>
          <Stack
            pt={2}
            // margin={"auto"}
            padding={4}
            gap={{ base: 4, sm: 8, md: 8, lg: 4 }}
            // width={"65%"}
          >
            <Box
              //   width={"80%"}
              margin={{ base: "auto", sm: "auto", md: "auto", lg: "unset" }}
            >
              <Text
               fontWeight={600}
                // fontStyle={"italic"}
                fontSize={{ base: 16, sm: 20, md: 22, lg: 22 }}
                textAlign={{
                  base: "center",
                  sm: "center",
                  md: "center",
                  lg: "start",
                }}
              >
                Payment Details
              </Text>
            </Box>

            <FormControl id="fname" isRequired>
              <FormLabel color={"Black"}>Name</FormLabel>
              <Input
                size={{ base: "sm", sm: "md", md: "md", lg: "md" }}
                bg={"white"}
                placeholder="Full name"
                value={fname}
                type="text"
                onChange={(e) => setFname(e.target.value)}
              />
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel color={"Black"}>Email</FormLabel>
              <Input
                size={{ base: "sm", sm: "md", md: "md", lg: "md" }}
                bg={"white"}
                placeholder="Email address"
                value={email}
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl id="phone" isRequired>
              <FormLabel color={"Black"}>Contact</FormLabel>
              <InputGroup size={{ base: "sm", sm: "md", md: "md", lg: "md" }}>
                <InputLeftElement pointerEvents="none">
                  <PhoneIcon color="gray.400" />
                </InputLeftElement>
                <Input
                  bg={"white"}
                  type="number"
                  placeholder="Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </InputGroup>
            </FormControl>

            <Box margin={"auto"} mt={5}>
              <Button
                size={{ base: "sm", sm: "md", md: "md", lg: "md" }}
                width={"100%"}
                bgColor={"#EBB913"}
                onClick={handleClick}
                color={"rgb(5,8,69)"}
                // fontSize={"30px"}
              >
                Book Your Seat Now
              </Button>
            </Box>

            <SimpleGrid display={{base:'block', sm:'block', md:'block', lg:'none'}} gap={2}>
            <Text fontSize={{base:16, sm:16, md:18, lg:18}}>
            Gain a thorough understanding of the principles driving personal finance to effortlessly reach your financial aspirations.
          </Text>
          <Box fontSize={{base:16, sm:16, md:22, lg:22}} fontWeight={600}>
            <Text >
              Date of Masterclass: 2nd June, 2024
            </Text>
            <Text>Time of Masterclass: 4:00 PM - 7:00 PM</Text>
          </Box>
          </SimpleGrid>
          </Stack>
        </Stack>

        {/* **************************************************** Form Details *********************************************************** */}
        <Stack padding={4} display={{base:'none', sm:'none', md:'none', lg:'block'}}>
          <Text fontSize={"22"} fontWeight={600}>
            Personal Finance Masterclass By <br /> Stock Tutor | 2nd June, 2024
          </Text>
          <Image src={payment} alt="crashcourse" />
          <SimpleGrid gap={2}>
            <Text fontSize={"18"}>
            Gain a thorough understanding of the principles driving personal finance to effortlessly reach your financial aspirations.
          </Text>
          <Box>
            <Text fontSize={"22"} fontWeight={600}>
              Date of Masterclass: 2nd June, 2024
            </Text>
            <Text fontSize={"22"} fontWeight={600}>Time of Masterclass: 4:00 PM - 7:00 PM</Text>
          </Box>
          </SimpleGrid>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Payment;
