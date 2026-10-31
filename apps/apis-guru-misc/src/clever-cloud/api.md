<h1 id="clever-cloud-api">Clever-Cloud API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Public API for managing Clever-Cloud data and products

Base URLs:

* <a href="https://api.clever-cloud.com/v2">https://api.clever-cloud.com/v2</a>

<h1 id="clever-cloud-api-all">all</h1>

## get//openapi

> Code samples

```bash
curl https://example.com//openapi
```

`GET //openapi`

<h3 id="getopenapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The swagger documenting this API in yaml format.|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/application/{appId}/environment

> Code samples

```bash
curl https://example.com/application/string/environment
```

`GET /application/{appId}/environment`

<h3 id="getapplicationappidenvironment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|false|none|
|appId|path|string|true|none|

<h3 id="getapplicationappidenvironment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## put/application/{appId}/environment

> Code samples

```bash
curl https://example.com/application/string/environment \
  -X PUT
```

`PUT /application/{appId}/environment`

<h3 id="putapplicationappidenvironment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|false|none|
|appId|path|string|true|none|

<h3 id="putapplicationappidenvironment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## postAuthorize

<a id="opIdpostAuthorize"></a>

> Code samples

```bash
curl https://example.com/authorize \
  -X POST
```

`POST /authorize`

Handled by our API.

<h3 id="postauthorize-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|authorize|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/events/event-socket

> Code samples

```bash
curl https://example.com/events/event-socket
```

`GET /events/event-socket`

Retrieve events as they come through a websocket connection. To have authorization, you have to send a `{ "message_type": "oauth", "authorization": "oauth authorization string" }` message

<h3 id="geteventsevent-socket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|<No description>|None|

<aside class="success">
This operation does not require authentication
</aside>

## getGithub

<a id="opIdgetGithub"></a>

> Code samples

```bash
curl https://example.com/github \
  -H 'Accept: application/json'
```

`GET /github`

> Example responses

> 200 Response

```json
{
  "transactionId": "string"
}
```

<h3 id="getgithub-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|startGithub|[Transaction_Id](#schematransaction_id)|

<aside class="success">
This operation does not require authentication
</aside>

## getGithubApplications

<a id="opIdgetGithubApplications"></a>

> Code samples

```bash
curl https://example.com/github/applications \
  -H 'Accept: application/json'
```

`GET /github/applications`

> Example responses

> 200 Response

```json
[
  {
    "archived": false,
    "branch": "string",
    "buildFlavor": {
      "available": false,
      "cpus": 0,
      "disk": 0,
      "mem": 0,
      "microservice": false,
      "name": "string",
      "nice": 0,
      "price": 0
    },
    "cancelOnPush": false,
    "commitId": "string",
    "creationDate": "1970-01-01",
    "deployUrl": "string",
    "deployment": {
      "httpUrl": "string",
      "repoState": "string",
      "shutdownable": false,
      "type": "string",
      "url": "string"
    },
    "description": "string",
    "favourite": false,
    "homogeneous": false,
    "id": "string",
    "instance": {
      "buildFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "comingSoon": false,
      "defaultEnv": {},
      "defaultFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "deployments": [
        "string"
      ],
      "description": "string",
      "enabled": false,
      "flavors": [
        {
          "available": false,
          "cpus": 0,
          "disk": 0,
          "mem": 0,
          "microservice": false,
          "name": "string",
          "nice": 0,
          "price": 0
        }
      ],
      "instanceAndVersion": "string",
      "maxAllowedInstances": 0,
      "maxFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "maxInstances": 0,
      "minFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "minInstances": 0,
      "name": "string",
      "tags": [
        "string"
      ],
      "type": "string",
      "variant": {
        "deployType": "string",
        "id": "string",
        "logo": "string",
        "name": "string",
        "slug": "string"
      },
      "version": "string"
    },
    "last_deploy": 0,
    "name": "string",
    "ownerId": "string",
    "separateBuild": false,
    "state": "string",
    "stickySessions": false,
    "vhosts": [
      {
        "fqdn": "string"
      }
    ],
    "webhookSecret": "string",
    "webhookUrl": "string",
    "zone": "string"
  }
]
```

<h3 id="getgithubapplications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getGithubApplications|Inline|

<h3 id="getgithubapplications-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Application](#schemaapplication)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getGithubCallback

<a id="opIdgetGithubCallback"></a>

> Code samples

```bash
curl https://example.com/github/callback
```

`GET /github/callback`

<h3 id="getgithubcallback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|code|query|string|false|none|
|state|query|string|false|none|
|error|query|string|false|none|
|error_description|query|string|false|none|
|error_uri|query|string|false|none|
|Cookie|header|string|false|none|

<h3 id="getgithubcallback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|githubCallback|None|

<aside class="success">
This operation does not require authentication
</aside>

## getGithubEmails

<a id="opIdgetGithubEmails"></a>

> Code samples

```bash
curl https://example.com/github/emails
```

`GET /github/emails`

<h3 id="getgithubemails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getGithubEmails|Inline|

<h3 id="getgithubemails-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getGithubKeys

<a id="opIdgetGithubKeys"></a>

> Code samples

```bash
curl https://example.com/github/keys \
  -H 'Accept: application/json'
```

`GET /github/keys`

> Example responses

> 200 Response

```json
[
  {
    "fingerprint": "string",
    "key": "string",
    "name": "string"
  }
]
```

<h3 id="getgithubkeys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getGithubKeys|Inline|

<h3 id="getgithubkeys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Key](#schemakey)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getGithubLink

<a id="opIdgetGithubLink"></a>

> Code samples

```bash
curl https://example.com/github/link
```

`GET /github/link`

<h3 id="getgithublink-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transactionId|query|string|false|From GET /github|
|redirectUrl|query|string|false|none|

<h3 id="getgithublink-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|linkGithub|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteGithubLink

<a id="opIddeleteGithubLink"></a>

> Code samples

```bash
curl https://example.com/github/link \
  -X DELETE
```

`DELETE /github/link`

<h3 id="deletegithublink-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|unlinkGithub|None|

<aside class="success">
This operation does not require authentication
</aside>

## getGithubLogin

<a id="opIdgetGithubLogin"></a>

> Code samples

```bash
curl https://example.com/github/login
```

`GET /github/login`

<h3 id="getgithublogin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|redirectUrl|query|string|false|none|
|fromAuthorize|query|string|false|none|

<h3 id="getgithublogin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|githubLogin|None|

<aside class="success">
This operation does not require authentication
</aside>

## postGithubRedeploy

<a id="opIdpostGithubRedeploy"></a>

> Code samples

```bash
curl https://example.com/github/redeploy \
  -X POST
```

`POST /github/redeploy`

<h3 id="postgithubredeploy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|false|none|
|X-Github-Event|header|string|false|none|
|X-Hub-Signature|header|string|false|none|

<h3 id="postgithubredeploy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|redeployApp|None|

<aside class="success">
This operation does not require authentication
</aside>

## getGithubSignup

<a id="opIdgetGithubSignup"></a>

> Code samples

```bash
curl https://example.com/github/signup
```

`GET /github/signup`

<h3 id="getgithubsignup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|redirectUrl|query|string|false|none|
|fromAuthorize|query|string|false|none|

<h3 id="getgithubsignup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|githubSignup|None|

<aside class="success">
This operation does not require authentication
</aside>

## postGithubSignup

<a id="opIdpostGithubSignup"></a>

> Code samples

```bash
curl https://example.com/github/signup \
  -X POST
```

`POST /github/signup`

<h3 id="postgithubsignup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transactionId|query|string|false|none|
|name|query|string|false|none|
|otherId|query|string|false|none|
|otherEmail|query|string|false|none|
|password|query|string|false|none|
|autoLink|query|string|false|none|
|terms|query|string|false|none|

<h3 id="postgithubsignup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|finsihGithubSignup|None|

<aside class="success">
This operation does not require authentication
</aside>

## getGithubUsername

<a id="opIdgetGithubUsername"></a>

> Code samples

```bash
curl https://example.com/github/username
```

`GET /github/username`

<h3 id="getgithubusername-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getGithubUsername|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## get/logs-socket/{appId}

> Code samples

```bash
curl https://example.com/logs-socket/string
```

`GET /logs-socket/{appId}`

WebSocket to get logs for :appID. Optional queryString arg bind_to_es=true to bind WS on log storage and not real time AMQP broker

<h3 id="getlogs-socketappid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|Automatically added|

<h3 id="getlogs-socketappid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|<No description>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/logs/drains

> Code samples

```bash
curl https://example.com/logs/drains
```

`GET /logs/drains`

Fetch all the logs drains (ccadmin dedicated route)

<h3 id="getlogsdrains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|<No description>|None|

<aside class="success">
This operation does not require authentication
</aside>

## put/logs/drains/{drainId}

> Code samples

```bash
curl https://example.com/logs/drains/string \
  -X PUT
```

`PUT /logs/drains/{drainId}`

Fetch all the logs drains (ccadmin dedicated route)

<h3 id="putlogsdrainsdrainid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|drainId|path|string|true|Automatically added|

<h3 id="putlogsdrainsdrainid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|<No description>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/logs/logs-chunked/{appId}

> Code samples

```bash
curl https://example.com/logs/logs-chunked/string
```

`GET /logs/logs-chunked/{appId}`

Retrieve logs as they come through a chunked, never-ending response

<h3 id="getlogslogs-chunkedappid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|Application Id|
|download|query|boolean|false|Tell the user-agent to download the body as a file|

<h3 id="getlogslogs-chunkedappid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|<No description>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/logs/logs-socket/{appId}

> Code samples

```bash
curl https://example.com/logs/logs-socket/string
```

`GET /logs/logs-socket/{appId}`

Retrieve logs as they come through a websocket connection. To have authorization, you have to send a `{ "message_type": "oauth", "authorization": "oauth authorization string" }` message

<h3 id="getlogslogs-socketappid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|Application Id|
|since|query|string(date-time)|false|Only fetch logs newer than this (ISO-8601 formatted) date|
|filter|query|string|false|A pattern to filter with|
|deployment_id|query|string|false|Only fetch logs emitted by this deployment|

<h3 id="getlogslogs-socketappid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|<No description>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/logs/{appId}

> Code samples

```bash
curl https://example.com/logs/string
```

`GET /logs/{appId}`

Fetch the logs for a given application

<h3 id="getlogsappid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|Application Id|
|limit|query|integer(int32)|false|Number of lines to return|
|order|query|string|false|Logs order|
|after|query|string(date-time)|false|Lowest bound for logs date, ISO 8601|
|before|query|string(date-time)|false|Highest bounds for logs date, ISO 8601|
|filter|query|string|false|A pattern to filter with|
|deployment_id|query|string|false|Only fetch logs emitted by this deployment|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

<h3 id="getlogsappid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|<No description>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/logs/{appId}/drains

> Code samples

```bash
curl https://example.com/logs/string/drains
```

`GET /logs/{appId}/drains`

Fetch the logs drains for a given application

<h3 id="getlogsappiddrains-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|Automatically added|

<h3 id="getlogsappiddrains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|<No description>|None|

<aside class="success">
This operation does not require authentication
</aside>

## post/logs/{appId}/drains

> Code samples

```bash
curl https://example.com/logs/string/drains \
  -X POST
```

`POST /logs/{appId}/drains`

Add a log drain for a given application

<h3 id="postlogsappiddrains-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|Automatically added|

<h3 id="postlogsappiddrains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|<No description>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/logs/{appId}/drains/:idOrUrl

> Code samples

```bash
curl https://example.com/logs/string/drains/:idOrUrl
```

`GET /logs/{appId}/drains/:idOrUrl`

Fetch the logs drain by id or url for a given application

<h3 id="getlogsappiddrainsidorurl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|Automatically added|

<h3 id="getlogsappiddrainsidorurl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|<No description>|None|

<aside class="success">
This operation does not require authentication
</aside>

## delete/logs/{appId}/drains/:idOrUrl

> Code samples

```bash
curl https://example.com/logs/string/drains/:idOrUrl \
  -X DELETE
```

`DELETE /logs/{appId}/drains/:idOrUrl`

Delete the logs drain by id or url for a given application

<h3 id="deletelogsappiddrainsidorurl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|Automatically added|

<h3 id="deletelogsappiddrainsidorurl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|<No description>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/logs/{appId}/sse

> Code samples

```bash
curl https://example.com/logs/string/sse
```

`GET /logs/{appId}/sse`

Retrieve logs as they come through a sse connection. To have authorization, you have to add `authorization=oAuthAuthorizationString` as query param.

<h3 id="getlogsappidsse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|Automatically added|

<h3 id="getlogsappidsse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|<No description>|None|

<aside class="success">
This operation does not require authentication
</aside>

## getNewsfeedsBlog

<a id="opIdgetNewsfeedsBlog"></a>

> Code samples

```bash
curl https://example.com/newsfeeds/blog
```

`GET /newsfeeds/blog`

<h3 id="getnewsfeedsblog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getBlogFeed|None|

<aside class="success">
This operation does not require authentication
</aside>

## getNewsfeedEngineering

<a id="opIdgetNewsfeedEngineering"></a>

> Code samples

```bash
curl https://example.com/newsfeeds/engineering
```

`GET /newsfeeds/engineering`

<h3 id="getnewsfeedengineering-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getEngineeringFeed|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/notifications/emailhooks/{ownerId}

> Code samples

```bash
curl https://example.com/notifications/emailhooks/string
```

`GET /notifications/emailhooks/{ownerId}`

list created e-mail hooks

<h3 id="getnotificationsemailhooksownerid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerId|path|string|true|Automatically added|

<h3 id="getnotificationsemailhooksownerid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|<No description>|None|

<aside class="success">
This operation does not require authentication
</aside>

## post/notifications/emailhooks/{ownerId}

> Code samples

```bash
curl https://example.com/notifications/emailhooks/string \
  -X POST
```

`POST /notifications/emailhooks/{ownerId}`

create a hook for e-mail notifications

<h3 id="postnotificationsemailhooksownerid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerId|path|string|true|Automatically added|

<h3 id="postnotificationsemailhooksownerid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|<No description>|None|

<aside class="success">
This operation does not require authentication
</aside>

## put/notifications/emailhooks/{ownerId}/:id

> Code samples

```bash
curl https://example.com/notifications/emailhooks/string/:id \
  -X PUT
```

`PUT /notifications/emailhooks/{ownerId}/:id`

edit an e-mail hook

<h3 id="putnotificationsemailhooksowneridid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerId|path|string|true|Automatically added|

<h3 id="putnotificationsemailhooksowneridid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|<No description>|None|

<aside class="success">
This operation does not require authentication
</aside>

## delete/notifications/emailhooks/{ownerId}/:id

> Code samples

```bash
curl https://example.com/notifications/emailhooks/string/:id \
  -X DELETE
```

`DELETE /notifications/emailhooks/{ownerId}/:id`

delete an e-mail hook

<h3 id="deletenotificationsemailhooksowneridid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerId|path|string|true|Automatically added|

<h3 id="deletenotificationsemailhooksowneridid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|<No description>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/notifications/info/events

> Code samples

```bash
curl https://example.com/notifications/info/events
```

`GET /notifications/info/events`

list available events

<h3 id="getnotificationsinfoevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|<No description>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/notifications/info/webhookformats

> Code samples

```bash
curl https://example.com/notifications/info/webhookformats
```

`GET /notifications/info/webhookformats`

list available webhook formats

<h3 id="getnotificationsinfowebhookformats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|<No description>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/notifications/webhooks/{ownerId}

> Code samples

```bash
curl https://example.com/notifications/webhooks/string
```

`GET /notifications/webhooks/{ownerId}`

list created hooks

<h3 id="getnotificationswebhooksownerid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerId|path|string|true|Automatically added|

<h3 id="getnotificationswebhooksownerid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|<No description>|None|

<aside class="success">
This operation does not require authentication
</aside>

## post/notifications/webhooks/{ownerId}

> Code samples

```bash
curl https://example.com/notifications/webhooks/string \
  -X POST
```

`POST /notifications/webhooks/{ownerId}`

create a hook for notifications

<h3 id="postnotificationswebhooksownerid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerId|path|string|true|Automatically added|

<h3 id="postnotificationswebhooksownerid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|<No description>|None|

<aside class="success">
This operation does not require authentication
</aside>

## put/notifications/webhooks/{ownerId}/:id

> Code samples

```bash
curl https://example.com/notifications/webhooks/string/:id \
  -X PUT
```

`PUT /notifications/webhooks/{ownerId}/:id`

edit a hook

<h3 id="putnotificationswebhooksowneridid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerId|path|string|true|Automatically added|

<h3 id="putnotificationswebhooksowneridid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|<No description>|None|

<aside class="success">
This operation does not require authentication
</aside>

## delete/notifications/webhooks/{ownerId}/:id

> Code samples

```bash
curl https://example.com/notifications/webhooks/string/:id \
  -X DELETE
```

`DELETE /notifications/webhooks/{ownerId}/:id`

delete a hook

<h3 id="deletenotificationswebhooksowneridid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerId|path|string|true|Automatically added|

<h3 id="deletenotificationswebhooksowneridid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|<No description>|None|

<aside class="success">
This operation does not require authentication
</aside>

## postOauthAccessToken

<a id="opIdpostOauthAccessToken"></a>

> Code samples

```bash
curl https://example.com/oauth/access_token \
  -X POST
```

`POST /oauth/access_token`

<h3 id="postoauthaccesstoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|oauth_consumer_key|query|string|false|none|
|oauth_token|query|string|false|none|
|oauth_signature_method|query|string|false|none|
|oauth_signature|query|string|false|none|
|oauth_timestamp|query|string|false|none|
|oauth_nonce|query|string|false|none|
|oauth_version|query|string|false|none|
|oauth_verifier|query|string|false|none|
|oauth_callback|query|string|false|none|
|oauth_token_secret|query|string|false|none|
|oauth_callback_confirmed|query|string|false|none|

<h3 id="postoauthaccesstoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|postAccessTokenRequest|None|

<aside class="success">
This operation does not require authentication
</aside>

## post/oauth/access_token_query

> Code samples

```bash
curl https://example.com/oauth/access_token_query \
  -X POST
```

`POST /oauth/access_token_query`

<h3 id="postoauthaccesstokenquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|oauth_consumer_key|query|string|false|none|
|oauth_token|query|string|false|none|
|oauth_signature_method|query|string|false|none|
|oauth_signature|query|string|false|none|
|oauth_timestamp|query|string|false|none|
|oauth_nonce|query|string|false|none|
|oauth_version|query|string|false|none|
|oauth_verifier|query|string|false|none|
|oauth_callback|query|string|false|none|
|oauth_token_secret|query|string|false|none|
|oauth_callback_confirmed|query|string|false|none|

<h3 id="postoauthaccesstokenquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## getOauthAuthorize

<a id="opIdgetOauthAuthorize"></a>

> Code samples

```bash
curl https://example.com/oauth/authorize
```

`GET /oauth/authorize`

<h3 id="getoauthauthorize-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|oauth_token|query|string|false|none|
|Cookie|header|string|false|none|

<h3 id="getoauthauthorize-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|authorizeForm|None|

<aside class="success">
This operation does not require authentication
</aside>

## postOauthAuthorize

<a id="opIdpostOauthAuthorize"></a>

> Code samples

```bash
curl https://example.com/oauth/authorize \
  -X POST
```

`POST /oauth/authorize`

<h3 id="postoauthauthorize-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|almighty|query|string|false|none|
|access_organisations|query|string|false|none|
|manage_organisations|query|string|false|none|
|manage_organisations_services|query|string|false|none|
|manage_organisations_applications|query|string|false|none|
|manage_organisations_members|query|string|false|none|
|access_organisations_bills|query|string|false|none|
|access_organisations_credit_count|query|string|false|none|
|access_organisations_consumption_statistics|query|string|false|none|
|access_personal_information|query|string|false|none|
|manage_personal_information|query|string|false|none|
|manage_ssh_keys|query|string|false|none|
|manage_services|query|string|false|none|
|manage_applications|query|string|false|none|
|access_bills|query|string|false|none|
|access_credit_count|query|string|false|none|
|access_consumption_statistics|query|string|false|none|
|Cookie|header|string|false|none|

<h3 id="postoauthauthorize-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|authorizeToken|None|

<aside class="success">
This operation does not require authentication
</aside>

## postOauthRequestToken

<a id="opIdpostOauthRequestToken"></a>

> Code samples

```bash
curl https://example.com/oauth/request_token \
  -X POST
```

`POST /oauth/request_token`

<h3 id="postoauthrequesttoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|oauth_consumer_key|query|string|false|none|
|oauth_token|query|string|false|none|
|oauth_signature_method|query|string|false|none|
|oauth_signature|query|string|false|none|
|oauth_timestamp|query|string|false|none|
|oauth_nonce|query|string|false|none|
|oauth_version|query|string|false|none|
|oauth_verifier|query|string|false|none|
|oauth_callback|query|string|false|none|
|oauth_token_secret|query|string|false|none|
|oauth_callback_confirmed|query|string|false|none|

<h3 id="postoauthrequesttoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|postReqTokenRequest|None|

<aside class="success">
This operation does not require authentication
</aside>

## post/oauth/request_token_query

> Code samples

```bash
curl https://example.com/oauth/request_token_query \
  -X POST
```

`POST /oauth/request_token_query`

<h3 id="postoauthrequesttokenquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|oauth_consumer_key|query|string|false|none|
|oauth_token|query|string|false|none|
|oauth_signature_method|query|string|false|none|
|oauth_signature|query|string|false|none|
|oauth_timestamp|query|string|false|none|
|oauth_nonce|query|string|false|none|
|oauth_version|query|string|false|none|
|oauth_verifier|query|string|false|none|
|oauth_callback|query|string|false|none|
|oauth_token_secret|query|string|false|none|
|oauth_callback_confirmed|query|string|false|none|

<h3 id="postoauthrequesttokenquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## getOauthRights

<a id="opIdgetOauthRights"></a>

> Code samples

```bash
curl https://example.com/oauth/rights \
  -H 'Accept: application/json'
```

`GET /oauth/rights`

> Example responses

> 200 Response

```json
{
  "description": "string",
  "name": "string"
}
```

<h3 id="getoauthrights-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getAvailableRights|[Rights](#schemarights)|

<aside class="success">
This operation does not require authentication
</aside>

## Get the swagger for this API as {type}

> Code samples

```bash
curl https://example.com/openapi.string
```

`GET /openapi.{type}`

Get the swagger for this API as {type}. Type can be either "yml" or "json".

<h3 id="get-the-swagger-for-this-api-as-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|none|

<h3 id="get-the-swagger-for-this-api-as-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|This API swagger documentation in {type} format.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getOrganisations

<a id="opIdgetOrganisations"></a>

> Code samples

```bash
curl https://example.com/organisations \
  -H 'Accept: application/json'
```

`GET /organisations`

<h3 id="getorganisations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "VAT": "string",
    "address": "string",
    "avatar": "string",
    "city": "string",
    "company": "string",
    "country": "string",
    "description": "string",
    "id": "string",
    "name": "string",
    "vatState": "string",
    "zipcode": "string"
  }
]
```

<h3 id="getorganisations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getUserOrganisations|Inline|

<h3 id="getorganisations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Organisation](#schemaorganisation)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## postOrganisations

<a id="opIdpostOrganisations"></a>

> Code samples

```bash
curl https://example.com/organisations \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "VAT": "string",
    "address": "string",
    "city": "string",
    "company": "string",
    "country": "string",
    "description": "string",
    "name": "string",
    "zipcode": "string"
  }'
```

`POST /organisations`

> Body parameter

```json
{
  "VAT": "string",
  "address": "string",
  "city": "string",
  "company": "string",
  "country": "string",
  "description": "string",
  "name": "string",
  "zipcode": "string"
}
```

<h3 id="postorganisations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WannabeOrganisation](#schemawannabeorganisation)|true|none|
|» VAT|body|string|false|none|
|» address|body|string|false|The address of the organisation.|
|» city|body|string|false|The city of the organisation.|
|» company|body|string|false|The company's name of the organisation.|
|» country|body|string|false|The country of the organisation.|
|» description|body|string|true|The description of the organisation.|
|» name|body|string|true|The name of the organisation.|
|» zipcode|body|string|false|The zipcode of the city's organisation.|

<h3 id="postorganisations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|createOrganisation|[Organisation](#schemaorganisation)|

<aside class="success">
This operation does not require authentication
</aside>

## getOrganisationsId

<a id="opIdgetOrganisationsId"></a>

> Code samples

```bash
curl https://example.com/organisations/string \
  -H 'Accept: application/json'
```

`GET /organisations/{id}`

<h3 id="getorganisationsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "VAT": "string",
  "address": "string",
  "avatar": "string",
  "city": "string",
  "company": "string",
  "country": "string",
  "description": "string",
  "id": "string",
  "name": "string",
  "vatState": "string",
  "zipcode": "string"
}
```

<h3 id="getorganisationsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getOrganisation|[Organisation](#schemaorganisation)|

<aside class="success">
This operation does not require authentication
</aside>

## putOrganisationsId

<a id="opIdputOrganisationsId"></a>

> Code samples

```bash
curl https://example.com/organisations/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "VAT": "string",
    "address": "string",
    "city": "string",
    "company": "string",
    "country": "string",
    "description": "string",
    "name": "string",
    "zipcode": "string"
  }'
```

`PUT /organisations/{id}`

> Body parameter

```json
{
  "VAT": "string",
  "address": "string",
  "city": "string",
  "company": "string",
  "country": "string",
  "description": "string",
  "name": "string",
  "zipcode": "string"
}
```

<h3 id="putorganisationsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[WannabeOrganisation](#schemawannabeorganisation)|true|none|
|» VAT|body|string|false|none|
|» address|body|string|false|The address of the organisation.|
|» city|body|string|false|The city of the organisation.|
|» company|body|string|false|The company's name of the organisation.|
|» country|body|string|false|The country of the organisation.|
|» description|body|string|true|The description of the organisation.|
|» name|body|string|true|The name of the organisation.|
|» zipcode|body|string|false|The zipcode of the city's organisation.|

<h3 id="putorganisationsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|editOrganisation|[Organisation](#schemaorganisation)|

<aside class="success">
This operation does not require authentication
</aside>

## deleteOrganisationsId

<a id="opIddeleteOrganisationsId"></a>

> Code samples

```bash
curl https://example.com/organisations/string \
  -X DELETE
```

`DELETE /organisations/{id}`

<h3 id="deleteorganisationsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="deleteorganisationsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|deleteOrganisation|None|

<aside class="success">
This operation does not require authentication
</aside>

## getOrganisationsIdAddonproviders

<a id="opIdgetOrganisationsIdAddonproviders"></a>

> Code samples

```bash
curl https://example.com/organisations/string/addonproviders \
  -H 'Accept: application/json'
```

`GET /organisations/{id}/addonproviders`

<h3 id="getorganisationsidaddonproviders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "analyticsId": "string",
    "canUpgrade": false,
    "features": [
      {
        "name": "string",
        "type": "string",
        "value": "string"
      }
    ],
    "googlePlusName": "string",
    "id": "string",
    "logoUrl": "string",
    "longDesc": "string",
    "name": "string",
    "openInNewTab": false,
    "plans": [
      {
        "features": [
          {
            "name": "string",
            "type": "string",
            "value": "string"
          }
        ],
        "id": "string",
        "name": "string",
        "price": 0,
        "slug": "string"
      }
    ],
    "regions": [
      "string"
    ],
    "shortDesc": "string",
    "status": "string",
    "supportEmail": "string",
    "twitterName": "string",
    "website": "string"
  }
]
```

<h3 id="getorganisationsidaddonproviders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get all informations about all providers.|Inline|

<h3 id="getorganisationsidaddonproviders-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Provider](#schemaprovider)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## postOrganisationsIdAddonproviders

<a id="opIdpostOrganisationsIdAddonproviders"></a>

> Code samples

```bash
curl https://example.com/organisations/string/addonproviders \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "api": {
      "config_vars": [
        "string"
      ],
      "password": "string",
      "production": {
        "base_url": "string",
        "sso_url": "string"
      },
      "regions": [
        "string"
      ],
      "sso_salt": "string",
      "test": {
        "base_url": "string",
        "sso_url": "string"
      }
    },
    "id": "string",
    "name": "string"
  }'
```

`POST /organisations/{id}/addonproviders`

> Body parameter

```json
{
  "api": {
    "config_vars": [
      "string"
    ],
    "password": "string",
    "production": {
      "base_url": "string",
      "sso_url": "string"
    },
    "regions": [
      "string"
    ],
    "sso_salt": "string",
    "test": {
      "base_url": "string",
      "sso_url": "string"
    }
  },
  "id": "string",
  "name": "string"
}
```

<h3 id="postorganisationsidaddonproviders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[WannabeAddonProvider](#schemawannabeaddonprovider)|true|none|
|» api|body|[WannabeAddonProviderAPI](#schemawannabeaddonproviderapi)|true|none|
|» id|body|string|true|none|
|» name|body|string|true|none|

<h3 id="postorganisationsidaddonproviders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|createProvider|[Provider](#schemaprovider)|

<aside class="success">
This operation does not require authentication
</aside>

## getOrganisationsIdAddonprovidersProviderId

<a id="opIdgetOrganisationsIdAddonprovidersProviderId"></a>

> Code samples

```bash
curl https://example.com/organisations/string/addonproviders/string \
  -H 'Accept: application/json'
```

`GET /organisations/{id}/addonproviders/{providerId}`

<h3 id="getorganisationsidaddonprovidersproviderid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|providerId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "analyticsId": "string",
  "canUpgrade": false,
  "features": [
    {
      "name": "string",
      "type": "string",
      "value": "string"
    }
  ],
  "googlePlusName": "string",
  "id": "string",
  "logoUrl": "string",
  "longDesc": "string",
  "name": "string",
  "openInNewTab": false,
  "plans": [
    {
      "features": [
        {
          "name": "string",
          "type": "string",
          "value": "string"
        }
      ],
      "id": "string",
      "name": "string",
      "price": 0,
      "slug": "string"
    }
  ],
  "regions": [
    "string"
  ],
  "shortDesc": "string",
  "status": "string",
  "supportEmail": "string",
  "twitterName": "string",
  "website": "string"
}
```

<h3 id="getorganisationsidaddonprovidersproviderid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get all informations about given provider.|[Provider](#schemaprovider)|

<aside class="success">
This operation does not require authentication
</aside>

## putOrganisationsIdAddonprovidersProviderId

<a id="opIdputOrganisationsIdAddonprovidersProviderId"></a>

> Code samples

```bash
curl https://example.com/organisations/string/addonproviders/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "api": {
      "config_vars": [
        "string"
      ],
      "password": "string",
      "production": {
        "base_url": "string",
        "sso_url": "string"
      },
      "regions": [
        "string"
      ],
      "sso_salt": "string",
      "test": {
        "base_url": "string",
        "sso_url": "string"
      }
    },
    "id": "string",
    "name": "string"
  }'
```

`PUT /organisations/{id}/addonproviders/{providerId}`

> Body parameter

```json
{
  "api": {
    "config_vars": [
      "string"
    ],
    "password": "string",
    "production": {
      "base_url": "string",
      "sso_url": "string"
    },
    "regions": [
      "string"
    ],
    "sso_salt": "string",
    "test": {
      "base_url": "string",
      "sso_url": "string"
    }
  },
  "id": "string",
  "name": "string"
}
```

<h3 id="putorganisationsidaddonprovidersproviderid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|providerId|path|string|true|none|
|body|body|[WannabeAddonProvider](#schemawannabeaddonprovider)|true|none|
|» api|body|[WannabeAddonProviderAPI](#schemawannabeaddonproviderapi)|true|none|
|» id|body|string|true|none|
|» name|body|string|true|none|

<h3 id="putorganisationsidaddonprovidersproviderid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|updateProviderInfos|[Provider](#schemaprovider)|

<aside class="success">
This operation does not require authentication
</aside>

## Remove an add-on provider

> Code samples

```bash
curl https://example.com/organisations/string/addonproviders/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /organisations/{id}/addonproviders/{providerId}`

Remove a given add-on provider. providerId must be owned by organisation {id}.

<h3 id="remove-an-add-on-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|providerId|path|string|true|none|

> Example responses

> 403 Response

```json
"{\"type\":\"error\",\"id\":6200,\"message\":\"You do not belong to this organisation so you cannot access it\"}"
```

<h3 id="remove-an-add-on-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|If the deletion was successful.|None|
|403|Forbidden|If user has no access to organisation {id} or provider or if there still are add-ons of this provider.|[Error](#schemaerror)|
|404|Not Found|If no such organisation/provider exists.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getOrganisationsIdAddonprovidersProviderIdFeatures

<a id="opIdgetOrganisationsIdAddonprovidersProviderIdFeatures"></a>

> Code samples

```bash
curl https://example.com/organisations/string/addonproviders/string/features \
  -H 'Accept: application/json'
```

`GET /organisations/{id}/addonproviders/{providerId}/features`

<h3 id="getorganisationsidaddonprovidersprovideridfeatures-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|providerId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "name": "string",
    "type": "string",
    "value": "string"
  }
]
```

<h3 id="getorganisationsidaddonprovidersprovideridfeatures-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getProviderFeatures|Inline|

<h3 id="getorganisationsidaddonprovidersprovideridfeatures-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Feature](#schemafeature)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## postOrganisationsIdAddonprovidersProviderIdFeatures

<a id="opIdpostOrganisationsIdAddonprovidersProviderIdFeatures"></a>

> Code samples

```bash
curl https://example.com/organisations/string/addonproviders/string/features \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "string",
    "type": "string"
  }'
```

`POST /organisations/{id}/addonproviders/{providerId}/features`

> Body parameter

```json
{
  "name": "string",
  "type": "string"
}
```

<h3 id="postorganisationsidaddonprovidersprovideridfeatures-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|providerId|path|string|true|none|
|body|body|[WannabeFeature](#schemawannabefeature)|true|none|
|» name|body|string|true|none|
|» type|body|string|true|BOOLEAN, INTERVAL, FILESIZE, NUMBER, PERCENTAGE|

<h3 id="postorganisationsidaddonprovidersprovideridfeatures-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|addProviderFeature|[Feature](#schemafeature)|

<aside class="success">
This operation does not require authentication
</aside>

## deleteOrganisationsIdAddonprovidersProviderIdFeaturesFeatureId

<a id="opIddeleteOrganisationsIdAddonprovidersProviderIdFeaturesFeatureId"></a>

> Code samples

```bash
curl https://example.com/organisations/string/addonproviders/string/features/string \
  -X DELETE
```

`DELETE /organisations/{id}/addonproviders/{providerId}/features/{featureId}`

<h3 id="deleteorganisationsidaddonprovidersprovideridfeaturesfeatureid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|featureId|path|string|true|none|
|providerId|path|string|true|none|

<h3 id="deleteorganisationsidaddonprovidersprovideridfeaturesfeatureid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|deleteProviderFeature|None|

<aside class="success">
This operation does not require authentication
</aside>

## getOrganisationsIdAddonprovidersProviderIdPlans

<a id="opIdgetOrganisationsIdAddonprovidersProviderIdPlans"></a>

> Code samples

```bash
curl https://example.com/organisations/string/addonproviders/string/plans \
  -H 'Accept: application/json'
```

`GET /organisations/{id}/addonproviders/{providerId}/plans`

<h3 id="getorganisationsidaddonprovidersprovideridplans-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|providerId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "features": [
      {
        "name": "string",
        "type": "string",
        "value": "string"
      }
    ],
    "id": "string",
    "name": "string",
    "price": 0,
    "slug": "string"
  }
]
```

<h3 id="getorganisationsidaddonprovidersprovideridplans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getProviderPlans|Inline|

<h3 id="getorganisationsidaddonprovidersprovideridplans-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Plan](#schemaplan)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## postOrganisationsIdAddonprovidersProviderIdPlans

<a id="opIdpostOrganisationsIdAddonprovidersProviderIdPlans"></a>

> Code samples

```bash
curl https://example.com/organisations/string/addonproviders/string/plans \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "features": [
      {
        "name": "string",
        "type": "string",
        "value": "string"
      }
    ],
    "name": "string",
    "price": 0,
    "slug": "string"
  }'
```

`POST /organisations/{id}/addonproviders/{providerId}/plans`

> Body parameter

```json
{
  "features": [
    {
      "name": "string",
      "type": "string",
      "value": "string"
    }
  ],
  "name": "string",
  "price": 0,
  "slug": "string"
}
```

<h3 id="postorganisationsidaddonprovidersprovideridplans-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|providerId|path|string|true|none|
|body|body|[WannabePlan](#schemawannabeplan)|true|none|
|» features|body|[[WannabePlanFeature](#schemawannabeplanfeature)]|true|none|
|» name|body|string|true|none|
|» price|body|integer(int64)|true|none|
|» slug|body|string|true|none|

<h3 id="postorganisationsidaddonprovidersprovideridplans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|addProviderPlan|[Plan](#schemaplan)|

<aside class="success">
This operation does not require authentication
</aside>

## getOrganisationsIdAddonprovidersProviderIdPlansPlanId

<a id="opIdgetOrganisationsIdAddonprovidersProviderIdPlansPlanId"></a>

> Code samples

```bash
curl https://example.com/organisations/string/addonproviders/string/plans/string \
  -H 'Accept: application/json'
```

`GET /organisations/{id}/addonproviders/{providerId}/plans/{planId}`

<h3 id="getorganisationsidaddonprovidersprovideridplansplanid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|providerId|path|string|true|none|
|planId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "features": [
    {
      "name": "string",
      "type": "string",
      "value": "string"
    }
  ],
  "id": "string",
  "name": "string",
  "price": 0,
  "slug": "string"
}
```

<h3 id="getorganisationsidaddonprovidersprovideridplansplanid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getProviderPlan|[Plan](#schemaplan)|

<aside class="success">
This operation does not require authentication
</aside>

## putOrganisationsIdAddonprovidersProviderIdPlansPlanId

<a id="opIdputOrganisationsIdAddonprovidersProviderIdPlansPlanId"></a>

> Code samples

```bash
curl https://example.com/organisations/string/addonproviders/string/plans/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "features": [
      {
        "name": "string",
        "type": "string",
        "value": "string"
      }
    ],
    "name": "string",
    "price": 0,
    "slug": "string"
  }'
```

`PUT /organisations/{id}/addonproviders/{providerId}/plans/{planId}`

> Body parameter

```json
{
  "features": [
    {
      "name": "string",
      "type": "string",
      "value": "string"
    }
  ],
  "name": "string",
  "price": 0,
  "slug": "string"
}
```

<h3 id="putorganisationsidaddonprovidersprovideridplansplanid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|providerId|path|string|true|none|
|planId|path|string|true|none|
|body|body|[WannabePlan](#schemawannabeplan)|true|none|
|» features|body|[[WannabePlanFeature](#schemawannabeplanfeature)]|true|none|
|» name|body|string|true|none|
|» price|body|integer(int64)|true|none|
|» slug|body|string|true|none|

<h3 id="putorganisationsidaddonprovidersprovideridplansplanid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|editProviderPlan|[Plan](#schemaplan)|

<aside class="success">
This operation does not require authentication
</aside>

## deleteOrganisationsIdAddonprovidersProviderIdPlansPlanId

<a id="opIddeleteOrganisationsIdAddonprovidersProviderIdPlansPlanId"></a>

> Code samples

```bash
curl https://example.com/organisations/string/addonproviders/string/plans/string \
  -X DELETE
```

`DELETE /organisations/{id}/addonproviders/{providerId}/plans/{planId}`

<h3 id="deleteorganisationsidaddonprovidersprovideridplansplanid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|providerId|path|string|true|none|
|planId|path|string|true|none|

<h3 id="deleteorganisationsidaddonprovidersprovideridplansplanid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|deleteProviderPlan|None|

<aside class="success">
This operation does not require authentication
</aside>

## putOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureName

<a id="opIdputOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureName"></a>

> Code samples

```bash
curl https://example.com/organisations/string/addonproviders/string/plans/string/features/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "string",
    "type": "string",
    "value": "string"
  }'
```

`PUT /organisations/{id}/addonproviders/{providerId}/plans/{planId}/features/{featureName}`

> Body parameter

```json
{
  "name": "string",
  "type": "string",
  "value": "string"
}
```

<h3 id="putorganisationsidaddonprovidersprovideridplansplanidfeaturesfeaturename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|featureName|path|string|true|none|
|providerId|path|string|true|none|
|planId|path|string|true|none|
|body|body|[WannabePlanFeature](#schemawannabeplanfeature)|true|none|
|» name|body|string|true|none|
|» type|body|string|true|none|
|» value|body|string|true|none|

<h3 id="putorganisationsidaddonprovidersprovideridplansplanidfeaturesfeaturename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|editProviderPlanFeature|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureName

<a id="opIddeleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureName"></a>

> Code samples

```bash
curl https://example.com/organisations/string/addonproviders/string/plans/string/features/string \
  -X DELETE
```

`DELETE /organisations/{id}/addonproviders/{providerId}/plans/{planId}/features/{featureName}`

<h3 id="deleteorganisationsidaddonprovidersprovideridplansplanidfeaturesfeaturename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|featureName|path|string|true|none|
|providerId|path|string|true|none|
|planId|path|string|true|none|

<h3 id="deleteorganisationsidaddonprovidersprovideridplansplanidfeaturesfeaturename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|deleteProviderPlanFeature|None|

<aside class="success">
This operation does not require authentication
</aside>

## getOrganisationsIdAddonsAddonIdSso

<a id="opIdgetOrganisationsIdAddonsAddonIdSso"></a>

> Code samples

```bash
curl https://example.com/organisations/string/addonproviders/string/sso \
  -H 'Accept: application/json'
```

`GET /organisations/{id}/addonproviders/{providerId}/sso`

<h3 id="getorganisationsidaddonsaddonidsso-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|providerId|path|string|true|none|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "macaroon": "string",
  "url": "string"
}
```

<h3 id="getorganisationsidaddonsaddonidsso-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getSSOData|[AddonProviderSso](#schemaaddonprovidersso)|

<aside class="success">
This operation does not require authentication
</aside>

## getOrganisationsIdAddonprovidersProviderIdTags

<a id="opIdgetOrganisationsIdAddonprovidersProviderIdTags"></a>

> Code samples

```bash
curl https://example.com/organisations/string/addonproviders/string/tags
```

`GET /organisations/{id}/addonproviders/{providerId}/tags`

<h3 id="getorganisationsidaddonprovidersprovideridtags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|providerId|path|string|true|none|

<h3 id="getorganisationsidaddonprovidersprovideridtags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getProviderTags|Inline|

<h3 id="getorganisationsidaddonprovidersprovideridtags-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## postOrganisationsIdAddonprovidersProviderIdTesters

<a id="opIdpostOrganisationsIdAddonprovidersProviderIdTesters"></a>

> Code samples

```bash
curl https://example.com/organisations/string/addonproviders/string/testers \
  -X POST
```

`POST /organisations/{id}/addonproviders/{providerId}/testers`

<h3 id="postorganisationsidaddonprovidersprovideridtesters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|providerId|path|string|true|none|

<h3 id="postorganisationsidaddonprovidersprovideridtesters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|addBetaTester|None|

<aside class="success">
This operation does not require authentication
</aside>

## getOrganisationsIdAddons

<a id="opIdgetOrganisationsIdAddons"></a>

> Code samples

```bash
curl https://example.com/organisations/string/addons \
  -H 'Accept: application/json'
```

`GET /organisations/{id}/addons`

<h3 id="getorganisationsidaddons-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "configKeys": [
      "string"
    ],
    "creationDate": "1970-01-01",
    "id": "string",
    "name": "string",
    "plan": {
      "features": [
        {
          "name": "string",
          "type": "string",
          "value": "string"
        }
      ],
      "id": "string",
      "name": "string",
      "price": 0,
      "slug": "string"
    },
    "provider": {
      "analyticsId": "string",
      "canUpgrade": false,
      "features": [
        {
          "name": "string",
          "type": "string",
          "value": "string"
        }
      ],
      "googlePlusName": "string",
      "id": "string",
      "logoUrl": "string",
      "longDesc": "string",
      "name": "string",
      "openInNewTab": false,
      "plans": [
        {
          "features": [
            {
              "name": "string",
              "type": "string",
              "value": "string"
            }
          ],
          "id": "string",
          "name": "string",
          "price": 0,
          "slug": "string"
        }
      ],
      "regions": [
        "string"
      ],
      "shortDesc": "string",
      "status": "string",
      "supportEmail": "string",
      "twitterName": "string",
      "website": "string"
    },
    "realId": "string",
    "region": "string"
  }
]
```

<h3 id="getorganisationsidaddons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getAddons|Inline|

<h3 id="getorganisationsidaddons-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Addon](#schemaaddon)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## postOrganisationsIdAddons

<a id="opIdpostOrganisationsIdAddons"></a>

> Code samples

```bash
curl https://example.com/organisations/string/addons \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "string",
    "payment": {
      "deviceData": "string",
      "token": "string",
      "type": "NEW_CARD"
    },
    "plan": "string",
    "providerId": "string",
    "region": "string"
  }'
```

`POST /organisations/{id}/addons`

> Body parameter

```json
{
  "name": "string",
  "payment": {
    "deviceData": "string",
    "token": "string",
    "type": "NEW_CARD"
  },
  "plan": "string",
  "providerId": "string",
  "region": "string"
}
```

<h3 id="postorganisationsidaddons-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[WannabeAddon](#schemawannabeaddon)|true|none|
|» name|body|string|true|none|
|» payment|body|[PaymentData](#schemapaymentdata)|true|none|
|» plan|body|string|true|none|
|» providerId|body|string|true|none|
|» region|body|string|true|none|

<h3 id="postorganisationsidaddons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|provisionAddon|[Addon](#schemaaddon)|

<aside class="success">
This operation does not require authentication
</aside>

## post/organisations/{id}/addons/preorders

> Code samples

```bash
curl https://example.com/organisations/string/addons/preorders \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "string",
    "payment": {
      "deviceData": "string",
      "token": "string",
      "type": "NEW_CARD"
    },
    "plan": "string",
    "providerId": "string",
    "region": "string"
  }'
```

`POST /organisations/{id}/addons/preorders`

> Body parameter

```json
{
  "name": "string",
  "payment": {
    "deviceData": "string",
    "token": "string",
    "type": "NEW_CARD"
  },
  "plan": "string",
  "providerId": "string",
  "region": "string"
}
```

<h3 id="postorganisationsidaddonspreorders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[WannabeAddon](#schemawannabeaddon)|true|none|
|» name|body|string|true|none|
|» payment|body|[PaymentData](#schemapaymentdata)|true|none|
|» plan|body|string|true|none|
|» providerId|body|string|true|none|
|» region|body|string|true|none|

<h3 id="postorganisationsidaddonspreorders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## getOrganisationsIdAddonsAddonId

<a id="opIdgetOrganisationsIdAddonsAddonId"></a>

> Code samples

```bash
curl https://example.com/organisations/string/addons/string \
  -H 'Accept: application/json'
```

`GET /organisations/{id}/addons/{addonId}`

<h3 id="getorganisationsidaddonsaddonid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|addonId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "configKeys": [
    "string"
  ],
  "creationDate": "1970-01-01",
  "id": "string",
  "name": "string",
  "plan": {
    "features": [
      {
        "name": "string",
        "type": "string",
        "value": "string"
      }
    ],
    "id": "string",
    "name": "string",
    "price": 0,
    "slug": "string"
  },
  "provider": {
    "analyticsId": "string",
    "canUpgrade": false,
    "features": [
      {
        "name": "string",
        "type": "string",
        "value": "string"
      }
    ],
    "googlePlusName": "string",
    "id": "string",
    "logoUrl": "string",
    "longDesc": "string",
    "name": "string",
    "openInNewTab": false,
    "plans": [
      {
        "features": [
          {
            "name": "string",
            "type": "string",
            "value": "string"
          }
        ],
        "id": "string",
        "name": "string",
        "price": 0,
        "slug": "string"
      }
    ],
    "regions": [
      "string"
    ],
    "shortDesc": "string",
    "status": "string",
    "supportEmail": "string",
    "twitterName": "string",
    "website": "string"
  },
  "realId": "string",
  "region": "string"
}
```

<h3 id="getorganisationsidaddonsaddonid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getAddon|[Addon](#schemaaddon)|

<aside class="success">
This operation does not require authentication
</aside>

## putOrganisationsIdAddonsAddonId

<a id="opIdputOrganisationsIdAddonsAddonId"></a>

> Code samples

```bash
curl https://example.com/organisations/string/addons/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "string",
    "payment": {
      "deviceData": "string",
      "token": "string",
      "type": "NEW_CARD"
    },
    "plan": "string",
    "providerId": "string",
    "region": "string"
  }'
```

`PUT /organisations/{id}/addons/{addonId}`

> Body parameter

```json
{
  "name": "string",
  "payment": {
    "deviceData": "string",
    "token": "string",
    "type": "NEW_CARD"
  },
  "plan": "string",
  "providerId": "string",
  "region": "string"
}
```

<h3 id="putorganisationsidaddonsaddonid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|addonId|path|string|true|none|
|body|body|[WannabeAddon](#schemawannabeaddon)|true|none|
|» name|body|string|true|none|
|» payment|body|[PaymentData](#schemapaymentdata)|true|none|
|» plan|body|string|true|none|
|» providerId|body|string|true|none|
|» region|body|string|true|none|

<h3 id="putorganisationsidaddonsaddonid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Update addon information|[Addon](#schemaaddon)|

<aside class="success">
This operation does not require authentication
</aside>

## deleteOrganisationsIdAddonsAddonId

<a id="opIddeleteOrganisationsIdAddonsAddonId"></a>

> Code samples

```bash
curl https://example.com/organisations/string/addons/string \
  -X DELETE
```

`DELETE /organisations/{id}/addons/{addonId}`

<h3 id="deleteorganisationsidaddonsaddonid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|addonId|path|string|true|none|

<h3 id="deleteorganisationsidaddonsaddonid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|deprovisionAddon|None|

<aside class="success">
This operation does not require authentication
</aside>

## getOrganisationsIdAddonsAddonIdApplications

<a id="opIdgetOrganisationsIdAddonsAddonIdApplications"></a>

> Code samples

```bash
curl https://example.com/organisations/string/addons/string/applications \
  -H 'Accept: application/json'
```

`GET /organisations/{id}/addons/{addonId}/applications`

<h3 id="getorganisationsidaddonsaddonidapplications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|addonId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "archived": false,
    "branch": "string",
    "buildFlavor": {
      "available": false,
      "cpus": 0,
      "disk": 0,
      "mem": 0,
      "microservice": false,
      "name": "string",
      "nice": 0,
      "price": 0
    },
    "cancelOnPush": false,
    "commitId": "string",
    "creationDate": "1970-01-01",
    "deployUrl": "string",
    "deployment": {
      "httpUrl": "string",
      "repoState": "string",
      "shutdownable": false,
      "type": "string",
      "url": "string"
    },
    "description": "string",
    "favourite": false,
    "homogeneous": false,
    "id": "string",
    "instance": {
      "buildFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "comingSoon": false,
      "defaultEnv": {},
      "defaultFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "deployments": [
        "string"
      ],
      "description": "string",
      "enabled": false,
      "flavors": [
        {
          "available": false,
          "cpus": 0,
          "disk": 0,
          "mem": 0,
          "microservice": false,
          "name": "string",
          "nice": 0,
          "price": 0
        }
      ],
      "instanceAndVersion": "string",
      "maxAllowedInstances": 0,
      "maxFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "maxInstances": 0,
      "minFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "minInstances": 0,
      "name": "string",
      "tags": [
        "string"
      ],
      "type": "string",
      "variant": {
        "deployType": "string",
        "id": "string",
        "logo": "string",
        "name": "string",
        "slug": "string"
      },
      "version": "string"
    },
    "last_deploy": 0,
    "name": "string",
    "ownerId": "string",
    "separateBuild": false,
    "state": "string",
    "stickySessions": false,
    "vhosts": [
      {
        "fqdn": "string"
      }
    ],
    "webhookSecret": "string",
    "webhookUrl": "string",
    "zone": "string"
  }
]
```

<h3 id="getorganisationsidaddonsaddonidapplications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getApplicationsLinkedToAddon|Inline|

<h3 id="getorganisationsidaddonsaddonidapplications-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Application](#schemaapplication)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getOrganisationsIdAddonsAddonIdEnv

<a id="opIdgetOrganisationsIdAddonsAddonIdEnv"></a>

> Code samples

```bash
curl https://example.com/organisations/string/addons/string/env \
  -H 'Accept: application/json'
```

`GET /organisations/{id}/addons/{addonId}/env`

<h3 id="getorganisationsidaddonsaddonidenv-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|addonId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "name": "string",
    "value": "string"
  }
]
```

<h3 id="getorganisationsidaddonsaddonidenv-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getAddonEnv|Inline|

<h3 id="getorganisationsidaddonsaddonidenv-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ListEnv](#schemalistenv)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## List instances for this add-on.

> Code samples

```bash
curl https://example.com/organisations/string/addons/string/instances \
  -H 'Accept: application/json'
```

`GET /organisations/{id}/addons/{addonId}/instances`

<h3 id="list-instances-for-this-add-on-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deploymentId|query|string|false|none|
|withDeleted|query|string|false|none|
|id|path|string|true|none|
|addonId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  "{\n  \"uuid\": \"19d21edb-a343-49e7-8aa6-9d87c7e272b8\",\n  \"displayName\": \"Sizzling spewpa\",\n  \"appId\": \"app_2b5ad0bb-4bd7-4180-80b9-0459e98364f3\",\n  \"ownerId\": \"orga_0d221ceb-1b50-4994-a8d9-babb3cceef02\",\n  \"flavor\": {\n    \"name\": \"nano\",\n    \"mem\": 512,\n    \"cpus\": 1,\n    \"price\": 0.1431844215\n  },\n  \"ip\": \"65.10.142.94\",\n  \"appPort\": 18605,\n  \"zabbixPort\": 28605,\n  \"sshPort\": 48605,\n  \"hv\": \"hv-par2-049\",\n  \"image\": \"java-20181029\",\n  \"state\": \"UP\",\n  \"commitId\": \"43a4ba1726e26f039654dcd3916f61c612802947\",\n  \"deployNumber\": 107,\n  \"deployId\": \"deployment_cad0cf75-38e2-4dc8-b1be-ea869862bb69\",\n  \"source\": \"apps\",\n  \"zone\": \"par\",\n  \"internalIP\": \"10.6.123.92\",\n  \"createdAt\": 1540921810532,\n  \"instanceNumber\": 0\n}"
]
```

<h3 id="list-instances-for-this-add-on-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The instance list|Inline|

<h3 id="list-instances-for-this-add-on-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SupernovaInstanceView](#schemasupernovainstanceview)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get a specific instance for {addonId}

> Code samples

```bash
curl https://example.com/organisations/string/addons/string/instances/string \
  -H 'Accept: application/json'
```

`GET /organisations/{id}/addons/{addonId}/instances/{instanceId}`

<h3 id="get-a-specific-instance-for-addonid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|instanceId|path|string|true|none|
|id|path|string|true|none|
|addonId|path|string|true|none|

> Example responses

> 200 Response

```json
"{\n  \"uuid\": \"19d21edb-a343-49e7-8aa6-9d87c7e272b8\",\n  \"displayName\": \"Sizzling spewpa\",\n  \"appId\": \"app_2b5ad0bb-4bd7-4180-80b9-0459e98364f3\",\n  \"ownerId\": \"orga_0d221ceb-1b50-4994-a8d9-babb3cceef02\",\n  \"flavor\": {\n    \"name\": \"nano\",\n    \"mem\": 512,\n    \"cpus\": 1,\n    \"price\": 0.1431844215\n  },\n  \"ip\": \"65.10.142.94\",\n  \"appPort\": 18605,\n  \"zabbixPort\": 28605,\n  \"sshPort\": 48605,\n  \"hv\": \"hv-par2-049\",\n  \"image\": \"java-20181029\",\n  \"state\": \"UP\",\n  \"commitId\": \"43a4ba1726e26f039654dcd3916f61c612802947\",\n  \"deployNumber\": 107,\n  \"deployId\": \"deployment_cad0cf75-38e2-4dc8-b1be-ea869862bb69\",\n  \"source\": \"apps\",\n  \"zone\": \"par\",\n  \"internalIP\": \"10.6.123.92\",\n  \"createdAt\": 1540921810532,\n  \"instanceNumber\": 0\n}"
```

<h3 id="get-a-specific-instance-for-addonid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An instance|[SupernovaInstanceView](#schemasupernovainstanceview)|

<aside class="success">
This operation does not require authentication
</aside>

## Get past migrations from add-on.

> Code samples

```bash
curl https://example.com/organisations/string/addons/string/migrations \
  -H 'Accept: application/json'
```

`GET /organisations/{id}/addons/{addonId}/migrations`

<h3 id="get-past-migrations-from-add-on-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|addonId|path|string|true|none|

> Example responses

> 200 Response

```json
"{\n   \"id\": \"<UUID>\",\n   \"addon_id\": \"addon_<uuid>\",\n   \"kind\": \"SHARED_TO_SHARED|SHARED_TO_DEDICATED|DEDICATED_TO_DEDICATED|DEDICATED_TO_SHARED\",\n   \"state\": \"??\",\n   \"hostname\": \"db.hostname\",\n   \"database\": \"dbname\",\n   \"port\": 5432,\n   \"database_user\": \"username\",\n   \"callback_url\": \"https://api.clever-cloud.com/v2/…\",\n   \"old_cluster_id\": \"acddc485-79c2-4c6b-a617-c92a06c0cb0b\",\n   \"old_cluster_label\": \"par2-01\",\n   \"old_instance_id\": \"acddc485-79c2-4c6b-a617-c92a06c0cb0b\",\n   \"old_plan\": \"s\",\n   \"old_zone\": \"par2\",\n   \"old_recipient_hostname\": \"postgresql-sdc-par2-clevercloud.services.clever-cloud.com\", \n   \"new_cluster_id\": \"acddc485-79c2-4c6b-a617-c92a06c0cb0b\",\n   \"new_cluster_label\": \"par2-02\",\n   \"new_instance_id\": \"acddc485-79c2-4c6b-a617-c92a06c0cb0b\",\n   \"new_plan\": \"m\",\n   \"new_zone\": \"par3\",\n   \"new_recipient_hostname\": \"postgresql-sdc-par3-clevercloud.services.clever-cloud.com\", \n   \"request_date\": \"2018-10-31T10:00:23Z\",\n   \"last_state_update_date\":  \"2018-10-31T10:00:23Z\",\n   \"dump_restore_start_date\":  \"2018-10-31T10:00:23Z\",\n   \"dump_restore_finished_date\":  \"2018-10-31T10:00:23Z\",\n   \"end_date\":  \"2018-10-31T10:00:23Z\",\n   \"exit_message\": \"Success\" \n}"
```

<h3 id="get-past-migrations-from-add-on-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of migrations|Inline|

<h3 id="get-past-migrations-from-add-on-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AddonMigration](#schemaaddonmigration)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Start a new add-on migration

> Code samples

```bash
curl https://example.com/organisations/string/addons/string/migrations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "planId": "string",
    "region": "string"
  }'
```

`POST /organisations/{id}/addons/{addonId}/migrations`

> Body parameter

```json
{
  "planId": "string",
  "region": "string"
}
```

<h3 id="start-a-new-add-on-migration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|addonId|path|string|true|none|
|body|body|object|true|none|
|» planId|body|string|false|Id of the new plan. E.g. "plan_acddc485-79c2-4c6b-a617-c92a06c0cb0b"|
|» region|body|string|false|New region. E.g. "EU", "US", "Par2"|

> Example responses

> 200 Response

```json
{}
```

<h3 id="start-a-new-add-on-migration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Migration has started.|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get a given migration

> Code samples

```bash
curl https://example.com/organisations/string/addons/string/migrations/string \
  -H 'Accept: application/json'
```

`GET /organisations/{id}/addons/{addonId}/migrations/{migrationId}`

<h3 id="get-a-given-migration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|migrationId|path|string|true|none|
|id|path|string|true|none|
|addonId|path|string|true|none|

> Example responses

> 200 Response

```json
"{\n   \"id\": \"<UUID>\",\n   \"addon_id\": \"addon_<uuid>\",\n   \"kind\": \"SHARED_TO_SHARED|SHARED_TO_DEDICATED|DEDICATED_TO_DEDICATED|DEDICATED_TO_SHARED\",\n   \"state\": \"RUNNING|FAILED|RECOVERING|RECOVERED|OK\",\n   \"hostname\": \"db.hostname\",\n   \"database\": \"dbname\",\n   \"port\": 5432,\n   \"database_user\": \"username\",\n   \"callback_url\": \"https://api.clever-cloud.com/v2/…\",\n   \"old_cluster_id\": \"acddc485-79c2-4c6b-a617-c92a06c0cb0b\",\n   \"old_cluster_label\": \"par2-01\",\n   \"old_instance_id\": \"acddc485-79c2-4c6b-a617-c92a06c0cb0b\",\n   \"old_plan\": \"s\",\n   \"old_zone\": \"par2\",\n   \"old_recipient_hostname\": \"postgresql-sdc-par2-clevercloud.services.clever-cloud.com\", \n   \"new_cluster_id\": \"acddc485-79c2-4c6b-a617-c92a06c0cb0b\",\n   \"new_cluster_label\": \"par2-02\",\n   \"new_instance_id\": \"acddc485-79c2-4c6b-a617-c92a06c0cb0b\",\n   \"new_plan\": \"m\",\n   \"new_zone\": \"par3\",\n   \"new_recipient_hostname\": \"postgresql-sdc-par3-clevercloud.services.clever-cloud.com\", \n   \"request_date\": \"2018-10-31T10:00:23Z\",\n   \"last_state_update_date\":  \"2018-10-31T10:00:23Z\",\n   \"dump_restore_start_date\":  \"2018-10-31T10:00:23Z\",\n   \"dump_restore_finished_date\":  \"2018-10-31T10:00:23Z\",\n   \"end_date\":  \"2018-10-31T10:00:23Z\",\n   \"exit_message\": \"Success\" \n}"
```

<h3 id="get-a-given-migration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The migration object|[AddonMigration](#schemaaddonmigration)|

<aside class="success">
This operation does not require authentication
</aside>

## get/organisations/{id}/addons/{addonId}/sso

> Code samples

```bash
curl https://example.com/organisations/string/addons/string/sso \
  -H 'Accept: application/json'
```

`GET /organisations/{id}/addons/{addonId}/sso`

<h3 id="getorganisationsidaddonsaddonidsso-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|addonId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "email": "string",
  "id": "string",
  "nav-data": "string",
  "timestamp": "1970-01-01",
  "token": "string",
  "url": "string"
}
```

<h3 id="getorganisationsidaddonsaddonidsso-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getSSOData|[Sso](#schemasso)|

<aside class="success">
This operation does not require authentication
</aside>

## getOrganisationsIdAddonsAddonIdTags

<a id="opIdgetOrganisationsIdAddonsAddonIdTags"></a>

> Code samples

```bash
curl https://example.com/organisations/string/addons/string/tags
```

`GET /organisations/{id}/addons/{addonId}/tags`

<h3 id="getorganisationsidaddonsaddonidtags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|addonId|path|string|true|none|

<h3 id="getorganisationsidaddonsaddonidtags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getAddonTags|Inline|

<h3 id="getorganisationsidaddonsaddonidtags-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## putOrganisationsIdAddonsAddonIdTagsTag

<a id="opIdputOrganisationsIdAddonsAddonIdTagsTag"></a>

> Code samples

```bash
curl https://example.com/organisations/string/addons/string/tags/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "body": "string"
  }'
```

`PUT /organisations/{id}/addons/{addonId}/tags/{tag}`

> Body parameter

```json
{
  "body": "string"
}
```

<h3 id="putorganisationsidaddonsaddonidtagstag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|tag|path|string|true|none|
|addonId|path|string|true|none|
|body|body|[Body](#schemabody)|true|none|
|» body|body|string|true|none|

<h3 id="putorganisationsidaddonsaddonidtagstag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|addAddonTag|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteOrganisationsIdAddonsAddonIdTagsTag

<a id="opIddeleteOrganisationsIdAddonsAddonIdTagsTag"></a>

> Code samples

```bash
curl https://example.com/organisations/string/addons/string/tags/string \
  -X DELETE
```

`DELETE /organisations/{id}/addons/{addonId}/tags/{tag}`

<h3 id="deleteorganisationsidaddonsaddonidtagstag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|tag|path|string|true|none|
|addonId|path|string|true|none|

<h3 id="deleteorganisationsidaddonsaddonidtagstag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|deleteAddonTag|None|

<aside class="success">
This operation does not require authentication
</aside>

## getOrganisationsIdApplications

<a id="opIdgetOrganisationsIdApplications"></a>

> Code samples

```bash
curl https://example.com/organisations/string/applications \
  -H 'Accept: application/json'
```

`GET /organisations/{id}/applications`

<h3 id="getorganisationsidapplications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "archived": false,
    "branch": "string",
    "buildFlavor": {
      "available": false,
      "cpus": 0,
      "disk": 0,
      "mem": 0,
      "microservice": false,
      "name": "string",
      "nice": 0,
      "price": 0
    },
    "cancelOnPush": false,
    "commitId": "string",
    "creationDate": "1970-01-01",
    "deployUrl": "string",
    "deployment": {
      "httpUrl": "string",
      "repoState": "string",
      "shutdownable": false,
      "type": "string",
      "url": "string"
    },
    "description": "string",
    "favourite": false,
    "homogeneous": false,
    "id": "string",
    "instance": {
      "buildFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "comingSoon": false,
      "defaultEnv": {},
      "defaultFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "deployments": [
        "string"
      ],
      "description": "string",
      "enabled": false,
      "flavors": [
        {
          "available": false,
          "cpus": 0,
          "disk": 0,
          "mem": 0,
          "microservice": false,
          "name": "string",
          "nice": 0,
          "price": 0
        }
      ],
      "instanceAndVersion": "string",
      "maxAllowedInstances": 0,
      "maxFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "maxInstances": 0,
      "minFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "minInstances": 0,
      "name": "string",
      "tags": [
        "string"
      ],
      "type": "string",
      "variant": {
        "deployType": "string",
        "id": "string",
        "logo": "string",
        "name": "string",
        "slug": "string"
      },
      "version": "string"
    },
    "last_deploy": 0,
    "name": "string",
    "ownerId": "string",
    "separateBuild": false,
    "state": "string",
    "stickySessions": false,
    "vhosts": [
      {
        "fqdn": "string"
      }
    ],
    "webhookSecret": "string",
    "webhookUrl": "string",
    "zone": "string"
  }
]
```

<h3 id="getorganisationsidapplications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getAllApplications|Inline|

<h3 id="getorganisationsidapplications-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Application](#schemaapplication)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## postOrganisationsIdApplications

<a id="opIdpostOrganisationsIdApplications"></a>

> Code samples

```bash
curl https://example.com/organisations/string/applications \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "archived": false,
    "cancelOnPush": false,
    "deploy": "string",
    "description": "string",
    "enabled": false,
    "favourite": false,
    "homogeneous": false,
    "instanceType": "string",
    "instanceVariant": "string",
    "instanceVersion": "string",
    "maxFlavor": "string",
    "maxInstances": 0,
    "minFlavor": "string",
    "minInstances": 0,
    "name": "string",
    "oauthApp": {
      "name": "string",
      "owner": "string"
    },
    "oauthAppId": "string",
    "oauthService": "string",
    "separateBuild": false,
    "shutdownable": false,
    "stickySessions": false,
    "tags": [
      "string"
    ],
    "zone": "string"
  }'
```

`POST /organisations/{id}/applications`

Creates an application. If you want to create a Github app, you need to replace the oauthApp field with what you will find here: https://github.com/CleverCloud/doc.clever-cloud.com/issues/179

> Body parameter

```json
{
  "archived": false,
  "cancelOnPush": false,
  "deploy": "string",
  "description": "string",
  "enabled": false,
  "favourite": false,
  "homogeneous": false,
  "instanceType": "string",
  "instanceVariant": "string",
  "instanceVersion": "string",
  "maxFlavor": "string",
  "maxInstances": 0,
  "minFlavor": "string",
  "minInstances": 0,
  "name": "string",
  "oauthApp": {
    "name": "string",
    "owner": "string"
  },
  "oauthAppId": "string",
  "oauthService": "string",
  "separateBuild": false,
  "shutdownable": false,
  "stickySessions": false,
  "tags": [
    "string"
  ],
  "zone": "string"
}
```

<h3 id="postorganisationsidapplications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[WannabeApplication](#schemawannabeapplication)|true|none|
|» archived|body|boolean|false|none|
|» cancelOnPush|body|boolean|false|none|
|» deploy|body|string|true|none|
|» description|body|string|false|none|
|» enabled|body|boolean|true|none|
|» favourite|body|boolean|false|none|
|» homogeneous|body|boolean|false|none|
|» instanceType|body|string|false|none|
|» instanceVariant|body|string|false|none|
|» instanceVersion|body|string|false|none|
|» maxFlavor|body|string|false|none|
|» maxInstances|body|integer(int32)|true|none|
|» minFlavor|body|string|false|none|
|» minInstances|body|integer(int32)|true|none|
|» name|body|string|true|none|
|» oauthApp|body|[WannabeOauthApp](#schemawannabeoauthapp)|false|none|
|» oauthAppId|body|string|false|none|
|» oauthService|body|string|false|none|
|» separateBuild|body|boolean|false|none|
|» shutdownable|body|boolean|false|none|
|» stickySessions|body|boolean|false|none|
|» tags|body|[string]|false|none|
|» zone|body|string|true|none|

<h3 id="postorganisationsidapplications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|addApplication|[Application](#schemaapplication)|

<aside class="success">
This operation does not require authentication
</aside>

## getOrganisationsIdApplicationsAppId

<a id="opIdgetOrganisationsIdApplicationsAppId"></a>

> Code samples

```bash
curl https://example.com/organisations/string/applications/string \
  -H 'Accept: application/json'
```

`GET /organisations/{id}/applications/{appId}`

<h3 id="getorganisationsidapplicationsappid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|appId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "archived": false,
  "branch": "string",
  "buildFlavor": {
    "available": false,
    "cpus": 0,
    "disk": 0,
    "mem": 0,
    "microservice": false,
    "name": "string",
    "nice": 0,
    "price": 0
  },
  "cancelOnPush": false,
  "commitId": "string",
  "creationDate": "1970-01-01",
  "deployUrl": "string",
  "deployment": {
    "httpUrl": "string",
    "repoState": "string",
    "shutdownable": false,
    "type": "string",
    "url": "string"
  },
  "description": "string",
  "favourite": false,
  "homogeneous": false,
  "id": "string",
  "instance": {
    "buildFlavor": {
      "available": false,
      "cpus": 0,
      "disk": 0,
      "mem": 0,
      "microservice": false,
      "name": "string",
      "nice": 0,
      "price": 0
    },
    "comingSoon": false,
    "defaultEnv": {},
    "defaultFlavor": {
      "available": false,
      "cpus": 0,
      "disk": 0,
      "mem": 0,
      "microservice": false,
      "name": "string",
      "nice": 0,
      "price": 0
    },
    "deployments": [
      "string"
    ],
    "description": "string",
    "enabled": false,
    "flavors": [
      {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      }
    ],
    "instanceAndVersion": "string",
    "maxAllowedInstances": 0,
    "maxFlavor": {
      "available": false,
      "cpus": 0,
      "disk": 0,
      "mem": 0,
      "microservice": false,
      "name": "string",
      "nice": 0,
      "price": 0
    },
    "maxInstances": 0,
    "minFlavor": {
      "available": false,
      "cpus": 0,
      "disk": 0,
      "mem": 0,
      "microservice": false,
      "name": "string",
      "nice": 0,
      "price": 0
    },
    "minInstances": 0,
    "name": "string",
    "tags": [
      "string"
    ],
    "type": "string",
    "variant": {
      "deployType": "string",
      "id": "string",
      "logo": "string",
      "name": "string",
      "slug": "string"
    },
    "version": "string"
  },
  "last_deploy": 0,
  "name": "string",
  "ownerId": "string",
  "separateBuild": false,
  "state": "string",
  "stickySessions": false,
  "vhosts": [
    {
      "fqdn": "string"
    }
  ],
  "webhookSecret": "string",
  "webhookUrl": "string",
  "zone": "string"
}
```

<h3 id="getorganisationsidapplicationsappid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getApplication|[Application](#schemaapplication)|

<aside class="success">
This operation does not require authentication
</aside>

## putOrganisationsIdApplicationsAppId

<a id="opIdputOrganisationsIdApplicationsAppId"></a>

> Code samples

```bash
curl https://example.com/organisations/string/applications/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "archived": false,
    "cancelOnPush": false,
    "deploy": "string",
    "description": "string",
    "enabled": false,
    "favourite": false,
    "homogeneous": false,
    "instanceType": "string",
    "instanceVariant": "string",
    "instanceVersion": "string",
    "maxFlavor": "string",
    "maxInstances": 0,
    "minFlavor": "string",
    "minInstances": 0,
    "name": "string",
    "oauthApp": {
      "name": "string",
      "owner": "string"
    },
    "oauthAppId": "string",
    "oauthService": "string",
    "separateBuild": false,
    "shutdownable": false,
    "stickySessions": false,
    "tags": [
      "string"
    ],
    "zone": "string"
  }'
```

`PUT /organisations/{id}/applications/{appId}`

> Body parameter

```json
{
  "archived": false,
  "cancelOnPush": false,
  "deploy": "string",
  "description": "string",
  "enabled": false,
  "favourite": false,
  "homogeneous": false,
  "instanceType": "string",
  "instanceVariant": "string",
  "instanceVersion": "string",
  "maxFlavor": "string",
  "maxInstances": 0,
  "minFlavor": "string",
  "minInstances": 0,
  "name": "string",
  "oauthApp": {
    "name": "string",
    "owner": "string"
  },
  "oauthAppId": "string",
  "oauthService": "string",
  "separateBuild": false,
  "shutdownable": false,
  "stickySessions": false,
  "tags": [
    "string"
  ],
  "zone": "string"
}
```

<h3 id="putorganisationsidapplicationsappid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|appId|path|string|true|none|
|body|body|[WannabeApplication](#schemawannabeapplication)|true|none|
|» archived|body|boolean|false|none|
|» cancelOnPush|body|boolean|false|none|
|» deploy|body|string|true|none|
|» description|body|string|false|none|
|» enabled|body|boolean|true|none|
|» favourite|body|boolean|false|none|
|» homogeneous|body|boolean|false|none|
|» instanceType|body|string|false|none|
|» instanceVariant|body|string|false|none|
|» instanceVersion|body|string|false|none|
|» maxFlavor|body|string|false|none|
|» maxInstances|body|integer(int32)|true|none|
|» minFlavor|body|string|false|none|
|» minInstances|body|integer(int32)|true|none|
|» name|body|string|true|none|
|» oauthApp|body|[WannabeOauthApp](#schemawannabeoauthapp)|false|none|
|» oauthAppId|body|string|false|none|
|» oauthService|body|string|false|none|
|» separateBuild|body|boolean|false|none|
|» shutdownable|body|boolean|false|none|
|» stickySessions|body|boolean|false|none|
|» tags|body|[string]|false|none|
|» zone|body|string|true|none|

<h3 id="putorganisationsidapplicationsappid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|editApplication|[Application](#schemaapplication)|

<aside class="success">
This operation does not require authentication
</aside>

## deleteOrganisationsIdApplicationsAppId

<a id="opIddeleteOrganisationsIdApplicationsAppId"></a>

> Code samples

```bash
curl https://example.com/organisations/string/applications/string \
  -X DELETE
```

`DELETE /organisations/{id}/applications/{appId}`

<h3 id="deleteorganisationsidapplicationsappid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|appId|path|string|true|none|

<h3 id="deleteorganisationsidapplicationsappid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|deleteApplication|None|

<aside class="success">
This operation does not require authentication
</aside>

## getOrganisationsIdApplicationsAppIdAddons

<a id="opIdgetOrganisationsIdApplicationsAppIdAddons"></a>

> Code samples

```bash
curl https://example.com/organisations/string/applications/string/addons \
  -H 'Accept: application/json'
```

`GET /organisations/{id}/applications/{appId}/addons`

<h3 id="getorganisationsidapplicationsappidaddons-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|appId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "configKeys": [
      "string"
    ],
    "creationDate": "1970-01-01",
    "id": "string",
    "name": "string",
    "plan": {
      "features": [
        {
          "name": "string",
          "type": "string",
          "value": "string"
        }
      ],
      "id": "string",
      "name": "string",
      "price": 0,
      "slug": "string"
    },
    "provider": {
      "analyticsId": "string",
      "canUpgrade": false,
      "features": [
        {
          "name": "string",
          "type": "string",
          "value": "string"
        }
      ],
      "googlePlusName": "string",
      "id": "string",
      "logoUrl": "string",
      "longDesc": "string",
      "name": "string",
      "openInNewTab": false,
      "plans": [
        {
          "features": [
            {
              "name": "string",
              "type": "string",
              "value": "string"
            }
          ],
          "id": "string",
          "name": "string",
          "price": 0,
          "slug": "string"
        }
      ],
      "regions": [
        "string"
      ],
      "shortDesc": "string",
      "status": "string",
      "supportEmail": "string",
      "twitterName": "string",
      "website": "string"
    },
    "realId": "string",
    "region": "string"
  }
]
```

<h3 id="getorganisationsidapplicationsappidaddons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getAddonsLinkedToApplication|Inline|

<h3 id="getorganisationsidapplicationsappidaddons-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Addon](#schemaaddon)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## postOrganisationsIdApplicationsAppIdAddons

<a id="opIdpostOrganisationsIdApplicationsAppIdAddons"></a>

> Code samples

```bash
curl https://example.com/organisations/string/applications/string/addons \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "body": "string"
  }'
```

`POST /organisations/{id}/applications/{appId}/addons`

> Body parameter

```json
{
  "body": "string"
}
```

<h3 id="postorganisationsidapplicationsappidaddons-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|appId|path|string|true|none|
|body|body|[Body](#schemabody)|true|none|
|» body|body|string|true|none|

<h3 id="postorganisationsidapplicationsappidaddons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|linkAddonToApplication|None|

<aside class="success">
This operation does not require authentication
</aside>

## getOrganisationsIdApplicationsAppIdAddonsEnv

<a id="opIdgetOrganisationsIdApplicationsAppIdAddonsEnv"></a>

> Code samples

```bash
curl https://example.com/organisations/string/applications/string/addons/env \
  -H 'Accept: application/json'
```

`GET /organisations/{id}/applications/{appId}/addons/env`

<h3 id="getorganisationsidapplicationsappidaddonsenv-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|appId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "addon_id": "string",
    "addon_name": "string",
    "env": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "provider_id": "string"
  }
]
```

<h3 id="getorganisationsidapplicationsappidaddonsenv-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getEnvOfAddonsLinkedToApplication|Inline|

<h3 id="getorganisationsidapplicationsappidaddonsenv-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Env](#schemaenv)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## deleteOrganisationsIdApplicationsAppIdAddonsAddonId

<a id="opIddeleteOrganisationsIdApplicationsAppIdAddonsAddonId"></a>

> Code samples

```bash
curl https://example.com/organisations/string/applications/string/addons/string \
  -X DELETE
```

`DELETE /organisations/{id}/applications/{appId}/addons/{addonId}`

<h3 id="deleteorganisationsidapplicationsappidaddonsaddonid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|appId|path|string|true|none|
|addonId|path|string|true|none|

<h3 id="deleteorganisationsidapplicationsappidaddonsaddonid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|unlinkAddonFromApplication|None|

<aside class="success">
This operation does not require authentication
</aside>

## put/organisations/{id}/applications/{appId}/branch

> Code samples

```bash
curl https://example.com/organisations/string/applications/string/branch \
  -X PUT
```

`PUT /organisations/{id}/applications/{appId}/branch`

<h3 id="putorganisationsidapplicationsappidbranch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|
|id|path|string|true|none|

<h3 id="putorganisationsidapplicationsappidbranch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/organisations/{id}/applications/{appId}/branches

> Code samples

```bash
curl https://example.com/organisations/string/applications/string/branches
```

`GET /organisations/{id}/applications/{appId}/branches`

<h3 id="getorganisationsidapplicationsappidbranches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|
|id|path|string|true|none|

<h3 id="getorganisationsidapplicationsappidbranches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## put/organisations/{id}/applications/{appId}/buildflavor

> Code samples

```bash
curl https://example.com/organisations/string/applications/string/buildflavor \
  -X PUT
```

`PUT /organisations/{id}/applications/{appId}/buildflavor`

<h3 id="putorganisationsidapplicationsappidbuildflavor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|
|id|path|string|true|none|

<h3 id="putorganisationsidapplicationsappidbuildflavor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## getOrganisationsIdApplicationsAppIdDependencies

<a id="opIdgetOrganisationsIdApplicationsAppIdDependencies"></a>

> Code samples

```bash
curl https://example.com/organisations/string/applications/string/dependencies \
  -H 'Accept: application/json'
```

`GET /organisations/{id}/applications/{appId}/dependencies`

<h3 id="getorganisationsidapplicationsappiddependencies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "archived": false,
    "branch": "string",
    "buildFlavor": {
      "available": false,
      "cpus": 0,
      "disk": 0,
      "mem": 0,
      "microservice": false,
      "name": "string",
      "nice": 0,
      "price": 0
    },
    "cancelOnPush": false,
    "commitId": "string",
    "creationDate": "1970-01-01",
    "deployUrl": "string",
    "deployment": {
      "httpUrl": "string",
      "repoState": "string",
      "shutdownable": false,
      "type": "string",
      "url": "string"
    },
    "description": "string",
    "favourite": false,
    "homogeneous": false,
    "id": "string",
    "instance": {
      "buildFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "comingSoon": false,
      "defaultEnv": {},
      "defaultFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "deployments": [
        "string"
      ],
      "description": "string",
      "enabled": false,
      "flavors": [
        {
          "available": false,
          "cpus": 0,
          "disk": 0,
          "mem": 0,
          "microservice": false,
          "name": "string",
          "nice": 0,
          "price": 0
        }
      ],
      "instanceAndVersion": "string",
      "maxAllowedInstances": 0,
      "maxFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "maxInstances": 0,
      "minFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "minInstances": 0,
      "name": "string",
      "tags": [
        "string"
      ],
      "type": "string",
      "variant": {
        "deployType": "string",
        "id": "string",
        "logo": "string",
        "name": "string",
        "slug": "string"
      },
      "version": "string"
    },
    "last_deploy": 0,
    "name": "string",
    "ownerId": "string",
    "separateBuild": false,
    "state": "string",
    "stickySessions": false,
    "vhosts": [
      {
        "fqdn": "string"
      }
    ],
    "webhookSecret": "string",
    "webhookUrl": "string",
    "zone": "string"
  }
]
```

<h3 id="getorganisationsidapplicationsappiddependencies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getApplicationDependencies|Inline|

<h3 id="getorganisationsidapplicationsappiddependencies-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Application](#schemaapplication)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/organisations/{id}/applications/{appId}/dependencies/env

> Code samples

```bash
curl https://example.com/organisations/string/applications/string/dependencies/env
```

`GET /organisations/{id}/applications/{appId}/dependencies/env`

<h3 id="getorganisationsidapplicationsappiddependenciesenv-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|
|id|path|string|true|none|

<h3 id="getorganisationsidapplicationsappiddependenciesenv-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get env variables defined by application dependencies|Inline|

<h3 id="getorganisationsidapplicationsappiddependenciesenv-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[LinkedAppEnv](#schemalinkedappenv)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## putOrganisationsIdApplicationsAppIdDependenciesDependencyId

<a id="opIdputOrganisationsIdApplicationsAppIdDependenciesDependencyId"></a>

> Code samples

```bash
curl https://example.com/organisations/string/applications/string/dependencies/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "body": "string"
  }'
```

`PUT /organisations/{id}/applications/{appId}/dependencies/{dependencyId}`

> Body parameter

```json
{
  "body": "string"
}
```

<h3 id="putorganisationsidapplicationsappiddependenciesdependencyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dependencyId|path|string|true|none|
|appId|path|string|true|none|
|id|path|string|true|none|
|body|body|[Body](#schemabody)|true|none|
|» body|body|string|true|none|

<h3 id="putorganisationsidapplicationsappiddependenciesdependencyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|addApplicationDependency|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteOrganisationsIdApplicationsAppIdDependenciesDependencyId

<a id="opIddeleteOrganisationsIdApplicationsAppIdDependenciesDependencyId"></a>

> Code samples

```bash
curl https://example.com/organisations/string/applications/string/dependencies/string \
  -X DELETE
```

`DELETE /organisations/{id}/applications/{appId}/dependencies/{dependencyId}`

<h3 id="deleteorganisationsidapplicationsappiddependenciesdependencyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dependencyId|path|string|true|none|
|appId|path|string|true|none|
|id|path|string|true|none|

<h3 id="deleteorganisationsidapplicationsappiddependenciesdependencyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|deleteApplicationDependency|None|

<aside class="success">
This operation does not require authentication
</aside>

## getOrganisationsIdApplicationsAppIdDependents

<a id="opIdgetOrganisationsIdApplicationsAppIdDependents"></a>

> Code samples

```bash
curl https://example.com/organisations/string/applications/string/dependents \
  -H 'Accept: application/json'
```

`GET /organisations/{id}/applications/{appId}/dependents`

<h3 id="getorganisationsidapplicationsappiddependents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "archived": false,
    "branch": "string",
    "buildFlavor": {
      "available": false,
      "cpus": 0,
      "disk": 0,
      "mem": 0,
      "microservice": false,
      "name": "string",
      "nice": 0,
      "price": 0
    },
    "cancelOnPush": false,
    "commitId": "string",
    "creationDate": "1970-01-01",
    "deployUrl": "string",
    "deployment": {
      "httpUrl": "string",
      "repoState": "string",
      "shutdownable": false,
      "type": "string",
      "url": "string"
    },
    "description": "string",
    "favourite": false,
    "homogeneous": false,
    "id": "string",
    "instance": {
      "buildFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "comingSoon": false,
      "defaultEnv": {},
      "defaultFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "deployments": [
        "string"
      ],
      "description": "string",
      "enabled": false,
      "flavors": [
        {
          "available": false,
          "cpus": 0,
          "disk": 0,
          "mem": 0,
          "microservice": false,
          "name": "string",
          "nice": 0,
          "price": 0
        }
      ],
      "instanceAndVersion": "string",
      "maxAllowedInstances": 0,
      "maxFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "maxInstances": 0,
      "minFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "minInstances": 0,
      "name": "string",
      "tags": [
        "string"
      ],
      "type": "string",
      "variant": {
        "deployType": "string",
        "id": "string",
        "logo": "string",
        "name": "string",
        "slug": "string"
      },
      "version": "string"
    },
    "last_deploy": 0,
    "name": "string",
    "ownerId": "string",
    "separateBuild": false,
    "state": "string",
    "stickySessions": false,
    "vhosts": [
      {
        "fqdn": "string"
      }
    ],
    "webhookSecret": "string",
    "webhookUrl": "string",
    "zone": "string"
  }
]
```

<h3 id="getorganisationsidapplicationsappiddependents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getApplicationDependents|Inline|

<h3 id="getorganisationsidapplicationsappiddependents-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Application](#schemaapplication)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getOrganisationsIdApplicationsAppIdDeployments

<a id="opIdgetOrganisationsIdApplicationsAppIdDeployments"></a>

> Code samples

```bash
curl https://example.com/organisations/string/applications/string/deployments \
  -H 'Accept: application/json'
```

`GET /organisations/{id}/applications/{appId}/deployments`

<h3 id="getorganisationsidapplicationsappiddeployments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|string|false|none|
|offset|query|string|false|none|
|action|query|string|false|none|
|id|path|string|true|none|
|appId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "httpUrl": "string",
    "repoState": "string",
    "shutdownable": false,
    "type": "string",
    "url": "string"
  }
]
```

<h3 id="getorganisationsidapplicationsappiddeployments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getApplicationDeploymentsForOrga|Inline|

<h3 id="getorganisationsidapplicationsappiddeployments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Deployment](#schemadeployment)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/organisations/{id}/applications/{appId}/deployments/{deploymentId}

> Code samples

```bash
curl https://example.com/organisations/string/applications/string/deployments/string
```

`GET /organisations/{id}/applications/{appId}/deployments/{deploymentId}`

<h3 id="getorganisationsidapplicationsappiddeploymentsdeploymentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|
|deploymentId|path|string|true|none|
|id|path|string|true|none|

<h3 id="getorganisationsidapplicationsappiddeploymentsdeploymentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdInstances

<a id="opIddeleteOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdInstances"></a>

> Code samples

```bash
curl https://example.com/organisations/string/applications/string/deployments/string/instances \
  -X DELETE
```

`DELETE /organisations/{id}/applications/{appId}/deployments/{deploymentId}/instances`

<h3 id="deleteorganisationsidapplicationsappiddeploymentsdeploymentidinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|appId|path|string|true|none|
|deploymentId|path|string|true|none|

<h3 id="deleteorganisationsidapplicationsappiddeploymentsdeploymentidinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getApplicationDeploymentsForOrga|None|

<aside class="success">
This operation does not require authentication
</aside>

## getOrganisationsIdApplicationsAppIdEnv

<a id="opIdgetOrganisationsIdApplicationsAppIdEnv"></a>

> Code samples

```bash
curl https://example.com/organisations/string/applications/string/env \
  -H 'Accept: application/json'
```

`GET /organisations/{id}/applications/{appId}/env`

<h3 id="getorganisationsidapplicationsappidenv-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|appId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "name": "string",
    "value": "string"
  }
]
```

<h3 id="getorganisationsidapplicationsappidenv-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getApplicationEnv|Inline|

<h3 id="getorganisationsidapplicationsappidenv-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ListEnv](#schemalistenv)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## putOrganisationsIdApplicationsAppIdEnv

<a id="opIdputOrganisationsIdApplicationsAppIdEnv"></a>

> Code samples

```bash
curl https://example.com/organisations/string/applications/string/env \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "string",
    "value": "string"
  }'
```

`PUT /organisations/{id}/applications/{appId}/env`

> Body parameter

```json
{
  "name": "string",
  "value": "string"
}
```

<h3 id="putorganisationsidapplicationsappidenv-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|appId|path|string|true|none|
|body|body|[WannabeEnv](#schemawannabeenv)|true|none|
|» name|body|string|true|none|
|» value|body|string|true|none|

<h3 id="putorganisationsidapplicationsappidenv-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|editApplicationEnvironment|[ListEnv](#schemalistenv)|

<aside class="success">
This operation does not require authentication
</aside>

## putOrganisationsIdApplicationsAppIdEnvEnvName

<a id="opIdputOrganisationsIdApplicationsAppIdEnvEnvName"></a>

> Code samples

```bash
curl https://example.com/organisations/string/applications/string/env/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "string",
    "value": "string"
  }'
```

`PUT /organisations/{id}/applications/{appId}/env/{envName}`

> Body parameter

```json
{
  "name": "string",
  "value": "string"
}
```

<h3 id="putorganisationsidapplicationsappidenvenvname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|appId|path|string|true|none|
|envName|path|string|true|none|
|body|body|[WannabeEnv](#schemawannabeenv)|true|none|
|» name|body|string|true|none|
|» value|body|string|true|none|

<h3 id="putorganisationsidapplicationsappidenvenvname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|editApplicationEnv|[ListEnv](#schemalistenv)|

<aside class="success">
This operation does not require authentication
</aside>

## deleteOrganisationsIdApplicationsAppIdEnvEnvName

<a id="opIddeleteOrganisationsIdApplicationsAppIdEnvEnvName"></a>

> Code samples

```bash
curl https://example.com/organisations/string/applications/string/env/string \
  -X DELETE
```

`DELETE /organisations/{id}/applications/{appId}/env/{envName}`

<h3 id="deleteorganisationsidapplicationsappidenvenvname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|appId|path|string|true|none|
|envName|path|string|true|none|

<h3 id="deleteorganisationsidapplicationsappidenvenvname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|removeApplicationEnv|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/organisations/{id}/applications/{appId}/exposed_env

> Code samples

```bash
curl https://example.com/organisations/string/applications/string/exposed_env
```

`GET /organisations/{id}/applications/{appId}/exposed_env`

<h3 id="getorganisationsidapplicationsappidexposedenv-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|
|id|path|string|true|none|

<h3 id="getorganisationsidapplicationsappidexposedenv-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## put/organisations/{id}/applications/{appId}/exposed_env

> Code samples

```bash
curl https://example.com/organisations/string/applications/string/exposed_env \
  -X PUT
```

`PUT /organisations/{id}/applications/{appId}/exposed_env`

<h3 id="putorganisationsidapplicationsappidexposedenv-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|
|id|path|string|true|none|

<h3 id="putorganisationsidapplicationsappidexposedenv-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## getOrganisationsIdApplicationsAppIdInstances

<a id="opIdgetOrganisationsIdApplicationsAppIdInstances"></a>

> Code samples

```bash
curl https://example.com/organisations/string/applications/string/instances \
  -H 'Accept: application/json'
```

`GET /organisations/{id}/applications/{appId}/instances`

<h3 id="getorganisationsidapplicationsappidinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|appId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "appId": "string",
    "appPort": 0,
    "commit": "string",
    "deployNumber": 0,
    "flavor": {
      "available": false,
      "cpus": 0,
      "disk": 0,
      "mem": 0,
      "microservice": false,
      "name": "string",
      "nice": 0,
      "price": 0
    },
    "id": "string",
    "ip": "string",
    "state": "string"
  }
]
```

<h3 id="getorganisationsidapplicationsappidinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getApplicationInstances|Inline|

<h3 id="getorganisationsidapplicationsappidinstances-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AppInstance](#schemaappinstance)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## postOrganisationsIdApplicationsAppIdInstances

<a id="opIdpostOrganisationsIdApplicationsAppIdInstances"></a>

> Code samples

```bash
curl https://example.com/organisations/string/applications/string/instances \
  -X POST
```

`POST /organisations/{id}/applications/{appId}/instances`

<h3 id="postorganisationsidapplicationsappidinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|commit|query|string|false|none|
|id|path|string|true|none|
|appId|path|string|true|none|

<h3 id="postorganisationsidapplicationsappidinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|redeployApplication|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteOrganisationsIdApplicationsAppIdInstances

<a id="opIddeleteOrganisationsIdApplicationsAppIdInstances"></a>

> Code samples

```bash
curl https://example.com/organisations/string/applications/string/instances \
  -X DELETE
```

`DELETE /organisations/{id}/applications/{appId}/instances`

<h3 id="deleteorganisationsidapplicationsappidinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|appId|path|string|true|none|

<h3 id="deleteorganisationsidapplicationsappidinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|undeployApplication|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/organisations/{id}/applications/{appId}/instances/{instanceId}

> Code samples

```bash
curl https://example.com/organisations/string/applications/string/instances/string
```

`GET /organisations/{id}/applications/{appId}/instances/{instanceId}`

<h3 id="getorganisationsidapplicationsappidinstancesinstanceid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|instanceId|path|string|true|none|
|appId|path|string|true|none|
|id|path|string|true|none|

<h3 id="getorganisationsidapplicationsappidinstancesinstanceid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## getOrganisationsIdApplicationsAppIdTags

<a id="opIdgetOrganisationsIdApplicationsAppIdTags"></a>

> Code samples

```bash
curl https://example.com/organisations/string/applications/string/tags
```

`GET /organisations/{id}/applications/{appId}/tags`

<h3 id="getorganisationsidapplicationsappidtags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|appId|path|string|true|none|

<h3 id="getorganisationsidapplicationsappidtags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getApplicationTags|Inline|

<h3 id="getorganisationsidapplicationsappidtags-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## putOrganisationsIdApplicationsAppIdTagsTag

<a id="opIdputOrganisationsIdApplicationsAppIdTagsTag"></a>

> Code samples

```bash
curl https://example.com/organisations/string/applications/string/tags/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "body": "string"
  }'
```

`PUT /organisations/{id}/applications/{appId}/tags/{tag}`

> Body parameter

```json
{
  "body": "string"
}
```

<h3 id="putorganisationsidapplicationsappidtagstag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|appId|path|string|true|none|
|tag|path|string|true|none|
|body|body|[Body](#schemabody)|true|none|
|» body|body|string|true|none|

<h3 id="putorganisationsidapplicationsappidtagstag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|addApplicationTag|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteOrganisationsIdApplicationsAppIdTagsTag

<a id="opIddeleteOrganisationsIdApplicationsAppIdTagsTag"></a>

> Code samples

```bash
curl https://example.com/organisations/string/applications/string/tags/string \
  -X DELETE
```

`DELETE /organisations/{id}/applications/{appId}/tags/{tag}`

<h3 id="deleteorganisationsidapplicationsappidtagstag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|appId|path|string|true|none|
|tag|path|string|true|none|

<h3 id="deleteorganisationsidapplicationsappidtagstag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|deleteApplicationTag|None|

<aside class="success">
This operation does not require authentication
</aside>

## getOrganisationsIdApplicationsAppIdVhosts

<a id="opIdgetOrganisationsIdApplicationsAppIdVhosts"></a>

> Code samples

```bash
curl https://example.com/organisations/string/applications/string/vhosts \
  -H 'Accept: application/json'
```

`GET /organisations/{id}/applications/{appId}/vhosts`

<h3 id="getorganisationsidapplicationsappidvhosts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|appId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "fqdn": "string"
  }
]
```

<h3 id="getorganisationsidapplicationsappidvhosts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getVhosts|Inline|

<h3 id="getorganisationsidapplicationsappidvhosts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Vhost](#schemavhost)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getOrganisationsIdApplicationsAppIdVhostsFavourite

<a id="opIdgetOrganisationsIdApplicationsAppIdVhostsFavourite"></a>

> Code samples

```bash
curl https://example.com/organisations/string/applications/string/vhosts/favourite \
  -H 'Accept: application/json'
```

`GET /organisations/{id}/applications/{appId}/vhosts/favourite`

<h3 id="getorganisationsidapplicationsappidvhostsfavourite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|appId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "fqdn": "string"
}
```

<h3 id="getorganisationsidapplicationsappidvhostsfavourite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getFavouriteVhost|[Vhost](#schemavhost)|

<aside class="success">
This operation does not require authentication
</aside>

## putOrganisationsIdApplicationsAppIdVhostsFavourite

<a id="opIdputOrganisationsIdApplicationsAppIdVhostsFavourite"></a>

> Code samples

```bash
curl https://example.com/organisations/string/applications/string/vhosts/favourite \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "fqdn": "string"
  }'
```

`PUT /organisations/{id}/applications/{appId}/vhosts/favourite`

> Body parameter

```json
{
  "fqdn": "string"
}
```

<h3 id="putorganisationsidapplicationsappidvhostsfavourite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|appId|path|string|true|none|
|body|body|[Vhost](#schemavhost)|true|none|
|» fqdn|body|string|true|none|

<h3 id="putorganisationsidapplicationsappidvhostsfavourite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|markFavouriteVhost|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteOrganisationsIdApplicationsAppIdVhostsFavourite

<a id="opIddeleteOrganisationsIdApplicationsAppIdVhostsFavourite"></a>

> Code samples

```bash
curl https://example.com/organisations/string/applications/string/vhosts/favourite \
  -X DELETE
```

`DELETE /organisations/{id}/applications/{appId}/vhosts/favourite`

<h3 id="deleteorganisationsidapplicationsappidvhostsfavourite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|appId|path|string|true|none|

<h3 id="deleteorganisationsidapplicationsappidvhostsfavourite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|unmarkFavouriteVhost|None|

<aside class="success">
This operation does not require authentication
</aside>

## putOrganisationsIdApplicationsAppIdVhostsDomain

<a id="opIdputOrganisationsIdApplicationsAppIdVhostsDomain"></a>

> Code samples

```bash
curl https://example.com/organisations/string/applications/string/vhosts/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "fqdn": "string"
  }'
```

`PUT /organisations/{id}/applications/{appId}/vhosts/{domain}`

> Body parameter

```json
{
  "fqdn": "string"
}
```

<h3 id="putorganisationsidapplicationsappidvhostsdomain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|appId|path|string|true|none|
|domain|path|string|true|none|
|body|body|[Vhost](#schemavhost)|true|none|
|» fqdn|body|string|true|none|

<h3 id="putorganisationsidapplicationsappidvhostsdomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|addVhost|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteOrganisationsIdApplicationsAppIdVhostsDomain

<a id="opIddeleteOrganisationsIdApplicationsAppIdVhostsDomain"></a>

> Code samples

```bash
curl https://example.com/organisations/string/applications/string/vhosts/string \
  -X DELETE
```

`DELETE /organisations/{id}/applications/{appId}/vhosts/{domain}`

<h3 id="deleteorganisationsidapplicationsappidvhostsdomain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|appId|path|string|true|none|
|domain|path|string|true|none|

<h3 id="deleteorganisationsidapplicationsappidvhostsdomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|removeVhost|None|

<aside class="success">
This operation does not require authentication
</aside>

## putOrganisationsIdAvatar

<a id="opIdputOrganisationsIdAvatar"></a>

> Code samples

```bash
curl https://example.com/organisations/string/avatar \
  -X PUT
```

`PUT /organisations/{id}/avatar`

If you want to upload an image from your computer, send the image in the body of the request without anything else.

<h3 id="putorganisationsidavatar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="putorganisationsidavatar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|setOrgaAvatar<br>setOrgaAvatarFromSource|None|

<aside class="success">
This operation does not require authentication
</aside>

## getOrganisationsIdConsumers

<a id="opIdgetOrganisationsIdConsumers"></a>

> Code samples

```bash
curl https://example.com/organisations/string/consumers \
  -H 'Accept: application/json'
```

`GET /organisations/{id}/consumers`

<h3 id="getorganisationsidconsumers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "baseUrl": "string",
    "description": "string",
    "key": "string",
    "name": "string",
    "picture": "string",
    "rights": {
      "access_bills": false,
      "access_consumption_statistics": false,
      "access_credit_count": false,
      "access_organisations": false,
      "access_organisations_bills": false,
      "access_organisations_consumption_statistics": false,
      "access_organisations_credit_count": false,
      "access_personal_information": false,
      "almighty": false,
      "manage_applications": false,
      "manage_organisations": false,
      "manage_organisations_applications": false,
      "manage_organisations_members": false,
      "manage_organisations_services": false,
      "manage_personal_information": false,
      "manage_services": false,
      "manage_ssh_keys": false
    },
    "url": "string"
  }
]
```

<h3 id="getorganisationsidconsumers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getConsumers|Inline|

<h3 id="getorganisationsidconsumers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Consumer](#schemaconsumer)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## postOrganisationsIdConsumers

<a id="opIdpostOrganisationsIdConsumers"></a>

> Code samples

```bash
curl https://example.com/organisations/string/consumers \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "baseUrl": {
      "url": "string"
    },
    "description": "string",
    "name": "string",
    "picture": "string",
    "rights": {
      "activated": false,
      "right": "string"
    },
    "url": {
      "url": "string"
    }
  }'
```

`POST /organisations/{id}/consumers`

> Body parameter

```json
{
  "baseUrl": {
    "url": "string"
  },
  "description": "string",
  "name": "string",
  "picture": "string",
  "rights": {
    "activated": false,
    "right": "string"
  },
  "url": {
    "url": "string"
  }
}
```

<h3 id="postorganisationsidconsumers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[WannabeConsumer](#schemawannabeconsumer)|true|none|
|» baseUrl|body|[URL](#schemaurl)|true|Must be a valid HTTP URL|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» picture|body|string|false|none|
|» rights|body|object|true|none|
|» » activated|body|boolean|true|none|
|» » right|body|string|true|none|
|» url|body|[URL](#schemaurl)|true|Must be a valid HTTP URL|

<h3 id="postorganisationsidconsumers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|createConsumer|None|

<aside class="success">
This operation does not require authentication
</aside>

## getOrganisationsIdConsumersKey

<a id="opIdgetOrganisationsIdConsumersKey"></a>

> Code samples

```bash
curl https://example.com/organisations/string/consumers/string \
  -H 'Accept: application/json'
```

`GET /organisations/{id}/consumers/{key}`

<h3 id="getorganisationsidconsumerskey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|key|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "baseUrl": "string",
  "description": "string",
  "key": "string",
  "name": "string",
  "picture": "string",
  "rights": {
    "access_bills": false,
    "access_consumption_statistics": false,
    "access_credit_count": false,
    "access_organisations": false,
    "access_organisations_bills": false,
    "access_organisations_consumption_statistics": false,
    "access_organisations_credit_count": false,
    "access_personal_information": false,
    "almighty": false,
    "manage_applications": false,
    "manage_organisations": false,
    "manage_organisations_applications": false,
    "manage_organisations_members": false,
    "manage_organisations_services": false,
    "manage_personal_information": false,
    "manage_services": false,
    "manage_ssh_keys": false
  },
  "url": "string"
}
```

<h3 id="getorganisationsidconsumerskey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getConsumer|[Consumer](#schemaconsumer)|

<aside class="success">
This operation does not require authentication
</aside>

## putOrganisationsIdConsumersKey

<a id="opIdputOrganisationsIdConsumersKey"></a>

> Code samples

```bash
curl https://example.com/organisations/string/consumers/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "baseUrl": {
      "url": "string"
    },
    "description": "string",
    "name": "string",
    "picture": "string",
    "rights": {
      "activated": false,
      "right": "string"
    },
    "url": {
      "url": "string"
    }
  }'
```

`PUT /organisations/{id}/consumers/{key}`

> Body parameter

```json
{
  "baseUrl": {
    "url": "string"
  },
  "description": "string",
  "name": "string",
  "picture": "string",
  "rights": {
    "activated": false,
    "right": "string"
  },
  "url": {
    "url": "string"
  }
}
```

<h3 id="putorganisationsidconsumerskey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|key|path|string|true|none|
|body|body|[WannabeConsumer](#schemawannabeconsumer)|true|none|
|» baseUrl|body|[URL](#schemaurl)|true|Must be a valid HTTP URL|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» picture|body|string|false|none|
|» rights|body|object|true|none|
|» » activated|body|boolean|true|none|
|» » right|body|string|true|none|
|» url|body|[URL](#schemaurl)|true|Must be a valid HTTP URL|

<h3 id="putorganisationsidconsumerskey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|PUT the same data as in POST.|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteOrganisationsIdConsumersKey

<a id="opIddeleteOrganisationsIdConsumersKey"></a>

> Code samples

```bash
curl https://example.com/organisations/string/consumers/string \
  -X DELETE
```

`DELETE /organisations/{id}/consumers/{key}`

<h3 id="deleteorganisationsidconsumerskey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|key|path|string|true|none|

<h3 id="deleteorganisationsidconsumerskey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|deleteConsumer|None|

<aside class="success">
This operation does not require authentication
</aside>

## getOrganisationsIdConsumersKeySecret

<a id="opIdgetOrganisationsIdConsumersKeySecret"></a>

> Code samples

```bash
curl https://example.com/organisations/string/consumers/string/secret \
  -H 'Accept: application/json'
```

`GET /organisations/{id}/consumers/{key}/secret`

<h3 id="getorganisationsidconsumerskeysecret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|key|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "secret": "string",
  "value": "string"
}
```

<h3 id="getorganisationsidconsumerskeysecret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getConsumerSecret|[Secret](#schemasecret)|

<aside class="success">
This operation does not require authentication
</aside>

## getOrganisationsIdConsumptions

<a id="opIdgetOrganisationsIdConsumptions"></a>

> Code samples

```bash
curl https://example.com/organisations/string/consumptions \
  -H 'Accept: application/json'
```

`GET /organisations/{id}/consumptions`

<h3 id="getorganisationsidconsumptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|query|string|false|none|
|from|query|string|false|none|
|to|query|string|false|none|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "appId": "string",
  "conso": {
    "conso": "string",
    "date": "string"
  }
}
```

<h3 id="getorganisationsidconsumptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getAmount|[Conso](#schemaconso)|

<aside class="success">
This operation does not require authentication
</aside>

## getOrganisationsIdCredits

<a id="opIdgetOrganisationsIdCredits"></a>

> Code samples

```bash
curl https://example.com/organisations/string/credits \
  -H 'Accept: application/json'
```

`GET /organisations/{id}/credits`

<h3 id="getorganisationsidcredits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "dropPrice": {
    "currency": "string",
    "value": 0
  },
  "ownerId": "string"
}
```

<h3 id="getorganisationsidcredits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getAmount|[Credits](#schemacredits)|

<aside class="success">
This operation does not require authentication
</aside>

## getOrganisationsIdDeployments

<a id="opIdgetOrganisationsIdDeployments"></a>

> Code samples

```bash
curl https://example.com/organisations/string/deployments \
  -H 'Accept: application/json'
```

`GET /organisations/{id}/deployments`

<h3 id="getorganisationsiddeployments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "{app_id}": [
    {
      "action": "string",
      "author": {
        "id": "string",
        "name": "string"
      },
      "cause": "string",
      "commit": "string",
      "date": "1970-01-01",
      "id": 0,
      "instances": 0,
      "state": "string",
      "uuid": "string"
    }
  ]
}
```

<h3 id="getorganisationsiddeployments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getDeploymentsForAllApps|[DeploymentSummary](#schemadeploymentsummary)|

<aside class="success">
This operation does not require authentication
</aside>

## getOrganisationsIdInstances

<a id="opIdgetOrganisationsIdInstances"></a>

> Code samples

```bash
curl https://example.com/organisations/string/instances \
  -H 'Accept: application/json'
```

`GET /organisations/{id}/instances`

<h3 id="getorganisationsidinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="getorganisationsidinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getInstancesForAllApps|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## getOrganisationsIdMembers

<a id="opIdgetOrganisationsIdMembers"></a>

> Code samples

```bash
curl https://example.com/organisations/string/members \
  -H 'Accept: application/json'
```

`GET /organisations/{id}/members`

<h3 id="getorganisationsidmembers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "job": "string",
    "member": {
      "avatar": "string",
      "email": "string",
      "id": "string",
      "name": "string"
    },
    "role": "string"
  }
]
```

<h3 id="getorganisationsidmembers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getOrganisationMembers|Inline|

<h3 id="getorganisationsidmembers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[schema1](#schemaschema1)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## postOrganisationsIdMembers

<a id="opIdpostOrganisationsIdMembers"></a>

> Code samples

```bash
curl https://example.com/organisations/string/members \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "string",
    "job": "string",
    "role": "string"
  }'
```

`POST /organisations/{id}/members`

> Body parameter

```json
{
  "email": "string",
  "job": "string",
  "role": "string"
}
```

<h3 id="postorganisationsidmembers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|invitationKey|query|string|false|none|
|id|path|string|true|none|
|body|body|[schema2](#schemaschema2)|true|none|
|» email|body|string|true|none|
|» job|body|string|false|none|
|» role|body|string|true|none|

<h3 id="postorganisationsidmembers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|addOrganisationMember|None|

<aside class="success">
This operation does not require authentication
</aside>

## putOrganisationsIdMembersUserId

<a id="opIdputOrganisationsIdMembersUserId"></a>

> Code samples

```bash
curl https://example.com/organisations/string/members/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "string",
    "job": "string",
    "role": "string"
  }'
```

`PUT /organisations/{id}/members/{userId}`

> Body parameter

```json
{
  "email": "string",
  "job": "string",
  "role": "string"
}
```

<h3 id="putorganisationsidmembersuserid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|userId|path|string|true|none|
|body|body|[schema2](#schemaschema2)|true|none|
|» email|body|string|true|none|
|» job|body|string|false|none|
|» role|body|string|true|none|

<h3 id="putorganisationsidmembersuserid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|editOrganisationMember|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteOrganisationsIdMembersUserId

<a id="opIddeleteOrganisationsIdMembersUserId"></a>

> Code samples

```bash
curl https://example.com/organisations/string/members/string \
  -X DELETE
```

`DELETE /organisations/{id}/members/{userId}`

<h3 id="deleteorganisationsidmembersuserid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|userId|path|string|true|none|

<h3 id="deleteorganisationsidmembersuserid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|removeOrganisationMember|None|

<aside class="success">
This operation does not require authentication
</aside>

## getOrganisationsIdPaymentInfo

<a id="opIdgetOrganisationsIdPaymentInfo"></a>

> Code samples

```bash
curl https://example.com/organisations/string/payment-info
```

`GET /organisations/{id}/payment-info`

<h3 id="getorganisationsidpaymentinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="getorganisationsidpaymentinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getPaymentInfo|None|

<aside class="success">
This operation does not require authentication
</aside>

## getOrganisationsIdPaymentsBillings

<a id="opIdgetOrganisationsIdPaymentsBillings"></a>

> Code samples

```bash
curl https://example.com/organisations/string/payments/billings
```

`GET /organisations/{id}/payments/billings`

<h3 id="getorganisationsidpaymentsbillings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="getorganisationsidpaymentsbillings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getInvoices|None|

<aside class="success">
This operation does not require authentication
</aside>

## postOrganisationsIdPaymentsBillings

<a id="opIdpostOrganisationsIdPaymentsBillings"></a>

> Code samples

```bash
curl https://example.com/organisations/string/payments/billings \
  -X POST
```

`POST /organisations/{id}/payments/billings`

<h3 id="postorganisationsidpaymentsbillings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="postorganisationsidpaymentsbillings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|buyDrops|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/organisations/{id}/payments/billings/unpaid

> Code samples

```bash
curl https://example.com/organisations/string/payments/billings/unpaid
```

`GET /organisations/{id}/payments/billings/unpaid`

<h3 id="getorganisationsidpaymentsbillingsunpaid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="getorganisationsidpaymentsbillingsunpaid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## getOrganisationsIdPaymentsBillingsBid

<a id="opIdgetOrganisationsIdPaymentsBillingsBid"></a>

> Code samples

```bash
curl https://example.com/organisations/string/payments/billings/string
```

`GET /organisations/{id}/payments/billings/{bid}`

<h3 id="getorganisationsidpaymentsbillingsbid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|bid|path|string|true|none|

<h3 id="getorganisationsidpaymentsbillingsbid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getInvoice|None|

<aside class="success">
This operation does not require authentication
</aside>

## putOrganisationsIdPaymentsBillingsBid

<a id="opIdputOrganisationsIdPaymentsBillingsBid"></a>

> Code samples

```bash
curl https://example.com/organisations/string/payments/billings/string \
  -X PUT
```

`PUT /organisations/{id}/payments/billings/{bid}`

<h3 id="putorganisationsidpaymentsbillingsbid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|bid|path|string|true|none|

<h3 id="putorganisationsidpaymentsbillingsbid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|choosePaymentProvider|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteOrganisationsIdPaymentsBillingsBid

<a id="opIddeleteOrganisationsIdPaymentsBillingsBid"></a>

> Code samples

```bash
curl https://example.com/organisations/string/payments/billings/string \
  -X DELETE
```

`DELETE /organisations/{id}/payments/billings/{bid}`

<h3 id="deleteorganisationsidpaymentsbillingsbid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|bid|path|string|true|none|

<h3 id="deleteorganisationsidpaymentsbillingsbid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|deletePurchaseOrder|None|

<aside class="success">
This operation does not require authentication
</aside>

## getOrganisationsIdPaymentsBillingsBidPdf

<a id="opIdgetOrganisationsIdPaymentsBillingsBidPdf"></a>

> Code samples

```bash
curl https://example.com/organisations/string/payments/billings/string.pdf
```

`GET /organisations/{id}/payments/billings/{bid}.pdf`

<h3 id="getorganisationsidpaymentsbillingsbidpdf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|false|none|
|id|path|string|true|none|
|bid|path|string|true|none|

<h3 id="getorganisationsidpaymentsbillingsbidpdf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getPdfInvoice|None|

<aside class="success">
This operation does not require authentication
</aside>

## getOrganisationsIdPaymentsFullPricePrice

<a id="opIdgetOrganisationsIdPaymentsFullPricePrice"></a>

> Code samples

```bash
curl https://example.com/organisations/string/payments/fullprice/string
```

`GET /organisations/{id}/payments/fullprice/{price}`

<h3 id="getorganisationsidpaymentsfullpriceprice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|price|path|string|true|none|

<h3 id="getorganisationsidpaymentsfullpriceprice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|priceWithTax|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/organisations/{id}/payments/methods

> Code samples

```bash
curl https://example.com/organisations/string/payments/methods
```

`GET /organisations/{id}/payments/methods`

<h3 id="getorganisationsidpaymentsmethods-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="getorganisationsidpaymentsmethods-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## post/organisations/{id}/payments/methods

> Code samples

```bash
curl https://example.com/organisations/string/payments/methods \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "body": "string"
  }'
```

`POST /organisations/{id}/payments/methods`

> Body parameter

```json
{
  "body": "string"
}
```

<h3 id="postorganisationsidpaymentsmethods-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[Body](#schemabody)|true|none|
|» body|body|string|true|none|

<h3 id="postorganisationsidpaymentsmethods-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/organisations/{id}/payments/methods/default

> Code samples

```bash
curl https://example.com/organisations/string/payments/methods/default
```

`GET /organisations/{id}/payments/methods/default`

<h3 id="getorganisationsidpaymentsmethodsdefault-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="getorganisationsidpaymentsmethodsdefault-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## put/organisations/{id}/payments/methods/default

> Code samples

```bash
curl https://example.com/organisations/string/payments/methods/default \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "deviceData": "string",
    "token": "string",
    "type": "NEW_CARD"
  }'
```

`PUT /organisations/{id}/payments/methods/default`

> Body parameter

```json
{
  "deviceData": "string",
  "token": "string",
  "type": "NEW_CARD"
}
```

<h3 id="putorganisationsidpaymentsmethodsdefault-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[PaymentData](#schemapaymentdata)|true|none|
|» deviceData|body|string|false|none|
|» token|body|string|true|none|
|» type|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|NEW_CARD|
|» type|EXISTING_CARD|

<h3 id="putorganisationsidpaymentsmethodsdefault-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## delete/organisations/{id}/payments/methods/{mId}

> Code samples

```bash
curl https://example.com/organisations/string/payments/methods/string \
  -X DELETE
```

`DELETE /organisations/{id}/payments/methods/{mId}`

<h3 id="deleteorganisationsidpaymentsmethodsmid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mId|path|string|true|none|
|id|path|string|true|none|

<h3 id="deleteorganisationsidpaymentsmethodsmid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/organisations/{id}/payments/monthlyinvoice

> Code samples

```bash
curl https://example.com/organisations/string/payments/monthlyinvoice
```

`GET /organisations/{id}/payments/monthlyinvoice`

<h3 id="getorganisationsidpaymentsmonthlyinvoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="getorganisationsidpaymentsmonthlyinvoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## put/organisations/{id}/payments/monthlyinvoice/maxcredit

> Code samples

```bash
curl https://example.com/organisations/string/payments/monthlyinvoice/maxcredit \
  -X PUT
```

`PUT /organisations/{id}/payments/monthlyinvoice/maxcredit`

<h3 id="putorganisationsidpaymentsmonthlyinvoicemaxcredit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="putorganisationsidpaymentsmonthlyinvoicemaxcredit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/organisations/{id}/payments/recurring

> Code samples

```bash
curl https://example.com/organisations/string/payments/recurring
```

`GET /organisations/{id}/payments/recurring`

<h3 id="getorganisationsidpaymentsrecurring-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="getorganisationsidpaymentsrecurring-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteOrganisationsIdPaymentsRecurring

<a id="opIddeleteOrganisationsIdPaymentsRecurring"></a>

> Code samples

```bash
curl https://example.com/organisations/string/payments/recurring \
  -X DELETE
```

`DELETE /organisations/{id}/payments/recurring`

<h3 id="deleteorganisationsidpaymentsrecurring-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="deleteorganisationsidpaymentsrecurring-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|deleteRecurrentPayment|None|

<aside class="success">
This operation does not require authentication
</aside>

## getPasswordForgotten

<a id="opIdgetPasswordForgotten"></a>

> Code samples

```bash
curl https://example.com/password_forgotten
```

`GET /password_forgotten`

<h3 id="getpasswordforgotten-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getPasswordForgottenForm|None|

<aside class="success">
This operation does not require authentication
</aside>

## postPasswordForgotten

<a id="opIdpostPasswordForgotten"></a>

> Code samples

```bash
curl https://example.com/password_forgotten \
  -X POST
```

`POST /password_forgotten`

<h3 id="postpasswordforgotten-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|login|query|string|false|none|
|drop_tokens|query|string|false|none|
|TesterPass|header|string|false|none|

<h3 id="postpasswordforgotten-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|askForPasswordResetViaForm|None|

<aside class="success">
This operation does not require authentication
</aside>

## getPasswordForgottenKey

<a id="opIdgetPasswordForgottenKey"></a>

> Code samples

```bash
curl https://example.com/password_forgotten/string
```

`GET /password_forgotten/{key}`

<h3 id="getpasswordforgottenkey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|none|

<h3 id="getpasswordforgottenkey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|confirmPasswordResetRequest|None|

<aside class="success">
This operation does not require authentication
</aside>

## postPasswordForgottenKey

<a id="opIdpostPasswordForgottenKey"></a>

> Code samples

```bash
curl https://example.com/password_forgotten/string \
  -X POST
```

`POST /password_forgotten/{key}`

<h3 id="postpasswordforgottenkey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pass|query|string|false|none|
|pass2|query|string|false|none|
|key|path|string|true|none|

<h3 id="postpasswordforgottenkey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|resetPasswordForgotten|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/payments/assets/pay_button/{token}/button.png

> Code samples

```bash
curl https://example.com/payments/assets/pay_button/string/button.png
```

`GET /payments/assets/pay_button/{token}/button.png`

<h3 id="getpaymentsassetspaybuttontokenbuttonpng-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|path|string|true|none|

<h3 id="getpaymentsassetspaybuttontokenbuttonpng-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## getPaymentsCouponsName

<a id="opIdgetPaymentsCouponsName"></a>

> Code samples

```bash
curl https://example.com/payments/coupons/string
```

`GET /payments/coupons/{name}`

<h3 id="getpaymentscouponsname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|

<h3 id="getpaymentscouponsname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getCoupon|None|

<aside class="success">
This operation does not require authentication
</aside>

## getPaymentsProviders

<a id="opIdgetPaymentsProviders"></a>

> Code samples

```bash
curl https://example.com/payments/providers \
  -H 'Accept: application/json'
```

`GET /payments/providers`

> Example responses

> 200 Response

```json
[
  {
    "comingSoon": false,
    "imgUrl": "string",
    "name": "string",
    "title": "string"
  }
]
```

<h3 id="getpaymentsproviders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getAvailablePaymentProviders|Inline|

<h3 id="getpaymentsproviders-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Payment_Provider](#schemapayment_provider)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getPaymentsTokensStripe

<a id="opIdgetPaymentsTokensStripe"></a>

> Code samples

```bash
curl https://example.com/payments/tokens/stripe
```

`GET /payments/tokens/stripe`

<h3 id="getpaymentstokensstripe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getStripeToken|None|

<aside class="success">
This operation does not require authentication
</aside>

## post/payments/{bid}/end/stripe

> Code samples

```bash
curl https://example.com/payments/string/end/stripe \
  -X POST
```

`POST /payments/{bid}/end/stripe`

<h3 id="postpaymentsbidendstripe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bid|path|string|true|none|

<h3 id="postpaymentsbidendstripe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|endPaymentWithStripe|None|

<aside class="success">
This operation does not require authentication
</aside>

## getProductsAddonProviders

<a id="opIdgetProductsAddonProviders"></a>

> Code samples

```bash
curl https://example.com/products/addonproviders \
  -H 'Accept: application/json'
```

`GET /products/addonproviders`

> Example responses

> 200 Response

```json
[
  {
    "analyticsId": "string",
    "canUpgrade": false,
    "features": [
      {
        "name": "string",
        "type": "string",
        "value": "string"
      }
    ],
    "googlePlusName": "string",
    "id": "string",
    "logoUrl": "string",
    "longDesc": "string",
    "name": "string",
    "openInNewTab": false,
    "plans": [
      {
        "features": [
          {
            "name": "string",
            "type": "string",
            "value": "string"
          }
        ],
        "id": "string",
        "name": "string",
        "price": 0,
        "slug": "string"
      }
    ],
    "regions": [
      "string"
    ],
    "shortDesc": "string",
    "status": "string",
    "supportEmail": "string",
    "twitterName": "string",
    "website": "string"
  }
]
```

<h3 id="getproductsaddonproviders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getAddonProviders|Inline|

<h3 id="getproductsaddonproviders-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Provider](#schemaprovider)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getProductsAddonProvidersProviderId

<a id="opIdgetProductsAddonProvidersProviderId"></a>

> Code samples

```bash
curl https://example.com/products/addonproviders/string \
  -H 'Accept: application/json'
```

`GET /products/addonproviders/{provider_id}`

<h3 id="getproductsaddonprovidersproviderid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|provider_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "analyticsId": "string",
  "canUpgrade": false,
  "features": [
    {
      "name": "string",
      "type": "string",
      "value": "string"
    }
  ],
  "googlePlusName": "string",
  "id": "string",
  "logoUrl": "string",
  "longDesc": "string",
  "name": "string",
  "openInNewTab": false,
  "plans": [
    {
      "features": [
        {
          "name": "string",
          "type": "string",
          "value": "string"
        }
      ],
      "id": "string",
      "name": "string",
      "price": 0,
      "slug": "string"
    }
  ],
  "regions": [
    "string"
  ],
  "shortDesc": "string",
  "status": "string",
  "supportEmail": "string",
  "twitterName": "string",
  "website": "string"
}
```

<h3 id="getproductsaddonprovidersproviderid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getAddonProvider|[Provider](#schemaprovider)|

<aside class="success">
This operation does not require authentication
</aside>

## get/products/addonproviders/{provider_id}/versions

> Code samples

```bash
curl https://example.com/products/addonproviders/string/versions
```

`GET /products/addonproviders/{provider_id}/versions`

<h3 id="getproductsaddonprovidersprovideridversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|provider_id|path|string|true|none|

<h3 id="getproductsaddonprovidersprovideridversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## getProductsCountries

<a id="opIdgetProductsCountries"></a>

> Code samples

```bash
curl https://example.com/products/countries \
  -H 'Accept: application/json'
```

`GET /products/countries`

> Example responses

> 200 Response

```json
{
  "code": "string",
  "name": "string"
}
```

<h3 id="getproductscountries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getCountries|[Country](#schemacountry)|

<aside class="success">
This operation does not require authentication
</aside>

## getProductsCountrycodes

<a id="opIdgetProductsCountrycodes"></a>

> Code samples

```bash
curl https://example.com/products/countrycodes \
  -H 'Accept: application/json'
```

`GET /products/countrycodes`

> Example responses

> 200 Response

```json
{
  "code": "string",
  "name": "string"
}
```

<h3 id="getproductscountrycodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getCountryCodes|[Country](#schemacountry)|

<aside class="success">
This operation does not require authentication
</aside>

## getProductsInstances

<a id="opIdgetProductsInstances"></a>

> Code samples

```bash
curl https://example.com/products/instances \
  -H 'Accept: application/json'
```

`GET /products/instances`

<h3 id="getproductsinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|for|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "buildFlavor": {
      "available": false,
      "cpus": 0,
      "disk": 0,
      "mem": 0,
      "microservice": false,
      "name": "string",
      "nice": 0,
      "price": 0
    },
    "comingSoon": false,
    "defaultEnv": {},
    "defaultFlavor": {
      "available": false,
      "cpus": 0,
      "disk": 0,
      "mem": 0,
      "microservice": false,
      "name": "string",
      "nice": 0,
      "price": 0
    },
    "deployments": [
      "string"
    ],
    "description": "string",
    "enabled": false,
    "flavors": [
      {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      }
    ],
    "instanceAndVersion": "string",
    "maxAllowedInstances": 0,
    "maxFlavor": {
      "available": false,
      "cpus": 0,
      "disk": 0,
      "mem": 0,
      "microservice": false,
      "name": "string",
      "nice": 0,
      "price": 0
    },
    "maxInstances": 0,
    "minFlavor": {
      "available": false,
      "cpus": 0,
      "disk": 0,
      "mem": 0,
      "microservice": false,
      "name": "string",
      "nice": 0,
      "price": 0
    },
    "minInstances": 0,
    "name": "string",
    "tags": [
      "string"
    ],
    "type": "string",
    "variant": {
      "deployType": "string",
      "id": "string",
      "logo": "string",
      "name": "string",
      "slug": "string"
    },
    "version": "string"
  }
]
```

<h3 id="getproductsinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getAvailableInstances|Inline|

<h3 id="getproductsinstances-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Instance](#schemainstance)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getProductsInstancesTypeVersion

<a id="opIdgetProductsInstancesTypeVersion"></a>

> Code samples

```bash
curl https://example.com/products/instances/string-string \
  -H 'Accept: application/json'
```

`GET /products/instances/{type}-{version}`

<h3 id="getproductsinstancestypeversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|for|query|string|false|none|
|app|query|string|false|none|
|type|path|string|true|none|
|version|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "buildFlavor": {
    "available": false,
    "cpus": 0,
    "disk": 0,
    "mem": 0,
    "microservice": false,
    "name": "string",
    "nice": 0,
    "price": 0
  },
  "comingSoon": false,
  "defaultEnv": {},
  "defaultFlavor": {
    "available": false,
    "cpus": 0,
    "disk": 0,
    "mem": 0,
    "microservice": false,
    "name": "string",
    "nice": 0,
    "price": 0
  },
  "deployments": [
    "string"
  ],
  "description": "string",
  "enabled": false,
  "flavors": [
    {
      "available": false,
      "cpus": 0,
      "disk": 0,
      "mem": 0,
      "microservice": false,
      "name": "string",
      "nice": 0,
      "price": 0
    }
  ],
  "instanceAndVersion": "string",
  "maxAllowedInstances": 0,
  "maxFlavor": {
    "available": false,
    "cpus": 0,
    "disk": 0,
    "mem": 0,
    "microservice": false,
    "name": "string",
    "nice": 0,
    "price": 0
  },
  "maxInstances": 0,
  "minFlavor": {
    "available": false,
    "cpus": 0,
    "disk": 0,
    "mem": 0,
    "microservice": false,
    "name": "string",
    "nice": 0,
    "price": 0
  },
  "minInstances": 0,
  "name": "string",
  "tags": [
    "string"
  ],
  "type": "string",
  "variant": {
    "deployType": "string",
    "id": "string",
    "logo": "string",
    "name": "string",
    "slug": "string"
  },
  "version": "string"
}
```

<h3 id="getproductsinstancestypeversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getAvailableInstance|[Instance](#schemainstance)|

<aside class="success">
This operation does not require authentication
</aside>

## get/products/mfa_kinds

> Code samples

```bash
curl https://example.com/products/mfa_kinds
```

`GET /products/mfa_kinds`

<h3 id="getproductsmfakinds-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## getProductsPackages

<a id="opIdgetProductsPackages"></a>

> Code samples

```bash
curl https://example.com/products/packages
```

`GET /products/packages`

<h3 id="getproductspackages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|coupon|query|string|false|none|
|orgaId|query|string|false|none|
|currency|query|string|false|none|

<h3 id="getproductspackages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getAvailablePackages|None|

<aside class="success">
This operation does not require authentication
</aside>

## getProductsPrices

<a id="opIdgetProductsPrices"></a>

> Code samples

```bash
curl https://example.com/products/prices
```

`GET /products/prices`

<h3 id="getproductsprices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getExchangeRates|None|

<aside class="success">
This operation does not require authentication
</aside>

## getProductsZones

<a id="opIdgetProductsZones"></a>

> Code samples

```bash
curl https://example.com/products/zones \
  -H 'Accept: application/json'
```

`GET /products/zones`

> Example responses

> 200 Response

```json
[
  {
    "correspondingRegion": "string",
    "internal": false,
    "name": "string"
  }
]
```

<h3 id="getproductszones-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getZones|Inline|

<h3 id="getproductszones-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Zone](#schemazone)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getSelf

<a id="opIdgetSelf"></a>

> Code samples

```bash
curl https://example.com/self \
  -H 'Accept: application/json'
```

`GET /self`

Get information about yourself

> Example responses

> 200 Response

```json
{
  "address": "string",
  "admin": false,
  "avatar": "string",
  "canPay": false,
  "city": "string",
  "country": "string",
  "creationDate": 0,
  "email": "string",
  "emailValidated": false,
  "hasPassword": false,
  "id": "string",
  "lang": "string",
  "name": "string",
  "oauthApps": [
    "string"
  ],
  "phone": "string",
  "preferredMFA": "string",
  "zipcode": "string"
}
```

<h3 id="getself-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getUser|[User](#schemauser)|

<aside class="success">
This operation does not require authentication
</aside>

## putSelf

<a id="opIdputSelf"></a>

> Code samples

```bash
curl https://example.com/self \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "address": "string",
    "city": "string",
    "country": "string",
    "email": "string",
    "lang": "string",
    "name": "string",
    "password": "string",
    "phone": "string",
    "terms": false,
    "zipcode": "string"
  }'
```

`PUT /self`

> Body parameter

```json
{
  "address": "string",
  "city": "string",
  "country": "string",
  "email": "string",
  "lang": "string",
  "name": "string",
  "password": "string",
  "phone": "string",
  "terms": false,
  "zipcode": "string"
}
```

<h3 id="putself-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WannabeUser](#schemawannabeuser)|true|none|
|» address|body|string|false|none|
|» city|body|string|false|none|
|» country|body|string|false|none|
|» email|body|string|true|none|
|» lang|body|string|false|none|
|» name|body|string|false|none|
|» password|body|string|true|none|
|» phone|body|string|false|none|
|» terms|body|boolean|true|none|
|» zipcode|body|string|false|none|

<h3 id="putself-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|editUser|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteSelf

<a id="opIddeleteSelf"></a>

> Code samples

```bash
curl https://example.com/self \
  -X DELETE
```

`DELETE /self`

<h3 id="deleteself-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|deleteUser|None|

<aside class="success">
This operation does not require authentication
</aside>

## Addon

<a id="opIdgetSelfAddons"></a>

> Code samples

```bash
curl https://example.com/self/addons \
  -H 'Accept: application/json'
```

`GET /self/addons`

Get all the addons

> Example responses

> 200 Response

```json
[
  {
    "configKeys": [
      "string"
    ],
    "creationDate": "1970-01-01",
    "id": "string",
    "name": "string",
    "plan": {
      "features": [
        {
          "name": "string",
          "type": "string",
          "value": "string"
        }
      ],
      "id": "string",
      "name": "string",
      "price": 0,
      "slug": "string"
    },
    "provider": {
      "analyticsId": "string",
      "canUpgrade": false,
      "features": [
        {
          "name": "string",
          "type": "string",
          "value": "string"
        }
      ],
      "googlePlusName": "string",
      "id": "string",
      "logoUrl": "string",
      "longDesc": "string",
      "name": "string",
      "openInNewTab": false,
      "plans": [
        {
          "features": [
            {
              "name": "string",
              "type": "string",
              "value": "string"
            }
          ],
          "id": "string",
          "name": "string",
          "price": 0,
          "slug": "string"
        }
      ],
      "regions": [
        "string"
      ],
      "shortDesc": "string",
      "status": "string",
      "supportEmail": "string",
      "twitterName": "string",
      "website": "string"
    },
    "realId": "string",
    "region": "string"
  }
]
```

<h3 id="addon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getAddons|Inline|

<h3 id="addon-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Addon](#schemaaddon)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## postSelfAddons

<a id="opIdpostSelfAddons"></a>

> Code samples

```bash
curl https://example.com/self/addons \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "string",
    "payment": {
      "deviceData": "string",
      "token": "string",
      "type": "NEW_CARD"
    },
    "plan": "string",
    "providerId": "string",
    "region": "string"
  }'
```

`POST /self/addons`

> Body parameter

```json
{
  "name": "string",
  "payment": {
    "deviceData": "string",
    "token": "string",
    "type": "NEW_CARD"
  },
  "plan": "string",
  "providerId": "string",
  "region": "string"
}
```

<h3 id="postselfaddons-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WannabeAddon](#schemawannabeaddon)|true|none|
|» name|body|string|true|none|
|» payment|body|[PaymentData](#schemapaymentdata)|true|none|
|» plan|body|string|true|none|
|» providerId|body|string|true|none|
|» region|body|string|true|none|

<h3 id="postselfaddons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|provisionAddon|None|

<aside class="success">
This operation does not require authentication
</aside>

## post/self/addons/preorders

> Code samples

```bash
curl https://example.com/self/addons/preorders \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "string",
    "payment": {
      "deviceData": "string",
      "token": "string",
      "type": "NEW_CARD"
    },
    "plan": "string",
    "providerId": "string",
    "region": "string"
  }'
```

`POST /self/addons/preorders`

> Body parameter

```json
{
  "name": "string",
  "payment": {
    "deviceData": "string",
    "token": "string",
    "type": "NEW_CARD"
  },
  "plan": "string",
  "providerId": "string",
  "region": "string"
}
```

<h3 id="postselfaddonspreorders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WannabeAddon](#schemawannabeaddon)|true|none|
|» name|body|string|true|none|
|» payment|body|[PaymentData](#schemapaymentdata)|true|none|
|» plan|body|string|true|none|
|» providerId|body|string|true|none|
|» region|body|string|true|none|

<h3 id="postselfaddonspreorders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## Specific addon

<a id="opIdgetSelfAddonsAddonId"></a>

> Code samples

```bash
curl https://example.com/self/addons/string \
  -H 'Accept: application/json'
```

`GET /self/addons/{addonId}`

Get a specific addon

<h3 id="specific-addon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|addonId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "configKeys": [
    "string"
  ],
  "creationDate": "1970-01-01",
  "id": "string",
  "name": "string",
  "plan": {
    "features": [
      {
        "name": "string",
        "type": "string",
        "value": "string"
      }
    ],
    "id": "string",
    "name": "string",
    "price": 0,
    "slug": "string"
  },
  "provider": {
    "analyticsId": "string",
    "canUpgrade": false,
    "features": [
      {
        "name": "string",
        "type": "string",
        "value": "string"
      }
    ],
    "googlePlusName": "string",
    "id": "string",
    "logoUrl": "string",
    "longDesc": "string",
    "name": "string",
    "openInNewTab": false,
    "plans": [
      {
        "features": [
          {
            "name": "string",
            "type": "string",
            "value": "string"
          }
        ],
        "id": "string",
        "name": "string",
        "price": 0,
        "slug": "string"
      }
    ],
    "regions": [
      "string"
    ],
    "shortDesc": "string",
    "status": "string",
    "supportEmail": "string",
    "twitterName": "string",
    "website": "string"
  },
  "realId": "string",
  "region": "string"
}
```

<h3 id="specific-addon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getAddon|[Addon](#schemaaddon)|

<aside class="success">
This operation does not require authentication
</aside>

## putSelfAddonsAddonId

<a id="opIdputSelfAddonsAddonId"></a>

> Code samples

```bash
curl https://example.com/self/addons/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "string",
    "payment": {
      "deviceData": "string",
      "token": "string",
      "type": "NEW_CARD"
    },
    "plan": "string",
    "providerId": "string",
    "region": "string"
  }'
```

`PUT /self/addons/{addonId}`

> Body parameter

```json
{
  "name": "string",
  "payment": {
    "deviceData": "string",
    "token": "string",
    "type": "NEW_CARD"
  },
  "plan": "string",
  "providerId": "string",
  "region": "string"
}
```

<h3 id="putselfaddonsaddonid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|addonId|path|string|true|none|
|body|body|[WannabeAddon](#schemawannabeaddon)|true|none|
|» name|body|string|true|none|
|» payment|body|[PaymentData](#schemapaymentdata)|true|none|
|» plan|body|string|true|none|
|» providerId|body|string|true|none|
|» region|body|string|true|none|

<h3 id="putselfaddonsaddonid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Update addon informations|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteSelfAddonsAddonId

<a id="opIddeleteSelfAddonsAddonId"></a>

> Code samples

```bash
curl https://example.com/self/addons/string \
  -X DELETE
```

`DELETE /self/addons/{addonId}`

<h3 id="deleteselfaddonsaddonid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|addonId|path|string|true|none|

<h3 id="deleteselfaddonsaddonid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|deprovisionAddon|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSelfAddonsAddonIdApplications

<a id="opIdgetSelfAddonsAddonIdApplications"></a>

> Code samples

```bash
curl https://example.com/self/addons/string/applications \
  -H 'Accept: application/json'
```

`GET /self/addons/{addonId}/applications`

<h3 id="getselfaddonsaddonidapplications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|addonId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "archived": false,
    "branch": "string",
    "buildFlavor": {
      "available": false,
      "cpus": 0,
      "disk": 0,
      "mem": 0,
      "microservice": false,
      "name": "string",
      "nice": 0,
      "price": 0
    },
    "cancelOnPush": false,
    "commitId": "string",
    "creationDate": "1970-01-01",
    "deployUrl": "string",
    "deployment": {
      "httpUrl": "string",
      "repoState": "string",
      "shutdownable": false,
      "type": "string",
      "url": "string"
    },
    "description": "string",
    "favourite": false,
    "homogeneous": false,
    "id": "string",
    "instance": {
      "buildFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "comingSoon": false,
      "defaultEnv": {},
      "defaultFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "deployments": [
        "string"
      ],
      "description": "string",
      "enabled": false,
      "flavors": [
        {
          "available": false,
          "cpus": 0,
          "disk": 0,
          "mem": 0,
          "microservice": false,
          "name": "string",
          "nice": 0,
          "price": 0
        }
      ],
      "instanceAndVersion": "string",
      "maxAllowedInstances": 0,
      "maxFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "maxInstances": 0,
      "minFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "minInstances": 0,
      "name": "string",
      "tags": [
        "string"
      ],
      "type": "string",
      "variant": {
        "deployType": "string",
        "id": "string",
        "logo": "string",
        "name": "string",
        "slug": "string"
      },
      "version": "string"
    },
    "last_deploy": 0,
    "name": "string",
    "ownerId": "string",
    "separateBuild": false,
    "state": "string",
    "stickySessions": false,
    "vhosts": [
      {
        "fqdn": "string"
      }
    ],
    "webhookSecret": "string",
    "webhookUrl": "string",
    "zone": "string"
  }
]
```

<h3 id="getselfaddonsaddonidapplications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getApplicationsLinkedToAddon|Inline|

<h3 id="getselfaddonsaddonidapplications-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Application](#schemaapplication)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getSelfAddonsAddonIdEnv

<a id="opIdgetSelfAddonsAddonIdEnv"></a>

> Code samples

```bash
curl https://example.com/self/addons/string/env \
  -H 'Accept: application/json'
```

`GET /self/addons/{addonId}/env`

<h3 id="getselfaddonsaddonidenv-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|addonId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "name": "string",
    "value": "string"
  }
]
```

<h3 id="getselfaddonsaddonidenv-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getAddonEnv|Inline|

<h3 id="getselfaddonsaddonidenv-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ListEnv](#schemalistenv)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## putSelfAddonsAddonIdPlan

<a id="opIdputSelfAddonsAddonIdPlan"></a>

> Code samples

```bash
curl https://example.com/self/addons/string/plan \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "features": [
      {
        "name": "string",
        "type": "string",
        "value": "string"
      }
    ],
    "name": "string",
    "price": 0,
    "slug": "string"
  }'
```

`PUT /self/addons/{addonId}/plan`

> Body parameter

```json
{
  "features": [
    {
      "name": "string",
      "type": "string",
      "value": "string"
    }
  ],
  "name": "string",
  "price": 0,
  "slug": "string"
}
```

<h3 id="putselfaddonsaddonidplan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|addonId|path|string|true|none|
|body|body|[WannabePlan](#schemawannabeplan)|true|none|
|» features|body|[[WannabePlanFeature](#schemawannabeplanfeature)]|true|none|
|» name|body|string|true|none|
|» price|body|integer(int64)|true|none|
|» slug|body|string|true|none|

<h3 id="putselfaddonsaddonidplan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Update plan of an add-on.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSelfAddonsAddonIdSso

<a id="opIdgetSelfAddonsAddonIdSso"></a>

> Code samples

```bash
curl https://example.com/self/addons/string/sso \
  -H 'Accept: application/json'
```

`GET /self/addons/{addonId}/sso`

<h3 id="getselfaddonsaddonidsso-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|addonId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "email": "string",
  "id": "string",
  "nav-data": "string",
  "timestamp": "1970-01-01",
  "token": "string",
  "url": "string"
}
```

<h3 id="getselfaddonsaddonidsso-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getSSOData|[Sso](#schemasso)|

<aside class="success">
This operation does not require authentication
</aside>

## getSelfAddonsAddonIdTags

<a id="opIdgetSelfAddonsAddonIdTags"></a>

> Code samples

```bash
curl https://example.com/self/addons/string/tags
```

`GET /self/addons/{addonId}/tags`

<h3 id="getselfaddonsaddonidtags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|addonId|path|string|true|none|

<h3 id="getselfaddonsaddonidtags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getAddonTags|Inline|

<h3 id="getselfaddonsaddonidtags-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## putSelfAddonsAddonIdTagsTag

<a id="opIdputSelfAddonsAddonIdTagsTag"></a>

> Code samples

```bash
curl https://example.com/self/addons/string/tags/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "body": "string"
  }'
```

`PUT /self/addons/{addonId}/tags/{tag}`

> Body parameter

```json
{
  "body": "string"
}
```

<h3 id="putselfaddonsaddonidtagstag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tag|path|string|true|none|
|addonId|path|string|true|none|
|body|body|[Body](#schemabody)|true|none|
|» body|body|string|true|none|

<h3 id="putselfaddonsaddonidtagstag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|addAddonTag|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteSelfAddonsAddonIdTagsTag

<a id="opIddeleteSelfAddonsAddonIdTagsTag"></a>

> Code samples

```bash
curl https://example.com/self/addons/string/tags/string \
  -X DELETE
```

`DELETE /self/addons/{addonId}/tags/{tag}`

<h3 id="deleteselfaddonsaddonidtagstag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tag|path|string|true|none|
|addonId|path|string|true|none|

<h3 id="deleteselfaddonsaddonidtagstag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|deleteAddonTag|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSelfApplications

<a id="opIdgetSelfApplications"></a>

> Code samples

```bash
curl https://example.com/self/applications \
  -H 'Accept: application/json'
```

`GET /self/applications`

> Example responses

> 200 Response

```json
[
  {
    "archived": false,
    "branch": "string",
    "buildFlavor": {
      "available": false,
      "cpus": 0,
      "disk": 0,
      "mem": 0,
      "microservice": false,
      "name": "string",
      "nice": 0,
      "price": 0
    },
    "cancelOnPush": false,
    "commitId": "string",
    "creationDate": "1970-01-01",
    "deployUrl": "string",
    "deployment": {
      "httpUrl": "string",
      "repoState": "string",
      "shutdownable": false,
      "type": "string",
      "url": "string"
    },
    "description": "string",
    "favourite": false,
    "homogeneous": false,
    "id": "string",
    "instance": {
      "buildFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "comingSoon": false,
      "defaultEnv": {},
      "defaultFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "deployments": [
        "string"
      ],
      "description": "string",
      "enabled": false,
      "flavors": [
        {
          "available": false,
          "cpus": 0,
          "disk": 0,
          "mem": 0,
          "microservice": false,
          "name": "string",
          "nice": 0,
          "price": 0
        }
      ],
      "instanceAndVersion": "string",
      "maxAllowedInstances": 0,
      "maxFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "maxInstances": 0,
      "minFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "minInstances": 0,
      "name": "string",
      "tags": [
        "string"
      ],
      "type": "string",
      "variant": {
        "deployType": "string",
        "id": "string",
        "logo": "string",
        "name": "string",
        "slug": "string"
      },
      "version": "string"
    },
    "last_deploy": 0,
    "name": "string",
    "ownerId": "string",
    "separateBuild": false,
    "state": "string",
    "stickySessions": false,
    "vhosts": [
      {
        "fqdn": "string"
      }
    ],
    "webhookSecret": "string",
    "webhookUrl": "string",
    "zone": "string"
  }
]
```

<h3 id="getselfapplications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getApplications|Inline|

<h3 id="getselfapplications-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Application](#schemaapplication)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## postSelfApplications

<a id="opIdpostSelfApplications"></a>

> Code samples

```bash
curl https://example.com/self/applications \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "archived": false,
    "cancelOnPush": false,
    "deploy": "string",
    "description": "string",
    "enabled": false,
    "favourite": false,
    "homogeneous": false,
    "instanceType": "string",
    "instanceVariant": "string",
    "instanceVersion": "string",
    "maxFlavor": "string",
    "maxInstances": 0,
    "minFlavor": "string",
    "minInstances": 0,
    "name": "string",
    "oauthApp": {
      "name": "string",
      "owner": "string"
    },
    "oauthAppId": "string",
    "oauthService": "string",
    "separateBuild": false,
    "shutdownable": false,
    "stickySessions": false,
    "tags": [
      "string"
    ],
    "zone": "string"
  }'
```

`POST /self/applications`

Creates an application. If you want to create a Github app, you need to replace the oauthApp field with what you will find here: https://github.com/CleverCloud/doc.clever-cloud.com/issues/179

> Body parameter

```json
{
  "archived": false,
  "cancelOnPush": false,
  "deploy": "string",
  "description": "string",
  "enabled": false,
  "favourite": false,
  "homogeneous": false,
  "instanceType": "string",
  "instanceVariant": "string",
  "instanceVersion": "string",
  "maxFlavor": "string",
  "maxInstances": 0,
  "minFlavor": "string",
  "minInstances": 0,
  "name": "string",
  "oauthApp": {
    "name": "string",
    "owner": "string"
  },
  "oauthAppId": "string",
  "oauthService": "string",
  "separateBuild": false,
  "shutdownable": false,
  "stickySessions": false,
  "tags": [
    "string"
  ],
  "zone": "string"
}
```

<h3 id="postselfapplications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WannabeApplication](#schemawannabeapplication)|true|none|
|» archived|body|boolean|false|none|
|» cancelOnPush|body|boolean|false|none|
|» deploy|body|string|true|none|
|» description|body|string|false|none|
|» enabled|body|boolean|true|none|
|» favourite|body|boolean|false|none|
|» homogeneous|body|boolean|false|none|
|» instanceType|body|string|false|none|
|» instanceVariant|body|string|false|none|
|» instanceVersion|body|string|false|none|
|» maxFlavor|body|string|false|none|
|» maxInstances|body|integer(int32)|true|none|
|» minFlavor|body|string|false|none|
|» minInstances|body|integer(int32)|true|none|
|» name|body|string|true|none|
|» oauthApp|body|[WannabeOauthApp](#schemawannabeoauthapp)|false|none|
|» oauthAppId|body|string|false|none|
|» oauthService|body|string|false|none|
|» separateBuild|body|boolean|false|none|
|» shutdownable|body|boolean|false|none|
|» stickySessions|body|boolean|false|none|
|» tags|body|[string]|false|none|
|» zone|body|string|true|none|

<h3 id="postselfapplications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|addApplication|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSelfApplicationsAppId

<a id="opIdgetSelfApplicationsAppId"></a>

> Code samples

```bash
curl https://example.com/self/applications/string \
  -H 'Accept: application/json'
```

`GET /self/applications/{appId}`

<h3 id="getselfapplicationsappid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "archived": false,
  "branch": "string",
  "buildFlavor": {
    "available": false,
    "cpus": 0,
    "disk": 0,
    "mem": 0,
    "microservice": false,
    "name": "string",
    "nice": 0,
    "price": 0
  },
  "cancelOnPush": false,
  "commitId": "string",
  "creationDate": "1970-01-01",
  "deployUrl": "string",
  "deployment": {
    "httpUrl": "string",
    "repoState": "string",
    "shutdownable": false,
    "type": "string",
    "url": "string"
  },
  "description": "string",
  "favourite": false,
  "homogeneous": false,
  "id": "string",
  "instance": {
    "buildFlavor": {
      "available": false,
      "cpus": 0,
      "disk": 0,
      "mem": 0,
      "microservice": false,
      "name": "string",
      "nice": 0,
      "price": 0
    },
    "comingSoon": false,
    "defaultEnv": {},
    "defaultFlavor": {
      "available": false,
      "cpus": 0,
      "disk": 0,
      "mem": 0,
      "microservice": false,
      "name": "string",
      "nice": 0,
      "price": 0
    },
    "deployments": [
      "string"
    ],
    "description": "string",
    "enabled": false,
    "flavors": [
      {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      }
    ],
    "instanceAndVersion": "string",
    "maxAllowedInstances": 0,
    "maxFlavor": {
      "available": false,
      "cpus": 0,
      "disk": 0,
      "mem": 0,
      "microservice": false,
      "name": "string",
      "nice": 0,
      "price": 0
    },
    "maxInstances": 0,
    "minFlavor": {
      "available": false,
      "cpus": 0,
      "disk": 0,
      "mem": 0,
      "microservice": false,
      "name": "string",
      "nice": 0,
      "price": 0
    },
    "minInstances": 0,
    "name": "string",
    "tags": [
      "string"
    ],
    "type": "string",
    "variant": {
      "deployType": "string",
      "id": "string",
      "logo": "string",
      "name": "string",
      "slug": "string"
    },
    "version": "string"
  },
  "last_deploy": 0,
  "name": "string",
  "ownerId": "string",
  "separateBuild": false,
  "state": "string",
  "stickySessions": false,
  "vhosts": [
    {
      "fqdn": "string"
    }
  ],
  "webhookSecret": "string",
  "webhookUrl": "string",
  "zone": "string"
}
```

<h3 id="getselfapplicationsappid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getApplication|[Application](#schemaapplication)|

<aside class="success">
This operation does not require authentication
</aside>

## putSelfApplicationsAppId

<a id="opIdputSelfApplicationsAppId"></a>

> Code samples

```bash
curl https://example.com/self/applications/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "archived": false,
    "cancelOnPush": false,
    "deploy": "string",
    "description": "string",
    "enabled": false,
    "favourite": false,
    "homogeneous": false,
    "instanceType": "string",
    "instanceVariant": "string",
    "instanceVersion": "string",
    "maxFlavor": "string",
    "maxInstances": 0,
    "minFlavor": "string",
    "minInstances": 0,
    "name": "string",
    "oauthApp": {
      "name": "string",
      "owner": "string"
    },
    "oauthAppId": "string",
    "oauthService": "string",
    "separateBuild": false,
    "shutdownable": false,
    "stickySessions": false,
    "tags": [
      "string"
    ],
    "zone": "string"
  }'
```

`PUT /self/applications/{appId}`

> Body parameter

```json
{
  "archived": false,
  "cancelOnPush": false,
  "deploy": "string",
  "description": "string",
  "enabled": false,
  "favourite": false,
  "homogeneous": false,
  "instanceType": "string",
  "instanceVariant": "string",
  "instanceVersion": "string",
  "maxFlavor": "string",
  "maxInstances": 0,
  "minFlavor": "string",
  "minInstances": 0,
  "name": "string",
  "oauthApp": {
    "name": "string",
    "owner": "string"
  },
  "oauthAppId": "string",
  "oauthService": "string",
  "separateBuild": false,
  "shutdownable": false,
  "stickySessions": false,
  "tags": [
    "string"
  ],
  "zone": "string"
}
```

<h3 id="putselfapplicationsappid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|
|body|body|[WannabeApplication](#schemawannabeapplication)|true|none|
|» archived|body|boolean|false|none|
|» cancelOnPush|body|boolean|false|none|
|» deploy|body|string|true|none|
|» description|body|string|false|none|
|» enabled|body|boolean|true|none|
|» favourite|body|boolean|false|none|
|» homogeneous|body|boolean|false|none|
|» instanceType|body|string|false|none|
|» instanceVariant|body|string|false|none|
|» instanceVersion|body|string|false|none|
|» maxFlavor|body|string|false|none|
|» maxInstances|body|integer(int32)|true|none|
|» minFlavor|body|string|false|none|
|» minInstances|body|integer(int32)|true|none|
|» name|body|string|true|none|
|» oauthApp|body|[WannabeOauthApp](#schemawannabeoauthapp)|false|none|
|» oauthAppId|body|string|false|none|
|» oauthService|body|string|false|none|
|» separateBuild|body|boolean|false|none|
|» shutdownable|body|boolean|false|none|
|» stickySessions|body|boolean|false|none|
|» tags|body|[string]|false|none|
|» zone|body|string|true|none|

<h3 id="putselfapplicationsappid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|editApplication|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteSelfApplicationsAppId

<a id="opIddeleteSelfApplicationsAppId"></a>

> Code samples

```bash
curl https://example.com/self/applications/string \
  -X DELETE
```

`DELETE /self/applications/{appId}`

<h3 id="deleteselfapplicationsappid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|

<h3 id="deleteselfapplicationsappid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|deleteApplication|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSelfApplicationsAppIdAddons

<a id="opIdgetSelfApplicationsAppIdAddons"></a>

> Code samples

```bash
curl https://example.com/self/applications/string/addons \
  -H 'Accept: application/json'
```

`GET /self/applications/{appId}/addons`

<h3 id="getselfapplicationsappidaddons-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "configKeys": [
      "string"
    ],
    "creationDate": "1970-01-01",
    "id": "string",
    "name": "string",
    "plan": {
      "features": [
        {
          "name": "string",
          "type": "string",
          "value": "string"
        }
      ],
      "id": "string",
      "name": "string",
      "price": 0,
      "slug": "string"
    },
    "provider": {
      "analyticsId": "string",
      "canUpgrade": false,
      "features": [
        {
          "name": "string",
          "type": "string",
          "value": "string"
        }
      ],
      "googlePlusName": "string",
      "id": "string",
      "logoUrl": "string",
      "longDesc": "string",
      "name": "string",
      "openInNewTab": false,
      "plans": [
        {
          "features": [
            {
              "name": "string",
              "type": "string",
              "value": "string"
            }
          ],
          "id": "string",
          "name": "string",
          "price": 0,
          "slug": "string"
        }
      ],
      "regions": [
        "string"
      ],
      "shortDesc": "string",
      "status": "string",
      "supportEmail": "string",
      "twitterName": "string",
      "website": "string"
    },
    "realId": "string",
    "region": "string"
  }
]
```

<h3 id="getselfapplicationsappidaddons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getAddonsLinkedToApplication|Inline|

<h3 id="getselfapplicationsappidaddons-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Addon](#schemaaddon)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## postSelfApplicationsAppIdAddons

<a id="opIdpostSelfApplicationsAppIdAddons"></a>

> Code samples

```bash
curl https://example.com/self/applications/string/addons \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "body": "string"
  }'
```

`POST /self/applications/{appId}/addons`

> Body parameter

```json
{
  "body": "string"
}
```

<h3 id="postselfapplicationsappidaddons-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|
|body|body|[Body](#schemabody)|true|none|
|» body|body|string|true|none|

<h3 id="postselfapplicationsappidaddons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|linkAddonToApplication|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSelfApplicationsAppIdAddonsEnv

<a id="opIdgetSelfApplicationsAppIdAddonsEnv"></a>

> Code samples

```bash
curl https://example.com/self/applications/string/addons/env \
  -H 'Accept: application/json'
```

`GET /self/applications/{appId}/addons/env`

<h3 id="getselfapplicationsappidaddonsenv-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "addon_id": "string",
    "addon_name": "string",
    "env": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "provider_id": "string"
  }
]
```

<h3 id="getselfapplicationsappidaddonsenv-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getEnvOfAddonsLinkedToApplication|Inline|

<h3 id="getselfapplicationsappidaddonsenv-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Env](#schemaenv)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## deleteSelfApplicationsAppIdAddonsAddonId

<a id="opIddeleteSelfApplicationsAppIdAddonsAddonId"></a>

> Code samples

```bash
curl https://example.com/self/applications/string/addons/string \
  -X DELETE
```

`DELETE /self/applications/{appId}/addons/{addonId}`

<h3 id="deleteselfapplicationsappidaddonsaddonid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|
|addonId|path|string|true|none|

<h3 id="deleteselfapplicationsappidaddonsaddonid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|unlinkAddonFromApplication|None|

<aside class="success">
This operation does not require authentication
</aside>

## put/self/applications/{appId}/branch

> Code samples

```bash
curl https://example.com/self/applications/string/branch \
  -X PUT
```

`PUT /self/applications/{appId}/branch`

<h3 id="putselfapplicationsappidbranch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|

<h3 id="putselfapplicationsappidbranch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/self/applications/{appId}/branches

> Code samples

```bash
curl https://example.com/self/applications/string/branches
```

`GET /self/applications/{appId}/branches`

<h3 id="getselfapplicationsappidbranches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|

<h3 id="getselfapplicationsappidbranches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## put/self/applications/{appId}/buildflavor

> Code samples

```bash
curl https://example.com/self/applications/string/buildflavor \
  -X PUT
```

`PUT /self/applications/{appId}/buildflavor`

<h3 id="putselfapplicationsappidbuildflavor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|

<h3 id="putselfapplicationsappidbuildflavor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSelfApplicationsAppIdDependencies

<a id="opIdgetSelfApplicationsAppIdDependencies"></a>

> Code samples

```bash
curl https://example.com/self/applications/string/dependencies \
  -H 'Accept: application/json'
```

`GET /self/applications/{appId}/dependencies`

<h3 id="getselfapplicationsappiddependencies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "archived": false,
    "branch": "string",
    "buildFlavor": {
      "available": false,
      "cpus": 0,
      "disk": 0,
      "mem": 0,
      "microservice": false,
      "name": "string",
      "nice": 0,
      "price": 0
    },
    "cancelOnPush": false,
    "commitId": "string",
    "creationDate": "1970-01-01",
    "deployUrl": "string",
    "deployment": {
      "httpUrl": "string",
      "repoState": "string",
      "shutdownable": false,
      "type": "string",
      "url": "string"
    },
    "description": "string",
    "favourite": false,
    "homogeneous": false,
    "id": "string",
    "instance": {
      "buildFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "comingSoon": false,
      "defaultEnv": {},
      "defaultFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "deployments": [
        "string"
      ],
      "description": "string",
      "enabled": false,
      "flavors": [
        {
          "available": false,
          "cpus": 0,
          "disk": 0,
          "mem": 0,
          "microservice": false,
          "name": "string",
          "nice": 0,
          "price": 0
        }
      ],
      "instanceAndVersion": "string",
      "maxAllowedInstances": 0,
      "maxFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "maxInstances": 0,
      "minFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "minInstances": 0,
      "name": "string",
      "tags": [
        "string"
      ],
      "type": "string",
      "variant": {
        "deployType": "string",
        "id": "string",
        "logo": "string",
        "name": "string",
        "slug": "string"
      },
      "version": "string"
    },
    "last_deploy": 0,
    "name": "string",
    "ownerId": "string",
    "separateBuild": false,
    "state": "string",
    "stickySessions": false,
    "vhosts": [
      {
        "fqdn": "string"
      }
    ],
    "webhookSecret": "string",
    "webhookUrl": "string",
    "zone": "string"
  }
]
```

<h3 id="getselfapplicationsappiddependencies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getApplicationDependencies|Inline|

<h3 id="getselfapplicationsappiddependencies-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Application](#schemaapplication)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/self/applications/{appId}/dependencies/env

> Code samples

```bash
curl https://example.com/self/applications/string/dependencies/env
```

`GET /self/applications/{appId}/dependencies/env`

<h3 id="getselfapplicationsappiddependenciesenv-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|

<h3 id="getselfapplicationsappiddependenciesenv-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get env variables defined by application dependencies|Inline|

<h3 id="getselfapplicationsappiddependenciesenv-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[LinkedAppEnv](#schemalinkedappenv)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getSelfApplicationsAppIdDependenciesDependencyId

<a id="opIdgetSelfApplicationsAppIdDependenciesDependencyId"></a>

> Code samples

```bash
curl https://example.com/self/applications/string/dependencies/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "archived": false,
    "cancelOnPush": false,
    "deploy": "string",
    "description": "string",
    "enabled": false,
    "favourite": false,
    "homogeneous": false,
    "instanceType": "string",
    "instanceVariant": "string",
    "instanceVersion": "string",
    "maxFlavor": "string",
    "maxInstances": 0,
    "minFlavor": "string",
    "minInstances": 0,
    "name": "string",
    "oauthApp": {
      "name": "string",
      "owner": "string"
    },
    "oauthAppId": "string",
    "oauthService": "string",
    "separateBuild": false,
    "shutdownable": false,
    "stickySessions": false,
    "tags": [
      "string"
    ],
    "zone": "string"
  }'
```

`PUT /self/applications/{appId}/dependencies/{dependencyId}`

> Body parameter

```json
{
  "archived": false,
  "cancelOnPush": false,
  "deploy": "string",
  "description": "string",
  "enabled": false,
  "favourite": false,
  "homogeneous": false,
  "instanceType": "string",
  "instanceVariant": "string",
  "instanceVersion": "string",
  "maxFlavor": "string",
  "maxInstances": 0,
  "minFlavor": "string",
  "minInstances": 0,
  "name": "string",
  "oauthApp": {
    "name": "string",
    "owner": "string"
  },
  "oauthAppId": "string",
  "oauthService": "string",
  "separateBuild": false,
  "shutdownable": false,
  "stickySessions": false,
  "tags": [
    "string"
  ],
  "zone": "string"
}
```

<h3 id="getselfapplicationsappiddependenciesdependencyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dependencyId|path|string|true|none|
|appId|path|string|true|none|
|body|body|[WannabeApplication](#schemawannabeapplication)|true|none|
|» archived|body|boolean|false|none|
|» cancelOnPush|body|boolean|false|none|
|» deploy|body|string|true|none|
|» description|body|string|false|none|
|» enabled|body|boolean|true|none|
|» favourite|body|boolean|false|none|
|» homogeneous|body|boolean|false|none|
|» instanceType|body|string|false|none|
|» instanceVariant|body|string|false|none|
|» instanceVersion|body|string|false|none|
|» maxFlavor|body|string|false|none|
|» maxInstances|body|integer(int32)|true|none|
|» minFlavor|body|string|false|none|
|» minInstances|body|integer(int32)|true|none|
|» name|body|string|true|none|
|» oauthApp|body|[WannabeOauthApp](#schemawannabeoauthapp)|false|none|
|» oauthAppId|body|string|false|none|
|» oauthService|body|string|false|none|
|» separateBuild|body|boolean|false|none|
|» shutdownable|body|boolean|false|none|
|» stickySessions|body|boolean|false|none|
|» tags|body|[string]|false|none|
|» zone|body|string|true|none|

<h3 id="getselfapplicationsappiddependenciesdependencyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|addApplicationDependency|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteSelfApplicationsAppIdDependenciesDependencyId

<a id="opIddeleteSelfApplicationsAppIdDependenciesDependencyId"></a>

> Code samples

```bash
curl https://example.com/self/applications/string/dependencies/string \
  -X DELETE
```

`DELETE /self/applications/{appId}/dependencies/{dependencyId}`

<h3 id="deleteselfapplicationsappiddependenciesdependencyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dependencyId|path|string|true|none|
|appId|path|string|true|none|

<h3 id="deleteselfapplicationsappiddependenciesdependencyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|deleteApplicationDependency|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSelfApplicationsAppIdDependents

<a id="opIdgetSelfApplicationsAppIdDependents"></a>

> Code samples

```bash
curl https://example.com/self/applications/string/dependents \
  -H 'Accept: application/json'
```

`GET /self/applications/{appId}/dependents`

<h3 id="getselfapplicationsappiddependents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "archived": false,
    "branch": "string",
    "buildFlavor": {
      "available": false,
      "cpus": 0,
      "disk": 0,
      "mem": 0,
      "microservice": false,
      "name": "string",
      "nice": 0,
      "price": 0
    },
    "cancelOnPush": false,
    "commitId": "string",
    "creationDate": "1970-01-01",
    "deployUrl": "string",
    "deployment": {
      "httpUrl": "string",
      "repoState": "string",
      "shutdownable": false,
      "type": "string",
      "url": "string"
    },
    "description": "string",
    "favourite": false,
    "homogeneous": false,
    "id": "string",
    "instance": {
      "buildFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "comingSoon": false,
      "defaultEnv": {},
      "defaultFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "deployments": [
        "string"
      ],
      "description": "string",
      "enabled": false,
      "flavors": [
        {
          "available": false,
          "cpus": 0,
          "disk": 0,
          "mem": 0,
          "microservice": false,
          "name": "string",
          "nice": 0,
          "price": 0
        }
      ],
      "instanceAndVersion": "string",
      "maxAllowedInstances": 0,
      "maxFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "maxInstances": 0,
      "minFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "minInstances": 0,
      "name": "string",
      "tags": [
        "string"
      ],
      "type": "string",
      "variant": {
        "deployType": "string",
        "id": "string",
        "logo": "string",
        "name": "string",
        "slug": "string"
      },
      "version": "string"
    },
    "last_deploy": 0,
    "name": "string",
    "ownerId": "string",
    "separateBuild": false,
    "state": "string",
    "stickySessions": false,
    "vhosts": [
      {
        "fqdn": "string"
      }
    ],
    "webhookSecret": "string",
    "webhookUrl": "string",
    "zone": "string"
  }
]
```

<h3 id="getselfapplicationsappiddependents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getApplicationDependents|Inline|

<h3 id="getselfapplicationsappiddependents-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Application](#schemaapplication)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getSelfApplicationsAppIdDeployments

<a id="opIdgetSelfApplicationsAppIdDeployments"></a>

> Code samples

```bash
curl https://example.com/self/applications/string/deployments \
  -H 'Accept: application/json'
```

`GET /self/applications/{appId}/deployments`

<h3 id="getselfapplicationsappiddeployments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|string|false|none|
|offset|query|string|false|none|
|action|query|string|false|none|
|appId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "httpUrl": "string",
    "repoState": "string",
    "shutdownable": false,
    "type": "string",
    "url": "string"
  }
]
```

<h3 id="getselfapplicationsappiddeployments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getApplicationDeployments|Inline|

<h3 id="getselfapplicationsappiddeployments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Deployment](#schemadeployment)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/self/applications/{appId}/deployments/{deploymentId}

> Code samples

```bash
curl https://example.com/self/applications/string/deployments/string
```

`GET /self/applications/{appId}/deployments/{deploymentId}`

<h3 id="getselfapplicationsappiddeploymentsdeploymentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|
|deploymentId|path|string|true|none|

<h3 id="getselfapplicationsappiddeploymentsdeploymentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteSelfApplicationsAppIdDeploymentsDeploymentIdInstances

<a id="opIddeleteSelfApplicationsAppIdDeploymentsDeploymentIdInstances"></a>

> Code samples

```bash
curl https://example.com/self/applications/string/deployments/string/instances \
  -X DELETE
```

`DELETE /self/applications/{appId}/deployments/{deploymentId}/instances`

<h3 id="deleteselfapplicationsappiddeploymentsdeploymentidinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|
|deploymentId|path|string|true|none|

<h3 id="deleteselfapplicationsappiddeploymentsdeploymentidinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|cancelDeploy|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSelfApplicationsAppIdEnv

<a id="opIdgetSelfApplicationsAppIdEnv"></a>

> Code samples

```bash
curl https://example.com/self/applications/string/env \
  -H 'Accept: application/json'
```

`GET /self/applications/{appId}/env`

<h3 id="getselfapplicationsappidenv-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "name": "string",
    "value": "string"
  }
]
```

<h3 id="getselfapplicationsappidenv-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|editApplicationEnv|Inline|

<h3 id="getselfapplicationsappidenv-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ListEnv](#schemalistenv)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## putSelfApplicationsAppIdEnv

<a id="opIdputSelfApplicationsAppIdEnv"></a>

> Code samples

```bash
curl https://example.com/self/applications/string/env \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "string",
    "value": "string"
  }'
```

`PUT /self/applications/{appId}/env`

> Body parameter

```json
{
  "name": "string",
  "value": "string"
}
```

<h3 id="putselfapplicationsappidenv-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|
|body|body|[WannabeEnv](#schemawannabeenv)|true|none|
|» name|body|string|true|none|
|» value|body|string|true|none|

<h3 id="putselfapplicationsappidenv-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|editApplicationEnvironment|None|

<aside class="success">
This operation does not require authentication
</aside>

## putSelfApplicationsAppIdEnvEnvName

<a id="opIdputSelfApplicationsAppIdEnvEnvName"></a>

> Code samples

```bash
curl https://example.com/self/applications/string/env/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "string",
    "value": "string"
  }'
```

`PUT /self/applications/{appId}/env/{envName}`

> Body parameter

```json
{
  "name": "string",
  "value": "string"
}
```

<h3 id="putselfapplicationsappidenvenvname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|
|envName|path|string|true|none|
|body|body|[WannabeEnv](#schemawannabeenv)|true|none|
|» name|body|string|true|none|
|» value|body|string|true|none|

<h3 id="putselfapplicationsappidenvenvname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|editApplicationEnv|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteSelfApplicationsAppIdEnvEnvName

<a id="opIddeleteSelfApplicationsAppIdEnvEnvName"></a>

> Code samples

```bash
curl https://example.com/self/applications/string/env/string \
  -X DELETE
```

`DELETE /self/applications/{appId}/env/{envName}`

<h3 id="deleteselfapplicationsappidenvenvname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|
|envName|path|string|true|none|

<h3 id="deleteselfapplicationsappidenvenvname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|removeApplicationEnv|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/self/applications/{appId}/exposed_env

> Code samples

```bash
curl https://example.com/self/applications/string/exposed_env
```

`GET /self/applications/{appId}/exposed_env`

<h3 id="getselfapplicationsappidexposedenv-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|

<h3 id="getselfapplicationsappidexposedenv-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## put/self/applications/{appId}/exposed_env

> Code samples

```bash
curl https://example.com/self/applications/string/exposed_env \
  -X PUT
```

`PUT /self/applications/{appId}/exposed_env`

<h3 id="putselfapplicationsappidexposedenv-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|

<h3 id="putselfapplicationsappidexposedenv-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSelfApplicationsAppIdInstances

<a id="opIdgetSelfApplicationsAppIdInstances"></a>

> Code samples

```bash
curl https://example.com/self/applications/string/instances \
  -H 'Accept: application/json'
```

`GET /self/applications/{appId}/instances`

<h3 id="getselfapplicationsappidinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "buildFlavor": {
      "available": false,
      "cpus": 0,
      "disk": 0,
      "mem": 0,
      "microservice": false,
      "name": "string",
      "nice": 0,
      "price": 0
    },
    "comingSoon": false,
    "defaultEnv": {},
    "defaultFlavor": {
      "available": false,
      "cpus": 0,
      "disk": 0,
      "mem": 0,
      "microservice": false,
      "name": "string",
      "nice": 0,
      "price": 0
    },
    "deployments": [
      "string"
    ],
    "description": "string",
    "enabled": false,
    "flavors": [
      {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      }
    ],
    "instanceAndVersion": "string",
    "maxAllowedInstances": 0,
    "maxFlavor": {
      "available": false,
      "cpus": 0,
      "disk": 0,
      "mem": 0,
      "microservice": false,
      "name": "string",
      "nice": 0,
      "price": 0
    },
    "maxInstances": 0,
    "minFlavor": {
      "available": false,
      "cpus": 0,
      "disk": 0,
      "mem": 0,
      "microservice": false,
      "name": "string",
      "nice": 0,
      "price": 0
    },
    "minInstances": 0,
    "name": "string",
    "tags": [
      "string"
    ],
    "type": "string",
    "variant": {
      "deployType": "string",
      "id": "string",
      "logo": "string",
      "name": "string",
      "slug": "string"
    },
    "version": "string"
  }
]
```

<h3 id="getselfapplicationsappidinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getApplicationInstances|Inline|

<h3 id="getselfapplicationsappidinstances-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Instance](#schemainstance)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## postSelfApplicationsAppIdInstances

<a id="opIdpostSelfApplicationsAppIdInstances"></a>

> Code samples

```bash
curl https://example.com/self/applications/string/instances \
  -X POST
```

`POST /self/applications/{appId}/instances`

<h3 id="postselfapplicationsappidinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|commit|query|string|false|none|
|appId|path|string|true|none|

<h3 id="postselfapplicationsappidinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|redeployApplication|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteSelfApplicationsAppIdInstances

<a id="opIddeleteSelfApplicationsAppIdInstances"></a>

> Code samples

```bash
curl https://example.com/self/applications/string/instances \
  -X DELETE
```

`DELETE /self/applications/{appId}/instances`

<h3 id="deleteselfapplicationsappidinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|

<h3 id="deleteselfapplicationsappidinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|undeployApplication|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/self/applications/{appId}/instances/{instanceId}

> Code samples

```bash
curl https://example.com/self/applications/string/instances/string
```

`GET /self/applications/{appId}/instances/{instanceId}`

<h3 id="getselfapplicationsappidinstancesinstanceid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|instanceId|path|string|true|none|
|appId|path|string|true|none|

<h3 id="getselfapplicationsappidinstancesinstanceid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSelfApplicationsAppIdTags

<a id="opIdgetSelfApplicationsAppIdTags"></a>

> Code samples

```bash
curl https://example.com/self/applications/string/tags
```

`GET /self/applications/{appId}/tags`

<h3 id="getselfapplicationsappidtags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|

<h3 id="getselfapplicationsappidtags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getApplicationTags|Inline|

<h3 id="getselfapplicationsappidtags-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## putSelfApplicationsAppIdTagsTag

<a id="opIdputSelfApplicationsAppIdTagsTag"></a>

> Code samples

```bash
curl https://example.com/self/applications/string/tags/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "body": "string"
  }'
```

`PUT /self/applications/{appId}/tags/{tag}`

> Body parameter

```json
{
  "body": "string"
}
```

<h3 id="putselfapplicationsappidtagstag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|
|tag|path|string|true|none|
|body|body|[Body](#schemabody)|true|none|
|» body|body|string|true|none|

<h3 id="putselfapplicationsappidtagstag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|addApplicationTag|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteSelfApplicationsAppIdTagsTag

<a id="opIddeleteSelfApplicationsAppIdTagsTag"></a>

> Code samples

```bash
curl https://example.com/self/applications/string/tags/string \
  -X DELETE
```

`DELETE /self/applications/{appId}/tags/{tag}`

<h3 id="deleteselfapplicationsappidtagstag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|
|tag|path|string|true|none|

<h3 id="deleteselfapplicationsappidtagstag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|deleteApplicationTag|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSelfApplicationsAppIdVhosts

<a id="opIdgetSelfApplicationsAppIdVhosts"></a>

> Code samples

```bash
curl https://example.com/self/applications/string/vhosts \
  -H 'Accept: application/json'
```

`GET /self/applications/{appId}/vhosts`

<h3 id="getselfapplicationsappidvhosts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "fqdn": "string"
  }
]
```

<h3 id="getselfapplicationsappidvhosts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getVhosts|Inline|

<h3 id="getselfapplicationsappidvhosts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Vhost](#schemavhost)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getSelfApplicationsAppIdVhostsFavourite

<a id="opIdgetSelfApplicationsAppIdVhostsFavourite"></a>

> Code samples

```bash
curl https://example.com/self/applications/string/vhosts/favourite \
  -H 'Accept: application/json'
```

`GET /self/applications/{appId}/vhosts/favourite`

<h3 id="getselfapplicationsappidvhostsfavourite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "fqdn": "string"
}
```

<h3 id="getselfapplicationsappidvhostsfavourite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getFavouriteVhost|[Vhost](#schemavhost)|

<aside class="success">
This operation does not require authentication
</aside>

## putSelfApplicationsAppIdVhostsFavourite

<a id="opIdputSelfApplicationsAppIdVhostsFavourite"></a>

> Code samples

```bash
curl https://example.com/self/applications/string/vhosts/favourite \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "fqdn": "string"
  }'
```

`PUT /self/applications/{appId}/vhosts/favourite`

> Body parameter

```json
{
  "fqdn": "string"
}
```

<h3 id="putselfapplicationsappidvhostsfavourite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|
|body|body|[Vhost](#schemavhost)|true|none|
|» fqdn|body|string|true|none|

<h3 id="putselfapplicationsappidvhostsfavourite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|markFavouriteVhost|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteSelfApplicationsAppIdVhostsFavourite

<a id="opIddeleteSelfApplicationsAppIdVhostsFavourite"></a>

> Code samples

```bash
curl https://example.com/self/applications/string/vhosts/favourite \
  -X DELETE
```

`DELETE /self/applications/{appId}/vhosts/favourite`

<h3 id="deleteselfapplicationsappidvhostsfavourite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|

<h3 id="deleteselfapplicationsappidvhostsfavourite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|unmarkFavouriteVhost|None|

<aside class="success">
This operation does not require authentication
</aside>

## putSelfApplicationsAppIdVhostsDomain

<a id="opIdputSelfApplicationsAppIdVhostsDomain"></a>

> Code samples

```bash
curl https://example.com/self/applications/string/vhosts/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "fqdn": "string"
  }'
```

`PUT /self/applications/{appId}/vhosts/{domain}`

> Body parameter

```json
{
  "fqdn": "string"
}
```

<h3 id="putselfapplicationsappidvhostsdomain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|
|domain|path|string|true|none|
|body|body|[Vhost](#schemavhost)|true|none|
|» fqdn|body|string|true|none|

<h3 id="putselfapplicationsappidvhostsdomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|addVhost|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteSelfApplicationsAppIdVhostsDomain

<a id="opIddeleteSelfApplicationsAppIdVhostsDomain"></a>

> Code samples

```bash
curl https://example.com/self/applications/string/vhosts/string \
  -X DELETE
```

`DELETE /self/applications/{appId}/vhosts/{domain}`

<h3 id="deleteselfapplicationsappidvhostsdomain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|none|
|domain|path|string|true|none|

<h3 id="deleteselfapplicationsappidvhostsdomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|removeVhost|None|

<aside class="success">
This operation does not require authentication
</aside>

## putSelfAvatar

<a id="opIdputSelfAvatar"></a>

> Code samples

```bash
curl https://example.com/self/avatar \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "source": {
      "source": "string",
      "value": {
        "url": "string"
      }
    }
  }'
```

`PUT /self/avatar`

> Body parameter

```json
{
  "source": {
    "source": "string",
    "value": {
      "url": "string"
    }
  }
}
```

<h3 id="putselfavatar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Avatar](#schemaavatar)|true|none|
|» source|body|object|true|none|
|» » source|body|string|true|github or gravatar|
|» » value|body|[URL](#schemaurl)|true|Must be a valid HTTP URL|

<h3 id="putselfavatar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|setUserAvatar<br>setUserAvatarFromSource|None|

<aside class="success">
This operation does not require authentication
</aside>

## putSelfChangePassword

<a id="opIdputSelfChangePassword"></a>

> Code samples

```bash
curl https://example.com/self/change_password \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /self/change_password`

> Example responses

> 200 Response

```json
{
  "newPassword": "string",
  "oldPassword": "string"
}
```

<h3 id="putselfchangepassword-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|changeUserPassword|[Change_Password](#schemachange_password)|

<aside class="success">
This operation does not require authentication
</aside>

## get/self/cli_tokens

> Code samples

```bash
curl https://example.com/self/cli_tokens
```

`GET /self/cli_tokens`

<h3 id="getselfclitokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cli_token|query|string|false|none|

<h3 id="getselfclitokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSelfConfirmationEmail

<a id="opIdgetSelfConfirmationEmail"></a>

> Code samples

```bash
curl https://example.com/self/confirmation_email
```

`GET /self/confirmation_email`

<h3 id="getselfconfirmationemail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getConfirmationEmail|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSelfConsumers

<a id="opIdgetSelfConsumers"></a>

> Code samples

```bash
curl https://example.com/self/consumers \
  -H 'Accept: application/json'
```

`GET /self/consumers`

> Example responses

> 200 Response

```json
[
  {
    "baseUrl": "string",
    "description": "string",
    "key": "string",
    "name": "string",
    "picture": "string",
    "rights": {
      "access_bills": false,
      "access_consumption_statistics": false,
      "access_credit_count": false,
      "access_organisations": false,
      "access_organisations_bills": false,
      "access_organisations_consumption_statistics": false,
      "access_organisations_credit_count": false,
      "access_personal_information": false,
      "almighty": false,
      "manage_applications": false,
      "manage_organisations": false,
      "manage_organisations_applications": false,
      "manage_organisations_members": false,
      "manage_organisations_services": false,
      "manage_personal_information": false,
      "manage_services": false,
      "manage_ssh_keys": false
    },
    "url": "string"
  }
]
```

<h3 id="getselfconsumers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getConsumers|Inline|

<h3 id="getselfconsumers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Consumer](#schemaconsumer)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## postSelfConsumers

<a id="opIdpostSelfConsumers"></a>

> Code samples

```bash
curl https://example.com/self/consumers \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "baseUrl": {
      "url": "string"
    },
    "description": "string",
    "name": "string",
    "picture": "string",
    "rights": {
      "activated": false,
      "right": "string"
    },
    "url": {
      "url": "string"
    }
  }'
```

`POST /self/consumers`

> Body parameter

```json
{
  "baseUrl": {
    "url": "string"
  },
  "description": "string",
  "name": "string",
  "picture": "string",
  "rights": {
    "activated": false,
    "right": "string"
  },
  "url": {
    "url": "string"
  }
}
```

<h3 id="postselfconsumers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WannabeConsumer](#schemawannabeconsumer)|true|none|
|» baseUrl|body|[URL](#schemaurl)|true|Must be a valid HTTP URL|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» picture|body|string|false|none|
|» rights|body|object|true|none|
|» » activated|body|boolean|true|none|
|» » right|body|string|true|none|
|» url|body|[URL](#schemaurl)|true|Must be a valid HTTP URL|

<h3 id="postselfconsumers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|createConsumer|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSelfConsumersKey

<a id="opIdgetSelfConsumersKey"></a>

> Code samples

```bash
curl https://example.com/self/consumers/string \
  -H 'Accept: application/json'
```

`GET /self/consumers/{key}`

<h3 id="getselfconsumerskey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "baseUrl": "string",
  "description": "string",
  "key": "string",
  "name": "string",
  "picture": "string",
  "rights": {
    "access_bills": false,
    "access_consumption_statistics": false,
    "access_credit_count": false,
    "access_organisations": false,
    "access_organisations_bills": false,
    "access_organisations_consumption_statistics": false,
    "access_organisations_credit_count": false,
    "access_personal_information": false,
    "almighty": false,
    "manage_applications": false,
    "manage_organisations": false,
    "manage_organisations_applications": false,
    "manage_organisations_members": false,
    "manage_organisations_services": false,
    "manage_personal_information": false,
    "manage_services": false,
    "manage_ssh_keys": false
  },
  "url": "string"
}
```

<h3 id="getselfconsumerskey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getConsumer|[Consumer](#schemaconsumer)|

<aside class="success">
This operation does not require authentication
</aside>

## putSelfConsumersKey

<a id="opIdputSelfConsumersKey"></a>

> Code samples

```bash
curl https://example.com/self/consumers/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "baseUrl": {
      "url": "string"
    },
    "description": "string",
    "name": "string",
    "picture": "string",
    "rights": {
      "activated": false,
      "right": "string"
    },
    "url": {
      "url": "string"
    }
  }'
```

`PUT /self/consumers/{key}`

> Body parameter

```json
{
  "baseUrl": {
    "url": "string"
  },
  "description": "string",
  "name": "string",
  "picture": "string",
  "rights": {
    "activated": false,
    "right": "string"
  },
  "url": {
    "url": "string"
  }
}
```

<h3 id="putselfconsumerskey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|none|
|body|body|[WannabeConsumer](#schemawannabeconsumer)|true|none|
|» baseUrl|body|[URL](#schemaurl)|true|Must be a valid HTTP URL|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» picture|body|string|false|none|
|» rights|body|object|true|none|
|» » activated|body|boolean|true|none|
|» » right|body|string|true|none|
|» url|body|[URL](#schemaurl)|true|Must be a valid HTTP URL|

<h3 id="putselfconsumerskey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|PUT same consumer data as in POST.|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteSelfConsumersKey

<a id="opIddeleteSelfConsumersKey"></a>

> Code samples

```bash
curl https://example.com/self/consumers/string \
  -X DELETE
```

`DELETE /self/consumers/{key}`

<h3 id="deleteselfconsumerskey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|none|

<h3 id="deleteselfconsumerskey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|deleteConsumer|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSelfConsumersKeySecret

<a id="opIdgetSelfConsumersKeySecret"></a>

> Code samples

```bash
curl https://example.com/self/consumers/string/secret \
  -H 'Accept: application/json'
```

`GET /self/consumers/{key}/secret`

<h3 id="getselfconsumerskeysecret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "secret": "string",
  "value": "string"
}
```

<h3 id="getselfconsumerskeysecret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getConsumerSecret|[Secret](#schemasecret)|

<aside class="success">
This operation does not require authentication
</aside>

## getSelfConsumptions

<a id="opIdgetSelfConsumptions"></a>

> Code samples

```bash
curl https://example.com/self/consumptions \
  -H 'Accept: application/json'
```

`GET /self/consumptions`

<h3 id="getselfconsumptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|query|string|false|none|
|from|query|string|false|none|
|to|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "appId": "string",
  "conso": {
    "conso": "string",
    "date": "string"
  }
}
```

<h3 id="getselfconsumptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getConsumptions|[Conso](#schemaconso)|

<aside class="success">
This operation does not require authentication
</aside>

## getSelfCredits

<a id="opIdgetSelfCredits"></a>

> Code samples

```bash
curl https://example.com/self/credits \
  -H 'Accept: application/json'
```

`GET /self/credits`

> Example responses

> 200 Response

```json
{
  "count": 0,
  "dropPrice": {
    "currency": "string",
    "value": 0
  },
  "ownerId": "string"
}
```

<h3 id="getselfcredits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getAmount|[Credits](#schemacredits)|

<aside class="success">
This operation does not require authentication
</aside>

## getSelfEmails

<a id="opIdgetSelfEmails"></a>

> Code samples

```bash
curl https://example.com/self/emails
```

`GET /self/emails`

<h3 id="getselfemails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getEmailAddresses|Inline|

<h3 id="getselfemails-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## putSelfEmailsEmail

<a id="opIdputSelfEmailsEmail"></a>

> Code samples

```bash
curl https://example.com/self/emails/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "body": "string"
  }'
```

`PUT /self/emails/{email}`

> Body parameter

```json
{
  "body": "string"
}
```

<h3 id="putselfemailsemail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|path|string|true|none|
|body|body|[Body](#schemabody)|true|none|
|» body|body|string|true|none|

<h3 id="putselfemailsemail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|addEmailAddress|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteSelfEmailsEmail

<a id="opIddeleteSelfEmailsEmail"></a>

> Code samples

```bash
curl https://example.com/self/emails/string \
  -X DELETE
```

`DELETE /self/emails/{email}`

<h3 id="deleteselfemailsemail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|path|string|true|none|

<h3 id="deleteselfemailsemail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|removeEmailAddress|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSelfId

<a id="opIdgetSelfId"></a>

> Code samples

```bash
curl https://example.com/self/id
```

`GET /self/id`

<h3 id="getselfid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getId|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## getSelfInstances

<a id="opIdgetSelfInstances"></a>

> Code samples

```bash
curl https://example.com/self/instances \
  -H 'Accept: application/json'
```

`GET /self/instances`

> Example responses

> 200 Response

```json
[
  {
    "buildFlavor": {
      "available": false,
      "cpus": 0,
      "disk": 0,
      "mem": 0,
      "microservice": false,
      "name": "string",
      "nice": 0,
      "price": 0
    },
    "comingSoon": false,
    "defaultEnv": {},
    "defaultFlavor": {
      "available": false,
      "cpus": 0,
      "disk": 0,
      "mem": 0,
      "microservice": false,
      "name": "string",
      "nice": 0,
      "price": 0
    },
    "deployments": [
      "string"
    ],
    "description": "string",
    "enabled": false,
    "flavors": [
      {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      }
    ],
    "instanceAndVersion": "string",
    "maxAllowedInstances": 0,
    "maxFlavor": {
      "available": false,
      "cpus": 0,
      "disk": 0,
      "mem": 0,
      "microservice": false,
      "name": "string",
      "nice": 0,
      "price": 0
    },
    "maxInstances": 0,
    "minFlavor": {
      "available": false,
      "cpus": 0,
      "disk": 0,
      "mem": 0,
      "microservice": false,
      "name": "string",
      "nice": 0,
      "price": 0
    },
    "minInstances": 0,
    "name": "string",
    "tags": [
      "string"
    ],
    "type": "string",
    "variant": {
      "deployType": "string",
      "id": "string",
      "logo": "string",
      "name": "string",
      "slug": "string"
    },
    "version": "string"
  }
]
```

<h3 id="getselfinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getInstancesForAllApps|Inline|

<h3 id="getselfinstances-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Instance](#schemainstance)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getSelfKeys

<a id="opIdgetSelfKeys"></a>

> Code samples

```bash
curl https://example.com/self/keys \
  -H 'Accept: application/json'
```

`GET /self/keys`

> Example responses

> 200 Response

```json
[
  {
    "fingerprint": "string",
    "key": "string",
    "name": "string"
  }
]
```

<h3 id="getselfkeys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getSshKeys|Inline|

<h3 id="getselfkeys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Key](#schemakey)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## putSelfKeysKey

<a id="opIdputSelfKeysKey"></a>

> Code samples

```bash
curl https://example.com/self/keys/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "body": "string"
  }'
```

`PUT /self/keys/{key}`

> Body parameter

```json
{
  "body": "string"
}
```

<h3 id="putselfkeyskey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|none|
|body|body|[Body](#schemabody)|true|none|
|» body|body|string|true|none|

<h3 id="putselfkeyskey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|addSshKey|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteSelfKeysKey

<a id="opIddeleteSelfKeysKey"></a>

> Code samples

```bash
curl https://example.com/self/keys/string \
  -X DELETE
```

`DELETE /self/keys/{key}`

<h3 id="deleteselfkeyskey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|none|

<h3 id="deleteselfkeyskey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|removeSshKey|None|

<aside class="success">
This operation does not require authentication
</aside>

## put/self/mfa/{kind}

> Code samples

```bash
curl https://example.com/self/mfa/string \
  -X PUT
```

`PUT /self/mfa/{kind}`

<h3 id="putselfmfakind-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|kind|path|string|true|none|

<h3 id="putselfmfakind-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## post/self/mfa/{kind}

> Code samples

```bash
curl https://example.com/self/mfa/string \
  -X POST
```

`POST /self/mfa/{kind}`

<h3 id="postselfmfakind-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|kind|path|string|true|none|

<h3 id="postselfmfakind-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## delete/self/mfa/{kind}

> Code samples

```bash
curl https://example.com/self/mfa/string \
  -X DELETE
```

`DELETE /self/mfa/{kind}`

<h3 id="deleteselfmfakind-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|kind|path|string|true|none|

<h3 id="deleteselfmfakind-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/self/mfa/{kind}/backupcodes

> Code samples

```bash
curl https://example.com/self/mfa/string/backupcodes
```

`GET /self/mfa/{kind}/backupcodes`

<h3 id="getselfmfakindbackupcodes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|kind|path|string|true|none|

<h3 id="getselfmfakindbackupcodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## post/self/mfa/{kind}/confirmation

> Code samples

```bash
curl https://example.com/self/mfa/string/confirmation \
  -X POST
```

`POST /self/mfa/{kind}/confirmation`

<h3 id="postselfmfakindconfirmation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|kind|path|string|true|none|

<h3 id="postselfmfakindconfirmation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSelfPaymentInfo

<a id="opIdgetSelfPaymentInfo"></a>

> Code samples

```bash
curl https://example.com/self/payment-info
```

`GET /self/payment-info`

<h3 id="getselfpaymentinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getPaymentInfo|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSelfPaymentsBillings

<a id="opIdgetSelfPaymentsBillings"></a>

> Code samples

```bash
curl https://example.com/self/payments/billings
```

`GET /self/payments/billings`

<h3 id="getselfpaymentsbillings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getInvoices|None|

<aside class="success">
This operation does not require authentication
</aside>

## postSelfPaymentsBillings

<a id="opIdpostSelfPaymentsBillings"></a>

> Code samples

```bash
curl https://example.com/self/payments/billings \
  -X POST
```

`POST /self/payments/billings`

<h3 id="postselfpaymentsbillings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|buyDrops|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSelfPaymentsBillingsBid

<a id="opIdgetSelfPaymentsBillingsBid"></a>

> Code samples

```bash
curl https://example.com/self/payments/billings/string
```

`GET /self/payments/billings/{bid}`

<h3 id="getselfpaymentsbillingsbid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bid|path|string|true|none|

<h3 id="getselfpaymentsbillingsbid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getInvoice|None|

<aside class="success">
This operation does not require authentication
</aside>

## putSelfPaymentsBillingsBid

<a id="opIdputSelfPaymentsBillingsBid"></a>

> Code samples

```bash
curl https://example.com/self/payments/billings/string \
  -X PUT
```

`PUT /self/payments/billings/{bid}`

<h3 id="putselfpaymentsbillingsbid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bid|path|string|true|none|

<h3 id="putselfpaymentsbillingsbid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|choosePaymentProvider|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteSelfPaymentsBillingsBid

<a id="opIddeleteSelfPaymentsBillingsBid"></a>

> Code samples

```bash
curl https://example.com/self/payments/billings/string \
  -X DELETE
```

`DELETE /self/payments/billings/{bid}`

<h3 id="deleteselfpaymentsbillingsbid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bid|path|string|true|none|

<h3 id="deleteselfpaymentsbillingsbid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|deletePurchaseOrder|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSelfPaymentsBillingsBidPdf

<a id="opIdgetSelfPaymentsBillingsBidPdf"></a>

> Code samples

```bash
curl https://example.com/self/payments/billings/string.pdf
```

`GET /self/payments/billings/{bid}.pdf`

<h3 id="getselfpaymentsbillingsbidpdf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|false|none|
|bid|path|string|true|none|

<h3 id="getselfpaymentsbillingsbidpdf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getPdfInvoice|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSelfPaymentsFullpricePrice

<a id="opIdgetSelfPaymentsFullpricePrice"></a>

> Code samples

```bash
curl https://example.com/self/payments/fullprice/string
```

`GET /self/payments/fullprice/{price}`

<h3 id="getselfpaymentsfullpriceprice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|price|path|string|true|none|

<h3 id="getselfpaymentsfullpriceprice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|priceWithTax|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSelfPaymentsMethods

<a id="opIdgetSelfPaymentsMethods"></a>

> Code samples

```bash
curl https://example.com/self/payments/methods
```

`GET /self/payments/methods`

<h3 id="getselfpaymentsmethods-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getUserPaymentMethods|None|

<aside class="success">
This operation does not require authentication
</aside>

## postSelfPaymentsMethods

<a id="opIdpostSelfPaymentsMethods"></a>

> Code samples

```bash
curl https://example.com/self/payments/methods \
  -X POST
```

`POST /self/payments/methods`

<h3 id="postselfpaymentsmethods-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|addUserMethod|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/self/payments/methods/default

> Code samples

```bash
curl https://example.com/self/payments/methods/default
```

`GET /self/payments/methods/default`

<h3 id="getselfpaymentsmethodsdefault-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## put/self/payments/methods/default

> Code samples

```bash
curl https://example.com/self/payments/methods/default \
  -X PUT
```

`PUT /self/payments/methods/default`

<h3 id="putselfpaymentsmethodsdefault-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteSelfPaymentsMethodsMId

<a id="opIddeleteSelfPaymentsMethodsMId"></a>

> Code samples

```bash
curl https://example.com/self/payments/methods/string \
  -X DELETE
```

`DELETE /self/payments/methods/{mId}`

<h3 id="deleteselfpaymentsmethodsmid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mId|path|string|true|none|

<h3 id="deleteselfpaymentsmethodsmid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|deleteUserCard|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/self/payments/monthlyinvoice

> Code samples

```bash
curl https://example.com/self/payments/monthlyinvoice
```

`GET /self/payments/monthlyinvoice`

<h3 id="getselfpaymentsmonthlyinvoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## put/self/payments/monthlyinvoice/maxcredit

> Code samples

```bash
curl https://example.com/self/payments/monthlyinvoice/maxcredit \
  -X PUT
```

`PUT /self/payments/monthlyinvoice/maxcredit`

<h3 id="putselfpaymentsmonthlyinvoicemaxcredit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/self/payments/recurring

> Code samples

```bash
curl https://example.com/self/payments/recurring
```

`GET /self/payments/recurring`

<h3 id="getselfpaymentsrecurring-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteSelfPaymentsRecurring

<a id="opIddeleteSelfPaymentsRecurring"></a>

> Code samples

```bash
curl https://example.com/self/payments/recurring \
  -X DELETE
```

`DELETE /self/payments/recurring`

<h3 id="deleteselfpaymentsrecurring-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|deleteRecurrentPayment|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/self/payments/tokens/stripe

> Code samples

```bash
curl https://example.com/self/payments/tokens/stripe
```

`GET /self/payments/tokens/stripe`

<h3 id="getselfpaymentstokensstripe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSelfTokens

<a id="opIdgetSelfTokens"></a>

> Code samples

```bash
curl https://example.com/self/tokens \
  -H 'Accept: application/json'
```

`GET /self/tokens`

> Example responses

> 200 Response

```json
[
  {
    "consumer": {
      "baseUrl": "string",
      "description": "string",
      "key": "string",
      "name": "string",
      "picture": "string",
      "rights": {
        "access_bills": false,
        "access_consumption_statistics": false,
        "access_credit_count": false,
        "access_organisations": false,
        "access_organisations_bills": false,
        "access_organisations_consumption_statistics": false,
        "access_organisations_credit_count": false,
        "access_personal_information": false,
        "almighty": false,
        "manage_applications": false,
        "manage_organisations": false,
        "manage_organisations_applications": false,
        "manage_organisations_members": false,
        "manage_organisations_services": false,
        "manage_personal_information": false,
        "manage_services": false,
        "manage_ssh_keys": false
      },
      "url": "string"
    },
    "creationDate": 0,
    "lastUtilisation": "string",
    "rights": {
      "description": "string",
      "name": "string"
    },
    "token": "string"
  }
]
```

<h3 id="getselftokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getSelfTokens|Inline|

<h3 id="getselftokens-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Token](#schematoken)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## deleteSelfTokens

<a id="opIddeleteSelfTokens"></a>

> Code samples

```bash
curl https://example.com/self/tokens \
  -X DELETE
```

`DELETE /self/tokens`

<h3 id="deleteselftokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|revokeAllTokens|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteSelfTokensToken

<a id="opIddeleteSelfTokensToken"></a>

> Code samples

```bash
curl https://example.com/self/tokens/string \
  -X DELETE
```

`DELETE /self/tokens/{token}`

<h3 id="deleteselftokenstoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|path|string|true|none|

<h3 id="deleteselftokenstoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|revokeToken|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSelfValidateEmail

<a id="opIdgetSelfValidateEmail"></a>

> Code samples

```bash
curl https://example.com/self/validate_email
```

`GET /self/validate_email`

<h3 id="getselfvalidateemail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|validationKey|query|string|false|none|

<h3 id="getselfvalidateemail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|validateEmail|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSummary

<a id="opIdgetSummary"></a>

> Code samples

```bash
curl https://example.com/summary \
  -H 'Accept: application/json'
```

`GET /summary`

> Example responses

> 200 Response

```json
{
  "organisations": [
    {
      "addons": [
        {
          "id": "string",
          "logoUrl": "string",
          "name": "string",
          "providerId": "string"
        }
      ],
      "applications": [
        {
          "archived": false,
          "commit": "string",
          "id": "string",
          "instanceType": "string",
          "instanceVariant": "string",
          "name": "string",
          "state": "string",
          "variantSlug": "string"
        }
      ],
      "avatar": "string",
      "consumers": [
        {
          "key": "string",
          "name": "string",
          "picture": "string"
        }
      ],
      "id": "string",
      "name": "string",
      "providers": [
        "string"
      ],
      "role": "string"
    }
  ],
  "user": {
    "addons": [
      {
        "id": "string",
        "logoUrl": "string",
        "name": "string",
        "providerId": "string"
      }
    ],
    "admin": false,
    "applications": [
      {
        "archived": false,
        "commit": "string",
        "id": "string",
        "instanceType": "string",
        "instanceVariant": "string",
        "name": "string",
        "state": "string",
        "variantSlug": "string"
      }
    ],
    "avatar": "string",
    "consumers": [
      {
        "key": "string",
        "name": "string",
        "picture": "string"
      }
    ],
    "id": "string",
    "lang": "string",
    "name": "string"
  }
}
```

<h3 id="getsummary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getSummary|[Summary](#schemasummary)|

<aside class="success">
This operation does not require authentication
</aside>

## postUsers

<a id="opIdpostUsers"></a>

> Code samples

```bash
curl https://example.com/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "address": "string",
    "city": "string",
    "country": "string",
    "email": "string",
    "lang": "string",
    "name": "string",
    "password": "string",
    "phone": "string",
    "terms": false,
    "zipcode": "string"
  }'
```

`POST /users`

> Body parameter

```json
{
  "address": "string",
  "city": "string",
  "country": "string",
  "email": "string",
  "lang": "string",
  "name": "string",
  "password": "string",
  "phone": "string",
  "terms": false,
  "zipcode": "string"
}
```

<h3 id="postusers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|invitationKey|query|string|false|none|
|addonBetaInvitationKey|query|string|false|none|
|email|query|string|false|none|
|pass|query|string|false|none|
|url_next|query|string|false|none|
|terms|query|string|false|none|
|body|body|[WannabeUser](#schemawannabeuser)|true|none|
|» address|body|string|false|none|
|» city|body|string|false|none|
|» country|body|string|false|none|
|» email|body|string|true|none|
|» lang|body|string|false|none|
|» name|body|string|false|none|
|» password|body|string|true|none|
|» phone|body|string|false|none|
|» terms|body|boolean|true|none|
|» zipcode|body|string|false|none|

<h3 id="postusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|createUser<br>createUserFromForm|None|

<aside class="success">
This operation does not require authentication
</aside>

## getUsersId

<a id="opIdgetUsersId"></a>

> Code samples

```bash
curl https://example.com/users/string \
  -H 'Accept: application/json'
```

`GET /users/{id}`

<h3 id="getusersid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "address": "string",
  "admin": false,
  "avatar": "string",
  "canPay": false,
  "city": "string",
  "country": "string",
  "creationDate": 0,
  "email": "string",
  "emailValidated": false,
  "hasPassword": false,
  "id": "string",
  "lang": "string",
  "name": "string",
  "oauthApps": [
    "string"
  ],
  "phone": "string",
  "preferredMFA": "string",
  "zipcode": "string"
}
```

<h3 id="getusersid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getUser|[User](#schemauser)|

<aside class="success">
This operation does not require authentication
</aside>

## getUsersIdApplications

<a id="opIdgetUsersIdApplications"></a>

> Code samples

```bash
curl https://example.com/users/string/applications \
  -H 'Accept: application/json'
```

`GET /users/{id}/applications`

<h3 id="getusersidapplications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "archived": false,
    "branch": "string",
    "buildFlavor": {
      "available": false,
      "cpus": 0,
      "disk": 0,
      "mem": 0,
      "microservice": false,
      "name": "string",
      "nice": 0,
      "price": 0
    },
    "cancelOnPush": false,
    "commitId": "string",
    "creationDate": "1970-01-01",
    "deployUrl": "string",
    "deployment": {
      "httpUrl": "string",
      "repoState": "string",
      "shutdownable": false,
      "type": "string",
      "url": "string"
    },
    "description": "string",
    "favourite": false,
    "homogeneous": false,
    "id": "string",
    "instance": {
      "buildFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "comingSoon": false,
      "defaultEnv": {},
      "defaultFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "deployments": [
        "string"
      ],
      "description": "string",
      "enabled": false,
      "flavors": [
        {
          "available": false,
          "cpus": 0,
          "disk": 0,
          "mem": 0,
          "microservice": false,
          "name": "string",
          "nice": 0,
          "price": 0
        }
      ],
      "instanceAndVersion": "string",
      "maxAllowedInstances": 0,
      "maxFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "maxInstances": 0,
      "minFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "minInstances": 0,
      "name": "string",
      "tags": [
        "string"
      ],
      "type": "string",
      "variant": {
        "deployType": "string",
        "id": "string",
        "logo": "string",
        "name": "string",
        "slug": "string"
      },
      "version": "string"
    },
    "last_deploy": 0,
    "name": "string",
    "ownerId": "string",
    "separateBuild": false,
    "state": "string",
    "stickySessions": false,
    "vhosts": [
      {
        "fqdn": "string"
      }
    ],
    "webhookSecret": "string",
    "webhookUrl": "string",
    "zone": "string"
  }
]
```

<h3 id="getusersidapplications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getApplications|Inline|

<h3 id="getusersidapplications-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Application](#schemaapplication)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getUsersUserIdGitInfo

<a id="opIdgetUsersUserIdGitInfo"></a>

> Code samples

```bash
curl https://example.com/users/string/git-info
```

`GET /users/{userId}/git-info`

<h3 id="getusersuseridgitinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|none|

<h3 id="getusersuseridgitinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getGitInfo|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create Matomo addon

<a id="opIdcreateMatomo"></a>

> Code samples

```bash
curl https://example.com/v2/providers/addon-matomo/resources \
  -X POST \
  -H 'Content-Type: */*'
```

`POST /v2/providers/addon-matomo/resources`

> Body parameter

```json
null
```

<h3 id="create-matomo-addon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ProvisionRequest](#schemaprovisionrequest)|false|none|

<h3 id="create-matomo-addon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[Function1RequestContextFutureRouteResult](#schemafunction1requestcontextfuturerouteresult)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Matomo addon

<a id="opIddeleteMatomo"></a>

> Code samples

```bash
curl https://example.com/v2/providers/addon-matomo/resources/string \
  -X DELETE \
  -H 'Content-Type: */*' \
  -d 'string'
```

`DELETE /v2/providers/addon-matomo/resources/{matomoId}`

> Body parameter

```text
string
```

<h3 id="delete-matomo-addon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|matomoId|path|string|true|Automatically added|
|body|body|string|false|none|

<h3 id="delete-matomo-addon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[Function1RequestContextFutureRouteResult](#schemafunction1requestcontextfuturerouteresult)|

<aside class="success">
This operation does not require authentication
</aside>

## get/v3/logs/{appId}

> Code samples

```bash
curl https://example.com/v3/logs/string
```

`GET /v3/logs/{appId}`

Fetch the logs for a given application

<h3 id="getv3logsappid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|Automatically added|

<h3 id="getv3logsappid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|<No description>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/v3/logs/{appId}/drains

> Code samples

```bash
curl https://example.com/v3/logs/string/drains
```

`GET /v3/logs/{appId}/drains`

Fetch the logs drains for a given application

<h3 id="getv3logsappiddrains-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|Automatically added|

<h3 id="getv3logsappiddrains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|<No description>|None|

<aside class="success">
This operation does not require authentication
</aside>

## post/v3/logs/{appId}/drains

> Code samples

```bash
curl https://example.com/v3/logs/string/drains \
  -X POST
```

`POST /v3/logs/{appId}/drains`

Add a log drain for a given application

<h3 id="postv3logsappiddrains-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|Automatically added|

<h3 id="postv3logsappiddrains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|<No description>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/v3/logs/{appId}/drains/:idOrUrl

> Code samples

```bash
curl https://example.com/v3/logs/string/drains/:idOrUrl
```

`GET /v3/logs/{appId}/drains/:idOrUrl`

Fetch the logs drain by id or url for a given application

<h3 id="getv3logsappiddrainsidorurl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|Automatically added|

<h3 id="getv3logsappiddrainsidorurl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|<No description>|None|

<aside class="success">
This operation does not require authentication
</aside>

## delete/v3/logs/{appId}/drains/:idOrUrl

> Code samples

```bash
curl https://example.com/v3/logs/string/drains/:idOrUrl \
  -X DELETE
```

`DELETE /v3/logs/{appId}/drains/:idOrUrl`

Delete the logs drain by id or url for a given application

<h3 id="deletev3logsappiddrainsidorurl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|Automatically added|

<h3 id="deletev3logsappiddrainsidorurl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|<No description>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/v3/logs/{appId}/logs-chunked

> Code samples

```bash
curl https://example.com/v3/logs/string/logs-chunked
```

`GET /v3/logs/{appId}/logs-chunked`

Retrieve logs as they come through a chunked, never-ending response

<h3 id="getv3logsappidlogs-chunked-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|Automatically added|

<h3 id="getv3logsappidlogs-chunked-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|<No description>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/v3/logs/{appId}/logs-socket

> Code samples

```bash
curl https://example.com/v3/logs/string/logs-socket
```

`GET /v3/logs/{appId}/logs-socket`

Retrieve logs as they come through a websocket connection. To have authorization, you have to send a `{ "message_type": "oauth", "authorization": "oauth authorization string" }` message

<h3 id="getv3logsappidlogs-socket-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|Automatically added|

<h3 id="getv3logsappidlogs-socket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|<No description>|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Matomo addon

<a id="opIdgetMatomo"></a>

> Code samples

```bash
curl https://example.com/v4/addon-providers/addon-matomo/addons/string \
  -H 'Content-Type: */*' \
  -d 'string'
```

`GET /v4/addon-providers/addon-matomo/addons/{matomoId}`

> Body parameter

```text
string
```

<h3 id="get-matomo-addon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|matomoId|path|string|true|Automatically added|
|body|body|string|false|none|

<h3 id="get-matomo-addon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[Function1RequestContextFutureRouteResult](#schemafunction1requestcontextfuturerouteresult)|

<aside class="success">
This operation does not require authentication
</aside>

## Validate a keycloak token

<a id="opIdgetMatomoKTokenValidation"></a>

> Code samples

```bash
curl https://example.com/v4/addon-providers/addon-matomo/token/validate \
  -H 'Content-Type: */*' \
  -d 'string'
```

`GET /v4/addon-providers/addon-matomo/token/validate`

> Body parameter

```text
string
```

<h3 id="validate-a-keycloak-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|keycloakToken|query|string|false|Environment variable injected on the app with 'KEYCLOAK_TOKEN' name|
|body|body|string|false|none|

<h3 id="validate-a-keycloak-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[Function1RequestContextFutureRouteResult](#schemafunction1requestcontextfuturerouteresult)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Addon provider configuration

<a id="opIdgetConfigProvider"></a>

> Code samples

```bash
curl https://example.com/v4/addon-providers/config-provider/addons/string \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d 'string'
```

`GET /v4/addon-providers/config-provider/addons/{configurationProviderId}`

> Body parameter

```text
string
```

<h3 id="get-addon-provider-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|configurationProviderId|path|string|true|Automatically added|
|body|body|string|false|none|

> Example responses

> 200 Response

```json
null
```

<h3 id="get-addon-provider-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|requested config provider object|[AddonConfigProviderView](#schemaaddonconfigproviderview)|
|401|Unauthorized||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get provider's addon environment

<a id="opIdgetConfigProviderEnv"></a>

> Code samples

```bash
curl https://example.com/v4/addon-providers/config-provider/addons/string/env \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -d 'string'
```

`GET /v4/addon-providers/config-provider/addons/{configurationProviderId}/env`

> Body parameter

```text
string
```

<h3 id="get-providers-addon-environment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|configurationProviderId|path|string|true|Automatically added|
|body|body|string|false|none|

> Example responses

> 200 Response

```json
[
  null
]
```

<h3 id="get-providers-addon-environment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|config provider environment variables|Inline|
|401|Unauthorized||None|

<h3 id="get-providers-addon-environment-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[EnvVar](#schemaenvvar)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Update provider's addon environment

<a id="opIdupdateConfigProviderEnv"></a>

> Code samples

```bash
curl https://example.com/v4/addon-providers/config-provider/addons/string/env \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    null
  ]'
```

`PUT /v4/addon-providers/config-provider/addons/{configurationProviderId}/env`

> Body parameter

```json
[
  null
]
```

<h3 id="update-providers-addon-environment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|configurationProviderId|path|string|true|Automatically added|
|body|body|[[WannabeEnvVar](#schemawannabeenvvar)]|true|none|

> Example responses

> 200 Response

```json
[
  null
]
```

<h3 id="update-providers-addon-environment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|updated config providers environment variables|Inline|
|401|Unauthorized||None|

<h3 id="update-providers-addon-environment-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[EnvVar](#schemaenvvar)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## List Network Groups

<a id="opIdlistNetworkGroups"></a>

> Code samples

```bash
curl https://example.com/v4/networkgroups/organisations/string/networkgroups \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json'
```

`GET /v4/networkgroups/organisations/{ownerId}/networkgroups`

Lists Network Groups from an owner.

> Body parameter

```json
null
```

<h3 id="list-network-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerId|path|string|true|Automatically added|
|body|body|[OVDHttpRequestContext](#schemaovdhttprequestcontext)|false|none|

> Example responses

> 200 Response

```json
[
  null
]
```

<h3 id="list-network-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized||None|

<h3 id="list-network-groups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[NetworkGroup](#schemanetworkgroup)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create Network Group

<a id="opIdcreateNetworkGroup"></a>

> Code samples

```bash
curl https://example.com/v4/networkgroups/organisations/string/networkgroups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /v4/networkgroups/organisations/{ownerId}/networkgroups`

Creates a Network Group.

> Body parameter

```json
null
```

<h3 id="create-network-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerId|path|string|true|Automatically added|
|body|body|[WannabeNetworkGroup](#schemawannabenetworkgroup)|false|none|

> Example responses

> 201 Response

```json
null
```

<h3 id="create-network-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[NetworkGroup](#schemanetworkgroup)|
|400|Bad Request||None|
|401|Unauthorized||None|
|409|Conflict|Conflict|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get Network Group

<a id="opIdgetNetworkGroup"></a>

> Code samples

```bash
curl https://example.com/v4/networkgroups/organisations/string/networkgroups/string \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json'
```

`GET /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}`

Gets details of a Network Group.

> Body parameter

```json
null
```

<h3 id="get-network-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerId|path|string|true|Automatically added|
|networkGroupId|path|string|true|Automatically added|
|body|body|[OVDHttpRequestContext](#schemaovdhttprequestcontext)|false|none|

> Example responses

> 200 Response

```json
null
```

<h3 id="get-network-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[NetworkGroup](#schemanetworkgroup)|
|401|Unauthorized||None|
|404|Not Found||None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Network Group

<a id="opIddeleteNetworkGroup"></a>

> Code samples

```bash
curl https://example.com/v4/networkgroups/organisations/string/networkgroups/string \
  -X DELETE \
  -H 'Content-Type: */*'
```

`DELETE /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}`

Deletes a Network Group.

> Body parameter

```json
null
```

<h3 id="delete-network-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerId|path|string|true|Automatically added|
|networkGroupId|path|string|true|Automatically added|
|body|body|[OVDHttpRequestContext](#schemaovdhttprequestcontext)|false|none|

<h3 id="delete-network-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|401|Unauthorized||None|
|404|Not Found||None|

<aside class="success">
This operation does not require authentication
</aside>

## Add external peer

<a id="opIdcreateNetworkGroupExternalPeer"></a>

> Code samples

```bash
curl https://example.com/v4/networkgroups/organisations/string/networkgroups/string/external-peers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/external-peers`

Adds an external peer to a Network Group.

> Body parameter

```json
null
```

<h3 id="add-external-peer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerId|path|string|true|Automatically added|
|networkGroupId|path|string|true|Automatically added|
|body|body|[WannabeExternalPeer](#schemawannabeexternalpeer)|false|none|

> Example responses

> 200 Response

```json
null
```

<h3 id="add-external-peer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Peer](#schemapeer)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized||None|
|404|Not Found||None|

<aside class="success">
This operation does not require authentication
</aside>

## Remove external peer

<a id="opIddeleteNetworkGroupExternalPeer"></a>

> Code samples

```bash
curl https://example.com/v4/networkgroups/organisations/string/networkgroups/string/external-peers/string \
  -X DELETE \
  -H 'Content-Type: */*'
```

`DELETE /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/external-peers/{peerId}`

Removes an external peer from a Network Group.

> Body parameter

```json
null
```

<h3 id="remove-external-peer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerId|path|string|true|Automatically added|
|networkGroupId|path|string|true|Automatically added|
|peerId|path|string|true|Automatically added|
|body|body|[OVDHttpRequestContext](#schemaovdhttprequestcontext)|false|none|

<h3 id="remove-external-peer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|401|Unauthorized||None|

<aside class="success">
This operation does not require authentication
</aside>

## List members

<a id="opIdlistNetworkGroupMembers"></a>

> Code samples

```bash
curl https://example.com/v4/networkgroups/organisations/string/networkgroups/string/members \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json'
```

`GET /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/members`

Lists members in a Network Group.

> Body parameter

```json
null
```

<h3 id="list-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerId|path|string|true|Automatically added|
|networkGroupId|path|string|true|Automatically added|
|body|body|[OVDHttpRequestContext](#schemaovdhttprequestcontext)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "job": "string",
    "member": {
      "avatar": "string",
      "email": "string",
      "id": "string",
      "name": "string"
    },
    "role": "string"
  }
]
```

<h3 id="list-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized||None|
|404|Not Found||None|

<h3 id="list-members-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[schema1](#schemaschema1)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Add member

<a id="opIdcreateNetworkGroupMember"></a>

> Code samples

```bash
curl https://example.com/v4/networkgroups/organisations/string/networkgroups/string/members \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "string",
    "job": "string",
    "role": "string"
  }'
```

`POST /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/members`

Adds a member to a Network Group.

> Body parameter

```json
{
  "email": "string",
  "job": "string",
  "role": "string"
}
```

<h3 id="add-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerId|path|string|true|Automatically added|
|networkGroupId|path|string|true|Automatically added|
|body|body|[schema2](#schemaschema2)|false|none|
|» email|body|string|true|none|
|» job|body|string|false|none|
|» role|body|string|true|none|

<h3 id="add-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted||None|
|400|Bad Request||None|
|401|Unauthorized||None|
|404|Not Found||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get member

<a id="opIdgetNetworkGroupMember"></a>

> Code samples

```bash
curl https://example.com/v4/networkgroups/organisations/string/networkgroups/string/members/string \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json'
```

`GET /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/members/{memberId}`

Gets details of a Network Group member.

> Body parameter

```json
null
```

<h3 id="get-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerId|path|string|true|Automatically added|
|networkGroupId|path|string|true|Automatically added|
|memberId|path|string|true|Automatically added|
|body|body|[OVDHttpRequestContext](#schemaovdhttprequestcontext)|false|none|

> Example responses

> 200 Response

```json
{
  "job": "string",
  "member": {
    "avatar": "string",
    "email": "string",
    "id": "string",
    "name": "string"
  },
  "role": "string"
}
```

<h3 id="get-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[schema1](#schemaschema1)|
|401|Unauthorized||None|
|404|Not Found||None|

<aside class="success">
This operation does not require authentication
</aside>

## Remove member

<a id="opIddeleteNetworkGroupMember"></a>

> Code samples

```bash
curl https://example.com/v4/networkgroups/organisations/string/networkgroups/string/members/string \
  -X DELETE \
  -H 'Content-Type: */*'
```

`DELETE /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/members/{memberId}`

Removes a member from a Network Group.

> Body parameter

```json
null
```

<h3 id="remove-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerId|path|string|true|Automatically added|
|networkGroupId|path|string|true|Automatically added|
|memberId|path|string|true|Automatically added|
|body|body|[OVDHttpRequestContext](#schemaovdhttprequestcontext)|false|none|

<h3 id="remove-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|401|Unauthorized||None|

<aside class="success">
This operation does not require authentication
</aside>

## List peers

<a id="opIdlistNetworkGroupPeers"></a>

> Code samples

```bash
curl https://example.com/v4/networkgroups/organisations/string/networkgroups/string/peers \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json'
```

`GET /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/peers`

Lists peers in a Network Group.

> Body parameter

```json
null
```

<h3 id="list-peers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerId|path|string|true|Automatically added|
|networkGroupId|path|string|true|Automatically added|
|body|body|[OVDHttpRequestContext](#schemaovdhttprequestcontext)|false|none|

> Example responses

> 200 Response

```json
[
  null
]
```

<h3 id="list-peers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized||None|
|404|Not Found||None|

<h3 id="list-peers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Peer](#schemapeer)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get peer

<a id="opIdgetNetworkGroupPeer"></a>

> Code samples

```bash
curl https://example.com/v4/networkgroups/organisations/string/networkgroups/string/peers/string \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json'
```

`GET /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/peers/{peerId}`

Gets details of a Network Group peer.

> Body parameter

```json
null
```

<h3 id="get-peer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerId|path|string|true|Automatically added|
|networkGroupId|path|string|true|Automatically added|
|peerId|path|string|true|Automatically added|
|body|body|[OVDHttpRequestContext](#schemaovdhttprequestcontext)|false|none|

> Example responses

> 200 Response

```json
null
```

<h3 id="get-peer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Peer](#schemapeer)|
|401|Unauthorized||None|
|404|Not Found||None|

<aside class="success">
This operation does not require authentication
</aside>

## Remove peer

<a id="opIddeleteNetworkGroupPeer"></a>

> Code samples

```bash
curl https://example.com/v4/networkgroups/organisations/string/networkgroups/string/peers/string \
  -X DELETE \
  -H 'Content-Type: */*'
```

`DELETE /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/peers/{peerId}`

Removes a peer from a Network Group.

> Body parameter

```json
null
```

<h3 id="remove-peer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerId|path|string|true|Automatically added|
|networkGroupId|path|string|true|Automatically added|
|peerId|path|string|true|Automatically added|
|body|body|[OVDHttpRequestContext](#schemaovdhttprequestcontext)|false|none|

<h3 id="remove-peer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|401|Unauthorized||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get WireGuard® configuration

<a id="opIdgetNetworkGroupWireGuardConfiguration"></a>

> Code samples

```bash
curl https://example.com/v4/networkgroups/organisations/string/networkgroups/string/peers/string/wireguard/configuration \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json'
```

`GET /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/peers/{peerId}/wireguard/configuration`

Gets the current WireGuard® tunnel configuration file for a Network Group peer.

> Body parameter

```json
null
```

<h3 id="get-wireguard-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerId|path|string|true|Automatically added|
|networkGroupId|path|string|true|Automatically added|
|peerId|path|string|true|Automatically added|
|body|body|[OVDHttpRequestContext](#schemaovdhttprequestcontext)|false|none|

> Example responses

> 200 Response

```json
null
```

<h3 id="get-wireguard-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[WireGuardConfiguration](#schemawireguardconfiguration)|
|401|Unauthorized||None|
|404|Not Found||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get WireGuard® configuration

<a id="opIdgetNetworkGroupWireGuardConfigurationStream"></a>

> Code samples

```bash
curl https://example.com/v4/networkgroups/organisations/string/networkgroups/string/peers/string/wireguard/configuration/stream \
  -H 'Content-Type: */*'
```

`GET /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/peers/{peerId}/wireguard/configuration/stream`

Gets the current WireGuard® tunnel configuration file for a Network Group peer as a Server Sent Event.

> Body parameter

```json
null
```

<h3 id="get-wireguard-configuration-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerId|path|string|true|Automatically added|
|networkGroupId|path|string|true|Automatically added|
|peerId|path|string|true|Automatically added|
|body|body|[OVDHttpRequestContext](#schemaovdhttprequestcontext)|false|none|

<h3 id="get-wireguard-configuration-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[WireGuardConfiguration](#schemawireguardconfiguration)|
|401|Unauthorized||None|
|404|Not Found||None|

<aside class="success">
This operation does not require authentication
</aside>

## Network Group SSE

<a id="opIdgetNetworkGroupStream"></a>

> Code samples

```bash
curl https://example.com/v4/networkgroups/organisations/string/networkgroups/string/stream \
  -H 'Content-Type: */*'
```

`GET /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/stream`

Retrieves the current Network Group details as a Server Sent Event.

> Body parameter

```json
null
```

<h3 id="network-group-sse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerId|path|string|true|Automatically added|
|networkGroupId|path|string|true|Automatically added|
|body|body|[OVDHttpRequestContext](#schemaovdhttprequestcontext)|false|none|

<h3 id="network-group-sse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[NetworkGroup](#schemanetworkgroup)|
|401|Unauthorized||None|
|404|Not Found||None|

<aside class="success">
This operation does not require authentication
</aside>

## post/vendor//addons

> Code samples

```bash
curl https://example.com/vendor//addons \
  -X POST
```

`POST /vendor//addons`

<h3 id="postvendoraddons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/vendor//apps/{addonId}/logscollector

> Code samples

```bash
curl https://example.com/vendor//apps/string/logscollector
```

`GET /vendor//apps/{addonId}/logscollector`

<h3 id="getvendorappsaddonidlogscollector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|addonId|path|string|true|none|

<h3 id="getvendorappsaddonidlogscollector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## getVendorApps

<a id="opIdgetVendorApps"></a>

> Code samples

```bash
curl https://example.com/vendor/apps \
  -H 'Accept: application/json'
```

`GET /vendor/apps`

<h3 id="getvendorapps-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "archived": false,
    "branch": "string",
    "buildFlavor": {
      "available": false,
      "cpus": 0,
      "disk": 0,
      "mem": 0,
      "microservice": false,
      "name": "string",
      "nice": 0,
      "price": 0
    },
    "cancelOnPush": false,
    "commitId": "string",
    "creationDate": "1970-01-01",
    "deployUrl": "string",
    "deployment": {
      "httpUrl": "string",
      "repoState": "string",
      "shutdownable": false,
      "type": "string",
      "url": "string"
    },
    "description": "string",
    "favourite": false,
    "homogeneous": false,
    "id": "string",
    "instance": {
      "buildFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "comingSoon": false,
      "defaultEnv": {},
      "defaultFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "deployments": [
        "string"
      ],
      "description": "string",
      "enabled": false,
      "flavors": [
        {
          "available": false,
          "cpus": 0,
          "disk": 0,
          "mem": 0,
          "microservice": false,
          "name": "string",
          "nice": 0,
          "price": 0
        }
      ],
      "instanceAndVersion": "string",
      "maxAllowedInstances": 0,
      "maxFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "maxInstances": 0,
      "minFlavor": {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      },
      "minInstances": 0,
      "name": "string",
      "tags": [
        "string"
      ],
      "type": "string",
      "variant": {
        "deployType": "string",
        "id": "string",
        "logo": "string",
        "name": "string",
        "slug": "string"
      },
      "version": "string"
    },
    "last_deploy": 0,
    "name": "string",
    "ownerId": "string",
    "separateBuild": false,
    "state": "string",
    "stickySessions": false,
    "vhosts": [
      {
        "fqdn": "string"
      }
    ],
    "webhookSecret": "string",
    "webhookUrl": "string",
    "zone": "string"
  }
]
```

<h3 id="getvendorapps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|listApps|Inline|

<h3 id="getvendorapps-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Application](#schemaapplication)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getVendorAppsAddonId

<a id="opIdgetVendorAppsAddonId"></a>

> Code samples

```bash
curl https://example.com/vendor/apps/string
```

`GET /vendor/apps/{addonId}`

<h3 id="getvendorappsaddonid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|addonId|path|string|true|none|

<h3 id="getvendorappsaddonid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|getApplicationInfo|None|

<aside class="success">
This operation does not require authentication
</aside>

## putVendorAppsAddonId

<a id="opIdputVendorAppsAddonId"></a>

> Code samples

```bash
curl https://example.com/vendor/apps/string \
  -X PUT
```

`PUT /vendor/apps/{addonId}`

<h3 id="putvendorappsaddonid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|addonId|path|string|true|none|

<h3 id="putvendorappsaddonid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|editApplicationConfiguration|None|

<aside class="success">
This operation does not require authentication
</aside>

## postVendorBillingOwnerId

<a id="opIdpostVendorBillingOwnerId"></a>

> Code samples

```bash
curl https://example.com/vendor/apps/string/consumptions \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "cost": 0
  }'
```

`POST /vendor/apps/{addonId}/consumptions`

> Body parameter

```json
{
  "cost": 0
}
```

<h3 id="postvendorbillingownerid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|addonId|path|string|true|none|
|body|body|[WannabeAddonBilling](#schemawannabeaddonbilling)|true|none|
|» cost|body|number(double)|true|none|

<h3 id="postvendorbillingownerid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## put/vendor/apps/{addonId}/migration_callback

> Code samples

```bash
curl https://example.com/vendor/apps/string/migration_callback \
  -X PUT
```

`PUT /vendor/apps/{addonId}/migration_callback`

<h3 id="putvendorappsaddonidmigrationcallback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|plan_id|query|string|false|none|
|region|query|string|false|none|
|addonId|path|string|true|none|

<h3 id="putvendorappsaddonidmigrationcallback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status 200|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Addon">Addon</h2>
<!-- backwards compatibility -->
<a id="schemaaddon"></a>
<a id="schema_Addon"></a>
<a id="tocSaddon"></a>
<a id="tocsaddon"></a>

```json
{
  "configKeys": [
    "string"
  ],
  "creationDate": "1970-01-01",
  "id": "string",
  "name": "string",
  "plan": {
    "features": [
      {
        "name": "string",
        "type": "string",
        "value": "string"
      }
    ],
    "id": "string",
    "name": "string",
    "price": 0,
    "slug": "string"
  },
  "provider": {
    "analyticsId": "string",
    "canUpgrade": false,
    "features": [
      {
        "name": "string",
        "type": "string",
        "value": "string"
      }
    ],
    "googlePlusName": "string",
    "id": "string",
    "logoUrl": "string",
    "longDesc": "string",
    "name": "string",
    "openInNewTab": false,
    "plans": [
      {
        "features": [
          {
            "name": "string",
            "type": "string",
            "value": "string"
          }
        ],
        "id": "string",
        "name": "string",
        "price": 0,
        "slug": "string"
      }
    ],
    "regions": [
      "string"
    ],
    "shortDesc": "string",
    "status": "string",
    "supportEmail": "string",
    "twitterName": "string",
    "website": "string"
  },
  "realId": "string",
  "region": "string"
}
```

An addon

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configKeys|[string]|true|none|Environments variables link to the addon.|
|creationDate|string(date)|true|none|The creation timestamp of the addon|
|id|string|true|none|`addon_${uuid}`|
|name|string|true|none|none|
|plan|[Plan](#schemaplan)|true|none|none|
|provider|[Provider](#schemaprovider)|true|none|A provider|
|realId|string|true|none|`${provider}_${uuid2}`|
|region|string|true|none|none|

<h2 id="tocS_AddonConfigProviderView">AddonConfigProviderView</h2>
<!-- backwards compatibility -->
<a id="schemaaddonconfigproviderview"></a>
<a id="schema_AddonConfigProviderView"></a>
<a id="tocSaddonconfigproviderview"></a>
<a id="tocsaddonconfigproviderview"></a>

```json
null
```

<h2 id="tocS_AddonMigration">AddonMigration</h2>
<!-- backwards compatibility -->
<a id="schemaaddonmigration"></a>
<a id="schema_AddonMigration"></a>
<a id="tocSaddonmigration"></a>
<a id="tocsaddonmigration"></a>

```json
"{\n   \"id\": \"<UUID>\",\n   \"addon_id\": \"addon_<uuid>\",\n   \"kind\": \"SHARED_TO_SHARED|SHARED_TO_DEDICATED|DEDICATED_TO_DEDICATED|DEDICATED_TO_SHARED\",\n   \"state\": \"RUNNING|FAILED|RECOVERING|RECOVERED|OK\",\n   \"hostname\": \"db.hostname\",\n   \"database\": \"dbname\",\n   \"port\": 5432,\n   \"database_user\": \"username\",\n   \"callback_url\": \"https://api.clever-cloud.com/v2/…\",\n   \"old_cluster_id\": \"acddc485-79c2-4c6b-a617-c92a06c0cb0b\",\n   \"old_cluster_label\": \"par2-01\",\n   \"old_instance_id\": \"acddc485-79c2-4c6b-a617-c92a06c0cb0b\",\n   \"old_plan\": \"s\",\n   \"old_zone\": \"par2\",\n   \"old_recipient_hostname\": \"postgresql-sdc-par2-clevercloud.services.clever-cloud.com\", \n   \"new_cluster_id\": \"acddc485-79c2-4c6b-a617-c92a06c0cb0b\",\n   \"new_cluster_label\": \"par2-02\",\n   \"new_instance_id\": \"acddc485-79c2-4c6b-a617-c92a06c0cb0b\",\n   \"new_plan\": \"m\",\n   \"new_zone\": \"par3\",\n   \"new_recipient_hostname\": \"postgresql-sdc-par3-clevercloud.services.clever-cloud.com\", \n   \"request_date\": \"2018-10-31T10:00:23Z\",\n   \"last_state_update_date\":  \"2018-10-31T10:00:23Z\",\n   \"dump_restore_start_date\":  \"2018-10-31T10:00:23Z\",\n   \"dump_restore_finished_date\":  \"2018-10-31T10:00:23Z\",\n   \"end_date\":  \"2018-10-31T10:00:23Z\",\n   \"exit_message\": \"Success\" \n}"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addon_id|string|false|none|none|
|callback_url|string|false|none|none|
|database|string|false|none|none|
|database_user|string|false|none|none|
|dump_restore_finished_date|string|false|none|none|
|dump_restore_start_date|string|false|none|none|
|end_date|string|false|none|none|
|exit_message|string|false|none|none|
|hostname|string|false|none|none|
|id|string|false|none|none|
|kind|string|false|none|none|
|last_state_update_date|string|false|none|none|
|new_cluster_id|string|false|none|none|
|new_cluster_label|string|false|none|none|
|new_instance_id|string|false|none|none|
|new_plan|string|false|none|none|
|new_recipient_hostname|string|false|none|none|
|new_zone|string|false|none|none|
|old_cluster_id|string|false|none|none|
|old_cluster_label|string|false|none|none|
|old_instance_id|string|false|none|none|
|old_plan|string|false|none|none|
|old_recipient_hostname|string|false|none|none|
|old_zone|string|false|none|none|
|port|number|false|none|none|
|request_date|string|false|none|none|
|state|string|false|none|none|

<h2 id="tocS_AddonProviderSso">AddonProviderSso</h2>
<!-- backwards compatibility -->
<a id="schemaaddonprovidersso"></a>
<a id="schema_AddonProviderSso"></a>
<a id="tocSaddonprovidersso"></a>
<a id="tocsaddonprovidersso"></a>

```json
{
  "macaroon": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|macaroon|string|true|none|none|
|url|string|true|none|none|

<h2 id="tocS_AppInstance">AppInstance</h2>
<!-- backwards compatibility -->
<a id="schemaappinstance"></a>
<a id="schema_AppInstance"></a>
<a id="tocSappinstance"></a>
<a id="tocsappinstance"></a>

```json
{
  "appId": "string",
  "appPort": 0,
  "commit": "string",
  "deployNumber": 0,
  "flavor": {
    "available": false,
    "cpus": 0,
    "disk": 0,
    "mem": 0,
    "microservice": false,
    "name": "string",
    "nice": 0,
    "price": 0
  },
  "id": "string",
  "ip": "string",
  "state": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|string|false|none|none|
|appPort|integer(int32)|false|none|none|
|commit|string|false|none|none|
|deployNumber|integer(int32)|false|none|none|
|flavor|[Flavor](#schemaflavor)|false|none|none|
|id|string|false|none|none|
|ip|string|false|none|none|
|state|string|false|none|none|

<h2 id="tocS_Application">Application</h2>
<!-- backwards compatibility -->
<a id="schemaapplication"></a>
<a id="schema_Application"></a>
<a id="tocSapplication"></a>
<a id="tocsapplication"></a>

```json
{
  "archived": false,
  "branch": "string",
  "buildFlavor": {
    "available": false,
    "cpus": 0,
    "disk": 0,
    "mem": 0,
    "microservice": false,
    "name": "string",
    "nice": 0,
    "price": 0
  },
  "cancelOnPush": false,
  "commitId": "string",
  "creationDate": "1970-01-01",
  "deployUrl": "string",
  "deployment": {
    "httpUrl": "string",
    "repoState": "string",
    "shutdownable": false,
    "type": "string",
    "url": "string"
  },
  "description": "string",
  "favourite": false,
  "homogeneous": false,
  "id": "string",
  "instance": {
    "buildFlavor": {
      "available": false,
      "cpus": 0,
      "disk": 0,
      "mem": 0,
      "microservice": false,
      "name": "string",
      "nice": 0,
      "price": 0
    },
    "comingSoon": false,
    "defaultEnv": {},
    "defaultFlavor": {
      "available": false,
      "cpus": 0,
      "disk": 0,
      "mem": 0,
      "microservice": false,
      "name": "string",
      "nice": 0,
      "price": 0
    },
    "deployments": [
      "string"
    ],
    "description": "string",
    "enabled": false,
    "flavors": [
      {
        "available": false,
        "cpus": 0,
        "disk": 0,
        "mem": 0,
        "microservice": false,
        "name": "string",
        "nice": 0,
        "price": 0
      }
    ],
    "instanceAndVersion": "string",
    "maxAllowedInstances": 0,
    "maxFlavor": {
      "available": false,
      "cpus": 0,
      "disk": 0,
      "mem": 0,
      "microservice": false,
      "name": "string",
      "nice": 0,
      "price": 0
    },
    "maxInstances": 0,
    "minFlavor": {
      "available": false,
      "cpus": 0,
      "disk": 0,
      "mem": 0,
      "microservice": false,
      "name": "string",
      "nice": 0,
      "price": 0
    },
    "minInstances": 0,
    "name": "string",
    "tags": [
      "string"
    ],
    "type": "string",
    "variant": {
      "deployType": "string",
      "id": "string",
      "logo": "string",
      "name": "string",
      "slug": "string"
    },
    "version": "string"
  },
  "last_deploy": 0,
  "name": "string",
  "ownerId": "string",
  "separateBuild": false,
  "state": "string",
  "stickySessions": false,
  "vhosts": [
    {
      "fqdn": "string"
    }
  ],
  "webhookSecret": "string",
  "webhookUrl": "string",
  "zone": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|true|none|none|
|branch|string|true|none|none|
|buildFlavor|[Flavor](#schemaflavor)|true|none|none|
|cancelOnPush|boolean|true|none|none|
|commitId|string|true|none|none|
|creationDate|string(date)|true|none|none|
|deployUrl|string|true|none|none|
|deployment|[Deployment](#schemadeployment)|true|none|none|
|description|string|true|none|none|
|favourite|boolean|true|none|none|
|homogeneous|boolean|true|none|none|
|id|string|true|none|none|
|instance|[Instance](#schemainstance)|true|none|none|
|last_deploy|integer(int32)|true|none|none|
|name|string|true|none|none|
|ownerId|string|true|none|none|
|separateBuild|boolean|true|none|none|
|state|string|true|none|none|
|stickySessions|boolean|true|none|none|
|vhosts|[[Vhost](#schemavhost)]|true|none|none|
|webhookSecret|string|true|none|none|
|webhookUrl|string|true|none|none|
|zone|string|true|none|`par` ou `mtl`|

<h2 id="tocS_Avatar">Avatar</h2>
<!-- backwards compatibility -->
<a id="schemaavatar"></a>
<a id="schema_Avatar"></a>
<a id="tocSavatar"></a>
<a id="tocsavatar"></a>

```json
{
  "source": {
    "source": "string",
    "value": {
      "url": "string"
    }
  }
}
```

If you want to upload an image from your computer, send the image in the body of the request without anything else.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|object|true|none|none|

<h2 id="tocS_Body">Body</h2>
<!-- backwards compatibility -->
<a id="schemabody"></a>
<a id="schema_Body"></a>
<a id="tocSbody"></a>
<a id="tocsbody"></a>

```json
{
  "body": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|true|none|none|

<h2 id="tocS_Change_Password">Change_Password</h2>
<!-- backwards compatibility -->
<a id="schemachange_password"></a>
<a id="schema_Change_Password"></a>
<a id="tocSchange_password"></a>
<a id="tocschange_password"></a>

```json
{
  "newPassword": "string",
  "oldPassword": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|newPassword|string|true|none|none|
|oldPassword|string|true|none|none|

<h2 id="tocS_Conso">Conso</h2>
<!-- backwards compatibility -->
<a id="schemaconso"></a>
<a id="schema_Conso"></a>
<a id="tocSconso"></a>
<a id="tocsconso"></a>

```json
{
  "appId": "string",
  "conso": {
    "conso": "string",
    "date": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|string|true|none|none|
|conso|object|true|none|none|

<h2 id="tocS_Consumer">Consumer</h2>
<!-- backwards compatibility -->
<a id="schemaconsumer"></a>
<a id="schema_Consumer"></a>
<a id="tocSconsumer"></a>
<a id="tocsconsumer"></a>

```json
{
  "baseUrl": "string",
  "description": "string",
  "key": "string",
  "name": "string",
  "picture": "string",
  "rights": {
    "access_bills": false,
    "access_consumption_statistics": false,
    "access_credit_count": false,
    "access_organisations": false,
    "access_organisations_bills": false,
    "access_organisations_consumption_statistics": false,
    "access_organisations_credit_count": false,
    "access_personal_information": false,
    "almighty": false,
    "manage_applications": false,
    "manage_organisations": false,
    "manage_organisations_applications": false,
    "manage_organisations_members": false,
    "manage_organisations_services": false,
    "manage_personal_information": false,
    "manage_services": false,
    "manage_ssh_keys": false
  },
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseUrl|string|true|none|none|
|description|string|true|none|none|
|key|string|false|none|none|
|name|string|true|none|none|
|picture|string|false|none|none|
|rights|[ConsumerRights](#schemaconsumerrights)|true|none|none|
|url|string|true|none|none|

<h2 id="tocS_ConsumerRights">ConsumerRights</h2>
<!-- backwards compatibility -->
<a id="schemaconsumerrights"></a>
<a id="schema_ConsumerRights"></a>
<a id="tocSconsumerrights"></a>
<a id="tocsconsumerrights"></a>

```json
{
  "access_bills": false,
  "access_consumption_statistics": false,
  "access_credit_count": false,
  "access_organisations": false,
  "access_organisations_bills": false,
  "access_organisations_consumption_statistics": false,
  "access_organisations_credit_count": false,
  "access_personal_information": false,
  "almighty": false,
  "manage_applications": false,
  "manage_organisations": false,
  "manage_organisations_applications": false,
  "manage_organisations_members": false,
  "manage_organisations_services": false,
  "manage_personal_information": false,
  "manage_services": false,
  "manage_ssh_keys": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_bills|boolean|false|none|none|
|access_consumption_statistics|boolean|false|none|none|
|access_credit_count|boolean|false|none|none|
|access_organisations|boolean|false|none|none|
|access_organisations_bills|boolean|false|none|none|
|access_organisations_consumption_statistics|boolean|false|none|none|
|access_organisations_credit_count|boolean|false|none|none|
|access_personal_information|boolean|false|none|none|
|almighty|boolean|false|none|none|
|manage_applications|boolean|false|none|none|
|manage_organisations|boolean|false|none|none|
|manage_organisations_applications|boolean|false|none|none|
|manage_organisations_members|boolean|false|none|none|
|manage_organisations_services|boolean|false|none|none|
|manage_personal_information|boolean|false|none|none|
|manage_services|boolean|false|none|none|
|manage_ssh_keys|boolean|false|none|none|

<h2 id="tocS_Country">Country</h2>
<!-- backwards compatibility -->
<a id="schemacountry"></a>
<a id="schema_Country"></a>
<a id="tocScountry"></a>
<a id="tocscountry"></a>

```json
{
  "code": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|Code ISO 3166|
|name|string|true|none|none|

<h2 id="tocS_Credits">Credits</h2>
<!-- backwards compatibility -->
<a id="schemacredits"></a>
<a id="schema_Credits"></a>
<a id="tocScredits"></a>
<a id="tocscredits"></a>

```json
{
  "count": 0,
  "dropPrice": {
    "currency": "string",
    "value": 0
  },
  "ownerId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|number(float)|true|none|none|
|dropPrice|object|true|none|none|
|ownerId|string|true|none|none|

<h2 id="tocS_Deployment">Deployment</h2>
<!-- backwards compatibility -->
<a id="schemadeployment"></a>
<a id="schema_Deployment"></a>
<a id="tocSdeployment"></a>
<a id="tocsdeployment"></a>

```json
{
  "httpUrl": "string",
  "repoState": "string",
  "shutdownable": false,
  "type": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|httpUrl|string|false|none|none|
|repoState|string|true|none|none|
|shutdownable|boolean|true|none|none|
|type|string|true|none|none|
|url|string|true|none|none|

<h2 id="tocS_DeploymentSummary">DeploymentSummary</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentsummary"></a>
<a id="schema_DeploymentSummary"></a>
<a id="tocSdeploymentsummary"></a>
<a id="tocsdeploymentsummary"></a>

```json
{
  "{app_id}": [
    {
      "action": "string",
      "author": {
        "id": "string",
        "name": "string"
      },
      "cause": "string",
      "commit": "string",
      "date": "1970-01-01",
      "id": 0,
      "instances": 0,
      "state": "string",
      "uuid": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|{app_id}|[[DeploymentView](#schemadeploymentview)]|false|none|none|

<h2 id="tocS_DeploymentView">DeploymentView</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentview"></a>
<a id="schema_DeploymentView"></a>
<a id="tocSdeploymentview"></a>
<a id="tocsdeploymentview"></a>

```json
{
  "action": "string",
  "author": {
    "id": "string",
    "name": "string"
  },
  "cause": "string",
  "commit": "string",
  "date": "1970-01-01",
  "id": 0,
  "instances": 0,
  "state": "string",
  "uuid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|none|
|author|object|false|none|none|
|cause|string|true|none|none|
|commit|string|true|none|none|
|date|string(date)|true|none|none|
|id|integer(int64)|true|none|none|
|instances|integer(int64)|true|none|none|
|state|string|true|none|none|
|uuid|string|true|none|none|

<h2 id="tocS_Env">Env</h2>
<!-- backwards compatibility -->
<a id="schemaenv"></a>
<a id="schema_Env"></a>
<a id="tocSenv"></a>
<a id="tocsenv"></a>

```json
{
  "addon_id": "string",
  "addon_name": "string",
  "env": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "provider_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addon_id|string|true|none|none|
|addon_name|string|true|none|none|
|env|[[WannabeEnv](#schemawannabeenv)]|true|none|none|
|provider_id|string|true|none|none|

<h2 id="tocS_EnvVar">EnvVar</h2>
<!-- backwards compatibility -->
<a id="schemaenvvar"></a>
<a id="schema_EnvVar"></a>
<a id="tocSenvvar"></a>
<a id="tocsenvvar"></a>

```json
null
```

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
"{\"id\":6200,\"type\":\"error\",\"message\":\"You do not belong to this organisation so you cannot access it\"}"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|Unique numeric id of this error type. Eg. id = 10 is "Serialization failed".|
|message|string|false|none|Description of the error.|
|type|string|false|none|Value should be "error"|

<h2 id="tocS_Feature">Feature</h2>
<!-- backwards compatibility -->
<a id="schemafeature"></a>
<a id="schema_Feature"></a>
<a id="tocSfeature"></a>
<a id="tocsfeature"></a>

```json
{
  "name": "string",
  "type": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the properties|
|type|string|true|none|The type of the feature|
|value|string|true|none|The value of the feature|

<h2 id="tocS_Flavor">Flavor</h2>
<!-- backwards compatibility -->
<a id="schemaflavor"></a>
<a id="schema_Flavor"></a>
<a id="tocSflavor"></a>
<a id="tocsflavor"></a>

```json
{
  "available": false,
  "cpus": 0,
  "disk": 0,
  "mem": 0,
  "microservice": false,
  "name": "string",
  "nice": 0,
  "price": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|available|boolean|false|none|none|
|cpus|integer(int32)|true|none|none|
|disk|integer(int32)|false|none|none|
|mem|integer(int32)|true|none|none|
|microservice|boolean|false|none|none|
|name|string|true|none|none|
|nice|number(double)|false|none|none|
|price|number(double)|true|none|none|

<h2 id="tocS_Function1RequestContextFutureRouteResult">Function1RequestContextFutureRouteResult</h2>
<!-- backwards compatibility -->
<a id="schemafunction1requestcontextfuturerouteresult"></a>
<a id="schema_Function1RequestContextFutureRouteResult"></a>
<a id="tocSfunction1requestcontextfuturerouteresult"></a>
<a id="tocsfunction1requestcontextfuturerouteresult"></a>

```json
null
```

<h2 id="tocS_Instance">Instance</h2>
<!-- backwards compatibility -->
<a id="schemainstance"></a>
<a id="schema_Instance"></a>
<a id="tocSinstance"></a>
<a id="tocsinstance"></a>

```json
{
  "buildFlavor": {
    "available": false,
    "cpus": 0,
    "disk": 0,
    "mem": 0,
    "microservice": false,
    "name": "string",
    "nice": 0,
    "price": 0
  },
  "comingSoon": false,
  "defaultEnv": {},
  "defaultFlavor": {
    "available": false,
    "cpus": 0,
    "disk": 0,
    "mem": 0,
    "microservice": false,
    "name": "string",
    "nice": 0,
    "price": 0
  },
  "deployments": [
    "string"
  ],
  "description": "string",
  "enabled": false,
  "flavors": [
    {
      "available": false,
      "cpus": 0,
      "disk": 0,
      "mem": 0,
      "microservice": false,
      "name": "string",
      "nice": 0,
      "price": 0
    }
  ],
  "instanceAndVersion": "string",
  "maxAllowedInstances": 0,
  "maxFlavor": {
    "available": false,
    "cpus": 0,
    "disk": 0,
    "mem": 0,
    "microservice": false,
    "name": "string",
    "nice": 0,
    "price": 0
  },
  "maxInstances": 0,
  "minFlavor": {
    "available": false,
    "cpus": 0,
    "disk": 0,
    "mem": 0,
    "microservice": false,
    "name": "string",
    "nice": 0,
    "price": 0
  },
  "minInstances": 0,
  "name": "string",
  "tags": [
    "string"
  ],
  "type": "string",
  "variant": {
    "deployType": "string",
    "id": "string",
    "logo": "string",
    "name": "string",
    "slug": "string"
  },
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buildFlavor|[Flavor](#schemaflavor)|false|none|none|
|comingSoon|boolean|false|none|none|
|defaultEnv|[Map](#schemamap)|true|none|none|
|defaultFlavor|[Flavor](#schemaflavor)|false|none|none|
|deployments|[string]|false|none|none|
|description|string|false|none|none|
|enabled|boolean|false|none|none|
|flavors|[[Flavor](#schemaflavor)]|true|none|none|
|instanceAndVersion|string|true|none|none|
|maxAllowedInstances|integer(int32)|true|none|none|
|maxFlavor|[Flavor](#schemaflavor)|true|none|none|
|maxInstances|integer(int32)|true|none|none|
|minFlavor|[Flavor](#schemaflavor)|true|none|none|
|minInstances|integer(int32)|true|none|none|
|name|string|false|none|none|
|tags|[string]|false|none|none|
|type|string|true|none|none|
|variant|[Variant](#schemavariant)|true|none|none|
|version|string|true|none|none|

<h2 id="tocS_Key">Key</h2>
<!-- backwards compatibility -->
<a id="schemakey"></a>
<a id="schema_Key"></a>
<a id="tocSkey"></a>
<a id="tocskey"></a>

```json
{
  "fingerprint": "string",
  "key": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fingerprint|string|true|none|none|
|key|string|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_LinkedAppEnv">LinkedAppEnv</h2>
<!-- backwards compatibility -->
<a id="schemalinkedappenv"></a>
<a id="schema_LinkedAppEnv"></a>
<a id="tocSlinkedappenv"></a>
<a id="tocslinkedappenv"></a>

```json
{
  "app_id": "string",
  "app_name": "string",
  "env": [
    {
      "name": "string",
      "value": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app_id|string|true|none|none|
|app_name|string|true|none|none|
|env|[[WannabeEnv](#schemawannabeenv)]|true|none|none|

<h2 id="tocS_ListEnv">ListEnv</h2>
<!-- backwards compatibility -->
<a id="schemalistenv"></a>
<a id="schema_ListEnv"></a>
<a id="tocSlistenv"></a>
<a id="tocslistenv"></a>

```json
{
  "name": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_Map">Map</h2>
<!-- backwards compatibility -->
<a id="schemamap"></a>
<a id="schema_Map"></a>
<a id="tocSmap"></a>
<a id="tocsmap"></a>

```json
{}
```

<h2 id="tocS_Member">Member</h2>
<!-- backwards compatibility -->
<a id="schemamember"></a>
<a id="schema_Member"></a>
<a id="tocSmember"></a>
<a id="tocsmember"></a>

```json
{
  "job": "string",
  "member": {
    "avatar": "string",
    "email": "string",
    "id": "string",
    "name": "string"
  },
  "role": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|string|true|none|none|
|member|object|true|none|none|
|role|string|true|none|none|

<h2 id="tocS_NetworkGroup">NetworkGroup</h2>
<!-- backwards compatibility -->
<a id="schemanetworkgroup"></a>
<a id="schema_NetworkGroup"></a>
<a id="tocSnetworkgroup"></a>
<a id="tocsnetworkgroup"></a>

```json
null
```

<h2 id="tocS_OVDHttpRequestContext">OVDHttpRequestContext</h2>
<!-- backwards compatibility -->
<a id="schemaovdhttprequestcontext"></a>
<a id="schema_OVDHttpRequestContext"></a>
<a id="tocSovdhttprequestcontext"></a>
<a id="tocsovdhttprequestcontext"></a>

```json
null
```

<h2 id="tocS_Organisation">Organisation</h2>
<!-- backwards compatibility -->
<a id="schemaorganisation"></a>
<a id="schema_Organisation"></a>
<a id="tocSorganisation"></a>
<a id="tocsorganisation"></a>

```json
{
  "VAT": "string",
  "address": "string",
  "avatar": "string",
  "city": "string",
  "company": "string",
  "country": "string",
  "description": "string",
  "id": "string",
  "name": "string",
  "vatState": "string",
  "zipcode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VAT|string|true|none|none|
|address|string|true|none|none|
|avatar|string|true|none|none|
|city|string|true|none|none|
|company|string|true|none|none|
|country|string|true|none|none|
|description|string|true|none|none|
|id|string|true|none|none|
|name|string|true|none|none|
|vatState|string|true|none|none|
|zipcode|string|true|none|none|

<h2 id="tocS_PaymentData">PaymentData</h2>
<!-- backwards compatibility -->
<a id="schemapaymentdata"></a>
<a id="schema_PaymentData"></a>
<a id="tocSpaymentdata"></a>
<a id="tocspaymentdata"></a>

```json
{
  "deviceData": "string",
  "token": "string",
  "type": "NEW_CARD"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceData|string|false|none|none|
|token|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|NEW_CARD|
|type|EXISTING_CARD|

<h2 id="tocS_Payment_Provider">Payment_Provider</h2>
<!-- backwards compatibility -->
<a id="schemapayment_provider"></a>
<a id="schema_Payment_Provider"></a>
<a id="tocSpayment_provider"></a>
<a id="tocspayment_provider"></a>

```json
{
  "comingSoon": false,
  "imgUrl": "string",
  "name": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comingSoon|boolean|true|none|none|
|imgUrl|string|true|none|none|
|name|string|true|none|none|
|title|string|true|none|none|

<h2 id="tocS_Peer">Peer</h2>
<!-- backwards compatibility -->
<a id="schemapeer"></a>
<a id="schema_Peer"></a>
<a id="tocSpeer"></a>
<a id="tocspeer"></a>

```json
null
```

<h2 id="tocS_Plan">Plan</h2>
<!-- backwards compatibility -->
<a id="schemaplan"></a>
<a id="schema_Plan"></a>
<a id="tocSplan"></a>
<a id="tocsplan"></a>

```json
{
  "features": [
    {
      "name": "string",
      "type": "string",
      "value": "string"
    }
  ],
  "id": "string",
  "name": "string",
  "price": 0,
  "slug": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|features|[[Feature](#schemafeature)]|true|none|The list of the feature in the addon|
|id|string|true|none|`plan_${uuid}`|
|name|string|true|none|Name of the pan|
|price|integer(int32)|true|none|none|
|slug|string|true|none|none|

<h2 id="tocS_Provider">Provider</h2>
<!-- backwards compatibility -->
<a id="schemaprovider"></a>
<a id="schema_Provider"></a>
<a id="tocSprovider"></a>
<a id="tocsprovider"></a>

```json
{
  "analyticsId": "string",
  "canUpgrade": false,
  "features": [
    {
      "name": "string",
      "type": "string",
      "value": "string"
    }
  ],
  "googlePlusName": "string",
  "id": "string",
  "logoUrl": "string",
  "longDesc": "string",
  "name": "string",
  "openInNewTab": false,
  "plans": [
    {
      "features": [
        {
          "name": "string",
          "type": "string",
          "value": "string"
        }
      ],
      "id": "string",
      "name": "string",
      "price": 0,
      "slug": "string"
    }
  ],
  "regions": [
    "string"
  ],
  "shortDesc": "string",
  "status": "string",
  "supportEmail": "string",
  "twitterName": "string",
  "website": "string"
}
```

A provider

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analyticsId|string|true|none|The id of the analytics page link to this addon|
|canUpgrade|boolean|true|none|Can the addon be upgraded|
|features|[[Feature](#schemafeature)]|false|none|none|
|googlePlusName|string|true|none|The name of the google + page link to this addon (could be empty)|
|id|string|true|none|The id of the provider|
|logoUrl|string|true|none|The url of the addon's logo|
|longDesc|string|true|none|A less concise description of the addon|
|name|string|true|none|none|
|openInNewTab|boolean|true|none|Does the addon panel need to be open in a new tab|
|plans|[[Plan](#schemaplan)]|false|none|none|
|regions|[string]|true|none|The differents regions where the addon is available|
|shortDesc|string|true|none|A short description of the addon|
|status|string|true|none|The status of this addon (RELEASE, BETA, ...)|
|supportEmail|string|true|none|The mail to contact in case of issue with this addon|
|twitterName|string|true|none|The name of the user to contact on twitter for this addon (could be empty)|
|website|string|true|none|The website of the provider. If the addon is developped by clever-cloud, the site is "http://www.clever-cloud.com/"|

<h2 id="tocS_ProvisionRequest">ProvisionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionrequest"></a>
<a id="schema_ProvisionRequest"></a>
<a id="tocSprovisionrequest"></a>
<a id="tocsprovisionrequest"></a>

```json
null
```

<h2 id="tocS_Rights">Rights</h2>
<!-- backwards compatibility -->
<a id="schemarights"></a>
<a id="schema_Rights"></a>
<a id="tocSrights"></a>
<a id="tocsrights"></a>

```json
{
  "description": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_Secret">Secret</h2>
<!-- backwards compatibility -->
<a id="schemasecret"></a>
<a id="schema_Secret"></a>
<a id="tocSsecret"></a>
<a id="tocssecret"></a>

```json
{
  "secret": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|secret|string|true|none|none|
|value|string|true|none|none|

<h2 id="tocS_Sso">Sso</h2>
<!-- backwards compatibility -->
<a id="schemasso"></a>
<a id="schema_Sso"></a>
<a id="tocSsso"></a>
<a id="tocssso"></a>

```json
{
  "email": "string",
  "id": "string",
  "nav-data": "string",
  "timestamp": "1970-01-01",
  "token": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|none|
|id|string|true|none|none|
|nav-data|string|true|none|none|
|timestamp|string(date)|true|none|none|
|token|string|true|none|none|
|url|string|true|none|none|

<h2 id="tocS_Summary">Summary</h2>
<!-- backwards compatibility -->
<a id="schemasummary"></a>
<a id="schema_Summary"></a>
<a id="tocSsummary"></a>
<a id="tocssummary"></a>

```json
{
  "organisations": [
    {
      "addons": [
        {
          "id": "string",
          "logoUrl": "string",
          "name": "string",
          "providerId": "string"
        }
      ],
      "applications": [
        {
          "archived": false,
          "commit": "string",
          "id": "string",
          "instanceType": "string",
          "instanceVariant": "string",
          "name": "string",
          "state": "string",
          "variantSlug": "string"
        }
      ],
      "avatar": "string",
      "consumers": [
        {
          "key": "string",
          "name": "string",
          "picture": "string"
        }
      ],
      "id": "string",
      "name": "string",
      "providers": [
        "string"
      ],
      "role": "string"
    }
  ],
  "user": {
    "addons": [
      {
        "id": "string",
        "logoUrl": "string",
        "name": "string",
        "providerId": "string"
      }
    ],
    "admin": false,
    "applications": [
      {
        "archived": false,
        "commit": "string",
        "id": "string",
        "instanceType": "string",
        "instanceVariant": "string",
        "name": "string",
        "state": "string",
        "variantSlug": "string"
      }
    ],
    "avatar": "string",
    "consumers": [
      {
        "key": "string",
        "name": "string",
        "picture": "string"
      }
    ],
    "id": "string",
    "lang": "string",
    "name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|organisations|[object]|true|none|none|
|user|object|true|none|none|

<h2 id="tocS_SupernovaInstanceView">SupernovaInstanceView</h2>
<!-- backwards compatibility -->
<a id="schemasupernovainstanceview"></a>
<a id="schema_SupernovaInstanceView"></a>
<a id="tocSsupernovainstanceview"></a>
<a id="tocssupernovainstanceview"></a>

```json
"{\n  \"uuid\": \"19d21edb-a343-49e7-8aa6-9d87c7e272b8\",\n  \"displayName\": \"Sizzling spewpa\",\n  \"appId\": \"app_2b5ad0bb-4bd7-4180-80b9-0459e98364f3\",\n  \"ownerId\": \"orga_0d221ceb-1b50-4994-a8d9-babb3cceef02\",\n  \"flavor\": {\n    \"name\": \"nano\",\n    \"mem\": 512,\n    \"cpus\": 1,\n    \"price\": 0.1431844215\n  },\n  \"ip\": \"65.10.142.94\",\n  \"appPort\": 18605,\n  \"zabbixPort\": 28605,\n  \"sshPort\": 48605,\n  \"hv\": \"hv-par2-049\",\n  \"image\": \"java-20181029\",\n  \"state\": \"UP\",\n  \"commitId\": \"43a4ba1726e26f039654dcd3916f61c612802947\",\n  \"deployNumber\": 107,\n  \"deployId\": \"deployment_cad0cf75-38e2-4dc8-b1be-ea869862bb69\",\n  \"source\": \"apps\",\n  \"zone\": \"par\",\n  \"internalIP\": \"10.6.123.92\",\n  \"createdAt\": 1540921810532,\n  \"instanceNumber\": 0\n}"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|string|false|none|Identifier of running app/add-on|
|appPort|number|true|none|Port of the HV that's redirected to 8080 on VM|
|commitId|string|false|none|none|
|createdAt|number|false|none|Integer unix timestamp|
|deployId|string|false|none|none|
|deployNumber|number|false|none|none|
|displayName|string|false|none|Generated PokéName. This name is generated from the uuid.|
|flavor|object|true|none|The instance "flavor": memory, cpu, disk size…|
|hv|string|true|none|String name of hv.|
|image|string|true|none|Base system image. E.g. java-20181030, node-20180912…|
|instanceNumber|number|false|none|none|
|internalIP|string|false|none|none|
|ip|string|true|none|Public IP of the HV|
|ownerId|string|false|none|Identifier of the owner of the app/add-on running|
|source|string|true|none|Who/what started this instance? E.g. "app", "cli"|
|sshPort|number|false|none|Port of the HV that's redirected to 22 on VM|
|state|string|false|none|none|
|uuid|string|true|none|none|
|zabbixPort|number|true|none|Port of the HV that's redirected to 10050 on VM|
|zone|string|false|none|none|

<h2 id="tocS_Token">Token</h2>
<!-- backwards compatibility -->
<a id="schematoken"></a>
<a id="schema_Token"></a>
<a id="tocStoken"></a>
<a id="tocstoken"></a>

```json
{
  "consumer": {
    "baseUrl": "string",
    "description": "string",
    "key": "string",
    "name": "string",
    "picture": "string",
    "rights": {
      "access_bills": false,
      "access_consumption_statistics": false,
      "access_credit_count": false,
      "access_organisations": false,
      "access_organisations_bills": false,
      "access_organisations_consumption_statistics": false,
      "access_organisations_credit_count": false,
      "access_personal_information": false,
      "almighty": false,
      "manage_applications": false,
      "manage_organisations": false,
      "manage_organisations_applications": false,
      "manage_organisations_members": false,
      "manage_organisations_services": false,
      "manage_personal_information": false,
      "manage_services": false,
      "manage_ssh_keys": false
    },
    "url": "string"
  },
  "creationDate": 0,
  "lastUtilisation": "string",
  "rights": {
    "description": "string",
    "name": "string"
  },
  "token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consumer|[Consumer](#schemaconsumer)|true|none|none|
|creationDate|integer(int32)|true|none|none|
|lastUtilisation|string|true|none|none|
|rights|[Rights](#schemarights)|true|none|none|
|token|string|true|none|none|

<h2 id="tocS_Transaction_Id">Transaction_Id</h2>
<!-- backwards compatibility -->
<a id="schematransaction_id"></a>
<a id="schema_Transaction_Id"></a>
<a id="tocStransaction_id"></a>
<a id="tocstransaction_id"></a>

```json
{
  "transactionId": "string"
}
```

A simple transaction id

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transactionId|string|true|none|The transaction Id|

<h2 id="tocS_URL">URL</h2>
<!-- backwards compatibility -->
<a id="schemaurl"></a>
<a id="schema_URL"></a>
<a id="tocSurl"></a>
<a id="tocsurl"></a>

```json
{
  "url": "string"
}
```

Must be a valid HTTP URL

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|true|none|none|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "address": "string",
  "admin": false,
  "avatar": "string",
  "canPay": false,
  "city": "string",
  "country": "string",
  "creationDate": 0,
  "email": "string",
  "emailValidated": false,
  "hasPassword": false,
  "id": "string",
  "lang": "string",
  "name": "string",
  "oauthApps": [
    "string"
  ],
  "phone": "string",
  "preferredMFA": "string",
  "zipcode": "string"
}
```

A user representation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|true|none|The address of the user|
|admin|boolean|true|none|Is the user an administrator ?|
|avatar|string|true|none|The location of the user's avatar|
|canPay|boolean|true|none|Does the user can pay ?|
|city|string|true|none|The city of the user|
|country|string|true|none|The country of the user|
|creationDate|integer(int64)|true|none|The creation timestamp of the user|
|email|string|true|none|The email of the user|
|emailValidated|boolean|true|none|Does the user email is validate|
|hasPassword|boolean|false|none|none|
|id|string|true|none|The id of the user : `user_${uuid}`|
|lang|string|true|none|The lang of the user|
|name|string|true|none|The name of the user|
|oauthApps|[string]|true|none|The list of token oauth|
|phone|string|true|none|The phone of the user|
|preferredMFA|string|false|none|none|
|zipcode|string|true|none|The zipcode of the user|

<h2 id="tocS_Variant">Variant</h2>
<!-- backwards compatibility -->
<a id="schemavariant"></a>
<a id="schema_Variant"></a>
<a id="tocSvariant"></a>
<a id="tocsvariant"></a>

```json
{
  "deployType": "string",
  "id": "string",
  "logo": "string",
  "name": "string",
  "slug": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deployType|string|true|none|none|
|id|string|true|none|none|
|logo|string|true|none|none|
|name|string|true|none|none|
|slug|string|true|none|none|

<h2 id="tocS_Vhost">Vhost</h2>
<!-- backwards compatibility -->
<a id="schemavhost"></a>
<a id="schema_Vhost"></a>
<a id="tocSvhost"></a>
<a id="tocsvhost"></a>

```json
{
  "fqdn": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fqdn|string|true|none|none|

<h2 id="tocS_WannabeAddon">WannabeAddon</h2>
<!-- backwards compatibility -->
<a id="schemawannabeaddon"></a>
<a id="schema_WannabeAddon"></a>
<a id="tocSwannabeaddon"></a>
<a id="tocswannabeaddon"></a>

```json
{
  "name": "string",
  "payment": {
    "deviceData": "string",
    "token": "string",
    "type": "NEW_CARD"
  },
  "plan": "string",
  "providerId": "string",
  "region": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|payment|[PaymentData](#schemapaymentdata)|true|none|none|
|plan|string|true|none|none|
|providerId|string|true|none|none|
|region|string|true|none|none|

<h2 id="tocS_WannabeAddonBilling">WannabeAddonBilling</h2>
<!-- backwards compatibility -->
<a id="schemawannabeaddonbilling"></a>
<a id="schema_WannabeAddonBilling"></a>
<a id="tocSwannabeaddonbilling"></a>
<a id="tocswannabeaddonbilling"></a>

```json
{
  "cost": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cost|number(double)|true|none|none|

<h2 id="tocS_WannabeAddonProvider">WannabeAddonProvider</h2>
<!-- backwards compatibility -->
<a id="schemawannabeaddonprovider"></a>
<a id="schema_WannabeAddonProvider"></a>
<a id="tocSwannabeaddonprovider"></a>
<a id="tocswannabeaddonprovider"></a>

```json
{
  "api": {
    "config_vars": [
      "string"
    ],
    "password": "string",
    "production": {
      "base_url": "string",
      "sso_url": "string"
    },
    "regions": [
      "string"
    ],
    "sso_salt": "string",
    "test": {
      "base_url": "string",
      "sso_url": "string"
    }
  },
  "id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api|[WannabeAddonProviderAPI](#schemawannabeaddonproviderapi)|true|none|none|
|id|string|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_WannabeAddonProviderAPI">WannabeAddonProviderAPI</h2>
<!-- backwards compatibility -->
<a id="schemawannabeaddonproviderapi"></a>
<a id="schema_WannabeAddonProviderAPI"></a>
<a id="tocSwannabeaddonproviderapi"></a>
<a id="tocswannabeaddonproviderapi"></a>

```json
{
  "config_vars": [
    "string"
  ],
  "password": "string",
  "production": {
    "base_url": "string",
    "sso_url": "string"
  },
  "regions": [
    "string"
  ],
  "sso_salt": "string",
  "test": {
    "base_url": "string",
    "sso_url": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config_vars|[string]|true|none|none|
|password|string|true|none|none|
|production|[WannabeAddonProviderAPIUrl](#schemawannabeaddonproviderapiurl)|false|none|none|
|regions|[string]|false|none|none|
|sso_salt|string|true|none|none|
|test|[WannabeAddonProviderAPIUrl](#schemawannabeaddonproviderapiurl)|false|none|none|

<h2 id="tocS_WannabeAddonProviderAPIUrl">WannabeAddonProviderAPIUrl</h2>
<!-- backwards compatibility -->
<a id="schemawannabeaddonproviderapiurl"></a>
<a id="schema_WannabeAddonProviderAPIUrl"></a>
<a id="tocSwannabeaddonproviderapiurl"></a>
<a id="tocswannabeaddonproviderapiurl"></a>

```json
{
  "base_url": "string",
  "sso_url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|base_url|string|true|none|none|
|sso_url|string|true|none|none|

<h2 id="tocS_WannabeApplication">WannabeApplication</h2>
<!-- backwards compatibility -->
<a id="schemawannabeapplication"></a>
<a id="schema_WannabeApplication"></a>
<a id="tocSwannabeapplication"></a>
<a id="tocswannabeapplication"></a>

```json
{
  "archived": false,
  "cancelOnPush": false,
  "deploy": "string",
  "description": "string",
  "enabled": false,
  "favourite": false,
  "homogeneous": false,
  "instanceType": "string",
  "instanceVariant": "string",
  "instanceVersion": "string",
  "maxFlavor": "string",
  "maxInstances": 0,
  "minFlavor": "string",
  "minInstances": 0,
  "name": "string",
  "oauthApp": {
    "name": "string",
    "owner": "string"
  },
  "oauthAppId": "string",
  "oauthService": "string",
  "separateBuild": false,
  "shutdownable": false,
  "stickySessions": false,
  "tags": [
    "string"
  ],
  "zone": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|false|none|none|
|cancelOnPush|boolean|false|none|none|
|deploy|string|true|none|none|
|description|string|false|none|none|
|enabled|boolean|true|none|none|
|favourite|boolean|false|none|none|
|homogeneous|boolean|false|none|none|
|instanceType|string|false|none|none|
|instanceVariant|string|false|none|none|
|instanceVersion|string|false|none|none|
|maxFlavor|string|false|none|none|
|maxInstances|integer(int32)|true|none|none|
|minFlavor|string|false|none|none|
|minInstances|integer(int32)|true|none|none|
|name|string|true|none|none|
|oauthApp|[WannabeOauthApp](#schemawannabeoauthapp)|false|none|none|
|oauthAppId|string|false|none|none|
|oauthService|string|false|none|none|
|separateBuild|boolean|false|none|none|
|shutdownable|boolean|false|none|none|
|stickySessions|boolean|false|none|none|
|tags|[string]|false|none|none|
|zone|string|true|none|none|

<h2 id="tocS_WannabeConsumer">WannabeConsumer</h2>
<!-- backwards compatibility -->
<a id="schemawannabeconsumer"></a>
<a id="schema_WannabeConsumer"></a>
<a id="tocSwannabeconsumer"></a>
<a id="tocswannabeconsumer"></a>

```json
{
  "baseUrl": {
    "url": "string"
  },
  "description": "string",
  "name": "string",
  "picture": "string",
  "rights": {
    "activated": false,
    "right": "string"
  },
  "url": {
    "url": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseUrl|[URL](#schemaurl)|true|none|Must be a valid HTTP URL|
|description|string|false|none|none|
|name|string|true|none|none|
|picture|string|false|none|none|
|rights|object|true|none|none|
|url|[URL](#schemaurl)|true|none|Must be a valid HTTP URL|

<h2 id="tocS_WannabeEnv">WannabeEnv</h2>
<!-- backwards compatibility -->
<a id="schemawannabeenv"></a>
<a id="schema_WannabeEnv"></a>
<a id="tocSwannabeenv"></a>
<a id="tocswannabeenv"></a>

```json
{
  "name": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|value|string|true|none|none|

<h2 id="tocS_WannabeEnvVar">WannabeEnvVar</h2>
<!-- backwards compatibility -->
<a id="schemawannabeenvvar"></a>
<a id="schema_WannabeEnvVar"></a>
<a id="tocSwannabeenvvar"></a>
<a id="tocswannabeenvvar"></a>

```json
null
```

<h2 id="tocS_WannabeExternalPeer">WannabeExternalPeer</h2>
<!-- backwards compatibility -->
<a id="schemawannabeexternalpeer"></a>
<a id="schema_WannabeExternalPeer"></a>
<a id="tocSwannabeexternalpeer"></a>
<a id="tocswannabeexternalpeer"></a>

```json
null
```

<h2 id="tocS_WannabeFeature">WannabeFeature</h2>
<!-- backwards compatibility -->
<a id="schemawannabefeature"></a>
<a id="schema_WannabeFeature"></a>
<a id="tocSwannabefeature"></a>
<a id="tocswannabefeature"></a>

```json
{
  "name": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|type|string|true|none|BOOLEAN, INTERVAL, FILESIZE, NUMBER, PERCENTAGE|

<h2 id="tocS_WannabeMember">WannabeMember</h2>
<!-- backwards compatibility -->
<a id="schemawannabemember"></a>
<a id="schema_WannabeMember"></a>
<a id="tocSwannabemember"></a>
<a id="tocswannabemember"></a>

```json
{
  "email": "string",
  "job": "string",
  "role": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|none|
|job|string|false|none|none|
|role|string|true|none|none|

<h2 id="tocS_WannabeNetworkGroup">WannabeNetworkGroup</h2>
<!-- backwards compatibility -->
<a id="schemawannabenetworkgroup"></a>
<a id="schema_WannabeNetworkGroup"></a>
<a id="tocSwannabenetworkgroup"></a>
<a id="tocswannabenetworkgroup"></a>

```json
null
```

<h2 id="tocS_WannabeOauthApp">WannabeOauthApp</h2>
<!-- backwards compatibility -->
<a id="schemawannabeoauthapp"></a>
<a id="schema_WannabeOauthApp"></a>
<a id="tocSwannabeoauthapp"></a>
<a id="tocswannabeoauthapp"></a>

```json
{
  "name": "string",
  "owner": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|owner|string|false|none|none|

<h2 id="tocS_WannabeOrganisation">WannabeOrganisation</h2>
<!-- backwards compatibility -->
<a id="schemawannabeorganisation"></a>
<a id="schema_WannabeOrganisation"></a>
<a id="tocSwannabeorganisation"></a>
<a id="tocswannabeorganisation"></a>

```json
{
  "VAT": "string",
  "address": "string",
  "city": "string",
  "company": "string",
  "country": "string",
  "description": "string",
  "name": "string",
  "zipcode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VAT|string|false|none|none|
|address|string|false|none|The address of the organisation.|
|city|string|false|none|The city of the organisation.|
|company|string|false|none|The company's name of the organisation.|
|country|string|false|none|The country of the organisation.|
|description|string|true|none|The description of the organisation.|
|name|string|true|none|The name of the organisation.|
|zipcode|string|false|none|The zipcode of the city's organisation.|

<h2 id="tocS_WannabePlan">WannabePlan</h2>
<!-- backwards compatibility -->
<a id="schemawannabeplan"></a>
<a id="schema_WannabePlan"></a>
<a id="tocSwannabeplan"></a>
<a id="tocswannabeplan"></a>

```json
{
  "features": [
    {
      "name": "string",
      "type": "string",
      "value": "string"
    }
  ],
  "name": "string",
  "price": 0,
  "slug": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|features|[[WannabePlanFeature](#schemawannabeplanfeature)]|true|none|none|
|name|string|true|none|none|
|price|integer(int64)|true|none|none|
|slug|string|true|none|none|

<h2 id="tocS_WannabePlanFeature">WannabePlanFeature</h2>
<!-- backwards compatibility -->
<a id="schemawannabeplanfeature"></a>
<a id="schema_WannabePlanFeature"></a>
<a id="tocSwannabeplanfeature"></a>
<a id="tocswannabeplanfeature"></a>

```json
{
  "name": "string",
  "type": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|type|string|true|none|none|
|value|string|true|none|none|

<h2 id="tocS_WannabeUser">WannabeUser</h2>
<!-- backwards compatibility -->
<a id="schemawannabeuser"></a>
<a id="schema_WannabeUser"></a>
<a id="tocSwannabeuser"></a>
<a id="tocswannabeuser"></a>

```json
{
  "address": "string",
  "city": "string",
  "country": "string",
  "email": "string",
  "lang": "string",
  "name": "string",
  "password": "string",
  "phone": "string",
  "terms": false,
  "zipcode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|none|
|city|string|false|none|none|
|country|string|false|none|none|
|email|string|true|none|none|
|lang|string|false|none|none|
|name|string|false|none|none|
|password|string|true|none|none|
|phone|string|false|none|none|
|terms|boolean|true|none|none|
|zipcode|string|false|none|none|

<h2 id="tocS_WireGuardConfiguration">WireGuardConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemawireguardconfiguration"></a>
<a id="schema_WireGuardConfiguration"></a>
<a id="tocSwireguardconfiguration"></a>
<a id="tocswireguardconfiguration"></a>

```json
null
```

<h2 id="tocS_Zone">Zone</h2>
<!-- backwards compatibility -->
<a id="schemazone"></a>
<a id="schema_Zone"></a>
<a id="tocSzone"></a>
<a id="tocszone"></a>

```json
{
  "correspondingRegion": "string",
  "internal": false,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|correspondingRegion|string|true|none|none|
|internal|boolean|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_schema1">schema1</h2>
<!-- backwards compatibility -->
<a id="schemaschema1"></a>
<a id="schema_schema1"></a>
<a id="tocSschema1"></a>
<a id="tocsschema1"></a>

```json
{
  "job": "string",
  "member": {
    "avatar": "string",
    "email": "string",
    "id": "string",
    "name": "string"
  },
  "role": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|string|true|none|none|
|member|object|true|none|none|
|role|string|true|none|none|

<h2 id="tocS_schema2">schema2</h2>
<!-- backwards compatibility -->
<a id="schemaschema2"></a>
<a id="schema_schema2"></a>
<a id="tocSschema2"></a>
<a id="tocsschema2"></a>

```json
{
  "email": "string",
  "job": "string",
  "role": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|none|
|job|string|false|none|none|
|role|string|true|none|none|
