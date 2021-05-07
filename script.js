function l(){
document.getElementById("b").innerHTML = `
        <div class=content>
            <h1 id="h1">Velkommen til min portefølje!</h1>
            <img id="monkey" src="monkey.jpg" onclick="clickMonkey()">
            <p id="tekst">Selfie :) Klik mig?</p>
        </div>
`
}

function clickMonkey(){
    document.title = 'Hey m8';
    document.getElementById('h1').innerHTML = 'Vælg en side';
    document.getElementById('tekst').innerHTML =`

<ul class=navbar>
    <li style="border-left: 1px solid black;"><p onclick="l()">Homee</p></li>
    <li><a href="projects.html">Projects</a></li>
    <li><a href="https://www.github.com/edvardxyz">Github</a></li>
    <li><a href="contact.html">Contact</a></li>
</ul>

<p id= "main">

    Mauris tempus ante quis porta tristique. Phasellus ultrices cursus tincidunt. Aenean feugiat in elit in euismod. Curabitur nec ante felis. Donec porta lacus at augue vulputate, eget pharetra libero accumsan.
    Curabitur ut leo aliquam, ultrices velit in, euismod augue. Curabitur vel nulla lacus. Quisque malesuada justo urna, posuere egestas enim scelerisque eu. Morbi eget mollis purus.
    Pellentesque vehicula, nisi ac consectetur porttitor, dolor velit laoreet odio, sit amet venenatis velit felis non neque. Quisque ut justo eu metus vulputate blandit.
    Nulla nec eros et ligula commodo venenatis. Sed in metus a odio fringilla eleifend nec eget dolor.

</p>



`;
    var img = document.getElementById('monkey');
    img.parentNode.removeChild(img);

}

function clickTekstRemove(){
    document.getElementById('tekst').innerHTML = '';
}
