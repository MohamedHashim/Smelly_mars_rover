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
    if (this.isEast()) { this.roverState.position_x++; }
    if (this.roverState.direction === Direction.South) { this.roverState.position_y--; }
    if (this.roverState.direction === Direction.West) { this.roverState.position_x--; }
    if (this.roverState.direction === Direction.North) { this.roverState.position_y++; }
  }

  private rotateToRight() {
    if (this.isEast()) { this.roverState.direction = Direction.South; }
    else if (this.roverState.direction === Direction.South) { this.roverState.direction = Direction.West; }
    else if (this.roverState.direction === Direction.West) { this.roverState.direction = Direction.North; }
    else if (this.roverState.direction === Direction.North) { this.roverState.direction = Direction.East; }
  }

  private rotateToLeft() {
    if (this.isEast()) { this.roverState.direction = Direction.North; }
    else if (this.roverState.direction === Direction.North) { this.roverState.direction = Direction.West; }
    else if (this.roverState.direction === Direction.West) { this.roverState.direction = Direction.South; }
    else if (this.roverState.direction === Direction.South) { this.roverState.direction = Direction.East; }
  }

  private isEast() {
    return this.roverState.direction === Direction.East;
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