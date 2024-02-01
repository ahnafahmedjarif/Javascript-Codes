console.clear();
// console.log(window);

const makeRequest = (method, url, data) => {

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
    
        xhr.setRequestHeader("Content-Type", "application/json");
    
        xhr.onload = () => {
            let data = xhr.response;
            // console.log(data);
            console.log(JSON.parse(data));
            console.log(xhr.status);
            console.log(xhr.statusText);
        }

        //this is part is essential for error handling
        xhr.onerror = () => {
            console.log("Error is here");
        }
    
    
        // console.log(xhr);
    
        // console.log(`get data`);
    
        xhr.send(JSON.stringify(data));
    })

}

const getData = () => {
    makeRequest("GET", "https://jsonplaceholder.typicode.com/posts")
        .then((response) => console.log(response))
}

getData();

const sendData = () => {
    makeRequest("POST", "https://jsonplaceholder.typicode.com/posts", {
        title: 'foo',
        body: 'bar',
        userId: 1,
    })
    .then((response) => console.log(response))

}

sendData();

const updateData = () => {
    makeRequest("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
        id: 1,
        title: 'fooMa',
        body: 'barMa',
        userId: 1,
    })
    .then((response) => console.log(response))
    
}

updateData();

const updateSingleData = () => {
    makeRequest("PATCH", "https://jsonplaceholder.typicode.com/posts/1", {

        title: 'this is changed',

    })
    .then((response) => console.log(response));
}

updateSingleData();

const deleteData = () => {
    makeRequest("PATCH", "https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => console.log(response));
}

deleteData();
