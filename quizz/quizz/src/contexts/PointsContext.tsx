import { Dispatch, SetStateAction, createContext } from "react";

type Context = {
  point: number;
  setPoint: Dispatch<SetStateAction<number>>;
};

export const PointsContext = createContext<Context>({} as any);
