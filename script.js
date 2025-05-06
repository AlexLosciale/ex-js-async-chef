//In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id). Questa funzione accetta
//un id di una ricetta e deve:

//Recuperare la ricetta da https://dummyjson.com/recipes/{id}
//Estrarre la proprietà userId dalla ricetta
//Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
//Restituire la data di nascita dello chef

//Scrivi la funzione getChefBirthday(id), che deve:
//Essere asincrona (async).
//Utilizzare await per chiamare le API.
//Restituire una Promise con la data di nascita dello chef.
//Gestire gli errori con try/catch

//esempio di utilizzo:
//getChefBirthday(1)
// .then(birthday => console.log("Data di nascita dello chef:", birthday))
//.catch(error => console.error("Errore:", error.message));

async function getChefBirthday(id) {
  try {
    const ricetta = await fetch(`https://dummyjson.com/recipes/${id}`);
    
    if (!ricetta.ok) {
      throw new Error("Errore nel recupero della ricetta");
    }

    const ricettaData = await ricetta.json();
    const userId = ricettaData.userId;

    const chef = await fetch(`https://dummyjson.com/users/${userId}`);
    if (!chef.ok) {
      throw new Error("Errore nel recupero dello chef");
    }

    const chefData = await chef.json();
    return chefData.birthDate;
  } catch (error) {
    throw new Error(`Errore: ${error.message}`);
  } finally {
    console.log("Operazione completata");
  }
}

getChefBirthday(1)
  .then((birthday) => console.log("Data di nascita dello chef:", birthday))
  .catch((error) => console.error("Errore:", error.message));
