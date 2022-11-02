//1) Створити функцію яка отримує невизначену кількість аргументів і вираховує їх суму +++
let valuesС = parseInt(prompt('Ведите количестов задаваемых чисел'))
let arrValue = [];
function sum(arg1  , arg3){

    for (i = 0; i < valuesС; i++){
        let values = parseInt(prompt(`Введите ${valuesС} чисел`))
        arg3.push(values)
    }
    console.log(arg3)
    let sum = 0;

    for (let item of arg3){
        sum += item
    }
    console.log(sum)
}
sum(valuesС  , arrValue)
//2)Створити функцію яка отримує від користувача день народження,місяць, +++
// рік і повертає рік народження і якщо сьогодні день народження користувача то вивести привітання
let day = parseInt(prompt("Введите день рождения"))
let month1 = parseInt(prompt("Введите месяц рождения"))
let year = parseInt(prompt("Введите год рождения"))

let bday = new Date(year , month1 , day);
let normalday = new Date( );

function congrats(arg1 , arg2){
    let normalMonth = arg2.getMonth() + 1
    if (arg1.getMonth() === normalMonth && arg1.getDate() === arg2.getDate()){
        console.log("Happy Birth Day")
    }
    else {
        console.log("Today Not Your Birthday")
    }
}
console.log(congrats(bday , normalday))
//3) Створити функцію яка з массиву вибирає всі булеві значення

const sort = [true, 'false' , 111, -0, 'true', false, {status:true}, [true , 'false']];

function getBoolean(argS){
    let newArr = []
    for (let item of argS){
        if (typeof item == 'boolean' || typeof item.status == 'boolean'){
            newArr.push(item)
        }
        for (i = 0 ; i < argS.length; i++){
            if (item[i] == true || item[i] == false){
                newArr.push(item[i])
            }
        }
    }
    console.log(sort)
    return newArr
}
console.log(getBoolean(sort))


// console.log(replacement())
// 4) Створити функцію яка повертає сторіччя, функція отримує рік +++
// 1810->19
// 1700 -> 17
// 1601 ->17
// 2000 -> 20

let year1 = parseInt(prompt("Введите год"))
function getСentury(year){
    let century = Math.floor((year - 10)/100) + 1
    console.log(`Вы ввели ${year} год - Он равен ${century} веку`)
}
console.log(getСentury(year1))

// 5) Створити функцію яка повертає скільки днів в цьому місяці а також в наступному  ( В цьому місяці 30 днів в наступному 31 )
let date = new Date();
let month = date.getMonth()
let year2 = date.getFullYear()
function DayInMonth ( year , month) {

    let date1 = new Date(year, month, 1);
    let date2 = new Date(year, month+1, 1);

    return `В этом месяце ${Math.round((date2 - date1) / 1000 / 3600 / 24)} дней , в следующем месяце будет ${Math.round((date2 - date1) / 1000 / 3600 / 24)+1}`;

}
console.log(DayInMonth(year2 , month))