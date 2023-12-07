Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality:10
});

Webcam.attach('#camera');

function takeSnapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="imagemCapturada" src="'+data_uri+'"/>';
    });
    }

console.log('versão ml5:', ml5.version);

filtroImagens = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/fYkl2JW3H/model.json', modelLoaded);

function modelLoaded() {
    console.log("Modelo Carregado");
}

function check() {
    ImagemCapturada = document.getElementById("imagemCapturada");
    filtroImagens.classify(captura, gotResult);
}

function gotResult(error, results) {
    if(error) {
    console.error(error)
    }
    else {
    console.log(results);
    document.getElementById("nomeObjeto").innerHTML = results[0].label;
    document.getElementById("nomeObjeto").innerHTML = results[0].confidence.toFixed(2);
    }
    }