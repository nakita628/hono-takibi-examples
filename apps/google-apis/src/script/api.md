<h1 id="apps-script-api">Apps Script API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Manages and executes Google Apps Script projects.

Base URLs:

* <a href="https://script.googleapis.com/">https://script.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/apps-script/api/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://mail.google.com/|Read, compose, send, and permanently delete all your email from Gmail|
|https://www.google.com/calendar/feeds|See, edit, share, and permanently delete all the calendars you can access using Google Calendar|
|https://www.google.com/m8/feeds|See, edit, download, and permanently delete your contacts|
|https://www.googleapis.com/auth/admin.directory.group|View and manage the provisioning of groups on your domain|
|https://www.googleapis.com/auth/admin.directory.user|View and manage the provisioning of users on your domain|
|https://www.googleapis.com/auth/documents|See, edit, create, and delete all your Google Docs documents|
|https://www.googleapis.com/auth/drive|See, edit, create, and delete all of your Google Drive files|
|https://www.googleapis.com/auth/forms|View and manage your forms in Google Drive|
|https://www.googleapis.com/auth/forms.currentonly|View and manage forms that this application has been installed in|
|https://www.googleapis.com/auth/groups|View and manage your Google Groups|
|https://www.googleapis.com/auth/script.deployments|Create and update Google Apps Script deployments|
|https://www.googleapis.com/auth/script.deployments.readonly|View Google Apps Script deployments|
|https://www.googleapis.com/auth/script.metrics|View Google Apps Script project's metrics|
|https://www.googleapis.com/auth/script.processes|View Google Apps Script processes|
|https://www.googleapis.com/auth/script.projects|Create and update Google Apps Script projects|
|https://www.googleapis.com/auth/script.projects.readonly|View Google Apps Script projects|
|https://www.googleapis.com/auth/spreadsheets|See, edit, create, and delete all your Google Sheets spreadsheets|
|https://www.googleapis.com/auth/userinfo.email|See your primary Google Account email address|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://mail.google.com/|Read, compose, send, and permanently delete all your email from Gmail|
|https://www.google.com/calendar/feeds|See, edit, share, and permanently delete all the calendars you can access using Google Calendar|
|https://www.google.com/m8/feeds|See, edit, download, and permanently delete your contacts|
|https://www.googleapis.com/auth/admin.directory.group|View and manage the provisioning of groups on your domain|
|https://www.googleapis.com/auth/admin.directory.user|View and manage the provisioning of users on your domain|
|https://www.googleapis.com/auth/documents|See, edit, create, and delete all your Google Docs documents|
|https://www.googleapis.com/auth/drive|See, edit, create, and delete all of your Google Drive files|
|https://www.googleapis.com/auth/forms|View and manage your forms in Google Drive|
|https://www.googleapis.com/auth/forms.currentonly|View and manage forms that this application has been installed in|
|https://www.googleapis.com/auth/groups|View and manage your Google Groups|
|https://www.googleapis.com/auth/script.deployments|Create and update Google Apps Script deployments|
|https://www.googleapis.com/auth/script.deployments.readonly|View Google Apps Script deployments|
|https://www.googleapis.com/auth/script.metrics|View Google Apps Script project's metrics|
|https://www.googleapis.com/auth/script.processes|View Google Apps Script processes|
|https://www.googleapis.com/auth/script.projects|Create and update Google Apps Script projects|
|https://www.googleapis.com/auth/script.projects.readonly|View Google Apps Script projects|
|https://www.googleapis.com/auth/spreadsheets|See, edit, create, and delete all your Google Sheets spreadsheets|
|https://www.googleapis.com/auth/userinfo.email|See your primary Google Account email address|

<h1 id="apps-script-api-processes">processes</h1>

## script.processes.list

<a id="opIdscript.processes.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/processes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/processes`

List information about processes made by or on behalf of a user, such as process type and current status.

<h3 id="scriptprocesseslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageSize|query|integer|false|The maximum number of returned processes per page of results. Defaults to 50.|
|pageToken|query|string|false|The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response.|
|userProcessFilter.deploymentId|query|string|false|Optional field used to limit returned processes to those originating from projects with a specific deployment ID.|
|userProcessFilter.endTime|query|string|false|Optional field used to limit returned processes to those that completed on or before the given timestamp.|
|userProcessFilter.functionName|query|string|false|Optional field used to limit returned processes to those originating from a script function with the given function name.|
|userProcessFilter.projectName|query|string|false|Optional field used to limit returned processes to those originating from projects with project names containing a specific string.|
|userProcessFilter.scriptId|query|string|false|Optional field used to limit returned processes to those originating from projects with a specific script ID.|
|userProcessFilter.startTime|query|string|false|Optional field used to limit returned processes to those that were started on or after the given timestamp.|
|userProcessFilter.statuses|query|[string]|false|Optional field used to limit returned processes to those having one of the specified process statuses.|
|userProcessFilter.types|query|[string]|false|Optional field used to limit returned processes to those having one of the specified process types.|
|userProcessFilter.userAccessLevels|query|[string]|false|Optional field used to limit returned processes to those having one of the specified user access levels.|
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
|userProcessFilter.statuses|PROCESS_STATUS_UNSPECIFIED|
|userProcessFilter.statuses|RUNNING|
|userProcessFilter.statuses|PAUSED|
|userProcessFilter.statuses|COMPLETED|
|userProcessFilter.statuses|CANCELED|
|userProcessFilter.statuses|FAILED|
|userProcessFilter.statuses|TIMED_OUT|
|userProcessFilter.statuses|UNKNOWN|
|userProcessFilter.statuses|DELAYED|
|userProcessFilter.types|PROCESS_TYPE_UNSPECIFIED|
|userProcessFilter.types|ADD_ON|
|userProcessFilter.types|EXECUTION_API|
|userProcessFilter.types|TIME_DRIVEN|
|userProcessFilter.types|TRIGGER|
|userProcessFilter.types|WEBAPP|
|userProcessFilter.types|EDITOR|
|userProcessFilter.types|SIMPLE_TRIGGER|
|userProcessFilter.types|MENU|
|userProcessFilter.types|BATCH_TASK|
|userProcessFilter.userAccessLevels|USER_ACCESS_LEVEL_UNSPECIFIED|
|userProcessFilter.userAccessLevels|NONE|
|userProcessFilter.userAccessLevels|READ|
|userProcessFilter.userAccessLevels|WRITE|
|userProcessFilter.userAccessLevels|OWNER|
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
  "processes": [
    {
      "duration": "string",
      "functionName": "string",
      "processStatus": "PROCESS_STATUS_UNSPECIFIED",
      "processType": "PROCESS_TYPE_UNSPECIFIED",
      "projectName": "string",
      "startTime": "string",
      "userAccessLevel": "USER_ACCESS_LEVEL_UNSPECIFIED"
    }
  ]
}
```

<h3 id="scriptprocesseslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListUserProcessesResponse](#schemalistuserprocessesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/script.processes ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/script.processes )
</aside>

## script.processes.listScriptProcesses

<a id="opIdscript.processes.listScriptProcesses"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/processes:listScriptProcesses \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/processes:listScriptProcesses`

List information about a script's executed processes, such as process type and current status.

<h3 id="scriptprocesseslistscriptprocesses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageSize|query|integer|false|The maximum number of returned processes per page of results. Defaults to 50.|
|pageToken|query|string|false|The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response.|
|scriptId|query|string|false|The script ID of the project whose processes are listed.|
|scriptProcessFilter.deploymentId|query|string|false|Optional field used to limit returned processes to those originating from projects with a specific deployment ID.|
|scriptProcessFilter.endTime|query|string|false|Optional field used to limit returned processes to those that completed on or before the given timestamp.|
|scriptProcessFilter.functionName|query|string|false|Optional field used to limit returned processes to those originating from a script function with the given function name.|
|scriptProcessFilter.startTime|query|string|false|Optional field used to limit returned processes to those that were started on or after the given timestamp.|
|scriptProcessFilter.statuses|query|[string]|false|Optional field used to limit returned processes to those having one of the specified process statuses.|
|scriptProcessFilter.types|query|[string]|false|Optional field used to limit returned processes to those having one of the specified process types.|
|scriptProcessFilter.userAccessLevels|query|[string]|false|Optional field used to limit returned processes to those having one of the specified user access levels.|
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
|scriptProcessFilter.statuses|PROCESS_STATUS_UNSPECIFIED|
|scriptProcessFilter.statuses|RUNNING|
|scriptProcessFilter.statuses|PAUSED|
|scriptProcessFilter.statuses|COMPLETED|
|scriptProcessFilter.statuses|CANCELED|
|scriptProcessFilter.statuses|FAILED|
|scriptProcessFilter.statuses|TIMED_OUT|
|scriptProcessFilter.statuses|UNKNOWN|
|scriptProcessFilter.statuses|DELAYED|
|scriptProcessFilter.types|PROCESS_TYPE_UNSPECIFIED|
|scriptProcessFilter.types|ADD_ON|
|scriptProcessFilter.types|EXECUTION_API|
|scriptProcessFilter.types|TIME_DRIVEN|
|scriptProcessFilter.types|TRIGGER|
|scriptProcessFilter.types|WEBAPP|
|scriptProcessFilter.types|EDITOR|
|scriptProcessFilter.types|SIMPLE_TRIGGER|
|scriptProcessFilter.types|MENU|
|scriptProcessFilter.types|BATCH_TASK|
|scriptProcessFilter.userAccessLevels|USER_ACCESS_LEVEL_UNSPECIFIED|
|scriptProcessFilter.userAccessLevels|NONE|
|scriptProcessFilter.userAccessLevels|READ|
|scriptProcessFilter.userAccessLevels|WRITE|
|scriptProcessFilter.userAccessLevels|OWNER|
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
  "processes": [
    {
      "duration": "string",
      "functionName": "string",
      "processStatus": "PROCESS_STATUS_UNSPECIFIED",
      "processType": "PROCESS_TYPE_UNSPECIFIED",
      "projectName": "string",
      "startTime": "string",
      "userAccessLevel": "USER_ACCESS_LEVEL_UNSPECIFIED"
    }
  ]
}
```

<h3 id="scriptprocesseslistscriptprocesses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListScriptProcessesResponse](#schemalistscriptprocessesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/script.processes ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/script.processes )
</aside>

<h1 id="apps-script-api-projects">projects</h1>

## script.projects.create

<a id="opIdscript.projects.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/projects \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "parentId": "string",
    "title": "string"
  }'
```

`POST /v1/projects`

Creates a new, empty script project with no script files and a base manifest file.

> Body parameter

```json
{
  "parentId": "string",
  "title": "string"
}
```

<h3 id="scriptprojectscreate-parameters">Parameters</h3>

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
|body|body|[CreateProjectRequest](#schemacreateprojectrequest)|false|none|
|» parentId|body|string|false|The Drive ID of a parent file that the created script project is bound to. This is usually the ID of a Google Doc, Google Sheet, Google Form, or Google Slides file. If not set, a standalone script project is created.|
|» title|body|string|false|The title for the project.|

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
  "creator": {
    "domain": "string",
    "email": "string",
    "name": "string",
    "photoUrl": "string"
  },
  "lastModifyUser": {
    "domain": "string",
    "email": "string",
    "name": "string",
    "photoUrl": "string"
  },
  "parentId": "string",
  "scriptId": "string",
  "title": "string",
  "updateTime": "string"
}
```

<h3 id="scriptprojectscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Project](#schemaproject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/script.projects ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/script.projects )
</aside>

## script.projects.get

<a id="opIdscript.projects.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/projects/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{scriptId}`

Gets a script project's metadata.

<h3 id="scriptprojectsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scriptId|path|string|true|The script project's Drive ID.|
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
  "creator": {
    "domain": "string",
    "email": "string",
    "name": "string",
    "photoUrl": "string"
  },
  "lastModifyUser": {
    "domain": "string",
    "email": "string",
    "name": "string",
    "photoUrl": "string"
  },
  "parentId": "string",
  "scriptId": "string",
  "title": "string",
  "updateTime": "string"
}
```

<h3 id="scriptprojectsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Project](#schemaproject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/script.projects ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/script.projects ), Oauth2 ( Scopes: https://www.googleapis.com/auth/script.projects.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/script.projects.readonly )
</aside>

## script.projects.getContent

<a id="opIdscript.projects.getContent"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/projects/string/content \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{scriptId}/content`

Gets the content of the script project, including the code source and metadata for each script file.

<h3 id="scriptprojectsgetcontent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scriptId|path|string|true|The script project's Drive ID.|
|versionNumber|query|integer|false|The version number of the project to retrieve. If not provided, the project's HEAD version is returned.|
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
      "functionSet": {
        "values": [
          {
            "name": "string",
            "parameters": [
              "string"
            ]
          }
        ]
      },
      "lastModifyUser": {
        "domain": "string",
        "email": "string",
        "name": "string",
        "photoUrl": "string"
      },
      "name": "string",
      "source": "string",
      "type": "ENUM_TYPE_UNSPECIFIED",
      "updateTime": "string"
    }
  ],
  "scriptId": "string"
}
```

<h3 id="scriptprojectsgetcontent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Content](#schemacontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/script.projects ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/script.projects ), Oauth2 ( Scopes: https://www.googleapis.com/auth/script.projects.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/script.projects.readonly )
</aside>

## script.projects.updateContent

<a id="opIdscript.projects.updateContent"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/projects/string/content \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "files": [
      {
        "createTime": "string",
        "functionSet": {
          "values": [
            {
              "name": "string",
              "parameters": [
                "string"
              ]
            }
          ]
        },
        "lastModifyUser": {
          "domain": "string",
          "email": "string",
          "name": "string",
          "photoUrl": "string"
        },
        "name": "string",
        "source": "string",
        "type": "ENUM_TYPE_UNSPECIFIED",
        "updateTime": "string"
      }
    ],
    "scriptId": "string"
  }'
```

`PUT /v1/projects/{scriptId}/content`

Updates the content of the specified script project. This content is stored as the HEAD version, and is used when the script is executed as a trigger, in the script editor, in add-on preview mode, or as a web app or Apps Script API in development mode. This clears all the existing files in the project.

> Body parameter

```json
{
  "files": [
    {
      "createTime": "string",
      "functionSet": {
        "values": [
          {
            "name": "string",
            "parameters": [
              "string"
            ]
          }
        ]
      },
      "lastModifyUser": {
        "domain": "string",
        "email": "string",
        "name": "string",
        "photoUrl": "string"
      },
      "name": "string",
      "source": "string",
      "type": "ENUM_TYPE_UNSPECIFIED",
      "updateTime": "string"
    }
  ],
  "scriptId": "string"
}
```

<h3 id="scriptprojectsupdatecontent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scriptId|path|string|true|The script project's Drive ID.|
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
|body|body|[Content](#schemacontent)|false|none|
|» files|body|[[File](#schemafile)]|false|The list of script project files. One of the files is a script manifest; it must be named "appsscript", must have type of JSON, and include the manifest configurations for the project.|
|» scriptId|body|string|false|The script project's Drive ID.|

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
      "functionSet": {
        "values": [
          {
            "name": "string",
            "parameters": [
              "string"
            ]
          }
        ]
      },
      "lastModifyUser": {
        "domain": "string",
        "email": "string",
        "name": "string",
        "photoUrl": "string"
      },
      "name": "string",
      "source": "string",
      "type": "ENUM_TYPE_UNSPECIFIED",
      "updateTime": "string"
    }
  ],
  "scriptId": "string"
}
```

<h3 id="scriptprojectsupdatecontent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Content](#schemacontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/script.projects ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/script.projects )
</aside>

## script.projects.deployments.list

<a id="opIdscript.projects.deployments.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/projects/string/deployments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{scriptId}/deployments`

Lists the deployments of an Apps Script project.

<h3 id="scriptprojectsdeploymentslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scriptId|path|string|true|The script project's Drive ID.|
|pageSize|query|integer|false|The maximum number of deployments on each returned page. Defaults to 50.|
|pageToken|query|string|false|The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response.|
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
  "deployments": [
    {
      "deploymentConfig": {
        "description": "string",
        "manifestFileName": "string",
        "scriptId": "string",
        "versionNumber": 0
      },
      "deploymentId": "string",
      "entryPoints": [
        {
          "addOn": {
            "addOnType": "UNKNOWN_ADDON_TYPE",
            "description": "string",
            "helpUrl": "string",
            "postInstallTipUrl": "string",
            "reportIssueUrl": "string",
            "title": "string"
          },
          "entryPointType": "ENTRY_POINT_TYPE_UNSPECIFIED",
          "executionApi": {
            "entryPointConfig": {
              "access": "UNKNOWN_ACCESS"
            }
          },
          "webApp": {
            "entryPointConfig": {
              "access": "UNKNOWN_ACCESS",
              "executeAs": "UNKNOWN_EXECUTE_AS"
            },
            "url": "string"
          }
        }
      ],
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="scriptprojectsdeploymentslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListDeploymentsResponse](#schemalistdeploymentsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/script.deployments ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/script.deployments ), Oauth2 ( Scopes: https://www.googleapis.com/auth/script.deployments.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/script.deployments.readonly )
</aside>

## script.projects.deployments.create

<a id="opIdscript.projects.deployments.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/projects/string/deployments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "manifestFileName": "string",
    "scriptId": "string",
    "versionNumber": 0
  }'
```

`POST /v1/projects/{scriptId}/deployments`

Creates a deployment of an Apps Script project.

> Body parameter

```json
{
  "description": "string",
  "manifestFileName": "string",
  "scriptId": "string",
  "versionNumber": 0
}
```

<h3 id="scriptprojectsdeploymentscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scriptId|path|string|true|The script project's Drive ID.|
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
|body|body|[DeploymentConfig](#schemadeploymentconfig)|false|none|
|» description|body|string|false|The description for this deployment.|
|» manifestFileName|body|string|false|The manifest file name for this deployment.|
|» scriptId|body|string|false|The script project's Drive ID.|
|» versionNumber|body|integer(int32)|false|The version number on which this deployment is based.|

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
  "deploymentConfig": {
    "description": "string",
    "manifestFileName": "string",
    "scriptId": "string",
    "versionNumber": 0
  },
  "deploymentId": "string",
  "entryPoints": [
    {
      "addOn": {
        "addOnType": "UNKNOWN_ADDON_TYPE",
        "description": "string",
        "helpUrl": "string",
        "postInstallTipUrl": "string",
        "reportIssueUrl": "string",
        "title": "string"
      },
      "entryPointType": "ENTRY_POINT_TYPE_UNSPECIFIED",
      "executionApi": {
        "entryPointConfig": {
          "access": "UNKNOWN_ACCESS"
        }
      },
      "webApp": {
        "entryPointConfig": {
          "access": "UNKNOWN_ACCESS",
          "executeAs": "UNKNOWN_EXECUTE_AS"
        },
        "url": "string"
      }
    }
  ],
  "updateTime": "string"
}
```

<h3 id="scriptprojectsdeploymentscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Deployment](#schemadeployment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/script.deployments ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/script.deployments )
</aside>

## script.projects.deployments.get

<a id="opIdscript.projects.deployments.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/projects/string/deployments/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{scriptId}/deployments/{deploymentId}`

Gets a deployment of an Apps Script project.

<h3 id="scriptprojectsdeploymentsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scriptId|path|string|true|The script project's Drive ID.|
|deploymentId|path|string|true|The deployment ID.|
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
  "deploymentConfig": {
    "description": "string",
    "manifestFileName": "string",
    "scriptId": "string",
    "versionNumber": 0
  },
  "deploymentId": "string",
  "entryPoints": [
    {
      "addOn": {
        "addOnType": "UNKNOWN_ADDON_TYPE",
        "description": "string",
        "helpUrl": "string",
        "postInstallTipUrl": "string",
        "reportIssueUrl": "string",
        "title": "string"
      },
      "entryPointType": "ENTRY_POINT_TYPE_UNSPECIFIED",
      "executionApi": {
        "entryPointConfig": {
          "access": "UNKNOWN_ACCESS"
        }
      },
      "webApp": {
        "entryPointConfig": {
          "access": "UNKNOWN_ACCESS",
          "executeAs": "UNKNOWN_EXECUTE_AS"
        },
        "url": "string"
      }
    }
  ],
  "updateTime": "string"
}
```

<h3 id="scriptprojectsdeploymentsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Deployment](#schemadeployment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/script.deployments ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/script.deployments ), Oauth2 ( Scopes: https://www.googleapis.com/auth/script.deployments.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/script.deployments.readonly )
</aside>

## script.projects.deployments.update

<a id="opIdscript.projects.deployments.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/projects/string/deployments/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "deploymentConfig": {
      "description": "string",
      "manifestFileName": "string",
      "scriptId": "string",
      "versionNumber": 0
    }
  }'
```

`PUT /v1/projects/{scriptId}/deployments/{deploymentId}`

Updates a deployment of an Apps Script project.

> Body parameter

```json
{
  "deploymentConfig": {
    "description": "string",
    "manifestFileName": "string",
    "scriptId": "string",
    "versionNumber": 0
  }
}
```

<h3 id="scriptprojectsdeploymentsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scriptId|path|string|true|The script project's Drive ID.|
|deploymentId|path|string|true|The deployment ID for this deployment.|
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
|body|body|[UpdateDeploymentRequest](#schemaupdatedeploymentrequest)|false|none|
|» deploymentConfig|body|[DeploymentConfig](#schemadeploymentconfig)|false|The deployment configuration.|

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
  "deploymentConfig": {
    "description": "string",
    "manifestFileName": "string",
    "scriptId": "string",
    "versionNumber": 0
  },
  "deploymentId": "string",
  "entryPoints": [
    {
      "addOn": {
        "addOnType": "UNKNOWN_ADDON_TYPE",
        "description": "string",
        "helpUrl": "string",
        "postInstallTipUrl": "string",
        "reportIssueUrl": "string",
        "title": "string"
      },
      "entryPointType": "ENTRY_POINT_TYPE_UNSPECIFIED",
      "executionApi": {
        "entryPointConfig": {
          "access": "UNKNOWN_ACCESS"
        }
      },
      "webApp": {
        "entryPointConfig": {
          "access": "UNKNOWN_ACCESS",
          "executeAs": "UNKNOWN_EXECUTE_AS"
        },
        "url": "string"
      }
    }
  ],
  "updateTime": "string"
}
```

<h3 id="scriptprojectsdeploymentsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Deployment](#schemadeployment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/script.deployments ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/script.deployments )
</aside>

## script.projects.deployments.delete

<a id="opIdscript.projects.deployments.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/projects/string/deployments/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/projects/{scriptId}/deployments/{deploymentId}`

Deletes a deployment of an Apps Script project.

<h3 id="scriptprojectsdeploymentsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scriptId|path|string|true|The script project's Drive ID.|
|deploymentId|path|string|true|The deployment ID to be undeployed.|
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

<h3 id="scriptprojectsdeploymentsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/script.deployments ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/script.deployments )
</aside>

## script.projects.getMetrics

<a id="opIdscript.projects.getMetrics"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/projects/string/metrics \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{scriptId}/metrics`

Get metrics data for scripts, such as number of executions and active users.

<h3 id="scriptprojectsgetmetrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scriptId|path|string|true|Required field indicating the script to get metrics for.|
|metricsFilter.deploymentId|query|string|false|Optional field indicating a specific deployment to retrieve metrics from.|
|metricsGranularity|query|string|false|Required field indicating what granularity of metrics are returned.|
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
|metricsGranularity|UNSPECIFIED_GRANULARITY|
|metricsGranularity|WEEKLY|
|metricsGranularity|DAILY|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "activeUsers": [
    {
      "endTime": "string",
      "startTime": "string",
      "value": "string"
    }
  ],
  "failedExecutions": [
    {
      "endTime": "string",
      "startTime": "string",
      "value": "string"
    }
  ],
  "totalExecutions": [
    {
      "endTime": "string",
      "startTime": "string",
      "value": "string"
    }
  ]
}
```

<h3 id="scriptprojectsgetmetrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Metrics](#schemametrics)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/script.metrics ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/script.metrics )
</aside>

## script.projects.versions.list

<a id="opIdscript.projects.versions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/projects/string/versions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{scriptId}/versions`

List the versions of a script project.

<h3 id="scriptprojectsversionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scriptId|path|string|true|The script project's Drive ID.|
|pageSize|query|integer|false|The maximum number of versions on each returned page. Defaults to 50.|
|pageToken|query|string|false|The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response.|
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
  "versions": [
    {
      "createTime": "string",
      "description": "string",
      "scriptId": "string",
      "versionNumber": 0
    }
  ]
}
```

<h3 id="scriptprojectsversionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListVersionsResponse](#schemalistversionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/script.projects ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/script.projects ), Oauth2 ( Scopes: https://www.googleapis.com/auth/script.projects.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/script.projects.readonly )
</aside>

## script.projects.versions.create

<a id="opIdscript.projects.versions.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/projects/string/versions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "createTime": "string",
    "description": "string",
    "scriptId": "string",
    "versionNumber": 0
  }'
```

`POST /v1/projects/{scriptId}/versions`

Creates a new immutable version using the current code, with a unique version number.

> Body parameter

```json
{
  "createTime": "string",
  "description": "string",
  "scriptId": "string",
  "versionNumber": 0
}
```

<h3 id="scriptprojectsversionscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scriptId|path|string|true|The script project's Drive ID.|
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
|body|body|[Version](#schemaversion)|false|none|
|» createTime|body|string(google-datetime)|false|When the version was created.|
|» description|body|string|false|The description for this version.|
|» scriptId|body|string|false|The script project's Drive ID.|
|» versionNumber|body|integer(int32)|false|The incremental ID that is created by Apps Script when a version is created. This is system assigned number and is immutable once created.|

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
  "scriptId": "string",
  "versionNumber": 0
}
```

<h3 id="scriptprojectsversionscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Version](#schemaversion)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/script.projects ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/script.projects )
</aside>

## script.projects.versions.get

<a id="opIdscript.projects.versions.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/projects/string/versions/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/projects/{scriptId}/versions/{versionNumber}`

Gets a version of a script project.

<h3 id="scriptprojectsversionsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scriptId|path|string|true|The script project's Drive ID.|
|versionNumber|path|integer|true|The version number.|
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
  "scriptId": "string",
  "versionNumber": 0
}
```

<h3 id="scriptprojectsversionsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Version](#schemaversion)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/script.projects ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/script.projects ), Oauth2 ( Scopes: https://www.googleapis.com/auth/script.projects.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/script.projects.readonly )
</aside>

<h1 id="apps-script-api-scripts">scripts</h1>

## script.scripts.run

<a id="opIdscript.scripts.run"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/scripts/string:run \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "devMode": true,
    "function": "string",
    "parameters": [
      null
    ],
    "sessionState": "string"
  }'
```

`POST /v1/scripts/{scriptId}:run`

Runs a function in an Apps Script project. The script project must be deployed for use with the Apps Script API and the calling application must share the same Cloud Platform project. This method requires authorization with an OAuth 2.0 token that includes at least one of the scopes listed in the [Authorization](#authorization-scopes) section; script projects that do not require authorization cannot be executed through this API. To find the correct scopes to include in the authentication token, open the script project **Overview** page and scroll down to "Project OAuth Scopes." The error `403, PERMISSION_DENIED: The caller does not have permission` indicates that the Cloud Platform project used to authorize the request is not the same as the one used by the script.

> Body parameter

```json
{
  "devMode": true,
  "function": "string",
  "parameters": [
    null
  ],
  "sessionState": "string"
}
```

<h3 id="scriptscriptsrun-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scriptId|path|string|true|The script ID of the script to be executed. Find the script ID on the **Project settings** page under "IDs."|
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
|body|body|[ExecutionRequest](#schemaexecutionrequest)|false|none|
|» devMode|body|boolean|false|If `true` and the user is an owner of the script, the script runs at the most recently saved version rather than the version deployed for use with the Apps Script API. Optional; default is `false`.|
|» function|body|string|false|The name of the function to execute in the given script. The name does not include parentheses or parameters. It can reference a function in an included library such as `Library.libFunction1`.|
|» parameters|body|[object]|false|The parameters to be passed to the function being executed. The object type for each parameter should match the expected type in Apps Script. Parameters cannot be Apps Script-specific object types (such as a `Document` or a `Calendar`); they can only be primitive types such as `string`, `number`, `array`, `object`, or `boolean`. Optional.|
|» sessionState|body|string|false|*Deprecated*. For use with Android add-ons only. An ID that represents the user's current session in the Android app for Google Docs or Sheets, included as extra data in the [Intent](https://developer.android.com/guide/components/intents-filters.html) that launches the add-on. When an Android add-on is run with a session state, it gains the privileges of a [bound](https://developers.google.com/apps-script/guides/bound) script—that is, it can access information like the user's current cursor position (in Docs) or selected cell (in Sheets). To retrieve the state, call `Intent.getStringExtra("com.google.android.apps.docs.addons.SessionState")`. Optional.|

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
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="scriptscriptsrun-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.google.com/calendar/feeds ) & Oauth2c ( Scopes: https://www.google.com/calendar/feeds ), Oauth2 ( Scopes: https://www.google.com/m8/feeds ) & Oauth2c ( Scopes: https://www.google.com/m8/feeds ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.group ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.group ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user ), Oauth2 ( Scopes: https://www.googleapis.com/auth/documents ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/documents ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/forms ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/forms ), Oauth2 ( Scopes: https://www.googleapis.com/auth/forms.currentonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/forms.currentonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/groups ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/groups ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spreadsheets ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spreadsheets ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

# Schemas

<h2 id="tocS_Content">Content</h2>
<!-- backwards compatibility -->
<a id="schemacontent"></a>
<a id="schema_Content"></a>
<a id="tocScontent"></a>
<a id="tocscontent"></a>

```json
{
  "files": [
    {
      "createTime": "string",
      "functionSet": {
        "values": [
          {
            "name": "string",
            "parameters": [
              "string"
            ]
          }
        ]
      },
      "lastModifyUser": {
        "domain": "string",
        "email": "string",
        "name": "string",
        "photoUrl": "string"
      },
      "name": "string",
      "source": "string",
      "type": "ENUM_TYPE_UNSPECIFIED",
      "updateTime": "string"
    }
  ],
  "scriptId": "string"
}
```

The Content resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|files|[[File](#schemafile)]|false|none|The list of script project files. One of the files is a script manifest; it must be named "appsscript", must have type of JSON, and include the manifest configurations for the project.|
|scriptId|string|false|none|The script project's Drive ID.|

<h2 id="tocS_CreateProjectRequest">CreateProjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateprojectrequest"></a>
<a id="schema_CreateProjectRequest"></a>
<a id="tocScreateprojectrequest"></a>
<a id="tocscreateprojectrequest"></a>

```json
{
  "parentId": "string",
  "title": "string"
}
```

Request to create a script project. Request to create a script project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parentId|string|false|none|The Drive ID of a parent file that the created script project is bound to. This is usually the ID of a Google Doc, Google Sheet, Google Form, or Google Slides file. If not set, a standalone script project is created.|
|title|string|false|none|The title for the project.|

<h2 id="tocS_Deployment">Deployment</h2>
<!-- backwards compatibility -->
<a id="schemadeployment"></a>
<a id="schema_Deployment"></a>
<a id="tocSdeployment"></a>
<a id="tocsdeployment"></a>

```json
{
  "deploymentConfig": {
    "description": "string",
    "manifestFileName": "string",
    "scriptId": "string",
    "versionNumber": 0
  },
  "deploymentId": "string",
  "entryPoints": [
    {
      "addOn": {
        "addOnType": "UNKNOWN_ADDON_TYPE",
        "description": "string",
        "helpUrl": "string",
        "postInstallTipUrl": "string",
        "reportIssueUrl": "string",
        "title": "string"
      },
      "entryPointType": "ENTRY_POINT_TYPE_UNSPECIFIED",
      "executionApi": {
        "entryPointConfig": {
          "access": "UNKNOWN_ACCESS"
        }
      },
      "webApp": {
        "entryPointConfig": {
          "access": "UNKNOWN_ACCESS",
          "executeAs": "UNKNOWN_EXECUTE_AS"
        },
        "url": "string"
      }
    }
  ],
  "updateTime": "string"
}
```

Representation of a single script deployment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentConfig|[DeploymentConfig](#schemadeploymentconfig)|false|none|The deployment configuration.|
|deploymentId|string|false|none|The deployment ID for this deployment.|
|entryPoints|[[EntryPoint](#schemaentrypoint)]|false|none|The deployment's entry points.|
|updateTime|string(google-datetime)|false|none|Last modified date time stamp.|

<h2 id="tocS_DeploymentConfig">DeploymentConfig</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentconfig"></a>
<a id="schema_DeploymentConfig"></a>
<a id="tocSdeploymentconfig"></a>
<a id="tocsdeploymentconfig"></a>

```json
{
  "description": "string",
  "manifestFileName": "string",
  "scriptId": "string",
  "versionNumber": 0
}
```

Metadata the defines how a deployment is configured.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The description for this deployment.|
|manifestFileName|string|false|none|The manifest file name for this deployment.|
|scriptId|string|false|none|The script project's Drive ID.|
|versionNumber|integer(int32)|false|none|The version number on which this deployment is based.|

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

<h2 id="tocS_EntryPoint">EntryPoint</h2>
<!-- backwards compatibility -->
<a id="schemaentrypoint"></a>
<a id="schema_EntryPoint"></a>
<a id="tocSentrypoint"></a>
<a id="tocsentrypoint"></a>

```json
{
  "addOn": {
    "addOnType": "UNKNOWN_ADDON_TYPE",
    "description": "string",
    "helpUrl": "string",
    "postInstallTipUrl": "string",
    "reportIssueUrl": "string",
    "title": "string"
  },
  "entryPointType": "ENTRY_POINT_TYPE_UNSPECIFIED",
  "executionApi": {
    "entryPointConfig": {
      "access": "UNKNOWN_ACCESS"
    }
  },
  "webApp": {
    "entryPointConfig": {
      "access": "UNKNOWN_ACCESS",
      "executeAs": "UNKNOWN_EXECUTE_AS"
    },
    "url": "string"
  }
}
```

A configuration that defines how a deployment is accessed externally.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addOn|[GoogleAppsScriptTypeAddOnEntryPoint](#schemagoogleappsscripttypeaddonentrypoint)|false|none|Add-on properties.|
|entryPointType|string|false|none|The type of the entry point.|
|executionApi|[GoogleAppsScriptTypeExecutionApiEntryPoint](#schemagoogleappsscripttypeexecutionapientrypoint)|false|none|An entry point specification for Apps Script API execution calls.|
|webApp|[GoogleAppsScriptTypeWebAppEntryPoint](#schemagoogleappsscripttypewebappentrypoint)|false|none|An entry point specification for web apps.|

#### Enumerated Values

|Property|Value|
|---|---|
|entryPointType|ENTRY_POINT_TYPE_UNSPECIFIED|
|entryPointType|WEB_APP|
|entryPointType|EXECUTION_API|
|entryPointType|ADD_ON|

<h2 id="tocS_ExecuteStreamResponse">ExecuteStreamResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexecutestreamresponse"></a>
<a id="schema_ExecuteStreamResponse"></a>
<a id="tocSexecutestreamresponse"></a>
<a id="tocsexecutestreamresponse"></a>

```json
{
  "result": {
    "returnValue": {
      "boolValue": true,
      "bytesValue": "string",
      "dateValue": "string",
      "listValue": {},
      "nullValue": "NULL_VALUE",
      "numberValue": 0,
      "protoValue": {
        "property1": null,
        "property2": null
      },
      "stringValue": "string",
      "structValue": {}
    }
  }
}
```

The response for executing or debugging a function in an Apps Script project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[ScriptExecutionResult](#schemascriptexecutionresult)|false|none|The result of the execution.|

<h2 id="tocS_ExecutionError">ExecutionError</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionerror"></a>
<a id="schema_ExecutionError"></a>
<a id="tocSexecutionerror"></a>
<a id="tocsexecutionerror"></a>

```json
{
  "errorMessage": "string",
  "errorType": "string",
  "scriptStackTraceElements": [
    {
      "function": "string",
      "lineNumber": 0
    }
  ]
}
```

An object that provides information about the nature of an error resulting from an attempted execution of a script function using the Apps Script API. If a run call succeeds but the script function (or Apps Script itself) throws an exception, the response body's error field contains a Status object. The `Status` object's `details` field contains an array with a single one of these `ExecutionError` objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorMessage|string|false|none|The error message thrown by Apps Script, usually localized into the user's language.|
|errorType|string|false|none|The error type, for example `TypeError` or `ReferenceError`. If the error type is unavailable, this field is not included.|
|scriptStackTraceElements|[[ScriptStackTraceElement](#schemascriptstacktraceelement)]|false|none|An array of objects that provide a stack trace through the script to show where the execution failed, with the deepest call first.|

<h2 id="tocS_ExecutionRequest">ExecutionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionrequest"></a>
<a id="schema_ExecutionRequest"></a>
<a id="tocSexecutionrequest"></a>
<a id="tocsexecutionrequest"></a>

```json
{
  "devMode": true,
  "function": "string",
  "parameters": [
    null
  ],
  "sessionState": "string"
}
```

A request to run the function in a script. The script is identified by the specified `script_id`. Executing a function on a script returns results based on the implementation of the script.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devMode|boolean|false|none|If `true` and the user is an owner of the script, the script runs at the most recently saved version rather than the version deployed for use with the Apps Script API. Optional; default is `false`.|
|function|string|false|none|The name of the function to execute in the given script. The name does not include parentheses or parameters. It can reference a function in an included library such as `Library.libFunction1`.|
|parameters|[object]|false|none|The parameters to be passed to the function being executed. The object type for each parameter should match the expected type in Apps Script. Parameters cannot be Apps Script-specific object types (such as a `Document` or a `Calendar`); they can only be primitive types such as `string`, `number`, `array`, `object`, or `boolean`. Optional.|
|sessionState|string|false|none|*Deprecated*. For use with Android add-ons only. An ID that represents the user's current session in the Android app for Google Docs or Sheets, included as extra data in the [Intent](https://developer.android.com/guide/components/intents-filters.html) that launches the add-on. When an Android add-on is run with a session state, it gains the privileges of a [bound](https://developers.google.com/apps-script/guides/bound) script—that is, it can access information like the user's current cursor position (in Docs) or selected cell (in Sheets). To retrieve the state, call `Intent.getStringExtra("com.google.android.apps.docs.addons.SessionState")`. Optional.|

<h2 id="tocS_ExecutionResponse">ExecutionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionresponse"></a>
<a id="schema_ExecutionResponse"></a>
<a id="tocSexecutionresponse"></a>
<a id="tocsexecutionresponse"></a>

```json
{
  "result": null
}
```

An object that provides the return value of a function executed using the Apps Script API. If the script function returns successfully, the response body's response field contains this `ExecutionResponse` object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|The return value of the script function. The type matches the object type returned in Apps Script. Functions called using the Apps Script API cannot return Apps Script-specific objects (such as a `Document` or a `Calendar`); they can only return primitive types such as a `string`, `number`, `array`, `object`, or `boolean`.|

<h2 id="tocS_File">File</h2>
<!-- backwards compatibility -->
<a id="schemafile"></a>
<a id="schema_File"></a>
<a id="tocSfile"></a>
<a id="tocsfile"></a>

```json
{
  "createTime": "string",
  "functionSet": {
    "values": [
      {
        "name": "string",
        "parameters": [
          "string"
        ]
      }
    ]
  },
  "lastModifyUser": {
    "domain": "string",
    "email": "string",
    "name": "string",
    "photoUrl": "string"
  },
  "name": "string",
  "source": "string",
  "type": "ENUM_TYPE_UNSPECIFIED",
  "updateTime": "string"
}
```

An individual file within a script project. A file is a third-party source code created by one or more developers. It can be a server-side JS code, HTML, or a configuration file. Each script project can contain multiple files.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Creation date timestamp. This read-only field is only visible to users who have WRITER permission for the script project.|
|functionSet|[GoogleAppsScriptTypeFunctionSet](#schemagoogleappsscripttypefunctionset)|false|none|The defined set of functions in the script file, if any.|
|lastModifyUser|[GoogleAppsScriptTypeUser](#schemagoogleappsscripttypeuser)|false|none|The user who modified the file most recently. This read-only field is only visible to users who have WRITER permission for the script project.|
|name|string|false|none|The name of the file. The file extension is not part of the file name, which can be identified from the type field.|
|source|string|false|none|The file content.|
|type|string|false|none|The type of the file.|
|updateTime|string(google-datetime)|false|none|Last modified date timestamp. This read-only field is only visible to users who have WRITER permission for the script project.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ENUM_TYPE_UNSPECIFIED|
|type|SERVER_JS|
|type|HTML|
|type|JSON|

<h2 id="tocS_GoogleAppsScriptTypeAddOnEntryPoint">GoogleAppsScriptTypeAddOnEntryPoint</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsscripttypeaddonentrypoint"></a>
<a id="schema_GoogleAppsScriptTypeAddOnEntryPoint"></a>
<a id="tocSgoogleappsscripttypeaddonentrypoint"></a>
<a id="tocsgoogleappsscripttypeaddonentrypoint"></a>

```json
{
  "addOnType": "UNKNOWN_ADDON_TYPE",
  "description": "string",
  "helpUrl": "string",
  "postInstallTipUrl": "string",
  "reportIssueUrl": "string",
  "title": "string"
}
```

An add-on entry point.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addOnType|string|false|none|The add-on's required list of supported container types.|
|description|string|false|none|The add-on's optional description.|
|helpUrl|string|false|none|The add-on's optional help URL.|
|postInstallTipUrl|string|false|none|The add-on's required post install tip URL.|
|reportIssueUrl|string|false|none|The add-on's optional report issue URL.|
|title|string|false|none|The add-on's required title.|

#### Enumerated Values

|Property|Value|
|---|---|
|addOnType|UNKNOWN_ADDON_TYPE|
|addOnType|GMAIL|
|addOnType|DATA_STUDIO|

<h2 id="tocS_GoogleAppsScriptTypeExecutionApiConfig">GoogleAppsScriptTypeExecutionApiConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsscripttypeexecutionapiconfig"></a>
<a id="schema_GoogleAppsScriptTypeExecutionApiConfig"></a>
<a id="tocSgoogleappsscripttypeexecutionapiconfig"></a>
<a id="tocsgoogleappsscripttypeexecutionapiconfig"></a>

```json
{
  "access": "UNKNOWN_ACCESS"
}
```

API executable entry point configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access|string|false|none|Who has permission to run the API executable.|

#### Enumerated Values

|Property|Value|
|---|---|
|access|UNKNOWN_ACCESS|
|access|MYSELF|
|access|DOMAIN|
|access|ANYONE|
|access|ANYONE_ANONYMOUS|

<h2 id="tocS_GoogleAppsScriptTypeExecutionApiEntryPoint">GoogleAppsScriptTypeExecutionApiEntryPoint</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsscripttypeexecutionapientrypoint"></a>
<a id="schema_GoogleAppsScriptTypeExecutionApiEntryPoint"></a>
<a id="tocSgoogleappsscripttypeexecutionapientrypoint"></a>
<a id="tocsgoogleappsscripttypeexecutionapientrypoint"></a>

```json
{
  "entryPointConfig": {
    "access": "UNKNOWN_ACCESS"
  }
}
```

An API executable entry point.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entryPointConfig|[GoogleAppsScriptTypeExecutionApiConfig](#schemagoogleappsscripttypeexecutionapiconfig)|false|none|The entry point's configuration.|

<h2 id="tocS_GoogleAppsScriptTypeFunction">GoogleAppsScriptTypeFunction</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsscripttypefunction"></a>
<a id="schema_GoogleAppsScriptTypeFunction"></a>
<a id="tocSgoogleappsscripttypefunction"></a>
<a id="tocsgoogleappsscripttypefunction"></a>

```json
{
  "name": "string",
  "parameters": [
    "string"
  ]
}
```

Represents a function in a script project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The function name in the script project.|
|parameters|[string]|false|none|The ordered list of parameter names of the function in the script project.|

<h2 id="tocS_GoogleAppsScriptTypeFunctionSet">GoogleAppsScriptTypeFunctionSet</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsscripttypefunctionset"></a>
<a id="schema_GoogleAppsScriptTypeFunctionSet"></a>
<a id="tocSgoogleappsscripttypefunctionset"></a>
<a id="tocsgoogleappsscripttypefunctionset"></a>

```json
{
  "values": [
    {
      "name": "string",
      "parameters": [
        "string"
      ]
    }
  ]
}
```

A set of functions. No duplicates are permitted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|values|[[GoogleAppsScriptTypeFunction](#schemagoogleappsscripttypefunction)]|false|none|A list of functions composing the set.|

<h2 id="tocS_GoogleAppsScriptTypeProcess">GoogleAppsScriptTypeProcess</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsscripttypeprocess"></a>
<a id="schema_GoogleAppsScriptTypeProcess"></a>
<a id="tocSgoogleappsscripttypeprocess"></a>
<a id="tocsgoogleappsscripttypeprocess"></a>

```json
{
  "duration": "string",
  "functionName": "string",
  "processStatus": "PROCESS_STATUS_UNSPECIFIED",
  "processType": "PROCESS_TYPE_UNSPECIFIED",
  "projectName": "string",
  "startTime": "string",
  "userAccessLevel": "USER_ACCESS_LEVEL_UNSPECIFIED"
}
```

Representation of a single script process execution that was started from the script editor, a trigger, an application, or using the Apps Script API. This is distinct from the `Operation` resource, which only represents executions started via the Apps Script API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|duration|string(google-duration)|false|none|Duration the execution spent executing.|
|functionName|string|false|none|Name of the function the started the execution.|
|processStatus|string|false|none|The executions status.|
|processType|string|false|none|The executions type.|
|projectName|string|false|none|Name of the script being executed.|
|startTime|string(google-datetime)|false|none|Time the execution started.|
|userAccessLevel|string|false|none|The executing users access level to the script.|

#### Enumerated Values

|Property|Value|
|---|---|
|processStatus|PROCESS_STATUS_UNSPECIFIED|
|processStatus|RUNNING|
|processStatus|PAUSED|
|processStatus|COMPLETED|
|processStatus|CANCELED|
|processStatus|FAILED|
|processStatus|TIMED_OUT|
|processStatus|UNKNOWN|
|processStatus|DELAYED|
|processType|PROCESS_TYPE_UNSPECIFIED|
|processType|ADD_ON|
|processType|EXECUTION_API|
|processType|TIME_DRIVEN|
|processType|TRIGGER|
|processType|WEBAPP|
|processType|EDITOR|
|processType|SIMPLE_TRIGGER|
|processType|MENU|
|processType|BATCH_TASK|
|userAccessLevel|USER_ACCESS_LEVEL_UNSPECIFIED|
|userAccessLevel|NONE|
|userAccessLevel|READ|
|userAccessLevel|WRITE|
|userAccessLevel|OWNER|

<h2 id="tocS_GoogleAppsScriptTypeUser">GoogleAppsScriptTypeUser</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsscripttypeuser"></a>
<a id="schema_GoogleAppsScriptTypeUser"></a>
<a id="tocSgoogleappsscripttypeuser"></a>
<a id="tocsgoogleappsscripttypeuser"></a>

```json
{
  "domain": "string",
  "email": "string",
  "name": "string",
  "photoUrl": "string"
}
```

A simple user profile resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string|false|none|The user's domain.|
|email|string|false|none|The user's identifying email address.|
|name|string|false|none|The user's display name.|
|photoUrl|string|false|none|The user's photo.|

<h2 id="tocS_GoogleAppsScriptTypeWebAppConfig">GoogleAppsScriptTypeWebAppConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsscripttypewebappconfig"></a>
<a id="schema_GoogleAppsScriptTypeWebAppConfig"></a>
<a id="tocSgoogleappsscripttypewebappconfig"></a>
<a id="tocsgoogleappsscripttypewebappconfig"></a>

```json
{
  "access": "UNKNOWN_ACCESS",
  "executeAs": "UNKNOWN_EXECUTE_AS"
}
```

Web app entry point configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access|string|false|none|Who has permission to run the web app.|
|executeAs|string|false|none|Who to execute the web app as.|

#### Enumerated Values

|Property|Value|
|---|---|
|access|UNKNOWN_ACCESS|
|access|MYSELF|
|access|DOMAIN|
|access|ANYONE|
|access|ANYONE_ANONYMOUS|
|executeAs|UNKNOWN_EXECUTE_AS|
|executeAs|USER_ACCESSING|
|executeAs|USER_DEPLOYING|

<h2 id="tocS_GoogleAppsScriptTypeWebAppEntryPoint">GoogleAppsScriptTypeWebAppEntryPoint</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappsscripttypewebappentrypoint"></a>
<a id="schema_GoogleAppsScriptTypeWebAppEntryPoint"></a>
<a id="tocSgoogleappsscripttypewebappentrypoint"></a>
<a id="tocsgoogleappsscripttypewebappentrypoint"></a>

```json
{
  "entryPointConfig": {
    "access": "UNKNOWN_ACCESS",
    "executeAs": "UNKNOWN_EXECUTE_AS"
  },
  "url": "string"
}
```

A web application entry point.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entryPointConfig|[GoogleAppsScriptTypeWebAppConfig](#schemagoogleappsscripttypewebappconfig)|false|none|The entry point's configuration.|
|url|string|false|none|The URL for the web application.|

<h2 id="tocS_ListDeploymentsResponse">ListDeploymentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdeploymentsresponse"></a>
<a id="schema_ListDeploymentsResponse"></a>
<a id="tocSlistdeploymentsresponse"></a>
<a id="tocslistdeploymentsresponse"></a>

```json
{
  "deployments": [
    {
      "deploymentConfig": {
        "description": "string",
        "manifestFileName": "string",
        "scriptId": "string",
        "versionNumber": 0
      },
      "deploymentId": "string",
      "entryPoints": [
        {
          "addOn": {
            "addOnType": "UNKNOWN_ADDON_TYPE",
            "description": "string",
            "helpUrl": "string",
            "postInstallTipUrl": "string",
            "reportIssueUrl": "string",
            "title": "string"
          },
          "entryPointType": "ENTRY_POINT_TYPE_UNSPECIFIED",
          "executionApi": {
            "entryPointConfig": {
              "access": "UNKNOWN_ACCESS"
            }
          },
          "webApp": {
            "entryPointConfig": {
              "access": "UNKNOWN_ACCESS",
              "executeAs": "UNKNOWN_EXECUTE_AS"
            },
            "url": "string"
          }
        }
      ],
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response with the list of deployments for the specified Apps Script project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deployments|[[Deployment](#schemadeployment)]|false|none|The list of deployments.|
|nextPageToken|string|false|none|The token that can be used in the next call to get the next page of results.|

<h2 id="tocS_ListScriptProcessesResponse">ListScriptProcessesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistscriptprocessesresponse"></a>
<a id="schema_ListScriptProcessesResponse"></a>
<a id="tocSlistscriptprocessesresponse"></a>
<a id="tocslistscriptprocessesresponse"></a>

```json
{
  "nextPageToken": "string",
  "processes": [
    {
      "duration": "string",
      "functionName": "string",
      "processStatus": "PROCESS_STATUS_UNSPECIFIED",
      "processType": "PROCESS_TYPE_UNSPECIFIED",
      "projectName": "string",
      "startTime": "string",
      "userAccessLevel": "USER_ACCESS_LEVEL_UNSPECIFIED"
    }
  ]
}
```

Response with the list of Process resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Token for the next page of results. If empty, there are no more pages remaining.|
|processes|[[GoogleAppsScriptTypeProcess](#schemagoogleappsscripttypeprocess)]|false|none|List of processes matching request parameters.|

<h2 id="tocS_ListUserProcessesResponse">ListUserProcessesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistuserprocessesresponse"></a>
<a id="schema_ListUserProcessesResponse"></a>
<a id="tocSlistuserprocessesresponse"></a>
<a id="tocslistuserprocessesresponse"></a>

```json
{
  "nextPageToken": "string",
  "processes": [
    {
      "duration": "string",
      "functionName": "string",
      "processStatus": "PROCESS_STATUS_UNSPECIFIED",
      "processType": "PROCESS_TYPE_UNSPECIFIED",
      "projectName": "string",
      "startTime": "string",
      "userAccessLevel": "USER_ACCESS_LEVEL_UNSPECIFIED"
    }
  ]
}
```

Response with the list of Process resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Token for the next page of results. If empty, there are no more pages remaining.|
|processes|[[GoogleAppsScriptTypeProcess](#schemagoogleappsscripttypeprocess)]|false|none|List of processes matching request parameters.|

<h2 id="tocS_ListValue">ListValue</h2>
<!-- backwards compatibility -->
<a id="schemalistvalue"></a>
<a id="schema_ListValue"></a>
<a id="tocSlistvalue"></a>
<a id="tocslistvalue"></a>

```json
{
  "values": [
    {
      "boolValue": true,
      "bytesValue": "string",
      "dateValue": "string",
      "listValue": {},
      "nullValue": "NULL_VALUE",
      "numberValue": 0,
      "protoValue": {
        "property1": null,
        "property2": null
      },
      "stringValue": "string",
      "structValue": {}
    }
  ]
}
```

`ListValue` is a wrapper around a repeated field of values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|values|[[Value](#schemavalue)]|false|none|Repeated field of dynamically typed values.|

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
      "scriptId": "string",
      "versionNumber": 0
    }
  ]
}
```

Response with the list of the versions for the specified script project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The token use to fetch the next page of records. if not exist in the response, that means no more versions to list.|
|versions|[[Version](#schemaversion)]|false|none|The list of versions.|

<h2 id="tocS_Metrics">Metrics</h2>
<!-- backwards compatibility -->
<a id="schemametrics"></a>
<a id="schema_Metrics"></a>
<a id="tocSmetrics"></a>
<a id="tocsmetrics"></a>

```json
{
  "activeUsers": [
    {
      "endTime": "string",
      "startTime": "string",
      "value": "string"
    }
  ],
  "failedExecutions": [
    {
      "endTime": "string",
      "startTime": "string",
      "value": "string"
    }
  ],
  "totalExecutions": [
    {
      "endTime": "string",
      "startTime": "string",
      "value": "string"
    }
  ]
}
```

Resource containing usage stats for a given script, based on the supplied filter and mask present in the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activeUsers|[[MetricsValue](#schemametricsvalue)]|false|none|Number of active users.|
|failedExecutions|[[MetricsValue](#schemametricsvalue)]|false|none|Number of failed executions.|
|totalExecutions|[[MetricsValue](#schemametricsvalue)]|false|none|Number of total executions.|

<h2 id="tocS_MetricsValue">MetricsValue</h2>
<!-- backwards compatibility -->
<a id="schemametricsvalue"></a>
<a id="schema_MetricsValue"></a>
<a id="tocSmetricsvalue"></a>
<a id="tocsmetricsvalue"></a>

```json
{
  "endTime": "string",
  "startTime": "string",
  "value": "string"
}
```

Metrics value that holds number of executions counted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|Required field indicating the end time of the interval.|
|startTime|string(google-datetime)|false|none|Required field indicating the start time of the interval.|
|value|string(uint64)|false|none|Indicates the number of executions counted.|

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
  "response": {
    "property1": null,
    "property2": null
  }
}
```

A representation of an execution of an Apps Script function started with run. The execution response does not arrive until the function finishes executing. The maximum execution runtime is listed in the [Apps Script quotas guide](/apps-script/guides/services/quotas#current_limitations). After execution has started, it can have one of four outcomes: - If the script function returns successfully, the response field contains an ExecutionResponse object with the function's return value in the object's `result` field. - If the script function (or Apps Script itself) throws an exception, the error field contains a Status object. The `Status` object's `details` field contains an array with a single ExecutionError object that provides information about the nature of the error. - If the execution has not yet completed, the done field is `false` and the neither the `response` nor `error` fields are present. - If the `run` call itself fails (for example, because of a malformed request or an authorization error), the method returns an HTTP response code in the 4XX range with a different format for the response body. Client libraries automatically convert a 4XX response into an exception class.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|done|boolean|false|none|This field indicates whether the script execution has completed. A completed execution has a populated `response` field containing the ExecutionResponse from function that was executed.|
|error|[Status](#schemastatus)|false|none|If a `run` call succeeds but the script function (or Apps Script itself) throws an exception, this field contains a Status object. The `Status` object's `details` field contains an array with a single ExecutionError object that provides information about the nature of the error.|
|response|object|false|none|If the script function returns successfully, this field contains an ExecutionResponse object with the function's return value.|

<h2 id="tocS_Project">Project</h2>
<!-- backwards compatibility -->
<a id="schemaproject"></a>
<a id="schema_Project"></a>
<a id="tocSproject"></a>
<a id="tocsproject"></a>

```json
{
  "createTime": "string",
  "creator": {
    "domain": "string",
    "email": "string",
    "name": "string",
    "photoUrl": "string"
  },
  "lastModifyUser": {
    "domain": "string",
    "email": "string",
    "name": "string",
    "photoUrl": "string"
  },
  "parentId": "string",
  "scriptId": "string",
  "title": "string",
  "updateTime": "string"
}
```

The script project resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|When the script was created.|
|creator|[GoogleAppsScriptTypeUser](#schemagoogleappsscripttypeuser)|false|none|User who originally created the script.|
|lastModifyUser|[GoogleAppsScriptTypeUser](#schemagoogleappsscripttypeuser)|false|none|User who last modified the script.|
|parentId|string|false|none|The parent's Drive ID that the script will be attached to. This is usually the ID of a Google Document or Google Sheet. This filed is optional, and if not set, a stand-alone script will be created.|
|scriptId|string|false|none|The script project's Drive ID.|
|title|string|false|none|The title for the project.|
|updateTime|string(google-datetime)|false|none|When the script was last updated.|

<h2 id="tocS_ScriptExecutionResult">ScriptExecutionResult</h2>
<!-- backwards compatibility -->
<a id="schemascriptexecutionresult"></a>
<a id="schema_ScriptExecutionResult"></a>
<a id="tocSscriptexecutionresult"></a>
<a id="tocsscriptexecutionresult"></a>

```json
{
  "returnValue": {
    "boolValue": true,
    "bytesValue": "string",
    "dateValue": "string",
    "listValue": {},
    "nullValue": "NULL_VALUE",
    "numberValue": 0,
    "protoValue": {
      "property1": null,
      "property2": null
    },
    "stringValue": "string",
    "structValue": {}
  }
}
```

The result of an execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|returnValue|[Value](#schemavalue)|false|none|The returned value of the execution.|

<h2 id="tocS_ScriptStackTraceElement">ScriptStackTraceElement</h2>
<!-- backwards compatibility -->
<a id="schemascriptstacktraceelement"></a>
<a id="schema_ScriptStackTraceElement"></a>
<a id="tocSscriptstacktraceelement"></a>
<a id="tocsscriptstacktraceelement"></a>

```json
{
  "function": "string",
  "lineNumber": 0
}
```

A stack trace through the script that shows where the execution failed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|function|string|false|none|The name of the function that failed.|
|lineNumber|integer(int32)|false|none|The line number where the script failed.|

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

If a `run` call succeeds but the script function (or Apps Script itself) throws an exception, the response body's error field contains this `Status` object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|The status code. For this API, this value either: - 10, indicating a `SCRIPT_TIMEOUT` error, - 3, indicating an `INVALID_ARGUMENT` error, or - 1, indicating a `CANCELLED` execution. |
|details|[object]|false|none|An array that contains a single ExecutionError object that provides information about the nature of the error.|
|message|string|false|none|A developer-facing error message, which is in English. Any user-facing error message is localized and sent in the details field, or localized by the client.|

<h2 id="tocS_Struct">Struct</h2>
<!-- backwards compatibility -->
<a id="schemastruct"></a>
<a id="schema_Struct"></a>
<a id="tocSstruct"></a>
<a id="tocsstruct"></a>

```json
{
  "fields": {
    "property1": {
      "boolValue": true,
      "bytesValue": "string",
      "dateValue": "string",
      "listValue": {},
      "nullValue": "NULL_VALUE",
      "numberValue": 0,
      "protoValue": {
        "property1": null,
        "property2": null
      },
      "stringValue": "string",
      "structValue": {}
    },
    "property2": {
      "boolValue": true,
      "bytesValue": "string",
      "dateValue": "string",
      "listValue": {},
      "nullValue": "NULL_VALUE",
      "numberValue": 0,
      "protoValue": {
        "property1": null,
        "property2": null
      },
      "stringValue": "string",
      "structValue": {}
    }
  }
}
```

`Struct` represents a structured data value, consisting of fields which map to dynamically typed values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|object|false|none|Unordered map of dynamically typed values.|

<h2 id="tocS_UpdateDeploymentRequest">UpdateDeploymentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedeploymentrequest"></a>
<a id="schema_UpdateDeploymentRequest"></a>
<a id="tocSupdatedeploymentrequest"></a>
<a id="tocsupdatedeploymentrequest"></a>

```json
{
  "deploymentConfig": {
    "description": "string",
    "manifestFileName": "string",
    "scriptId": "string",
    "versionNumber": 0
  }
}
```

Request with deployment information to update an existing deployment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentConfig|[DeploymentConfig](#schemadeploymentconfig)|false|none|The deployment configuration.|

<h2 id="tocS_Value">Value</h2>
<!-- backwards compatibility -->
<a id="schemavalue"></a>
<a id="schema_Value"></a>
<a id="tocSvalue"></a>
<a id="tocsvalue"></a>

```json
{
  "boolValue": true,
  "bytesValue": "string",
  "dateValue": "string",
  "listValue": {
    "values": [
      {}
    ]
  },
  "nullValue": "NULL_VALUE",
  "numberValue": 0,
  "protoValue": {
    "property1": null,
    "property2": null
  },
  "stringValue": "string",
  "structValue": {
    "fields": {
      "property1": {},
      "property2": {}
    }
  }
}
```

`Value` represents a dynamically typed value which is the outcome of an executed script.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boolValue|boolean|false|none|Represents a boolean value.|
|bytesValue|string(byte)|false|none|Represents raw byte values.|
|dateValue|string(int64)|false|none|Represents a date in ms since the epoch.|
|listValue|[ListValue](#schemalistvalue)|false|none|Represents a repeated `Value`.|
|nullValue|string|false|none|Represents a null value.|
|numberValue|number(double)|false|none|Represents a double value.|
|protoValue|object|false|none|Represents a structured proto value.|
|stringValue|string|false|none|Represents a string value.|
|structValue|[Struct](#schemastruct)|false|none|Represents a structured value.|

#### Enumerated Values

|Property|Value|
|---|---|
|nullValue|NULL_VALUE|

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
  "scriptId": "string",
  "versionNumber": 0
}
```

A resource representing a script project version. A version is a "snapshot" of a script project and is similar to a read-only branched release. When creating deployments, the version to use must be specified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|When the version was created.|
|description|string|false|none|The description for this version.|
|scriptId|string|false|none|The script project's Drive ID.|
|versionNumber|integer(int32)|false|none|The incremental ID that is created by Apps Script when a version is created. This is system assigned number and is immutable once created.|
