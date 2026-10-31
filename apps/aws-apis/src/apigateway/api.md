<h1 id="amazon-api-gateway">Amazon API Gateway v2015-07-09</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Amazon API Gateway</fullname> <p>Amazon API Gateway helps developers deliver robust, secure, and scalable mobile and web application back ends. API Gateway allows developers to securely connect mobile and web applications to APIs that run on AWS Lambda, Amazon EC2, or other publicly addressable web services that are hosted outside of AWS.</p>

Base URLs:

* <a href="http://apigateway.us-east-1.amazonaws.com">http://apigateway.us-east-1.amazonaws.com</a> - The Amazon API Gateway multi-region endpoint

* <a href="https://apigateway.us-east-1.amazonaws.com">https://apigateway.us-east-1.amazonaws.com</a> - The Amazon API Gateway multi-region endpoint

* <a href="http://apigateway.cn-north-1.amazonaws.com.cn">http://apigateway.cn-north-1.amazonaws.com.cn</a> - The Amazon API Gateway endpoint for China (Beijing) and China (Ningxia)

* <a href="https://apigateway.cn-north-1.amazonaws.com.cn">https://apigateway.cn-north-1.amazonaws.com.cn</a> - The Amazon API Gateway endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/apigateway/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-api-gateway-default">Default</h1>

## GetApiKeys

<a id="opIdGetApiKeys"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/apikeys \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /apikeys`

Gets information about the current ApiKeys resource.

<h3 id="getapikeys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|position|query|string|false|The current pagination position in the paged result set.|
|limit|query|integer|false|The maximum number of returned results per page. The default value is 25 and the maximum value is 500.|
|name|query|string|false|The name of queried API keys.|
|customerId|query|string|false|The identifier of a customer in AWS Marketplace or an external system, such as a developer portal.|
|includeValues|query|boolean|false|A boolean flag to specify whether (<code>true</code>) or not (<code>false</code>) the result contains key values.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "warnings": {},
  "position": "string",
  "items": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getapikeys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApiKeys](#schemaapikeys)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateApiKey

<a id="opIdCreateApiKey"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/apikeys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "description": "string",
    "enabled": true,
    "generateDistinctId": true,
    "value": "string",
    "stageKeys": [
      {
        "restApiId": {},
        "stageName": {}
      }
    ],
    "customerId": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /apikeys`

Create an ApiKey resource. 

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "enabled": true,
  "generateDistinctId": true,
  "value": "string",
  "stageKeys": [
    {
      "restApiId": {},
      "stageName": {}
    }
  ],
  "customerId": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createapikey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» name|body|string|false|The name of the ApiKey.|
|» description|body|string|false|The description of the ApiKey.|
|» enabled|body|boolean|false|Specifies whether the ApiKey can be used by callers.|
|» generateDistinctId|body|boolean|false|Specifies whether (<code>true</code>) or not (<code>false</code>) the key identifier is distinct from the created API key value. This parameter is deprecated and should not be used.|
|» value|body|string|false|Specifies a value of the API key.|
|» stageKeys|body|[[StageKey](#schemastagekey)]|false|DEPRECATED FOR USAGE PLANS - Specifies stages associated with the API key.|
|» customerId|body|string|false|An AWS Marketplace customer identifier , when integrating with the AWS SaaS Marketplace.|
|» tags|body|object|false|The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|

> Example responses

> 201 Response

```json
{
  "id": {},
  "value": {},
  "name": {},
  "customerId": {},
  "description": {},
  "enabled": {},
  "createdDate": {},
  "lastUpdatedDate": {},
  "stageKeys": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="createapikey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[ApiKey](#schemaapikey)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAuthorizers

<a id="opIdGetAuthorizers"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/authorizers \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /restapis/{restapi_id}/authorizers`

Describe an existing Authorizers resource.

<h3 id="getauthorizers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|position|query|string|false|The current pagination position in the paged result set.|
|limit|query|integer|false|The maximum number of returned results per page. The default value is 25 and the maximum value is 500.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "position": "string",
  "items": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getauthorizers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Authorizers](#schemaauthorizers)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAuthorizer

<a id="opIdCreateAuthorizer"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/authorizers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "type": "TOKEN",
    "providerARNs": [
      "string"
    ],
    "authType": "string",
    "authorizerUri": "string",
    "authorizerCredentials": "string",
    "identitySource": "string",
    "identityValidationExpression": "string",
    "authorizerResultTtlInSeconds": 0
  }'
```

`POST /restapis/{restapi_id}/authorizers`

Adds a new Authorizer resource to an existing RestApi resource.

> Body parameter

```json
{
  "name": "string",
  "type": "TOKEN",
  "providerARNs": [
    "string"
  ],
  "authType": "string",
  "authorizerUri": "string",
  "authorizerCredentials": "string",
  "identitySource": "string",
  "identityValidationExpression": "string",
  "authorizerResultTtlInSeconds": 0
}
```

<h3 id="createauthorizer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» name|body|string|true|The name of the authorizer.|
|» type|body|string|true|The authorizer type. Valid values are <code>TOKEN</code> for a Lambda function using a single authorization token submitted in a custom header, <code>REQUEST</code> for a Lambda function using incoming request parameters, and <code>COGNITO_USER_POOLS</code> for using an Amazon Cognito user pool.|
|» providerARNs|body|[[ProviderARN](#schemaproviderarn)]|false|A list of the Amazon Cognito user pool ARNs for the <code>COGNITO_USER_POOLS</code> authorizer. Each element is of this format: <code>arn:aws:cognito-idp:{region}:{account_id}:userpool/{user_pool_id}</code>. For a <code>TOKEN</code> or <code>REQUEST</code> authorizer, this is not defined. |
|» authType|body|string|false|Optional customer-defined field, used in OpenAPI imports and exports without functional impact.|
|» authorizerUri|body|string|false|Specifies the authorizer's Uniform Resource Identifier (URI). For <code>TOKEN</code> or <code>REQUEST</code> authorizers, this must be a well-formed Lambda function URI, for example, <code>arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:{account_id}:function:{lambda_function_name}/invocations</code>. In general, the URI has this form <code>arn:aws:apigateway:{region}:lambda:path/{service_api}</code>, where <code>{region}</code> is the same as the region hosting the Lambda function, <code>path</code> indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial <code>/</code>. For Lambda functions, this is usually of the form <code>/2015-03-31/functions/[FunctionARN]/invocations</code>.|
|» authorizerCredentials|body|string|false|Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null.|
|» identitySource|body|string|false|The identity source for which authorization is requested. For a <code>TOKEN</code> or <code>COGNITO_USER_POOLS</code> authorizer, this is required and specifies the request header mapping expression for the custom header holding the authorization token submitted by the client. For example, if the token header name is <code>Auth</code>, the header mapping expression is <code>method.request.header.Auth</code>. For the <code>REQUEST</code> authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an <code>Auth</code> header, a <code>Name</code> query string parameter are defined as identity sources, this value is <code>method.request.header.Auth, method.request.querystring.Name</code>. These parameters will be used to derive the authorization caching key and to perform runtime validation of the <code>REQUEST</code> authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional.|
|» identityValidationExpression|body|string|false|A validation expression for the incoming identity token. For <code>TOKEN</code> authorizers, this value is a regular expression. For <code>COGNITO_USER_POOLS</code> authorizers, API Gateway will match the <code>aud</code> field of the incoming token from the client against the specified regular expression. It will invoke the authorizer's Lambda function when there is a match. Otherwise, it will return a 401 Unauthorized response without calling the Lambda function. The validation expression does not apply to the <code>REQUEST</code> authorizer.|
|» authorizerResultTtlInSeconds|body|integer|false|The TTL in seconds of cached authorizer results. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway will cache authorizer responses. If this field is not set, the default value is 300. The maximum value is 3600, or 1 hour.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|TOKEN|
|» type|REQUEST|
|» type|COGNITO_USER_POOLS|

> Example responses

> 201 Response

```json
{
  "id": {},
  "name": {},
  "type": {},
  "providerARNs": {},
  "authType": {},
  "authorizerUri": {},
  "authorizerCredentials": {},
  "identitySource": {},
  "identityValidationExpression": {},
  "authorizerResultTtlInSeconds": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="createauthorizer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[Authorizer](#schemaauthorizer)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBasePathMappings

<a id="opIdGetBasePathMappings"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/domainnames/string/basepathmappings \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /domainnames/{domain_name}/basepathmappings`

Represents a collection of BasePathMapping resources.

<h3 id="getbasepathmappings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|path|string|true|The domain name of a BasePathMapping resource.|
|position|query|string|false|The current pagination position in the paged result set.|
|limit|query|integer|false|The maximum number of returned results per page. The default value is 25 and the maximum value is 500.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "position": "string",
  "items": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getbasepathmappings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BasePathMappings](#schemabasepathmappings)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateBasePathMapping

<a id="opIdCreateBasePathMapping"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/domainnames/string/basepathmappings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "basePath": "string",
    "restApiId": "string",
    "stage": "string"
  }'
```

`POST /domainnames/{domain_name}/basepathmappings`

Creates a new BasePathMapping resource.

> Body parameter

```json
{
  "basePath": "string",
  "restApiId": "string",
  "stage": "string"
}
```

<h3 id="createbasepathmapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|path|string|true|The domain name of the BasePathMapping resource to create.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» basePath|body|string|false|The base path name that callers of the API must provide as part of the URL after the domain name. This value must be unique for all of the mappings across a single API. Specify '(none)' if you do not want callers to specify a base path name after the domain name.|
|» restApiId|body|string|true|The string identifier of the associated RestApi.|
|» stage|body|string|false|The name of the API's stage that you want to use for this mapping. Specify '(none)' if you want callers to explicitly specify the stage name after any base path name.|

> Example responses

> 201 Response

```json
{
  "basePath": {},
  "restApiId": {},
  "stage": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="createbasepathmapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[BasePathMapping](#schemabasepathmapping)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDeployments

<a id="opIdGetDeployments"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/deployments \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /restapis/{restapi_id}/deployments`

Gets information about a Deployments collection.

<h3 id="getdeployments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|position|query|string|false|The current pagination position in the paged result set.|
|limit|query|integer|false|The maximum number of returned results per page. The default value is 25 and the maximum value is 500.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "position": "string",
  "items": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="getdeployments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Deployments](#schemadeployments)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDeployment

<a id="opIdCreateDeployment"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/deployments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "stageName": "string",
    "stageDescription": "string",
    "description": "string",
    "cacheClusterEnabled": true,
    "cacheClusterSize": "0.5",
    "variables": {
      "property1": "string",
      "property2": "string"
    },
    "canarySettings": {
      "percentTraffic": {},
      "stageVariableOverrides": {
        "property1": "string",
        "property2": "string"
      },
      "useStageCache": {}
    },
    "tracingEnabled": true
  }'
```

`POST /restapis/{restapi_id}/deployments`

Creates a Deployment resource, which makes a specified RestApi callable over the internet.

> Body parameter

```json
{
  "stageName": "string",
  "stageDescription": "string",
  "description": "string",
  "cacheClusterEnabled": true,
  "cacheClusterSize": "0.5",
  "variables": {
    "property1": "string",
    "property2": "string"
  },
  "canarySettings": {
    "percentTraffic": {},
    "stageVariableOverrides": {
      "property1": "string",
      "property2": "string"
    },
    "useStageCache": {}
  },
  "tracingEnabled": true
}
```

<h3 id="createdeployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» stageName|body|string|false|The name of the Stage resource for the Deployment resource to create.|
|» stageDescription|body|string|false|The description of the Stage resource for the Deployment resource to create.|
|» description|body|string|false|The description for the Deployment resource to create.|
|» cacheClusterEnabled|body|boolean|false|Enables a cache cluster for the Stage resource specified in the input.|
|» cacheClusterSize|body|string|false|Returns the size of the CacheCluster.|
|» variables|body|object|false|A map that defines the stage variables for the Stage resource that is associated with the new deployment. Variable names can have alphanumeric and underscore characters, and the values must match <code>[A-Za-z0-9-._~:/?#&amp;=,]+</code>.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|
|» canarySettings|body|object|false|The input configuration for a canary deployment.|
|» » percentTraffic|body|object|false|none|
|» » stageVariableOverrides|body|object|false|none|
|» » » **additionalProperties**|body|[String](#schemastring)|false|none|
|» » useStageCache|body|object|false|none|
|» tracingEnabled|body|boolean|false|Specifies whether active tracing with X-ray is enabled for the Stage.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» cacheClusterSize|0.5|
|» cacheClusterSize|1.6|
|» cacheClusterSize|6.1|
|» cacheClusterSize|13.5|
|» cacheClusterSize|28.4|
|» cacheClusterSize|58.2|
|» cacheClusterSize|118|
|» cacheClusterSize|237|

> Example responses

> 201 Response

```json
{
  "id": {},
  "description": {},
  "createdDate": {},
  "apiSummary": {
    "property1": {
      "property1": {
        "authorizationType": {},
        "apiKeyRequired": {}
      },
      "property2": {
        "authorizationType": {},
        "apiKeyRequired": {}
      }
    },
    "property2": {
      "property1": {
        "authorizationType": {},
        "apiKeyRequired": {}
      },
      "property2": {
        "authorizationType": {},
        "apiKeyRequired": {}
      }
    }
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="createdeployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[Deployment](#schemadeployment)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDocumentationParts

<a id="opIdGetDocumentationParts"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/documentation/parts \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /restapis/{restapi_id}/documentation/parts`

Gets documentation parts.

<h3 id="getdocumentationparts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|type|query|string|false|The type of API entities of the to-be-retrieved documentation parts. |
|name|query|string|false|The name of API entities of the to-be-retrieved documentation parts.|
|path|query|string|false|The path of API entities of the to-be-retrieved documentation parts.|
|position|query|string|false|The current pagination position in the paged result set.|
|limit|query|integer|false|The maximum number of returned results per page. The default value is 25 and the maximum value is 500.|
|locationStatus|query|string|false|The status of the API documentation parts to retrieve. Valid values are <code>DOCUMENTED</code> for retrieving DocumentationPart resources with content and <code>UNDOCUMENTED</code> for DocumentationPart resources without content.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|API|
|type|AUTHORIZER|
|type|MODEL|
|type|RESOURCE|
|type|METHOD|
|type|PATH_PARAMETER|
|type|QUERY_PARAMETER|
|type|REQUEST_HEADER|
|type|REQUEST_BODY|
|type|RESPONSE|
|type|RESPONSE_HEADER|
|type|RESPONSE_BODY|
|locationStatus|DOCUMENTED|
|locationStatus|UNDOCUMENTED|

> Example responses

> 200 Response

```json
{
  "position": "string",
  "items": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getdocumentationparts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DocumentationParts](#schemadocumentationparts)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ImportDocumentationParts

<a id="opIdImportDocumentationParts"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/documentation/parts \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "body": "string"
  }'
```

`PUT /restapis/{restapi_id}/documentation/parts`

Imports documentation parts

> Body parameter

```json
{
  "body": "string"
}
```

<h3 id="importdocumentationparts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|mode|query|string|false|A query parameter to indicate whether to overwrite (<code>OVERWRITE</code>) any existing DocumentationParts definition or to merge (<code>MERGE</code>) the new definition into the existing one. The default value is <code>MERGE</code>.|
|failonwarnings|query|boolean|false|A query parameter to specify whether to rollback the documentation importation (<code>true</code>) or not (<code>false</code>) when a warning is encountered. The default value is <code>false</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» body|body|string|true|Raw byte array representing the to-be-imported documentation parts. To import from an OpenAPI file, this is a JSON object.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|mode|merge|
|mode|overwrite|

> Example responses

> 200 Response

```json
{
  "ids": {},
  "warnings": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="importdocumentationparts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DocumentationPartIds](#schemadocumentationpartids)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDocumentationPart

<a id="opIdCreateDocumentationPart"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/documentation/parts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "location": {
      "type": {},
      "path": {},
      "method": {},
      "statusCode": {},
      "name": {}
    },
    "properties": "string"
  }'
```

`POST /restapis/{restapi_id}/documentation/parts`

Creates a documentation part.

> Body parameter

```json
{
  "location": {
    "type": {},
    "path": {},
    "method": {},
    "statusCode": {},
    "name": {}
  },
  "properties": "string"
}
```

<h3 id="createdocumentationpart-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» location|body|object|true|Specifies the target API entity to which the documentation applies.|
|» » type|body|object|false|none|
|» » path|body|object|false|none|
|» » method|body|object|false|none|
|» » statusCode|body|object|false|none|
|» » name|body|object|false|none|
|» properties|body|string|true|The new documentation content map of the targeted API entity. Enclosed key-value pairs are API-specific, but only OpenAPI-compliant key-value pairs can be exported and, hence, published.|

> Example responses

> 201 Response

```json
{
  "id": {},
  "location": {
    "type": {},
    "path": {},
    "method": {},
    "statusCode": {},
    "name": {}
  },
  "properties": null
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="createdocumentationpart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[DocumentationPart](#schemadocumentationpart)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDocumentationVersions

<a id="opIdGetDocumentationVersions"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/documentation/versions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /restapis/{restapi_id}/documentation/versions`

Gets documentation versions.

<h3 id="getdocumentationversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|position|query|string|false|The current pagination position in the paged result set.|
|limit|query|integer|false|The maximum number of returned results per page. The default value is 25 and the maximum value is 500.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "position": "string",
  "items": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getdocumentationversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DocumentationVersions](#schemadocumentationversions)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDocumentationVersion

<a id="opIdCreateDocumentationVersion"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/documentation/versions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "documentationVersion": "string",
    "stageName": "string",
    "description": "string"
  }'
```

`POST /restapis/{restapi_id}/documentation/versions`

Creates a documentation version

> Body parameter

```json
{
  "documentationVersion": "string",
  "stageName": "string",
  "description": "string"
}
```

<h3 id="createdocumentationversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» documentationVersion|body|string|true|The version identifier of the new snapshot.|
|» stageName|body|string|false|The stage name to be associated with the new documentation snapshot.|
|» description|body|string|false|A description about the new documentation snapshot.|

> Example responses

> 201 Response

```json
{
  "version": {},
  "createdDate": {},
  "description": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="createdocumentationversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[DocumentationVersion](#schemadocumentationversion)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDomainNames

<a id="opIdGetDomainNames"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/domainnames \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /domainnames`

Represents a collection of DomainName resources.

<h3 id="getdomainnames-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|position|query|string|false|The current pagination position in the paged result set.|
|limit|query|integer|false|The maximum number of returned results per page. The default value is 25 and the maximum value is 500.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "position": "string",
  "items": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getdomainnames-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DomainNames](#schemadomainnames)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDomainName

<a id="opIdCreateDomainName"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/domainnames \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "domainName": "string",
    "certificateName": "string",
    "certificateBody": "string",
    "certificatePrivateKey": "string",
    "certificateChain": "string",
    "certificateArn": "string",
    "regionalCertificateName": "string",
    "regionalCertificateArn": "string",
    "endpointConfiguration": {
      "types": {},
      "vpcEndpointIds": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "securityPolicy": "TLS_1_0",
    "mutualTlsAuthentication": {
      "truststoreUri": {},
      "truststoreVersion": {}
    },
    "ownershipVerificationCertificateArn": "string"
  }'
```

`POST /domainnames`

Creates a new domain name.

> Body parameter

```json
{
  "domainName": "string",
  "certificateName": "string",
  "certificateBody": "string",
  "certificatePrivateKey": "string",
  "certificateChain": "string",
  "certificateArn": "string",
  "regionalCertificateName": "string",
  "regionalCertificateArn": "string",
  "endpointConfiguration": {
    "types": {},
    "vpcEndpointIds": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "securityPolicy": "TLS_1_0",
  "mutualTlsAuthentication": {
    "truststoreUri": {},
    "truststoreVersion": {}
  },
  "ownershipVerificationCertificateArn": "string"
}
```

<h3 id="createdomainname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» domainName|body|string|true|The name of the DomainName resource.|
|» certificateName|body|string|false|The user-friendly name of the certificate that will be used by edge-optimized endpoint for this domain name.|
|» certificateBody|body|string|false|[Deprecated] The body of the server certificate that will be used by edge-optimized endpoint for this domain name provided by your certificate authority.|
|» certificatePrivateKey|body|string|false|[Deprecated] Your edge-optimized endpoint's domain name certificate's private key.|
|» certificateChain|body|string|false|[Deprecated] The intermediate certificates and optionally the root certificate, one after the other without any blank lines, used by an edge-optimized endpoint for this domain name. If you include the root certificate, your certificate chain must start with intermediate certificates and end with the root certificate. Use the intermediate certificates that were provided by your certificate authority. Do not include any intermediaries that are not in the chain of trust path.|
|» certificateArn|body|string|false|The reference to an AWS-managed certificate that will be used by edge-optimized endpoint for this domain name. AWS Certificate Manager is the only supported source.|
|» regionalCertificateName|body|string|false|The user-friendly name of the certificate that will be used by regional endpoint for this domain name.|
|» regionalCertificateArn|body|string|false|The reference to an AWS-managed certificate that will be used by regional endpoint for this domain name. AWS Certificate Manager is the only supported source.|
|» endpointConfiguration|body|object|false|The endpoint configuration to indicate the types of endpoints an API (RestApi) or its custom domain name (DomainName) has. |
|» » types|body|object|false|none|
|» » vpcEndpointIds|body|object|false|none|
|» tags|body|object|false|The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|
|» securityPolicy|body|string|false|The Transport Layer Security (TLS) version + cipher suite for this DomainName. The valid values are <code>TLS_1_0</code> and <code>TLS_1_2</code>.|
|» mutualTlsAuthentication|body|object|false|The mutual TLS authentication configuration for a custom domain name. If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your API.|
|» » truststoreUri|body|object|false|none|
|» » truststoreVersion|body|object|false|none|
|» ownershipVerificationCertificateArn|body|string|false|The ARN of the public certificate issued by ACM to validate ownership of your custom domain. Only required when configuring mutual TLS and using an ACM imported or private CA certificate ARN as the regionalCertificateArn.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» securityPolicy|TLS_1_0|
|» securityPolicy|TLS_1_2|

> Example responses

> 201 Response

```json
{
  "domainName": {},
  "certificateName": {},
  "certificateArn": {},
  "certificateUploadDate": {},
  "regionalDomainName": {},
  "regionalHostedZoneId": {},
  "regionalCertificateName": {},
  "regionalCertificateArn": {},
  "distributionDomainName": {},
  "distributionHostedZoneId": {},
  "endpointConfiguration": {
    "types": {},
    "vpcEndpointIds": {}
  },
  "domainNameStatus": {},
  "domainNameStatusMessage": {},
  "securityPolicy": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "mutualTlsAuthentication": {
    "truststoreUri": {},
    "truststoreVersion": {},
    "truststoreWarnings": {}
  },
  "ownershipVerificationCertificateArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="createdomainname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[DomainName](#schemadomainname)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetModels

<a id="opIdGetModels"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/models \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /restapis/{restapi_id}/models`

Describes existing Models defined for a RestApi resource.

<h3 id="getmodels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|position|query|string|false|The current pagination position in the paged result set.|
|limit|query|integer|false|The maximum number of returned results per page. The default value is 25 and the maximum value is 500.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "position": "string",
  "items": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getmodels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Models](#schemamodels)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateModel

<a id="opIdCreateModel"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/models \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "description": "string",
    "schema": "string",
    "contentType": "string"
  }'
```

`POST /restapis/{restapi_id}/models`

Adds a new Model resource to an existing RestApi resource.

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "schema": "string",
  "contentType": "string"
}
```

<h3 id="createmodel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The RestApi identifier under which the Model will be created.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» name|body|string|true|The name of the model. Must be alphanumeric.|
|» description|body|string|false|The description of the model.|
|» schema|body|string|false|The schema for the model. For <code>application/json</code> models, this should be JSON schema draft 4 model.|
|» contentType|body|string|true|The content-type for the model.|

> Example responses

> 201 Response

```json
{
  "id": {},
  "name": {},
  "description": {},
  "schema": {},
  "contentType": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="createmodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[Model](#schemamodel)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRequestValidators

<a id="opIdGetRequestValidators"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/requestvalidators \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /restapis/{restapi_id}/requestvalidators`

Gets the RequestValidators collection of a given RestApi.

<h3 id="getrequestvalidators-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|position|query|string|false|The current pagination position in the paged result set.|
|limit|query|integer|false|The maximum number of returned results per page. The default value is 25 and the maximum value is 500.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "position": "string",
  "items": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getrequestvalidators-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RequestValidators](#schemarequestvalidators)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRequestValidator

<a id="opIdCreateRequestValidator"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/requestvalidators \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "validateRequestBody": true,
    "validateRequestParameters": true
  }'
```

`POST /restapis/{restapi_id}/requestvalidators`

Creates a RequestValidator of a given RestApi.

> Body parameter

```json
{
  "name": "string",
  "validateRequestBody": true,
  "validateRequestParameters": true
}
```

<h3 id="createrequestvalidator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» name|body|string|false|The name of the to-be-created RequestValidator.|
|» validateRequestBody|body|boolean|false|A Boolean flag to indicate whether to validate request body according to the configured model schema for the method (<code>true</code>) or not (<code>false</code>).|
|» validateRequestParameters|body|boolean|false|A Boolean flag to indicate whether to validate request parameters, <code>true</code>, or not <code>false</code>.|

> Example responses

> 201 Response

```json
{
  "id": {},
  "name": {},
  "validateRequestBody": {},
  "validateRequestParameters": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="createrequestvalidator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[RequestValidator](#schemarequestvalidator)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateResource

<a id="opIdCreateResource"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/resources/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "pathPart": "string"
  }'
```

`POST /restapis/{restapi_id}/resources/{parent_id}`

Creates a Resource resource.

> Body parameter

```json
{
  "pathPart": "string"
}
```

<h3 id="createresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|parent_id|path|string|true|The parent resource's identifier.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» pathPart|body|string|true|The last path segment for this resource.|

> Example responses

> 201 Response

```json
{
  "id": {},
  "parentId": {},
  "pathPart": {},
  "path": {},
  "resourceMethods": {
    "property1": {
      "httpMethod": {},
      "authorizationType": {},
      "authorizerId": {},
      "apiKeyRequired": {},
      "requestValidatorId": {},
      "operationName": {},
      "requestParameters": {
        "property1": true,
        "property2": true
      },
      "requestModels": {
        "property1": "string",
        "property2": "string"
      },
      "methodResponses": {
        "property1": {
          "statusCode": {},
          "responseParameters": {
            "property1": true,
            "property2": true
          },
          "responseModels": {
            "property1": "string",
            "property2": "string"
          }
        },
        "property2": {
          "statusCode": {},
          "responseParameters": {
            "property1": true,
            "property2": true
          },
          "responseModels": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "methodIntegration": {
        "type": {},
        "httpMethod": {},
        "uri": {},
        "connectionType": {},
        "connectionId": {},
        "credentials": {},
        "requestParameters": {
          "property1": "string",
          "property2": "string"
        },
        "requestTemplates": {
          "property1": "string",
          "property2": "string"
        },
        "passthroughBehavior": {},
        "contentHandling": {},
        "timeoutInMillis": {},
        "cacheNamespace": {},
        "cacheKeyParameters": {},
        "integrationResponses": {
          "property1": {
            "statusCode": {},
            "selectionPattern": {},
            "responseParameters": {
              "property1": "string",
              "property2": "string"
            },
            "responseTemplates": {
              "property1": "string",
              "property2": "string"
            },
            "contentHandling": {}
          },
          "property2": {
            "statusCode": {},
            "selectionPattern": {},
            "responseParameters": {
              "property1": "string",
              "property2": "string"
            },
            "responseTemplates": {
              "property1": "string",
              "property2": "string"
            },
            "contentHandling": {}
          }
        },
        "tlsConfig": {
          "insecureSkipVerification": {}
        }
      },
      "authorizationScopes": {}
    },
    "property2": {
      "httpMethod": {},
      "authorizationType": {},
      "authorizerId": {},
      "apiKeyRequired": {},
      "requestValidatorId": {},
      "operationName": {},
      "requestParameters": {
        "property1": true,
        "property2": true
      },
      "requestModels": {
        "property1": "string",
        "property2": "string"
      },
      "methodResponses": {
        "property1": {
          "statusCode": {},
          "responseParameters": {
            "property1": true,
            "property2": true
          },
          "responseModels": {
            "property1": "string",
            "property2": "string"
          }
        },
        "property2": {
          "statusCode": {},
          "responseParameters": {
            "property1": true,
            "property2": true
          },
          "responseModels": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "methodIntegration": {
        "type": {},
        "httpMethod": {},
        "uri": {},
        "connectionType": {},
        "connectionId": {},
        "credentials": {},
        "requestParameters": {
          "property1": "string",
          "property2": "string"
        },
        "requestTemplates": {
          "property1": "string",
          "property2": "string"
        },
        "passthroughBehavior": {},
        "contentHandling": {},
        "timeoutInMillis": {},
        "cacheNamespace": {},
        "cacheKeyParameters": {},
        "integrationResponses": {
          "property1": {
            "statusCode": {},
            "selectionPattern": {},
            "responseParameters": {
              "property1": "string",
              "property2": "string"
            },
            "responseTemplates": {
              "property1": "string",
              "property2": "string"
            },
            "contentHandling": {}
          },
          "property2": {
            "statusCode": {},
            "selectionPattern": {},
            "responseParameters": {
              "property1": "string",
              "property2": "string"
            },
            "responseTemplates": {
              "property1": "string",
              "property2": "string"
            },
            "contentHandling": {}
          }
        },
        "tlsConfig": {
          "insecureSkipVerification": {}
        }
      },
      "authorizationScopes": {}
    }
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="createresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[Resource](#schemaresource)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRestApis

<a id="opIdGetRestApis"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /restapis`

Lists the RestApis resources for your collection.

<h3 id="getrestapis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|position|query|string|false|The current pagination position in the paged result set.|
|limit|query|integer|false|The maximum number of returned results per page. The default value is 25 and the maximum value is 500.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "position": "string",
  "items": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getrestapis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RestApis](#schemarestapis)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRestApi

<a id="opIdCreateRestApi"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "description": "string",
    "version": "string",
    "cloneFrom": "string",
    "binaryMediaTypes": [
      "string"
    ],
    "minimumCompressionSize": 0,
    "apiKeySource": "HEADER",
    "endpointConfiguration": {
      "types": {},
      "vpcEndpointIds": {}
    },
    "policy": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "disableExecuteApiEndpoint": true
  }'
```

`POST /restapis`

Creates a new RestApi resource.

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "version": "string",
  "cloneFrom": "string",
  "binaryMediaTypes": [
    "string"
  ],
  "minimumCompressionSize": 0,
  "apiKeySource": "HEADER",
  "endpointConfiguration": {
    "types": {},
    "vpcEndpointIds": {}
  },
  "policy": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "disableExecuteApiEndpoint": true
}
```

<h3 id="createrestapi-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» name|body|string|true|The name of the RestApi.|
|» description|body|string|false|The description of the RestApi.|
|» version|body|string|false|A version identifier for the API.|
|» cloneFrom|body|string|false|The ID of the RestApi that you want to clone from.|
|» binaryMediaTypes|body|[[String](#schemastring)]|false|The list of binary media types supported by the RestApi. By default, the RestApi supports only UTF-8-encoded text payloads.|
|» minimumCompressionSize|body|integer|false|A nullable integer that is used to enable compression (with non-negative between 0 and 10485760 (10M) bytes, inclusive) or disable compression (with a null value) on an API. When compression is enabled, compression or decompression is not applied on the payload if the payload size is smaller than this value. Setting it to zero allows compression for any payload size.|
|» apiKeySource|body|string|false|The source of the API key for metering requests according to a usage plan. Valid values are: &gt;<code>HEADER</code> to read the API key from the <code>X-API-Key</code> header of a request. <code>AUTHORIZER</code> to read the API key from the <code>UsageIdentifierKey</code> from a custom authorizer.|
|» endpointConfiguration|body|object|false|The endpoint configuration to indicate the types of endpoints an API (RestApi) or its custom domain name (DomainName) has. |
|» » types|body|object|false|none|
|» » vpcEndpointIds|body|object|false|none|
|» policy|body|string|false|A stringified JSON policy document that applies to this RestApi regardless of the caller and Method configuration.|
|» tags|body|object|false|The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|
|» disableExecuteApiEndpoint|body|boolean|false|Specifies whether clients can invoke your API by using the default <code>execute-api</code> endpoint. By default, clients can invoke your API with the default <code>https://{api_id}.execute-api.{region}.amazonaws.com</code> endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» apiKeySource|HEADER|
|» apiKeySource|AUTHORIZER|

> Example responses

> 201 Response

```json
{
  "id": {},
  "name": {},
  "description": {},
  "createdDate": {},
  "version": {},
  "warnings": {},
  "binaryMediaTypes": {},
  "minimumCompressionSize": {},
  "apiKeySource": {},
  "endpointConfiguration": {
    "types": {},
    "vpcEndpointIds": {}
  },
  "policy": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "disableExecuteApiEndpoint": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="createrestapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[RestApi](#schemarestapi)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetStages

<a id="opIdGetStages"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/stages \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /restapis/{restapi_id}/stages`

Gets information about one or more Stage resources.

<h3 id="getstages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|deploymentId|query|string|false|The stages' deployment identifiers.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "item": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="getstages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Stages](#schemastages)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateStage

<a id="opIdCreateStage"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/stages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "stageName": "string",
    "deploymentId": "string",
    "description": "string",
    "cacheClusterEnabled": true,
    "cacheClusterSize": "0.5",
    "variables": {
      "property1": "string",
      "property2": "string"
    },
    "documentationVersion": "string",
    "canarySettings": {
      "percentTraffic": {},
      "deploymentId": {},
      "stageVariableOverrides": {
        "property1": "string",
        "property2": "string"
      },
      "useStageCache": {}
    },
    "tracingEnabled": true,
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /restapis/{restapi_id}/stages`

Creates a new Stage resource that references a pre-existing Deployment for the API. 

> Body parameter

```json
{
  "stageName": "string",
  "deploymentId": "string",
  "description": "string",
  "cacheClusterEnabled": true,
  "cacheClusterSize": "0.5",
  "variables": {
    "property1": "string",
    "property2": "string"
  },
  "documentationVersion": "string",
  "canarySettings": {
    "percentTraffic": {},
    "deploymentId": {},
    "stageVariableOverrides": {
      "property1": "string",
      "property2": "string"
    },
    "useStageCache": {}
  },
  "tracingEnabled": true,
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createstage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» stageName|body|string|true|The name for the Stage resource. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.|
|» deploymentId|body|string|true|The identifier of the Deployment resource for the Stage resource.|
|» description|body|string|false|The description of the Stage resource.|
|» cacheClusterEnabled|body|boolean|false|Whether cache clustering is enabled for the stage.|
|» cacheClusterSize|body|string|false|Returns the size of the CacheCluster.|
|» variables|body|object|false|A map that defines the stage variables for the new Stage resource. Variable names can have alphanumeric and underscore characters, and the values must match <code>[A-Za-z0-9-._~:/?#&amp;=,]+</code>.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|
|» documentationVersion|body|string|false|The version of the associated API documentation.|
|» canarySettings|body|object|false|Configuration settings of a canary deployment.|
|» » percentTraffic|body|object|false|none|
|» » deploymentId|body|object|false|none|
|» » stageVariableOverrides|body|object|false|none|
|» » » **additionalProperties**|body|[String](#schemastring)|false|none|
|» » useStageCache|body|object|false|none|
|» tracingEnabled|body|boolean|false|Specifies whether active tracing with X-ray is enabled for the Stage.|
|» tags|body|object|false|The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» cacheClusterSize|0.5|
|» cacheClusterSize|1.6|
|» cacheClusterSize|6.1|
|» cacheClusterSize|13.5|
|» cacheClusterSize|28.4|
|» cacheClusterSize|58.2|
|» cacheClusterSize|118|
|» cacheClusterSize|237|

> Example responses

> 201 Response

```json
{
  "deploymentId": {},
  "clientCertificateId": {},
  "stageName": {},
  "description": {},
  "cacheClusterEnabled": {},
  "cacheClusterSize": {},
  "cacheClusterStatus": {},
  "methodSettings": {
    "property1": {
      "metricsEnabled": {},
      "loggingLevel": {},
      "dataTraceEnabled": {},
      "throttlingBurstLimit": {},
      "throttlingRateLimit": {},
      "cachingEnabled": {},
      "cacheTtlInSeconds": {},
      "cacheDataEncrypted": {},
      "requireAuthorizationForCacheControl": {},
      "unauthorizedCacheControlHeaderStrategy": {}
    },
    "property2": {
      "metricsEnabled": {},
      "loggingLevel": {},
      "dataTraceEnabled": {},
      "throttlingBurstLimit": {},
      "throttlingRateLimit": {},
      "cachingEnabled": {},
      "cacheTtlInSeconds": {},
      "cacheDataEncrypted": {},
      "requireAuthorizationForCacheControl": {},
      "unauthorizedCacheControlHeaderStrategy": {}
    }
  },
  "variables": {
    "property1": "string",
    "property2": "string"
  },
  "documentationVersion": {},
  "accessLogSettings": {
    "format": {},
    "destinationArn": {}
  },
  "canarySettings": {
    "percentTraffic": {},
    "deploymentId": {},
    "stageVariableOverrides": {
      "property1": "string",
      "property2": "string"
    },
    "useStageCache": {}
  },
  "tracingEnabled": {},
  "webAclArn": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "createdDate": {},
  "lastUpdatedDate": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="createstage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[Stage](#schemastage)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetUsagePlans

<a id="opIdGetUsagePlans"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/usageplans \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /usageplans`

Gets all the usage plans of the caller's account.

<h3 id="getusageplans-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|position|query|string|false|The current pagination position in the paged result set.|
|keyId|query|string|false|The identifier of the API key associated with the usage plans.|
|limit|query|integer|false|The maximum number of returned results per page. The default value is 25 and the maximum value is 500.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "position": "string",
  "items": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getusageplans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UsagePlans](#schemausageplans)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateUsagePlan

<a id="opIdCreateUsagePlan"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/usageplans \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "description": "string",
    "apiStages": [
      {
        "apiId": {},
        "stage": {},
        "throttle": {
          "property1": {
            "burstLimit": {},
            "rateLimit": {}
          },
          "property2": {
            "burstLimit": {},
            "rateLimit": {}
          }
        }
      }
    ],
    "throttle": {
      "burstLimit": {},
      "rateLimit": {}
    },
    "quota": {
      "limit": {},
      "offset": {},
      "period": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /usageplans`

Creates a usage plan with the throttle and quota limits, as well as the associated API stages, specified in the payload. 

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "apiStages": [
    {
      "apiId": {},
      "stage": {},
      "throttle": {
        "property1": {
          "burstLimit": {},
          "rateLimit": {}
        },
        "property2": {
          "burstLimit": {},
          "rateLimit": {}
        }
      }
    }
  ],
  "throttle": {
    "burstLimit": {},
    "rateLimit": {}
  },
  "quota": {
    "limit": {},
    "offset": {},
    "period": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createusageplan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» name|body|string|true|The name of the usage plan.|
|» description|body|string|false|The description of the usage plan.|
|» apiStages|body|[[ApiStage](#schemaapistage)]|false|The associated API stages of the usage plan.|
|» throttle|body|object|false| The API request rate limits.|
|» » burstLimit|body|object|false|none|
|» » rateLimit|body|object|false|none|
|» quota|body|object|false|Quotas configured for a usage plan.|
|» » limit|body|object|false|none|
|» » offset|body|object|false|none|
|» » period|body|object|false|none|
|» tags|body|object|false|The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|

> Example responses

> 201 Response

```json
{
  "id": {},
  "name": {},
  "description": {},
  "apiStages": {},
  "throttle": {
    "burstLimit": {},
    "rateLimit": {}
  },
  "quota": {
    "limit": {},
    "offset": {},
    "period": {}
  },
  "productCode": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="createusageplan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[UsagePlan](#schemausageplan)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetUsagePlanKeys

<a id="opIdGetUsagePlanKeys"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/usageplans/string/keys \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /usageplans/{usageplanId}/keys`

Gets all the usage plan keys representing the API keys added to a specified usage plan.

<h3 id="getusageplankeys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|usageplanId|path|string|true|The Id of the UsagePlan resource representing the usage plan containing the to-be-retrieved UsagePlanKey resource representing a plan customer.|
|position|query|string|false|The current pagination position in the paged result set.|
|limit|query|integer|false|The maximum number of returned results per page. The default value is 25 and the maximum value is 500.|
|name|query|string|false|A query parameter specifying the name of the to-be-returned usage plan keys.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "position": "string",
  "items": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getusageplankeys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UsagePlanKeys](#schemausageplankeys)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateUsagePlanKey

<a id="opIdCreateUsagePlanKey"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/usageplans/string/keys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "keyId": "string",
    "keyType": "string"
  }'
```

`POST /usageplans/{usageplanId}/keys`

Creates a usage plan key for adding an existing API key to a usage plan.

> Body parameter

```json
{
  "keyId": "string",
  "keyType": "string"
}
```

<h3 id="createusageplankey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|usageplanId|path|string|true|The Id of the UsagePlan resource representing the usage plan containing the to-be-created UsagePlanKey resource representing a plan customer.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» keyId|body|string|true|The identifier of a UsagePlanKey resource for a plan customer.|
|» keyType|body|string|true|The type of a UsagePlanKey resource for a plan customer.|

> Example responses

> 201 Response

```json
{
  "id": {},
  "type": {},
  "value": {},
  "name": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="createusageplankey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[UsagePlanKey](#schemausageplankey)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetVpcLinks

<a id="opIdGetVpcLinks"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/vpclinks \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /vpclinks`

Gets the VpcLinks collection under the caller's account in a selected region.

<h3 id="getvpclinks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|position|query|string|false|The current pagination position in the paged result set.|
|limit|query|integer|false|The maximum number of returned results per page. The default value is 25 and the maximum value is 500.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "position": "string",
  "items": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getvpclinks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[VpcLinks](#schemavpclinks)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateVpcLink

<a id="opIdCreateVpcLink"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/vpclinks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "description": "string",
    "targetArns": [
      "string"
    ],
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /vpclinks`

Creates a VPC link, under the caller's account in a selected region, in an asynchronous operation that typically takes 2-4 minutes to complete and become operational. The caller must have permissions to create and update VPC Endpoint services.

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "targetArns": [
    "string"
  ],
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createvpclink-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» name|body|string|true|The name used to label and identify the VPC link.|
|» description|body|string|false|The description of the VPC link.|
|» targetArns|body|[[String](#schemastring)]|true|The ARN of the network load balancer of the VPC targeted by the VPC link. The network load balancer must be owned by the same AWS account of the API owner.|
|» tags|body|object|false|The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|

> Example responses

> 202 Response

```json
{
  "id": {},
  "name": {},
  "description": {},
  "targetArns": {},
  "status": {},
  "statusMessage": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="createvpclink-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[VpcLink](#schemavpclink)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetApiKey

<a id="opIdGetApiKey"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/apikeys/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /apikeys/{api_Key}`

Gets information about the current ApiKey resource.

<h3 id="getapikey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_Key|path|string|true|The identifier of the ApiKey resource.|
|includeValue|query|boolean|false|A boolean flag to specify whether (<code>true</code>) or not (<code>false</code>) the result contains the key value.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": {},
  "value": {},
  "name": {},
  "customerId": {},
  "description": {},
  "enabled": {},
  "createdDate": {},
  "lastUpdatedDate": {},
  "stageKeys": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getapikey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApiKey](#schemaapikey)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteApiKey

<a id="opIdDeleteApiKey"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/apikeys/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /apikeys/{api_Key}`

Deletes the ApiKey resource.

<h3 id="deleteapikey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_Key|path|string|true|The identifier of the ApiKey resource to be deleted.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="deleteapikey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateApiKey

<a id="opIdUpdateApiKey"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/apikeys/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "patchOperations": [
      {
        "op": {},
        "path": {},
        "value": {},
        "from": {}
      }
    ]
  }'
```

`PATCH /apikeys/{api_Key}`

Changes information about an ApiKey resource.

> Body parameter

```json
{
  "patchOperations": [
    {
      "op": {},
      "path": {},
      "value": {},
      "from": {}
    }
  ]
}
```

<h3 id="updateapikey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_Key|path|string|true|The identifier of the ApiKey resource to be updated.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» patchOperations|body|[[PatchOperation](#schemapatchoperation)]|false|A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.|

> Example responses

> 200 Response

```json
{
  "id": {},
  "value": {},
  "name": {},
  "customerId": {},
  "description": {},
  "enabled": {},
  "createdDate": {},
  "lastUpdatedDate": {},
  "stageKeys": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="updateapikey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApiKey](#schemaapikey)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAuthorizer

<a id="opIdGetAuthorizer"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/authorizers/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /restapis/{restapi_id}/authorizers/{authorizer_id}`

Describe an existing Authorizer resource.

<h3 id="getauthorizer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|authorizer_id|path|string|true|The identifier of the Authorizer resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": {},
  "name": {},
  "type": {},
  "providerARNs": {},
  "authType": {},
  "authorizerUri": {},
  "authorizerCredentials": {},
  "identitySource": {},
  "identityValidationExpression": {},
  "authorizerResultTtlInSeconds": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getauthorizer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Authorizer](#schemaauthorizer)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TestInvokeAuthorizer

<a id="opIdTestInvokeAuthorizer"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/authorizers/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "multiValueHeaders": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "pathWithQueryString": "string",
    "body": "string",
    "stageVariables": {
      "property1": "string",
      "property2": "string"
    },
    "additionalContext": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /restapis/{restapi_id}/authorizers/{authorizer_id}`

Simulate the execution of an Authorizer in your RestApi with headers, parameters, and an incoming request body.

> Body parameter

```json
{
  "headers": {
    "property1": "string",
    "property2": "string"
  },
  "multiValueHeaders": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "pathWithQueryString": "string",
  "body": "string",
  "stageVariables": {
    "property1": "string",
    "property2": "string"
  },
  "additionalContext": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="testinvokeauthorizer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|authorizer_id|path|string|true|Specifies a test invoke authorizer request's Authorizer ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» headers|body|object|false|A key-value map of headers to simulate an incoming invocation request. This is where the incoming authorization token, or identity source, should be specified.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|
|» multiValueHeaders|body|object|false|The headers as a map from string to list of values to simulate an incoming invocation request. This is where the incoming authorization token, or identity source, may be specified.|
|» » **additionalProperties**|body|[ListOfString](#schemalistofstring)|false|none|
|» pathWithQueryString|body|string|false|The URI path, including query string, of the simulated invocation request. Use this to specify path parameters and query string parameters.|
|» body|body|string|false|The simulated request body of an incoming invocation request.|
|» stageVariables|body|object|false|A key-value map of stage variables to simulate an invocation on a deployed Stage.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|
|» additionalContext|body|object|false|A key-value map of additional context variables.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|

> Example responses

> 200 Response

```json
{
  "clientStatus": {},
  "log": {},
  "latency": {},
  "principalId": {},
  "policy": {},
  "authorization": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "claims": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="testinvokeauthorizer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TestInvokeAuthorizerResponse](#schematestinvokeauthorizerresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAuthorizer

<a id="opIdDeleteAuthorizer"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/authorizers/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /restapis/{restapi_id}/authorizers/{authorizer_id}`

Deletes an existing Authorizer resource.

<h3 id="deleteauthorizer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|authorizer_id|path|string|true|The identifier of the Authorizer resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="deleteauthorizer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAuthorizer

<a id="opIdUpdateAuthorizer"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/authorizers/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "patchOperations": [
      {
        "op": {},
        "path": {},
        "value": {},
        "from": {}
      }
    ]
  }'
```

`PATCH /restapis/{restapi_id}/authorizers/{authorizer_id}`

Updates an existing Authorizer resource.

> Body parameter

```json
{
  "patchOperations": [
    {
      "op": {},
      "path": {},
      "value": {},
      "from": {}
    }
  ]
}
```

<h3 id="updateauthorizer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|authorizer_id|path|string|true|The identifier of the Authorizer resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» patchOperations|body|[[PatchOperation](#schemapatchoperation)]|false|A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.|

> Example responses

> 200 Response

```json
{
  "id": {},
  "name": {},
  "type": {},
  "providerARNs": {},
  "authType": {},
  "authorizerUri": {},
  "authorizerCredentials": {},
  "identitySource": {},
  "identityValidationExpression": {},
  "authorizerResultTtlInSeconds": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="updateauthorizer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Authorizer](#schemaauthorizer)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBasePathMapping

<a id="opIdGetBasePathMapping"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/domainnames/string/basepathmappings/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /domainnames/{domain_name}/basepathmappings/{base_path}`

Describe a BasePathMapping resource.

<h3 id="getbasepathmapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|path|string|true|The domain name of the BasePathMapping resource to be described.|
|base_path|path|string|true|The base path name that callers of the API must provide as part of the URL after the domain name. This value must be unique for all of the mappings across a single API. Specify '(none)' if you do not want callers to specify any base path name after the domain name.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "basePath": {},
  "restApiId": {},
  "stage": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getbasepathmapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BasePathMapping](#schemabasepathmapping)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBasePathMapping

<a id="opIdDeleteBasePathMapping"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/domainnames/string/basepathmappings/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /domainnames/{domain_name}/basepathmappings/{base_path}`

Deletes the BasePathMapping resource.

<h3 id="deletebasepathmapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|path|string|true|The domain name of the BasePathMapping resource to delete.|
|base_path|path|string|true|<p>The base path name of the BasePathMapping resource to delete.</p> <p>To specify an empty base path, set this parameter to <code>'(none)'</code>.</p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="deletebasepathmapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateBasePathMapping

<a id="opIdUpdateBasePathMapping"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/domainnames/string/basepathmappings/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "patchOperations": [
      {
        "op": {},
        "path": {},
        "value": {},
        "from": {}
      }
    ]
  }'
```

`PATCH /domainnames/{domain_name}/basepathmappings/{base_path}`

Changes information about the BasePathMapping resource.

> Body parameter

```json
{
  "patchOperations": [
    {
      "op": {},
      "path": {},
      "value": {},
      "from": {}
    }
  ]
}
```

<h3 id="updatebasepathmapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|path|string|true|The domain name of the BasePathMapping resource to change.|
|base_path|path|string|true|<p>The base path of the BasePathMapping resource to change.</p> <p>To specify an empty base path, set this parameter to <code>'(none)'</code>.</p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» patchOperations|body|[[PatchOperation](#schemapatchoperation)]|false|A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.|

> Example responses

> 200 Response

```json
{
  "basePath": {},
  "restApiId": {},
  "stage": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="updatebasepathmapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BasePathMapping](#schemabasepathmapping)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetClientCertificate

<a id="opIdGetClientCertificate"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/clientcertificates/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /clientcertificates/{clientcertificate_id}`

Gets information about the current ClientCertificate resource.

<h3 id="getclientcertificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clientcertificate_id|path|string|true|The identifier of the ClientCertificate resource to be described.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "clientCertificateId": {},
  "description": {},
  "pemEncodedCertificate": {},
  "createdDate": {},
  "expirationDate": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getclientcertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ClientCertificate](#schemaclientcertificate)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteClientCertificate

<a id="opIdDeleteClientCertificate"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/clientcertificates/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /clientcertificates/{clientcertificate_id}`

Deletes the ClientCertificate resource.

<h3 id="deleteclientcertificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clientcertificate_id|path|string|true|The identifier of the ClientCertificate resource to be deleted.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="deleteclientcertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateClientCertificate

<a id="opIdUpdateClientCertificate"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/clientcertificates/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "patchOperations": [
      {
        "op": {},
        "path": {},
        "value": {},
        "from": {}
      }
    ]
  }'
```

`PATCH /clientcertificates/{clientcertificate_id}`

Changes information about an ClientCertificate resource.

> Body parameter

```json
{
  "patchOperations": [
    {
      "op": {},
      "path": {},
      "value": {},
      "from": {}
    }
  ]
}
```

<h3 id="updateclientcertificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clientcertificate_id|path|string|true|The identifier of the ClientCertificate resource to be updated.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» patchOperations|body|[[PatchOperation](#schemapatchoperation)]|false|A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.|

> Example responses

> 200 Response

```json
{
  "clientCertificateId": {},
  "description": {},
  "pemEncodedCertificate": {},
  "createdDate": {},
  "expirationDate": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="updateclientcertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ClientCertificate](#schemaclientcertificate)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDeployment

<a id="opIdGetDeployment"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/deployments/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /restapis/{restapi_id}/deployments/{deployment_id}`

Gets information about a Deployment resource.

<h3 id="getdeployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|deployment_id|path|string|true|The identifier of the Deployment resource to get information about.|
|embed|query|[[String](#schemastring)]|false|A query parameter to retrieve the specified embedded resources of the returned Deployment resource in the response. In a REST API call, this <code>embed</code> parameter value is a list of comma-separated strings, as in <code>GET /restapis/{restapi_id}/deployments/{deployment_id}?embed=var1,var2</code>. The SDK and other platform-dependent libraries might use a different format for the list. Currently, this request supports only retrieval of the embedded API summary this way. Hence, the parameter value must be a single-valued list containing only the <code>"apisummary"</code> string. For example, <code>GET /restapis/{restapi_id}/deployments/{deployment_id}?embed=apisummary</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": {},
  "description": {},
  "createdDate": {},
  "apiSummary": {
    "property1": {
      "property1": {
        "authorizationType": {},
        "apiKeyRequired": {}
      },
      "property2": {
        "authorizationType": {},
        "apiKeyRequired": {}
      }
    },
    "property2": {
      "property1": {
        "authorizationType": {},
        "apiKeyRequired": {}
      },
      "property2": {
        "authorizationType": {},
        "apiKeyRequired": {}
      }
    }
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="getdeployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Deployment](#schemadeployment)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDeployment

<a id="opIdDeleteDeployment"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/deployments/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /restapis/{restapi_id}/deployments/{deployment_id}`

Deletes a Deployment resource. Deleting a deployment will only succeed if there are no Stage resources associated with it.

<h3 id="deletedeployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|deployment_id|path|string|true|The identifier of the Deployment resource to delete.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="deletedeployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDeployment

<a id="opIdUpdateDeployment"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/deployments/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "patchOperations": [
      {
        "op": {},
        "path": {},
        "value": {},
        "from": {}
      }
    ]
  }'
```

`PATCH /restapis/{restapi_id}/deployments/{deployment_id}`

Changes information about a Deployment resource.

> Body parameter

```json
{
  "patchOperations": [
    {
      "op": {},
      "path": {},
      "value": {},
      "from": {}
    }
  ]
}
```

<h3 id="updatedeployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|deployment_id|path|string|true|The replacement identifier for the Deployment resource to change information about.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» patchOperations|body|[[PatchOperation](#schemapatchoperation)]|false|A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.|

> Example responses

> 200 Response

```json
{
  "id": {},
  "description": {},
  "createdDate": {},
  "apiSummary": {
    "property1": {
      "property1": {
        "authorizationType": {},
        "apiKeyRequired": {}
      },
      "property2": {
        "authorizationType": {},
        "apiKeyRequired": {}
      }
    },
    "property2": {
      "property1": {
        "authorizationType": {},
        "apiKeyRequired": {}
      },
      "property2": {
        "authorizationType": {},
        "apiKeyRequired": {}
      }
    }
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="updatedeployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Deployment](#schemadeployment)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDocumentationPart

<a id="opIdGetDocumentationPart"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/documentation/parts/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /restapis/{restapi_id}/documentation/parts/{part_id}`

Gets a documentation part.

<h3 id="getdocumentationpart-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|part_id|path|string|true|The string identifier of the associated RestApi.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": {},
  "location": {
    "type": {},
    "path": {},
    "method": {},
    "statusCode": {},
    "name": {}
  },
  "properties": null
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getdocumentationpart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DocumentationPart](#schemadocumentationpart)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDocumentationPart

<a id="opIdDeleteDocumentationPart"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/documentation/parts/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /restapis/{restapi_id}/documentation/parts/{part_id}`

Deletes a documentation part

<h3 id="deletedocumentationpart-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|part_id|path|string|true|The identifier of the to-be-deleted documentation part.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="deletedocumentationpart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDocumentationPart

<a id="opIdUpdateDocumentationPart"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/documentation/parts/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "patchOperations": [
      {
        "op": {},
        "path": {},
        "value": {},
        "from": {}
      }
    ]
  }'
```

`PATCH /restapis/{restapi_id}/documentation/parts/{part_id}`

Updates a documentation part.

> Body parameter

```json
{
  "patchOperations": [
    {
      "op": {},
      "path": {},
      "value": {},
      "from": {}
    }
  ]
}
```

<h3 id="updatedocumentationpart-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|part_id|path|string|true|The identifier of the to-be-updated documentation part.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» patchOperations|body|[[PatchOperation](#schemapatchoperation)]|false|A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.|

> Example responses

> 200 Response

```json
{
  "id": {},
  "location": {
    "type": {},
    "path": {},
    "method": {},
    "statusCode": {},
    "name": {}
  },
  "properties": null
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="updatedocumentationpart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DocumentationPart](#schemadocumentationpart)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDocumentationVersion

<a id="opIdGetDocumentationVersion"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/documentation/versions/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /restapis/{restapi_id}/documentation/versions/{doc_version}`

Gets a documentation version.

<h3 id="getdocumentationversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|doc_version|path|string|true|The version identifier of the to-be-retrieved documentation snapshot.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "version": {},
  "createdDate": {},
  "description": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="getdocumentationversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DocumentationVersion](#schemadocumentationversion)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDocumentationVersion

<a id="opIdDeleteDocumentationVersion"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/documentation/versions/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /restapis/{restapi_id}/documentation/versions/{doc_version}`

Deletes a documentation version.

<h3 id="deletedocumentationversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|doc_version|path|string|true|The version identifier of a to-be-deleted documentation snapshot.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="deletedocumentationversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDocumentationVersion

<a id="opIdUpdateDocumentationVersion"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/documentation/versions/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "patchOperations": [
      {
        "op": {},
        "path": {},
        "value": {},
        "from": {}
      }
    ]
  }'
```

`PATCH /restapis/{restapi_id}/documentation/versions/{doc_version}`

Updates a documentation version.

> Body parameter

```json
{
  "patchOperations": [
    {
      "op": {},
      "path": {},
      "value": {},
      "from": {}
    }
  ]
}
```

<h3 id="updatedocumentationversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi..|
|doc_version|path|string|true|The version identifier of the to-be-updated documentation version.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» patchOperations|body|[[PatchOperation](#schemapatchoperation)]|false|A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.|

> Example responses

> 200 Response

```json
{
  "version": {},
  "createdDate": {},
  "description": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="updatedocumentationversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DocumentationVersion](#schemadocumentationversion)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDomainName

<a id="opIdGetDomainName"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/domainnames/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /domainnames/{domain_name}`

Represents a domain name that is contained in a simpler, more intuitive URL that can be called.

<h3 id="getdomainname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|path|string|true|The name of the DomainName resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "domainName": {},
  "certificateName": {},
  "certificateArn": {},
  "certificateUploadDate": {},
  "regionalDomainName": {},
  "regionalHostedZoneId": {},
  "regionalCertificateName": {},
  "regionalCertificateArn": {},
  "distributionDomainName": {},
  "distributionHostedZoneId": {},
  "endpointConfiguration": {
    "types": {},
    "vpcEndpointIds": {}
  },
  "domainNameStatus": {},
  "domainNameStatusMessage": {},
  "securityPolicy": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "mutualTlsAuthentication": {
    "truststoreUri": {},
    "truststoreVersion": {},
    "truststoreWarnings": {}
  },
  "ownershipVerificationCertificateArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getdomainname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DomainName](#schemadomainname)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDomainName

<a id="opIdDeleteDomainName"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/domainnames/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /domainnames/{domain_name}`

Deletes the DomainName resource.

<h3 id="deletedomainname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|path|string|true|The name of the DomainName resource to be deleted.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="deletedomainname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDomainName

<a id="opIdUpdateDomainName"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/domainnames/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "patchOperations": [
      {
        "op": {},
        "path": {},
        "value": {},
        "from": {}
      }
    ]
  }'
```

`PATCH /domainnames/{domain_name}`

Changes information about the DomainName resource.

> Body parameter

```json
{
  "patchOperations": [
    {
      "op": {},
      "path": {},
      "value": {},
      "from": {}
    }
  ]
}
```

<h3 id="updatedomainname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_name|path|string|true|The name of the DomainName resource to be changed.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» patchOperations|body|[[PatchOperation](#schemapatchoperation)]|false|A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.|

> Example responses

> 200 Response

```json
{
  "domainName": {},
  "certificateName": {},
  "certificateArn": {},
  "certificateUploadDate": {},
  "regionalDomainName": {},
  "regionalHostedZoneId": {},
  "regionalCertificateName": {},
  "regionalCertificateArn": {},
  "distributionDomainName": {},
  "distributionHostedZoneId": {},
  "endpointConfiguration": {
    "types": {},
    "vpcEndpointIds": {}
  },
  "domainNameStatus": {},
  "domainNameStatusMessage": {},
  "securityPolicy": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "mutualTlsAuthentication": {
    "truststoreUri": {},
    "truststoreVersion": {},
    "truststoreWarnings": {}
  },
  "ownershipVerificationCertificateArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="updatedomainname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DomainName](#schemadomainname)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetGatewayResponse

<a id="opIdGetGatewayResponse"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/gatewayresponses/DEFAULT_4XX \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /restapis/{restapi_id}/gatewayresponses/{response_type}`

Gets a GatewayResponse of a specified response type on the given RestApi.

<h3 id="getgatewayresponse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|response_type|path|string|true|The response type of the associated GatewayResponse.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|response_type|DEFAULT_4XX|
|response_type|DEFAULT_5XX|
|response_type|RESOURCE_NOT_FOUND|
|response_type|UNAUTHORIZED|
|response_type|INVALID_API_KEY|
|response_type|ACCESS_DENIED|
|response_type|AUTHORIZER_FAILURE|
|response_type|AUTHORIZER_CONFIGURATION_ERROR|
|response_type|INVALID_SIGNATURE|
|response_type|EXPIRED_TOKEN|
|response_type|MISSING_AUTHENTICATION_TOKEN|
|response_type|INTEGRATION_FAILURE|
|response_type|INTEGRATION_TIMEOUT|
|response_type|API_CONFIGURATION_ERROR|
|response_type|UNSUPPORTED_MEDIA_TYPE|
|response_type|BAD_REQUEST_PARAMETERS|
|response_type|BAD_REQUEST_BODY|
|response_type|REQUEST_TOO_LARGE|
|response_type|THROTTLED|
|response_type|QUOTA_EXCEEDED|
|response_type|WAF_FILTERED|

> Example responses

> 200 Response

```json
{
  "responseType": {},
  "statusCode": {},
  "responseParameters": {
    "property1": "string",
    "property2": "string"
  },
  "responseTemplates": {
    "property1": "string",
    "property2": "string"
  },
  "defaultResponse": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getgatewayresponse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GatewayResponse](#schemagatewayresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutGatewayResponse

<a id="opIdPutGatewayResponse"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/gatewayresponses/DEFAULT_4XX \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "statusCode": "string",
    "responseParameters": {
      "property1": "string",
      "property2": "string"
    },
    "responseTemplates": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PUT /restapis/{restapi_id}/gatewayresponses/{response_type}`

Creates a customization of a GatewayResponse of a specified response type and status code on the given RestApi.

> Body parameter

```json
{
  "statusCode": "string",
  "responseParameters": {
    "property1": "string",
    "property2": "string"
  },
  "responseTemplates": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="putgatewayresponse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|response_type|path|string|true|The response type of the associated GatewayResponse|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» statusCode|body|string|false|The status code.|
|» responseParameters|body|object|false|Response parameters (paths, query strings and headers) of the GatewayResponse as a string-to-string map of key-value pairs.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|
|» responseTemplates|body|object|false|Response templates of the GatewayResponse as a string-to-string map of key-value pairs.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|response_type|DEFAULT_4XX|
|response_type|DEFAULT_5XX|
|response_type|RESOURCE_NOT_FOUND|
|response_type|UNAUTHORIZED|
|response_type|INVALID_API_KEY|
|response_type|ACCESS_DENIED|
|response_type|AUTHORIZER_FAILURE|
|response_type|AUTHORIZER_CONFIGURATION_ERROR|
|response_type|INVALID_SIGNATURE|
|response_type|EXPIRED_TOKEN|
|response_type|MISSING_AUTHENTICATION_TOKEN|
|response_type|INTEGRATION_FAILURE|
|response_type|INTEGRATION_TIMEOUT|
|response_type|API_CONFIGURATION_ERROR|
|response_type|UNSUPPORTED_MEDIA_TYPE|
|response_type|BAD_REQUEST_PARAMETERS|
|response_type|BAD_REQUEST_BODY|
|response_type|REQUEST_TOO_LARGE|
|response_type|THROTTLED|
|response_type|QUOTA_EXCEEDED|
|response_type|WAF_FILTERED|

> Example responses

> 201 Response

```json
{
  "responseType": {},
  "statusCode": {},
  "responseParameters": {
    "property1": "string",
    "property2": "string"
  },
  "responseTemplates": {
    "property1": "string",
    "property2": "string"
  },
  "defaultResponse": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="putgatewayresponse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[GatewayResponse](#schemagatewayresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteGatewayResponse

<a id="opIdDeleteGatewayResponse"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/gatewayresponses/DEFAULT_4XX \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /restapis/{restapi_id}/gatewayresponses/{response_type}`

Clears any customization of a GatewayResponse of a specified response type on the given RestApi and resets it with the default settings.

<h3 id="deletegatewayresponse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|response_type|path|string|true|The response type of the associated GatewayResponse.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|response_type|DEFAULT_4XX|
|response_type|DEFAULT_5XX|
|response_type|RESOURCE_NOT_FOUND|
|response_type|UNAUTHORIZED|
|response_type|INVALID_API_KEY|
|response_type|ACCESS_DENIED|
|response_type|AUTHORIZER_FAILURE|
|response_type|AUTHORIZER_CONFIGURATION_ERROR|
|response_type|INVALID_SIGNATURE|
|response_type|EXPIRED_TOKEN|
|response_type|MISSING_AUTHENTICATION_TOKEN|
|response_type|INTEGRATION_FAILURE|
|response_type|INTEGRATION_TIMEOUT|
|response_type|API_CONFIGURATION_ERROR|
|response_type|UNSUPPORTED_MEDIA_TYPE|
|response_type|BAD_REQUEST_PARAMETERS|
|response_type|BAD_REQUEST_BODY|
|response_type|REQUEST_TOO_LARGE|
|response_type|THROTTLED|
|response_type|QUOTA_EXCEEDED|
|response_type|WAF_FILTERED|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="deletegatewayresponse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateGatewayResponse

<a id="opIdUpdateGatewayResponse"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/gatewayresponses/DEFAULT_4XX \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "patchOperations": [
      {
        "op": {},
        "path": {},
        "value": {},
        "from": {}
      }
    ]
  }'
```

`PATCH /restapis/{restapi_id}/gatewayresponses/{response_type}`

Updates a GatewayResponse of a specified response type on the given RestApi.

> Body parameter

```json
{
  "patchOperations": [
    {
      "op": {},
      "path": {},
      "value": {},
      "from": {}
    }
  ]
}
```

<h3 id="updategatewayresponse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|response_type|path|string|true|The response type of the associated GatewayResponse.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» patchOperations|body|[[PatchOperation](#schemapatchoperation)]|false|A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|response_type|DEFAULT_4XX|
|response_type|DEFAULT_5XX|
|response_type|RESOURCE_NOT_FOUND|
|response_type|UNAUTHORIZED|
|response_type|INVALID_API_KEY|
|response_type|ACCESS_DENIED|
|response_type|AUTHORIZER_FAILURE|
|response_type|AUTHORIZER_CONFIGURATION_ERROR|
|response_type|INVALID_SIGNATURE|
|response_type|EXPIRED_TOKEN|
|response_type|MISSING_AUTHENTICATION_TOKEN|
|response_type|INTEGRATION_FAILURE|
|response_type|INTEGRATION_TIMEOUT|
|response_type|API_CONFIGURATION_ERROR|
|response_type|UNSUPPORTED_MEDIA_TYPE|
|response_type|BAD_REQUEST_PARAMETERS|
|response_type|BAD_REQUEST_BODY|
|response_type|REQUEST_TOO_LARGE|
|response_type|THROTTLED|
|response_type|QUOTA_EXCEEDED|
|response_type|WAF_FILTERED|

> Example responses

> 200 Response

```json
{
  "responseType": {},
  "statusCode": {},
  "responseParameters": {
    "property1": "string",
    "property2": "string"
  },
  "responseTemplates": {
    "property1": "string",
    "property2": "string"
  },
  "defaultResponse": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="updategatewayresponse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GatewayResponse](#schemagatewayresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetIntegration

<a id="opIdGetIntegration"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/resources/string/methods/string/integration \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration`

Get the integration settings.

<h3 id="getintegration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|resource_id|path|string|true|Specifies a get integration request's resource identifier|
|http_method|path|string|true|Specifies a get integration request's HTTP method.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "type": {},
  "httpMethod": {},
  "uri": {},
  "connectionType": {},
  "connectionId": {},
  "credentials": {},
  "requestParameters": {
    "property1": "string",
    "property2": "string"
  },
  "requestTemplates": {
    "property1": "string",
    "property2": "string"
  },
  "passthroughBehavior": {},
  "contentHandling": {},
  "timeoutInMillis": {},
  "cacheNamespace": {},
  "cacheKeyParameters": {},
  "integrationResponses": {
    "property1": {
      "statusCode": {},
      "selectionPattern": {},
      "responseParameters": {
        "property1": "string",
        "property2": "string"
      },
      "responseTemplates": {
        "property1": "string",
        "property2": "string"
      },
      "contentHandling": {}
    },
    "property2": {
      "statusCode": {},
      "selectionPattern": {},
      "responseParameters": {
        "property1": "string",
        "property2": "string"
      },
      "responseTemplates": {
        "property1": "string",
        "property2": "string"
      },
      "contentHandling": {}
    }
  },
  "tlsConfig": {
    "insecureSkipVerification": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getintegration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Integration](#schemaintegration)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutIntegration

<a id="opIdPutIntegration"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/resources/string/methods/string/integration \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "type": "HTTP",
    "httpMethod": "string",
    "uri": "string",
    "connectionType": "INTERNET",
    "connectionId": "string",
    "credentials": "string",
    "requestParameters": {
      "property1": "string",
      "property2": "string"
    },
    "requestTemplates": {
      "property1": "string",
      "property2": "string"
    },
    "passthroughBehavior": "string",
    "cacheNamespace": "string",
    "cacheKeyParameters": [
      "string"
    ],
    "contentHandling": "CONVERT_TO_BINARY",
    "timeoutInMillis": 0,
    "tlsConfig": {
      "insecureSkipVerification": {}
    }
  }'
```

`PUT /restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration`

Sets up a method's integration.

> Body parameter

```json
{
  "type": "HTTP",
  "httpMethod": "string",
  "uri": "string",
  "connectionType": "INTERNET",
  "connectionId": "string",
  "credentials": "string",
  "requestParameters": {
    "property1": "string",
    "property2": "string"
  },
  "requestTemplates": {
    "property1": "string",
    "property2": "string"
  },
  "passthroughBehavior": "string",
  "cacheNamespace": "string",
  "cacheKeyParameters": [
    "string"
  ],
  "contentHandling": "CONVERT_TO_BINARY",
  "timeoutInMillis": 0,
  "tlsConfig": {
    "insecureSkipVerification": {}
  }
}
```

<h3 id="putintegration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|resource_id|path|string|true|Specifies a put integration request's resource ID.|
|http_method|path|string|true|Specifies the HTTP method for the integration.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» type|body|string|true|The integration type. The valid value is <code>HTTP</code> for integrating an API method with an HTTP backend; <code>AWS</code> with any AWS service endpoints; <code>MOCK</code> for testing without actually invoking the backend; <code>HTTP_PROXY</code> for integrating with the HTTP proxy integration; <code>AWS_PROXY</code> for integrating with the Lambda proxy integration. |
|» httpMethod|body|string|false|The HTTP method for the integration.|
|» uri|body|string|false|Specifies Uniform Resource Identifier (URI) of the integration endpoint. For HTTP or <code>HTTP_PROXY</code> integrations, the URI must be a fully formed, encoded HTTP(S) URL according to the RFC-3986 specification, for either standard integration, where <code>connectionType</code> is not <code>VPC_LINK</code>, or private integration, where <code>connectionType</code> is <code>VPC_LINK</code>. For a private HTTP integration, the URI is not used for routing. For <code>AWS</code> or <code>AWS_PROXY</code> integrations, the URI is of the form <code>arn:aws:apigateway:{region}:{subdomain.service\|service}:path\|action/{service_api</code>}. Here, {Region} is the API Gateway region (e.g., us-east-1); {service} is the name of the integrated Amazon Web Services service (e.g., s3); and {subdomain} is a designated subdomain supported by certain Amazon Web Services service for fast host-name lookup. action can be used for an Amazon Web Services service action-based API, using an Action={name}&amp;{p1}={v1}&amp;p2={v2}... query string. The ensuing {service_api} refers to a supported action {name} plus any required input parameters. Alternatively, path can be used for an Amazon Web Services service path-based API. The ensuing service_api refers to the path to an Amazon Web Services service resource, including the region of the integrated Amazon Web Services service, if applicable. For example, for integration with the S3 API of <code>GetObject</code>, the <code>uri</code> can be either <code>arn:aws:apigateway:us-west-2:s3:action/GetObject&amp;Bucket={bucket}&amp;Key={key}</code> or <code>arn:aws:apigateway:us-west-2:s3:path/{bucket}/{key}</code>.|
|» connectionType|body|string|false|The type of the network connection to the integration endpoint. The valid value is <code>INTERNET</code> for connections through the public routable internet or <code>VPC_LINK</code> for private connections between API Gateway and a network load balancer in a VPC. The default value is <code>INTERNET</code>.|
|» connectionId|body|string|false|The ID of the VpcLink used for the integration. Specify this value only if you specify <code>VPC_LINK</code> as the connection type.|
|» credentials|body|string|false|Specifies whether credentials are required for a put integration.|
|» requestParameters|body|object|false|A key-value map specifying request parameters that are passed from the method request to the back end. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the back end. The method request parameter value must match the pattern of <code>method.request.{location}.{name}</code>, where <code>location</code> is <code>querystring</code>, <code>path</code>, or <code>header</code> and <code>name</code> must be a valid and unique method request parameter name.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|
|» requestTemplates|body|object|false|Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|
|» passthroughBehavior|body|string|false|Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the <code>requestTemplates</code> property on the Integration resource. There are three valid values: <code>WHEN_NO_MATCH</code>, <code>WHEN_NO_TEMPLATES</code>, and <code>NEVER</code>. |
|» cacheNamespace|body|string|false|Specifies a group of related cached parameters. By default, API Gateway uses the resource ID as the <code>cacheNamespace</code>. You can specify the same <code>cacheNamespace</code> across resources to return the same cached data for requests to different resources.|
|» cacheKeyParameters|body|[[String](#schemastring)]|false|A list of request parameters whose values API Gateway caches. To be valid values for <code>cacheKeyParameters</code>, these parameters must also be specified for Method <code>requestParameters</code>.|
|» contentHandling|body|string|false|<p>Specifies how to handle request payload content type conversions. Supported values are <code>CONVERT_TO_BINARY</code> and <code>CONVERT_TO_TEXT</code>, with the following behaviors:</p> <p>If this property is not defined, the request payload will be passed through from the method request to integration request without modification, provided that the <code>passthroughBehavior</code> is configured to support payload pass-through.</p>|
|» timeoutInMillis|body|integer|false|Custom timeout between 50 and 29,000 milliseconds. The default value is 29,000 milliseconds or 29 seconds.|
|» tlsConfig|body|object|false|Specifies the TLS configuration for an integration.|
|» » insecureSkipVerification|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|HTTP|
|» type|AWS|
|» type|MOCK|
|» type|HTTP_PROXY|
|» type|AWS_PROXY|
|» connectionType|INTERNET|
|» connectionType|VPC_LINK|
|» contentHandling|CONVERT_TO_BINARY|
|» contentHandling|CONVERT_TO_TEXT|

> Example responses

> 201 Response

```json
{
  "type": {},
  "httpMethod": {},
  "uri": {},
  "connectionType": {},
  "connectionId": {},
  "credentials": {},
  "requestParameters": {
    "property1": "string",
    "property2": "string"
  },
  "requestTemplates": {
    "property1": "string",
    "property2": "string"
  },
  "passthroughBehavior": {},
  "contentHandling": {},
  "timeoutInMillis": {},
  "cacheNamespace": {},
  "cacheKeyParameters": {},
  "integrationResponses": {
    "property1": {
      "statusCode": {},
      "selectionPattern": {},
      "responseParameters": {
        "property1": "string",
        "property2": "string"
      },
      "responseTemplates": {
        "property1": "string",
        "property2": "string"
      },
      "contentHandling": {}
    },
    "property2": {
      "statusCode": {},
      "selectionPattern": {},
      "responseParameters": {
        "property1": "string",
        "property2": "string"
      },
      "responseTemplates": {
        "property1": "string",
        "property2": "string"
      },
      "contentHandling": {}
    }
  },
  "tlsConfig": {
    "insecureSkipVerification": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="putintegration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[Integration](#schemaintegration)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteIntegration

<a id="opIdDeleteIntegration"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/resources/string/methods/string/integration \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration`

Represents a delete integration.

<h3 id="deleteintegration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|resource_id|path|string|true|Specifies a delete integration request's resource identifier.|
|http_method|path|string|true|Specifies a delete integration request's HTTP method.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="deleteintegration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateIntegration

<a id="opIdUpdateIntegration"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/resources/string/methods/string/integration \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "patchOperations": [
      {
        "op": {},
        "path": {},
        "value": {},
        "from": {}
      }
    ]
  }'
```

`PATCH /restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration`

Represents an update integration.

> Body parameter

```json
{
  "patchOperations": [
    {
      "op": {},
      "path": {},
      "value": {},
      "from": {}
    }
  ]
}
```

<h3 id="updateintegration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|resource_id|path|string|true|Represents an update integration request's resource identifier.|
|http_method|path|string|true|Represents an update integration request's HTTP method.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» patchOperations|body|[[PatchOperation](#schemapatchoperation)]|false|A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.|

> Example responses

> 200 Response

```json
{
  "type": {},
  "httpMethod": {},
  "uri": {},
  "connectionType": {},
  "connectionId": {},
  "credentials": {},
  "requestParameters": {
    "property1": "string",
    "property2": "string"
  },
  "requestTemplates": {
    "property1": "string",
    "property2": "string"
  },
  "passthroughBehavior": {},
  "contentHandling": {},
  "timeoutInMillis": {},
  "cacheNamespace": {},
  "cacheKeyParameters": {},
  "integrationResponses": {
    "property1": {
      "statusCode": {},
      "selectionPattern": {},
      "responseParameters": {
        "property1": "string",
        "property2": "string"
      },
      "responseTemplates": {
        "property1": "string",
        "property2": "string"
      },
      "contentHandling": {}
    },
    "property2": {
      "statusCode": {},
      "selectionPattern": {},
      "responseParameters": {
        "property1": "string",
        "property2": "string"
      },
      "responseTemplates": {
        "property1": "string",
        "property2": "string"
      },
      "contentHandling": {}
    }
  },
  "tlsConfig": {
    "insecureSkipVerification": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="updateintegration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Integration](#schemaintegration)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetIntegrationResponse

<a id="opIdGetIntegrationResponse"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/resources/string/methods/string/integration/responses/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration/responses/{status_code}`

Represents a get integration response.

<h3 id="getintegrationresponse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|resource_id|path|string|true|Specifies a get integration response request's resource identifier.|
|http_method|path|string|true|Specifies a get integration response request's HTTP method.|
|status_code|path|string|true|Specifies a get integration response request's status code.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "statusCode": {},
  "selectionPattern": {},
  "responseParameters": {
    "property1": "string",
    "property2": "string"
  },
  "responseTemplates": {
    "property1": "string",
    "property2": "string"
  },
  "contentHandling": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getintegrationresponse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[IntegrationResponse](#schemaintegrationresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutIntegrationResponse

<a id="opIdPutIntegrationResponse"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/resources/string/methods/string/integration/responses/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "selectionPattern": "string",
    "responseParameters": {
      "property1": "string",
      "property2": "string"
    },
    "responseTemplates": {
      "property1": "string",
      "property2": "string"
    },
    "contentHandling": "CONVERT_TO_BINARY"
  }'
```

`PUT /restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration/responses/{status_code}`

Represents a put integration.

> Body parameter

```json
{
  "selectionPattern": "string",
  "responseParameters": {
    "property1": "string",
    "property2": "string"
  },
  "responseTemplates": {
    "property1": "string",
    "property2": "string"
  },
  "contentHandling": "CONVERT_TO_BINARY"
}
```

<h3 id="putintegrationresponse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|resource_id|path|string|true|Specifies a put integration response request's resource identifier.|
|http_method|path|string|true|Specifies a put integration response request's HTTP method.|
|status_code|path|string|true|Specifies the status code that is used to map the integration response to an existing MethodResponse.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» selectionPattern|body|string|false|Specifies the selection pattern of a put integration response.|
|» responseParameters|body|object|false|A key-value map specifying response parameters that are passed to the method response from the back end. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of <code>method.response.header.{name}</code>, where <code>name</code> is a valid and unique header name. The mapped non-static value must match the pattern of <code>integration.response.header.{name}</code> or <code>integration.response.body.{JSON-expression}</code>, where <code>name</code> must be a valid and unique response header name and <code>JSON-expression</code> a valid JSON expression without the <code>$</code> prefix.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|
|» responseTemplates|body|object|false|Specifies a put integration response's templates.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|
|» contentHandling|body|string|false|<p>Specifies how to handle response payload content type conversions. Supported values are <code>CONVERT_TO_BINARY</code> and <code>CONVERT_TO_TEXT</code>, with the following behaviors:</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the method response without modification.</p>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» contentHandling|CONVERT_TO_BINARY|
|» contentHandling|CONVERT_TO_TEXT|

> Example responses

> 201 Response

```json
{
  "statusCode": {},
  "selectionPattern": {},
  "responseParameters": {
    "property1": "string",
    "property2": "string"
  },
  "responseTemplates": {
    "property1": "string",
    "property2": "string"
  },
  "contentHandling": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="putintegrationresponse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[IntegrationResponse](#schemaintegrationresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteIntegrationResponse

<a id="opIdDeleteIntegrationResponse"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/resources/string/methods/string/integration/responses/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration/responses/{status_code}`

Represents a delete integration response.

<h3 id="deleteintegrationresponse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|resource_id|path|string|true|Specifies a delete integration response request's resource identifier.|
|http_method|path|string|true|Specifies a delete integration response request's HTTP method.|
|status_code|path|string|true|Specifies a delete integration response request's status code.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="deleteintegrationresponse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateIntegrationResponse

<a id="opIdUpdateIntegrationResponse"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/resources/string/methods/string/integration/responses/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "patchOperations": [
      {
        "op": {},
        "path": {},
        "value": {},
        "from": {}
      }
    ]
  }'
```

`PATCH /restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration/responses/{status_code}`

Represents an update integration response.

> Body parameter

```json
{
  "patchOperations": [
    {
      "op": {},
      "path": {},
      "value": {},
      "from": {}
    }
  ]
}
```

<h3 id="updateintegrationresponse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|resource_id|path|string|true|Specifies an update integration response request's resource identifier.|
|http_method|path|string|true|Specifies an update integration response request's HTTP method.|
|status_code|path|string|true|Specifies an update integration response request's status code.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» patchOperations|body|[[PatchOperation](#schemapatchoperation)]|false|A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.|

> Example responses

> 200 Response

```json
{
  "statusCode": {},
  "selectionPattern": {},
  "responseParameters": {
    "property1": "string",
    "property2": "string"
  },
  "responseTemplates": {
    "property1": "string",
    "property2": "string"
  },
  "contentHandling": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="updateintegrationresponse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[IntegrationResponse](#schemaintegrationresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMethod

<a id="opIdGetMethod"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/resources/string/methods/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}`

Describe an existing Method resource.

<h3 id="getmethod-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|resource_id|path|string|true|The Resource identifier for the Method resource.|
|http_method|path|string|true|Specifies the method request's HTTP method type.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "httpMethod": {},
  "authorizationType": {},
  "authorizerId": {},
  "apiKeyRequired": {},
  "requestValidatorId": {},
  "operationName": {},
  "requestParameters": {
    "property1": true,
    "property2": true
  },
  "requestModels": {
    "property1": "string",
    "property2": "string"
  },
  "methodResponses": {
    "property1": {
      "statusCode": {},
      "responseParameters": {
        "property1": true,
        "property2": true
      },
      "responseModels": {
        "property1": "string",
        "property2": "string"
      }
    },
    "property2": {
      "statusCode": {},
      "responseParameters": {
        "property1": true,
        "property2": true
      },
      "responseModels": {
        "property1": "string",
        "property2": "string"
      }
    }
  },
  "methodIntegration": {
    "type": {},
    "httpMethod": {},
    "uri": {},
    "connectionType": {},
    "connectionId": {},
    "credentials": {},
    "requestParameters": {
      "property1": "string",
      "property2": "string"
    },
    "requestTemplates": {
      "property1": "string",
      "property2": "string"
    },
    "passthroughBehavior": {},
    "contentHandling": {},
    "timeoutInMillis": {},
    "cacheNamespace": {},
    "cacheKeyParameters": {},
    "integrationResponses": {
      "property1": {
        "statusCode": {},
        "selectionPattern": {},
        "responseParameters": {
          "property1": "string",
          "property2": "string"
        },
        "responseTemplates": {
          "property1": "string",
          "property2": "string"
        },
        "contentHandling": {}
      },
      "property2": {
        "statusCode": {},
        "selectionPattern": {},
        "responseParameters": {
          "property1": "string",
          "property2": "string"
        },
        "responseTemplates": {
          "property1": "string",
          "property2": "string"
        },
        "contentHandling": {}
      }
    },
    "tlsConfig": {
      "insecureSkipVerification": {}
    }
  },
  "authorizationScopes": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="getmethod-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Method](#schemamethod)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutMethod

<a id="opIdPutMethod"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/resources/string/methods/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "authorizationType": "string",
    "authorizerId": "string",
    "apiKeyRequired": true,
    "operationName": "string",
    "requestParameters": {
      "property1": true,
      "property2": true
    },
    "requestModels": {
      "property1": "string",
      "property2": "string"
    },
    "requestValidatorId": "string",
    "authorizationScopes": [
      "string"
    ]
  }'
```

`PUT /restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}`

Add a method to an existing Resource resource.

> Body parameter

```json
{
  "authorizationType": "string",
  "authorizerId": "string",
  "apiKeyRequired": true,
  "operationName": "string",
  "requestParameters": {
    "property1": true,
    "property2": true
  },
  "requestModels": {
    "property1": "string",
    "property2": "string"
  },
  "requestValidatorId": "string",
  "authorizationScopes": [
    "string"
  ]
}
```

<h3 id="putmethod-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|resource_id|path|string|true|The Resource identifier for the new Method resource.|
|http_method|path|string|true|Specifies the method request's HTTP method type.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» authorizationType|body|string|true|The method's authorization type. Valid values are <code>NONE</code> for open access, <code>AWS_IAM</code> for using AWS IAM permissions, <code>CUSTOM</code> for using a custom authorizer, or <code>COGNITO_USER_POOLS</code> for using a Cognito user pool.|
|» authorizerId|body|string|false|Specifies the identifier of an Authorizer to use on this Method, if the type is CUSTOM or COGNITO_USER_POOLS. The authorizer identifier is generated by API Gateway when you created the authorizer.|
|» apiKeyRequired|body|boolean|false|Specifies whether the method required a valid ApiKey.|
|» operationName|body|string|false|A human-friendly operation identifier for the method. For example, you can assign the <code>operationName</code> of <code>ListPets</code> for the <code>GET /pets</code> method in the <code>PetStore</code> example.|
|» requestParameters|body|object|false|A key-value map defining required or optional method request parameters that can be accepted by API Gateway. A key defines a method request parameter name matching the pattern of <code>method.request.{location}.{name}</code>, where <code>location</code> is <code>querystring</code>, <code>path</code>, or <code>header</code> and <code>name</code> is a valid and unique parameter name. The value associated with the key is a Boolean flag indicating whether the parameter is required (<code>true</code>) or optional (<code>false</code>). The method request parameter names defined here are available in Integration to be mapped to integration request parameters or body-mapping templates.|
|» » **additionalProperties**|body|[NullableBoolean](#schemanullableboolean)|false|none|
|» requestModels|body|object|false|Specifies the Model resources used for the request's content type. Request models are represented as a key/value map, with a content type as the key and a Model name as the value.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|
|» requestValidatorId|body|string|false|The identifier of a RequestValidator for validating the method request.|
|» authorizationScopes|body|[[String](#schemastring)]|false|A list of authorization scopes configured on the method. The scopes are used with a <code>COGNITO_USER_POOLS</code> authorizer to authorize the method invocation. The authorization works by matching the method scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any method scopes matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the method scope is configured, the client must provide an access token instead of an identity token for authorization purposes.|

> Example responses

> 201 Response

```json
{
  "httpMethod": {},
  "authorizationType": {},
  "authorizerId": {},
  "apiKeyRequired": {},
  "requestValidatorId": {},
  "operationName": {},
  "requestParameters": {
    "property1": true,
    "property2": true
  },
  "requestModels": {
    "property1": "string",
    "property2": "string"
  },
  "methodResponses": {
    "property1": {
      "statusCode": {},
      "responseParameters": {
        "property1": true,
        "property2": true
      },
      "responseModels": {
        "property1": "string",
        "property2": "string"
      }
    },
    "property2": {
      "statusCode": {},
      "responseParameters": {
        "property1": true,
        "property2": true
      },
      "responseModels": {
        "property1": "string",
        "property2": "string"
      }
    }
  },
  "methodIntegration": {
    "type": {},
    "httpMethod": {},
    "uri": {},
    "connectionType": {},
    "connectionId": {},
    "credentials": {},
    "requestParameters": {
      "property1": "string",
      "property2": "string"
    },
    "requestTemplates": {
      "property1": "string",
      "property2": "string"
    },
    "passthroughBehavior": {},
    "contentHandling": {},
    "timeoutInMillis": {},
    "cacheNamespace": {},
    "cacheKeyParameters": {},
    "integrationResponses": {
      "property1": {
        "statusCode": {},
        "selectionPattern": {},
        "responseParameters": {
          "property1": "string",
          "property2": "string"
        },
        "responseTemplates": {
          "property1": "string",
          "property2": "string"
        },
        "contentHandling": {}
      },
      "property2": {
        "statusCode": {},
        "selectionPattern": {},
        "responseParameters": {
          "property1": "string",
          "property2": "string"
        },
        "responseTemplates": {
          "property1": "string",
          "property2": "string"
        },
        "contentHandling": {}
      }
    },
    "tlsConfig": {
      "insecureSkipVerification": {}
    }
  },
  "authorizationScopes": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="putmethod-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[Method](#schemamethod)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TestInvokeMethod

<a id="opIdTestInvokeMethod"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/resources/string/methods/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "pathWithQueryString": "string",
    "body": "string",
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "multiValueHeaders": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "clientCertificateId": "string",
    "stageVariables": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}`

Simulate the invocation of a Method in your RestApi with headers, parameters, and an incoming request body.

> Body parameter

```json
{
  "pathWithQueryString": "string",
  "body": "string",
  "headers": {
    "property1": "string",
    "property2": "string"
  },
  "multiValueHeaders": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "clientCertificateId": "string",
  "stageVariables": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="testinvokemethod-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|resource_id|path|string|true|Specifies a test invoke method request's resource ID.|
|http_method|path|string|true|Specifies a test invoke method request's HTTP method.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» pathWithQueryString|body|string|false|The URI path, including query string, of the simulated invocation request. Use this to specify path parameters and query string parameters.|
|» body|body|string|false|The simulated request body of an incoming invocation request.|
|» headers|body|object|false|A key-value map of headers to simulate an incoming invocation request.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|
|» multiValueHeaders|body|object|false|The headers as a map from string to list of values to simulate an incoming invocation request.|
|» » **additionalProperties**|body|[ListOfString](#schemalistofstring)|false|none|
|» clientCertificateId|body|string|false|A ClientCertificate identifier to use in the test invocation. API Gateway will use the certificate when making the HTTPS request to the defined back-end endpoint.|
|» stageVariables|body|object|false|A key-value map of stage variables to simulate an invocation on a deployed Stage.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|

> Example responses

> 200 Response

```json
{
  "status": {},
  "body": {},
  "headers": {
    "property1": "string",
    "property2": "string"
  },
  "multiValueHeaders": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "log": {},
  "latency": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="testinvokemethod-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TestInvokeMethodResponse](#schematestinvokemethodresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteMethod

<a id="opIdDeleteMethod"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/resources/string/methods/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}`

Deletes an existing Method resource.

<h3 id="deletemethod-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|resource_id|path|string|true|The Resource identifier for the Method resource.|
|http_method|path|string|true|The HTTP verb of the Method resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="deletemethod-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateMethod

<a id="opIdUpdateMethod"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/resources/string/methods/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "patchOperations": [
      {
        "op": {},
        "path": {},
        "value": {},
        "from": {}
      }
    ]
  }'
```

`PATCH /restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}`

Updates an existing Method resource.

> Body parameter

```json
{
  "patchOperations": [
    {
      "op": {},
      "path": {},
      "value": {},
      "from": {}
    }
  ]
}
```

<h3 id="updatemethod-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|resource_id|path|string|true|The Resource identifier for the Method resource.|
|http_method|path|string|true|The HTTP verb of the Method resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» patchOperations|body|[[PatchOperation](#schemapatchoperation)]|false|A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.|

> Example responses

> 200 Response

```json
{
  "httpMethod": {},
  "authorizationType": {},
  "authorizerId": {},
  "apiKeyRequired": {},
  "requestValidatorId": {},
  "operationName": {},
  "requestParameters": {
    "property1": true,
    "property2": true
  },
  "requestModels": {
    "property1": "string",
    "property2": "string"
  },
  "methodResponses": {
    "property1": {
      "statusCode": {},
      "responseParameters": {
        "property1": true,
        "property2": true
      },
      "responseModels": {
        "property1": "string",
        "property2": "string"
      }
    },
    "property2": {
      "statusCode": {},
      "responseParameters": {
        "property1": true,
        "property2": true
      },
      "responseModels": {
        "property1": "string",
        "property2": "string"
      }
    }
  },
  "methodIntegration": {
    "type": {},
    "httpMethod": {},
    "uri": {},
    "connectionType": {},
    "connectionId": {},
    "credentials": {},
    "requestParameters": {
      "property1": "string",
      "property2": "string"
    },
    "requestTemplates": {
      "property1": "string",
      "property2": "string"
    },
    "passthroughBehavior": {},
    "contentHandling": {},
    "timeoutInMillis": {},
    "cacheNamespace": {},
    "cacheKeyParameters": {},
    "integrationResponses": {
      "property1": {
        "statusCode": {},
        "selectionPattern": {},
        "responseParameters": {
          "property1": "string",
          "property2": "string"
        },
        "responseTemplates": {
          "property1": "string",
          "property2": "string"
        },
        "contentHandling": {}
      },
      "property2": {
        "statusCode": {},
        "selectionPattern": {},
        "responseParameters": {
          "property1": "string",
          "property2": "string"
        },
        "responseTemplates": {
          "property1": "string",
          "property2": "string"
        },
        "contentHandling": {}
      }
    },
    "tlsConfig": {
      "insecureSkipVerification": {}
    }
  },
  "authorizationScopes": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="updatemethod-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Method](#schemamethod)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMethodResponse

<a id="opIdGetMethodResponse"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/resources/string/methods/string/responses/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/responses/{status_code}`

Describes a MethodResponse resource.

<h3 id="getmethodresponse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|resource_id|path|string|true|The Resource identifier for the MethodResponse resource.|
|http_method|path|string|true|The HTTP verb of the Method resource.|
|status_code|path|string|true|The status code for the MethodResponse resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "statusCode": {},
  "responseParameters": {
    "property1": true,
    "property2": true
  },
  "responseModels": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="getmethodresponse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MethodResponse](#schemamethodresponse)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutMethodResponse

<a id="opIdPutMethodResponse"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/resources/string/methods/string/responses/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "responseParameters": {
      "property1": true,
      "property2": true
    },
    "responseModels": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PUT /restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/responses/{status_code}`

Adds a MethodResponse to an existing Method resource.

> Body parameter

```json
{
  "responseParameters": {
    "property1": true,
    "property2": true
  },
  "responseModels": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="putmethodresponse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|resource_id|path|string|true|The Resource identifier for the Method resource.|
|http_method|path|string|true|The HTTP verb of the Method resource.|
|status_code|path|string|true|The method response's status code.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» responseParameters|body|object|false|A key-value map specifying required or optional response parameters that API Gateway can send back to the caller. A key defines a method response header name and the associated value is a Boolean flag indicating whether the method response parameter is required or not. The method response header names must match the pattern of <code>method.response.header.{name}</code>, where <code>name</code> is a valid and unique header name. The response parameter names defined here are available in the integration response to be mapped from an integration response header expressed in <code>integration.response.header.{name}</code>, a static value enclosed within a pair of single quotes (e.g., <code>'application/json'</code>), or a JSON expression from the back-end response payload in the form of <code>integration.response.body.{JSON-expression}</code>, where <code>JSON-expression</code> is a valid JSON expression without the <code>$</code> prefix.)|
|» » **additionalProperties**|body|[NullableBoolean](#schemanullableboolean)|false|none|
|» responseModels|body|object|false|Specifies the Model resources used for the response's content type. Response models are represented as a key/value map, with a content type as the key and a Model name as the value.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|

> Example responses

> 201 Response

```json
{
  "statusCode": {},
  "responseParameters": {
    "property1": true,
    "property2": true
  },
  "responseModels": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="putmethodresponse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[MethodResponse](#schemamethodresponse)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteMethodResponse

<a id="opIdDeleteMethodResponse"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/resources/string/methods/string/responses/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/responses/{status_code}`

Deletes an existing MethodResponse resource.

<h3 id="deletemethodresponse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|resource_id|path|string|true|The Resource identifier for the MethodResponse resource.|
|http_method|path|string|true|The HTTP verb of the Method resource.|
|status_code|path|string|true|The status code identifier for the MethodResponse resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="deletemethodresponse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateMethodResponse

<a id="opIdUpdateMethodResponse"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/resources/string/methods/string/responses/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "patchOperations": [
      {
        "op": {},
        "path": {},
        "value": {},
        "from": {}
      }
    ]
  }'
```

`PATCH /restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/responses/{status_code}`

Updates an existing MethodResponse resource.

> Body parameter

```json
{
  "patchOperations": [
    {
      "op": {},
      "path": {},
      "value": {},
      "from": {}
    }
  ]
}
```

<h3 id="updatemethodresponse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|resource_id|path|string|true|The Resource identifier for the MethodResponse resource.|
|http_method|path|string|true|The HTTP verb of the Method resource.|
|status_code|path|string|true|The status code for the MethodResponse resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» patchOperations|body|[[PatchOperation](#schemapatchoperation)]|false|A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.|

> Example responses

> 201 Response

```json
{
  "statusCode": {},
  "responseParameters": {
    "property1": true,
    "property2": true
  },
  "responseModels": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="updatemethodresponse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[MethodResponse](#schemamethodresponse)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetModel

<a id="opIdGetModel"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/models/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /restapis/{restapi_id}/models/{model_name}`

Describes an existing model defined for a RestApi resource.

<h3 id="getmodel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The RestApi identifier under which the Model exists.|
|model_name|path|string|true|The name of the model as an identifier.|
|flatten|query|boolean|false|A query parameter of a Boolean value to resolve (<code>true</code>) all external model references and returns a flattened model schema or not (<code>false</code>) The default is <code>false</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": {},
  "name": {},
  "description": {},
  "schema": {},
  "contentType": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getmodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Model](#schemamodel)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteModel

<a id="opIdDeleteModel"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/models/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /restapis/{restapi_id}/models/{model_name}`

Deletes a model.

<h3 id="deletemodel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|model_name|path|string|true|The name of the model to delete.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="deletemodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateModel

<a id="opIdUpdateModel"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/models/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "patchOperations": [
      {
        "op": {},
        "path": {},
        "value": {},
        "from": {}
      }
    ]
  }'
```

`PATCH /restapis/{restapi_id}/models/{model_name}`

Changes information about a model.

> Body parameter

```json
{
  "patchOperations": [
    {
      "op": {},
      "path": {},
      "value": {},
      "from": {}
    }
  ]
}
```

<h3 id="updatemodel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|model_name|path|string|true|The name of the model to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» patchOperations|body|[[PatchOperation](#schemapatchoperation)]|false|A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.|

> Example responses

> 200 Response

```json
{
  "id": {},
  "name": {},
  "description": {},
  "schema": {},
  "contentType": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="updatemodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Model](#schemamodel)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRequestValidator

<a id="opIdGetRequestValidator"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/requestvalidators/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /restapis/{restapi_id}/requestvalidators/{requestvalidator_id}`

Gets a RequestValidator of a given RestApi.

<h3 id="getrequestvalidator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|requestvalidator_id|path|string|true|The identifier of the RequestValidator to be retrieved.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": {},
  "name": {},
  "validateRequestBody": {},
  "validateRequestParameters": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getrequestvalidator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RequestValidator](#schemarequestvalidator)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRequestValidator

<a id="opIdDeleteRequestValidator"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/requestvalidators/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /restapis/{restapi_id}/requestvalidators/{requestvalidator_id}`

Deletes a RequestValidator of a given RestApi.

<h3 id="deleterequestvalidator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|requestvalidator_id|path|string|true|The identifier of the RequestValidator to be deleted.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="deleterequestvalidator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRequestValidator

<a id="opIdUpdateRequestValidator"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/requestvalidators/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "patchOperations": [
      {
        "op": {},
        "path": {},
        "value": {},
        "from": {}
      }
    ]
  }'
```

`PATCH /restapis/{restapi_id}/requestvalidators/{requestvalidator_id}`

Updates a RequestValidator of a given RestApi.

> Body parameter

```json
{
  "patchOperations": [
    {
      "op": {},
      "path": {},
      "value": {},
      "from": {}
    }
  ]
}
```

<h3 id="updaterequestvalidator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|requestvalidator_id|path|string|true|The identifier of RequestValidator to be updated.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» patchOperations|body|[[PatchOperation](#schemapatchoperation)]|false|A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.|

> Example responses

> 200 Response

```json
{
  "id": {},
  "name": {},
  "validateRequestBody": {},
  "validateRequestParameters": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="updaterequestvalidator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RequestValidator](#schemarequestvalidator)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResource

<a id="opIdGetResource"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/resources/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /restapis/{restapi_id}/resources/{resource_id}`

Lists information about a resource.

<h3 id="getresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|resource_id|path|string|true|The identifier for the Resource resource.|
|embed|query|[[String](#schemastring)]|false|A query parameter to retrieve the specified resources embedded in the returned Resource representation in the response. This <code>embed</code> parameter value is a list of comma-separated strings. Currently, the request supports only retrieval of the embedded Method resources this way. The query parameter value must be a single-valued list and contain the <code>"methods"</code> string. For example, <code>GET /restapis/{restapi_id}/resources/{resource_id}?embed=methods</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": {},
  "parentId": {},
  "pathPart": {},
  "path": {},
  "resourceMethods": {
    "property1": {
      "httpMethod": {},
      "authorizationType": {},
      "authorizerId": {},
      "apiKeyRequired": {},
      "requestValidatorId": {},
      "operationName": {},
      "requestParameters": {
        "property1": true,
        "property2": true
      },
      "requestModels": {
        "property1": "string",
        "property2": "string"
      },
      "methodResponses": {
        "property1": {
          "statusCode": {},
          "responseParameters": {
            "property1": true,
            "property2": true
          },
          "responseModels": {
            "property1": "string",
            "property2": "string"
          }
        },
        "property2": {
          "statusCode": {},
          "responseParameters": {
            "property1": true,
            "property2": true
          },
          "responseModels": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "methodIntegration": {
        "type": {},
        "httpMethod": {},
        "uri": {},
        "connectionType": {},
        "connectionId": {},
        "credentials": {},
        "requestParameters": {
          "property1": "string",
          "property2": "string"
        },
        "requestTemplates": {
          "property1": "string",
          "property2": "string"
        },
        "passthroughBehavior": {},
        "contentHandling": {},
        "timeoutInMillis": {},
        "cacheNamespace": {},
        "cacheKeyParameters": {},
        "integrationResponses": {
          "property1": {
            "statusCode": {},
            "selectionPattern": {},
            "responseParameters": {
              "property1": "string",
              "property2": "string"
            },
            "responseTemplates": {
              "property1": "string",
              "property2": "string"
            },
            "contentHandling": {}
          },
          "property2": {
            "statusCode": {},
            "selectionPattern": {},
            "responseParameters": {
              "property1": "string",
              "property2": "string"
            },
            "responseTemplates": {
              "property1": "string",
              "property2": "string"
            },
            "contentHandling": {}
          }
        },
        "tlsConfig": {
          "insecureSkipVerification": {}
        }
      },
      "authorizationScopes": {}
    },
    "property2": {
      "httpMethod": {},
      "authorizationType": {},
      "authorizerId": {},
      "apiKeyRequired": {},
      "requestValidatorId": {},
      "operationName": {},
      "requestParameters": {
        "property1": true,
        "property2": true
      },
      "requestModels": {
        "property1": "string",
        "property2": "string"
      },
      "methodResponses": {
        "property1": {
          "statusCode": {},
          "responseParameters": {
            "property1": true,
            "property2": true
          },
          "responseModels": {
            "property1": "string",
            "property2": "string"
          }
        },
        "property2": {
          "statusCode": {},
          "responseParameters": {
            "property1": true,
            "property2": true
          },
          "responseModels": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "methodIntegration": {
        "type": {},
        "httpMethod": {},
        "uri": {},
        "connectionType": {},
        "connectionId": {},
        "credentials": {},
        "requestParameters": {
          "property1": "string",
          "property2": "string"
        },
        "requestTemplates": {
          "property1": "string",
          "property2": "string"
        },
        "passthroughBehavior": {},
        "contentHandling": {},
        "timeoutInMillis": {},
        "cacheNamespace": {},
        "cacheKeyParameters": {},
        "integrationResponses": {
          "property1": {
            "statusCode": {},
            "selectionPattern": {},
            "responseParameters": {
              "property1": "string",
              "property2": "string"
            },
            "responseTemplates": {
              "property1": "string",
              "property2": "string"
            },
            "contentHandling": {}
          },
          "property2": {
            "statusCode": {},
            "selectionPattern": {},
            "responseParameters": {
              "property1": "string",
              "property2": "string"
            },
            "responseTemplates": {
              "property1": "string",
              "property2": "string"
            },
            "contentHandling": {}
          }
        },
        "tlsConfig": {
          "insecureSkipVerification": {}
        }
      },
      "authorizationScopes": {}
    }
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="getresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Resource](#schemaresource)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteResource

<a id="opIdDeleteResource"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/resources/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /restapis/{restapi_id}/resources/{resource_id}`

Deletes a Resource resource.

<h3 id="deleteresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|resource_id|path|string|true|The identifier of the Resource resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="deleteresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|None|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateResource

<a id="opIdUpdateResource"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/resources/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "patchOperations": [
      {
        "op": {},
        "path": {},
        "value": {},
        "from": {}
      }
    ]
  }'
```

`PATCH /restapis/{restapi_id}/resources/{resource_id}`

Changes information about a Resource resource.

> Body parameter

```json
{
  "patchOperations": [
    {
      "op": {},
      "path": {},
      "value": {},
      "from": {}
    }
  ]
}
```

<h3 id="updateresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|resource_id|path|string|true|The identifier of the Resource resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» patchOperations|body|[[PatchOperation](#schemapatchoperation)]|false|A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.|

> Example responses

> 200 Response

```json
{
  "id": {},
  "parentId": {},
  "pathPart": {},
  "path": {},
  "resourceMethods": {
    "property1": {
      "httpMethod": {},
      "authorizationType": {},
      "authorizerId": {},
      "apiKeyRequired": {},
      "requestValidatorId": {},
      "operationName": {},
      "requestParameters": {
        "property1": true,
        "property2": true
      },
      "requestModels": {
        "property1": "string",
        "property2": "string"
      },
      "methodResponses": {
        "property1": {
          "statusCode": {},
          "responseParameters": {
            "property1": true,
            "property2": true
          },
          "responseModels": {
            "property1": "string",
            "property2": "string"
          }
        },
        "property2": {
          "statusCode": {},
          "responseParameters": {
            "property1": true,
            "property2": true
          },
          "responseModels": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "methodIntegration": {
        "type": {},
        "httpMethod": {},
        "uri": {},
        "connectionType": {},
        "connectionId": {},
        "credentials": {},
        "requestParameters": {
          "property1": "string",
          "property2": "string"
        },
        "requestTemplates": {
          "property1": "string",
          "property2": "string"
        },
        "passthroughBehavior": {},
        "contentHandling": {},
        "timeoutInMillis": {},
        "cacheNamespace": {},
        "cacheKeyParameters": {},
        "integrationResponses": {
          "property1": {
            "statusCode": {},
            "selectionPattern": {},
            "responseParameters": {
              "property1": "string",
              "property2": "string"
            },
            "responseTemplates": {
              "property1": "string",
              "property2": "string"
            },
            "contentHandling": {}
          },
          "property2": {
            "statusCode": {},
            "selectionPattern": {},
            "responseParameters": {
              "property1": "string",
              "property2": "string"
            },
            "responseTemplates": {
              "property1": "string",
              "property2": "string"
            },
            "contentHandling": {}
          }
        },
        "tlsConfig": {
          "insecureSkipVerification": {}
        }
      },
      "authorizationScopes": {}
    },
    "property2": {
      "httpMethod": {},
      "authorizationType": {},
      "authorizerId": {},
      "apiKeyRequired": {},
      "requestValidatorId": {},
      "operationName": {},
      "requestParameters": {
        "property1": true,
        "property2": true
      },
      "requestModels": {
        "property1": "string",
        "property2": "string"
      },
      "methodResponses": {
        "property1": {
          "statusCode": {},
          "responseParameters": {
            "property1": true,
            "property2": true
          },
          "responseModels": {
            "property1": "string",
            "property2": "string"
          }
        },
        "property2": {
          "statusCode": {},
          "responseParameters": {
            "property1": true,
            "property2": true
          },
          "responseModels": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "methodIntegration": {
        "type": {},
        "httpMethod": {},
        "uri": {},
        "connectionType": {},
        "connectionId": {},
        "credentials": {},
        "requestParameters": {
          "property1": "string",
          "property2": "string"
        },
        "requestTemplates": {
          "property1": "string",
          "property2": "string"
        },
        "passthroughBehavior": {},
        "contentHandling": {},
        "timeoutInMillis": {},
        "cacheNamespace": {},
        "cacheKeyParameters": {},
        "integrationResponses": {
          "property1": {
            "statusCode": {},
            "selectionPattern": {},
            "responseParameters": {
              "property1": "string",
              "property2": "string"
            },
            "responseTemplates": {
              "property1": "string",
              "property2": "string"
            },
            "contentHandling": {}
          },
          "property2": {
            "statusCode": {},
            "selectionPattern": {},
            "responseParameters": {
              "property1": "string",
              "property2": "string"
            },
            "responseTemplates": {
              "property1": "string",
              "property2": "string"
            },
            "contentHandling": {}
          }
        },
        "tlsConfig": {
          "insecureSkipVerification": {}
        }
      },
      "authorizationScopes": {}
    }
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="updateresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Resource](#schemaresource)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRestApi

<a id="opIdGetRestApi"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /restapis/{restapi_id}`

Lists the RestApi resource in the collection.

<h3 id="getrestapi-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": {},
  "name": {},
  "description": {},
  "createdDate": {},
  "version": {},
  "warnings": {},
  "binaryMediaTypes": {},
  "minimumCompressionSize": {},
  "apiKeySource": {},
  "endpointConfiguration": {
    "types": {},
    "vpcEndpointIds": {}
  },
  "policy": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "disableExecuteApiEndpoint": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getrestapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RestApi](#schemarestapi)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutRestApi

<a id="opIdPutRestApi"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "body": "string"
  }'
```

`PUT /restapis/{restapi_id}`

A feature of the API Gateway control service for updating an existing API with an input of external API definitions. The update can take the form of merging the supplied definition into the existing API or overwriting the existing API.

> Body parameter

```json
{
  "body": "string"
}
```

<h3 id="putrestapi-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|mode|query|string|false|The <code>mode</code> query parameter to specify the update mode. Valid values are "merge" and "overwrite". By default, the update mode is "merge".|
|failonwarnings|query|boolean|false|A query parameter to indicate whether to rollback the API update (<code>true</code>) or not (<code>false</code>) when a warning is encountered. The default value is <code>false</code>.|
|parameters|query|object|false|Custom header parameters as part of the request. For example, to exclude DocumentationParts from an imported API, set <code>ignore=documentation</code> as a <code>parameters</code> value, as in the AWS CLI command of <code>aws apigateway import-rest-api --parameters ignore=documentation --body 'file:///path/to/imported-api-body.json'</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» body|body|string|true|The PUT request body containing external API definitions. Currently, only OpenAPI definition JSON/YAML files are supported. The maximum size of the API definition file is 6MB.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|mode|merge|
|mode|overwrite|

> Example responses

> 200 Response

```json
{
  "id": {},
  "name": {},
  "description": {},
  "createdDate": {},
  "version": {},
  "warnings": {},
  "binaryMediaTypes": {},
  "minimumCompressionSize": {},
  "apiKeySource": {},
  "endpointConfiguration": {
    "types": {},
    "vpcEndpointIds": {}
  },
  "policy": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "disableExecuteApiEndpoint": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="putrestapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RestApi](#schemarestapi)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRestApi

<a id="opIdDeleteRestApi"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /restapis/{restapi_id}`

Deletes the specified API.

<h3 id="deleterestapi-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="deleterestapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRestApi

<a id="opIdUpdateRestApi"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "patchOperations": [
      {
        "op": {},
        "path": {},
        "value": {},
        "from": {}
      }
    ]
  }'
```

`PATCH /restapis/{restapi_id}`

Changes information about the specified API.

> Body parameter

```json
{
  "patchOperations": [
    {
      "op": {},
      "path": {},
      "value": {},
      "from": {}
    }
  ]
}
```

<h3 id="updaterestapi-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» patchOperations|body|[[PatchOperation](#schemapatchoperation)]|false|A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.|

> Example responses

> 200 Response

```json
{
  "id": {},
  "name": {},
  "description": {},
  "createdDate": {},
  "version": {},
  "warnings": {},
  "binaryMediaTypes": {},
  "minimumCompressionSize": {},
  "apiKeySource": {},
  "endpointConfiguration": {
    "types": {},
    "vpcEndpointIds": {}
  },
  "policy": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "disableExecuteApiEndpoint": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="updaterestapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RestApi](#schemarestapi)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetStage

<a id="opIdGetStage"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/stages/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /restapis/{restapi_id}/stages/{stage_name}`

Gets information about a Stage resource.

<h3 id="getstage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|stage_name|path|string|true|The name of the Stage resource to get information about.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "deploymentId": {},
  "clientCertificateId": {},
  "stageName": {},
  "description": {},
  "cacheClusterEnabled": {},
  "cacheClusterSize": {},
  "cacheClusterStatus": {},
  "methodSettings": {
    "property1": {
      "metricsEnabled": {},
      "loggingLevel": {},
      "dataTraceEnabled": {},
      "throttlingBurstLimit": {},
      "throttlingRateLimit": {},
      "cachingEnabled": {},
      "cacheTtlInSeconds": {},
      "cacheDataEncrypted": {},
      "requireAuthorizationForCacheControl": {},
      "unauthorizedCacheControlHeaderStrategy": {}
    },
    "property2": {
      "metricsEnabled": {},
      "loggingLevel": {},
      "dataTraceEnabled": {},
      "throttlingBurstLimit": {},
      "throttlingRateLimit": {},
      "cachingEnabled": {},
      "cacheTtlInSeconds": {},
      "cacheDataEncrypted": {},
      "requireAuthorizationForCacheControl": {},
      "unauthorizedCacheControlHeaderStrategy": {}
    }
  },
  "variables": {
    "property1": "string",
    "property2": "string"
  },
  "documentationVersion": {},
  "accessLogSettings": {
    "format": {},
    "destinationArn": {}
  },
  "canarySettings": {
    "percentTraffic": {},
    "deploymentId": {},
    "stageVariableOverrides": {
      "property1": "string",
      "property2": "string"
    },
    "useStageCache": {}
  },
  "tracingEnabled": {},
  "webAclArn": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "createdDate": {},
  "lastUpdatedDate": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="getstage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Stage](#schemastage)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteStage

<a id="opIdDeleteStage"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/stages/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /restapis/{restapi_id}/stages/{stage_name}`

Deletes a Stage resource.

<h3 id="deletestage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|stage_name|path|string|true|The name of the Stage resource to delete.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="deletestage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateStage

<a id="opIdUpdateStage"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/stages/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "patchOperations": [
      {
        "op": {},
        "path": {},
        "value": {},
        "from": {}
      }
    ]
  }'
```

`PATCH /restapis/{restapi_id}/stages/{stage_name}`

Changes information about a Stage resource.

> Body parameter

```json
{
  "patchOperations": [
    {
      "op": {},
      "path": {},
      "value": {},
      "from": {}
    }
  ]
}
```

<h3 id="updatestage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|stage_name|path|string|true|The name of the Stage resource to change information about.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» patchOperations|body|[[PatchOperation](#schemapatchoperation)]|false|A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.|

> Example responses

> 200 Response

```json
{
  "deploymentId": {},
  "clientCertificateId": {},
  "stageName": {},
  "description": {},
  "cacheClusterEnabled": {},
  "cacheClusterSize": {},
  "cacheClusterStatus": {},
  "methodSettings": {
    "property1": {
      "metricsEnabled": {},
      "loggingLevel": {},
      "dataTraceEnabled": {},
      "throttlingBurstLimit": {},
      "throttlingRateLimit": {},
      "cachingEnabled": {},
      "cacheTtlInSeconds": {},
      "cacheDataEncrypted": {},
      "requireAuthorizationForCacheControl": {},
      "unauthorizedCacheControlHeaderStrategy": {}
    },
    "property2": {
      "metricsEnabled": {},
      "loggingLevel": {},
      "dataTraceEnabled": {},
      "throttlingBurstLimit": {},
      "throttlingRateLimit": {},
      "cachingEnabled": {},
      "cacheTtlInSeconds": {},
      "cacheDataEncrypted": {},
      "requireAuthorizationForCacheControl": {},
      "unauthorizedCacheControlHeaderStrategy": {}
    }
  },
  "variables": {
    "property1": "string",
    "property2": "string"
  },
  "documentationVersion": {},
  "accessLogSettings": {
    "format": {},
    "destinationArn": {}
  },
  "canarySettings": {
    "percentTraffic": {},
    "deploymentId": {},
    "stageVariableOverrides": {
      "property1": "string",
      "property2": "string"
    },
    "useStageCache": {}
  },
  "tracingEnabled": {},
  "webAclArn": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "createdDate": {},
  "lastUpdatedDate": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="updatestage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Stage](#schemastage)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetUsagePlan

<a id="opIdGetUsagePlan"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/usageplans/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /usageplans/{usageplanId}`

Gets a usage plan of a given plan identifier.

<h3 id="getusageplan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|usageplanId|path|string|true|The identifier of the UsagePlan resource to be retrieved.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": {},
  "name": {},
  "description": {},
  "apiStages": {},
  "throttle": {
    "burstLimit": {},
    "rateLimit": {}
  },
  "quota": {
    "limit": {},
    "offset": {},
    "period": {}
  },
  "productCode": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getusageplan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UsagePlan](#schemausageplan)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteUsagePlan

<a id="opIdDeleteUsagePlan"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/usageplans/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /usageplans/{usageplanId}`

Deletes a usage plan of a given plan Id.

<h3 id="deleteusageplan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|usageplanId|path|string|true|The Id of the to-be-deleted usage plan.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="deleteusageplan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateUsagePlan

<a id="opIdUpdateUsagePlan"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/usageplans/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "patchOperations": [
      {
        "op": {},
        "path": {},
        "value": {},
        "from": {}
      }
    ]
  }'
```

`PATCH /usageplans/{usageplanId}`

Updates a usage plan of a given plan Id.

> Body parameter

```json
{
  "patchOperations": [
    {
      "op": {},
      "path": {},
      "value": {},
      "from": {}
    }
  ]
}
```

<h3 id="updateusageplan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|usageplanId|path|string|true|The Id of the to-be-updated usage plan.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» patchOperations|body|[[PatchOperation](#schemapatchoperation)]|false|A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.|

> Example responses

> 200 Response

```json
{
  "id": {},
  "name": {},
  "description": {},
  "apiStages": {},
  "throttle": {
    "burstLimit": {},
    "rateLimit": {}
  },
  "quota": {
    "limit": {},
    "offset": {},
    "period": {}
  },
  "productCode": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="updateusageplan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UsagePlan](#schemausageplan)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetUsagePlanKey

<a id="opIdGetUsagePlanKey"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/usageplans/string/keys/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /usageplans/{usageplanId}/keys/{keyId}`

Gets a usage plan key of a given key identifier.

<h3 id="getusageplankey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|usageplanId|path|string|true|The Id of the UsagePlan resource representing the usage plan containing the to-be-retrieved UsagePlanKey resource representing a plan customer.|
|keyId|path|string|true|The key Id of the to-be-retrieved UsagePlanKey resource representing a plan customer.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": {},
  "type": {},
  "value": {},
  "name": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getusageplankey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UsagePlanKey](#schemausageplankey)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteUsagePlanKey

<a id="opIdDeleteUsagePlanKey"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/usageplans/string/keys/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /usageplans/{usageplanId}/keys/{keyId}`

Deletes a usage plan key and remove the underlying API key from the associated usage plan.

<h3 id="deleteusageplankey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|usageplanId|path|string|true|The Id of the UsagePlan resource representing the usage plan containing the to-be-deleted UsagePlanKey resource representing a plan customer.|
|keyId|path|string|true|The Id of the UsagePlanKey resource to be deleted.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="deleteusageplankey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetVpcLink

<a id="opIdGetVpcLink"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/vpclinks/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /vpclinks/{vpclink_id}`

Gets a specified VPC link under the caller's account in a region.

<h3 id="getvpclink-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vpclink_id|path|string|true|The identifier of the VpcLink. It is used in an Integration to reference this VpcLink.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": {},
  "name": {},
  "description": {},
  "targetArns": {},
  "status": {},
  "statusMessage": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getvpclink-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[VpcLink](#schemavpclink)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteVpcLink

<a id="opIdDeleteVpcLink"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/vpclinks/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /vpclinks/{vpclink_id}`

Deletes an existing VpcLink of a specified identifier.

<h3 id="deletevpclink-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vpclink_id|path|string|true|The identifier of the VpcLink. It is used in an Integration to reference this VpcLink.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="deletevpclink-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateVpcLink

<a id="opIdUpdateVpcLink"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/vpclinks/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "patchOperations": [
      {
        "op": {},
        "path": {},
        "value": {},
        "from": {}
      }
    ]
  }'
```

`PATCH /vpclinks/{vpclink_id}`

Updates an existing VpcLink of a specified identifier.

> Body parameter

```json
{
  "patchOperations": [
    {
      "op": {},
      "path": {},
      "value": {},
      "from": {}
    }
  ]
}
```

<h3 id="updatevpclink-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vpclink_id|path|string|true|The identifier of the VpcLink. It is used in an Integration to reference this VpcLink.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» patchOperations|body|[[PatchOperation](#schemapatchoperation)]|false|A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.|

> Example responses

> 200 Response

```json
{
  "id": {},
  "name": {},
  "description": {},
  "targetArns": {},
  "status": {},
  "statusMessage": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="updatevpclink-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[VpcLink](#schemavpclink)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## FlushStageAuthorizersCache

<a id="opIdFlushStageAuthorizersCache"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/stages/string/cache/authorizers \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /restapis/{restapi_id}/stages/{stage_name}/cache/authorizers`

Flushes all authorizer cache entries on a stage.

<h3 id="flushstageauthorizerscache-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|stage_name|path|string|true|The name of the stage to flush.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="flushstageauthorizerscache-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## FlushStageCache

<a id="opIdFlushStageCache"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/stages/string/cache/data \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /restapis/{restapi_id}/stages/{stage_name}/cache/data`

Flushes a stage's cache.

<h3 id="flushstagecache-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|stage_name|path|string|true|The name of the stage to flush its cache.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="flushstagecache-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetClientCertificates

<a id="opIdGetClientCertificates"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/clientcertificates \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /clientcertificates`

Gets a collection of ClientCertificate resources.

<h3 id="getclientcertificates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|position|query|string|false|The current pagination position in the paged result set.|
|limit|query|integer|false|The maximum number of returned results per page. The default value is 25 and the maximum value is 500.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "position": "string",
  "items": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getclientcertificates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ClientCertificates](#schemaclientcertificates)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GenerateClientCertificate

<a id="opIdGenerateClientCertificate"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/clientcertificates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /clientcertificates`

Generates a ClientCertificate resource.

> Body parameter

```json
{
  "description": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="generateclientcertificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» description|body|string|false|The description of the ClientCertificate.|
|» tags|body|object|false|The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|

> Example responses

> 201 Response

```json
{
  "clientCertificateId": {},
  "description": {},
  "pemEncodedCertificate": {},
  "createdDate": {},
  "expirationDate": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="generateclientcertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[ClientCertificate](#schemaclientcertificate)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAccount

<a id="opIdGetAccount"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/account \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /account`

Gets information about the current Account resource.

<h3 id="getaccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "cloudwatchRoleArn": {},
  "throttleSettings": {
    "burstLimit": {},
    "rateLimit": {}
  },
  "features": {},
  "apiKeyVersion": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Account](#schemaaccount)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAccount

<a id="opIdUpdateAccount"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/account \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "patchOperations": [
      {
        "op": {},
        "path": {},
        "value": {},
        "from": {}
      }
    ]
  }'
```

`PATCH /account`

Changes information about the current Account resource.

> Body parameter

```json
{
  "patchOperations": [
    {
      "op": {},
      "path": {},
      "value": {},
      "from": {}
    }
  ]
}
```

<h3 id="updateaccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» patchOperations|body|[[PatchOperation](#schemapatchoperation)]|false|A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.|

> Example responses

> 200 Response

```json
{
  "cloudwatchRoleArn": {},
  "throttleSettings": {
    "burstLimit": {},
    "rateLimit": {}
  },
  "features": {},
  "apiKeyVersion": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="updateaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Account](#schemaaccount)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetExport

<a id="opIdGetExport"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/stages/string/exports/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /restapis/{restapi_id}/stages/{stage_name}/exports/{export_type}`

Exports a deployed version of a RestApi in a specified format.

<h3 id="getexport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|stage_name|path|string|true|The name of the Stage that will be exported.|
|export_type|path|string|true|The type of export. Acceptable values are 'oas30' for OpenAPI 3.0.x and 'swagger' for Swagger/OpenAPI 2.0.|
|parameters|query|object|false|A key-value map of query string parameters that specify properties of the export, depending on the requested <code>exportType</code>. For <code>exportType</code> <code>oas30</code> and <code>swagger</code>, any combination of the following parameters are supported: <code>extensions='integrations'</code> or <code>extensions='apigateway'</code> will export the API with x-amazon-apigateway-integration extensions. <code>extensions='authorizers'</code> will export the API with x-amazon-apigateway-authorizer extensions. <code>postman</code> will export the API with Postman extensions, allowing for import to the Postman tool|
|Accept|header|string|false|The content-type of the export, for example <code>application/json</code>. Currently <code>application/json</code> and <code>application/yaml</code> are supported for <code>exportType</code> of<code>oas30</code> and <code>swagger</code>. This should be specified in the <code>Accept</code> header for direct API requests.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "body": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="getexport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExportResponse](#schemaexportresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetGatewayResponses

<a id="opIdGetGatewayResponses"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/gatewayresponses \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /restapis/{restapi_id}/gatewayresponses`

Gets the GatewayResponses collection on the given RestApi. If an API developer has not added any definitions for gateway responses, the result will be the API Gateway-generated default GatewayResponses collection for the supported response types.

<h3 id="getgatewayresponses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|position|query|string|false|The current pagination position in the paged result set. The GatewayResponse collection does not support pagination and the position does not apply here.|
|limit|query|integer|false|The maximum number of returned results per page. The default value is 25 and the maximum value is 500. The GatewayResponses collection does not support pagination and the limit does not apply here.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "position": "string",
  "items": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getgatewayresponses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GatewayResponses](#schemagatewayresponses)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetModelTemplate

<a id="opIdGetModelTemplate"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/models/string/default_template \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /restapis/{restapi_id}/models/{model_name}/default_template`

Generates a sample mapping template that can be used to transform a payload into the structure of a model.

<h3 id="getmodeltemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|model_name|path|string|true|The name of the model for which to generate a template.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "value": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getmodeltemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Template](#schematemplate)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResources

<a id="opIdGetResources"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/resources \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /restapis/{restapi_id}/resources`

Lists information about a collection of Resource resources.

<h3 id="getresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|position|query|string|false|The current pagination position in the paged result set.|
|limit|query|integer|false|The maximum number of returned results per page. The default value is 25 and the maximum value is 500.|
|embed|query|[[String](#schemastring)]|false|A query parameter used to retrieve the specified resources embedded in the returned Resources resource in the response. This <code>embed</code> parameter value is a list of comma-separated strings. Currently, the request supports only retrieval of the embedded Method resources this way. The query parameter value must be a single-valued list and contain the <code>"methods"</code> string. For example, <code>GET /restapis/{restapi_id}/resources?embed=methods</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "position": "string",
  "items": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Resources](#schemaresources)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSdk

<a id="opIdGetSdk"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/restapis/string/stages/string/sdks/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /restapis/{restapi_id}/stages/{stage_name}/sdks/{sdk_type}`

Generates a client SDK for a RestApi and Stage.

<h3 id="getsdk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restapi_id|path|string|true|The string identifier of the associated RestApi.|
|stage_name|path|string|true|The name of the Stage that the SDK will use.|
|sdk_type|path|string|true|The language for the generated SDK. Currently <code>java</code>, <code>javascript</code>, <code>android</code>, <code>objectivec</code> (for iOS), <code>swift</code> (for iOS), and <code>ruby</code> are supported.|
|parameters|query|object|false|A string-to-string key-value map of query parameters <code>sdkType</code>-dependent properties of the SDK. For <code>sdkType</code> of <code>objectivec</code> or <code>swift</code>, a parameter named <code>classPrefix</code> is required. For <code>sdkType</code> of <code>android</code>, parameters named <code>groupId</code>, <code>artifactId</code>, <code>artifactVersion</code>, and <code>invokerPackage</code> are required. For <code>sdkType</code> of <code>java</code>, parameters named <code>serviceName</code> and <code>javaPackageName</code> are required. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "body": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="getsdk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SdkResponse](#schemasdkresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSdkType

<a id="opIdGetSdkType"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/sdktypes/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /sdktypes/{sdktype_id}`

Gets an SDK type.

<h3 id="getsdktype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sdktype_id|path|string|true|The identifier of the queried SdkType instance.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": {},
  "friendlyName": {},
  "description": {},
  "configurationProperties": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getsdktype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SdkType](#schemasdktype)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSdkTypes

<a id="opIdGetSdkTypes"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/sdktypes \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /sdktypes`

Gets SDK types

<h3 id="getsdktypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|position|query|string|false|The current pagination position in the paged result set.|
|limit|query|integer|false|The maximum number of returned results per page. The default value is 25 and the maximum value is 500.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "position": "string",
  "items": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getsdktypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SdkTypes](#schemasdktypes)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetTags

<a id="opIdGetTags"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resource_arn}`

Gets the Tags collection for a given resource.

<h3 id="gettags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource_arn|path|string|true|The ARN of a resource that can be tagged.|
|position|query|string|false|(Not currently supported) The current pagination position in the paged result set.|
|limit|query|integer|false|(Not currently supported) The maximum number of returned results per page. The default value is 25 and the maximum value is 500.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="gettags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Tags](#schematags)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/tags/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PUT /tags/{resource_arn}`

Adds or updates a tag on a given resource.

> Body parameter

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="tagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource_arn|path|string|true|The ARN of a resource that can be tagged.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|true|The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetUsage

<a id="opIdGetUsage"></a>

> Code samples

```bash
curl 'https://apigateway.us-east-1.amazonaws.com/usageplans/string/usage#startDate&endDate?startDate=string&endDate=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /usageplans/{usageplanId}/usage#startDate&endDate`

Gets the usage data of a usage plan in a specified time interval.

<h3 id="getusage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|usageplanId|path|string|true|The Id of the usage plan associated with the usage data.|
|keyId|query|string|false|The Id of the API key associated with the resultant usage data.|
|startDate|query|string|true|The starting date (e.g., 2016-01-01) of the usage data.|
|endDate|query|string|true|The ending date (e.g., 2016-12-31) of the usage data.|
|position|query|string|false|The current pagination position in the paged result set.|
|limit|query|integer|false|The maximum number of returned results per page. The default value is 25 and the maximum value is 500.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "usagePlanId": {},
  "startDate": {},
  "endDate": {},
  "position": "string",
  "items": {
    "property1": [
      [
        0
      ]
    ],
    "property2": [
      [
        0
      ]
    ]
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getusage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Usage](#schemausage)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ImportApiKeys

<a id="opIdImportApiKeys"></a>

> Code samples

```bash
curl 'https://apigateway.us-east-1.amazonaws.com/apikeys#mode=import&format?format=csv&mode=import' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "body": "string"
  }'
```

`POST /apikeys#mode=import&format`

Import API keys from an external source, such as a CSV-formatted file.

> Body parameter

```json
{
  "body": "string"
}
```

<h3 id="importapikeys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|true|A query parameter to specify the input format to imported API keys. Currently, only the <code>csv</code> format is supported.|
|failonwarnings|query|boolean|false|A query parameter to indicate whether to rollback ApiKey importation (<code>true</code>) or not (<code>false</code>) when error is encountered.|
|mode|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» body|body|string|true|The payload of the POST request to import API keys. For the payload format, see API Key File Format.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|csv|
|mode|import|

> Example responses

> 201 Response

```json
{
  "ids": {},
  "warnings": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="importapikeys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[ApiKeyIds](#schemaapikeyids)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ImportRestApi

<a id="opIdImportRestApi"></a>

> Code samples

```bash
curl 'https://apigateway.us-east-1.amazonaws.com/restapis#mode=import?mode=import' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "body": "string"
  }'
```

`POST /restapis#mode=import`

A feature of the API Gateway control service for creating a new API from an external API definition file.

> Body parameter

```json
{
  "body": "string"
}
```

<h3 id="importrestapi-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|failonwarnings|query|boolean|false|A query parameter to indicate whether to rollback the API creation (<code>true</code>) or not (<code>false</code>) when a warning is encountered. The default value is <code>false</code>.|
|parameters|query|object|false|<p>A key-value map of context-specific query string parameters specifying the behavior of different API importing operations. The following shows operation-specific parameters and their supported values.</p> <p> To exclude DocumentationParts from the import, set <code>parameters</code> as <code>ignore=documentation</code>.</p> <p> To configure the endpoint type, set <code>parameters</code> as <code>endpointConfigurationTypes=EDGE</code>, <code>endpointConfigurationTypes=REGIONAL</code>, or <code>endpointConfigurationTypes=PRIVATE</code>. The default endpoint type is <code>EDGE</code>.</p> <p> To handle imported <code>basepath</code>, set <code>parameters</code> as <code>basepath=ignore</code>, <code>basepath=prepend</code> or <code>basepath=split</code>.</p> <p>For example, the AWS CLI command to exclude documentation from the imported API is:</p> <p>The AWS CLI command to set the regional endpoint on the imported API is:</p>|
|mode|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» body|body|string|true|The POST request body containing external API definitions. Currently, only OpenAPI definition JSON/YAML files are supported. The maximum size of the API definition file is 6MB.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|mode|import|

> Example responses

> 201 Response

```json
{
  "id": {},
  "name": {},
  "description": {},
  "createdDate": {},
  "version": {},
  "warnings": {},
  "binaryMediaTypes": {},
  "minimumCompressionSize": {},
  "apiKeySource": {},
  "endpointConfiguration": {
    "types": {},
    "vpcEndpointIds": {}
  },
  "policy": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "disableExecuteApiEndpoint": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="importrestapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[RestApi](#schemarestapi)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://apigateway.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resource_arn}#tagKeys`

Removes a tag from a given resource.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource_arn|path|string|true|The ARN of a resource that can be tagged.|
|tagKeys|query|[[String](#schemastring)]|true|The Tag keys to delete.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateUsage

<a id="opIdUpdateUsage"></a>

> Code samples

```bash
curl https://apigateway.us-east-1.amazonaws.com/usageplans/string/keys/string/usage \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "patchOperations": [
      {
        "op": {},
        "path": {},
        "value": {},
        "from": {}
      }
    ]
  }'
```

`PATCH /usageplans/{usageplanId}/keys/{keyId}/usage`

Grants a temporary extension to the remaining quota of a usage plan associated with a specified API key.

> Body parameter

```json
{
  "patchOperations": [
    {
      "op": {},
      "path": {},
      "value": {},
      "from": {}
    }
  ]
}
```

<h3 id="updateusage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|usageplanId|path|string|true|The Id of the usage plan associated with the usage data.|
|keyId|path|string|true|The identifier of the API key associated with the usage plan in which a temporary extension is granted to the remaining quota.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» patchOperations|body|[[PatchOperation](#schemapatchoperation)]|false|A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.|

> Example responses

> 200 Response

```json
{
  "usagePlanId": {},
  "startDate": {},
  "endDate": {},
  "position": "string",
  "items": {
    "property1": [
      [
        0
      ]
    ],
    "property2": [
      [
        0
      ]
    ]
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="updateusage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Usage](#schemausage)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_ApiKey">ApiKey</h2>
<!-- backwards compatibility -->
<a id="schemaapikey"></a>
<a id="schema_ApiKey"></a>
<a id="tocSapikey"></a>
<a id="tocsapikey"></a>

```json
{
  "id": {},
  "value": {},
  "name": {},
  "customerId": {},
  "description": {},
  "enabled": {},
  "createdDate": {},
  "lastUpdatedDate": {},
  "stageKeys": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

A resource that can be distributed to callers for executing Method resources that require an API key. API keys can be mapped to any Stage on any RestApi, which indicates that the callers with the API key can make requests to that stage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|value|object|false|none|none|
|name|object|false|none|none|
|customerId|object|false|none|none|
|description|object|false|none|none|
|enabled|object|false|none|none|
|createdDate|object|false|none|none|
|lastUpdatedDate|object|false|none|none|
|stageKeys|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_StageKey">StageKey</h2>
<!-- backwards compatibility -->
<a id="schemastagekey"></a>
<a id="schema_StageKey"></a>
<a id="tocSstagekey"></a>
<a id="tocsstagekey"></a>

```json
{
  "restApiId": {},
  "stageName": {}
}
```

A reference to a unique stage identified in the format <code>{restApiId}/{stage}</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|restApiId|object|false|none|none|
|stageName|object|false|none|none|

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_BadRequestException">BadRequestException</h2>
<!-- backwards compatibility -->
<a id="schemabadrequestexception"></a>
<a id="schema_BadRequestException"></a>
<a id="tocSbadrequestexception"></a>
<a id="tocsbadrequestexception"></a>

```json
null
```

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

```json
null
```

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_NotFoundException">NotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemanotfoundexception"></a>
<a id="schema_NotFoundException"></a>
<a id="tocSnotfoundexception"></a>
<a id="tocsnotfoundexception"></a>

```json
null
```

<h2 id="tocS_UnauthorizedException">UnauthorizedException</h2>
<!-- backwards compatibility -->
<a id="schemaunauthorizedexception"></a>
<a id="schema_UnauthorizedException"></a>
<a id="tocSunauthorizedexception"></a>
<a id="tocsunauthorizedexception"></a>

```json
null
```

<h2 id="tocS_TooManyRequestsException">TooManyRequestsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanyrequestsexception"></a>
<a id="schema_TooManyRequestsException"></a>
<a id="tocStoomanyrequestsexception"></a>
<a id="tocstoomanyrequestsexception"></a>

```json
null
```

<h2 id="tocS_Authorizer">Authorizer</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizer"></a>
<a id="schema_Authorizer"></a>
<a id="tocSauthorizer"></a>
<a id="tocsauthorizer"></a>

```json
{
  "id": {},
  "name": {},
  "type": {},
  "providerARNs": {},
  "authType": {},
  "authorizerUri": {},
  "authorizerCredentials": {},
  "identitySource": {},
  "identityValidationExpression": {},
  "authorizerResultTtlInSeconds": {}
}
```

Represents an authorization layer for methods. If enabled on a method, API Gateway will activate the authorizer when a client calls the method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|name|object|false|none|none|
|type|object|false|none|none|
|providerARNs|object|false|none|none|
|authType|object|false|none|none|
|authorizerUri|object|false|none|none|
|authorizerCredentials|object|false|none|none|
|identitySource|object|false|none|none|
|identityValidationExpression|object|false|none|none|
|authorizerResultTtlInSeconds|object|false|none|none|

<h2 id="tocS_ProviderARN">ProviderARN</h2>
<!-- backwards compatibility -->
<a id="schemaproviderarn"></a>
<a id="schema_ProviderARN"></a>
<a id="tocSproviderarn"></a>
<a id="tocsproviderarn"></a>

```json
"string"
```

<h2 id="tocS_BasePathMapping">BasePathMapping</h2>
<!-- backwards compatibility -->
<a id="schemabasepathmapping"></a>
<a id="schema_BasePathMapping"></a>
<a id="tocSbasepathmapping"></a>
<a id="tocsbasepathmapping"></a>

```json
{
  "basePath": {},
  "restApiId": {},
  "stage": {}
}
```

Represents the base path that callers of the API must provide as part of the URL after the domain name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basePath|object|false|none|none|
|restApiId|object|false|none|none|
|stage|object|false|none|none|

<h2 id="tocS_Deployment">Deployment</h2>
<!-- backwards compatibility -->
<a id="schemadeployment"></a>
<a id="schema_Deployment"></a>
<a id="tocSdeployment"></a>
<a id="tocsdeployment"></a>

```json
{
  "id": {},
  "description": {},
  "createdDate": {},
  "apiSummary": {
    "property1": {
      "property1": {
        "authorizationType": {},
        "apiKeyRequired": {}
      },
      "property2": {
        "authorizationType": {},
        "apiKeyRequired": {}
      }
    },
    "property2": {
      "property1": {
        "authorizationType": {},
        "apiKeyRequired": {}
      },
      "property2": {
        "authorizationType": {},
        "apiKeyRequired": {}
      }
    }
  }
}
```

An immutable representation of a RestApi resource that can be called by users using Stages. A deployment must be associated with a Stage for it to be callable over the Internet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|description|object|false|none|none|
|createdDate|object|false|none|none|
|apiSummary|object|false|none|none|

<h2 id="tocS_Double">Double</h2>
<!-- backwards compatibility -->
<a id="schemadouble"></a>
<a id="schema_Double"></a>
<a id="tocSdouble"></a>
<a id="tocsdouble"></a>

```json
0
```

<h2 id="tocS_MapOfStringToString">MapOfStringToString</h2>
<!-- backwards compatibility -->
<a id="schemamapofstringtostring"></a>
<a id="schema_MapOfStringToString"></a>
<a id="tocSmapofstringtostring"></a>
<a id="tocsmapofstringtostring"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[String](#schemastring)|false|none|none|

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_ServiceUnavailableException">ServiceUnavailableException</h2>
<!-- backwards compatibility -->
<a id="schemaserviceunavailableexception"></a>
<a id="schema_ServiceUnavailableException"></a>
<a id="tocSserviceunavailableexception"></a>
<a id="tocsserviceunavailableexception"></a>

```json
null
```

<h2 id="tocS_DocumentationPart">DocumentationPart</h2>
<!-- backwards compatibility -->
<a id="schemadocumentationpart"></a>
<a id="schema_DocumentationPart"></a>
<a id="tocSdocumentationpart"></a>
<a id="tocsdocumentationpart"></a>

```json
{
  "id": {},
  "location": {
    "type": {},
    "path": {},
    "method": {},
    "statusCode": {},
    "name": {}
  },
  "properties": null
}
```

A documentation part for a targeted API entity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|location|object|false|none|none|
|properties|object|false|none|A content map of API-specific key-value pairs describing the targeted API entity. The map must be encoded as a JSON string, e.g., <code>"{ \"description\": \"The API does ...\" }"</code>. Only OpenAPI-compliant documentation-related fields from the properties map are exported and, hence, published as part of the API entity definitions, while the original documentation parts are exported in a OpenAPI extension of <code>x-amazon-apigateway-documentation</code>.|

<h2 id="tocS_DocumentationPartType">DocumentationPartType</h2>
<!-- backwards compatibility -->
<a id="schemadocumentationparttype"></a>
<a id="schema_DocumentationPartType"></a>
<a id="tocSdocumentationparttype"></a>
<a id="tocsdocumentationparttype"></a>

```json
"API"
```

<h2 id="tocS_DocumentationPartLocationStatusCode">DocumentationPartLocationStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemadocumentationpartlocationstatuscode"></a>
<a id="schema_DocumentationPartLocationStatusCode"></a>
<a id="tocSdocumentationpartlocationstatuscode"></a>
<a id="tocsdocumentationpartlocationstatuscode"></a>

```json
"string"
```

<h2 id="tocS_DocumentationVersion">DocumentationVersion</h2>
<!-- backwards compatibility -->
<a id="schemadocumentationversion"></a>
<a id="schema_DocumentationVersion"></a>
<a id="tocSdocumentationversion"></a>
<a id="tocsdocumentationversion"></a>

```json
{
  "version": {},
  "createdDate": {},
  "description": {}
}
```

A snapshot of the documentation of an API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|object|false|none|none|
|createdDate|object|false|none|none|
|description|object|false|none|none|

<h2 id="tocS_DomainName">DomainName</h2>
<!-- backwards compatibility -->
<a id="schemadomainname"></a>
<a id="schema_DomainName"></a>
<a id="tocSdomainname"></a>
<a id="tocsdomainname"></a>

```json
{
  "domainName": {},
  "certificateName": {},
  "certificateArn": {},
  "certificateUploadDate": {},
  "regionalDomainName": {},
  "regionalHostedZoneId": {},
  "regionalCertificateName": {},
  "regionalCertificateArn": {},
  "distributionDomainName": {},
  "distributionHostedZoneId": {},
  "endpointConfiguration": {
    "types": {},
    "vpcEndpointIds": {}
  },
  "domainNameStatus": {},
  "domainNameStatusMessage": {},
  "securityPolicy": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "mutualTlsAuthentication": {
    "truststoreUri": {},
    "truststoreVersion": {},
    "truststoreWarnings": {}
  },
  "ownershipVerificationCertificateArn": {}
}
```

Represents a custom domain name as a user-friendly host name of an API (RestApi).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainName|object|false|none|none|
|certificateName|object|false|none|none|
|certificateArn|object|false|none|none|
|certificateUploadDate|object|false|none|none|
|regionalDomainName|object|false|none|none|
|regionalHostedZoneId|object|false|none|none|
|regionalCertificateName|object|false|none|none|
|regionalCertificateArn|object|false|none|none|
|distributionDomainName|object|false|none|none|
|distributionHostedZoneId|object|false|none|none|
|endpointConfiguration|object|false|none|none|
|domainNameStatus|object|false|none|none|
|domainNameStatusMessage|object|false|none|none|
|securityPolicy|object|false|none|none|
|tags|object|false|none|none|
|mutualTlsAuthentication|object|false|none|none|
|ownershipVerificationCertificateArn|object|false|none|none|

<h2 id="tocS_ListOfEndpointType">ListOfEndpointType</h2>
<!-- backwards compatibility -->
<a id="schemalistofendpointtype"></a>
<a id="schema_ListOfEndpointType"></a>
<a id="tocSlistofendpointtype"></a>
<a id="tocslistofendpointtype"></a>

```json
[
  "REGIONAL"
]
```

<h2 id="tocS_ListOfString">ListOfString</h2>
<!-- backwards compatibility -->
<a id="schemalistofstring"></a>
<a id="schema_ListOfString"></a>
<a id="tocSlistofstring"></a>
<a id="tocslistofstring"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Model">Model</h2>
<!-- backwards compatibility -->
<a id="schemamodel"></a>
<a id="schema_Model"></a>
<a id="tocSmodel"></a>
<a id="tocsmodel"></a>

```json
{
  "id": {},
  "name": {},
  "description": {},
  "schema": {},
  "contentType": {}
}
```

Represents the data structure of a method's request or response payload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|name|object|false|none|none|
|description|object|false|none|none|
|schema|object|false|none|none|
|contentType|object|false|none|none|

<h2 id="tocS_RequestValidator">RequestValidator</h2>
<!-- backwards compatibility -->
<a id="schemarequestvalidator"></a>
<a id="schema_RequestValidator"></a>
<a id="tocSrequestvalidator"></a>
<a id="tocsrequestvalidator"></a>

```json
{
  "id": {},
  "name": {},
  "validateRequestBody": {},
  "validateRequestParameters": {}
}
```

A set of validation rules for incoming Method requests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|name|object|false|none|none|
|validateRequestBody|object|false|none|none|
|validateRequestParameters|object|false|none|none|

<h2 id="tocS_Resource">Resource</h2>
<!-- backwards compatibility -->
<a id="schemaresource"></a>
<a id="schema_Resource"></a>
<a id="tocSresource"></a>
<a id="tocsresource"></a>

```json
{
  "id": {},
  "parentId": {},
  "pathPart": {},
  "path": {},
  "resourceMethods": {
    "property1": {
      "httpMethod": {},
      "authorizationType": {},
      "authorizerId": {},
      "apiKeyRequired": {},
      "requestValidatorId": {},
      "operationName": {},
      "requestParameters": {
        "property1": true,
        "property2": true
      },
      "requestModels": {
        "property1": "string",
        "property2": "string"
      },
      "methodResponses": {
        "property1": {
          "statusCode": {},
          "responseParameters": {
            "property1": true,
            "property2": true
          },
          "responseModels": {
            "property1": "string",
            "property2": "string"
          }
        },
        "property2": {
          "statusCode": {},
          "responseParameters": {
            "property1": true,
            "property2": true
          },
          "responseModels": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "methodIntegration": {
        "type": {},
        "httpMethod": {},
        "uri": {},
        "connectionType": {},
        "connectionId": {},
        "credentials": {},
        "requestParameters": {
          "property1": "string",
          "property2": "string"
        },
        "requestTemplates": {
          "property1": "string",
          "property2": "string"
        },
        "passthroughBehavior": {},
        "contentHandling": {},
        "timeoutInMillis": {},
        "cacheNamespace": {},
        "cacheKeyParameters": {},
        "integrationResponses": {
          "property1": {
            "statusCode": {},
            "selectionPattern": {},
            "responseParameters": {
              "property1": "string",
              "property2": "string"
            },
            "responseTemplates": {
              "property1": "string",
              "property2": "string"
            },
            "contentHandling": {}
          },
          "property2": {
            "statusCode": {},
            "selectionPattern": {},
            "responseParameters": {
              "property1": "string",
              "property2": "string"
            },
            "responseTemplates": {
              "property1": "string",
              "property2": "string"
            },
            "contentHandling": {}
          }
        },
        "tlsConfig": {
          "insecureSkipVerification": {}
        }
      },
      "authorizationScopes": {}
    },
    "property2": {
      "httpMethod": {},
      "authorizationType": {},
      "authorizerId": {},
      "apiKeyRequired": {},
      "requestValidatorId": {},
      "operationName": {},
      "requestParameters": {
        "property1": true,
        "property2": true
      },
      "requestModels": {
        "property1": "string",
        "property2": "string"
      },
      "methodResponses": {
        "property1": {
          "statusCode": {},
          "responseParameters": {
            "property1": true,
            "property2": true
          },
          "responseModels": {
            "property1": "string",
            "property2": "string"
          }
        },
        "property2": {
          "statusCode": {},
          "responseParameters": {
            "property1": true,
            "property2": true
          },
          "responseModels": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "methodIntegration": {
        "type": {},
        "httpMethod": {},
        "uri": {},
        "connectionType": {},
        "connectionId": {},
        "credentials": {},
        "requestParameters": {
          "property1": "string",
          "property2": "string"
        },
        "requestTemplates": {
          "property1": "string",
          "property2": "string"
        },
        "passthroughBehavior": {},
        "contentHandling": {},
        "timeoutInMillis": {},
        "cacheNamespace": {},
        "cacheKeyParameters": {},
        "integrationResponses": {
          "property1": {
            "statusCode": {},
            "selectionPattern": {},
            "responseParameters": {
              "property1": "string",
              "property2": "string"
            },
            "responseTemplates": {
              "property1": "string",
              "property2": "string"
            },
            "contentHandling": {}
          },
          "property2": {
            "statusCode": {},
            "selectionPattern": {},
            "responseParameters": {
              "property1": "string",
              "property2": "string"
            },
            "responseTemplates": {
              "property1": "string",
              "property2": "string"
            },
            "contentHandling": {}
          }
        },
        "tlsConfig": {
          "insecureSkipVerification": {}
        }
      },
      "authorizationScopes": {}
    }
  }
}
```

Represents an API resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|parentId|object|false|none|none|
|pathPart|object|false|none|none|
|path|object|false|none|none|
|resourceMethods|object|false|none|none|

<h2 id="tocS_RestApi">RestApi</h2>
<!-- backwards compatibility -->
<a id="schemarestapi"></a>
<a id="schema_RestApi"></a>
<a id="tocSrestapi"></a>
<a id="tocsrestapi"></a>

```json
{
  "id": {},
  "name": {},
  "description": {},
  "createdDate": {},
  "version": {},
  "warnings": {},
  "binaryMediaTypes": {},
  "minimumCompressionSize": {},
  "apiKeySource": {},
  "endpointConfiguration": {
    "types": {},
    "vpcEndpointIds": {}
  },
  "policy": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "disableExecuteApiEndpoint": {}
}
```

Represents a REST API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|name|object|false|none|none|
|description|object|false|none|none|
|createdDate|object|false|none|none|
|version|object|false|none|none|
|warnings|object|false|none|none|
|binaryMediaTypes|object|false|none|none|
|minimumCompressionSize|object|false|none|none|
|apiKeySource|object|false|none|none|
|endpointConfiguration|object|false|none|none|
|policy|object|false|none|none|
|tags|object|false|none|none|
|disableExecuteApiEndpoint|object|false|none|none|

<h2 id="tocS_Stage">Stage</h2>
<!-- backwards compatibility -->
<a id="schemastage"></a>
<a id="schema_Stage"></a>
<a id="tocSstage"></a>
<a id="tocsstage"></a>

```json
{
  "deploymentId": {},
  "clientCertificateId": {},
  "stageName": {},
  "description": {},
  "cacheClusterEnabled": {},
  "cacheClusterSize": {},
  "cacheClusterStatus": {},
  "methodSettings": {
    "property1": {
      "metricsEnabled": {},
      "loggingLevel": {},
      "dataTraceEnabled": {},
      "throttlingBurstLimit": {},
      "throttlingRateLimit": {},
      "cachingEnabled": {},
      "cacheTtlInSeconds": {},
      "cacheDataEncrypted": {},
      "requireAuthorizationForCacheControl": {},
      "unauthorizedCacheControlHeaderStrategy": {}
    },
    "property2": {
      "metricsEnabled": {},
      "loggingLevel": {},
      "dataTraceEnabled": {},
      "throttlingBurstLimit": {},
      "throttlingRateLimit": {},
      "cachingEnabled": {},
      "cacheTtlInSeconds": {},
      "cacheDataEncrypted": {},
      "requireAuthorizationForCacheControl": {},
      "unauthorizedCacheControlHeaderStrategy": {}
    }
  },
  "variables": {
    "property1": "string",
    "property2": "string"
  },
  "documentationVersion": {},
  "accessLogSettings": {
    "format": {},
    "destinationArn": {}
  },
  "canarySettings": {
    "percentTraffic": {},
    "deploymentId": {},
    "stageVariableOverrides": {
      "property1": "string",
      "property2": "string"
    },
    "useStageCache": {}
  },
  "tracingEnabled": {},
  "webAclArn": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "createdDate": {},
  "lastUpdatedDate": {}
}
```

Represents a unique identifier for a version of a deployed RestApi that is callable by users.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentId|object|false|none|none|
|clientCertificateId|object|false|none|none|
|stageName|object|false|none|none|
|description|object|false|none|none|
|cacheClusterEnabled|object|false|none|none|
|cacheClusterSize|object|false|none|none|
|cacheClusterStatus|object|false|none|none|
|methodSettings|object|false|none|none|
|variables|object|false|none|none|
|documentationVersion|object|false|none|none|
|accessLogSettings|object|false|none|none|
|canarySettings|object|false|none|none|
|tracingEnabled|object|false|none|none|
|webAclArn|object|false|none|none|
|tags|object|false|none|none|
|createdDate|object|false|none|none|
|lastUpdatedDate|object|false|none|none|

<h2 id="tocS_UsagePlan">UsagePlan</h2>
<!-- backwards compatibility -->
<a id="schemausageplan"></a>
<a id="schema_UsagePlan"></a>
<a id="tocSusageplan"></a>
<a id="tocsusageplan"></a>

```json
{
  "id": {},
  "name": {},
  "description": {},
  "apiStages": {},
  "throttle": {
    "burstLimit": {},
    "rateLimit": {}
  },
  "quota": {
    "limit": {},
    "offset": {},
    "period": {}
  },
  "productCode": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Represents a usage plan used to specify who can assess associated API stages. Optionally, target request rate and quota limits can be set. In some cases clients can exceed the targets that you set. Don’t rely on usage plans to control costs. Consider using <a href="https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html">Amazon Web Services Budgets</a> to monitor costs and <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">WAF</a> to manage API requests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|name|object|false|none|none|
|description|object|false|none|none|
|apiStages|object|false|none|none|
|throttle|object|false|none|none|
|quota|object|false|none|none|
|productCode|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_ApiStage">ApiStage</h2>
<!-- backwards compatibility -->
<a id="schemaapistage"></a>
<a id="schema_ApiStage"></a>
<a id="tocSapistage"></a>
<a id="tocsapistage"></a>

```json
{
  "apiId": {},
  "stage": {},
  "throttle": {
    "property1": {
      "burstLimit": {},
      "rateLimit": {}
    },
    "property2": {
      "burstLimit": {},
      "rateLimit": {}
    }
  }
}
```

API stage name of the associated API stage in a usage plan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiId|object|false|none|none|
|stage|object|false|none|none|
|throttle|object|false|none|none|

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_QuotaPeriodType">QuotaPeriodType</h2>
<!-- backwards compatibility -->
<a id="schemaquotaperiodtype"></a>
<a id="schema_QuotaPeriodType"></a>
<a id="tocSquotaperiodtype"></a>
<a id="tocsquotaperiodtype"></a>

```json
"DAY"
```

<h2 id="tocS_UsagePlanKey">UsagePlanKey</h2>
<!-- backwards compatibility -->
<a id="schemausageplankey"></a>
<a id="schema_UsagePlanKey"></a>
<a id="tocSusageplankey"></a>
<a id="tocsusageplankey"></a>

```json
{
  "id": {},
  "type": {},
  "value": {},
  "name": {}
}
```

Represents a usage plan key to identify a plan customer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|type|object|false|none|none|
|value|object|false|none|none|
|name|object|false|none|none|

<h2 id="tocS_VpcLink">VpcLink</h2>
<!-- backwards compatibility -->
<a id="schemavpclink"></a>
<a id="schema_VpcLink"></a>
<a id="tocSvpclink"></a>
<a id="tocsvpclink"></a>

```json
{
  "id": {},
  "name": {},
  "description": {},
  "targetArns": {},
  "status": {},
  "statusMessage": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

An API Gateway VPC link for a RestApi to access resources in an Amazon Virtual Private Cloud (VPC).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|name|object|false|none|none|
|description|object|false|none|none|
|targetArns|object|false|none|none|
|status|object|false|none|none|
|statusMessage|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_ClientCertificate">ClientCertificate</h2>
<!-- backwards compatibility -->
<a id="schemaclientcertificate"></a>
<a id="schema_ClientCertificate"></a>
<a id="tocSclientcertificate"></a>
<a id="tocsclientcertificate"></a>

```json
{
  "clientCertificateId": {},
  "description": {},
  "pemEncodedCertificate": {},
  "createdDate": {},
  "expirationDate": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Represents a client certificate used to configure client-side SSL authentication while sending requests to the integration endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientCertificateId|object|false|none|none|
|description|object|false|none|none|
|pemEncodedCertificate|object|false|none|none|
|createdDate|object|false|none|none|
|expirationDate|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_Account">Account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_Account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "cloudwatchRoleArn": {},
  "throttleSettings": {
    "burstLimit": {},
    "rateLimit": {}
  },
  "features": {},
  "apiKeyVersion": {}
}
```

Represents an AWS account that is associated with API Gateway.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudwatchRoleArn|object|false|none|none|
|throttleSettings|object|false|none|none|
|features|object|false|none|none|
|apiKeyVersion|object|false|none|none|

<h2 id="tocS_ApiKeys">ApiKeys</h2>
<!-- backwards compatibility -->
<a id="schemaapikeys"></a>
<a id="schema_ApiKeys"></a>
<a id="tocSapikeys"></a>
<a id="tocsapikeys"></a>

```json
{
  "warnings": {},
  "position": "string",
  "items": {}
}
```

Represents a collection of API keys as represented by an ApiKeys resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|warnings|object|false|none|none|
|position|[String](#schemastring)|false|none|none|
|items|object|false|none|none|

<h2 id="tocS_Authorizers">Authorizers</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizers"></a>
<a id="schema_Authorizers"></a>
<a id="tocSauthorizers"></a>
<a id="tocsauthorizers"></a>

```json
{
  "position": "string",
  "items": {}
}
```

Represents a collection of Authorizer resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|position|[String](#schemastring)|false|none|none|
|items|object|false|none|none|

<h2 id="tocS_BasePathMappings">BasePathMappings</h2>
<!-- backwards compatibility -->
<a id="schemabasepathmappings"></a>
<a id="schema_BasePathMappings"></a>
<a id="tocSbasepathmappings"></a>
<a id="tocsbasepathmappings"></a>

```json
{
  "position": "string",
  "items": {}
}
```

Represents a collection of BasePathMapping resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|position|[String](#schemastring)|false|none|none|
|items|object|false|none|none|

<h2 id="tocS_ClientCertificates">ClientCertificates</h2>
<!-- backwards compatibility -->
<a id="schemaclientcertificates"></a>
<a id="schema_ClientCertificates"></a>
<a id="tocSclientcertificates"></a>
<a id="tocsclientcertificates"></a>

```json
{
  "position": "string",
  "items": {}
}
```

Represents a collection of ClientCertificate resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|position|[String](#schemastring)|false|none|none|
|items|object|false|none|none|

<h2 id="tocS_Deployments">Deployments</h2>
<!-- backwards compatibility -->
<a id="schemadeployments"></a>
<a id="schema_Deployments"></a>
<a id="tocSdeployments"></a>
<a id="tocsdeployments"></a>

```json
{
  "position": "string",
  "items": {}
}
```

Represents a collection resource that contains zero or more references to your existing deployments, and links that guide you on how to interact with your collection. The collection offers a paginated view of the contained deployments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|position|[String](#schemastring)|false|none|none|
|items|object|false|none|none|

<h2 id="tocS_DocumentationParts">DocumentationParts</h2>
<!-- backwards compatibility -->
<a id="schemadocumentationparts"></a>
<a id="schema_DocumentationParts"></a>
<a id="tocSdocumentationparts"></a>
<a id="tocsdocumentationparts"></a>

```json
{
  "position": "string",
  "items": {}
}
```

The collection of documentation parts of an API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|position|[String](#schemastring)|false|none|none|
|items|object|false|none|none|

<h2 id="tocS_DocumentationVersions">DocumentationVersions</h2>
<!-- backwards compatibility -->
<a id="schemadocumentationversions"></a>
<a id="schema_DocumentationVersions"></a>
<a id="tocSdocumentationversions"></a>
<a id="tocsdocumentationversions"></a>

```json
{
  "position": "string",
  "items": {}
}
```

The collection of documentation snapshots of an API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|position|[String](#schemastring)|false|none|none|
|items|object|false|none|none|

<h2 id="tocS_DomainNames">DomainNames</h2>
<!-- backwards compatibility -->
<a id="schemadomainnames"></a>
<a id="schema_DomainNames"></a>
<a id="tocSdomainnames"></a>
<a id="tocsdomainnames"></a>

```json
{
  "position": "string",
  "items": {}
}
```

Represents a collection of DomainName resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|position|[String](#schemastring)|false|none|none|
|items|object|false|none|none|

<h2 id="tocS_ExportResponse">ExportResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexportresponse"></a>
<a id="schema_ExportResponse"></a>
<a id="tocSexportresponse"></a>
<a id="tocsexportresponse"></a>

```json
{
  "body": {}
}
```

The binary blob response to GetExport, which contains the generated SDK.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|object|false|none|none|

<h2 id="tocS_GatewayResponse">GatewayResponse</h2>
<!-- backwards compatibility -->
<a id="schemagatewayresponse"></a>
<a id="schema_GatewayResponse"></a>
<a id="tocSgatewayresponse"></a>
<a id="tocsgatewayresponse"></a>

```json
{
  "responseType": {},
  "statusCode": {},
  "responseParameters": {
    "property1": "string",
    "property2": "string"
  },
  "responseTemplates": {
    "property1": "string",
    "property2": "string"
  },
  "defaultResponse": {}
}
```

A gateway response of a given response type and status code, with optional response parameters and mapping templates.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|responseType|object|false|none|none|
|statusCode|object|false|none|none|
|responseParameters|object|false|none|none|
|responseTemplates|object|false|none|none|
|defaultResponse|object|false|none|none|

<h2 id="tocS_GatewayResponses">GatewayResponses</h2>
<!-- backwards compatibility -->
<a id="schemagatewayresponses"></a>
<a id="schema_GatewayResponses"></a>
<a id="tocSgatewayresponses"></a>
<a id="tocsgatewayresponses"></a>

```json
{
  "position": "string",
  "items": {}
}
```

The collection of the GatewayResponse instances of a RestApi as a <code>responseType</code>-to-GatewayResponse object map of key-value pairs. As such, pagination is not supported for querying this collection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|position|[String](#schemastring)|false|none|none|
|items|object|false|none|none|

<h2 id="tocS_Integration">Integration</h2>
<!-- backwards compatibility -->
<a id="schemaintegration"></a>
<a id="schema_Integration"></a>
<a id="tocSintegration"></a>
<a id="tocsintegration"></a>

```json
{
  "type": {},
  "httpMethod": {},
  "uri": {},
  "connectionType": {},
  "connectionId": {},
  "credentials": {},
  "requestParameters": {
    "property1": "string",
    "property2": "string"
  },
  "requestTemplates": {
    "property1": "string",
    "property2": "string"
  },
  "passthroughBehavior": {},
  "contentHandling": {},
  "timeoutInMillis": {},
  "cacheNamespace": {},
  "cacheKeyParameters": {},
  "integrationResponses": {
    "property1": {
      "statusCode": {},
      "selectionPattern": {},
      "responseParameters": {
        "property1": "string",
        "property2": "string"
      },
      "responseTemplates": {
        "property1": "string",
        "property2": "string"
      },
      "contentHandling": {}
    },
    "property2": {
      "statusCode": {},
      "selectionPattern": {},
      "responseParameters": {
        "property1": "string",
        "property2": "string"
      },
      "responseTemplates": {
        "property1": "string",
        "property2": "string"
      },
      "contentHandling": {}
    }
  },
  "tlsConfig": {
    "insecureSkipVerification": {}
  }
}
```

Represents an HTTP, HTTP_PROXY, AWS, AWS_PROXY, or Mock integration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|false|none|none|
|httpMethod|object|false|none|none|
|uri|object|false|none|none|
|connectionType|object|false|none|none|
|connectionId|object|false|none|none|
|credentials|object|false|none|none|
|requestParameters|object|false|none|none|
|requestTemplates|object|false|none|none|
|passthroughBehavior|object|false|none|none|
|contentHandling|object|false|none|none|
|timeoutInMillis|object|false|none|none|
|cacheNamespace|object|false|none|none|
|cacheKeyParameters|object|false|none|none|
|integrationResponses|object|false|none|none|
|tlsConfig|object|false|none|none|

<h2 id="tocS_IntegrationResponse">IntegrationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaintegrationresponse"></a>
<a id="schema_IntegrationResponse"></a>
<a id="tocSintegrationresponse"></a>
<a id="tocsintegrationresponse"></a>

```json
{
  "statusCode": {},
  "selectionPattern": {},
  "responseParameters": {
    "property1": "string",
    "property2": "string"
  },
  "responseTemplates": {
    "property1": "string",
    "property2": "string"
  },
  "contentHandling": {}
}
```

Represents an integration response. The status code must map to an existing MethodResponse, and parameters and templates can be used to transform the back-end response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|object|false|none|none|
|selectionPattern|object|false|none|none|
|responseParameters|object|false|none|none|
|responseTemplates|object|false|none|none|
|contentHandling|object|false|none|none|

<h2 id="tocS_Method">Method</h2>
<!-- backwards compatibility -->
<a id="schemamethod"></a>
<a id="schema_Method"></a>
<a id="tocSmethod"></a>
<a id="tocsmethod"></a>

```json
{
  "httpMethod": {},
  "authorizationType": {},
  "authorizerId": {},
  "apiKeyRequired": {},
  "requestValidatorId": {},
  "operationName": {},
  "requestParameters": {
    "property1": true,
    "property2": true
  },
  "requestModels": {
    "property1": "string",
    "property2": "string"
  },
  "methodResponses": {
    "property1": {
      "statusCode": {},
      "responseParameters": {
        "property1": true,
        "property2": true
      },
      "responseModels": {
        "property1": "string",
        "property2": "string"
      }
    },
    "property2": {
      "statusCode": {},
      "responseParameters": {
        "property1": true,
        "property2": true
      },
      "responseModels": {
        "property1": "string",
        "property2": "string"
      }
    }
  },
  "methodIntegration": {
    "type": {},
    "httpMethod": {},
    "uri": {},
    "connectionType": {},
    "connectionId": {},
    "credentials": {},
    "requestParameters": {
      "property1": "string",
      "property2": "string"
    },
    "requestTemplates": {
      "property1": "string",
      "property2": "string"
    },
    "passthroughBehavior": {},
    "contentHandling": {},
    "timeoutInMillis": {},
    "cacheNamespace": {},
    "cacheKeyParameters": {},
    "integrationResponses": {
      "property1": {
        "statusCode": {},
        "selectionPattern": {},
        "responseParameters": {
          "property1": "string",
          "property2": "string"
        },
        "responseTemplates": {
          "property1": "string",
          "property2": "string"
        },
        "contentHandling": {}
      },
      "property2": {
        "statusCode": {},
        "selectionPattern": {},
        "responseParameters": {
          "property1": "string",
          "property2": "string"
        },
        "responseTemplates": {
          "property1": "string",
          "property2": "string"
        },
        "contentHandling": {}
      }
    },
    "tlsConfig": {
      "insecureSkipVerification": {}
    }
  },
  "authorizationScopes": {}
}
```

 Represents a client-facing interface by which the client calls the API to access back-end resources. A Method resource is integrated with an Integration resource. Both consist of a request and one or more responses. The method request takes the client input that is passed to the back end through the integration request. A method response returns the output from the back end to the client through an integration response. A method request is embodied in a Method resource, whereas an integration request is embodied in an Integration resource. On the other hand, a method response is represented by a MethodResponse resource, whereas an integration response is represented by an IntegrationResponse resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|httpMethod|object|false|none|none|
|authorizationType|object|false|none|none|
|authorizerId|object|false|none|none|
|apiKeyRequired|object|false|none|none|
|requestValidatorId|object|false|none|none|
|operationName|object|false|none|none|
|requestParameters|object|false|none|none|
|requestModels|object|false|none|none|
|methodResponses|object|false|none|none|
|methodIntegration|object|false|none|none|
|authorizationScopes|object|false|none|none|

<h2 id="tocS_MethodResponse">MethodResponse</h2>
<!-- backwards compatibility -->
<a id="schemamethodresponse"></a>
<a id="schema_MethodResponse"></a>
<a id="tocSmethodresponse"></a>
<a id="tocsmethodresponse"></a>

```json
{
  "statusCode": {},
  "responseParameters": {
    "property1": true,
    "property2": true
  },
  "responseModels": {
    "property1": "string",
    "property2": "string"
  }
}
```

Represents a method response of a given HTTP status code returned to the client. The method response is passed from the back end through the associated integration response that can be transformed using a mapping template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|object|false|none|none|
|responseParameters|object|false|none|none|
|responseModels|object|false|none|none|

<h2 id="tocS_Template">Template</h2>
<!-- backwards compatibility -->
<a id="schematemplate"></a>
<a id="schema_Template"></a>
<a id="tocStemplate"></a>
<a id="tocstemplate"></a>

```json
{
  "value": {}
}
```

Represents a mapping template used to transform a payload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|object|false|none|none|

<h2 id="tocS_Models">Models</h2>
<!-- backwards compatibility -->
<a id="schemamodels"></a>
<a id="schema_Models"></a>
<a id="tocSmodels"></a>
<a id="tocsmodels"></a>

```json
{
  "position": "string",
  "items": {}
}
```

Represents a collection of Model resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|position|[String](#schemastring)|false|none|none|
|items|object|false|none|none|

<h2 id="tocS_RequestValidators">RequestValidators</h2>
<!-- backwards compatibility -->
<a id="schemarequestvalidators"></a>
<a id="schema_RequestValidators"></a>
<a id="tocSrequestvalidators"></a>
<a id="tocsrequestvalidators"></a>

```json
{
  "position": "string",
  "items": {}
}
```

A collection of RequestValidator resources of a given RestApi.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|position|[String](#schemastring)|false|none|none|
|items|object|false|none|none|

<h2 id="tocS_Resources">Resources</h2>
<!-- backwards compatibility -->
<a id="schemaresources"></a>
<a id="schema_Resources"></a>
<a id="tocSresources"></a>
<a id="tocsresources"></a>

```json
{
  "position": "string",
  "items": {}
}
```

Represents a collection of Resource resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|position|[String](#schemastring)|false|none|none|
|items|object|false|none|none|

<h2 id="tocS_RestApis">RestApis</h2>
<!-- backwards compatibility -->
<a id="schemarestapis"></a>
<a id="schema_RestApis"></a>
<a id="tocSrestapis"></a>
<a id="tocsrestapis"></a>

```json
{
  "position": "string",
  "items": {}
}
```

Contains references to your APIs and links that guide you in how to interact with your collection. A collection offers a paginated view of your APIs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|position|[String](#schemastring)|false|none|none|
|items|object|false|none|none|

<h2 id="tocS_SdkResponse">SdkResponse</h2>
<!-- backwards compatibility -->
<a id="schemasdkresponse"></a>
<a id="schema_SdkResponse"></a>
<a id="tocSsdkresponse"></a>
<a id="tocssdkresponse"></a>

```json
{
  "body": {}
}
```

The binary blob response to GetSdk, which contains the generated SDK.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|object|false|none|none|

<h2 id="tocS_SdkType">SdkType</h2>
<!-- backwards compatibility -->
<a id="schemasdktype"></a>
<a id="schema_SdkType"></a>
<a id="tocSsdktype"></a>
<a id="tocssdktype"></a>

```json
{
  "id": {},
  "friendlyName": {},
  "description": {},
  "configurationProperties": {}
}
```

A type of SDK that API Gateway can generate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|friendlyName|object|false|none|none|
|description|object|false|none|none|
|configurationProperties|object|false|none|none|

<h2 id="tocS_SdkTypes">SdkTypes</h2>
<!-- backwards compatibility -->
<a id="schemasdktypes"></a>
<a id="schema_SdkTypes"></a>
<a id="tocSsdktypes"></a>
<a id="tocssdktypes"></a>

```json
{
  "position": "string",
  "items": {}
}
```

The collection of SdkType instances.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|position|[String](#schemastring)|false|none|none|
|items|object|false|none|none|

<h2 id="tocS_Stages">Stages</h2>
<!-- backwards compatibility -->
<a id="schemastages"></a>
<a id="schema_Stages"></a>
<a id="tocSstages"></a>
<a id="tocsstages"></a>

```json
{
  "item": {}
}
```

A list of Stage resources that are associated with the ApiKey resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|item|object|false|none|none|

<h2 id="tocS_Tags">Tags</h2>
<!-- backwards compatibility -->
<a id="schematags"></a>
<a id="schema_Tags"></a>
<a id="tocStags"></a>
<a id="tocstags"></a>

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

The collection of tags. Each tag element is associated with a given resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|false|none|none|

<h2 id="tocS_Usage">Usage</h2>
<!-- backwards compatibility -->
<a id="schemausage"></a>
<a id="schema_Usage"></a>
<a id="tocSusage"></a>
<a id="tocsusage"></a>

```json
{
  "usagePlanId": {},
  "startDate": {},
  "endDate": {},
  "position": "string",
  "items": {
    "property1": [
      [
        0
      ]
    ],
    "property2": [
      [
        0
      ]
    ]
  }
}
```

Represents the usage data of a usage plan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usagePlanId|object|false|none|none|
|startDate|object|false|none|none|
|endDate|object|false|none|none|
|position|[String](#schemastring)|false|none|none|
|items|object|false|none|none|

<h2 id="tocS_UsagePlanKeys">UsagePlanKeys</h2>
<!-- backwards compatibility -->
<a id="schemausageplankeys"></a>
<a id="schema_UsagePlanKeys"></a>
<a id="tocSusageplankeys"></a>
<a id="tocsusageplankeys"></a>

```json
{
  "position": "string",
  "items": {}
}
```

Represents the collection of usage plan keys added to usage plans for the associated API keys and, possibly, other types of keys.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|position|[String](#schemastring)|false|none|none|
|items|object|false|none|none|

<h2 id="tocS_UsagePlans">UsagePlans</h2>
<!-- backwards compatibility -->
<a id="schemausageplans"></a>
<a id="schema_UsagePlans"></a>
<a id="tocSusageplans"></a>
<a id="tocsusageplans"></a>

```json
{
  "position": "string",
  "items": {}
}
```

Represents a collection of usage plans for an AWS account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|position|[String](#schemastring)|false|none|none|
|items|object|false|none|none|

<h2 id="tocS_VpcLinks">VpcLinks</h2>
<!-- backwards compatibility -->
<a id="schemavpclinks"></a>
<a id="schema_VpcLinks"></a>
<a id="tocSvpclinks"></a>
<a id="tocsvpclinks"></a>

```json
{
  "position": "string",
  "items": {}
}
```

The collection of VPC links under the caller's account in a region.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|position|[String](#schemastring)|false|none|none|
|items|object|false|none|none|

<h2 id="tocS_ApiKeyIds">ApiKeyIds</h2>
<!-- backwards compatibility -->
<a id="schemaapikeyids"></a>
<a id="schema_ApiKeyIds"></a>
<a id="tocSapikeyids"></a>
<a id="tocsapikeyids"></a>

```json
{
  "ids": {},
  "warnings": {}
}
```

The identifier of an ApiKey used in a UsagePlan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|object|false|none|none|
|warnings|object|false|none|none|

<h2 id="tocS_DocumentationPartIds">DocumentationPartIds</h2>
<!-- backwards compatibility -->
<a id="schemadocumentationpartids"></a>
<a id="schema_DocumentationPartIds"></a>
<a id="tocSdocumentationpartids"></a>
<a id="tocsdocumentationpartids"></a>

```json
{
  "ids": {},
  "warnings": {}
}
```

A collection of the imported DocumentationPart identifiers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|object|false|none|none|
|warnings|object|false|none|none|

<h2 id="tocS_NullableBoolean">NullableBoolean</h2>
<!-- backwards compatibility -->
<a id="schemanullableboolean"></a>
<a id="schema_NullableBoolean"></a>
<a id="tocSnullableboolean"></a>
<a id="tocsnullableboolean"></a>

```json
true
```

<h2 id="tocS_TestInvokeAuthorizerResponse">TestInvokeAuthorizerResponse</h2>
<!-- backwards compatibility -->
<a id="schematestinvokeauthorizerresponse"></a>
<a id="schema_TestInvokeAuthorizerResponse"></a>
<a id="tocStestinvokeauthorizerresponse"></a>
<a id="tocstestinvokeauthorizerresponse"></a>

```json
{
  "clientStatus": {},
  "log": {},
  "latency": {},
  "principalId": {},
  "policy": {},
  "authorization": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "claims": {
    "property1": "string",
    "property2": "string"
  }
}
```

Represents the response of the test invoke request for a custom Authorizer

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientStatus|object|false|none|none|
|log|object|false|none|none|
|latency|object|false|none|none|
|principalId|object|false|none|none|
|policy|object|false|none|none|
|authorization|object|false|none|none|
|claims|object|false|none|none|

<h2 id="tocS_TestInvokeMethodResponse">TestInvokeMethodResponse</h2>
<!-- backwards compatibility -->
<a id="schematestinvokemethodresponse"></a>
<a id="schema_TestInvokeMethodResponse"></a>
<a id="tocStestinvokemethodresponse"></a>
<a id="tocstestinvokemethodresponse"></a>

```json
{
  "status": {},
  "body": {},
  "headers": {
    "property1": "string",
    "property2": "string"
  },
  "multiValueHeaders": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "log": {},
  "latency": {}
}
```

Represents the response of the test invoke request in the HTTP method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|false|none|none|
|body|object|false|none|none|
|headers|object|false|none|none|
|multiValueHeaders|object|false|none|none|
|log|object|false|none|none|
|latency|object|false|none|none|

<h2 id="tocS_PatchOperation">PatchOperation</h2>
<!-- backwards compatibility -->
<a id="schemapatchoperation"></a>
<a id="schema_PatchOperation"></a>
<a id="tocSpatchoperation"></a>
<a id="tocspatchoperation"></a>

```json
{
  "op": {},
  "path": {},
  "value": {},
  "from": {}
}
```

For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|op|object|false|none|none|
|path|object|false|none|none|
|value|object|false|none|none|
|from|object|false|none|none|

<h2 id="tocS_AccessLogSettings">AccessLogSettings</h2>
<!-- backwards compatibility -->
<a id="schemaaccesslogsettings"></a>
<a id="schema_AccessLogSettings"></a>
<a id="tocSaccesslogsettings"></a>
<a id="tocsaccesslogsettings"></a>

```json
{
  "format": {},
  "destinationArn": {}
}
```

Access log settings, including the access log format and access log destination ARN.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|format|object|false|none|none|
|destinationArn|object|false|none|none|

<h2 id="tocS_ThrottleSettings">ThrottleSettings</h2>
<!-- backwards compatibility -->
<a id="schemathrottlesettings"></a>
<a id="schema_ThrottleSettings"></a>
<a id="tocSthrottlesettings"></a>
<a id="tocsthrottlesettings"></a>

```json
{
  "burstLimit": {},
  "rateLimit": {}
}
```

 The API request rate limits.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|burstLimit|object|false|none|none|
|rateLimit|object|false|none|none|

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ApiKeySourceType">ApiKeySourceType</h2>
<!-- backwards compatibility -->
<a id="schemaapikeysourcetype"></a>
<a id="schema_ApiKeySourceType"></a>
<a id="tocSapikeysourcetype"></a>
<a id="tocsapikeysourcetype"></a>

```json
"HEADER"
```

<h2 id="tocS_ListOfApiKey">ListOfApiKey</h2>
<!-- backwards compatibility -->
<a id="schemalistofapikey"></a>
<a id="schema_ListOfApiKey"></a>
<a id="tocSlistofapikey"></a>
<a id="tocslistofapikey"></a>

```json
[
  {
    "id": {},
    "value": {},
    "name": {},
    "customerId": {},
    "description": {},
    "enabled": {},
    "createdDate": {},
    "lastUpdatedDate": {},
    "stageKeys": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_ApiKeysFormat">ApiKeysFormat</h2>
<!-- backwards compatibility -->
<a id="schemaapikeysformat"></a>
<a id="schema_ApiKeysFormat"></a>
<a id="tocSapikeysformat"></a>
<a id="tocsapikeysformat"></a>

```json
"csv"
```

<h2 id="tocS_MapOfApiStageThrottleSettings">MapOfApiStageThrottleSettings</h2>
<!-- backwards compatibility -->
<a id="schemamapofapistagethrottlesettings"></a>
<a id="schema_MapOfApiStageThrottleSettings"></a>
<a id="tocSmapofapistagethrottlesettings"></a>
<a id="tocsmapofapistagethrottlesettings"></a>

```json
{
  "property1": {
    "burstLimit": {},
    "rateLimit": {}
  },
  "property2": {
    "burstLimit": {},
    "rateLimit": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ThrottleSettings](#schemathrottlesettings)|false|none| The API request rate limits.|

<h2 id="tocS_AuthorizerType">AuthorizerType</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizertype"></a>
<a id="schema_AuthorizerType"></a>
<a id="tocSauthorizertype"></a>
<a id="tocsauthorizertype"></a>

```json
"TOKEN"
```

The authorizer type. Valid values are <code>TOKEN</code> for a Lambda function using a single authorization token submitted in a custom header, <code>REQUEST</code> for a Lambda function using incoming request parameters, and <code>COGNITO_USER_POOLS</code> for using an Amazon Cognito user pool.

<h2 id="tocS_ListOfARNs">ListOfARNs</h2>
<!-- backwards compatibility -->
<a id="schemalistofarns"></a>
<a id="schema_ListOfARNs"></a>
<a id="tocSlistofarns"></a>
<a id="tocslistofarns"></a>

```json
[
  "string"
]
```

<h2 id="tocS_NullableInteger">NullableInteger</h2>
<!-- backwards compatibility -->
<a id="schemanullableinteger"></a>
<a id="schema_NullableInteger"></a>
<a id="tocSnullableinteger"></a>
<a id="tocsnullableinteger"></a>

```json
0
```

<h2 id="tocS_ListOfAuthorizer">ListOfAuthorizer</h2>
<!-- backwards compatibility -->
<a id="schemalistofauthorizer"></a>
<a id="schema_ListOfAuthorizer"></a>
<a id="tocSlistofauthorizer"></a>
<a id="tocslistofauthorizer"></a>

```json
[
  {
    "id": {},
    "name": {},
    "type": {},
    "providerARNs": {},
    "authType": {},
    "authorizerUri": {},
    "authorizerCredentials": {},
    "identitySource": {},
    "identityValidationExpression": {},
    "authorizerResultTtlInSeconds": {}
  }
]
```

<h2 id="tocS_ListOfBasePathMapping">ListOfBasePathMapping</h2>
<!-- backwards compatibility -->
<a id="schemalistofbasepathmapping"></a>
<a id="schema_ListOfBasePathMapping"></a>
<a id="tocSlistofbasepathmapping"></a>
<a id="tocslistofbasepathmapping"></a>

```json
[
  {
    "basePath": {},
    "restApiId": {},
    "stage": {}
  }
]
```

<h2 id="tocS_Blob">Blob</h2>
<!-- backwards compatibility -->
<a id="schemablob"></a>
<a id="schema_Blob"></a>
<a id="tocSblob"></a>
<a id="tocsblob"></a>

```json
"string"
```

<h2 id="tocS_CacheClusterSize">CacheClusterSize</h2>
<!-- backwards compatibility -->
<a id="schemacacheclustersize"></a>
<a id="schema_CacheClusterSize"></a>
<a id="tocScacheclustersize"></a>
<a id="tocscacheclustersize"></a>

```json
"0.5"
```

Returns the size of the CacheCluster.

<h2 id="tocS_CacheClusterStatus">CacheClusterStatus</h2>
<!-- backwards compatibility -->
<a id="schemacacheclusterstatus"></a>
<a id="schema_CacheClusterStatus"></a>
<a id="tocScacheclusterstatus"></a>
<a id="tocscacheclusterstatus"></a>

```json
"CREATE_IN_PROGRESS"
```

Returns the status of the CacheCluster.

<h2 id="tocS_CanarySettings">CanarySettings</h2>
<!-- backwards compatibility -->
<a id="schemacanarysettings"></a>
<a id="schema_CanarySettings"></a>
<a id="tocScanarysettings"></a>
<a id="tocscanarysettings"></a>

```json
{
  "percentTraffic": {},
  "deploymentId": {},
  "stageVariableOverrides": {
    "property1": "string",
    "property2": "string"
  },
  "useStageCache": {}
}
```

Configuration settings of a canary deployment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|percentTraffic|object|false|none|none|
|deploymentId|object|false|none|none|
|stageVariableOverrides|object|false|none|none|
|useStageCache|object|false|none|none|

<h2 id="tocS_ListOfClientCertificate">ListOfClientCertificate</h2>
<!-- backwards compatibility -->
<a id="schemalistofclientcertificate"></a>
<a id="schema_ListOfClientCertificate"></a>
<a id="tocSlistofclientcertificate"></a>
<a id="tocslistofclientcertificate"></a>

```json
[
  {
    "clientCertificateId": {},
    "description": {},
    "pemEncodedCertificate": {},
    "createdDate": {},
    "expirationDate": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_ConnectionType">ConnectionType</h2>
<!-- backwards compatibility -->
<a id="schemaconnectiontype"></a>
<a id="schema_ConnectionType"></a>
<a id="tocSconnectiontype"></a>
<a id="tocsconnectiontype"></a>

```json
"INTERNET"
```

<h2 id="tocS_ContentHandlingStrategy">ContentHandlingStrategy</h2>
<!-- backwards compatibility -->
<a id="schemacontenthandlingstrategy"></a>
<a id="schema_ContentHandlingStrategy"></a>
<a id="tocScontenthandlingstrategy"></a>
<a id="tocscontenthandlingstrategy"></a>

```json
"CONVERT_TO_BINARY"
```

<h2 id="tocS_ListOfStageKeys">ListOfStageKeys</h2>
<!-- backwards compatibility -->
<a id="schemalistofstagekeys"></a>
<a id="schema_ListOfStageKeys"></a>
<a id="tocSlistofstagekeys"></a>
<a id="tocslistofstagekeys"></a>

```json
[
  {
    "restApiId": {},
    "stageName": {}
  }
]
```

<h2 id="tocS_CreateApiKeyRequest">CreateApiKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateapikeyrequest"></a>
<a id="schema_CreateApiKeyRequest"></a>
<a id="tocScreateapikeyrequest"></a>
<a id="tocscreateapikeyrequest"></a>

```json
{
  "name": {},
  "description": {},
  "enabled": {},
  "generateDistinctId": {},
  "value": {},
  "stageKeys": {},
  "customerId": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Request to create an ApiKey resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|description|object|false|none|none|
|enabled|object|false|none|none|
|generateDistinctId|object|false|none|none|
|value|object|false|none|none|
|stageKeys|object|false|none|none|
|customerId|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateAuthorizerRequest">CreateAuthorizerRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateauthorizerrequest"></a>
<a id="schema_CreateAuthorizerRequest"></a>
<a id="tocScreateauthorizerrequest"></a>
<a id="tocscreateauthorizerrequest"></a>

```json
{
  "name": {},
  "type": {},
  "providerARNs": {},
  "authType": {},
  "authorizerUri": {},
  "authorizerCredentials": {},
  "identitySource": {},
  "identityValidationExpression": {},
  "authorizerResultTtlInSeconds": {}
}
```

Request to add a new Authorizer to an existing RestApi resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|type|object|true|none|none|
|providerARNs|object|false|none|none|
|authType|object|false|none|none|
|authorizerUri|object|false|none|none|
|authorizerCredentials|object|false|none|none|
|identitySource|object|false|none|none|
|identityValidationExpression|object|false|none|none|
|authorizerResultTtlInSeconds|object|false|none|none|

<h2 id="tocS_CreateBasePathMappingRequest">CreateBasePathMappingRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatebasepathmappingrequest"></a>
<a id="schema_CreateBasePathMappingRequest"></a>
<a id="tocScreatebasepathmappingrequest"></a>
<a id="tocscreatebasepathmappingrequest"></a>

```json
{
  "basePath": {},
  "restApiId": {},
  "stage": {}
}
```

Requests API Gateway to create a new BasePathMapping resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basePath|object|false|none|none|
|restApiId|object|true|none|none|
|stage|object|false|none|none|

<h2 id="tocS_DeploymentCanarySettings">DeploymentCanarySettings</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentcanarysettings"></a>
<a id="schema_DeploymentCanarySettings"></a>
<a id="tocSdeploymentcanarysettings"></a>
<a id="tocsdeploymentcanarysettings"></a>

```json
{
  "percentTraffic": {},
  "stageVariableOverrides": {
    "property1": "string",
    "property2": "string"
  },
  "useStageCache": {}
}
```

The input configuration for a canary deployment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|percentTraffic|object|false|none|none|
|stageVariableOverrides|object|false|none|none|
|useStageCache|object|false|none|none|

<h2 id="tocS_CreateDeploymentRequest">CreateDeploymentRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedeploymentrequest"></a>
<a id="schema_CreateDeploymentRequest"></a>
<a id="tocScreatedeploymentrequest"></a>
<a id="tocscreatedeploymentrequest"></a>

```json
{
  "stageName": {},
  "stageDescription": {},
  "description": {},
  "cacheClusterEnabled": {},
  "cacheClusterSize": {},
  "variables": {
    "property1": "string",
    "property2": "string"
  },
  "canarySettings": {
    "percentTraffic": {},
    "stageVariableOverrides": {
      "property1": "string",
      "property2": "string"
    },
    "useStageCache": {}
  },
  "tracingEnabled": {}
}
```

Requests API Gateway to create a Deployment resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stageName|object|false|none|none|
|stageDescription|object|false|none|none|
|description|object|false|none|none|
|cacheClusterEnabled|object|false|none|none|
|cacheClusterSize|object|false|none|none|
|variables|object|false|none|none|
|canarySettings|object|false|none|none|
|tracingEnabled|object|false|none|none|

<h2 id="tocS_DocumentationPartLocation">DocumentationPartLocation</h2>
<!-- backwards compatibility -->
<a id="schemadocumentationpartlocation"></a>
<a id="schema_DocumentationPartLocation"></a>
<a id="tocSdocumentationpartlocation"></a>
<a id="tocsdocumentationpartlocation"></a>

```json
{
  "type": {},
  "path": {},
  "method": {},
  "statusCode": {},
  "name": {}
}
```

Specifies the target API entity to which the documentation applies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|true|none|none|
|path|object|false|none|none|
|method|object|false|none|none|
|statusCode|object|false|none|none|
|name|object|false|none|none|

<h2 id="tocS_CreateDocumentationPartRequest">CreateDocumentationPartRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedocumentationpartrequest"></a>
<a id="schema_CreateDocumentationPartRequest"></a>
<a id="tocScreatedocumentationpartrequest"></a>
<a id="tocscreatedocumentationpartrequest"></a>

```json
{
  "location": {
    "type": {},
    "path": {},
    "method": {},
    "statusCode": {},
    "name": {}
  },
  "properties": null
}
```

Creates a new documentation part of a given API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|object|true|none|none|
|properties|object|true|none|The new documentation content map of the targeted API entity. Enclosed key-value pairs are API-specific, but only OpenAPI-compliant key-value pairs can be exported and, hence, published.|

<h2 id="tocS_CreateDocumentationVersionRequest">CreateDocumentationVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedocumentationversionrequest"></a>
<a id="schema_CreateDocumentationVersionRequest"></a>
<a id="tocScreatedocumentationversionrequest"></a>
<a id="tocscreatedocumentationversionrequest"></a>

```json
{
  "documentationVersion": {},
  "stageName": {},
  "description": {}
}
```

Creates a new documentation version of a given API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documentationVersion|object|true|none|none|
|stageName|object|false|none|none|
|description|object|false|none|none|

<h2 id="tocS_EndpointConfiguration">EndpointConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaendpointconfiguration"></a>
<a id="schema_EndpointConfiguration"></a>
<a id="tocSendpointconfiguration"></a>
<a id="tocsendpointconfiguration"></a>

```json
{
  "types": {},
  "vpcEndpointIds": {}
}
```

The endpoint configuration to indicate the types of endpoints an API (RestApi) or its custom domain name (DomainName) has.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|types|object|false|none|none|
|vpcEndpointIds|object|false|none|none|

<h2 id="tocS_SecurityPolicy">SecurityPolicy</h2>
<!-- backwards compatibility -->
<a id="schemasecuritypolicy"></a>
<a id="schema_SecurityPolicy"></a>
<a id="tocSsecuritypolicy"></a>
<a id="tocssecuritypolicy"></a>

```json
"TLS_1_0"
```

<h2 id="tocS_MutualTlsAuthenticationInput">MutualTlsAuthenticationInput</h2>
<!-- backwards compatibility -->
<a id="schemamutualtlsauthenticationinput"></a>
<a id="schema_MutualTlsAuthenticationInput"></a>
<a id="tocSmutualtlsauthenticationinput"></a>
<a id="tocsmutualtlsauthenticationinput"></a>

```json
{
  "truststoreUri": {},
  "truststoreVersion": {}
}
```

The mutual TLS authentication configuration for a custom domain name. If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|truststoreUri|object|false|none|none|
|truststoreVersion|object|false|none|none|

<h2 id="tocS_CreateDomainNameRequest">CreateDomainNameRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedomainnamerequest"></a>
<a id="schema_CreateDomainNameRequest"></a>
<a id="tocScreatedomainnamerequest"></a>
<a id="tocscreatedomainnamerequest"></a>

```json
{
  "domainName": {},
  "certificateName": {},
  "certificateBody": {},
  "certificatePrivateKey": {},
  "certificateChain": {},
  "certificateArn": {},
  "regionalCertificateName": {},
  "regionalCertificateArn": {},
  "endpointConfiguration": {
    "types": {},
    "vpcEndpointIds": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "securityPolicy": {},
  "mutualTlsAuthentication": {
    "truststoreUri": {},
    "truststoreVersion": {}
  },
  "ownershipVerificationCertificateArn": {}
}
```

A request to create a new domain name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainName|object|true|none|none|
|certificateName|object|false|none|none|
|certificateBody|object|false|none|none|
|certificatePrivateKey|object|false|none|none|
|certificateChain|object|false|none|none|
|certificateArn|object|false|none|none|
|regionalCertificateName|object|false|none|none|
|regionalCertificateArn|object|false|none|none|
|endpointConfiguration|object|false|none|none|
|tags|object|false|none|none|
|securityPolicy|object|false|none|none|
|mutualTlsAuthentication|[MutualTlsAuthenticationInput](#schemamutualtlsauthenticationinput)|false|none|The mutual TLS authentication configuration for a custom domain name. If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your API.|
|ownershipVerificationCertificateArn|object|false|none|none|

<h2 id="tocS_CreateModelRequest">CreateModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatemodelrequest"></a>
<a id="schema_CreateModelRequest"></a>
<a id="tocScreatemodelrequest"></a>
<a id="tocscreatemodelrequest"></a>

```json
{
  "name": {},
  "description": {},
  "schema": {},
  "contentType": {}
}
```

Request to add a new Model to an existing RestApi resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|description|object|false|none|none|
|schema|object|false|none|none|
|contentType|object|true|none|none|

<h2 id="tocS_CreateRequestValidatorRequest">CreateRequestValidatorRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreaterequestvalidatorrequest"></a>
<a id="schema_CreateRequestValidatorRequest"></a>
<a id="tocScreaterequestvalidatorrequest"></a>
<a id="tocscreaterequestvalidatorrequest"></a>

```json
{
  "name": {},
  "validateRequestBody": {},
  "validateRequestParameters": {}
}
```

Creates a RequestValidator of a given RestApi.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|validateRequestBody|object|false|none|none|
|validateRequestParameters|object|false|none|none|

<h2 id="tocS_CreateResourceRequest">CreateResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateresourcerequest"></a>
<a id="schema_CreateResourceRequest"></a>
<a id="tocScreateresourcerequest"></a>
<a id="tocscreateresourcerequest"></a>

```json
{
  "pathPart": {}
}
```

Requests API Gateway to create a Resource resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pathPart|object|true|none|none|

<h2 id="tocS_CreateRestApiRequest">CreateRestApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreaterestapirequest"></a>
<a id="schema_CreateRestApiRequest"></a>
<a id="tocScreaterestapirequest"></a>
<a id="tocscreaterestapirequest"></a>

```json
{
  "name": {},
  "description": {},
  "version": {},
  "cloneFrom": {},
  "binaryMediaTypes": {},
  "minimumCompressionSize": {},
  "apiKeySource": {},
  "endpointConfiguration": {
    "types": {},
    "vpcEndpointIds": {}
  },
  "policy": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "disableExecuteApiEndpoint": {}
}
```

The POST Request to add a new RestApi resource to your collection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|description|object|false|none|none|
|version|object|false|none|none|
|cloneFrom|object|false|none|none|
|binaryMediaTypes|object|false|none|none|
|minimumCompressionSize|object|false|none|none|
|apiKeySource|object|false|none|none|
|endpointConfiguration|object|false|none|none|
|policy|object|false|none|none|
|tags|object|false|none|none|
|disableExecuteApiEndpoint|object|false|none|none|

<h2 id="tocS_CreateStageRequest">CreateStageRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatestagerequest"></a>
<a id="schema_CreateStageRequest"></a>
<a id="tocScreatestagerequest"></a>
<a id="tocscreatestagerequest"></a>

```json
{
  "stageName": {},
  "deploymentId": {},
  "description": {},
  "cacheClusterEnabled": {},
  "cacheClusterSize": {},
  "variables": {
    "property1": "string",
    "property2": "string"
  },
  "documentationVersion": {},
  "canarySettings": {
    "percentTraffic": {},
    "deploymentId": {},
    "stageVariableOverrides": {
      "property1": "string",
      "property2": "string"
    },
    "useStageCache": {}
  },
  "tracingEnabled": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Requests API Gateway to create a Stage resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stageName|object|true|none|none|
|deploymentId|object|true|none|none|
|description|object|false|none|none|
|cacheClusterEnabled|object|false|none|none|
|cacheClusterSize|object|false|none|none|
|variables|object|false|none|none|
|documentationVersion|object|false|none|none|
|canarySettings|object|false|none|none|
|tracingEnabled|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateUsagePlanKeyRequest">CreateUsagePlanKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateusageplankeyrequest"></a>
<a id="schema_CreateUsagePlanKeyRequest"></a>
<a id="tocScreateusageplankeyrequest"></a>
<a id="tocscreateusageplankeyrequest"></a>

```json
{
  "keyId": {},
  "keyType": {}
}
```

The POST request to create a usage plan key for adding an existing API key to a usage plan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keyId|object|true|none|none|
|keyType|object|true|none|none|

<h2 id="tocS_ListOfApiStage">ListOfApiStage</h2>
<!-- backwards compatibility -->
<a id="schemalistofapistage"></a>
<a id="schema_ListOfApiStage"></a>
<a id="tocSlistofapistage"></a>
<a id="tocslistofapistage"></a>

```json
[
  {
    "apiId": {},
    "stage": {},
    "throttle": {
      "property1": {
        "burstLimit": {},
        "rateLimit": {}
      },
      "property2": {
        "burstLimit": {},
        "rateLimit": {}
      }
    }
  }
]
```

<h2 id="tocS_QuotaSettings">QuotaSettings</h2>
<!-- backwards compatibility -->
<a id="schemaquotasettings"></a>
<a id="schema_QuotaSettings"></a>
<a id="tocSquotasettings"></a>
<a id="tocsquotasettings"></a>

```json
{
  "limit": {},
  "offset": {},
  "period": {}
}
```

Quotas configured for a usage plan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|limit|object|false|none|none|
|offset|object|false|none|none|
|period|object|false|none|none|

<h2 id="tocS_CreateUsagePlanRequest">CreateUsagePlanRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateusageplanrequest"></a>
<a id="schema_CreateUsagePlanRequest"></a>
<a id="tocScreateusageplanrequest"></a>
<a id="tocscreateusageplanrequest"></a>

```json
{
  "name": {},
  "description": {},
  "apiStages": {},
  "throttle": {
    "burstLimit": {},
    "rateLimit": {}
  },
  "quota": {
    "limit": {},
    "offset": {},
    "period": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

The POST request to create a usage plan with the name, description, throttle limits and quota limits, as well as the associated API stages, specified in the payload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|description|object|false|none|none|
|apiStages|object|false|none|none|
|throttle|object|false|none|none|
|quota|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateVpcLinkRequest">CreateVpcLinkRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatevpclinkrequest"></a>
<a id="schema_CreateVpcLinkRequest"></a>
<a id="tocScreatevpclinkrequest"></a>
<a id="tocscreatevpclinkrequest"></a>

```json
{
  "name": {},
  "description": {},
  "targetArns": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Creates a VPC link, under the caller's account in a selected region, in an asynchronous operation that typically takes 2-4 minutes to complete and become operational. The caller must have permissions to create and update VPC Endpoint services.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|description|object|false|none|none|
|targetArns|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_DeleteApiKeyRequest">DeleteApiKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapikeyrequest"></a>
<a id="schema_DeleteApiKeyRequest"></a>
<a id="tocSdeleteapikeyrequest"></a>
<a id="tocsdeleteapikeyrequest"></a>

```json
{}
```

A request to delete the ApiKey resource.

<h2 id="tocS_DeleteAuthorizerRequest">DeleteAuthorizerRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteauthorizerrequest"></a>
<a id="schema_DeleteAuthorizerRequest"></a>
<a id="tocSdeleteauthorizerrequest"></a>
<a id="tocsdeleteauthorizerrequest"></a>

```json
{}
```

Request to delete an existing Authorizer resource.

<h2 id="tocS_DeleteBasePathMappingRequest">DeleteBasePathMappingRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebasepathmappingrequest"></a>
<a id="schema_DeleteBasePathMappingRequest"></a>
<a id="tocSdeletebasepathmappingrequest"></a>
<a id="tocsdeletebasepathmappingrequest"></a>

```json
{}
```

A request to delete the BasePathMapping resource.

<h2 id="tocS_DeleteClientCertificateRequest">DeleteClientCertificateRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteclientcertificaterequest"></a>
<a id="schema_DeleteClientCertificateRequest"></a>
<a id="tocSdeleteclientcertificaterequest"></a>
<a id="tocsdeleteclientcertificaterequest"></a>

```json
{}
```

A request to delete the ClientCertificate resource.

<h2 id="tocS_DeleteDeploymentRequest">DeleteDeploymentRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedeploymentrequest"></a>
<a id="schema_DeleteDeploymentRequest"></a>
<a id="tocSdeletedeploymentrequest"></a>
<a id="tocsdeletedeploymentrequest"></a>

```json
{}
```

Requests API Gateway to delete a Deployment resource.

<h2 id="tocS_DeleteDocumentationPartRequest">DeleteDocumentationPartRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedocumentationpartrequest"></a>
<a id="schema_DeleteDocumentationPartRequest"></a>
<a id="tocSdeletedocumentationpartrequest"></a>
<a id="tocsdeletedocumentationpartrequest"></a>

```json
{}
```

Deletes an existing documentation part of an API.

<h2 id="tocS_DeleteDocumentationVersionRequest">DeleteDocumentationVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedocumentationversionrequest"></a>
<a id="schema_DeleteDocumentationVersionRequest"></a>
<a id="tocSdeletedocumentationversionrequest"></a>
<a id="tocsdeletedocumentationversionrequest"></a>

```json
{}
```

Deletes an existing documentation version of an API.

<h2 id="tocS_DeleteDomainNameRequest">DeleteDomainNameRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedomainnamerequest"></a>
<a id="schema_DeleteDomainNameRequest"></a>
<a id="tocSdeletedomainnamerequest"></a>
<a id="tocsdeletedomainnamerequest"></a>

```json
{}
```

A request to delete the DomainName resource.

<h2 id="tocS_GatewayResponseType">GatewayResponseType</h2>
<!-- backwards compatibility -->
<a id="schemagatewayresponsetype"></a>
<a id="schema_GatewayResponseType"></a>
<a id="tocSgatewayresponsetype"></a>
<a id="tocsgatewayresponsetype"></a>

```json
"DEFAULT_4XX"
```

<h2 id="tocS_DeleteGatewayResponseRequest">DeleteGatewayResponseRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletegatewayresponserequest"></a>
<a id="schema_DeleteGatewayResponseRequest"></a>
<a id="tocSdeletegatewayresponserequest"></a>
<a id="tocsdeletegatewayresponserequest"></a>

```json
{}
```

Clears any customization of a GatewayResponse of a specified response type on the given RestApi and resets it with the default settings.

<h2 id="tocS_DeleteIntegrationRequest">DeleteIntegrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteintegrationrequest"></a>
<a id="schema_DeleteIntegrationRequest"></a>
<a id="tocSdeleteintegrationrequest"></a>
<a id="tocsdeleteintegrationrequest"></a>

```json
{}
```

Represents a delete integration request.

<h2 id="tocS_StatusCode">StatusCode</h2>
<!-- backwards compatibility -->
<a id="schemastatuscode"></a>
<a id="schema_StatusCode"></a>
<a id="tocSstatuscode"></a>
<a id="tocsstatuscode"></a>

```json
"string"
```

The status code.

<h2 id="tocS_DeleteIntegrationResponseRequest">DeleteIntegrationResponseRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteintegrationresponserequest"></a>
<a id="schema_DeleteIntegrationResponseRequest"></a>
<a id="tocSdeleteintegrationresponserequest"></a>
<a id="tocsdeleteintegrationresponserequest"></a>

```json
{}
```

Represents a delete integration response request.

<h2 id="tocS_DeleteMethodRequest">DeleteMethodRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletemethodrequest"></a>
<a id="schema_DeleteMethodRequest"></a>
<a id="tocSdeletemethodrequest"></a>
<a id="tocsdeletemethodrequest"></a>

```json
{}
```

Request to delete an existing Method resource.

<h2 id="tocS_DeleteMethodResponseRequest">DeleteMethodResponseRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletemethodresponserequest"></a>
<a id="schema_DeleteMethodResponseRequest"></a>
<a id="tocSdeletemethodresponserequest"></a>
<a id="tocsdeletemethodresponserequest"></a>

```json
{}
```

A request to delete an existing MethodResponse resource.

<h2 id="tocS_DeleteModelRequest">DeleteModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletemodelrequest"></a>
<a id="schema_DeleteModelRequest"></a>
<a id="tocSdeletemodelrequest"></a>
<a id="tocsdeletemodelrequest"></a>

```json
{}
```

Request to delete an existing model in an existing RestApi resource.

<h2 id="tocS_DeleteRequestValidatorRequest">DeleteRequestValidatorRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleterequestvalidatorrequest"></a>
<a id="schema_DeleteRequestValidatorRequest"></a>
<a id="tocSdeleterequestvalidatorrequest"></a>
<a id="tocsdeleterequestvalidatorrequest"></a>

```json
{}
```

Deletes a specified RequestValidator of a given RestApi.

<h2 id="tocS_DeleteResourceRequest">DeleteResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresourcerequest"></a>
<a id="schema_DeleteResourceRequest"></a>
<a id="tocSdeleteresourcerequest"></a>
<a id="tocsdeleteresourcerequest"></a>

```json
{}
```

Request to delete a Resource.

<h2 id="tocS_DeleteRestApiRequest">DeleteRestApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleterestapirequest"></a>
<a id="schema_DeleteRestApiRequest"></a>
<a id="tocSdeleterestapirequest"></a>
<a id="tocsdeleterestapirequest"></a>

```json
{}
```

Request to delete the specified API from your collection.

<h2 id="tocS_DeleteStageRequest">DeleteStageRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletestagerequest"></a>
<a id="schema_DeleteStageRequest"></a>
<a id="tocSdeletestagerequest"></a>
<a id="tocsdeletestagerequest"></a>

```json
{}
```

Requests API Gateway to delete a Stage resource.

<h2 id="tocS_DeleteUsagePlanKeyRequest">DeleteUsagePlanKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteusageplankeyrequest"></a>
<a id="schema_DeleteUsagePlanKeyRequest"></a>
<a id="tocSdeleteusageplankeyrequest"></a>
<a id="tocsdeleteusageplankeyrequest"></a>

```json
{}
```

The DELETE request to delete a usage plan key and remove the underlying API key from the associated usage plan.

<h2 id="tocS_DeleteUsagePlanRequest">DeleteUsagePlanRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteusageplanrequest"></a>
<a id="schema_DeleteUsagePlanRequest"></a>
<a id="tocSdeleteusageplanrequest"></a>
<a id="tocsdeleteusageplanrequest"></a>

```json
{}
```

The DELETE request to delete a usage plan of a given plan Id.

<h2 id="tocS_DeleteVpcLinkRequest">DeleteVpcLinkRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletevpclinkrequest"></a>
<a id="schema_DeleteVpcLinkRequest"></a>
<a id="tocSdeletevpclinkrequest"></a>
<a id="tocsdeletevpclinkrequest"></a>

```json
{}
```

Deletes an existing VpcLink of a specified identifier.

<h2 id="tocS_PathToMapOfMethodSnapshot">PathToMapOfMethodSnapshot</h2>
<!-- backwards compatibility -->
<a id="schemapathtomapofmethodsnapshot"></a>
<a id="schema_PathToMapOfMethodSnapshot"></a>
<a id="tocSpathtomapofmethodsnapshot"></a>
<a id="tocspathtomapofmethodsnapshot"></a>

```json
{
  "property1": {
    "property1": {
      "authorizationType": {},
      "apiKeyRequired": {}
    },
    "property2": {
      "authorizationType": {},
      "apiKeyRequired": {}
    }
  },
  "property2": {
    "property1": {
      "authorizationType": {},
      "apiKeyRequired": {}
    },
    "property2": {
      "authorizationType": {},
      "apiKeyRequired": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[MapOfMethodSnapshot](#schemamapofmethodsnapshot)|false|none|none|

<h2 id="tocS_ListOfDeployment">ListOfDeployment</h2>
<!-- backwards compatibility -->
<a id="schemalistofdeployment"></a>
<a id="schema_ListOfDeployment"></a>
<a id="tocSlistofdeployment"></a>
<a id="tocslistofdeployment"></a>

```json
[
  {
    "id": {},
    "description": {},
    "createdDate": {},
    "apiSummary": {
      "property1": {
        "property1": {
          "authorizationType": {},
          "apiKeyRequired": {}
        },
        "property2": {
          "authorizationType": {},
          "apiKeyRequired": {}
        }
      },
      "property2": {
        "property1": {
          "authorizationType": {},
          "apiKeyRequired": {}
        },
        "property2": {
          "authorizationType": {},
          "apiKeyRequired": {}
        }
      }
    }
  }
]
```

<h2 id="tocS_ListOfDocumentationPart">ListOfDocumentationPart</h2>
<!-- backwards compatibility -->
<a id="schemalistofdocumentationpart"></a>
<a id="schema_ListOfDocumentationPart"></a>
<a id="tocSlistofdocumentationpart"></a>
<a id="tocslistofdocumentationpart"></a>

```json
[
  {
    "id": {},
    "location": {
      "type": {},
      "path": {},
      "method": {},
      "statusCode": {},
      "name": {}
    },
    "properties": null
  }
]
```

<h2 id="tocS_ListOfDocumentationVersion">ListOfDocumentationVersion</h2>
<!-- backwards compatibility -->
<a id="schemalistofdocumentationversion"></a>
<a id="schema_ListOfDocumentationVersion"></a>
<a id="tocSlistofdocumentationversion"></a>
<a id="tocslistofdocumentationversion"></a>

```json
[
  {
    "version": {},
    "createdDate": {},
    "description": {}
  }
]
```

<h2 id="tocS_DomainNameStatus">DomainNameStatus</h2>
<!-- backwards compatibility -->
<a id="schemadomainnamestatus"></a>
<a id="schema_DomainNameStatus"></a>
<a id="tocSdomainnamestatus"></a>
<a id="tocsdomainnamestatus"></a>

```json
"AVAILABLE"
```

<h2 id="tocS_MutualTlsAuthentication">MutualTlsAuthentication</h2>
<!-- backwards compatibility -->
<a id="schemamutualtlsauthentication"></a>
<a id="schema_MutualTlsAuthentication"></a>
<a id="tocSmutualtlsauthentication"></a>
<a id="tocsmutualtlsauthentication"></a>

```json
{
  "truststoreUri": {},
  "truststoreVersion": {},
  "truststoreWarnings": {}
}
```

The mutual TLS authentication configuration for a custom domain name. If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|truststoreUri|object|false|none|none|
|truststoreVersion|object|false|none|none|
|truststoreWarnings|object|false|none|none|

<h2 id="tocS_ListOfDomainName">ListOfDomainName</h2>
<!-- backwards compatibility -->
<a id="schemalistofdomainname"></a>
<a id="schema_ListOfDomainName"></a>
<a id="tocSlistofdomainname"></a>
<a id="tocslistofdomainname"></a>

```json
[
  {
    "domainName": {},
    "certificateName": {},
    "certificateArn": {},
    "certificateUploadDate": {},
    "regionalDomainName": {},
    "regionalHostedZoneId": {},
    "regionalCertificateName": {},
    "regionalCertificateArn": {},
    "distributionDomainName": {},
    "distributionHostedZoneId": {},
    "endpointConfiguration": {
      "types": {},
      "vpcEndpointIds": {}
    },
    "domainNameStatus": {},
    "domainNameStatusMessage": {},
    "securityPolicy": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "mutualTlsAuthentication": {
      "truststoreUri": {},
      "truststoreVersion": {},
      "truststoreWarnings": {}
    },
    "ownershipVerificationCertificateArn": {}
  }
]
```

<h2 id="tocS_EndpointType">EndpointType</h2>
<!-- backwards compatibility -->
<a id="schemaendpointtype"></a>
<a id="schema_EndpointType"></a>
<a id="tocSendpointtype"></a>
<a id="tocsendpointtype"></a>

```json
"REGIONAL"
```

The endpoint type. The valid values are <code>EDGE</code> for edge-optimized API setup, most suitable for mobile applications; <code>REGIONAL</code> for regional API endpoint setup, most suitable for calling from AWS Region; and <code>PRIVATE</code> for private APIs.

<h2 id="tocS_FlushStageAuthorizersCacheRequest">FlushStageAuthorizersCacheRequest</h2>
<!-- backwards compatibility -->
<a id="schemaflushstageauthorizerscacherequest"></a>
<a id="schema_FlushStageAuthorizersCacheRequest"></a>
<a id="tocSflushstageauthorizerscacherequest"></a>
<a id="tocsflushstageauthorizerscacherequest"></a>

```json
{}
```

Request to flush authorizer cache entries on a specified stage.

<h2 id="tocS_FlushStageCacheRequest">FlushStageCacheRequest</h2>
<!-- backwards compatibility -->
<a id="schemaflushstagecacherequest"></a>
<a id="schema_FlushStageCacheRequest"></a>
<a id="tocSflushstagecacherequest"></a>
<a id="tocsflushstagecacherequest"></a>

```json
{}
```

Requests API Gateway to flush a stage's cache.

<h2 id="tocS_ListOfGatewayResponse">ListOfGatewayResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistofgatewayresponse"></a>
<a id="schema_ListOfGatewayResponse"></a>
<a id="tocSlistofgatewayresponse"></a>
<a id="tocslistofgatewayresponse"></a>

```json
[
  {
    "responseType": {},
    "statusCode": {},
    "responseParameters": {
      "property1": "string",
      "property2": "string"
    },
    "responseTemplates": {
      "property1": "string",
      "property2": "string"
    },
    "defaultResponse": {}
  }
]
```

<h2 id="tocS_GenerateClientCertificateRequest">GenerateClientCertificateRequest</h2>
<!-- backwards compatibility -->
<a id="schemagenerateclientcertificaterequest"></a>
<a id="schema_GenerateClientCertificateRequest"></a>
<a id="tocSgenerateclientcertificaterequest"></a>
<a id="tocsgenerateclientcertificaterequest"></a>

```json
{
  "description": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

A request to generate a ClientCertificate resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_GetAccountRequest">GetAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetaccountrequest"></a>
<a id="schema_GetAccountRequest"></a>
<a id="tocSgetaccountrequest"></a>
<a id="tocsgetaccountrequest"></a>

```json
{}
```

Requests API Gateway to get information about the current Account resource.

<h2 id="tocS_GetApiKeyRequest">GetApiKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetapikeyrequest"></a>
<a id="schema_GetApiKeyRequest"></a>
<a id="tocSgetapikeyrequest"></a>
<a id="tocsgetapikeyrequest"></a>

```json
{}
```

A request to get information about the current ApiKey resource.

<h2 id="tocS_GetApiKeysRequest">GetApiKeysRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetapikeysrequest"></a>
<a id="schema_GetApiKeysRequest"></a>
<a id="tocSgetapikeysrequest"></a>
<a id="tocsgetapikeysrequest"></a>

```json
{}
```

A request to get information about the current ApiKeys resource.

<h2 id="tocS_GetAuthorizerRequest">GetAuthorizerRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetauthorizerrequest"></a>
<a id="schema_GetAuthorizerRequest"></a>
<a id="tocSgetauthorizerrequest"></a>
<a id="tocsgetauthorizerrequest"></a>

```json
{}
```

Request to describe an existing Authorizer resource.

<h2 id="tocS_GetAuthorizersRequest">GetAuthorizersRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetauthorizersrequest"></a>
<a id="schema_GetAuthorizersRequest"></a>
<a id="tocSgetauthorizersrequest"></a>
<a id="tocsgetauthorizersrequest"></a>

```json
{}
```

Request to describe an existing Authorizers resource.

<h2 id="tocS_GetBasePathMappingRequest">GetBasePathMappingRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbasepathmappingrequest"></a>
<a id="schema_GetBasePathMappingRequest"></a>
<a id="tocSgetbasepathmappingrequest"></a>
<a id="tocsgetbasepathmappingrequest"></a>

```json
{}
```

Request to describe a BasePathMapping resource.

<h2 id="tocS_GetBasePathMappingsRequest">GetBasePathMappingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbasepathmappingsrequest"></a>
<a id="schema_GetBasePathMappingsRequest"></a>
<a id="tocSgetbasepathmappingsrequest"></a>
<a id="tocsgetbasepathmappingsrequest"></a>

```json
{}
```

A request to get information about a collection of BasePathMapping resources.

<h2 id="tocS_GetClientCertificateRequest">GetClientCertificateRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetclientcertificaterequest"></a>
<a id="schema_GetClientCertificateRequest"></a>
<a id="tocSgetclientcertificaterequest"></a>
<a id="tocsgetclientcertificaterequest"></a>

```json
{}
```

A request to get information about the current ClientCertificate resource.

<h2 id="tocS_GetClientCertificatesRequest">GetClientCertificatesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetclientcertificatesrequest"></a>
<a id="schema_GetClientCertificatesRequest"></a>
<a id="tocSgetclientcertificatesrequest"></a>
<a id="tocsgetclientcertificatesrequest"></a>

```json
{}
```

A request to get information about a collection of ClientCertificate resources.

<h2 id="tocS_GetDeploymentRequest">GetDeploymentRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdeploymentrequest"></a>
<a id="schema_GetDeploymentRequest"></a>
<a id="tocSgetdeploymentrequest"></a>
<a id="tocsgetdeploymentrequest"></a>

```json
{}
```

Requests API Gateway to get information about a Deployment resource.

<h2 id="tocS_GetDeploymentsRequest">GetDeploymentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdeploymentsrequest"></a>
<a id="schema_GetDeploymentsRequest"></a>
<a id="tocSgetdeploymentsrequest"></a>
<a id="tocsgetdeploymentsrequest"></a>

```json
{}
```

Requests API Gateway to get information about a Deployments collection.

<h2 id="tocS_GetDocumentationPartRequest">GetDocumentationPartRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdocumentationpartrequest"></a>
<a id="schema_GetDocumentationPartRequest"></a>
<a id="tocSgetdocumentationpartrequest"></a>
<a id="tocsgetdocumentationpartrequest"></a>

```json
{}
```

Gets a specified documentation part of a given API.

<h2 id="tocS_LocationStatusType">LocationStatusType</h2>
<!-- backwards compatibility -->
<a id="schemalocationstatustype"></a>
<a id="schema_LocationStatusType"></a>
<a id="tocSlocationstatustype"></a>
<a id="tocslocationstatustype"></a>

```json
"DOCUMENTED"
```

<h2 id="tocS_GetDocumentationPartsRequest">GetDocumentationPartsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdocumentationpartsrequest"></a>
<a id="schema_GetDocumentationPartsRequest"></a>
<a id="tocSgetdocumentationpartsrequest"></a>
<a id="tocsgetdocumentationpartsrequest"></a>

```json
{}
```

Gets the documentation parts of an API. The result may be filtered by the type, name, or path of API entities (targets).

<h2 id="tocS_GetDocumentationVersionRequest">GetDocumentationVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdocumentationversionrequest"></a>
<a id="schema_GetDocumentationVersionRequest"></a>
<a id="tocSgetdocumentationversionrequest"></a>
<a id="tocsgetdocumentationversionrequest"></a>

```json
{}
```

Gets a documentation snapshot of an API.

<h2 id="tocS_GetDocumentationVersionsRequest">GetDocumentationVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdocumentationversionsrequest"></a>
<a id="schema_GetDocumentationVersionsRequest"></a>
<a id="tocSgetdocumentationversionsrequest"></a>
<a id="tocsgetdocumentationversionsrequest"></a>

```json
{}
```

Gets the documentation versions of an API.

<h2 id="tocS_GetDomainNameRequest">GetDomainNameRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdomainnamerequest"></a>
<a id="schema_GetDomainNameRequest"></a>
<a id="tocSgetdomainnamerequest"></a>
<a id="tocsgetdomainnamerequest"></a>

```json
{}
```

Request to get the name of a DomainName resource.

<h2 id="tocS_GetDomainNamesRequest">GetDomainNamesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdomainnamesrequest"></a>
<a id="schema_GetDomainNamesRequest"></a>
<a id="tocSgetdomainnamesrequest"></a>
<a id="tocsgetdomainnamesrequest"></a>

```json
{}
```

Request to describe a collection of DomainName resources.

<h2 id="tocS_GetExportRequest">GetExportRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetexportrequest"></a>
<a id="schema_GetExportRequest"></a>
<a id="tocSgetexportrequest"></a>
<a id="tocsgetexportrequest"></a>

```json
{}
```

Request a new export of a RestApi for a particular Stage.

<h2 id="tocS_GetGatewayResponseRequest">GetGatewayResponseRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetgatewayresponserequest"></a>
<a id="schema_GetGatewayResponseRequest"></a>
<a id="tocSgetgatewayresponserequest"></a>
<a id="tocsgetgatewayresponserequest"></a>

```json
{}
```

Gets a GatewayResponse of a specified response type on the given RestApi.

<h2 id="tocS_GetGatewayResponsesRequest">GetGatewayResponsesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetgatewayresponsesrequest"></a>
<a id="schema_GetGatewayResponsesRequest"></a>
<a id="tocSgetgatewayresponsesrequest"></a>
<a id="tocsgetgatewayresponsesrequest"></a>

```json
{}
```

Gets the GatewayResponses collection on the given RestApi. If an API developer has not added any definitions for gateway responses, the result will be the API Gateway-generated default GatewayResponses collection for the supported response types.

<h2 id="tocS_GetIntegrationRequest">GetIntegrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetintegrationrequest"></a>
<a id="schema_GetIntegrationRequest"></a>
<a id="tocSgetintegrationrequest"></a>
<a id="tocsgetintegrationrequest"></a>

```json
{}
```

Represents a request to get the integration configuration.

<h2 id="tocS_GetIntegrationResponseRequest">GetIntegrationResponseRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetintegrationresponserequest"></a>
<a id="schema_GetIntegrationResponseRequest"></a>
<a id="tocSgetintegrationresponserequest"></a>
<a id="tocsgetintegrationresponserequest"></a>

```json
{}
```

Represents a get integration response request.

<h2 id="tocS_GetMethodRequest">GetMethodRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmethodrequest"></a>
<a id="schema_GetMethodRequest"></a>
<a id="tocSgetmethodrequest"></a>
<a id="tocsgetmethodrequest"></a>

```json
{}
```

Request to describe an existing Method resource.

<h2 id="tocS_GetMethodResponseRequest">GetMethodResponseRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmethodresponserequest"></a>
<a id="schema_GetMethodResponseRequest"></a>
<a id="tocSgetmethodresponserequest"></a>
<a id="tocsgetmethodresponserequest"></a>

```json
{}
```

Request to describe a MethodResponse resource.

<h2 id="tocS_GetModelRequest">GetModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmodelrequest"></a>
<a id="schema_GetModelRequest"></a>
<a id="tocSgetmodelrequest"></a>
<a id="tocsgetmodelrequest"></a>

```json
{}
```

Request to list information about a model in an existing RestApi resource.

<h2 id="tocS_GetModelTemplateRequest">GetModelTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmodeltemplaterequest"></a>
<a id="schema_GetModelTemplateRequest"></a>
<a id="tocSgetmodeltemplaterequest"></a>
<a id="tocsgetmodeltemplaterequest"></a>

```json
{}
```

Request to generate a sample mapping template used to transform the payload.

<h2 id="tocS_GetModelsRequest">GetModelsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmodelsrequest"></a>
<a id="schema_GetModelsRequest"></a>
<a id="tocSgetmodelsrequest"></a>
<a id="tocsgetmodelsrequest"></a>

```json
{}
```

Request to list existing Models defined for a RestApi resource.

<h2 id="tocS_GetRequestValidatorRequest">GetRequestValidatorRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrequestvalidatorrequest"></a>
<a id="schema_GetRequestValidatorRequest"></a>
<a id="tocSgetrequestvalidatorrequest"></a>
<a id="tocsgetrequestvalidatorrequest"></a>

```json
{}
```

Gets a RequestValidator of a given RestApi.

<h2 id="tocS_GetRequestValidatorsRequest">GetRequestValidatorsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrequestvalidatorsrequest"></a>
<a id="schema_GetRequestValidatorsRequest"></a>
<a id="tocSgetrequestvalidatorsrequest"></a>
<a id="tocsgetrequestvalidatorsrequest"></a>

```json
{}
```

Gets the RequestValidators collection of a given RestApi.

<h2 id="tocS_GetResourceRequest">GetResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcerequest"></a>
<a id="schema_GetResourceRequest"></a>
<a id="tocSgetresourcerequest"></a>
<a id="tocsgetresourcerequest"></a>

```json
{}
```

Request to list information about a resource.

<h2 id="tocS_GetResourcesRequest">GetResourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcesrequest"></a>
<a id="schema_GetResourcesRequest"></a>
<a id="tocSgetresourcesrequest"></a>
<a id="tocsgetresourcesrequest"></a>

```json
{}
```

Request to list information about a collection of resources.

<h2 id="tocS_GetRestApiRequest">GetRestApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrestapirequest"></a>
<a id="schema_GetRestApiRequest"></a>
<a id="tocSgetrestapirequest"></a>
<a id="tocsgetrestapirequest"></a>

```json
{}
```

The GET request to list an existing RestApi defined for your collection.

<h2 id="tocS_GetRestApisRequest">GetRestApisRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrestapisrequest"></a>
<a id="schema_GetRestApisRequest"></a>
<a id="tocSgetrestapisrequest"></a>
<a id="tocsgetrestapisrequest"></a>

```json
{}
```

The GET request to list existing RestApis defined for your collection.

<h2 id="tocS_GetSdkRequest">GetSdkRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsdkrequest"></a>
<a id="schema_GetSdkRequest"></a>
<a id="tocSgetsdkrequest"></a>
<a id="tocsgetsdkrequest"></a>

```json
{}
```

Request a new generated client SDK for a RestApi and Stage.

<h2 id="tocS_GetSdkTypeRequest">GetSdkTypeRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsdktyperequest"></a>
<a id="schema_GetSdkTypeRequest"></a>
<a id="tocSgetsdktyperequest"></a>
<a id="tocsgetsdktyperequest"></a>

```json
{}
```

Get an SdkType instance.

<h2 id="tocS_GetSdkTypesRequest">GetSdkTypesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsdktypesrequest"></a>
<a id="schema_GetSdkTypesRequest"></a>
<a id="tocSgetsdktypesrequest"></a>
<a id="tocsgetsdktypesrequest"></a>

```json
{}
```

Get the SdkTypes collection.

<h2 id="tocS_GetStageRequest">GetStageRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetstagerequest"></a>
<a id="schema_GetStageRequest"></a>
<a id="tocSgetstagerequest"></a>
<a id="tocsgetstagerequest"></a>

```json
{}
```

Requests API Gateway to get information about a Stage resource.

<h2 id="tocS_GetStagesRequest">GetStagesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetstagesrequest"></a>
<a id="schema_GetStagesRequest"></a>
<a id="tocSgetstagesrequest"></a>
<a id="tocsgetstagesrequest"></a>

```json
{}
```

Requests API Gateway to get information about one or more Stage resources.

<h2 id="tocS_GetTagsRequest">GetTagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagettagsrequest"></a>
<a id="schema_GetTagsRequest"></a>
<a id="tocSgettagsrequest"></a>
<a id="tocsgettagsrequest"></a>

```json
{}
```

Gets the Tags collection for a given resource.

<h2 id="tocS_GetUsagePlanKeyRequest">GetUsagePlanKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetusageplankeyrequest"></a>
<a id="schema_GetUsagePlanKeyRequest"></a>
<a id="tocSgetusageplankeyrequest"></a>
<a id="tocsgetusageplankeyrequest"></a>

```json
{}
```

The GET request to get a usage plan key of a given key identifier.

<h2 id="tocS_GetUsagePlanKeysRequest">GetUsagePlanKeysRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetusageplankeysrequest"></a>
<a id="schema_GetUsagePlanKeysRequest"></a>
<a id="tocSgetusageplankeysrequest"></a>
<a id="tocsgetusageplankeysrequest"></a>

```json
{}
```

The GET request to get all the usage plan keys representing the API keys added to a specified usage plan.

<h2 id="tocS_GetUsagePlanRequest">GetUsagePlanRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetusageplanrequest"></a>
<a id="schema_GetUsagePlanRequest"></a>
<a id="tocSgetusageplanrequest"></a>
<a id="tocsgetusageplanrequest"></a>

```json
{}
```

The GET request to get a usage plan of a given plan identifier.

<h2 id="tocS_GetUsagePlansRequest">GetUsagePlansRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetusageplansrequest"></a>
<a id="schema_GetUsagePlansRequest"></a>
<a id="tocSgetusageplansrequest"></a>
<a id="tocsgetusageplansrequest"></a>

```json
{}
```

The GET request to get all the usage plans of the caller's account.

<h2 id="tocS_GetUsageRequest">GetUsageRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetusagerequest"></a>
<a id="schema_GetUsageRequest"></a>
<a id="tocSgetusagerequest"></a>
<a id="tocsgetusagerequest"></a>

```json
{}
```

The GET request to get the usage data of a usage plan in a specified time interval.

<h2 id="tocS_GetVpcLinkRequest">GetVpcLinkRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetvpclinkrequest"></a>
<a id="schema_GetVpcLinkRequest"></a>
<a id="tocSgetvpclinkrequest"></a>
<a id="tocsgetvpclinkrequest"></a>

```json
{}
```

Gets a specified VPC link under the caller's account in a region.

<h2 id="tocS_GetVpcLinksRequest">GetVpcLinksRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetvpclinksrequest"></a>
<a id="schema_GetVpcLinksRequest"></a>
<a id="tocSgetvpclinksrequest"></a>
<a id="tocsgetvpclinksrequest"></a>

```json
{}
```

Gets the VpcLinks collection under the caller's account in a selected region.

<h2 id="tocS_ImportApiKeysRequest">ImportApiKeysRequest</h2>
<!-- backwards compatibility -->
<a id="schemaimportapikeysrequest"></a>
<a id="schema_ImportApiKeysRequest"></a>
<a id="tocSimportapikeysrequest"></a>
<a id="tocsimportapikeysrequest"></a>

```json
{
  "body": {}
}
```

The POST request to import API keys from an external source, such as a CSV-formatted file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|object|true|none|none|

<h2 id="tocS_PutMode">PutMode</h2>
<!-- backwards compatibility -->
<a id="schemaputmode"></a>
<a id="schema_PutMode"></a>
<a id="tocSputmode"></a>
<a id="tocsputmode"></a>

```json
"merge"
```

<h2 id="tocS_ImportDocumentationPartsRequest">ImportDocumentationPartsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaimportdocumentationpartsrequest"></a>
<a id="schema_ImportDocumentationPartsRequest"></a>
<a id="tocSimportdocumentationpartsrequest"></a>
<a id="tocsimportdocumentationpartsrequest"></a>

```json
{
  "body": {}
}
```

Import documentation parts from an external (e.g., OpenAPI) definition file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|object|true|none|none|

<h2 id="tocS_ImportRestApiRequest">ImportRestApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemaimportrestapirequest"></a>
<a id="schema_ImportRestApiRequest"></a>
<a id="tocSimportrestapirequest"></a>
<a id="tocsimportrestapirequest"></a>

```json
{
  "body": {}
}
```

A POST request to import an API to API Gateway using an input of an API definition file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|object|true|none|none|

<h2 id="tocS_IntegrationType">IntegrationType</h2>
<!-- backwards compatibility -->
<a id="schemaintegrationtype"></a>
<a id="schema_IntegrationType"></a>
<a id="tocSintegrationtype"></a>
<a id="tocsintegrationtype"></a>

```json
"HTTP"
```

The integration type. The valid value is <code>HTTP</code> for integrating an API method with an HTTP backend; <code>AWS</code> with any AWS service endpoints; <code>MOCK</code> for testing without actually invoking the backend; <code>HTTP_PROXY</code> for integrating with the HTTP proxy integration; <code>AWS_PROXY</code> for integrating with the Lambda proxy integration.

<h2 id="tocS_MapOfIntegrationResponse">MapOfIntegrationResponse</h2>
<!-- backwards compatibility -->
<a id="schemamapofintegrationresponse"></a>
<a id="schema_MapOfIntegrationResponse"></a>
<a id="tocSmapofintegrationresponse"></a>
<a id="tocsmapofintegrationresponse"></a>

```json
{
  "property1": {
    "statusCode": {},
    "selectionPattern": {},
    "responseParameters": {
      "property1": "string",
      "property2": "string"
    },
    "responseTemplates": {
      "property1": "string",
      "property2": "string"
    },
    "contentHandling": {}
  },
  "property2": {
    "statusCode": {},
    "selectionPattern": {},
    "responseParameters": {
      "property1": "string",
      "property2": "string"
    },
    "responseTemplates": {
      "property1": "string",
      "property2": "string"
    },
    "contentHandling": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[IntegrationResponse](#schemaintegrationresponse)|false|none|Represents an integration response. The status code must map to an existing MethodResponse, and parameters and templates can be used to transform the back-end response.|

<h2 id="tocS_TlsConfig">TlsConfig</h2>
<!-- backwards compatibility -->
<a id="schematlsconfig"></a>
<a id="schema_TlsConfig"></a>
<a id="tocStlsconfig"></a>
<a id="tocstlsconfig"></a>

```json
{
  "insecureSkipVerification": {}
}
```

Specifies the TLS configuration for an integration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|insecureSkipVerification|object|false|none|none|

<h2 id="tocS_Long">Long</h2>
<!-- backwards compatibility -->
<a id="schemalong"></a>
<a id="schema_Long"></a>
<a id="tocSlong"></a>
<a id="tocslong"></a>

```json
0
```

<h2 id="tocS_ListOfLong">ListOfLong</h2>
<!-- backwards compatibility -->
<a id="schemalistoflong"></a>
<a id="schema_ListOfLong"></a>
<a id="tocSlistoflong"></a>
<a id="tocslistoflong"></a>

```json
[
  0
]
```

<h2 id="tocS_ListOfModel">ListOfModel</h2>
<!-- backwards compatibility -->
<a id="schemalistofmodel"></a>
<a id="schema_ListOfModel"></a>
<a id="tocSlistofmodel"></a>
<a id="tocslistofmodel"></a>

```json
[
  {
    "id": {},
    "name": {},
    "description": {},
    "schema": {},
    "contentType": {}
  }
]
```

<h2 id="tocS_ListOfPatchOperation">ListOfPatchOperation</h2>
<!-- backwards compatibility -->
<a id="schemalistofpatchoperation"></a>
<a id="schema_ListOfPatchOperation"></a>
<a id="tocSlistofpatchoperation"></a>
<a id="tocslistofpatchoperation"></a>

```json
[
  {
    "op": {},
    "path": {},
    "value": {},
    "from": {}
  }
]
```

A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.

<h2 id="tocS_ListOfRequestValidator">ListOfRequestValidator</h2>
<!-- backwards compatibility -->
<a id="schemalistofrequestvalidator"></a>
<a id="schema_ListOfRequestValidator"></a>
<a id="tocSlistofrequestvalidator"></a>
<a id="tocslistofrequestvalidator"></a>

```json
[
  {
    "id": {},
    "name": {},
    "validateRequestBody": {},
    "validateRequestParameters": {}
  }
]
```

<h2 id="tocS_ListOfResource">ListOfResource</h2>
<!-- backwards compatibility -->
<a id="schemalistofresource"></a>
<a id="schema_ListOfResource"></a>
<a id="tocSlistofresource"></a>
<a id="tocslistofresource"></a>

```json
[
  {
    "id": {},
    "parentId": {},
    "pathPart": {},
    "path": {},
    "resourceMethods": {
      "property1": {
        "httpMethod": {},
        "authorizationType": {},
        "authorizerId": {},
        "apiKeyRequired": {},
        "requestValidatorId": {},
        "operationName": {},
        "requestParameters": {
          "property1": true,
          "property2": true
        },
        "requestModels": {
          "property1": "string",
          "property2": "string"
        },
        "methodResponses": {
          "property1": {
            "statusCode": {},
            "responseParameters": {
              "property1": true,
              "property2": true
            },
            "responseModels": {
              "property1": "string",
              "property2": "string"
            }
          },
          "property2": {
            "statusCode": {},
            "responseParameters": {
              "property1": true,
              "property2": true
            },
            "responseModels": {
              "property1": "string",
              "property2": "string"
            }
          }
        },
        "methodIntegration": {
          "type": {},
          "httpMethod": {},
          "uri": {},
          "connectionType": {},
          "connectionId": {},
          "credentials": {},
          "requestParameters": {
            "property1": "string",
            "property2": "string"
          },
          "requestTemplates": {
            "property1": "string",
            "property2": "string"
          },
          "passthroughBehavior": {},
          "contentHandling": {},
          "timeoutInMillis": {},
          "cacheNamespace": {},
          "cacheKeyParameters": {},
          "integrationResponses": {
            "property1": {
              "statusCode": {},
              "selectionPattern": {},
              "responseParameters": {
                "property1": "string",
                "property2": "string"
              },
              "responseTemplates": {
                "property1": "string",
                "property2": "string"
              },
              "contentHandling": {}
            },
            "property2": {
              "statusCode": {},
              "selectionPattern": {},
              "responseParameters": {
                "property1": "string",
                "property2": "string"
              },
              "responseTemplates": {
                "property1": "string",
                "property2": "string"
              },
              "contentHandling": {}
            }
          },
          "tlsConfig": {
            "insecureSkipVerification": {}
          }
        },
        "authorizationScopes": {}
      },
      "property2": {
        "httpMethod": {},
        "authorizationType": {},
        "authorizerId": {},
        "apiKeyRequired": {},
        "requestValidatorId": {},
        "operationName": {},
        "requestParameters": {
          "property1": true,
          "property2": true
        },
        "requestModels": {
          "property1": "string",
          "property2": "string"
        },
        "methodResponses": {
          "property1": {
            "statusCode": {},
            "responseParameters": {
              "property1": true,
              "property2": true
            },
            "responseModels": {
              "property1": "string",
              "property2": "string"
            }
          },
          "property2": {
            "statusCode": {},
            "responseParameters": {
              "property1": true,
              "property2": true
            },
            "responseModels": {
              "property1": "string",
              "property2": "string"
            }
          }
        },
        "methodIntegration": {
          "type": {},
          "httpMethod": {},
          "uri": {},
          "connectionType": {},
          "connectionId": {},
          "credentials": {},
          "requestParameters": {
            "property1": "string",
            "property2": "string"
          },
          "requestTemplates": {
            "property1": "string",
            "property2": "string"
          },
          "passthroughBehavior": {},
          "contentHandling": {},
          "timeoutInMillis": {},
          "cacheNamespace": {},
          "cacheKeyParameters": {},
          "integrationResponses": {
            "property1": {
              "statusCode": {},
              "selectionPattern": {},
              "responseParameters": {
                "property1": "string",
                "property2": "string"
              },
              "responseTemplates": {
                "property1": "string",
                "property2": "string"
              },
              "contentHandling": {}
            },
            "property2": {
              "statusCode": {},
              "selectionPattern": {},
              "responseParameters": {
                "property1": "string",
                "property2": "string"
              },
              "responseTemplates": {
                "property1": "string",
                "property2": "string"
              },
              "contentHandling": {}
            }
          },
          "tlsConfig": {
            "insecureSkipVerification": {}
          }
        },
        "authorizationScopes": {}
      }
    }
  }
]
```

<h2 id="tocS_ListOfRestApi">ListOfRestApi</h2>
<!-- backwards compatibility -->
<a id="schemalistofrestapi"></a>
<a id="schema_ListOfRestApi"></a>
<a id="tocSlistofrestapi"></a>
<a id="tocslistofrestapi"></a>

```json
[
  {
    "id": {},
    "name": {},
    "description": {},
    "createdDate": {},
    "version": {},
    "warnings": {},
    "binaryMediaTypes": {},
    "minimumCompressionSize": {},
    "apiKeySource": {},
    "endpointConfiguration": {
      "types": {},
      "vpcEndpointIds": {}
    },
    "policy": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "disableExecuteApiEndpoint": {}
  }
]
```

<h2 id="tocS_SdkConfigurationProperty">SdkConfigurationProperty</h2>
<!-- backwards compatibility -->
<a id="schemasdkconfigurationproperty"></a>
<a id="schema_SdkConfigurationProperty"></a>
<a id="tocSsdkconfigurationproperty"></a>
<a id="tocssdkconfigurationproperty"></a>

```json
{
  "name": {},
  "friendlyName": {},
  "description": {},
  "required": {},
  "defaultValue": {}
}
```

A configuration property of an SDK type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|friendlyName|object|false|none|none|
|description|object|false|none|none|
|required|object|false|none|none|
|defaultValue|object|false|none|none|

<h2 id="tocS_ListOfSdkConfigurationProperty">ListOfSdkConfigurationProperty</h2>
<!-- backwards compatibility -->
<a id="schemalistofsdkconfigurationproperty"></a>
<a id="schema_ListOfSdkConfigurationProperty"></a>
<a id="tocSlistofsdkconfigurationproperty"></a>
<a id="tocslistofsdkconfigurationproperty"></a>

```json
[
  {
    "name": {},
    "friendlyName": {},
    "description": {},
    "required": {},
    "defaultValue": {}
  }
]
```

<h2 id="tocS_ListOfSdkType">ListOfSdkType</h2>
<!-- backwards compatibility -->
<a id="schemalistofsdktype"></a>
<a id="schema_ListOfSdkType"></a>
<a id="tocSlistofsdktype"></a>
<a id="tocslistofsdktype"></a>

```json
[
  {
    "id": {},
    "friendlyName": {},
    "description": {},
    "configurationProperties": {}
  }
]
```

<h2 id="tocS_ListOfStage">ListOfStage</h2>
<!-- backwards compatibility -->
<a id="schemalistofstage"></a>
<a id="schema_ListOfStage"></a>
<a id="tocSlistofstage"></a>
<a id="tocslistofstage"></a>

```json
[
  {
    "deploymentId": {},
    "clientCertificateId": {},
    "stageName": {},
    "description": {},
    "cacheClusterEnabled": {},
    "cacheClusterSize": {},
    "cacheClusterStatus": {},
    "methodSettings": {
      "property1": {
        "metricsEnabled": {},
        "loggingLevel": {},
        "dataTraceEnabled": {},
        "throttlingBurstLimit": {},
        "throttlingRateLimit": {},
        "cachingEnabled": {},
        "cacheTtlInSeconds": {},
        "cacheDataEncrypted": {},
        "requireAuthorizationForCacheControl": {},
        "unauthorizedCacheControlHeaderStrategy": {}
      },
      "property2": {
        "metricsEnabled": {},
        "loggingLevel": {},
        "dataTraceEnabled": {},
        "throttlingBurstLimit": {},
        "throttlingRateLimit": {},
        "cachingEnabled": {},
        "cacheTtlInSeconds": {},
        "cacheDataEncrypted": {},
        "requireAuthorizationForCacheControl": {},
        "unauthorizedCacheControlHeaderStrategy": {}
      }
    },
    "variables": {
      "property1": "string",
      "property2": "string"
    },
    "documentationVersion": {},
    "accessLogSettings": {
      "format": {},
      "destinationArn": {}
    },
    "canarySettings": {
      "percentTraffic": {},
      "deploymentId": {},
      "stageVariableOverrides": {
        "property1": "string",
        "property2": "string"
      },
      "useStageCache": {}
    },
    "tracingEnabled": {},
    "webAclArn": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "createdDate": {},
    "lastUpdatedDate": {}
  }
]
```

<h2 id="tocS_ListOfUsage">ListOfUsage</h2>
<!-- backwards compatibility -->
<a id="schemalistofusage"></a>
<a id="schema_ListOfUsage"></a>
<a id="tocSlistofusage"></a>
<a id="tocslistofusage"></a>

```json
[
  [
    0
  ]
]
```

<h2 id="tocS_ListOfUsagePlan">ListOfUsagePlan</h2>
<!-- backwards compatibility -->
<a id="schemalistofusageplan"></a>
<a id="schema_ListOfUsagePlan"></a>
<a id="tocSlistofusageplan"></a>
<a id="tocslistofusageplan"></a>

```json
[
  {
    "id": {},
    "name": {},
    "description": {},
    "apiStages": {},
    "throttle": {
      "burstLimit": {},
      "rateLimit": {}
    },
    "quota": {
      "limit": {},
      "offset": {},
      "period": {}
    },
    "productCode": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_ListOfUsagePlanKey">ListOfUsagePlanKey</h2>
<!-- backwards compatibility -->
<a id="schemalistofusageplankey"></a>
<a id="schema_ListOfUsagePlanKey"></a>
<a id="tocSlistofusageplankey"></a>
<a id="tocslistofusageplankey"></a>

```json
[
  {
    "id": {},
    "type": {},
    "value": {},
    "name": {}
  }
]
```

<h2 id="tocS_ListOfVpcLink">ListOfVpcLink</h2>
<!-- backwards compatibility -->
<a id="schemalistofvpclink"></a>
<a id="schema_ListOfVpcLink"></a>
<a id="tocSlistofvpclink"></a>
<a id="tocslistofvpclink"></a>

```json
[
  {
    "id": {},
    "name": {},
    "description": {},
    "targetArns": {},
    "status": {},
    "statusMessage": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_MapOfKeyUsages">MapOfKeyUsages</h2>
<!-- backwards compatibility -->
<a id="schemamapofkeyusages"></a>
<a id="schema_MapOfKeyUsages"></a>
<a id="tocSmapofkeyusages"></a>
<a id="tocsmapofkeyusages"></a>

```json
{
  "property1": [
    [
      0
    ]
  ],
  "property2": [
    [
      0
    ]
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ListOfUsage](#schemalistofusage)|false|none|none|

<h2 id="tocS_MapOfMethod">MapOfMethod</h2>
<!-- backwards compatibility -->
<a id="schemamapofmethod"></a>
<a id="schema_MapOfMethod"></a>
<a id="tocSmapofmethod"></a>
<a id="tocsmapofmethod"></a>

```json
{
  "property1": {
    "httpMethod": {},
    "authorizationType": {},
    "authorizerId": {},
    "apiKeyRequired": {},
    "requestValidatorId": {},
    "operationName": {},
    "requestParameters": {
      "property1": true,
      "property2": true
    },
    "requestModels": {
      "property1": "string",
      "property2": "string"
    },
    "methodResponses": {
      "property1": {
        "statusCode": {},
        "responseParameters": {
          "property1": true,
          "property2": true
        },
        "responseModels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "property2": {
        "statusCode": {},
        "responseParameters": {
          "property1": true,
          "property2": true
        },
        "responseModels": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "methodIntegration": {
      "type": {},
      "httpMethod": {},
      "uri": {},
      "connectionType": {},
      "connectionId": {},
      "credentials": {},
      "requestParameters": {
        "property1": "string",
        "property2": "string"
      },
      "requestTemplates": {
        "property1": "string",
        "property2": "string"
      },
      "passthroughBehavior": {},
      "contentHandling": {},
      "timeoutInMillis": {},
      "cacheNamespace": {},
      "cacheKeyParameters": {},
      "integrationResponses": {
        "property1": {
          "statusCode": {},
          "selectionPattern": {},
          "responseParameters": {
            "property1": "string",
            "property2": "string"
          },
          "responseTemplates": {
            "property1": "string",
            "property2": "string"
          },
          "contentHandling": {}
        },
        "property2": {
          "statusCode": {},
          "selectionPattern": {},
          "responseParameters": {
            "property1": "string",
            "property2": "string"
          },
          "responseTemplates": {
            "property1": "string",
            "property2": "string"
          },
          "contentHandling": {}
        }
      },
      "tlsConfig": {
        "insecureSkipVerification": {}
      }
    },
    "authorizationScopes": {}
  },
  "property2": {
    "httpMethod": {},
    "authorizationType": {},
    "authorizerId": {},
    "apiKeyRequired": {},
    "requestValidatorId": {},
    "operationName": {},
    "requestParameters": {
      "property1": true,
      "property2": true
    },
    "requestModels": {
      "property1": "string",
      "property2": "string"
    },
    "methodResponses": {
      "property1": {
        "statusCode": {},
        "responseParameters": {
          "property1": true,
          "property2": true
        },
        "responseModels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "property2": {
        "statusCode": {},
        "responseParameters": {
          "property1": true,
          "property2": true
        },
        "responseModels": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "methodIntegration": {
      "type": {},
      "httpMethod": {},
      "uri": {},
      "connectionType": {},
      "connectionId": {},
      "credentials": {},
      "requestParameters": {
        "property1": "string",
        "property2": "string"
      },
      "requestTemplates": {
        "property1": "string",
        "property2": "string"
      },
      "passthroughBehavior": {},
      "contentHandling": {},
      "timeoutInMillis": {},
      "cacheNamespace": {},
      "cacheKeyParameters": {},
      "integrationResponses": {
        "property1": {
          "statusCode": {},
          "selectionPattern": {},
          "responseParameters": {
            "property1": "string",
            "property2": "string"
          },
          "responseTemplates": {
            "property1": "string",
            "property2": "string"
          },
          "contentHandling": {}
        },
        "property2": {
          "statusCode": {},
          "selectionPattern": {},
          "responseParameters": {
            "property1": "string",
            "property2": "string"
          },
          "responseTemplates": {
            "property1": "string",
            "property2": "string"
          },
          "contentHandling": {}
        }
      },
      "tlsConfig": {
        "insecureSkipVerification": {}
      }
    },
    "authorizationScopes": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Method](#schemamethod)|false|none| Represents a client-facing interface by which the client calls the API to access back-end resources. A Method resource is integrated with an Integration resource. Both consist of a request and one or more responses. The method request takes the client input that is passed to the back end through the integration request. A method response returns the output from the back end to the client through an integration response. A method request is embodied in a Method resource, whereas an integration request is embodied in an Integration resource. On the other hand, a method response is represented by a MethodResponse resource, whereas an integration response is represented by an IntegrationResponse resource. |

<h2 id="tocS_MapOfMethodResponse">MapOfMethodResponse</h2>
<!-- backwards compatibility -->
<a id="schemamapofmethodresponse"></a>
<a id="schema_MapOfMethodResponse"></a>
<a id="tocSmapofmethodresponse"></a>
<a id="tocsmapofmethodresponse"></a>

```json
{
  "property1": {
    "statusCode": {},
    "responseParameters": {
      "property1": true,
      "property2": true
    },
    "responseModels": {
      "property1": "string",
      "property2": "string"
    }
  },
  "property2": {
    "statusCode": {},
    "responseParameters": {
      "property1": true,
      "property2": true
    },
    "responseModels": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[MethodResponse](#schemamethodresponse)|false|none|Represents a method response of a given HTTP status code returned to the client. The method response is passed from the back end through the associated integration response that can be transformed using a mapping template. |

<h2 id="tocS_MethodSetting">MethodSetting</h2>
<!-- backwards compatibility -->
<a id="schemamethodsetting"></a>
<a id="schema_MethodSetting"></a>
<a id="tocSmethodsetting"></a>
<a id="tocsmethodsetting"></a>

```json
{
  "metricsEnabled": {},
  "loggingLevel": {},
  "dataTraceEnabled": {},
  "throttlingBurstLimit": {},
  "throttlingRateLimit": {},
  "cachingEnabled": {},
  "cacheTtlInSeconds": {},
  "cacheDataEncrypted": {},
  "requireAuthorizationForCacheControl": {},
  "unauthorizedCacheControlHeaderStrategy": {}
}
```

Specifies the method setting properties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metricsEnabled|object|false|none|none|
|loggingLevel|object|false|none|none|
|dataTraceEnabled|object|false|none|none|
|throttlingBurstLimit|object|false|none|none|
|throttlingRateLimit|object|false|none|none|
|cachingEnabled|object|false|none|none|
|cacheTtlInSeconds|object|false|none|none|
|cacheDataEncrypted|object|false|none|none|
|requireAuthorizationForCacheControl|object|false|none|none|
|unauthorizedCacheControlHeaderStrategy|object|false|none|none|

<h2 id="tocS_MapOfMethodSettings">MapOfMethodSettings</h2>
<!-- backwards compatibility -->
<a id="schemamapofmethodsettings"></a>
<a id="schema_MapOfMethodSettings"></a>
<a id="tocSmapofmethodsettings"></a>
<a id="tocsmapofmethodsettings"></a>

```json
{
  "property1": {
    "metricsEnabled": {},
    "loggingLevel": {},
    "dataTraceEnabled": {},
    "throttlingBurstLimit": {},
    "throttlingRateLimit": {},
    "cachingEnabled": {},
    "cacheTtlInSeconds": {},
    "cacheDataEncrypted": {},
    "requireAuthorizationForCacheControl": {},
    "unauthorizedCacheControlHeaderStrategy": {}
  },
  "property2": {
    "metricsEnabled": {},
    "loggingLevel": {},
    "dataTraceEnabled": {},
    "throttlingBurstLimit": {},
    "throttlingRateLimit": {},
    "cachingEnabled": {},
    "cacheTtlInSeconds": {},
    "cacheDataEncrypted": {},
    "requireAuthorizationForCacheControl": {},
    "unauthorizedCacheControlHeaderStrategy": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[MethodSetting](#schemamethodsetting)|false|none|Specifies the method setting properties.|

<h2 id="tocS_MethodSnapshot">MethodSnapshot</h2>
<!-- backwards compatibility -->
<a id="schemamethodsnapshot"></a>
<a id="schema_MethodSnapshot"></a>
<a id="tocSmethodsnapshot"></a>
<a id="tocsmethodsnapshot"></a>

```json
{
  "authorizationType": {},
  "apiKeyRequired": {}
}
```

Represents a summary of a Method resource, given a particular date and time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorizationType|object|false|none|none|
|apiKeyRequired|object|false|none|none|

<h2 id="tocS_MapOfMethodSnapshot">MapOfMethodSnapshot</h2>
<!-- backwards compatibility -->
<a id="schemamapofmethodsnapshot"></a>
<a id="schema_MapOfMethodSnapshot"></a>
<a id="tocSmapofmethodsnapshot"></a>
<a id="tocsmapofmethodsnapshot"></a>

```json
{
  "property1": {
    "authorizationType": {},
    "apiKeyRequired": {}
  },
  "property2": {
    "authorizationType": {},
    "apiKeyRequired": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[MethodSnapshot](#schemamethodsnapshot)|false|none|Represents a summary of a Method resource, given a particular date and time.|

<h2 id="tocS_MapOfStringToBoolean">MapOfStringToBoolean</h2>
<!-- backwards compatibility -->
<a id="schemamapofstringtoboolean"></a>
<a id="schema_MapOfStringToBoolean"></a>
<a id="tocSmapofstringtoboolean"></a>
<a id="tocsmapofstringtoboolean"></a>

```json
{
  "property1": true,
  "property2": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[NullableBoolean](#schemanullableboolean)|false|none|none|

<h2 id="tocS_MapOfStringToList">MapOfStringToList</h2>
<!-- backwards compatibility -->
<a id="schemamapofstringtolist"></a>
<a id="schema_MapOfStringToList"></a>
<a id="tocSmapofstringtolist"></a>
<a id="tocsmapofstringtolist"></a>

```json
{
  "property1": [
    "string"
  ],
  "property2": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ListOfString](#schemalistofstring)|false|none|none|

<h2 id="tocS_UnauthorizedCacheControlHeaderStrategy">UnauthorizedCacheControlHeaderStrategy</h2>
<!-- backwards compatibility -->
<a id="schemaunauthorizedcachecontrolheaderstrategy"></a>
<a id="schema_UnauthorizedCacheControlHeaderStrategy"></a>
<a id="tocSunauthorizedcachecontrolheaderstrategy"></a>
<a id="tocsunauthorizedcachecontrolheaderstrategy"></a>

```json
"FAIL_WITH_403"
```

<h2 id="tocS_Op">Op</h2>
<!-- backwards compatibility -->
<a id="schemaop"></a>
<a id="schema_Op"></a>
<a id="tocSop"></a>
<a id="tocsop"></a>

```json
"add"
```

<h2 id="tocS_PutGatewayResponseRequest">PutGatewayResponseRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputgatewayresponserequest"></a>
<a id="schema_PutGatewayResponseRequest"></a>
<a id="tocSputgatewayresponserequest"></a>
<a id="tocsputgatewayresponserequest"></a>

```json
{
  "statusCode": {},
  "responseParameters": {
    "property1": "string",
    "property2": "string"
  },
  "responseTemplates": {
    "property1": "string",
    "property2": "string"
  }
}
```

Creates a customization of a GatewayResponse of a specified response type and status code on the given RestApi.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|object|false|none|none|
|responseParameters|object|false|none|none|
|responseTemplates|object|false|none|none|

<h2 id="tocS_PutIntegrationRequest">PutIntegrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputintegrationrequest"></a>
<a id="schema_PutIntegrationRequest"></a>
<a id="tocSputintegrationrequest"></a>
<a id="tocsputintegrationrequest"></a>

```json
{
  "type": {},
  "integrationHttpMethod": {},
  "uri": {},
  "connectionType": {},
  "connectionId": {},
  "credentials": {},
  "requestParameters": {
    "property1": "string",
    "property2": "string"
  },
  "requestTemplates": {
    "property1": "string",
    "property2": "string"
  },
  "passthroughBehavior": {},
  "cacheNamespace": {},
  "cacheKeyParameters": {},
  "contentHandling": {},
  "timeoutInMillis": {},
  "tlsConfig": {
    "insecureSkipVerification": {}
  }
}
```

Sets up a method's integration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|true|none|none|
|integrationHttpMethod|object|false|none|none|
|uri|object|false|none|none|
|connectionType|object|false|none|none|
|connectionId|object|false|none|none|
|credentials|object|false|none|none|
|requestParameters|object|false|none|none|
|requestTemplates|object|false|none|none|
|passthroughBehavior|object|false|none|none|
|cacheNamespace|object|false|none|none|
|cacheKeyParameters|object|false|none|none|
|contentHandling|object|false|none|none|
|timeoutInMillis|object|false|none|none|
|tlsConfig|[TlsConfig](#schematlsconfig)|false|none|Specifies the TLS configuration for an integration.|

<h2 id="tocS_PutIntegrationResponseRequest">PutIntegrationResponseRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputintegrationresponserequest"></a>
<a id="schema_PutIntegrationResponseRequest"></a>
<a id="tocSputintegrationresponserequest"></a>
<a id="tocsputintegrationresponserequest"></a>

```json
{
  "selectionPattern": {},
  "responseParameters": {
    "property1": "string",
    "property2": "string"
  },
  "responseTemplates": {
    "property1": "string",
    "property2": "string"
  },
  "contentHandling": {}
}
```

Represents a put integration response request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|selectionPattern|object|false|none|none|
|responseParameters|object|false|none|none|
|responseTemplates|object|false|none|none|
|contentHandling|object|false|none|none|

<h2 id="tocS_PutMethodRequest">PutMethodRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputmethodrequest"></a>
<a id="schema_PutMethodRequest"></a>
<a id="tocSputmethodrequest"></a>
<a id="tocsputmethodrequest"></a>

```json
{
  "authorizationType": {},
  "authorizerId": {},
  "apiKeyRequired": {},
  "operationName": {},
  "requestParameters": {
    "property1": true,
    "property2": true
  },
  "requestModels": {
    "property1": "string",
    "property2": "string"
  },
  "requestValidatorId": {},
  "authorizationScopes": {}
}
```

Request to add a method to an existing Resource resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorizationType|object|true|none|none|
|authorizerId|object|false|none|none|
|apiKeyRequired|object|false|none|none|
|operationName|object|false|none|none|
|requestParameters|object|false|none|none|
|requestModels|object|false|none|none|
|requestValidatorId|object|false|none|none|
|authorizationScopes|object|false|none|none|

<h2 id="tocS_PutMethodResponseRequest">PutMethodResponseRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputmethodresponserequest"></a>
<a id="schema_PutMethodResponseRequest"></a>
<a id="tocSputmethodresponserequest"></a>
<a id="tocsputmethodresponserequest"></a>

```json
{
  "responseParameters": {
    "property1": true,
    "property2": true
  },
  "responseModels": {
    "property1": "string",
    "property2": "string"
  }
}
```

Request to add a MethodResponse to an existing Method resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|responseParameters|object|false|none|none|
|responseModels|object|false|none|none|

<h2 id="tocS_PutRestApiRequest">PutRestApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputrestapirequest"></a>
<a id="schema_PutRestApiRequest"></a>
<a id="tocSputrestapirequest"></a>
<a id="tocsputrestapirequest"></a>

```json
{
  "body": {}
}
```

A PUT request to update an existing API, with external API definitions specified as the request body.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|object|true|none|none|

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Adds or updates a tag on a given resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|true|none|none|

<h2 id="tocS_TestInvokeAuthorizerRequest">TestInvokeAuthorizerRequest</h2>
<!-- backwards compatibility -->
<a id="schematestinvokeauthorizerrequest"></a>
<a id="schema_TestInvokeAuthorizerRequest"></a>
<a id="tocStestinvokeauthorizerrequest"></a>
<a id="tocstestinvokeauthorizerrequest"></a>

```json
{
  "headers": {
    "property1": "string",
    "property2": "string"
  },
  "multiValueHeaders": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "pathWithQueryString": {},
  "body": {},
  "stageVariables": {
    "property1": "string",
    "property2": "string"
  },
  "additionalContext": {
    "property1": "string",
    "property2": "string"
  }
}
```

Make a request to simulate the invocation of an Authorizer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|headers|object|false|none|none|
|multiValueHeaders|object|false|none|none|
|pathWithQueryString|object|false|none|none|
|body|object|false|none|none|
|stageVariables|object|false|none|none|
|additionalContext|object|false|none|none|

<h2 id="tocS_TestInvokeMethodRequest">TestInvokeMethodRequest</h2>
<!-- backwards compatibility -->
<a id="schematestinvokemethodrequest"></a>
<a id="schema_TestInvokeMethodRequest"></a>
<a id="tocStestinvokemethodrequest"></a>
<a id="tocstestinvokemethodrequest"></a>

```json
{
  "pathWithQueryString": {},
  "body": {},
  "headers": {
    "property1": "string",
    "property2": "string"
  },
  "multiValueHeaders": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "clientCertificateId": {},
  "stageVariables": {
    "property1": "string",
    "property2": "string"
  }
}
```

Make a request to simulate the invocation of a Method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pathWithQueryString|object|false|none|none|
|body|object|false|none|none|
|headers|object|false|none|none|
|multiValueHeaders|object|false|none|none|
|clientCertificateId|object|false|none|none|
|stageVariables|object|false|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

Removes a tag from a given resource.

<h2 id="tocS_UpdateAccountRequest">UpdateAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateaccountrequest"></a>
<a id="schema_UpdateAccountRequest"></a>
<a id="tocSupdateaccountrequest"></a>
<a id="tocsupdateaccountrequest"></a>

```json
{
  "patchOperations": {}
}
```

Requests API Gateway to change information about the current Account resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|patchOperations|object|false|none|none|

<h2 id="tocS_UpdateApiKeyRequest">UpdateApiKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapikeyrequest"></a>
<a id="schema_UpdateApiKeyRequest"></a>
<a id="tocSupdateapikeyrequest"></a>
<a id="tocsupdateapikeyrequest"></a>

```json
{
  "patchOperations": {}
}
```

A request to change information about an ApiKey resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|patchOperations|object|false|none|none|

<h2 id="tocS_UpdateAuthorizerRequest">UpdateAuthorizerRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateauthorizerrequest"></a>
<a id="schema_UpdateAuthorizerRequest"></a>
<a id="tocSupdateauthorizerrequest"></a>
<a id="tocsupdateauthorizerrequest"></a>

```json
{
  "patchOperations": {}
}
```

Request to update an existing Authorizer resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|patchOperations|object|false|none|none|

<h2 id="tocS_UpdateBasePathMappingRequest">UpdateBasePathMappingRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebasepathmappingrequest"></a>
<a id="schema_UpdateBasePathMappingRequest"></a>
<a id="tocSupdatebasepathmappingrequest"></a>
<a id="tocsupdatebasepathmappingrequest"></a>

```json
{
  "patchOperations": {}
}
```

A request to change information about the BasePathMapping resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|patchOperations|object|false|none|none|

<h2 id="tocS_UpdateClientCertificateRequest">UpdateClientCertificateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateclientcertificaterequest"></a>
<a id="schema_UpdateClientCertificateRequest"></a>
<a id="tocSupdateclientcertificaterequest"></a>
<a id="tocsupdateclientcertificaterequest"></a>

```json
{
  "patchOperations": {}
}
```

A request to change information about an ClientCertificate resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|patchOperations|object|false|none|none|

<h2 id="tocS_UpdateDeploymentRequest">UpdateDeploymentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedeploymentrequest"></a>
<a id="schema_UpdateDeploymentRequest"></a>
<a id="tocSupdatedeploymentrequest"></a>
<a id="tocsupdatedeploymentrequest"></a>

```json
{
  "patchOperations": {}
}
```

Requests API Gateway to change information about a Deployment resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|patchOperations|object|false|none|none|

<h2 id="tocS_UpdateDocumentationPartRequest">UpdateDocumentationPartRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedocumentationpartrequest"></a>
<a id="schema_UpdateDocumentationPartRequest"></a>
<a id="tocSupdatedocumentationpartrequest"></a>
<a id="tocsupdatedocumentationpartrequest"></a>

```json
{
  "patchOperations": {}
}
```

Updates an existing documentation part of a given API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|patchOperations|object|false|none|none|

<h2 id="tocS_UpdateDocumentationVersionRequest">UpdateDocumentationVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedocumentationversionrequest"></a>
<a id="schema_UpdateDocumentationVersionRequest"></a>
<a id="tocSupdatedocumentationversionrequest"></a>
<a id="tocsupdatedocumentationversionrequest"></a>

```json
{
  "patchOperations": {}
}
```

Updates an existing documentation version of an API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|patchOperations|object|false|none|none|

<h2 id="tocS_UpdateDomainNameRequest">UpdateDomainNameRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedomainnamerequest"></a>
<a id="schema_UpdateDomainNameRequest"></a>
<a id="tocSupdatedomainnamerequest"></a>
<a id="tocsupdatedomainnamerequest"></a>

```json
{
  "patchOperations": {}
}
```

A request to change information about the DomainName resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|patchOperations|object|false|none|none|

<h2 id="tocS_UpdateGatewayResponseRequest">UpdateGatewayResponseRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdategatewayresponserequest"></a>
<a id="schema_UpdateGatewayResponseRequest"></a>
<a id="tocSupdategatewayresponserequest"></a>
<a id="tocsupdategatewayresponserequest"></a>

```json
{
  "patchOperations": {}
}
```

Updates a GatewayResponse of a specified response type on the given RestApi.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|patchOperations|object|false|none|none|

<h2 id="tocS_UpdateIntegrationRequest">UpdateIntegrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateintegrationrequest"></a>
<a id="schema_UpdateIntegrationRequest"></a>
<a id="tocSupdateintegrationrequest"></a>
<a id="tocsupdateintegrationrequest"></a>

```json
{
  "patchOperations": {}
}
```

Represents an update integration request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|patchOperations|object|false|none|none|

<h2 id="tocS_UpdateIntegrationResponseRequest">UpdateIntegrationResponseRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateintegrationresponserequest"></a>
<a id="schema_UpdateIntegrationResponseRequest"></a>
<a id="tocSupdateintegrationresponserequest"></a>
<a id="tocsupdateintegrationresponserequest"></a>

```json
{
  "patchOperations": {}
}
```

Represents an update integration response request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|patchOperations|object|false|none|none|

<h2 id="tocS_UpdateMethodRequest">UpdateMethodRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemethodrequest"></a>
<a id="schema_UpdateMethodRequest"></a>
<a id="tocSupdatemethodrequest"></a>
<a id="tocsupdatemethodrequest"></a>

```json
{
  "patchOperations": {}
}
```

Request to update an existing Method resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|patchOperations|object|false|none|none|

<h2 id="tocS_UpdateMethodResponseRequest">UpdateMethodResponseRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemethodresponserequest"></a>
<a id="schema_UpdateMethodResponseRequest"></a>
<a id="tocSupdatemethodresponserequest"></a>
<a id="tocsupdatemethodresponserequest"></a>

```json
{
  "patchOperations": {}
}
```

A request to update an existing MethodResponse resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|patchOperations|object|false|none|none|

<h2 id="tocS_UpdateModelRequest">UpdateModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemodelrequest"></a>
<a id="schema_UpdateModelRequest"></a>
<a id="tocSupdatemodelrequest"></a>
<a id="tocsupdatemodelrequest"></a>

```json
{
  "patchOperations": {}
}
```

Request to update an existing model in an existing RestApi resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|patchOperations|object|false|none|none|

<h2 id="tocS_UpdateRequestValidatorRequest">UpdateRequestValidatorRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterequestvalidatorrequest"></a>
<a id="schema_UpdateRequestValidatorRequest"></a>
<a id="tocSupdaterequestvalidatorrequest"></a>
<a id="tocsupdaterequestvalidatorrequest"></a>

```json
{
  "patchOperations": {}
}
```

Updates a RequestValidator of a given RestApi.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|patchOperations|object|false|none|none|

<h2 id="tocS_UpdateResourceRequest">UpdateResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresourcerequest"></a>
<a id="schema_UpdateResourceRequest"></a>
<a id="tocSupdateresourcerequest"></a>
<a id="tocsupdateresourcerequest"></a>

```json
{
  "patchOperations": {}
}
```

Request to change information about a Resource resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|patchOperations|object|false|none|none|

<h2 id="tocS_UpdateRestApiRequest">UpdateRestApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterestapirequest"></a>
<a id="schema_UpdateRestApiRequest"></a>
<a id="tocSupdaterestapirequest"></a>
<a id="tocsupdaterestapirequest"></a>

```json
{
  "patchOperations": {}
}
```

Request to update an existing RestApi resource in your collection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|patchOperations|object|false|none|none|

<h2 id="tocS_UpdateStageRequest">UpdateStageRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestagerequest"></a>
<a id="schema_UpdateStageRequest"></a>
<a id="tocSupdatestagerequest"></a>
<a id="tocsupdatestagerequest"></a>

```json
{
  "patchOperations": {}
}
```

Requests API Gateway to change information about a Stage resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|patchOperations|object|false|none|none|

<h2 id="tocS_UpdateUsagePlanRequest">UpdateUsagePlanRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateusageplanrequest"></a>
<a id="schema_UpdateUsagePlanRequest"></a>
<a id="tocSupdateusageplanrequest"></a>
<a id="tocsupdateusageplanrequest"></a>

```json
{
  "patchOperations": {}
}
```

The PATCH request to update a usage plan of a given plan Id.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|patchOperations|object|false|none|none|

<h2 id="tocS_UpdateUsageRequest">UpdateUsageRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateusagerequest"></a>
<a id="schema_UpdateUsageRequest"></a>
<a id="tocSupdateusagerequest"></a>
<a id="tocsupdateusagerequest"></a>

```json
{
  "patchOperations": {}
}
```

The PATCH request to grant a temporary extension to the remaining quota of a usage plan associated with a specified API key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|patchOperations|object|false|none|none|

<h2 id="tocS_UpdateVpcLinkRequest">UpdateVpcLinkRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevpclinkrequest"></a>
<a id="schema_UpdateVpcLinkRequest"></a>
<a id="tocSupdatevpclinkrequest"></a>
<a id="tocsupdatevpclinkrequest"></a>

```json
{
  "patchOperations": {}
}
```

Updates an existing VpcLink of a specified identifier.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|patchOperations|object|false|none|none|

<h2 id="tocS_VpcLinkStatus">VpcLinkStatus</h2>
<!-- backwards compatibility -->
<a id="schemavpclinkstatus"></a>
<a id="schema_VpcLinkStatus"></a>
<a id="tocSvpclinkstatus"></a>
<a id="tocsvpclinkstatus"></a>

```json
"AVAILABLE"
```
