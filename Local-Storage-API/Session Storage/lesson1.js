// LocalStorage vs SessionStorage
// LocalStorage = 10mb, SessionStorage = 5mb
// LocalStorage = permanent, SessionStorage = session 

sessionStorage.setItem("user1", "jarif");
sessionStorage.setItem("user2", "messi");
const userName = sessionStorage.getItem("user1");
console.log(userName);

// sessionStorage.removeItem("user");

// sessionStorage.clear();

const user = { id: "101", name: "arham" };
sessionStorage.setItem("user", JSON.stringify(user));

const userInfo = JSON.parse(sessionStorage.getItem("user"));
console.log(userInfo);