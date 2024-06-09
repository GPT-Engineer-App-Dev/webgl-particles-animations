import { useState } from "react";
import { Container, Flex, Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import AnimationCanvas from "../components/AnimationCanvas";
import ControlPanel from "../components/ControlPanel";

const Index = () => {
  const [animationType, setAnimationType] = useState("particles");
  const [color, setColor] = useState("#ffffff");

  return (
    <Box height="100vh">
      <NavBar />
      <Container maxW="container.xl" height="calc(100% - 64px)" py={4}>
        <Flex height="100%">
          <Box flex="1" height="100%">
            <AnimationCanvas animationType={animationType} color={color} />
          </Box>
          <Box width="300px" ml={4}>
            <ControlPanel animationType={animationType} setAnimationType={setAnimationType} color={color} setColor={setColor} />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Index;