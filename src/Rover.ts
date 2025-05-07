import { RoverState } from "./RoverState";
  
export class Rover {
  
    constructor(p: string = "") {
      const s = p.split(" ");
      if (s.length >= 3) {
        this.rs.position_x = parseInt(s[0], 10);
        this.rs.position_y = parseInt(s[1], 10);
        this.rs.direction = s[2][0];
      }
    }
  
    public go(cms: string): void {
      for (let i = 0; i < cms.length; i++) {
        const c = cms[i];
        if (c === "L") {
          if (this.rs.direction === "E")      { this.rs.direction = "N"; }
          else if (this.rs.direction === "N") { this.rs.direction = "W"; }
          else if (this.rs.direction === "W") { this.rs.direction = "S"; }
          else if (this.rs.direction === "S") { this.rs.direction = "E"; }
        } else if (c === "R") {
          if (this.rs.direction === "E")      { this.rs.direction = "S"; }
          else if (this.rs.direction === "S") { this.rs.direction = "W"; }
          else if (this.rs.direction === "W") { this.rs.direction = "N"; }
          else if (this.rs.direction === "N") { this.rs.direction = "E"; }
        } else if (c === "M") {
          if (this.rs.direction === "E")      { this.rs.position_x++; }
          if (this.rs.direction === "S")      { this.rs.position_y--; }
          if (this.rs.direction === "W")      { this.rs.position_x--; }
          if (this.rs.direction === "N")      { this.rs.position_y++; }
        }
      }
    }
  
    public G(z: string): void {
      this.go(z[0]);
    }
  
    public get XYD(): string {
      return `${this.rs.position_x} ${this.rs.position_y} ${this.rs.direction}`;
    }

    public pos(): string {
      return this.XYD;
    }

    private rs: RoverState = new RoverState();
  }