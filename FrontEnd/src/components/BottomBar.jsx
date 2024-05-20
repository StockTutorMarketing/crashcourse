import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState,useEffect} from "react";
import AllTutors from "../Data/AllTutorsForm.png";
import { PhoneIcon } from "@chakra-ui/icons";
import "./BottomBar.css";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { cashfree } from "../cashfree/utils";
import { useNavigate } from "react-router-dom";

const BottomBar = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sessionId, setSessionId] = useState("")
  let uri = "http://localhost:4500/api/v1/payment"

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
        price:399
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
      handlePayment()
    }
  }, [sessionId])

  const handlePayment = () => {
    let checkoutOptions = {
      paymentSessionId: sessionId,
      returnUrl: `http://localhost:4500/api/v1/status/{order_id}`,
    }
    cashfree.checkout(checkoutOptions).then(function (result) {
      if (result.error) {
        alert(result.error.message)
      }
      if (result.redirect) {
        console.log(result);
        console.log("Redirection")
      }
    });

  }



  return (
    <div style={{zIndex:"5"}}>
      <Box
        className="gradient_anim_btn"
        position="fixed"
        bottom={0}
        height={{ base: 70, sm: 110, md: "120", lg: "130" }}
        padding={{ base: 2, sm: 5, md: 5, lg: 5 }}
      >
        <Box
          width={{ base: "100%", sm: "100%", md: "90%", lg: "84%" }}
          margin={"auto"}
          mt={{ sm: 0, md: 0, lg: 0 }}
          // border={'2px solid red'}
           alignItems={"center"}
              justifyContent={"center"}
        >
          <Flex>
            <Box
              width={"25%"}
              height={"auto"}
              textAlign={"center"}
              alignItems={"center"}
              justifyContent={"center"}
              display={{ base: "none", sm: "block", md: "block", lg: "block" }}
            >
              <Image
                margin={"auto"}
                mt={{ sm: 0, md: 0, lg: -4 }}
                width={{ sm: "100%", md: "100%", lg: "84%" }}
                src={AllTutors}
              />
            </Box>
            <Box
              width={{ base: "100%" }}
            >
              <Flex justifyContent={"space-between"}>
                <Stack
                >
                  <Stack
                  
                    gap={{ base: 0, sm: 1, md: 1, lg: 0 }}
                    width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
                    marginTop={"1"}
                  >
                    <Text
                      color={"rgb(255,200,69)"}
                      fontSize={32}
                      fontWeight={640}
                    >
                      <Flex align={"center"} gap={{base:1, sm:2, md:3, lg:3}}>
                      <Flex alignItems={'center'} fontSize={{ base: 16, sm: 18, md: 20, lg: 26 }}><FaIndianRupeeSign /> 399{" "}</Flex>
                        
                        <Text fontSize={{ base: 12, sm: 14, md: 16, lg: 20 }}>
                          <s
                            style={{
                              color: "silver",
                              fontWeight: 400,
                            }}
                          >
                            2999
                          </s>
                        </Text>
                      </Flex>
                    </Text>
                    <Text
                      fontSize={{ base: 12, sm: 14, md: 16, lg: 16 }}
                      fontWeight={400}
                      color={"whitesmoke"}
                    >
                      2nd June, 4:00 PM - 7:00 PM
                    </Text>
                  </Stack>
                </Stack>

                <Box
                  alignItems={"center"}
                >
                  <Button
                    width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
                    size={{ base: "md", sm: "md", md: "md", lg: "lg" }}
                    borderRadius={20}
                    bg={"rgb(255,200,69)"}
                    color={"black"}
                    fontSize={{ base: 8, sm: 12, md: 16, lg: 24 }}
                    fontWeight={640}
                    mt={{base:"4%", sm:"15%", md:"15%", lg:"15%"}}
                    onClick={onOpen}
                  >
                    Book Your Seat Now
                  </Button>

                  <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalBody>
                        <Box className="modalformbox">
                          <Box>
                            <Image src={AllTutors} />
                          </Box>
                          <Flex className="formbox-flex">
                            <FormControl id="fname" isRequired>
                              <FormLabel>Name</FormLabel>
                              <Input
                                placeholder="Full name"
                                value={fname}
                                type="text"
                                onChange={(e) => setFname(e.target.value)}
                              />
                            </FormControl>
                          </Flex>

                          <FormControl id="email" isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input
                              placeholder="Email address"
                              value={email}
                              type="email"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </FormControl>

                          <FormControl id="phone" isRequired>
                            <FormLabel>Contact</FormLabel>
                            <InputGroup>
                              <InputLeftElement pointerEvents="none">
                                <PhoneIcon color="gray.400" />
                              </InputLeftElement>
                              <Input
                                type="number"
                                placeholder="Phone number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                              />
                            </InputGroup>
                          </FormControl>

                          <Box margin={"auto"} mt={4}>
                            <Button
                              //   width={"100%"}
                              bgColor={"#EBB913"}
                              onClick={navigate("/payment")}
                              color={"rgb(5,8,69)"}
                              _hover={{
                                color: "#EBB913",
                                bgColor: "rgb(5,8,69)",
                                fontsize: 40,
                              }}
                            >
                              Book Your Seat Now
                            </Button>
                          </Box>
                        </Box>
                      </ModalBody>
                    </ModalContent>
                  </Modal>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default BottomBar;
