import { Direction } from "./Direction";

export type Transition = {
  [key in Direction]: {
    left: Direction;
    right: Direction;  };
  };