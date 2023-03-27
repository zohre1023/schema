import { Connect } from "@/components/icons";
import { Button } from "@chakra-ui/react";
import React from "react";
import { getBezierPath } from "reactflow";

const foreignObjectSize = 40;

export default function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = { color: "#4DC7B5" },
  markerEnd,
}: any) {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />
      <foreignObject
        width={foreignObjectSize}
        height={foreignObjectSize}
        x={labelX - foreignObjectSize / 2}
        y={labelY - foreignObjectSize / 2}
        className="edgebutton-foreignobject"
        requiredExtensions="http://www.w3.org/1999/xhtml"
      >
        <div>
          <Button
            w="20px"
            m={0}
            p={0}
            backgroundImage={
              "linear-gradient(90.84deg, rgba(77, 199, 181, 0.7) 15.25%, rgba(77, 199, 181, 0.2) 88.17%)"
            }
            color="white"
            variant="solid"
            boxShadow={"0px 4px 4px rgba(111, 111, 111, 0.3)"}
          >
            <Connect />
          </Button>
        </div>
      </foreignObject>
    </>
  );
}
