<h1 id="aws-marketplace-catalog-service">AWS Marketplace Catalog Service v2018-09-17</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>Catalog API actions allow you to manage your entities through list, describe, and update capabilities. An entity can be a product or an offer on AWS Marketplace. </p> <p>You can automate your entity update process by integrating the AWS Marketplace Catalog API with your AWS Marketplace product build or deployment pipelines. You can also create your own applications on top of the Catalog API to manage your products on AWS Marketplace.</p>

Base URLs:

* <a href="http://catalog.marketplace.us-east-1.amazonaws.com">http://catalog.marketplace.us-east-1.amazonaws.com</a> - The AWS Marketplace Catalog multi-region endpoint

* <a href="https://catalog.marketplace.us-east-1.amazonaws.com">https://catalog.marketplace.us-east-1.amazonaws.com</a> - The AWS Marketplace Catalog multi-region endpoint

* <a href="http://catalog.marketplace.cn-north-1.amazonaws.com.cn">http://catalog.marketplace.cn-north-1.amazonaws.com.cn</a> - The AWS Marketplace Catalog endpoint for China (Beijing) and China (Ningxia)

* <a href="https://catalog.marketplace.cn-north-1.amazonaws.com.cn">https://catalog.marketplace.cn-north-1.amazonaws.com.cn</a> - The AWS Marketplace Catalog endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/marketplace/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-marketplace-catalog-service-default">Default</h1>

## CancelChangeSet

<a id="opIdCancelChangeSet"></a>

> Code samples

```bash
curl 'https://marketplace-catalog.us-east-1.amazonaws.com/CancelChangeSet#catalog&changeSetId?catalog=string&changeSetId=string' \
  -X PATCH \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`PATCH /CancelChangeSet#catalog&changeSetId`

Used to cancel an open change request. Must be sent before the status of the request changes to <code>APPLYING</code>, the final stage of completing your change request. You can describe a change during the 60-day request history retention period for API calls.

<h3 id="cancelchangeset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|catalog|query|string|true|Required. The catalog related to the request. Fixed value: <code>AWSMarketplace</code>.|
|changeSetId|query|string|true|Required. The unique identifier of the <code>StartChangeSet</code> request that you want to cancel.|
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
  "ChangeSetId": {},
  "ChangeSetArn": {}
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

<h3 id="cancelchangeset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelChangeSetResponse](#schemacancelchangesetresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteResourcePolicy

<a id="opIdDeleteResourcePolicy"></a>

> Code samples

```bash
curl 'https://marketplace-catalog.us-east-1.amazonaws.com/DeleteResourcePolicy#resourceArn?resourceArn=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /DeleteResourcePolicy#resourceArn`

Deletes a resource-based policy on an Entity that is identified by its resource ARN.

<h3 id="deleteresourcepolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|query|string|true|The Amazon Resource Name (ARN) of the Entity resource that is associated with the resource policy.|
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

<h3 id="deleteresourcepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteResourcePolicyResponse](#schemadeleteresourcepolicyresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeChangeSet

<a id="opIdDescribeChangeSet"></a>

> Code samples

```bash
curl 'https://marketplace-catalog.us-east-1.amazonaws.com/DescribeChangeSet#catalog&changeSetId?catalog=string&changeSetId=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /DescribeChangeSet#catalog&changeSetId`

Provides information about a given change set.

<h3 id="describechangeset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|catalog|query|string|true|Required. The catalog related to the request. Fixed value: <code>AWSMarketplace</code> |
|changeSetId|query|string|true|Required. The unique identifier for the <code>StartChangeSet</code> request that you want to describe the details for.|
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
  "ChangeSetId": {},
  "ChangeSetArn": {},
  "ChangeSetName": {},
  "StartTime": {},
  "EndTime": {},
  "Status": {},
  "FailureCode": {},
  "FailureDescription": {},
  "ChangeSet": {}
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

<h3 id="describechangeset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeChangeSetResponse](#schemadescribechangesetresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEntity

<a id="opIdDescribeEntity"></a>

> Code samples

```bash
curl 'https://marketplace-catalog.us-east-1.amazonaws.com/DescribeEntity#catalog&entityId?catalog=string&entityId=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /DescribeEntity#catalog&entityId`

Returns the metadata and content of the entity.

<h3 id="describeentity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|catalog|query|string|true|Required. The catalog related to the request. Fixed value: <code>AWSMarketplace</code> |
|entityId|query|string|true|Required. The unique ID of the entity to describe.|
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
  "EntityType": {},
  "EntityIdentifier": {},
  "EntityArn": {},
  "LastModifiedDate": {},
  "Details": {}
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

<h3 id="describeentity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEntityResponse](#schemadescribeentityresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ResourceNotSupportedException|[ResourceNotSupportedException](#schemaresourcenotsupportedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResourcePolicy

<a id="opIdGetResourcePolicy"></a>

> Code samples

```bash
curl 'https://marketplace-catalog.us-east-1.amazonaws.com/GetResourcePolicy#resourceArn?resourceArn=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /GetResourcePolicy#resourceArn`

Gets a resource-based policy of an Entity that is identified by its resource ARN.

<h3 id="getresourcepolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|query|string|true|The Amazon Resource Name (ARN) of the Entity resource that is associated with the resource policy.|
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
  "Policy": {}
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

<h3 id="getresourcepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetResourcePolicyResponse](#schemagetresourcepolicyresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListChangeSets

<a id="opIdListChangeSets"></a>

> Code samples

```bash
curl https://marketplace-catalog.us-east-1.amazonaws.com/ListChangeSets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Catalog": "string",
    "FilterList": [
      {
        "Name": {},
        "ValueList": {}
      }
    ],
    "Sort": {
      "SortBy": {},
      "SortOrder": {}
    },
    "MaxResults": 1,
    "NextToken": "string"
  }'
```

`POST /ListChangeSets`

<p>Returns the list of change sets owned by the account being used to make the call. You can filter this list by providing any combination of <code>entityId</code>, <code>ChangeSetName</code>, and status. If you provide more than one filter, the API operation applies a logical AND between the filters.</p> <p>You can describe a change during the 60-day request history retention period for API calls.</p>

> Body parameter

```json
{
  "Catalog": "string",
  "FilterList": [
    {
      "Name": {},
      "ValueList": {}
    }
  ],
  "Sort": {
    "SortBy": {},
    "SortOrder": {}
  },
  "MaxResults": 1,
  "NextToken": "string"
}
```

<h3 id="listchangesets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Catalog|body|string|true|The catalog related to the request. Fixed value: <code>AWSMarketplace</code> |
|» FilterList|body|[[Filter](#schemafilter)]|false|An array of filter objects.|
|» Sort|body|object|false|An object that contains two attributes, <code>SortBy</code> and <code>SortOrder</code>.|
|» » SortBy|body|object|false|none|
|» » SortOrder|body|object|false|none|
|» MaxResults|body|integer|false|The maximum number of results returned by a single call. This value must be provided in the next call to retrieve the next set of results. By default, this value is 20.|
|» NextToken|body|string|false|The token value retrieved from a previous call to access the next page of results.|

> Example responses

> 200 Response

```json
{
  "ChangeSetSummaryList": {},
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

<h3 id="listchangesets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListChangeSetsResponse](#schemalistchangesetsresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListEntities

<a id="opIdListEntities"></a>

> Code samples

```bash
curl https://marketplace-catalog.us-east-1.amazonaws.com/ListEntities \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Catalog": "string",
    "EntityType": "string",
    "FilterList": [
      {
        "Name": {},
        "ValueList": {}
      }
    ],
    "Sort": {
      "SortBy": {},
      "SortOrder": {}
    },
    "NextToken": "string",
    "MaxResults": 1,
    "OwnershipType": "SELF"
  }'
```

`POST /ListEntities`

Provides the list of entities of a given type.

> Body parameter

```json
{
  "Catalog": "string",
  "EntityType": "string",
  "FilterList": [
    {
      "Name": {},
      "ValueList": {}
    }
  ],
  "Sort": {
    "SortBy": {},
    "SortOrder": {}
  },
  "NextToken": "string",
  "MaxResults": 1,
  "OwnershipType": "SELF"
}
```

<h3 id="listentities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Catalog|body|string|true|The catalog related to the request. Fixed value: <code>AWSMarketplace</code> |
|» EntityType|body|string|true|The type of entities to retrieve.|
|» FilterList|body|[[Filter](#schemafilter)]|false|An array of filter objects. Each filter object contains two attributes, <code>filterName</code> and <code>filterValues</code>.|
|» Sort|body|object|false|An object that contains two attributes, <code>SortBy</code> and <code>SortOrder</code>.|
|» » SortBy|body|object|false|none|
|» » SortOrder|body|object|false|none|
|» NextToken|body|string|false|The value of the next token, if it exists. Null if there are no more results.|
|» MaxResults|body|integer|false|Specifies the upper limit of the elements on a single page. If a value isn't provided, the default value is 20.|
|» OwnershipType|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» OwnershipType|SELF|
|» OwnershipType|SHARED|

> Example responses

> 200 Response

```json
{
  "EntitySummaryList": {},
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

<h3 id="listentities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEntitiesResponse](#schemalistentitiesresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://marketplace-catalog.us-east-1.amazonaws.com/ListTagsForResource \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ResourceArn": "string"
  }'
```

`POST /ListTagsForResource`

Lists all tags that have been added to a resource (either an <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#catalog-api-entities">entity</a> or <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets">change set</a>).

> Body parameter

```json
{
  "ResourceArn": "string"
}
```

<h3 id="listtagsforresource-parameters">Parameters</h3>

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
|» ResourceArn|body|string|true|Required. The Amazon Resource Name (ARN) associated with the resource you want to list tags on.|

> Example responses

> 200 Response

```json
{
  "ResourceArn": {},
  "Tags": {}
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutResourcePolicy

<a id="opIdPutResourcePolicy"></a>

> Code samples

```bash
curl https://marketplace-catalog.us-east-1.amazonaws.com/PutResourcePolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ResourceArn": "string",
    "Policy": "string"
  }'
```

`POST /PutResourcePolicy`

Attaches a resource-based policy to an Entity. Examples of an entity include: <code>AmiProduct</code> and <code>ContainerProduct</code>.

> Body parameter

```json
{
  "ResourceArn": "string",
  "Policy": "string"
}
```

<h3 id="putresourcepolicy-parameters">Parameters</h3>

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
|» ResourceArn|body|string|true|The Amazon Resource Name (ARN) of the Entity resource you want to associate with a resource policy. |
|» Policy|body|string|true|The policy document to set; formatted in JSON.|

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

<h3 id="putresourcepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutResourcePolicyResponse](#schemaputresourcepolicyresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartChangeSet

<a id="opIdStartChangeSet"></a>

> Code samples

```bash
curl https://marketplace-catalog.us-east-1.amazonaws.com/StartChangeSet \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Catalog": "string",
    "ChangeSet": [
      {
        "ChangeType": {},
        "Entity": {
          "Type": {},
          "Identifier": {}
        },
        "EntityTags": {},
        "Details": {},
        "ChangeName": {}
      }
    ],
    "ChangeSetName": "string",
    "ClientRequestToken": "string",
    "ChangeSetTags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }'
```

`POST /StartChangeSet`

<p>Allows you to request changes for your entities. Within a single <code>ChangeSet</code>, you can't start the same change type against the same entity multiple times. Additionally, when a <code>ChangeSet</code> is running, all the entities targeted by the different changes are locked until the change set has completed (either succeeded, cancelled, or failed). If you try to start a change set containing a change against an entity that is already locked, you will receive a <code>ResourceInUseException</code> error.</p> <p>For example, you can't start the <code>ChangeSet</code> described in the <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_StartChangeSet.html#API_StartChangeSet_Examples">example</a> later in this topic because it contains two changes to run the same change type (<code>AddRevisions</code>) against the same entity (<code>entity-id@1</code>).</p> <p>For more information about working with change sets, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets"> Working with change sets</a>. For information on change types for single-AMI products, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/ami-products.html#working-with-single-AMI-products">Working with single-AMI products</a>. Als, for more information on change types available for container-based products, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/container-products.html#working-with-container-products">Working with container products</a>.</p>

> Body parameter

```json
{
  "Catalog": "string",
  "ChangeSet": [
    {
      "ChangeType": {},
      "Entity": {
        "Type": {},
        "Identifier": {}
      },
      "EntityTags": {},
      "Details": {},
      "ChangeName": {}
    }
  ],
  "ChangeSetName": "string",
  "ClientRequestToken": "string",
  "ChangeSetTags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="startchangeset-parameters">Parameters</h3>

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
|» Catalog|body|string|true|The catalog related to the request. Fixed value: <code>AWSMarketplace</code> |
|» ChangeSet|body|[[Change](#schemachange)]|true|Array of <code>change</code> object.|
|» ChangeSetName|body|string|false|Optional case sensitive string of up to 100 ASCII characters. The change set name can be used to filter the list of change sets. |
|» ClientRequestToken|body|string|false|A unique token to identify the request to ensure idempotency.|
|» ChangeSetTags|body|[[Tag](#schematag)]|false|A list of objects specifying each key name and value for the <code>ChangeSetTags</code> property.|

> Example responses

> 200 Response

```json
{
  "ChangeSetId": {},
  "ChangeSetArn": {}
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

<h3 id="startchangeset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartChangeSetResponse](#schemastartchangesetresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://marketplace-catalog.us-east-1.amazonaws.com/TagResource \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ResourceArn": "string",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }'
```

`POST /TagResource`

Tags a resource (either an <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#catalog-api-entities">entity</a> or <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets">change set</a>).

> Body parameter

```json
{
  "ResourceArn": "string",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="tagresource-parameters">Parameters</h3>

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
|» ResourceArn|body|string|true|Required. The Amazon Resource Name (ARN) associated with the resource you want to tag.|
|» Tags|body|[[Tag](#schematag)]|true|Required. A list of objects specifying each key name and value. Number of objects allowed: 1-50.|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl https://marketplace-catalog.us-east-1.amazonaws.com/UntagResource \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ResourceArn": "string",
    "TagKeys": [
      "string"
    ]
  }'
```

`POST /UntagResource`

Removes a tag or list of tags from a resource (either an <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#catalog-api-entities">entity</a> or <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets">change set</a>).

> Body parameter

```json
{
  "ResourceArn": "string",
  "TagKeys": [
    "string"
  ]
}
```

<h3 id="untagresource-parameters">Parameters</h3>

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
|» ResourceArn|body|string|true|Required. The Amazon Resource Name (ARN) associated with the resource you want to remove the tag from.|
|» TagKeys|body|[[TagKey](#schematagkey)]|true|Required. A list of key names of tags to be removed. Number of strings allowed: 0-256.|

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CancelChangeSetResponse">CancelChangeSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemacancelchangesetresponse"></a>
<a id="schema_CancelChangeSetResponse"></a>
<a id="tocScancelchangesetresponse"></a>
<a id="tocscancelchangesetresponse"></a>

```json
{
  "ChangeSetId": {},
  "ChangeSetArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeSetId|object|false|none|none|
|ChangeSetArn|object|false|none|none|

<h2 id="tocS_InternalServiceException">InternalServiceException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserviceexception"></a>
<a id="schema_InternalServiceException"></a>
<a id="tocSinternalserviceexception"></a>
<a id="tocsinternalserviceexception"></a>

```json
null
```

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

```json
null
```

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

```json
null
```

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_ResourceInUseException">ResourceInUseException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceinuseexception"></a>
<a id="schema_ResourceInUseException"></a>
<a id="tocSresourceinuseexception"></a>
<a id="tocsresourceinuseexception"></a>

```json
null
```

<h2 id="tocS_ThrottlingException">ThrottlingException</h2>
<!-- backwards compatibility -->
<a id="schemathrottlingexception"></a>
<a id="schema_ThrottlingException"></a>
<a id="tocSthrottlingexception"></a>
<a id="tocsthrottlingexception"></a>

```json
null
```

<h2 id="tocS_DeleteResourcePolicyResponse">DeleteResourcePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresourcepolicyresponse"></a>
<a id="schema_DeleteResourcePolicyResponse"></a>
<a id="tocSdeleteresourcepolicyresponse"></a>
<a id="tocsdeleteresourcepolicyresponse"></a>

```json
{}
```

<h2 id="tocS_DescribeChangeSetResponse">DescribeChangeSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribechangesetresponse"></a>
<a id="schema_DescribeChangeSetResponse"></a>
<a id="tocSdescribechangesetresponse"></a>
<a id="tocsdescribechangesetresponse"></a>

```json
{
  "ChangeSetId": {},
  "ChangeSetArn": {},
  "ChangeSetName": {},
  "StartTime": {},
  "EndTime": {},
  "Status": {},
  "FailureCode": {},
  "FailureDescription": {},
  "ChangeSet": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeSetId|object|false|none|none|
|ChangeSetArn|object|false|none|none|
|ChangeSetName|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|Status|object|false|none|none|
|FailureCode|object|false|none|none|
|FailureDescription|object|false|none|none|
|ChangeSet|object|false|none|none|

<h2 id="tocS_DescribeEntityResponse">DescribeEntityResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeentityresponse"></a>
<a id="schema_DescribeEntityResponse"></a>
<a id="tocSdescribeentityresponse"></a>
<a id="tocsdescribeentityresponse"></a>

```json
{
  "EntityType": {},
  "EntityIdentifier": {},
  "EntityArn": {},
  "LastModifiedDate": {},
  "Details": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EntityType|object|false|none|none|
|EntityIdentifier|object|false|none|none|
|EntityArn|object|false|none|none|
|LastModifiedDate|object|false|none|none|
|Details|object|false|none|none|

<h2 id="tocS_ResourceNotSupportedException">ResourceNotSupportedException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotsupportedexception"></a>
<a id="schema_ResourceNotSupportedException"></a>
<a id="tocSresourcenotsupportedexception"></a>
<a id="tocsresourcenotsupportedexception"></a>

```json
null
```

<h2 id="tocS_GetResourcePolicyResponse">GetResourcePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcepolicyresponse"></a>
<a id="schema_GetResourcePolicyResponse"></a>
<a id="tocSgetresourcepolicyresponse"></a>
<a id="tocsgetresourcepolicyresponse"></a>

```json
{
  "Policy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|false|none|none|

<h2 id="tocS_ListChangeSetsResponse">ListChangeSetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistchangesetsresponse"></a>
<a id="schema_ListChangeSetsResponse"></a>
<a id="tocSlistchangesetsresponse"></a>
<a id="tocslistchangesetsresponse"></a>

```json
{
  "ChangeSetSummaryList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeSetSummaryList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_Filter">Filter</h2>
<!-- backwards compatibility -->
<a id="schemafilter"></a>
<a id="schema_Filter"></a>
<a id="tocSfilter"></a>
<a id="tocsfilter"></a>

```json
{
  "Name": {},
  "ValueList": {}
}
```

A filter object, used to optionally filter results from calls to the <code>ListEntities</code> and <code>ListChangeSets</code> actions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|ValueList|object|false|none|none|

<h2 id="tocS_SortBy">SortBy</h2>
<!-- backwards compatibility -->
<a id="schemasortby"></a>
<a id="schema_SortBy"></a>
<a id="tocSsortby"></a>
<a id="tocssortby"></a>

```json
"string"
```

<h2 id="tocS_SortOrder">SortOrder</h2>
<!-- backwards compatibility -->
<a id="schemasortorder"></a>
<a id="schema_SortOrder"></a>
<a id="tocSsortorder"></a>
<a id="tocssortorder"></a>

```json
"ASCENDING"
```

<h2 id="tocS_ListEntitiesResponse">ListEntitiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistentitiesresponse"></a>
<a id="schema_ListEntitiesResponse"></a>
<a id="tocSlistentitiesresponse"></a>
<a id="tocslistentitiesresponse"></a>

```json
{
  "EntitySummaryList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EntitySummaryList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "ResourceArn": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_PutResourcePolicyResponse">PutResourcePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputresourcepolicyresponse"></a>
<a id="schema_PutResourcePolicyResponse"></a>
<a id="tocSputresourcepolicyresponse"></a>
<a id="tocsputresourcepolicyresponse"></a>

```json
{}
```

<h2 id="tocS_StartChangeSetResponse">StartChangeSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartchangesetresponse"></a>
<a id="schema_StartChangeSetResponse"></a>
<a id="tocSstartchangesetresponse"></a>
<a id="tocsstartchangesetresponse"></a>

```json
{
  "ChangeSetId": {},
  "ChangeSetArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeSetId|object|false|none|none|
|ChangeSetArn|object|false|none|none|

<h2 id="tocS_Change">Change</h2>
<!-- backwards compatibility -->
<a id="schemachange"></a>
<a id="schema_Change"></a>
<a id="tocSchange"></a>
<a id="tocschange"></a>

```json
{
  "ChangeType": {},
  "Entity": {
    "Type": {},
    "Identifier": {}
  },
  "EntityTags": {},
  "Details": {},
  "ChangeName": {}
}
```

An object that contains the <code>ChangeType</code>, <code>Details</code>, and <code>Entity</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeType|object|true|none|none|
|Entity|object|true|none|none|
|EntityTags|object|false|none|none|
|Details|object|true|none|none|
|ChangeName|object|false|none|none|

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "Key": {},
  "Value": {}
}
```

A list of objects specifying each key name and value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_ServiceQuotaExceededException">ServiceQuotaExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaservicequotaexceededexception"></a>
<a id="schema_ServiceQuotaExceededException"></a>
<a id="tocSservicequotaexceededexception"></a>
<a id="tocsservicequotaexceededexception"></a>

```json
null
```

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

<h2 id="tocS_ARN">ARN</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_ARN"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"string"
```

<h2 id="tocS_Catalog">Catalog</h2>
<!-- backwards compatibility -->
<a id="schemacatalog"></a>
<a id="schema_Catalog"></a>
<a id="tocScatalog"></a>
<a id="tocscatalog"></a>

```json
"string"
```

<h2 id="tocS_ResourceId">ResourceId</h2>
<!-- backwards compatibility -->
<a id="schemaresourceid"></a>
<a id="schema_ResourceId"></a>
<a id="tocSresourceid"></a>
<a id="tocsresourceid"></a>

```json
"string"
```

<h2 id="tocS_CancelChangeSetRequest">CancelChangeSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelchangesetrequest"></a>
<a id="schema_CancelChangeSetRequest"></a>
<a id="tocScancelchangesetrequest"></a>
<a id="tocscancelchangesetrequest"></a>

```json
{}
```

<h2 id="tocS_ChangeType">ChangeType</h2>
<!-- backwards compatibility -->
<a id="schemachangetype"></a>
<a id="schema_ChangeType"></a>
<a id="tocSchangetype"></a>
<a id="tocschangetype"></a>

```json
"string"
```

<h2 id="tocS_Entity">Entity</h2>
<!-- backwards compatibility -->
<a id="schemaentity"></a>
<a id="schema_Entity"></a>
<a id="tocSentity"></a>
<a id="tocsentity"></a>

```json
{
  "Type": {},
  "Identifier": {}
}
```

An entity contains data that describes your product, its supported features, and how it can be used or launched by your customer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|true|none|none|
|Identifier|object|false|none|none|

<h2 id="tocS_TagList">TagList</h2>
<!-- backwards compatibility -->
<a id="schemataglist"></a>
<a id="schema_TagList"></a>
<a id="tocStaglist"></a>
<a id="tocstaglist"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_Json">Json</h2>
<!-- backwards compatibility -->
<a id="schemajson"></a>
<a id="schema_Json"></a>
<a id="tocSjson"></a>
<a id="tocsjson"></a>

```json
"string"
```

<h2 id="tocS_ChangeName">ChangeName</h2>
<!-- backwards compatibility -->
<a id="schemachangename"></a>
<a id="schema_ChangeName"></a>
<a id="tocSchangename"></a>
<a id="tocschangename"></a>

```json
"string"
```

<h2 id="tocS_ChangeSummary">ChangeSummary</h2>
<!-- backwards compatibility -->
<a id="schemachangesummary"></a>
<a id="schema_ChangeSummary"></a>
<a id="tocSchangesummary"></a>
<a id="tocschangesummary"></a>

```json
{
  "ChangeType": {},
  "Entity": {
    "Type": {},
    "Identifier": {}
  },
  "Details": {},
  "ErrorDetailList": {},
  "ChangeName": {}
}
```

This object is a container for common summary information about the change. The summary doesn't contain the whole change structure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeType|object|false|none|none|
|Entity|object|false|none|none|
|Details|object|false|none|none|
|ErrorDetailList|object|false|none|none|
|ChangeName|object|false|none|none|

<h2 id="tocS_ChangeSetDescription">ChangeSetDescription</h2>
<!-- backwards compatibility -->
<a id="schemachangesetdescription"></a>
<a id="schema_ChangeSetDescription"></a>
<a id="tocSchangesetdescription"></a>
<a id="tocschangesetdescription"></a>

```json
[
  {
    "ChangeType": {},
    "Entity": {
      "Type": {},
      "Identifier": {}
    },
    "Details": {},
    "ErrorDetailList": {},
    "ChangeName": {}
  }
]
```

<h2 id="tocS_ChangeSetName">ChangeSetName</h2>
<!-- backwards compatibility -->
<a id="schemachangesetname"></a>
<a id="schema_ChangeSetName"></a>
<a id="tocSchangesetname"></a>
<a id="tocschangesetname"></a>

```json
"string"
```

<h2 id="tocS_ChangeSetSummaryListItem">ChangeSetSummaryListItem</h2>
<!-- backwards compatibility -->
<a id="schemachangesetsummarylistitem"></a>
<a id="schema_ChangeSetSummaryListItem"></a>
<a id="tocSchangesetsummarylistitem"></a>
<a id="tocschangesetsummarylistitem"></a>

```json
{
  "ChangeSetId": {},
  "ChangeSetArn": {},
  "ChangeSetName": {},
  "StartTime": {},
  "EndTime": {},
  "Status": {},
  "EntityIdList": {},
  "FailureCode": {}
}
```

A summary of a change set returned in a list of change sets when the <code>ListChangeSets</code> action is called.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeSetId|object|false|none|none|
|ChangeSetArn|object|false|none|none|
|ChangeSetName|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|Status|object|false|none|none|
|EntityIdList|object|false|none|none|
|FailureCode|object|false|none|none|

<h2 id="tocS_ChangeSetSummaryList">ChangeSetSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemachangesetsummarylist"></a>
<a id="schema_ChangeSetSummaryList"></a>
<a id="tocSchangesetsummarylist"></a>
<a id="tocschangesetsummarylist"></a>

```json
[
  {
    "ChangeSetId": {},
    "ChangeSetArn": {},
    "ChangeSetName": {},
    "StartTime": {},
    "EndTime": {},
    "Status": {},
    "EntityIdList": {},
    "FailureCode": {}
  }
]
```

<h2 id="tocS_DateTimeISO8601">DateTimeISO8601</h2>
<!-- backwards compatibility -->
<a id="schemadatetimeiso8601"></a>
<a id="schema_DateTimeISO8601"></a>
<a id="tocSdatetimeiso8601"></a>
<a id="tocsdatetimeiso8601"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_ChangeStatus">ChangeStatus</h2>
<!-- backwards compatibility -->
<a id="schemachangestatus"></a>
<a id="schema_ChangeStatus"></a>
<a id="tocSchangestatus"></a>
<a id="tocschangestatus"></a>

```json
"PREPARING"
```

<h2 id="tocS_ResourceIdList">ResourceIdList</h2>
<!-- backwards compatibility -->
<a id="schemaresourceidlist"></a>
<a id="schema_ResourceIdList"></a>
<a id="tocSresourceidlist"></a>
<a id="tocsresourceidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_FailureCode">FailureCode</h2>
<!-- backwards compatibility -->
<a id="schemafailurecode"></a>
<a id="schema_FailureCode"></a>
<a id="tocSfailurecode"></a>
<a id="tocsfailurecode"></a>

```json
"CLIENT_ERROR"
```

<h2 id="tocS_ErrorDetailList">ErrorDetailList</h2>
<!-- backwards compatibility -->
<a id="schemaerrordetaillist"></a>
<a id="schema_ErrorDetailList"></a>
<a id="tocSerrordetaillist"></a>
<a id="tocserrordetaillist"></a>

```json
[
  {
    "ErrorCode": {},
    "ErrorMessage": {}
  }
]
```

<h2 id="tocS_ClientRequestToken">ClientRequestToken</h2>
<!-- backwards compatibility -->
<a id="schemaclientrequesttoken"></a>
<a id="schema_ClientRequestToken"></a>
<a id="tocSclientrequesttoken"></a>
<a id="tocsclientrequesttoken"></a>

```json
"string"
```

<h2 id="tocS_ResourceARN">ResourceARN</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearn"></a>
<a id="schema_ResourceARN"></a>
<a id="tocSresourcearn"></a>
<a id="tocsresourcearn"></a>

```json
"string"
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

<h2 id="tocS_DescribeChangeSetRequest">DescribeChangeSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribechangesetrequest"></a>
<a id="schema_DescribeChangeSetRequest"></a>
<a id="tocSdescribechangesetrequest"></a>
<a id="tocsdescribechangesetrequest"></a>

```json
{}
```

<h2 id="tocS_ExceptionMessageContent">ExceptionMessageContent</h2>
<!-- backwards compatibility -->
<a id="schemaexceptionmessagecontent"></a>
<a id="schema_ExceptionMessageContent"></a>
<a id="tocSexceptionmessagecontent"></a>
<a id="tocsexceptionmessagecontent"></a>

```json
"string"
```

<h2 id="tocS_DescribeEntityRequest">DescribeEntityRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeentityrequest"></a>
<a id="schema_DescribeEntityRequest"></a>
<a id="tocSdescribeentityrequest"></a>
<a id="tocsdescribeentityrequest"></a>

```json
{}
```

<h2 id="tocS_EntityType">EntityType</h2>
<!-- backwards compatibility -->
<a id="schemaentitytype"></a>
<a id="schema_EntityType"></a>
<a id="tocSentitytype"></a>
<a id="tocsentitytype"></a>

```json
"string"
```

<h2 id="tocS_Identifier">Identifier</h2>
<!-- backwards compatibility -->
<a id="schemaidentifier"></a>
<a id="schema_Identifier"></a>
<a id="tocSidentifier"></a>
<a id="tocsidentifier"></a>

```json
"string"
```

<h2 id="tocS_EntityNameString">EntityNameString</h2>
<!-- backwards compatibility -->
<a id="schemaentitynamestring"></a>
<a id="schema_EntityNameString"></a>
<a id="tocSentitynamestring"></a>
<a id="tocsentitynamestring"></a>

```json
"string"
```

<h2 id="tocS_VisibilityValue">VisibilityValue</h2>
<!-- backwards compatibility -->
<a id="schemavisibilityvalue"></a>
<a id="schema_VisibilityValue"></a>
<a id="tocSvisibilityvalue"></a>
<a id="tocsvisibilityvalue"></a>

```json
"string"
```

<h2 id="tocS_EntitySummary">EntitySummary</h2>
<!-- backwards compatibility -->
<a id="schemaentitysummary"></a>
<a id="schema_EntitySummary"></a>
<a id="tocSentitysummary"></a>
<a id="tocsentitysummary"></a>

```json
{
  "Name": {},
  "EntityType": {},
  "EntityId": {},
  "EntityArn": {},
  "LastModifiedDate": {},
  "Visibility": {}
}
```

This object is a container for common summary information about the entity. The summary doesn't contain the whole entity structure, but it does contain information common across all entities.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|EntityType|object|false|none|none|
|EntityId|object|false|none|none|
|EntityArn|object|false|none|none|
|LastModifiedDate|object|false|none|none|
|Visibility|object|false|none|none|

<h2 id="tocS_EntitySummaryList">EntitySummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaentitysummarylist"></a>
<a id="schema_EntitySummaryList"></a>
<a id="tocSentitysummarylist"></a>
<a id="tocsentitysummarylist"></a>

```json
[
  {
    "Name": {},
    "EntityType": {},
    "EntityId": {},
    "EntityArn": {},
    "LastModifiedDate": {},
    "Visibility": {}
  }
]
```

<h2 id="tocS_ErrorCodeString">ErrorCodeString</h2>
<!-- backwards compatibility -->
<a id="schemaerrorcodestring"></a>
<a id="schema_ErrorCodeString"></a>
<a id="tocSerrorcodestring"></a>
<a id="tocserrorcodestring"></a>

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
  "ErrorCode": {},
  "ErrorMessage": {}
}
```

Details about the error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|

<h2 id="tocS_FilterName">FilterName</h2>
<!-- backwards compatibility -->
<a id="schemafiltername"></a>
<a id="schema_FilterName"></a>
<a id="tocSfiltername"></a>
<a id="tocsfiltername"></a>

```json
"string"
```

<h2 id="tocS_ValueList">ValueList</h2>
<!-- backwards compatibility -->
<a id="schemavaluelist"></a>
<a id="schema_ValueList"></a>
<a id="tocSvaluelist"></a>
<a id="tocsvaluelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_FilterList">FilterList</h2>
<!-- backwards compatibility -->
<a id="schemafilterlist"></a>
<a id="schema_FilterList"></a>
<a id="tocSfilterlist"></a>
<a id="tocsfilterlist"></a>

```json
[
  {
    "Name": {},
    "ValueList": {}
  }
]
```

<h2 id="tocS_FilterValueContent">FilterValueContent</h2>
<!-- backwards compatibility -->
<a id="schemafiltervaluecontent"></a>
<a id="schema_FilterValueContent"></a>
<a id="tocSfiltervaluecontent"></a>
<a id="tocsfiltervaluecontent"></a>

```json
"string"
```

<h2 id="tocS_GetResourcePolicyRequest">GetResourcePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetresourcepolicyrequest"></a>
<a id="schema_GetResourcePolicyRequest"></a>
<a id="tocSgetresourcepolicyrequest"></a>
<a id="tocsgetresourcepolicyrequest"></a>

```json
{}
```

<h2 id="tocS_ResourcePolicyJson">ResourcePolicyJson</h2>
<!-- backwards compatibility -->
<a id="schemaresourcepolicyjson"></a>
<a id="schema_ResourcePolicyJson"></a>
<a id="tocSresourcepolicyjson"></a>
<a id="tocsresourcepolicyjson"></a>

```json
"string"
```

<h2 id="tocS_ListChangeSetsMaxResultInteger">ListChangeSetsMaxResultInteger</h2>
<!-- backwards compatibility -->
<a id="schemalistchangesetsmaxresultinteger"></a>
<a id="schema_ListChangeSetsMaxResultInteger"></a>
<a id="tocSlistchangesetsmaxresultinteger"></a>
<a id="tocslistchangesetsmaxresultinteger"></a>

```json
1
```

<h2 id="tocS_Sort">Sort</h2>
<!-- backwards compatibility -->
<a id="schemasort"></a>
<a id="schema_Sort"></a>
<a id="tocSsort"></a>
<a id="tocssort"></a>

```json
{
  "SortBy": {},
  "SortOrder": {}
}
```

An object that contains two attributes, <code>SortBy</code> and <code>SortOrder</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SortBy|object|false|none|none|
|SortOrder|object|false|none|none|

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

```json
"string"
```

<h2 id="tocS_ListChangeSetsRequest">ListChangeSetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistchangesetsrequest"></a>
<a id="schema_ListChangeSetsRequest"></a>
<a id="tocSlistchangesetsrequest"></a>
<a id="tocslistchangesetsrequest"></a>

```json
{
  "Catalog": {},
  "FilterList": {},
  "Sort": {
    "SortBy": {},
    "SortOrder": {}
  },
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Catalog|object|true|none|none|
|FilterList|object|false|none|none|
|Sort|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListEntitiesMaxResultInteger">ListEntitiesMaxResultInteger</h2>
<!-- backwards compatibility -->
<a id="schemalistentitiesmaxresultinteger"></a>
<a id="schema_ListEntitiesMaxResultInteger"></a>
<a id="tocSlistentitiesmaxresultinteger"></a>
<a id="tocslistentitiesmaxresultinteger"></a>

```json
1
```

<h2 id="tocS_OwnershipType">OwnershipType</h2>
<!-- backwards compatibility -->
<a id="schemaownershiptype"></a>
<a id="schema_OwnershipType"></a>
<a id="tocSownershiptype"></a>
<a id="tocsownershiptype"></a>

```json
"SELF"
```

<h2 id="tocS_ListEntitiesRequest">ListEntitiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistentitiesrequest"></a>
<a id="schema_ListEntitiesRequest"></a>
<a id="tocSlistentitiesrequest"></a>
<a id="tocslistentitiesrequest"></a>

```json
{
  "Catalog": {},
  "EntityType": {},
  "FilterList": {},
  "Sort": {
    "SortBy": {},
    "SortOrder": {}
  },
  "NextToken": {},
  "MaxResults": {},
  "OwnershipType": "SELF"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Catalog|object|true|none|none|
|EntityType|object|true|none|none|
|FilterList|object|false|none|none|
|Sort|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|OwnershipType|[OwnershipType](#schemaownershiptype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|OwnershipType|SELF|
|OwnershipType|SHARED|

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|

<h2 id="tocS_PutResourcePolicyRequest">PutResourcePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputresourcepolicyrequest"></a>
<a id="schema_PutResourcePolicyRequest"></a>
<a id="tocSputresourcepolicyrequest"></a>
<a id="tocsputresourcepolicyrequest"></a>

```json
{
  "ResourceArn": {},
  "Policy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|Policy|object|true|none|none|

<h2 id="tocS_RequestedChangeList">RequestedChangeList</h2>
<!-- backwards compatibility -->
<a id="schemarequestedchangelist"></a>
<a id="schema_RequestedChangeList"></a>
<a id="tocSrequestedchangelist"></a>
<a id="tocsrequestedchangelist"></a>

```json
[
  {
    "ChangeType": {},
    "Entity": {
      "Type": {},
      "Identifier": {}
    },
    "EntityTags": {},
    "Details": {},
    "ChangeName": {}
  }
]
```

<h2 id="tocS_StartChangeSetRequest">StartChangeSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartchangesetrequest"></a>
<a id="schema_StartChangeSetRequest"></a>
<a id="tocSstartchangesetrequest"></a>
<a id="tocsstartchangesetrequest"></a>

```json
{
  "Catalog": {},
  "ChangeSet": {},
  "ChangeSetName": {},
  "ClientRequestToken": {},
  "ChangeSetTags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Catalog|object|true|none|none|
|ChangeSet|object|true|none|none|
|ChangeSetName|object|false|none|none|
|ClientRequestToken|object|false|none|none|
|ChangeSetTags|object|false|none|none|

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
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
  "ResourceArn": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{
  "ResourceArn": {},
  "TagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|TagKeys|object|true|none|none|
