import { MarkerType } from "reactflow";
import {
  AWARDS,
  BORN,
  CAPITAL,
  COUNTRY,
  DIED,
  EDUCATION,
  POPULATION,
  PRESIDENT,
  SPOUSE,
  STATE,
  THEORETICAL_PHYSICIST,
} from "./const";

export const nodes = [
  {
    id: "1",
    type: "custom",
    position: { x: 100, y: 200 },
    data: {
      type: "source",
      title: COUNTRY,
      items: [
        { label: STATE, id: "1" },
        { label: POPULATION, id: "2" },
        { label: PRESIDENT, id: "3" },
        { label: CAPITAL, id: "4" },
      ],
      selects: {
        "handle-0": "1",
        "handle-1": "2",
        "handle-2": "3",
        "handle-3": "4",
      },
    },
  },

  {
    id: "2",
    type: "custom",
    position: { x: 700, y: 100 },
    data: {
      type: "target",
      title: THEORETICAL_PHYSICIST,
      items: [
        { label: BORN, id: "1" },
        { label: DIED, id: "2" },
        { label: EDUCATION, id: "3" },
        { label: SPOUSE, id: "4" },
        { label: AWARDS, id: "5" },
      ],
      selects: {
        "handle-0": "1",
        "handle-1": "2",
        "handle-2": "3",
        "handle-3": "4",
        "handle-4": "5",
      },
    },
  },
  {
    id: "3",
    type: "input",
    data: {
      label: "Input Node",
    },
    position: { x: 250, y: 0 },
  },
];

export const edges = [
  {
    id: "e4-7",
    source: "1",
    target: "2",
    type: "buttonedge",
    data: {
      selectIndex: 1,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
];
