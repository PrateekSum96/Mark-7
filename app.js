var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");

var serverURL ="https://api.funtranslations.com/translate/yoda.json"

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
    console.log("error occured",error);
    alert("Something wrong with the server! try again after sometime")
}


function clickEventHandler(){
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
    .then(responce=>responce.json())
    .then(json=>{
        var translatedText = json.contents.translated;
        txtOutput.innerText = translatedText;
    })
    .catch(errorHandler)

};

document.addEventListener("click", clickEventHandler)