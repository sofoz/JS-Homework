//in process: звездный рейтинг (пока только заготовка), 'подсказки' c  доп инфо 
const container = document.querySelector('.card-container');

document.addEventListener("DOMContentLoaded", function (e) {
    getSuperheroes();
});

function getSuperheroes() {

    //получение инфо от сервера
    fetch('./assets/js/heroes.json')

        //then выполнится только после того, как закончится команда fetch
        //конвертация ответа в json
        .then(response => response.json())
        .then(heroes => {
            let heroesCards = '';

            for (let hero of heroes) {
                heroesCards += `
                <div class="card">
                    <img class="card__img" src="${hero.photo}" alt="image">
                    <div class="card__name" id="${hero.userName}">${hero.name}</div>
                    <div class="card__content">
                        <p class="card__text">Вселенная: ${hero.universe}</p>
                        <p class="card__text">Альтер эго: ${hero.alterego}</p>
                        <p class="card__text">Род деятельности: ${hero.occupation}</p>
                        <p class="card__text">Друзья: ${hero.friends}</p>
                        <p class="card__text">Суперсилы: ${hero.superpower}</p>
                    </div>
                    <div class="rating">
                        <input type="radio" id="star_1" name=${hero.userName} value="1">
                        <input type="radio" id="star_2" name=${hero.userName} value="2">
                        <input type="radio" id="star_3" name=${hero.userName} value="3">
                        <input type="radio" id="star_4" name=${hero.userName} value="4">
                        <input type="radio" id="star_5" name=${hero.userName} value="5">
                    </div>
                </div>
                    `

            }
            container.innerHTML = heroesCards;

            let ratings = document.querySelectorAll('.rating');
            for (let rating of ratings) {
                rating.addEventListener('click', (e) => {
                    localStorage.setItem('batman', document.querySelector('input[name="batman"]:checked').value);
                    localStorage.setItem('superman', document.querySelector('input[name="superman"]:checked').value);
                    localStorage.setItem('ironman', document.querySelector('input[name="ironman"]:checked').value);
                    localStorage.setItem('spiderman', document.querySelector('input[name="spiderman"]:checked').value);
                    localStorage.setItem('cap', document.querySelector('input[name="cap"]:checked').value);
                    localStorage.setItem('tor', document.querySelector('input[name="tor"]:checked').value);
                    localStorage.setItem('halk', document.querySelector('input[name="halk"]:checked').value);
                    localStorage.setItem('wonderwoman', document.querySelector('input[name="wonderwoman"]:checked').value);
                    localStorage.setItem('widow', document.querySelector('input[name="widow"]:checked').value);
                    localStorage.setItem('deadpool', document.querySelector('input[name="deadpool"]:checked').value);
                })
            }

            if (localStorage.getItem('batman')) {
                let batman = localStorage.getItem('batman');
                document.querySelector('input[name="batman"][value="' + batman + '"]').setAttribute('checked', 'checked');
            }

            if (localStorage.getItem('superman')) {
                let superman = localStorage.getItem('superman');
                document.querySelector('input[name="superman"][value="' + superman + '"]').setAttribute('checked', 'checked');
            }

            if (localStorage.getItem('ironman')) {
                let ironman = localStorage.getItem('ironman');
                document.querySelector('input[name="ironman"][value="' + ironman + '"]').setAttribute('checked', 'checked');
            }

            if (localStorage.getItem('spiderman')) {
                let spiderman = localStorage.getItem('spiderman');
                document.querySelector('input[name="spiderman"][value="' + spiderman + '"]').setAttribute('checked', 'checked');
            }

            if (localStorage.getItem('cap')) {
                let cap = localStorage.getItem('cap');
                document.querySelector('input[name="cap"][value="' + cap + '"]').setAttribute('checked', 'checked');
            }

            if (localStorage.getItem('tor')) {
                let tor = localStorage.getItem('tor');
                document.querySelector('input[name="tor"][value="' + tor + '"]').setAttribute('checked', 'checked');
            }

            if (localStorage.getItem('halk')) {
                let halk = localStorage.getItem('halk');
                document.querySelector('input[name="halk"][value="' + halk + '"]').setAttribute('checked', 'checked');
            }

            if (localStorage.getItem('wonderwoman')) {
                let wonderwoman = localStorage.getItem('wonderwoman');
                document.querySelector('input[name="wonderwoman"][value="' + wonderwoman + '"]').setAttribute('checked', 'checked');
            }

            if (localStorage.getItem('widow')) {
                let widow = localStorage.getItem('widow');
                document.querySelector('input[name="widow"][value="' + widow + '"]').setAttribute('checked', 'checked');
            }

            if (localStorage.getItem('deadpool')) {
                let deadpool = localStorage.getItem('deadpool');
                document.querySelector('input[name="deadpool"][value="' + deadpool + '"]').setAttribute('checked', 'checked');
            }
        })
        .catch(error => console.log(error));
}