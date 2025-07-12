// Create the button element
const supportButton = document.createElement('button');
supportButton.innerText = '💬 Support';
supportButton.style.position = 'fixed';
supportButton.style.bottom = '20px';
supportButton.style.right = '20px';
supportButton.style.zIndex = '10000';
supportButton.style.padding = '10px 15px';
supportButton.style.backgroundColor = '#007bff';
supportButton.style.color = 'white';
supportButton.style.border = 'none';
supportButton.style.borderRadius = '5px';
supportButton.style.cursor = 'pointer';
supportButton.style.fontSize = '16px';
supportButton.style.boxShadow = '0 4px 6px rgba(0,0,0,0.2)';
supportButton.style.transition = 'background-color 0.3s';

// Optional hover effect
supportButton.addEventListener('mouseenter', () => {
    supportButton.style.backgroundColor = '#0056b3';
});
supportButton.addEventListener('mouseleave', () => {
    supportButton.style.backgroundColor = '#007bff';
});

// Action when clicked
supportButton.addEventListener('click', () => {
    alert('Opening support chat or form...');
    // You can replace the above line with custom logic like:
    // window.open('https://your-support-chat.com ', '_blank');
});

// Append the button to the body
document.body.appendChild(supportButton);