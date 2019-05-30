
import { AuthenticationContext, adalFetch, withAdalLogin } from 'react-adal';

export const adalConfig = {
    tenant: process.env.TENANT_ID,
    clientId: process.env.CLIENT_ID,
    endpoints: {
        api: process.env.END_POINT
    },
    cacheLocation: process.env.CACHE_LOCATION
};

export const authContext = new AuthenticationContext(adalConfig);

export const adalApiFetch = (fetch, url, options) =>
    adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);

export const withAdalLoginApi = withAdalLogin(authContext, adalConfig.endpoints.api);
