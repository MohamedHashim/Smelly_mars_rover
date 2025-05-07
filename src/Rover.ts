import { Command } from "./Command";
import Direction from "./Direction";
import { RoverState } from "./RoverState";

export class Rover {
  
    constructor(initialPosition: string = "") {
      const positionCommand = initialPosition.split(" ");
      if (positionCommand.length >= 3) {
        this.roverState.position_x = parseInt(positionCommand[0], 10);
        this.roverState.position_y = parseInt(positionCommand[1], 10);
        this.roverState.direction = positionCommand[2][0];
      }
    }
  
    public go(commandInstructions: string): void {
      for (let commandIndex = 0; commandIndex < commandInstructions.length; commandIndex++) {
        const command = commandInstructions[commandIndex];
        if (command === Command.Left) {
          if (this.roverState.direction === Direction.East)      { this.roverState.direction = Direction.North; }
          else if (this.roverState.direction === Direction.North) { this.roverState.direction = Direction.West; }
          else if (this.roverState.direction === Direction.West) { this.roverState.direction = Direction.South; }
          else if (this.roverState.direction === Direction.South) { this.roverState.direction = Direction.East; }
        } else if (command === Command.Right) {
          if (this.roverState.direction === Direction.East)      { this.roverState.direction = Direction.South; }
          else if (this.roverState.direction === Direction.South) { this.roverState.direction = Direction.West; }
          else if (this.roverState.direction === Direction.West) { this.roverState.direction = Direction.North; }
          else if (this.roverState.direction === Direction.North) { this.roverState.direction = Direction.East; }
        } else if (command === Command.MoveForward) {
          if (this.roverState.direction === Direction.East)      { this.roverState.position_x++; }
          if (this.roverState.direction === Direction.South)      { this.roverState.position_y--; }
          if (this.roverState.direction === Direction.West)      { this.roverState.position_x--; }
          if (this.roverState.direction === Direction.North)      { this.roverState.position_y++; }
        }
      }
    }
    
    public getPosition(): string {
      return `${this.roverState.position_x} ${this.roverState.position_y} ${this.roverState.direction}`;
    }

    private roverState: RoverState = new RoverState();
  }