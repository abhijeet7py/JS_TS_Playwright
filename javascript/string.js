let day = "Friday "
// Length of string
console.log(day.length)

// to get a sub string
let subDay =day.slice(0,6)
console.log(subDay)

// Split the string into an array

let splitDay = day.split("d")
console.log(splitDay)

let date = '23'
let nextDate = '31'

let diff = parseInt(nextDate) - parseInt(date)
console.log(diff)

let news = day + "today is a good day and another day is coming"
console.log(news)


let count = 0
let indexes = []
let value = news.indexOf("day")
while(value !== -1)
{
    count++
    indexes.push(value)
    value = news.indexOf("day", value+1)
}
console.log(count)
console.log(indexes)