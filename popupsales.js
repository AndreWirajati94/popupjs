function createPopup(options = {}) {
    const buyers = options.buyers || [
        { name: "John", location: "New York" },
        { name: "Sarah", location: "California" },
        { name: "David", location: "Texas" },
        { name: "Emma", location: "Florida" },
        { name: "Michael", location: "Chicago" }
    ];
    
    // Create the popup element
    const popup = document.createElement("div");
    popup.className = "notification-popup";
    popup.style.position = "fixed";
    popup.style.bottom = "20px";
    popup.style.left = "20px";
    popup.style.backgroundColor = "#4caf50";
    popup.style.color = "white";
    popup.style.padding = "15px";
    popup.style.borderRadius = "5px";
    popup.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
    popup.style.fontFamily = "Arial, sans-serif";
    popup.style.animation = "fadeInOut 5s";
    popup.style.display = "none";

    // Add the popup to the document
    document.body.appendChild(popup);

    // Function to show the notification
    function showNotification() {
        // Randomly pick a buyer from the array
        const randomBuyer = buyers[Math.floor(Math.random() * buyers.length)];
        
        // Set the popup text
        popup.innerHTML = `<strong>New Purchase:</strong> ${randomBuyer.name} from ${randomBuyer.location} just bought this product!`;

        // Show and hide the popup
        popup.style.display = "block";
        setTimeout(() => { 
            popup.style.display = "none";
        }, 5000);
    }

    // Show notification every 10 seconds
    setInterval(showNotification, options.interval || 10000);
}
