const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

/* global reference to the window object 
(prevent the window from closing when the javascript 
 object is garbage collected)
*/
let win;

// funtion to create window object
createWindow = ()=> {
// create browser windown
win = new BrowserWindow({width:800, height:600, icon:__dirname+"/img/gear.png"})

// loads index.html
win.loadURL(url.format({
    pathname: path.join(__dirname, "index.html"),
    protocol: 'file',
    slashes: true
}))

// open devtools
win.webContents().openDevTools()

win.on('closed', () => {
    win = null;
})
}
// run create wibdow function
app.on('ready', createWindow)