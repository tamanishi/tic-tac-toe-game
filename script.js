class TicTacToe {
    constructor() {
        this.board = Array(9).fill('');
        this.currentPlayer = 'X';
        this.gameActive = true;
        this.gameMode = 'pvp'; // 'pvp' or 'pvc'
        this.difficulty = 'medium';
        this.isThinking = false;
        
        this.cells = document.querySelectorAll('.cell');
        this.status = document.getElementById('status');
        this.resetBtn = document.getElementById('resetBtn');
        this.pvpBtn = document.getElementById('pvpBtn');
        this.pvcBtn = document.getElementById('pvcBtn');
        this.difficultySelector = document.getElementById('difficultySelector');
        this.difficultySelect = document.getElementById('difficulty');
        
        this.winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        
        this.init();
    }
    
    init() {
        this.cells.forEach((cell, index) => {
            cell.addEventListener('click', () => this.handleCellClick(index));
        });
        
        this.resetBtn.addEventListener('click', () => this.resetGame());
        this.pvpBtn.addEventListener('click', () => this.setGameMode('pvp'));
        this.pvcBtn.addEventListener('click', () => this.setGameMode('pvc'));
        this.difficultySelect.addEventListener('change', (e) => {
            this.difficulty = e.target.value;
        });
        
        this.updateStatus(`Player ${this.currentPlayer}'s turn`);
    }
    
    setGameMode(mode) {
        this.gameMode = mode;
        this.pvpBtn.classList.toggle('active', mode === 'pvp');
        this.pvcBtn.classList.toggle('active', mode === 'pvc');
        this.difficultySelector.style.display = mode === 'pvc' ? 'flex' : 'none';
        this.resetGame();
    }
    
    handleCellClick(index) {
        if (this.board[index] !== '' || !this.gameActive || this.isThinking) {
            return;
        }
        
        this.makeMove(index);
        if (this.checkResult()) return;
        
        if (this.gameMode === 'pvc' && this.currentPlayer === 'O') {
            this.makeCPUMove();
        }
    }
    
    makeMove(index) {
        this.board[index] = this.currentPlayer;
        this.cells[index].textContent = this.currentPlayer;
        this.cells[index].classList.add(this.currentPlayer.toLowerCase());
    }
    
    makeCPUMove() {
        this.isThinking = true;
        this.updateStatus("CPU is thinking...");
        
        setTimeout(() => {
            const move = this.getBestMove();
            this.makeMove(move);
            this.isThinking = false;
            this.checkResult();
        }, 500 + Math.random() * 1000);
    }
    
    getBestMove() {
        switch (this.difficulty) {
            case 'easy':
                return this.getRandomMove();
            case 'medium':
                return Math.random() < 0.7 ? this.getSmartMove() : this.getRandomMove();
            case 'hard':
                return this.getSmartMove();
            default:
                return this.getRandomMove();
        }
    }
    
    getRandomMove() {
        const availableMoves = this.getAvailableMoves();
        return availableMoves[Math.floor(Math.random() * availableMoves.length)];
    }
    
    getSmartMove() {
        // Try to win
        for (let i = 0; i < this.winningConditions.length; i++) {
            const [a, b, c] = this.winningConditions[i];
            const line = [this.board[a], this.board[b], this.board[c]];
            
            if (line.filter(cell => cell === 'O').length === 2 && line.includes('')) {
                if (this.board[a] === '') return a;
                if (this.board[b] === '') return b;
                if (this.board[c] === '') return c;
            }
        }
        
        // Block player from winning
        for (let i = 0; i < this.winningConditions.length; i++) {
            const [a, b, c] = this.winningConditions[i];
            const line = [this.board[a], this.board[b], this.board[c]];
            
            if (line.filter(cell => cell === 'X').length === 2 && line.includes('')) {
                if (this.board[a] === '') return a;
                if (this.board[b] === '') return b;
                if (this.board[c] === '') return c;
            }
        }
        
        // Take center if available
        if (this.board[4] === '') return 4;
        
        // Take corners
        const corners = [0, 2, 6, 8];
        const availableCorners = corners.filter(i => this.board[i] === '');
        if (availableCorners.length > 0) {
            return availableCorners[Math.floor(Math.random() * availableCorners.length)];
        }
        
        // Take any available move
        return this.getRandomMove();
    }
    
    getAvailableMoves() {
        return this.board.map((cell, index) => cell === '' ? index : null).filter(val => val !== null);
    }
    
    checkResult() {
        let roundWon = false;
        let winningCombination = [];
        
        for (let i = 0; i < this.winningConditions.length; i++) {
            const [a, b, c] = this.winningConditions[i];
            if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
                roundWon = true;
                winningCombination = [a, b, c];
                break;
            }
        }
        
        if (roundWon) {
            const winner = this.gameMode === 'pvc' && this.currentPlayer === 'O' ? 'CPU' : `Player ${this.currentPlayer}`;
            this.updateStatus(`${winner} wins!`);
            this.gameActive = false;
            this.highlightWinningCells(winningCombination);
            this.disableAllCells();
            return true;
        }
        
        if (!this.board.includes('')) {
            this.updateStatus("Game ended in a draw!");
            this.gameActive = false;
            return true;
        }
        
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        
        if (this.gameMode === 'pvp') {
            this.updateStatus(`Player ${this.currentPlayer}'s turn`);
        } else {
            this.updateStatus(this.currentPlayer === 'X' ? "Your turn" : "CPU's turn");
        }
        
        return false;
    }
    
    highlightWinningCells(combination) {
        combination.forEach(index => {
            this.cells[index].classList.add('winner');
        });
    }
    
    disableAllCells() {
        this.cells.forEach(cell => {
            cell.classList.add('disabled');
        });
    }
    
    updateStatus(message) {
        this.status.textContent = message;
    }
    
    resetGame() {
        this.board = Array(9).fill('');
        this.currentPlayer = 'X';
        this.gameActive = true;
        this.isThinking = false;
        
        this.cells.forEach(cell => {
            cell.textContent = '';
            cell.className = 'cell';
        });
        
        if (this.gameMode === 'pvp') {
            this.updateStatus(`Player ${this.currentPlayer}'s turn`);
        } else {
            this.updateStatus("Your turn");
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new TicTacToe();
});