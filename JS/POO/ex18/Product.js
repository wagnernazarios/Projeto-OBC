class Product {
    constructor(name, description, price){
        this.name = name;
        this.description = description;
        this.price = price;
        this.inStock = 0;
    }

    addToStock(quantity){
        this.inStock += quantity;
    }

    calculateDiscount(discount){
        return this.price * ((100 - discount) / 100);
    }
}

const watch = new Product("Relogio de pulso", "...", 80);
watch.addToStock(90);
const discount = watch.calculateDiscount(10);
console.log(watch);
console.log(`Preço do relogio de pulso com desconto é ${discount}`);