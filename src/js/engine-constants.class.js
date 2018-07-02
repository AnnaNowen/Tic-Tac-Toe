class EngineConstants {

    static get notPlayed () {
        return 0;
    }

    static get playerOne () {
        return 1;
    }

    static get playerTwo () {
        return 2;
    }

    static get descendingWin(){
        return [0, 4, 8];
    }

    static get risingWin(){
        return [2, 4, 6];
    }

    static get horizontalOneWin(){
        return [0, 1, 2];
    }

    static get horizontalTwoWin(){
        return [3, 4, 5];
    }

    static get horizontalThreeWin(){
        return [6, 7, 8];
    }

    static get verticalOneWin(){
        return [0, 3, 6];
    }

    static get verticalTwoWin(){
        return [1, 4, 7];
    }

    static get verticalThreeWin(){
        return [2, 5, 8];
    }
}