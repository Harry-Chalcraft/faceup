# faceup
A mobile app that uses face recognition on the user's photos

This app allows the user to take a picture, save it, and use face recognition to collect data from the photo, in this case the gender and the age of the subject.

This is done in the following steps:

- After getting permission from the user, the app will open the camera screen to take a picture. 

- Once the picture is taken, it is stored on the NodeJS server. 

- It is then uploaded on [Cloudinary](https://cloudinary.com/), a media cloud service. 

- Once it is uploaded we can retrieve it's url, that we send to the [Microsoft Azure's face recognition software](https://azure.microsoft.com/fr-fr/services/cognitive-services/directory/vision/)
Here we choose only to use the gender and age data, but the Azure AI can return much more ( is the subject smiling, hair color, is the subject wearing glasses, color of the eyes, emotion ...)

- Finally we send the response of the AI to the frontend to display the photo, the age of the subject and their gender.

**Screenshots:**
* Home screen:


![faceup1](https://i.ibb.co/CM9xHFZ/faceup-home.jpg)

* Camera screen:


![faceup2](https://i.ibb.co/RcCDnGy/faceup-camera2.jpg)

* Library screen:


![faceup3](https://i.ibb.co/FVPtf3V/faceup-library.jpg)

* Modal:


![faceup4](https://i.ibb.co/VvQsRnt/faceup-modal.jpg)

## Developed With

* [Node.js](https://nodejs.org/en/) - Javascript runtime
* [Express.js](https://expressjs.com/fr/) - a web application infrastructure for Node.js
* [React Native](https://facebook.github.io/react-native/) - via Expo.io
* [React Redux](https://github.com/reduxjs/react-redux) - Redux is a predictable state container for JavaScript apps.
* [Cloudinary](https://cloudinary.com/) - A media cloud service
* [Microsoft Azure](https://azure.microsoft.com/fr-fr/) - Microsoft's very diverse AI service
