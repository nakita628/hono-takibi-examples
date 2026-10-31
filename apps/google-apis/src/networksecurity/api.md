<h1 id="network-security-api">Network Security API v1beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://networksecurity.googleapis.com/">https://networksecurity.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/networking">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

<h1 id="network-security-api-projects">projects</h1>

## networksecurity.projects.locations.addressGroups.addItems

<a id="opIdnetworksecurity.projects.locations.addressGroups.addItems"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:addItems \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "items": [
      "string"
    ],
    "requestId": "string"
  }'
```

`POST /v1beta1/{addressGroup}:addItems`

Adds items to an address group.

> Body parameter

```json
{
  "items": [
    "string"
  ],
  "requestId": "string"
}
```

<h3 id="networksecurityprojectslocationsaddressgroupsadditems-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|addressGroup|path|string|true|Required. A name of the AddressGroup to add items to. Must be in the format `projects\|organization/*/locations/{location}/addressGroups/*`.|
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
|body|body|[AddAddressGroupItemsRequest](#schemaaddaddressgroupitemsrequest)|false|none|
|» items|body|[string]|false|Required. List of items to add.|
|» requestId|body|string|false|Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|

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

<h3 id="networksecurityprojectslocationsaddressgroupsadditems-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networksecurity.projects.locations.addressGroups.cloneItems

<a id="opIdnetworksecurity.projects.locations.addressGroups.cloneItems"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:cloneItems \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "requestId": "string",
    "sourceAddressGroup": "string"
  }'
```

`POST /v1beta1/{addressGroup}:cloneItems`

Clones items from one address group to another.

> Body parameter

```json
{
  "requestId": "string",
  "sourceAddressGroup": "string"
}
```

<h3 id="networksecurityprojectslocationsaddressgroupscloneitems-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|addressGroup|path|string|true|Required. A name of the AddressGroup to clone items to. Must be in the format `projects\|organization/*/locations/{location}/addressGroups/*`.|
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
|body|body|[CloneAddressGroupItemsRequest](#schemacloneaddressgroupitemsrequest)|false|none|
|» requestId|body|string|false|Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
|» sourceAddressGroup|body|string|false|Required. Source address group to clone items from.|

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

<h3 id="networksecurityprojectslocationsaddressgroupscloneitems-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networksecurity.projects.locations.addressGroups.listReferences

<a id="opIdnetworksecurity.projects.locations.addressGroups.listReferences"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:listReferences \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{addressGroup}:listReferences`

Lists references of an address group.

<h3 id="networksecurityprojectslocationsaddressgroupslistreferences-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|addressGroup|path|string|true|Required. A name of the AddressGroup to clone items to. Must be in the format `projects\|organization/*/locations/{location}/addressGroups/*`.|
|pageSize|query|integer|false|The maximum number of references to return. If unspecified, server will pick an appropriate default. Server may return fewer items than requested. A caller should only rely on response's next_page_token to determine if there are more AddressGroupUsers left to be queried.|
|pageToken|query|string|false|The next_page_token value returned from a previous List request, if any.|
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
  "addressGroupReferences": [
    {
      "firewallPolicy": "string",
      "rulePriority": 0
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="networksecurityprojectslocationsaddressgroupslistreferences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListAddressGroupReferencesResponse](#schemalistaddressgroupreferencesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networksecurity.projects.locations.addressGroups.removeItems

<a id="opIdnetworksecurity.projects.locations.addressGroups.removeItems"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:removeItems \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "items": [
      "string"
    ],
    "requestId": "string"
  }'
```

`POST /v1beta1/{addressGroup}:removeItems`

Removes items from an address group.

> Body parameter

```json
{
  "items": [
    "string"
  ],
  "requestId": "string"
}
```

<h3 id="networksecurityprojectslocationsaddressgroupsremoveitems-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|addressGroup|path|string|true|Required. A name of the AddressGroup to remove items from. Must be in the format `projects\|organization/*/locations/{location}/addressGroups/*`.|
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
|body|body|[RemoveAddressGroupItemsRequest](#schemaremoveaddressgroupitemsrequest)|false|none|
|» items|body|[string]|false|Required. List of items to remove.|
|» requestId|body|string|false|Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|

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

<h3 id="networksecurityprojectslocationsaddressgroupsremoveitems-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networksecurity.projects.locations.urlLists.get

<a id="opIdnetworksecurity.projects.locations.urlLists.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}`

Gets details of a single UrlList.

<h3 id="networksecurityprojectslocationsurllistsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. A name of the UrlList to get. Must be in the format `projects/*/locations/{location}/urlLists/*`.|
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
  "name": "string",
  "updateTime": "string",
  "values": [
    "string"
  ]
}
```

<h3 id="networksecurityprojectslocationsurllistsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[UrlList](#schemaurllist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networksecurity.projects.locations.urlLists.delete

<a id="opIdnetworksecurity.projects.locations.urlLists.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta1/{name}`

Deletes a single UrlList.

<h3 id="networksecurityprojectslocationsurllistsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. A name of the UrlList to delete. Must be in the format `projects/*/locations/{location}/urlLists/*`.|
|force|query|boolean|false|If set to true, any rules for this TlsInspectionPolicy will also be deleted. (Otherwise, the request will only work if the TlsInspectionPolicy has no rules.)|
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

<h3 id="networksecurityprojectslocationsurllistsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networksecurity.projects.locations.urlLists.patch

<a id="opIdnetworksecurity.projects.locations.urlLists.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "name": "string",
    "values": [
      "string"
    ]
  }'
```

`PATCH /v1beta1/{name}`

Updates the parameters of a single UrlList.

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "values": [
    "string"
  ]
}
```

<h3 id="networksecurityprojectslocationsurllistspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the resource provided by the user. Name is of the form projects/{project}/locations/{location}/urlLists/{url_list} url_list should match the pattern:(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$).|
|updateMask|query|string|false|Optional. Field mask is used to specify the fields to be overwritten in the UrlList resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.|
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
|body|body|[UrlList](#schemaurllist)|false|none|
|» description|body|string|false|Optional. Free-text description of the resource.|
|» name|body|string|false|Required. Name of the resource provided by the user. Name is of the form projects/{project}/locations/{location}/urlLists/{url_list} url_list should match the pattern:(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$).|
|» values|body|[string]|false|Required. FQDNs and URLs.|

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

<h3 id="networksecurityprojectslocationsurllistspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networksecurity.projects.locations.list

<a id="opIdnetworksecurity.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}/locations`

Lists information about the supported locations for this service.

<h3 id="networksecurityprojectslocationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource that owns the locations collection, if applicable.|
|filter|query|string|false|A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).|
|pageSize|query|integer|false|The maximum number of results to return. If not set, the service selects a default.|
|pageToken|query|string|false|A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.|
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
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "locationId": "string",
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="networksecurityprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networksecurity.projects.locations.operations.list

<a id="opIdnetworksecurity.projects.locations.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="networksecurityprojectslocationsoperationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation's parent resource.|
|filter|query|string|false|The standard list filter.|
|pageSize|query|integer|false|The standard list page size.|
|pageToken|query|string|false|The standard list page token.|
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
  "operations": [
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
  ]
}
```

<h3 id="networksecurityprojectslocationsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOperationsResponse](#schemalistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networksecurity.projects.locations.operations.cancel

<a id="opIdnetworksecurity.projects.locations.operations.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta1/{name}:cancel`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

> Body parameter

```json
{}
```

<h3 id="networksecurityprojectslocationsoperationscancel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource to be cancelled.|
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
|body|body|[CancelOperationRequest](#schemacanceloperationrequest)|false|none|

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

<h3 id="networksecurityprojectslocationsoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networksecurity.projects.locations.addressGroups.list

<a id="opIdnetworksecurity.projects.locations.addressGroups.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/addressGroups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/addressGroups`

Lists address groups in a given project and location.

<h3 id="networksecurityprojectslocationsaddressgroupslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project and location from which the AddressGroups should be listed, specified in the format `projects/*/locations/{location}`.|
|pageSize|query|integer|false|Maximum number of AddressGroups to return per call.|
|pageToken|query|string|false|The value returned by the last `ListAddressGroupsResponse` Indicates that this is a continuation of a prior `ListAddressGroups` call, and that the system should return the next page of data.|
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
  "addressGroups": [
    {
      "capacity": 0,
      "createTime": "string",
      "description": "string",
      "items": [
        "string"
      ],
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "selfLink": "string",
      "type": "TYPE_UNSPECIFIED",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="networksecurityprojectslocationsaddressgroupslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListAddressGroupsResponse](#schemalistaddressgroupsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networksecurity.projects.locations.addressGroups.create

<a id="opIdnetworksecurity.projects.locations.addressGroups.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/addressGroups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "capacity": 0,
    "description": "string",
    "items": [
      "string"
    ],
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "type": "TYPE_UNSPECIFIED"
  }'
```

`POST /v1beta1/{parent}/addressGroups`

Creates a new address group in a given project and location.

> Body parameter

```json
{
  "capacity": 0,
  "description": "string",
  "items": [
    "string"
  ],
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "type": "TYPE_UNSPECIFIED"
}
```

<h3 id="networksecurityprojectslocationsaddressgroupscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource of the AddressGroup. Must be in the format `projects/*/locations/{location}`.|
|addressGroupId|query|string|false|Required. Short name of the AddressGroup resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "authz_policy".|
|requestId|query|string|false|Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
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
|body|body|[AddressGroup](#schemaaddressgroup)|false|none|
|» capacity|body|integer(int32)|false|Required. Capacity of the Address Group|
|» description|body|string|false|Optional. Free-text description of the resource.|
|» items|body|[string]|false|Optional. List of items.|
|» labels|body|object|false|Optional. Set of label tags associated with the AddressGroup resource.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Required. Name of the AddressGroup resource. It matches pattern `projects/*/locations/{location}/addressGroups/`.|
|» type|body|string|false|Required. The type of the Address Group. Possible values are "IPv4" or "IPV6".|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» type|TYPE_UNSPECIFIED|
|» type|IPV4|
|» type|IPV6|

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

<h3 id="networksecurityprojectslocationsaddressgroupscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networksecurity.projects.locations.authorizationPolicies.list

<a id="opIdnetworksecurity.projects.locations.authorizationPolicies.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/authorizationPolicies \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/authorizationPolicies`

Lists AuthorizationPolicies in a given project and location.

<h3 id="networksecurityprojectslocationsauthorizationpolicieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project and location from which the AuthorizationPolicies should be listed, specified in the format `projects/{project}/locations/{location}`.|
|pageSize|query|integer|false|Maximum number of AuthorizationPolicies to return per call.|
|pageToken|query|string|false|The value returned by the last `ListAuthorizationPoliciesResponse` Indicates that this is a continuation of a prior `ListAuthorizationPolicies` call, and that the system should return the next page of data.|
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
  "authorizationPolicies": [
    {
      "action": "ACTION_UNSPECIFIED",
      "createTime": "string",
      "description": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "rules": [
        {
          "destinations": [
            {
              "hosts": [
                "string"
              ],
              "httpHeaderMatch": {
                "headerName": "string",
                "regexMatch": "string"
              },
              "methods": [
                "string"
              ],
              "ports": [
                0
              ]
            }
          ],
          "sources": [
            {
              "ipBlocks": [
                "string"
              ],
              "principals": [
                "string"
              ]
            }
          ]
        }
      ],
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="networksecurityprojectslocationsauthorizationpolicieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListAuthorizationPoliciesResponse](#schemalistauthorizationpoliciesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networksecurity.projects.locations.authorizationPolicies.create

<a id="opIdnetworksecurity.projects.locations.authorizationPolicies.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/authorizationPolicies \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "action": "ACTION_UNSPECIFIED",
    "description": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "rules": [
      {
        "destinations": [
          {
            "hosts": [
              "string"
            ],
            "httpHeaderMatch": {
              "headerName": "string",
              "regexMatch": "string"
            },
            "methods": [
              "string"
            ],
            "ports": [
              0
            ]
          }
        ],
        "sources": [
          {
            "ipBlocks": [
              "string"
            ],
            "principals": [
              "string"
            ]
          }
        ]
      }
    ]
  }'
```

`POST /v1beta1/{parent}/authorizationPolicies`

Creates a new AuthorizationPolicy in a given project and location.

> Body parameter

```json
{
  "action": "ACTION_UNSPECIFIED",
  "description": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "rules": [
    {
      "destinations": [
        {
          "hosts": [
            "string"
          ],
          "httpHeaderMatch": {
            "headerName": "string",
            "regexMatch": "string"
          },
          "methods": [
            "string"
          ],
          "ports": [
            0
          ]
        }
      ],
      "sources": [
        {
          "ipBlocks": [
            "string"
          ],
          "principals": [
            "string"
          ]
        }
      ]
    }
  ]
}
```

<h3 id="networksecurityprojectslocationsauthorizationpoliciescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource of the AuthorizationPolicy. Must be in the format `projects/{project}/locations/{location}`.|
|authorizationPolicyId|query|string|false|Required. Short name of the AuthorizationPolicy resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "authz_policy".|
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
|body|body|[AuthorizationPolicy](#schemaauthorizationpolicy)|false|none|
|» action|body|string|false|Required. The action to take when a rule match is found. Possible values are "ALLOW" or "DENY".|
|» description|body|string|false|Optional. Free-text description of the resource.|
|» labels|body|object|false|Optional. Set of label tags associated with the AuthorizationPolicy resource.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Required. Name of the AuthorizationPolicy resource. It matches pattern `projects/{project}/locations/{location}/authorizationPolicies/`.|
|» rules|body|[[Rule](#schemarule)]|false|Optional. List of rules to match. Note that at least one of the rules must match in order for the action specified in the 'action' field to be taken. A rule is a match if there is a matching source and destination. If left blank, the action specified in the `action` field will be applied on every request.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» action|ACTION_UNSPECIFIED|
|» action|ALLOW|
|» action|DENY|

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

<h3 id="networksecurityprojectslocationsauthorizationpoliciescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networksecurity.projects.locations.clientTlsPolicies.list

<a id="opIdnetworksecurity.projects.locations.clientTlsPolicies.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/clientTlsPolicies \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/clientTlsPolicies`

Lists ClientTlsPolicies in a given project and location.

<h3 id="networksecurityprojectslocationsclienttlspolicieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project and location from which the ClientTlsPolicies should be listed, specified in the format `projects/*/locations/{location}`.|
|pageSize|query|integer|false|Maximum number of ClientTlsPolicies to return per call.|
|pageToken|query|string|false|The value returned by the last `ListClientTlsPoliciesResponse` Indicates that this is a continuation of a prior `ListClientTlsPolicies` call, and that the system should return the next page of data.|
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
  "clientTlsPolicies": [
    {
      "clientCertificate": {
        "certificateProviderInstance": {
          "pluginInstance": "string"
        },
        "grpcEndpoint": {
          "targetUri": "string"
        }
      },
      "createTime": "string",
      "description": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "serverValidationCa": [
        {
          "certificateProviderInstance": {
            "pluginInstance": "string"
          },
          "grpcEndpoint": {
            "targetUri": "string"
          }
        }
      ],
      "sni": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="networksecurityprojectslocationsclienttlspolicieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListClientTlsPoliciesResponse](#schemalistclienttlspoliciesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networksecurity.projects.locations.clientTlsPolicies.create

<a id="opIdnetworksecurity.projects.locations.clientTlsPolicies.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/clientTlsPolicies \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clientCertificate": {
      "certificateProviderInstance": {
        "pluginInstance": "string"
      },
      "grpcEndpoint": {
        "targetUri": "string"
      }
    },
    "description": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "serverValidationCa": [
      {
        "certificateProviderInstance": {
          "pluginInstance": "string"
        },
        "grpcEndpoint": {
          "targetUri": "string"
        }
      }
    ],
    "sni": "string"
  }'
```

`POST /v1beta1/{parent}/clientTlsPolicies`

Creates a new ClientTlsPolicy in a given project and location.

> Body parameter

```json
{
  "clientCertificate": {
    "certificateProviderInstance": {
      "pluginInstance": "string"
    },
    "grpcEndpoint": {
      "targetUri": "string"
    }
  },
  "description": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "serverValidationCa": [
    {
      "certificateProviderInstance": {
        "pluginInstance": "string"
      },
      "grpcEndpoint": {
        "targetUri": "string"
      }
    }
  ],
  "sni": "string"
}
```

<h3 id="networksecurityprojectslocationsclienttlspoliciescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource of the ClientTlsPolicy. Must be in the format `projects/*/locations/{location}`.|
|clientTlsPolicyId|query|string|false|Required. Short name of the ClientTlsPolicy resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "client_mtls_policy".|
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
|body|body|[ClientTlsPolicy](#schemaclienttlspolicy)|false|none|
|» clientCertificate|body|[GoogleCloudNetworksecurityV1beta1CertificateProvider](#schemagooglecloudnetworksecurityv1beta1certificateprovider)|false|Optional. Defines a mechanism to provision client identity (public and private keys) for peer to peer authentication. The presence of this dictates mTLS.|
|» description|body|string|false|Optional. Free-text description of the resource.|
|» labels|body|object|false|Optional. Set of label tags associated with the resource.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Required. Name of the ClientTlsPolicy resource. It matches the pattern `projects/*/locations/{location}/clientTlsPolicies/{client_tls_policy}`|
|» serverValidationCa|body|[[ValidationCA](#schemavalidationca)]|false|Optional. Defines the mechanism to obtain the Certificate Authority certificate to validate the server certificate. If empty, client does not validate the server certificate.|
|» sni|body|string|false|Optional. Server Name Indication string to present to the server during TLS handshake. E.g: "secure.example.com".|

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

<h3 id="networksecurityprojectslocationsclienttlspoliciescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networksecurity.projects.locations.gatewaySecurityPolicies.list

<a id="opIdnetworksecurity.projects.locations.gatewaySecurityPolicies.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/gatewaySecurityPolicies \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/gatewaySecurityPolicies`

Lists GatewaySecurityPolicies in a given project and location.

<h3 id="networksecurityprojectslocationsgatewaysecuritypolicieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project and location from which the GatewaySecurityPolicies should be listed, specified in the format `projects/{project}/locations/{location}`.|
|pageSize|query|integer|false|Maximum number of GatewaySecurityPolicies to return per call.|
|pageToken|query|string|false|The value returned by the last 'ListGatewaySecurityPoliciesResponse' Indicates that this is a continuation of a prior 'ListGatewaySecurityPolicies' call, and that the system should return the next page of data.|
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
  "gatewaySecurityPolicies": [
    {
      "createTime": "string",
      "description": "string",
      "name": "string",
      "tlsInspectionPolicy": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="networksecurityprojectslocationsgatewaysecuritypolicieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListGatewaySecurityPoliciesResponse](#schemalistgatewaysecuritypoliciesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networksecurity.projects.locations.gatewaySecurityPolicies.create

<a id="opIdnetworksecurity.projects.locations.gatewaySecurityPolicies.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/gatewaySecurityPolicies \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "name": "string",
    "tlsInspectionPolicy": "string"
  }'
```

`POST /v1beta1/{parent}/gatewaySecurityPolicies`

Creates a new GatewaySecurityPolicy in a given project and location.

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "tlsInspectionPolicy": "string"
}
```

<h3 id="networksecurityprojectslocationsgatewaysecuritypoliciescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource of the GatewaySecurityPolicy. Must be in the format `projects/{project}/locations/{location}`.|
|gatewaySecurityPolicyId|query|string|false|Required. Short name of the GatewaySecurityPolicy resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "gateway_security_policy1".|
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
|body|body|[GatewaySecurityPolicy](#schemagatewaysecuritypolicy)|false|none|
|» description|body|string|false|Optional. Free-text description of the resource.|
|» name|body|string|false|Required. Name of the resource. Name is of the form projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy} gateway_security_policy should match the pattern:(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$).|
|» tlsInspectionPolicy|body|string|false|Optional. Name of a TLS Inspection Policy resource that defines how TLS inspection will be performed for any rule(s) which enables it.|

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

<h3 id="networksecurityprojectslocationsgatewaysecuritypoliciescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networksecurity.projects.locations.gatewaySecurityPolicies.rules.list

<a id="opIdnetworksecurity.projects.locations.gatewaySecurityPolicies.rules.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/rules \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/rules`

Lists GatewaySecurityPolicyRules in a given project and location.

<h3 id="networksecurityprojectslocationsgatewaysecuritypoliciesruleslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project, location and GatewaySecurityPolicy from which the GatewaySecurityPolicyRules should be listed, specified in the format `projects/{project}/locations/{location}/gatewaySecurityPolicies/{gatewaySecurityPolicy}`.|
|pageSize|query|integer|false|Maximum number of GatewaySecurityPolicyRules to return per call.|
|pageToken|query|string|false|The value returned by the last 'ListGatewaySecurityPolicyRulesResponse' Indicates that this is a continuation of a prior 'ListGatewaySecurityPolicyRules' call, and that the system should return the next page of data.|
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
  "gatewaySecurityPolicyRules": [
    {
      "applicationMatcher": "string",
      "basicProfile": "BASIC_PROFILE_UNSPECIFIED",
      "createTime": "string",
      "description": "string",
      "enabled": true,
      "name": "string",
      "priority": 0,
      "sessionMatcher": "string",
      "tlsInspectionEnabled": true,
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="networksecurityprojectslocationsgatewaysecuritypoliciesruleslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListGatewaySecurityPolicyRulesResponse](#schemalistgatewaysecuritypolicyrulesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networksecurity.projects.locations.gatewaySecurityPolicies.rules.create

<a id="opIdnetworksecurity.projects.locations.gatewaySecurityPolicies.rules.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/rules \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "applicationMatcher": "string",
    "basicProfile": "BASIC_PROFILE_UNSPECIFIED",
    "description": "string",
    "enabled": true,
    "name": "string",
    "priority": 0,
    "sessionMatcher": "string",
    "tlsInspectionEnabled": true
  }'
```

`POST /v1beta1/{parent}/rules`

Creates a new GatewaySecurityPolicy in a given project and location.

> Body parameter

```json
{
  "applicationMatcher": "string",
  "basicProfile": "BASIC_PROFILE_UNSPECIFIED",
  "description": "string",
  "enabled": true,
  "name": "string",
  "priority": 0,
  "sessionMatcher": "string",
  "tlsInspectionEnabled": true
}
```

<h3 id="networksecurityprojectslocationsgatewaysecuritypoliciesrulescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent where this rule will be created. Format : projects/{project}/location/{location}/gatewaySecurityPolicies/*|
|gatewaySecurityPolicyRuleId|query|string|false|The ID to use for the rule, which will become the final component of the rule's resource name. This value should be 4-63 characters, and valid characters are /a-z-/.|
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
|body|body|[GatewaySecurityPolicyRule](#schemagatewaysecuritypolicyrule)|false|none|
|» applicationMatcher|body|string|false|Optional. CEL expression for matching on L7/application level criteria.|
|» basicProfile|body|string|false|Required. Profile which tells what the primitive action should be.|
|» description|body|string|false|Optional. Free-text description of the resource.|
|» enabled|body|boolean|false|Required. Whether the rule is enforced.|
|» name|body|string|false|Required. Immutable. Name of the resource. ame is the full resource name so projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy}/rules/{rule} rule should match the pattern: (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$).|
|» priority|body|integer(int32)|false|Required. Priority of the rule. Lower number corresponds to higher precedence.|
|» sessionMatcher|body|string|false|Required. CEL expression for matching on session criteria.|
|» tlsInspectionEnabled|body|boolean|false|Optional. Flag to enable TLS inspection of traffic matching on , can only be true if the parent GatewaySecurityPolicy references a TLSInspectionConfig.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» basicProfile|BASIC_PROFILE_UNSPECIFIED|
|» basicProfile|ALLOW|
|» basicProfile|DENY|

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

<h3 id="networksecurityprojectslocationsgatewaysecuritypoliciesrulescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networksecurity.projects.locations.serverTlsPolicies.list

<a id="opIdnetworksecurity.projects.locations.serverTlsPolicies.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/serverTlsPolicies \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/serverTlsPolicies`

Lists ServerTlsPolicies in a given project and location.

<h3 id="networksecurityprojectslocationsservertlspolicieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project and location from which the ServerTlsPolicies should be listed, specified in the format `projects/*/locations/{location}`.|
|pageSize|query|integer|false|Maximum number of ServerTlsPolicies to return per call.|
|pageToken|query|string|false|The value returned by the last `ListServerTlsPoliciesResponse` Indicates that this is a continuation of a prior `ListServerTlsPolicies` call, and that the system should return the next page of data.|
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
  "serverTlsPolicies": [
    {
      "allowOpen": true,
      "createTime": "string",
      "description": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "mtlsPolicy": {
        "clientValidationCa": [
          {
            "certificateProviderInstance": {
              "pluginInstance": "string"
            },
            "grpcEndpoint": {
              "targetUri": "string"
            }
          }
        ],
        "clientValidationMode": "CLIENT_VALIDATION_MODE_UNSPECIFIED",
        "clientValidationTrustConfig": "string"
      },
      "name": "string",
      "serverCertificate": {
        "certificateProviderInstance": {
          "pluginInstance": "string"
        },
        "grpcEndpoint": {
          "targetUri": "string"
        }
      },
      "updateTime": "string"
    }
  ]
}
```

<h3 id="networksecurityprojectslocationsservertlspolicieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListServerTlsPoliciesResponse](#schemalistservertlspoliciesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networksecurity.projects.locations.serverTlsPolicies.create

<a id="opIdnetworksecurity.projects.locations.serverTlsPolicies.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/serverTlsPolicies \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "allowOpen": true,
    "description": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "mtlsPolicy": {
      "clientValidationCa": [
        {
          "certificateProviderInstance": {
            "pluginInstance": "string"
          },
          "grpcEndpoint": {
            "targetUri": "string"
          }
        }
      ],
      "clientValidationMode": "CLIENT_VALIDATION_MODE_UNSPECIFIED",
      "clientValidationTrustConfig": "string"
    },
    "name": "string",
    "serverCertificate": {
      "certificateProviderInstance": {
        "pluginInstance": "string"
      },
      "grpcEndpoint": {
        "targetUri": "string"
      }
    }
  }'
```

`POST /v1beta1/{parent}/serverTlsPolicies`

Creates a new ServerTlsPolicy in a given project and location.

> Body parameter

```json
{
  "allowOpen": true,
  "description": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "mtlsPolicy": {
    "clientValidationCa": [
      {
        "certificateProviderInstance": {
          "pluginInstance": "string"
        },
        "grpcEndpoint": {
          "targetUri": "string"
        }
      }
    ],
    "clientValidationMode": "CLIENT_VALIDATION_MODE_UNSPECIFIED",
    "clientValidationTrustConfig": "string"
  },
  "name": "string",
  "serverCertificate": {
    "certificateProviderInstance": {
      "pluginInstance": "string"
    },
    "grpcEndpoint": {
      "targetUri": "string"
    }
  }
}
```

<h3 id="networksecurityprojectslocationsservertlspoliciescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource of the ServerTlsPolicy. Must be in the format `projects/*/locations/{location}`.|
|serverTlsPolicyId|query|string|false|Required. Short name of the ServerTlsPolicy resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "server_mtls_policy".|
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
|body|body|[ServerTlsPolicy](#schemaservertlspolicy)|false|none|
|» allowOpen|body|boolean|false|Can be enabled only for Traffic Director policies, must be false for External HTTPS LB policies. Determines if server allows plaintext connections. If set to true, server allows plain text connections. By default, it is set to false. This setting is not exclusive of other encryption modes. For example, if `allow_open` and `mtls_policy` are set, server allows both plain text and mTLS connections. See documentation of other encryption modes to confirm compatibility. Consider using it if you wish to upgrade in place your deployment to TLS while having mixed TLS and non-TLS traffic reaching port :80.|
|» description|body|string|false|Free-text description of the resource.|
|» labels|body|object|false|Set of label tags associated with the resource.|
|» » **additionalProperties**|body|string|false|none|
|» mtlsPolicy|body|[MTLSPolicy](#schemamtlspolicy)|false|Required if policy is to be used with the External HTTPS LB, for Traffic Director allowed to be empty. Defines a mechanism to provision peer validation certificates for peer to peer authentication (Mutual TLS - mTLS). If not specified, client certificate will not be requested. The connection is treated as TLS and not mTLS. If `allow_open` and `mtls_policy` are set, server allows both plain text and mTLS connections.|
|» name|body|string|false|Required. Name of the ServerTlsPolicy resource. It matches the pattern `projects/*/locations/{location}/serverTlsPolicies/{server_tls_policy}`|
|» serverCertificate|body|[GoogleCloudNetworksecurityV1beta1CertificateProvider](#schemagooglecloudnetworksecurityv1beta1certificateprovider)|false|Optional if policy is to be used with Traffic Director, for External HTTPS LB must be empty. Defines a mechanism to provision server identity (public and private keys). Cannot be combined with `allow_open` as a permissive mode that allows both plain text and TLS is not supported.|

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

<h3 id="networksecurityprojectslocationsservertlspoliciescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networksecurity.projects.locations.tlsInspectionPolicies.list

<a id="opIdnetworksecurity.projects.locations.tlsInspectionPolicies.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/tlsInspectionPolicies \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/tlsInspectionPolicies`

Lists TlsInspectionPolicies in a given project and location.

<h3 id="networksecurityprojectslocationstlsinspectionpolicieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project and location from which the TlsInspectionPolicies should be listed, specified in the format `projects/{project}/locations/{location}`.|
|pageSize|query|integer|false|Maximum number of TlsInspectionPolicies to return per call.|
|pageToken|query|string|false|The value returned by the last 'ListTlsInspectionPoliciesResponse' Indicates that this is a continuation of a prior 'ListTlsInspectionPolicies' call, and that the system should return the next page of data.|
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
  "tlsInspectionPolicies": [
    {
      "caPool": "string",
      "createTime": "string",
      "description": "string",
      "name": "string",
      "updateTime": "string"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

<h3 id="networksecurityprojectslocationstlsinspectionpolicieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListTlsInspectionPoliciesResponse](#schemalisttlsinspectionpoliciesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networksecurity.projects.locations.tlsInspectionPolicies.create

<a id="opIdnetworksecurity.projects.locations.tlsInspectionPolicies.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/tlsInspectionPolicies \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "caPool": "string",
    "description": "string",
    "name": "string"
  }'
```

`POST /v1beta1/{parent}/tlsInspectionPolicies`

Creates a new TlsInspectionPolicy in a given project and location.

> Body parameter

```json
{
  "caPool": "string",
  "description": "string",
  "name": "string"
}
```

<h3 id="networksecurityprojectslocationstlsinspectionpoliciescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource of the TlsInspectionPolicy. Must be in the format `projects/{project}/locations/{location}`.|
|tlsInspectionPolicyId|query|string|false|Required. Short name of the TlsInspectionPolicy resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "tls_inspection_policy1".|
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
|body|body|[TlsInspectionPolicy](#schematlsinspectionpolicy)|false|none|
|» caPool|body|string|false|Required. A CA pool resource used to issue interception certificates. The CA pool string has a relative resource path following the form "projects/{project}/locations/{location}/caPools/{ca_pool}".|
|» description|body|string|false|Optional. Free-text description of the resource.|
|» name|body|string|false|Required. Name of the resource. Name is of the form projects/{project}/locations/{location}/tlsInspectionPolicies/{tls_inspection_policy} tls_inspection_policy should match the pattern:(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$).|

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

<h3 id="networksecurityprojectslocationstlsinspectionpoliciescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networksecurity.projects.locations.urlLists.list

<a id="opIdnetworksecurity.projects.locations.urlLists.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/urlLists \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/urlLists`

Lists UrlLists in a given project and location.

<h3 id="networksecurityprojectslocationsurllistslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project and location from which the UrlLists should be listed, specified in the format `projects/{project}/locations/{location}`.|
|pageSize|query|integer|false|Maximum number of UrlLists to return per call.|
|pageToken|query|string|false|The value returned by the last `ListUrlListsResponse` Indicates that this is a continuation of a prior `ListUrlLists` call, and that the system should return the next page of data.|
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
  "unreachable": [
    "string"
  ],
  "urlLists": [
    {
      "createTime": "string",
      "description": "string",
      "name": "string",
      "updateTime": "string",
      "values": [
        "string"
      ]
    }
  ]
}
```

<h3 id="networksecurityprojectslocationsurllistslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListUrlListsResponse](#schemalisturllistsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networksecurity.projects.locations.urlLists.create

<a id="opIdnetworksecurity.projects.locations.urlLists.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/urlLists \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "name": "string",
    "values": [
      "string"
    ]
  }'
```

`POST /v1beta1/{parent}/urlLists`

Creates a new UrlList in a given project and location.

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "values": [
    "string"
  ]
}
```

<h3 id="networksecurityprojectslocationsurllistscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource of the UrlList. Must be in the format `projects/*/locations/{location}`.|
|urlListId|query|string|false|Required. Short name of the UrlList resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "url_list".|
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
|body|body|[UrlList](#schemaurllist)|false|none|
|» description|body|string|false|Optional. Free-text description of the resource.|
|» name|body|string|false|Required. Name of the resource provided by the user. Name is of the form projects/{project}/locations/{location}/urlLists/{url_list} url_list should match the pattern:(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$).|
|» values|body|[string]|false|Required. FQDNs and URLs.|

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

<h3 id="networksecurityprojectslocationsurllistscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networksecurity.projects.locations.serverTlsPolicies.getIamPolicy

<a id="opIdnetworksecurity.projects.locations.serverTlsPolicies.getIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:getIamPolicy \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{resource}:getIamPolicy`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

<h3 id="networksecurityprojectslocationsservertlspoliciesgetiampolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.|
|options.requestedPolicyVersion|query|integer|false|Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|
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

<h3 id="networksecurityprojectslocationsservertlspoliciesgetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleIamV1Policy](#schemagoogleiamv1policy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networksecurity.projects.locations.serverTlsPolicies.setIamPolicy

<a id="opIdnetworksecurity.projects.locations.serverTlsPolicies.setIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:setIamPolicy \
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

`POST /v1beta1/{resource}:setIamPolicy`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

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

<h3 id="networksecurityprojectslocationsservertlspoliciessetiampolicy-parameters">Parameters</h3>

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
|body|body|[GoogleIamV1SetIamPolicyRequest](#schemagoogleiamv1setiampolicyrequest)|false|none|
|» policy|body|[GoogleIamV1Policy](#schemagoogleiamv1policy)|false|REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.|
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

<h3 id="networksecurityprojectslocationsservertlspoliciessetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleIamV1Policy](#schemagoogleiamv1policy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## networksecurity.projects.locations.serverTlsPolicies.testIamPermissions

<a id="opIdnetworksecurity.projects.locations.serverTlsPolicies.testIamPermissions"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:testIamPermissions \
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

`POST /v1beta1/{resource}:testIamPermissions`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

> Body parameter

```json
{
  "permissions": [
    "string"
  ]
}
```

<h3 id="networksecurityprojectslocationsservertlspoliciestestiampermissions-parameters">Parameters</h3>

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
|body|body|[GoogleIamV1TestIamPermissionsRequest](#schemagoogleiamv1testiampermissionsrequest)|false|none|
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

<h3 id="networksecurityprojectslocationsservertlspoliciestestiampermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleIamV1TestIamPermissionsResponse](#schemagoogleiamv1testiampermissionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_AddAddressGroupItemsRequest">AddAddressGroupItemsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddaddressgroupitemsrequest"></a>
<a id="schema_AddAddressGroupItemsRequest"></a>
<a id="tocSaddaddressgroupitemsrequest"></a>
<a id="tocsaddaddressgroupitemsrequest"></a>

```json
{
  "items": [
    "string"
  ],
  "requestId": "string"
}
```

Request used by the AddAddressGroupItems method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[string]|false|none|Required. List of items to add.|
|requestId|string|false|none|Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|

<h2 id="tocS_AddressGroup">AddressGroup</h2>
<!-- backwards compatibility -->
<a id="schemaaddressgroup"></a>
<a id="schema_AddressGroup"></a>
<a id="tocSaddressgroup"></a>
<a id="tocsaddressgroup"></a>

```json
{
  "capacity": 0,
  "createTime": "string",
  "description": "string",
  "items": [
    "string"
  ],
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "selfLink": "string",
  "type": "TYPE_UNSPECIFIED",
  "updateTime": "string"
}
```

AddressGroup is a resource that specifies how a collection of IP/DNS used in Firewall Policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capacity|integer(int32)|false|none|Required. Capacity of the Address Group|
|createTime|string(google-datetime)|false|read-only|Output only. The timestamp when the resource was created.|
|description|string|false|none|Optional. Free-text description of the resource.|
|items|[string]|false|none|Optional. List of items.|
|labels|object|false|none|Optional. Set of label tags associated with the AddressGroup resource.|
|name|string|false|none|Required. Name of the AddressGroup resource. It matches pattern `projects/*/locations/{location}/addressGroups/`.|
|selfLink|string|false|read-only|Output only. Server-defined fully-qualified URL for this resource.|
|type|string|false|none|Required. The type of the Address Group. Possible values are "IPv4" or "IPV6".|
|updateTime|string(google-datetime)|false|read-only|Output only. The timestamp when the resource was updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|IPV4|
|type|IPV6|

<h2 id="tocS_AuthorizationPolicy">AuthorizationPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizationpolicy"></a>
<a id="schema_AuthorizationPolicy"></a>
<a id="tocSauthorizationpolicy"></a>
<a id="tocsauthorizationpolicy"></a>

```json
{
  "action": "ACTION_UNSPECIFIED",
  "createTime": "string",
  "description": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "rules": [
    {
      "destinations": [
        {
          "hosts": [
            "string"
          ],
          "httpHeaderMatch": {
            "headerName": "string",
            "regexMatch": "string"
          },
          "methods": [
            "string"
          ],
          "ports": [
            0
          ]
        }
      ],
      "sources": [
        {
          "ipBlocks": [
            "string"
          ],
          "principals": [
            "string"
          ]
        }
      ]
    }
  ],
  "updateTime": "string"
}
```

AuthorizationPolicy is a resource that specifies how a server should authorize incoming connections. This resource in itself does not change the configuration unless it's attached to a target https proxy or endpoint config selector resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|Required. The action to take when a rule match is found. Possible values are "ALLOW" or "DENY".|
|createTime|string(google-datetime)|false|read-only|Output only. The timestamp when the resource was created.|
|description|string|false|none|Optional. Free-text description of the resource.|
|labels|object|false|none|Optional. Set of label tags associated with the AuthorizationPolicy resource.|
|name|string|false|none|Required. Name of the AuthorizationPolicy resource. It matches pattern `projects/{project}/locations/{location}/authorizationPolicies/`.|
|rules|[[Rule](#schemarule)]|false|none|Optional. List of rules to match. Note that at least one of the rules must match in order for the action specified in the 'action' field to be taken. A rule is a match if there is a matching source and destination. If left blank, the action specified in the `action` field will be applied on every request.|
|updateTime|string(google-datetime)|false|read-only|Output only. The timestamp when the resource was updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|action|ACTION_UNSPECIFIED|
|action|ALLOW|
|action|DENY|

<h2 id="tocS_CancelOperationRequest">CancelOperationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacanceloperationrequest"></a>
<a id="schema_CancelOperationRequest"></a>
<a id="tocScanceloperationrequest"></a>
<a id="tocscanceloperationrequest"></a>

```json
{}
```

The request message for Operations.CancelOperation.

<h2 id="tocS_CertificateProviderInstance">CertificateProviderInstance</h2>
<!-- backwards compatibility -->
<a id="schemacertificateproviderinstance"></a>
<a id="schema_CertificateProviderInstance"></a>
<a id="tocScertificateproviderinstance"></a>
<a id="tocscertificateproviderinstance"></a>

```json
{
  "pluginInstance": "string"
}
```

Specification of a TLS certificate provider instance. Workloads may have one or more CertificateProvider instances (plugins) and one of them is enabled and configured by specifying this message. Workloads use the values from this message to locate and load the CertificateProvider instance configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pluginInstance|string|false|none|Required. Plugin instance name, used to locate and load CertificateProvider instance configuration. Set to "google_cloud_private_spiffe" to use Certificate Authority Service certificate provider instance.|

<h2 id="tocS_ClientTlsPolicy">ClientTlsPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaclienttlspolicy"></a>
<a id="schema_ClientTlsPolicy"></a>
<a id="tocSclienttlspolicy"></a>
<a id="tocsclienttlspolicy"></a>

```json
{
  "clientCertificate": {
    "certificateProviderInstance": {
      "pluginInstance": "string"
    },
    "grpcEndpoint": {
      "targetUri": "string"
    }
  },
  "createTime": "string",
  "description": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "serverValidationCa": [
    {
      "certificateProviderInstance": {
        "pluginInstance": "string"
      },
      "grpcEndpoint": {
        "targetUri": "string"
      }
    }
  ],
  "sni": "string",
  "updateTime": "string"
}
```

ClientTlsPolicy is a resource that specifies how a client should authenticate connections to backends of a service. This resource itself does not affect configuration unless it is attached to a backend service resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientCertificate|[GoogleCloudNetworksecurityV1beta1CertificateProvider](#schemagooglecloudnetworksecurityv1beta1certificateprovider)|false|none|Optional. Defines a mechanism to provision client identity (public and private keys) for peer to peer authentication. The presence of this dictates mTLS.|
|createTime|string(google-datetime)|false|read-only|Output only. The timestamp when the resource was created.|
|description|string|false|none|Optional. Free-text description of the resource.|
|labels|object|false|none|Optional. Set of label tags associated with the resource.|
|name|string|false|none|Required. Name of the ClientTlsPolicy resource. It matches the pattern `projects/*/locations/{location}/clientTlsPolicies/{client_tls_policy}`|
|serverValidationCa|[[ValidationCA](#schemavalidationca)]|false|none|Optional. Defines the mechanism to obtain the Certificate Authority certificate to validate the server certificate. If empty, client does not validate the server certificate.|
|sni|string|false|none|Optional. Server Name Indication string to present to the server during TLS handshake. E.g: "secure.example.com".|
|updateTime|string(google-datetime)|false|read-only|Output only. The timestamp when the resource was updated.|

<h2 id="tocS_CloneAddressGroupItemsRequest">CloneAddressGroupItemsRequest</h2>
<!-- backwards compatibility -->
<a id="schemacloneaddressgroupitemsrequest"></a>
<a id="schema_CloneAddressGroupItemsRequest"></a>
<a id="tocScloneaddressgroupitemsrequest"></a>
<a id="tocscloneaddressgroupitemsrequest"></a>

```json
{
  "requestId": "string",
  "sourceAddressGroup": "string"
}
```

Request used by the CloneAddressGroupItems method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|string|false|none|Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
|sourceAddressGroup|string|false|none|Required. Source address group to clone items from.|

<h2 id="tocS_Destination">Destination</h2>
<!-- backwards compatibility -->
<a id="schemadestination"></a>
<a id="schema_Destination"></a>
<a id="tocSdestination"></a>
<a id="tocsdestination"></a>

```json
{
  "hosts": [
    "string"
  ],
  "httpHeaderMatch": {
    "headerName": "string",
    "regexMatch": "string"
  },
  "methods": [
    "string"
  ],
  "ports": [
    0
  ]
}
```

Specification of traffic destination attributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hosts|[string]|false|none|Required. List of host names to match. Matched against the ":authority" header in http requests. At least one host should match. Each host can be an exact match, or a prefix match (example "mydomain.*") or a suffix match (example "*.myorg.com") or a presence (any) match "*".|
|httpHeaderMatch|[HttpHeaderMatch](#schemahttpheadermatch)|false|none|Optional. Match against key:value pair in http header. Provides a flexible match based on HTTP headers, for potentially advanced use cases. At least one header should match. Avoid using header matches to make authorization decisions unless there is a strong guarantee that requests arrive through a trusted client or proxy.|
|methods|[string]|false|none|Optional. A list of HTTP methods to match. At least one method should match. Should not be set for gRPC services.|
|ports|[integer(uint32)]|false|none|Required. List of destination ports to match. At least one port should match.|

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

<h2 id="tocS_GatewaySecurityPolicy">GatewaySecurityPolicy</h2>
<!-- backwards compatibility -->
<a id="schemagatewaysecuritypolicy"></a>
<a id="schema_GatewaySecurityPolicy"></a>
<a id="tocSgatewaysecuritypolicy"></a>
<a id="tocsgatewaysecuritypolicy"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "name": "string",
  "tlsInspectionPolicy": "string",
  "updateTime": "string"
}
```

The GatewaySecurityPolicy resource contains a collection of GatewaySecurityPolicyRules and associated metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The timestamp when the resource was created.|
|description|string|false|none|Optional. Free-text description of the resource.|
|name|string|false|none|Required. Name of the resource. Name is of the form projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy} gateway_security_policy should match the pattern:(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$).|
|tlsInspectionPolicy|string|false|none|Optional. Name of a TLS Inspection Policy resource that defines how TLS inspection will be performed for any rule(s) which enables it.|
|updateTime|string(google-datetime)|false|read-only|Output only. The timestamp when the resource was updated.|

<h2 id="tocS_GatewaySecurityPolicyRule">GatewaySecurityPolicyRule</h2>
<!-- backwards compatibility -->
<a id="schemagatewaysecuritypolicyrule"></a>
<a id="schema_GatewaySecurityPolicyRule"></a>
<a id="tocSgatewaysecuritypolicyrule"></a>
<a id="tocsgatewaysecuritypolicyrule"></a>

```json
{
  "applicationMatcher": "string",
  "basicProfile": "BASIC_PROFILE_UNSPECIFIED",
  "createTime": "string",
  "description": "string",
  "enabled": true,
  "name": "string",
  "priority": 0,
  "sessionMatcher": "string",
  "tlsInspectionEnabled": true,
  "updateTime": "string"
}
```

The GatewaySecurityPolicyRule resource is in a nested collection within a GatewaySecurityPolicy and represents a traffic matching condition and associated action to perform.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationMatcher|string|false|none|Optional. CEL expression for matching on L7/application level criteria.|
|basicProfile|string|false|none|Required. Profile which tells what the primitive action should be.|
|createTime|string(google-datetime)|false|read-only|Output only. Time when the rule was created.|
|description|string|false|none|Optional. Free-text description of the resource.|
|enabled|boolean|false|none|Required. Whether the rule is enforced.|
|name|string|false|none|Required. Immutable. Name of the resource. ame is the full resource name so projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy}/rules/{rule} rule should match the pattern: (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$).|
|priority|integer(int32)|false|none|Required. Priority of the rule. Lower number corresponds to higher precedence.|
|sessionMatcher|string|false|none|Required. CEL expression for matching on session criteria.|
|tlsInspectionEnabled|boolean|false|none|Optional. Flag to enable TLS inspection of traffic matching on , can only be true if the parent GatewaySecurityPolicy references a TLSInspectionConfig.|
|updateTime|string(google-datetime)|false|read-only|Output only. Time when the rule was updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|basicProfile|BASIC_PROFILE_UNSPECIFIED|
|basicProfile|ALLOW|
|basicProfile|DENY|

<h2 id="tocS_GoogleCloudNetworksecurityV1beta1CertificateProvider">GoogleCloudNetworksecurityV1beta1CertificateProvider</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudnetworksecurityv1beta1certificateprovider"></a>
<a id="schema_GoogleCloudNetworksecurityV1beta1CertificateProvider"></a>
<a id="tocSgooglecloudnetworksecurityv1beta1certificateprovider"></a>
<a id="tocsgooglecloudnetworksecurityv1beta1certificateprovider"></a>

```json
{
  "certificateProviderInstance": {
    "pluginInstance": "string"
  },
  "grpcEndpoint": {
    "targetUri": "string"
  }
}
```

Specification of certificate provider. Defines the mechanism to obtain the certificate and private key for peer to peer authentication.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificateProviderInstance|[CertificateProviderInstance](#schemacertificateproviderinstance)|false|none|The certificate provider instance specification that will be passed to the data plane, which will be used to load necessary credential information.|
|grpcEndpoint|[GoogleCloudNetworksecurityV1beta1GrpcEndpoint](#schemagooglecloudnetworksecurityv1beta1grpcendpoint)|false|none|gRPC specific configuration to access the gRPC server to obtain the cert and private key.|

<h2 id="tocS_GoogleCloudNetworksecurityV1beta1GrpcEndpoint">GoogleCloudNetworksecurityV1beta1GrpcEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudnetworksecurityv1beta1grpcendpoint"></a>
<a id="schema_GoogleCloudNetworksecurityV1beta1GrpcEndpoint"></a>
<a id="tocSgooglecloudnetworksecurityv1beta1grpcendpoint"></a>
<a id="tocsgooglecloudnetworksecurityv1beta1grpcendpoint"></a>

```json
{
  "targetUri": "string"
}
```

Specification of the GRPC Endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|targetUri|string|false|none|Required. The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:".|

<h2 id="tocS_GoogleIamV1AuditConfig">GoogleIamV1AuditConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1auditconfig"></a>
<a id="schema_GoogleIamV1AuditConfig"></a>
<a id="tocSgoogleiamv1auditconfig"></a>
<a id="tocsgoogleiamv1auditconfig"></a>

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
|auditLogConfigs|[[GoogleIamV1AuditLogConfig](#schemagoogleiamv1auditlogconfig)]|false|none|The configuration for logging of each type of permission.|
|service|string|false|none|Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.|

<h2 id="tocS_GoogleIamV1AuditLogConfig">GoogleIamV1AuditLogConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1auditlogconfig"></a>
<a id="schema_GoogleIamV1AuditLogConfig"></a>
<a id="tocSgoogleiamv1auditlogconfig"></a>
<a id="tocsgoogleiamv1auditlogconfig"></a>

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

<h2 id="tocS_GoogleIamV1Binding">GoogleIamV1Binding</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1binding"></a>
<a id="schema_GoogleIamV1Binding"></a>
<a id="tocSgoogleiamv1binding"></a>
<a id="tocsgoogleiamv1binding"></a>

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
|members|[string]|false|none|Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding.|
|role|string|false|none|Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.|

<h2 id="tocS_GoogleIamV1Policy">GoogleIamV1Policy</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1policy"></a>
<a id="schema_GoogleIamV1Policy"></a>
<a id="tocSgoogleiamv1policy"></a>
<a id="tocsgoogleiamv1policy"></a>

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

An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auditConfigs|[[GoogleIamV1AuditConfig](#schemagoogleiamv1auditconfig)]|false|none|Specifies cloud audit logging configuration for this policy.|
|bindings|[[GoogleIamV1Binding](#schemagoogleiamv1binding)]|false|none|Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.|
|etag|string(byte)|false|none|`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.|
|version|integer(int32)|false|none|Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|

<h2 id="tocS_GoogleIamV1SetIamPolicyRequest">GoogleIamV1SetIamPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1setiampolicyrequest"></a>
<a id="schema_GoogleIamV1SetIamPolicyRequest"></a>
<a id="tocSgoogleiamv1setiampolicyrequest"></a>
<a id="tocsgoogleiamv1setiampolicyrequest"></a>

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
|policy|[GoogleIamV1Policy](#schemagoogleiamv1policy)|false|none|REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.|
|updateMask|string(google-fieldmask)|false|none|OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`|

<h2 id="tocS_GoogleIamV1TestIamPermissionsRequest">GoogleIamV1TestIamPermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1testiampermissionsrequest"></a>
<a id="schema_GoogleIamV1TestIamPermissionsRequest"></a>
<a id="tocSgoogleiamv1testiampermissionsrequest"></a>
<a id="tocsgoogleiamv1testiampermissionsrequest"></a>

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

<h2 id="tocS_GoogleIamV1TestIamPermissionsResponse">GoogleIamV1TestIamPermissionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1testiampermissionsresponse"></a>
<a id="schema_GoogleIamV1TestIamPermissionsResponse"></a>
<a id="tocSgoogleiamv1testiampermissionsresponse"></a>
<a id="tocsgoogleiamv1testiampermissionsresponse"></a>

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

<h2 id="tocS_HttpHeaderMatch">HttpHeaderMatch</h2>
<!-- backwards compatibility -->
<a id="schemahttpheadermatch"></a>
<a id="schema_HttpHeaderMatch"></a>
<a id="tocShttpheadermatch"></a>
<a id="tocshttpheadermatch"></a>

```json
{
  "headerName": "string",
  "regexMatch": "string"
}
```

Specification of HTTP header match attributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|headerName|string|false|none|Required. The name of the HTTP header to match. For matching against the HTTP request's authority, use a headerMatch with the header name ":authority". For matching a request's method, use the headerName ":method".|
|regexMatch|string|false|none|Required. The value of the header must match the regular expression specified in regexMatch. For regular expression grammar, please see: en.cppreference.com/w/cpp/regex/ecmascript For matching against a port specified in the HTTP request, use a headerMatch with headerName set to Host and a regular expression that satisfies the RFC2616 Host header's port specifier.|

<h2 id="tocS_ListAddressGroupReferencesResponse">ListAddressGroupReferencesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistaddressgroupreferencesresponse"></a>
<a id="schema_ListAddressGroupReferencesResponse"></a>
<a id="tocSlistaddressgroupreferencesresponse"></a>
<a id="tocslistaddressgroupreferencesresponse"></a>

```json
{
  "addressGroupReferences": [
    {
      "firewallPolicy": "string",
      "rulePriority": 0
    }
  ],
  "nextPageToken": "string"
}
```

Response of the ListAddressGroupReferences method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressGroupReferences|[[ListAddressGroupReferencesResponseAddressGroupReference](#schemalistaddressgroupreferencesresponseaddressgroupreference)]|false|none|A list of references that matches the specified filter in the request.|
|nextPageToken|string|false|none|If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.|

<h2 id="tocS_ListAddressGroupReferencesResponseAddressGroupReference">ListAddressGroupReferencesResponseAddressGroupReference</h2>
<!-- backwards compatibility -->
<a id="schemalistaddressgroupreferencesresponseaddressgroupreference"></a>
<a id="schema_ListAddressGroupReferencesResponseAddressGroupReference"></a>
<a id="tocSlistaddressgroupreferencesresponseaddressgroupreference"></a>
<a id="tocslistaddressgroupreferencesresponseaddressgroupreference"></a>

```json
{
  "firewallPolicy": "string",
  "rulePriority": 0
}
```

The Reference of AddressGroup.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firewallPolicy|string|false|none|FirewallPolicy that is using the Address Group.|
|rulePriority|integer(int32)|false|none|Rule priority of the FirewallPolicy that is using the Address Group.|

<h2 id="tocS_ListAddressGroupsResponse">ListAddressGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistaddressgroupsresponse"></a>
<a id="schema_ListAddressGroupsResponse"></a>
<a id="tocSlistaddressgroupsresponse"></a>
<a id="tocslistaddressgroupsresponse"></a>

```json
{
  "addressGroups": [
    {
      "capacity": 0,
      "createTime": "string",
      "description": "string",
      "items": [
        "string"
      ],
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "selfLink": "string",
      "type": "TYPE_UNSPECIFIED",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response returned by the ListAddressGroups method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressGroups|[[AddressGroup](#schemaaddressgroup)]|false|none|List of AddressGroups resources.|
|nextPageToken|string|false|none|If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.|

<h2 id="tocS_ListAuthorizationPoliciesResponse">ListAuthorizationPoliciesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistauthorizationpoliciesresponse"></a>
<a id="schema_ListAuthorizationPoliciesResponse"></a>
<a id="tocSlistauthorizationpoliciesresponse"></a>
<a id="tocslistauthorizationpoliciesresponse"></a>

```json
{
  "authorizationPolicies": [
    {
      "action": "ACTION_UNSPECIFIED",
      "createTime": "string",
      "description": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "rules": [
        {
          "destinations": [
            {
              "hosts": [
                "string"
              ],
              "httpHeaderMatch": {
                "headerName": "string",
                "regexMatch": "string"
              },
              "methods": [
                "string"
              ],
              "ports": [
                0
              ]
            }
          ],
          "sources": [
            {
              "ipBlocks": [
                "string"
              ],
              "principals": [
                "string"
              ]
            }
          ]
        }
      ],
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response returned by the ListAuthorizationPolicies method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorizationPolicies|[[AuthorizationPolicy](#schemaauthorizationpolicy)]|false|none|List of AuthorizationPolicies resources.|
|nextPageToken|string|false|none|If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.|

<h2 id="tocS_ListClientTlsPoliciesResponse">ListClientTlsPoliciesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistclienttlspoliciesresponse"></a>
<a id="schema_ListClientTlsPoliciesResponse"></a>
<a id="tocSlistclienttlspoliciesresponse"></a>
<a id="tocslistclienttlspoliciesresponse"></a>

```json
{
  "clientTlsPolicies": [
    {
      "clientCertificate": {
        "certificateProviderInstance": {
          "pluginInstance": "string"
        },
        "grpcEndpoint": {
          "targetUri": "string"
        }
      },
      "createTime": "string",
      "description": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "serverValidationCa": [
        {
          "certificateProviderInstance": {
            "pluginInstance": "string"
          },
          "grpcEndpoint": {
            "targetUri": "string"
          }
        }
      ],
      "sni": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response returned by the ListClientTlsPolicies method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientTlsPolicies|[[ClientTlsPolicy](#schemaclienttlspolicy)]|false|none|List of ClientTlsPolicy resources.|
|nextPageToken|string|false|none|If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.|

<h2 id="tocS_ListGatewaySecurityPoliciesResponse">ListGatewaySecurityPoliciesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistgatewaysecuritypoliciesresponse"></a>
<a id="schema_ListGatewaySecurityPoliciesResponse"></a>
<a id="tocSlistgatewaysecuritypoliciesresponse"></a>
<a id="tocslistgatewaysecuritypoliciesresponse"></a>

```json
{
  "gatewaySecurityPolicies": [
    {
      "createTime": "string",
      "description": "string",
      "name": "string",
      "tlsInspectionPolicy": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

Response returned by the ListGatewaySecurityPolicies method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gatewaySecurityPolicies|[[GatewaySecurityPolicy](#schemagatewaysecuritypolicy)]|false|none|List of GatewaySecurityPolicies resources.|
|nextPageToken|string|false|none|If there might be more results than those appearing in this response, then 'next_page_token' is included. To get the next set of results, call this method again using the value of 'next_page_token' as 'page_token'.|
|unreachable|[string]|false|none|Locations that could not be reached.|

<h2 id="tocS_ListGatewaySecurityPolicyRulesResponse">ListGatewaySecurityPolicyRulesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistgatewaysecuritypolicyrulesresponse"></a>
<a id="schema_ListGatewaySecurityPolicyRulesResponse"></a>
<a id="tocSlistgatewaysecuritypolicyrulesresponse"></a>
<a id="tocslistgatewaysecuritypolicyrulesresponse"></a>

```json
{
  "gatewaySecurityPolicyRules": [
    {
      "applicationMatcher": "string",
      "basicProfile": "BASIC_PROFILE_UNSPECIFIED",
      "createTime": "string",
      "description": "string",
      "enabled": true,
      "name": "string",
      "priority": 0,
      "sessionMatcher": "string",
      "tlsInspectionEnabled": true,
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

Response returned by the ListGatewaySecurityPolicyRules method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gatewaySecurityPolicyRules|[[GatewaySecurityPolicyRule](#schemagatewaysecuritypolicyrule)]|false|none|List of GatewaySecurityPolicyRule resources.|
|nextPageToken|string|false|none|If there might be more results than those appearing in this response, then 'next_page_token' is included. To get the next set of results, call this method again using the value of 'next_page_token' as 'page_token'.|
|unreachable|[string]|false|none|Locations that could not be reached.|

<h2 id="tocS_ListLocationsResponse">ListLocationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlocationsresponse"></a>
<a id="schema_ListLocationsResponse"></a>
<a id="tocSlistlocationsresponse"></a>
<a id="tocslistlocationsresponse"></a>

```json
{
  "locations": [
    {
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "locationId": "string",
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

The response message for Locations.ListLocations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locations|[[Location](#schemalocation)]|false|none|A list of locations that matches the specified filter in the request.|
|nextPageToken|string|false|none|The standard List next-page token.|

<h2 id="tocS_ListOperationsResponse">ListOperationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistoperationsresponse"></a>
<a id="schema_ListOperationsResponse"></a>
<a id="tocSlistoperationsresponse"></a>
<a id="tocslistoperationsresponse"></a>

```json
{
  "nextPageToken": "string",
  "operations": [
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
  ]
}
```

The response message for Operations.ListOperations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The standard List next-page token.|
|operations|[[Operation](#schemaoperation)]|false|none|A list of operations that matches the specified filter in the request.|

<h2 id="tocS_ListServerTlsPoliciesResponse">ListServerTlsPoliciesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistservertlspoliciesresponse"></a>
<a id="schema_ListServerTlsPoliciesResponse"></a>
<a id="tocSlistservertlspoliciesresponse"></a>
<a id="tocslistservertlspoliciesresponse"></a>

```json
{
  "nextPageToken": "string",
  "serverTlsPolicies": [
    {
      "allowOpen": true,
      "createTime": "string",
      "description": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "mtlsPolicy": {
        "clientValidationCa": [
          {
            "certificateProviderInstance": {
              "pluginInstance": "string"
            },
            "grpcEndpoint": {
              "targetUri": "string"
            }
          }
        ],
        "clientValidationMode": "CLIENT_VALIDATION_MODE_UNSPECIFIED",
        "clientValidationTrustConfig": "string"
      },
      "name": "string",
      "serverCertificate": {
        "certificateProviderInstance": {
          "pluginInstance": "string"
        },
        "grpcEndpoint": {
          "targetUri": "string"
        }
      },
      "updateTime": "string"
    }
  ]
}
```

Response returned by the ListServerTlsPolicies method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.|
|serverTlsPolicies|[[ServerTlsPolicy](#schemaservertlspolicy)]|false|none|List of ServerTlsPolicy resources.|

<h2 id="tocS_ListTlsInspectionPoliciesResponse">ListTlsInspectionPoliciesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttlsinspectionpoliciesresponse"></a>
<a id="schema_ListTlsInspectionPoliciesResponse"></a>
<a id="tocSlisttlsinspectionpoliciesresponse"></a>
<a id="tocslisttlsinspectionpoliciesresponse"></a>

```json
{
  "nextPageToken": "string",
  "tlsInspectionPolicies": [
    {
      "caPool": "string",
      "createTime": "string",
      "description": "string",
      "name": "string",
      "updateTime": "string"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

Response returned by the ListTlsInspectionPolicies method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|If there might be more results than those appearing in this response, then 'next_page_token' is included. To get the next set of results, call this method again using the value of 'next_page_token' as 'page_token'.|
|tlsInspectionPolicies|[[TlsInspectionPolicy](#schematlsinspectionpolicy)]|false|none|List of TlsInspectionPolicies resources.|
|unreachable|[string]|false|none|Locations that could not be reached.|

<h2 id="tocS_ListUrlListsResponse">ListUrlListsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisturllistsresponse"></a>
<a id="schema_ListUrlListsResponse"></a>
<a id="tocSlisturllistsresponse"></a>
<a id="tocslisturllistsresponse"></a>

```json
{
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ],
  "urlLists": [
    {
      "createTime": "string",
      "description": "string",
      "name": "string",
      "updateTime": "string",
      "values": [
        "string"
      ]
    }
  ]
}
```

Response returned by the ListUrlLists method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.|
|unreachable|[string]|false|none|Locations that could not be reached.|
|urlLists|[[UrlList](#schemaurllist)]|false|none|List of UrlList resources.|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "locationId": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string"
}
```

A resource that represents Google Cloud Platform location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The friendly name for this location, typically a nearby city name. For example, "Tokyo".|
|labels|object|false|none|Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"}|
|locationId|string|false|none|The canonical id for this location. For example: `"us-east1"`.|
|metadata|object|false|none|Service-specific metadata. For example the available capacity at the given location.|
|name|string|false|none|Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`|

<h2 id="tocS_MTLSPolicy">MTLSPolicy</h2>
<!-- backwards compatibility -->
<a id="schemamtlspolicy"></a>
<a id="schema_MTLSPolicy"></a>
<a id="tocSmtlspolicy"></a>
<a id="tocsmtlspolicy"></a>

```json
{
  "clientValidationCa": [
    {
      "certificateProviderInstance": {
        "pluginInstance": "string"
      },
      "grpcEndpoint": {
        "targetUri": "string"
      }
    }
  ],
  "clientValidationMode": "CLIENT_VALIDATION_MODE_UNSPECIFIED",
  "clientValidationTrustConfig": "string"
}
```

Specification of the MTLSPolicy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientValidationCa|[[ValidationCA](#schemavalidationca)]|false|none|Required if the policy is to be used with Traffic Director. For External HTTPS LB it must be empty. Defines the mechanism to obtain the Certificate Authority certificate to validate the client certificate.|
|clientValidationMode|string|false|none|Specifies whether client connections proceed when a client presents an invalid certificate or no certificate. Required if the policy is to be used with the External HTTPS LB. For Traffic Director it must be empty.|
|clientValidationTrustConfig|string|false|none|Reference to the TrustConfig from certificatemanager.googleapis.com namespace. If specified, the chain validation will be performed against certificates configured in the given TrustConfig. Allowed only if the policy is to be used with External HTTPS LB.|

#### Enumerated Values

|Property|Value|
|---|---|
|clientValidationMode|CLIENT_VALIDATION_MODE_UNSPECIFIED|
|clientValidationMode|ALLOW_INVALID_OR_MISSING_CLIENT_CERT|
|clientValidationMode|REJECT_INVALID|

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
|response|object|false|none|The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.|

<h2 id="tocS_OperationMetadata">OperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaoperationmetadata"></a>
<a id="schema_OperationMetadata"></a>
<a id="tocSoperationmetadata"></a>
<a id="tocsoperationmetadata"></a>

```json
{
  "apiVersion": "string",
  "createTime": "string",
  "endTime": "string",
  "requestedCancellation": true,
  "statusMessage": "string",
  "target": "string",
  "verb": "string"
}
```

Represents the metadata of the long-running operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|read-only|Output only. API version used to start the operation.|
|createTime|string(google-datetime)|false|read-only|Output only. The time the operation was created.|
|endTime|string(google-datetime)|false|read-only|Output only. The time the operation finished running.|
|requestedCancellation|boolean|false|read-only|Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.|
|statusMessage|string|false|read-only|Output only. Human-readable status of the operation, if any.|
|target|string|false|read-only|Output only. Server-defined resource path for the target of the operation.|
|verb|string|false|read-only|Output only. Name of the verb executed by the operation.|

<h2 id="tocS_RemoveAddressGroupItemsRequest">RemoveAddressGroupItemsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremoveaddressgroupitemsrequest"></a>
<a id="schema_RemoveAddressGroupItemsRequest"></a>
<a id="tocSremoveaddressgroupitemsrequest"></a>
<a id="tocsremoveaddressgroupitemsrequest"></a>

```json
{
  "items": [
    "string"
  ],
  "requestId": "string"
}
```

Request used by the RemoveAddressGroupItems method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[string]|false|none|Required. List of items to remove.|
|requestId|string|false|none|Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|

<h2 id="tocS_Rule">Rule</h2>
<!-- backwards compatibility -->
<a id="schemarule"></a>
<a id="schema_Rule"></a>
<a id="tocSrule"></a>
<a id="tocsrule"></a>

```json
{
  "destinations": [
    {
      "hosts": [
        "string"
      ],
      "httpHeaderMatch": {
        "headerName": "string",
        "regexMatch": "string"
      },
      "methods": [
        "string"
      ],
      "ports": [
        0
      ]
    }
  ],
  "sources": [
    {
      "ipBlocks": [
        "string"
      ],
      "principals": [
        "string"
      ]
    }
  ]
}
```

Specification of rules.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinations|[[Destination](#schemadestination)]|false|none|Optional. List of attributes for the traffic destination. All of the destinations must match. A destination is a match if a request matches all the specified hosts, ports, methods and headers. If not set, the action specified in the 'action' field will be applied without any rule checks for the destination.|
|sources|[[Source](#schemasource)]|false|none|Optional. List of attributes for the traffic source. All of the sources must match. A source is a match if both principals and ip_blocks match. If not set, the action specified in the 'action' field will be applied without any rule checks for the source.|

<h2 id="tocS_ServerTlsPolicy">ServerTlsPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaservertlspolicy"></a>
<a id="schema_ServerTlsPolicy"></a>
<a id="tocSservertlspolicy"></a>
<a id="tocsservertlspolicy"></a>

```json
{
  "allowOpen": true,
  "createTime": "string",
  "description": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "mtlsPolicy": {
    "clientValidationCa": [
      {
        "certificateProviderInstance": {
          "pluginInstance": "string"
        },
        "grpcEndpoint": {
          "targetUri": "string"
        }
      }
    ],
    "clientValidationMode": "CLIENT_VALIDATION_MODE_UNSPECIFIED",
    "clientValidationTrustConfig": "string"
  },
  "name": "string",
  "serverCertificate": {
    "certificateProviderInstance": {
      "pluginInstance": "string"
    },
    "grpcEndpoint": {
      "targetUri": "string"
    }
  },
  "updateTime": "string"
}
```

ServerTlsPolicy is a resource that specifies how a server should authenticate incoming requests. This resource itself does not affect configuration unless it is attached to a target HTTPS proxy or endpoint config selector resource. ServerTlsPolicy in the form accepted by External HTTPS Load Balancer can be attached only to TargetHttpsProxy with an `EXTERNAL` or `EXTERNAL_MANAGED` load balancing scheme. Traffic Director compatible ServerTlsPolicies can be attached to EndpointPolicy and TargetHttpsProxy with Traffic Director `INTERNAL_SELF_MANAGED` load balancing scheme.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowOpen|boolean|false|none|Can be enabled only for Traffic Director policies, must be false for External HTTPS LB policies. Determines if server allows plaintext connections. If set to true, server allows plain text connections. By default, it is set to false. This setting is not exclusive of other encryption modes. For example, if `allow_open` and `mtls_policy` are set, server allows both plain text and mTLS connections. See documentation of other encryption modes to confirm compatibility. Consider using it if you wish to upgrade in place your deployment to TLS while having mixed TLS and non-TLS traffic reaching port :80.|
|createTime|string(google-datetime)|false|read-only|Output only. The timestamp when the resource was created.|
|description|string|false|none|Free-text description of the resource.|
|labels|object|false|none|Set of label tags associated with the resource.|
|mtlsPolicy|[MTLSPolicy](#schemamtlspolicy)|false|none|Required if policy is to be used with the External HTTPS LB, for Traffic Director allowed to be empty. Defines a mechanism to provision peer validation certificates for peer to peer authentication (Mutual TLS - mTLS). If not specified, client certificate will not be requested. The connection is treated as TLS and not mTLS. If `allow_open` and `mtls_policy` are set, server allows both plain text and mTLS connections.|
|name|string|false|none|Required. Name of the ServerTlsPolicy resource. It matches the pattern `projects/*/locations/{location}/serverTlsPolicies/{server_tls_policy}`|
|serverCertificate|[GoogleCloudNetworksecurityV1beta1CertificateProvider](#schemagooglecloudnetworksecurityv1beta1certificateprovider)|false|none|Optional if policy is to be used with Traffic Director, for External HTTPS LB must be empty. Defines a mechanism to provision server identity (public and private keys). Cannot be combined with `allow_open` as a permissive mode that allows both plain text and TLS is not supported.|
|updateTime|string(google-datetime)|false|read-only|Output only. The timestamp when the resource was updated.|

<h2 id="tocS_Source">Source</h2>
<!-- backwards compatibility -->
<a id="schemasource"></a>
<a id="schema_Source"></a>
<a id="tocSsource"></a>
<a id="tocssource"></a>

```json
{
  "ipBlocks": [
    "string"
  ],
  "principals": [
    "string"
  ]
}
```

Specification of traffic source attributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ipBlocks|[string]|false|none|Optional. List of CIDR ranges to match based on source IP address. At least one IP block should match. Single IP (e.g., "1.2.3.4") and CIDR (e.g., "1.2.3.0/24") are supported. Authorization based on source IP alone should be avoided. The IP addresses of any load balancers or proxies should be considered untrusted.|
|principals|[string]|false|none|Optional. List of peer identities to match for authorization. At least one principal should match. Each peer can be an exact match, or a prefix match (example, "namespace/*") or a suffix match (example, "*/service-account") or a presence match "*". Authorization based on the principal name without certificate validation (configured by ServerTlsPolicy resource) is considered insecure.|

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

<h2 id="tocS_TlsInspectionPolicy">TlsInspectionPolicy</h2>
<!-- backwards compatibility -->
<a id="schematlsinspectionpolicy"></a>
<a id="schema_TlsInspectionPolicy"></a>
<a id="tocStlsinspectionpolicy"></a>
<a id="tocstlsinspectionpolicy"></a>

```json
{
  "caPool": "string",
  "createTime": "string",
  "description": "string",
  "name": "string",
  "updateTime": "string"
}
```

The TlsInspectionPolicy resource contains references to CA pools in Certificate Authority Service and associated metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caPool|string|false|none|Required. A CA pool resource used to issue interception certificates. The CA pool string has a relative resource path following the form "projects/{project}/locations/{location}/caPools/{ca_pool}".|
|createTime|string(google-datetime)|false|read-only|Output only. The timestamp when the resource was created.|
|description|string|false|none|Optional. Free-text description of the resource.|
|name|string|false|none|Required. Name of the resource. Name is of the form projects/{project}/locations/{location}/tlsInspectionPolicies/{tls_inspection_policy} tls_inspection_policy should match the pattern:(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$).|
|updateTime|string(google-datetime)|false|read-only|Output only. The timestamp when the resource was updated.|

<h2 id="tocS_UrlList">UrlList</h2>
<!-- backwards compatibility -->
<a id="schemaurllist"></a>
<a id="schema_UrlList"></a>
<a id="tocSurllist"></a>
<a id="tocsurllist"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "name": "string",
  "updateTime": "string",
  "values": [
    "string"
  ]
}
```

UrlList proto helps users to set reusable, independently manageable lists of hosts, host patterns, URLs, URL patterns.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. Time when the security policy was created.|
|description|string|false|none|Optional. Free-text description of the resource.|
|name|string|false|none|Required. Name of the resource provided by the user. Name is of the form projects/{project}/locations/{location}/urlLists/{url_list} url_list should match the pattern:(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$).|
|updateTime|string(google-datetime)|false|read-only|Output only. Time when the security policy was updated.|
|values|[string]|false|none|Required. FQDNs and URLs.|

<h2 id="tocS_ValidationCA">ValidationCA</h2>
<!-- backwards compatibility -->
<a id="schemavalidationca"></a>
<a id="schema_ValidationCA"></a>
<a id="tocSvalidationca"></a>
<a id="tocsvalidationca"></a>

```json
{
  "certificateProviderInstance": {
    "pluginInstance": "string"
  },
  "grpcEndpoint": {
    "targetUri": "string"
  }
}
```

Specification of ValidationCA. Defines the mechanism to obtain the Certificate Authority certificate to validate the peer certificate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificateProviderInstance|[CertificateProviderInstance](#schemacertificateproviderinstance)|false|none|The certificate provider instance specification that will be passed to the data plane, which will be used to load necessary credential information.|
|grpcEndpoint|[GoogleCloudNetworksecurityV1beta1GrpcEndpoint](#schemagooglecloudnetworksecurityv1beta1grpcendpoint)|false|none|gRPC specific configuration to access the gRPC server to obtain the CA certificate.|
