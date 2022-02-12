import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//AppRegistry를 통해서 시작하는 컴포넌트를 지정
AppRegistry.registerComponent(appName, () => App);
