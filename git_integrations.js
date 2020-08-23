const fetch = require("node-fetch")

// Sample functions via curl
// curl -H "Accept: application/vnd.github.inertia-preview+json" https://api.github.com/users/BornaSadeghi/projects
// curl -H "Accept: application/vnd.github.v3+json" https://api.github.com/repos/BornaSadeghi/Ascent
// curl -H "Accept: application/vnd.github.v3+json" https://api.github.com/zen

const base = "https://api.github.com"

// Returns a test string
async function test() {

    //const raw = JSON.stringify({'data': theBody});
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
      };
    const res = await fetch(base + '/zen', requestOptions);
    return res.text(); // Promise
}

async function getUsers () {
	const res = await fetch(base + '/user')
	return res.text()
}

const printStuff = async () => {
    await getUsers().then(res => console.log(res))
}

printStuff()