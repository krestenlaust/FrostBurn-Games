//No sneak peaks
var loadingtips = [
    'Did you know <b>Frostburn-Games</b> spelled backwards is <b>semaG-nrubtsorF</b>.',
    'Did you know this is the second loading tip?',
    'Did you know this loading tip is silly?',
    'Did you know why the chicken walked over the road?',
    'When I was little I thought <i>RPG</i> meant the game included an RPG'
]
var randomIndex = Math.floor(Math.random() * loadingtips.length);
var randomElement = loadingtips[randomIndex];
document.getElementById("randomtip").innerHTML = randomElement;
