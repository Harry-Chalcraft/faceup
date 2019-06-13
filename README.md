# faceup
A mobile app that uses face recognition on the user's photos

This app allows the user to take a picture, save it, and use face recognition to collect data from the photo, in this case the gender and the age of the subject.

This is done in the following steps:

- After getting permission from the user, the app will open the camera screen to take a picture. 

- Once the picture is taken, it is stored on the NodeJS server. 

- It is then uploaded on [Cloudinary](https://cloudinary.com/), a media cloud service. 

- Once it is uploaded we can retrieve it's url, that we send to the [Microsoft Azure's face recognition software](https://azure.microsoft.com/fr-fr/services/cognitive-services/directory/vision/)

- Finally we send the response of the AI to the frontend to display the photo, the age of the subject and their gender.

**Screenshots:**
* Home screen:


![locapic1](https://i.ibb.co/ZSGm48X/locapic-home.jpg)  ![locapic3](https://i.ibb.co/mNTXWqS/locapic-chat-jpg.jpg) ![locapic2](https://i.ibb.co/jfPnRLr/locapic-maps.jpg)

* Maps screen:




* Chat screen:




## Developed With

* [Node.js](https://nodejs.org/en/) - Javascript runtime
* [Express.js](https://expressjs.com/fr/) - a web application infrastructure for Node.js
* [React Native](https://facebook.github.io/react-native/) - via Expo.io
* [React Redux](https://github.com/reduxjs/react-redux) - Redux is a predictable state container for JavaScript apps.
* [React-native-maps](https://github.com/react-native-community/react-native-maps) - A module that enable mapview for Android or iOS
* [Socket.io](https://socket.io/) - A JS framework that enables real-time, bidirectional and event-based communication.
* [Facebook Authentication](https://developers.facebook.com/) - To implement login via user's facebook
