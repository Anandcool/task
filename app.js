function start(i){

    var percent = document.querySelector(`#progress1_${i} .percent1`)
    var progressing = document.querySelector(`#progress1_${i} .progressing`)
    var circle = document.querySelector(`#progress1_${i} .circle`)

    requestAnimationFrame(startProgress)

    var progress = 0;
    var random = parseInt(Math.random()*100);

    function startProgress(){
        progress += 1;
        if(progress <= random) {
            percent.innerHTML = parseInt(progress) + '%';
            progressing.getElementsByClassName.width = progress + "%";
            circle.style.left = progress + "%";

        }
        requestAnimationFrame(startProgress);
    }
}

for (var i = 0; i < 2; i++) {
    start(i);
}