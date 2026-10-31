<h1 id="firebase-app-distribution-api">Firebase App Distribution API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://firebaseappdistribution.googleapis.com/">https://firebaseappdistribution.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://firebase.google.com/products/app-distribution">External documentation</a>

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

<h1 id="firebase-app-distribution-api-media">media</h1>

## firebaseappdistribution.media.upload

<a id="opIdfirebaseappdistribution.media.upload"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/releases:upload \
  -X POST \
  -H 'Content-Type: application/octet-stream' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{"blob":{"algorithm":"string","bigstoreObjectRef":"string","blobRef":"string","blobstore2Info":{"blobGeneration":"string","blobId":"string","downloadReadHandle":"string","readToken":"string","uploadMetadataContainer":"string"},"compositeMedia":[{"blobRef":"string","blobstore2Info":{"blobGeneration":"string","blobId":"string","downloadReadHandle":"string","readToken":"string","uploadMetadataContainer":"string"},"cosmoBinaryReference":"string","crc32cHash":0,"inline":"string","length":"string","md5Hash":"string","objectId":{"bucketName":"string","generation":"string","objectName":"string"},"path":"string","referenceType":"PATH","sha1Hash":"string"}],"contentType":"string","contentTypeInfo":{"bestGuess":"string","fromBytes":"string","fromFileName":"string","fromHeader":"string","fromUrlPath":"string"},"cosmoBinaryReference":"string","crc32cHash":0,"diffChecksumsResponse":{"checksumsLocation":{"blobRef":"string","blobstore2Info":{"blobGeneration":"string","blobId":"string","downloadReadHandle":"string","readToken":"string","uploadMetadataContainer":"string"},"cosmoBinaryReference":"string","crc32cHash":0,"inline":"string","length":"string","md5Hash":"string","objectId":{"bucketName":"string","generation":"string","objectName":"string"},"path":"string","referenceType":"PATH","sha1Hash":"string"},"chunkSizeBytes":"string","objectLocation":{"blobRef":"string","blobstore2Info":{"blobGeneration":"string","blobId":"string","downloadReadHandle":"string","readToken":"string","uploadMetadataContainer":"string"},"cosmoBinaryReference":"string","crc32cHash":0,"inline":"string","length":"string","md5Hash":"string","objectId":{"bucketName":"string","generation":"string","objectName":"string"},"path":"string","referenceType":"PATH","sha1Hash":"string"},"objectSizeBytes":"string","objectVersion":"string"},"diffDownloadResponse":{"objectLocation":{"blobRef":"string","blobstore2Info":{"blobGeneration":"string","blobId":"string","downloadReadHandle":"string","readToken":"string","uploadMetadataContainer":"string"},"cosmoBinaryReference":"string","crc32cHash":0,"inline":"string","length":"string","md5Hash":"string","objectId":{"bucketName":"string","generation":"string","objectName":"string"},"path":"string","referenceType":"PATH","sha1Hash":"string"}},"diffUploadRequest":{"checksumsInfo":{"blobRef":"string","blobstore2Info":{"blobGeneration":"string","blobId":"string","downloadReadHandle":"string","readToken":"string","uploadMetadataContainer":"string"},"cosmoBinaryReference":"string","crc32cHash":0,"inline":"string","length":"string","md5Hash":"string","objectId":{"bucketName":"string","generation":"string","objectName":"string"},"path":"string","referenceType":"PATH","sha1Hash":"string"},"objectInfo":{"blobRef":"string","blobstore2Info":{"blobGeneration":"string","blobId":"string","downloadReadHandle":"string","readToken":"string","uploadMetadataContainer":"string"},"cosmoBinaryReference":"string","crc32cHash":0,"inline":"string","length":"string","md5Hash":"string","objectId":{"bucketName":"string","generation":"string","objectName":"string"},"path":"string","referenceType":"PATH","sha1Hash":"string"},"objectVersion":"string"},"diffUploadResponse":{"objectVersion":"string","originalObject":{"blobRef":"string","blobstore2Info":{"blobGeneration":"string","blobId":"string","downloadReadHandle":"string","readToken":"string","uploadMetadataContainer":"string"},"cosmoBinaryReference":"string","crc32cHash":0,"inline":"string","length":"string","md5Hash":"string","objectId":{"bucketName":"string","generation":"string","objectName":"string"},"path":"string","referenceType":"PATH","sha1Hash":"string"}},"diffVersionResponse":{"objectSizeBytes":"string","objectVersion":"string"},"downloadParameters":{"allowGzipCompression":true,"ignoreRange":true},"filename":"string","hash":"string","hashVerified":true,"inline":"string","isPotentialRetry":true,"length":"string","md5Hash":"string","mediaId":"string","objectId":{"bucketName":"string","generation":"string","objectName":"string"},"path":"string","referenceType":"PATH","sha1Hash":"string","sha256Hash":"string","timestamp":"string","token":"string"}}'
```

`POST /v1/{app}/releases:upload`

Uploads a binary. Uploading a binary can result in a new release being created, an update to an existing release, or a no-op if a release with the same binary already exists.

> Body parameter

```json
{
  "blob": {
    "algorithm": "string",
    "bigstoreObjectRef": "string",
    "blobRef": "string",
    "blobstore2Info": {
      "blobGeneration": "string",
      "blobId": "string",
      "downloadReadHandle": "string",
      "readToken": "string",
      "uploadMetadataContainer": "string"
    },
    "compositeMedia": [
      {
        "blobRef": "string",
        "blobstore2Info": {
          "blobGeneration": "string",
          "blobId": "string",
          "downloadReadHandle": "string",
          "readToken": "string",
          "uploadMetadataContainer": "string"
        },
        "cosmoBinaryReference": "string",
        "crc32cHash": 0,
        "inline": "string",
        "length": "string",
        "md5Hash": "string",
        "objectId": {
          "bucketName": "string",
          "generation": "string",
          "objectName": "string"
        },
        "path": "string",
        "referenceType": "PATH",
        "sha1Hash": "string"
      }
    ],
    "contentType": "string",
    "contentTypeInfo": {
      "bestGuess": "string",
      "fromBytes": "string",
      "fromFileName": "string",
      "fromHeader": "string",
      "fromUrlPath": "string"
    },
    "cosmoBinaryReference": "string",
    "crc32cHash": 0,
    "diffChecksumsResponse": {
      "checksumsLocation": {
        "blobRef": "string",
        "blobstore2Info": {
          "blobGeneration": "string",
          "blobId": "string",
          "downloadReadHandle": "string",
          "readToken": "string",
          "uploadMetadataContainer": "string"
        },
        "cosmoBinaryReference": "string",
        "crc32cHash": 0,
        "inline": "string",
        "length": "string",
        "md5Hash": "string",
        "objectId": {
          "bucketName": "string",
          "generation": "string",
          "objectName": "string"
        },
        "path": "string",
        "referenceType": "PATH",
        "sha1Hash": "string"
      },
      "chunkSizeBytes": "string",
      "objectLocation": {
        "blobRef": "string",
        "blobstore2Info": {
          "blobGeneration": "string",
          "blobId": "string",
          "downloadReadHandle": "string",
          "readToken": "string",
          "uploadMetadataContainer": "string"
        },
        "cosmoBinaryReference": "string",
        "crc32cHash": 0,
        "inline": "string",
        "length": "string",
        "md5Hash": "string",
        "objectId": {
          "bucketName": "string",
          "generation": "string",
          "objectName": "string"
        },
        "path": "string",
        "referenceType": "PATH",
        "sha1Hash": "string"
      },
      "objectSizeBytes": "string",
      "objectVersion": "string"
    },
    "diffDownloadResponse": {
      "objectLocation": {
        "blobRef": "string",
        "blobstore2Info": {
          "blobGeneration": "string",
          "blobId": "string",
          "downloadReadHandle": "string",
          "readToken": "string",
          "uploadMetadataContainer": "string"
        },
        "cosmoBinaryReference": "string",
        "crc32cHash": 0,
        "inline": "string",
        "length": "string",
        "md5Hash": "string",
        "objectId": {
          "bucketName": "string",
          "generation": "string",
          "objectName": "string"
        },
        "path": "string",
        "referenceType": "PATH",
        "sha1Hash": "string"
      }
    },
    "diffUploadRequest": {
      "checksumsInfo": {
        "blobRef": "string",
        "blobstore2Info": {
          "blobGeneration": "string",
          "blobId": "string",
          "downloadReadHandle": "string",
          "readToken": "string",
          "uploadMetadataContainer": "string"
        },
        "cosmoBinaryReference": "string",
        "crc32cHash": 0,
        "inline": "string",
        "length": "string",
        "md5Hash": "string",
        "objectId": {
          "bucketName": "string",
          "generation": "string",
          "objectName": "string"
        },
        "path": "string",
        "referenceType": "PATH",
        "sha1Hash": "string"
      },
      "objectInfo": {
        "blobRef": "string",
        "blobstore2Info": {
          "blobGeneration": "string",
          "blobId": "string",
          "downloadReadHandle": "string",
          "readToken": "string",
          "uploadMetadataContainer": "string"
        },
        "cosmoBinaryReference": "string",
        "crc32cHash": 0,
        "inline": "string",
        "length": "string",
        "md5Hash": "string",
        "objectId": {
          "bucketName": "string",
          "generation": "string",
          "objectName": "string"
        },
        "path": "string",
        "referenceType": "PATH",
        "sha1Hash": "string"
      },
      "objectVersion": "string"
    },
    "diffUploadResponse": {
      "objectVersion": "string",
      "originalObject": {
        "blobRef": "string",
        "blobstore2Info": {
          "blobGeneration": "string",
          "blobId": "string",
          "downloadReadHandle": "string",
          "readToken": "string",
          "uploadMetadataContainer": "string"
        },
        "cosmoBinaryReference": "string",
        "crc32cHash": 0,
        "inline": "string",
        "length": "string",
        "md5Hash": "string",
        "objectId": {
          "bucketName": "string",
          "generation": "string",
          "objectName": "string"
        },
        "path": "string",
        "referenceType": "PATH",
        "sha1Hash": "string"
      }
    },
    "diffVersionResponse": {
      "objectSizeBytes": "string",
      "objectVersion": "string"
    },
    "downloadParameters": {
      "allowGzipCompression": true,
      "ignoreRange": true
    },
    "filename": "string",
    "hash": "string",
    "hashVerified": true,
    "inline": "string",
    "isPotentialRetry": true,
    "length": "string",
    "md5Hash": "string",
    "mediaId": "string",
    "objectId": {
      "bucketName": "string",
      "generation": "string",
      "objectName": "string"
    },
    "path": "string",
    "referenceType": "PATH",
    "sha1Hash": "string",
    "sha256Hash": "string",
    "timestamp": "string",
    "token": "string"
  }
}
```

<h3 id="firebaseappdistributionmediaupload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app|path|string|true|The name of the app resource. Format: `projects/{project_number}/apps/{app_id}`|
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
|body|body|[GoogleFirebaseAppdistroV1UploadReleaseRequest](#schemagooglefirebaseappdistrov1uploadreleaserequest)|false|none|
|» blob|body|[GdataMedia](#schemagdatamedia)|false|Binary to upload|

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

<h3 id="firebaseappdistributionmediaupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

<h1 id="firebase-app-distribution-api-projects">projects</h1>

## firebaseappdistribution.projects.groups.batchJoin

<a id="opIdfirebaseappdistribution.projects.groups.batchJoin"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:batchJoin \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "createMissingTesters": true,
    "emails": [
      "string"
    ]
  }'
```

`POST /v1/{group}:batchJoin`

Batch adds members to a group. The testers will gain access to all releases that the groups have access to.

> Body parameter

```json
{
  "createMissingTesters": true,
  "emails": [
    "string"
  ]
}
```

<h3 id="firebaseappdistributionprojectsgroupsbatchjoin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group|path|string|true|Required. The name of the group resource to which testers are added. Format: `projects/{project_number}/groups/{group_alias}`|
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
|body|body|[GoogleFirebaseAppdistroV1BatchJoinGroupRequest](#schemagooglefirebaseappdistrov1batchjoingrouprequest)|false|none|
|» createMissingTesters|body|boolean|false|Indicates whether to create tester resources based on `emails` if they don't exist yet.|
|» emails|body|[string]|false|Required. The emails of the testers to be added to the group. A maximum of 999 and a minimum of 1 tester can be created in a batch.|

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

<h3 id="firebaseappdistributionprojectsgroupsbatchjoin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## firebaseappdistribution.projects.groups.batchLeave

<a id="opIdfirebaseappdistribution.projects.groups.batchLeave"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:batchLeave \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "emails": [
      "string"
    ]
  }'
```

`POST /v1/{group}:batchLeave`

Batch removed members from a group. The testers will lose access to all releases that the groups have access to.

> Body parameter

```json
{
  "emails": [
    "string"
  ]
}
```

<h3 id="firebaseappdistributionprojectsgroupsbatchleave-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group|path|string|true|Required. The name of the group resource from which testers are removed. Format: `projects/{project_number}/groups/{group_alias}`|
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
|body|body|[GoogleFirebaseAppdistroV1BatchLeaveGroupRequest](#schemagooglefirebaseappdistrov1batchleavegrouprequest)|false|none|
|» emails|body|[string]|false|Required. The email addresses of the testers to be removed from the group. A maximum of 999 and a minimum of 1 testers can be removed in a batch.|

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

<h3 id="firebaseappdistributionprojectsgroupsbatchleave-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## firebaseappdistribution.projects.groups.get

<a id="opIdfirebaseappdistribution.projects.groups.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Get a group.

<h3 id="firebaseappdistributionprojectsgroupsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the group resource to retrieve. Format: `projects/{project_number}/groups/{group_alias}`|
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
  "displayName": "string",
  "inviteLinkCount": 0,
  "name": "string",
  "releaseCount": 0,
  "testerCount": 0
}
```

<h3 id="firebaseappdistributionprojectsgroupsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleFirebaseAppdistroV1Group](#schemagooglefirebaseappdistrov1group)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## firebaseappdistribution.projects.groups.delete

<a id="opIdfirebaseappdistribution.projects.groups.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{name}`

Delete a group.

<h3 id="firebaseappdistributionprojectsgroupsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the group resource. Format: `projects/{project_number}/groups/{group_alias}`|
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

<h3 id="firebaseappdistributionprojectsgroupsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## firebaseappdistribution.projects.testers.patch

<a id="opIdfirebaseappdistribution.projects.testers.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "groups": [
      "string"
    ],
    "name": "string"
  }'
```

`PATCH /v1/{name}`

Update a tester. If the testers joins a group they gain access to all releases that the group has access to.

> Body parameter

```json
{
  "displayName": "string",
  "groups": [
    "string"
  ],
  "name": "string"
}
```

<h3 id="firebaseappdistributionprojectstesterspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the tester resource. Format: `projects/{project_number}/testers/{email_address}`|
|updateMask|query|string|false|The list of fields to update.|
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
|body|body|[GoogleFirebaseAppdistroV1Tester](#schemagooglefirebaseappdistrov1tester)|false|none|
|» displayName|body|string|false|The name of the tester associated with the Google account used to accept the tester invitation.|
|» groups|body|[string]|false|The resource names of the groups this tester belongs to.|
|» name|body|string|false|The name of the tester resource. Format: `projects/{project_number}/testers/{email_address}`|

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
  "displayName": "string",
  "groups": [
    "string"
  ],
  "lastActivityTime": "string",
  "name": "string"
}
```

<h3 id="firebaseappdistributionprojectstesterspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleFirebaseAppdistroV1Tester](#schemagooglefirebaseappdistrov1tester)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## firebaseappdistribution.projects.apps.releases.operations.list

<a id="opIdfirebaseappdistribution.projects.apps.releases.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="firebaseappdistributionprojectsappsreleasesoperationslist-parameters">Parameters</h3>

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

<h3 id="firebaseappdistributionprojectsappsreleasesoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningListOperationsResponse](#schemagooglelongrunninglistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## firebaseappdistribution.projects.apps.releases.operations.cancel

<a id="opIdfirebaseappdistribution.projects.apps.releases.operations.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/{name}:cancel`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

> Body parameter

```json
{}
```

<h3 id="firebaseappdistributionprojectsappsreleasesoperationscancel-parameters">Parameters</h3>

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
|body|body|[GoogleLongrunningCancelOperationRequest](#schemagooglelongrunningcanceloperationrequest)|false|none|

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

<h3 id="firebaseappdistributionprojectsappsreleasesoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## firebaseappdistribution.projects.apps.releases.distribute

<a id="opIdfirebaseappdistribution.projects.apps.releases.distribute"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:distribute \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "groupAliases": [
      "string"
    ],
    "testerEmails": [
      "string"
    ]
  }'
```

`POST /v1/{name}:distribute`

Distributes a release to testers. This call does the following: 1. Creates testers for the specified emails, if none exist. 2. Adds the testers and groups to the release. 3. Sends new testers an invitation email. 4. Sends existing testers a new release email. The request will fail with a `INVALID_ARGUMENT` if it contains a group that doesn't exist.

> Body parameter

```json
{
  "groupAliases": [
    "string"
  ],
  "testerEmails": [
    "string"
  ]
}
```

<h3 id="firebaseappdistributionprojectsappsreleasesdistribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the release resource to distribute. Format: `projects/{project_number}/apps/{app_id}/releases/{release_id}`|
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
|body|body|[GoogleFirebaseAppdistroV1DistributeReleaseRequest](#schemagooglefirebaseappdistrov1distributereleaserequest)|false|none|
|» groupAliases|body|[string]|false|A list of group aliases (IDs) to be given access to this release. A combined maximum of 999 `testerEmails` and `groupAliases` can be specified in a single request.|
|» testerEmails|body|[string]|false|A list of tester email addresses to be given access to this release. A combined maximum of 999 `testerEmails` and `groupAliases` can be specified in a single request.|

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

<h3 id="firebaseappdistributionprojectsappsreleasesdistribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleFirebaseAppdistroV1DistributeReleaseResponse](#schemagooglefirebaseappdistrov1distributereleaseresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## firebaseappdistribution.projects.apps.releases.operations.wait

<a id="opIdfirebaseappdistribution.projects.apps.releases.operations.wait"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:wait \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "timeout": "string"
  }'
```

`POST /v1/{name}:wait`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

> Body parameter

```json
{
  "timeout": "string"
}
```

<h3 id="firebaseappdistributionprojectsappsreleasesoperationswait-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource to wait on.|
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
|body|body|[GoogleLongrunningWaitOperationRequest](#schemagooglelongrunningwaitoperationrequest)|false|none|
|» timeout|body|string(google-duration)|false|The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.|

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

<h3 id="firebaseappdistributionprojectsappsreleasesoperationswait-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## firebaseappdistribution.projects.apps.releases.feedbackReports.list

<a id="opIdfirebaseappdistribution.projects.apps.releases.feedbackReports.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/feedbackReports \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/feedbackReports`

Lists feedback reports. By default, sorts by `createTime` in descending order.

<h3 id="firebaseappdistributionprojectsappsreleasesfeedbackreportslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the release resource, which is the parent of the feedback report resources. Format: `projects/{project_number}/apps/{app}/releases/{release}`|
|filter|query|string|false|The expression to filter feedback reports listed in the response. To learn more about filtering, refer to [Google's AIP-160 standard](http://aip.dev/160). Supported fields: - `tester` - `createTime` supports `<`, `<=`, `>` and `>=`, and expects an RFC-3339 formatted string Example: - `createTime <= "2023-03-10T00:00:00+04:00"` - `tester = "projects/-/testers/*@example.com"`|
|orderBy|query|string|false|The fields used to order releases. Supported fields: - `createTime` - `tester` To specify descending order for a field, append a "desc" suffix, for example, `createTime desc`. If this parameter is not set, releases are ordered by `createTime` in descending order.|
|pageSize|query|integer|false|The maximum number of feedback reports to return. The service may return fewer than this value. The valid range is [1-100]; If unspecified (0), at most 25 feedback reports are returned. Values above 100 are coerced to 100.|
|pageToken|query|string|false|A page token, received from a previous `ListFeedbackReports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListFeedbackReports` must match the call that provided the page token.|
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
  "feedbackReports": [
    {
      "createTime": "string",
      "firebaseConsoleUri": "string",
      "name": "string",
      "screenshotUri": "string",
      "tester": "string",
      "text": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="firebaseappdistributionprojectsappsreleasesfeedbackreportslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleFirebaseAppdistroV1ListFeedbackReportsResponse](#schemagooglefirebaseappdistrov1listfeedbackreportsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## firebaseappdistribution.projects.groups.list

<a id="opIdfirebaseappdistribution.projects.groups.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/groups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/groups`

List groups.

<h3 id="firebaseappdistributionprojectsgroupslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the project resource, which is the parent of the group resources. Format: `projects/{project_number}`|
|pageSize|query|integer|false|Optional. The maximum number of groups to return. The service may return fewer than this value. The valid range is [1-1000]; If unspecified (0), at most 25 groups are returned. Values above 1000 are coerced to 1000.|
|pageToken|query|string|false|Optional. A page token, received from a previous `ListGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListGroups` must match the call that provided the page token.|
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
  "groups": [
    {
      "displayName": "string",
      "inviteLinkCount": 0,
      "name": "string",
      "releaseCount": 0,
      "testerCount": 0
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="firebaseappdistributionprojectsgroupslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleFirebaseAppdistroV1ListGroupsResponse](#schemagooglefirebaseappdistrov1listgroupsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## firebaseappdistribution.projects.groups.create

<a id="opIdfirebaseappdistribution.projects.groups.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/groups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "name": "string"
  }'
```

`POST /v1/{parent}/groups`

Create a group.

> Body parameter

```json
{
  "displayName": "string",
  "name": "string"
}
```

<h3 id="firebaseappdistributionprojectsgroupscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the project resource, which is the parent of the group resource. Format: `projects/{project_number}`|
|groupId|query|string|false|Optional. The "alias" to use for the group, which will become the final component of the group's resource name. This value must be unique per project. The field is named `groupId` to comply with AIP guidance for user-specified IDs. This value should be 4-63 characters, and valid characters are `/a-z-/`. If not set, it will be generated based on the display name.|
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
|body|body|[GoogleFirebaseAppdistroV1Group](#schemagooglefirebaseappdistrov1group)|false|none|
|» displayName|body|string|false|Required. The display name of the group.|
|» name|body|string|false|The name of the group resource. Format: `projects/{project_number}/groups/{group_alias}`|

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
  "displayName": "string",
  "inviteLinkCount": 0,
  "name": "string",
  "releaseCount": 0,
  "testerCount": 0
}
```

<h3 id="firebaseappdistributionprojectsgroupscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleFirebaseAppdistroV1Group](#schemagooglefirebaseappdistrov1group)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## firebaseappdistribution.projects.apps.releases.list

<a id="opIdfirebaseappdistribution.projects.apps.releases.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/releases \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/releases`

Lists releases. By default, sorts by `createTime` in descending order.

<h3 id="firebaseappdistributionprojectsappsreleaseslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the app resource, which is the parent of the release resources. Format: `projects/{project_number}/apps/{app_id}`|
|filter|query|string|false|The expression to filter releases listed in the response. To learn more about filtering, refer to [Google's AIP-160 standard](http://aip.dev/160). Supported fields: - `releaseNotes.text` supports `=` (can contain a wildcard character (`*`) at the beginning or end of the string) - `createTime` supports `<`, `<=`, `>` and `>=`, and expects an RFC-3339 formatted string Examples: - `createTime <= "2021-09-08T00:00:00+04:00"` - `releaseNotes.text="fixes" AND createTime >= "2021-09-08T00:00:00.0Z"` - `releaseNotes.text="*v1.0.0-rc*"`|
|orderBy|query|string|false|The fields used to order releases. Supported fields: - `createTime` To specify descending order for a field, append a "desc" suffix, for example, `createTime desc`. If this parameter is not set, releases are ordered by `createTime` in descending order.|
|pageSize|query|integer|false|The maximum number of releases to return. The service may return fewer than this value. The valid range is [1-100]; If unspecified (0), at most 25 releases are returned. Values above 100 are coerced to 100.|
|pageToken|query|string|false|A page token, received from a previous `ListReleases` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReleases` must match the call that provided the page token.|
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
      "binaryDownloadUri": "string",
      "buildVersion": "string",
      "createTime": "string",
      "displayVersion": "string",
      "firebaseConsoleUri": "string",
      "name": "string",
      "releaseNotes": {
        "text": "string"
      },
      "testingUri": "string"
    }
  ]
}
```

<h3 id="firebaseappdistributionprojectsappsreleaseslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleFirebaseAppdistroV1ListReleasesResponse](#schemagooglefirebaseappdistrov1listreleasesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## firebaseappdistribution.projects.apps.releases.batchDelete

<a id="opIdfirebaseappdistribution.projects.apps.releases.batchDelete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/releases:batchDelete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "names": [
      "string"
    ]
  }'
```

`POST /v1/{parent}/releases:batchDelete`

Deletes releases. A maximum of 100 releases can be deleted per request.

> Body parameter

```json
{
  "names": [
    "string"
  ]
}
```

<h3 id="firebaseappdistributionprojectsappsreleasesbatchdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the app resource, which is the parent of the release resources. Format: `projects/{project_number}/apps/{app_id}`|
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
|body|body|[GoogleFirebaseAppdistroV1BatchDeleteReleasesRequest](#schemagooglefirebaseappdistrov1batchdeletereleasesrequest)|false|none|
|» names|body|[string]|false|Required. The names of the release resources to delete. Format: `projects/{project_number}/apps/{app_id}/releases/{release_id}` A maximum of 100 releases can be deleted per request.|

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

<h3 id="firebaseappdistributionprojectsappsreleasesbatchdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## firebaseappdistribution.projects.testers.list

<a id="opIdfirebaseappdistribution.projects.testers.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/testers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/testers`

Lists testers and their resource ids.

<h3 id="firebaseappdistributionprojectstesterslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the project resource, which is the parent of the tester resources. Format: `projects/{project_number}`|
|filter|query|string|false|Optional. The expression to filter testers listed in the response. To learn more about filtering, refer to [Google's AIP-160 standard](http://aip.dev/160). Supported fields: - `name` - `displayName` - `groups` Example: - `name = "projects/-/testers/*@example.com"` - `displayName = "Joe Sixpack"` - `groups = "projects/*/groups/qa-team"`|
|pageSize|query|integer|false|Optional. The maximum number of testers to return. The service may return fewer than this value. The valid range is [1-1000]; If unspecified (0), at most 10 testers are returned. Values above 1000 are coerced to 1000.|
|pageToken|query|string|false|Optional. A page token, received from a previous `ListTesters` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTesters` must match the call that provided the page token.|
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
  "testers": [
    {
      "displayName": "string",
      "groups": [
        "string"
      ],
      "lastActivityTime": "string",
      "name": "string"
    }
  ]
}
```

<h3 id="firebaseappdistributionprojectstesterslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleFirebaseAppdistroV1ListTestersResponse](#schemagooglefirebaseappdistrov1listtestersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## firebaseappdistribution.projects.testers.batchAdd

<a id="opIdfirebaseappdistribution.projects.testers.batchAdd"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/testers:batchAdd \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "emails": [
      "string"
    ]
  }'
```

`POST /v1/{project}/testers:batchAdd`

Batch adds testers. This call adds testers for the specified emails if they don't already exist. Returns all testers specified in the request, including newly created and previously existing testers. This action is idempotent.

> Body parameter

```json
{
  "emails": [
    "string"
  ]
}
```

<h3 id="firebaseappdistributionprojectstestersbatchadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Required. The name of the project resource. Format: `projects/{project_number}`|
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
|body|body|[GoogleFirebaseAppdistroV1BatchAddTestersRequest](#schemagooglefirebaseappdistrov1batchaddtestersrequest)|false|none|
|» emails|body|[string]|false|Required. The email addresses of the tester resources to create. A maximum of 999 and a minimum of 1 tester can be created in a batch.|

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
  "testers": [
    {
      "displayName": "string",
      "groups": [
        "string"
      ],
      "lastActivityTime": "string",
      "name": "string"
    }
  ]
}
```

<h3 id="firebaseappdistributionprojectstestersbatchadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleFirebaseAppdistroV1BatchAddTestersResponse](#schemagooglefirebaseappdistrov1batchaddtestersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## firebaseappdistribution.projects.testers.batchRemove

<a id="opIdfirebaseappdistribution.projects.testers.batchRemove"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/testers:batchRemove \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "emails": [
      "string"
    ]
  }'
```

`POST /v1/{project}/testers:batchRemove`

Batch removes testers. If found, this call deletes testers for the specified emails. Returns all deleted testers.

> Body parameter

```json
{
  "emails": [
    "string"
  ]
}
```

<h3 id="firebaseappdistributionprojectstestersbatchremove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Required. The name of the project resource. Format: `projects/{project_number}`|
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
|body|body|[GoogleFirebaseAppdistroV1BatchRemoveTestersRequest](#schemagooglefirebaseappdistrov1batchremovetestersrequest)|false|none|
|» emails|body|[string]|false|Required. The email addresses of the tester resources to removed. A maximum of 999 and a minimum of 1 testers can be deleted in a batch.|

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
  "emails": [
    "string"
  ]
}
```

<h3 id="firebaseappdistributionprojectstestersbatchremove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleFirebaseAppdistroV1BatchRemoveTestersResponse](#schemagooglefirebaseappdistrov1batchremovetestersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_GdataBlobstore2Info">GdataBlobstore2Info</h2>
<!-- backwards compatibility -->
<a id="schemagdatablobstore2info"></a>
<a id="schema_GdataBlobstore2Info"></a>
<a id="tocSgdatablobstore2info"></a>
<a id="tocsgdatablobstore2info"></a>

```json
{
  "blobGeneration": "string",
  "blobId": "string",
  "downloadReadHandle": "string",
  "readToken": "string",
  "uploadMetadataContainer": "string"
}
```

Information to read/write to blobstore2.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blobGeneration|string(int64)|false|none|The blob generation id.|
|blobId|string|false|none|The blob id, e.g., /blobstore/prod/playground/scotty|
|downloadReadHandle|string(byte)|false|none|Read handle passed from Bigstore -> Scotty for a GCS download. This is a signed, serialized blobstore2.ReadHandle proto which must never be set outside of Bigstore, and is not applicable to non-GCS media downloads.|
|readToken|string|false|none|The blob read token. Needed to read blobs that have not been replicated. Might not be available until the final call.|
|uploadMetadataContainer|string(byte)|false|none|Metadata passed from Blobstore -> Scotty for a new GCS upload. This is a signed, serialized blobstore2.BlobMetadataContainer proto which must never be consumed outside of Bigstore, and is not applicable to non-GCS media uploads.|

<h2 id="tocS_GdataCompositeMedia">GdataCompositeMedia</h2>
<!-- backwards compatibility -->
<a id="schemagdatacompositemedia"></a>
<a id="schema_GdataCompositeMedia"></a>
<a id="tocSgdatacompositemedia"></a>
<a id="tocsgdatacompositemedia"></a>

```json
{
  "blobRef": "string",
  "blobstore2Info": {
    "blobGeneration": "string",
    "blobId": "string",
    "downloadReadHandle": "string",
    "readToken": "string",
    "uploadMetadataContainer": "string"
  },
  "cosmoBinaryReference": "string",
  "crc32cHash": 0,
  "inline": "string",
  "length": "string",
  "md5Hash": "string",
  "objectId": {
    "bucketName": "string",
    "generation": "string",
    "objectName": "string"
  },
  "path": "string",
  "referenceType": "PATH",
  "sha1Hash": "string"
}
```

A sequence of media data references representing composite data. Introduced to support Bigstore composite objects. For details, visit http://go/bigstore-composites.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blobRef|string(byte)|false|none|Blobstore v1 reference, set if reference_type is BLOBSTORE_REF This should be the byte representation of a blobstore.BlobRef. Since Blobstore is deprecating v1, use blobstore2_info instead. For now, any v2 blob will also be represented in this field as v1 BlobRef.|
|blobstore2Info|[GdataBlobstore2Info](#schemagdatablobstore2info)|false|none|Blobstore v2 info, set if reference_type is BLOBSTORE_REF and it refers to a v2 blob.|
|cosmoBinaryReference|string(byte)|false|none|A binary data reference for a media download. Serves as a technology-agnostic binary reference in some Google infrastructure. This value is a serialized storage_cosmo.BinaryReference proto. Storing it as bytes is a hack to get around the fact that the cosmo proto (as well as others it includes) doesn't support JavaScript. This prevents us from including the actual type of this field.|
|crc32cHash|integer(uint32)|false|none|crc32.c hash for the payload.|
|inline|string(byte)|false|none|Media data, set if reference_type is INLINE|
|length|string(int64)|false|none|Size of the data, in bytes|
|md5Hash|string(byte)|false|none|MD5 hash for the payload.|
|objectId|[GdataObjectId](#schemagdataobjectid)|false|none|Reference to a TI Blob, set if reference_type is BIGSTORE_REF.|
|path|string|false|none|Path to the data, set if reference_type is PATH|
|referenceType|string|false|none|Describes what the field reference contains.|
|sha1Hash|string(byte)|false|none|SHA-1 hash for the payload.|

#### Enumerated Values

|Property|Value|
|---|---|
|referenceType|PATH|
|referenceType|BLOB_REF|
|referenceType|INLINE|
|referenceType|BIGSTORE_REF|
|referenceType|COSMO_BINARY_REFERENCE|

<h2 id="tocS_GdataContentTypeInfo">GdataContentTypeInfo</h2>
<!-- backwards compatibility -->
<a id="schemagdatacontenttypeinfo"></a>
<a id="schema_GdataContentTypeInfo"></a>
<a id="tocSgdatacontenttypeinfo"></a>
<a id="tocsgdatacontenttypeinfo"></a>

```json
{
  "bestGuess": "string",
  "fromBytes": "string",
  "fromFileName": "string",
  "fromHeader": "string",
  "fromUrlPath": "string"
}
```

Detailed Content-Type information from Scotty. The Content-Type of the media will typically be filled in by the header or Scotty's best_guess, but this extended information provides the backend with more information so that it can make a better decision if needed. This is only used on media upload requests from Scotty.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bestGuess|string|false|none|Scotty's best guess of what the content type of the file is.|
|fromBytes|string|false|none|The content type of the file derived by looking at specific bytes (i.e. "magic bytes") of the actual file.|
|fromFileName|string|false|none|The content type of the file derived from the file extension of the original file name used by the client.|
|fromHeader|string|false|none|The content type of the file as specified in the request headers, multipart headers, or RUPIO start request.|
|fromUrlPath|string|false|none|The content type of the file derived from the file extension of the URL path. The URL path is assumed to represent a file name (which is typically only true for agents that are providing a REST API).|

<h2 id="tocS_GdataDiffChecksumsResponse">GdataDiffChecksumsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagdatadiffchecksumsresponse"></a>
<a id="schema_GdataDiffChecksumsResponse"></a>
<a id="tocSgdatadiffchecksumsresponse"></a>
<a id="tocsgdatadiffchecksumsresponse"></a>

```json
{
  "checksumsLocation": {
    "blobRef": "string",
    "blobstore2Info": {
      "blobGeneration": "string",
      "blobId": "string",
      "downloadReadHandle": "string",
      "readToken": "string",
      "uploadMetadataContainer": "string"
    },
    "cosmoBinaryReference": "string",
    "crc32cHash": 0,
    "inline": "string",
    "length": "string",
    "md5Hash": "string",
    "objectId": {
      "bucketName": "string",
      "generation": "string",
      "objectName": "string"
    },
    "path": "string",
    "referenceType": "PATH",
    "sha1Hash": "string"
  },
  "chunkSizeBytes": "string",
  "objectLocation": {
    "blobRef": "string",
    "blobstore2Info": {
      "blobGeneration": "string",
      "blobId": "string",
      "downloadReadHandle": "string",
      "readToken": "string",
      "uploadMetadataContainer": "string"
    },
    "cosmoBinaryReference": "string",
    "crc32cHash": 0,
    "inline": "string",
    "length": "string",
    "md5Hash": "string",
    "objectId": {
      "bucketName": "string",
      "generation": "string",
      "objectName": "string"
    },
    "path": "string",
    "referenceType": "PATH",
    "sha1Hash": "string"
  },
  "objectSizeBytes": "string",
  "objectVersion": "string"
}
```

Backend response for a Diff get checksums response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checksumsLocation|[GdataCompositeMedia](#schemagdatacompositemedia)|false|none|Exactly one of these fields must be populated. If checksums_location is filled, the server will return the corresponding contents to the user. If object_location is filled, the server will calculate the checksums based on the content there and return that to the user. For details on the format of the checksums, see http://go/scotty-diff-protocol.|
|chunkSizeBytes|string(int64)|false|none|The chunk size of checksums. Must be a multiple of 256KB.|
|objectLocation|[GdataCompositeMedia](#schemagdatacompositemedia)|false|none|If set, calculate the checksums based on the contents and return them to the caller.|
|objectSizeBytes|string(int64)|false|none|The total size of the server object.|
|objectVersion|string|false|none|The object version of the object the checksums are being returned for.|

<h2 id="tocS_GdataDiffDownloadResponse">GdataDiffDownloadResponse</h2>
<!-- backwards compatibility -->
<a id="schemagdatadiffdownloadresponse"></a>
<a id="schema_GdataDiffDownloadResponse"></a>
<a id="tocSgdatadiffdownloadresponse"></a>
<a id="tocsgdatadiffdownloadresponse"></a>

```json
{
  "objectLocation": {
    "blobRef": "string",
    "blobstore2Info": {
      "blobGeneration": "string",
      "blobId": "string",
      "downloadReadHandle": "string",
      "readToken": "string",
      "uploadMetadataContainer": "string"
    },
    "cosmoBinaryReference": "string",
    "crc32cHash": 0,
    "inline": "string",
    "length": "string",
    "md5Hash": "string",
    "objectId": {
      "bucketName": "string",
      "generation": "string",
      "objectName": "string"
    },
    "path": "string",
    "referenceType": "PATH",
    "sha1Hash": "string"
  }
}
```

Backend response for a Diff download response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectLocation|[GdataCompositeMedia](#schemagdatacompositemedia)|false|none|The original object location.|

<h2 id="tocS_GdataDiffUploadRequest">GdataDiffUploadRequest</h2>
<!-- backwards compatibility -->
<a id="schemagdatadiffuploadrequest"></a>
<a id="schema_GdataDiffUploadRequest"></a>
<a id="tocSgdatadiffuploadrequest"></a>
<a id="tocsgdatadiffuploadrequest"></a>

```json
{
  "checksumsInfo": {
    "blobRef": "string",
    "blobstore2Info": {
      "blobGeneration": "string",
      "blobId": "string",
      "downloadReadHandle": "string",
      "readToken": "string",
      "uploadMetadataContainer": "string"
    },
    "cosmoBinaryReference": "string",
    "crc32cHash": 0,
    "inline": "string",
    "length": "string",
    "md5Hash": "string",
    "objectId": {
      "bucketName": "string",
      "generation": "string",
      "objectName": "string"
    },
    "path": "string",
    "referenceType": "PATH",
    "sha1Hash": "string"
  },
  "objectInfo": {
    "blobRef": "string",
    "blobstore2Info": {
      "blobGeneration": "string",
      "blobId": "string",
      "downloadReadHandle": "string",
      "readToken": "string",
      "uploadMetadataContainer": "string"
    },
    "cosmoBinaryReference": "string",
    "crc32cHash": 0,
    "inline": "string",
    "length": "string",
    "md5Hash": "string",
    "objectId": {
      "bucketName": "string",
      "generation": "string",
      "objectName": "string"
    },
    "path": "string",
    "referenceType": "PATH",
    "sha1Hash": "string"
  },
  "objectVersion": "string"
}
```

A Diff upload request. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checksumsInfo|[GdataCompositeMedia](#schemagdatacompositemedia)|false|none|The location of the checksums for the new object. Agents must clone the object located here, as the upload server will delete the contents once a response is received. For details on the format of the checksums, see http://go/scotty-diff-protocol.|
|objectInfo|[GdataCompositeMedia](#schemagdatacompositemedia)|false|none|The location of the new object. Agents must clone the object located here, as the upload server will delete the contents once a response is received.|
|objectVersion|string|false|none|The object version of the object that is the base version the incoming diff script will be applied to. This field will always be filled in.|

<h2 id="tocS_GdataDiffUploadResponse">GdataDiffUploadResponse</h2>
<!-- backwards compatibility -->
<a id="schemagdatadiffuploadresponse"></a>
<a id="schema_GdataDiffUploadResponse"></a>
<a id="tocSgdatadiffuploadresponse"></a>
<a id="tocsgdatadiffuploadresponse"></a>

```json
{
  "objectVersion": "string",
  "originalObject": {
    "blobRef": "string",
    "blobstore2Info": {
      "blobGeneration": "string",
      "blobId": "string",
      "downloadReadHandle": "string",
      "readToken": "string",
      "uploadMetadataContainer": "string"
    },
    "cosmoBinaryReference": "string",
    "crc32cHash": 0,
    "inline": "string",
    "length": "string",
    "md5Hash": "string",
    "objectId": {
      "bucketName": "string",
      "generation": "string",
      "objectName": "string"
    },
    "path": "string",
    "referenceType": "PATH",
    "sha1Hash": "string"
  }
}
```

Backend response for a Diff upload request. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectVersion|string|false|none|The object version of the object at the server. Must be included in the end notification response. The version in the end notification response must correspond to the new version of the object that is now stored at the server, after the upload.|
|originalObject|[GdataCompositeMedia](#schemagdatacompositemedia)|false|none|The location of the original file for a diff upload request. Must be filled in if responding to an upload start notification.|

<h2 id="tocS_GdataDiffVersionResponse">GdataDiffVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagdatadiffversionresponse"></a>
<a id="schema_GdataDiffVersionResponse"></a>
<a id="tocSgdatadiffversionresponse"></a>
<a id="tocsgdatadiffversionresponse"></a>

```json
{
  "objectSizeBytes": "string",
  "objectVersion": "string"
}
```

Backend response for a Diff get version response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectSizeBytes|string(int64)|false|none|The total size of the server object.|
|objectVersion|string|false|none|The version of the object stored at the server.|

<h2 id="tocS_GdataDownloadParameters">GdataDownloadParameters</h2>
<!-- backwards compatibility -->
<a id="schemagdatadownloadparameters"></a>
<a id="schema_GdataDownloadParameters"></a>
<a id="tocSgdatadownloadparameters"></a>
<a id="tocsgdatadownloadparameters"></a>

```json
{
  "allowGzipCompression": true,
  "ignoreRange": true
}
```

Parameters specific to media downloads.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowGzipCompression|boolean|false|none|A boolean to be returned in the response to Scotty. Allows/disallows gzip encoding of the payload content when the server thinks it's advantageous (hence, does not guarantee compression) which allows Scotty to GZip the response to the client.|
|ignoreRange|boolean|false|none|Determining whether or not Apiary should skip the inclusion of any Content-Range header on its response to Scotty.|

<h2 id="tocS_GdataMedia">GdataMedia</h2>
<!-- backwards compatibility -->
<a id="schemagdatamedia"></a>
<a id="schema_GdataMedia"></a>
<a id="tocSgdatamedia"></a>
<a id="tocsgdatamedia"></a>

```json
{
  "algorithm": "string",
  "bigstoreObjectRef": "string",
  "blobRef": "string",
  "blobstore2Info": {
    "blobGeneration": "string",
    "blobId": "string",
    "downloadReadHandle": "string",
    "readToken": "string",
    "uploadMetadataContainer": "string"
  },
  "compositeMedia": [
    {
      "blobRef": "string",
      "blobstore2Info": {
        "blobGeneration": "string",
        "blobId": "string",
        "downloadReadHandle": "string",
        "readToken": "string",
        "uploadMetadataContainer": "string"
      },
      "cosmoBinaryReference": "string",
      "crc32cHash": 0,
      "inline": "string",
      "length": "string",
      "md5Hash": "string",
      "objectId": {
        "bucketName": "string",
        "generation": "string",
        "objectName": "string"
      },
      "path": "string",
      "referenceType": "PATH",
      "sha1Hash": "string"
    }
  ],
  "contentType": "string",
  "contentTypeInfo": {
    "bestGuess": "string",
    "fromBytes": "string",
    "fromFileName": "string",
    "fromHeader": "string",
    "fromUrlPath": "string"
  },
  "cosmoBinaryReference": "string",
  "crc32cHash": 0,
  "diffChecksumsResponse": {
    "checksumsLocation": {
      "blobRef": "string",
      "blobstore2Info": {
        "blobGeneration": "string",
        "blobId": "string",
        "downloadReadHandle": "string",
        "readToken": "string",
        "uploadMetadataContainer": "string"
      },
      "cosmoBinaryReference": "string",
      "crc32cHash": 0,
      "inline": "string",
      "length": "string",
      "md5Hash": "string",
      "objectId": {
        "bucketName": "string",
        "generation": "string",
        "objectName": "string"
      },
      "path": "string",
      "referenceType": "PATH",
      "sha1Hash": "string"
    },
    "chunkSizeBytes": "string",
    "objectLocation": {
      "blobRef": "string",
      "blobstore2Info": {
        "blobGeneration": "string",
        "blobId": "string",
        "downloadReadHandle": "string",
        "readToken": "string",
        "uploadMetadataContainer": "string"
      },
      "cosmoBinaryReference": "string",
      "crc32cHash": 0,
      "inline": "string",
      "length": "string",
      "md5Hash": "string",
      "objectId": {
        "bucketName": "string",
        "generation": "string",
        "objectName": "string"
      },
      "path": "string",
      "referenceType": "PATH",
      "sha1Hash": "string"
    },
    "objectSizeBytes": "string",
    "objectVersion": "string"
  },
  "diffDownloadResponse": {
    "objectLocation": {
      "blobRef": "string",
      "blobstore2Info": {
        "blobGeneration": "string",
        "blobId": "string",
        "downloadReadHandle": "string",
        "readToken": "string",
        "uploadMetadataContainer": "string"
      },
      "cosmoBinaryReference": "string",
      "crc32cHash": 0,
      "inline": "string",
      "length": "string",
      "md5Hash": "string",
      "objectId": {
        "bucketName": "string",
        "generation": "string",
        "objectName": "string"
      },
      "path": "string",
      "referenceType": "PATH",
      "sha1Hash": "string"
    }
  },
  "diffUploadRequest": {
    "checksumsInfo": {
      "blobRef": "string",
      "blobstore2Info": {
        "blobGeneration": "string",
        "blobId": "string",
        "downloadReadHandle": "string",
        "readToken": "string",
        "uploadMetadataContainer": "string"
      },
      "cosmoBinaryReference": "string",
      "crc32cHash": 0,
      "inline": "string",
      "length": "string",
      "md5Hash": "string",
      "objectId": {
        "bucketName": "string",
        "generation": "string",
        "objectName": "string"
      },
      "path": "string",
      "referenceType": "PATH",
      "sha1Hash": "string"
    },
    "objectInfo": {
      "blobRef": "string",
      "blobstore2Info": {
        "blobGeneration": "string",
        "blobId": "string",
        "downloadReadHandle": "string",
        "readToken": "string",
        "uploadMetadataContainer": "string"
      },
      "cosmoBinaryReference": "string",
      "crc32cHash": 0,
      "inline": "string",
      "length": "string",
      "md5Hash": "string",
      "objectId": {
        "bucketName": "string",
        "generation": "string",
        "objectName": "string"
      },
      "path": "string",
      "referenceType": "PATH",
      "sha1Hash": "string"
    },
    "objectVersion": "string"
  },
  "diffUploadResponse": {
    "objectVersion": "string",
    "originalObject": {
      "blobRef": "string",
      "blobstore2Info": {
        "blobGeneration": "string",
        "blobId": "string",
        "downloadReadHandle": "string",
        "readToken": "string",
        "uploadMetadataContainer": "string"
      },
      "cosmoBinaryReference": "string",
      "crc32cHash": 0,
      "inline": "string",
      "length": "string",
      "md5Hash": "string",
      "objectId": {
        "bucketName": "string",
        "generation": "string",
        "objectName": "string"
      },
      "path": "string",
      "referenceType": "PATH",
      "sha1Hash": "string"
    }
  },
  "diffVersionResponse": {
    "objectSizeBytes": "string",
    "objectVersion": "string"
  },
  "downloadParameters": {
    "allowGzipCompression": true,
    "ignoreRange": true
  },
  "filename": "string",
  "hash": "string",
  "hashVerified": true,
  "inline": "string",
  "isPotentialRetry": true,
  "length": "string",
  "md5Hash": "string",
  "mediaId": "string",
  "objectId": {
    "bucketName": "string",
    "generation": "string",
    "objectName": "string"
  },
  "path": "string",
  "referenceType": "PATH",
  "sha1Hash": "string",
  "sha256Hash": "string",
  "timestamp": "string",
  "token": "string"
}
```

A reference to data stored on the filesystem, on GFS or in blobstore.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algorithm|string|false|none|Deprecated, use one of explicit hash type fields instead. Algorithm used for calculating the hash. As of 2011/01/21, "MD5" is the only possible value for this field. New values may be added at any time.|
|bigstoreObjectRef|string(byte)|false|none|Use object_id instead.|
|blobRef|string(byte)|false|none|Blobstore v1 reference, set if reference_type is BLOBSTORE_REF This should be the byte representation of a blobstore.BlobRef. Since Blobstore is deprecating v1, use blobstore2_info instead. For now, any v2 blob will also be represented in this field as v1 BlobRef.|
|blobstore2Info|[GdataBlobstore2Info](#schemagdatablobstore2info)|false|none|Blobstore v2 info, set if reference_type is BLOBSTORE_REF and it refers to a v2 blob.|
|compositeMedia|[[GdataCompositeMedia](#schemagdatacompositemedia)]|false|none|A composite media composed of one or more media objects, set if reference_type is COMPOSITE_MEDIA. The media length field must be set to the sum of the lengths of all composite media objects. Note: All composite media must have length specified.|
|contentType|string|false|none|MIME type of the data|
|contentTypeInfo|[GdataContentTypeInfo](#schemagdatacontenttypeinfo)|false|none|Extended content type information provided for Scotty uploads.|
|cosmoBinaryReference|string(byte)|false|none|A binary data reference for a media download. Serves as a technology-agnostic binary reference in some Google infrastructure. This value is a serialized storage_cosmo.BinaryReference proto. Storing it as bytes is a hack to get around the fact that the cosmo proto (as well as others it includes) doesn't support JavaScript. This prevents us from including the actual type of this field.|
|crc32cHash|integer(uint32)|false|none|For Scotty Uploads: Scotty-provided hashes for uploads For Scotty Downloads: (WARNING: DO NOT USE WITHOUT PERMISSION FROM THE SCOTTY TEAM.) A Hash provided by the agent to be used to verify the data being downloaded. Currently only supported for inline payloads. Further, only crc32c_hash is currently supported.|
|diffChecksumsResponse|[GdataDiffChecksumsResponse](#schemagdatadiffchecksumsresponse)|false|none|Set if reference_type is DIFF_CHECKSUMS_RESPONSE.|
|diffDownloadResponse|[GdataDiffDownloadResponse](#schemagdatadiffdownloadresponse)|false|none|Set if reference_type is DIFF_DOWNLOAD_RESPONSE.|
|diffUploadRequest|[GdataDiffUploadRequest](#schemagdatadiffuploadrequest)|false|none|Set if reference_type is DIFF_UPLOAD_REQUEST.|
|diffUploadResponse|[GdataDiffUploadResponse](#schemagdatadiffuploadresponse)|false|none|Set if reference_type is DIFF_UPLOAD_RESPONSE.|
|diffVersionResponse|[GdataDiffVersionResponse](#schemagdatadiffversionresponse)|false|none|Set if reference_type is DIFF_VERSION_RESPONSE.|
|downloadParameters|[GdataDownloadParameters](#schemagdatadownloadparameters)|false|none|Parameters for a media download.|
|filename|string|false|none|Original file name|
|hash|string|false|none|Deprecated, use one of explicit hash type fields instead. These two hash related fields will only be populated on Scotty based media uploads and will contain the content of the hash group in the NotificationRequest: http://cs/#google3/uploader/service/proto/upload_listener.proto&q=class:Hash Hex encoded hash value of the uploaded media.|
|hashVerified|boolean|false|none|For Scotty uploads only. If a user sends a hash code and the backend has requested that Scotty verify the upload against the client hash, Scotty will perform the check on behalf of the backend and will reject it if the hashes don't match. This is set to true if Scotty performed this verification.|
|inline|string(byte)|false|none|Media data, set if reference_type is INLINE|
|isPotentialRetry|boolean|false|none|\|is_potential_retry\| is set false only when Scotty is certain that it has not sent the request before. When a client resumes an upload, this field must be set true in agent calls, because Scotty cannot be certain that it has never sent the request before due to potential failure in the session state persistence.|
|length|string(int64)|false|none|Size of the data, in bytes|
|md5Hash|string(byte)|false|none|Scotty-provided MD5 hash for an upload.|
|mediaId|string(byte)|false|none|Media id to forward to the operation GetMedia. Can be set if reference_type is GET_MEDIA.|
|objectId|[GdataObjectId](#schemagdataobjectid)|false|none|Reference to a TI Blob, set if reference_type is BIGSTORE_REF.|
|path|string|false|none|Path to the data, set if reference_type is PATH|
|referenceType|string|false|none|Describes what the field reference contains.|
|sha1Hash|string(byte)|false|none|Scotty-provided SHA1 hash for an upload.|
|sha256Hash|string(byte)|false|none|Scotty-provided SHA256 hash for an upload.|
|timestamp|string(uint64)|false|none|Time at which the media data was last updated, in milliseconds since UNIX epoch|
|token|string|false|none|A unique fingerprint/version id for the media data|

#### Enumerated Values

|Property|Value|
|---|---|
|referenceType|PATH|
|referenceType|BLOB_REF|
|referenceType|INLINE|
|referenceType|GET_MEDIA|
|referenceType|COMPOSITE_MEDIA|
|referenceType|BIGSTORE_REF|
|referenceType|DIFF_VERSION_RESPONSE|
|referenceType|DIFF_CHECKSUMS_RESPONSE|
|referenceType|DIFF_DOWNLOAD_RESPONSE|
|referenceType|DIFF_UPLOAD_REQUEST|
|referenceType|DIFF_UPLOAD_RESPONSE|
|referenceType|COSMO_BINARY_REFERENCE|
|referenceType|ARBITRARY_BYTES|

<h2 id="tocS_GdataObjectId">GdataObjectId</h2>
<!-- backwards compatibility -->
<a id="schemagdataobjectid"></a>
<a id="schema_GdataObjectId"></a>
<a id="tocSgdataobjectid"></a>
<a id="tocsgdataobjectid"></a>

```json
{
  "bucketName": "string",
  "generation": "string",
  "objectName": "string"
}
```

This is a copy of the tech.blob.ObjectId proto, which could not be used directly here due to transitive closure issues with JavaScript support; see http://b/8801763.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketName|string|false|none|The name of the bucket to which this object belongs.|
|generation|string(int64)|false|none|Generation of the object. Generations are monotonically increasing across writes, allowing them to be be compared to determine which generation is newer. If this is omitted in a request, then you are requesting the live object. See http://go/bigstore-versions|
|objectName|string|false|none|The name of the object.|

<h2 id="tocS_GoogleFirebaseAppdistroV1AabInfo">GoogleFirebaseAppdistroV1AabInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappdistrov1aabinfo"></a>
<a id="schema_GoogleFirebaseAppdistroV1AabInfo"></a>
<a id="tocSgooglefirebaseappdistrov1aabinfo"></a>
<a id="tocsgooglefirebaseappdistrov1aabinfo"></a>

```json
{
  "integrationState": "AAB_INTEGRATION_STATE_UNSPECIFIED",
  "name": "string",
  "testCertificate": {
    "hashMd5": "string",
    "hashSha1": "string",
    "hashSha256": "string"
  }
}
```

Android App Bundle (AAB) information for a Firebase app.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|integrationState|string|false|none|App bundle integration state. Only valid for android apps.|
|name|string|false|none|The name of the `AabInfo` resource. Format: `projects/{project_number}/apps/{app}/aabInfo`|
|testCertificate|[GoogleFirebaseAppdistroV1TestCertificate](#schemagooglefirebaseappdistrov1testcertificate)|false|none|App bundle test certificate generated for the app. Set after the first app bundle is uploaded for this app.|

#### Enumerated Values

|Property|Value|
|---|---|
|integrationState|AAB_INTEGRATION_STATE_UNSPECIFIED|
|integrationState|INTEGRATED|
|integrationState|PLAY_ACCOUNT_NOT_LINKED|
|integrationState|NO_APP_WITH_GIVEN_BUNDLE_ID_IN_PLAY_ACCOUNT|
|integrationState|APP_NOT_PUBLISHED|
|integrationState|AAB_STATE_UNAVAILABLE|
|integrationState|PLAY_IAS_TERMS_NOT_ACCEPTED|

<h2 id="tocS_GoogleFirebaseAppdistroV1BatchAddTestersRequest">GoogleFirebaseAppdistroV1BatchAddTestersRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappdistrov1batchaddtestersrequest"></a>
<a id="schema_GoogleFirebaseAppdistroV1BatchAddTestersRequest"></a>
<a id="tocSgooglefirebaseappdistrov1batchaddtestersrequest"></a>
<a id="tocsgooglefirebaseappdistrov1batchaddtestersrequest"></a>

```json
{
  "emails": [
    "string"
  ]
}
```

The Request message for batch adding testers

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emails|[string]|false|none|Required. The email addresses of the tester resources to create. A maximum of 999 and a minimum of 1 tester can be created in a batch.|

<h2 id="tocS_GoogleFirebaseAppdistroV1BatchAddTestersResponse">GoogleFirebaseAppdistroV1BatchAddTestersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappdistrov1batchaddtestersresponse"></a>
<a id="schema_GoogleFirebaseAppdistroV1BatchAddTestersResponse"></a>
<a id="tocSgooglefirebaseappdistrov1batchaddtestersresponse"></a>
<a id="tocsgooglefirebaseappdistrov1batchaddtestersresponse"></a>

```json
{
  "testers": [
    {
      "displayName": "string",
      "groups": [
        "string"
      ],
      "lastActivityTime": "string",
      "name": "string"
    }
  ]
}
```

The Response message for `BatchAddTesters`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|testers|[[GoogleFirebaseAppdistroV1Tester](#schemagooglefirebaseappdistrov1tester)]|false|none|The testers which are created and/or already exist|

<h2 id="tocS_GoogleFirebaseAppdistroV1BatchDeleteReleasesRequest">GoogleFirebaseAppdistroV1BatchDeleteReleasesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappdistrov1batchdeletereleasesrequest"></a>
<a id="schema_GoogleFirebaseAppdistroV1BatchDeleteReleasesRequest"></a>
<a id="tocSgooglefirebaseappdistrov1batchdeletereleasesrequest"></a>
<a id="tocsgooglefirebaseappdistrov1batchdeletereleasesrequest"></a>

```json
{
  "names": [
    "string"
  ]
}
```

The request message for `BatchDeleteReleases`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|names|[string]|false|none|Required. The names of the release resources to delete. Format: `projects/{project_number}/apps/{app_id}/releases/{release_id}` A maximum of 100 releases can be deleted per request.|

<h2 id="tocS_GoogleFirebaseAppdistroV1BatchJoinGroupRequest">GoogleFirebaseAppdistroV1BatchJoinGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappdistrov1batchjoingrouprequest"></a>
<a id="schema_GoogleFirebaseAppdistroV1BatchJoinGroupRequest"></a>
<a id="tocSgooglefirebaseappdistrov1batchjoingrouprequest"></a>
<a id="tocsgooglefirebaseappdistrov1batchjoingrouprequest"></a>

```json
{
  "createMissingTesters": true,
  "emails": [
    "string"
  ]
}
```

The request message for `BatchJoinGroup`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createMissingTesters|boolean|false|none|Indicates whether to create tester resources based on `emails` if they don't exist yet.|
|emails|[string]|false|none|Required. The emails of the testers to be added to the group. A maximum of 999 and a minimum of 1 tester can be created in a batch.|

<h2 id="tocS_GoogleFirebaseAppdistroV1BatchLeaveGroupRequest">GoogleFirebaseAppdistroV1BatchLeaveGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappdistrov1batchleavegrouprequest"></a>
<a id="schema_GoogleFirebaseAppdistroV1BatchLeaveGroupRequest"></a>
<a id="tocSgooglefirebaseappdistrov1batchleavegrouprequest"></a>
<a id="tocsgooglefirebaseappdistrov1batchleavegrouprequest"></a>

```json
{
  "emails": [
    "string"
  ]
}
```

Request message for `BatchLeaveGroup`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emails|[string]|false|none|Required. The email addresses of the testers to be removed from the group. A maximum of 999 and a minimum of 1 testers can be removed in a batch.|

<h2 id="tocS_GoogleFirebaseAppdistroV1BatchRemoveTestersRequest">GoogleFirebaseAppdistroV1BatchRemoveTestersRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappdistrov1batchremovetestersrequest"></a>
<a id="schema_GoogleFirebaseAppdistroV1BatchRemoveTestersRequest"></a>
<a id="tocSgooglefirebaseappdistrov1batchremovetestersrequest"></a>
<a id="tocsgooglefirebaseappdistrov1batchremovetestersrequest"></a>

```json
{
  "emails": [
    "string"
  ]
}
```

The request message for `BatchRemoveTesters`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emails|[string]|false|none|Required. The email addresses of the tester resources to removed. A maximum of 999 and a minimum of 1 testers can be deleted in a batch.|

<h2 id="tocS_GoogleFirebaseAppdistroV1BatchRemoveTestersResponse">GoogleFirebaseAppdistroV1BatchRemoveTestersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappdistrov1batchremovetestersresponse"></a>
<a id="schema_GoogleFirebaseAppdistroV1BatchRemoveTestersResponse"></a>
<a id="tocSgooglefirebaseappdistrov1batchremovetestersresponse"></a>
<a id="tocsgooglefirebaseappdistrov1batchremovetestersresponse"></a>

```json
{
  "emails": [
    "string"
  ]
}
```

The response message for `BatchRemoveTesters`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emails|[string]|false|none|List of deleted tester emails|

<h2 id="tocS_GoogleFirebaseAppdistroV1DistributeReleaseRequest">GoogleFirebaseAppdistroV1DistributeReleaseRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappdistrov1distributereleaserequest"></a>
<a id="schema_GoogleFirebaseAppdistroV1DistributeReleaseRequest"></a>
<a id="tocSgooglefirebaseappdistrov1distributereleaserequest"></a>
<a id="tocsgooglefirebaseappdistrov1distributereleaserequest"></a>

```json
{
  "groupAliases": [
    "string"
  ],
  "testerEmails": [
    "string"
  ]
}
```

The request message for `DistributeRelease`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groupAliases|[string]|false|none|A list of group aliases (IDs) to be given access to this release. A combined maximum of 999 `testerEmails` and `groupAliases` can be specified in a single request.|
|testerEmails|[string]|false|none|A list of tester email addresses to be given access to this release. A combined maximum of 999 `testerEmails` and `groupAliases` can be specified in a single request.|

<h2 id="tocS_GoogleFirebaseAppdistroV1DistributeReleaseResponse">GoogleFirebaseAppdistroV1DistributeReleaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappdistrov1distributereleaseresponse"></a>
<a id="schema_GoogleFirebaseAppdistroV1DistributeReleaseResponse"></a>
<a id="tocSgooglefirebaseappdistrov1distributereleaseresponse"></a>
<a id="tocsgooglefirebaseappdistrov1distributereleaseresponse"></a>

```json
{}
```

The response message for `DistributeRelease`.

<h2 id="tocS_GoogleFirebaseAppdistroV1FeedbackReport">GoogleFirebaseAppdistroV1FeedbackReport</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappdistrov1feedbackreport"></a>
<a id="schema_GoogleFirebaseAppdistroV1FeedbackReport"></a>
<a id="tocSgooglefirebaseappdistrov1feedbackreport"></a>
<a id="tocsgooglefirebaseappdistrov1feedbackreport"></a>

```json
{
  "createTime": "string",
  "firebaseConsoleUri": "string",
  "name": "string",
  "screenshotUri": "string",
  "tester": "string",
  "text": "string"
}
```

A feedback report submitted by a tester for a release.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time when the feedback report was created.|
|firebaseConsoleUri|string|false|read-only|Output only. A link to the Firebase console displaying the feedback report.|
|name|string|false|none|The name of the feedback report resource. Format: `projects/{project_number}/apps/{app}/releases/{release}/feedbackReports/{feedback_report}`|
|screenshotUri|string|false|read-only|Output only. A signed link (which expires in one hour) that lets you directly download the screenshot.|
|tester|string|false|read-only|Output only. The resource name of the tester who submitted the feedback report.|
|text|string|false|read-only|Output only. The text of the feedback report.|

<h2 id="tocS_GoogleFirebaseAppdistroV1Group">GoogleFirebaseAppdistroV1Group</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappdistrov1group"></a>
<a id="schema_GoogleFirebaseAppdistroV1Group"></a>
<a id="tocSgooglefirebaseappdistrov1group"></a>
<a id="tocsgooglefirebaseappdistrov1group"></a>

```json
{
  "displayName": "string",
  "inviteLinkCount": 0,
  "name": "string",
  "releaseCount": 0,
  "testerCount": 0
}
```

A group which can contain testers. A group can be invited to test apps in a Firebase project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|Required. The display name of the group.|
|inviteLinkCount|integer(int32)|false|read-only|Output only. The number of invite links for this group.|
|name|string|false|none|The name of the group resource. Format: `projects/{project_number}/groups/{group_alias}`|
|releaseCount|integer(int32)|false|read-only|Output only. The number of releases this group is permitted to access.|
|testerCount|integer(int32)|false|read-only|Output only. The number of testers who are members of this group.|

<h2 id="tocS_GoogleFirebaseAppdistroV1ListFeedbackReportsResponse">GoogleFirebaseAppdistroV1ListFeedbackReportsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappdistrov1listfeedbackreportsresponse"></a>
<a id="schema_GoogleFirebaseAppdistroV1ListFeedbackReportsResponse"></a>
<a id="tocSgooglefirebaseappdistrov1listfeedbackreportsresponse"></a>
<a id="tocsgooglefirebaseappdistrov1listfeedbackreportsresponse"></a>

```json
{
  "feedbackReports": [
    {
      "createTime": "string",
      "firebaseConsoleUri": "string",
      "name": "string",
      "screenshotUri": "string",
      "tester": "string",
      "text": "string"
    }
  ],
  "nextPageToken": "string"
}
```

The response message for `ListFeedbackReports`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|feedbackReports|[[GoogleFirebaseAppdistroV1FeedbackReport](#schemagooglefirebaseappdistrov1feedbackreport)]|false|none|The feedback reports|
|nextPageToken|string|false|none|A short-lived token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted, there are no subsequent pages.|

<h2 id="tocS_GoogleFirebaseAppdistroV1ListGroupsResponse">GoogleFirebaseAppdistroV1ListGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappdistrov1listgroupsresponse"></a>
<a id="schema_GoogleFirebaseAppdistroV1ListGroupsResponse"></a>
<a id="tocSgooglefirebaseappdistrov1listgroupsresponse"></a>
<a id="tocsgooglefirebaseappdistrov1listgroupsresponse"></a>

```json
{
  "groups": [
    {
      "displayName": "string",
      "inviteLinkCount": 0,
      "name": "string",
      "releaseCount": 0,
      "testerCount": 0
    }
  ],
  "nextPageToken": "string"
}
```

The response message for `ListGroups`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groups|[[GoogleFirebaseAppdistroV1Group](#schemagooglefirebaseappdistrov1group)]|false|none|The groups listed.|
|nextPageToken|string|false|none|A short-lived token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted, there are no subsequent pages.|

<h2 id="tocS_GoogleFirebaseAppdistroV1ListReleasesResponse">GoogleFirebaseAppdistroV1ListReleasesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappdistrov1listreleasesresponse"></a>
<a id="schema_GoogleFirebaseAppdistroV1ListReleasesResponse"></a>
<a id="tocSgooglefirebaseappdistrov1listreleasesresponse"></a>
<a id="tocsgooglefirebaseappdistrov1listreleasesresponse"></a>

```json
{
  "nextPageToken": "string",
  "releases": [
    {
      "binaryDownloadUri": "string",
      "buildVersion": "string",
      "createTime": "string",
      "displayVersion": "string",
      "firebaseConsoleUri": "string",
      "name": "string",
      "releaseNotes": {
        "text": "string"
      },
      "testingUri": "string"
    }
  ]
}
```

The response message for `ListReleases`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A short-lived token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|releases|[[GoogleFirebaseAppdistroV1Release](#schemagooglefirebaseappdistrov1release)]|false|none|The releases|

<h2 id="tocS_GoogleFirebaseAppdistroV1ListTestersResponse">GoogleFirebaseAppdistroV1ListTestersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappdistrov1listtestersresponse"></a>
<a id="schema_GoogleFirebaseAppdistroV1ListTestersResponse"></a>
<a id="tocSgooglefirebaseappdistrov1listtestersresponse"></a>
<a id="tocsgooglefirebaseappdistrov1listtestersresponse"></a>

```json
{
  "nextPageToken": "string",
  "testers": [
    {
      "displayName": "string",
      "groups": [
        "string"
      ],
      "lastActivityTime": "string",
      "name": "string"
    }
  ]
}
```

The response message for `ListTesters`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A short-lived token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|testers|[[GoogleFirebaseAppdistroV1Tester](#schemagooglefirebaseappdistrov1tester)]|false|none|The testers listed.|

<h2 id="tocS_GoogleFirebaseAppdistroV1Release">GoogleFirebaseAppdistroV1Release</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappdistrov1release"></a>
<a id="schema_GoogleFirebaseAppdistroV1Release"></a>
<a id="tocSgooglefirebaseappdistrov1release"></a>
<a id="tocsgooglefirebaseappdistrov1release"></a>

```json
{
  "binaryDownloadUri": "string",
  "buildVersion": "string",
  "createTime": "string",
  "displayVersion": "string",
  "firebaseConsoleUri": "string",
  "name": "string",
  "releaseNotes": {
    "text": "string"
  },
  "testingUri": "string"
}
```

A release of a Firebase app.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|binaryDownloadUri|string|false|read-only|Output only. A signed link (which expires in one hour) to directly download the app binary (IPA/APK/AAB) file.|
|buildVersion|string|false|read-only|Output only. Build version of the release. For an Android release, the build version is the `versionCode`. For an iOS release, the build version is the `CFBundleVersion`.|
|createTime|string(google-datetime)|false|read-only|Output only. The time the release was created.|
|displayVersion|string|false|read-only|Output only. Display version of the release. For an Android release, the display version is the `versionName`. For an iOS release, the display version is the `CFBundleShortVersionString`.|
|firebaseConsoleUri|string|false|read-only|Output only. A link to the Firebase console displaying a single release.|
|name|string|false|none|The name of the release resource. Format: `projects/{project_number}/apps/{app_id}/releases/{release_id}`|
|releaseNotes|[GoogleFirebaseAppdistroV1ReleaseNotes](#schemagooglefirebaseappdistrov1releasenotes)|false|none|Notes of the release.|
|testingUri|string|false|read-only|Output only. A link to the release in the tester web clip or Android app that lets testers (which were granted access to the app) view release notes and install the app onto their devices.|

<h2 id="tocS_GoogleFirebaseAppdistroV1ReleaseNotes">GoogleFirebaseAppdistroV1ReleaseNotes</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappdistrov1releasenotes"></a>
<a id="schema_GoogleFirebaseAppdistroV1ReleaseNotes"></a>
<a id="tocSgooglefirebaseappdistrov1releasenotes"></a>
<a id="tocsgooglefirebaseappdistrov1releasenotes"></a>

```json
{
  "text": "string"
}
```

Notes that belong to a release.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|false|none|The text of the release notes.|

<h2 id="tocS_GoogleFirebaseAppdistroV1TestCertificate">GoogleFirebaseAppdistroV1TestCertificate</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappdistrov1testcertificate"></a>
<a id="schema_GoogleFirebaseAppdistroV1TestCertificate"></a>
<a id="tocSgooglefirebaseappdistrov1testcertificate"></a>
<a id="tocsgooglefirebaseappdistrov1testcertificate"></a>

```json
{
  "hashMd5": "string",
  "hashSha1": "string",
  "hashSha256": "string"
}
```

App bundle test certificate

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hashMd5|string|false|none|Hex string of MD5 hash of the test certificate used to resign the AAB|
|hashSha1|string|false|none|Hex string of SHA1 hash of the test certificate used to resign the AAB|
|hashSha256|string|false|none|Hex string of SHA256 hash of the test certificate used to resign the AAB|

<h2 id="tocS_GoogleFirebaseAppdistroV1Tester">GoogleFirebaseAppdistroV1Tester</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappdistrov1tester"></a>
<a id="schema_GoogleFirebaseAppdistroV1Tester"></a>
<a id="tocSgooglefirebaseappdistrov1tester"></a>
<a id="tocsgooglefirebaseappdistrov1tester"></a>

```json
{
  "displayName": "string",
  "groups": [
    "string"
  ],
  "lastActivityTime": "string",
  "name": "string"
}
```

A person that can be invited to test apps in a Firebase project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The name of the tester associated with the Google account used to accept the tester invitation.|
|groups|[string]|false|none|The resource names of the groups this tester belongs to.|
|lastActivityTime|string(google-datetime)|false|read-only|Output only. The time the tester was last active. This is the most recent time the tester installed one of the apps. If they've never installed one or if the release no longer exists, this is the time the tester was added to the project.|
|name|string|false|none|The name of the tester resource. Format: `projects/{project_number}/testers/{email_address}`|

<h2 id="tocS_GoogleFirebaseAppdistroV1UploadReleaseMetadata">GoogleFirebaseAppdistroV1UploadReleaseMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappdistrov1uploadreleasemetadata"></a>
<a id="schema_GoogleFirebaseAppdistroV1UploadReleaseMetadata"></a>
<a id="tocSgooglefirebaseappdistrov1uploadreleasemetadata"></a>
<a id="tocsgooglefirebaseappdistrov1uploadreleasemetadata"></a>

```json
{}
```

Operation metadata for `UploadRelease`.

<h2 id="tocS_GoogleFirebaseAppdistroV1UploadReleaseRequest">GoogleFirebaseAppdistroV1UploadReleaseRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappdistrov1uploadreleaserequest"></a>
<a id="schema_GoogleFirebaseAppdistroV1UploadReleaseRequest"></a>
<a id="tocSgooglefirebaseappdistrov1uploadreleaserequest"></a>
<a id="tocsgooglefirebaseappdistrov1uploadreleaserequest"></a>

```json
{
  "blob": {
    "algorithm": "string",
    "bigstoreObjectRef": "string",
    "blobRef": "string",
    "blobstore2Info": {
      "blobGeneration": "string",
      "blobId": "string",
      "downloadReadHandle": "string",
      "readToken": "string",
      "uploadMetadataContainer": "string"
    },
    "compositeMedia": [
      {
        "blobRef": "string",
        "blobstore2Info": {
          "blobGeneration": "string",
          "blobId": "string",
          "downloadReadHandle": "string",
          "readToken": "string",
          "uploadMetadataContainer": "string"
        },
        "cosmoBinaryReference": "string",
        "crc32cHash": 0,
        "inline": "string",
        "length": "string",
        "md5Hash": "string",
        "objectId": {
          "bucketName": "string",
          "generation": "string",
          "objectName": "string"
        },
        "path": "string",
        "referenceType": "PATH",
        "sha1Hash": "string"
      }
    ],
    "contentType": "string",
    "contentTypeInfo": {
      "bestGuess": "string",
      "fromBytes": "string",
      "fromFileName": "string",
      "fromHeader": "string",
      "fromUrlPath": "string"
    },
    "cosmoBinaryReference": "string",
    "crc32cHash": 0,
    "diffChecksumsResponse": {
      "checksumsLocation": {
        "blobRef": "string",
        "blobstore2Info": {
          "blobGeneration": "string",
          "blobId": "string",
          "downloadReadHandle": "string",
          "readToken": "string",
          "uploadMetadataContainer": "string"
        },
        "cosmoBinaryReference": "string",
        "crc32cHash": 0,
        "inline": "string",
        "length": "string",
        "md5Hash": "string",
        "objectId": {
          "bucketName": "string",
          "generation": "string",
          "objectName": "string"
        },
        "path": "string",
        "referenceType": "PATH",
        "sha1Hash": "string"
      },
      "chunkSizeBytes": "string",
      "objectLocation": {
        "blobRef": "string",
        "blobstore2Info": {
          "blobGeneration": "string",
          "blobId": "string",
          "downloadReadHandle": "string",
          "readToken": "string",
          "uploadMetadataContainer": "string"
        },
        "cosmoBinaryReference": "string",
        "crc32cHash": 0,
        "inline": "string",
        "length": "string",
        "md5Hash": "string",
        "objectId": {
          "bucketName": "string",
          "generation": "string",
          "objectName": "string"
        },
        "path": "string",
        "referenceType": "PATH",
        "sha1Hash": "string"
      },
      "objectSizeBytes": "string",
      "objectVersion": "string"
    },
    "diffDownloadResponse": {
      "objectLocation": {
        "blobRef": "string",
        "blobstore2Info": {
          "blobGeneration": "string",
          "blobId": "string",
          "downloadReadHandle": "string",
          "readToken": "string",
          "uploadMetadataContainer": "string"
        },
        "cosmoBinaryReference": "string",
        "crc32cHash": 0,
        "inline": "string",
        "length": "string",
        "md5Hash": "string",
        "objectId": {
          "bucketName": "string",
          "generation": "string",
          "objectName": "string"
        },
        "path": "string",
        "referenceType": "PATH",
        "sha1Hash": "string"
      }
    },
    "diffUploadRequest": {
      "checksumsInfo": {
        "blobRef": "string",
        "blobstore2Info": {
          "blobGeneration": "string",
          "blobId": "string",
          "downloadReadHandle": "string",
          "readToken": "string",
          "uploadMetadataContainer": "string"
        },
        "cosmoBinaryReference": "string",
        "crc32cHash": 0,
        "inline": "string",
        "length": "string",
        "md5Hash": "string",
        "objectId": {
          "bucketName": "string",
          "generation": "string",
          "objectName": "string"
        },
        "path": "string",
        "referenceType": "PATH",
        "sha1Hash": "string"
      },
      "objectInfo": {
        "blobRef": "string",
        "blobstore2Info": {
          "blobGeneration": "string",
          "blobId": "string",
          "downloadReadHandle": "string",
          "readToken": "string",
          "uploadMetadataContainer": "string"
        },
        "cosmoBinaryReference": "string",
        "crc32cHash": 0,
        "inline": "string",
        "length": "string",
        "md5Hash": "string",
        "objectId": {
          "bucketName": "string",
          "generation": "string",
          "objectName": "string"
        },
        "path": "string",
        "referenceType": "PATH",
        "sha1Hash": "string"
      },
      "objectVersion": "string"
    },
    "diffUploadResponse": {
      "objectVersion": "string",
      "originalObject": {
        "blobRef": "string",
        "blobstore2Info": {
          "blobGeneration": "string",
          "blobId": "string",
          "downloadReadHandle": "string",
          "readToken": "string",
          "uploadMetadataContainer": "string"
        },
        "cosmoBinaryReference": "string",
        "crc32cHash": 0,
        "inline": "string",
        "length": "string",
        "md5Hash": "string",
        "objectId": {
          "bucketName": "string",
          "generation": "string",
          "objectName": "string"
        },
        "path": "string",
        "referenceType": "PATH",
        "sha1Hash": "string"
      }
    },
    "diffVersionResponse": {
      "objectSizeBytes": "string",
      "objectVersion": "string"
    },
    "downloadParameters": {
      "allowGzipCompression": true,
      "ignoreRange": true
    },
    "filename": "string",
    "hash": "string",
    "hashVerified": true,
    "inline": "string",
    "isPotentialRetry": true,
    "length": "string",
    "md5Hash": "string",
    "mediaId": "string",
    "objectId": {
      "bucketName": "string",
      "generation": "string",
      "objectName": "string"
    },
    "path": "string",
    "referenceType": "PATH",
    "sha1Hash": "string",
    "sha256Hash": "string",
    "timestamp": "string",
    "token": "string"
  }
}
```

Request message for `UploadRelease`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blob|[GdataMedia](#schemagdatamedia)|false|none|Binary to upload|

<h2 id="tocS_GoogleFirebaseAppdistroV1UploadReleaseResponse">GoogleFirebaseAppdistroV1UploadReleaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebaseappdistrov1uploadreleaseresponse"></a>
<a id="schema_GoogleFirebaseAppdistroV1UploadReleaseResponse"></a>
<a id="tocSgooglefirebaseappdistrov1uploadreleaseresponse"></a>
<a id="tocsgooglefirebaseappdistrov1uploadreleaseresponse"></a>

```json
{
  "release": {
    "binaryDownloadUri": "string",
    "buildVersion": "string",
    "createTime": "string",
    "displayVersion": "string",
    "firebaseConsoleUri": "string",
    "name": "string",
    "releaseNotes": {
      "text": "string"
    },
    "testingUri": "string"
  },
  "result": "UPLOAD_RELEASE_RESULT_UNSPECIFIED"
}
```

Response message for `UploadRelease`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|release|[GoogleFirebaseAppdistroV1Release](#schemagooglefirebaseappdistrov1release)|false|none|Release associated with the uploaded binary.|
|result|string|false|none|Result of upload release.|

#### Enumerated Values

|Property|Value|
|---|---|
|result|UPLOAD_RELEASE_RESULT_UNSPECIFIED|
|result|RELEASE_CREATED|
|result|RELEASE_UPDATED|
|result|RELEASE_UNMODIFIED|

<h2 id="tocS_GoogleLongrunningCancelOperationRequest">GoogleLongrunningCancelOperationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglelongrunningcanceloperationrequest"></a>
<a id="schema_GoogleLongrunningCancelOperationRequest"></a>
<a id="tocSgooglelongrunningcanceloperationrequest"></a>
<a id="tocsgooglelongrunningcanceloperationrequest"></a>

```json
{}
```

The request message for Operations.CancelOperation.

<h2 id="tocS_GoogleLongrunningListOperationsResponse">GoogleLongrunningListOperationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglelongrunninglistoperationsresponse"></a>
<a id="schema_GoogleLongrunningListOperationsResponse"></a>
<a id="tocSgooglelongrunninglistoperationsresponse"></a>
<a id="tocsgooglelongrunninglistoperationsresponse"></a>

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
|operations|[[GoogleLongrunningOperation](#schemagooglelongrunningoperation)]|false|none|A list of operations that matches the specified filter in the request.|

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
|error|[GoogleRpcStatus](#schemagooglerpcstatus)|false|none|The error result of the operation in case of failure or cancellation.|
|metadata|object|false|none|Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.|
|name|string|false|none|The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.|
|response|object|false|none|The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.|

<h2 id="tocS_GoogleLongrunningWaitOperationRequest">GoogleLongrunningWaitOperationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglelongrunningwaitoperationrequest"></a>
<a id="schema_GoogleLongrunningWaitOperationRequest"></a>
<a id="tocSgooglelongrunningwaitoperationrequest"></a>
<a id="tocsgooglelongrunningwaitoperationrequest"></a>

```json
{
  "timeout": "string"
}
```

The request message for Operations.WaitOperation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timeout|string(google-duration)|false|none|The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.|

<h2 id="tocS_GoogleProtobufEmpty">GoogleProtobufEmpty</h2>
<!-- backwards compatibility -->
<a id="schemagoogleprotobufempty"></a>
<a id="schema_GoogleProtobufEmpty"></a>
<a id="tocSgoogleprotobufempty"></a>
<a id="tocsgoogleprotobufempty"></a>

```json
{}
```

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

<h2 id="tocS_GoogleRpcStatus">GoogleRpcStatus</h2>
<!-- backwards compatibility -->
<a id="schemagooglerpcstatus"></a>
<a id="schema_GoogleRpcStatus"></a>
<a id="tocSgooglerpcstatus"></a>
<a id="tocsgooglerpcstatus"></a>

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
