# Tic-Tac-Toe Game

A modern, interactive tic-tac-toe game built with HTML, CSS, and JavaScript. Features both Player vs Player and Player vs CPU modes with multiple difficulty levels.

## 🎮 Features

- **Two Game Modes:**
  - Player vs Player (PvP)
  - Player vs CPU (PvC)

- **CPU Difficulty Levels:**
  - **Easy:** Random moves for casual play
  - **Medium:** Mix of strategic and random moves (70% smart, 30% random)
  - **Hard:** Optimal strategy with win/block/center/corner prioritization

- **Smart AI Logic:**
  - Prioritizes winning moves
  - Blocks opponent winning moves  
  - Takes center position when available
  - Prefers corner positions
  - Realistic thinking delays with visual feedback

- **Modern UI/UX:**
  - Responsive design that works on all devices
  - Smooth animations and hover effects
  - Visual feedback for game states
  - Clean, modern styling with gradient backgrounds

## 🚀 Getting Started

### Play Online
Simply open `index.html` in your web browser to start playing immediately.

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/tamanishi/tic-tac-toe-game.git
   cd tic-tac-toe-game
   ```

2. Open `index.html` in your preferred web browser

3. Start playing!

## 🎯 How to Play

1. **Choose Game Mode:** Select either "Player vs Player" or "Player vs CPU"
2. **Set Difficulty:** If playing against CPU, choose your preferred difficulty level
3. **Make Moves:** Click on any empty cell to place your mark (X or O)
4. **Win Condition:** Get three of your marks in a row (horizontally, vertically, or diagonally)
5. **Reset:** Use the "Reset Game" button to start a new game

## 🏗️ Project Structure

```
tic-tac-toe-game/
├── index.html          # Main HTML structure
├── style.css           # Styling and responsive design
├── script.js           # Game logic and AI implementation
├── CLAUDE.md           # Development guidance
└── README.md           # Project documentation
```

## 🤖 AI Strategy

The CPU opponent uses different strategies based on difficulty:

### Easy Mode
- Makes completely random moves
- Good for beginners or casual play

### Medium Mode  
- 70% strategic moves, 30% random moves
- Provides moderate challenge

### Hard Mode
- Always uses optimal strategy:
  1. **Win:** Take winning move if available
  2. **Block:** Block opponent's winning move
  3. **Center:** Take center position (position 4)
  4. **Corners:** Prefer corner positions (0, 2, 6, 8)
  5. **Sides:** Take remaining side positions

## 🛠️ Technical Details

- **Pure JavaScript:** No external libraries or frameworks
- **CSS Grid:** Used for responsive game board layout
- **CSS Animations:** Smooth transitions and visual feedback
- **Event-Driven:** Responsive to user interactions
- **Object-Oriented:** Clean, maintainable code structure

## 🎨 Customization

The game is easy to customize:

- **Colors:** Modify the CSS gradient and color scheme in `style.css`
- **AI Difficulty:** Adjust probability values in the `getBestMove()` function
- **Board Size:** Currently 3x3, but expandable with minimal changes
- **Animations:** Modify transition timings and effects in CSS

## 🔧 Development

### File Overview

- **`index.html`:** Contains the game structure and UI elements
- **`style.css`:** Handles all styling, responsive design, and animations
- **`script.js`:** Implements game logic, AI, and user interactions

### Key Classes and Methods

- `TicTacToe`: Main game class
- `getBestMove()`: AI decision-making logic
- `checkResult()`: Win/draw detection
- `makeMove()`: Handles player and CPU moves

## 📱 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (responsive design)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎖️ Credits

Built with ❤️ using modern web technologies. Perfect for learning game development concepts, AI implementation, and responsive web design.

---

**Enjoy playing!** 🎮