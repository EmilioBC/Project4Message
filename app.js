const submitButton = document.querySelector('button');
const messageInput = document.getElementById('messageInput');
const messageDisplay = document.getElementById('lastMessage');

submitButton.addEventListener('click', () => {
    messageDisplay.textContent = messageInput.value;
});  