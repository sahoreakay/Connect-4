var player1=prompt("Hey ! player1 eneter your name you will be blue");
var player1color='rgb(86, 151, 255)';
var player2=prompt("Hey! player 2 enter your name,you will be red");
var player2color='rgb(237, 45, 73)';

var table=$("table tr");


function reportWin(rowNum,colNum)
{
  console.log("you won starting at "+rowNum+"row and "+colNum+"column");
}
function changecolor(rowIndex,colIndex,color)
{
  return table.eq(rowIndex).find('td').eq(colIndex).find("button").css('background-color',color);
}
function returncolor(rowIndex,colIndex){
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

function checkbottom(colIndex){
  var colorreport=returncolor(5,colIndex);
  for(var row=5;row>-1;row--)
  {
    colorreport=returncolor(row,colIndex);

  if(colorreport === 'rgb(128, 128, 128)')
  {
    return row;
  }
}
}

function colormatchcheck(one,two,three,four)
{
  return(one===two && one===three && one===four && one!=='rgb(128, 128, 128)' && one!==undefined)

}
 function horizontalwcheck()
 {
   for(var row=0;row<6;row++)
   {
     for(var col=0;col<4;col++)
     {
       if(colormatchcheck(returncolor(row,col),returncolor(row,col+1),returncolor(row,col+2),returncolor(row,col+3)))
       {
         console.log("horizontal")
         reportWin(row,col);
         return true;
       }
       else {
         continue;
       }
     }
   }
 }
 function verticalwcheck()
 {
   for(var col=0;col<7;col++)
   {
     for(var row=0;row<3;row++)
     {
       if(colormatchcheck(returncolor(row,col),returncolor(row+1,col),returncolor(row+2,col),returncolor(row+3,col)))
       {
         console.log("vertical")
         reportWin(row,col);
         return true;
       }
       else {
         continue;
       }
     }
   }
 }
 function diagonalwcheck()
 {
   for(var col=0;col<5;col++)
   {
     for(var row=0;row<7;row++)
     {
       if(colormatchcheck(returncolor(row,col),returncolor(row+1,col+1),returncolor(row+2,col+2),returncolor(row+3,col+3)))
       {
         console.log("diag")
         reportWin(row,col);
         return true;
       }
       else if(colormatchcheck(returncolor(row,col),returncolor(row-1,col-1),returncolor(row-2,col-2),returncolor(row-3,col-3)))
       {
         console.log("diag");
         reportwin(row,col);
         return true;
       }
       else {
         continue;
       }
     }
   }
 }
function endgame(winningplayer)
{
  $('h2').fadeOut('fast');
  $('h3').fadeOut('fast');
  $('table').fadeOut('fast');
  $('h1').text(winningplayer+":has won refresh the page to play again").css('fontSize','50px');
}
var currentplayer =1;
var currentname=player1;
var currentcolor=player1color;
$('h3').text(player1+":choose the column where you want to put your blue chip");
$(".board button").on('click',function(){
  //this is to find out the column
  var col = $(this).closest('td').index();
  var bottomavailable=checkbottom(col);
  changecolor(bottomavailable,col,currentcolor);
if( horizontalwcheck() || diagonalwcheck() || verticalwcheck())
{
  endgame(currentname);
}
currentplayer =currentplayer * -1 ;
if(currentplayer===1)
{
  currentname=player1;

    $('h3').text(currentname+":player 1 has their turn with blue");

  currentcolor=player1color;
}
else {
  currentname=player2;
  $('h3').text(currentname+":player 2 has their turn with red");
  currentcolor=player2color;
}
})
