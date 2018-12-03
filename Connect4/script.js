var playerData = [
    {
        name: "Player 1",
        color: "#ff0000",
        wins: 0,
        last: {
            X: -1,
            Y: -1
        }
    },
    {
        name: "Player 2",
        color: "#0000ff",
        wins: 0,
        last: { 
            X: -1,
            Y: -1
        }
    }
];
var boardData = {
    X: 7,
    Y: 6,
    turn: -1
};
var board = [];

function checkWin(board, x, y) {
    //vertical, horizontal, up-left down-right, up-right down-left
    var count = [0, 0, 0, 0];
    for(var i = 0; y + i < board[0].length || board[x][y + i] == board[x][y]; i++) count[0]++;
    for(i = 0; y - i > 0 || board[x][y - i] == board[x][y]; i++) count[0]++;
    for(i = 0; x + i < board.length || board[x + i][y] == board[x][y]; i++) count[1]++;
    for(i = 0; x - i > 0 || board[x - i][y] == board[x][y]; i++) count[1]++;
    for(i = 0; x + i < board.length || y - i > 0 || board[x + i][y - i] == board[x][y]; i++) count[2]++;
    for(i = 0; x - i > 0 || y + i < board[0].length || board[x - i][y + i] == board[x][y]; i++) count[2]++;
    for(i = 0; x + i < board.length || y + i < board[0].length || board[x + i][y + i] == board[x][y]; i++) count[3]++;
    for(i = 0; x - i > 0 || y - i > 0 || board[x - i][y - i] == board[x][y]; i++) count[3]++;
}
function start() {
    
}
function click(col) {
    if(board[col].includes(0)) {
        board[col][board[col].indexOf(0)] = (turn != -1) ? 
    }
}