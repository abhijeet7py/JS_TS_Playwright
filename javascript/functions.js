// block of code that can be reused in multiple places

function add(a,b)
{
    return a + b

}

let sum = add(10,13)
console.log(sum)

let sumof = function(c,d)
{
    return c + d
}

// function with fat pipe operator

let sumof2 = (e,f) => e + f
console.log(sumof2(20,30))