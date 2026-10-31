<h1 id="firebase-management-api">Firebase Management API v1beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Firebase Management API enables programmatic setup and management of Firebase projects, including a project's Firebase resources and Firebase apps.

Base URLs:

* <a href="https://firebase.googleapis.com/">https://firebase.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://firebase.google.com">External documentation</a>

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

<h1 id="firebase-management-api-availableprojects">availableProjects</h1>

## firebase.availableProjects.list

<a id="opIdfirebase.availableProjects.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/availableProjects \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/availableProjects`

Lists each [Google Cloud Platform (GCP) `Project`] (https://cloud.google.com/resource-manager/reference/rest/v1/projects) that can have Firebase resources added to it. A Project will only be listed if: - The caller has sufficient [Google IAM](https://cloud.google.com/iam) permissions to call AddFirebase. - The Project is not already a FirebaseProject. - The Project is not in an Organization which has policies that prevent Firebase resources from being added. 

<h3 id="firebaseavailableprojectslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageSize|query|integer|false|The maximum number of Projects to return in the response. The server may return fewer than this value at its discretion. If no value is specified (or too large a value is specified), the server will impose its own limit. This value cannot be negative.|
|pageToken|query|string|false|Token returned from a previous call to `ListAvailableProjects` indicating where in the set of Projects to resume listing.|
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
  "nextPageToken": "string",
  "projectInfo": [
    {
      "displayName": "string",
      "locationId": "string",
      "project": "string"
    }
  ]
}
```

<h3 id="firebaseavailableprojectslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListAvailableProjectsResponse](#schemalistavailableprojectsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase.readonly )
</aside>

<h1 id="firebase-management-api-projects">projects</h1>

## firebase.projects.list

<a id="opIdfirebase.projects.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/projects \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/projects`

Lists each FirebaseProject accessible to the caller. The elements are returned in no particular order, but they will be a consistent view of the Projects when additional requests are made with a `pageToken`. This method is eventually consistent with Project mutations, which means newly provisioned Projects and recent modifications to existing Projects might not be reflected in the set of Projects. The list will include only ACTIVE Projects. Use GetFirebaseProject for consistent reads as well as for additional Project details.

<h3 id="firebaseprojectslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageSize|query|integer|false|The maximum number of Projects to return in the response. The server may return fewer than this at its discretion. If no value is specified (or too large a value is specified), the server will impose its own limit. This value cannot be negative.|
|pageToken|query|string|false|Token returned from a previous call to `ListFirebaseProjects` indicating where in the set of Projects to resume listing.|
|showDeleted|query|boolean|false|Optional. Controls whether Projects in the DELETED state should be returned in the response. If not specified, only `ACTIVE` Projects will be returned.|
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
  "nextPageToken": "string",
  "results": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "displayName": "string",
      "etag": "string",
      "name": "string",
      "projectId": "string",
      "projectNumber": "string",
      "resources": {
        "hostingSite": "string",
        "locationId": "string",
        "realtimeDatabaseInstance": "string",
        "storageBucket": "string"
      },
      "state": "STATE_UNSPECIFIED"
    }
  ]
}
```

<h3 id="firebaseprojectslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListFirebaseProjectsResponse](#schemalistfirebaseprojectsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase.readonly )
</aside>

## firebase.projects.webApps.getConfig

<a id="opIdfirebase.projects.webApps.getConfig"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}`

Gets the configuration artifact associated with the specified WebApp.

<h3 id="firebaseprojectswebappsgetconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource name of the WebApp configuration to download, in the format: projects/PROJECT_IDENTIFIER/webApps/APP_ID/config Since an APP_ID is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: projects/-/webApps/APP_ID Refer to the `WebApp` [`name`](../projects.webApps#WebApp.FIELDS.name) field for details about PROJECT_IDENTIFIER and APP_ID values.|
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
  "apiKey": "string",
  "appId": "string",
  "authDomain": "string",
  "databaseURL": "string",
  "locationId": "string",
  "measurementId": "string",
  "messagingSenderId": "string",
  "projectId": "string",
  "storageBucket": "string"
}
```

<h3 id="firebaseprojectswebappsgetconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[WebAppConfig](#schemawebappconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase.readonly )
</aside>

## firebase.projects.androidApps.sha.delete

<a id="opIdfirebase.projects.androidApps.sha.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta1/{name}`

Removes a ShaCertificate from the specified AndroidApp.

<h3 id="firebaseprojectsandroidappsshadelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource name of the ShaCertificate to remove from the parent AndroidApp, in the format: projects/PROJECT_IDENTIFIER/androidApps/APP_ID /sha/SHA_HASH Refer to the `ShaCertificate` [`name`](../projects.androidApps.sha#ShaCertificate.FIELDS.name) field for details about PROJECT_IDENTIFIER, APP_ID, and SHA_HASH values. You can obtain the full resource name of the `ShaCertificate` from the response of [`ListShaCertificates`](../projects.androidApps.sha/list) or the original [`CreateShaCertificate`](../projects.androidApps.sha/create).|
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

<h3 id="firebaseprojectsandroidappsshadelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebase.projects.webApps.patch

<a id="opIdfirebase.projects.webApps.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "apiKeyId": "string",
    "appUrls": [
      "string"
    ],
    "displayName": "string",
    "etag": "string",
    "name": "string"
  }'
```

`PATCH /v1beta1/{name}`

Updates the attributes of the specified WebApp.

> Body parameter

```json
{
  "apiKeyId": "string",
  "appUrls": [
    "string"
  ],
  "displayName": "string",
  "etag": "string",
  "name": "string"
}
```

<h3 id="firebaseprojectswebappspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource name of the WebApp, in the format: projects/PROJECT_IDENTIFIER /webApps/APP_ID * PROJECT_IDENTIFIER: the parent Project's [`ProjectNumber`](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`. * APP_ID: the globally unique, Firebase-assigned identifier for the App (see [`appId`](../projects.webApps#WebApp.FIELDS.app_id)).|
|updateMask|query|string|false|Specifies which fields of the WebApp to update. Note that the following fields are immutable: `name`, `app_id`, and `project_id`. To update `state`, use any of the following endpoints: RemoveWebApp or UndeleteWebApp.|
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
|body|body|[WebApp](#schemawebapp)|false|none|
|» apiKeyId|body|string|false|The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the `WebApp`. Be aware that this value is the UID of the API key, _not_ the [`keyString`](https://cloud.google.com/api-keys/docs/reference/rest/v2/projects.locations.keys#Key.FIELDS.key_string) of the API key. The `keyString` is the value that can be found in the App's [configuration artifact](../../rest/v1beta1/projects.webApps/getConfig). If `api_key_id` is not set in requests to [`webApps.Create`](../../rest/v1beta1/projects.webApps/create), then Firebase automatically associates an `api_key_id` with the `WebApp`. This auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned. In patch requests, `api_key_id` cannot be set to an empty value, and the new UID must have no restrictions or only have restrictions that are valid for the associated `WebApp`. We recommend using the [Google Cloud Console](https://console.cloud.google.com/apis/credentials) to manage API keys.|
|» appUrls|body|[string]|false|The URLs where the `WebApp` is hosted.|
|» displayName|body|string|false|The user-assigned display name for the `WebApp`.|
|» etag|body|string|false|This checksum is computed by the server based on the value of other fields, and it may be sent with update requests to ensure the client has an up-to-date value before proceeding. Learn more about `etag` in Google's [AIP-154 standard](https://google.aip.dev/154#declarative-friendly-resources). This etag is strongly validated.|
|» name|body|string|false|The resource name of the WebApp, in the format: projects/PROJECT_IDENTIFIER /webApps/APP_ID * PROJECT_IDENTIFIER: the parent Project's [`ProjectNumber`](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`. * APP_ID: the globally unique, Firebase-assigned identifier for the App (see [`appId`](../projects.webApps#WebApp.FIELDS.app_id)).|

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
  "apiKeyId": "string",
  "appId": "string",
  "appUrls": [
    "string"
  ],
  "displayName": "string",
  "etag": "string",
  "expireTime": "string",
  "name": "string",
  "projectId": "string",
  "state": "STATE_UNSPECIFIED",
  "webId": "string"
}
```

<h3 id="firebaseprojectswebappspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[WebApp](#schemawebapp)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebase.projects.webApps.remove

<a id="opIdfirebase.projects.webApps.remove"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:remove \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "allowMissing": true,
    "etag": "string",
    "immediate": true,
    "validateOnly": true
  }'
```

`POST /v1beta1/{name}:remove`

Removes the specified WebApp from the FirebaseProject.

> Body parameter

```json
{
  "allowMissing": true,
  "etag": "string",
  "immediate": true,
  "validateOnly": true
}
```

<h3 id="firebaseprojectswebappsremove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the WebApp, in the format: projects/ PROJECT_IDENTIFIER/webApps/APP_ID Since an APP_ID is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: projects/-/webApps/APP_ID Refer to the WebApp [name](../projects.webApps#WebApp.FIELDS.name) field for details about PROJECT_IDENTIFIER and APP_ID values.|
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
|body|body|[RemoveWebAppRequest](#schemaremovewebapprequest)|false|none|
|» allowMissing|body|boolean|false|If set to true, and the App is not found, the request will succeed but no action will be taken on the server.|
|» etag|body|string|false|Checksum provided in the WebApp resource. If provided, this checksum ensures that the client has an up-to-date value before proceeding.|
|» immediate|body|boolean|false|Determines whether to _immediately_ delete the WebApp. If set to true, the App is immediately deleted from the Project and cannot be restored to the Project. If not set, defaults to false, which means the App will be set to expire in 30 days. Within the 30 days, the App may be restored to the Project using UndeleteWebApp|
|» validateOnly|body|boolean|false|If set to true, the request is only validated. The App will _not_ be removed.|

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

<h3 id="firebaseprojectswebappsremove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebase.projects.webApps.undelete

<a id="opIdfirebase.projects.webApps.undelete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:undelete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "etag": "string",
    "validateOnly": true
  }'
```

`POST /v1beta1/{name}:undelete`

Restores the specified WebApp to the FirebaseProject.

> Body parameter

```json
{
  "etag": "string",
  "validateOnly": true
}
```

<h3 id="firebaseprojectswebappsundelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the WebApp, in the format: projects/ PROJECT_IDENTIFIER/webApps/APP_ID Since an APP_ID is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: projects/-/webApps/APP_ID Refer to the WebApp [name](../projects.webApps#WebApp.FIELDS.name) field for details about PROJECT_IDENTIFIER and APP_ID values.|
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
|body|body|[UndeleteWebAppRequest](#schemaundeletewebapprequest)|false|none|
|» etag|body|string|false|Checksum provided in the WebApp resource. If provided, this checksum ensures that the client has an up-to-date value before proceeding.|
|» validateOnly|body|boolean|false|If set to true, the request is only validated. The App will _not_ be undeleted.|

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

<h3 id="firebaseprojectswebappsundelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebase.projects.androidApps.list

<a id="opIdfirebase.projects.androidApps.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/androidApps \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/androidApps`

Lists each AndroidApp associated with the specified FirebaseProject. The elements are returned in no particular order, but will be a consistent view of the Apps when additional requests are made with a `pageToken`.

<h3 id="firebaseprojectsandroidappslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The resource name of the parent FirebaseProject for which to list each associated AndroidApp, in the format: projects/PROJECT_IDENTIFIER /androidApps Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.|
|pageSize|query|integer|false|The maximum number of Apps to return in the response. The server may return fewer than this at its discretion. If no value is specified (or too large a value is specified), then the server will impose its own limit.|
|pageToken|query|string|false|Token returned from a previous call to `ListAndroidApps` indicating where in the set of Apps to resume listing.|
|showDeleted|query|boolean|false|Controls whether Apps in the DELETED state should be returned in the response. If not specified, only `ACTIVE` Apps will be returned.|
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
  "apps": [
    {
      "apiKeyId": "string",
      "appId": "string",
      "displayName": "string",
      "etag": "string",
      "expireTime": "string",
      "name": "string",
      "packageName": "string",
      "projectId": "string",
      "sha1Hashes": [
        "string"
      ],
      "sha256Hashes": [
        "string"
      ],
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="firebaseprojectsandroidappslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListAndroidAppsResponse](#schemalistandroidappsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase.readonly )
</aside>

## firebase.projects.androidApps.create

<a id="opIdfirebase.projects.androidApps.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/androidApps \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "apiKeyId": "string",
    "displayName": "string",
    "etag": "string",
    "name": "string",
    "packageName": "string",
    "sha1Hashes": [
      "string"
    ],
    "sha256Hashes": [
      "string"
    ]
  }'
```

`POST /v1beta1/{parent}/androidApps`

Requests the creation of a new AndroidApp in the specified FirebaseProject. The result of this call is an `Operation` which can be used to track the provisioning process. The `Operation` is automatically deleted after completion, so there is no need to call `DeleteOperation`.

> Body parameter

```json
{
  "apiKeyId": "string",
  "displayName": "string",
  "etag": "string",
  "name": "string",
  "packageName": "string",
  "sha1Hashes": [
    "string"
  ],
  "sha256Hashes": [
    "string"
  ]
}
```

<h3 id="firebaseprojectsandroidappscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The resource name of the parent FirebaseProject in which to create an AndroidApp, in the format: projects/PROJECT_IDENTIFIER/androidApps Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.|
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
|body|body|[AndroidApp](#schemaandroidapp)|false|none|
|» apiKeyId|body|string|false|The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the `AndroidApp`. Be aware that this value is the UID of the API key, _not_ the [`keyString`](https://cloud.google.com/api-keys/docs/reference/rest/v2/projects.locations.keys#Key.FIELDS.key_string) of the API key. The `keyString` is the value that can be found in the App's [configuration artifact](../../rest/v1beta1/projects.androidApps/getConfig). If `api_key_id` is not set in requests to [`androidApps.Create`](../../rest/v1beta1/projects.androidApps/create), then Firebase automatically associates an `api_key_id` with the `AndroidApp`. This auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned. In patch requests, `api_key_id` cannot be set to an empty value, and the new UID must have no restrictions or only have restrictions that are valid for the associated `AndroidApp`. We recommend using the [Google Cloud Console](https://console.cloud.google.com/apis/credentials) to manage API keys.|
|» displayName|body|string|false|The user-assigned display name for the `AndroidApp`.|
|» etag|body|string|false|This checksum is computed by the server based on the value of other fields, and it may be sent with update requests to ensure the client has an up-to-date value before proceeding. Learn more about `etag` in Google's [AIP-154 standard](https://google.aip.dev/154#declarative-friendly-resources). This etag is strongly validated.|
|» name|body|string|false|The resource name of the AndroidApp, in the format: projects/ PROJECT_IDENTIFIER/androidApps/APP_ID * PROJECT_IDENTIFIER: the parent Project's [`ProjectNumber`](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`. * APP_ID: the globally unique, Firebase-assigned identifier for the App (see [`appId`](../projects.androidApps#AndroidApp.FIELDS.app_id)).|
|» packageName|body|string|false|Immutable. The canonical package name of the Android app as would appear in the Google Play Developer Console.|
|» sha1Hashes|body|[string]|false|The SHA1 certificate hashes for the AndroidApp.|
|» sha256Hashes|body|[string]|false|The SHA256 certificate hashes for the AndroidApp.|

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

<h3 id="firebaseprojectsandroidappscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebase.projects.availableLocations.list

<a id="opIdfirebase.projects.availableLocations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/availableLocations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/availableLocations`

**DEPRECATED.** _Instead, use the applicable resource-specific REST API (or associated documentation, as needed) to determine valid locations for each resource used in your Project._ Lists the valid Google Cloud Platform (GCP) resource locations for the specified Project (including a FirebaseProject). One of these locations can be selected as the Project's [_default_ GCP resource location](https://firebase.google.com/docs/projects/locations), which is the geographical location where the Project's resources, such as Cloud Firestore, will be provisioned by default. However, if the default GCP resource location has already been set for the Project, then this setting cannot be changed. This call checks for any possible [location restrictions](https://cloud.google.com/resource-manager/docs/organization-policy/defining-locations) for the specified Project and, thus, might return a subset of all possible GCP resource locations. To list all GCP resource locations (regardless of any restrictions), call the endpoint without specifying a unique project identifier (that is, `/v1beta1/{parent=projects/-}/listAvailableLocations`). To call `ListAvailableLocations` with a specified project, a member must be at minimum a Viewer of the Project. Calls without a specified project do not require any specific project permissions.

<h3 id="firebaseprojectsavailablelocationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The FirebaseProject for which to list GCP resource locations, in the format: projects/PROJECT_IDENTIFIER Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values. If no unique project identifier is specified (that is, `projects/-`), the returned list does not take into account org-specific or project-specific location restrictions.|
|pageSize|query|integer|false|The maximum number of locations to return in the response. The server may return fewer than this value at its discretion. If no value is specified (or too large a value is specified), then the server will impose its own limit. This value cannot be negative.|
|pageToken|query|string|false|Token returned from a previous call to `ListAvailableLocations` indicating where in the list of locations to resume listing.|
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
  "locations": [
    {
      "features": [
        "LOCATION_FEATURE_UNSPECIFIED"
      ],
      "locationId": "string",
      "type": "LOCATION_TYPE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="firebaseprojectsavailablelocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListAvailableLocationsResponse](#schemalistavailablelocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase.readonly )
</aside>

## firebase.projects.defaultLocation.finalize

<a id="opIdfirebase.projects.defaultLocation.finalize"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/defaultLocation:finalize \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "locationId": "string"
  }'
```

`POST /v1beta1/{parent}/defaultLocation:finalize`

**DEPRECATED.** _Instead, use the applicable resource-specific REST API to set the location for each resource used in your Project._ Sets the default Google Cloud Platform (GCP) resource location for the specified FirebaseProject. This method creates an App Engine application with a [default Cloud Storage bucket](https://cloud.google.com/appengine/docs/standard/python/googlecloudstorageclient/setting-up-cloud-storage#activating_a_cloud_storage_bucket), located in the specified [`locationId`](#body.request_body.FIELDS.location_id). This location must be one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). After the default GCP resource location is finalized, or if it was already set, it cannot be changed. The default GCP resource location for the specified `FirebaseProject` might already be set because either the underlying GCP `Project` already has an App Engine application or `FinalizeDefaultLocation` was previously called with a specified `locationId`. Any new calls to `FinalizeDefaultLocation` with a *different* specified `locationId` will return a 409 error. The result of this call is an [`Operation`](../../v1beta1/operations), which can be used to track the provisioning process. The [`response`](../../v1beta1/operations#Operation.FIELDS.response) type of the `Operation` is google.protobuf.Empty. The `Operation` can be polled by its `name` using GetOperation until `done` is true. When `done` is true, the `Operation` has either succeeded or failed. If the `Operation` has succeeded, its [`response`](../../v1beta1/operations#Operation.FIELDS.response) will be set to a google.protobuf.Empty; if the `Operation` has failed, its `error` will be set to a google.rpc.Status. The `Operation` is automatically deleted after completion, so there is no need to call DeleteOperation. All fields listed in the [request body](#request-body) are required. To call `FinalizeDefaultLocation`, a member must be an Owner of the Project.

> Body parameter

```json
{
  "locationId": "string"
}
```

<h3 id="firebaseprojectsdefaultlocationfinalize-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The resource name of the FirebaseProject for which the default GCP resource location will be set, in the format: projects/PROJECT_IDENTIFIER Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.|
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
|body|body|[FinalizeDefaultLocationRequest](#schemafinalizedefaultlocationrequest)|false|none|
|» locationId|body|string|false|The ID of the Project's default GCP resource location. The location must be one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations).|

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

<h3 id="firebaseprojectsdefaultlocationfinalize-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebase.projects.iosApps.list

<a id="opIdfirebase.projects.iosApps.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/iosApps \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/iosApps`

Lists each IosApp associated with the specified FirebaseProject. The elements are returned in no particular order, but will be a consistent view of the Apps when additional requests are made with a `pageToken`.

<h3 id="firebaseprojectsiosappslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The resource name of the parent FirebaseProject for which to list each associated IosApp, in the format: projects/PROJECT_IDENTIFIER/iosApps Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.|
|pageSize|query|integer|false|The maximum number of Apps to return in the response. The server may return fewer than this at its discretion. If no value is specified (or too large a value is specified), the server will impose its own limit.|
|pageToken|query|string|false|Token returned from a previous call to `ListIosApps` indicating where in the set of Apps to resume listing.|
|showDeleted|query|boolean|false|Controls whether Apps in the DELETED state should be returned in the response. If not specified, only `ACTIVE` Apps will be returned.|
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
  "apps": [
    {
      "apiKeyId": "string",
      "appId": "string",
      "appStoreId": "string",
      "bundleId": "string",
      "displayName": "string",
      "etag": "string",
      "expireTime": "string",
      "name": "string",
      "projectId": "string",
      "state": "STATE_UNSPECIFIED",
      "teamId": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="firebaseprojectsiosappslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListIosAppsResponse](#schemalistiosappsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase.readonly )
</aside>

## firebase.projects.iosApps.create

<a id="opIdfirebase.projects.iosApps.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/iosApps \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "apiKeyId": "string",
    "appStoreId": "string",
    "bundleId": "string",
    "displayName": "string",
    "etag": "string",
    "name": "string",
    "teamId": "string"
  }'
```

`POST /v1beta1/{parent}/iosApps`

Requests the creation of a new IosApp in the specified FirebaseProject. The result of this call is an `Operation` which can be used to track the provisioning process. The `Operation` is automatically deleted after completion, so there is no need to call `DeleteOperation`.

> Body parameter

```json
{
  "apiKeyId": "string",
  "appStoreId": "string",
  "bundleId": "string",
  "displayName": "string",
  "etag": "string",
  "name": "string",
  "teamId": "string"
}
```

<h3 id="firebaseprojectsiosappscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The resource name of the parent FirebaseProject in which to create an IosApp, in the format: projects/PROJECT_IDENTIFIER/iosApps Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.|
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
|body|body|[IosApp](#schemaiosapp)|false|none|
|» apiKeyId|body|string|false|The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the `IosApp`. Be aware that this value is the UID of the API key, _not_ the [`keyString`](https://cloud.google.com/api-keys/docs/reference/rest/v2/projects.locations.keys#Key.FIELDS.key_string) of the API key. The `keyString` is the value that can be found in the App's [configuration artifact](../../rest/v1beta1/projects.iosApps/getConfig). If `api_key_id` is not set in requests to [`iosApps.Create`](../../rest/v1beta1/projects.iosApps/create), then Firebase automatically associates an `api_key_id` with the `IosApp`. This auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned. In patch requests, `api_key_id` cannot be set to an empty value, and the new UID must have no restrictions or only have restrictions that are valid for the associated `IosApp`. We recommend using the [Google Cloud Console](https://console.cloud.google.com/apis/credentials) to manage API keys.|
|» appStoreId|body|string|false|The automatically generated Apple ID assigned to the iOS app by Apple in the iOS App Store.|
|» bundleId|body|string|false|Immutable. The canonical bundle ID of the iOS app as it would appear in the iOS AppStore.|
|» displayName|body|string|false|The user-assigned display name for the `IosApp`.|
|» etag|body|string|false|This checksum is computed by the server based on the value of other fields, and it may be sent with update requests to ensure the client has an up-to-date value before proceeding. Learn more about `etag` in Google's [AIP-154 standard](https://google.aip.dev/154#declarative-friendly-resources). This etag is strongly validated.|
|» name|body|string|false|The resource name of the IosApp, in the format: projects/PROJECT_IDENTIFIER /iosApps/APP_ID * PROJECT_IDENTIFIER: the parent Project's [`ProjectNumber`](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`. * APP_ID: the globally unique, Firebase-assigned identifier for the App (see [`appId`](../projects.iosApps#IosApp.FIELDS.app_id)).|
|» teamId|body|string|false|The Apple Developer Team ID associated with the App in the App Store.|

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

<h3 id="firebaseprojectsiosappscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebase.projects.androidApps.sha.list

<a id="opIdfirebase.projects.androidApps.sha.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/sha \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/sha`

Lists the SHA-1 and SHA-256 certificates for the specified AndroidApp.

<h3 id="firebaseprojectsandroidappsshalist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The resource name of the parent AndroidApp for which to list each associated ShaCertificate, in the format: projects/PROJECT_IDENTIFIER /androidApps/APP_ID Since an APP_ID is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: projects/-/androidApps/APP_ID Refer to the `AndroidApp` [`name`](../projects.androidApps#AndroidApp.FIELDS.name) field for details about PROJECT_IDENTIFIER and APP_ID values.|
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
  "certificates": [
    {
      "certType": "SHA_CERTIFICATE_TYPE_UNSPECIFIED",
      "name": "string",
      "shaHash": "string"
    }
  ]
}
```

<h3 id="firebaseprojectsandroidappsshalist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListShaCertificatesResponse](#schemalistshacertificatesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase.readonly )
</aside>

## firebase.projects.androidApps.sha.create

<a id="opIdfirebase.projects.androidApps.sha.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/sha \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "certType": "SHA_CERTIFICATE_TYPE_UNSPECIFIED",
    "name": "string",
    "shaHash": "string"
  }'
```

`POST /v1beta1/{parent}/sha`

Adds a ShaCertificate to the specified AndroidApp.

> Body parameter

```json
{
  "certType": "SHA_CERTIFICATE_TYPE_UNSPECIFIED",
  "name": "string",
  "shaHash": "string"
}
```

<h3 id="firebaseprojectsandroidappsshacreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The resource name of the parent AndroidApp to which to add a ShaCertificate, in the format: projects/PROJECT_IDENTIFIER/androidApps/ APP_ID Since an APP_ID is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: projects/-/androidApps/APP_ID Refer to the `AndroidApp` [`name`](../projects.androidApps#AndroidApp.FIELDS.name) field for details about PROJECT_IDENTIFIER and APP_ID values.|
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
|body|body|[ShaCertificate](#schemashacertificate)|false|none|
|» certType|body|string|false|The type of SHA certificate encoded in the hash.|
|» name|body|string|false|The resource name of the ShaCertificate for the AndroidApp, in the format: projects/PROJECT_IDENTIFIER/androidApps/APP_ID/sha/SHA_HASH * PROJECT_IDENTIFIER: the parent Project's [`ProjectNumber`](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`. * APP_ID: the globally unique, Firebase-assigned identifier for the App (see [`appId`](../projects.androidApps#AndroidApp.FIELDS.app_id)). * SHA_HASH: the certificate hash for the App (see [`shaHash`](../projects.androidApps.sha#ShaCertificate.FIELDS.sha_hash)).|
|» shaHash|body|string|false|The certificate hash for the `AndroidApp`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» certType|SHA_CERTIFICATE_TYPE_UNSPECIFIED|
|» certType|SHA_1|
|» certType|SHA_256|

> Example responses

> 200 Response

```json
{
  "certType": "SHA_CERTIFICATE_TYPE_UNSPECIFIED",
  "name": "string",
  "shaHash": "string"
}
```

<h3 id="firebaseprojectsandroidappsshacreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ShaCertificate](#schemashacertificate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebase.projects.webApps.list

<a id="opIdfirebase.projects.webApps.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/webApps \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/webApps`

Lists each WebApp associated with the specified FirebaseProject. The elements are returned in no particular order, but will be a consistent view of the Apps when additional requests are made with a `pageToken`.

<h3 id="firebaseprojectswebappslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The resource name of the parent FirebaseProject for which to list each associated WebApp, in the format: projects/PROJECT_IDENTIFIER/webApps Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.|
|pageSize|query|integer|false|The maximum number of Apps to return in the response. The server may return fewer than this value at its discretion. If no value is specified (or too large a value is specified), then the server will impose its own limit.|
|pageToken|query|string|false|Token returned from a previous call to `ListWebApps` indicating where in the set of Apps to resume listing.|
|showDeleted|query|boolean|false|Controls whether Apps in the DELETED state should be returned in the response. If not specified, only `ACTIVE` Apps will be returned.|
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
  "apps": [
    {
      "apiKeyId": "string",
      "appId": "string",
      "appUrls": [
        "string"
      ],
      "displayName": "string",
      "etag": "string",
      "expireTime": "string",
      "name": "string",
      "projectId": "string",
      "state": "STATE_UNSPECIFIED",
      "webId": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="firebaseprojectswebappslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListWebAppsResponse](#schemalistwebappsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase.readonly )
</aside>

## firebase.projects.webApps.create

<a id="opIdfirebase.projects.webApps.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/webApps \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "apiKeyId": "string",
    "appUrls": [
      "string"
    ],
    "displayName": "string",
    "etag": "string",
    "name": "string"
  }'
```

`POST /v1beta1/{parent}/webApps`

Requests the creation of a new WebApp in the specified FirebaseProject. The result of this call is an `Operation` which can be used to track the provisioning process. The `Operation` is automatically deleted after completion, so there is no need to call `DeleteOperation`.

> Body parameter

```json
{
  "apiKeyId": "string",
  "appUrls": [
    "string"
  ],
  "displayName": "string",
  "etag": "string",
  "name": "string"
}
```

<h3 id="firebaseprojectswebappscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The resource name of the parent FirebaseProject in which to create a WebApp, in the format: projects/PROJECT_IDENTIFIER/webApps Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.|
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
|body|body|[WebApp](#schemawebapp)|false|none|
|» apiKeyId|body|string|false|The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the `WebApp`. Be aware that this value is the UID of the API key, _not_ the [`keyString`](https://cloud.google.com/api-keys/docs/reference/rest/v2/projects.locations.keys#Key.FIELDS.key_string) of the API key. The `keyString` is the value that can be found in the App's [configuration artifact](../../rest/v1beta1/projects.webApps/getConfig). If `api_key_id` is not set in requests to [`webApps.Create`](../../rest/v1beta1/projects.webApps/create), then Firebase automatically associates an `api_key_id` with the `WebApp`. This auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned. In patch requests, `api_key_id` cannot be set to an empty value, and the new UID must have no restrictions or only have restrictions that are valid for the associated `WebApp`. We recommend using the [Google Cloud Console](https://console.cloud.google.com/apis/credentials) to manage API keys.|
|» appUrls|body|[string]|false|The URLs where the `WebApp` is hosted.|
|» displayName|body|string|false|The user-assigned display name for the `WebApp`.|
|» etag|body|string|false|This checksum is computed by the server based on the value of other fields, and it may be sent with update requests to ensure the client has an up-to-date value before proceeding. Learn more about `etag` in Google's [AIP-154 standard](https://google.aip.dev/154#declarative-friendly-resources). This etag is strongly validated.|
|» name|body|string|false|The resource name of the WebApp, in the format: projects/PROJECT_IDENTIFIER /webApps/APP_ID * PROJECT_IDENTIFIER: the parent Project's [`ProjectNumber`](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`. * APP_ID: the globally unique, Firebase-assigned identifier for the App (see [`appId`](../projects.webApps#WebApp.FIELDS.app_id)).|

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

<h3 id="firebaseprojectswebappscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebase.projects.addGoogleAnalytics

<a id="opIdfirebase.projects.addGoogleAnalytics"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:addGoogleAnalytics \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "analyticsAccountId": "string",
    "analyticsPropertyId": "string"
  }'
```

`POST /v1beta1/{parent}:addGoogleAnalytics`

Links the specified FirebaseProject with an existing [Google Analytics account](http://www.google.com/analytics/). Using this call, you can either: - Specify an `analyticsAccountId` to provision a new Google Analytics property within the specified account and associate the new property with the `FirebaseProject`. - Specify an existing `analyticsPropertyId` to associate the property with the `FirebaseProject`. Note that when you call `AddGoogleAnalytics`: 1. The first check determines if any existing data streams in the Google Analytics property correspond to any existing Firebase Apps in the `FirebaseProject` (based on the `packageName` or `bundleId` associated with the data stream). Then, as applicable, the data streams and apps are linked. Note that this auto-linking only applies to `AndroidApps` and `IosApps`. 2. If no corresponding data streams are found for the Firebase Apps, new data streams are provisioned in the Google Analytics property for each of the Firebase Apps. Note that a new data stream is always provisioned for a Web App even if it was previously associated with a data stream in the Analytics property. Learn more about the hierarchy and structure of Google Analytics accounts in the [Analytics documentation](https://support.google.com/analytics/answer/9303323). The result of this call is an [`Operation`](../../v1beta1/operations). Poll the `Operation` to track the provisioning process by calling GetOperation until [`done`](../../v1beta1/operations#Operation.FIELDS.done) is `true`. When `done` is `true`, the `Operation` has either succeeded or failed. If the `Operation` succeeded, its [`response`](../../v1beta1/operations#Operation.FIELDS.response) is set to an AnalyticsDetails; if the `Operation` failed, its [`error`](../../v1beta1/operations#Operation.FIELDS.error) is set to a google.rpc.Status. To call `AddGoogleAnalytics`, a project member must be an Owner for the existing `FirebaseProject` and have the [`Edit` permission](https://support.google.com/analytics/answer/2884495) for the Google Analytics account. If the `FirebaseProject` already has Google Analytics enabled, and you call `AddGoogleAnalytics` using an `analyticsPropertyId` that's different from the currently associated property, then the call will fail. Analytics may have already been enabled in the Firebase console or by specifying `timeZone` and `regionCode` in the call to [`AddFirebase`](../../v1beta1/projects/addFirebase).

> Body parameter

```json
{
  "analyticsAccountId": "string",
  "analyticsPropertyId": "string"
}
```

<h3 id="firebaseprojectsaddgoogleanalytics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The resource name of the FirebaseProject to link to an existing Google Analytics account, in the format: projects/PROJECT_IDENTIFIER Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.|
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
|body|body|[AddGoogleAnalyticsRequest](#schemaaddgoogleanalyticsrequest)|false|none|
|» analyticsAccountId|body|string|false|The ID for the existing [Google Analytics account](http://www.google.com/analytics/) that you want to link with the `FirebaseProject`. Specifying this field will provision a new Google Analytics property in your Google Analytics account and associate the new property with the `FirebaseProject`.|
|» analyticsPropertyId|body|string|false|The ID for the existing Google Analytics property that you want to associate with the `FirebaseProject`.|

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

<h3 id="firebaseprojectsaddgoogleanalytics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebase.projects.removeAnalytics

<a id="opIdfirebase.projects.removeAnalytics"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:removeAnalytics \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "analyticsPropertyId": "string"
  }'
```

`POST /v1beta1/{parent}:removeAnalytics`

Unlinks the specified FirebaseProject from its Google Analytics account. This call removes the association of the specified `FirebaseProject` with its current Google Analytics property. However, this call does not delete the Google Analytics resources, such as the Google Analytics property or any data streams. These resources may be re-associated later to the `FirebaseProject` by calling [`AddGoogleAnalytics`](../../v1beta1/projects/addGoogleAnalytics) and specifying the same `analyticsPropertyId`. For Android Apps and iOS Apps, this call re-links data streams with their corresponding apps. However, for Web Apps, this call provisions a *new* data stream for each Web App. To call `RemoveAnalytics`, a project member must be an Owner for the `FirebaseProject`.

> Body parameter

```json
{
  "analyticsPropertyId": "string"
}
```

<h3 id="firebaseprojectsremoveanalytics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The resource name of the FirebaseProject to unlink from its Google Analytics account, in the format: projects/PROJECT_IDENTIFIER Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.|
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
|body|body|[RemoveAnalyticsRequest](#schemaremoveanalyticsrequest)|false|none|
|» analyticsPropertyId|body|string|false|Optional. The ID of the Google Analytics property associated with the specified `FirebaseProject`. - If not set, then the Google Analytics property that is currently associated with the specified `FirebaseProject` is removed. - If set, and the specified `FirebaseProject` is currently associated with a *different* Google Analytics property, then the response is a `412 Precondition Failed` error. |

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

<h3 id="firebaseprojectsremoveanalytics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebase.projects.searchApps

<a id="opIdfirebase.projects.searchApps"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:searchApps \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}:searchApps`

Lists all available Apps for the specified FirebaseProject. This is a convenience method. Typically, interaction with an App should be done using the platform-specific service, but some tool use-cases require a summary of all known Apps (such as for App selector interfaces).

<h3 id="firebaseprojectssearchapps-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The parent FirebaseProject for which to list Apps, in the format: projects/ PROJECT_IDENTIFIER Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.|
|filter|query|string|false|A query string compatible with Google's [AIP-160 standard](https://google.aip.dev/160). Use any of the following fields in a query: * [`app_id`](../projects/searchApps#FirebaseAppInfo.FIELDS.app_id) * [`namespace`](../projects/searchApps#FirebaseAppInfo.FIELDS.namespace) * [`platform`](../projects/searchApps#FirebaseAppInfo.FIELDS.platform) This query also supports the following "virtual" fields. These are fields which are not actually part of the returned resource object, but they can be queried as if they are pre-populated with specific values. * `sha1_hash` or `sha1_hashes`: This field is considered to be a _repeated_ `string` field, populated with the list of all SHA-1 certificate fingerprints registered with the AndroidApp. This list is empty if the App is not an `AndroidApp`. * `sha256_hash` or `sha256_hashes`: This field is considered to be a _repeated_ `string` field, populated with the list of all SHA-256 certificate fingerprints registered with the AndroidApp. This list is empty if the App is not an `AndroidApp`. * `app_store_id`: This field is considered to be a _singular_ `string` field, populated with the Apple App Store ID registered with the IosApp. This field is empty if the App is not an `IosApp`. * `team_id`: This field is considered to be a _singular_ `string` field, populated with the Apple team ID registered with the IosApp. This field is empty if the App is not an `IosApp`.|
|pageSize|query|integer|false|The maximum number of Apps to return in the response. The server may return fewer than this value at its discretion. If no value is specified (or too large a value is specified), then the server will impose its own limit. This value cannot be negative.|
|pageToken|query|string|false|Token returned from a previous call to `SearchFirebaseApps` indicating where in the set of Apps to resume listing.|
|showDeleted|query|boolean|false|Controls whether Apps in the DELETED state should be returned. If not specified, only `ACTIVE` Apps will be returned.|
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
  "apps": [
    {
      "apiKeyId": "string",
      "appId": "string",
      "displayName": "string",
      "expireTime": "string",
      "name": "string",
      "namespace": "string",
      "platform": "PLATFORM_UNSPECIFIED",
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="firebaseprojectssearchapps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SearchFirebaseAppsResponse](#schemasearchfirebaseappsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase.readonly )
</aside>

## firebase.projects.addFirebase

<a id="opIdfirebase.projects.addFirebase"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:addFirebase \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "locationId": "string"
  }'
```

`POST /v1beta1/{project}:addFirebase`

Adds Firebase resources to the specified existing [Google Cloud Platform (GCP) `Project`] (https://cloud.google.com/resource-manager/reference/rest/v1/projects). Since a FirebaseProject is actually also a GCP `Project`, a `FirebaseProject` has the same underlying GCP identifiers (`projectNumber` and `projectId`). This allows for easy interop with Google APIs. The result of this call is an [`Operation`](../../v1beta1/operations). Poll the `Operation` to track the provisioning process by calling GetOperation until [`done`](../../v1beta1/operations#Operation.FIELDS.done) is `true`. When `done` is `true`, the `Operation` has either succeeded or failed. If the `Operation` succeeded, its [`response`](../../v1beta1/operations#Operation.FIELDS.response) is set to a FirebaseProject; if the `Operation` failed, its [`error`](../../v1beta1/operations#Operation.FIELDS.error) is set to a google.rpc.Status. The `Operation` is automatically deleted after completion, so there is no need to call DeleteOperation. This method does not modify any billing account information on the underlying GCP `Project`. To call `AddFirebase`, a project member or service account must have the following permissions (the IAM roles of Editor and Owner contain these permissions): `firebase.projects.update`, `resourcemanager.projects.get`, `serviceusage.services.enable`, and `serviceusage.services.get`.

> Body parameter

```json
{
  "locationId": "string"
}
```

<h3 id="firebaseprojectsaddfirebase-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The resource name of the GCP `Project` to which Firebase resources will be added, in the format: projects/PROJECT_IDENTIFIER Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values. After calling `AddFirebase`, the unique Project identifiers ( [`projectNumber`](https://cloud.google.com/resource-manager/reference/rest/v1/projects#Project.FIELDS.project_number) and [`projectId`](https://cloud.google.com/resource-manager/reference/rest/v1/projects#Project.FIELDS.project_id)) of the underlying GCP `Project` are also the identifiers of the FirebaseProject.|
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
|» locationId|body|string|false|Deprecated. Instead, to set a Project's default GCP resource location, call [`FinalizeDefaultLocation`](../projects.defaultLocation/finalize) after you add Firebase resources to the GCP `Project`. The ID of the Project's default GCP resource location. The location must be one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations).|

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

<h3 id="firebaseprojectsaddfirebase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

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
{
  "locationId": "string"
}
```

All fields are required.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locationId|string|false|none|Deprecated. Instead, to set a Project's default GCP resource location, call [`FinalizeDefaultLocation`](../projects.defaultLocation/finalize) after you add Firebase resources to the GCP `Project`. The ID of the Project's default GCP resource location. The location must be one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations).|

<h2 id="tocS_AddGoogleAnalyticsRequest">AddGoogleAnalyticsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddgoogleanalyticsrequest"></a>
<a id="schema_AddGoogleAnalyticsRequest"></a>
<a id="tocSaddgoogleanalyticsrequest"></a>
<a id="tocsaddgoogleanalyticsrequest"></a>

```json
{
  "analyticsAccountId": "string",
  "analyticsPropertyId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analyticsAccountId|string|false|none|The ID for the existing [Google Analytics account](http://www.google.com/analytics/) that you want to link with the `FirebaseProject`. Specifying this field will provision a new Google Analytics property in your Google Analytics account and associate the new property with the `FirebaseProject`.|
|analyticsPropertyId|string|false|none|The ID for the existing Google Analytics property that you want to associate with the `FirebaseProject`.|

<h2 id="tocS_AdminSdkConfig">AdminSdkConfig</h2>
<!-- backwards compatibility -->
<a id="schemaadminsdkconfig"></a>
<a id="schema_AdminSdkConfig"></a>
<a id="tocSadminsdkconfig"></a>
<a id="tocsadminsdkconfig"></a>

```json
{
  "databaseURL": "string",
  "locationId": "string",
  "projectId": "string",
  "storageBucket": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|databaseURL|string|false|none|**Deprecated.** **DEPRECATED.** _Instead, find the default Firebase Realtime Database instance name using the [list endpoint](https://firebase.google.com/docs/reference/rest/database/database-management/rest/v1beta/projects.locations.instances/list) within the Firebase Realtime Database REST API. Note that the default instance for the Project might not yet be provisioned, so the return might not contain a default instance._ The default Firebase Realtime Database URL.|
|locationId|string|false|none|**Deprecated.** **DEPRECATED.** _Instead, use product-specific REST APIs to find the location of resources._ The ID of the Project's default GCP resource location. The location is one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). This field is omitted if the default GCP resource location has not been finalized yet. To set a Project's default GCP resource location, call [`FinalizeDefaultLocation`](../projects.defaultLocation/finalize) after you add Firebase resources to the Project.|
|projectId|string|false|none|Immutable. A user-assigned unique identifier for the `FirebaseProject`. This identifier may appear in URLs or names for some Firebase resources associated with the Project, but it should generally be treated as a convenience alias to reference the Project.|
|storageBucket|string|false|none|**Deprecated.** **DEPRECATED.** _Instead, find the default Cloud Storage for Firebase bucket using the [list endpoint](https://firebase.google.com/docs/reference/rest/storage/rest/v1beta/projects.buckets/list) within the Cloud Storage for Firebase REST API. Note that the default bucket for the Project might not yet be provisioned, so the return might not contain a default bucket._ The default Cloud Storage for Firebase storage bucket name.|

<h2 id="tocS_AnalyticsDetails">AnalyticsDetails</h2>
<!-- backwards compatibility -->
<a id="schemaanalyticsdetails"></a>
<a id="schema_AnalyticsDetails"></a>
<a id="tocSanalyticsdetails"></a>
<a id="tocsanalyticsdetails"></a>

```json
{
  "analyticsProperty": {
    "analyticsAccountId": "string",
    "displayName": "string",
    "id": "string"
  },
  "streamMappings": [
    {
      "app": "string",
      "measurementId": "string",
      "streamId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analyticsProperty|[AnalyticsProperty](#schemaanalyticsproperty)|false|none|The Analytics Property object associated with the specified `FirebaseProject`. This object contains the details of the Google Analytics property associated with the Project.|
|streamMappings|[[StreamMapping](#schemastreammapping)]|false|none| - For `AndroidApps` and `IosApps`: a map of `app` to `streamId` for each Firebase App in the specified `FirebaseProject`. Each `app` and `streamId` appears only once. - For `WebApps`: a map of `app` to `streamId` and `measurementId` for each `WebApp` in the specified `FirebaseProject`. Each `app`, `streamId`, and `measurementId` appears only once.|

<h2 id="tocS_AnalyticsProperty">AnalyticsProperty</h2>
<!-- backwards compatibility -->
<a id="schemaanalyticsproperty"></a>
<a id="schema_AnalyticsProperty"></a>
<a id="tocSanalyticsproperty"></a>
<a id="tocsanalyticsproperty"></a>

```json
{
  "analyticsAccountId": "string",
  "displayName": "string",
  "id": "string"
}
```

Details of a Google Analytics property

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analyticsAccountId|string|false|read-only|Output only. The ID of the [Google Analytics account](https://www.google.com/analytics/) for the Google Analytics property associated with the specified FirebaseProject.|
|displayName|string|false|none|The display name of the Google Analytics property associated with the specified `FirebaseProject`.|
|id|string|false|none|The globally unique, Google-assigned identifier of the Google Analytics property associated with the specified `FirebaseProject`. If you called [`AddGoogleAnalytics`](../../v1beta1/projects/addGoogleAnalytics) to link the `FirebaseProject` with a Google Analytics account, the value in this `id` field is the same as the ID of the property either specified or provisioned with that call to `AddGoogleAnalytics`.|

<h2 id="tocS_AndroidApp">AndroidApp</h2>
<!-- backwards compatibility -->
<a id="schemaandroidapp"></a>
<a id="schema_AndroidApp"></a>
<a id="tocSandroidapp"></a>
<a id="tocsandroidapp"></a>

```json
{
  "apiKeyId": "string",
  "appId": "string",
  "displayName": "string",
  "etag": "string",
  "expireTime": "string",
  "name": "string",
  "packageName": "string",
  "projectId": "string",
  "sha1Hashes": [
    "string"
  ],
  "sha256Hashes": [
    "string"
  ],
  "state": "STATE_UNSPECIFIED"
}
```

Details of a Firebase App for Android.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKeyId|string|false|none|The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the `AndroidApp`. Be aware that this value is the UID of the API key, _not_ the [`keyString`](https://cloud.google.com/api-keys/docs/reference/rest/v2/projects.locations.keys#Key.FIELDS.key_string) of the API key. The `keyString` is the value that can be found in the App's [configuration artifact](../../rest/v1beta1/projects.androidApps/getConfig). If `api_key_id` is not set in requests to [`androidApps.Create`](../../rest/v1beta1/projects.androidApps/create), then Firebase automatically associates an `api_key_id` with the `AndroidApp`. This auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned. In patch requests, `api_key_id` cannot be set to an empty value, and the new UID must have no restrictions or only have restrictions that are valid for the associated `AndroidApp`. We recommend using the [Google Cloud Console](https://console.cloud.google.com/apis/credentials) to manage API keys.|
|appId|string|false|read-only|Output only. Immutable. The globally unique, Firebase-assigned identifier for the `AndroidApp`. This identifier should be treated as an opaque token, as the data format is not specified.|
|displayName|string|false|none|The user-assigned display name for the `AndroidApp`.|
|etag|string|false|none|This checksum is computed by the server based on the value of other fields, and it may be sent with update requests to ensure the client has an up-to-date value before proceeding. Learn more about `etag` in Google's [AIP-154 standard](https://google.aip.dev/154#declarative-friendly-resources). This etag is strongly validated.|
|expireTime|string(google-datetime)|false|read-only|Output only. Timestamp of when the App will be considered expired and cannot be undeleted. This value is only provided if the App is in the `DELETED` state.|
|name|string|false|none|The resource name of the AndroidApp, in the format: projects/ PROJECT_IDENTIFIER/androidApps/APP_ID * PROJECT_IDENTIFIER: the parent Project's [`ProjectNumber`](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`. * APP_ID: the globally unique, Firebase-assigned identifier for the App (see [`appId`](../projects.androidApps#AndroidApp.FIELDS.app_id)).|
|packageName|string|false|none|Immutable. The canonical package name of the Android app as would appear in the Google Play Developer Console.|
|projectId|string|false|read-only|Output only. Immutable. A user-assigned unique identifier of the parent FirebaseProject for the `AndroidApp`.|
|sha1Hashes|[string]|false|none|The SHA1 certificate hashes for the AndroidApp.|
|sha256Hashes|[string]|false|none|The SHA256 certificate hashes for the AndroidApp.|
|state|string|false|read-only|Output only. The lifecycle state of the App.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|ACTIVE|
|state|DELETED|

<h2 id="tocS_AndroidAppConfig">AndroidAppConfig</h2>
<!-- backwards compatibility -->
<a id="schemaandroidappconfig"></a>
<a id="schema_AndroidAppConfig"></a>
<a id="tocSandroidappconfig"></a>
<a id="tocsandroidappconfig"></a>

```json
{
  "configFileContents": "string",
  "configFilename": "string"
}
```

Configuration metadata of a single Firebase App for Android.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configFileContents|string(byte)|false|none|The contents of the JSON configuration file.|
|configFilename|string|false|none|The filename that the configuration artifact for the `AndroidApp` is typically saved as. For example: `google-services.json`|

<h2 id="tocS_DefaultResources">DefaultResources</h2>
<!-- backwards compatibility -->
<a id="schemadefaultresources"></a>
<a id="schema_DefaultResources"></a>
<a id="tocSdefaultresources"></a>
<a id="tocsdefaultresources"></a>

```json
{
  "hostingSite": "string",
  "locationId": "string",
  "realtimeDatabaseInstance": "string",
  "storageBucket": "string"
}
```

**DEPRECATED.** _Auto-provisioning of these resources is changing, so this object no longer reliably provides information about the resources within the Project. Instead, retrieve information about each resource directly from its resource-specific API._ The default auto-provisioned resources associated with the Project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hostingSite|string|false|read-only|**Deprecated.** Output only. **DEPRECATED.** _Instead, find the default Firebase Hosting site name using the [ListSites](https://firebase.google.com/docs/reference/hosting/rest/v1beta1/projects.sites/list) within the Firebase Hosting REST API. Note that the default site for the Project might not yet be provisioned, so the return might not contain a default site._ The default Firebase Hosting site name, in the format: PROJECT_ID Though rare, your `projectId` might already be used as the name for an existing Hosting site in another project (learn more about creating non-default, [additional sites](https://firebase.google.com/docs/hosting/multisites)). In these cases, your `projectId` is appended with a hyphen then five alphanumeric characters to create your default Hosting site name. For example, if your `projectId` is `myproject123`, your default Hosting site name might be: `myproject123-a5c16`|
|locationId|string|false|read-only|**Deprecated.** Output only. **DEPRECATED.** _Instead, use product-specific REST APIs to find the location of resources._ The ID of the Project's default GCP resource location. The location is one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). This field is omitted if the default GCP resource location has not been finalized yet. To set a Project's default GCP resource location, call [`FinalizeDefaultLocation`](../projects.defaultLocation/finalize) after you add Firebase resources to the Project.|
|realtimeDatabaseInstance|string|false|read-only|**Deprecated.** Output only. **DEPRECATED.** _Instead, find the default Firebase Realtime Database instance name using the [list endpoint](https://firebase.google.com/docs/reference/rest/database/database-management/rest/v1beta/projects.locations.instances/list) within the Firebase Realtime Database REST API. Note that the default instance for the Project might not yet be provisioned, so the return might not contain a default instance._ The default Firebase Realtime Database instance name, in the format: PROJECT_ID Though rare, your `projectId` might already be used as the name for an existing Realtime Database instance in another project (learn more about [database sharding](https://firebase.google.com/docs/database/usage/sharding)). In these cases, your `projectId` is appended with a hyphen then five alphanumeric characters to create your default Realtime Database instance name. For example, if your `projectId` is `myproject123`, your default database instance name might be: `myproject123-a5c16`|
|storageBucket|string|false|read-only|**Deprecated.** Output only. **DEPRECATED.** _Instead, find the default Cloud Storage for Firebase bucket using the [list endpoint](https://firebase.google.com/docs/reference/rest/storage/rest/v1beta/projects.buckets/list) within the Cloud Storage for Firebase REST API. Note that the default bucket for the Project might not yet be provisioned, so the return might not contain a default bucket._ The default Cloud Storage for Firebase storage bucket, in the format: PROJECT_ID.appspot.com|

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

<h2 id="tocS_FinalizeDefaultLocationRequest">FinalizeDefaultLocationRequest</h2>
<!-- backwards compatibility -->
<a id="schemafinalizedefaultlocationrequest"></a>
<a id="schema_FinalizeDefaultLocationRequest"></a>
<a id="tocSfinalizedefaultlocationrequest"></a>
<a id="tocsfinalizedefaultlocationrequest"></a>

```json
{
  "locationId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locationId|string|false|none|The ID of the Project's default GCP resource location. The location must be one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations).|

<h2 id="tocS_FirebaseAppInfo">FirebaseAppInfo</h2>
<!-- backwards compatibility -->
<a id="schemafirebaseappinfo"></a>
<a id="schema_FirebaseAppInfo"></a>
<a id="tocSfirebaseappinfo"></a>
<a id="tocsfirebaseappinfo"></a>

```json
{
  "apiKeyId": "string",
  "appId": "string",
  "displayName": "string",
  "expireTime": "string",
  "name": "string",
  "namespace": "string",
  "platform": "PLATFORM_UNSPECIFIED",
  "state": "STATE_UNSPECIFIED"
}
```

A high-level summary of an App.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKeyId|string|false|none|The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the App. Be aware that this value is the UID of the API key, _not_ the [`keyString`](https://cloud.google.com/api-keys/docs/reference/rest/v2/projects.locations.keys#Key.FIELDS.key_string) of the API key. The `keyString` is the value that can be found in the App's configuration artifact ([`AndroidApp`](../../rest/v1beta1/projects.androidApps/getConfig) \| [`IosApp`](../../rest/v1beta1/projects.iosApps/getConfig) \| [`WebApp`](../../rest/v1beta1/projects.webApps/getConfig)). If `api_key_id` is not set in requests to create the App ([`AndroidApp`](../../rest/v1beta1/projects.androidApps/create) \| [`IosApp`](../../rest/v1beta1/projects.iosApps/create) \| [`WebApp`](../../rest/v1beta1/projects.webApps/create)), then Firebase automatically associates an `api_key_id` with the App. This auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned.|
|appId|string|false|read-only|Output only. Immutable. The globally unique, Firebase-assigned identifier for the `WebApp`. This identifier should be treated as an opaque token, as the data format is not specified.|
|displayName|string|false|none|The user-assigned display name of the Firebase App.|
|expireTime|string(google-datetime)|false|read-only|Output only. Timestamp of when the App will be considered expired and cannot be undeleted. This value is only provided if the App is in the `DELETED` state.|
|name|string|false|none|The resource name of the Firebase App, in the format: projects/PROJECT_ID /iosApps/APP_ID or projects/PROJECT_ID/androidApps/APP_ID or projects/ PROJECT_ID/webApps/APP_ID|
|namespace|string|false|read-only|Output only. Immutable. The platform-specific identifier of the App. *Note:* For most use cases, use `appId`, which is the canonical, globally unique identifier for referencing an App. This string is derived from a native identifier for each platform: `packageName` for an `AndroidApp`, `bundleId` for an `IosApp`, and `webId` for a `WebApp`. Its contents should be treated as opaque, as the native identifier format may change as platforms evolve. This string is only unique within a `FirebaseProject` and its associated Apps.|
|platform|string|false|none|The platform of the Firebase App.|
|state|string|false|read-only|Output only. The lifecycle state of the App.|

#### Enumerated Values

|Property|Value|
|---|---|
|platform|PLATFORM_UNSPECIFIED|
|platform|IOS|
|platform|ANDROID|
|platform|WEB|
|state|STATE_UNSPECIFIED|
|state|ACTIVE|
|state|DELETED|

<h2 id="tocS_FirebaseProject">FirebaseProject</h2>
<!-- backwards compatibility -->
<a id="schemafirebaseproject"></a>
<a id="schema_FirebaseProject"></a>
<a id="tocSfirebaseproject"></a>
<a id="tocsfirebaseproject"></a>

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "displayName": "string",
  "etag": "string",
  "name": "string",
  "projectId": "string",
  "projectNumber": "string",
  "resources": {
    "hostingSite": "string",
    "locationId": "string",
    "realtimeDatabaseInstance": "string",
    "storageBucket": "string"
  },
  "state": "STATE_UNSPECIFIED"
}
```

A `FirebaseProject` is the top-level Firebase entity. It is the container for Firebase Apps, Firebase Hosting sites, storage systems (Firebase Realtime Database, Cloud Firestore, Cloud Storage buckets), and other Firebase and Google Cloud Platform (GCP) resources. You create a `FirebaseProject` by calling AddFirebase and specifying an *existing* [GCP `Project`](https://cloud.google.com/resource-manager/reference/rest/v1/projects). This adds Firebase resources to the existing GCP `Project`. Since a FirebaseProject is actually also a GCP `Project`, a `FirebaseProject` has the same underlying GCP identifiers (`projectNumber` and `projectId`). This allows for easy interop with Google APIs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotations|object|false|none|A set of user-defined annotations for the FirebaseProject. Learn more about annotations in Google's [AIP-128 standard](https://google.aip.dev/128#annotations). These annotations are intended solely for developers and client-side tools. Firebase services will not mutate this annotations set.|
|displayName|string|false|none|The user-assigned display name of the Project.|
|etag|string|false|none|This checksum is computed by the server based on the value of other fields, and it may be sent with update requests to ensure the client has an up-to-date value before proceeding. Learn more about `etag` in Google's [AIP-154 standard](https://google.aip.dev/154#declarative-friendly-resources). This etag is strongly validated.|
|name|string|false|none|The resource name of the Project, in the format: projects/PROJECT_IDENTIFIER PROJECT_IDENTIFIER: the Project's [`ProjectNumber`](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`.|
|projectId|string|false|read-only|Output only. Immutable. A user-assigned unique identifier for the Project. This identifier may appear in URLs or names for some Firebase resources associated with the Project, but it should generally be treated as a convenience alias to reference the Project.|
|projectNumber|string(int64)|false|read-only|Output only. Immutable. The globally unique, Google-assigned canonical identifier for the Project. Use this identifier when configuring integrations and/or making API calls to Firebase or third-party services.|
|resources|[DefaultResources](#schemadefaultresources)|false|none|**Deprecated.** Output only. **DEPRECATED.** _Auto-provisioning of these resources is changing, so this object no longer reliably provides information about the Project. Instead, retrieve information about each resource directly from its resource-specific API._ The default Firebase resources associated with the Project.|
|state|string|false|read-only|Output only. The lifecycle state of the Project.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|ACTIVE|
|state|DELETED|

<h2 id="tocS_IosApp">IosApp</h2>
<!-- backwards compatibility -->
<a id="schemaiosapp"></a>
<a id="schema_IosApp"></a>
<a id="tocSiosapp"></a>
<a id="tocsiosapp"></a>

```json
{
  "apiKeyId": "string",
  "appId": "string",
  "appStoreId": "string",
  "bundleId": "string",
  "displayName": "string",
  "etag": "string",
  "expireTime": "string",
  "name": "string",
  "projectId": "string",
  "state": "STATE_UNSPECIFIED",
  "teamId": "string"
}
```

Details of a Firebase App for iOS.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKeyId|string|false|none|The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the `IosApp`. Be aware that this value is the UID of the API key, _not_ the [`keyString`](https://cloud.google.com/api-keys/docs/reference/rest/v2/projects.locations.keys#Key.FIELDS.key_string) of the API key. The `keyString` is the value that can be found in the App's [configuration artifact](../../rest/v1beta1/projects.iosApps/getConfig). If `api_key_id` is not set in requests to [`iosApps.Create`](../../rest/v1beta1/projects.iosApps/create), then Firebase automatically associates an `api_key_id` with the `IosApp`. This auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned. In patch requests, `api_key_id` cannot be set to an empty value, and the new UID must have no restrictions or only have restrictions that are valid for the associated `IosApp`. We recommend using the [Google Cloud Console](https://console.cloud.google.com/apis/credentials) to manage API keys.|
|appId|string|false|read-only|Output only. Immutable. The globally unique, Firebase-assigned identifier for the `IosApp`. This identifier should be treated as an opaque token, as the data format is not specified.|
|appStoreId|string|false|none|The automatically generated Apple ID assigned to the iOS app by Apple in the iOS App Store.|
|bundleId|string|false|none|Immutable. The canonical bundle ID of the iOS app as it would appear in the iOS AppStore.|
|displayName|string|false|none|The user-assigned display name for the `IosApp`.|
|etag|string|false|none|This checksum is computed by the server based on the value of other fields, and it may be sent with update requests to ensure the client has an up-to-date value before proceeding. Learn more about `etag` in Google's [AIP-154 standard](https://google.aip.dev/154#declarative-friendly-resources). This etag is strongly validated.|
|expireTime|string(google-datetime)|false|read-only|Output only. Timestamp of when the App will be considered expired and cannot be undeleted. This value is only provided if the App is in the `DELETED` state.|
|name|string|false|none|The resource name of the IosApp, in the format: projects/PROJECT_IDENTIFIER /iosApps/APP_ID * PROJECT_IDENTIFIER: the parent Project's [`ProjectNumber`](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`. * APP_ID: the globally unique, Firebase-assigned identifier for the App (see [`appId`](../projects.iosApps#IosApp.FIELDS.app_id)).|
|projectId|string|false|read-only|Output only. Immutable. A user-assigned unique identifier of the parent FirebaseProject for the `IosApp`.|
|state|string|false|read-only|Output only. The lifecycle state of the App.|
|teamId|string|false|none|The Apple Developer Team ID associated with the App in the App Store.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|ACTIVE|
|state|DELETED|

<h2 id="tocS_IosAppConfig">IosAppConfig</h2>
<!-- backwards compatibility -->
<a id="schemaiosappconfig"></a>
<a id="schema_IosAppConfig"></a>
<a id="tocSiosappconfig"></a>
<a id="tocsiosappconfig"></a>

```json
{
  "configFileContents": "string",
  "configFilename": "string"
}
```

Configuration metadata of a single Firebase App for iOS.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configFileContents|string(byte)|false|none|The content of the XML configuration file.|
|configFilename|string|false|none|The filename that the configuration artifact for the `IosApp` is typically saved as. For example: `GoogleService-Info.plist`|

<h2 id="tocS_ListAndroidAppsResponse">ListAndroidAppsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistandroidappsresponse"></a>
<a id="schema_ListAndroidAppsResponse"></a>
<a id="tocSlistandroidappsresponse"></a>
<a id="tocslistandroidappsresponse"></a>

```json
{
  "apps": [
    {
      "apiKeyId": "string",
      "appId": "string",
      "displayName": "string",
      "etag": "string",
      "expireTime": "string",
      "name": "string",
      "packageName": "string",
      "projectId": "string",
      "sha1Hashes": [
        "string"
      ],
      "sha256Hashes": [
        "string"
      ],
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apps|[[AndroidApp](#schemaandroidapp)]|false|none|List of each `AndroidApp` associated with the specified `FirebaseProject`.|
|nextPageToken|string|false|none|If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results. This token can be used in a subsequent call to `ListAndroidApps` to find the next group of Apps. Page tokens are short-lived and should not be persisted.|

<h2 id="tocS_ListAvailableLocationsResponse">ListAvailableLocationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistavailablelocationsresponse"></a>
<a id="schema_ListAvailableLocationsResponse"></a>
<a id="tocSlistavailablelocationsresponse"></a>
<a id="tocslistavailablelocationsresponse"></a>

```json
{
  "locations": [
    {
      "features": [
        "LOCATION_FEATURE_UNSPECIFIED"
      ],
      "locationId": "string",
      "type": "LOCATION_TYPE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locations|[[Location](#schemalocation)]|false|none|One page of results from a call to `ListAvailableLocations`.|
|nextPageToken|string|false|none|If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results and all available locations have been listed. This token can be used in a subsequent call to `ListAvailableLocations` to find more locations. Page tokens are short-lived and should not be persisted.|

<h2 id="tocS_ListAvailableProjectsResponse">ListAvailableProjectsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistavailableprojectsresponse"></a>
<a id="schema_ListAvailableProjectsResponse"></a>
<a id="tocSlistavailableprojectsresponse"></a>
<a id="tocslistavailableprojectsresponse"></a>

```json
{
  "nextPageToken": "string",
  "projectInfo": [
    {
      "displayName": "string",
      "locationId": "string",
      "project": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results. This token can be used in a subsequent calls to `ListAvailableProjects` to find the next group of Projects. Page tokens are short-lived and should not be persisted.|
|projectInfo|[[ProjectInfo](#schemaprojectinfo)]|false|none|The list of GCP `Projects` which can have Firebase resources added to them.|

<h2 id="tocS_ListFirebaseProjectsResponse">ListFirebaseProjectsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfirebaseprojectsresponse"></a>
<a id="schema_ListFirebaseProjectsResponse"></a>
<a id="tocSlistfirebaseprojectsresponse"></a>
<a id="tocslistfirebaseprojectsresponse"></a>

```json
{
  "nextPageToken": "string",
  "results": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "displayName": "string",
      "etag": "string",
      "name": "string",
      "projectId": "string",
      "projectNumber": "string",
      "resources": {
        "hostingSite": "string",
        "locationId": "string",
        "realtimeDatabaseInstance": "string",
        "storageBucket": "string"
      },
      "state": "STATE_UNSPECIFIED"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results. This token can be used in a subsequent calls to `ListFirebaseProjects` to find the next group of Projects. Page tokens are short-lived and should not be persisted.|
|results|[[FirebaseProject](#schemafirebaseproject)]|false|none|One page of the list of Projects that are accessible to the caller.|

<h2 id="tocS_ListIosAppsResponse">ListIosAppsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistiosappsresponse"></a>
<a id="schema_ListIosAppsResponse"></a>
<a id="tocSlistiosappsresponse"></a>
<a id="tocslistiosappsresponse"></a>

```json
{
  "apps": [
    {
      "apiKeyId": "string",
      "appId": "string",
      "appStoreId": "string",
      "bundleId": "string",
      "displayName": "string",
      "etag": "string",
      "expireTime": "string",
      "name": "string",
      "projectId": "string",
      "state": "STATE_UNSPECIFIED",
      "teamId": "string"
    }
  ],
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apps|[[IosApp](#schemaiosapp)]|false|none|List of each `IosApp` associated with the specified `FirebaseProject`.|
|nextPageToken|string|false|none|If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results. This token can be used in a subsequent call to `ListIosApps` to find the next group of Apps. Page tokens are short-lived and should not be persisted.|

<h2 id="tocS_ListShaCertificatesResponse">ListShaCertificatesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistshacertificatesresponse"></a>
<a id="schema_ListShaCertificatesResponse"></a>
<a id="tocSlistshacertificatesresponse"></a>
<a id="tocslistshacertificatesresponse"></a>

```json
{
  "certificates": [
    {
      "certType": "SHA_CERTIFICATE_TYPE_UNSPECIFIED",
      "name": "string",
      "shaHash": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificates|[[ShaCertificate](#schemashacertificate)]|false|none|The list of each `ShaCertificate` associated with the `AndroidApp`.|

<h2 id="tocS_ListWebAppsResponse">ListWebAppsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistwebappsresponse"></a>
<a id="schema_ListWebAppsResponse"></a>
<a id="tocSlistwebappsresponse"></a>
<a id="tocslistwebappsresponse"></a>

```json
{
  "apps": [
    {
      "apiKeyId": "string",
      "appId": "string",
      "appUrls": [
        "string"
      ],
      "displayName": "string",
      "etag": "string",
      "expireTime": "string",
      "name": "string",
      "projectId": "string",
      "state": "STATE_UNSPECIFIED",
      "webId": "string"
    }
  ],
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apps|[[WebApp](#schemawebapp)]|false|none|List of each `WebApp` associated with the specified `FirebaseProject`.|
|nextPageToken|string|false|none|If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results. This token can be used in a subsequent call to `ListWebApps` to find the next group of Apps. Page tokens are short-lived and should not be persisted.|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "features": [
    "LOCATION_FEATURE_UNSPECIFIED"
  ],
  "locationId": "string",
  "type": "LOCATION_TYPE_UNSPECIFIED"
}
```

**DEPRECATED.** _This Location is no longer used to determine Firebase resource locations. Instead, consult product documentation to determine valid locations for each resource used in your Project._ A GCP resource location that can be selected for a FirebaseProject.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|features|[string]|false|none|Products and services that are available in the GCP resource location.|
|locationId|string|false|none|The ID of the GCP resource location. It will be one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations#types).|
|type|string|false|none|Indicates whether the GCP resource location is a [regional or multi-regional location](https://firebase.google.com/docs/projects/locations#types) for data replication.|

#### Enumerated Values

|Property|Value|
|---|---|
|features|LOCATION_FEATURE_UNSPECIFIED|
|features|FIRESTORE|
|features|DEFAULT_STORAGE|
|features|FUNCTIONS|
|type|LOCATION_TYPE_UNSPECIFIED|
|type|REGIONAL|
|type|MULTI_REGIONAL|

<h2 id="tocS_MessageSet">MessageSet</h2>
<!-- backwards compatibility -->
<a id="schemamessageset"></a>
<a id="schema_MessageSet"></a>
<a id="tocSmessageset"></a>
<a id="tocsmessageset"></a>

```json
{}
```

This is proto2's version of MessageSet.

<h2 id="tocS_Operation">Operation</h2>
<!-- backwards compatibility -->
<a id="schemaoperation"></a>
<a id="schema_Operation"></a>
<a id="tocSoperation"></a>
<a id="tocsoperation"></a>

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

<h2 id="tocS_OperationMetadata">OperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaoperationmetadata"></a>
<a id="schema_OperationMetadata"></a>
<a id="tocSoperationmetadata"></a>
<a id="tocsoperationmetadata"></a>

```json
{}
```

Describes the progress of an LRO. It is included in the `metadata` field of the `Operation`.

<h2 id="tocS_ProductMetadata">ProductMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaproductmetadata"></a>
<a id="schema_ProductMetadata"></a>
<a id="tocSproductmetadata"></a>
<a id="tocsproductmetadata"></a>

```json
{
  "warningMessages": [
    "string"
  ]
}
```

Metadata about a long-running Product operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|warningMessages|[string]|false|none|List of warnings related to the associated operation.|

<h2 id="tocS_ProjectInfo">ProjectInfo</h2>
<!-- backwards compatibility -->
<a id="schemaprojectinfo"></a>
<a id="schema_ProjectInfo"></a>
<a id="tocSprojectinfo"></a>
<a id="tocsprojectinfo"></a>

```json
{
  "displayName": "string",
  "locationId": "string",
  "project": "string"
}
```

A reference to a Google Cloud Platform (GCP) `Project`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The user-assigned display name of the GCP `Project`, for example: `My App`|
|locationId|string|false|none|The ID of the Project's default GCP resource location. The location is one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). Not all Projects will have this field populated. If it is not populated, it means that the Project does not yet have a default GCP resource location. To set a Project's default GCP resource location, call [`FinalizeDefaultLocation`](../projects.defaultLocation/finalize) after you add Firebase resources to the Project.|
|project|string|false|none|The resource name of the GCP `Project` to which Firebase resources can be added, in the format: projects/PROJECT_IDENTIFIER Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.|

<h2 id="tocS_RemoveAnalyticsRequest">RemoveAnalyticsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremoveanalyticsrequest"></a>
<a id="schema_RemoveAnalyticsRequest"></a>
<a id="tocSremoveanalyticsrequest"></a>
<a id="tocsremoveanalyticsrequest"></a>

```json
{
  "analyticsPropertyId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analyticsPropertyId|string|false|none|Optional. The ID of the Google Analytics property associated with the specified `FirebaseProject`. - If not set, then the Google Analytics property that is currently associated with the specified `FirebaseProject` is removed. - If set, and the specified `FirebaseProject` is currently associated with a *different* Google Analytics property, then the response is a `412 Precondition Failed` error. |

<h2 id="tocS_RemoveAndroidAppRequest">RemoveAndroidAppRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremoveandroidapprequest"></a>
<a id="schema_RemoveAndroidAppRequest"></a>
<a id="tocSremoveandroidapprequest"></a>
<a id="tocsremoveandroidapprequest"></a>

```json
{
  "allowMissing": true,
  "etag": "string",
  "immediate": true,
  "validateOnly": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowMissing|boolean|false|none|If set to true, and the App is not found, the request will succeed but no action will be taken on the server.|
|etag|string|false|none|Checksum provided in the AndroidApp resource. If provided, this checksum ensures that the client has an up-to-date value before proceeding.|
|immediate|boolean|false|none|Determines whether to _immediately_ delete the AndroidApp. If set to true, the App is immediately deleted from the Project and cannot be restored to the Project. If not set, defaults to false, which means the App will be set to expire in 30 days. Within the 30 days, the App may be restored to the Project using UndeleteAndroidApp.|
|validateOnly|boolean|false|none|If set to true, the request is only validated. The App will _not_ be removed.|

<h2 id="tocS_RemoveIosAppRequest">RemoveIosAppRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremoveiosapprequest"></a>
<a id="schema_RemoveIosAppRequest"></a>
<a id="tocSremoveiosapprequest"></a>
<a id="tocsremoveiosapprequest"></a>

```json
{
  "allowMissing": true,
  "etag": "string",
  "immediate": true,
  "validateOnly": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowMissing|boolean|false|none|If set to true, and the App is not found, the request will succeed but no action will be taken on the server.|
|etag|string|false|none|Checksum provided in the IosApp resource. If provided, this checksum ensures that the client has an up-to-date value before proceeding.|
|immediate|boolean|false|none|Determines whether to _immediately_ delete the IosApp. If set to true, the App is immediately deleted from the Project and cannot be restored to the Project. If not set, defaults to false, which means the App will be set to expire in 30 days. Within the 30 days, the App may be restored to the Project using UndeleteIosApp|
|validateOnly|boolean|false|none|If set to true, the request is only validated. The App will _not_ be removed.|

<h2 id="tocS_RemoveWebAppRequest">RemoveWebAppRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremovewebapprequest"></a>
<a id="schema_RemoveWebAppRequest"></a>
<a id="tocSremovewebapprequest"></a>
<a id="tocsremovewebapprequest"></a>

```json
{
  "allowMissing": true,
  "etag": "string",
  "immediate": true,
  "validateOnly": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowMissing|boolean|false|none|If set to true, and the App is not found, the request will succeed but no action will be taken on the server.|
|etag|string|false|none|Checksum provided in the WebApp resource. If provided, this checksum ensures that the client has an up-to-date value before proceeding.|
|immediate|boolean|false|none|Determines whether to _immediately_ delete the WebApp. If set to true, the App is immediately deleted from the Project and cannot be restored to the Project. If not set, defaults to false, which means the App will be set to expire in 30 days. Within the 30 days, the App may be restored to the Project using UndeleteWebApp|
|validateOnly|boolean|false|none|If set to true, the request is only validated. The App will _not_ be removed.|

<h2 id="tocS_SearchFirebaseAppsResponse">SearchFirebaseAppsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchfirebaseappsresponse"></a>
<a id="schema_SearchFirebaseAppsResponse"></a>
<a id="tocSsearchfirebaseappsresponse"></a>
<a id="tocssearchfirebaseappsresponse"></a>

```json
{
  "apps": [
    {
      "apiKeyId": "string",
      "appId": "string",
      "displayName": "string",
      "expireTime": "string",
      "name": "string",
      "namespace": "string",
      "platform": "PLATFORM_UNSPECIFIED",
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apps|[[FirebaseAppInfo](#schemafirebaseappinfo)]|false|none|One page of results from a call to `SearchFirebaseApps`.|
|nextPageToken|string|false|none|If the result list is too large to fit in a single response, then a token is returned. This token can be used in a subsequent calls to `SearchFirebaseApps` to find the next group of Apps. Page tokens are short-lived and should not be persisted.|

<h2 id="tocS_ShaCertificate">ShaCertificate</h2>
<!-- backwards compatibility -->
<a id="schemashacertificate"></a>
<a id="schema_ShaCertificate"></a>
<a id="tocSshacertificate"></a>
<a id="tocsshacertificate"></a>

```json
{
  "certType": "SHA_CERTIFICATE_TYPE_UNSPECIFIED",
  "name": "string",
  "shaHash": "string"
}
```

A SHA-1 or SHA-256 certificate associated with the AndroidApp.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certType|string|false|none|The type of SHA certificate encoded in the hash.|
|name|string|false|none|The resource name of the ShaCertificate for the AndroidApp, in the format: projects/PROJECT_IDENTIFIER/androidApps/APP_ID/sha/SHA_HASH * PROJECT_IDENTIFIER: the parent Project's [`ProjectNumber`](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`. * APP_ID: the globally unique, Firebase-assigned identifier for the App (see [`appId`](../projects.androidApps#AndroidApp.FIELDS.app_id)). * SHA_HASH: the certificate hash for the App (see [`shaHash`](../projects.androidApps.sha#ShaCertificate.FIELDS.sha_hash)).|
|shaHash|string|false|none|The certificate hash for the `AndroidApp`.|

#### Enumerated Values

|Property|Value|
|---|---|
|certType|SHA_CERTIFICATE_TYPE_UNSPECIFIED|
|certType|SHA_1|
|certType|SHA_256|

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

<h2 id="tocS_StatusProto">StatusProto</h2>
<!-- backwards compatibility -->
<a id="schemastatusproto"></a>
<a id="schema_StatusProto"></a>
<a id="tocSstatusproto"></a>
<a id="tocsstatusproto"></a>

```json
{
  "canonicalCode": 0,
  "code": 0,
  "message": "string",
  "messageSet": {},
  "space": "string"
}
```

Wire-format for a Status object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canonicalCode|integer(int32)|false|none|The canonical error code (see codes.proto) that most closely corresponds to this status. This may be missing, and in the common case of the generic space, it definitely will be.|
|code|integer(int32)|false|none|Numeric code drawn from the space specified below. Often, this is the canonical error space, and code is drawn from google3/util/task/codes.proto|
|message|string|false|none|Detail message|
|messageSet|[MessageSet](#schemamessageset)|false|none|message_set associates an arbitrary proto message with the status.|
|space|string|false|none|The following are usually only present when code != 0 Space to which this status belongs|

<h2 id="tocS_StreamMapping">StreamMapping</h2>
<!-- backwards compatibility -->
<a id="schemastreammapping"></a>
<a id="schema_StreamMapping"></a>
<a id="tocSstreammapping"></a>
<a id="tocsstreammapping"></a>

```json
{
  "app": "string",
  "measurementId": "string",
  "streamId": "string"
}
```

A mapping of a Firebase App to a Google Analytics data stream

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app|string|false|none|The resource name of the Firebase App associated with the Google Analytics data stream, in the format: projects/PROJECT_IDENTIFIER/androidApps/APP_ID or projects/PROJECT_IDENTIFIER/iosApps/APP_ID or projects/PROJECT_IDENTIFIER /webApps/APP_ID Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.|
|measurementId|string|false|none|Applicable for Firebase Web Apps only. The unique Google-assigned identifier of the Google Analytics web stream associated with the Firebase Web App. Firebase SDKs use this ID to interact with Google Analytics APIs. Learn more about this ID and Google Analytics web streams in the [Analytics documentation](https://support.google.com/analytics/answer/9304153).|
|streamId|string(int64)|false|none|The unique Google-assigned identifier of the Google Analytics data stream associated with the Firebase App. Learn more about Google Analytics data streams in the [Analytics documentation](https://support.google.com/analytics/answer/9303323).|

<h2 id="tocS_UndeleteAndroidAppRequest">UndeleteAndroidAppRequest</h2>
<!-- backwards compatibility -->
<a id="schemaundeleteandroidapprequest"></a>
<a id="schema_UndeleteAndroidAppRequest"></a>
<a id="tocSundeleteandroidapprequest"></a>
<a id="tocsundeleteandroidapprequest"></a>

```json
{
  "etag": "string",
  "validateOnly": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Checksum provided in the AndroidApp resource. If provided, this checksum ensures that the client has an up-to-date value before proceeding.|
|validateOnly|boolean|false|none|If set to true, the request is only validated. The App will _not_ be undeleted.|

<h2 id="tocS_UndeleteIosAppRequest">UndeleteIosAppRequest</h2>
<!-- backwards compatibility -->
<a id="schemaundeleteiosapprequest"></a>
<a id="schema_UndeleteIosAppRequest"></a>
<a id="tocSundeleteiosapprequest"></a>
<a id="tocsundeleteiosapprequest"></a>

```json
{
  "etag": "string",
  "validateOnly": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Checksum provided in the IosApp resource. If provided, this checksum ensures that the client has an up-to-date value before proceeding.|
|validateOnly|boolean|false|none|If set to true, the request is only validated. The App will _not_ be undeleted.|

<h2 id="tocS_UndeleteWebAppRequest">UndeleteWebAppRequest</h2>
<!-- backwards compatibility -->
<a id="schemaundeletewebapprequest"></a>
<a id="schema_UndeleteWebAppRequest"></a>
<a id="tocSundeletewebapprequest"></a>
<a id="tocsundeletewebapprequest"></a>

```json
{
  "etag": "string",
  "validateOnly": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Checksum provided in the WebApp resource. If provided, this checksum ensures that the client has an up-to-date value before proceeding.|
|validateOnly|boolean|false|none|If set to true, the request is only validated. The App will _not_ be undeleted.|

<h2 id="tocS_WebApp">WebApp</h2>
<!-- backwards compatibility -->
<a id="schemawebapp"></a>
<a id="schema_WebApp"></a>
<a id="tocSwebapp"></a>
<a id="tocswebapp"></a>

```json
{
  "apiKeyId": "string",
  "appId": "string",
  "appUrls": [
    "string"
  ],
  "displayName": "string",
  "etag": "string",
  "expireTime": "string",
  "name": "string",
  "projectId": "string",
  "state": "STATE_UNSPECIFIED",
  "webId": "string"
}
```

Details of a Firebase App for the web.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKeyId|string|false|none|The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the `WebApp`. Be aware that this value is the UID of the API key, _not_ the [`keyString`](https://cloud.google.com/api-keys/docs/reference/rest/v2/projects.locations.keys#Key.FIELDS.key_string) of the API key. The `keyString` is the value that can be found in the App's [configuration artifact](../../rest/v1beta1/projects.webApps/getConfig). If `api_key_id` is not set in requests to [`webApps.Create`](../../rest/v1beta1/projects.webApps/create), then Firebase automatically associates an `api_key_id` with the `WebApp`. This auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned. In patch requests, `api_key_id` cannot be set to an empty value, and the new UID must have no restrictions or only have restrictions that are valid for the associated `WebApp`. We recommend using the [Google Cloud Console](https://console.cloud.google.com/apis/credentials) to manage API keys.|
|appId|string|false|read-only|Output only. Immutable. The globally unique, Firebase-assigned identifier for the `WebApp`. This identifier should be treated as an opaque token, as the data format is not specified.|
|appUrls|[string]|false|none|The URLs where the `WebApp` is hosted.|
|displayName|string|false|none|The user-assigned display name for the `WebApp`.|
|etag|string|false|none|This checksum is computed by the server based on the value of other fields, and it may be sent with update requests to ensure the client has an up-to-date value before proceeding. Learn more about `etag` in Google's [AIP-154 standard](https://google.aip.dev/154#declarative-friendly-resources). This etag is strongly validated.|
|expireTime|string(google-datetime)|false|read-only|Output only. Timestamp of when the App will be considered expired and cannot be undeleted. This value is only provided if the App is in the `DELETED` state.|
|name|string|false|none|The resource name of the WebApp, in the format: projects/PROJECT_IDENTIFIER /webApps/APP_ID * PROJECT_IDENTIFIER: the parent Project's [`ProjectNumber`](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`. * APP_ID: the globally unique, Firebase-assigned identifier for the App (see [`appId`](../projects.webApps#WebApp.FIELDS.app_id)).|
|projectId|string|false|read-only|Output only. Immutable. A user-assigned unique identifier of the parent FirebaseProject for the `WebApp`.|
|state|string|false|read-only|Output only. The lifecycle state of the App.|
|webId|string|false|read-only|**Deprecated.** Output only. Immutable. A unique, Firebase-assigned identifier for the `WebApp`. This identifier is only used to populate the `namespace` value for the `WebApp`. For most use cases, use `appId` to identify or reference the App. The `webId` value is only unique within a `FirebaseProject` and its associated Apps.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|ACTIVE|
|state|DELETED|

<h2 id="tocS_WebAppConfig">WebAppConfig</h2>
<!-- backwards compatibility -->
<a id="schemawebappconfig"></a>
<a id="schema_WebAppConfig"></a>
<a id="tocSwebappconfig"></a>
<a id="tocswebappconfig"></a>

```json
{
  "apiKey": "string",
  "appId": "string",
  "authDomain": "string",
  "databaseURL": "string",
  "locationId": "string",
  "measurementId": "string",
  "messagingSenderId": "string",
  "projectId": "string",
  "storageBucket": "string"
}
```

Configuration metadata of a single Firebase App for the web.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKey|string|false|none|The [`keyString`](https://cloud.google.com/api-keys/docs/reference/rest/v2/projects.locations.keys#Key.FIELDS.key_string) of the API key associated with the `WebApp`. Note that this value is _not_ the [`apiKeyId`](../projects.webApps#WebApp.FIELDS.api_key_id) (the UID) of the API key associated with the `WebApp`.|
|appId|string|false|none|Immutable. The globally unique, Firebase-assigned identifier for the `WebApp`.|
|authDomain|string|false|none|The domain Firebase Auth configures for OAuth redirects, in the format: PROJECT_ID.firebaseapp.com|
|databaseURL|string|false|none|**Deprecated.** **DEPRECATED.** _Instead, find the default Firebase Realtime Database instance name using the [list endpoint](https://firebase.google.com/docs/reference/rest/database/database-management/rest/v1beta/projects.locations.instances/list) within the Firebase Realtime Database REST API. Note that the default instance for the Project might not yet be provisioned, so the return might not contain a default instance._ The default Firebase Realtime Database URL.|
|locationId|string|false|none|**Deprecated.** **DEPRECATED.** _Instead, use product-specific REST APIs to find the location of resources._ The ID of the Project's default GCP resource location. The location is one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). This field is omitted if the default GCP resource location has not been finalized yet. To set a Project's default GCP resource location, call [`FinalizeDefaultLocation`](../projects.defaultLocation/finalize) after you add Firebase resources to the Project.|
|measurementId|string|false|none|The unique Google-assigned identifier of the Google Analytics web stream associated with the `WebApp`. Firebase SDKs use this ID to interact with Google Analytics APIs. This field is only present if the `WebApp` is linked to a web stream in a Google Analytics App + Web property. Learn more about this ID and Google Analytics web streams in the [Analytics documentation](https://support.google.com/analytics/answer/9304153). To generate a `measurementId` and link the `WebApp` with a Google Analytics web stream, call [`AddGoogleAnalytics`](../../v1beta1/projects/addGoogleAnalytics). For apps using the Firebase JavaScript SDK v7.20.0 and later, Firebase dynamically fetches the `measurementId` when your app initializes Analytics. Having this ID in your config object is optional, but it does serve as a fallback in the rare case that the dynamic fetch fails.|
|messagingSenderId|string|false|none|The sender ID for use with Firebase Cloud Messaging.|
|projectId|string|false|none|Immutable. A user-assigned unique identifier for the `FirebaseProject`.|
|storageBucket|string|false|none|**Deprecated.** **DEPRECATED.** _Instead, find the default Cloud Storage for Firebase bucket using the [list endpoint](https://firebase.google.com/docs/reference/rest/storage/rest/v1beta/projects.buckets/list) within the Cloud Storage for Firebase REST API. Note that the default bucket for the Project might not yet be provisioned, so the return might not contain a default bucket._ The default Cloud Storage for Firebase storage bucket name.|
