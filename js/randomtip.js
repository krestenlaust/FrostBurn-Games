//No sneak peaks
var loadingtips = [
    'Did you know <b>Frostburn-Games</b> spelled backwards is <b>semaG-nrubtsorF</b>.',
    'Did you know this is the second loading tip?.',
    'Did you know this loading tip is silly?.',
    'Did you know why the chicken walked over the road?'
]
var randomIndex = Math.floor(Math.random() * loadingtips.length);
var randomElement = loadingtips[randomIndex];
document.getElementById("randomtip").innerHTML = randomElement;
