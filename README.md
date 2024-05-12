# React native app using valorant api

<img src="https://raw.githubusercontent.com/mikkelofficial7/react-native-valorant-api/main/pic1.jpg" height=400px> <img src="https://raw.githubusercontent.com/mikkelofficial7/react-native-valorant-api/main/pic2.jpg" height=400px>

Package I use :
```javascript
{
  "name": "MyReactNative",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "expo start --dev-client",
    "android": "expo run:android",
    "ios": "expo run:ios",
    "web": "expo start --web"
  },
  "dependencies": {
    "@react-native-community/masked-view": "^0.1.10",
    "@react-navigation/native": "^5.7.3",
    "@react-navigation/native-stack": "^6.9.13",
    "@react-navigation/stack": "^5.9.0",
    "@rneui/base": "^4.0.0-rc.7",
    "@rneui/themed": "^4.0.0-rc.7",
    "@types/react-native-snap-carousel": "^3.8.5",
    "deprecated-react-native-prop-types": "^2.3.0",
    "expo": "~48.0.18",
    "expo-splash-screen": "~0.18.2",
    "expo-status-bar": "~1.4.4",
    "react": "18.2.0",
    "react-native": "0.71.8",
    "react-native-svg": "13.10.0",
    "react-native-gesture-handler": "^1.7.0",
    "react-native-safe-area-context": "^3.1.4",
    "react-native-screens": "^2.10.1",
    "react-native-splash-screen": "^3.3.0"
  },
  "devDependencies": {
    "@babel/core": "^7.20.0"
  },
  "private": true
}
```

Compatible with :
```javascript
 Node v18.16.1
```

Note:
Do not forget to insert this while setup Android SDK for RN (if using mac):
```javascript
nano ~/.bash_profile
or
nano ~/.zprofile
```
and add:
```javascript
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

or you can manually do this:
```javascript
1. enter android folder in your react native project and create file named 'local.properties'
2. add value -> sdk.dir=/Users/USERNAME/Library/Android/sdk
```
and run this (provide android platform to run emulator):
```javascript
brew install --cask android-platform-tools
```

To run the react native project, using:
```javascript
npx expo run:android
```
source: https://reactnative.dev/docs/environment-setup
