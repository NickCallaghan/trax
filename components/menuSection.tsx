import { Box, List } from "@chakra-ui/react";
import React from "react";

const MenuSection: React.FC = ({ children }) => {
  return (
    <Box paddingY="15px">
      <List spacing={2}>{children}</List>
    </Box>
  );
};

export default MenuSection;
