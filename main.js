function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
      page.style.display = 'none';
    });
  
    const page = document.getElementById(pageId);
    page.style.display = 'block';
  }
  
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
      const href = link.getAttribute('href').substring(1);
      showPage(href);
    });
  });
  

  const chatForm = document.getElementById('chat-container');
  const messageInput = document.getElementById('message-input');
  const messages = document.getElementById('messages');
  
  chatForm.addEventListener('submit', event => {
    event.preventDefault();
    const message = messageInput.value.trim();
  
    if (message !== '') {
      sendMessage(message);
      messageInput.value = '';
    }
  });
  
  function sendMessage(message) {
    const newMessage = document.createElement('div');
    newMessage.textContent = message;
    messages.appendChild(newMessage);
    messages.scrollTop = messages.scrollHeight;
  }
  

  fetch('https://api.example.com')
    .then(response => response.json())
    .then(data => {
      console.log(data);

    })
    .catch(error => console.error(error));
  