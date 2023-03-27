import React, { useCallback } from "react";
import ReactFlow, {
  addEdge,
  Background,
  useNodesState,
  useEdgesState,
  BackgroundProps,
} from "reactflow";
import { ThemeProvider } from "styled-components";
import {
  nodes as initialNodes,
  edges as initialEdges,
} from "./initial-elements";
import CustomNode from "./CustomNode";
import "reactflow/dist/style.css";
import { lightTheme } from "./theme";
import ControlBtn from "./ControlsBtn";
import ButtonEdge from "./ButtonEdge";
import CustomControls from "./CustomControls";
import { IInitialNodes } from "./schemaTypes";
const nodeTypes = {
  custom: CustomNode,
};

const onInit = (reactFlowInstance: any) =>
  console.log("flow loaded:", reactFlowInstance);

const backgroundProps = {
  color: "#c3c3c3",
  gap: 160,
  variant: "lines",
  style: { backgroundColor: "#F2F2F2" },
} as BackgroundProps;

const OverviewFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState<IInitialNodes[] | any>(
    initialNodes
  );
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: any) =>
      setEdges((eds) => addEdge({ ...params, type: "buttonedge" }, eds)),
    [setEdges]
  );

  const edgeTypes = {
    buttonedge: ButtonEdge,
  };

  return (
    <div>
      <ThemeProvider theme={lightTheme}>
        <ReactFlow
          nodes={nodes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onInit={onInit}
          fitView
          attributionPosition="top-right"
          nodeTypes={nodeTypes}
          edges={edges}
          snapToGrid={true}
          edgeTypes={edgeTypes}
        >
          <CustomControls />
          <Background {...backgroundProps} />

          <ControlBtn />
        </ReactFlow>
      </ThemeProvider>
    </div>
  );
};

export default OverviewFlow;
