const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    titleBarStyle: "hidden",
    width: 930,
    height: 630,
  });

  win.loadURL("http://localhost:3000");
}

app.whenReady().then(() => {
  createWindow();
});
