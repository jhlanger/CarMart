
var soldBtn = document.getElementById('soldBtn');
var soldValue = 1;


async function markAsSold(event) {
  
    event.preventDefault();
    console.log('markAsSold is running')
    //var sold = true;
    const response = await fetch(`/api/cars/sold/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        sold: 1
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/mycars/');
      console.log('markassold has run');
    } else {
      alert(response.statusText);
    }
  }
  

  soldBtn.addEventListener("click", markAsSold);