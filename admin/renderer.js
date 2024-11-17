const { ipcRenderer } = require('electron');

// Listen for messages from the client
ipcRenderer.on('display-client-message', (event, message) => {
    const messageDiv = document.getElementById('clientMessages');
    messageDiv.innerHTML = `<p>${message}</p>`;  // Display the message in the UI
});
