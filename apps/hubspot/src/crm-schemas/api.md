<h1 id="schemas">Schemas v2026-09</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Basepom for all HubSpot Projects

Base URLs:

* <a href="https://api.hubapi.com">https://api.hubapi.com</a>

# Authentication

* API Key (developer_hapikey)
    - Parameter Name: **hapikey**, in: query.

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://app.hubspot.com/oauth/authorize](https://app.hubspot.com/oauth/authorize)
    - Token URL = [https://api.hubapi.com/oauth/v1/token](https://api.hubapi.com/oauth/v1/token)

|Scope|Scope Description|
|---|---|
|crm.objects.custom.highly_sensitive.read.v2||
|crm.objects.custom.highly_sensitive.write.v2||
|crm.objects.custom.read||
|crm.objects.custom.sensitive.read.v2||
|crm.objects.custom.sensitive.write.v2||
|crm.objects.custom.write||
|crm.schemas.custom.read||
|crm.schemas.custom.write||

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="schemas-advanced">Advanced</h1>

## Create an association for a specified object type.

<a id="opIdpost-/crm-object-schemas/2026-09/schemas/{objectType}/associations_createAssociation"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm-object-schemas/2026-09/schemas/{objectType}/associations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /crm-object-schemas/2026-09/schemas/{objectType}/associations`

Create a new association between the specified object type and another object type. This operation requires the definition of the association attributes, such as the primary and target object type IDs.

> Body parameter

```json
null
```

<h3 id="create-an-association-for-a-specified-object-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectType|path|string|true|The unique identifier of the object type for which the association is being created.|
|body|body|[AssociationDefinitionEgg](#schemaassociationdefinitionegg)|true|none|
|» fromObjectTypeId|body|string|true|ID of the primary object type to link from.|
|» name|body|string|false|A unique name for this association.|
|» toObjectTypeId|body|string|true|ID of the target object type ID to link to.|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-an-association-for-a-specified-object-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[AssociationDefinition](#schemaassociationdefinition)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.schemas.custom.write )
</aside>

<h1 id="schemas-basic">Basic</h1>

## Retrieve all custom object schemas.

<a id="opIdget-/crm-object-schemas/2026-09/schemas_getAll"></a>

> Code samples

```bash
curl https://api.hubapi.com/crm-object-schemas/2026-09/schemas \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm-object-schemas/2026-09/schemas`

Retrieve all custom object schemas, with options to include property definitions, association definitions, and audit metadata.

<h3 id="retrieve-all-custom-object-schemas-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|includeAssociationDefinitions|query|boolean|false|Whether to include association definitions in the response. Defaults to true.|
|includeAuditMetadata|query|boolean|false|Whether to include audit metadata in the response. Defaults to true.|
|includePropertyDefinitions|query|boolean|false|Whether to include property definitions in the response. Defaults to true.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-all-custom-object-schemas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseObjectSchemaNoPaging](#schemacollectionresponseobjectschemanopaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.schemas.custom.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 )
</aside>

## Create a new custom object schema.

<a id="opIdpost-/crm-object-schemas/2026-09/schemas_create"></a>

> Code samples

```bash
curl https://api.hubapi.com/crm-object-schemas/2026-09/schemas \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /crm-object-schemas/2026-09/schemas`

Create a new custom object schema by defining its properties and associations.

> Body parameter

```json
null
```

<h3 id="create-a-new-custom-object-schema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ObjectSchemaEgg](#schemaobjectschemaegg)|true|none|
|» allowsSensitiveProperties|body|boolean|true|Determines if the object type can include properties that are marked as sensitive.|
|» associatedObjects|body|[string]|true|Associations defined for this object type.|
|» description|body|string|false|A brief explanation of the object type.|
|» labels|body|[ObjectTypeDefinitionLabels](#schemaobjecttypedefinitionlabels)|true|none|
|» name|body|string|true|A unique name for this object. For internal use only.|
|» primaryDisplayProperty|body|string|false|The name of the primary property for this object. This will be displayed as primary on the HubSpot record page for this object type.|
|» properties|body|[[ObjectTypePropertyCreate](#schemaobjecttypepropertycreate)]|true|Properties defined for this object type.|
|» requiredProperties|body|[string]|true|The names of properties that should be **required** when creating an object of this type.|
|» searchableProperties|body|[string]|true|Names of properties that will be indexed for this object type in by HubSpot's product search.|
|» secondaryDisplayProperties|body|[string]|true|The names of secondary properties for this object. These will be displayed as secondary on the HubSpot record page for this object type.|
|» shouldCreateSameObjectAssociation|body|boolean|true|A boolean indicating whether associations should be created between objects of the same type.|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-a-new-custom-object-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[ObjectSchema](#schemaobjectschema)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.schemas.custom.write )
</aside>

## Retrieve the schema of a specified custom object.

<a id="opIdget-/crm-object-schemas/2026-09/schemas/{objectType}_getById"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm-object-schemas/2026-09/schemas/{objectType}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm-object-schemas/2026-09/schemas/{objectType}`

Retrieve details of a custom object schema, including its properties and associations, using the object type ID or fully qualified name.

<h3 id="retrieve-the-schema-of-a-specified-custom-object-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectType|path|string|true|The unique identifier for the CRM object type whose schema is being retrieved.|
|includeAssociationDefinitions|query|boolean|false|A boolean indicating whether to include association definitions in the response. Defaults to true.|
|includeAuditMetadata|query|boolean|false|A boolean indicating whether to include audit metadata in the response. Defaults to true.|
|includePropertyDefinitions|query|boolean|false|A boolean indicating whether to include property definitions in the response. Defaults to true.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-the-schema-of-a-specified-custom-object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ObjectSchema](#schemaobjectschema)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.schemas.custom.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 )
</aside>

## Delete the schema of a specified custom object.

<a id="opIddelete-/crm-object-schemas/2026-09/schemas/{objectType}_archive"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm-object-schemas/2026-09/schemas/{objectType}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /crm-object-schemas/2026-09/schemas/{objectType}`

Remove a custom object schema from the account using its object type ID or fully qualified name.

<h3 id="delete-the-schema-of-a-specified-custom-object-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectType|path|string|true|The unique identifier of the object schema to delete.|
|archived|query|boolean|false|Whether to return only results that have been archived.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-the-schema-of-a-specified-custom-object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.schemas.custom.write )
</aside>

## Update the schema of a specified custom object.

<a id="opIdpatch-/crm-object-schemas/2026-09/schemas/{objectType}_update"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm-object-schemas/2026-09/schemas/{objectType}' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PATCH /crm-object-schemas/2026-09/schemas/{objectType}`

Update attributes of a custom object schema, such as properties and labels, using the object type ID or fully qualified name.

> Body parameter

```json
null
```

<h3 id="update-the-schema-of-a-specified-custom-object-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectType|path|string|true|The unique identifier of the CRM object type whose schema is to be updated.|
|body|body|[ObjectTypeDefinitionPatch](#schemaobjecttypedefinitionpatch)|true|none|
|» allowsSensitiveProperties|body|boolean|false|Determines if the object type can include properties that are marked as sensitive.|
|» clearDescription|body|boolean|true|Indicates whether the description of the object type should be cleared.|
|» description|body|string|false|A brief explanation of the object type.|
|» labels|body|[ObjectTypeDefinitionLabels](#schemaobjecttypedefinitionlabels)|false|none|
|» primaryDisplayProperty|body|string|false|The name of the primary property for this object. This will be displayed as primary on the HubSpot record page for this object type.|
|» requiredProperties|body|[string]|false|The names of properties that should be **required** when creating an object of this type.|
|» restorable|body|boolean|false|Specifies if the object type can be restored after being deleted.|
|» searchableProperties|body|[string]|false|Names of properties that will be indexed for this object type in by HubSpot's product search.|
|» secondaryDisplayProperties|body|[string]|false|The names of secondary properties for this object. These will be displayed as secondary on the HubSpot record page for this object type.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-the-schema-of-a-specified-custom-object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ObjectTypeDefinition](#schemaobjecttypedefinition)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.schemas.custom.write )
</aside>

## Delete an existing association for a specified object type.

<a id="opIddelete-/crm-object-schemas/2026-09/schemas/{objectType}/associations/{associationIdentifier}_archiveAssociation"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm-object-schemas/2026-09/schemas/{objectType}/associations/{associationIdentifier}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /crm-object-schemas/2026-09/schemas/{objectType}/associations/{associationIdentifier}`

Remove an association between two object types identified by the association identifier and object type. This operation is irreversible and will permanently delete the specified association.

<h3 id="delete-an-existing-association-for-a-specified-object-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|associationIdentifier|path|string|true|The unique identifier of the association definition to delete.|
|objectType|path|string|true|The type of the custom object from which the association is being deleted.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-an-existing-association-for-a-specified-object-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.schemas.custom.write )
</aside>

<h1 id="schemas-batch">Batch</h1>

## Retrieve multiple custom object schemas in a batch request.

<a id="opIdpost-/crm-object-schemas/2026-09/schemas/batch/read_/crm-object-schemas/v3/schemas/batch/read"></a>

> Code samples

```bash
curl https://api.hubapi.com/crm-object-schemas/2026-09/schemas/batch/read \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /crm-object-schemas/2026-09/schemas/batch/read`

Retrieve details of multiple custom object schemas by providing a batch request with specified inputs. This operation allows you to fetch schema information, including properties and associations, for multiple custom objects in a single API call.

> Body parameter

```json
null
```

<h3 id="retrieve-multiple-custom-object-schemas-in-a-batch-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ObjectSchemaBatchReadRequest](#schemaobjectschemabatchreadrequest)|true|none|
|» includeAssociationDefinitions|body|boolean|true|Indicates whether to include association definitions in the response.|
|» includeAuditMetadata|body|boolean|true|Indicates whether to include audit metadata in the response.|
|» includePropertyDefinitions|body|boolean|true|Indicates whether to include property definitions in the response.|
|» inputs|body|[string]|true|An array of strings representing the identifiers of the object schemas to be read.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-multiple-custom-object-schemas-in-a-batch-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseObjectSchemaNoPaging](#schemacollectionresponseobjectschemanopaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.schemas.custom.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 )
</aside>

# Schemas

<h2 id="tocS_AssociationDefinition">AssociationDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaassociationdefinition"></a>
<a id="schema_AssociationDefinition"></a>
<a id="tocSassociationdefinition"></a>
<a id="tocsassociationdefinition"></a>

```json
null
```

The definition of an association

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|none|When the association was defined.|
|fromObjectTypeId|string|true|none|ID of the primary object type to link from.|
|id|string|true|none|A unique ID for this association.|
|name|string|false|none|A unique name for this association.|
|toObjectTypeId|string|true|none|ID of the target object type ID to link to.|
|updatedAt|string(date-time)|false|none|When the association was last updated.|

<h2 id="tocS_AssociationDefinitionEgg">AssociationDefinitionEgg</h2>
<!-- backwards compatibility -->
<a id="schemaassociationdefinitionegg"></a>
<a id="schema_AssociationDefinitionEgg"></a>
<a id="tocSassociationdefinitionegg"></a>
<a id="tocsassociationdefinitionegg"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fromObjectTypeId|string|true|none|ID of the primary object type to link from.|
|name|string|false|none|A unique name for this association.|
|toObjectTypeId|string|true|none|ID of the target object type ID to link to.|

<h2 id="tocS_CollectionResponseObjectSchemaNoPaging">CollectionResponseObjectSchemaNoPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponseobjectschemanopaging"></a>
<a id="schema_CollectionResponseObjectSchemaNoPaging"></a>
<a id="tocScollectionresponseobjectschemanopaging"></a>
<a id="tocscollectionresponseobjectschemanopaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[ObjectSchema](#schemaobjectschema)]|true|none|An array of object schemas, each represented by an ObjectSchema. This property contains the list of schemas returned by the API call.|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "message": "Invalid input (details will vary based on the error)",
  "correlationId": "aeb5f871-7f07-4993-9211-075dc63e7cbf",
  "category": "VALIDATION_ERROR",
  "links": {
    "knowledge-base": "https://www.hubspot.com/products/service/knowledge-base"
  }
}
```

Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|true|none|The error category|
|context|object|false|none|Context about the error condition|
|correlationId|string(uuid)|true|none|A unique identifier for the request. Include this value with any error reports or support tickets|
|errors|[[ErrorDetail](#schemaerrordetail)]|false|none|further information about the error|
|links|object|false|none|A map of link names to associated URIs containing documentation about the error or recommended remediation steps|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate|
|subCategory|string|false|none|A specific category that contains more specific detail about the error|

<h2 id="tocS_ErrorDetail">ErrorDetail</h2>
<!-- backwards compatibility -->
<a id="schemaerrordetail"></a>
<a id="schema_ErrorDetail"></a>
<a id="tocSerrordetail"></a>
<a id="tocserrordetail"></a>

```json
null
```

Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The status code associated with the error detail|
|context|object|false|none|Context about the error condition|
|in|string|false|none|The name of the field or parameter in which the error was found.|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate|
|subCategory|string|false|none|A specific category that contains more specific detail about the error|

<h2 id="tocS_ObjectSchema">ObjectSchema</h2>
<!-- backwards compatibility -->
<a id="schemaobjectschema"></a>
<a id="schema_ObjectSchema"></a>
<a id="tocSobjectschema"></a>
<a id="tocsobjectschema"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowsSensitiveProperties|boolean|true|none|A boolean indicating whether the object schema allows sensitive properties.|
|archived|boolean|true|none|A boolean indicating whether the object schema is archived.|
|associations|[[AssociationDefinition](#schemaassociationdefinition)]|true|none|Associations defined for a given object type.|
|createdAt|string(date-time)|false|none|When the object schema was created.|
|createdByUserId|integer(int32)|false|none|An integer representing the ID of the user who created the object schema.|
|description|string|false|none|A string providing a description of the object schema.|
|fullyQualifiedName|string|true|none|An assigned unique ID for the object, including portal ID and object name.|
|id|string|true|none|A unique ID for this schema's object type. Will be defined as {meta-type}-{unique ID}.|
|labels|[ObjectTypeDefinitionLabels](#schemaobjecttypedefinitionlabels)|true|none|none|
|name|string|true|none|A unique name for the schema's object type.|
|objectTypeId|string|true|none|A string representing the type ID of the object.|
|primaryDisplayProperty|string|false|none|The name of the primary property for this object. This will be displayed as primary on the HubSpot record page for this object type.|
|properties|[[Property](#schemaproperty)]|true|none|Properties defined for this object type.|
|requiredProperties|[string]|true|none|The names of properties that should be **required** when creating an object of this type.|
|searchableProperties|[string]|true|none|Names of properties that will be indexed for this object type in by HubSpot's product search.|
|secondaryDisplayProperties|[string]|true|none|The names of secondary properties for this object. These will be displayed as secondary on the HubSpot record page for this object type.|
|updatedAt|string(date-time)|false|none|When the object schema was last updated.|
|updatedByUserId|integer(int32)|false|none|An integer representing the ID of the user who last updated the object schema.|

<h2 id="tocS_ObjectSchemaBatchReadRequest">ObjectSchemaBatchReadRequest</h2>
<!-- backwards compatibility -->
<a id="schemaobjectschemabatchreadrequest"></a>
<a id="schema_ObjectSchemaBatchReadRequest"></a>
<a id="tocSobjectschemabatchreadrequest"></a>
<a id="tocsobjectschemabatchreadrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeAssociationDefinitions|boolean|true|none|Indicates whether to include association definitions in the response.|
|includeAuditMetadata|boolean|true|none|Indicates whether to include audit metadata in the response.|
|includePropertyDefinitions|boolean|true|none|Indicates whether to include property definitions in the response.|
|inputs|[string]|true|none|An array of strings representing the identifiers of the object schemas to be read.|

<h2 id="tocS_ObjectSchemaEgg">ObjectSchemaEgg</h2>
<!-- backwards compatibility -->
<a id="schemaobjectschemaegg"></a>
<a id="schema_ObjectSchemaEgg"></a>
<a id="tocSobjectschemaegg"></a>
<a id="tocsobjectschemaegg"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowsSensitiveProperties|boolean|true|none|Determines if the object type can include properties that are marked as sensitive.|
|associatedObjects|[string]|true|none|Associations defined for this object type.|
|description|string|false|none|A brief explanation of the object type.|
|labels|[ObjectTypeDefinitionLabels](#schemaobjecttypedefinitionlabels)|true|none|none|
|name|string|true|none|A unique name for this object. For internal use only.|
|primaryDisplayProperty|string|false|none|The name of the primary property for this object. This will be displayed as primary on the HubSpot record page for this object type.|
|properties|[[ObjectTypePropertyCreate](#schemaobjecttypepropertycreate)]|true|none|Properties defined for this object type.|
|requiredProperties|[string]|true|none|The names of properties that should be **required** when creating an object of this type.|
|searchableProperties|[string]|true|none|Names of properties that will be indexed for this object type in by HubSpot's product search.|
|secondaryDisplayProperties|[string]|true|none|The names of secondary properties for this object. These will be displayed as secondary on the HubSpot record page for this object type.|
|shouldCreateSameObjectAssociation|boolean|true|none|A boolean indicating whether associations should be created between objects of the same type.|

<h2 id="tocS_ObjectTypeDefinition">ObjectTypeDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaobjecttypedefinition"></a>
<a id="schema_ObjectTypeDefinition"></a>
<a id="tocSobjecttypedefinition"></a>
<a id="tocsobjecttypedefinition"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowsSensitiveProperties|boolean|true|none|Indicates whether the object type allows properties that contain sensitive data.|
|archived|boolean|true|none|Indicates whether the object type is archived.|
|createdAt|string(date-time)|false|none|When the object type was created.|
|description|string|false|none|A description of the object type.|
|fullyQualifiedName|string|true|none|An assigned unique ID for the object, including portal ID and object name.|
|id|string|true|none|A unique ID for this object type. Will be defined as {meta-type}-{unique ID}.|
|labels|[ObjectTypeDefinitionLabels](#schemaobjecttypedefinitionlabels)|true|none|none|
|name|string|true|none|A unique name for this object. For internal use only.|
|objectTypeId|string|true|none|A unique identifier for the object type.|
|portalId|integer(int32)|false|none|The ID of the account that this object type is specific to.|
|primaryDisplayProperty|string|false|none|The name of the primary property for this object. This will be displayed as primary on the HubSpot record page for this object type.|
|requiredProperties|[string]|true|none|The names of properties that should be **required** when creating an object of this type.|
|searchableProperties|[string]|true|none|Names of properties that will be indexed for this object type in by HubSpot's product search.|
|secondaryDisplayProperties|[string]|true|none|The names of secondary properties for this object. These will be displayed as secondary on the HubSpot record page for this object type.|
|updatedAt|string(date-time)|false|none|When the object type was last updated.|

<h2 id="tocS_ObjectTypeDefinitionLabels">ObjectTypeDefinitionLabels</h2>
<!-- backwards compatibility -->
<a id="schemaobjecttypedefinitionlabels"></a>
<a id="schema_ObjectTypeDefinitionLabels"></a>
<a id="tocSobjecttypedefinitionlabels"></a>
<a id="tocsobjecttypedefinitionlabels"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|plural|string|false|none|The word for multiple objects. (There’s no way to change this later.)|
|singular|string|false|none|The word for one object. (There’s no way to change this later.)|

<h2 id="tocS_ObjectTypeDefinitionPatch">ObjectTypeDefinitionPatch</h2>
<!-- backwards compatibility -->
<a id="schemaobjecttypedefinitionpatch"></a>
<a id="schema_ObjectTypeDefinitionPatch"></a>
<a id="tocSobjecttypedefinitionpatch"></a>
<a id="tocsobjecttypedefinitionpatch"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowsSensitiveProperties|boolean|false|none|Determines if the object type can include properties that are marked as sensitive.|
|clearDescription|boolean|true|none|Indicates whether the description of the object type should be cleared.|
|description|string|false|none|A brief explanation of the object type.|
|labels|[ObjectTypeDefinitionLabels](#schemaobjecttypedefinitionlabels)|false|none|none|
|primaryDisplayProperty|string|false|none|The name of the primary property for this object. This will be displayed as primary on the HubSpot record page for this object type.|
|requiredProperties|[string]|false|none|The names of properties that should be **required** when creating an object of this type.|
|restorable|boolean|false|none|Specifies if the object type can be restored after being deleted.|
|searchableProperties|[string]|false|none|Names of properties that will be indexed for this object type in by HubSpot's product search.|
|secondaryDisplayProperties|[string]|false|none|The names of secondary properties for this object. These will be displayed as secondary on the HubSpot record page for this object type.|

<h2 id="tocS_ObjectTypePropertyCreate">ObjectTypePropertyCreate</h2>
<!-- backwards compatibility -->
<a id="schemaobjecttypepropertycreate"></a>
<a id="schema_ObjectTypePropertyCreate"></a>
<a id="tocSobjecttypepropertycreate"></a>
<a id="tocsobjecttypepropertycreate"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A description of the property that will be shown as help text in HubSpot.|
|displayOrder|integer(int32)|false|none|The order that this property should be displayed in the HubSpot UI relative to other properties for this object type. Properties are displayed in order starting with the lowest positive integer value. A value of -1 will cause the property to be displayed **after** any positive values.|
|externalOptionsReferenceType|string|false|none|Specifies the reference type for external options associated with the property.|
|fieldType|string|true|none|Controls how the property appears in HubSpot.|
|formField|boolean|false|none|Whether the property can be used in a HubSpot form.|
|groupName|string|false|none|The name of the group this property belongs to.|
|hasUniqueValue|boolean|false|none|Whether or not the property's value must be unique. Once set, this can't be changed.|
|hidden|boolean|false|none|Hidden options won't be shown in HubSpot.|
|label|string|true|none|A human-readable property label that will be shown in HubSpot.|
|name|string|true|none|The internal property name, which must be used when referencing the property from the API.|
|numberDisplayHint|string|false|none|Controls how numeric properties are formatted in the HubSpot UI|
|optionSortStrategy|string|false|none|Controls how the property options will be sorted in the HubSpot UI.|
|options|[[OptionInput](#schemaoptioninput)]|false|none|A list of available options for the property. This field is only required for enumerated properties.|
|referencedObjectType|string|false|none|Defines the options this property will return, e.g. OWNER would return name of users on the portal.|
|searchableInGlobalSearch|boolean|false|none|Allow users to search for information entered to this field (limited to 3 properties)|
|showCurrencySymbol|boolean|false|none|Whether the property will display the currency symbol in the HubSpot UI.|
|textDisplayHint|string|false|none|Controls how text properties are formatted in the HubSpot UI|
|type|string|true|none|The data type of the property.|

#### Enumerated Values

|Property|Value|
|---|---|
|numberDisplayHint|currency|
|numberDisplayHint|duration|
|numberDisplayHint|formatted|
|numberDisplayHint|percentage|
|numberDisplayHint|probability|
|numberDisplayHint|unformatted|
|optionSortStrategy|ALPHABETICAL|
|optionSortStrategy|DISPLAY_ORDER|
|textDisplayHint|domain_name|
|textDisplayHint|email|
|textDisplayHint|ip_address|
|textDisplayHint|multi_line|
|textDisplayHint|phone_number|
|textDisplayHint|physical_address|
|textDisplayHint|postal_code|
|textDisplayHint|unformatted_single_line|
|type|bool|
|type|date|
|type|datetime|
|type|enumeration|
|type|number|
|type|phone_number|
|type|string|

<h2 id="tocS_Option">Option</h2>
<!-- backwards compatibility -->
<a id="schemaoption"></a>
<a id="schema_Option"></a>
<a id="tocSoption"></a>
<a id="tocsoption"></a>

```json
null
```

A HubSpot property option

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A description of the option.|
|displayOrder|integer(int32)|false|none|Options are displayed in order starting with the lowest positive integer value. Values of -1 will cause the option to be displayed after any positive values.|
|hidden|boolean|true|none|Hidden options will not be displayed in HubSpot.|
|label|string|true|none|A human-readable option label that will be shown in HubSpot.|
|value|string|true|none|The internal value of the option, which must be used when setting the property value through the API.|

<h2 id="tocS_OptionInput">OptionInput</h2>
<!-- backwards compatibility -->
<a id="schemaoptioninput"></a>
<a id="schema_OptionInput"></a>
<a id="tocSoptioninput"></a>
<a id="tocsoptioninput"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A description of the option.|
|displayOrder|integer(int32)|true|none|Options are shown in order starting with the lowest positive integer value. Values of -1 will cause the option to be displayed after any positive values.|
|hidden|boolean|true|none|Hidden options won't be shown in HubSpot.|
|label|string|true|none|A human-readable option label that will be shown in HubSpot.|
|value|string|true|none|The internal value of the option, which must be used when setting the property value through the API.|

<h2 id="tocS_Property">Property</h2>
<!-- backwards compatibility -->
<a id="schemaproperty"></a>
<a id="schema_Property"></a>
<a id="tocSproperty"></a>
<a id="tocsproperty"></a>

```json
null
```

A HubSpot property

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|false|none|Whether or not the property is archived.|
|archivedAt|string(date-time)|false|none|When the property was archived.|
|calculated|boolean|false|none|For default properties, true indicates that the property is calculated by a HubSpot process. It has no effect for custom properties.|
|calculationFormula|string|false|none|The formula used to calculate the value of this property, if it is a calculated property.|
|createdAt|string(date-time)|false|none|When the property was created|
|createdUserId|string|false|none|The internal ID of the user who created the property in HubSpot. This field may not exist if the property was created outside of HubSpot.|
|currencyPropertyName|string|false|none|The name of the property that defines the currency for this property, if applicable.|
|dataSensitivity|string|false|none|The sensitivity level of the data stored in this property, such as 'sensitive' or 'highly_sensitive'.|
|dateDisplayHint|string|false|none|Controls how date properties are displayed in the HubSpot UI, with options such as 'absolute', 'absolute_with_relative', 'time_since', and 'time_until'.|
|description|string|true|none|A description of the property that will be shown as help text in HubSpot.|
|displayOrder|integer(int32)|false|none|The order that this property should be displayed in the HubSpot UI relative to other properties for this object type. Properties are displayed in order starting with the lowest positive integer value. A value of -1 will cause the property to be displayed **after** any positive values.|
|externalOptions|boolean|false|none|For default properties, true indicates that the options are stored externally to the property settings.|
|fieldType|string|true|none|Controls how the property appears in HubSpot.|
|formField|boolean|false|none|Whether or not the property can be used in a HubSpot form.|
|groupName|string|true|none|The name of the property group the property belongs to.|
|hasUniqueValue|boolean|false|none|Whether or not the property's value must be unique. Once set, this can't be changed.|
|hidden|boolean|false|none|Hidden options won't be shown in HubSpot.|
|hubspotDefined|boolean|false|none|This will be true for default object properties built into HubSpot.|
|label|string|true|none|A human-readable property label that will be shown in HubSpot.|
|modificationMetadata|[PropertyModificationMetadata](#schemapropertymodificationmetadata)|false|none|none|
|name|string|true|none|The internal property name, which must be used when referencing the property via the API.|
|numberDisplayHint|string|false|none|A hint for how number values should be displayed, with options like 'formatted' or 'currency'.|
|options|[[Option](#schemaoption)]|true|none|A list of valid options for the property. This field is required for enumerated properties, but will be empty for other property types.|
|referencedObjectType|string|false|none|If this property is related to other object(s), they'll be listed here.|
|sensitiveDataCategories|[string]|false|none|An array of categories that describe the types of sensitive data contained in this property.|
|showCurrencySymbol|boolean|false|none|Whether the property will display the currency symbol set in the account settings.|
|textDisplayHint|string|false|none|A hint for how text values should be displayed, with options like 'email' or 'phone_number'.|
|type|string|true|none|The property data type.|
|updatedAt|string(date-time)|false|none|When the object type was last updated.|
|updatedUserId|string|false|none|The internal user ID of the user who updated the property in HubSpot. This field may not exist if the property was updated outside of HubSpot.|

#### Enumerated Values

|Property|Value|
|---|---|
|dataSensitivity|highly_sensitive|
|dataSensitivity|non_sensitive|
|dataSensitivity|sensitive|
|dateDisplayHint|absolute|
|dateDisplayHint|absolute_with_relative|
|dateDisplayHint|time_since|
|dateDisplayHint|time_until|
|numberDisplayHint|currency|
|numberDisplayHint|duration|
|numberDisplayHint|formatted|
|numberDisplayHint|percentage|
|numberDisplayHint|probability|
|numberDisplayHint|unformatted|
|textDisplayHint|domain_name|
|textDisplayHint|email|
|textDisplayHint|ip_address|
|textDisplayHint|multi_line|
|textDisplayHint|phone_number|
|textDisplayHint|physical_address|
|textDisplayHint|postal_code|
|textDisplayHint|unformatted_single_line|

<h2 id="tocS_PropertyModificationMetadata">PropertyModificationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemapropertymodificationmetadata"></a>
<a id="schema_PropertyModificationMetadata"></a>
<a id="tocSpropertymodificationmetadata"></a>
<a id="tocspropertymodificationmetadata"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archivable|boolean|true|none|Indicates whether the property can be archived.|
|readOnlyDefinition|boolean|true|none|Indicates whether the property's definition is read-only.|
|readOnlyOptions|boolean|false|none|Indicates whether the property's options are read-only.|
|readOnlyValue|boolean|true|none|Indicates whether the property's value is read-only.|
