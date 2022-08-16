// Solve the below problems:

/*=============================================================================*/
// #1) Convert the below promise into async await
/*=============================================================================*/
fetch("https://jsonplaceholder.typicode.com/users/")
    .then((response) => response.json())
    .then(console.log);

async function getUsers() {
    const rawData = await fetch("https://jsonplaceholder.typicode.com/users/");
    const data = await rawData.json();
    console.log(data);
}

const getUsers2 = async function () {
    const rawData = await fetch("https://jsonplaceholder.typicode.com/users/");
    const data = await rawData.json();
    console.log(data);
}

const getUsers3 = async () => {
    const rawData = await fetch("https://jsonplaceholder.typicode.com/users/");
    const data = await rawData.json();
    console.log(data);
}

/*=============================================================================*/
// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
/*=============================================================================*/
const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums",
];

//From the video:
const getData = async function () {
    const [users, posts, albums] = await Promise.all(
        urls.map((url) => fetch(url).then((resp) => resp.json()))
    );
    console.log("users", users);
    console.log("posts", posts);
    console.log("albums", albums);
};

//Solution
const getData2 = async function () {
    const [users, posts, albums] = await Promise.all(
        urls.map(async (url) => {
            const data = await fetch(url);
            return await data.json();
        })
    );
    console.log("users", users);
    console.log("posts", posts);
    console.log("albums", albums);
};

/*=============================================================================*/
// #3)Add a try catch block to the #2 solution in order to catch any errors.
// Now, use the given array containing an invalid url, so you console.log
// your error with 'oooooops'.
/*=============================================================================*/
const urls2 = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholdeTYPO.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums",
];

const getData3 = async function () {
    try {
        const [users, posts, albums] = await Promise
            .all(urls2.map(async (url) => {
                const data = await fetch(url);
                return await data.json();
            }))
        console.log("users", users);
        console.log("posts", posts);
        console.log("albums", albums);
    } catch (error) {
        console.log("oooooops", error);
    }
};

// Now with a "for await of" loop:
const getData4 = async function () {
    const arrayOfPromises = urls.map(url => fetch(url));

    for await (let promise of arrayOfPromises) {
        const data = await promise.json();
        console.log(data);
    }
}
