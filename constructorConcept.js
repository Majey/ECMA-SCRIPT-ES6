
class Animal {
    name = "Tigers";
    food = "carnivores";
    constructor(name, food){
        this.name = name;
        this.food = food;
    };
    details(){
        return `${this.name} are ${this.food}`;
    }
}

const obj = new Animal("Cows", "Herbivores");
console.log(obj.details());