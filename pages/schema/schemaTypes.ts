export interface IDataProps {
  data: {
    type: string;
    title: string;
    items: Item[];
    selects: {
      "handle-0": string;
      "handle-1": string;
      "handle-2": string;
      "handle-3": string;
      "handle-4"?: string | undefined;
    };
  };
}
export interface Item {
  label: string;
  id: string;
}

export interface IInitialNodes {
  id: string;
  type: string;
  position: {
    x: number;
    y: number;
  };
  data: IDataProps;
}
