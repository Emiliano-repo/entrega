class UserManager {
            static quantity = 0;
            static #users = [];
            create(data) {
              const usr = {
                     id: UserManager.quantity === 0
                      ? 1 
                      : UserManager.#users[UserManager.quantity - 1].id +1,
                      type:data.type || "to do ",
                      date: data.date || new Date(),
                      text:data.text,
                      text:data.name
                    
              };
             
              !data.text ? 
              console.log("Ingrese Titulo") :  (
          
                        UserManager.#users.push(usr) &&
                        UserManager.quantity++);
              
              !data.name ? 
             console.log("Ingrese el nombre de usuario ") : (
                        UserManager.#users.push(usr) );
              
            }
            read() {
              return UserManager.#users;
           
          }
          }
          
          const prodcutos = new UserManager();
          prodcutos .create({ text: "Mi primer producto ",name:"Emiliano " });
          prodcutos .create({ text: "Mi segundo producto" });
          prodcutos .create({ text : "Mi tercer prodcuto  " });
          prodcutos .create({  });
          
          console.log(prodcutos.read());
          