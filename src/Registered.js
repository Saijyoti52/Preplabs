import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  HStack,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { FiEye } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";

export default function Registered({ event }) {
  return (
    <Box
      border="2px"
      borderColor="gray.200"
      width={{ base: "100%", md: "80%" }}
    >
      <Flex mb="1%" mt="1%">
        <Box>
          <Image
            src="https://www.cloudcomputing-news.net/wp-content/uploads/sites/2/2022/02/vmware-logo.png"
            alt="VMWare Logo"
            width={{ base: "110px", md: "170px" }}
            height={{ base: "80px", md: "130px" }}
          ></Image>
        </Box>
        <Box width="100%" ml={{ base: "2%", md: "5%" }}>
          <Text
            fontSize={{ base: "md", md: "3xl" }}
            fontWeight="extrabold"
            textAlign="left"
            width="100%"
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
              width="35%"
              textAlign="left"
              fontSize={{ base: "sm", md: "md" }}
              fontWeight="bold"
            >
              #Engineer
            </Text>
            <Text
              width="65%"
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
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          mr={{ base: "1", md: "6" }}
          mb="1%"
        >
          <Box display="flex" justifyContent="end">
            <FaCheckCircle color="#0BB805" />
          </Box>
          <Box>
            <Button
              style={{
                backgroundColor:
                  event.status === "Active" ? "#0BB805" : "orange",
              }}
              borderRadius="full"
              color="white"
              px={{ base: "4", md: "8" }}
              size={{ base: "xs", sm: "sm", md: "md" }}
              transition={"all ease-in-out 100ms"}
              _hover={{
                transform: "scale(1.05)",
                bgColor: "#0BB805",
                color: "white",
              }}
            >
              Active
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
