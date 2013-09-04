exports.auth = function(credentials, callback, reqOptions, protocolInterface) {
    var authReqStr = credentials.username + ':' + credentials.password,
		authReqHeader = 'Basic ' + new Buffer(authReqStr).toString('base64');

    reqOptions.headers['Authorization'] = authReqHeader;
	
    protocolInterface.request(reqOptions, function(res) {
        callback(res);
    }).end();
};
