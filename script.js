fetch('http://localhost:3000/albums/list')
.then(response => response.json())
.then(data => console.log(data))

