import { Command } from "./Command";
import Direction from "./Direction";
import { RoverState } from "./RoverState";

export class Rover {
  
    constructor(initialPosition: string = "") {
      const positionCommand = initialPosition.split(" ");
      const directionParamsNumber = 3
      if (positionCommand.length >= directionParamsNumber) {
        this.parsePosition(positionCommand);
      }
    }

    public go(commandInstructions: string): void {
      for (let commandIndex = 0; commandIndex < commandInstructions.length; commandIndex++) {
        const command = commandInstructions[commandIndex];
        if (command === Command.Left) {
          this.rotateToLeft();
        } else if (command === Command.Right) {
          this.rotateToRight();
        } else if (command === Command.MoveForward) {
          if (this.roverState.direction === Direction.East)      { this.roverState.position_x++; }
          if (this.roverState.direction === Direction.South)      { this.roverState.position_y--; }
          if (this.roverState.direction === Direction.West)      { this.roverState.position_x--; }
          if (this.roverState.direction === Direction.North)      { this.roverState.position_y++; }
        }
      }
    }
    
  private rotateToRight() {
    if (this.roverState.direction === Direction.East) { this.roverState.direction = Direction.South; }
    else if (this.roverState.direction === Direction.South) { this.roverState.direction = Direction.West; }
    else if (this.roverState.direction === Direction.West) { this.roverState.direction = Direction.North; }
    else if (this.roverState.direction === Direction.North) { this.roverState.direction = Direction.East; }
  }

  private rotateToLeft() {
    if (this.roverState.direction === Direction.East) { this.roverState.direction = Direction.North; }
    else if (this.roverState.direction === Direction.North) { this.roverState.direction = Direction.West; }
    else if (this.roverState.direction === Direction.West) { this.roverState.direction = Direction.South; }
    else if (this.roverState.direction === Direction.South) { this.roverState.direction = Direction.East; }
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