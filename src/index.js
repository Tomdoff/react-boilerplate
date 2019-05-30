import { runWithAdal } from 'react-adal';
import { authContext } from './config/adalConfig';

const DO_NOT_LOGIN = true;

runWithAdal(authContext, () => {
    // eslint-disable-next-line
    require('./routing.js');
}, DO_NOT_LOGIN);
