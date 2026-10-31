<h1 id="cloud-resource-manager-api">Cloud Resource Manager API v3</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Creates, reads, and updates metadata for Google Cloud Platform resource containers.

Base URLs:

* <a href="https://cloudresourcemanager.googleapis.com/">https://cloudresourcemanager.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/resource-manager">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/cloud-platform.read-only|View your data across Google Cloud services and see the email address of your Google Account|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/cloud-platform.read-only|View your data across Google Cloud services and see the email address of your Google Account|

<h1 id="cloud-resource-manager-api-effectivetags">effectiveTags</h1>

## cloudresourcemanager.effectiveTags.list

<a id="opIdcloudresourcemanager.effectiveTags.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/effectiveTags \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/effectiveTags`

Return a list of effective tags for the given Google Cloud resource, as specified in `parent`.

<h3 id="cloudresourcemanagereffectivetagslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageSize|query|integer|false|Optional. The maximum number of effective tags to return in the response. The server allows a maximum of 300 effective tags to return in a single page. If unspecified, the server will use 100 as the default.|
|pageToken|query|string|false|Optional. A pagination token returned from a previous call to `ListEffectiveTags` that indicates from where this listing should continue.|
|parent|query|string|false|Required. The full resource name of a resource for which you want to list the effective tags. E.g. "//cloudresourcemanager.googleapis.com/projects/123"|
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
  "effectiveTags": [
    {
      "inherited": true,
      "namespacedTagKey": "string",
      "namespacedTagValue": "string",
      "tagKey": "string",
      "tagKeyParentName": "string",
      "tagValue": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="cloudresourcemanagereffectivetagslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListEffectiveTagsResponse](#schemalisteffectivetagsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

<h1 id="cloud-resource-manager-api-folders">folders</h1>

## cloudresourcemanager.folders.list

<a id="opIdcloudresourcemanager.folders.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/folders \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/folders`

Lists the folders that are direct descendants of supplied parent resource. `list()` provides a strongly consistent view of the folders underneath the specified parent resource. `list()` returns folders sorted based upon the (ascending) lexical ordering of their display_name. The caller must have `resourcemanager.folders.list` permission on the identified parent.

<h3 id="cloudresourcemanagerfolderslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageSize|query|integer|false|Optional. The maximum number of folders to return in the response. The server can return fewer folders than requested. If unspecified, server picks an appropriate default.|
|pageToken|query|string|false|Optional. A pagination token returned from a previous call to `ListFolders` that indicates where this listing should continue from.|
|parent|query|string|false|Required. The name of the parent resource whose folders are being listed. Only children of this parent resource are listed; descendants are not listed. If the parent is a folder, use the value `folders/{folder_id}`. If the parent is an organization, use the value `organizations/{org_id}`. Access to this method is controlled by checking the `resourcemanager.folders.list` permission on the `parent`.|
|showDeleted|query|boolean|false|Optional. Controls whether folders in the DELETE_REQUESTED state should be returned. Defaults to false.|
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
  "folders": [
    {
      "createTime": "string",
      "deleteTime": "string",
      "displayName": "string",
      "etag": "string",
      "name": "string",
      "parent": "string",
      "state": "STATE_UNSPECIFIED",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="cloudresourcemanagerfolderslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListFoldersResponse](#schemalistfoldersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## cloudresourcemanager.folders.create

<a id="opIdcloudresourcemanager.folders.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/folders \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "parent": "string"
  }'
```

`POST /v3/folders`

Creates a folder in the resource hierarchy. Returns an `Operation` which can be used to track the progress of the folder creation workflow. Upon success, the `Operation.response` field will be populated with the created Folder. In order to succeed, the addition of this new folder must not violate the folder naming, height, or fanout constraints. + The folder's `display_name` must be distinct from all other folders that share its parent. + The addition of the folder must not cause the active folder hierarchy to exceed a height of 10. Note, the full active + deleted folder hierarchy is allowed to reach a height of 20; this provides additional headroom when moving folders that contain deleted folders. + The addition of the folder must not cause the total number of folders under its parent to exceed 300. If the operation fails due to a folder constraint violation, some errors may be returned by the `CreateFolder` request, with status code `FAILED_PRECONDITION` and an error description. Other folder constraint violations will be communicated in the `Operation`, with the specific `PreconditionFailure` returned in the details list in the `Operation.error` field. The caller must have `resourcemanager.folders.create` permission on the identified parent.

> Body parameter

```json
{
  "displayName": "string",
  "parent": "string"
}
```

<h3 id="cloudresourcemanagerfolderscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
|body|body|[Folder](#schemafolder)|false|none|
|» displayName|body|string|false|The folder's display name. A folder's display name must be unique amongst its siblings. For example, no two folders with the same parent can share the same display name. The display name must start and end with a letter or digit, may contain letters, digits, spaces, hyphens and underscores and can be no longer than 30 characters. This is captured by the regular expression: `[\p{L}\p{N}]([\p{L}\p{N}_- ]{0,28}[\p{L}\p{N}])?`.|
|» parent|body|string|false|Required. The folder's parent's resource name. Updates to the folder's parent must be performed using MoveFolder.|

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

<h3 id="cloudresourcemanagerfolderscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudresourcemanager.folders.search

<a id="opIdcloudresourcemanager.folders.search"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/folders:search \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/folders:search`

Search for folders that match specific filter criteria. `search()` provides an eventually consistent view of the folders a user has access to which meet the specified filter criteria. This will only return folders on which the caller has the permission `resourcemanager.folders.get`.

<h3 id="cloudresourcemanagerfolderssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageSize|query|integer|false|Optional. The maximum number of folders to return in the response. The server can return fewer folders than requested. If unspecified, server picks an appropriate default.|
|pageToken|query|string|false|Optional. A pagination token returned from a previous call to `SearchFolders` that indicates from where search should continue.|
|query|query|string|false|Optional. Search criteria used to select the folders to return. If no search criteria is specified then all accessible folders will be returned. Query expressions can be used to restrict results based upon displayName, state and parent, where the operators `=` (`:`) `NOT`, `AND` and `OR` can be used along with the suffix wildcard symbol `*`. The `displayName` field in a query expression should use escaped quotes for values that include whitespace to prevent unexpected behavior. ``` \| Field \| Description \| \|-------------------------\|----------------------------------------\| \| displayName \| Filters by displayName. \| \| parent \| Filters by parent (for example: folders/123). \| \| state, lifecycleState \| Filters by state. \| ``` Some example queries are: * Query `displayName=Test*` returns Folder resources whose display name starts with "Test". * Query `state=ACTIVE` returns Folder resources with `state` set to `ACTIVE`. * Query `parent=folders/123` returns Folder resources that have `folders/123` as a parent resource. * Query `parent=folders/123 AND state=ACTIVE` returns active Folder resources that have `folders/123` as a parent resource. * Query `displayName=\\"Test String\\"` returns Folder resources with display names that include both "Test" and "String".|
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
  "folders": [
    {
      "createTime": "string",
      "deleteTime": "string",
      "displayName": "string",
      "etag": "string",
      "name": "string",
      "parent": "string",
      "state": "STATE_UNSPECIFIED",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="cloudresourcemanagerfolderssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SearchFoldersResponse](#schemasearchfoldersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

<h1 id="cloud-resource-manager-api-liens">liens</h1>

## cloudresourcemanager.liens.list

<a id="opIdcloudresourcemanager.liens.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/liens \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/liens`

List all Liens applied to the `parent` resource. Callers of this method will require permission on the `parent` resource. For example, a Lien with a `parent` of `projects/1234` requires permission `resourcemanager.projects.get`.

<h3 id="cloudresourcemanagerlienslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageSize|query|integer|false|The maximum number of items to return. This is a suggestion for the server. The server can return fewer liens than requested. If unspecified, server picks an appropriate default.|
|pageToken|query|string|false|The `next_page_token` value returned from a previous List request, if any.|
|parent|query|string|false|Required. The name of the resource to list all attached Liens. For example, `projects/1234`. (google.api.field_policy).resource_type annotation is not set since the parent depends on the meta api implementation. This field could be a project or other sub project resources.|
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
  "liens": [
    {
      "createTime": "string",
      "name": "string",
      "origin": "string",
      "parent": "string",
      "reason": "string",
      "restrictions": [
        "string"
      ]
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="cloudresourcemanagerlienslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLiensResponse](#schemalistliensresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## cloudresourcemanager.liens.create

<a id="opIdcloudresourcemanager.liens.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/liens \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "createTime": "string",
    "name": "string",
    "origin": "string",
    "parent": "string",
    "reason": "string",
    "restrictions": [
      "string"
    ]
  }'
```

`POST /v3/liens`

Create a Lien which applies to the resource denoted by the `parent` field. Callers of this method will require permission on the `parent` resource. For example, applying to `projects/1234` requires permission `resourcemanager.projects.updateLiens`. NOTE: Some resources may limit the number of Liens which may be applied.

> Body parameter

```json
{
  "createTime": "string",
  "name": "string",
  "origin": "string",
  "parent": "string",
  "reason": "string",
  "restrictions": [
    "string"
  ]
}
```

<h3 id="cloudresourcemanagerlienscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
|body|body|[Lien](#schemalien)|false|none|
|» createTime|body|string(google-datetime)|false|The creation time of this Lien.|
|» name|body|string|false|A system-generated unique identifier for this Lien. Example: `liens/1234abcd`|
|» origin|body|string|false|A stable, user-visible/meaningful string identifying the origin of the Lien, intended to be inspected programmatically. Maximum length of 200 characters. Example: 'compute.googleapis.com'|
|» parent|body|string|false|A reference to the resource this Lien is attached to. The server will validate the parent against those for which Liens are supported. Example: `projects/1234`|
|» reason|body|string|false|Concise user-visible strings indicating why an action cannot be performed on a resource. Maximum length of 200 characters. Example: 'Holds production API key'|
|» restrictions|body|[string]|false|The types of operations which should be blocked as a result of this Lien. Each value should correspond to an IAM permission. The server will validate the permissions against those for which Liens are supported. An empty list is meaningless and will be rejected. Example: ['resourcemanager.projects.delete']|

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
  "origin": "string",
  "parent": "string",
  "reason": "string",
  "restrictions": [
    "string"
  ]
}
```

<h3 id="cloudresourcemanagerlienscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Lien](#schemalien)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

<h1 id="cloud-resource-manager-api-organizations">organizations</h1>

## cloudresourcemanager.organizations.search

<a id="opIdcloudresourcemanager.organizations.search"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/organizations:search \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/organizations:search`

Searches organization resources that are visible to the user and satisfy the specified filter. This method returns organizations in an unspecified order. New organizations do not necessarily appear at the end of the results, and may take a small amount of time to appear. Search will only return organizations on which the user has the permission `resourcemanager.organizations.get` or has super admin privileges.

<h3 id="cloudresourcemanagerorganizationssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageSize|query|integer|false|Optional. The maximum number of organizations to return in the response. The server can return fewer organizations than requested. If unspecified, server picks an appropriate default.|
|pageToken|query|string|false|Optional. A pagination token returned from a previous call to `SearchOrganizations` that indicates from where listing should continue.|
|query|query|string|false|Optional. An optional query string used to filter the Organizations to return in the response. Query rules are case-insensitive. ``` \| Field \| Description \| \|------------------\|--------------------------------------------\| \| directoryCustomerId, owner.directoryCustomerId \| Filters by directory customer id. \| \| domain \| Filters by domain. \| ``` Organizations may be queried by `directoryCustomerId` or by `domain`, where the domain is a G Suite domain, for example: * Query `directorycustomerid:123456789` returns Organization resources with `owner.directory_customer_id` equal to `123456789`. * Query `domain:google.com` returns Organization resources corresponding to the domain `google.com`.|
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
  "organizations": [
    {
      "createTime": "string",
      "deleteTime": "string",
      "directoryCustomerId": "string",
      "displayName": "string",
      "etag": "string",
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "updateTime": "string"
    }
  ]
}
```

<h3 id="cloudresourcemanagerorganizationssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SearchOrganizationsResponse](#schemasearchorganizationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

<h1 id="cloud-resource-manager-api-projects">projects</h1>

## cloudresourcemanager.projects.list

<a id="opIdcloudresourcemanager.projects.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/projects \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/projects`

Lists projects that are direct children of the specified folder or organization resource. `list()` provides a strongly consistent view of the projects underneath the specified parent resource. `list()` returns projects sorted based upon the (ascending) lexical ordering of their `display_name`. The caller must have `resourcemanager.projects.list` permission on the identified parent.

<h3 id="cloudresourcemanagerprojectslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageSize|query|integer|false|Optional. The maximum number of projects to return in the response. The server can return fewer projects than requested. If unspecified, server picks an appropriate default.|
|pageToken|query|string|false|Optional. A pagination token returned from a previous call to ListProjects that indicates from where listing should continue.|
|parent|query|string|false|Required. The name of the parent resource whose projects are being listed. Only children of this parent resource are listed; descendants are not listed. If the parent is a folder, use the value `folders/{folder_id}`. If the parent is an organization, use the value `organizations/{org_id}`.|
|showDeleted|query|boolean|false|Optional. Indicate that projects in the `DELETE_REQUESTED` state should also be returned. Normally only `ACTIVE` projects are returned.|
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
  "projects": [
    {
      "createTime": "string",
      "deleteTime": "string",
      "displayName": "string",
      "etag": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "parent": "string",
      "projectId": "string",
      "state": "STATE_UNSPECIFIED",
      "updateTime": "string"
    }
  ]
}
```

<h3 id="cloudresourcemanagerprojectslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListProjectsResponse](#schemalistprojectsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## cloudresourcemanager.projects.create

<a id="opIdcloudresourcemanager.projects.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/projects \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "parent": "string",
    "projectId": "string"
  }'
```

`POST /v3/projects`

Request that a new project be created. The result is an `Operation` which can be used to track the creation process. This process usually takes a few seconds, but can sometimes take much longer. The tracking `Operation` is automatically deleted after a few hours, so there is no need to call `DeleteOperation`.

> Body parameter

```json
{
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "parent": "string",
  "projectId": "string"
}
```

<h3 id="cloudresourcemanagerprojectscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
|body|body|[Project](#schemaproject)|false|none|
|» displayName|body|string|false|Optional. A user-assigned display name of the project. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, single-quote, double-quote, space, and exclamation point. Example: `My Project`|
|» labels|body|object|false|Optional. The labels associated with this project. Label keys must be between 1 and 63 characters long and must conform to the following regular expression: \[a-z\](\[-a-z0-9\]*\[a-z0-9\])?. Label values must be between 0 and 63 characters long and must conform to the regular expression (\[a-z\](\[-a-z0-9\]*\[a-z0-9\])?)?. No more than 64 labels can be associated with a given resource. Clients should store labels in a representation such as JSON that does not depend on specific characters being disallowed. Example: `"myBusinessDimension" : "businessValue"`|
|» » **additionalProperties**|body|string|false|none|
|» parent|body|string|false|Optional. A reference to a parent Resource. eg., `organizations/123` or `folders/876`.|
|» projectId|body|string|false|Immutable. The unique, user-assigned id of the project. It must be 6 to 30 lowercase ASCII letters, digits, or hyphens. It must start with a letter. Trailing hyphens are prohibited. Example: `tokyo-rain-123`|

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

<h3 id="cloudresourcemanagerprojectscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudresourcemanager.projects.search

<a id="opIdcloudresourcemanager.projects.search"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/projects:search \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/projects:search`

Search for projects that the caller has the `resourcemanager.projects.get` permission on, and also satisfy the specified query. This method returns projects in an unspecified order. This method is eventually consistent with project mutations; this means that a newly created project may not appear in the results or recent updates to an existing project may not be reflected in the results. To retrieve the latest state of a project, use the GetProject method.

<h3 id="cloudresourcemanagerprojectssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageSize|query|integer|false|Optional. The maximum number of projects to return in the response. The server can return fewer projects than requested. If unspecified, server picks an appropriate default.|
|pageToken|query|string|false|Optional. A pagination token returned from a previous call to ListProjects that indicates from where listing should continue.|
|query|query|string|false|Optional. A query string for searching for projects that the caller has `resourcemanager.projects.get` permission to. If multiple fields are included in the query, then it will return results that match any of the fields. Some eligible fields are: ``` \| Field \| Description \| \|-------------------------\|----------------------------------------------\| \| displayName, name \| Filters by displayName. \| \| parent \| Project's parent (for example: folders/123, organizations/*). Prefer parent field over parent.type and parent.id.\| \| parent.type \| Parent's type: `folder` or `organization`. \| \| parent.id \| Parent's id number (for example: 123) \| \| id, projectId \| Filters by projectId. \| \| state, lifecycleState \| Filters by state. \| \| labels \| Filters by label name or value. \| \| labels.\ (where *key* is the name of a label) \| Filters by label name.\| ``` Search expressions are case insensitive. Some examples queries: ``` \| Query \| Description \| \|------------------\|-----------------------------------------------------\| \| name:how* \| The project's name starts with "how". \| \| name:Howl \| The project's name is `Howl` or `howl`. \| \| name:HOWL \| Equivalent to above. \| \| NAME:howl \| Equivalent to above. \| \| labels.color:* \| The project has the label `color`. \| \| labels.color:red \| The project's label `color` has the value `red`. \| \| labels.color:red labels.size:big \| The project's label `color` has the value `red` or its label `size` has the value `big`. \| ``` If no query is specified, the call will return projects for which the user has the `resourcemanager.projects.get` permission.|
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
  "projects": [
    {
      "createTime": "string",
      "deleteTime": "string",
      "displayName": "string",
      "etag": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "parent": "string",
      "projectId": "string",
      "state": "STATE_UNSPECIFIED",
      "updateTime": "string"
    }
  ]
}
```

<h3 id="cloudresourcemanagerprojectssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SearchProjectsResponse](#schemasearchprojectsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## cloudresourcemanager.projects.move

<a id="opIdcloudresourcemanager.projects.move"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/string:move \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "destinationParent": "string"
  }'
```

`POST /v3/{name}:move`

Move a project to another place in your resource hierarchy, under a new resource parent. Returns an operation which can be used to track the process of the project move workflow. Upon success, the `Operation.response` field will be populated with the moved project. The caller must have `resourcemanager.projects.move` permission on the project, on the project's current and proposed new parent. If project has no current parent, or it currently does not have an associated organization resource, you will also need the `resourcemanager.projects.setIamPolicy` permission in the project. 

> Body parameter

```json
{
  "destinationParent": "string"
}
```

<h3 id="cloudresourcemanagerprojectsmove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the project to move.|
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
|body|body|[MoveProjectRequest](#schemamoveprojectrequest)|false|none|
|» destinationParent|body|string|false|Required. The new parent to move the Project under.|

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

<h3 id="cloudresourcemanagerprojectsmove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudresourcemanager.projects.undelete

<a id="opIdcloudresourcemanager.projects.undelete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/string:undelete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v3/{name}:undelete`

Restores the project identified by the specified `name` (for example, `projects/415104041262`). You can only use this method for a project that has a lifecycle state of DELETE_REQUESTED. After deletion starts, the project cannot be restored. The caller must have `resourcemanager.projects.undelete` permission for this project.

> Body parameter

```json
{}
```

<h3 id="cloudresourcemanagerprojectsundelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the project (for example, `projects/415104041262`). Required.|
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
|body|body|[UndeleteProjectRequest](#schemaundeleteprojectrequest)|false|none|

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

<h3 id="cloudresourcemanagerprojectsundelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

<h1 id="cloud-resource-manager-api-tagbindings">tagBindings</h1>

## cloudresourcemanager.tagBindings.list

<a id="opIdcloudresourcemanager.tagBindings.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/tagBindings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/tagBindings`

Lists the TagBindings for the given Google Cloud resource, as specified with `parent`. NOTE: The `parent` field is expected to be a full resource name: https://cloud.google.com/apis/design/resource_names#full_resource_name

<h3 id="cloudresourcemanagertagbindingslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageSize|query|integer|false|Optional. The maximum number of TagBindings to return in the response. The server allows a maximum of 300 TagBindings to return. If unspecified, the server will use 100 as the default.|
|pageToken|query|string|false|Optional. A pagination token returned from a previous call to `ListTagBindings` that indicates where this listing should continue from.|
|parent|query|string|false|Required. The full resource name of a resource for which you want to list existing TagBindings. E.g. "//cloudresourcemanager.googleapis.com/projects/123"|
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
  "tagBindings": [
    {
      "name": "string",
      "parent": "string",
      "tagValue": "string",
      "tagValueNamespacedName": "string"
    }
  ]
}
```

<h3 id="cloudresourcemanagertagbindingslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListTagBindingsResponse](#schemalisttagbindingsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## cloudresourcemanager.tagBindings.create

<a id="opIdcloudresourcemanager.tagBindings.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/tagBindings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "parent": "string",
    "tagValue": "string",
    "tagValueNamespacedName": "string"
  }'
```

`POST /v3/tagBindings`

Creates a TagBinding between a TagValue and a Google Cloud resource.

> Body parameter

```json
{
  "parent": "string",
  "tagValue": "string",
  "tagValueNamespacedName": "string"
}
```

<h3 id="cloudresourcemanagertagbindingscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|validateOnly|query|boolean|false|Optional. Set to true to perform the validations necessary for creating the resource, but not actually perform the action.|
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
|body|body|[TagBinding](#schematagbinding)|false|none|
|» parent|body|string|false|The full resource name of the resource the TagValue is bound to. E.g. `//cloudresourcemanager.googleapis.com/projects/123`|
|» tagValue|body|string|false|The TagValue of the TagBinding. Must be of the form `tagValues/456`.|
|» tagValueNamespacedName|body|string|false|The namespaced name for the TagValue of the TagBinding. Must be in the format `{parent_id}/{tag_key_short_name}/{short_name}`. For methods that support TagValue namespaced name, only one of tag_value_namespaced_name or tag_value may be filled. Requests with both fields will be rejected.|

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

<h3 id="cloudresourcemanagertagbindingscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

<h1 id="cloud-resource-manager-api-tagkeys">tagKeys</h1>

## cloudresourcemanager.tagKeys.list

<a id="opIdcloudresourcemanager.tagKeys.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/tagKeys \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/tagKeys`

Lists all TagKeys for a parent resource.

<h3 id="cloudresourcemanagertagkeyslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageSize|query|integer|false|Optional. The maximum number of TagKeys to return in the response. The server allows a maximum of 300 TagKeys to return. If unspecified, the server will use 100 as the default.|
|pageToken|query|string|false|Optional. A pagination token returned from a previous call to `ListTagKey` that indicates where this listing should continue from.|
|parent|query|string|false|Required. The resource name of the TagKey's parent. Must be of the form `organizations/{org_id}` or `projects/{project_id}` or `projects/{project_number}`|
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
  "tagKeys": [
    {
      "createTime": "string",
      "description": "string",
      "etag": "string",
      "name": "string",
      "namespacedName": "string",
      "parent": "string",
      "purpose": "PURPOSE_UNSPECIFIED",
      "purposeData": {
        "property1": "string",
        "property2": "string"
      },
      "shortName": "string",
      "updateTime": "string"
    }
  ]
}
```

<h3 id="cloudresourcemanagertagkeyslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListTagKeysResponse](#schemalisttagkeysresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## cloudresourcemanager.tagKeys.create

<a id="opIdcloudresourcemanager.tagKeys.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/tagKeys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "etag": "string",
    "name": "string",
    "parent": "string",
    "purpose": "PURPOSE_UNSPECIFIED",
    "purposeData": {
      "property1": "string",
      "property2": "string"
    },
    "shortName": "string"
  }'
```

`POST /v3/tagKeys`

Creates a new TagKey. If another request with the same parameters is sent while the original request is in process, the second request will receive an error. A maximum of 1000 TagKeys can exist under a parent at any given time.

> Body parameter

```json
{
  "description": "string",
  "etag": "string",
  "name": "string",
  "parent": "string",
  "purpose": "PURPOSE_UNSPECIFIED",
  "purposeData": {
    "property1": "string",
    "property2": "string"
  },
  "shortName": "string"
}
```

<h3 id="cloudresourcemanagertagkeyscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|validateOnly|query|boolean|false|Optional. Set to true to perform validations necessary for creating the resource, but not actually perform the action.|
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
|body|body|[TagKey](#schematagkey)|false|none|
|» description|body|string|false|Optional. User-assigned description of the TagKey. Must not exceed 256 characters. Read-write.|
|» etag|body|string|false|Optional. Entity tag which users can pass to prevent race conditions. This field is always set in server responses. See UpdateTagKeyRequest for details.|
|» name|body|string|false|Immutable. The resource name for a TagKey. Must be in the format `tagKeys/{tag_key_id}`, where `tag_key_id` is the generated numeric id for the TagKey.|
|» parent|body|string|false|Immutable. The resource name of the TagKey's parent. A TagKey can be parented by an Organization or a Project. For a TagKey parented by an Organization, its parent must be in the form `organizations/{org_id}`. For a TagKey parented by a Project, its parent can be in the form `projects/{project_id}` or `projects/{project_number}`.|
|» purpose|body|string|false|Optional. A purpose denotes that this Tag is intended for use in policies of a specific policy engine, and will involve that policy engine in management operations involving this Tag. A purpose does not grant a policy engine exclusive rights to the Tag, and it may be referenced by other policy engines. A purpose cannot be changed once set.|
|» purposeData|body|object|false|Optional. Purpose data corresponds to the policy system that the tag is intended for. See documentation for `Purpose` for formatting of this field. Purpose data cannot be changed once set.|
|» » **additionalProperties**|body|string|false|none|
|» shortName|body|string|false|Required. Immutable. The user friendly name for a TagKey. The short name should be unique for TagKeys within the same tag namespace. The short name must be 1-63 characters, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» purpose|PURPOSE_UNSPECIFIED|
|» purpose|GCE_FIREWALL|
|» purpose|DATA_GOVERNANCE|

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

<h3 id="cloudresourcemanagertagkeyscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudresourcemanager.tagKeys.getNamespaced

<a id="opIdcloudresourcemanager.tagKeys.getNamespaced"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/tagKeys/namespaced \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/tagKeys/namespaced`

Retrieves a TagKey by its namespaced name. This method will return `PERMISSION_DENIED` if the key does not exist or the user does not have permission to view it.

<h3 id="cloudresourcemanagertagkeysgetnamespaced-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|Required. A namespaced tag key name in the format `{parentId}/{tagKeyShort}`, such as `42/foo` for a key with short name "foo" under the organization with ID 42 or `r2-d2/bar` for a key with short name "bar" under the project `r2-d2`.|
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
  "description": "string",
  "etag": "string",
  "name": "string",
  "namespacedName": "string",
  "parent": "string",
  "purpose": "PURPOSE_UNSPECIFIED",
  "purposeData": {
    "property1": "string",
    "property2": "string"
  },
  "shortName": "string",
  "updateTime": "string"
}
```

<h3 id="cloudresourcemanagertagkeysgetnamespaced-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TagKey](#schematagkey)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

<h1 id="cloud-resource-manager-api-tagvalues">tagValues</h1>

## cloudresourcemanager.tagValues.list

<a id="opIdcloudresourcemanager.tagValues.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/tagValues \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/tagValues`

Lists all TagValues for a specific TagKey.

<h3 id="cloudresourcemanagertagvalueslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageSize|query|integer|false|Optional. The maximum number of TagValues to return in the response. The server allows a maximum of 300 TagValues to return. If unspecified, the server will use 100 as the default.|
|pageToken|query|string|false|Optional. A pagination token returned from a previous call to `ListTagValues` that indicates where this listing should continue from.|
|parent|query|string|false|Required. Resource name for the parent of the TagValues to be listed, in the format `tagKeys/123` or `tagValues/123`.|
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
  "tagValues": [
    {
      "createTime": "string",
      "description": "string",
      "etag": "string",
      "name": "string",
      "namespacedName": "string",
      "parent": "string",
      "shortName": "string",
      "updateTime": "string"
    }
  ]
}
```

<h3 id="cloudresourcemanagertagvalueslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListTagValuesResponse](#schemalisttagvaluesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## cloudresourcemanager.tagValues.create

<a id="opIdcloudresourcemanager.tagValues.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/tagValues \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "etag": "string",
    "name": "string",
    "parent": "string",
    "shortName": "string"
  }'
```

`POST /v3/tagValues`

Creates a TagValue as a child of the specified TagKey. If a another request with the same parameters is sent while the original request is in process the second request will receive an error. A maximum of 1000 TagValues can exist under a TagKey at any given time.

> Body parameter

```json
{
  "description": "string",
  "etag": "string",
  "name": "string",
  "parent": "string",
  "shortName": "string"
}
```

<h3 id="cloudresourcemanagertagvaluescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|validateOnly|query|boolean|false|Optional. Set as true to perform the validations necessary for creating the resource, but not actually perform the action.|
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
|body|body|[TagValue](#schematagvalue)|false|none|
|» description|body|string|false|Optional. User-assigned description of the TagValue. Must not exceed 256 characters. Read-write.|
|» etag|body|string|false|Optional. Entity tag which users can pass to prevent race conditions. This field is always set in server responses. See UpdateTagValueRequest for details.|
|» name|body|string|false|Immutable. Resource name for TagValue in the format `tagValues/456`.|
|» parent|body|string|false|Immutable. The resource name of the new TagValue's parent TagKey. Must be of the form `tagKeys/{tag_key_id}`.|
|» shortName|body|string|false|Required. Immutable. User-assigned short name for TagValue. The short name should be unique for TagValues within the same parent TagKey. The short name must be 63 characters or less, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between.|

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

<h3 id="cloudresourcemanagertagvaluescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudresourcemanager.tagValues.getNamespaced

<a id="opIdcloudresourcemanager.tagValues.getNamespaced"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/tagValues/namespaced \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/tagValues/namespaced`

Retrieves a TagValue by its namespaced name. This method will return `PERMISSION_DENIED` if the value does not exist or the user does not have permission to view it.

<h3 id="cloudresourcemanagertagvaluesgetnamespaced-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|Required. A namespaced tag value name in the following format: `{parentId}/{tagKeyShort}/{tagValueShort}` Examples: - `42/foo/abc` for a value with short name "abc" under the key with short name "foo" under the organization with ID 42 - `r2-d2/bar/xyz` for a value with short name "xyz" under the key with short name "bar" under the project with ID "r2-d2"|
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
  "description": "string",
  "etag": "string",
  "name": "string",
  "namespacedName": "string",
  "parent": "string",
  "shortName": "string",
  "updateTime": "string"
}
```

<h3 id="cloudresourcemanagertagvaluesgetnamespaced-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TagValue](#schematagvalue)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## cloudresourcemanager.tagValues.get

<a id="opIdcloudresourcemanager.tagValues.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/{name}`

Retrieves a TagValue. This method will return `PERMISSION_DENIED` if the value does not exist or the user does not have permission to view it.

<h3 id="cloudresourcemanagertagvaluesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Resource name for TagValue to be fetched in the format `tagValues/456`.|
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
  "description": "string",
  "etag": "string",
  "name": "string",
  "namespacedName": "string",
  "parent": "string",
  "shortName": "string",
  "updateTime": "string"
}
```

<h3 id="cloudresourcemanagertagvaluesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TagValue](#schematagvalue)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## cloudresourcemanager.tagValues.tagHolds.delete

<a id="opIdcloudresourcemanager.tagValues.tagHolds.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v3/{name}`

Deletes a TagHold.

<h3 id="cloudresourcemanagertagvaluestagholdsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the TagHold to delete. Must be of the form: `tagValues/{tag-value-id}/tagHolds/{tag-hold-id}`.|
|validateOnly|query|boolean|false|Optional. Set to true to perform the validations necessary for deleting the resource, but not actually perform the action.|
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

<h3 id="cloudresourcemanagertagvaluestagholdsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## cloudresourcemanager.tagValues.patch

<a id="opIdcloudresourcemanager.tagValues.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "etag": "string",
    "name": "string",
    "parent": "string",
    "shortName": "string"
  }'
```

`PATCH /v3/{name}`

Updates the attributes of the TagValue resource.

> Body parameter

```json
{
  "description": "string",
  "etag": "string",
  "name": "string",
  "parent": "string",
  "shortName": "string"
}
```

<h3 id="cloudresourcemanagertagvaluespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Immutable. Resource name for TagValue in the format `tagValues/456`.|
|updateMask|query|string|false|Optional. Fields to be updated.|
|validateOnly|query|boolean|false|Optional. True to perform validations necessary for updating the resource, but not actually perform the action.|
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
|body|body|[TagValue](#schematagvalue)|false|none|
|» description|body|string|false|Optional. User-assigned description of the TagValue. Must not exceed 256 characters. Read-write.|
|» etag|body|string|false|Optional. Entity tag which users can pass to prevent race conditions. This field is always set in server responses. See UpdateTagValueRequest for details.|
|» name|body|string|false|Immutable. Resource name for TagValue in the format `tagValues/456`.|
|» parent|body|string|false|Immutable. The resource name of the new TagValue's parent TagKey. Must be of the form `tagKeys/{tag_key_id}`.|
|» shortName|body|string|false|Required. Immutable. User-assigned short name for TagValue. The short name should be unique for TagValues within the same parent TagKey. The short name must be 63 characters or less, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between.|

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

<h3 id="cloudresourcemanagertagvaluespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudresourcemanager.tagValues.tagHolds.list

<a id="opIdcloudresourcemanager.tagValues.tagHolds.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/string/tagHolds \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/{parent}/tagHolds`

Lists TagHolds under a TagValue.

<h3 id="cloudresourcemanagertagvaluestagholdslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the parent TagValue. Must be of the form: `tagValues/{tag-value-id}`.|
|filter|query|string|false|Optional. Criteria used to select a subset of TagHolds parented by the TagValue to return. This field follows the syntax defined by aip.dev/160; the `holder` and `origin` fields are supported for filtering. Currently only `AND` syntax is supported. Some example queries are: * `holder = //compute.googleapis.com/compute/projects/myproject/regions/us-east-1/instanceGroupManagers/instance-group` * `origin = 35678234` * `holder = //compute.googleapis.com/compute/projects/myproject/regions/us-east-1/instanceGroupManagers/instance-group AND origin = 35678234`|
|pageSize|query|integer|false|Optional. The maximum number of TagHolds to return in the response. The server allows a maximum of 300 TagHolds to return. If unspecified, the server will use 100 as the default.|
|pageToken|query|string|false|Optional. A pagination token returned from a previous call to `ListTagHolds` that indicates where this listing should continue from.|
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
  "tagHolds": [
    {
      "createTime": "string",
      "helpLink": "string",
      "holder": "string",
      "name": "string",
      "origin": "string"
    }
  ]
}
```

<h3 id="cloudresourcemanagertagvaluestagholdslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListTagHoldsResponse](#schemalisttagholdsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## cloudresourcemanager.tagValues.tagHolds.create

<a id="opIdcloudresourcemanager.tagValues.tagHolds.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/string/tagHolds \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "helpLink": "string",
    "holder": "string",
    "origin": "string"
  }'
```

`POST /v3/{parent}/tagHolds`

Creates a TagHold. Returns ALREADY_EXISTS if a TagHold with the same resource and origin exists under the same TagValue.

> Body parameter

```json
{
  "helpLink": "string",
  "holder": "string",
  "origin": "string"
}
```

<h3 id="cloudresourcemanagertagvaluestagholdscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the TagHold's parent TagValue. Must be of the form: `tagValues/{tag-value-id}`.|
|validateOnly|query|boolean|false|Optional. Set to true to perform the validations necessary for creating the resource, but not actually perform the action.|
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
|body|body|[TagHold](#schemataghold)|false|none|
|» helpLink|body|string|false|Optional. A URL where an end user can learn more about removing this hold. E.g. `https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing`|
|» holder|body|string|false|Required. The name of the resource where the TagValue is being used. Must be less than 200 characters. E.g. `//compute.googleapis.com/compute/projects/myproject/regions/us-east-1/instanceGroupManagers/instance-group`|
|» origin|body|string|false|Optional. An optional string representing the origin of this request. This field should include human-understandable information to distinguish origins from each other. Must be less than 200 characters. E.g. `migs-35678234`|

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

<h3 id="cloudresourcemanagertagvaluestagholdscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudresourcemanager.tagValues.getIamPolicy

<a id="opIdcloudresourcemanager.tagValues.getIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/string:getIamPolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "options": {
      "requestedPolicyVersion": 0
    }
  }'
```

`POST /v3/{resource}:getIamPolicy`

Gets the access control policy for a TagValue. The returned policy may be empty if no such policy or resource exists. The `resource` field should be the TagValue's resource name. For example: `tagValues/1234`. The caller must have the `cloudresourcemanager.googleapis.com/tagValues.getIamPolicy` permission on the identified TagValue to get the access control policy.

> Body parameter

```json
{
  "options": {
    "requestedPolicyVersion": 0
  }
}
```

<h3 id="cloudresourcemanagertagvaluesgetiampolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.|
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
|body|body|[GetIamPolicyRequest](#schemagetiampolicyrequest)|false|none|
|» options|body|[GetPolicyOptions](#schemagetpolicyoptions)|false|OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`.|

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
  "auditConfigs": [
    {
      "auditLogConfigs": [
        {
          "exemptedMembers": [
            "string"
          ],
          "logType": "LOG_TYPE_UNSPECIFIED"
        }
      ],
      "service": "string"
    }
  ],
  "bindings": [
    {
      "condition": {
        "description": "string",
        "expression": "string",
        "location": "string",
        "title": "string"
      },
      "members": [
        "string"
      ],
      "role": "string"
    }
  ],
  "etag": "string",
  "version": 0
}
```

<h3 id="cloudresourcemanagertagvaluesgetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## cloudresourcemanager.tagValues.setIamPolicy

<a id="opIdcloudresourcemanager.tagValues.setIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/string:setIamPolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "policy": {
      "auditConfigs": [
        {
          "auditLogConfigs": [
            {
              "exemptedMembers": [
                "string"
              ],
              "logType": "LOG_TYPE_UNSPECIFIED"
            }
          ],
          "service": "string"
        }
      ],
      "bindings": [
        {
          "condition": {
            "description": "string",
            "expression": "string",
            "location": "string",
            "title": "string"
          },
          "members": [
            "string"
          ],
          "role": "string"
        }
      ],
      "etag": "string",
      "version": 0
    },
    "updateMask": "string"
  }'
```

`POST /v3/{resource}:setIamPolicy`

Sets the access control policy on a TagValue, replacing any existing policy. The `resource` field should be the TagValue's resource name. For example: `tagValues/1234`. The caller must have `resourcemanager.tagValues.setIamPolicy` permission on the identified tagValue.

> Body parameter

```json
{
  "policy": {
    "auditConfigs": [
      {
        "auditLogConfigs": [
          {
            "exemptedMembers": [
              "string"
            ],
            "logType": "LOG_TYPE_UNSPECIFIED"
          }
        ],
        "service": "string"
      }
    ],
    "bindings": [
      {
        "condition": {
          "description": "string",
          "expression": "string",
          "location": "string",
          "title": "string"
        },
        "members": [
          "string"
        ],
        "role": "string"
      }
    ],
    "etag": "string",
    "version": 0
  },
  "updateMask": "string"
}
```

<h3 id="cloudresourcemanagertagvaluessetiampolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.|
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
|body|body|[SetIamPolicyRequest](#schemasetiampolicyrequest)|false|none|
|» policy|body|[Policy](#schemapolicy)|false|REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.|
|» updateMask|body|string(google-fieldmask)|false|OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`|

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
  "auditConfigs": [
    {
      "auditLogConfigs": [
        {
          "exemptedMembers": [
            "string"
          ],
          "logType": "LOG_TYPE_UNSPECIFIED"
        }
      ],
      "service": "string"
    }
  ],
  "bindings": [
    {
      "condition": {
        "description": "string",
        "expression": "string",
        "location": "string",
        "title": "string"
      },
      "members": [
        "string"
      ],
      "role": "string"
    }
  ],
  "etag": "string",
  "version": 0
}
```

<h3 id="cloudresourcemanagertagvaluessetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudresourcemanager.tagValues.testIamPermissions

<a id="opIdcloudresourcemanager.tagValues.testIamPermissions"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/string:testIamPermissions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "permissions": [
      "string"
    ]
  }'
```

`POST /v3/{resource}:testIamPermissions`

Returns permissions that a caller has on the specified TagValue. The `resource` field should be the TagValue's resource name. For example: `tagValues/1234`. There are no permissions required for making this API call.

> Body parameter

```json
{
  "permissions": [
    "string"
  ]
}
```

<h3 id="cloudresourcemanagertagvaluestestiampermissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.|
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
|body|body|[TestIamPermissionsRequest](#schematestiampermissionsrequest)|false|none|
|» permissions|body|[string]|false|The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).|

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
  "permissions": [
    "string"
  ]
}
```

<h3 id="cloudresourcemanagertagvaluestestiampermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TestIamPermissionsResponse](#schematestiampermissionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

# Schemas

<h2 id="tocS_AuditConfig">AuditConfig</h2>
<!-- backwards compatibility -->
<a id="schemaauditconfig"></a>
<a id="schema_AuditConfig"></a>
<a id="tocSauditconfig"></a>
<a id="tocsauditconfig"></a>

```json
{
  "auditLogConfigs": [
    {
      "exemptedMembers": [
        "string"
      ],
      "logType": "LOG_TYPE_UNSPECIFIED"
    }
  ],
  "service": "string"
}
```

Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auditLogConfigs|[[AuditLogConfig](#schemaauditlogconfig)]|false|none|The configuration for logging of each type of permission.|
|service|string|false|none|Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.|

<h2 id="tocS_AuditLogConfig">AuditLogConfig</h2>
<!-- backwards compatibility -->
<a id="schemaauditlogconfig"></a>
<a id="schema_AuditLogConfig"></a>
<a id="tocSauditlogconfig"></a>
<a id="tocsauditlogconfig"></a>

```json
{
  "exemptedMembers": [
    "string"
  ],
  "logType": "LOG_TYPE_UNSPECIFIED"
}
```

Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exemptedMembers|[string]|false|none|Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.|
|logType|string|false|none|The log type that this config enables.|

#### Enumerated Values

|Property|Value|
|---|---|
|logType|LOG_TYPE_UNSPECIFIED|
|logType|ADMIN_READ|
|logType|DATA_WRITE|
|logType|DATA_READ|

<h2 id="tocS_Binding">Binding</h2>
<!-- backwards compatibility -->
<a id="schemabinding"></a>
<a id="schema_Binding"></a>
<a id="tocSbinding"></a>
<a id="tocsbinding"></a>

```json
{
  "condition": {
    "description": "string",
    "expression": "string",
    "location": "string",
    "title": "string"
  },
  "members": [
    "string"
  ],
  "role": "string"
}
```

Associates `members`, or principals, with a `role`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|condition|[Expr](#schemaexpr)|false|none|The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|
|members|[string]|false|none|Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`.|
|role|string|false|none|Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles).|

<h2 id="tocS_CloudresourcemanagerGoogleCloudResourcemanagerV2alpha1FolderOperation">CloudresourcemanagerGoogleCloudResourcemanagerV2alpha1FolderOperation</h2>
<!-- backwards compatibility -->
<a id="schemacloudresourcemanagergooglecloudresourcemanagerv2alpha1folderoperation"></a>
<a id="schema_CloudresourcemanagerGoogleCloudResourcemanagerV2alpha1FolderOperation"></a>
<a id="tocScloudresourcemanagergooglecloudresourcemanagerv2alpha1folderoperation"></a>
<a id="tocscloudresourcemanagergooglecloudresourcemanagerv2alpha1folderoperation"></a>

```json
{
  "destinationParent": "string",
  "displayName": "string",
  "operationType": "OPERATION_TYPE_UNSPECIFIED",
  "sourceParent": "string"
}
```

Metadata describing a long running folder operation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationParent|string|false|none|The resource name of the folder or organization we are either creating the folder under or moving the folder to.|
|displayName|string|false|none|The display name of the folder.|
|operationType|string|false|none|The type of this operation.|
|sourceParent|string|false|none|The resource name of the folder's parent. Only applicable when the operation_type is MOVE.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|OPERATION_TYPE_UNSPECIFIED|
|operationType|CREATE|
|operationType|MOVE|

<h2 id="tocS_CloudresourcemanagerGoogleCloudResourcemanagerV2beta1FolderOperation">CloudresourcemanagerGoogleCloudResourcemanagerV2beta1FolderOperation</h2>
<!-- backwards compatibility -->
<a id="schemacloudresourcemanagergooglecloudresourcemanagerv2beta1folderoperation"></a>
<a id="schema_CloudresourcemanagerGoogleCloudResourcemanagerV2beta1FolderOperation"></a>
<a id="tocScloudresourcemanagergooglecloudresourcemanagerv2beta1folderoperation"></a>
<a id="tocscloudresourcemanagergooglecloudresourcemanagerv2beta1folderoperation"></a>

```json
{
  "destinationParent": "string",
  "displayName": "string",
  "operationType": "OPERATION_TYPE_UNSPECIFIED",
  "sourceParent": "string"
}
```

Metadata describing a long running folder operation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationParent|string|false|none|The resource name of the folder or organization we are either creating the folder under or moving the folder to.|
|displayName|string|false|none|The display name of the folder.|
|operationType|string|false|none|The type of this operation.|
|sourceParent|string|false|none|The resource name of the folder's parent. Only applicable when the operation_type is MOVE.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|OPERATION_TYPE_UNSPECIFIED|
|operationType|CREATE|
|operationType|MOVE|

<h2 id="tocS_CreateFolderMetadata">CreateFolderMetadata</h2>
<!-- backwards compatibility -->
<a id="schemacreatefoldermetadata"></a>
<a id="schema_CreateFolderMetadata"></a>
<a id="tocScreatefoldermetadata"></a>
<a id="tocscreatefoldermetadata"></a>

```json
{
  "displayName": "string",
  "parent": "string"
}
```

Metadata pertaining to the Folder creation process.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The display name of the folder.|
|parent|string|false|none|The resource name of the folder or organization we are creating the folder under.|

<h2 id="tocS_CreateProjectMetadata">CreateProjectMetadata</h2>
<!-- backwards compatibility -->
<a id="schemacreateprojectmetadata"></a>
<a id="schema_CreateProjectMetadata"></a>
<a id="tocScreateprojectmetadata"></a>
<a id="tocscreateprojectmetadata"></a>

```json
{
  "createTime": "string",
  "gettable": true,
  "ready": true
}
```

A status object which is used as the `metadata` field for the Operation returned by CreateProject. It provides insight for when significant phases of Project creation have completed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Creation time of the project creation workflow.|
|gettable|boolean|false|none|True if the project can be retrieved using `GetProject`. No other operations on the project are guaranteed to work until the project creation is complete.|
|ready|boolean|false|none|True if the project creation process is complete.|

<h2 id="tocS_CreateTagBindingMetadata">CreateTagBindingMetadata</h2>
<!-- backwards compatibility -->
<a id="schemacreatetagbindingmetadata"></a>
<a id="schema_CreateTagBindingMetadata"></a>
<a id="tocScreatetagbindingmetadata"></a>
<a id="tocscreatetagbindingmetadata"></a>

```json
{}
```

Runtime operation information for creating a TagValue.

<h2 id="tocS_CreateTagKeyMetadata">CreateTagKeyMetadata</h2>
<!-- backwards compatibility -->
<a id="schemacreatetagkeymetadata"></a>
<a id="schema_CreateTagKeyMetadata"></a>
<a id="tocScreatetagkeymetadata"></a>
<a id="tocscreatetagkeymetadata"></a>

```json
{}
```

Runtime operation information for creating a TagKey.

<h2 id="tocS_CreateTagValueMetadata">CreateTagValueMetadata</h2>
<!-- backwards compatibility -->
<a id="schemacreatetagvaluemetadata"></a>
<a id="schema_CreateTagValueMetadata"></a>
<a id="tocScreatetagvaluemetadata"></a>
<a id="tocscreatetagvaluemetadata"></a>

```json
{}
```

Runtime operation information for creating a TagValue.

<h2 id="tocS_DeleteFolderMetadata">DeleteFolderMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadeletefoldermetadata"></a>
<a id="schema_DeleteFolderMetadata"></a>
<a id="tocSdeletefoldermetadata"></a>
<a id="tocsdeletefoldermetadata"></a>

```json
{}
```

A status object which is used as the `metadata` field for the `Operation` returned by `DeleteFolder`.

<h2 id="tocS_DeleteOrganizationMetadata">DeleteOrganizationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadeleteorganizationmetadata"></a>
<a id="schema_DeleteOrganizationMetadata"></a>
<a id="tocSdeleteorganizationmetadata"></a>
<a id="tocsdeleteorganizationmetadata"></a>

```json
{}
```

A status object which is used as the `metadata` field for the operation returned by DeleteOrganization.

<h2 id="tocS_DeleteProjectMetadata">DeleteProjectMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprojectmetadata"></a>
<a id="schema_DeleteProjectMetadata"></a>
<a id="tocSdeleteprojectmetadata"></a>
<a id="tocsdeleteprojectmetadata"></a>

```json
{}
```

A status object which is used as the `metadata` field for the Operation returned by `DeleteProject`.

<h2 id="tocS_DeleteTagBindingMetadata">DeleteTagBindingMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadeletetagbindingmetadata"></a>
<a id="schema_DeleteTagBindingMetadata"></a>
<a id="tocSdeletetagbindingmetadata"></a>
<a id="tocsdeletetagbindingmetadata"></a>

```json
{}
```

Runtime operation information for deleting a TagBinding.

<h2 id="tocS_DeleteTagKeyMetadata">DeleteTagKeyMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadeletetagkeymetadata"></a>
<a id="schema_DeleteTagKeyMetadata"></a>
<a id="tocSdeletetagkeymetadata"></a>
<a id="tocsdeletetagkeymetadata"></a>

```json
{}
```

Runtime operation information for deleting a TagKey.

<h2 id="tocS_DeleteTagValueMetadata">DeleteTagValueMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadeletetagvaluemetadata"></a>
<a id="schema_DeleteTagValueMetadata"></a>
<a id="tocSdeletetagvaluemetadata"></a>
<a id="tocsdeletetagvaluemetadata"></a>

```json
{}
```

Runtime operation information for deleting a TagValue.

<h2 id="tocS_EffectiveTag">EffectiveTag</h2>
<!-- backwards compatibility -->
<a id="schemaeffectivetag"></a>
<a id="schema_EffectiveTag"></a>
<a id="tocSeffectivetag"></a>
<a id="tocseffectivetag"></a>

```json
{
  "inherited": true,
  "namespacedTagKey": "string",
  "namespacedTagValue": "string",
  "tagKey": "string",
  "tagKeyParentName": "string",
  "tagValue": "string"
}
```

An EffectiveTag represents a tag that applies to a resource during policy evaluation. Tags can be either directly bound to a resource or inherited from its ancestor. EffectiveTag contains the name and namespaced_name of the tag value and tag key, with additional fields of `inherited` to indicate the inheritance status of the effective tag.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inherited|boolean|false|none|Indicates the inheritance status of a tag value attached to the given resource. If the tag value is inherited from one of the resource's ancestors, inherited will be true. If false, then the tag value is directly attached to the resource, inherited will be false.|
|namespacedTagKey|string|false|none|The namespaced name of the TagKey. Can be in the form `{organization_id}/{tag_key_short_name}` or `{project_id}/{tag_key_short_name}` or `{project_number}/{tag_key_short_name}`.|
|namespacedTagValue|string|false|none|The namespaced name of the TagValue. Can be in the form `{organization_id}/{tag_key_short_name}/{tag_value_short_name}` or `{project_id}/{tag_key_short_name}/{tag_value_short_name}` or `{project_number}/{tag_key_short_name}/{tag_value_short_name}`.|
|tagKey|string|false|none|The name of the TagKey, in the format `tagKeys/{id}`, such as `tagKeys/123`.|
|tagKeyParentName|string|false|none|The parent name of the tag key. Must be in the format `organizations/{organization_id}` or `projects/{project_number}`|
|tagValue|string|false|none|Resource name for TagValue in the format `tagValues/456`.|

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

<h2 id="tocS_Expr">Expr</h2>
<!-- backwards compatibility -->
<a id="schemaexpr"></a>
<a id="schema_Expr"></a>
<a id="tocSexpr"></a>
<a id="tocsexpr"></a>

```json
{
  "description": "string",
  "expression": "string",
  "location": "string",
  "title": "string"
}
```

Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.|
|expression|string|false|none|Textual representation of an expression in Common Expression Language syntax.|
|location|string|false|none|Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.|
|title|string|false|none|Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.|

<h2 id="tocS_Folder">Folder</h2>
<!-- backwards compatibility -->
<a id="schemafolder"></a>
<a id="schema_Folder"></a>
<a id="tocSfolder"></a>
<a id="tocsfolder"></a>

```json
{
  "createTime": "string",
  "deleteTime": "string",
  "displayName": "string",
  "etag": "string",
  "name": "string",
  "parent": "string",
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

A folder in an organization's resource hierarchy, used to organize that organization's resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. Timestamp when the folder was created.|
|deleteTime|string(google-datetime)|false|read-only|Output only. Timestamp when the folder was requested to be deleted.|
|displayName|string|false|none|The folder's display name. A folder's display name must be unique amongst its siblings. For example, no two folders with the same parent can share the same display name. The display name must start and end with a letter or digit, may contain letters, digits, spaces, hyphens and underscores and can be no longer than 30 characters. This is captured by the regular expression: `[\p{L}\p{N}]([\p{L}\p{N}_- ]{0,28}[\p{L}\p{N}])?`.|
|etag|string|false|read-only|Output only. A checksum computed by the server based on the current value of the folder resource. This may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.|
|name|string|false|read-only|Output only. The resource name of the folder. Its format is `folders/{folder_id}`, for example: "folders/1234".|
|parent|string|false|none|Required. The folder's parent's resource name. Updates to the folder's parent must be performed using MoveFolder.|
|state|string|false|read-only|Output only. The lifecycle state of the folder. Updates to the state must be performed using DeleteFolder and UndeleteFolder.|
|updateTime|string(google-datetime)|false|read-only|Output only. Timestamp when the folder was last modified.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|ACTIVE|
|state|DELETE_REQUESTED|

<h2 id="tocS_FolderOperation">FolderOperation</h2>
<!-- backwards compatibility -->
<a id="schemafolderoperation"></a>
<a id="schema_FolderOperation"></a>
<a id="tocSfolderoperation"></a>
<a id="tocsfolderoperation"></a>

```json
{
  "destinationParent": "string",
  "displayName": "string",
  "operationType": "OPERATION_TYPE_UNSPECIFIED",
  "sourceParent": "string"
}
```

Metadata describing a long running folder operation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationParent|string|false|none|The resource name of the folder or organization we are either creating the folder under or moving the folder to.|
|displayName|string|false|none|The display name of the folder.|
|operationType|string|false|none|The type of this operation.|
|sourceParent|string|false|none|The resource name of the folder's parent. Only applicable when the operation_type is MOVE.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|OPERATION_TYPE_UNSPECIFIED|
|operationType|CREATE|
|operationType|MOVE|

<h2 id="tocS_FolderOperationError">FolderOperationError</h2>
<!-- backwards compatibility -->
<a id="schemafolderoperationerror"></a>
<a id="schema_FolderOperationError"></a>
<a id="tocSfolderoperationerror"></a>
<a id="tocsfolderoperationerror"></a>

```json
{
  "errorMessageId": "ERROR_TYPE_UNSPECIFIED"
}
```

A classification of the Folder Operation error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorMessageId|string|false|none|The type of operation error experienced.|

#### Enumerated Values

|Property|Value|
|---|---|
|errorMessageId|ERROR_TYPE_UNSPECIFIED|
|errorMessageId|ACTIVE_FOLDER_HEIGHT_VIOLATION|
|errorMessageId|MAX_CHILD_FOLDERS_VIOLATION|
|errorMessageId|FOLDER_NAME_UNIQUENESS_VIOLATION|
|errorMessageId|RESOURCE_DELETED_VIOLATION|
|errorMessageId|PARENT_DELETED_VIOLATION|
|errorMessageId|CYCLE_INTRODUCED_VIOLATION|
|errorMessageId|FOLDER_BEING_MOVED_VIOLATION|
|errorMessageId|FOLDER_TO_DELETE_NON_EMPTY_VIOLATION|
|errorMessageId|DELETED_FOLDER_HEIGHT_VIOLATION|

<h2 id="tocS_GetIamPolicyRequest">GetIamPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetiampolicyrequest"></a>
<a id="schema_GetIamPolicyRequest"></a>
<a id="tocSgetiampolicyrequest"></a>
<a id="tocsgetiampolicyrequest"></a>

```json
{
  "options": {
    "requestedPolicyVersion": 0
  }
}
```

Request message for `GetIamPolicy` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|options|[GetPolicyOptions](#schemagetpolicyoptions)|false|none|OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`.|

<h2 id="tocS_GetPolicyOptions">GetPolicyOptions</h2>
<!-- backwards compatibility -->
<a id="schemagetpolicyoptions"></a>
<a id="schema_GetPolicyOptions"></a>
<a id="tocSgetpolicyoptions"></a>
<a id="tocsgetpolicyoptions"></a>

```json
{
  "requestedPolicyVersion": 0
}
```

Encapsulates settings provided to GetIamPolicy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestedPolicyVersion|integer(int32)|false|none|Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|

<h2 id="tocS_Lien">Lien</h2>
<!-- backwards compatibility -->
<a id="schemalien"></a>
<a id="schema_Lien"></a>
<a id="tocSlien"></a>
<a id="tocslien"></a>

```json
{
  "createTime": "string",
  "name": "string",
  "origin": "string",
  "parent": "string",
  "reason": "string",
  "restrictions": [
    "string"
  ]
}
```

A Lien represents an encumbrance on the actions that can be performed on a resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|The creation time of this Lien.|
|name|string|false|none|A system-generated unique identifier for this Lien. Example: `liens/1234abcd`|
|origin|string|false|none|A stable, user-visible/meaningful string identifying the origin of the Lien, intended to be inspected programmatically. Maximum length of 200 characters. Example: 'compute.googleapis.com'|
|parent|string|false|none|A reference to the resource this Lien is attached to. The server will validate the parent against those for which Liens are supported. Example: `projects/1234`|
|reason|string|false|none|Concise user-visible strings indicating why an action cannot be performed on a resource. Maximum length of 200 characters. Example: 'Holds production API key'|
|restrictions|[string]|false|none|The types of operations which should be blocked as a result of this Lien. Each value should correspond to an IAM permission. The server will validate the permissions against those for which Liens are supported. An empty list is meaningless and will be rejected. Example: ['resourcemanager.projects.delete']|

<h2 id="tocS_ListEffectiveTagsResponse">ListEffectiveTagsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisteffectivetagsresponse"></a>
<a id="schema_ListEffectiveTagsResponse"></a>
<a id="tocSlisteffectivetagsresponse"></a>
<a id="tocslisteffectivetagsresponse"></a>

```json
{
  "effectiveTags": [
    {
      "inherited": true,
      "namespacedTagKey": "string",
      "namespacedTagValue": "string",
      "tagKey": "string",
      "tagKeyParentName": "string",
      "tagValue": "string"
    }
  ],
  "nextPageToken": "string"
}
```

The response of ListEffectiveTags.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|effectiveTags|[[EffectiveTag](#schemaeffectivetag)]|false|none|A possibly paginated list of effective tags for the specified resource.|
|nextPageToken|string|false|none|Pagination token. If the result set is too large to fit in a single response, this token is returned. It encodes the position of the current result cursor. Feeding this value into a new list request with the `page_token` parameter gives the next page of the results. When `next_page_token` is not filled in, there is no next page and the list returned is the last page in the result set. Pagination tokens have a limited lifetime.|

<h2 id="tocS_ListFoldersResponse">ListFoldersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfoldersresponse"></a>
<a id="schema_ListFoldersResponse"></a>
<a id="tocSlistfoldersresponse"></a>
<a id="tocslistfoldersresponse"></a>

```json
{
  "folders": [
    {
      "createTime": "string",
      "deleteTime": "string",
      "displayName": "string",
      "etag": "string",
      "name": "string",
      "parent": "string",
      "state": "STATE_UNSPECIFIED",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

The ListFolders response message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|folders|[[Folder](#schemafolder)]|false|none|A possibly paginated list of folders that are direct descendants of the specified parent resource.|
|nextPageToken|string|false|none|A pagination token returned from a previous call to `ListFolders` that indicates from where listing should continue.|

<h2 id="tocS_ListLiensResponse">ListLiensResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistliensresponse"></a>
<a id="schema_ListLiensResponse"></a>
<a id="tocSlistliensresponse"></a>
<a id="tocslistliensresponse"></a>

```json
{
  "liens": [
    {
      "createTime": "string",
      "name": "string",
      "origin": "string",
      "parent": "string",
      "reason": "string",
      "restrictions": [
        "string"
      ]
    }
  ],
  "nextPageToken": "string"
}
```

The response message for Liens.ListLiens.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|liens|[[Lien](#schemalien)]|false|none|A list of Liens.|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|

<h2 id="tocS_ListProjectsResponse">ListProjectsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistprojectsresponse"></a>
<a id="schema_ListProjectsResponse"></a>
<a id="tocSlistprojectsresponse"></a>
<a id="tocslistprojectsresponse"></a>

```json
{
  "nextPageToken": "string",
  "projects": [
    {
      "createTime": "string",
      "deleteTime": "string",
      "displayName": "string",
      "etag": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "parent": "string",
      "projectId": "string",
      "state": "STATE_UNSPECIFIED",
      "updateTime": "string"
    }
  ]
}
```

A page of the response received from the ListProjects method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page. NOTE: A response may contain fewer elements than the request `page_size` and still have a `next_page_token`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Pagination token. If the result set is too large to fit in a single response, this token is returned. It encodes the position of the current result cursor. Feeding this value into a new list request with the `page_token` parameter gives the next page of the results. When `next_page_token` is not filled in, there is no next page and the list returned is the last page in the result set. Pagination tokens have a limited lifetime.|
|projects|[[Project](#schemaproject)]|false|none|The list of Projects under the parent. This list can be paginated.|

<h2 id="tocS_ListTagBindingsResponse">ListTagBindingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagbindingsresponse"></a>
<a id="schema_ListTagBindingsResponse"></a>
<a id="tocSlisttagbindingsresponse"></a>
<a id="tocslisttagbindingsresponse"></a>

```json
{
  "nextPageToken": "string",
  "tagBindings": [
    {
      "name": "string",
      "parent": "string",
      "tagValue": "string",
      "tagValueNamespacedName": "string"
    }
  ]
}
```

The ListTagBindings response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Pagination token. If the result set is too large to fit in a single response, this token is returned. It encodes the position of the current result cursor. Feeding this value into a new list request with the `page_token` parameter gives the next page of the results. When `next_page_token` is not filled in, there is no next page and the list returned is the last page in the result set. Pagination tokens have a limited lifetime.|
|tagBindings|[[TagBinding](#schematagbinding)]|false|none|A possibly paginated list of TagBindings for the specified resource.|

<h2 id="tocS_ListTagHoldsResponse">ListTagHoldsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagholdsresponse"></a>
<a id="schema_ListTagHoldsResponse"></a>
<a id="tocSlisttagholdsresponse"></a>
<a id="tocslisttagholdsresponse"></a>

```json
{
  "nextPageToken": "string",
  "tagHolds": [
    {
      "createTime": "string",
      "helpLink": "string",
      "holder": "string",
      "name": "string",
      "origin": "string"
    }
  ]
}
```

The ListTagHolds response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Pagination token. If the result set is too large to fit in a single response, this token is returned. It encodes the position of the current result cursor. Feeding this value into a new list request with the `page_token` parameter gives the next page of the results. When `next_page_token` is not filled in, there is no next page and the list returned is the last page in the result set. Pagination tokens have a limited lifetime.|
|tagHolds|[[TagHold](#schemataghold)]|false|none|A possibly paginated list of TagHolds.|

<h2 id="tocS_ListTagKeysResponse">ListTagKeysResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagkeysresponse"></a>
<a id="schema_ListTagKeysResponse"></a>
<a id="tocSlisttagkeysresponse"></a>
<a id="tocslisttagkeysresponse"></a>

```json
{
  "nextPageToken": "string",
  "tagKeys": [
    {
      "createTime": "string",
      "description": "string",
      "etag": "string",
      "name": "string",
      "namespacedName": "string",
      "parent": "string",
      "purpose": "PURPOSE_UNSPECIFIED",
      "purposeData": {
        "property1": "string",
        "property2": "string"
      },
      "shortName": "string",
      "updateTime": "string"
    }
  ]
}
```

The ListTagKeys response message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A pagination token returned from a previous call to `ListTagKeys` that indicates from where listing should continue.|
|tagKeys|[[TagKey](#schematagkey)]|false|none|List of TagKeys that live under the specified parent in the request.|

<h2 id="tocS_ListTagValuesResponse">ListTagValuesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagvaluesresponse"></a>
<a id="schema_ListTagValuesResponse"></a>
<a id="tocSlisttagvaluesresponse"></a>
<a id="tocslisttagvaluesresponse"></a>

```json
{
  "nextPageToken": "string",
  "tagValues": [
    {
      "createTime": "string",
      "description": "string",
      "etag": "string",
      "name": "string",
      "namespacedName": "string",
      "parent": "string",
      "shortName": "string",
      "updateTime": "string"
    }
  ]
}
```

The ListTagValues response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A pagination token returned from a previous call to `ListTagValues` that indicates from where listing should continue. This is currently not used, but the server may at any point start supplying a valid token.|
|tagValues|[[TagValue](#schematagvalue)]|false|none|A possibly paginated list of TagValues that are direct descendants of the specified parent TagKey.|

<h2 id="tocS_MoveFolderMetadata">MoveFolderMetadata</h2>
<!-- backwards compatibility -->
<a id="schemamovefoldermetadata"></a>
<a id="schema_MoveFolderMetadata"></a>
<a id="tocSmovefoldermetadata"></a>
<a id="tocsmovefoldermetadata"></a>

```json
{
  "destinationParent": "string",
  "displayName": "string",
  "sourceParent": "string"
}
```

Metadata pertaining to the folder move process.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationParent|string|false|none|The resource name of the folder or organization to move the folder to.|
|displayName|string|false|none|The display name of the folder.|
|sourceParent|string|false|none|The resource name of the folder's parent.|

<h2 id="tocS_MoveFolderRequest">MoveFolderRequest</h2>
<!-- backwards compatibility -->
<a id="schemamovefolderrequest"></a>
<a id="schema_MoveFolderRequest"></a>
<a id="tocSmovefolderrequest"></a>
<a id="tocsmovefolderrequest"></a>

```json
{
  "destinationParent": "string"
}
```

The MoveFolder request message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationParent|string|false|none|Required. The resource name of the folder or organization which should be the folder's new parent. Must be of the form `folders/{folder_id}` or `organizations/{org_id}`.|

<h2 id="tocS_MoveProjectMetadata">MoveProjectMetadata</h2>
<!-- backwards compatibility -->
<a id="schemamoveprojectmetadata"></a>
<a id="schema_MoveProjectMetadata"></a>
<a id="tocSmoveprojectmetadata"></a>
<a id="tocsmoveprojectmetadata"></a>

```json
{}
```

A status object which is used as the `metadata` field for the Operation returned by MoveProject.

<h2 id="tocS_MoveProjectRequest">MoveProjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemamoveprojectrequest"></a>
<a id="schema_MoveProjectRequest"></a>
<a id="tocSmoveprojectrequest"></a>
<a id="tocsmoveprojectrequest"></a>

```json
{
  "destinationParent": "string"
}
```

The request sent to MoveProject method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationParent|string|false|none|Required. The new parent to move the Project under.|

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

<h2 id="tocS_Organization">Organization</h2>
<!-- backwards compatibility -->
<a id="schemaorganization"></a>
<a id="schema_Organization"></a>
<a id="tocSorganization"></a>
<a id="tocsorganization"></a>

```json
{
  "createTime": "string",
  "deleteTime": "string",
  "directoryCustomerId": "string",
  "displayName": "string",
  "etag": "string",
  "name": "string",
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

The root node in the resource hierarchy to which a particular entity's (a company, for example) resources belong.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. Timestamp when the Organization was created.|
|deleteTime|string(google-datetime)|false|read-only|Output only. Timestamp when the Organization was requested for deletion.|
|directoryCustomerId|string|false|none|Immutable. The G Suite / Workspace customer id used in the Directory API.|
|displayName|string|false|read-only|Output only. A human-readable string that refers to the organization in the Google Cloud Console. This string is set by the server and cannot be changed. The string will be set to the primary domain (for example, "google.com") of the Google Workspace customer that owns the organization.|
|etag|string|false|read-only|Output only. A checksum computed by the server based on the current value of the Organization resource. This may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.|
|name|string|false|read-only|Output only. The resource name of the organization. This is the organization's relative path in the API. Its format is "organizations/[organization_id]". For example, "organizations/1234".|
|state|string|false|read-only|Output only. The organization's current lifecycle state.|
|updateTime|string(google-datetime)|false|read-only|Output only. Timestamp when the Organization was last modified.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|ACTIVE|
|state|DELETE_REQUESTED|

<h2 id="tocS_Policy">Policy</h2>
<!-- backwards compatibility -->
<a id="schemapolicy"></a>
<a id="schema_Policy"></a>
<a id="tocSpolicy"></a>
<a id="tocspolicy"></a>

```json
{
  "auditConfigs": [
    {
      "auditLogConfigs": [
        {
          "exemptedMembers": [
            "string"
          ],
          "logType": "LOG_TYPE_UNSPECIFIED"
        }
      ],
      "service": "string"
    }
  ],
  "bindings": [
    {
      "condition": {
        "description": "string",
        "expression": "string",
        "location": "string",
        "title": "string"
      },
      "members": [
        "string"
      ],
      "role": "string"
    }
  ],
  "etag": "string",
  "version": 0
}
```

An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auditConfigs|[[AuditConfig](#schemaauditconfig)]|false|none|Specifies cloud audit logging configuration for this policy.|
|bindings|[[Binding](#schemabinding)]|false|none|Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.|
|etag|string(byte)|false|none|`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.|
|version|integer(int32)|false|none|Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|

<h2 id="tocS_Project">Project</h2>
<!-- backwards compatibility -->
<a id="schemaproject"></a>
<a id="schema_Project"></a>
<a id="tocSproject"></a>
<a id="tocsproject"></a>

```json
{
  "createTime": "string",
  "deleteTime": "string",
  "displayName": "string",
  "etag": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "parent": "string",
  "projectId": "string",
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

A project is a high-level Google Cloud entity. It is a container for ACLs, APIs, App Engine Apps, VMs, and other Google Cloud Platform resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. Creation time.|
|deleteTime|string(google-datetime)|false|read-only|Output only. The time at which this resource was requested for deletion.|
|displayName|string|false|none|Optional. A user-assigned display name of the project. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, single-quote, double-quote, space, and exclamation point. Example: `My Project`|
|etag|string|false|read-only|Output only. A checksum computed by the server based on the current value of the Project resource. This may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.|
|labels|object|false|none|Optional. The labels associated with this project. Label keys must be between 1 and 63 characters long and must conform to the following regular expression: \[a-z\](\[-a-z0-9\]*\[a-z0-9\])?. Label values must be between 0 and 63 characters long and must conform to the regular expression (\[a-z\](\[-a-z0-9\]*\[a-z0-9\])?)?. No more than 64 labels can be associated with a given resource. Clients should store labels in a representation such as JSON that does not depend on specific characters being disallowed. Example: `"myBusinessDimension" : "businessValue"`|
|name|string|false|read-only|Output only. The unique resource name of the project. It is an int64 generated number prefixed by "projects/". Example: `projects/415104041262`|
|parent|string|false|none|Optional. A reference to a parent Resource. eg., `organizations/123` or `folders/876`.|
|projectId|string|false|none|Immutable. The unique, user-assigned id of the project. It must be 6 to 30 lowercase ASCII letters, digits, or hyphens. It must start with a letter. Trailing hyphens are prohibited. Example: `tokyo-rain-123`|
|state|string|false|read-only|Output only. The project lifecycle state.|
|updateTime|string(google-datetime)|false|read-only|Output only. The most recent time this resource was modified.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|ACTIVE|
|state|DELETE_REQUESTED|

<h2 id="tocS_ProjectCreationStatus">ProjectCreationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaprojectcreationstatus"></a>
<a id="schema_ProjectCreationStatus"></a>
<a id="tocSprojectcreationstatus"></a>
<a id="tocsprojectcreationstatus"></a>

```json
{
  "createTime": "string",
  "gettable": true,
  "ready": true
}
```

A status object which is used as the `metadata` field for the Operation returned by CreateProject. It provides insight for when significant phases of Project creation have completed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Creation time of the project creation workflow.|
|gettable|boolean|false|none|True if the project can be retrieved using GetProject. No other operations on the project are guaranteed to work until the project creation is complete.|
|ready|boolean|false|none|True if the project creation process is complete.|

<h2 id="tocS_SearchFoldersResponse">SearchFoldersResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchfoldersresponse"></a>
<a id="schema_SearchFoldersResponse"></a>
<a id="tocSsearchfoldersresponse"></a>
<a id="tocssearchfoldersresponse"></a>

```json
{
  "folders": [
    {
      "createTime": "string",
      "deleteTime": "string",
      "displayName": "string",
      "etag": "string",
      "name": "string",
      "parent": "string",
      "state": "STATE_UNSPECIFIED",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

The response message for searching folders.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|folders|[[Folder](#schemafolder)]|false|none|A possibly paginated folder search results. the specified parent resource.|
|nextPageToken|string|false|none|A pagination token returned from a previous call to `SearchFolders` that indicates from where searching should continue.|

<h2 id="tocS_SearchOrganizationsResponse">SearchOrganizationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchorganizationsresponse"></a>
<a id="schema_SearchOrganizationsResponse"></a>
<a id="tocSsearchorganizationsresponse"></a>
<a id="tocssearchorganizationsresponse"></a>

```json
{
  "nextPageToken": "string",
  "organizations": [
    {
      "createTime": "string",
      "deleteTime": "string",
      "directoryCustomerId": "string",
      "displayName": "string",
      "etag": "string",
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "updateTime": "string"
    }
  ]
}
```

The response returned from the `SearchOrganizations` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A pagination token to be used to retrieve the next page of results. If the result is too large to fit within the page size specified in the request, this field will be set with a token that can be used to fetch the next page of results. If this field is empty, it indicates that this response contains the last page of results.|
|organizations|[[Organization](#schemaorganization)]|false|none|The list of Organizations that matched the search query, possibly paginated.|

<h2 id="tocS_SearchProjectsResponse">SearchProjectsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchprojectsresponse"></a>
<a id="schema_SearchProjectsResponse"></a>
<a id="tocSsearchprojectsresponse"></a>
<a id="tocssearchprojectsresponse"></a>

```json
{
  "nextPageToken": "string",
  "projects": [
    {
      "createTime": "string",
      "deleteTime": "string",
      "displayName": "string",
      "etag": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "parent": "string",
      "projectId": "string",
      "state": "STATE_UNSPECIFIED",
      "updateTime": "string"
    }
  ]
}
```

A page of the response received from the SearchProjects method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Pagination token. If the result set is too large to fit in a single response, this token is returned. It encodes the position of the current result cursor. Feeding this value into a new list request with the `page_token` parameter gives the next page of the results. When `next_page_token` is not filled in, there is no next page and the list returned is the last page in the result set. Pagination tokens have a limited lifetime.|
|projects|[[Project](#schemaproject)]|false|none|The list of Projects that matched the list filter query. This list can be paginated.|

<h2 id="tocS_SetIamPolicyRequest">SetIamPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetiampolicyrequest"></a>
<a id="schema_SetIamPolicyRequest"></a>
<a id="tocSsetiampolicyrequest"></a>
<a id="tocssetiampolicyrequest"></a>

```json
{
  "policy": {
    "auditConfigs": [
      {
        "auditLogConfigs": [
          {
            "exemptedMembers": [
              "string"
            ],
            "logType": "LOG_TYPE_UNSPECIFIED"
          }
        ],
        "service": "string"
      }
    ],
    "bindings": [
      {
        "condition": {
          "description": "string",
          "expression": "string",
          "location": "string",
          "title": "string"
        },
        "members": [
          "string"
        ],
        "role": "string"
      }
    ],
    "etag": "string",
    "version": 0
  },
  "updateMask": "string"
}
```

Request message for `SetIamPolicy` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy|[Policy](#schemapolicy)|false|none|REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.|
|updateMask|string(google-fieldmask)|false|none|OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`|

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

<h2 id="tocS_TagBinding">TagBinding</h2>
<!-- backwards compatibility -->
<a id="schematagbinding"></a>
<a id="schema_TagBinding"></a>
<a id="tocStagbinding"></a>
<a id="tocstagbinding"></a>

```json
{
  "name": "string",
  "parent": "string",
  "tagValue": "string",
  "tagValueNamespacedName": "string"
}
```

A TagBinding represents a connection between a TagValue and a cloud resource Once a TagBinding is created, the TagValue is applied to all the descendants of the Google Cloud resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|read-only|Output only. The name of the TagBinding. This is a String of the form: `tagBindings/{full-resource-name}/{tag-value-name}` (e.g. `tagBindings/%2F%2Fcloudresourcemanager.googleapis.com%2Fprojects%2F123/tagValues/456`).|
|parent|string|false|none|The full resource name of the resource the TagValue is bound to. E.g. `//cloudresourcemanager.googleapis.com/projects/123`|
|tagValue|string|false|none|The TagValue of the TagBinding. Must be of the form `tagValues/456`.|
|tagValueNamespacedName|string|false|none|The namespaced name for the TagValue of the TagBinding. Must be in the format `{parent_id}/{tag_key_short_name}/{short_name}`. For methods that support TagValue namespaced name, only one of tag_value_namespaced_name or tag_value may be filled. Requests with both fields will be rejected.|

<h2 id="tocS_TagHold">TagHold</h2>
<!-- backwards compatibility -->
<a id="schemataghold"></a>
<a id="schema_TagHold"></a>
<a id="tocStaghold"></a>
<a id="tocstaghold"></a>

```json
{
  "createTime": "string",
  "helpLink": "string",
  "holder": "string",
  "name": "string",
  "origin": "string"
}
```

A TagHold represents the use of a TagValue that is not captured by TagBindings. If a TagValue has any TagHolds, deletion will be blocked. This resource is intended to be created in the same cloud location as the `holder`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time this TagHold was created.|
|helpLink|string|false|none|Optional. A URL where an end user can learn more about removing this hold. E.g. `https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing`|
|holder|string|false|none|Required. The name of the resource where the TagValue is being used. Must be less than 200 characters. E.g. `//compute.googleapis.com/compute/projects/myproject/regions/us-east-1/instanceGroupManagers/instance-group`|
|name|string|false|read-only|Output only. The resource name of a TagHold. This is a String of the form: `tagValues/{tag-value-id}/tagHolds/{tag-hold-id}` (e.g. `tagValues/123/tagHolds/456`). This resource name is generated by the server.|
|origin|string|false|none|Optional. An optional string representing the origin of this request. This field should include human-understandable information to distinguish origins from each other. Must be less than 200 characters. E.g. `migs-35678234`|

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "etag": "string",
  "name": "string",
  "namespacedName": "string",
  "parent": "string",
  "purpose": "PURPOSE_UNSPECIFIED",
  "purposeData": {
    "property1": "string",
    "property2": "string"
  },
  "shortName": "string",
  "updateTime": "string"
}
```

A TagKey, used to group a set of TagValues.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. Creation time.|
|description|string|false|none|Optional. User-assigned description of the TagKey. Must not exceed 256 characters. Read-write.|
|etag|string|false|none|Optional. Entity tag which users can pass to prevent race conditions. This field is always set in server responses. See UpdateTagKeyRequest for details.|
|name|string|false|none|Immutable. The resource name for a TagKey. Must be in the format `tagKeys/{tag_key_id}`, where `tag_key_id` is the generated numeric id for the TagKey.|
|namespacedName|string|false|read-only|Output only. Immutable. Namespaced name of the TagKey.|
|parent|string|false|none|Immutable. The resource name of the TagKey's parent. A TagKey can be parented by an Organization or a Project. For a TagKey parented by an Organization, its parent must be in the form `organizations/{org_id}`. For a TagKey parented by a Project, its parent can be in the form `projects/{project_id}` or `projects/{project_number}`.|
|purpose|string|false|none|Optional. A purpose denotes that this Tag is intended for use in policies of a specific policy engine, and will involve that policy engine in management operations involving this Tag. A purpose does not grant a policy engine exclusive rights to the Tag, and it may be referenced by other policy engines. A purpose cannot be changed once set.|
|purposeData|object|false|none|Optional. Purpose data corresponds to the policy system that the tag is intended for. See documentation for `Purpose` for formatting of this field. Purpose data cannot be changed once set.|
|shortName|string|false|none|Required. Immutable. The user friendly name for a TagKey. The short name should be unique for TagKeys within the same tag namespace. The short name must be 1-63 characters, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between.|
|updateTime|string(google-datetime)|false|read-only|Output only. Update time.|

#### Enumerated Values

|Property|Value|
|---|---|
|purpose|PURPOSE_UNSPECIFIED|
|purpose|GCE_FIREWALL|
|purpose|DATA_GOVERNANCE|

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "etag": "string",
  "name": "string",
  "namespacedName": "string",
  "parent": "string",
  "shortName": "string",
  "updateTime": "string"
}
```

A TagValue is a child of a particular TagKey. This is used to group cloud resources for the purpose of controlling them using policies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. Creation time.|
|description|string|false|none|Optional. User-assigned description of the TagValue. Must not exceed 256 characters. Read-write.|
|etag|string|false|none|Optional. Entity tag which users can pass to prevent race conditions. This field is always set in server responses. See UpdateTagValueRequest for details.|
|name|string|false|none|Immutable. Resource name for TagValue in the format `tagValues/456`.|
|namespacedName|string|false|read-only|Output only. The namespaced name of the TagValue. Can be in the form `{organization_id}/{tag_key_short_name}/{tag_value_short_name}` or `{project_id}/{tag_key_short_name}/{tag_value_short_name}` or `{project_number}/{tag_key_short_name}/{tag_value_short_name}`.|
|parent|string|false|none|Immutable. The resource name of the new TagValue's parent TagKey. Must be of the form `tagKeys/{tag_key_id}`.|
|shortName|string|false|none|Required. Immutable. User-assigned short name for TagValue. The short name should be unique for TagValues within the same parent TagKey. The short name must be 63 characters or less, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between.|
|updateTime|string(google-datetime)|false|read-only|Output only. Update time.|

<h2 id="tocS_TestIamPermissionsRequest">TestIamPermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schematestiampermissionsrequest"></a>
<a id="schema_TestIamPermissionsRequest"></a>
<a id="tocStestiampermissionsrequest"></a>
<a id="tocstestiampermissionsrequest"></a>

```json
{
  "permissions": [
    "string"
  ]
}
```

Request message for `TestIamPermissions` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|[string]|false|none|The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).|

<h2 id="tocS_TestIamPermissionsResponse">TestIamPermissionsResponse</h2>
<!-- backwards compatibility -->
<a id="schematestiampermissionsresponse"></a>
<a id="schema_TestIamPermissionsResponse"></a>
<a id="tocStestiampermissionsresponse"></a>
<a id="tocstestiampermissionsresponse"></a>

```json
{
  "permissions": [
    "string"
  ]
}
```

Response message for `TestIamPermissions` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|[string]|false|none|A subset of `TestPermissionsRequest.permissions` that the caller is allowed.|

<h2 id="tocS_UndeleteFolderMetadata">UndeleteFolderMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaundeletefoldermetadata"></a>
<a id="schema_UndeleteFolderMetadata"></a>
<a id="tocSundeletefoldermetadata"></a>
<a id="tocsundeletefoldermetadata"></a>

```json
{}
```

A status object which is used as the `metadata` field for the `Operation` returned by `UndeleteFolder`.

<h2 id="tocS_UndeleteFolderRequest">UndeleteFolderRequest</h2>
<!-- backwards compatibility -->
<a id="schemaundeletefolderrequest"></a>
<a id="schema_UndeleteFolderRequest"></a>
<a id="tocSundeletefolderrequest"></a>
<a id="tocsundeletefolderrequest"></a>

```json
{}
```

The UndeleteFolder request message.

<h2 id="tocS_UndeleteOrganizationMetadata">UndeleteOrganizationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaundeleteorganizationmetadata"></a>
<a id="schema_UndeleteOrganizationMetadata"></a>
<a id="tocSundeleteorganizationmetadata"></a>
<a id="tocsundeleteorganizationmetadata"></a>

```json
{}
```

A status object which is used as the `metadata` field for the Operation returned by UndeleteOrganization.

<h2 id="tocS_UndeleteProjectMetadata">UndeleteProjectMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaundeleteprojectmetadata"></a>
<a id="schema_UndeleteProjectMetadata"></a>
<a id="tocSundeleteprojectmetadata"></a>
<a id="tocsundeleteprojectmetadata"></a>

```json
{}
```

A status object which is used as the `metadata` field for the Operation returned by `UndeleteProject`.

<h2 id="tocS_UndeleteProjectRequest">UndeleteProjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemaundeleteprojectrequest"></a>
<a id="schema_UndeleteProjectRequest"></a>
<a id="tocSundeleteprojectrequest"></a>
<a id="tocsundeleteprojectrequest"></a>

```json
{}
```

The request sent to the UndeleteProject method.

<h2 id="tocS_UpdateFolderMetadata">UpdateFolderMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefoldermetadata"></a>
<a id="schema_UpdateFolderMetadata"></a>
<a id="tocSupdatefoldermetadata"></a>
<a id="tocsupdatefoldermetadata"></a>

```json
{}
```

A status object which is used as the `metadata` field for the Operation returned by UpdateFolder.

<h2 id="tocS_UpdateProjectMetadata">UpdateProjectMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprojectmetadata"></a>
<a id="schema_UpdateProjectMetadata"></a>
<a id="tocSupdateprojectmetadata"></a>
<a id="tocsupdateprojectmetadata"></a>

```json
{}
```

A status object which is used as the `metadata` field for the Operation returned by UpdateProject.

<h2 id="tocS_UpdateTagKeyMetadata">UpdateTagKeyMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetagkeymetadata"></a>
<a id="schema_UpdateTagKeyMetadata"></a>
<a id="tocSupdatetagkeymetadata"></a>
<a id="tocsupdatetagkeymetadata"></a>

```json
{}
```

Runtime operation information for updating a TagKey.

<h2 id="tocS_UpdateTagValueMetadata">UpdateTagValueMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetagvaluemetadata"></a>
<a id="schema_UpdateTagValueMetadata"></a>
<a id="tocSupdatetagvaluemetadata"></a>
<a id="tocsupdatetagvaluemetadata"></a>

```json
{}
```

Runtime operation information for updating a TagValue.
