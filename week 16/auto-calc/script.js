//переменные моделей
let audiModels = ['A1', 'A3', 'A4', 'A4 allroad', 'A5', 'A6', 'A6 allroad', 'A7', 'A8']
let bmvModels = ['X1', 'X2', 'X3', 'X5', 'X6', 'X7'];
let jeepModels = ['Cherokee', 'Commander', 'Compass', 'Grand Cherokee', 'Wrangler'];
let porsheModels = ['Cayenne', 'Panamera', 'Macan'];
let volModels = ['Caddy', 'Golf', 'Passat', 'Polo', 'Touareg'];

//опции бренда и моделей
let brand = document.querySelector('.brand');
let selectModel = document.querySelector('.model');
let models;

//переменные года выпуска
let year = document.querySelector('.year');

//переменные для расчета
let calc = [];

brand.addEventListener('change', (e) => {
    let currentBrand = e.currentTarget.value;

    //базовая стоимость авто + варианты моделей в зависимости от бренда. на стоимость не влиет
    if (currentBrand == 'Audi') {
        calc[0] = +1000000;
        models = audiModels;
    };
    if (currentBrand == 'BMW') {
        calc[0] = +1200000;
        models = bmvModels;
    };
    if (currentBrand == 'Jeep') {
        calc[0] = +900000;
        models = jeepModels;
    };
    if (currentBrand == 'Porsche') {
        calc[0] = +1500000;
        models = porsheModels;
    };
    if (currentBrand == 'Volkswagen') {
        calc[0] = +800000;
        models = volModels;
    };


    //очистка селекта
    selectModel.innerHTML = '';
    selectModel.disabled = false;
    year.disabled = false;

    //работа с дефолтными значениями
    let option = document.createElement('option');
    option.innerText = 'модель';
    selectModel.append(option);
    option.hidden = true;

    //цикл для помещения массива в селект
    models.forEach(i => {
        let newOp = document.createElement("option");
        newOp.innerText = i;
        selectModel.appendChild(newOp);
    });
})

//год выпуска
year.addEventListener('change', (e) => {
    let currentYear = e.currentTarget.value;
    (currentYear == '1') ? (calc[1] = +50000) :
        (currentYear == '2') ? (calc[1] = +100000) :
            (currentYear == '3') ? (calc[1] = +150000) :
                (currentYear == '4') ? (calc[1] = +200000) :
                    (currentYear == '5') ? (calc[1] = +250000) : '';
});

//тип топлива
let fuels = document.querySelectorAll('input[name="fuel-input"]');

fuels.forEach((fuel) => {
    fuel.addEventListener('click', (e) => {
        console.log(fuel.value)
        output.disabled = false;
        if (fuel.value == 'petrol') {
            calc[3] = +0;
        };
        if (fuel.value == 'diesel') {
            calc[3] = +100000;
        };
        if (fuel.value == 'electro') {
            calc[3] = +200000;
            output.disabled = true;
        };
    })
})

//коробка передач
let boxes = document.querySelectorAll('.box-input');

boxes.forEach((box) => {
    box.addEventListener('input', (e) => {
        (box.value == 'auto') ? (calc[5] = +50000) :
            (box.value == 'manual') ? (calc[5] = +30000) :
                (box.value == 'robot') ? (calc[5] = +300000) : '';
    });
})

//расчет при нажатии кнопки 
let btn = document.querySelector('#result');
btn.addEventListener('click', (e) => {
    //пробег
    let run = document.querySelector('.run');
    let r = +run.value * 0.5;
    calc[2] = r;

    //мощность
    let output = document.querySelector('#output');
    let o = +output.value * 20;
    calc[4] = o;

    //чекбоксы
    let comforts = document.querySelectorAll('.comfort');
    let sum = 0;

    function getComfort() {
        for (let comf of comforts) {
            let checkComf;
            if (comf.checked) {
                checkComf = +comf.value;
            } else {
                checkComf = 0;
            }
            sum = sum + checkComf;
        }
        return sum;
    }
    getComfort()
    //калькулятор 
    document.querySelector('.sum').innerHTML = calc.reduce((a, b) => a + b, 0) + sum;
});



