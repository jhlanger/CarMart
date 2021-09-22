async function registerFormHandler(event) {
    event.preventDefault();
  
    const name = document.querySelector('#nameSignup').value.trim();
    const username = document.querySelector('#usernameSignup').value.trim();
    const email = document.querySelector('#emailSignup').value.trim();
    const password = document.querySelector('#passwordSignup').value.trim();
  
    if (name && username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                name,
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
  
        if (response.ok) {
            const response = await fetch('/api/users/login', {
                method: 'post',
                body: JSON.stringify({
                    email,
                    password
                }),
                headers: { 'Content-Type': 'application/json' }
            });
  
            if (response.ok) {
                document.location.replace('/');
            } else {
                alert(response.statusText);
            }
        } else {
            alert(response.statusText);
        }
    }
  }
  
  document.querySelector('.registerForm').addEventListener('submit', registerFormHandler);