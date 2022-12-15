const formData = {
    name: "Hannah Michele Maratea",
    email: "bklynshh@gmail.com",
};

fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify({

    })
    .then(response => respoonse.json())
    .then(response => console.log(JSON.stringify(response)))
})