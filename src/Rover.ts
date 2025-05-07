import { Command } from "./Command";
import { Direction } from "./Direction";
import { RoverState } from "./RoverState";

export class Rover {

  private Transition= { 
    [Direction.North]: { left: Direction.West, right: Direction.East },
    [Direction.East]: { left: Direction.North, right: Direction.South },
    [Direction.South]: { left: Direction.East, right: Direction.West },
    [Direction.West]: { left: Direction.South, right: Direction.North }
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
    if (this.isEast()) { this.roverState.position_x++; }
    if (this.isSouth()) { this.roverState.position_y--; }
    if (this.isWest()) { this.roverState.position_x--; }
    if (this.isNorth()) { this.roverState.position_y++; }
  }

  private rotateToRight() {
    let direction= this.roverState.direction as Direction;
    this.roverState.direction =this.Transition[direction].right;
  }

  private rotateToLeft() {
    if (this.isEast()) { this.roverState.direction = Direction.North; }
    else if (this.isNorth()) { this.roverState.direction = Direction.West; }
    else if (this.isWest()) { this.roverState.direction = Direction.South; }
    else if (this.isSouth()) { this.roverState.direction = Direction.East; }
  }

  private isEast() {
    return this.roverState.direction === Direction.East;
  }

  private isNorth() {
    return this.roverState.direction === Direction.North;
  }

  private isSouth() {
    return this.roverState.direction === Direction.South;
  }

  private isWest() {
    return this.roverState.direction === Direction.West;
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