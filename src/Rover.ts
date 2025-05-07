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
        if (command === "L") {
          if (this.roverState.direction === "E")      { this.roverState.direction = "N"; }
          else if (this.roverState.direction === "N") { this.roverState.direction = "W"; }
          else if (this.roverState.direction === "W") { this.roverState.direction = "S"; }
          else if (this.roverState.direction === "S") { this.roverState.direction = "E"; }
        } else if (command === "R") {
          if (this.roverState.direction === "E")      { this.roverState.direction = "S"; }
          else if (this.roverState.direction === "S") { this.roverState.direction = "W"; }
          else if (this.roverState.direction === "W") { this.roverState.direction = "N"; }
          else if (this.roverState.direction === "N") { this.roverState.direction = "E"; }
        } else if (command === "M") {
          if (this.roverState.direction === "E")      { this.roverState.position_x++; }
          if (this.roverState.direction === "S")      { this.roverState.position_y--; }
          if (this.roverState.direction === "W")      { this.roverState.position_x--; }
          if (this.roverState.direction === "N")      { this.roverState.position_y++; }
        }
      }
    }
    
    public getPosition(): string {
      return `${this.roverState.position_x} ${this.roverState.position_y} ${this.roverState.direction}`;
    }

    private roverState: RoverState = new RoverState();
  }