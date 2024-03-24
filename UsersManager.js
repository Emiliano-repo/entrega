class UserManager {
  static #users = [];
  create(data) {
    const user = {
      id:
        UserManager.#users.length === 0
          ? 1
          : UserManager.#users[UserManager.#users.length - 1].id + 1,
      foto: data.foto,
      email: data.email,
      password: data.password,
      role: 0,
    };
    UserManager.#users.push(user);
    console.log("Usuarios creados con exito  ");
  }

read(){
        return UserManager.#users

}

}
const gestorDeUsuarios = new UserManager();

const gestorDeUsuarios2 = new UserManager();

gestorDeUsuarios.create({
  foto: "roberto.jpg",
  email: "rober@gmail.com",
  password: "hola123",
});
gestorDeUsuarios2.create({
  foto: "Carlos.jpg",
  email: "carlos1@gmail.com",
  password: "hola444",
});

console.log(gestorDeUsuarios.read());
