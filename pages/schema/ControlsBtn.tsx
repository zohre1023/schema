import { Connect } from "@/components/icons";
import { SearchIcon, AddIcon } from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";
import React from "react";

const ControlBtn = () => {
  return (
    <Box p={5}>
      <Box>
        <Button
          w="40px"
          colorScheme="teal"
          variant="ghost"
          boxShadow={"0px 10px 10px rgba(141, 143, 166, 0.2)"}
        >
          <SearchIcon />
        </Button>
      </Box>
      <Box mt={3}>
        <Button
          w="40px"
          backgroundColor="#232F6A"
          color="white"
          variant="solid"
          boxShadow={"0px 10px 10px rgba(141, 143, 166, 0.2)"}
        >
          <AddIcon />
        </Button>
      </Box>
      <Box mt={3}>
        <Button
          w="40px"
          backgroundColor="#232F6A"
          color="white"
          variant="solid"
          boxShadow={"0px 10px 10px rgba(141, 143, 166, 0.2)"}
        >
          <Connect />
        </Button>
      </Box>
    </Box>
  );
};

export default ControlBtn;
