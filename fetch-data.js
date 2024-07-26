async function fetchUserData() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  const dataContainer = document.getElementById('api-data');

  try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const users = await response.json();
      dataContainer.innerHTML = '';
      users.forEach(user => {
          const listItem = document.createElement('li');
          listItem.textContent = user.name;
          dataContainer.appendChild(listItem);
      });
  } catch (error) {
      dataContainer.innerHTML = 'Failed to load user data';
      console.error('Fetch error:', error);
  }
}

document.addEventListener('DOMContentLoaded', fetchUserData);
