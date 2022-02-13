// In un array sono contenuti i nomi degli invitati alla festa del 
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se 
// può partecipare o no alla festa.

const listaName = [
    'luca',
    'michele',
    'enzo',
    'bernando',
    'massimo',
    'giulio',
    'nina',
    'rosario',
    'guidobaldo',
  ]

  const nameinList = prompt('ciao, inserisci il tuo nome');
  console.log(nameinList);

  let control = false;

  for (let index = 0; index < listaName.length; index++) {
      const element = listaName[index];
      console.log(element)

      if (element === nameinList) {
          control = true;
          
      }
      
  }
  if (control === true) {
      alert('prego, puoi entrare')
  } else {
      alert('mi dispiace , accesso negato ')
  }