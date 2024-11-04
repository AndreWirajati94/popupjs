function loadStyles() {
  const style = document.createElement("style");
  style.innerHTML = `
    /* Add your CSS styles here */
    /* Styling the notification popup */
  .notification-popup {
    display: none; /* Hidden by default */
    position: fixed;
    bottom: 20px;
    left: 20px;
    background-color: #4caf50; /* Green background */
    color: white;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    font-family: Arial, sans-serif;
    animation: fadeInOut 5s;
  }

  /* Animation for fading in and out */
  @keyframes fadeInOut {
    0%, 100% { opacity: 0; }
    10%, 90% { opacity: 1; }
  }
    body {
      font-family: Arial, sans-serif;
    }
  `;
  document.head.appendChild(style);
}

// Call the function to load styles when the script loads
loadStyles();


// Array of buyers
  const buyers = [
    { name: "John", location: "New York" },
    { name: "Sarah", location: "California" },
    { name: "David", location: "Texas" },
    { name: "Emma", location: "Florida" },
    { name: "Michael", location: "Chicago" }
  ];

  // Function to show the notification
  function showNotification() {
    const popup = document.getElementById('notificationPopup');
    
    // Randomly pick a buyer from the array
    const randomBuyer = buyers[Math.floor(Math.random() * buyers.length)];
    
    // Set the popup text with the buyer's name and location
    popup.innerHTML = `<strong>New Purchase:</strong> ${randomBuyer.name} from ${randomBuyer.location} just bought this product!`;

    // Show and then hide the popup
    popup.style.display = 'block'; 
    setTimeout(() => { 
      popup.style.display = 'none';
    }, 5000);
  }

  // Show notification every 10 seconds
  setInterval(showNotification, 10000);