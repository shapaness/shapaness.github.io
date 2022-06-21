
var divquest = document.getElementsByClassName("questiondiv");
const len = divquest.length;
for (var i = 1; i < divquest.length; i++)
  divquest[i].style.display  = "none";
document.getElementById('calcul').style.display = "none";
document.getElementById('result').style.display = "none";

var barprog = document.getElementById('barimg')
var prog = 0;
var adv = 95 / divquest.length;

const resumof = {
  "WillSmith":"",
  "StephenLang":"",
  "HugeJackman":"",
  "ArniScha":"",
  "TheRock":"",
  "VinEssence":"",
  "SilverStoneStalone":"",
  "MarkWallberg":"",
  "JCVD":"",
  "JasonMomoa":"",
  "JasonStatam":"",
  "ChuckNoris":"",
  "RyanReynold":"",
  "RobertDeniro":"",
  "JeanReno":"",
  "BruceLi":"",
  "JackieChan":"",
  "BruceWilis":"",
  "LianNilson":"",
  "JohnCena":"",
  "ChanningStatum":"",
  "IdrisElba":"",
  "JohnTravolta":"",
  "KeanuRivvvvss":"",
  "DaniCreg":"",
  "SamuelEljackson":"",
  "HarisonFord":"",
  "NicolaSkage":"";
  "RobertPatinson":"",
  "HarryStyle":""
};
const tokey = [
  "WillSmith",
  "StephenLang",
  "HugeJackman",
  "ArniScha",
  "TheRock",
  "VinEssence",
  "SilverStoneStalone",
  "MarkWallberg",
  "JCVD",
  "JasonMomoa",
  "JasonStatam",
  "ChuckNoris",
  "RyanReynold",
  "RobertDeniro",
  "JeanReno",
  "BruceLi",
  "JackieChan",
  "BruceWilis",
  "LianNilson",
  "JohnCena",
  "ChanningStatum",
  "IdrisElba",
  "JohnTravolta",
  "KeanuRivvvvss",
  "DaniCreg",
  "SamuelEljackson",
  "HarisonFord",
  "NicolaSkage",
  "RobertPatinson",
  "HarryStyle"
];
var charac = {
  "WillSmith":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  "StephenLang":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  "HugeJackman":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  "ArniScha":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  "TheRock":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  "VinEssence":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  "SilverStoneStalone":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  "MarkWallberg":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  "JCVD":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  "JasonMomoa":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  "JasonStatam":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  "ChuckNoris":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  "RyanReynold":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  "RobertDeniro":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  "JeanReno":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  "BruceLi":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  "JackieChan":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  "BruceWilis":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  "LianNilson":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  "JohnCena":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  "ChanningStatum":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  "IdrisElba":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  "JohnTravolta":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  "KeanuRivvvvss":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  "DaniCreg":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  "SamuelEljackson":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  "HarisonFord":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  "NicolaSkage":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  "RobertPatinson":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  "HarryStyle":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
};

const reponse = [
  [[],[],[],[]],
  [[],[],[],[]],
  [[],[],[],[]],
  [[],[],[],[]],
  [[],[],[],[]],
  [[],[],[],[]],
  [[],[],[],[]],
  [[],[],[],[]],
  [[],[],[],[]],
  [[],[],[],[]],
  [[],[],[],[]],
  [[],[],[],[]],
  [[],[],[],[]],
  [[],[],[],[]],
  [[],[],[],[]],
  [[],[],[],[]],
  [[],[],[],[]],
  [[],[],[],[]],
  [[],[],[],[]]
];


function max(){
  var max = 0;
  var ind = 0;
  for (var i = 0; i < charac.length; i++) {
    if(charac[i][0] > max){
      max = charac[i][0];
      ind = i;
    }
  }
  return ind;
}



function update(i) {
  if (i > prog) {
    if(i == len)
      document.getElementById('calcul').style.display = "inherit";
    else
      divquest[i].style.display  = "inherit";
    prog += 1;
    barprog.style.width = (adv*prog+5) + "%";
  }
}

function calcul(){
  var max = 0;
  var index = 0;
  for (var i = 1; i <= len; i++) {

    var quest = document.getElementsByName('question'+i);
    for (var j = 0; j < quest.length; j++) {

      if(quest[j].checked){
          reponse[i-1][j].forEach((item) => {
            charac[tokey[item]][0] += 1;
            if(charac[tokey[item]][0] > max){
              max = charc[tokey[item]][0];
              index = tokey[item];
            }
          });
      }
    }
  }
  console.log(index);

  document.getElementById('charac').src = "./resources/"+tokey[index]+"png";
  document.getElementById('resum').innerHTML = resumof[tokey[index]];

}


var prob = [];
function testprob(i){
      if(i > len){
          prob.push(calcul());
      }
      else{
      var quest = document.getElementsByName('question'+i);
      for (var j = 0; j < quest.length; j++) {
        quest[j].checked = true;
        testprob(i+1);
      }
    }
}
