// const ENV = 'local'
// const ENV = 'development'
// const ENV = 'master'

const REACT_APP_ENV = process.env.REACT_APP_ENV || 'development'
console.log("🚀 ~ file: constants.js ~ line 6 ~ REACT_APP_ENV", REACT_APP_ENV)

var BASEURL = '';
var BASENAME = '';
var API_BASEURL = '';

var AWS_CONFING = {}

var FILE_PREFIX_CODE = "255";

switch (REACT_APP_ENV) {
    case 'local':

        BASEURL = process.env.PUBLIC_URL;
        BASENAME = process.env.REACT_APP_ROUTE_FLAG;    
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

    case 'development':

        BASEURL = process.env.PUBLIC_URL;
        BASENAME = process.env.REACT_APP_ROUTE_FLAG;
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

    case 'master':

        BASEURL = process.env.PUBLIC_URL;
        BASENAME = process.env.REACT_APP_ROUTE_FLAG;
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

    default:
        break;
}

export {
    BASEURL,
    BASENAME,
    AWS_CONFING,
    API_BASEURL,
    FILE_PREFIX_CODE
}