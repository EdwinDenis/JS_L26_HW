// Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), 
// и следующие функции для работы с этим объектом:
// 1.1 Функция для вывода на экран информации об автомобиле;
// 1.2 Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. 
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

//Oбъект, описывающий автомобиль
let car = {
    manufacture : 'Volvo',
    model : 'XC40',
    year : 2010, 
    "average speed" : 100,
}

//Функция для вывода на экран информации об автомобиле
function showCarDetails(vihicle){
    alert(`Car: ${vihicle.manufacture}`);
    alert(`Model: ${vihicle.model}`);
    alert(`Year: ${vihicle.year}`); 
    alert(`Average speed: ${vihicle["average speed"]}`);  
}

//Запрос у пользователя растояния
let userDistance;

do{
    userDistance = +prompt('Enter the distance to cover: ');
} while (userDistance <= 0)

//Функция для подсчета необходимого времени для преодоления переданного расстояния
function calculateTime(vihicle, distance){
    let timeToCoverDistance = distance / vihicle['average speed'];
    let hours = Math.trunc(timeToCoverDistance);
    let minutes = Math.round((timeToCoverDistance - hours) * 60);
    let restTime = hours / 4;
    if (restTime > 1) hours += Math.trunc(restTime);
    alert (`Need ${hours} hours and ${minutes} minutes to cover the distance of ${userDistance} km with average speed of ${vihicle['average speed']} km/h`);
}

showCarDetails(car);
calculateTime(car, userDistance);
