
 const id = window.location.toString().split('/')[
  window.location.toString().split('/').length - 1
];


var deleteBtn = document.getElementById('deleteBtn');


async function deleteCar(event) {
  
    event.preventDefault();
    console.log('delete is running')
    const response = await fetch(`/api/cars/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/mycars/');
    } else {
      alert(response.statusText);
    }
  }
  

deleteBtn.addEventListener("click", deleteCar);

