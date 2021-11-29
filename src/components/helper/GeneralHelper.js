import {FILE_PREFIX_CODE} from '../config/constants'

function generateRandomFileName(prefix){
	var timestamp = Date.now()+Math.floor(Math.random() * 100);
	if(prefix){
		return FILE_PREFIX_CODE+'_'+prefix+'_'+timestamp;
	}else{
		return FILE_PREFIX_CODE+'_'+timestamp;
	}	
}

function getFileExtension(file){
	// return file.name.split('.').pop().toLowerCase();
	return file.type.split("/")[1].toLowerCase();
}

export {
    generateRandomFileName,
	getFileExtension
}