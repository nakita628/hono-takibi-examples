<h1 id="vcsv1">vcs.v1 v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<h1 id="vcsv1-vcsv1vcsservice">vcs.v1.VCSService</h1>

## GetCommit

<a id="opIdvcs.v1.VCSService.GetCommit"></a>

> Code samples

```bash
curl http://localhost:4040/vcs.v1.VCSService/GetCommit \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "repositoryURL": "string",
    "ref": "string"
  }'
```

`POST /vcs.v1.VCSService/GetCommit`

> Body parameter

```json
{
  "repositoryURL": "string",
  "ref": "string"
}
```

<h3 id="getcommit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[vcs.v1.GetCommitRequest](#schemavcs.v1.getcommitrequest)|true|none|
|» repositoryURL|body|string|false|the full path to the repository|
|» ref|body|string|false|the vcs ref to get the file from|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "author": {
    "login": "string",
    "avatarURL": "string"
  },
  "date": "string",
  "sha": "string",
  "URL": "string"
}
```

> default Response

```json
{
  "code": "not_found",
  "message": "string",
  "details": [
    {
      "type": "string",
      "value": "string",
      "debug": {}
    }
  ]
}
```

<h3 id="getcommit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[vcs.v1.GetCommitResponse](#schemavcs.v1.getcommitresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

## GetCommits

<a id="opIdvcs.v1.VCSService.GetCommits"></a>

> Code samples

```bash
curl http://localhost:4040/vcs.v1.VCSService/GetCommits \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "repositoryUrl": "string",
    "refs": [
      "string"
    ]
  }'
```

`POST /vcs.v1.VCSService/GetCommits`

> Body parameter

```json
{
  "repositoryUrl": "string",
  "refs": [
    "string"
  ]
}
```

<h3 id="getcommits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[vcs.v1.GetCommitsRequest](#schemavcs.v1.getcommitsrequest)|true|none|
|» repositoryUrl|body|string|false|none|
|» refs|body|[string]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{
  "commits": [
    {
      "message": "string",
      "author": {
        "login": "string",
        "avatarURL": "string"
      },
      "date": "string",
      "sha": "string",
      "URL": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": "not_found",
  "message": "string",
  "details": [
    {
      "type": "string",
      "value": "string",
      "debug": {}
    }
  ]
}
```

<h3 id="getcommits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[vcs.v1.GetCommitsResponse](#schemavcs.v1.getcommitsresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

## GetFile

<a id="opIdvcs.v1.VCSService.GetFile"></a>

> Code samples

```bash
curl http://localhost:4040/vcs.v1.VCSService/GetFile \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "repositoryURL": "string",
    "ref": "string",
    "localPath": "string",
    "rootPath": "string",
    "functionName": "string"
  }'
```

`POST /vcs.v1.VCSService/GetFile`

> Body parameter

```json
{
  "repositoryURL": "string",
  "ref": "string",
  "localPath": "string",
  "rootPath": "string",
  "functionName": "string"
}
```

<h3 id="getfile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[vcs.v1.GetFileRequest](#schemavcs.v1.getfilerequest)|true|none|
|» repositoryURL|body|string|false|the full path to the repository|
|» ref|body|string|false|the vcs ref to get the file from|
|» localPath|body|string|false|the path to the file as provided by the symbols|
|» rootPath|body|string|false|the root path where the project lives inside the repository|
|» functionName|body|string|false|the function name as provided by the symbols|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{
  "content": "string",
  "URL": "string"
}
```

> default Response

```json
{
  "code": "not_found",
  "message": "string",
  "details": [
    {
      "type": "string",
      "value": "string",
      "debug": {}
    }
  ]
}
```

<h3 id="getfile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[vcs.v1.GetFileResponse](#schemavcs.v1.getfileresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

## GithubApp

<a id="opIdvcs.v1.VCSService.GithubApp"></a>

> Code samples

```bash
curl http://localhost:4040/vcs.v1.VCSService/GithubApp \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{}'
```

`POST /vcs.v1.VCSService/GithubApp`

> Body parameter

```json
{}
```

<h3 id="githubapp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[vcs.v1.GithubAppRequest](#schemavcs.v1.githubapprequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{
  "clientID": "string",
  "callbackURL": "string"
}
```

> default Response

```json
{
  "code": "not_found",
  "message": "string",
  "details": [
    {
      "type": "string",
      "value": "string",
      "debug": {}
    }
  ]
}
```

<h3 id="githubapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[vcs.v1.GithubAppResponse](#schemavcs.v1.githubappresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

## GithubLogin

<a id="opIdvcs.v1.VCSService.GithubLogin"></a>

> Code samples

```bash
curl http://localhost:4040/vcs.v1.VCSService/GithubLogin \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{
    "authorizationCode": "string"
  }'
```

`POST /vcs.v1.VCSService/GithubLogin`

> Body parameter

```json
{
  "authorizationCode": "string"
}
```

<h3 id="githublogin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[vcs.v1.GithubLoginRequest](#schemavcs.v1.githubloginrequest)|true|none|
|» authorizationCode|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{
  "cookie": "string",
  "token": "string",
  "tokenExpiresAt": 0,
  "refreshTokenExpiresAt": 0
}
```

> default Response

```json
{
  "code": "not_found",
  "message": "string",
  "details": [
    {
      "type": "string",
      "value": "string",
      "debug": {}
    }
  ]
}
```

<h3 id="githublogin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[vcs.v1.GithubLoginResponse](#schemavcs.v1.githubloginresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

## GithubRefresh

<a id="opIdvcs.v1.VCSService.GithubRefresh"></a>

> Code samples

```bash
curl http://localhost:4040/vcs.v1.VCSService/GithubRefresh \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connect-Protocol-Version: 1' \
  -d '{}'
```

`POST /vcs.v1.VCSService/GithubRefresh`

> Body parameter

```json
{}
```

<h3 id="githubrefresh-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Connect-Protocol-Version|header|[connect-protocol-version](#schemaconnect-protocol-version)|true|none|
|Connect-Timeout-Ms|header|[connect-timeout-header](#schemaconnect-timeout-header)|false|none|
|body|body|[vcs.v1.GithubRefreshRequest](#schemavcs.v1.githubrefreshrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Connect-Protocol-Version|1|

> Example responses

> 200 Response

```json
{
  "cookie": "string",
  "token": "string",
  "tokenExpiresAt": 0,
  "refreshTokenExpiresAt": 0
}
```

> default Response

```json
{
  "code": "not_found",
  "message": "string",
  "details": [
    {
      "type": "string",
      "value": "string",
      "debug": {}
    }
  ]
}
```

<h3 id="githubrefresh-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[vcs.v1.GithubRefreshResponse](#schemavcs.v1.githubrefreshresponse)|
|default|Default|Error|[connect.error](#schemaconnect.error)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_connect-protocol-version">connect-protocol-version</h2>
<!-- backwards compatibility -->
<a id="schemaconnect-protocol-version"></a>
<a id="schema_connect-protocol-version"></a>
<a id="tocSconnect-protocol-version"></a>
<a id="tocsconnect-protocol-version"></a>

```json
1
```

Define the version of the Connect protocol

<h2 id="tocS_connect-timeout-header">connect-timeout-header</h2>
<!-- backwards compatibility -->
<a id="schemaconnect-timeout-header"></a>
<a id="schema_connect-timeout-header"></a>
<a id="tocSconnect-timeout-header"></a>
<a id="tocsconnect-timeout-header"></a>

```json
0
```

Define the timeout, in ms

<h2 id="tocS_connect.error">connect.error</h2>
<!-- backwards compatibility -->
<a id="schemaconnect.error"></a>
<a id="schema_connect.error"></a>
<a id="tocSconnect.error"></a>
<a id="tocsconnect.error"></a>

```json
{
  "code": "not_found",
  "message": "string",
  "details": [
    {
      "type": "string",
      "value": "string",
      "debug": {}
    }
  ]
}
```

Error type returned by Connect: https://connectrpc.com/docs/go/errors/#http-representation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The status code, which should be an enum value of [google.rpc.Code][google.rpc.Code].|
|message|string|false|none|A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the [google.rpc.Status.details][google.rpc.Status.details] field, or localized by the client.|
|details|[[connect.error_details.Any](#schemaconnect.error_details.any)]|false|none|A list of messages that carry the error details. There is no limit on the number of messages.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|canceled|
|code|unknown|
|code|invalid_argument|
|code|deadline_exceeded|
|code|not_found|
|code|already_exists|
|code|permission_denied|
|code|resource_exhausted|
|code|failed_precondition|
|code|aborted|
|code|out_of_range|
|code|unimplemented|
|code|internal|
|code|unavailable|
|code|data_loss|
|code|unauthenticated|

<h2 id="tocS_connect.error_details.Any">connect.error_details.Any</h2>
<!-- backwards compatibility -->
<a id="schemaconnect.error_details.any"></a>
<a id="schema_connect.error_details.Any"></a>
<a id="tocSconnect.error_details.any"></a>
<a id="tocsconnect.error_details.any"></a>

```json
{
  "type": "string",
  "value": "string",
  "debug": {}
}
```

Contains an arbitrary serialized message along with a @type that describes the type of the serialized message, with an additional debug field for ConnectRPC error details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|A URL that acts as a globally unique identifier for the type of the serialized message. For example: `type.googleapis.com/google.rpc.ErrorInfo`. This is used to determine the schema of the data in the `value` field and is the discriminator for the `debug` field.|
|value|string(binary)|false|none|The Protobuf message, serialized as bytes and base64-encoded. The specific message type is identified by the `type` field.|
|debug|object|false|none|Deserialized error detail payload. The 'type' field indicates the schema. This field is for easier debugging and should not be relied upon for application logic.|

<h2 id="tocS_vcs.v1.CommitAuthor">vcs.v1.CommitAuthor</h2>
<!-- backwards compatibility -->
<a id="schemavcs.v1.commitauthor"></a>
<a id="schema_vcs.v1.CommitAuthor"></a>
<a id="tocSvcs.v1.commitauthor"></a>
<a id="tocsvcs.v1.commitauthor"></a>

```json
{
  "login": "string",
  "avatarURL": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|login|string|false|none|the author login|
|avatarURL|string|false|none|the author avatar URL|

<h2 id="tocS_vcs.v1.CommitInfo">vcs.v1.CommitInfo</h2>
<!-- backwards compatibility -->
<a id="schemavcs.v1.commitinfo"></a>
<a id="schema_vcs.v1.CommitInfo"></a>
<a id="tocSvcs.v1.commitinfo"></a>
<a id="tocsvcs.v1.commitinfo"></a>

```json
{
  "message": "string",
  "author": {
    "login": "string",
    "avatarURL": "string"
  },
  "date": "string",
  "sha": "string",
  "URL": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|the commit message|
|author|[vcs.v1.CommitAuthor](#schemavcs.v1.commitauthor)|false|none|the commit author login|
|date|string|false|none|the commit date|
|sha|string|false|none|the commit sha|
|URL|string|false|none|the full URL to the commit|

<h2 id="tocS_vcs.v1.GetCommitRequest">vcs.v1.GetCommitRequest</h2>
<!-- backwards compatibility -->
<a id="schemavcs.v1.getcommitrequest"></a>
<a id="schema_vcs.v1.GetCommitRequest"></a>
<a id="tocSvcs.v1.getcommitrequest"></a>
<a id="tocsvcs.v1.getcommitrequest"></a>

```json
{
  "repositoryURL": "string",
  "ref": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryURL|string|false|none|the full path to the repository|
|ref|string|false|none|the vcs ref to get the file from|

<h2 id="tocS_vcs.v1.GetCommitResponse">vcs.v1.GetCommitResponse</h2>
<!-- backwards compatibility -->
<a id="schemavcs.v1.getcommitresponse"></a>
<a id="schema_vcs.v1.GetCommitResponse"></a>
<a id="tocSvcs.v1.getcommitresponse"></a>
<a id="tocsvcs.v1.getcommitresponse"></a>

```json
{
  "message": "string",
  "author": {
    "login": "string",
    "avatarURL": "string"
  },
  "date": "string",
  "sha": "string",
  "URL": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|the commit message|
|author|[vcs.v1.CommitAuthor](#schemavcs.v1.commitauthor)|false|none|the commit author login|
|date|string|false|none|the commit date|
|sha|string|false|none|the commit sha|
|URL|string|false|none|the full URL to the commit|

<h2 id="tocS_vcs.v1.GetCommitsRequest">vcs.v1.GetCommitsRequest</h2>
<!-- backwards compatibility -->
<a id="schemavcs.v1.getcommitsrequest"></a>
<a id="schema_vcs.v1.GetCommitsRequest"></a>
<a id="tocSvcs.v1.getcommitsrequest"></a>
<a id="tocsvcs.v1.getcommitsrequest"></a>

```json
{
  "repositoryUrl": "string",
  "refs": [
    "string"
  ]
}
```

New messages for the GetCommits method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryUrl|string|false|none|none|
|refs|[string]|false|none|none|

<h2 id="tocS_vcs.v1.GetCommitsResponse">vcs.v1.GetCommitsResponse</h2>
<!-- backwards compatibility -->
<a id="schemavcs.v1.getcommitsresponse"></a>
<a id="schema_vcs.v1.GetCommitsResponse"></a>
<a id="tocSvcs.v1.getcommitsresponse"></a>
<a id="tocsvcs.v1.getcommitsresponse"></a>

```json
{
  "commits": [
    {
      "message": "string",
      "author": {
        "login": "string",
        "avatarURL": "string"
      },
      "date": "string",
      "sha": "string",
      "URL": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commits|[[vcs.v1.CommitInfo](#schemavcs.v1.commitinfo)]|false|none|none|

<h2 id="tocS_vcs.v1.GetFileRequest">vcs.v1.GetFileRequest</h2>
<!-- backwards compatibility -->
<a id="schemavcs.v1.getfilerequest"></a>
<a id="schema_vcs.v1.GetFileRequest"></a>
<a id="tocSvcs.v1.getfilerequest"></a>
<a id="tocsvcs.v1.getfilerequest"></a>

```json
{
  "repositoryURL": "string",
  "ref": "string",
  "localPath": "string",
  "rootPath": "string",
  "functionName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryURL|string|false|none|the full path to the repository|
|ref|string|false|none|the vcs ref to get the file from|
|localPath|string|false|none|the path to the file as provided by the symbols|
|rootPath|string|false|none|the root path where the project lives inside the repository|
|functionName|string|false|none|the function name as provided by the symbols|

<h2 id="tocS_vcs.v1.GetFileResponse">vcs.v1.GetFileResponse</h2>
<!-- backwards compatibility -->
<a id="schemavcs.v1.getfileresponse"></a>
<a id="schema_vcs.v1.GetFileResponse"></a>
<a id="tocSvcs.v1.getfileresponse"></a>
<a id="tocsvcs.v1.getfileresponse"></a>

```json
{
  "content": "string",
  "URL": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|base64 content of the file|
|URL|string|false|none|the full URL to the file|

<h2 id="tocS_vcs.v1.GithubAppRequest">vcs.v1.GithubAppRequest</h2>
<!-- backwards compatibility -->
<a id="schemavcs.v1.githubapprequest"></a>
<a id="schema_vcs.v1.GithubAppRequest"></a>
<a id="tocSvcs.v1.githubapprequest"></a>
<a id="tocsvcs.v1.githubapprequest"></a>

```json
{}
```

<h2 id="tocS_vcs.v1.GithubAppResponse">vcs.v1.GithubAppResponse</h2>
<!-- backwards compatibility -->
<a id="schemavcs.v1.githubappresponse"></a>
<a id="schema_vcs.v1.GithubAppResponse"></a>
<a id="tocSvcs.v1.githubappresponse"></a>
<a id="tocsvcs.v1.githubappresponse"></a>

```json
{
  "clientID": "string",
  "callbackURL": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientID|string|false|none|clientID must be propagated when calling<br> https://github.com/login/oauth/authorize in the client_id query parameter.|
|callbackURL|string|false|none|If callbackURL is not empty, the URL should be propagated when<br> calling https://github.com/login/oauth/authorize in the<br> redirect_uri query parameter.|

<h2 id="tocS_vcs.v1.GithubLoginRequest">vcs.v1.GithubLoginRequest</h2>
<!-- backwards compatibility -->
<a id="schemavcs.v1.githubloginrequest"></a>
<a id="schema_vcs.v1.GithubLoginRequest"></a>
<a id="tocSvcs.v1.githubloginrequest"></a>
<a id="tocsvcs.v1.githubloginrequest"></a>

```json
{
  "authorizationCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorizationCode|string|false|none|none|

<h2 id="tocS_vcs.v1.GithubLoginResponse">vcs.v1.GithubLoginResponse</h2>
<!-- backwards compatibility -->
<a id="schemavcs.v1.githubloginresponse"></a>
<a id="schema_vcs.v1.GithubLoginResponse"></a>
<a id="tocSvcs.v1.githubloginresponse"></a>
<a id="tocsvcs.v1.githubloginresponse"></a>

```json
{
  "cookie": "string",
  "token": "string",
  "tokenExpiresAt": 0,
  "refreshTokenExpiresAt": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cookie|string|false|none|Deprecated<br> In future version, this cookie won't be sent. Now, old cookie is sent<br> alongside the new expected data (token, token_expires_at and<br> refresh_token_expires_at). Frontend will be responsible of computing its<br> own cookie from the new data. Remove after completing<br> https://github.com/grafana/explore-profiles/issues/187|
|token|string|false|none|base64 encoded encrypted token|
|tokenExpiresAt|integer \| string(int64)|false|none|Unix ms timestamp of when the token expires.|
|refreshTokenExpiresAt|integer \| string(int64)|false|none|Unix ms timestamp of when the refresh token expires.|

<h2 id="tocS_vcs.v1.GithubRefreshRequest">vcs.v1.GithubRefreshRequest</h2>
<!-- backwards compatibility -->
<a id="schemavcs.v1.githubrefreshrequest"></a>
<a id="schema_vcs.v1.GithubRefreshRequest"></a>
<a id="tocSvcs.v1.githubrefreshrequest"></a>
<a id="tocsvcs.v1.githubrefreshrequest"></a>

```json
{}
```

<h2 id="tocS_vcs.v1.GithubRefreshResponse">vcs.v1.GithubRefreshResponse</h2>
<!-- backwards compatibility -->
<a id="schemavcs.v1.githubrefreshresponse"></a>
<a id="schema_vcs.v1.GithubRefreshResponse"></a>
<a id="tocSvcs.v1.githubrefreshresponse"></a>
<a id="tocsvcs.v1.githubrefreshresponse"></a>

```json
{
  "cookie": "string",
  "token": "string",
  "tokenExpiresAt": 0,
  "refreshTokenExpiresAt": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cookie|string|false|none|Deprecated<br> In future version, this cookie won't be sent. Now, old cookie is sent<br> alongside the new expected data (token, token_expires_at and<br> refresh_token_expires_at). Frontend will be responsible of computing its<br> own cookie from the new data. Remove after completing<br> https://github.com/grafana/explore-profiles/issues/187|
|token|string|false|none|base64 encoded encrypted token|
|tokenExpiresAt|integer \| string(int64)|false|none|Unix ms timestamp of when the token expires.|
|refreshTokenExpiresAt|integer \| string(int64)|false|none|Unix ms timestamp of when the refresh token expires.|
