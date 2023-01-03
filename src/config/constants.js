// const ENV = 'local'
// const ENV = 'development'
// const ENV = 'master'

const REACT_APP_ENV = process.env.REACT_APP_ENV || 'development'

let BASEURL = '';
let BASENAME = '';
let API_BASEURL = '';

let AWS_CONFING = {}

let FILE_PREFIX_CODE = "255";

BASEURL = process.env.PUBLIC_URL;
BASENAME = process.env.REACT_APP_ROUTE_FLAG;    


const APP_ENV_TYPE = Object.freeze({
    LOCAL: 'local',
    DEVELOPMENT: 'development',
    STAGING: 'staging',
    PRODUCTION: 'production',
});

const REDUX_LOCAL_STORE_KEY = 'store-data'

switch (REACT_APP_ENV) {
    case APP_ENV_TYPE.LOCAL:

        API_BASEURL = "https://reqres.in";
        
        AWS_CONFING.AWS_S3_BUCKET = 'AWS_S3_BUCKET'
        AWS_CONFING.AWS_S3_ACCESSKEYID = 'AWS_S3_ACCESSKEYID'
        AWS_CONFING.AWS_S3_SECRETACCESSKEY = 'AWS_S3_SECRETACCESSKEY'
        AWS_CONFING.AWS_S3_REGION = 'AWS_S3_REGION'
    
        AWS_CONFING.AWS_S3_URL = 'AWS_S3_URL'

        AWS_CONFING.FOLDER_ADD = 'project/temp'
        
        AWS_CONFING.USERS_FOLDER = 'project/users/'
        AWS_CONFING.ASSETS_CMS_FOLDER = 'project/assets/cms/'

        break;

    case APP_ENV_TYPE.DEVELOPMENT:

        API_BASEURL = "https://reqres.in";

        AWS_CONFING.AWS_S3_BUCKET = 'AWS_S3_BUCKET_DEVELOPMENT'
        AWS_CONFING.AWS_S3_ACCESSKEYID = 'AWS_S3_ACCESSKEYID_DEVELOPMENT'
        AWS_CONFING.AWS_S3_SECRETACCESSKEY = 'AWS_S3_SECRETACCESSKEY_DEVELOPMENT'
        AWS_CONFING.AWS_S3_REGION = 'AWS_S3_REGION_DEVELOPMENT'
    
        AWS_CONFING.AWS_S3_URL = 'AWS_S3_URL_DEVELOPMENT'

        AWS_CONFING.FOLDER_ADD = 'project/temp'

        AWS_CONFING.USERS_FOLDER = 'project/users/'
        AWS_CONFING.ASSETS_CMS_FOLDER = 'project/assets/cms/'

        break;

    case APP_ENV_TYPE.PRODUCTION:

        API_BASEURL = "https://reqres.in";

        AWS_CONFING.AWS_S3_BUCKET = 'AWS_S3_BUCKET_PRODUCTION'
        AWS_CONFING.AWS_S3_ACCESSKEYID = 'AWS_S3_ACCESSKEYID_PRODUCTION'
        AWS_CONFING.AWS_S3_SECRETACCESSKEY = 'AWS_S3_SECRETACCESSKEY_PRODUCTION'
        AWS_CONFING.AWS_S3_REGION = 'AWS_S3_REGION_PRODUCTION'
    
        AWS_CONFING.AWS_S3_URL = 'AWS_S3_URL_PRODUCTION'

        AWS_CONFING.FOLDER_ADD = 'project/temp'

        AWS_CONFING.USERS_FOLDER = 'project/users/'
        AWS_CONFING.ASSETS_CMS_FOLDER = 'project/assets/cms/'

        break;

    default:
        break;
}

export {
    BASEURL,
    BASENAME,
    AWS_CONFING,
    API_BASEURL,
    FILE_PREFIX_CODE,
    APP_ENV_TYPE,
    REDUX_LOCAL_STORE_KEY
}