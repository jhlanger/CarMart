


var deleteBtn = document.getElementById('deleteBtn');
async function deleteCarTest(event) {
    event.preventDefault();

    const response = await fetch(`/api/cars/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/buyCars/');
    } else {
      alert(response.statusText);
    }
  }
  

deleteBtn.addEventListener("click", deleteCarTest);