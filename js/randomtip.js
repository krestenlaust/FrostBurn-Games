//No sneak peaks
var loadingtips = [
    'Did you know <b>Frostburn-Games</b> spelled backwards is <b>semaG-nrubtsorF</b>.',
    'Did you know this is the second loading tip?',
    'Did you know this loading tip is silly?',
    'Did you know why the chicken walked over the road?',
    'When I was little I thought <i>RPG</i> meant the game included an RPG.',
    'When I was little I never liked Friv, never knew why.',
    'I was born on 08/07/2002 so my birthday is the 7. August.',
    'I always liked loading tips, that is why I created these.',
    'My first programming language was HTML, then Python and now I know 6 languages.',
    'I am the founder, lead programmer and CEO of Frostburn-games.',
]
var randomIndex = Math.floor(Math.random() * loadingtips.length);
var randomElement = loadingtips[randomIndex];
document.getElementById("randomtip").innerHTML = randomElement;
