import React from "react";
import { Icon, IconProps } from "@chakra-ui/react";

const Crosshair = (props: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <g clip-path="url(#clip0_28_4191)">
        <path
          d="M12.5 20.25C17.0563 20.25 20.75 16.5563 20.75 12C20.75 7.44365 17.0563 3.75 12.5 3.75C7.94365 3.75 4.25 7.44365 4.25 12C4.25 16.5563 7.94365 20.25 12.5 20.25Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.5 1.875V5.625"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.375 12H6.125"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.5 22.125V18.375"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M22.625 12H18.875"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.5 15C14.1569 15 15.5 13.6569 15.5 12C15.5 10.3431 14.1569 9 12.5 9C10.8431 9 9.5 10.3431 9.5 12C9.5 13.6569 10.8431 15 12.5 15Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_28_4191">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </Icon>
  );
};

export default Crosshair;
