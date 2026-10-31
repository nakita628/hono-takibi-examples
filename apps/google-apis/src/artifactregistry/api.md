<h1 id="artifact-registry-api">Artifact Registry API v1beta2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Store and manage build artifacts in a scalable and integrated service built on Google infrastructure.

Base URLs:

* <a href="https://artifactregistry.googleapis.com/">https://artifactregistry.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/artifacts/docs/">External documentation</a>

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

<h1 id="artifact-registry-api-projects">projects</h1>

## artifactregistry.projects.locations.repositories.packages.versions.get

<a id="opIdartifactregistry.projects.locations.repositories.packages.versions.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta2/{name}`

Gets a version

<h3 id="artifactregistryprojectslocationsrepositoriespackagesversionsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the version to retrieve.|
|view|query|string|false|The view that should be returned in the response.|
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
|view|VERSION_VIEW_UNSPECIFIED|
|view|BASIC|
|view|FULL|
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
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "relatedTags": [
    {
      "name": "string",
      "version": "string"
    }
  ],
  "updateTime": "string"
}
```

<h3 id="artifactregistryprojectslocationsrepositoriespackagesversionsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Version](#schemaversion)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## artifactregistry.projects.locations.repositories.packages.versions.delete

<a id="opIdartifactregistry.projects.locations.repositories.packages.versions.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta2/{name}`

Deletes a version and all of its content. The returned operation will complete once the version has been deleted.

<h3 id="artifactregistryprojectslocationsrepositoriespackagesversionsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the version to delete.|
|force|query|boolean|false|By default, a version that is tagged may not be deleted. If force=true, the version and any tags pointing to the version are deleted.|
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

<h3 id="artifactregistryprojectslocationsrepositoriespackagesversionsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## artifactregistry.projects.locations.repositories.packages.tags.patch

<a id="opIdartifactregistry.projects.locations.repositories.packages.tags.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "version": "string"
  }'
```

`PATCH /v1beta2/{name}`

Updates a tag.

> Body parameter

```json
{
  "name": "string",
  "version": "string"
}
```

<h3 id="artifactregistryprojectslocationsrepositoriespackagestagspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the tag, for example: "projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/tags/tag1". If the package part contains slashes, the slashes are escaped. The tag part can only have characters in [a-zA-Z0-9\-._~:@], anything else must be URL encoded.|
|updateMask|query|string|false|The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask|
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
|body|body|[Tag](#schematag)|false|none|
|» name|body|string|false|The name of the tag, for example: "projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/tags/tag1". If the package part contains slashes, the slashes are escaped. The tag part can only have characters in [a-zA-Z0-9\-._~:@], anything else must be URL encoded.|
|» version|body|string|false|The name of the version the tag refers to, for example: "projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/versions/sha256:5243811" If the package or version ID parts contain slashes, the slashes are escaped.|

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
  "name": "string",
  "version": "string"
}
```

<h3 id="artifactregistryprojectslocationsrepositoriespackagestagspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Tag](#schematag)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## artifactregistry.projects.locations.list

<a id="opIdartifactregistry.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta2/{name}/locations`

Lists information about the supported locations for this service.

<h3 id="artifactregistryprojectslocationslist-parameters">Parameters</h3>

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

<h3 id="artifactregistryprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## artifactregistry.projects.locations.repositories.aptArtifacts.upload

<a id="opIdartifactregistry.projects.locations.repositories.aptArtifacts.upload"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string/aptArtifacts:create \
  -X POST \
  -H 'Content-Type: application/octet-stream' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta2/{parent}/aptArtifacts:create`

Directly uploads an Apt artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.

> Body parameter

```json
{}
```

<h3 id="artifactregistryprojectslocationsrepositoriesaptartifactsupload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the parent resource where the artifacts will be uploaded.|
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
|body|body|[UploadAptArtifactRequest](#schemauploadaptartifactrequest)|false|none|

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
  "operation": {
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
}
```

<h3 id="artifactregistryprojectslocationsrepositoriesaptartifactsupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[UploadAptArtifactMediaResponse](#schemauploadaptartifactmediaresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## artifactregistry.projects.locations.repositories.aptArtifacts.import

<a id="opIdartifactregistry.projects.locations.repositories.aptArtifacts.import"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string/aptArtifacts:import \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "gcsSource": {
      "uris": [
        "string"
      ],
      "useWildcards": true
    }
  }'
```

`POST /v1beta2/{parent}/aptArtifacts:import`

Imports Apt artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.

> Body parameter

```json
{
  "gcsSource": {
    "uris": [
      "string"
    ],
    "useWildcards": true
  }
}
```

<h3 id="artifactregistryprojectslocationsrepositoriesaptartifactsimport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the parent resource where the artifacts will be imported.|
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
|body|body|[ImportAptArtifactsRequest](#schemaimportaptartifactsrequest)|false|none|
|» gcsSource|body|[ImportAptArtifactsGcsSource](#schemaimportaptartifactsgcssource)|false|Google Cloud Storage location where input content is located.|

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

<h3 id="artifactregistryprojectslocationsrepositoriesaptartifactsimport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## artifactregistry.projects.locations.repositories.files.list

<a id="opIdartifactregistry.projects.locations.repositories.files.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string/files \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta2/{parent}/files`

Lists files.

<h3 id="artifactregistryprojectslocationsrepositoriesfileslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the repository whose files will be listed. For example: "projects/p1/locations/us-central1/repositories/repo1|
|filter|query|string|false|An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are: * `name` * `owner` An example of using a filter: * `name="projects/p1/locations/us-central1/repositories/repo1/files/a/b/*"` --> Files with an ID starting with "a/b/". * `owner="projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/versions/1.0"` --> Files owned by the version `1.0` in package `pkg1`.|
|pageSize|query|integer|false|The maximum number of files to return.|
|pageToken|query|string|false|The next_page_token value returned from a previous list request, if any.|
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
  "files": [
    {
      "createTime": "string",
      "hashes": [
        {
          "type": "HASH_TYPE_UNSPECIFIED",
          "value": "string"
        }
      ],
      "name": "string",
      "owner": "string",
      "sizeBytes": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="artifactregistryprojectslocationsrepositoriesfileslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListFilesResponse](#schemalistfilesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## artifactregistry.projects.locations.repositories.packages.list

<a id="opIdartifactregistry.projects.locations.repositories.packages.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string/packages \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta2/{parent}/packages`

Lists packages.

<h3 id="artifactregistryprojectslocationsrepositoriespackageslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the parent resource whose packages will be listed.|
|pageSize|query|integer|false|The maximum number of packages to return. Maximum page size is 1,000.|
|pageToken|query|string|false|The next_page_token value returned from a previous list request, if any.|
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
  "packages": [
    {
      "createTime": "string",
      "displayName": "string",
      "name": "string",
      "updateTime": "string"
    }
  ]
}
```

<h3 id="artifactregistryprojectslocationsrepositoriespackageslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListPackagesResponse](#schemalistpackagesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## artifactregistry.projects.locations.repositories.list

<a id="opIdartifactregistry.projects.locations.repositories.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string/repositories \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta2/{parent}/repositories`

Lists repositories.

<h3 id="artifactregistryprojectslocationsrepositorieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the parent resource whose repositories will be listed.|
|pageSize|query|integer|false|The maximum number of repositories to return. Maximum page size is 1,000.|
|pageToken|query|string|false|The next_page_token value returned from a previous list request, if any.|
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
  "repositories": [
    {
      "createTime": "string",
      "description": "string",
      "format": "FORMAT_UNSPECIFIED",
      "kmsKeyName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "mavenConfig": {
        "allowSnapshotOverwrites": true,
        "versionPolicy": "VERSION_POLICY_UNSPECIFIED"
      },
      "name": "string",
      "satisfiesPzs": true,
      "sizeBytes": "string",
      "updateTime": "string"
    }
  ]
}
```

<h3 id="artifactregistryprojectslocationsrepositorieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListRepositoriesResponse](#schemalistrepositoriesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## artifactregistry.projects.locations.repositories.create

<a id="opIdartifactregistry.projects.locations.repositories.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string/repositories \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "format": "FORMAT_UNSPECIFIED",
    "kmsKeyName": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "mavenConfig": {
      "allowSnapshotOverwrites": true,
      "versionPolicy": "VERSION_POLICY_UNSPECIFIED"
    },
    "name": "string"
  }'
```

`POST /v1beta2/{parent}/repositories`

Creates a repository. The returned Operation will finish once the repository has been created. Its response will be the created Repository.

> Body parameter

```json
{
  "description": "string",
  "format": "FORMAT_UNSPECIFIED",
  "kmsKeyName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "mavenConfig": {
    "allowSnapshotOverwrites": true,
    "versionPolicy": "VERSION_POLICY_UNSPECIFIED"
  },
  "name": "string"
}
```

<h3 id="artifactregistryprojectslocationsrepositoriescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the parent resource where the repository will be created.|
|repositoryId|query|string|false|The repository id to use for this repository.|
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
|body|body|[Repository](#schemarepository)|false|none|
|» description|body|string|false|The user-provided description of the repository.|
|» format|body|string|false|The format of packages that are stored in the repository.|
|» kmsKeyName|body|string|false|The Cloud KMS resource name of the customer managed encryption key that's used to encrypt the contents of the Repository. Has the form: `projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key`. This value may not be changed after the Repository has been created.|
|» labels|body|object|false|Labels with user-defined metadata. This field may contain up to 64 entries. Label keys and values may be no longer than 63 characters. Label keys must begin with a lowercase letter and may only contain lowercase letters, numeric characters, underscores, and dashes.|
|» » **additionalProperties**|body|string|false|none|
|» mavenConfig|body|[MavenRepositoryConfig](#schemamavenrepositoryconfig)|false|Maven repository config contains repository level configuration for the repositories of maven type.|
|» name|body|string|false|The name of the repository, for example: "projects/p1/locations/us-central1/repositories/repo1".|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» format|FORMAT_UNSPECIFIED|
|» format|DOCKER|
|» format|MAVEN|
|» format|NPM|
|» format|APT|
|» format|YUM|
|» format|PYTHON|

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

<h3 id="artifactregistryprojectslocationsrepositoriescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## artifactregistry.projects.locations.repositories.packages.tags.list

<a id="opIdartifactregistry.projects.locations.repositories.packages.tags.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string/tags \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta2/{parent}/tags`

Lists tags.

<h3 id="artifactregistryprojectslocationsrepositoriespackagestagslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the parent resource whose tags will be listed.|
|filter|query|string|false|An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are: * `version` An example of using a filter: * `version="projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/versions/1.0"` --> Tags that are applied to the version `1.0` in package `pkg1`.|
|pageSize|query|integer|false|The maximum number of tags to return. Maximum page size is 10,000.|
|pageToken|query|string|false|The next_page_token value returned from a previous list request, if any.|
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
  "tags": [
    {
      "name": "string",
      "version": "string"
    }
  ]
}
```

<h3 id="artifactregistryprojectslocationsrepositoriespackagestagslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListTagsResponse](#schemalisttagsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## artifactregistry.projects.locations.repositories.packages.tags.create

<a id="opIdartifactregistry.projects.locations.repositories.packages.tags.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string/tags \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "version": "string"
  }'
```

`POST /v1beta2/{parent}/tags`

Creates a tag.

> Body parameter

```json
{
  "name": "string",
  "version": "string"
}
```

<h3 id="artifactregistryprojectslocationsrepositoriespackagestagscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the parent resource where the tag will be created.|
|tagId|query|string|false|The tag id to use for this repository.|
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
|body|body|[Tag](#schematag)|false|none|
|» name|body|string|false|The name of the tag, for example: "projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/tags/tag1". If the package part contains slashes, the slashes are escaped. The tag part can only have characters in [a-zA-Z0-9\-._~:@], anything else must be URL encoded.|
|» version|body|string|false|The name of the version the tag refers to, for example: "projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/versions/sha256:5243811" If the package or version ID parts contain slashes, the slashes are escaped.|

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
  "name": "string",
  "version": "string"
}
```

<h3 id="artifactregistryprojectslocationsrepositoriespackagestagscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Tag](#schematag)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## artifactregistry.projects.locations.repositories.packages.versions.list

<a id="opIdartifactregistry.projects.locations.repositories.packages.versions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string/versions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta2/{parent}/versions`

Lists versions.

<h3 id="artifactregistryprojectslocationsrepositoriespackagesversionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the parent resource whose versions will be listed.|
|orderBy|query|string|false|Optional. The field to order the results by.|
|pageSize|query|integer|false|The maximum number of versions to return. Maximum page size is 1,000.|
|pageToken|query|string|false|The next_page_token value returned from a previous list request, if any.|
|view|query|string|false|The view that should be returned in the response.|
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
|view|VERSION_VIEW_UNSPECIFIED|
|view|BASIC|
|view|FULL|
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
  "versions": [
    {
      "createTime": "string",
      "description": "string",
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string",
      "relatedTags": [
        {
          "name": "string",
          "version": "string"
        }
      ],
      "updateTime": "string"
    }
  ]
}
```

<h3 id="artifactregistryprojectslocationsrepositoriespackagesversionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListVersionsResponse](#schemalistversionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## artifactregistry.projects.locations.repositories.yumArtifacts.upload

<a id="opIdartifactregistry.projects.locations.repositories.yumArtifacts.upload"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string/yumArtifacts:create \
  -X POST \
  -H 'Content-Type: application/octet-stream' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta2/{parent}/yumArtifacts:create`

Directly uploads a Yum artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.

> Body parameter

```json
{}
```

<h3 id="artifactregistryprojectslocationsrepositoriesyumartifactsupload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the parent resource where the artifacts will be uploaded.|
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
|body|body|[UploadYumArtifactRequest](#schemauploadyumartifactrequest)|false|none|

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
  "operation": {
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
}
```

<h3 id="artifactregistryprojectslocationsrepositoriesyumartifactsupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[UploadYumArtifactMediaResponse](#schemauploadyumartifactmediaresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## artifactregistry.projects.locations.repositories.yumArtifacts.import

<a id="opIdartifactregistry.projects.locations.repositories.yumArtifacts.import"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string/yumArtifacts:import \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "gcsSource": {
      "uris": [
        "string"
      ],
      "useWildcards": true
    }
  }'
```

`POST /v1beta2/{parent}/yumArtifacts:import`

Imports Yum (RPM) artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.

> Body parameter

```json
{
  "gcsSource": {
    "uris": [
      "string"
    ],
    "useWildcards": true
  }
}
```

<h3 id="artifactregistryprojectslocationsrepositoriesyumartifactsimport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the parent resource where the artifacts will be imported.|
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
|body|body|[ImportYumArtifactsRequest](#schemaimportyumartifactsrequest)|false|none|
|» gcsSource|body|[ImportYumArtifactsGcsSource](#schemaimportyumartifactsgcssource)|false|Google Cloud Storage location where input content is located.|

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

<h3 id="artifactregistryprojectslocationsrepositoriesyumartifactsimport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## artifactregistry.projects.locations.repositories.getIamPolicy

<a id="opIdartifactregistry.projects.locations.repositories.getIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string:getIamPolicy \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta2/{resource}:getIamPolicy`

Gets the IAM policy for a given resource.

<h3 id="artifactregistryprojectslocationsrepositoriesgetiampolicy-parameters">Parameters</h3>

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

<h3 id="artifactregistryprojectslocationsrepositoriesgetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## artifactregistry.projects.locations.repositories.setIamPolicy

<a id="opIdartifactregistry.projects.locations.repositories.setIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string:setIamPolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "policy": {
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
  }'
```

`POST /v1beta2/{resource}:setIamPolicy`

Updates the IAM policy for a given resource.

> Body parameter

```json
{
  "policy": {
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
}
```

<h3 id="artifactregistryprojectslocationsrepositoriessetiampolicy-parameters">Parameters</h3>

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

<h3 id="artifactregistryprojectslocationsrepositoriessetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## artifactregistry.projects.locations.repositories.testIamPermissions

<a id="opIdartifactregistry.projects.locations.repositories.testIamPermissions"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string:testIamPermissions \
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

`POST /v1beta2/{resource}:testIamPermissions`

Tests if the caller has a list of permissions on a resource.

> Body parameter

```json
{
  "permissions": [
    "string"
  ]
}
```

<h3 id="artifactregistryprojectslocationsrepositoriestestiampermissions-parameters">Parameters</h3>

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

<h3 id="artifactregistryprojectslocationsrepositoriestestiampermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TestIamPermissionsResponse](#schematestiampermissionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

# Schemas

<h2 id="tocS_AptArtifact">AptArtifact</h2>
<!-- backwards compatibility -->
<a id="schemaaptartifact"></a>
<a id="schema_AptArtifact"></a>
<a id="tocSaptartifact"></a>
<a id="tocsaptartifact"></a>

```json
{
  "architecture": "string",
  "component": "string",
  "controlFile": "string",
  "name": "string",
  "packageName": "string",
  "packageType": "PACKAGE_TYPE_UNSPECIFIED"
}
```

A detailed representation of an Apt artifact. Information in the record is derived from the archive's control file. See https://www.debian.org/doc/debian-policy/ch-controlfields.html

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|architecture|string|false|read-only|Output only. Operating system architecture of the artifact.|
|component|string|false|read-only|Output only. Repository component of the artifact.|
|controlFile|string(byte)|false|read-only|Output only. Contents of the artifact's control metadata file.|
|name|string|false|read-only|Output only. The Artifact Registry resource name of the artifact.|
|packageName|string|false|read-only|Output only. The Apt package name of the artifact.|
|packageType|string|false|read-only|Output only. An artifact is a binary or source package.|

#### Enumerated Values

|Property|Value|
|---|---|
|packageType|PACKAGE_TYPE_UNSPECIFIED|
|packageType|BINARY|
|packageType|SOURCE|

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
|members|[string]|false|none|Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding.|
|role|string|false|none|Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.|

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

<h2 id="tocS_GoogleDevtoolsArtifactregistryV1beta2File">GoogleDevtoolsArtifactregistryV1beta2File</h2>
<!-- backwards compatibility -->
<a id="schemagoogledevtoolsartifactregistryv1beta2file"></a>
<a id="schema_GoogleDevtoolsArtifactregistryV1beta2File"></a>
<a id="tocSgoogledevtoolsartifactregistryv1beta2file"></a>
<a id="tocsgoogledevtoolsartifactregistryv1beta2file"></a>

```json
{
  "createTime": "string",
  "hashes": [
    {
      "type": "HASH_TYPE_UNSPECIFIED",
      "value": "string"
    }
  ],
  "name": "string",
  "owner": "string",
  "sizeBytes": "string",
  "updateTime": "string"
}
```

Files store content that is potentially associated with Packages or Versions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time when the File was created.|
|hashes|[[Hash](#schemahash)]|false|none|The hashes of the file content.|
|name|string|false|none|The name of the file, for example: "projects/p1/locations/us-central1/repositories/repo1/files/a%2Fb%2Fc.txt". If the file ID part contains slashes, they are escaped.|
|owner|string|false|none|The name of the Package or Version that owns this file, if any.|
|sizeBytes|string(int64)|false|none|The size of the File in bytes.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time when the File was last updated.|

<h2 id="tocS_Hash">Hash</h2>
<!-- backwards compatibility -->
<a id="schemahash"></a>
<a id="schema_Hash"></a>
<a id="tocShash"></a>
<a id="tocshash"></a>

```json
{
  "type": "HASH_TYPE_UNSPECIFIED",
  "value": "string"
}
```

A hash of file content.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|The algorithm used to compute the hash value.|
|value|string(byte)|false|none|The hash value.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|HASH_TYPE_UNSPECIFIED|
|type|SHA256|
|type|MD5|

<h2 id="tocS_ImportAptArtifactsErrorInfo">ImportAptArtifactsErrorInfo</h2>
<!-- backwards compatibility -->
<a id="schemaimportaptartifactserrorinfo"></a>
<a id="schema_ImportAptArtifactsErrorInfo"></a>
<a id="tocSimportaptartifactserrorinfo"></a>
<a id="tocsimportaptartifactserrorinfo"></a>

```json
{
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
  "gcsSource": {
    "uris": [
      "string"
    ],
    "useWildcards": true
  }
}
```

Error information explaining why a package was not imported.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[Status](#schemastatus)|false|none|The detailed error status.|
|gcsSource|[ImportAptArtifactsGcsSource](#schemaimportaptartifactsgcssource)|false|none|Google Cloud Storage location requested.|

<h2 id="tocS_ImportAptArtifactsGcsSource">ImportAptArtifactsGcsSource</h2>
<!-- backwards compatibility -->
<a id="schemaimportaptartifactsgcssource"></a>
<a id="schema_ImportAptArtifactsGcsSource"></a>
<a id="tocSimportaptartifactsgcssource"></a>
<a id="tocsimportaptartifactsgcssource"></a>

```json
{
  "uris": [
    "string"
  ],
  "useWildcards": true
}
```

Google Cloud Storage location where the artifacts currently reside.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uris|[string]|false|none|Cloud Storage paths URI (e.g., gs://my_bucket//my_object).|
|useWildcards|boolean|false|none|Supports URI wildcards for matching multiple objects from a single URI.|

<h2 id="tocS_ImportAptArtifactsMetadata">ImportAptArtifactsMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaimportaptartifactsmetadata"></a>
<a id="schema_ImportAptArtifactsMetadata"></a>
<a id="tocSimportaptartifactsmetadata"></a>
<a id="tocsimportaptartifactsmetadata"></a>

```json
{}
```

The operation metadata for importing artifacts.

<h2 id="tocS_ImportAptArtifactsRequest">ImportAptArtifactsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaimportaptartifactsrequest"></a>
<a id="schema_ImportAptArtifactsRequest"></a>
<a id="tocSimportaptartifactsrequest"></a>
<a id="tocsimportaptartifactsrequest"></a>

```json
{
  "gcsSource": {
    "uris": [
      "string"
    ],
    "useWildcards": true
  }
}
```

The request to import new apt artifacts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsSource|[ImportAptArtifactsGcsSource](#schemaimportaptartifactsgcssource)|false|none|Google Cloud Storage location where input content is located.|

<h2 id="tocS_ImportAptArtifactsResponse">ImportAptArtifactsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaimportaptartifactsresponse"></a>
<a id="schema_ImportAptArtifactsResponse"></a>
<a id="tocSimportaptartifactsresponse"></a>
<a id="tocsimportaptartifactsresponse"></a>

```json
{
  "aptArtifacts": [
    {
      "architecture": "string",
      "component": "string",
      "controlFile": "string",
      "name": "string",
      "packageName": "string",
      "packageType": "PACKAGE_TYPE_UNSPECIFIED"
    }
  ],
  "errors": [
    {
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
      "gcsSource": {
        "uris": [
          "string"
        ],
        "useWildcards": true
      }
    }
  ]
}
```

The response message from importing APT artifacts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aptArtifacts|[[AptArtifact](#schemaaptartifact)]|false|none|The Apt artifacts imported.|
|errors|[[ImportAptArtifactsErrorInfo](#schemaimportaptartifactserrorinfo)]|false|none|Detailed error info for packages that were not imported.|

<h2 id="tocS_ImportYumArtifactsErrorInfo">ImportYumArtifactsErrorInfo</h2>
<!-- backwards compatibility -->
<a id="schemaimportyumartifactserrorinfo"></a>
<a id="schema_ImportYumArtifactsErrorInfo"></a>
<a id="tocSimportyumartifactserrorinfo"></a>
<a id="tocsimportyumartifactserrorinfo"></a>

```json
{
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
  "gcsSource": {
    "uris": [
      "string"
    ],
    "useWildcards": true
  }
}
```

Error information explaining why a package was not imported.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[Status](#schemastatus)|false|none|The detailed error status.|
|gcsSource|[ImportYumArtifactsGcsSource](#schemaimportyumartifactsgcssource)|false|none|Google Cloud Storage location requested.|

<h2 id="tocS_ImportYumArtifactsGcsSource">ImportYumArtifactsGcsSource</h2>
<!-- backwards compatibility -->
<a id="schemaimportyumartifactsgcssource"></a>
<a id="schema_ImportYumArtifactsGcsSource"></a>
<a id="tocSimportyumartifactsgcssource"></a>
<a id="tocsimportyumartifactsgcssource"></a>

```json
{
  "uris": [
    "string"
  ],
  "useWildcards": true
}
```

Google Cloud Storage location where the artifacts currently reside.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uris|[string]|false|none|Cloud Storage paths URI (e.g., gs://my_bucket//my_object).|
|useWildcards|boolean|false|none|Supports URI wildcards for matching multiple objects from a single URI.|

<h2 id="tocS_ImportYumArtifactsMetadata">ImportYumArtifactsMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaimportyumartifactsmetadata"></a>
<a id="schema_ImportYumArtifactsMetadata"></a>
<a id="tocSimportyumartifactsmetadata"></a>
<a id="tocsimportyumartifactsmetadata"></a>

```json
{}
```

The operation metadata for importing artifacts.

<h2 id="tocS_ImportYumArtifactsRequest">ImportYumArtifactsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaimportyumartifactsrequest"></a>
<a id="schema_ImportYumArtifactsRequest"></a>
<a id="tocSimportyumartifactsrequest"></a>
<a id="tocsimportyumartifactsrequest"></a>

```json
{
  "gcsSource": {
    "uris": [
      "string"
    ],
    "useWildcards": true
  }
}
```

The request to import new yum artifacts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsSource|[ImportYumArtifactsGcsSource](#schemaimportyumartifactsgcssource)|false|none|Google Cloud Storage location where input content is located.|

<h2 id="tocS_ImportYumArtifactsResponse">ImportYumArtifactsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaimportyumartifactsresponse"></a>
<a id="schema_ImportYumArtifactsResponse"></a>
<a id="tocSimportyumartifactsresponse"></a>
<a id="tocsimportyumartifactsresponse"></a>

```json
{
  "errors": [
    {
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
      "gcsSource": {
        "uris": [
          "string"
        ],
        "useWildcards": true
      }
    }
  ],
  "yumArtifacts": [
    {
      "architecture": "string",
      "name": "string",
      "packageName": "string",
      "packageType": "PACKAGE_TYPE_UNSPECIFIED"
    }
  ]
}
```

The response message from importing YUM artifacts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[ImportYumArtifactsErrorInfo](#schemaimportyumartifactserrorinfo)]|false|none|Detailed error info for packages that were not imported.|
|yumArtifacts|[[YumArtifact](#schemayumartifact)]|false|none|The yum artifacts imported.|

<h2 id="tocS_ListFilesResponse">ListFilesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfilesresponse"></a>
<a id="schema_ListFilesResponse"></a>
<a id="tocSlistfilesresponse"></a>
<a id="tocslistfilesresponse"></a>

```json
{
  "files": [
    {
      "createTime": "string",
      "hashes": [
        {
          "type": "HASH_TYPE_UNSPECIFIED",
          "value": "string"
        }
      ],
      "name": "string",
      "owner": "string",
      "sizeBytes": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

The response from listing files.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|files|[[GoogleDevtoolsArtifactregistryV1beta2File](#schemagoogledevtoolsartifactregistryv1beta2file)]|false|none|The files returned.|
|nextPageToken|string|false|none|The token to retrieve the next page of files, or empty if there are no more files to return.|

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

<h2 id="tocS_ListPackagesResponse">ListPackagesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpackagesresponse"></a>
<a id="schema_ListPackagesResponse"></a>
<a id="tocSlistpackagesresponse"></a>
<a id="tocslistpackagesresponse"></a>

```json
{
  "nextPageToken": "string",
  "packages": [
    {
      "createTime": "string",
      "displayName": "string",
      "name": "string",
      "updateTime": "string"
    }
  ]
}
```

The response from listing packages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The token to retrieve the next page of packages, or empty if there are no more packages to return.|
|packages|[[Package](#schemapackage)]|false|none|The packages returned.|

<h2 id="tocS_ListRepositoriesResponse">ListRepositoriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistrepositoriesresponse"></a>
<a id="schema_ListRepositoriesResponse"></a>
<a id="tocSlistrepositoriesresponse"></a>
<a id="tocslistrepositoriesresponse"></a>

```json
{
  "nextPageToken": "string",
  "repositories": [
    {
      "createTime": "string",
      "description": "string",
      "format": "FORMAT_UNSPECIFIED",
      "kmsKeyName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "mavenConfig": {
        "allowSnapshotOverwrites": true,
        "versionPolicy": "VERSION_POLICY_UNSPECIFIED"
      },
      "name": "string",
      "satisfiesPzs": true,
      "sizeBytes": "string",
      "updateTime": "string"
    }
  ]
}
```

The response from listing repositories.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The token to retrieve the next page of repositories, or empty if there are no more repositories to return.|
|repositories|[[Repository](#schemarepository)]|false|none|The repositories returned.|

<h2 id="tocS_ListTagsResponse">ListTagsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsresponse"></a>
<a id="schema_ListTagsResponse"></a>
<a id="tocSlisttagsresponse"></a>
<a id="tocslisttagsresponse"></a>

```json
{
  "nextPageToken": "string",
  "tags": [
    {
      "name": "string",
      "version": "string"
    }
  ]
}
```

The response from listing tags.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The token to retrieve the next page of tags, or empty if there are no more tags to return.|
|tags|[[Tag](#schematag)]|false|none|The tags returned.|

<h2 id="tocS_ListVersionsResponse">ListVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistversionsresponse"></a>
<a id="schema_ListVersionsResponse"></a>
<a id="tocSlistversionsresponse"></a>
<a id="tocslistversionsresponse"></a>

```json
{
  "nextPageToken": "string",
  "versions": [
    {
      "createTime": "string",
      "description": "string",
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string",
      "relatedTags": [
        {
          "name": "string",
          "version": "string"
        }
      ],
      "updateTime": "string"
    }
  ]
}
```

The response from listing versions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The token to retrieve the next page of versions, or empty if there are no more versions to return.|
|versions|[[Version](#schemaversion)]|false|none|The versions returned.|

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

<h2 id="tocS_MavenRepositoryConfig">MavenRepositoryConfig</h2>
<!-- backwards compatibility -->
<a id="schemamavenrepositoryconfig"></a>
<a id="schema_MavenRepositoryConfig"></a>
<a id="tocSmavenrepositoryconfig"></a>
<a id="tocsmavenrepositoryconfig"></a>

```json
{
  "allowSnapshotOverwrites": true,
  "versionPolicy": "VERSION_POLICY_UNSPECIFIED"
}
```

MavenRepositoryConfig is maven related repository details. Provides additional configuration details for repositories of the maven format type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowSnapshotOverwrites|boolean|false|none|The repository with this flag will allow publishing the same snapshot versions.|
|versionPolicy|string|false|none|Version policy defines the versions that the registry will accept.|

#### Enumerated Values

|Property|Value|
|---|---|
|versionPolicy|VERSION_POLICY_UNSPECIFIED|
|versionPolicy|RELEASE|
|versionPolicy|SNAPSHOT|

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
{}
```

Metadata type for longrunning-operations, currently empty.

<h2 id="tocS_Package">Package</h2>
<!-- backwards compatibility -->
<a id="schemapackage"></a>
<a id="schema_Package"></a>
<a id="tocSpackage"></a>
<a id="tocspackage"></a>

```json
{
  "createTime": "string",
  "displayName": "string",
  "name": "string",
  "updateTime": "string"
}
```

Packages are named collections of versions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|The time when the package was created.|
|displayName|string|false|none|The display name of the package.|
|name|string|false|none|The name of the package, for example: "projects/p1/locations/us-central1/repositories/repo1/packages/pkg1". If the package ID part contains slashes, the slashes are escaped.|
|updateTime|string(google-datetime)|false|none|The time when the package was last updated. This includes publishing a new version of the package.|

<h2 id="tocS_Policy">Policy</h2>
<!-- backwards compatibility -->
<a id="schemapolicy"></a>
<a id="schema_Policy"></a>
<a id="tocSpolicy"></a>
<a id="tocspolicy"></a>

```json
{
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
|bindings|[[Binding](#schemabinding)]|false|none|Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.|
|etag|string(byte)|false|none|`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.|
|version|integer(int32)|false|none|Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|

<h2 id="tocS_ProjectSettings">ProjectSettings</h2>
<!-- backwards compatibility -->
<a id="schemaprojectsettings"></a>
<a id="schema_ProjectSettings"></a>
<a id="tocSprojectsettings"></a>
<a id="tocsprojectsettings"></a>

```json
{
  "legacyRedirectionState": "REDIRECTION_STATE_UNSPECIFIED",
  "name": "string"
}
```

The Artifact Registry settings that apply to a Project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|legacyRedirectionState|string|false|none|The redirection state of the legacy repositories in this project.|
|name|string|false|none|The name of the project's settings. Always of the form: projects/{project-id}/projectSettings In update request: never set In response: always set|

#### Enumerated Values

|Property|Value|
|---|---|
|legacyRedirectionState|REDIRECTION_STATE_UNSPECIFIED|
|legacyRedirectionState|REDIRECTION_FROM_GCR_IO_DISABLED|
|legacyRedirectionState|REDIRECTION_FROM_GCR_IO_ENABLED|
|legacyRedirectionState|REDIRECTION_FROM_GCR_IO_FINALIZED|

<h2 id="tocS_Repository">Repository</h2>
<!-- backwards compatibility -->
<a id="schemarepository"></a>
<a id="schema_Repository"></a>
<a id="tocSrepository"></a>
<a id="tocsrepository"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "format": "FORMAT_UNSPECIFIED",
  "kmsKeyName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "mavenConfig": {
    "allowSnapshotOverwrites": true,
    "versionPolicy": "VERSION_POLICY_UNSPECIFIED"
  },
  "name": "string",
  "satisfiesPzs": true,
  "sizeBytes": "string",
  "updateTime": "string"
}
```

A Repository for storing artifacts with a specific format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time when the repository was created.|
|description|string|false|none|The user-provided description of the repository.|
|format|string|false|none|The format of packages that are stored in the repository.|
|kmsKeyName|string|false|none|The Cloud KMS resource name of the customer managed encryption key that's used to encrypt the contents of the Repository. Has the form: `projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key`. This value may not be changed after the Repository has been created.|
|labels|object|false|none|Labels with user-defined metadata. This field may contain up to 64 entries. Label keys and values may be no longer than 63 characters. Label keys must begin with a lowercase letter and may only contain lowercase letters, numeric characters, underscores, and dashes.|
|mavenConfig|[MavenRepositoryConfig](#schemamavenrepositoryconfig)|false|none|Maven repository config contains repository level configuration for the repositories of maven type.|
|name|string|false|none|The name of the repository, for example: "projects/p1/locations/us-central1/repositories/repo1".|
|satisfiesPzs|boolean|false|read-only|Output only. If set, the repository satisfies physical zone separation.|
|sizeBytes|string(int64)|false|read-only|Output only. The size, in bytes, of all artifact storage in this repository. Repositories that are generally available or in public preview use this to calculate storage costs.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time when the repository was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|format|FORMAT_UNSPECIFIED|
|format|DOCKER|
|format|MAVEN|
|format|NPM|
|format|APT|
|format|YUM|
|format|PYTHON|

<h2 id="tocS_SetIamPolicyRequest">SetIamPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetiampolicyrequest"></a>
<a id="schema_SetIamPolicyRequest"></a>
<a id="tocSsetiampolicyrequest"></a>
<a id="tocssetiampolicyrequest"></a>

```json
{
  "policy": {
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
}
```

Request message for `SetIamPolicy` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy|[Policy](#schemapolicy)|false|none|REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.|

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

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "name": "string",
  "version": "string"
}
```

Tags point to a version and represent an alternative name that can be used to access the version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the tag, for example: "projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/tags/tag1". If the package part contains slashes, the slashes are escaped. The tag part can only have characters in [a-zA-Z0-9\-._~:@], anything else must be URL encoded.|
|version|string|false|none|The name of the version the tag refers to, for example: "projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/versions/sha256:5243811" If the package or version ID parts contain slashes, the slashes are escaped.|

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

<h2 id="tocS_UploadAptArtifactMediaResponse">UploadAptArtifactMediaResponse</h2>
<!-- backwards compatibility -->
<a id="schemauploadaptartifactmediaresponse"></a>
<a id="schema_UploadAptArtifactMediaResponse"></a>
<a id="tocSuploadaptartifactmediaresponse"></a>
<a id="tocsuploadaptartifactmediaresponse"></a>

```json
{
  "operation": {
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
}
```

The response to upload an artifact.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|[Operation](#schemaoperation)|false|none|Operation to be returned to the user.|

<h2 id="tocS_UploadAptArtifactMetadata">UploadAptArtifactMetadata</h2>
<!-- backwards compatibility -->
<a id="schemauploadaptartifactmetadata"></a>
<a id="schema_UploadAptArtifactMetadata"></a>
<a id="tocSuploadaptartifactmetadata"></a>
<a id="tocsuploadaptartifactmetadata"></a>

```json
{}
```

The operation metadata for uploading artifacts.

<h2 id="tocS_UploadAptArtifactRequest">UploadAptArtifactRequest</h2>
<!-- backwards compatibility -->
<a id="schemauploadaptartifactrequest"></a>
<a id="schema_UploadAptArtifactRequest"></a>
<a id="tocSuploadaptartifactrequest"></a>
<a id="tocsuploadaptartifactrequest"></a>

```json
{}
```

The request to upload an artifact.

<h2 id="tocS_UploadAptArtifactResponse">UploadAptArtifactResponse</h2>
<!-- backwards compatibility -->
<a id="schemauploadaptartifactresponse"></a>
<a id="schema_UploadAptArtifactResponse"></a>
<a id="tocSuploadaptartifactresponse"></a>
<a id="tocsuploadaptartifactresponse"></a>

```json
{
  "aptArtifacts": [
    {
      "architecture": "string",
      "component": "string",
      "controlFile": "string",
      "name": "string",
      "packageName": "string",
      "packageType": "PACKAGE_TYPE_UNSPECIFIED"
    }
  ]
}
```

The response of the completed artifact upload operation. This response is contained in the Operation and available to users.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aptArtifacts|[[AptArtifact](#schemaaptartifact)]|false|none|The Apt artifacts updated.|

<h2 id="tocS_UploadYumArtifactMediaResponse">UploadYumArtifactMediaResponse</h2>
<!-- backwards compatibility -->
<a id="schemauploadyumartifactmediaresponse"></a>
<a id="schema_UploadYumArtifactMediaResponse"></a>
<a id="tocSuploadyumartifactmediaresponse"></a>
<a id="tocsuploadyumartifactmediaresponse"></a>

```json
{
  "operation": {
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
}
```

The response to upload an artifact.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|[Operation](#schemaoperation)|false|none|Operation to be returned to the user.|

<h2 id="tocS_UploadYumArtifactMetadata">UploadYumArtifactMetadata</h2>
<!-- backwards compatibility -->
<a id="schemauploadyumartifactmetadata"></a>
<a id="schema_UploadYumArtifactMetadata"></a>
<a id="tocSuploadyumartifactmetadata"></a>
<a id="tocsuploadyumartifactmetadata"></a>

```json
{}
```

The operation metadata for uploading artifacts.

<h2 id="tocS_UploadYumArtifactRequest">UploadYumArtifactRequest</h2>
<!-- backwards compatibility -->
<a id="schemauploadyumartifactrequest"></a>
<a id="schema_UploadYumArtifactRequest"></a>
<a id="tocSuploadyumartifactrequest"></a>
<a id="tocsuploadyumartifactrequest"></a>

```json
{}
```

The request to upload an artifact.

<h2 id="tocS_UploadYumArtifactResponse">UploadYumArtifactResponse</h2>
<!-- backwards compatibility -->
<a id="schemauploadyumartifactresponse"></a>
<a id="schema_UploadYumArtifactResponse"></a>
<a id="tocSuploadyumartifactresponse"></a>
<a id="tocsuploadyumartifactresponse"></a>

```json
{
  "yumArtifacts": [
    {
      "architecture": "string",
      "name": "string",
      "packageName": "string",
      "packageType": "PACKAGE_TYPE_UNSPECIFIED"
    }
  ]
}
```

The response of the completed artifact upload operation. This response is contained in the Operation and available to users.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|yumArtifacts|[[YumArtifact](#schemayumartifact)]|false|none|The Apt artifacts updated.|

<h2 id="tocS_Version">Version</h2>
<!-- backwards compatibility -->
<a id="schemaversion"></a>
<a id="schema_Version"></a>
<a id="tocSversion"></a>
<a id="tocsversion"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "relatedTags": [
    {
      "name": "string",
      "version": "string"
    }
  ],
  "updateTime": "string"
}
```

The body of a version resource. A version resource represents a collection of components, such as files and other data. This may correspond to a version in many package management schemes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|The time when the version was created.|
|description|string|false|none|Optional. Description of the version, as specified in its metadata.|
|metadata|object|false|read-only|Output only. Repository-specific Metadata stored against this version. The fields returned are defined by the underlying repository-specific resource. Currently, the resources could be: DockerImage MavenArtifact|
|name|string|false|none|The name of the version, for example: "projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/versions/art1". If the package or version ID parts contain slashes, the slashes are escaped.|
|relatedTags|[[Tag](#schematag)]|false|none|Output only. A list of related tags. Will contain up to 100 tags that reference this version.|
|updateTime|string(google-datetime)|false|none|The time when the version was last updated.|

<h2 id="tocS_YumArtifact">YumArtifact</h2>
<!-- backwards compatibility -->
<a id="schemayumartifact"></a>
<a id="schema_YumArtifact"></a>
<a id="tocSyumartifact"></a>
<a id="tocsyumartifact"></a>

```json
{
  "architecture": "string",
  "name": "string",
  "packageName": "string",
  "packageType": "PACKAGE_TYPE_UNSPECIFIED"
}
```

A detailed representation of a Yum artifact.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|architecture|string|false|read-only|Output only. Operating system architecture of the artifact.|
|name|string|false|read-only|Output only. The Artifact Registry resource name of the artifact.|
|packageName|string|false|read-only|Output only. The yum package name of the artifact.|
|packageType|string|false|read-only|Output only. An artifact is a binary or source package.|

#### Enumerated Values

|Property|Value|
|---|---|
|packageType|PACKAGE_TYPE_UNSPECIFIED|
|packageType|BINARY|
|packageType|SOURCE|
