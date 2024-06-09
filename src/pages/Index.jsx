import { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import AnimationCanvas from "../components/AnimationCanvas";
import ControlPanel from "../components/ControlPanel";

const Index = () => {
  const [animationType, setAnimationType] = useState("particles");
  const [showControlPanel, setShowControlPanel] = useState(false);
  const [color, setColor] = useState("#ffffff");

  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <NavBar />
      <Box flex="1" position="relative">
        <AnimationCanvas animationType={animationType} color={color} />
        <Button
          position="absolute"
          top="10px"
          right="10px"
          onClick={() => setShowControlPanel(!showControlPanel)}
        >
          {showControlPanel ? "Hide Controls" : "Show Controls"}
        </Button>
        {showControlPanel && (
          <Box position="absolute" top="50px" right="10px" width="300px" bg="white" p={4} boxShadow="md">
            <ControlPanel
              animationType={animationType}
              setAnimationType={setAnimationType}
              color={color}
              setColor={setColor}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Index;