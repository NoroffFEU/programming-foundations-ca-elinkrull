
const coffeemaker = {
    brand: "moccamaster",
    volume: 1.25,
    price: 2199,
    weight: 3.9,
    on: false,
    color: ["black", "white", "green", "blue", "grey", "red"] ,
    switch: function () {
        coffeemaker.on = !coffeemaker.on
    }
}