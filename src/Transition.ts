import { Direction } from "./Direction";

export type Transition = {
  [key in Direction]: {
    left: Direction;
    right: Direction;
    step: {x_axis: number, y_axis: number};
  };
  };