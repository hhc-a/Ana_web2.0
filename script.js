/* script.js 共用的JavaScript 文件 */
function toggleMenu() {
    document.getElementById("menuContent").classList.toggle("active");
}

// Hide menu when clicking outside
window.onclick = function(event) {
    if (!event.target.matches('.menu-button')) {
        var menuContent = document.getElementById("menuContent");
        if (menuContent.classList.contains('active')) {
            menuContent.classList.remove('active');
        }
    }
}

// Chat functionality
function sendMessage() {
    if (!document.getElementById('message-input')) return;
    
    const input = document.getElementById('message-input');
    const message = input.value.trim();
    if (message === '') return;
    
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'user-message';
    messageDiv.style.backgroundColor = '#e6f7ff';
    messageDiv.style.padding = '8px';
    messageDiv.style.borderRadius = '8px';
    messageDiv.style.marginBottom = '10px';
    messageDiv.style.alignSelf = 'flex-end';
    messageDiv.textContent = message;
    
    chatMessages.appendChild(messageDiv);
    input.value = '';
    
    // Auto response (can be replaced with actual functionality)
    setTimeout(() => {
        const responseDiv = document.createElement('div');
        responseDiv.className = 'bot-message';
        responseDiv.style.backgroundColor = '#f0f0f0';
        responseDiv.style.padding = '8px';
        responseDiv.style.borderRadius = '8px';
        responseDiv.style.marginBottom = '10px';
        responseDiv.textContent = '感謝您的訊息！我們會盡快回覆您。';
        chatMessages.appendChild(responseDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
    
    chatMessages.scrollTop = chatMessages.scrollHeight;
}