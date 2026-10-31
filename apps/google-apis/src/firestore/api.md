<h1 id="cloud-firestore-api">Cloud Firestore API v1beta2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Accesses the NoSQL document database built for automatic scaling, high performance, and ease of application development.

Base URLs:

* <a href="https://firestore.googleapis.com/">https://firestore.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/firestore">External documentation</a>

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

<h1 id="cloud-firestore-api-projects">projects</h1>

## firestore.projects.databases.collectionGroups.indexes.get

<a id="opIdfirestore.projects.databases.collectionGroups.indexes.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta2/{name}`

Gets a composite index.

<h3 id="firestoreprojectsdatabasescollectiongroupsindexesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|A name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{index_id}`|
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
  "fields": [
    {
      "arrayConfig": "ARRAY_CONFIG_UNSPECIFIED",
      "fieldPath": "string",
      "order": "ORDER_UNSPECIFIED"
    }
  ],
  "name": "string",
  "queryScope": "QUERY_SCOPE_UNSPECIFIED",
  "state": "STATE_UNSPECIFIED"
}
```

<h3 id="firestoreprojectsdatabasescollectiongroupsindexesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleFirestoreAdminV1beta2Index](#schemagooglefirestoreadminv1beta2index)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/datastore ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/datastore )
</aside>

## firestore.projects.databases.collectionGroups.indexes.delete

<a id="opIdfirestore.projects.databases.collectionGroups.indexes.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta2/{name}`

Deletes a composite index.

<h3 id="firestoreprojectsdatabasescollectiongroupsindexesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|A name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{index_id}`|
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
{}
```

<h3 id="firestoreprojectsdatabasescollectiongroupsindexesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/datastore ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/datastore )
</aside>

## firestore.projects.databases.collectionGroups.fields.patch

<a id="opIdfirestore.projects.databases.collectionGroups.fields.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "indexConfig": {
      "ancestorField": "string",
      "indexes": [
        {
          "fields": [
            {
              "arrayConfig": "ARRAY_CONFIG_UNSPECIFIED",
              "fieldPath": "string",
              "order": "ORDER_UNSPECIFIED"
            }
          ],
          "name": "string",
          "queryScope": "QUERY_SCOPE_UNSPECIFIED",
          "state": "STATE_UNSPECIFIED"
        }
      ],
      "reverting": true,
      "usesAncestorConfig": true
    },
    "name": "string"
  }'
```

`PATCH /v1beta2/{name}`

Updates a field configuration. Currently, field updates apply only to single field index configuration. However, calls to FirestoreAdmin.UpdateField should provide a field mask to avoid changing any configuration that the caller isn't aware of. The field mask should be specified as: `{ paths: "index_config" }`. This call returns a google.longrunning.Operation which may be used to track the status of the field update. The metadata for the operation will be the type FieldOperationMetadata. To configure the default field settings for the database, use the special `Field` with resource name: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*`.

> Body parameter

```json
{
  "indexConfig": {
    "ancestorField": "string",
    "indexes": [
      {
        "fields": [
          {
            "arrayConfig": "ARRAY_CONFIG_UNSPECIFIED",
            "fieldPath": "string",
            "order": "ORDER_UNSPECIFIED"
          }
        ],
        "name": "string",
        "queryScope": "QUERY_SCOPE_UNSPECIFIED",
        "state": "STATE_UNSPECIFIED"
      }
    ],
    "reverting": true,
    "usesAncestorConfig": true
  },
  "name": "string"
}
```

<h3 id="firestoreprojectsdatabasescollectiongroupsfieldspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|A field name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}` A field path may be a simple field name, e.g. `address` or a path to fields within map_value , e.g. `address.city`, or a special field path. The only valid special field is `*`, which represents any field. Field paths may be quoted using ` (backtick). The only character that needs to be escaped within a quoted field path is the backtick character itself, escaped using a backslash. Special characters in field paths that must be quoted include: `*`, `.`, ``` (backtick), `[`, `]`, as well as any ascii symbolic characters. Examples: (Note: Comments here are written in markdown syntax, so there is an additional layer of backticks to represent a code block) `\`address.city\`` represents a field named `address.city`, not the map key `city` in the field `address`. `\`*\`` represents a field named `*`, not any field. A special `Field` contains the default indexing settings for all fields. This field's resource name is: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*` Indexes defined on this `Field` will be applied to all fields which do not have their own `Field` index configuration.|
|updateMask|query|string|false|A mask, relative to the field. If specified, only configuration specified by this field_mask will be updated in the field.|
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
|body|body|[GoogleFirestoreAdminV1beta2Field](#schemagooglefirestoreadminv1beta2field)|false|none|
|» indexConfig|body|[GoogleFirestoreAdminV1beta2IndexConfig](#schemagooglefirestoreadminv1beta2indexconfig)|false|The index configuration for this field. If unset, field indexing will revert to the configuration defined by the `ancestor_field`. To explicitly remove all indexes for this field, specify an index config with an empty list of indexes.|
|» name|body|string|false|A field name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}` A field path may be a simple field name, e.g. `address` or a path to fields within map_value , e.g. `address.city`, or a special field path. The only valid special field is `*`, which represents any field. Field paths may be quoted using ` (backtick). The only character that needs to be escaped within a quoted field path is the backtick character itself, escaped using a backslash. Special characters in field paths that must be quoted include: `*`, `.`, ``` (backtick), `[`, `]`, as well as any ascii symbolic characters. Examples: (Note: Comments here are written in markdown syntax, so there is an additional layer of backticks to represent a code block) `\`address.city\`` represents a field named `address.city`, not the map key `city` in the field `address`. `\`*\`` represents a field named `*`, not any field. A special `Field` contains the default indexing settings for all fields. This field's resource name is: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*` Indexes defined on this `Field` will be applied to all fields which do not have their own `Field` index configuration.|

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

<h3 id="firestoreprojectsdatabasescollectiongroupsfieldspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/datastore ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/datastore )
</aside>

## firestore.projects.databases.exportDocuments

<a id="opIdfirestore.projects.databases.exportDocuments"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string:exportDocuments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "collectionIds": [
      "string"
    ],
    "outputUriPrefix": "string"
  }'
```

`POST /v1beta2/{name}:exportDocuments`

Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.

> Body parameter

```json
{
  "collectionIds": [
    "string"
  ],
  "outputUriPrefix": "string"
}
```

<h3 id="firestoreprojectsdatabasesexportdocuments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Database to export. Should be of the form: `projects/{project_id}/databases/{database_id}`.|
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
|body|body|[GoogleFirestoreAdminV1beta2ExportDocumentsRequest](#schemagooglefirestoreadminv1beta2exportdocumentsrequest)|false|none|
|» collectionIds|body|[string]|false|Which collection ids to export. Unspecified means all collections.|
|» outputUriPrefix|body|string|false|The output URI. Currently only supports Google Cloud Storage URIs of the form: `gs://BUCKET_NAME[/NAMESPACE_PATH]`, where `BUCKET_NAME` is the name of the Google Cloud Storage bucket and `NAMESPACE_PATH` is an optional Google Cloud Storage namespace path. When choosing a name, be sure to consider Google Cloud Storage naming guidelines: https://cloud.google.com/storage/docs/naming. If the URI is a bucket (without a namespace path), a prefix will be generated based on the start time.|

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

<h3 id="firestoreprojectsdatabasesexportdocuments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/datastore ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/datastore )
</aside>

## firestore.projects.databases.importDocuments

<a id="opIdfirestore.projects.databases.importDocuments"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string:importDocuments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "collectionIds": [
      "string"
    ],
    "inputUriPrefix": "string"
  }'
```

`POST /v1beta2/{name}:importDocuments`

Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.

> Body parameter

```json
{
  "collectionIds": [
    "string"
  ],
  "inputUriPrefix": "string"
}
```

<h3 id="firestoreprojectsdatabasesimportdocuments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Database to import into. Should be of the form: `projects/{project_id}/databases/{database_id}`.|
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
|body|body|[GoogleFirestoreAdminV1beta2ImportDocumentsRequest](#schemagooglefirestoreadminv1beta2importdocumentsrequest)|false|none|
|» collectionIds|body|[string]|false|Which collection ids to import. Unspecified means all collections included in the import.|
|» inputUriPrefix|body|string|false|Location of the exported files. This must match the output_uri_prefix of an ExportDocumentsResponse from an export that has completed successfully. See: google.firestore.admin.v1beta2.ExportDocumentsResponse.output_uri_prefix.|

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

<h3 id="firestoreprojectsdatabasesimportdocuments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/datastore ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/datastore )
</aside>

## firestore.projects.databases.collectionGroups.fields.list

<a id="opIdfirestore.projects.databases.collectionGroups.fields.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string/fields \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta2/{parent}/fields`

Lists the field configuration and metadata for this database. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with the filter set to `indexConfig.usesAncestorConfig:false`.

<h3 id="firestoreprojectsdatabasescollectiongroupsfieldslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|A parent name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`|
|filter|query|string|false|The filter to apply to list results. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with the filter set to `indexConfig.usesAncestorConfig:false`.|
|pageSize|query|integer|false|The number of results to return.|
|pageToken|query|string|false|A page token, returned from a previous call to FirestoreAdmin.ListFields, that may be used to get the next page of results.|
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
  "fields": [
    {
      "indexConfig": {
        "ancestorField": "string",
        "indexes": [
          {
            "fields": [
              {
                "arrayConfig": "ARRAY_CONFIG_UNSPECIFIED",
                "fieldPath": "string",
                "order": "ORDER_UNSPECIFIED"
              }
            ],
            "name": "string",
            "queryScope": "QUERY_SCOPE_UNSPECIFIED",
            "state": "STATE_UNSPECIFIED"
          }
        ],
        "reverting": true,
        "usesAncestorConfig": true
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="firestoreprojectsdatabasescollectiongroupsfieldslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleFirestoreAdminV1beta2ListFieldsResponse](#schemagooglefirestoreadminv1beta2listfieldsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/datastore ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/datastore )
</aside>

## firestore.projects.databases.collectionGroups.indexes.list

<a id="opIdfirestore.projects.databases.collectionGroups.indexes.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string/indexes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta2/{parent}/indexes`

Lists composite indexes.

<h3 id="firestoreprojectsdatabasescollectiongroupsindexeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|A parent name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`|
|filter|query|string|false|The filter to apply to list results.|
|pageSize|query|integer|false|The number of results to return.|
|pageToken|query|string|false|A page token, returned from a previous call to FirestoreAdmin.ListIndexes, that may be used to get the next page of results.|
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
  "indexes": [
    {
      "fields": [
        {
          "arrayConfig": "ARRAY_CONFIG_UNSPECIFIED",
          "fieldPath": "string",
          "order": "ORDER_UNSPECIFIED"
        }
      ],
      "name": "string",
      "queryScope": "QUERY_SCOPE_UNSPECIFIED",
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="firestoreprojectsdatabasescollectiongroupsindexeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleFirestoreAdminV1beta2ListIndexesResponse](#schemagooglefirestoreadminv1beta2listindexesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/datastore ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/datastore )
</aside>

## firestore.projects.databases.collectionGroups.indexes.create

<a id="opIdfirestore.projects.databases.collectionGroups.indexes.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string/indexes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "fields": [
      {
        "arrayConfig": "ARRAY_CONFIG_UNSPECIFIED",
        "fieldPath": "string",
        "order": "ORDER_UNSPECIFIED"
      }
    ],
    "name": "string",
    "queryScope": "QUERY_SCOPE_UNSPECIFIED",
    "state": "STATE_UNSPECIFIED"
  }'
```

`POST /v1beta2/{parent}/indexes`

Creates a composite index. This returns a google.longrunning.Operation which may be used to track the status of the creation. The metadata for the operation will be the type IndexOperationMetadata.

> Body parameter

```json
{
  "fields": [
    {
      "arrayConfig": "ARRAY_CONFIG_UNSPECIFIED",
      "fieldPath": "string",
      "order": "ORDER_UNSPECIFIED"
    }
  ],
  "name": "string",
  "queryScope": "QUERY_SCOPE_UNSPECIFIED",
  "state": "STATE_UNSPECIFIED"
}
```

<h3 id="firestoreprojectsdatabasescollectiongroupsindexescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|A parent name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`|
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
|body|body|[GoogleFirestoreAdminV1beta2Index](#schemagooglefirestoreadminv1beta2index)|false|none|
|» fields|body|[[GoogleFirestoreAdminV1beta2IndexField](#schemagooglefirestoreadminv1beta2indexfield)]|false|The fields supported by this index. For composite indexes, this is always 2 or more fields. The last field entry is always for the field path `__name__`. If, on creation, `__name__` was not specified as the last field, it will be added automatically with the same direction as that of the last field defined. If the final field in a composite index is not directional, the `__name__` will be ordered ASCENDING (unless explicitly specified). For single field indexes, this will always be exactly one entry with a field path equal to the field path of the associated field.|
|» name|body|string|false|Output only. A server defined name for this index. The form of this name for composite indexes will be: `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{composite_index_id}` For single field indexes, this field will be empty.|
|» queryScope|body|string|false|Indexes with a collection query scope specified allow queries against a collection that is the child of a specific document, specified at query time, and that has the same collection id. Indexes with a collection group query scope specified allow queries against all collections descended from a specific document, specified at query time, and that have the same collection id as this index.|
|» state|body|string|false|Output only. The serving state of the index.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» queryScope|QUERY_SCOPE_UNSPECIFIED|
|» queryScope|COLLECTION|
|» queryScope|COLLECTION_GROUP|
|» state|STATE_UNSPECIFIED|
|» state|CREATING|
|» state|READY|
|» state|NEEDS_REPAIR|

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

<h3 id="firestoreprojectsdatabasescollectiongroupsindexescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/datastore ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/datastore )
</aside>

# Schemas

<h2 id="tocS_Empty">Empty</h2>
<!-- backwards compatibility -->
<a id="schemaempty"></a>
<a id="schema_Empty"></a>
<a id="tocSempty"></a>
<a id="tocsempty"></a>

```json
{}
```

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

<h2 id="tocS_GoogleFirestoreAdminV1CreateDatabaseMetadata">GoogleFirestoreAdminV1CreateDatabaseMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirestoreadminv1createdatabasemetadata"></a>
<a id="schema_GoogleFirestoreAdminV1CreateDatabaseMetadata"></a>
<a id="tocSgooglefirestoreadminv1createdatabasemetadata"></a>
<a id="tocsgooglefirestoreadminv1createdatabasemetadata"></a>

```json
{}
```

Metadata related to the create database operation.

<h2 id="tocS_GoogleFirestoreAdminV1DeleteDatabaseMetadata">GoogleFirestoreAdminV1DeleteDatabaseMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirestoreadminv1deletedatabasemetadata"></a>
<a id="schema_GoogleFirestoreAdminV1DeleteDatabaseMetadata"></a>
<a id="tocSgooglefirestoreadminv1deletedatabasemetadata"></a>
<a id="tocsgooglefirestoreadminv1deletedatabasemetadata"></a>

```json
{}
```

Metadata related to the delete database operation.

<h2 id="tocS_GoogleFirestoreAdminV1Progress">GoogleFirestoreAdminV1Progress</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirestoreadminv1progress"></a>
<a id="schema_GoogleFirestoreAdminV1Progress"></a>
<a id="tocSgooglefirestoreadminv1progress"></a>
<a id="tocsgooglefirestoreadminv1progress"></a>

```json
{
  "completedWork": "string",
  "estimatedWork": "string"
}
```

Describes the progress of the operation. Unit of work is generic and must be interpreted based on where Progress is used.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedWork|string(int64)|false|none|The amount of work completed.|
|estimatedWork|string(int64)|false|none|The amount of work estimated.|

<h2 id="tocS_GoogleFirestoreAdminV1RestoreDatabaseMetadata">GoogleFirestoreAdminV1RestoreDatabaseMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirestoreadminv1restoredatabasemetadata"></a>
<a id="schema_GoogleFirestoreAdminV1RestoreDatabaseMetadata"></a>
<a id="tocSgooglefirestoreadminv1restoredatabasemetadata"></a>
<a id="tocsgooglefirestoreadminv1restoredatabasemetadata"></a>

```json
{
  "backup": "string",
  "database": "string",
  "endTime": "string",
  "operationState": "OPERATION_STATE_UNSPECIFIED",
  "progressPercentage": {
    "completedWork": "string",
    "estimatedWork": "string"
  },
  "startTime": "string"
}
```

Metadata for the long-running operation from the RestoreDatabase request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backup|string|false|none|The name of the backup restoring from.|
|database|string|false|none|The name of the database being restored to.|
|endTime|string(google-datetime)|false|none|The time the restore finished, unset for ongoing restores.|
|operationState|string|false|none|The operation state of the restore.|
|progressPercentage|[GoogleFirestoreAdminV1Progress](#schemagooglefirestoreadminv1progress)|false|none|How far along the restore is as an estimated percentage of remaining time.|
|startTime|string(google-datetime)|false|none|The time the restore was started.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationState|OPERATION_STATE_UNSPECIFIED|
|operationState|INITIALIZING|
|operationState|PROCESSING|
|operationState|CANCELLING|
|operationState|FINALIZING|
|operationState|SUCCESSFUL|
|operationState|FAILED|
|operationState|CANCELLED|

<h2 id="tocS_GoogleFirestoreAdminV1UpdateDatabaseMetadata">GoogleFirestoreAdminV1UpdateDatabaseMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirestoreadminv1updatedatabasemetadata"></a>
<a id="schema_GoogleFirestoreAdminV1UpdateDatabaseMetadata"></a>
<a id="tocSgooglefirestoreadminv1updatedatabasemetadata"></a>
<a id="tocsgooglefirestoreadminv1updatedatabasemetadata"></a>

```json
{}
```

Metadata related to the update database operation.

<h2 id="tocS_GoogleFirestoreAdminV1beta2ExportDocumentsMetadata">GoogleFirestoreAdminV1beta2ExportDocumentsMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirestoreadminv1beta2exportdocumentsmetadata"></a>
<a id="schema_GoogleFirestoreAdminV1beta2ExportDocumentsMetadata"></a>
<a id="tocSgooglefirestoreadminv1beta2exportdocumentsmetadata"></a>
<a id="tocsgooglefirestoreadminv1beta2exportdocumentsmetadata"></a>

```json
{
  "collectionIds": [
    "string"
  ],
  "endTime": "string",
  "operationState": "OPERATION_STATE_UNSPECIFIED",
  "outputUriPrefix": "string",
  "progressBytes": {
    "completedWork": "string",
    "estimatedWork": "string"
  },
  "progressDocuments": {
    "completedWork": "string",
    "estimatedWork": "string"
  },
  "startTime": "string"
}
```

Metadata for google.longrunning.Operation results from FirestoreAdmin.ExportDocuments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collectionIds|[string]|false|none|Which collection ids are being exported.|
|endTime|string(google-datetime)|false|none|The time this operation completed. Will be unset if operation still in progress.|
|operationState|string|false|none|The state of the export operation.|
|outputUriPrefix|string|false|none|Where the entities are being exported to.|
|progressBytes|[GoogleFirestoreAdminV1beta2Progress](#schemagooglefirestoreadminv1beta2progress)|false|none|The progress, in bytes, of this operation.|
|progressDocuments|[GoogleFirestoreAdminV1beta2Progress](#schemagooglefirestoreadminv1beta2progress)|false|none|The progress, in documents, of this operation.|
|startTime|string(google-datetime)|false|none|The time this operation started.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationState|OPERATION_STATE_UNSPECIFIED|
|operationState|INITIALIZING|
|operationState|PROCESSING|
|operationState|CANCELLING|
|operationState|FINALIZING|
|operationState|SUCCESSFUL|
|operationState|FAILED|
|operationState|CANCELLED|

<h2 id="tocS_GoogleFirestoreAdminV1beta2ExportDocumentsRequest">GoogleFirestoreAdminV1beta2ExportDocumentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirestoreadminv1beta2exportdocumentsrequest"></a>
<a id="schema_GoogleFirestoreAdminV1beta2ExportDocumentsRequest"></a>
<a id="tocSgooglefirestoreadminv1beta2exportdocumentsrequest"></a>
<a id="tocsgooglefirestoreadminv1beta2exportdocumentsrequest"></a>

```json
{
  "collectionIds": [
    "string"
  ],
  "outputUriPrefix": "string"
}
```

The request for FirestoreAdmin.ExportDocuments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collectionIds|[string]|false|none|Which collection ids to export. Unspecified means all collections.|
|outputUriPrefix|string|false|none|The output URI. Currently only supports Google Cloud Storage URIs of the form: `gs://BUCKET_NAME[/NAMESPACE_PATH]`, where `BUCKET_NAME` is the name of the Google Cloud Storage bucket and `NAMESPACE_PATH` is an optional Google Cloud Storage namespace path. When choosing a name, be sure to consider Google Cloud Storage naming guidelines: https://cloud.google.com/storage/docs/naming. If the URI is a bucket (without a namespace path), a prefix will be generated based on the start time.|

<h2 id="tocS_GoogleFirestoreAdminV1beta2ExportDocumentsResponse">GoogleFirestoreAdminV1beta2ExportDocumentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirestoreadminv1beta2exportdocumentsresponse"></a>
<a id="schema_GoogleFirestoreAdminV1beta2ExportDocumentsResponse"></a>
<a id="tocSgooglefirestoreadminv1beta2exportdocumentsresponse"></a>
<a id="tocsgooglefirestoreadminv1beta2exportdocumentsresponse"></a>

```json
{
  "outputUriPrefix": "string"
}
```

Returned in the google.longrunning.Operation response field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outputUriPrefix|string|false|none|Location of the output files. This can be used to begin an import into Cloud Firestore (this project or another project) after the operation completes successfully.|

<h2 id="tocS_GoogleFirestoreAdminV1beta2Field">GoogleFirestoreAdminV1beta2Field</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirestoreadminv1beta2field"></a>
<a id="schema_GoogleFirestoreAdminV1beta2Field"></a>
<a id="tocSgooglefirestoreadminv1beta2field"></a>
<a id="tocsgooglefirestoreadminv1beta2field"></a>

```json
{
  "indexConfig": {
    "ancestorField": "string",
    "indexes": [
      {
        "fields": [
          {
            "arrayConfig": "ARRAY_CONFIG_UNSPECIFIED",
            "fieldPath": "string",
            "order": "ORDER_UNSPECIFIED"
          }
        ],
        "name": "string",
        "queryScope": "QUERY_SCOPE_UNSPECIFIED",
        "state": "STATE_UNSPECIFIED"
      }
    ],
    "reverting": true,
    "usesAncestorConfig": true
  },
  "name": "string"
}
```

Represents a single field in the database. Fields are grouped by their "Collection Group", which represent all collections in the database with the same id.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|indexConfig|[GoogleFirestoreAdminV1beta2IndexConfig](#schemagooglefirestoreadminv1beta2indexconfig)|false|none|The index configuration for this field. If unset, field indexing will revert to the configuration defined by the `ancestor_field`. To explicitly remove all indexes for this field, specify an index config with an empty list of indexes.|
|name|string|false|none|A field name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}` A field path may be a simple field name, e.g. `address` or a path to fields within map_value , e.g. `address.city`, or a special field path. The only valid special field is `*`, which represents any field. Field paths may be quoted using ` (backtick). The only character that needs to be escaped within a quoted field path is the backtick character itself, escaped using a backslash. Special characters in field paths that must be quoted include: `*`, `.`, ``` (backtick), `[`, `]`, as well as any ascii symbolic characters. Examples: (Note: Comments here are written in markdown syntax, so there is an additional layer of backticks to represent a code block) `\`address.city\`` represents a field named `address.city`, not the map key `city` in the field `address`. `\`*\`` represents a field named `*`, not any field. A special `Field` contains the default indexing settings for all fields. This field's resource name is: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*` Indexes defined on this `Field` will be applied to all fields which do not have their own `Field` index configuration.|

<h2 id="tocS_GoogleFirestoreAdminV1beta2FieldOperationMetadata">GoogleFirestoreAdminV1beta2FieldOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirestoreadminv1beta2fieldoperationmetadata"></a>
<a id="schema_GoogleFirestoreAdminV1beta2FieldOperationMetadata"></a>
<a id="tocSgooglefirestoreadminv1beta2fieldoperationmetadata"></a>
<a id="tocsgooglefirestoreadminv1beta2fieldoperationmetadata"></a>

```json
{
  "bytesProgress": {
    "completedWork": "string",
    "estimatedWork": "string"
  },
  "documentProgress": {
    "completedWork": "string",
    "estimatedWork": "string"
  },
  "endTime": "string",
  "field": "string",
  "indexConfigDeltas": [
    {
      "changeType": "CHANGE_TYPE_UNSPECIFIED",
      "index": {
        "fields": [
          {
            "arrayConfig": "ARRAY_CONFIG_UNSPECIFIED",
            "fieldPath": "string",
            "order": "ORDER_UNSPECIFIED"
          }
        ],
        "name": "string",
        "queryScope": "QUERY_SCOPE_UNSPECIFIED",
        "state": "STATE_UNSPECIFIED"
      }
    }
  ],
  "startTime": "string",
  "state": "OPERATION_STATE_UNSPECIFIED"
}
```

Metadata for google.longrunning.Operation results from FirestoreAdmin.UpdateField.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bytesProgress|[GoogleFirestoreAdminV1beta2Progress](#schemagooglefirestoreadminv1beta2progress)|false|none|The progress, in bytes, of this operation.|
|documentProgress|[GoogleFirestoreAdminV1beta2Progress](#schemagooglefirestoreadminv1beta2progress)|false|none|The progress, in documents, of this operation.|
|endTime|string(google-datetime)|false|none|The time this operation completed. Will be unset if operation still in progress.|
|field|string|false|none|The field resource that this operation is acting on. For example: `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}`|
|indexConfigDeltas|[[GoogleFirestoreAdminV1beta2IndexConfigDelta](#schemagooglefirestoreadminv1beta2indexconfigdelta)]|false|none|A list of IndexConfigDelta, which describe the intent of this operation.|
|startTime|string(google-datetime)|false|none|The time this operation started.|
|state|string|false|none|The state of the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|OPERATION_STATE_UNSPECIFIED|
|state|INITIALIZING|
|state|PROCESSING|
|state|CANCELLING|
|state|FINALIZING|
|state|SUCCESSFUL|
|state|FAILED|
|state|CANCELLED|

<h2 id="tocS_GoogleFirestoreAdminV1beta2ImportDocumentsMetadata">GoogleFirestoreAdminV1beta2ImportDocumentsMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirestoreadminv1beta2importdocumentsmetadata"></a>
<a id="schema_GoogleFirestoreAdminV1beta2ImportDocumentsMetadata"></a>
<a id="tocSgooglefirestoreadminv1beta2importdocumentsmetadata"></a>
<a id="tocsgooglefirestoreadminv1beta2importdocumentsmetadata"></a>

```json
{
  "collectionIds": [
    "string"
  ],
  "endTime": "string",
  "inputUriPrefix": "string",
  "operationState": "OPERATION_STATE_UNSPECIFIED",
  "progressBytes": {
    "completedWork": "string",
    "estimatedWork": "string"
  },
  "progressDocuments": {
    "completedWork": "string",
    "estimatedWork": "string"
  },
  "startTime": "string"
}
```

Metadata for google.longrunning.Operation results from FirestoreAdmin.ImportDocuments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collectionIds|[string]|false|none|Which collection ids are being imported.|
|endTime|string(google-datetime)|false|none|The time this operation completed. Will be unset if operation still in progress.|
|inputUriPrefix|string|false|none|The location of the documents being imported.|
|operationState|string|false|none|The state of the import operation.|
|progressBytes|[GoogleFirestoreAdminV1beta2Progress](#schemagooglefirestoreadminv1beta2progress)|false|none|The progress, in bytes, of this operation.|
|progressDocuments|[GoogleFirestoreAdminV1beta2Progress](#schemagooglefirestoreadminv1beta2progress)|false|none|The progress, in documents, of this operation.|
|startTime|string(google-datetime)|false|none|The time this operation started.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationState|OPERATION_STATE_UNSPECIFIED|
|operationState|INITIALIZING|
|operationState|PROCESSING|
|operationState|CANCELLING|
|operationState|FINALIZING|
|operationState|SUCCESSFUL|
|operationState|FAILED|
|operationState|CANCELLED|

<h2 id="tocS_GoogleFirestoreAdminV1beta2ImportDocumentsRequest">GoogleFirestoreAdminV1beta2ImportDocumentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirestoreadminv1beta2importdocumentsrequest"></a>
<a id="schema_GoogleFirestoreAdminV1beta2ImportDocumentsRequest"></a>
<a id="tocSgooglefirestoreadminv1beta2importdocumentsrequest"></a>
<a id="tocsgooglefirestoreadminv1beta2importdocumentsrequest"></a>

```json
{
  "collectionIds": [
    "string"
  ],
  "inputUriPrefix": "string"
}
```

The request for FirestoreAdmin.ImportDocuments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collectionIds|[string]|false|none|Which collection ids to import. Unspecified means all collections included in the import.|
|inputUriPrefix|string|false|none|Location of the exported files. This must match the output_uri_prefix of an ExportDocumentsResponse from an export that has completed successfully. See: google.firestore.admin.v1beta2.ExportDocumentsResponse.output_uri_prefix.|

<h2 id="tocS_GoogleFirestoreAdminV1beta2Index">GoogleFirestoreAdminV1beta2Index</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirestoreadminv1beta2index"></a>
<a id="schema_GoogleFirestoreAdminV1beta2Index"></a>
<a id="tocSgooglefirestoreadminv1beta2index"></a>
<a id="tocsgooglefirestoreadminv1beta2index"></a>

```json
{
  "fields": [
    {
      "arrayConfig": "ARRAY_CONFIG_UNSPECIFIED",
      "fieldPath": "string",
      "order": "ORDER_UNSPECIFIED"
    }
  ],
  "name": "string",
  "queryScope": "QUERY_SCOPE_UNSPECIFIED",
  "state": "STATE_UNSPECIFIED"
}
```

Cloud Firestore indexes enable simple and complex queries against documents in a database.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|[[GoogleFirestoreAdminV1beta2IndexField](#schemagooglefirestoreadminv1beta2indexfield)]|false|none|The fields supported by this index. For composite indexes, this is always 2 or more fields. The last field entry is always for the field path `__name__`. If, on creation, `__name__` was not specified as the last field, it will be added automatically with the same direction as that of the last field defined. If the final field in a composite index is not directional, the `__name__` will be ordered ASCENDING (unless explicitly specified). For single field indexes, this will always be exactly one entry with a field path equal to the field path of the associated field.|
|name|string|false|none|Output only. A server defined name for this index. The form of this name for composite indexes will be: `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{composite_index_id}` For single field indexes, this field will be empty.|
|queryScope|string|false|none|Indexes with a collection query scope specified allow queries against a collection that is the child of a specific document, specified at query time, and that has the same collection id. Indexes with a collection group query scope specified allow queries against all collections descended from a specific document, specified at query time, and that have the same collection id as this index.|
|state|string|false|none|Output only. The serving state of the index.|

#### Enumerated Values

|Property|Value|
|---|---|
|queryScope|QUERY_SCOPE_UNSPECIFIED|
|queryScope|COLLECTION|
|queryScope|COLLECTION_GROUP|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|READY|
|state|NEEDS_REPAIR|

<h2 id="tocS_GoogleFirestoreAdminV1beta2IndexConfig">GoogleFirestoreAdminV1beta2IndexConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirestoreadminv1beta2indexconfig"></a>
<a id="schema_GoogleFirestoreAdminV1beta2IndexConfig"></a>
<a id="tocSgooglefirestoreadminv1beta2indexconfig"></a>
<a id="tocsgooglefirestoreadminv1beta2indexconfig"></a>

```json
{
  "ancestorField": "string",
  "indexes": [
    {
      "fields": [
        {
          "arrayConfig": "ARRAY_CONFIG_UNSPECIFIED",
          "fieldPath": "string",
          "order": "ORDER_UNSPECIFIED"
        }
      ],
      "name": "string",
      "queryScope": "QUERY_SCOPE_UNSPECIFIED",
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "reverting": true,
  "usesAncestorConfig": true
}
```

The index configuration for this field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ancestorField|string|false|none|Output only. Specifies the resource name of the `Field` from which this field's index configuration is set (when `uses_ancestor_config` is true), or from which it *would* be set if this field had no index configuration (when `uses_ancestor_config` is false).|
|indexes|[[GoogleFirestoreAdminV1beta2Index](#schemagooglefirestoreadminv1beta2index)]|false|none|The indexes supported for this field.|
|reverting|boolean|false|none|Output only When true, the `Field`'s index configuration is in the process of being reverted. Once complete, the index config will transition to the same state as the field specified by `ancestor_field`, at which point `uses_ancestor_config` will be `true` and `reverting` will be `false`.|
|usesAncestorConfig|boolean|false|none|Output only. When true, the `Field`'s index configuration is set from the configuration specified by the `ancestor_field`. When false, the `Field`'s index configuration is defined explicitly.|

<h2 id="tocS_GoogleFirestoreAdminV1beta2IndexConfigDelta">GoogleFirestoreAdminV1beta2IndexConfigDelta</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirestoreadminv1beta2indexconfigdelta"></a>
<a id="schema_GoogleFirestoreAdminV1beta2IndexConfigDelta"></a>
<a id="tocSgooglefirestoreadminv1beta2indexconfigdelta"></a>
<a id="tocsgooglefirestoreadminv1beta2indexconfigdelta"></a>

```json
{
  "changeType": "CHANGE_TYPE_UNSPECIFIED",
  "index": {
    "fields": [
      {
        "arrayConfig": "ARRAY_CONFIG_UNSPECIFIED",
        "fieldPath": "string",
        "order": "ORDER_UNSPECIFIED"
      }
    ],
    "name": "string",
    "queryScope": "QUERY_SCOPE_UNSPECIFIED",
    "state": "STATE_UNSPECIFIED"
  }
}
```

Information about an index configuration change.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changeType|string|false|none|Specifies how the index is changing.|
|index|[GoogleFirestoreAdminV1beta2Index](#schemagooglefirestoreadminv1beta2index)|false|none|The index being changed.|

#### Enumerated Values

|Property|Value|
|---|---|
|changeType|CHANGE_TYPE_UNSPECIFIED|
|changeType|ADD|
|changeType|REMOVE|

<h2 id="tocS_GoogleFirestoreAdminV1beta2IndexField">GoogleFirestoreAdminV1beta2IndexField</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirestoreadminv1beta2indexfield"></a>
<a id="schema_GoogleFirestoreAdminV1beta2IndexField"></a>
<a id="tocSgooglefirestoreadminv1beta2indexfield"></a>
<a id="tocsgooglefirestoreadminv1beta2indexfield"></a>

```json
{
  "arrayConfig": "ARRAY_CONFIG_UNSPECIFIED",
  "fieldPath": "string",
  "order": "ORDER_UNSPECIFIED"
}
```

A field in an index. The field_path describes which field is indexed, the value_mode describes how the field value is indexed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arrayConfig|string|false|none|Indicates that this field supports operations on `array_value`s.|
|fieldPath|string|false|none|Can be __name__. For single field indexes, this must match the name of the field or may be omitted.|
|order|string|false|none|Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=.|

#### Enumerated Values

|Property|Value|
|---|---|
|arrayConfig|ARRAY_CONFIG_UNSPECIFIED|
|arrayConfig|CONTAINS|
|order|ORDER_UNSPECIFIED|
|order|ASCENDING|
|order|DESCENDING|

<h2 id="tocS_GoogleFirestoreAdminV1beta2IndexOperationMetadata">GoogleFirestoreAdminV1beta2IndexOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirestoreadminv1beta2indexoperationmetadata"></a>
<a id="schema_GoogleFirestoreAdminV1beta2IndexOperationMetadata"></a>
<a id="tocSgooglefirestoreadminv1beta2indexoperationmetadata"></a>
<a id="tocsgooglefirestoreadminv1beta2indexoperationmetadata"></a>

```json
{
  "endTime": "string",
  "index": "string",
  "progressBytes": {
    "completedWork": "string",
    "estimatedWork": "string"
  },
  "progressDocuments": {
    "completedWork": "string",
    "estimatedWork": "string"
  },
  "startTime": "string",
  "state": "OPERATION_STATE_UNSPECIFIED"
}
```

Metadata for google.longrunning.Operation results from FirestoreAdmin.CreateIndex.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|The time this operation completed. Will be unset if operation still in progress.|
|index|string|false|none|The index resource that this operation is acting on. For example: `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{index_id}`|
|progressBytes|[GoogleFirestoreAdminV1beta2Progress](#schemagooglefirestoreadminv1beta2progress)|false|none|The progress, in bytes, of this operation.|
|progressDocuments|[GoogleFirestoreAdminV1beta2Progress](#schemagooglefirestoreadminv1beta2progress)|false|none|The progress, in documents, of this operation.|
|startTime|string(google-datetime)|false|none|The time this operation started.|
|state|string|false|none|The state of the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|OPERATION_STATE_UNSPECIFIED|
|state|INITIALIZING|
|state|PROCESSING|
|state|CANCELLING|
|state|FINALIZING|
|state|SUCCESSFUL|
|state|FAILED|
|state|CANCELLED|

<h2 id="tocS_GoogleFirestoreAdminV1beta2ListFieldsResponse">GoogleFirestoreAdminV1beta2ListFieldsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirestoreadminv1beta2listfieldsresponse"></a>
<a id="schema_GoogleFirestoreAdminV1beta2ListFieldsResponse"></a>
<a id="tocSgooglefirestoreadminv1beta2listfieldsresponse"></a>
<a id="tocsgooglefirestoreadminv1beta2listfieldsresponse"></a>

```json
{
  "fields": [
    {
      "indexConfig": {
        "ancestorField": "string",
        "indexes": [
          {
            "fields": [
              {
                "arrayConfig": "ARRAY_CONFIG_UNSPECIFIED",
                "fieldPath": "string",
                "order": "ORDER_UNSPECIFIED"
              }
            ],
            "name": "string",
            "queryScope": "QUERY_SCOPE_UNSPECIFIED",
            "state": "STATE_UNSPECIFIED"
          }
        ],
        "reverting": true,
        "usesAncestorConfig": true
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

The response for FirestoreAdmin.ListFields.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|[[GoogleFirestoreAdminV1beta2Field](#schemagooglefirestoreadminv1beta2field)]|false|none|The requested fields.|
|nextPageToken|string|false|none|A page token that may be used to request another page of results. If blank, this is the last page.|

<h2 id="tocS_GoogleFirestoreAdminV1beta2ListIndexesResponse">GoogleFirestoreAdminV1beta2ListIndexesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirestoreadminv1beta2listindexesresponse"></a>
<a id="schema_GoogleFirestoreAdminV1beta2ListIndexesResponse"></a>
<a id="tocSgooglefirestoreadminv1beta2listindexesresponse"></a>
<a id="tocsgooglefirestoreadminv1beta2listindexesresponse"></a>

```json
{
  "indexes": [
    {
      "fields": [
        {
          "arrayConfig": "ARRAY_CONFIG_UNSPECIFIED",
          "fieldPath": "string",
          "order": "ORDER_UNSPECIFIED"
        }
      ],
      "name": "string",
      "queryScope": "QUERY_SCOPE_UNSPECIFIED",
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

The response for FirestoreAdmin.ListIndexes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|indexes|[[GoogleFirestoreAdminV1beta2Index](#schemagooglefirestoreadminv1beta2index)]|false|none|The requested indexes.|
|nextPageToken|string|false|none|A page token that may be used to request another page of results. If blank, this is the last page.|

<h2 id="tocS_GoogleFirestoreAdminV1beta2Progress">GoogleFirestoreAdminV1beta2Progress</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirestoreadminv1beta2progress"></a>
<a id="schema_GoogleFirestoreAdminV1beta2Progress"></a>
<a id="tocSgooglefirestoreadminv1beta2progress"></a>
<a id="tocsgooglefirestoreadminv1beta2progress"></a>

```json
{
  "completedWork": "string",
  "estimatedWork": "string"
}
```

Describes the progress of the operation. Unit of work is generic and must be interpreted based on where Progress is used.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedWork|string(int64)|false|none|The amount of work completed.|
|estimatedWork|string(int64)|false|none|The amount of work estimated.|

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
|response|object|false|none|The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.|

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
