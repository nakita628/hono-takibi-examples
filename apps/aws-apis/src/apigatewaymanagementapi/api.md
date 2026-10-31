<h1 id="amazonapigatewaymanagementapi">AmazonApiGatewayManagementApi v2018-11-29</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Amazon API Gateway Management API allows you to directly manage runtime aspects of your deployed APIs. To use it, you must explicitly set the SDK's endpoint to point to the endpoint of your deployed API. The endpoint will be of the form https://{api-id}.execute-api.{region}.amazonaws.com/{stage}, or will be the endpoint corresponding to your API's custom domain and base path, if applicable.

Base URLs:

* <a href="http://execute-api.us-east-1.amazonaws.com">http://execute-api.us-east-1.amazonaws.com</a> - The AmazonApiGatewayManagementApi multi-region endpoint

* <a href="https://execute-api.us-east-1.amazonaws.com">https://execute-api.us-east-1.amazonaws.com</a> - The AmazonApiGatewayManagementApi multi-region endpoint

* <a href="http://execute-api.cn-north-1.amazonaws.com.cn">http://execute-api.cn-north-1.amazonaws.com.cn</a> - The AmazonApiGatewayManagementApi endpoint for China (Beijing) and China (Ningxia)

* <a href="https://execute-api.cn-north-1.amazonaws.com.cn">https://execute-api.cn-north-1.amazonaws.com.cn</a> - The AmazonApiGatewayManagementApi endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/execute-api/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazonapigatewaymanagementapi-default">Default</h1>

## GetConnection

<a id="opIdGetConnection"></a>

> Code samples

```bash
curl https://apigatewaymanagementapi.us-east-1.amazonaws.com/@connections/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /@connections/{connectionId}`

Get information about the connection with the provided id.

<h3 id="getconnection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|connectionId|path|string|true|none|
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
  "ConnectedAt": {},
  "Identity": {
    "SourceIp": {},
    "UserAgent": {}
  },
  "LastActiveAt": {}
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

<h3 id="getconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetConnectionResponse](#schemagetconnectionresponse)|
|480|480|GoneException|[GoneException](#schemagoneexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PostToConnection

<a id="opIdPostToConnection"></a>

> Code samples

```bash
curl https://apigatewaymanagementapi.us-east-1.amazonaws.com/@connections/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Data": "string"
  }'
```

`POST /@connections/{connectionId}`

Sends the provided data to the specified connection.

> Body parameter

```json
{
  "Data": "string"
}
```

<h3 id="posttoconnection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|connectionId|path|string|true|The identifier of the connection that a specific client is using.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Data|body|string|true|The data to be sent to the client specified by its connection id.|

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

<h3 id="posttoconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|GoneException|[GoneException](#schemagoneexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|PayloadTooLargeException|[PayloadTooLargeException](#schemapayloadtoolargeexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteConnection

<a id="opIdDeleteConnection"></a>

> Code samples

```bash
curl https://apigatewaymanagementapi.us-east-1.amazonaws.com/@connections/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /@connections/{connectionId}`

Delete the connection with the provided id.

<h3 id="deleteconnection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|connectionId|path|string|true|none|
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

<h3 id="deleteconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|GoneException|[GoneException](#schemagoneexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_GoneException">GoneException</h2>
<!-- backwards compatibility -->
<a id="schemagoneexception"></a>
<a id="schema_GoneException"></a>
<a id="tocSgoneexception"></a>
<a id="tocsgoneexception"></a>

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

<h2 id="tocS_ForbiddenException">ForbiddenException</h2>
<!-- backwards compatibility -->
<a id="schemaforbiddenexception"></a>
<a id="schema_ForbiddenException"></a>
<a id="tocSforbiddenexception"></a>
<a id="tocsforbiddenexception"></a>

```json
null
```

<h2 id="tocS_GetConnectionResponse">GetConnectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetconnectionresponse"></a>
<a id="schema_GetConnectionResponse"></a>
<a id="tocSgetconnectionresponse"></a>
<a id="tocsgetconnectionresponse"></a>

```json
{
  "ConnectedAt": {},
  "Identity": {
    "SourceIp": {},
    "UserAgent": {}
  },
  "LastActiveAt": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectedAt|object|false|none|none|
|Identity|object|false|none|none|
|LastActiveAt|object|false|none|none|

<h2 id="tocS_PayloadTooLargeException">PayloadTooLargeException</h2>
<!-- backwards compatibility -->
<a id="schemapayloadtoolargeexception"></a>
<a id="schema_PayloadTooLargeException"></a>
<a id="tocSpayloadtoolargeexception"></a>
<a id="tocspayloadtoolargeexception"></a>

```json
null
```

<h2 id="tocS_Data">Data</h2>
<!-- backwards compatibility -->
<a id="schemadata"></a>
<a id="schema_Data"></a>
<a id="tocSdata"></a>
<a id="tocsdata"></a>

```json
"string"
```

The data to be sent to the client specified by its connection id.

<h2 id="tocS___string">__string</h2>
<!-- backwards compatibility -->
<a id="schema__string"></a>
<a id="schema___string"></a>
<a id="tocS__string"></a>
<a id="tocs__string"></a>

```json
"string"
```

<h2 id="tocS_DeleteConnectionRequest">DeleteConnectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconnectionrequest"></a>
<a id="schema_DeleteConnectionRequest"></a>
<a id="tocSdeleteconnectionrequest"></a>
<a id="tocsdeleteconnectionrequest"></a>

```json
{}
```

<h2 id="tocS_GetConnectionRequest">GetConnectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetconnectionrequest"></a>
<a id="schema_GetConnectionRequest"></a>
<a id="tocSgetconnectionrequest"></a>
<a id="tocsgetconnectionrequest"></a>

```json
{}
```

<h2 id="tocS___timestampIso8601">__timestampIso8601</h2>
<!-- backwards compatibility -->
<a id="schema__timestampiso8601"></a>
<a id="schema___timestampIso8601"></a>
<a id="tocS__timestampiso8601"></a>
<a id="tocs__timestampiso8601"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_Identity">Identity</h2>
<!-- backwards compatibility -->
<a id="schemaidentity"></a>
<a id="schema_Identity"></a>
<a id="tocSidentity"></a>
<a id="tocsidentity"></a>

```json
{
  "SourceIp": {},
  "UserAgent": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceIp|object|true|none|none|
|UserAgent|object|true|none|none|

<h2 id="tocS_PostToConnectionRequest">PostToConnectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaposttoconnectionrequest"></a>
<a id="schema_PostToConnectionRequest"></a>
<a id="tocSposttoconnectionrequest"></a>
<a id="tocsposttoconnectionrequest"></a>

```json
{
  "Data": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
