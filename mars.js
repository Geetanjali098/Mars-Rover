
//                                                                    ||
//                                                  __..--".          ||
//                                 __..--""`._..--"" . . . .`.        ||
//                         __..--"". . . . . . .`. . . . . . .`.      ||
//                 __..--"". . . . .`. . . . . . .`. . . . . . .`.   //
//         __..--"". . `.  . . . . . .`. . . . . . .`. . . . . . .`.//
//  _..--""  . . . . . . `.  . . . . . .`. . . . . . .`. . . . . . .||
//:". . . .`.  . . . . . . `.  . . . . . .`. . . . . . .`. . . . . .||`.
//`:. . . . .`.  . . . . . . `.  . . . . . .`. . . . . . .`. . . . .||__>
//  `:. . . . .`.  . . . . . . `.  . . . . . .`. . . . . . .`.__..-o||
//   `:. . . . .`.  . . . . . . `.  . . . . . .`. . . . .`;Y"->.  ""
//      `:. . . . .`.  . . . . . . `.  . . . . . .`. . . __.>.:'
//        `:. . . . .`.  . . . . . . `.  . . . . __..--"" ..+"`.
//   _..-._ `:. . . . .`.  . . . . . . `.__..--"" ....:::::.|   `.
// ."`` \_--" >:. . . . .`.  . . __..,-|" . ..::::::::::::::`--""-:.
//' ..`\J.-  "8-`:. . .  __..--"" ...-I  \ `. `::::::::::::::::::::".
//`/'\\88o. ,O \  `:.--""....:|:::'''`'\ ='. }-._'::::::::::::::::::|
//8  8|PP|"(:. \-" ""`:::::::|:::.((::='/ .\""-.:_ ':::::::::::''_.'  _..
// 8  8|::/ \`::Y  _____`:::::|::::.\\[ .\ "/"..* *"-. '''__..--"")\,"".-.\_
//`\b d/""===\==V::.--..__`:::|:::::.|,'*."".:.. "_-.*`.""    _.-"-""\? "_=``.
//\\`".`"' .: :-.::.        `:|:::.'.'*.' __..--""   `.*`:--"".-"?,  .)=""`\ \\
// `.``...''_/   ``::      _\\--.'.'*.'-""   _..-._ _..>.*;-""@_.-/-" `\.-"""-.\
//   `-::--"            .-"@"}.'.'*.:)     ."\` \ \`.--'_`-'     `\. \-'-""-   `.
//                     <\  _...'*.'      .' \.`\ `\ \\""         `\ `' ' .-.\   |
//                     _\"" .---'        -\. `\.-"""-.\           \`|    ._)/   '
//                   ."\.`-"\`.         `\. \-'-""-   `.           \\  `---"   /
//                 .' \.`\ `\ \\        `\ `' ' .-.\   |            `.       _/
//                 -\. `\.-"""-.\        \`|    ._)/   '              `-..--"
//                `\. \-'-""-   `.        \\  `---"   /
//                `\ `' ' .-.\   |         `.       _/
//                 \`|    ._)/   '           `-..--"
//                 \\  `---"   /
//                 `.       _/
//      _ MARS_      `-..--"
//
//=====================================
//=         THE MARS ROVER          =
//=       Coded by Geetanjali       =
//=                    
//=====================================

// Rover objects goes here:
const rover1 = {
    id: 1,
    direction: "N",
    x: 0,
    y: 0,
    travelLog: []
  };
  
  const rover2 = {
    id: 2,
    direction: "S",
    x: 8,
    y: 8,
    travelLog: []
  };
  
  const rovers = [rover1, rover2];
  
  // The 10 x 10 Grid a.k.a Planet Mars
  
  let grid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Home position of rover 1 at [0,0]
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], // Obstacle at [3, 3]
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 2, 0], // Another rover at [8, 8]
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
  
  // =====TURN LEFT=========
  function turnLeft(rover) {
    switch (rover.direction) {
      case "N":
        rover.direction = "W";
        break;
      case "W":
        rover.direction = "S";
        break;
      case "S":
        rover.direction = "E";
        break;
      case "E":
        rover.direction = "N";
        break;
    }
    console.log(`The rover is now facing ${rover.direction}`);
  }
  
  // =====TURN RIGHT=========
  
  function turnRight(rover) {
    switch (rover.direction) {
      case "N":
        rover.direction = "E";
        break;
      case "E":
        rover.direction = "S";
        break;
      case "S":
        rover.direction = "W";
        break;
      case "W":
        rover.direction = "N";
        break;
    }
    console.log(`The rover is now facing ${rover.direction}`);
  }
  
  // =====MOVE FORWARD=========
  
  function moveForward(rover) {
    let newX = rover.x;
    let newY = rover.y;
  
    switch (rover.direction) {
      case "N":
        newY--;
        break;
      case "E":
        newX++;
        break;
      case "S":
        newY++;
        break;
      case "W":
        newX--;
        break;
    }
  
    if (newX >= 0 && newX < 10 && newY >= 0 && newY < 10) {
      if (grid[newY][newX] === 0) {
        // Check for collisions with other rovers
        const collidingRover = rovers.find(
            (r) => r.id !== rover.id && r.x === newX && r.y === newY
        );
        if (collidingRover) {
          console.log(
              `Rover ${rover.id} cannot move forward. Collision with Rover ${collidingRover.id}`
          );
        } else {
          rover.x = newX;
          rover.y = newY;
          rover.travelLog.push(`[${rover.x}, ${rover.y}]`);
          console.log(`Rover ${rover.id} is now at [${rover.x}, ${rover.y}]`);
        }
      } else if (grid[newY][newX] === 1) {
        console.log(`Rover ${rover.id} cannot move forward. Obstacle found!`);
      }
    } else {
      console.log(`Rover ${rover.id} cannot move outside the grid`);
    }
  }
  
  // =====MOVE BACKWARD=========
  
  function moveBackward(rover) {
    let newX = rover.x;
    let newY = rover.y;
  
    switch (rover.direction) {
      case "N":
        newY++;
        break;
      case "E":
        newX--;
        break;
      case "S":
        newY--;
        break;
      case "W":
        newX++;
        break;
    }
  
    if (newX >= 0 && newX < 10 && newY >= 0 && newY < 10) {
      if (grid[newY][newX] === 0) {
        // Check for collisions with other rovers
        const collidingRover = rovers.find(
            (r) => r.id !== rover.id && r.x === newX && r.y === newY
        );
        if (collidingRover) {
          console.log(
              `Rover ${rover.id} cannot move backward. Collision with Rover ${collidingRover.id}`
          );
        } else {
          rover.x = newX;
          rover.y = newY;
          rover.travelLog.push(`[${rover.x}, ${rover.y}]`);
          console.log(`Rover ${rover.id} is now at [${rover.x}, ${rover.y}]`);
        }
      } else if (grid[newY][newX] === 1) {
        console.log(`Rover ${rover.id} cannot move backward. Obstacle found!`);
      }
    } else {
      console.log(`Rover ${rover.id} cannot move outside the grid`);
    }
  }
  
  // =====EXECUTE COMMANDS=========
  
  function executeCommands(rover, commands) {
    const validCommands = ["f", "b", "r", "l"];
  
    for (const command of commands) {
      if (validCommands.includes(command)) {
        switch (command) {
          case "f":
            moveForward(rover);
            break;
          case "b":
            moveBackward(rover);
            break;
          case "r":
            turnRight(rover);
            break;
          case "l":
            turnLeft(rover);
            break;
        }
      } else {
        console.log(`Invalid command: ${command}`);
      }
    }
    console.log(
        `Travel log for Rover ${rover.id}: ${rover.travelLog.join(", ")}`
    );
  }
  
  // ======== RUN MARS ROVERS =========
  
  // ========CMDs for ROVER 1==========
  
  console.log("Executing commands for Rover 1:");
  executeCommands(rover1, "rffrfflfrff");
  
  // ========CMDs for ROVER 2==========
  
  console.log("Executing commands for Rover 2:");
  executeCommands(rover2, "lbblbblbblbb");
  
  // END OF PROGRAM 