<h1 id="firebase-rules-api">Firebase Rules API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Creates and manages rules that determine when a Firebase Rules-enabled service should permit a request.

Base URLs:

* <a href="https://firebaserules.googleapis.com/">https://firebaserules.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://firebase.google.com/docs/storage/security">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/firebase|View and administer all your Firebase data and settings|
|https://www.googleapis.com/auth/firebase.readonly|View all your Firebase data and settings|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/firebase|View and administer all your Firebase data and settings|
|https://www.googleapis.com/auth/firebase.readonly|View all your Firebase data and settings|

<h1 id="firebase-rules-api-projects">projects</h1>

## firebaserules.projects.rulesets.get

<a id="opIdfirebaserules.projects.rulesets.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Get a `Ruleset` by name including the full `Source` contents.

<h3 id="firebaserulesprojectsrulesetsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Resource name for the ruleset to get. Format: `projects/{project_id}/rulesets/{ruleset_id}`|
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
  "createTime": "string",
  "metadata": {
    "services": [
      "string"
    ]
  },
  "name": "string",
  "source": {
    "files": [
      {
        "content": "string",
        "fingerprint": "string",
        "name": "string"
      }
    ]
  }
}
```

<h3 id="firebaserulesprojectsrulesetsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Ruleset](#schemaruleset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase.readonly )
</aside>

## firebaserules.projects.rulesets.delete

<a id="opIdfirebaserules.projects.rulesets.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{name}`

Delete a `Ruleset` by resource name. If the `Ruleset` is referenced by a `Release` the operation will fail.

<h3 id="firebaserulesprojectsrulesetsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Resource name for the ruleset to delete. Format: `projects/{project_id}/rulesets/{ruleset_id}`|
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

<h3 id="firebaserulesprojectsrulesetsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebaserules.projects.releases.patch

<a id="opIdfirebaserules.projects.releases.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "release": {
      "name": "string",
      "rulesetName": "string"
    },
    "updateMask": "string"
  }'
```

`PATCH /v1/{name}`

Update a `Release` via PATCH. Only updates to `ruleset_name` will be honored. `Release` rename is not supported. To create a `Release` use the CreateRelease method.

> Body parameter

```json
{
  "release": {
    "name": "string",
    "rulesetName": "string"
  },
  "updateMask": "string"
}
```

<h3 id="firebaserulesprojectsreleasespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Resource name for the project which owns this `Release`. Format: `projects/{project_id}`|
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
|body|body|[UpdateReleaseRequest](#schemaupdatereleaserequest)|false|none|
|» release|body|[Release](#schemarelease)|false|Required. `Release` to update.|
|» updateMask|body|string(google-fieldmask)|false|Specifies which fields to update.|

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
  "createTime": "string",
  "name": "string",
  "rulesetName": "string",
  "updateTime": "string"
}
```

<h3 id="firebaserulesprojectsreleasespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Release](#schemarelease)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebaserules.projects.releases.list

<a id="opIdfirebaserules.projects.releases.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/releases \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/releases`

List the `Release` values for a project. This list may optionally be filtered by `Release` name, `Ruleset` name, `TestSuite` name, or any combination thereof.

<h3 id="firebaserulesprojectsreleaseslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Resource name for the project. Format: `projects/{project_id}`|
|filter|query|string|false|`Release` filter. The list method supports filters with restrictions on the `Release.name`, and `Release.ruleset_name`. Example 1: A filter of 'name=prod*' might return `Release`s with names within 'projects/foo' prefixed with 'prod': Name -> Ruleset Name: * projects/foo/releases/prod -> projects/foo/rulesets/uuid1234 * projects/foo/releases/prod/v1 -> projects/foo/rulesets/uuid1234 * projects/foo/releases/prod/v2 -> projects/foo/rulesets/uuid8888 Example 2: A filter of `name=prod* ruleset_name=uuid1234` would return only `Release` instances for 'projects/foo' with names prefixed with 'prod' referring to the same `Ruleset` name of 'uuid1234': Name -> Ruleset Name: * projects/foo/releases/prod -> projects/foo/rulesets/1234 * projects/foo/releases/prod/v1 -> projects/foo/rulesets/1234 In the examples, the filter parameters refer to the search filters are relative to the project. Fully qualified prefixed may also be used.|
|pageSize|query|integer|false|Page size to load. Maximum of 100. Defaults to 10. Note: `page_size` is just a hint and the service may choose to load fewer than `page_size` results due to the size of the output. To traverse all of the releases, the caller should iterate until the `page_token` on the response is empty.|
|pageToken|query|string|false|Next page token for the next batch of `Release` instances.|
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
  "releases": [
    {
      "createTime": "string",
      "name": "string",
      "rulesetName": "string",
      "updateTime": "string"
    }
  ]
}
```

<h3 id="firebaserulesprojectsreleaseslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListReleasesResponse](#schemalistreleasesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase.readonly )
</aside>

## firebaserules.projects.releases.create

<a id="opIdfirebaserules.projects.releases.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/releases \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "rulesetName": "string"
  }'
```

`POST /v1/{name}/releases`

Create a `Release`. Release names should reflect the developer's deployment practices. For example, the release name may include the environment name, application name, application version, or any other name meaningful to the developer. Once a `Release` refers to a `Ruleset`, the rules can be enforced by Firebase Rules-enabled services. More than one `Release` may be 'live' concurrently. Consider the following three `Release` names for `projects/foo` and the `Ruleset` to which they refer. Release Name -> Ruleset Name * projects/foo/releases/prod -> projects/foo/rulesets/uuid123 * projects/foo/releases/prod/beta -> projects/foo/rulesets/uuid123 * projects/foo/releases/prod/v23 -> projects/foo/rulesets/uuid456 The relationships reflect a `Ruleset` rollout in progress. The `prod` and `prod/beta` releases refer to the same `Ruleset`. However, `prod/v23` refers to a new `Ruleset`. The `Ruleset` reference for a `Release` may be updated using the UpdateRelease method.

> Body parameter

```json
{
  "name": "string",
  "rulesetName": "string"
}
```

<h3 id="firebaserulesprojectsreleasescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Resource name for the project which owns this `Release`. Format: `projects/{project_id}`|
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
|body|body|[Release](#schemarelease)|false|none|
|» name|body|string|false|Required. Format: `projects/{project_id}/releases/{release_id}`|
|» rulesetName|body|string|false|Required. Name of the `Ruleset` referred to by this `Release`. The `Ruleset` must exist for the `Release` to be created.|

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
  "createTime": "string",
  "name": "string",
  "rulesetName": "string",
  "updateTime": "string"
}
```

<h3 id="firebaserulesprojectsreleasescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Release](#schemarelease)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebaserules.projects.rulesets.list

<a id="opIdfirebaserules.projects.rulesets.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/rulesets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/rulesets`

List `Ruleset` metadata only and optionally filter the results by `Ruleset` name. The full `Source` contents of a `Ruleset` may be retrieved with GetRuleset.

<h3 id="firebaserulesprojectsrulesetslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Resource name for the project. Format: `projects/{project_id}`|
|filter|query|string|false|`Ruleset` filter. The list method supports filters with restrictions on `Ruleset.name`. Filters on `Ruleset.create_time` should use the `date` function which parses strings that conform to the RFC 3339 date/time specifications. Example: `create_time > date("2017-01-01T00:00:00Z") AND name=UUID-*`|
|pageSize|query|integer|false|Page size to load. Maximum of 100. Defaults to 10. Note: `page_size` is just a hint and the service may choose to load less than `page_size` due to the size of the output. To traverse all of the releases, caller should iterate until the `page_token` is empty.|
|pageToken|query|string|false|Next page token for loading the next batch of `Ruleset` instances.|
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
  "rulesets": [
    {
      "createTime": "string",
      "metadata": {
        "services": [
          "string"
        ]
      },
      "name": "string",
      "source": {
        "files": [
          {
            "content": "string",
            "fingerprint": "string",
            "name": "string"
          }
        ]
      }
    }
  ]
}
```

<h3 id="firebaserulesprojectsrulesetslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListRulesetsResponse](#schemalistrulesetsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase.readonly )
</aside>

## firebaserules.projects.rulesets.create

<a id="opIdfirebaserules.projects.rulesets.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/rulesets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "source": {
      "files": [
        {
          "content": "string",
          "fingerprint": "string",
          "name": "string"
        }
      ]
    }
  }'
```

`POST /v1/{name}/rulesets`

Create a `Ruleset` from `Source`. The `Ruleset` is given a unique generated name which is returned to the caller. `Source` containing syntactic or semantics errors will result in an error response indicating the first error encountered. For a detailed view of `Source` issues, use TestRuleset.

> Body parameter

```json
{
  "source": {
    "files": [
      {
        "content": "string",
        "fingerprint": "string",
        "name": "string"
      }
    ]
  }
}
```

<h3 id="firebaserulesprojectsrulesetscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Resource name for Project which owns this `Ruleset`. Format: `projects/{project_id}`|
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
|body|body|[Ruleset](#schemaruleset)|false|none|
|» source|body|[Source](#schemasource)|false|Required. `Source` for the `Ruleset`.|

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
  "createTime": "string",
  "metadata": {
    "services": [
      "string"
    ]
  },
  "name": "string",
  "source": {
    "files": [
      {
        "content": "string",
        "fingerprint": "string",
        "name": "string"
      }
    ]
  }
}
```

<h3 id="firebaserulesprojectsrulesetscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Ruleset](#schemaruleset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase )
</aside>

## firebaserules.projects.releases.getExecutable

<a id="opIdfirebaserules.projects.releases.getExecutable"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:getExecutable \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}:getExecutable`

Get the `Release` executable to use when enforcing rules.

<h3 id="firebaserulesprojectsreleasesgetexecutable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Resource name of the `Release`. Format: `projects/{project_id}/releases/{release_id}`|
|executableVersion|query|string|false|The requested runtime executable version. Defaults to FIREBASE_RULES_EXECUTABLE_V1.|
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
|executableVersion|RELEASE_EXECUTABLE_VERSION_UNSPECIFIED|
|executableVersion|FIREBASE_RULES_EXECUTABLE_V1|
|executableVersion|FIREBASE_RULES_EXECUTABLE_V2|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "executable": "string",
  "executableVersion": "RELEASE_EXECUTABLE_VERSION_UNSPECIFIED",
  "language": "LANGUAGE_UNSPECIFIED",
  "rulesetName": "string",
  "syncTime": "string",
  "updateTime": "string"
}
```

<h3 id="firebaserulesprojectsreleasesgetexecutable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GetReleaseExecutableResponse](#schemagetreleaseexecutableresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase.readonly )
</aside>

## firebaserules.projects.test

<a id="opIdfirebaserules.projects.test"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:test \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "source": {
      "files": [
        {
          "content": "string",
          "fingerprint": "string",
          "name": "string"
        }
      ]
    },
    "testSuite": {
      "testCases": [
        {
          "expectation": "EXPECTATION_UNSPECIFIED",
          "expressionReportLevel": "LEVEL_UNSPECIFIED",
          "functionMocks": [
            {
              "args": [
                {
                  "anyValue": {},
                  "exactValue": null
                }
              ],
              "function": "string",
              "result": {
                "undefined": {},
                "value": null
              }
            }
          ],
          "pathEncoding": "ENCODING_UNSPECIFIED",
          "request": null,
          "resource": null
        }
      ]
    }
  }'
```

`POST /v1/{name}:test`

Test `Source` for syntactic and semantic correctness. Issues present, if any, will be returned to the caller with a description, severity, and source location. The test method may be executed with `Source` or a `Ruleset` name. Passing `Source` is useful for unit testing new rules. Passing a `Ruleset` name is useful for regression testing an existing rule. The following is an example of `Source` that permits users to upload images to a bucket bearing their user id and matching the correct metadata: _*Example*_ // Users are allowed to subscribe and unsubscribe to the blog. service firebase.storage { match /users/{userId}/images/{imageName} { allow write: if userId == request.auth.uid && (imageName.matches('*.png$') || imageName.matches('*.jpg$')) && resource.mimeType.matches('^image/') } }

> Body parameter

```json
{
  "source": {
    "files": [
      {
        "content": "string",
        "fingerprint": "string",
        "name": "string"
      }
    ]
  },
  "testSuite": {
    "testCases": [
      {
        "expectation": "EXPECTATION_UNSPECIFIED",
        "expressionReportLevel": "LEVEL_UNSPECIFIED",
        "functionMocks": [
          {
            "args": [
              {
                "anyValue": {},
                "exactValue": null
              }
            ],
            "function": "string",
            "result": {
              "undefined": {},
              "value": null
            }
          }
        ],
        "pathEncoding": "ENCODING_UNSPECIFIED",
        "request": null,
        "resource": null
      }
    ]
  }
}
```

<h3 id="firebaserulesprojectstest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Tests may either provide `source` or a `Ruleset` resource name. For tests against `source`, the resource name must refer to the project: Format: `projects/{project_id}` For tests against a `Ruleset`, this must be the `Ruleset` resource name: Format: `projects/{project_id}/rulesets/{ruleset_id}`|
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
|body|body|[TestRulesetRequest](#schematestrulesetrequest)|false|none|
|» source|body|[Source](#schemasource)|false|Optional `Source` to be checked for correctness. This field must not be set when the resource name refers to a `Ruleset`.|
|» testSuite|body|[TestSuite](#schematestsuite)|false|The tests to execute against the `Source`. When `Source` is provided inline, the test cases will only be run if the `Source` is syntactically and semantically valid. Inline `TestSuite` to run.|

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
  "issues": [
    {
      "description": "string",
      "severity": "SEVERITY_UNSPECIFIED",
      "sourcePosition": {
        "column": 0,
        "currentOffset": 0,
        "endOffset": 0,
        "fileName": "string",
        "line": 0
      }
    }
  ],
  "testResults": [
    {
      "debugMessages": [
        "string"
      ],
      "errorPosition": {
        "column": 0,
        "currentOffset": 0,
        "endOffset": 0,
        "fileName": "string",
        "line": 0
      },
      "expressionReports": [
        {
          "children": [
            {}
          ],
          "sourcePosition": {
            "column": 0,
            "currentOffset": 0,
            "endOffset": 0,
            "fileName": "string",
            "line": 0
          },
          "values": [
            {
              "count": 0,
              "value": null
            }
          ]
        }
      ],
      "functionCalls": [
        {
          "args": [
            null
          ],
          "function": "string"
        }
      ],
      "state": "STATE_UNSPECIFIED",
      "visitedExpressions": [
        {
          "sourcePosition": {
            "column": 0,
            "currentOffset": 0,
            "endOffset": 0,
            "fileName": "string",
            "line": 0
          },
          "value": null
        }
      ]
    }
  ]
}
```

<h3 id="firebaserulesprojectstest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TestRulesetResponse](#schematestrulesetresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase.readonly )
</aside>

# Schemas

<h2 id="tocS_Arg">Arg</h2>
<!-- backwards compatibility -->
<a id="schemaarg"></a>
<a id="schema_Arg"></a>
<a id="tocSarg"></a>
<a id="tocsarg"></a>

```json
{
  "anyValue": {},
  "exactValue": null
}
```

Arg matchers for the mock function.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|anyValue|[Empty](#schemaempty)|false|none|Argument matches any value provided.|
|exactValue|object|false|none|Argument exactly matches value provided.|

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

<h2 id="tocS_ExpressionReport">ExpressionReport</h2>
<!-- backwards compatibility -->
<a id="schemaexpressionreport"></a>
<a id="schema_ExpressionReport"></a>
<a id="tocSexpressionreport"></a>
<a id="tocsexpressionreport"></a>

```json
{
  "children": [
    {
      "children": [
        {}
      ],
      "sourcePosition": {
        "column": 0,
        "currentOffset": 0,
        "endOffset": 0,
        "fileName": "string",
        "line": 0
      },
      "values": [
        {
          "count": 0,
          "value": null
        }
      ]
    }
  ],
  "sourcePosition": {
    "column": 0,
    "currentOffset": 0,
    "endOffset": 0,
    "fileName": "string",
    "line": 0
  },
  "values": [
    {
      "count": 0,
      "value": null
    }
  ]
}
```

Describes where in a file an expression is found and what it was evaluated to over the course of its use.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|children|[[ExpressionReport](#schemaexpressionreport)]|false|none|Subexpressions|
|sourcePosition|[SourcePosition](#schemasourceposition)|false|none|Position of expression in original rules source.|
|values|[[ValueCount](#schemavaluecount)]|false|none|Values that this expression evaluated to when encountered.|

<h2 id="tocS_File">File</h2>
<!-- backwards compatibility -->
<a id="schemafile"></a>
<a id="schema_File"></a>
<a id="tocSfile"></a>
<a id="tocsfile"></a>

```json
{
  "content": "string",
  "fingerprint": "string",
  "name": "string"
}
```

`File` containing source content.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|Required. Textual Content.|
|fingerprint|string(byte)|false|none|Fingerprint (e.g. github sha) associated with the `File`.|
|name|string|false|none|Required. File name.|

<h2 id="tocS_FunctionCall">FunctionCall</h2>
<!-- backwards compatibility -->
<a id="schemafunctioncall"></a>
<a id="schema_FunctionCall"></a>
<a id="tocSfunctioncall"></a>
<a id="tocsfunctioncall"></a>

```json
{
  "args": [
    null
  ],
  "function": "string"
}
```

Represents a service-defined function call that was invoked during test execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|args|[object]|false|none|The arguments that were provided to the function.|
|function|string|false|none|Name of the function invoked.|

<h2 id="tocS_FunctionMock">FunctionMock</h2>
<!-- backwards compatibility -->
<a id="schemafunctionmock"></a>
<a id="schema_FunctionMock"></a>
<a id="tocSfunctionmock"></a>
<a id="tocsfunctionmock"></a>

```json
{
  "args": [
    {
      "anyValue": {},
      "exactValue": null
    }
  ],
  "function": "string",
  "result": {
    "undefined": {},
    "value": null
  }
}
```

Mock function definition. Mocks must refer to a function declared by the target service. The type of the function args and result will be inferred at test time. If either the arg or result values are not compatible with function type declaration, the request will be considered invalid. More than one `FunctionMock` may be provided for a given function name so long as the `Arg` matchers are distinct. There may be only one function for a given overload where all `Arg` values are `Arg.any_value`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|args|[[Arg](#schemaarg)]|false|none|The list of `Arg` values to match. The order in which the arguments are provided is the order in which they must appear in the function invocation.|
|function|string|false|none|The name of the function. The function name must match one provided by a service declaration.|
|result|[Result](#schemaresult)|false|none|The mock result of the function call.|

<h2 id="tocS_GetReleaseExecutableResponse">GetReleaseExecutableResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetreleaseexecutableresponse"></a>
<a id="schema_GetReleaseExecutableResponse"></a>
<a id="tocSgetreleaseexecutableresponse"></a>
<a id="tocsgetreleaseexecutableresponse"></a>

```json
{
  "executable": "string",
  "executableVersion": "RELEASE_EXECUTABLE_VERSION_UNSPECIFIED",
  "language": "LANGUAGE_UNSPECIFIED",
  "rulesetName": "string",
  "syncTime": "string",
  "updateTime": "string"
}
```

The response for FirebaseRulesService.GetReleaseExecutable

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|executable|string(byte)|false|none|Executable view of the `Ruleset` referenced by the `Release`.|
|executableVersion|string|false|none|The Rules runtime version of the executable.|
|language|string|false|none|`Language` used to generate the executable bytes.|
|rulesetName|string|false|none|`Ruleset` name associated with the `Release` executable.|
|syncTime|string(google-datetime)|false|none|Optional, indicates the freshness of the result. The response is guaranteed to be the latest within an interval up to the sync_time (inclusive).|
|updateTime|string(google-datetime)|false|none|Timestamp for the most recent `Release.update_time`.|

#### Enumerated Values

|Property|Value|
|---|---|
|executableVersion|RELEASE_EXECUTABLE_VERSION_UNSPECIFIED|
|executableVersion|FIREBASE_RULES_EXECUTABLE_V1|
|executableVersion|FIREBASE_RULES_EXECUTABLE_V2|
|language|LANGUAGE_UNSPECIFIED|
|language|FIREBASE_RULES|
|language|EVENT_FLOW_TRIGGERS|

<h2 id="tocS_Issue">Issue</h2>
<!-- backwards compatibility -->
<a id="schemaissue"></a>
<a id="schema_Issue"></a>
<a id="tocSissue"></a>
<a id="tocsissue"></a>

```json
{
  "description": "string",
  "severity": "SEVERITY_UNSPECIFIED",
  "sourcePosition": {
    "column": 0,
    "currentOffset": 0,
    "endOffset": 0,
    "fileName": "string",
    "line": 0
  }
}
```

Issues include warnings, errors, and deprecation notices.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Short error description.|
|severity|string|false|none|The severity of the issue.|
|sourcePosition|[SourcePosition](#schemasourceposition)|false|none|Position of the issue in the `Source`.|

#### Enumerated Values

|Property|Value|
|---|---|
|severity|SEVERITY_UNSPECIFIED|
|severity|DEPRECATION|
|severity|WARNING|
|severity|ERROR|

<h2 id="tocS_ListReleasesResponse">ListReleasesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistreleasesresponse"></a>
<a id="schema_ListReleasesResponse"></a>
<a id="tocSlistreleasesresponse"></a>
<a id="tocslistreleasesresponse"></a>

```json
{
  "nextPageToken": "string",
  "releases": [
    {
      "createTime": "string",
      "name": "string",
      "rulesetName": "string",
      "updateTime": "string"
    }
  ]
}
```

The response for FirebaseRulesService.ListReleases.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The pagination token to retrieve the next page of results. If the value is empty, no further results remain.|
|releases|[[Release](#schemarelease)]|false|none|List of `Release` instances.|

<h2 id="tocS_ListRulesetsResponse">ListRulesetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistrulesetsresponse"></a>
<a id="schema_ListRulesetsResponse"></a>
<a id="tocSlistrulesetsresponse"></a>
<a id="tocslistrulesetsresponse"></a>

```json
{
  "nextPageToken": "string",
  "rulesets": [
    {
      "createTime": "string",
      "metadata": {
        "services": [
          "string"
        ]
      },
      "name": "string",
      "source": {
        "files": [
          {
            "content": "string",
            "fingerprint": "string",
            "name": "string"
          }
        ]
      }
    }
  ]
}
```

The response for FirebaseRulesService.ListRulesets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The pagination token to retrieve the next page of results. If the value is empty, no further results remain.|
|rulesets|[[Ruleset](#schemaruleset)]|false|none|List of `Ruleset` instances.|

<h2 id="tocS_Metadata">Metadata</h2>
<!-- backwards compatibility -->
<a id="schemametadata"></a>
<a id="schema_Metadata"></a>
<a id="tocSmetadata"></a>
<a id="tocsmetadata"></a>

```json
{
  "services": [
    "string"
  ]
}
```

Metadata for a Ruleset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|services|[string]|false|none|Services that this ruleset has declarations for (e.g., "cloud.firestore"). There may be 0+ of these.|

<h2 id="tocS_Release">Release</h2>
<!-- backwards compatibility -->
<a id="schemarelease"></a>
<a id="schema_Release"></a>
<a id="tocSrelease"></a>
<a id="tocsrelease"></a>

```json
{
  "createTime": "string",
  "name": "string",
  "rulesetName": "string",
  "updateTime": "string"
}
```

`Release` is a named reference to a `Ruleset`. Once a `Release` refers to a `Ruleset`, rules-enabled services will be able to enforce the `Ruleset`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. Time the release was created.|
|name|string|false|none|Required. Format: `projects/{project_id}/releases/{release_id}`|
|rulesetName|string|false|none|Required. Name of the `Ruleset` referred to by this `Release`. The `Ruleset` must exist for the `Release` to be created.|
|updateTime|string(google-datetime)|false|read-only|Output only. Time the release was updated.|

<h2 id="tocS_Result">Result</h2>
<!-- backwards compatibility -->
<a id="schemaresult"></a>
<a id="schema_Result"></a>
<a id="tocSresult"></a>
<a id="tocsresult"></a>

```json
{
  "undefined": {},
  "value": null
}
```

Possible result values from the function mock invocation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|undefined|[Empty](#schemaempty)|false|none|The result is undefined, meaning the result could not be computed.|
|value|object|false|none|The result is an actual value. The type of the value must match that of the type declared by the service.|

<h2 id="tocS_Ruleset">Ruleset</h2>
<!-- backwards compatibility -->
<a id="schemaruleset"></a>
<a id="schema_Ruleset"></a>
<a id="tocSruleset"></a>
<a id="tocsruleset"></a>

```json
{
  "createTime": "string",
  "metadata": {
    "services": [
      "string"
    ]
  },
  "name": "string",
  "source": {
    "files": [
      {
        "content": "string",
        "fingerprint": "string",
        "name": "string"
      }
    ]
  }
}
```

`Ruleset` is an immutable copy of `Source` with a globally unique identifier and a creation time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. Time the `Ruleset` was created.|
|metadata|[Metadata](#schemametadata)|false|none|Output only. The metadata for this ruleset.|
|name|string|false|read-only|Output only. Name of the `Ruleset`. The ruleset_id is auto generated by the service. Format: `projects/{project_id}/rulesets/{ruleset_id}`|
|source|[Source](#schemasource)|false|none|Required. `Source` for the `Ruleset`.|

<h2 id="tocS_Source">Source</h2>
<!-- backwards compatibility -->
<a id="schemasource"></a>
<a id="schema_Source"></a>
<a id="tocSsource"></a>
<a id="tocssource"></a>

```json
{
  "files": [
    {
      "content": "string",
      "fingerprint": "string",
      "name": "string"
    }
  ]
}
```

`Source` is one or more `File` messages comprising a logical set of rules.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|files|[[File](#schemafile)]|false|none|Required. `File` set constituting the `Source` bundle.|

<h2 id="tocS_SourcePosition">SourcePosition</h2>
<!-- backwards compatibility -->
<a id="schemasourceposition"></a>
<a id="schema_SourcePosition"></a>
<a id="tocSsourceposition"></a>
<a id="tocssourceposition"></a>

```json
{
  "column": 0,
  "currentOffset": 0,
  "endOffset": 0,
  "fileName": "string",
  "line": 0
}
```

Position in the `Source` content including its line, column number, and an index of the `File` in the `Source` message. Used for debug purposes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|column|integer(int32)|false|none|First column on the source line associated with the source fragment.|
|currentOffset|integer(int32)|false|none|Start position relative to the beginning of the file.|
|endOffset|integer(int32)|false|none|End position relative to the beginning of the file.|
|fileName|string|false|none|Name of the `File`.|
|line|integer(int32)|false|none|Line number of the source fragment. 1-based.|

<h2 id="tocS_TestCase">TestCase</h2>
<!-- backwards compatibility -->
<a id="schematestcase"></a>
<a id="schema_TestCase"></a>
<a id="tocStestcase"></a>
<a id="tocstestcase"></a>

```json
{
  "expectation": "EXPECTATION_UNSPECIFIED",
  "expressionReportLevel": "LEVEL_UNSPECIFIED",
  "functionMocks": [
    {
      "args": [
        {
          "anyValue": {},
          "exactValue": null
        }
      ],
      "function": "string",
      "result": {
        "undefined": {},
        "value": null
      }
    }
  ],
  "pathEncoding": "ENCODING_UNSPECIFIED",
  "request": null,
  "resource": null
}
```

`TestCase` messages provide the request context and an expectation as to whether the given context will be allowed or denied. Test cases may specify the `request`, `resource`, and `function_mocks` to mock a function call to a service-provided function. The `request` object represents context present at request-time. The `resource` is the value of the target resource as it appears in persistent storage before the request is executed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expectation|string|false|none|Test expectation.|
|expressionReportLevel|string|false|none|Specifies what should be included in the response.|
|functionMocks|[[FunctionMock](#schemafunctionmock)]|false|none|Optional function mocks for service-defined functions. If not set, any service defined function is expected to return an error, which may or may not influence the test outcome.|
|pathEncoding|string|false|none|Specifies whether paths (such as request.path) are encoded and how.|
|request|object|false|none|Request context. The exact format of the request context is service-dependent. See the appropriate service documentation for information about the supported fields and types on the request. Minimally, all services support the following fields and types: Request field \| Type ---------------\|----------------- auth.uid \| `string` auth.token \| `map` headers \| `map` method \| `string` params \| `map` path \| `string` time \| `google.protobuf.Timestamp` If the request value is not well-formed for the service, the request will be rejected as an invalid argument.|
|resource|object|false|none|Optional resource value as it appears in persistent storage before the request is fulfilled. The resource type depends on the `request.path` value.|

#### Enumerated Values

|Property|Value|
|---|---|
|expectation|EXPECTATION_UNSPECIFIED|
|expectation|ALLOW|
|expectation|DENY|
|expressionReportLevel|LEVEL_UNSPECIFIED|
|expressionReportLevel|NONE|
|expressionReportLevel|FULL|
|expressionReportLevel|VISITED|
|pathEncoding|ENCODING_UNSPECIFIED|
|pathEncoding|URL_ENCODED|
|pathEncoding|PLAIN|

<h2 id="tocS_TestResult">TestResult</h2>
<!-- backwards compatibility -->
<a id="schematestresult"></a>
<a id="schema_TestResult"></a>
<a id="tocStestresult"></a>
<a id="tocstestresult"></a>

```json
{
  "debugMessages": [
    "string"
  ],
  "errorPosition": {
    "column": 0,
    "currentOffset": 0,
    "endOffset": 0,
    "fileName": "string",
    "line": 0
  },
  "expressionReports": [
    {
      "children": [
        {}
      ],
      "sourcePosition": {
        "column": 0,
        "currentOffset": 0,
        "endOffset": 0,
        "fileName": "string",
        "line": 0
      },
      "values": [
        {
          "count": 0,
          "value": null
        }
      ]
    }
  ],
  "functionCalls": [
    {
      "args": [
        null
      ],
      "function": "string"
    }
  ],
  "state": "STATE_UNSPECIFIED",
  "visitedExpressions": [
    {
      "sourcePosition": {
        "column": 0,
        "currentOffset": 0,
        "endOffset": 0,
        "fileName": "string",
        "line": 0
      },
      "value": null
    }
  ]
}
```

Test result message containing the state of the test as well as a description and source position for test failures.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|debugMessages|[string]|false|none|Debug messages related to test execution issues encountered during evaluation. Debug messages may be related to too many or too few invocations of function mocks or to runtime errors that occur during evaluation. For example: ```Unable to read variable [name: "resource"]```|
|errorPosition|[SourcePosition](#schemasourceposition)|false|none|Position in the `Source` or `Ruleset` where the principle runtime error occurs. Evaluation of an expression may result in an error. Rules are deny by default, so a `DENY` expectation when an error is generated is valid. When there is a `DENY` with an error, the `SourcePosition` is returned. E.g. `error_position { line: 19 column: 37 }`|
|expressionReports|[[ExpressionReport](#schemaexpressionreport)]|false|none|The mapping from expression in the ruleset AST to the values they were evaluated to. Partially-nested to mirror AST structure. Note that this field is actually tracking expressions and not permission statements in contrast to the "visited_expressions" field above. Literal expressions are omitted.|
|functionCalls|[[FunctionCall](#schemafunctioncall)]|false|none|The set of function calls made to service-defined methods. Function calls are included in the order in which they are encountered during evaluation, are provided for both mocked and unmocked functions, and included on the response regardless of the test `state`.|
|state|string|false|none|State of the test.|
|visitedExpressions|[[VisitedExpression](#schemavisitedexpression)]|false|none|The set of visited permission expressions for a given test. This returns the positions and evaluation results of all visited permission expressions which were relevant to the test case, e.g. ``` match /path { allow read if: } ``` For a detailed report of the intermediate evaluation states, see the `expression_reports` field|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|SUCCESS|
|state|FAILURE|

<h2 id="tocS_TestRulesetRequest">TestRulesetRequest</h2>
<!-- backwards compatibility -->
<a id="schematestrulesetrequest"></a>
<a id="schema_TestRulesetRequest"></a>
<a id="tocStestrulesetrequest"></a>
<a id="tocstestrulesetrequest"></a>

```json
{
  "source": {
    "files": [
      {
        "content": "string",
        "fingerprint": "string",
        "name": "string"
      }
    ]
  },
  "testSuite": {
    "testCases": [
      {
        "expectation": "EXPECTATION_UNSPECIFIED",
        "expressionReportLevel": "LEVEL_UNSPECIFIED",
        "functionMocks": [
          {
            "args": [
              {
                "anyValue": {},
                "exactValue": null
              }
            ],
            "function": "string",
            "result": {
              "undefined": {},
              "value": null
            }
          }
        ],
        "pathEncoding": "ENCODING_UNSPECIFIED",
        "request": null,
        "resource": null
      }
    ]
  }
}
```

The request for FirebaseRulesService.TestRuleset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|[Source](#schemasource)|false|none|Optional `Source` to be checked for correctness. This field must not be set when the resource name refers to a `Ruleset`.|
|testSuite|[TestSuite](#schematestsuite)|false|none|The tests to execute against the `Source`. When `Source` is provided inline, the test cases will only be run if the `Source` is syntactically and semantically valid. Inline `TestSuite` to run.|

<h2 id="tocS_TestRulesetResponse">TestRulesetResponse</h2>
<!-- backwards compatibility -->
<a id="schematestrulesetresponse"></a>
<a id="schema_TestRulesetResponse"></a>
<a id="tocStestrulesetresponse"></a>
<a id="tocstestrulesetresponse"></a>

```json
{
  "issues": [
    {
      "description": "string",
      "severity": "SEVERITY_UNSPECIFIED",
      "sourcePosition": {
        "column": 0,
        "currentOffset": 0,
        "endOffset": 0,
        "fileName": "string",
        "line": 0
      }
    }
  ],
  "testResults": [
    {
      "debugMessages": [
        "string"
      ],
      "errorPosition": {
        "column": 0,
        "currentOffset": 0,
        "endOffset": 0,
        "fileName": "string",
        "line": 0
      },
      "expressionReports": [
        {
          "children": [
            {}
          ],
          "sourcePosition": {
            "column": 0,
            "currentOffset": 0,
            "endOffset": 0,
            "fileName": "string",
            "line": 0
          },
          "values": [
            {
              "count": 0,
              "value": null
            }
          ]
        }
      ],
      "functionCalls": [
        {
          "args": [
            null
          ],
          "function": "string"
        }
      ],
      "state": "STATE_UNSPECIFIED",
      "visitedExpressions": [
        {
          "sourcePosition": {
            "column": 0,
            "currentOffset": 0,
            "endOffset": 0,
            "fileName": "string",
            "line": 0
          },
          "value": null
        }
      ]
    }
  ]
}
```

The response for FirebaseRulesService.TestRuleset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issues|[[Issue](#schemaissue)]|false|none|Syntactic and semantic `Source` issues of varying severity. Issues of `ERROR` severity will prevent tests from executing.|
|testResults|[[TestResult](#schematestresult)]|false|none|The set of test results given the test cases in the `TestSuite`. The results will appear in the same order as the test cases appear in the `TestSuite`.|

<h2 id="tocS_TestSuite">TestSuite</h2>
<!-- backwards compatibility -->
<a id="schematestsuite"></a>
<a id="schema_TestSuite"></a>
<a id="tocStestsuite"></a>
<a id="tocstestsuite"></a>

```json
{
  "testCases": [
    {
      "expectation": "EXPECTATION_UNSPECIFIED",
      "expressionReportLevel": "LEVEL_UNSPECIFIED",
      "functionMocks": [
        {
          "args": [
            {
              "anyValue": {},
              "exactValue": null
            }
          ],
          "function": "string",
          "result": {
            "undefined": {},
            "value": null
          }
        }
      ],
      "pathEncoding": "ENCODING_UNSPECIFIED",
      "request": null,
      "resource": null
    }
  ]
}
```

`TestSuite` is a collection of `TestCase` instances that validate the logical correctness of a `Ruleset`. The `TestSuite` may be referenced in-line within a `TestRuleset` invocation or as part of a `Release` object as a pre-release check.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|testCases|[[TestCase](#schematestcase)]|false|none|Collection of test cases associated with the `TestSuite`.|

<h2 id="tocS_UpdateReleaseRequest">UpdateReleaseRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatereleaserequest"></a>
<a id="schema_UpdateReleaseRequest"></a>
<a id="tocSupdatereleaserequest"></a>
<a id="tocsupdatereleaserequest"></a>

```json
{
  "release": {
    "createTime": "string",
    "name": "string",
    "rulesetName": "string",
    "updateTime": "string"
  },
  "updateMask": "string"
}
```

The request for FirebaseRulesService.UpdateRelease.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|release|[Release](#schemarelease)|false|none|Required. `Release` to update.|
|updateMask|string(google-fieldmask)|false|none|Specifies which fields to update.|

<h2 id="tocS_ValueCount">ValueCount</h2>
<!-- backwards compatibility -->
<a id="schemavaluecount"></a>
<a id="schema_ValueCount"></a>
<a id="tocSvaluecount"></a>
<a id="tocsvaluecount"></a>

```json
{
  "count": 0,
  "value": null
}
```

Tuple for how many times an Expression was evaluated to a particular ExpressionValue.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int32)|false|none|The amount of times that expression returned.|
|value|object|false|none|The return value of the expression|

<h2 id="tocS_VisitedExpression">VisitedExpression</h2>
<!-- backwards compatibility -->
<a id="schemavisitedexpression"></a>
<a id="schema_VisitedExpression"></a>
<a id="tocSvisitedexpression"></a>
<a id="tocsvisitedexpression"></a>

```json
{
  "sourcePosition": {
    "column": 0,
    "currentOffset": 0,
    "endOffset": 0,
    "fileName": "string",
    "line": 0
  },
  "value": null
}
```

Store the position and access outcome for an expression visited in rules.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourcePosition|[SourcePosition](#schemasourceposition)|false|none|Position in the `Source` or `Ruleset` where an expression was visited.|
|value|object|false|none|The evaluated value for the visited expression, e.g. true/false|
