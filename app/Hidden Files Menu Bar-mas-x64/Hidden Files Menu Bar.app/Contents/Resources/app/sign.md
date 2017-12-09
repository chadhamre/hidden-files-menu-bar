https://github.com/electron-userland/electron-osx-sign/wiki/Packaging-and-Submitting-an-Electron-App-to-the-Mac-App-Store

electron-packager . "Hidden Files Menu Bar" --app-bundle-id=com.electron.hidden-files-menu-bar --helper-bundle-id=com.electron.hidden-files-menu-bar.helper --app-version=1.0.0 --build-version=1.0.101 --platform=mas --arch=x64 --version=0.36.7 --icon=./build/icon.icns --overwrite --sign --sign-entitlements="./build/parent.entitlements" --sign-entitlements-inherit="./build/child.entitlements"

<!-- electron-osx-sign "Hidden
Files Menu Bar-mas-x64/Hidden Files Menu Bar.app" --verbose  -->

electron-osx-flat "Hidden Files Menu Bar-mas-x64/Hidden Files Menu Bar.app" --verbose
