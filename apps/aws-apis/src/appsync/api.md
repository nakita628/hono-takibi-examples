<h1 id="aws-appsync">AWS AppSync v2017-07-25</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

AppSync provides API actions for creating and interacting with data sources using GraphQL from your application.

Base URLs:

* <a href="http://appsync.us-east-1.amazonaws.com">http://appsync.us-east-1.amazonaws.com</a> - The AWSAppSync multi-region endpoint

* <a href="https://appsync.us-east-1.amazonaws.com">https://appsync.us-east-1.amazonaws.com</a> - The AWSAppSync multi-region endpoint

* <a href="http://appsync.cn-north-1.amazonaws.com.cn">http://appsync.cn-north-1.amazonaws.com.cn</a> - The AWSAppSync endpoint for China (Beijing) and China (Ningxia)

* <a href="https://appsync.cn-north-1.amazonaws.com.cn">https://appsync.cn-north-1.amazonaws.com.cn</a> - The AWSAppSync endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/appsync/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-appsync-default">Default</h1>

## GetApiAssociation

<a id="opIdGetApiAssociation"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/domainnames/string/apiassociation \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/domainnames/{domainName}/apiassociation`

Retrieves an <code>ApiAssociation</code> object.

<h3 id="getapiassociation-parameters">Parameters</h3>

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
  "apiAssociation": {
    "domainName": {},
    "apiId": {},
    "associationStatus": {},
    "deploymentDetail": {}
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

<h3 id="getapiassociation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetApiAssociationResponse](#schemagetapiassociationresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateApi

<a id="opIdAssociateApi"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/domainnames/string/apiassociation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "apiId": "string"
  }'
```

`POST /v1/domainnames/{domainName}/apiassociation`

Maps an endpoint to your custom domain.

> Body parameter

```json
{
  "apiId": "string"
}
```

<h3 id="associateapi-parameters">Parameters</h3>

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
|» apiId|body|string|true|The API ID. Private APIs can not be associated with custom domains.|

> Example responses

> 200 Response

```json
{
  "apiAssociation": {
    "domainName": {},
    "apiId": {},
    "associationStatus": {},
    "deploymentDetail": {}
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

<h3 id="associateapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateApiResponse](#schemaassociateapiresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateApi

<a id="opIdDisassociateApi"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/domainnames/string/apiassociation \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/domainnames/{domainName}/apiassociation`

Removes an <code>ApiAssociation</code> object from a custom domain.

<h3 id="disassociateapi-parameters">Parameters</h3>

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

> 484 Response

```json
null
```

<h3 id="disassociateapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateApiResponse](#schemadisassociateapiresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateMergedGraphqlApi

<a id="opIdAssociateMergedGraphqlApi"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/sourceApis/string/mergedApiAssociations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "mergedApiIdentifier": "string",
    "description": "string",
    "sourceApiAssociationConfig": {
      "mergeType": {}
    }
  }'
```

`POST /v1/sourceApis/{sourceApiIdentifier}/mergedApiAssociations`

Creates an association between a Merged API and source API using the source API's identifier.

> Body parameter

```json
{
  "mergedApiIdentifier": "string",
  "description": "string",
  "sourceApiAssociationConfig": {
    "mergeType": {}
  }
}
```

<h3 id="associatemergedgraphqlapi-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sourceApiIdentifier|path|string|true|The identifier of the AppSync Source API. This is generated by the AppSync service. In most cases, source APIs (especially in your account) only require the API ID value or ARN of the source API. However, source APIs from other accounts (cross-account use cases) strictly require the full resource ARN of the source API.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» mergedApiIdentifier|body|string|true|The identifier of the AppSync Merged API. This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full resource ARN of the merged API.|
|» description|body|string|false|The description field.|
|» sourceApiAssociationConfig|body|object|false|Describes properties used to specify configurations related to a source API.|
|» » mergeType|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "sourceApiAssociation": {
    "associationId": {},
    "associationArn": {},
    "sourceApiId": {},
    "sourceApiArn": {},
    "mergedApiArn": {},
    "mergedApiId": {},
    "description": {},
    "sourceApiAssociationConfig": {
      "mergeType": {}
    },
    "sourceApiAssociationStatus": {},
    "sourceApiAssociationStatusDetail": {},
    "lastSuccessfulMergeDate": {}
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

<h3 id="associatemergedgraphqlapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateMergedGraphqlApiResponse](#schemaassociatemergedgraphqlapiresponse)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateSourceGraphqlApi

<a id="opIdAssociateSourceGraphqlApi"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/mergedApis/string/sourceApiAssociations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "sourceApiIdentifier": "string",
    "description": "string",
    "sourceApiAssociationConfig": {
      "mergeType": {}
    }
  }'
```

`POST /v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations`

Creates an association between a Merged API and source API using the Merged API's identifier.

> Body parameter

```json
{
  "sourceApiIdentifier": "string",
  "description": "string",
  "sourceApiAssociationConfig": {
    "mergeType": {}
  }
}
```

<h3 id="associatesourcegraphqlapi-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mergedApiIdentifier|path|string|true|The identifier of the AppSync Merged API. This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full resource ARN of the merged API.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» sourceApiIdentifier|body|string|true|The identifier of the AppSync Source API. This is generated by the AppSync service. In most cases, source APIs (especially in your account) only require the API ID value or ARN of the source API. However, source APIs from other accounts (cross-account use cases) strictly require the full resource ARN of the source API.|
|» description|body|string|false|The description field.|
|» sourceApiAssociationConfig|body|object|false|Describes properties used to specify configurations related to a source API.|
|» » mergeType|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "sourceApiAssociation": {
    "associationId": {},
    "associationArn": {},
    "sourceApiId": {},
    "sourceApiArn": {},
    "mergedApiArn": {},
    "mergedApiId": {},
    "description": {},
    "sourceApiAssociationConfig": {
      "mergeType": {}
    },
    "sourceApiAssociationStatus": {},
    "sourceApiAssociationStatusDetail": {},
    "lastSuccessfulMergeDate": {}
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

<h3 id="associatesourcegraphqlapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateSourceGraphqlApiResponse](#schemaassociatesourcegraphqlapiresponse)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetApiCache

<a id="opIdGetApiCache"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/apis/string/ApiCaches \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/apis/{apiId}/ApiCaches`

Retrieves an <code>ApiCache</code> object.

<h3 id="getapicache-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API ID.|
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
  "apiCache": {
    "ttl": {},
    "apiCachingBehavior": {},
    "transitEncryptionEnabled": {},
    "atRestEncryptionEnabled": {},
    "type": {},
    "status": {}
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

<h3 id="getapicache-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetApiCacheResponse](#schemagetapicacheresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateApiCache

<a id="opIdCreateApiCache"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/apis/string/ApiCaches \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ttl": 0,
    "transitEncryptionEnabled": true,
    "atRestEncryptionEnabled": true,
    "apiCachingBehavior": "FULL_REQUEST_CACHING",
    "type": "T2_SMALL"
  }'
```

`POST /v1/apis/{apiId}/ApiCaches`

Creates a cache for the GraphQL API.

> Body parameter

```json
{
  "ttl": 0,
  "transitEncryptionEnabled": true,
  "atRestEncryptionEnabled": true,
  "apiCachingBehavior": "FULL_REQUEST_CACHING",
  "type": "T2_SMALL"
}
```

<h3 id="createapicache-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The GraphQL API ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ttl|body|integer|true|<p>TTL in seconds for cache entries.</p> <p>Valid values are 1–3,600 seconds.</p>|
|» transitEncryptionEnabled|body|boolean|false|Transit encryption flag when connecting to cache. You cannot update this setting after creation.|
|» atRestEncryptionEnabled|body|boolean|false|At-rest encryption flag for cache. You cannot update this setting after creation.|
|» apiCachingBehavior|body|string|true|<p>Caching behavior.</p> <ul> <li> <p> <b>FULL_REQUEST_CACHING</b>: All requests are fully cached.</p> </li> <li> <p> <b>PER_RESOLVER_CACHING</b>: Individual resolvers that you specify are cached.</p> </li> </ul>|
|» type|body|string|true|<p>The cache instance type. Valid values are </p> <ul> <li> <p> <code>SMALL</code> </p> </li> <li> <p> <code>MEDIUM</code> </p> </li> <li> <p> <code>LARGE</code> </p> </li> <li> <p> <code>XLARGE</code> </p> </li> <li> <p> <code>LARGE_2X</code> </p> </li> <li> <p> <code>LARGE_4X</code> </p> </li> <li> <p> <code>LARGE_8X</code> (not available in all regions)</p> </li> <li> <p> <code>LARGE_12X</code> </p> </li> </ul> <p>Historically, instance types were identified by an EC2-style value. As of July 2020, this is deprecated, and the generic identifiers above should be used.</p> <p>The following legacy instance types are available, but their use is discouraged:</p> <ul> <li> <p> <b>T2_SMALL</b>: A t2.small instance type.</p> </li> <li> <p> <b>T2_MEDIUM</b>: A t2.medium instance type.</p> </li> <li> <p> <b>R4_LARGE</b>: A r4.large instance type.</p> </li> <li> <p> <b>R4_XLARGE</b>: A r4.xlarge instance type.</p> </li> <li> <p> <b>R4_2XLARGE</b>: A r4.2xlarge instance type.</p> </li> <li> <p> <b>R4_4XLARGE</b>: A r4.4xlarge instance type.</p> </li> <li> <p> <b>R4_8XLARGE</b>: A r4.8xlarge instance type.</p> </li> </ul>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» apiCachingBehavior|FULL_REQUEST_CACHING|
|» apiCachingBehavior|PER_RESOLVER_CACHING|
|» type|T2_SMALL|
|» type|T2_MEDIUM|
|» type|R4_LARGE|
|» type|R4_XLARGE|
|» type|R4_2XLARGE|
|» type|R4_4XLARGE|
|» type|R4_8XLARGE|
|» type|SMALL|
|» type|MEDIUM|
|» type|LARGE|
|» type|XLARGE|
|» type|LARGE_2X|
|» type|LARGE_4X|
|» type|LARGE_8X|
|» type|LARGE_12X|

> Example responses

> 200 Response

```json
{
  "apiCache": {
    "ttl": {},
    "apiCachingBehavior": {},
    "transitEncryptionEnabled": {},
    "atRestEncryptionEnabled": {},
    "type": {},
    "status": {}
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

<h3 id="createapicache-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateApiCacheResponse](#schemacreateapicacheresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteApiCache

<a id="opIdDeleteApiCache"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/apis/string/ApiCaches \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/apis/{apiId}/ApiCaches`

Deletes an <code>ApiCache</code> object.

<h3 id="deleteapicache-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API ID.|
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

> 484 Response

```json
null
```

<h3 id="deleteapicache-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteApiCacheResponse](#schemadeleteapicacheresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListApiKeys

<a id="opIdListApiKeys"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/apis/string/apikeys \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/apis/{apiId}/apikeys`

<p>Lists the API keys for a given API.</p> <note> <p>API keys are deleted automatically 60 days after they expire. However, they may still be included in the response until they have actually been deleted. You can safely call <code>DeleteApiKey</code> to manually delete a key before it's automatically deleted.</p> </note>

<h3 id="listapikeys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API ID.|
|nextToken|query|string|false|An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.|
|maxResults|query|integer|false|The maximum number of results that you want the request to return.|
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
  "apiKeys": {},
  "nextToken": {}
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

<h3 id="listapikeys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListApiKeysResponse](#schemalistapikeysresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateApiKey

<a id="opIdCreateApiKey"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/apis/string/apikeys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "expires": 0
  }'
```

`POST /v1/apis/{apiId}/apikeys`

Creates a unique key that you can distribute to clients who invoke your API.

> Body parameter

```json
{
  "description": "string",
  "expires": 0
}
```

<h3 id="createapikey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The ID for your GraphQL API.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» description|body|string|false|A description of the purpose of the API key.|
|» expires|body|integer|false|From the creation time, the time after which the API key expires. The date is represented as seconds since the epoch, rounded down to the nearest hour. The default value for this parameter is 7 days from creation time. For more information, see .|

> Example responses

> 200 Response

```json
{
  "apiKey": {
    "id": {},
    "description": {},
    "expires": {},
    "deletes": {}
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

> 487 Response

```json
null
```

<h3 id="createapikey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateApiKeyResponse](#schemacreateapikeyresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|486|486|ApiKeyLimitExceededException|[ApiKeyLimitExceededException](#schemaapikeylimitexceededexception)|
|487|487|ApiKeyValidityOutOfBoundsException|[ApiKeyValidityOutOfBoundsException](#schemaapikeyvalidityoutofboundsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDataSources

<a id="opIdListDataSources"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/apis/string/datasources \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/apis/{apiId}/datasources`

Lists the data sources for a given API.

<h3 id="listdatasources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API ID.|
|nextToken|query|string|false|An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.|
|maxResults|query|integer|false|The maximum number of results that you want the request to return.|
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
  "dataSources": {},
  "nextToken": {}
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

<h3 id="listdatasources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDataSourcesResponse](#schemalistdatasourcesresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDataSource

<a id="opIdCreateDataSource"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/apis/string/datasources \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "description": "string",
    "type": "AWS_LAMBDA",
    "serviceRoleArn": "string",
    "dynamodbConfig": {
      "tableName": {},
      "awsRegion": {},
      "useCallerCredentials": {},
      "deltaSyncConfig": {
        "baseTableTTL": {},
        "deltaSyncTableName": {},
        "deltaSyncTableTTL": {}
      },
      "versioned": {}
    },
    "lambdaConfig": {
      "lambdaFunctionArn": {}
    },
    "elasticsearchConfig": {
      "endpoint": {},
      "awsRegion": {}
    },
    "openSearchServiceConfig": {
      "endpoint": {},
      "awsRegion": {}
    },
    "httpConfig": {
      "endpoint": {},
      "authorizationConfig": {
        "authorizationType": {},
        "awsIamConfig": {
          "signingRegion": {},
          "signingServiceName": {}
        }
      }
    },
    "relationalDatabaseConfig": {
      "relationalDatabaseSourceType": {},
      "rdsHttpEndpointConfig": {
        "awsRegion": {},
        "dbClusterIdentifier": {},
        "databaseName": {},
        "schema": {},
        "awsSecretStoreArn": {}
      }
    },
    "eventBridgeConfig": {
      "eventBusArn": {}
    }
  }'
```

`POST /v1/apis/{apiId}/datasources`

Creates a <code>DataSource</code> object.

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "type": "AWS_LAMBDA",
  "serviceRoleArn": "string",
  "dynamodbConfig": {
    "tableName": {},
    "awsRegion": {},
    "useCallerCredentials": {},
    "deltaSyncConfig": {
      "baseTableTTL": {},
      "deltaSyncTableName": {},
      "deltaSyncTableTTL": {}
    },
    "versioned": {}
  },
  "lambdaConfig": {
    "lambdaFunctionArn": {}
  },
  "elasticsearchConfig": {
    "endpoint": {},
    "awsRegion": {}
  },
  "openSearchServiceConfig": {
    "endpoint": {},
    "awsRegion": {}
  },
  "httpConfig": {
    "endpoint": {},
    "authorizationConfig": {
      "authorizationType": {},
      "awsIamConfig": {
        "signingRegion": {},
        "signingServiceName": {}
      }
    }
  },
  "relationalDatabaseConfig": {
    "relationalDatabaseSourceType": {},
    "rdsHttpEndpointConfig": {
      "awsRegion": {},
      "dbClusterIdentifier": {},
      "databaseName": {},
      "schema": {},
      "awsSecretStoreArn": {}
    }
  },
  "eventBridgeConfig": {
    "eventBusArn": {}
  }
}
```

<h3 id="createdatasource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API ID for the GraphQL API for the <code>DataSource</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» name|body|string|true|A user-supplied name for the <code>DataSource</code>.|
|» description|body|string|false|A description of the <code>DataSource</code>.|
|» type|body|string|true|The type of the <code>DataSource</code>.|
|» serviceRoleArn|body|string|false|The Identity and Access Management (IAM) service role Amazon Resource Name (ARN) for the data source. The system assumes this role when accessing the data source.|
|» dynamodbConfig|body|object|false|Describes an Amazon DynamoDB data source configuration.|
|» » tableName|body|object|false|none|
|» » awsRegion|body|object|false|none|
|» » useCallerCredentials|body|object|false|none|
|» » deltaSyncConfig|body|object|false|none|
|» » » baseTableTTL|body|object|false|none|
|» » » deltaSyncTableName|body|object|false|none|
|» » » deltaSyncTableTTL|body|object|false|none|
|» » versioned|body|object|false|none|
|» lambdaConfig|body|object|false|Describes an Lambda data source configuration.|
|» » lambdaFunctionArn|body|object|false|none|
|» elasticsearchConfig|body|object|false|<p>Describes an OpenSearch data source configuration.</p> <p>As of September 2021, Amazon Elasticsearch service is Amazon OpenSearch Service. This configuration is deprecated. For new data sources, use <a>OpenSearchServiceDataSourceConfig</a> to specify an OpenSearch data source.</p>|
|» » endpoint|body|object|false|none|
|» » awsRegion|body|object|false|none|
|» openSearchServiceConfig|body|object|false|Describes an OpenSearch data source configuration.|
|» » endpoint|body|object|false|none|
|» » awsRegion|body|object|false|none|
|» httpConfig|body|object|false|Describes an HTTP data source configuration.|
|» » endpoint|body|object|false|none|
|» » authorizationConfig|body|object|false|none|
|» » » authorizationType|body|object|true|none|
|» » » awsIamConfig|body|object|false|none|
|» » » » signingRegion|body|object|false|none|
|» » » » signingServiceName|body|object|false|none|
|» relationalDatabaseConfig|body|object|false|Describes a relational database data source configuration.|
|» » relationalDatabaseSourceType|body|object|false|none|
|» » rdsHttpEndpointConfig|body|object|false|none|
|» » » awsRegion|body|object|false|none|
|» » » dbClusterIdentifier|body|object|false|none|
|» » » databaseName|body|object|false|none|
|» » » schema|body|object|false|none|
|» » » awsSecretStoreArn|body|object|false|none|
|» eventBridgeConfig|body|object|false|Describes an Amazon EventBridge bus data source configuration.|
|» » eventBusArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|AWS_LAMBDA|
|» type|AMAZON_DYNAMODB|
|» type|AMAZON_ELASTICSEARCH|
|» type|NONE|
|» type|HTTP|
|» type|RELATIONAL_DATABASE|
|» type|AMAZON_OPENSEARCH_SERVICE|
|» type|AMAZON_EVENTBRIDGE|

> Example responses

> 200 Response

```json
{
  "dataSource": {
    "dataSourceArn": {},
    "name": {},
    "description": {},
    "type": {},
    "serviceRoleArn": {},
    "dynamodbConfig": {
      "tableName": {},
      "awsRegion": {},
      "useCallerCredentials": {},
      "deltaSyncConfig": {
        "baseTableTTL": {},
        "deltaSyncTableName": {},
        "deltaSyncTableTTL": {}
      },
      "versioned": {}
    },
    "lambdaConfig": {
      "lambdaFunctionArn": {}
    },
    "elasticsearchConfig": {
      "endpoint": {},
      "awsRegion": {}
    },
    "openSearchServiceConfig": {
      "endpoint": {},
      "awsRegion": {}
    },
    "httpConfig": {
      "endpoint": {},
      "authorizationConfig": {
        "authorizationType": {},
        "awsIamConfig": {
          "signingRegion": {},
          "signingServiceName": {}
        }
      }
    },
    "relationalDatabaseConfig": {
      "relationalDatabaseSourceType": {},
      "rdsHttpEndpointConfig": {
        "awsRegion": {},
        "dbClusterIdentifier": {},
        "databaseName": {},
        "schema": {},
        "awsSecretStoreArn": {}
      }
    },
    "eventBridgeConfig": {
      "eventBusArn": {}
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

<h3 id="createdatasource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDataSourceResponse](#schemacreatedatasourceresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDomainNames

<a id="opIdListDomainNames"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/domainnames \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/domainnames`

Lists multiple custom domain names.

<h3 id="listdomainnames-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.|
|maxResults|query|integer|false|The maximum number of results that you want the request to return.|
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
  "domainNameConfigs": {},
  "nextToken": {}
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

<h3 id="listdomainnames-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDomainNamesResponse](#schemalistdomainnamesresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDomainName

<a id="opIdCreateDomainName"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/domainnames \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "domainName": "string",
    "certificateArn": "stringstringstringst",
    "description": "string"
  }'
```

`POST /v1/domainnames`

Creates a custom <code>DomainName</code> object.

> Body parameter

```json
{
  "domainName": "string",
  "certificateArn": "stringstringstringst",
  "description": "string"
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
|» domainName|body|string|true|The domain name.|
|» certificateArn|body|string|true|The Amazon Resource Name (ARN) of the certificate. This can be an Certificate Manager (ACM) certificate or an Identity and Access Management (IAM) server certificate.|
|» description|body|string|false|A description of the <code>DomainName</code>.|

> Example responses

> 200 Response

```json
{
  "domainNameConfig": {
    "domainName": {},
    "description": {},
    "certificateArn": {},
    "appsyncDomainName": {},
    "hostedZoneId": {}
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

<h3 id="createdomainname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDomainNameResponse](#schemacreatedomainnameresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFunctions

<a id="opIdListFunctions"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/apis/string/functions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/apis/{apiId}/functions`

List multiple functions.

<h3 id="listfunctions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The GraphQL API ID.|
|nextToken|query|string|false|An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.|
|maxResults|query|integer|false|The maximum number of results that you want the request to return.|
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
  "functions": {},
  "nextToken": {}
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

<h3 id="listfunctions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFunctionsResponse](#schemalistfunctionsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateFunction

<a id="opIdCreateFunction"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/apis/string/functions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "description": "string",
    "dataSourceName": "string",
    "requestMappingTemplate": "string",
    "responseMappingTemplate": "string",
    "functionVersion": "string",
    "syncConfig": {
      "conflictHandler": {},
      "conflictDetection": {},
      "lambdaConflictHandlerConfig": {
        "lambdaConflictHandlerArn": {}
      }
    },
    "maxBatchSize": 0,
    "runtime": {
      "name": {},
      "runtimeVersion": {}
    },
    "code": "string"
  }'
```

`POST /v1/apis/{apiId}/functions`

<p>Creates a <code>Function</code> object.</p> <p>A function is a reusable entity. You can use multiple functions to compose the resolver logic.</p>

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "dataSourceName": "string",
  "requestMappingTemplate": "string",
  "responseMappingTemplate": "string",
  "functionVersion": "string",
  "syncConfig": {
    "conflictHandler": {},
    "conflictDetection": {},
    "lambdaConflictHandlerConfig": {
      "lambdaConflictHandlerArn": {}
    }
  },
  "maxBatchSize": 0,
  "runtime": {
    "name": {},
    "runtimeVersion": {}
  },
  "code": "string"
}
```

<h3 id="createfunction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The GraphQL API ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» name|body|string|true|The <code>Function</code> name. The function name does not have to be unique.|
|» description|body|string|false|The <code>Function</code> description.|
|» dataSourceName|body|string|true|The <code>Function</code> <code>DataSource</code> name.|
|» requestMappingTemplate|body|string|false|The <code>Function</code> request mapping template. Functions support only the 2018-05-29 version of the request mapping template.|
|» responseMappingTemplate|body|string|false|The <code>Function</code> response mapping template.|
|» functionVersion|body|string|false|The <code>version</code> of the request mapping template. Currently, the supported value is 2018-05-29. Note that when using VTL and mapping templates, the <code>functionVersion</code> is required.|
|» syncConfig|body|object|false|<p>Describes a Sync configuration for a resolver.</p> <p>Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.</p>|
|» » conflictHandler|body|object|false|none|
|» » conflictDetection|body|object|false|none|
|» » lambdaConflictHandlerConfig|body|object|false|none|
|» » » lambdaConflictHandlerArn|body|object|false|none|
|» maxBatchSize|body|integer|false|The maximum batching size for a resolver.|
|» runtime|body|object|false|Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.|
|» » name|body|object|false|none|
|» » runtimeVersion|body|object|false|none|
|» code|body|string|false|The <code>function</code> code that contains the request and response functions. When code is used, the <code>runtime</code> is required. The <code>runtime</code> value must be <code>APPSYNC_JS</code>.|

> Example responses

> 200 Response

```json
{
  "functionConfiguration": {
    "functionId": {},
    "functionArn": {},
    "name": {},
    "description": {},
    "dataSourceName": {},
    "requestMappingTemplate": {},
    "responseMappingTemplate": {},
    "functionVersion": {},
    "syncConfig": {
      "conflictHandler": {},
      "conflictDetection": {},
      "lambdaConflictHandlerConfig": {
        "lambdaConflictHandlerArn": {}
      }
    },
    "maxBatchSize": {},
    "runtime": {
      "name": {},
      "runtimeVersion": {}
    },
    "code": {}
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

<h3 id="createfunction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateFunctionResponse](#schemacreatefunctionresponse)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListGraphqlApis

<a id="opIdListGraphqlApis"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/apis \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/apis`

Lists your GraphQL APIs.

<h3 id="listgraphqlapis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.|
|maxResults|query|integer|false|The maximum number of results that you want the request to return.|
|apiType|query|string|false|The value that indicates whether the GraphQL API is a standard API (<code>GRAPHQL</code>) or merged API (<code>MERGED</code>).|
|owner|query|string|false|The account owner of the GraphQL API.|
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
|apiType|GRAPHQL|
|apiType|MERGED|
|owner|CURRENT_ACCOUNT|
|owner|OTHER_ACCOUNTS|

> Example responses

> 200 Response

```json
{
  "graphqlApis": {},
  "nextToken": {}
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

<h3 id="listgraphqlapis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListGraphqlApisResponse](#schemalistgraphqlapisresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateGraphqlApi

<a id="opIdCreateGraphqlApi"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/apis \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "logConfig": {
      "fieldLogLevel": {},
      "cloudWatchLogsRoleArn": {},
      "excludeVerboseContent": {}
    },
    "authenticationType": "API_KEY",
    "userPoolConfig": {
      "userPoolId": {},
      "awsRegion": {},
      "defaultAction": {},
      "appIdClientRegex": {}
    },
    "openIDConnectConfig": {
      "issuer": {},
      "clientId": {},
      "iatTTL": {},
      "authTTL": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "additionalAuthenticationProviders": [
      {
        "authenticationType": {},
        "openIDConnectConfig": {
          "issuer": {},
          "clientId": {},
          "iatTTL": {},
          "authTTL": {}
        },
        "userPoolConfig": {
          "userPoolId": {},
          "awsRegion": {},
          "appIdClientRegex": {}
        },
        "lambdaAuthorizerConfig": {
          "authorizerResultTtlInSeconds": {},
          "authorizerUri": {},
          "identityValidationExpression": {}
        }
      }
    ],
    "xrayEnabled": true,
    "lambdaAuthorizerConfig": {
      "authorizerResultTtlInSeconds": {},
      "authorizerUri": {},
      "identityValidationExpression": {}
    },
    "visibility": "GLOBAL",
    "apiType": "GRAPHQL",
    "mergedApiExecutionRoleArn": "string",
    "ownerContact": "string"
  }'
```

`POST /v1/apis`

Creates a <code>GraphqlApi</code> object.

> Body parameter

```json
{
  "name": "string",
  "logConfig": {
    "fieldLogLevel": {},
    "cloudWatchLogsRoleArn": {},
    "excludeVerboseContent": {}
  },
  "authenticationType": "API_KEY",
  "userPoolConfig": {
    "userPoolId": {},
    "awsRegion": {},
    "defaultAction": {},
    "appIdClientRegex": {}
  },
  "openIDConnectConfig": {
    "issuer": {},
    "clientId": {},
    "iatTTL": {},
    "authTTL": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "additionalAuthenticationProviders": [
    {
      "authenticationType": {},
      "openIDConnectConfig": {
        "issuer": {},
        "clientId": {},
        "iatTTL": {},
        "authTTL": {}
      },
      "userPoolConfig": {
        "userPoolId": {},
        "awsRegion": {},
        "appIdClientRegex": {}
      },
      "lambdaAuthorizerConfig": {
        "authorizerResultTtlInSeconds": {},
        "authorizerUri": {},
        "identityValidationExpression": {}
      }
    }
  ],
  "xrayEnabled": true,
  "lambdaAuthorizerConfig": {
    "authorizerResultTtlInSeconds": {},
    "authorizerUri": {},
    "identityValidationExpression": {}
  },
  "visibility": "GLOBAL",
  "apiType": "GRAPHQL",
  "mergedApiExecutionRoleArn": "string",
  "ownerContact": "string"
}
```

<h3 id="creategraphqlapi-parameters">Parameters</h3>

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
|» name|body|string|true|A user-supplied name for the <code>GraphqlApi</code>.|
|» logConfig|body|object|false|The Amazon CloudWatch Logs configuration.|
|» » fieldLogLevel|body|object|false|none|
|» » cloudWatchLogsRoleArn|body|object|false|none|
|» » excludeVerboseContent|body|object|false|none|
|» authenticationType|body|string|true|The authentication type: API key, Identity and Access Management (IAM), OpenID Connect (OIDC), Amazon Cognito user pools, or Lambda.|
|» userPoolConfig|body|object|false|Describes an Amazon Cognito user pool configuration.|
|» » userPoolId|body|object|false|none|
|» » awsRegion|body|object|false|none|
|» » defaultAction|body|object|false|none|
|» » appIdClientRegex|body|object|false|none|
|» openIDConnectConfig|body|object|false|Describes an OpenID Connect (OIDC) configuration.|
|» » issuer|body|object|false|none|
|» » clientId|body|object|false|none|
|» » iatTTL|body|object|false|none|
|» » authTTL|body|object|false|none|
|» tags|body|object|false|A map with keys of <code>TagKey</code> objects and values of <code>TagValue</code> objects.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|The value for the tag.|
|» additionalAuthenticationProviders|body|[[AdditionalAuthenticationProvider](#schemaadditionalauthenticationprovider)]|false|A list of additional authentication providers for the <code>GraphqlApi</code> API.|
|» xrayEnabled|body|boolean|false|A flag indicating whether to use X-Ray tracing for the <code>GraphqlApi</code>.|
|» lambdaAuthorizerConfig|body|object|false|A <code>LambdaAuthorizerConfig</code> specifies how to authorize AppSync API access when using the <code>AWS_LAMBDA</code> authorizer mode. Be aware that an AppSync API can have only one Lambda authorizer configured at a time.|
|» » authorizerResultTtlInSeconds|body|object|false|none|
|» » authorizerUri|body|object|false|none|
|» » identityValidationExpression|body|object|false|none|
|» visibility|body|string|false|Sets the value of the GraphQL API to public (<code>GLOBAL</code>) or private (<code>PRIVATE</code>). If no value is provided, the visibility will be set to <code>GLOBAL</code> by default. This value cannot be changed once the API has been created.|
|» apiType|body|string|false|The value that indicates whether the GraphQL API is a standard API (<code>GRAPHQL</code>) or merged API (<code>MERGED</code>).|
|» mergedApiExecutionRoleArn|body|string|false|The Identity and Access Management service role ARN for a merged API. The AppSync service assumes this role on behalf of the Merged API to validate access to source APIs at runtime and to prompt the <code>AUTO_MERGE</code> to update the merged API endpoint with the source API changes automatically.|
|» ownerContact|body|string|false|<p>The owner contact information for an API resource.</p> <p>This field accepts any string input with a length of 0 - 256 characters.</p>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» authenticationType|API_KEY|
|» authenticationType|AWS_IAM|
|» authenticationType|AMAZON_COGNITO_USER_POOLS|
|» authenticationType|OPENID_CONNECT|
|» authenticationType|AWS_LAMBDA|
|» visibility|GLOBAL|
|» visibility|PRIVATE|
|» apiType|GRAPHQL|
|» apiType|MERGED|

> Example responses

> 200 Response

```json
{
  "graphqlApi": {
    "name": {},
    "apiId": {},
    "authenticationType": {},
    "logConfig": {
      "fieldLogLevel": {},
      "cloudWatchLogsRoleArn": {},
      "excludeVerboseContent": {}
    },
    "userPoolConfig": {
      "userPoolId": {},
      "awsRegion": {},
      "defaultAction": {},
      "appIdClientRegex": {}
    },
    "openIDConnectConfig": {
      "issuer": {},
      "clientId": {},
      "iatTTL": {},
      "authTTL": {}
    },
    "arn": {},
    "uris": {
      "property1": "string",
      "property2": "string"
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "additionalAuthenticationProviders": {},
    "xrayEnabled": {},
    "wafWebAclArn": {},
    "lambdaAuthorizerConfig": {
      "authorizerResultTtlInSeconds": {},
      "authorizerUri": {},
      "identityValidationExpression": {}
    },
    "dns": {
      "property1": "string",
      "property2": "string"
    },
    "visibility": {},
    "apiType": {},
    "mergedApiExecutionRoleArn": {},
    "owner": {},
    "ownerContact": {}
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

<h3 id="creategraphqlapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateGraphqlApiResponse](#schemacreategraphqlapiresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|485|485|ApiLimitExceededException|[ApiLimitExceededException](#schemaapilimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListResolvers

<a id="opIdListResolvers"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/apis/string/types/string/resolvers \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/apis/{apiId}/types/{typeName}/resolvers`

Lists the resolvers for a given API and type.

<h3 id="listresolvers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API ID.|
|typeName|path|string|true|The type name.|
|nextToken|query|string|false|An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.|
|maxResults|query|integer|false|The maximum number of results that you want the request to return.|
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
  "resolvers": {},
  "nextToken": {}
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

<h3 id="listresolvers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListResolversResponse](#schemalistresolversresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateResolver

<a id="opIdCreateResolver"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/apis/string/types/string/resolvers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "fieldName": "string",
    "dataSourceName": "string",
    "requestMappingTemplate": "string",
    "responseMappingTemplate": "string",
    "kind": "UNIT",
    "pipelineConfig": {
      "functions": {}
    },
    "syncConfig": {
      "conflictHandler": {},
      "conflictDetection": {},
      "lambdaConflictHandlerConfig": {
        "lambdaConflictHandlerArn": {}
      }
    },
    "cachingConfig": {
      "ttl": {},
      "cachingKeys": {}
    },
    "maxBatchSize": 0,
    "runtime": {
      "name": {},
      "runtimeVersion": {}
    },
    "code": "string"
  }'
```

`POST /v1/apis/{apiId}/types/{typeName}/resolvers`

<p>Creates a <code>Resolver</code> object.</p> <p>A resolver converts incoming requests into a format that a data source can understand, and converts the data source's responses into GraphQL.</p>

> Body parameter

```json
{
  "fieldName": "string",
  "dataSourceName": "string",
  "requestMappingTemplate": "string",
  "responseMappingTemplate": "string",
  "kind": "UNIT",
  "pipelineConfig": {
    "functions": {}
  },
  "syncConfig": {
    "conflictHandler": {},
    "conflictDetection": {},
    "lambdaConflictHandlerConfig": {
      "lambdaConflictHandlerArn": {}
    }
  },
  "cachingConfig": {
    "ttl": {},
    "cachingKeys": {}
  },
  "maxBatchSize": 0,
  "runtime": {
    "name": {},
    "runtimeVersion": {}
  },
  "code": "string"
}
```

<h3 id="createresolver-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The ID for the GraphQL API for which the resolver is being created.|
|typeName|path|string|true|The name of the <code>Type</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» fieldName|body|string|true|The name of the field to attach the resolver to.|
|» dataSourceName|body|string|false|The name of the data source for which the resolver is being created.|
|» requestMappingTemplate|body|string|false|<p>The mapping template to use for requests.</p> <p>A resolver uses a request mapping template to convert a GraphQL expression into a format that a data source can understand. Mapping templates are written in Apache Velocity Template Language (VTL).</p> <p>VTL request mapping templates are optional when using an Lambda data source. For all other data sources, VTL request and response mapping templates are required.</p>|
|» responseMappingTemplate|body|string|false|The mapping template to use for responses from the data source.|
|» kind|body|string|false|<p>The resolver type.</p> <ul> <li> <p> <b>UNIT</b>: A UNIT resolver type. A UNIT resolver is the default resolver type. You can use a UNIT resolver to run a GraphQL query against a single data source.</p> </li> <li> <p> <b>PIPELINE</b>: A PIPELINE resolver type. You can use a PIPELINE resolver to invoke a series of <code>Function</code> objects in a serial manner. You can use a pipeline resolver to run a GraphQL query against multiple data sources.</p> </li> </ul>|
|» pipelineConfig|body|object|false|The pipeline configuration for a resolver of kind <code>PIPELINE</code>.|
|» » functions|body|object|false|none|
|» syncConfig|body|object|false|<p>Describes a Sync configuration for a resolver.</p> <p>Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.</p>|
|» » conflictHandler|body|object|false|none|
|» » conflictDetection|body|object|false|none|
|» » lambdaConflictHandlerConfig|body|object|false|none|
|» » » lambdaConflictHandlerArn|body|object|false|none|
|» cachingConfig|body|object|false|The caching configuration for a resolver that has caching activated.|
|» » ttl|body|object|false|none|
|» » cachingKeys|body|object|false|none|
|» maxBatchSize|body|integer|false|The maximum batching size for a resolver.|
|» runtime|body|object|false|Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.|
|» » name|body|object|false|none|
|» » runtimeVersion|body|object|false|none|
|» code|body|string|false|The <code>resolver</code> code that contains the request and response functions. When code is used, the <code>runtime</code> is required. The <code>runtime</code> value must be <code>APPSYNC_JS</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» kind|UNIT|
|» kind|PIPELINE|

> Example responses

> 200 Response

```json
{
  "resolver": {
    "typeName": {},
    "fieldName": {},
    "dataSourceName": {},
    "resolverArn": {},
    "requestMappingTemplate": {},
    "responseMappingTemplate": {},
    "kind": {},
    "pipelineConfig": {
      "functions": {}
    },
    "syncConfig": {
      "conflictHandler": {},
      "conflictDetection": {},
      "lambdaConflictHandlerConfig": {
        "lambdaConflictHandlerArn": {}
      }
    },
    "cachingConfig": {
      "ttl": {},
      "cachingKeys": {}
    },
    "maxBatchSize": {},
    "runtime": {
      "name": {},
      "runtimeVersion": {}
    },
    "code": {}
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

<h3 id="createresolver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateResolverResponse](#schemacreateresolverresponse)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateType

<a id="opIdCreateType"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/apis/string/types \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "definition": "string",
    "format": "SDL"
  }'
```

`POST /v1/apis/{apiId}/types`

Creates a <code>Type</code> object.

> Body parameter

```json
{
  "definition": "string",
  "format": "SDL"
}
```

<h3 id="createtype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» definition|body|string|true|<p>The type definition, in GraphQL Schema Definition Language (SDL) format.</p> <p>For more information, see the <a href="http://graphql.org/learn/schema/">GraphQL SDL documentation</a>.</p>|
|» format|body|string|true|The type format: SDL or JSON.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» format|SDL|
|» format|JSON|

> Example responses

> 200 Response

```json
{
  "type": {
    "name": {},
    "description": {},
    "arn": {},
    "definition": {},
    "format": {}
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

<h3 id="createtype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateTypeResponse](#schemacreatetyperesponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateApiKey

<a id="opIdUpdateApiKey"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/apis/string/apikeys/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "expires": 0
  }'
```

`POST /v1/apis/{apiId}/apikeys/{id}`

Updates an API key. You can update the key as long as it's not deleted.

> Body parameter

```json
{
  "description": "string",
  "expires": 0
}
```

<h3 id="updateapikey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The ID for the GraphQL API.|
|id|path|string|true|The API key ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» description|body|string|false|A description of the purpose of the API key.|
|» expires|body|integer|false|From the update time, the time after which the API key expires. The date is represented as seconds since the epoch. For more information, see .|

> Example responses

> 200 Response

```json
{
  "apiKey": {
    "id": {},
    "description": {},
    "expires": {},
    "deletes": {}
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
|200|OK|Success|[UpdateApiKeyResponse](#schemaupdateapikeyresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|485|485|ApiKeyValidityOutOfBoundsException|[ApiKeyValidityOutOfBoundsException](#schemaapikeyvalidityoutofboundsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteApiKey

<a id="opIdDeleteApiKey"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/apis/string/apikeys/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/apis/{apiId}/apikeys/{id}`

Deletes an API key.

<h3 id="deleteapikey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API ID.|
|id|path|string|true|The ID for the API key.|
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

<h3 id="deleteapikey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteApiKeyResponse](#schemadeleteapikeyresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDataSource

<a id="opIdGetDataSource"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/apis/string/datasources/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/apis/{apiId}/datasources/{name}`

Retrieves a <code>DataSource</code> object.

<h3 id="getdatasource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API ID.|
|name|path|string|true|The name of the data source.|
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
  "dataSource": {
    "dataSourceArn": {},
    "name": {},
    "description": {},
    "type": {},
    "serviceRoleArn": {},
    "dynamodbConfig": {
      "tableName": {},
      "awsRegion": {},
      "useCallerCredentials": {},
      "deltaSyncConfig": {
        "baseTableTTL": {},
        "deltaSyncTableName": {},
        "deltaSyncTableTTL": {}
      },
      "versioned": {}
    },
    "lambdaConfig": {
      "lambdaFunctionArn": {}
    },
    "elasticsearchConfig": {
      "endpoint": {},
      "awsRegion": {}
    },
    "openSearchServiceConfig": {
      "endpoint": {},
      "awsRegion": {}
    },
    "httpConfig": {
      "endpoint": {},
      "authorizationConfig": {
        "authorizationType": {},
        "awsIamConfig": {
          "signingRegion": {},
          "signingServiceName": {}
        }
      }
    },
    "relationalDatabaseConfig": {
      "relationalDatabaseSourceType": {},
      "rdsHttpEndpointConfig": {
        "awsRegion": {},
        "dbClusterIdentifier": {},
        "databaseName": {},
        "schema": {},
        "awsSecretStoreArn": {}
      }
    },
    "eventBridgeConfig": {
      "eventBusArn": {}
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

<h3 id="getdatasource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDataSourceResponse](#schemagetdatasourceresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDataSource

<a id="opIdUpdateDataSource"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/apis/string/datasources/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "type": "AWS_LAMBDA",
    "serviceRoleArn": "string",
    "dynamodbConfig": {
      "tableName": {},
      "awsRegion": {},
      "useCallerCredentials": {},
      "deltaSyncConfig": {
        "baseTableTTL": {},
        "deltaSyncTableName": {},
        "deltaSyncTableTTL": {}
      },
      "versioned": {}
    },
    "lambdaConfig": {
      "lambdaFunctionArn": {}
    },
    "elasticsearchConfig": {
      "endpoint": {},
      "awsRegion": {}
    },
    "openSearchServiceConfig": {
      "endpoint": {},
      "awsRegion": {}
    },
    "httpConfig": {
      "endpoint": {},
      "authorizationConfig": {
        "authorizationType": {},
        "awsIamConfig": {
          "signingRegion": {},
          "signingServiceName": {}
        }
      }
    },
    "relationalDatabaseConfig": {
      "relationalDatabaseSourceType": {},
      "rdsHttpEndpointConfig": {
        "awsRegion": {},
        "dbClusterIdentifier": {},
        "databaseName": {},
        "schema": {},
        "awsSecretStoreArn": {}
      }
    },
    "eventBridgeConfig": {
      "eventBusArn": {}
    }
  }'
```

`POST /v1/apis/{apiId}/datasources/{name}`

Updates a <code>DataSource</code> object.

> Body parameter

```json
{
  "description": "string",
  "type": "AWS_LAMBDA",
  "serviceRoleArn": "string",
  "dynamodbConfig": {
    "tableName": {},
    "awsRegion": {},
    "useCallerCredentials": {},
    "deltaSyncConfig": {
      "baseTableTTL": {},
      "deltaSyncTableName": {},
      "deltaSyncTableTTL": {}
    },
    "versioned": {}
  },
  "lambdaConfig": {
    "lambdaFunctionArn": {}
  },
  "elasticsearchConfig": {
    "endpoint": {},
    "awsRegion": {}
  },
  "openSearchServiceConfig": {
    "endpoint": {},
    "awsRegion": {}
  },
  "httpConfig": {
    "endpoint": {},
    "authorizationConfig": {
      "authorizationType": {},
      "awsIamConfig": {
        "signingRegion": {},
        "signingServiceName": {}
      }
    }
  },
  "relationalDatabaseConfig": {
    "relationalDatabaseSourceType": {},
    "rdsHttpEndpointConfig": {
      "awsRegion": {},
      "dbClusterIdentifier": {},
      "databaseName": {},
      "schema": {},
      "awsSecretStoreArn": {}
    }
  },
  "eventBridgeConfig": {
    "eventBusArn": {}
  }
}
```

<h3 id="updatedatasource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API ID.|
|name|path|string|true|The new name for the data source.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» description|body|string|false|The new description for the data source.|
|» type|body|string|true|The new data source type.|
|» serviceRoleArn|body|string|false|The new service role Amazon Resource Name (ARN) for the data source.|
|» dynamodbConfig|body|object|false|Describes an Amazon DynamoDB data source configuration.|
|» » tableName|body|object|false|none|
|» » awsRegion|body|object|false|none|
|» » useCallerCredentials|body|object|false|none|
|» » deltaSyncConfig|body|object|false|none|
|» » » baseTableTTL|body|object|false|none|
|» » » deltaSyncTableName|body|object|false|none|
|» » » deltaSyncTableTTL|body|object|false|none|
|» » versioned|body|object|false|none|
|» lambdaConfig|body|object|false|Describes an Lambda data source configuration.|
|» » lambdaFunctionArn|body|object|false|none|
|» elasticsearchConfig|body|object|false|<p>Describes an OpenSearch data source configuration.</p> <p>As of September 2021, Amazon Elasticsearch service is Amazon OpenSearch Service. This configuration is deprecated. For new data sources, use <a>OpenSearchServiceDataSourceConfig</a> to specify an OpenSearch data source.</p>|
|» » endpoint|body|object|false|none|
|» » awsRegion|body|object|false|none|
|» openSearchServiceConfig|body|object|false|Describes an OpenSearch data source configuration.|
|» » endpoint|body|object|false|none|
|» » awsRegion|body|object|false|none|
|» httpConfig|body|object|false|Describes an HTTP data source configuration.|
|» » endpoint|body|object|false|none|
|» » authorizationConfig|body|object|false|none|
|» » » authorizationType|body|object|true|none|
|» » » awsIamConfig|body|object|false|none|
|» » » » signingRegion|body|object|false|none|
|» » » » signingServiceName|body|object|false|none|
|» relationalDatabaseConfig|body|object|false|Describes a relational database data source configuration.|
|» » relationalDatabaseSourceType|body|object|false|none|
|» » rdsHttpEndpointConfig|body|object|false|none|
|» » » awsRegion|body|object|false|none|
|» » » dbClusterIdentifier|body|object|false|none|
|» » » databaseName|body|object|false|none|
|» » » schema|body|object|false|none|
|» » » awsSecretStoreArn|body|object|false|none|
|» eventBridgeConfig|body|object|false|Describes an Amazon EventBridge bus data source configuration.|
|» » eventBusArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|AWS_LAMBDA|
|» type|AMAZON_DYNAMODB|
|» type|AMAZON_ELASTICSEARCH|
|» type|NONE|
|» type|HTTP|
|» type|RELATIONAL_DATABASE|
|» type|AMAZON_OPENSEARCH_SERVICE|
|» type|AMAZON_EVENTBRIDGE|

> Example responses

> 200 Response

```json
{
  "dataSource": {
    "dataSourceArn": {},
    "name": {},
    "description": {},
    "type": {},
    "serviceRoleArn": {},
    "dynamodbConfig": {
      "tableName": {},
      "awsRegion": {},
      "useCallerCredentials": {},
      "deltaSyncConfig": {
        "baseTableTTL": {},
        "deltaSyncTableName": {},
        "deltaSyncTableTTL": {}
      },
      "versioned": {}
    },
    "lambdaConfig": {
      "lambdaFunctionArn": {}
    },
    "elasticsearchConfig": {
      "endpoint": {},
      "awsRegion": {}
    },
    "openSearchServiceConfig": {
      "endpoint": {},
      "awsRegion": {}
    },
    "httpConfig": {
      "endpoint": {},
      "authorizationConfig": {
        "authorizationType": {},
        "awsIamConfig": {
          "signingRegion": {},
          "signingServiceName": {}
        }
      }
    },
    "relationalDatabaseConfig": {
      "relationalDatabaseSourceType": {},
      "rdsHttpEndpointConfig": {
        "awsRegion": {},
        "dbClusterIdentifier": {},
        "databaseName": {},
        "schema": {},
        "awsSecretStoreArn": {}
      }
    },
    "eventBridgeConfig": {
      "eventBusArn": {}
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

<h3 id="updatedatasource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDataSourceResponse](#schemaupdatedatasourceresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDataSource

<a id="opIdDeleteDataSource"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/apis/string/datasources/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/apis/{apiId}/datasources/{name}`

Deletes a <code>DataSource</code> object.

<h3 id="deletedatasource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API ID.|
|name|path|string|true|The name of the data source.|
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

> 484 Response

```json
null
```

<h3 id="deletedatasource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDataSourceResponse](#schemadeletedatasourceresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDomainName

<a id="opIdGetDomainName"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/domainnames/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/domainnames/{domainName}`

Retrieves a custom <code>DomainName</code> object.

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
  "domainNameConfig": {
    "domainName": {},
    "description": {},
    "certificateArn": {},
    "appsyncDomainName": {},
    "hostedZoneId": {}
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

<h3 id="getdomainname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDomainNameResponse](#schemagetdomainnameresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDomainName

<a id="opIdUpdateDomainName"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/domainnames/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string"
  }'
```

`POST /v1/domainnames/{domainName}`

Updates a custom <code>DomainName</code> object.

> Body parameter

```json
{
  "description": "string"
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
|» description|body|string|false|A description of the <code>DomainName</code>.|

> Example responses

> 200 Response

```json
{
  "domainNameConfig": {
    "domainName": {},
    "description": {},
    "certificateArn": {},
    "appsyncDomainName": {},
    "hostedZoneId": {}
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

<h3 id="updatedomainname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDomainNameResponse](#schemaupdatedomainnameresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDomainName

<a id="opIdDeleteDomainName"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/domainnames/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/domainnames/{domainName}`

Deletes a custom <code>DomainName</code> object.

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

> 200 Response

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

> 484 Response

```json
null
```

<h3 id="deletedomainname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDomainNameResponse](#schemadeletedomainnameresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetFunction

<a id="opIdGetFunction"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/apis/string/functions/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/apis/{apiId}/functions/{functionId}`

Get a <code>Function</code>.

<h3 id="getfunction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The GraphQL API ID.|
|functionId|path|string|true|The <code>Function</code> ID.|
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
  "functionConfiguration": {
    "functionId": {},
    "functionArn": {},
    "name": {},
    "description": {},
    "dataSourceName": {},
    "requestMappingTemplate": {},
    "responseMappingTemplate": {},
    "functionVersion": {},
    "syncConfig": {
      "conflictHandler": {},
      "conflictDetection": {},
      "lambdaConflictHandlerConfig": {
        "lambdaConflictHandlerArn": {}
      }
    },
    "maxBatchSize": {},
    "runtime": {
      "name": {},
      "runtimeVersion": {}
    },
    "code": {}
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

<h3 id="getfunction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetFunctionResponse](#schemagetfunctionresponse)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFunction

<a id="opIdUpdateFunction"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/apis/string/functions/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "description": "string",
    "dataSourceName": "string",
    "requestMappingTemplate": "string",
    "responseMappingTemplate": "string",
    "functionVersion": "string",
    "syncConfig": {
      "conflictHandler": {},
      "conflictDetection": {},
      "lambdaConflictHandlerConfig": {
        "lambdaConflictHandlerArn": {}
      }
    },
    "maxBatchSize": 0,
    "runtime": {
      "name": {},
      "runtimeVersion": {}
    },
    "code": "string"
  }'
```

`POST /v1/apis/{apiId}/functions/{functionId}`

Updates a <code>Function</code> object.

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "dataSourceName": "string",
  "requestMappingTemplate": "string",
  "responseMappingTemplate": "string",
  "functionVersion": "string",
  "syncConfig": {
    "conflictHandler": {},
    "conflictDetection": {},
    "lambdaConflictHandlerConfig": {
      "lambdaConflictHandlerArn": {}
    }
  },
  "maxBatchSize": 0,
  "runtime": {
    "name": {},
    "runtimeVersion": {}
  },
  "code": "string"
}
```

<h3 id="updatefunction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The GraphQL API ID.|
|functionId|path|string|true|The function ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» name|body|string|true|The <code>Function</code> name.|
|» description|body|string|false|The <code>Function</code> description.|
|» dataSourceName|body|string|true|The <code>Function</code> <code>DataSource</code> name.|
|» requestMappingTemplate|body|string|false|The <code>Function</code> request mapping template. Functions support only the 2018-05-29 version of the request mapping template.|
|» responseMappingTemplate|body|string|false|The <code>Function</code> request mapping template.|
|» functionVersion|body|string|false|The <code>version</code> of the request mapping template. Currently, the supported value is 2018-05-29. Note that when using VTL and mapping templates, the <code>functionVersion</code> is required.|
|» syncConfig|body|object|false|<p>Describes a Sync configuration for a resolver.</p> <p>Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.</p>|
|» » conflictHandler|body|object|false|none|
|» » conflictDetection|body|object|false|none|
|» » lambdaConflictHandlerConfig|body|object|false|none|
|» » » lambdaConflictHandlerArn|body|object|false|none|
|» maxBatchSize|body|integer|false|The maximum batching size for a resolver.|
|» runtime|body|object|false|Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.|
|» » name|body|object|false|none|
|» » runtimeVersion|body|object|false|none|
|» code|body|string|false|The <code>function</code> code that contains the request and response functions. When code is used, the <code>runtime</code> is required. The <code>runtime</code> value must be <code>APPSYNC_JS</code>.|

> Example responses

> 200 Response

```json
{
  "functionConfiguration": {
    "functionId": {},
    "functionArn": {},
    "name": {},
    "description": {},
    "dataSourceName": {},
    "requestMappingTemplate": {},
    "responseMappingTemplate": {},
    "functionVersion": {},
    "syncConfig": {
      "conflictHandler": {},
      "conflictDetection": {},
      "lambdaConflictHandlerConfig": {
        "lambdaConflictHandlerArn": {}
      }
    },
    "maxBatchSize": {},
    "runtime": {
      "name": {},
      "runtimeVersion": {}
    },
    "code": {}
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

<h3 id="updatefunction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateFunctionResponse](#schemaupdatefunctionresponse)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFunction

<a id="opIdDeleteFunction"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/apis/string/functions/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/apis/{apiId}/functions/{functionId}`

Deletes a <code>Function</code>.

<h3 id="deletefunction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The GraphQL API ID.|
|functionId|path|string|true|The <code>Function</code> ID.|
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

<h3 id="deletefunction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteFunctionResponse](#schemadeletefunctionresponse)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetGraphqlApi

<a id="opIdGetGraphqlApi"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/apis/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/apis/{apiId}`

Retrieves a <code>GraphqlApi</code> object.

<h3 id="getgraphqlapi-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API ID for the GraphQL API.|
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
  "graphqlApi": {
    "name": {},
    "apiId": {},
    "authenticationType": {},
    "logConfig": {
      "fieldLogLevel": {},
      "cloudWatchLogsRoleArn": {},
      "excludeVerboseContent": {}
    },
    "userPoolConfig": {
      "userPoolId": {},
      "awsRegion": {},
      "defaultAction": {},
      "appIdClientRegex": {}
    },
    "openIDConnectConfig": {
      "issuer": {},
      "clientId": {},
      "iatTTL": {},
      "authTTL": {}
    },
    "arn": {},
    "uris": {
      "property1": "string",
      "property2": "string"
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "additionalAuthenticationProviders": {},
    "xrayEnabled": {},
    "wafWebAclArn": {},
    "lambdaAuthorizerConfig": {
      "authorizerResultTtlInSeconds": {},
      "authorizerUri": {},
      "identityValidationExpression": {}
    },
    "dns": {
      "property1": "string",
      "property2": "string"
    },
    "visibility": {},
    "apiType": {},
    "mergedApiExecutionRoleArn": {},
    "owner": {},
    "ownerContact": {}
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

<h3 id="getgraphqlapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetGraphqlApiResponse](#schemagetgraphqlapiresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateGraphqlApi

<a id="opIdUpdateGraphqlApi"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/apis/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "logConfig": {
      "fieldLogLevel": {},
      "cloudWatchLogsRoleArn": {},
      "excludeVerboseContent": {}
    },
    "authenticationType": "API_KEY",
    "userPoolConfig": {
      "userPoolId": {},
      "awsRegion": {},
      "defaultAction": {},
      "appIdClientRegex": {}
    },
    "openIDConnectConfig": {
      "issuer": {},
      "clientId": {},
      "iatTTL": {},
      "authTTL": {}
    },
    "additionalAuthenticationProviders": [
      {
        "authenticationType": {},
        "openIDConnectConfig": {
          "issuer": {},
          "clientId": {},
          "iatTTL": {},
          "authTTL": {}
        },
        "userPoolConfig": {
          "userPoolId": {},
          "awsRegion": {},
          "appIdClientRegex": {}
        },
        "lambdaAuthorizerConfig": {
          "authorizerResultTtlInSeconds": {},
          "authorizerUri": {},
          "identityValidationExpression": {}
        }
      }
    ],
    "xrayEnabled": true,
    "lambdaAuthorizerConfig": {
      "authorizerResultTtlInSeconds": {},
      "authorizerUri": {},
      "identityValidationExpression": {}
    },
    "mergedApiExecutionRoleArn": "string",
    "ownerContact": "string"
  }'
```

`POST /v1/apis/{apiId}`

Updates a <code>GraphqlApi</code> object.

> Body parameter

```json
{
  "name": "string",
  "logConfig": {
    "fieldLogLevel": {},
    "cloudWatchLogsRoleArn": {},
    "excludeVerboseContent": {}
  },
  "authenticationType": "API_KEY",
  "userPoolConfig": {
    "userPoolId": {},
    "awsRegion": {},
    "defaultAction": {},
    "appIdClientRegex": {}
  },
  "openIDConnectConfig": {
    "issuer": {},
    "clientId": {},
    "iatTTL": {},
    "authTTL": {}
  },
  "additionalAuthenticationProviders": [
    {
      "authenticationType": {},
      "openIDConnectConfig": {
        "issuer": {},
        "clientId": {},
        "iatTTL": {},
        "authTTL": {}
      },
      "userPoolConfig": {
        "userPoolId": {},
        "awsRegion": {},
        "appIdClientRegex": {}
      },
      "lambdaAuthorizerConfig": {
        "authorizerResultTtlInSeconds": {},
        "authorizerUri": {},
        "identityValidationExpression": {}
      }
    }
  ],
  "xrayEnabled": true,
  "lambdaAuthorizerConfig": {
    "authorizerResultTtlInSeconds": {},
    "authorizerUri": {},
    "identityValidationExpression": {}
  },
  "mergedApiExecutionRoleArn": "string",
  "ownerContact": "string"
}
```

<h3 id="updategraphqlapi-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» name|body|string|true|The new name for the <code>GraphqlApi</code> object.|
|» logConfig|body|object|false|The Amazon CloudWatch Logs configuration.|
|» » fieldLogLevel|body|object|false|none|
|» » cloudWatchLogsRoleArn|body|object|false|none|
|» » excludeVerboseContent|body|object|false|none|
|» authenticationType|body|string|false|The new authentication type for the <code>GraphqlApi</code> object.|
|» userPoolConfig|body|object|false|Describes an Amazon Cognito user pool configuration.|
|» » userPoolId|body|object|false|none|
|» » awsRegion|body|object|false|none|
|» » defaultAction|body|object|false|none|
|» » appIdClientRegex|body|object|false|none|
|» openIDConnectConfig|body|object|false|Describes an OpenID Connect (OIDC) configuration.|
|» » issuer|body|object|false|none|
|» » clientId|body|object|false|none|
|» » iatTTL|body|object|false|none|
|» » authTTL|body|object|false|none|
|» additionalAuthenticationProviders|body|[[AdditionalAuthenticationProvider](#schemaadditionalauthenticationprovider)]|false|A list of additional authentication providers for the <code>GraphqlApi</code> API.|
|» xrayEnabled|body|boolean|false|A flag indicating whether to use X-Ray tracing for the <code>GraphqlApi</code>.|
|» lambdaAuthorizerConfig|body|object|false|A <code>LambdaAuthorizerConfig</code> specifies how to authorize AppSync API access when using the <code>AWS_LAMBDA</code> authorizer mode. Be aware that an AppSync API can have only one Lambda authorizer configured at a time.|
|» » authorizerResultTtlInSeconds|body|object|false|none|
|» » authorizerUri|body|object|false|none|
|» » identityValidationExpression|body|object|false|none|
|» mergedApiExecutionRoleArn|body|string|false|The Identity and Access Management service role ARN for a merged API. The AppSync service assumes this role on behalf of the Merged API to validate access to source APIs at runtime and to prompt the <code>AUTO_MERGE</code> to update the merged API endpoint with the source API changes automatically.|
|» ownerContact|body|string|false|<p>The owner contact information for an API resource.</p> <p>This field accepts any string input with a length of 0 - 256 characters.</p>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» authenticationType|API_KEY|
|» authenticationType|AWS_IAM|
|» authenticationType|AMAZON_COGNITO_USER_POOLS|
|» authenticationType|OPENID_CONNECT|
|» authenticationType|AWS_LAMBDA|

> Example responses

> 200 Response

```json
{
  "graphqlApi": {
    "name": {},
    "apiId": {},
    "authenticationType": {},
    "logConfig": {
      "fieldLogLevel": {},
      "cloudWatchLogsRoleArn": {},
      "excludeVerboseContent": {}
    },
    "userPoolConfig": {
      "userPoolId": {},
      "awsRegion": {},
      "defaultAction": {},
      "appIdClientRegex": {}
    },
    "openIDConnectConfig": {
      "issuer": {},
      "clientId": {},
      "iatTTL": {},
      "authTTL": {}
    },
    "arn": {},
    "uris": {
      "property1": "string",
      "property2": "string"
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "additionalAuthenticationProviders": {},
    "xrayEnabled": {},
    "wafWebAclArn": {},
    "lambdaAuthorizerConfig": {
      "authorizerResultTtlInSeconds": {},
      "authorizerUri": {},
      "identityValidationExpression": {}
    },
    "dns": {
      "property1": "string",
      "property2": "string"
    },
    "visibility": {},
    "apiType": {},
    "mergedApiExecutionRoleArn": {},
    "owner": {},
    "ownerContact": {}
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

<h3 id="updategraphqlapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateGraphqlApiResponse](#schemaupdategraphqlapiresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteGraphqlApi

<a id="opIdDeleteGraphqlApi"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/apis/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/apis/{apiId}`

Deletes a <code>GraphqlApi</code> object.

<h3 id="deletegraphqlapi-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API ID.|
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

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="deletegraphqlapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteGraphqlApiResponse](#schemadeletegraphqlapiresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResolver

<a id="opIdGetResolver"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/apis/string/types/string/resolvers/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}`

Retrieves a <code>Resolver</code> object.

<h3 id="getresolver-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API ID.|
|typeName|path|string|true|The resolver type name.|
|fieldName|path|string|true|The resolver field name.|
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
  "resolver": {
    "typeName": {},
    "fieldName": {},
    "dataSourceName": {},
    "resolverArn": {},
    "requestMappingTemplate": {},
    "responseMappingTemplate": {},
    "kind": {},
    "pipelineConfig": {
      "functions": {}
    },
    "syncConfig": {
      "conflictHandler": {},
      "conflictDetection": {},
      "lambdaConflictHandlerConfig": {
        "lambdaConflictHandlerArn": {}
      }
    },
    "cachingConfig": {
      "ttl": {},
      "cachingKeys": {}
    },
    "maxBatchSize": {},
    "runtime": {
      "name": {},
      "runtimeVersion": {}
    },
    "code": {}
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

<h3 id="getresolver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetResolverResponse](#schemagetresolverresponse)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateResolver

<a id="opIdUpdateResolver"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/apis/string/types/string/resolvers/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "dataSourceName": "string",
    "requestMappingTemplate": "string",
    "responseMappingTemplate": "string",
    "kind": "UNIT",
    "pipelineConfig": {
      "functions": {}
    },
    "syncConfig": {
      "conflictHandler": {},
      "conflictDetection": {},
      "lambdaConflictHandlerConfig": {
        "lambdaConflictHandlerArn": {}
      }
    },
    "cachingConfig": {
      "ttl": {},
      "cachingKeys": {}
    },
    "maxBatchSize": 0,
    "runtime": {
      "name": {},
      "runtimeVersion": {}
    },
    "code": "string"
  }'
```

`POST /v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}`

Updates a <code>Resolver</code> object.

> Body parameter

```json
{
  "dataSourceName": "string",
  "requestMappingTemplate": "string",
  "responseMappingTemplate": "string",
  "kind": "UNIT",
  "pipelineConfig": {
    "functions": {}
  },
  "syncConfig": {
    "conflictHandler": {},
    "conflictDetection": {},
    "lambdaConflictHandlerConfig": {
      "lambdaConflictHandlerArn": {}
    }
  },
  "cachingConfig": {
    "ttl": {},
    "cachingKeys": {}
  },
  "maxBatchSize": 0,
  "runtime": {
    "name": {},
    "runtimeVersion": {}
  },
  "code": "string"
}
```

<h3 id="updateresolver-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API ID.|
|typeName|path|string|true|The new type name.|
|fieldName|path|string|true|The new field name.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» dataSourceName|body|string|false|The new data source name.|
|» requestMappingTemplate|body|string|false|<p>The new request mapping template.</p> <p>A resolver uses a request mapping template to convert a GraphQL expression into a format that a data source can understand. Mapping templates are written in Apache Velocity Template Language (VTL).</p> <p>VTL request mapping templates are optional when using an Lambda data source. For all other data sources, VTL request and response mapping templates are required.</p>|
|» responseMappingTemplate|body|string|false|The new response mapping template.|
|» kind|body|string|false|<p>The resolver type.</p> <ul> <li> <p> <b>UNIT</b>: A UNIT resolver type. A UNIT resolver is the default resolver type. You can use a UNIT resolver to run a GraphQL query against a single data source.</p> </li> <li> <p> <b>PIPELINE</b>: A PIPELINE resolver type. You can use a PIPELINE resolver to invoke a series of <code>Function</code> objects in a serial manner. You can use a pipeline resolver to run a GraphQL query against multiple data sources.</p> </li> </ul>|
|» pipelineConfig|body|object|false|The pipeline configuration for a resolver of kind <code>PIPELINE</code>.|
|» » functions|body|object|false|none|
|» syncConfig|body|object|false|<p>Describes a Sync configuration for a resolver.</p> <p>Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.</p>|
|» » conflictHandler|body|object|false|none|
|» » conflictDetection|body|object|false|none|
|» » lambdaConflictHandlerConfig|body|object|false|none|
|» » » lambdaConflictHandlerArn|body|object|false|none|
|» cachingConfig|body|object|false|The caching configuration for a resolver that has caching activated.|
|» » ttl|body|object|false|none|
|» » cachingKeys|body|object|false|none|
|» maxBatchSize|body|integer|false|The maximum batching size for a resolver.|
|» runtime|body|object|false|Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.|
|» » name|body|object|false|none|
|» » runtimeVersion|body|object|false|none|
|» code|body|string|false|The <code>resolver</code> code that contains the request and response functions. When code is used, the <code>runtime</code> is required. The <code>runtime</code> value must be <code>APPSYNC_JS</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» kind|UNIT|
|» kind|PIPELINE|

> Example responses

> 200 Response

```json
{
  "resolver": {
    "typeName": {},
    "fieldName": {},
    "dataSourceName": {},
    "resolverArn": {},
    "requestMappingTemplate": {},
    "responseMappingTemplate": {},
    "kind": {},
    "pipelineConfig": {
      "functions": {}
    },
    "syncConfig": {
      "conflictHandler": {},
      "conflictDetection": {},
      "lambdaConflictHandlerConfig": {
        "lambdaConflictHandlerArn": {}
      }
    },
    "cachingConfig": {
      "ttl": {},
      "cachingKeys": {}
    },
    "maxBatchSize": {},
    "runtime": {
      "name": {},
      "runtimeVersion": {}
    },
    "code": {}
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

<h3 id="updateresolver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateResolverResponse](#schemaupdateresolverresponse)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteResolver

<a id="opIdDeleteResolver"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/apis/string/types/string/resolvers/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}`

Deletes a <code>Resolver</code> object.

<h3 id="deleteresolver-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API ID.|
|typeName|path|string|true|The name of the resolver type.|
|fieldName|path|string|true|The resolver field name.|
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

> 484 Response

```json
null
```

<h3 id="deleteresolver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteResolverResponse](#schemadeleteresolverresponse)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateType

<a id="opIdUpdateType"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/apis/string/types/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "definition": "string",
    "format": "SDL"
  }'
```

`POST /v1/apis/{apiId}/types/{typeName}`

Updates a <code>Type</code> object.

> Body parameter

```json
{
  "definition": "string",
  "format": "SDL"
}
```

<h3 id="updatetype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API ID.|
|typeName|path|string|true|The new type name.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» definition|body|string|false|The new definition.|
|» format|body|string|true|The new type format: SDL or JSON.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» format|SDL|
|» format|JSON|

> Example responses

> 200 Response

```json
{
  "type": {
    "name": {},
    "description": {},
    "arn": {},
    "definition": {},
    "format": {}
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

<h3 id="updatetype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateTypeResponse](#schemaupdatetyperesponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteType

<a id="opIdDeleteType"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/apis/string/types/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/apis/{apiId}/types/{typeName}`

Deletes a <code>Type</code> object.

<h3 id="deletetype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API ID.|
|typeName|path|string|true|The type name.|
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

> 484 Response

```json
null
```

<h3 id="deletetype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteTypeResponse](#schemadeletetyperesponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateMergedGraphqlApi

<a id="opIdDisassociateMergedGraphqlApi"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/sourceApis/string/mergedApiAssociations/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/sourceApis/{sourceApiIdentifier}/mergedApiAssociations/{associationId}`

Deletes an association between a Merged API and source API using the source API's identifier and the association ID.

<h3 id="disassociatemergedgraphqlapi-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sourceApiIdentifier|path|string|true|The identifier of the AppSync Source API. This is generated by the AppSync service. In most cases, source APIs (especially in your account) only require the API ID value or ARN of the source API. However, source APIs from other accounts (cross-account use cases) strictly require the full resource ARN of the source API.|
|associationId|path|string|true|The ID generated by the AppSync service for the source API association.|
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
  "sourceApiAssociationStatus": {}
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

<h3 id="disassociatemergedgraphqlapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateMergedGraphqlApiResponse](#schemadisassociatemergedgraphqlapiresponse)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSourceApiAssociation

<a id="opIdGetSourceApiAssociation"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/mergedApis/string/sourceApiAssociations/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}`

Retrieves a <code>SourceApiAssociation</code> object.

<h3 id="getsourceapiassociation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mergedApiIdentifier|path|string|true|The identifier of the AppSync Merged API. This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full resource ARN of the merged API.|
|associationId|path|string|true|The ID generated by the AppSync service for the source API association.|
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
  "sourceApiAssociation": {
    "associationId": {},
    "associationArn": {},
    "sourceApiId": {},
    "sourceApiArn": {},
    "mergedApiArn": {},
    "mergedApiId": {},
    "description": {},
    "sourceApiAssociationConfig": {
      "mergeType": {}
    },
    "sourceApiAssociationStatus": {},
    "sourceApiAssociationStatusDetail": {},
    "lastSuccessfulMergeDate": {}
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

<h3 id="getsourceapiassociation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSourceApiAssociationResponse](#schemagetsourceapiassociationresponse)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateSourceApiAssociation

<a id="opIdUpdateSourceApiAssociation"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/mergedApis/string/sourceApiAssociations/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "sourceApiAssociationConfig": {
      "mergeType": {}
    }
  }'
```

`POST /v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}`

Updates some of the configuration choices of a particular source API association.

> Body parameter

```json
{
  "description": "string",
  "sourceApiAssociationConfig": {
    "mergeType": {}
  }
}
```

<h3 id="updatesourceapiassociation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|associationId|path|string|true|The ID generated by the AppSync service for the source API association.|
|mergedApiIdentifier|path|string|true|The identifier of the AppSync Merged API. This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full resource ARN of the merged API.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» description|body|string|false|The description field.|
|» sourceApiAssociationConfig|body|object|false|Describes properties used to specify configurations related to a source API.|
|» » mergeType|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "sourceApiAssociation": {
    "associationId": {},
    "associationArn": {},
    "sourceApiId": {},
    "sourceApiArn": {},
    "mergedApiArn": {},
    "mergedApiId": {},
    "description": {},
    "sourceApiAssociationConfig": {
      "mergeType": {}
    },
    "sourceApiAssociationStatus": {},
    "sourceApiAssociationStatusDetail": {},
    "lastSuccessfulMergeDate": {}
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

<h3 id="updatesourceapiassociation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateSourceApiAssociationResponse](#schemaupdatesourceapiassociationresponse)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateSourceGraphqlApi

<a id="opIdDisassociateSourceGraphqlApi"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/mergedApis/string/sourceApiAssociations/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}`

Deletes an association between a Merged API and source API using the Merged API's identifier and the association ID.

<h3 id="disassociatesourcegraphqlapi-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mergedApiIdentifier|path|string|true|The identifier of the AppSync Merged API. This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full resource ARN of the merged API.|
|associationId|path|string|true|The ID generated by the AppSync service for the source API association.|
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
  "sourceApiAssociationStatus": {}
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

<h3 id="disassociatesourcegraphqlapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateSourceGraphqlApiResponse](#schemadisassociatesourcegraphqlapiresponse)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## EvaluateCode

<a id="opIdEvaluateCode"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/dataplane-evaluatecode \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "runtime": {
      "name": {},
      "runtimeVersion": {}
    },
    "code": "string",
    "context": "string",
    "function": "string"
  }'
```

`POST /v1/dataplane-evaluatecode`

Evaluates the given code and returns the response. The code definition requirements depend on the specified runtime. For <code>APPSYNC_JS</code> runtimes, the code defines the request and response functions. The request function takes the incoming request after a GraphQL operation is parsed and converts it into a request configuration for the selected data source operation. The response function interprets responses from the data source and maps it to the shape of the GraphQL field output type. 

> Body parameter

```json
{
  "runtime": {
    "name": {},
    "runtimeVersion": {}
  },
  "code": "string",
  "context": "string",
  "function": "string"
}
```

<h3 id="evaluatecode-parameters">Parameters</h3>

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
|» runtime|body|object|true|Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.|
|» » name|body|object|false|none|
|» » runtimeVersion|body|object|false|none|
|» code|body|string|true|The code definition to be evaluated. Note that <code>code</code> and <code>runtime</code> are both required for this action. The <code>runtime</code> value must be <code>APPSYNC_JS</code>.|
|» context|body|string|true|The map that holds all of the contextual information for your resolver invocation. A <code>context</code> is required for this action.|
|» function|body|string|false|The function within the code to be evaluated. If provided, the valid values are <code>request</code> and <code>response</code>.|

> Example responses

> 200 Response

```json
{
  "evaluationResult": {},
  "error": {
    "message": {},
    "codeErrors": {}
  },
  "logs": {}
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

<h3 id="evaluatecode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EvaluateCodeResponse](#schemaevaluatecoderesponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## EvaluateMappingTemplate

<a id="opIdEvaluateMappingTemplate"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/dataplane-evaluatetemplate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "template": "string",
    "context": "string"
  }'
```

`POST /v1/dataplane-evaluatetemplate`

<p>Evaluates a given template and returns the response. The mapping template can be a request or response template.</p> <p>Request templates take the incoming request after a GraphQL operation is parsed and convert it into a request configuration for the selected data source operation. Response templates interpret responses from the data source and map it to the shape of the GraphQL field output type.</p> <p>Mapping templates are written in the Apache Velocity Template Language (VTL).</p>

> Body parameter

```json
{
  "template": "string",
  "context": "string"
}
```

<h3 id="evaluatemappingtemplate-parameters">Parameters</h3>

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
|» template|body|string|true|The mapping template; this can be a request or response template. A <code>template</code> is required for this action.|
|» context|body|string|true|The map that holds all of the contextual information for your resolver invocation. A <code>context</code> is required for this action.|

> Example responses

> 200 Response

```json
{
  "evaluationResult": {},
  "error": {
    "message": {}
  },
  "logs": {}
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

<h3 id="evaluatemappingtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EvaluateMappingTemplateResponse](#schemaevaluatemappingtemplateresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## FlushApiCache

<a id="opIdFlushApiCache"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/apis/string/FlushCache \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/apis/{apiId}/FlushCache`

Flushes an <code>ApiCache</code> object.

<h3 id="flushapicache-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API ID.|
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

> 484 Response

```json
null
```

<h3 id="flushapicache-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[FlushApiCacheResponse](#schemaflushapicacheresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetIntrospectionSchema

<a id="opIdGetIntrospectionSchema"></a>

> Code samples

```bash
curl 'https://appsync.us-east-1.amazonaws.com/v1/apis/string/schema#format?format=SDL' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/apis/{apiId}/schema#format`

Retrieves the introspection schema for a GraphQL API.

<h3 id="getintrospectionschema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API ID.|
|format|query|string|true|The schema format: SDL or JSON.|
|includeDirectives|query|boolean|false|A flag that specifies whether the schema introspection should contain directives.|
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
|format|SDL|
|format|JSON|

> Example responses

> 200 Response

```json
{
  "schema": {}
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

<h3 id="getintrospectionschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetIntrospectionSchemaResponse](#schemagetintrospectionschemaresponse)|
|480|480|GraphQLSchemaException|[GraphQLSchemaException](#schemagraphqlschemaexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSchemaCreationStatus

<a id="opIdGetSchemaCreationStatus"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/apis/string/schemacreation \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/apis/{apiId}/schemacreation`

Retrieves the current status of a schema creation operation.

<h3 id="getschemacreationstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API ID.|
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
  "status": {},
  "details": {}
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

<h3 id="getschemacreationstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSchemaCreationStatusResponse](#schemagetschemacreationstatusresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartSchemaCreation

<a id="opIdStartSchemaCreation"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/apis/string/schemacreation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "definition": "string"
  }'
```

`POST /v1/apis/{apiId}/schemacreation`

<p>Adds a new schema to your GraphQL API.</p> <p>This operation is asynchronous. Use to determine when it has completed.</p>

> Body parameter

```json
{
  "definition": "string"
}
```

<h3 id="startschemacreation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» definition|body|string|true|The schema definition, in GraphQL schema language format.|

> Example responses

> 200 Response

```json
{
  "status": {}
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

<h3 id="startschemacreation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartSchemaCreationResponse](#schemastartschemacreationresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetType

<a id="opIdGetType"></a>

> Code samples

```bash
curl 'https://appsync.us-east-1.amazonaws.com/v1/apis/string/types/string#format?format=SDL' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/apis/{apiId}/types/{typeName}#format`

Retrieves a <code>Type</code> object.

<h3 id="gettype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API ID.|
|typeName|path|string|true|The type name.|
|format|query|string|true|The type format: SDL or JSON.|
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
|format|SDL|
|format|JSON|

> Example responses

> 200 Response

```json
{
  "type": {
    "name": {},
    "description": {},
    "arn": {},
    "definition": {},
    "format": {}
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

<h3 id="gettype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTypeResponse](#schemagettyperesponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListResolversByFunction

<a id="opIdListResolversByFunction"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/apis/string/functions/string/resolvers \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/apis/{apiId}/functions/{functionId}/resolvers`

List the resolvers that are associated with a specific function.

<h3 id="listresolversbyfunction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API ID.|
|functionId|path|string|true|The function ID.|
|nextToken|query|string|false|An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.|
|maxResults|query|integer|false|The maximum number of results that you want the request to return.|
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
  "resolvers": {},
  "nextToken": {}
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

<h3 id="listresolversbyfunction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListResolversByFunctionResponse](#schemalistresolversbyfunctionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSourceApiAssociations

<a id="opIdListSourceApiAssociations"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/apis/string/sourceApiAssociations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/apis/{apiId}/sourceApiAssociations`

Lists the <code>SourceApiAssociationSummary</code> data.

<h3 id="listsourceapiassociations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API ID.|
|nextToken|query|string|false|An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.|
|maxResults|query|integer|false|The maximum number of results that you want the request to return.|
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
  "sourceApiAssociationSummaries": {},
  "nextToken": {}
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

<h3 id="listsourceapiassociations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSourceApiAssociationsResponse](#schemalistsourceapiassociationsresponse)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/tags/stringstringstringstringstringstringstringstringstringstringstringstri \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/tags/{resourceArn}`

Lists the tags for a resource.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The <code>GraphqlApi</code> Amazon Resource Name (ARN).|
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

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/tags/stringstringstringstringstringstringstringstringstringstringstringstri \
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

`POST /v1/tags/{resourceArn}`

Tags a resource with user-supplied tags.

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
|resourceArn|path|string|true|The <code>GraphqlApi</code> Amazon Resource Name (ARN).|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|true|A map with keys of <code>TagKey</code> objects and values of <code>TagValue</code> objects.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|The value for the tag.|

> Example responses

> 200 Response

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
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTypes

<a id="opIdListTypes"></a>

> Code samples

```bash
curl 'https://appsync.us-east-1.amazonaws.com/v1/apis/string/types#format?format=SDL' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/apis/{apiId}/types#format`

Lists the types for a given API.

<h3 id="listtypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The API ID.|
|format|query|string|true|The type format: SDL or JSON.|
|nextToken|query|string|false|An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.|
|maxResults|query|integer|false|The maximum number of results that you want the request to return.|
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
|format|SDL|
|format|JSON|

> Example responses

> 200 Response

```json
{
  "types": {},
  "nextToken": {}
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

<h3 id="listtypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTypesResponse](#schemalisttypesresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTypesByAssociation

<a id="opIdListTypesByAssociation"></a>

> Code samples

```bash
curl 'https://appsync.us-east-1.amazonaws.com/v1/mergedApis/string/sourceApiAssociations/string/types#format?format=SDL' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}/types#format`

Lists <code>Type</code> objects by the source API association ID.

<h3 id="listtypesbyassociation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mergedApiIdentifier|path|string|true|The identifier of the AppSync Merged API. This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full resource ARN of the merged API.|
|associationId|path|string|true|The ID generated by the AppSync service for the source API association.|
|format|query|string|true|The format type.|
|nextToken|query|string|false|An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.|
|maxResults|query|integer|false|The maximum number of results that you want the request to return.|
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
|format|SDL|
|format|JSON|

> Example responses

> 200 Response

```json
{
  "types": {},
  "nextToken": {}
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

<h3 id="listtypesbyassociation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTypesByAssociationResponse](#schemalisttypesbyassociationresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartSchemaMerge

<a id="opIdStartSchemaMerge"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/mergedApis/string/sourceApiAssociations/string/merge \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}/merge`

Initiates a merge operation. Returns a status that shows the result of the merge operation.

<h3 id="startschemamerge-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|associationId|path|string|true|The ID generated by the AppSync service for the source API association.|
|mergedApiIdentifier|path|string|true|The identifier of the AppSync Merged API. This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full resource ARN of the merged API.|
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
  "sourceApiAssociationStatus": {}
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

<h3 id="startschemamerge-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartSchemaMergeResponse](#schemastartschemamergeresponse)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://appsync.us-east-1.amazonaws.com/v1/tags/stringstringstringstringstringstringstringstringstringstringstringstri#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/tags/{resourceArn}#tagKeys`

Untags a resource.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The <code>GraphqlApi</code> Amazon Resource Name (ARN).|
|tagKeys|query|[[TagKey](#schematagkey)]|true|A list of <code>TagKey</code> objects.|
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
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateApiCache

<a id="opIdUpdateApiCache"></a>

> Code samples

```bash
curl https://appsync.us-east-1.amazonaws.com/v1/apis/string/ApiCaches/update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ttl": 0,
    "apiCachingBehavior": "FULL_REQUEST_CACHING",
    "type": "T2_SMALL"
  }'
```

`POST /v1/apis/{apiId}/ApiCaches/update`

Updates the cache for the GraphQL API.

> Body parameter

```json
{
  "ttl": 0,
  "apiCachingBehavior": "FULL_REQUEST_CACHING",
  "type": "T2_SMALL"
}
```

<h3 id="updateapicache-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiId|path|string|true|The GraphQL API ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ttl|body|integer|true|<p>TTL in seconds for cache entries.</p> <p>Valid values are 1–3,600 seconds.</p>|
|» apiCachingBehavior|body|string|true|<p>Caching behavior.</p> <ul> <li> <p> <b>FULL_REQUEST_CACHING</b>: All requests are fully cached.</p> </li> <li> <p> <b>PER_RESOLVER_CACHING</b>: Individual resolvers that you specify are cached.</p> </li> </ul>|
|» type|body|string|true|<p>The cache instance type. Valid values are </p> <ul> <li> <p> <code>SMALL</code> </p> </li> <li> <p> <code>MEDIUM</code> </p> </li> <li> <p> <code>LARGE</code> </p> </li> <li> <p> <code>XLARGE</code> </p> </li> <li> <p> <code>LARGE_2X</code> </p> </li> <li> <p> <code>LARGE_4X</code> </p> </li> <li> <p> <code>LARGE_8X</code> (not available in all regions)</p> </li> <li> <p> <code>LARGE_12X</code> </p> </li> </ul> <p>Historically, instance types were identified by an EC2-style value. As of July 2020, this is deprecated, and the generic identifiers above should be used.</p> <p>The following legacy instance types are available, but their use is discouraged:</p> <ul> <li> <p> <b>T2_SMALL</b>: A t2.small instance type.</p> </li> <li> <p> <b>T2_MEDIUM</b>: A t2.medium instance type.</p> </li> <li> <p> <b>R4_LARGE</b>: A r4.large instance type.</p> </li> <li> <p> <b>R4_XLARGE</b>: A r4.xlarge instance type.</p> </li> <li> <p> <b>R4_2XLARGE</b>: A r4.2xlarge instance type.</p> </li> <li> <p> <b>R4_4XLARGE</b>: A r4.4xlarge instance type.</p> </li> <li> <p> <b>R4_8XLARGE</b>: A r4.8xlarge instance type.</p> </li> </ul>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» apiCachingBehavior|FULL_REQUEST_CACHING|
|» apiCachingBehavior|PER_RESOLVER_CACHING|
|» type|T2_SMALL|
|» type|T2_MEDIUM|
|» type|R4_LARGE|
|» type|R4_XLARGE|
|» type|R4_2XLARGE|
|» type|R4_4XLARGE|
|» type|R4_8XLARGE|
|» type|SMALL|
|» type|MEDIUM|
|» type|LARGE|
|» type|XLARGE|
|» type|LARGE_2X|
|» type|LARGE_4X|
|» type|LARGE_8X|
|» type|LARGE_12X|

> Example responses

> 200 Response

```json
{
  "apiCache": {
    "ttl": {},
    "apiCachingBehavior": {},
    "transitEncryptionEnabled": {},
    "atRestEncryptionEnabled": {},
    "type": {},
    "status": {}
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

<h3 id="updateapicache-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateApiCacheResponse](#schemaupdateapicacheresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AssociateApiResponse">AssociateApiResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociateapiresponse"></a>
<a id="schema_AssociateApiResponse"></a>
<a id="tocSassociateapiresponse"></a>
<a id="tocsassociateapiresponse"></a>

```json
{
  "apiAssociation": {
    "domainName": {},
    "apiId": {},
    "associationStatus": {},
    "deploymentDetail": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiAssociation|object|false|none|none|

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

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

<h2 id="tocS_InternalFailureException">InternalFailureException</h2>
<!-- backwards compatibility -->
<a id="schemainternalfailureexception"></a>
<a id="schema_InternalFailureException"></a>
<a id="tocSinternalfailureexception"></a>
<a id="tocsinternalfailureexception"></a>

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

<h2 id="tocS_AssociateMergedGraphqlApiResponse">AssociateMergedGraphqlApiResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatemergedgraphqlapiresponse"></a>
<a id="schema_AssociateMergedGraphqlApiResponse"></a>
<a id="tocSassociatemergedgraphqlapiresponse"></a>
<a id="tocsassociatemergedgraphqlapiresponse"></a>

```json
{
  "sourceApiAssociation": {
    "associationId": {},
    "associationArn": {},
    "sourceApiId": {},
    "sourceApiArn": {},
    "mergedApiArn": {},
    "mergedApiId": {},
    "description": {},
    "sourceApiAssociationConfig": {
      "mergeType": {}
    },
    "sourceApiAssociationStatus": {},
    "sourceApiAssociationStatusDetail": {},
    "lastSuccessfulMergeDate": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceApiAssociation|object|false|none|none|

<h2 id="tocS_MergeType">MergeType</h2>
<!-- backwards compatibility -->
<a id="schemamergetype"></a>
<a id="schema_MergeType"></a>
<a id="tocSmergetype"></a>
<a id="tocsmergetype"></a>

```json
"MANUAL_MERGE"
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

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_ConcurrentModificationException">ConcurrentModificationException</h2>
<!-- backwards compatibility -->
<a id="schemaconcurrentmodificationexception"></a>
<a id="schema_ConcurrentModificationException"></a>
<a id="tocSconcurrentmodificationexception"></a>
<a id="tocsconcurrentmodificationexception"></a>

```json
null
```

<h2 id="tocS_AssociateSourceGraphqlApiResponse">AssociateSourceGraphqlApiResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatesourcegraphqlapiresponse"></a>
<a id="schema_AssociateSourceGraphqlApiResponse"></a>
<a id="tocSassociatesourcegraphqlapiresponse"></a>
<a id="tocsassociatesourcegraphqlapiresponse"></a>

```json
{
  "sourceApiAssociation": {
    "associationId": {},
    "associationArn": {},
    "sourceApiId": {},
    "sourceApiArn": {},
    "mergedApiArn": {},
    "mergedApiId": {},
    "description": {},
    "sourceApiAssociationConfig": {
      "mergeType": {}
    },
    "sourceApiAssociationStatus": {},
    "sourceApiAssociationStatusDetail": {},
    "lastSuccessfulMergeDate": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceApiAssociation|object|false|none|none|

<h2 id="tocS_CreateApiCacheResponse">CreateApiCacheResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateapicacheresponse"></a>
<a id="schema_CreateApiCacheResponse"></a>
<a id="tocScreateapicacheresponse"></a>
<a id="tocscreateapicacheresponse"></a>

```json
{
  "apiCache": {
    "ttl": {},
    "apiCachingBehavior": {},
    "transitEncryptionEnabled": {},
    "atRestEncryptionEnabled": {},
    "type": {},
    "status": {}
  }
}
```

Represents the output of a <code>CreateApiCache</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiCache|object|false|none|none|

<h2 id="tocS_CreateApiKeyResponse">CreateApiKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateapikeyresponse"></a>
<a id="schema_CreateApiKeyResponse"></a>
<a id="tocScreateapikeyresponse"></a>
<a id="tocscreateapikeyresponse"></a>

```json
{
  "apiKey": {
    "id": {},
    "description": {},
    "expires": {},
    "deletes": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKey|object|false|none|none|

<h2 id="tocS_ApiKeyLimitExceededException">ApiKeyLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaapikeylimitexceededexception"></a>
<a id="schema_ApiKeyLimitExceededException"></a>
<a id="tocSapikeylimitexceededexception"></a>
<a id="tocsapikeylimitexceededexception"></a>

```json
null
```

<h2 id="tocS_ApiKeyValidityOutOfBoundsException">ApiKeyValidityOutOfBoundsException</h2>
<!-- backwards compatibility -->
<a id="schemaapikeyvalidityoutofboundsexception"></a>
<a id="schema_ApiKeyValidityOutOfBoundsException"></a>
<a id="tocSapikeyvalidityoutofboundsexception"></a>
<a id="tocsapikeyvalidityoutofboundsexception"></a>

```json
null
```

<h2 id="tocS_CreateDataSourceResponse">CreateDataSourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasourceresponse"></a>
<a id="schema_CreateDataSourceResponse"></a>
<a id="tocScreatedatasourceresponse"></a>
<a id="tocscreatedatasourceresponse"></a>

```json
{
  "dataSource": {
    "dataSourceArn": {},
    "name": {},
    "description": {},
    "type": {},
    "serviceRoleArn": {},
    "dynamodbConfig": {
      "tableName": {},
      "awsRegion": {},
      "useCallerCredentials": {},
      "deltaSyncConfig": {
        "baseTableTTL": {},
        "deltaSyncTableName": {},
        "deltaSyncTableTTL": {}
      },
      "versioned": {}
    },
    "lambdaConfig": {
      "lambdaFunctionArn": {}
    },
    "elasticsearchConfig": {
      "endpoint": {},
      "awsRegion": {}
    },
    "openSearchServiceConfig": {
      "endpoint": {},
      "awsRegion": {}
    },
    "httpConfig": {
      "endpoint": {},
      "authorizationConfig": {
        "authorizationType": {},
        "awsIamConfig": {
          "signingRegion": {},
          "signingServiceName": {}
        }
      }
    },
    "relationalDatabaseConfig": {
      "relationalDatabaseSourceType": {},
      "rdsHttpEndpointConfig": {
        "awsRegion": {},
        "dbClusterIdentifier": {},
        "databaseName": {},
        "schema": {},
        "awsSecretStoreArn": {}
      }
    },
    "eventBridgeConfig": {
      "eventBusArn": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataSource|object|false|none|none|

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_DeltaSyncConfig">DeltaSyncConfig</h2>
<!-- backwards compatibility -->
<a id="schemadeltasyncconfig"></a>
<a id="schema_DeltaSyncConfig"></a>
<a id="tocSdeltasyncconfig"></a>
<a id="tocsdeltasyncconfig"></a>

```json
{
  "baseTableTTL": {},
  "deltaSyncTableName": {},
  "deltaSyncTableTTL": {}
}
```

Describes a Delta Sync configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseTableTTL|object|false|none|none|
|deltaSyncTableName|object|false|none|none|
|deltaSyncTableTTL|object|false|none|none|

<h2 id="tocS_AuthorizationConfig">AuthorizationConfig</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizationconfig"></a>
<a id="schema_AuthorizationConfig"></a>
<a id="tocSauthorizationconfig"></a>
<a id="tocsauthorizationconfig"></a>

```json
{
  "authorizationType": {},
  "awsIamConfig": {
    "signingRegion": {},
    "signingServiceName": {}
  }
}
```

The authorization configuration in case the HTTP endpoint requires authorization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorizationType|object|true|none|none|
|awsIamConfig|object|false|none|none|

<h2 id="tocS_RelationalDatabaseSourceType">RelationalDatabaseSourceType</h2>
<!-- backwards compatibility -->
<a id="schemarelationaldatabasesourcetype"></a>
<a id="schema_RelationalDatabaseSourceType"></a>
<a id="tocSrelationaldatabasesourcetype"></a>
<a id="tocsrelationaldatabasesourcetype"></a>

```json
"RDS_HTTP_ENDPOINT"
```

<h2 id="tocS_RdsHttpEndpointConfig">RdsHttpEndpointConfig</h2>
<!-- backwards compatibility -->
<a id="schemardshttpendpointconfig"></a>
<a id="schema_RdsHttpEndpointConfig"></a>
<a id="tocSrdshttpendpointconfig"></a>
<a id="tocsrdshttpendpointconfig"></a>

```json
{
  "awsRegion": {},
  "dbClusterIdentifier": {},
  "databaseName": {},
  "schema": {},
  "awsSecretStoreArn": {}
}
```

The Amazon Relational Database Service (Amazon RDS) HTTP endpoint configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|awsRegion|object|false|none|none|
|dbClusterIdentifier|object|false|none|none|
|databaseName|object|false|none|none|
|schema|object|false|none|none|
|awsSecretStoreArn|object|false|none|none|

<h2 id="tocS_CreateDomainNameResponse">CreateDomainNameResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedomainnameresponse"></a>
<a id="schema_CreateDomainNameResponse"></a>
<a id="tocScreatedomainnameresponse"></a>
<a id="tocscreatedomainnameresponse"></a>

```json
{
  "domainNameConfig": {
    "domainName": {},
    "description": {},
    "certificateArn": {},
    "appsyncDomainName": {},
    "hostedZoneId": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainNameConfig|object|false|none|none|

<h2 id="tocS_CreateFunctionResponse">CreateFunctionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatefunctionresponse"></a>
<a id="schema_CreateFunctionResponse"></a>
<a id="tocScreatefunctionresponse"></a>
<a id="tocscreatefunctionresponse"></a>

```json
{
  "functionConfiguration": {
    "functionId": {},
    "functionArn": {},
    "name": {},
    "description": {},
    "dataSourceName": {},
    "requestMappingTemplate": {},
    "responseMappingTemplate": {},
    "functionVersion": {},
    "syncConfig": {
      "conflictHandler": {},
      "conflictDetection": {},
      "lambdaConflictHandlerConfig": {
        "lambdaConflictHandlerArn": {}
      }
    },
    "maxBatchSize": {},
    "runtime": {
      "name": {},
      "runtimeVersion": {}
    },
    "code": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|functionConfiguration|object|false|none|none|

<h2 id="tocS_ConflictHandlerType">ConflictHandlerType</h2>
<!-- backwards compatibility -->
<a id="schemaconflicthandlertype"></a>
<a id="schema_ConflictHandlerType"></a>
<a id="tocSconflicthandlertype"></a>
<a id="tocsconflicthandlertype"></a>

```json
"OPTIMISTIC_CONCURRENCY"
```

<h2 id="tocS_ConflictDetectionType">ConflictDetectionType</h2>
<!-- backwards compatibility -->
<a id="schemaconflictdetectiontype"></a>
<a id="schema_ConflictDetectionType"></a>
<a id="tocSconflictdetectiontype"></a>
<a id="tocsconflictdetectiontype"></a>

```json
"VERSION"
```

<h2 id="tocS_LambdaConflictHandlerConfig">LambdaConflictHandlerConfig</h2>
<!-- backwards compatibility -->
<a id="schemalambdaconflicthandlerconfig"></a>
<a id="schema_LambdaConflictHandlerConfig"></a>
<a id="tocSlambdaconflicthandlerconfig"></a>
<a id="tocslambdaconflicthandlerconfig"></a>

```json
{
  "lambdaConflictHandlerArn": {}
}
```

The <code>LambdaConflictHandlerConfig</code> object when configuring <code>LAMBDA</code> as the Conflict Handler.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lambdaConflictHandlerArn|object|false|none|none|

<h2 id="tocS_RuntimeName">RuntimeName</h2>
<!-- backwards compatibility -->
<a id="schemaruntimename"></a>
<a id="schema_RuntimeName"></a>
<a id="tocSruntimename"></a>
<a id="tocsruntimename"></a>

```json
"APPSYNC_JS"
```

<h2 id="tocS_CreateGraphqlApiResponse">CreateGraphqlApiResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreategraphqlapiresponse"></a>
<a id="schema_CreateGraphqlApiResponse"></a>
<a id="tocScreategraphqlapiresponse"></a>
<a id="tocscreategraphqlapiresponse"></a>

```json
{
  "graphqlApi": {
    "name": {},
    "apiId": {},
    "authenticationType": {},
    "logConfig": {
      "fieldLogLevel": {},
      "cloudWatchLogsRoleArn": {},
      "excludeVerboseContent": {}
    },
    "userPoolConfig": {
      "userPoolId": {},
      "awsRegion": {},
      "defaultAction": {},
      "appIdClientRegex": {}
    },
    "openIDConnectConfig": {
      "issuer": {},
      "clientId": {},
      "iatTTL": {},
      "authTTL": {}
    },
    "arn": {},
    "uris": {
      "property1": "string",
      "property2": "string"
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "additionalAuthenticationProviders": {},
    "xrayEnabled": {},
    "wafWebAclArn": {},
    "lambdaAuthorizerConfig": {
      "authorizerResultTtlInSeconds": {},
      "authorizerUri": {},
      "identityValidationExpression": {}
    },
    "dns": {
      "property1": "string",
      "property2": "string"
    },
    "visibility": {},
    "apiType": {},
    "mergedApiExecutionRoleArn": {},
    "owner": {},
    "ownerContact": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|graphqlApi|object|false|none|none|

<h2 id="tocS_FieldLogLevel">FieldLogLevel</h2>
<!-- backwards compatibility -->
<a id="schemafieldloglevel"></a>
<a id="schema_FieldLogLevel"></a>
<a id="tocSfieldloglevel"></a>
<a id="tocsfieldloglevel"></a>

```json
"NONE"
```

<h2 id="tocS_DefaultAction">DefaultAction</h2>
<!-- backwards compatibility -->
<a id="schemadefaultaction"></a>
<a id="schema_DefaultAction"></a>
<a id="tocSdefaultaction"></a>
<a id="tocsdefaultaction"></a>

```json
"ALLOW"
```

<h2 id="tocS_Long">Long</h2>
<!-- backwards compatibility -->
<a id="schemalong"></a>
<a id="schema_Long"></a>
<a id="tocSlong"></a>
<a id="tocslong"></a>

```json
0
```

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

The value for the tag.

<h2 id="tocS_AdditionalAuthenticationProvider">AdditionalAuthenticationProvider</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalauthenticationprovider"></a>
<a id="schema_AdditionalAuthenticationProvider"></a>
<a id="tocSadditionalauthenticationprovider"></a>
<a id="tocsadditionalauthenticationprovider"></a>

```json
{
  "authenticationType": {},
  "openIDConnectConfig": {
    "issuer": {},
    "clientId": {},
    "iatTTL": {},
    "authTTL": {}
  },
  "userPoolConfig": {
    "userPoolId": {},
    "awsRegion": {},
    "appIdClientRegex": {}
  },
  "lambdaAuthorizerConfig": {
    "authorizerResultTtlInSeconds": {},
    "authorizerUri": {},
    "identityValidationExpression": {}
  }
}
```

Describes an additional authentication provider.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authenticationType|object|false|none|none|
|openIDConnectConfig|object|false|none|none|
|userPoolConfig|object|false|none|none|
|lambdaAuthorizerConfig|object|false|none|none|

<h2 id="tocS_TTL">TTL</h2>
<!-- backwards compatibility -->
<a id="schemattl"></a>
<a id="schema_TTL"></a>
<a id="tocSttl"></a>
<a id="tocsttl"></a>

```json
0
```

<h2 id="tocS_ApiLimitExceededException">ApiLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaapilimitexceededexception"></a>
<a id="schema_ApiLimitExceededException"></a>
<a id="tocSapilimitexceededexception"></a>
<a id="tocsapilimitexceededexception"></a>

```json
null
```

<h2 id="tocS_CreateResolverResponse">CreateResolverResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateresolverresponse"></a>
<a id="schema_CreateResolverResponse"></a>
<a id="tocScreateresolverresponse"></a>
<a id="tocscreateresolverresponse"></a>

```json
{
  "resolver": {
    "typeName": {},
    "fieldName": {},
    "dataSourceName": {},
    "resolverArn": {},
    "requestMappingTemplate": {},
    "responseMappingTemplate": {},
    "kind": {},
    "pipelineConfig": {
      "functions": {}
    },
    "syncConfig": {
      "conflictHandler": {},
      "conflictDetection": {},
      "lambdaConflictHandlerConfig": {
        "lambdaConflictHandlerArn": {}
      }
    },
    "cachingConfig": {
      "ttl": {},
      "cachingKeys": {}
    },
    "maxBatchSize": {},
    "runtime": {
      "name": {},
      "runtimeVersion": {}
    },
    "code": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resolver|object|false|none|none|

<h2 id="tocS_FunctionsIds">FunctionsIds</h2>
<!-- backwards compatibility -->
<a id="schemafunctionsids"></a>
<a id="schema_FunctionsIds"></a>
<a id="tocSfunctionsids"></a>
<a id="tocsfunctionsids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_CachingKeys">CachingKeys</h2>
<!-- backwards compatibility -->
<a id="schemacachingkeys"></a>
<a id="schema_CachingKeys"></a>
<a id="tocScachingkeys"></a>
<a id="tocscachingkeys"></a>

```json
[
  "string"
]
```

<h2 id="tocS_CreateTypeResponse">CreateTypeResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatetyperesponse"></a>
<a id="schema_CreateTypeResponse"></a>
<a id="tocScreatetyperesponse"></a>
<a id="tocscreatetyperesponse"></a>

```json
{
  "type": {
    "name": {},
    "description": {},
    "arn": {},
    "definition": {},
    "format": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|false|none|none|

<h2 id="tocS_DeleteApiCacheResponse">DeleteApiCacheResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapicacheresponse"></a>
<a id="schema_DeleteApiCacheResponse"></a>
<a id="tocSdeleteapicacheresponse"></a>
<a id="tocsdeleteapicacheresponse"></a>

```json
{}
```

Represents the output of a <code>DeleteApiCache</code> operation.

<h2 id="tocS_DeleteApiKeyResponse">DeleteApiKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapikeyresponse"></a>
<a id="schema_DeleteApiKeyResponse"></a>
<a id="tocSdeleteapikeyresponse"></a>
<a id="tocsdeleteapikeyresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteDataSourceResponse">DeleteDataSourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedatasourceresponse"></a>
<a id="schema_DeleteDataSourceResponse"></a>
<a id="tocSdeletedatasourceresponse"></a>
<a id="tocsdeletedatasourceresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteDomainNameResponse">DeleteDomainNameResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedomainnameresponse"></a>
<a id="schema_DeleteDomainNameResponse"></a>
<a id="tocSdeletedomainnameresponse"></a>
<a id="tocsdeletedomainnameresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteFunctionResponse">DeleteFunctionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletefunctionresponse"></a>
<a id="schema_DeleteFunctionResponse"></a>
<a id="tocSdeletefunctionresponse"></a>
<a id="tocsdeletefunctionresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteGraphqlApiResponse">DeleteGraphqlApiResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletegraphqlapiresponse"></a>
<a id="schema_DeleteGraphqlApiResponse"></a>
<a id="tocSdeletegraphqlapiresponse"></a>
<a id="tocsdeletegraphqlapiresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteResolverResponse">DeleteResolverResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresolverresponse"></a>
<a id="schema_DeleteResolverResponse"></a>
<a id="tocSdeleteresolverresponse"></a>
<a id="tocsdeleteresolverresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteTypeResponse">DeleteTypeResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletetyperesponse"></a>
<a id="schema_DeleteTypeResponse"></a>
<a id="tocSdeletetyperesponse"></a>
<a id="tocsdeletetyperesponse"></a>

```json
{}
```

<h2 id="tocS_DisassociateApiResponse">DisassociateApiResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateapiresponse"></a>
<a id="schema_DisassociateApiResponse"></a>
<a id="tocSdisassociateapiresponse"></a>
<a id="tocsdisassociateapiresponse"></a>

```json
{}
```

<h2 id="tocS_DisassociateMergedGraphqlApiResponse">DisassociateMergedGraphqlApiResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatemergedgraphqlapiresponse"></a>
<a id="schema_DisassociateMergedGraphqlApiResponse"></a>
<a id="tocSdisassociatemergedgraphqlapiresponse"></a>
<a id="tocsdisassociatemergedgraphqlapiresponse"></a>

```json
{
  "sourceApiAssociationStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceApiAssociationStatus|object|false|none|none|

<h2 id="tocS_DisassociateSourceGraphqlApiResponse">DisassociateSourceGraphqlApiResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatesourcegraphqlapiresponse"></a>
<a id="schema_DisassociateSourceGraphqlApiResponse"></a>
<a id="tocSdisassociatesourcegraphqlapiresponse"></a>
<a id="tocsdisassociatesourcegraphqlapiresponse"></a>

```json
{
  "sourceApiAssociationStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceApiAssociationStatus|object|false|none|none|

<h2 id="tocS_EvaluateCodeResponse">EvaluateCodeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaevaluatecoderesponse"></a>
<a id="schema_EvaluateCodeResponse"></a>
<a id="tocSevaluatecoderesponse"></a>
<a id="tocsevaluatecoderesponse"></a>

```json
{
  "evaluationResult": {},
  "error": {
    "message": {},
    "codeErrors": {}
  },
  "logs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evaluationResult|object|false|none|none|
|error|object|false|none|none|
|logs|object|false|none|none|

<h2 id="tocS_EvaluateMappingTemplateResponse">EvaluateMappingTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaevaluatemappingtemplateresponse"></a>
<a id="schema_EvaluateMappingTemplateResponse"></a>
<a id="tocSevaluatemappingtemplateresponse"></a>
<a id="tocsevaluatemappingtemplateresponse"></a>

```json
{
  "evaluationResult": {},
  "error": {
    "message": {}
  },
  "logs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evaluationResult|object|false|none|none|
|error|object|false|none|none|
|logs|object|false|none|none|

<h2 id="tocS_FlushApiCacheResponse">FlushApiCacheResponse</h2>
<!-- backwards compatibility -->
<a id="schemaflushapicacheresponse"></a>
<a id="schema_FlushApiCacheResponse"></a>
<a id="tocSflushapicacheresponse"></a>
<a id="tocsflushapicacheresponse"></a>

```json
{}
```

Represents the output of a <code>FlushApiCache</code> operation.

<h2 id="tocS_GetApiAssociationResponse">GetApiAssociationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetapiassociationresponse"></a>
<a id="schema_GetApiAssociationResponse"></a>
<a id="tocSgetapiassociationresponse"></a>
<a id="tocsgetapiassociationresponse"></a>

```json
{
  "apiAssociation": {
    "domainName": {},
    "apiId": {},
    "associationStatus": {},
    "deploymentDetail": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiAssociation|object|false|none|none|

<h2 id="tocS_GetApiCacheResponse">GetApiCacheResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetapicacheresponse"></a>
<a id="schema_GetApiCacheResponse"></a>
<a id="tocSgetapicacheresponse"></a>
<a id="tocsgetapicacheresponse"></a>

```json
{
  "apiCache": {
    "ttl": {},
    "apiCachingBehavior": {},
    "transitEncryptionEnabled": {},
    "atRestEncryptionEnabled": {},
    "type": {},
    "status": {}
  }
}
```

Represents the output of a <code>GetApiCache</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiCache|object|false|none|none|

<h2 id="tocS_GetDataSourceResponse">GetDataSourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdatasourceresponse"></a>
<a id="schema_GetDataSourceResponse"></a>
<a id="tocSgetdatasourceresponse"></a>
<a id="tocsgetdatasourceresponse"></a>

```json
{
  "dataSource": {
    "dataSourceArn": {},
    "name": {},
    "description": {},
    "type": {},
    "serviceRoleArn": {},
    "dynamodbConfig": {
      "tableName": {},
      "awsRegion": {},
      "useCallerCredentials": {},
      "deltaSyncConfig": {
        "baseTableTTL": {},
        "deltaSyncTableName": {},
        "deltaSyncTableTTL": {}
      },
      "versioned": {}
    },
    "lambdaConfig": {
      "lambdaFunctionArn": {}
    },
    "elasticsearchConfig": {
      "endpoint": {},
      "awsRegion": {}
    },
    "openSearchServiceConfig": {
      "endpoint": {},
      "awsRegion": {}
    },
    "httpConfig": {
      "endpoint": {},
      "authorizationConfig": {
        "authorizationType": {},
        "awsIamConfig": {
          "signingRegion": {},
          "signingServiceName": {}
        }
      }
    },
    "relationalDatabaseConfig": {
      "relationalDatabaseSourceType": {},
      "rdsHttpEndpointConfig": {
        "awsRegion": {},
        "dbClusterIdentifier": {},
        "databaseName": {},
        "schema": {},
        "awsSecretStoreArn": {}
      }
    },
    "eventBridgeConfig": {
      "eventBusArn": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataSource|object|false|none|none|

<h2 id="tocS_GetDomainNameResponse">GetDomainNameResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdomainnameresponse"></a>
<a id="schema_GetDomainNameResponse"></a>
<a id="tocSgetdomainnameresponse"></a>
<a id="tocsgetdomainnameresponse"></a>

```json
{
  "domainNameConfig": {
    "domainName": {},
    "description": {},
    "certificateArn": {},
    "appsyncDomainName": {},
    "hostedZoneId": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainNameConfig|object|false|none|none|

<h2 id="tocS_GetFunctionResponse">GetFunctionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetfunctionresponse"></a>
<a id="schema_GetFunctionResponse"></a>
<a id="tocSgetfunctionresponse"></a>
<a id="tocsgetfunctionresponse"></a>

```json
{
  "functionConfiguration": {
    "functionId": {},
    "functionArn": {},
    "name": {},
    "description": {},
    "dataSourceName": {},
    "requestMappingTemplate": {},
    "responseMappingTemplate": {},
    "functionVersion": {},
    "syncConfig": {
      "conflictHandler": {},
      "conflictDetection": {},
      "lambdaConflictHandlerConfig": {
        "lambdaConflictHandlerArn": {}
      }
    },
    "maxBatchSize": {},
    "runtime": {
      "name": {},
      "runtimeVersion": {}
    },
    "code": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|functionConfiguration|object|false|none|none|

<h2 id="tocS_GetGraphqlApiResponse">GetGraphqlApiResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetgraphqlapiresponse"></a>
<a id="schema_GetGraphqlApiResponse"></a>
<a id="tocSgetgraphqlapiresponse"></a>
<a id="tocsgetgraphqlapiresponse"></a>

```json
{
  "graphqlApi": {
    "name": {},
    "apiId": {},
    "authenticationType": {},
    "logConfig": {
      "fieldLogLevel": {},
      "cloudWatchLogsRoleArn": {},
      "excludeVerboseContent": {}
    },
    "userPoolConfig": {
      "userPoolId": {},
      "awsRegion": {},
      "defaultAction": {},
      "appIdClientRegex": {}
    },
    "openIDConnectConfig": {
      "issuer": {},
      "clientId": {},
      "iatTTL": {},
      "authTTL": {}
    },
    "arn": {},
    "uris": {
      "property1": "string",
      "property2": "string"
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "additionalAuthenticationProviders": {},
    "xrayEnabled": {},
    "wafWebAclArn": {},
    "lambdaAuthorizerConfig": {
      "authorizerResultTtlInSeconds": {},
      "authorizerUri": {},
      "identityValidationExpression": {}
    },
    "dns": {
      "property1": "string",
      "property2": "string"
    },
    "visibility": {},
    "apiType": {},
    "mergedApiExecutionRoleArn": {},
    "owner": {},
    "ownerContact": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|graphqlApi|object|false|none|none|

<h2 id="tocS_GetIntrospectionSchemaResponse">GetIntrospectionSchemaResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetintrospectionschemaresponse"></a>
<a id="schema_GetIntrospectionSchemaResponse"></a>
<a id="tocSgetintrospectionschemaresponse"></a>
<a id="tocsgetintrospectionschemaresponse"></a>

```json
{
  "schema": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schema|object|false|none|none|

<h2 id="tocS_GraphQLSchemaException">GraphQLSchemaException</h2>
<!-- backwards compatibility -->
<a id="schemagraphqlschemaexception"></a>
<a id="schema_GraphQLSchemaException"></a>
<a id="tocSgraphqlschemaexception"></a>
<a id="tocsgraphqlschemaexception"></a>

```json
null
```

<h2 id="tocS_GetResolverResponse">GetResolverResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetresolverresponse"></a>
<a id="schema_GetResolverResponse"></a>
<a id="tocSgetresolverresponse"></a>
<a id="tocsgetresolverresponse"></a>

```json
{
  "resolver": {
    "typeName": {},
    "fieldName": {},
    "dataSourceName": {},
    "resolverArn": {},
    "requestMappingTemplate": {},
    "responseMappingTemplate": {},
    "kind": {},
    "pipelineConfig": {
      "functions": {}
    },
    "syncConfig": {
      "conflictHandler": {},
      "conflictDetection": {},
      "lambdaConflictHandlerConfig": {
        "lambdaConflictHandlerArn": {}
      }
    },
    "cachingConfig": {
      "ttl": {},
      "cachingKeys": {}
    },
    "maxBatchSize": {},
    "runtime": {
      "name": {},
      "runtimeVersion": {}
    },
    "code": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resolver|object|false|none|none|

<h2 id="tocS_GetSchemaCreationStatusResponse">GetSchemaCreationStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetschemacreationstatusresponse"></a>
<a id="schema_GetSchemaCreationStatusResponse"></a>
<a id="tocSgetschemacreationstatusresponse"></a>
<a id="tocsgetschemacreationstatusresponse"></a>

```json
{
  "status": {},
  "details": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|false|none|none|
|details|object|false|none|none|

<h2 id="tocS_GetSourceApiAssociationResponse">GetSourceApiAssociationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsourceapiassociationresponse"></a>
<a id="schema_GetSourceApiAssociationResponse"></a>
<a id="tocSgetsourceapiassociationresponse"></a>
<a id="tocsgetsourceapiassociationresponse"></a>

```json
{
  "sourceApiAssociation": {
    "associationId": {},
    "associationArn": {},
    "sourceApiId": {},
    "sourceApiArn": {},
    "mergedApiArn": {},
    "mergedApiId": {},
    "description": {},
    "sourceApiAssociationConfig": {
      "mergeType": {}
    },
    "sourceApiAssociationStatus": {},
    "sourceApiAssociationStatusDetail": {},
    "lastSuccessfulMergeDate": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceApiAssociation|object|false|none|none|

<h2 id="tocS_GetTypeResponse">GetTypeResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettyperesponse"></a>
<a id="schema_GetTypeResponse"></a>
<a id="tocSgettyperesponse"></a>
<a id="tocsgettyperesponse"></a>

```json
{
  "type": {
    "name": {},
    "description": {},
    "arn": {},
    "definition": {},
    "format": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|false|none|none|

<h2 id="tocS_ListApiKeysResponse">ListApiKeysResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistapikeysresponse"></a>
<a id="schema_ListApiKeysResponse"></a>
<a id="tocSlistapikeysresponse"></a>
<a id="tocslistapikeysresponse"></a>

```json
{
  "apiKeys": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKeys|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListDataSourcesResponse">ListDataSourcesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasourcesresponse"></a>
<a id="schema_ListDataSourcesResponse"></a>
<a id="tocSlistdatasourcesresponse"></a>
<a id="tocslistdatasourcesresponse"></a>

```json
{
  "dataSources": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataSources|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListDomainNamesResponse">ListDomainNamesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdomainnamesresponse"></a>
<a id="schema_ListDomainNamesResponse"></a>
<a id="tocSlistdomainnamesresponse"></a>
<a id="tocslistdomainnamesresponse"></a>

```json
{
  "domainNameConfigs": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainNameConfigs|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListFunctionsResponse">ListFunctionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfunctionsresponse"></a>
<a id="schema_ListFunctionsResponse"></a>
<a id="tocSlistfunctionsresponse"></a>
<a id="tocslistfunctionsresponse"></a>

```json
{
  "functions": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|functions|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListGraphqlApisResponse">ListGraphqlApisResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistgraphqlapisresponse"></a>
<a id="schema_ListGraphqlApisResponse"></a>
<a id="tocSlistgraphqlapisresponse"></a>
<a id="tocslistgraphqlapisresponse"></a>

```json
{
  "graphqlApis": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|graphqlApis|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListResolversResponse">ListResolversResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistresolversresponse"></a>
<a id="schema_ListResolversResponse"></a>
<a id="tocSlistresolversresponse"></a>
<a id="tocslistresolversresponse"></a>

```json
{
  "resolvers": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resolvers|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListResolversByFunctionResponse">ListResolversByFunctionResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistresolversbyfunctionresponse"></a>
<a id="schema_ListResolversByFunctionResponse"></a>
<a id="tocSlistresolversbyfunctionresponse"></a>
<a id="tocslistresolversbyfunctionresponse"></a>

```json
{
  "resolvers": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resolvers|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListSourceApiAssociationsResponse">ListSourceApiAssociationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsourceapiassociationsresponse"></a>
<a id="schema_ListSourceApiAssociationsResponse"></a>
<a id="tocSlistsourceapiassociationsresponse"></a>
<a id="tocslistsourceapiassociationsresponse"></a>

```json
{
  "sourceApiAssociationSummaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceApiAssociationSummaries|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|false|none|none|

<h2 id="tocS_ListTypesResponse">ListTypesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttypesresponse"></a>
<a id="schema_ListTypesResponse"></a>
<a id="tocSlisttypesresponse"></a>
<a id="tocslisttypesresponse"></a>

```json
{
  "types": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|types|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListTypesByAssociationResponse">ListTypesByAssociationResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttypesbyassociationresponse"></a>
<a id="schema_ListTypesByAssociationResponse"></a>
<a id="tocSlisttypesbyassociationresponse"></a>
<a id="tocslisttypesbyassociationresponse"></a>

```json
{
  "types": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|types|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_StartSchemaCreationResponse">StartSchemaCreationResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartschemacreationresponse"></a>
<a id="schema_StartSchemaCreationResponse"></a>
<a id="tocSstartschemacreationresponse"></a>
<a id="tocsstartschemacreationresponse"></a>

```json
{
  "status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|false|none|none|

<h2 id="tocS_StartSchemaMergeResponse">StartSchemaMergeResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartschemamergeresponse"></a>
<a id="schema_StartSchemaMergeResponse"></a>
<a id="tocSstartschemamergeresponse"></a>
<a id="tocsstartschemamergeresponse"></a>

```json
{
  "sourceApiAssociationStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceApiAssociationStatus|object|false|none|none|

<h2 id="tocS_TagResourceResponse">TagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresponse"></a>
<a id="schema_TagResourceResponse"></a>
<a id="tocStagresourceresponse"></a>
<a id="tocstagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_UntagResourceResponse">UntagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceresponse"></a>
<a id="schema_UntagResourceResponse"></a>
<a id="tocSuntagresourceresponse"></a>
<a id="tocsuntagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
```

The key for the tag.

<h2 id="tocS_UpdateApiCacheResponse">UpdateApiCacheResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapicacheresponse"></a>
<a id="schema_UpdateApiCacheResponse"></a>
<a id="tocSupdateapicacheresponse"></a>
<a id="tocsupdateapicacheresponse"></a>

```json
{
  "apiCache": {
    "ttl": {},
    "apiCachingBehavior": {},
    "transitEncryptionEnabled": {},
    "atRestEncryptionEnabled": {},
    "type": {},
    "status": {}
  }
}
```

Represents the output of a <code>UpdateApiCache</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiCache|object|false|none|none|

<h2 id="tocS_UpdateApiKeyResponse">UpdateApiKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapikeyresponse"></a>
<a id="schema_UpdateApiKeyResponse"></a>
<a id="tocSupdateapikeyresponse"></a>
<a id="tocsupdateapikeyresponse"></a>

```json
{
  "apiKey": {
    "id": {},
    "description": {},
    "expires": {},
    "deletes": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKey|object|false|none|none|

<h2 id="tocS_UpdateDataSourceResponse">UpdateDataSourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedatasourceresponse"></a>
<a id="schema_UpdateDataSourceResponse"></a>
<a id="tocSupdatedatasourceresponse"></a>
<a id="tocsupdatedatasourceresponse"></a>

```json
{
  "dataSource": {
    "dataSourceArn": {},
    "name": {},
    "description": {},
    "type": {},
    "serviceRoleArn": {},
    "dynamodbConfig": {
      "tableName": {},
      "awsRegion": {},
      "useCallerCredentials": {},
      "deltaSyncConfig": {
        "baseTableTTL": {},
        "deltaSyncTableName": {},
        "deltaSyncTableTTL": {}
      },
      "versioned": {}
    },
    "lambdaConfig": {
      "lambdaFunctionArn": {}
    },
    "elasticsearchConfig": {
      "endpoint": {},
      "awsRegion": {}
    },
    "openSearchServiceConfig": {
      "endpoint": {},
      "awsRegion": {}
    },
    "httpConfig": {
      "endpoint": {},
      "authorizationConfig": {
        "authorizationType": {},
        "awsIamConfig": {
          "signingRegion": {},
          "signingServiceName": {}
        }
      }
    },
    "relationalDatabaseConfig": {
      "relationalDatabaseSourceType": {},
      "rdsHttpEndpointConfig": {
        "awsRegion": {},
        "dbClusterIdentifier": {},
        "databaseName": {},
        "schema": {},
        "awsSecretStoreArn": {}
      }
    },
    "eventBridgeConfig": {
      "eventBusArn": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataSource|object|false|none|none|

<h2 id="tocS_UpdateDomainNameResponse">UpdateDomainNameResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedomainnameresponse"></a>
<a id="schema_UpdateDomainNameResponse"></a>
<a id="tocSupdatedomainnameresponse"></a>
<a id="tocsupdatedomainnameresponse"></a>

```json
{
  "domainNameConfig": {
    "domainName": {},
    "description": {},
    "certificateArn": {},
    "appsyncDomainName": {},
    "hostedZoneId": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainNameConfig|object|false|none|none|

<h2 id="tocS_UpdateFunctionResponse">UpdateFunctionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefunctionresponse"></a>
<a id="schema_UpdateFunctionResponse"></a>
<a id="tocSupdatefunctionresponse"></a>
<a id="tocsupdatefunctionresponse"></a>

```json
{
  "functionConfiguration": {
    "functionId": {},
    "functionArn": {},
    "name": {},
    "description": {},
    "dataSourceName": {},
    "requestMappingTemplate": {},
    "responseMappingTemplate": {},
    "functionVersion": {},
    "syncConfig": {
      "conflictHandler": {},
      "conflictDetection": {},
      "lambdaConflictHandlerConfig": {
        "lambdaConflictHandlerArn": {}
      }
    },
    "maxBatchSize": {},
    "runtime": {
      "name": {},
      "runtimeVersion": {}
    },
    "code": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|functionConfiguration|object|false|none|none|

<h2 id="tocS_UpdateGraphqlApiResponse">UpdateGraphqlApiResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdategraphqlapiresponse"></a>
<a id="schema_UpdateGraphqlApiResponse"></a>
<a id="tocSupdategraphqlapiresponse"></a>
<a id="tocsupdategraphqlapiresponse"></a>

```json
{
  "graphqlApi": {
    "name": {},
    "apiId": {},
    "authenticationType": {},
    "logConfig": {
      "fieldLogLevel": {},
      "cloudWatchLogsRoleArn": {},
      "excludeVerboseContent": {}
    },
    "userPoolConfig": {
      "userPoolId": {},
      "awsRegion": {},
      "defaultAction": {},
      "appIdClientRegex": {}
    },
    "openIDConnectConfig": {
      "issuer": {},
      "clientId": {},
      "iatTTL": {},
      "authTTL": {}
    },
    "arn": {},
    "uris": {
      "property1": "string",
      "property2": "string"
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "additionalAuthenticationProviders": {},
    "xrayEnabled": {},
    "wafWebAclArn": {},
    "lambdaAuthorizerConfig": {
      "authorizerResultTtlInSeconds": {},
      "authorizerUri": {},
      "identityValidationExpression": {}
    },
    "dns": {
      "property1": "string",
      "property2": "string"
    },
    "visibility": {},
    "apiType": {},
    "mergedApiExecutionRoleArn": {},
    "owner": {},
    "ownerContact": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|graphqlApi|object|false|none|none|

<h2 id="tocS_UpdateResolverResponse">UpdateResolverResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresolverresponse"></a>
<a id="schema_UpdateResolverResponse"></a>
<a id="tocSupdateresolverresponse"></a>
<a id="tocsupdateresolverresponse"></a>

```json
{
  "resolver": {
    "typeName": {},
    "fieldName": {},
    "dataSourceName": {},
    "resolverArn": {},
    "requestMappingTemplate": {},
    "responseMappingTemplate": {},
    "kind": {},
    "pipelineConfig": {
      "functions": {}
    },
    "syncConfig": {
      "conflictHandler": {},
      "conflictDetection": {},
      "lambdaConflictHandlerConfig": {
        "lambdaConflictHandlerArn": {}
      }
    },
    "cachingConfig": {
      "ttl": {},
      "cachingKeys": {}
    },
    "maxBatchSize": {},
    "runtime": {
      "name": {},
      "runtimeVersion": {}
    },
    "code": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resolver|object|false|none|none|

<h2 id="tocS_UpdateSourceApiAssociationResponse">UpdateSourceApiAssociationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesourceapiassociationresponse"></a>
<a id="schema_UpdateSourceApiAssociationResponse"></a>
<a id="tocSupdatesourceapiassociationresponse"></a>
<a id="tocsupdatesourceapiassociationresponse"></a>

```json
{
  "sourceApiAssociation": {
    "associationId": {},
    "associationArn": {},
    "sourceApiId": {},
    "sourceApiArn": {},
    "mergedApiArn": {},
    "mergedApiId": {},
    "description": {},
    "sourceApiAssociationConfig": {
      "mergeType": {}
    },
    "sourceApiAssociationStatus": {},
    "sourceApiAssociationStatusDetail": {},
    "lastSuccessfulMergeDate": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceApiAssociation|object|false|none|none|

<h2 id="tocS_UpdateTypeResponse">UpdateTypeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetyperesponse"></a>
<a id="schema_UpdateTypeResponse"></a>
<a id="tocSupdatetyperesponse"></a>
<a id="tocsupdatetyperesponse"></a>

```json
{
  "type": {
    "name": {},
    "description": {},
    "arn": {},
    "definition": {},
    "format": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|false|none|none|

<h2 id="tocS_AuthenticationType">AuthenticationType</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationtype"></a>
<a id="schema_AuthenticationType"></a>
<a id="tocSauthenticationtype"></a>
<a id="tocsauthenticationtype"></a>

```json
"API_KEY"
```

<h2 id="tocS_OpenIDConnectConfig">OpenIDConnectConfig</h2>
<!-- backwards compatibility -->
<a id="schemaopenidconnectconfig"></a>
<a id="schema_OpenIDConnectConfig"></a>
<a id="tocSopenidconnectconfig"></a>
<a id="tocsopenidconnectconfig"></a>

```json
{
  "issuer": {},
  "clientId": {},
  "iatTTL": {},
  "authTTL": {}
}
```

Describes an OpenID Connect (OIDC) configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issuer|object|true|none|none|
|clientId|object|false|none|none|
|iatTTL|object|false|none|none|
|authTTL|object|false|none|none|

<h2 id="tocS_CognitoUserPoolConfig">CognitoUserPoolConfig</h2>
<!-- backwards compatibility -->
<a id="schemacognitouserpoolconfig"></a>
<a id="schema_CognitoUserPoolConfig"></a>
<a id="tocScognitouserpoolconfig"></a>
<a id="tocscognitouserpoolconfig"></a>

```json
{
  "userPoolId": {},
  "awsRegion": {},
  "appIdClientRegex": {}
}
```

Describes an Amazon Cognito user pool configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userPoolId|object|true|none|none|
|awsRegion|object|true|none|none|
|appIdClientRegex|object|false|none|none|

<h2 id="tocS_LambdaAuthorizerConfig">LambdaAuthorizerConfig</h2>
<!-- backwards compatibility -->
<a id="schemalambdaauthorizerconfig"></a>
<a id="schema_LambdaAuthorizerConfig"></a>
<a id="tocSlambdaauthorizerconfig"></a>
<a id="tocslambdaauthorizerconfig"></a>

```json
{
  "authorizerResultTtlInSeconds": {},
  "authorizerUri": {},
  "identityValidationExpression": {}
}
```

A <code>LambdaAuthorizerConfig</code> specifies how to authorize AppSync API access when using the <code>AWS_LAMBDA</code> authorizer mode. Be aware that an AppSync API can have only one Lambda authorizer configured at a time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorizerResultTtlInSeconds|object|false|none|none|
|authorizerUri|object|true|none|none|
|identityValidationExpression|object|false|none|none|

<h2 id="tocS_AdditionalAuthenticationProviders">AdditionalAuthenticationProviders</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalauthenticationproviders"></a>
<a id="schema_AdditionalAuthenticationProviders"></a>
<a id="tocSadditionalauthenticationproviders"></a>
<a id="tocsadditionalauthenticationproviders"></a>

```json
[
  {
    "authenticationType": {},
    "openIDConnectConfig": {
      "issuer": {},
      "clientId": {},
      "iatTTL": {},
      "authTTL": {}
    },
    "userPoolConfig": {
      "userPoolId": {},
      "awsRegion": {},
      "appIdClientRegex": {}
    },
    "lambdaAuthorizerConfig": {
      "authorizerResultTtlInSeconds": {},
      "authorizerUri": {},
      "identityValidationExpression": {}
    }
  }
]
```

<h2 id="tocS_DomainName">DomainName</h2>
<!-- backwards compatibility -->
<a id="schemadomainname"></a>
<a id="schema_DomainName"></a>
<a id="tocSdomainname"></a>
<a id="tocsdomainname"></a>

```json
"string"
```

<h2 id="tocS_AssociationStatus">AssociationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaassociationstatus"></a>
<a id="schema_AssociationStatus"></a>
<a id="tocSassociationstatus"></a>
<a id="tocsassociationstatus"></a>

```json
"PROCESSING"
```

<h2 id="tocS_ApiAssociation">ApiAssociation</h2>
<!-- backwards compatibility -->
<a id="schemaapiassociation"></a>
<a id="schema_ApiAssociation"></a>
<a id="tocSapiassociation"></a>
<a id="tocsapiassociation"></a>

```json
{
  "domainName": {},
  "apiId": {},
  "associationStatus": {},
  "deploymentDetail": {}
}
```

Describes an <code>ApiAssociation</code> object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainName|object|false|none|none|
|apiId|object|false|none|none|
|associationStatus|object|false|none|none|
|deploymentDetail|object|false|none|none|

<h2 id="tocS_ApiCachingBehavior">ApiCachingBehavior</h2>
<!-- backwards compatibility -->
<a id="schemaapicachingbehavior"></a>
<a id="schema_ApiCachingBehavior"></a>
<a id="tocSapicachingbehavior"></a>
<a id="tocsapicachingbehavior"></a>

```json
"FULL_REQUEST_CACHING"
```

<h2 id="tocS_ApiCacheType">ApiCacheType</h2>
<!-- backwards compatibility -->
<a id="schemaapicachetype"></a>
<a id="schema_ApiCacheType"></a>
<a id="tocSapicachetype"></a>
<a id="tocsapicachetype"></a>

```json
"T2_SMALL"
```

<h2 id="tocS_ApiCacheStatus">ApiCacheStatus</h2>
<!-- backwards compatibility -->
<a id="schemaapicachestatus"></a>
<a id="schema_ApiCacheStatus"></a>
<a id="tocSapicachestatus"></a>
<a id="tocsapicachestatus"></a>

```json
"AVAILABLE"
```

<h2 id="tocS_ApiCache">ApiCache</h2>
<!-- backwards compatibility -->
<a id="schemaapicache"></a>
<a id="schema_ApiCache"></a>
<a id="tocSapicache"></a>
<a id="tocsapicache"></a>

```json
{
  "ttl": {},
  "apiCachingBehavior": {},
  "transitEncryptionEnabled": {},
  "atRestEncryptionEnabled": {},
  "type": {},
  "status": {}
}
```

The <code>ApiCache</code> object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ttl|object|false|none|none|
|apiCachingBehavior|object|false|none|none|
|transitEncryptionEnabled|object|false|none|none|
|atRestEncryptionEnabled|object|false|none|none|
|type|object|false|none|none|
|status|object|false|none|none|

<h2 id="tocS_ApiKey">ApiKey</h2>
<!-- backwards compatibility -->
<a id="schemaapikey"></a>
<a id="schema_ApiKey"></a>
<a id="tocSapikey"></a>
<a id="tocsapikey"></a>

```json
{
  "id": {},
  "description": {},
  "expires": {},
  "deletes": {}
}
```

<p>Describes an API key.</p> <p>Customers invoke AppSync GraphQL API operations with API keys as an identity mechanism. There are two key versions:</p> <p> <b>da1</b>: We introduced this version at launch in November 2017. These keys always expire after 7 days. Amazon DynamoDB TTL manages key expiration. These keys ceased to be valid after February 21, 2018, and they should no longer be used.</p> <ul> <li> <p> <code>ListApiKeys</code> returns the expiration time in milliseconds.</p> </li> <li> <p> <code>CreateApiKey</code> returns the expiration time in milliseconds.</p> </li> <li> <p> <code>UpdateApiKey</code> is not available for this key version.</p> </li> <li> <p> <code>DeleteApiKey</code> deletes the item from the table.</p> </li> <li> <p>Expiration is stored in DynamoDB as milliseconds. This results in a bug where keys are not automatically deleted because DynamoDB expects the TTL to be stored in seconds. As a one-time action, we deleted these keys from the table on February 21, 2018.</p> </li> </ul> <p> <b>da2</b>: We introduced this version in February 2018 when AppSync added support to extend key expiration.</p> <ul> <li> <p> <code>ListApiKeys</code> returns the expiration time and deletion time in seconds.</p> </li> <li> <p> <code>CreateApiKey</code> returns the expiration time and deletion time in seconds and accepts a user-provided expiration time in seconds.</p> </li> <li> <p> <code>UpdateApiKey</code> returns the expiration time and and deletion time in seconds and accepts a user-provided expiration time in seconds. Expired API keys are kept for 60 days after the expiration time. You can update the key expiration time as long as the key isn't deleted.</p> </li> <li> <p> <code>DeleteApiKey</code> deletes the item from the table.</p> </li> <li> <p>Expiration is stored in DynamoDB as seconds. After the expiration time, using the key to authenticate will fail. However, you can reinstate the key before deletion.</p> </li> <li> <p>Deletion is stored in DynamoDB as seconds. The key is deleted after deletion time.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|description|object|false|none|none|
|expires|object|false|none|none|
|deletes|object|false|none|none|

<h2 id="tocS_ApiKeys">ApiKeys</h2>
<!-- backwards compatibility -->
<a id="schemaapikeys"></a>
<a id="schema_ApiKeys"></a>
<a id="tocSapikeys"></a>
<a id="tocsapikeys"></a>

```json
[
  {
    "id": {},
    "description": {},
    "expires": {},
    "deletes": {}
  }
]
```

<h2 id="tocS_AppSyncRuntime">AppSyncRuntime</h2>
<!-- backwards compatibility -->
<a id="schemaappsyncruntime"></a>
<a id="schema_AppSyncRuntime"></a>
<a id="tocSappsyncruntime"></a>
<a id="tocsappsyncruntime"></a>

```json
{
  "name": {},
  "runtimeVersion": {}
}
```

Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|runtimeVersion|object|true|none|none|

<h2 id="tocS_AssociateApiRequest">AssociateApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociateapirequest"></a>
<a id="schema_AssociateApiRequest"></a>
<a id="tocSassociateapirequest"></a>
<a id="tocsassociateapirequest"></a>

```json
{
  "apiId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiId|object|true|none|none|

<h2 id="tocS_SourceApiAssociationConfig">SourceApiAssociationConfig</h2>
<!-- backwards compatibility -->
<a id="schemasourceapiassociationconfig"></a>
<a id="schema_SourceApiAssociationConfig"></a>
<a id="tocSsourceapiassociationconfig"></a>
<a id="tocssourceapiassociationconfig"></a>

```json
{
  "mergeType": {}
}
```

Describes properties used to specify configurations related to a source API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mergeType|object|false|none|none|

<h2 id="tocS_AssociateMergedGraphqlApiRequest">AssociateMergedGraphqlApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatemergedgraphqlapirequest"></a>
<a id="schema_AssociateMergedGraphqlApiRequest"></a>
<a id="tocSassociatemergedgraphqlapirequest"></a>
<a id="tocsassociatemergedgraphqlapirequest"></a>

```json
{
  "mergedApiIdentifier": {},
  "description": {},
  "sourceApiAssociationConfig": {
    "mergeType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mergedApiIdentifier|object|true|none|none|
|description|object|false|none|none|
|sourceApiAssociationConfig|object|false|none|none|

<h2 id="tocS_SourceApiAssociation">SourceApiAssociation</h2>
<!-- backwards compatibility -->
<a id="schemasourceapiassociation"></a>
<a id="schema_SourceApiAssociation"></a>
<a id="tocSsourceapiassociation"></a>
<a id="tocssourceapiassociation"></a>

```json
{
  "associationId": {},
  "associationArn": {},
  "sourceApiId": {},
  "sourceApiArn": {},
  "mergedApiArn": {},
  "mergedApiId": {},
  "description": {},
  "sourceApiAssociationConfig": {
    "mergeType": {}
  },
  "sourceApiAssociationStatus": {},
  "sourceApiAssociationStatusDetail": {},
  "lastSuccessfulMergeDate": {}
}
```

<p>Describes the configuration of a source API. A source API is a GraphQL API that is linked to a merged API. There can be multiple source APIs attached to each merged API. When linked to a merged API, the source API's schema, data sources, and resolvers will be combined with other linked source API data to form a new, singular API. </p> <p>Source APIs can originate from your account or from other accounts via Amazon Web Services Resource Access Manager. For more information about sharing resources from other accounts, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/what-is.html">What is Amazon Web Services Resource Access Manager?</a> in the <i>Amazon Web Services Resource Access Manager</i> guide.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associationId|object|false|none|none|
|associationArn|object|false|none|none|
|sourceApiId|object|false|none|none|
|sourceApiArn|object|false|none|none|
|mergedApiArn|object|false|none|none|
|mergedApiId|object|false|none|none|
|description|object|false|none|none|
|sourceApiAssociationConfig|object|false|none|none|
|sourceApiAssociationStatus|object|false|none|none|
|sourceApiAssociationStatusDetail|object|false|none|none|
|lastSuccessfulMergeDate|object|false|none|none|

<h2 id="tocS_AssociateSourceGraphqlApiRequest">AssociateSourceGraphqlApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatesourcegraphqlapirequest"></a>
<a id="schema_AssociateSourceGraphqlApiRequest"></a>
<a id="tocSassociatesourcegraphqlapirequest"></a>
<a id="tocsassociatesourcegraphqlapirequest"></a>

```json
{
  "sourceApiIdentifier": {},
  "description": {},
  "sourceApiAssociationConfig": {
    "mergeType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceApiIdentifier|object|true|none|none|
|description|object|false|none|none|
|sourceApiAssociationConfig|object|false|none|none|

<h2 id="tocS_AuthorizationType">AuthorizationType</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizationtype"></a>
<a id="schema_AuthorizationType"></a>
<a id="tocSauthorizationtype"></a>
<a id="tocsauthorizationtype"></a>

```json
"AWS_IAM"
```

<h2 id="tocS_AwsIamConfig">AwsIamConfig</h2>
<!-- backwards compatibility -->
<a id="schemaawsiamconfig"></a>
<a id="schema_AwsIamConfig"></a>
<a id="tocSawsiamconfig"></a>
<a id="tocsawsiamconfig"></a>

```json
{
  "signingRegion": {},
  "signingServiceName": {}
}
```

The Identity and Access Management (IAM) configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|signingRegion|object|false|none|none|
|signingServiceName|object|false|none|none|

<h2 id="tocS_Blob">Blob</h2>
<!-- backwards compatibility -->
<a id="schemablob"></a>
<a id="schema_Blob"></a>
<a id="tocSblob"></a>
<a id="tocsblob"></a>

```json
"string"
```

<h2 id="tocS_BooleanValue">BooleanValue</h2>
<!-- backwards compatibility -->
<a id="schemabooleanvalue"></a>
<a id="schema_BooleanValue"></a>
<a id="tocSbooleanvalue"></a>
<a id="tocsbooleanvalue"></a>

```json
true
```

<h2 id="tocS_CachingConfig">CachingConfig</h2>
<!-- backwards compatibility -->
<a id="schemacachingconfig"></a>
<a id="schema_CachingConfig"></a>
<a id="tocScachingconfig"></a>
<a id="tocscachingconfig"></a>

```json
{
  "ttl": {},
  "cachingKeys": {}
}
```

The caching configuration for a resolver that has caching activated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ttl|object|true|none|none|
|cachingKeys|object|false|none|none|

<h2 id="tocS_CertificateArn">CertificateArn</h2>
<!-- backwards compatibility -->
<a id="schemacertificatearn"></a>
<a id="schema_CertificateArn"></a>
<a id="tocScertificatearn"></a>
<a id="tocscertificatearn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_Code">Code</h2>
<!-- backwards compatibility -->
<a id="schemacode"></a>
<a id="schema_Code"></a>
<a id="tocScode"></a>
<a id="tocscode"></a>

```json
"string"
```

<h2 id="tocS_CodeErrorLocation">CodeErrorLocation</h2>
<!-- backwards compatibility -->
<a id="schemacodeerrorlocation"></a>
<a id="schema_CodeErrorLocation"></a>
<a id="tocScodeerrorlocation"></a>
<a id="tocscodeerrorlocation"></a>

```json
{
  "line": {},
  "column": {},
  "span": {}
}
```

Describes the location of the error in a code sample.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|line|object|false|none|none|
|column|object|false|none|none|
|span|object|false|none|none|

<h2 id="tocS_CodeError">CodeError</h2>
<!-- backwards compatibility -->
<a id="schemacodeerror"></a>
<a id="schema_CodeError"></a>
<a id="tocScodeerror"></a>
<a id="tocscodeerror"></a>

```json
{
  "errorType": {},
  "value": {},
  "location": {
    "line": {},
    "column": {},
    "span": {}
  }
}
```

Describes an AppSync error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorType|object|false|none|none|
|value|object|false|none|none|
|location|object|false|none|none|

<h2 id="tocS_CodeErrorColumn">CodeErrorColumn</h2>
<!-- backwards compatibility -->
<a id="schemacodeerrorcolumn"></a>
<a id="schema_CodeErrorColumn"></a>
<a id="tocScodeerrorcolumn"></a>
<a id="tocscodeerrorcolumn"></a>

```json
0
```

<h2 id="tocS_CodeErrorLine">CodeErrorLine</h2>
<!-- backwards compatibility -->
<a id="schemacodeerrorline"></a>
<a id="schema_CodeErrorLine"></a>
<a id="tocScodeerrorline"></a>
<a id="tocscodeerrorline"></a>

```json
0
```

<h2 id="tocS_CodeErrorSpan">CodeErrorSpan</h2>
<!-- backwards compatibility -->
<a id="schemacodeerrorspan"></a>
<a id="schema_CodeErrorSpan"></a>
<a id="tocScodeerrorspan"></a>
<a id="tocscodeerrorspan"></a>

```json
0
```

<h2 id="tocS_CodeErrors">CodeErrors</h2>
<!-- backwards compatibility -->
<a id="schemacodeerrors"></a>
<a id="schema_CodeErrors"></a>
<a id="tocScodeerrors"></a>
<a id="tocscodeerrors"></a>

```json
[
  {
    "errorType": {},
    "value": {},
    "location": {
      "line": {},
      "column": {},
      "span": {}
    }
  }
]
```

<h2 id="tocS_Context">Context</h2>
<!-- backwards compatibility -->
<a id="schemacontext"></a>
<a id="schema_Context"></a>
<a id="tocScontext"></a>
<a id="tocscontext"></a>

```json
"string"
```

<h2 id="tocS_CreateApiCacheRequest">CreateApiCacheRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateapicacherequest"></a>
<a id="schema_CreateApiCacheRequest"></a>
<a id="tocScreateapicacherequest"></a>
<a id="tocscreateapicacherequest"></a>

```json
{
  "ttl": {},
  "transitEncryptionEnabled": {},
  "atRestEncryptionEnabled": {},
  "apiCachingBehavior": {},
  "type": {}
}
```

Represents the input of a <code>CreateApiCache</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ttl|object|true|none|none|
|transitEncryptionEnabled|object|false|none|none|
|atRestEncryptionEnabled|object|false|none|none|
|apiCachingBehavior|object|true|none|none|
|type|object|true|none|none|

<h2 id="tocS_CreateApiKeyRequest">CreateApiKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateapikeyrequest"></a>
<a id="schema_CreateApiKeyRequest"></a>
<a id="tocScreateapikeyrequest"></a>
<a id="tocscreateapikeyrequest"></a>

```json
{
  "description": {},
  "expires": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|none|
|expires|object|false|none|none|

<h2 id="tocS_ResourceName">ResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaresourcename"></a>
<a id="schema_ResourceName"></a>
<a id="tocSresourcename"></a>
<a id="tocsresourcename"></a>

```json
"string"
```

<h2 id="tocS_DataSourceType">DataSourceType</h2>
<!-- backwards compatibility -->
<a id="schemadatasourcetype"></a>
<a id="schema_DataSourceType"></a>
<a id="tocSdatasourcetype"></a>
<a id="tocsdatasourcetype"></a>

```json
"AWS_LAMBDA"
```

<h2 id="tocS_DynamodbDataSourceConfig">DynamodbDataSourceConfig</h2>
<!-- backwards compatibility -->
<a id="schemadynamodbdatasourceconfig"></a>
<a id="schema_DynamodbDataSourceConfig"></a>
<a id="tocSdynamodbdatasourceconfig"></a>
<a id="tocsdynamodbdatasourceconfig"></a>

```json
{
  "tableName": {},
  "awsRegion": {},
  "useCallerCredentials": {},
  "deltaSyncConfig": {
    "baseTableTTL": {},
    "deltaSyncTableName": {},
    "deltaSyncTableTTL": {}
  },
  "versioned": {}
}
```

Describes an Amazon DynamoDB data source configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tableName|object|true|none|none|
|awsRegion|object|true|none|none|
|useCallerCredentials|object|false|none|none|
|deltaSyncConfig|object|false|none|none|
|versioned|object|false|none|none|

<h2 id="tocS_LambdaDataSourceConfig">LambdaDataSourceConfig</h2>
<!-- backwards compatibility -->
<a id="schemalambdadatasourceconfig"></a>
<a id="schema_LambdaDataSourceConfig"></a>
<a id="tocSlambdadatasourceconfig"></a>
<a id="tocslambdadatasourceconfig"></a>

```json
{
  "lambdaFunctionArn": {}
}
```

Describes an Lambda data source configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lambdaFunctionArn|object|true|none|none|

<h2 id="tocS_ElasticsearchDataSourceConfig">ElasticsearchDataSourceConfig</h2>
<!-- backwards compatibility -->
<a id="schemaelasticsearchdatasourceconfig"></a>
<a id="schema_ElasticsearchDataSourceConfig"></a>
<a id="tocSelasticsearchdatasourceconfig"></a>
<a id="tocselasticsearchdatasourceconfig"></a>

```json
{
  "endpoint": {},
  "awsRegion": {}
}
```

<p>Describes an OpenSearch data source configuration.</p> <p>As of September 2021, Amazon Elasticsearch service is Amazon OpenSearch Service. This configuration is deprecated. For new data sources, use <a>OpenSearchServiceDataSourceConfig</a> to specify an OpenSearch data source.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoint|object|true|none|none|
|awsRegion|object|true|none|none|

<h2 id="tocS_OpenSearchServiceDataSourceConfig">OpenSearchServiceDataSourceConfig</h2>
<!-- backwards compatibility -->
<a id="schemaopensearchservicedatasourceconfig"></a>
<a id="schema_OpenSearchServiceDataSourceConfig"></a>
<a id="tocSopensearchservicedatasourceconfig"></a>
<a id="tocsopensearchservicedatasourceconfig"></a>

```json
{
  "endpoint": {},
  "awsRegion": {}
}
```

Describes an OpenSearch data source configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoint|object|true|none|none|
|awsRegion|object|true|none|none|

<h2 id="tocS_HttpDataSourceConfig">HttpDataSourceConfig</h2>
<!-- backwards compatibility -->
<a id="schemahttpdatasourceconfig"></a>
<a id="schema_HttpDataSourceConfig"></a>
<a id="tocShttpdatasourceconfig"></a>
<a id="tocshttpdatasourceconfig"></a>

```json
{
  "endpoint": {},
  "authorizationConfig": {
    "authorizationType": {},
    "awsIamConfig": {
      "signingRegion": {},
      "signingServiceName": {}
    }
  }
}
```

Describes an HTTP data source configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoint|object|false|none|none|
|authorizationConfig|object|false|none|none|

<h2 id="tocS_RelationalDatabaseDataSourceConfig">RelationalDatabaseDataSourceConfig</h2>
<!-- backwards compatibility -->
<a id="schemarelationaldatabasedatasourceconfig"></a>
<a id="schema_RelationalDatabaseDataSourceConfig"></a>
<a id="tocSrelationaldatabasedatasourceconfig"></a>
<a id="tocsrelationaldatabasedatasourceconfig"></a>

```json
{
  "relationalDatabaseSourceType": {},
  "rdsHttpEndpointConfig": {
    "awsRegion": {},
    "dbClusterIdentifier": {},
    "databaseName": {},
    "schema": {},
    "awsSecretStoreArn": {}
  }
}
```

Describes a relational database data source configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|relationalDatabaseSourceType|object|false|none|none|
|rdsHttpEndpointConfig|object|false|none|none|

<h2 id="tocS_EventBridgeDataSourceConfig">EventBridgeDataSourceConfig</h2>
<!-- backwards compatibility -->
<a id="schemaeventbridgedatasourceconfig"></a>
<a id="schema_EventBridgeDataSourceConfig"></a>
<a id="tocSeventbridgedatasourceconfig"></a>
<a id="tocseventbridgedatasourceconfig"></a>

```json
{
  "eventBusArn": {}
}
```

Describes an Amazon EventBridge bus data source configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventBusArn|object|true|none|none|

<h2 id="tocS_CreateDataSourceRequest">CreateDataSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasourcerequest"></a>
<a id="schema_CreateDataSourceRequest"></a>
<a id="tocScreatedatasourcerequest"></a>
<a id="tocscreatedatasourcerequest"></a>

```json
{
  "name": {},
  "description": {},
  "type": {},
  "serviceRoleArn": {},
  "dynamodbConfig": {
    "tableName": {},
    "awsRegion": {},
    "useCallerCredentials": {},
    "deltaSyncConfig": {
      "baseTableTTL": {},
      "deltaSyncTableName": {},
      "deltaSyncTableTTL": {}
    },
    "versioned": {}
  },
  "lambdaConfig": {
    "lambdaFunctionArn": {}
  },
  "elasticsearchConfig": {
    "endpoint": {},
    "awsRegion": {}
  },
  "openSearchServiceConfig": {
    "endpoint": {},
    "awsRegion": {}
  },
  "httpConfig": {
    "endpoint": {},
    "authorizationConfig": {
      "authorizationType": {},
      "awsIamConfig": {
        "signingRegion": {},
        "signingServiceName": {}
      }
    }
  },
  "relationalDatabaseConfig": {
    "relationalDatabaseSourceType": {},
    "rdsHttpEndpointConfig": {
      "awsRegion": {},
      "dbClusterIdentifier": {},
      "databaseName": {},
      "schema": {},
      "awsSecretStoreArn": {}
    }
  },
  "eventBridgeConfig": {
    "eventBusArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|description|object|false|none|none|
|type|object|true|none|none|
|serviceRoleArn|object|false|none|none|
|dynamodbConfig|object|false|none|none|
|lambdaConfig|object|false|none|none|
|elasticsearchConfig|object|false|none|none|
|openSearchServiceConfig|object|false|none|none|
|httpConfig|object|false|none|none|
|relationalDatabaseConfig|object|false|none|none|
|eventBridgeConfig|object|false|none|none|

<h2 id="tocS_DataSource">DataSource</h2>
<!-- backwards compatibility -->
<a id="schemadatasource"></a>
<a id="schema_DataSource"></a>
<a id="tocSdatasource"></a>
<a id="tocsdatasource"></a>

```json
{
  "dataSourceArn": {},
  "name": {},
  "description": {},
  "type": {},
  "serviceRoleArn": {},
  "dynamodbConfig": {
    "tableName": {},
    "awsRegion": {},
    "useCallerCredentials": {},
    "deltaSyncConfig": {
      "baseTableTTL": {},
      "deltaSyncTableName": {},
      "deltaSyncTableTTL": {}
    },
    "versioned": {}
  },
  "lambdaConfig": {
    "lambdaFunctionArn": {}
  },
  "elasticsearchConfig": {
    "endpoint": {},
    "awsRegion": {}
  },
  "openSearchServiceConfig": {
    "endpoint": {},
    "awsRegion": {}
  },
  "httpConfig": {
    "endpoint": {},
    "authorizationConfig": {
      "authorizationType": {},
      "awsIamConfig": {
        "signingRegion": {},
        "signingServiceName": {}
      }
    }
  },
  "relationalDatabaseConfig": {
    "relationalDatabaseSourceType": {},
    "rdsHttpEndpointConfig": {
      "awsRegion": {},
      "dbClusterIdentifier": {},
      "databaseName": {},
      "schema": {},
      "awsSecretStoreArn": {}
    }
  },
  "eventBridgeConfig": {
    "eventBusArn": {}
  }
}
```

Describes a data source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataSourceArn|object|false|none|none|
|name|object|false|none|none|
|description|object|false|none|none|
|type|object|false|none|none|
|serviceRoleArn|object|false|none|none|
|dynamodbConfig|object|false|none|none|
|lambdaConfig|object|false|none|none|
|elasticsearchConfig|object|false|none|none|
|openSearchServiceConfig|object|false|none|none|
|httpConfig|object|false|none|none|
|relationalDatabaseConfig|object|false|none|none|
|eventBridgeConfig|object|false|none|none|

<h2 id="tocS_Description">Description</h2>
<!-- backwards compatibility -->
<a id="schemadescription"></a>
<a id="schema_Description"></a>
<a id="tocSdescription"></a>
<a id="tocsdescription"></a>

```json
"string"
```

<h2 id="tocS_CreateDomainNameRequest">CreateDomainNameRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedomainnamerequest"></a>
<a id="schema_CreateDomainNameRequest"></a>
<a id="tocScreatedomainnamerequest"></a>
<a id="tocscreatedomainnamerequest"></a>

```json
{
  "domainName": {},
  "certificateArn": {},
  "description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainName|object|true|none|none|
|certificateArn|object|true|none|none|
|description|object|false|none|none|

<h2 id="tocS_DomainNameConfig">DomainNameConfig</h2>
<!-- backwards compatibility -->
<a id="schemadomainnameconfig"></a>
<a id="schema_DomainNameConfig"></a>
<a id="tocSdomainnameconfig"></a>
<a id="tocsdomainnameconfig"></a>

```json
{
  "domainName": {},
  "description": {},
  "certificateArn": {},
  "appsyncDomainName": {},
  "hostedZoneId": {}
}
```

Describes a configuration for a custom domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainName|object|false|none|none|
|description|object|false|none|none|
|certificateArn|object|false|none|none|
|appsyncDomainName|object|false|none|none|
|hostedZoneId|object|false|none|none|

<h2 id="tocS_MappingTemplate">MappingTemplate</h2>
<!-- backwards compatibility -->
<a id="schemamappingtemplate"></a>
<a id="schema_MappingTemplate"></a>
<a id="tocSmappingtemplate"></a>
<a id="tocsmappingtemplate"></a>

```json
"string"
```

<h2 id="tocS_SyncConfig">SyncConfig</h2>
<!-- backwards compatibility -->
<a id="schemasyncconfig"></a>
<a id="schema_SyncConfig"></a>
<a id="tocSsyncconfig"></a>
<a id="tocssyncconfig"></a>

```json
{
  "conflictHandler": {},
  "conflictDetection": {},
  "lambdaConflictHandlerConfig": {
    "lambdaConflictHandlerArn": {}
  }
}
```

<p>Describes a Sync configuration for a resolver.</p> <p>Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conflictHandler|object|false|none|none|
|conflictDetection|object|false|none|none|
|lambdaConflictHandlerConfig|object|false|none|none|

<h2 id="tocS_MaxBatchSize">MaxBatchSize</h2>
<!-- backwards compatibility -->
<a id="schemamaxbatchsize"></a>
<a id="schema_MaxBatchSize"></a>
<a id="tocSmaxbatchsize"></a>
<a id="tocsmaxbatchsize"></a>

```json
0
```

<h2 id="tocS_CreateFunctionRequest">CreateFunctionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatefunctionrequest"></a>
<a id="schema_CreateFunctionRequest"></a>
<a id="tocScreatefunctionrequest"></a>
<a id="tocscreatefunctionrequest"></a>

```json
{
  "name": {},
  "description": {},
  "dataSourceName": {},
  "requestMappingTemplate": {},
  "responseMappingTemplate": {},
  "functionVersion": {},
  "syncConfig": {
    "conflictHandler": {},
    "conflictDetection": {},
    "lambdaConflictHandlerConfig": {
      "lambdaConflictHandlerArn": {}
    }
  },
  "maxBatchSize": {},
  "runtime": {
    "name": {},
    "runtimeVersion": {}
  },
  "code": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|description|object|false|none|none|
|dataSourceName|object|true|none|none|
|requestMappingTemplate|object|false|none|none|
|responseMappingTemplate|object|false|none|none|
|functionVersion|object|false|none|none|
|syncConfig|[SyncConfig](#schemasyncconfig)|false|none|<p>Describes a Sync configuration for a resolver.</p> <p>Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.</p>|
|maxBatchSize|object|false|none|none|
|runtime|[AppSyncRuntime](#schemaappsyncruntime)|false|none|Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.|
|code|object|false|none|none|

<h2 id="tocS_FunctionConfiguration">FunctionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemafunctionconfiguration"></a>
<a id="schema_FunctionConfiguration"></a>
<a id="tocSfunctionconfiguration"></a>
<a id="tocsfunctionconfiguration"></a>

```json
{
  "functionId": {},
  "functionArn": {},
  "name": {},
  "description": {},
  "dataSourceName": {},
  "requestMappingTemplate": {},
  "responseMappingTemplate": {},
  "functionVersion": {},
  "syncConfig": {
    "conflictHandler": {},
    "conflictDetection": {},
    "lambdaConflictHandlerConfig": {
      "lambdaConflictHandlerArn": {}
    }
  },
  "maxBatchSize": {},
  "runtime": {
    "name": {},
    "runtimeVersion": {}
  },
  "code": {}
}
```

A function is a reusable entity. You can use multiple functions to compose the resolver logic.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|functionId|object|false|none|none|
|functionArn|object|false|none|none|
|name|object|false|none|none|
|description|object|false|none|none|
|dataSourceName|object|false|none|none|
|requestMappingTemplate|object|false|none|none|
|responseMappingTemplate|object|false|none|none|
|functionVersion|object|false|none|none|
|syncConfig|[SyncConfig](#schemasyncconfig)|false|none|<p>Describes a Sync configuration for a resolver.</p> <p>Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.</p>|
|maxBatchSize|object|false|none|none|
|runtime|[AppSyncRuntime](#schemaappsyncruntime)|false|none|Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.|
|code|object|false|none|none|

<h2 id="tocS_LogConfig">LogConfig</h2>
<!-- backwards compatibility -->
<a id="schemalogconfig"></a>
<a id="schema_LogConfig"></a>
<a id="tocSlogconfig"></a>
<a id="tocslogconfig"></a>

```json
{
  "fieldLogLevel": {},
  "cloudWatchLogsRoleArn": {},
  "excludeVerboseContent": {}
}
```

The Amazon CloudWatch Logs configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fieldLogLevel|object|true|none|none|
|cloudWatchLogsRoleArn|object|true|none|none|
|excludeVerboseContent|object|false|none|none|

<h2 id="tocS_UserPoolConfig">UserPoolConfig</h2>
<!-- backwards compatibility -->
<a id="schemauserpoolconfig"></a>
<a id="schema_UserPoolConfig"></a>
<a id="tocSuserpoolconfig"></a>
<a id="tocsuserpoolconfig"></a>

```json
{
  "userPoolId": {},
  "awsRegion": {},
  "defaultAction": {},
  "appIdClientRegex": {}
}
```

Describes an Amazon Cognito user pool configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userPoolId|object|true|none|none|
|awsRegion|object|true|none|none|
|defaultAction|object|true|none|none|
|appIdClientRegex|object|false|none|none|

<h2 id="tocS_TagMap">TagMap</h2>
<!-- backwards compatibility -->
<a id="schematagmap"></a>
<a id="schema_TagMap"></a>
<a id="tocStagmap"></a>
<a id="tocstagmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

A map with keys of <code>TagKey</code> objects and values of <code>TagValue</code> objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[TagValue](#schematagvalue)|false|none|The value for the tag.|

<h2 id="tocS_GraphQLApiVisibility">GraphQLApiVisibility</h2>
<!-- backwards compatibility -->
<a id="schemagraphqlapivisibility"></a>
<a id="schema_GraphQLApiVisibility"></a>
<a id="tocSgraphqlapivisibility"></a>
<a id="tocsgraphqlapivisibility"></a>

```json
"GLOBAL"
```

<h2 id="tocS_GraphQLApiType">GraphQLApiType</h2>
<!-- backwards compatibility -->
<a id="schemagraphqlapitype"></a>
<a id="schema_GraphQLApiType"></a>
<a id="tocSgraphqlapitype"></a>
<a id="tocsgraphqlapitype"></a>

```json
"GRAPHQL"
```

<h2 id="tocS_CreateGraphqlApiRequest">CreateGraphqlApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreategraphqlapirequest"></a>
<a id="schema_CreateGraphqlApiRequest"></a>
<a id="tocScreategraphqlapirequest"></a>
<a id="tocscreategraphqlapirequest"></a>

```json
{
  "name": {},
  "logConfig": {
    "fieldLogLevel": {},
    "cloudWatchLogsRoleArn": {},
    "excludeVerboseContent": {}
  },
  "authenticationType": {},
  "userPoolConfig": {
    "userPoolId": {},
    "awsRegion": {},
    "defaultAction": {},
    "appIdClientRegex": {}
  },
  "openIDConnectConfig": {
    "issuer": {},
    "clientId": {},
    "iatTTL": {},
    "authTTL": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "additionalAuthenticationProviders": {},
  "xrayEnabled": {},
  "lambdaAuthorizerConfig": {
    "authorizerResultTtlInSeconds": {},
    "authorizerUri": {},
    "identityValidationExpression": {}
  },
  "visibility": {},
  "apiType": {},
  "mergedApiExecutionRoleArn": {},
  "ownerContact": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|logConfig|object|false|none|none|
|authenticationType|object|true|none|none|
|userPoolConfig|object|false|none|none|
|openIDConnectConfig|object|false|none|none|
|tags|object|false|none|none|
|additionalAuthenticationProviders|object|false|none|none|
|xrayEnabled|object|false|none|none|
|lambdaAuthorizerConfig|object|false|none|none|
|visibility|object|false|none|none|
|apiType|object|false|none|none|
|mergedApiExecutionRoleArn|object|false|none|none|
|ownerContact|object|false|none|none|

<h2 id="tocS_GraphqlApi">GraphqlApi</h2>
<!-- backwards compatibility -->
<a id="schemagraphqlapi"></a>
<a id="schema_GraphqlApi"></a>
<a id="tocSgraphqlapi"></a>
<a id="tocsgraphqlapi"></a>

```json
{
  "name": {},
  "apiId": {},
  "authenticationType": {},
  "logConfig": {
    "fieldLogLevel": {},
    "cloudWatchLogsRoleArn": {},
    "excludeVerboseContent": {}
  },
  "userPoolConfig": {
    "userPoolId": {},
    "awsRegion": {},
    "defaultAction": {},
    "appIdClientRegex": {}
  },
  "openIDConnectConfig": {
    "issuer": {},
    "clientId": {},
    "iatTTL": {},
    "authTTL": {}
  },
  "arn": {},
  "uris": {
    "property1": "string",
    "property2": "string"
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "additionalAuthenticationProviders": {},
  "xrayEnabled": {},
  "wafWebAclArn": {},
  "lambdaAuthorizerConfig": {
    "authorizerResultTtlInSeconds": {},
    "authorizerUri": {},
    "identityValidationExpression": {}
  },
  "dns": {
    "property1": "string",
    "property2": "string"
  },
  "visibility": {},
  "apiType": {},
  "mergedApiExecutionRoleArn": {},
  "owner": {},
  "ownerContact": {}
}
```

Describes a GraphQL API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|apiId|object|false|none|none|
|authenticationType|object|false|none|none|
|logConfig|object|false|none|none|
|userPoolConfig|object|false|none|none|
|openIDConnectConfig|object|false|none|none|
|arn|object|false|none|none|
|uris|object|false|none|none|
|tags|object|false|none|none|
|additionalAuthenticationProviders|object|false|none|none|
|xrayEnabled|object|false|none|none|
|wafWebAclArn|object|false|none|none|
|lambdaAuthorizerConfig|object|false|none|none|
|dns|object|false|none|none|
|visibility|object|false|none|none|
|apiType|object|false|none|none|
|mergedApiExecutionRoleArn|object|false|none|none|
|owner|object|false|none|none|
|ownerContact|object|false|none|none|

<h2 id="tocS_ResolverKind">ResolverKind</h2>
<!-- backwards compatibility -->
<a id="schemaresolverkind"></a>
<a id="schema_ResolverKind"></a>
<a id="tocSresolverkind"></a>
<a id="tocsresolverkind"></a>

```json
"UNIT"
```

<h2 id="tocS_PipelineConfig">PipelineConfig</h2>
<!-- backwards compatibility -->
<a id="schemapipelineconfig"></a>
<a id="schema_PipelineConfig"></a>
<a id="tocSpipelineconfig"></a>
<a id="tocspipelineconfig"></a>

```json
{
  "functions": {}
}
```

The pipeline configuration for a resolver of kind <code>PIPELINE</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|functions|object|false|none|none|

<h2 id="tocS_CreateResolverRequest">CreateResolverRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateresolverrequest"></a>
<a id="schema_CreateResolverRequest"></a>
<a id="tocScreateresolverrequest"></a>
<a id="tocscreateresolverrequest"></a>

```json
{
  "fieldName": {},
  "dataSourceName": {},
  "requestMappingTemplate": {},
  "responseMappingTemplate": {},
  "kind": {},
  "pipelineConfig": {
    "functions": {}
  },
  "syncConfig": {
    "conflictHandler": {},
    "conflictDetection": {},
    "lambdaConflictHandlerConfig": {
      "lambdaConflictHandlerArn": {}
    }
  },
  "cachingConfig": {
    "ttl": {},
    "cachingKeys": {}
  },
  "maxBatchSize": {},
  "runtime": {
    "name": {},
    "runtimeVersion": {}
  },
  "code": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fieldName|object|true|none|none|
|dataSourceName|object|false|none|none|
|requestMappingTemplate|object|false|none|none|
|responseMappingTemplate|object|false|none|none|
|kind|object|false|none|none|
|pipelineConfig|object|false|none|none|
|syncConfig|object|false|none|none|
|cachingConfig|object|false|none|none|
|maxBatchSize|object|false|none|none|
|runtime|[AppSyncRuntime](#schemaappsyncruntime)|false|none|Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.|
|code|object|false|none|none|

<h2 id="tocS_Resolver">Resolver</h2>
<!-- backwards compatibility -->
<a id="schemaresolver"></a>
<a id="schema_Resolver"></a>
<a id="tocSresolver"></a>
<a id="tocsresolver"></a>

```json
{
  "typeName": {},
  "fieldName": {},
  "dataSourceName": {},
  "resolverArn": {},
  "requestMappingTemplate": {},
  "responseMappingTemplate": {},
  "kind": {},
  "pipelineConfig": {
    "functions": {}
  },
  "syncConfig": {
    "conflictHandler": {},
    "conflictDetection": {},
    "lambdaConflictHandlerConfig": {
      "lambdaConflictHandlerArn": {}
    }
  },
  "cachingConfig": {
    "ttl": {},
    "cachingKeys": {}
  },
  "maxBatchSize": {},
  "runtime": {
    "name": {},
    "runtimeVersion": {}
  },
  "code": {}
}
```

Describes a resolver.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|typeName|object|false|none|none|
|fieldName|object|false|none|none|
|dataSourceName|object|false|none|none|
|resolverArn|object|false|none|none|
|requestMappingTemplate|object|false|none|none|
|responseMappingTemplate|object|false|none|none|
|kind|object|false|none|none|
|pipelineConfig|object|false|none|none|
|syncConfig|object|false|none|none|
|cachingConfig|object|false|none|none|
|maxBatchSize|object|false|none|none|
|runtime|[AppSyncRuntime](#schemaappsyncruntime)|false|none|Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.|
|code|object|false|none|none|

<h2 id="tocS_TypeDefinitionFormat">TypeDefinitionFormat</h2>
<!-- backwards compatibility -->
<a id="schematypedefinitionformat"></a>
<a id="schema_TypeDefinitionFormat"></a>
<a id="tocStypedefinitionformat"></a>
<a id="tocstypedefinitionformat"></a>

```json
"SDL"
```

<h2 id="tocS_CreateTypeRequest">CreateTypeRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatetyperequest"></a>
<a id="schema_CreateTypeRequest"></a>
<a id="tocScreatetyperequest"></a>
<a id="tocscreatetyperequest"></a>

```json
{
  "definition": {},
  "format": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|definition|object|true|none|none|
|format|object|true|none|none|

<h2 id="tocS_Type">Type</h2>
<!-- backwards compatibility -->
<a id="schematype"></a>
<a id="schema_Type"></a>
<a id="tocStype"></a>
<a id="tocstype"></a>

```json
{
  "name": {},
  "description": {},
  "arn": {},
  "definition": {},
  "format": {}
}
```

Describes a type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|description|object|false|none|none|
|arn|object|false|none|none|
|definition|object|false|none|none|
|format|object|false|none|none|

<h2 id="tocS_DataSources">DataSources</h2>
<!-- backwards compatibility -->
<a id="schemadatasources"></a>
<a id="schema_DataSources"></a>
<a id="tocSdatasources"></a>
<a id="tocsdatasources"></a>

```json
[
  {
    "dataSourceArn": {},
    "name": {},
    "description": {},
    "type": {},
    "serviceRoleArn": {},
    "dynamodbConfig": {
      "tableName": {},
      "awsRegion": {},
      "useCallerCredentials": {},
      "deltaSyncConfig": {
        "baseTableTTL": {},
        "deltaSyncTableName": {},
        "deltaSyncTableTTL": {}
      },
      "versioned": {}
    },
    "lambdaConfig": {
      "lambdaFunctionArn": {}
    },
    "elasticsearchConfig": {
      "endpoint": {},
      "awsRegion": {}
    },
    "openSearchServiceConfig": {
      "endpoint": {},
      "awsRegion": {}
    },
    "httpConfig": {
      "endpoint": {},
      "authorizationConfig": {
        "authorizationType": {},
        "awsIamConfig": {
          "signingRegion": {},
          "signingServiceName": {}
        }
      }
    },
    "relationalDatabaseConfig": {
      "relationalDatabaseSourceType": {},
      "rdsHttpEndpointConfig": {
        "awsRegion": {},
        "dbClusterIdentifier": {},
        "databaseName": {},
        "schema": {},
        "awsSecretStoreArn": {}
      }
    },
    "eventBridgeConfig": {
      "eventBusArn": {}
    }
  }
]
```

<h2 id="tocS_Date">Date</h2>
<!-- backwards compatibility -->
<a id="schemadate"></a>
<a id="schema_Date"></a>
<a id="tocSdate"></a>
<a id="tocsdate"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_DeleteApiCacheRequest">DeleteApiCacheRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapicacherequest"></a>
<a id="schema_DeleteApiCacheRequest"></a>
<a id="tocSdeleteapicacherequest"></a>
<a id="tocsdeleteapicacherequest"></a>

```json
{}
```

Represents the input of a <code>DeleteApiCache</code> operation.

<h2 id="tocS_DeleteApiKeyRequest">DeleteApiKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapikeyrequest"></a>
<a id="schema_DeleteApiKeyRequest"></a>
<a id="tocSdeleteapikeyrequest"></a>
<a id="tocsdeleteapikeyrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteDataSourceRequest">DeleteDataSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedatasourcerequest"></a>
<a id="schema_DeleteDataSourceRequest"></a>
<a id="tocSdeletedatasourcerequest"></a>
<a id="tocsdeletedatasourcerequest"></a>

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

<h2 id="tocS_DeleteFunctionRequest">DeleteFunctionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletefunctionrequest"></a>
<a id="schema_DeleteFunctionRequest"></a>
<a id="tocSdeletefunctionrequest"></a>
<a id="tocsdeletefunctionrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteGraphqlApiRequest">DeleteGraphqlApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletegraphqlapirequest"></a>
<a id="schema_DeleteGraphqlApiRequest"></a>
<a id="tocSdeletegraphqlapirequest"></a>
<a id="tocsdeletegraphqlapirequest"></a>

```json
{}
```

<h2 id="tocS_DeleteResolverRequest">DeleteResolverRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresolverrequest"></a>
<a id="schema_DeleteResolverRequest"></a>
<a id="tocSdeleteresolverrequest"></a>
<a id="tocsdeleteresolverrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteTypeRequest">DeleteTypeRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletetyperequest"></a>
<a id="schema_DeleteTypeRequest"></a>
<a id="tocSdeletetyperequest"></a>
<a id="tocsdeletetyperequest"></a>

```json
{}
```

<h2 id="tocS_DisassociateApiRequest">DisassociateApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateapirequest"></a>
<a id="schema_DisassociateApiRequest"></a>
<a id="tocSdisassociateapirequest"></a>
<a id="tocsdisassociateapirequest"></a>

```json
{}
```

<h2 id="tocS_DisassociateMergedGraphqlApiRequest">DisassociateMergedGraphqlApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatemergedgraphqlapirequest"></a>
<a id="schema_DisassociateMergedGraphqlApiRequest"></a>
<a id="tocSdisassociatemergedgraphqlapirequest"></a>
<a id="tocsdisassociatemergedgraphqlapirequest"></a>

```json
{}
```

<h2 id="tocS_SourceApiAssociationStatus">SourceApiAssociationStatus</h2>
<!-- backwards compatibility -->
<a id="schemasourceapiassociationstatus"></a>
<a id="schema_SourceApiAssociationStatus"></a>
<a id="tocSsourceapiassociationstatus"></a>
<a id="tocssourceapiassociationstatus"></a>

```json
"MERGE_SCHEDULED"
```

<h2 id="tocS_DisassociateSourceGraphqlApiRequest">DisassociateSourceGraphqlApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatesourcegraphqlapirequest"></a>
<a id="schema_DisassociateSourceGraphqlApiRequest"></a>
<a id="tocSdisassociatesourcegraphqlapirequest"></a>
<a id="tocsdisassociatesourcegraphqlapirequest"></a>

```json
{}
```

<h2 id="tocS_DomainNameConfigs">DomainNameConfigs</h2>
<!-- backwards compatibility -->
<a id="schemadomainnameconfigs"></a>
<a id="schema_DomainNameConfigs"></a>
<a id="tocSdomainnameconfigs"></a>
<a id="tocsdomainnameconfigs"></a>

```json
[
  {
    "domainName": {},
    "description": {},
    "certificateArn": {},
    "appsyncDomainName": {},
    "hostedZoneId": {}
  }
]
```

<h2 id="tocS_ErrorMessage">ErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemaerrormessage"></a>
<a id="schema_ErrorMessage"></a>
<a id="tocSerrormessage"></a>
<a id="tocserrormessage"></a>

```json
"string"
```

<h2 id="tocS_ErrorDetail">ErrorDetail</h2>
<!-- backwards compatibility -->
<a id="schemaerrordetail"></a>
<a id="schema_ErrorDetail"></a>
<a id="tocSerrordetail"></a>
<a id="tocserrordetail"></a>

```json
{
  "message": {}
}
```

Contains the list of errors generated. When using JavaScript, this will apply to the request or response function evaluation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|object|false|none|none|

<h2 id="tocS_EvaluateCodeErrorDetail">EvaluateCodeErrorDetail</h2>
<!-- backwards compatibility -->
<a id="schemaevaluatecodeerrordetail"></a>
<a id="schema_EvaluateCodeErrorDetail"></a>
<a id="tocSevaluatecodeerrordetail"></a>
<a id="tocsevaluatecodeerrordetail"></a>

```json
{
  "message": {},
  "codeErrors": {}
}
```

Contains the list of errors from a code evaluation response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|object|false|none|none|
|codeErrors|object|false|none|none|

<h2 id="tocS_EvaluateCodeRequest">EvaluateCodeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaevaluatecoderequest"></a>
<a id="schema_EvaluateCodeRequest"></a>
<a id="tocSevaluatecoderequest"></a>
<a id="tocsevaluatecoderequest"></a>

```json
{
  "runtime": {
    "name": {},
    "runtimeVersion": {}
  },
  "code": {},
  "context": {},
  "function": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|runtime|object|true|none|none|
|code|object|true|none|none|
|context|object|true|none|none|
|function|object|false|none|none|

<h2 id="tocS_EvaluationResult">EvaluationResult</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationresult"></a>
<a id="schema_EvaluationResult"></a>
<a id="tocSevaluationresult"></a>
<a id="tocsevaluationresult"></a>

```json
"string"
```

<h2 id="tocS_Logs">Logs</h2>
<!-- backwards compatibility -->
<a id="schemalogs"></a>
<a id="schema_Logs"></a>
<a id="tocSlogs"></a>
<a id="tocslogs"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Template">Template</h2>
<!-- backwards compatibility -->
<a id="schematemplate"></a>
<a id="schema_Template"></a>
<a id="tocStemplate"></a>
<a id="tocstemplate"></a>

```json
"string"
```

<h2 id="tocS_EvaluateMappingTemplateRequest">EvaluateMappingTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaevaluatemappingtemplaterequest"></a>
<a id="schema_EvaluateMappingTemplateRequest"></a>
<a id="tocSevaluatemappingtemplaterequest"></a>
<a id="tocsevaluatemappingtemplaterequest"></a>

```json
{
  "template": {},
  "context": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|template|object|true|none|none|
|context|object|true|none|none|

<h2 id="tocS_FlushApiCacheRequest">FlushApiCacheRequest</h2>
<!-- backwards compatibility -->
<a id="schemaflushapicacherequest"></a>
<a id="schema_FlushApiCacheRequest"></a>
<a id="tocSflushapicacherequest"></a>
<a id="tocsflushapicacherequest"></a>

```json
{}
```

Represents the input of a <code>FlushApiCache</code> operation.

<h2 id="tocS_Functions">Functions</h2>
<!-- backwards compatibility -->
<a id="schemafunctions"></a>
<a id="schema_Functions"></a>
<a id="tocSfunctions"></a>
<a id="tocsfunctions"></a>

```json
[
  {
    "functionId": {},
    "functionArn": {},
    "name": {},
    "description": {},
    "dataSourceName": {},
    "requestMappingTemplate": {},
    "responseMappingTemplate": {},
    "functionVersion": {},
    "syncConfig": {
      "conflictHandler": {},
      "conflictDetection": {},
      "lambdaConflictHandlerConfig": {
        "lambdaConflictHandlerArn": {}
      }
    },
    "maxBatchSize": {},
    "runtime": {
      "name": {},
      "runtimeVersion": {}
    },
    "code": {}
  }
]
```

<h2 id="tocS_GetApiAssociationRequest">GetApiAssociationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetapiassociationrequest"></a>
<a id="schema_GetApiAssociationRequest"></a>
<a id="tocSgetapiassociationrequest"></a>
<a id="tocsgetapiassociationrequest"></a>

```json
{}
```

<h2 id="tocS_GetApiCacheRequest">GetApiCacheRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetapicacherequest"></a>
<a id="schema_GetApiCacheRequest"></a>
<a id="tocSgetapicacherequest"></a>
<a id="tocsgetapicacherequest"></a>

```json
{}
```

Represents the input of a <code>GetApiCache</code> operation.

<h2 id="tocS_GetDataSourceRequest">GetDataSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdatasourcerequest"></a>
<a id="schema_GetDataSourceRequest"></a>
<a id="tocSgetdatasourcerequest"></a>
<a id="tocsgetdatasourcerequest"></a>

```json
{}
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

<h2 id="tocS_GetFunctionRequest">GetFunctionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetfunctionrequest"></a>
<a id="schema_GetFunctionRequest"></a>
<a id="tocSgetfunctionrequest"></a>
<a id="tocsgetfunctionrequest"></a>

```json
{}
```

<h2 id="tocS_GetGraphqlApiRequest">GetGraphqlApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetgraphqlapirequest"></a>
<a id="schema_GetGraphqlApiRequest"></a>
<a id="tocSgetgraphqlapirequest"></a>
<a id="tocsgetgraphqlapirequest"></a>

```json
{}
```

<h2 id="tocS_OutputType">OutputType</h2>
<!-- backwards compatibility -->
<a id="schemaoutputtype"></a>
<a id="schema_OutputType"></a>
<a id="tocSoutputtype"></a>
<a id="tocsoutputtype"></a>

```json
"SDL"
```

<h2 id="tocS_GetIntrospectionSchemaRequest">GetIntrospectionSchemaRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetintrospectionschemarequest"></a>
<a id="schema_GetIntrospectionSchemaRequest"></a>
<a id="tocSgetintrospectionschemarequest"></a>
<a id="tocsgetintrospectionschemarequest"></a>

```json
{}
```

<h2 id="tocS_GetResolverRequest">GetResolverRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetresolverrequest"></a>
<a id="schema_GetResolverRequest"></a>
<a id="tocSgetresolverrequest"></a>
<a id="tocsgetresolverrequest"></a>

```json
{}
```

<h2 id="tocS_GetSchemaCreationStatusRequest">GetSchemaCreationStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetschemacreationstatusrequest"></a>
<a id="schema_GetSchemaCreationStatusRequest"></a>
<a id="tocSgetschemacreationstatusrequest"></a>
<a id="tocsgetschemacreationstatusrequest"></a>

```json
{}
```

<h2 id="tocS_SchemaStatus">SchemaStatus</h2>
<!-- backwards compatibility -->
<a id="schemaschemastatus"></a>
<a id="schema_SchemaStatus"></a>
<a id="tocSschemastatus"></a>
<a id="tocsschemastatus"></a>

```json
"PROCESSING"
```

<h2 id="tocS_GetSourceApiAssociationRequest">GetSourceApiAssociationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsourceapiassociationrequest"></a>
<a id="schema_GetSourceApiAssociationRequest"></a>
<a id="tocSgetsourceapiassociationrequest"></a>
<a id="tocsgetsourceapiassociationrequest"></a>

```json
{}
```

<h2 id="tocS_GetTypeRequest">GetTypeRequest</h2>
<!-- backwards compatibility -->
<a id="schemagettyperequest"></a>
<a id="schema_GetTypeRequest"></a>
<a id="tocSgettyperequest"></a>
<a id="tocsgettyperequest"></a>

```json
{}
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

<h2 id="tocS_GraphqlApis">GraphqlApis</h2>
<!-- backwards compatibility -->
<a id="schemagraphqlapis"></a>
<a id="schema_GraphqlApis"></a>
<a id="tocSgraphqlapis"></a>
<a id="tocsgraphqlapis"></a>

```json
[
  {
    "name": {},
    "apiId": {},
    "authenticationType": {},
    "logConfig": {
      "fieldLogLevel": {},
      "cloudWatchLogsRoleArn": {},
      "excludeVerboseContent": {}
    },
    "userPoolConfig": {
      "userPoolId": {},
      "awsRegion": {},
      "defaultAction": {},
      "appIdClientRegex": {}
    },
    "openIDConnectConfig": {
      "issuer": {},
      "clientId": {},
      "iatTTL": {},
      "authTTL": {}
    },
    "arn": {},
    "uris": {
      "property1": "string",
      "property2": "string"
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "additionalAuthenticationProviders": {},
    "xrayEnabled": {},
    "wafWebAclArn": {},
    "lambdaAuthorizerConfig": {
      "authorizerResultTtlInSeconds": {},
      "authorizerUri": {},
      "identityValidationExpression": {}
    },
    "dns": {
      "property1": "string",
      "property2": "string"
    },
    "visibility": {},
    "apiType": {},
    "mergedApiExecutionRoleArn": {},
    "owner": {},
    "ownerContact": {}
  }
]
```

<h2 id="tocS_PaginationToken">PaginationToken</h2>
<!-- backwards compatibility -->
<a id="schemapaginationtoken"></a>
<a id="schema_PaginationToken"></a>
<a id="tocSpaginationtoken"></a>
<a id="tocspaginationtoken"></a>

```json
"string"
```

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
0
```

<h2 id="tocS_ListApiKeysRequest">ListApiKeysRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistapikeysrequest"></a>
<a id="schema_ListApiKeysRequest"></a>
<a id="tocSlistapikeysrequest"></a>
<a id="tocslistapikeysrequest"></a>

```json
{}
```

<h2 id="tocS_ListDataSourcesRequest">ListDataSourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasourcesrequest"></a>
<a id="schema_ListDataSourcesRequest"></a>
<a id="tocSlistdatasourcesrequest"></a>
<a id="tocslistdatasourcesrequest"></a>

```json
{}
```

<h2 id="tocS_ListDomainNamesRequest">ListDomainNamesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdomainnamesrequest"></a>
<a id="schema_ListDomainNamesRequest"></a>
<a id="tocSlistdomainnamesrequest"></a>
<a id="tocslistdomainnamesrequest"></a>

```json
{}
```

<h2 id="tocS_ListFunctionsRequest">ListFunctionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistfunctionsrequest"></a>
<a id="schema_ListFunctionsRequest"></a>
<a id="tocSlistfunctionsrequest"></a>
<a id="tocslistfunctionsrequest"></a>

```json
{}
```

<h2 id="tocS_Ownership">Ownership</h2>
<!-- backwards compatibility -->
<a id="schemaownership"></a>
<a id="schema_Ownership"></a>
<a id="tocSownership"></a>
<a id="tocsownership"></a>

```json
"CURRENT_ACCOUNT"
```

<h2 id="tocS_ListGraphqlApisRequest">ListGraphqlApisRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistgraphqlapisrequest"></a>
<a id="schema_ListGraphqlApisRequest"></a>
<a id="tocSlistgraphqlapisrequest"></a>
<a id="tocslistgraphqlapisrequest"></a>

```json
{}
```

<h2 id="tocS_ListResolversByFunctionRequest">ListResolversByFunctionRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistresolversbyfunctionrequest"></a>
<a id="schema_ListResolversByFunctionRequest"></a>
<a id="tocSlistresolversbyfunctionrequest"></a>
<a id="tocslistresolversbyfunctionrequest"></a>

```json
{}
```

<h2 id="tocS_Resolvers">Resolvers</h2>
<!-- backwards compatibility -->
<a id="schemaresolvers"></a>
<a id="schema_Resolvers"></a>
<a id="tocSresolvers"></a>
<a id="tocsresolvers"></a>

```json
[
  {
    "typeName": {},
    "fieldName": {},
    "dataSourceName": {},
    "resolverArn": {},
    "requestMappingTemplate": {},
    "responseMappingTemplate": {},
    "kind": {},
    "pipelineConfig": {
      "functions": {}
    },
    "syncConfig": {
      "conflictHandler": {},
      "conflictDetection": {},
      "lambdaConflictHandlerConfig": {
        "lambdaConflictHandlerArn": {}
      }
    },
    "cachingConfig": {
      "ttl": {},
      "cachingKeys": {}
    },
    "maxBatchSize": {},
    "runtime": {
      "name": {},
      "runtimeVersion": {}
    },
    "code": {}
  }
]
```

<h2 id="tocS_ListResolversRequest">ListResolversRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistresolversrequest"></a>
<a id="schema_ListResolversRequest"></a>
<a id="tocSlistresolversrequest"></a>
<a id="tocslistresolversrequest"></a>

```json
{}
```

<h2 id="tocS_ListSourceApiAssociationsRequest">ListSourceApiAssociationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistsourceapiassociationsrequest"></a>
<a id="schema_ListSourceApiAssociationsRequest"></a>
<a id="tocSlistsourceapiassociationsrequest"></a>
<a id="tocslistsourceapiassociationsrequest"></a>

```json
{}
```

<h2 id="tocS_SourceApiAssociationSummaryList">SourceApiAssociationSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemasourceapiassociationsummarylist"></a>
<a id="schema_SourceApiAssociationSummaryList"></a>
<a id="tocSsourceapiassociationsummarylist"></a>
<a id="tocssourceapiassociationsummarylist"></a>

```json
[
  {
    "associationId": {},
    "associationArn": {},
    "sourceApiId": {},
    "sourceApiArn": {},
    "mergedApiId": {},
    "mergedApiArn": {},
    "description": {}
  }
]
```

<h2 id="tocS_ResourceArn">ResourceArn</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearn"></a>
<a id="schema_ResourceArn"></a>
<a id="tocSresourcearn"></a>
<a id="tocsresourcearn"></a>

```json
"stringstringstringstringstringstringstringstringstringstringstringstri"
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

<h2 id="tocS_ListTypesByAssociationRequest">ListTypesByAssociationRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttypesbyassociationrequest"></a>
<a id="schema_ListTypesByAssociationRequest"></a>
<a id="tocSlisttypesbyassociationrequest"></a>
<a id="tocslisttypesbyassociationrequest"></a>

```json
{}
```

<h2 id="tocS_TypeList">TypeList</h2>
<!-- backwards compatibility -->
<a id="schematypelist"></a>
<a id="schema_TypeList"></a>
<a id="tocStypelist"></a>
<a id="tocstypelist"></a>

```json
[
  {
    "name": {},
    "description": {},
    "arn": {},
    "definition": {},
    "format": {}
  }
]
```

<h2 id="tocS_ListTypesRequest">ListTypesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttypesrequest"></a>
<a id="schema_ListTypesRequest"></a>
<a id="tocSlisttypesrequest"></a>
<a id="tocslisttypesrequest"></a>

```json
{}
```

<h2 id="tocS_SourceApiAssociationSummary">SourceApiAssociationSummary</h2>
<!-- backwards compatibility -->
<a id="schemasourceapiassociationsummary"></a>
<a id="schema_SourceApiAssociationSummary"></a>
<a id="tocSsourceapiassociationsummary"></a>
<a id="tocssourceapiassociationsummary"></a>

```json
{
  "associationId": {},
  "associationArn": {},
  "sourceApiId": {},
  "sourceApiArn": {},
  "mergedApiId": {},
  "mergedApiArn": {},
  "description": {}
}
```

Describes the ARNs and IDs of associations, Merged APIs, and source APIs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associationId|object|false|none|none|
|associationArn|object|false|none|none|
|sourceApiId|object|false|none|none|
|sourceApiArn|object|false|none|none|
|mergedApiId|object|false|none|none|
|mergedApiArn|object|false|none|none|
|description|object|false|none|none|

<h2 id="tocS_StartSchemaCreationRequest">StartSchemaCreationRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartschemacreationrequest"></a>
<a id="schema_StartSchemaCreationRequest"></a>
<a id="tocSstartschemacreationrequest"></a>
<a id="tocsstartschemacreationrequest"></a>

```json
{
  "definition": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|definition|object|true|none|none|

<h2 id="tocS_StartSchemaMergeRequest">StartSchemaMergeRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartschemamergerequest"></a>
<a id="schema_StartSchemaMergeRequest"></a>
<a id="tocSstartschemamergerequest"></a>
<a id="tocsstartschemamergerequest"></a>

```json
{}
```

<h2 id="tocS_TagKeyList">TagKeyList</h2>
<!-- backwards compatibility -->
<a id="schematagkeylist"></a>
<a id="schema_TagKeyList"></a>
<a id="tocStagkeylist"></a>
<a id="tocstagkeylist"></a>

```json
[
  "string"
]
```

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|true|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpdateApiCacheRequest">UpdateApiCacheRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapicacherequest"></a>
<a id="schema_UpdateApiCacheRequest"></a>
<a id="tocSupdateapicacherequest"></a>
<a id="tocsupdateapicacherequest"></a>

```json
{
  "ttl": {},
  "apiCachingBehavior": {},
  "type": {}
}
```

Represents the input of a <code>UpdateApiCache</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ttl|object|true|none|none|
|apiCachingBehavior|object|true|none|none|
|type|object|true|none|none|

<h2 id="tocS_UpdateApiKeyRequest">UpdateApiKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapikeyrequest"></a>
<a id="schema_UpdateApiKeyRequest"></a>
<a id="tocSupdateapikeyrequest"></a>
<a id="tocsupdateapikeyrequest"></a>

```json
{
  "description": {},
  "expires": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|none|
|expires|object|false|none|none|

<h2 id="tocS_UpdateDataSourceRequest">UpdateDataSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedatasourcerequest"></a>
<a id="schema_UpdateDataSourceRequest"></a>
<a id="tocSupdatedatasourcerequest"></a>
<a id="tocsupdatedatasourcerequest"></a>

```json
{
  "description": {},
  "type": {},
  "serviceRoleArn": {},
  "dynamodbConfig": {
    "tableName": {},
    "awsRegion": {},
    "useCallerCredentials": {},
    "deltaSyncConfig": {
      "baseTableTTL": {},
      "deltaSyncTableName": {},
      "deltaSyncTableTTL": {}
    },
    "versioned": {}
  },
  "lambdaConfig": {
    "lambdaFunctionArn": {}
  },
  "elasticsearchConfig": {
    "endpoint": {},
    "awsRegion": {}
  },
  "openSearchServiceConfig": {
    "endpoint": {},
    "awsRegion": {}
  },
  "httpConfig": {
    "endpoint": {},
    "authorizationConfig": {
      "authorizationType": {},
      "awsIamConfig": {
        "signingRegion": {},
        "signingServiceName": {}
      }
    }
  },
  "relationalDatabaseConfig": {
    "relationalDatabaseSourceType": {},
    "rdsHttpEndpointConfig": {
      "awsRegion": {},
      "dbClusterIdentifier": {},
      "databaseName": {},
      "schema": {},
      "awsSecretStoreArn": {}
    }
  },
  "eventBridgeConfig": {
    "eventBusArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|none|
|type|object|true|none|none|
|serviceRoleArn|object|false|none|none|
|dynamodbConfig|object|false|none|none|
|lambdaConfig|object|false|none|none|
|elasticsearchConfig|object|false|none|none|
|openSearchServiceConfig|object|false|none|none|
|httpConfig|object|false|none|none|
|relationalDatabaseConfig|object|false|none|none|
|eventBridgeConfig|object|false|none|none|

<h2 id="tocS_UpdateDomainNameRequest">UpdateDomainNameRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedomainnamerequest"></a>
<a id="schema_UpdateDomainNameRequest"></a>
<a id="tocSupdatedomainnamerequest"></a>
<a id="tocsupdatedomainnamerequest"></a>

```json
{
  "description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|none|

<h2 id="tocS_UpdateFunctionRequest">UpdateFunctionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefunctionrequest"></a>
<a id="schema_UpdateFunctionRequest"></a>
<a id="tocSupdatefunctionrequest"></a>
<a id="tocsupdatefunctionrequest"></a>

```json
{
  "name": {},
  "description": {},
  "dataSourceName": {},
  "requestMappingTemplate": {},
  "responseMappingTemplate": {},
  "functionVersion": {},
  "syncConfig": {
    "conflictHandler": {},
    "conflictDetection": {},
    "lambdaConflictHandlerConfig": {
      "lambdaConflictHandlerArn": {}
    }
  },
  "maxBatchSize": {},
  "runtime": {
    "name": {},
    "runtimeVersion": {}
  },
  "code": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|description|object|false|none|none|
|dataSourceName|object|true|none|none|
|requestMappingTemplate|object|false|none|none|
|responseMappingTemplate|object|false|none|none|
|functionVersion|object|false|none|none|
|syncConfig|[SyncConfig](#schemasyncconfig)|false|none|<p>Describes a Sync configuration for a resolver.</p> <p>Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.</p>|
|maxBatchSize|object|false|none|none|
|runtime|[AppSyncRuntime](#schemaappsyncruntime)|false|none|Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.|
|code|object|false|none|none|

<h2 id="tocS_UpdateGraphqlApiRequest">UpdateGraphqlApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdategraphqlapirequest"></a>
<a id="schema_UpdateGraphqlApiRequest"></a>
<a id="tocSupdategraphqlapirequest"></a>
<a id="tocsupdategraphqlapirequest"></a>

```json
{
  "name": {},
  "logConfig": {
    "fieldLogLevel": {},
    "cloudWatchLogsRoleArn": {},
    "excludeVerboseContent": {}
  },
  "authenticationType": {},
  "userPoolConfig": {
    "userPoolId": {},
    "awsRegion": {},
    "defaultAction": {},
    "appIdClientRegex": {}
  },
  "openIDConnectConfig": {
    "issuer": {},
    "clientId": {},
    "iatTTL": {},
    "authTTL": {}
  },
  "additionalAuthenticationProviders": {},
  "xrayEnabled": {},
  "lambdaAuthorizerConfig": {
    "authorizerResultTtlInSeconds": {},
    "authorizerUri": {},
    "identityValidationExpression": {}
  },
  "mergedApiExecutionRoleArn": {},
  "ownerContact": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|logConfig|object|false|none|none|
|authenticationType|object|false|none|none|
|userPoolConfig|object|false|none|none|
|openIDConnectConfig|object|false|none|none|
|additionalAuthenticationProviders|object|false|none|none|
|xrayEnabled|object|false|none|none|
|lambdaAuthorizerConfig|object|false|none|none|
|mergedApiExecutionRoleArn|object|false|none|none|
|ownerContact|object|false|none|none|

<h2 id="tocS_UpdateResolverRequest">UpdateResolverRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresolverrequest"></a>
<a id="schema_UpdateResolverRequest"></a>
<a id="tocSupdateresolverrequest"></a>
<a id="tocsupdateresolverrequest"></a>

```json
{
  "dataSourceName": {},
  "requestMappingTemplate": {},
  "responseMappingTemplate": {},
  "kind": {},
  "pipelineConfig": {
    "functions": {}
  },
  "syncConfig": {
    "conflictHandler": {},
    "conflictDetection": {},
    "lambdaConflictHandlerConfig": {
      "lambdaConflictHandlerArn": {}
    }
  },
  "cachingConfig": {
    "ttl": {},
    "cachingKeys": {}
  },
  "maxBatchSize": {},
  "runtime": {
    "name": {},
    "runtimeVersion": {}
  },
  "code": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataSourceName|object|false|none|none|
|requestMappingTemplate|object|false|none|none|
|responseMappingTemplate|object|false|none|none|
|kind|object|false|none|none|
|pipelineConfig|object|false|none|none|
|syncConfig|object|false|none|none|
|cachingConfig|object|false|none|none|
|maxBatchSize|object|false|none|none|
|runtime|[AppSyncRuntime](#schemaappsyncruntime)|false|none|Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.|
|code|object|false|none|none|

<h2 id="tocS_UpdateSourceApiAssociationRequest">UpdateSourceApiAssociationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesourceapiassociationrequest"></a>
<a id="schema_UpdateSourceApiAssociationRequest"></a>
<a id="tocSupdatesourceapiassociationrequest"></a>
<a id="tocsupdatesourceapiassociationrequest"></a>

```json
{
  "description": {},
  "sourceApiAssociationConfig": {
    "mergeType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|none|
|sourceApiAssociationConfig|object|false|none|none|

<h2 id="tocS_UpdateTypeRequest">UpdateTypeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetyperequest"></a>
<a id="schema_UpdateTypeRequest"></a>
<a id="tocSupdatetyperequest"></a>
<a id="tocsupdatetyperequest"></a>

```json
{
  "definition": {},
  "format": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|definition|object|false|none|none|
|format|object|true|none|none|
