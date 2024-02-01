const makeRequest = async (url, config) => {

    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok){
        const message = `Error: ${response.status}` 
        throw new Error(message);
    } 

    return data;
}

const getData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts")

    .then((response) => {
        console.log(response)
    })

    .catch((error) => {
        console.log(error)
    })
}

getData();

const sendData = () => {

    makeRequest("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    })

    .then((response) => {
        console.log(response)
    })

    .catch((error) => {
        console.log(error)
    })

}

sendData();

const updateData = () => {

    makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
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
    })

    .then((response) => {
        console.log(response)
    })

    .catch((error) => {
        console.log(error)
    })

}

updateData();

const updateSingleData = () => {

    makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
        method: 'PATCH',
        body: JSON.stringify({
          title: 'foo',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    })
    
    .then((response) => {
        console.log(response)
    })

    .catch((error) => {
        console.log(error)
    })

}

updateSingleData();

const deleteData = () => {

    makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
        method: 'Delete',
    })

    .then((response) => {
        console.log(response)
    })

    .catch((error) => {
        console.log(error)
    })

}

deleteData();