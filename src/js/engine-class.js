class Engine {
    static validateRange (n) {
        if (n < 0 || n > 8) {
            throw new Error(`Not within valid range: ${n}`);
        }
    }

    get currentPlayer () {
        return this._currentPlayer;
    }

    get board () {
        return this._board.slice();
    }

    constructor () {
        this._currentPlayer = EngineConstants.playerOne;
        this._board = [
            EngineConstants.notPlayed,
            EngineConstants.notPlayed,
            EngineConstants.notPlayed,
            EngineConstants.notPlayed,
            EngineConstants.notPlayed,
            EngineConstants.notPlayed,
            EngineConstants.notPlayed,
            EngineConstants.notPlayed,
            EngineConstants.notPlayed,
        ];
    }

    play (position) {
        Engine.validateRange(position);
        this.validate(position);
        this.setPosition(position);
    }

    validate (position) {
        if (this._board[position] !== EngineConstants.notPlayed) {
            throw new Error(`Position [${position}] is not valid`);
        }
    }

    setPosition (position) {
        this._board[position] = this._currentPlayer;
    }

    updatePlayer () {
        if (this._currentPlayer === EngineConstants.playerOne) {
            this._currentPlayer = EngineConstants.playerTwo;
        } else if (this._currentPlayer === EngineConstants.playerTwo) {
            this._currentPlayer = EngineConstants.playerOne;
        } else {
            throw new Error(`Player not valid: ${this._currentPlayer}`);
        }
    }

    hasWinner () {
       return [
            EngineConstants.horizontalOneWin,
            EngineConstants.horizontalTwoWin,
            EngineConstants.horizontalThreeWin,
            EngineConstants.verticalOneWin,
            EngineConstants.verticalTwoWin,
            EngineConstants.verticalThreeWin,
            EngineConstants.descendingWin,
            EngineConstants.risingWin,
        ].some(value => this.hasAll(value))
    }

    isDraw() {
        return !this.hasNotPlayed();
    }

    hasAll (wins) {
        return wins.every(value => this._board[value] === this._currentPlayer)
    }

    hasNotPlayed() {
        return this._board.some(value => value === EngineConstants.notPlayed);
    }
}