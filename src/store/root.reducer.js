import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import productRoot from '../reducer/product.reducer'

// const authPersistConfig = {
//   storage: AsyncStorage,
//   key: 'auth',
// };

export default combineReducers({
  productRoot
});
