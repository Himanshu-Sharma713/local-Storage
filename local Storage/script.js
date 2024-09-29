document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create an object to store the data
    const formData = {
        name: name,
        email: email,
        message: message
    };

    // Store the object as a JSON string in local storage
    localStorage.setItem('formData', JSON.stringify(formData));

    // Clear the form
    document.getElementById('inputForm').reset();

    // Update the display with the new data
    displayFormData();

    // Confirm that data has been saved
    alert('Form data has been saved to local storage!');
});

// Function to load and display saved data
function displayFormData() {
    const savedData = localStorage.getItem('formData');
    const displayData = document.getElementById('displayData');
    const deleteButton = document.getElementById('deleteButton');

    if (savedData) {
        const formData = JSON.parse(savedData);
        displayData.innerHTML = `
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Message:</strong> ${formData.message}</p>
        `;
        deleteButton.style.display = 'block'; // Show the delete button
    } else {
        displayData.innerHTML = '<p>No data available.</p>';
        deleteButton.style.display = 'none'; // Hide the delete button
    }
}

// Function to delete saved data
document.getElementById('deleteButton').addEventListener('click', function() {
    localStorage.removeItem('formData'); // Remove the data from local storage
    displayFormData(); // Update the display

    // Confirm that data has been deleted
    alert('Form data has been deleted from local storage!');
});

// Load and display the form data when the page loads
window.onload = displayFormData;
