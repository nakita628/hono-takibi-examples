<h1 id="schemas">Schemas v2019-12-02</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Amazon EventBridge Schema Registry

Base URLs:

* <a href="http://schemas.us-east-1.amazonaws.com">http://schemas.us-east-1.amazonaws.com</a> - The Schemas multi-region endpoint

* <a href="https://schemas.us-east-1.amazonaws.com">https://schemas.us-east-1.amazonaws.com</a> - The Schemas multi-region endpoint

* <a href="http://schemas.cn-north-1.amazonaws.com.cn">http://schemas.cn-north-1.amazonaws.com.cn</a> - The Schemas endpoint for China (Beijing) and China (Ningxia)

* <a href="https://schemas.cn-north-1.amazonaws.com.cn">https://schemas.cn-north-1.amazonaws.com.cn</a> - The Schemas endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/schemas/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="schemas-default">Default</h1>

## ListDiscoverers

<a id="opIdListDiscoverers"></a>

> Code samples

```bash
curl https://schemas.us-east-1.amazonaws.com/v1/discoverers \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/discoverers`

List the discoverers.

<h3 id="listdiscoverers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|discovererIdPrefix|query|string|false|Specifying this limits the results to only those discoverer IDs that start with the specified prefix.|
|limit|query|integer|false|none|
|nextToken|query|string|false|The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.|
|sourceArnPrefix|query|string|false|Specifying this limits the results to only those ARNs that start with the specified prefix.|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "Discoverers": {},
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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="listdiscoverers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDiscoverersResponse](#schemalistdiscoverersresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDiscoverer

<a id="opIdCreateDiscoverer"></a>

> Code samples

```bash
curl https://schemas.us-east-1.amazonaws.com/v1/discoverers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Description": "string",
    "SourceArn": "stringstringstringst",
    "CrossAccount": true,
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v1/discoverers`

Creates a discoverer.

> Body parameter

```json
{
  "Description": "string",
  "SourceArn": "stringstringstringst",
  "CrossAccount": true,
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="creatediscoverer-parameters">Parameters</h3>

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
|» Description|body|string|false|A description for the discoverer.|
|» SourceArn|body|string|true|The ARN of the event bus.|
|» CrossAccount|body|boolean|false|Support discovery of schemas in events sent to the bus from another account. (default: true).|
|» tags|body|object|false|Key-value pairs associated with a resource.|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|

> Example responses

> 201 Response

```json
{
  "Description": {},
  "DiscovererArn": {},
  "DiscovererId": {},
  "SourceArn": {},
  "State": {},
  "CrossAccount": {},
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

> 485 Response

```json
null
```

<h3 id="creatediscoverer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateDiscovererResponse](#schemacreatediscovererresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRegistry

<a id="opIdDescribeRegistry"></a>

> Code samples

```bash
curl https://schemas.us-east-1.amazonaws.com/v1/registries/name/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/registries/name/{registryName}`

Describes the registry.

<h3 id="describeregistry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registryName|path|string|true|The name of the registry.|
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
  "Description": {},
  "RegistryArn": {},
  "RegistryName": {},
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

> 485 Response

```json
null
```

<h3 id="describeregistry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRegistryResponse](#schemadescriberegistryresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRegistry

<a id="opIdUpdateRegistry"></a>

> Code samples

```bash
curl https://schemas.us-east-1.amazonaws.com/v1/registries/name/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Description": "string"
  }'
```

`PUT /v1/registries/name/{registryName}`

Updates a registry.

> Body parameter

```json
{
  "Description": "string"
}
```

<h3 id="updateregistry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registryName|path|string|true|The name of the registry.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Description|body|string|false|The description of the registry to update.|

> Example responses

> 200 Response

```json
{
  "Description": {},
  "RegistryArn": {},
  "RegistryName": {},
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

> 485 Response

```json
null
```

<h3 id="updateregistry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateRegistryResponse](#schemaupdateregistryresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRegistry

<a id="opIdCreateRegistry"></a>

> Code samples

```bash
curl https://schemas.us-east-1.amazonaws.com/v1/registries/name/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Description": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v1/registries/name/{registryName}`

Creates a registry.

> Body parameter

```json
{
  "Description": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createregistry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registryName|path|string|true|The name of the registry.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Description|body|string|false|A description of the registry to be created.|
|» tags|body|object|false|Key-value pairs associated with a resource.|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|

> Example responses

> 201 Response

```json
{
  "Description": {},
  "RegistryArn": {},
  "RegistryName": {},
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

> 485 Response

```json
null
```

<h3 id="createregistry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateRegistryResponse](#schemacreateregistryresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRegistry

<a id="opIdDeleteRegistry"></a>

> Code samples

```bash
curl https://schemas.us-east-1.amazonaws.com/v1/registries/name/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/registries/name/{registryName}`

Deletes a Registry.

<h3 id="deleteregistry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registryName|path|string|true|The name of the registry.|
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

<h3 id="deleteregistry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeSchema

<a id="opIdDescribeSchema"></a>

> Code samples

```bash
curl https://schemas.us-east-1.amazonaws.com/v1/registries/name/string/schemas/name/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/registries/name/{registryName}/schemas/name/{schemaName}`

Retrieve the schema definition.

<h3 id="describeschema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registryName|path|string|true|The name of the registry.|
|schemaName|path|string|true|The name of the schema.|
|schemaVersion|query|string|false|Specifying this limits the results to only this schema version.|
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
  "Content": {},
  "Description": {},
  "LastModified": {},
  "SchemaArn": {},
  "SchemaName": {},
  "SchemaVersion": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Type": {},
  "VersionCreatedDate": {}
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

<h3 id="describeschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSchemaResponse](#schemadescribeschemaresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateSchema

<a id="opIdUpdateSchema"></a>

> Code samples

```bash
curl https://schemas.us-east-1.amazonaws.com/v1/registries/name/string/schemas/name/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ClientTokenId": "string",
    "Content": "string",
    "Description": "string",
    "Type": "OpenApi3"
  }'
```

`PUT /v1/registries/name/{registryName}/schemas/name/{schemaName}`

<p>Updates the schema definition</p> <note><p>Inactive schemas will be deleted after two years.</p></note>

> Body parameter

```json
{
  "ClientTokenId": "string",
  "Content": "string",
  "Description": "string",
  "Type": "OpenApi3"
}
```

<h3 id="updateschema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registryName|path|string|true|The name of the registry.|
|schemaName|path|string|true|The name of the schema.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ClientTokenId|body|string|false|The ID of the client token.|
|» Content|body|string|false|The source of the schema definition.|
|» Description|body|string|false|The description of the schema.|
|» Type|body|string|false|The schema type for the events schema.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Type|OpenApi3|
|» Type|JSONSchemaDraft4|

> Example responses

> 200 Response

```json
{
  "Description": {},
  "LastModified": {},
  "SchemaArn": {},
  "SchemaName": {},
  "SchemaVersion": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Type": {},
  "VersionCreatedDate": {}
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

<h3 id="updateschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateSchemaResponse](#schemaupdateschemaresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateSchema

<a id="opIdCreateSchema"></a>

> Code samples

```bash
curl https://schemas.us-east-1.amazonaws.com/v1/registries/name/string/schemas/name/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Content": "string",
    "Description": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "Type": "OpenApi3"
  }'
```

`POST /v1/registries/name/{registryName}/schemas/name/{schemaName}`

<p>Creates a schema definition.</p> <note><p>Inactive schemas will be deleted after two years.</p></note>

> Body parameter

```json
{
  "Content": "string",
  "Description": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "Type": "OpenApi3"
}
```

<h3 id="createschema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registryName|path|string|true|The name of the registry.|
|schemaName|path|string|true|The name of the schema.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Content|body|string|true|The source of the schema definition.|
|» Description|body|string|false|A description of the schema.|
|» tags|body|object|false|Key-value pairs associated with a resource.|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|
|» Type|body|string|true|The type of schema.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Type|OpenApi3|
|» Type|JSONSchemaDraft4|

> Example responses

> 201 Response

```json
{
  "Description": {},
  "LastModified": {},
  "SchemaArn": {},
  "SchemaName": {},
  "SchemaVersion": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Type": {},
  "VersionCreatedDate": {}
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

<h3 id="createschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateSchemaResponse](#schemacreateschemaresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteSchema

<a id="opIdDeleteSchema"></a>

> Code samples

```bash
curl https://schemas.us-east-1.amazonaws.com/v1/registries/name/string/schemas/name/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/registries/name/{registryName}/schemas/name/{schemaName}`

Delete a schema definition.

<h3 id="deleteschema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registryName|path|string|true|The name of the registry.|
|schemaName|path|string|true|The name of the schema.|
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

<h3 id="deleteschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDiscoverer

<a id="opIdDescribeDiscoverer"></a>

> Code samples

```bash
curl https://schemas.us-east-1.amazonaws.com/v1/discoverers/id/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/discoverers/id/{discovererId}`

Describes the discoverer.

<h3 id="describediscoverer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|discovererId|path|string|true|The ID of the discoverer.|
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
  "Description": {},
  "DiscovererArn": {},
  "DiscovererId": {},
  "SourceArn": {},
  "State": {},
  "CrossAccount": {},
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

> 485 Response

```json
null
```

<h3 id="describediscoverer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDiscovererResponse](#schemadescribediscovererresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDiscoverer

<a id="opIdUpdateDiscoverer"></a>

> Code samples

```bash
curl https://schemas.us-east-1.amazonaws.com/v1/discoverers/id/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Description": "string",
    "CrossAccount": true
  }'
```

`PUT /v1/discoverers/id/{discovererId}`

Updates the discoverer

> Body parameter

```json
{
  "Description": "string",
  "CrossAccount": true
}
```

<h3 id="updatediscoverer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|discovererId|path|string|true|The ID of the discoverer.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Description|body|string|false|The description of the discoverer to update.|
|» CrossAccount|body|boolean|false|Support discovery of schemas in events sent to the bus from another account. (default: true)|

> Example responses

> 200 Response

```json
{
  "Description": {},
  "DiscovererArn": {},
  "DiscovererId": {},
  "SourceArn": {},
  "State": {},
  "CrossAccount": {},
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

> 485 Response

```json
null
```

<h3 id="updatediscoverer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDiscovererResponse](#schemaupdatediscovererresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDiscoverer

<a id="opIdDeleteDiscoverer"></a>

> Code samples

```bash
curl https://schemas.us-east-1.amazonaws.com/v1/discoverers/id/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/discoverers/id/{discovererId}`

Deletes a discoverer.

<h3 id="deletediscoverer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|discovererId|path|string|true|The ID of the discoverer.|
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

<h3 id="deletediscoverer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResourcePolicy

<a id="opIdGetResourcePolicy"></a>

> Code samples

```bash
curl https://schemas.us-east-1.amazonaws.com/v1/policy \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/policy`

Retrieves the resource-based policy attached to a given registry.

<h3 id="getresourcepolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registryName|query|string|false|The name of the registry.|
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
  "Policy": {},
  "RevisionId": {}
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

<h3 id="getresourcepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetResourcePolicyResponse](#schemagetresourcepolicyresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutResourcePolicy

<a id="opIdPutResourcePolicy"></a>

> Code samples

```bash
curl https://schemas.us-east-1.amazonaws.com/v1/policy \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Policy": "string",
    "RevisionId": "string"
  }'
```

`PUT /v1/policy`

The name of the policy.

> Body parameter

```json
{
  "Policy": "string",
  "RevisionId": "string"
}
```

<h3 id="putresourcepolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registryName|query|string|false|The name of the registry.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Policy|body|string|true|The resource-based policy.|
|» RevisionId|body|string|false|The revision ID of the policy.|

> Example responses

> 200 Response

```json
{
  "Policy": {},
  "RevisionId": {}
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

<h3 id="putresourcepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutResourcePolicyResponse](#schemaputresourcepolicyresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|PreconditionFailedException|[PreconditionFailedException](#schemapreconditionfailedexception)|
|483|483|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteResourcePolicy

<a id="opIdDeleteResourcePolicy"></a>

> Code samples

```bash
curl https://schemas.us-east-1.amazonaws.com/v1/policy \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/policy`

Delete the resource-based policy attached to the specified registry.

<h3 id="deleteresourcepolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registryName|query|string|false|The name of the registry.|
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

<h3 id="deleteresourcepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteSchemaVersion

<a id="opIdDeleteSchemaVersion"></a>

> Code samples

```bash
curl https://schemas.us-east-1.amazonaws.com/v1/registries/name/string/schemas/name/string/version/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/registries/name/{registryName}/schemas/name/{schemaName}/version/{schemaVersion}`

Delete the schema version definition

<h3 id="deleteschemaversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registryName|path|string|true|The name of the registry.|
|schemaName|path|string|true|The name of the schema.|
|schemaVersion|path|string|true|The version number of the schema|
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

<h3 id="deleteschemaversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeCodeBinding

<a id="opIdDescribeCodeBinding"></a>

> Code samples

```bash
curl https://schemas.us-east-1.amazonaws.com/v1/registries/name/string/schemas/name/string/language/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/registries/name/{registryName}/schemas/name/{schemaName}/language/{language}`

Describe the code binding URI.

<h3 id="describecodebinding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|language|path|string|true|The language of the code binding.|
|registryName|path|string|true|The name of the registry.|
|schemaName|path|string|true|The name of the schema.|
|schemaVersion|query|string|false|Specifying this limits the results to only this schema version.|
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
  "CreationDate": {},
  "LastModified": {},
  "SchemaVersion": {},
  "Status": {}
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

<h3 id="describecodebinding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeCodeBindingResponse](#schemadescribecodebindingresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutCodeBinding

<a id="opIdPutCodeBinding"></a>

> Code samples

```bash
curl https://schemas.us-east-1.amazonaws.com/v1/registries/name/string/schemas/name/string/language/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /v1/registries/name/{registryName}/schemas/name/{schemaName}/language/{language}`

Put code binding URI

<h3 id="putcodebinding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|language|path|string|true|The language of the code binding.|
|registryName|path|string|true|The name of the registry.|
|schemaName|path|string|true|The name of the schema.|
|schemaVersion|query|string|false|Specifying this limits the results to only this schema version.|
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
{
  "CreationDate": {},
  "LastModified": {},
  "SchemaVersion": {},
  "Status": {}
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

<h3 id="putcodebinding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[PutCodeBindingResponse](#schemaputcodebindingresponse)|
|480|480|GoneException|[GoneException](#schemagoneexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ExportSchema

<a id="opIdExportSchema"></a>

> Code samples

```bash
curl 'https://schemas.us-east-1.amazonaws.com/v1/registries/name/string/schemas/name/string/export#type?type=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/registries/name/{registryName}/schemas/name/{schemaName}/export#type`

<h3 id="exportschema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registryName|path|string|true|The name of the registry.|
|schemaName|path|string|true|The name of the schema.|
|schemaVersion|query|string|false|Specifying this limits the results to only this schema version.|
|type|query|string|true|none|
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
  "Content": "string",
  "SchemaArn": "string",
  "SchemaName": "string",
  "SchemaVersion": "string",
  "Type": "string"
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

<h3 id="exportschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExportSchemaResponse](#schemaexportschemaresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCodeBindingSource

<a id="opIdGetCodeBindingSource"></a>

> Code samples

```bash
curl https://schemas.us-east-1.amazonaws.com/v1/registries/name/string/schemas/name/string/language/string/source \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/registries/name/{registryName}/schemas/name/{schemaName}/language/{language}/source`

Get the code binding source URI.

<h3 id="getcodebindingsource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|language|path|string|true|The language of the code binding.|
|registryName|path|string|true|The name of the registry.|
|schemaName|path|string|true|The name of the schema.|
|schemaVersion|query|string|false|Specifying this limits the results to only this schema version.|
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
  "Body": "string"
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

<h3 id="getcodebindingsource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCodeBindingSourceResponse](#schemagetcodebindingsourceresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDiscoveredSchema

<a id="opIdGetDiscoveredSchema"></a>

> Code samples

```bash
curl https://schemas.us-east-1.amazonaws.com/v1/discover \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Events": [
      "string"
    ],
    "Type": "OpenApi3"
  }'
```

`POST /v1/discover`

Get the discovered schema that was generated based on sampled events.

> Body parameter

```json
{
  "Events": [
    "string"
  ],
  "Type": "OpenApi3"
}
```

<h3 id="getdiscoveredschema-parameters">Parameters</h3>

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
|» Events|body|[[GetDiscoveredSchemaVersionItemInput](#schemagetdiscoveredschemaversioniteminput)]|true|An array of strings where each string is a JSON event. These are the events that were used to generate the schema. The array includes a single type of event and has a maximum size of 10 events.|
|» Type|body|string|true|The type of event.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Type|OpenApi3|
|» Type|JSONSchemaDraft4|

> Example responses

> 200 Response

```json
{
  "Content": {}
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

<h3 id="getdiscoveredschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDiscoveredSchemaResponse](#schemagetdiscoveredschemaresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRegistries

<a id="opIdListRegistries"></a>

> Code samples

```bash
curl https://schemas.us-east-1.amazonaws.com/v1/registries \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/registries`

List the registries.

<h3 id="listregistries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|none|
|nextToken|query|string|false|The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.|
|registryNamePrefix|query|string|false|Specifying this limits the results to only those registry names that start with the specified prefix.|
|scope|query|string|false|Can be set to Local or AWS to limit responses to your custom registries, or the ones provided by AWS.|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "NextToken": {},
  "Registries": {}
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

<h3 id="listregistries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRegistriesResponse](#schemalistregistriesresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSchemaVersions

<a id="opIdListSchemaVersions"></a>

> Code samples

```bash
curl https://schemas.us-east-1.amazonaws.com/v1/registries/name/string/schemas/name/string/versions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/registries/name/{registryName}/schemas/name/{schemaName}/versions`

Provides a list of the schema versions and related information.

<h3 id="listschemaversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|none|
|nextToken|query|string|false|The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.|
|registryName|path|string|true|The name of the registry.|
|schemaName|path|string|true|The name of the schema.|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "NextToken": {},
  "SchemaVersions": {}
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

<h3 id="listschemaversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSchemaVersionsResponse](#schemalistschemaversionsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSchemas

<a id="opIdListSchemas"></a>

> Code samples

```bash
curl https://schemas.us-east-1.amazonaws.com/v1/registries/name/string/schemas \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/registries/name/{registryName}/schemas`

List the schemas.

<h3 id="listschemas-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|none|
|nextToken|query|string|false|The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.|
|registryName|path|string|true|The name of the registry.|
|schemaNamePrefix|query|string|false|Specifying this limits the results to only those schema names that start with the specified prefix.|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "NextToken": {},
  "Schemas": {}
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

<h3 id="listschemas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSchemasResponse](#schemalistschemasresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://schemas.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resource-arn}`

Get tags for resource.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource-arn|path|string|true|The ARN of the resource.|
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://schemas.us-east-1.amazonaws.com/tags/string \
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

`POST /tags/{resource-arn}`

Add tags to a resource.

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
|resource-arn|path|string|true|The ARN of the resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|true|Key-value pairs associated with a resource.|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SearchSchemas

<a id="opIdSearchSchemas"></a>

> Code samples

```bash
curl 'https://schemas.us-east-1.amazonaws.com/v1/registries/name/string/schemas/search#keywords?keywords=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/registries/name/{registryName}/schemas/search#keywords`

Search the schemas

<h3 id="searchschemas-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|keywords|query|string|true|Specifying this limits the results to only schemas that include the provided keywords.|
|limit|query|integer|false|none|
|nextToken|query|string|false|The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.|
|registryName|path|string|true|The name of the registry.|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "NextToken": {},
  "Schemas": {}
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

<h3 id="searchschemas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchSchemasResponse](#schemasearchschemasresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartDiscoverer

<a id="opIdStartDiscoverer"></a>

> Code samples

```bash
curl https://schemas.us-east-1.amazonaws.com/v1/discoverers/id/string/start \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /v1/discoverers/id/{discovererId}/start`

Starts the discoverer

<h3 id="startdiscoverer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|discovererId|path|string|true|The ID of the discoverer.|
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
  "DiscovererId": {},
  "State": {}
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

<h3 id="startdiscoverer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartDiscovererResponse](#schemastartdiscovererresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopDiscoverer

<a id="opIdStopDiscoverer"></a>

> Code samples

```bash
curl https://schemas.us-east-1.amazonaws.com/v1/discoverers/id/string/stop \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /v1/discoverers/id/{discovererId}/stop`

Stops the discoverer

<h3 id="stopdiscoverer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|discovererId|path|string|true|The ID of the discoverer.|
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
  "DiscovererId": {},
  "State": {}
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

<h3 id="stopdiscoverer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopDiscovererResponse](#schemastopdiscovererresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://schemas.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resource-arn}#tagKeys`

Removes tags from a resource.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource-arn|path|string|true|The ARN of the resource.|
|tagKeys|query|[[__string](#schema__string)]|true|Keys of key-value pairs.|
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
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateDiscovererResponse">CreateDiscovererResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatediscovererresponse"></a>
<a id="schema_CreateDiscovererResponse"></a>
<a id="tocScreatediscovererresponse"></a>
<a id="tocscreatediscovererresponse"></a>

```json
{
  "Description": {},
  "DiscovererArn": {},
  "DiscovererId": {},
  "SourceArn": {},
  "State": {},
  "CrossAccount": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|DiscovererArn|object|false|none|none|
|DiscovererId|object|false|none|none|
|SourceArn|object|false|none|none|
|State|object|false|none|none|
|CrossAccount|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS___string">__string</h2>
<!-- backwards compatibility -->
<a id="schema__string"></a>
<a id="schema___string"></a>
<a id="tocS__string"></a>
<a id="tocs__string"></a>

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

<h2 id="tocS_InternalServerErrorException">InternalServerErrorException</h2>
<!-- backwards compatibility -->
<a id="schemainternalservererrorexception"></a>
<a id="schema_InternalServerErrorException"></a>
<a id="tocSinternalservererrorexception"></a>
<a id="tocsinternalservererrorexception"></a>

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

<h2 id="tocS_ForbiddenException">ForbiddenException</h2>
<!-- backwards compatibility -->
<a id="schemaforbiddenexception"></a>
<a id="schema_ForbiddenException"></a>
<a id="tocSforbiddenexception"></a>
<a id="tocsforbiddenexception"></a>

```json
null
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

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

```json
null
```

<h2 id="tocS_CreateRegistryResponse">CreateRegistryResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateregistryresponse"></a>
<a id="schema_CreateRegistryResponse"></a>
<a id="tocScreateregistryresponse"></a>
<a id="tocscreateregistryresponse"></a>

```json
{
  "Description": {},
  "RegistryArn": {},
  "RegistryName": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|RegistryArn|object|false|none|none|
|RegistryName|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateSchemaResponse">CreateSchemaResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateschemaresponse"></a>
<a id="schema_CreateSchemaResponse"></a>
<a id="tocScreateschemaresponse"></a>
<a id="tocscreateschemaresponse"></a>

```json
{
  "Description": {},
  "LastModified": {},
  "SchemaArn": {},
  "SchemaName": {},
  "SchemaVersion": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Type": {},
  "VersionCreatedDate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|LastModified|object|false|none|none|
|SchemaArn|object|false|none|none|
|SchemaName|object|false|none|none|
|SchemaVersion|object|false|none|none|
|Tags|object|false|none|none|
|Type|object|false|none|none|
|VersionCreatedDate|object|false|none|none|

<h2 id="tocS_NotFoundException">NotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemanotfoundexception"></a>
<a id="schema_NotFoundException"></a>
<a id="tocSnotfoundexception"></a>
<a id="tocsnotfoundexception"></a>

```json
null
```

<h2 id="tocS_DescribeCodeBindingResponse">DescribeCodeBindingResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribecodebindingresponse"></a>
<a id="schema_DescribeCodeBindingResponse"></a>
<a id="tocSdescribecodebindingresponse"></a>
<a id="tocsdescribecodebindingresponse"></a>

```json
{
  "CreationDate": {},
  "LastModified": {},
  "SchemaVersion": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreationDate|object|false|none|none|
|LastModified|object|false|none|none|
|SchemaVersion|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_TooManyRequestsException">TooManyRequestsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanyrequestsexception"></a>
<a id="schema_TooManyRequestsException"></a>
<a id="tocStoomanyrequestsexception"></a>
<a id="tocstoomanyrequestsexception"></a>

```json
null
```

<h2 id="tocS_DescribeDiscovererResponse">DescribeDiscovererResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribediscovererresponse"></a>
<a id="schema_DescribeDiscovererResponse"></a>
<a id="tocSdescribediscovererresponse"></a>
<a id="tocsdescribediscovererresponse"></a>

```json
{
  "Description": {},
  "DiscovererArn": {},
  "DiscovererId": {},
  "SourceArn": {},
  "State": {},
  "CrossAccount": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|DiscovererArn|object|false|none|none|
|DiscovererId|object|false|none|none|
|SourceArn|object|false|none|none|
|State|object|false|none|none|
|CrossAccount|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DescribeRegistryResponse">DescribeRegistryResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescriberegistryresponse"></a>
<a id="schema_DescribeRegistryResponse"></a>
<a id="tocSdescriberegistryresponse"></a>
<a id="tocsdescriberegistryresponse"></a>

```json
{
  "Description": {},
  "RegistryArn": {},
  "RegistryName": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|RegistryArn|object|false|none|none|
|RegistryName|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DescribeSchemaResponse">DescribeSchemaResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeschemaresponse"></a>
<a id="schema_DescribeSchemaResponse"></a>
<a id="tocSdescribeschemaresponse"></a>
<a id="tocsdescribeschemaresponse"></a>

```json
{
  "Content": {},
  "Description": {},
  "LastModified": {},
  "SchemaArn": {},
  "SchemaName": {},
  "SchemaVersion": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Type": {},
  "VersionCreatedDate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Content|object|false|none|none|
|Description|object|false|none|none|
|LastModified|object|false|none|none|
|SchemaArn|object|false|none|none|
|SchemaName|object|false|none|none|
|SchemaVersion|object|false|none|none|
|Tags|object|false|none|none|
|Type|object|false|none|none|
|VersionCreatedDate|object|false|none|none|

<h2 id="tocS_ExportSchemaResponse">ExportSchemaResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexportschemaresponse"></a>
<a id="schema_ExportSchemaResponse"></a>
<a id="tocSexportschemaresponse"></a>
<a id="tocsexportschemaresponse"></a>

```json
{
  "Content": "string",
  "SchemaArn": "string",
  "SchemaName": "string",
  "SchemaVersion": "string",
  "Type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Content|[__string](#schema__string)|false|none|none|
|SchemaArn|[__string](#schema__string)|false|none|none|
|SchemaName|[__string](#schema__string)|false|none|none|
|SchemaVersion|[__string](#schema__string)|false|none|none|
|Type|[__string](#schema__string)|false|none|none|

<h2 id="tocS_GetCodeBindingSourceResponse">GetCodeBindingSourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcodebindingsourceresponse"></a>
<a id="schema_GetCodeBindingSourceResponse"></a>
<a id="tocSgetcodebindingsourceresponse"></a>
<a id="tocsgetcodebindingsourceresponse"></a>

```json
{
  "Body": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Body|[Body](#schemabody)|false|none|none|

<h2 id="tocS_GetDiscoveredSchemaResponse">GetDiscoveredSchemaResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdiscoveredschemaresponse"></a>
<a id="schema_GetDiscoveredSchemaResponse"></a>
<a id="tocSgetdiscoveredschemaresponse"></a>
<a id="tocsgetdiscoveredschemaresponse"></a>

```json
{
  "Content": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Content|object|false|none|none|

<h2 id="tocS_GetDiscoveredSchemaVersionItemInput">GetDiscoveredSchemaVersionItemInput</h2>
<!-- backwards compatibility -->
<a id="schemagetdiscoveredschemaversioniteminput"></a>
<a id="schema_GetDiscoveredSchemaVersionItemInput"></a>
<a id="tocSgetdiscoveredschemaversioniteminput"></a>
<a id="tocsgetdiscoveredschemaversioniteminput"></a>

```json
"string"
```

<h2 id="tocS_GetResourcePolicyResponse">GetResourcePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcepolicyresponse"></a>
<a id="schema_GetResourcePolicyResponse"></a>
<a id="tocSgetresourcepolicyresponse"></a>
<a id="tocsgetresourcepolicyresponse"></a>

```json
{
  "Policy": {},
  "RevisionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|false|none|none|
|RevisionId|object|false|none|none|

<h2 id="tocS_ListDiscoverersResponse">ListDiscoverersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdiscoverersresponse"></a>
<a id="schema_ListDiscoverersResponse"></a>
<a id="tocSlistdiscoverersresponse"></a>
<a id="tocslistdiscoverersresponse"></a>

```json
{
  "Discoverers": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Discoverers|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListRegistriesResponse">ListRegistriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistregistriesresponse"></a>
<a id="schema_ListRegistriesResponse"></a>
<a id="tocSlistregistriesresponse"></a>
<a id="tocslistregistriesresponse"></a>

```json
{
  "NextToken": {},
  "Registries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Registries|object|false|none|none|

<h2 id="tocS_ListSchemaVersionsResponse">ListSchemaVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistschemaversionsresponse"></a>
<a id="schema_ListSchemaVersionsResponse"></a>
<a id="tocSlistschemaversionsresponse"></a>
<a id="tocslistschemaversionsresponse"></a>

```json
{
  "NextToken": {},
  "SchemaVersions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|SchemaVersions|object|false|none|none|

<h2 id="tocS_ListSchemasResponse">ListSchemasResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistschemasresponse"></a>
<a id="schema_ListSchemasResponse"></a>
<a id="tocSlistschemasresponse"></a>
<a id="tocslistschemasresponse"></a>

```json
{
  "NextToken": {},
  "Schemas": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Schemas|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

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

<h2 id="tocS_PutCodeBindingResponse">PutCodeBindingResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputcodebindingresponse"></a>
<a id="schema_PutCodeBindingResponse"></a>
<a id="tocSputcodebindingresponse"></a>
<a id="tocsputcodebindingresponse"></a>

```json
{
  "CreationDate": {},
  "LastModified": {},
  "SchemaVersion": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreationDate|object|false|none|none|
|LastModified|object|false|none|none|
|SchemaVersion|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_GoneException">GoneException</h2>
<!-- backwards compatibility -->
<a id="schemagoneexception"></a>
<a id="schema_GoneException"></a>
<a id="tocSgoneexception"></a>
<a id="tocsgoneexception"></a>

```json
null
```

<h2 id="tocS_PutResourcePolicyResponse">PutResourcePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputresourcepolicyresponse"></a>
<a id="schema_PutResourcePolicyResponse"></a>
<a id="tocSputresourcepolicyresponse"></a>
<a id="tocsputresourcepolicyresponse"></a>

```json
{
  "Policy": {},
  "RevisionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|false|none|none|
|RevisionId|object|false|none|none|

<h2 id="tocS_PreconditionFailedException">PreconditionFailedException</h2>
<!-- backwards compatibility -->
<a id="schemapreconditionfailedexception"></a>
<a id="schema_PreconditionFailedException"></a>
<a id="tocSpreconditionfailedexception"></a>
<a id="tocspreconditionfailedexception"></a>

```json
null
```

<h2 id="tocS_SearchSchemasResponse">SearchSchemasResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchschemasresponse"></a>
<a id="schema_SearchSchemasResponse"></a>
<a id="tocSsearchschemasresponse"></a>
<a id="tocssearchschemasresponse"></a>

```json
{
  "NextToken": {},
  "Schemas": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Schemas|object|false|none|none|

<h2 id="tocS_StartDiscovererResponse">StartDiscovererResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartdiscovererresponse"></a>
<a id="schema_StartDiscovererResponse"></a>
<a id="tocSstartdiscovererresponse"></a>
<a id="tocsstartdiscovererresponse"></a>

```json
{
  "DiscovererId": {},
  "State": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DiscovererId|object|false|none|none|
|State|object|false|none|none|

<h2 id="tocS_StopDiscovererResponse">StopDiscovererResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopdiscovererresponse"></a>
<a id="schema_StopDiscovererResponse"></a>
<a id="tocSstopdiscovererresponse"></a>
<a id="tocsstopdiscovererresponse"></a>

```json
{
  "DiscovererId": {},
  "State": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DiscovererId|object|false|none|none|
|State|object|false|none|none|

<h2 id="tocS_UpdateDiscovererResponse">UpdateDiscovererResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatediscovererresponse"></a>
<a id="schema_UpdateDiscovererResponse"></a>
<a id="tocSupdatediscovererresponse"></a>
<a id="tocsupdatediscovererresponse"></a>

```json
{
  "Description": {},
  "DiscovererArn": {},
  "DiscovererId": {},
  "SourceArn": {},
  "State": {},
  "CrossAccount": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|DiscovererArn|object|false|none|none|
|DiscovererId|object|false|none|none|
|SourceArn|object|false|none|none|
|State|object|false|none|none|
|CrossAccount|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_UpdateRegistryResponse">UpdateRegistryResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateregistryresponse"></a>
<a id="schema_UpdateRegistryResponse"></a>
<a id="tocSupdateregistryresponse"></a>
<a id="tocsupdateregistryresponse"></a>

```json
{
  "Description": {},
  "RegistryArn": {},
  "RegistryName": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|RegistryArn|object|false|none|none|
|RegistryName|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_UpdateSchemaResponse">UpdateSchemaResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateschemaresponse"></a>
<a id="schema_UpdateSchemaResponse"></a>
<a id="tocSupdateschemaresponse"></a>
<a id="tocsupdateschemaresponse"></a>

```json
{
  "Description": {},
  "LastModified": {},
  "SchemaArn": {},
  "SchemaName": {},
  "SchemaVersion": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Type": {},
  "VersionCreatedDate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|LastModified|object|false|none|none|
|SchemaArn|object|false|none|none|
|SchemaName|object|false|none|none|
|SchemaVersion|object|false|none|none|
|Tags|object|false|none|none|
|Type|object|false|none|none|
|VersionCreatedDate|object|false|none|none|

<h2 id="tocS_CodeGenerationStatus">CodeGenerationStatus</h2>
<!-- backwards compatibility -->
<a id="schemacodegenerationstatus"></a>
<a id="schema_CodeGenerationStatus"></a>
<a id="tocScodegenerationstatus"></a>
<a id="tocscodegenerationstatus"></a>

```json
"CREATE_IN_PROGRESS"
```

<h2 id="tocS___stringMin0Max256">__stringMin0Max256</h2>
<!-- backwards compatibility -->
<a id="schema__stringmin0max256"></a>
<a id="schema___stringMin0Max256"></a>
<a id="tocS__stringmin0max256"></a>
<a id="tocs__stringmin0max256"></a>

```json
"string"
```

<h2 id="tocS___stringMin20Max1600">__stringMin20Max1600</h2>
<!-- backwards compatibility -->
<a id="schema__stringmin20max1600"></a>
<a id="schema___stringMin20Max1600"></a>
<a id="tocS__stringmin20max1600"></a>
<a id="tocs__stringmin20max1600"></a>

```json
"stringstringstringst"
```

<h2 id="tocS___boolean">__boolean</h2>
<!-- backwards compatibility -->
<a id="schema__boolean"></a>
<a id="schema___boolean"></a>
<a id="tocS__boolean"></a>
<a id="tocs__boolean"></a>

```json
true
```

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

Key-value pairs associated with a resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[__string](#schema__string)|false|none|none|

<h2 id="tocS_CreateDiscovererRequest">CreateDiscovererRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatediscovererrequest"></a>
<a id="schema_CreateDiscovererRequest"></a>
<a id="tocScreatediscovererrequest"></a>
<a id="tocscreatediscovererrequest"></a>

```json
{
  "Description": {},
  "SourceArn": {},
  "CrossAccount": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|SourceArn|object|true|none|none|
|CrossAccount|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DiscovererState">DiscovererState</h2>
<!-- backwards compatibility -->
<a id="schemadiscovererstate"></a>
<a id="schema_DiscovererState"></a>
<a id="tocSdiscovererstate"></a>
<a id="tocsdiscovererstate"></a>

```json
"STARTED"
```

<h2 id="tocS_CreateRegistryRequest">CreateRegistryRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateregistryrequest"></a>
<a id="schema_CreateRegistryRequest"></a>
<a id="tocScreateregistryrequest"></a>
<a id="tocscreateregistryrequest"></a>

```json
{
  "Description": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS___stringMin1Max100000">__stringMin1Max100000</h2>
<!-- backwards compatibility -->
<a id="schema__stringmin1max100000"></a>
<a id="schema___stringMin1Max100000"></a>
<a id="tocS__stringmin1max100000"></a>
<a id="tocs__stringmin1max100000"></a>

```json
"string"
```

<h2 id="tocS_Type">Type</h2>
<!-- backwards compatibility -->
<a id="schematype"></a>
<a id="schema_Type"></a>
<a id="tocStype"></a>
<a id="tocstype"></a>

```json
"OpenApi3"
```

<h2 id="tocS_CreateSchemaRequest">CreateSchemaRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateschemarequest"></a>
<a id="schema_CreateSchemaRequest"></a>
<a id="tocScreateschemarequest"></a>
<a id="tocscreateschemarequest"></a>

```json
{
  "Content": {},
  "Description": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Type": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Content|object|true|none|none|
|Description|object|false|none|none|
|Tags|object|false|none|none|
|Type|object|true|none|none|

<h2 id="tocS___timestampIso8601">__timestampIso8601</h2>
<!-- backwards compatibility -->
<a id="schema__timestampiso8601"></a>
<a id="schema___timestampIso8601"></a>
<a id="tocS__timestampiso8601"></a>
<a id="tocs__timestampiso8601"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_DeleteDiscovererRequest">DeleteDiscovererRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletediscovererrequest"></a>
<a id="schema_DeleteDiscovererRequest"></a>
<a id="tocSdeletediscovererrequest"></a>
<a id="tocsdeletediscovererrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteRegistryRequest">DeleteRegistryRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteregistryrequest"></a>
<a id="schema_DeleteRegistryRequest"></a>
<a id="tocSdeleteregistryrequest"></a>
<a id="tocsdeleteregistryrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteResourcePolicyRequest">DeleteResourcePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresourcepolicyrequest"></a>
<a id="schema_DeleteResourcePolicyRequest"></a>
<a id="tocSdeleteresourcepolicyrequest"></a>
<a id="tocsdeleteresourcepolicyrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteSchemaRequest">DeleteSchemaRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteschemarequest"></a>
<a id="schema_DeleteSchemaRequest"></a>
<a id="tocSdeleteschemarequest"></a>
<a id="tocsdeleteschemarequest"></a>

```json
{}
```

<h2 id="tocS_DeleteSchemaVersionRequest">DeleteSchemaVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteschemaversionrequest"></a>
<a id="schema_DeleteSchemaVersionRequest"></a>
<a id="tocSdeleteschemaversionrequest"></a>
<a id="tocsdeleteschemaversionrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeCodeBindingRequest">DescribeCodeBindingRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribecodebindingrequest"></a>
<a id="schema_DescribeCodeBindingRequest"></a>
<a id="tocSdescribecodebindingrequest"></a>
<a id="tocsdescribecodebindingrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeDiscovererRequest">DescribeDiscovererRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribediscovererrequest"></a>
<a id="schema_DescribeDiscovererRequest"></a>
<a id="tocSdescribediscovererrequest"></a>
<a id="tocsdescribediscovererrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeRegistryRequest">DescribeRegistryRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescriberegistryrequest"></a>
<a id="schema_DescribeRegistryRequest"></a>
<a id="tocSdescriberegistryrequest"></a>
<a id="tocsdescriberegistryrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeSchemaRequest">DescribeSchemaRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeschemarequest"></a>
<a id="schema_DescribeSchemaRequest"></a>
<a id="tocSdescribeschemarequest"></a>
<a id="tocsdescribeschemarequest"></a>

```json
{}
```

<h2 id="tocS_DiscovererSummary">DiscovererSummary</h2>
<!-- backwards compatibility -->
<a id="schemadiscoverersummary"></a>
<a id="schema_DiscovererSummary"></a>
<a id="tocSdiscoverersummary"></a>
<a id="tocsdiscoverersummary"></a>

```json
{
  "DiscovererArn": {},
  "DiscovererId": {},
  "SourceArn": {},
  "State": {},
  "CrossAccount": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DiscovererArn|object|false|none|none|
|DiscovererId|object|false|none|none|
|SourceArn|object|false|none|none|
|State|object|false|none|none|
|CrossAccount|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ExportSchemaRequest">ExportSchemaRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexportschemarequest"></a>
<a id="schema_ExportSchemaRequest"></a>
<a id="tocSexportschemarequest"></a>
<a id="tocsexportschemarequest"></a>

```json
{}
```

<h2 id="tocS_GetCodeBindingSourceRequest">GetCodeBindingSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcodebindingsourcerequest"></a>
<a id="schema_GetCodeBindingSourceRequest"></a>
<a id="tocSgetcodebindingsourcerequest"></a>
<a id="tocsgetcodebindingsourcerequest"></a>

```json
{}
```

<h2 id="tocS_Body">Body</h2>
<!-- backwards compatibility -->
<a id="schemabody"></a>
<a id="schema_Body"></a>
<a id="tocSbody"></a>
<a id="tocsbody"></a>

```json
"string"
```

<h2 id="tocS___listOfGetDiscoveredSchemaVersionItemInput">__listOfGetDiscoveredSchemaVersionItemInput</h2>
<!-- backwards compatibility -->
<a id="schema__listofgetdiscoveredschemaversioniteminput"></a>
<a id="schema___listOfGetDiscoveredSchemaVersionItemInput"></a>
<a id="tocS__listofgetdiscoveredschemaversioniteminput"></a>
<a id="tocs__listofgetdiscoveredschemaversioniteminput"></a>

```json
[
  "string"
]
```

<h2 id="tocS_GetDiscoveredSchemaRequest">GetDiscoveredSchemaRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdiscoveredschemarequest"></a>
<a id="schema_GetDiscoveredSchemaRequest"></a>
<a id="tocSgetdiscoveredschemarequest"></a>
<a id="tocsgetdiscoveredschemarequest"></a>

```json
{
  "Events": {},
  "Type": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Events|object|true|none|none|
|Type|object|true|none|none|

<h2 id="tocS_GetResourcePolicyRequest">GetResourcePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcepolicyrequest"></a>
<a id="schema_GetResourcePolicyRequest"></a>
<a id="tocSgetresourcepolicyrequest"></a>
<a id="tocsgetresourcepolicyrequest"></a>

```json
{}
```

<h2 id="tocS___integer">__integer</h2>
<!-- backwards compatibility -->
<a id="schema__integer"></a>
<a id="schema___integer"></a>
<a id="tocS__integer"></a>
<a id="tocs__integer"></a>

```json
0
```

<h2 id="tocS_ListDiscoverersRequest">ListDiscoverersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdiscoverersrequest"></a>
<a id="schema_ListDiscoverersRequest"></a>
<a id="tocSlistdiscoverersrequest"></a>
<a id="tocslistdiscoverersrequest"></a>

```json
{}
```

<h2 id="tocS___listOfDiscovererSummary">__listOfDiscovererSummary</h2>
<!-- backwards compatibility -->
<a id="schema__listofdiscoverersummary"></a>
<a id="schema___listOfDiscovererSummary"></a>
<a id="tocS__listofdiscoverersummary"></a>
<a id="tocs__listofdiscoverersummary"></a>

```json
[
  {
    "DiscovererArn": {},
    "DiscovererId": {},
    "SourceArn": {},
    "State": {},
    "CrossAccount": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_ListRegistriesRequest">ListRegistriesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistregistriesrequest"></a>
<a id="schema_ListRegistriesRequest"></a>
<a id="tocSlistregistriesrequest"></a>
<a id="tocslistregistriesrequest"></a>

```json
{}
```

<h2 id="tocS___listOfRegistrySummary">__listOfRegistrySummary</h2>
<!-- backwards compatibility -->
<a id="schema__listofregistrysummary"></a>
<a id="schema___listOfRegistrySummary"></a>
<a id="tocS__listofregistrysummary"></a>
<a id="tocs__listofregistrysummary"></a>

```json
[
  {
    "RegistryArn": {},
    "RegistryName": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_ListSchemaVersionsRequest">ListSchemaVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistschemaversionsrequest"></a>
<a id="schema_ListSchemaVersionsRequest"></a>
<a id="tocSlistschemaversionsrequest"></a>
<a id="tocslistschemaversionsrequest"></a>

```json
{}
```

<h2 id="tocS___listOfSchemaVersionSummary">__listOfSchemaVersionSummary</h2>
<!-- backwards compatibility -->
<a id="schema__listofschemaversionsummary"></a>
<a id="schema___listOfSchemaVersionSummary"></a>
<a id="tocS__listofschemaversionsummary"></a>
<a id="tocs__listofschemaversionsummary"></a>

```json
[
  {
    "SchemaArn": {},
    "SchemaName": {},
    "SchemaVersion": {},
    "Type": {}
  }
]
```

<h2 id="tocS_ListSchemasRequest">ListSchemasRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistschemasrequest"></a>
<a id="schema_ListSchemasRequest"></a>
<a id="tocSlistschemasrequest"></a>
<a id="tocslistschemasrequest"></a>

```json
{}
```

<h2 id="tocS___listOfSchemaSummary">__listOfSchemaSummary</h2>
<!-- backwards compatibility -->
<a id="schema__listofschemasummary"></a>
<a id="schema___listOfSchemaSummary"></a>
<a id="tocS__listofschemasummary"></a>
<a id="tocs__listofschemasummary"></a>

```json
[
  {
    "LastModified": {},
    "SchemaArn": {},
    "SchemaName": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "VersionCount": {}
  }
]
```

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{}
```

<h2 id="tocS_PutCodeBindingRequest">PutCodeBindingRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputcodebindingrequest"></a>
<a id="schema_PutCodeBindingRequest"></a>
<a id="tocSputcodebindingrequest"></a>
<a id="tocsputcodebindingrequest"></a>

```json
{}
```

<h2 id="tocS_PutResourcePolicyRequest">PutResourcePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputresourcepolicyrequest"></a>
<a id="schema_PutResourcePolicyRequest"></a>
<a id="tocSputresourcepolicyrequest"></a>
<a id="tocsputresourcepolicyrequest"></a>

```json
{
  "Policy": {},
  "RevisionId": {}
}
```

The name of the policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|true|none|none|
|RevisionId|object|false|none|none|

<h2 id="tocS_RegistrySummary">RegistrySummary</h2>
<!-- backwards compatibility -->
<a id="schemaregistrysummary"></a>
<a id="schema_RegistrySummary"></a>
<a id="tocSregistrysummary"></a>
<a id="tocsregistrysummary"></a>

```json
{
  "RegistryArn": {},
  "RegistryName": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RegistryArn|object|false|none|none|
|RegistryName|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS___long">__long</h2>
<!-- backwards compatibility -->
<a id="schema__long"></a>
<a id="schema___long"></a>
<a id="tocS__long"></a>
<a id="tocs__long"></a>

```json
0
```

<h2 id="tocS_SchemaSummary">SchemaSummary</h2>
<!-- backwards compatibility -->
<a id="schemaschemasummary"></a>
<a id="schema_SchemaSummary"></a>
<a id="tocSschemasummary"></a>
<a id="tocsschemasummary"></a>

```json
{
  "LastModified": {},
  "SchemaArn": {},
  "SchemaName": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "VersionCount": {}
}
```

A summary of schema details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LastModified|object|false|none|none|
|SchemaArn|object|false|none|none|
|SchemaName|object|false|none|none|
|Tags|object|false|none|none|
|VersionCount|object|false|none|none|

<h2 id="tocS_SchemaVersionSummary">SchemaVersionSummary</h2>
<!-- backwards compatibility -->
<a id="schemaschemaversionsummary"></a>
<a id="schema_SchemaVersionSummary"></a>
<a id="tocSschemaversionsummary"></a>
<a id="tocsschemaversionsummary"></a>

```json
{
  "SchemaArn": {},
  "SchemaName": {},
  "SchemaVersion": {},
  "Type": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemaArn|object|false|none|none|
|SchemaName|object|false|none|none|
|SchemaVersion|object|false|none|none|
|Type|object|false|none|none|

<h2 id="tocS___listOfSearchSchemaVersionSummary">__listOfSearchSchemaVersionSummary</h2>
<!-- backwards compatibility -->
<a id="schema__listofsearchschemaversionsummary"></a>
<a id="schema___listOfSearchSchemaVersionSummary"></a>
<a id="tocS__listofsearchschemaversionsummary"></a>
<a id="tocs__listofsearchschemaversionsummary"></a>

```json
[
  {
    "CreatedDate": {},
    "SchemaVersion": {},
    "Type": {}
  }
]
```

<h2 id="tocS_SearchSchemaSummary">SearchSchemaSummary</h2>
<!-- backwards compatibility -->
<a id="schemasearchschemasummary"></a>
<a id="schema_SearchSchemaSummary"></a>
<a id="tocSsearchschemasummary"></a>
<a id="tocssearchschemasummary"></a>

```json
{
  "RegistryName": {},
  "SchemaArn": {},
  "SchemaName": {},
  "SchemaVersions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RegistryName|object|false|none|none|
|SchemaArn|object|false|none|none|
|SchemaName|object|false|none|none|
|SchemaVersions|object|false|none|none|

<h2 id="tocS_SearchSchemaVersionSummary">SearchSchemaVersionSummary</h2>
<!-- backwards compatibility -->
<a id="schemasearchschemaversionsummary"></a>
<a id="schema_SearchSchemaVersionSummary"></a>
<a id="tocSsearchschemaversionsummary"></a>
<a id="tocssearchschemaversionsummary"></a>

```json
{
  "CreatedDate": {},
  "SchemaVersion": {},
  "Type": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreatedDate|object|false|none|none|
|SchemaVersion|object|false|none|none|
|Type|object|false|none|none|

<h2 id="tocS_SearchSchemasRequest">SearchSchemasRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchschemasrequest"></a>
<a id="schema_SearchSchemasRequest"></a>
<a id="tocSsearchschemasrequest"></a>
<a id="tocssearchschemasrequest"></a>

```json
{}
```

<h2 id="tocS___listOfSearchSchemaSummary">__listOfSearchSchemaSummary</h2>
<!-- backwards compatibility -->
<a id="schema__listofsearchschemasummary"></a>
<a id="schema___listOfSearchSchemaSummary"></a>
<a id="tocS__listofsearchschemasummary"></a>
<a id="tocs__listofsearchschemasummary"></a>

```json
[
  {
    "RegistryName": {},
    "SchemaArn": {},
    "SchemaName": {},
    "SchemaVersions": {}
  }
]
```

<h2 id="tocS_StartDiscovererRequest">StartDiscovererRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartdiscovererrequest"></a>
<a id="schema_StartDiscovererRequest"></a>
<a id="tocSstartdiscovererrequest"></a>
<a id="tocsstartdiscovererrequest"></a>

```json
{}
```

<h2 id="tocS_StopDiscovererRequest">StopDiscovererRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopdiscovererrequest"></a>
<a id="schema_StopDiscovererRequest"></a>
<a id="tocSstopdiscovererrequest"></a>
<a id="tocsstopdiscovererrequest"></a>

```json
{}
```

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|true|none|none|

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

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpdateDiscovererRequest">UpdateDiscovererRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatediscovererrequest"></a>
<a id="schema_UpdateDiscovererRequest"></a>
<a id="tocSupdatediscovererrequest"></a>
<a id="tocsupdatediscovererrequest"></a>

```json
{
  "Description": {},
  "CrossAccount": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|CrossAccount|object|false|none|none|

<h2 id="tocS_UpdateRegistryRequest">UpdateRegistryRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateregistryrequest"></a>
<a id="schema_UpdateRegistryRequest"></a>
<a id="tocSupdateregistryrequest"></a>
<a id="tocsupdateregistryrequest"></a>

```json
{
  "Description": {}
}
```

Updates the registry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|

<h2 id="tocS___stringMin0Max36">__stringMin0Max36</h2>
<!-- backwards compatibility -->
<a id="schema__stringmin0max36"></a>
<a id="schema___stringMin0Max36"></a>
<a id="tocS__stringmin0max36"></a>
<a id="tocs__stringmin0max36"></a>

```json
"string"
```

<h2 id="tocS_UpdateSchemaRequest">UpdateSchemaRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateschemarequest"></a>
<a id="schema_UpdateSchemaRequest"></a>
<a id="tocSupdateschemarequest"></a>
<a id="tocsupdateschemarequest"></a>

```json
{
  "ClientTokenId": {},
  "Content": {},
  "Description": {},
  "Type": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientTokenId|object|false|none|none|
|Content|object|false|none|none|
|Description|object|false|none|none|
|Type|object|false|none|none|
