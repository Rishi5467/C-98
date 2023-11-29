var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
    recognition.start();
}

recognition.onresult=function(event) {
    console.log(event);
    var Content=event.results[0][0].transcript;
    console.log(Content);
    if(Content=="selfie"){
        speak();
    }
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data="Taking your selfie in 5 seconds"
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
}

camera=document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    img_format:'jpeg',
    jpeg_quality:90
});