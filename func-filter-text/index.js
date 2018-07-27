// import
const PHRASES = require("./phrases.js");

// lambda entry point
exports.main = function(lambdaReq, success, fail) {
    
    try {
                
        ValidateRequestParams(lambdaReq)
            .then(ProcessText)
            .then((req) => {                
                lambdaReq.response.body = "" + JSON.stringify(req.Response);                
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
            req.Response = {
                originalText: req.FilterTextRequest.InputText,
                problematicTerms: []
            };

            if (req.FilterTextRequest.InputText.length > 0) {
                // search through each term in ProblematicSearchList
                PHRASES.ProblematicSearchList.forEach((searchTerm) => {
                    let re = new RegExp(searchTerm, "gi");
                    let matches;
                    // search entire string for all matches
                    while ((matches = re.exec(req.FilterTextRequest.InputText)) !== null) {
                        console.log(`Found "${searchTerm}" at index ${matches.index}`);
                        // create found term object to return in API response
                        let foundTerm = {
                            term: searchTerm,
                            startIndex: matches.index,
                            endIndex: (matches.index + searchTerm.length)
                        };
                        // get the term data from 'database' (replacement terms, problem points, etc.)
                        let termData = PHRASES.ProblematicDatabase[searchTerm];
                        foundTerm = Object.assign(foundTerm, termData);
                        // add found term object to API response
                        req.Response.problematicTerms.push(foundTerm)
                    }
                });
            }
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
                if (reqParams.FilterTextRequest === undefined || reqParams.FilterTextRequest === null) {
                    return reject("Error: Could not parse request object.");
                } else {
                    if (!reqParams.FilterTextRequest.hasOwnProperty("InputText")) {
                        return reject("Error: No input text provided.");
                    }
                }
            } catch (e) {
                console.log(e);
                return reject("Error: Could not parse request object.");
            }

            return resolve(reqParams);

        } catch (e) { reject(e); }
    });
}