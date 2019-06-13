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


![faceup1](https://i.ibb.co/CM9xHFZ/faceup-home.jpg)

* Camera screen:


![faceup2](https://i.ibb.co/6wthCGg/faceup-camera2.jpg)

* Library screen:


![faceup3](https://i.ibb.co/FVPtf3V/faceup-library.jpg)

* Modal:


![faceup4](https://i.ibb.co/VvQsRnt/faceup-modal.jpg)

## Developed With

* [Node.js](https://nodejs.org/en/) - Javascript runtime
* [Express.js](https://expressjs.com/fr/) - a web application infrastructure for Node.js
* [React Native](https://facebook.github.io/react-native/) - via Expo.io
* [React Redux](https://github.com/reduxjs/react-redux) - Redux is a predictable state container for JavaScript apps.
* [React-native-maps](https://github.com/react-native-community/react-native-maps) - A module that enable mapview for Android or iOS
* [Socket.io](https://socket.io/) - A JS framework that enables real-time, bidirectional and event-based communication.
* [Facebook Authentication](https://developers.facebook.com/) - To implement login via user's facebook
