import axios from 'axios';
import { saveSpace } from './reducer'

const sendData = async data => {
  const url = 'someUrl';
  const result = await axios.post(url, {...data});
  return result;
};

export const middleware = store => next => action => {
  if (action.type === saveSpace) {
    sendData(action.payload);    
  }
  return next(action);
}