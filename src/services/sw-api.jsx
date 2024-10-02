const BASE_URL = 'https://swapi.dev/api/starships/';


export async function getAllStarships() {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json(); 
  } catch (error) {
    console.error('Fetch error: ', error);
  }
}
