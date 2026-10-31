<h1 id="cloud-shell-api">Cloud Shell API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Allows users to start, configure, and connect to interactive shell sessions running in the cloud.

Base URLs:

* <a href="https://cloudshell.googleapis.com/">https://cloudshell.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/shell/docs/">External documentation</a>

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

<h1 id="cloud-shell-api-operations">operations</h1>

## cloudshell.operations.delete

<a id="opIdcloudshell.operations.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{name}`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

<h3 id="cloudshelloperationsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource to be deleted.|
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

<h3 id="cloudshelloperationsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudshell.operations.cancel

<a id="opIdcloudshell.operations.cancel"></a>

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

<h3 id="cloudshelloperationscancel-parameters">Parameters</h3>

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

<h3 id="cloudshelloperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

<h1 id="cloud-shell-api-users">users</h1>

## cloudshell.users.environments.addPublicKey

<a id="opIdcloudshell.users.environments.addPublicKey"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:addPublicKey \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "key": "string"
  }'
```

`POST /v1/{environment}:addPublicKey`

Adds a public SSH key to an environment, allowing clients with the corresponding private key to connect to that environment via SSH. If a key with the same content already exists, this will error with ALREADY_EXISTS.

> Body parameter

```json
{
  "key": "string"
}
```

<h3 id="cloudshellusersenvironmentsaddpublickey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|path|string|true|Environment this key should be added to, e.g. `users/me/environments/default`.|
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
|body|body|[AddPublicKeyRequest](#schemaaddpublickeyrequest)|false|none|
|» key|body|string|false|Key that should be added to the environment. Supported formats are `ssh-dss` (see RFC4253), `ssh-rsa` (see RFC4253), `ecdsa-sha2-nistp256` (see RFC5656), `ecdsa-sha2-nistp384` (see RFC5656) and `ecdsa-sha2-nistp521` (see RFC5656). It should be structured as <format> <content>, where <content> part is encoded with Base64.|

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

<h3 id="cloudshellusersenvironmentsaddpublickey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudshell.users.environments.removePublicKey

<a id="opIdcloudshell.users.environments.removePublicKey"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:removePublicKey \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "key": "string"
  }'
```

`POST /v1/{environment}:removePublicKey`

Removes a public SSH key from an environment. Clients will no longer be able to connect to the environment using the corresponding private key. If a key with the same content is not present, this will error with NOT_FOUND.

> Body parameter

```json
{
  "key": "string"
}
```

<h3 id="cloudshellusersenvironmentsremovepublickey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|path|string|true|Environment this key should be removed from, e.g. `users/me/environments/default`.|
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
|body|body|[RemovePublicKeyRequest](#schemaremovepublickeyrequest)|false|none|
|» key|body|string|false|Key that should be removed from the environment.|

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

<h3 id="cloudshellusersenvironmentsremovepublickey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudshell.users.environments.get

<a id="opIdcloudshell.users.environments.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Gets an environment. Returns NOT_FOUND if the environment does not exist.

<h3 id="cloudshellusersenvironmentsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the requested resource, for example `users/me/environments/default` or `users/someone@example.com/environments/default`.|
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
  "dockerImage": "string",
  "id": "string",
  "name": "string",
  "publicKeys": [
    "string"
  ],
  "sshHost": "string",
  "sshPort": 0,
  "sshUsername": "string",
  "state": "STATE_UNSPECIFIED",
  "webHost": "string"
}
```

<h3 id="cloudshellusersenvironmentsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Environment](#schemaenvironment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudshell.users.environments.authorize

<a id="opIdcloudshell.users.environments.authorize"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:authorize \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accessToken": "string",
    "expireTime": "string",
    "idToken": "string"
  }'
```

`POST /v1/{name}:authorize`

Sends OAuth credentials to a running environment on behalf of a user. When this completes, the environment will be authorized to run various Google Cloud command line tools without requiring the user to manually authenticate.

> Body parameter

```json
{
  "accessToken": "string",
  "expireTime": "string",
  "idToken": "string"
}
```

<h3 id="cloudshellusersenvironmentsauthorize-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Name of the resource that should receive the credentials, for example `users/me/environments/default` or `users/someone@example.com/environments/default`.|
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
|body|body|[AuthorizeEnvironmentRequest](#schemaauthorizeenvironmentrequest)|false|none|
|» accessToken|body|string|false|The OAuth access token that should be sent to the environment.|
|» expireTime|body|string(google-datetime)|false|The time when the credentials expire. If not set, defaults to one hour from when the server received the request.|
|» idToken|body|string|false|The OAuth ID token that should be sent to the environment.|

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

<h3 id="cloudshellusersenvironmentsauthorize-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudshell.users.environments.start

<a id="opIdcloudshell.users.environments.start"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:start \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accessToken": "string",
    "publicKeys": [
      "string"
    ]
  }'
```

`POST /v1/{name}:start`

Starts an existing environment, allowing clients to connect to it. The returned operation will contain an instance of StartEnvironmentMetadata in its metadata field. Users can wait for the environment to start by polling this operation via GetOperation. Once the environment has finished starting and is ready to accept connections, the operation will contain a StartEnvironmentResponse in its response field.

> Body parameter

```json
{
  "accessToken": "string",
  "publicKeys": [
    "string"
  ]
}
```

<h3 id="cloudshellusersenvironmentsstart-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Name of the resource that should be started, for example `users/me/environments/default` or `users/someone@example.com/environments/default`.|
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
|body|body|[StartEnvironmentRequest](#schemastartenvironmentrequest)|false|none|
|» accessToken|body|string|false|The initial access token passed to the environment. If this is present and valid, the environment will be pre-authenticated with gcloud so that the user can run gcloud commands in Cloud Shell without having to log in. This code can be updated later by calling AuthorizeEnvironment.|
|» publicKeys|body|[string]|false|Public keys that should be added to the environment before it is started.|

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

<h3 id="cloudshellusersenvironmentsstart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_AddPublicKeyMetadata">AddPublicKeyMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaaddpublickeymetadata"></a>
<a id="schema_AddPublicKeyMetadata"></a>
<a id="tocSaddpublickeymetadata"></a>
<a id="tocsaddpublickeymetadata"></a>

```json
{}
```

Message included in the metadata field of operations returned from AddPublicKey.

<h2 id="tocS_AddPublicKeyRequest">AddPublicKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddpublickeyrequest"></a>
<a id="schema_AddPublicKeyRequest"></a>
<a id="tocSaddpublickeyrequest"></a>
<a id="tocsaddpublickeyrequest"></a>

```json
{
  "key": "string"
}
```

Request message for AddPublicKey.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|Key that should be added to the environment. Supported formats are `ssh-dss` (see RFC4253), `ssh-rsa` (see RFC4253), `ecdsa-sha2-nistp256` (see RFC5656), `ecdsa-sha2-nistp384` (see RFC5656) and `ecdsa-sha2-nistp521` (see RFC5656). It should be structured as <format> <content>, where <content> part is encoded with Base64.|

<h2 id="tocS_AddPublicKeyResponse">AddPublicKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddpublickeyresponse"></a>
<a id="schema_AddPublicKeyResponse"></a>
<a id="tocSaddpublickeyresponse"></a>
<a id="tocsaddpublickeyresponse"></a>

```json
{
  "key": "string"
}
```

Response message for AddPublicKey.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|Key that was added to the environment.|

<h2 id="tocS_AuthorizeEnvironmentMetadata">AuthorizeEnvironmentMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizeenvironmentmetadata"></a>
<a id="schema_AuthorizeEnvironmentMetadata"></a>
<a id="tocSauthorizeenvironmentmetadata"></a>
<a id="tocsauthorizeenvironmentmetadata"></a>

```json
{}
```

Message included in the metadata field of operations returned from AuthorizeEnvironment.

<h2 id="tocS_AuthorizeEnvironmentRequest">AuthorizeEnvironmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizeenvironmentrequest"></a>
<a id="schema_AuthorizeEnvironmentRequest"></a>
<a id="tocSauthorizeenvironmentrequest"></a>
<a id="tocsauthorizeenvironmentrequest"></a>

```json
{
  "accessToken": "string",
  "expireTime": "string",
  "idToken": "string"
}
```

Request message for AuthorizeEnvironment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessToken|string|false|none|The OAuth access token that should be sent to the environment.|
|expireTime|string(google-datetime)|false|none|The time when the credentials expire. If not set, defaults to one hour from when the server received the request.|
|idToken|string|false|none|The OAuth ID token that should be sent to the environment.|

<h2 id="tocS_AuthorizeEnvironmentResponse">AuthorizeEnvironmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizeenvironmentresponse"></a>
<a id="schema_AuthorizeEnvironmentResponse"></a>
<a id="tocSauthorizeenvironmentresponse"></a>
<a id="tocsauthorizeenvironmentresponse"></a>

```json
{}
```

Response message for AuthorizeEnvironment.

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

<h2 id="tocS_CreateEnvironmentMetadata">CreateEnvironmentMetadata</h2>
<!-- backwards compatibility -->
<a id="schemacreateenvironmentmetadata"></a>
<a id="schema_CreateEnvironmentMetadata"></a>
<a id="tocScreateenvironmentmetadata"></a>
<a id="tocscreateenvironmentmetadata"></a>

```json
{}
```

Message included in the metadata field of operations returned from CreateEnvironment.

<h2 id="tocS_DeleteEnvironmentMetadata">DeleteEnvironmentMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadeleteenvironmentmetadata"></a>
<a id="schema_DeleteEnvironmentMetadata"></a>
<a id="tocSdeleteenvironmentmetadata"></a>
<a id="tocsdeleteenvironmentmetadata"></a>

```json
{}
```

Message included in the metadata field of operations returned from DeleteEnvironment.

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

<h2 id="tocS_Environment">Environment</h2>
<!-- backwards compatibility -->
<a id="schemaenvironment"></a>
<a id="schema_Environment"></a>
<a id="tocSenvironment"></a>
<a id="tocsenvironment"></a>

```json
{
  "dockerImage": "string",
  "id": "string",
  "name": "string",
  "publicKeys": [
    "string"
  ],
  "sshHost": "string",
  "sshPort": 0,
  "sshUsername": "string",
  "state": "STATE_UNSPECIFIED",
  "webHost": "string"
}
```

A Cloud Shell environment, which is defined as the combination of a Docker image specifying what is installed on the environment and a home directory containing the user's data that will remain across sessions. Each user has at least an environment with the ID "default".

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dockerImage|string|false|none|Required. Immutable. Full path to the Docker image used to run this environment, e.g. "gcr.io/dev-con/cloud-devshell:latest".|
|id|string|false|read-only|Output only. The environment's identifier, unique among the user's environments.|
|name|string|false|none|Immutable. Full name of this resource, in the format `users/{owner_email}/environments/{environment_id}`. `{owner_email}` is the email address of the user to whom this environment belongs, and `{environment_id}` is the identifier of this environment. For example, `users/someone@example.com/environments/default`.|
|publicKeys|[string]|false|read-only|Output only. Public keys associated with the environment. Clients can connect to this environment via SSH only if they possess a private key corresponding to at least one of these public keys. Keys can be added to or removed from the environment using the AddPublicKey and RemovePublicKey methods.|
|sshHost|string|false|read-only|Output only. Host to which clients can connect to initiate SSH sessions with the environment.|
|sshPort|integer(int32)|false|read-only|Output only. Port to which clients can connect to initiate SSH sessions with the environment.|
|sshUsername|string|false|read-only|Output only. Username that clients should use when initiating SSH sessions with the environment.|
|state|string|false|read-only|Output only. Current execution state of this environment.|
|webHost|string|false|read-only|Output only. Host to which clients can connect to initiate HTTPS or WSS connections with the environment.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|SUSPENDED|
|state|PENDING|
|state|RUNNING|
|state|DELETING|

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

<h2 id="tocS_RemovePublicKeyMetadata">RemovePublicKeyMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaremovepublickeymetadata"></a>
<a id="schema_RemovePublicKeyMetadata"></a>
<a id="tocSremovepublickeymetadata"></a>
<a id="tocsremovepublickeymetadata"></a>

```json
{}
```

Message included in the metadata field of operations returned from RemovePublicKey.

<h2 id="tocS_RemovePublicKeyRequest">RemovePublicKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremovepublickeyrequest"></a>
<a id="schema_RemovePublicKeyRequest"></a>
<a id="tocSremovepublickeyrequest"></a>
<a id="tocsremovepublickeyrequest"></a>

```json
{
  "key": "string"
}
```

Request message for RemovePublicKey.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|Key that should be removed from the environment.|

<h2 id="tocS_RemovePublicKeyResponse">RemovePublicKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaremovepublickeyresponse"></a>
<a id="schema_RemovePublicKeyResponse"></a>
<a id="tocSremovepublickeyresponse"></a>
<a id="tocsremovepublickeyresponse"></a>

```json
{}
```

Response message for RemovePublicKey.

<h2 id="tocS_StartEnvironmentMetadata">StartEnvironmentMetadata</h2>
<!-- backwards compatibility -->
<a id="schemastartenvironmentmetadata"></a>
<a id="schema_StartEnvironmentMetadata"></a>
<a id="tocSstartenvironmentmetadata"></a>
<a id="tocsstartenvironmentmetadata"></a>

```json
{
  "state": "STATE_UNSPECIFIED"
}
```

Message included in the metadata field of operations returned from StartEnvironment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|string|false|none|Current state of the environment being started.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|STARTING|
|state|UNARCHIVING_DISK|
|state|AWAITING_COMPUTE_RESOURCES|
|state|FINISHED|

<h2 id="tocS_StartEnvironmentRequest">StartEnvironmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartenvironmentrequest"></a>
<a id="schema_StartEnvironmentRequest"></a>
<a id="tocSstartenvironmentrequest"></a>
<a id="tocsstartenvironmentrequest"></a>

```json
{
  "accessToken": "string",
  "publicKeys": [
    "string"
  ]
}
```

Request message for StartEnvironment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessToken|string|false|none|The initial access token passed to the environment. If this is present and valid, the environment will be pre-authenticated with gcloud so that the user can run gcloud commands in Cloud Shell without having to log in. This code can be updated later by calling AuthorizeEnvironment.|
|publicKeys|[string]|false|none|Public keys that should be added to the environment before it is started.|

<h2 id="tocS_StartEnvironmentResponse">StartEnvironmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartenvironmentresponse"></a>
<a id="schema_StartEnvironmentResponse"></a>
<a id="tocSstartenvironmentresponse"></a>
<a id="tocsstartenvironmentresponse"></a>

```json
{
  "environment": {
    "dockerImage": "string",
    "id": "string",
    "name": "string",
    "publicKeys": [
      "string"
    ],
    "sshHost": "string",
    "sshPort": 0,
    "sshUsername": "string",
    "state": "STATE_UNSPECIFIED",
    "webHost": "string"
  }
}
```

Message included in the response field of operations returned from StartEnvironment once the operation is complete.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environment|[Environment](#schemaenvironment)|false|none|Environment that was started.|

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
