// Duplicare l'array
export function cloneArray(array) {
  return [...array]
}

// Inserire l'elemento alla fine
export function addToArrayEnd(array, newElement) {
  array.push(newElement)
  return array
}

// Inserire l'elemento all'inizio
export function addToArrayBeginning(array, newElement) {
  array.unshift(newElement)
  return array
}

// Inserire l'elemento all'indice specificato
// Se l'indice è negativo, inserirlo all'inizio dell'array
// Se l'indice è superiore alla lunghezza dell'array, inserirlo alla fine
export function insertIntoArray(array, newElement, index) {
  if (index < 0) {
    array.unshift(newElement)
  } else if (index > array.length) {
    array.push(newElement)
  } else {
    array.splice(index, 0, newElement)
  }

  return array
}

// Dato un array di oggetti, trovare l'elemento in base a `condition`
// `condition` è un oggetto tipo { id: 46 } o { name: 'Anna' }
// Nel primo caso `findBy` deve restituire il primo elemento che ha un id uguale a 46;
// nel secondo caso il primo elemento che ha name uguale ad Anna
// Restituire null se non viene trovato nulla
export function findBy(array, condition) {
  const key = Object.keys(condition)
  const value = Object.values(condition)

  const foundItem = array.find((item) => item[key] == value)

  if (!foundItem) {
    console.log('Null')
    return null
  }

  return foundItem
}

// Come `findBy`, ma ritorna tutti gli elementi per i quali `condition` risulta vera
// Se per nessun elemento risulta vera, ritornare un array vuoto
export function filterBy(array, condition) {
  const key = Object.keys(condition)
  const value = Object.values(condition)

  const newArray = array.filter((item) => item[key] == value)

  if (!newArray) {
    return []
  }

  return newArray
}

// Dato un array e un elemento, se l'elemento non è presente nell'array va inserito alla fine
// Se l'elemento è già presente, va rimosso
export function toggleArrayItem(array, element) {
  const isPresent = array.includes(element)

  if (isPresent) {
    return array.filter((item) => item != element)
  }

  array.push(element)
  return array
}

// Rimuove dall'array l'elemento all'indice specificato
// Se l'indice è superiore o inferiore alla lunghezza dell'array, ritornare l'array originale
export function removeFromArray(array, index) {
  if (index < 0 || index > array.length) {
    return array
  }

  return array.filter((item) => item != array.at(index))
}

// Dati 2 o più array, unirli in un unico array
export function mergeArrays(...arrays) {
  const newArray = [].concat(...arrays)

  return newArray
}

// Dati 2 o più array, unirli in un unico array, ma rimuovere eventuali duplicati
export function mergeArraysUnique(...arrays) {
  const newArray = [].concat(...arrays)

  return [...new Set(newArray)]
}

// Dato un array di oggetti, una chiave e una direzione (ASC | DESC), ordinare l'array in base ai valori della chiave specificata
// Se `direction` è ASC l'ordine deve essere ascendente, se è DESC discendente
// Es.: [{ age: 44, name: 'Mary' }, { age: 22, name: 'John' }, { age: 31, name: 'Mark' }] con chiave age e direction DESC
// restituisce [{ age: 44, name: 'Mary' }, { age: 31, name: 'Mark' }, { age: 22, name: 'John' }]
// Nota: `key` farà sempre riferimento a valori numerici
export function sortBy(array, key, direction) {
  const newArray = array.sort((a, b) => a[key] - b[key])

  if (direction === 'DESC') {
    newArray.reverse()
  }

  return newArray
}

// Dato un array di oggetti, convertirlo in oggetto e usare come chiave il valore di `key`
// Es.: [{ id: 1, name: 'A' }, { id: 2, name: 'B' }] con key = 'name' deve restituire
// { A: { id: 1, name: 'A' }, B: { id: 2, name: 'B' } }
export function keyBy(array, key) {
  const obj = {}

  array.forEach((element) => {
    obj[element[key]] = element
  })

  return obj
}
// Dato un array, inserire il nuovo elemento all'indice specificato, sostituendo quello che c'è già
export function replaceItemAtIndex(array, newItem, index) {
  const newArray = array.map((item) => {
    return { ...item }
  })
  newArray.splice(index, 1, newItem)

  return newArray
}

// Dato un array di oggetti, aggiungere a ogni oggetto le proprietà specificate
// Es.: [{ id: 1, name: 'A' }, { id: 2, name: 'B' }] con properties { city: 'X', number: 99 }
// deve restituire [{ id: 1, name: 'A', city: 'X', number: 99  }, { id: 2, name: 'B', city: 'X', number: 99 }]
// L'array originale e i suoi elementi non devono essere modificati
export function addExtraProperties(array, properties) {
  const newArray = array.map((item) => {
    return { ...item, ...properties }
  })

  return newArray
}

// Dato un array di oggetti rimuovere da ciascuno di essi le proprietà specificate
// Es.: [{ id: 1, name: 'A', city: 'X', state: 'Y' }] con properties ['city', 'state']
// deve restituire [{ id: 1, name: 'A' }]
// L'array originale e i suoi elementi non devono essere modificati
export function removeProperties(array, properties) {
  const newArray = array.map((item) => {
    const newItem = { ...item }
    properties.forEach((property) => {
      delete newItem[property]
    })
    return newItem
  })

  return newArray
}

// Dato un array di oggetti con una chiave id e un array di id selezionati,
// ritornare un nuovo array in cui gli elementi selezionati hanno la proprietà `selected`= true
// Es.: [{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }] e selectedIds = [2, 3]
// deve restituire [{ id: 1, name: 'A' }, { id: 2, name: 'B', selected: true }, { id: 3, name: 'C', selected: true }]
// L'array originale e i suoi elementi non devono essere modificati
export function setSelected(array, selectedIds) {
  let newArray = array.map((item) => ({ ...item }))

  return newArray.map((item) => {
    const { id } = item
    if (selectedIds.includes(id)) {
      item['selected'] = true
    }
    return item
  })
}

// Dato un array di oggetti, rimapparlo estraendo la chiave specificata
// Es.: [{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'B' }] con chiave 'name'
// deve restituire ['A', 'B', 'C']
// Se la chiave non esiste, ritornare l'elemento originale
export function mapTo(array, key) {
  const isPresent = array.every((item) => item[key])

  if (isPresent) {
    const newArray = array.map((item) => {
      const newItem = { ...item }
      if (newItem[key]) {
        return newItem[key]
      }
    })
    return newArray
  } else {
    return array
  }
}

// Dato un array di oggetti e una funzione `predicate`, eseguire la funzione per ogni elemento
// e ritornare true se per TUTTI è valida, altrimenti ritornare false
// Es.: [{ id: 1, age: 32 }, { id: 2, age: 29 }] con predicate = (item) => item.age > 30,
// `areItemsValid` ritorna false perché non tutti gli elementi hanno `age` maggiore di 30
export function areItemsValid(array, predicate) {
  const newArray = array.filter(predicate)

  if (newArray.length < array.length) {
    return false
  }

  return true
}

// Dato un array di stringhe, un array di oggetti e una chiave, ritornare un nuovo array
// dove ogni elemento del primo è sostuito col corrispondente elemento del secondo in base al valore di `key`
// Es. array = ['11', '22', '33'], dataArray = [{ id: '33', name: 'A' }, { id: '11', name: 'B' }, { id: '22', name: 'C' }], key = 'id'
// `populate` reve restituire [{ id: '11', name: 'B' }, { id: '22', name: 'C' }, { id: '33', name: 'A' }]
// perché '11' nel primo array corrisponde con l'oggetto che ha id = '11' nel secondo array e così via
export function populate(array, dataArray, key) {
  return array.map((item) => {
    const newItem = dataArray.find((objItem) => {
      return objItem[key] == item
    })
    return newItem
  })
}

// Dato un array products del tipo { product: 'A', price: 100, quantity: 1, special: true }
// e un oggetto discounts del tipo { default: 10, special: 20 } (dove sia default sia special potrebbero non esserci),
// calcolare il prezzo finale dei prodotti con l'eventuale sconto applicato,
// considerando che ai prodotti con special = true si applica la percentuale specificata in discount.special,
// agli altri prodotti la percentuale specificata in discounts.default
export function getTotal(products, discounts) {
  const prices = products.map((product) => {
    const { quantity, price, special } = product

    let sale = 0
    let newPrice = price

    if (discounts.default) {
      if (discounts.special && special) {
        sale = (newPrice * discounts.special) / 100
      } else {
        sale = price * (discounts.default / 100)
      }
    } else if (discounts.special && special) {
      sale = price * (discounts.special / 100)
    }
    newPrice -= sale

    return newPrice * quantity
  })

  const total = prices.reduce((acc, current) => (acc += current), 0)
  return total
}

// Dati un array di post, di commenti e di utenti (vedere in mock.js), creare un nuovo array dove ogni post include:
// - un campo `user` con l'oggetto intero dell'utente che corrisponde a `userId` (che va poi rimosso)
// - un campo `comments` che è un array di tutti i commenti associati a quel post (in base a `postId`, che va poi rimosso)
// Dentro ogni commento deve esserci un campo `user` con l'oggetto intero dell'utente che ha scritto il commento (corrispondente a `userId`, che va poi rimosso)
// Se non ci sono commenti, comments deve essere un array vuoto
// Controllare il risultato del test per vedere come deve essere l'array finale
export function populatePosts(posts, comments, users) {
  const newComments = comments.map((comment) => {
    const { postId, id, name, userId, body } = comment
    comment['user'] = users.find((user) => user.id === userId)
    const { user } = comment
    return { postId, id, name, user, body }
  })
  posts = posts.map((post) => {
    const { userId, id, title, body } = post
    post['user'] = users.find((user) => user.id === userId)
    post['comments'] = newComments.filter((comment) => {
      if (comment.postId === id) {
        delete comment.postId
        return comment
      }
    })
    const { user, comments } = post
    return { user, id, title, body, comments }
  })

  return posts
}

// Implementare il metodo nativo Array.map()
export function map(array, mapper) {
  return array.map(mapper)
}

// Implementare il metodo nativo Array.filter()
export function filter(array, predicate) {
  return array.filter(predicate)
}

// Implementare il metodo nativo Array.some()
export function some(array, predicate) {
  return array.some(predicate)
}

// Implementare il metodo nativo Array.every()
export function every(array, predicate) {
  return array.every(predicate)
}

// Implementare il metodo nativo Array.reduce()
export function reduce(array, reducer, initialState) {
  if (!initialState) {
    initialState = 0
  }

  if (array.every((item) => typeof item === 'string')) {
    initialState = ''
  }

  return array.reduce(reducer, initialState)
}
