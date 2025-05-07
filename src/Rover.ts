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
  
    public go(cms: string): void {
      for (let i = 0; i < cms.length; i++) {
        const c = cms[i];
        if (c === "L") {
          if (this.roverState.direction === "E")      { this.roverState.direction = "N"; }
          else if (this.roverState.direction === "N") { this.roverState.direction = "W"; }
          else if (this.roverState.direction === "W") { this.roverState.direction = "S"; }
          else if (this.roverState.direction === "S") { this.roverState.direction = "E"; }
        } else if (c === "R") {
          if (this.roverState.direction === "E")      { this.roverState.direction = "S"; }
          else if (this.roverState.direction === "S") { this.roverState.direction = "W"; }
          else if (this.roverState.direction === "W") { this.roverState.direction = "N"; }
          else if (this.roverState.direction === "N") { this.roverState.direction = "E"; }
        } else if (c === "M") {
          if (this.roverState.direction === "E")      { this.roverState.position_x++; }
          if (this.roverState.direction === "S")      { this.roverState.position_y--; }
          if (this.roverState.direction === "W")      { this.roverState.position_x--; }
          if (this.roverState.direction === "N")      { this.roverState.position_y++; }
        }
      }
    }
  
    public G(z: string): void {
      this.go(z[0]);
    }
  
    public get XYD(): string {
      return `${this.roverState.position_x} ${this.roverState.position_y} ${this.roverState.direction}`;
    }

    public pos(): string {
      return this.XYD;
    }

    private roverState: RoverState = new RoverState();
  }