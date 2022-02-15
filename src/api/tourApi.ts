import {API_KEY, API_URL} from './const';
import {jsonToQueryParams, getOS} from '../util';

export const tourApi = () => {
  var xhr = new XMLHttpRequest();
  const variables = {
    serviceKey: API_KEY,
    numOfRows: 50,
    pageNo: 1,
    MobileOS: getOS(),
    MobileApp: 'AppTest',
    areaCode: 3,
  };
  var queryParams = jsonToQueryParams(variables);

  xhr.open('GET', API_URL('areaCode') + queryParams);
  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      console.log('Status: ' + this.status + 'nHeaders: ' + JSON.stringify(this.getAllResponseHeaders()) + 'nBody: ' + this.responseText);
    }
  };

  xhr.send('');
};