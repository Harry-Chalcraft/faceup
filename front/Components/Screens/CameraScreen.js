import React from 'react';
import { Button, Text, View } from 'react-native';
import { Camera, Permissions } from 'expo';

import ipAddress from '../../config';
import { connect } from 'react-redux';

class CameraScreen extends React.Component {
  state = {
    permision: null,
    type: Camera.Constants.Type.back
  };

  async componentDidMount() {
    var { status } = await Permissions.askAsync(Permissions.CAMERA);
    var permision = (status === 'granted')? true : false;
    this.setState({ permision });
  }


  onPictureSaved = async photo => {

    var data = new FormData();

    data.append('photo', {
      uri: photo.uri,
      type: 'image/jpeg',
      name: 'nomImage',
    });

    //pensez a mettre votre IP backend !!
    await fetch(ipAddress+"/upload", {
      method: 'post',
      body: data
    }).then(res => {
      return res.json()
    }).then(picture => {
      this.props.handlePicture(picture.data.name, picture.data.age, picture.data.gender, picture.data.url)
    }).catch(err => {
      console.log(err)
    })

  }


  render() {
    if (this.state.permision === null) {
      return <View />;
    }
    else if (this.state.permision === false) {
      return <Text>No access to camera</Text>;
    }
    else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type}
            ref={ref => { this.camera = ref; }}>

          </Camera>
          <Button
            title="SNAPSHOT"
            color="#841584"
            onPress={() => {
              if (this.camera) {
                 this.camera.takePictureAsync({
                     onPictureSaved: this.onPictureSaved,
                     quality : 0.7,
                     base64: true,
                     exif: true
                 });
              }
            }}
          />
        </View>
      );
    }
  }
}

// My new container component
function mapDispatchToProps(dispatch) {
  return {
    handlePicture: function(pictureName, pictureAge, pictureGender, pictureUrl) {
        dispatch({
          type: 'takePicture',
          pictureName,
          pictureAge,
          pictureGender,
          pictureUrl
        })
    }
  }
}

export default connect(
    null,
    mapDispatchToProps
)(CameraScreen);
