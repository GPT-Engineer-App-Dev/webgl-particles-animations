import { Box, FormControl, FormLabel, Select, Input } from "@chakra-ui/react";

const ControlPanel = ({ animationType, setAnimationType, color, setColor }) => {
  return (
    <Box p={4} borderWidth={1} borderRadius="lg" boxShadow="md">
      <FormControl mb={4}>
        <FormLabel>Animation Type</FormLabel>
        <Select value={animationType} onChange={(e) => setAnimationType(e.target.value)}>
          <option value="particles">Particles</option>
          <option value="triangles">Triangles</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Color</FormLabel>
        <Input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      </FormControl>
    </Box>
  );
};

export default ControlPanel;