import { Box, Flex, Text } from "@chakra-ui/react";
import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import { ADD_PROPERTY } from "./const";
import styled from "styled-components";
import { IDataProps, Item } from "./schemaTypes";

function CustomNode({ data }: IDataProps) {
  const color = data?.type === "source" ? "#4DC7B5" : "#F27281";
  const handleType = data?.type === "source" ? "source" : "target";

  const HandleStyled = styled(Handle)`
    background-color: ${color};
    right: ${handleType === "source" ? "-7px" : ""};
    left: ${handleType === "source" ? "" : "-6px"};
  `;

  return (
    <Box
      p={0}
      color="#414141"
      border={data?.type === "source" ? `1px solid ${color}` : "none"}
      borderTop={`8px solid ${color}`}
      bg="white"
      fontSize="Rajdhani"
      boxShadow="0px 4px 4px rgba(111, 111, 111, 0.3)"
      fontFamily="Rajdhani"
    >
      <Box boxShadow="0px 4px 4px rgba(0, 0, 0, 0.1)" px={5} py={2}>
        <Text fontSize="md" fontWeight={600}>
          {data?.title}
        </Text>
      </Box>
      <Box bg="#F2F2F2">
        {data?.items?.map((item: Item) => (
          <Flex
            px={5}
            mb={2}
            key={item?.id}
            position="relative"
            backgroundImage={
              data?.type === "source"
                ? "linear-gradient(90.84deg, rgba(77, 199, 181, 0.7) 15.25%, rgba(77, 199, 181, 0.2) 88.17%)"
                : "none"
            }
          >
            <Text fontSize="md" fontWeight={500}>
              {item?.label}
            </Text>

            {Object.keys(data.selects).map((handleId) => (
              <HandleStyled
                key={handleId}
                type={handleType}
                position={
                  data?.type === "source" ? Position.Right : Position.Left
                }
              />
            ))}
          </Flex>
        ))}
      </Box>
      <Box px={5} py={2}>
        <Text fontSize="md" fontWeight={500}>
          {ADD_PROPERTY}
        </Text>
      </Box>
    </Box>
  );
}

export default memo(CustomNode);
