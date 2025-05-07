# Pomodoro Technique - :notebook: Notes from the journey :tomato: by :tomato:

## :bookmark: Labels

- ✅ : done
- 🚧 : WIP
- ⛌ : ERROR
- ❒ : TODO

## 🍅 Pomodoro 1
- Refactor the readability of RoverState
- Refactor xx to position_x
- Refactor yy to position_y
- Refactor dd to direction
- Refactor the readability of Rover
- Refactor rv to roverState
- Refactor p to initialPosition
- Refactor s to positionCommand
- Refactor cms to commandInstructions
- Refactor i to commandIndex
- Refactor c to command
- Refactor XYD to getPosition

## 🍅 Pomodoro 2
- Remove the dead code
- Rename positoin function name to getPosition
- Refactor command direction to enum
- Refactor E to Direction.East
- Refactor W to Direction.West
- Refactor N to Direction.North
- Refactor S to Direction.South
- Refactor command actions to enum
- Refactor L to Command.Left
- Refactor R to Command.Right
- Refactor M to Command.MoveForward

## 🍅 Pomodoro 3
- Extract parsing position to separate function
- Remove magic numbers: remove 3 to a const number
- Enahnce readbility of parsing position x
- Enahnce readbility of parsing position y
- Enahnce readbility of parsing direction
- Extract rotate left logic to a separate function
- Extract rotate right logic to a separate function
- Extract move forward logic to a separate function
- Enhance the commandInstructions loop readability
- Replace if conditions of commands with switch case

## 🍅 Pomodoro 4
- Remove the repeated conditions and code
- Extract isEast condition to a separate function
- Extract isNorth condition to a separate function
- Extract isSouth condition to a separate function
- Extract isWest condition to a separate function

## 🍅 Pomodoro 5
- Create Transition type with right and left directions

