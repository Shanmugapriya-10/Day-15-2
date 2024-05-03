// Create form elements
const form = document.createElement('form');
form.id = 'form';
const formGroupDiv = document.createElement('div');
formGroupDiv.classList.add('form-group');
const formFields = [
  { label: 'First Name:', type: 'text', id: 'first-name', name: 'firstName', required: true },
  { label: 'Last Name:', type: 'text', id: 'last-name', name: 'lastName', required: true },
  { label: 'Address:', type: 'text', id: 'address', name: 'address', required: true },
  { label: 'Pincode:', type: 'text', id: 'pincode', name: 'pincode', required: true },
  { label: 'Gender:', type: 'select', name: 'gender', options: ['Male', 'Female', 'Other'], required: true },
  { label: 'Choice of Food (select at least 2):', type: 'checkbox', name: 'food', options: ['Pizza', 'Burger', 'Pasta', 'Salad', 'Sushi'], required: true },
  { label: 'State:', type: 'text', id: 'state', name: 'state', required: true },
  { label: 'Country:', type: 'text', id: 'country', name: 'country', required: true }
];

formFields.forEach(field => {
  const label = document.createElement('label');
  label.textContent = field.label;
  formGroupDiv.appendChild(label);

  let input;
  let radioLabel;
  if (field.name === 'gender') {
    field.options.forEach(option => {
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = field.name;
      radio.value = option.toLowerCase();
      formGroupDiv.appendChild(radio);
      radioLabel = document.createElement('label');
      radioLabel.textContent = option;
      formGroupDiv.appendChild(radioLabel)

    },

    );

  } else if (field.type === 'checkbox') {
    field.options.forEach(option => {
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.name = field.name;
      input.value = option.toLowerCase();
      formGroupDiv.appendChild(input);
      const optionLabel = document.createElement('label');
      optionLabel.textContent = option;
      formGroupDiv.appendChild(optionLabel);
    });
    input = null;
  } else {
    input = document.createElement('input');
    input.type = field.type;
    input.name = field.name;
  }
  if (input) {
    formGroupDiv.appendChild(input);
    form.appendChild(formGroupDiv)
  }

});

// Create submit button
const submitButton = document.createElement('input');
submitButton.id = "submit";
submitButton.type = 'submit';
submitButton.value = 'Submit';
// After creating the submit button
submitButton.classList.add('btn', 'btn-primary');

form.appendChild(submitButton);

// Create table
const tablediv = document.createElement('div');
tablediv.id = "tablediv";
const table = document.createElement('table');
table.id = 'dataTable';
table.classList.add('table');
const tableHeader = document.createElement('thead');
const headerRow = document.createElement('tr');
const headers = ['First Name', 'Last Name', 'Address', 'Pincode', 'State', 'Country', 'Gender', 'Food'];
headers.forEach(headerText => {
  const th = document.createElement('th');
  th.textContent = headerText;
  headerRow.appendChild(th);
});
tableHeader.appendChild(headerRow);
table.appendChild(tableHeader);

// Create table body
const tableBody = document.createElement('tbody');
table.appendChild(tableBody);

// Append form and table to the document body
document.body.appendChild(form);
document.body.appendChild(document.createElement('br'));
document.body.appendChild(document.createElement('hr'));
tablediv.appendChild(table);
document.body.appendChild(tablediv);

// Form submission handler
form.addEventListener('submit', function (event) {
  event.preventDefault();

  // Get form data
  const formData = new FormData(form);
  const rowData = [];

  // Iterate through other form fields
  const otherFields = ['firstName', 'lastName', 'address', 'pincode', 'state', 'country'];
  otherFields.forEach(field => {
    const value = formData.get(field) || '';
    rowData.push(value);
  });

  // Handle food field separately
  const foodValues = formData.getAll('food');
  if (foodValues.length > 0) {
    const foodString = foodValues.join(', ');
    rowData.push(foodString);
  } else {
    rowData.push('');
  }

  // Handle gender field separately
  const genderValue = formData.get('gender') || '';
  rowData.push(genderValue);
  // Add data to table
  const newRow = document.createElement('tr');
  rowData.forEach(data => {
    const cell = document.createElement('td');
    cell.textContent = data;
    newRow.appendChild(cell);
  });
  tableBody.appendChild(newRow);

  // Clear form fields
  form.reset();
});

































































