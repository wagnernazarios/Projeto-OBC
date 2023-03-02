class User {
  constructor(name, email, password) {
    this.nanme = name;
    this.email = email;
    this.password = password;
  }

  login(email, password) {
    if(this.email === email && this.password === password){
        console.log(`Esta logado!`) ;
      }
  }
}

const wagner = new User("Wagner", "wagner@gmail.com", "93223417");

console.log(wagner);

wagner.login("wagner@gmail.com", "93223417");


