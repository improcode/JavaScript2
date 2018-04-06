/*

var Aa = 2

if (Aa === 1) {
    console.log(1)
} else if (Aa === '1') {
    console.log(2)
} else if (Aa === 2) {
    console.log(3)
} else {
    console.log(0)
}

*/

/*
var Aa = '1'

switch (Aa) {
    case 1:
        console.log(1)
        break
    case '1':
        console.log(2)
        break
    case 2:
        console.log(3)
        break
    default:
        console.log(0)
}
*/

/*

var bry = 'sgdfgdsg'

    isTrue = (bry === 1) ?
        1
        :
        (bry === '1') ?
            2
            :
            (bry === 2) ?
                3
                :
                0

console.log(isTrue)
*/

/*

var numbers = [1, 2, 3, 4, 5]

console.time('in loop')
for (var i = 0; i < numbers.length; ++i) {
    console.log(numbers[i])
}
console.timeEnd('in loop')


console.time('before loop')
var ciag = numbers.length
for (var i = 0; i < ciag; ++i) {
    console.log(numbers[i])
}
console.timeEnd('before loop')
*/

/*

var random = []
for (var i = 0; i < 10; i++) {
    random[i] = Math.random()
}

console.log(random)

var count = 0
for (var i = 0; i < 10; i++) {
    if (random[i] < 0.5) {
        count = count + 1
    }
}

console.log(count)
*/

/*

var milkTemp = 20

while (milkTemp < 100) {
    milkTemp += Math.round(Math.random())
    console.log(milkTemp)
}
*/

/*

var array = []
var i = 0

while (i<100) {
    array[i] = Math.round(Math.random()*10)
    i++
}

console.log(array)
console.table(array)
*/

/*
var foka = [7, 10, 15, 25, 1]
foka.unshift(0)
foka.push(6)
console.log(foka)
foka.shift()
foka.pop()
console.log(foka)

*/

/*
var array = []
var i = 0

while (i<10) {
    array[i] = Math.round(Math.random()*20)
    i++
}

s1 = Math.ceil(array.length/2) -2
s2 = Math.ceil(array.length/2) +2

var slice = array.slice(s1, s2)

console.log(array)
console.log(slice)
*/

