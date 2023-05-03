import FaceDetection, { FaceDetectorContourMode, FaceDetectorLandmarkMode, FaceContourType } from "react-native-face-detection";

function FacialRecognition() {
  const devices = useCameraDevices('front-camera');
  const device = devices.back;
  const isAppForeground = useIsAppForeground();

  if (device == null) return <LoadingView />
  return (
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={useIsAppForeground}
    />
  )
}
<Camera {...props} photo={true} />
const photo = await camera.current.takePhoto({
  flash: 'on'
})

async function processFaces(imagePath) {
  const options = {
    landmarkMode: FaceDetectorLandmarkMode.ALL,
    contourMode: FaceDetectorContourMode.ALL
  };

  const faces = await FaceDetection.processImage(imagePath, options);

  faces.forEach(face => {
    console.log('Head rotation on X axis: ', face.headEulerAngleX);
    console.log('Head rotation on Y axis: ', face.headEulerAngleY);
    console.log('Head rotation on Z axis: ', face.headEulerAngleZ);

    console.log('Left eye open probability: ', face.leftEyeOpenProbability);
    console.log('Right eye open probability: ', face.rightEyeOpenProbability);
    console.log('Smiling probability: ', face.smilingProbability);

    face.faceContours.forEach(contour => {
      if (contour.type === FaceContourType.FACE) {
        console.log('Face outline points: ', contour.points);
      }
    });

    face.landmarks.forEach(landmark => {
      if (landmark.type === FaceLandmarkType.LEFT_EYE) {
        console.log('Left eye outline points: ', landmark.points);
      } else if (landmark.type === FaceLandmarkType.RIGHT_EYE) {
        console.log('Right eye outline points: ', landmark.points);
      }
    });
  });
}

const imagePath = '/path/to/face-image.png';

processFaces(imagePath).then(() => console.log('Finished processing file.'));