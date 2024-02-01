console.clear()
// console.log(window)
// ajax - asynchronous javascript and xml

const makeRequest = async (url, method, config) => {

    try{
        const result = await $.ajax({
            url: url,
            method: method,
            config: config
        })
    
        return result

    } catch(error){
        console.log(error)
    }

}

const getData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts/1", "GET")
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
}

getData();

const sendData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts", "POST", {
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
}

sendData();

const updateData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts/1", "PUT", {
        body: JSON.stringify({
            title: 'fooMa',
            body: 'barMa',
            userId: 1,
        }),
        headers: {
            'Content-type': 'appliction/json; charset=UTF-8'
        },
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error)) 
}

updateData();

const updateSingleData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts/1", "PATCH", {
        body: JSON.stringify({
            title: 'foo',
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },  
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
}

updateSingleData();

const deleteData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts/1", "DELETE")
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
}

deleteData();