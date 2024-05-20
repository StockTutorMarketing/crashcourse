import {
  Box,
  Flex,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import GradeIcon from "@mui/icons-material/Grade";
import User4 from "../Data/user4.png";
import User5 from "../Data/user5.png";
import User2 from "../Data/user2.png";
import StarHalfIcon from '@mui/icons-material/StarHalf';

interface Props {
  children: React.ReactNode;
}

const Testimonial = (props: Props) => {
  const { children } = props;

  return <Box>{children}</Box>;
};

const TestimonialContent = (props: Props) => {
  const { children } = props;

  return (
    <Stack
      fontFamily={'roboto'}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};


const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"} >
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600} fontSize={"17px"} color={'#171945'} transform={'scale(1.025, 1)'}>
          {name}
        </Text>
        <Text
          transform={'scale(1.05, 1)'}
          fontFamily={"roboto"}
          fontWeight={400}
          fontSize={"13px"}
          color={'#171945'}
        >
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Testimonials() {
  return (
    <Box>
      <Container maxW={'6xl'} py={20} as={Stack} spacing={20}>
        <Stack spacing={0} align={"center"} padding={'12px 0px 16px 0px'}>
          <Text color={'#171945'}>2000+ Happy Traders</Text>
          <Text fontFamily={'roboto'} color={'#171945'} fontSize={{base:24, sm:28, md:32, lg:32}} fontWeight={500} paddingX={{base:12}} textAlign={'center'} >
            Don’t just take our words
          </Text>
        </Stack>

        <Stack
          direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
          spacing={{ base: 8, sm:10, md: 12, lg: 16 }}
        >
          <Testimonial>
            <TestimonialContent>
              <Flex>
                <GradeIcon style={{ color: "rgb(37,99,235)" }} />
                <GradeIcon style={{ color: "rgb(37,99,235)" }} />
                <GradeIcon style={{ color: "rgb(37,99,235)" }} />
                <GradeIcon style={{ color: "rgb(37,99,235)" }} />
                <GradeIcon style={{ color: "rgb(37,99,235)" }} />
              </Flex>
              <Text color={'RGB(72 73 76)'} textAlign={'center'}>
                An excellent choice for informed investment decisions.
                Exceptional technical analysis training, practical approach, and
                valuable career support
              </Text>
            </TestimonialContent>
            <TestimonialAvatar
              
              src={User5}
              name={"Shreya Arora"}
              title={"1st Batch"}
            />
          </Testimonial>

          <Testimonial>
            <TestimonialContent>
              <Flex>
                <GradeIcon style={{ color: "rgb(37,99,235)" }} />
                <GradeIcon style={{ color: "rgb(37,99,235)" }} />
                <GradeIcon style={{ color: "rgb(37,99,235)" }} />
                <GradeIcon style={{ color: "rgb(37,99,235)" }} />
                <StarHalfIcon style={{ color: "rgb(37,99,235)" }} />
              </Flex>
              <Text color={'RGB(72 73 76)'} textAlign={'center'}>
                Comprehensive learning, practical approach, and outstanding
                career support. Boosted my confidence for a rewarding financial
                career.
              </Text>
            </TestimonialContent>
            <TestimonialAvatar
              
              src={User2}
              name={"Rahul Malik"}
              title={"2nd Batch"}
            />
          </Testimonial>

          <Testimonial>
            <TestimonialContent>
              <Flex>
                <GradeIcon style={{ color: "rgb(37,99,235)" }} />
                <GradeIcon style={{ color: "rgb(37,99,235)" }} />
                <GradeIcon style={{ color: "rgb(37,99,235)" }} />
                <GradeIcon style={{ color: "rgb(37,99,235)" }} />
                <GradeIcon style={{ color: "rgb(37,99,235)" }} />
              </Flex>
              <Text color={'RGB(72 73 76)'} textAlign={'center'}>
                Life-changing stock market course with practical learning and
                excellent career support. Highly recommended for aspiring
                traders. Super happy.
              </Text>
            </TestimonialContent>
            <TestimonialAvatar
              src={User4}
              name={"Drishti Sahni"}
              title={"3rd Batch"}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}

