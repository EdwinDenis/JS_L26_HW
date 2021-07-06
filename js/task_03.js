// Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 

// 3.1 Функция вывода времени на экран;
// 3.2 Функция изменения времени на переданное количество секунд;
// 3.3 Функция изменения времени на переданное количество минут;
// 3.4 Функция изменения времени на переданное количество часов;

// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая.  
// Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75»


//Обявление переменных
let h,m,s;
let chooseAddTime;
let hours, minutes, seconds;

// Функция вывода установленного времени
function showTimeSet(time){
    console.log(`Set time : «${time.hours}:${time.minutes}:${time.seconds}»`);
}

// Функция вывода времени после изминения
function showTimeNew(time){
    console.log(`New time : «${time.hours}:${time.minutes}:${time.seconds}»`);
}

// Функция добавления часов
function hoursToAdd(time, hours){
    let additionalTime = hours % 24; 
    if (time.hours + additionalTime > 24) time.hours = time.hours + additionalTime - 24;
    else time.hours += additionalTime;
}

// Функция добавления минут
function minutesToAdd(time, minutes){
    let additionalTimeMinutes = minutes - Math.trunc(minutes / 60)*60;
    let additionalTimeHours = Math.trunc(minutes / 60);
    hoursToAdd(time,additionalTimeHours);
    if (time.minutes + additionalTimeMinutes > 60) time.minutes = time.minutes + additionalTimeMinutes - 60;
    else time.minutes += additionalTimeMinutes;
}

// Функция добавления секунд
function secondsToAdd(time, seconds){
    let additionalTimeHours = Math.trunc(seconds / 3600);
    hoursToAdd(time, additionalTimeHours)
    let additionalTimeMinutes = Math.trunc((seconds - additionalTimeHours*3600) / 60);
    minutesToAdd(time, additionalTimeMinutes)
    let additionalTimeSeconds = (seconds - Math.trunc(seconds / 3600)*3600) - (additionalTimeMinutes * 60)
    if (time.seconds + additionalTimeSeconds > 60) time.seconds = time.seconds + additionalTimeSeconds - 60;
    else time.seconds += additionalTimeSeconds;
}

// Запрос у пользователя начальнего времени
do{
    h = +prompt('Enter hours [0..24)');
}while ((h < 0) || (h >= 24))

do{
    m = +prompt('Enter minutes [0..60)');
}while ((m < 0) || (m >= 60))

do{
    s = +prompt('Enter seconds [0..60)');
}while ((s < 0) || (s >= 60))

// Создание обьекта
let time = {
    hours: h,
    minutes: m,
    seconds: s,
}

// Вывод в консоль установленного времени
showTimeSet(time);

// Запрос у пользователя, что конкретно он хочет добавить к установленному времени(часы, минуты или секунды)
do{
    chooseAddTime = +prompt('What would you like to add to the set time? 1 - hours; 2 - minutes; 3 - seconds');
}while((chooseAddTime != 1) && (chooseAddTime != 2) && (chooseAddTime != 3))

// Расчет нового времени в зависимости от выбора пользователя
switch (chooseAddTime) {
    case 1: {
        do{
            hours = +prompt('How much hours to add? [0..Infinity)');
        }while (hours < 0)
        hoursToAdd(time, hours)
    } break
    case 2: {
        do{
            minutes = +prompt('How much minutes to add? [0..Infinity)');
        }while (minutes < 0)
        minutesToAdd(time, minutes)
    } break
    case 3: {
        do{
            seconds = +prompt('How much seconds to add? [0..Infinity)');
        }while (seconds < 0)
        secondsToAdd(time, seconds)
    } break
}

// Вывод в консоль нового времени
showTimeNew(time);














