<h1 id="cloud-storage-json-api">Cloud Storage JSON API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Stores and retrieves potentially large, immutable data objects.

Base URLs:

* <a href="https://storage.googleapis.com/storage/v1">https://storage.googleapis.com/storage/v1</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/storage/docs/json_api/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|View and manage your data across Google Cloud Platform services|
|https://www.googleapis.com/auth/cloud-platform.read-only|View your data across Google Cloud Platform services|
|https://www.googleapis.com/auth/devstorage.full_control|Manage your data and permissions in Google Cloud Storage|
|https://www.googleapis.com/auth/devstorage.read_only|View your data in Google Cloud Storage|
|https://www.googleapis.com/auth/devstorage.read_write|Manage your data in Google Cloud Storage|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|View and manage your data across Google Cloud Platform services|
|https://www.googleapis.com/auth/cloud-platform.read-only|View your data across Google Cloud Platform services|
|https://www.googleapis.com/auth/devstorage.full_control|Manage your data and permissions in Google Cloud Storage|
|https://www.googleapis.com/auth/devstorage.read_only|View your data in Google Cloud Storage|
|https://www.googleapis.com/auth/devstorage.read_write|Manage your data in Google Cloud Storage|

<h1 id="cloud-storage-json-api-bucketaccesscontrols">bucketAccessControls</h1>

## storage.bucketAccessControls.list

<a id="opIdstorage.bucketAccessControls.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/b/string/acl \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /b/{bucket}/acl`

Retrieves ACL entries on the specified bucket.

<h3 id="storagebucketaccesscontrolslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket|path|string|true|Name of a bucket.|
|userProject|query|string|false|The project to be billed for this request. Required for Requester Pays buckets.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "bucket": "string",
      "domain": "string",
      "email": "string",
      "entity": "string",
      "entityId": "string",
      "etag": "string",
      "id": "string",
      "kind": "storage#bucketAccessControl",
      "projectTeam": {
        "projectNumber": "string",
        "team": "string"
      },
      "role": "string",
      "selfLink": "string"
    }
  ],
  "kind": "storage#bucketAccessControls"
}
```

<h3 id="storagebucketaccesscontrolslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BucketAccessControls](#schemabucketaccesscontrols)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control )
</aside>

## storage.bucketAccessControls.insert

<a id="opIdstorage.bucketAccessControls.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/b/string/acl \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "bucket": "string",
    "domain": "string",
    "email": "string",
    "entity": "string",
    "entityId": "string",
    "etag": "string",
    "id": "string",
    "kind": "storage#bucketAccessControl",
    "projectTeam": {
      "projectNumber": "string",
      "team": "string"
    },
    "role": "string",
    "selfLink": "string"
  }'
```

`POST /b/{bucket}/acl`

Creates a new ACL entry on the specified bucket.

> Body parameter

```json
{
  "bucket": "string",
  "domain": "string",
  "email": "string",
  "entity": "string",
  "entityId": "string",
  "etag": "string",
  "id": "string",
  "kind": "storage#bucketAccessControl",
  "projectTeam": {
    "projectNumber": "string",
    "team": "string"
  },
  "role": "string",
  "selfLink": "string"
}
```

<h3 id="storagebucketaccesscontrolsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket|path|string|true|Name of a bucket.|
|userProject|query|string|false|The project to be billed for this request. Required for Requester Pays buckets.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[BucketAccessControl](#schemabucketaccesscontrol)|false|none|
|» bucket|body|string|false|The name of the bucket.|
|» domain|body|string|false|The domain associated with the entity, if any.|
|» email|body|string|false|The email address associated with the entity, if any.|
|» entity|body|string|false|The entity holding the permission, in one of the following forms: <br>- user-userId <br>- user-email <br>- group-groupId <br>- group-email <br>- domain-domain <br>- project-team-projectId <br>- allUsers <br>- allAuthenticatedUsers Examples: <br>- The user liz@example.com would be user-liz@example.com. <br>- The group example@googlegroups.com would be group-example@googlegroups.com. <br>- To refer to all members of the Google Apps for Business domain example.com, the entity would be domain-example.com.|
|» entityId|body|string|false|The ID for the entity, if any.|
|» etag|body|string|false|HTTP 1.1 Entity tag for the access-control entry.|
|» id|body|string|false|The ID of the access-control entry.|
|» kind|body|string|false|The kind of item this is. For bucket access control entries, this is always storage#bucketAccessControl.|
|» projectTeam|body|object|false|The project team associated with the entity, if any.|
|» » projectNumber|body|string|false|The project number.|
|» » team|body|string|false|The team.|
|» role|body|string|false|The access permission for the entity.|
|» selfLink|body|string|false|The link to this access-control entry.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "bucket": "string",
  "domain": "string",
  "email": "string",
  "entity": "string",
  "entityId": "string",
  "etag": "string",
  "id": "string",
  "kind": "storage#bucketAccessControl",
  "projectTeam": {
    "projectNumber": "string",
    "team": "string"
  },
  "role": "string",
  "selfLink": "string"
}
```

<h3 id="storagebucketaccesscontrolsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BucketAccessControl](#schemabucketaccesscontrol)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control )
</aside>

## storage.bucketAccessControls.get

<a id="opIdstorage.bucketAccessControls.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/b/string/acl/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /b/{bucket}/acl/{entity}`

Returns the ACL entry for the specified entity on the specified bucket.

<h3 id="storagebucketaccesscontrolsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket|path|string|true|Name of a bucket.|
|entity|path|string|true|The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.|
|userProject|query|string|false|The project to be billed for this request. Required for Requester Pays buckets.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "bucket": "string",
  "domain": "string",
  "email": "string",
  "entity": "string",
  "entityId": "string",
  "etag": "string",
  "id": "string",
  "kind": "storage#bucketAccessControl",
  "projectTeam": {
    "projectNumber": "string",
    "team": "string"
  },
  "role": "string",
  "selfLink": "string"
}
```

<h3 id="storagebucketaccesscontrolsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BucketAccessControl](#schemabucketaccesscontrol)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control )
</aside>

## storage.bucketAccessControls.update

<a id="opIdstorage.bucketAccessControls.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/b/string/acl/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "bucket": "string",
    "domain": "string",
    "email": "string",
    "entity": "string",
    "entityId": "string",
    "etag": "string",
    "id": "string",
    "kind": "storage#bucketAccessControl",
    "projectTeam": {
      "projectNumber": "string",
      "team": "string"
    },
    "role": "string",
    "selfLink": "string"
  }'
```

`PUT /b/{bucket}/acl/{entity}`

Updates an ACL entry on the specified bucket.

> Body parameter

```json
{
  "bucket": "string",
  "domain": "string",
  "email": "string",
  "entity": "string",
  "entityId": "string",
  "etag": "string",
  "id": "string",
  "kind": "storage#bucketAccessControl",
  "projectTeam": {
    "projectNumber": "string",
    "team": "string"
  },
  "role": "string",
  "selfLink": "string"
}
```

<h3 id="storagebucketaccesscontrolsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket|path|string|true|Name of a bucket.|
|entity|path|string|true|The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.|
|userProject|query|string|false|The project to be billed for this request. Required for Requester Pays buckets.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[BucketAccessControl](#schemabucketaccesscontrol)|false|none|
|» bucket|body|string|false|The name of the bucket.|
|» domain|body|string|false|The domain associated with the entity, if any.|
|» email|body|string|false|The email address associated with the entity, if any.|
|» entity|body|string|false|The entity holding the permission, in one of the following forms: <br>- user-userId <br>- user-email <br>- group-groupId <br>- group-email <br>- domain-domain <br>- project-team-projectId <br>- allUsers <br>- allAuthenticatedUsers Examples: <br>- The user liz@example.com would be user-liz@example.com. <br>- The group example@googlegroups.com would be group-example@googlegroups.com. <br>- To refer to all members of the Google Apps for Business domain example.com, the entity would be domain-example.com.|
|» entityId|body|string|false|The ID for the entity, if any.|
|» etag|body|string|false|HTTP 1.1 Entity tag for the access-control entry.|
|» id|body|string|false|The ID of the access-control entry.|
|» kind|body|string|false|The kind of item this is. For bucket access control entries, this is always storage#bucketAccessControl.|
|» projectTeam|body|object|false|The project team associated with the entity, if any.|
|» » projectNumber|body|string|false|The project number.|
|» » team|body|string|false|The team.|
|» role|body|string|false|The access permission for the entity.|
|» selfLink|body|string|false|The link to this access-control entry.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "bucket": "string",
  "domain": "string",
  "email": "string",
  "entity": "string",
  "entityId": "string",
  "etag": "string",
  "id": "string",
  "kind": "storage#bucketAccessControl",
  "projectTeam": {
    "projectNumber": "string",
    "team": "string"
  },
  "role": "string",
  "selfLink": "string"
}
```

<h3 id="storagebucketaccesscontrolsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BucketAccessControl](#schemabucketaccesscontrol)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control )
</aside>

## storage.bucketAccessControls.delete

<a id="opIdstorage.bucketAccessControls.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/b/string/acl/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /b/{bucket}/acl/{entity}`

Permanently deletes the ACL entry for the specified entity on the specified bucket.

<h3 id="storagebucketaccesscontrolsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket|path|string|true|Name of a bucket.|
|entity|path|string|true|The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.|
|userProject|query|string|false|The project to be billed for this request. Required for Requester Pays buckets.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

<h3 id="storagebucketaccesscontrolsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control )
</aside>

## storage.bucketAccessControls.patch

<a id="opIdstorage.bucketAccessControls.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/b/string/acl/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "bucket": "string",
    "domain": "string",
    "email": "string",
    "entity": "string",
    "entityId": "string",
    "etag": "string",
    "id": "string",
    "kind": "storage#bucketAccessControl",
    "projectTeam": {
      "projectNumber": "string",
      "team": "string"
    },
    "role": "string",
    "selfLink": "string"
  }'
```

`PATCH /b/{bucket}/acl/{entity}`

Patches an ACL entry on the specified bucket.

> Body parameter

```json
{
  "bucket": "string",
  "domain": "string",
  "email": "string",
  "entity": "string",
  "entityId": "string",
  "etag": "string",
  "id": "string",
  "kind": "storage#bucketAccessControl",
  "projectTeam": {
    "projectNumber": "string",
    "team": "string"
  },
  "role": "string",
  "selfLink": "string"
}
```

<h3 id="storagebucketaccesscontrolspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket|path|string|true|Name of a bucket.|
|entity|path|string|true|The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.|
|userProject|query|string|false|The project to be billed for this request. Required for Requester Pays buckets.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[BucketAccessControl](#schemabucketaccesscontrol)|false|none|
|» bucket|body|string|false|The name of the bucket.|
|» domain|body|string|false|The domain associated with the entity, if any.|
|» email|body|string|false|The email address associated with the entity, if any.|
|» entity|body|string|false|The entity holding the permission, in one of the following forms: <br>- user-userId <br>- user-email <br>- group-groupId <br>- group-email <br>- domain-domain <br>- project-team-projectId <br>- allUsers <br>- allAuthenticatedUsers Examples: <br>- The user liz@example.com would be user-liz@example.com. <br>- The group example@googlegroups.com would be group-example@googlegroups.com. <br>- To refer to all members of the Google Apps for Business domain example.com, the entity would be domain-example.com.|
|» entityId|body|string|false|The ID for the entity, if any.|
|» etag|body|string|false|HTTP 1.1 Entity tag for the access-control entry.|
|» id|body|string|false|The ID of the access-control entry.|
|» kind|body|string|false|The kind of item this is. For bucket access control entries, this is always storage#bucketAccessControl.|
|» projectTeam|body|object|false|The project team associated with the entity, if any.|
|» » projectNumber|body|string|false|The project number.|
|» » team|body|string|false|The team.|
|» role|body|string|false|The access permission for the entity.|
|» selfLink|body|string|false|The link to this access-control entry.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "bucket": "string",
  "domain": "string",
  "email": "string",
  "entity": "string",
  "entityId": "string",
  "etag": "string",
  "id": "string",
  "kind": "storage#bucketAccessControl",
  "projectTeam": {
    "projectNumber": "string",
    "team": "string"
  },
  "role": "string",
  "selfLink": "string"
}
```

<h3 id="storagebucketaccesscontrolspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BucketAccessControl](#schemabucketaccesscontrol)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control )
</aside>

<h1 id="cloud-storage-json-api-buckets">buckets</h1>

## storage.buckets.list

<a id="opIdstorage.buckets.list"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/b?project=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /b`

Retrieves a list of buckets for a given project.

<h3 id="storagebucketslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|query|string|true|A valid API project identifier.|
|maxResults|query|integer|false|Maximum number of buckets to return in a single response. The service will use this parameter or 1,000 items, whichever is smaller.|
|pageToken|query|string|false|A previously-returned page token representing part of the larger set of results to view.|
|prefix|query|string|false|Filter results to buckets whose names begin with this prefix.|
|projection|query|string|false|Set of properties to return. Defaults to noAcl.|
|userProject|query|string|false|The project to be billed for this request.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|projection|full|
|projection|noAcl|
|alt|json|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "acl": [
        {
          "bucket": "string",
          "domain": "string",
          "email": "string",
          "entity": "string",
          "entityId": "string",
          "etag": "string",
          "id": "string",
          "kind": "storage#bucketAccessControl",
          "projectTeam": {
            "projectNumber": "string",
            "team": "string"
          },
          "role": "string",
          "selfLink": "string"
        }
      ],
      "autoclass": {
        "enabled": true,
        "toggleTime": "1970-01-01T00:00:00Z"
      },
      "billing": {
        "requesterPays": true
      },
      "cors": [
        {
          "maxAgeSeconds": 0,
          "method": [
            "string"
          ],
          "origin": [
            "string"
          ],
          "responseHeader": [
            "string"
          ]
        }
      ],
      "customPlacementConfig": {
        "dataLocations": [
          "string"
        ]
      },
      "defaultEventBasedHold": true,
      "defaultObjectAcl": [
        {
          "bucket": "string",
          "domain": "string",
          "email": "string",
          "entity": "string",
          "entityId": "string",
          "etag": "string",
          "generation": "string",
          "id": "string",
          "kind": "storage#objectAccessControl",
          "object": "string",
          "projectTeam": {
            "projectNumber": "string",
            "team": "string"
          },
          "role": "string",
          "selfLink": "string"
        }
      ],
      "encryption": {
        "defaultKmsKeyName": "string"
      },
      "etag": "string",
      "iamConfiguration": {
        "bucketPolicyOnly": {
          "enabled": true,
          "lockedTime": "1970-01-01T00:00:00Z"
        },
        "publicAccessPrevention": "string",
        "uniformBucketLevelAccess": {
          "enabled": true,
          "lockedTime": "1970-01-01T00:00:00Z"
        }
      },
      "id": "string",
      "kind": "storage#bucket",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "lifecycle": {
        "rule": [
          {
            "action": {
              "storageClass": "string",
              "type": "string"
            },
            "condition": {
              "age": 0,
              "createdBefore": "1970-01-01",
              "customTimeBefore": "1970-01-01",
              "daysSinceCustomTime": 0,
              "daysSinceNoncurrentTime": 0,
              "isLive": true,
              "matchesPattern": "string",
              "matchesPrefix": [
                "string"
              ],
              "matchesStorageClass": [
                "string"
              ],
              "matchesSuffix": [
                "string"
              ],
              "noncurrentTimeBefore": "1970-01-01",
              "numNewerVersions": 0
            }
          }
        ]
      },
      "location": "string",
      "locationType": "string",
      "logging": {
        "logBucket": "string",
        "logObjectPrefix": "string"
      },
      "metageneration": "string",
      "name": "string",
      "owner": {
        "entity": "string",
        "entityId": "string"
      },
      "projectNumber": "string",
      "retentionPolicy": {
        "effectiveTime": "1970-01-01T00:00:00Z",
        "isLocked": true,
        "retentionPeriod": "string"
      },
      "rpo": "string",
      "satisfiesPZS": true,
      "selfLink": "string",
      "storageClass": "string",
      "timeCreated": "1970-01-01T00:00:00Z",
      "updated": "1970-01-01T00:00:00Z",
      "versioning": {
        "enabled": true
      },
      "website": {
        "mainPageSuffix": "string",
        "notFoundPage": "string"
      }
    }
  ],
  "kind": "storage#buckets",
  "nextPageToken": "string"
}
```

<h3 id="storagebucketslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Buckets](#schemabuckets)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.read_only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.read_only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.read_write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.read_write )
</aside>

## storage.buckets.insert

<a id="opIdstorage.buckets.insert"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/b?project=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "acl": [
      {
        "bucket": "string",
        "domain": "string",
        "email": "string",
        "entity": "string",
        "entityId": "string",
        "etag": "string",
        "id": "string",
        "kind": "storage#bucketAccessControl",
        "projectTeam": {
          "projectNumber": "string",
          "team": "string"
        },
        "role": "string",
        "selfLink": "string"
      }
    ],
    "autoclass": {
      "enabled": true,
      "toggleTime": "1970-01-01T00:00:00Z"
    },
    "billing": {
      "requesterPays": true
    },
    "cors": [
      {
        "maxAgeSeconds": 0,
        "method": [
          "string"
        ],
        "origin": [
          "string"
        ],
        "responseHeader": [
          "string"
        ]
      }
    ],
    "customPlacementConfig": {
      "dataLocations": [
        "string"
      ]
    },
    "defaultEventBasedHold": true,
    "defaultObjectAcl": [
      {
        "bucket": "string",
        "domain": "string",
        "email": "string",
        "entity": "string",
        "entityId": "string",
        "etag": "string",
        "generation": "string",
        "id": "string",
        "kind": "storage#objectAccessControl",
        "object": "string",
        "projectTeam": {
          "projectNumber": "string",
          "team": "string"
        },
        "role": "string",
        "selfLink": "string"
      }
    ],
    "encryption": {
      "defaultKmsKeyName": "string"
    },
    "etag": "string",
    "iamConfiguration": {
      "bucketPolicyOnly": {
        "enabled": true,
        "lockedTime": "1970-01-01T00:00:00Z"
      },
      "publicAccessPrevention": "string",
      "uniformBucketLevelAccess": {
        "enabled": true,
        "lockedTime": "1970-01-01T00:00:00Z"
      }
    },
    "id": "string",
    "kind": "storage#bucket",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "lifecycle": {
      "rule": [
        {
          "action": {
            "storageClass": "string",
            "type": "string"
          },
          "condition": {
            "age": 0,
            "createdBefore": "1970-01-01",
            "customTimeBefore": "1970-01-01",
            "daysSinceCustomTime": 0,
            "daysSinceNoncurrentTime": 0,
            "isLive": true,
            "matchesPattern": "string",
            "matchesPrefix": [
              "string"
            ],
            "matchesStorageClass": [
              "string"
            ],
            "matchesSuffix": [
              "string"
            ],
            "noncurrentTimeBefore": "1970-01-01",
            "numNewerVersions": 0
          }
        }
      ]
    },
    "location": "string",
    "locationType": "string",
    "logging": {
      "logBucket": "string",
      "logObjectPrefix": "string"
    },
    "metageneration": "string",
    "name": "string",
    "owner": {
      "entity": "string",
      "entityId": "string"
    },
    "projectNumber": "string",
    "retentionPolicy": {
      "effectiveTime": "1970-01-01T00:00:00Z",
      "isLocked": true,
      "retentionPeriod": "string"
    },
    "rpo": "string",
    "satisfiesPZS": true,
    "selfLink": "string",
    "storageClass": "string",
    "timeCreated": "1970-01-01T00:00:00Z",
    "updated": "1970-01-01T00:00:00Z",
    "versioning": {
      "enabled": true
    },
    "website": {
      "mainPageSuffix": "string",
      "notFoundPage": "string"
    }
  }'
```

`POST /b`

Creates a new bucket.

> Body parameter

```json
{
  "acl": [
    {
      "bucket": "string",
      "domain": "string",
      "email": "string",
      "entity": "string",
      "entityId": "string",
      "etag": "string",
      "id": "string",
      "kind": "storage#bucketAccessControl",
      "projectTeam": {
        "projectNumber": "string",
        "team": "string"
      },
      "role": "string",
      "selfLink": "string"
    }
  ],
  "autoclass": {
    "enabled": true,
    "toggleTime": "1970-01-01T00:00:00Z"
  },
  "billing": {
    "requesterPays": true
  },
  "cors": [
    {
      "maxAgeSeconds": 0,
      "method": [
        "string"
      ],
      "origin": [
        "string"
      ],
      "responseHeader": [
        "string"
      ]
    }
  ],
  "customPlacementConfig": {
    "dataLocations": [
      "string"
    ]
  },
  "defaultEventBasedHold": true,
  "defaultObjectAcl": [
    {
      "bucket": "string",
      "domain": "string",
      "email": "string",
      "entity": "string",
      "entityId": "string",
      "etag": "string",
      "generation": "string",
      "id": "string",
      "kind": "storage#objectAccessControl",
      "object": "string",
      "projectTeam": {
        "projectNumber": "string",
        "team": "string"
      },
      "role": "string",
      "selfLink": "string"
    }
  ],
  "encryption": {
    "defaultKmsKeyName": "string"
  },
  "etag": "string",
  "iamConfiguration": {
    "bucketPolicyOnly": {
      "enabled": true,
      "lockedTime": "1970-01-01T00:00:00Z"
    },
    "publicAccessPrevention": "string",
    "uniformBucketLevelAccess": {
      "enabled": true,
      "lockedTime": "1970-01-01T00:00:00Z"
    }
  },
  "id": "string",
  "kind": "storage#bucket",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "lifecycle": {
    "rule": [
      {
        "action": {
          "storageClass": "string",
          "type": "string"
        },
        "condition": {
          "age": 0,
          "createdBefore": "1970-01-01",
          "customTimeBefore": "1970-01-01",
          "daysSinceCustomTime": 0,
          "daysSinceNoncurrentTime": 0,
          "isLive": true,
          "matchesPattern": "string",
          "matchesPrefix": [
            "string"
          ],
          "matchesStorageClass": [
            "string"
          ],
          "matchesSuffix": [
            "string"
          ],
          "noncurrentTimeBefore": "1970-01-01",
          "numNewerVersions": 0
        }
      }
    ]
  },
  "location": "string",
  "locationType": "string",
  "logging": {
    "logBucket": "string",
    "logObjectPrefix": "string"
  },
  "metageneration": "string",
  "name": "string",
  "owner": {
    "entity": "string",
    "entityId": "string"
  },
  "projectNumber": "string",
  "retentionPolicy": {
    "effectiveTime": "1970-01-01T00:00:00Z",
    "isLocked": true,
    "retentionPeriod": "string"
  },
  "rpo": "string",
  "satisfiesPZS": true,
  "selfLink": "string",
  "storageClass": "string",
  "timeCreated": "1970-01-01T00:00:00Z",
  "updated": "1970-01-01T00:00:00Z",
  "versioning": {
    "enabled": true
  },
  "website": {
    "mainPageSuffix": "string",
    "notFoundPage": "string"
  }
}
```

<h3 id="storagebucketsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|query|string|true|A valid API project identifier.|
|predefinedAcl|query|string|false|Apply a predefined set of access controls to this bucket.|
|predefinedDefaultObjectAcl|query|string|false|Apply a predefined set of default object access controls to this bucket.|
|projection|query|string|false|Set of properties to return. Defaults to noAcl, unless the bucket resource specifies acl or defaultObjectAcl properties, when it defaults to full.|
|userProject|query|string|false|The project to be billed for this request.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Bucket](#schemabucket)|false|none|
|» acl|body|[[BucketAccessControl](#schemabucketaccesscontrol)]|false|Access controls on the bucket.|
|» autoclass|body|object|false|The bucket's Autoclass configuration.|
|» » enabled|body|boolean|false|Whether or not Autoclass is enabled on this bucket|
|» » toggleTime|body|string(date-time)|false|A date and time in RFC 3339 format representing the instant at which "enabled" was last toggled.|
|» billing|body|object|false|The bucket's billing configuration.|
|» » requesterPays|body|boolean|false|When set to true, Requester Pays is enabled for this bucket.|
|» cors|body|[object]|false|The bucket's Cross-Origin Resource Sharing (CORS) configuration.|
|» » maxAgeSeconds|body|integer(int32)|false|The value, in seconds, to return in the  Access-Control-Max-Age header used in preflight responses.|
|» » method|body|[string]|false|The list of HTTP methods on which to include CORS response headers, (GET, OPTIONS, POST, etc) Note: "*" is permitted in the list of methods, and means "any method".|
|» » origin|body|[string]|false|The list of Origins eligible to receive CORS response headers. Note: "*" is permitted in the list of origins, and means "any Origin".|
|» » responseHeader|body|[string]|false|The list of HTTP headers other than the simple response headers to give permission for the user-agent to share across domains.|
|» customPlacementConfig|body|object|false|The bucket's custom placement configuration for Custom Dual Regions.|
|» » dataLocations|body|[string]|false|The list of regional locations in which data is placed.|
|» defaultEventBasedHold|body|boolean|false|The default value for event-based hold on newly created objects in this bucket. Event-based hold is a way to retain objects indefinitely until an event occurs, signified by the hold's release. After being released, such objects will be subject to bucket-level retention (if any). One sample use case of this flag is for banks to hold loan documents for at least 3 years after loan is paid in full. Here, bucket-level retention is 3 years and the event is loan being paid in full. In this example, these objects will be held intact for any number of years until the event has occurred (event-based hold on the object is released) and then 3 more years after that. That means retention duration of the objects begins from the moment event-based hold transitioned from true to false. Objects under event-based hold cannot be deleted, overwritten or archived until the hold is removed.|
|» defaultObjectAcl|body|[[ObjectAccessControl](#schemaobjectaccesscontrol)]|false|Default access controls to apply to new objects when no ACL is provided.|
|» encryption|body|object|false|Encryption configuration for a bucket.|
|» » defaultKmsKeyName|body|string|false|A Cloud KMS key that will be used to encrypt objects inserted into this bucket, if no encryption method is specified.|
|» etag|body|string|false|HTTP 1.1 Entity tag for the bucket.|
|» iamConfiguration|body|object|false|The bucket's IAM configuration.|
|» » bucketPolicyOnly|body|object|false|The bucket's uniform bucket-level access configuration. The feature was formerly known as Bucket Policy Only. For backward compatibility, this field will be populated with identical information as the uniformBucketLevelAccess field. We recommend using the uniformBucketLevelAccess field to enable and disable the feature.|
|» » » enabled|body|boolean|false|If set, access is controlled only by bucket-level or above IAM policies.|
|» » » lockedTime|body|string(date-time)|false|The deadline for changing iamConfiguration.bucketPolicyOnly.enabled from true to false in RFC 3339 format. iamConfiguration.bucketPolicyOnly.enabled may be changed from true to false until the locked time, after which the field is immutable.|
|» » publicAccessPrevention|body|string|false|The bucket's Public Access Prevention configuration. Currently, 'inherited' and 'enforced' are supported.|
|» » uniformBucketLevelAccess|body|object|false|The bucket's uniform bucket-level access configuration.|
|» » » enabled|body|boolean|false|If set, access is controlled only by bucket-level or above IAM policies.|
|» » » lockedTime|body|string(date-time)|false|The deadline for changing iamConfiguration.uniformBucketLevelAccess.enabled from true to false in RFC 3339  format. iamConfiguration.uniformBucketLevelAccess.enabled may be changed from true to false until the locked time, after which the field is immutable.|
|» id|body|string|false|The ID of the bucket. For buckets, the id and name properties are the same.|
|» kind|body|string|false|The kind of item this is. For buckets, this is always storage#bucket.|
|» labels|body|object|false|User-provided labels, in key/value pairs.|
|» » **additionalProperties**|body|string|false|An individual label entry.|
|» lifecycle|body|object|false|The bucket's lifecycle configuration. See lifecycle management for more information.|
|» » rule|body|[object]|false|A lifecycle management rule, which is made of an action to take and the condition(s) under which the action will be taken.|
|» » » action|body|object|false|The action to take.|
|» » » » storageClass|body|string|false|Target storage class. Required iff the type of the action is SetStorageClass.|
|» » » » type|body|string|false|Type of the action. Currently, only Delete, SetStorageClass, and AbortIncompleteMultipartUpload are supported.|
|» » » condition|body|object|false|The condition(s) under which the action will be taken.|
|» » » » age|body|integer(int32)|false|Age of an object (in days). This condition is satisfied when an object reaches the specified age.|
|» » » » createdBefore|body|string(date)|false|A date in RFC 3339 format with only the date part (for instance, "2013-01-15"). This condition is satisfied when an object is created before midnight of the specified date in UTC.|
|» » » » customTimeBefore|body|string(date)|false|A date in RFC 3339 format with only the date part (for instance, "2013-01-15"). This condition is satisfied when the custom time on an object is before this date in UTC.|
|» » » » daysSinceCustomTime|body|integer(int32)|false|Number of days elapsed since the user-specified timestamp set on an object. The condition is satisfied if the days elapsed is at least this number. If no custom timestamp is specified on an object, the condition does not apply.|
|» » » » daysSinceNoncurrentTime|body|integer(int32)|false|Number of days elapsed since the noncurrent timestamp of an object. The condition is satisfied if the days elapsed is at least this number. This condition is relevant only for versioned objects. The value of the field must be a nonnegative integer. If it's zero, the object version will become eligible for Lifecycle action as soon as it becomes noncurrent.|
|» » » » isLive|body|boolean|false|Relevant only for versioned objects. If the value is true, this condition matches live objects; if the value is false, it matches archived objects.|
|» » » » matchesPattern|body|string|false|A regular expression that satisfies the RE2 syntax. This condition is satisfied when the name of the object matches the RE2 pattern. Note: This feature is currently in the "Early Access" launch stage and is only available to a whitelisted set of users; that means that this feature may be changed in backward-incompatible ways and that it is not guaranteed to be released.|
|» » » » matchesPrefix|body|[string]|false|List of object name prefixes. This condition will be satisfied when at least one of the prefixes exactly matches the beginning of the object name.|
|» » » » matchesStorageClass|body|[string]|false|Objects having any of the storage classes specified by this condition will be matched. Values include MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE, STANDARD, and DURABLE_REDUCED_AVAILABILITY.|
|» » » » matchesSuffix|body|[string]|false|List of object name suffixes. This condition will be satisfied when at least one of the suffixes exactly matches the end of the object name.|
|» » » » noncurrentTimeBefore|body|string(date)|false|A date in RFC 3339 format with only the date part (for instance, "2013-01-15"). This condition is satisfied when the noncurrent time on an object is before this date in UTC. This condition is relevant only for versioned objects.|
|» » » » numNewerVersions|body|integer(int32)|false|Relevant only for versioned objects. If the value is N, this condition is satisfied when there are at least N versions (including the live version) newer than this version of the object.|
|» location|body|string|false|The location of the bucket. Object data for objects in the bucket resides in physical storage within this region. Defaults to US. See the developer's guide for the authoritative list.|
|» locationType|body|string|false|The type of the bucket location.|
|» logging|body|object|false|The bucket's logging configuration, which defines the destination bucket and optional name prefix for the current bucket's logs.|
|» » logBucket|body|string|false|The destination bucket where the current bucket's logs should be placed.|
|» » logObjectPrefix|body|string|false|A prefix for log object names.|
|» metageneration|body|string(int64)|false|The metadata generation of this bucket.|
|» name|body|string|false|The name of the bucket.|
|» owner|body|object|false|The owner of the bucket. This is always the project team's owner group.|
|» » entity|body|string|false|The entity, in the form project-owner-projectId.|
|» » entityId|body|string|false|The ID for the entity.|
|» projectNumber|body|string(uint64)|false|The project number of the project the bucket belongs to.|
|» retentionPolicy|body|object|false|The bucket's retention policy. The retention policy enforces a minimum retention time for all objects contained in the bucket, based on their creation time. Any attempt to overwrite or delete objects younger than the retention period will result in a PERMISSION_DENIED error. An unlocked retention policy can be modified or removed from the bucket via a storage.buckets.update operation. A locked retention policy cannot be removed or shortened in duration for the lifetime of the bucket. Attempting to remove or decrease period of a locked retention policy will result in a PERMISSION_DENIED error.|
|» » effectiveTime|body|string(date-time)|false|Server-determined value that indicates the time from which policy was enforced and effective. This value is in RFC 3339 format.|
|» » isLocked|body|boolean|false|Once locked, an object retention policy cannot be modified.|
|» » retentionPeriod|body|string(int64)|false|The duration in seconds that objects need to be retained. Retention duration must be greater than zero and less than 100 years. Note that enforcement of retention periods less than a day is not guaranteed. Such periods should only be used for testing purposes.|
|» rpo|body|string|false|The Recovery Point Objective (RPO) of this bucket. Set to ASYNC_TURBO to turn on Turbo Replication on a bucket.|
|» satisfiesPZS|body|boolean|false|Reserved for future use.|
|» selfLink|body|string|false|The URI of this bucket.|
|» storageClass|body|string|false|The bucket's default storage class, used whenever no storageClass is specified for a newly-created object. This defines how objects in the bucket are stored and determines the SLA and the cost of storage. Values include MULTI_REGIONAL, REGIONAL, STANDARD, NEARLINE, COLDLINE, ARCHIVE, and DURABLE_REDUCED_AVAILABILITY. If this value is not specified when the bucket is created, it will default to STANDARD. For more information, see storage classes.|
|» timeCreated|body|string(date-time)|false|The creation time of the bucket in RFC 3339 format.|
|» updated|body|string(date-time)|false|The modification time of the bucket in RFC 3339 format.|
|» versioning|body|object|false|The bucket's versioning configuration.|
|» » enabled|body|boolean|false|While set to true, versioning is fully enabled for this bucket.|
|» website|body|object|false|The bucket's website configuration, controlling how the service behaves when accessing bucket contents as a web site. See the Static Website Examples for more information.|
|» » mainPageSuffix|body|string|false|If the requested object path is missing, the service will ensure the path has a trailing '/', append this suffix, and attempt to retrieve the resulting object. This allows the creation of index.html objects to represent directory pages.|
|» » notFoundPage|body|string|false|If the requested object path is missing, and any mainPageSuffix object is missing, if applicable, the service will return the named object from this bucket as the content for a 404 Not Found result.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|predefinedAcl|authenticatedRead|
|predefinedAcl|private|
|predefinedAcl|projectPrivate|
|predefinedAcl|publicRead|
|predefinedAcl|publicReadWrite|
|predefinedDefaultObjectAcl|authenticatedRead|
|predefinedDefaultObjectAcl|bucketOwnerFullControl|
|predefinedDefaultObjectAcl|bucketOwnerRead|
|predefinedDefaultObjectAcl|private|
|predefinedDefaultObjectAcl|projectPrivate|
|predefinedDefaultObjectAcl|publicRead|
|projection|full|
|projection|noAcl|
|alt|json|

> Example responses

> 200 Response

```json
{
  "acl": [
    {
      "bucket": "string",
      "domain": "string",
      "email": "string",
      "entity": "string",
      "entityId": "string",
      "etag": "string",
      "id": "string",
      "kind": "storage#bucketAccessControl",
      "projectTeam": {
        "projectNumber": "string",
        "team": "string"
      },
      "role": "string",
      "selfLink": "string"
    }
  ],
  "autoclass": {
    "enabled": true,
    "toggleTime": "1970-01-01T00:00:00Z"
  },
  "billing": {
    "requesterPays": true
  },
  "cors": [
    {
      "maxAgeSeconds": 0,
      "method": [
        "string"
      ],
      "origin": [
        "string"
      ],
      "responseHeader": [
        "string"
      ]
    }
  ],
  "customPlacementConfig": {
    "dataLocations": [
      "string"
    ]
  },
  "defaultEventBasedHold": true,
  "defaultObjectAcl": [
    {
      "bucket": "string",
      "domain": "string",
      "email": "string",
      "entity": "string",
      "entityId": "string",
      "etag": "string",
      "generation": "string",
      "id": "string",
      "kind": "storage#objectAccessControl",
      "object": "string",
      "projectTeam": {
        "projectNumber": "string",
        "team": "string"
      },
      "role": "string",
      "selfLink": "string"
    }
  ],
  "encryption": {
    "defaultKmsKeyName": "string"
  },
  "etag": "string",
  "iamConfiguration": {
    "bucketPolicyOnly": {
      "enabled": true,
      "lockedTime": "1970-01-01T00:00:00Z"
    },
    "publicAccessPrevention": "string",
    "uniformBucketLevelAccess": {
      "enabled": true,
      "lockedTime": "1970-01-01T00:00:00Z"
    }
  },
  "id": "string",
  "kind": "storage#bucket",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "lifecycle": {
    "rule": [
      {
        "action": {
          "storageClass": "string",
          "type": "string"
        },
        "condition": {
          "age": 0,
          "createdBefore": "1970-01-01",
          "customTimeBefore": "1970-01-01",
          "daysSinceCustomTime": 0,
          "daysSinceNoncurrentTime": 0,
          "isLive": true,
          "matchesPattern": "string",
          "matchesPrefix": [
            "string"
          ],
          "matchesStorageClass": [
            "string"
          ],
          "matchesSuffix": [
            "string"
          ],
          "noncurrentTimeBefore": "1970-01-01",
          "numNewerVersions": 0
        }
      }
    ]
  },
  "location": "string",
  "locationType": "string",
  "logging": {
    "logBucket": "string",
    "logObjectPrefix": "string"
  },
  "metageneration": "string",
  "name": "string",
  "owner": {
    "entity": "string",
    "entityId": "string"
  },
  "projectNumber": "string",
  "retentionPolicy": {
    "effectiveTime": "1970-01-01T00:00:00Z",
    "isLocked": true,
    "retentionPeriod": "string"
  },
  "rpo": "string",
  "satisfiesPZS": true,
  "selfLink": "string",
  "storageClass": "string",
  "timeCreated": "1970-01-01T00:00:00Z",
  "updated": "1970-01-01T00:00:00Z",
  "versioning": {
    "enabled": true
  },
  "website": {
    "mainPageSuffix": "string",
    "notFoundPage": "string"
  }
}
```

<h3 id="storagebucketsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Bucket](#schemabucket)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.read_write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.read_write )
</aside>

## storage.buckets.get

<a id="opIdstorage.buckets.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/b/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /b/{bucket}`

Returns metadata for the specified bucket.

<h3 id="storagebucketsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket|path|string|true|Name of a bucket.|
|ifMetagenerationMatch|query|string|false|Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.|
|ifMetagenerationNotMatch|query|string|false|Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.|
|projection|query|string|false|Set of properties to return. Defaults to noAcl.|
|userProject|query|string|false|The project to be billed for this request. Required for Requester Pays buckets.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|projection|full|
|projection|noAcl|
|alt|json|

> Example responses

> 200 Response

```json
{
  "acl": [
    {
      "bucket": "string",
      "domain": "string",
      "email": "string",
      "entity": "string",
      "entityId": "string",
      "etag": "string",
      "id": "string",
      "kind": "storage#bucketAccessControl",
      "projectTeam": {
        "projectNumber": "string",
        "team": "string"
      },
      "role": "string",
      "selfLink": "string"
    }
  ],
  "autoclass": {
    "enabled": true,
    "toggleTime": "1970-01-01T00:00:00Z"
  },
  "billing": {
    "requesterPays": true
  },
  "cors": [
    {
      "maxAgeSeconds": 0,
      "method": [
        "string"
      ],
      "origin": [
        "string"
      ],
      "responseHeader": [
        "string"
      ]
    }
  ],
  "customPlacementConfig": {
    "dataLocations": [
      "string"
    ]
  },
  "defaultEventBasedHold": true,
  "defaultObjectAcl": [
    {
      "bucket": "string",
      "domain": "string",
      "email": "string",
      "entity": "string",
      "entityId": "string",
      "etag": "string",
      "generation": "string",
      "id": "string",
      "kind": "storage#objectAccessControl",
      "object": "string",
      "projectTeam": {
        "projectNumber": "string",
        "team": "string"
      },
      "role": "string",
      "selfLink": "string"
    }
  ],
  "encryption": {
    "defaultKmsKeyName": "string"
  },
  "etag": "string",
  "iamConfiguration": {
    "bucketPolicyOnly": {
      "enabled": true,
      "lockedTime": "1970-01-01T00:00:00Z"
    },
    "publicAccessPrevention": "string",
    "uniformBucketLevelAccess": {
      "enabled": true,
      "lockedTime": "1970-01-01T00:00:00Z"
    }
  },
  "id": "string",
  "kind": "storage#bucket",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "lifecycle": {
    "rule": [
      {
        "action": {
          "storageClass": "string",
          "type": "string"
        },
        "condition": {
          "age": 0,
          "createdBefore": "1970-01-01",
          "customTimeBefore": "1970-01-01",
          "daysSinceCustomTime": 0,
          "daysSinceNoncurrentTime": 0,
          "isLive": true,
          "matchesPattern": "string",
          "matchesPrefix": [
            "string"
          ],
          "matchesStorageClass": [
            "string"
          ],
          "matchesSuffix": [
            "string"
          ],
          "noncurrentTimeBefore": "1970-01-01",
          "numNewerVersions": 0
        }
      }
    ]
  },
  "location": "string",
  "locationType": "string",
  "logging": {
    "logBucket": "string",
    "logObjectPrefix": "string"
  },
  "metageneration": "string",
  "name": "string",
  "owner": {
    "entity": "string",
    "entityId": "string"
  },
  "projectNumber": "string",
  "retentionPolicy": {
    "effectiveTime": "1970-01-01T00:00:00Z",
    "isLocked": true,
    "retentionPeriod": "string"
  },
  "rpo": "string",
  "satisfiesPZS": true,
  "selfLink": "string",
  "storageClass": "string",
  "timeCreated": "1970-01-01T00:00:00Z",
  "updated": "1970-01-01T00:00:00Z",
  "versioning": {
    "enabled": true
  },
  "website": {
    "mainPageSuffix": "string",
    "notFoundPage": "string"
  }
}
```

<h3 id="storagebucketsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Bucket](#schemabucket)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.read_only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.read_only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.read_write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.read_write )
</aside>

## storage.buckets.update

<a id="opIdstorage.buckets.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/b/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "acl": [
      {
        "bucket": "string",
        "domain": "string",
        "email": "string",
        "entity": "string",
        "entityId": "string",
        "etag": "string",
        "id": "string",
        "kind": "storage#bucketAccessControl",
        "projectTeam": {
          "projectNumber": "string",
          "team": "string"
        },
        "role": "string",
        "selfLink": "string"
      }
    ],
    "autoclass": {
      "enabled": true,
      "toggleTime": "1970-01-01T00:00:00Z"
    },
    "billing": {
      "requesterPays": true
    },
    "cors": [
      {
        "maxAgeSeconds": 0,
        "method": [
          "string"
        ],
        "origin": [
          "string"
        ],
        "responseHeader": [
          "string"
        ]
      }
    ],
    "customPlacementConfig": {
      "dataLocations": [
        "string"
      ]
    },
    "defaultEventBasedHold": true,
    "defaultObjectAcl": [
      {
        "bucket": "string",
        "domain": "string",
        "email": "string",
        "entity": "string",
        "entityId": "string",
        "etag": "string",
        "generation": "string",
        "id": "string",
        "kind": "storage#objectAccessControl",
        "object": "string",
        "projectTeam": {
          "projectNumber": "string",
          "team": "string"
        },
        "role": "string",
        "selfLink": "string"
      }
    ],
    "encryption": {
      "defaultKmsKeyName": "string"
    },
    "etag": "string",
    "iamConfiguration": {
      "bucketPolicyOnly": {
        "enabled": true,
        "lockedTime": "1970-01-01T00:00:00Z"
      },
      "publicAccessPrevention": "string",
      "uniformBucketLevelAccess": {
        "enabled": true,
        "lockedTime": "1970-01-01T00:00:00Z"
      }
    },
    "id": "string",
    "kind": "storage#bucket",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "lifecycle": {
      "rule": [
        {
          "action": {
            "storageClass": "string",
            "type": "string"
          },
          "condition": {
            "age": 0,
            "createdBefore": "1970-01-01",
            "customTimeBefore": "1970-01-01",
            "daysSinceCustomTime": 0,
            "daysSinceNoncurrentTime": 0,
            "isLive": true,
            "matchesPattern": "string",
            "matchesPrefix": [
              "string"
            ],
            "matchesStorageClass": [
              "string"
            ],
            "matchesSuffix": [
              "string"
            ],
            "noncurrentTimeBefore": "1970-01-01",
            "numNewerVersions": 0
          }
        }
      ]
    },
    "location": "string",
    "locationType": "string",
    "logging": {
      "logBucket": "string",
      "logObjectPrefix": "string"
    },
    "metageneration": "string",
    "name": "string",
    "owner": {
      "entity": "string",
      "entityId": "string"
    },
    "projectNumber": "string",
    "retentionPolicy": {
      "effectiveTime": "1970-01-01T00:00:00Z",
      "isLocked": true,
      "retentionPeriod": "string"
    },
    "rpo": "string",
    "satisfiesPZS": true,
    "selfLink": "string",
    "storageClass": "string",
    "timeCreated": "1970-01-01T00:00:00Z",
    "updated": "1970-01-01T00:00:00Z",
    "versioning": {
      "enabled": true
    },
    "website": {
      "mainPageSuffix": "string",
      "notFoundPage": "string"
    }
  }'
```

`PUT /b/{bucket}`

Updates a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.

> Body parameter

```json
{
  "acl": [
    {
      "bucket": "string",
      "domain": "string",
      "email": "string",
      "entity": "string",
      "entityId": "string",
      "etag": "string",
      "id": "string",
      "kind": "storage#bucketAccessControl",
      "projectTeam": {
        "projectNumber": "string",
        "team": "string"
      },
      "role": "string",
      "selfLink": "string"
    }
  ],
  "autoclass": {
    "enabled": true,
    "toggleTime": "1970-01-01T00:00:00Z"
  },
  "billing": {
    "requesterPays": true
  },
  "cors": [
    {
      "maxAgeSeconds": 0,
      "method": [
        "string"
      ],
      "origin": [
        "string"
      ],
      "responseHeader": [
        "string"
      ]
    }
  ],
  "customPlacementConfig": {
    "dataLocations": [
      "string"
    ]
  },
  "defaultEventBasedHold": true,
  "defaultObjectAcl": [
    {
      "bucket": "string",
      "domain": "string",
      "email": "string",
      "entity": "string",
      "entityId": "string",
      "etag": "string",
      "generation": "string",
      "id": "string",
      "kind": "storage#objectAccessControl",
      "object": "string",
      "projectTeam": {
        "projectNumber": "string",
        "team": "string"
      },
      "role": "string",
      "selfLink": "string"
    }
  ],
  "encryption": {
    "defaultKmsKeyName": "string"
  },
  "etag": "string",
  "iamConfiguration": {
    "bucketPolicyOnly": {
      "enabled": true,
      "lockedTime": "1970-01-01T00:00:00Z"
    },
    "publicAccessPrevention": "string",
    "uniformBucketLevelAccess": {
      "enabled": true,
      "lockedTime": "1970-01-01T00:00:00Z"
    }
  },
  "id": "string",
  "kind": "storage#bucket",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "lifecycle": {
    "rule": [
      {
        "action": {
          "storageClass": "string",
          "type": "string"
        },
        "condition": {
          "age": 0,
          "createdBefore": "1970-01-01",
          "customTimeBefore": "1970-01-01",
          "daysSinceCustomTime": 0,
          "daysSinceNoncurrentTime": 0,
          "isLive": true,
          "matchesPattern": "string",
          "matchesPrefix": [
            "string"
          ],
          "matchesStorageClass": [
            "string"
          ],
          "matchesSuffix": [
            "string"
          ],
          "noncurrentTimeBefore": "1970-01-01",
          "numNewerVersions": 0
        }
      }
    ]
  },
  "location": "string",
  "locationType": "string",
  "logging": {
    "logBucket": "string",
    "logObjectPrefix": "string"
  },
  "metageneration": "string",
  "name": "string",
  "owner": {
    "entity": "string",
    "entityId": "string"
  },
  "projectNumber": "string",
  "retentionPolicy": {
    "effectiveTime": "1970-01-01T00:00:00Z",
    "isLocked": true,
    "retentionPeriod": "string"
  },
  "rpo": "string",
  "satisfiesPZS": true,
  "selfLink": "string",
  "storageClass": "string",
  "timeCreated": "1970-01-01T00:00:00Z",
  "updated": "1970-01-01T00:00:00Z",
  "versioning": {
    "enabled": true
  },
  "website": {
    "mainPageSuffix": "string",
    "notFoundPage": "string"
  }
}
```

<h3 id="storagebucketsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket|path|string|true|Name of a bucket.|
|ifMetagenerationMatch|query|string|false|Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.|
|ifMetagenerationNotMatch|query|string|false|Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.|
|predefinedAcl|query|string|false|Apply a predefined set of access controls to this bucket.|
|predefinedDefaultObjectAcl|query|string|false|Apply a predefined set of default object access controls to this bucket.|
|projection|query|string|false|Set of properties to return. Defaults to full.|
|userProject|query|string|false|The project to be billed for this request. Required for Requester Pays buckets.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Bucket](#schemabucket)|false|none|
|» acl|body|[[BucketAccessControl](#schemabucketaccesscontrol)]|false|Access controls on the bucket.|
|» autoclass|body|object|false|The bucket's Autoclass configuration.|
|» » enabled|body|boolean|false|Whether or not Autoclass is enabled on this bucket|
|» » toggleTime|body|string(date-time)|false|A date and time in RFC 3339 format representing the instant at which "enabled" was last toggled.|
|» billing|body|object|false|The bucket's billing configuration.|
|» » requesterPays|body|boolean|false|When set to true, Requester Pays is enabled for this bucket.|
|» cors|body|[object]|false|The bucket's Cross-Origin Resource Sharing (CORS) configuration.|
|» » maxAgeSeconds|body|integer(int32)|false|The value, in seconds, to return in the  Access-Control-Max-Age header used in preflight responses.|
|» » method|body|[string]|false|The list of HTTP methods on which to include CORS response headers, (GET, OPTIONS, POST, etc) Note: "*" is permitted in the list of methods, and means "any method".|
|» » origin|body|[string]|false|The list of Origins eligible to receive CORS response headers. Note: "*" is permitted in the list of origins, and means "any Origin".|
|» » responseHeader|body|[string]|false|The list of HTTP headers other than the simple response headers to give permission for the user-agent to share across domains.|
|» customPlacementConfig|body|object|false|The bucket's custom placement configuration for Custom Dual Regions.|
|» » dataLocations|body|[string]|false|The list of regional locations in which data is placed.|
|» defaultEventBasedHold|body|boolean|false|The default value for event-based hold on newly created objects in this bucket. Event-based hold is a way to retain objects indefinitely until an event occurs, signified by the hold's release. After being released, such objects will be subject to bucket-level retention (if any). One sample use case of this flag is for banks to hold loan documents for at least 3 years after loan is paid in full. Here, bucket-level retention is 3 years and the event is loan being paid in full. In this example, these objects will be held intact for any number of years until the event has occurred (event-based hold on the object is released) and then 3 more years after that. That means retention duration of the objects begins from the moment event-based hold transitioned from true to false. Objects under event-based hold cannot be deleted, overwritten or archived until the hold is removed.|
|» defaultObjectAcl|body|[[ObjectAccessControl](#schemaobjectaccesscontrol)]|false|Default access controls to apply to new objects when no ACL is provided.|
|» encryption|body|object|false|Encryption configuration for a bucket.|
|» » defaultKmsKeyName|body|string|false|A Cloud KMS key that will be used to encrypt objects inserted into this bucket, if no encryption method is specified.|
|» etag|body|string|false|HTTP 1.1 Entity tag for the bucket.|
|» iamConfiguration|body|object|false|The bucket's IAM configuration.|
|» » bucketPolicyOnly|body|object|false|The bucket's uniform bucket-level access configuration. The feature was formerly known as Bucket Policy Only. For backward compatibility, this field will be populated with identical information as the uniformBucketLevelAccess field. We recommend using the uniformBucketLevelAccess field to enable and disable the feature.|
|» » » enabled|body|boolean|false|If set, access is controlled only by bucket-level or above IAM policies.|
|» » » lockedTime|body|string(date-time)|false|The deadline for changing iamConfiguration.bucketPolicyOnly.enabled from true to false in RFC 3339 format. iamConfiguration.bucketPolicyOnly.enabled may be changed from true to false until the locked time, after which the field is immutable.|
|» » publicAccessPrevention|body|string|false|The bucket's Public Access Prevention configuration. Currently, 'inherited' and 'enforced' are supported.|
|» » uniformBucketLevelAccess|body|object|false|The bucket's uniform bucket-level access configuration.|
|» » » enabled|body|boolean|false|If set, access is controlled only by bucket-level or above IAM policies.|
|» » » lockedTime|body|string(date-time)|false|The deadline for changing iamConfiguration.uniformBucketLevelAccess.enabled from true to false in RFC 3339  format. iamConfiguration.uniformBucketLevelAccess.enabled may be changed from true to false until the locked time, after which the field is immutable.|
|» id|body|string|false|The ID of the bucket. For buckets, the id and name properties are the same.|
|» kind|body|string|false|The kind of item this is. For buckets, this is always storage#bucket.|
|» labels|body|object|false|User-provided labels, in key/value pairs.|
|» » **additionalProperties**|body|string|false|An individual label entry.|
|» lifecycle|body|object|false|The bucket's lifecycle configuration. See lifecycle management for more information.|
|» » rule|body|[object]|false|A lifecycle management rule, which is made of an action to take and the condition(s) under which the action will be taken.|
|» » » action|body|object|false|The action to take.|
|» » » » storageClass|body|string|false|Target storage class. Required iff the type of the action is SetStorageClass.|
|» » » » type|body|string|false|Type of the action. Currently, only Delete, SetStorageClass, and AbortIncompleteMultipartUpload are supported.|
|» » » condition|body|object|false|The condition(s) under which the action will be taken.|
|» » » » age|body|integer(int32)|false|Age of an object (in days). This condition is satisfied when an object reaches the specified age.|
|» » » » createdBefore|body|string(date)|false|A date in RFC 3339 format with only the date part (for instance, "2013-01-15"). This condition is satisfied when an object is created before midnight of the specified date in UTC.|
|» » » » customTimeBefore|body|string(date)|false|A date in RFC 3339 format with only the date part (for instance, "2013-01-15"). This condition is satisfied when the custom time on an object is before this date in UTC.|
|» » » » daysSinceCustomTime|body|integer(int32)|false|Number of days elapsed since the user-specified timestamp set on an object. The condition is satisfied if the days elapsed is at least this number. If no custom timestamp is specified on an object, the condition does not apply.|
|» » » » daysSinceNoncurrentTime|body|integer(int32)|false|Number of days elapsed since the noncurrent timestamp of an object. The condition is satisfied if the days elapsed is at least this number. This condition is relevant only for versioned objects. The value of the field must be a nonnegative integer. If it's zero, the object version will become eligible for Lifecycle action as soon as it becomes noncurrent.|
|» » » » isLive|body|boolean|false|Relevant only for versioned objects. If the value is true, this condition matches live objects; if the value is false, it matches archived objects.|
|» » » » matchesPattern|body|string|false|A regular expression that satisfies the RE2 syntax. This condition is satisfied when the name of the object matches the RE2 pattern. Note: This feature is currently in the "Early Access" launch stage and is only available to a whitelisted set of users; that means that this feature may be changed in backward-incompatible ways and that it is not guaranteed to be released.|
|» » » » matchesPrefix|body|[string]|false|List of object name prefixes. This condition will be satisfied when at least one of the prefixes exactly matches the beginning of the object name.|
|» » » » matchesStorageClass|body|[string]|false|Objects having any of the storage classes specified by this condition will be matched. Values include MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE, STANDARD, and DURABLE_REDUCED_AVAILABILITY.|
|» » » » matchesSuffix|body|[string]|false|List of object name suffixes. This condition will be satisfied when at least one of the suffixes exactly matches the end of the object name.|
|» » » » noncurrentTimeBefore|body|string(date)|false|A date in RFC 3339 format with only the date part (for instance, "2013-01-15"). This condition is satisfied when the noncurrent time on an object is before this date in UTC. This condition is relevant only for versioned objects.|
|» » » » numNewerVersions|body|integer(int32)|false|Relevant only for versioned objects. If the value is N, this condition is satisfied when there are at least N versions (including the live version) newer than this version of the object.|
|» location|body|string|false|The location of the bucket. Object data for objects in the bucket resides in physical storage within this region. Defaults to US. See the developer's guide for the authoritative list.|
|» locationType|body|string|false|The type of the bucket location.|
|» logging|body|object|false|The bucket's logging configuration, which defines the destination bucket and optional name prefix for the current bucket's logs.|
|» » logBucket|body|string|false|The destination bucket where the current bucket's logs should be placed.|
|» » logObjectPrefix|body|string|false|A prefix for log object names.|
|» metageneration|body|string(int64)|false|The metadata generation of this bucket.|
|» name|body|string|false|The name of the bucket.|
|» owner|body|object|false|The owner of the bucket. This is always the project team's owner group.|
|» » entity|body|string|false|The entity, in the form project-owner-projectId.|
|» » entityId|body|string|false|The ID for the entity.|
|» projectNumber|body|string(uint64)|false|The project number of the project the bucket belongs to.|
|» retentionPolicy|body|object|false|The bucket's retention policy. The retention policy enforces a minimum retention time for all objects contained in the bucket, based on their creation time. Any attempt to overwrite or delete objects younger than the retention period will result in a PERMISSION_DENIED error. An unlocked retention policy can be modified or removed from the bucket via a storage.buckets.update operation. A locked retention policy cannot be removed or shortened in duration for the lifetime of the bucket. Attempting to remove or decrease period of a locked retention policy will result in a PERMISSION_DENIED error.|
|» » effectiveTime|body|string(date-time)|false|Server-determined value that indicates the time from which policy was enforced and effective. This value is in RFC 3339 format.|
|» » isLocked|body|boolean|false|Once locked, an object retention policy cannot be modified.|
|» » retentionPeriod|body|string(int64)|false|The duration in seconds that objects need to be retained. Retention duration must be greater than zero and less than 100 years. Note that enforcement of retention periods less than a day is not guaranteed. Such periods should only be used for testing purposes.|
|» rpo|body|string|false|The Recovery Point Objective (RPO) of this bucket. Set to ASYNC_TURBO to turn on Turbo Replication on a bucket.|
|» satisfiesPZS|body|boolean|false|Reserved for future use.|
|» selfLink|body|string|false|The URI of this bucket.|
|» storageClass|body|string|false|The bucket's default storage class, used whenever no storageClass is specified for a newly-created object. This defines how objects in the bucket are stored and determines the SLA and the cost of storage. Values include MULTI_REGIONAL, REGIONAL, STANDARD, NEARLINE, COLDLINE, ARCHIVE, and DURABLE_REDUCED_AVAILABILITY. If this value is not specified when the bucket is created, it will default to STANDARD. For more information, see storage classes.|
|» timeCreated|body|string(date-time)|false|The creation time of the bucket in RFC 3339 format.|
|» updated|body|string(date-time)|false|The modification time of the bucket in RFC 3339 format.|
|» versioning|body|object|false|The bucket's versioning configuration.|
|» » enabled|body|boolean|false|While set to true, versioning is fully enabled for this bucket.|
|» website|body|object|false|The bucket's website configuration, controlling how the service behaves when accessing bucket contents as a web site. See the Static Website Examples for more information.|
|» » mainPageSuffix|body|string|false|If the requested object path is missing, the service will ensure the path has a trailing '/', append this suffix, and attempt to retrieve the resulting object. This allows the creation of index.html objects to represent directory pages.|
|» » notFoundPage|body|string|false|If the requested object path is missing, and any mainPageSuffix object is missing, if applicable, the service will return the named object from this bucket as the content for a 404 Not Found result.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|predefinedAcl|authenticatedRead|
|predefinedAcl|private|
|predefinedAcl|projectPrivate|
|predefinedAcl|publicRead|
|predefinedAcl|publicReadWrite|
|predefinedDefaultObjectAcl|authenticatedRead|
|predefinedDefaultObjectAcl|bucketOwnerFullControl|
|predefinedDefaultObjectAcl|bucketOwnerRead|
|predefinedDefaultObjectAcl|private|
|predefinedDefaultObjectAcl|projectPrivate|
|predefinedDefaultObjectAcl|publicRead|
|projection|full|
|projection|noAcl|
|alt|json|

> Example responses

> 200 Response

```json
{
  "acl": [
    {
      "bucket": "string",
      "domain": "string",
      "email": "string",
      "entity": "string",
      "entityId": "string",
      "etag": "string",
      "id": "string",
      "kind": "storage#bucketAccessControl",
      "projectTeam": {
        "projectNumber": "string",
        "team": "string"
      },
      "role": "string",
      "selfLink": "string"
    }
  ],
  "autoclass": {
    "enabled": true,
    "toggleTime": "1970-01-01T00:00:00Z"
  },
  "billing": {
    "requesterPays": true
  },
  "cors": [
    {
      "maxAgeSeconds": 0,
      "method": [
        "string"
      ],
      "origin": [
        "string"
      ],
      "responseHeader": [
        "string"
      ]
    }
  ],
  "customPlacementConfig": {
    "dataLocations": [
      "string"
    ]
  },
  "defaultEventBasedHold": true,
  "defaultObjectAcl": [
    {
      "bucket": "string",
      "domain": "string",
      "email": "string",
      "entity": "string",
      "entityId": "string",
      "etag": "string",
      "generation": "string",
      "id": "string",
      "kind": "storage#objectAccessControl",
      "object": "string",
      "projectTeam": {
        "projectNumber": "string",
        "team": "string"
      },
      "role": "string",
      "selfLink": "string"
    }
  ],
  "encryption": {
    "defaultKmsKeyName": "string"
  },
  "etag": "string",
  "iamConfiguration": {
    "bucketPolicyOnly": {
      "enabled": true,
      "lockedTime": "1970-01-01T00:00:00Z"
    },
    "publicAccessPrevention": "string",
    "uniformBucketLevelAccess": {
      "enabled": true,
      "lockedTime": "1970-01-01T00:00:00Z"
    }
  },
  "id": "string",
  "kind": "storage#bucket",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "lifecycle": {
    "rule": [
      {
        "action": {
          "storageClass": "string",
          "type": "string"
        },
        "condition": {
          "age": 0,
          "createdBefore": "1970-01-01",
          "customTimeBefore": "1970-01-01",
          "daysSinceCustomTime": 0,
          "daysSinceNoncurrentTime": 0,
          "isLive": true,
          "matchesPattern": "string",
          "matchesPrefix": [
            "string"
          ],
          "matchesStorageClass": [
            "string"
          ],
          "matchesSuffix": [
            "string"
          ],
          "noncurrentTimeBefore": "1970-01-01",
          "numNewerVersions": 0
        }
      }
    ]
  },
  "location": "string",
  "locationType": "string",
  "logging": {
    "logBucket": "string",
    "logObjectPrefix": "string"
  },
  "metageneration": "string",
  "name": "string",
  "owner": {
    "entity": "string",
    "entityId": "string"
  },
  "projectNumber": "string",
  "retentionPolicy": {
    "effectiveTime": "1970-01-01T00:00:00Z",
    "isLocked": true,
    "retentionPeriod": "string"
  },
  "rpo": "string",
  "satisfiesPZS": true,
  "selfLink": "string",
  "storageClass": "string",
  "timeCreated": "1970-01-01T00:00:00Z",
  "updated": "1970-01-01T00:00:00Z",
  "versioning": {
    "enabled": true
  },
  "website": {
    "mainPageSuffix": "string",
    "notFoundPage": "string"
  }
}
```

<h3 id="storagebucketsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Bucket](#schemabucket)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control )
</aside>

## storage.buckets.delete

<a id="opIdstorage.buckets.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/b/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /b/{bucket}`

Permanently deletes an empty bucket.

<h3 id="storagebucketsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket|path|string|true|Name of a bucket.|
|ifMetagenerationMatch|query|string|false|If set, only deletes the bucket if its metageneration matches this value.|
|ifMetagenerationNotMatch|query|string|false|If set, only deletes the bucket if its metageneration does not match this value.|
|userProject|query|string|false|The project to be billed for this request. Required for Requester Pays buckets.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

<h3 id="storagebucketsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.read_write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.read_write )
</aside>

## storage.buckets.patch

<a id="opIdstorage.buckets.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/b/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "acl": [
      {
        "bucket": "string",
        "domain": "string",
        "email": "string",
        "entity": "string",
        "entityId": "string",
        "etag": "string",
        "id": "string",
        "kind": "storage#bucketAccessControl",
        "projectTeam": {
          "projectNumber": "string",
          "team": "string"
        },
        "role": "string",
        "selfLink": "string"
      }
    ],
    "autoclass": {
      "enabled": true,
      "toggleTime": "1970-01-01T00:00:00Z"
    },
    "billing": {
      "requesterPays": true
    },
    "cors": [
      {
        "maxAgeSeconds": 0,
        "method": [
          "string"
        ],
        "origin": [
          "string"
        ],
        "responseHeader": [
          "string"
        ]
      }
    ],
    "customPlacementConfig": {
      "dataLocations": [
        "string"
      ]
    },
    "defaultEventBasedHold": true,
    "defaultObjectAcl": [
      {
        "bucket": "string",
        "domain": "string",
        "email": "string",
        "entity": "string",
        "entityId": "string",
        "etag": "string",
        "generation": "string",
        "id": "string",
        "kind": "storage#objectAccessControl",
        "object": "string",
        "projectTeam": {
          "projectNumber": "string",
          "team": "string"
        },
        "role": "string",
        "selfLink": "string"
      }
    ],
    "encryption": {
      "defaultKmsKeyName": "string"
    },
    "etag": "string",
    "iamConfiguration": {
      "bucketPolicyOnly": {
        "enabled": true,
        "lockedTime": "1970-01-01T00:00:00Z"
      },
      "publicAccessPrevention": "string",
      "uniformBucketLevelAccess": {
        "enabled": true,
        "lockedTime": "1970-01-01T00:00:00Z"
      }
    },
    "id": "string",
    "kind": "storage#bucket",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "lifecycle": {
      "rule": [
        {
          "action": {
            "storageClass": "string",
            "type": "string"
          },
          "condition": {
            "age": 0,
            "createdBefore": "1970-01-01",
            "customTimeBefore": "1970-01-01",
            "daysSinceCustomTime": 0,
            "daysSinceNoncurrentTime": 0,
            "isLive": true,
            "matchesPattern": "string",
            "matchesPrefix": [
              "string"
            ],
            "matchesStorageClass": [
              "string"
            ],
            "matchesSuffix": [
              "string"
            ],
            "noncurrentTimeBefore": "1970-01-01",
            "numNewerVersions": 0
          }
        }
      ]
    },
    "location": "string",
    "locationType": "string",
    "logging": {
      "logBucket": "string",
      "logObjectPrefix": "string"
    },
    "metageneration": "string",
    "name": "string",
    "owner": {
      "entity": "string",
      "entityId": "string"
    },
    "projectNumber": "string",
    "retentionPolicy": {
      "effectiveTime": "1970-01-01T00:00:00Z",
      "isLocked": true,
      "retentionPeriod": "string"
    },
    "rpo": "string",
    "satisfiesPZS": true,
    "selfLink": "string",
    "storageClass": "string",
    "timeCreated": "1970-01-01T00:00:00Z",
    "updated": "1970-01-01T00:00:00Z",
    "versioning": {
      "enabled": true
    },
    "website": {
      "mainPageSuffix": "string",
      "notFoundPage": "string"
    }
  }'
```

`PATCH /b/{bucket}`

Patches a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.

> Body parameter

```json
{
  "acl": [
    {
      "bucket": "string",
      "domain": "string",
      "email": "string",
      "entity": "string",
      "entityId": "string",
      "etag": "string",
      "id": "string",
      "kind": "storage#bucketAccessControl",
      "projectTeam": {
        "projectNumber": "string",
        "team": "string"
      },
      "role": "string",
      "selfLink": "string"
    }
  ],
  "autoclass": {
    "enabled": true,
    "toggleTime": "1970-01-01T00:00:00Z"
  },
  "billing": {
    "requesterPays": true
  },
  "cors": [
    {
      "maxAgeSeconds": 0,
      "method": [
        "string"
      ],
      "origin": [
        "string"
      ],
      "responseHeader": [
        "string"
      ]
    }
  ],
  "customPlacementConfig": {
    "dataLocations": [
      "string"
    ]
  },
  "defaultEventBasedHold": true,
  "defaultObjectAcl": [
    {
      "bucket": "string",
      "domain": "string",
      "email": "string",
      "entity": "string",
      "entityId": "string",
      "etag": "string",
      "generation": "string",
      "id": "string",
      "kind": "storage#objectAccessControl",
      "object": "string",
      "projectTeam": {
        "projectNumber": "string",
        "team": "string"
      },
      "role": "string",
      "selfLink": "string"
    }
  ],
  "encryption": {
    "defaultKmsKeyName": "string"
  },
  "etag": "string",
  "iamConfiguration": {
    "bucketPolicyOnly": {
      "enabled": true,
      "lockedTime": "1970-01-01T00:00:00Z"
    },
    "publicAccessPrevention": "string",
    "uniformBucketLevelAccess": {
      "enabled": true,
      "lockedTime": "1970-01-01T00:00:00Z"
    }
  },
  "id": "string",
  "kind": "storage#bucket",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "lifecycle": {
    "rule": [
      {
        "action": {
          "storageClass": "string",
          "type": "string"
        },
        "condition": {
          "age": 0,
          "createdBefore": "1970-01-01",
          "customTimeBefore": "1970-01-01",
          "daysSinceCustomTime": 0,
          "daysSinceNoncurrentTime": 0,
          "isLive": true,
          "matchesPattern": "string",
          "matchesPrefix": [
            "string"
          ],
          "matchesStorageClass": [
            "string"
          ],
          "matchesSuffix": [
            "string"
          ],
          "noncurrentTimeBefore": "1970-01-01",
          "numNewerVersions": 0
        }
      }
    ]
  },
  "location": "string",
  "locationType": "string",
  "logging": {
    "logBucket": "string",
    "logObjectPrefix": "string"
  },
  "metageneration": "string",
  "name": "string",
  "owner": {
    "entity": "string",
    "entityId": "string"
  },
  "projectNumber": "string",
  "retentionPolicy": {
    "effectiveTime": "1970-01-01T00:00:00Z",
    "isLocked": true,
    "retentionPeriod": "string"
  },
  "rpo": "string",
  "satisfiesPZS": true,
  "selfLink": "string",
  "storageClass": "string",
  "timeCreated": "1970-01-01T00:00:00Z",
  "updated": "1970-01-01T00:00:00Z",
  "versioning": {
    "enabled": true
  },
  "website": {
    "mainPageSuffix": "string",
    "notFoundPage": "string"
  }
}
```

<h3 id="storagebucketspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket|path|string|true|Name of a bucket.|
|ifMetagenerationMatch|query|string|false|Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.|
|ifMetagenerationNotMatch|query|string|false|Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.|
|predefinedAcl|query|string|false|Apply a predefined set of access controls to this bucket.|
|predefinedDefaultObjectAcl|query|string|false|Apply a predefined set of default object access controls to this bucket.|
|projection|query|string|false|Set of properties to return. Defaults to full.|
|userProject|query|string|false|The project to be billed for this request. Required for Requester Pays buckets.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Bucket](#schemabucket)|false|none|
|» acl|body|[[BucketAccessControl](#schemabucketaccesscontrol)]|false|Access controls on the bucket.|
|» autoclass|body|object|false|The bucket's Autoclass configuration.|
|» » enabled|body|boolean|false|Whether or not Autoclass is enabled on this bucket|
|» » toggleTime|body|string(date-time)|false|A date and time in RFC 3339 format representing the instant at which "enabled" was last toggled.|
|» billing|body|object|false|The bucket's billing configuration.|
|» » requesterPays|body|boolean|false|When set to true, Requester Pays is enabled for this bucket.|
|» cors|body|[object]|false|The bucket's Cross-Origin Resource Sharing (CORS) configuration.|
|» » maxAgeSeconds|body|integer(int32)|false|The value, in seconds, to return in the  Access-Control-Max-Age header used in preflight responses.|
|» » method|body|[string]|false|The list of HTTP methods on which to include CORS response headers, (GET, OPTIONS, POST, etc) Note: "*" is permitted in the list of methods, and means "any method".|
|» » origin|body|[string]|false|The list of Origins eligible to receive CORS response headers. Note: "*" is permitted in the list of origins, and means "any Origin".|
|» » responseHeader|body|[string]|false|The list of HTTP headers other than the simple response headers to give permission for the user-agent to share across domains.|
|» customPlacementConfig|body|object|false|The bucket's custom placement configuration for Custom Dual Regions.|
|» » dataLocations|body|[string]|false|The list of regional locations in which data is placed.|
|» defaultEventBasedHold|body|boolean|false|The default value for event-based hold on newly created objects in this bucket. Event-based hold is a way to retain objects indefinitely until an event occurs, signified by the hold's release. After being released, such objects will be subject to bucket-level retention (if any). One sample use case of this flag is for banks to hold loan documents for at least 3 years after loan is paid in full. Here, bucket-level retention is 3 years and the event is loan being paid in full. In this example, these objects will be held intact for any number of years until the event has occurred (event-based hold on the object is released) and then 3 more years after that. That means retention duration of the objects begins from the moment event-based hold transitioned from true to false. Objects under event-based hold cannot be deleted, overwritten or archived until the hold is removed.|
|» defaultObjectAcl|body|[[ObjectAccessControl](#schemaobjectaccesscontrol)]|false|Default access controls to apply to new objects when no ACL is provided.|
|» encryption|body|object|false|Encryption configuration for a bucket.|
|» » defaultKmsKeyName|body|string|false|A Cloud KMS key that will be used to encrypt objects inserted into this bucket, if no encryption method is specified.|
|» etag|body|string|false|HTTP 1.1 Entity tag for the bucket.|
|» iamConfiguration|body|object|false|The bucket's IAM configuration.|
|» » bucketPolicyOnly|body|object|false|The bucket's uniform bucket-level access configuration. The feature was formerly known as Bucket Policy Only. For backward compatibility, this field will be populated with identical information as the uniformBucketLevelAccess field. We recommend using the uniformBucketLevelAccess field to enable and disable the feature.|
|» » » enabled|body|boolean|false|If set, access is controlled only by bucket-level or above IAM policies.|
|» » » lockedTime|body|string(date-time)|false|The deadline for changing iamConfiguration.bucketPolicyOnly.enabled from true to false in RFC 3339 format. iamConfiguration.bucketPolicyOnly.enabled may be changed from true to false until the locked time, after which the field is immutable.|
|» » publicAccessPrevention|body|string|false|The bucket's Public Access Prevention configuration. Currently, 'inherited' and 'enforced' are supported.|
|» » uniformBucketLevelAccess|body|object|false|The bucket's uniform bucket-level access configuration.|
|» » » enabled|body|boolean|false|If set, access is controlled only by bucket-level or above IAM policies.|
|» » » lockedTime|body|string(date-time)|false|The deadline for changing iamConfiguration.uniformBucketLevelAccess.enabled from true to false in RFC 3339  format. iamConfiguration.uniformBucketLevelAccess.enabled may be changed from true to false until the locked time, after which the field is immutable.|
|» id|body|string|false|The ID of the bucket. For buckets, the id and name properties are the same.|
|» kind|body|string|false|The kind of item this is. For buckets, this is always storage#bucket.|
|» labels|body|object|false|User-provided labels, in key/value pairs.|
|» » **additionalProperties**|body|string|false|An individual label entry.|
|» lifecycle|body|object|false|The bucket's lifecycle configuration. See lifecycle management for more information.|
|» » rule|body|[object]|false|A lifecycle management rule, which is made of an action to take and the condition(s) under which the action will be taken.|
|» » » action|body|object|false|The action to take.|
|» » » » storageClass|body|string|false|Target storage class. Required iff the type of the action is SetStorageClass.|
|» » » » type|body|string|false|Type of the action. Currently, only Delete, SetStorageClass, and AbortIncompleteMultipartUpload are supported.|
|» » » condition|body|object|false|The condition(s) under which the action will be taken.|
|» » » » age|body|integer(int32)|false|Age of an object (in days). This condition is satisfied when an object reaches the specified age.|
|» » » » createdBefore|body|string(date)|false|A date in RFC 3339 format with only the date part (for instance, "2013-01-15"). This condition is satisfied when an object is created before midnight of the specified date in UTC.|
|» » » » customTimeBefore|body|string(date)|false|A date in RFC 3339 format with only the date part (for instance, "2013-01-15"). This condition is satisfied when the custom time on an object is before this date in UTC.|
|» » » » daysSinceCustomTime|body|integer(int32)|false|Number of days elapsed since the user-specified timestamp set on an object. The condition is satisfied if the days elapsed is at least this number. If no custom timestamp is specified on an object, the condition does not apply.|
|» » » » daysSinceNoncurrentTime|body|integer(int32)|false|Number of days elapsed since the noncurrent timestamp of an object. The condition is satisfied if the days elapsed is at least this number. This condition is relevant only for versioned objects. The value of the field must be a nonnegative integer. If it's zero, the object version will become eligible for Lifecycle action as soon as it becomes noncurrent.|
|» » » » isLive|body|boolean|false|Relevant only for versioned objects. If the value is true, this condition matches live objects; if the value is false, it matches archived objects.|
|» » » » matchesPattern|body|string|false|A regular expression that satisfies the RE2 syntax. This condition is satisfied when the name of the object matches the RE2 pattern. Note: This feature is currently in the "Early Access" launch stage and is only available to a whitelisted set of users; that means that this feature may be changed in backward-incompatible ways and that it is not guaranteed to be released.|
|» » » » matchesPrefix|body|[string]|false|List of object name prefixes. This condition will be satisfied when at least one of the prefixes exactly matches the beginning of the object name.|
|» » » » matchesStorageClass|body|[string]|false|Objects having any of the storage classes specified by this condition will be matched. Values include MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE, STANDARD, and DURABLE_REDUCED_AVAILABILITY.|
|» » » » matchesSuffix|body|[string]|false|List of object name suffixes. This condition will be satisfied when at least one of the suffixes exactly matches the end of the object name.|
|» » » » noncurrentTimeBefore|body|string(date)|false|A date in RFC 3339 format with only the date part (for instance, "2013-01-15"). This condition is satisfied when the noncurrent time on an object is before this date in UTC. This condition is relevant only for versioned objects.|
|» » » » numNewerVersions|body|integer(int32)|false|Relevant only for versioned objects. If the value is N, this condition is satisfied when there are at least N versions (including the live version) newer than this version of the object.|
|» location|body|string|false|The location of the bucket. Object data for objects in the bucket resides in physical storage within this region. Defaults to US. See the developer's guide for the authoritative list.|
|» locationType|body|string|false|The type of the bucket location.|
|» logging|body|object|false|The bucket's logging configuration, which defines the destination bucket and optional name prefix for the current bucket's logs.|
|» » logBucket|body|string|false|The destination bucket where the current bucket's logs should be placed.|
|» » logObjectPrefix|body|string|false|A prefix for log object names.|
|» metageneration|body|string(int64)|false|The metadata generation of this bucket.|
|» name|body|string|false|The name of the bucket.|
|» owner|body|object|false|The owner of the bucket. This is always the project team's owner group.|
|» » entity|body|string|false|The entity, in the form project-owner-projectId.|
|» » entityId|body|string|false|The ID for the entity.|
|» projectNumber|body|string(uint64)|false|The project number of the project the bucket belongs to.|
|» retentionPolicy|body|object|false|The bucket's retention policy. The retention policy enforces a minimum retention time for all objects contained in the bucket, based on their creation time. Any attempt to overwrite or delete objects younger than the retention period will result in a PERMISSION_DENIED error. An unlocked retention policy can be modified or removed from the bucket via a storage.buckets.update operation. A locked retention policy cannot be removed or shortened in duration for the lifetime of the bucket. Attempting to remove or decrease period of a locked retention policy will result in a PERMISSION_DENIED error.|
|» » effectiveTime|body|string(date-time)|false|Server-determined value that indicates the time from which policy was enforced and effective. This value is in RFC 3339 format.|
|» » isLocked|body|boolean|false|Once locked, an object retention policy cannot be modified.|
|» » retentionPeriod|body|string(int64)|false|The duration in seconds that objects need to be retained. Retention duration must be greater than zero and less than 100 years. Note that enforcement of retention periods less than a day is not guaranteed. Such periods should only be used for testing purposes.|
|» rpo|body|string|false|The Recovery Point Objective (RPO) of this bucket. Set to ASYNC_TURBO to turn on Turbo Replication on a bucket.|
|» satisfiesPZS|body|boolean|false|Reserved for future use.|
|» selfLink|body|string|false|The URI of this bucket.|
|» storageClass|body|string|false|The bucket's default storage class, used whenever no storageClass is specified for a newly-created object. This defines how objects in the bucket are stored and determines the SLA and the cost of storage. Values include MULTI_REGIONAL, REGIONAL, STANDARD, NEARLINE, COLDLINE, ARCHIVE, and DURABLE_REDUCED_AVAILABILITY. If this value is not specified when the bucket is created, it will default to STANDARD. For more information, see storage classes.|
|» timeCreated|body|string(date-time)|false|The creation time of the bucket in RFC 3339 format.|
|» updated|body|string(date-time)|false|The modification time of the bucket in RFC 3339 format.|
|» versioning|body|object|false|The bucket's versioning configuration.|
|» » enabled|body|boolean|false|While set to true, versioning is fully enabled for this bucket.|
|» website|body|object|false|The bucket's website configuration, controlling how the service behaves when accessing bucket contents as a web site. See the Static Website Examples for more information.|
|» » mainPageSuffix|body|string|false|If the requested object path is missing, the service will ensure the path has a trailing '/', append this suffix, and attempt to retrieve the resulting object. This allows the creation of index.html objects to represent directory pages.|
|» » notFoundPage|body|string|false|If the requested object path is missing, and any mainPageSuffix object is missing, if applicable, the service will return the named object from this bucket as the content for a 404 Not Found result.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|predefinedAcl|authenticatedRead|
|predefinedAcl|private|
|predefinedAcl|projectPrivate|
|predefinedAcl|publicRead|
|predefinedAcl|publicReadWrite|
|predefinedDefaultObjectAcl|authenticatedRead|
|predefinedDefaultObjectAcl|bucketOwnerFullControl|
|predefinedDefaultObjectAcl|bucketOwnerRead|
|predefinedDefaultObjectAcl|private|
|predefinedDefaultObjectAcl|projectPrivate|
|predefinedDefaultObjectAcl|publicRead|
|projection|full|
|projection|noAcl|
|alt|json|

> Example responses

> 200 Response

```json
{
  "acl": [
    {
      "bucket": "string",
      "domain": "string",
      "email": "string",
      "entity": "string",
      "entityId": "string",
      "etag": "string",
      "id": "string",
      "kind": "storage#bucketAccessControl",
      "projectTeam": {
        "projectNumber": "string",
        "team": "string"
      },
      "role": "string",
      "selfLink": "string"
    }
  ],
  "autoclass": {
    "enabled": true,
    "toggleTime": "1970-01-01T00:00:00Z"
  },
  "billing": {
    "requesterPays": true
  },
  "cors": [
    {
      "maxAgeSeconds": 0,
      "method": [
        "string"
      ],
      "origin": [
        "string"
      ],
      "responseHeader": [
        "string"
      ]
    }
  ],
  "customPlacementConfig": {
    "dataLocations": [
      "string"
    ]
  },
  "defaultEventBasedHold": true,
  "defaultObjectAcl": [
    {
      "bucket": "string",
      "domain": "string",
      "email": "string",
      "entity": "string",
      "entityId": "string",
      "etag": "string",
      "generation": "string",
      "id": "string",
      "kind": "storage#objectAccessControl",
      "object": "string",
      "projectTeam": {
        "projectNumber": "string",
        "team": "string"
      },
      "role": "string",
      "selfLink": "string"
    }
  ],
  "encryption": {
    "defaultKmsKeyName": "string"
  },
  "etag": "string",
  "iamConfiguration": {
    "bucketPolicyOnly": {
      "enabled": true,
      "lockedTime": "1970-01-01T00:00:00Z"
    },
    "publicAccessPrevention": "string",
    "uniformBucketLevelAccess": {
      "enabled": true,
      "lockedTime": "1970-01-01T00:00:00Z"
    }
  },
  "id": "string",
  "kind": "storage#bucket",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "lifecycle": {
    "rule": [
      {
        "action": {
          "storageClass": "string",
          "type": "string"
        },
        "condition": {
          "age": 0,
          "createdBefore": "1970-01-01",
          "customTimeBefore": "1970-01-01",
          "daysSinceCustomTime": 0,
          "daysSinceNoncurrentTime": 0,
          "isLive": true,
          "matchesPattern": "string",
          "matchesPrefix": [
            "string"
          ],
          "matchesStorageClass": [
            "string"
          ],
          "matchesSuffix": [
            "string"
          ],
          "noncurrentTimeBefore": "1970-01-01",
          "numNewerVersions": 0
        }
      }
    ]
  },
  "location": "string",
  "locationType": "string",
  "logging": {
    "logBucket": "string",
    "logObjectPrefix": "string"
  },
  "metageneration": "string",
  "name": "string",
  "owner": {
    "entity": "string",
    "entityId": "string"
  },
  "projectNumber": "string",
  "retentionPolicy": {
    "effectiveTime": "1970-01-01T00:00:00Z",
    "isLocked": true,
    "retentionPeriod": "string"
  },
  "rpo": "string",
  "satisfiesPZS": true,
  "selfLink": "string",
  "storageClass": "string",
  "timeCreated": "1970-01-01T00:00:00Z",
  "updated": "1970-01-01T00:00:00Z",
  "versioning": {
    "enabled": true
  },
  "website": {
    "mainPageSuffix": "string",
    "notFoundPage": "string"
  }
}
```

<h3 id="storagebucketspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Bucket](#schemabucket)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control )
</aside>

## storage.buckets.getIamPolicy

<a id="opIdstorage.buckets.getIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/b/string/iam \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /b/{bucket}/iam`

Returns an IAM policy for the specified bucket.

<h3 id="storagebucketsgetiampolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket|path|string|true|Name of a bucket.|
|optionsRequestedPolicyVersion|query|integer|false|The IAM policy format version to be returned. If the optionsRequestedPolicyVersion is for an older version that doesn't support part of the requested IAM policy, the request fails.|
|userProject|query|string|false|The project to be billed for this request. Required for Requester Pays buckets.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

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
  "kind": "storage#policy",
  "resourceId": "string",
  "version": 0
}
```

<h3 id="storagebucketsgetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control )
</aside>

## storage.buckets.setIamPolicy

<a id="opIdstorage.buckets.setIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/b/string/iam \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
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
    "kind": "storage#policy",
    "resourceId": "string",
    "version": 0
  }'
```

`PUT /b/{bucket}/iam`

Updates an IAM policy for the specified bucket.

> Body parameter

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
  "kind": "storage#policy",
  "resourceId": "string",
  "version": 0
}
```

<h3 id="storagebucketssetiampolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket|path|string|true|Name of a bucket.|
|userProject|query|string|false|The project to be billed for this request. Required for Requester Pays buckets.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Policy](#schemapolicy)|false|none|
|» bindings|body|[object]|false|An association between a role, which comes with a set of permissions, and members who may assume that role.|
|» » condition|body|[Expr](#schemaexpr)|false|The condition that is associated with this binding. NOTE: an unsatisfied condition will not allow user access via current binding. Different bindings, including their conditions, are examined independently.|
|» » members|body|[string]|false|A collection of identifiers for members who may assume the provided role. Recognized identifiers are as follows:  <br>- allUsers — A special identifier that represents anyone on the internet; with or without a Google account.  <br>- allAuthenticatedUsers — A special identifier that represents anyone who is authenticated with a Google account or a service account.  <br>- user:emailid — An email address that represents a specific account. For example, user:alice@gmail.com or user:joe@example.com.  <br>- serviceAccount:emailid — An email address that represents a service account. For example,  serviceAccount:my-other-app@appspot.gserviceaccount.com .  <br>- group:emailid — An email address that represents a Google group. For example, group:admins@example.com.  <br>- domain:domain — A Google Apps domain name that represents all the users of that domain. For example, domain:google.com or domain:example.com.  <br>- projectOwner:projectid — Owners of the given project. For example, projectOwner:my-example-project  <br>- projectEditor:projectid — Editors of the given project. For example, projectEditor:my-example-project  <br>- projectViewer:projectid — Viewers of the given project. For example, projectViewer:my-example-project|
|» » role|body|string|false|The role to which members belong. Two types of roles are supported: new IAM roles, which grant permissions that do not map directly to those provided by ACLs, and legacy IAM roles, which do map directly to ACL permissions. All roles are of the format roles/storage.specificRole.<br>The new IAM roles are:  <br>- roles/storage.admin — Full control of Google Cloud Storage resources.  <br>- roles/storage.objectViewer — Read-Only access to Google Cloud Storage objects.  <br>- roles/storage.objectCreator — Access to create objects in Google Cloud Storage.  <br>- roles/storage.objectAdmin — Full control of Google Cloud Storage objects.   The legacy IAM roles are:  <br>- roles/storage.legacyObjectReader — Read-only access to objects without listing. Equivalent to an ACL entry on an object with the READER role.  <br>- roles/storage.legacyObjectOwner — Read/write access to existing objects without listing. Equivalent to an ACL entry on an object with the OWNER role.  <br>- roles/storage.legacyBucketReader — Read access to buckets with object listing. Equivalent to an ACL entry on a bucket with the READER role.  <br>- roles/storage.legacyBucketWriter — Read access to buckets with object listing/creation/deletion. Equivalent to an ACL entry on a bucket with the WRITER role.  <br>- roles/storage.legacyBucketOwner — Read and write access to existing buckets with object listing/creation/deletion. Equivalent to an ACL entry on a bucket with the OWNER role.|
|» etag|body|string(byte)|false|HTTP 1.1  Entity tag for the policy.|
|» kind|body|string|false|The kind of item this is. For policies, this is always storage#policy. This field is ignored on input.|
|» resourceId|body|string|false|The ID of the resource to which this policy belongs. Will be of the form projects/_/buckets/bucket for buckets, and projects/_/buckets/bucket/objects/object for objects. A specific generation may be specified by appending #generationNumber to the end of the object name, e.g. projects/_/buckets/my-bucket/objects/data.txt#17. The current generation can be denoted with #0. This field is ignored on input.|
|» version|body|integer(int32)|false|The IAM policy format version.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

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
  "kind": "storage#policy",
  "resourceId": "string",
  "version": 0
}
```

<h3 id="storagebucketssetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control )
</aside>

## storage.buckets.testIamPermissions

<a id="opIdstorage.buckets.testIamPermissions"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/b/string/iam/testPermissions?permissions=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /b/{bucket}/iam/testPermissions`

Tests a set of permissions on the given bucket to see which, if any, are held by the caller.

<h3 id="storagebucketstestiampermissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket|path|string|true|Name of a bucket.|
|permissions|query|[string]|true|Permissions to test.|
|userProject|query|string|false|The project to be billed for this request. Required for Requester Pays buckets.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "kind": "storage#testIamPermissionsResponse",
  "permissions": [
    "string"
  ]
}
```

<h3 id="storagebucketstestiampermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TestIamPermissionsResponse](#schematestiampermissionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.read_only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.read_only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.read_write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.read_write )
</aside>

## storage.buckets.lockRetentionPolicy

<a id="opIdstorage.buckets.lockRetentionPolicy"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/b/string/lockRetentionPolicy?ifMetagenerationMatch=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /b/{bucket}/lockRetentionPolicy`

Locks retention policy on a bucket.

<h3 id="storagebucketslockretentionpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket|path|string|true|Name of a bucket.|
|ifMetagenerationMatch|query|string|true|Makes the operation conditional on whether bucket's current metageneration matches the given value.|
|userProject|query|string|false|The project to be billed for this request. Required for Requester Pays buckets.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "acl": [
    {
      "bucket": "string",
      "domain": "string",
      "email": "string",
      "entity": "string",
      "entityId": "string",
      "etag": "string",
      "id": "string",
      "kind": "storage#bucketAccessControl",
      "projectTeam": {
        "projectNumber": "string",
        "team": "string"
      },
      "role": "string",
      "selfLink": "string"
    }
  ],
  "autoclass": {
    "enabled": true,
    "toggleTime": "1970-01-01T00:00:00Z"
  },
  "billing": {
    "requesterPays": true
  },
  "cors": [
    {
      "maxAgeSeconds": 0,
      "method": [
        "string"
      ],
      "origin": [
        "string"
      ],
      "responseHeader": [
        "string"
      ]
    }
  ],
  "customPlacementConfig": {
    "dataLocations": [
      "string"
    ]
  },
  "defaultEventBasedHold": true,
  "defaultObjectAcl": [
    {
      "bucket": "string",
      "domain": "string",
      "email": "string",
      "entity": "string",
      "entityId": "string",
      "etag": "string",
      "generation": "string",
      "id": "string",
      "kind": "storage#objectAccessControl",
      "object": "string",
      "projectTeam": {
        "projectNumber": "string",
        "team": "string"
      },
      "role": "string",
      "selfLink": "string"
    }
  ],
  "encryption": {
    "defaultKmsKeyName": "string"
  },
  "etag": "string",
  "iamConfiguration": {
    "bucketPolicyOnly": {
      "enabled": true,
      "lockedTime": "1970-01-01T00:00:00Z"
    },
    "publicAccessPrevention": "string",
    "uniformBucketLevelAccess": {
      "enabled": true,
      "lockedTime": "1970-01-01T00:00:00Z"
    }
  },
  "id": "string",
  "kind": "storage#bucket",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "lifecycle": {
    "rule": [
      {
        "action": {
          "storageClass": "string",
          "type": "string"
        },
        "condition": {
          "age": 0,
          "createdBefore": "1970-01-01",
          "customTimeBefore": "1970-01-01",
          "daysSinceCustomTime": 0,
          "daysSinceNoncurrentTime": 0,
          "isLive": true,
          "matchesPattern": "string",
          "matchesPrefix": [
            "string"
          ],
          "matchesStorageClass": [
            "string"
          ],
          "matchesSuffix": [
            "string"
          ],
          "noncurrentTimeBefore": "1970-01-01",
          "numNewerVersions": 0
        }
      }
    ]
  },
  "location": "string",
  "locationType": "string",
  "logging": {
    "logBucket": "string",
    "logObjectPrefix": "string"
  },
  "metageneration": "string",
  "name": "string",
  "owner": {
    "entity": "string",
    "entityId": "string"
  },
  "projectNumber": "string",
  "retentionPolicy": {
    "effectiveTime": "1970-01-01T00:00:00Z",
    "isLocked": true,
    "retentionPeriod": "string"
  },
  "rpo": "string",
  "satisfiesPZS": true,
  "selfLink": "string",
  "storageClass": "string",
  "timeCreated": "1970-01-01T00:00:00Z",
  "updated": "1970-01-01T00:00:00Z",
  "versioning": {
    "enabled": true
  },
  "website": {
    "mainPageSuffix": "string",
    "notFoundPage": "string"
  }
}
```

<h3 id="storagebucketslockretentionpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Bucket](#schemabucket)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.read_write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.read_write )
</aside>

<h1 id="cloud-storage-json-api-channels">channels</h1>

## storage.channels.stop

<a id="opIdstorage.channels.stop"></a>

> Code samples

```bash
curl https://www.googleapis.com/channels/stop \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "address": "string",
    "expiration": "string",
    "id": "string",
    "kind": "api#channel",
    "params": {
      "property1": "string",
      "property2": "string"
    },
    "payload": true,
    "resourceId": "string",
    "resourceUri": "string",
    "token": "string",
    "type": "string"
  }'
```

`POST /channels/stop`

Stop watching resources through this channel

> Body parameter

```json
{
  "address": "string",
  "expiration": "string",
  "id": "string",
  "kind": "api#channel",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "payload": true,
  "resourceId": "string",
  "resourceUri": "string",
  "token": "string",
  "type": "string"
}
```

<h3 id="storagechannelsstop-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Channel](#schemachannel)|false|none|
|» address|body|string|false|The address where notifications are delivered for this channel.|
|» expiration|body|string(int64)|false|Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.|
|» id|body|string|false|A UUID or similar unique string that identifies this channel.|
|» kind|body|string|false|Identifies this as a notification channel used to watch for changes to a resource, which is "api#channel".|
|» params|body|object|false|Additional parameters controlling delivery channel behavior. Optional.|
|» » **additionalProperties**|body|string|false|Declares a new parameter by name.|
|» payload|body|boolean|false|A Boolean value to indicate whether payload is wanted. Optional.|
|» resourceId|body|string|false|An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.|
|» resourceUri|body|string|false|A version-specific identifier for the watched resource.|
|» token|body|string|false|An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.|
|» type|body|string|false|The type of delivery mechanism used for this channel.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

<h3 id="storagechannelsstop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.read_only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.read_only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.read_write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.read_write )
</aside>

<h1 id="cloud-storage-json-api-defaultobjectaccesscontrols">defaultObjectAccessControls</h1>

## storage.defaultObjectAccessControls.list

<a id="opIdstorage.defaultObjectAccessControls.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/b/string/defaultObjectAcl \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /b/{bucket}/defaultObjectAcl`

Retrieves default object ACL entries on the specified bucket.

<h3 id="storagedefaultobjectaccesscontrolslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket|path|string|true|Name of a bucket.|
|ifMetagenerationMatch|query|string|false|If present, only return default ACL listing if the bucket's current metageneration matches this value.|
|ifMetagenerationNotMatch|query|string|false|If present, only return default ACL listing if the bucket's current metageneration does not match the given value.|
|userProject|query|string|false|The project to be billed for this request. Required for Requester Pays buckets.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "bucket": "string",
      "domain": "string",
      "email": "string",
      "entity": "string",
      "entityId": "string",
      "etag": "string",
      "generation": "string",
      "id": "string",
      "kind": "storage#objectAccessControl",
      "object": "string",
      "projectTeam": {
        "projectNumber": "string",
        "team": "string"
      },
      "role": "string",
      "selfLink": "string"
    }
  ],
  "kind": "storage#objectAccessControls"
}
```

<h3 id="storagedefaultobjectaccesscontrolslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ObjectAccessControls](#schemaobjectaccesscontrols)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control )
</aside>

## storage.defaultObjectAccessControls.insert

<a id="opIdstorage.defaultObjectAccessControls.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/b/string/defaultObjectAcl \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "bucket": "string",
    "domain": "string",
    "email": "string",
    "entity": "string",
    "entityId": "string",
    "etag": "string",
    "generation": "string",
    "id": "string",
    "kind": "storage#objectAccessControl",
    "object": "string",
    "projectTeam": {
      "projectNumber": "string",
      "team": "string"
    },
    "role": "string",
    "selfLink": "string"
  }'
```

`POST /b/{bucket}/defaultObjectAcl`

Creates a new default object ACL entry on the specified bucket.

> Body parameter

```json
{
  "bucket": "string",
  "domain": "string",
  "email": "string",
  "entity": "string",
  "entityId": "string",
  "etag": "string",
  "generation": "string",
  "id": "string",
  "kind": "storage#objectAccessControl",
  "object": "string",
  "projectTeam": {
    "projectNumber": "string",
    "team": "string"
  },
  "role": "string",
  "selfLink": "string"
}
```

<h3 id="storagedefaultobjectaccesscontrolsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket|path|string|true|Name of a bucket.|
|userProject|query|string|false|The project to be billed for this request. Required for Requester Pays buckets.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[ObjectAccessControl](#schemaobjectaccesscontrol)|false|none|
|» bucket|body|string|false|The name of the bucket.|
|» domain|body|string|false|The domain associated with the entity, if any.|
|» email|body|string|false|The email address associated with the entity, if any.|
|» entity|body|string|false|The entity holding the permission, in one of the following forms: <br>- user-userId <br>- user-email <br>- group-groupId <br>- group-email <br>- domain-domain <br>- project-team-projectId <br>- allUsers <br>- allAuthenticatedUsers Examples: <br>- The user liz@example.com would be user-liz@example.com. <br>- The group example@googlegroups.com would be group-example@googlegroups.com. <br>- To refer to all members of the Google Apps for Business domain example.com, the entity would be domain-example.com.|
|» entityId|body|string|false|The ID for the entity, if any.|
|» etag|body|string|false|HTTP 1.1 Entity tag for the access-control entry.|
|» generation|body|string(int64)|false|The content generation of the object, if applied to an object.|
|» id|body|string|false|The ID of the access-control entry.|
|» kind|body|string|false|The kind of item this is. For object access control entries, this is always storage#objectAccessControl.|
|» object|body|string|false|The name of the object, if applied to an object.|
|» projectTeam|body|object|false|The project team associated with the entity, if any.|
|» » projectNumber|body|string|false|The project number.|
|» » team|body|string|false|The team.|
|» role|body|string|false|The access permission for the entity.|
|» selfLink|body|string|false|The link to this access-control entry.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "bucket": "string",
  "domain": "string",
  "email": "string",
  "entity": "string",
  "entityId": "string",
  "etag": "string",
  "generation": "string",
  "id": "string",
  "kind": "storage#objectAccessControl",
  "object": "string",
  "projectTeam": {
    "projectNumber": "string",
    "team": "string"
  },
  "role": "string",
  "selfLink": "string"
}
```

<h3 id="storagedefaultobjectaccesscontrolsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ObjectAccessControl](#schemaobjectaccesscontrol)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control )
</aside>

## storage.defaultObjectAccessControls.get

<a id="opIdstorage.defaultObjectAccessControls.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/b/string/defaultObjectAcl/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /b/{bucket}/defaultObjectAcl/{entity}`

Returns the default object ACL entry for the specified entity on the specified bucket.

<h3 id="storagedefaultobjectaccesscontrolsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket|path|string|true|Name of a bucket.|
|entity|path|string|true|The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.|
|userProject|query|string|false|The project to be billed for this request. Required for Requester Pays buckets.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "bucket": "string",
  "domain": "string",
  "email": "string",
  "entity": "string",
  "entityId": "string",
  "etag": "string",
  "generation": "string",
  "id": "string",
  "kind": "storage#objectAccessControl",
  "object": "string",
  "projectTeam": {
    "projectNumber": "string",
    "team": "string"
  },
  "role": "string",
  "selfLink": "string"
}
```

<h3 id="storagedefaultobjectaccesscontrolsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ObjectAccessControl](#schemaobjectaccesscontrol)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control )
</aside>

## storage.defaultObjectAccessControls.update

<a id="opIdstorage.defaultObjectAccessControls.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/b/string/defaultObjectAcl/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "bucket": "string",
    "domain": "string",
    "email": "string",
    "entity": "string",
    "entityId": "string",
    "etag": "string",
    "generation": "string",
    "id": "string",
    "kind": "storage#objectAccessControl",
    "object": "string",
    "projectTeam": {
      "projectNumber": "string",
      "team": "string"
    },
    "role": "string",
    "selfLink": "string"
  }'
```

`PUT /b/{bucket}/defaultObjectAcl/{entity}`

Updates a default object ACL entry on the specified bucket.

> Body parameter

```json
{
  "bucket": "string",
  "domain": "string",
  "email": "string",
  "entity": "string",
  "entityId": "string",
  "etag": "string",
  "generation": "string",
  "id": "string",
  "kind": "storage#objectAccessControl",
  "object": "string",
  "projectTeam": {
    "projectNumber": "string",
    "team": "string"
  },
  "role": "string",
  "selfLink": "string"
}
```

<h3 id="storagedefaultobjectaccesscontrolsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket|path|string|true|Name of a bucket.|
|entity|path|string|true|The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.|
|userProject|query|string|false|The project to be billed for this request. Required for Requester Pays buckets.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[ObjectAccessControl](#schemaobjectaccesscontrol)|false|none|
|» bucket|body|string|false|The name of the bucket.|
|» domain|body|string|false|The domain associated with the entity, if any.|
|» email|body|string|false|The email address associated with the entity, if any.|
|» entity|body|string|false|The entity holding the permission, in one of the following forms: <br>- user-userId <br>- user-email <br>- group-groupId <br>- group-email <br>- domain-domain <br>- project-team-projectId <br>- allUsers <br>- allAuthenticatedUsers Examples: <br>- The user liz@example.com would be user-liz@example.com. <br>- The group example@googlegroups.com would be group-example@googlegroups.com. <br>- To refer to all members of the Google Apps for Business domain example.com, the entity would be domain-example.com.|
|» entityId|body|string|false|The ID for the entity, if any.|
|» etag|body|string|false|HTTP 1.1 Entity tag for the access-control entry.|
|» generation|body|string(int64)|false|The content generation of the object, if applied to an object.|
|» id|body|string|false|The ID of the access-control entry.|
|» kind|body|string|false|The kind of item this is. For object access control entries, this is always storage#objectAccessControl.|
|» object|body|string|false|The name of the object, if applied to an object.|
|» projectTeam|body|object|false|The project team associated with the entity, if any.|
|» » projectNumber|body|string|false|The project number.|
|» » team|body|string|false|The team.|
|» role|body|string|false|The access permission for the entity.|
|» selfLink|body|string|false|The link to this access-control entry.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "bucket": "string",
  "domain": "string",
  "email": "string",
  "entity": "string",
  "entityId": "string",
  "etag": "string",
  "generation": "string",
  "id": "string",
  "kind": "storage#objectAccessControl",
  "object": "string",
  "projectTeam": {
    "projectNumber": "string",
    "team": "string"
  },
  "role": "string",
  "selfLink": "string"
}
```

<h3 id="storagedefaultobjectaccesscontrolsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ObjectAccessControl](#schemaobjectaccesscontrol)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control )
</aside>

## storage.defaultObjectAccessControls.delete

<a id="opIdstorage.defaultObjectAccessControls.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/b/string/defaultObjectAcl/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /b/{bucket}/defaultObjectAcl/{entity}`

Permanently deletes the default object ACL entry for the specified entity on the specified bucket.

<h3 id="storagedefaultobjectaccesscontrolsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket|path|string|true|Name of a bucket.|
|entity|path|string|true|The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.|
|userProject|query|string|false|The project to be billed for this request. Required for Requester Pays buckets.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

<h3 id="storagedefaultobjectaccesscontrolsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control )
</aside>

## storage.defaultObjectAccessControls.patch

<a id="opIdstorage.defaultObjectAccessControls.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/b/string/defaultObjectAcl/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "bucket": "string",
    "domain": "string",
    "email": "string",
    "entity": "string",
    "entityId": "string",
    "etag": "string",
    "generation": "string",
    "id": "string",
    "kind": "storage#objectAccessControl",
    "object": "string",
    "projectTeam": {
      "projectNumber": "string",
      "team": "string"
    },
    "role": "string",
    "selfLink": "string"
  }'
```

`PATCH /b/{bucket}/defaultObjectAcl/{entity}`

Patches a default object ACL entry on the specified bucket.

> Body parameter

```json
{
  "bucket": "string",
  "domain": "string",
  "email": "string",
  "entity": "string",
  "entityId": "string",
  "etag": "string",
  "generation": "string",
  "id": "string",
  "kind": "storage#objectAccessControl",
  "object": "string",
  "projectTeam": {
    "projectNumber": "string",
    "team": "string"
  },
  "role": "string",
  "selfLink": "string"
}
```

<h3 id="storagedefaultobjectaccesscontrolspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket|path|string|true|Name of a bucket.|
|entity|path|string|true|The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.|
|userProject|query|string|false|The project to be billed for this request. Required for Requester Pays buckets.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[ObjectAccessControl](#schemaobjectaccesscontrol)|false|none|
|» bucket|body|string|false|The name of the bucket.|
|» domain|body|string|false|The domain associated with the entity, if any.|
|» email|body|string|false|The email address associated with the entity, if any.|
|» entity|body|string|false|The entity holding the permission, in one of the following forms: <br>- user-userId <br>- user-email <br>- group-groupId <br>- group-email <br>- domain-domain <br>- project-team-projectId <br>- allUsers <br>- allAuthenticatedUsers Examples: <br>- The user liz@example.com would be user-liz@example.com. <br>- The group example@googlegroups.com would be group-example@googlegroups.com. <br>- To refer to all members of the Google Apps for Business domain example.com, the entity would be domain-example.com.|
|» entityId|body|string|false|The ID for the entity, if any.|
|» etag|body|string|false|HTTP 1.1 Entity tag for the access-control entry.|
|» generation|body|string(int64)|false|The content generation of the object, if applied to an object.|
|» id|body|string|false|The ID of the access-control entry.|
|» kind|body|string|false|The kind of item this is. For object access control entries, this is always storage#objectAccessControl.|
|» object|body|string|false|The name of the object, if applied to an object.|
|» projectTeam|body|object|false|The project team associated with the entity, if any.|
|» » projectNumber|body|string|false|The project number.|
|» » team|body|string|false|The team.|
|» role|body|string|false|The access permission for the entity.|
|» selfLink|body|string|false|The link to this access-control entry.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "bucket": "string",
  "domain": "string",
  "email": "string",
  "entity": "string",
  "entityId": "string",
  "etag": "string",
  "generation": "string",
  "id": "string",
  "kind": "storage#objectAccessControl",
  "object": "string",
  "projectTeam": {
    "projectNumber": "string",
    "team": "string"
  },
  "role": "string",
  "selfLink": "string"
}
```

<h3 id="storagedefaultobjectaccesscontrolspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ObjectAccessControl](#schemaobjectaccesscontrol)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control )
</aside>

<h1 id="cloud-storage-json-api-notifications">notifications</h1>

## storage.notifications.list

<a id="opIdstorage.notifications.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/b/string/notificationConfigs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /b/{bucket}/notificationConfigs`

Retrieves a list of notification subscriptions for a given bucket.

<h3 id="storagenotificationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket|path|string|true|Name of a Google Cloud Storage bucket.|
|userProject|query|string|false|The project to be billed for this request. Required for Requester Pays buckets.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "custom_attributes": {
        "property1": "string",
        "property2": "string"
      },
      "etag": "string",
      "event_types": [
        "string"
      ],
      "id": "string",
      "kind": "storage#notification",
      "object_name_prefix": "string",
      "payload_format": "JSON_API_V1",
      "selfLink": "string",
      "topic": "string"
    }
  ],
  "kind": "storage#notifications"
}
```

<h3 id="storagenotificationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Notifications](#schemanotifications)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.read_only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.read_only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.read_write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.read_write )
</aside>

## storage.notifications.insert

<a id="opIdstorage.notifications.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/b/string/notificationConfigs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "custom_attributes": {
      "property1": "string",
      "property2": "string"
    },
    "etag": "string",
    "event_types": [
      "string"
    ],
    "id": "string",
    "kind": "storage#notification",
    "object_name_prefix": "string",
    "payload_format": "JSON_API_V1",
    "selfLink": "string",
    "topic": "string"
  }'
```

`POST /b/{bucket}/notificationConfigs`

Creates a notification subscription for a given bucket.

> Body parameter

```json
{
  "custom_attributes": {
    "property1": "string",
    "property2": "string"
  },
  "etag": "string",
  "event_types": [
    "string"
  ],
  "id": "string",
  "kind": "storage#notification",
  "object_name_prefix": "string",
  "payload_format": "JSON_API_V1",
  "selfLink": "string",
  "topic": "string"
}
```

<h3 id="storagenotificationsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket|path|string|true|The parent bucket of the notification.|
|userProject|query|string|false|The project to be billed for this request. Required for Requester Pays buckets.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Notification](#schemanotification)|false|none|
|» custom_attributes|body|object|false|An optional list of additional attributes to attach to each Cloud PubSub message published for this notification subscription.|
|» » **additionalProperties**|body|string|false|none|
|» etag|body|string|false|HTTP 1.1 Entity tag for this subscription notification.|
|» event_types|body|[string]|false|If present, only send notifications about listed event types. If empty, sent notifications for all event types.|
|» id|body|string|false|The ID of the notification.|
|» kind|body|string|false|The kind of item this is. For notifications, this is always storage#notification.|
|» object_name_prefix|body|string|false|If present, only apply this notification configuration to object names that begin with this prefix.|
|» payload_format|body|string|false|The desired content of the Payload.|
|» selfLink|body|string|false|The canonical URL of this notification.|
|» topic|body|string|false|The Cloud PubSub topic to which this subscription publishes. Formatted as: '//pubsub.googleapis.com/projects/{project-identifier}/topics/{my-topic}'|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "custom_attributes": {
    "property1": "string",
    "property2": "string"
  },
  "etag": "string",
  "event_types": [
    "string"
  ],
  "id": "string",
  "kind": "storage#notification",
  "object_name_prefix": "string",
  "payload_format": "JSON_API_V1",
  "selfLink": "string",
  "topic": "string"
}
```

<h3 id="storagenotificationsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Notification](#schemanotification)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.read_write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.read_write )
</aside>

## storage.notifications.get

<a id="opIdstorage.notifications.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/b/string/notificationConfigs/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /b/{bucket}/notificationConfigs/{notification}`

View a notification configuration.

<h3 id="storagenotificationsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket|path|string|true|The parent bucket of the notification.|
|notification|path|string|true|Notification ID|
|userProject|query|string|false|The project to be billed for this request. Required for Requester Pays buckets.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "custom_attributes": {
    "property1": "string",
    "property2": "string"
  },
  "etag": "string",
  "event_types": [
    "string"
  ],
  "id": "string",
  "kind": "storage#notification",
  "object_name_prefix": "string",
  "payload_format": "JSON_API_V1",
  "selfLink": "string",
  "topic": "string"
}
```

<h3 id="storagenotificationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Notification](#schemanotification)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.read_only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.read_only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.read_write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.read_write )
</aside>

## storage.notifications.delete

<a id="opIdstorage.notifications.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/b/string/notificationConfigs/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /b/{bucket}/notificationConfigs/{notification}`

Permanently deletes a notification subscription.

<h3 id="storagenotificationsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket|path|string|true|The parent bucket of the notification.|
|notification|path|string|true|ID of the notification to delete.|
|userProject|query|string|false|The project to be billed for this request. Required for Requester Pays buckets.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

<h3 id="storagenotificationsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.read_write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.read_write )
</aside>

<h1 id="cloud-storage-json-api-objectaccesscontrols">objectAccessControls</h1>

## storage.objectAccessControls.list

<a id="opIdstorage.objectAccessControls.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/b/string/o/string/acl \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /b/{bucket}/o/{object}/acl`

Retrieves ACL entries on the specified object.

<h3 id="storageobjectaccesscontrolslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket|path|string|true|Name of a bucket.|
|object|path|string|true|Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.|
|generation|query|string|false|If present, selects a specific revision of this object (as opposed to the latest version, the default).|
|userProject|query|string|false|The project to be billed for this request. Required for Requester Pays buckets.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "bucket": "string",
      "domain": "string",
      "email": "string",
      "entity": "string",
      "entityId": "string",
      "etag": "string",
      "generation": "string",
      "id": "string",
      "kind": "storage#objectAccessControl",
      "object": "string",
      "projectTeam": {
        "projectNumber": "string",
        "team": "string"
      },
      "role": "string",
      "selfLink": "string"
    }
  ],
  "kind": "storage#objectAccessControls"
}
```

<h3 id="storageobjectaccesscontrolslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ObjectAccessControls](#schemaobjectaccesscontrols)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control )
</aside>

## storage.objectAccessControls.insert

<a id="opIdstorage.objectAccessControls.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/b/string/o/string/acl \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "bucket": "string",
    "domain": "string",
    "email": "string",
    "entity": "string",
    "entityId": "string",
    "etag": "string",
    "generation": "string",
    "id": "string",
    "kind": "storage#objectAccessControl",
    "object": "string",
    "projectTeam": {
      "projectNumber": "string",
      "team": "string"
    },
    "role": "string",
    "selfLink": "string"
  }'
```

`POST /b/{bucket}/o/{object}/acl`

Creates a new ACL entry on the specified object.

> Body parameter

```json
{
  "bucket": "string",
  "domain": "string",
  "email": "string",
  "entity": "string",
  "entityId": "string",
  "etag": "string",
  "generation": "string",
  "id": "string",
  "kind": "storage#objectAccessControl",
  "object": "string",
  "projectTeam": {
    "projectNumber": "string",
    "team": "string"
  },
  "role": "string",
  "selfLink": "string"
}
```

<h3 id="storageobjectaccesscontrolsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket|path|string|true|Name of a bucket.|
|object|path|string|true|Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.|
|generation|query|string|false|If present, selects a specific revision of this object (as opposed to the latest version, the default).|
|userProject|query|string|false|The project to be billed for this request. Required for Requester Pays buckets.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[ObjectAccessControl](#schemaobjectaccesscontrol)|false|none|
|» bucket|body|string|false|The name of the bucket.|
|» domain|body|string|false|The domain associated with the entity, if any.|
|» email|body|string|false|The email address associated with the entity, if any.|
|» entity|body|string|false|The entity holding the permission, in one of the following forms: <br>- user-userId <br>- user-email <br>- group-groupId <br>- group-email <br>- domain-domain <br>- project-team-projectId <br>- allUsers <br>- allAuthenticatedUsers Examples: <br>- The user liz@example.com would be user-liz@example.com. <br>- The group example@googlegroups.com would be group-example@googlegroups.com. <br>- To refer to all members of the Google Apps for Business domain example.com, the entity would be domain-example.com.|
|» entityId|body|string|false|The ID for the entity, if any.|
|» etag|body|string|false|HTTP 1.1 Entity tag for the access-control entry.|
|» generation|body|string(int64)|false|The content generation of the object, if applied to an object.|
|» id|body|string|false|The ID of the access-control entry.|
|» kind|body|string|false|The kind of item this is. For object access control entries, this is always storage#objectAccessControl.|
|» object|body|string|false|The name of the object, if applied to an object.|
|» projectTeam|body|object|false|The project team associated with the entity, if any.|
|» » projectNumber|body|string|false|The project number.|
|» » team|body|string|false|The team.|
|» role|body|string|false|The access permission for the entity.|
|» selfLink|body|string|false|The link to this access-control entry.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "bucket": "string",
  "domain": "string",
  "email": "string",
  "entity": "string",
  "entityId": "string",
  "etag": "string",
  "generation": "string",
  "id": "string",
  "kind": "storage#objectAccessControl",
  "object": "string",
  "projectTeam": {
    "projectNumber": "string",
    "team": "string"
  },
  "role": "string",
  "selfLink": "string"
}
```

<h3 id="storageobjectaccesscontrolsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ObjectAccessControl](#schemaobjectaccesscontrol)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control )
</aside>

## storage.objectAccessControls.get

<a id="opIdstorage.objectAccessControls.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/b/string/o/string/acl/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /b/{bucket}/o/{object}/acl/{entity}`

Returns the ACL entry for the specified entity on the specified object.

<h3 id="storageobjectaccesscontrolsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket|path|string|true|Name of a bucket.|
|object|path|string|true|Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.|
|entity|path|string|true|The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.|
|generation|query|string|false|If present, selects a specific revision of this object (as opposed to the latest version, the default).|
|userProject|query|string|false|The project to be billed for this request. Required for Requester Pays buckets.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "bucket": "string",
  "domain": "string",
  "email": "string",
  "entity": "string",
  "entityId": "string",
  "etag": "string",
  "generation": "string",
  "id": "string",
  "kind": "storage#objectAccessControl",
  "object": "string",
  "projectTeam": {
    "projectNumber": "string",
    "team": "string"
  },
  "role": "string",
  "selfLink": "string"
}
```

<h3 id="storageobjectaccesscontrolsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ObjectAccessControl](#schemaobjectaccesscontrol)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control )
</aside>

## storage.objectAccessControls.update

<a id="opIdstorage.objectAccessControls.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/b/string/o/string/acl/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "bucket": "string",
    "domain": "string",
    "email": "string",
    "entity": "string",
    "entityId": "string",
    "etag": "string",
    "generation": "string",
    "id": "string",
    "kind": "storage#objectAccessControl",
    "object": "string",
    "projectTeam": {
      "projectNumber": "string",
      "team": "string"
    },
    "role": "string",
    "selfLink": "string"
  }'
```

`PUT /b/{bucket}/o/{object}/acl/{entity}`

Updates an ACL entry on the specified object.

> Body parameter

```json
{
  "bucket": "string",
  "domain": "string",
  "email": "string",
  "entity": "string",
  "entityId": "string",
  "etag": "string",
  "generation": "string",
  "id": "string",
  "kind": "storage#objectAccessControl",
  "object": "string",
  "projectTeam": {
    "projectNumber": "string",
    "team": "string"
  },
  "role": "string",
  "selfLink": "string"
}
```

<h3 id="storageobjectaccesscontrolsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket|path|string|true|Name of a bucket.|
|object|path|string|true|Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.|
|entity|path|string|true|The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.|
|generation|query|string|false|If present, selects a specific revision of this object (as opposed to the latest version, the default).|
|userProject|query|string|false|The project to be billed for this request. Required for Requester Pays buckets.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[ObjectAccessControl](#schemaobjectaccesscontrol)|false|none|
|» bucket|body|string|false|The name of the bucket.|
|» domain|body|string|false|The domain associated with the entity, if any.|
|» email|body|string|false|The email address associated with the entity, if any.|
|» entity|body|string|false|The entity holding the permission, in one of the following forms: <br>- user-userId <br>- user-email <br>- group-groupId <br>- group-email <br>- domain-domain <br>- project-team-projectId <br>- allUsers <br>- allAuthenticatedUsers Examples: <br>- The user liz@example.com would be user-liz@example.com. <br>- The group example@googlegroups.com would be group-example@googlegroups.com. <br>- To refer to all members of the Google Apps for Business domain example.com, the entity would be domain-example.com.|
|» entityId|body|string|false|The ID for the entity, if any.|
|» etag|body|string|false|HTTP 1.1 Entity tag for the access-control entry.|
|» generation|body|string(int64)|false|The content generation of the object, if applied to an object.|
|» id|body|string|false|The ID of the access-control entry.|
|» kind|body|string|false|The kind of item this is. For object access control entries, this is always storage#objectAccessControl.|
|» object|body|string|false|The name of the object, if applied to an object.|
|» projectTeam|body|object|false|The project team associated with the entity, if any.|
|» » projectNumber|body|string|false|The project number.|
|» » team|body|string|false|The team.|
|» role|body|string|false|The access permission for the entity.|
|» selfLink|body|string|false|The link to this access-control entry.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "bucket": "string",
  "domain": "string",
  "email": "string",
  "entity": "string",
  "entityId": "string",
  "etag": "string",
  "generation": "string",
  "id": "string",
  "kind": "storage#objectAccessControl",
  "object": "string",
  "projectTeam": {
    "projectNumber": "string",
    "team": "string"
  },
  "role": "string",
  "selfLink": "string"
}
```

<h3 id="storageobjectaccesscontrolsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ObjectAccessControl](#schemaobjectaccesscontrol)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control )
</aside>

## storage.objectAccessControls.delete

<a id="opIdstorage.objectAccessControls.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/b/string/o/string/acl/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /b/{bucket}/o/{object}/acl/{entity}`

Permanently deletes the ACL entry for the specified entity on the specified object.

<h3 id="storageobjectaccesscontrolsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket|path|string|true|Name of a bucket.|
|object|path|string|true|Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.|
|entity|path|string|true|The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.|
|generation|query|string|false|If present, selects a specific revision of this object (as opposed to the latest version, the default).|
|userProject|query|string|false|The project to be billed for this request. Required for Requester Pays buckets.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

<h3 id="storageobjectaccesscontrolsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control )
</aside>

## storage.objectAccessControls.patch

<a id="opIdstorage.objectAccessControls.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/b/string/o/string/acl/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "bucket": "string",
    "domain": "string",
    "email": "string",
    "entity": "string",
    "entityId": "string",
    "etag": "string",
    "generation": "string",
    "id": "string",
    "kind": "storage#objectAccessControl",
    "object": "string",
    "projectTeam": {
      "projectNumber": "string",
      "team": "string"
    },
    "role": "string",
    "selfLink": "string"
  }'
```

`PATCH /b/{bucket}/o/{object}/acl/{entity}`

Patches an ACL entry on the specified object.

> Body parameter

```json
{
  "bucket": "string",
  "domain": "string",
  "email": "string",
  "entity": "string",
  "entityId": "string",
  "etag": "string",
  "generation": "string",
  "id": "string",
  "kind": "storage#objectAccessControl",
  "object": "string",
  "projectTeam": {
    "projectNumber": "string",
    "team": "string"
  },
  "role": "string",
  "selfLink": "string"
}
```

<h3 id="storageobjectaccesscontrolspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket|path|string|true|Name of a bucket.|
|object|path|string|true|Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.|
|entity|path|string|true|The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.|
|generation|query|string|false|If present, selects a specific revision of this object (as opposed to the latest version, the default).|
|userProject|query|string|false|The project to be billed for this request. Required for Requester Pays buckets.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[ObjectAccessControl](#schemaobjectaccesscontrol)|false|none|
|» bucket|body|string|false|The name of the bucket.|
|» domain|body|string|false|The domain associated with the entity, if any.|
|» email|body|string|false|The email address associated with the entity, if any.|
|» entity|body|string|false|The entity holding the permission, in one of the following forms: <br>- user-userId <br>- user-email <br>- group-groupId <br>- group-email <br>- domain-domain <br>- project-team-projectId <br>- allUsers <br>- allAuthenticatedUsers Examples: <br>- The user liz@example.com would be user-liz@example.com. <br>- The group example@googlegroups.com would be group-example@googlegroups.com. <br>- To refer to all members of the Google Apps for Business domain example.com, the entity would be domain-example.com.|
|» entityId|body|string|false|The ID for the entity, if any.|
|» etag|body|string|false|HTTP 1.1 Entity tag for the access-control entry.|
|» generation|body|string(int64)|false|The content generation of the object, if applied to an object.|
|» id|body|string|false|The ID of the access-control entry.|
|» kind|body|string|false|The kind of item this is. For object access control entries, this is always storage#objectAccessControl.|
|» object|body|string|false|The name of the object, if applied to an object.|
|» projectTeam|body|object|false|The project team associated with the entity, if any.|
|» » projectNumber|body|string|false|The project number.|
|» » team|body|string|false|The team.|
|» role|body|string|false|The access permission for the entity.|
|» selfLink|body|string|false|The link to this access-control entry.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "bucket": "string",
  "domain": "string",
  "email": "string",
  "entity": "string",
  "entityId": "string",
  "etag": "string",
  "generation": "string",
  "id": "string",
  "kind": "storage#objectAccessControl",
  "object": "string",
  "projectTeam": {
    "projectNumber": "string",
    "team": "string"
  },
  "role": "string",
  "selfLink": "string"
}
```

<h3 id="storageobjectaccesscontrolspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ObjectAccessControl](#schemaobjectaccesscontrol)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control )
</aside>

<h1 id="cloud-storage-json-api-objects">objects</h1>

## storage.objects.list

<a id="opIdstorage.objects.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/b/string/o \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /b/{bucket}/o`

Retrieves a list of objects matching the criteria.

<h3 id="storageobjectslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket|path|string|true|Name of the bucket in which to look for objects.|
|delimiter|query|string|false|Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted.|
|endOffset|query|string|false|Filter results to objects whose names are lexicographically before endOffset. If startOffset is also set, the objects listed will have names between startOffset (inclusive) and endOffset (exclusive).|
|includeTrailingDelimiter|query|boolean|false|If true, objects that end in exactly one instance of delimiter will have their metadata included in items in addition to prefixes.|
|matchGlob|query|string|false|Filter results to objects and prefixes that match this glob pattern.|
|maxResults|query|integer|false|Maximum number of items plus prefixes to return in a single page of responses. As duplicate prefixes are omitted, fewer total results may be returned than requested. The service will use this parameter or 1,000 items, whichever is smaller.|
|pageToken|query|string|false|A previously-returned page token representing part of the larger set of results to view.|
|prefix|query|string|false|Filter results to objects whose names begin with this prefix.|
|projection|query|string|false|Set of properties to return. Defaults to noAcl.|
|startOffset|query|string|false|Filter results to objects whose names are lexicographically equal to or after startOffset. If endOffset is also set, the objects listed will have names between startOffset (inclusive) and endOffset (exclusive).|
|userProject|query|string|false|The project to be billed for this request. Required for Requester Pays buckets.|
|versions|query|boolean|false|If true, lists all versions of an object as distinct results. The default is false. For more information, see Object Versioning.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|projection|full|
|projection|noAcl|
|alt|json|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "acl": [
        {
          "bucket": "string",
          "domain": "string",
          "email": "string",
          "entity": "string",
          "entityId": "string",
          "etag": "string",
          "generation": "string",
          "id": "string",
          "kind": "storage#objectAccessControl",
          "object": "string",
          "projectTeam": {
            "projectNumber": "string",
            "team": "string"
          },
          "role": "string",
          "selfLink": "string"
        }
      ],
      "bucket": "string",
      "cacheControl": "string",
      "componentCount": 0,
      "contentDisposition": "string",
      "contentEncoding": "string",
      "contentLanguage": "string",
      "contentType": "string",
      "crc32c": "string",
      "customTime": "1970-01-01T00:00:00Z",
      "customerEncryption": {
        "encryptionAlgorithm": "string",
        "keySha256": "string"
      },
      "etag": "string",
      "eventBasedHold": true,
      "generation": "string",
      "id": "string",
      "kind": "storage#object",
      "kmsKeyName": "string",
      "md5Hash": "string",
      "mediaLink": "string",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "metageneration": "string",
      "name": "string",
      "owner": {
        "entity": "string",
        "entityId": "string"
      },
      "retentionExpirationTime": "1970-01-01T00:00:00Z",
      "selfLink": "string",
      "size": "string",
      "storageClass": "string",
      "temporaryHold": true,
      "timeCreated": "1970-01-01T00:00:00Z",
      "timeDeleted": "1970-01-01T00:00:00Z",
      "timeStorageClassUpdated": "1970-01-01T00:00:00Z",
      "updated": "1970-01-01T00:00:00Z"
    }
  ],
  "kind": "storage#objects",
  "nextPageToken": "string",
  "prefixes": [
    "string"
  ]
}
```

<h3 id="storageobjectslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Objects](#schemaobjects)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.read_only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.read_only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.read_write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.read_write )
</aside>

## storage.objects.insert

<a id="opIdstorage.objects.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/b/string/o \
  -X POST \
  -H 'Content-Type: application/octet-stream' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{"acl":[{"bucket":"string","domain":"string","email":"string","entity":"string","entityId":"string","etag":"string","generation":"string","id":"string","kind":"storage#objectAccessControl","object":"string","projectTeam":{"projectNumber":"string","team":"string"},"role":"string","selfLink":"string"}],"bucket":"string","cacheControl":"string","componentCount":0,"contentDisposition":"string","contentEncoding":"string","contentLanguage":"string","contentType":"string","crc32c":"string","customTime":"1970-01-01T00:00:00Z","customerEncryption":{"encryptionAlgorithm":"string","keySha256":"string"},"etag":"string","eventBasedHold":true,"generation":"string","id":"string","kind":"storage#object","kmsKeyName":"string","md5Hash":"string","mediaLink":"string","metadata":{"property1":"string","property2":"string"},"metageneration":"string","name":"string","owner":{"entity":"string","entityId":"string"},"retentionExpirationTime":"1970-01-01T00:00:00Z","selfLink":"string","size":"string","storageClass":"string","temporaryHold":true,"timeCreated":"1970-01-01T00:00:00Z","timeDeleted":"1970-01-01T00:00:00Z","timeStorageClassUpdated":"1970-01-01T00:00:00Z","updated":"1970-01-01T00:00:00Z"}'
```

`POST /b/{bucket}/o`

Stores a new object and metadata.

> Body parameter

```json
{
  "acl": [
    {
      "bucket": "string",
      "domain": "string",
      "email": "string",
      "entity": "string",
      "entityId": "string",
      "etag": "string",
      "generation": "string",
      "id": "string",
      "kind": "storage#objectAccessControl",
      "object": "string",
      "projectTeam": {
        "projectNumber": "string",
        "team": "string"
      },
      "role": "string",
      "selfLink": "string"
    }
  ],
  "bucket": "string",
  "cacheControl": "string",
  "componentCount": 0,
  "contentDisposition": "string",
  "contentEncoding": "string",
  "contentLanguage": "string",
  "contentType": "string",
  "crc32c": "string",
  "customTime": "1970-01-01T00:00:00Z",
  "customerEncryption": {
    "encryptionAlgorithm": "string",
    "keySha256": "string"
  },
  "etag": "string",
  "eventBasedHold": true,
  "generation": "string",
  "id": "string",
  "kind": "storage#object",
  "kmsKeyName": "string",
  "md5Hash": "string",
  "mediaLink": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "metageneration": "string",
  "name": "string",
  "owner": {
    "entity": "string",
    "entityId": "string"
  },
  "retentionExpirationTime": "1970-01-01T00:00:00Z",
  "selfLink": "string",
  "size": "string",
  "storageClass": "string",
  "temporaryHold": true,
  "timeCreated": "1970-01-01T00:00:00Z",
  "timeDeleted": "1970-01-01T00:00:00Z",
  "timeStorageClassUpdated": "1970-01-01T00:00:00Z",
  "updated": "1970-01-01T00:00:00Z"
}
```

<h3 id="storageobjectsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket|path|string|true|Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.|
|contentEncoding|query|string|false|If set, sets the contentEncoding property of the final object to this value. Setting this parameter is equivalent to setting the contentEncoding metadata property. This can be useful when uploading an object with uploadType=media to indicate the encoding of the content being uploaded.|
|ifGenerationMatch|query|string|false|Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.|
|ifGenerationNotMatch|query|string|false|Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.|
|ifMetagenerationMatch|query|string|false|Makes the operation conditional on whether the object's current metageneration matches the given value.|
|ifMetagenerationNotMatch|query|string|false|Makes the operation conditional on whether the object's current metageneration does not match the given value.|
|kmsKeyName|query|string|false|Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any.|
|name|query|string|false|Name of the object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.|
|predefinedAcl|query|string|false|Apply a predefined set of access controls to this object.|
|projection|query|string|false|Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.|
|userProject|query|string|false|The project to be billed for this request. Required for Requester Pays buckets.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Object](#schemaobject)|false|none|
|» acl|body|[[ObjectAccessControl](#schemaobjectaccesscontrol)]|false|Access controls on the object.|
|» bucket|body|string|false|The name of the bucket containing this object.|
|» cacheControl|body|string|false|Cache-Control directive for the object data. If omitted, and the object is accessible to all anonymous users, the default will be public, max-age=3600.|
|» componentCount|body|integer(int32)|false|Number of underlying components that make up this object. Components are accumulated by compose operations.|
|» contentDisposition|body|string|false|Content-Disposition of the object data.|
|» contentEncoding|body|string|false|Content-Encoding of the object data.|
|» contentLanguage|body|string|false|Content-Language of the object data.|
|» contentType|body|string|false|Content-Type of the object data. If an object is stored without a Content-Type, it is served as application/octet-stream.|
|» crc32c|body|string|false|CRC32c checksum, as described in RFC 4960, Appendix B; encoded using base64 in big-endian byte order. For more information about using the CRC32c checksum, see Hashes and ETags: Best Practices.|
|» customTime|body|string(date-time)|false|A timestamp in RFC 3339 format specified by the user for an object.|
|» customerEncryption|body|object|false|Metadata of customer-supplied encryption key, if the object is encrypted by such a key.|
|» » encryptionAlgorithm|body|string|false|The encryption algorithm.|
|» » keySha256|body|string|false|SHA256 hash value of the encryption key.|
|» etag|body|string|false|HTTP 1.1 Entity tag for the object.|
|» eventBasedHold|body|boolean|false|Whether an object is under event-based hold. Event-based hold is a way to retain objects until an event occurs, which is signified by the hold's release (i.e. this value is set to false). After being released (set to false), such objects will be subject to bucket-level retention (if any). One sample use case of this flag is for banks to hold loan documents for at least 3 years after loan is paid in full. Here, bucket-level retention is 3 years and the event is the loan being paid in full. In this example, these objects will be held intact for any number of years until the event has occurred (event-based hold on the object is released) and then 3 more years after that. That means retention duration of the objects begins from the moment event-based hold transitioned from true to false.|
|» generation|body|string(int64)|false|The content generation of this object. Used for object versioning.|
|» id|body|string|false|The ID of the object, including the bucket name, object name, and generation number.|
|» kind|body|string|false|The kind of item this is. For objects, this is always storage#object.|
|» kmsKeyName|body|string|false|Not currently supported. Specifying the parameter causes the request to fail with status code 400 - Bad Request.|
|» md5Hash|body|string|false|MD5 hash of the data; encoded using base64. For more information about using the MD5 hash, see Hashes and ETags: Best Practices.|
|» mediaLink|body|string|false|Media download link.|
|» metadata|body|object|false|User-provided metadata, in key/value pairs.|
|» » **additionalProperties**|body|string|false|An individual metadata entry.|
|» metageneration|body|string(int64)|false|The version of the metadata for this object at this generation. Used for preconditions and for detecting changes in metadata. A metageneration number is only meaningful in the context of a particular generation of a particular object.|
|» name|body|string|false|The name of the object. Required if not specified by URL parameter.|
|» owner|body|object|false|The owner of the object. This will always be the uploader of the object.|
|» » entity|body|string|false|The entity, in the form user-userId.|
|» » entityId|body|string|false|The ID for the entity.|
|» retentionExpirationTime|body|string(date-time)|false|A server-determined value that specifies the earliest time that the object's retention period expires. This value is in RFC 3339 format. Note 1: This field is not provided for objects with an active event-based hold, since retention expiration is unknown until the hold is removed. Note 2: This value can be provided even when temporary hold is set (so that the user can reason about policy without having to first unset the temporary hold).|
|» selfLink|body|string|false|The link to this object.|
|» size|body|string(uint64)|false|Content-Length of the data in bytes.|
|» storageClass|body|string|false|Storage class of the object.|
|» temporaryHold|body|boolean|false|Whether an object is under temporary hold. While this flag is set to true, the object is protected against deletion and overwrites. A common use case of this flag is regulatory investigations where objects need to be retained while the investigation is ongoing. Note that unlike event-based hold, temporary hold does not impact retention expiration time of an object.|
|» timeCreated|body|string(date-time)|false|The creation time of the object in RFC 3339 format.|
|» timeDeleted|body|string(date-time)|false|The deletion time of the object in RFC 3339 format. Will be returned if and only if this version of the object has been deleted.|
|» timeStorageClassUpdated|body|string(date-time)|false|The time at which the object's storage class was last changed. When the object is initially created, it will be set to timeCreated.|
|» updated|body|string(date-time)|false|The modification time of the object metadata in RFC 3339 format. Set initially to object creation time and then updated whenever any metadata of the object changes. This includes changes made by a requester, such as modifying custom metadata, as well as changes made by Cloud Storage on behalf of a requester, such as changing the storage class based on an Object Lifecycle Configuration.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|predefinedAcl|authenticatedRead|
|predefinedAcl|bucketOwnerFullControl|
|predefinedAcl|bucketOwnerRead|
|predefinedAcl|private|
|predefinedAcl|projectPrivate|
|predefinedAcl|publicRead|
|projection|full|
|projection|noAcl|
|alt|json|

> Example responses

> 200 Response

```json
{
  "acl": [
    {
      "bucket": "string",
      "domain": "string",
      "email": "string",
      "entity": "string",
      "entityId": "string",
      "etag": "string",
      "generation": "string",
      "id": "string",
      "kind": "storage#objectAccessControl",
      "object": "string",
      "projectTeam": {
        "projectNumber": "string",
        "team": "string"
      },
      "role": "string",
      "selfLink": "string"
    }
  ],
  "bucket": "string",
  "cacheControl": "string",
  "componentCount": 0,
  "contentDisposition": "string",
  "contentEncoding": "string",
  "contentLanguage": "string",
  "contentType": "string",
  "crc32c": "string",
  "customTime": "1970-01-01T00:00:00Z",
  "customerEncryption": {
    "encryptionAlgorithm": "string",
    "keySha256": "string"
  },
  "etag": "string",
  "eventBasedHold": true,
  "generation": "string",
  "id": "string",
  "kind": "storage#object",
  "kmsKeyName": "string",
  "md5Hash": "string",
  "mediaLink": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "metageneration": "string",
  "name": "string",
  "owner": {
    "entity": "string",
    "entityId": "string"
  },
  "retentionExpirationTime": "1970-01-01T00:00:00Z",
  "selfLink": "string",
  "size": "string",
  "storageClass": "string",
  "temporaryHold": true,
  "timeCreated": "1970-01-01T00:00:00Z",
  "timeDeleted": "1970-01-01T00:00:00Z",
  "timeStorageClassUpdated": "1970-01-01T00:00:00Z",
  "updated": "1970-01-01T00:00:00Z"
}
```

<h3 id="storageobjectsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Object](#schemaobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.read_write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.read_write )
</aside>

## storage.objects.watchAll

<a id="opIdstorage.objects.watchAll"></a>

> Code samples

```bash
curl https://www.googleapis.com/b/string/o/watch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "address": "string",
    "expiration": "string",
    "id": "string",
    "kind": "api#channel",
    "params": {
      "property1": "string",
      "property2": "string"
    },
    "payload": true,
    "resourceId": "string",
    "resourceUri": "string",
    "token": "string",
    "type": "string"
  }'
```

`POST /b/{bucket}/o/watch`

Watch for changes on all objects in a bucket.

> Body parameter

```json
{
  "address": "string",
  "expiration": "string",
  "id": "string",
  "kind": "api#channel",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "payload": true,
  "resourceId": "string",
  "resourceUri": "string",
  "token": "string",
  "type": "string"
}
```

<h3 id="storageobjectswatchall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket|path|string|true|Name of the bucket in which to look for objects.|
|delimiter|query|string|false|Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted.|
|endOffset|query|string|false|Filter results to objects whose names are lexicographically before endOffset. If startOffset is also set, the objects listed will have names between startOffset (inclusive) and endOffset (exclusive).|
|includeTrailingDelimiter|query|boolean|false|If true, objects that end in exactly one instance of delimiter will have their metadata included in items in addition to prefixes.|
|maxResults|query|integer|false|Maximum number of items plus prefixes to return in a single page of responses. As duplicate prefixes are omitted, fewer total results may be returned than requested. The service will use this parameter or 1,000 items, whichever is smaller.|
|pageToken|query|string|false|A previously-returned page token representing part of the larger set of results to view.|
|prefix|query|string|false|Filter results to objects whose names begin with this prefix.|
|projection|query|string|false|Set of properties to return. Defaults to noAcl.|
|startOffset|query|string|false|Filter results to objects whose names are lexicographically equal to or after startOffset. If endOffset is also set, the objects listed will have names between startOffset (inclusive) and endOffset (exclusive).|
|userProject|query|string|false|The project to be billed for this request. Required for Requester Pays buckets.|
|versions|query|boolean|false|If true, lists all versions of an object as distinct results. The default is false. For more information, see Object Versioning.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Channel](#schemachannel)|false|none|
|» address|body|string|false|The address where notifications are delivered for this channel.|
|» expiration|body|string(int64)|false|Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.|
|» id|body|string|false|A UUID or similar unique string that identifies this channel.|
|» kind|body|string|false|Identifies this as a notification channel used to watch for changes to a resource, which is "api#channel".|
|» params|body|object|false|Additional parameters controlling delivery channel behavior. Optional.|
|» » **additionalProperties**|body|string|false|Declares a new parameter by name.|
|» payload|body|boolean|false|A Boolean value to indicate whether payload is wanted. Optional.|
|» resourceId|body|string|false|An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.|
|» resourceUri|body|string|false|A version-specific identifier for the watched resource.|
|» token|body|string|false|An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.|
|» type|body|string|false|The type of delivery mechanism used for this channel.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|projection|full|
|projection|noAcl|
|alt|json|

> Example responses

> 200 Response

```json
{
  "address": "string",
  "expiration": "string",
  "id": "string",
  "kind": "api#channel",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "payload": true,
  "resourceId": "string",
  "resourceUri": "string",
  "token": "string",
  "type": "string"
}
```

<h3 id="storageobjectswatchall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Channel](#schemachannel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.read_only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.read_only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.read_write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.read_write )
</aside>

## storage.objects.get

<a id="opIdstorage.objects.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/b/string/o/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /b/{bucket}/o/{object}`

Retrieves an object or its metadata.

<h3 id="storageobjectsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket|path|string|true|Name of the bucket in which the object resides.|
|object|path|string|true|Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.|
|generation|query|string|false|If present, selects a specific revision of this object (as opposed to the latest version, the default).|
|ifGenerationMatch|query|string|false|Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.|
|ifGenerationNotMatch|query|string|false|Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.|
|ifMetagenerationMatch|query|string|false|Makes the operation conditional on whether the object's current metageneration matches the given value.|
|ifMetagenerationNotMatch|query|string|false|Makes the operation conditional on whether the object's current metageneration does not match the given value.|
|projection|query|string|false|Set of properties to return. Defaults to noAcl.|
|userProject|query|string|false|The project to be billed for this request. Required for Requester Pays buckets.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|projection|full|
|projection|noAcl|
|alt|json|

> Example responses

> 200 Response

```json
{
  "acl": [
    {
      "bucket": "string",
      "domain": "string",
      "email": "string",
      "entity": "string",
      "entityId": "string",
      "etag": "string",
      "generation": "string",
      "id": "string",
      "kind": "storage#objectAccessControl",
      "object": "string",
      "projectTeam": {
        "projectNumber": "string",
        "team": "string"
      },
      "role": "string",
      "selfLink": "string"
    }
  ],
  "bucket": "string",
  "cacheControl": "string",
  "componentCount": 0,
  "contentDisposition": "string",
  "contentEncoding": "string",
  "contentLanguage": "string",
  "contentType": "string",
  "crc32c": "string",
  "customTime": "1970-01-01T00:00:00Z",
  "customerEncryption": {
    "encryptionAlgorithm": "string",
    "keySha256": "string"
  },
  "etag": "string",
  "eventBasedHold": true,
  "generation": "string",
  "id": "string",
  "kind": "storage#object",
  "kmsKeyName": "string",
  "md5Hash": "string",
  "mediaLink": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "metageneration": "string",
  "name": "string",
  "owner": {
    "entity": "string",
    "entityId": "string"
  },
  "retentionExpirationTime": "1970-01-01T00:00:00Z",
  "selfLink": "string",
  "size": "string",
  "storageClass": "string",
  "temporaryHold": true,
  "timeCreated": "1970-01-01T00:00:00Z",
  "timeDeleted": "1970-01-01T00:00:00Z",
  "timeStorageClassUpdated": "1970-01-01T00:00:00Z",
  "updated": "1970-01-01T00:00:00Z"
}
```

<h3 id="storageobjectsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Object](#schemaobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.read_only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.read_only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.read_write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.read_write )
</aside>

## storage.objects.update

<a id="opIdstorage.objects.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/b/string/o/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "acl": [
      {
        "bucket": "string",
        "domain": "string",
        "email": "string",
        "entity": "string",
        "entityId": "string",
        "etag": "string",
        "generation": "string",
        "id": "string",
        "kind": "storage#objectAccessControl",
        "object": "string",
        "projectTeam": {
          "projectNumber": "string",
          "team": "string"
        },
        "role": "string",
        "selfLink": "string"
      }
    ],
    "bucket": "string",
    "cacheControl": "string",
    "componentCount": 0,
    "contentDisposition": "string",
    "contentEncoding": "string",
    "contentLanguage": "string",
    "contentType": "string",
    "crc32c": "string",
    "customTime": "1970-01-01T00:00:00Z",
    "customerEncryption": {
      "encryptionAlgorithm": "string",
      "keySha256": "string"
    },
    "etag": "string",
    "eventBasedHold": true,
    "generation": "string",
    "id": "string",
    "kind": "storage#object",
    "kmsKeyName": "string",
    "md5Hash": "string",
    "mediaLink": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "metageneration": "string",
    "name": "string",
    "owner": {
      "entity": "string",
      "entityId": "string"
    },
    "retentionExpirationTime": "1970-01-01T00:00:00Z",
    "selfLink": "string",
    "size": "string",
    "storageClass": "string",
    "temporaryHold": true,
    "timeCreated": "1970-01-01T00:00:00Z",
    "timeDeleted": "1970-01-01T00:00:00Z",
    "timeStorageClassUpdated": "1970-01-01T00:00:00Z",
    "updated": "1970-01-01T00:00:00Z"
  }'
```

`PUT /b/{bucket}/o/{object}`

Updates an object's metadata.

> Body parameter

```json
{
  "acl": [
    {
      "bucket": "string",
      "domain": "string",
      "email": "string",
      "entity": "string",
      "entityId": "string",
      "etag": "string",
      "generation": "string",
      "id": "string",
      "kind": "storage#objectAccessControl",
      "object": "string",
      "projectTeam": {
        "projectNumber": "string",
        "team": "string"
      },
      "role": "string",
      "selfLink": "string"
    }
  ],
  "bucket": "string",
  "cacheControl": "string",
  "componentCount": 0,
  "contentDisposition": "string",
  "contentEncoding": "string",
  "contentLanguage": "string",
  "contentType": "string",
  "crc32c": "string",
  "customTime": "1970-01-01T00:00:00Z",
  "customerEncryption": {
    "encryptionAlgorithm": "string",
    "keySha256": "string"
  },
  "etag": "string",
  "eventBasedHold": true,
  "generation": "string",
  "id": "string",
  "kind": "storage#object",
  "kmsKeyName": "string",
  "md5Hash": "string",
  "mediaLink": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "metageneration": "string",
  "name": "string",
  "owner": {
    "entity": "string",
    "entityId": "string"
  },
  "retentionExpirationTime": "1970-01-01T00:00:00Z",
  "selfLink": "string",
  "size": "string",
  "storageClass": "string",
  "temporaryHold": true,
  "timeCreated": "1970-01-01T00:00:00Z",
  "timeDeleted": "1970-01-01T00:00:00Z",
  "timeStorageClassUpdated": "1970-01-01T00:00:00Z",
  "updated": "1970-01-01T00:00:00Z"
}
```

<h3 id="storageobjectsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket|path|string|true|Name of the bucket in which the object resides.|
|object|path|string|true|Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.|
|generation|query|string|false|If present, selects a specific revision of this object (as opposed to the latest version, the default).|
|ifGenerationMatch|query|string|false|Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.|
|ifGenerationNotMatch|query|string|false|Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.|
|ifMetagenerationMatch|query|string|false|Makes the operation conditional on whether the object's current metageneration matches the given value.|
|ifMetagenerationNotMatch|query|string|false|Makes the operation conditional on whether the object's current metageneration does not match the given value.|
|predefinedAcl|query|string|false|Apply a predefined set of access controls to this object.|
|projection|query|string|false|Set of properties to return. Defaults to full.|
|userProject|query|string|false|The project to be billed for this request. Required for Requester Pays buckets.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Object](#schemaobject)|false|none|
|» acl|body|[[ObjectAccessControl](#schemaobjectaccesscontrol)]|false|Access controls on the object.|
|» bucket|body|string|false|The name of the bucket containing this object.|
|» cacheControl|body|string|false|Cache-Control directive for the object data. If omitted, and the object is accessible to all anonymous users, the default will be public, max-age=3600.|
|» componentCount|body|integer(int32)|false|Number of underlying components that make up this object. Components are accumulated by compose operations.|
|» contentDisposition|body|string|false|Content-Disposition of the object data.|
|» contentEncoding|body|string|false|Content-Encoding of the object data.|
|» contentLanguage|body|string|false|Content-Language of the object data.|
|» contentType|body|string|false|Content-Type of the object data. If an object is stored without a Content-Type, it is served as application/octet-stream.|
|» crc32c|body|string|false|CRC32c checksum, as described in RFC 4960, Appendix B; encoded using base64 in big-endian byte order. For more information about using the CRC32c checksum, see Hashes and ETags: Best Practices.|
|» customTime|body|string(date-time)|false|A timestamp in RFC 3339 format specified by the user for an object.|
|» customerEncryption|body|object|false|Metadata of customer-supplied encryption key, if the object is encrypted by such a key.|
|» » encryptionAlgorithm|body|string|false|The encryption algorithm.|
|» » keySha256|body|string|false|SHA256 hash value of the encryption key.|
|» etag|body|string|false|HTTP 1.1 Entity tag for the object.|
|» eventBasedHold|body|boolean|false|Whether an object is under event-based hold. Event-based hold is a way to retain objects until an event occurs, which is signified by the hold's release (i.e. this value is set to false). After being released (set to false), such objects will be subject to bucket-level retention (if any). One sample use case of this flag is for banks to hold loan documents for at least 3 years after loan is paid in full. Here, bucket-level retention is 3 years and the event is the loan being paid in full. In this example, these objects will be held intact for any number of years until the event has occurred (event-based hold on the object is released) and then 3 more years after that. That means retention duration of the objects begins from the moment event-based hold transitioned from true to false.|
|» generation|body|string(int64)|false|The content generation of this object. Used for object versioning.|
|» id|body|string|false|The ID of the object, including the bucket name, object name, and generation number.|
|» kind|body|string|false|The kind of item this is. For objects, this is always storage#object.|
|» kmsKeyName|body|string|false|Not currently supported. Specifying the parameter causes the request to fail with status code 400 - Bad Request.|
|» md5Hash|body|string|false|MD5 hash of the data; encoded using base64. For more information about using the MD5 hash, see Hashes and ETags: Best Practices.|
|» mediaLink|body|string|false|Media download link.|
|» metadata|body|object|false|User-provided metadata, in key/value pairs.|
|» » **additionalProperties**|body|string|false|An individual metadata entry.|
|» metageneration|body|string(int64)|false|The version of the metadata for this object at this generation. Used for preconditions and for detecting changes in metadata. A metageneration number is only meaningful in the context of a particular generation of a particular object.|
|» name|body|string|false|The name of the object. Required if not specified by URL parameter.|
|» owner|body|object|false|The owner of the object. This will always be the uploader of the object.|
|» » entity|body|string|false|The entity, in the form user-userId.|
|» » entityId|body|string|false|The ID for the entity.|
|» retentionExpirationTime|body|string(date-time)|false|A server-determined value that specifies the earliest time that the object's retention period expires. This value is in RFC 3339 format. Note 1: This field is not provided for objects with an active event-based hold, since retention expiration is unknown until the hold is removed. Note 2: This value can be provided even when temporary hold is set (so that the user can reason about policy without having to first unset the temporary hold).|
|» selfLink|body|string|false|The link to this object.|
|» size|body|string(uint64)|false|Content-Length of the data in bytes.|
|» storageClass|body|string|false|Storage class of the object.|
|» temporaryHold|body|boolean|false|Whether an object is under temporary hold. While this flag is set to true, the object is protected against deletion and overwrites. A common use case of this flag is regulatory investigations where objects need to be retained while the investigation is ongoing. Note that unlike event-based hold, temporary hold does not impact retention expiration time of an object.|
|» timeCreated|body|string(date-time)|false|The creation time of the object in RFC 3339 format.|
|» timeDeleted|body|string(date-time)|false|The deletion time of the object in RFC 3339 format. Will be returned if and only if this version of the object has been deleted.|
|» timeStorageClassUpdated|body|string(date-time)|false|The time at which the object's storage class was last changed. When the object is initially created, it will be set to timeCreated.|
|» updated|body|string(date-time)|false|The modification time of the object metadata in RFC 3339 format. Set initially to object creation time and then updated whenever any metadata of the object changes. This includes changes made by a requester, such as modifying custom metadata, as well as changes made by Cloud Storage on behalf of a requester, such as changing the storage class based on an Object Lifecycle Configuration.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|predefinedAcl|authenticatedRead|
|predefinedAcl|bucketOwnerFullControl|
|predefinedAcl|bucketOwnerRead|
|predefinedAcl|private|
|predefinedAcl|projectPrivate|
|predefinedAcl|publicRead|
|projection|full|
|projection|noAcl|
|alt|json|

> Example responses

> 200 Response

```json
{
  "acl": [
    {
      "bucket": "string",
      "domain": "string",
      "email": "string",
      "entity": "string",
      "entityId": "string",
      "etag": "string",
      "generation": "string",
      "id": "string",
      "kind": "storage#objectAccessControl",
      "object": "string",
      "projectTeam": {
        "projectNumber": "string",
        "team": "string"
      },
      "role": "string",
      "selfLink": "string"
    }
  ],
  "bucket": "string",
  "cacheControl": "string",
  "componentCount": 0,
  "contentDisposition": "string",
  "contentEncoding": "string",
  "contentLanguage": "string",
  "contentType": "string",
  "crc32c": "string",
  "customTime": "1970-01-01T00:00:00Z",
  "customerEncryption": {
    "encryptionAlgorithm": "string",
    "keySha256": "string"
  },
  "etag": "string",
  "eventBasedHold": true,
  "generation": "string",
  "id": "string",
  "kind": "storage#object",
  "kmsKeyName": "string",
  "md5Hash": "string",
  "mediaLink": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "metageneration": "string",
  "name": "string",
  "owner": {
    "entity": "string",
    "entityId": "string"
  },
  "retentionExpirationTime": "1970-01-01T00:00:00Z",
  "selfLink": "string",
  "size": "string",
  "storageClass": "string",
  "temporaryHold": true,
  "timeCreated": "1970-01-01T00:00:00Z",
  "timeDeleted": "1970-01-01T00:00:00Z",
  "timeStorageClassUpdated": "1970-01-01T00:00:00Z",
  "updated": "1970-01-01T00:00:00Z"
}
```

<h3 id="storageobjectsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Object](#schemaobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control )
</aside>

## storage.objects.delete

<a id="opIdstorage.objects.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/b/string/o/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /b/{bucket}/o/{object}`

Deletes an object and its metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.

<h3 id="storageobjectsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket|path|string|true|Name of the bucket in which the object resides.|
|object|path|string|true|Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.|
|generation|query|string|false|If present, permanently deletes a specific revision of this object (as opposed to the latest version, the default).|
|ifGenerationMatch|query|string|false|Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.|
|ifGenerationNotMatch|query|string|false|Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.|
|ifMetagenerationMatch|query|string|false|Makes the operation conditional on whether the object's current metageneration matches the given value.|
|ifMetagenerationNotMatch|query|string|false|Makes the operation conditional on whether the object's current metageneration does not match the given value.|
|userProject|query|string|false|The project to be billed for this request. Required for Requester Pays buckets.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

<h3 id="storageobjectsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.read_write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.read_write )
</aside>

## storage.objects.patch

<a id="opIdstorage.objects.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/b/string/o/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "acl": [
      {
        "bucket": "string",
        "domain": "string",
        "email": "string",
        "entity": "string",
        "entityId": "string",
        "etag": "string",
        "generation": "string",
        "id": "string",
        "kind": "storage#objectAccessControl",
        "object": "string",
        "projectTeam": {
          "projectNumber": "string",
          "team": "string"
        },
        "role": "string",
        "selfLink": "string"
      }
    ],
    "bucket": "string",
    "cacheControl": "string",
    "componentCount": 0,
    "contentDisposition": "string",
    "contentEncoding": "string",
    "contentLanguage": "string",
    "contentType": "string",
    "crc32c": "string",
    "customTime": "1970-01-01T00:00:00Z",
    "customerEncryption": {
      "encryptionAlgorithm": "string",
      "keySha256": "string"
    },
    "etag": "string",
    "eventBasedHold": true,
    "generation": "string",
    "id": "string",
    "kind": "storage#object",
    "kmsKeyName": "string",
    "md5Hash": "string",
    "mediaLink": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "metageneration": "string",
    "name": "string",
    "owner": {
      "entity": "string",
      "entityId": "string"
    },
    "retentionExpirationTime": "1970-01-01T00:00:00Z",
    "selfLink": "string",
    "size": "string",
    "storageClass": "string",
    "temporaryHold": true,
    "timeCreated": "1970-01-01T00:00:00Z",
    "timeDeleted": "1970-01-01T00:00:00Z",
    "timeStorageClassUpdated": "1970-01-01T00:00:00Z",
    "updated": "1970-01-01T00:00:00Z"
  }'
```

`PATCH /b/{bucket}/o/{object}`

Patches an object's metadata.

> Body parameter

```json
{
  "acl": [
    {
      "bucket": "string",
      "domain": "string",
      "email": "string",
      "entity": "string",
      "entityId": "string",
      "etag": "string",
      "generation": "string",
      "id": "string",
      "kind": "storage#objectAccessControl",
      "object": "string",
      "projectTeam": {
        "projectNumber": "string",
        "team": "string"
      },
      "role": "string",
      "selfLink": "string"
    }
  ],
  "bucket": "string",
  "cacheControl": "string",
  "componentCount": 0,
  "contentDisposition": "string",
  "contentEncoding": "string",
  "contentLanguage": "string",
  "contentType": "string",
  "crc32c": "string",
  "customTime": "1970-01-01T00:00:00Z",
  "customerEncryption": {
    "encryptionAlgorithm": "string",
    "keySha256": "string"
  },
  "etag": "string",
  "eventBasedHold": true,
  "generation": "string",
  "id": "string",
  "kind": "storage#object",
  "kmsKeyName": "string",
  "md5Hash": "string",
  "mediaLink": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "metageneration": "string",
  "name": "string",
  "owner": {
    "entity": "string",
    "entityId": "string"
  },
  "retentionExpirationTime": "1970-01-01T00:00:00Z",
  "selfLink": "string",
  "size": "string",
  "storageClass": "string",
  "temporaryHold": true,
  "timeCreated": "1970-01-01T00:00:00Z",
  "timeDeleted": "1970-01-01T00:00:00Z",
  "timeStorageClassUpdated": "1970-01-01T00:00:00Z",
  "updated": "1970-01-01T00:00:00Z"
}
```

<h3 id="storageobjectspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket|path|string|true|Name of the bucket in which the object resides.|
|object|path|string|true|Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.|
|generation|query|string|false|If present, selects a specific revision of this object (as opposed to the latest version, the default).|
|ifGenerationMatch|query|string|false|Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.|
|ifGenerationNotMatch|query|string|false|Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.|
|ifMetagenerationMatch|query|string|false|Makes the operation conditional on whether the object's current metageneration matches the given value.|
|ifMetagenerationNotMatch|query|string|false|Makes the operation conditional on whether the object's current metageneration does not match the given value.|
|predefinedAcl|query|string|false|Apply a predefined set of access controls to this object.|
|projection|query|string|false|Set of properties to return. Defaults to full.|
|userProject|query|string|false|The project to be billed for this request, for Requester Pays buckets.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Object](#schemaobject)|false|none|
|» acl|body|[[ObjectAccessControl](#schemaobjectaccesscontrol)]|false|Access controls on the object.|
|» bucket|body|string|false|The name of the bucket containing this object.|
|» cacheControl|body|string|false|Cache-Control directive for the object data. If omitted, and the object is accessible to all anonymous users, the default will be public, max-age=3600.|
|» componentCount|body|integer(int32)|false|Number of underlying components that make up this object. Components are accumulated by compose operations.|
|» contentDisposition|body|string|false|Content-Disposition of the object data.|
|» contentEncoding|body|string|false|Content-Encoding of the object data.|
|» contentLanguage|body|string|false|Content-Language of the object data.|
|» contentType|body|string|false|Content-Type of the object data. If an object is stored without a Content-Type, it is served as application/octet-stream.|
|» crc32c|body|string|false|CRC32c checksum, as described in RFC 4960, Appendix B; encoded using base64 in big-endian byte order. For more information about using the CRC32c checksum, see Hashes and ETags: Best Practices.|
|» customTime|body|string(date-time)|false|A timestamp in RFC 3339 format specified by the user for an object.|
|» customerEncryption|body|object|false|Metadata of customer-supplied encryption key, if the object is encrypted by such a key.|
|» » encryptionAlgorithm|body|string|false|The encryption algorithm.|
|» » keySha256|body|string|false|SHA256 hash value of the encryption key.|
|» etag|body|string|false|HTTP 1.1 Entity tag for the object.|
|» eventBasedHold|body|boolean|false|Whether an object is under event-based hold. Event-based hold is a way to retain objects until an event occurs, which is signified by the hold's release (i.e. this value is set to false). After being released (set to false), such objects will be subject to bucket-level retention (if any). One sample use case of this flag is for banks to hold loan documents for at least 3 years after loan is paid in full. Here, bucket-level retention is 3 years and the event is the loan being paid in full. In this example, these objects will be held intact for any number of years until the event has occurred (event-based hold on the object is released) and then 3 more years after that. That means retention duration of the objects begins from the moment event-based hold transitioned from true to false.|
|» generation|body|string(int64)|false|The content generation of this object. Used for object versioning.|
|» id|body|string|false|The ID of the object, including the bucket name, object name, and generation number.|
|» kind|body|string|false|The kind of item this is. For objects, this is always storage#object.|
|» kmsKeyName|body|string|false|Not currently supported. Specifying the parameter causes the request to fail with status code 400 - Bad Request.|
|» md5Hash|body|string|false|MD5 hash of the data; encoded using base64. For more information about using the MD5 hash, see Hashes and ETags: Best Practices.|
|» mediaLink|body|string|false|Media download link.|
|» metadata|body|object|false|User-provided metadata, in key/value pairs.|
|» » **additionalProperties**|body|string|false|An individual metadata entry.|
|» metageneration|body|string(int64)|false|The version of the metadata for this object at this generation. Used for preconditions and for detecting changes in metadata. A metageneration number is only meaningful in the context of a particular generation of a particular object.|
|» name|body|string|false|The name of the object. Required if not specified by URL parameter.|
|» owner|body|object|false|The owner of the object. This will always be the uploader of the object.|
|» » entity|body|string|false|The entity, in the form user-userId.|
|» » entityId|body|string|false|The ID for the entity.|
|» retentionExpirationTime|body|string(date-time)|false|A server-determined value that specifies the earliest time that the object's retention period expires. This value is in RFC 3339 format. Note 1: This field is not provided for objects with an active event-based hold, since retention expiration is unknown until the hold is removed. Note 2: This value can be provided even when temporary hold is set (so that the user can reason about policy without having to first unset the temporary hold).|
|» selfLink|body|string|false|The link to this object.|
|» size|body|string(uint64)|false|Content-Length of the data in bytes.|
|» storageClass|body|string|false|Storage class of the object.|
|» temporaryHold|body|boolean|false|Whether an object is under temporary hold. While this flag is set to true, the object is protected against deletion and overwrites. A common use case of this flag is regulatory investigations where objects need to be retained while the investigation is ongoing. Note that unlike event-based hold, temporary hold does not impact retention expiration time of an object.|
|» timeCreated|body|string(date-time)|false|The creation time of the object in RFC 3339 format.|
|» timeDeleted|body|string(date-time)|false|The deletion time of the object in RFC 3339 format. Will be returned if and only if this version of the object has been deleted.|
|» timeStorageClassUpdated|body|string(date-time)|false|The time at which the object's storage class was last changed. When the object is initially created, it will be set to timeCreated.|
|» updated|body|string(date-time)|false|The modification time of the object metadata in RFC 3339 format. Set initially to object creation time and then updated whenever any metadata of the object changes. This includes changes made by a requester, such as modifying custom metadata, as well as changes made by Cloud Storage on behalf of a requester, such as changing the storage class based on an Object Lifecycle Configuration.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|predefinedAcl|authenticatedRead|
|predefinedAcl|bucketOwnerFullControl|
|predefinedAcl|bucketOwnerRead|
|predefinedAcl|private|
|predefinedAcl|projectPrivate|
|predefinedAcl|publicRead|
|projection|full|
|projection|noAcl|
|alt|json|

> Example responses

> 200 Response

```json
{
  "acl": [
    {
      "bucket": "string",
      "domain": "string",
      "email": "string",
      "entity": "string",
      "entityId": "string",
      "etag": "string",
      "generation": "string",
      "id": "string",
      "kind": "storage#objectAccessControl",
      "object": "string",
      "projectTeam": {
        "projectNumber": "string",
        "team": "string"
      },
      "role": "string",
      "selfLink": "string"
    }
  ],
  "bucket": "string",
  "cacheControl": "string",
  "componentCount": 0,
  "contentDisposition": "string",
  "contentEncoding": "string",
  "contentLanguage": "string",
  "contentType": "string",
  "crc32c": "string",
  "customTime": "1970-01-01T00:00:00Z",
  "customerEncryption": {
    "encryptionAlgorithm": "string",
    "keySha256": "string"
  },
  "etag": "string",
  "eventBasedHold": true,
  "generation": "string",
  "id": "string",
  "kind": "storage#object",
  "kmsKeyName": "string",
  "md5Hash": "string",
  "mediaLink": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "metageneration": "string",
  "name": "string",
  "owner": {
    "entity": "string",
    "entityId": "string"
  },
  "retentionExpirationTime": "1970-01-01T00:00:00Z",
  "selfLink": "string",
  "size": "string",
  "storageClass": "string",
  "temporaryHold": true,
  "timeCreated": "1970-01-01T00:00:00Z",
  "timeDeleted": "1970-01-01T00:00:00Z",
  "timeStorageClassUpdated": "1970-01-01T00:00:00Z",
  "updated": "1970-01-01T00:00:00Z"
}
```

<h3 id="storageobjectspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Object](#schemaobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control )
</aside>

## storage.objects.getIamPolicy

<a id="opIdstorage.objects.getIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/b/string/o/string/iam \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /b/{bucket}/o/{object}/iam`

Returns an IAM policy for the specified object.

<h3 id="storageobjectsgetiampolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket|path|string|true|Name of the bucket in which the object resides.|
|object|path|string|true|Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.|
|generation|query|string|false|If present, selects a specific revision of this object (as opposed to the latest version, the default).|
|userProject|query|string|false|The project to be billed for this request. Required for Requester Pays buckets.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

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
  "kind": "storage#policy",
  "resourceId": "string",
  "version": 0
}
```

<h3 id="storageobjectsgetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.read_only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.read_only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.read_write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.read_write )
</aside>

## storage.objects.setIamPolicy

<a id="opIdstorage.objects.setIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/b/string/o/string/iam \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
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
    "kind": "storage#policy",
    "resourceId": "string",
    "version": 0
  }'
```

`PUT /b/{bucket}/o/{object}/iam`

Updates an IAM policy for the specified object.

> Body parameter

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
  "kind": "storage#policy",
  "resourceId": "string",
  "version": 0
}
```

<h3 id="storageobjectssetiampolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket|path|string|true|Name of the bucket in which the object resides.|
|object|path|string|true|Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.|
|generation|query|string|false|If present, selects a specific revision of this object (as opposed to the latest version, the default).|
|userProject|query|string|false|The project to be billed for this request. Required for Requester Pays buckets.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Policy](#schemapolicy)|false|none|
|» bindings|body|[object]|false|An association between a role, which comes with a set of permissions, and members who may assume that role.|
|» » condition|body|[Expr](#schemaexpr)|false|The condition that is associated with this binding. NOTE: an unsatisfied condition will not allow user access via current binding. Different bindings, including their conditions, are examined independently.|
|» » members|body|[string]|false|A collection of identifiers for members who may assume the provided role. Recognized identifiers are as follows:  <br>- allUsers — A special identifier that represents anyone on the internet; with or without a Google account.  <br>- allAuthenticatedUsers — A special identifier that represents anyone who is authenticated with a Google account or a service account.  <br>- user:emailid — An email address that represents a specific account. For example, user:alice@gmail.com or user:joe@example.com.  <br>- serviceAccount:emailid — An email address that represents a service account. For example,  serviceAccount:my-other-app@appspot.gserviceaccount.com .  <br>- group:emailid — An email address that represents a Google group. For example, group:admins@example.com.  <br>- domain:domain — A Google Apps domain name that represents all the users of that domain. For example, domain:google.com or domain:example.com.  <br>- projectOwner:projectid — Owners of the given project. For example, projectOwner:my-example-project  <br>- projectEditor:projectid — Editors of the given project. For example, projectEditor:my-example-project  <br>- projectViewer:projectid — Viewers of the given project. For example, projectViewer:my-example-project|
|» » role|body|string|false|The role to which members belong. Two types of roles are supported: new IAM roles, which grant permissions that do not map directly to those provided by ACLs, and legacy IAM roles, which do map directly to ACL permissions. All roles are of the format roles/storage.specificRole.<br>The new IAM roles are:  <br>- roles/storage.admin — Full control of Google Cloud Storage resources.  <br>- roles/storage.objectViewer — Read-Only access to Google Cloud Storage objects.  <br>- roles/storage.objectCreator — Access to create objects in Google Cloud Storage.  <br>- roles/storage.objectAdmin — Full control of Google Cloud Storage objects.   The legacy IAM roles are:  <br>- roles/storage.legacyObjectReader — Read-only access to objects without listing. Equivalent to an ACL entry on an object with the READER role.  <br>- roles/storage.legacyObjectOwner — Read/write access to existing objects without listing. Equivalent to an ACL entry on an object with the OWNER role.  <br>- roles/storage.legacyBucketReader — Read access to buckets with object listing. Equivalent to an ACL entry on a bucket with the READER role.  <br>- roles/storage.legacyBucketWriter — Read access to buckets with object listing/creation/deletion. Equivalent to an ACL entry on a bucket with the WRITER role.  <br>- roles/storage.legacyBucketOwner — Read and write access to existing buckets with object listing/creation/deletion. Equivalent to an ACL entry on a bucket with the OWNER role.|
|» etag|body|string(byte)|false|HTTP 1.1  Entity tag for the policy.|
|» kind|body|string|false|The kind of item this is. For policies, this is always storage#policy. This field is ignored on input.|
|» resourceId|body|string|false|The ID of the resource to which this policy belongs. Will be of the form projects/_/buckets/bucket for buckets, and projects/_/buckets/bucket/objects/object for objects. A specific generation may be specified by appending #generationNumber to the end of the object name, e.g. projects/_/buckets/my-bucket/objects/data.txt#17. The current generation can be denoted with #0. This field is ignored on input.|
|» version|body|integer(int32)|false|The IAM policy format version.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

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
  "kind": "storage#policy",
  "resourceId": "string",
  "version": 0
}
```

<h3 id="storageobjectssetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.read_write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.read_write )
</aside>

## storage.objects.testIamPermissions

<a id="opIdstorage.objects.testIamPermissions"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/b/string/o/string/iam/testPermissions?permissions=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /b/{bucket}/o/{object}/iam/testPermissions`

Tests a set of permissions on the given object to see which, if any, are held by the caller.

<h3 id="storageobjectstestiampermissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucket|path|string|true|Name of the bucket in which the object resides.|
|object|path|string|true|Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.|
|permissions|query|[string]|true|Permissions to test.|
|generation|query|string|false|If present, selects a specific revision of this object (as opposed to the latest version, the default).|
|userProject|query|string|false|The project to be billed for this request. Required for Requester Pays buckets.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "kind": "storage#testIamPermissionsResponse",
  "permissions": [
    "string"
  ]
}
```

<h3 id="storageobjectstestiampermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TestIamPermissionsResponse](#schematestiampermissionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.read_only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.read_only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.read_write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.read_write )
</aside>

## storage.objects.compose

<a id="opIdstorage.objects.compose"></a>

> Code samples

```bash
curl https://www.googleapis.com/b/string/o/string/compose \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "destination": {
      "acl": [
        {
          "bucket": "string",
          "domain": "string",
          "email": "string",
          "entity": "string",
          "entityId": "string",
          "etag": "string",
          "generation": "string",
          "id": "string",
          "kind": "storage#objectAccessControl",
          "object": "string",
          "projectTeam": {
            "projectNumber": "string",
            "team": "string"
          },
          "role": "string",
          "selfLink": "string"
        }
      ],
      "bucket": "string",
      "cacheControl": "string",
      "componentCount": 0,
      "contentDisposition": "string",
      "contentEncoding": "string",
      "contentLanguage": "string",
      "contentType": "string",
      "crc32c": "string",
      "customTime": "1970-01-01T00:00:00Z",
      "customerEncryption": {
        "encryptionAlgorithm": "string",
        "keySha256": "string"
      },
      "etag": "string",
      "eventBasedHold": true,
      "generation": "string",
      "id": "string",
      "kind": "storage#object",
      "kmsKeyName": "string",
      "md5Hash": "string",
      "mediaLink": "string",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "metageneration": "string",
      "name": "string",
      "owner": {
        "entity": "string",
        "entityId": "string"
      },
      "retentionExpirationTime": "1970-01-01T00:00:00Z",
      "selfLink": "string",
      "size": "string",
      "storageClass": "string",
      "temporaryHold": true,
      "timeCreated": "1970-01-01T00:00:00Z",
      "timeDeleted": "1970-01-01T00:00:00Z",
      "timeStorageClassUpdated": "1970-01-01T00:00:00Z",
      "updated": "1970-01-01T00:00:00Z"
    },
    "kind": "storage#composeRequest",
    "sourceObjects": [
      {
        "generation": "string",
        "name": "string",
        "objectPreconditions": {
          "ifGenerationMatch": "string"
        }
      }
    ]
  }'
```

`POST /b/{destinationBucket}/o/{destinationObject}/compose`

Concatenates a list of existing objects into a new object in the same bucket.

> Body parameter

```json
{
  "destination": {
    "acl": [
      {
        "bucket": "string",
        "domain": "string",
        "email": "string",
        "entity": "string",
        "entityId": "string",
        "etag": "string",
        "generation": "string",
        "id": "string",
        "kind": "storage#objectAccessControl",
        "object": "string",
        "projectTeam": {
          "projectNumber": "string",
          "team": "string"
        },
        "role": "string",
        "selfLink": "string"
      }
    ],
    "bucket": "string",
    "cacheControl": "string",
    "componentCount": 0,
    "contentDisposition": "string",
    "contentEncoding": "string",
    "contentLanguage": "string",
    "contentType": "string",
    "crc32c": "string",
    "customTime": "1970-01-01T00:00:00Z",
    "customerEncryption": {
      "encryptionAlgorithm": "string",
      "keySha256": "string"
    },
    "etag": "string",
    "eventBasedHold": true,
    "generation": "string",
    "id": "string",
    "kind": "storage#object",
    "kmsKeyName": "string",
    "md5Hash": "string",
    "mediaLink": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "metageneration": "string",
    "name": "string",
    "owner": {
      "entity": "string",
      "entityId": "string"
    },
    "retentionExpirationTime": "1970-01-01T00:00:00Z",
    "selfLink": "string",
    "size": "string",
    "storageClass": "string",
    "temporaryHold": true,
    "timeCreated": "1970-01-01T00:00:00Z",
    "timeDeleted": "1970-01-01T00:00:00Z",
    "timeStorageClassUpdated": "1970-01-01T00:00:00Z",
    "updated": "1970-01-01T00:00:00Z"
  },
  "kind": "storage#composeRequest",
  "sourceObjects": [
    {
      "generation": "string",
      "name": "string",
      "objectPreconditions": {
        "ifGenerationMatch": "string"
      }
    }
  ]
}
```

<h3 id="storageobjectscompose-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|destinationBucket|path|string|true|Name of the bucket containing the source objects. The destination object is stored in this bucket.|
|destinationObject|path|string|true|Name of the new object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.|
|destinationPredefinedAcl|query|string|false|Apply a predefined set of access controls to the destination object.|
|ifGenerationMatch|query|string|false|Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.|
|ifMetagenerationMatch|query|string|false|Makes the operation conditional on whether the object's current metageneration matches the given value.|
|kmsKeyName|query|string|false|Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any.|
|userProject|query|string|false|The project to be billed for this request. Required for Requester Pays buckets.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[ComposeRequest](#schemacomposerequest)|false|none|
|» destination|body|[Object](#schemaobject)|false|Properties of the resulting object.|
|» kind|body|string|false|The kind of item this is.|
|» sourceObjects|body|[object]|false|The list of source objects that will be concatenated into a single object.|
|» » generation|body|string(int64)|false|The generation of this object to use as the source.|
|» » name|body|string|false|The source object's name. All source objects must reside in the same bucket.|
|» » objectPreconditions|body|object|false|Conditions that must be met for this operation to execute.|
|» » » ifGenerationMatch|body|string(int64)|false|Only perform the composition if the generation of the source object that would be used matches this value. If this value and a generation are both specified, they must be the same value or the call will fail.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|destinationPredefinedAcl|authenticatedRead|
|destinationPredefinedAcl|bucketOwnerFullControl|
|destinationPredefinedAcl|bucketOwnerRead|
|destinationPredefinedAcl|private|
|destinationPredefinedAcl|projectPrivate|
|destinationPredefinedAcl|publicRead|
|alt|json|

> Example responses

> 200 Response

```json
{
  "acl": [
    {
      "bucket": "string",
      "domain": "string",
      "email": "string",
      "entity": "string",
      "entityId": "string",
      "etag": "string",
      "generation": "string",
      "id": "string",
      "kind": "storage#objectAccessControl",
      "object": "string",
      "projectTeam": {
        "projectNumber": "string",
        "team": "string"
      },
      "role": "string",
      "selfLink": "string"
    }
  ],
  "bucket": "string",
  "cacheControl": "string",
  "componentCount": 0,
  "contentDisposition": "string",
  "contentEncoding": "string",
  "contentLanguage": "string",
  "contentType": "string",
  "crc32c": "string",
  "customTime": "1970-01-01T00:00:00Z",
  "customerEncryption": {
    "encryptionAlgorithm": "string",
    "keySha256": "string"
  },
  "etag": "string",
  "eventBasedHold": true,
  "generation": "string",
  "id": "string",
  "kind": "storage#object",
  "kmsKeyName": "string",
  "md5Hash": "string",
  "mediaLink": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "metageneration": "string",
  "name": "string",
  "owner": {
    "entity": "string",
    "entityId": "string"
  },
  "retentionExpirationTime": "1970-01-01T00:00:00Z",
  "selfLink": "string",
  "size": "string",
  "storageClass": "string",
  "temporaryHold": true,
  "timeCreated": "1970-01-01T00:00:00Z",
  "timeDeleted": "1970-01-01T00:00:00Z",
  "timeStorageClassUpdated": "1970-01-01T00:00:00Z",
  "updated": "1970-01-01T00:00:00Z"
}
```

<h3 id="storageobjectscompose-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Object](#schemaobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.read_write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.read_write )
</aside>

## storage.objects.copy

<a id="opIdstorage.objects.copy"></a>

> Code samples

```bash
curl https://www.googleapis.com/b/string/o/string/copyTo/b/string/o/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "acl": [
      {
        "bucket": "string",
        "domain": "string",
        "email": "string",
        "entity": "string",
        "entityId": "string",
        "etag": "string",
        "generation": "string",
        "id": "string",
        "kind": "storage#objectAccessControl",
        "object": "string",
        "projectTeam": {
          "projectNumber": "string",
          "team": "string"
        },
        "role": "string",
        "selfLink": "string"
      }
    ],
    "bucket": "string",
    "cacheControl": "string",
    "componentCount": 0,
    "contentDisposition": "string",
    "contentEncoding": "string",
    "contentLanguage": "string",
    "contentType": "string",
    "crc32c": "string",
    "customTime": "1970-01-01T00:00:00Z",
    "customerEncryption": {
      "encryptionAlgorithm": "string",
      "keySha256": "string"
    },
    "etag": "string",
    "eventBasedHold": true,
    "generation": "string",
    "id": "string",
    "kind": "storage#object",
    "kmsKeyName": "string",
    "md5Hash": "string",
    "mediaLink": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "metageneration": "string",
    "name": "string",
    "owner": {
      "entity": "string",
      "entityId": "string"
    },
    "retentionExpirationTime": "1970-01-01T00:00:00Z",
    "selfLink": "string",
    "size": "string",
    "storageClass": "string",
    "temporaryHold": true,
    "timeCreated": "1970-01-01T00:00:00Z",
    "timeDeleted": "1970-01-01T00:00:00Z",
    "timeStorageClassUpdated": "1970-01-01T00:00:00Z",
    "updated": "1970-01-01T00:00:00Z"
  }'
```

`POST /b/{sourceBucket}/o/{sourceObject}/copyTo/b/{destinationBucket}/o/{destinationObject}`

Copies a source object to a destination object. Optionally overrides metadata.

> Body parameter

```json
{
  "acl": [
    {
      "bucket": "string",
      "domain": "string",
      "email": "string",
      "entity": "string",
      "entityId": "string",
      "etag": "string",
      "generation": "string",
      "id": "string",
      "kind": "storage#objectAccessControl",
      "object": "string",
      "projectTeam": {
        "projectNumber": "string",
        "team": "string"
      },
      "role": "string",
      "selfLink": "string"
    }
  ],
  "bucket": "string",
  "cacheControl": "string",
  "componentCount": 0,
  "contentDisposition": "string",
  "contentEncoding": "string",
  "contentLanguage": "string",
  "contentType": "string",
  "crc32c": "string",
  "customTime": "1970-01-01T00:00:00Z",
  "customerEncryption": {
    "encryptionAlgorithm": "string",
    "keySha256": "string"
  },
  "etag": "string",
  "eventBasedHold": true,
  "generation": "string",
  "id": "string",
  "kind": "storage#object",
  "kmsKeyName": "string",
  "md5Hash": "string",
  "mediaLink": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "metageneration": "string",
  "name": "string",
  "owner": {
    "entity": "string",
    "entityId": "string"
  },
  "retentionExpirationTime": "1970-01-01T00:00:00Z",
  "selfLink": "string",
  "size": "string",
  "storageClass": "string",
  "temporaryHold": true,
  "timeCreated": "1970-01-01T00:00:00Z",
  "timeDeleted": "1970-01-01T00:00:00Z",
  "timeStorageClassUpdated": "1970-01-01T00:00:00Z",
  "updated": "1970-01-01T00:00:00Z"
}
```

<h3 id="storageobjectscopy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sourceBucket|path|string|true|Name of the bucket in which to find the source object.|
|sourceObject|path|string|true|Name of the source object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.|
|destinationBucket|path|string|true|Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.|
|destinationObject|path|string|true|Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any.|
|destinationKmsKeyName|query|string|false|Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any.|
|destinationPredefinedAcl|query|string|false|Apply a predefined set of access controls to the destination object.|
|ifGenerationMatch|query|string|false|Makes the operation conditional on whether the destination object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.|
|ifGenerationNotMatch|query|string|false|Makes the operation conditional on whether the destination object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.|
|ifMetagenerationMatch|query|string|false|Makes the operation conditional on whether the destination object's current metageneration matches the given value.|
|ifMetagenerationNotMatch|query|string|false|Makes the operation conditional on whether the destination object's current metageneration does not match the given value.|
|ifSourceGenerationMatch|query|string|false|Makes the operation conditional on whether the source object's current generation matches the given value.|
|ifSourceGenerationNotMatch|query|string|false|Makes the operation conditional on whether the source object's current generation does not match the given value.|
|ifSourceMetagenerationMatch|query|string|false|Makes the operation conditional on whether the source object's current metageneration matches the given value.|
|ifSourceMetagenerationNotMatch|query|string|false|Makes the operation conditional on whether the source object's current metageneration does not match the given value.|
|projection|query|string|false|Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.|
|sourceGeneration|query|string|false|If present, selects a specific revision of the source object (as opposed to the latest version, the default).|
|userProject|query|string|false|The project to be billed for this request. Required for Requester Pays buckets.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Object](#schemaobject)|false|none|
|» acl|body|[[ObjectAccessControl](#schemaobjectaccesscontrol)]|false|Access controls on the object.|
|» bucket|body|string|false|The name of the bucket containing this object.|
|» cacheControl|body|string|false|Cache-Control directive for the object data. If omitted, and the object is accessible to all anonymous users, the default will be public, max-age=3600.|
|» componentCount|body|integer(int32)|false|Number of underlying components that make up this object. Components are accumulated by compose operations.|
|» contentDisposition|body|string|false|Content-Disposition of the object data.|
|» contentEncoding|body|string|false|Content-Encoding of the object data.|
|» contentLanguage|body|string|false|Content-Language of the object data.|
|» contentType|body|string|false|Content-Type of the object data. If an object is stored without a Content-Type, it is served as application/octet-stream.|
|» crc32c|body|string|false|CRC32c checksum, as described in RFC 4960, Appendix B; encoded using base64 in big-endian byte order. For more information about using the CRC32c checksum, see Hashes and ETags: Best Practices.|
|» customTime|body|string(date-time)|false|A timestamp in RFC 3339 format specified by the user for an object.|
|» customerEncryption|body|object|false|Metadata of customer-supplied encryption key, if the object is encrypted by such a key.|
|» » encryptionAlgorithm|body|string|false|The encryption algorithm.|
|» » keySha256|body|string|false|SHA256 hash value of the encryption key.|
|» etag|body|string|false|HTTP 1.1 Entity tag for the object.|
|» eventBasedHold|body|boolean|false|Whether an object is under event-based hold. Event-based hold is a way to retain objects until an event occurs, which is signified by the hold's release (i.e. this value is set to false). After being released (set to false), such objects will be subject to bucket-level retention (if any). One sample use case of this flag is for banks to hold loan documents for at least 3 years after loan is paid in full. Here, bucket-level retention is 3 years and the event is the loan being paid in full. In this example, these objects will be held intact for any number of years until the event has occurred (event-based hold on the object is released) and then 3 more years after that. That means retention duration of the objects begins from the moment event-based hold transitioned from true to false.|
|» generation|body|string(int64)|false|The content generation of this object. Used for object versioning.|
|» id|body|string|false|The ID of the object, including the bucket name, object name, and generation number.|
|» kind|body|string|false|The kind of item this is. For objects, this is always storage#object.|
|» kmsKeyName|body|string|false|Not currently supported. Specifying the parameter causes the request to fail with status code 400 - Bad Request.|
|» md5Hash|body|string|false|MD5 hash of the data; encoded using base64. For more information about using the MD5 hash, see Hashes and ETags: Best Practices.|
|» mediaLink|body|string|false|Media download link.|
|» metadata|body|object|false|User-provided metadata, in key/value pairs.|
|» » **additionalProperties**|body|string|false|An individual metadata entry.|
|» metageneration|body|string(int64)|false|The version of the metadata for this object at this generation. Used for preconditions and for detecting changes in metadata. A metageneration number is only meaningful in the context of a particular generation of a particular object.|
|» name|body|string|false|The name of the object. Required if not specified by URL parameter.|
|» owner|body|object|false|The owner of the object. This will always be the uploader of the object.|
|» » entity|body|string|false|The entity, in the form user-userId.|
|» » entityId|body|string|false|The ID for the entity.|
|» retentionExpirationTime|body|string(date-time)|false|A server-determined value that specifies the earliest time that the object's retention period expires. This value is in RFC 3339 format. Note 1: This field is not provided for objects with an active event-based hold, since retention expiration is unknown until the hold is removed. Note 2: This value can be provided even when temporary hold is set (so that the user can reason about policy without having to first unset the temporary hold).|
|» selfLink|body|string|false|The link to this object.|
|» size|body|string(uint64)|false|Content-Length of the data in bytes.|
|» storageClass|body|string|false|Storage class of the object.|
|» temporaryHold|body|boolean|false|Whether an object is under temporary hold. While this flag is set to true, the object is protected against deletion and overwrites. A common use case of this flag is regulatory investigations where objects need to be retained while the investigation is ongoing. Note that unlike event-based hold, temporary hold does not impact retention expiration time of an object.|
|» timeCreated|body|string(date-time)|false|The creation time of the object in RFC 3339 format.|
|» timeDeleted|body|string(date-time)|false|The deletion time of the object in RFC 3339 format. Will be returned if and only if this version of the object has been deleted.|
|» timeStorageClassUpdated|body|string(date-time)|false|The time at which the object's storage class was last changed. When the object is initially created, it will be set to timeCreated.|
|» updated|body|string(date-time)|false|The modification time of the object metadata in RFC 3339 format. Set initially to object creation time and then updated whenever any metadata of the object changes. This includes changes made by a requester, such as modifying custom metadata, as well as changes made by Cloud Storage on behalf of a requester, such as changing the storage class based on an Object Lifecycle Configuration.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|destinationPredefinedAcl|authenticatedRead|
|destinationPredefinedAcl|bucketOwnerFullControl|
|destinationPredefinedAcl|bucketOwnerRead|
|destinationPredefinedAcl|private|
|destinationPredefinedAcl|projectPrivate|
|destinationPredefinedAcl|publicRead|
|projection|full|
|projection|noAcl|
|alt|json|

> Example responses

> 200 Response

```json
{
  "acl": [
    {
      "bucket": "string",
      "domain": "string",
      "email": "string",
      "entity": "string",
      "entityId": "string",
      "etag": "string",
      "generation": "string",
      "id": "string",
      "kind": "storage#objectAccessControl",
      "object": "string",
      "projectTeam": {
        "projectNumber": "string",
        "team": "string"
      },
      "role": "string",
      "selfLink": "string"
    }
  ],
  "bucket": "string",
  "cacheControl": "string",
  "componentCount": 0,
  "contentDisposition": "string",
  "contentEncoding": "string",
  "contentLanguage": "string",
  "contentType": "string",
  "crc32c": "string",
  "customTime": "1970-01-01T00:00:00Z",
  "customerEncryption": {
    "encryptionAlgorithm": "string",
    "keySha256": "string"
  },
  "etag": "string",
  "eventBasedHold": true,
  "generation": "string",
  "id": "string",
  "kind": "storage#object",
  "kmsKeyName": "string",
  "md5Hash": "string",
  "mediaLink": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "metageneration": "string",
  "name": "string",
  "owner": {
    "entity": "string",
    "entityId": "string"
  },
  "retentionExpirationTime": "1970-01-01T00:00:00Z",
  "selfLink": "string",
  "size": "string",
  "storageClass": "string",
  "temporaryHold": true,
  "timeCreated": "1970-01-01T00:00:00Z",
  "timeDeleted": "1970-01-01T00:00:00Z",
  "timeStorageClassUpdated": "1970-01-01T00:00:00Z",
  "updated": "1970-01-01T00:00:00Z"
}
```

<h3 id="storageobjectscopy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Object](#schemaobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.read_write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.read_write )
</aside>

## storage.objects.rewrite

<a id="opIdstorage.objects.rewrite"></a>

> Code samples

```bash
curl https://www.googleapis.com/b/string/o/string/rewriteTo/b/string/o/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "acl": [
      {
        "bucket": "string",
        "domain": "string",
        "email": "string",
        "entity": "string",
        "entityId": "string",
        "etag": "string",
        "generation": "string",
        "id": "string",
        "kind": "storage#objectAccessControl",
        "object": "string",
        "projectTeam": {
          "projectNumber": "string",
          "team": "string"
        },
        "role": "string",
        "selfLink": "string"
      }
    ],
    "bucket": "string",
    "cacheControl": "string",
    "componentCount": 0,
    "contentDisposition": "string",
    "contentEncoding": "string",
    "contentLanguage": "string",
    "contentType": "string",
    "crc32c": "string",
    "customTime": "1970-01-01T00:00:00Z",
    "customerEncryption": {
      "encryptionAlgorithm": "string",
      "keySha256": "string"
    },
    "etag": "string",
    "eventBasedHold": true,
    "generation": "string",
    "id": "string",
    "kind": "storage#object",
    "kmsKeyName": "string",
    "md5Hash": "string",
    "mediaLink": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "metageneration": "string",
    "name": "string",
    "owner": {
      "entity": "string",
      "entityId": "string"
    },
    "retentionExpirationTime": "1970-01-01T00:00:00Z",
    "selfLink": "string",
    "size": "string",
    "storageClass": "string",
    "temporaryHold": true,
    "timeCreated": "1970-01-01T00:00:00Z",
    "timeDeleted": "1970-01-01T00:00:00Z",
    "timeStorageClassUpdated": "1970-01-01T00:00:00Z",
    "updated": "1970-01-01T00:00:00Z"
  }'
```

`POST /b/{sourceBucket}/o/{sourceObject}/rewriteTo/b/{destinationBucket}/o/{destinationObject}`

Rewrites a source object to a destination object. Optionally overrides metadata.

> Body parameter

```json
{
  "acl": [
    {
      "bucket": "string",
      "domain": "string",
      "email": "string",
      "entity": "string",
      "entityId": "string",
      "etag": "string",
      "generation": "string",
      "id": "string",
      "kind": "storage#objectAccessControl",
      "object": "string",
      "projectTeam": {
        "projectNumber": "string",
        "team": "string"
      },
      "role": "string",
      "selfLink": "string"
    }
  ],
  "bucket": "string",
  "cacheControl": "string",
  "componentCount": 0,
  "contentDisposition": "string",
  "contentEncoding": "string",
  "contentLanguage": "string",
  "contentType": "string",
  "crc32c": "string",
  "customTime": "1970-01-01T00:00:00Z",
  "customerEncryption": {
    "encryptionAlgorithm": "string",
    "keySha256": "string"
  },
  "etag": "string",
  "eventBasedHold": true,
  "generation": "string",
  "id": "string",
  "kind": "storage#object",
  "kmsKeyName": "string",
  "md5Hash": "string",
  "mediaLink": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "metageneration": "string",
  "name": "string",
  "owner": {
    "entity": "string",
    "entityId": "string"
  },
  "retentionExpirationTime": "1970-01-01T00:00:00Z",
  "selfLink": "string",
  "size": "string",
  "storageClass": "string",
  "temporaryHold": true,
  "timeCreated": "1970-01-01T00:00:00Z",
  "timeDeleted": "1970-01-01T00:00:00Z",
  "timeStorageClassUpdated": "1970-01-01T00:00:00Z",
  "updated": "1970-01-01T00:00:00Z"
}
```

<h3 id="storageobjectsrewrite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sourceBucket|path|string|true|Name of the bucket in which to find the source object.|
|sourceObject|path|string|true|Name of the source object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.|
|destinationBucket|path|string|true|Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.|
|destinationObject|path|string|true|Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.|
|destinationKmsKeyName|query|string|false|Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any.|
|destinationPredefinedAcl|query|string|false|Apply a predefined set of access controls to the destination object.|
|ifGenerationMatch|query|string|false|Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.|
|ifGenerationNotMatch|query|string|false|Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.|
|ifMetagenerationMatch|query|string|false|Makes the operation conditional on whether the destination object's current metageneration matches the given value.|
|ifMetagenerationNotMatch|query|string|false|Makes the operation conditional on whether the destination object's current metageneration does not match the given value.|
|ifSourceGenerationMatch|query|string|false|Makes the operation conditional on whether the source object's current generation matches the given value.|
|ifSourceGenerationNotMatch|query|string|false|Makes the operation conditional on whether the source object's current generation does not match the given value.|
|ifSourceMetagenerationMatch|query|string|false|Makes the operation conditional on whether the source object's current metageneration matches the given value.|
|ifSourceMetagenerationNotMatch|query|string|false|Makes the operation conditional on whether the source object's current metageneration does not match the given value.|
|maxBytesRewrittenPerCall|query|string|false|The maximum number of bytes that will be rewritten per rewrite request. Most callers shouldn't need to specify this parameter - it is primarily in place to support testing. If specified the value must be an integral multiple of 1 MiB (1048576). Also, this only applies to requests where the source and destination span locations and/or storage classes. Finally, this value must not change across rewrite calls else you'll get an error that the rewriteToken is invalid.|
|projection|query|string|false|Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.|
|rewriteToken|query|string|false|Include this field (from the previous rewrite response) on each rewrite request after the first one, until the rewrite response 'done' flag is true. Calls that provide a rewriteToken can omit all other request fields, but if included those fields must match the values provided in the first rewrite request.|
|sourceGeneration|query|string|false|If present, selects a specific revision of the source object (as opposed to the latest version, the default).|
|userProject|query|string|false|The project to be billed for this request. Required for Requester Pays buckets.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Object](#schemaobject)|false|none|
|» acl|body|[[ObjectAccessControl](#schemaobjectaccesscontrol)]|false|Access controls on the object.|
|» bucket|body|string|false|The name of the bucket containing this object.|
|» cacheControl|body|string|false|Cache-Control directive for the object data. If omitted, and the object is accessible to all anonymous users, the default will be public, max-age=3600.|
|» componentCount|body|integer(int32)|false|Number of underlying components that make up this object. Components are accumulated by compose operations.|
|» contentDisposition|body|string|false|Content-Disposition of the object data.|
|» contentEncoding|body|string|false|Content-Encoding of the object data.|
|» contentLanguage|body|string|false|Content-Language of the object data.|
|» contentType|body|string|false|Content-Type of the object data. If an object is stored without a Content-Type, it is served as application/octet-stream.|
|» crc32c|body|string|false|CRC32c checksum, as described in RFC 4960, Appendix B; encoded using base64 in big-endian byte order. For more information about using the CRC32c checksum, see Hashes and ETags: Best Practices.|
|» customTime|body|string(date-time)|false|A timestamp in RFC 3339 format specified by the user for an object.|
|» customerEncryption|body|object|false|Metadata of customer-supplied encryption key, if the object is encrypted by such a key.|
|» » encryptionAlgorithm|body|string|false|The encryption algorithm.|
|» » keySha256|body|string|false|SHA256 hash value of the encryption key.|
|» etag|body|string|false|HTTP 1.1 Entity tag for the object.|
|» eventBasedHold|body|boolean|false|Whether an object is under event-based hold. Event-based hold is a way to retain objects until an event occurs, which is signified by the hold's release (i.e. this value is set to false). After being released (set to false), such objects will be subject to bucket-level retention (if any). One sample use case of this flag is for banks to hold loan documents for at least 3 years after loan is paid in full. Here, bucket-level retention is 3 years and the event is the loan being paid in full. In this example, these objects will be held intact for any number of years until the event has occurred (event-based hold on the object is released) and then 3 more years after that. That means retention duration of the objects begins from the moment event-based hold transitioned from true to false.|
|» generation|body|string(int64)|false|The content generation of this object. Used for object versioning.|
|» id|body|string|false|The ID of the object, including the bucket name, object name, and generation number.|
|» kind|body|string|false|The kind of item this is. For objects, this is always storage#object.|
|» kmsKeyName|body|string|false|Not currently supported. Specifying the parameter causes the request to fail with status code 400 - Bad Request.|
|» md5Hash|body|string|false|MD5 hash of the data; encoded using base64. For more information about using the MD5 hash, see Hashes and ETags: Best Practices.|
|» mediaLink|body|string|false|Media download link.|
|» metadata|body|object|false|User-provided metadata, in key/value pairs.|
|» » **additionalProperties**|body|string|false|An individual metadata entry.|
|» metageneration|body|string(int64)|false|The version of the metadata for this object at this generation. Used for preconditions and for detecting changes in metadata. A metageneration number is only meaningful in the context of a particular generation of a particular object.|
|» name|body|string|false|The name of the object. Required if not specified by URL parameter.|
|» owner|body|object|false|The owner of the object. This will always be the uploader of the object.|
|» » entity|body|string|false|The entity, in the form user-userId.|
|» » entityId|body|string|false|The ID for the entity.|
|» retentionExpirationTime|body|string(date-time)|false|A server-determined value that specifies the earliest time that the object's retention period expires. This value is in RFC 3339 format. Note 1: This field is not provided for objects with an active event-based hold, since retention expiration is unknown until the hold is removed. Note 2: This value can be provided even when temporary hold is set (so that the user can reason about policy without having to first unset the temporary hold).|
|» selfLink|body|string|false|The link to this object.|
|» size|body|string(uint64)|false|Content-Length of the data in bytes.|
|» storageClass|body|string|false|Storage class of the object.|
|» temporaryHold|body|boolean|false|Whether an object is under temporary hold. While this flag is set to true, the object is protected against deletion and overwrites. A common use case of this flag is regulatory investigations where objects need to be retained while the investigation is ongoing. Note that unlike event-based hold, temporary hold does not impact retention expiration time of an object.|
|» timeCreated|body|string(date-time)|false|The creation time of the object in RFC 3339 format.|
|» timeDeleted|body|string(date-time)|false|The deletion time of the object in RFC 3339 format. Will be returned if and only if this version of the object has been deleted.|
|» timeStorageClassUpdated|body|string(date-time)|false|The time at which the object's storage class was last changed. When the object is initially created, it will be set to timeCreated.|
|» updated|body|string(date-time)|false|The modification time of the object metadata in RFC 3339 format. Set initially to object creation time and then updated whenever any metadata of the object changes. This includes changes made by a requester, such as modifying custom metadata, as well as changes made by Cloud Storage on behalf of a requester, such as changing the storage class based on an Object Lifecycle Configuration.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|destinationPredefinedAcl|authenticatedRead|
|destinationPredefinedAcl|bucketOwnerFullControl|
|destinationPredefinedAcl|bucketOwnerRead|
|destinationPredefinedAcl|private|
|destinationPredefinedAcl|projectPrivate|
|destinationPredefinedAcl|publicRead|
|projection|full|
|projection|noAcl|
|alt|json|

> Example responses

> 200 Response

```json
{
  "done": true,
  "kind": "storage#rewriteResponse",
  "objectSize": "string",
  "resource": {
    "acl": [
      {
        "bucket": "string",
        "domain": "string",
        "email": "string",
        "entity": "string",
        "entityId": "string",
        "etag": "string",
        "generation": "string",
        "id": "string",
        "kind": "storage#objectAccessControl",
        "object": "string",
        "projectTeam": {
          "projectNumber": "string",
          "team": "string"
        },
        "role": "string",
        "selfLink": "string"
      }
    ],
    "bucket": "string",
    "cacheControl": "string",
    "componentCount": 0,
    "contentDisposition": "string",
    "contentEncoding": "string",
    "contentLanguage": "string",
    "contentType": "string",
    "crc32c": "string",
    "customTime": "1970-01-01T00:00:00Z",
    "customerEncryption": {
      "encryptionAlgorithm": "string",
      "keySha256": "string"
    },
    "etag": "string",
    "eventBasedHold": true,
    "generation": "string",
    "id": "string",
    "kind": "storage#object",
    "kmsKeyName": "string",
    "md5Hash": "string",
    "mediaLink": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "metageneration": "string",
    "name": "string",
    "owner": {
      "entity": "string",
      "entityId": "string"
    },
    "retentionExpirationTime": "1970-01-01T00:00:00Z",
    "selfLink": "string",
    "size": "string",
    "storageClass": "string",
    "temporaryHold": true,
    "timeCreated": "1970-01-01T00:00:00Z",
    "timeDeleted": "1970-01-01T00:00:00Z",
    "timeStorageClassUpdated": "1970-01-01T00:00:00Z",
    "updated": "1970-01-01T00:00:00Z"
  },
  "rewriteToken": "string",
  "totalBytesRewritten": "string"
}
```

<h3 id="storageobjectsrewrite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[RewriteResponse](#schemarewriteresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.read_write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.read_write )
</aside>

<h1 id="cloud-storage-json-api-projects">projects</h1>

## storage.projects.hmacKeys.list

<a id="opIdstorage.projects.hmacKeys.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/projects/string/hmacKeys \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{projectId}/hmacKeys`

Retrieves a list of HMAC keys matching the criteria.

<h3 id="storageprojectshmackeyslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Name of the project in which to look for HMAC keys.|
|maxResults|query|integer|false|Maximum number of items to return in a single page of responses. The service uses this parameter or 250 items, whichever is smaller. The max number of items per page will also be limited by the number of distinct service accounts in the response. If the number of service accounts in a single response is too high, the page will truncated and a next page token will be returned.|
|pageToken|query|string|false|A previously-returned page token representing part of the larger set of results to view.|
|serviceAccountEmail|query|string|false|If present, only keys for the given service account are returned.|
|showDeletedKeys|query|boolean|false|Whether or not to show keys in the DELETED state.|
|userProject|query|string|false|The project to be billed for this request.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "accessId": "string",
      "etag": "string",
      "id": "string",
      "kind": "storage#hmacKeyMetadata",
      "projectId": "string",
      "selfLink": "string",
      "serviceAccountEmail": "string",
      "state": "string",
      "timeCreated": "1970-01-01T00:00:00Z",
      "updated": "1970-01-01T00:00:00Z"
    }
  ],
  "kind": "storage#hmacKeysMetadata",
  "nextPageToken": "string"
}
```

<h3 id="storageprojectshmackeyslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[HmacKeysMetadata](#schemahmackeysmetadata)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.read_only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.read_only )
</aside>

## storage.projects.hmacKeys.create

<a id="opIdstorage.projects.hmacKeys.create"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/projects/string/hmacKeys?serviceAccountEmail=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /projects/{projectId}/hmacKeys`

Creates a new HMAC key for the specified service account.

<h3 id="storageprojectshmackeyscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Project ID owning the service account.|
|serviceAccountEmail|query|string|true|Email address of the service account.|
|userProject|query|string|false|The project to be billed for this request.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "kind": "storage#hmacKey",
  "metadata": {
    "accessId": "string",
    "etag": "string",
    "id": "string",
    "kind": "storage#hmacKeyMetadata",
    "projectId": "string",
    "selfLink": "string",
    "serviceAccountEmail": "string",
    "state": "string",
    "timeCreated": "1970-01-01T00:00:00Z",
    "updated": "1970-01-01T00:00:00Z"
  },
  "secret": "string"
}
```

<h3 id="storageprojectshmackeyscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[HmacKey](#schemahmackey)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control )
</aside>

## storage.projects.hmacKeys.get

<a id="opIdstorage.projects.hmacKeys.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/projects/string/hmacKeys/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{projectId}/hmacKeys/{accessId}`

Retrieves an HMAC key's metadata

<h3 id="storageprojectshmackeysget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Project ID owning the service account of the requested key.|
|accessId|path|string|true|Name of the HMAC key.|
|userProject|query|string|false|The project to be billed for this request.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "accessId": "string",
  "etag": "string",
  "id": "string",
  "kind": "storage#hmacKeyMetadata",
  "projectId": "string",
  "selfLink": "string",
  "serviceAccountEmail": "string",
  "state": "string",
  "timeCreated": "1970-01-01T00:00:00Z",
  "updated": "1970-01-01T00:00:00Z"
}
```

<h3 id="storageprojectshmackeysget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[HmacKeyMetadata](#schemahmackeymetadata)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.read_only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.read_only )
</aside>

## storage.projects.hmacKeys.update

<a id="opIdstorage.projects.hmacKeys.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/projects/string/hmacKeys/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accessId": "string",
    "etag": "string",
    "id": "string",
    "kind": "storage#hmacKeyMetadata",
    "projectId": "string",
    "selfLink": "string",
    "serviceAccountEmail": "string",
    "state": "string",
    "timeCreated": "1970-01-01T00:00:00Z",
    "updated": "1970-01-01T00:00:00Z"
  }'
```

`PUT /projects/{projectId}/hmacKeys/{accessId}`

Updates the state of an HMAC key. See the HMAC Key resource descriptor for valid states.

> Body parameter

```json
{
  "accessId": "string",
  "etag": "string",
  "id": "string",
  "kind": "storage#hmacKeyMetadata",
  "projectId": "string",
  "selfLink": "string",
  "serviceAccountEmail": "string",
  "state": "string",
  "timeCreated": "1970-01-01T00:00:00Z",
  "updated": "1970-01-01T00:00:00Z"
}
```

<h3 id="storageprojectshmackeysupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Project ID owning the service account of the updated key.|
|accessId|path|string|true|Name of the HMAC key being updated.|
|userProject|query|string|false|The project to be billed for this request.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[HmacKeyMetadata](#schemahmackeymetadata)|false|none|
|» accessId|body|string|false|The ID of the HMAC Key.|
|» etag|body|string|false|HTTP 1.1 Entity tag for the HMAC key.|
|» id|body|string|false|The ID of the HMAC key, including the Project ID and the Access ID.|
|» kind|body|string|false|The kind of item this is. For HMAC Key metadata, this is always storage#hmacKeyMetadata.|
|» projectId|body|string|false|Project ID owning the service account to which the key authenticates.|
|» selfLink|body|string|false|The link to this resource.|
|» serviceAccountEmail|body|string|false|The email address of the key's associated service account.|
|» state|body|string|false|The state of the key. Can be one of ACTIVE, INACTIVE, or DELETED.|
|» timeCreated|body|string(date-time)|false|The creation time of the HMAC key in RFC 3339 format.|
|» updated|body|string(date-time)|false|The last modification time of the HMAC key metadata in RFC 3339 format.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "accessId": "string",
  "etag": "string",
  "id": "string",
  "kind": "storage#hmacKeyMetadata",
  "projectId": "string",
  "selfLink": "string",
  "serviceAccountEmail": "string",
  "state": "string",
  "timeCreated": "1970-01-01T00:00:00Z",
  "updated": "1970-01-01T00:00:00Z"
}
```

<h3 id="storageprojectshmackeysupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[HmacKeyMetadata](#schemahmackeymetadata)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control )
</aside>

## storage.projects.hmacKeys.delete

<a id="opIdstorage.projects.hmacKeys.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/projects/string/hmacKeys/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /projects/{projectId}/hmacKeys/{accessId}`

Deletes an HMAC key.

<h3 id="storageprojectshmackeysdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Project ID owning the requested key|
|accessId|path|string|true|Name of the HMAC key to be deleted.|
|userProject|query|string|false|The project to be billed for this request.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

<h3 id="storageprojectshmackeysdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.read_write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.read_write )
</aside>

## storage.projects.serviceAccount.get

<a id="opIdstorage.projects.serviceAccount.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/projects/string/serviceAccount \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{projectId}/serviceAccount`

Get the email address of this project's Google Cloud Storage service account.

<h3 id="storageprojectsserviceaccountget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Project ID|
|userProject|query|string|false|The project to be billed for this request.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|uploadType|query|string|false|Upload protocol for media (e.g. "media", "multipart", "resumable").|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "email_address": "string",
  "kind": "storage#serviceAccount"
}
```

<h3 id="storageprojectsserviceaccountget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ServiceAccount](#schemaserviceaccount)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.full_control ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.read_only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.read_only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/devstorage.read_write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/devstorage.read_write )
</aside>

# Schemas

<h2 id="tocS_Bucket">Bucket</h2>
<!-- backwards compatibility -->
<a id="schemabucket"></a>
<a id="schema_Bucket"></a>
<a id="tocSbucket"></a>
<a id="tocsbucket"></a>

```json
{
  "acl": [
    {
      "bucket": "string",
      "domain": "string",
      "email": "string",
      "entity": "string",
      "entityId": "string",
      "etag": "string",
      "id": "string",
      "kind": "storage#bucketAccessControl",
      "projectTeam": {
        "projectNumber": "string",
        "team": "string"
      },
      "role": "string",
      "selfLink": "string"
    }
  ],
  "autoclass": {
    "enabled": true,
    "toggleTime": "1970-01-01T00:00:00Z"
  },
  "billing": {
    "requesterPays": true
  },
  "cors": [
    {
      "maxAgeSeconds": 0,
      "method": [
        "string"
      ],
      "origin": [
        "string"
      ],
      "responseHeader": [
        "string"
      ]
    }
  ],
  "customPlacementConfig": {
    "dataLocations": [
      "string"
    ]
  },
  "defaultEventBasedHold": true,
  "defaultObjectAcl": [
    {
      "bucket": "string",
      "domain": "string",
      "email": "string",
      "entity": "string",
      "entityId": "string",
      "etag": "string",
      "generation": "string",
      "id": "string",
      "kind": "storage#objectAccessControl",
      "object": "string",
      "projectTeam": {
        "projectNumber": "string",
        "team": "string"
      },
      "role": "string",
      "selfLink": "string"
    }
  ],
  "encryption": {
    "defaultKmsKeyName": "string"
  },
  "etag": "string",
  "iamConfiguration": {
    "bucketPolicyOnly": {
      "enabled": true,
      "lockedTime": "1970-01-01T00:00:00Z"
    },
    "publicAccessPrevention": "string",
    "uniformBucketLevelAccess": {
      "enabled": true,
      "lockedTime": "1970-01-01T00:00:00Z"
    }
  },
  "id": "string",
  "kind": "storage#bucket",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "lifecycle": {
    "rule": [
      {
        "action": {
          "storageClass": "string",
          "type": "string"
        },
        "condition": {
          "age": 0,
          "createdBefore": "1970-01-01",
          "customTimeBefore": "1970-01-01",
          "daysSinceCustomTime": 0,
          "daysSinceNoncurrentTime": 0,
          "isLive": true,
          "matchesPattern": "string",
          "matchesPrefix": [
            "string"
          ],
          "matchesStorageClass": [
            "string"
          ],
          "matchesSuffix": [
            "string"
          ],
          "noncurrentTimeBefore": "1970-01-01",
          "numNewerVersions": 0
        }
      }
    ]
  },
  "location": "string",
  "locationType": "string",
  "logging": {
    "logBucket": "string",
    "logObjectPrefix": "string"
  },
  "metageneration": "string",
  "name": "string",
  "owner": {
    "entity": "string",
    "entityId": "string"
  },
  "projectNumber": "string",
  "retentionPolicy": {
    "effectiveTime": "1970-01-01T00:00:00Z",
    "isLocked": true,
    "retentionPeriod": "string"
  },
  "rpo": "string",
  "satisfiesPZS": true,
  "selfLink": "string",
  "storageClass": "string",
  "timeCreated": "1970-01-01T00:00:00Z",
  "updated": "1970-01-01T00:00:00Z",
  "versioning": {
    "enabled": true
  },
  "website": {
    "mainPageSuffix": "string",
    "notFoundPage": "string"
  }
}
```

A bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acl|[[BucketAccessControl](#schemabucketaccesscontrol)]|false|none|Access controls on the bucket.|
|autoclass|object|false|none|The bucket's Autoclass configuration.|
|billing|object|false|none|The bucket's billing configuration.|
|cors|[object]|false|none|The bucket's Cross-Origin Resource Sharing (CORS) configuration.|
|customPlacementConfig|object|false|none|The bucket's custom placement configuration for Custom Dual Regions.|
|defaultEventBasedHold|boolean|false|none|The default value for event-based hold on newly created objects in this bucket. Event-based hold is a way to retain objects indefinitely until an event occurs, signified by the hold's release. After being released, such objects will be subject to bucket-level retention (if any). One sample use case of this flag is for banks to hold loan documents for at least 3 years after loan is paid in full. Here, bucket-level retention is 3 years and the event is loan being paid in full. In this example, these objects will be held intact for any number of years until the event has occurred (event-based hold on the object is released) and then 3 more years after that. That means retention duration of the objects begins from the moment event-based hold transitioned from true to false. Objects under event-based hold cannot be deleted, overwritten or archived until the hold is removed.|
|defaultObjectAcl|[[ObjectAccessControl](#schemaobjectaccesscontrol)]|false|none|Default access controls to apply to new objects when no ACL is provided.|
|encryption|object|false|none|Encryption configuration for a bucket.|
|etag|string|false|none|HTTP 1.1 Entity tag for the bucket.|
|iamConfiguration|object|false|none|The bucket's IAM configuration.|
|id|string|false|none|The ID of the bucket. For buckets, the id and name properties are the same.|
|kind|string|false|none|The kind of item this is. For buckets, this is always storage#bucket.|
|labels|object|false|none|User-provided labels, in key/value pairs.|
|lifecycle|object|false|none|The bucket's lifecycle configuration. See lifecycle management for more information.|
|location|string|false|none|The location of the bucket. Object data for objects in the bucket resides in physical storage within this region. Defaults to US. See the developer's guide for the authoritative list.|
|locationType|string|false|none|The type of the bucket location.|
|logging|object|false|none|The bucket's logging configuration, which defines the destination bucket and optional name prefix for the current bucket's logs.|
|metageneration|string(int64)|false|none|The metadata generation of this bucket.|
|name|string|false|none|The name of the bucket.|
|owner|object|false|none|The owner of the bucket. This is always the project team's owner group.|
|projectNumber|string(uint64)|false|none|The project number of the project the bucket belongs to.|
|retentionPolicy|object|false|none|The bucket's retention policy. The retention policy enforces a minimum retention time for all objects contained in the bucket, based on their creation time. Any attempt to overwrite or delete objects younger than the retention period will result in a PERMISSION_DENIED error. An unlocked retention policy can be modified or removed from the bucket via a storage.buckets.update operation. A locked retention policy cannot be removed or shortened in duration for the lifetime of the bucket. Attempting to remove or decrease period of a locked retention policy will result in a PERMISSION_DENIED error.|
|rpo|string|false|none|The Recovery Point Objective (RPO) of this bucket. Set to ASYNC_TURBO to turn on Turbo Replication on a bucket.|
|satisfiesPZS|boolean|false|none|Reserved for future use.|
|selfLink|string|false|none|The URI of this bucket.|
|storageClass|string|false|none|The bucket's default storage class, used whenever no storageClass is specified for a newly-created object. This defines how objects in the bucket are stored and determines the SLA and the cost of storage. Values include MULTI_REGIONAL, REGIONAL, STANDARD, NEARLINE, COLDLINE, ARCHIVE, and DURABLE_REDUCED_AVAILABILITY. If this value is not specified when the bucket is created, it will default to STANDARD. For more information, see storage classes.|
|timeCreated|string(date-time)|false|none|The creation time of the bucket in RFC 3339 format.|
|updated|string(date-time)|false|none|The modification time of the bucket in RFC 3339 format.|
|versioning|object|false|none|The bucket's versioning configuration.|
|website|object|false|none|The bucket's website configuration, controlling how the service behaves when accessing bucket contents as a web site. See the Static Website Examples for more information.|

<h2 id="tocS_BucketAccessControl">BucketAccessControl</h2>
<!-- backwards compatibility -->
<a id="schemabucketaccesscontrol"></a>
<a id="schema_BucketAccessControl"></a>
<a id="tocSbucketaccesscontrol"></a>
<a id="tocsbucketaccesscontrol"></a>

```json
{
  "bucket": "string",
  "domain": "string",
  "email": "string",
  "entity": "string",
  "entityId": "string",
  "etag": "string",
  "id": "string",
  "kind": "storage#bucketAccessControl",
  "projectTeam": {
    "projectNumber": "string",
    "team": "string"
  },
  "role": "string",
  "selfLink": "string"
}
```

An access-control entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|string|false|none|The name of the bucket.|
|domain|string|false|none|The domain associated with the entity, if any.|
|email|string|false|none|The email address associated with the entity, if any.|
|entity|string|false|none|The entity holding the permission, in one of the following forms: <br>- user-userId <br>- user-email <br>- group-groupId <br>- group-email <br>- domain-domain <br>- project-team-projectId <br>- allUsers <br>- allAuthenticatedUsers Examples: <br>- The user liz@example.com would be user-liz@example.com. <br>- The group example@googlegroups.com would be group-example@googlegroups.com. <br>- To refer to all members of the Google Apps for Business domain example.com, the entity would be domain-example.com.|
|entityId|string|false|none|The ID for the entity, if any.|
|etag|string|false|none|HTTP 1.1 Entity tag for the access-control entry.|
|id|string|false|none|The ID of the access-control entry.|
|kind|string|false|none|The kind of item this is. For bucket access control entries, this is always storage#bucketAccessControl.|
|projectTeam|object|false|none|The project team associated with the entity, if any.|
|role|string|false|none|The access permission for the entity.|
|selfLink|string|false|none|The link to this access-control entry.|

<h2 id="tocS_BucketAccessControls">BucketAccessControls</h2>
<!-- backwards compatibility -->
<a id="schemabucketaccesscontrols"></a>
<a id="schema_BucketAccessControls"></a>
<a id="tocSbucketaccesscontrols"></a>
<a id="tocsbucketaccesscontrols"></a>

```json
{
  "items": [
    {
      "bucket": "string",
      "domain": "string",
      "email": "string",
      "entity": "string",
      "entityId": "string",
      "etag": "string",
      "id": "string",
      "kind": "storage#bucketAccessControl",
      "projectTeam": {
        "projectNumber": "string",
        "team": "string"
      },
      "role": "string",
      "selfLink": "string"
    }
  ],
  "kind": "storage#bucketAccessControls"
}
```

An access-control list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[BucketAccessControl](#schemabucketaccesscontrol)]|false|none|The list of items.|
|kind|string|false|none|The kind of item this is. For lists of bucket access control entries, this is always storage#bucketAccessControls.|

<h2 id="tocS_Buckets">Buckets</h2>
<!-- backwards compatibility -->
<a id="schemabuckets"></a>
<a id="schema_Buckets"></a>
<a id="tocSbuckets"></a>
<a id="tocsbuckets"></a>

```json
{
  "items": [
    {
      "acl": [
        {
          "bucket": "string",
          "domain": "string",
          "email": "string",
          "entity": "string",
          "entityId": "string",
          "etag": "string",
          "id": "string",
          "kind": "storage#bucketAccessControl",
          "projectTeam": {
            "projectNumber": "string",
            "team": "string"
          },
          "role": "string",
          "selfLink": "string"
        }
      ],
      "autoclass": {
        "enabled": true,
        "toggleTime": "1970-01-01T00:00:00Z"
      },
      "billing": {
        "requesterPays": true
      },
      "cors": [
        {
          "maxAgeSeconds": 0,
          "method": [
            "string"
          ],
          "origin": [
            "string"
          ],
          "responseHeader": [
            "string"
          ]
        }
      ],
      "customPlacementConfig": {
        "dataLocations": [
          "string"
        ]
      },
      "defaultEventBasedHold": true,
      "defaultObjectAcl": [
        {
          "bucket": "string",
          "domain": "string",
          "email": "string",
          "entity": "string",
          "entityId": "string",
          "etag": "string",
          "generation": "string",
          "id": "string",
          "kind": "storage#objectAccessControl",
          "object": "string",
          "projectTeam": {
            "projectNumber": "string",
            "team": "string"
          },
          "role": "string",
          "selfLink": "string"
        }
      ],
      "encryption": {
        "defaultKmsKeyName": "string"
      },
      "etag": "string",
      "iamConfiguration": {
        "bucketPolicyOnly": {
          "enabled": true,
          "lockedTime": "1970-01-01T00:00:00Z"
        },
        "publicAccessPrevention": "string",
        "uniformBucketLevelAccess": {
          "enabled": true,
          "lockedTime": "1970-01-01T00:00:00Z"
        }
      },
      "id": "string",
      "kind": "storage#bucket",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "lifecycle": {
        "rule": [
          {
            "action": {
              "storageClass": "string",
              "type": "string"
            },
            "condition": {
              "age": 0,
              "createdBefore": "1970-01-01",
              "customTimeBefore": "1970-01-01",
              "daysSinceCustomTime": 0,
              "daysSinceNoncurrentTime": 0,
              "isLive": true,
              "matchesPattern": "string",
              "matchesPrefix": [
                "string"
              ],
              "matchesStorageClass": [
                "string"
              ],
              "matchesSuffix": [
                "string"
              ],
              "noncurrentTimeBefore": "1970-01-01",
              "numNewerVersions": 0
            }
          }
        ]
      },
      "location": "string",
      "locationType": "string",
      "logging": {
        "logBucket": "string",
        "logObjectPrefix": "string"
      },
      "metageneration": "string",
      "name": "string",
      "owner": {
        "entity": "string",
        "entityId": "string"
      },
      "projectNumber": "string",
      "retentionPolicy": {
        "effectiveTime": "1970-01-01T00:00:00Z",
        "isLocked": true,
        "retentionPeriod": "string"
      },
      "rpo": "string",
      "satisfiesPZS": true,
      "selfLink": "string",
      "storageClass": "string",
      "timeCreated": "1970-01-01T00:00:00Z",
      "updated": "1970-01-01T00:00:00Z",
      "versioning": {
        "enabled": true
      },
      "website": {
        "mainPageSuffix": "string",
        "notFoundPage": "string"
      }
    }
  ],
  "kind": "storage#buckets",
  "nextPageToken": "string"
}
```

A list of buckets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Bucket](#schemabucket)]|false|none|The list of items.|
|kind|string|false|none|The kind of item this is. For lists of buckets, this is always storage#buckets.|
|nextPageToken|string|false|none|The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.|

<h2 id="tocS_Channel">Channel</h2>
<!-- backwards compatibility -->
<a id="schemachannel"></a>
<a id="schema_Channel"></a>
<a id="tocSchannel"></a>
<a id="tocschannel"></a>

```json
{
  "address": "string",
  "expiration": "string",
  "id": "string",
  "kind": "api#channel",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "payload": true,
  "resourceId": "string",
  "resourceUri": "string",
  "token": "string",
  "type": "string"
}
```

An notification channel used to watch for resource changes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|The address where notifications are delivered for this channel.|
|expiration|string(int64)|false|none|Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.|
|id|string|false|none|A UUID or similar unique string that identifies this channel.|
|kind|string|false|none|Identifies this as a notification channel used to watch for changes to a resource, which is "api#channel".|
|params|object|false|none|Additional parameters controlling delivery channel behavior. Optional.|
|payload|boolean|false|none|A Boolean value to indicate whether payload is wanted. Optional.|
|resourceId|string|false|none|An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.|
|resourceUri|string|false|none|A version-specific identifier for the watched resource.|
|token|string|false|none|An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.|
|type|string|false|none|The type of delivery mechanism used for this channel.|

<h2 id="tocS_ComposeRequest">ComposeRequest</h2>
<!-- backwards compatibility -->
<a id="schemacomposerequest"></a>
<a id="schema_ComposeRequest"></a>
<a id="tocScomposerequest"></a>
<a id="tocscomposerequest"></a>

```json
{
  "destination": {
    "acl": [
      {
        "bucket": "string",
        "domain": "string",
        "email": "string",
        "entity": "string",
        "entityId": "string",
        "etag": "string",
        "generation": "string",
        "id": "string",
        "kind": "storage#objectAccessControl",
        "object": "string",
        "projectTeam": {
          "projectNumber": "string",
          "team": "string"
        },
        "role": "string",
        "selfLink": "string"
      }
    ],
    "bucket": "string",
    "cacheControl": "string",
    "componentCount": 0,
    "contentDisposition": "string",
    "contentEncoding": "string",
    "contentLanguage": "string",
    "contentType": "string",
    "crc32c": "string",
    "customTime": "1970-01-01T00:00:00Z",
    "customerEncryption": {
      "encryptionAlgorithm": "string",
      "keySha256": "string"
    },
    "etag": "string",
    "eventBasedHold": true,
    "generation": "string",
    "id": "string",
    "kind": "storage#object",
    "kmsKeyName": "string",
    "md5Hash": "string",
    "mediaLink": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "metageneration": "string",
    "name": "string",
    "owner": {
      "entity": "string",
      "entityId": "string"
    },
    "retentionExpirationTime": "1970-01-01T00:00:00Z",
    "selfLink": "string",
    "size": "string",
    "storageClass": "string",
    "temporaryHold": true,
    "timeCreated": "1970-01-01T00:00:00Z",
    "timeDeleted": "1970-01-01T00:00:00Z",
    "timeStorageClassUpdated": "1970-01-01T00:00:00Z",
    "updated": "1970-01-01T00:00:00Z"
  },
  "kind": "storage#composeRequest",
  "sourceObjects": [
    {
      "generation": "string",
      "name": "string",
      "objectPreconditions": {
        "ifGenerationMatch": "string"
      }
    }
  ]
}
```

A Compose request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destination|[Object](#schemaobject)|false|none|Properties of the resulting object.|
|kind|string|false|none|The kind of item this is.|
|sourceObjects|[object]|false|none|The list of source objects that will be concatenated into a single object.|

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

Represents an expression text. Example: title: "User account presence" description: "Determines whether the request has a user account" expression: "size(request.user) > 0"

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|An optional description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.|
|expression|string|false|none|Textual representation of an expression in Common Expression Language syntax. The application context of the containing message determines which well-known feature set of CEL is supported.|
|location|string|false|none|An optional string indicating the location of the expression for error reporting, e.g. a file name and a position in the file.|
|title|string|false|none|An optional title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.|

<h2 id="tocS_HmacKey">HmacKey</h2>
<!-- backwards compatibility -->
<a id="schemahmackey"></a>
<a id="schema_HmacKey"></a>
<a id="tocShmackey"></a>
<a id="tocshmackey"></a>

```json
{
  "kind": "storage#hmacKey",
  "metadata": {
    "accessId": "string",
    "etag": "string",
    "id": "string",
    "kind": "storage#hmacKeyMetadata",
    "projectId": "string",
    "selfLink": "string",
    "serviceAccountEmail": "string",
    "state": "string",
    "timeCreated": "1970-01-01T00:00:00Z",
    "updated": "1970-01-01T00:00:00Z"
  },
  "secret": "string"
}
```

JSON template to produce a JSON-style HMAC Key resource for Create responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|The kind of item this is. For HMAC keys, this is always storage#hmacKey.|
|metadata|[HmacKeyMetadata](#schemahmackeymetadata)|false|none|Key metadata.|
|secret|string|false|none|HMAC secret key material.|

<h2 id="tocS_HmacKeyMetadata">HmacKeyMetadata</h2>
<!-- backwards compatibility -->
<a id="schemahmackeymetadata"></a>
<a id="schema_HmacKeyMetadata"></a>
<a id="tocShmackeymetadata"></a>
<a id="tocshmackeymetadata"></a>

```json
{
  "accessId": "string",
  "etag": "string",
  "id": "string",
  "kind": "storage#hmacKeyMetadata",
  "projectId": "string",
  "selfLink": "string",
  "serviceAccountEmail": "string",
  "state": "string",
  "timeCreated": "1970-01-01T00:00:00Z",
  "updated": "1970-01-01T00:00:00Z"
}
```

JSON template to produce a JSON-style HMAC Key metadata resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessId|string|false|none|The ID of the HMAC Key.|
|etag|string|false|none|HTTP 1.1 Entity tag for the HMAC key.|
|id|string|false|none|The ID of the HMAC key, including the Project ID and the Access ID.|
|kind|string|false|none|The kind of item this is. For HMAC Key metadata, this is always storage#hmacKeyMetadata.|
|projectId|string|false|none|Project ID owning the service account to which the key authenticates.|
|selfLink|string|false|none|The link to this resource.|
|serviceAccountEmail|string|false|none|The email address of the key's associated service account.|
|state|string|false|none|The state of the key. Can be one of ACTIVE, INACTIVE, or DELETED.|
|timeCreated|string(date-time)|false|none|The creation time of the HMAC key in RFC 3339 format.|
|updated|string(date-time)|false|none|The last modification time of the HMAC key metadata in RFC 3339 format.|

<h2 id="tocS_HmacKeysMetadata">HmacKeysMetadata</h2>
<!-- backwards compatibility -->
<a id="schemahmackeysmetadata"></a>
<a id="schema_HmacKeysMetadata"></a>
<a id="tocShmackeysmetadata"></a>
<a id="tocshmackeysmetadata"></a>

```json
{
  "items": [
    {
      "accessId": "string",
      "etag": "string",
      "id": "string",
      "kind": "storage#hmacKeyMetadata",
      "projectId": "string",
      "selfLink": "string",
      "serviceAccountEmail": "string",
      "state": "string",
      "timeCreated": "1970-01-01T00:00:00Z",
      "updated": "1970-01-01T00:00:00Z"
    }
  ],
  "kind": "storage#hmacKeysMetadata",
  "nextPageToken": "string"
}
```

A list of hmacKeys.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[HmacKeyMetadata](#schemahmackeymetadata)]|false|none|The list of items.|
|kind|string|false|none|The kind of item this is. For lists of hmacKeys, this is always storage#hmacKeysMetadata.|
|nextPageToken|string|false|none|The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.|

<h2 id="tocS_Notification">Notification</h2>
<!-- backwards compatibility -->
<a id="schemanotification"></a>
<a id="schema_Notification"></a>
<a id="tocSnotification"></a>
<a id="tocsnotification"></a>

```json
{
  "custom_attributes": {
    "property1": "string",
    "property2": "string"
  },
  "etag": "string",
  "event_types": [
    "string"
  ],
  "id": "string",
  "kind": "storage#notification",
  "object_name_prefix": "string",
  "payload_format": "JSON_API_V1",
  "selfLink": "string",
  "topic": "string"
}
```

A subscription to receive Google PubSub notifications.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|custom_attributes|object|false|none|An optional list of additional attributes to attach to each Cloud PubSub message published for this notification subscription.|
|etag|string|false|none|HTTP 1.1 Entity tag for this subscription notification.|
|event_types|[string]|false|none|If present, only send notifications about listed event types. If empty, sent notifications for all event types.|
|id|string|false|none|The ID of the notification.|
|kind|string|false|none|The kind of item this is. For notifications, this is always storage#notification.|
|object_name_prefix|string|false|none|If present, only apply this notification configuration to object names that begin with this prefix.|
|payload_format|string|false|none|The desired content of the Payload.|
|selfLink|string|false|none|The canonical URL of this notification.|
|topic|string|false|none|The Cloud PubSub topic to which this subscription publishes. Formatted as: '//pubsub.googleapis.com/projects/{project-identifier}/topics/{my-topic}'|

<h2 id="tocS_Notifications">Notifications</h2>
<!-- backwards compatibility -->
<a id="schemanotifications"></a>
<a id="schema_Notifications"></a>
<a id="tocSnotifications"></a>
<a id="tocsnotifications"></a>

```json
{
  "items": [
    {
      "custom_attributes": {
        "property1": "string",
        "property2": "string"
      },
      "etag": "string",
      "event_types": [
        "string"
      ],
      "id": "string",
      "kind": "storage#notification",
      "object_name_prefix": "string",
      "payload_format": "JSON_API_V1",
      "selfLink": "string",
      "topic": "string"
    }
  ],
  "kind": "storage#notifications"
}
```

A list of notification subscriptions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Notification](#schemanotification)]|false|none|The list of items.|
|kind|string|false|none|The kind of item this is. For lists of notifications, this is always storage#notifications.|

<h2 id="tocS_Object">Object</h2>
<!-- backwards compatibility -->
<a id="schemaobject"></a>
<a id="schema_Object"></a>
<a id="tocSobject"></a>
<a id="tocsobject"></a>

```json
{
  "acl": [
    {
      "bucket": "string",
      "domain": "string",
      "email": "string",
      "entity": "string",
      "entityId": "string",
      "etag": "string",
      "generation": "string",
      "id": "string",
      "kind": "storage#objectAccessControl",
      "object": "string",
      "projectTeam": {
        "projectNumber": "string",
        "team": "string"
      },
      "role": "string",
      "selfLink": "string"
    }
  ],
  "bucket": "string",
  "cacheControl": "string",
  "componentCount": 0,
  "contentDisposition": "string",
  "contentEncoding": "string",
  "contentLanguage": "string",
  "contentType": "string",
  "crc32c": "string",
  "customTime": "1970-01-01T00:00:00Z",
  "customerEncryption": {
    "encryptionAlgorithm": "string",
    "keySha256": "string"
  },
  "etag": "string",
  "eventBasedHold": true,
  "generation": "string",
  "id": "string",
  "kind": "storage#object",
  "kmsKeyName": "string",
  "md5Hash": "string",
  "mediaLink": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "metageneration": "string",
  "name": "string",
  "owner": {
    "entity": "string",
    "entityId": "string"
  },
  "retentionExpirationTime": "1970-01-01T00:00:00Z",
  "selfLink": "string",
  "size": "string",
  "storageClass": "string",
  "temporaryHold": true,
  "timeCreated": "1970-01-01T00:00:00Z",
  "timeDeleted": "1970-01-01T00:00:00Z",
  "timeStorageClassUpdated": "1970-01-01T00:00:00Z",
  "updated": "1970-01-01T00:00:00Z"
}
```

An object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acl|[[ObjectAccessControl](#schemaobjectaccesscontrol)]|false|none|Access controls on the object.|
|bucket|string|false|none|The name of the bucket containing this object.|
|cacheControl|string|false|none|Cache-Control directive for the object data. If omitted, and the object is accessible to all anonymous users, the default will be public, max-age=3600.|
|componentCount|integer(int32)|false|none|Number of underlying components that make up this object. Components are accumulated by compose operations.|
|contentDisposition|string|false|none|Content-Disposition of the object data.|
|contentEncoding|string|false|none|Content-Encoding of the object data.|
|contentLanguage|string|false|none|Content-Language of the object data.|
|contentType|string|false|none|Content-Type of the object data. If an object is stored without a Content-Type, it is served as application/octet-stream.|
|crc32c|string|false|none|CRC32c checksum, as described in RFC 4960, Appendix B; encoded using base64 in big-endian byte order. For more information about using the CRC32c checksum, see Hashes and ETags: Best Practices.|
|customTime|string(date-time)|false|none|A timestamp in RFC 3339 format specified by the user for an object.|
|customerEncryption|object|false|none|Metadata of customer-supplied encryption key, if the object is encrypted by such a key.|
|etag|string|false|none|HTTP 1.1 Entity tag for the object.|
|eventBasedHold|boolean|false|none|Whether an object is under event-based hold. Event-based hold is a way to retain objects until an event occurs, which is signified by the hold's release (i.e. this value is set to false). After being released (set to false), such objects will be subject to bucket-level retention (if any). One sample use case of this flag is for banks to hold loan documents for at least 3 years after loan is paid in full. Here, bucket-level retention is 3 years and the event is the loan being paid in full. In this example, these objects will be held intact for any number of years until the event has occurred (event-based hold on the object is released) and then 3 more years after that. That means retention duration of the objects begins from the moment event-based hold transitioned from true to false.|
|generation|string(int64)|false|none|The content generation of this object. Used for object versioning.|
|id|string|false|none|The ID of the object, including the bucket name, object name, and generation number.|
|kind|string|false|none|The kind of item this is. For objects, this is always storage#object.|
|kmsKeyName|string|false|none|Not currently supported. Specifying the parameter causes the request to fail with status code 400 - Bad Request.|
|md5Hash|string|false|none|MD5 hash of the data; encoded using base64. For more information about using the MD5 hash, see Hashes and ETags: Best Practices.|
|mediaLink|string|false|none|Media download link.|
|metadata|object|false|none|User-provided metadata, in key/value pairs.|
|metageneration|string(int64)|false|none|The version of the metadata for this object at this generation. Used for preconditions and for detecting changes in metadata. A metageneration number is only meaningful in the context of a particular generation of a particular object.|
|name|string|false|none|The name of the object. Required if not specified by URL parameter.|
|owner|object|false|none|The owner of the object. This will always be the uploader of the object.|
|retentionExpirationTime|string(date-time)|false|none|A server-determined value that specifies the earliest time that the object's retention period expires. This value is in RFC 3339 format. Note 1: This field is not provided for objects with an active event-based hold, since retention expiration is unknown until the hold is removed. Note 2: This value can be provided even when temporary hold is set (so that the user can reason about policy without having to first unset the temporary hold).|
|selfLink|string|false|none|The link to this object.|
|size|string(uint64)|false|none|Content-Length of the data in bytes.|
|storageClass|string|false|none|Storage class of the object.|
|temporaryHold|boolean|false|none|Whether an object is under temporary hold. While this flag is set to true, the object is protected against deletion and overwrites. A common use case of this flag is regulatory investigations where objects need to be retained while the investigation is ongoing. Note that unlike event-based hold, temporary hold does not impact retention expiration time of an object.|
|timeCreated|string(date-time)|false|none|The creation time of the object in RFC 3339 format.|
|timeDeleted|string(date-time)|false|none|The deletion time of the object in RFC 3339 format. Will be returned if and only if this version of the object has been deleted.|
|timeStorageClassUpdated|string(date-time)|false|none|The time at which the object's storage class was last changed. When the object is initially created, it will be set to timeCreated.|
|updated|string(date-time)|false|none|The modification time of the object metadata in RFC 3339 format. Set initially to object creation time and then updated whenever any metadata of the object changes. This includes changes made by a requester, such as modifying custom metadata, as well as changes made by Cloud Storage on behalf of a requester, such as changing the storage class based on an Object Lifecycle Configuration.|

<h2 id="tocS_ObjectAccessControl">ObjectAccessControl</h2>
<!-- backwards compatibility -->
<a id="schemaobjectaccesscontrol"></a>
<a id="schema_ObjectAccessControl"></a>
<a id="tocSobjectaccesscontrol"></a>
<a id="tocsobjectaccesscontrol"></a>

```json
{
  "bucket": "string",
  "domain": "string",
  "email": "string",
  "entity": "string",
  "entityId": "string",
  "etag": "string",
  "generation": "string",
  "id": "string",
  "kind": "storage#objectAccessControl",
  "object": "string",
  "projectTeam": {
    "projectNumber": "string",
    "team": "string"
  },
  "role": "string",
  "selfLink": "string"
}
```

An access-control entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|string|false|none|The name of the bucket.|
|domain|string|false|none|The domain associated with the entity, if any.|
|email|string|false|none|The email address associated with the entity, if any.|
|entity|string|false|none|The entity holding the permission, in one of the following forms: <br>- user-userId <br>- user-email <br>- group-groupId <br>- group-email <br>- domain-domain <br>- project-team-projectId <br>- allUsers <br>- allAuthenticatedUsers Examples: <br>- The user liz@example.com would be user-liz@example.com. <br>- The group example@googlegroups.com would be group-example@googlegroups.com. <br>- To refer to all members of the Google Apps for Business domain example.com, the entity would be domain-example.com.|
|entityId|string|false|none|The ID for the entity, if any.|
|etag|string|false|none|HTTP 1.1 Entity tag for the access-control entry.|
|generation|string(int64)|false|none|The content generation of the object, if applied to an object.|
|id|string|false|none|The ID of the access-control entry.|
|kind|string|false|none|The kind of item this is. For object access control entries, this is always storage#objectAccessControl.|
|object|string|false|none|The name of the object, if applied to an object.|
|projectTeam|object|false|none|The project team associated with the entity, if any.|
|role|string|false|none|The access permission for the entity.|
|selfLink|string|false|none|The link to this access-control entry.|

<h2 id="tocS_ObjectAccessControls">ObjectAccessControls</h2>
<!-- backwards compatibility -->
<a id="schemaobjectaccesscontrols"></a>
<a id="schema_ObjectAccessControls"></a>
<a id="tocSobjectaccesscontrols"></a>
<a id="tocsobjectaccesscontrols"></a>

```json
{
  "items": [
    {
      "bucket": "string",
      "domain": "string",
      "email": "string",
      "entity": "string",
      "entityId": "string",
      "etag": "string",
      "generation": "string",
      "id": "string",
      "kind": "storage#objectAccessControl",
      "object": "string",
      "projectTeam": {
        "projectNumber": "string",
        "team": "string"
      },
      "role": "string",
      "selfLink": "string"
    }
  ],
  "kind": "storage#objectAccessControls"
}
```

An access-control list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[ObjectAccessControl](#schemaobjectaccesscontrol)]|false|none|The list of items.|
|kind|string|false|none|The kind of item this is. For lists of object access control entries, this is always storage#objectAccessControls.|

<h2 id="tocS_Objects">Objects</h2>
<!-- backwards compatibility -->
<a id="schemaobjects"></a>
<a id="schema_Objects"></a>
<a id="tocSobjects"></a>
<a id="tocsobjects"></a>

```json
{
  "items": [
    {
      "acl": [
        {
          "bucket": "string",
          "domain": "string",
          "email": "string",
          "entity": "string",
          "entityId": "string",
          "etag": "string",
          "generation": "string",
          "id": "string",
          "kind": "storage#objectAccessControl",
          "object": "string",
          "projectTeam": {
            "projectNumber": "string",
            "team": "string"
          },
          "role": "string",
          "selfLink": "string"
        }
      ],
      "bucket": "string",
      "cacheControl": "string",
      "componentCount": 0,
      "contentDisposition": "string",
      "contentEncoding": "string",
      "contentLanguage": "string",
      "contentType": "string",
      "crc32c": "string",
      "customTime": "1970-01-01T00:00:00Z",
      "customerEncryption": {
        "encryptionAlgorithm": "string",
        "keySha256": "string"
      },
      "etag": "string",
      "eventBasedHold": true,
      "generation": "string",
      "id": "string",
      "kind": "storage#object",
      "kmsKeyName": "string",
      "md5Hash": "string",
      "mediaLink": "string",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "metageneration": "string",
      "name": "string",
      "owner": {
        "entity": "string",
        "entityId": "string"
      },
      "retentionExpirationTime": "1970-01-01T00:00:00Z",
      "selfLink": "string",
      "size": "string",
      "storageClass": "string",
      "temporaryHold": true,
      "timeCreated": "1970-01-01T00:00:00Z",
      "timeDeleted": "1970-01-01T00:00:00Z",
      "timeStorageClassUpdated": "1970-01-01T00:00:00Z",
      "updated": "1970-01-01T00:00:00Z"
    }
  ],
  "kind": "storage#objects",
  "nextPageToken": "string",
  "prefixes": [
    "string"
  ]
}
```

A list of objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Object](#schemaobject)]|false|none|The list of items.|
|kind|string|false|none|The kind of item this is. For lists of objects, this is always storage#objects.|
|nextPageToken|string|false|none|The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.|
|prefixes|[string]|false|none|The list of prefixes of objects matching-but-not-listed up to and including the requested delimiter.|

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
  "kind": "storage#policy",
  "resourceId": "string",
  "version": 0
}
```

A bucket/object IAM policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bindings|[object]|false|none|An association between a role, which comes with a set of permissions, and members who may assume that role.|
|etag|string(byte)|false|none|HTTP 1.1  Entity tag for the policy.|
|kind|string|false|none|The kind of item this is. For policies, this is always storage#policy. This field is ignored on input.|
|resourceId|string|false|none|The ID of the resource to which this policy belongs. Will be of the form projects/_/buckets/bucket for buckets, and projects/_/buckets/bucket/objects/object for objects. A specific generation may be specified by appending #generationNumber to the end of the object name, e.g. projects/_/buckets/my-bucket/objects/data.txt#17. The current generation can be denoted with #0. This field is ignored on input.|
|version|integer(int32)|false|none|The IAM policy format version.|

<h2 id="tocS_RewriteResponse">RewriteResponse</h2>
<!-- backwards compatibility -->
<a id="schemarewriteresponse"></a>
<a id="schema_RewriteResponse"></a>
<a id="tocSrewriteresponse"></a>
<a id="tocsrewriteresponse"></a>

```json
{
  "done": true,
  "kind": "storage#rewriteResponse",
  "objectSize": "string",
  "resource": {
    "acl": [
      {
        "bucket": "string",
        "domain": "string",
        "email": "string",
        "entity": "string",
        "entityId": "string",
        "etag": "string",
        "generation": "string",
        "id": "string",
        "kind": "storage#objectAccessControl",
        "object": "string",
        "projectTeam": {
          "projectNumber": "string",
          "team": "string"
        },
        "role": "string",
        "selfLink": "string"
      }
    ],
    "bucket": "string",
    "cacheControl": "string",
    "componentCount": 0,
    "contentDisposition": "string",
    "contentEncoding": "string",
    "contentLanguage": "string",
    "contentType": "string",
    "crc32c": "string",
    "customTime": "1970-01-01T00:00:00Z",
    "customerEncryption": {
      "encryptionAlgorithm": "string",
      "keySha256": "string"
    },
    "etag": "string",
    "eventBasedHold": true,
    "generation": "string",
    "id": "string",
    "kind": "storage#object",
    "kmsKeyName": "string",
    "md5Hash": "string",
    "mediaLink": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "metageneration": "string",
    "name": "string",
    "owner": {
      "entity": "string",
      "entityId": "string"
    },
    "retentionExpirationTime": "1970-01-01T00:00:00Z",
    "selfLink": "string",
    "size": "string",
    "storageClass": "string",
    "temporaryHold": true,
    "timeCreated": "1970-01-01T00:00:00Z",
    "timeDeleted": "1970-01-01T00:00:00Z",
    "timeStorageClassUpdated": "1970-01-01T00:00:00Z",
    "updated": "1970-01-01T00:00:00Z"
  },
  "rewriteToken": "string",
  "totalBytesRewritten": "string"
}
```

A rewrite response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|done|boolean|false|none|true if the copy is finished; otherwise, false if the copy is in progress. This property is always present in the response.|
|kind|string|false|none|The kind of item this is.|
|objectSize|string(int64)|false|none|The total size of the object being copied in bytes. This property is always present in the response.|
|resource|[Object](#schemaobject)|false|none|A resource containing the metadata for the copied-to object. This property is present in the response only when copying completes.|
|rewriteToken|string|false|none|A token to use in subsequent requests to continue copying data. This token is present in the response only when there is more data to copy.|
|totalBytesRewritten|string(int64)|false|none|The total bytes written so far, which can be used to provide a waiting user with a progress indicator. This property is always present in the response.|

<h2 id="tocS_ServiceAccount">ServiceAccount</h2>
<!-- backwards compatibility -->
<a id="schemaserviceaccount"></a>
<a id="schema_ServiceAccount"></a>
<a id="tocSserviceaccount"></a>
<a id="tocsserviceaccount"></a>

```json
{
  "email_address": "string",
  "kind": "storage#serviceAccount"
}
```

A subscription to receive Google PubSub notifications.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email_address|string|false|none|The ID of the notification.|
|kind|string|false|none|The kind of item this is. For notifications, this is always storage#notification.|

<h2 id="tocS_TestIamPermissionsResponse">TestIamPermissionsResponse</h2>
<!-- backwards compatibility -->
<a id="schematestiampermissionsresponse"></a>
<a id="schema_TestIamPermissionsResponse"></a>
<a id="tocStestiampermissionsresponse"></a>
<a id="tocstestiampermissionsresponse"></a>

```json
{
  "kind": "storage#testIamPermissionsResponse",
  "permissions": [
    "string"
  ]
}
```

A storage.(buckets|objects).testIamPermissions response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|The kind of item this is.|
|permissions|[string]|false|none|The permissions held by the caller. Permissions are always of the format storage.resource.capability, where resource is one of buckets or objects. The supported permissions are as follows:  <br>- storage.buckets.delete — Delete bucket.  <br>- storage.buckets.get — Read bucket metadata.  <br>- storage.buckets.getIamPolicy — Read bucket IAM policy.  <br>- storage.buckets.create — Create bucket.  <br>- storage.buckets.list — List buckets.  <br>- storage.buckets.setIamPolicy — Update bucket IAM policy.  <br>- storage.buckets.update — Update bucket metadata.  <br>- storage.objects.delete — Delete object.  <br>- storage.objects.get — Read object data and metadata.  <br>- storage.objects.getIamPolicy — Read object IAM policy.  <br>- storage.objects.create — Create object.  <br>- storage.objects.list — List objects.  <br>- storage.objects.setIamPolicy — Update object IAM policy.  <br>- storage.objects.update — Update object metadata.|
