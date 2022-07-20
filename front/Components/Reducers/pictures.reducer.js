export default function(pictures = [], action){
  var pictureCopy = [...pictures]
  if(action.type === 'takePicture'){
    pictureCopy.push({
      pictureName: action.pictureName,
      pictureAge: action.pictureAge,
      pictureGender: action.pictureGender,
      pictureUrl: action.pictureUrl
    })
    return pictureCopy;
  } else if(action.type === 'getPicsFromDB'){
    // pictureCopy.push()
    var results = action.pictures
    for (var i = 0; i < results.length; i++) {
      pictureCopy.push(results[i])
    }
    return pictureCopy;
  } else {
    return pictures;
  }
}
