import axios from 'axios';
import { fetchData, fetchSuccess, fetchError } from '../action/ApiAction';

const apiActionCreator = (url: string) => (dispatch: any) => {
  dispatch(fetchData());
  return new Promise(() => {
    axios
      .get(url)
      .then((response) => {
        dispatch(fetchSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchError(error));
        console.log(error);
      });
  });
};

export default apiActionCreator;
