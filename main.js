function setup() {
    canvas=createCanvas(300,300)
    canvas.center()
    background("black")
    canvas.mouseReleased(classifyCanvas)
    synth=window.speechSynthesis
}
function preload() {
    classifier=ml5.imageClassifier("DoodleNet")
}
function draw() {
    strokeWeight(3)
    stroke("white")
    if (mouseIsPressed) {
        line(pmouseX,pmouseY,mouseX,mouseY)
    }
}
function classifyCanvas() {
   classifier.classify(canvas,gotResult) 
}
function gotResult(error,results) {
    if (error) {
        console.error(error)
    }
    console.log(results)
    var result=results[0].label
        document.getElementById("label").innerHTML='Nome: '+results[0].label
        document.getElementById("confidence").innerHTML='Precisão: '+Math.round(results[0].confidence*100)+"%"
        utterThis=new SpeechSynthesisUtterance(results[0].label)
        synth.speak(utterThis)
}
function clearCanvas() {
    background("black")  
}