let presentPerfect = document.getElementById('present-perfect');
let pastSimple = document.getElementById('past-simple');
let pastParticiple = document.getElementById('past-participle');

function hidePresentPerfect(){
    if(presentPerfect.style.visibility === "visible"){
        presentPerfect.style.visibility = "hidden";
    }
    else{
        presentPerfect.style.visibility = "visible";
    }
}
function hidePastSimple(){
    if(pastSimple.style.visibility === "visible"){
        pastSimple.style.visibility = "hidden";
    }
    else{
        pastSimple.style.visibility = "visible";
    }
}
function hidePastParticiple(){
    if(pastParticiple.style.visibility === "visible"){
        pastParticiple.style.visibility = "hidden";
    }
    else{
        pastParticiple.style.visibility = "visible";
    }
}