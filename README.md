# Mars Rover Simulation in JavaScript  

 A **Mars Rover simulation** that models the movement of robotic rovers on a 10x10 grid representing the Martian surface.
 The program includes two rovers that can move forward/backward, turn left/right, avoid obstacles, and prevent collisions with each other.  

## **Key Features**  

1. **Rover Objects**  
   - Each rover has:  
     - A unique `id`  
     - Current `direction` (N, S, E, W)  
     - `(x, y)` coordinates  
     - A `travelLog` recording its path  

2. **Grid (Mars Surface)**  
   - A 10x10 matrix where:  
     - `0` = empty space  
     - `1` = obstacle  
     - `2` = another rover (for collision detection)  

3. **Movement Functions**  
   - `turnLeft()` / `turnRight()` – Changes the rover’s direction  
   - `moveForward()` / `moveBackward()` – Moves the rover while checking:  
     - **Grid boundaries** (prevents going out of bounds)  
     - **Obstacles** (detects and stops at `1`)  
     - **Collisions** (prevents rovers from overlapping)  

4. **Command Execution**  
   - `executeCommands(rover, commands)` – Takes a string of commands (`"f"`, `"b"`, `"r"`, `"l"`) and executes them sequentially.  
   - Logs the rover’s path (`travelLog`) after execution.  

5. **Sample Test Runs**  
   - Rover 1 executes: `"rffrfflfrff"` (right, forward, forward, etc.)  
   - Rover 2 executes: `"lbblbblbblbb"` (left, backward, backward, etc.)
  
6. **Run the Script**
  - Execute the script in your terminal:
       node mars.js  
  - The code is standalone and runs in any JavaScript environment (e.g., browser console or Node.js)
    
## **How It Works**  
The simulation mimics NASA’s Mars rover missions, where rovers receive movement commands from Earth.
The program ensures safe navigation by enforcing grid limits, obstacle avoidance, and collision prevention.  

### **Potential Use Cases**  
- **Educational tool** for learning robotics, pathfinding, and grid-based movement.  
- **Game development** for turn-based movement systems.  
- **Algorithm testing** for autonomous vehicle navigation.  

The code is well-structured, with clear functions for movement, turning, and command execution, making it easy to extend (e.g., adding more rovers or dynamic obstacles).  

**Final Output:**
The console logs each rover’s position changes and travel history, providing a clear trail of their movements on Mars! 🚀
