import { Command } from "./Command";
import { Direction } from "./Direction";
import { RoverState } from "./RoverState";

export class Rover {

  private TransitionMap = {
    [Direction.North]: {
      left: Direction.West,
      right: Direction.East,
      step: { x_axis: 0, y_axis: 1 }
    },
    [Direction.East]: {
      left: Direction.North,
      right: Direction.South,
      step: { x_axis: 1, y_axis: 0 }
    },
    [Direction.South]: {
      left: Direction.East,
      right: Direction.West,
      step: { x_axis: 0, y_axis: -1 }
    },
    [Direction.West]: {
      left: Direction.South,
      right: Direction.North,
      step: { x_axis: -1, y_axis: 0 }
    }
  };
  
    constructor(initialPosition: string = "") {
      const positionCommand = initialPosition.split(" ");
      const directionParamsNumber = 3
      if (positionCommand.length >= directionParamsNumber) {
        this.parsePosition(positionCommand);
      }
    }

    public go(commandInstructions: string): void {
      for (const command of commandInstructions) {
        switch (command) {
          case Command.Left: 
            this.rotateToLeft(); break;
          case Command.Right:
             this.rotateToRight(); break;
          case Command.MoveForward: 
            this.moveForward(); break;
        }
      }
    }
    
  private moveForward() {
    let direction= this.roverState.direction as Direction;
    this.roverState.position_x += this.TransitionMap[direction].step.x_axis;
    this.roverState.position_y += this.TransitionMap[direction].step.y_axis;
  }

  private rotateToRight() {
    let direction= this.roverState.direction as Direction;
    this.roverState.direction =this.TransitionMap[direction].right;
  }

  private rotateToLeft() {
    let direction= this.roverState.direction as Direction;
    this.roverState.direction =this.TransitionMap[direction].left;
  }

  public getPosition(): string {
    return `${this.roverState.position_x} ${this.roverState.position_y} ${this.roverState.direction}`;
  }

    private parsePosition(positionCommand: string[]) {
      const positionX = parseInt(positionCommand[0], 10);
      const positionY = parseInt(positionCommand[1], 10);
      const direction = positionCommand[2][0];

      this.roverState.position_x = positionX;
      this.roverState.position_y = positionY;
      this.roverState.direction = direction;
    }

    private roverState: RoverState = new RoverState();
  }