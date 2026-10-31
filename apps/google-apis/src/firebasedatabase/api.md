<h1 id="firebase-realtime-database-api">Firebase Realtime Database API v1beta</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Firebase Realtime Database API enables programmatic provisioning and management of Realtime Database instances.

Base URLs:

* <a href="https://firebasedatabase.googleapis.com/">https://firebasedatabase.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://firebase.google.com/docs/reference/rest/database/database-management/rest/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/cloud-platform.read-only|View your data across Google Cloud services and see the email address of your Google Account|
|https://www.googleapis.com/auth/firebase|View and administer all your Firebase data and settings|
|https://www.googleapis.com/auth/firebase.readonly|View all your Firebase data and settings|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/cloud-platform.read-only|View your data across Google Cloud services and see the email address of your Google Account|
|https://www.googleapis.com/auth/firebase|View and administer all your Firebase data and settings|
|https://www.googleapis.com/auth/firebase.readonly|View all your Firebase data and settings|

<h1 id="firebase-realtime-database-api-projects">projects</h1>

## firebasedatabase.projects.locations.instances.get

<a id="opIdfirebasedatabase.projects.locations.instances.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{name}`

Gets the DatabaseInstance identified by the specified resource name.

<h3 id="firebasedatabaseprojectslocationsinstancesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The fully qualified resource name of the database instance, in the form: `projects/{project-number}/locations/{location-id}/instances/{database-id}`. `database-id` is a globally unique identifier across all parent collections. For convenience, this method allows you to supply `-` as a wildcard character in place of specific collections under `projects` and `locations`. The resulting wildcarding form of the method is: `projects/-/locations/-/instances/{database-id}`.|
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
  "databaseUrl": "string",
  "name": "string",
  "project": "string",
  "state": "LIFECYCLE_STATE_UNSPECIFIED",
  "type": "DATABASE_INSTANCE_TYPE_UNSPECIFIED"
}
```

<h3 id="firebasedatabaseprojectslocationsinstancesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DatabaseInstance](#schemadatabaseinstance)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase.readonly )
</aside>

## firebasedatabase.projects.locations.instances.delete

<a id="opIdfirebasedatabase.projects.locations.instances.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta/{name}`

Marks a DatabaseInstance to be deleted. The DatabaseInstance will be set to the DELETED state for 20 days, and will be purged within 30 days. The default database cannot be deleted. IDs for deleted database instances may never be recovered or re-used. The Database may only be deleted if it is already in a DISABLED state.

<h3 id="firebasedatabaseprojectslocationsinstancesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The fully qualified resource name of the database instance, in the form: `projects/{project-number}/locations/{location-id}/instances/{database-id}`|
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
  "databaseUrl": "string",
  "name": "string",
  "project": "string",
  "state": "LIFECYCLE_STATE_UNSPECIFIED",
  "type": "DATABASE_INSTANCE_TYPE_UNSPECIFIED"
}
```

<h3 id="firebasedatabaseprojectslocationsinstancesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DatabaseInstance](#schemadatabaseinstance)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebasedatabase.projects.locations.instances.disable

<a id="opIdfirebasedatabase.projects.locations.instances.disable"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string:disable \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta/{name}:disable`

Disables a DatabaseInstance. The database can be re-enabled later using ReenableDatabaseInstance. When a database is disabled, all reads and writes are denied, including view access in the Firebase console.

> Body parameter

```json
{}
```

<h3 id="firebasedatabaseprojectslocationsinstancesdisable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The fully qualified resource name of the database instance, in the form: `projects/{project-number}/locations/{location-id}/instances/{database-id}`|
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
|body|body|[DisableDatabaseInstanceRequest](#schemadisabledatabaseinstancerequest)|false|none|

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
  "databaseUrl": "string",
  "name": "string",
  "project": "string",
  "state": "LIFECYCLE_STATE_UNSPECIFIED",
  "type": "DATABASE_INSTANCE_TYPE_UNSPECIFIED"
}
```

<h3 id="firebasedatabaseprojectslocationsinstancesdisable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DatabaseInstance](#schemadatabaseinstance)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebasedatabase.projects.locations.instances.reenable

<a id="opIdfirebasedatabase.projects.locations.instances.reenable"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string:reenable \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta/{name}:reenable`

Enables a DatabaseInstance. The database must have been disabled previously using DisableDatabaseInstance. The state of a successfully reenabled DatabaseInstance is ACTIVE.

> Body parameter

```json
{}
```

<h3 id="firebasedatabaseprojectslocationsinstancesreenable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The fully qualified resource name of the database instance, in the form: `projects/{project-number}/locations/{location-id}/instances/{database-id}`|
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
|body|body|[ReenableDatabaseInstanceRequest](#schemareenabledatabaseinstancerequest)|false|none|

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
  "databaseUrl": "string",
  "name": "string",
  "project": "string",
  "state": "LIFECYCLE_STATE_UNSPECIFIED",
  "type": "DATABASE_INSTANCE_TYPE_UNSPECIFIED"
}
```

<h3 id="firebasedatabaseprojectslocationsinstancesreenable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DatabaseInstance](#schemadatabaseinstance)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebasedatabase.projects.locations.instances.undelete

<a id="opIdfirebasedatabase.projects.locations.instances.undelete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string:undelete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta/{name}:undelete`

Restores a DatabaseInstance that was previously marked to be deleted. After the delete method is used, DatabaseInstances are set to the DELETED state for 20 days, and will be purged within 30 days. Databases in the DELETED state can be undeleted without losing any data. This method may only be used on a DatabaseInstance in the DELETED state. Purged DatabaseInstances may not be recovered.

> Body parameter

```json
{}
```

<h3 id="firebasedatabaseprojectslocationsinstancesundelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The fully qualified resource name of the database instance, in the form: `projects/{project-number}/locations/{location-id}/instances/{database-id}`|
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
|body|body|[UndeleteDatabaseInstanceRequest](#schemaundeletedatabaseinstancerequest)|false|none|

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
  "databaseUrl": "string",
  "name": "string",
  "project": "string",
  "state": "LIFECYCLE_STATE_UNSPECIFIED",
  "type": "DATABASE_INSTANCE_TYPE_UNSPECIFIED"
}
```

<h3 id="firebasedatabaseprojectslocationsinstancesundelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DatabaseInstance](#schemadatabaseinstance)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebasedatabase.projects.locations.instances.list

<a id="opIdfirebasedatabase.projects.locations.instances.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/instances \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{parent}/instances`

Lists each DatabaseInstance associated with the specified parent project. The list items are returned in no particular order, but will be a consistent view of the database instances when additional requests are made with a `pageToken`. The resulting list contains instances in any STATE. The list results may be stale by a few seconds. Use GetDatabaseInstance for consistent reads.

<h3 id="firebasedatabaseprojectslocationsinstanceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent project for which to list database instances, in the form: `projects/{project-number}/locations/{location-id}` To list across all locations, use a parent in the form: `projects/{project-number}/locations/-`|
|pageSize|query|integer|false|The maximum number of database instances to return in the response. The server may return fewer than this at its discretion. If no value is specified (or too large a value is specified), then the server will impose its own limit.|
|pageToken|query|string|false|Token returned from a previous call to `ListDatabaseInstances` indicating where in the set of database instances to resume listing.|
|showDeleted|query|boolean|false|Indicate that DatabaseInstances in the `DELETED` state should also be returned.|
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
  "instances": [
    {
      "databaseUrl": "string",
      "name": "string",
      "project": "string",
      "state": "LIFECYCLE_STATE_UNSPECIFIED",
      "type": "DATABASE_INSTANCE_TYPE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="firebasedatabaseprojectslocationsinstanceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListDatabaseInstancesResponse](#schemalistdatabaseinstancesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase.readonly )
</aside>

## firebasedatabase.projects.locations.instances.create

<a id="opIdfirebasedatabase.projects.locations.instances.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/instances \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "type": "DATABASE_INSTANCE_TYPE_UNSPECIFIED"
  }'
```

`POST /v1beta/{parent}/instances`

Requests that a new DatabaseInstance be created. The state of a successfully created DatabaseInstance is ACTIVE. Only available for projects on the Blaze plan. Projects can be upgraded using the Cloud Billing API https://cloud.google.com/billing/reference/rest/v1/projects/updateBillingInfo. Note that it might take a few minutes for billing enablement state to propagate to Firebase systems.

> Body parameter

```json
{
  "name": "string",
  "type": "DATABASE_INSTANCE_TYPE_UNSPECIFIED"
}
```

<h3 id="firebasedatabaseprojectslocationsinstancescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent project for which to create a database instance, in the form: `projects/{project-number}/locations/{location-id}`.|
|databaseId|query|string|false|The globally unique identifier of the database instance.|
|validateOnly|query|boolean|false|When set to true, the request will be validated but not submitted.|
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
|body|body|[DatabaseInstance](#schemadatabaseinstance)|false|none|
|» name|body|string|false|The fully qualified resource name of the database instance, in the form: `projects/{project-number}/locations/{location-id}/instances/{database-id}`.|
|» type|body|string|false|Immutable. The database instance type. On creation only USER_DATABASE is allowed, which is also the default when omitted.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» type|DATABASE_INSTANCE_TYPE_UNSPECIFIED|
|» type|DEFAULT_DATABASE|
|» type|USER_DATABASE|

> Example responses

> 200 Response

```json
{
  "databaseUrl": "string",
  "name": "string",
  "project": "string",
  "state": "LIFECYCLE_STATE_UNSPECIFIED",
  "type": "DATABASE_INSTANCE_TYPE_UNSPECIFIED"
}
```

<h3 id="firebasedatabaseprojectslocationsinstancescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DatabaseInstance](#schemadatabaseinstance)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

# Schemas

<h2 id="tocS_DatabaseInstance">DatabaseInstance</h2>
<!-- backwards compatibility -->
<a id="schemadatabaseinstance"></a>
<a id="schema_DatabaseInstance"></a>
<a id="tocSdatabaseinstance"></a>
<a id="tocsdatabaseinstance"></a>

```json
{
  "databaseUrl": "string",
  "name": "string",
  "project": "string",
  "state": "LIFECYCLE_STATE_UNSPECIFIED",
  "type": "DATABASE_INSTANCE_TYPE_UNSPECIFIED"
}
```

Representation of a Realtime Database instance. Details on interacting with contents of a DatabaseInstance can be found at: https://firebase.google.com/docs/database/rest/start.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|databaseUrl|string|false|read-only|Output only. Output Only. The globally unique hostname of the database.|
|name|string|false|none|The fully qualified resource name of the database instance, in the form: `projects/{project-number}/locations/{location-id}/instances/{database-id}`.|
|project|string|false|read-only|Output only. The resource name of the project this instance belongs to. For example: `projects/{project-number}`.|
|state|string|false|read-only|Output only. The database's lifecycle state. Read-only.|
|type|string|false|none|Immutable. The database instance type. On creation only USER_DATABASE is allowed, which is also the default when omitted.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|LIFECYCLE_STATE_UNSPECIFIED|
|state|ACTIVE|
|state|DISABLED|
|state|DELETED|
|type|DATABASE_INSTANCE_TYPE_UNSPECIFIED|
|type|DEFAULT_DATABASE|
|type|USER_DATABASE|

<h2 id="tocS_DisableDatabaseInstanceRequest">DisableDatabaseInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisabledatabaseinstancerequest"></a>
<a id="schema_DisableDatabaseInstanceRequest"></a>
<a id="tocSdisabledatabaseinstancerequest"></a>
<a id="tocsdisabledatabaseinstancerequest"></a>

```json
{}
```

The request sent to the DisableDatabaseInstance method.

<h2 id="tocS_ListDatabaseInstancesResponse">ListDatabaseInstancesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdatabaseinstancesresponse"></a>
<a id="schema_ListDatabaseInstancesResponse"></a>
<a id="tocSlistdatabaseinstancesresponse"></a>
<a id="tocslistdatabaseinstancesresponse"></a>

```json
{
  "instances": [
    {
      "databaseUrl": "string",
      "name": "string",
      "project": "string",
      "state": "LIFECYCLE_STATE_UNSPECIFIED",
      "type": "DATABASE_INSTANCE_TYPE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

The response from the ListDatabaseInstances method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instances|[[DatabaseInstance](#schemadatabaseinstance)]|false|none|List of each DatabaseInstance that is in the parent Firebase project.|
|nextPageToken|string|false|none|If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results. This token can be used in a subsequent call to `ListDatabaseInstances` to find the next group of database instances. Page tokens are short-lived and should not be persisted.|

<h2 id="tocS_ReenableDatabaseInstanceRequest">ReenableDatabaseInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemareenabledatabaseinstancerequest"></a>
<a id="schema_ReenableDatabaseInstanceRequest"></a>
<a id="tocSreenabledatabaseinstancerequest"></a>
<a id="tocsreenabledatabaseinstancerequest"></a>

```json
{}
```

The request sent to the ReenableDatabaseInstance method.

<h2 id="tocS_UndeleteDatabaseInstanceRequest">UndeleteDatabaseInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaundeletedatabaseinstancerequest"></a>
<a id="schema_UndeleteDatabaseInstanceRequest"></a>
<a id="tocSundeletedatabaseinstancerequest"></a>
<a id="tocsundeletedatabaseinstancerequest"></a>

```json
{}
```

The request sent to UndeleteDatabaseInstance method.
