// import dependencies
const { app, Tray, nativeImage } = require("electron");
const exec = require("child_process").exec;
const path = require("path");

// define variables
let tray = null;
let status = null;
let icon = null;

// create app
app.on("ready", () => {
  app.dock.hide();
  exec(
    "defaults read com.apple.Finder AppleShowAllFiles",
    (error, stdout, stderr) => {
      // set initial icon
      status = stdout.trim();
      if (status == "NO")
        icon = path.join(__dirname, "./icons/yesTemplate.png");
      else icon = path.join(__dirname, "./icons/noTemplate.png");
      // create tray
      tray = new Tray(icon);
      tray.setToolTip("click to hide and show files, right click to quit app.");
      // left click action
      tray.on("click", function(event) {
        toggleFiles();
      });
      // right click action
      tray.on("right-click", function(event) {
        app.quit();
      });
    }
  );
});

// toggle hidden files
const toggleFiles = () => {
  if (status === "NO") {
    exec(
      "defaults write com.apple.finder AppleShowAllFiles YES & killall Finder"
    );
    status = "YES";
    icon = path.join(__dirname, "./icons/noTemplate.png");
    tray.setImage(icon);
  } else {
    exec(
      "defaults write com.apple.finder AppleShowAllFiles NO & killall Finder"
    );
    status = "NO";
    icon = path.join(__dirname, "./icons/yesTemplate.png");
    tray.setImage(icon);
  }
};
