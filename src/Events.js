import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  VStack,
  Text,
  Spacer,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Registered from "./Registered";
import Saved from "./Saved";
import Myevents from "./Myevents";

export default function Events() {
  //this to store incoming data of events
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:8000/events");
        const data = await res.json();
        setEvents(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <Box>
      <Tabs variant="enclosed">
        <Box display="flex" justifyContent="center">
          <TabList width={{ base: "100%", md: "80%" }}>
            <Tab>
              <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
                Registered
              </Text>
            </Tab>
            <Spacer />
            <Tab>
              <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
                Saved
              </Text>
            </Tab>
            <Spacer />
            <Tab>
              <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
                Myevents
              </Text>
            </Tab>
          </TabList>
        </Box>

        <TabPanels>
          <TabPanel>
            <VStack spacing={7}>
              {events.map((event) => (
                <Registered key={event.id} event={event} />
              ))}
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack spacing={7}>
              {events.map((event) => (
                <Saved key={event.id} event={event} />
              ))}
            </VStack>
          </TabPanel>
          <TabPanel>
            {" "}
            <VStack spacing={7}>
              {events.map((event) => (
                <Myevents key={event.id} event={event} />
              ))}
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
