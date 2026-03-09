for(let i = 0; i < 5; i++)
{
    console.log(i);
}

let balance = 100;
let months = 12;
let x;

for(x = 1; x <= months; x++)
{
    balance += 500;
    console.log("Month", x, "Balance", balance);
}



//Array methods:

//.includes()

let text = "Hello World!";

let result = text.toLowerCase().includes('world');
console.log(result);


const pets = [
    {
        id: 1,
        type: "cat",
        isFurry: true
    },
    {
        id: 2,
        type: "dog",
        isFurry: true
    },
    {
        id: 3,
        type: "lizard",
        isFurry: false
    }
]

let idResult = pets.find(function (item){
    return item.id === 2;
});

console.log(idResult);