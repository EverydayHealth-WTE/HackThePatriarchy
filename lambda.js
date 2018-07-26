const AWSSDK = require("aws-sdk");
AWSSDK.config.update({
    region: "us-east-1"
});

// lambda entry point
exports.handler = function(event, context, callback) {

    let lambda;

    const succeed = function(response) {
        lambda.response = response;
        if (lambda.event.debug) {
            // todo: log something?
        }
        lambda.callback(null, lambda.response);
    };
    
    const fail = function(error) {
        console.log(error);
        if (lambda.event.debug) {
            console.log(JSON.stringify(lambda.event));
        }
        lambda.response.statusCode = 400;
        lambda.response.body = JSON.stringify({"Error" : error.toString()});
        lambda.callback(null, lambda.response);
    };

    try {
        // create lambda helper object
        lambda = CreateLambda(event, context, callback);

        // load module based on function name (ignoring alias)
        const functionModule = require("./" + lambda.functionName);   
        
        // execute function, with callbacks
        functionModule.main(lambda, succeed, fail);
      
    } catch (ex) {
        fail(ex);
    }
};

function CreateLambda(event, context, callback) {   
    return {        
        
        functionName: context.functionName.replace(/:(.*)/gi, ""),
        event: event,
        context: context,
        callback: callback,   
        env: process.env,
        response : {
            statusCode: 200,
            headers: {},
            body: ""
        },        

        STAGE_VAR_INTERNAL_AUTH: "InternalAuthKey",
        ENV_INTERNAL_AUTH: "InternalAuthKey",
        JWT_HEADER: "x-wte-auth",

        get debug() {
            return (this.event.requestContext.debug !== undefined);
        },
        
        get stage() {
            if (this.__stage === undefined) {
                this.__stage = this._getStage();
            }
            return this.__stage;
        },

        get UserClaims() {
            if (this.__claims === undefined) {
                if (this.__jwt === undefined) {
                    this.__jwt = this.getJWT();
                }
                // let it fail if jwt is not valid
                let claims = Buffer.from(this.__jwt.split(/\./gi)[1],"base64").toString();
                this.__claims = JSON.parse(claims);
            }
            return this.__claims;
        },
        
        isAuthorizedInternalRequest: function() {            
            const passedInternalAuth = this.getStageVar(this.STAGE_VAR_INTERNAL_AUTH, undefined);
            const correctInternalAuth = this.getEnv(this.ENV_INTERNAL_AUTH, undefined);
            return (passedInternalAuth !== undefined && correctInternalAuth !== undefined
                    && passedInternalAuth == correctInternalAuth);
        },

        getEnv: function(varName, defaultVal = null) {
            varName = this._stagedEnvVar(varName);
            return this.env.hasOwnProperty(varName) ? this.env[varName] : defaultVal;
        },

        setEnv: function(varName, varVal) {
            varName = this._stagedEnvVar(varName);
            process.env[varName] = varVal;
        },

        getJWT: function(jwtHeaderName = this.JWT_HEADER) {
            return this.getHeaderParam(jwtHeaderName, null);
        },

        getBodyJSON: function(defaultVal = null) {
            if (this.event !== null && this.event.body !== null) {
                return JSON.parse(this.event.body);
            } else {
                return defaultVal;
            }
        },

        getHeaderParam: function(param, defaultVal = null) {
            return this._getParam("headers", param, defaultVal);
        },
        
        getQueryParam: function(param, defaultVal = null) {
            return this._getParam("queryStringParameters", param, defaultVal);
        },

        getPathParam: function(param, defaultVal = null) {
            return this._getParam("pathParameters", param, defaultVal);
        },

        getStageVar: function(param, defaultVal = null) {
            return this._getParam("stageVariables", param, defaultVal);
        },
        
        _getStage: function() {
            // first check stage vars, then check lambda func alias
            const stageVarStage = this.getStageVar("stage");
            if (stageVarStage != null) {
                return stageVarStage;
            } else if (stageVarStage == null) {
                const funcArn = this.functionName.split(":");
                if (funcArn.length == 2) {
                    return funcArn[1];
                }
            }
            // if neither of those worked, check requestContext
            const rcStage = this._getParam("requestContext", "stage");
            if (rcStage == "test-invoke-stage") {
                this.event.requestContext.debug = true;
                return "dev";
            } else if (rcStage != null) {
                return rcStage;
            }
        },
        
        _getParam: function(paramType, param, defaultVal = null) {
            var val = defaultVal;
            if (this.event !== null && this.event.hasOwnProperty(paramType)
                && this.event[paramType] !== null 
                && this.event[paramType].hasOwnProperty(param)) {
                val = this.event[paramType][param];        
            }
            return val;
        },

        _stagedEnvVar: function(varName) {
            return this.stage + "_" + varName;
        },
        
        AWS : {
            
            _ddbClient: null,
            _lambdaClient: null,
            _sqsClient: null,
            _snsClient: null,

            get DDB() {
                if (this._ddbClient === null) {
                    this._ddbClient = new AWSSDK.DynamoDB.DocumentClient();
                }
                return this._ddbClient;
            },

            get LAMBDA() {
                if (this._lambdaClient === null) {
                    this._lambdaClient =  new AWSSDK.Lambda();
                }
                return this._lambdaClient;
            },

            get SQS() {
                if (this._sqsClient === null) {
                    this._sqsClient =  new AWSSDK.SQS();
                }
                return this._sqsClient;
            },

            get SNS() {
                if (this._snsClient === null) {
                    this._snsClient =  new AWSSDK.SNS();
                }
                return this._snsClient;
            }
        }
    };
}