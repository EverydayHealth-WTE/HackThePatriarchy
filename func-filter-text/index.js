// import
const PHRASES = require("./phrases.js");
const WORDS = require("./words.js");

// lambda entry point
exports.main = function(lambdaReq, success, fail) {
    
    try {
                
        ValidateRequestParams(lambdaReq)
            .then(ProcessText)
            .then(CalculateScore)
            .then((req) => {                
                lambdaReq.response.body = "" + JSON.stringify(req.Response);                
                success(lambdaReq.response);
            })
            .catch(fail);

    } catch (e) {
        return fail(e);
    }
};

function WordCount(str) {
    return str
      .split(' ')
      .filter(function(n) { return n != '' })
      .length;
}

function CalculateScore(req) {
    return new Promise(function(resolve, reject) {
        try {
            
            let sumProblemPoints = (sum, problematicTerm) => sum + problematicTerm.ProblemPoints;
            let sumPositivePoints = (sum, positiveTerm) => sum + positiveTerm.BonusPoints;

            req.Response.score = {
                problemPoints: req.Response.problematicTerms.reduce(sumProblemPoints, 0),
                positivePoints: req.Response.positiveTerms.reduce(sumPositivePoints, 0),
                get netPoints() { return this.problemPoints - this.positivePoints; },
                get rawScore() { 
                    if (this.netPoints > 999999) {
                        return 0;
                    } else if (this.netPoints > this.wordCount) {
                        return .65;
                    } else {
                        return 1 - (this.netPoints / this.wordCount); 
                    }
                },
                get normalizedScore() {
                    let maxScore = ((95 - this.netPoints - req.Response.problematicTerms.length));
                    let modifier = this.rawScore;
                    if (modifier > 1) {
                        return Math.min(100, maxScore + this.positivePoints);
                    }
                    return Math.min(100, Math.max(0, maxScore * modifier));
                },
                grade: null, // todo: need to get grade range
                description: null, // todo: need to write grade descriptions
                wordCount: WordCount(req.FilterTextRequest.InputText),
            };                        
            return resolve(req);

        } catch (e) { reject(e); }
    });
}

function ProcessText(req) {
    return new Promise(function(resolve, reject) {
        try {
            req.Response = {
                originalText: req.FilterTextRequest.InputText,
                problematicTerms: [],
                positiveTerms: [],
                score: {}
            };
            let foundPhrases = [];
            if (req.FilterTextRequest.InputText.length > 0) {
                // search through each term in ProblematicSearchList
                PHRASES.ProblematicSearchList.forEach((searchTerm) => {
                    let re = new RegExp(searchTerm, "gi");
                    let matches;
                    // search entire string for all matches
                    while ((matches = re.exec(req.FilterTextRequest.InputText)) !== null) {
                        console.log(`Found "${searchTerm}" at index ${matches.index}`);
                        // create list of found phrases
                        foundPhrases.push(searchTerm);
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
                WORDS.ProblematicSearchList.forEach((searchTerm) => {
                    let re = new RegExp("\\b"+searchTerm+"\\b", "gi");
                    let matches;
                    // search entire string for all matches
                    while ((matches = re.exec(req.FilterTextRequest.InputText)) !== null) {
                        console.log(`Found "${searchTerm}" at index ${matches.index}`);
                        // check if word is a part of found phrases
                        if (foundPhrases.some((phrase) => { return new RegExp(searchTerm, "gi").test(phrase); } )) {
                            continue;
                        }
                        // create found term object to return in API response
                        let foundTerm = {
                            term: searchTerm,
                            startIndex: matches.index,
                            endIndex: (matches.index + searchTerm.length)
                        };
                        // get the term data from 'database' (replacement terms, problem points, etc.)
                        let termData = WORDS.ProblematicDatabase[searchTerm];
                        foundTerm = Object.assign(foundTerm, termData);
                        // add found term object to API response
                        req.Response.problematicTerms.push(foundTerm)
                    }
                });
                // search through each term in Positive
                PHRASES.PositiveSearchList.forEach((searchTerm) => {
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
                        // get the term data from 'database' (positive points)
                        let termData = PHRASES.PositiveDatabase[searchTerm];
                        foundTerm = Object.assign(foundTerm, termData);
                        // add found term object to API response
                        req.Response.positiveTerms.push(foundTerm)
                    }
                });
                WORDS.PositiveSearchList.forEach((searchTerm) => {
                    let re = new RegExp("\\b"+searchTerm+"\\b", "gi");
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
                        // get the term data from 'database' (positive points)
                        let termData = WORDS.PositiveDatabase[searchTerm];
                        foundTerm = Object.assign(foundTerm, termData);
                        // add found term object to API response
                        req.Response.positiveTerms.push(foundTerm)
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