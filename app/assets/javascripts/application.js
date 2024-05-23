window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here

  // Function to handle the form submission
  function handleDestinationChoice(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the selected destination
    const selectedDestination = document.querySelector('input[name="Choose Your Destination"]:checked').value;

    // Redirect to the appropriate page based on the selected destination
    if (selectedDestination === 'Moon') {
      window.location.href = '/moon-page';
    } else if (selectedDestination === 'Mars') {
      window.location.href = '/mars-page';
    }
  }

  // Attach the submit event handler to the form
  const destinationForm = document.querySelector('.form');
  if (destinationForm) {
    destinationForm.addEventListener('submit', handleDestinationChoice);
  }
});
