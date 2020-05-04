positionLog = 

[["a8","b8","c8","d8","e8","f8","g8","h8"],

  ["a7","b7","c7","d7","e7","f7","g7","h7"],

 ["a6","b6","c6","d6","e6","f6","g6","h6"],

 ["a5","b5","c5","d5","e5","f5","g5","h5"],

 ["a4","b4","c4","d4","e4","f4","g4","h4"],

 ["a3","b3","c3","d3","e3","f3","g3","h3"],

 ["a2","b2","c2","d2","e2","f2","g2","h2"],

 ["a1","b1","c1","d1","e1","f1","g1","h1"]];



var queen = {
  direction:"S",
  posX : 4,
  posY : 0,
  Position : "e8"
};

function execute()
{
    console.log("reach");
    var x = document.getElementById("dir").value;
    console.log(x);
    var y = parseInt(document.getElementById("hop").value);
    console.log(y);
    changeDirection(x);
    jumpForward(y);
    console.log("X:"+queen.posX+" Y:"+queen.posY );
    if(check(queen.posY,queen.posX))
    {
        document.getElementById("demo").innerHTML = "Cannot Move in this direction or cannot jump to "+y+" number of steps";
    }
    else
    {
        document.getElementById("demo").innerHTML = "Position :"+queen.Position;
        document.getElementById("x-axis").innerHTML = "X-axis : "+queen.posY;
        document.getElementById("y-axis").innerHTML = "Y-axis : "+queen.posX;queen.Position=positionLog[queen.posY][queen.posX];
    }
}

function jumpForward(n)
{
    switch(queen.direction)
    {
        case "N":
            queen.posY=queen.posY-n;
            break;
        case "S":
            queen.posY=queen.posY+n;
            break;
        case "E":
            queen.posX=queen.posX+n;
            break;
        case "W":
            queen.posX=queen.posX-n;
            break;
        case "NE":
            queen.posY=queen.posY-n;
            queen.posX=queen.posX+n;
            break;
        case "NW":
            queen.posY=queen.posY-n;
            queen.posX=queen.posX+n;
            break;
        case "SE":
            queen.posY=queen.posY+n;
            queen.posX=queen.posX+n;
            break;
        case "SW":
            queen.posY=queen.posY+n;
            queen.posX=queen.posX+n;
            break;
    }
    if(check(queen.posY,queen.posX))
    {
        return;
    }
    else
    {
        queen.Position=positionLog[queen.posY][queen.posX];
    }
    
}

function changeDirection(dir)
{
    queen.direction=dir;
}

function check(x,y)
{
    if(x<0 || y<0 || x>7 || y>7)
        {
            console.error("Out of bounds");
            return true;
        }
        return false;
}