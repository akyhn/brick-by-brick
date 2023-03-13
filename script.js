// Get the existing element that you want to duplicate
const existingElement = document.getElementById('brick');

// Get the parent container of the existing element
const parentContainer = existingElement.parentNode;

// Define the number of times to duplicate the existing element
const numDuplicates = 30;

// Duplicate the existing element and add it to the parent container
for (let i = 1; i <= numDuplicates; i++) {
  // Create a new element by cloning the existing element
  const newElement = existingElement.cloneNode(true);

  // Generate a new ID for the new element
  const existingIdNum = parseInt(existingElement.id.match(/\d+/)[0]);
  const newIdNum = existingIdNum + i;
  const newId = `brick${newIdNum}`;

  // Set the new ID on the new element
  newElement.id = newId;

  // Add the new element to the parent container
  parentContainer.appendChild(newElement);
}
