<h1 id="aws-service-catalog-app-registry">AWS Service Catalog App Registry v2020-06-24</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

 Amazon Web Services Service Catalog AppRegistry enables organizations to understand the application context of their Amazon Web Services resources. AppRegistry provides a repository of your applications, their resources, and the application metadata that you use within your enterprise.

Base URLs:

* <a href="http://servicecatalog-appregistry.us-east-1.amazonaws.com">http://servicecatalog-appregistry.us-east-1.amazonaws.com</a> - The AppRegistry multi-region endpoint

* <a href="https://servicecatalog-appregistry.us-east-1.amazonaws.com">https://servicecatalog-appregistry.us-east-1.amazonaws.com</a> - The AppRegistry multi-region endpoint

* <a href="http://servicecatalog-appregistry.cn-north-1.amazonaws.com.cn">http://servicecatalog-appregistry.cn-north-1.amazonaws.com.cn</a> - The AppRegistry endpoint for China (Beijing) and China (Ningxia)

* <a href="https://servicecatalog-appregistry.cn-north-1.amazonaws.com.cn">https://servicecatalog-appregistry.cn-north-1.amazonaws.com.cn</a> - The AppRegistry endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/servicecatalog-appregistry/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-service-catalog-app-registry-default">Default</h1>

## AssociateAttributeGroup

<a id="opIdAssociateAttributeGroup"></a>

> Code samples

```bash
curl https://servicecatalog-appregistry.us-east-1.amazonaws.com/applications/string/attribute-groups/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`PUT /applications/{application}/attribute-groups/{attributeGroup}`

Associates an attribute group with an application to augment the application's metadata with the group's attributes. This feature enables applications to be described with user-defined details that are machine-readable, such as third-party integrations.

<h3 id="associateattributegroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|application|path|string|true| The name, ID, or ARN of the application. |
|attributeGroup|path|string|true| The name, ID, or ARN of the attribute group that holds the attributes to describe the application. |
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
  "applicationArn": {},
  "attributeGroupArn": {}
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

<h3 id="associateattributegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateAttributeGroupResponse](#schemaassociateattributegroupresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateAttributeGroup

<a id="opIdDisassociateAttributeGroup"></a>

> Code samples

```bash
curl https://servicecatalog-appregistry.us-east-1.amazonaws.com/applications/string/attribute-groups/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /applications/{application}/attribute-groups/{attributeGroup}`

Disassociates an attribute group from an application to remove the extra attributes contained in the attribute group from the application's metadata. This operation reverts <code>AssociateAttributeGroup</code>.

<h3 id="disassociateattributegroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|application|path|string|true| The name, ID, or ARN of the application. |
|attributeGroup|path|string|true| The name, ID, or ARN of the attribute group that holds the attributes to describe the application. |
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
  "applicationArn": {},
  "attributeGroupArn": {}
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

<h3 id="disassociateattributegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateAttributeGroupResponse](#schemadisassociateattributegroupresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAssociatedResource

<a id="opIdGetAssociatedResource"></a>

> Code samples

```bash
curl https://servicecatalog-appregistry.us-east-1.amazonaws.com/applications/string/resources/CFN_STACK/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /applications/{application}/resources/{resourceType}/{resource}`

Gets the resource associated with the application.

<h3 id="getassociatedresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|application|path|string|true| The name, ID, or ARN of the application. |
|resourceType|path|string|true|The type of resource associated with the application.|
|resource|path|string|true|The name or ID of the resource associated with the application.|
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
|resourceType|CFN_STACK|
|resourceType|RESOURCE_TAG_VALUE|

> Example responses

> 200 Response

```json
{
  "resource": {
    "name": {},
    "arn": {},
    "associationTime": {},
    "integrations": {
      "resourceGroup": {
        "state": {},
        "arn": {},
        "errorMessage": {}
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

<h3 id="getassociatedresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAssociatedResourceResponse](#schemagetassociatedresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateResource

<a id="opIdAssociateResource"></a>

> Code samples

```bash
curl https://servicecatalog-appregistry.us-east-1.amazonaws.com/applications/string/resources/CFN_STACK/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`PUT /applications/{application}/resources/{resourceType}/{resource}`

 Associates a resource with an application. The resource can be specified by its ARN or name. The application can be specified by ARN, ID, or name. 

<h3 id="associateresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|application|path|string|true| The name, ID, or ARN of the application. |
|resourceType|path|string|true|The type of resource of which the application will be associated.|
|resource|path|string|true|The name or ID of the resource of which the application will be associated.|
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
|resourceType|CFN_STACK|
|resourceType|RESOURCE_TAG_VALUE|

> Example responses

> 200 Response

```json
{
  "applicationArn": {},
  "resourceArn": {}
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

<h3 id="associateresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateResourceResponse](#schemaassociateresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateResource

<a id="opIdDisassociateResource"></a>

> Code samples

```bash
curl https://servicecatalog-appregistry.us-east-1.amazonaws.com/applications/string/resources/CFN_STACK/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /applications/{application}/resources/{resourceType}/{resource}`

Disassociates a resource from application. Both the resource and the application can be specified either by ID or name.

<h3 id="disassociateresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|application|path|string|true|The name or ID of the application.|
|resourceType|path|string|true|The type of the resource that is being disassociated.|
|resource|path|string|true|The name or ID of the resource.|
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
|resourceType|CFN_STACK|
|resourceType|RESOURCE_TAG_VALUE|

> Example responses

> 200 Response

```json
{
  "applicationArn": {},
  "resourceArn": {}
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

<h3 id="disassociateresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateResourceResponse](#schemadisassociateresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListApplications

<a id="opIdListApplications"></a>

> Code samples

```bash
curl https://servicecatalog-appregistry.us-east-1.amazonaws.com/applications \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /applications`

Retrieves a list of all of your applications. Results are paginated.

<h3 id="listapplications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|The token to use to get the next page of results after a previous API call. |
|maxResults|query|integer|false|The upper bound of the number of results to return (cannot exceed 25). If this parameter is omitted, it defaults to 25. This value is optional.|
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
  "applications": {},
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

<h3 id="listapplications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListApplicationsResponse](#schemalistapplicationsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateApplication

<a id="opIdCreateApplication"></a>

> Code samples

```bash
curl https://servicecatalog-appregistry.us-east-1.amazonaws.com/applications \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "description": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "clientToken": "string"
  }'
```

`POST /applications`

Creates a new application that is the top-level node in a hierarchy of related cloud resource abstractions.

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "clientToken": "string"
}
```

<h3 id="createapplication-parameters">Parameters</h3>

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
|» name|body|string|true|The name of the application. The name must be unique in the region in which you are creating the application.|
|» description|body|string|false|The description of the application.|
|» tags|body|object|false|Key-value pairs you can use to associate with the application.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» clientToken|body|string|true|A unique identifier that you provide to ensure idempotency. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails.|

> Example responses

> 201 Response

```json
{
  "application": {
    "id": {},
    "arn": {},
    "name": {},
    "description": {},
    "creationTime": {},
    "lastUpdateTime": {},
    "tags": {
      "property1": "string",
      "property2": "string"
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

<h3 id="createapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateApplicationResponse](#schemacreateapplicationresponse)|
|480|480|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAttributeGroups

<a id="opIdListAttributeGroups"></a>

> Code samples

```bash
curl https://servicecatalog-appregistry.us-east-1.amazonaws.com/attribute-groups \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /attribute-groups`

Lists all attribute groups which you have access to. Results are paginated.

<h3 id="listattributegroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|The token to use to get the next page of results after a previous API call. |
|maxResults|query|integer|false|The upper bound of the number of results to return (cannot exceed 25). If this parameter is omitted, it defaults to 25. This value is optional.|
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
  "attributeGroups": {},
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

<h3 id="listattributegroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAttributeGroupsResponse](#schemalistattributegroupsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAttributeGroup

<a id="opIdCreateAttributeGroup"></a>

> Code samples

```bash
curl https://servicecatalog-appregistry.us-east-1.amazonaws.com/attribute-groups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "description": "string",
    "attributes": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "clientToken": "string"
  }'
```

`POST /attribute-groups`

Creates a new attribute group as a container for user-defined attributes. This feature enables users to have full control over their cloud application's metadata in a rich machine-readable format to facilitate integration with automated workflows and third-party tools.

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "attributes": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "clientToken": "string"
}
```

<h3 id="createattributegroup-parameters">Parameters</h3>

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
|» name|body|string|true|The name of the attribute group.|
|» description|body|string|false|The description of the attribute group that the user provides.|
|» attributes|body|string|true|A JSON string in the form of nested key-value pairs that represent the attributes in the group and describes an application and its components.|
|» tags|body|object|false|Key-value pairs you can use to associate with the attribute group.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» clientToken|body|string|true|A unique identifier that you provide to ensure idempotency. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails.|

> Example responses

> 201 Response

```json
{
  "attributeGroup": {
    "id": {},
    "arn": {},
    "name": {},
    "description": {},
    "creationTime": {},
    "lastUpdateTime": {},
    "tags": {
      "property1": "string",
      "property2": "string"
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

<h3 id="createattributegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateAttributeGroupResponse](#schemacreateattributegroupresponse)|
|480|480|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetApplication

<a id="opIdGetApplication"></a>

> Code samples

```bash
curl https://servicecatalog-appregistry.us-east-1.amazonaws.com/applications/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /applications/{application}`

 Retrieves metadata information about one of your applications. The application can be specified by its ARN, ID, or name (which is unique within one account in one region at a given point in time). Specify by ARN or ID in automated workflows if you want to make sure that the exact same application is returned or a <code>ResourceNotFoundException</code> is thrown, avoiding the ABA addressing problem. 

<h3 id="getapplication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|application|path|string|true| The name, ID, or ARN of the application. |
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
  "arn": {},
  "name": {},
  "description": {},
  "creationTime": {},
  "lastUpdateTime": {},
  "associatedResourceCount": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "integrations": {
    "resourceGroup": {
      "state": {},
      "arn": {},
      "errorMessage": {}
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

<h3 id="getapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetApplicationResponse](#schemagetapplicationresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteApplication

<a id="opIdDeleteApplication"></a>

> Code samples

```bash
curl https://servicecatalog-appregistry.us-east-1.amazonaws.com/applications/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /applications/{application}`

Deletes an application that is specified either by its application ID, name, or ARN. All associated attribute groups and resources must be disassociated from it before deleting an application.

<h3 id="deleteapplication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|application|path|string|true| The name, ID, or ARN of the application. |
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
  "application": {
    "id": {},
    "arn": {},
    "name": {},
    "description": {},
    "creationTime": {},
    "lastUpdateTime": {}
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

<h3 id="deleteapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteApplicationResponse](#schemadeleteapplicationresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateApplication

<a id="opIdUpdateApplication"></a>

> Code samples

```bash
curl https://servicecatalog-appregistry.us-east-1.amazonaws.com/applications/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "description": "string"
  }'
```

`PATCH /applications/{application}`

Updates an existing application with new attributes.

> Body parameter

```json
{
  "name": "string",
  "description": "string"
}
```

<h3 id="updateapplication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|application|path|string|true| The name, ID, or ARN of the application that will be updated. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» name|body|string|false|Deprecated: The new name of the application. The name must be unique in the region in which you are updating the application. Please do not use this field as we have stopped supporting name updates.|
|» description|body|string|false|The new description of the application.|

> Example responses

> 200 Response

```json
{
  "application": {
    "id": {},
    "arn": {},
    "name": {},
    "description": {},
    "creationTime": {},
    "lastUpdateTime": {},
    "tags": {
      "property1": "string",
      "property2": "string"
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

<h3 id="updateapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateApplicationResponse](#schemaupdateapplicationresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAttributeGroup

<a id="opIdGetAttributeGroup"></a>

> Code samples

```bash
curl https://servicecatalog-appregistry.us-east-1.amazonaws.com/attribute-groups/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /attribute-groups/{attributeGroup}`

 Retrieves an attribute group by its ARN, ID, or name. The attribute group can be specified by its ARN, ID, or name. 

<h3 id="getattributegroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|attributeGroup|path|string|true| The name, ID, or ARN of the attribute group that holds the attributes to describe the application. |
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
  "arn": {},
  "name": {},
  "description": {},
  "attributes": {},
  "creationTime": {},
  "lastUpdateTime": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "createdBy": {}
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

<h3 id="getattributegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAttributeGroupResponse](#schemagetattributegroupresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAttributeGroup

<a id="opIdDeleteAttributeGroup"></a>

> Code samples

```bash
curl https://servicecatalog-appregistry.us-east-1.amazonaws.com/attribute-groups/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /attribute-groups/{attributeGroup}`

Deletes an attribute group, specified either by its attribute group ID, name, or ARN.

<h3 id="deleteattributegroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|attributeGroup|path|string|true| The name, ID, or ARN of the attribute group that holds the attributes to describe the application. |
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
  "attributeGroup": {
    "id": {},
    "arn": {},
    "name": {},
    "description": {},
    "creationTime": {},
    "lastUpdateTime": {},
    "createdBy": {}
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

<h3 id="deleteattributegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteAttributeGroupResponse](#schemadeleteattributegroupresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAttributeGroup

<a id="opIdUpdateAttributeGroup"></a>

> Code samples

```bash
curl https://servicecatalog-appregistry.us-east-1.amazonaws.com/attribute-groups/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "description": "string",
    "attributes": "string"
  }'
```

`PATCH /attribute-groups/{attributeGroup}`

Updates an existing attribute group with new details. 

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "attributes": "string"
}
```

<h3 id="updateattributegroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|attributeGroup|path|string|true| The name, ID, or ARN of the attribute group that holds the attributes to describe the application. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» name|body|string|false|Deprecated: The new name of the attribute group. The name must be unique in the region in which you are updating the attribute group. Please do not use this field as we have stopped supporting name updates.|
|» description|body|string|false|The description of the attribute group that the user provides.|
|» attributes|body|string|false|A JSON string in the form of nested key-value pairs that represent the attributes in the group and describes an application and its components.|

> Example responses

> 200 Response

```json
{
  "attributeGroup": {
    "id": {},
    "arn": {},
    "name": {},
    "description": {},
    "creationTime": {},
    "lastUpdateTime": {},
    "tags": {
      "property1": "string",
      "property2": "string"
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

<h3 id="updateattributegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAttributeGroupResponse](#schemaupdateattributegroupresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetConfiguration

<a id="opIdGetConfiguration"></a>

> Code samples

```bash
curl https://servicecatalog-appregistry.us-east-1.amazonaws.com/configuration \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /configuration`

 Retrieves a <code>TagKey</code> configuration from an account. 

<h3 id="getconfiguration-parameters">Parameters</h3>

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
  "configuration": {
    "tagQueryConfiguration": {
      "tagKey": {}
    }
  }
}
```

> 480 Response

```json
null
```

<h3 id="getconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetConfigurationResponse](#schemagetconfigurationresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutConfiguration

<a id="opIdPutConfiguration"></a>

> Code samples

```bash
curl https://servicecatalog-appregistry.us-east-1.amazonaws.com/configuration \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "configuration": {
      "tagQueryConfiguration": {
        "tagKey": {}
      }
    }
  }'
```

`PUT /configuration`

 Associates a <code>TagKey</code> configuration to an account. 

> Body parameter

```json
{
  "configuration": {
    "tagQueryConfiguration": {
      "tagKey": {}
    }
  }
}
```

<h3 id="putconfiguration-parameters">Parameters</h3>

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
|» configuration|body|object|true| Includes all of the AppRegistry settings. |
|» » tagQueryConfiguration|body|object|false|none|
|» » » tagKey|body|object|false|none|

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

<h3 id="putconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ConflictException|[ConflictException](#schemaconflictexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAssociatedAttributeGroups

<a id="opIdListAssociatedAttributeGroups"></a>

> Code samples

```bash
curl https://servicecatalog-appregistry.us-east-1.amazonaws.com/applications/string/attribute-groups \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /applications/{application}/attribute-groups`

Lists all attribute groups that are associated with specified application. Results are paginated.

<h3 id="listassociatedattributegroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|application|path|string|true|The name or ID of the application.|
|nextToken|query|string|false|The token to use to get the next page of results after a previous API call. |
|maxResults|query|integer|false|The upper bound of the number of results to return (cannot exceed 25). If this parameter is omitted, it defaults to 25. This value is optional.|
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
  "attributeGroups": {},
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

<h3 id="listassociatedattributegroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAssociatedAttributeGroupsResponse](#schemalistassociatedattributegroupsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAssociatedResources

<a id="opIdListAssociatedResources"></a>

> Code samples

```bash
curl https://servicecatalog-appregistry.us-east-1.amazonaws.com/applications/string/resources \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /applications/{application}/resources`

<p> Lists all of the resources that are associated with the specified application. Results are paginated. </p> <note> <p> If you share an application, and a consumer account associates a tag query to the application, all of the users who can access the application can also view the tag values in all accounts that are associated with it using this API. </p> </note>

<h3 id="listassociatedresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|application|path|string|true| The name, ID, or ARN of the application. |
|nextToken|query|string|false|The token to use to get the next page of results after a previous API call. |
|maxResults|query|integer|false|The upper bound of the number of results to return (cannot exceed 25). If this parameter is omitted, it defaults to 25. This value is optional.|
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
  "resources": {},
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

<h3 id="listassociatedresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAssociatedResourcesResponse](#schemalistassociatedresourcesresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAttributeGroupsForApplication

<a id="opIdListAttributeGroupsForApplication"></a>

> Code samples

```bash
curl https://servicecatalog-appregistry.us-east-1.amazonaws.com/applications/string/attribute-group-details \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /applications/{application}/attribute-group-details`

Lists the details of all attribute groups associated with a specific application. The results display in pages.

<h3 id="listattributegroupsforapplication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|application|path|string|true|The name or ID of the application.|
|nextToken|query|string|false|This token retrieves the next page of results after a previous API call.|
|maxResults|query|integer|false|The upper bound of the number of results to return. The value cannot exceed 25. If you omit this parameter, it defaults to 25. This value is optional.|
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
  "attributeGroupsDetails": {},
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

<h3 id="listattributegroupsforapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAttributeGroupsForApplicationResponse](#schemalistattributegroupsforapplicationresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://servicecatalog-appregistry.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resourceArn}`

Lists all of the tags on the resource.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon resource name (ARN) that specifies the resource.|
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://servicecatalog-appregistry.us-east-1.amazonaws.com/tags/string \
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

`POST /tags/{resourceArn}`

<p>Assigns one or more tags (key-value pairs) to the specified resource.</p> <p>Each tag consists of a key and an optional value. If a tag with the same key is already associated with the resource, this action updates its value.</p> <p>This operation returns an empty response if the call was successful.</p>

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
|resourceArn|path|string|true|The Amazon resource name (ARN) that specifies the resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|true|The new or modified tags for the resource.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SyncResource

<a id="opIdSyncResource"></a>

> Code samples

```bash
curl https://servicecatalog-appregistry.us-east-1.amazonaws.com/sync/CFN_STACK/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /sync/{resourceType}/{resource}`

<p>Syncs the resource with current AppRegistry records.</p> <p>Specifically, the resource’s AppRegistry system tags sync with its associated application. We remove the resource's AppRegistry system tags if it does not associate with the application. The caller must have permissions to read and update the resource.</p>

<h3 id="syncresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceType|path|string|true|The type of resource of which the application will be associated.|
|resource|path|string|true|An entity you can work with and specify with a name or ID. Examples include an Amazon EC2 instance, an Amazon Web Services CloudFormation stack, or an Amazon S3 bucket.|
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
|resourceType|CFN_STACK|
|resourceType|RESOURCE_TAG_VALUE|

> Example responses

> 200 Response

```json
{
  "applicationArn": {},
  "resourceArn": {},
  "actionTaken": {}
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

<h3 id="syncresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SyncResourceResponse](#schemasyncresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://servicecatalog-appregistry.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resourceArn}#tagKeys`

<p>Removes tags from a resource.</p> <p>This operation returns an empty response if the call was successful.</p>

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon resource name (ARN) that specifies the resource.|
|tagKeys|query|[[TagKey](#schematagkey)]|true|A list of the tag keys to remove from the specified resource.|
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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AssociateAttributeGroupResponse">AssociateAttributeGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociateattributegroupresponse"></a>
<a id="schema_AssociateAttributeGroupResponse"></a>
<a id="tocSassociateattributegroupresponse"></a>
<a id="tocsassociateattributegroupresponse"></a>

```json
{
  "applicationArn": {},
  "attributeGroupArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationArn|object|false|none|none|
|attributeGroupArn|object|false|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

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

<h2 id="tocS_InternalServerException">InternalServerException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserverexception"></a>
<a id="schema_InternalServerException"></a>
<a id="tocSinternalserverexception"></a>
<a id="tocsinternalserverexception"></a>

```json
null
```

<h2 id="tocS_ServiceQuotaExceededException">ServiceQuotaExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaservicequotaexceededexception"></a>
<a id="schema_ServiceQuotaExceededException"></a>
<a id="tocSservicequotaexceededexception"></a>
<a id="tocsservicequotaexceededexception"></a>

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

<h2 id="tocS_AssociateResourceResponse">AssociateResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociateresourceresponse"></a>
<a id="schema_AssociateResourceResponse"></a>
<a id="tocSassociateresourceresponse"></a>
<a id="tocsassociateresourceresponse"></a>

```json
{
  "applicationArn": {},
  "resourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationArn|object|false|none|none|
|resourceArn|object|false|none|none|

<h2 id="tocS_ThrottlingException">ThrottlingException</h2>
<!-- backwards compatibility -->
<a id="schemathrottlingexception"></a>
<a id="schema_ThrottlingException"></a>
<a id="tocSthrottlingexception"></a>
<a id="tocsthrottlingexception"></a>

```json
null
```

<h2 id="tocS_CreateApplicationResponse">CreateApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateapplicationresponse"></a>
<a id="schema_CreateApplicationResponse"></a>
<a id="tocScreateapplicationresponse"></a>
<a id="tocscreateapplicationresponse"></a>

```json
{
  "application": {
    "id": {},
    "arn": {},
    "name": {},
    "description": {},
    "creationTime": {},
    "lastUpdateTime": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application|object|false|none|none|

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_CreateAttributeGroupResponse">CreateAttributeGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateattributegroupresponse"></a>
<a id="schema_CreateAttributeGroupResponse"></a>
<a id="tocScreateattributegroupresponse"></a>
<a id="tocscreateattributegroupresponse"></a>

```json
{
  "attributeGroup": {
    "id": {},
    "arn": {},
    "name": {},
    "description": {},
    "creationTime": {},
    "lastUpdateTime": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributeGroup|object|false|none|none|

<h2 id="tocS_DeleteApplicationResponse">DeleteApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapplicationresponse"></a>
<a id="schema_DeleteApplicationResponse"></a>
<a id="tocSdeleteapplicationresponse"></a>
<a id="tocsdeleteapplicationresponse"></a>

```json
{
  "application": {
    "id": {},
    "arn": {},
    "name": {},
    "description": {},
    "creationTime": {},
    "lastUpdateTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application|object|false|none|none|

<h2 id="tocS_DeleteAttributeGroupResponse">DeleteAttributeGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteattributegroupresponse"></a>
<a id="schema_DeleteAttributeGroupResponse"></a>
<a id="tocSdeleteattributegroupresponse"></a>
<a id="tocsdeleteattributegroupresponse"></a>

```json
{
  "attributeGroup": {
    "id": {},
    "arn": {},
    "name": {},
    "description": {},
    "creationTime": {},
    "lastUpdateTime": {},
    "createdBy": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributeGroup|object|false|none|none|

<h2 id="tocS_DisassociateAttributeGroupResponse">DisassociateAttributeGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateattributegroupresponse"></a>
<a id="schema_DisassociateAttributeGroupResponse"></a>
<a id="tocSdisassociateattributegroupresponse"></a>
<a id="tocsdisassociateattributegroupresponse"></a>

```json
{
  "applicationArn": {},
  "attributeGroupArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationArn|object|false|none|none|
|attributeGroupArn|object|false|none|none|

<h2 id="tocS_DisassociateResourceResponse">DisassociateResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateresourceresponse"></a>
<a id="schema_DisassociateResourceResponse"></a>
<a id="tocSdisassociateresourceresponse"></a>
<a id="tocsdisassociateresourceresponse"></a>

```json
{
  "applicationArn": {},
  "resourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationArn|object|false|none|none|
|resourceArn|object|false|none|none|

<h2 id="tocS_GetApplicationResponse">GetApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetapplicationresponse"></a>
<a id="schema_GetApplicationResponse"></a>
<a id="tocSgetapplicationresponse"></a>
<a id="tocsgetapplicationresponse"></a>

```json
{
  "id": {},
  "arn": {},
  "name": {},
  "description": {},
  "creationTime": {},
  "lastUpdateTime": {},
  "associatedResourceCount": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "integrations": {
    "resourceGroup": {
      "state": {},
      "arn": {},
      "errorMessage": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|arn|object|false|none|none|
|name|object|false|none|none|
|description|object|false|none|none|
|creationTime|object|false|none|none|
|lastUpdateTime|object|false|none|none|
|associatedResourceCount|object|false|none|none|
|tags|object|false|none|none|
|integrations|object|false|none|none|

<h2 id="tocS_GetAssociatedResourceResponse">GetAssociatedResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetassociatedresourceresponse"></a>
<a id="schema_GetAssociatedResourceResponse"></a>
<a id="tocSgetassociatedresourceresponse"></a>
<a id="tocsgetassociatedresourceresponse"></a>

```json
{
  "resource": {
    "name": {},
    "arn": {},
    "associationTime": {},
    "integrations": {
      "resourceGroup": {
        "state": {},
        "arn": {},
        "errorMessage": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resource|object|false|none|none|

<h2 id="tocS_GetAttributeGroupResponse">GetAttributeGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetattributegroupresponse"></a>
<a id="schema_GetAttributeGroupResponse"></a>
<a id="tocSgetattributegroupresponse"></a>
<a id="tocsgetattributegroupresponse"></a>

```json
{
  "id": {},
  "arn": {},
  "name": {},
  "description": {},
  "attributes": {},
  "creationTime": {},
  "lastUpdateTime": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "createdBy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|arn|object|false|none|none|
|name|object|false|none|none|
|description|object|false|none|none|
|attributes|object|false|none|none|
|creationTime|object|false|none|none|
|lastUpdateTime|object|false|none|none|
|tags|object|false|none|none|
|createdBy|object|false|none|none|

<h2 id="tocS_GetConfigurationResponse">GetConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetconfigurationresponse"></a>
<a id="schema_GetConfigurationResponse"></a>
<a id="tocSgetconfigurationresponse"></a>
<a id="tocsgetconfigurationresponse"></a>

```json
{
  "configuration": {
    "tagQueryConfiguration": {
      "tagKey": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configuration|object|false|none|none|

<h2 id="tocS_ListApplicationsResponse">ListApplicationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistapplicationsresponse"></a>
<a id="schema_ListApplicationsResponse"></a>
<a id="tocSlistapplicationsresponse"></a>
<a id="tocslistapplicationsresponse"></a>

```json
{
  "applications": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applications|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListAssociatedAttributeGroupsResponse">ListAssociatedAttributeGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistassociatedattributegroupsresponse"></a>
<a id="schema_ListAssociatedAttributeGroupsResponse"></a>
<a id="tocSlistassociatedattributegroupsresponse"></a>
<a id="tocslistassociatedattributegroupsresponse"></a>

```json
{
  "attributeGroups": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributeGroups|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListAssociatedResourcesResponse">ListAssociatedResourcesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistassociatedresourcesresponse"></a>
<a id="schema_ListAssociatedResourcesResponse"></a>
<a id="tocSlistassociatedresourcesresponse"></a>
<a id="tocslistassociatedresourcesresponse"></a>

```json
{
  "resources": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resources|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListAttributeGroupsResponse">ListAttributeGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistattributegroupsresponse"></a>
<a id="schema_ListAttributeGroupsResponse"></a>
<a id="tocSlistattributegroupsresponse"></a>
<a id="tocslistattributegroupsresponse"></a>

```json
{
  "attributeGroups": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributeGroups|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListAttributeGroupsForApplicationResponse">ListAttributeGroupsForApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistattributegroupsforapplicationresponse"></a>
<a id="schema_ListAttributeGroupsForApplicationResponse"></a>
<a id="tocSlistattributegroupsforapplicationresponse"></a>
<a id="tocslistattributegroupsforapplicationresponse"></a>

```json
{
  "attributeGroupsDetails": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributeGroupsDetails|object|false|none|none|
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

<h2 id="tocS_TagQueryConfiguration">TagQueryConfiguration</h2>
<!-- backwards compatibility -->
<a id="schematagqueryconfiguration"></a>
<a id="schema_TagQueryConfiguration"></a>
<a id="tocStagqueryconfiguration"></a>
<a id="tocstagqueryconfiguration"></a>

```json
{
  "tagKey": {}
}
```

 The definition of <code>tagQuery</code>. Specifies which resources are associated with an application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tagKey|object|false|none|none|

<h2 id="tocS_SyncResourceResponse">SyncResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemasyncresourceresponse"></a>
<a id="schema_SyncResourceResponse"></a>
<a id="tocSsyncresourceresponse"></a>
<a id="tocssyncresourceresponse"></a>

```json
{
  "applicationArn": {},
  "resourceArn": {},
  "actionTaken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationArn|object|false|none|none|
|resourceArn|object|false|none|none|
|actionTaken|object|false|none|none|

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

<h2 id="tocS_UpdateApplicationResponse">UpdateApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapplicationresponse"></a>
<a id="schema_UpdateApplicationResponse"></a>
<a id="tocSupdateapplicationresponse"></a>
<a id="tocsupdateapplicationresponse"></a>

```json
{
  "application": {
    "id": {},
    "arn": {},
    "name": {},
    "description": {},
    "creationTime": {},
    "lastUpdateTime": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application|object|false|none|none|

<h2 id="tocS_UpdateAttributeGroupResponse">UpdateAttributeGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateattributegroupresponse"></a>
<a id="schema_UpdateAttributeGroupResponse"></a>
<a id="tocSupdateattributegroupresponse"></a>
<a id="tocsupdateattributegroupresponse"></a>

```json
{
  "attributeGroup": {
    "id": {},
    "arn": {},
    "name": {},
    "description": {},
    "creationTime": {},
    "lastUpdateTime": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributeGroup|object|false|none|none|

<h2 id="tocS_AppRegistryConfiguration">AppRegistryConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaappregistryconfiguration"></a>
<a id="schema_AppRegistryConfiguration"></a>
<a id="tocSappregistryconfiguration"></a>
<a id="tocsappregistryconfiguration"></a>

```json
{
  "tagQueryConfiguration": {
    "tagKey": {}
  }
}
```

 Includes all of the AppRegistry settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tagQueryConfiguration|object|false|none|none|

<h2 id="tocS_ApplicationId">ApplicationId</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationid"></a>
<a id="schema_ApplicationId"></a>
<a id="tocSapplicationid"></a>
<a id="tocsapplicationid"></a>

```json
"stringstringstringstringst"
```

<h2 id="tocS_ApplicationArn">ApplicationArn</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationarn"></a>
<a id="schema_ApplicationArn"></a>
<a id="tocSapplicationarn"></a>
<a id="tocsapplicationarn"></a>

```json
"string"
```

<h2 id="tocS_Name">Name</h2>
<!-- backwards compatibility -->
<a id="schemaname"></a>
<a id="schema_Name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

```json
"string"
```

<h2 id="tocS_Description">Description</h2>
<!-- backwards compatibility -->
<a id="schemadescription"></a>
<a id="schema_Description"></a>
<a id="tocSdescription"></a>
<a id="tocsdescription"></a>

```json
"string"
```

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[TagValue](#schematagvalue)|false|none|none|

<h2 id="tocS_Application">Application</h2>
<!-- backwards compatibility -->
<a id="schemaapplication"></a>
<a id="schema_Application"></a>
<a id="tocSapplication"></a>
<a id="tocsapplication"></a>

```json
{
  "id": {},
  "arn": {},
  "name": {},
  "description": {},
  "creationTime": {},
  "lastUpdateTime": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Represents a Amazon Web Services Service Catalog AppRegistry application that is the top-level node in a hierarchy of related cloud resource abstractions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|arn|object|false|none|none|
|name|object|false|none|none|
|description|object|false|none|none|
|creationTime|object|false|none|none|
|lastUpdateTime|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_ApplicationSpecifier">ApplicationSpecifier</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationspecifier"></a>
<a id="schema_ApplicationSpecifier"></a>
<a id="tocSapplicationspecifier"></a>
<a id="tocsapplicationspecifier"></a>

```json
"string"
```

<h2 id="tocS_ApplicationSummary">ApplicationSummary</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationsummary"></a>
<a id="schema_ApplicationSummary"></a>
<a id="tocSapplicationsummary"></a>
<a id="tocsapplicationsummary"></a>

```json
{
  "id": {},
  "arn": {},
  "name": {},
  "description": {},
  "creationTime": {},
  "lastUpdateTime": {}
}
```

Summary of a Amazon Web Services Service Catalog AppRegistry application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|arn|object|false|none|none|
|name|object|false|none|none|
|description|object|false|none|none|
|creationTime|object|false|none|none|
|lastUpdateTime|object|false|none|none|

<h2 id="tocS_ApplicationSummaries">ApplicationSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationsummaries"></a>
<a id="schema_ApplicationSummaries"></a>
<a id="tocSapplicationsummaries"></a>
<a id="tocsapplicationsummaries"></a>

```json
[
  {
    "id": {},
    "arn": {},
    "name": {},
    "description": {},
    "creationTime": {},
    "lastUpdateTime": {}
  }
]
```

<h2 id="tocS_Arn">Arn</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_Arn"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"string"
```

<h2 id="tocS_AttributeGroupSpecifier">AttributeGroupSpecifier</h2>
<!-- backwards compatibility -->
<a id="schemaattributegroupspecifier"></a>
<a id="schema_AttributeGroupSpecifier"></a>
<a id="tocSattributegroupspecifier"></a>
<a id="tocsattributegroupspecifier"></a>

```json
"string"
```

<h2 id="tocS_AssociateAttributeGroupRequest">AssociateAttributeGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociateattributegrouprequest"></a>
<a id="schema_AssociateAttributeGroupRequest"></a>
<a id="tocSassociateattributegrouprequest"></a>
<a id="tocsassociateattributegrouprequest"></a>

```json
{}
```

<h2 id="tocS_AttributeGroupArn">AttributeGroupArn</h2>
<!-- backwards compatibility -->
<a id="schemaattributegrouparn"></a>
<a id="schema_AttributeGroupArn"></a>
<a id="tocSattributegrouparn"></a>
<a id="tocsattributegrouparn"></a>

```json
"string"
```

<h2 id="tocS_ResourceType">ResourceType</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetype"></a>
<a id="schema_ResourceType"></a>
<a id="tocSresourcetype"></a>
<a id="tocsresourcetype"></a>

```json
"CFN_STACK"
```

<h2 id="tocS_ResourceSpecifier">ResourceSpecifier</h2>
<!-- backwards compatibility -->
<a id="schemaresourcespecifier"></a>
<a id="schema_ResourceSpecifier"></a>
<a id="tocSresourcespecifier"></a>
<a id="tocsresourcespecifier"></a>

```json
"string"
```

<h2 id="tocS_AssociateResourceRequest">AssociateResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociateresourcerequest"></a>
<a id="schema_AssociateResourceRequest"></a>
<a id="tocSassociateresourcerequest"></a>
<a id="tocsassociateresourcerequest"></a>

```json
{}
```

<h2 id="tocS_AssociationCount">AssociationCount</h2>
<!-- backwards compatibility -->
<a id="schemaassociationcount"></a>
<a id="schema_AssociationCount"></a>
<a id="tocSassociationcount"></a>
<a id="tocsassociationcount"></a>

```json
0
```

<h2 id="tocS_AttributeGroupId">AttributeGroupId</h2>
<!-- backwards compatibility -->
<a id="schemaattributegroupid"></a>
<a id="schema_AttributeGroupId"></a>
<a id="tocSattributegroupid"></a>
<a id="tocsattributegroupid"></a>

```json
"string"
```

<h2 id="tocS_AttributeGroup">AttributeGroup</h2>
<!-- backwards compatibility -->
<a id="schemaattributegroup"></a>
<a id="schema_AttributeGroup"></a>
<a id="tocSattributegroup"></a>
<a id="tocsattributegroup"></a>

```json
{
  "id": {},
  "arn": {},
  "name": {},
  "description": {},
  "creationTime": {},
  "lastUpdateTime": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Represents a Amazon Web Services Service Catalog AppRegistry attribute group that is rich metadata which describes an application and its components.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|arn|object|false|none|none|
|name|object|false|none|none|
|description|object|false|none|none|
|creationTime|object|false|none|none|
|lastUpdateTime|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreatedBy">CreatedBy</h2>
<!-- backwards compatibility -->
<a id="schemacreatedby"></a>
<a id="schema_CreatedBy"></a>
<a id="tocScreatedby"></a>
<a id="tocscreatedby"></a>

```json
"string"
```

<h2 id="tocS_AttributeGroupDetails">AttributeGroupDetails</h2>
<!-- backwards compatibility -->
<a id="schemaattributegroupdetails"></a>
<a id="schema_AttributeGroupDetails"></a>
<a id="tocSattributegroupdetails"></a>
<a id="tocsattributegroupdetails"></a>

```json
{
  "id": {},
  "arn": {},
  "name": {},
  "createdBy": {}
}
```

 The details related to a specific AttributeGroup.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|arn|object|false|none|none|
|name|object|false|none|none|
|createdBy|object|false|none|none|

<h2 id="tocS_AttributeGroupDetailsList">AttributeGroupDetailsList</h2>
<!-- backwards compatibility -->
<a id="schemaattributegroupdetailslist"></a>
<a id="schema_AttributeGroupDetailsList"></a>
<a id="tocSattributegroupdetailslist"></a>
<a id="tocsattributegroupdetailslist"></a>

```json
[
  {
    "id": {},
    "arn": {},
    "name": {},
    "createdBy": {}
  }
]
```

<h2 id="tocS_AttributeGroupIds">AttributeGroupIds</h2>
<!-- backwards compatibility -->
<a id="schemaattributegroupids"></a>
<a id="schema_AttributeGroupIds"></a>
<a id="tocSattributegroupids"></a>
<a id="tocsattributegroupids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AttributeGroupSummary">AttributeGroupSummary</h2>
<!-- backwards compatibility -->
<a id="schemaattributegroupsummary"></a>
<a id="schema_AttributeGroupSummary"></a>
<a id="tocSattributegroupsummary"></a>
<a id="tocsattributegroupsummary"></a>

```json
{
  "id": {},
  "arn": {},
  "name": {},
  "description": {},
  "creationTime": {},
  "lastUpdateTime": {},
  "createdBy": {}
}
```

Summary of a Amazon Web Services Service Catalog AppRegistry attribute group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|arn|object|false|none|none|
|name|object|false|none|none|
|description|object|false|none|none|
|creationTime|object|false|none|none|
|lastUpdateTime|object|false|none|none|
|createdBy|object|false|none|none|

<h2 id="tocS_AttributeGroupSummaries">AttributeGroupSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaattributegroupsummaries"></a>
<a id="schema_AttributeGroupSummaries"></a>
<a id="tocSattributegroupsummaries"></a>
<a id="tocsattributegroupsummaries"></a>

```json
[
  {
    "id": {},
    "arn": {},
    "name": {},
    "description": {},
    "creationTime": {},
    "lastUpdateTime": {},
    "createdBy": {}
  }
]
```

<h2 id="tocS_Attributes">Attributes</h2>
<!-- backwards compatibility -->
<a id="schemaattributes"></a>
<a id="schema_Attributes"></a>
<a id="tocSattributes"></a>
<a id="tocsattributes"></a>

```json
"string"
```

<h2 id="tocS_ClientToken">ClientToken</h2>
<!-- backwards compatibility -->
<a id="schemaclienttoken"></a>
<a id="schema_ClientToken"></a>
<a id="tocSclienttoken"></a>
<a id="tocsclienttoken"></a>

```json
"string"
```

<h2 id="tocS_CreateApplicationRequest">CreateApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateapplicationrequest"></a>
<a id="schema_CreateApplicationRequest"></a>
<a id="tocScreateapplicationrequest"></a>
<a id="tocscreateapplicationrequest"></a>

```json
{
  "name": {},
  "description": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|description|object|false|none|none|
|tags|object|false|none|none|
|clientToken|object|true|none|none|

<h2 id="tocS_CreateAttributeGroupRequest">CreateAttributeGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateattributegrouprequest"></a>
<a id="schema_CreateAttributeGroupRequest"></a>
<a id="tocScreateattributegrouprequest"></a>
<a id="tocscreateattributegrouprequest"></a>

```json
{
  "name": {},
  "description": {},
  "attributes": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|description|object|false|none|none|
|attributes|object|true|none|none|
|tags|object|false|none|none|
|clientToken|object|true|none|none|

<h2 id="tocS_DeleteApplicationRequest">DeleteApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapplicationrequest"></a>
<a id="schema_DeleteApplicationRequest"></a>
<a id="tocSdeleteapplicationrequest"></a>
<a id="tocsdeleteapplicationrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteAttributeGroupRequest">DeleteAttributeGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteattributegrouprequest"></a>
<a id="schema_DeleteAttributeGroupRequest"></a>
<a id="tocSdeleteattributegrouprequest"></a>
<a id="tocsdeleteattributegrouprequest"></a>

```json
{}
```

<h2 id="tocS_DisassociateAttributeGroupRequest">DisassociateAttributeGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateattributegrouprequest"></a>
<a id="schema_DisassociateAttributeGroupRequest"></a>
<a id="tocSdisassociateattributegrouprequest"></a>
<a id="tocsdisassociateattributegrouprequest"></a>

```json
{}
```

<h2 id="tocS_DisassociateResourceRequest">DisassociateResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateresourcerequest"></a>
<a id="schema_DisassociateResourceRequest"></a>
<a id="tocSdisassociateresourcerequest"></a>
<a id="tocsdisassociateresourcerequest"></a>

```json
{}
```

<h2 id="tocS_GetApplicationRequest">GetApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetapplicationrequest"></a>
<a id="schema_GetApplicationRequest"></a>
<a id="tocSgetapplicationrequest"></a>
<a id="tocsgetapplicationrequest"></a>

```json
{}
```

<h2 id="tocS_Integrations">Integrations</h2>
<!-- backwards compatibility -->
<a id="schemaintegrations"></a>
<a id="schema_Integrations"></a>
<a id="tocSintegrations"></a>
<a id="tocsintegrations"></a>

```json
{
  "resourceGroup": {
    "state": {},
    "arn": {},
    "errorMessage": {}
  }
}
```

 The information about the service integration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceGroup|object|false|none|none|

<h2 id="tocS_GetAssociatedResourceRequest">GetAssociatedResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetassociatedresourcerequest"></a>
<a id="schema_GetAssociatedResourceRequest"></a>
<a id="tocSgetassociatedresourcerequest"></a>
<a id="tocsgetassociatedresourcerequest"></a>

```json
{}
```

<h2 id="tocS_Resource">Resource</h2>
<!-- backwards compatibility -->
<a id="schemaresource"></a>
<a id="schema_Resource"></a>
<a id="tocSresource"></a>
<a id="tocsresource"></a>

```json
{
  "name": {},
  "arn": {},
  "associationTime": {},
  "integrations": {
    "resourceGroup": {
      "state": {},
      "arn": {},
      "errorMessage": {}
    }
  }
}
```

 The information about the resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|arn|object|false|none|none|
|associationTime|object|false|none|none|
|integrations|object|false|none|none|

<h2 id="tocS_GetAttributeGroupRequest">GetAttributeGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetattributegrouprequest"></a>
<a id="schema_GetAttributeGroupRequest"></a>
<a id="tocSgetattributegrouprequest"></a>
<a id="tocsgetattributegrouprequest"></a>

```json
{}
```

<h2 id="tocS_ResourceGroup">ResourceGroup</h2>
<!-- backwards compatibility -->
<a id="schemaresourcegroup"></a>
<a id="schema_ResourceGroup"></a>
<a id="tocSresourcegroup"></a>
<a id="tocsresourcegroup"></a>

```json
{
  "state": {},
  "arn": {},
  "errorMessage": {}
}
```

The information about the resource group integration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|object|false|none|none|
|arn|object|false|none|none|
|errorMessage|object|false|none|none|

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

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
1
```

<h2 id="tocS_ListApplicationsRequest">ListApplicationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistapplicationsrequest"></a>
<a id="schema_ListApplicationsRequest"></a>
<a id="tocSlistapplicationsrequest"></a>
<a id="tocslistapplicationsrequest"></a>

```json
{}
```

<h2 id="tocS_ListAssociatedAttributeGroupsRequest">ListAssociatedAttributeGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistassociatedattributegroupsrequest"></a>
<a id="schema_ListAssociatedAttributeGroupsRequest"></a>
<a id="tocSlistassociatedattributegroupsrequest"></a>
<a id="tocslistassociatedattributegroupsrequest"></a>

```json
{}
```

<h2 id="tocS_ListAssociatedResourcesRequest">ListAssociatedResourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistassociatedresourcesrequest"></a>
<a id="schema_ListAssociatedResourcesRequest"></a>
<a id="tocSlistassociatedresourcesrequest"></a>
<a id="tocslistassociatedresourcesrequest"></a>

```json
{}
```

<h2 id="tocS_Resources">Resources</h2>
<!-- backwards compatibility -->
<a id="schemaresources"></a>
<a id="schema_Resources"></a>
<a id="tocSresources"></a>
<a id="tocsresources"></a>

```json
[
  {
    "name": {},
    "arn": {},
    "resourceType": {},
    "resourceDetails": {
      "tagValue": {}
    }
  }
]
```

<h2 id="tocS_ListAttributeGroupsForApplicationRequest">ListAttributeGroupsForApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistattributegroupsforapplicationrequest"></a>
<a id="schema_ListAttributeGroupsForApplicationRequest"></a>
<a id="tocSlistattributegroupsforapplicationrequest"></a>
<a id="tocslistattributegroupsforapplicationrequest"></a>

```json
{}
```

<h2 id="tocS_ListAttributeGroupsRequest">ListAttributeGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistattributegroupsrequest"></a>
<a id="schema_ListAttributeGroupsRequest"></a>
<a id="tocSlistattributegroupsrequest"></a>
<a id="tocslistattributegroupsrequest"></a>

```json
{}
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

<h2 id="tocS_PutConfigurationRequest">PutConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputconfigurationrequest"></a>
<a id="schema_PutConfigurationRequest"></a>
<a id="tocSputconfigurationrequest"></a>
<a id="tocsputconfigurationrequest"></a>

```json
{
  "configuration": {
    "tagQueryConfiguration": {
      "tagKey": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configuration|object|true|none|none|

<h2 id="tocS_StackArn">StackArn</h2>
<!-- backwards compatibility -->
<a id="schemastackarn"></a>
<a id="schema_StackArn"></a>
<a id="tocSstackarn"></a>
<a id="tocsstackarn"></a>

```json
"string"
```

<h2 id="tocS_ResourceIntegrations">ResourceIntegrations</h2>
<!-- backwards compatibility -->
<a id="schemaresourceintegrations"></a>
<a id="schema_ResourceIntegrations"></a>
<a id="tocSresourceintegrations"></a>
<a id="tocsresourceintegrations"></a>

```json
{
  "resourceGroup": {
    "state": {},
    "arn": {},
    "errorMessage": {}
  }
}
```

The service integration information about the resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceGroup|object|false|none|none|

<h2 id="tocS_ResourceDetails">ResourceDetails</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedetails"></a>
<a id="schema_ResourceDetails"></a>
<a id="tocSresourcedetails"></a>
<a id="tocsresourcedetails"></a>

```json
{
  "tagValue": {}
}
```

 The details related to the resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tagValue|object|false|none|none|

<h2 id="tocS_ResourceGroupState">ResourceGroupState</h2>
<!-- backwards compatibility -->
<a id="schemaresourcegroupstate"></a>
<a id="schema_ResourceGroupState"></a>
<a id="tocSresourcegroupstate"></a>
<a id="tocsresourcegroupstate"></a>

```json
"CREATING"
```

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_ResourceInfo">ResourceInfo</h2>
<!-- backwards compatibility -->
<a id="schemaresourceinfo"></a>
<a id="schema_ResourceInfo"></a>
<a id="tocSresourceinfo"></a>
<a id="tocsresourceinfo"></a>

```json
{
  "name": {},
  "arn": {},
  "resourceType": {},
  "resourceDetails": {
    "tagValue": {}
  }
}
```

The information about the resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|arn|object|false|none|none|
|resourceType|object|false|none|none|
|resourceDetails|object|false|none|none|

<h2 id="tocS_SyncAction">SyncAction</h2>
<!-- backwards compatibility -->
<a id="schemasyncaction"></a>
<a id="schema_SyncAction"></a>
<a id="tocSsyncaction"></a>
<a id="tocssyncaction"></a>

```json
"START_SYNC"
```

<h2 id="tocS_SyncResourceRequest">SyncResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemasyncresourcerequest"></a>
<a id="schema_SyncResourceRequest"></a>
<a id="tocSsyncresourcerequest"></a>
<a id="tocssyncresourcerequest"></a>

```json
{}
```

<h2 id="tocS_TagKeyConfig">TagKeyConfig</h2>
<!-- backwards compatibility -->
<a id="schematagkeyconfig"></a>
<a id="schema_TagKeyConfig"></a>
<a id="tocStagkeyconfig"></a>
<a id="tocstagkeyconfig"></a>

```json
"string"
```

<h2 id="tocS_TagKeys">TagKeys</h2>
<!-- backwards compatibility -->
<a id="schematagkeys"></a>
<a id="schema_TagKeys"></a>
<a id="tocStagkeys"></a>
<a id="tocstagkeys"></a>

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

<h2 id="tocS_UpdateApplicationRequest">UpdateApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapplicationrequest"></a>
<a id="schema_UpdateApplicationRequest"></a>
<a id="tocSupdateapplicationrequest"></a>
<a id="tocsupdateapplicationrequest"></a>

```json
{
  "name": {},
  "description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|description|object|false|none|none|

<h2 id="tocS_UpdateAttributeGroupRequest">UpdateAttributeGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateattributegrouprequest"></a>
<a id="schema_UpdateAttributeGroupRequest"></a>
<a id="tocSupdateattributegrouprequest"></a>
<a id="tocsupdateattributegrouprequest"></a>

```json
{
  "name": {},
  "description": {},
  "attributes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|description|object|false|none|none|
|attributes|object|false|none|none|
