function cvenkf() {
var div4 = document.getElementById('cvenk_dio');
div4.hidden = !div4.hidden;
console.log("Ulazak u funkciju cvenkf");

var vreme = new Date();
document.getElementById("vreme").innerHTML = [vreme.getHours()+":"+vreme.getMinutes()];

var datum = new Date();
var mjeseci = ["Sij", "Velj", "Ožu", "Tra", "Svi", "Lip", "Srp", "Kol", "Ruj", "Lis", "Stu", "Pro"];
document.getElementById("datum").innerHTML = mjeseci[datum.getMonth()];
}

function okrenif() {
var div4 = document.getElementById('okreni_dio');
div4.hidden = !div4.hidden;
console.log("Ulazak u funkciju okrenif");
}

function skalirajf() {
var div4 = document.getElementById('skaliraj_dio');
div4.hidden = !div4.hidden;
console.log("Ulazak u funkciju skalirajf");
}

function datum(){
var datum = new Date();
var mjeseci = ["Sij", "Velj", "Ožu", "Tra", "Svi", "Lip", "Srp", "Kol", "Ruj", "Lis", "Stu", "Pro"];
document.getElementById("datum").innerHTML = mjeseci[datum.getMonth()];
}

function vreme(){
var vreme = new Date();
document.getElementById("vreme").innerHTML = [vreme.getHours()+":"+vreme.getMinutes()];
}

function zrcali() {
        var img = document.getElementById('slika');
        img.style.transform ='scaleX(-1)';
}

function slajder(){
    var img = document.getElementById('slika');
    img.style.transform ='height(document.form.txtNum.value)';
    img.style.transform ='width(document.form.txtNum.value)';
}
