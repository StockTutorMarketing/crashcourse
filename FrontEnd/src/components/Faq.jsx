import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  AccordionIcon,
  Heading,
  Center,
} from '@chakra-ui/react'


export default function Faq() {
  return (

    <>
        <Box 
        paddingY={24} 
        padding={'80px 0px 0px 0px'}
        fontFamily={'roboto'}
        mb={20}
        >
        <Center paddingBottom={20}>
        <Heading 
        color={'#171945'}
        fontFamily={'roboto'} 
        fontWeight={500} 
        fontSize={{base:24, sm:28, md:32, lg:32}}
        >
        FAQs! Need help?
        </Heading>
        </Center>
        <Accordion defaultIndex={[0]} allowToggle paddingX={{base:1, sm:16, md:20, lg:36}}>
            <AccordionItem>
                <Heading>
                <AccordionButton paddingY={6}>
                    <Box as="span" fontSize={18} color={'#3a0ca3'} fontWeight={500} flex='1' textAlign='left'>
                    1. Do I need any trading expirience for this crash course?
                    </Box>
                    <AccordionIcon/>
                </AccordionButton>
                </Heading>
                <AccordionPanel color={'#495057'} pb={8} pl={8}>
                No, this course is specially designed for beginners.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <Heading>
                <AccordionButton paddingY={6}>
                    <Box as="span" fontSize={18} color={'#3a0ca3'} fontWeight={500} flex='1' textAlign='left'>
                    2. What is the duration of this crash course?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </Heading>
                <AccordionPanel color={'#495057'} pb={8} pl={8}>
                The duration of this crash course will be approximately 3 hours.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <Heading>
                <AccordionButton paddingY={6}>
                    <Box as="span" fontSize={18} color={'#3a0ca3'} fontWeight={500} flex='1' textAlign='left'>
                    3. Will the tutor be teaching about Trading strategies?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </Heading>
                <AccordionPanel color={'#495057'} pb={8} pl={8}>
                yes, the tutor will teach all the insightful strategies from their trading experience.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <Heading>
                <AccordionButton paddingY={6}>
                    <Box as="span" fontSize={18} color={'#3a0ca3'} fontWeight={500} flex='1' textAlign='left'>
                    4. Will I get any kind of support after the crash course?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </Heading>
                <AccordionPanel color={'#495057'} pb={8} pl={8}>
                Yes, you will be added to our exclusive stocktutor community group for live market updates.
                </AccordionPanel>
            </AccordionItem>

            {/* <AccordionItem>
                <Heading>
                <AccordionButton paddingY={6}>
                    <Box as="span" fontSize={18} color={'#3a0ca3'} fontWeight={500} flex='1' textAlign='left'>
                    5. Is there a support feature for students ?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </Heading>
                <AccordionPanel color={'#495057'} pb={8} pl={8}>
                Yes, we provide a dedicated support system to assist students with any queries or challenges they may encounter during the course, ensuring a smooth learning experience.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <Heading>
                <AccordionButton paddingY={6}>
                    <Box as="span" fontSize={18} color={'#3a0ca3'} fontWeight={500} flex='1' textAlign='left'>
                    6. Do I need prior financial knowledge to enroll ?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </Heading>
                <AccordionPanel color={'#495057'} pb={8} pl={8}>
                No, our course caters to all levels of learners, including those without prior financial knowledge. We start with the fundamentals and progressively build your expertise.
                </AccordionPanel>
            </AccordionItem> */}
        </Accordion>
        </Box>
    </>
  )
}