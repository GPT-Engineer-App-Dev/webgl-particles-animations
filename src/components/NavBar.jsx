import { Box, Flex, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "gray.900");

  return (
    <Box bg={bg} px={4} boxShadow="md">
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>WebGL Animations</Box>
        <Flex alignItems={"center"}>
          <Button as={Link} to="/" variant={"ghost"} mr={4}>
            Home
          </Button>
          <Button onClick={toggleColorMode}>
            Toggle {useColorModeValue("Dark", "Light")}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;