import renderHeader from './components/header/header.js';
import renderChartBox from './components/chart/chart.js';

/**
 * Fetches data from the '/data.json' endpoint and returns it as a JSON object.
 * @returns {Promise<Object>} The data from the JSON file.
 */
const getData = async () => {
  const response = await fetch('./assets/data.json');
  const data = await response.json();
  return data;
};


/**
 * Renders the application by fetching data and updating the DOM.
 * 
 * This function asynchronously retrieves data, then updates the inner HTML
 * of the element with the ID 'app' by appending a header and a chart box
 * based on the fetched data.
 * 
 * @async
 * @function renderApp
 * @returns {Promise<void>} A promise that resolves when the app is rendered.
 */
const renderApp = async () => {
  const data = await getData();
  const app = document.getElementById('app');
  app.innerHTML += renderHeader();
  app.innerHTML += renderChartBox(data);
}

// Call renderApp when the DOM is loaded
document.addEventListener('DOMContentLoaded', renderApp);