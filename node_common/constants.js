const path = require('path');

export const POLLING_RATE = 5000;
export const POWERGATE_HOST = 'http://0.0.0.0:6002';

export const AVATAR_STORAGE_URL = path.join(
  __dirname,
  '../public/static/system/'
);
export const FILE_STORAGE_URL = path.join(__dirname, '../public/static/files/');

export const GITHUB_URL = 'https://github.com/filecoin-project/filecoin-client';
