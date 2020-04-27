fetch("http://localhost/3001/albums")
    .then(response => response.json())
    .then(albums => {
        console.log(albums);
    })

fetch("http://localhost/3001/members")
    .then(response => response.json())
    .then(members => {
        console.log(members);
    })

fetch("http://localhost/3001/concertTours")
    .then(response => response.json())
    .then(concertTours => {
        console.log(concertTours);
    })

fetch("http://localhost/3001/labels")
    .then(response => response.json())
    .then(labels => {
        console.log(labels);
    })