const bodyTypes = [
    {
        name : "body 1",
        sex : "male"
    },
    {
        name : "body 2",
        sex : "female"
    }
];

const raceClassOptions = [
    {
        race : "human",
        faction : "alliance",
        classes: ['warrior', 'paladin', 'rogue', 'priest', 'mage', 'warlock']
    },
    {
        race : "dwarf",
        faction : "alliance",
        classes: ['warrior', 'paladin', 'hunter', 'rogue', 'priest']
    },
    {
        race : "night elf",
        faction : "alliance",
        classes: ['warrior', 'hunter', 'rogue', 'priest', 'druid']
    },
    {
        race : "gnome",
        faction : "alliance",
        classes: ['warrior', 'rogue', 'mage', 'warlock']
    },
    {
        race : "orc",
        faction : "horde",
        classes: ['warrior', 'hunter', 'rogue', 'shaman', 'warlock']
    },
    {
        race : "undead",
        faction : "horde",
        classes: ['warrior', 'rogue', 'priest', 'mage', 'warlock']
    },
    {
        race : "tauren",
        faction : "horde",
        classes: ['warrior', 'hunter', 'shaman', 'druid']
    },
    {
        race : "troll",
        faction : "horde",
        classes: ['warrior', 'hunter', 'rogue', 'priest', 'shaman', 'mage']
    }
]
var audio = new Audio('sounds/murloc-sound.mp3');

var factionChoice = 'both';

document.getElementById("btn-generate-random").addEventListener("click", function(e){
    this.disabled = true;
    document.getElementById('loading').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    audio.play();
    generateRanbdomCharacter();
    setTimeout(showResult, 2000);
});

document.getElementById('faction-choice').addEventListener('change', function(e){
    factionChoice = this.value;
});

function generateRanbdomCharacter() {
    let shuffledRaceClassOptions = shuffleArray(raceClassOptions);

    if(factionChoice !== "both")
        shuffledRaceClassOptions = shuffledRaceClassOptions.filter((option) => option.faction == factionChoice);

    var randomBodyType = bodyTypes[Math.floor(Math.random() * bodyTypes.length)];
    var randomRace = shuffledRaceClassOptions[Math.floor(Math.random() * shuffledRaceClassOptions.length)];

    suhffleRandomRace = shuffleArray(randomRace.classes);
    var randomClass = suhffleRandomRace[Math.floor(Math.random() * suhffleRandomRace.length)];
    
    document.getElementById('faction-img').src = `img/factions/${randomRace.faction}.png`
    document.getElementById("faction-text").innerHTML = randomRace.faction.toUpperCase();

    document.getElementById('race-img').src = `img/races/${randomRace.race}-${randomBodyType.sex}.png`
    document.getElementById("race-text").innerHTML = `${randomBodyType.sex.toUpperCase()} ${randomRace.race.toUpperCase()}`;

    document.getElementById('class-img').src = `img/classes/${randomClass}.png`
    document.getElementById("class-text").innerHTML = randomClass.toUpperCase();
}

function showResult(){
    document.getElementById('loading').style.display = 'none';
    document.getElementById('result').style.display = 'flex';
    document.getElementById('btn-generate-random').disabled = false;
}

function capitalizeFirstLetter(str)
{
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function shuffleArray(arr)
{
     return arr.map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
}

