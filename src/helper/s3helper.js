import S3 from 'react-aws-s3';

import { AWS_CONFING } from '../config/constants'

const { AWS_S3_BUCKET, AWS_S3_REGION, AWS_S3_ACCESSKEYID, AWS_S3_SECRETACCESSKEY } = AWS_CONFING


function uploadFile(file, newFileName, dirName) {

    let config = {
        bucketName: AWS_S3_BUCKET,
        dirName: dirName, /* optional */
        region: AWS_S3_REGION,
        accessKeyId: AWS_S3_ACCESSKEYID,
        secretAccessKey: AWS_S3_SECRETACCESSKEY,
    }

    let ReactS3Client = new S3(config);

    return new Promise(async (resolve, reject) => {
        ReactS3Client
            .uploadFile(file, newFileName)
            .then((data) => {
                resolve(data)
            }).catch((err) => {
                console.error("🚀 ~ file: s3helper.js ~ line 26 ~ .then ~ err", err)
                reject(err)
            })
    })

}

function deleteFile(fileName, dirName) {

    let config = {
        bucketName: AWS_S3_BUCKET,
        dirName: dirName, /* optional */
        region: AWS_S3_REGION,
        accessKeyId: AWS_S3_ACCESSKEYID,
        secretAccessKey: AWS_S3_SECRETACCESSKEY,
    }

    let ReactS3Client = new S3(config);

    return new Promise(async (resolve, reject) => {
        ReactS3Client
            .deleteFile(fileName)
            .then((response) => {
                resolve(response)
            })
            .catch((err) => {
                console.error("🚀 ~ file: s3helper.js ~ line 55 ~ returnnewPromise ~ err", err)
                reject(err)
            })
    })

}

export {
    uploadFile,
    deleteFile
}