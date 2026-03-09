let mark = Array(6)
console.log(mark)

var marks = new Array(20,13,30,45,54,34)

var marks = [20,13,30,45,54,34]

// accessing elements of an array

console.log(marks[2])

// Manipulating the Array values

marks[3] = 40
console.log(marks)

// Length of an array

console.log(marks.length)

// To add an element at end of an array

marks.push(123)
console.log(marks)

// To add an element at the beginning of an array

marks.unshift(100)
console.log(marks)

// To remove an element from the end of an array

marks.pop()
console.log(marks)

// To get index of an value

console.log(marks.indexOf(30))

// To check if an element is present in an array or not

console.log(marks.includes(35))

// To create a subarray from an array

let subMarks = marks.slice(2,5)
console.log(subMarks)

sum = 0
for (let i = 0; i < marks.length; i++)
{
    //console.log(marks[i])

    sum = sum + marks[i]
}
console.log(sum)

let total = marks.reduce((sum,mark) => sum + mark,0)
console.log(total)


scores = [20, 12, 13, 15, 16, 18, 19]

evenScore = []

for (let i= 0; i < scores.length; i++)
{
    if (scores[i] % 2 == 0)
    {
        evenScore.push(scores[i])
    }
}
console.log(evenScore)

let evenScores = scores.filter(score => score%2 == 0)
console.log(evenScores)

let mappedscores = evenScores.map(score => score*3)
console.log(mappedscores)

let totalval = mappedscores.reduce((sum, val) => sum + val,0)
console.log(totalval)
