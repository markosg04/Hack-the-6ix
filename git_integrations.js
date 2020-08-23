const fetch = require("node-fetch")
const { Octokit } = require("@octokit/core");

const octokit = new Octokit({ auth: `46171ba1d87f44fda96a688000d46db8da234603` });

const clientId = "dcf9c523dbd3438422b7"
const clientSecret = "0aca76c81055d2cad46eeb638603db6a049d7eae"
const base = "https://api.github.com"

async function test () {
    const res = await fetch(base + "/zen")
    return res.text()
}

async function getUser () {
    const res = await fetch(base + "/user")
    return res.text()
}

async function getUserRepos () {
    const res = await fetch(base + "/user/repos")
    return res.text()
}

async function auth () {
    const res = await fetch(`https://github.com/login/oauth/authorize?client_id=${clientId}`)
    console.log(await res.text())
}

// (async () => getUser().then(data => console.log(data)))()

async function printUser() {
    const response = await octokit.request("GET /user")
    console.log(response)
}

auth()