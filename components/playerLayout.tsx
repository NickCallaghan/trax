import { Box } from "@chakra-ui/layout";
import Sidebar from "../components/sidebar";
import Player from "../components/player";

const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box
        position="absolute"
        top="0"
        width="250px"
        height="calc(100vh - 100px)"
      >
        <Sidebar />
      </Box>
      <Box marginLeft="250px" marginBottom="100px" backgroundColor="grey">
        {children}
      </Box>
      <Box
        position="absolute"
        bottom="0"
        left="0"
        backgroundColor="pink"
        height="100px"
        width="100vw"
      >
        <Player />
      </Box>
    </Box>
  );
};

export default PlayerLayout;
