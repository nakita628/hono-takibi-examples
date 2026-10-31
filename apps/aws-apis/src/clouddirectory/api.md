<h1 id="amazon-clouddirectory">Amazon CloudDirectory v2017-01-11</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Amazon Cloud Directory</fullname> <p>Amazon Cloud Directory is a component of the AWS Directory Service that simplifies the development and management of cloud-scale web, mobile, and IoT applications. This guide describes the Cloud Directory operations that you can call programmatically and includes detailed information on data types and errors. For information about Cloud Directory features, see <a href="https://aws.amazon.com/directoryservice/">AWS Directory Service</a> and the <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/what_is_cloud_directory.html">Amazon Cloud Directory Developer Guide</a>.</p>

Base URLs:

* <a href="http://clouddirectory.us-east-1.amazonaws.com">http://clouddirectory.us-east-1.amazonaws.com</a> - The Amazon CloudDirectory multi-region endpoint

* <a href="https://clouddirectory.us-east-1.amazonaws.com">https://clouddirectory.us-east-1.amazonaws.com</a> - The Amazon CloudDirectory multi-region endpoint

* <a href="http://clouddirectory.cn-north-1.amazonaws.com.cn">http://clouddirectory.cn-north-1.amazonaws.com.cn</a> - The Amazon CloudDirectory endpoint for China (Beijing) and China (Ningxia)

* <a href="https://clouddirectory.cn-north-1.amazonaws.com.cn">https://clouddirectory.cn-north-1.amazonaws.com.cn</a> - The Amazon CloudDirectory endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/clouddirectory/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-clouddirectory-default">Default</h1>

## AddFacetToObject

<a id="opIdAddFacetToObject"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/object/facets#x-amz-data-partition' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "SchemaFacet": {
      "SchemaArn": {},
      "FacetName": {}
    },
    "ObjectAttributeList": [
      {
        "Key": {
          "SchemaArn": {},
          "FacetName": {},
          "Name": {}
        },
        "Value": {
          "StringValue": {},
          "BinaryValue": {},
          "BooleanValue": {},
          "NumberValue": {},
          "DatetimeValue": {}
        }
      }
    ],
    "ObjectReference": {
      "Selector": {}
    }
  }'
```

`PUT /amazonclouddirectory/2017-01-11/object/facets#x-amz-data-partition`

Adds a new <a>Facet</a> to an object. An object can have more than one facet applied on it.

> Body parameter

```json
{
  "SchemaFacet": {
    "SchemaArn": {},
    "FacetName": {}
  },
  "ObjectAttributeList": [
    {
      "Key": {
        "SchemaArn": {},
        "FacetName": {},
        "Name": {}
      },
      "Value": {
        "StringValue": {},
        "BinaryValue": {},
        "BooleanValue": {},
        "NumberValue": {},
        "DatetimeValue": {}
      }
    }
  ],
  "ObjectReference": {
    "Selector": {}
  }
}
```

<h3 id="addfacettoobject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where the object resides. For more information, see <a>arns</a>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» SchemaFacet|body|object|true|A facet.|
|» » SchemaArn|body|object|false|none|
|» » FacetName|body|object|false|none|
|» ObjectAttributeList|body|[[AttributeKeyAndValue](#schemaattributekeyandvalue)]|false|Attributes on the facet that you are adding to the object.|
|» ObjectReference|body|object|true|The reference that identifies an object.|
|» » Selector|body|object|false|none|

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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="addfacettoobject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddFacetToObjectResponse](#schemaaddfacettoobjectresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|DirectoryNotEnabledException|[DirectoryNotEnabledException](#schemadirectorynotenabledexception)|
|487|487|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|488|488|FacetValidationException|[FacetValidationException](#schemafacetvalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ApplySchema

<a id="opIdApplySchema"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/schema/apply#x-amz-data-partition' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "PublishedSchemaArn": "string"
  }'
```

`PUT /amazonclouddirectory/2017-01-11/schema/apply#x-amz-data-partition`

Copies the input published schema, at the specified version, into the <a>Directory</a> with the same name and version as that of the published schema.

> Body parameter

```json
{
  "PublishedSchemaArn": "string"
}
```

<h3 id="applyschema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> into which the schema is copied. For more information, see <a>arns</a>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» PublishedSchemaArn|body|string|true|Published schema Amazon Resource Name (ARN) that needs to be copied. For more information, see <a>arns</a>.|

> Example responses

> 200 Response

```json
{
  "AppliedSchemaArn": {},
  "DirectoryArn": {}
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

> 488 Response

```json
null
```

<h3 id="applyschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApplySchemaResponse](#schemaapplyschemaresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|SchemaAlreadyExistsException|[SchemaAlreadyExistsException](#schemaschemaalreadyexistsexception)|
|487|487|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|488|488|InvalidAttachmentException|[InvalidAttachmentException](#schemainvalidattachmentexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AttachObject

<a id="opIdAttachObject"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/object/attach#x-amz-data-partition' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "ParentReference": {
      "Selector": {}
    },
    "ChildReference": {
      "Selector": {}
    },
    "LinkName": "string"
  }'
```

`PUT /amazonclouddirectory/2017-01-11/object/attach#x-amz-data-partition`

<p>Attaches an existing object to another object. An object can be accessed in two ways:</p> <ol> <li> <p>Using the path</p> </li> <li> <p>Using <code>ObjectIdentifier</code> </p> </li> </ol>

> Body parameter

```json
{
  "ParentReference": {
    "Selector": {}
  },
  "ChildReference": {
    "Selector": {}
  },
  "LinkName": "string"
}
```

<h3 id="attachobject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where both objects reside. For more information, see <a>arns</a>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ParentReference|body|object|true|The reference that identifies an object.|
|» » Selector|body|object|false|none|
|» ChildReference|body|object|true|The reference that identifies an object.|
|» » Selector|body|object|false|none|
|» LinkName|body|string|true|The link name with which the child object is attached to the parent.|

> Example responses

> 200 Response

```json
{
  "AttachedObjectIdentifier": {}
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

> 488 Response

```json
null
```

> 489 Response

```json
null
```

> 490 Response

```json
null
```

> 491 Response

```json
null
```

<h3 id="attachobject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AttachObjectResponse](#schemaattachobjectresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|DirectoryNotEnabledException|[DirectoryNotEnabledException](#schemadirectorynotenabledexception)|
|487|487|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|488|488|LinkNameAlreadyInUseException|[LinkNameAlreadyInUseException](#schemalinknamealreadyinuseexception)|
|489|489|InvalidAttachmentException|[InvalidAttachmentException](#schemainvalidattachmentexception)|
|490|490|ValidationException|[ValidationException](#schemavalidationexception)|
|491|491|FacetValidationException|[FacetValidationException](#schemafacetvalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AttachPolicy

<a id="opIdAttachPolicy"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/policy/attach#x-amz-data-partition' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "PolicyReference": {
      "Selector": {}
    },
    "ObjectReference": {
      "Selector": {}
    }
  }'
```

`PUT /amazonclouddirectory/2017-01-11/policy/attach#x-amz-data-partition`

Attaches a policy object to a regular object. An object can have a limited number of attached policies.

> Body parameter

```json
{
  "PolicyReference": {
    "Selector": {}
  },
  "ObjectReference": {
    "Selector": {}
  }
}
```

<h3 id="attachpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where both objects reside. For more information, see <a>arns</a>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» PolicyReference|body|object|true|The reference that identifies an object.|
|» » Selector|body|object|false|none|
|» ObjectReference|body|object|true|The reference that identifies an object.|
|» » Selector|body|object|false|none|

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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="attachpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AttachPolicyResponse](#schemaattachpolicyresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|DirectoryNotEnabledException|[DirectoryNotEnabledException](#schemadirectorynotenabledexception)|
|487|487|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|488|488|NotPolicyException|[NotPolicyException](#schemanotpolicyexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AttachToIndex

<a id="opIdAttachToIndex"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/index/attach#x-amz-data-partition' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "IndexReference": {
      "Selector": {}
    },
    "TargetReference": {
      "Selector": {}
    }
  }'
```

`PUT /amazonclouddirectory/2017-01-11/index/attach#x-amz-data-partition`

Attaches the specified object to the specified index.

> Body parameter

```json
{
  "IndexReference": {
    "Selector": {}
  },
  "TargetReference": {
    "Selector": {}
  }
}
```

<h3 id="attachtoindex-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The Amazon Resource Name (ARN) of the directory where the object and index exist.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» IndexReference|body|object|true|The reference that identifies an object.|
|» » Selector|body|object|false|none|
|» TargetReference|body|object|true|The reference that identifies an object.|
|» » Selector|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "AttachedObjectIdentifier": {}
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

> 488 Response

```json
null
```

> 489 Response

```json
null
```

> 490 Response

```json
null
```

> 491 Response

```json
null
```

<h3 id="attachtoindex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AttachToIndexResponse](#schemaattachtoindexresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|DirectoryNotEnabledException|[DirectoryNotEnabledException](#schemadirectorynotenabledexception)|
|487|487|InvalidAttachmentException|[InvalidAttachmentException](#schemainvalidattachmentexception)|
|488|488|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|489|489|LinkNameAlreadyInUseException|[LinkNameAlreadyInUseException](#schemalinknamealreadyinuseexception)|
|490|490|IndexedAttributeMissingException|[IndexedAttributeMissingException](#schemaindexedattributemissingexception)|
|491|491|NotIndexException|[NotIndexException](#schemanotindexexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AttachTypedLink

<a id="opIdAttachTypedLink"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/typedlink/attach#x-amz-data-partition' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "SourceObjectReference": {
      "Selector": {}
    },
    "TargetObjectReference": {
      "Selector": {}
    },
    "TypedLinkFacet": {
      "SchemaArn": {},
      "TypedLinkName": {}
    },
    "Attributes": [
      {
        "AttributeName": {},
        "Value": {
          "StringValue": {},
          "BinaryValue": {},
          "BooleanValue": {},
          "NumberValue": {},
          "DatetimeValue": {}
        }
      }
    ]
  }'
```

`PUT /amazonclouddirectory/2017-01-11/typedlink/attach#x-amz-data-partition`

Attaches a typed link to a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.

> Body parameter

```json
{
  "SourceObjectReference": {
    "Selector": {}
  },
  "TargetObjectReference": {
    "Selector": {}
  },
  "TypedLinkFacet": {
    "SchemaArn": {},
    "TypedLinkName": {}
  },
  "Attributes": [
    {
      "AttributeName": {},
      "Value": {
        "StringValue": {},
        "BinaryValue": {},
        "BooleanValue": {},
        "NumberValue": {},
        "DatetimeValue": {}
      }
    }
  ]
}
```

<h3 id="attachtypedlink-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The Amazon Resource Name (ARN) of the directory where you want to attach the typed link.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» SourceObjectReference|body|object|true|The reference that identifies an object.|
|» » Selector|body|object|false|none|
|» TargetObjectReference|body|object|true|The reference that identifies an object.|
|» » Selector|body|object|false|none|
|» TypedLinkFacet|body|object|true|Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.|
|» » SchemaArn|body|object|false|none|
|» » TypedLinkName|body|object|false|none|
|» Attributes|body|[[AttributeNameAndValue](#schemaattributenameandvalue)]|true|A set of attributes that are associated with the typed link.|

> Example responses

> 200 Response

```json
{
  "TypedLinkSpecifier": {
    "TypedLinkFacet": {
      "SchemaArn": {},
      "TypedLinkName": {}
    },
    "SourceObjectReference": {
      "Selector": {}
    },
    "TargetObjectReference": {
      "Selector": {}
    },
    "IdentityAttributeValues": {}
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

> 488 Response

```json
null
```

> 489 Response

```json
null
```

> 490 Response

```json
null
```

<h3 id="attachtypedlink-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AttachTypedLinkResponse](#schemaattachtypedlinkresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|DirectoryNotEnabledException|[DirectoryNotEnabledException](#schemadirectorynotenabledexception)|
|487|487|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|488|488|InvalidAttachmentException|[InvalidAttachmentException](#schemainvalidattachmentexception)|
|489|489|ValidationException|[ValidationException](#schemavalidationexception)|
|490|490|FacetValidationException|[FacetValidationException](#schemafacetvalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchRead

<a id="opIdBatchRead"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/batchread#x-amz-data-partition' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "Operations": [
      {
        "ListObjectAttributes": {
          "ObjectReference": {
            "Selector": {}
          },
          "NextToken": {},
          "MaxResults": {},
          "FacetFilter": {
            "SchemaArn": {},
            "FacetName": {}
          }
        },
        "ListObjectChildren": {
          "ObjectReference": {
            "Selector": {}
          },
          "NextToken": {},
          "MaxResults": {}
        },
        "ListAttachedIndices": {
          "TargetReference": {
            "Selector": {}
          },
          "NextToken": {},
          "MaxResults": {}
        },
        "ListObjectParentPaths": {
          "ObjectReference": {
            "Selector": {}
          },
          "NextToken": {},
          "MaxResults": {}
        },
        "GetObjectInformation": {
          "ObjectReference": {
            "Selector": {}
          }
        },
        "GetObjectAttributes": {
          "ObjectReference": {
            "Selector": {}
          },
          "SchemaFacet": {
            "SchemaArn": {},
            "FacetName": {}
          },
          "AttributeNames": {}
        },
        "ListObjectParents": {
          "ObjectReference": {
            "Selector": {}
          },
          "NextToken": {},
          "MaxResults": {}
        },
        "ListObjectPolicies": {
          "ObjectReference": {
            "Selector": {}
          },
          "NextToken": {},
          "MaxResults": {}
        },
        "ListPolicyAttachments": {
          "PolicyReference": {
            "Selector": {}
          },
          "NextToken": {},
          "MaxResults": {}
        },
        "LookupPolicy": {
          "ObjectReference": {
            "Selector": {}
          },
          "NextToken": {},
          "MaxResults": {}
        },
        "ListIndex": {
          "RangesOnIndexedValues": {},
          "IndexReference": {
            "Selector": {}
          },
          "MaxResults": {},
          "NextToken": {}
        },
        "ListOutgoingTypedLinks": {
          "ObjectReference": {
            "Selector": {}
          },
          "FilterAttributeRanges": {},
          "FilterTypedLink": {
            "SchemaArn": {},
            "TypedLinkName": {}
          },
          "NextToken": {},
          "MaxResults": {}
        },
        "ListIncomingTypedLinks": {
          "ObjectReference": {
            "Selector": {}
          },
          "FilterAttributeRanges": {},
          "FilterTypedLink": {
            "SchemaArn": {},
            "TypedLinkName": {}
          },
          "NextToken": {},
          "MaxResults": {}
        },
        "GetLinkAttributes": {
          "TypedLinkSpecifier": {
            "TypedLinkFacet": {
              "SchemaArn": {},
              "TypedLinkName": {}
            },
            "SourceObjectReference": {
              "Selector": {}
            },
            "TargetObjectReference": {
              "Selector": {}
            },
            "IdentityAttributeValues": {}
          },
          "AttributeNames": {}
        }
      }
    ]
  }'
```

`POST /amazonclouddirectory/2017-01-11/batchread#x-amz-data-partition`

Performs all the read operations in a batch. 

> Body parameter

```json
{
  "Operations": [
    {
      "ListObjectAttributes": {
        "ObjectReference": {
          "Selector": {}
        },
        "NextToken": {},
        "MaxResults": {},
        "FacetFilter": {
          "SchemaArn": {},
          "FacetName": {}
        }
      },
      "ListObjectChildren": {
        "ObjectReference": {
          "Selector": {}
        },
        "NextToken": {},
        "MaxResults": {}
      },
      "ListAttachedIndices": {
        "TargetReference": {
          "Selector": {}
        },
        "NextToken": {},
        "MaxResults": {}
      },
      "ListObjectParentPaths": {
        "ObjectReference": {
          "Selector": {}
        },
        "NextToken": {},
        "MaxResults": {}
      },
      "GetObjectInformation": {
        "ObjectReference": {
          "Selector": {}
        }
      },
      "GetObjectAttributes": {
        "ObjectReference": {
          "Selector": {}
        },
        "SchemaFacet": {
          "SchemaArn": {},
          "FacetName": {}
        },
        "AttributeNames": {}
      },
      "ListObjectParents": {
        "ObjectReference": {
          "Selector": {}
        },
        "NextToken": {},
        "MaxResults": {}
      },
      "ListObjectPolicies": {
        "ObjectReference": {
          "Selector": {}
        },
        "NextToken": {},
        "MaxResults": {}
      },
      "ListPolicyAttachments": {
        "PolicyReference": {
          "Selector": {}
        },
        "NextToken": {},
        "MaxResults": {}
      },
      "LookupPolicy": {
        "ObjectReference": {
          "Selector": {}
        },
        "NextToken": {},
        "MaxResults": {}
      },
      "ListIndex": {
        "RangesOnIndexedValues": {},
        "IndexReference": {
          "Selector": {}
        },
        "MaxResults": {},
        "NextToken": {}
      },
      "ListOutgoingTypedLinks": {
        "ObjectReference": {
          "Selector": {}
        },
        "FilterAttributeRanges": {},
        "FilterTypedLink": {
          "SchemaArn": {},
          "TypedLinkName": {}
        },
        "NextToken": {},
        "MaxResults": {}
      },
      "ListIncomingTypedLinks": {
        "ObjectReference": {
          "Selector": {}
        },
        "FilterAttributeRanges": {},
        "FilterTypedLink": {
          "SchemaArn": {},
          "TypedLinkName": {}
        },
        "NextToken": {},
        "MaxResults": {}
      },
      "GetLinkAttributes": {
        "TypedLinkSpecifier": {
          "TypedLinkFacet": {
            "SchemaArn": {},
            "TypedLinkName": {}
          },
          "SourceObjectReference": {
            "Selector": {}
          },
          "TargetObjectReference": {
            "Selector": {}
          },
          "IdentityAttributeValues": {}
        },
        "AttributeNames": {}
      }
    }
  ]
}
```

<h3 id="batchread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>. For more information, see <a>arns</a>.|
|x-amz-consistency-level|header|string|false|Represents the manner and timing in which the successful write or update of an object is reflected in a subsequent read operation of that same object.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Operations|body|[[BatchReadOperation](#schemabatchreadoperation)]|true|A list of operations that are part of the batch.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-consistency-level|SERIALIZABLE|
|x-amz-consistency-level|EVENTUAL|

> Example responses

> 200 Response

```json
{
  "Responses": {}
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

<h3 id="batchread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchReadResponse](#schemabatchreadresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|DirectoryNotEnabledException|[DirectoryNotEnabledException](#schemadirectorynotenabledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchWrite

<a id="opIdBatchWrite"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/batchwrite#x-amz-data-partition' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "Operations": [
      {
        "CreateObject": {
          "SchemaFacet": {},
          "ObjectAttributeList": {},
          "ParentReference": {
            "Selector": {}
          },
          "LinkName": {},
          "BatchReferenceName": {}
        },
        "AttachObject": {
          "ParentReference": {
            "Selector": {}
          },
          "ChildReference": {
            "Selector": {}
          },
          "LinkName": {}
        },
        "DetachObject": {
          "ParentReference": {
            "Selector": {}
          },
          "LinkName": {},
          "BatchReferenceName": {}
        },
        "UpdateObjectAttributes": {
          "ObjectReference": {
            "Selector": {}
          },
          "AttributeUpdates": {}
        },
        "DeleteObject": {
          "ObjectReference": {
            "Selector": {}
          }
        },
        "AddFacetToObject": {
          "SchemaFacet": {
            "SchemaArn": {},
            "FacetName": {}
          },
          "ObjectAttributeList": {},
          "ObjectReference": {
            "Selector": {}
          }
        },
        "RemoveFacetFromObject": {
          "SchemaFacet": {
            "SchemaArn": {},
            "FacetName": {}
          },
          "ObjectReference": {
            "Selector": {}
          }
        },
        "AttachPolicy": {
          "PolicyReference": {
            "Selector": {}
          },
          "ObjectReference": {
            "Selector": {}
          }
        },
        "DetachPolicy": {
          "PolicyReference": {
            "Selector": {}
          },
          "ObjectReference": {
            "Selector": {}
          }
        },
        "CreateIndex": {
          "OrderedIndexedAttributeList": {},
          "IsUnique": {},
          "ParentReference": {
            "Selector": {}
          },
          "LinkName": {},
          "BatchReferenceName": {}
        },
        "AttachToIndex": {
          "IndexReference": {
            "Selector": {}
          },
          "TargetReference": {
            "Selector": {}
          }
        },
        "DetachFromIndex": {
          "IndexReference": {
            "Selector": {}
          },
          "TargetReference": {
            "Selector": {}
          }
        },
        "AttachTypedLink": {
          "SourceObjectReference": {
            "Selector": {}
          },
          "TargetObjectReference": {
            "Selector": {}
          },
          "TypedLinkFacet": {
            "SchemaArn": {},
            "TypedLinkName": {}
          },
          "Attributes": {}
        },
        "DetachTypedLink": {
          "TypedLinkSpecifier": {
            "TypedLinkFacet": {
              "SchemaArn": {},
              "TypedLinkName": {}
            },
            "SourceObjectReference": {
              "Selector": {}
            },
            "TargetObjectReference": {
              "Selector": {}
            },
            "IdentityAttributeValues": {}
          }
        },
        "UpdateLinkAttributes": {
          "TypedLinkSpecifier": {
            "TypedLinkFacet": {
              "SchemaArn": {},
              "TypedLinkName": {}
            },
            "SourceObjectReference": {
              "Selector": {}
            },
            "TargetObjectReference": {
              "Selector": {}
            },
            "IdentityAttributeValues": {}
          },
          "AttributeUpdates": {}
        }
      }
    ]
  }'
```

`PUT /amazonclouddirectory/2017-01-11/batchwrite#x-amz-data-partition`

Performs all the write operations in a batch. Either all the operations succeed or none.

> Body parameter

```json
{
  "Operations": [
    {
      "CreateObject": {
        "SchemaFacet": {},
        "ObjectAttributeList": {},
        "ParentReference": {
          "Selector": {}
        },
        "LinkName": {},
        "BatchReferenceName": {}
      },
      "AttachObject": {
        "ParentReference": {
          "Selector": {}
        },
        "ChildReference": {
          "Selector": {}
        },
        "LinkName": {}
      },
      "DetachObject": {
        "ParentReference": {
          "Selector": {}
        },
        "LinkName": {},
        "BatchReferenceName": {}
      },
      "UpdateObjectAttributes": {
        "ObjectReference": {
          "Selector": {}
        },
        "AttributeUpdates": {}
      },
      "DeleteObject": {
        "ObjectReference": {
          "Selector": {}
        }
      },
      "AddFacetToObject": {
        "SchemaFacet": {
          "SchemaArn": {},
          "FacetName": {}
        },
        "ObjectAttributeList": {},
        "ObjectReference": {
          "Selector": {}
        }
      },
      "RemoveFacetFromObject": {
        "SchemaFacet": {
          "SchemaArn": {},
          "FacetName": {}
        },
        "ObjectReference": {
          "Selector": {}
        }
      },
      "AttachPolicy": {
        "PolicyReference": {
          "Selector": {}
        },
        "ObjectReference": {
          "Selector": {}
        }
      },
      "DetachPolicy": {
        "PolicyReference": {
          "Selector": {}
        },
        "ObjectReference": {
          "Selector": {}
        }
      },
      "CreateIndex": {
        "OrderedIndexedAttributeList": {},
        "IsUnique": {},
        "ParentReference": {
          "Selector": {}
        },
        "LinkName": {},
        "BatchReferenceName": {}
      },
      "AttachToIndex": {
        "IndexReference": {
          "Selector": {}
        },
        "TargetReference": {
          "Selector": {}
        }
      },
      "DetachFromIndex": {
        "IndexReference": {
          "Selector": {}
        },
        "TargetReference": {
          "Selector": {}
        }
      },
      "AttachTypedLink": {
        "SourceObjectReference": {
          "Selector": {}
        },
        "TargetObjectReference": {
          "Selector": {}
        },
        "TypedLinkFacet": {
          "SchemaArn": {},
          "TypedLinkName": {}
        },
        "Attributes": {}
      },
      "DetachTypedLink": {
        "TypedLinkSpecifier": {
          "TypedLinkFacet": {
            "SchemaArn": {},
            "TypedLinkName": {}
          },
          "SourceObjectReference": {
            "Selector": {}
          },
          "TargetObjectReference": {
            "Selector": {}
          },
          "IdentityAttributeValues": {}
        }
      },
      "UpdateLinkAttributes": {
        "TypedLinkSpecifier": {
          "TypedLinkFacet": {
            "SchemaArn": {},
            "TypedLinkName": {}
          },
          "SourceObjectReference": {
            "Selector": {}
          },
          "TargetObjectReference": {
            "Selector": {}
          },
          "IdentityAttributeValues": {}
        },
        "AttributeUpdates": {}
      }
    }
  ]
}
```

<h3 id="batchwrite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>. For more information, see <a>arns</a>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Operations|body|[[BatchWriteOperation](#schemabatchwriteoperation)]|true|A list of operations that are part of the batch.|

> Example responses

> 200 Response

```json
{
  "Responses": {}
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

<h3 id="batchwrite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchWriteResponse](#schemabatchwriteresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|DirectoryNotEnabledException|[DirectoryNotEnabledException](#schemadirectorynotenabledexception)|
|487|487|BatchWriteException|[BatchWriteException](#schemabatchwriteexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDirectory

<a id="opIdCreateDirectory"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/directory/create#x-amz-data-partition' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "Name": "string"
  }'
```

`PUT /amazonclouddirectory/2017-01-11/directory/create#x-amz-data-partition`

<p>Creates a <a>Directory</a> by copying the published schema into the directory. A directory cannot be created without a schema.</p> <p>You can also quickly create a directory using a managed schema, called the <code>QuickStartSchema</code>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_managed.html">Managed Schema</a> in the <i>Amazon Cloud Directory Developer Guide</i>.</p>

> Body parameter

```json
{
  "Name": "string"
}
```

<h3 id="createdirectory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The Amazon Resource Name (ARN) of the published schema that will be copied into the data <a>Directory</a>. For more information, see <a>arns</a>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|true|The name of the <a>Directory</a>. Should be unique per account, per region.|

> Example responses

> 200 Response

```json
{
  "DirectoryArn": {},
  "Name": {},
  "ObjectIdentifier": {},
  "AppliedSchemaArn": {}
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

<h3 id="createdirectory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDirectoryResponse](#schemacreatedirectoryresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|DirectoryAlreadyExistsException|[DirectoryAlreadyExistsException](#schemadirectoryalreadyexistsexception)|
|487|487|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateFacet

<a id="opIdCreateFacet"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/facet/create#x-amz-data-partition' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "Name": "string",
    "Attributes": [
      {
        "Name": {},
        "AttributeDefinition": {
          "Type": {},
          "DefaultValue": {
            "StringValue": {},
            "BinaryValue": {},
            "BooleanValue": {},
            "NumberValue": {},
            "DatetimeValue": {}
          },
          "IsImmutable": {},
          "Rules": {
            "property1": {
              "Type": {},
              "Parameters": {
                "property1": "string",
                "property2": "string"
              }
            },
            "property2": {
              "Type": {},
              "Parameters": {
                "property1": "string",
                "property2": "string"
              }
            }
          }
        },
        "AttributeReference": {
          "TargetFacetName": {},
          "TargetAttributeName": {}
        },
        "RequiredBehavior": {}
      }
    ],
    "ObjectType": "NODE",
    "FacetStyle": "STATIC"
  }'
```

`PUT /amazonclouddirectory/2017-01-11/facet/create#x-amz-data-partition`

Creates a new <a>Facet</a> in a schema. Facet creation is allowed only in development or applied schemas.

> Body parameter

```json
{
  "Name": "string",
  "Attributes": [
    {
      "Name": {},
      "AttributeDefinition": {
        "Type": {},
        "DefaultValue": {
          "StringValue": {},
          "BinaryValue": {},
          "BooleanValue": {},
          "NumberValue": {},
          "DatetimeValue": {}
        },
        "IsImmutable": {},
        "Rules": {
          "property1": {
            "Type": {},
            "Parameters": {
              "property1": "string",
              "property2": "string"
            }
          },
          "property2": {
            "Type": {},
            "Parameters": {
              "property1": "string",
              "property2": "string"
            }
          }
        }
      },
      "AttributeReference": {
        "TargetFacetName": {},
        "TargetAttributeName": {}
      },
      "RequiredBehavior": {}
    }
  ],
  "ObjectType": "NODE",
  "FacetStyle": "STATIC"
}
```

<h3 id="createfacet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The schema ARN in which the new <a>Facet</a> will be created. For more information, see <a>arns</a>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|true|The name of the <a>Facet</a>, which is unique for a given schema.|
|» Attributes|body|[[FacetAttribute](#schemafacetattribute)]|false|The attributes that are associated with the <a>Facet</a>.|
|» ObjectType|body|string|false|<p>Specifies whether a given object created from this facet is of type node, leaf node, policy or index.</p> <ul> <li> <p>Node: Can have multiple children but one parent.</p> </li> </ul> <ul> <li> <p>Leaf node: Cannot have children but can have multiple parents.</p> </li> </ul> <ul> <li> <p>Policy: Allows you to store a policy document and policy type. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p> </li> </ul> <ul> <li> <p>Index: Can be created with the Index API.</p> </li> </ul>|
|» FacetStyle|body|string|false|There are two different styles that you can define on any given facet, <code>Static</code> and <code>Dynamic</code>. For static facets, all attributes must be defined in the schema. For dynamic facets, attributes can be defined during data plane operations.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» ObjectType|NODE|
|» ObjectType|LEAF_NODE|
|» ObjectType|POLICY|
|» ObjectType|INDEX|
|» FacetStyle|STATIC|
|» FacetStyle|DYNAMIC|

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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

> 489 Response

```json
null
```

<h3 id="createfacet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateFacetResponse](#schemacreatefacetresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|487|487|FacetAlreadyExistsException|[FacetAlreadyExistsException](#schemafacetalreadyexistsexception)|
|488|488|InvalidRuleException|[InvalidRuleException](#schemainvalidruleexception)|
|489|489|FacetValidationException|[FacetValidationException](#schemafacetvalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateIndex

<a id="opIdCreateIndex"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/index#x-amz-data-partition' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "OrderedIndexedAttributeList": [
      {
        "SchemaArn": {},
        "FacetName": {},
        "Name": {}
      }
    ],
    "IsUnique": true,
    "ParentReference": {
      "Selector": {}
    },
    "LinkName": "string"
  }'
```

`PUT /amazonclouddirectory/2017-01-11/index#x-amz-data-partition`

Creates an index object. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/indexing_search.html">Indexing and search</a> for more information.

> Body parameter

```json
{
  "OrderedIndexedAttributeList": [
    {
      "SchemaArn": {},
      "FacetName": {},
      "Name": {}
    }
  ],
  "IsUnique": true,
  "ParentReference": {
    "Selector": {}
  },
  "LinkName": "string"
}
```

<h3 id="createindex-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The ARN of the directory where the index should be created.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» OrderedIndexedAttributeList|body|[[AttributeKey](#schemaattributekey)]|true|Specifies the attributes that should be indexed on. Currently only a single attribute is supported.|
|» IsUnique|body|boolean|true|Indicates whether the attribute that is being indexed has unique values or not.|
|» ParentReference|body|object|false|The reference that identifies an object.|
|» » Selector|body|object|false|none|
|» LinkName|body|string|false|The name of the link between the parent object and the index object.|

> Example responses

> 200 Response

```json
{
  "ObjectIdentifier": {}
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

> 488 Response

```json
null
```

> 489 Response

```json
null
```

> 490 Response

```json
null
```

<h3 id="createindex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateIndexResponse](#schemacreateindexresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|DirectoryNotEnabledException|[DirectoryNotEnabledException](#schemadirectorynotenabledexception)|
|487|487|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|488|488|FacetValidationException|[FacetValidationException](#schemafacetvalidationexception)|
|489|489|LinkNameAlreadyInUseException|[LinkNameAlreadyInUseException](#schemalinknamealreadyinuseexception)|
|490|490|UnsupportedIndexTypeException|[UnsupportedIndexTypeException](#schemaunsupportedindextypeexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateObject

<a id="opIdCreateObject"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/object#x-amz-data-partition' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "SchemaFacets": [
      {
        "SchemaArn": {},
        "FacetName": {}
      }
    ],
    "ObjectAttributeList": [
      {
        "Key": {
          "SchemaArn": {},
          "FacetName": {},
          "Name": {}
        },
        "Value": {
          "StringValue": {},
          "BinaryValue": {},
          "BooleanValue": {},
          "NumberValue": {},
          "DatetimeValue": {}
        }
      }
    ],
    "ParentReference": {
      "Selector": {}
    },
    "LinkName": "string"
  }'
```

`PUT /amazonclouddirectory/2017-01-11/object#x-amz-data-partition`

Creates an object in a <a>Directory</a>. Additionally attaches the object to a parent, if a parent reference and <code>LinkName</code> is specified. An object is simply a collection of <a>Facet</a> attributes. You can also use this API call to create a policy object, if the facet from which you create the object is a policy facet. 

> Body parameter

```json
{
  "SchemaFacets": [
    {
      "SchemaArn": {},
      "FacetName": {}
    }
  ],
  "ObjectAttributeList": [
    {
      "Key": {
        "SchemaArn": {},
        "FacetName": {},
        "Name": {}
      },
      "Value": {
        "StringValue": {},
        "BinaryValue": {},
        "BooleanValue": {},
        "NumberValue": {},
        "DatetimeValue": {}
      }
    }
  ],
  "ParentReference": {
    "Selector": {}
  },
  "LinkName": "string"
}
```

<h3 id="createobject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> in which the object will be created. For more information, see <a>arns</a>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» SchemaFacets|body|[[SchemaFacet](#schemaschemafacet)]|true|A list of schema facets to be associated with the object. Do not provide minor version components. See <a>SchemaFacet</a> for details.|
|» ObjectAttributeList|body|[[AttributeKeyAndValue](#schemaattributekeyandvalue)]|false|The attribute map whose attribute ARN contains the key and attribute value as the map value.|
|» ParentReference|body|object|false|The reference that identifies an object.|
|» » Selector|body|object|false|none|
|» LinkName|body|string|false|The name of link that is used to attach this object to a parent.|

> Example responses

> 200 Response

```json
{
  "ObjectIdentifier": {}
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

> 488 Response

```json
null
```

> 489 Response

```json
null
```

> 490 Response

```json
null
```

<h3 id="createobject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateObjectResponse](#schemacreateobjectresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|DirectoryNotEnabledException|[DirectoryNotEnabledException](#schemadirectorynotenabledexception)|
|487|487|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|488|488|FacetValidationException|[FacetValidationException](#schemafacetvalidationexception)|
|489|489|LinkNameAlreadyInUseException|[LinkNameAlreadyInUseException](#schemalinknamealreadyinuseexception)|
|490|490|UnsupportedIndexTypeException|[UnsupportedIndexTypeException](#schemaunsupportedindextypeexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateSchema

<a id="opIdCreateSchema"></a>

> Code samples

```bash
curl https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/schema/create \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string"
  }'
```

`PUT /amazonclouddirectory/2017-01-11/schema/create`

<p>Creates a new schema in a development state. A schema can exist in three phases:</p> <ul> <li> <p> <i>Development:</i> This is a mutable phase of the schema. All new schemas are in the development phase. Once the schema is finalized, it can be published.</p> </li> <li> <p> <i>Published:</i> Published schemas are immutable and have a version associated with them.</p> </li> <li> <p> <i>Applied:</i> Applied schemas are mutable in a way that allows you to add new schema facets. You can also add new, nonrequired attributes to existing schema facets. You can apply only published schemas to directories. </p> </li> </ul>

> Body parameter

```json
{
  "Name": "string"
}
```

<h3 id="createschema-parameters">Parameters</h3>

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
|» Name|body|string|true|The name that is associated with the schema. This is unique to each account and in each region.|

> Example responses

> 200 Response

```json
{
  "SchemaArn": {}
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

<h3 id="createschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateSchemaResponse](#schemacreateschemaresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|SchemaAlreadyExistsException|[SchemaAlreadyExistsException](#schemaschemaalreadyexistsexception)|
|487|487|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateTypedLinkFacet

<a id="opIdCreateTypedLinkFacet"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/typedlink/facet/create#x-amz-data-partition' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "Facet": {
      "Name": {},
      "Attributes": {},
      "IdentityAttributeOrder": {}
    }
  }'
```

`PUT /amazonclouddirectory/2017-01-11/typedlink/facet/create#x-amz-data-partition`

Creates a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.

> Body parameter

```json
{
  "Facet": {
    "Name": {},
    "Attributes": {},
    "IdentityAttributeOrder": {}
  }
}
```

<h3 id="createtypedlinkfacet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The Amazon Resource Name (ARN) that is associated with the schema. For more information, see <a>arns</a>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Facet|body|object|true|Defines the typed links structure and its attributes. To create a typed link facet, use the <a>CreateTypedLinkFacet</a> API.|
|» » Name|body|object|false|none|
|» » Attributes|body|object|false|none|
|» » IdentityAttributeOrder|body|object|false|none|

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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

> 489 Response

```json
null
```

<h3 id="createtypedlinkfacet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateTypedLinkFacetResponse](#schemacreatetypedlinkfacetresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|487|487|FacetAlreadyExistsException|[FacetAlreadyExistsException](#schemafacetalreadyexistsexception)|
|488|488|InvalidRuleException|[InvalidRuleException](#schemainvalidruleexception)|
|489|489|FacetValidationException|[FacetValidationException](#schemafacetvalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDirectory

<a id="opIdDeleteDirectory"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/directory#x-amz-data-partition' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string'
```

`PUT /amazonclouddirectory/2017-01-11/directory#x-amz-data-partition`

Deletes a directory. Only disabled directories can be deleted. A deleted directory cannot be undone. Exercise extreme caution when deleting directories.

<h3 id="deletedirectory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The ARN of the directory to delete.|
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
  "DirectoryArn": {}
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

> 488 Response

```json
null
```

<h3 id="deletedirectory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDirectoryResponse](#schemadeletedirectoryresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|DirectoryNotDisabledException|[DirectoryNotDisabledException](#schemadirectorynotdisabledexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|DirectoryDeletedException|[DirectoryDeletedException](#schemadirectorydeletedexception)|
|487|487|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|488|488|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFacet

<a id="opIdDeleteFacet"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/facet/delete#x-amz-data-partition' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "Name": "string"
  }'
```

`PUT /amazonclouddirectory/2017-01-11/facet/delete#x-amz-data-partition`

Deletes a given <a>Facet</a>. All attributes and <a>Rule</a>s that are associated with the facet will be deleted. Only development schema facets are allowed deletion.

> Body parameter

```json
{
  "Name": "string"
}
```

<h3 id="deletefacet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The Amazon Resource Name (ARN) that is associated with the <a>Facet</a>. For more information, see <a>arns</a>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|true|The name of the facet to delete.|

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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="deletefacet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteFacetResponse](#schemadeletefacetresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|487|487|FacetNotFoundException|[FacetNotFoundException](#schemafacetnotfoundexception)|
|488|488|FacetInUseException|[FacetInUseException](#schemafacetinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteObject

<a id="opIdDeleteObject"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/object/delete#x-amz-data-partition' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "ObjectReference": {
      "Selector": {}
    }
  }'
```

`PUT /amazonclouddirectory/2017-01-11/object/delete#x-amz-data-partition`

Deletes an object and its associated attributes. Only objects with no children and no parents can be deleted. The maximum number of attributes that can be deleted during an object deletion is 30. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Amazon Cloud Directory Limits</a>.

> Body parameter

```json
{
  "ObjectReference": {
    "Selector": {}
  }
}
```

<h3 id="deleteobject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where the object resides. For more information, see <a>arns</a>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ObjectReference|body|object|true|The reference that identifies an object.|
|» » Selector|body|object|false|none|

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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="deleteobject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteObjectResponse](#schemadeleteobjectresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|DirectoryNotEnabledException|[DirectoryNotEnabledException](#schemadirectorynotenabledexception)|
|487|487|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|488|488|ObjectNotDetachedException|[ObjectNotDetachedException](#schemaobjectnotdetachedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteSchema

<a id="opIdDeleteSchema"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/schema#x-amz-data-partition' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string'
```

`PUT /amazonclouddirectory/2017-01-11/schema#x-amz-data-partition`

Deletes a given schema. Schemas in a development and published state can only be deleted. 

<h3 id="deleteschema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The Amazon Resource Name (ARN) of the development schema. For more information, see <a>arns</a>.|
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
  "SchemaArn": {}
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

<h3 id="deleteschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteSchemaResponse](#schemadeleteschemaresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|487|487|StillContainsLinksException|[StillContainsLinksException](#schemastillcontainslinksexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteTypedLinkFacet

<a id="opIdDeleteTypedLinkFacet"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/typedlink/facet/delete#x-amz-data-partition' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "Name": "string"
  }'
```

`PUT /amazonclouddirectory/2017-01-11/typedlink/facet/delete#x-amz-data-partition`

Deletes a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.

> Body parameter

```json
{
  "Name": "string"
}
```

<h3 id="deletetypedlinkfacet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The Amazon Resource Name (ARN) that is associated with the schema. For more information, see <a>arns</a>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|true|The unique name of the typed link facet.|

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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="deletetypedlinkfacet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteTypedLinkFacetResponse](#schemadeletetypedlinkfacetresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|487|487|FacetNotFoundException|[FacetNotFoundException](#schemafacetnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DetachFromIndex

<a id="opIdDetachFromIndex"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/index/detach#x-amz-data-partition' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "IndexReference": {
      "Selector": {}
    },
    "TargetReference": {
      "Selector": {}
    }
  }'
```

`PUT /amazonclouddirectory/2017-01-11/index/detach#x-amz-data-partition`

Detaches the specified object from the specified index.

> Body parameter

```json
{
  "IndexReference": {
    "Selector": {}
  },
  "TargetReference": {
    "Selector": {}
  }
}
```

<h3 id="detachfromindex-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The Amazon Resource Name (ARN) of the directory the index and object exist in.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» IndexReference|body|object|true|The reference that identifies an object.|
|» » Selector|body|object|false|none|
|» TargetReference|body|object|true|The reference that identifies an object.|
|» » Selector|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "DetachedObjectIdentifier": {}
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

> 488 Response

```json
null
```

> 489 Response

```json
null
```

<h3 id="detachfromindex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DetachFromIndexResponse](#schemadetachfromindexresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|DirectoryNotEnabledException|[DirectoryNotEnabledException](#schemadirectorynotenabledexception)|
|487|487|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|488|488|ObjectAlreadyDetachedException|[ObjectAlreadyDetachedException](#schemaobjectalreadydetachedexception)|
|489|489|NotIndexException|[NotIndexException](#schemanotindexexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DetachObject

<a id="opIdDetachObject"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/object/detach#x-amz-data-partition' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "ParentReference": {
      "Selector": {}
    },
    "LinkName": "string"
  }'
```

`PUT /amazonclouddirectory/2017-01-11/object/detach#x-amz-data-partition`

Detaches a given object from the parent object. The object that is to be detached from the parent is specified by the link name.

> Body parameter

```json
{
  "ParentReference": {
    "Selector": {}
  },
  "LinkName": "string"
}
```

<h3 id="detachobject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where objects reside. For more information, see <a>arns</a>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ParentReference|body|object|true|The reference that identifies an object.|
|» » Selector|body|object|false|none|
|» LinkName|body|string|true|The link name associated with the object that needs to be detached.|

> Example responses

> 200 Response

```json
{
  "DetachedObjectIdentifier": {}
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

> 488 Response

```json
null
```

<h3 id="detachobject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DetachObjectResponse](#schemadetachobjectresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|DirectoryNotEnabledException|[DirectoryNotEnabledException](#schemadirectorynotenabledexception)|
|487|487|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|488|488|NotNodeException|[NotNodeException](#schemanotnodeexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DetachPolicy

<a id="opIdDetachPolicy"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/policy/detach#x-amz-data-partition' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "PolicyReference": {
      "Selector": {}
    },
    "ObjectReference": {
      "Selector": {}
    }
  }'
```

`PUT /amazonclouddirectory/2017-01-11/policy/detach#x-amz-data-partition`

Detaches a policy from an object.

> Body parameter

```json
{
  "PolicyReference": {
    "Selector": {}
  },
  "ObjectReference": {
    "Selector": {}
  }
}
```

<h3 id="detachpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where both objects reside. For more information, see <a>arns</a>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» PolicyReference|body|object|true|The reference that identifies an object.|
|» » Selector|body|object|false|none|
|» ObjectReference|body|object|true|The reference that identifies an object.|
|» » Selector|body|object|false|none|

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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="detachpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DetachPolicyResponse](#schemadetachpolicyresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|DirectoryNotEnabledException|[DirectoryNotEnabledException](#schemadirectorynotenabledexception)|
|487|487|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|488|488|NotPolicyException|[NotPolicyException](#schemanotpolicyexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DetachTypedLink

<a id="opIdDetachTypedLink"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/typedlink/detach#x-amz-data-partition' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "TypedLinkSpecifier": {
      "TypedLinkFacet": {
        "SchemaArn": {},
        "TypedLinkName": {}
      },
      "SourceObjectReference": {
        "Selector": {}
      },
      "TargetObjectReference": {
        "Selector": {}
      },
      "IdentityAttributeValues": {}
    }
  }'
```

`PUT /amazonclouddirectory/2017-01-11/typedlink/detach#x-amz-data-partition`

Detaches a typed link from a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.

> Body parameter

```json
{
  "TypedLinkSpecifier": {
    "TypedLinkFacet": {
      "SchemaArn": {},
      "TypedLinkName": {}
    },
    "SourceObjectReference": {
      "Selector": {}
    },
    "TargetObjectReference": {
      "Selector": {}
    },
    "IdentityAttributeValues": {}
  }
}
```

<h3 id="detachtypedlink-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The Amazon Resource Name (ARN) of the directory where you want to detach the typed link.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» TypedLinkSpecifier|body|object|true|Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.|
|» » TypedLinkFacet|body|object|false|none|
|» » » SchemaArn|body|object|true|none|
|» » » TypedLinkName|body|object|true|none|
|» » SourceObjectReference|body|object|false|none|
|» » » Selector|body|object|false|none|
|» » TargetObjectReference|body|object|false|none|
|» » » Selector|body|object|false|none|
|» » IdentityAttributeValues|body|object|false|none|

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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="detachtypedlink-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|DirectoryNotEnabledException|[DirectoryNotEnabledException](#schemadirectorynotenabledexception)|
|487|487|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|488|488|FacetValidationException|[FacetValidationException](#schemafacetvalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisableDirectory

<a id="opIdDisableDirectory"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/directory/disable#x-amz-data-partition' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string'
```

`PUT /amazonclouddirectory/2017-01-11/directory/disable#x-amz-data-partition`

Disables the specified directory. Disabled directories cannot be read or written to. Only enabled directories can be disabled. Disabled directories may be reenabled.

<h3 id="disabledirectory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The ARN of the directory to disable.|
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
  "DirectoryArn": {}
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

<h3 id="disabledirectory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisableDirectoryResponse](#schemadisabledirectoryresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|DirectoryDeletedException|[DirectoryDeletedException](#schemadirectorydeletedexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|487|487|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## EnableDirectory

<a id="opIdEnableDirectory"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/directory/enable#x-amz-data-partition' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string'
```

`PUT /amazonclouddirectory/2017-01-11/directory/enable#x-amz-data-partition`

Enables the specified directory. Only disabled directories can be enabled. Once enabled, the directory can then be read and written to.

<h3 id="enabledirectory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The ARN of the directory to enable.|
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
  "DirectoryArn": {}
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

<h3 id="enabledirectory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EnableDirectoryResponse](#schemaenabledirectoryresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|DirectoryDeletedException|[DirectoryDeletedException](#schemadirectorydeletedexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|487|487|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAppliedSchemaVersion

<a id="opIdGetAppliedSchemaVersion"></a>

> Code samples

```bash
curl https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/schema/getappliedschema \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "SchemaArn": "string"
  }'
```

`POST /amazonclouddirectory/2017-01-11/schema/getappliedschema`

Returns current applied schema version ARN, including the minor version in use.

> Body parameter

```json
{
  "SchemaArn": "string"
}
```

<h3 id="getappliedschemaversion-parameters">Parameters</h3>

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
|» SchemaArn|body|string|true|The ARN of the applied schema.|

> Example responses

> 200 Response

```json
{
  "AppliedSchemaArn": {}
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

<h3 id="getappliedschemaversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAppliedSchemaVersionResponse](#schemagetappliedschemaversionresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDirectory

<a id="opIdGetDirectory"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/directory/get#x-amz-data-partition' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string'
```

`POST /amazonclouddirectory/2017-01-11/directory/get#x-amz-data-partition`

Retrieves metadata about a directory.

<h3 id="getdirectory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The ARN of the directory.|
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
  "Directory": {
    "Name": {},
    "DirectoryArn": {},
    "State": {},
    "CreationDateTime": {}
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

<h3 id="getdirectory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDirectoryResponse](#schemagetdirectoryresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFacet

<a id="opIdUpdateFacet"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/facet#x-amz-data-partition' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "Name": "string",
    "AttributeUpdates": [
      {
        "Attribute": {
          "Name": {},
          "AttributeDefinition": {
            "Type": {},
            "DefaultValue": {
              "StringValue": {},
              "BinaryValue": {},
              "BooleanValue": {},
              "NumberValue": {},
              "DatetimeValue": {}
            },
            "IsImmutable": {},
            "Rules": {
              "property1": {
                "Type": {},
                "Parameters": {
                  "property1": "string",
                  "property2": "string"
                }
              },
              "property2": {
                "Type": {},
                "Parameters": {
                  "property1": "string",
                  "property2": "string"
                }
              }
            }
          },
          "AttributeReference": {
            "TargetFacetName": {},
            "TargetAttributeName": {}
          },
          "RequiredBehavior": {}
        },
        "Action": {}
      }
    ],
    "ObjectType": "NODE"
  }'
```

`PUT /amazonclouddirectory/2017-01-11/facet#x-amz-data-partition`

<p>Does the following:</p> <ol> <li> <p>Adds new <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> <li> <p>Updates existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> <li> <p>Deletes existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> </ol>

> Body parameter

```json
{
  "Name": "string",
  "AttributeUpdates": [
    {
      "Attribute": {
        "Name": {},
        "AttributeDefinition": {
          "Type": {},
          "DefaultValue": {
            "StringValue": {},
            "BinaryValue": {},
            "BooleanValue": {},
            "NumberValue": {},
            "DatetimeValue": {}
          },
          "IsImmutable": {},
          "Rules": {
            "property1": {
              "Type": {},
              "Parameters": {
                "property1": "string",
                "property2": "string"
              }
            },
            "property2": {
              "Type": {},
              "Parameters": {
                "property1": "string",
                "property2": "string"
              }
            }
          }
        },
        "AttributeReference": {
          "TargetFacetName": {},
          "TargetAttributeName": {}
        },
        "RequiredBehavior": {}
      },
      "Action": {}
    }
  ],
  "ObjectType": "NODE"
}
```

<h3 id="updatefacet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The Amazon Resource Name (ARN) that is associated with the <a>Facet</a>. For more information, see <a>arns</a>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|true|The name of the facet.|
|» AttributeUpdates|body|[[FacetAttributeUpdate](#schemafacetattributeupdate)]|false|List of attributes that need to be updated in a given schema <a>Facet</a>. Each attribute is followed by <code>AttributeAction</code>, which specifies the type of update operation to perform. |
|» ObjectType|body|string|false|The object type that is associated with the facet. See <a>CreateFacetRequest$ObjectType</a> for more details.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» ObjectType|NODE|
|» ObjectType|LEAF_NODE|
|» ObjectType|POLICY|
|» ObjectType|INDEX|

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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

> 489 Response

```json
null
```

> 490 Response

```json
null
```

<h3 id="updatefacet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateFacetResponse](#schemaupdatefacetresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|InvalidFacetUpdateException|[InvalidFacetUpdateException](#schemainvalidfacetupdateexception)|
|487|487|FacetValidationException|[FacetValidationException](#schemafacetvalidationexception)|
|488|488|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|489|489|FacetNotFoundException|[FacetNotFoundException](#schemafacetnotfoundexception)|
|490|490|InvalidRuleException|[InvalidRuleException](#schemainvalidruleexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetFacet

<a id="opIdGetFacet"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/facet#x-amz-data-partition' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "Name": "string"
  }'
```

`POST /amazonclouddirectory/2017-01-11/facet#x-amz-data-partition`

Gets details of the <a>Facet</a>, such as facet name, attributes, <a>Rule</a>s, or <code>ObjectType</code>. You can call this on all kinds of schema facets -- published, development, or applied.

> Body parameter

```json
{
  "Name": "string"
}
```

<h3 id="getfacet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The Amazon Resource Name (ARN) that is associated with the <a>Facet</a>. For more information, see <a>arns</a>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|true|The name of the facet to retrieve.|

> Example responses

> 200 Response

```json
{
  "Facet": {
    "Name": {},
    "ObjectType": {},
    "FacetStyle": {}
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

<h3 id="getfacet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetFacetResponse](#schemagetfacetresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|487|487|FacetNotFoundException|[FacetNotFoundException](#schemafacetnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLinkAttributes

<a id="opIdGetLinkAttributes"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/typedlink/attributes/get#x-amz-data-partition' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "TypedLinkSpecifier": {
      "TypedLinkFacet": {
        "SchemaArn": {},
        "TypedLinkName": {}
      },
      "SourceObjectReference": {
        "Selector": {}
      },
      "TargetObjectReference": {
        "Selector": {}
      },
      "IdentityAttributeValues": {}
    },
    "AttributeNames": [
      "string"
    ],
    "ConsistencyLevel": "SERIALIZABLE"
  }'
```

`POST /amazonclouddirectory/2017-01-11/typedlink/attributes/get#x-amz-data-partition`

Retrieves attributes that are associated with a typed link.

> Body parameter

```json
{
  "TypedLinkSpecifier": {
    "TypedLinkFacet": {
      "SchemaArn": {},
      "TypedLinkName": {}
    },
    "SourceObjectReference": {
      "Selector": {}
    },
    "TargetObjectReference": {
      "Selector": {}
    },
    "IdentityAttributeValues": {}
  },
  "AttributeNames": [
    "string"
  ],
  "ConsistencyLevel": "SERIALIZABLE"
}
```

<h3 id="getlinkattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The Amazon Resource Name (ARN) that is associated with the Directory where the typed link resides. For more information, see <a>arns</a> or <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» TypedLinkSpecifier|body|object|true|Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.|
|» » TypedLinkFacet|body|object|false|none|
|» » » SchemaArn|body|object|true|none|
|» » » TypedLinkName|body|object|true|none|
|» » SourceObjectReference|body|object|false|none|
|» » » Selector|body|object|false|none|
|» » TargetObjectReference|body|object|false|none|
|» » » Selector|body|object|false|none|
|» » IdentityAttributeValues|body|object|false|none|
|» AttributeNames|body|[[AttributeName](#schemaattributename)]|true|A list of attribute names whose values will be retrieved.|
|» ConsistencyLevel|body|string|false|The consistency level at which to retrieve the attributes on a typed link.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» ConsistencyLevel|SERIALIZABLE|
|» ConsistencyLevel|EVENTUAL|

> Example responses

> 200 Response

```json
{
  "Attributes": {}
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

> 488 Response

```json
null
```

<h3 id="getlinkattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLinkAttributesResponse](#schemagetlinkattributesresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|DirectoryNotEnabledException|[DirectoryNotEnabledException](#schemadirectorynotenabledexception)|
|487|487|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|488|488|FacetValidationException|[FacetValidationException](#schemafacetvalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetObjectAttributes

<a id="opIdGetObjectAttributes"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/object/attributes/get#x-amz-data-partition' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "ObjectReference": {
      "Selector": {}
    },
    "SchemaFacet": {
      "SchemaArn": {},
      "FacetName": {}
    },
    "AttributeNames": [
      "string"
    ]
  }'
```

`POST /amazonclouddirectory/2017-01-11/object/attributes/get#x-amz-data-partition`

Retrieves attributes within a facet that are associated with an object.

> Body parameter

```json
{
  "ObjectReference": {
    "Selector": {}
  },
  "SchemaFacet": {
    "SchemaArn": {},
    "FacetName": {}
  },
  "AttributeNames": [
    "string"
  ]
}
```

<h3 id="getobjectattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where the object resides.|
|x-amz-consistency-level|header|string|false|The consistency level at which to retrieve the attributes on an object.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ObjectReference|body|object|true|The reference that identifies an object.|
|» » Selector|body|object|false|none|
|» SchemaFacet|body|object|true|A facet.|
|» » SchemaArn|body|object|false|none|
|» » FacetName|body|object|false|none|
|» AttributeNames|body|[[AttributeName](#schemaattributename)]|true|List of attribute names whose values will be retrieved.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-consistency-level|SERIALIZABLE|
|x-amz-consistency-level|EVENTUAL|

> Example responses

> 200 Response

```json
{
  "Attributes": {}
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

> 488 Response

```json
null
```

<h3 id="getobjectattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetObjectAttributesResponse](#schemagetobjectattributesresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|DirectoryNotEnabledException|[DirectoryNotEnabledException](#schemadirectorynotenabledexception)|
|487|487|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|488|488|FacetValidationException|[FacetValidationException](#schemafacetvalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetObjectInformation

<a id="opIdGetObjectInformation"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/object/information#x-amz-data-partition' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "ObjectReference": {
      "Selector": {}
    }
  }'
```

`POST /amazonclouddirectory/2017-01-11/object/information#x-amz-data-partition`

Retrieves metadata about an object.

> Body parameter

```json
{
  "ObjectReference": {
    "Selector": {}
  }
}
```

<h3 id="getobjectinformation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The ARN of the directory being retrieved.|
|x-amz-consistency-level|header|string|false|The consistency level at which to retrieve the object information.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ObjectReference|body|object|true|The reference that identifies an object.|
|» » Selector|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-consistency-level|SERIALIZABLE|
|x-amz-consistency-level|EVENTUAL|

> Example responses

> 200 Response

```json
{
  "SchemaFacets": {},
  "ObjectIdentifier": {}
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

<h3 id="getobjectinformation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetObjectInformationResponse](#schemagetobjectinformationresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|DirectoryNotEnabledException|[DirectoryNotEnabledException](#schemadirectorynotenabledexception)|
|487|487|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutSchemaFromJson

<a id="opIdPutSchemaFromJson"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/schema/json#x-amz-data-partition' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "Document": "string"
  }'
```

`PUT /amazonclouddirectory/2017-01-11/schema/json#x-amz-data-partition`

Allows a schema to be updated using JSON upload. Only available for development schemas. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_jsonformat.html#schemas_json">JSON Schema Format</a> for more information.

> Body parameter

```json
{
  "Document": "string"
}
```

<h3 id="putschemafromjson-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The ARN of the schema to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Document|body|string|true|The replacement JSON schema.|

> Example responses

> 200 Response

```json
{
  "Arn": {}
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

<h3 id="putschemafromjson-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutSchemaFromJsonResponse](#schemaputschemafromjsonresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|InvalidSchemaDocException|[InvalidSchemaDocException](#schemainvalidschemadocexception)|
|487|487|InvalidRuleException|[InvalidRuleException](#schemainvalidruleexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSchemaAsJson

<a id="opIdGetSchemaAsJson"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/schema/json#x-amz-data-partition' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string'
```

`POST /amazonclouddirectory/2017-01-11/schema/json#x-amz-data-partition`

Retrieves a JSON representation of the schema. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_jsonformat.html#schemas_json">JSON Schema Format</a> for more information.

<h3 id="getschemaasjson-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The ARN of the schema to retrieve.|
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
  "Name": {},
  "Document": {}
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

<h3 id="getschemaasjson-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSchemaAsJsonResponse](#schemagetschemaasjsonresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|487|487|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetTypedLinkFacetInformation

<a id="opIdGetTypedLinkFacetInformation"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/typedlink/facet/get#x-amz-data-partition' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "Name": "string"
  }'
```

`POST /amazonclouddirectory/2017-01-11/typedlink/facet/get#x-amz-data-partition`

Returns the identity attribute order for a specific <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.

> Body parameter

```json
{
  "Name": "string"
}
```

<h3 id="gettypedlinkfacetinformation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The Amazon Resource Name (ARN) that is associated with the schema. For more information, see <a>arns</a>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|true|The unique name of the typed link facet.|

> Example responses

> 200 Response

```json
{
  "IdentityAttributeOrder": {}
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

> 488 Response

```json
null
```

<h3 id="gettypedlinkfacetinformation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTypedLinkFacetInformationResponse](#schemagettypedlinkfacetinformationresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|487|487|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|488|488|FacetNotFoundException|[FacetNotFoundException](#schemafacetnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAppliedSchemaArns

<a id="opIdListAppliedSchemaArns"></a>

> Code samples

```bash
curl https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/schema/applied \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "DirectoryArn": "string",
    "SchemaArn": "string",
    "NextToken": "string",
    "MaxResults": 1
  }'
```

`POST /amazonclouddirectory/2017-01-11/schema/applied`

Lists schema major versions applied to a directory. If <code>SchemaArn</code> is provided, lists the minor version.

> Body parameter

```json
{
  "DirectoryArn": "string",
  "SchemaArn": "string",
  "NextToken": "string",
  "MaxResults": 1
}
```

<h3 id="listappliedschemaarns-parameters">Parameters</h3>

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
|» DirectoryArn|body|string|true|The ARN of the directory you are listing.|
|» SchemaArn|body|string|false|The response for <code>ListAppliedSchemaArns</code> when this parameter is used will list all minor version ARNs for a major version.|
|» NextToken|body|string|false|The pagination token.|
|» MaxResults|body|integer|false|The maximum number of results to retrieve.|

> Example responses

> 200 Response

```json
{
  "SchemaArns": {},
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

<h3 id="listappliedschemaarns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAppliedSchemaArnsResponse](#schemalistappliedschemaarnsresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|487|487|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAttachedIndices

<a id="opIdListAttachedIndices"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/object/indices#x-amz-data-partition' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "TargetReference": {
      "Selector": {}
    },
    "NextToken": "string",
    "MaxResults": 1
  }'
```

`POST /amazonclouddirectory/2017-01-11/object/indices#x-amz-data-partition`

Lists indices attached to the specified object.

> Body parameter

```json
{
  "TargetReference": {
    "Selector": {}
  },
  "NextToken": "string",
  "MaxResults": 1
}
```

<h3 id="listattachedindices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The ARN of the directory.|
|x-amz-consistency-level|header|string|false|The consistency level to use for this operation.|
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
|» TargetReference|body|object|true|The reference that identifies an object.|
|» » Selector|body|object|false|none|
|» NextToken|body|string|false|The pagination token.|
|» MaxResults|body|integer|false|The maximum number of results to retrieve.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-consistency-level|SERIALIZABLE|
|x-amz-consistency-level|EVENTUAL|

> Example responses

> 200 Response

```json
{
  "IndexAttachments": {},
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

<h3 id="listattachedindices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAttachedIndicesResponse](#schemalistattachedindicesresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|DirectoryNotEnabledException|[DirectoryNotEnabledException](#schemadirectorynotenabledexception)|
|487|487|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDevelopmentSchemaArns

<a id="opIdListDevelopmentSchemaArns"></a>

> Code samples

```bash
curl https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/schema/development \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "NextToken": "string",
    "MaxResults": 1
  }'
```

`POST /amazonclouddirectory/2017-01-11/schema/development`

Retrieves each Amazon Resource Name (ARN) of schemas in the development state.

> Body parameter

```json
{
  "NextToken": "string",
  "MaxResults": 1
}
```

<h3 id="listdevelopmentschemaarns-parameters">Parameters</h3>

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
|» NextToken|body|string|false|The pagination token.|
|» MaxResults|body|integer|false|The maximum number of results to retrieve.|

> Example responses

> 200 Response

```json
{
  "SchemaArns": {},
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

<h3 id="listdevelopmentschemaarns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDevelopmentSchemaArnsResponse](#schemalistdevelopmentschemaarnsresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|487|487|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDirectories

<a id="opIdListDirectories"></a>

> Code samples

```bash
curl https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/directory/list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "NextToken": "string",
    "MaxResults": 1,
    "state": "ENABLED"
  }'
```

`POST /amazonclouddirectory/2017-01-11/directory/list`

Lists directories created within an account.

> Body parameter

```json
{
  "NextToken": "string",
  "MaxResults": 1,
  "state": "ENABLED"
}
```

<h3 id="listdirectories-parameters">Parameters</h3>

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
|» NextToken|body|string|false|The pagination token.|
|» MaxResults|body|integer|false|The maximum number of results to retrieve.|
|» state|body|string|false|The state of the directories in the list. Can be either Enabled, Disabled, or Deleted.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» state|ENABLED|
|» state|DISABLED|
|» state|DELETED|

> Example responses

> 200 Response

```json
{
  "Directories": {},
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

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="listdirectories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDirectoriesResponse](#schemalistdirectoriesresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFacetAttributes

<a id="opIdListFacetAttributes"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/facet/attributes#x-amz-data-partition' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "Name": "string",
    "NextToken": "string",
    "MaxResults": 1
  }'
```

`POST /amazonclouddirectory/2017-01-11/facet/attributes#x-amz-data-partition`

Retrieves attributes attached to the facet.

> Body parameter

```json
{
  "Name": "string",
  "NextToken": "string",
  "MaxResults": 1
}
```

<h3 id="listfacetattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The ARN of the schema where the facet resides.|
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
|» Name|body|string|true|The name of the facet whose attributes will be retrieved.|
|» NextToken|body|string|false|The pagination token.|
|» MaxResults|body|integer|false|The maximum number of results to retrieve.|

> Example responses

> 200 Response

```json
{
  "Attributes": {},
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

> 488 Response

```json
null
```

<h3 id="listfacetattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFacetAttributesResponse](#schemalistfacetattributesresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|487|487|FacetNotFoundException|[FacetNotFoundException](#schemafacetnotfoundexception)|
|488|488|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFacetNames

<a id="opIdListFacetNames"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/facet/list#x-amz-data-partition' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "NextToken": "string",
    "MaxResults": 1
  }'
```

`POST /amazonclouddirectory/2017-01-11/facet/list#x-amz-data-partition`

Retrieves the names of facets that exist in a schema.

> Body parameter

```json
{
  "NextToken": "string",
  "MaxResults": 1
}
```

<h3 id="listfacetnames-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The Amazon Resource Name (ARN) to retrieve facet names from.|
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
|» NextToken|body|string|false|The pagination token.|
|» MaxResults|body|integer|false|The maximum number of results to retrieve.|

> Example responses

> 200 Response

```json
{
  "FacetNames": {},
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

<h3 id="listfacetnames-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFacetNamesResponse](#schemalistfacetnamesresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|487|487|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListIncomingTypedLinks

<a id="opIdListIncomingTypedLinks"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/typedlink/incoming#x-amz-data-partition' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "ObjectReference": {
      "Selector": {}
    },
    "FilterAttributeRanges": [
      {
        "AttributeName": {},
        "Range": {
          "StartMode": {},
          "StartValue": {
            "StringValue": {},
            "BinaryValue": {},
            "BooleanValue": {},
            "NumberValue": {},
            "DatetimeValue": {}
          },
          "EndMode": {},
          "EndValue": {
            "StringValue": {},
            "BinaryValue": {},
            "BooleanValue": {},
            "NumberValue": {},
            "DatetimeValue": {}
          }
        }
      }
    ],
    "FilterTypedLink": {
      "SchemaArn": {},
      "TypedLinkName": {}
    },
    "NextToken": "string",
    "MaxResults": 1,
    "ConsistencyLevel": "SERIALIZABLE"
  }'
```

`POST /amazonclouddirectory/2017-01-11/typedlink/incoming#x-amz-data-partition`

Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.

> Body parameter

```json
{
  "ObjectReference": {
    "Selector": {}
  },
  "FilterAttributeRanges": [
    {
      "AttributeName": {},
      "Range": {
        "StartMode": {},
        "StartValue": {
          "StringValue": {},
          "BinaryValue": {},
          "BooleanValue": {},
          "NumberValue": {},
          "DatetimeValue": {}
        },
        "EndMode": {},
        "EndValue": {
          "StringValue": {},
          "BinaryValue": {},
          "BooleanValue": {},
          "NumberValue": {},
          "DatetimeValue": {}
        }
      }
    }
  ],
  "FilterTypedLink": {
    "SchemaArn": {},
    "TypedLinkName": {}
  },
  "NextToken": "string",
  "MaxResults": 1,
  "ConsistencyLevel": "SERIALIZABLE"
}
```

<h3 id="listincomingtypedlinks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The Amazon Resource Name (ARN) of the directory where you want to list the typed links.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ObjectReference|body|object|true|The reference that identifies an object.|
|» » Selector|body|object|false|none|
|» FilterAttributeRanges|body|[[TypedLinkAttributeRange](#schematypedlinkattributerange)]|false|Provides range filters for multiple attributes. When providing ranges to typed link selection, any inexact ranges must be specified at the end. Any attributes that do not have a range specified are presumed to match the entire range.|
|» FilterTypedLink|body|object|false|Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.|
|» » SchemaArn|body|object|false|none|
|» » TypedLinkName|body|object|false|none|
|» NextToken|body|string|false|The pagination token.|
|» MaxResults|body|integer|false|The maximum number of results to retrieve.|
|» ConsistencyLevel|body|string|false|The consistency level to execute the request at.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» ConsistencyLevel|SERIALIZABLE|
|» ConsistencyLevel|EVENTUAL|

> Example responses

> 200 Response

```json
{
  "LinkSpecifiers": {},
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

> 488 Response

```json
null
```

> 489 Response

```json
null
```

<h3 id="listincomingtypedlinks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListIncomingTypedLinksResponse](#schemalistincomingtypedlinksresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|DirectoryNotEnabledException|[DirectoryNotEnabledException](#schemadirectorynotenabledexception)|
|487|487|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|488|488|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|489|489|FacetValidationException|[FacetValidationException](#schemafacetvalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListIndex

<a id="opIdListIndex"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/index/targets#x-amz-data-partition' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "RangesOnIndexedValues": [
      {
        "AttributeKey": {
          "SchemaArn": {},
          "FacetName": {},
          "Name": {}
        },
        "Range": {
          "StartMode": {},
          "StartValue": {
            "StringValue": {},
            "BinaryValue": {},
            "BooleanValue": {},
            "NumberValue": {},
            "DatetimeValue": {}
          },
          "EndMode": {},
          "EndValue": {
            "StringValue": {},
            "BinaryValue": {},
            "BooleanValue": {},
            "NumberValue": {},
            "DatetimeValue": {}
          }
        }
      }
    ],
    "IndexReference": {
      "Selector": {}
    },
    "MaxResults": 1,
    "NextToken": "string"
  }'
```

`POST /amazonclouddirectory/2017-01-11/index/targets#x-amz-data-partition`

Lists objects attached to the specified index.

> Body parameter

```json
{
  "RangesOnIndexedValues": [
    {
      "AttributeKey": {
        "SchemaArn": {},
        "FacetName": {},
        "Name": {}
      },
      "Range": {
        "StartMode": {},
        "StartValue": {
          "StringValue": {},
          "BinaryValue": {},
          "BooleanValue": {},
          "NumberValue": {},
          "DatetimeValue": {}
        },
        "EndMode": {},
        "EndValue": {
          "StringValue": {},
          "BinaryValue": {},
          "BooleanValue": {},
          "NumberValue": {},
          "DatetimeValue": {}
        }
      }
    }
  ],
  "IndexReference": {
    "Selector": {}
  },
  "MaxResults": 1,
  "NextToken": "string"
}
```

<h3 id="listindex-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The ARN of the directory that the index exists in.|
|x-amz-consistency-level|header|string|false|The consistency level to execute the request at.|
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
|» RangesOnIndexedValues|body|[[ObjectAttributeRange](#schemaobjectattributerange)]|false|Specifies the ranges of indexed values that you want to query.|
|» IndexReference|body|object|true|The reference that identifies an object.|
|» » Selector|body|object|false|none|
|» MaxResults|body|integer|false|The maximum number of objects in a single page to retrieve from the index during a request. For more information, see <a href="http://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Amazon Cloud Directory Limits</a>.|
|» NextToken|body|string|false|The pagination token.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-consistency-level|SERIALIZABLE|
|x-amz-consistency-level|EVENTUAL|

> Example responses

> 200 Response

```json
{
  "IndexAttachments": {},
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

> 488 Response

```json
null
```

> 489 Response

```json
null
```

> 490 Response

```json
null
```

<h3 id="listindex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListIndexResponse](#schemalistindexresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|FacetValidationException|[FacetValidationException](#schemafacetvalidationexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|486|486|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|487|487|DirectoryNotEnabledException|[DirectoryNotEnabledException](#schemadirectorynotenabledexception)|
|488|488|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|489|489|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|490|490|NotIndexException|[NotIndexException](#schemanotindexexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListManagedSchemaArns

<a id="opIdListManagedSchemaArns"></a>

> Code samples

```bash
curl https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/schema/managed \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "SchemaArn": "string",
    "NextToken": "string",
    "MaxResults": 1
  }'
```

`POST /amazonclouddirectory/2017-01-11/schema/managed`

Lists the major version families of each managed schema. If a major version ARN is provided as SchemaArn, the minor version revisions in that family are listed instead.

> Body parameter

```json
{
  "SchemaArn": "string",
  "NextToken": "string",
  "MaxResults": 1
}
```

<h3 id="listmanagedschemaarns-parameters">Parameters</h3>

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
|» SchemaArn|body|string|false|The response for ListManagedSchemaArns. When this parameter is used, all minor version ARNs for a major version are listed.|
|» NextToken|body|string|false|The pagination token.|
|» MaxResults|body|integer|false|The maximum number of results to retrieve.|

> Example responses

> 200 Response

```json
{
  "SchemaArns": {},
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

> 485 Response

```json
null
```

<h3 id="listmanagedschemaarns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListManagedSchemaArnsResponse](#schemalistmanagedschemaarnsresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListObjectAttributes

<a id="opIdListObjectAttributes"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/object/attributes#x-amz-data-partition' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "ObjectReference": {
      "Selector": {}
    },
    "NextToken": "string",
    "MaxResults": 1,
    "FacetFilter": {
      "SchemaArn": {},
      "FacetName": {}
    }
  }'
```

`POST /amazonclouddirectory/2017-01-11/object/attributes#x-amz-data-partition`

Lists all attributes that are associated with an object. 

> Body parameter

```json
{
  "ObjectReference": {
    "Selector": {}
  },
  "NextToken": "string",
  "MaxResults": 1,
  "FacetFilter": {
    "SchemaArn": {},
    "FacetName": {}
  }
}
```

<h3 id="listobjectattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where the object resides. For more information, see <a>arns</a>.|
|x-amz-consistency-level|header|string|false|Represents the manner and timing in which the successful write or update of an object is reflected in a subsequent read operation of that same object.|
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
|» ObjectReference|body|object|true|The reference that identifies an object.|
|» » Selector|body|object|false|none|
|» NextToken|body|string|false|The pagination token.|
|» MaxResults|body|integer|false|The maximum number of items to be retrieved in a single call. This is an approximate number.|
|» FacetFilter|body|object|false|A facet.|
|» » SchemaArn|body|object|false|none|
|» » FacetName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-consistency-level|SERIALIZABLE|
|x-amz-consistency-level|EVENTUAL|

> Example responses

> 200 Response

```json
{
  "Attributes": {},
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

> 488 Response

```json
null
```

> 489 Response

```json
null
```

<h3 id="listobjectattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListObjectAttributesResponse](#schemalistobjectattributesresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|DirectoryNotEnabledException|[DirectoryNotEnabledException](#schemadirectorynotenabledexception)|
|487|487|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|488|488|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|489|489|FacetValidationException|[FacetValidationException](#schemafacetvalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListObjectChildren

<a id="opIdListObjectChildren"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/object/children#x-amz-data-partition' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "ObjectReference": {
      "Selector": {}
    },
    "NextToken": "string",
    "MaxResults": 1
  }'
```

`POST /amazonclouddirectory/2017-01-11/object/children#x-amz-data-partition`

Returns a paginated list of child objects that are associated with a given object.

> Body parameter

```json
{
  "ObjectReference": {
    "Selector": {}
  },
  "NextToken": "string",
  "MaxResults": 1
}
```

<h3 id="listobjectchildren-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where the object resides. For more information, see <a>arns</a>.|
|x-amz-consistency-level|header|string|false|Represents the manner and timing in which the successful write or update of an object is reflected in a subsequent read operation of that same object.|
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
|» ObjectReference|body|object|true|The reference that identifies an object.|
|» » Selector|body|object|false|none|
|» NextToken|body|string|false|The pagination token.|
|» MaxResults|body|integer|false|The maximum number of items to be retrieved in a single call. This is an approximate number.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-consistency-level|SERIALIZABLE|
|x-amz-consistency-level|EVENTUAL|

> Example responses

> 200 Response

```json
{
  "Children": {
    "property1": "string",
    "property2": "string"
  },
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

> 488 Response

```json
null
```

> 489 Response

```json
null
```

<h3 id="listobjectchildren-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListObjectChildrenResponse](#schemalistobjectchildrenresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|DirectoryNotEnabledException|[DirectoryNotEnabledException](#schemadirectorynotenabledexception)|
|487|487|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|488|488|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|489|489|NotNodeException|[NotNodeException](#schemanotnodeexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListObjectParentPaths

<a id="opIdListObjectParentPaths"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/object/parentpaths#x-amz-data-partition' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "ObjectReference": {
      "Selector": {}
    },
    "NextToken": "string",
    "MaxResults": 1
  }'
```

`POST /amazonclouddirectory/2017-01-11/object/parentpaths#x-amz-data-partition`

<p>Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects. For more information about objects, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directorystructure.html">Directory Structure</a>.</p> <p>Use this API to evaluate all parents for an object. The call returns all objects from the root of the directory up to the requested object. The API returns the number of paths based on user-defined <code>MaxResults</code>, in case there are multiple paths to the parent. The order of the paths and nodes returned is consistent among multiple API calls unless the objects are deleted or moved. Paths not leading to the directory root are ignored from the target object.</p>

> Body parameter

```json
{
  "ObjectReference": {
    "Selector": {}
  },
  "NextToken": "string",
  "MaxResults": 1
}
```

<h3 id="listobjectparentpaths-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The ARN of the directory to which the parent path applies.|
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
|» ObjectReference|body|object|true|The reference that identifies an object.|
|» » Selector|body|object|false|none|
|» NextToken|body|string|false|The pagination token.|
|» MaxResults|body|integer|false|The maximum number of items to be retrieved in a single call. This is an approximate number.|

> Example responses

> 200 Response

```json
{
  "PathToObjectIdentifiersList": {},
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

> 488 Response

```json
null
```

<h3 id="listobjectparentpaths-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListObjectParentPathsResponse](#schemalistobjectparentpathsresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|DirectoryNotEnabledException|[DirectoryNotEnabledException](#schemadirectorynotenabledexception)|
|487|487|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|488|488|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListObjectParents

<a id="opIdListObjectParents"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/object/parent#x-amz-data-partition' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "ObjectReference": {
      "Selector": {}
    },
    "NextToken": "string",
    "MaxResults": 1,
    "IncludeAllLinksToEachParent": true
  }'
```

`POST /amazonclouddirectory/2017-01-11/object/parent#x-amz-data-partition`

Lists parent objects that are associated with a given object in pagination fashion.

> Body parameter

```json
{
  "ObjectReference": {
    "Selector": {}
  },
  "NextToken": "string",
  "MaxResults": 1,
  "IncludeAllLinksToEachParent": true
}
```

<h3 id="listobjectparents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where the object resides. For more information, see <a>arns</a>.|
|x-amz-consistency-level|header|string|false|Represents the manner and timing in which the successful write or update of an object is reflected in a subsequent read operation of that same object.|
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
|» ObjectReference|body|object|true|The reference that identifies an object.|
|» » Selector|body|object|false|none|
|» NextToken|body|string|false|The pagination token.|
|» MaxResults|body|integer|false|The maximum number of items to be retrieved in a single call. This is an approximate number.|
|» IncludeAllLinksToEachParent|body|boolean|false|When set to True, returns all <a>ListObjectParentsResponse$ParentLinks</a>. There could be multiple links between a parent-child pair.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-consistency-level|SERIALIZABLE|
|x-amz-consistency-level|EVENTUAL|

> Example responses

> 200 Response

```json
{
  "Parents": {
    "property1": "string",
    "property2": "string"
  },
  "NextToken": {},
  "ParentLinks": {}
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

> 488 Response

```json
null
```

> 489 Response

```json
null
```

<h3 id="listobjectparents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListObjectParentsResponse](#schemalistobjectparentsresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|DirectoryNotEnabledException|[DirectoryNotEnabledException](#schemadirectorynotenabledexception)|
|487|487|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|488|488|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|489|489|CannotListParentOfRootException|[CannotListParentOfRootException](#schemacannotlistparentofrootexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListObjectPolicies

<a id="opIdListObjectPolicies"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/object/policy#x-amz-data-partition' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "ObjectReference": {
      "Selector": {}
    },
    "NextToken": "string",
    "MaxResults": 1
  }'
```

`POST /amazonclouddirectory/2017-01-11/object/policy#x-amz-data-partition`

Returns policies attached to an object in pagination fashion.

> Body parameter

```json
{
  "ObjectReference": {
    "Selector": {}
  },
  "NextToken": "string",
  "MaxResults": 1
}
```

<h3 id="listobjectpolicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where objects reside. For more information, see <a>arns</a>.|
|x-amz-consistency-level|header|string|false|Represents the manner and timing in which the successful write or update of an object is reflected in a subsequent read operation of that same object.|
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
|» ObjectReference|body|object|true|The reference that identifies an object.|
|» » Selector|body|object|false|none|
|» NextToken|body|string|false|The pagination token.|
|» MaxResults|body|integer|false|The maximum number of items to be retrieved in a single call. This is an approximate number.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-consistency-level|SERIALIZABLE|
|x-amz-consistency-level|EVENTUAL|

> Example responses

> 200 Response

```json
{
  "AttachedPolicyIds": {},
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

> 488 Response

```json
null
```

<h3 id="listobjectpolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListObjectPoliciesResponse](#schemalistobjectpoliciesresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|DirectoryNotEnabledException|[DirectoryNotEnabledException](#schemadirectorynotenabledexception)|
|487|487|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|488|488|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListOutgoingTypedLinks

<a id="opIdListOutgoingTypedLinks"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/typedlink/outgoing#x-amz-data-partition' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "ObjectReference": {
      "Selector": {}
    },
    "FilterAttributeRanges": [
      {
        "AttributeName": {},
        "Range": {
          "StartMode": {},
          "StartValue": {
            "StringValue": {},
            "BinaryValue": {},
            "BooleanValue": {},
            "NumberValue": {},
            "DatetimeValue": {}
          },
          "EndMode": {},
          "EndValue": {
            "StringValue": {},
            "BinaryValue": {},
            "BooleanValue": {},
            "NumberValue": {},
            "DatetimeValue": {}
          }
        }
      }
    ],
    "FilterTypedLink": {
      "SchemaArn": {},
      "TypedLinkName": {}
    },
    "NextToken": "string",
    "MaxResults": 1,
    "ConsistencyLevel": "SERIALIZABLE"
  }'
```

`POST /amazonclouddirectory/2017-01-11/typedlink/outgoing#x-amz-data-partition`

Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.

> Body parameter

```json
{
  "ObjectReference": {
    "Selector": {}
  },
  "FilterAttributeRanges": [
    {
      "AttributeName": {},
      "Range": {
        "StartMode": {},
        "StartValue": {
          "StringValue": {},
          "BinaryValue": {},
          "BooleanValue": {},
          "NumberValue": {},
          "DatetimeValue": {}
        },
        "EndMode": {},
        "EndValue": {
          "StringValue": {},
          "BinaryValue": {},
          "BooleanValue": {},
          "NumberValue": {},
          "DatetimeValue": {}
        }
      }
    }
  ],
  "FilterTypedLink": {
    "SchemaArn": {},
    "TypedLinkName": {}
  },
  "NextToken": "string",
  "MaxResults": 1,
  "ConsistencyLevel": "SERIALIZABLE"
}
```

<h3 id="listoutgoingtypedlinks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The Amazon Resource Name (ARN) of the directory where you want to list the typed links.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ObjectReference|body|object|true|The reference that identifies an object.|
|» » Selector|body|object|false|none|
|» FilterAttributeRanges|body|[[TypedLinkAttributeRange](#schematypedlinkattributerange)]|false|Provides range filters for multiple attributes. When providing ranges to typed link selection, any inexact ranges must be specified at the end. Any attributes that do not have a range specified are presumed to match the entire range.|
|» FilterTypedLink|body|object|false|Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.|
|» » SchemaArn|body|object|false|none|
|» » TypedLinkName|body|object|false|none|
|» NextToken|body|string|false|The pagination token.|
|» MaxResults|body|integer|false|The maximum number of results to retrieve.|
|» ConsistencyLevel|body|string|false|The consistency level to execute the request at.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» ConsistencyLevel|SERIALIZABLE|
|» ConsistencyLevel|EVENTUAL|

> Example responses

> 200 Response

```json
{
  "TypedLinkSpecifiers": {},
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

> 488 Response

```json
null
```

> 489 Response

```json
null
```

<h3 id="listoutgoingtypedlinks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListOutgoingTypedLinksResponse](#schemalistoutgoingtypedlinksresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|DirectoryNotEnabledException|[DirectoryNotEnabledException](#schemadirectorynotenabledexception)|
|487|487|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|488|488|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|489|489|FacetValidationException|[FacetValidationException](#schemafacetvalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPolicyAttachments

<a id="opIdListPolicyAttachments"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/policy/attachment#x-amz-data-partition' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "PolicyReference": {
      "Selector": {}
    },
    "NextToken": "string",
    "MaxResults": 1
  }'
```

`POST /amazonclouddirectory/2017-01-11/policy/attachment#x-amz-data-partition`

Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached.

> Body parameter

```json
{
  "PolicyReference": {
    "Selector": {}
  },
  "NextToken": "string",
  "MaxResults": 1
}
```

<h3 id="listpolicyattachments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where objects reside. For more information, see <a>arns</a>.|
|x-amz-consistency-level|header|string|false|Represents the manner and timing in which the successful write or update of an object is reflected in a subsequent read operation of that same object.|
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
|» PolicyReference|body|object|true|The reference that identifies an object.|
|» » Selector|body|object|false|none|
|» NextToken|body|string|false|The pagination token.|
|» MaxResults|body|integer|false|The maximum number of items to be retrieved in a single call. This is an approximate number.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-consistency-level|SERIALIZABLE|
|x-amz-consistency-level|EVENTUAL|

> Example responses

> 200 Response

```json
{
  "ObjectIdentifiers": {},
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

> 488 Response

```json
null
```

> 489 Response

```json
null
```

<h3 id="listpolicyattachments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPolicyAttachmentsResponse](#schemalistpolicyattachmentsresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|DirectoryNotEnabledException|[DirectoryNotEnabledException](#schemadirectorynotenabledexception)|
|487|487|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|488|488|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|489|489|NotPolicyException|[NotPolicyException](#schemanotpolicyexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPublishedSchemaArns

<a id="opIdListPublishedSchemaArns"></a>

> Code samples

```bash
curl https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/schema/published \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "SchemaArn": "string",
    "NextToken": "string",
    "MaxResults": 1
  }'
```

`POST /amazonclouddirectory/2017-01-11/schema/published`

Lists the major version families of each published schema. If a major version ARN is provided as <code>SchemaArn</code>, the minor version revisions in that family are listed instead.

> Body parameter

```json
{
  "SchemaArn": "string",
  "NextToken": "string",
  "MaxResults": 1
}
```

<h3 id="listpublishedschemaarns-parameters">Parameters</h3>

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
|» SchemaArn|body|string|false|The response for <code>ListPublishedSchemaArns</code> when this parameter is used will list all minor version ARNs for a major version.|
|» NextToken|body|string|false|The pagination token.|
|» MaxResults|body|integer|false|The maximum number of results to retrieve.|

> Example responses

> 200 Response

```json
{
  "SchemaArns": {},
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

<h3 id="listpublishedschemaarns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPublishedSchemaArnsResponse](#schemalistpublishedschemaarnsresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|487|487|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/tags \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ResourceArn": "string",
    "NextToken": "string",
    "MaxResults": 50
  }'
```

`POST /amazonclouddirectory/2017-01-11/tags`

Returns tags for a resource. Tagging is currently supported only for directories with a limit of 50 tags per directory. All 50 tags are returned for a given directory with this API call.

> Body parameter

```json
{
  "ResourceArn": "string",
  "NextToken": "string",
  "MaxResults": 50
}
```

<h3 id="listtagsforresource-parameters">Parameters</h3>

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
|» ResourceArn|body|string|true|The Amazon Resource Name (ARN) of the resource. Tagging is only supported for directories.|
|» NextToken|body|string|false|The pagination token. This is for future use. Currently pagination is not supported for tagging.|
|» MaxResults|body|integer|false|The <code>MaxResults</code> parameter sets the maximum number of results returned in a single page. This is for future use and is not supported currently.|

> Example responses

> 200 Response

```json
{
  "Tags": {},
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|487|487|InvalidTaggingRequestException|[InvalidTaggingRequestException](#schemainvalidtaggingrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTypedLinkFacetAttributes

<a id="opIdListTypedLinkFacetAttributes"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/typedlink/facet/attributes#x-amz-data-partition' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "Name": "string",
    "NextToken": "string",
    "MaxResults": 1
  }'
```

`POST /amazonclouddirectory/2017-01-11/typedlink/facet/attributes#x-amz-data-partition`

Returns a paginated list of all attribute definitions for a particular <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.

> Body parameter

```json
{
  "Name": "string",
  "NextToken": "string",
  "MaxResults": 1
}
```

<h3 id="listtypedlinkfacetattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The Amazon Resource Name (ARN) that is associated with the schema. For more information, see <a>arns</a>.|
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
|» Name|body|string|true|The unique name of the typed link facet.|
|» NextToken|body|string|false|The pagination token.|
|» MaxResults|body|integer|false|The maximum number of results to retrieve.|

> Example responses

> 200 Response

```json
{
  "Attributes": {},
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

> 488 Response

```json
null
```

<h3 id="listtypedlinkfacetattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTypedLinkFacetAttributesResponse](#schemalisttypedlinkfacetattributesresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|487|487|FacetNotFoundException|[FacetNotFoundException](#schemafacetnotfoundexception)|
|488|488|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTypedLinkFacetNames

<a id="opIdListTypedLinkFacetNames"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/typedlink/facet/list#x-amz-data-partition' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "NextToken": "string",
    "MaxResults": 1
  }'
```

`POST /amazonclouddirectory/2017-01-11/typedlink/facet/list#x-amz-data-partition`

Returns a paginated list of <code>TypedLink</code> facet names for a particular schema. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.

> Body parameter

```json
{
  "NextToken": "string",
  "MaxResults": 1
}
```

<h3 id="listtypedlinkfacetnames-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The Amazon Resource Name (ARN) that is associated with the schema. For more information, see <a>arns</a>.|
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
|» NextToken|body|string|false|The pagination token.|
|» MaxResults|body|integer|false|The maximum number of results to retrieve.|

> Example responses

> 200 Response

```json
{
  "FacetNames": {},
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

<h3 id="listtypedlinkfacetnames-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTypedLinkFacetNamesResponse](#schemalisttypedlinkfacetnamesresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|487|487|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## LookupPolicy

<a id="opIdLookupPolicy"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/policy/lookup#x-amz-data-partition' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "ObjectReference": {
      "Selector": {}
    },
    "NextToken": "string",
    "MaxResults": 1
  }'
```

`POST /amazonclouddirectory/2017-01-11/policy/lookup#x-amz-data-partition`

Lists all policies from the root of the <a>Directory</a> to the object specified. If there are no policies present, an empty list is returned. If policies are present, and if some objects don't have the policies attached, it returns the <code>ObjectIdentifier</code> for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and <code>policyType</code>. Paths that don't lead to the root from the target object are ignored. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.

> Body parameter

```json
{
  "ObjectReference": {
    "Selector": {}
  },
  "NextToken": "string",
  "MaxResults": 1
}
```

<h3 id="lookuppolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>. For more information, see <a>arns</a>.|
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
|» ObjectReference|body|object|true|The reference that identifies an object.|
|» » Selector|body|object|false|none|
|» NextToken|body|string|false|The token to request the next page of results.|
|» MaxResults|body|integer|false|The maximum number of items to be retrieved in a single call. This is an approximate number.|

> Example responses

> 200 Response

```json
{
  "PolicyToPathList": {},
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

> 488 Response

```json
null
```

<h3 id="lookuppolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[LookupPolicyResponse](#schemalookuppolicyresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|DirectoryNotEnabledException|[DirectoryNotEnabledException](#schemadirectorynotenabledexception)|
|487|487|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|488|488|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PublishSchema

<a id="opIdPublishSchema"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/schema/publish#x-amz-data-partition' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "Version": "string",
    "MinorVersion": "string",
    "Name": "string"
  }'
```

`PUT /amazonclouddirectory/2017-01-11/schema/publish#x-amz-data-partition`

Publishes a development schema with a major version and a recommended minor version.

> Body parameter

```json
{
  "Version": "string",
  "MinorVersion": "string",
  "Name": "string"
}
```

<h3 id="publishschema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The Amazon Resource Name (ARN) that is associated with the development schema. For more information, see <a>arns</a>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Version|body|string|true|The major version under which the schema will be published. Schemas have both a major and minor version associated with them.|
|» MinorVersion|body|string|false|The minor version under which the schema will be published. This parameter is recommended. Schemas have both a major and minor version associated with them.|
|» Name|body|string|false|The new name under which the schema will be published. If this is not provided, the development schema is considered.|

> Example responses

> 200 Response

```json
{
  "PublishedSchemaArn": {}
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

<h3 id="publishschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PublishSchemaResponse](#schemapublishschemaresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|487|487|SchemaAlreadyPublishedException|[SchemaAlreadyPublishedException](#schemaschemaalreadypublishedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemoveFacetFromObject

<a id="opIdRemoveFacetFromObject"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/object/facets/delete#x-amz-data-partition' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "SchemaFacet": {
      "SchemaArn": {},
      "FacetName": {}
    },
    "ObjectReference": {
      "Selector": {}
    }
  }'
```

`PUT /amazonclouddirectory/2017-01-11/object/facets/delete#x-amz-data-partition`

Removes the specified facet from the specified object.

> Body parameter

```json
{
  "SchemaFacet": {
    "SchemaArn": {},
    "FacetName": {}
  },
  "ObjectReference": {
    "Selector": {}
  }
}
```

<h3 id="removefacetfromobject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The ARN of the directory in which the object resides.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» SchemaFacet|body|object|true|A facet.|
|» » SchemaArn|body|object|false|none|
|» » FacetName|body|object|false|none|
|» ObjectReference|body|object|true|The reference that identifies an object.|
|» » Selector|body|object|false|none|

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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="removefacetfromobject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RemoveFacetFromObjectResponse](#schemaremovefacetfromobjectresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|DirectoryNotEnabledException|[DirectoryNotEnabledException](#schemadirectorynotenabledexception)|
|487|487|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|488|488|FacetValidationException|[FacetValidationException](#schemafacetvalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/tags/add \
  -X PUT \
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

`PUT /amazonclouddirectory/2017-01-11/tags/add`

An API operation for adding tags to a resource.

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
|» ResourceArn|body|string|true|The Amazon Resource Name (ARN) of the resource. Tagging is only supported for directories.|
|» Tags|body|[[Tag](#schematag)]|true|A list of tag key-value pairs.|

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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|487|487|InvalidTaggingRequestException|[InvalidTaggingRequestException](#schemainvalidtaggingrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/tags/remove \
  -X PUT \
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

`PUT /amazonclouddirectory/2017-01-11/tags/remove`

An API operation for removing tags from a resource.

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
|» ResourceArn|body|string|true|The Amazon Resource Name (ARN) of the resource. Tagging is only supported for directories.|
|» TagKeys|body|[[TagKey](#schematagkey)]|true|Keys of the tag that need to be removed from the resource.|

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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|487|487|InvalidTaggingRequestException|[InvalidTaggingRequestException](#schemainvalidtaggingrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateLinkAttributes

<a id="opIdUpdateLinkAttributes"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/typedlink/attributes/update#x-amz-data-partition' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "TypedLinkSpecifier": {
      "TypedLinkFacet": {
        "SchemaArn": {},
        "TypedLinkName": {}
      },
      "SourceObjectReference": {
        "Selector": {}
      },
      "TargetObjectReference": {
        "Selector": {}
      },
      "IdentityAttributeValues": {}
    },
    "AttributeUpdates": [
      {
        "AttributeKey": {
          "SchemaArn": {},
          "FacetName": {},
          "Name": {}
        },
        "AttributeAction": {
          "AttributeActionType": {},
          "AttributeUpdateValue": {
            "StringValue": {},
            "BinaryValue": {},
            "BooleanValue": {},
            "NumberValue": {},
            "DatetimeValue": {}
          }
        }
      }
    ]
  }'
```

`POST /amazonclouddirectory/2017-01-11/typedlink/attributes/update#x-amz-data-partition`

Updates a given typed link’s attributes. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>.

> Body parameter

```json
{
  "TypedLinkSpecifier": {
    "TypedLinkFacet": {
      "SchemaArn": {},
      "TypedLinkName": {}
    },
    "SourceObjectReference": {
      "Selector": {}
    },
    "TargetObjectReference": {
      "Selector": {}
    },
    "IdentityAttributeValues": {}
  },
  "AttributeUpdates": [
    {
      "AttributeKey": {
        "SchemaArn": {},
        "FacetName": {},
        "Name": {}
      },
      "AttributeAction": {
        "AttributeActionType": {},
        "AttributeUpdateValue": {
          "StringValue": {},
          "BinaryValue": {},
          "BooleanValue": {},
          "NumberValue": {},
          "DatetimeValue": {}
        }
      }
    }
  ]
}
```

<h3 id="updatelinkattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The Amazon Resource Name (ARN) that is associated with the Directory where the updated typed link resides. For more information, see <a>arns</a> or <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» TypedLinkSpecifier|body|object|true|Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.|
|» » TypedLinkFacet|body|object|false|none|
|» » » SchemaArn|body|object|true|none|
|» » » TypedLinkName|body|object|true|none|
|» » SourceObjectReference|body|object|false|none|
|» » » Selector|body|object|false|none|
|» » TargetObjectReference|body|object|false|none|
|» » » Selector|body|object|false|none|
|» » IdentityAttributeValues|body|object|false|none|
|» AttributeUpdates|body|[[LinkAttributeUpdate](#schemalinkattributeupdate)]|true|The attributes update structure.|

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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="updatelinkattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateLinkAttributesResponse](#schemaupdatelinkattributesresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|DirectoryNotEnabledException|[DirectoryNotEnabledException](#schemadirectorynotenabledexception)|
|487|487|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|488|488|FacetValidationException|[FacetValidationException](#schemafacetvalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateObjectAttributes

<a id="opIdUpdateObjectAttributes"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/object/update#x-amz-data-partition' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "ObjectReference": {
      "Selector": {}
    },
    "AttributeUpdates": [
      {
        "ObjectAttributeKey": {
          "SchemaArn": {},
          "FacetName": {},
          "Name": {}
        },
        "ObjectAttributeAction": {
          "ObjectAttributeActionType": {},
          "ObjectAttributeUpdateValue": {
            "StringValue": {},
            "BinaryValue": {},
            "BooleanValue": {},
            "NumberValue": {},
            "DatetimeValue": {}
          }
        }
      }
    ]
  }'
```

`PUT /amazonclouddirectory/2017-01-11/object/update#x-amz-data-partition`

Updates a given object's attributes.

> Body parameter

```json
{
  "ObjectReference": {
    "Selector": {}
  },
  "AttributeUpdates": [
    {
      "ObjectAttributeKey": {
        "SchemaArn": {},
        "FacetName": {},
        "Name": {}
      },
      "ObjectAttributeAction": {
        "ObjectAttributeActionType": {},
        "ObjectAttributeUpdateValue": {
          "StringValue": {},
          "BinaryValue": {},
          "BooleanValue": {},
          "NumberValue": {},
          "DatetimeValue": {}
        }
      }
    }
  ]
}
```

<h3 id="updateobjectattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where the object resides. For more information, see <a>arns</a>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ObjectReference|body|object|true|The reference that identifies an object.|
|» » Selector|body|object|false|none|
|» AttributeUpdates|body|[[ObjectAttributeUpdate](#schemaobjectattributeupdate)]|true|The attributes update structure.|

> Example responses

> 200 Response

```json
{
  "ObjectIdentifier": {}
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

> 488 Response

```json
null
```

> 489 Response

```json
null
```

<h3 id="updateobjectattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateObjectAttributesResponse](#schemaupdateobjectattributesresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|DirectoryNotEnabledException|[DirectoryNotEnabledException](#schemadirectorynotenabledexception)|
|487|487|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|488|488|LinkNameAlreadyInUseException|[LinkNameAlreadyInUseException](#schemalinknamealreadyinuseexception)|
|489|489|FacetValidationException|[FacetValidationException](#schemafacetvalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateSchema

<a id="opIdUpdateSchema"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/schema/update#x-amz-data-partition' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "Name": "string"
  }'
```

`PUT /amazonclouddirectory/2017-01-11/schema/update#x-amz-data-partition`

Updates the schema name with a new name. Only development schema names can be updated.

> Body parameter

```json
{
  "Name": "string"
}
```

<h3 id="updateschema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The Amazon Resource Name (ARN) of the development schema. For more information, see <a>arns</a>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|true|The name of the schema.|

> Example responses

> 200 Response

```json
{
  "SchemaArn": {}
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

<h3 id="updateschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateSchemaResponse](#schemaupdateschemaresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateTypedLinkFacet

<a id="opIdUpdateTypedLinkFacet"></a>

> Code samples

```bash
curl 'https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/typedlink/facet#x-amz-data-partition' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-data-partition: string' \
  -d '{
    "Name": "string",
    "AttributeUpdates": [
      {
        "Attribute": {
          "Name": {},
          "Type": {},
          "DefaultValue": {
            "StringValue": {},
            "BinaryValue": {},
            "BooleanValue": {},
            "NumberValue": {},
            "DatetimeValue": {}
          },
          "IsImmutable": {},
          "Rules": {
            "property1": {
              "Type": {},
              "Parameters": {
                "property1": "string",
                "property2": "string"
              }
            },
            "property2": {
              "Type": {},
              "Parameters": {
                "property1": "string",
                "property2": "string"
              }
            }
          },
          "RequiredBehavior": {}
        },
        "Action": {}
      }
    ],
    "IdentityAttributeOrder": [
      "string"
    ]
  }'
```

`PUT /amazonclouddirectory/2017-01-11/typedlink/facet#x-amz-data-partition`

Updates a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.

> Body parameter

```json
{
  "Name": "string",
  "AttributeUpdates": [
    {
      "Attribute": {
        "Name": {},
        "Type": {},
        "DefaultValue": {
          "StringValue": {},
          "BinaryValue": {},
          "BooleanValue": {},
          "NumberValue": {},
          "DatetimeValue": {}
        },
        "IsImmutable": {},
        "Rules": {
          "property1": {
            "Type": {},
            "Parameters": {
              "property1": "string",
              "property2": "string"
            }
          },
          "property2": {
            "Type": {},
            "Parameters": {
              "property1": "string",
              "property2": "string"
            }
          }
        },
        "RequiredBehavior": {}
      },
      "Action": {}
    }
  ],
  "IdentityAttributeOrder": [
    "string"
  ]
}
```

<h3 id="updatetypedlinkfacet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-data-partition|header|string|true|The Amazon Resource Name (ARN) that is associated with the schema. For more information, see <a>arns</a>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|true|The unique name of the typed link facet.|
|» AttributeUpdates|body|[[TypedLinkFacetAttributeUpdate](#schematypedlinkfacetattributeupdate)]|true|Attributes update structure.|
|» IdentityAttributeOrder|body|[[AttributeName](#schemaattributename)]|true|The order of identity attributes for the facet, from most significant to least significant. The ability to filter typed links considers the order that the attributes are defined on the typed link facet. When providing ranges to a typed link selection, any inexact ranges must be specified at the end. Any attributes that do not have a range specified are presumed to match the entire range. Filters are interpreted in the order of the attributes on the typed link facet, not the order in which they are supplied to any API calls. For more information about identity attributes, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.|

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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

> 489 Response

```json
null
```

> 490 Response

```json
null
```

<h3 id="updatetypedlinkfacet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateTypedLinkFacetResponse](#schemaupdatetypedlinkfacetresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|FacetValidationException|[FacetValidationException](#schemafacetvalidationexception)|
|487|487|InvalidFacetUpdateException|[InvalidFacetUpdateException](#schemainvalidfacetupdateexception)|
|488|488|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|489|489|FacetNotFoundException|[FacetNotFoundException](#schemafacetnotfoundexception)|
|490|490|InvalidRuleException|[InvalidRuleException](#schemainvalidruleexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpgradeAppliedSchema

<a id="opIdUpgradeAppliedSchema"></a>

> Code samples

```bash
curl https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/schema/upgradeapplied \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "PublishedSchemaArn": "string",
    "DirectoryArn": "string",
    "DryRun": true
  }'
```

`PUT /amazonclouddirectory/2017-01-11/schema/upgradeapplied`

Upgrades a single directory in-place using the <code>PublishedSchemaArn</code> with schema updates found in <code>MinorVersion</code>. Backwards-compatible minor version upgrades are instantaneously available for readers on all objects in the directory. Note: This is a synchronous API call and upgrades only one schema on a given directory per call. To upgrade multiple directories from one schema, you would need to call this API on each directory.

> Body parameter

```json
{
  "PublishedSchemaArn": "string",
  "DirectoryArn": "string",
  "DryRun": true
}
```

<h3 id="upgradeappliedschema-parameters">Parameters</h3>

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
|» PublishedSchemaArn|body|string|true|The revision of the published schema to upgrade the directory to.|
|» DirectoryArn|body|string|true|The ARN for the directory to which the upgraded schema will be applied.|
|» DryRun|body|boolean|false|Used for testing whether the major version schemas are backward compatible or not. If schema compatibility fails, an exception would be thrown else the call would succeed but no changes will be saved. This parameter is optional.|

> Example responses

> 200 Response

```json
{
  "UpgradedSchemaArn": {},
  "DirectoryArn": {}
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

> 488 Response

```json
null
```

<h3 id="upgradeappliedschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpgradeAppliedSchemaResponse](#schemaupgradeappliedschemaresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|IncompatibleSchemaException|[IncompatibleSchemaException](#schemaincompatibleschemaexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|487|487|InvalidAttachmentException|[InvalidAttachmentException](#schemainvalidattachmentexception)|
|488|488|SchemaAlreadyExistsException|[SchemaAlreadyExistsException](#schemaschemaalreadyexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpgradePublishedSchema

<a id="opIdUpgradePublishedSchema"></a>

> Code samples

```bash
curl https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/schema/upgradepublished \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "DevelopmentSchemaArn": "string",
    "PublishedSchemaArn": "string",
    "MinorVersion": "string",
    "DryRun": true
  }'
```

`PUT /amazonclouddirectory/2017-01-11/schema/upgradepublished`

Upgrades a published schema under a new minor version revision using the current contents of <code>DevelopmentSchemaArn</code>.

> Body parameter

```json
{
  "DevelopmentSchemaArn": "string",
  "PublishedSchemaArn": "string",
  "MinorVersion": "string",
  "DryRun": true
}
```

<h3 id="upgradepublishedschema-parameters">Parameters</h3>

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
|» DevelopmentSchemaArn|body|string|true|The ARN of the development schema with the changes used for the upgrade.|
|» PublishedSchemaArn|body|string|true|The ARN of the published schema to be upgraded.|
|» MinorVersion|body|string|true|Identifies the minor version of the published schema that will be created. This parameter is NOT optional.|
|» DryRun|body|boolean|false|Used for testing whether the Development schema provided is backwards compatible, or not, with the publish schema provided by the user to be upgraded. If schema compatibility fails, an exception would be thrown else the call would succeed. This parameter is optional and defaults to false.|

> Example responses

> 200 Response

```json
{
  "UpgradedSchemaArn": {}
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

> 488 Response

```json
null
```

<h3 id="upgradepublishedschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpgradePublishedSchemaResponse](#schemaupgradepublishedschemaresponse)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidArnException|[InvalidArnException](#schemainvalidarnexception)|
|482|482|RetryableConflictException|[RetryableConflictException](#schemaretryableconflictexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|IncompatibleSchemaException|[IncompatibleSchemaException](#schemaincompatibleschemaexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|487|487|InvalidAttachmentException|[InvalidAttachmentException](#schemainvalidattachmentexception)|
|488|488|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AddFacetToObjectResponse">AddFacetToObjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddfacettoobjectresponse"></a>
<a id="schema_AddFacetToObjectResponse"></a>
<a id="tocSaddfacettoobjectresponse"></a>
<a id="tocsaddfacettoobjectresponse"></a>

```json
{}
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

<h2 id="tocS_FacetName">FacetName</h2>
<!-- backwards compatibility -->
<a id="schemafacetname"></a>
<a id="schema_FacetName"></a>
<a id="tocSfacetname"></a>
<a id="tocsfacetname"></a>

```json
"string"
```

<h2 id="tocS_AttributeKeyAndValue">AttributeKeyAndValue</h2>
<!-- backwards compatibility -->
<a id="schemaattributekeyandvalue"></a>
<a id="schema_AttributeKeyAndValue"></a>
<a id="tocSattributekeyandvalue"></a>
<a id="tocsattributekeyandvalue"></a>

```json
{
  "Key": {
    "SchemaArn": {},
    "FacetName": {},
    "Name": {}
  },
  "Value": {
    "StringValue": {},
    "BinaryValue": {},
    "BooleanValue": {},
    "NumberValue": {},
    "DatetimeValue": {}
  }
}
```

The combination of an attribute key and an attribute value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_SelectorObjectReference">SelectorObjectReference</h2>
<!-- backwards compatibility -->
<a id="schemaselectorobjectreference"></a>
<a id="schema_SelectorObjectReference"></a>
<a id="tocSselectorobjectreference"></a>
<a id="tocsselectorobjectreference"></a>

```json
"string"
```

<h2 id="tocS_InternalServiceException">InternalServiceException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserviceexception"></a>
<a id="schema_InternalServiceException"></a>
<a id="tocSinternalserviceexception"></a>
<a id="tocsinternalserviceexception"></a>

```json
null
```

<h2 id="tocS_InvalidArnException">InvalidArnException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidarnexception"></a>
<a id="schema_InvalidArnException"></a>
<a id="tocSinvalidarnexception"></a>
<a id="tocsinvalidarnexception"></a>

```json
null
```

<h2 id="tocS_RetryableConflictException">RetryableConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaretryableconflictexception"></a>
<a id="schema_RetryableConflictException"></a>
<a id="tocSretryableconflictexception"></a>
<a id="tocsretryableconflictexception"></a>

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

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

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

<h2 id="tocS_DirectoryNotEnabledException">DirectoryNotEnabledException</h2>
<!-- backwards compatibility -->
<a id="schemadirectorynotenabledexception"></a>
<a id="schema_DirectoryNotEnabledException"></a>
<a id="tocSdirectorynotenabledexception"></a>
<a id="tocsdirectorynotenabledexception"></a>

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

<h2 id="tocS_FacetValidationException">FacetValidationException</h2>
<!-- backwards compatibility -->
<a id="schemafacetvalidationexception"></a>
<a id="schema_FacetValidationException"></a>
<a id="tocSfacetvalidationexception"></a>
<a id="tocsfacetvalidationexception"></a>

```json
null
```

<h2 id="tocS_ApplySchemaResponse">ApplySchemaResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapplyschemaresponse"></a>
<a id="schema_ApplySchemaResponse"></a>
<a id="tocSapplyschemaresponse"></a>
<a id="tocsapplyschemaresponse"></a>

```json
{
  "AppliedSchemaArn": {},
  "DirectoryArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppliedSchemaArn|object|false|none|none|
|DirectoryArn|object|false|none|none|

<h2 id="tocS_SchemaAlreadyExistsException">SchemaAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaschemaalreadyexistsexception"></a>
<a id="schema_SchemaAlreadyExistsException"></a>
<a id="tocSschemaalreadyexistsexception"></a>
<a id="tocsschemaalreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_InvalidAttachmentException">InvalidAttachmentException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidattachmentexception"></a>
<a id="schema_InvalidAttachmentException"></a>
<a id="tocSinvalidattachmentexception"></a>
<a id="tocsinvalidattachmentexception"></a>

```json
null
```

<h2 id="tocS_AttachObjectResponse">AttachObjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemaattachobjectresponse"></a>
<a id="schema_AttachObjectResponse"></a>
<a id="tocSattachobjectresponse"></a>
<a id="tocsattachobjectresponse"></a>

```json
{
  "AttachedObjectIdentifier": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttachedObjectIdentifier|object|false|none|none|

<h2 id="tocS_LinkNameAlreadyInUseException">LinkNameAlreadyInUseException</h2>
<!-- backwards compatibility -->
<a id="schemalinknamealreadyinuseexception"></a>
<a id="schema_LinkNameAlreadyInUseException"></a>
<a id="tocSlinknamealreadyinuseexception"></a>
<a id="tocslinknamealreadyinuseexception"></a>

```json
null
```

<h2 id="tocS_AttachPolicyResponse">AttachPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaattachpolicyresponse"></a>
<a id="schema_AttachPolicyResponse"></a>
<a id="tocSattachpolicyresponse"></a>
<a id="tocsattachpolicyresponse"></a>

```json
{}
```

<h2 id="tocS_NotPolicyException">NotPolicyException</h2>
<!-- backwards compatibility -->
<a id="schemanotpolicyexception"></a>
<a id="schema_NotPolicyException"></a>
<a id="tocSnotpolicyexception"></a>
<a id="tocsnotpolicyexception"></a>

```json
null
```

<h2 id="tocS_AttachToIndexResponse">AttachToIndexResponse</h2>
<!-- backwards compatibility -->
<a id="schemaattachtoindexresponse"></a>
<a id="schema_AttachToIndexResponse"></a>
<a id="tocSattachtoindexresponse"></a>
<a id="tocsattachtoindexresponse"></a>

```json
{
  "AttachedObjectIdentifier": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttachedObjectIdentifier|object|false|none|none|

<h2 id="tocS_IndexedAttributeMissingException">IndexedAttributeMissingException</h2>
<!-- backwards compatibility -->
<a id="schemaindexedattributemissingexception"></a>
<a id="schema_IndexedAttributeMissingException"></a>
<a id="tocSindexedattributemissingexception"></a>
<a id="tocsindexedattributemissingexception"></a>

```json
null
```

<h2 id="tocS_NotIndexException">NotIndexException</h2>
<!-- backwards compatibility -->
<a id="schemanotindexexception"></a>
<a id="schema_NotIndexException"></a>
<a id="tocSnotindexexception"></a>
<a id="tocsnotindexexception"></a>

```json
null
```

<h2 id="tocS_AttachTypedLinkResponse">AttachTypedLinkResponse</h2>
<!-- backwards compatibility -->
<a id="schemaattachtypedlinkresponse"></a>
<a id="schema_AttachTypedLinkResponse"></a>
<a id="tocSattachtypedlinkresponse"></a>
<a id="tocsattachtypedlinkresponse"></a>

```json
{
  "TypedLinkSpecifier": {
    "TypedLinkFacet": {
      "SchemaArn": {},
      "TypedLinkName": {}
    },
    "SourceObjectReference": {
      "Selector": {}
    },
    "TargetObjectReference": {
      "Selector": {}
    },
    "IdentityAttributeValues": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TypedLinkSpecifier|object|false|none|none|

<h2 id="tocS_TypedLinkName">TypedLinkName</h2>
<!-- backwards compatibility -->
<a id="schematypedlinkname"></a>
<a id="schema_TypedLinkName"></a>
<a id="tocStypedlinkname"></a>
<a id="tocstypedlinkname"></a>

```json
"string"
```

<h2 id="tocS_AttributeNameAndValue">AttributeNameAndValue</h2>
<!-- backwards compatibility -->
<a id="schemaattributenameandvalue"></a>
<a id="schema_AttributeNameAndValue"></a>
<a id="tocSattributenameandvalue"></a>
<a id="tocsattributenameandvalue"></a>

```json
{
  "AttributeName": {},
  "Value": {
    "StringValue": {},
    "BinaryValue": {},
    "BooleanValue": {},
    "NumberValue": {},
    "DatetimeValue": {}
  }
}
```

Identifies the attribute name and value for a typed link.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttributeName|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_BatchReadResponse">BatchReadResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchreadresponse"></a>
<a id="schema_BatchReadResponse"></a>
<a id="tocSbatchreadresponse"></a>
<a id="tocsbatchreadresponse"></a>

```json
{
  "Responses": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Responses|object|false|none|none|

<h2 id="tocS_BatchReadOperation">BatchReadOperation</h2>
<!-- backwards compatibility -->
<a id="schemabatchreadoperation"></a>
<a id="schema_BatchReadOperation"></a>
<a id="tocSbatchreadoperation"></a>
<a id="tocsbatchreadoperation"></a>

```json
{
  "ListObjectAttributes": {
    "ObjectReference": {
      "Selector": {}
    },
    "NextToken": {},
    "MaxResults": {},
    "FacetFilter": {
      "SchemaArn": {},
      "FacetName": {}
    }
  },
  "ListObjectChildren": {
    "ObjectReference": {
      "Selector": {}
    },
    "NextToken": {},
    "MaxResults": {}
  },
  "ListAttachedIndices": {
    "TargetReference": {
      "Selector": {}
    },
    "NextToken": {},
    "MaxResults": {}
  },
  "ListObjectParentPaths": {
    "ObjectReference": {
      "Selector": {}
    },
    "NextToken": {},
    "MaxResults": {}
  },
  "GetObjectInformation": {
    "ObjectReference": {
      "Selector": {}
    }
  },
  "GetObjectAttributes": {
    "ObjectReference": {
      "Selector": {}
    },
    "SchemaFacet": {
      "SchemaArn": {},
      "FacetName": {}
    },
    "AttributeNames": {}
  },
  "ListObjectParents": {
    "ObjectReference": {
      "Selector": {}
    },
    "NextToken": {},
    "MaxResults": {}
  },
  "ListObjectPolicies": {
    "ObjectReference": {
      "Selector": {}
    },
    "NextToken": {},
    "MaxResults": {}
  },
  "ListPolicyAttachments": {
    "PolicyReference": {
      "Selector": {}
    },
    "NextToken": {},
    "MaxResults": {}
  },
  "LookupPolicy": {
    "ObjectReference": {
      "Selector": {}
    },
    "NextToken": {},
    "MaxResults": {}
  },
  "ListIndex": {
    "RangesOnIndexedValues": {},
    "IndexReference": {
      "Selector": {}
    },
    "MaxResults": {},
    "NextToken": {}
  },
  "ListOutgoingTypedLinks": {
    "ObjectReference": {
      "Selector": {}
    },
    "FilterAttributeRanges": {},
    "FilterTypedLink": {
      "SchemaArn": {},
      "TypedLinkName": {}
    },
    "NextToken": {},
    "MaxResults": {}
  },
  "ListIncomingTypedLinks": {
    "ObjectReference": {
      "Selector": {}
    },
    "FilterAttributeRanges": {},
    "FilterTypedLink": {
      "SchemaArn": {},
      "TypedLinkName": {}
    },
    "NextToken": {},
    "MaxResults": {}
  },
  "GetLinkAttributes": {
    "TypedLinkSpecifier": {
      "TypedLinkFacet": {
        "SchemaArn": {},
        "TypedLinkName": {}
      },
      "SourceObjectReference": {
        "Selector": {}
      },
      "TargetObjectReference": {
        "Selector": {}
      },
      "IdentityAttributeValues": {}
    },
    "AttributeNames": {}
  }
}
```

Represents the output of a <code>BatchRead</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ListObjectAttributes|object|false|none|none|
|ListObjectChildren|object|false|none|none|
|ListAttachedIndices|object|false|none|none|
|ListObjectParentPaths|object|false|none|none|
|GetObjectInformation|object|false|none|none|
|GetObjectAttributes|object|false|none|none|
|ListObjectParents|object|false|none|none|
|ListObjectPolicies|object|false|none|none|
|ListPolicyAttachments|object|false|none|none|
|LookupPolicy|object|false|none|none|
|ListIndex|object|false|none|none|
|ListOutgoingTypedLinks|object|false|none|none|
|ListIncomingTypedLinks|object|false|none|none|
|GetLinkAttributes|object|false|none|none|

<h2 id="tocS_BatchWriteResponse">BatchWriteResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchwriteresponse"></a>
<a id="schema_BatchWriteResponse"></a>
<a id="tocSbatchwriteresponse"></a>
<a id="tocsbatchwriteresponse"></a>

```json
{
  "Responses": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Responses|object|false|none|none|

<h2 id="tocS_BatchWriteOperation">BatchWriteOperation</h2>
<!-- backwards compatibility -->
<a id="schemabatchwriteoperation"></a>
<a id="schema_BatchWriteOperation"></a>
<a id="tocSbatchwriteoperation"></a>
<a id="tocsbatchwriteoperation"></a>

```json
{
  "CreateObject": {
    "SchemaFacet": {},
    "ObjectAttributeList": {},
    "ParentReference": {
      "Selector": {}
    },
    "LinkName": {},
    "BatchReferenceName": {}
  },
  "AttachObject": {
    "ParentReference": {
      "Selector": {}
    },
    "ChildReference": {
      "Selector": {}
    },
    "LinkName": {}
  },
  "DetachObject": {
    "ParentReference": {
      "Selector": {}
    },
    "LinkName": {},
    "BatchReferenceName": {}
  },
  "UpdateObjectAttributes": {
    "ObjectReference": {
      "Selector": {}
    },
    "AttributeUpdates": {}
  },
  "DeleteObject": {
    "ObjectReference": {
      "Selector": {}
    }
  },
  "AddFacetToObject": {
    "SchemaFacet": {
      "SchemaArn": {},
      "FacetName": {}
    },
    "ObjectAttributeList": {},
    "ObjectReference": {
      "Selector": {}
    }
  },
  "RemoveFacetFromObject": {
    "SchemaFacet": {
      "SchemaArn": {},
      "FacetName": {}
    },
    "ObjectReference": {
      "Selector": {}
    }
  },
  "AttachPolicy": {
    "PolicyReference": {
      "Selector": {}
    },
    "ObjectReference": {
      "Selector": {}
    }
  },
  "DetachPolicy": {
    "PolicyReference": {
      "Selector": {}
    },
    "ObjectReference": {
      "Selector": {}
    }
  },
  "CreateIndex": {
    "OrderedIndexedAttributeList": {},
    "IsUnique": {},
    "ParentReference": {
      "Selector": {}
    },
    "LinkName": {},
    "BatchReferenceName": {}
  },
  "AttachToIndex": {
    "IndexReference": {
      "Selector": {}
    },
    "TargetReference": {
      "Selector": {}
    }
  },
  "DetachFromIndex": {
    "IndexReference": {
      "Selector": {}
    },
    "TargetReference": {
      "Selector": {}
    }
  },
  "AttachTypedLink": {
    "SourceObjectReference": {
      "Selector": {}
    },
    "TargetObjectReference": {
      "Selector": {}
    },
    "TypedLinkFacet": {
      "SchemaArn": {},
      "TypedLinkName": {}
    },
    "Attributes": {}
  },
  "DetachTypedLink": {
    "TypedLinkSpecifier": {
      "TypedLinkFacet": {
        "SchemaArn": {},
        "TypedLinkName": {}
      },
      "SourceObjectReference": {
        "Selector": {}
      },
      "TargetObjectReference": {
        "Selector": {}
      },
      "IdentityAttributeValues": {}
    }
  },
  "UpdateLinkAttributes": {
    "TypedLinkSpecifier": {
      "TypedLinkFacet": {
        "SchemaArn": {},
        "TypedLinkName": {}
      },
      "SourceObjectReference": {
        "Selector": {}
      },
      "TargetObjectReference": {
        "Selector": {}
      },
      "IdentityAttributeValues": {}
    },
    "AttributeUpdates": {}
  }
}
```

Represents the output of a <code>BatchWrite</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreateObject|object|false|none|none|
|AttachObject|object|false|none|none|
|DetachObject|object|false|none|none|
|UpdateObjectAttributes|object|false|none|none|
|DeleteObject|object|false|none|none|
|AddFacetToObject|object|false|none|none|
|RemoveFacetFromObject|object|false|none|none|
|AttachPolicy|object|false|none|none|
|DetachPolicy|object|false|none|none|
|CreateIndex|object|false|none|none|
|AttachToIndex|object|false|none|none|
|DetachFromIndex|object|false|none|none|
|AttachTypedLink|object|false|none|none|
|DetachTypedLink|object|false|none|none|
|UpdateLinkAttributes|object|false|none|none|

<h2 id="tocS_BatchWriteException">BatchWriteException</h2>
<!-- backwards compatibility -->
<a id="schemabatchwriteexception"></a>
<a id="schema_BatchWriteException"></a>
<a id="tocSbatchwriteexception"></a>
<a id="tocsbatchwriteexception"></a>

```json
null
```

<h2 id="tocS_CreateDirectoryResponse">CreateDirectoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedirectoryresponse"></a>
<a id="schema_CreateDirectoryResponse"></a>
<a id="tocScreatedirectoryresponse"></a>
<a id="tocscreatedirectoryresponse"></a>

```json
{
  "DirectoryArn": {},
  "Name": {},
  "ObjectIdentifier": {},
  "AppliedSchemaArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryArn|object|true|none|none|
|Name|object|true|none|none|
|ObjectIdentifier|object|true|none|none|
|AppliedSchemaArn|object|true|none|none|

<h2 id="tocS_DirectoryAlreadyExistsException">DirectoryAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryalreadyexistsexception"></a>
<a id="schema_DirectoryAlreadyExistsException"></a>
<a id="tocSdirectoryalreadyexistsexception"></a>
<a id="tocsdirectoryalreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_CreateFacetResponse">CreateFacetResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatefacetresponse"></a>
<a id="schema_CreateFacetResponse"></a>
<a id="tocScreatefacetresponse"></a>
<a id="tocscreatefacetresponse"></a>

```json
{}
```

<h2 id="tocS_FacetAttribute">FacetAttribute</h2>
<!-- backwards compatibility -->
<a id="schemafacetattribute"></a>
<a id="schema_FacetAttribute"></a>
<a id="tocSfacetattribute"></a>
<a id="tocsfacetattribute"></a>

```json
{
  "Name": {},
  "AttributeDefinition": {
    "Type": {},
    "DefaultValue": {
      "StringValue": {},
      "BinaryValue": {},
      "BooleanValue": {},
      "NumberValue": {},
      "DatetimeValue": {}
    },
    "IsImmutable": {},
    "Rules": {
      "property1": {
        "Type": {},
        "Parameters": {
          "property1": "string",
          "property2": "string"
        }
      },
      "property2": {
        "Type": {},
        "Parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    }
  },
  "AttributeReference": {
    "TargetFacetName": {},
    "TargetAttributeName": {}
  },
  "RequiredBehavior": {}
}
```

An attribute that is associated with the <a>Facet</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|AttributeDefinition|object|false|none|none|
|AttributeReference|object|false|none|none|
|RequiredBehavior|object|false|none|none|

<h2 id="tocS_FacetAlreadyExistsException">FacetAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemafacetalreadyexistsexception"></a>
<a id="schema_FacetAlreadyExistsException"></a>
<a id="tocSfacetalreadyexistsexception"></a>
<a id="tocsfacetalreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_InvalidRuleException">InvalidRuleException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidruleexception"></a>
<a id="schema_InvalidRuleException"></a>
<a id="tocSinvalidruleexception"></a>
<a id="tocsinvalidruleexception"></a>

```json
null
```

<h2 id="tocS_CreateIndexResponse">CreateIndexResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateindexresponse"></a>
<a id="schema_CreateIndexResponse"></a>
<a id="tocScreateindexresponse"></a>
<a id="tocscreateindexresponse"></a>

```json
{
  "ObjectIdentifier": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectIdentifier|object|false|none|none|

<h2 id="tocS_AttributeKey">AttributeKey</h2>
<!-- backwards compatibility -->
<a id="schemaattributekey"></a>
<a id="schema_AttributeKey"></a>
<a id="tocSattributekey"></a>
<a id="tocsattributekey"></a>

```json
{
  "SchemaArn": {},
  "FacetName": {},
  "Name": {}
}
```

A unique identifier for an attribute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemaArn|object|true|none|none|
|FacetName|object|true|none|none|
|Name|object|true|none|none|

<h2 id="tocS_UnsupportedIndexTypeException">UnsupportedIndexTypeException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedindextypeexception"></a>
<a id="schema_UnsupportedIndexTypeException"></a>
<a id="tocSunsupportedindextypeexception"></a>
<a id="tocsunsupportedindextypeexception"></a>

```json
null
```

<h2 id="tocS_CreateObjectResponse">CreateObjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateobjectresponse"></a>
<a id="schema_CreateObjectResponse"></a>
<a id="tocScreateobjectresponse"></a>
<a id="tocscreateobjectresponse"></a>

```json
{
  "ObjectIdentifier": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectIdentifier|object|false|none|none|

<h2 id="tocS_SchemaFacet">SchemaFacet</h2>
<!-- backwards compatibility -->
<a id="schemaschemafacet"></a>
<a id="schema_SchemaFacet"></a>
<a id="tocSschemafacet"></a>
<a id="tocsschemafacet"></a>

```json
{
  "SchemaArn": {},
  "FacetName": {}
}
```

A facet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemaArn|object|false|none|none|
|FacetName|object|false|none|none|

<h2 id="tocS_CreateSchemaResponse">CreateSchemaResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateschemaresponse"></a>
<a id="schema_CreateSchemaResponse"></a>
<a id="tocScreateschemaresponse"></a>
<a id="tocscreateschemaresponse"></a>

```json
{
  "SchemaArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemaArn|object|false|none|none|

<h2 id="tocS_CreateTypedLinkFacetResponse">CreateTypedLinkFacetResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatetypedlinkfacetresponse"></a>
<a id="schema_CreateTypedLinkFacetResponse"></a>
<a id="tocScreatetypedlinkfacetresponse"></a>
<a id="tocscreatetypedlinkfacetresponse"></a>

```json
{}
```

<h2 id="tocS_TypedLinkAttributeDefinitionList">TypedLinkAttributeDefinitionList</h2>
<!-- backwards compatibility -->
<a id="schematypedlinkattributedefinitionlist"></a>
<a id="schema_TypedLinkAttributeDefinitionList"></a>
<a id="tocStypedlinkattributedefinitionlist"></a>
<a id="tocstypedlinkattributedefinitionlist"></a>

```json
[
  {
    "Name": {},
    "Type": {},
    "DefaultValue": {
      "StringValue": {},
      "BinaryValue": {},
      "BooleanValue": {},
      "NumberValue": {},
      "DatetimeValue": {}
    },
    "IsImmutable": {},
    "Rules": {
      "property1": {
        "Type": {},
        "Parameters": {
          "property1": "string",
          "property2": "string"
        }
      },
      "property2": {
        "Type": {},
        "Parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "RequiredBehavior": {}
  }
]
```

<h2 id="tocS_AttributeNameList">AttributeNameList</h2>
<!-- backwards compatibility -->
<a id="schemaattributenamelist"></a>
<a id="schema_AttributeNameList"></a>
<a id="tocSattributenamelist"></a>
<a id="tocsattributenamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DeleteDirectoryResponse">DeleteDirectoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedirectoryresponse"></a>
<a id="schema_DeleteDirectoryResponse"></a>
<a id="tocSdeletedirectoryresponse"></a>
<a id="tocsdeletedirectoryresponse"></a>

```json
{
  "DirectoryArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryArn|object|true|none|none|

<h2 id="tocS_DirectoryNotDisabledException">DirectoryNotDisabledException</h2>
<!-- backwards compatibility -->
<a id="schemadirectorynotdisabledexception"></a>
<a id="schema_DirectoryNotDisabledException"></a>
<a id="tocSdirectorynotdisabledexception"></a>
<a id="tocsdirectorynotdisabledexception"></a>

```json
null
```

<h2 id="tocS_DirectoryDeletedException">DirectoryDeletedException</h2>
<!-- backwards compatibility -->
<a id="schemadirectorydeletedexception"></a>
<a id="schema_DirectoryDeletedException"></a>
<a id="tocSdirectorydeletedexception"></a>
<a id="tocsdirectorydeletedexception"></a>

```json
null
```

<h2 id="tocS_DeleteFacetResponse">DeleteFacetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletefacetresponse"></a>
<a id="schema_DeleteFacetResponse"></a>
<a id="tocSdeletefacetresponse"></a>
<a id="tocsdeletefacetresponse"></a>

```json
{}
```

<h2 id="tocS_FacetNotFoundException">FacetNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemafacetnotfoundexception"></a>
<a id="schema_FacetNotFoundException"></a>
<a id="tocSfacetnotfoundexception"></a>
<a id="tocsfacetnotfoundexception"></a>

```json
null
```

<h2 id="tocS_FacetInUseException">FacetInUseException</h2>
<!-- backwards compatibility -->
<a id="schemafacetinuseexception"></a>
<a id="schema_FacetInUseException"></a>
<a id="tocSfacetinuseexception"></a>
<a id="tocsfacetinuseexception"></a>

```json
null
```

<h2 id="tocS_DeleteObjectResponse">DeleteObjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteobjectresponse"></a>
<a id="schema_DeleteObjectResponse"></a>
<a id="tocSdeleteobjectresponse"></a>
<a id="tocsdeleteobjectresponse"></a>

```json
{}
```

<h2 id="tocS_ObjectNotDetachedException">ObjectNotDetachedException</h2>
<!-- backwards compatibility -->
<a id="schemaobjectnotdetachedexception"></a>
<a id="schema_ObjectNotDetachedException"></a>
<a id="tocSobjectnotdetachedexception"></a>
<a id="tocsobjectnotdetachedexception"></a>

```json
null
```

<h2 id="tocS_DeleteSchemaResponse">DeleteSchemaResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteschemaresponse"></a>
<a id="schema_DeleteSchemaResponse"></a>
<a id="tocSdeleteschemaresponse"></a>
<a id="tocsdeleteschemaresponse"></a>

```json
{
  "SchemaArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemaArn|object|false|none|none|

<h2 id="tocS_StillContainsLinksException">StillContainsLinksException</h2>
<!-- backwards compatibility -->
<a id="schemastillcontainslinksexception"></a>
<a id="schema_StillContainsLinksException"></a>
<a id="tocSstillcontainslinksexception"></a>
<a id="tocsstillcontainslinksexception"></a>

```json
null
```

<h2 id="tocS_DeleteTypedLinkFacetResponse">DeleteTypedLinkFacetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletetypedlinkfacetresponse"></a>
<a id="schema_DeleteTypedLinkFacetResponse"></a>
<a id="tocSdeletetypedlinkfacetresponse"></a>
<a id="tocsdeletetypedlinkfacetresponse"></a>

```json
{}
```

<h2 id="tocS_DetachFromIndexResponse">DetachFromIndexResponse</h2>
<!-- backwards compatibility -->
<a id="schemadetachfromindexresponse"></a>
<a id="schema_DetachFromIndexResponse"></a>
<a id="tocSdetachfromindexresponse"></a>
<a id="tocsdetachfromindexresponse"></a>

```json
{
  "DetachedObjectIdentifier": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DetachedObjectIdentifier|object|false|none|none|

<h2 id="tocS_ObjectAlreadyDetachedException">ObjectAlreadyDetachedException</h2>
<!-- backwards compatibility -->
<a id="schemaobjectalreadydetachedexception"></a>
<a id="schema_ObjectAlreadyDetachedException"></a>
<a id="tocSobjectalreadydetachedexception"></a>
<a id="tocsobjectalreadydetachedexception"></a>

```json
null
```

<h2 id="tocS_DetachObjectResponse">DetachObjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemadetachobjectresponse"></a>
<a id="schema_DetachObjectResponse"></a>
<a id="tocSdetachobjectresponse"></a>
<a id="tocsdetachobjectresponse"></a>

```json
{
  "DetachedObjectIdentifier": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DetachedObjectIdentifier|object|false|none|none|

<h2 id="tocS_NotNodeException">NotNodeException</h2>
<!-- backwards compatibility -->
<a id="schemanotnodeexception"></a>
<a id="schema_NotNodeException"></a>
<a id="tocSnotnodeexception"></a>
<a id="tocsnotnodeexception"></a>

```json
null
```

<h2 id="tocS_DetachPolicyResponse">DetachPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadetachpolicyresponse"></a>
<a id="schema_DetachPolicyResponse"></a>
<a id="tocSdetachpolicyresponse"></a>
<a id="tocsdetachpolicyresponse"></a>

```json
{}
```

<h2 id="tocS_TypedLinkSchemaAndFacetName">TypedLinkSchemaAndFacetName</h2>
<!-- backwards compatibility -->
<a id="schematypedlinkschemaandfacetname"></a>
<a id="schema_TypedLinkSchemaAndFacetName"></a>
<a id="tocStypedlinkschemaandfacetname"></a>
<a id="tocstypedlinkschemaandfacetname"></a>

```json
{
  "SchemaArn": {},
  "TypedLinkName": {}
}
```

Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemaArn|object|true|none|none|
|TypedLinkName|object|true|none|none|

<h2 id="tocS_ObjectReference">ObjectReference</h2>
<!-- backwards compatibility -->
<a id="schemaobjectreference"></a>
<a id="schema_ObjectReference"></a>
<a id="tocSobjectreference"></a>
<a id="tocsobjectreference"></a>

```json
{
  "Selector": {}
}
```

The reference that identifies an object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Selector|object|false|none|none|

<h2 id="tocS_AttributeNameAndValueList">AttributeNameAndValueList</h2>
<!-- backwards compatibility -->
<a id="schemaattributenameandvaluelist"></a>
<a id="schema_AttributeNameAndValueList"></a>
<a id="tocSattributenameandvaluelist"></a>
<a id="tocsattributenameandvaluelist"></a>

```json
[
  {
    "AttributeName": {},
    "Value": {
      "StringValue": {},
      "BinaryValue": {},
      "BooleanValue": {},
      "NumberValue": {},
      "DatetimeValue": {}
    }
  }
]
```

<h2 id="tocS_DisableDirectoryResponse">DisableDirectoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisabledirectoryresponse"></a>
<a id="schema_DisableDirectoryResponse"></a>
<a id="tocSdisabledirectoryresponse"></a>
<a id="tocsdisabledirectoryresponse"></a>

```json
{
  "DirectoryArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryArn|object|true|none|none|

<h2 id="tocS_EnableDirectoryResponse">EnableDirectoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemaenabledirectoryresponse"></a>
<a id="schema_EnableDirectoryResponse"></a>
<a id="tocSenabledirectoryresponse"></a>
<a id="tocsenabledirectoryresponse"></a>

```json
{
  "DirectoryArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryArn|object|true|none|none|

<h2 id="tocS_GetAppliedSchemaVersionResponse">GetAppliedSchemaVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetappliedschemaversionresponse"></a>
<a id="schema_GetAppliedSchemaVersionResponse"></a>
<a id="tocSgetappliedschemaversionresponse"></a>
<a id="tocsgetappliedschemaversionresponse"></a>

```json
{
  "AppliedSchemaArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AppliedSchemaArn|object|false|none|none|

<h2 id="tocS_GetDirectoryResponse">GetDirectoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdirectoryresponse"></a>
<a id="schema_GetDirectoryResponse"></a>
<a id="tocSgetdirectoryresponse"></a>
<a id="tocsgetdirectoryresponse"></a>

```json
{
  "Directory": {
    "Name": {},
    "DirectoryArn": {},
    "State": {},
    "CreationDateTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Directory|object|true|none|none|

<h2 id="tocS_GetFacetResponse">GetFacetResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetfacetresponse"></a>
<a id="schema_GetFacetResponse"></a>
<a id="tocSgetfacetresponse"></a>
<a id="tocsgetfacetresponse"></a>

```json
{
  "Facet": {
    "Name": {},
    "ObjectType": {},
    "FacetStyle": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Facet|object|false|none|none|

<h2 id="tocS_GetLinkAttributesResponse">GetLinkAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetlinkattributesresponse"></a>
<a id="schema_GetLinkAttributesResponse"></a>
<a id="tocSgetlinkattributesresponse"></a>
<a id="tocsgetlinkattributesresponse"></a>

```json
{
  "Attributes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attributes|object|false|none|none|

<h2 id="tocS_AttributeName">AttributeName</h2>
<!-- backwards compatibility -->
<a id="schemaattributename"></a>
<a id="schema_AttributeName"></a>
<a id="tocSattributename"></a>
<a id="tocsattributename"></a>

```json
"string"
```

<h2 id="tocS_GetObjectAttributesResponse">GetObjectAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetobjectattributesresponse"></a>
<a id="schema_GetObjectAttributesResponse"></a>
<a id="tocSgetobjectattributesresponse"></a>
<a id="tocsgetobjectattributesresponse"></a>

```json
{
  "Attributes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attributes|object|false|none|none|

<h2 id="tocS_GetObjectInformationResponse">GetObjectInformationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetobjectinformationresponse"></a>
<a id="schema_GetObjectInformationResponse"></a>
<a id="tocSgetobjectinformationresponse"></a>
<a id="tocsgetobjectinformationresponse"></a>

```json
{
  "SchemaFacets": {},
  "ObjectIdentifier": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemaFacets|object|false|none|none|
|ObjectIdentifier|object|false|none|none|

<h2 id="tocS_GetSchemaAsJsonResponse">GetSchemaAsJsonResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetschemaasjsonresponse"></a>
<a id="schema_GetSchemaAsJsonResponse"></a>
<a id="tocSgetschemaasjsonresponse"></a>
<a id="tocsgetschemaasjsonresponse"></a>

```json
{
  "Name": {},
  "Document": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Document|object|false|none|none|

<h2 id="tocS_GetTypedLinkFacetInformationResponse">GetTypedLinkFacetInformationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettypedlinkfacetinformationresponse"></a>
<a id="schema_GetTypedLinkFacetInformationResponse"></a>
<a id="tocSgettypedlinkfacetinformationresponse"></a>
<a id="tocsgettypedlinkfacetinformationresponse"></a>

```json
{
  "IdentityAttributeOrder": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityAttributeOrder|object|false|none|none|

<h2 id="tocS_InvalidNextTokenException">InvalidNextTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidnexttokenexception"></a>
<a id="schema_InvalidNextTokenException"></a>
<a id="tocSinvalidnexttokenexception"></a>
<a id="tocsinvalidnexttokenexception"></a>

```json
null
```

<h2 id="tocS_ListAppliedSchemaArnsResponse">ListAppliedSchemaArnsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistappliedschemaarnsresponse"></a>
<a id="schema_ListAppliedSchemaArnsResponse"></a>
<a id="tocSlistappliedschemaarnsresponse"></a>
<a id="tocslistappliedschemaarnsresponse"></a>

```json
{
  "SchemaArns": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemaArns|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAttachedIndicesResponse">ListAttachedIndicesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistattachedindicesresponse"></a>
<a id="schema_ListAttachedIndicesResponse"></a>
<a id="tocSlistattachedindicesresponse"></a>
<a id="tocslistattachedindicesresponse"></a>

```json
{
  "IndexAttachments": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexAttachments|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListDevelopmentSchemaArnsResponse">ListDevelopmentSchemaArnsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdevelopmentschemaarnsresponse"></a>
<a id="schema_ListDevelopmentSchemaArnsResponse"></a>
<a id="tocSlistdevelopmentschemaarnsresponse"></a>
<a id="tocslistdevelopmentschemaarnsresponse"></a>

```json
{
  "SchemaArns": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemaArns|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListDirectoriesResponse">ListDirectoriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdirectoriesresponse"></a>
<a id="schema_ListDirectoriesResponse"></a>
<a id="tocSlistdirectoriesresponse"></a>
<a id="tocslistdirectoriesresponse"></a>

```json
{
  "Directories": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Directories|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListFacetAttributesResponse">ListFacetAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfacetattributesresponse"></a>
<a id="schema_ListFacetAttributesResponse"></a>
<a id="tocSlistfacetattributesresponse"></a>
<a id="tocslistfacetattributesresponse"></a>

```json
{
  "Attributes": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attributes|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListFacetNamesResponse">ListFacetNamesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfacetnamesresponse"></a>
<a id="schema_ListFacetNamesResponse"></a>
<a id="tocSlistfacetnamesresponse"></a>
<a id="tocslistfacetnamesresponse"></a>

```json
{
  "FacetNames": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FacetNames|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListIncomingTypedLinksResponse">ListIncomingTypedLinksResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistincomingtypedlinksresponse"></a>
<a id="schema_ListIncomingTypedLinksResponse"></a>
<a id="tocSlistincomingtypedlinksresponse"></a>
<a id="tocslistincomingtypedlinksresponse"></a>

```json
{
  "LinkSpecifiers": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LinkSpecifiers|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_TypedLinkAttributeRange">TypedLinkAttributeRange</h2>
<!-- backwards compatibility -->
<a id="schematypedlinkattributerange"></a>
<a id="schema_TypedLinkAttributeRange"></a>
<a id="tocStypedlinkattributerange"></a>
<a id="tocstypedlinkattributerange"></a>

```json
{
  "AttributeName": {},
  "Range": {
    "StartMode": {},
    "StartValue": {
      "StringValue": {},
      "BinaryValue": {},
      "BooleanValue": {},
      "NumberValue": {},
      "DatetimeValue": {}
    },
    "EndMode": {},
    "EndValue": {
      "StringValue": {},
      "BinaryValue": {},
      "BooleanValue": {},
      "NumberValue": {},
      "DatetimeValue": {}
    }
  }
}
```

Identifies the range of attributes that are used by a specified filter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttributeName|object|false|none|none|
|Range|object|true|none|none|

<h2 id="tocS_ListIndexResponse">ListIndexResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistindexresponse"></a>
<a id="schema_ListIndexResponse"></a>
<a id="tocSlistindexresponse"></a>
<a id="tocslistindexresponse"></a>

```json
{
  "IndexAttachments": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexAttachments|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ObjectAttributeRange">ObjectAttributeRange</h2>
<!-- backwards compatibility -->
<a id="schemaobjectattributerange"></a>
<a id="schema_ObjectAttributeRange"></a>
<a id="tocSobjectattributerange"></a>
<a id="tocsobjectattributerange"></a>

```json
{
  "AttributeKey": {
    "SchemaArn": {},
    "FacetName": {},
    "Name": {}
  },
  "Range": {
    "StartMode": {},
    "StartValue": {
      "StringValue": {},
      "BinaryValue": {},
      "BooleanValue": {},
      "NumberValue": {},
      "DatetimeValue": {}
    },
    "EndMode": {},
    "EndValue": {
      "StringValue": {},
      "BinaryValue": {},
      "BooleanValue": {},
      "NumberValue": {},
      "DatetimeValue": {}
    }
  }
}
```

A range of attributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttributeKey|object|false|none|none|
|Range|object|false|none|none|

<h2 id="tocS_ListManagedSchemaArnsResponse">ListManagedSchemaArnsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmanagedschemaarnsresponse"></a>
<a id="schema_ListManagedSchemaArnsResponse"></a>
<a id="tocSlistmanagedschemaarnsresponse"></a>
<a id="tocslistmanagedschemaarnsresponse"></a>

```json
{
  "SchemaArns": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemaArns|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListObjectAttributesResponse">ListObjectAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistobjectattributesresponse"></a>
<a id="schema_ListObjectAttributesResponse"></a>
<a id="tocSlistobjectattributesresponse"></a>
<a id="tocslistobjectattributesresponse"></a>

```json
{
  "Attributes": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attributes|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListObjectChildrenResponse">ListObjectChildrenResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistobjectchildrenresponse"></a>
<a id="schema_ListObjectChildrenResponse"></a>
<a id="tocSlistobjectchildrenresponse"></a>
<a id="tocslistobjectchildrenresponse"></a>

```json
{
  "Children": {
    "property1": "string",
    "property2": "string"
  },
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Children|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListObjectParentPathsResponse">ListObjectParentPathsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistobjectparentpathsresponse"></a>
<a id="schema_ListObjectParentPathsResponse"></a>
<a id="tocSlistobjectparentpathsresponse"></a>
<a id="tocslistobjectparentpathsresponse"></a>

```json
{
  "PathToObjectIdentifiersList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PathToObjectIdentifiersList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListObjectParentsResponse">ListObjectParentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistobjectparentsresponse"></a>
<a id="schema_ListObjectParentsResponse"></a>
<a id="tocSlistobjectparentsresponse"></a>
<a id="tocslistobjectparentsresponse"></a>

```json
{
  "Parents": {
    "property1": "string",
    "property2": "string"
  },
  "NextToken": {},
  "ParentLinks": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Parents|object|false|none|none|
|NextToken|object|false|none|none|
|ParentLinks|object|false|none|none|

<h2 id="tocS_CannotListParentOfRootException">CannotListParentOfRootException</h2>
<!-- backwards compatibility -->
<a id="schemacannotlistparentofrootexception"></a>
<a id="schema_CannotListParentOfRootException"></a>
<a id="tocScannotlistparentofrootexception"></a>
<a id="tocscannotlistparentofrootexception"></a>

```json
null
```

<h2 id="tocS_ListObjectPoliciesResponse">ListObjectPoliciesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistobjectpoliciesresponse"></a>
<a id="schema_ListObjectPoliciesResponse"></a>
<a id="tocSlistobjectpoliciesresponse"></a>
<a id="tocslistobjectpoliciesresponse"></a>

```json
{
  "AttachedPolicyIds": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttachedPolicyIds|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListOutgoingTypedLinksResponse">ListOutgoingTypedLinksResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistoutgoingtypedlinksresponse"></a>
<a id="schema_ListOutgoingTypedLinksResponse"></a>
<a id="tocSlistoutgoingtypedlinksresponse"></a>
<a id="tocslistoutgoingtypedlinksresponse"></a>

```json
{
  "TypedLinkSpecifiers": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TypedLinkSpecifiers|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListPolicyAttachmentsResponse">ListPolicyAttachmentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpolicyattachmentsresponse"></a>
<a id="schema_ListPolicyAttachmentsResponse"></a>
<a id="tocSlistpolicyattachmentsresponse"></a>
<a id="tocslistpolicyattachmentsresponse"></a>

```json
{
  "ObjectIdentifiers": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectIdentifiers|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListPublishedSchemaArnsResponse">ListPublishedSchemaArnsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpublishedschemaarnsresponse"></a>
<a id="schema_ListPublishedSchemaArnsResponse"></a>
<a id="tocSlistpublishedschemaarnsresponse"></a>
<a id="tocslistpublishedschemaarnsresponse"></a>

```json
{
  "SchemaArns": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemaArns|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "Tags": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_InvalidTaggingRequestException">InvalidTaggingRequestException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtaggingrequestexception"></a>
<a id="schema_InvalidTaggingRequestException"></a>
<a id="tocSinvalidtaggingrequestexception"></a>
<a id="tocsinvalidtaggingrequestexception"></a>

```json
null
```

<h2 id="tocS_ListTypedLinkFacetAttributesResponse">ListTypedLinkFacetAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttypedlinkfacetattributesresponse"></a>
<a id="schema_ListTypedLinkFacetAttributesResponse"></a>
<a id="tocSlisttypedlinkfacetattributesresponse"></a>
<a id="tocslisttypedlinkfacetattributesresponse"></a>

```json
{
  "Attributes": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attributes|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTypedLinkFacetNamesResponse">ListTypedLinkFacetNamesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttypedlinkfacetnamesresponse"></a>
<a id="schema_ListTypedLinkFacetNamesResponse"></a>
<a id="tocSlisttypedlinkfacetnamesresponse"></a>
<a id="tocslisttypedlinkfacetnamesresponse"></a>

```json
{
  "FacetNames": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FacetNames|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_LookupPolicyResponse">LookupPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemalookuppolicyresponse"></a>
<a id="schema_LookupPolicyResponse"></a>
<a id="tocSlookuppolicyresponse"></a>
<a id="tocslookuppolicyresponse"></a>

```json
{
  "PolicyToPathList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyToPathList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_PublishSchemaResponse">PublishSchemaResponse</h2>
<!-- backwards compatibility -->
<a id="schemapublishschemaresponse"></a>
<a id="schema_PublishSchemaResponse"></a>
<a id="tocSpublishschemaresponse"></a>
<a id="tocspublishschemaresponse"></a>

```json
{
  "PublishedSchemaArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PublishedSchemaArn|object|false|none|none|

<h2 id="tocS_SchemaAlreadyPublishedException">SchemaAlreadyPublishedException</h2>
<!-- backwards compatibility -->
<a id="schemaschemaalreadypublishedexception"></a>
<a id="schema_SchemaAlreadyPublishedException"></a>
<a id="tocSschemaalreadypublishedexception"></a>
<a id="tocsschemaalreadypublishedexception"></a>

```json
null
```

<h2 id="tocS_PutSchemaFromJsonResponse">PutSchemaFromJsonResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputschemafromjsonresponse"></a>
<a id="schema_PutSchemaFromJsonResponse"></a>
<a id="tocSputschemafromjsonresponse"></a>
<a id="tocsputschemafromjsonresponse"></a>

```json
{
  "Arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|

<h2 id="tocS_InvalidSchemaDocException">InvalidSchemaDocException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidschemadocexception"></a>
<a id="schema_InvalidSchemaDocException"></a>
<a id="tocSinvalidschemadocexception"></a>
<a id="tocsinvalidschemadocexception"></a>

```json
null
```

<h2 id="tocS_RemoveFacetFromObjectResponse">RemoveFacetFromObjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemaremovefacetfromobjectresponse"></a>
<a id="schema_RemoveFacetFromObjectResponse"></a>
<a id="tocSremovefacetfromobjectresponse"></a>
<a id="tocsremovefacetfromobjectresponse"></a>

```json
{}
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

The tag structure that contains a tag key and value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Value|object|false|none|none|

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

<h2 id="tocS_UpdateFacetResponse">UpdateFacetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefacetresponse"></a>
<a id="schema_UpdateFacetResponse"></a>
<a id="tocSupdatefacetresponse"></a>
<a id="tocsupdatefacetresponse"></a>

```json
{}
```

<h2 id="tocS_FacetAttributeUpdate">FacetAttributeUpdate</h2>
<!-- backwards compatibility -->
<a id="schemafacetattributeupdate"></a>
<a id="schema_FacetAttributeUpdate"></a>
<a id="tocSfacetattributeupdate"></a>
<a id="tocsfacetattributeupdate"></a>

```json
{
  "Attribute": {
    "Name": {},
    "AttributeDefinition": {
      "Type": {},
      "DefaultValue": {
        "StringValue": {},
        "BinaryValue": {},
        "BooleanValue": {},
        "NumberValue": {},
        "DatetimeValue": {}
      },
      "IsImmutable": {},
      "Rules": {
        "property1": {
          "Type": {},
          "Parameters": {
            "property1": "string",
            "property2": "string"
          }
        },
        "property2": {
          "Type": {},
          "Parameters": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    },
    "AttributeReference": {
      "TargetFacetName": {},
      "TargetAttributeName": {}
    },
    "RequiredBehavior": {}
  },
  "Action": {}
}
```

A structure that contains information used to update an attribute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attribute|object|false|none|none|
|Action|object|false|none|none|

<h2 id="tocS_InvalidFacetUpdateException">InvalidFacetUpdateException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidfacetupdateexception"></a>
<a id="schema_InvalidFacetUpdateException"></a>
<a id="tocSinvalidfacetupdateexception"></a>
<a id="tocsinvalidfacetupdateexception"></a>

```json
null
```

<h2 id="tocS_UpdateLinkAttributesResponse">UpdateLinkAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelinkattributesresponse"></a>
<a id="schema_UpdateLinkAttributesResponse"></a>
<a id="tocSupdatelinkattributesresponse"></a>
<a id="tocsupdatelinkattributesresponse"></a>

```json
{}
```

<h2 id="tocS_LinkAttributeUpdate">LinkAttributeUpdate</h2>
<!-- backwards compatibility -->
<a id="schemalinkattributeupdate"></a>
<a id="schema_LinkAttributeUpdate"></a>
<a id="tocSlinkattributeupdate"></a>
<a id="tocslinkattributeupdate"></a>

```json
{
  "AttributeKey": {
    "SchemaArn": {},
    "FacetName": {},
    "Name": {}
  },
  "AttributeAction": {
    "AttributeActionType": {},
    "AttributeUpdateValue": {
      "StringValue": {},
      "BinaryValue": {},
      "BooleanValue": {},
      "NumberValue": {},
      "DatetimeValue": {}
    }
  }
}
```

Structure that contains attribute update information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttributeKey|object|false|none|none|
|AttributeAction|object|false|none|none|

<h2 id="tocS_UpdateObjectAttributesResponse">UpdateObjectAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateobjectattributesresponse"></a>
<a id="schema_UpdateObjectAttributesResponse"></a>
<a id="tocSupdateobjectattributesresponse"></a>
<a id="tocsupdateobjectattributesresponse"></a>

```json
{
  "ObjectIdentifier": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectIdentifier|object|false|none|none|

<h2 id="tocS_ObjectAttributeUpdate">ObjectAttributeUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaobjectattributeupdate"></a>
<a id="schema_ObjectAttributeUpdate"></a>
<a id="tocSobjectattributeupdate"></a>
<a id="tocsobjectattributeupdate"></a>

```json
{
  "ObjectAttributeKey": {
    "SchemaArn": {},
    "FacetName": {},
    "Name": {}
  },
  "ObjectAttributeAction": {
    "ObjectAttributeActionType": {},
    "ObjectAttributeUpdateValue": {
      "StringValue": {},
      "BinaryValue": {},
      "BooleanValue": {},
      "NumberValue": {},
      "DatetimeValue": {}
    }
  }
}
```

Structure that contains attribute update information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectAttributeKey|object|false|none|none|
|ObjectAttributeAction|object|false|none|none|

<h2 id="tocS_UpdateSchemaResponse">UpdateSchemaResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateschemaresponse"></a>
<a id="schema_UpdateSchemaResponse"></a>
<a id="tocSupdateschemaresponse"></a>
<a id="tocsupdateschemaresponse"></a>

```json
{
  "SchemaArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemaArn|object|false|none|none|

<h2 id="tocS_UpdateTypedLinkFacetResponse">UpdateTypedLinkFacetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetypedlinkfacetresponse"></a>
<a id="schema_UpdateTypedLinkFacetResponse"></a>
<a id="tocSupdatetypedlinkfacetresponse"></a>
<a id="tocsupdatetypedlinkfacetresponse"></a>

```json
{}
```

<h2 id="tocS_TypedLinkFacetAttributeUpdate">TypedLinkFacetAttributeUpdate</h2>
<!-- backwards compatibility -->
<a id="schematypedlinkfacetattributeupdate"></a>
<a id="schema_TypedLinkFacetAttributeUpdate"></a>
<a id="tocStypedlinkfacetattributeupdate"></a>
<a id="tocstypedlinkfacetattributeupdate"></a>

```json
{
  "Attribute": {
    "Name": {},
    "Type": {},
    "DefaultValue": {
      "StringValue": {},
      "BinaryValue": {},
      "BooleanValue": {},
      "NumberValue": {},
      "DatetimeValue": {}
    },
    "IsImmutable": {},
    "Rules": {
      "property1": {
        "Type": {},
        "Parameters": {
          "property1": "string",
          "property2": "string"
        }
      },
      "property2": {
        "Type": {},
        "Parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "RequiredBehavior": {}
  },
  "Action": {}
}
```

A typed link facet attribute update.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attribute|object|true|none|none|
|Action|object|true|none|none|

<h2 id="tocS_UpgradeAppliedSchemaResponse">UpgradeAppliedSchemaResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupgradeappliedschemaresponse"></a>
<a id="schema_UpgradeAppliedSchemaResponse"></a>
<a id="tocSupgradeappliedschemaresponse"></a>
<a id="tocsupgradeappliedschemaresponse"></a>

```json
{
  "UpgradedSchemaArn": {},
  "DirectoryArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UpgradedSchemaArn|object|false|none|none|
|DirectoryArn|object|false|none|none|

<h2 id="tocS_IncompatibleSchemaException">IncompatibleSchemaException</h2>
<!-- backwards compatibility -->
<a id="schemaincompatibleschemaexception"></a>
<a id="schema_IncompatibleSchemaException"></a>
<a id="tocSincompatibleschemaexception"></a>
<a id="tocsincompatibleschemaexception"></a>

```json
null
```

<h2 id="tocS_UpgradePublishedSchemaResponse">UpgradePublishedSchemaResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupgradepublishedschemaresponse"></a>
<a id="schema_UpgradePublishedSchemaResponse"></a>
<a id="tocSupgradepublishedschemaresponse"></a>
<a id="tocsupgradepublishedschemaresponse"></a>

```json
{
  "UpgradedSchemaArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UpgradedSchemaArn|object|false|none|none|

<h2 id="tocS_AttributeKeyAndValueList">AttributeKeyAndValueList</h2>
<!-- backwards compatibility -->
<a id="schemaattributekeyandvaluelist"></a>
<a id="schema_AttributeKeyAndValueList"></a>
<a id="tocSattributekeyandvaluelist"></a>
<a id="tocsattributekeyandvaluelist"></a>

```json
[
  {
    "Key": {
      "SchemaArn": {},
      "FacetName": {},
      "Name": {}
    },
    "Value": {
      "StringValue": {},
      "BinaryValue": {},
      "BooleanValue": {},
      "NumberValue": {},
      "DatetimeValue": {}
    }
  }
]
```

<h2 id="tocS_AddFacetToObjectRequest">AddFacetToObjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddfacettoobjectrequest"></a>
<a id="schema_AddFacetToObjectRequest"></a>
<a id="tocSaddfacettoobjectrequest"></a>
<a id="tocsaddfacettoobjectrequest"></a>

```json
{
  "SchemaFacet": {
    "SchemaArn": {},
    "FacetName": {}
  },
  "ObjectAttributeList": {},
  "ObjectReference": {
    "Selector": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemaFacet|object|true|none|none|
|ObjectAttributeList|object|false|none|none|
|ObjectReference|object|true|none|none|

<h2 id="tocS_ApplySchemaRequest">ApplySchemaRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapplyschemarequest"></a>
<a id="schema_ApplySchemaRequest"></a>
<a id="tocSapplyschemarequest"></a>
<a id="tocsapplyschemarequest"></a>

```json
{
  "PublishedSchemaArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PublishedSchemaArn|object|true|none|none|

<h2 id="tocS_Arns">Arns</h2>
<!-- backwards compatibility -->
<a id="schemaarns"></a>
<a id="schema_Arns"></a>
<a id="tocSarns"></a>
<a id="tocsarns"></a>

```json
[
  "string"
]
```

<h2 id="tocS_LinkName">LinkName</h2>
<!-- backwards compatibility -->
<a id="schemalinkname"></a>
<a id="schema_LinkName"></a>
<a id="tocSlinkname"></a>
<a id="tocslinkname"></a>

```json
"string"
```

<h2 id="tocS_AttachObjectRequest">AttachObjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemaattachobjectrequest"></a>
<a id="schema_AttachObjectRequest"></a>
<a id="tocSattachobjectrequest"></a>
<a id="tocsattachobjectrequest"></a>

```json
{
  "ParentReference": {
    "Selector": {}
  },
  "ChildReference": {
    "Selector": {}
  },
  "LinkName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParentReference|object|true|none|none|
|ChildReference|object|true|none|none|
|LinkName|object|true|none|none|

<h2 id="tocS_ObjectIdentifier">ObjectIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaobjectidentifier"></a>
<a id="schema_ObjectIdentifier"></a>
<a id="tocSobjectidentifier"></a>
<a id="tocsobjectidentifier"></a>

```json
"string"
```

<h2 id="tocS_AttachPolicyRequest">AttachPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaattachpolicyrequest"></a>
<a id="schema_AttachPolicyRequest"></a>
<a id="tocSattachpolicyrequest"></a>
<a id="tocsattachpolicyrequest"></a>

```json
{
  "PolicyReference": {
    "Selector": {}
  },
  "ObjectReference": {
    "Selector": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyReference|object|true|none|none|
|ObjectReference|object|true|none|none|

<h2 id="tocS_AttachToIndexRequest">AttachToIndexRequest</h2>
<!-- backwards compatibility -->
<a id="schemaattachtoindexrequest"></a>
<a id="schema_AttachToIndexRequest"></a>
<a id="tocSattachtoindexrequest"></a>
<a id="tocsattachtoindexrequest"></a>

```json
{
  "IndexReference": {
    "Selector": {}
  },
  "TargetReference": {
    "Selector": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexReference|object|true|none|none|
|TargetReference|object|true|none|none|

<h2 id="tocS_AttachTypedLinkRequest">AttachTypedLinkRequest</h2>
<!-- backwards compatibility -->
<a id="schemaattachtypedlinkrequest"></a>
<a id="schema_AttachTypedLinkRequest"></a>
<a id="tocSattachtypedlinkrequest"></a>
<a id="tocsattachtypedlinkrequest"></a>

```json
{
  "SourceObjectReference": {
    "Selector": {}
  },
  "TargetObjectReference": {
    "Selector": {}
  },
  "TypedLinkFacet": {
    "SchemaArn": {},
    "TypedLinkName": {}
  },
  "Attributes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceObjectReference|object|true|none|none|
|TargetObjectReference|object|true|none|none|
|TypedLinkFacet|object|true|none|none|
|Attributes|object|true|none|none|

<h2 id="tocS_TypedLinkSpecifier">TypedLinkSpecifier</h2>
<!-- backwards compatibility -->
<a id="schematypedlinkspecifier"></a>
<a id="schema_TypedLinkSpecifier"></a>
<a id="tocStypedlinkspecifier"></a>
<a id="tocstypedlinkspecifier"></a>

```json
{
  "TypedLinkFacet": {
    "SchemaArn": {},
    "TypedLinkName": {}
  },
  "SourceObjectReference": {
    "Selector": {}
  },
  "TargetObjectReference": {
    "Selector": {}
  },
  "IdentityAttributeValues": {}
}
```

Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TypedLinkFacet|object|true|none|none|
|SourceObjectReference|object|true|none|none|
|TargetObjectReference|object|true|none|none|
|IdentityAttributeValues|object|true|none|none|

<h2 id="tocS_TypedAttributeValue">TypedAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schematypedattributevalue"></a>
<a id="schema_TypedAttributeValue"></a>
<a id="tocStypedattributevalue"></a>
<a id="tocstypedattributevalue"></a>

```json
{
  "StringValue": {},
  "BinaryValue": {},
  "BooleanValue": {},
  "NumberValue": {},
  "DatetimeValue": {}
}
```

Represents the data for a typed attribute. You can set one, and only one, of the elements. Each attribute in an item is a name-value pair. Attributes have a single value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StringValue|object|false|none|none|
|BinaryValue|object|false|none|none|
|BooleanValue|object|false|none|none|
|NumberValue|object|false|none|none|
|DatetimeValue|object|false|none|none|

<h2 id="tocS_AttributeKeyList">AttributeKeyList</h2>
<!-- backwards compatibility -->
<a id="schemaattributekeylist"></a>
<a id="schema_AttributeKeyList"></a>
<a id="tocSattributekeylist"></a>
<a id="tocsattributekeylist"></a>

```json
[
  {
    "SchemaArn": {},
    "FacetName": {},
    "Name": {}
  }
]
```

<h2 id="tocS_BatchAddFacetToObject">BatchAddFacetToObject</h2>
<!-- backwards compatibility -->
<a id="schemabatchaddfacettoobject"></a>
<a id="schema_BatchAddFacetToObject"></a>
<a id="tocSbatchaddfacettoobject"></a>
<a id="tocsbatchaddfacettoobject"></a>

```json
{
  "SchemaFacet": {
    "SchemaArn": {},
    "FacetName": {}
  },
  "ObjectAttributeList": {},
  "ObjectReference": {
    "Selector": {}
  }
}
```

Represents the output of a batch add facet to object operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemaFacet|object|true|none|none|
|ObjectAttributeList|object|true|none|none|
|ObjectReference|object|true|none|none|

<h2 id="tocS_BatchAddFacetToObjectResponse">BatchAddFacetToObjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchaddfacettoobjectresponse"></a>
<a id="schema_BatchAddFacetToObjectResponse"></a>
<a id="tocSbatchaddfacettoobjectresponse"></a>
<a id="tocsbatchaddfacettoobjectresponse"></a>

```json
{}
```

The result of a batch add facet to object operation.

<h2 id="tocS_BatchAttachObject">BatchAttachObject</h2>
<!-- backwards compatibility -->
<a id="schemabatchattachobject"></a>
<a id="schema_BatchAttachObject"></a>
<a id="tocSbatchattachobject"></a>
<a id="tocsbatchattachobject"></a>

```json
{
  "ParentReference": {
    "Selector": {}
  },
  "ChildReference": {
    "Selector": {}
  },
  "LinkName": {}
}
```

Represents the output of an <a>AttachObject</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParentReference|object|true|none|none|
|ChildReference|object|true|none|none|
|LinkName|object|true|none|none|

<h2 id="tocS_BatchAttachObjectResponse">BatchAttachObjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchattachobjectresponse"></a>
<a id="schema_BatchAttachObjectResponse"></a>
<a id="tocSbatchattachobjectresponse"></a>
<a id="tocsbatchattachobjectresponse"></a>

```json
{
  "attachedObjectIdentifier": {}
}
```

Represents the output batch <a>AttachObject</a> response operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachedObjectIdentifier|object|false|none|none|

<h2 id="tocS_BatchAttachPolicy">BatchAttachPolicy</h2>
<!-- backwards compatibility -->
<a id="schemabatchattachpolicy"></a>
<a id="schema_BatchAttachPolicy"></a>
<a id="tocSbatchattachpolicy"></a>
<a id="tocsbatchattachpolicy"></a>

```json
{
  "PolicyReference": {
    "Selector": {}
  },
  "ObjectReference": {
    "Selector": {}
  }
}
```

Attaches a policy object to a regular object inside a <a>BatchRead</a> operation. For more information, see <a>AttachPolicy</a> and <a>BatchReadRequest$Operations</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyReference|object|true|none|none|
|ObjectReference|object|true|none|none|

<h2 id="tocS_BatchAttachPolicyResponse">BatchAttachPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchattachpolicyresponse"></a>
<a id="schema_BatchAttachPolicyResponse"></a>
<a id="tocSbatchattachpolicyresponse"></a>
<a id="tocsbatchattachpolicyresponse"></a>

```json
{}
```

Represents the output of an <a>AttachPolicy</a> response operation.

<h2 id="tocS_BatchAttachToIndex">BatchAttachToIndex</h2>
<!-- backwards compatibility -->
<a id="schemabatchattachtoindex"></a>
<a id="schema_BatchAttachToIndex"></a>
<a id="tocSbatchattachtoindex"></a>
<a id="tocsbatchattachtoindex"></a>

```json
{
  "IndexReference": {
    "Selector": {}
  },
  "TargetReference": {
    "Selector": {}
  }
}
```

Attaches the specified object to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>AttachToIndex</a> and <a>BatchReadRequest$Operations</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexReference|object|true|none|none|
|TargetReference|object|true|none|none|

<h2 id="tocS_BatchAttachToIndexResponse">BatchAttachToIndexResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchattachtoindexresponse"></a>
<a id="schema_BatchAttachToIndexResponse"></a>
<a id="tocSbatchattachtoindexresponse"></a>
<a id="tocsbatchattachtoindexresponse"></a>

```json
{
  "AttachedObjectIdentifier": {}
}
```

Represents the output of a <a>AttachToIndex</a> response operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttachedObjectIdentifier|object|false|none|none|

<h2 id="tocS_BatchAttachTypedLink">BatchAttachTypedLink</h2>
<!-- backwards compatibility -->
<a id="schemabatchattachtypedlink"></a>
<a id="schema_BatchAttachTypedLink"></a>
<a id="tocSbatchattachtypedlink"></a>
<a id="tocsbatchattachtypedlink"></a>

```json
{
  "SourceObjectReference": {
    "Selector": {}
  },
  "TargetObjectReference": {
    "Selector": {}
  },
  "TypedLinkFacet": {
    "SchemaArn": {},
    "TypedLinkName": {}
  },
  "Attributes": {}
}
```

Attaches a typed link to a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>AttachTypedLink</a> and <a>BatchReadRequest$Operations</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceObjectReference|object|true|none|none|
|TargetObjectReference|object|true|none|none|
|TypedLinkFacet|object|true|none|none|
|Attributes|object|true|none|none|

<h2 id="tocS_BatchAttachTypedLinkResponse">BatchAttachTypedLinkResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchattachtypedlinkresponse"></a>
<a id="schema_BatchAttachTypedLinkResponse"></a>
<a id="tocSbatchattachtypedlinkresponse"></a>
<a id="tocsbatchattachtypedlinkresponse"></a>

```json
{
  "TypedLinkSpecifier": {
    "TypedLinkFacet": {
      "SchemaArn": {},
      "TypedLinkName": {}
    },
    "SourceObjectReference": {
      "Selector": {}
    },
    "TargetObjectReference": {
      "Selector": {}
    },
    "IdentityAttributeValues": {}
  }
}
```

Represents the output of a <a>AttachTypedLink</a> response operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TypedLinkSpecifier|object|false|none|none|

<h2 id="tocS_Bool">Bool</h2>
<!-- backwards compatibility -->
<a id="schemabool"></a>
<a id="schema_Bool"></a>
<a id="tocSbool"></a>
<a id="tocsbool"></a>

```json
true
```

<h2 id="tocS_BatchReferenceName">BatchReferenceName</h2>
<!-- backwards compatibility -->
<a id="schemabatchreferencename"></a>
<a id="schema_BatchReferenceName"></a>
<a id="tocSbatchreferencename"></a>
<a id="tocsbatchreferencename"></a>

```json
"string"
```

<h2 id="tocS_BatchCreateIndex">BatchCreateIndex</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreateindex"></a>
<a id="schema_BatchCreateIndex"></a>
<a id="tocSbatchcreateindex"></a>
<a id="tocsbatchcreateindex"></a>

```json
{
  "OrderedIndexedAttributeList": {},
  "IsUnique": {},
  "ParentReference": {
    "Selector": {}
  },
  "LinkName": {},
  "BatchReferenceName": {}
}
```

Creates an index object inside of a <a>BatchRead</a> operation. For more information, see <a>CreateIndex</a> and <a>BatchReadRequest$Operations</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrderedIndexedAttributeList|object|true|none|none|
|IsUnique|object|true|none|none|
|ParentReference|object|false|none|none|
|LinkName|object|false|none|none|
|BatchReferenceName|object|false|none|none|

<h2 id="tocS_BatchCreateIndexResponse">BatchCreateIndexResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreateindexresponse"></a>
<a id="schema_BatchCreateIndexResponse"></a>
<a id="tocSbatchcreateindexresponse"></a>
<a id="tocsbatchcreateindexresponse"></a>

```json
{
  "ObjectIdentifier": {}
}
```

Represents the output of a <a>CreateIndex</a> response operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectIdentifier|object|false|none|none|

<h2 id="tocS_SchemaFacetList">SchemaFacetList</h2>
<!-- backwards compatibility -->
<a id="schemaschemafacetlist"></a>
<a id="schema_SchemaFacetList"></a>
<a id="tocSschemafacetlist"></a>
<a id="tocsschemafacetlist"></a>

```json
[
  {
    "SchemaArn": {},
    "FacetName": {}
  }
]
```

<h2 id="tocS_BatchCreateObject">BatchCreateObject</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreateobject"></a>
<a id="schema_BatchCreateObject"></a>
<a id="tocSbatchcreateobject"></a>
<a id="tocsbatchcreateobject"></a>

```json
{
  "SchemaFacet": {},
  "ObjectAttributeList": {},
  "ParentReference": {
    "Selector": {}
  },
  "LinkName": {},
  "BatchReferenceName": {}
}
```

Represents the output of a <a>CreateObject</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemaFacet|object|true|none|none|
|ObjectAttributeList|object|true|none|none|
|ParentReference|object|false|none|none|
|LinkName|object|false|none|none|
|BatchReferenceName|object|false|none|none|

<h2 id="tocS_BatchCreateObjectResponse">BatchCreateObjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreateobjectresponse"></a>
<a id="schema_BatchCreateObjectResponse"></a>
<a id="tocSbatchcreateobjectresponse"></a>
<a id="tocsbatchcreateobjectresponse"></a>

```json
{
  "ObjectIdentifier": {}
}
```

Represents the output of a <a>CreateObject</a> response operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectIdentifier|object|false|none|none|

<h2 id="tocS_BatchDeleteObject">BatchDeleteObject</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeleteobject"></a>
<a id="schema_BatchDeleteObject"></a>
<a id="tocSbatchdeleteobject"></a>
<a id="tocsbatchdeleteobject"></a>

```json
{
  "ObjectReference": {
    "Selector": {}
  }
}
```

Represents the output of a <a>DeleteObject</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectReference|object|true|none|none|

<h2 id="tocS_BatchDeleteObjectResponse">BatchDeleteObjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeleteobjectresponse"></a>
<a id="schema_BatchDeleteObjectResponse"></a>
<a id="tocSbatchdeleteobjectresponse"></a>
<a id="tocsbatchdeleteobjectresponse"></a>

```json
{}
```

Represents the output of a <a>DeleteObject</a> response operation.

<h2 id="tocS_BatchDetachFromIndex">BatchDetachFromIndex</h2>
<!-- backwards compatibility -->
<a id="schemabatchdetachfromindex"></a>
<a id="schema_BatchDetachFromIndex"></a>
<a id="tocSbatchdetachfromindex"></a>
<a id="tocsbatchdetachfromindex"></a>

```json
{
  "IndexReference": {
    "Selector": {}
  },
  "TargetReference": {
    "Selector": {}
  }
}
```

Detaches the specified object from the specified index inside a <a>BatchRead</a> operation. For more information, see <a>DetachFromIndex</a> and <a>BatchReadRequest$Operations</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexReference|object|true|none|none|
|TargetReference|object|true|none|none|

<h2 id="tocS_BatchDetachFromIndexResponse">BatchDetachFromIndexResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchdetachfromindexresponse"></a>
<a id="schema_BatchDetachFromIndexResponse"></a>
<a id="tocSbatchdetachfromindexresponse"></a>
<a id="tocsbatchdetachfromindexresponse"></a>

```json
{
  "DetachedObjectIdentifier": {}
}
```

Represents the output of a <a>DetachFromIndex</a> response operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DetachedObjectIdentifier|object|false|none|none|

<h2 id="tocS_BatchDetachObject">BatchDetachObject</h2>
<!-- backwards compatibility -->
<a id="schemabatchdetachobject"></a>
<a id="schema_BatchDetachObject"></a>
<a id="tocSbatchdetachobject"></a>
<a id="tocsbatchdetachobject"></a>

```json
{
  "ParentReference": {
    "Selector": {}
  },
  "LinkName": {},
  "BatchReferenceName": {}
}
```

Represents the output of a <a>DetachObject</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParentReference|object|true|none|none|
|LinkName|object|true|none|none|
|BatchReferenceName|object|false|none|none|

<h2 id="tocS_BatchDetachObjectResponse">BatchDetachObjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchdetachobjectresponse"></a>
<a id="schema_BatchDetachObjectResponse"></a>
<a id="tocSbatchdetachobjectresponse"></a>
<a id="tocsbatchdetachobjectresponse"></a>

```json
{
  "detachedObjectIdentifier": {}
}
```

Represents the output of a <a>DetachObject</a> response operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detachedObjectIdentifier|object|false|none|none|

<h2 id="tocS_BatchDetachPolicy">BatchDetachPolicy</h2>
<!-- backwards compatibility -->
<a id="schemabatchdetachpolicy"></a>
<a id="schema_BatchDetachPolicy"></a>
<a id="tocSbatchdetachpolicy"></a>
<a id="tocsbatchdetachpolicy"></a>

```json
{
  "PolicyReference": {
    "Selector": {}
  },
  "ObjectReference": {
    "Selector": {}
  }
}
```

Detaches the specified policy from the specified directory inside a <a>BatchWrite</a> operation. For more information, see <a>DetachPolicy</a> and <a>BatchWriteRequest$Operations</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyReference|object|true|none|none|
|ObjectReference|object|true|none|none|

<h2 id="tocS_BatchDetachPolicyResponse">BatchDetachPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchdetachpolicyresponse"></a>
<a id="schema_BatchDetachPolicyResponse"></a>
<a id="tocSbatchdetachpolicyresponse"></a>
<a id="tocsbatchdetachpolicyresponse"></a>

```json
{}
```

Represents the output of a <a>DetachPolicy</a> response operation.

<h2 id="tocS_BatchDetachTypedLink">BatchDetachTypedLink</h2>
<!-- backwards compatibility -->
<a id="schemabatchdetachtypedlink"></a>
<a id="schema_BatchDetachTypedLink"></a>
<a id="tocSbatchdetachtypedlink"></a>
<a id="tocsbatchdetachtypedlink"></a>

```json
{
  "TypedLinkSpecifier": {
    "TypedLinkFacet": {
      "SchemaArn": {},
      "TypedLinkName": {}
    },
    "SourceObjectReference": {
      "Selector": {}
    },
    "TargetObjectReference": {
      "Selector": {}
    },
    "IdentityAttributeValues": {}
  }
}
```

Detaches a typed link from a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>DetachTypedLink</a> and <a>BatchReadRequest$Operations</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TypedLinkSpecifier|object|true|none|none|

<h2 id="tocS_BatchDetachTypedLinkResponse">BatchDetachTypedLinkResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchdetachtypedlinkresponse"></a>
<a id="schema_BatchDetachTypedLinkResponse"></a>
<a id="tocSbatchdetachtypedlinkresponse"></a>
<a id="tocsbatchdetachtypedlinkresponse"></a>

```json
{}
```

Represents the output of a <a>DetachTypedLink</a> response operation.

<h2 id="tocS_BatchGetLinkAttributes">BatchGetLinkAttributes</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetlinkattributes"></a>
<a id="schema_BatchGetLinkAttributes"></a>
<a id="tocSbatchgetlinkattributes"></a>
<a id="tocsbatchgetlinkattributes"></a>

```json
{
  "TypedLinkSpecifier": {
    "TypedLinkFacet": {
      "SchemaArn": {},
      "TypedLinkName": {}
    },
    "SourceObjectReference": {
      "Selector": {}
    },
    "TargetObjectReference": {
      "Selector": {}
    },
    "IdentityAttributeValues": {}
  },
  "AttributeNames": {}
}
```

Retrieves attributes that are associated with a typed link inside a <a>BatchRead</a> operation. For more information, see <a>GetLinkAttributes</a> and <a>BatchReadRequest$Operations</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TypedLinkSpecifier|object|true|none|none|
|AttributeNames|object|true|none|none|

<h2 id="tocS_BatchGetLinkAttributesResponse">BatchGetLinkAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetlinkattributesresponse"></a>
<a id="schema_BatchGetLinkAttributesResponse"></a>
<a id="tocSbatchgetlinkattributesresponse"></a>
<a id="tocsbatchgetlinkattributesresponse"></a>

```json
{
  "Attributes": {}
}
```

Represents the output of a <a>GetLinkAttributes</a> response operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attributes|object|false|none|none|

<h2 id="tocS_BatchGetObjectAttributes">BatchGetObjectAttributes</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetobjectattributes"></a>
<a id="schema_BatchGetObjectAttributes"></a>
<a id="tocSbatchgetobjectattributes"></a>
<a id="tocsbatchgetobjectattributes"></a>

```json
{
  "ObjectReference": {
    "Selector": {}
  },
  "SchemaFacet": {
    "SchemaArn": {},
    "FacetName": {}
  },
  "AttributeNames": {}
}
```

Retrieves attributes within a facet that are associated with an object inside an <a>BatchRead</a> operation. For more information, see <a>GetObjectAttributes</a> and <a>BatchReadRequest$Operations</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectReference|object|true|none|none|
|SchemaFacet|object|true|none|none|
|AttributeNames|object|true|none|none|

<h2 id="tocS_BatchGetObjectAttributesResponse">BatchGetObjectAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetobjectattributesresponse"></a>
<a id="schema_BatchGetObjectAttributesResponse"></a>
<a id="tocSbatchgetobjectattributesresponse"></a>
<a id="tocsbatchgetobjectattributesresponse"></a>

```json
{
  "Attributes": {}
}
```

Represents the output of a <a>GetObjectAttributes</a> response operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attributes|object|false|none|none|

<h2 id="tocS_BatchGetObjectInformation">BatchGetObjectInformation</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetobjectinformation"></a>
<a id="schema_BatchGetObjectInformation"></a>
<a id="tocSbatchgetobjectinformation"></a>
<a id="tocsbatchgetobjectinformation"></a>

```json
{
  "ObjectReference": {
    "Selector": {}
  }
}
```

Retrieves metadata about an object inside a <a>BatchRead</a> operation. For more information, see <a>GetObjectInformation</a> and <a>BatchReadRequest$Operations</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectReference|object|true|none|none|

<h2 id="tocS_BatchGetObjectInformationResponse">BatchGetObjectInformationResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetobjectinformationresponse"></a>
<a id="schema_BatchGetObjectInformationResponse"></a>
<a id="tocSbatchgetobjectinformationresponse"></a>
<a id="tocsbatchgetobjectinformationresponse"></a>

```json
{
  "SchemaFacets": {},
  "ObjectIdentifier": {}
}
```

Represents the output of a <a>GetObjectInformation</a> response operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemaFacets|object|false|none|none|
|ObjectIdentifier|object|false|none|none|

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

```json
"string"
```

<h2 id="tocS_NumberResults">NumberResults</h2>
<!-- backwards compatibility -->
<a id="schemanumberresults"></a>
<a id="schema_NumberResults"></a>
<a id="tocSnumberresults"></a>
<a id="tocsnumberresults"></a>

```json
1
```

<h2 id="tocS_BatchListAttachedIndices">BatchListAttachedIndices</h2>
<!-- backwards compatibility -->
<a id="schemabatchlistattachedindices"></a>
<a id="schema_BatchListAttachedIndices"></a>
<a id="tocSbatchlistattachedindices"></a>
<a id="tocsbatchlistattachedindices"></a>

```json
{
  "TargetReference": {
    "Selector": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

Lists indices attached to an object inside a <a>BatchRead</a> operation. For more information, see <a>ListAttachedIndices</a> and <a>BatchReadRequest$Operations</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetReference|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_IndexAttachmentList">IndexAttachmentList</h2>
<!-- backwards compatibility -->
<a id="schemaindexattachmentlist"></a>
<a id="schema_IndexAttachmentList"></a>
<a id="tocSindexattachmentlist"></a>
<a id="tocsindexattachmentlist"></a>

```json
[
  {
    "IndexedAttributes": {},
    "ObjectIdentifier": {}
  }
]
```

<h2 id="tocS_BatchListAttachedIndicesResponse">BatchListAttachedIndicesResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchlistattachedindicesresponse"></a>
<a id="schema_BatchListAttachedIndicesResponse"></a>
<a id="tocSbatchlistattachedindicesresponse"></a>
<a id="tocsbatchlistattachedindicesresponse"></a>

```json
{
  "IndexAttachments": {},
  "NextToken": {}
}
```

Represents the output of a <a>ListAttachedIndices</a> response operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexAttachments|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_TypedLinkAttributeRangeList">TypedLinkAttributeRangeList</h2>
<!-- backwards compatibility -->
<a id="schematypedlinkattributerangelist"></a>
<a id="schema_TypedLinkAttributeRangeList"></a>
<a id="tocStypedlinkattributerangelist"></a>
<a id="tocstypedlinkattributerangelist"></a>

```json
[
  {
    "AttributeName": {},
    "Range": {
      "StartMode": {},
      "StartValue": {
        "StringValue": {},
        "BinaryValue": {},
        "BooleanValue": {},
        "NumberValue": {},
        "DatetimeValue": {}
      },
      "EndMode": {},
      "EndValue": {
        "StringValue": {},
        "BinaryValue": {},
        "BooleanValue": {},
        "NumberValue": {},
        "DatetimeValue": {}
      }
    }
  }
]
```

<h2 id="tocS_BatchListIncomingTypedLinks">BatchListIncomingTypedLinks</h2>
<!-- backwards compatibility -->
<a id="schemabatchlistincomingtypedlinks"></a>
<a id="schema_BatchListIncomingTypedLinks"></a>
<a id="tocSbatchlistincomingtypedlinks"></a>
<a id="tocsbatchlistincomingtypedlinks"></a>

```json
{
  "ObjectReference": {
    "Selector": {}
  },
  "FilterAttributeRanges": {},
  "FilterTypedLink": {
    "SchemaArn": {},
    "TypedLinkName": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListIncomingTypedLinks</a> and <a>BatchReadRequest$Operations</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectReference|object|true|none|none|
|FilterAttributeRanges|object|false|none|none|
|FilterTypedLink|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_TypedLinkSpecifierList">TypedLinkSpecifierList</h2>
<!-- backwards compatibility -->
<a id="schematypedlinkspecifierlist"></a>
<a id="schema_TypedLinkSpecifierList"></a>
<a id="tocStypedlinkspecifierlist"></a>
<a id="tocstypedlinkspecifierlist"></a>

```json
[
  {
    "TypedLinkFacet": {
      "SchemaArn": {},
      "TypedLinkName": {}
    },
    "SourceObjectReference": {
      "Selector": {}
    },
    "TargetObjectReference": {
      "Selector": {}
    },
    "IdentityAttributeValues": {}
  }
]
```

<h2 id="tocS_BatchListIncomingTypedLinksResponse">BatchListIncomingTypedLinksResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchlistincomingtypedlinksresponse"></a>
<a id="schema_BatchListIncomingTypedLinksResponse"></a>
<a id="tocSbatchlistincomingtypedlinksresponse"></a>
<a id="tocsbatchlistincomingtypedlinksresponse"></a>

```json
{
  "LinkSpecifiers": {},
  "NextToken": {}
}
```

Represents the output of a <a>ListIncomingTypedLinks</a> response operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LinkSpecifiers|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ObjectAttributeRangeList">ObjectAttributeRangeList</h2>
<!-- backwards compatibility -->
<a id="schemaobjectattributerangelist"></a>
<a id="schema_ObjectAttributeRangeList"></a>
<a id="tocSobjectattributerangelist"></a>
<a id="tocsobjectattributerangelist"></a>

```json
[
  {
    "AttributeKey": {
      "SchemaArn": {},
      "FacetName": {},
      "Name": {}
    },
    "Range": {
      "StartMode": {},
      "StartValue": {
        "StringValue": {},
        "BinaryValue": {},
        "BooleanValue": {},
        "NumberValue": {},
        "DatetimeValue": {}
      },
      "EndMode": {},
      "EndValue": {
        "StringValue": {},
        "BinaryValue": {},
        "BooleanValue": {},
        "NumberValue": {},
        "DatetimeValue": {}
      }
    }
  }
]
```

<h2 id="tocS_BatchListIndex">BatchListIndex</h2>
<!-- backwards compatibility -->
<a id="schemabatchlistindex"></a>
<a id="schema_BatchListIndex"></a>
<a id="tocSbatchlistindex"></a>
<a id="tocsbatchlistindex"></a>

```json
{
  "RangesOnIndexedValues": {},
  "IndexReference": {
    "Selector": {}
  },
  "MaxResults": {},
  "NextToken": {}
}
```

Lists objects attached to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>ListIndex</a> and <a>BatchReadRequest$Operations</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RangesOnIndexedValues|object|false|none|none|
|IndexReference|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_BatchListIndexResponse">BatchListIndexResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchlistindexresponse"></a>
<a id="schema_BatchListIndexResponse"></a>
<a id="tocSbatchlistindexresponse"></a>
<a id="tocsbatchlistindexresponse"></a>

```json
{
  "IndexAttachments": {},
  "NextToken": {}
}
```

Represents the output of a <a>ListIndex</a> response operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexAttachments|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_BatchListObjectAttributes">BatchListObjectAttributes</h2>
<!-- backwards compatibility -->
<a id="schemabatchlistobjectattributes"></a>
<a id="schema_BatchListObjectAttributes"></a>
<a id="tocSbatchlistobjectattributes"></a>
<a id="tocsbatchlistobjectattributes"></a>

```json
{
  "ObjectReference": {
    "Selector": {}
  },
  "NextToken": {},
  "MaxResults": {},
  "FacetFilter": {
    "SchemaArn": {},
    "FacetName": {}
  }
}
```

Represents the output of a <a>ListObjectAttributes</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectReference|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|FacetFilter|object|false|none|none|

<h2 id="tocS_BatchListObjectAttributesResponse">BatchListObjectAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchlistobjectattributesresponse"></a>
<a id="schema_BatchListObjectAttributesResponse"></a>
<a id="tocSbatchlistobjectattributesresponse"></a>
<a id="tocsbatchlistobjectattributesresponse"></a>

```json
{
  "Attributes": {},
  "NextToken": {}
}
```

Represents the output of a <a>ListObjectAttributes</a> response operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attributes|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_BatchListObjectChildren">BatchListObjectChildren</h2>
<!-- backwards compatibility -->
<a id="schemabatchlistobjectchildren"></a>
<a id="schema_BatchListObjectChildren"></a>
<a id="tocSbatchlistobjectchildren"></a>
<a id="tocsbatchlistobjectchildren"></a>

```json
{
  "ObjectReference": {
    "Selector": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

Represents the output of a <a>ListObjectChildren</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectReference|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_LinkNameToObjectIdentifierMap">LinkNameToObjectIdentifierMap</h2>
<!-- backwards compatibility -->
<a id="schemalinknametoobjectidentifiermap"></a>
<a id="schema_LinkNameToObjectIdentifierMap"></a>
<a id="tocSlinknametoobjectidentifiermap"></a>
<a id="tocslinknametoobjectidentifiermap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ObjectIdentifier](#schemaobjectidentifier)|false|none|none|

<h2 id="tocS_BatchListObjectChildrenResponse">BatchListObjectChildrenResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchlistobjectchildrenresponse"></a>
<a id="schema_BatchListObjectChildrenResponse"></a>
<a id="tocSbatchlistobjectchildrenresponse"></a>
<a id="tocsbatchlistobjectchildrenresponse"></a>

```json
{
  "Children": {
    "property1": "string",
    "property2": "string"
  },
  "NextToken": {}
}
```

Represents the output of a <a>ListObjectChildren</a> response operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Children|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_BatchListObjectParentPaths">BatchListObjectParentPaths</h2>
<!-- backwards compatibility -->
<a id="schemabatchlistobjectparentpaths"></a>
<a id="schema_BatchListObjectParentPaths"></a>
<a id="tocSbatchlistobjectparentpaths"></a>
<a id="tocsbatchlistobjectparentpaths"></a>

```json
{
  "ObjectReference": {
    "Selector": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects inside a <a>BatchRead</a> operation. For more information, see <a>ListObjectParentPaths</a> and <a>BatchReadRequest$Operations</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectReference|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_PathToObjectIdentifiersList">PathToObjectIdentifiersList</h2>
<!-- backwards compatibility -->
<a id="schemapathtoobjectidentifierslist"></a>
<a id="schema_PathToObjectIdentifiersList"></a>
<a id="tocSpathtoobjectidentifierslist"></a>
<a id="tocspathtoobjectidentifierslist"></a>

```json
[
  {
    "Path": {},
    "ObjectIdentifiers": {}
  }
]
```

<h2 id="tocS_BatchListObjectParentPathsResponse">BatchListObjectParentPathsResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchlistobjectparentpathsresponse"></a>
<a id="schema_BatchListObjectParentPathsResponse"></a>
<a id="tocSbatchlistobjectparentpathsresponse"></a>
<a id="tocsbatchlistobjectparentpathsresponse"></a>

```json
{
  "PathToObjectIdentifiersList": {},
  "NextToken": {}
}
```

Represents the output of a <a>ListObjectParentPaths</a> response operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PathToObjectIdentifiersList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_BatchListObjectParents">BatchListObjectParents</h2>
<!-- backwards compatibility -->
<a id="schemabatchlistobjectparents"></a>
<a id="schema_BatchListObjectParents"></a>
<a id="tocSbatchlistobjectparents"></a>
<a id="tocsbatchlistobjectparents"></a>

```json
{
  "ObjectReference": {
    "Selector": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

Lists parent objects that are associated with a given object in pagination fashion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectReference|[ObjectReference](#schemaobjectreference)|true|none|The reference that identifies an object.|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ObjectIdentifierAndLinkNameList">ObjectIdentifierAndLinkNameList</h2>
<!-- backwards compatibility -->
<a id="schemaobjectidentifierandlinknamelist"></a>
<a id="schema_ObjectIdentifierAndLinkNameList"></a>
<a id="tocSobjectidentifierandlinknamelist"></a>
<a id="tocsobjectidentifierandlinknamelist"></a>

```json
[
  {
    "ObjectIdentifier": {},
    "LinkName": {}
  }
]
```

<h2 id="tocS_BatchListObjectParentsResponse">BatchListObjectParentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchlistobjectparentsresponse"></a>
<a id="schema_BatchListObjectParentsResponse"></a>
<a id="tocSbatchlistobjectparentsresponse"></a>
<a id="tocsbatchlistobjectparentsresponse"></a>

```json
{
  "ParentLinks": {},
  "NextToken": {}
}
```

Represents the output of a <a>ListObjectParents</a> response operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParentLinks|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_BatchListObjectPolicies">BatchListObjectPolicies</h2>
<!-- backwards compatibility -->
<a id="schemabatchlistobjectpolicies"></a>
<a id="schema_BatchListObjectPolicies"></a>
<a id="tocSbatchlistobjectpolicies"></a>
<a id="tocsbatchlistobjectpolicies"></a>

```json
{
  "ObjectReference": {
    "Selector": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

Returns policies attached to an object in pagination fashion inside a <a>BatchRead</a> operation. For more information, see <a>ListObjectPolicies</a> and <a>BatchReadRequest$Operations</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectReference|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ObjectIdentifierList">ObjectIdentifierList</h2>
<!-- backwards compatibility -->
<a id="schemaobjectidentifierlist"></a>
<a id="schema_ObjectIdentifierList"></a>
<a id="tocSobjectidentifierlist"></a>
<a id="tocsobjectidentifierlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_BatchListObjectPoliciesResponse">BatchListObjectPoliciesResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchlistobjectpoliciesresponse"></a>
<a id="schema_BatchListObjectPoliciesResponse"></a>
<a id="tocSbatchlistobjectpoliciesresponse"></a>
<a id="tocsbatchlistobjectpoliciesresponse"></a>

```json
{
  "AttachedPolicyIds": {},
  "NextToken": {}
}
```

Represents the output of a <a>ListObjectPolicies</a> response operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttachedPolicyIds|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_BatchListOutgoingTypedLinks">BatchListOutgoingTypedLinks</h2>
<!-- backwards compatibility -->
<a id="schemabatchlistoutgoingtypedlinks"></a>
<a id="schema_BatchListOutgoingTypedLinks"></a>
<a id="tocSbatchlistoutgoingtypedlinks"></a>
<a id="tocsbatchlistoutgoingtypedlinks"></a>

```json
{
  "ObjectReference": {
    "Selector": {}
  },
  "FilterAttributeRanges": {},
  "FilterTypedLink": {
    "SchemaArn": {},
    "TypedLinkName": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListOutgoingTypedLinks</a> and <a>BatchReadRequest$Operations</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectReference|object|true|none|none|
|FilterAttributeRanges|object|false|none|none|
|FilterTypedLink|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_BatchListOutgoingTypedLinksResponse">BatchListOutgoingTypedLinksResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchlistoutgoingtypedlinksresponse"></a>
<a id="schema_BatchListOutgoingTypedLinksResponse"></a>
<a id="tocSbatchlistoutgoingtypedlinksresponse"></a>
<a id="tocsbatchlistoutgoingtypedlinksresponse"></a>

```json
{
  "TypedLinkSpecifiers": {},
  "NextToken": {}
}
```

Represents the output of a <a>ListOutgoingTypedLinks</a> response operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TypedLinkSpecifiers|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_BatchListPolicyAttachments">BatchListPolicyAttachments</h2>
<!-- backwards compatibility -->
<a id="schemabatchlistpolicyattachments"></a>
<a id="schema_BatchListPolicyAttachments"></a>
<a id="tocSbatchlistpolicyattachments"></a>
<a id="tocsbatchlistpolicyattachments"></a>

```json
{
  "PolicyReference": {
    "Selector": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached inside a <a>BatchRead</a> operation. For more information, see <a>ListPolicyAttachments</a> and <a>BatchReadRequest$Operations</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyReference|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_BatchListPolicyAttachmentsResponse">BatchListPolicyAttachmentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchlistpolicyattachmentsresponse"></a>
<a id="schema_BatchListPolicyAttachmentsResponse"></a>
<a id="tocSbatchlistpolicyattachmentsresponse"></a>
<a id="tocsbatchlistpolicyattachmentsresponse"></a>

```json
{
  "ObjectIdentifiers": {},
  "NextToken": {}
}
```

Represents the output of a <a>ListPolicyAttachments</a> response operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectIdentifiers|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_BatchLookupPolicy">BatchLookupPolicy</h2>
<!-- backwards compatibility -->
<a id="schemabatchlookuppolicy"></a>
<a id="schema_BatchLookupPolicy"></a>
<a id="tocSbatchlookuppolicy"></a>
<a id="tocsbatchlookuppolicy"></a>

```json
{
  "ObjectReference": {
    "Selector": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

Lists all policies from the root of the Directory to the object specified inside a <a>BatchRead</a> operation. For more information, see <a>LookupPolicy</a> and <a>BatchReadRequest$Operations</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectReference|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_PolicyToPathList">PolicyToPathList</h2>
<!-- backwards compatibility -->
<a id="schemapolicytopathlist"></a>
<a id="schema_PolicyToPathList"></a>
<a id="tocSpolicytopathlist"></a>
<a id="tocspolicytopathlist"></a>

```json
[
  {
    "Path": {},
    "Policies": {}
  }
]
```

<h2 id="tocS_BatchLookupPolicyResponse">BatchLookupPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchlookuppolicyresponse"></a>
<a id="schema_BatchLookupPolicyResponse"></a>
<a id="tocSbatchlookuppolicyresponse"></a>
<a id="tocsbatchlookuppolicyresponse"></a>

```json
{
  "PolicyToPathList": {},
  "NextToken": {}
}
```

Represents the output of a <a>LookupPolicy</a> response operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyToPathList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_BatchReadExceptionType">BatchReadExceptionType</h2>
<!-- backwards compatibility -->
<a id="schemabatchreadexceptiontype"></a>
<a id="schema_BatchReadExceptionType"></a>
<a id="tocSbatchreadexceptiontype"></a>
<a id="tocsbatchreadexceptiontype"></a>

```json
"ValidationException"
```

<h2 id="tocS_ExceptionMessage">ExceptionMessage</h2>
<!-- backwards compatibility -->
<a id="schemaexceptionmessage"></a>
<a id="schema_ExceptionMessage"></a>
<a id="tocSexceptionmessage"></a>
<a id="tocsexceptionmessage"></a>

```json
"string"
```

<h2 id="tocS_BatchReadException">BatchReadException</h2>
<!-- backwards compatibility -->
<a id="schemabatchreadexception"></a>
<a id="schema_BatchReadException"></a>
<a id="tocSbatchreadexception"></a>
<a id="tocsbatchreadexception"></a>

```json
{
  "Type": {},
  "Message": {}
}
```

The batch read exception structure, which contains the exception type and message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|Message|object|false|none|none|

<h2 id="tocS_BatchReadOperationList">BatchReadOperationList</h2>
<!-- backwards compatibility -->
<a id="schemabatchreadoperationlist"></a>
<a id="schema_BatchReadOperationList"></a>
<a id="tocSbatchreadoperationlist"></a>
<a id="tocsbatchreadoperationlist"></a>

```json
[
  {
    "ListObjectAttributes": {
      "ObjectReference": {
        "Selector": {}
      },
      "NextToken": {},
      "MaxResults": {},
      "FacetFilter": {
        "SchemaArn": {},
        "FacetName": {}
      }
    },
    "ListObjectChildren": {
      "ObjectReference": {
        "Selector": {}
      },
      "NextToken": {},
      "MaxResults": {}
    },
    "ListAttachedIndices": {
      "TargetReference": {
        "Selector": {}
      },
      "NextToken": {},
      "MaxResults": {}
    },
    "ListObjectParentPaths": {
      "ObjectReference": {
        "Selector": {}
      },
      "NextToken": {},
      "MaxResults": {}
    },
    "GetObjectInformation": {
      "ObjectReference": {
        "Selector": {}
      }
    },
    "GetObjectAttributes": {
      "ObjectReference": {
        "Selector": {}
      },
      "SchemaFacet": {
        "SchemaArn": {},
        "FacetName": {}
      },
      "AttributeNames": {}
    },
    "ListObjectParents": {
      "ObjectReference": {
        "Selector": {}
      },
      "NextToken": {},
      "MaxResults": {}
    },
    "ListObjectPolicies": {
      "ObjectReference": {
        "Selector": {}
      },
      "NextToken": {},
      "MaxResults": {}
    },
    "ListPolicyAttachments": {
      "PolicyReference": {
        "Selector": {}
      },
      "NextToken": {},
      "MaxResults": {}
    },
    "LookupPolicy": {
      "ObjectReference": {
        "Selector": {}
      },
      "NextToken": {},
      "MaxResults": {}
    },
    "ListIndex": {
      "RangesOnIndexedValues": {},
      "IndexReference": {
        "Selector": {}
      },
      "MaxResults": {},
      "NextToken": {}
    },
    "ListOutgoingTypedLinks": {
      "ObjectReference": {
        "Selector": {}
      },
      "FilterAttributeRanges": {},
      "FilterTypedLink": {
        "SchemaArn": {},
        "TypedLinkName": {}
      },
      "NextToken": {},
      "MaxResults": {}
    },
    "ListIncomingTypedLinks": {
      "ObjectReference": {
        "Selector": {}
      },
      "FilterAttributeRanges": {},
      "FilterTypedLink": {
        "SchemaArn": {},
        "TypedLinkName": {}
      },
      "NextToken": {},
      "MaxResults": {}
    },
    "GetLinkAttributes": {
      "TypedLinkSpecifier": {
        "TypedLinkFacet": {
          "SchemaArn": {},
          "TypedLinkName": {}
        },
        "SourceObjectReference": {
          "Selector": {}
        },
        "TargetObjectReference": {
          "Selector": {}
        },
        "IdentityAttributeValues": {}
      },
      "AttributeNames": {}
    }
  }
]
```

<h2 id="tocS_BatchReadSuccessfulResponse">BatchReadSuccessfulResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchreadsuccessfulresponse"></a>
<a id="schema_BatchReadSuccessfulResponse"></a>
<a id="tocSbatchreadsuccessfulresponse"></a>
<a id="tocsbatchreadsuccessfulresponse"></a>

```json
{
  "ListObjectAttributes": {
    "Attributes": {},
    "NextToken": {}
  },
  "ListObjectChildren": {
    "Children": {
      "property1": "string",
      "property2": "string"
    },
    "NextToken": {}
  },
  "GetObjectInformation": {
    "SchemaFacets": {},
    "ObjectIdentifier": {}
  },
  "GetObjectAttributes": {
    "Attributes": {}
  },
  "ListAttachedIndices": {
    "IndexAttachments": {},
    "NextToken": {}
  },
  "ListObjectParentPaths": {
    "PathToObjectIdentifiersList": {},
    "NextToken": {}
  },
  "ListObjectPolicies": {
    "AttachedPolicyIds": {},
    "NextToken": {}
  },
  "ListPolicyAttachments": {
    "ObjectIdentifiers": {},
    "NextToken": {}
  },
  "LookupPolicy": {
    "PolicyToPathList": {},
    "NextToken": {}
  },
  "ListIndex": {
    "IndexAttachments": {},
    "NextToken": {}
  },
  "ListOutgoingTypedLinks": {
    "TypedLinkSpecifiers": {},
    "NextToken": {}
  },
  "ListIncomingTypedLinks": {
    "LinkSpecifiers": {},
    "NextToken": {}
  },
  "GetLinkAttributes": {
    "Attributes": {}
  },
  "ListObjectParents": {
    "ParentLinks": {},
    "NextToken": {}
  }
}
```

Represents the output of a <code>BatchRead</code> success response operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ListObjectAttributes|object|false|none|none|
|ListObjectChildren|object|false|none|none|
|GetObjectInformation|object|false|none|none|
|GetObjectAttributes|object|false|none|none|
|ListAttachedIndices|object|false|none|none|
|ListObjectParentPaths|object|false|none|none|
|ListObjectPolicies|object|false|none|none|
|ListPolicyAttachments|object|false|none|none|
|LookupPolicy|object|false|none|none|
|ListIndex|object|false|none|none|
|ListOutgoingTypedLinks|object|false|none|none|
|ListIncomingTypedLinks|object|false|none|none|
|GetLinkAttributes|object|false|none|none|
|ListObjectParents|object|false|none|none|

<h2 id="tocS_BatchReadOperationResponse">BatchReadOperationResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchreadoperationresponse"></a>
<a id="schema_BatchReadOperationResponse"></a>
<a id="tocSbatchreadoperationresponse"></a>
<a id="tocsbatchreadoperationresponse"></a>

```json
{
  "SuccessfulResponse": {
    "ListObjectAttributes": {
      "Attributes": {},
      "NextToken": {}
    },
    "ListObjectChildren": {
      "Children": {
        "property1": "string",
        "property2": "string"
      },
      "NextToken": {}
    },
    "GetObjectInformation": {
      "SchemaFacets": {},
      "ObjectIdentifier": {}
    },
    "GetObjectAttributes": {
      "Attributes": {}
    },
    "ListAttachedIndices": {
      "IndexAttachments": {},
      "NextToken": {}
    },
    "ListObjectParentPaths": {
      "PathToObjectIdentifiersList": {},
      "NextToken": {}
    },
    "ListObjectPolicies": {
      "AttachedPolicyIds": {},
      "NextToken": {}
    },
    "ListPolicyAttachments": {
      "ObjectIdentifiers": {},
      "NextToken": {}
    },
    "LookupPolicy": {
      "PolicyToPathList": {},
      "NextToken": {}
    },
    "ListIndex": {
      "IndexAttachments": {},
      "NextToken": {}
    },
    "ListOutgoingTypedLinks": {
      "TypedLinkSpecifiers": {},
      "NextToken": {}
    },
    "ListIncomingTypedLinks": {
      "LinkSpecifiers": {},
      "NextToken": {}
    },
    "GetLinkAttributes": {
      "Attributes": {}
    },
    "ListObjectParents": {
      "ParentLinks": {},
      "NextToken": {}
    }
  },
  "ExceptionResponse": {
    "Type": {},
    "Message": {}
  }
}
```

Represents the output of a <code>BatchRead</code> response operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SuccessfulResponse|object|false|none|none|
|ExceptionResponse|object|false|none|none|

<h2 id="tocS_BatchReadOperationResponseList">BatchReadOperationResponseList</h2>
<!-- backwards compatibility -->
<a id="schemabatchreadoperationresponselist"></a>
<a id="schema_BatchReadOperationResponseList"></a>
<a id="tocSbatchreadoperationresponselist"></a>
<a id="tocsbatchreadoperationresponselist"></a>

```json
[
  {
    "SuccessfulResponse": {
      "ListObjectAttributes": {
        "Attributes": {},
        "NextToken": {}
      },
      "ListObjectChildren": {
        "Children": {
          "property1": "string",
          "property2": "string"
        },
        "NextToken": {}
      },
      "GetObjectInformation": {
        "SchemaFacets": {},
        "ObjectIdentifier": {}
      },
      "GetObjectAttributes": {
        "Attributes": {}
      },
      "ListAttachedIndices": {
        "IndexAttachments": {},
        "NextToken": {}
      },
      "ListObjectParentPaths": {
        "PathToObjectIdentifiersList": {},
        "NextToken": {}
      },
      "ListObjectPolicies": {
        "AttachedPolicyIds": {},
        "NextToken": {}
      },
      "ListPolicyAttachments": {
        "ObjectIdentifiers": {},
        "NextToken": {}
      },
      "LookupPolicy": {
        "PolicyToPathList": {},
        "NextToken": {}
      },
      "ListIndex": {
        "IndexAttachments": {},
        "NextToken": {}
      },
      "ListOutgoingTypedLinks": {
        "TypedLinkSpecifiers": {},
        "NextToken": {}
      },
      "ListIncomingTypedLinks": {
        "LinkSpecifiers": {},
        "NextToken": {}
      },
      "GetLinkAttributes": {
        "Attributes": {}
      },
      "ListObjectParents": {
        "ParentLinks": {},
        "NextToken": {}
      }
    },
    "ExceptionResponse": {
      "Type": {},
      "Message": {}
    }
  }
]
```

<h2 id="tocS_ConsistencyLevel">ConsistencyLevel</h2>
<!-- backwards compatibility -->
<a id="schemaconsistencylevel"></a>
<a id="schema_ConsistencyLevel"></a>
<a id="tocSconsistencylevel"></a>
<a id="tocsconsistencylevel"></a>

```json
"SERIALIZABLE"
```

<h2 id="tocS_BatchReadRequest">BatchReadRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchreadrequest"></a>
<a id="schema_BatchReadRequest"></a>
<a id="tocSbatchreadrequest"></a>
<a id="tocsbatchreadrequest"></a>

```json
{
  "Operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Operations|object|true|none|none|

<h2 id="tocS_BatchRemoveFacetFromObject">BatchRemoveFacetFromObject</h2>
<!-- backwards compatibility -->
<a id="schemabatchremovefacetfromobject"></a>
<a id="schema_BatchRemoveFacetFromObject"></a>
<a id="tocSbatchremovefacetfromobject"></a>
<a id="tocsbatchremovefacetfromobject"></a>

```json
{
  "SchemaFacet": {
    "SchemaArn": {},
    "FacetName": {}
  },
  "ObjectReference": {
    "Selector": {}
  }
}
```

A batch operation to remove a facet from an object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemaFacet|object|true|none|none|
|ObjectReference|object|true|none|none|

<h2 id="tocS_BatchRemoveFacetFromObjectResponse">BatchRemoveFacetFromObjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchremovefacetfromobjectresponse"></a>
<a id="schema_BatchRemoveFacetFromObjectResponse"></a>
<a id="tocSbatchremovefacetfromobjectresponse"></a>
<a id="tocsbatchremovefacetfromobjectresponse"></a>

```json
{}
```

An empty result that represents success.

<h2 id="tocS_LinkAttributeUpdateList">LinkAttributeUpdateList</h2>
<!-- backwards compatibility -->
<a id="schemalinkattributeupdatelist"></a>
<a id="schema_LinkAttributeUpdateList"></a>
<a id="tocSlinkattributeupdatelist"></a>
<a id="tocslinkattributeupdatelist"></a>

```json
[
  {
    "AttributeKey": {
      "SchemaArn": {},
      "FacetName": {},
      "Name": {}
    },
    "AttributeAction": {
      "AttributeActionType": {},
      "AttributeUpdateValue": {
        "StringValue": {},
        "BinaryValue": {},
        "BooleanValue": {},
        "NumberValue": {},
        "DatetimeValue": {}
      }
    }
  }
]
```

<h2 id="tocS_BatchUpdateLinkAttributes">BatchUpdateLinkAttributes</h2>
<!-- backwards compatibility -->
<a id="schemabatchupdatelinkattributes"></a>
<a id="schema_BatchUpdateLinkAttributes"></a>
<a id="tocSbatchupdatelinkattributes"></a>
<a id="tocsbatchupdatelinkattributes"></a>

```json
{
  "TypedLinkSpecifier": {
    "TypedLinkFacet": {
      "SchemaArn": {},
      "TypedLinkName": {}
    },
    "SourceObjectReference": {
      "Selector": {}
    },
    "TargetObjectReference": {
      "Selector": {}
    },
    "IdentityAttributeValues": {}
  },
  "AttributeUpdates": {}
}
```

Updates a given typed link’s attributes inside a <a>BatchRead</a> operation. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>. For more information, see <a>UpdateLinkAttributes</a> and <a>BatchReadRequest$Operations</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TypedLinkSpecifier|object|true|none|none|
|AttributeUpdates|object|true|none|none|

<h2 id="tocS_BatchUpdateLinkAttributesResponse">BatchUpdateLinkAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchupdatelinkattributesresponse"></a>
<a id="schema_BatchUpdateLinkAttributesResponse"></a>
<a id="tocSbatchupdatelinkattributesresponse"></a>
<a id="tocsbatchupdatelinkattributesresponse"></a>

```json
{}
```

Represents the output of a <a>UpdateLinkAttributes</a> response operation.

<h2 id="tocS_ObjectAttributeUpdateList">ObjectAttributeUpdateList</h2>
<!-- backwards compatibility -->
<a id="schemaobjectattributeupdatelist"></a>
<a id="schema_ObjectAttributeUpdateList"></a>
<a id="tocSobjectattributeupdatelist"></a>
<a id="tocsobjectattributeupdatelist"></a>

```json
[
  {
    "ObjectAttributeKey": {
      "SchemaArn": {},
      "FacetName": {},
      "Name": {}
    },
    "ObjectAttributeAction": {
      "ObjectAttributeActionType": {},
      "ObjectAttributeUpdateValue": {
        "StringValue": {},
        "BinaryValue": {},
        "BooleanValue": {},
        "NumberValue": {},
        "DatetimeValue": {}
      }
    }
  }
]
```

<h2 id="tocS_BatchUpdateObjectAttributes">BatchUpdateObjectAttributes</h2>
<!-- backwards compatibility -->
<a id="schemabatchupdateobjectattributes"></a>
<a id="schema_BatchUpdateObjectAttributes"></a>
<a id="tocSbatchupdateobjectattributes"></a>
<a id="tocsbatchupdateobjectattributes"></a>

```json
{
  "ObjectReference": {
    "Selector": {}
  },
  "AttributeUpdates": {}
}
```

Represents the output of a <code>BatchUpdate</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectReference|object|true|none|none|
|AttributeUpdates|object|true|none|none|

<h2 id="tocS_BatchUpdateObjectAttributesResponse">BatchUpdateObjectAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchupdateobjectattributesresponse"></a>
<a id="schema_BatchUpdateObjectAttributesResponse"></a>
<a id="tocSbatchupdateobjectattributesresponse"></a>
<a id="tocsbatchupdateobjectattributesresponse"></a>

```json
{
  "ObjectIdentifier": {}
}
```

Represents the output of a <code>BatchUpdate</code> response operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectIdentifier|object|false|none|none|

<h2 id="tocS_BatchWriteOperationList">BatchWriteOperationList</h2>
<!-- backwards compatibility -->
<a id="schemabatchwriteoperationlist"></a>
<a id="schema_BatchWriteOperationList"></a>
<a id="tocSbatchwriteoperationlist"></a>
<a id="tocsbatchwriteoperationlist"></a>

```json
[
  {
    "CreateObject": {
      "SchemaFacet": {},
      "ObjectAttributeList": {},
      "ParentReference": {
        "Selector": {}
      },
      "LinkName": {},
      "BatchReferenceName": {}
    },
    "AttachObject": {
      "ParentReference": {
        "Selector": {}
      },
      "ChildReference": {
        "Selector": {}
      },
      "LinkName": {}
    },
    "DetachObject": {
      "ParentReference": {
        "Selector": {}
      },
      "LinkName": {},
      "BatchReferenceName": {}
    },
    "UpdateObjectAttributes": {
      "ObjectReference": {
        "Selector": {}
      },
      "AttributeUpdates": {}
    },
    "DeleteObject": {
      "ObjectReference": {
        "Selector": {}
      }
    },
    "AddFacetToObject": {
      "SchemaFacet": {
        "SchemaArn": {},
        "FacetName": {}
      },
      "ObjectAttributeList": {},
      "ObjectReference": {
        "Selector": {}
      }
    },
    "RemoveFacetFromObject": {
      "SchemaFacet": {
        "SchemaArn": {},
        "FacetName": {}
      },
      "ObjectReference": {
        "Selector": {}
      }
    },
    "AttachPolicy": {
      "PolicyReference": {
        "Selector": {}
      },
      "ObjectReference": {
        "Selector": {}
      }
    },
    "DetachPolicy": {
      "PolicyReference": {
        "Selector": {}
      },
      "ObjectReference": {
        "Selector": {}
      }
    },
    "CreateIndex": {
      "OrderedIndexedAttributeList": {},
      "IsUnique": {},
      "ParentReference": {
        "Selector": {}
      },
      "LinkName": {},
      "BatchReferenceName": {}
    },
    "AttachToIndex": {
      "IndexReference": {
        "Selector": {}
      },
      "TargetReference": {
        "Selector": {}
      }
    },
    "DetachFromIndex": {
      "IndexReference": {
        "Selector": {}
      },
      "TargetReference": {
        "Selector": {}
      }
    },
    "AttachTypedLink": {
      "SourceObjectReference": {
        "Selector": {}
      },
      "TargetObjectReference": {
        "Selector": {}
      },
      "TypedLinkFacet": {
        "SchemaArn": {},
        "TypedLinkName": {}
      },
      "Attributes": {}
    },
    "DetachTypedLink": {
      "TypedLinkSpecifier": {
        "TypedLinkFacet": {
          "SchemaArn": {},
          "TypedLinkName": {}
        },
        "SourceObjectReference": {
          "Selector": {}
        },
        "TargetObjectReference": {
          "Selector": {}
        },
        "IdentityAttributeValues": {}
      }
    },
    "UpdateLinkAttributes": {
      "TypedLinkSpecifier": {
        "TypedLinkFacet": {
          "SchemaArn": {},
          "TypedLinkName": {}
        },
        "SourceObjectReference": {
          "Selector": {}
        },
        "TargetObjectReference": {
          "Selector": {}
        },
        "IdentityAttributeValues": {}
      },
      "AttributeUpdates": {}
    }
  }
]
```

<h2 id="tocS_BatchWriteOperationResponse">BatchWriteOperationResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchwriteoperationresponse"></a>
<a id="schema_BatchWriteOperationResponse"></a>
<a id="tocSbatchwriteoperationresponse"></a>
<a id="tocsbatchwriteoperationresponse"></a>

```json
{
  "CreateObject": {
    "ObjectIdentifier": {}
  },
  "AttachObject": {
    "attachedObjectIdentifier": {}
  },
  "DetachObject": {
    "detachedObjectIdentifier": {}
  },
  "UpdateObjectAttributes": {
    "ObjectIdentifier": {}
  },
  "DeleteObject": {},
  "AddFacetToObject": {},
  "RemoveFacetFromObject": {},
  "AttachPolicy": {},
  "DetachPolicy": {},
  "CreateIndex": {
    "ObjectIdentifier": {}
  },
  "AttachToIndex": {
    "AttachedObjectIdentifier": {}
  },
  "DetachFromIndex": {
    "DetachedObjectIdentifier": {}
  },
  "AttachTypedLink": {
    "TypedLinkSpecifier": {
      "TypedLinkFacet": {
        "SchemaArn": {},
        "TypedLinkName": {}
      },
      "SourceObjectReference": {
        "Selector": {}
      },
      "TargetObjectReference": {
        "Selector": {}
      },
      "IdentityAttributeValues": {}
    }
  },
  "DetachTypedLink": {},
  "UpdateLinkAttributes": {}
}
```

Represents the output of a <code>BatchWrite</code> response operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreateObject|object|false|none|none|
|AttachObject|object|false|none|none|
|DetachObject|object|false|none|none|
|UpdateObjectAttributes|object|false|none|none|
|DeleteObject|object|false|none|none|
|AddFacetToObject|object|false|none|none|
|RemoveFacetFromObject|object|false|none|none|
|AttachPolicy|object|false|none|none|
|DetachPolicy|object|false|none|none|
|CreateIndex|object|false|none|none|
|AttachToIndex|object|false|none|none|
|DetachFromIndex|object|false|none|none|
|AttachTypedLink|object|false|none|none|
|DetachTypedLink|object|false|none|none|
|UpdateLinkAttributes|object|false|none|none|

<h2 id="tocS_BatchWriteOperationResponseList">BatchWriteOperationResponseList</h2>
<!-- backwards compatibility -->
<a id="schemabatchwriteoperationresponselist"></a>
<a id="schema_BatchWriteOperationResponseList"></a>
<a id="tocSbatchwriteoperationresponselist"></a>
<a id="tocsbatchwriteoperationresponselist"></a>

```json
[
  {
    "CreateObject": {
      "ObjectIdentifier": {}
    },
    "AttachObject": {
      "attachedObjectIdentifier": {}
    },
    "DetachObject": {
      "detachedObjectIdentifier": {}
    },
    "UpdateObjectAttributes": {
      "ObjectIdentifier": {}
    },
    "DeleteObject": {},
    "AddFacetToObject": {},
    "RemoveFacetFromObject": {},
    "AttachPolicy": {},
    "DetachPolicy": {},
    "CreateIndex": {
      "ObjectIdentifier": {}
    },
    "AttachToIndex": {
      "AttachedObjectIdentifier": {}
    },
    "DetachFromIndex": {
      "DetachedObjectIdentifier": {}
    },
    "AttachTypedLink": {
      "TypedLinkSpecifier": {
        "TypedLinkFacet": {
          "SchemaArn": {},
          "TypedLinkName": {}
        },
        "SourceObjectReference": {
          "Selector": {}
        },
        "TargetObjectReference": {
          "Selector": {}
        },
        "IdentityAttributeValues": {}
      }
    },
    "DetachTypedLink": {},
    "UpdateLinkAttributes": {}
  }
]
```

<h2 id="tocS_BatchWriteRequest">BatchWriteRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchwriterequest"></a>
<a id="schema_BatchWriteRequest"></a>
<a id="tocSbatchwriterequest"></a>
<a id="tocsbatchwriterequest"></a>

```json
{
  "Operations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Operations|object|true|none|none|

<h2 id="tocS_BinaryAttributeValue">BinaryAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemabinaryattributevalue"></a>
<a id="schema_BinaryAttributeValue"></a>
<a id="tocSbinaryattributevalue"></a>
<a id="tocsbinaryattributevalue"></a>

```json
"string"
```

<h2 id="tocS_BooleanAttributeValue">BooleanAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemabooleanattributevalue"></a>
<a id="schema_BooleanAttributeValue"></a>
<a id="tocSbooleanattributevalue"></a>
<a id="tocsbooleanattributevalue"></a>

```json
true
```

<h2 id="tocS_DirectoryName">DirectoryName</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryname"></a>
<a id="schema_DirectoryName"></a>
<a id="tocSdirectoryname"></a>
<a id="tocsdirectoryname"></a>

```json
"string"
```

<h2 id="tocS_CreateDirectoryRequest">CreateDirectoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedirectoryrequest"></a>
<a id="schema_CreateDirectoryRequest"></a>
<a id="tocScreatedirectoryrequest"></a>
<a id="tocscreatedirectoryrequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_DirectoryArn">DirectoryArn</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryarn"></a>
<a id="schema_DirectoryArn"></a>
<a id="tocSdirectoryarn"></a>
<a id="tocsdirectoryarn"></a>

```json
"string"
```

<h2 id="tocS_FacetAttributeList">FacetAttributeList</h2>
<!-- backwards compatibility -->
<a id="schemafacetattributelist"></a>
<a id="schema_FacetAttributeList"></a>
<a id="tocSfacetattributelist"></a>
<a id="tocsfacetattributelist"></a>

```json
[
  {
    "Name": {},
    "AttributeDefinition": {
      "Type": {},
      "DefaultValue": {
        "StringValue": {},
        "BinaryValue": {},
        "BooleanValue": {},
        "NumberValue": {},
        "DatetimeValue": {}
      },
      "IsImmutable": {},
      "Rules": {
        "property1": {
          "Type": {},
          "Parameters": {
            "property1": "string",
            "property2": "string"
          }
        },
        "property2": {
          "Type": {},
          "Parameters": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    },
    "AttributeReference": {
      "TargetFacetName": {},
      "TargetAttributeName": {}
    },
    "RequiredBehavior": {}
  }
]
```

<h2 id="tocS_ObjectType">ObjectType</h2>
<!-- backwards compatibility -->
<a id="schemaobjecttype"></a>
<a id="schema_ObjectType"></a>
<a id="tocSobjecttype"></a>
<a id="tocsobjecttype"></a>

```json
"NODE"
```

<h2 id="tocS_FacetStyle">FacetStyle</h2>
<!-- backwards compatibility -->
<a id="schemafacetstyle"></a>
<a id="schema_FacetStyle"></a>
<a id="tocSfacetstyle"></a>
<a id="tocsfacetstyle"></a>

```json
"STATIC"
```

<h2 id="tocS_CreateFacetRequest">CreateFacetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatefacetrequest"></a>
<a id="schema_CreateFacetRequest"></a>
<a id="tocScreatefacetrequest"></a>
<a id="tocscreatefacetrequest"></a>

```json
{
  "Name": {},
  "Attributes": {},
  "ObjectType": {},
  "FacetStyle": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Attributes|object|false|none|none|
|ObjectType|object|false|none|none|
|FacetStyle|object|false|none|none|

<h2 id="tocS_CreateIndexRequest">CreateIndexRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateindexrequest"></a>
<a id="schema_CreateIndexRequest"></a>
<a id="tocScreateindexrequest"></a>
<a id="tocscreateindexrequest"></a>

```json
{
  "OrderedIndexedAttributeList": {},
  "IsUnique": {},
  "ParentReference": {
    "Selector": {}
  },
  "LinkName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrderedIndexedAttributeList|object|true|none|none|
|IsUnique|object|true|none|none|
|ParentReference|object|false|none|none|
|LinkName|object|false|none|none|

<h2 id="tocS_CreateObjectRequest">CreateObjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateobjectrequest"></a>
<a id="schema_CreateObjectRequest"></a>
<a id="tocScreateobjectrequest"></a>
<a id="tocscreateobjectrequest"></a>

```json
{
  "SchemaFacets": {},
  "ObjectAttributeList": {},
  "ParentReference": {
    "Selector": {}
  },
  "LinkName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemaFacets|object|true|none|none|
|ObjectAttributeList|object|false|none|none|
|ParentReference|object|false|none|none|
|LinkName|object|false|none|none|

<h2 id="tocS_SchemaName">SchemaName</h2>
<!-- backwards compatibility -->
<a id="schemaschemaname"></a>
<a id="schema_SchemaName"></a>
<a id="tocSschemaname"></a>
<a id="tocsschemaname"></a>

```json
"string"
```

<h2 id="tocS_CreateSchemaRequest">CreateSchemaRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateschemarequest"></a>
<a id="schema_CreateSchemaRequest"></a>
<a id="tocScreateschemarequest"></a>
<a id="tocscreateschemarequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_TypedLinkFacet">TypedLinkFacet</h2>
<!-- backwards compatibility -->
<a id="schematypedlinkfacet"></a>
<a id="schema_TypedLinkFacet"></a>
<a id="tocStypedlinkfacet"></a>
<a id="tocstypedlinkfacet"></a>

```json
{
  "Name": {},
  "Attributes": {},
  "IdentityAttributeOrder": {}
}
```

Defines the typed links structure and its attributes. To create a typed link facet, use the <a>CreateTypedLinkFacet</a> API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Attributes|object|true|none|none|
|IdentityAttributeOrder|object|true|none|none|

<h2 id="tocS_CreateTypedLinkFacetRequest">CreateTypedLinkFacetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatetypedlinkfacetrequest"></a>
<a id="schema_CreateTypedLinkFacetRequest"></a>
<a id="tocScreatetypedlinkfacetrequest"></a>
<a id="tocscreatetypedlinkfacetrequest"></a>

```json
{
  "Facet": {
    "Name": {},
    "Attributes": {},
    "IdentityAttributeOrder": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Facet|object|true|none|none|

<h2 id="tocS_Date">Date</h2>
<!-- backwards compatibility -->
<a id="schemadate"></a>
<a id="schema_Date"></a>
<a id="tocSdate"></a>
<a id="tocsdate"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_DatetimeAttributeValue">DatetimeAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemadatetimeattributevalue"></a>
<a id="schema_DatetimeAttributeValue"></a>
<a id="tocSdatetimeattributevalue"></a>
<a id="tocsdatetimeattributevalue"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_DeleteDirectoryRequest">DeleteDirectoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedirectoryrequest"></a>
<a id="schema_DeleteDirectoryRequest"></a>
<a id="tocSdeletedirectoryrequest"></a>
<a id="tocsdeletedirectoryrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteFacetRequest">DeleteFacetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletefacetrequest"></a>
<a id="schema_DeleteFacetRequest"></a>
<a id="tocSdeletefacetrequest"></a>
<a id="tocsdeletefacetrequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_DeleteObjectRequest">DeleteObjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteobjectrequest"></a>
<a id="schema_DeleteObjectRequest"></a>
<a id="tocSdeleteobjectrequest"></a>
<a id="tocsdeleteobjectrequest"></a>

```json
{
  "ObjectReference": {
    "Selector": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectReference|object|true|none|none|

<h2 id="tocS_DeleteSchemaRequest">DeleteSchemaRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteschemarequest"></a>
<a id="schema_DeleteSchemaRequest"></a>
<a id="tocSdeleteschemarequest"></a>
<a id="tocsdeleteschemarequest"></a>

```json
{}
```

<h2 id="tocS_DeleteTypedLinkFacetRequest">DeleteTypedLinkFacetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletetypedlinkfacetrequest"></a>
<a id="schema_DeleteTypedLinkFacetRequest"></a>
<a id="tocSdeletetypedlinkfacetrequest"></a>
<a id="tocsdeletetypedlinkfacetrequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_DetachFromIndexRequest">DetachFromIndexRequest</h2>
<!-- backwards compatibility -->
<a id="schemadetachfromindexrequest"></a>
<a id="schema_DetachFromIndexRequest"></a>
<a id="tocSdetachfromindexrequest"></a>
<a id="tocsdetachfromindexrequest"></a>

```json
{
  "IndexReference": {
    "Selector": {}
  },
  "TargetReference": {
    "Selector": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexReference|object|true|none|none|
|TargetReference|object|true|none|none|

<h2 id="tocS_DetachObjectRequest">DetachObjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemadetachobjectrequest"></a>
<a id="schema_DetachObjectRequest"></a>
<a id="tocSdetachobjectrequest"></a>
<a id="tocsdetachobjectrequest"></a>

```json
{
  "ParentReference": {
    "Selector": {}
  },
  "LinkName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParentReference|object|true|none|none|
|LinkName|object|true|none|none|

<h2 id="tocS_DetachPolicyRequest">DetachPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadetachpolicyrequest"></a>
<a id="schema_DetachPolicyRequest"></a>
<a id="tocSdetachpolicyrequest"></a>
<a id="tocsdetachpolicyrequest"></a>

```json
{
  "PolicyReference": {
    "Selector": {}
  },
  "ObjectReference": {
    "Selector": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyReference|object|true|none|none|
|ObjectReference|object|true|none|none|

<h2 id="tocS_DetachTypedLinkRequest">DetachTypedLinkRequest</h2>
<!-- backwards compatibility -->
<a id="schemadetachtypedlinkrequest"></a>
<a id="schema_DetachTypedLinkRequest"></a>
<a id="tocSdetachtypedlinkrequest"></a>
<a id="tocsdetachtypedlinkrequest"></a>

```json
{
  "TypedLinkSpecifier": {
    "TypedLinkFacet": {
      "SchemaArn": {},
      "TypedLinkName": {}
    },
    "SourceObjectReference": {
      "Selector": {}
    },
    "TargetObjectReference": {
      "Selector": {}
    },
    "IdentityAttributeValues": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TypedLinkSpecifier|object|true|none|none|

<h2 id="tocS_DirectoryState">DirectoryState</h2>
<!-- backwards compatibility -->
<a id="schemadirectorystate"></a>
<a id="schema_DirectoryState"></a>
<a id="tocSdirectorystate"></a>
<a id="tocsdirectorystate"></a>

```json
"ENABLED"
```

<h2 id="tocS_Directory">Directory</h2>
<!-- backwards compatibility -->
<a id="schemadirectory"></a>
<a id="schema_Directory"></a>
<a id="tocSdirectory"></a>
<a id="tocsdirectory"></a>

```json
{
  "Name": {},
  "DirectoryArn": {},
  "State": {},
  "CreationDateTime": {}
}
```

Directory structure that includes the directory name and directory ARN.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|DirectoryArn|object|false|none|none|
|State|object|false|none|none|
|CreationDateTime|object|false|none|none|

<h2 id="tocS_DirectoryList">DirectoryList</h2>
<!-- backwards compatibility -->
<a id="schemadirectorylist"></a>
<a id="schema_DirectoryList"></a>
<a id="tocSdirectorylist"></a>
<a id="tocsdirectorylist"></a>

```json
[
  {
    "Name": {},
    "DirectoryArn": {},
    "State": {},
    "CreationDateTime": {}
  }
]
```

<h2 id="tocS_DisableDirectoryRequest">DisableDirectoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisabledirectoryrequest"></a>
<a id="schema_DisableDirectoryRequest"></a>
<a id="tocSdisabledirectoryrequest"></a>
<a id="tocsdisabledirectoryrequest"></a>

```json
{}
```

<h2 id="tocS_EnableDirectoryRequest">EnableDirectoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemaenabledirectoryrequest"></a>
<a id="schema_EnableDirectoryRequest"></a>
<a id="tocSenabledirectoryrequest"></a>
<a id="tocsenabledirectoryrequest"></a>

```json
{}
```

<h2 id="tocS_Facet">Facet</h2>
<!-- backwards compatibility -->
<a id="schemafacet"></a>
<a id="schema_Facet"></a>
<a id="tocSfacet"></a>
<a id="tocsfacet"></a>

```json
{
  "Name": {},
  "ObjectType": {},
  "FacetStyle": {}
}
```

A structure that contains <code>Name</code>, <code>ARN</code>, <code>Attributes</code>, <code> <a>Rule</a>s</code>, and <code>ObjectTypes</code>. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_whatarefacets.html">Facets</a> for more information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|ObjectType|object|false|none|none|
|FacetStyle|object|false|none|none|

<h2 id="tocS_FacetAttributeDefinition">FacetAttributeDefinition</h2>
<!-- backwards compatibility -->
<a id="schemafacetattributedefinition"></a>
<a id="schema_FacetAttributeDefinition"></a>
<a id="tocSfacetattributedefinition"></a>
<a id="tocsfacetattributedefinition"></a>

```json
{
  "Type": {},
  "DefaultValue": {
    "StringValue": {},
    "BinaryValue": {},
    "BooleanValue": {},
    "NumberValue": {},
    "DatetimeValue": {}
  },
  "IsImmutable": {},
  "Rules": {
    "property1": {
      "Type": {},
      "Parameters": {
        "property1": "string",
        "property2": "string"
      }
    },
    "property2": {
      "Type": {},
      "Parameters": {
        "property1": "string",
        "property2": "string"
      }
    }
  }
}
```

A facet attribute definition. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|true|none|none|
|DefaultValue|object|false|none|none|
|IsImmutable|object|false|none|none|
|Rules|object|false|none|none|

<h2 id="tocS_FacetAttributeReference">FacetAttributeReference</h2>
<!-- backwards compatibility -->
<a id="schemafacetattributereference"></a>
<a id="schema_FacetAttributeReference"></a>
<a id="tocSfacetattributereference"></a>
<a id="tocsfacetattributereference"></a>

```json
{
  "TargetFacetName": {},
  "TargetAttributeName": {}
}
```

The facet attribute reference that specifies the attribute definition that contains the attribute facet name and attribute name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetFacetName|object|true|none|none|
|TargetAttributeName|object|true|none|none|

<h2 id="tocS_RequiredAttributeBehavior">RequiredAttributeBehavior</h2>
<!-- backwards compatibility -->
<a id="schemarequiredattributebehavior"></a>
<a id="schema_RequiredAttributeBehavior"></a>
<a id="tocSrequiredattributebehavior"></a>
<a id="tocsrequiredattributebehavior"></a>

```json
"REQUIRED_ALWAYS"
```

<h2 id="tocS_FacetAttributeType">FacetAttributeType</h2>
<!-- backwards compatibility -->
<a id="schemafacetattributetype"></a>
<a id="schema_FacetAttributeType"></a>
<a id="tocSfacetattributetype"></a>
<a id="tocsfacetattributetype"></a>

```json
"STRING"
```

<h2 id="tocS_RuleMap">RuleMap</h2>
<!-- backwards compatibility -->
<a id="schemarulemap"></a>
<a id="schema_RuleMap"></a>
<a id="tocSrulemap"></a>
<a id="tocsrulemap"></a>

```json
{
  "property1": {
    "Type": {},
    "Parameters": {
      "property1": "string",
      "property2": "string"
    }
  },
  "property2": {
    "Type": {},
    "Parameters": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Rule](#schemarule)|false|none|Contains an Amazon Resource Name (ARN) and parameters that are associated with the rule.|

<h2 id="tocS_UpdateActionType">UpdateActionType</h2>
<!-- backwards compatibility -->
<a id="schemaupdateactiontype"></a>
<a id="schema_UpdateActionType"></a>
<a id="tocSupdateactiontype"></a>
<a id="tocsupdateactiontype"></a>

```json
"CREATE_OR_UPDATE"
```

<h2 id="tocS_FacetAttributeUpdateList">FacetAttributeUpdateList</h2>
<!-- backwards compatibility -->
<a id="schemafacetattributeupdatelist"></a>
<a id="schema_FacetAttributeUpdateList"></a>
<a id="tocSfacetattributeupdatelist"></a>
<a id="tocsfacetattributeupdatelist"></a>

```json
[
  {
    "Attribute": {
      "Name": {},
      "AttributeDefinition": {
        "Type": {},
        "DefaultValue": {
          "StringValue": {},
          "BinaryValue": {},
          "BooleanValue": {},
          "NumberValue": {},
          "DatetimeValue": {}
        },
        "IsImmutable": {},
        "Rules": {
          "property1": {
            "Type": {},
            "Parameters": {
              "property1": "string",
              "property2": "string"
            }
          },
          "property2": {
            "Type": {},
            "Parameters": {
              "property1": "string",
              "property2": "string"
            }
          }
        }
      },
      "AttributeReference": {
        "TargetFacetName": {},
        "TargetAttributeName": {}
      },
      "RequiredBehavior": {}
    },
    "Action": {}
  }
]
```

<h2 id="tocS_FacetNameList">FacetNameList</h2>
<!-- backwards compatibility -->
<a id="schemafacetnamelist"></a>
<a id="schema_FacetNameList"></a>
<a id="tocSfacetnamelist"></a>
<a id="tocsfacetnamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_GetAppliedSchemaVersionRequest">GetAppliedSchemaVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetappliedschemaversionrequest"></a>
<a id="schema_GetAppliedSchemaVersionRequest"></a>
<a id="tocSgetappliedschemaversionrequest"></a>
<a id="tocsgetappliedschemaversionrequest"></a>

```json
{
  "SchemaArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemaArn|object|true|none|none|

<h2 id="tocS_GetDirectoryRequest">GetDirectoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdirectoryrequest"></a>
<a id="schema_GetDirectoryRequest"></a>
<a id="tocSgetdirectoryrequest"></a>
<a id="tocsgetdirectoryrequest"></a>

```json
{}
```

<h2 id="tocS_GetFacetRequest">GetFacetRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetfacetrequest"></a>
<a id="schema_GetFacetRequest"></a>
<a id="tocSgetfacetrequest"></a>
<a id="tocsgetfacetrequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_GetLinkAttributesRequest">GetLinkAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetlinkattributesrequest"></a>
<a id="schema_GetLinkAttributesRequest"></a>
<a id="tocSgetlinkattributesrequest"></a>
<a id="tocsgetlinkattributesrequest"></a>

```json
{
  "TypedLinkSpecifier": {
    "TypedLinkFacet": {
      "SchemaArn": {},
      "TypedLinkName": {}
    },
    "SourceObjectReference": {
      "Selector": {}
    },
    "TargetObjectReference": {
      "Selector": {}
    },
    "IdentityAttributeValues": {}
  },
  "AttributeNames": {},
  "ConsistencyLevel": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TypedLinkSpecifier|object|true|none|none|
|AttributeNames|object|true|none|none|
|ConsistencyLevel|object|false|none|none|

<h2 id="tocS_GetObjectAttributesRequest">GetObjectAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetobjectattributesrequest"></a>
<a id="schema_GetObjectAttributesRequest"></a>
<a id="tocSgetobjectattributesrequest"></a>
<a id="tocsgetobjectattributesrequest"></a>

```json
{
  "ObjectReference": {
    "Selector": {}
  },
  "SchemaFacet": {
    "SchemaArn": {},
    "FacetName": {}
  },
  "AttributeNames": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectReference|object|true|none|none|
|SchemaFacet|object|true|none|none|
|AttributeNames|object|true|none|none|

<h2 id="tocS_GetObjectInformationRequest">GetObjectInformationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetobjectinformationrequest"></a>
<a id="schema_GetObjectInformationRequest"></a>
<a id="tocSgetobjectinformationrequest"></a>
<a id="tocsgetobjectinformationrequest"></a>

```json
{
  "ObjectReference": {
    "Selector": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectReference|object|true|none|none|

<h2 id="tocS_GetSchemaAsJsonRequest">GetSchemaAsJsonRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetschemaasjsonrequest"></a>
<a id="schema_GetSchemaAsJsonRequest"></a>
<a id="tocSgetschemaasjsonrequest"></a>
<a id="tocsgetschemaasjsonrequest"></a>

```json
{}
```

<h2 id="tocS_SchemaJsonDocument">SchemaJsonDocument</h2>
<!-- backwards compatibility -->
<a id="schemaschemajsondocument"></a>
<a id="schema_SchemaJsonDocument"></a>
<a id="tocSschemajsondocument"></a>
<a id="tocsschemajsondocument"></a>

```json
"string"
```

<h2 id="tocS_GetTypedLinkFacetInformationRequest">GetTypedLinkFacetInformationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagettypedlinkfacetinformationrequest"></a>
<a id="schema_GetTypedLinkFacetInformationRequest"></a>
<a id="tocSgettypedlinkfacetinformationrequest"></a>
<a id="tocsgettypedlinkfacetinformationrequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_IndexAttachment">IndexAttachment</h2>
<!-- backwards compatibility -->
<a id="schemaindexattachment"></a>
<a id="schema_IndexAttachment"></a>
<a id="tocSindexattachment"></a>
<a id="tocsindexattachment"></a>

```json
{
  "IndexedAttributes": {},
  "ObjectIdentifier": {}
}
```

Represents an index and an attached object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexedAttributes|object|false|none|none|
|ObjectIdentifier|object|false|none|none|

<h2 id="tocS_LinkAttributeAction">LinkAttributeAction</h2>
<!-- backwards compatibility -->
<a id="schemalinkattributeaction"></a>
<a id="schema_LinkAttributeAction"></a>
<a id="tocSlinkattributeaction"></a>
<a id="tocslinkattributeaction"></a>

```json
{
  "AttributeActionType": {},
  "AttributeUpdateValue": {
    "StringValue": {},
    "BinaryValue": {},
    "BooleanValue": {},
    "NumberValue": {},
    "DatetimeValue": {}
  }
}
```

The action to take on a typed link attribute value. Updates are only supported for attributes which don’t contribute to link identity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttributeActionType|object|false|none|none|
|AttributeUpdateValue|object|false|none|none|

<h2 id="tocS_ListAppliedSchemaArnsRequest">ListAppliedSchemaArnsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistappliedschemaarnsrequest"></a>
<a id="schema_ListAppliedSchemaArnsRequest"></a>
<a id="tocSlistappliedschemaarnsrequest"></a>
<a id="tocslistappliedschemaarnsrequest"></a>

```json
{
  "DirectoryArn": {},
  "SchemaArn": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectoryArn|object|true|none|none|
|SchemaArn|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListAttachedIndicesRequest">ListAttachedIndicesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistattachedindicesrequest"></a>
<a id="schema_ListAttachedIndicesRequest"></a>
<a id="tocSlistattachedindicesrequest"></a>
<a id="tocslistattachedindicesrequest"></a>

```json
{
  "TargetReference": {
    "Selector": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetReference|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListDevelopmentSchemaArnsRequest">ListDevelopmentSchemaArnsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdevelopmentschemaarnsrequest"></a>
<a id="schema_ListDevelopmentSchemaArnsRequest"></a>
<a id="tocSlistdevelopmentschemaarnsrequest"></a>
<a id="tocslistdevelopmentschemaarnsrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListDirectoriesRequest">ListDirectoriesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdirectoriesrequest"></a>
<a id="schema_ListDirectoriesRequest"></a>
<a id="tocSlistdirectoriesrequest"></a>
<a id="tocslistdirectoriesrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "state": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|state|object|false|none|none|

<h2 id="tocS_ListFacetAttributesRequest">ListFacetAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistfacetattributesrequest"></a>
<a id="schema_ListFacetAttributesRequest"></a>
<a id="tocSlistfacetattributesrequest"></a>
<a id="tocslistfacetattributesrequest"></a>

```json
{
  "Name": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListFacetNamesRequest">ListFacetNamesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistfacetnamesrequest"></a>
<a id="schema_ListFacetNamesRequest"></a>
<a id="tocSlistfacetnamesrequest"></a>
<a id="tocslistfacetnamesrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListIncomingTypedLinksRequest">ListIncomingTypedLinksRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistincomingtypedlinksrequest"></a>
<a id="schema_ListIncomingTypedLinksRequest"></a>
<a id="tocSlistincomingtypedlinksrequest"></a>
<a id="tocslistincomingtypedlinksrequest"></a>

```json
{
  "ObjectReference": {
    "Selector": {}
  },
  "FilterAttributeRanges": {},
  "FilterTypedLink": {
    "SchemaArn": {},
    "TypedLinkName": {}
  },
  "NextToken": {},
  "MaxResults": {},
  "ConsistencyLevel": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectReference|object|true|none|none|
|FilterAttributeRanges|object|false|none|none|
|FilterTypedLink|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|ConsistencyLevel|object|false|none|none|

<h2 id="tocS_ListIndexRequest">ListIndexRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistindexrequest"></a>
<a id="schema_ListIndexRequest"></a>
<a id="tocSlistindexrequest"></a>
<a id="tocslistindexrequest"></a>

```json
{
  "RangesOnIndexedValues": {},
  "IndexReference": {
    "Selector": {}
  },
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RangesOnIndexedValues|object|false|none|none|
|IndexReference|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListManagedSchemaArnsRequest">ListManagedSchemaArnsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistmanagedschemaarnsrequest"></a>
<a id="schema_ListManagedSchemaArnsRequest"></a>
<a id="tocSlistmanagedschemaarnsrequest"></a>
<a id="tocslistmanagedschemaarnsrequest"></a>

```json
{
  "SchemaArn": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemaArn|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListObjectAttributesRequest">ListObjectAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistobjectattributesrequest"></a>
<a id="schema_ListObjectAttributesRequest"></a>
<a id="tocSlistobjectattributesrequest"></a>
<a id="tocslistobjectattributesrequest"></a>

```json
{
  "ObjectReference": {
    "Selector": {}
  },
  "NextToken": {},
  "MaxResults": {},
  "FacetFilter": {
    "SchemaArn": {},
    "FacetName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectReference|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|FacetFilter|object|false|none|none|

<h2 id="tocS_ListObjectChildrenRequest">ListObjectChildrenRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistobjectchildrenrequest"></a>
<a id="schema_ListObjectChildrenRequest"></a>
<a id="tocSlistobjectchildrenrequest"></a>
<a id="tocslistobjectchildrenrequest"></a>

```json
{
  "ObjectReference": {
    "Selector": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectReference|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListObjectParentPathsRequest">ListObjectParentPathsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistobjectparentpathsrequest"></a>
<a id="schema_ListObjectParentPathsRequest"></a>
<a id="tocSlistobjectparentpathsrequest"></a>
<a id="tocslistobjectparentpathsrequest"></a>

```json
{
  "ObjectReference": {
    "Selector": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectReference|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListObjectParentsRequest">ListObjectParentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistobjectparentsrequest"></a>
<a id="schema_ListObjectParentsRequest"></a>
<a id="tocSlistobjectparentsrequest"></a>
<a id="tocslistobjectparentsrequest"></a>

```json
{
  "ObjectReference": {
    "Selector": {}
  },
  "NextToken": {},
  "MaxResults": {},
  "IncludeAllLinksToEachParent": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectReference|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|IncludeAllLinksToEachParent|object|false|none|none|

<h2 id="tocS_ObjectIdentifierToLinkNameMap">ObjectIdentifierToLinkNameMap</h2>
<!-- backwards compatibility -->
<a id="schemaobjectidentifiertolinknamemap"></a>
<a id="schema_ObjectIdentifierToLinkNameMap"></a>
<a id="tocSobjectidentifiertolinknamemap"></a>
<a id="tocsobjectidentifiertolinknamemap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[LinkName](#schemalinkname)|false|none|none|

<h2 id="tocS_ListObjectPoliciesRequest">ListObjectPoliciesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistobjectpoliciesrequest"></a>
<a id="schema_ListObjectPoliciesRequest"></a>
<a id="tocSlistobjectpoliciesrequest"></a>
<a id="tocslistobjectpoliciesrequest"></a>

```json
{
  "ObjectReference": {
    "Selector": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectReference|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListOutgoingTypedLinksRequest">ListOutgoingTypedLinksRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistoutgoingtypedlinksrequest"></a>
<a id="schema_ListOutgoingTypedLinksRequest"></a>
<a id="tocSlistoutgoingtypedlinksrequest"></a>
<a id="tocslistoutgoingtypedlinksrequest"></a>

```json
{
  "ObjectReference": {
    "Selector": {}
  },
  "FilterAttributeRanges": {},
  "FilterTypedLink": {
    "SchemaArn": {},
    "TypedLinkName": {}
  },
  "NextToken": {},
  "MaxResults": {},
  "ConsistencyLevel": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectReference|object|true|none|none|
|FilterAttributeRanges|object|false|none|none|
|FilterTypedLink|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|ConsistencyLevel|object|false|none|none|

<h2 id="tocS_ListPolicyAttachmentsRequest">ListPolicyAttachmentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpolicyattachmentsrequest"></a>
<a id="schema_ListPolicyAttachmentsRequest"></a>
<a id="tocSlistpolicyattachmentsrequest"></a>
<a id="tocslistpolicyattachmentsrequest"></a>

```json
{
  "PolicyReference": {
    "Selector": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyReference|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListPublishedSchemaArnsRequest">ListPublishedSchemaArnsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpublishedschemaarnsrequest"></a>
<a id="schema_ListPublishedSchemaArnsRequest"></a>
<a id="tocSlistpublishedschemaarnsrequest"></a>
<a id="tocslistpublishedschemaarnsrequest"></a>

```json
{
  "SchemaArn": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemaArn|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_TagsNumberResults">TagsNumberResults</h2>
<!-- backwards compatibility -->
<a id="schematagsnumberresults"></a>
<a id="schema_TagsNumberResults"></a>
<a id="tocStagsnumberresults"></a>
<a id="tocstagsnumberresults"></a>

```json
50
```

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{
  "ResourceArn": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

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

<h2 id="tocS_ListTypedLinkFacetAttributesRequest">ListTypedLinkFacetAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttypedlinkfacetattributesrequest"></a>
<a id="schema_ListTypedLinkFacetAttributesRequest"></a>
<a id="tocSlisttypedlinkfacetattributesrequest"></a>
<a id="tocslisttypedlinkfacetattributesrequest"></a>

```json
{
  "Name": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListTypedLinkFacetNamesRequest">ListTypedLinkFacetNamesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttypedlinkfacetnamesrequest"></a>
<a id="schema_ListTypedLinkFacetNamesRequest"></a>
<a id="tocSlisttypedlinkfacetnamesrequest"></a>
<a id="tocslisttypedlinkfacetnamesrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_TypedLinkNameList">TypedLinkNameList</h2>
<!-- backwards compatibility -->
<a id="schematypedlinknamelist"></a>
<a id="schema_TypedLinkNameList"></a>
<a id="tocStypedlinknamelist"></a>
<a id="tocstypedlinknamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_LookupPolicyRequest">LookupPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemalookuppolicyrequest"></a>
<a id="schema_LookupPolicyRequest"></a>
<a id="tocSlookuppolicyrequest"></a>
<a id="tocslookuppolicyrequest"></a>

```json
{
  "ObjectReference": {
    "Selector": {}
  },
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectReference|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_NumberAttributeValue">NumberAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemanumberattributevalue"></a>
<a id="schema_NumberAttributeValue"></a>
<a id="tocSnumberattributevalue"></a>
<a id="tocsnumberattributevalue"></a>

```json
"string"
```

<h2 id="tocS_ObjectAttributeAction">ObjectAttributeAction</h2>
<!-- backwards compatibility -->
<a id="schemaobjectattributeaction"></a>
<a id="schema_ObjectAttributeAction"></a>
<a id="tocSobjectattributeaction"></a>
<a id="tocsobjectattributeaction"></a>

```json
{
  "ObjectAttributeActionType": {},
  "ObjectAttributeUpdateValue": {
    "StringValue": {},
    "BinaryValue": {},
    "BooleanValue": {},
    "NumberValue": {},
    "DatetimeValue": {}
  }
}
```

The action to take on the object attribute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectAttributeActionType|object|false|none|none|
|ObjectAttributeUpdateValue|object|false|none|none|

<h2 id="tocS_TypedAttributeValueRange">TypedAttributeValueRange</h2>
<!-- backwards compatibility -->
<a id="schematypedattributevaluerange"></a>
<a id="schema_TypedAttributeValueRange"></a>
<a id="tocStypedattributevaluerange"></a>
<a id="tocstypedattributevaluerange"></a>

```json
{
  "StartMode": {},
  "StartValue": {
    "StringValue": {},
    "BinaryValue": {},
    "BooleanValue": {},
    "NumberValue": {},
    "DatetimeValue": {}
  },
  "EndMode": {},
  "EndValue": {
    "StringValue": {},
    "BinaryValue": {},
    "BooleanValue": {},
    "NumberValue": {},
    "DatetimeValue": {}
  }
}
```

A range of attribute values. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_range_filters.html">Range Filters</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartMode|object|true|none|none|
|StartValue|object|false|none|none|
|EndMode|object|true|none|none|
|EndValue|object|false|none|none|

<h2 id="tocS_ObjectIdentifierAndLinkNameTuple">ObjectIdentifierAndLinkNameTuple</h2>
<!-- backwards compatibility -->
<a id="schemaobjectidentifierandlinknametuple"></a>
<a id="schema_ObjectIdentifierAndLinkNameTuple"></a>
<a id="tocSobjectidentifierandlinknametuple"></a>
<a id="tocsobjectidentifierandlinknametuple"></a>

```json
{
  "ObjectIdentifier": {},
  "LinkName": {}
}
```

A pair of ObjectIdentifier and LinkName.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectIdentifier|object|false|none|none|
|LinkName|object|false|none|none|

<h2 id="tocS_PathString">PathString</h2>
<!-- backwards compatibility -->
<a id="schemapathstring"></a>
<a id="schema_PathString"></a>
<a id="tocSpathstring"></a>
<a id="tocspathstring"></a>

```json
"string"
```

<h2 id="tocS_PathToObjectIdentifiers">PathToObjectIdentifiers</h2>
<!-- backwards compatibility -->
<a id="schemapathtoobjectidentifiers"></a>
<a id="schema_PathToObjectIdentifiers"></a>
<a id="tocSpathtoobjectidentifiers"></a>
<a id="tocspathtoobjectidentifiers"></a>

```json
{
  "Path": {},
  "ObjectIdentifiers": {}
}
```

Returns the path to the <code>ObjectIdentifiers</code> that is associated with the directory.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Path|object|false|none|none|
|ObjectIdentifiers|object|false|none|none|

<h2 id="tocS_PolicyType">PolicyType</h2>
<!-- backwards compatibility -->
<a id="schemapolicytype"></a>
<a id="schema_PolicyType"></a>
<a id="tocSpolicytype"></a>
<a id="tocspolicytype"></a>

```json
"string"
```

<h2 id="tocS_PolicyAttachment">PolicyAttachment</h2>
<!-- backwards compatibility -->
<a id="schemapolicyattachment"></a>
<a id="schema_PolicyAttachment"></a>
<a id="tocSpolicyattachment"></a>
<a id="tocspolicyattachment"></a>

```json
{
  "PolicyId": {},
  "ObjectIdentifier": {},
  "PolicyType": {}
}
```

Contains the <code>PolicyType</code>, <code>PolicyId</code>, and the <code>ObjectIdentifier</code> to which it is attached. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyId|object|false|none|none|
|ObjectIdentifier|object|false|none|none|
|PolicyType|object|false|none|none|

<h2 id="tocS_PolicyAttachmentList">PolicyAttachmentList</h2>
<!-- backwards compatibility -->
<a id="schemapolicyattachmentlist"></a>
<a id="schema_PolicyAttachmentList"></a>
<a id="tocSpolicyattachmentlist"></a>
<a id="tocspolicyattachmentlist"></a>

```json
[
  {
    "PolicyId": {},
    "ObjectIdentifier": {},
    "PolicyType": {}
  }
]
```

<h2 id="tocS_PolicyToPath">PolicyToPath</h2>
<!-- backwards compatibility -->
<a id="schemapolicytopath"></a>
<a id="schema_PolicyToPath"></a>
<a id="tocSpolicytopath"></a>
<a id="tocspolicytopath"></a>

```json
{
  "Path": {},
  "Policies": {}
}
```

Used when a regular object exists in a <a>Directory</a> and you want to find all of the policies that are associated with that object and the parent to that object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Path|object|false|none|none|
|Policies|object|false|none|none|

<h2 id="tocS_Version">Version</h2>
<!-- backwards compatibility -->
<a id="schemaversion"></a>
<a id="schema_Version"></a>
<a id="tocSversion"></a>
<a id="tocsversion"></a>

```json
"string"
```

<h2 id="tocS_PublishSchemaRequest">PublishSchemaRequest</h2>
<!-- backwards compatibility -->
<a id="schemapublishschemarequest"></a>
<a id="schema_PublishSchemaRequest"></a>
<a id="tocSpublishschemarequest"></a>
<a id="tocspublishschemarequest"></a>

```json
{
  "Version": {},
  "MinorVersion": {},
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Version|object|true|none|none|
|MinorVersion|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_PutSchemaFromJsonRequest">PutSchemaFromJsonRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputschemafromjsonrequest"></a>
<a id="schema_PutSchemaFromJsonRequest"></a>
<a id="tocSputschemafromjsonrequest"></a>
<a id="tocsputschemafromjsonrequest"></a>

```json
{
  "Document": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Document|object|true|none|none|

<h2 id="tocS_RangeMode">RangeMode</h2>
<!-- backwards compatibility -->
<a id="schemarangemode"></a>
<a id="schema_RangeMode"></a>
<a id="tocSrangemode"></a>
<a id="tocsrangemode"></a>

```json
"FIRST"
```

<h2 id="tocS_RemoveFacetFromObjectRequest">RemoveFacetFromObjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremovefacetfromobjectrequest"></a>
<a id="schema_RemoveFacetFromObjectRequest"></a>
<a id="tocSremovefacetfromobjectrequest"></a>
<a id="tocsremovefacetfromobjectrequest"></a>

```json
{
  "SchemaFacet": {
    "SchemaArn": {},
    "FacetName": {}
  },
  "ObjectReference": {
    "Selector": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemaFacet|object|true|none|none|
|ObjectReference|object|true|none|none|

<h2 id="tocS_RuleType">RuleType</h2>
<!-- backwards compatibility -->
<a id="schemaruletype"></a>
<a id="schema_RuleType"></a>
<a id="tocSruletype"></a>
<a id="tocsruletype"></a>

```json
"BINARY_LENGTH"
```

<h2 id="tocS_RuleParameterMap">RuleParameterMap</h2>
<!-- backwards compatibility -->
<a id="schemaruleparametermap"></a>
<a id="schema_RuleParameterMap"></a>
<a id="tocSruleparametermap"></a>
<a id="tocsruleparametermap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[RuleParameterValue](#schemaruleparametervalue)|false|none|none|

<h2 id="tocS_Rule">Rule</h2>
<!-- backwards compatibility -->
<a id="schemarule"></a>
<a id="schema_Rule"></a>
<a id="tocSrule"></a>
<a id="tocsrule"></a>

```json
{
  "Type": {},
  "Parameters": {
    "property1": "string",
    "property2": "string"
  }
}
```

Contains an Amazon Resource Name (ARN) and parameters that are associated with the rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|Parameters|object|false|none|none|

<h2 id="tocS_RuleKey">RuleKey</h2>
<!-- backwards compatibility -->
<a id="schemarulekey"></a>
<a id="schema_RuleKey"></a>
<a id="tocSrulekey"></a>
<a id="tocsrulekey"></a>

```json
"string"
```

<h2 id="tocS_RuleParameterKey">RuleParameterKey</h2>
<!-- backwards compatibility -->
<a id="schemaruleparameterkey"></a>
<a id="schema_RuleParameterKey"></a>
<a id="tocSruleparameterkey"></a>
<a id="tocsruleparameterkey"></a>

```json
"string"
```

<h2 id="tocS_RuleParameterValue">RuleParameterValue</h2>
<!-- backwards compatibility -->
<a id="schemaruleparametervalue"></a>
<a id="schema_RuleParameterValue"></a>
<a id="tocSruleparametervalue"></a>
<a id="tocsruleparametervalue"></a>

```json
"string"
```

<h2 id="tocS_StringAttributeValue">StringAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemastringattributevalue"></a>
<a id="schema_StringAttributeValue"></a>
<a id="tocSstringattributevalue"></a>
<a id="tocsstringattributevalue"></a>

```json
"string"
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

<h2 id="tocS_TypedLinkAttributeDefinition">TypedLinkAttributeDefinition</h2>
<!-- backwards compatibility -->
<a id="schematypedlinkattributedefinition"></a>
<a id="schema_TypedLinkAttributeDefinition"></a>
<a id="tocStypedlinkattributedefinition"></a>
<a id="tocstypedlinkattributedefinition"></a>

```json
{
  "Name": {},
  "Type": {},
  "DefaultValue": {
    "StringValue": {},
    "BinaryValue": {},
    "BooleanValue": {},
    "NumberValue": {},
    "DatetimeValue": {}
  },
  "IsImmutable": {},
  "Rules": {
    "property1": {
      "Type": {},
      "Parameters": {
        "property1": "string",
        "property2": "string"
      }
    },
    "property2": {
      "Type": {},
      "Parameters": {
        "property1": "string",
        "property2": "string"
      }
    }
  },
  "RequiredBehavior": {}
}
```

A typed link attribute definition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Type|object|true|none|none|
|DefaultValue|object|false|none|none|
|IsImmutable|object|false|none|none|
|Rules|object|false|none|none|
|RequiredBehavior|object|true|none|none|

<h2 id="tocS_TypedLinkFacetAttributeUpdateList">TypedLinkFacetAttributeUpdateList</h2>
<!-- backwards compatibility -->
<a id="schematypedlinkfacetattributeupdatelist"></a>
<a id="schema_TypedLinkFacetAttributeUpdateList"></a>
<a id="tocStypedlinkfacetattributeupdatelist"></a>
<a id="tocstypedlinkfacetattributeupdatelist"></a>

```json
[
  {
    "Attribute": {
      "Name": {},
      "Type": {},
      "DefaultValue": {
        "StringValue": {},
        "BinaryValue": {},
        "BooleanValue": {},
        "NumberValue": {},
        "DatetimeValue": {}
      },
      "IsImmutable": {},
      "Rules": {
        "property1": {
          "Type": {},
          "Parameters": {
            "property1": "string",
            "property2": "string"
          }
        },
        "property2": {
          "Type": {},
          "Parameters": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "RequiredBehavior": {}
    },
    "Action": {}
  }
]
```

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

<h2 id="tocS_UpdateFacetRequest">UpdateFacetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefacetrequest"></a>
<a id="schema_UpdateFacetRequest"></a>
<a id="tocSupdatefacetrequest"></a>
<a id="tocsupdatefacetrequest"></a>

```json
{
  "Name": {},
  "AttributeUpdates": {},
  "ObjectType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|AttributeUpdates|object|false|none|none|
|ObjectType|object|false|none|none|

<h2 id="tocS_UpdateLinkAttributesRequest">UpdateLinkAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelinkattributesrequest"></a>
<a id="schema_UpdateLinkAttributesRequest"></a>
<a id="tocSupdatelinkattributesrequest"></a>
<a id="tocsupdatelinkattributesrequest"></a>

```json
{
  "TypedLinkSpecifier": {
    "TypedLinkFacet": {
      "SchemaArn": {},
      "TypedLinkName": {}
    },
    "SourceObjectReference": {
      "Selector": {}
    },
    "TargetObjectReference": {
      "Selector": {}
    },
    "IdentityAttributeValues": {}
  },
  "AttributeUpdates": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TypedLinkSpecifier|object|true|none|none|
|AttributeUpdates|object|true|none|none|

<h2 id="tocS_UpdateObjectAttributesRequest">UpdateObjectAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateobjectattributesrequest"></a>
<a id="schema_UpdateObjectAttributesRequest"></a>
<a id="tocSupdateobjectattributesrequest"></a>
<a id="tocsupdateobjectattributesrequest"></a>

```json
{
  "ObjectReference": {
    "Selector": {}
  },
  "AttributeUpdates": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectReference|object|true|none|none|
|AttributeUpdates|object|true|none|none|

<h2 id="tocS_UpdateSchemaRequest">UpdateSchemaRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateschemarequest"></a>
<a id="schema_UpdateSchemaRequest"></a>
<a id="tocSupdateschemarequest"></a>
<a id="tocsupdateschemarequest"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_UpdateTypedLinkFacetRequest">UpdateTypedLinkFacetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetypedlinkfacetrequest"></a>
<a id="schema_UpdateTypedLinkFacetRequest"></a>
<a id="tocSupdatetypedlinkfacetrequest"></a>
<a id="tocsupdatetypedlinkfacetrequest"></a>

```json
{
  "Name": {},
  "AttributeUpdates": {},
  "IdentityAttributeOrder": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|AttributeUpdates|object|true|none|none|
|IdentityAttributeOrder|object|true|none|none|

<h2 id="tocS_UpgradeAppliedSchemaRequest">UpgradeAppliedSchemaRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupgradeappliedschemarequest"></a>
<a id="schema_UpgradeAppliedSchemaRequest"></a>
<a id="tocSupgradeappliedschemarequest"></a>
<a id="tocsupgradeappliedschemarequest"></a>

```json
{
  "PublishedSchemaArn": {},
  "DirectoryArn": {},
  "DryRun": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PublishedSchemaArn|object|true|none|none|
|DirectoryArn|object|true|none|none|
|DryRun|object|false|none|none|

<h2 id="tocS_UpgradePublishedSchemaRequest">UpgradePublishedSchemaRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupgradepublishedschemarequest"></a>
<a id="schema_UpgradePublishedSchemaRequest"></a>
<a id="tocSupgradepublishedschemarequest"></a>
<a id="tocsupgradepublishedschemarequest"></a>

```json
{
  "DevelopmentSchemaArn": {},
  "PublishedSchemaArn": {},
  "MinorVersion": {},
  "DryRun": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DevelopmentSchemaArn|object|true|none|none|
|PublishedSchemaArn|object|true|none|none|
|MinorVersion|object|true|none|none|
|DryRun|object|false|none|none|
