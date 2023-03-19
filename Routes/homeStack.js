import{createStackNavigator} from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';
import App from '../App';
import Medications from '../screens/Medications';

const screens = {
    home: {
        screen: App
    },
    Medications: {
        screen: Medications
    },
}
const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);