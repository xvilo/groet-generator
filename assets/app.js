let form = document.querySelector('form');
if (form == []) {
    throw Error('No button was detected.');
}

let items = {
    "Lorem ipsum": {
        "consectetur adipiscing": ["Optie 1"],
        "elit, Donec": ["Optie 2"],
        "velit justo": ["Optie 3"],
    },
    "dolor sit amet": {
        "consectetur adipiscing": ["Optie 4"],
        "elit, Donec": ["Optie 5"],
        "velit justo": ["Optie 6A", "Optie 6B"],
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    hide();

    e.submitter.classList.add('button--loading');
    let formData = new FormData(e.srcElement);
    let who = formData.get('who');
    let occasion = formData.get('occasion');

    if (who in items) {
        if (occasion in items[who]) {
            setTimeout(function(){
                let possibilities = items[who][occasion];
                let randomItem = possibilities[Math.floor(Math.random() * possibilities.length)]
                showResult(randomItem);
                e.submitter.classList.remove('button--loading');
            }, randomIntFromInterval(100, 1500));

            return;
        }
    }
});

function showResult(text) {
    document.querySelector('.output-text').innerText = text;
    document.querySelector('.output').classList.remove('d-none');
}

function hide() {
    document.querySelector('.output-text').innerText = '';
    document.querySelector('.output').classList.add('d-none');
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
