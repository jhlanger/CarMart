


var updateBtn = document.getElementById('updateBtn');
var make = document.getElementById('make');
var model = document.getElementById('model');
var year = document.getElementById('year');
var miles = document.getElementById('miles');
var price = document.getElementById('price');
var color = document.getElementById('color');
var tags = document.getElementById('tags');
var description = document.getElementById('description');

async function editListing(event) {
    event.preventDefault();

    const response = await fetch(`/api/cars/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        make,
        model,
        year,
        miles,
        price,
        color,
        tags,
        description
      })
    });
  
    if (response.ok) {
      document.location.replace('/myCars/');
    } else {
      alert(response.statusText);
    }
  }
  

updateBtn.addEventListener("click", editListing);