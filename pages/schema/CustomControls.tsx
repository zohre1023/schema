import React from "react";
import { Controls, ControlButton } from "reactflow";
import styled from "styled-components";
import { Crosshair } from "@/components/icons";

function CustomControls() {
  const ControlsStyled = styled(Controls)`
    button {
      width: 50px;
      height: 50px;
      svg {
        max-width: 20px;
        max-height: 20px;
      }
      path {
        fill: currentColor;
      }
    }
  `;

  return (
    <ControlsStyled position="bottom-right" showInteractive={false}>
      <ControlButton onClick={() => console.log("action")}>
        <Crosshair w={20} />
      </ControlButton>
    </ControlsStyled>
  );
}
export default CustomControls;
