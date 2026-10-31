<h1 id="cloud-os-login-api">Cloud OS Login API v1beta</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

You can use OS Login to manage access to your VM instances using IAM roles.

Base URLs:

* <a href="https://oslogin.googleapis.com/">https://oslogin.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/compute/docs/oslogin/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/cloud-platform.read-only|View your data across Google Cloud services and see the email address of your Google Account|
|https://www.googleapis.com/auth/compute|View and manage your Google Compute Engine resources|
|https://www.googleapis.com/auth/compute.readonly|View your Google Compute Engine resources|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/cloud-platform.read-only|View your data across Google Cloud services and see the email address of your Google Account|
|https://www.googleapis.com/auth/compute|View and manage your Google Compute Engine resources|
|https://www.googleapis.com/auth/compute.readonly|View your Google Compute Engine resources|

<h1 id="cloud-os-login-api-users">users</h1>

## oslogin.users.sshPublicKeys.get

<a id="opIdoslogin.users.sshPublicKeys.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{name}`

Retrieves an SSH public key.

<h3 id="osloginuserssshpublickeysget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The fingerprint of the public key to retrieve. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user}/sshPublicKeys/{fingerprint}`.|
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
  "expirationTimeUsec": "string",
  "fingerprint": "string",
  "key": "string",
  "name": "string"
}
```

<h3 id="osloginuserssshpublickeysget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SshPublicKey](#schemasshpublickey)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute )
</aside>

## oslogin.users.sshPublicKeys.delete

<a id="opIdoslogin.users.sshPublicKeys.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta/{name}`

Deletes an SSH public key.

<h3 id="osloginuserssshpublickeysdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The fingerprint of the public key to update. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user}/sshPublicKeys/{fingerprint}`.|
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

<h3 id="osloginuserssshpublickeysdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute )
</aside>

## oslogin.users.sshPublicKeys.patch

<a id="opIdoslogin.users.sshPublicKeys.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "expirationTimeUsec": "string",
    "key": "string"
  }'
```

`PATCH /v1beta/{name}`

Updates an SSH public key and returns the profile information. This method supports patch semantics.

> Body parameter

```json
{
  "expirationTimeUsec": "string",
  "key": "string"
}
```

<h3 id="osloginuserssshpublickeyspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The fingerprint of the public key to update. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user}/sshPublicKeys/{fingerprint}`.|
|updateMask|query|string|false|Mask to control which fields get updated. Updates all if not present.|
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
|body|body|[SshPublicKey](#schemasshpublickey)|false|none|
|» expirationTimeUsec|body|string(int64)|false|An expiration time in microseconds since epoch.|
|» key|body|string|false|Public key text in SSH format, defined by RFC4253 section 6.6.|

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
  "expirationTimeUsec": "string",
  "fingerprint": "string",
  "key": "string",
  "name": "string"
}
```

<h3 id="osloginuserssshpublickeyspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SshPublicKey](#schemasshpublickey)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute )
</aside>

## oslogin.users.getLoginProfile

<a id="opIdoslogin.users.getLoginProfile"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/loginProfile \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{name}/loginProfile`

Retrieves the profile information used for logging in to a virtual machine on Google Compute Engine.

<h3 id="osloginusersgetloginprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The unique ID for the user in format `users/{user}`.|
|projectId|query|string|false|The project ID of the Google Cloud Platform project.|
|systemId|query|string|false|A system ID for filtering the results of the request.|
|view|query|string|false|The view configures whether to retrieve security keys information.|
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
|view|LOGIN_PROFILE_VIEW_UNSPECIFIED|
|view|BASIC|
|view|SECURITY_KEY|
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
  "posixAccounts": [
    {
      "accountId": "string",
      "gecos": "string",
      "gid": "string",
      "homeDirectory": "string",
      "name": "string",
      "operatingSystemType": "OPERATING_SYSTEM_TYPE_UNSPECIFIED",
      "primary": true,
      "shell": "string",
      "systemId": "string",
      "uid": "string",
      "username": "string"
    }
  ],
  "securityKeys": [
    {
      "privateKey": "string",
      "publicKey": "string",
      "universalTwoFactor": {
        "appId": "string"
      },
      "webAuthn": {
        "rpId": "string"
      }
    }
  ],
  "sshPublicKeys": {
    "property1": {
      "expirationTimeUsec": "string",
      "fingerprint": "string",
      "key": "string",
      "name": "string"
    },
    "property2": {
      "expirationTimeUsec": "string",
      "fingerprint": "string",
      "key": "string",
      "name": "string"
    }
  }
}
```

<h3 id="osloginusersgetloginprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LoginProfile](#schemaloginprofile)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute.readonly )
</aside>

## oslogin.users.sshPublicKeys.create

<a id="opIdoslogin.users.sshPublicKeys.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/sshPublicKeys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "expirationTimeUsec": "string",
    "key": "string"
  }'
```

`POST /v1beta/{parent}/sshPublicKeys`

Create an SSH public key

> Body parameter

```json
{
  "expirationTimeUsec": "string",
  "key": "string"
}
```

<h3 id="osloginuserssshpublickeyscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The unique ID for the user in format `users/{user}`.|
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
|body|body|[SshPublicKey](#schemasshpublickey)|false|none|
|» expirationTimeUsec|body|string(int64)|false|An expiration time in microseconds since epoch.|
|» key|body|string|false|Public key text in SSH format, defined by RFC4253 section 6.6.|

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
  "expirationTimeUsec": "string",
  "fingerprint": "string",
  "key": "string",
  "name": "string"
}
```

<h3 id="osloginuserssshpublickeyscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SshPublicKey](#schemasshpublickey)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute )
</aside>

## oslogin.users.importSshPublicKey

<a id="opIdoslogin.users.importSshPublicKey"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string:importSshPublicKey \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "expirationTimeUsec": "string",
    "key": "string"
  }'
```

`POST /v1beta/{parent}:importSshPublicKey`

Adds an SSH public key and returns the profile information. Default POSIX account information is set when no username and UID exist as part of the login profile.

> Body parameter

```json
{
  "expirationTimeUsec": "string",
  "key": "string"
}
```

<h3 id="osloginusersimportsshpublickey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The unique ID for the user in format `users/{user}`.|
|projectId|query|string|false|The project ID of the Google Cloud Platform project.|
|view|query|string|false|The view configures whether to retrieve security keys information.|
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
|body|body|[SshPublicKey](#schemasshpublickey)|false|none|
|» expirationTimeUsec|body|string(int64)|false|An expiration time in microseconds since epoch.|
|» key|body|string|false|Public key text in SSH format, defined by RFC4253 section 6.6.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|view|LOGIN_PROFILE_VIEW_UNSPECIFIED|
|view|BASIC|
|view|SECURITY_KEY|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "details": "string",
  "loginProfile": {
    "name": "string",
    "posixAccounts": [
      {
        "accountId": "string",
        "gecos": "string",
        "gid": "string",
        "homeDirectory": "string",
        "name": "string",
        "operatingSystemType": "OPERATING_SYSTEM_TYPE_UNSPECIFIED",
        "primary": true,
        "shell": "string",
        "systemId": "string",
        "uid": "string",
        "username": "string"
      }
    ],
    "securityKeys": [
      {
        "privateKey": "string",
        "publicKey": "string",
        "universalTwoFactor": {
          "appId": "string"
        },
        "webAuthn": {
          "rpId": "string"
        }
      }
    ],
    "sshPublicKeys": {
      "property1": {
        "expirationTimeUsec": "string",
        "fingerprint": "string",
        "key": "string",
        "name": "string"
      },
      "property2": {
        "expirationTimeUsec": "string",
        "fingerprint": "string",
        "key": "string",
        "name": "string"
      }
    }
  }
}
```

<h3 id="osloginusersimportsshpublickey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ImportSshPublicKeyResponse](#schemaimportsshpublickeyresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute )
</aside>

# Schemas

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

<h2 id="tocS_ImportSshPublicKeyResponse">ImportSshPublicKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaimportsshpublickeyresponse"></a>
<a id="schema_ImportSshPublicKeyResponse"></a>
<a id="tocSimportsshpublickeyresponse"></a>
<a id="tocsimportsshpublickeyresponse"></a>

```json
{
  "details": "string",
  "loginProfile": {
    "name": "string",
    "posixAccounts": [
      {
        "accountId": "string",
        "gecos": "string",
        "gid": "string",
        "homeDirectory": "string",
        "name": "string",
        "operatingSystemType": "OPERATING_SYSTEM_TYPE_UNSPECIFIED",
        "primary": true,
        "shell": "string",
        "systemId": "string",
        "uid": "string",
        "username": "string"
      }
    ],
    "securityKeys": [
      {
        "privateKey": "string",
        "publicKey": "string",
        "universalTwoFactor": {
          "appId": "string"
        },
        "webAuthn": {
          "rpId": "string"
        }
      }
    ],
    "sshPublicKeys": {
      "property1": {
        "expirationTimeUsec": "string",
        "fingerprint": "string",
        "key": "string",
        "name": "string"
      },
      "property2": {
        "expirationTimeUsec": "string",
        "fingerprint": "string",
        "key": "string",
        "name": "string"
      }
    }
  }
}
```

A response message for importing an SSH public key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|string|false|none|Detailed information about import results.|
|loginProfile|[LoginProfile](#schemaloginprofile)|false|none|The login profile information for the user.|

<h2 id="tocS_LoginProfile">LoginProfile</h2>
<!-- backwards compatibility -->
<a id="schemaloginprofile"></a>
<a id="schema_LoginProfile"></a>
<a id="tocSloginprofile"></a>
<a id="tocsloginprofile"></a>

```json
{
  "name": "string",
  "posixAccounts": [
    {
      "accountId": "string",
      "gecos": "string",
      "gid": "string",
      "homeDirectory": "string",
      "name": "string",
      "operatingSystemType": "OPERATING_SYSTEM_TYPE_UNSPECIFIED",
      "primary": true,
      "shell": "string",
      "systemId": "string",
      "uid": "string",
      "username": "string"
    }
  ],
  "securityKeys": [
    {
      "privateKey": "string",
      "publicKey": "string",
      "universalTwoFactor": {
        "appId": "string"
      },
      "webAuthn": {
        "rpId": "string"
      }
    }
  ],
  "sshPublicKeys": {
    "property1": {
      "expirationTimeUsec": "string",
      "fingerprint": "string",
      "key": "string",
      "name": "string"
    },
    "property2": {
      "expirationTimeUsec": "string",
      "fingerprint": "string",
      "key": "string",
      "name": "string"
    }
  }
}
```

The user profile information used for logging in to a virtual machine on Google Compute Engine.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Required. A unique user ID.|
|posixAccounts|[[PosixAccount](#schemaposixaccount)]|false|none|The list of POSIX accounts associated with the user.|
|securityKeys|[[SecurityKey](#schemasecuritykey)]|false|none|The registered security key credentials for a user.|
|sshPublicKeys|object|false|none|A map from SSH public key fingerprint to the associated key object.|

<h2 id="tocS_PosixAccount">PosixAccount</h2>
<!-- backwards compatibility -->
<a id="schemaposixaccount"></a>
<a id="schema_PosixAccount"></a>
<a id="tocSposixaccount"></a>
<a id="tocsposixaccount"></a>

```json
{
  "accountId": "string",
  "gecos": "string",
  "gid": "string",
  "homeDirectory": "string",
  "name": "string",
  "operatingSystemType": "OPERATING_SYSTEM_TYPE_UNSPECIFIED",
  "primary": true,
  "shell": "string",
  "systemId": "string",
  "uid": "string",
  "username": "string"
}
```

The POSIX account information associated with a Google account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|read-only|Output only. A POSIX account identifier.|
|gecos|string|false|none|The GECOS (user information) entry for this account.|
|gid|string(int64)|false|none|The default group ID.|
|homeDirectory|string|false|none|The path to the home directory for this account.|
|name|string|false|read-only|Output only. The canonical resource name.|
|operatingSystemType|string|false|none|The operating system type where this account applies.|
|primary|boolean|false|none|Only one POSIX account can be marked as primary.|
|shell|string|false|none|The path to the logic shell for this account.|
|systemId|string|false|none|System identifier for which account the username or uid applies to. By default, the empty value is used.|
|uid|string(int64)|false|none|The user ID.|
|username|string|false|none|The username of the POSIX account.|

#### Enumerated Values

|Property|Value|
|---|---|
|operatingSystemType|OPERATING_SYSTEM_TYPE_UNSPECIFIED|
|operatingSystemType|LINUX|
|operatingSystemType|WINDOWS|

<h2 id="tocS_SecurityKey">SecurityKey</h2>
<!-- backwards compatibility -->
<a id="schemasecuritykey"></a>
<a id="schema_SecurityKey"></a>
<a id="tocSsecuritykey"></a>
<a id="tocssecuritykey"></a>

```json
{
  "privateKey": "string",
  "publicKey": "string",
  "universalTwoFactor": {
    "appId": "string"
  },
  "webAuthn": {
    "rpId": "string"
  }
}
```

The credential information for a Google registered security key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|privateKey|string|false|none|Hardware-backed private key text in SSH format.|
|publicKey|string|false|none|Public key text in SSH format, defined by [RFC4253]("https://www.ietf.org/rfc/rfc4253.txt") section 6.6.|
|universalTwoFactor|[UniversalTwoFactor](#schemauniversaltwofactor)|false|none|The U2F protocol type.|
|webAuthn|[WebAuthn](#schemawebauthn)|false|none|The Web Authentication protocol type.|

<h2 id="tocS_SshPublicKey">SshPublicKey</h2>
<!-- backwards compatibility -->
<a id="schemasshpublickey"></a>
<a id="schema_SshPublicKey"></a>
<a id="tocSsshpublickey"></a>
<a id="tocssshpublickey"></a>

```json
{
  "expirationTimeUsec": "string",
  "fingerprint": "string",
  "key": "string",
  "name": "string"
}
```

The SSH public key information associated with a Google account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expirationTimeUsec|string(int64)|false|none|An expiration time in microseconds since epoch.|
|fingerprint|string|false|read-only|Output only. The SHA-256 fingerprint of the SSH public key.|
|key|string|false|none|Public key text in SSH format, defined by RFC4253 section 6.6.|
|name|string|false|read-only|Output only. The canonical resource name.|

<h2 id="tocS_UniversalTwoFactor">UniversalTwoFactor</h2>
<!-- backwards compatibility -->
<a id="schemauniversaltwofactor"></a>
<a id="schema_UniversalTwoFactor"></a>
<a id="tocSuniversaltwofactor"></a>
<a id="tocsuniversaltwofactor"></a>

```json
{
  "appId": "string"
}
```

Security key information specific to the U2F protocol.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|string|false|none|Application ID for the U2F protocol.|

<h2 id="tocS_WebAuthn">WebAuthn</h2>
<!-- backwards compatibility -->
<a id="schemawebauthn"></a>
<a id="schema_WebAuthn"></a>
<a id="tocSwebauthn"></a>
<a id="tocswebauthn"></a>

```json
{
  "rpId": "string"
}
```

Security key information specific to the Web Authentication protocol.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rpId|string|false|none|Relying party ID for Web Authentication.|
