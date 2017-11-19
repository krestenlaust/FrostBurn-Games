var randomgame = Math.floor(Math.random() * 5);
var rancorrect = false
console.log(randomgame);
if (randomgame == "0") {
  console.log("0");
  document.getElementById('randomgamebox').innerHTML = '<div style="margin-left:40px;margin-right:40px;" id="thegame" class="game"><p><image class="tgimages" src="images/zombotron.png" alt="Zombotron" style="width:65px;height:65px" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = "gameplayer.html?game=zombotron";"> Zombotron</p></div>'
  var rancorrect = true
}
if (randomgame == "1") {
  console.log("1");
  document.getElementById('randomgamebox').innerHTML = '<div style="margin-left:40px;margin-right:40px;" id="thegame" class="game"><p><image class="tgimages" src="images/strikeforceheroes.png" alt="Strike Force Heroes" style="width:65px;height:65px" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = "gameplayer.html?game=strikeforceheroes";"> Strike Force Heroes</p></div>'
  var rancorrect = true
}
if (randomgame == "2") {
  console.log("2");
  document.getElementById('randomgamebox').innerHTML = '<div style="margin-left:40px;margin-right:40px;" id="thegame" class="game"><p><image class="tgimages" src="images/stickfigurebadminton2.png" alt="stick figure badminton 2" style="width:65px;height:65px" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = "gameplayer.html?game=stickfigurebadminton2";"> Stick Figure Badminton 2</p></div>'
  var rancorrect = true
}
if (randomgame == "3") {
  console.log("3");
  document.getElementById('randomgamebox').innerHTML = '<div style="margin-left:40px;margin-right:40px;" id="thegame" class="game"><p><image class="tgimages" src="images/plazmaburst2.png" alt="Plazma Burst 2" style="width:65px;height:65px" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = "gameplayer.html?game=plazmaburst2";"> Plazma Burst 2</p></div>'
  var rancorrect = true
}
if (randomgame == "4") {
  console.log("4");
  document.getElementById('randomgamebox').innerHTML = '<div style="margin-left:40px;margin-right:40px;" id="thegame" class="game"><p><image class="tgimages" src="images/strikeforceheroes2.png" alt="Strike Force Heroes 2" style="width:65px;height:65px" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = "gameplayer.html?game=strikeforceheroes2";"> Strike Force Heroes 2</p></div>'
  var rancorrect = true
}
else{
	if(rancorrect==false){
    document.getElementById('randomgamebox').innerHTML = '<div style="margin-left:40px;margin-right:40px;" id="thegame" class="game"><p><image class="tgimages" src="images/bubbletanks2.png" alt="Bubble Tanks 2" style="width:65px;height:65px" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = "gameplayer.html?game=bubbletanks2";"> This is else statement</p></div>'
  }
}
