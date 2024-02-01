console.clear()
// console.log(window)

fetch("https://jsonplaceholder.typicode.com/posts/1", {
    
    // POST method
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },

    // PUT method
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },

    //PATCH method
    method: 'PATCH',
    body: JSON.stringify({
      title: 'foo',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },

    //DELETE method
    method: 'Delete'
})

.then((response) => {
    if (!response.ok){
        const message = `Error: ${response.status}`
        throw new Error(message)
    } 
    else{
        return response.json();
    }
})

.then ((response) => {
    console.log(response);
})

.catch ((error) => console.log(error))