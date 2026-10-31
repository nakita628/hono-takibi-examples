<h1 id="amazonapigatewayv2">AmazonApiGatewayV2 v2018-11-29</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Amazon API Gateway V2

Base URLs:

* <a href="http://apigateway.us-east-1.amazonaws.com">http://apigateway.us-east-1.amazonaws.com</a> - The AmazonApiGatewayV2 multi-region endpoint

* <a href="https://apigateway.us-east-1.amazonaws.com">https://apigateway.us-east-1.amazonaws.com</a> - The AmazonApiGatewayV2 multi-region endpoint

* <a href="http://apigateway.cn-north-1.amazonaws.com.cn">http://apigateway.cn-north-1.amazonaws.com.cn</a> - The AmazonApiGatewayV2 endpoint for China (Beijing) and China (Ningxia)

* <a href="https://apigateway.cn-north-1.amazonaws.com.cn">https://apigateway.cn-north-1.amazonaws.com.cn</a> - The AmazonApiGatewayV2 endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/apigateway/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazonapigatewayv2-default">Default</h1>

## GetApis

<a id="opIdGetApis"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/apis`

Gets a collection of Api resources.

<h3 id="getapis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|The maximum number of elements to be returned for this resource.|
|nextToken|query|string|false|The next page of elements from this collection. Not valid for the last element of the collection.|
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
  "Items": {},
  "NextToken": {}
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

<h3 id="getapis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetApisResponse](#schemagetapisresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ImportApi

<a id="opIdImportApi"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "body": "string"
  }'
```

`PUT /v2/apis`

Imports an API.

> Body parameter

```json
{
  "body": "string"
}
```

<h3 id="importapi-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|basepath|query|string|false|Specifies how to interpret the base path of the API during import. Valid values are ignore, prepend, and split. The default value is ignore. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-import-api-basePath.html">Set the OpenAPI basePath Property</a>. Supported only for HTTP APIs.|
|failOnWarnings|query|boolean|false|Specifies whether to rollback the API creation when a warning is encountered. By default, API creation continues if a warning is encountered.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» body|body|string|true|The OpenAPI definition. Supported only for HTTP APIs.|

> Example responses

> 201 Response

```json
{
  "ApiEndpoint": {},
  "ApiGatewayManaged": {},
  "ApiId": {},
  "ApiKeySelectionExpression": {},
  "CorsConfiguration": {
    "AllowCredentials": {},
    "AllowHeaders": {},
    "AllowMethods": {},
    "AllowOrigins": {},
    "ExposeHeaders": {},
    "MaxAge": {}
  },
  "CreatedDate": {},
  "Description": {},
  "DisableSchemaValidation": {},
  "DisableExecuteApiEndpoint": {},
  "ImportInfo": {},
  "Name": {},
  "ProtocolType": {},
  "RouteSelectionExpression": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Version": {},
  "Warnings": {}
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

<h3 id="importapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[ImportApiResponse](#schemaimportapiresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateApi

<a id="opIdCreateApi"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "apiKeySelectionExpression": "string",
    "corsConfiguration": {
      "AllowCredentials": {},
      "AllowHeaders": {},
      "AllowMethods": {},
      "AllowOrigins": {},
      "ExposeHeaders": {},
      "MaxAge": {}
    },
    "credentialsArn": "string",
    "description": "string",
    "disableSchemaValidation": true,
    "disableExecuteApiEndpoint": true,
    "name": "string",
    "protocolType": "WEBSOCKET",
    "routeKey": "string",
    "routeSelectionExpression": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "target": "string",
    "version": "string"
  }'
```

`POST /v2/apis`

Creates an Api resource.

> Body parameter

```json
{
  "apiKeySelectionExpression": "string",
  "corsConfiguration": {
    "AllowCredentials": {},
    "AllowHeaders": {},
    "AllowMethods": {},
    "AllowOrigins": {},
    "ExposeHeaders": {},
    "MaxAge": {}
  },
  "credentialsArn": "string",
  "description": "string",
  "disableSchemaValidation": true,
  "disableExecuteApiEndpoint": true,
  "name": "string",
  "protocolType": "WEBSOCKET",
  "routeKey": "string",
  "routeSelectionExpression": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "target": "string",
  "version": "string"
}
```

<h3 id="createapi-parameters">Parameters</h3>

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
|» apiKeySelectionExpression|body|string|false|An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.|
|» corsConfiguration|body|object|false|Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information.|
|» » AllowCredentials|body|object|false|none|
|» » AllowHeaders|body|object|false|none|
|» » AllowMethods|body|object|false|none|
|» » AllowOrigins|body|object|false|none|
|» » ExposeHeaders|body|object|false|none|
|» » MaxAge|body|object|false|none|
|» credentialsArn|body|string|false|Represents an Amazon Resource Name (ARN).|
|» description|body|string|false|A string with a length between [0-1024].|
|» disableSchemaValidation|body|boolean|false|Avoid validating models when creating a deployment. Supported only for WebSocket APIs.|
|» disableExecuteApiEndpoint|body|boolean|false|Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://{api_id}.execute-api.{region}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.|
|» name|body|string|true|A string with a length between [1-128].|
|» protocolType|body|string|true|Represents a protocol type.|
|» routeKey|body|string|false|After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.|
|» routeSelectionExpression|body|string|false|An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.|
|» tags|body|object|false|Represents a collection of tags associated with the resource.|
|» » **additionalProperties**|body|[StringWithLengthBetween1And1600](#schemastringwithlengthbetween1and1600)|false|A string with a length between [0-1600].|
|» target|body|string|false|A string representation of a URI with a length between [1-2048].|
|» version|body|string|false|A string with a length between [1-64].|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocolType|WEBSOCKET|
|» protocolType|HTTP|

> Example responses

> 201 Response

```json
{
  "ApiEndpoint": {},
  "ApiGatewayManaged": {},
  "ApiId": {},
  "ApiKeySelectionExpression": {},
  "CorsConfiguration": {
    "AllowCredentials": {},
    "AllowHeaders": {},
    "AllowMethods": {},
    "AllowOrigins": {},
    "ExposeHeaders": {},
    "MaxAge": {}
  },
  "CreatedDate": {},
  "Description": {},
  "DisableSchemaValidation": {},
  "DisableExecuteApiEndpoint": {},
  "ImportInfo": {},
  "Name": {},
  "ProtocolType": {},
  "RouteSelectionExpression": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Version": {},
  "Warnings": {}
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

<h3 id="createapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateApiResponse](#schemacreateapiresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetApiMappings

<a id="opIdGetApiMappings"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/domainnames/string/apimappings \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/domainnames/{domainName}/apimappings`

Gets API mappings.

<h3 id="getapimappings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domainName|path|string|true|The domain name.|
|maxResults|query|string|false|The maximum number of elements to be returned for this resource.|
|nextToken|query|string|false|The next page of elements from this collection. Not valid for the last element of the collection.|
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
  "Items": {},
  "NextToken": {}
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

<h3 id="getapimappings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetApiMappingsResponse](#schemagetapimappingsresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateApiMapping

<a id="opIdCreateApiMapping"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/domainnames/string/apimappings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "apiId": "string",
    "apiMappingKey": "string",
    "stage": "string"
  }'
```

`POST /v2/domainnames/{domainName}/apimappings`

Creates an API mapping.

> Body parameter

```json
{
  "apiId": "string",
  "apiMappingKey": "string",
  "stage": "string"
}
```

<h3 id="createapimapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domainName|path|string|true|The domain name.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» apiId|body|string|true|The identifier.|
|» apiMappingKey|body|string|false|After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.|
|» stage|body|string|true|A string with a length between [1-128].|

> Example responses

> 201 Response

```json
{
  "ApiId": {},
  "ApiMappingId": {},
  "ApiMappingKey": {},
  "Stage": {}
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

<h3 id="createapimapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateApiMappingResponse](#schemacreateapimappingresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAuthorizers

<a id="opIdGetAuthorizers"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/authorizers \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/apis/{apiId}/authorizers`

Gets the Authorizers for an API.

<h3 id="getauthorizers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|maxResults|query|string|false|The maximum number of elements to be returned for this resource.|
|nextToken|query|string|false|The next page of elements from this collection. Not valid for the last element of the collection.|
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
  "Items": {},
  "NextToken": {}
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

<h3 id="getauthorizers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAuthorizersResponse](#schemagetauthorizersresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAuthorizer

<a id="opIdCreateAuthorizer"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/authorizers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "authorizerCredentialsArn": "string",
    "authorizerPayloadFormatVersion": "string",
    "authorizerResultTtlInSeconds": 0,
    "authorizerType": "REQUEST",
    "authorizerUri": "string",
    "enableSimpleResponses": true,
    "identitySource": [
      "string"
    ],
    "identityValidationExpression": "string",
    "jwtConfiguration": {
      "Audience": {},
      "Issuer": {}
    },
    "name": "string"
  }'
```

`POST /v2/apis/{apiId}/authorizers`

Creates an Authorizer for an API.

> Body parameter

```json
{
  "authorizerCredentialsArn": "string",
  "authorizerPayloadFormatVersion": "string",
  "authorizerResultTtlInSeconds": 0,
  "authorizerType": "REQUEST",
  "authorizerUri": "string",
  "enableSimpleResponses": true,
  "identitySource": [
    "string"
  ],
  "identityValidationExpression": "string",
  "jwtConfiguration": {
    "Audience": {},
    "Issuer": {}
  },
  "name": "string"
}
```

<h3 id="createauthorizer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» authorizerCredentialsArn|body|string|false|Represents an Amazon Resource Name (ARN).|
|» authorizerPayloadFormatVersion|body|string|false|A string with a length between [1-64].|
|» authorizerResultTtlInSeconds|body|integer|false|An integer with a value between [0-3600].|
|» authorizerType|body|string|true|The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).|
|» authorizerUri|body|string|false|A string representation of a URI with a length between [1-2048].|
|» enableSimpleResponses|body|boolean|false|Specifies whether a Lambda authorizer returns a response in a simple format. By default, a Lambda authorizer must return an IAM policy. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>|
|» identitySource|body|[[__string](#schema__string)]|true|The identity source for which authorization is requested. For the REQUEST authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an Auth header, a Name query string parameter are defined as identity sources, this value is $method.request.header.Auth, $method.request.querystring.Name. These parameters will be used to derive the authorization caching key and to perform runtime validation of the REQUEST authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional.|
|» identityValidationExpression|body|string|false|A string with a length between [0-1024].|
|» jwtConfiguration|body|object|false|Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.|
|» » Audience|body|object|false|none|
|» » Issuer|body|object|false|none|
|» name|body|string|true|A string with a length between [1-128].|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» authorizerType|REQUEST|
|» authorizerType|JWT|

> Example responses

> 201 Response

```json
{
  "AuthorizerCredentialsArn": {},
  "AuthorizerId": {},
  "AuthorizerPayloadFormatVersion": {},
  "AuthorizerResultTtlInSeconds": {},
  "AuthorizerType": {},
  "AuthorizerUri": {},
  "EnableSimpleResponses": {},
  "IdentitySource": {},
  "IdentityValidationExpression": {},
  "JwtConfiguration": {
    "Audience": {},
    "Issuer": {}
  },
  "Name": {}
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

<h3 id="createauthorizer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateAuthorizerResponse](#schemacreateauthorizerresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDeployments

<a id="opIdGetDeployments"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/deployments \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/apis/{apiId}/deployments`

Gets the Deployments for an API.

<h3 id="getdeployments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|maxResults|query|string|false|The maximum number of elements to be returned for this resource.|
|nextToken|query|string|false|The next page of elements from this collection. Not valid for the last element of the collection.|
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
  "Items": {},
  "NextToken": {}
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

<h3 id="getdeployments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDeploymentsResponse](#schemagetdeploymentsresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDeployment

<a id="opIdCreateDeployment"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/deployments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "stageName": "string"
  }'
```

`POST /v2/apis/{apiId}/deployments`

Creates a Deployment for an API.

> Body parameter

```json
{
  "description": "string",
  "stageName": "string"
}
```

<h3 id="createdeployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» description|body|string|false|A string with a length between [0-1024].|
|» stageName|body|string|false|A string with a length between [1-128].|

> Example responses

> 201 Response

```json
{
  "AutoDeployed": {},
  "CreatedDate": {},
  "DeploymentId": {},
  "DeploymentStatus": {},
  "DeploymentStatusMessage": {},
  "Description": {}
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

<h3 id="createdeployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateDeploymentResponse](#schemacreatedeploymentresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDomainNames

<a id="opIdGetDomainNames"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/domainnames \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/domainnames`

Gets the domain names for an AWS account.

<h3 id="getdomainnames-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|The maximum number of elements to be returned for this resource.|
|nextToken|query|string|false|The next page of elements from this collection. Not valid for the last element of the collection.|
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
  "Items": {},
  "NextToken": {}
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

<h3 id="getdomainnames-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDomainNamesResponse](#schemagetdomainnamesresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDomainName

<a id="opIdCreateDomainName"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/domainnames \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "domainName": "string",
    "domainNameConfigurations": [
      {
        "ApiGatewayDomainName": {},
        "CertificateArn": {},
        "CertificateName": {},
        "CertificateUploadDate": {},
        "DomainNameStatus": {},
        "DomainNameStatusMessage": {},
        "EndpointType": {},
        "HostedZoneId": {},
        "SecurityPolicy": {},
        "OwnershipVerificationCertificateArn": {}
      }
    ],
    "mutualTlsAuthentication": {
      "TruststoreUri": {},
      "TruststoreVersion": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v2/domainnames`

Creates a domain name.

> Body parameter

```json
{
  "domainName": "string",
  "domainNameConfigurations": [
    {
      "ApiGatewayDomainName": {},
      "CertificateArn": {},
      "CertificateName": {},
      "CertificateUploadDate": {},
      "DomainNameStatus": {},
      "DomainNameStatusMessage": {},
      "EndpointType": {},
      "HostedZoneId": {},
      "SecurityPolicy": {},
      "OwnershipVerificationCertificateArn": {}
    }
  ],
  "mutualTlsAuthentication": {
    "TruststoreUri": {},
    "TruststoreVersion": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  }
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
|» domainName|body|string|true|A string with a length between [1-512].|
|» domainNameConfigurations|body|[[DomainNameConfiguration](#schemadomainnameconfiguration)]|false|The domain name configurations.|
|» mutualTlsAuthentication|body|object|false|The mutual TLS authentication configuration for a custom domain name.|
|» » TruststoreUri|body|object|false|none|
|» » TruststoreVersion|body|object|false|none|
|» tags|body|object|false|Represents a collection of tags associated with the resource.|
|» » **additionalProperties**|body|[StringWithLengthBetween1And1600](#schemastringwithlengthbetween1and1600)|false|A string with a length between [0-1600].|

> Example responses

> 201 Response

```json
{
  "ApiMappingSelectionExpression": {},
  "DomainName": {},
  "DomainNameConfigurations": {},
  "MutualTlsAuthentication": {
    "TruststoreUri": {},
    "TruststoreVersion": {},
    "TruststoreWarnings": {}
  },
  "Tags": {
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

<h3 id="createdomainname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateDomainNameResponse](#schemacreatedomainnameresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetIntegrations

<a id="opIdGetIntegrations"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/integrations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/apis/{apiId}/integrations`

Gets the Integrations for an API.

<h3 id="getintegrations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|maxResults|query|string|false|The maximum number of elements to be returned for this resource.|
|nextToken|query|string|false|The next page of elements from this collection. Not valid for the last element of the collection.|
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
  "Items": {},
  "NextToken": {}
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

<h3 id="getintegrations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetIntegrationsResponse](#schemagetintegrationsresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateIntegration

<a id="opIdCreateIntegration"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/integrations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "connectionId": "string",
    "connectionType": "INTERNET",
    "contentHandlingStrategy": "CONVERT_TO_BINARY",
    "credentialsArn": "string",
    "description": "string",
    "integrationMethod": "string",
    "integrationSubtype": "string",
    "integrationType": "AWS",
    "integrationUri": "string",
    "passthroughBehavior": "WHEN_NO_MATCH",
    "payloadFormatVersion": "string",
    "requestParameters": {
      "property1": "string",
      "property2": "string"
    },
    "requestTemplates": {
      "property1": "string",
      "property2": "string"
    },
    "responseParameters": {
      "property1": {
        "property1": "string",
        "property2": "string"
      },
      "property2": {
        "property1": "string",
        "property2": "string"
      }
    },
    "templateSelectionExpression": "string",
    "timeoutInMillis": 50,
    "tlsConfig": {
      "ServerNameToVerify": {}
    }
  }'
```

`POST /v2/apis/{apiId}/integrations`

Creates an Integration.

> Body parameter

```json
{
  "connectionId": "string",
  "connectionType": "INTERNET",
  "contentHandlingStrategy": "CONVERT_TO_BINARY",
  "credentialsArn": "string",
  "description": "string",
  "integrationMethod": "string",
  "integrationSubtype": "string",
  "integrationType": "AWS",
  "integrationUri": "string",
  "passthroughBehavior": "WHEN_NO_MATCH",
  "payloadFormatVersion": "string",
  "requestParameters": {
    "property1": "string",
    "property2": "string"
  },
  "requestTemplates": {
    "property1": "string",
    "property2": "string"
  },
  "responseParameters": {
    "property1": {
      "property1": "string",
      "property2": "string"
    },
    "property2": {
      "property1": "string",
      "property2": "string"
    }
  },
  "templateSelectionExpression": "string",
  "timeoutInMillis": 50,
  "tlsConfig": {
    "ServerNameToVerify": {}
  }
}
```

<h3 id="createintegration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» connectionId|body|string|false|A string with a length between [1-1024].|
|» connectionType|body|string|false|Represents a connection type.|
|» contentHandlingStrategy|body|string|false|Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs.|
|» credentialsArn|body|string|false|Represents an Amazon Resource Name (ARN).|
|» description|body|string|false|A string with a length between [0-1024].|
|» integrationMethod|body|string|false|A string with a length between [1-64].|
|» integrationSubtype|body|string|false|A string with a length between [1-128].|
|» integrationType|body|string|true|Represents an API method integration type.|
|» integrationUri|body|string|false|A string representation of a URI with a length between [1-2048].|
|» passthroughBehavior|body|string|false|Represents passthrough behavior for an integration response. Supported only for WebSocket APIs.|
|» payloadFormatVersion|body|string|false|A string with a length between [1-64].|
|» requestParameters|body|object|false|<p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>{location}</replaceable>.<replaceable>{name}</replaceable><br>          , where <br>            <replaceable>{location}</replaceable><br>           is querystring, path, or header; and <br>            <replaceable>{name}</replaceable><br>           must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API integrations without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to the backend. The key should follow the pattern &lt;action&gt;:&lt;header\|querystring\|path&gt;.&lt;location&gt; where action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>|
|» » **additionalProperties**|body|[StringWithLengthBetween1And512](#schemastringwithlengthbetween1and512)|false|A string with a length between [1-512].|
|» requestTemplates|body|object|false|A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression.|
|» » **additionalProperties**|body|[StringWithLengthBetween0And32K](#schemastringwithlengthbetween0and32k)|false|A string with a length between [0-32768].|
|» responseParameters|body|object|false|Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients.|
|» » **additionalProperties**|body|[IntegrationParameters](#schemaintegrationparameters)|false|<p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>{location}</replaceable>.<replaceable>{name}</replaceable><br>          , where <br>            <replaceable>{location}</replaceable><br>           is querystring, path, or header; and <br>            <replaceable>{name}</replaceable><br>           must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API integrations without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to the backend. The key should follow the pattern &lt;action&gt;:&lt;header\|querystring\|path&gt;.&lt;location&gt; where action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>|
|» templateSelectionExpression|body|string|false|An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.|
|» timeoutInMillis|body|integer|false|An integer with a value between [50-30000].|
|» tlsConfig|body|object|false|The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.|
|» » ServerNameToVerify|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» connectionType|INTERNET|
|» connectionType|VPC_LINK|
|» contentHandlingStrategy|CONVERT_TO_BINARY|
|» contentHandlingStrategy|CONVERT_TO_TEXT|
|» integrationType|AWS|
|» integrationType|HTTP|
|» integrationType|MOCK|
|» integrationType|HTTP_PROXY|
|» integrationType|AWS_PROXY|
|» passthroughBehavior|WHEN_NO_MATCH|
|» passthroughBehavior|NEVER|
|» passthroughBehavior|WHEN_NO_TEMPLATES|

> Example responses

> 201 Response

```json
{
  "ApiGatewayManaged": {},
  "ConnectionId": {},
  "ConnectionType": {},
  "ContentHandlingStrategy": {},
  "CredentialsArn": {},
  "Description": {},
  "IntegrationId": {},
  "IntegrationMethod": {},
  "IntegrationResponseSelectionExpression": {},
  "IntegrationSubtype": {},
  "IntegrationType": {},
  "IntegrationUri": {},
  "PassthroughBehavior": {},
  "PayloadFormatVersion": {},
  "RequestParameters": {
    "property1": "string",
    "property2": "string"
  },
  "RequestTemplates": {
    "property1": "string",
    "property2": "string"
  },
  "ResponseParameters": {
    "property1": {
      "property1": "string",
      "property2": "string"
    },
    "property2": {
      "property1": "string",
      "property2": "string"
    }
  },
  "TemplateSelectionExpression": {},
  "TimeoutInMillis": {},
  "TlsConfig": {
    "ServerNameToVerify": {}
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

<h3 id="createintegration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateIntegrationResult](#schemacreateintegrationresult)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetIntegrationResponses

<a id="opIdGetIntegrationResponses"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/integrations/string/integrationresponses \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/apis/{apiId}/integrations/{integrationId}/integrationresponses`

Gets the IntegrationResponses for an Integration.

<h3 id="getintegrationresponses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|integrationId|path|string|true|The integration ID.|
|maxResults|query|string|false|The maximum number of elements to be returned for this resource.|
|nextToken|query|string|false|The next page of elements from this collection. Not valid for the last element of the collection.|
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
  "Items": {},
  "NextToken": {}
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

<h3 id="getintegrationresponses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetIntegrationResponsesResponse](#schemagetintegrationresponsesresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateIntegrationResponse

<a id="opIdCreateIntegrationResponse"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/integrations/string/integrationresponses \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "contentHandlingStrategy": "CONVERT_TO_BINARY",
    "integrationResponseKey": "string",
    "responseParameters": {
      "property1": "string",
      "property2": "string"
    },
    "responseTemplates": {
      "property1": "string",
      "property2": "string"
    },
    "templateSelectionExpression": "string"
  }'
```

`POST /v2/apis/{apiId}/integrations/{integrationId}/integrationresponses`

Creates an IntegrationResponses.

> Body parameter

```json
{
  "contentHandlingStrategy": "CONVERT_TO_BINARY",
  "integrationResponseKey": "string",
  "responseParameters": {
    "property1": "string",
    "property2": "string"
  },
  "responseTemplates": {
    "property1": "string",
    "property2": "string"
  },
  "templateSelectionExpression": "string"
}
```

<h3 id="createintegrationresponse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|integrationId|path|string|true|The integration ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» contentHandlingStrategy|body|string|false|Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs.|
|» integrationResponseKey|body|string|true|After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.|
|» responseParameters|body|object|false|<p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>{location}</replaceable>.<replaceable>{name}</replaceable><br>          , where <br>            <replaceable>{location}</replaceable><br>           is querystring, path, or header; and <br>            <replaceable>{name}</replaceable><br>           must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API integrations without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to the backend. The key should follow the pattern &lt;action&gt;:&lt;header\|querystring\|path&gt;.&lt;location&gt; where action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>|
|» » **additionalProperties**|body|[StringWithLengthBetween1And512](#schemastringwithlengthbetween1and512)|false|A string with a length between [1-512].|
|» responseTemplates|body|object|false|A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression.|
|» » **additionalProperties**|body|[StringWithLengthBetween0And32K](#schemastringwithlengthbetween0and32k)|false|A string with a length between [0-32768].|
|» templateSelectionExpression|body|string|false|An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» contentHandlingStrategy|CONVERT_TO_BINARY|
|» contentHandlingStrategy|CONVERT_TO_TEXT|

> Example responses

> 201 Response

```json
{
  "ContentHandlingStrategy": {},
  "IntegrationResponseId": {},
  "IntegrationResponseKey": {},
  "ResponseParameters": {
    "property1": "string",
    "property2": "string"
  },
  "ResponseTemplates": {
    "property1": "string",
    "property2": "string"
  },
  "TemplateSelectionExpression": {}
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

<h3 id="createintegrationresponse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateIntegrationResponseResponse](#schemacreateintegrationresponseresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetModels

<a id="opIdGetModels"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/models \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/apis/{apiId}/models`

Gets the Models for an API.

<h3 id="getmodels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|maxResults|query|string|false|The maximum number of elements to be returned for this resource.|
|nextToken|query|string|false|The next page of elements from this collection. Not valid for the last element of the collection.|
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
  "Items": {},
  "NextToken": {}
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

<h3 id="getmodels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetModelsResponse](#schemagetmodelsresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateModel

<a id="opIdCreateModel"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/models \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "contentType": "string",
    "description": "string",
    "name": "string",
    "schema": "string"
  }'
```

`POST /v2/apis/{apiId}/models`

Creates a Model for an API.

> Body parameter

```json
{
  "contentType": "string",
  "description": "string",
  "name": "string",
  "schema": "string"
}
```

<h3 id="createmodel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» contentType|body|string|false|A string with a length between [1-256].|
|» description|body|string|false|A string with a length between [0-1024].|
|» name|body|string|true|A string with a length between [1-128].|
|» schema|body|string|true|A string with a length between [0-32768].|

> Example responses

> 201 Response

```json
{
  "ContentType": {},
  "Description": {},
  "ModelId": {},
  "Name": {},
  "Schema": {}
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

<h3 id="createmodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateModelResponse](#schemacreatemodelresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRoutes

<a id="opIdGetRoutes"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/routes \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/apis/{apiId}/routes`

Gets the Routes for an API.

<h3 id="getroutes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|maxResults|query|string|false|The maximum number of elements to be returned for this resource.|
|nextToken|query|string|false|The next page of elements from this collection. Not valid for the last element of the collection.|
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
  "Items": {},
  "NextToken": {}
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

<h3 id="getroutes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRoutesResponse](#schemagetroutesresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRoute

<a id="opIdCreateRoute"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/routes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "apiKeyRequired": true,
    "authorizationScopes": [
      "string"
    ],
    "authorizationType": "NONE",
    "authorizerId": "string",
    "modelSelectionExpression": "string",
    "operationName": "string",
    "requestModels": {
      "property1": "string",
      "property2": "string"
    },
    "requestParameters": {
      "property1": {
        "Required": {}
      },
      "property2": {
        "Required": {}
      }
    },
    "routeKey": "string",
    "routeResponseSelectionExpression": "string",
    "target": "string"
  }'
```

`POST /v2/apis/{apiId}/routes`

Creates a Route for an API.

> Body parameter

```json
{
  "apiKeyRequired": true,
  "authorizationScopes": [
    "string"
  ],
  "authorizationType": "NONE",
  "authorizerId": "string",
  "modelSelectionExpression": "string",
  "operationName": "string",
  "requestModels": {
    "property1": "string",
    "property2": "string"
  },
  "requestParameters": {
    "property1": {
      "Required": {}
    },
    "property2": {
      "Required": {}
    }
  },
  "routeKey": "string",
  "routeResponseSelectionExpression": "string",
  "target": "string"
}
```

<h3 id="createroute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» apiKeyRequired|body|boolean|false|Specifies whether an API key is required for the route. Supported only for WebSocket APIs.|
|» authorizationScopes|body|[[StringWithLengthBetween1And64](#schemastringwithlengthbetween1and64)]|false|A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes.|
|» authorizationType|body|string|false|The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.|
|» authorizerId|body|string|false|The identifier.|
|» modelSelectionExpression|body|string|false|An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.|
|» operationName|body|string|false|A string with a length between [1-64].|
|» requestModels|body|object|false|The route models.|
|» » **additionalProperties**|body|[StringWithLengthBetween1And128](#schemastringwithlengthbetween1and128)|false|A string with a length between [1-128].|
|» requestParameters|body|object|false|The route parameters.|
|» » **additionalProperties**|body|[ParameterConstraints](#schemaparameterconstraints)|false|Validation constraints imposed on parameters of a request (path, query string, headers).|
|» routeKey|body|string|true|After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.|
|» routeResponseSelectionExpression|body|string|false|An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.|
|» target|body|string|false|A string with a length between [1-128].|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» authorizationType|NONE|
|» authorizationType|AWS_IAM|
|» authorizationType|CUSTOM|
|» authorizationType|JWT|

> Example responses

> 201 Response

```json
{
  "ApiGatewayManaged": {},
  "ApiKeyRequired": {},
  "AuthorizationScopes": {},
  "AuthorizationType": {},
  "AuthorizerId": {},
  "ModelSelectionExpression": {},
  "OperationName": {},
  "RequestModels": {
    "property1": "string",
    "property2": "string"
  },
  "RequestParameters": {
    "property1": {
      "Required": {}
    },
    "property2": {
      "Required": {}
    }
  },
  "RouteId": {},
  "RouteKey": {},
  "RouteResponseSelectionExpression": {},
  "Target": {}
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

<h3 id="createroute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateRouteResult](#schemacreaterouteresult)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRouteResponses

<a id="opIdGetRouteResponses"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/routes/string/routeresponses \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/apis/{apiId}/routes/{routeId}/routeresponses`

Gets the RouteResponses for a Route.

<h3 id="getrouteresponses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|maxResults|query|string|false|The maximum number of elements to be returned for this resource.|
|nextToken|query|string|false|The next page of elements from this collection. Not valid for the last element of the collection.|
|routeId|path|string|true|The route ID.|
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
  "Items": {},
  "NextToken": {}
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

<h3 id="getrouteresponses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRouteResponsesResponse](#schemagetrouteresponsesresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRouteResponse

<a id="opIdCreateRouteResponse"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/routes/string/routeresponses \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "modelSelectionExpression": "string",
    "responseModels": {
      "property1": "string",
      "property2": "string"
    },
    "responseParameters": {
      "property1": {
        "Required": {}
      },
      "property2": {
        "Required": {}
      }
    },
    "routeResponseKey": "string"
  }'
```

`POST /v2/apis/{apiId}/routes/{routeId}/routeresponses`

Creates a RouteResponse for a Route.

> Body parameter

```json
{
  "modelSelectionExpression": "string",
  "responseModels": {
    "property1": "string",
    "property2": "string"
  },
  "responseParameters": {
    "property1": {
      "Required": {}
    },
    "property2": {
      "Required": {}
    }
  },
  "routeResponseKey": "string"
}
```

<h3 id="createrouteresponse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|routeId|path|string|true|The route ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» modelSelectionExpression|body|string|false|An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.|
|» responseModels|body|object|false|The route models.|
|» » **additionalProperties**|body|[StringWithLengthBetween1And128](#schemastringwithlengthbetween1and128)|false|A string with a length between [1-128].|
|» responseParameters|body|object|false|The route parameters.|
|» » **additionalProperties**|body|[ParameterConstraints](#schemaparameterconstraints)|false|Validation constraints imposed on parameters of a request (path, query string, headers).|
|» routeResponseKey|body|string|true|After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.|

> Example responses

> 201 Response

```json
{
  "ModelSelectionExpression": {},
  "ResponseModels": {
    "property1": "string",
    "property2": "string"
  },
  "ResponseParameters": {
    "property1": {
      "Required": {}
    },
    "property2": {
      "Required": {}
    }
  },
  "RouteResponseId": {},
  "RouteResponseKey": {}
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

<h3 id="createrouteresponse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateRouteResponseResponse](#schemacreaterouteresponseresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetStages

<a id="opIdGetStages"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/stages \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/apis/{apiId}/stages`

Gets the Stages for an API.

<h3 id="getstages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|maxResults|query|string|false|The maximum number of elements to be returned for this resource.|
|nextToken|query|string|false|The next page of elements from this collection. Not valid for the last element of the collection.|
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
  "Items": {},
  "NextToken": {}
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

<h3 id="getstages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetStagesResponse](#schemagetstagesresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateStage

<a id="opIdCreateStage"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/stages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "accessLogSettings": {
      "DestinationArn": {},
      "Format": {}
    },
    "autoDeploy": true,
    "clientCertificateId": "string",
    "defaultRouteSettings": {
      "DataTraceEnabled": {},
      "DetailedMetricsEnabled": {},
      "LoggingLevel": {},
      "ThrottlingBurstLimit": {},
      "ThrottlingRateLimit": {}
    },
    "deploymentId": "string",
    "description": "string",
    "routeSettings": {
      "property1": {
        "DataTraceEnabled": {},
        "DetailedMetricsEnabled": {},
        "LoggingLevel": {},
        "ThrottlingBurstLimit": {},
        "ThrottlingRateLimit": {}
      },
      "property2": {
        "DataTraceEnabled": {},
        "DetailedMetricsEnabled": {},
        "LoggingLevel": {},
        "ThrottlingBurstLimit": {},
        "ThrottlingRateLimit": {}
      }
    },
    "stageName": "string",
    "stageVariables": {
      "property1": "string",
      "property2": "string"
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v2/apis/{apiId}/stages`

Creates a Stage for an API.

> Body parameter

```json
{
  "accessLogSettings": {
    "DestinationArn": {},
    "Format": {}
  },
  "autoDeploy": true,
  "clientCertificateId": "string",
  "defaultRouteSettings": {
    "DataTraceEnabled": {},
    "DetailedMetricsEnabled": {},
    "LoggingLevel": {},
    "ThrottlingBurstLimit": {},
    "ThrottlingRateLimit": {}
  },
  "deploymentId": "string",
  "description": "string",
  "routeSettings": {
    "property1": {
      "DataTraceEnabled": {},
      "DetailedMetricsEnabled": {},
      "LoggingLevel": {},
      "ThrottlingBurstLimit": {},
      "ThrottlingRateLimit": {}
    },
    "property2": {
      "DataTraceEnabled": {},
      "DetailedMetricsEnabled": {},
      "LoggingLevel": {},
      "ThrottlingBurstLimit": {},
      "ThrottlingRateLimit": {}
    }
  },
  "stageName": "string",
  "stageVariables": {
    "property1": "string",
    "property2": "string"
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createstage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» accessLogSettings|body|object|false|Settings for logging access in a stage.|
|» » DestinationArn|body|object|false|none|
|» » Format|body|object|false|none|
|» autoDeploy|body|boolean|false|Specifies whether updates to an API automatically trigger a new deployment. The default value is false.|
|» clientCertificateId|body|string|false|The identifier.|
|» defaultRouteSettings|body|object|false|Represents a collection of route settings.|
|» » DataTraceEnabled|body|object|false|none|
|» » DetailedMetricsEnabled|body|object|false|none|
|» » LoggingLevel|body|object|false|none|
|» » ThrottlingBurstLimit|body|object|false|none|
|» » ThrottlingRateLimit|body|object|false|none|
|» deploymentId|body|string|false|The identifier.|
|» description|body|string|false|A string with a length between [0-1024].|
|» routeSettings|body|object|false|The route settings map.|
|» » **additionalProperties**|body|[RouteSettings](#schemaroutesettings)|false|Represents a collection of route settings.|
|» stageName|body|string|true|A string with a length between [1-128].|
|» stageVariables|body|object|false|The stage variable map.|
|» » **additionalProperties**|body|[StringWithLengthBetween0And2048](#schemastringwithlengthbetween0and2048)|false|A string with a length between [0-2048].|
|» tags|body|object|false|Represents a collection of tags associated with the resource.|
|» » **additionalProperties**|body|[StringWithLengthBetween1And1600](#schemastringwithlengthbetween1and1600)|false|A string with a length between [0-1600].|

> Example responses

> 201 Response

```json
{
  "AccessLogSettings": {
    "DestinationArn": {},
    "Format": {}
  },
  "ApiGatewayManaged": {},
  "AutoDeploy": {},
  "ClientCertificateId": {},
  "CreatedDate": {},
  "DefaultRouteSettings": {
    "DataTraceEnabled": {},
    "DetailedMetricsEnabled": {},
    "LoggingLevel": {},
    "ThrottlingBurstLimit": {},
    "ThrottlingRateLimit": {}
  },
  "DeploymentId": {},
  "Description": {},
  "LastDeploymentStatusMessage": {},
  "LastUpdatedDate": {},
  "RouteSettings": {
    "property1": {
      "DataTraceEnabled": {},
      "DetailedMetricsEnabled": {},
      "LoggingLevel": {},
      "ThrottlingBurstLimit": {},
      "ThrottlingRateLimit": {}
    },
    "property2": {
      "DataTraceEnabled": {},
      "DetailedMetricsEnabled": {},
      "LoggingLevel": {},
      "ThrottlingBurstLimit": {},
      "ThrottlingRateLimit": {}
    }
  },
  "StageName": {},
  "StageVariables": {
    "property1": "string",
    "property2": "string"
  },
  "Tags": {
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

<h3 id="createstage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateStageResponse](#schemacreatestageresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetVpcLinks

<a id="opIdGetVpcLinks"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/vpclinks \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/vpclinks`

Gets a collection of VPC links.

<h3 id="getvpclinks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|The maximum number of elements to be returned for this resource.|
|nextToken|query|string|false|The next page of elements from this collection. Not valid for the last element of the collection.|
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
  "Items": {},
  "NextToken": {}
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

<h3 id="getvpclinks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetVpcLinksResponse](#schemagetvpclinksresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateVpcLink

<a id="opIdCreateVpcLink"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/vpclinks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "securityGroupIds": [
      "string"
    ],
    "subnetIds": [
      "string"
    ],
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v2/vpclinks`

Creates a VPC link.

> Body parameter

```json
{
  "name": "string",
  "securityGroupIds": [
    "string"
  ],
  "subnetIds": [
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
|» name|body|string|true|A string with a length between [1-128].|
|» securityGroupIds|body|[[__string](#schema__string)]|false|A list of security group IDs for the VPC link.|
|» subnetIds|body|[[__string](#schema__string)]|true|A list of subnet IDs to include in the VPC link.|
|» tags|body|object|false|Represents a collection of tags associated with the resource.|
|» » **additionalProperties**|body|[StringWithLengthBetween1And1600](#schemastringwithlengthbetween1and1600)|false|A string with a length between [0-1600].|

> Example responses

> 201 Response

```json
{
  "CreatedDate": {},
  "Name": {},
  "SecurityGroupIds": {},
  "SubnetIds": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "VpcLinkId": {},
  "VpcLinkStatus": {},
  "VpcLinkStatusMessage": {},
  "VpcLinkVersion": {}
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

<h3 id="createvpclink-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateVpcLinkResponse](#schemacreatevpclinkresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAccessLogSettings

<a id="opIdDeleteAccessLogSettings"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/stages/string/accesslogsettings \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v2/apis/{apiId}/stages/{stageName}/accesslogsettings`

Deletes the AccessLogSettings for a Stage. To disable access logging for a Stage, delete its AccessLogSettings.

<h3 id="deleteaccesslogsettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|stageName|path|string|true|The stage name. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.|
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

<h3 id="deleteaccesslogsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetApi

<a id="opIdGetApi"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/apis/{apiId}`

Gets an Api resource.

<h3 id="getapi-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
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
  "ApiEndpoint": {},
  "ApiGatewayManaged": {},
  "ApiId": {},
  "ApiKeySelectionExpression": {},
  "CorsConfiguration": {
    "AllowCredentials": {},
    "AllowHeaders": {},
    "AllowMethods": {},
    "AllowOrigins": {},
    "ExposeHeaders": {},
    "MaxAge": {}
  },
  "CreatedDate": {},
  "Description": {},
  "DisableSchemaValidation": {},
  "DisableExecuteApiEndpoint": {},
  "ImportInfo": {},
  "Name": {},
  "ProtocolType": {},
  "RouteSelectionExpression": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Version": {},
  "Warnings": {}
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

<h3 id="getapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetApiResponse](#schemagetapiresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ReimportApi

<a id="opIdReimportApi"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "body": "string"
  }'
```

`PUT /v2/apis/{apiId}`

Puts an Api resource.

> Body parameter

```json
{
  "body": "string"
}
```

<h3 id="reimportapi-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|basepath|query|string|false|Specifies how to interpret the base path of the API during import. Valid values are ignore, prepend, and split. The default value is ignore. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-import-api-basePath.html">Set the OpenAPI basePath Property</a>. Supported only for HTTP APIs.|
|failOnWarnings|query|boolean|false|Specifies whether to rollback the API creation when a warning is encountered. By default, API creation continues if a warning is encountered.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» body|body|string|true|The OpenAPI definition. Supported only for HTTP APIs.|

> Example responses

> 201 Response

```json
{
  "ApiEndpoint": {},
  "ApiGatewayManaged": {},
  "ApiId": {},
  "ApiKeySelectionExpression": {},
  "CorsConfiguration": {
    "AllowCredentials": {},
    "AllowHeaders": {},
    "AllowMethods": {},
    "AllowOrigins": {},
    "ExposeHeaders": {},
    "MaxAge": {}
  },
  "CreatedDate": {},
  "Description": {},
  "DisableSchemaValidation": {},
  "DisableExecuteApiEndpoint": {},
  "ImportInfo": {},
  "Name": {},
  "ProtocolType": {},
  "RouteSelectionExpression": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Version": {},
  "Warnings": {}
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

<h3 id="reimportapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[ReimportApiResponse](#schemareimportapiresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteApi

<a id="opIdDeleteApi"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v2/apis/{apiId}`

Deletes an Api resource.

<h3 id="deleteapi-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
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

<h3 id="deleteapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateApi

<a id="opIdUpdateApi"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "apiKeySelectionExpression": "string",
    "corsConfiguration": {
      "AllowCredentials": {},
      "AllowHeaders": {},
      "AllowMethods": {},
      "AllowOrigins": {},
      "ExposeHeaders": {},
      "MaxAge": {}
    },
    "credentialsArn": "string",
    "description": "string",
    "disableSchemaValidation": true,
    "disableExecuteApiEndpoint": true,
    "name": "string",
    "routeKey": "string",
    "routeSelectionExpression": "string",
    "target": "string",
    "version": "string"
  }'
```

`PATCH /v2/apis/{apiId}`

Updates an Api resource.

> Body parameter

```json
{
  "apiKeySelectionExpression": "string",
  "corsConfiguration": {
    "AllowCredentials": {},
    "AllowHeaders": {},
    "AllowMethods": {},
    "AllowOrigins": {},
    "ExposeHeaders": {},
    "MaxAge": {}
  },
  "credentialsArn": "string",
  "description": "string",
  "disableSchemaValidation": true,
  "disableExecuteApiEndpoint": true,
  "name": "string",
  "routeKey": "string",
  "routeSelectionExpression": "string",
  "target": "string",
  "version": "string"
}
```

<h3 id="updateapi-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» apiKeySelectionExpression|body|string|false|An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.|
|» corsConfiguration|body|object|false|Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information.|
|» » AllowCredentials|body|object|false|none|
|» » AllowHeaders|body|object|false|none|
|» » AllowMethods|body|object|false|none|
|» » AllowOrigins|body|object|false|none|
|» » ExposeHeaders|body|object|false|none|
|» » MaxAge|body|object|false|none|
|» credentialsArn|body|string|false|Represents an Amazon Resource Name (ARN).|
|» description|body|string|false|A string with a length between [0-1024].|
|» disableSchemaValidation|body|boolean|false|Avoid validating models when creating a deployment. Supported only for WebSocket APIs.|
|» disableExecuteApiEndpoint|body|boolean|false|Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://{api_id}.execute-api.{region}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.|
|» name|body|string|false|A string with a length between [1-128].|
|» routeKey|body|string|false|After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.|
|» routeSelectionExpression|body|string|false|An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.|
|» target|body|string|false|A string representation of a URI with a length between [1-2048].|
|» version|body|string|false|A string with a length between [1-64].|

> Example responses

> 200 Response

```json
{
  "ApiEndpoint": {},
  "ApiGatewayManaged": {},
  "ApiId": {},
  "ApiKeySelectionExpression": {},
  "CorsConfiguration": {
    "AllowCredentials": {},
    "AllowHeaders": {},
    "AllowMethods": {},
    "AllowOrigins": {},
    "ExposeHeaders": {},
    "MaxAge": {}
  },
  "CreatedDate": {},
  "Description": {},
  "DisableSchemaValidation": {},
  "DisableExecuteApiEndpoint": {},
  "ImportInfo": {},
  "Name": {},
  "ProtocolType": {},
  "RouteSelectionExpression": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Version": {},
  "Warnings": {}
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

<h3 id="updateapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateApiResponse](#schemaupdateapiresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetApiMapping

<a id="opIdGetApiMapping"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/domainnames/string/apimappings/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/domainnames/{domainName}/apimappings/{apiMappingId}`

Gets an API mapping.

<h3 id="getapimapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiMappingId|path|string|true|The API mapping identifier.|
|domainName|path|string|true|The domain name.|
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
  "ApiId": {},
  "ApiMappingId": {},
  "ApiMappingKey": {},
  "Stage": {}
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

<h3 id="getapimapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetApiMappingResponse](#schemagetapimappingresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteApiMapping

<a id="opIdDeleteApiMapping"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/domainnames/string/apimappings/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v2/domainnames/{domainName}/apimappings/{apiMappingId}`

Deletes an API mapping.

<h3 id="deleteapimapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiMappingId|path|string|true|The API mapping identifier.|
|domainName|path|string|true|The domain name.|
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

<h3 id="deleteapimapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateApiMapping

<a id="opIdUpdateApiMapping"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/domainnames/string/apimappings/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "apiId": "string",
    "apiMappingKey": "string",
    "stage": "string"
  }'
```

`PATCH /v2/domainnames/{domainName}/apimappings/{apiMappingId}`

The API mapping.

> Body parameter

```json
{
  "apiId": "string",
  "apiMappingKey": "string",
  "stage": "string"
}
```

<h3 id="updateapimapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiMappingId|path|string|true|The API mapping identifier.|
|domainName|path|string|true|The domain name.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» apiId|body|string|true|The identifier.|
|» apiMappingKey|body|string|false|After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.|
|» stage|body|string|false|A string with a length between [1-128].|

> Example responses

> 200 Response

```json
{
  "ApiId": {},
  "ApiMappingId": {},
  "ApiMappingKey": {},
  "Stage": {}
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

<h3 id="updateapimapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateApiMappingResponse](#schemaupdateapimappingresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAuthorizer

<a id="opIdGetAuthorizer"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/authorizers/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/apis/{apiId}/authorizers/{authorizerId}`

Gets an Authorizer.

<h3 id="getauthorizer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|authorizerId|path|string|true|The authorizer identifier.|
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
  "AuthorizerCredentialsArn": {},
  "AuthorizerId": {},
  "AuthorizerPayloadFormatVersion": {},
  "AuthorizerResultTtlInSeconds": {},
  "AuthorizerType": {},
  "AuthorizerUri": {},
  "EnableSimpleResponses": {},
  "IdentitySource": {},
  "IdentityValidationExpression": {},
  "JwtConfiguration": {
    "Audience": {},
    "Issuer": {}
  },
  "Name": {}
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

<h3 id="getauthorizer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAuthorizerResponse](#schemagetauthorizerresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAuthorizer

<a id="opIdDeleteAuthorizer"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/authorizers/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v2/apis/{apiId}/authorizers/{authorizerId}`

Deletes an Authorizer.

<h3 id="deleteauthorizer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|authorizerId|path|string|true|The authorizer identifier.|
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

<h3 id="deleteauthorizer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAuthorizer

<a id="opIdUpdateAuthorizer"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/authorizers/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "authorizerCredentialsArn": "string",
    "authorizerPayloadFormatVersion": "string",
    "authorizerResultTtlInSeconds": 0,
    "authorizerType": "REQUEST",
    "authorizerUri": "string",
    "enableSimpleResponses": true,
    "identitySource": [
      "string"
    ],
    "identityValidationExpression": "string",
    "jwtConfiguration": {
      "Audience": {},
      "Issuer": {}
    },
    "name": "string"
  }'
```

`PATCH /v2/apis/{apiId}/authorizers/{authorizerId}`

Updates an Authorizer.

> Body parameter

```json
{
  "authorizerCredentialsArn": "string",
  "authorizerPayloadFormatVersion": "string",
  "authorizerResultTtlInSeconds": 0,
  "authorizerType": "REQUEST",
  "authorizerUri": "string",
  "enableSimpleResponses": true,
  "identitySource": [
    "string"
  ],
  "identityValidationExpression": "string",
  "jwtConfiguration": {
    "Audience": {},
    "Issuer": {}
  },
  "name": "string"
}
```

<h3 id="updateauthorizer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|authorizerId|path|string|true|The authorizer identifier.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» authorizerCredentialsArn|body|string|false|Represents an Amazon Resource Name (ARN).|
|» authorizerPayloadFormatVersion|body|string|false|A string with a length between [1-64].|
|» authorizerResultTtlInSeconds|body|integer|false|An integer with a value between [0-3600].|
|» authorizerType|body|string|false|The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).|
|» authorizerUri|body|string|false|A string representation of a URI with a length between [1-2048].|
|» enableSimpleResponses|body|boolean|false|Specifies whether a Lambda authorizer returns a response in a simple format. By default, a Lambda authorizer must return an IAM policy. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>|
|» identitySource|body|[[__string](#schema__string)]|false|The identity source for which authorization is requested. For the REQUEST authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an Auth header, a Name query string parameter are defined as identity sources, this value is $method.request.header.Auth, $method.request.querystring.Name. These parameters will be used to derive the authorization caching key and to perform runtime validation of the REQUEST authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional.|
|» identityValidationExpression|body|string|false|A string with a length between [0-1024].|
|» jwtConfiguration|body|object|false|Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.|
|» » Audience|body|object|false|none|
|» » Issuer|body|object|false|none|
|» name|body|string|false|A string with a length between [1-128].|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» authorizerType|REQUEST|
|» authorizerType|JWT|

> Example responses

> 200 Response

```json
{
  "AuthorizerCredentialsArn": {},
  "AuthorizerId": {},
  "AuthorizerPayloadFormatVersion": {},
  "AuthorizerResultTtlInSeconds": {},
  "AuthorizerType": {},
  "AuthorizerUri": {},
  "EnableSimpleResponses": {},
  "IdentitySource": {},
  "IdentityValidationExpression": {},
  "JwtConfiguration": {
    "Audience": {},
    "Issuer": {}
  },
  "Name": {}
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

<h3 id="updateauthorizer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAuthorizerResponse](#schemaupdateauthorizerresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteCorsConfiguration

<a id="opIdDeleteCorsConfiguration"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/cors \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v2/apis/{apiId}/cors`

Deletes a CORS configuration.

<h3 id="deletecorsconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
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

<h3 id="deletecorsconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDeployment

<a id="opIdGetDeployment"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/deployments/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/apis/{apiId}/deployments/{deploymentId}`

Gets a Deployment.

<h3 id="getdeployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|deploymentId|path|string|true|The deployment ID.|
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
  "AutoDeployed": {},
  "CreatedDate": {},
  "DeploymentId": {},
  "DeploymentStatus": {},
  "DeploymentStatusMessage": {},
  "Description": {}
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

<h3 id="getdeployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDeploymentResponse](#schemagetdeploymentresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDeployment

<a id="opIdDeleteDeployment"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/deployments/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v2/apis/{apiId}/deployments/{deploymentId}`

Deletes a Deployment.

<h3 id="deletedeployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|deploymentId|path|string|true|The deployment ID.|
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

<h3 id="deletedeployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDeployment

<a id="opIdUpdateDeployment"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/deployments/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string"
  }'
```

`PATCH /v2/apis/{apiId}/deployments/{deploymentId}`

Updates a Deployment.

> Body parameter

```json
{
  "description": "string"
}
```

<h3 id="updatedeployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|deploymentId|path|string|true|The deployment ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» description|body|string|false|A string with a length between [0-1024].|

> Example responses

> 200 Response

```json
{
  "AutoDeployed": {},
  "CreatedDate": {},
  "DeploymentId": {},
  "DeploymentStatus": {},
  "DeploymentStatusMessage": {},
  "Description": {}
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

<h3 id="updatedeployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDeploymentResponse](#schemaupdatedeploymentresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDomainName

<a id="opIdGetDomainName"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/domainnames/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/domainnames/{domainName}`

Gets a domain name.

<h3 id="getdomainname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domainName|path|string|true|The domain name.|
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
  "ApiMappingSelectionExpression": {},
  "DomainName": {},
  "DomainNameConfigurations": {},
  "MutualTlsAuthentication": {
    "TruststoreUri": {},
    "TruststoreVersion": {},
    "TruststoreWarnings": {}
  },
  "Tags": {
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

<h3 id="getdomainname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDomainNameResponse](#schemagetdomainnameresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDomainName

<a id="opIdDeleteDomainName"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/domainnames/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v2/domainnames/{domainName}`

Deletes a domain name.

<h3 id="deletedomainname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domainName|path|string|true|The domain name.|
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

<h3 id="deletedomainname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDomainName

<a id="opIdUpdateDomainName"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/domainnames/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "domainNameConfigurations": [
      {
        "ApiGatewayDomainName": {},
        "CertificateArn": {},
        "CertificateName": {},
        "CertificateUploadDate": {},
        "DomainNameStatus": {},
        "DomainNameStatusMessage": {},
        "EndpointType": {},
        "HostedZoneId": {},
        "SecurityPolicy": {},
        "OwnershipVerificationCertificateArn": {}
      }
    ],
    "mutualTlsAuthentication": {
      "TruststoreUri": {},
      "TruststoreVersion": {}
    }
  }'
```

`PATCH /v2/domainnames/{domainName}`

Updates a domain name.

> Body parameter

```json
{
  "domainNameConfigurations": [
    {
      "ApiGatewayDomainName": {},
      "CertificateArn": {},
      "CertificateName": {},
      "CertificateUploadDate": {},
      "DomainNameStatus": {},
      "DomainNameStatusMessage": {},
      "EndpointType": {},
      "HostedZoneId": {},
      "SecurityPolicy": {},
      "OwnershipVerificationCertificateArn": {}
    }
  ],
  "mutualTlsAuthentication": {
    "TruststoreUri": {},
    "TruststoreVersion": {}
  }
}
```

<h3 id="updatedomainname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domainName|path|string|true|The domain name.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» domainNameConfigurations|body|[[DomainNameConfiguration](#schemadomainnameconfiguration)]|false|The domain name configurations.|
|» mutualTlsAuthentication|body|object|false|The mutual TLS authentication configuration for a custom domain name.|
|» » TruststoreUri|body|object|false|none|
|» » TruststoreVersion|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "ApiMappingSelectionExpression": {},
  "DomainName": {},
  "DomainNameConfigurations": {},
  "MutualTlsAuthentication": {
    "TruststoreUri": {},
    "TruststoreVersion": {},
    "TruststoreWarnings": {}
  },
  "Tags": {
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

<h3 id="updatedomainname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDomainNameResponse](#schemaupdatedomainnameresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetIntegration

<a id="opIdGetIntegration"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/integrations/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/apis/{apiId}/integrations/{integrationId}`

Gets an Integration.

<h3 id="getintegration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|integrationId|path|string|true|The integration ID.|
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
  "ApiGatewayManaged": {},
  "ConnectionId": {},
  "ConnectionType": {},
  "ContentHandlingStrategy": {},
  "CredentialsArn": {},
  "Description": {},
  "IntegrationId": {},
  "IntegrationMethod": {},
  "IntegrationResponseSelectionExpression": {},
  "IntegrationSubtype": {},
  "IntegrationType": {},
  "IntegrationUri": {},
  "PassthroughBehavior": {},
  "PayloadFormatVersion": {},
  "RequestParameters": {
    "property1": "string",
    "property2": "string"
  },
  "RequestTemplates": {
    "property1": "string",
    "property2": "string"
  },
  "ResponseParameters": {
    "property1": {
      "property1": "string",
      "property2": "string"
    },
    "property2": {
      "property1": "string",
      "property2": "string"
    }
  },
  "TemplateSelectionExpression": {},
  "TimeoutInMillis": {},
  "TlsConfig": {
    "ServerNameToVerify": {}
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

<h3 id="getintegration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetIntegrationResult](#schemagetintegrationresult)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteIntegration

<a id="opIdDeleteIntegration"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/integrations/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v2/apis/{apiId}/integrations/{integrationId}`

Deletes an Integration.

<h3 id="deleteintegration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|integrationId|path|string|true|The integration ID.|
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

<h3 id="deleteintegration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateIntegration

<a id="opIdUpdateIntegration"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/integrations/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "connectionId": "string",
    "connectionType": "INTERNET",
    "contentHandlingStrategy": "CONVERT_TO_BINARY",
    "credentialsArn": "string",
    "description": "string",
    "integrationMethod": "string",
    "integrationSubtype": "string",
    "integrationType": "AWS",
    "integrationUri": "string",
    "passthroughBehavior": "WHEN_NO_MATCH",
    "payloadFormatVersion": "string",
    "requestParameters": {
      "property1": "string",
      "property2": "string"
    },
    "requestTemplates": {
      "property1": "string",
      "property2": "string"
    },
    "responseParameters": {
      "property1": {
        "property1": "string",
        "property2": "string"
      },
      "property2": {
        "property1": "string",
        "property2": "string"
      }
    },
    "templateSelectionExpression": "string",
    "timeoutInMillis": 50,
    "tlsConfig": {
      "ServerNameToVerify": {}
    }
  }'
```

`PATCH /v2/apis/{apiId}/integrations/{integrationId}`

Updates an Integration.

> Body parameter

```json
{
  "connectionId": "string",
  "connectionType": "INTERNET",
  "contentHandlingStrategy": "CONVERT_TO_BINARY",
  "credentialsArn": "string",
  "description": "string",
  "integrationMethod": "string",
  "integrationSubtype": "string",
  "integrationType": "AWS",
  "integrationUri": "string",
  "passthroughBehavior": "WHEN_NO_MATCH",
  "payloadFormatVersion": "string",
  "requestParameters": {
    "property1": "string",
    "property2": "string"
  },
  "requestTemplates": {
    "property1": "string",
    "property2": "string"
  },
  "responseParameters": {
    "property1": {
      "property1": "string",
      "property2": "string"
    },
    "property2": {
      "property1": "string",
      "property2": "string"
    }
  },
  "templateSelectionExpression": "string",
  "timeoutInMillis": 50,
  "tlsConfig": {
    "ServerNameToVerify": {}
  }
}
```

<h3 id="updateintegration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|integrationId|path|string|true|The integration ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» connectionId|body|string|false|A string with a length between [1-1024].|
|» connectionType|body|string|false|Represents a connection type.|
|» contentHandlingStrategy|body|string|false|Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs.|
|» credentialsArn|body|string|false|Represents an Amazon Resource Name (ARN).|
|» description|body|string|false|A string with a length between [0-1024].|
|» integrationMethod|body|string|false|A string with a length between [1-64].|
|» integrationSubtype|body|string|false|A string with a length between [1-128].|
|» integrationType|body|string|false|Represents an API method integration type.|
|» integrationUri|body|string|false|A string representation of a URI with a length between [1-2048].|
|» passthroughBehavior|body|string|false|Represents passthrough behavior for an integration response. Supported only for WebSocket APIs.|
|» payloadFormatVersion|body|string|false|A string with a length between [1-64].|
|» requestParameters|body|object|false|<p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>{location}</replaceable>.<replaceable>{name}</replaceable><br>          , where <br>            <replaceable>{location}</replaceable><br>           is querystring, path, or header; and <br>            <replaceable>{name}</replaceable><br>           must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API integrations without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to the backend. The key should follow the pattern &lt;action&gt;:&lt;header\|querystring\|path&gt;.&lt;location&gt; where action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>|
|» » **additionalProperties**|body|[StringWithLengthBetween1And512](#schemastringwithlengthbetween1and512)|false|A string with a length between [1-512].|
|» requestTemplates|body|object|false|A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression.|
|» » **additionalProperties**|body|[StringWithLengthBetween0And32K](#schemastringwithlengthbetween0and32k)|false|A string with a length between [0-32768].|
|» responseParameters|body|object|false|Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients.|
|» » **additionalProperties**|body|[IntegrationParameters](#schemaintegrationparameters)|false|<p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>{location}</replaceable>.<replaceable>{name}</replaceable><br>          , where <br>            <replaceable>{location}</replaceable><br>           is querystring, path, or header; and <br>            <replaceable>{name}</replaceable><br>           must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API integrations without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to the backend. The key should follow the pattern &lt;action&gt;:&lt;header\|querystring\|path&gt;.&lt;location&gt; where action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>|
|» templateSelectionExpression|body|string|false|An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.|
|» timeoutInMillis|body|integer|false|An integer with a value between [50-30000].|
|» tlsConfig|body|object|false|The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.|
|» » ServerNameToVerify|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» connectionType|INTERNET|
|» connectionType|VPC_LINK|
|» contentHandlingStrategy|CONVERT_TO_BINARY|
|» contentHandlingStrategy|CONVERT_TO_TEXT|
|» integrationType|AWS|
|» integrationType|HTTP|
|» integrationType|MOCK|
|» integrationType|HTTP_PROXY|
|» integrationType|AWS_PROXY|
|» passthroughBehavior|WHEN_NO_MATCH|
|» passthroughBehavior|NEVER|
|» passthroughBehavior|WHEN_NO_TEMPLATES|

> Example responses

> 200 Response

```json
{
  "ApiGatewayManaged": {},
  "ConnectionId": {},
  "ConnectionType": {},
  "ContentHandlingStrategy": {},
  "CredentialsArn": {},
  "Description": {},
  "IntegrationId": {},
  "IntegrationMethod": {},
  "IntegrationResponseSelectionExpression": {},
  "IntegrationSubtype": {},
  "IntegrationType": {},
  "IntegrationUri": {},
  "PassthroughBehavior": {},
  "PayloadFormatVersion": {},
  "RequestParameters": {
    "property1": "string",
    "property2": "string"
  },
  "RequestTemplates": {
    "property1": "string",
    "property2": "string"
  },
  "ResponseParameters": {
    "property1": {
      "property1": "string",
      "property2": "string"
    },
    "property2": {
      "property1": "string",
      "property2": "string"
    }
  },
  "TemplateSelectionExpression": {},
  "TimeoutInMillis": {},
  "TlsConfig": {
    "ServerNameToVerify": {}
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

<h3 id="updateintegration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateIntegrationResult](#schemaupdateintegrationresult)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetIntegrationResponse

<a id="opIdGetIntegrationResponse"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/integrations/string/integrationresponses/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/apis/{apiId}/integrations/{integrationId}/integrationresponses/{integrationResponseId}`

Gets an IntegrationResponses.

<h3 id="getintegrationresponse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|integrationId|path|string|true|The integration ID.|
|integrationResponseId|path|string|true|The integration response ID.|
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
  "ContentHandlingStrategy": {},
  "IntegrationResponseId": {},
  "IntegrationResponseKey": {},
  "ResponseParameters": {
    "property1": "string",
    "property2": "string"
  },
  "ResponseTemplates": {
    "property1": "string",
    "property2": "string"
  },
  "TemplateSelectionExpression": {}
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

<h3 id="getintegrationresponse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetIntegrationResponseResponse](#schemagetintegrationresponseresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteIntegrationResponse

<a id="opIdDeleteIntegrationResponse"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/integrations/string/integrationresponses/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v2/apis/{apiId}/integrations/{integrationId}/integrationresponses/{integrationResponseId}`

Deletes an IntegrationResponses.

<h3 id="deleteintegrationresponse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|integrationId|path|string|true|The integration ID.|
|integrationResponseId|path|string|true|The integration response ID.|
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

<h3 id="deleteintegrationresponse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateIntegrationResponse

<a id="opIdUpdateIntegrationResponse"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/integrations/string/integrationresponses/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "contentHandlingStrategy": "CONVERT_TO_BINARY",
    "integrationResponseKey": "string",
    "responseParameters": {
      "property1": "string",
      "property2": "string"
    },
    "responseTemplates": {
      "property1": "string",
      "property2": "string"
    },
    "templateSelectionExpression": "string"
  }'
```

`PATCH /v2/apis/{apiId}/integrations/{integrationId}/integrationresponses/{integrationResponseId}`

Updates an IntegrationResponses.

> Body parameter

```json
{
  "contentHandlingStrategy": "CONVERT_TO_BINARY",
  "integrationResponseKey": "string",
  "responseParameters": {
    "property1": "string",
    "property2": "string"
  },
  "responseTemplates": {
    "property1": "string",
    "property2": "string"
  },
  "templateSelectionExpression": "string"
}
```

<h3 id="updateintegrationresponse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|integrationId|path|string|true|The integration ID.|
|integrationResponseId|path|string|true|The integration response ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» contentHandlingStrategy|body|string|false|Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs.|
|» integrationResponseKey|body|string|false|After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.|
|» responseParameters|body|object|false|<p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>{location}</replaceable>.<replaceable>{name}</replaceable><br>          , where <br>            <replaceable>{location}</replaceable><br>           is querystring, path, or header; and <br>            <replaceable>{name}</replaceable><br>           must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API integrations without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to the backend. The key should follow the pattern &lt;action&gt;:&lt;header\|querystring\|path&gt;.&lt;location&gt; where action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>|
|» » **additionalProperties**|body|[StringWithLengthBetween1And512](#schemastringwithlengthbetween1and512)|false|A string with a length between [1-512].|
|» responseTemplates|body|object|false|A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression.|
|» » **additionalProperties**|body|[StringWithLengthBetween0And32K](#schemastringwithlengthbetween0and32k)|false|A string with a length between [0-32768].|
|» templateSelectionExpression|body|string|false|An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» contentHandlingStrategy|CONVERT_TO_BINARY|
|» contentHandlingStrategy|CONVERT_TO_TEXT|

> Example responses

> 200 Response

```json
{
  "ContentHandlingStrategy": {},
  "IntegrationResponseId": {},
  "IntegrationResponseKey": {},
  "ResponseParameters": {
    "property1": "string",
    "property2": "string"
  },
  "ResponseTemplates": {
    "property1": "string",
    "property2": "string"
  },
  "TemplateSelectionExpression": {}
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

<h3 id="updateintegrationresponse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateIntegrationResponseResponse](#schemaupdateintegrationresponseresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetModel

<a id="opIdGetModel"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/models/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/apis/{apiId}/models/{modelId}`

Gets a Model.

<h3 id="getmodel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|modelId|path|string|true|The model ID.|
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
  "ContentType": {},
  "Description": {},
  "ModelId": {},
  "Name": {},
  "Schema": {}
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

<h3 id="getmodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetModelResponse](#schemagetmodelresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteModel

<a id="opIdDeleteModel"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/models/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v2/apis/{apiId}/models/{modelId}`

Deletes a Model.

<h3 id="deletemodel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|modelId|path|string|true|The model ID.|
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

<h3 id="deletemodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateModel

<a id="opIdUpdateModel"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/models/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "contentType": "string",
    "description": "string",
    "name": "string",
    "schema": "string"
  }'
```

`PATCH /v2/apis/{apiId}/models/{modelId}`

Updates a Model.

> Body parameter

```json
{
  "contentType": "string",
  "description": "string",
  "name": "string",
  "schema": "string"
}
```

<h3 id="updatemodel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|modelId|path|string|true|The model ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» contentType|body|string|false|A string with a length between [1-256].|
|» description|body|string|false|A string with a length between [0-1024].|
|» name|body|string|false|A string with a length between [1-128].|
|» schema|body|string|false|A string with a length between [0-32768].|

> Example responses

> 200 Response

```json
{
  "ContentType": {},
  "Description": {},
  "ModelId": {},
  "Name": {},
  "Schema": {}
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

<h3 id="updatemodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateModelResponse](#schemaupdatemodelresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRoute

<a id="opIdGetRoute"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/routes/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/apis/{apiId}/routes/{routeId}`

Gets a Route.

<h3 id="getroute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|routeId|path|string|true|The route ID.|
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
  "ApiGatewayManaged": {},
  "ApiKeyRequired": {},
  "AuthorizationScopes": {},
  "AuthorizationType": {},
  "AuthorizerId": {},
  "ModelSelectionExpression": {},
  "OperationName": {},
  "RequestModels": {
    "property1": "string",
    "property2": "string"
  },
  "RequestParameters": {
    "property1": {
      "Required": {}
    },
    "property2": {
      "Required": {}
    }
  },
  "RouteId": {},
  "RouteKey": {},
  "RouteResponseSelectionExpression": {},
  "Target": {}
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

<h3 id="getroute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRouteResult](#schemagetrouteresult)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRoute

<a id="opIdDeleteRoute"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/routes/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v2/apis/{apiId}/routes/{routeId}`

Deletes a Route.

<h3 id="deleteroute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|routeId|path|string|true|The route ID.|
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

<h3 id="deleteroute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRoute

<a id="opIdUpdateRoute"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/routes/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "apiKeyRequired": true,
    "authorizationScopes": [
      "string"
    ],
    "authorizationType": "NONE",
    "authorizerId": "string",
    "modelSelectionExpression": "string",
    "operationName": "string",
    "requestModels": {
      "property1": "string",
      "property2": "string"
    },
    "requestParameters": {
      "property1": {
        "Required": {}
      },
      "property2": {
        "Required": {}
      }
    },
    "routeKey": "string",
    "routeResponseSelectionExpression": "string",
    "target": "string"
  }'
```

`PATCH /v2/apis/{apiId}/routes/{routeId}`

Updates a Route.

> Body parameter

```json
{
  "apiKeyRequired": true,
  "authorizationScopes": [
    "string"
  ],
  "authorizationType": "NONE",
  "authorizerId": "string",
  "modelSelectionExpression": "string",
  "operationName": "string",
  "requestModels": {
    "property1": "string",
    "property2": "string"
  },
  "requestParameters": {
    "property1": {
      "Required": {}
    },
    "property2": {
      "Required": {}
    }
  },
  "routeKey": "string",
  "routeResponseSelectionExpression": "string",
  "target": "string"
}
```

<h3 id="updateroute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|routeId|path|string|true|The route ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» apiKeyRequired|body|boolean|false|Specifies whether an API key is required for the route. Supported only for WebSocket APIs.|
|» authorizationScopes|body|[[StringWithLengthBetween1And64](#schemastringwithlengthbetween1and64)]|false|A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes.|
|» authorizationType|body|string|false|The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.|
|» authorizerId|body|string|false|The identifier.|
|» modelSelectionExpression|body|string|false|An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.|
|» operationName|body|string|false|A string with a length between [1-64].|
|» requestModels|body|object|false|The route models.|
|» » **additionalProperties**|body|[StringWithLengthBetween1And128](#schemastringwithlengthbetween1and128)|false|A string with a length between [1-128].|
|» requestParameters|body|object|false|The route parameters.|
|» » **additionalProperties**|body|[ParameterConstraints](#schemaparameterconstraints)|false|Validation constraints imposed on parameters of a request (path, query string, headers).|
|» routeKey|body|string|false|After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.|
|» routeResponseSelectionExpression|body|string|false|An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.|
|» target|body|string|false|A string with a length between [1-128].|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» authorizationType|NONE|
|» authorizationType|AWS_IAM|
|» authorizationType|CUSTOM|
|» authorizationType|JWT|

> Example responses

> 200 Response

```json
{
  "ApiGatewayManaged": {},
  "ApiKeyRequired": {},
  "AuthorizationScopes": {},
  "AuthorizationType": {},
  "AuthorizerId": {},
  "ModelSelectionExpression": {},
  "OperationName": {},
  "RequestModels": {
    "property1": "string",
    "property2": "string"
  },
  "RequestParameters": {
    "property1": {
      "Required": {}
    },
    "property2": {
      "Required": {}
    }
  },
  "RouteId": {},
  "RouteKey": {},
  "RouteResponseSelectionExpression": {},
  "Target": {}
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

<h3 id="updateroute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateRouteResult](#schemaupdaterouteresult)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRouteRequestParameter

<a id="opIdDeleteRouteRequestParameter"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/routes/string/requestparameters/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v2/apis/{apiId}/routes/{routeId}/requestparameters/{requestParameterKey}`

Deletes a route request parameter.

<h3 id="deleterouterequestparameter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|requestParameterKey|path|string|true|The route request parameter key.|
|routeId|path|string|true|The route ID.|
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

<h3 id="deleterouterequestparameter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRouteResponse

<a id="opIdGetRouteResponse"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/routes/string/routeresponses/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/apis/{apiId}/routes/{routeId}/routeresponses/{routeResponseId}`

Gets a RouteResponse.

<h3 id="getrouteresponse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|routeId|path|string|true|The route ID.|
|routeResponseId|path|string|true|The route response ID.|
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
  "ModelSelectionExpression": {},
  "ResponseModels": {
    "property1": "string",
    "property2": "string"
  },
  "ResponseParameters": {
    "property1": {
      "Required": {}
    },
    "property2": {
      "Required": {}
    }
  },
  "RouteResponseId": {},
  "RouteResponseKey": {}
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

<h3 id="getrouteresponse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRouteResponseResponse](#schemagetrouteresponseresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRouteResponse

<a id="opIdDeleteRouteResponse"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/routes/string/routeresponses/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v2/apis/{apiId}/routes/{routeId}/routeresponses/{routeResponseId}`

Deletes a RouteResponse.

<h3 id="deleterouteresponse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|routeId|path|string|true|The route ID.|
|routeResponseId|path|string|true|The route response ID.|
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

<h3 id="deleterouteresponse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRouteResponse

<a id="opIdUpdateRouteResponse"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/routes/string/routeresponses/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "modelSelectionExpression": "string",
    "responseModels": {
      "property1": "string",
      "property2": "string"
    },
    "responseParameters": {
      "property1": {
        "Required": {}
      },
      "property2": {
        "Required": {}
      }
    },
    "routeResponseKey": "string"
  }'
```

`PATCH /v2/apis/{apiId}/routes/{routeId}/routeresponses/{routeResponseId}`

Updates a RouteResponse.

> Body parameter

```json
{
  "modelSelectionExpression": "string",
  "responseModels": {
    "property1": "string",
    "property2": "string"
  },
  "responseParameters": {
    "property1": {
      "Required": {}
    },
    "property2": {
      "Required": {}
    }
  },
  "routeResponseKey": "string"
}
```

<h3 id="updaterouteresponse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|routeId|path|string|true|The route ID.|
|routeResponseId|path|string|true|The route response ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» modelSelectionExpression|body|string|false|An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.|
|» responseModels|body|object|false|The route models.|
|» » **additionalProperties**|body|[StringWithLengthBetween1And128](#schemastringwithlengthbetween1and128)|false|A string with a length between [1-128].|
|» responseParameters|body|object|false|The route parameters.|
|» » **additionalProperties**|body|[ParameterConstraints](#schemaparameterconstraints)|false|Validation constraints imposed on parameters of a request (path, query string, headers).|
|» routeResponseKey|body|string|false|After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.|

> Example responses

> 200 Response

```json
{
  "ModelSelectionExpression": {},
  "ResponseModels": {
    "property1": "string",
    "property2": "string"
  },
  "ResponseParameters": {
    "property1": {
      "Required": {}
    },
    "property2": {
      "Required": {}
    }
  },
  "RouteResponseId": {},
  "RouteResponseKey": {}
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

<h3 id="updaterouteresponse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateRouteResponseResponse](#schemaupdaterouteresponseresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRouteSettings

<a id="opIdDeleteRouteSettings"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/stages/string/routesettings/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v2/apis/{apiId}/stages/{stageName}/routesettings/{routeKey}`

Deletes the RouteSettings for a stage.

<h3 id="deleteroutesettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|routeKey|path|string|true|The route key.|
|stageName|path|string|true|The stage name. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.|
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

<h3 id="deleteroutesettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetStage

<a id="opIdGetStage"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/stages/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/apis/{apiId}/stages/{stageName}`

Gets a Stage.

<h3 id="getstage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|stageName|path|string|true|The stage name. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.|
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
  "AccessLogSettings": {
    "DestinationArn": {},
    "Format": {}
  },
  "ApiGatewayManaged": {},
  "AutoDeploy": {},
  "ClientCertificateId": {},
  "CreatedDate": {},
  "DefaultRouteSettings": {
    "DataTraceEnabled": {},
    "DetailedMetricsEnabled": {},
    "LoggingLevel": {},
    "ThrottlingBurstLimit": {},
    "ThrottlingRateLimit": {}
  },
  "DeploymentId": {},
  "Description": {},
  "LastDeploymentStatusMessage": {},
  "LastUpdatedDate": {},
  "RouteSettings": {
    "property1": {
      "DataTraceEnabled": {},
      "DetailedMetricsEnabled": {},
      "LoggingLevel": {},
      "ThrottlingBurstLimit": {},
      "ThrottlingRateLimit": {}
    },
    "property2": {
      "DataTraceEnabled": {},
      "DetailedMetricsEnabled": {},
      "LoggingLevel": {},
      "ThrottlingBurstLimit": {},
      "ThrottlingRateLimit": {}
    }
  },
  "StageName": {},
  "StageVariables": {
    "property1": "string",
    "property2": "string"
  },
  "Tags": {
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

<h3 id="getstage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetStageResponse](#schemagetstageresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteStage

<a id="opIdDeleteStage"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/stages/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v2/apis/{apiId}/stages/{stageName}`

Deletes a Stage.

<h3 id="deletestage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|stageName|path|string|true|The stage name. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.|
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

<h3 id="deletestage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateStage

<a id="opIdUpdateStage"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/stages/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "accessLogSettings": {
      "DestinationArn": {},
      "Format": {}
    },
    "autoDeploy": true,
    "clientCertificateId": "string",
    "defaultRouteSettings": {
      "DataTraceEnabled": {},
      "DetailedMetricsEnabled": {},
      "LoggingLevel": {},
      "ThrottlingBurstLimit": {},
      "ThrottlingRateLimit": {}
    },
    "deploymentId": "string",
    "description": "string",
    "routeSettings": {
      "property1": {
        "DataTraceEnabled": {},
        "DetailedMetricsEnabled": {},
        "LoggingLevel": {},
        "ThrottlingBurstLimit": {},
        "ThrottlingRateLimit": {}
      },
      "property2": {
        "DataTraceEnabled": {},
        "DetailedMetricsEnabled": {},
        "LoggingLevel": {},
        "ThrottlingBurstLimit": {},
        "ThrottlingRateLimit": {}
      }
    },
    "stageVariables": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PATCH /v2/apis/{apiId}/stages/{stageName}`

Updates a Stage.

> Body parameter

```json
{
  "accessLogSettings": {
    "DestinationArn": {},
    "Format": {}
  },
  "autoDeploy": true,
  "clientCertificateId": "string",
  "defaultRouteSettings": {
    "DataTraceEnabled": {},
    "DetailedMetricsEnabled": {},
    "LoggingLevel": {},
    "ThrottlingBurstLimit": {},
    "ThrottlingRateLimit": {}
  },
  "deploymentId": "string",
  "description": "string",
  "routeSettings": {
    "property1": {
      "DataTraceEnabled": {},
      "DetailedMetricsEnabled": {},
      "LoggingLevel": {},
      "ThrottlingBurstLimit": {},
      "ThrottlingRateLimit": {}
    },
    "property2": {
      "DataTraceEnabled": {},
      "DetailedMetricsEnabled": {},
      "LoggingLevel": {},
      "ThrottlingBurstLimit": {},
      "ThrottlingRateLimit": {}
    }
  },
  "stageVariables": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="updatestage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|stageName|path|string|true|The stage name. Stage names can contain only alphanumeric characters, hyphens, and underscores, or be $default. Maximum length is 128 characters.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» accessLogSettings|body|object|false|Settings for logging access in a stage.|
|» » DestinationArn|body|object|false|none|
|» » Format|body|object|false|none|
|» autoDeploy|body|boolean|false|Specifies whether updates to an API automatically trigger a new deployment. The default value is false.|
|» clientCertificateId|body|string|false|The identifier.|
|» defaultRouteSettings|body|object|false|Represents a collection of route settings.|
|» » DataTraceEnabled|body|object|false|none|
|» » DetailedMetricsEnabled|body|object|false|none|
|» » LoggingLevel|body|object|false|none|
|» » ThrottlingBurstLimit|body|object|false|none|
|» » ThrottlingRateLimit|body|object|false|none|
|» deploymentId|body|string|false|The identifier.|
|» description|body|string|false|A string with a length between [0-1024].|
|» routeSettings|body|object|false|The route settings map.|
|» » **additionalProperties**|body|[RouteSettings](#schemaroutesettings)|false|Represents a collection of route settings.|
|» stageVariables|body|object|false|The stage variable map.|
|» » **additionalProperties**|body|[StringWithLengthBetween0And2048](#schemastringwithlengthbetween0and2048)|false|A string with a length between [0-2048].|

> Example responses

> 200 Response

```json
{
  "AccessLogSettings": {
    "DestinationArn": {},
    "Format": {}
  },
  "ApiGatewayManaged": {},
  "AutoDeploy": {},
  "ClientCertificateId": {},
  "CreatedDate": {},
  "DefaultRouteSettings": {
    "DataTraceEnabled": {},
    "DetailedMetricsEnabled": {},
    "LoggingLevel": {},
    "ThrottlingBurstLimit": {},
    "ThrottlingRateLimit": {}
  },
  "DeploymentId": {},
  "Description": {},
  "LastDeploymentStatusMessage": {},
  "LastUpdatedDate": {},
  "RouteSettings": {
    "property1": {
      "DataTraceEnabled": {},
      "DetailedMetricsEnabled": {},
      "LoggingLevel": {},
      "ThrottlingBurstLimit": {},
      "ThrottlingRateLimit": {}
    },
    "property2": {
      "DataTraceEnabled": {},
      "DetailedMetricsEnabled": {},
      "LoggingLevel": {},
      "ThrottlingBurstLimit": {},
      "ThrottlingRateLimit": {}
    }
  },
  "StageName": {},
  "StageVariables": {
    "property1": "string",
    "property2": "string"
  },
  "Tags": {
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

<h3 id="updatestage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateStageResponse](#schemaupdatestageresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetVpcLink

<a id="opIdGetVpcLink"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/vpclinks/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/vpclinks/{vpcLinkId}`

Gets a VPC link.

<h3 id="getvpclink-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vpcLinkId|path|string|true|The ID of the VPC link.|
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
  "CreatedDate": {},
  "Name": {},
  "SecurityGroupIds": {},
  "SubnetIds": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "VpcLinkId": {},
  "VpcLinkStatus": {},
  "VpcLinkStatusMessage": {},
  "VpcLinkVersion": {}
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

<h3 id="getvpclink-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetVpcLinkResponse](#schemagetvpclinkresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteVpcLink

<a id="opIdDeleteVpcLink"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/vpclinks/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v2/vpclinks/{vpcLinkId}`

Deletes a VPC link.

<h3 id="deletevpclink-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vpcLinkId|path|string|true|The ID of the VPC link.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 202 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="deletevpclink-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[DeleteVpcLinkResponse](#schemadeletevpclinkresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateVpcLink

<a id="opIdUpdateVpcLink"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/vpclinks/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string"
  }'
```

`PATCH /v2/vpclinks/{vpcLinkId}`

Updates a VPC link.

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="updatevpclink-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vpcLinkId|path|string|true|The ID of the VPC link.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» name|body|string|false|A string with a length between [1-128].|

> Example responses

> 200 Response

```json
{
  "CreatedDate": {},
  "Name": {},
  "SecurityGroupIds": {},
  "SubnetIds": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "VpcLinkId": {},
  "VpcLinkStatus": {},
  "VpcLinkStatusMessage": {},
  "VpcLinkVersion": {}
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

<h3 id="updatevpclink-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateVpcLinkResponse](#schemaupdatevpclinkresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ExportApi

<a id="opIdExportApi"></a>

> Code samples

```bash
curl 'https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/exports/string#outputType?outputType=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/apis/{apiId}/exports/{specification}#outputType`

<h3 id="exportapi-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|exportVersion|query|string|false|The version of the API Gateway export algorithm. API Gateway uses the latest version by default. Currently, the only supported version is 1.0.|
|includeExtensions|query|boolean|false|Specifies whether to include <a href="https://docs.aws.amazon.com//apigateway/latest/developerguide/api-gateway-swagger-extensions.html">API Gateway extensions</a> in the exported API definition. API Gateway extensions are included by default.|
|outputType|query|string|true|The output type of the exported definition file. Valid values are JSON and YAML.|
|specification|path|string|true|The version of the API specification to use. OAS30, for OpenAPI 3.0, is the only supported value.|
|stageName|query|string|false|The name of the API stage to export. If you don't specify this property, a representation of the latest API configuration is exported.|
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
  "body": "string"
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

<h3 id="exportapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExportApiResponse](#schemaexportapiresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ResetAuthorizersCache

<a id="opIdResetAuthorizersCache"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/stages/string/cache/authorizers \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v2/apis/{apiId}/stages/{stageName}/cache/authorizers`

Resets all authorizer cache entries on a stage. Supported only for HTTP APIs.

<h3 id="resetauthorizerscache-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|stageName|path|string|true|The stage name. Stage names can contain only alphanumeric characters, hyphens, and underscores, or be $default. Maximum length is 128 characters.|
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

<h3 id="resetauthorizerscache-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetModelTemplate

<a id="opIdGetModelTemplate"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/apis/string/models/string/template \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/apis/{apiId}/models/{modelId}/template`

Gets a model template.

<h3 id="getmodeltemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API identifier.|
|modelId|path|string|true|The model ID.|
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
  "Value": {}
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

<h3 id="getmodeltemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetModelTemplateResponse](#schemagetmodeltemplateresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetTags

<a id="opIdGetTags"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/tags/{resource-arn}`

Gets a collection of Tag resources.

<h3 id="gettags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource-arn|path|string|true|The resource ARN for the tag.|
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
  "Tags": {
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
|200|OK|Success|[GetTagsResponse](#schemagettagsresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://apigatewayv2.us-east-1.amazonaws.com/v2/tags/string \
  -X POST \
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

`POST /v2/tags/{resource-arn}`

Creates a new Tag resource to represent a tag.

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
|resource-arn|path|string|true|The resource ARN for the tag.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|false|Represents a collection of tags associated with the resource.|
|» » **additionalProperties**|body|[StringWithLengthBetween1And1600](#schemastringwithlengthbetween1and1600)|false|A string with a length between [0-1600].|

> Example responses

> 201 Response

```json
{}
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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://apigatewayv2.us-east-1.amazonaws.com/v2/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v2/tags/{resource-arn}#tagKeys`

Deletes a Tag.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource-arn|path|string|true|The resource ARN for the tag.|
|tagKeys|query|[[__string](#schema__string)]|true|The Tag keys to delete|
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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateApiResponse">CreateApiResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateapiresponse"></a>
<a id="schema_CreateApiResponse"></a>
<a id="tocScreateapiresponse"></a>
<a id="tocscreateapiresponse"></a>

```json
{
  "ApiEndpoint": {},
  "ApiGatewayManaged": {},
  "ApiId": {},
  "ApiKeySelectionExpression": {},
  "CorsConfiguration": {
    "AllowCredentials": {},
    "AllowHeaders": {},
    "AllowMethods": {},
    "AllowOrigins": {},
    "ExposeHeaders": {},
    "MaxAge": {}
  },
  "CreatedDate": {},
  "Description": {},
  "DisableSchemaValidation": {},
  "DisableExecuteApiEndpoint": {},
  "ImportInfo": {},
  "Name": {},
  "ProtocolType": {},
  "RouteSelectionExpression": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Version": {},
  "Warnings": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiEndpoint|object|false|none|none|
|ApiGatewayManaged|object|false|none|none|
|ApiId|object|false|none|none|
|ApiKeySelectionExpression|object|false|none|none|
|CorsConfiguration|object|false|none|none|
|CreatedDate|object|false|none|none|
|Description|object|false|none|none|
|DisableSchemaValidation|object|false|none|none|
|DisableExecuteApiEndpoint|object|false|none|none|
|ImportInfo|object|false|none|none|
|Name|object|false|none|none|
|ProtocolType|object|false|none|none|
|RouteSelectionExpression|object|false|none|none|
|Tags|object|false|none|none|
|Version|object|false|none|none|
|Warnings|object|false|none|none|

<h2 id="tocS___boolean">__boolean</h2>
<!-- backwards compatibility -->
<a id="schema__boolean"></a>
<a id="schema___boolean"></a>
<a id="tocS__boolean"></a>
<a id="tocs__boolean"></a>

```json
true
```

<h2 id="tocS_CorsHeaderList">CorsHeaderList</h2>
<!-- backwards compatibility -->
<a id="schemacorsheaderlist"></a>
<a id="schema_CorsHeaderList"></a>
<a id="tocScorsheaderlist"></a>
<a id="tocscorsheaderlist"></a>

```json
[
  "string"
]
```

Represents a collection of allowed headers. Supported only for HTTP APIs.

<h2 id="tocS_CorsMethodList">CorsMethodList</h2>
<!-- backwards compatibility -->
<a id="schemacorsmethodlist"></a>
<a id="schema_CorsMethodList"></a>
<a id="tocScorsmethodlist"></a>
<a id="tocscorsmethodlist"></a>

```json
[
  "string"
]
```

Represents a collection of methods. Supported only for HTTP APIs.

<h2 id="tocS_CorsOriginList">CorsOriginList</h2>
<!-- backwards compatibility -->
<a id="schemacorsoriginlist"></a>
<a id="schema_CorsOriginList"></a>
<a id="tocScorsoriginlist"></a>
<a id="tocscorsoriginlist"></a>

```json
[
  "string"
]
```

Represents a collection of origins. Supported only for HTTP APIs.

<h2 id="tocS_IntegerWithLengthBetweenMinus1And86400">IntegerWithLengthBetweenMinus1And86400</h2>
<!-- backwards compatibility -->
<a id="schemaintegerwithlengthbetweenminus1and86400"></a>
<a id="schema_IntegerWithLengthBetweenMinus1And86400"></a>
<a id="tocSintegerwithlengthbetweenminus1and86400"></a>
<a id="tocsintegerwithlengthbetweenminus1and86400"></a>

```json
-1
```

An integer with a value between -1 and 86400. Supported only for HTTP APIs.

<h2 id="tocS_StringWithLengthBetween1And1600">StringWithLengthBetween1And1600</h2>
<!-- backwards compatibility -->
<a id="schemastringwithlengthbetween1and1600"></a>
<a id="schema_StringWithLengthBetween1And1600"></a>
<a id="tocSstringwithlengthbetween1and1600"></a>
<a id="tocsstringwithlengthbetween1and1600"></a>

```json
"string"
```

A string with a length between [0-1600].

<h2 id="tocS_NotFoundException">NotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemanotfoundexception"></a>
<a id="schema_NotFoundException"></a>
<a id="tocSnotfoundexception"></a>
<a id="tocsnotfoundexception"></a>

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

<h2 id="tocS_CreateApiMappingResponse">CreateApiMappingResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateapimappingresponse"></a>
<a id="schema_CreateApiMappingResponse"></a>
<a id="tocScreateapimappingresponse"></a>
<a id="tocscreateapimappingresponse"></a>

```json
{
  "ApiId": {},
  "ApiMappingId": {},
  "ApiMappingKey": {},
  "Stage": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiId|object|false|none|none|
|ApiMappingId|object|false|none|none|
|ApiMappingKey|object|false|none|none|
|Stage|object|false|none|none|

<h2 id="tocS_CreateAuthorizerResponse">CreateAuthorizerResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateauthorizerresponse"></a>
<a id="schema_CreateAuthorizerResponse"></a>
<a id="tocScreateauthorizerresponse"></a>
<a id="tocscreateauthorizerresponse"></a>

```json
{
  "AuthorizerCredentialsArn": {},
  "AuthorizerId": {},
  "AuthorizerPayloadFormatVersion": {},
  "AuthorizerResultTtlInSeconds": {},
  "AuthorizerType": {},
  "AuthorizerUri": {},
  "EnableSimpleResponses": {},
  "IdentitySource": {},
  "IdentityValidationExpression": {},
  "JwtConfiguration": {
    "Audience": {},
    "Issuer": {}
  },
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuthorizerCredentialsArn|object|false|none|none|
|AuthorizerId|object|false|none|none|
|AuthorizerPayloadFormatVersion|object|false|none|none|
|AuthorizerResultTtlInSeconds|object|false|none|none|
|AuthorizerType|object|false|none|none|
|AuthorizerUri|object|false|none|none|
|EnableSimpleResponses|object|false|none|none|
|IdentitySource|object|false|none|none|
|IdentityValidationExpression|object|false|none|none|
|JwtConfiguration|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS___string">__string</h2>
<!-- backwards compatibility -->
<a id="schema__string"></a>
<a id="schema___string"></a>
<a id="tocS__string"></a>
<a id="tocs__string"></a>

```json
"string"
```

<h2 id="tocS___listOf__string">__listOf__string</h2>
<!-- backwards compatibility -->
<a id="schema__listof__string"></a>
<a id="schema___listOf__string"></a>
<a id="tocS__listof__string"></a>
<a id="tocs__listof__string"></a>

```json
[
  "string"
]
```

<h2 id="tocS_UriWithLengthBetween1And2048">UriWithLengthBetween1And2048</h2>
<!-- backwards compatibility -->
<a id="schemauriwithlengthbetween1and2048"></a>
<a id="schema_UriWithLengthBetween1And2048"></a>
<a id="tocSuriwithlengthbetween1and2048"></a>
<a id="tocsuriwithlengthbetween1and2048"></a>

```json
"string"
```

A string representation of a URI with a length between [1-2048].

<h2 id="tocS_CreateDeploymentResponse">CreateDeploymentResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedeploymentresponse"></a>
<a id="schema_CreateDeploymentResponse"></a>
<a id="tocScreatedeploymentresponse"></a>
<a id="tocscreatedeploymentresponse"></a>

```json
{
  "AutoDeployed": {},
  "CreatedDate": {},
  "DeploymentId": {},
  "DeploymentStatus": {},
  "DeploymentStatusMessage": {},
  "Description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoDeployed|object|false|none|none|
|CreatedDate|object|false|none|none|
|DeploymentId|object|false|none|none|
|DeploymentStatus|object|false|none|none|
|DeploymentStatusMessage|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_CreateDomainNameResponse">CreateDomainNameResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedomainnameresponse"></a>
<a id="schema_CreateDomainNameResponse"></a>
<a id="tocScreatedomainnameresponse"></a>
<a id="tocscreatedomainnameresponse"></a>

```json
{
  "ApiMappingSelectionExpression": {},
  "DomainName": {},
  "DomainNameConfigurations": {},
  "MutualTlsAuthentication": {
    "TruststoreUri": {},
    "TruststoreVersion": {},
    "TruststoreWarnings": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiMappingSelectionExpression|object|false|none|none|
|DomainName|object|false|none|none|
|DomainNameConfigurations|object|false|none|none|
|MutualTlsAuthentication|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DomainNameConfiguration">DomainNameConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadomainnameconfiguration"></a>
<a id="schema_DomainNameConfiguration"></a>
<a id="tocSdomainnameconfiguration"></a>
<a id="tocsdomainnameconfiguration"></a>

```json
{
  "ApiGatewayDomainName": {},
  "CertificateArn": {},
  "CertificateName": {},
  "CertificateUploadDate": {},
  "DomainNameStatus": {},
  "DomainNameStatusMessage": {},
  "EndpointType": {},
  "HostedZoneId": {},
  "SecurityPolicy": {},
  "OwnershipVerificationCertificateArn": {}
}
```

The domain name configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiGatewayDomainName|object|false|none|none|
|CertificateArn|object|false|none|none|
|CertificateName|object|false|none|none|
|CertificateUploadDate|object|false|none|none|
|DomainNameStatus|object|false|none|none|
|DomainNameStatusMessage|object|false|none|none|
|EndpointType|object|false|none|none|
|HostedZoneId|object|false|none|none|
|SecurityPolicy|object|false|none|none|
|OwnershipVerificationCertificateArn|object|false|none|none|

<h2 id="tocS_StringWithLengthBetween1And64">StringWithLengthBetween1And64</h2>
<!-- backwards compatibility -->
<a id="schemastringwithlengthbetween1and64"></a>
<a id="schema_StringWithLengthBetween1And64"></a>
<a id="tocSstringwithlengthbetween1and64"></a>
<a id="tocsstringwithlengthbetween1and64"></a>

```json
"string"
```

A string with a length between [1-64].

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

```json
null
```

<h2 id="tocS_CreateIntegrationResult">CreateIntegrationResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateintegrationresult"></a>
<a id="schema_CreateIntegrationResult"></a>
<a id="tocScreateintegrationresult"></a>
<a id="tocscreateintegrationresult"></a>

```json
{
  "ApiGatewayManaged": {},
  "ConnectionId": {},
  "ConnectionType": {},
  "ContentHandlingStrategy": {},
  "CredentialsArn": {},
  "Description": {},
  "IntegrationId": {},
  "IntegrationMethod": {},
  "IntegrationResponseSelectionExpression": {},
  "IntegrationSubtype": {},
  "IntegrationType": {},
  "IntegrationUri": {},
  "PassthroughBehavior": {},
  "PayloadFormatVersion": {},
  "RequestParameters": {
    "property1": "string",
    "property2": "string"
  },
  "RequestTemplates": {
    "property1": "string",
    "property2": "string"
  },
  "ResponseParameters": {
    "property1": {
      "property1": "string",
      "property2": "string"
    },
    "property2": {
      "property1": "string",
      "property2": "string"
    }
  },
  "TemplateSelectionExpression": {},
  "TimeoutInMillis": {},
  "TlsConfig": {
    "ServerNameToVerify": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiGatewayManaged|object|false|none|none|
|ConnectionId|object|false|none|none|
|ConnectionType|object|false|none|none|
|ContentHandlingStrategy|object|false|none|none|
|CredentialsArn|object|false|none|none|
|Description|object|false|none|none|
|IntegrationId|object|false|none|none|
|IntegrationMethod|object|false|none|none|
|IntegrationResponseSelectionExpression|object|false|none|none|
|IntegrationSubtype|object|false|none|none|
|IntegrationType|object|false|none|none|
|IntegrationUri|object|false|none|none|
|PassthroughBehavior|object|false|none|none|
|PayloadFormatVersion|object|false|none|none|
|RequestParameters|object|false|none|none|
|RequestTemplates|object|false|none|none|
|ResponseParameters|object|false|none|none|
|TemplateSelectionExpression|object|false|none|none|
|TimeoutInMillis|object|false|none|none|
|TlsConfig|object|false|none|none|

<h2 id="tocS_StringWithLengthBetween1And512">StringWithLengthBetween1And512</h2>
<!-- backwards compatibility -->
<a id="schemastringwithlengthbetween1and512"></a>
<a id="schema_StringWithLengthBetween1And512"></a>
<a id="tocSstringwithlengthbetween1and512"></a>
<a id="tocsstringwithlengthbetween1and512"></a>

```json
"string"
```

A string with a length between [1-512].

<h2 id="tocS_StringWithLengthBetween0And32K">StringWithLengthBetween0And32K</h2>
<!-- backwards compatibility -->
<a id="schemastringwithlengthbetween0and32k"></a>
<a id="schema_StringWithLengthBetween0And32K"></a>
<a id="tocSstringwithlengthbetween0and32k"></a>
<a id="tocsstringwithlengthbetween0and32k"></a>

```json
"string"
```

A string with a length between [0-32768].

<h2 id="tocS_IntegrationParameters">IntegrationParameters</h2>
<!-- backwards compatibility -->
<a id="schemaintegrationparameters"></a>
<a id="schema_IntegrationParameters"></a>
<a id="tocSintegrationparameters"></a>
<a id="tocsintegrationparameters"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

<p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>{location}</replaceable>.<replaceable>{name}</replaceable>
          , where 
            <replaceable>{location}</replaceable>
           is querystring, path, or header; and 
            <replaceable>{name}</replaceable>
           must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API integrations without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to the backend. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt; where action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[StringWithLengthBetween1And512](#schemastringwithlengthbetween1and512)|false|none|A string with a length between [1-512].|

<h2 id="tocS_CreateIntegrationResponseResponse">CreateIntegrationResponseResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateintegrationresponseresponse"></a>
<a id="schema_CreateIntegrationResponseResponse"></a>
<a id="tocScreateintegrationresponseresponse"></a>
<a id="tocscreateintegrationresponseresponse"></a>

```json
{
  "ContentHandlingStrategy": {},
  "IntegrationResponseId": {},
  "IntegrationResponseKey": {},
  "ResponseParameters": {
    "property1": "string",
    "property2": "string"
  },
  "ResponseTemplates": {
    "property1": "string",
    "property2": "string"
  },
  "TemplateSelectionExpression": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContentHandlingStrategy|object|false|none|none|
|IntegrationResponseId|object|false|none|none|
|IntegrationResponseKey|object|false|none|none|
|ResponseParameters|object|false|none|none|
|ResponseTemplates|object|false|none|none|
|TemplateSelectionExpression|object|false|none|none|

<h2 id="tocS_CreateModelResponse">CreateModelResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatemodelresponse"></a>
<a id="schema_CreateModelResponse"></a>
<a id="tocScreatemodelresponse"></a>
<a id="tocscreatemodelresponse"></a>

```json
{
  "ContentType": {},
  "Description": {},
  "ModelId": {},
  "Name": {},
  "Schema": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContentType|object|false|none|none|
|Description|object|false|none|none|
|ModelId|object|false|none|none|
|Name|object|false|none|none|
|Schema|object|false|none|none|

<h2 id="tocS_CreateRouteResult">CreateRouteResult</h2>
<!-- backwards compatibility -->
<a id="schemacreaterouteresult"></a>
<a id="schema_CreateRouteResult"></a>
<a id="tocScreaterouteresult"></a>
<a id="tocscreaterouteresult"></a>

```json
{
  "ApiGatewayManaged": {},
  "ApiKeyRequired": {},
  "AuthorizationScopes": {},
  "AuthorizationType": {},
  "AuthorizerId": {},
  "ModelSelectionExpression": {},
  "OperationName": {},
  "RequestModels": {
    "property1": "string",
    "property2": "string"
  },
  "RequestParameters": {
    "property1": {
      "Required": {}
    },
    "property2": {
      "Required": {}
    }
  },
  "RouteId": {},
  "RouteKey": {},
  "RouteResponseSelectionExpression": {},
  "Target": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiGatewayManaged|object|false|none|none|
|ApiKeyRequired|object|false|none|none|
|AuthorizationScopes|object|false|none|none|
|AuthorizationType|object|false|none|none|
|AuthorizerId|object|false|none|none|
|ModelSelectionExpression|object|false|none|none|
|OperationName|object|false|none|none|
|RequestModels|object|false|none|none|
|RequestParameters|object|false|none|none|
|RouteId|object|false|none|none|
|RouteKey|object|false|none|none|
|RouteResponseSelectionExpression|object|false|none|none|
|Target|object|false|none|none|

<h2 id="tocS_StringWithLengthBetween1And128">StringWithLengthBetween1And128</h2>
<!-- backwards compatibility -->
<a id="schemastringwithlengthbetween1and128"></a>
<a id="schema_StringWithLengthBetween1And128"></a>
<a id="tocSstringwithlengthbetween1and128"></a>
<a id="tocsstringwithlengthbetween1and128"></a>

```json
"string"
```

A string with a length between [1-128].

<h2 id="tocS_ParameterConstraints">ParameterConstraints</h2>
<!-- backwards compatibility -->
<a id="schemaparameterconstraints"></a>
<a id="schema_ParameterConstraints"></a>
<a id="tocSparameterconstraints"></a>
<a id="tocsparameterconstraints"></a>

```json
{
  "Required": {}
}
```

Validation constraints imposed on parameters of a request (path, query string, headers).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Required|object|false|none|none|

<h2 id="tocS_CreateRouteResponseResponse">CreateRouteResponseResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreaterouteresponseresponse"></a>
<a id="schema_CreateRouteResponseResponse"></a>
<a id="tocScreaterouteresponseresponse"></a>
<a id="tocscreaterouteresponseresponse"></a>

```json
{
  "ModelSelectionExpression": {},
  "ResponseModels": {
    "property1": "string",
    "property2": "string"
  },
  "ResponseParameters": {
    "property1": {
      "Required": {}
    },
    "property2": {
      "Required": {}
    }
  },
  "RouteResponseId": {},
  "RouteResponseKey": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ModelSelectionExpression|object|false|none|none|
|ResponseModels|object|false|none|none|
|ResponseParameters|object|false|none|none|
|RouteResponseId|object|false|none|none|
|RouteResponseKey|object|false|none|none|

<h2 id="tocS_CreateStageResponse">CreateStageResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatestageresponse"></a>
<a id="schema_CreateStageResponse"></a>
<a id="tocScreatestageresponse"></a>
<a id="tocscreatestageresponse"></a>

```json
{
  "AccessLogSettings": {
    "DestinationArn": {},
    "Format": {}
  },
  "ApiGatewayManaged": {},
  "AutoDeploy": {},
  "ClientCertificateId": {},
  "CreatedDate": {},
  "DefaultRouteSettings": {
    "DataTraceEnabled": {},
    "DetailedMetricsEnabled": {},
    "LoggingLevel": {},
    "ThrottlingBurstLimit": {},
    "ThrottlingRateLimit": {}
  },
  "DeploymentId": {},
  "Description": {},
  "LastDeploymentStatusMessage": {},
  "LastUpdatedDate": {},
  "RouteSettings": {
    "property1": {
      "DataTraceEnabled": {},
      "DetailedMetricsEnabled": {},
      "LoggingLevel": {},
      "ThrottlingBurstLimit": {},
      "ThrottlingRateLimit": {}
    },
    "property2": {
      "DataTraceEnabled": {},
      "DetailedMetricsEnabled": {},
      "LoggingLevel": {},
      "ThrottlingBurstLimit": {},
      "ThrottlingRateLimit": {}
    }
  },
  "StageName": {},
  "StageVariables": {
    "property1": "string",
    "property2": "string"
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessLogSettings|object|false|none|none|
|ApiGatewayManaged|object|false|none|none|
|AutoDeploy|object|false|none|none|
|ClientCertificateId|object|false|none|none|
|CreatedDate|object|false|none|none|
|DefaultRouteSettings|object|false|none|none|
|DeploymentId|object|false|none|none|
|Description|object|false|none|none|
|LastDeploymentStatusMessage|object|false|none|none|
|LastUpdatedDate|object|false|none|none|
|RouteSettings|object|false|none|none|
|StageName|object|false|none|none|
|StageVariables|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_Arn">Arn</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_Arn"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"string"
```

Represents an Amazon Resource Name (ARN).

<h2 id="tocS_StringWithLengthBetween1And1024">StringWithLengthBetween1And1024</h2>
<!-- backwards compatibility -->
<a id="schemastringwithlengthbetween1and1024"></a>
<a id="schema_StringWithLengthBetween1And1024"></a>
<a id="tocSstringwithlengthbetween1and1024"></a>
<a id="tocsstringwithlengthbetween1and1024"></a>

```json
"string"
```

A string with a length between [1-1024].

<h2 id="tocS_LoggingLevel">LoggingLevel</h2>
<!-- backwards compatibility -->
<a id="schemalogginglevel"></a>
<a id="schema_LoggingLevel"></a>
<a id="tocSlogginglevel"></a>
<a id="tocslogginglevel"></a>

```json
"ERROR"
```

The logging level.

<h2 id="tocS___integer">__integer</h2>
<!-- backwards compatibility -->
<a id="schema__integer"></a>
<a id="schema___integer"></a>
<a id="tocS__integer"></a>
<a id="tocs__integer"></a>

```json
0
```

<h2 id="tocS___double">__double</h2>
<!-- backwards compatibility -->
<a id="schema__double"></a>
<a id="schema___double"></a>
<a id="tocS__double"></a>
<a id="tocs__double"></a>

```json
0
```

<h2 id="tocS_RouteSettings">RouteSettings</h2>
<!-- backwards compatibility -->
<a id="schemaroutesettings"></a>
<a id="schema_RouteSettings"></a>
<a id="tocSroutesettings"></a>
<a id="tocsroutesettings"></a>

```json
{
  "DataTraceEnabled": {},
  "DetailedMetricsEnabled": {},
  "LoggingLevel": {},
  "ThrottlingBurstLimit": {},
  "ThrottlingRateLimit": {}
}
```

Represents a collection of route settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataTraceEnabled|object|false|none|none|
|DetailedMetricsEnabled|object|false|none|none|
|LoggingLevel|object|false|none|none|
|ThrottlingBurstLimit|object|false|none|none|
|ThrottlingRateLimit|object|false|none|none|

<h2 id="tocS_StringWithLengthBetween0And2048">StringWithLengthBetween0And2048</h2>
<!-- backwards compatibility -->
<a id="schemastringwithlengthbetween0and2048"></a>
<a id="schema_StringWithLengthBetween0And2048"></a>
<a id="tocSstringwithlengthbetween0and2048"></a>
<a id="tocsstringwithlengthbetween0and2048"></a>

```json
"string"
```

A string with a length between [0-2048].

<h2 id="tocS_CreateVpcLinkResponse">CreateVpcLinkResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatevpclinkresponse"></a>
<a id="schema_CreateVpcLinkResponse"></a>
<a id="tocScreatevpclinkresponse"></a>
<a id="tocscreatevpclinkresponse"></a>

```json
{
  "CreatedDate": {},
  "Name": {},
  "SecurityGroupIds": {},
  "SubnetIds": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "VpcLinkId": {},
  "VpcLinkStatus": {},
  "VpcLinkStatusMessage": {},
  "VpcLinkVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreatedDate|object|false|none|none|
|Name|object|false|none|none|
|SecurityGroupIds|object|false|none|none|
|SubnetIds|object|false|none|none|
|Tags|object|false|none|none|
|VpcLinkId|object|false|none|none|
|VpcLinkStatus|object|false|none|none|
|VpcLinkStatusMessage|object|false|none|none|
|VpcLinkVersion|object|false|none|none|

<h2 id="tocS_DeleteVpcLinkResponse">DeleteVpcLinkResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletevpclinkresponse"></a>
<a id="schema_DeleteVpcLinkResponse"></a>
<a id="tocSdeletevpclinkresponse"></a>
<a id="tocsdeletevpclinkresponse"></a>

```json
{}
```

<h2 id="tocS_ExportApiResponse">ExportApiResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexportapiresponse"></a>
<a id="schema_ExportApiResponse"></a>
<a id="tocSexportapiresponse"></a>
<a id="tocsexportapiresponse"></a>

```json
{
  "body": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|[ExportedApi](#schemaexportedapi)|false|none|Represents an exported definition of an API in a particular output format, for example, YAML. The API is serialized to the requested specification, for example, OpenAPI 3.0.|

<h2 id="tocS_GetApiResponse">GetApiResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetapiresponse"></a>
<a id="schema_GetApiResponse"></a>
<a id="tocSgetapiresponse"></a>
<a id="tocsgetapiresponse"></a>

```json
{
  "ApiEndpoint": {},
  "ApiGatewayManaged": {},
  "ApiId": {},
  "ApiKeySelectionExpression": {},
  "CorsConfiguration": {
    "AllowCredentials": {},
    "AllowHeaders": {},
    "AllowMethods": {},
    "AllowOrigins": {},
    "ExposeHeaders": {},
    "MaxAge": {}
  },
  "CreatedDate": {},
  "Description": {},
  "DisableSchemaValidation": {},
  "DisableExecuteApiEndpoint": {},
  "ImportInfo": {},
  "Name": {},
  "ProtocolType": {},
  "RouteSelectionExpression": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Version": {},
  "Warnings": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiEndpoint|object|false|none|none|
|ApiGatewayManaged|object|false|none|none|
|ApiId|object|false|none|none|
|ApiKeySelectionExpression|object|false|none|none|
|CorsConfiguration|object|false|none|none|
|CreatedDate|object|false|none|none|
|Description|object|false|none|none|
|DisableSchemaValidation|object|false|none|none|
|DisableExecuteApiEndpoint|object|false|none|none|
|ImportInfo|object|false|none|none|
|Name|object|false|none|none|
|ProtocolType|object|false|none|none|
|RouteSelectionExpression|object|false|none|none|
|Tags|object|false|none|none|
|Version|object|false|none|none|
|Warnings|object|false|none|none|

<h2 id="tocS_GetApiMappingResponse">GetApiMappingResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetapimappingresponse"></a>
<a id="schema_GetApiMappingResponse"></a>
<a id="tocSgetapimappingresponse"></a>
<a id="tocsgetapimappingresponse"></a>

```json
{
  "ApiId": {},
  "ApiMappingId": {},
  "ApiMappingKey": {},
  "Stage": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiId|object|false|none|none|
|ApiMappingId|object|false|none|none|
|ApiMappingKey|object|false|none|none|
|Stage|object|false|none|none|

<h2 id="tocS_GetApiMappingsResponse">GetApiMappingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetapimappingsresponse"></a>
<a id="schema_GetApiMappingsResponse"></a>
<a id="tocSgetapimappingsresponse"></a>
<a id="tocsgetapimappingsresponse"></a>

```json
{
  "Items": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetApisResponse">GetApisResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetapisresponse"></a>
<a id="schema_GetApisResponse"></a>
<a id="tocSgetapisresponse"></a>
<a id="tocsgetapisresponse"></a>

```json
{
  "Items": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetAuthorizerResponse">GetAuthorizerResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetauthorizerresponse"></a>
<a id="schema_GetAuthorizerResponse"></a>
<a id="tocSgetauthorizerresponse"></a>
<a id="tocsgetauthorizerresponse"></a>

```json
{
  "AuthorizerCredentialsArn": {},
  "AuthorizerId": {},
  "AuthorizerPayloadFormatVersion": {},
  "AuthorizerResultTtlInSeconds": {},
  "AuthorizerType": {},
  "AuthorizerUri": {},
  "EnableSimpleResponses": {},
  "IdentitySource": {},
  "IdentityValidationExpression": {},
  "JwtConfiguration": {
    "Audience": {},
    "Issuer": {}
  },
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuthorizerCredentialsArn|object|false|none|none|
|AuthorizerId|object|false|none|none|
|AuthorizerPayloadFormatVersion|object|false|none|none|
|AuthorizerResultTtlInSeconds|object|false|none|none|
|AuthorizerType|object|false|none|none|
|AuthorizerUri|object|false|none|none|
|EnableSimpleResponses|object|false|none|none|
|IdentitySource|object|false|none|none|
|IdentityValidationExpression|object|false|none|none|
|JwtConfiguration|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_GetAuthorizersResponse">GetAuthorizersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetauthorizersresponse"></a>
<a id="schema_GetAuthorizersResponse"></a>
<a id="tocSgetauthorizersresponse"></a>
<a id="tocsgetauthorizersresponse"></a>

```json
{
  "Items": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetDeploymentResponse">GetDeploymentResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdeploymentresponse"></a>
<a id="schema_GetDeploymentResponse"></a>
<a id="tocSgetdeploymentresponse"></a>
<a id="tocsgetdeploymentresponse"></a>

```json
{
  "AutoDeployed": {},
  "CreatedDate": {},
  "DeploymentId": {},
  "DeploymentStatus": {},
  "DeploymentStatusMessage": {},
  "Description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoDeployed|object|false|none|none|
|CreatedDate|object|false|none|none|
|DeploymentId|object|false|none|none|
|DeploymentStatus|object|false|none|none|
|DeploymentStatusMessage|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_GetDeploymentsResponse">GetDeploymentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdeploymentsresponse"></a>
<a id="schema_GetDeploymentsResponse"></a>
<a id="tocSgetdeploymentsresponse"></a>
<a id="tocsgetdeploymentsresponse"></a>

```json
{
  "Items": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetDomainNameResponse">GetDomainNameResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdomainnameresponse"></a>
<a id="schema_GetDomainNameResponse"></a>
<a id="tocSgetdomainnameresponse"></a>
<a id="tocsgetdomainnameresponse"></a>

```json
{
  "ApiMappingSelectionExpression": {},
  "DomainName": {},
  "DomainNameConfigurations": {},
  "MutualTlsAuthentication": {
    "TruststoreUri": {},
    "TruststoreVersion": {},
    "TruststoreWarnings": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiMappingSelectionExpression|object|false|none|none|
|DomainName|object|false|none|none|
|DomainNameConfigurations|object|false|none|none|
|MutualTlsAuthentication|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_GetDomainNamesResponse">GetDomainNamesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdomainnamesresponse"></a>
<a id="schema_GetDomainNamesResponse"></a>
<a id="tocSgetdomainnamesresponse"></a>
<a id="tocsgetdomainnamesresponse"></a>

```json
{
  "Items": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetIntegrationResult">GetIntegrationResult</h2>
<!-- backwards compatibility -->
<a id="schemagetintegrationresult"></a>
<a id="schema_GetIntegrationResult"></a>
<a id="tocSgetintegrationresult"></a>
<a id="tocsgetintegrationresult"></a>

```json
{
  "ApiGatewayManaged": {},
  "ConnectionId": {},
  "ConnectionType": {},
  "ContentHandlingStrategy": {},
  "CredentialsArn": {},
  "Description": {},
  "IntegrationId": {},
  "IntegrationMethod": {},
  "IntegrationResponseSelectionExpression": {},
  "IntegrationSubtype": {},
  "IntegrationType": {},
  "IntegrationUri": {},
  "PassthroughBehavior": {},
  "PayloadFormatVersion": {},
  "RequestParameters": {
    "property1": "string",
    "property2": "string"
  },
  "RequestTemplates": {
    "property1": "string",
    "property2": "string"
  },
  "ResponseParameters": {
    "property1": {
      "property1": "string",
      "property2": "string"
    },
    "property2": {
      "property1": "string",
      "property2": "string"
    }
  },
  "TemplateSelectionExpression": {},
  "TimeoutInMillis": {},
  "TlsConfig": {
    "ServerNameToVerify": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiGatewayManaged|object|false|none|none|
|ConnectionId|object|false|none|none|
|ConnectionType|object|false|none|none|
|ContentHandlingStrategy|object|false|none|none|
|CredentialsArn|object|false|none|none|
|Description|object|false|none|none|
|IntegrationId|object|false|none|none|
|IntegrationMethod|object|false|none|none|
|IntegrationResponseSelectionExpression|object|false|none|none|
|IntegrationSubtype|object|false|none|none|
|IntegrationType|object|false|none|none|
|IntegrationUri|object|false|none|none|
|PassthroughBehavior|object|false|none|none|
|PayloadFormatVersion|object|false|none|none|
|RequestParameters|object|false|none|none|
|RequestTemplates|object|false|none|none|
|ResponseParameters|object|false|none|none|
|TemplateSelectionExpression|object|false|none|none|
|TimeoutInMillis|object|false|none|none|
|TlsConfig|object|false|none|none|

<h2 id="tocS_GetIntegrationResponseResponse">GetIntegrationResponseResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetintegrationresponseresponse"></a>
<a id="schema_GetIntegrationResponseResponse"></a>
<a id="tocSgetintegrationresponseresponse"></a>
<a id="tocsgetintegrationresponseresponse"></a>

```json
{
  "ContentHandlingStrategy": {},
  "IntegrationResponseId": {},
  "IntegrationResponseKey": {},
  "ResponseParameters": {
    "property1": "string",
    "property2": "string"
  },
  "ResponseTemplates": {
    "property1": "string",
    "property2": "string"
  },
  "TemplateSelectionExpression": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContentHandlingStrategy|object|false|none|none|
|IntegrationResponseId|object|false|none|none|
|IntegrationResponseKey|object|false|none|none|
|ResponseParameters|object|false|none|none|
|ResponseTemplates|object|false|none|none|
|TemplateSelectionExpression|object|false|none|none|

<h2 id="tocS_GetIntegrationResponsesResponse">GetIntegrationResponsesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetintegrationresponsesresponse"></a>
<a id="schema_GetIntegrationResponsesResponse"></a>
<a id="tocSgetintegrationresponsesresponse"></a>
<a id="tocsgetintegrationresponsesresponse"></a>

```json
{
  "Items": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetIntegrationsResponse">GetIntegrationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetintegrationsresponse"></a>
<a id="schema_GetIntegrationsResponse"></a>
<a id="tocSgetintegrationsresponse"></a>
<a id="tocsgetintegrationsresponse"></a>

```json
{
  "Items": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetModelResponse">GetModelResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmodelresponse"></a>
<a id="schema_GetModelResponse"></a>
<a id="tocSgetmodelresponse"></a>
<a id="tocsgetmodelresponse"></a>

```json
{
  "ContentType": {},
  "Description": {},
  "ModelId": {},
  "Name": {},
  "Schema": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContentType|object|false|none|none|
|Description|object|false|none|none|
|ModelId|object|false|none|none|
|Name|object|false|none|none|
|Schema|object|false|none|none|

<h2 id="tocS_GetModelTemplateResponse">GetModelTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmodeltemplateresponse"></a>
<a id="schema_GetModelTemplateResponse"></a>
<a id="tocSgetmodeltemplateresponse"></a>
<a id="tocsgetmodeltemplateresponse"></a>

```json
{
  "Value": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Value|object|false|none|none|

<h2 id="tocS_GetModelsResponse">GetModelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmodelsresponse"></a>
<a id="schema_GetModelsResponse"></a>
<a id="tocSgetmodelsresponse"></a>
<a id="tocsgetmodelsresponse"></a>

```json
{
  "Items": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetRouteResult">GetRouteResult</h2>
<!-- backwards compatibility -->
<a id="schemagetrouteresult"></a>
<a id="schema_GetRouteResult"></a>
<a id="tocSgetrouteresult"></a>
<a id="tocsgetrouteresult"></a>

```json
{
  "ApiGatewayManaged": {},
  "ApiKeyRequired": {},
  "AuthorizationScopes": {},
  "AuthorizationType": {},
  "AuthorizerId": {},
  "ModelSelectionExpression": {},
  "OperationName": {},
  "RequestModels": {
    "property1": "string",
    "property2": "string"
  },
  "RequestParameters": {
    "property1": {
      "Required": {}
    },
    "property2": {
      "Required": {}
    }
  },
  "RouteId": {},
  "RouteKey": {},
  "RouteResponseSelectionExpression": {},
  "Target": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiGatewayManaged|object|false|none|none|
|ApiKeyRequired|object|false|none|none|
|AuthorizationScopes|object|false|none|none|
|AuthorizationType|object|false|none|none|
|AuthorizerId|object|false|none|none|
|ModelSelectionExpression|object|false|none|none|
|OperationName|object|false|none|none|
|RequestModels|object|false|none|none|
|RequestParameters|object|false|none|none|
|RouteId|object|false|none|none|
|RouteKey|object|false|none|none|
|RouteResponseSelectionExpression|object|false|none|none|
|Target|object|false|none|none|

<h2 id="tocS_GetRouteResponseResponse">GetRouteResponseResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetrouteresponseresponse"></a>
<a id="schema_GetRouteResponseResponse"></a>
<a id="tocSgetrouteresponseresponse"></a>
<a id="tocsgetrouteresponseresponse"></a>

```json
{
  "ModelSelectionExpression": {},
  "ResponseModels": {
    "property1": "string",
    "property2": "string"
  },
  "ResponseParameters": {
    "property1": {
      "Required": {}
    },
    "property2": {
      "Required": {}
    }
  },
  "RouteResponseId": {},
  "RouteResponseKey": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ModelSelectionExpression|object|false|none|none|
|ResponseModels|object|false|none|none|
|ResponseParameters|object|false|none|none|
|RouteResponseId|object|false|none|none|
|RouteResponseKey|object|false|none|none|

<h2 id="tocS_GetRouteResponsesResponse">GetRouteResponsesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetrouteresponsesresponse"></a>
<a id="schema_GetRouteResponsesResponse"></a>
<a id="tocSgetrouteresponsesresponse"></a>
<a id="tocsgetrouteresponsesresponse"></a>

```json
{
  "Items": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetRoutesResponse">GetRoutesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetroutesresponse"></a>
<a id="schema_GetRoutesResponse"></a>
<a id="tocSgetroutesresponse"></a>
<a id="tocsgetroutesresponse"></a>

```json
{
  "Items": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetStageResponse">GetStageResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetstageresponse"></a>
<a id="schema_GetStageResponse"></a>
<a id="tocSgetstageresponse"></a>
<a id="tocsgetstageresponse"></a>

```json
{
  "AccessLogSettings": {
    "DestinationArn": {},
    "Format": {}
  },
  "ApiGatewayManaged": {},
  "AutoDeploy": {},
  "ClientCertificateId": {},
  "CreatedDate": {},
  "DefaultRouteSettings": {
    "DataTraceEnabled": {},
    "DetailedMetricsEnabled": {},
    "LoggingLevel": {},
    "ThrottlingBurstLimit": {},
    "ThrottlingRateLimit": {}
  },
  "DeploymentId": {},
  "Description": {},
  "LastDeploymentStatusMessage": {},
  "LastUpdatedDate": {},
  "RouteSettings": {
    "property1": {
      "DataTraceEnabled": {},
      "DetailedMetricsEnabled": {},
      "LoggingLevel": {},
      "ThrottlingBurstLimit": {},
      "ThrottlingRateLimit": {}
    },
    "property2": {
      "DataTraceEnabled": {},
      "DetailedMetricsEnabled": {},
      "LoggingLevel": {},
      "ThrottlingBurstLimit": {},
      "ThrottlingRateLimit": {}
    }
  },
  "StageName": {},
  "StageVariables": {
    "property1": "string",
    "property2": "string"
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessLogSettings|object|false|none|none|
|ApiGatewayManaged|object|false|none|none|
|AutoDeploy|object|false|none|none|
|ClientCertificateId|object|false|none|none|
|CreatedDate|object|false|none|none|
|DefaultRouteSettings|object|false|none|none|
|DeploymentId|object|false|none|none|
|Description|object|false|none|none|
|LastDeploymentStatusMessage|object|false|none|none|
|LastUpdatedDate|object|false|none|none|
|RouteSettings|object|false|none|none|
|StageName|object|false|none|none|
|StageVariables|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_GetStagesResponse">GetStagesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetstagesresponse"></a>
<a id="schema_GetStagesResponse"></a>
<a id="tocSgetstagesresponse"></a>
<a id="tocsgetstagesresponse"></a>

```json
{
  "Items": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetTagsResponse">GetTagsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettagsresponse"></a>
<a id="schema_GetTagsResponse"></a>
<a id="tocSgettagsresponse"></a>
<a id="tocsgettagsresponse"></a>

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_GetVpcLinkResponse">GetVpcLinkResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetvpclinkresponse"></a>
<a id="schema_GetVpcLinkResponse"></a>
<a id="tocSgetvpclinkresponse"></a>
<a id="tocsgetvpclinkresponse"></a>

```json
{
  "CreatedDate": {},
  "Name": {},
  "SecurityGroupIds": {},
  "SubnetIds": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "VpcLinkId": {},
  "VpcLinkStatus": {},
  "VpcLinkStatusMessage": {},
  "VpcLinkVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreatedDate|object|false|none|none|
|Name|object|false|none|none|
|SecurityGroupIds|object|false|none|none|
|SubnetIds|object|false|none|none|
|Tags|object|false|none|none|
|VpcLinkId|object|false|none|none|
|VpcLinkStatus|object|false|none|none|
|VpcLinkStatusMessage|object|false|none|none|
|VpcLinkVersion|object|false|none|none|

<h2 id="tocS_GetVpcLinksResponse">GetVpcLinksResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetvpclinksresponse"></a>
<a id="schema_GetVpcLinksResponse"></a>
<a id="tocSgetvpclinksresponse"></a>
<a id="tocsgetvpclinksresponse"></a>

```json
{
  "Items": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ImportApiResponse">ImportApiResponse</h2>
<!-- backwards compatibility -->
<a id="schemaimportapiresponse"></a>
<a id="schema_ImportApiResponse"></a>
<a id="tocSimportapiresponse"></a>
<a id="tocsimportapiresponse"></a>

```json
{
  "ApiEndpoint": {},
  "ApiGatewayManaged": {},
  "ApiId": {},
  "ApiKeySelectionExpression": {},
  "CorsConfiguration": {
    "AllowCredentials": {},
    "AllowHeaders": {},
    "AllowMethods": {},
    "AllowOrigins": {},
    "ExposeHeaders": {},
    "MaxAge": {}
  },
  "CreatedDate": {},
  "Description": {},
  "DisableSchemaValidation": {},
  "DisableExecuteApiEndpoint": {},
  "ImportInfo": {},
  "Name": {},
  "ProtocolType": {},
  "RouteSelectionExpression": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Version": {},
  "Warnings": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiEndpoint|object|false|none|none|
|ApiGatewayManaged|object|false|none|none|
|ApiId|object|false|none|none|
|ApiKeySelectionExpression|object|false|none|none|
|CorsConfiguration|object|false|none|none|
|CreatedDate|object|false|none|none|
|Description|object|false|none|none|
|DisableSchemaValidation|object|false|none|none|
|DisableExecuteApiEndpoint|object|false|none|none|
|ImportInfo|object|false|none|none|
|Name|object|false|none|none|
|ProtocolType|object|false|none|none|
|RouteSelectionExpression|object|false|none|none|
|Tags|object|false|none|none|
|Version|object|false|none|none|
|Warnings|object|false|none|none|

<h2 id="tocS_ReimportApiResponse">ReimportApiResponse</h2>
<!-- backwards compatibility -->
<a id="schemareimportapiresponse"></a>
<a id="schema_ReimportApiResponse"></a>
<a id="tocSreimportapiresponse"></a>
<a id="tocsreimportapiresponse"></a>

```json
{
  "ApiEndpoint": {},
  "ApiGatewayManaged": {},
  "ApiId": {},
  "ApiKeySelectionExpression": {},
  "CorsConfiguration": {
    "AllowCredentials": {},
    "AllowHeaders": {},
    "AllowMethods": {},
    "AllowOrigins": {},
    "ExposeHeaders": {},
    "MaxAge": {}
  },
  "CreatedDate": {},
  "Description": {},
  "DisableSchemaValidation": {},
  "DisableExecuteApiEndpoint": {},
  "ImportInfo": {},
  "Name": {},
  "ProtocolType": {},
  "RouteSelectionExpression": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Version": {},
  "Warnings": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiEndpoint|object|false|none|none|
|ApiGatewayManaged|object|false|none|none|
|ApiId|object|false|none|none|
|ApiKeySelectionExpression|object|false|none|none|
|CorsConfiguration|object|false|none|none|
|CreatedDate|object|false|none|none|
|Description|object|false|none|none|
|DisableSchemaValidation|object|false|none|none|
|DisableExecuteApiEndpoint|object|false|none|none|
|ImportInfo|object|false|none|none|
|Name|object|false|none|none|
|ProtocolType|object|false|none|none|
|RouteSelectionExpression|object|false|none|none|
|Tags|object|false|none|none|
|Version|object|false|none|none|
|Warnings|object|false|none|none|

<h2 id="tocS_TagResourceResponse">TagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresponse"></a>
<a id="schema_TagResourceResponse"></a>
<a id="tocStagresourceresponse"></a>
<a id="tocstagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateApiResponse">UpdateApiResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapiresponse"></a>
<a id="schema_UpdateApiResponse"></a>
<a id="tocSupdateapiresponse"></a>
<a id="tocsupdateapiresponse"></a>

```json
{
  "ApiEndpoint": {},
  "ApiGatewayManaged": {},
  "ApiId": {},
  "ApiKeySelectionExpression": {},
  "CorsConfiguration": {
    "AllowCredentials": {},
    "AllowHeaders": {},
    "AllowMethods": {},
    "AllowOrigins": {},
    "ExposeHeaders": {},
    "MaxAge": {}
  },
  "CreatedDate": {},
  "Description": {},
  "DisableSchemaValidation": {},
  "DisableExecuteApiEndpoint": {},
  "ImportInfo": {},
  "Name": {},
  "ProtocolType": {},
  "RouteSelectionExpression": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Version": {},
  "Warnings": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiEndpoint|object|false|none|none|
|ApiGatewayManaged|object|false|none|none|
|ApiId|object|false|none|none|
|ApiKeySelectionExpression|object|false|none|none|
|CorsConfiguration|object|false|none|none|
|CreatedDate|object|false|none|none|
|Description|object|false|none|none|
|DisableSchemaValidation|object|false|none|none|
|DisableExecuteApiEndpoint|object|false|none|none|
|ImportInfo|object|false|none|none|
|Name|object|false|none|none|
|ProtocolType|object|false|none|none|
|RouteSelectionExpression|object|false|none|none|
|Tags|object|false|none|none|
|Version|object|false|none|none|
|Warnings|object|false|none|none|

<h2 id="tocS_UpdateApiMappingResponse">UpdateApiMappingResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapimappingresponse"></a>
<a id="schema_UpdateApiMappingResponse"></a>
<a id="tocSupdateapimappingresponse"></a>
<a id="tocsupdateapimappingresponse"></a>

```json
{
  "ApiId": {},
  "ApiMappingId": {},
  "ApiMappingKey": {},
  "Stage": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiId|object|false|none|none|
|ApiMappingId|object|false|none|none|
|ApiMappingKey|object|false|none|none|
|Stage|object|false|none|none|

<h2 id="tocS_UpdateAuthorizerResponse">UpdateAuthorizerResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateauthorizerresponse"></a>
<a id="schema_UpdateAuthorizerResponse"></a>
<a id="tocSupdateauthorizerresponse"></a>
<a id="tocsupdateauthorizerresponse"></a>

```json
{
  "AuthorizerCredentialsArn": {},
  "AuthorizerId": {},
  "AuthorizerPayloadFormatVersion": {},
  "AuthorizerResultTtlInSeconds": {},
  "AuthorizerType": {},
  "AuthorizerUri": {},
  "EnableSimpleResponses": {},
  "IdentitySource": {},
  "IdentityValidationExpression": {},
  "JwtConfiguration": {
    "Audience": {},
    "Issuer": {}
  },
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuthorizerCredentialsArn|object|false|none|none|
|AuthorizerId|object|false|none|none|
|AuthorizerPayloadFormatVersion|object|false|none|none|
|AuthorizerResultTtlInSeconds|object|false|none|none|
|AuthorizerType|object|false|none|none|
|AuthorizerUri|object|false|none|none|
|EnableSimpleResponses|object|false|none|none|
|IdentitySource|object|false|none|none|
|IdentityValidationExpression|object|false|none|none|
|JwtConfiguration|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_UpdateDeploymentResponse">UpdateDeploymentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedeploymentresponse"></a>
<a id="schema_UpdateDeploymentResponse"></a>
<a id="tocSupdatedeploymentresponse"></a>
<a id="tocsupdatedeploymentresponse"></a>

```json
{
  "AutoDeployed": {},
  "CreatedDate": {},
  "DeploymentId": {},
  "DeploymentStatus": {},
  "DeploymentStatusMessage": {},
  "Description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoDeployed|object|false|none|none|
|CreatedDate|object|false|none|none|
|DeploymentId|object|false|none|none|
|DeploymentStatus|object|false|none|none|
|DeploymentStatusMessage|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_UpdateDomainNameResponse">UpdateDomainNameResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedomainnameresponse"></a>
<a id="schema_UpdateDomainNameResponse"></a>
<a id="tocSupdatedomainnameresponse"></a>
<a id="tocsupdatedomainnameresponse"></a>

```json
{
  "ApiMappingSelectionExpression": {},
  "DomainName": {},
  "DomainNameConfigurations": {},
  "MutualTlsAuthentication": {
    "TruststoreUri": {},
    "TruststoreVersion": {},
    "TruststoreWarnings": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiMappingSelectionExpression|object|false|none|none|
|DomainName|object|false|none|none|
|DomainNameConfigurations|object|false|none|none|
|MutualTlsAuthentication|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_UpdateIntegrationResult">UpdateIntegrationResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdateintegrationresult"></a>
<a id="schema_UpdateIntegrationResult"></a>
<a id="tocSupdateintegrationresult"></a>
<a id="tocsupdateintegrationresult"></a>

```json
{
  "ApiGatewayManaged": {},
  "ConnectionId": {},
  "ConnectionType": {},
  "ContentHandlingStrategy": {},
  "CredentialsArn": {},
  "Description": {},
  "IntegrationId": {},
  "IntegrationMethod": {},
  "IntegrationResponseSelectionExpression": {},
  "IntegrationSubtype": {},
  "IntegrationType": {},
  "IntegrationUri": {},
  "PassthroughBehavior": {},
  "PayloadFormatVersion": {},
  "RequestParameters": {
    "property1": "string",
    "property2": "string"
  },
  "RequestTemplates": {
    "property1": "string",
    "property2": "string"
  },
  "ResponseParameters": {
    "property1": {
      "property1": "string",
      "property2": "string"
    },
    "property2": {
      "property1": "string",
      "property2": "string"
    }
  },
  "TemplateSelectionExpression": {},
  "TimeoutInMillis": {},
  "TlsConfig": {
    "ServerNameToVerify": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiGatewayManaged|object|false|none|none|
|ConnectionId|object|false|none|none|
|ConnectionType|object|false|none|none|
|ContentHandlingStrategy|object|false|none|none|
|CredentialsArn|object|false|none|none|
|Description|object|false|none|none|
|IntegrationId|object|false|none|none|
|IntegrationMethod|object|false|none|none|
|IntegrationResponseSelectionExpression|object|false|none|none|
|IntegrationSubtype|object|false|none|none|
|IntegrationType|object|false|none|none|
|IntegrationUri|object|false|none|none|
|PassthroughBehavior|object|false|none|none|
|PayloadFormatVersion|object|false|none|none|
|RequestParameters|object|false|none|none|
|RequestTemplates|object|false|none|none|
|ResponseParameters|object|false|none|none|
|TemplateSelectionExpression|object|false|none|none|
|TimeoutInMillis|object|false|none|none|
|TlsConfig|object|false|none|none|

<h2 id="tocS_UpdateIntegrationResponseResponse">UpdateIntegrationResponseResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateintegrationresponseresponse"></a>
<a id="schema_UpdateIntegrationResponseResponse"></a>
<a id="tocSupdateintegrationresponseresponse"></a>
<a id="tocsupdateintegrationresponseresponse"></a>

```json
{
  "ContentHandlingStrategy": {},
  "IntegrationResponseId": {},
  "IntegrationResponseKey": {},
  "ResponseParameters": {
    "property1": "string",
    "property2": "string"
  },
  "ResponseTemplates": {
    "property1": "string",
    "property2": "string"
  },
  "TemplateSelectionExpression": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContentHandlingStrategy|object|false|none|none|
|IntegrationResponseId|object|false|none|none|
|IntegrationResponseKey|object|false|none|none|
|ResponseParameters|object|false|none|none|
|ResponseTemplates|object|false|none|none|
|TemplateSelectionExpression|object|false|none|none|

<h2 id="tocS_UpdateModelResponse">UpdateModelResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemodelresponse"></a>
<a id="schema_UpdateModelResponse"></a>
<a id="tocSupdatemodelresponse"></a>
<a id="tocsupdatemodelresponse"></a>

```json
{
  "ContentType": {},
  "Description": {},
  "ModelId": {},
  "Name": {},
  "Schema": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContentType|object|false|none|none|
|Description|object|false|none|none|
|ModelId|object|false|none|none|
|Name|object|false|none|none|
|Schema|object|false|none|none|

<h2 id="tocS_UpdateRouteResult">UpdateRouteResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterouteresult"></a>
<a id="schema_UpdateRouteResult"></a>
<a id="tocSupdaterouteresult"></a>
<a id="tocsupdaterouteresult"></a>

```json
{
  "ApiGatewayManaged": {},
  "ApiKeyRequired": {},
  "AuthorizationScopes": {},
  "AuthorizationType": {},
  "AuthorizerId": {},
  "ModelSelectionExpression": {},
  "OperationName": {},
  "RequestModels": {
    "property1": "string",
    "property2": "string"
  },
  "RequestParameters": {
    "property1": {
      "Required": {}
    },
    "property2": {
      "Required": {}
    }
  },
  "RouteId": {},
  "RouteKey": {},
  "RouteResponseSelectionExpression": {},
  "Target": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiGatewayManaged|object|false|none|none|
|ApiKeyRequired|object|false|none|none|
|AuthorizationScopes|object|false|none|none|
|AuthorizationType|object|false|none|none|
|AuthorizerId|object|false|none|none|
|ModelSelectionExpression|object|false|none|none|
|OperationName|object|false|none|none|
|RequestModels|object|false|none|none|
|RequestParameters|object|false|none|none|
|RouteId|object|false|none|none|
|RouteKey|object|false|none|none|
|RouteResponseSelectionExpression|object|false|none|none|
|Target|object|false|none|none|

<h2 id="tocS_UpdateRouteResponseResponse">UpdateRouteResponseResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterouteresponseresponse"></a>
<a id="schema_UpdateRouteResponseResponse"></a>
<a id="tocSupdaterouteresponseresponse"></a>
<a id="tocsupdaterouteresponseresponse"></a>

```json
{
  "ModelSelectionExpression": {},
  "ResponseModels": {
    "property1": "string",
    "property2": "string"
  },
  "ResponseParameters": {
    "property1": {
      "Required": {}
    },
    "property2": {
      "Required": {}
    }
  },
  "RouteResponseId": {},
  "RouteResponseKey": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ModelSelectionExpression|object|false|none|none|
|ResponseModels|object|false|none|none|
|ResponseParameters|object|false|none|none|
|RouteResponseId|object|false|none|none|
|RouteResponseKey|object|false|none|none|

<h2 id="tocS_UpdateStageResponse">UpdateStageResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestageresponse"></a>
<a id="schema_UpdateStageResponse"></a>
<a id="tocSupdatestageresponse"></a>
<a id="tocsupdatestageresponse"></a>

```json
{
  "AccessLogSettings": {
    "DestinationArn": {},
    "Format": {}
  },
  "ApiGatewayManaged": {},
  "AutoDeploy": {},
  "ClientCertificateId": {},
  "CreatedDate": {},
  "DefaultRouteSettings": {
    "DataTraceEnabled": {},
    "DetailedMetricsEnabled": {},
    "LoggingLevel": {},
    "ThrottlingBurstLimit": {},
    "ThrottlingRateLimit": {}
  },
  "DeploymentId": {},
  "Description": {},
  "LastDeploymentStatusMessage": {},
  "LastUpdatedDate": {},
  "RouteSettings": {
    "property1": {
      "DataTraceEnabled": {},
      "DetailedMetricsEnabled": {},
      "LoggingLevel": {},
      "ThrottlingBurstLimit": {},
      "ThrottlingRateLimit": {}
    },
    "property2": {
      "DataTraceEnabled": {},
      "DetailedMetricsEnabled": {},
      "LoggingLevel": {},
      "ThrottlingBurstLimit": {},
      "ThrottlingRateLimit": {}
    }
  },
  "StageName": {},
  "StageVariables": {
    "property1": "string",
    "property2": "string"
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessLogSettings|object|false|none|none|
|ApiGatewayManaged|object|false|none|none|
|AutoDeploy|object|false|none|none|
|ClientCertificateId|object|false|none|none|
|CreatedDate|object|false|none|none|
|DefaultRouteSettings|object|false|none|none|
|DeploymentId|object|false|none|none|
|Description|object|false|none|none|
|LastDeploymentStatusMessage|object|false|none|none|
|LastUpdatedDate|object|false|none|none|
|RouteSettings|object|false|none|none|
|StageName|object|false|none|none|
|StageVariables|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_UpdateVpcLinkResponse">UpdateVpcLinkResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevpclinkresponse"></a>
<a id="schema_UpdateVpcLinkResponse"></a>
<a id="tocSupdatevpclinkresponse"></a>
<a id="tocsupdatevpclinkresponse"></a>

```json
{
  "CreatedDate": {},
  "Name": {},
  "SecurityGroupIds": {},
  "SubnetIds": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "VpcLinkId": {},
  "VpcLinkStatus": {},
  "VpcLinkStatusMessage": {},
  "VpcLinkVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreatedDate|object|false|none|none|
|Name|object|false|none|none|
|SecurityGroupIds|object|false|none|none|
|SubnetIds|object|false|none|none|
|Tags|object|false|none|none|
|VpcLinkId|object|false|none|none|
|VpcLinkStatus|object|false|none|none|
|VpcLinkStatusMessage|object|false|none|none|
|VpcLinkVersion|object|false|none|none|

<h2 id="tocS_AccessLogSettings">AccessLogSettings</h2>
<!-- backwards compatibility -->
<a id="schemaaccesslogsettings"></a>
<a id="schema_AccessLogSettings"></a>
<a id="tocSaccesslogsettings"></a>
<a id="tocsaccesslogsettings"></a>

```json
{
  "DestinationArn": {},
  "Format": {}
}
```

Settings for logging access in a stage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DestinationArn|object|false|none|none|
|Format|object|false|none|none|

<h2 id="tocS_Id">Id</h2>
<!-- backwards compatibility -->
<a id="schemaid"></a>
<a id="schema_Id"></a>
<a id="tocSid"></a>
<a id="tocsid"></a>

```json
"string"
```

The identifier.

<h2 id="tocS_SelectionExpression">SelectionExpression</h2>
<!-- backwards compatibility -->
<a id="schemaselectionexpression"></a>
<a id="schema_SelectionExpression"></a>
<a id="tocSselectionexpression"></a>
<a id="tocsselectionexpression"></a>

```json
"string"
```

An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.

<h2 id="tocS_Cors">Cors</h2>
<!-- backwards compatibility -->
<a id="schemacors"></a>
<a id="schema_Cors"></a>
<a id="tocScors"></a>
<a id="tocscors"></a>

```json
{
  "AllowCredentials": {},
  "AllowHeaders": {},
  "AllowMethods": {},
  "AllowOrigins": {},
  "ExposeHeaders": {},
  "MaxAge": {}
}
```

Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AllowCredentials|object|false|none|none|
|AllowHeaders|object|false|none|none|
|AllowMethods|object|false|none|none|
|AllowOrigins|object|false|none|none|
|ExposeHeaders|object|false|none|none|
|MaxAge|object|false|none|none|

<h2 id="tocS___timestampIso8601">__timestampIso8601</h2>
<!-- backwards compatibility -->
<a id="schema__timestampiso8601"></a>
<a id="schema___timestampIso8601"></a>
<a id="tocS__timestampiso8601"></a>
<a id="tocs__timestampiso8601"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_StringWithLengthBetween0And1024">StringWithLengthBetween0And1024</h2>
<!-- backwards compatibility -->
<a id="schemastringwithlengthbetween0and1024"></a>
<a id="schema_StringWithLengthBetween0And1024"></a>
<a id="tocSstringwithlengthbetween0and1024"></a>
<a id="tocsstringwithlengthbetween0and1024"></a>

```json
"string"
```

A string with a length between [0-1024].

<h2 id="tocS_ProtocolType">ProtocolType</h2>
<!-- backwards compatibility -->
<a id="schemaprotocoltype"></a>
<a id="schema_ProtocolType"></a>
<a id="tocSprotocoltype"></a>
<a id="tocsprotocoltype"></a>

```json
"WEBSOCKET"
```

Represents a protocol type.

<h2 id="tocS_Tags">Tags</h2>
<!-- backwards compatibility -->
<a id="schematags"></a>
<a id="schema_Tags"></a>
<a id="tocStags"></a>
<a id="tocstags"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

Represents a collection of tags associated with the resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[StringWithLengthBetween1And1600](#schemastringwithlengthbetween1and1600)|false|none|A string with a length between [0-1600].|

<h2 id="tocS_Api">Api</h2>
<!-- backwards compatibility -->
<a id="schemaapi"></a>
<a id="schema_Api"></a>
<a id="tocSapi"></a>
<a id="tocsapi"></a>

```json
{
  "ApiEndpoint": {},
  "ApiGatewayManaged": {},
  "ApiId": {},
  "ApiKeySelectionExpression": {},
  "CorsConfiguration": {
    "AllowCredentials": {},
    "AllowHeaders": {},
    "AllowMethods": {},
    "AllowOrigins": {},
    "ExposeHeaders": {},
    "MaxAge": {}
  },
  "CreatedDate": {},
  "Description": {},
  "DisableSchemaValidation": {},
  "DisableExecuteApiEndpoint": {},
  "ImportInfo": {},
  "Name": {},
  "ProtocolType": {},
  "RouteSelectionExpression": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Version": {},
  "Warnings": {}
}
```

Represents an API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiEndpoint|object|false|none|none|
|ApiGatewayManaged|object|false|none|none|
|ApiId|object|false|none|none|
|ApiKeySelectionExpression|object|false|none|none|
|CorsConfiguration|object|false|none|none|
|CreatedDate|object|false|none|none|
|Description|object|false|none|none|
|DisableSchemaValidation|object|false|none|none|
|DisableExecuteApiEndpoint|object|false|none|none|
|ImportInfo|object|false|none|none|
|Name|object|true|none|none|
|ProtocolType|object|true|none|none|
|RouteSelectionExpression|object|true|none|none|
|Tags|object|false|none|none|
|Version|object|false|none|none|
|Warnings|object|false|none|none|

<h2 id="tocS_SelectionKey">SelectionKey</h2>
<!-- backwards compatibility -->
<a id="schemaselectionkey"></a>
<a id="schema_SelectionKey"></a>
<a id="tocSselectionkey"></a>
<a id="tocsselectionkey"></a>

```json
"string"
```

After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.

<h2 id="tocS_ApiMapping">ApiMapping</h2>
<!-- backwards compatibility -->
<a id="schemaapimapping"></a>
<a id="schema_ApiMapping"></a>
<a id="tocSapimapping"></a>
<a id="tocsapimapping"></a>

```json
{
  "ApiId": {},
  "ApiMappingId": {},
  "ApiMappingKey": {},
  "Stage": {}
}
```

Represents an API mapping.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiId|object|true|none|none|
|ApiMappingId|object|false|none|none|
|ApiMappingKey|object|false|none|none|
|Stage|object|true|none|none|

<h2 id="tocS_AuthorizationScopes">AuthorizationScopes</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizationscopes"></a>
<a id="schema_AuthorizationScopes"></a>
<a id="tocSauthorizationscopes"></a>
<a id="tocsauthorizationscopes"></a>

```json
[
  "string"
]
```

A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes.

<h2 id="tocS_AuthorizationType">AuthorizationType</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizationtype"></a>
<a id="schema_AuthorizationType"></a>
<a id="tocSauthorizationtype"></a>
<a id="tocsauthorizationtype"></a>

```json
"NONE"
```

The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.

<h2 id="tocS_IntegerWithLengthBetween0And3600">IntegerWithLengthBetween0And3600</h2>
<!-- backwards compatibility -->
<a id="schemaintegerwithlengthbetween0and3600"></a>
<a id="schema_IntegerWithLengthBetween0And3600"></a>
<a id="tocSintegerwithlengthbetween0and3600"></a>
<a id="tocsintegerwithlengthbetween0and3600"></a>

```json
0
```

An integer with a value between [0-3600].

<h2 id="tocS_AuthorizerType">AuthorizerType</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizertype"></a>
<a id="schema_AuthorizerType"></a>
<a id="tocSauthorizertype"></a>
<a id="tocsauthorizertype"></a>

```json
"REQUEST"
```

The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).

<h2 id="tocS_IdentitySourceList">IdentitySourceList</h2>
<!-- backwards compatibility -->
<a id="schemaidentitysourcelist"></a>
<a id="schema_IdentitySourceList"></a>
<a id="tocSidentitysourcelist"></a>
<a id="tocsidentitysourcelist"></a>

```json
[
  "string"
]
```

The identity source for which authorization is requested. For the REQUEST authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an Auth header, a Name query string parameter are defined as identity sources, this value is $method.request.header.Auth, $method.request.querystring.Name. These parameters will be used to derive the authorization caching key and to perform runtime validation of the REQUEST authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional.

<h2 id="tocS_JWTConfiguration">JWTConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemajwtconfiguration"></a>
<a id="schema_JWTConfiguration"></a>
<a id="tocSjwtconfiguration"></a>
<a id="tocsjwtconfiguration"></a>

```json
{
  "Audience": {},
  "Issuer": {}
}
```

Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Audience|object|false|none|none|
|Issuer|object|false|none|none|

<h2 id="tocS_Authorizer">Authorizer</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizer"></a>
<a id="schema_Authorizer"></a>
<a id="tocSauthorizer"></a>
<a id="tocsauthorizer"></a>

```json
{
  "AuthorizerCredentialsArn": {},
  "AuthorizerId": {},
  "AuthorizerPayloadFormatVersion": {},
  "AuthorizerResultTtlInSeconds": {},
  "AuthorizerType": {},
  "AuthorizerUri": {},
  "EnableSimpleResponses": {},
  "IdentitySource": {},
  "IdentityValidationExpression": {},
  "JwtConfiguration": {
    "Audience": {},
    "Issuer": {}
  },
  "Name": {}
}
```

Represents an authorizer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuthorizerCredentialsArn|object|false|none|none|
|AuthorizerId|object|false|none|none|
|AuthorizerPayloadFormatVersion|object|false|none|none|
|AuthorizerResultTtlInSeconds|object|false|none|none|
|AuthorizerType|object|false|none|none|
|AuthorizerUri|object|false|none|none|
|EnableSimpleResponses|object|false|none|none|
|IdentitySource|object|false|none|none|
|IdentityValidationExpression|object|false|none|none|
|JwtConfiguration|object|false|none|none|
|Name|object|true|none|none|

<h2 id="tocS_ConnectionType">ConnectionType</h2>
<!-- backwards compatibility -->
<a id="schemaconnectiontype"></a>
<a id="schema_ConnectionType"></a>
<a id="tocSconnectiontype"></a>
<a id="tocsconnectiontype"></a>

```json
"INTERNET"
```

Represents a connection type.

<h2 id="tocS_ContentHandlingStrategy">ContentHandlingStrategy</h2>
<!-- backwards compatibility -->
<a id="schemacontenthandlingstrategy"></a>
<a id="schema_ContentHandlingStrategy"></a>
<a id="tocScontenthandlingstrategy"></a>
<a id="tocscontenthandlingstrategy"></a>

```json
"CONVERT_TO_BINARY"
```

Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs.

<h2 id="tocS_CreateApiMappingRequest">CreateApiMappingRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateapimappingrequest"></a>
<a id="schema_CreateApiMappingRequest"></a>
<a id="tocScreateapimappingrequest"></a>
<a id="tocscreateapimappingrequest"></a>

```json
{
  "ApiId": {},
  "ApiMappingKey": {},
  "Stage": {}
}
```

Creates a new ApiMapping resource to represent an API mapping.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiId|object|true|none|none|
|ApiMappingKey|object|false|none|none|
|Stage|object|true|none|none|

<h2 id="tocS_CreateApiRequest">CreateApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateapirequest"></a>
<a id="schema_CreateApiRequest"></a>
<a id="tocScreateapirequest"></a>
<a id="tocscreateapirequest"></a>

```json
{
  "ApiKeySelectionExpression": {},
  "CorsConfiguration": {
    "AllowCredentials": {},
    "AllowHeaders": {},
    "AllowMethods": {},
    "AllowOrigins": {},
    "ExposeHeaders": {},
    "MaxAge": {}
  },
  "CredentialsArn": {},
  "Description": {},
  "DisableSchemaValidation": {},
  "DisableExecuteApiEndpoint": {},
  "Name": {},
  "ProtocolType": {},
  "RouteKey": {},
  "RouteSelectionExpression": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Target": {},
  "Version": {}
}
```

Creates a new Api resource to represent an API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiKeySelectionExpression|object|false|none|none|
|CorsConfiguration|object|false|none|none|
|CredentialsArn|object|false|none|none|
|Description|object|false|none|none|
|DisableSchemaValidation|object|false|none|none|
|DisableExecuteApiEndpoint|object|false|none|none|
|Name|object|true|none|none|
|ProtocolType|object|true|none|none|
|RouteKey|object|false|none|none|
|RouteSelectionExpression|object|false|none|none|
|Tags|object|false|none|none|
|Target|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_CreateAuthorizerRequest">CreateAuthorizerRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateauthorizerrequest"></a>
<a id="schema_CreateAuthorizerRequest"></a>
<a id="tocScreateauthorizerrequest"></a>
<a id="tocscreateauthorizerrequest"></a>

```json
{
  "AuthorizerCredentialsArn": {},
  "AuthorizerPayloadFormatVersion": {},
  "AuthorizerResultTtlInSeconds": {},
  "AuthorizerType": {},
  "AuthorizerUri": {},
  "EnableSimpleResponses": {},
  "IdentitySource": {},
  "IdentityValidationExpression": {},
  "JwtConfiguration": {
    "Audience": {},
    "Issuer": {}
  },
  "Name": {}
}
```

Creates a new Authorizer resource to represent an authorizer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuthorizerCredentialsArn|object|false|none|none|
|AuthorizerPayloadFormatVersion|object|false|none|none|
|AuthorizerResultTtlInSeconds|object|false|none|none|
|AuthorizerType|object|true|none|none|
|AuthorizerUri|object|false|none|none|
|EnableSimpleResponses|object|false|none|none|
|IdentitySource|object|true|none|none|
|IdentityValidationExpression|object|false|none|none|
|JwtConfiguration|object|false|none|none|
|Name|object|true|none|none|

<h2 id="tocS_CreateDeploymentRequest">CreateDeploymentRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedeploymentrequest"></a>
<a id="schema_CreateDeploymentRequest"></a>
<a id="tocScreatedeploymentrequest"></a>
<a id="tocscreatedeploymentrequest"></a>

```json
{
  "Description": {},
  "StageName": {}
}
```

Creates a new Deployment resource to represent a deployment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|StageName|object|false|none|none|

<h2 id="tocS_DeploymentStatus">DeploymentStatus</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentstatus"></a>
<a id="schema_DeploymentStatus"></a>
<a id="tocSdeploymentstatus"></a>
<a id="tocsdeploymentstatus"></a>

```json
"PENDING"
```

Represents a deployment status.

<h2 id="tocS_DomainNameConfigurations">DomainNameConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemadomainnameconfigurations"></a>
<a id="schema_DomainNameConfigurations"></a>
<a id="tocSdomainnameconfigurations"></a>
<a id="tocsdomainnameconfigurations"></a>

```json
[
  {
    "ApiGatewayDomainName": {},
    "CertificateArn": {},
    "CertificateName": {},
    "CertificateUploadDate": {},
    "DomainNameStatus": {},
    "DomainNameStatusMessage": {},
    "EndpointType": {},
    "HostedZoneId": {},
    "SecurityPolicy": {},
    "OwnershipVerificationCertificateArn": {}
  }
]
```

The domain name configurations.

<h2 id="tocS_MutualTlsAuthenticationInput">MutualTlsAuthenticationInput</h2>
<!-- backwards compatibility -->
<a id="schemamutualtlsauthenticationinput"></a>
<a id="schema_MutualTlsAuthenticationInput"></a>
<a id="tocSmutualtlsauthenticationinput"></a>
<a id="tocsmutualtlsauthenticationinput"></a>

```json
{
  "TruststoreUri": {},
  "TruststoreVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TruststoreUri|object|false|none|none|
|TruststoreVersion|object|false|none|none|

<h2 id="tocS_CreateDomainNameRequest">CreateDomainNameRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedomainnamerequest"></a>
<a id="schema_CreateDomainNameRequest"></a>
<a id="tocScreatedomainnamerequest"></a>
<a id="tocscreatedomainnamerequest"></a>

```json
{
  "DomainName": {},
  "DomainNameConfigurations": {},
  "MutualTlsAuthentication": {
    "TruststoreUri": {},
    "TruststoreVersion": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Creates a new DomainName resource to represent a domain name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|DomainNameConfigurations|object|false|none|none|
|MutualTlsAuthentication|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_MutualTlsAuthentication">MutualTlsAuthentication</h2>
<!-- backwards compatibility -->
<a id="schemamutualtlsauthentication"></a>
<a id="schema_MutualTlsAuthentication"></a>
<a id="tocSmutualtlsauthentication"></a>
<a id="tocsmutualtlsauthentication"></a>

```json
{
  "TruststoreUri": {},
  "TruststoreVersion": {},
  "TruststoreWarnings": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TruststoreUri|object|false|none|none|
|TruststoreVersion|object|false|none|none|
|TruststoreWarnings|object|false|none|none|

<h2 id="tocS_IntegrationType">IntegrationType</h2>
<!-- backwards compatibility -->
<a id="schemaintegrationtype"></a>
<a id="schema_IntegrationType"></a>
<a id="tocSintegrationtype"></a>
<a id="tocsintegrationtype"></a>

```json
"AWS"
```

Represents an API method integration type.

<h2 id="tocS_PassthroughBehavior">PassthroughBehavior</h2>
<!-- backwards compatibility -->
<a id="schemapassthroughbehavior"></a>
<a id="schema_PassthroughBehavior"></a>
<a id="tocSpassthroughbehavior"></a>
<a id="tocspassthroughbehavior"></a>

```json
"WHEN_NO_MATCH"
```

Represents passthrough behavior for an integration response. Supported only for WebSocket APIs.

<h2 id="tocS_TemplateMap">TemplateMap</h2>
<!-- backwards compatibility -->
<a id="schematemplatemap"></a>
<a id="schema_TemplateMap"></a>
<a id="tocStemplatemap"></a>
<a id="tocstemplatemap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[StringWithLengthBetween0And32K](#schemastringwithlengthbetween0and32k)|false|none|A string with a length between [0-32768].|

<h2 id="tocS_ResponseParameters">ResponseParameters</h2>
<!-- backwards compatibility -->
<a id="schemaresponseparameters"></a>
<a id="schema_ResponseParameters"></a>
<a id="tocSresponseparameters"></a>
<a id="tocsresponseparameters"></a>

```json
{
  "property1": {
    "property1": "string",
    "property2": "string"
  },
  "property2": {
    "property1": "string",
    "property2": "string"
  }
}
```

Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[IntegrationParameters](#schemaintegrationparameters)|false|none|<p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>{location}</replaceable>.<replaceable>{name}</replaceable><br>          , where <br>            <replaceable>{location}</replaceable><br>           is querystring, path, or header; and <br>            <replaceable>{name}</replaceable><br>           must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API integrations without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to the backend. The key should follow the pattern &lt;action&gt;:&lt;header\|querystring\|path&gt;.&lt;location&gt; where action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>|

<h2 id="tocS_IntegerWithLengthBetween50And30000">IntegerWithLengthBetween50And30000</h2>
<!-- backwards compatibility -->
<a id="schemaintegerwithlengthbetween50and30000"></a>
<a id="schema_IntegerWithLengthBetween50And30000"></a>
<a id="tocSintegerwithlengthbetween50and30000"></a>
<a id="tocsintegerwithlengthbetween50and30000"></a>

```json
50
```

An integer with a value between [50-30000].

<h2 id="tocS_TlsConfigInput">TlsConfigInput</h2>
<!-- backwards compatibility -->
<a id="schematlsconfiginput"></a>
<a id="schema_TlsConfigInput"></a>
<a id="tocStlsconfiginput"></a>
<a id="tocstlsconfiginput"></a>

```json
{
  "ServerNameToVerify": {}
}
```

The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerNameToVerify|object|false|none|none|

<h2 id="tocS_CreateIntegrationRequest">CreateIntegrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateintegrationrequest"></a>
<a id="schema_CreateIntegrationRequest"></a>
<a id="tocScreateintegrationrequest"></a>
<a id="tocscreateintegrationrequest"></a>

```json
{
  "ConnectionId": {},
  "ConnectionType": {},
  "ContentHandlingStrategy": {},
  "CredentialsArn": {},
  "Description": {},
  "IntegrationMethod": {},
  "IntegrationSubtype": {},
  "IntegrationType": {},
  "IntegrationUri": {},
  "PassthroughBehavior": {},
  "PayloadFormatVersion": {},
  "RequestParameters": {
    "property1": "string",
    "property2": "string"
  },
  "RequestTemplates": {
    "property1": "string",
    "property2": "string"
  },
  "ResponseParameters": {
    "property1": {
      "property1": "string",
      "property2": "string"
    },
    "property2": {
      "property1": "string",
      "property2": "string"
    }
  },
  "TemplateSelectionExpression": {},
  "TimeoutInMillis": {},
  "TlsConfig": {
    "ServerNameToVerify": {}
  }
}
```

Creates a new Integration resource to represent an integration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectionId|object|false|none|none|
|ConnectionType|object|false|none|none|
|ContentHandlingStrategy|object|false|none|none|
|CredentialsArn|object|false|none|none|
|Description|object|false|none|none|
|IntegrationMethod|object|false|none|none|
|IntegrationSubtype|object|false|none|none|
|IntegrationType|object|true|none|none|
|IntegrationUri|object|false|none|none|
|PassthroughBehavior|object|false|none|none|
|PayloadFormatVersion|object|false|none|none|
|RequestParameters|object|false|none|none|
|RequestTemplates|object|false|none|none|
|ResponseParameters|object|false|none|none|
|TemplateSelectionExpression|object|false|none|none|
|TimeoutInMillis|object|false|none|none|
|TlsConfig|object|false|none|none|

<h2 id="tocS_TlsConfig">TlsConfig</h2>
<!-- backwards compatibility -->
<a id="schematlsconfig"></a>
<a id="schema_TlsConfig"></a>
<a id="tocStlsconfig"></a>
<a id="tocstlsconfig"></a>

```json
{
  "ServerNameToVerify": {}
}
```

The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerNameToVerify|object|false|none|none|

<h2 id="tocS_CreateIntegrationResponseRequest">CreateIntegrationResponseRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateintegrationresponserequest"></a>
<a id="schema_CreateIntegrationResponseRequest"></a>
<a id="tocScreateintegrationresponserequest"></a>
<a id="tocscreateintegrationresponserequest"></a>

```json
{
  "ContentHandlingStrategy": {},
  "IntegrationResponseKey": {},
  "ResponseParameters": {
    "property1": "string",
    "property2": "string"
  },
  "ResponseTemplates": {
    "property1": "string",
    "property2": "string"
  },
  "TemplateSelectionExpression": {}
}
```

Creates a new IntegrationResponse resource to represent an integration response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContentHandlingStrategy|object|false|none|none|
|IntegrationResponseKey|object|true|none|none|
|ResponseParameters|object|false|none|none|
|ResponseTemplates|object|false|none|none|
|TemplateSelectionExpression|object|false|none|none|

<h2 id="tocS_StringWithLengthBetween1And256">StringWithLengthBetween1And256</h2>
<!-- backwards compatibility -->
<a id="schemastringwithlengthbetween1and256"></a>
<a id="schema_StringWithLengthBetween1And256"></a>
<a id="tocSstringwithlengthbetween1and256"></a>
<a id="tocsstringwithlengthbetween1and256"></a>

```json
"string"
```

A string with a length between [1-256].

<h2 id="tocS_CreateModelRequest">CreateModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatemodelrequest"></a>
<a id="schema_CreateModelRequest"></a>
<a id="tocScreatemodelrequest"></a>
<a id="tocscreatemodelrequest"></a>

```json
{
  "ContentType": {},
  "Description": {},
  "Name": {},
  "Schema": {}
}
```

Creates a new Model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContentType|object|false|none|none|
|Description|object|false|none|none|
|Name|object|true|none|none|
|Schema|object|true|none|none|

<h2 id="tocS_RouteModels">RouteModels</h2>
<!-- backwards compatibility -->
<a id="schemaroutemodels"></a>
<a id="schema_RouteModels"></a>
<a id="tocSroutemodels"></a>
<a id="tocsroutemodels"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

The route models.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[StringWithLengthBetween1And128](#schemastringwithlengthbetween1and128)|false|none|A string with a length between [1-128].|

<h2 id="tocS_RouteParameters">RouteParameters</h2>
<!-- backwards compatibility -->
<a id="schemarouteparameters"></a>
<a id="schema_RouteParameters"></a>
<a id="tocSrouteparameters"></a>
<a id="tocsrouteparameters"></a>

```json
{
  "property1": {
    "Required": {}
  },
  "property2": {
    "Required": {}
  }
}
```

The route parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ParameterConstraints](#schemaparameterconstraints)|false|none|Validation constraints imposed on parameters of a request (path, query string, headers).|

<h2 id="tocS_CreateRouteRequest">CreateRouteRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreaterouterequest"></a>
<a id="schema_CreateRouteRequest"></a>
<a id="tocScreaterouterequest"></a>
<a id="tocscreaterouterequest"></a>

```json
{
  "ApiKeyRequired": {},
  "AuthorizationScopes": {},
  "AuthorizationType": {},
  "AuthorizerId": {},
  "ModelSelectionExpression": {},
  "OperationName": {},
  "RequestModels": {
    "property1": "string",
    "property2": "string"
  },
  "RequestParameters": {
    "property1": {
      "Required": {}
    },
    "property2": {
      "Required": {}
    }
  },
  "RouteKey": {},
  "RouteResponseSelectionExpression": {},
  "Target": {}
}
```

Creates a new Route resource to represent a route.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiKeyRequired|object|false|none|none|
|AuthorizationScopes|object|false|none|none|
|AuthorizationType|object|false|none|none|
|AuthorizerId|object|false|none|none|
|ModelSelectionExpression|object|false|none|none|
|OperationName|object|false|none|none|
|RequestModels|object|false|none|none|
|RequestParameters|object|false|none|none|
|RouteKey|object|true|none|none|
|RouteResponseSelectionExpression|object|false|none|none|
|Target|object|false|none|none|

<h2 id="tocS_CreateRouteResponseRequest">CreateRouteResponseRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreaterouteresponserequest"></a>
<a id="schema_CreateRouteResponseRequest"></a>
<a id="tocScreaterouteresponserequest"></a>
<a id="tocscreaterouteresponserequest"></a>

```json
{
  "ModelSelectionExpression": {},
  "ResponseModels": {
    "property1": "string",
    "property2": "string"
  },
  "ResponseParameters": {
    "property1": {
      "Required": {}
    },
    "property2": {
      "Required": {}
    }
  },
  "RouteResponseKey": {}
}
```

Creates a new RouteResponse resource to represent a route response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ModelSelectionExpression|object|false|none|none|
|ResponseModels|object|false|none|none|
|ResponseParameters|object|false|none|none|
|RouteResponseKey|object|true|none|none|

<h2 id="tocS_RouteSettingsMap">RouteSettingsMap</h2>
<!-- backwards compatibility -->
<a id="schemaroutesettingsmap"></a>
<a id="schema_RouteSettingsMap"></a>
<a id="tocSroutesettingsmap"></a>
<a id="tocsroutesettingsmap"></a>

```json
{
  "property1": {
    "DataTraceEnabled": {},
    "DetailedMetricsEnabled": {},
    "LoggingLevel": {},
    "ThrottlingBurstLimit": {},
    "ThrottlingRateLimit": {}
  },
  "property2": {
    "DataTraceEnabled": {},
    "DetailedMetricsEnabled": {},
    "LoggingLevel": {},
    "ThrottlingBurstLimit": {},
    "ThrottlingRateLimit": {}
  }
}
```

The route settings map.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[RouteSettings](#schemaroutesettings)|false|none|Represents a collection of route settings.|

<h2 id="tocS_StageVariablesMap">StageVariablesMap</h2>
<!-- backwards compatibility -->
<a id="schemastagevariablesmap"></a>
<a id="schema_StageVariablesMap"></a>
<a id="tocSstagevariablesmap"></a>
<a id="tocsstagevariablesmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

The stage variable map.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[StringWithLengthBetween0And2048](#schemastringwithlengthbetween0and2048)|false|none|A string with a length between [0-2048].|

<h2 id="tocS_CreateStageRequest">CreateStageRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatestagerequest"></a>
<a id="schema_CreateStageRequest"></a>
<a id="tocScreatestagerequest"></a>
<a id="tocscreatestagerequest"></a>

```json
{
  "AccessLogSettings": {
    "DestinationArn": {},
    "Format": {}
  },
  "AutoDeploy": {},
  "ClientCertificateId": {},
  "DefaultRouteSettings": {
    "DataTraceEnabled": {},
    "DetailedMetricsEnabled": {},
    "LoggingLevel": {},
    "ThrottlingBurstLimit": {},
    "ThrottlingRateLimit": {}
  },
  "DeploymentId": {},
  "Description": {},
  "RouteSettings": {
    "property1": {
      "DataTraceEnabled": {},
      "DetailedMetricsEnabled": {},
      "LoggingLevel": {},
      "ThrottlingBurstLimit": {},
      "ThrottlingRateLimit": {}
    },
    "property2": {
      "DataTraceEnabled": {},
      "DetailedMetricsEnabled": {},
      "LoggingLevel": {},
      "ThrottlingBurstLimit": {},
      "ThrottlingRateLimit": {}
    }
  },
  "StageName": {},
  "StageVariables": {
    "property1": "string",
    "property2": "string"
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Creates a new Stage resource to represent a stage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessLogSettings|object|false|none|none|
|AutoDeploy|object|false|none|none|
|ClientCertificateId|object|false|none|none|
|DefaultRouteSettings|object|false|none|none|
|DeploymentId|object|false|none|none|
|Description|object|false|none|none|
|RouteSettings|object|false|none|none|
|StageName|object|true|none|none|
|StageVariables|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_SecurityGroupIdList">SecurityGroupIdList</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupidlist"></a>
<a id="schema_SecurityGroupIdList"></a>
<a id="tocSsecuritygroupidlist"></a>
<a id="tocssecuritygroupidlist"></a>

```json
[
  "string"
]
```

A list of security group IDs for the VPC link.

<h2 id="tocS_SubnetIdList">SubnetIdList</h2>
<!-- backwards compatibility -->
<a id="schemasubnetidlist"></a>
<a id="schema_SubnetIdList"></a>
<a id="tocSsubnetidlist"></a>
<a id="tocssubnetidlist"></a>

```json
[
  "string"
]
```

A list of subnet IDs to include in the VPC link.

<h2 id="tocS_CreateVpcLinkRequest">CreateVpcLinkRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatevpclinkrequest"></a>
<a id="schema_CreateVpcLinkRequest"></a>
<a id="tocScreatevpclinkrequest"></a>
<a id="tocscreatevpclinkrequest"></a>

```json
{
  "Name": {},
  "SecurityGroupIds": {},
  "SubnetIds": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Creates a VPC link

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|SecurityGroupIds|object|false|none|none|
|SubnetIds|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_VpcLinkStatus">VpcLinkStatus</h2>
<!-- backwards compatibility -->
<a id="schemavpclinkstatus"></a>
<a id="schema_VpcLinkStatus"></a>
<a id="tocSvpclinkstatus"></a>
<a id="tocsvpclinkstatus"></a>

```json
"PENDING"
```

The status of the VPC link.

<h2 id="tocS_VpcLinkVersion">VpcLinkVersion</h2>
<!-- backwards compatibility -->
<a id="schemavpclinkversion"></a>
<a id="schema_VpcLinkVersion"></a>
<a id="tocSvpclinkversion"></a>
<a id="tocsvpclinkversion"></a>

```json
"V2"
```

The version of the VPC link.

<h2 id="tocS_DeleteAccessLogSettingsRequest">DeleteAccessLogSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteaccesslogsettingsrequest"></a>
<a id="schema_DeleteAccessLogSettingsRequest"></a>
<a id="tocSdeleteaccesslogsettingsrequest"></a>
<a id="tocsdeleteaccesslogsettingsrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteApiMappingRequest">DeleteApiMappingRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapimappingrequest"></a>
<a id="schema_DeleteApiMappingRequest"></a>
<a id="tocSdeleteapimappingrequest"></a>
<a id="tocsdeleteapimappingrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteApiRequest">DeleteApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapirequest"></a>
<a id="schema_DeleteApiRequest"></a>
<a id="tocSdeleteapirequest"></a>
<a id="tocsdeleteapirequest"></a>

```json
{}
```

<h2 id="tocS_DeleteAuthorizerRequest">DeleteAuthorizerRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteauthorizerrequest"></a>
<a id="schema_DeleteAuthorizerRequest"></a>
<a id="tocSdeleteauthorizerrequest"></a>
<a id="tocsdeleteauthorizerrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteCorsConfigurationRequest">DeleteCorsConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecorsconfigurationrequest"></a>
<a id="schema_DeleteCorsConfigurationRequest"></a>
<a id="tocSdeletecorsconfigurationrequest"></a>
<a id="tocsdeletecorsconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteDeploymentRequest">DeleteDeploymentRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedeploymentrequest"></a>
<a id="schema_DeleteDeploymentRequest"></a>
<a id="tocSdeletedeploymentrequest"></a>
<a id="tocsdeletedeploymentrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteDomainNameRequest">DeleteDomainNameRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedomainnamerequest"></a>
<a id="schema_DeleteDomainNameRequest"></a>
<a id="tocSdeletedomainnamerequest"></a>
<a id="tocsdeletedomainnamerequest"></a>

```json
{}
```

<h2 id="tocS_DeleteIntegrationRequest">DeleteIntegrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteintegrationrequest"></a>
<a id="schema_DeleteIntegrationRequest"></a>
<a id="tocSdeleteintegrationrequest"></a>
<a id="tocsdeleteintegrationrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteIntegrationResponseRequest">DeleteIntegrationResponseRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteintegrationresponserequest"></a>
<a id="schema_DeleteIntegrationResponseRequest"></a>
<a id="tocSdeleteintegrationresponserequest"></a>
<a id="tocsdeleteintegrationresponserequest"></a>

```json
{}
```

<h2 id="tocS_DeleteModelRequest">DeleteModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletemodelrequest"></a>
<a id="schema_DeleteModelRequest"></a>
<a id="tocSdeletemodelrequest"></a>
<a id="tocsdeletemodelrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteRouteRequest">DeleteRouteRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleterouterequest"></a>
<a id="schema_DeleteRouteRequest"></a>
<a id="tocSdeleterouterequest"></a>
<a id="tocsdeleterouterequest"></a>

```json
{}
```

<h2 id="tocS_DeleteRouteRequestParameterRequest">DeleteRouteRequestParameterRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleterouterequestparameterrequest"></a>
<a id="schema_DeleteRouteRequestParameterRequest"></a>
<a id="tocSdeleterouterequestparameterrequest"></a>
<a id="tocsdeleterouterequestparameterrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteRouteResponseRequest">DeleteRouteResponseRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleterouteresponserequest"></a>
<a id="schema_DeleteRouteResponseRequest"></a>
<a id="tocSdeleterouteresponserequest"></a>
<a id="tocsdeleterouteresponserequest"></a>

```json
{}
```

<h2 id="tocS_DeleteRouteSettingsRequest">DeleteRouteSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteroutesettingsrequest"></a>
<a id="schema_DeleteRouteSettingsRequest"></a>
<a id="tocSdeleteroutesettingsrequest"></a>
<a id="tocsdeleteroutesettingsrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteStageRequest">DeleteStageRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletestagerequest"></a>
<a id="schema_DeleteStageRequest"></a>
<a id="tocSdeletestagerequest"></a>
<a id="tocsdeletestagerequest"></a>

```json
{}
```

<h2 id="tocS_DeleteVpcLinkRequest">DeleteVpcLinkRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletevpclinkrequest"></a>
<a id="schema_DeleteVpcLinkRequest"></a>
<a id="tocSdeletevpclinkrequest"></a>
<a id="tocsdeletevpclinkrequest"></a>

```json
{}
```

<h2 id="tocS_Deployment">Deployment</h2>
<!-- backwards compatibility -->
<a id="schemadeployment"></a>
<a id="schema_Deployment"></a>
<a id="tocSdeployment"></a>
<a id="tocsdeployment"></a>

```json
{
  "AutoDeployed": {},
  "CreatedDate": {},
  "DeploymentId": {},
  "DeploymentStatus": {},
  "DeploymentStatusMessage": {},
  "Description": {}
}
```

An immutable representation of an API that can be called by users. A Deployment must be associated with a Stage for it to be callable over the internet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoDeployed|object|false|none|none|
|CreatedDate|object|false|none|none|
|DeploymentId|object|false|none|none|
|DeploymentStatus|object|false|none|none|
|DeploymentStatusMessage|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_DomainName">DomainName</h2>
<!-- backwards compatibility -->
<a id="schemadomainname"></a>
<a id="schema_DomainName"></a>
<a id="tocSdomainname"></a>
<a id="tocsdomainname"></a>

```json
{
  "ApiMappingSelectionExpression": {},
  "DomainName": {},
  "DomainNameConfigurations": {},
  "MutualTlsAuthentication": {
    "TruststoreUri": {},
    "TruststoreVersion": {},
    "TruststoreWarnings": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Represents a domain name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiMappingSelectionExpression|object|false|none|none|
|DomainName|object|true|none|none|
|DomainNameConfigurations|object|false|none|none|
|MutualTlsAuthentication|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DomainNameStatus">DomainNameStatus</h2>
<!-- backwards compatibility -->
<a id="schemadomainnamestatus"></a>
<a id="schema_DomainNameStatus"></a>
<a id="tocSdomainnamestatus"></a>
<a id="tocsdomainnamestatus"></a>

```json
"AVAILABLE"
```

The status of the domain name migration. The valid values are AVAILABLE, UPDATING, PENDING_CERTIFICATE_REIMPORT, and PENDING_OWNERSHIP_VERIFICATION. If the status is UPDATING, the domain cannot be modified further until the existing operation is complete. If it is AVAILABLE, the domain can be updated.

<h2 id="tocS_EndpointType">EndpointType</h2>
<!-- backwards compatibility -->
<a id="schemaendpointtype"></a>
<a id="schema_EndpointType"></a>
<a id="tocSendpointtype"></a>
<a id="tocsendpointtype"></a>

```json
"REGIONAL"
```

Represents an endpoint type.

<h2 id="tocS_SecurityPolicy">SecurityPolicy</h2>
<!-- backwards compatibility -->
<a id="schemasecuritypolicy"></a>
<a id="schema_SecurityPolicy"></a>
<a id="tocSsecuritypolicy"></a>
<a id="tocssecuritypolicy"></a>

```json
"TLS_1_0"
```

The Transport Layer Security (TLS) version of the security policy for this domain name. The valid values are TLS_1_0 and TLS_1_2.

<h2 id="tocS_ExportApiRequest">ExportApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexportapirequest"></a>
<a id="schema_ExportApiRequest"></a>
<a id="tocSexportapirequest"></a>
<a id="tocsexportapirequest"></a>

```json
{}
```

<h2 id="tocS_ExportedApi">ExportedApi</h2>
<!-- backwards compatibility -->
<a id="schemaexportedapi"></a>
<a id="schema_ExportedApi"></a>
<a id="tocSexportedapi"></a>
<a id="tocsexportedapi"></a>

```json
"string"
```

Represents an exported definition of an API in a particular output format, for example, YAML. The API is serialized to the requested specification, for example, OpenAPI 3.0.

<h2 id="tocS_ResetAuthorizersCacheRequest">ResetAuthorizersCacheRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresetauthorizerscacherequest"></a>
<a id="schema_ResetAuthorizersCacheRequest"></a>
<a id="tocSresetauthorizerscacherequest"></a>
<a id="tocsresetauthorizerscacherequest"></a>

```json
{}
```

<h2 id="tocS_GetApiMappingRequest">GetApiMappingRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetapimappingrequest"></a>
<a id="schema_GetApiMappingRequest"></a>
<a id="tocSgetapimappingrequest"></a>
<a id="tocsgetapimappingrequest"></a>

```json
{}
```

<h2 id="tocS_GetApiMappingsRequest">GetApiMappingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetapimappingsrequest"></a>
<a id="schema_GetApiMappingsRequest"></a>
<a id="tocSgetapimappingsrequest"></a>
<a id="tocsgetapimappingsrequest"></a>

```json
{}
```

<h2 id="tocS___listOfApiMapping">__listOfApiMapping</h2>
<!-- backwards compatibility -->
<a id="schema__listofapimapping"></a>
<a id="schema___listOfApiMapping"></a>
<a id="tocS__listofapimapping"></a>
<a id="tocs__listofapimapping"></a>

```json
[
  {
    "ApiId": {},
    "ApiMappingId": {},
    "ApiMappingKey": {},
    "Stage": {}
  }
]
```

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

```json
"string"
```

The next page of elements from this collection. Not valid for the last element of the collection.

<h2 id="tocS_GetApiRequest">GetApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetapirequest"></a>
<a id="schema_GetApiRequest"></a>
<a id="tocSgetapirequest"></a>
<a id="tocsgetapirequest"></a>

```json
{}
```

<h2 id="tocS_GetApisRequest">GetApisRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetapisrequest"></a>
<a id="schema_GetApisRequest"></a>
<a id="tocSgetapisrequest"></a>
<a id="tocsgetapisrequest"></a>

```json
{}
```

<h2 id="tocS___listOfApi">__listOfApi</h2>
<!-- backwards compatibility -->
<a id="schema__listofapi"></a>
<a id="schema___listOfApi"></a>
<a id="tocS__listofapi"></a>
<a id="tocs__listofapi"></a>

```json
[
  {
    "ApiEndpoint": {},
    "ApiGatewayManaged": {},
    "ApiId": {},
    "ApiKeySelectionExpression": {},
    "CorsConfiguration": {
      "AllowCredentials": {},
      "AllowHeaders": {},
      "AllowMethods": {},
      "AllowOrigins": {},
      "ExposeHeaders": {},
      "MaxAge": {}
    },
    "CreatedDate": {},
    "Description": {},
    "DisableSchemaValidation": {},
    "DisableExecuteApiEndpoint": {},
    "ImportInfo": {},
    "Name": {},
    "ProtocolType": {},
    "RouteSelectionExpression": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "Version": {},
    "Warnings": {}
  }
]
```

<h2 id="tocS_GetAuthorizerRequest">GetAuthorizerRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetauthorizerrequest"></a>
<a id="schema_GetAuthorizerRequest"></a>
<a id="tocSgetauthorizerrequest"></a>
<a id="tocsgetauthorizerrequest"></a>

```json
{}
```

<h2 id="tocS_GetAuthorizersRequest">GetAuthorizersRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetauthorizersrequest"></a>
<a id="schema_GetAuthorizersRequest"></a>
<a id="tocSgetauthorizersrequest"></a>
<a id="tocsgetauthorizersrequest"></a>

```json
{}
```

<h2 id="tocS___listOfAuthorizer">__listOfAuthorizer</h2>
<!-- backwards compatibility -->
<a id="schema__listofauthorizer"></a>
<a id="schema___listOfAuthorizer"></a>
<a id="tocS__listofauthorizer"></a>
<a id="tocs__listofauthorizer"></a>

```json
[
  {
    "AuthorizerCredentialsArn": {},
    "AuthorizerId": {},
    "AuthorizerPayloadFormatVersion": {},
    "AuthorizerResultTtlInSeconds": {},
    "AuthorizerType": {},
    "AuthorizerUri": {},
    "EnableSimpleResponses": {},
    "IdentitySource": {},
    "IdentityValidationExpression": {},
    "JwtConfiguration": {
      "Audience": {},
      "Issuer": {}
    },
    "Name": {}
  }
]
```

<h2 id="tocS_GetDeploymentRequest">GetDeploymentRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdeploymentrequest"></a>
<a id="schema_GetDeploymentRequest"></a>
<a id="tocSgetdeploymentrequest"></a>
<a id="tocsgetdeploymentrequest"></a>

```json
{}
```

<h2 id="tocS_GetDeploymentsRequest">GetDeploymentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdeploymentsrequest"></a>
<a id="schema_GetDeploymentsRequest"></a>
<a id="tocSgetdeploymentsrequest"></a>
<a id="tocsgetdeploymentsrequest"></a>

```json
{}
```

<h2 id="tocS___listOfDeployment">__listOfDeployment</h2>
<!-- backwards compatibility -->
<a id="schema__listofdeployment"></a>
<a id="schema___listOfDeployment"></a>
<a id="tocS__listofdeployment"></a>
<a id="tocs__listofdeployment"></a>

```json
[
  {
    "AutoDeployed": {},
    "CreatedDate": {},
    "DeploymentId": {},
    "DeploymentStatus": {},
    "DeploymentStatusMessage": {},
    "Description": {}
  }
]
```

<h2 id="tocS_GetDomainNameRequest">GetDomainNameRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdomainnamerequest"></a>
<a id="schema_GetDomainNameRequest"></a>
<a id="tocSgetdomainnamerequest"></a>
<a id="tocsgetdomainnamerequest"></a>

```json
{}
```

<h2 id="tocS_GetDomainNamesRequest">GetDomainNamesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdomainnamesrequest"></a>
<a id="schema_GetDomainNamesRequest"></a>
<a id="tocSgetdomainnamesrequest"></a>
<a id="tocsgetdomainnamesrequest"></a>

```json
{}
```

<h2 id="tocS___listOfDomainName">__listOfDomainName</h2>
<!-- backwards compatibility -->
<a id="schema__listofdomainname"></a>
<a id="schema___listOfDomainName"></a>
<a id="tocS__listofdomainname"></a>
<a id="tocs__listofdomainname"></a>

```json
[
  {
    "ApiMappingSelectionExpression": {},
    "DomainName": {},
    "DomainNameConfigurations": {},
    "MutualTlsAuthentication": {
      "TruststoreUri": {},
      "TruststoreVersion": {},
      "TruststoreWarnings": {}
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_GetIntegrationRequest">GetIntegrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetintegrationrequest"></a>
<a id="schema_GetIntegrationRequest"></a>
<a id="tocSgetintegrationrequest"></a>
<a id="tocsgetintegrationrequest"></a>

```json
{}
```

<h2 id="tocS_GetIntegrationResponseRequest">GetIntegrationResponseRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetintegrationresponserequest"></a>
<a id="schema_GetIntegrationResponseRequest"></a>
<a id="tocSgetintegrationresponserequest"></a>
<a id="tocsgetintegrationresponserequest"></a>

```json
{}
```

<h2 id="tocS_GetIntegrationResponsesRequest">GetIntegrationResponsesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetintegrationresponsesrequest"></a>
<a id="schema_GetIntegrationResponsesRequest"></a>
<a id="tocSgetintegrationresponsesrequest"></a>
<a id="tocsgetintegrationresponsesrequest"></a>

```json
{}
```

<h2 id="tocS___listOfIntegrationResponse">__listOfIntegrationResponse</h2>
<!-- backwards compatibility -->
<a id="schema__listofintegrationresponse"></a>
<a id="schema___listOfIntegrationResponse"></a>
<a id="tocS__listofintegrationresponse"></a>
<a id="tocs__listofintegrationresponse"></a>

```json
[
  {
    "ContentHandlingStrategy": {},
    "IntegrationResponseId": {},
    "IntegrationResponseKey": {},
    "ResponseParameters": {
      "property1": "string",
      "property2": "string"
    },
    "ResponseTemplates": {
      "property1": "string",
      "property2": "string"
    },
    "TemplateSelectionExpression": {}
  }
]
```

<h2 id="tocS_GetIntegrationsRequest">GetIntegrationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetintegrationsrequest"></a>
<a id="schema_GetIntegrationsRequest"></a>
<a id="tocSgetintegrationsrequest"></a>
<a id="tocsgetintegrationsrequest"></a>

```json
{}
```

<h2 id="tocS___listOfIntegration">__listOfIntegration</h2>
<!-- backwards compatibility -->
<a id="schema__listofintegration"></a>
<a id="schema___listOfIntegration"></a>
<a id="tocS__listofintegration"></a>
<a id="tocs__listofintegration"></a>

```json
[
  {
    "ApiGatewayManaged": {},
    "ConnectionId": {},
    "ConnectionType": {},
    "ContentHandlingStrategy": {},
    "CredentialsArn": {},
    "Description": {},
    "IntegrationId": {},
    "IntegrationMethod": {},
    "IntegrationResponseSelectionExpression": {},
    "IntegrationSubtype": {},
    "IntegrationType": {},
    "IntegrationUri": {},
    "PassthroughBehavior": {},
    "PayloadFormatVersion": {},
    "RequestParameters": {
      "property1": "string",
      "property2": "string"
    },
    "RequestTemplates": {
      "property1": "string",
      "property2": "string"
    },
    "ResponseParameters": {
      "property1": {
        "property1": "string",
        "property2": "string"
      },
      "property2": {
        "property1": "string",
        "property2": "string"
      }
    },
    "TemplateSelectionExpression": {},
    "TimeoutInMillis": {},
    "TlsConfig": {
      "ServerNameToVerify": {}
    }
  }
]
```

<h2 id="tocS_GetModelRequest">GetModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmodelrequest"></a>
<a id="schema_GetModelRequest"></a>
<a id="tocSgetmodelrequest"></a>
<a id="tocsgetmodelrequest"></a>

```json
{}
```

<h2 id="tocS_GetModelTemplateRequest">GetModelTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmodeltemplaterequest"></a>
<a id="schema_GetModelTemplateRequest"></a>
<a id="tocSgetmodeltemplaterequest"></a>
<a id="tocsgetmodeltemplaterequest"></a>

```json
{}
```

<h2 id="tocS_GetModelsRequest">GetModelsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmodelsrequest"></a>
<a id="schema_GetModelsRequest"></a>
<a id="tocSgetmodelsrequest"></a>
<a id="tocsgetmodelsrequest"></a>

```json
{}
```

<h2 id="tocS___listOfModel">__listOfModel</h2>
<!-- backwards compatibility -->
<a id="schema__listofmodel"></a>
<a id="schema___listOfModel"></a>
<a id="tocS__listofmodel"></a>
<a id="tocs__listofmodel"></a>

```json
[
  {
    "ContentType": {},
    "Description": {},
    "ModelId": {},
    "Name": {},
    "Schema": {}
  }
]
```

<h2 id="tocS_GetRouteRequest">GetRouteRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrouterequest"></a>
<a id="schema_GetRouteRequest"></a>
<a id="tocSgetrouterequest"></a>
<a id="tocsgetrouterequest"></a>

```json
{}
```

<h2 id="tocS_GetRouteResponseRequest">GetRouteResponseRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrouteresponserequest"></a>
<a id="schema_GetRouteResponseRequest"></a>
<a id="tocSgetrouteresponserequest"></a>
<a id="tocsgetrouteresponserequest"></a>

```json
{}
```

<h2 id="tocS_GetRouteResponsesRequest">GetRouteResponsesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrouteresponsesrequest"></a>
<a id="schema_GetRouteResponsesRequest"></a>
<a id="tocSgetrouteresponsesrequest"></a>
<a id="tocsgetrouteresponsesrequest"></a>

```json
{}
```

<h2 id="tocS___listOfRouteResponse">__listOfRouteResponse</h2>
<!-- backwards compatibility -->
<a id="schema__listofrouteresponse"></a>
<a id="schema___listOfRouteResponse"></a>
<a id="tocS__listofrouteresponse"></a>
<a id="tocs__listofrouteresponse"></a>

```json
[
  {
    "ModelSelectionExpression": {},
    "ResponseModels": {
      "property1": "string",
      "property2": "string"
    },
    "ResponseParameters": {
      "property1": {
        "Required": {}
      },
      "property2": {
        "Required": {}
      }
    },
    "RouteResponseId": {},
    "RouteResponseKey": {}
  }
]
```

<h2 id="tocS_GetRoutesRequest">GetRoutesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetroutesrequest"></a>
<a id="schema_GetRoutesRequest"></a>
<a id="tocSgetroutesrequest"></a>
<a id="tocsgetroutesrequest"></a>

```json
{}
```

<h2 id="tocS___listOfRoute">__listOfRoute</h2>
<!-- backwards compatibility -->
<a id="schema__listofroute"></a>
<a id="schema___listOfRoute"></a>
<a id="tocS__listofroute"></a>
<a id="tocs__listofroute"></a>

```json
[
  {
    "ApiGatewayManaged": {},
    "ApiKeyRequired": {},
    "AuthorizationScopes": {},
    "AuthorizationType": {},
    "AuthorizerId": {},
    "ModelSelectionExpression": {},
    "OperationName": {},
    "RequestModels": {
      "property1": "string",
      "property2": "string"
    },
    "RequestParameters": {
      "property1": {
        "Required": {}
      },
      "property2": {
        "Required": {}
      }
    },
    "RouteId": {},
    "RouteKey": {},
    "RouteResponseSelectionExpression": {},
    "Target": {}
  }
]
```

<h2 id="tocS_GetStageRequest">GetStageRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetstagerequest"></a>
<a id="schema_GetStageRequest"></a>
<a id="tocSgetstagerequest"></a>
<a id="tocsgetstagerequest"></a>

```json
{}
```

<h2 id="tocS_GetStagesRequest">GetStagesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetstagesrequest"></a>
<a id="schema_GetStagesRequest"></a>
<a id="tocSgetstagesrequest"></a>
<a id="tocsgetstagesrequest"></a>

```json
{}
```

<h2 id="tocS___listOfStage">__listOfStage</h2>
<!-- backwards compatibility -->
<a id="schema__listofstage"></a>
<a id="schema___listOfStage"></a>
<a id="tocS__listofstage"></a>
<a id="tocs__listofstage"></a>

```json
[
  {
    "AccessLogSettings": {
      "DestinationArn": {},
      "Format": {}
    },
    "ApiGatewayManaged": {},
    "AutoDeploy": {},
    "ClientCertificateId": {},
    "CreatedDate": {},
    "DefaultRouteSettings": {
      "DataTraceEnabled": {},
      "DetailedMetricsEnabled": {},
      "LoggingLevel": {},
      "ThrottlingBurstLimit": {},
      "ThrottlingRateLimit": {}
    },
    "DeploymentId": {},
    "Description": {},
    "LastDeploymentStatusMessage": {},
    "LastUpdatedDate": {},
    "RouteSettings": {
      "property1": {
        "DataTraceEnabled": {},
        "DetailedMetricsEnabled": {},
        "LoggingLevel": {},
        "ThrottlingBurstLimit": {},
        "ThrottlingRateLimit": {}
      },
      "property2": {
        "DataTraceEnabled": {},
        "DetailedMetricsEnabled": {},
        "LoggingLevel": {},
        "ThrottlingBurstLimit": {},
        "ThrottlingRateLimit": {}
      }
    },
    "StageName": {},
    "StageVariables": {
      "property1": "string",
      "property2": "string"
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_GetTagsRequest">GetTagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagettagsrequest"></a>
<a id="schema_GetTagsRequest"></a>
<a id="tocSgettagsrequest"></a>
<a id="tocsgettagsrequest"></a>

```json
{}
```

<h2 id="tocS_GetVpcLinkRequest">GetVpcLinkRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetvpclinkrequest"></a>
<a id="schema_GetVpcLinkRequest"></a>
<a id="tocSgetvpclinkrequest"></a>
<a id="tocsgetvpclinkrequest"></a>

```json
{}
```

<h2 id="tocS_GetVpcLinksRequest">GetVpcLinksRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetvpclinksrequest"></a>
<a id="schema_GetVpcLinksRequest"></a>
<a id="tocSgetvpclinksrequest"></a>
<a id="tocsgetvpclinksrequest"></a>

```json
{}
```

<h2 id="tocS___listOfVpcLink">__listOfVpcLink</h2>
<!-- backwards compatibility -->
<a id="schema__listofvpclink"></a>
<a id="schema___listOfVpcLink"></a>
<a id="tocS__listofvpclink"></a>
<a id="tocs__listofvpclink"></a>

```json
[
  {
    "CreatedDate": {},
    "Name": {},
    "SecurityGroupIds": {},
    "SubnetIds": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "VpcLinkId": {},
    "VpcLinkStatus": {},
    "VpcLinkStatusMessage": {},
    "VpcLinkVersion": {}
  }
]
```

<h2 id="tocS_ImportApiRequest">ImportApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemaimportapirequest"></a>
<a id="schema_ImportApiRequest"></a>
<a id="tocSimportapirequest"></a>
<a id="tocsimportapirequest"></a>

```json
{
  "Body": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Body|object|true|none|none|

<h2 id="tocS_Integration">Integration</h2>
<!-- backwards compatibility -->
<a id="schemaintegration"></a>
<a id="schema_Integration"></a>
<a id="tocSintegration"></a>
<a id="tocsintegration"></a>

```json
{
  "ApiGatewayManaged": {},
  "ConnectionId": {},
  "ConnectionType": {},
  "ContentHandlingStrategy": {},
  "CredentialsArn": {},
  "Description": {},
  "IntegrationId": {},
  "IntegrationMethod": {},
  "IntegrationResponseSelectionExpression": {},
  "IntegrationSubtype": {},
  "IntegrationType": {},
  "IntegrationUri": {},
  "PassthroughBehavior": {},
  "PayloadFormatVersion": {},
  "RequestParameters": {
    "property1": "string",
    "property2": "string"
  },
  "RequestTemplates": {
    "property1": "string",
    "property2": "string"
  },
  "ResponseParameters": {
    "property1": {
      "property1": "string",
      "property2": "string"
    },
    "property2": {
      "property1": "string",
      "property2": "string"
    }
  },
  "TemplateSelectionExpression": {},
  "TimeoutInMillis": {},
  "TlsConfig": {
    "ServerNameToVerify": {}
  }
}
```

Represents an integration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiGatewayManaged|object|false|none|none|
|ConnectionId|object|false|none|none|
|ConnectionType|object|false|none|none|
|ContentHandlingStrategy|object|false|none|none|
|CredentialsArn|object|false|none|none|
|Description|object|false|none|none|
|IntegrationId|object|false|none|none|
|IntegrationMethod|object|false|none|none|
|IntegrationResponseSelectionExpression|object|false|none|none|
|IntegrationSubtype|object|false|none|none|
|IntegrationType|object|false|none|none|
|IntegrationUri|object|false|none|none|
|PassthroughBehavior|object|false|none|none|
|PayloadFormatVersion|object|false|none|none|
|RequestParameters|object|false|none|none|
|RequestTemplates|object|false|none|none|
|ResponseParameters|object|false|none|none|
|TemplateSelectionExpression|object|false|none|none|
|TimeoutInMillis|object|false|none|none|
|TlsConfig|object|false|none|none|

<h2 id="tocS_IntegrationResponse">IntegrationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaintegrationresponse"></a>
<a id="schema_IntegrationResponse"></a>
<a id="tocSintegrationresponse"></a>
<a id="tocsintegrationresponse"></a>

```json
{
  "ContentHandlingStrategy": {},
  "IntegrationResponseId": {},
  "IntegrationResponseKey": {},
  "ResponseParameters": {
    "property1": "string",
    "property2": "string"
  },
  "ResponseTemplates": {
    "property1": "string",
    "property2": "string"
  },
  "TemplateSelectionExpression": {}
}
```

Represents an integration response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContentHandlingStrategy|object|false|none|none|
|IntegrationResponseId|object|false|none|none|
|IntegrationResponseKey|object|true|none|none|
|ResponseParameters|object|false|none|none|
|ResponseTemplates|object|false|none|none|
|TemplateSelectionExpression|object|false|none|none|

<h2 id="tocS_Model">Model</h2>
<!-- backwards compatibility -->
<a id="schemamodel"></a>
<a id="schema_Model"></a>
<a id="tocSmodel"></a>
<a id="tocsmodel"></a>

```json
{
  "ContentType": {},
  "Description": {},
  "ModelId": {},
  "Name": {},
  "Schema": {}
}
```

Represents a data model for an API. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html">Create Models and Mapping Templates for Request and Response Mappings</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContentType|object|false|none|none|
|Description|object|false|none|none|
|ModelId|object|false|none|none|
|Name|object|true|none|none|
|Schema|object|false|none|none|

<h2 id="tocS_ReimportApiRequest">ReimportApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemareimportapirequest"></a>
<a id="schema_ReimportApiRequest"></a>
<a id="tocSreimportapirequest"></a>
<a id="tocsreimportapirequest"></a>

```json
{
  "Body": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Body|object|true|none|none|

<h2 id="tocS_Route">Route</h2>
<!-- backwards compatibility -->
<a id="schemaroute"></a>
<a id="schema_Route"></a>
<a id="tocSroute"></a>
<a id="tocsroute"></a>

```json
{
  "ApiGatewayManaged": {},
  "ApiKeyRequired": {},
  "AuthorizationScopes": {},
  "AuthorizationType": {},
  "AuthorizerId": {},
  "ModelSelectionExpression": {},
  "OperationName": {},
  "RequestModels": {
    "property1": "string",
    "property2": "string"
  },
  "RequestParameters": {
    "property1": {
      "Required": {}
    },
    "property2": {
      "Required": {}
    }
  },
  "RouteId": {},
  "RouteKey": {},
  "RouteResponseSelectionExpression": {},
  "Target": {}
}
```

Represents a route.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiGatewayManaged|object|false|none|none|
|ApiKeyRequired|object|false|none|none|
|AuthorizationScopes|object|false|none|none|
|AuthorizationType|object|false|none|none|
|AuthorizerId|object|false|none|none|
|ModelSelectionExpression|object|false|none|none|
|OperationName|object|false|none|none|
|RequestModels|object|false|none|none|
|RequestParameters|object|false|none|none|
|RouteId|object|false|none|none|
|RouteKey|object|true|none|none|
|RouteResponseSelectionExpression|object|false|none|none|
|Target|object|false|none|none|

<h2 id="tocS_RouteResponse">RouteResponse</h2>
<!-- backwards compatibility -->
<a id="schemarouteresponse"></a>
<a id="schema_RouteResponse"></a>
<a id="tocSrouteresponse"></a>
<a id="tocsrouteresponse"></a>

```json
{
  "ModelSelectionExpression": {},
  "ResponseModels": {
    "property1": "string",
    "property2": "string"
  },
  "ResponseParameters": {
    "property1": {
      "Required": {}
    },
    "property2": {
      "Required": {}
    }
  },
  "RouteResponseId": {},
  "RouteResponseKey": {}
}
```

Represents a route response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ModelSelectionExpression|object|false|none|none|
|ResponseModels|object|false|none|none|
|ResponseParameters|object|false|none|none|
|RouteResponseId|object|false|none|none|
|RouteResponseKey|object|true|none|none|

<h2 id="tocS_Stage">Stage</h2>
<!-- backwards compatibility -->
<a id="schemastage"></a>
<a id="schema_Stage"></a>
<a id="tocSstage"></a>
<a id="tocsstage"></a>

```json
{
  "AccessLogSettings": {
    "DestinationArn": {},
    "Format": {}
  },
  "ApiGatewayManaged": {},
  "AutoDeploy": {},
  "ClientCertificateId": {},
  "CreatedDate": {},
  "DefaultRouteSettings": {
    "DataTraceEnabled": {},
    "DetailedMetricsEnabled": {},
    "LoggingLevel": {},
    "ThrottlingBurstLimit": {},
    "ThrottlingRateLimit": {}
  },
  "DeploymentId": {},
  "Description": {},
  "LastDeploymentStatusMessage": {},
  "LastUpdatedDate": {},
  "RouteSettings": {
    "property1": {
      "DataTraceEnabled": {},
      "DetailedMetricsEnabled": {},
      "LoggingLevel": {},
      "ThrottlingBurstLimit": {},
      "ThrottlingRateLimit": {}
    },
    "property2": {
      "DataTraceEnabled": {},
      "DetailedMetricsEnabled": {},
      "LoggingLevel": {},
      "ThrottlingBurstLimit": {},
      "ThrottlingRateLimit": {}
    }
  },
  "StageName": {},
  "StageVariables": {
    "property1": "string",
    "property2": "string"
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Represents an API stage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessLogSettings|object|false|none|none|
|ApiGatewayManaged|object|false|none|none|
|AutoDeploy|object|false|none|none|
|ClientCertificateId|object|false|none|none|
|CreatedDate|object|false|none|none|
|DefaultRouteSettings|object|false|none|none|
|DeploymentId|object|false|none|none|
|Description|object|false|none|none|
|LastDeploymentStatusMessage|object|false|none|none|
|LastUpdatedDate|object|false|none|none|
|RouteSettings|object|false|none|none|
|StageName|object|true|none|none|
|StageVariables|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Creates a new Tag resource to represent a tag.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpdateApiMappingRequest">UpdateApiMappingRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapimappingrequest"></a>
<a id="schema_UpdateApiMappingRequest"></a>
<a id="tocSupdateapimappingrequest"></a>
<a id="tocsupdateapimappingrequest"></a>

```json
{
  "ApiId": {},
  "ApiMappingKey": {},
  "Stage": {}
}
```

Updates an ApiMapping.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiId|object|true|none|none|
|ApiMappingKey|object|false|none|none|
|Stage|object|false|none|none|

<h2 id="tocS_UpdateApiRequest">UpdateApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapirequest"></a>
<a id="schema_UpdateApiRequest"></a>
<a id="tocSupdateapirequest"></a>
<a id="tocsupdateapirequest"></a>

```json
{
  "ApiKeySelectionExpression": {},
  "CorsConfiguration": {
    "AllowCredentials": {},
    "AllowHeaders": {},
    "AllowMethods": {},
    "AllowOrigins": {},
    "ExposeHeaders": {},
    "MaxAge": {}
  },
  "CredentialsArn": {},
  "Description": {},
  "DisableSchemaValidation": {},
  "DisableExecuteApiEndpoint": {},
  "Name": {},
  "RouteKey": {},
  "RouteSelectionExpression": {},
  "Target": {},
  "Version": {}
}
```

Updates an Api.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiKeySelectionExpression|object|false|none|none|
|CorsConfiguration|object|false|none|none|
|CredentialsArn|object|false|none|none|
|Description|object|false|none|none|
|DisableSchemaValidation|object|false|none|none|
|DisableExecuteApiEndpoint|object|false|none|none|
|Name|object|false|none|none|
|RouteKey|object|false|none|none|
|RouteSelectionExpression|object|false|none|none|
|Target|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_UpdateAuthorizerRequest">UpdateAuthorizerRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateauthorizerrequest"></a>
<a id="schema_UpdateAuthorizerRequest"></a>
<a id="tocSupdateauthorizerrequest"></a>
<a id="tocsupdateauthorizerrequest"></a>

```json
{
  "AuthorizerCredentialsArn": {},
  "AuthorizerPayloadFormatVersion": {},
  "AuthorizerResultTtlInSeconds": {},
  "AuthorizerType": {},
  "AuthorizerUri": {},
  "EnableSimpleResponses": {},
  "IdentitySource": {},
  "IdentityValidationExpression": {},
  "JwtConfiguration": {
    "Audience": {},
    "Issuer": {}
  },
  "Name": {}
}
```

Updates an Authorizer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuthorizerCredentialsArn|object|false|none|none|
|AuthorizerPayloadFormatVersion|object|false|none|none|
|AuthorizerResultTtlInSeconds|object|false|none|none|
|AuthorizerType|object|false|none|none|
|AuthorizerUri|object|false|none|none|
|EnableSimpleResponses|object|false|none|none|
|IdentitySource|object|false|none|none|
|IdentityValidationExpression|object|false|none|none|
|JwtConfiguration|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_UpdateDeploymentRequest">UpdateDeploymentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedeploymentrequest"></a>
<a id="schema_UpdateDeploymentRequest"></a>
<a id="tocSupdatedeploymentrequest"></a>
<a id="tocsupdatedeploymentrequest"></a>

```json
{
  "Description": {}
}
```

Updates a Deployment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|

<h2 id="tocS_UpdateDomainNameRequest">UpdateDomainNameRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedomainnamerequest"></a>
<a id="schema_UpdateDomainNameRequest"></a>
<a id="tocSupdatedomainnamerequest"></a>
<a id="tocsupdatedomainnamerequest"></a>

```json
{
  "DomainNameConfigurations": {},
  "MutualTlsAuthentication": {
    "TruststoreUri": {},
    "TruststoreVersion": {}
  }
}
```

Updates a DomainName.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainNameConfigurations|object|false|none|none|
|MutualTlsAuthentication|object|false|none|none|

<h2 id="tocS_UpdateIntegrationRequest">UpdateIntegrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateintegrationrequest"></a>
<a id="schema_UpdateIntegrationRequest"></a>
<a id="tocSupdateintegrationrequest"></a>
<a id="tocsupdateintegrationrequest"></a>

```json
{
  "ConnectionId": {},
  "ConnectionType": {},
  "ContentHandlingStrategy": {},
  "CredentialsArn": {},
  "Description": {},
  "IntegrationMethod": {},
  "IntegrationSubtype": {},
  "IntegrationType": {},
  "IntegrationUri": {},
  "PassthroughBehavior": {},
  "PayloadFormatVersion": {},
  "RequestParameters": {
    "property1": "string",
    "property2": "string"
  },
  "RequestTemplates": {
    "property1": "string",
    "property2": "string"
  },
  "ResponseParameters": {
    "property1": {
      "property1": "string",
      "property2": "string"
    },
    "property2": {
      "property1": "string",
      "property2": "string"
    }
  },
  "TemplateSelectionExpression": {},
  "TimeoutInMillis": {},
  "TlsConfig": {
    "ServerNameToVerify": {}
  }
}
```

Updates an Integration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectionId|object|false|none|none|
|ConnectionType|object|false|none|none|
|ContentHandlingStrategy|object|false|none|none|
|CredentialsArn|object|false|none|none|
|Description|object|false|none|none|
|IntegrationMethod|object|false|none|none|
|IntegrationSubtype|object|false|none|none|
|IntegrationType|object|false|none|none|
|IntegrationUri|object|false|none|none|
|PassthroughBehavior|object|false|none|none|
|PayloadFormatVersion|object|false|none|none|
|RequestParameters|object|false|none|none|
|RequestTemplates|object|false|none|none|
|ResponseParameters|object|false|none|none|
|TemplateSelectionExpression|object|false|none|none|
|TimeoutInMillis|object|false|none|none|
|TlsConfig|object|false|none|none|

<h2 id="tocS_UpdateIntegrationResponseRequest">UpdateIntegrationResponseRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateintegrationresponserequest"></a>
<a id="schema_UpdateIntegrationResponseRequest"></a>
<a id="tocSupdateintegrationresponserequest"></a>
<a id="tocsupdateintegrationresponserequest"></a>

```json
{
  "ContentHandlingStrategy": {},
  "IntegrationResponseKey": {},
  "ResponseParameters": {
    "property1": "string",
    "property2": "string"
  },
  "ResponseTemplates": {
    "property1": "string",
    "property2": "string"
  },
  "TemplateSelectionExpression": {}
}
```

Updates an IntegrationResponses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContentHandlingStrategy|object|false|none|none|
|IntegrationResponseKey|object|false|none|none|
|ResponseParameters|object|false|none|none|
|ResponseTemplates|object|false|none|none|
|TemplateSelectionExpression|object|false|none|none|

<h2 id="tocS_UpdateModelRequest">UpdateModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemodelrequest"></a>
<a id="schema_UpdateModelRequest"></a>
<a id="tocSupdatemodelrequest"></a>
<a id="tocsupdatemodelrequest"></a>

```json
{
  "ContentType": {},
  "Description": {},
  "Name": {},
  "Schema": {}
}
```

Updates a Model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContentType|object|false|none|none|
|Description|object|false|none|none|
|Name|object|false|none|none|
|Schema|object|false|none|none|

<h2 id="tocS_UpdateRouteRequest">UpdateRouteRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterouterequest"></a>
<a id="schema_UpdateRouteRequest"></a>
<a id="tocSupdaterouterequest"></a>
<a id="tocsupdaterouterequest"></a>

```json
{
  "ApiKeyRequired": {},
  "AuthorizationScopes": {},
  "AuthorizationType": {},
  "AuthorizerId": {},
  "ModelSelectionExpression": {},
  "OperationName": {},
  "RequestModels": {
    "property1": "string",
    "property2": "string"
  },
  "RequestParameters": {
    "property1": {
      "Required": {}
    },
    "property2": {
      "Required": {}
    }
  },
  "RouteKey": {},
  "RouteResponseSelectionExpression": {},
  "Target": {}
}
```

Updates a Route.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiKeyRequired|object|false|none|none|
|AuthorizationScopes|object|false|none|none|
|AuthorizationType|object|false|none|none|
|AuthorizerId|object|false|none|none|
|ModelSelectionExpression|object|false|none|none|
|OperationName|object|false|none|none|
|RequestModels|object|false|none|none|
|RequestParameters|object|false|none|none|
|RouteKey|object|false|none|none|
|RouteResponseSelectionExpression|object|false|none|none|
|Target|object|false|none|none|

<h2 id="tocS_UpdateRouteResponseRequest">UpdateRouteResponseRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterouteresponserequest"></a>
<a id="schema_UpdateRouteResponseRequest"></a>
<a id="tocSupdaterouteresponserequest"></a>
<a id="tocsupdaterouteresponserequest"></a>

```json
{
  "ModelSelectionExpression": {},
  "ResponseModels": {
    "property1": "string",
    "property2": "string"
  },
  "ResponseParameters": {
    "property1": {
      "Required": {}
    },
    "property2": {
      "Required": {}
    }
  },
  "RouteResponseKey": {}
}
```

Updates a RouteResponse.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ModelSelectionExpression|object|false|none|none|
|ResponseModels|object|false|none|none|
|ResponseParameters|object|false|none|none|
|RouteResponseKey|object|false|none|none|

<h2 id="tocS_UpdateStageRequest">UpdateStageRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestagerequest"></a>
<a id="schema_UpdateStageRequest"></a>
<a id="tocSupdatestagerequest"></a>
<a id="tocsupdatestagerequest"></a>

```json
{
  "AccessLogSettings": {
    "DestinationArn": {},
    "Format": {}
  },
  "AutoDeploy": {},
  "ClientCertificateId": {},
  "DefaultRouteSettings": {
    "DataTraceEnabled": {},
    "DetailedMetricsEnabled": {},
    "LoggingLevel": {},
    "ThrottlingBurstLimit": {},
    "ThrottlingRateLimit": {}
  },
  "DeploymentId": {},
  "Description": {},
  "RouteSettings": {
    "property1": {
      "DataTraceEnabled": {},
      "DetailedMetricsEnabled": {},
      "LoggingLevel": {},
      "ThrottlingBurstLimit": {},
      "ThrottlingRateLimit": {}
    },
    "property2": {
      "DataTraceEnabled": {},
      "DetailedMetricsEnabled": {},
      "LoggingLevel": {},
      "ThrottlingBurstLimit": {},
      "ThrottlingRateLimit": {}
    }
  },
  "StageVariables": {
    "property1": "string",
    "property2": "string"
  }
}
```

Updates a Stage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessLogSettings|object|false|none|none|
|AutoDeploy|object|false|none|none|
|ClientCertificateId|object|false|none|none|
|DefaultRouteSettings|object|false|none|none|
|DeploymentId|object|false|none|none|
|Description|object|false|none|none|
|RouteSettings|object|false|none|none|
|StageVariables|object|false|none|none|

<h2 id="tocS_UpdateVpcLinkRequest">UpdateVpcLinkRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevpclinkrequest"></a>
<a id="schema_UpdateVpcLinkRequest"></a>
<a id="tocSupdatevpclinkrequest"></a>
<a id="tocsupdatevpclinkrequest"></a>

```json
{
  "Name": {}
}
```

Updates a VPC link.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|

<h2 id="tocS_VpcLink">VpcLink</h2>
<!-- backwards compatibility -->
<a id="schemavpclink"></a>
<a id="schema_VpcLink"></a>
<a id="tocSvpclink"></a>
<a id="tocsvpclink"></a>

```json
{
  "CreatedDate": {},
  "Name": {},
  "SecurityGroupIds": {},
  "SubnetIds": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "VpcLinkId": {},
  "VpcLinkStatus": {},
  "VpcLinkStatusMessage": {},
  "VpcLinkVersion": {}
}
```

Represents a VPC link.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreatedDate|object|false|none|none|
|Name|object|true|none|none|
|SecurityGroupIds|object|true|none|none|
|SubnetIds|object|true|none|none|
|Tags|object|false|none|none|
|VpcLinkId|object|true|none|none|
|VpcLinkStatus|object|false|none|none|
|VpcLinkStatusMessage|object|false|none|none|
|VpcLinkVersion|object|false|none|none|
