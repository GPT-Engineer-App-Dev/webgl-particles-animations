import { Box, Flex, HStack, Link, IconButton, useDisclosure, Stack } from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Links = ["Home", "Particles", "Shapes", "Colors"];

const NavLink = ({ children }) => (
  <Link
    as={RouterLink}
    to={children === "Home" ? "/" : `/${children.toLowerCase()}`}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: "gray.200",
    }}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="gray.100" px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <FaTimes /> : <FaBars />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>WebGL Animations</Box>
            <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}