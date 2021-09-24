var updateBtn = document.getElementById('updateBtn');




async function editListing(event) {
    event.preventDefault();
   
    console.log('update is running')
  
    var make = document.getElementById('make').value.trim();
    var model = document.getElementById('model').value.trim();
    var year = document.getElementById('year').value.trim();
    var miles = document.getElementById('miles').value.trim();
    var price = document.getElementById('price').value.trim();
    var color = document.getElementById('color').value.trim();
    //var tags = document.getElementById('tags').value.trim();
    var description = document.getElementById('description').value.trim();

   
    
    const response = await fetch(`/api/cars/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        make,
        model,
        year,
        miles,
        price,
        color,
        description
      }),
      headers: {
        'Content-Type': 'application/json'
      }
     
    });
  
    if (response.ok) {
      document.location.replace('/mycars/');

     // console.log(description);
    } else {
      alert(response.statusText);
    }
  }
  

updateBtn.addEventListener("click", editListing);