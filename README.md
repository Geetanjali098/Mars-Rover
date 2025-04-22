
## 🚀 Project: **Mars Rover Simulation**

### 🎯 **Goals**
- Simulate movement of Mars Rovers on a 10x10 grid.
- Handle rover navigation (turning/moving).
- Detect collisions with obstacles and other rovers.
- Track each rover's travel history.
- Execute user-defined command sequences.

---

### 🛠️ **How It Works**

#### 1. **Grid Setup**
- A `10x10` grid represents the Mars surface.
- Some cells contain:
  - `0` – Empty space.
  - `1` – Obstacle (e.g., at `[3, 3]`).
  - `2` – A rover (e.g., Rover 2 at `[8, 8]`).

#### 2. **Rover Configuration**
- Two rovers (`rover1`, `rover2`) are defined with:
  - `x` and `y` position.
  - Direction (`N`, `S`, `E`, `W`).
  - A travel log that stores all past positions.

#### 3. **Core Movement Functions**
- `turnLeft(rover)`: Rotates rover 90° left.
- `turnRight(rover)`: Rotates rover 90° right.
- `moveForward(rover)`: Moves rover one step in its current direction.
- `moveBackward(rover)`: Moves rover one step backward (opposite of current direction).

Each move:
- Checks grid boundaries.
- Checks for obstacles.
- Checks for collision with another rover.
- Logs the position if the move is successful.

#### 4. **Command Execution**
- `executeCommands(rover, "commandString")`:
  - Loops through each character:
    - `f` = forward
    - `b` = backward
    - `l` = turn left
    - `r` = turn right
  - Validates command and executes accordingly.
  - Logs the rover's movement history.

#### 5. **Example Run**
```js
executeCommands(rover1, "rffrfflfrff"); // Moves and rotates Rover 1
executeCommands(rover2, "lbblbblbblbb"); // Moves and rotates Rover 2
```

---

### 🧠 Key Features
- Multiple rover support.
- Obstacle detection and avoidance.
- Collision prevention.
- Visual travel logging.
- Realistic grid navigation.
  
## **Deployment**
 - Execute the script in your terminal:
       node mars.js
   
**Final Output:**
The console logs each rover’s position changes and travel history, providing a clear trail of their movements on Mars! 🚀
