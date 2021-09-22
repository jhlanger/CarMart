


var soldBtn = document.getElementById('soldBtn');
var soldValue = 1;
async function markAsSold(event) {
    event.preventDefault();

    const response = await fetch(`/api/cars/${id}`, {
      method: 'PUT'
      
     
    });
  
    if (response.ok) {
      document.location.replace('/buyCars/');
    } else {
      alert(response.statusText);
    }
  }
  

soldBtn.addEventListener("click", markAsSold);