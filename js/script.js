// Function to load external HTML content
function loadHTML(elementId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading HTML:', error));
}

// Load content into different sections
window.onload = function() {
    loadHTML('footer', 'pages/footer.html'); 
    loadHTML('about', 'about.html')
    loadHTML('departments', 'department.html');
    loadHTML('events', 'events.html');  
    loadHTML('placements', 'placements.html');
    loadHTML('testimonials', 'testimonials.html');
    loadHTML('contact', 'contact.html')
    
};

