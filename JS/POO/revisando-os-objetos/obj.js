function Book(title, pages, tags, author) {
  this.title = title;
  this.pages = pages;
  this.tags = tags;
  this.author = author;
  this.published = false;
  this.inStock = 0;
  this.addOnStock = (quantity) => {
    this.inStock += quantity;
  },
    this.save = () => {
      //Salvar dados do objetos
    };
}

// const title = 'Eragon';
// const pages = 468;
// const tags = ['fantasy', 'adventure', 'medieval'];
// const author = {
//     name: "Christopher Paolini",
// }

const eragon = new Book(title = 'Eragon', pages = 468, tags =  ['fantasy', 'adventure'], author = {name: 'Christopher Paolini'})  

// eragon.title = 'Eragon';
// eragon.pages = 468;
// eragon.tags = ['fantasy', 'adventure', 'medieval'];
// eragon.author = {
//     name: "Christopher Paolini",
// }
// eragon.published = true;
// eragon.addOnStock(50)

console.log(eragon)

const eldest = new Book(title = 'Eldest', pages = 644, tags =  ['fantasy', 'adventure'], author = {name: 'Christopher Paolini'})  

console.log(eldest)