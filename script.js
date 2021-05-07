function l(){
    document.getElementById("b").innerHTML = `

        <div class=content>
            <h1 id="h1">Velkommen til min portefølje!</h1>
            <img id="monkey" src="pics/monkey.jpg" onclick="clickMonkey()">
            <p id="tekst">Selfie :) Klik mig?</p>
        </div>

`;
}
function clickMonkey(){
    document.title = 'Vælg side';
    document.getElementById('h1').innerHTML = 'Vælg side';
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
function mainChange(html,titleh1){
    document.title = titleh1;
    document.getElementById('h1').innerHTML = titleh1;
    document.getElementById('main').innerHTML = html;
}
function projects(){
    mainChange(`
<ul class=listProject>
    <li><p onclick="Libreboot()">Libreboot</p></li>
    <li><p onclick="Chess()">Skak engine</p></li>
    <li><p onclick="_6502()">6502 computer</p></li>
    <li><p onclick="eth()">Ethereum miner</p></li>
    <li><p onclick="dactyl()">Dactyl-Manuform tastatur</p></li>
    <li><p onclick="lib()">Nyt biblioteksprojekt</p></li>
    <li><p onclick="thispjr()">Dette projekt</p></li>

`,'Projektliste');
}
function dactyl(){
   mainChange(`
    Har 3d printet verdens bedste tastatur og lavet alt indmaden <br>
    Det var sku sjovt at lodde nonstop 6 timer ca xD <br>


    <img src="pics/dactyl.jpg">
    <img src="pics/dactyl1.jpg">


<ul class=listProject>
    <li><p onclick="projects()">Tilbage</p></li>

`,'Dactyl-Manuform');
}
function eth(){
    mainChange(`
    Minede Eth et lille stykke tid, med 2 x 580 rx.<br>

    <img src="pics/miner.jpg">

<ul class=listProject>
    <li><p onclick="projects()">Tilbage</p></li>

`, 'Eth miner');
}
function lib(){
    mainChange(`

    Har lige lavet en biblioteksprojekt i C#, da vi skulle lære OOP.
    Er sådan set ikke den store fan af OOP, kan mere lide procedural.
    Det blev aligevel et ret godt bibliotekssystem jeg fik lavet.


<ul class=listProject>
    <li><p onclick="projects()">Tilbage</p></li>

`,'Bibliotek');
}
function _6502(){
    mainChange(`
    Har fulgt Ben Eaters 6502 tutorial på youtube.
    synes det er meget fedt at kende lidt til hvor hardware måder software.
    Så er sådan et projekt mega godt da jeg lærte lidt 6502 assebler.
    Tiløjede også lidt ektra funktionalitet til ben eats version.
    Har lavet 3 knapper som kan skrive karaktere på displayet.
<ul class=listProject>
    <li><p onclick="projects()">Tilbage</p></li>

`,'6502');
}
function Libreboot(){
    mainChange(`
    Engang købte jeg 15 T500 og T400 thinkpads, som jeg skilte ad og overskrev deres bios chip med en libreboot rom.<br>
    Brugte en BeagleBoneBlack med en klips der passede med en 16 pin chip til at programmere den.<br>
    Formǻlet med at libreboot er at deaktivere Intels IME.<br>
    Derved kan man fǻ en 100% open source bærbar.<br>
    Dette er kun muligt med gamle processore, som er core 2 due, som T60, T400, T500 & X200.<br><br>
    <img src="pics/libre.jpg">
<ul class=listProject>
    <li><p onclick="projects()">Tilbage</p></li>
`, 'Libreboot');
}
function Chess(){
    mainChange(`
    Har lavet 2 forskellige skak programmer i C#
    se github
<ul class=listProject>
    <li><p onclick="projects()">Tilbage</p></li>
`, 'Skak');
}
function github(){
    window.location.href = "https://www.github.com/edvardxyz";
}
function thispjr(){
    window.location.href = "https://github.com/MercantecData/portfolio-side-edvardxyz";
}
function contact(){
    mainChange(`
call me on: 999999999999999 <br>
email: yo@yo.yo`,
'Kontakt');
}
