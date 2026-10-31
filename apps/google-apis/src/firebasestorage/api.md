<h1 id="cloud-storage-for-firebase-api">Cloud Storage for Firebase API v1beta</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Cloud Storage for Firebase API enables programmatic management of Cloud Storage buckets for use in Firebase projects

Base URLs:

* <a href="https://firebasestorage.googleapis.com/">https://firebasestorage.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://firebase.google.com/docs/storage">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/firebase|View and administer all your Firebase data and settings|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/firebase|View and administer all your Firebase data and settings|

<h1 id="cloud-storage-for-firebase-api-projects">projects</h1>

## firebasestorage.projects.buckets.addFirebase

<a id="opIdfirebasestorage.projects.buckets.addFirebase"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string:addFirebase \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta/{bucket}:addFirebase`

Links a Google Cloud Storage bucket to a Firebase project.

> Body parameter

```json
{}
```

<h3 id="firebasestorageprojectsbucketsaddfirebase-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket|path|string|true|Required. Resource name of the bucket, mirrors the ID of the underlying Google Cloud Storage bucket, `projects/{project_number}/buckets/{bucket_id}`.|
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
|body|body|[AddFirebaseRequest](#schemaaddfirebaserequest)|false|none|

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
  "name": "string"
}
```

<h3 id="firebasestorageprojectsbucketsaddfirebase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Bucket](#schemabucket)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebasestorage.projects.buckets.removeFirebase

<a id="opIdfirebasestorage.projects.buckets.removeFirebase"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string:removeFirebase \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta/{bucket}:removeFirebase`

Unlinks a linked Google Cloud Storage bucket from a Firebase project.

> Body parameter

```json
{}
```

<h3 id="firebasestorageprojectsbucketsremovefirebase-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket|path|string|true|Required. Resource name of the bucket, mirrors the ID of the underlying Google Cloud Storage bucket, `projects/{project_number}/buckets/{bucket_id}`.|
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
|body|body|[RemoveFirebaseRequest](#schemaremovefirebaserequest)|false|none|

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

<h3 id="firebasestorageprojectsbucketsremovefirebase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebasestorage.projects.buckets.get

<a id="opIdfirebasestorage.projects.buckets.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{name}`

Gets a single linked storage bucket.

<h3 id="firebasestorageprojectsbucketsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Resource name of the bucket, mirrors the ID of the underlying Google Cloud Storage bucket, `projects/{project_number}/buckets/{bucket_id}`.|
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
  "name": "string"
}
```

<h3 id="firebasestorageprojectsbucketsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Bucket](#schemabucket)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebasestorage.projects.buckets.list

<a id="opIdfirebasestorage.projects.buckets.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/buckets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{parent}/buckets`

Lists the linked storage buckets for a project.

<h3 id="firebasestorageprojectsbucketslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Resource name of the parent Firebase project, `projects/{project_number}`.|
|pageSize|query|integer|false|The maximum number of buckets to return. If not set, the server will use a reasonable default.|
|pageToken|query|string|false|A page token, received from a previous `ListBuckets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBuckets` must match the call that provided the page token.|
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
  "buckets": [
    {
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="firebasestorageprojectsbucketslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListBucketsResponse](#schemalistbucketsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

# Schemas

<h2 id="tocS_AddFirebaseRequest">AddFirebaseRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddfirebaserequest"></a>
<a id="schema_AddFirebaseRequest"></a>
<a id="tocSaddfirebaserequest"></a>
<a id="tocsaddfirebaserequest"></a>

```json
{}
```

The request used to link a Google Cloud Storage bucket to a Firebase project.

<h2 id="tocS_Bucket">Bucket</h2>
<!-- backwards compatibility -->
<a id="schemabucket"></a>
<a id="schema_Bucket"></a>
<a id="tocSbucket"></a>
<a id="tocsbucket"></a>

```json
{
  "name": "string"
}
```

A storage bucket and its relation to a parent Firebase project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Resource name of the bucket.|

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

<h2 id="tocS_GoogleFirebaseStorageControlplaneV1alphaMigrateLocationDestructivelyMetadata">GoogleFirebaseStorageControlplaneV1alphaMigrateLocationDestructivelyMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebasestoragecontrolplanev1alphamigratelocationdestructivelymetadata"></a>
<a id="schema_GoogleFirebaseStorageControlplaneV1alphaMigrateLocationDestructivelyMetadata"></a>
<a id="tocSgooglefirebasestoragecontrolplanev1alphamigratelocationdestructivelymetadata"></a>
<a id="tocsgooglefirebasestoragecontrolplanev1alphamigratelocationdestructivelymetadata"></a>

```json
{
  "createTime": "string",
  "lastUpdateTime": "string",
  "state": "STATE_UNSPECIFIED"
}
```

Metadata for MigrateLocationDestructively LRO.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|The time the LRO was created.|
|lastUpdateTime|string(google-datetime)|false|none|The time the LRO was last updated.|
|state|string|false|none|The current state of the migration.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|PENDING|
|state|CREATING_TEMP_BUCKET|
|state|TRANSFERRING_TO_TEMP|
|state|DELETING_SOURCE_BUCKET|
|state|CREATING_DESTINATION_BUCKET|
|state|TRANSFERRING_TO_DESTINATION|
|state|DELETING_TEMP_BUCKET|
|state|SUCCEEDED|
|state|FAILED|
|state|ROLLING_BACK|
|state|ROLLED_BACK|

<h2 id="tocS_GoogleFirebaseStorageControlplaneV1betaMigrateLocationDestructivelyMetadata">GoogleFirebaseStorageControlplaneV1betaMigrateLocationDestructivelyMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebasestoragecontrolplanev1betamigratelocationdestructivelymetadata"></a>
<a id="schema_GoogleFirebaseStorageControlplaneV1betaMigrateLocationDestructivelyMetadata"></a>
<a id="tocSgooglefirebasestoragecontrolplanev1betamigratelocationdestructivelymetadata"></a>
<a id="tocsgooglefirebasestoragecontrolplanev1betamigratelocationdestructivelymetadata"></a>

```json
{
  "createTime": "string",
  "lastUpdateTime": "string",
  "state": "STATE_UNSPECIFIED"
}
```

Metadata for MigrateLocationDestructively LRO.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|The time the LRO was created.|
|lastUpdateTime|string(google-datetime)|false|none|The time the LRO was last updated.|
|state|string|false|none|The current state of the migration.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|PENDING|
|state|CREATING_TEMP_BUCKET|
|state|TRANSFERRING_TO_TEMP|
|state|DELETING_SOURCE_BUCKET|
|state|CREATING_DESTINATION_BUCKET|
|state|TRANSFERRING_TO_DESTINATION|
|state|DELETING_TEMP_BUCKET|
|state|SUCCEEDED|
|state|FAILED|
|state|ROLLING_BACK|
|state|ROLLED_BACK|

<h2 id="tocS_ListBucketsResponse">ListBucketsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistbucketsresponse"></a>
<a id="schema_ListBucketsResponse"></a>
<a id="tocSlistbucketsresponse"></a>
<a id="tocslistbucketsresponse"></a>

```json
{
  "buckets": [
    {
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

The response returned by `ListBuckets`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buckets|[[Bucket](#schemabucket)]|false|none|The list of linked buckets.|
|nextPageToken|string|false|none|A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|

<h2 id="tocS_RemoveFirebaseRequest">RemoveFirebaseRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremovefirebaserequest"></a>
<a id="schema_RemoveFirebaseRequest"></a>
<a id="tocSremovefirebaserequest"></a>
<a id="tocsremovefirebaserequest"></a>

```json
{}
```

The request used to unlink a Google Cloud Storage bucket from a Firebase project.
