// import


// lambda entry point
exports.main = function(lambdaReq, success, fail) {
    
    try {
                
        ValidateRequestParams(lambdaReq)
            .then((req) => {
                lambdaReq.response.body = JSON.stringify(req.response);
                success(lambdaReq.response);
            })
            .catch(fail);

    } catch (e) {
        return fail(e);
    }
};

function ValidateRequestParams(lambdaReq) {
    return new Promise(function(resolve, reject) {
        try {

            const reqParams = { 
                response : "Hello World"
            };

            return resolve(reqParams);

        } catch (e) { reject(e); }
    });
}