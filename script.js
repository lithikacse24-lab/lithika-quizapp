const quiz=[
{
q:"What does HTML stand for?",
a:["Hyper Text Markup Language","High Text Machine Language","Hyper Transfer Markup Language","None"],
correct:0
},
{
q:"Which language styles web pages?",
a:["HTML","CSS","Python","Java"],
correct:1
},
{
q:"Which language adds interactivity to websites?",
a:["Java","C++","JavaScript","SQL"],
correct:2
}
];

let index=0;
let score=0;
let answered=false;

load();

function load(){

answered=false;

document.getElementById("question").innerText=quiz[index].q;

let optionsHTML="";

quiz[index].a.forEach((opt,i)=>{
optionsHTML+=`<div class="option" onclick="select(this,${i})">${opt}</div>`;
});

document.getElementById("options").innerHTML=optionsHTML;

document.getElementById("progress").innerText=
`Question ${index+1} / ${quiz.length}`;
}

function select(el,i){

if(answered) return;

answered=true;

let options=document.querySelectorAll(".option");

options[quiz[index].correct].classList.add("correct");

if(i!==quiz[index].correct){
el.classList.add("wrong");
}else{
score++;
}
}

function next(){

if(!answered) return alert("Select an answer");

index++;

if(index<quiz.length){
load();
}else{
document.querySelector(".quiz-box").innerHTML=
`<h2>Your Score: ${score}/${quiz.length}</h2>
<button onclick="location.reload()">Restart</button>`;
}
}

function toggleMode()
{

document.body.classList.toggle("dark");

let btn=document.getElementById("modeBtn");

if(document.body.classList.contains("dark")){
btn.innerText="☀️ Light Mode";
}else{
btn.innerText="🌙 Dark Mode";
}

}