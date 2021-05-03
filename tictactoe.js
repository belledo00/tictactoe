
//Function to place an X mark on game cell
var mark = 1;
function placeMarker1(){
  var inputVal = document.getElementById("s1");
  if (mark == 1) {
    document.getElementById("s1").value = "X";
    inputVal.style.backgroundColor = "#E7C3F3";
    inputVal.style.color = "#9F03B8";
    AIsTurn();
  }
}

function placeMarker2(){
  var inputVal = document.getElementById("s2");
  if (mark == 1) {
    document.getElementById("s2").value = "X";
    inputVal.style.backgroundColor = "#E7C3F3";
    inputVal.style.color = "#9F03B8";
    AIsTurn();
  }
}

function placeMarker3(){
  var inputVal = document.getElementById("s3");
  if (mark == 1) {
    document.getElementById("s3").value = "X";
    inputVal.style.backgroundColor = "#E7C3F3";
    inputVal.style.color = "#9F03B8";
    AIsTurn();
  }
}

function placeMarker4(){
  var inputVal = document.getElementById("s4");
  if (mark == 1) {
    document.getElementById("s4").value = "X";
    inputVal.style.backgroundColor = "#E7C3F3";
    inputVal.style.color = "#9F03B8";
    AIsTurn();
  }
}

function placeMarker5(){
  var inputVal = document.getElementById("s5");
  if (mark == 1) {
    document.getElementById("s5").value = "X";
    inputVal.style.backgroundColor = "#E7C3F3";
    inputVal.style.color = "#9F03B8";
    AIsTurn();
  }
}

function placeMarker6(){
  var inputVal = document.getElementById("s6");
  if (mark == 1) {
    document.getElementById("s6").value = "X";
    inputVal.style.backgroundColor = "#E7C3F3";
    inputVal.style.color = "#9F03B8";
    AIsTurn();
  }
}

function placeMarker7(){
  var inputVal = document.getElementById("s7");
  if (mark == 1) {
    document.getElementById("s7").value = "X";
    inputVal.style.backgroundColor = "#E7C3F3";
    inputVal.style.color = "#9F03B8";
    AIsTurn();
  }
}

function placeMarker8(){
  var inputVal = document.getElementById("s8");
  if (mark == 1) {
    document.getElementById("s8").value = "X";
    inputVal.style.backgroundColor = "#E7C3F3";
    inputVal.style.color = "#9F03B8";
    AIsTurn();
  }
}

function placeMarker9(){
  var inputVal = document.getElementById("s9");
  if (mark == 1) {
    document.getElementById("s9").value = "X";
    inputVal.style.backgroundColor = "#E7C3F3";
    inputVal.style.color = "#9F03B8";
    AIsTurn();
  }
}

// Result or Status Function
function AIsTurn(){
  document.getElementById("status").innerHTML = 'Click on "AIs Turn".';
}

function playerXTurn(){
  document.getElementById("status").innerHTML = 'Player X, make a move.';
}


// Reset Board Function
function resetBoard(){
  document.getElementById("s1").value = "";
  document.getElementById("s2").value = "";
  document.getElementById("s3").value = "";
  document.getElementById("s4").value = "";
  document.getElementById("s5").value = "";
  document.getElementById("s6").value = "";
  document.getElementById("s7").value = "";
  document.getElementById("s8").value = "";
  document.getElementById("s9").value = "";

  //resetting game cell styles
  var inputVal = document.getElementById("s1");
    inputVal.style.backgroundColor = "#FFFB99";
  var inputVal = document.getElementById("s2");
    inputVal.style.backgroundColor = "#FFFB99";
  var inputVal = document.getElementById("s3");
      inputVal.style.backgroundColor = "#FFFB99";
  var inputVal = document.getElementById("s4");
      inputVal.style.backgroundColor = "#FFFB99";
  var inputVal = document.getElementById("s5");
      inputVal.style.backgroundColor = "#FFFB99";
  var inputVal = document.getElementById("s6");
      inputVal.style.backgroundColor = "#FFFB99";
  var inputVal = document.getElementById("s7");
      inputVal.style.backgroundColor = "#FFFB99";
  var inputVal = document.getElementById("s8");
      inputVal.style.backgroundColor = "#FFFB99";
  var inputVal = document.getElementById("s9");
      inputVal.style.backgroundColor = "#FFFB99";


  document.getElementById("result").innerHTML = "Who will be the Winner?";
  document.getElementById("status").innerHTML = "Player X, make a move.";

}

// store move function:
var board = ["","","","","","","","",""];

function storeMove(){
  board[0] = document.getElementById("s1").value;
  board[1] = document.getElementById("s2").value;
  board[2] = document.getElementById("s3").value;
  board[3] = document.getElementById("s4").value;
  board[4] = document.getElementById("s5").value;
  board[5] = document.getElementById("s6").value;
  board[6] = document.getElementById("s7").value;
  board[7] = document.getElementById("s8").value;
  board[8] = document.getElementById("s9").value;
  checkWin();
  boardMove1();
  playerXTurn();
}

//Board Moves/ Blocks win
function boardMove1(){
  var x = "X";
  var o = "O";
  if (board[4]==x && board[7]==""){
    var boardCell = document.getElementById("s8");
    boardCell.style.backgroundColor = "#ADFCCD";
    boardCell.style.color = "#01502F";
    document.getElementById("s8").value = o;
    board[7] == o;
  }
  else if (board[7]=="" && ((board[6]==x && board[8]==x) || (board[1]==x && board[4]==x))){
    var boardCell = document.getElementById("s8");
    boardCell.style.backgroundColor = "#ADFCCD";
    boardCell.style.color = "#01502F";
    document.getElementById("s8").value = o;
    board[7] == o;
  }
  else if (board[3]=="" && ((board[4]==x && board[5]==x) || (board[4]==o && board[5]==o)|| (board[0]==x && board[6]==x))){
    var boardCell = document.getElementById("s4");
    boardCell.style.backgroundColor = "#ADFCCD";
    boardCell.style.color = "#01502F";
    document.getElementById("s4").value = o;
    board[3] == o;
  }
  else if (board[4]==x && board[3]==x && board[5]==""){
    var boardCell = document.getElementById("s6");
    boardCell.style.backgroundColor = "#ADFCCD";
    boardCell.style.color = "#01502F";
    document.getElementById("s6").value = o;
    board[5] == o;
  }
  else if (board[2]=="" && ((board[4]==x && board[6]==x) || (board[4]==o && board[6]==o) || (board[0]==x && board[1]==x) || (board[5]==x && board[8]==x))){
    var boardCell = document.getElementById("s3");
    boardCell.style.backgroundColor = "#ADFCCD";
    boardCell.style.color = "#01502F";
    document.getElementById("s3").value = o;
    board[2] == o;
  }
  else if (board[6]=="" && ((board[4]==x && board[2]==x) || (board[7]==x && board[8]==x) || (board[0]==x && board[3]==x))){
    var boardCell = document.getElementById("s7");
    boardCell.style.backgroundColor = "#ADFCCD";
    boardCell.style.color = "#01502F";
    document.getElementById("s7").value = o;
    board[6] == o;
  }
  else if (board[8]=="" && ((board[6]==x && board[7]==x) || (board[6]==o && board[7]==o) || (board[2]==x && board[5]==x) || (board[0]==x && board[4]==x) || (board[0]==o && board[4]==o))){
    var boardCell = document.getElementById("s9");
    boardCell.style.backgroundColor = "#ADFCCD";
    boardCell.style.color = "#01502F";
    document.getElementById("s9").value = o;
    board[8] == o;
  }
  else if (board[0]=="" && ((board[4]==x && board[8]==x) || (board[4]==o && board[8]==o))){
    var boardCell = document.getElementById("s1");
    boardCell.style.backgroundColor = "#ADFCCD";
    boardCell.style.color = "#01502F";
    document.getElementById("s1").value = o;
    board[0] == o;
  }
  else if (board[0]=="" && ((board[1]==x && board[2]==x) || (board[1]==o && board[2]==o) || (board[3]==x && board[6]==x))){
    var boardCell = document.getElementById("s1");
    boardCell.style.backgroundColor = "#ADFCCD";
    boardCell.style.color = "#01502F";
    document.getElementById("s1").value = o;
    board[0] == o;
  }
  else if (board[5]=="" && ((board[2]==x && board[8]==x) || (board[2]==o && board[8]==o))){
    var boardCell = document.getElementById("s6");
    boardCell.style.backgroundColor = "#ADFCCD";
    boardCell.style.color = "#01502F";
    document.getElementById("s6").value = o;
    board[5] == o;
  }
  else if (board[1]=="" && ((board[0]==x && board[2]==x) || (board[0]==o && board[2]==o))) {
    var boardCell = document.getElementById("s2");
    boardCell.style.backgroundColor = "#ADFCCD";
    boardCell.style.color = "#01502F";
    document.getElementById("s2").value = o;
    board[1] == o;
  }
  else if (board[4]=="") {
    var boardCell = document.getElementById("s5");
    boardCell.style.backgroundColor = "#ADFCCD";
    boardCell.style.color = "#01502F";
    document.getElementById("s5").value = o;
    board[4] == o;
  }
  else if (board[0]==""){
    var boardCell = document.getElementById("s1");
    boardCell.style.backgroundColor = "#ADFCCD";
    boardCell.style.color = "#01502F";
    document.getElementById("s1").value = o;
    board[0] == o;
  }
  else if (board[2]==""){
    var boardCell = document.getElementById("s3");
    boardCell.style.backgroundColor = "#ADFCCD";
    boardCell.style.color = "#01502F";
    document.getElementById("s3").value = o;
    board[2] == o;
  }
  else if (board[7]==""){
    var boardCell = document.getElementById("s8");
    boardCell.style.backgroundColor = "#ADFCCD";
    boardCell.style.color = "#01502F";
    document.getElementById("s8").value = o;
    board[7] == o;
  }
  else if (board[3]==""){
    var boardCell = document.getElementById("s4");
    boardCell.style.backgroundColor = "#ADFCCD";
    boardCell.style.color = "#01502F";
    document.getElementById("s4").value = o;
    board[3] == o;
  }
  else if (board[5]==""){
    var boardCell = document.getElementById("s6");
    boardCell.style.backgroundColor = "#ADFCCD";
    boardCell.style.color = "#01502F";
    document.getElementById("s6").value = o;
    board[5] == o;
  }
}



// Check Winner Function:
var winner;
function checkWin(){
  //var winner;
  if(board[0] == board[1] && board[1] == board[2] && board[0] != ""){
    winner = board[0];
    document.getElementById('result').innerHTML = '!! The Winner is Player ' + board[0] + ' !!';
  }
  else if (board[3] == board[4] && board[4] == board[5] && board[3] != ""){
    winner = board[3];
    document.getElementById('result').innerHTML = '!! The Winner is Player ' + board[3] + ' !!';
  }
  else if (board[6] == board[7] && board[7] == board[8] && board[6] != ""){
    document.getElementById('result').innerHTML = '!! The Winner is Player ' + board[6] + ' !!';
    winner = board[6]
  }
  else if (board[0] == board[3] && board[3] == board[6] && board[0] != ""){
    document.getElementById('result').innerHTML = '!! The Winner is Player ' + board[0] + ' !!';
    winner = board[0];
  }
  else if (board[1] == board[4] && board[4] == board[7] && board[1] != ""){
    winner = board[1];
    document.getElementById('result').innerHTML = '!! The Winner is Player ' + board[1] + ' !!';
  }
  else if (board[2] == board[5] && board[5] == board[8] && board[2] != ""){
    winner = board[2];
    document.getElementById('result').innerHTML = '!! The Winner is Player ' + board[2] + ' !!';
  }
  else if (board[0] == board[4] && board[4] == board[8] && board[0] !== ""){
    winner = board[0];
    document.getElementById('result').innerHTML = '!! The Winner is Player ' + board[0] + ' !!';
  }
  else if (board[2] == board[4] && board[4] == board[6] && board[2] !==""){
    winner = board[2];
  }

    else{
      var tie = 1;
      for (i = 0; i < board.length; i++){
        if (board[i] == ""){
          tie = 0;
        }
      }
      if (tie == 0) {
        //alert("Keep Playing, no winner yet!");
      }
      else{
        //alert("You have tied!");
        document.getElementById("result").innerHTML = "!! DRAW - Reset to Play Again !!";
      }
    }
  }
