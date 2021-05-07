function l(){
    document.getElementById("b").innerHTML = `

        <div class=content>
            <h1 id="h1">Velkommen til min portefølje!</h1>
            <img id="monkey" src="pics/monkey.jpg" onclick="clickMonkey()">
            <p id="tekst">Selfie :) Klik mig?</p>
        </div>

`;}

function projects(){
    var titleh1 = 'Projekt Liste';
    document.title = titleh1;
    document.getElementById('h1').innerHTML = titleh1;
    document.getElementById('main').innerHTML = `

<ul class=listProject>
    <li><p onclick="Libreboot()">Libreboot</p></li>
    <li><p onclick="Chess()">Skak engine</p></li>
    <li><p onclick="_6502()">6502 computer</p></li>
    <li><p onclick="eth()">Ethereum miner</p></li>
    <li><p onclick="dactyl()">Dactyl-Manuform tastatur</p></li>
    <li><p onclick="lib()">Nyt biblioteksprojekt</p></li>
    <li><p onclick="thispjr()">Dette projekt</p></li>

`;}
function dactyl(){
    var titleh1 = 'Dactyl-Manuform';
    document.title = titleh1;
    document.getElementById('h1').innerHTML = titleh1;
    document.getElementById('main').innerHTML = `
    Har 3d printet verdens bedste tastatur og lavet alt indmaden <br>
    Det var sku sjovt at lodde nonstop 6 timer ca xD <br>


    <img src="pics/dactyl.jpg">
    <img src="pics/dactyl1.jpg">


<ul class=listProject>
    <li><p onclick="projects()">Tilbage</p></li>

`;}
function eth(){
    var titleh1 = 'Eth miner';
    document.title = titleh1;
    document.getElementById('h1').innerHTML = titleh1;
    document.getElementById('main').innerHTML = `
    Minede Eth et lille stykke tid, med 2 x 580 rx.<br>

    <img src="pics/miner.jpg">


<ul class=listProject>
    <li><p onclick="projects()">Tilbage</p></li>

`;}
function lib(){
    var titleh1 = 'Bibliotek';
    document.title = titleh1;
    document.getElementById('h1').innerHTML = titleh1;
    document.getElementById('main').innerHTML = `

    Har lige lavet en biblioteksprojekt i C#, da vi skulle lære OOP.
    Er sådan set ikke den store fan af OOP, kan mere lide procedural.
    Det blev aligevel et ret godt bibliotekssystem jeg fik lavet.


<ul class=listProject>
    <li><p onclick="projects()">Tilbage</p></li>

`;}
function _6502(){
    var titleh1 = '6502';
    document.title = titleh1;
    document.getElementById('h1').innerHTML = titleh1;
    document.getElementById('main').innerHTML = `

    Har fulgt Ben Eaters 6502 tutorial på youtube.
    synes det er meget fedt at kende lidt til hvor hardware måder software.
    Så er sådan et projekt mega godt da jeg lærte lidt 6502 assebler.
    Tiløjede også lidt ektra funktionalitet til ben eats version.
    Har lavet 3 knapper som kan skrive karaktere på displayet.




<ul class=listProject>
    <li><p onclick="projects()">Tilbage</p></li>

`;}
function Libreboot(){
    var titleh1 = 'Libreboot';
    document.title = titleh1;
    document.getElementById('h1').innerHTML = titleh1;
    document.getElementById('main').innerHTML = `

    Engang købte jeg 15 T500 og T400 thinkpads, som jeg skilte ad og overskrev deres bios chip med en libreboot rom.<br>
    Brugte en BeagleBoneBlack med en klips der passede med en 16 pin chip til at programmere den.<br>
    Formǻlet med at libreboot er at deaktivere Intels IME.<br>
    Derved kan man fǻ en 100% open source bærbar.<br>
    Dette er kun muligt med gamle processore, som er core 2 due, som T60, T400, T500 & X200.<br><br>
    <img src="pics/libre.jpg">

<ul class=listProject>
    <li><p onclick="projects()">Tilbage</p></li>

`;}
function Chess(){
    var titleh1 = 'Skak';
    document.title = titleh1;
    document.getElementById('h1').innerHTML = titleh1;
    document.getElementById('main').innerHTML = `

    Har lavet 2 forskellige skak programmer i C#
    se github


<ul class=listProject>
    <li><p onclick="projects()">Tilbage</p></li>

`;}

function github(){
    window.location.href = "https://www.github.com/edvardxyz";
}
function thispjr(){
    window.location.href = "https://github.com/MercantecData/portfolio-side-edvardxyz";
}

function contact(){
    var titleh1 = 'Kontakt';
    document.title = titleh1;
    document.getElementById('h1').innerHTML = titleh1;

    document.getElementById('main').innerHTML = `
call me on: 999999999999999 <br>
email: yo@yo.yo

`;}

function clickMonkey(){
    document.title = 'Hey m8';
    document.getElementById('h1').innerHTML = 'Vælg en side';
    document.getElementById('tekst').innerHTML =`

<ul class=navbar>
    <li><p style="border-left: 1px solid black;" id="home" onclick="l()">Home</p></li>
    <li><p id="project" onclick="projects()">Projects</p></li>
    <li><p onclick="github()">Github</p></li>
    <li><p id="contact"onclick="contact()">Contact</p></li>
</ul>

<p id= "main">

My name is Edvard, I'm 25 years old, in august 2020 i started studying as a computer technician with a specialty in programming. Since then I've really been dedicating myself to studying more about; computers, hardware, GNU/Linux & programming.

</p>



`;
var img = document.getElementById('monkey');
img.parentNode.removeChild(img);

}

function clickTekstRemove(){
    document.getElementById('tekst').innerHTML = '';
}
