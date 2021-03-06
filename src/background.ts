"use strict";

import { app, protocol, BrowserWindow, ipcMain, Menu, Tray } from "electron";
import { createProtocol } from "vue-cli-plugin-electron-builder/lib";
import path from "path";
import installExtension, { VUEJS_DEVTOOLS } from "electron-devtools-installer";
const isDevelopment = process.env.NODE_ENV !== "production";

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { secure: true, standard: true } },
]);
let win: BrowserWindow;
let tray: Tray;
async function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    useContentSize: true,
    frame: false,
    icon: path.join(__dirname, "/assets/logo.ico"),
    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      // nodeIntegration: (process.env
      //   .ELECTRON_NODE_INTEGRATION as unknown) as boolean,
      nodeIntegration: true,
      enableRemoteModule: true, // <--- added
    },
  });

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
    if (!process.env.IS_TEST) win.webContents.openDevTools();
  } else {
    createProtocol("app");
    // Load the index.html when not in development
    win.loadURL("app://./index.html");
  }
  tray = new Tray(path.join(__dirname, "/assets/removebg-preview.png"));
  const contextMenu = Menu.buildFromTemplate([
    {
      label: "DashBoard",
      click: () => {
        win.show();
      },
    },
    {
      label: "Quit",
      click: () => {
        win.destroy();
      },
    }, //（强制退出）
  ]);
  tray.setToolTip("InsToolkit");
  tray.setContextMenu(contextMenu);
  tray.on("click", () => {
    //点击通知区图标打开关闭应用
    win.isVisible() ? win.hide() : win.show();
    // win.isVisible() ?win.setSkipTaskbar(false):win.setSkipTaskbar(true);
  });
}

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS);
    } catch (e) {
      console.error("Vue Devtools failed to install:", e.toString());
    }
  }
  createWindow();
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === "win32") {
    process.on("message", (data) => {
      if (data === "graceful-exit") {
        app.quit();
      }
    });
  } else {
    process.on("SIGTERM", () => {
      app.quit();
    });
  }
}

// 自定义标题栏，最小化，最大化，关闭
ipcMain.on("window-min", () => win.minimize());
ipcMain.on("window-max", () => {
  if (win.isMaximized()) {
    win.unmaximize();
  } else {
    win.maximize();
  }
});
ipcMain.on("window-close", () => {
  win.destroy();
});
ipcMain.on("window-closed", () => {
  win.hide();
  // win.setSkipTaskbar(true);
});
ipcMain.on("window-ontop", () => {
  if (!win.isAlwaysOnTop()) {
    win.setAlwaysOnTop(true); // 窗口置顶
    win.webContents.send("is_top", "");
  } else {
    win.setAlwaysOnTop(false); // 取消窗口置顶
    win.webContents.send("not_top", "");
  }
});
