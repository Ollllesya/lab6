const apiKey = '5649e24791bfd8916c5f8b0ff40baca6';
const apiUrl = 'http://bulk.openweathermap.org/sample/';
const query = 'your-query';

const url = `${apiUrl}/search?q=${query}&key=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Обробка отриманої відповіді
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
