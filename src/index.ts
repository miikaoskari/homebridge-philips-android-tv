import type { API } from 'homebridge';

import { PhilipsAndroidTVPlatform } from './PhilipsTVPlatform';
import { PLATFORM_NAME } from './settings';


// Entry point registering platform with Homebridge
module.exports = (api: API) => {
    api.registerPlatform(PLATFORM_NAME, PhilipsAndroidTVPlatform);
};
