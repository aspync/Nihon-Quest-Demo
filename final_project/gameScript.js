let scene = 0;
let safety = 0;
let arrow;
let backArrow;
let textBox;
let name = "";
let txt = "";
let rinSmile1;
let rinSmile2;
let rinSmile3;
let rinLaughing;
let bg;
let logo;
let extra;
let konnichiwa;
let ohayou;
let kombanwa;
let oyasumi;
let eigoOHanasemasu;
let mottoYukkuri;
let mouIchido;
let nihongoGa;
let soreWo;
let wakarimasen;

let rinSprites = [];

function preload() {
    arrow = loadImage("assets/UI/arrow.png");
    backArrow = loadImage('assets/UI/back_arrow.png');
    logo = loadImage('assets/nihon_quest_logo.png');
    konnichiwa = loadSound('assets/sounds/konnichiwa.mp3');
    ohayou = loadSound('assets/sounds/ohayou_gozaimasu.mp3');
    kombanwa = loadSound('assets/sounds/konbanwa.mp3');
    oyasumi = loadSound('assets/sounds/oyasumi_nasai.mp3');
    eigoOHanasemasu = loadSound('assets/sounds/eigo_o_hanasemasu.mp3');
    mottoYukkuri = loadSound('assets/sounds/motto_yukkuri_hanashite_kudasai.mp3');
    mouIchido = loadSound('assets/sounds/mou_ichido_onegai.mp3');
    nihongoGa = loadSound('assets/sounds/nihongo_ga_sukoshi_shika_hanasemasen.mp3');
    soreWo = loadSound('assets/sounds/sore_wo_eigo_de_iu_to.mp3');
    wakarimasen = loadSound('assets/sounds/wakarimasen.mp3');
    rinSprites.push(loadImage('assets/Rin/rin_smile1.png'));
    rinSprites.push(loadImage('assets/Rin/rin_smile2.png'));
    rinSprites.push(loadImage('assets/Rin/rin_smile3.png'));
    rinSprites.push(loadImage('assets/Rin/rin_laughing.png'));
}

function setup() {
    let canvas = createCanvas(700, 600);
    canvas.id("gameCanvas");
    textBox = loadImage('assets/UI/DialogueBar.png');
    bg = loadImage('assets/backgrounds/house.png');
}

let scenes = [{
    name: "Rin",
    txt: "I should probably teach you some common Japanese phrases.",
    spriteIndex: 0
}, {
    name: "Rin",
    txt: "The first phrase you should learn is how to say hello!",
    spriteIndex: 1
}, {
    name: "Rin",
    txt: "Of course, the one that everyone knows is 'konnichiwa.'",
    spriteIndex: 0
}, {
    name: "Rin",
    txt: "However, we only really use that greeting in the afternoon, since it also translates to 'good afternoon.'",
    spriteIndex: 0
}, {
    name: "Rin",
    txt: "To say 'good morning,' you would say 'ohayou gozaimasu.' Try it!",
    spriteIndex: 1
}, {
    name: "Rin",
    txt: "Great! To say 'good evening,' you would say 'kombanwa.' Your turn!",
    spriteIndex: 2
}, {
    name: "Rin",
    txt: "Amazing! Finally, the last phrase is 'goodnight,' which is a farewell instead of a greeting. The word is 'oyasumi nasai.' You try!",
    spriteIndex: 2
}, {
    name: "Rin",
    txt: "English is not widely spoken in Japan, so it is important to learn as much of the language you can. To ask if someone speaks English, you say 'eigo o hanasemasu.'",
    spriteIndex: 0
}, {
    name: "Rin",
    txt: "If you need to explain why you need someone who speaks English, you can tell them you only speak a little Japanese. Try saying 'nihongo ga sukoshi shika hanasemasen.'",
    spriteIndex: 1
}, {
    name: "Rin",
    txt: "If you need clarification on what someone is saying, you can say 'wakarimasen.' This means 'I don't understand.'",
    spriteIndex: 2
}, {
    name: "Rin",
    txt: "If you need someone to repeat what they said, then you can say 'mou ichido onegai.'",
    spriteIndex: 1
}, {
    name: "Rin",
    txt: "If you need someone to speak slower, you can ask them 'motto yukkuri hanashite kudasai.'",
    spriteIndex: 2
}, {
    name: "Rin",
    txt: "Finally, if you come across a word you don't know, there are a couple of ways to ask for clarification. You can ask '___ te iu no imi wa nan desu ka?' to ask what something means, filling in the blank with the word in question.",
    spriteIndex: 0
}, {
    name: "Rin",
    txt: "You can also ask 'What is that in English?' by saying 'sore o eigo de iu to?'",
    spriteIndex: 1
}, {
    name: "Rin",
    txt: "Very good job! Now you know how to speak Japanese!",
    spriteIndex: 3
}];

function checkJapaneseWord(word) {
    const jpWords = ['konnichiwa', 'ohayou gozaimasu', 'kombanwa', 'oyasumi nasai'];
    return jpWords.includes(word.toLowerCase());
}

function draw() {
    background(bg);
    image(rinSprites[scenes[scene].spriteIndex], 180, 125, 300, 300);
    image(textBox, 0, 400, 570, 220);
    image(arrow, 575, 500, 100, 50);
    image(backArrow, 575, 430, 100, 50);
    fill(0);
    textSize(25);
    textAlign(LEFT);
    text(scenes[scene].txt, 46, 458, 521, 566);
    textAlign(CENTER);
    text(scenes[scene].name, 45, 415, 160);
}

function mousePressed() {
    if (mouseX >= 570 && mouseY >= 515 && scene < scenes.length - 1) {
        scene += 1;
    } else if (mouseX >= 570 && mouseY >= 515 && scene === scenes.length - 1) {
        scene = 0;
    }

    if (mouseX >= 570 && mouseY >= 445 && mouseY < 515 && scene != 10 && scene > 0 && scene < scenes.length) {
        scene -= 1;
    } else if (mouseX >= 570 && mouseY >= 445 && mouseY < 515 && scene === 0) {
        scene = scenes.length - 1;
    }
}