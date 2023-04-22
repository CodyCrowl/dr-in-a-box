function FacialRecognition() {
    const devices = useCameraDevices('front-camera')
    const device = devices.back
    const isAppForeground = useIsAppForeground()
  
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
  function HotDiggityDog() {
    const frameProcessor = useFrameProcessor((frame) => {
      'worklet'
      const isHotdog = detectIsHotdog(frame)
      console.log(isHotdog ? "Hotdog!" : "Not Hotdog.")
    }, [])
  
    return (
      <Camera
        {...cameraProps}
        frameProcessor={frameProcessor}
      />
    )
  }
  