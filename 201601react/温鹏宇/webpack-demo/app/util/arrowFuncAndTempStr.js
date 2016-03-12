class Animal {
    constructor(name){
        this.name = name;
    }
    drink(type = 'water'){
        setInterval( () => {
            console.log(`${this.name} want to drink ${type}`)
        }, 1000)
    }
}




let pig = new Animal('pig');

console.log(pig.drink('milk'));

export default Animal;
