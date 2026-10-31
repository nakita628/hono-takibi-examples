<h1 id="cloud-datastore-api">Cloud Datastore API v1beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Accesses the schemaless NoSQL database to provide fully managed, robust, scalable storage for your application.

Base URLs:

* <a href="https://datastore.googleapis.com/">https://datastore.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/datastore/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/datastore|View and manage your Google Cloud Datastore data|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/datastore|View and manage your Google Cloud Datastore data|

<h1 id="cloud-datastore-api-projects">projects</h1>

## datastore.projects.export

<a id="opIddatastore.projects.export"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/projects/string:export \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "entityFilter": {
      "kinds": [
        "string"
      ],
      "namespaceIds": [
        "string"
      ]
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "outputUrlPrefix": "string"
  }'
```

`POST /v1beta1/projects/{projectId}:export`

Exports a copy of all or a subset of entities from Google Cloud Datastore to another storage system, such as Google Cloud Storage. Recent updates to entities may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.

> Body parameter

```json
{
  "entityFilter": {
    "kinds": [
      "string"
    ],
    "namespaceIds": [
      "string"
    ]
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "outputUrlPrefix": "string"
}
```

<h3 id="datastoreprojectsexport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Project ID against which to make the request.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GoogleDatastoreAdminV1beta1ExportEntitiesRequest](#schemagoogledatastoreadminv1beta1exportentitiesrequest)|false|none|
|» entityFilter|body|[GoogleDatastoreAdminV1beta1EntityFilter](#schemagoogledatastoreadminv1beta1entityfilter)|false|Description of what data from the project is included in the export.|
|» labels|body|object|false|Client-assigned labels.|
|» » **additionalProperties**|body|string|false|none|
|» outputUrlPrefix|body|string|false|Location for the export metadata and data files. The full resource URL of the external storage location. Currently, only Google Cloud Storage is supported. So output_url_prefix should be of the form: `gs://BUCKET_NAME[/NAMESPACE_PATH]`, where `BUCKET_NAME` is the name of the Cloud Storage bucket and `NAMESPACE_PATH` is an optional Cloud Storage namespace path (this is not a Cloud Datastore namespace). For more information about Cloud Storage namespace paths, see [Object name considerations](https://cloud.google.com/storage/docs/naming#object-considerations). The resulting files will be nested deeper than the specified URL prefix. The final output URL will be provided in the google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url field. That value should be used for subsequent ImportEntities operations. By nesting the data files deeper, the same Cloud Storage bucket can be used in multiple ExportEntities operations without conflict.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="datastoreprojectsexport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/datastore ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/datastore )
</aside>

## datastore.projects.import

<a id="opIddatastore.projects.import"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/projects/string:import \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "entityFilter": {
      "kinds": [
        "string"
      ],
      "namespaceIds": [
        "string"
      ]
    },
    "inputUrl": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v1beta1/projects/{projectId}:import`

Imports entities into Google Cloud Datastore. Existing entities with the same key are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportEntities operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Datastore.

> Body parameter

```json
{
  "entityFilter": {
    "kinds": [
      "string"
    ],
    "namespaceIds": [
      "string"
    ]
  },
  "inputUrl": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="datastoreprojectsimport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Project ID against which to make the request.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GoogleDatastoreAdminV1beta1ImportEntitiesRequest](#schemagoogledatastoreadminv1beta1importentitiesrequest)|false|none|
|» entityFilter|body|[GoogleDatastoreAdminV1beta1EntityFilter](#schemagoogledatastoreadminv1beta1entityfilter)|false|Optionally specify which kinds/namespaces are to be imported. If provided, the list must be a subset of the EntityFilter used in creating the export, otherwise a FAILED_PRECONDITION error will be returned. If no filter is specified then all entities from the export are imported.|
|» inputUrl|body|string|false|The full resource URL of the external storage location. Currently, only Google Cloud Storage is supported. So input_url should be of the form: `gs://BUCKET_NAME[/NAMESPACE_PATH]/OVERALL_EXPORT_METADATA_FILE`, where `BUCKET_NAME` is the name of the Cloud Storage bucket, `NAMESPACE_PATH` is an optional Cloud Storage namespace path (this is not a Cloud Datastore namespace), and `OVERALL_EXPORT_METADATA_FILE` is the metadata file written by the ExportEntities operation. For more information about Cloud Storage namespace paths, see [Object name considerations](https://cloud.google.com/storage/docs/naming#object-considerations). For more information, see google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url.|
|» labels|body|object|false|Client-assigned labels.|
|» » **additionalProperties**|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="datastoreprojectsimport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/datastore ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/datastore )
</aside>

# Schemas

<h2 id="tocS_GoogleDatastoreAdminV1CommonMetadata">GoogleDatastoreAdminV1CommonMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogledatastoreadminv1commonmetadata"></a>
<a id="schema_GoogleDatastoreAdminV1CommonMetadata"></a>
<a id="tocSgoogledatastoreadminv1commonmetadata"></a>
<a id="tocsgoogledatastoreadminv1commonmetadata"></a>

```json
{
  "endTime": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "operationType": "OPERATION_TYPE_UNSPECIFIED",
  "startTime": "string",
  "state": "STATE_UNSPECIFIED"
}
```

Metadata common to all Datastore Admin operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|The time the operation ended, either successfully or otherwise.|
|labels|object|false|none|The client-assigned labels which were provided when the operation was created. May also include additional labels.|
|operationType|string|false|none|The type of the operation. Can be used as a filter in ListOperationsRequest.|
|startTime|string(google-datetime)|false|none|The time that work began on the operation.|
|state|string|false|none|The current state of the Operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|OPERATION_TYPE_UNSPECIFIED|
|operationType|EXPORT_ENTITIES|
|operationType|IMPORT_ENTITIES|
|operationType|CREATE_INDEX|
|operationType|DELETE_INDEX|
|state|STATE_UNSPECIFIED|
|state|INITIALIZING|
|state|PROCESSING|
|state|CANCELLING|
|state|FINALIZING|
|state|SUCCESSFUL|
|state|FAILED|
|state|CANCELLED|

<h2 id="tocS_GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadata">GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogledatastoreadminv1datastorefirestoremigrationmetadata"></a>
<a id="schema_GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadata"></a>
<a id="tocSgoogledatastoreadminv1datastorefirestoremigrationmetadata"></a>
<a id="tocsgoogledatastoreadminv1datastorefirestoremigrationmetadata"></a>

```json
{
  "migrationState": "MIGRATION_STATE_UNSPECIFIED",
  "migrationStep": "MIGRATION_STEP_UNSPECIFIED"
}
```

Metadata for Datastore to Firestore migration operations. The DatastoreFirestoreMigration operation is not started by the end-user via an explicit "creation" method. This is an intentional deviation from the LRO design pattern. This singleton resource can be accessed at: "projects/{project_id}/operations/datastore-firestore-migration"

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|migrationState|string|false|none|The current state of migration from Cloud Datastore to Cloud Firestore in Datastore mode.|
|migrationStep|string|false|none|The current step of migration from Cloud Datastore to Cloud Firestore in Datastore mode.|

#### Enumerated Values

|Property|Value|
|---|---|
|migrationState|MIGRATION_STATE_UNSPECIFIED|
|migrationState|RUNNING|
|migrationState|PAUSED|
|migrationState|COMPLETE|
|migrationStep|MIGRATION_STEP_UNSPECIFIED|
|migrationStep|PREPARE|
|migrationStep|START|
|migrationStep|APPLY_WRITES_SYNCHRONOUSLY|
|migrationStep|COPY_AND_VERIFY|
|migrationStep|REDIRECT_EVENTUALLY_CONSISTENT_READS|
|migrationStep|REDIRECT_STRONGLY_CONSISTENT_READS|
|migrationStep|REDIRECT_WRITES|

<h2 id="tocS_GoogleDatastoreAdminV1EntityFilter">GoogleDatastoreAdminV1EntityFilter</h2>
<!-- backwards compatibility -->
<a id="schemagoogledatastoreadminv1entityfilter"></a>
<a id="schema_GoogleDatastoreAdminV1EntityFilter"></a>
<a id="tocSgoogledatastoreadminv1entityfilter"></a>
<a id="tocsgoogledatastoreadminv1entityfilter"></a>

```json
{
  "kinds": [
    "string"
  ],
  "namespaceIds": [
    "string"
  ]
}
```

Identifies a subset of entities in a project. This is specified as combinations of kinds and namespaces (either or both of which may be all, as described in the following examples). Example usage: Entire project: kinds=[], namespace_ids=[] Kinds Foo and Bar in all namespaces: kinds=['Foo', 'Bar'], namespace_ids=[] Kinds Foo and Bar only in the default namespace: kinds=['Foo', 'Bar'], namespace_ids=[''] Kinds Foo and Bar in both the default and Baz namespaces: kinds=['Foo', 'Bar'], namespace_ids=['', 'Baz'] The entire Baz namespace: kinds=[], namespace_ids=['Baz']

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kinds|[string]|false|none|If empty, then this represents all kinds.|
|namespaceIds|[string]|false|none|An empty list represents all namespaces. This is the preferred usage for projects that don't use namespaces. An empty string element represents the default namespace. This should be used if the project has data in non-default namespaces, but doesn't want to include them. Each namespace in this list must be unique.|

<h2 id="tocS_GoogleDatastoreAdminV1ExportEntitiesMetadata">GoogleDatastoreAdminV1ExportEntitiesMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogledatastoreadminv1exportentitiesmetadata"></a>
<a id="schema_GoogleDatastoreAdminV1ExportEntitiesMetadata"></a>
<a id="tocSgoogledatastoreadminv1exportentitiesmetadata"></a>
<a id="tocsgoogledatastoreadminv1exportentitiesmetadata"></a>

```json
{
  "common": {
    "endTime": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "operationType": "OPERATION_TYPE_UNSPECIFIED",
    "startTime": "string",
    "state": "STATE_UNSPECIFIED"
  },
  "entityFilter": {
    "kinds": [
      "string"
    ],
    "namespaceIds": [
      "string"
    ]
  },
  "outputUrlPrefix": "string",
  "progressBytes": {
    "workCompleted": "string",
    "workEstimated": "string"
  },
  "progressEntities": {
    "workCompleted": "string",
    "workEstimated": "string"
  }
}
```

Metadata for ExportEntities operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|common|[GoogleDatastoreAdminV1CommonMetadata](#schemagoogledatastoreadminv1commonmetadata)|false|none|Metadata common to all Datastore Admin operations.|
|entityFilter|[GoogleDatastoreAdminV1EntityFilter](#schemagoogledatastoreadminv1entityfilter)|false|none|Description of which entities are being exported.|
|outputUrlPrefix|string|false|none|Location for the export metadata and data files. This will be the same value as the google.datastore.admin.v1.ExportEntitiesRequest.output_url_prefix field. The final output location is provided in google.datastore.admin.v1.ExportEntitiesResponse.output_url.|
|progressBytes|[GoogleDatastoreAdminV1Progress](#schemagoogledatastoreadminv1progress)|false|none|An estimate of the number of bytes processed.|
|progressEntities|[GoogleDatastoreAdminV1Progress](#schemagoogledatastoreadminv1progress)|false|none|An estimate of the number of entities processed.|

<h2 id="tocS_GoogleDatastoreAdminV1ExportEntitiesResponse">GoogleDatastoreAdminV1ExportEntitiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogledatastoreadminv1exportentitiesresponse"></a>
<a id="schema_GoogleDatastoreAdminV1ExportEntitiesResponse"></a>
<a id="tocSgoogledatastoreadminv1exportentitiesresponse"></a>
<a id="tocsgoogledatastoreadminv1exportentitiesresponse"></a>

```json
{
  "outputUrl": "string"
}
```

The response for google.datastore.admin.v1.DatastoreAdmin.ExportEntities.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outputUrl|string|false|none|Location of the output metadata file. This can be used to begin an import into Cloud Datastore (this project or another project). See google.datastore.admin.v1.ImportEntitiesRequest.input_url. Only present if the operation completed successfully.|

<h2 id="tocS_GoogleDatastoreAdminV1ImportEntitiesMetadata">GoogleDatastoreAdminV1ImportEntitiesMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogledatastoreadminv1importentitiesmetadata"></a>
<a id="schema_GoogleDatastoreAdminV1ImportEntitiesMetadata"></a>
<a id="tocSgoogledatastoreadminv1importentitiesmetadata"></a>
<a id="tocsgoogledatastoreadminv1importentitiesmetadata"></a>

```json
{
  "common": {
    "endTime": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "operationType": "OPERATION_TYPE_UNSPECIFIED",
    "startTime": "string",
    "state": "STATE_UNSPECIFIED"
  },
  "entityFilter": {
    "kinds": [
      "string"
    ],
    "namespaceIds": [
      "string"
    ]
  },
  "inputUrl": "string",
  "progressBytes": {
    "workCompleted": "string",
    "workEstimated": "string"
  },
  "progressEntities": {
    "workCompleted": "string",
    "workEstimated": "string"
  }
}
```

Metadata for ImportEntities operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|common|[GoogleDatastoreAdminV1CommonMetadata](#schemagoogledatastoreadminv1commonmetadata)|false|none|Metadata common to all Datastore Admin operations.|
|entityFilter|[GoogleDatastoreAdminV1EntityFilter](#schemagoogledatastoreadminv1entityfilter)|false|none|Description of which entities are being imported.|
|inputUrl|string|false|none|The location of the import metadata file. This will be the same value as the google.datastore.admin.v1.ExportEntitiesResponse.output_url field.|
|progressBytes|[GoogleDatastoreAdminV1Progress](#schemagoogledatastoreadminv1progress)|false|none|An estimate of the number of bytes processed.|
|progressEntities|[GoogleDatastoreAdminV1Progress](#schemagoogledatastoreadminv1progress)|false|none|An estimate of the number of entities processed.|

<h2 id="tocS_GoogleDatastoreAdminV1IndexOperationMetadata">GoogleDatastoreAdminV1IndexOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogledatastoreadminv1indexoperationmetadata"></a>
<a id="schema_GoogleDatastoreAdminV1IndexOperationMetadata"></a>
<a id="tocSgoogledatastoreadminv1indexoperationmetadata"></a>
<a id="tocsgoogledatastoreadminv1indexoperationmetadata"></a>

```json
{
  "common": {
    "endTime": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "operationType": "OPERATION_TYPE_UNSPECIFIED",
    "startTime": "string",
    "state": "STATE_UNSPECIFIED"
  },
  "indexId": "string",
  "progressEntities": {
    "workCompleted": "string",
    "workEstimated": "string"
  }
}
```

Metadata for Index operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|common|[GoogleDatastoreAdminV1CommonMetadata](#schemagoogledatastoreadminv1commonmetadata)|false|none|Metadata common to all Datastore Admin operations.|
|indexId|string|false|none|The index resource ID that this operation is acting on.|
|progressEntities|[GoogleDatastoreAdminV1Progress](#schemagoogledatastoreadminv1progress)|false|none|An estimate of the number of entities processed.|

<h2 id="tocS_GoogleDatastoreAdminV1MigrationProgressEvent">GoogleDatastoreAdminV1MigrationProgressEvent</h2>
<!-- backwards compatibility -->
<a id="schemagoogledatastoreadminv1migrationprogressevent"></a>
<a id="schema_GoogleDatastoreAdminV1MigrationProgressEvent"></a>
<a id="tocSgoogledatastoreadminv1migrationprogressevent"></a>
<a id="tocsgoogledatastoreadminv1migrationprogressevent"></a>

```json
{
  "prepareStepDetails": {
    "concurrencyMode": "CONCURRENCY_MODE_UNSPECIFIED"
  },
  "redirectWritesStepDetails": {
    "concurrencyMode": "CONCURRENCY_MODE_UNSPECIFIED"
  },
  "step": "MIGRATION_STEP_UNSPECIFIED"
}
```

An event signifying the start of a new step in a [migration from Cloud Datastore to Cloud Firestore in Datastore mode](https://cloud.google.com/datastore/docs/upgrade-to-firestore).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prepareStepDetails|[GoogleDatastoreAdminV1PrepareStepDetails](#schemagoogledatastoreadminv1preparestepdetails)|false|none|Details for the `PREPARE` step.|
|redirectWritesStepDetails|[GoogleDatastoreAdminV1RedirectWritesStepDetails](#schemagoogledatastoreadminv1redirectwritesstepdetails)|false|none|Details for the `REDIRECT_WRITES` step.|
|step|string|false|none|The step that is starting. An event with step set to `START` indicates that the migration has been reverted back to the initial pre-migration state.|

#### Enumerated Values

|Property|Value|
|---|---|
|step|MIGRATION_STEP_UNSPECIFIED|
|step|PREPARE|
|step|START|
|step|APPLY_WRITES_SYNCHRONOUSLY|
|step|COPY_AND_VERIFY|
|step|REDIRECT_EVENTUALLY_CONSISTENT_READS|
|step|REDIRECT_STRONGLY_CONSISTENT_READS|
|step|REDIRECT_WRITES|

<h2 id="tocS_GoogleDatastoreAdminV1MigrationStateEvent">GoogleDatastoreAdminV1MigrationStateEvent</h2>
<!-- backwards compatibility -->
<a id="schemagoogledatastoreadminv1migrationstateevent"></a>
<a id="schema_GoogleDatastoreAdminV1MigrationStateEvent"></a>
<a id="tocSgoogledatastoreadminv1migrationstateevent"></a>
<a id="tocsgoogledatastoreadminv1migrationstateevent"></a>

```json
{
  "state": "MIGRATION_STATE_UNSPECIFIED"
}
```

An event signifying a change in state of a [migration from Cloud Datastore to Cloud Firestore in Datastore mode](https://cloud.google.com/datastore/docs/upgrade-to-firestore).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|string|false|none|The new state of the migration.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|MIGRATION_STATE_UNSPECIFIED|
|state|RUNNING|
|state|PAUSED|
|state|COMPLETE|

<h2 id="tocS_GoogleDatastoreAdminV1PrepareStepDetails">GoogleDatastoreAdminV1PrepareStepDetails</h2>
<!-- backwards compatibility -->
<a id="schemagoogledatastoreadminv1preparestepdetails"></a>
<a id="schema_GoogleDatastoreAdminV1PrepareStepDetails"></a>
<a id="tocSgoogledatastoreadminv1preparestepdetails"></a>
<a id="tocsgoogledatastoreadminv1preparestepdetails"></a>

```json
{
  "concurrencyMode": "CONCURRENCY_MODE_UNSPECIFIED"
}
```

Details for the `PREPARE` step.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|concurrencyMode|string|false|none|The concurrency mode this database will use when it reaches the `REDIRECT_WRITES` step.|

#### Enumerated Values

|Property|Value|
|---|---|
|concurrencyMode|CONCURRENCY_MODE_UNSPECIFIED|
|concurrencyMode|PESSIMISTIC|
|concurrencyMode|OPTIMISTIC|
|concurrencyMode|OPTIMISTIC_WITH_ENTITY_GROUPS|

<h2 id="tocS_GoogleDatastoreAdminV1Progress">GoogleDatastoreAdminV1Progress</h2>
<!-- backwards compatibility -->
<a id="schemagoogledatastoreadminv1progress"></a>
<a id="schema_GoogleDatastoreAdminV1Progress"></a>
<a id="tocSgoogledatastoreadminv1progress"></a>
<a id="tocsgoogledatastoreadminv1progress"></a>

```json
{
  "workCompleted": "string",
  "workEstimated": "string"
}
```

Measures the progress of a particular metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workCompleted|string(int64)|false|none|The amount of work that has been completed. Note that this may be greater than work_estimated.|
|workEstimated|string(int64)|false|none|An estimate of how much work needs to be performed. May be zero if the work estimate is unavailable.|

<h2 id="tocS_GoogleDatastoreAdminV1RedirectWritesStepDetails">GoogleDatastoreAdminV1RedirectWritesStepDetails</h2>
<!-- backwards compatibility -->
<a id="schemagoogledatastoreadminv1redirectwritesstepdetails"></a>
<a id="schema_GoogleDatastoreAdminV1RedirectWritesStepDetails"></a>
<a id="tocSgoogledatastoreadminv1redirectwritesstepdetails"></a>
<a id="tocsgoogledatastoreadminv1redirectwritesstepdetails"></a>

```json
{
  "concurrencyMode": "CONCURRENCY_MODE_UNSPECIFIED"
}
```

Details for the `REDIRECT_WRITES` step.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|concurrencyMode|string|false|none|Ths concurrency mode for this database.|

#### Enumerated Values

|Property|Value|
|---|---|
|concurrencyMode|CONCURRENCY_MODE_UNSPECIFIED|
|concurrencyMode|PESSIMISTIC|
|concurrencyMode|OPTIMISTIC|
|concurrencyMode|OPTIMISTIC_WITH_ENTITY_GROUPS|

<h2 id="tocS_GoogleDatastoreAdminV1beta1CommonMetadata">GoogleDatastoreAdminV1beta1CommonMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogledatastoreadminv1beta1commonmetadata"></a>
<a id="schema_GoogleDatastoreAdminV1beta1CommonMetadata"></a>
<a id="tocSgoogledatastoreadminv1beta1commonmetadata"></a>
<a id="tocsgoogledatastoreadminv1beta1commonmetadata"></a>

```json
{
  "endTime": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "operationType": "OPERATION_TYPE_UNSPECIFIED",
  "startTime": "string",
  "state": "STATE_UNSPECIFIED"
}
```

Metadata common to all Datastore Admin operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|The time the operation ended, either successfully or otherwise.|
|labels|object|false|none|The client-assigned labels which were provided when the operation was created. May also include additional labels.|
|operationType|string|false|none|The type of the operation. Can be used as a filter in ListOperationsRequest.|
|startTime|string(google-datetime)|false|none|The time that work began on the operation.|
|state|string|false|none|The current state of the Operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|OPERATION_TYPE_UNSPECIFIED|
|operationType|EXPORT_ENTITIES|
|operationType|IMPORT_ENTITIES|
|state|STATE_UNSPECIFIED|
|state|INITIALIZING|
|state|PROCESSING|
|state|CANCELLING|
|state|FINALIZING|
|state|SUCCESSFUL|
|state|FAILED|
|state|CANCELLED|

<h2 id="tocS_GoogleDatastoreAdminV1beta1EntityFilter">GoogleDatastoreAdminV1beta1EntityFilter</h2>
<!-- backwards compatibility -->
<a id="schemagoogledatastoreadminv1beta1entityfilter"></a>
<a id="schema_GoogleDatastoreAdminV1beta1EntityFilter"></a>
<a id="tocSgoogledatastoreadminv1beta1entityfilter"></a>
<a id="tocsgoogledatastoreadminv1beta1entityfilter"></a>

```json
{
  "kinds": [
    "string"
  ],
  "namespaceIds": [
    "string"
  ]
}
```

Identifies a subset of entities in a project. This is specified as combinations of kinds and namespaces (either or both of which may be all, as described in the following examples). Example usage: Entire project: kinds=[], namespace_ids=[] Kinds Foo and Bar in all namespaces: kinds=['Foo', 'Bar'], namespace_ids=[] Kinds Foo and Bar only in the default namespace: kinds=['Foo', 'Bar'], namespace_ids=[''] Kinds Foo and Bar in both the default and Baz namespaces: kinds=['Foo', 'Bar'], namespace_ids=['', 'Baz'] The entire Baz namespace: kinds=[], namespace_ids=['Baz']

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kinds|[string]|false|none|If empty, then this represents all kinds.|
|namespaceIds|[string]|false|none|An empty list represents all namespaces. This is the preferred usage for projects that don't use namespaces. An empty string element represents the default namespace. This should be used if the project has data in non-default namespaces, but doesn't want to include them. Each namespace in this list must be unique.|

<h2 id="tocS_GoogleDatastoreAdminV1beta1ExportEntitiesMetadata">GoogleDatastoreAdminV1beta1ExportEntitiesMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogledatastoreadminv1beta1exportentitiesmetadata"></a>
<a id="schema_GoogleDatastoreAdminV1beta1ExportEntitiesMetadata"></a>
<a id="tocSgoogledatastoreadminv1beta1exportentitiesmetadata"></a>
<a id="tocsgoogledatastoreadminv1beta1exportentitiesmetadata"></a>

```json
{
  "common": {
    "endTime": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "operationType": "OPERATION_TYPE_UNSPECIFIED",
    "startTime": "string",
    "state": "STATE_UNSPECIFIED"
  },
  "entityFilter": {
    "kinds": [
      "string"
    ],
    "namespaceIds": [
      "string"
    ]
  },
  "outputUrlPrefix": "string",
  "progressBytes": {
    "workCompleted": "string",
    "workEstimated": "string"
  },
  "progressEntities": {
    "workCompleted": "string",
    "workEstimated": "string"
  }
}
```

Metadata for ExportEntities operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|common|[GoogleDatastoreAdminV1beta1CommonMetadata](#schemagoogledatastoreadminv1beta1commonmetadata)|false|none|Metadata common to all Datastore Admin operations.|
|entityFilter|[GoogleDatastoreAdminV1beta1EntityFilter](#schemagoogledatastoreadminv1beta1entityfilter)|false|none|Description of which entities are being exported.|
|outputUrlPrefix|string|false|none|Location for the export metadata and data files. This will be the same value as the google.datastore.admin.v1beta1.ExportEntitiesRequest.output_url_prefix field. The final output location is provided in google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url.|
|progressBytes|[GoogleDatastoreAdminV1beta1Progress](#schemagoogledatastoreadminv1beta1progress)|false|none|An estimate of the number of bytes processed.|
|progressEntities|[GoogleDatastoreAdminV1beta1Progress](#schemagoogledatastoreadminv1beta1progress)|false|none|An estimate of the number of entities processed.|

<h2 id="tocS_GoogleDatastoreAdminV1beta1ExportEntitiesRequest">GoogleDatastoreAdminV1beta1ExportEntitiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogledatastoreadminv1beta1exportentitiesrequest"></a>
<a id="schema_GoogleDatastoreAdminV1beta1ExportEntitiesRequest"></a>
<a id="tocSgoogledatastoreadminv1beta1exportentitiesrequest"></a>
<a id="tocsgoogledatastoreadminv1beta1exportentitiesrequest"></a>

```json
{
  "entityFilter": {
    "kinds": [
      "string"
    ],
    "namespaceIds": [
      "string"
    ]
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "outputUrlPrefix": "string"
}
```

The request for google.datastore.admin.v1beta1.DatastoreAdmin.ExportEntities.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entityFilter|[GoogleDatastoreAdminV1beta1EntityFilter](#schemagoogledatastoreadminv1beta1entityfilter)|false|none|Description of what data from the project is included in the export.|
|labels|object|false|none|Client-assigned labels.|
|outputUrlPrefix|string|false|none|Location for the export metadata and data files. The full resource URL of the external storage location. Currently, only Google Cloud Storage is supported. So output_url_prefix should be of the form: `gs://BUCKET_NAME[/NAMESPACE_PATH]`, where `BUCKET_NAME` is the name of the Cloud Storage bucket and `NAMESPACE_PATH` is an optional Cloud Storage namespace path (this is not a Cloud Datastore namespace). For more information about Cloud Storage namespace paths, see [Object name considerations](https://cloud.google.com/storage/docs/naming#object-considerations). The resulting files will be nested deeper than the specified URL prefix. The final output URL will be provided in the google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url field. That value should be used for subsequent ImportEntities operations. By nesting the data files deeper, the same Cloud Storage bucket can be used in multiple ExportEntities operations without conflict.|

<h2 id="tocS_GoogleDatastoreAdminV1beta1ExportEntitiesResponse">GoogleDatastoreAdminV1beta1ExportEntitiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogledatastoreadminv1beta1exportentitiesresponse"></a>
<a id="schema_GoogleDatastoreAdminV1beta1ExportEntitiesResponse"></a>
<a id="tocSgoogledatastoreadminv1beta1exportentitiesresponse"></a>
<a id="tocsgoogledatastoreadminv1beta1exportentitiesresponse"></a>

```json
{
  "outputUrl": "string"
}
```

The response for google.datastore.admin.v1beta1.DatastoreAdmin.ExportEntities.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outputUrl|string|false|none|Location of the output metadata file. This can be used to begin an import into Cloud Datastore (this project or another project). See google.datastore.admin.v1beta1.ImportEntitiesRequest.input_url. Only present if the operation completed successfully.|

<h2 id="tocS_GoogleDatastoreAdminV1beta1ImportEntitiesMetadata">GoogleDatastoreAdminV1beta1ImportEntitiesMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogledatastoreadminv1beta1importentitiesmetadata"></a>
<a id="schema_GoogleDatastoreAdminV1beta1ImportEntitiesMetadata"></a>
<a id="tocSgoogledatastoreadminv1beta1importentitiesmetadata"></a>
<a id="tocsgoogledatastoreadminv1beta1importentitiesmetadata"></a>

```json
{
  "common": {
    "endTime": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "operationType": "OPERATION_TYPE_UNSPECIFIED",
    "startTime": "string",
    "state": "STATE_UNSPECIFIED"
  },
  "entityFilter": {
    "kinds": [
      "string"
    ],
    "namespaceIds": [
      "string"
    ]
  },
  "inputUrl": "string",
  "progressBytes": {
    "workCompleted": "string",
    "workEstimated": "string"
  },
  "progressEntities": {
    "workCompleted": "string",
    "workEstimated": "string"
  }
}
```

Metadata for ImportEntities operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|common|[GoogleDatastoreAdminV1beta1CommonMetadata](#schemagoogledatastoreadminv1beta1commonmetadata)|false|none|Metadata common to all Datastore Admin operations.|
|entityFilter|[GoogleDatastoreAdminV1beta1EntityFilter](#schemagoogledatastoreadminv1beta1entityfilter)|false|none|Description of which entities are being imported.|
|inputUrl|string|false|none|The location of the import metadata file. This will be the same value as the google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url field.|
|progressBytes|[GoogleDatastoreAdminV1beta1Progress](#schemagoogledatastoreadminv1beta1progress)|false|none|An estimate of the number of bytes processed.|
|progressEntities|[GoogleDatastoreAdminV1beta1Progress](#schemagoogledatastoreadminv1beta1progress)|false|none|An estimate of the number of entities processed.|

<h2 id="tocS_GoogleDatastoreAdminV1beta1ImportEntitiesRequest">GoogleDatastoreAdminV1beta1ImportEntitiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogledatastoreadminv1beta1importentitiesrequest"></a>
<a id="schema_GoogleDatastoreAdminV1beta1ImportEntitiesRequest"></a>
<a id="tocSgoogledatastoreadminv1beta1importentitiesrequest"></a>
<a id="tocsgoogledatastoreadminv1beta1importentitiesrequest"></a>

```json
{
  "entityFilter": {
    "kinds": [
      "string"
    ],
    "namespaceIds": [
      "string"
    ]
  },
  "inputUrl": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  }
}
```

The request for google.datastore.admin.v1beta1.DatastoreAdmin.ImportEntities.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entityFilter|[GoogleDatastoreAdminV1beta1EntityFilter](#schemagoogledatastoreadminv1beta1entityfilter)|false|none|Optionally specify which kinds/namespaces are to be imported. If provided, the list must be a subset of the EntityFilter used in creating the export, otherwise a FAILED_PRECONDITION error will be returned. If no filter is specified then all entities from the export are imported.|
|inputUrl|string|false|none|The full resource URL of the external storage location. Currently, only Google Cloud Storage is supported. So input_url should be of the form: `gs://BUCKET_NAME[/NAMESPACE_PATH]/OVERALL_EXPORT_METADATA_FILE`, where `BUCKET_NAME` is the name of the Cloud Storage bucket, `NAMESPACE_PATH` is an optional Cloud Storage namespace path (this is not a Cloud Datastore namespace), and `OVERALL_EXPORT_METADATA_FILE` is the metadata file written by the ExportEntities operation. For more information about Cloud Storage namespace paths, see [Object name considerations](https://cloud.google.com/storage/docs/naming#object-considerations). For more information, see google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url.|
|labels|object|false|none|Client-assigned labels.|

<h2 id="tocS_GoogleDatastoreAdminV1beta1Progress">GoogleDatastoreAdminV1beta1Progress</h2>
<!-- backwards compatibility -->
<a id="schemagoogledatastoreadminv1beta1progress"></a>
<a id="schema_GoogleDatastoreAdminV1beta1Progress"></a>
<a id="tocSgoogledatastoreadminv1beta1progress"></a>
<a id="tocsgoogledatastoreadminv1beta1progress"></a>

```json
{
  "workCompleted": "string",
  "workEstimated": "string"
}
```

Measures the progress of a particular metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workCompleted|string(int64)|false|none|The amount of work that has been completed. Note that this may be greater than work_estimated.|
|workEstimated|string(int64)|false|none|An estimate of how much work needs to be performed. May be zero if the work estimate is unavailable.|

<h2 id="tocS_GoogleLongrunningOperation">GoogleLongrunningOperation</h2>
<!-- backwards compatibility -->
<a id="schemagooglelongrunningoperation"></a>
<a id="schema_GoogleLongrunningOperation"></a>
<a id="tocSgooglelongrunningoperation"></a>
<a id="tocsgooglelongrunningoperation"></a>

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

This resource represents a long-running operation that is the result of a network API call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|done|boolean|false|none|If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.|
|error|[Status](#schemastatus)|false|none|The error result of the operation in case of failure or cancellation.|
|metadata|object|false|none|Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.|
|name|string|false|none|The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.|
|response|object|false|none|The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
{
  "code": 0,
  "details": [
    {
      "property1": null,
      "property2": null
    }
  ],
  "message": "string"
}
```

The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|The status code, which should be an enum value of google.rpc.Code.|
|details|[object]|false|none|A list of messages that carry the error details. There is a common set of message types for APIs to use.|
|message|string|false|none|A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.|
