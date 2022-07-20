import React from 'react';
import {
 View,
 ImageBackground,
 ScrollView,
 StyleSheet,
 Modal,
 TouchableHighlight,
 Alert,
 Image
} from 'react-native';
import {Avatar, Text, Button, Divider, List, ListItem} from 'react-native-elements'
import ModalPicture from './ModalPicture/ModalPicture';

import { connect } from 'react-redux';

class LibraryScreen extends React.Component {

 render() {

   var items = this.props.pictures.map((element, i) => {
     return (
       <ModalPicture
          item={i+1}
          key={i}
          img={element.pictureUrl}
          gender={element.pictureGender}
          age={element.pictureAge}/>
   )
   })

   return (
     <ImageBackground style={{flex:1}} source={require("../../assets/library-background.jpg")}>
     <ScrollView style={styles.container}>
            <List>
              {items}
            </List>
          </ScrollView>
     </ImageBackground>
   );
 }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   paddingTop: 10,
   opacity: 0.8,
 },
 subtitle:{
   flexDirection:'column',
   padding:10,
   paddingTop:5,
 },
 ratingText:{
   color: 'grey',
 },
 picNumber:{
   paddingLeft: 10,
   fontWeight: 'bold',
   fontSize: 18
 }
});


function mapStateToProps(state) {
  return { pictures: state.pictures }
}

export default connect(
    mapStateToProps,
    null
)(LibraryScreen);
