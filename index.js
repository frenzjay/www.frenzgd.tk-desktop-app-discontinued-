const { app, BrowserWindow, Menu, MenuItem } = require('electron')
const path = require('path')
icon: path.join(__dirname, 'logo.ico')
if (process.defaultApp) {
    if (process.argv.length >= 2) {
      app.setAsDefaultProtocolClient('frenz-proto', process.execPath, [path.resolve(process.argv[1])])
    }
  } else {
    app.setAsDefaultProtocolClient('frenz-proto')
  }

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: __dirname+ '/favicon.ico'
  })

  win.loadFile('index.html')
}

const menu = new Menu()
menu.append(new MenuItem({
  label: 'Frenz',
  submenu: [{
    role: 'Sex',
    accelerator: process.platform === 'dw' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
    click: () => { console.log('dw') }
   
  }]
}))

Menu.setApplicationMenu(menu)

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

const gotTheLock = app.requestSingleInstanceLock()

if (!gotTheLock) {
  app.quit()
} else {
  app.on('second-instance', (event, commandLine, workingDirectory) => {
    // Someone tried to run a second instance, we should focus our window.
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
    }
  })
  app.on('open-url', (event, url) => {
    dialog.showErrorBox('wb', `yaf: ${url}`)
  })
}