var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function Start(){
document.getElementById("textbox").innerHTML="";
recognition.start();
}
recognition.onresult=function(event){
var content=event.results[0][0].transcript;
document.getElementById("textbox").innerHTML=content;
if (content=="take my selfie") {
speak();
console.log("take my selfie");    
}
}
function speak(){
var synth=window.speechSynthesis;
speakdata="Taking Your Selfie In 5 Seconds";
var utterthis=new SpeechSynthesisUtterance(speakdata);
synth.speak(utterthis);
Webcam.attach(camera);
setTimeout(function(){
snap();
save();
},5000);
}
camera=document.getElementById("camera");
Webcam.set({
width:360,
height:250,
image_format:"jpeg",
jpeg_quality:90
});
function snap(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="selfie_img" src="'+data_uri+'"/>'
})
}
function save(){
link=document.getElementById("link");
img=document.getElementById("selfie_img").src;
link.href=img;
link.click();
}