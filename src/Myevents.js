import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  HStack,
  Button,
} from "@chakra-ui/react";
import { FiEye } from "react-icons/fi";

export default function Myevents({ event }) {
  return (
    <Box
      border="2px"
      borderColor="gray.200"
      width={{ base: "100%", md: "80%" }}
      pb="1%"
    >
      <Flex mb="1%" mt="1%">
        <Box>
          <Image
            src="https://www.cloudcomputing-news.net/wp-content/uploads/sites/2/2022/02/vmware-logo.png"
            alt="VMWare Logo"
            width={{ base: "100px", md: "170px" }}
            height={{ base: "80px", md: "130px" }}
          ></Image>
        </Box>
        <Box width="100%" ml={{ base: "2%", md: "5%" }}>
          <Text
            fontSize={{ base: "md", md: "3xl" }}
            fontWeight="extrabold"
            textAlign="left"
          >
            {event.title}
          </Text>
          <Text
            textAlign="left"
            fontSize={{ base: "sm", md: "md" }}
            fontWeight="bold"
          >
            {event.compaName}
          </Text>
          <Flex pt="1%">
            <Text
              width="32%"
              textAlign="left"
              fontSize={{ base: "sm", md: "md" }}
              fontWeight="bold"
            >
              #Engineer
            </Text>
            <Text
              width="68%"
              textAlign="left"
              fontSize={{ base: "sm", md: "md" }}
              fontWeight="bold"
            >
              #EngineerStudents
            </Text>
          </Flex>
          <HStack>
            <FiEye />
            <Text
              textAlign="left"
              fontSize={{ base: "sm", md: "md" }}
              fontWeight="bold"
            >
              {event.views}views
            </Text>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}
