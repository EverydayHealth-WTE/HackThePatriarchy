// import


// lambda entry point
exports.main = function(lambdaReq, success, fail) {
    
    try {
                
        ValidateRequestParams(lambdaReq)
            .then(ProcessText)
            .then((req) => {
                lambdaReq.response.body = JSON.stringify(req.response);
                success(lambdaReq.response);
            })
            .catch(fail);

    } catch (e) {
        return fail(e);
    }
};


function ProcessText(req) {
    return new Promise(function(resolve, reject) {
        try {
            // do something here
            return resolve(req)
        } catch (e) {
            return reject(e);
        }
    });
}

function ValidateRequestParams(lambdaReq) {
    return new Promise(function(resolve, reject) {
        try {

            const reqParams = { };
            try {
                reqParams.FilterTextRequest = lambdaReq.getBodyJSON();
            } catch (e) {
                console.log(e);
                return reject("Error: Could not parse request object.");
            }

            return resolve(reqParams);

        } catch (e) { reject(e); }
    });
}