<h1 id="finspace-public-api">FinSpace Public API v2020-07-13</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

 The FinSpace APIs let you take actions inside the FinSpace.

Base URLs:

* <a href="http://finspace-api.us-east-1.amazonaws.com">http://finspace-api.us-east-1.amazonaws.com</a> - The FinSpace Data multi-region endpoint

* <a href="https://finspace-api.us-east-1.amazonaws.com">https://finspace-api.us-east-1.amazonaws.com</a> - The FinSpace Data multi-region endpoint

* <a href="http://finspace-api.cn-north-1.amazonaws.com.cn">http://finspace-api.cn-north-1.amazonaws.com.cn</a> - The FinSpace Data endpoint for China (Beijing) and China (Ningxia)

* <a href="https://finspace-api.cn-north-1.amazonaws.com.cn">https://finspace-api.cn-north-1.amazonaws.com.cn</a> - The FinSpace Data endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/finspace-api/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="finspace-public-api-default">Default</h1>

## AssociateUserToPermissionGroup

<a id="opIdAssociateUserToPermissionGroup"></a>

> Code samples

```bash
curl https://finspace-data.us-east-1.amazonaws.com/permission-group/string/users/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "string"
  }'
```

`POST /permission-group/{permissionGroupId}/users/{userId}`

Adds a user account to a permission group to grant permissions for actions a user can perform in FinSpace.

> Body parameter

```json
{
  "clientToken": "string"
}
```

<h3 id="associateusertopermissiongroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|permissionGroupId|path|string|true|The unique identifier for the permission group.|
|userId|path|string|true|The unique identifier for the user.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» clientToken|body|string|false|Idempotence Token for API operations|

> Example responses

> 200 Response

```json
{
  "statusCode": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="associateusertopermissiongroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateUserToPermissionGroupResponse](#schemaassociateusertopermissiongroupresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateUserFromPermissionGroup

<a id="opIdDisassociateUserFromPermissionGroup"></a>

> Code samples

```bash
curl https://finspace-data.us-east-1.amazonaws.com/permission-group/string/users/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /permission-group/{permissionGroupId}/users/{userId}`

Removes a user account from a permission group.

<h3 id="disassociateuserfrompermissiongroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|permissionGroupId|path|string|true|The unique identifier for the permission group.|
|userId|path|string|true|The unique identifier for the user.|
|clientToken|query|string|false|A token that ensures idempotency. This token expires in 10 minutes.|
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
  "statusCode": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="disassociateuserfrompermissiongroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateUserFromPermissionGroupResponse](#schemadisassociateuserfrompermissiongroupresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListChangesets

<a id="opIdListChangesets"></a>

> Code samples

```bash
curl https://finspace-data.us-east-1.amazonaws.com/datasets/string/changesetsv2 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /datasets/{datasetId}/changesetsv2`

Lists the FinSpace Changesets for a Dataset.

<h3 id="listchangesets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datasetId|path|string|true|The unique identifier for the FinSpace Dataset to which the Changeset belongs.|
|maxResults|query|integer|false|The maximum number of results per page.|
|nextToken|query|string|false|A token that indicates where a results page should begin.|
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
  "changesets": {},
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

> 485 Response

```json
null
```

<h3 id="listchangesets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListChangesetsResponse](#schemalistchangesetsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateChangeset

<a id="opIdCreateChangeset"></a>

> Code samples

```bash
curl https://finspace-data.us-east-1.amazonaws.com/datasets/string/changesetsv2 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "string",
    "changeType": "REPLACE",
    "sourceParams": {
      "property1": "string",
      "property2": "string"
    },
    "formatParams": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /datasets/{datasetId}/changesetsv2`

Creates a new Changeset in a FinSpace Dataset.

> Body parameter

```json
{
  "clientToken": "string",
  "changeType": "REPLACE",
  "sourceParams": {
    "property1": "string",
    "property2": "string"
  },
  "formatParams": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createchangeset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datasetId|path|string|true|The unique identifier for the FinSpace Dataset where the Changeset will be created. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» clientToken|body|string|false|Idempotence Token for API operations|
|» changeType|body|string|true|Indicates how the given change will be applied to the dataset.|
|» sourceParams|body|object|true|Source Parameters of a Changeset|
|» » **additionalProperties**|body|[StringMapValue](#schemastringmapvalue)|false|none|
|» formatParams|body|object|true|Format Parameters of a Changeset|
|» » **additionalProperties**|body|[StringMapValue](#schemastringmapvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» changeType|REPLACE|
|» changeType|APPEND|
|» changeType|MODIFY|

> Example responses

> 200 Response

```json
{
  "datasetId": {},
  "changesetId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="createchangeset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateChangesetResponse](#schemacreatechangesetresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDataViews

<a id="opIdListDataViews"></a>

> Code samples

```bash
curl https://finspace-data.us-east-1.amazonaws.com/datasets/string/dataviewsv2 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /datasets/{datasetId}/dataviewsv2`

Lists all available Dataviews for a Dataset.

<h3 id="listdataviews-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datasetId|path|string|true|The unique identifier of the Dataset for which to retrieve Dataviews.|
|nextToken|query|string|false|A token that indicates where a results page should begin.|
|maxResults|query|integer|false|The maximum number of results per page.|
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
  "nextToken": {},
  "dataViews": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="listdataviews-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDataViewsResponse](#schemalistdataviewsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDataView

<a id="opIdCreateDataView"></a>

> Code samples

```bash
curl https://finspace-data.us-east-1.amazonaws.com/datasets/string/dataviewsv2 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "string",
    "autoUpdate": true,
    "sortColumns": [
      "string"
    ],
    "partitionColumns": [
      "string"
    ],
    "asOfTimestamp": 0,
    "destinationTypeParams": {
      "destinationType": {},
      "s3DestinationExportFileFormat": {},
      "s3DestinationExportFileFormatOptions": {
        "property1": "string",
        "property2": "string"
      }
    }
  }'
```

`POST /datasets/{datasetId}/dataviewsv2`

Creates a Dataview for a Dataset.

> Body parameter

```json
{
  "clientToken": "string",
  "autoUpdate": true,
  "sortColumns": [
    "string"
  ],
  "partitionColumns": [
    "string"
  ],
  "asOfTimestamp": 0,
  "destinationTypeParams": {
    "destinationType": {},
    "s3DestinationExportFileFormat": {},
    "s3DestinationExportFileFormatOptions": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

<h3 id="createdataview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datasetId|path|string|true|The unique Dataset identifier that is used to create a Dataview.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» clientToken|body|string|false|Idempotence Token for API operations|
|» autoUpdate|body|boolean|false|Common Boolean data type|
|» sortColumns|body|[[StringValueLength1to255](#schemastringvaluelength1to255)]|false|DataView Sort Column List|
|» partitionColumns|body|[[StringValueLength1to255](#schemastringvaluelength1to255)]|false|DataView Partition Column List|
|» asOfTimestamp|body|integer|false|Milliseconds since UTC epoch|
|» destinationTypeParams|body|object|true|Structure for the Dataview destination type parameters.|
|» » destinationType|body|object|false|none|
|» » s3DestinationExportFileFormat|body|object|false|none|
|» » s3DestinationExportFileFormatOptions|body|object|false|none|
|» » » **additionalProperties**|body|[StringMapValue](#schemastringmapvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "datasetId": {},
  "dataViewId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="createdataview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDataViewResponse](#schemacreatedataviewresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDatasets

<a id="opIdListDatasets"></a>

> Code samples

```bash
curl https://finspace-data.us-east-1.amazonaws.com/datasetsv2 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /datasetsv2`

Lists all of the active Datasets that a user has access to.

<h3 id="listdatasets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|A token that indicates where a results page should begin.|
|maxResults|query|integer|false|The maximum number of results per page.|
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
  "datasets": {},
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

<h3 id="listdatasets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDatasetsResponse](#schemalistdatasetsresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDataset

<a id="opIdCreateDataset"></a>

> Code samples

```bash
curl https://finspace-data.us-east-1.amazonaws.com/datasetsv2 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "string",
    "datasetTitle": "string",
    "kind": "TABULAR",
    "datasetDescription": "string",
    "ownerInfo": {
      "name": {},
      "phoneNumber": {},
      "email": {}
    },
    "permissionGroupParams": {
      "permissionGroupId": {},
      "datasetPermissions": {}
    },
    "alias": "string",
    "schemaDefinition": {
      "tabularSchemaConfig": {
        "columns": {},
        "primaryKeyColumns": {}
      }
    }
  }'
```

`POST /datasetsv2`

Creates a new FinSpace Dataset.

> Body parameter

```json
{
  "clientToken": "string",
  "datasetTitle": "string",
  "kind": "TABULAR",
  "datasetDescription": "string",
  "ownerInfo": {
    "name": {},
    "phoneNumber": {},
    "email": {}
  },
  "permissionGroupParams": {
    "permissionGroupId": {},
    "datasetPermissions": {}
  },
  "alias": "string",
  "schemaDefinition": {
    "tabularSchemaConfig": {
      "columns": {},
      "primaryKeyColumns": {}
    }
  }
}
```

<h3 id="createdataset-parameters">Parameters</h3>

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
|» clientToken|body|string|false|Idempotence Token for API operations|
|» datasetTitle|body|string|true|Title for a given Dataset|
|» kind|body|string|true|Dataset Kind|
|» datasetDescription|body|string|false|Description of a dataset|
|» ownerInfo|body|object|false|A structure for Dataset owner info.|
|» » name|body|object|false|none|
|» » phoneNumber|body|object|false|none|
|» » email|body|object|false|none|
|» permissionGroupParams|body|object|true|<p>Permission group parameters for Dataset permissions.</p> <p>Here is an example of how you could specify the <code>PermissionGroupParams</code>:</p> <p> <code> { "permissionGroupId": "0r6fCRtSTUk4XPfXQe3M0g", "datasetPermissions": [ {"permission": "ViewDatasetDetails"}, {"permission": "AddDatasetData"}, {"permission": "EditDatasetMetadata"}, {"permission": "DeleteDataset"} ] } </code> </p>|
|» » permissionGroupId|body|object|false|none|
|» » datasetPermissions|body|object|false|none|
|» alias|body|string|false|The unique resource identifier for a Dataset.|
|» schemaDefinition|body|object|false|A union of schema types.|
|» » tabularSchemaConfig|body|object|false|none|
|» » » columns|body|object|false|none|
|» » » primaryKeyColumns|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» kind|TABULAR|
|» kind|NON_TABULAR|

> Example responses

> 200 Response

```json
{
  "datasetId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="createdataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDatasetResponse](#schemacreatedatasetresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|
|486|486|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreatePermissionGroup

<a id="opIdCreatePermissionGroup"></a>

> Code samples

```bash
curl https://finspace-data.us-east-1.amazonaws.com/permission-group \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "password",
    "description": "password",
    "applicationPermissions": [
      "CreateDataset"
    ],
    "clientToken": "string"
  }'
```

`POST /permission-group`

Creates a group of permissions for various actions that a user can perform in FinSpace.

> Body parameter

```json
{
  "name": "password",
  "description": "password",
  "applicationPermissions": [
    "CreateDataset"
  ],
  "clientToken": "string"
}
```

<h3 id="createpermissiongroup-parameters">Parameters</h3>

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
|» name|body|string(password)|true|The name of the permission group.|
|» description|body|string(password)|false|A brief description for the permission group.|
|» applicationPermissions|body|[[ApplicationPermission](#schemaapplicationpermission)]|true|<p>The option to indicate FinSpace application permissions that are granted to a specific group.</p> <important> <p>When assigning application permissions, be aware that the permission <code>ManageUsersAndGroups</code> allows users to grant themselves or others access to any functionality in their FinSpace environment's application. It should only be granted to trusted users.</p> </important> <ul> <li> <p> <code>CreateDataset</code> – Group members can create new datasets.</p> </li> <li> <p> <code>ManageClusters</code> – Group members can manage Apache Spark clusters from FinSpace notebooks.</p> </li> <li> <p> <code>ManageUsersAndGroups</code> – Group members can manage users and permission groups. This is a privileged permission that allows users to grant themselves or others access to any functionality in the application. It should only be granted to trusted users.</p> </li> <li> <p> <code>ManageAttributeSets</code> – Group members can manage attribute sets.</p> </li> <li> <p> <code>ViewAuditData</code> – Group members can view audit data.</p> </li> <li> <p> <code>AccessNotebooks</code> – Group members will have access to FinSpace notebooks.</p> </li> <li> <p> <code>GetTemporaryCredentials</code> – Group members can get temporary API credentials.</p> </li> </ul>|
|» clientToken|body|string|false|Idempotence Token for API operations|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» applicationPermissions|CreateDataset|
|» applicationPermissions|ManageClusters|
|» applicationPermissions|ManageUsersAndGroups|
|» applicationPermissions|ManageAttributeSets|
|» applicationPermissions|ViewAuditData|
|» applicationPermissions|AccessNotebooks|
|» applicationPermissions|GetTemporaryCredentials|

> Example responses

> 200 Response

```json
{
  "permissionGroupId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="createpermissiongroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreatePermissionGroupResponse](#schemacreatepermissiongroupresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateUser

<a id="opIdCreateUser"></a>

> Code samples

```bash
curl https://finspace-data.us-east-1.amazonaws.com/user \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "emailAddress": "password",
    "type": "SUPER_USER",
    "firstName": "password",
    "lastName": "password",
    "ApiAccess": "ENABLED",
    "apiAccessPrincipalArn": "stringstringstringst",
    "clientToken": "string"
  }'
```

`POST /user`

Creates a new user in FinSpace.

> Body parameter

```json
{
  "emailAddress": "password",
  "type": "SUPER_USER",
  "firstName": "password",
  "lastName": "password",
  "ApiAccess": "ENABLED",
  "apiAccessPrincipalArn": "stringstringstringst",
  "clientToken": "string"
}
```

<h3 id="createuser-parameters">Parameters</h3>

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
|» emailAddress|body|string(password)|true|The email address of the user that you want to register. The email address serves as a uniquer identifier for each user and cannot be changed after it's created.|
|» type|body|string|true|<p>The option to indicate the type of user. Use one of the following options to specify this parameter:</p> <ul> <li> <p> <code>SUPER_USER</code> – A user with permission to all the functionality and data in FinSpace.</p> </li> <li> <p> <code>APP_USER</code> – A user with specific permissions in FinSpace. The users are assigned permissions by adding them to a permission group.</p> </li> </ul>|
|» firstName|body|string(password)|false|The first name of the user that you want to register.|
|» lastName|body|string(password)|false|The last name of the user that you want to register.|
|» ApiAccess|body|string|false|<p>The option to indicate whether the user can use the <code>GetProgrammaticAccessCredentials</code> API to obtain credentials that can then be used to access other FinSpace Data API operations.</p> <ul> <li> <p> <code>ENABLED</code> – The user has permissions to use the APIs.</p> </li> <li> <p> <code>DISABLED</code> – The user does not have permissions to use any APIs.</p> </li> </ul>|
|» apiAccessPrincipalArn|body|string|false|The ARN identifier of an AWS user or role that is allowed to call the <code>GetProgrammaticAccessCredentials</code> API to obtain a credentials token for a specific FinSpace user. This must be an IAM role within your FinSpace account.|
|» clientToken|body|string|false|Idempotence Token for API operations|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|SUPER_USER|
|» type|APP_USER|
|» ApiAccess|ENABLED|
|» ApiAccess|DISABLED|

> Example responses

> 200 Response

```json
{
  "userId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="createuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateUserResponse](#schemacreateuserresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDataset

<a id="opIdGetDataset"></a>

> Code samples

```bash
curl https://finspace-data.us-east-1.amazonaws.com/datasetsv2/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /datasetsv2/{datasetId}`

Returns information about a Dataset.

<h3 id="getdataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datasetId|path|string|true|The unique identifier for a Dataset.|
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
  "datasetId": {},
  "datasetArn": {},
  "datasetTitle": {},
  "kind": {},
  "datasetDescription": {},
  "createTime": {},
  "lastModifiedTime": {},
  "schemaDefinition": {
    "tabularSchemaConfig": {
      "columns": {},
      "primaryKeyColumns": {}
    }
  },
  "alias": {},
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

> 485 Response

```json
null
```

<h3 id="getdataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDatasetResponse](#schemagetdatasetresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDataset

<a id="opIdUpdateDataset"></a>

> Code samples

```bash
curl https://finspace-data.us-east-1.amazonaws.com/datasetsv2/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "string",
    "datasetTitle": "string",
    "kind": "TABULAR",
    "datasetDescription": "string",
    "alias": "string",
    "schemaDefinition": {
      "tabularSchemaConfig": {
        "columns": {},
        "primaryKeyColumns": {}
      }
    }
  }'
```

`PUT /datasetsv2/{datasetId}`

Updates a FinSpace Dataset.

> Body parameter

```json
{
  "clientToken": "string",
  "datasetTitle": "string",
  "kind": "TABULAR",
  "datasetDescription": "string",
  "alias": "string",
  "schemaDefinition": {
    "tabularSchemaConfig": {
      "columns": {},
      "primaryKeyColumns": {}
    }
  }
}
```

<h3 id="updatedataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datasetId|path|string|true|The unique identifier for the Dataset to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» clientToken|body|string|false|Idempotence Token for API operations|
|» datasetTitle|body|string|true|Title for a given Dataset|
|» kind|body|string|true|Dataset Kind|
|» datasetDescription|body|string|false|Description of a dataset|
|» alias|body|string|false|The unique resource identifier for a Dataset.|
|» schemaDefinition|body|object|false|A union of schema types.|
|» » tabularSchemaConfig|body|object|false|none|
|» » » columns|body|object|false|none|
|» » » primaryKeyColumns|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» kind|TABULAR|
|» kind|NON_TABULAR|

> Example responses

> 200 Response

```json
{
  "datasetId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="updatedataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDatasetResponse](#schemaupdatedatasetresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDataset

<a id="opIdDeleteDataset"></a>

> Code samples

```bash
curl https://finspace-data.us-east-1.amazonaws.com/datasetsv2/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /datasetsv2/{datasetId}`

Deletes a FinSpace Dataset.

<h3 id="deletedataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clientToken|query|string|false|A token that ensures idempotency. This token expires in 10 minutes.|
|datasetId|path|string|true|The unique identifier of the Dataset to be deleted.|
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
  "datasetId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="deletedataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDatasetResponse](#schemadeletedatasetresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetPermissionGroup

<a id="opIdGetPermissionGroup"></a>

> Code samples

```bash
curl https://finspace-data.us-east-1.amazonaws.com/permission-group/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /permission-group/{permissionGroupId}`

Retrieves the details of a specific permission group.

<h3 id="getpermissiongroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|permissionGroupId|path|string|true|The unique identifier for the permission group.|
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
  "permissionGroup": {
    "permissionGroupId": {},
    "name": {},
    "description": {},
    "applicationPermissions": {},
    "createTime": {},
    "lastModifiedTime": {},
    "membershipStatus": {}
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

<h3 id="getpermissiongroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPermissionGroupResponse](#schemagetpermissiongroupresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdatePermissionGroup

<a id="opIdUpdatePermissionGroup"></a>

> Code samples

```bash
curl https://finspace-data.us-east-1.amazonaws.com/permission-group/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "password",
    "description": "password",
    "applicationPermissions": [
      "CreateDataset"
    ],
    "clientToken": "string"
  }'
```

`PUT /permission-group/{permissionGroupId}`

Modifies the details of a permission group. You cannot modify a <code>permissionGroupID</code>.

> Body parameter

```json
{
  "name": "password",
  "description": "password",
  "applicationPermissions": [
    "CreateDataset"
  ],
  "clientToken": "string"
}
```

<h3 id="updatepermissiongroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|permissionGroupId|path|string|true|The unique identifier for the permission group to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» name|body|string(password)|false|The name of the permission group.|
|» description|body|string(password)|false|A brief description for the permission group.|
|» applicationPermissions|body|[[ApplicationPermission](#schemaapplicationpermission)]|false|<p>The permissions that are granted to a specific group for accessing the FinSpace application.</p> <important> <p>When assigning application permissions, be aware that the permission <code>ManageUsersAndGroups</code> allows users to grant themselves or others access to any functionality in their FinSpace environment's application. It should only be granted to trusted users.</p> </important> <ul> <li> <p> <code>CreateDataset</code> – Group members can create new datasets.</p> </li> <li> <p> <code>ManageClusters</code> – Group members can manage Apache Spark clusters from FinSpace notebooks.</p> </li> <li> <p> <code>ManageUsersAndGroups</code> – Group members can manage users and permission groups. This is a privileged permission that allows users to grant themselves or others access to any functionality in the application. It should only be granted to trusted users.</p> </li> <li> <p> <code>ManageAttributeSets</code> – Group members can manage attribute sets.</p> </li> <li> <p> <code>ViewAuditData</code> – Group members can view audit data.</p> </li> <li> <p> <code>AccessNotebooks</code> – Group members will have access to FinSpace notebooks.</p> </li> <li> <p> <code>GetTemporaryCredentials</code> – Group members can get temporary API credentials.</p> </li> </ul>|
|» clientToken|body|string|false|Idempotence Token for API operations|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» applicationPermissions|CreateDataset|
|» applicationPermissions|ManageClusters|
|» applicationPermissions|ManageUsersAndGroups|
|» applicationPermissions|ManageAttributeSets|
|» applicationPermissions|ViewAuditData|
|» applicationPermissions|AccessNotebooks|
|» applicationPermissions|GetTemporaryCredentials|

> Example responses

> 200 Response

```json
{
  "permissionGroupId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="updatepermissiongroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdatePermissionGroupResponse](#schemaupdatepermissiongroupresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePermissionGroup

<a id="opIdDeletePermissionGroup"></a>

> Code samples

```bash
curl https://finspace-data.us-east-1.amazonaws.com/permission-group/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /permission-group/{permissionGroupId}`

Deletes a permission group. This action is irreversible.

<h3 id="deletepermissiongroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|permissionGroupId|path|string|true|The unique identifier for the permission group that you want to delete.|
|clientToken|query|string|false|A token that ensures idempotency. This token expires in 10 minutes.|
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
  "permissionGroupId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="deletepermissiongroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeletePermissionGroupResponse](#schemadeletepermissiongroupresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisableUser

<a id="opIdDisableUser"></a>

> Code samples

```bash
curl https://finspace-data.us-east-1.amazonaws.com/user/string/disable \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "string"
  }'
```

`POST /user/{userId}/disable`

Denies access to the FinSpace web application and API for the specified user.

> Body parameter

```json
{
  "clientToken": "string"
}
```

<h3 id="disableuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The unique identifier for the user account that you want to disable.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» clientToken|body|string|false|Idempotence Token for API operations|

> Example responses

> 200 Response

```json
{
  "userId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="disableuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisableUserResponse](#schemadisableuserresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## EnableUser

<a id="opIdEnableUser"></a>

> Code samples

```bash
curl https://finspace-data.us-east-1.amazonaws.com/user/string/enable \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "string"
  }'
```

`POST /user/{userId}/enable`

 Allows the specified user to access the FinSpace web application and API.

> Body parameter

```json
{
  "clientToken": "string"
}
```

<h3 id="enableuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The unique identifier for the user account that you want to enable.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» clientToken|body|string|false|Idempotence Token for API operations|

> Example responses

> 200 Response

```json
{
  "userId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="enableuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EnableUserResponse](#schemaenableuserresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetChangeset

<a id="opIdGetChangeset"></a>

> Code samples

```bash
curl https://finspace-data.us-east-1.amazonaws.com/datasets/string/changesetsv2/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /datasets/{datasetId}/changesetsv2/{changesetId}`

Get information about a Changeset.

<h3 id="getchangeset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datasetId|path|string|true|The unique identifier for the FinSpace Dataset where the Changeset is created.|
|changesetId|path|string|true|The unique identifier of the Changeset for which to get data.|
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
  "changesetId": {},
  "changesetArn": {},
  "datasetId": {},
  "changeType": {},
  "sourceParams": {
    "property1": "string",
    "property2": "string"
  },
  "formatParams": {
    "property1": "string",
    "property2": "string"
  },
  "createTime": {},
  "status": {},
  "errorInfo": {
    "errorMessage": {},
    "errorCategory": {}
  },
  "activeUntilTimestamp": {},
  "activeFromTimestamp": {},
  "updatesChangesetId": {},
  "updatedByChangesetId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="getchangeset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetChangesetResponse](#schemagetchangesetresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateChangeset

<a id="opIdUpdateChangeset"></a>

> Code samples

```bash
curl https://finspace-data.us-east-1.amazonaws.com/datasets/string/changesetsv2/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "string",
    "sourceParams": {
      "property1": "string",
      "property2": "string"
    },
    "formatParams": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PUT /datasets/{datasetId}/changesetsv2/{changesetId}`

Updates a FinSpace Changeset.

> Body parameter

```json
{
  "clientToken": "string",
  "sourceParams": {
    "property1": "string",
    "property2": "string"
  },
  "formatParams": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="updatechangeset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datasetId|path|string|true|The unique identifier for the FinSpace Dataset in which the Changeset is created.|
|changesetId|path|string|true|The unique identifier for the Changeset to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» clientToken|body|string|false|Idempotence Token for API operations|
|» sourceParams|body|object|true|Source Parameters of a Changeset|
|» » **additionalProperties**|body|[StringMapValue](#schemastringmapvalue)|false|none|
|» formatParams|body|object|true|Format Parameters of a Changeset|
|» » **additionalProperties**|body|[StringMapValue](#schemastringmapvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "changesetId": {},
  "datasetId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="updatechangeset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateChangesetResponse](#schemaupdatechangesetresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDataView

<a id="opIdGetDataView"></a>

> Code samples

```bash
curl https://finspace-data.us-east-1.amazonaws.com/datasets/string/dataviewsv2/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /datasets/{datasetId}/dataviewsv2/{dataviewId}`

Gets information about a Dataview.

<h3 id="getdataview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataviewId|path|string|true|The unique identifier for the Dataview.|
|datasetId|path|string|true|The unique identifier for the Dataset used in the Dataview.|
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
  "autoUpdate": {},
  "partitionColumns": {},
  "datasetId": {},
  "asOfTimestamp": {},
  "errorInfo": {
    "errorMessage": {},
    "errorCategory": {}
  },
  "lastModifiedTime": {},
  "createTime": {},
  "sortColumns": {},
  "dataViewId": {},
  "dataViewArn": {},
  "destinationTypeParams": {
    "destinationType": {},
    "s3DestinationExportFileFormat": {},
    "s3DestinationExportFileFormatOptions": {
      "property1": "string",
      "property2": "string"
    }
  },
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

<h3 id="getdataview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDataViewResponse](#schemagetdataviewresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetExternalDataViewAccessDetails

<a id="opIdGetExternalDataViewAccessDetails"></a>

> Code samples

```bash
curl https://finspace-data.us-east-1.amazonaws.com/datasets/string/dataviewsv2/string/external-access-details \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /datasets/{datasetId}/dataviewsv2/{dataviewId}/external-access-details`

<p>Returns the credentials to access the external Dataview from an S3 location. To call this API:</p> <ul> <li> <p>You must retrieve the programmatic credentials.</p> </li> <li> <p>You must be a member of a FinSpace user group, where the dataset that you want to access has <code>Read Dataset Data</code> permissions.</p> </li> </ul>

<h3 id="getexternaldataviewaccessdetails-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataviewId|path|string|true|The unique identifier for the Dataview that you want to access.|
|datasetId|path|string|true|The unique identifier for the Dataset.|
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
  "credentials": {
    "accessKeyId": {},
    "secretAccessKey": {},
    "sessionToken": {},
    "expiration": {}
  },
  "s3Location": {
    "bucket": {},
    "key": {}
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

<h3 id="getexternaldataviewaccessdetails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetExternalDataViewAccessDetailsResponse](#schemagetexternaldataviewaccessdetailsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetProgrammaticAccessCredentials

<a id="opIdGetProgrammaticAccessCredentials"></a>

> Code samples

```bash
curl 'https://finspace-data.us-east-1.amazonaws.com/credentials/programmatic#environmentId?environmentId=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /credentials/programmatic#environmentId`

Request programmatic credentials to use with FinSpace SDK.

<h3 id="getprogrammaticaccesscredentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|durationInMinutes|query|integer|false|The time duration in which the credentials remain valid. |
|environmentId|query|string|true|The FinSpace environment identifier.|
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
  "credentials": {
    "accessKeyId": {},
    "secretAccessKey": {},
    "sessionToken": {}
  },
  "durationInMinutes": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getprogrammaticaccesscredentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetProgrammaticAccessCredentialsResponse](#schemagetprogrammaticaccesscredentialsresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetUser

<a id="opIdGetUser"></a>

> Code samples

```bash
curl https://finspace-data.us-east-1.amazonaws.com/user/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /user/{userId}`

Retrieves details for a specific user.

<h3 id="getuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The unique identifier of the user to get data for.|
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
  "userId": {},
  "status": {},
  "firstName": {},
  "lastName": {},
  "emailAddress": {},
  "type": {},
  "apiAccess": {},
  "apiAccessPrincipalArn": {},
  "createTime": {},
  "lastEnabledTime": {},
  "lastDisabledTime": {},
  "lastModifiedTime": {},
  "lastLoginTime": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="getuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetUserResponse](#schemagetuserresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateUser

<a id="opIdUpdateUser"></a>

> Code samples

```bash
curl https://finspace-data.us-east-1.amazonaws.com/user/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "type": "SUPER_USER",
    "firstName": "password",
    "lastName": "password",
    "apiAccess": "ENABLED",
    "apiAccessPrincipalArn": "stringstringstringst",
    "clientToken": "string"
  }'
```

`PUT /user/{userId}`

Modifies the details of the specified user account. You cannot update the <code>userId</code> for a user.

> Body parameter

```json
{
  "type": "SUPER_USER",
  "firstName": "password",
  "lastName": "password",
  "apiAccess": "ENABLED",
  "apiAccessPrincipalArn": "stringstringstringst",
  "clientToken": "string"
}
```

<h3 id="updateuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The unique identifier for the user account to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» type|body|string|false|<p>The option to indicate the type of user.</p> <ul> <li> <p> <code>SUPER_USER</code>– A user with permission to all the functionality and data in FinSpace.</p> </li> <li> <p> <code>APP_USER</code> – A user with specific permissions in FinSpace. The users are assigned permissions by adding them to a permission group.</p> </li> </ul>|
|» firstName|body|string(password)|false|The first name of the user.|
|» lastName|body|string(password)|false|The last name of the user.|
|» apiAccess|body|string|false|<p>The option to indicate whether the user can use the <code>GetProgrammaticAccessCredentials</code> API to obtain credentials that can then be used to access other FinSpace Data API operations.</p> <ul> <li> <p> <code>ENABLED</code> – The user has permissions to use the APIs.</p> </li> <li> <p> <code>DISABLED</code> – The user does not have permissions to use any APIs.</p> </li> </ul>|
|» apiAccessPrincipalArn|body|string|false|The ARN identifier of an AWS user or role that is allowed to call the <code>GetProgrammaticAccessCredentials</code> API to obtain a credentials token for a specific FinSpace user. This must be an IAM role within your FinSpace account.|
|» clientToken|body|string|false|Idempotence Token for API operations|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|SUPER_USER|
|» type|APP_USER|
|» apiAccess|ENABLED|
|» apiAccess|DISABLED|

> Example responses

> 200 Response

```json
{
  "userId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="updateuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateUserResponse](#schemaupdateuserresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetWorkingLocation

<a id="opIdGetWorkingLocation"></a>

> Code samples

```bash
curl https://finspace-data.us-east-1.amazonaws.com/workingLocationV1 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "locationType": "INGESTION"
  }'
```

`POST /workingLocationV1`

A temporary Amazon S3 location, where you can copy your files from a source location to stage or use as a scratch space in FinSpace notebook.

> Body parameter

```json
{
  "locationType": "INGESTION"
}
```

<h3 id="getworkinglocation-parameters">Parameters</h3>

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
|» locationType|body|string|false|<p>Specify the type of the working location.</p> <ul> <li> <p> <code>SAGEMAKER</code> – Use the Amazon S3 location as a temporary location to store data content when working with FinSpace Notebooks that run on SageMaker studio.</p> </li> <li> <p> <code>INGESTION</code> – Use the Amazon S3 location as a staging location to copy your data content and then use the location with the Changeset creation operation.</p> </li> </ul>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» locationType|INGESTION|
|» locationType|SAGEMAKER|

> Example responses

> 200 Response

```json
{
  "s3Uri": {},
  "s3Path": {},
  "s3Bucket": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getworkinglocation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetWorkingLocationResponse](#schemagetworkinglocationresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPermissionGroups

<a id="opIdListPermissionGroups"></a>

> Code samples

```bash
curl 'https://finspace-data.us-east-1.amazonaws.com/permission-group#maxResults?maxResults=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /permission-group#maxResults`

Lists all available permission groups in FinSpace.

<h3 id="listpermissiongroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|A token that indicates where a results page should begin.|
|maxResults|query|integer|true|The maximum number of results per page.|
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
  "permissionGroups": {},
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

<h3 id="listpermissiongroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPermissionGroupsResponse](#schemalistpermissiongroupsresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPermissionGroupsByUser

<a id="opIdListPermissionGroupsByUser"></a>

> Code samples

```bash
curl 'https://finspace-data.us-east-1.amazonaws.com/user/string/permission-groups#maxResults?maxResults=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /user/{userId}/permission-groups#maxResults`

Lists all the permission groups that are associated with a specific user account.

<h3 id="listpermissiongroupsbyuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The unique identifier for the user.|
|nextToken|query|string|false|A token that indicates where a results page should begin.|
|maxResults|query|integer|true|The maximum number of results per page.|
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
  "permissionGroups": {},
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

<h3 id="listpermissiongroupsbyuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPermissionGroupsByUserResponse](#schemalistpermissiongroupsbyuserresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListUsers

<a id="opIdListUsers"></a>

> Code samples

```bash
curl 'https://finspace-data.us-east-1.amazonaws.com/user#maxResults?maxResults=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /user#maxResults`

Lists all available user accounts in FinSpace.

<h3 id="listusers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|A token that indicates where a results page should begin.|
|maxResults|query|integer|true|The maximum number of results per page.|
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
  "users": {},
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

<h3 id="listusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListUsersResponse](#schemalistusersresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListUsersByPermissionGroup

<a id="opIdListUsersByPermissionGroup"></a>

> Code samples

```bash
curl 'https://finspace-data.us-east-1.amazonaws.com/permission-group/string/users#maxResults?maxResults=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /permission-group/{permissionGroupId}/users#maxResults`

Lists details of all the users in a specific permission group.

<h3 id="listusersbypermissiongroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|permissionGroupId|path|string|true|The unique identifier for the permission group.|
|nextToken|query|string|false|A token that indicates where a results page should begin.|
|maxResults|query|integer|true|The maximum number of results per page.|
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
  "users": {},
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

<h3 id="listusersbypermissiongroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListUsersByPermissionGroupResponse](#schemalistusersbypermissiongroupresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ResetUserPassword

<a id="opIdResetUserPassword"></a>

> Code samples

```bash
curl https://finspace-data.us-east-1.amazonaws.com/user/string/password \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientToken": "string"
  }'
```

`POST /user/{userId}/password`

Resets the password for a specified user ID and generates a temporary one. Only a superuser can reset password for other users. Resetting the password immediately invalidates the previous password associated with the user.

> Body parameter

```json
{
  "clientToken": "string"
}
```

<h3 id="resetuserpassword-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The unique identifier of the user that a temporary password is requested for.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» clientToken|body|string|false|Idempotence Token for API operations|

> Example responses

> 200 Response

```json
{
  "userId": {},
  "temporaryPassword": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
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

<h3 id="resetuserpassword-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResetUserPasswordResponse](#schemaresetuserpasswordresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AssociateUserToPermissionGroupResponse">AssociateUserToPermissionGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociateusertopermissiongroupresponse"></a>
<a id="schema_AssociateUserToPermissionGroupResponse"></a>
<a id="tocSassociateusertopermissiongroupresponse"></a>
<a id="tocsassociateusertopermissiongroupresponse"></a>

```json
{
  "statusCode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|object|false|none|none|

<h2 id="tocS_InternalServerException">InternalServerException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserverexception"></a>
<a id="schema_InternalServerException"></a>
<a id="tocSinternalserverexception"></a>
<a id="tocsinternalserverexception"></a>

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

<h2 id="tocS_ThrottlingException">ThrottlingException</h2>
<!-- backwards compatibility -->
<a id="schemathrottlingexception"></a>
<a id="schema_ThrottlingException"></a>
<a id="tocSthrottlingexception"></a>
<a id="tocsthrottlingexception"></a>

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

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

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

<h2 id="tocS_CreateChangesetResponse">CreateChangesetResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatechangesetresponse"></a>
<a id="schema_CreateChangesetResponse"></a>
<a id="tocScreatechangesetresponse"></a>
<a id="tocscreatechangesetresponse"></a>

```json
{
  "datasetId": {},
  "changesetId": {}
}
```

The response from a CreateChangeset operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetId|object|false|none|none|
|changesetId|object|false|none|none|

<h2 id="tocS_StringMapValue">StringMapValue</h2>
<!-- backwards compatibility -->
<a id="schemastringmapvalue"></a>
<a id="schema_StringMapValue"></a>
<a id="tocSstringmapvalue"></a>
<a id="tocsstringmapvalue"></a>

```json
"string"
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

<h2 id="tocS_CreateDataViewResponse">CreateDataViewResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedataviewresponse"></a>
<a id="schema_CreateDataViewResponse"></a>
<a id="tocScreatedataviewresponse"></a>
<a id="tocscreatedataviewresponse"></a>

```json
{
  "datasetId": {},
  "dataViewId": {}
}
```

Response for creating a data view.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetId|object|false|none|none|
|dataViewId|object|false|none|none|

<h2 id="tocS_StringValueLength1to255">StringValueLength1to255</h2>
<!-- backwards compatibility -->
<a id="schemastringvaluelength1to255"></a>
<a id="schema_StringValueLength1to255"></a>
<a id="tocSstringvaluelength1to255"></a>
<a id="tocsstringvaluelength1to255"></a>

```json
"string"
```

1 - 255 character String

<h2 id="tocS_DataViewDestinationType">DataViewDestinationType</h2>
<!-- backwards compatibility -->
<a id="schemadataviewdestinationtype"></a>
<a id="schema_DataViewDestinationType"></a>
<a id="tocSdataviewdestinationtype"></a>
<a id="tocsdataviewdestinationtype"></a>

```json
"string"
```

DataView Destination Type

<h2 id="tocS_ExportFileFormat">ExportFileFormat</h2>
<!-- backwards compatibility -->
<a id="schemaexportfileformat"></a>
<a id="schema_ExportFileFormat"></a>
<a id="tocSexportfileformat"></a>
<a id="tocsexportfileformat"></a>

```json
"PARQUET"
```

Data View Export File Format

<h2 id="tocS_S3DestinationFormatOptions">S3DestinationFormatOptions</h2>
<!-- backwards compatibility -->
<a id="schemas3destinationformatoptions"></a>
<a id="schema_S3DestinationFormatOptions"></a>
<a id="tocSs3destinationformatoptions"></a>
<a id="tocss3destinationformatoptions"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[StringMapValue](#schemastringmapvalue)|false|none|none|

<h2 id="tocS_CreateDatasetResponse">CreateDatasetResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasetresponse"></a>
<a id="schema_CreateDatasetResponse"></a>
<a id="tocScreatedatasetresponse"></a>
<a id="tocscreatedatasetresponse"></a>

```json
{
  "datasetId": {}
}
```

The response from a CreateDataset operation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetId|object|false|none|none|

<h2 id="tocS_OwnerName">OwnerName</h2>
<!-- backwards compatibility -->
<a id="schemaownername"></a>
<a id="schema_OwnerName"></a>
<a id="tocSownername"></a>
<a id="tocsownername"></a>

```json
"string"
```

1 - 250 character String

<h2 id="tocS_PhoneNumber">PhoneNumber</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumber"></a>
<a id="schema_PhoneNumber"></a>
<a id="tocSphonenumber"></a>
<a id="tocsphonenumber"></a>

```json
"stringstri"
```

PhoneNumber of Dataset Owner

<h2 id="tocS_Email">Email</h2>
<!-- backwards compatibility -->
<a id="schemaemail"></a>
<a id="schema_Email"></a>
<a id="tocSemail"></a>
<a id="tocsemail"></a>

```json
"password"
```

<h2 id="tocS_PermissionGroupId">PermissionGroupId</h2>
<!-- backwards compatibility -->
<a id="schemapermissiongroupid"></a>
<a id="schema_PermissionGroupId"></a>
<a id="tocSpermissiongroupid"></a>
<a id="tocspermissiongroupid"></a>

```json
"string"
```

<h2 id="tocS_ResourcePermissionsList">ResourcePermissionsList</h2>
<!-- backwards compatibility -->
<a id="schemaresourcepermissionslist"></a>
<a id="schema_ResourcePermissionsList"></a>
<a id="tocSresourcepermissionslist"></a>
<a id="tocsresourcepermissionslist"></a>

```json
[
  {
    "permission": {}
  }
]
```

List of Resource Permissions

<h2 id="tocS_SchemaDefinition">SchemaDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaschemadefinition"></a>
<a id="schema_SchemaDefinition"></a>
<a id="tocSschemadefinition"></a>
<a id="tocsschemadefinition"></a>

```json
{
  "columns": {},
  "primaryKeyColumns": {}
}
```

Definition for a schema on a tabular Dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columns|object|false|none|none|
|primaryKeyColumns|object|false|none|none|

<h2 id="tocS_CreatePermissionGroupResponse">CreatePermissionGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatepermissiongroupresponse"></a>
<a id="schema_CreatePermissionGroupResponse"></a>
<a id="tocScreatepermissiongroupresponse"></a>
<a id="tocscreatepermissiongroupresponse"></a>

```json
{
  "permissionGroupId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissionGroupId|object|false|none|none|

<h2 id="tocS_ApplicationPermission">ApplicationPermission</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationpermission"></a>
<a id="schema_ApplicationPermission"></a>
<a id="tocSapplicationpermission"></a>
<a id="tocsapplicationpermission"></a>

```json
"CreateDataset"
```

<h2 id="tocS_CreateUserResponse">CreateUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserresponse"></a>
<a id="schema_CreateUserResponse"></a>
<a id="tocScreateuserresponse"></a>
<a id="tocscreateuserresponse"></a>

```json
{
  "userId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|object|false|none|none|

<h2 id="tocS_DeleteDatasetResponse">DeleteDatasetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedatasetresponse"></a>
<a id="schema_DeleteDatasetResponse"></a>
<a id="tocSdeletedatasetresponse"></a>
<a id="tocsdeletedatasetresponse"></a>

```json
{
  "datasetId": {}
}
```

The response from an DeleteDataset operation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetId|object|false|none|none|

<h2 id="tocS_DeletePermissionGroupResponse">DeletePermissionGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletepermissiongroupresponse"></a>
<a id="schema_DeletePermissionGroupResponse"></a>
<a id="tocSdeletepermissiongroupresponse"></a>
<a id="tocsdeletepermissiongroupresponse"></a>

```json
{
  "permissionGroupId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissionGroupId|object|false|none|none|

<h2 id="tocS_DisableUserResponse">DisableUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisableuserresponse"></a>
<a id="schema_DisableUserResponse"></a>
<a id="tocSdisableuserresponse"></a>
<a id="tocsdisableuserresponse"></a>

```json
{
  "userId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|object|false|none|none|

<h2 id="tocS_DisassociateUserFromPermissionGroupResponse">DisassociateUserFromPermissionGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateuserfrompermissiongroupresponse"></a>
<a id="schema_DisassociateUserFromPermissionGroupResponse"></a>
<a id="tocSdisassociateuserfrompermissiongroupresponse"></a>
<a id="tocsdisassociateuserfrompermissiongroupresponse"></a>

```json
{
  "statusCode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|object|false|none|none|

<h2 id="tocS_EnableUserResponse">EnableUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemaenableuserresponse"></a>
<a id="schema_EnableUserResponse"></a>
<a id="tocSenableuserresponse"></a>
<a id="tocsenableuserresponse"></a>

```json
{
  "userId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|object|false|none|none|

<h2 id="tocS_GetChangesetResponse">GetChangesetResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetchangesetresponse"></a>
<a id="schema_GetChangesetResponse"></a>
<a id="tocSgetchangesetresponse"></a>
<a id="tocsgetchangesetresponse"></a>

```json
{
  "changesetId": {},
  "changesetArn": {},
  "datasetId": {},
  "changeType": {},
  "sourceParams": {
    "property1": "string",
    "property2": "string"
  },
  "formatParams": {
    "property1": "string",
    "property2": "string"
  },
  "createTime": {},
  "status": {},
  "errorInfo": {
    "errorMessage": {},
    "errorCategory": {}
  },
  "activeUntilTimestamp": {},
  "activeFromTimestamp": {},
  "updatesChangesetId": {},
  "updatedByChangesetId": {}
}
```

The response from a describe changeset operation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changesetId|object|false|none|none|
|changesetArn|object|false|none|none|
|datasetId|object|false|none|none|
|changeType|object|false|none|none|
|sourceParams|object|false|none|none|
|formatParams|object|false|none|none|
|createTime|object|false|none|none|
|status|object|false|none|none|
|errorInfo|object|false|none|none|
|activeUntilTimestamp|object|false|none|none|
|activeFromTimestamp|object|false|none|none|
|updatesChangesetId|object|false|none|none|
|updatedByChangesetId|object|false|none|none|

<h2 id="tocS_GetDataViewResponse">GetDataViewResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdataviewresponse"></a>
<a id="schema_GetDataViewResponse"></a>
<a id="tocSgetdataviewresponse"></a>
<a id="tocsgetdataviewresponse"></a>

```json
{
  "autoUpdate": {},
  "partitionColumns": {},
  "datasetId": {},
  "asOfTimestamp": {},
  "errorInfo": {
    "errorMessage": {},
    "errorCategory": {}
  },
  "lastModifiedTime": {},
  "createTime": {},
  "sortColumns": {},
  "dataViewId": {},
  "dataViewArn": {},
  "destinationTypeParams": {
    "destinationType": {},
    "s3DestinationExportFileFormat": {},
    "s3DestinationExportFileFormatOptions": {
      "property1": "string",
      "property2": "string"
    }
  },
  "status": {}
}
```

Response from retrieving a dataview, which includes details on the target database and table name

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoUpdate|object|false|none|none|
|partitionColumns|object|false|none|none|
|datasetId|object|false|none|none|
|asOfTimestamp|object|false|none|none|
|errorInfo|object|false|none|none|
|lastModifiedTime|object|false|none|none|
|createTime|object|false|none|none|
|sortColumns|object|false|none|none|
|dataViewId|object|false|none|none|
|dataViewArn|object|false|none|none|
|destinationTypeParams|object|false|none|none|
|status|object|false|none|none|

<h2 id="tocS_GetDatasetResponse">GetDatasetResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdatasetresponse"></a>
<a id="schema_GetDatasetResponse"></a>
<a id="tocSgetdatasetresponse"></a>
<a id="tocsgetdatasetresponse"></a>

```json
{
  "datasetId": {},
  "datasetArn": {},
  "datasetTitle": {},
  "kind": {},
  "datasetDescription": {},
  "createTime": {},
  "lastModifiedTime": {},
  "schemaDefinition": {
    "tabularSchemaConfig": {
      "columns": {},
      "primaryKeyColumns": {}
    }
  },
  "alias": {},
  "status": {}
}
```

Response for the GetDataset operation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetId|object|false|none|none|
|datasetArn|object|false|none|none|
|datasetTitle|object|false|none|none|
|kind|object|false|none|none|
|datasetDescription|object|false|none|none|
|createTime|object|false|none|none|
|lastModifiedTime|object|false|none|none|
|schemaDefinition|object|false|none|none|
|alias|object|false|none|none|
|status|object|false|none|none|

<h2 id="tocS_GetExternalDataViewAccessDetailsResponse">GetExternalDataViewAccessDetailsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetexternaldataviewaccessdetailsresponse"></a>
<a id="schema_GetExternalDataViewAccessDetailsResponse"></a>
<a id="tocSgetexternaldataviewaccessdetailsresponse"></a>
<a id="tocsgetexternaldataviewaccessdetailsresponse"></a>

```json
{
  "credentials": {
    "accessKeyId": {},
    "secretAccessKey": {},
    "sessionToken": {},
    "expiration": {}
  },
  "s3Location": {
    "bucket": {},
    "key": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|credentials|object|false|none|none|
|s3Location|object|false|none|none|

<h2 id="tocS_GetPermissionGroupResponse">GetPermissionGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetpermissiongroupresponse"></a>
<a id="schema_GetPermissionGroupResponse"></a>
<a id="tocSgetpermissiongroupresponse"></a>
<a id="tocsgetpermissiongroupresponse"></a>

```json
{
  "permissionGroup": {
    "permissionGroupId": {},
    "name": {},
    "description": {},
    "applicationPermissions": {},
    "createTime": {},
    "lastModifiedTime": {},
    "membershipStatus": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissionGroup|[PermissionGroup](#schemapermissiongroup)|false|none|The structure for a permission group.|

<h2 id="tocS_GetProgrammaticAccessCredentialsResponse">GetProgrammaticAccessCredentialsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetprogrammaticaccesscredentialsresponse"></a>
<a id="schema_GetProgrammaticAccessCredentialsResponse"></a>
<a id="tocSgetprogrammaticaccesscredentialsresponse"></a>
<a id="tocsgetprogrammaticaccesscredentialsresponse"></a>

```json
{
  "credentials": {
    "accessKeyId": {},
    "secretAccessKey": {},
    "sessionToken": {}
  },
  "durationInMinutes": {}
}
```

Response for GetProgrammaticAccessCredentials operation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|credentials|object|false|none|none|
|durationInMinutes|object|false|none|none|

<h2 id="tocS_GetUserResponse">GetUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetuserresponse"></a>
<a id="schema_GetUserResponse"></a>
<a id="tocSgetuserresponse"></a>
<a id="tocsgetuserresponse"></a>

```json
{
  "userId": {},
  "status": {},
  "firstName": {},
  "lastName": {},
  "emailAddress": {},
  "type": {},
  "apiAccess": {},
  "apiAccessPrincipalArn": {},
  "createTime": {},
  "lastEnabledTime": {},
  "lastDisabledTime": {},
  "lastModifiedTime": {},
  "lastLoginTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|object|false|none|none|
|status|object|false|none|none|
|firstName|object|false|none|none|
|lastName|object|false|none|none|
|emailAddress|object|false|none|none|
|type|object|false|none|none|
|apiAccess|object|false|none|none|
|apiAccessPrincipalArn|object|false|none|none|
|createTime|object|false|none|none|
|lastEnabledTime|object|false|none|none|
|lastDisabledTime|object|false|none|none|
|lastModifiedTime|object|false|none|none|
|lastLoginTime|object|false|none|none|

<h2 id="tocS_GetWorkingLocationResponse">GetWorkingLocationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetworkinglocationresponse"></a>
<a id="schema_GetWorkingLocationResponse"></a>
<a id="tocSgetworkinglocationresponse"></a>
<a id="tocsgetworkinglocationresponse"></a>

```json
{
  "s3Uri": {},
  "s3Path": {},
  "s3Bucket": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3Uri|object|false|none|none|
|s3Path|object|false|none|none|
|s3Bucket|object|false|none|none|

<h2 id="tocS_ListChangesetsResponse">ListChangesetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistchangesetsresponse"></a>
<a id="schema_ListChangesetsResponse"></a>
<a id="tocSlistchangesetsresponse"></a>
<a id="tocslistchangesetsresponse"></a>

```json
{
  "changesets": {},
  "nextToken": {}
}
```

Response to ListChangesetsResponse. This returns a list of dataset changesets that match the query criteria.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changesets|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListDataViewsResponse">ListDataViewsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdataviewsresponse"></a>
<a id="schema_ListDataViewsResponse"></a>
<a id="tocSlistdataviewsresponse"></a>
<a id="tocslistdataviewsresponse"></a>

```json
{
  "nextToken": {},
  "dataViews": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|dataViews|object|false|none|none|

<h2 id="tocS_ListDatasetsResponse">ListDatasetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasetsresponse"></a>
<a id="schema_ListDatasetsResponse"></a>
<a id="tocSlistdatasetsresponse"></a>
<a id="tocslistdatasetsresponse"></a>

```json
{
  "datasets": {},
  "nextToken": {}
}
```

Response for the ListDatasets operation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasets|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListPermissionGroupsResponse">ListPermissionGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpermissiongroupsresponse"></a>
<a id="schema_ListPermissionGroupsResponse"></a>
<a id="tocSlistpermissiongroupsresponse"></a>
<a id="tocslistpermissiongroupsresponse"></a>

```json
{
  "permissionGroups": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissionGroups|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListPermissionGroupsByUserResponse">ListPermissionGroupsByUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpermissiongroupsbyuserresponse"></a>
<a id="schema_ListPermissionGroupsByUserResponse"></a>
<a id="tocSlistpermissiongroupsbyuserresponse"></a>
<a id="tocslistpermissiongroupsbyuserresponse"></a>

```json
{
  "permissionGroups": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissionGroups|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListUsersResponse">ListUsersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistusersresponse"></a>
<a id="schema_ListUsersResponse"></a>
<a id="tocSlistusersresponse"></a>
<a id="tocslistusersresponse"></a>

```json
{
  "users": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|users|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListUsersByPermissionGroupResponse">ListUsersByPermissionGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistusersbypermissiongroupresponse"></a>
<a id="schema_ListUsersByPermissionGroupResponse"></a>
<a id="tocSlistusersbypermissiongroupresponse"></a>
<a id="tocslistusersbypermissiongroupresponse"></a>

```json
{
  "users": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|users|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ResetUserPasswordResponse">ResetUserPasswordResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresetuserpasswordresponse"></a>
<a id="schema_ResetUserPasswordResponse"></a>
<a id="tocSresetuserpasswordresponse"></a>
<a id="tocsresetuserpasswordresponse"></a>

```json
{
  "userId": {},
  "temporaryPassword": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|object|false|none|none|
|temporaryPassword|object|false|none|none|

<h2 id="tocS_UpdateChangesetResponse">UpdateChangesetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatechangesetresponse"></a>
<a id="schema_UpdateChangesetResponse"></a>
<a id="tocSupdatechangesetresponse"></a>
<a id="tocsupdatechangesetresponse"></a>

```json
{
  "changesetId": {},
  "datasetId": {}
}
```

The response from a update changeset operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changesetId|object|false|none|none|
|datasetId|object|false|none|none|

<h2 id="tocS_UpdateDatasetResponse">UpdateDatasetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedatasetresponse"></a>
<a id="schema_UpdateDatasetResponse"></a>
<a id="tocSupdatedatasetresponse"></a>
<a id="tocsupdatedatasetresponse"></a>

```json
{
  "datasetId": {}
}
```

The response from an UpdateDataset operation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetId|object|false|none|none|

<h2 id="tocS_UpdatePermissionGroupResponse">UpdatePermissionGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepermissiongroupresponse"></a>
<a id="schema_UpdatePermissionGroupResponse"></a>
<a id="tocSupdatepermissiongroupresponse"></a>
<a id="tocsupdatepermissiongroupresponse"></a>

```json
{
  "permissionGroupId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissionGroupId|object|false|none|none|

<h2 id="tocS_UpdateUserResponse">UpdateUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserresponse"></a>
<a id="schema_UpdateUserResponse"></a>
<a id="tocSupdateuserresponse"></a>
<a id="tocsupdateuserresponse"></a>

```json
{
  "userId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|object|false|none|none|

<h2 id="tocS_AccessKeyId">AccessKeyId</h2>
<!-- backwards compatibility -->
<a id="schemaaccesskeyid"></a>
<a id="schema_AccessKeyId"></a>
<a id="tocSaccesskeyid"></a>
<a id="tocsaccesskeyid"></a>

```json
"string"
```

<h2 id="tocS_AliasString">AliasString</h2>
<!-- backwards compatibility -->
<a id="schemaaliasstring"></a>
<a id="schema_AliasString"></a>
<a id="tocSaliasstring"></a>
<a id="tocsaliasstring"></a>

```json
"string"
```

<h2 id="tocS_ApiAccess">ApiAccess</h2>
<!-- backwards compatibility -->
<a id="schemaapiaccess"></a>
<a id="schema_ApiAccess"></a>
<a id="tocSapiaccess"></a>
<a id="tocsapiaccess"></a>

```json
"ENABLED"
```

<h2 id="tocS_ApplicationPermissionList">ApplicationPermissionList</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationpermissionlist"></a>
<a id="schema_ApplicationPermissionList"></a>
<a id="tocSapplicationpermissionlist"></a>
<a id="tocsapplicationpermissionlist"></a>

```json
[
  "CreateDataset"
]
```

<h2 id="tocS_UserId">UserId</h2>
<!-- backwards compatibility -->
<a id="schemauserid"></a>
<a id="schema_UserId"></a>
<a id="tocSuserid"></a>
<a id="tocsuserid"></a>

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

Idempotence Token for API operations

<h2 id="tocS_AssociateUserToPermissionGroupRequest">AssociateUserToPermissionGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociateusertopermissiongrouprequest"></a>
<a id="schema_AssociateUserToPermissionGroupRequest"></a>
<a id="tocSassociateusertopermissiongrouprequest"></a>
<a id="tocsassociateusertopermissiongrouprequest"></a>

```json
{
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|

<h2 id="tocS_StatusCode">StatusCode</h2>
<!-- backwards compatibility -->
<a id="schemastatuscode"></a>
<a id="schema_StatusCode"></a>
<a id="tocSstatuscode"></a>
<a id="tocsstatuscode"></a>

```json
0
```

<h2 id="tocS_SecretAccessKey">SecretAccessKey</h2>
<!-- backwards compatibility -->
<a id="schemasecretaccesskey"></a>
<a id="schema_SecretAccessKey"></a>
<a id="tocSsecretaccesskey"></a>
<a id="tocssecretaccesskey"></a>

```json
"password"
```

<h2 id="tocS_SessionToken">SessionToken</h2>
<!-- backwards compatibility -->
<a id="schemasessiontoken"></a>
<a id="schema_SessionToken"></a>
<a id="tocSsessiontoken"></a>
<a id="tocssessiontoken"></a>

```json
"password"
```

<h2 id="tocS_TimestampEpoch">TimestampEpoch</h2>
<!-- backwards compatibility -->
<a id="schematimestampepoch"></a>
<a id="schema_TimestampEpoch"></a>
<a id="tocStimestampepoch"></a>
<a id="tocstimestampepoch"></a>

```json
0
```

Milliseconds since UTC epoch

<h2 id="tocS_AwsCredentials">AwsCredentials</h2>
<!-- backwards compatibility -->
<a id="schemaawscredentials"></a>
<a id="schema_AwsCredentials"></a>
<a id="tocSawscredentials"></a>
<a id="tocsawscredentials"></a>

```json
{
  "accessKeyId": {},
  "secretAccessKey": {},
  "sessionToken": {},
  "expiration": {}
}
```

 The credentials required to access the external Dataview from the S3 location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessKeyId|object|false|none|none|
|secretAccessKey|object|false|none|none|
|sessionToken|object|false|none|none|
|expiration|object|false|none|none|

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

Common Boolean data type

<h2 id="tocS_ChangeType">ChangeType</h2>
<!-- backwards compatibility -->
<a id="schemachangetype"></a>
<a id="schema_ChangeType"></a>
<a id="tocSchangetype"></a>
<a id="tocschangetype"></a>

```json
"REPLACE"
```

Indicates how the given change will be applied to the dataset.

<h2 id="tocS_ChangesetArn">ChangesetArn</h2>
<!-- backwards compatibility -->
<a id="schemachangesetarn"></a>
<a id="schema_ChangesetArn"></a>
<a id="tocSchangesetarn"></a>
<a id="tocschangesetarn"></a>

```json
"string"
```

Arn for a given Changeset

<h2 id="tocS_ErrorMessage">ErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemaerrormessage"></a>
<a id="schema_ErrorMessage"></a>
<a id="tocSerrormessage"></a>
<a id="tocserrormessage"></a>

```json
"string"
```

Changeset Error Message

<h2 id="tocS_ErrorCategory">ErrorCategory</h2>
<!-- backwards compatibility -->
<a id="schemaerrorcategory"></a>
<a id="schema_ErrorCategory"></a>
<a id="tocSerrorcategory"></a>
<a id="tocserrorcategory"></a>

```json
"VALIDATION"
```

Changeset Error Category

<h2 id="tocS_ChangesetErrorInfo">ChangesetErrorInfo</h2>
<!-- backwards compatibility -->
<a id="schemachangeseterrorinfo"></a>
<a id="schema_ChangesetErrorInfo"></a>
<a id="tocSchangeseterrorinfo"></a>
<a id="tocschangeseterrorinfo"></a>

```json
{
  "errorMessage": {},
  "errorCategory": {}
}
```

The structure with error messages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorMessage|object|false|none|none|
|errorCategory|object|false|none|none|

<h2 id="tocS_ChangesetId">ChangesetId</h2>
<!-- backwards compatibility -->
<a id="schemachangesetid"></a>
<a id="schema_ChangesetId"></a>
<a id="tocSchangesetid"></a>
<a id="tocschangesetid"></a>

```json
"string"
```

ID used to identify a Changeset

<h2 id="tocS_ChangesetSummary">ChangesetSummary</h2>
<!-- backwards compatibility -->
<a id="schemachangesetsummary"></a>
<a id="schema_ChangesetSummary"></a>
<a id="tocSchangesetsummary"></a>
<a id="tocschangesetsummary"></a>

```json
{
  "changesetId": {},
  "changesetArn": {},
  "datasetId": {},
  "changeType": {},
  "sourceParams": {
    "property1": "string",
    "property2": "string"
  },
  "formatParams": {
    "property1": "string",
    "property2": "string"
  },
  "createTime": {},
  "status": {},
  "errorInfo": {
    "errorMessage": {},
    "errorCategory": {}
  },
  "activeUntilTimestamp": {},
  "activeFromTimestamp": {},
  "updatesChangesetId": {},
  "updatedByChangesetId": {}
}
```

A Changeset is unit of data in a Dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changesetId|object|false|none|none|
|changesetArn|object|false|none|none|
|datasetId|object|false|none|none|
|changeType|object|false|none|none|
|sourceParams|object|false|none|none|
|formatParams|object|false|none|none|
|createTime|object|false|none|none|
|status|object|false|none|none|
|errorInfo|object|false|none|none|
|activeUntilTimestamp|object|false|none|none|
|activeFromTimestamp|object|false|none|none|
|updatesChangesetId|object|false|none|none|
|updatedByChangesetId|object|false|none|none|

<h2 id="tocS_ChangesetList">ChangesetList</h2>
<!-- backwards compatibility -->
<a id="schemachangesetlist"></a>
<a id="schema_ChangesetList"></a>
<a id="tocSchangesetlist"></a>
<a id="tocschangesetlist"></a>

```json
[
  {
    "changesetId": {},
    "changesetArn": {},
    "datasetId": {},
    "changeType": {},
    "sourceParams": {
      "property1": "string",
      "property2": "string"
    },
    "formatParams": {
      "property1": "string",
      "property2": "string"
    },
    "createTime": {},
    "status": {},
    "errorInfo": {
      "errorMessage": {},
      "errorCategory": {}
    },
    "activeUntilTimestamp": {},
    "activeFromTimestamp": {},
    "updatesChangesetId": {},
    "updatedByChangesetId": {}
  }
]
```

List of Changeset Summaries

<h2 id="tocS_DatasetId">DatasetId</h2>
<!-- backwards compatibility -->
<a id="schemadatasetid"></a>
<a id="schema_DatasetId"></a>
<a id="tocSdatasetid"></a>
<a id="tocsdatasetid"></a>

```json
"string"
```

ID for a given Dataset

<h2 id="tocS_SourceParams">SourceParams</h2>
<!-- backwards compatibility -->
<a id="schemasourceparams"></a>
<a id="schema_SourceParams"></a>
<a id="tocSsourceparams"></a>
<a id="tocssourceparams"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

Source Parameters of a Changeset

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[StringMapValue](#schemastringmapvalue)|false|none|none|

<h2 id="tocS_FormatParams">FormatParams</h2>
<!-- backwards compatibility -->
<a id="schemaformatparams"></a>
<a id="schema_FormatParams"></a>
<a id="tocSformatparams"></a>
<a id="tocsformatparams"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

Format Parameters of a Changeset

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[StringMapValue](#schemastringmapvalue)|false|none|none|

<h2 id="tocS_IngestionStatus">IngestionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaingestionstatus"></a>
<a id="schema_IngestionStatus"></a>
<a id="tocSingestionstatus"></a>
<a id="tocsingestionstatus"></a>

```json
"PENDING"
```

Status of the ingestion process returned from scheduler service.

<h2 id="tocS_ColumnDataType">ColumnDataType</h2>
<!-- backwards compatibility -->
<a id="schemacolumndatatype"></a>
<a id="schema_ColumnDataType"></a>
<a id="tocScolumndatatype"></a>
<a id="tocscolumndatatype"></a>

```json
"STRING"
```

Data type of a column.

<h2 id="tocS_ColumnName">ColumnName</h2>
<!-- backwards compatibility -->
<a id="schemacolumnname"></a>
<a id="schema_ColumnName"></a>
<a id="tocScolumnname"></a>
<a id="tocscolumnname"></a>

```json
"string"
```

Column Name

<h2 id="tocS_ColumnDescription">ColumnDescription</h2>
<!-- backwards compatibility -->
<a id="schemacolumndescription"></a>
<a id="schema_ColumnDescription"></a>
<a id="tocScolumndescription"></a>
<a id="tocscolumndescription"></a>

```json
"string"
```

Column Description

<h2 id="tocS_ColumnDefinition">ColumnDefinition</h2>
<!-- backwards compatibility -->
<a id="schemacolumndefinition"></a>
<a id="schema_ColumnDefinition"></a>
<a id="tocScolumndefinition"></a>
<a id="tocscolumndefinition"></a>

```json
{
  "dataType": {},
  "columnName": {},
  "columnDescription": {}
}
```

The definition of a column in a tabular Dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataType|object|false|none|none|
|columnName|object|false|none|none|
|columnDescription|object|false|none|none|

<h2 id="tocS_ColumnList">ColumnList</h2>
<!-- backwards compatibility -->
<a id="schemacolumnlist"></a>
<a id="schema_ColumnList"></a>
<a id="tocScolumnlist"></a>
<a id="tocscolumnlist"></a>

```json
[
  {
    "dataType": {},
    "columnName": {},
    "columnDescription": {}
  }
]
```

List of Column Definitions

<h2 id="tocS_ColumnNameList">ColumnNameList</h2>
<!-- backwards compatibility -->
<a id="schemacolumnnamelist"></a>
<a id="schema_ColumnNameList"></a>
<a id="tocScolumnnamelist"></a>
<a id="tocscolumnnamelist"></a>

```json
[
  "string"
]
```

List of Column Names

<h2 id="tocS_CreateChangesetRequest">CreateChangesetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatechangesetrequest"></a>
<a id="schema_CreateChangesetRequest"></a>
<a id="tocScreatechangesetrequest"></a>
<a id="tocscreatechangesetrequest"></a>

```json
{
  "clientToken": {},
  "changeType": {},
  "sourceParams": {
    "property1": "string",
    "property2": "string"
  },
  "formatParams": {
    "property1": "string",
    "property2": "string"
  }
}
```

The request for a CreateChangeset operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|
|changeType|object|true|none|none|
|sourceParams|object|true|none|none|
|formatParams|object|true|none|none|

<h2 id="tocS_SortColumnList">SortColumnList</h2>
<!-- backwards compatibility -->
<a id="schemasortcolumnlist"></a>
<a id="schema_SortColumnList"></a>
<a id="tocSsortcolumnlist"></a>
<a id="tocssortcolumnlist"></a>

```json
[
  "string"
]
```

DataView Sort Column List

<h2 id="tocS_PartitionColumnList">PartitionColumnList</h2>
<!-- backwards compatibility -->
<a id="schemapartitioncolumnlist"></a>
<a id="schema_PartitionColumnList"></a>
<a id="tocSpartitioncolumnlist"></a>
<a id="tocspartitioncolumnlist"></a>

```json
[
  "string"
]
```

DataView Partition Column List

<h2 id="tocS_DataViewDestinationTypeParams">DataViewDestinationTypeParams</h2>
<!-- backwards compatibility -->
<a id="schemadataviewdestinationtypeparams"></a>
<a id="schema_DataViewDestinationTypeParams"></a>
<a id="tocSdataviewdestinationtypeparams"></a>
<a id="tocsdataviewdestinationtypeparams"></a>

```json
{
  "destinationType": {},
  "s3DestinationExportFileFormat": {},
  "s3DestinationExportFileFormatOptions": {
    "property1": "string",
    "property2": "string"
  }
}
```

Structure for the Dataview destination type parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationType|object|true|none|none|
|s3DestinationExportFileFormat|object|false|none|none|
|s3DestinationExportFileFormatOptions|object|false|none|none|

<h2 id="tocS_CreateDataViewRequest">CreateDataViewRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedataviewrequest"></a>
<a id="schema_CreateDataViewRequest"></a>
<a id="tocScreatedataviewrequest"></a>
<a id="tocscreatedataviewrequest"></a>

```json
{
  "clientToken": {},
  "autoUpdate": {},
  "sortColumns": {},
  "partitionColumns": {},
  "asOfTimestamp": {},
  "destinationTypeParams": {
    "destinationType": {},
    "s3DestinationExportFileFormat": {},
    "s3DestinationExportFileFormatOptions": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

Request for creating a data view.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|
|autoUpdate|object|false|none|none|
|sortColumns|object|false|none|none|
|partitionColumns|object|false|none|none|
|asOfTimestamp|object|false|none|none|
|destinationTypeParams|object|true|none|none|

<h2 id="tocS_DataViewId">DataViewId</h2>
<!-- backwards compatibility -->
<a id="schemadataviewid"></a>
<a id="schema_DataViewId"></a>
<a id="tocSdataviewid"></a>
<a id="tocsdataviewid"></a>

```json
"string"
```

DataView ID

<h2 id="tocS_DatasetTitle">DatasetTitle</h2>
<!-- backwards compatibility -->
<a id="schemadatasettitle"></a>
<a id="schema_DatasetTitle"></a>
<a id="tocSdatasettitle"></a>
<a id="tocsdatasettitle"></a>

```json
"string"
```

Title for a given Dataset

<h2 id="tocS_DatasetKind">DatasetKind</h2>
<!-- backwards compatibility -->
<a id="schemadatasetkind"></a>
<a id="schema_DatasetKind"></a>
<a id="tocSdatasetkind"></a>
<a id="tocsdatasetkind"></a>

```json
"TABULAR"
```

Dataset Kind

<h2 id="tocS_DatasetDescription">DatasetDescription</h2>
<!-- backwards compatibility -->
<a id="schemadatasetdescription"></a>
<a id="schema_DatasetDescription"></a>
<a id="tocSdatasetdescription"></a>
<a id="tocsdatasetdescription"></a>

```json
"string"
```

Description of a dataset

<h2 id="tocS_DatasetOwnerInfo">DatasetOwnerInfo</h2>
<!-- backwards compatibility -->
<a id="schemadatasetownerinfo"></a>
<a id="schema_DatasetOwnerInfo"></a>
<a id="tocSdatasetownerinfo"></a>
<a id="tocsdatasetownerinfo"></a>

```json
{
  "name": {},
  "phoneNumber": {},
  "email": {}
}
```

A structure for Dataset owner info.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|phoneNumber|object|false|none|none|
|email|object|false|none|none|

<h2 id="tocS_PermissionGroupParams">PermissionGroupParams</h2>
<!-- backwards compatibility -->
<a id="schemapermissiongroupparams"></a>
<a id="schema_PermissionGroupParams"></a>
<a id="tocSpermissiongroupparams"></a>
<a id="tocspermissiongroupparams"></a>

```json
{
  "permissionGroupId": {},
  "datasetPermissions": {}
}
```

<p>Permission group parameters for Dataset permissions.</p> <p>Here is an example of how you could specify the <code>PermissionGroupParams</code>:</p> <p> <code> { "permissionGroupId": "0r6fCRtSTUk4XPfXQe3M0g", "datasetPermissions": [ {"permission": "ViewDatasetDetails"}, {"permission": "AddDatasetData"}, {"permission": "EditDatasetMetadata"}, {"permission": "DeleteDataset"} ] } </code> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissionGroupId|object|false|none|none|
|datasetPermissions|object|false|none|none|

<h2 id="tocS_SchemaUnion">SchemaUnion</h2>
<!-- backwards compatibility -->
<a id="schemaschemaunion"></a>
<a id="schema_SchemaUnion"></a>
<a id="tocSschemaunion"></a>
<a id="tocsschemaunion"></a>

```json
{
  "tabularSchemaConfig": {
    "columns": {},
    "primaryKeyColumns": {}
  }
}
```

A union of schema types.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tabularSchemaConfig|object|false|none|none|

<h2 id="tocS_CreateDatasetRequest">CreateDatasetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasetrequest"></a>
<a id="schema_CreateDatasetRequest"></a>
<a id="tocScreatedatasetrequest"></a>
<a id="tocscreatedatasetrequest"></a>

```json
{
  "clientToken": {},
  "datasetTitle": {},
  "kind": {},
  "datasetDescription": {},
  "ownerInfo": {
    "name": {},
    "phoneNumber": {},
    "email": {}
  },
  "permissionGroupParams": {
    "permissionGroupId": {},
    "datasetPermissions": {}
  },
  "alias": {},
  "schemaDefinition": {
    "tabularSchemaConfig": {
      "columns": {},
      "primaryKeyColumns": {}
    }
  }
}
```

The request for a CreateDataset operation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|
|datasetTitle|object|true|none|none|
|kind|object|true|none|none|
|datasetDescription|object|false|none|none|
|ownerInfo|object|false|none|none|
|permissionGroupParams|object|true|none|none|
|alias|object|false|none|none|
|schemaDefinition|object|false|none|none|

<h2 id="tocS_PermissionGroupName">PermissionGroupName</h2>
<!-- backwards compatibility -->
<a id="schemapermissiongroupname"></a>
<a id="schema_PermissionGroupName"></a>
<a id="tocSpermissiongroupname"></a>
<a id="tocspermissiongroupname"></a>

```json
"password"
```

<h2 id="tocS_PermissionGroupDescription">PermissionGroupDescription</h2>
<!-- backwards compatibility -->
<a id="schemapermissiongroupdescription"></a>
<a id="schema_PermissionGroupDescription"></a>
<a id="tocSpermissiongroupdescription"></a>
<a id="tocspermissiongroupdescription"></a>

```json
"password"
```

<h2 id="tocS_CreatePermissionGroupRequest">CreatePermissionGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatepermissiongrouprequest"></a>
<a id="schema_CreatePermissionGroupRequest"></a>
<a id="tocScreatepermissiongrouprequest"></a>
<a id="tocscreatepermissiongrouprequest"></a>

```json
{
  "name": {},
  "description": {},
  "applicationPermissions": {},
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|description|object|false|none|none|
|applicationPermissions|object|true|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_UserType">UserType</h2>
<!-- backwards compatibility -->
<a id="schemausertype"></a>
<a id="schema_UserType"></a>
<a id="tocSusertype"></a>
<a id="tocsusertype"></a>

```json
"SUPER_USER"
```

<h2 id="tocS_FirstName">FirstName</h2>
<!-- backwards compatibility -->
<a id="schemafirstname"></a>
<a id="schema_FirstName"></a>
<a id="tocSfirstname"></a>
<a id="tocsfirstname"></a>

```json
"password"
```

<h2 id="tocS_LastName">LastName</h2>
<!-- backwards compatibility -->
<a id="schemalastname"></a>
<a id="schema_LastName"></a>
<a id="tocSlastname"></a>
<a id="tocslastname"></a>

```json
"password"
```

<h2 id="tocS_RoleArn">RoleArn</h2>
<!-- backwards compatibility -->
<a id="schemarolearn"></a>
<a id="schema_RoleArn"></a>
<a id="tocSrolearn"></a>
<a id="tocsrolearn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_CreateUserRequest">CreateUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserrequest"></a>
<a id="schema_CreateUserRequest"></a>
<a id="tocScreateuserrequest"></a>
<a id="tocscreateuserrequest"></a>

```json
{
  "emailAddress": {},
  "type": {},
  "firstName": {},
  "lastName": {},
  "ApiAccess": {},
  "apiAccessPrincipalArn": {},
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emailAddress|object|true|none|none|
|type|object|true|none|none|
|firstName|object|false|none|none|
|lastName|object|false|none|none|
|ApiAccess|object|false|none|none|
|apiAccessPrincipalArn|object|false|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_stringValueLength1to255">stringValueLength1to255</h2>
<!-- backwards compatibility -->
<a id="schemastringvaluelength1to255-1"></a>
<a id="schema_stringValueLength1to255"></a>
<a id="tocSstringvaluelength1to255-1"></a>
<a id="tocsstringvaluelength1to255-1"></a>

```json
"string"
```

<h2 id="tocS_stringValueMaxLength1000">stringValueMaxLength1000</h2>
<!-- backwards compatibility -->
<a id="schemastringvaluemaxlength1000"></a>
<a id="schema_stringValueMaxLength1000"></a>
<a id="tocSstringvaluemaxlength1000"></a>
<a id="tocsstringvaluemaxlength1000"></a>

```json
"string"
```

<h2 id="tocS_Credentials">Credentials</h2>
<!-- backwards compatibility -->
<a id="schemacredentials"></a>
<a id="schema_Credentials"></a>
<a id="tocScredentials"></a>
<a id="tocscredentials"></a>

```json
{
  "accessKeyId": {},
  "secretAccessKey": {},
  "sessionToken": {}
}
```

Short term API credentials.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessKeyId|object|false|none|none|
|secretAccessKey|object|false|none|none|
|sessionToken|object|false|none|none|

<h2 id="tocS_DataViewArn">DataViewArn</h2>
<!-- backwards compatibility -->
<a id="schemadataviewarn"></a>
<a id="schema_DataViewArn"></a>
<a id="tocSdataviewarn"></a>
<a id="tocsdataviewarn"></a>

```json
"string"
```

Arn of a DataView

<h2 id="tocS_DataViewErrorInfo">DataViewErrorInfo</h2>
<!-- backwards compatibility -->
<a id="schemadataviewerrorinfo"></a>
<a id="schema_DataViewErrorInfo"></a>
<a id="tocSdataviewerrorinfo"></a>
<a id="tocsdataviewerrorinfo"></a>

```json
{
  "errorMessage": {},
  "errorCategory": {}
}
```

The structure with error messages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorMessage|object|false|none|none|
|errorCategory|object|false|none|none|

<h2 id="tocS_DataViewSummary">DataViewSummary</h2>
<!-- backwards compatibility -->
<a id="schemadataviewsummary"></a>
<a id="schema_DataViewSummary"></a>
<a id="tocSdataviewsummary"></a>
<a id="tocsdataviewsummary"></a>

```json
{
  "dataViewId": {},
  "dataViewArn": {},
  "datasetId": {},
  "asOfTimestamp": {},
  "partitionColumns": {},
  "sortColumns": {},
  "status": {},
  "errorInfo": {
    "errorMessage": {},
    "errorCategory": {}
  },
  "destinationTypeProperties": {
    "destinationType": {},
    "s3DestinationExportFileFormat": {},
    "s3DestinationExportFileFormatOptions": {
      "property1": "string",
      "property2": "string"
    }
  },
  "autoUpdate": {},
  "createTime": {},
  "lastModifiedTime": {}
}
```

Structure for the summary of a Dataview.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataViewId|object|false|none|none|
|dataViewArn|object|false|none|none|
|datasetId|object|false|none|none|
|asOfTimestamp|object|false|none|none|
|partitionColumns|object|false|none|none|
|sortColumns|object|false|none|none|
|status|object|false|none|none|
|errorInfo|object|false|none|none|
|destinationTypeProperties|object|false|none|none|
|autoUpdate|object|false|none|none|
|createTime|object|false|none|none|
|lastModifiedTime|object|false|none|none|

<h2 id="tocS_DataViewList">DataViewList</h2>
<!-- backwards compatibility -->
<a id="schemadataviewlist"></a>
<a id="schema_DataViewList"></a>
<a id="tocSdataviewlist"></a>
<a id="tocsdataviewlist"></a>

```json
[
  {
    "dataViewId": {},
    "dataViewArn": {},
    "datasetId": {},
    "asOfTimestamp": {},
    "partitionColumns": {},
    "sortColumns": {},
    "status": {},
    "errorInfo": {
      "errorMessage": {},
      "errorCategory": {}
    },
    "destinationTypeProperties": {
      "destinationType": {},
      "s3DestinationExportFileFormat": {},
      "s3DestinationExportFileFormatOptions": {
        "property1": "string",
        "property2": "string"
      }
    },
    "autoUpdate": {},
    "createTime": {},
    "lastModifiedTime": {}
  }
]
```

List of Data Views

<h2 id="tocS_DataViewStatus">DataViewStatus</h2>
<!-- backwards compatibility -->
<a id="schemadataviewstatus"></a>
<a id="schema_DataViewStatus"></a>
<a id="tocSdataviewstatus"></a>
<a id="tocsdataviewstatus"></a>

```json
"RUNNING"
```

Status of a DataView

<h2 id="tocS_DatasetArn">DatasetArn</h2>
<!-- backwards compatibility -->
<a id="schemadatasetarn"></a>
<a id="schema_DatasetArn"></a>
<a id="tocSdatasetarn"></a>
<a id="tocsdatasetarn"></a>

```json
"string"
```

Arn of a Dataset

<h2 id="tocS_Dataset">Dataset</h2>
<!-- backwards compatibility -->
<a id="schemadataset"></a>
<a id="schema_Dataset"></a>
<a id="tocSdataset"></a>
<a id="tocsdataset"></a>

```json
{
  "datasetId": {},
  "datasetArn": {},
  "datasetTitle": {},
  "kind": {},
  "datasetDescription": {},
  "ownerInfo": {
    "name": {},
    "phoneNumber": {},
    "email": {}
  },
  "createTime": {},
  "lastModifiedTime": {},
  "schemaDefinition": {
    "tabularSchemaConfig": {
      "columns": {},
      "primaryKeyColumns": {}
    }
  },
  "alias": {}
}
```

The structure for a Dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetId|object|false|none|none|
|datasetArn|object|false|none|none|
|datasetTitle|object|false|none|none|
|kind|object|false|none|none|
|datasetDescription|object|false|none|none|
|ownerInfo|object|false|none|none|
|createTime|object|false|none|none|
|lastModifiedTime|object|false|none|none|
|schemaDefinition|object|false|none|none|
|alias|object|false|none|none|

<h2 id="tocS_DatasetList">DatasetList</h2>
<!-- backwards compatibility -->
<a id="schemadatasetlist"></a>
<a id="schema_DatasetList"></a>
<a id="tocSdatasetlist"></a>
<a id="tocsdatasetlist"></a>

```json
[
  {
    "datasetId": {},
    "datasetArn": {},
    "datasetTitle": {},
    "kind": {},
    "datasetDescription": {},
    "ownerInfo": {
      "name": {},
      "phoneNumber": {},
      "email": {}
    },
    "createTime": {},
    "lastModifiedTime": {},
    "schemaDefinition": {
      "tabularSchemaConfig": {
        "columns": {},
        "primaryKeyColumns": {}
      }
    },
    "alias": {}
  }
]
```

List of Dataset structures

<h2 id="tocS_DatasetStatus">DatasetStatus</h2>
<!-- backwards compatibility -->
<a id="schemadatasetstatus"></a>
<a id="schema_DatasetStatus"></a>
<a id="tocSdatasetstatus"></a>
<a id="tocsdatasetstatus"></a>

```json
"PENDING"
```

Status of the dataset process returned from scheduler service.

<h2 id="tocS_DeleteDatasetRequest">DeleteDatasetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedatasetrequest"></a>
<a id="schema_DeleteDatasetRequest"></a>
<a id="tocSdeletedatasetrequest"></a>
<a id="tocsdeletedatasetrequest"></a>

```json
{}
```

The request for a DeleteDataset operation.

<h2 id="tocS_DeletePermissionGroupRequest">DeletePermissionGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletepermissiongrouprequest"></a>
<a id="schema_DeletePermissionGroupRequest"></a>
<a id="tocSdeletepermissiongrouprequest"></a>
<a id="tocsdeletepermissiongrouprequest"></a>

```json
{}
```

<h2 id="tocS_DisableUserRequest">DisableUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisableuserrequest"></a>
<a id="schema_DisableUserRequest"></a>
<a id="tocSdisableuserrequest"></a>
<a id="tocsdisableuserrequest"></a>

```json
{
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|

<h2 id="tocS_DisassociateUserFromPermissionGroupRequest">DisassociateUserFromPermissionGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateuserfrompermissiongrouprequest"></a>
<a id="schema_DisassociateUserFromPermissionGroupRequest"></a>
<a id="tocSdisassociateuserfrompermissiongrouprequest"></a>
<a id="tocsdisassociateuserfrompermissiongrouprequest"></a>

```json
{}
```

<h2 id="tocS_EnableUserRequest">EnableUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemaenableuserrequest"></a>
<a id="schema_EnableUserRequest"></a>
<a id="tocSenableuserrequest"></a>
<a id="tocsenableuserrequest"></a>

```json
{
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|

<h2 id="tocS_GetChangesetRequest">GetChangesetRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetchangesetrequest"></a>
<a id="schema_GetChangesetRequest"></a>
<a id="tocSgetchangesetrequest"></a>
<a id="tocsgetchangesetrequest"></a>

```json
{}
```

Request to describe a changeset.

<h2 id="tocS_GetDataViewRequest">GetDataViewRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdataviewrequest"></a>
<a id="schema_GetDataViewRequest"></a>
<a id="tocSgetdataviewrequest"></a>
<a id="tocsgetdataviewrequest"></a>

```json
{}
```

Request for retrieving a data view detail. Grouped / accessible within a dataset by its dataset id.

<h2 id="tocS_GetDatasetRequest">GetDatasetRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdatasetrequest"></a>
<a id="schema_GetDatasetRequest"></a>
<a id="tocSgetdatasetrequest"></a>
<a id="tocsgetdatasetrequest"></a>

```json
{}
```

Request for the GetDataset operation.

<h2 id="tocS_GetExternalDataViewAccessDetailsRequest">GetExternalDataViewAccessDetailsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetexternaldataviewaccessdetailsrequest"></a>
<a id="schema_GetExternalDataViewAccessDetailsRequest"></a>
<a id="tocSgetexternaldataviewaccessdetailsrequest"></a>
<a id="tocsgetexternaldataviewaccessdetailsrequest"></a>

```json
{}
```

<h2 id="tocS_S3Location">S3Location</h2>
<!-- backwards compatibility -->
<a id="schemas3location"></a>
<a id="schema_S3Location"></a>
<a id="tocSs3location"></a>
<a id="tocss3location"></a>

```json
{
  "bucket": {},
  "key": {}
}
```

The location of an external Dataview in an S3 bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|object|true|none|none|
|key|object|true|none|none|

<h2 id="tocS_GetPermissionGroupRequest">GetPermissionGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetpermissiongrouprequest"></a>
<a id="schema_GetPermissionGroupRequest"></a>
<a id="tocSgetpermissiongrouprequest"></a>
<a id="tocsgetpermissiongrouprequest"></a>

```json
{}
```

<h2 id="tocS_PermissionGroup">PermissionGroup</h2>
<!-- backwards compatibility -->
<a id="schemapermissiongroup"></a>
<a id="schema_PermissionGroup"></a>
<a id="tocSpermissiongroup"></a>
<a id="tocspermissiongroup"></a>

```json
{
  "permissionGroupId": {},
  "name": {},
  "description": {},
  "applicationPermissions": {},
  "createTime": {},
  "lastModifiedTime": {},
  "membershipStatus": {}
}
```

The structure for a permission group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissionGroupId|object|false|none|none|
|name|object|false|none|none|
|description|object|false|none|none|
|applicationPermissions|object|false|none|none|
|createTime|object|false|none|none|
|lastModifiedTime|object|false|none|none|
|membershipStatus|object|false|none|none|

<h2 id="tocS_SessionDuration">SessionDuration</h2>
<!-- backwards compatibility -->
<a id="schemasessionduration"></a>
<a id="schema_SessionDuration"></a>
<a id="tocSsessionduration"></a>
<a id="tocssessionduration"></a>

```json
60
```

<h2 id="tocS_IdType">IdType</h2>
<!-- backwards compatibility -->
<a id="schemaidtype"></a>
<a id="schema_IdType"></a>
<a id="tocSidtype"></a>
<a id="tocsidtype"></a>

```json
"string"
```

<h2 id="tocS_GetProgrammaticAccessCredentialsRequest">GetProgrammaticAccessCredentialsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetprogrammaticaccesscredentialsrequest"></a>
<a id="schema_GetProgrammaticAccessCredentialsRequest"></a>
<a id="tocSgetprogrammaticaccesscredentialsrequest"></a>
<a id="tocsgetprogrammaticaccesscredentialsrequest"></a>

```json
{}
```

Request for GetProgrammaticAccessCredentials operation

<h2 id="tocS_GetUserRequest">GetUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetuserrequest"></a>
<a id="schema_GetUserRequest"></a>
<a id="tocSgetuserrequest"></a>
<a id="tocsgetuserrequest"></a>

```json
{}
```

<h2 id="tocS_UserStatus">UserStatus</h2>
<!-- backwards compatibility -->
<a id="schemauserstatus"></a>
<a id="schema_UserStatus"></a>
<a id="tocSuserstatus"></a>
<a id="tocsuserstatus"></a>

```json
"CREATING"
```

<h2 id="tocS_locationType">locationType</h2>
<!-- backwards compatibility -->
<a id="schemalocationtype"></a>
<a id="schema_locationType"></a>
<a id="tocSlocationtype"></a>
<a id="tocslocationtype"></a>

```json
"INGESTION"
```

<h2 id="tocS_GetWorkingLocationRequest">GetWorkingLocationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetworkinglocationrequest"></a>
<a id="schema_GetWorkingLocationRequest"></a>
<a id="tocSgetworkinglocationrequest"></a>
<a id="tocsgetworkinglocationrequest"></a>

```json
{
  "locationType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locationType|object|false|none|none|

<h2 id="tocS_stringValueLength1to1024">stringValueLength1to1024</h2>
<!-- backwards compatibility -->
<a id="schemastringvaluelength1to1024"></a>
<a id="schema_stringValueLength1to1024"></a>
<a id="tocSstringvaluelength1to1024"></a>
<a id="tocsstringvaluelength1to1024"></a>

```json
"string"
```

<h2 id="tocS_stringValueLength1to63">stringValueLength1to63</h2>
<!-- backwards compatibility -->
<a id="schemastringvaluelength1to63"></a>
<a id="schema_stringValueLength1to63"></a>
<a id="tocSstringvaluelength1to63"></a>
<a id="tocsstringvaluelength1to63"></a>

```json
"string"
```

<h2 id="tocS_ResultLimit">ResultLimit</h2>
<!-- backwards compatibility -->
<a id="schemaresultlimit"></a>
<a id="schema_ResultLimit"></a>
<a id="tocSresultlimit"></a>
<a id="tocsresultlimit"></a>

```json
1
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

<h2 id="tocS_ListChangesetsRequest">ListChangesetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistchangesetsrequest"></a>
<a id="schema_ListChangesetsRequest"></a>
<a id="tocSlistchangesetsrequest"></a>
<a id="tocslistchangesetsrequest"></a>

```json
{}
```

Request to ListChangesetsRequest. It exposes minimal query filters.

<h2 id="tocS_ListDataViewsRequest">ListDataViewsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdataviewsrequest"></a>
<a id="schema_ListDataViewsRequest"></a>
<a id="tocSlistdataviewsrequest"></a>
<a id="tocslistdataviewsrequest"></a>

```json
{}
```

Request for a list data views.

<h2 id="tocS_ListDatasetsRequest">ListDatasetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasetsrequest"></a>
<a id="schema_ListDatasetsRequest"></a>
<a id="tocSlistdatasetsrequest"></a>
<a id="tocslistdatasetsrequest"></a>

```json
{}
```

Request for the ListDatasets operation.

<h2 id="tocS_ListPermissionGroupsByUserRequest">ListPermissionGroupsByUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpermissiongroupsbyuserrequest"></a>
<a id="schema_ListPermissionGroupsByUserRequest"></a>
<a id="tocSlistpermissiongroupsbyuserrequest"></a>
<a id="tocslistpermissiongroupsbyuserrequest"></a>

```json
{}
```

<h2 id="tocS_PermissionGroupByUserList">PermissionGroupByUserList</h2>
<!-- backwards compatibility -->
<a id="schemapermissiongroupbyuserlist"></a>
<a id="schema_PermissionGroupByUserList"></a>
<a id="tocSpermissiongroupbyuserlist"></a>
<a id="tocspermissiongroupbyuserlist"></a>

```json
[
  {
    "permissionGroupId": {},
    "name": {},
    "membershipStatus": {}
  }
]
```

<h2 id="tocS_ListPermissionGroupsRequest">ListPermissionGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpermissiongroupsrequest"></a>
<a id="schema_ListPermissionGroupsRequest"></a>
<a id="tocSlistpermissiongroupsrequest"></a>
<a id="tocslistpermissiongroupsrequest"></a>

```json
{}
```

<h2 id="tocS_PermissionGroupList">PermissionGroupList</h2>
<!-- backwards compatibility -->
<a id="schemapermissiongrouplist"></a>
<a id="schema_PermissionGroupList"></a>
<a id="tocSpermissiongrouplist"></a>
<a id="tocspermissiongrouplist"></a>

```json
[
  {
    "permissionGroupId": {},
    "name": {},
    "description": {},
    "applicationPermissions": {},
    "createTime": {},
    "lastModifiedTime": {},
    "membershipStatus": {}
  }
]
```

<h2 id="tocS_ListUsersByPermissionGroupRequest">ListUsersByPermissionGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistusersbypermissiongrouprequest"></a>
<a id="schema_ListUsersByPermissionGroupRequest"></a>
<a id="tocSlistusersbypermissiongrouprequest"></a>
<a id="tocslistusersbypermissiongrouprequest"></a>

```json
{}
```

<h2 id="tocS_UserByPermissionGroupList">UserByPermissionGroupList</h2>
<!-- backwards compatibility -->
<a id="schemauserbypermissiongrouplist"></a>
<a id="schema_UserByPermissionGroupList"></a>
<a id="tocSuserbypermissiongrouplist"></a>
<a id="tocsuserbypermissiongrouplist"></a>

```json
[
  {
    "userId": {},
    "status": {},
    "firstName": {},
    "lastName": {},
    "emailAddress": {},
    "type": {},
    "apiAccess": {},
    "apiAccessPrincipalArn": {},
    "membershipStatus": {}
  }
]
```

<h2 id="tocS_ListUsersRequest">ListUsersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistusersrequest"></a>
<a id="schema_ListUsersRequest"></a>
<a id="tocSlistusersrequest"></a>
<a id="tocslistusersrequest"></a>

```json
{}
```

<h2 id="tocS_UserList">UserList</h2>
<!-- backwards compatibility -->
<a id="schemauserlist"></a>
<a id="schema_UserList"></a>
<a id="tocSuserlist"></a>
<a id="tocsuserlist"></a>

```json
[
  {
    "userId": {},
    "status": {},
    "firstName": {},
    "lastName": {},
    "emailAddress": {},
    "type": {},
    "apiAccess": {},
    "apiAccessPrincipalArn": {},
    "createTime": {},
    "lastEnabledTime": {},
    "lastDisabledTime": {},
    "lastModifiedTime": {},
    "lastLoginTime": {}
  }
]
```

<h2 id="tocS_Password">Password</h2>
<!-- backwards compatibility -->
<a id="schemapassword"></a>
<a id="schema_Password"></a>
<a id="tocSpassword"></a>
<a id="tocspassword"></a>

```json
"password"
```

<h2 id="tocS_PermissionGroupMembershipStatus">PermissionGroupMembershipStatus</h2>
<!-- backwards compatibility -->
<a id="schemapermissiongroupmembershipstatus"></a>
<a id="schema_PermissionGroupMembershipStatus"></a>
<a id="tocSpermissiongroupmembershipstatus"></a>
<a id="tocspermissiongroupmembershipstatus"></a>

```json
"ADDITION_IN_PROGRESS"
```

<h2 id="tocS_PermissionGroupByUser">PermissionGroupByUser</h2>
<!-- backwards compatibility -->
<a id="schemapermissiongroupbyuser"></a>
<a id="schema_PermissionGroupByUser"></a>
<a id="tocSpermissiongroupbyuser"></a>
<a id="tocspermissiongroupbyuser"></a>

```json
{
  "permissionGroupId": {},
  "name": {},
  "membershipStatus": {}
}
```

The structure of a permission group associated with a user account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissionGroupId|object|false|none|none|
|name|object|false|none|none|
|membershipStatus|object|false|none|none|

<h2 id="tocS_ResetUserPasswordRequest">ResetUserPasswordRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresetuserpasswordrequest"></a>
<a id="schema_ResetUserPasswordRequest"></a>
<a id="tocSresetuserpasswordrequest"></a>
<a id="tocsresetuserpasswordrequest"></a>

```json
{
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|

<h2 id="tocS_StringValueLength1to250">StringValueLength1to250</h2>
<!-- backwards compatibility -->
<a id="schemastringvaluelength1to250"></a>
<a id="schema_StringValueLength1to250"></a>
<a id="tocSstringvaluelength1to250"></a>
<a id="tocsstringvaluelength1to250"></a>

```json
"string"
```

1 - 250 character String

<h2 id="tocS_ResourcePermission">ResourcePermission</h2>
<!-- backwards compatibility -->
<a id="schemaresourcepermission"></a>
<a id="schema_ResourcePermission"></a>
<a id="tocSresourcepermission"></a>
<a id="tocsresourcepermission"></a>

```json
{
  "permission": {}
}
```

<p>Resource permission for a dataset. When you create a dataset, all the other members of the same user group inherit access to the dataset. You can only create a dataset if your user group has application permission for Create Datasets.</p> <p>The following is a list of valid dataset permissions that you can apply: </p> <ul> <li> <p> <code>ViewDatasetDetails</code> </p> </li> <li> <p> <code>ReadDatasetDetails</code> </p> </li> <li> <p> <code>AddDatasetData</code> </p> </li> <li> <p> <code>CreateDataView</code> </p> </li> <li> <p> <code>EditDatasetMetadata</code> </p> </li> <li> <p> <code>DeleteDataset</code> </p> </li> </ul> <p>For more information on the dataset permissions, see <a href="https://docs.aws.amazon.com/finspace/latest/userguide/managing-user-permissions.html#supported-dataset-permissions">Supported Dataset Permissions</a> in the FinSpace User Guide.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permission|object|false|none|none|

<h2 id="tocS_S3BucketName">S3BucketName</h2>
<!-- backwards compatibility -->
<a id="schemas3bucketname"></a>
<a id="schema_S3BucketName"></a>
<a id="tocSs3bucketname"></a>
<a id="tocss3bucketname"></a>

```json
"string"
```

<h2 id="tocS_S3Key">S3Key</h2>
<!-- backwards compatibility -->
<a id="schemas3key"></a>
<a id="schema_S3Key"></a>
<a id="tocSs3key"></a>
<a id="tocss3key"></a>

```json
"string"
```

<h2 id="tocS_StringMapKey">StringMapKey</h2>
<!-- backwards compatibility -->
<a id="schemastringmapkey"></a>
<a id="schema_StringMapKey"></a>
<a id="tocSstringmapkey"></a>
<a id="tocsstringmapkey"></a>

```json
"string"
```

<h2 id="tocS_UpdateChangesetRequest">UpdateChangesetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatechangesetrequest"></a>
<a id="schema_UpdateChangesetRequest"></a>
<a id="tocSupdatechangesetrequest"></a>
<a id="tocsupdatechangesetrequest"></a>

```json
{
  "clientToken": {},
  "sourceParams": {
    "property1": "string",
    "property2": "string"
  },
  "formatParams": {
    "property1": "string",
    "property2": "string"
  }
}
```

Request to update an existing changeset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|
|sourceParams|object|true|none|none|
|formatParams|object|true|none|none|

<h2 id="tocS_UpdateDatasetRequest">UpdateDatasetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedatasetrequest"></a>
<a id="schema_UpdateDatasetRequest"></a>
<a id="tocSupdatedatasetrequest"></a>
<a id="tocsupdatedatasetrequest"></a>

```json
{
  "clientToken": {},
  "datasetTitle": {},
  "kind": {},
  "datasetDescription": {},
  "alias": {},
  "schemaDefinition": {
    "tabularSchemaConfig": {
      "columns": {},
      "primaryKeyColumns": {}
    }
  }
}
```

The request for an UpdateDataset operation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToken|object|false|none|none|
|datasetTitle|object|true|none|none|
|kind|object|true|none|none|
|datasetDescription|object|false|none|none|
|alias|object|false|none|none|
|schemaDefinition|object|false|none|none|

<h2 id="tocS_UpdatePermissionGroupRequest">UpdatePermissionGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepermissiongrouprequest"></a>
<a id="schema_UpdatePermissionGroupRequest"></a>
<a id="tocSupdatepermissiongrouprequest"></a>
<a id="tocsupdatepermissiongrouprequest"></a>

```json
{
  "name": {},
  "description": {},
  "applicationPermissions": {},
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|description|object|false|none|none|
|applicationPermissions|object|false|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_UpdateUserRequest">UpdateUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserrequest"></a>
<a id="schema_UpdateUserRequest"></a>
<a id="tocSupdateuserrequest"></a>
<a id="tocsupdateuserrequest"></a>

```json
{
  "type": {},
  "firstName": {},
  "lastName": {},
  "apiAccess": {},
  "apiAccessPrincipalArn": {},
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|false|none|none|
|firstName|object|false|none|none|
|lastName|object|false|none|none|
|apiAccess|object|false|none|none|
|apiAccessPrincipalArn|object|false|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "userId": {},
  "status": {},
  "firstName": {},
  "lastName": {},
  "emailAddress": {},
  "type": {},
  "apiAccess": {},
  "apiAccessPrincipalArn": {},
  "createTime": {},
  "lastEnabledTime": {},
  "lastDisabledTime": {},
  "lastModifiedTime": {},
  "lastLoginTime": {}
}
```

The details of the user account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|object|false|none|none|
|status|object|false|none|none|
|firstName|object|false|none|none|
|lastName|object|false|none|none|
|emailAddress|object|false|none|none|
|type|object|false|none|none|
|apiAccess|object|false|none|none|
|apiAccessPrincipalArn|object|false|none|none|
|createTime|object|false|none|none|
|lastEnabledTime|object|false|none|none|
|lastDisabledTime|object|false|none|none|
|lastModifiedTime|object|false|none|none|
|lastLoginTime|object|false|none|none|

<h2 id="tocS_UserByPermissionGroup">UserByPermissionGroup</h2>
<!-- backwards compatibility -->
<a id="schemauserbypermissiongroup"></a>
<a id="schema_UserByPermissionGroup"></a>
<a id="tocSuserbypermissiongroup"></a>
<a id="tocsuserbypermissiongroup"></a>

```json
{
  "userId": {},
  "status": {},
  "firstName": {},
  "lastName": {},
  "emailAddress": {},
  "type": {},
  "apiAccess": {},
  "apiAccessPrincipalArn": {},
  "membershipStatus": {}
}
```

The structure of a user account associated with a permission group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|object|false|none|none|
|status|object|false|none|none|
|firstName|object|false|none|none|
|lastName|object|false|none|none|
|emailAddress|object|false|none|none|
|type|object|false|none|none|
|apiAccess|object|false|none|none|
|apiAccessPrincipalArn|object|false|none|none|
|membershipStatus|object|false|none|none|
