module.exports = {
  publicPath: "./",
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      // List native deps here if they don't work
      externals: ["my-native-dep"],
      // If you are using Yarn Workspaces, you may have multiple node_modules folders
      // List them all here so that VCP Electron Builder can find them
      nodeModulesPath: ["./node_modules"],
      builderOptions: {
        appId: "",
        productName: "InsToolkit", //项目名，也是生成的安装文件名，即aDemo.exe
        copyright: "Copyright ©Sovea 2021", //版权信息
        directories: {
          output: "./dist_electron", //输出文件路径
        },
        win: {
          //win相关配置
          icon: "./public/logo_instoolkit.ico", //图标，当前图标在根目录下
          target: [
            {
              target: "nsis", //利用nsis制作安装程序
              arch: [
                "x64", //64位
              ],
            },
          ],
        },
        nsis: {
          oneClick: false, // 是否一键安装
          allowElevation: true, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
          allowToChangeInstallationDirectory: true, // 允许修改安装目录
          installerIcon: "./public/logo_instoolkit.ico", // 安装图标
          uninstallerIcon: "./public/logo_instoolkit.ico", //卸载图标
          installerHeaderIcon: "./public/logo_instoolkit.ico", // 安装时头部图标
          createDesktopShortcut: true, // 创建桌面图标
          createStartMenuShortcut: true, // 创建开始菜单图标
          shortcutName: "InsToolkit", // 图标名称
        },
      },
    },
  },
};
