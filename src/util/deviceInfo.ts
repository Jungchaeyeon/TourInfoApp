import {Platform} from 'react-native';

export const getOS = () => {
  const os = Platform.OS;
  if (!os) {
    return 'ETC';
  }

  return os === 'ios' ? 'IOS' : 'AND';
};