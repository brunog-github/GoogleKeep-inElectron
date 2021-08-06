const {app, BrowserWindow} = require('electron')
const config = require('./config')

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 900,
        autoHideMenuBar: true,
        alwaysOnTop: true
    })

    win.loadURL(config.url)
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})
  