let form = document.querySelector('form');
if (form == []) {
    throw Error('No button was detected.');
}

let items = {
    "Verbonden": {
        "Gezellig": ['Lieve Feestbeesten', 'Lieve Vrienden', 'Lieve Kameraden', 'Dolle Feestbeesten', 'Dolle Vrienden', 'Dolle Kameraden', 'Amicale Feestbeesten', 'Amicale Vrienden', 'Amicale Kameraden'],
        "Neutraal": ['Lieve Mensen', 'Lieve Personen', 'Lieve Individuen', 'Dolle Mensen', 'Dolle Personen', 'Dolle Individuen', 'Amicale Mensen', 'Amicale Personen', 'Amicale Individuen'],
        "Officieel": ['Lieve Collega\'s', 'Lieve Medewerkers', 'Lieve Zakenpartners', 'Dolle Collega\'s', 'Dolle Medewerkers', 'Dolle Zakenpartners', 'Amicale Collega\'s', 'Amicale Medewerkers', 'Amicale Zakenpartners'],
    },
    "Onzijdig": {
        "Gezellig": ['Aangename Collega\'s', 'Aangename Medewerkers', 'Aangename Zakenpartners', 'Adequate Collega\'s', 'Adequate Medewerkers', 'Adequate Zakenpartners', 'Bestaande Collega\'s', 'Bestaande Medewerkers', 'Bestaande Zakenpartners'],
        "Neutraal": ['Aangename Mensen', 'Aangename Personen', 'Aangename Individuen', 'Adequate Mensen', 'Adequate Personen', 'Adequate Individuen', 'Bestaande Mensen', 'Bestaande Personen', 'Bestaande Individuen'],
        "Officieel":['Aangename Collega\'s', 'Aangename Medewerkers', 'Aangename Zakenpartners', 'Adequate Collega\'s', 'Adequate Medewerkers', 'Adequate Zakenpartners', 'Bestaande Collega\'s', 'Bestaande Medewerkers', 'Bestaande Zakenpartners'],
    },
    "Formeel": {
        "Gezellig": ['Beste Feestbeesten', 'Beste Vrienden', 'Beste Kameraden', 'Geachte Feestbeesten', 'Geachte Vrienden', 'Geachte Kameraden', 'Welkom Feestbeesten', 'Welkom Vrienden', 'Welkom Kameraden'],
        "Neutraal": ['Beste Mensen', 'Beste Personen', 'Beste Individuen', 'Geachte Mensen', 'Geachte Personen', 'Geachte Individuen', 'Welkom Mensen', 'Welkom Personen', 'Welkom Individuen'],
        "Officieel": ['Beste Collega\'s', 'Beste Medewerkers', 'Beste Zakenpartners', 'Geachte Collega\'s', 'Geachte Medewerkers', 'Geachte Zakenpartners', 'Welkom Collega\'s', 'Welkom Medewerkers', 'Welkom Zakenpartners'],
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    hide();

    e.submitter.classList.add('button--loading');
    let formData = new FormData(e.srcElement);
    let who = formData.get('who');
    let occasion = formData.get('occasion');

    if (who === null || occasion === null) {
        stopLoading(e.submitter);
        return;
    }

    if (who in items) {
        if (occasion in items[who]) {
            setTimeout(function(){
                let possibilities = items[who][occasion];
                let randomItem = possibilities[Math.floor(Math.random() * possibilities.length)]
                showResult(randomItem);
                stopLoading(e.submitter);
            }, randomIntFromInterval(250, 1500));

            return;
        }
    }
});

function stopLoading(item) {
    item.classList.remove('button--loading');
}

function showResult(text) {
    document.querySelector('.output-text').innerText = text;
    document.querySelector('.output').classList.remove('visibility-hidden');
}

function hide() {
    document.querySelector('.output-text').innerText = '';
    document.querySelector('.output').classList.add('visibility-hidden');
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
