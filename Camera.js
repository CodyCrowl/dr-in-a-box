import { Permissions, Camera, FaceDetector, } from "expo";

async function componentWillMount(){
    const { status } =await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission:status==='granted'});
}
snap = async (recognize) => {
  try {
      if (this.camera) {
          let photo = await this.camera.takePictureAsync({ base64: true });
          if(!faceDetected) {
              alert('No face detected!');
              return;
          }

          const userId = makeId();
          const { base64 } = photo;
          this[recognize ? 'recognize' : 'enroll']({ userId, base64 });
      }
  } catch (e) {
      console.log('error on snap: ', e)
  }
};
    return (
      <View style={styles.container}>
      <Camera
    style={styles.camera}
    type={'front'}
    ref={ref => { this.camera = ref; }}
    onFacesDetected={this.handleFacesDetected}
    faceDetectorSettings={{
        mode: FaceDetector.Constants.Mode.fast,
        detectLandmarks: FaceDetector.Constants.Mode.none,
        runClassifications: FaceDetector.Constants.Mode.none,
    }}>
<TouchableOpacity
    style={{
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
    }}
    onPress={() => this.snap(false)}>
    <Text
        style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
        {' '}Enroll{' '}
    </Text>
</TouchableOpacity>
<TouchableOpacity
    style={{
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
    }}
    onPress={() => this.snap(true)}>
    <Text
        style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
        {' '}Recognize{' '}
    </Text>
</TouchableOpacity>
</Camera>
</View>
);


