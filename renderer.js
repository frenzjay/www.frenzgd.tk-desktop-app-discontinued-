win = new BrowserWindow({width: 1000, height: 1000,icon: __dirname + '/logo.png'});

new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
  .onclick = () => document.getElementById("output").innerText = CLICK_MESSAGE

  const updateOnlineStatus = () => {
    document.getElementById('status').innerHTML = navigator.onLine ? 'online' : 'offline'
  }
  
  window.addEventListener('online', updateOnlineStatus)
  window.addEventListener('offline', updateOnlineStatus)
  
  updateOnlineStatus()