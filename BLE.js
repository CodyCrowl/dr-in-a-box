import {BleManager} from 'react-native-ble-plx'

const _BleManager = new BleManager();
const startScan = () => {
    _BleManager.startDeviceScan(Null, {
      allowDuplicates: false,
      },
      async (error, device) => {
        setDisplaText('Scanning...');
        if (error) {
          _BleManager.stopDeviceScan();
        }
        console.log(device.localName, device.name);
        if (device.localName == 'Test' || device.name == 'Test') {
          setDevices([...devices, device]);
        
          _BleManager.stopDeviceScan();} }, );};
const connectDevice = device => {
            _BleManager.stopDeviceScan();
          _BleManager.connectToDevice(device.id).then(async device => {
                       await device.discoverAllServicesAndCharacteristics();
                       _BleManager.stopDeviceScan();
                       setDisplaText(`Device connected\n with ${device.name}`);
                        setConnectedDevice(device);
                           setDevices([]);
            device.services().then(async service => {
                    for (const ser of service) {
                        ser.characteristics().then(characteristic => {
                      getCharacteristics([...characteristics, characteristic]);
                        });
          }
        });
    });
};
const disconnectDevice = () => {
    connectedDevice.cancelConnection();
};

  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      padding: 10,
      // justifyContent: 'center',
      // alignItems: 'center',
    },
    circleView: {
      width: 250,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      height: 250,
      borderRadius: 150,
      borderWidth: 1,
    },
    boldTextStyle: {
      fontSize: 20,
      color: '#000',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });