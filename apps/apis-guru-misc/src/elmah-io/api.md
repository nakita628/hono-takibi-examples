<h1 id="elmahio-api">elmah.io API v3</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This is the public REST API for elmah.io. All of the integrations communicates with elmah.io through this API.<br/><br/>For additional help getting started with the API, visit the following help articles:<br/><ul><li>[Using the REST API](https://docs.elmah.io/using-the-rest-api/)</li><li>[Where is my API key?](https://docs.elmah.io/where-is-my-api-key/)</li><li>[Where is my log ID?](https://docs.elmah.io/where-is-my-log-id/)</li><li>[How to configure API key permissions](https://docs.elmah.io/how-to-configure-api-key-permissions/)</li></ul>

# Authentication

* API Key (api_key)
    - Parameter Name: **api_key**, in: query. All requests on the elmah.io API needs to include an API key. The API key can be provided as part of the query string or as a request header. The name of the API key needs to be <code>api_key</code>.<br/><br/>Additional resources:<br/><ul><li>[Where is my API key?](https://docs.elmah.io/where-is-my-api-key/)</li><li>[How to configure API key permissions](https://docs.elmah.io/how-to-configure-api-key-permissions/)</li></ul>

<h1 id="elmahio-api-deployments">Deployments</h1>

## Fetch a list of deployments.

<a id="opIdDeployments_GetAll"></a>

> Code samples

```bash
curl "https://example.com/v3/deployments?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v3/deployments`

Required permission: `deployments_read`

> Example responses

> 200 Response

```json
[
  {
    "created": "1970-01-01T00:00:00Z",
    "createdBy": "string",
    "description": "string",
    "id": "string",
    "logId": "string",
    "userEmail": "string",
    "userName": "string",
    "version": "string"
  }
]
```

<h3 id="fetch-a-list-of-deployments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request for deployments successful.|Inline|
|401|Unauthorized|API key not valid or no access to resource.|None|
|402|Payment Required|Tried to call the deployment API without deployment tracking enabled or trial expired.|None|
|429|Too Many Requests|A maximum of 500 requests per minute and 3600 requests per hour are permitted|None|

<h3 id="fetch-a-list-of-deployments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Deployment](#schemadeployment)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Create a new deployment.

<a id="opIdDeployments_Create"></a>

> Code samples

```bash
curl "https://example.com/v3/deployments?api_key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "created": "1970-01-01T00:00:00Z",
    "description": "string",
    "logId": "string",
    "userEmail": "user@example.com",
    "userName": "string",
    "version": "string"
  }'
```

`POST /v3/deployments`

Required permission: `deployments_write`

> Body parameter

```json
{
  "created": "1970-01-01T00:00:00Z",
  "description": "string",
  "logId": "string",
  "userEmail": "user@example.com",
  "userName": "string",
  "version": "string"
}
```

<h3 id="create-a-new-deployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateDeployment](#schemacreatedeployment)|false|The deployment object to create.|
|» created|body|string(date-time)|false|When was this deployment created in UTC. Defaults to current time if not specified.|
|» description|body|string|false|Optional description of this deployment. Can be markdown or clear text.|
|» logId|body|string|false|As default, deployments are attached all logs of the organization. If you want a deployment to<br>attach to a single log only, set this to the ID of that log.|
|» userEmail|body|string(email)|false|The email of the person responsible for creating this deployment. This can be the email taken from<br>your deployment server (like Azure DevOps or Octopus).|
|» userName|body|string|false|The name of the person responsible for creating this deployment. This can be the name taken from<br>your deployment server (like Azure DevOps or Octopus).|
|» version|body|string|true|The version number of this deployment. The value of version can be a SemVer compliant string or any other<br>syntax that you are using as your version numbering scheme.|

> Example responses

> 201 Response

```json
{
  "location": "http://example.com"
}
```

<h3 id="create-a-new-deployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Deployment was created.|[CreateDeploymentResult](#schemacreatedeploymentresult)|
|400|Bad Request|Model not valid.|None|
|401|Unauthorized|API key not valid or no access to resource.|None|
|402|Payment Required|Tried to call the deployment API without deployment tracking enabled or trial expired.|None|
|404|Not Found|Specified log not found.|None|
|429|Too Many Requests|A maximum of 500 requests per minute and 3600 requests per hour are permitted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Fetch a deployment by its ID.

<a id="opIdDeployments_Get"></a>

> Code samples

```bash
curl "https://example.com/v3/deployments/string?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v3/deployments/{id}`

Required permission: `deployments_read`

<h3 id="fetch-a-deployment-by-its-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the deployment to fetch.|

> Example responses

> 200 Response

```json
{
  "created": "1970-01-01T00:00:00Z",
  "createdBy": "string",
  "description": "string",
  "id": "string",
  "logId": "string",
  "userEmail": "string",
  "userName": "string",
  "version": "string"
}
```

<h3 id="fetch-a-deployment-by-its-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request for deployment successful.|[Deployment](#schemadeployment)|
|400|Bad Request|Id not specified.|None|
|401|Unauthorized|API key not valid or no access to resource.|None|
|402|Payment Required|Deployment with specified id not found.|None|
|429|Too Many Requests|A maximum of 500 requests per minute and 3600 requests per hour are permitted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Delete a deployment by its ID.

<a id="opIdDeployments_Delete"></a>

> Code samples

```bash
curl "https://example.com/v3/deployments/string?api_key=${API_KEY}" \
  -X DELETE
```

`DELETE /v3/deployments/{id}`

This endpoint doesn't clear the version number of messages already annotated with this deployment version.<br/><br/>Required permission: `deployments_delete`

<h3 id="delete-a-deployment-by-its-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the deployment to delete.|

<h3 id="delete-a-deployment-by-its-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Deployment was deleted.|None|
|400|Bad Request|Id not specified.|None|
|401|Unauthorized|API key not valid or no access to resource.|None|
|402|Payment Required|Tried to call the deployment API without deployment tracking enabled or trial expired.|None|
|404|Not Found|Deployment with specified id not found.|None|
|429|Too Many Requests|A maximum of 500 requests per minute and 3600 requests per hour are permitted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="elmahio-api-heartbeats">Heartbeats</h1>

## Create a new heartbeat.

<a id="opIdHeartbeats_Create"></a>

> Code samples

```bash
curl "https://example.com/v3/heartbeats/string/string?api_key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "application": "string",
    "reason": "string",
    "result": "string",
    "took": 0,
    "version": "string"
  }'
```

`POST /v3/heartbeats/{logId}/{id}`

Required permission: `heartbeats_write`

> Body parameter

```json
{
  "application": "string",
  "reason": "string",
  "result": "string",
  "took": 0,
  "version": "string"
}
```

<h3 id="create-a-new-heartbeat-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the heartbeat check.|
|logId|path|string|true|The ID of the log containing the heartbeat check.|
|body|body|[CreateHeartbeat](#schemacreateheartbeat)|false|The details of the heartbeat.|
|» application|body|string|false|Optional string to identify which application logged this message. You can use this if you have multiple applications and services logging to the same log.<br>If not set, the application name "Heartbeats" will be set on all log messages generated from this heartbeat.|
|» reason|body|string|false|If result is "Degraded" or "Unhealthy" you can use this property to specify why.|
|» result|body|string|false|The result of this heartbeat. Can be "Healthy, "Degraded", or "Unhealthy". Defaults to "Healthy"|
|» took|body|integer(int64)|false|Optional long for specifying how many milliseconds it took to execute the task resulting in this heartbeat. This can be used to get a better overview<br>of how long a scheduled task or service is running or to figure out if the grace period should be increased.|
|» version|body|string|false|Optional string to identify which version of your application logged this message. If not specified, any errors, warnings, or information messages will get<br>the newest version number created through deployment tracking as with normal log messages.|

<h3 id="create-a-new-heartbeat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Heartbeat was created.|None|
|400|Bad Request|Model not valid.|None|
|401|Unauthorized|API key not valid or no access to resource.|None|
|402|Payment Required|Tried to call the heartbeats API without heartbeats enabled or trial expired.|None|
|404|Not Found|The specified log or heartbeat was not found.|None|
|429|Too Many Requests|A maximum of 500 requests per minute and 3600 requests per hour are permitted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="elmahio-api-logs">Logs</h1>

## Fetch a list of logs.

<a id="opIdLogs_GetAll"></a>

> Code samples

```bash
curl "https://example.com/v3/logs?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v3/logs`

Required permission: `logs_read`

> Example responses

> 200 Response

```json
[
  {
    "color": "string",
    "disabled": true,
    "environmentName": "string",
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="fetch-a-list-of-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request for logs successful.|Inline|
|401|Unauthorized|API key not valid or no access to resource.|None|
|402|Payment Required|Tried to call the logs API but the trial expired.|None|
|429|Too Many Requests|A maximum of 500 requests per minute and 3600 requests per hour are permitted|None|

<h3 id="fetch-a-list-of-logs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Log](#schemalog)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Create a new log.

<a id="opIdLogs_Create"></a>

> Code samples

```bash
curl "https://example.com/v3/logs?api_key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string"
  }'
```

`POST /v3/logs`

Required permission: `logs_write`

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="create-a-new-log-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateLog](#schemacreatelog)|false|The log object to create.|
|» name|body|string|true|Name of the new log.|

> Example responses

> 201 Response

```json
{
  "location": "http://example.com"
}
```

<h3 id="create-a-new-log-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Log where successfully created.|[CreateLogResult](#schemacreatelogresult)|
|400|Bad Request|Something wrong with the parameters.|None|
|401|Unauthorized|API key not valid or no access to resource.|None|
|402|Payment Required|Tried to call the logs API but the trial expired.|None|
|429|Too Many Requests|A maximum of 500 requests per minute and 3600 requests per hour are permitted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Fetch a log by its ID.

<a id="opIdLogs_Get"></a>

> Code samples

```bash
curl "https://example.com/v3/logs/string?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v3/logs/{id}`

Required permission: `logs_read`

<h3 id="fetch-a-log-by-its-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the log to fetch.|

> Example responses

> 200 Response

```json
{
  "color": "string",
  "disabled": true,
  "environmentName": "string",
  "id": "string",
  "name": "string"
}
```

<h3 id="fetch-a-log-by-its-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request for log successful.|[Log](#schemalog)|
|401|Unauthorized|API key not valid or no access to resource.|None|
|402|Payment Required|Tried to call the logs API but the trial expired.|None|
|404|Not Found|Log not found.|None|
|429|Too Many Requests|A maximum of 500 requests per minute and 3600 requests per hour are permitted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Help diagnose logging problems.

<a id="opIdLogs_Diagnose"></a>

> Code samples

```bash
curl "https://example.com/v3/logs/string/_diagnose?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v3/logs/{id}/_diagnose`

Required permission: `messages_write`

<h3 id="help-diagnose-logging-problems-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the log to diagnose.|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="help-diagnose-logging-problems-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Log was diagnosed.|Inline|
|401|Unauthorized|API key not valid or no access to resource.|None|
|402|Payment Required|Tried to call the logs API but the trial expired.|None|
|404|Not Found|Log not found.|None|
|429|Too Many Requests|A maximum of 500 requests per minute and 3600 requests per hour are permitted|None|

<h3 id="help-diagnose-logging-problems-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Disable a log by its ID.

<a id="opIdLogs_Disable"></a>

> Code samples

```bash
curl "https://example.com/v3/logs/string/_disable?api_key=${API_KEY}" \
  -X POST
```

`POST /v3/logs/{id}/_disable`

Required permission: `logs_write`

<h3 id="disable-a-log-by-its-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the log to disable.|

<h3 id="disable-a-log-by-its-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Log was disabled.|None|
|401|Unauthorized|API key not valid or no access to resource.|None|
|402|Payment Required|Tried to call the logs API but the trial expired.|None|
|404|Not Found|Log not found.|None|
|429|Too Many Requests|A maximum of 500 requests per minute and 3600 requests per hour are permitted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Enable a log by its ID.

<a id="opIdLogs_Enable"></a>

> Code samples

```bash
curl "https://example.com/v3/logs/string/_enable?api_key=${API_KEY}" \
  -X POST
```

`POST /v3/logs/{id}/_enable`

Required permission: `logs_write`

<h3 id="enable-a-log-by-its-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the log to enable.|

<h3 id="enable-a-log-by-its-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Log was enabled.|None|
|401|Unauthorized|API key not valid or no access to resource.|None|
|402|Payment Required|Tried to call the logs API but the trial expired.|None|
|404|Not Found|Log not found.|None|
|429|Too Many Requests|A maximum of 500 requests per minute and 3600 requests per hour are permitted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="elmahio-api-messages">Messages</h1>

## Fetch messages from a log.

<a id="opIdMessages_GetAll"></a>

> Code samples

```bash
curl "https://example.com/v3/messages/string?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v3/messages/{logId}`

Required permission: `messages_read`

<h3 id="fetch-messages-from-a-log-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|logId|path|string|true|The ID of the log containing the messages.|
|pageIndex|query|integer(int32)|false|The page number of the result.|
|pageSize|query|integer(int32)|false|The number of messages to load (max 100) or 15 if not set.|
|query|query|string|false|A full-text or Lucene query to limit the messages by.|
|from|query|string(date-time)|false|A start date and time to search from (not included).|
|to|query|string(date-time)|false|An end date and time to search to (not included).|
|includeHeaders|query|boolean|false|Include headers like server variables and cookies in the result (slower).|

> Example responses

> 200 Response

```json
{
  "messages": [
    {
      "application": "string",
      "breadcrumbs": [
        {
          "action": "string",
          "dateTime": "1970-01-01T00:00:00Z",
          "message": "string",
          "severity": "string"
        }
      ],
      "category": "string",
      "code": "string",
      "cookies": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "correlationId": "string",
      "data": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "dateTime": "1970-01-01T00:00:00Z",
      "detail": "string",
      "form": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "hostname": "string",
      "id": "string",
      "method": "string",
      "queryString": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "serverVariables": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "severity": "string",
      "source": "string",
      "statusCode": 0,
      "title": "string",
      "titleTemplate": "string",
      "type": "string",
      "url": "string",
      "user": "string",
      "version": "string"
    }
  ],
  "total": 0
}
```

<h3 id="fetch-messages-from-a-log-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Log found and may contain messages.|[MessagesResult](#schemamessagesresult)|
|400|Bad Request|Something wrong with the query parameters.|None|
|401|Unauthorized|API key not valid or no access to resource.|None|
|402|Payment Required|Tried to call the logs API but the trial expired.|None|
|429|Too Many Requests|A maximum of 500 requests per minute and 3600 requests per hour are permitted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Create a new message.

<a id="opIdMessages_Create"></a>

> Code samples

```bash
curl "https://example.com/v3/messages/string?api_key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "application": "string",
    "breadcrumbs": [
      {
        "action": "string",
        "dateTime": "1970-01-01T00:00:00Z",
        "message": "string",
        "severity": "string"
      }
    ],
    "category": "string",
    "code": "string",
    "cookies": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "correlationId": "string",
    "data": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "dateTime": "1970-01-01T00:00:00Z",
    "detail": "string",
    "form": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "hostname": "string",
    "method": "string",
    "queryString": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "serverVariables": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "severity": "string",
    "source": "string",
    "statusCode": 0,
    "title": "string",
    "titleTemplate": "string",
    "type": "string",
    "url": "string",
    "user": "string",
    "version": "string"
  }'
```

`POST /v3/messages/{logId}`

Required permission: `messages_write`

> Body parameter

```json
{
  "application": "string",
  "breadcrumbs": [
    {
      "action": "string",
      "dateTime": "1970-01-01T00:00:00Z",
      "message": "string",
      "severity": "string"
    }
  ],
  "category": "string",
  "code": "string",
  "cookies": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "correlationId": "string",
  "data": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "dateTime": "1970-01-01T00:00:00Z",
  "detail": "string",
  "form": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "hostname": "string",
  "method": "string",
  "queryString": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "serverVariables": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "severity": "string",
  "source": "string",
  "statusCode": 0,
  "title": "string",
  "titleTemplate": "string",
  "type": "string",
  "url": "string",
  "user": "string",
  "version": "string"
}
```

<h3 id="create-a-new-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|logId|path|string|true|The ID of the log which should contain the new message.|
|body|body|[CreateMessage](#schemacreatemessage)|false|The message object to create.|
|» application|body|string|false|Used to identify which application logged this message. You can use this if you have multiple applications and services logging to the same log|
|» breadcrumbs|body|[[Breadcrumb](#schemabreadcrumb)]|false|A list of breadcrumbs preceding this log message.|
|» category|body|string|false|The log message category. Category can be a string of choice but typically contain a logging category set by a logging framework like NLog or Serilog.<br>When logging through a logging framework, this field will be provided by the framework and not something that needs to be set manually.|
|» code|body|string|false|Code can be used to include source code related to the log message. The code will typically span from a few lines before the line causing the log message<br>to a few lines after. For now, all lines above 21 will be removed. This makes room for showing 10 lines before the logging line, the logging line, and<br>10 lines after the logging line. Don't include a very large string in this property since that will quickly make the entire messages exceed the max limit<br>of 256 kb.|
|» cookies|body|[[Item](#schemaitem)]|false|A key/value pair of cookies. This property only makes sense for logging messages related to web requests.|
|» correlationId|body|string|false|CorrelationId can be used to group similar log messages together into a single discoverable batch. A correlation ID could be a session ID from ASP.NET Core,<br>a unique string spanning multiple microsservices handling the same request, or similar.|
|» data|body|[[Item](#schemaitem)]|false|A key/value pair of user-defined fields and their values. When logging an exception, the Data dictionary of<br>the exception is copied to this property. You can add additional key/value pairs, by modifying the Data<br>dictionary on the exception or by supplying additional key/values to this API.|
|» dateTime|body|string(date-time)|false|The date and time in UTC of the message. If you don't provide us with a value in dateTime, we will set the current date and time in UTC.|
|» detail|body|string|false|A longer description of the message. For errors this could be a stacktrace, but it's really up to you what to log in there.|
|» form|body|[[Item](#schemaitem)]|false|A key/value pair of form fields and their values. This property makes sense if logging message related to users inputting data in a form.|
|» hostname|body|string|false|The hostname of the server logging the message.|
|» method|body|string|false|If message relates to a HTTP request, you may send the HTTP method of that request. If you don't provide us with a method, we will try to find a key named REQUEST_METHOD in serverVariables.|
|» queryString|body|[[Item](#schemaitem)]|false|A key/value pair of query string parameters. This property makes sense if logging message related to a HTTP request.|
|» serverVariables|body|[[Item](#schemaitem)]|false|A key/value pair of server values. Server variables are typically related to handling requests in a webserver but could be used for other types of information as well.|
|» severity|body|string|false|An enum value representing the severity of this message. The following values are allowed: Verbose, Debug, Information, Warning, Error, Fatal|
|» source|body|string|false|The source of the code logging the message. This could be the assembly name.|
|» statusCode|body|integer(int32)|false|If the message logged relates to a HTTP status code, you can put the code in this property. This would probably only be relevant for errors,<br>but could be used for logging successful status codes as well.|
|» title|body|string|false|The textual title or headline of the message to log.|
|» titleTemplate|body|string|false|The title template of the message to log. This property can be used from logging frameworks that supports<br>structured logging like: "{user} says {quote}". In the example, titleTemplate will be this string and title<br>will be "Gilfoyle says It's not magic. It's talent and sweat".|
|» type|body|string|false|The type of message. If logging an error, the type of the exception would go into type but you can put anything in there, that makes sense for your domain.|
|» url|body|string|false|If message relates to a HTTP request, you may send the URL of that request. If you don't provide us with an URL, we will try to find a key named URL in serverVariables.|
|» user|body|string|false|An identification of the user triggering this message. You can put the users email address or your user key into this property.|
|» version|body|string|false|Versions can be used to distinguish messages from different versions of your software. The value of version can be a SemVer compliant string or any other<br>syntax that you are using as your version numbering scheme.|

> Example responses

> 200 Response

```json
{
  "location": "http://example.com"
}
```

> 201 Response

```json
{
  "location": "http://example.com"
}
```

<h3 id="create-a-new-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Message was not created.|[CreateMessageResult](#schemacreatemessageresult)|
|201|Created|Message was successfully created.|[CreateMessageResult](#schemacreatemessageresult)|
|400|Bad Request|Something wrong with the query parameters.|None|
|401|Unauthorized|API key not valid or no access to resource.|None|
|402|Payment Required|Tried to call the logs API but the trial expired.|None|
|404|Not Found|Log not found.|None|
|413|Payload Too Large|Message too large. Messages must not exceed 256 kb. As additional information, some fields are trimmed down when processed on the backend.|None|
|429|Too Many Requests|A maximum of 500 requests per minute and 3600 requests per hour are permitted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Deletes a list of messages by logid and query.

<a id="opIdMessages_DeleteAll"></a>

> Code samples

```bash
curl "https://example.com/v3/messages/string?api_key=${API_KEY}" \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -d '{
    "from": "1970-01-01T00:00:00Z",
    "query": "string",
    "to": "1970-01-01T00:00:00Z"
  }'
```

`DELETE /v3/messages/{logId}`

Required permission: `messages_delete`

> Body parameter

```json
{
  "from": "1970-01-01T00:00:00Z",
  "query": "string",
  "to": "1970-01-01T00:00:00Z"
}
```

<h3 id="deletes-a-list-of-messages-by-logid-and-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|logId|path|string|true|The ID of the log containing the message.|
|body|body|[Search](#schemasearch)|false|A search object containing query, time filters etc.|
|» from|body|string(date-time)|false|Search from this date.|
|» query|body|string|false|Lucene query.|
|» to|body|string(date-time)|false|Search to this date.|

<h3 id="deletes-a-list-of-messages-by-logid-and-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Messages where deleted.|None|
|400|Bad Request|Something wrong with the query parameters.|None|
|401|Unauthorized|API key not valid or no access to resource.|None|
|402|Payment Required|Tried to call the logs API but the trial expired.|None|
|404|Not Found|Log not found.|None|
|429|Too Many Requests|A maximum of 500 requests per minute and 3600 requests per hour are permitted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Create one or more new messages.

<a id="opIdMessages_CreateBulk"></a>

> Code samples

```bash
curl "https://example.com/v3/messages/string/_bulk?api_key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    {
      "application": "string",
      "breadcrumbs": [
        {
          "action": "string",
          "dateTime": "1970-01-01T00:00:00Z",
          "message": "string",
          "severity": "string"
        }
      ],
      "category": "string",
      "code": "string",
      "cookies": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "correlationId": "string",
      "data": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "dateTime": "1970-01-01T00:00:00Z",
      "detail": "string",
      "form": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "hostname": "string",
      "method": "string",
      "queryString": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "serverVariables": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "severity": "string",
      "source": "string",
      "statusCode": 0,
      "title": "string",
      "titleTemplate": "string",
      "type": "string",
      "url": "string",
      "user": "string",
      "version": "string"
    }
  ]'
```

`POST /v3/messages/{logId}/_bulk`

Required permission: `messages_write`

> Body parameter

```json
[
  {
    "application": "string",
    "breadcrumbs": [
      {
        "action": "string",
        "dateTime": "1970-01-01T00:00:00Z",
        "message": "string",
        "severity": "string"
      }
    ],
    "category": "string",
    "code": "string",
    "cookies": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "correlationId": "string",
    "data": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "dateTime": "1970-01-01T00:00:00Z",
    "detail": "string",
    "form": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "hostname": "string",
    "method": "string",
    "queryString": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "serverVariables": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "severity": "string",
    "source": "string",
    "statusCode": 0,
    "title": "string",
    "titleTemplate": "string",
    "type": "string",
    "url": "string",
    "user": "string",
    "version": "string"
  }
]
```

<h3 id="create-one-or-more-new-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|logId|path|string|true|The ID of the log which should contain the new messages.|
|body|body|[[CreateMessage](#schemacreatemessage)]|false|The messages to create.|

> Example responses

> 200 Response

```json
[
  {
    "location": "http://example.com",
    "statusCode": 0
  }
]
```

<h3 id="create-one-or-more-new-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Zero or more messages where successfully created. Check the response body for details.|Inline|
|400|Bad Request|Something wrong with the query parameters.|None|
|401|Unauthorized|API key not valid or no access to resource.|None|
|402|Payment Required|Tried to call the logs API but the trial expired.|None|
|404|Not Found|Log not found.|None|
|429|Too Many Requests|A maximum of 500 requests per minute and 3600 requests per hour are permitted|None|

<h3 id="create-one-or-more-new-messages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CreateBulkMessageResult](#schemacreatebulkmessageresult)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Mark a list of messages as fixed by logid and query.

<a id="opIdMessages_FixAll"></a>

> Code samples

```bash
curl "https://example.com/v3/messages/string/_fix?api_key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "from": "1970-01-01T00:00:00Z",
    "query": "string",
    "to": "1970-01-01T00:00:00Z"
  }'
```

`POST /v3/messages/{logId}/_fix`

Required permission: `messages_write`

> Body parameter

```json
{
  "from": "1970-01-01T00:00:00Z",
  "query": "string",
  "to": "1970-01-01T00:00:00Z"
}
```

<h3 id="mark-a-list-of-messages-as-fixed-by-logid-and-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|logId|path|string|true|The ID of the log containing the messages.|
|body|body|[Search](#schemasearch)|false|A search object containing query, time filters etc.|
|» from|body|string(date-time)|false|Search from this date.|
|» query|body|string|false|Lucene query.|
|» to|body|string(date-time)|false|Search to this date.|

<h3 id="mark-a-list-of-messages-as-fixed-by-logid-and-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Messages where marked as fixed.|None|
|400|Bad Request|Something wrong with the query parameters.|None|
|401|Unauthorized|API key not valid or no access to resource.|None|
|402|Payment Required|Tried to call the logs API but the trial expired.|None|
|404|Not Found|Log not found.|None|
|429|Too Many Requests|A maximum of 500 requests per minute and 3600 requests per hour are permitted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Fetch a message by its ID.

<a id="opIdMessages_Get"></a>

> Code samples

```bash
curl "https://example.com/v3/messages/string/string?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v3/messages/{logId}/{id}`

Required permission: `messages_read`

<h3 id="fetch-a-message-by-its-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the message to fetch.|
|logId|path|string|true|The ID of the log containing the message.|

> Example responses

> 200 Response

```json
{
  "application": "string",
  "breadcrumbs": [
    {
      "action": "string",
      "dateTime": "1970-01-01T00:00:00Z",
      "message": "string",
      "severity": "string"
    }
  ],
  "category": "string",
  "code": "string",
  "cookies": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "correlationId": "string",
  "data": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "dateTime": "1970-01-01T00:00:00Z",
  "detail": "string",
  "form": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "hostname": "string",
  "id": "string",
  "method": "string",
  "queryString": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "serverVariables": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "severity": "string",
  "source": "string",
  "statusCode": 0,
  "title": "string",
  "titleTemplate": "string",
  "type": "string",
  "url": "string",
  "user": "string",
  "version": "string"
}
```

<h3 id="fetch-a-message-by-its-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Message found.|[Message](#schemamessage)|
|400|Bad Request|Something wrong with the query parameters.|None|
|401|Unauthorized|API key not valid or no access to resource.|None|
|402|Payment Required|Tried to call the logs API but the trial expired.|None|
|404|Not Found|Message not found.|None|
|429|Too Many Requests|A maximum of 500 requests per minute and 3600 requests per hour are permitted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Delete a message by its ID.

<a id="opIdMessages_Delete"></a>

> Code samples

```bash
curl "https://example.com/v3/messages/string/string?api_key=${API_KEY}" \
  -X DELETE
```

`DELETE /v3/messages/{logId}/{id}`

Required permission: `messages_delete`

<h3 id="delete-a-message-by-its-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the message to delete.|
|logId|path|string|true|The ID of the log containing the message.|

<h3 id="delete-a-message-by-its-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Message where deleted.|None|
|400|Bad Request|Something wrong with the query parameters.|None|
|401|Unauthorized|API key not valid or no access to resource.|None|
|402|Payment Required|Tried to call the logs API but the trial expired.|None|
|404|Not Found|Log or message not found.|None|
|429|Too Many Requests|A maximum of 500 requests per minute and 3600 requests per hour are permitted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Fix a message by its ID.

<a id="opIdMessages_Fix"></a>

> Code samples

```bash
curl "https://example.com/v3/messages/string/string/_fix?api_key=${API_KEY}" \
  -X POST
```

`POST /v3/messages/{logId}/{id}/_fix`

Required permission: `messages_write`

<h3 id="fix-a-message-by-its-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the message to fix.|
|logId|path|string|true|The ID of the log containing the message.|
|markAllAsFixed|query|boolean|false|If set to true, all instances of the log message are set to fixed.|

<h3 id="fix-a-message-by-its-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Message was fixed.|None|
|400|Bad Request|Something wrong with the query parameters.|None|
|401|Unauthorized|API key not valid or no access to resource.|None|
|402|Payment Required|Tried to call the logs API but the trial expired.|None|
|404|Not Found|Message not found.|None|
|429|Too Many Requests|A maximum of 500 requests per minute and 3600 requests per hour are permitted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Hide a message by its ID.

<a id="opIdMessages_Hide"></a>

> Code samples

```bash
curl "https://example.com/v3/messages/string/string/_hide?api_key=${API_KEY}" \
  -X POST
```

`POST /v3/messages/{logId}/{id}/_hide`

Required permission: `messages_write`

<h3 id="hide-a-message-by-its-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the message to hide.|
|logId|path|string|true|The ID of the log containing the message.|

<h3 id="hide-a-message-by-its-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Message was hidden.|None|
|400|Bad Request|Something wrong with the query parameters.|None|
|401|Unauthorized|API key not valid or no access to resource.|None|
|402|Payment Required|Tried to call the logs API but the trial expired.|None|
|404|Not Found|Message not found.|None|
|429|Too Many Requests|A maximum of 500 requests per minute and 3600 requests per hour are permitted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="elmahio-api-sourcemaps">SourceMaps</h1>

## Create or update a translation between a minified JavaScript path to the minified JavaScript and source map files.

<a id="opIdSourceMaps_CreateOrUpdate"></a>

> Code samples

```bash
curl "https://example.com/v3/sourcemaps/string?api_key=${API_KEY}" \
  -X POST \
  -F 'MinifiedJavaScript=@/path/to/file' \
  -F 'Path=http://example.com' \
  -F 'SourceMap=@/path/to/file'
```

`POST /v3/sourcemaps/{logId}`

Required permission: `sourcemaps_write`

> Body parameter

```yaml
MinifiedJavaScript: string
Path: "http://example.com"
SourceMap: string
```

<h3 id="create-or-update-a-translation-between-a-minified-javascript-path-to-the-minified-javascript-and-source-map-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|logId|path|string|true|The ID of the log which should contain the minified JavaScript and source map.|
|body|body|object|true|none|
|» MinifiedJavaScript|body|string(binary)|true|The minified JavaScript file. Only files with an extension of .js and content type of text/javascript will be accepted.|
|» Path|body|string(uri)|true|An URL to the online minified JavaScript file. The URL can be absolute or relative but will always be converted to a relative path (no protocol, domain, and query parameters).<br>elmah.io uses this path to lookup any lines in a JS stack trace that will need de-minification.|
|» SourceMap|body|string(binary)|true|The source map file. Only files with an extension of .map and content type of application/json will be accepted.|

<h3 id="create-or-update-a-translation-between-a-minified-javascript-path-to-the-minified-javascript-and-source-map-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Source map was successfully created.|None|
|400|Bad Request|Something wrong with the query parameters or form.|None|
|401|Unauthorized|API key not valid or no access to resource.|None|
|402|Payment Required|Tried to call the logs API but the trial expired.|None|
|404|Not Found|Log not found.|None|
|429|Too Many Requests|A maximum of 500 requests per minute and 3600 requests per hour are permitted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="elmahio-api-uptimechecks">UptimeChecks</h1>

## Fetch a list of uptime checks. Currently in closed beta. Get in contact to get access to this endpoint.

<a id="opIdUptimeChecks_GetAll"></a>

> Code samples

```bash
curl "https://example.com/v3/uptimechecks?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /v3/uptimechecks`

Required permission: `uptimechecks_read`

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "name": "string",
    "status": "string",
    "url": "string"
  }
]
```

<h3 id="fetch-a-list-of-uptime-checks-currently-in-closed-beta-get-in-contact-to-get-access-to-this-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request for uptime checks successful.|Inline|
|401|Unauthorized|API key not valid or no access to resource.|None|
|402|Payment Required|Tried to call the uptime checks API but the trial expired.|None|
|429|Too Many Requests|A maximum of 500 requests per minute and 3600 requests per hour are permitted|None|

<h3 id="fetch-a-list-of-uptime-checks-currently-in-closed-beta-get-in-contact-to-get-access-to-this-endpoint-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[UptimeCheck](#schemauptimecheck)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

# Schemas

<h2 id="tocS_Breadcrumb">Breadcrumb</h2>
<!-- backwards compatibility -->
<a id="schemabreadcrumb"></a>
<a id="schema_Breadcrumb"></a>
<a id="tocSbreadcrumb"></a>
<a id="tocsbreadcrumb"></a>

```json
{
  "action": "string",
  "dateTime": "1970-01-01T00:00:00Z",
  "message": "string",
  "severity": "string"
}
```

A breadcrumb represent a step preceding a log message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|An action representing the breadcrumb. You can set a custom action or use one of the built-in: click, submit, navigation, request, error.|
|dateTime|string(date-time)|false|none|The date and time in UTC of the breadcrumb. If no date and time is provided, we will use the current date and time in UTC.|
|message|string|false|none|A message representing the breadcrumb. This should elaborate on the action.|
|severity|string|false|none|An enum value representing the severity of this breadcrumb. The following values are allowed: Verbose, Debug, Information, Warning, Error, Fatal.|

<h2 id="tocS_CreateBulkMessageResult">CreateBulkMessageResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatebulkmessageresult"></a>
<a id="schema_CreateBulkMessageResult"></a>
<a id="tocScreatebulkmessageresult"></a>
<a id="tocscreatebulkmessageresult"></a>

```json
{
  "location": "http://example.com",
  "statusCode": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|string(uri)|false|none|The location of the created message if StatusCode equals Created.|
|statusCode|integer(int32)|false|none|Status code of the individual messages as if it were being created through the non-bulk endpoint.<br>If a message was succesfully created, the status code will be 201 and location will contain an URL.<br>If a message was ignored, the status code will be 200 and the location will be empty.|

<h2 id="tocS_CreateDeployment">CreateDeployment</h2>
<!-- backwards compatibility -->
<a id="schemacreatedeployment"></a>
<a id="schema_CreateDeployment"></a>
<a id="tocScreatedeployment"></a>
<a id="tocscreatedeployment"></a>

```json
{
  "created": "1970-01-01T00:00:00Z",
  "description": "string",
  "logId": "string",
  "userEmail": "user@example.com",
  "userName": "string",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|false|none|When was this deployment created in UTC. Defaults to current time if not specified.|
|description|string|false|none|Optional description of this deployment. Can be markdown or clear text.|
|logId|string|false|none|As default, deployments are attached all logs of the organization. If you want a deployment to<br>attach to a single log only, set this to the ID of that log.|
|userEmail|string(email)|false|none|The email of the person responsible for creating this deployment. This can be the email taken from<br>your deployment server (like Azure DevOps or Octopus).|
|userName|string|false|none|The name of the person responsible for creating this deployment. This can be the name taken from<br>your deployment server (like Azure DevOps or Octopus).|
|version|string|true|none|The version number of this deployment. The value of version can be a SemVer compliant string or any other<br>syntax that you are using as your version numbering scheme.|

<h2 id="tocS_CreateDeploymentResult">CreateDeploymentResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatedeploymentresult"></a>
<a id="schema_CreateDeploymentResult"></a>
<a id="tocScreatedeploymentresult"></a>
<a id="tocscreatedeploymentresult"></a>

```json
{
  "location": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|string(uri)|false|none|The location of the created deployment.|

<h2 id="tocS_CreateHeartbeat">CreateHeartbeat</h2>
<!-- backwards compatibility -->
<a id="schemacreateheartbeat"></a>
<a id="schema_CreateHeartbeat"></a>
<a id="tocScreateheartbeat"></a>
<a id="tocscreateheartbeat"></a>

```json
{
  "application": "string",
  "reason": "string",
  "result": "string",
  "took": 0,
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application|string|false|none|Optional string to identify which application logged this message. You can use this if you have multiple applications and services logging to the same log.<br>If not set, the application name "Heartbeats" will be set on all log messages generated from this heartbeat.|
|reason|string|false|none|If result is "Degraded" or "Unhealthy" you can use this property to specify why.|
|result|string|false|none|The result of this heartbeat. Can be "Healthy, "Degraded", or "Unhealthy". Defaults to "Healthy"|
|took|integer(int64)|false|none|Optional long for specifying how many milliseconds it took to execute the task resulting in this heartbeat. This can be used to get a better overview<br>of how long a scheduled task or service is running or to figure out if the grace period should be increased.|
|version|string|false|none|Optional string to identify which version of your application logged this message. If not specified, any errors, warnings, or information messages will get<br>the newest version number created through deployment tracking as with normal log messages.|

<h2 id="tocS_CreateLog">CreateLog</h2>
<!-- backwards compatibility -->
<a id="schemacreatelog"></a>
<a id="schema_CreateLog"></a>
<a id="tocScreatelog"></a>
<a id="tocscreatelog"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the new log.|

<h2 id="tocS_CreateLogResult">CreateLogResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatelogresult"></a>
<a id="schema_CreateLogResult"></a>
<a id="tocScreatelogresult"></a>
<a id="tocscreatelogresult"></a>

```json
{
  "location": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|string(uri)|false|none|The location of the created log.|

<h2 id="tocS_CreateMessage">CreateMessage</h2>
<!-- backwards compatibility -->
<a id="schemacreatemessage"></a>
<a id="schema_CreateMessage"></a>
<a id="tocScreatemessage"></a>
<a id="tocscreatemessage"></a>

```json
{
  "application": "string",
  "breadcrumbs": [
    {
      "action": "string",
      "dateTime": "1970-01-01T00:00:00Z",
      "message": "string",
      "severity": "string"
    }
  ],
  "category": "string",
  "code": "string",
  "cookies": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "correlationId": "string",
  "data": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "dateTime": "1970-01-01T00:00:00Z",
  "detail": "string",
  "form": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "hostname": "string",
  "method": "string",
  "queryString": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "serverVariables": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "severity": "string",
  "source": "string",
  "statusCode": 0,
  "title": "string",
  "titleTemplate": "string",
  "type": "string",
  "url": "string",
  "user": "string",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application|string|false|none|Used to identify which application logged this message. You can use this if you have multiple applications and services logging to the same log|
|breadcrumbs|[[Breadcrumb](#schemabreadcrumb)]|false|none|A list of breadcrumbs preceding this log message.|
|category|string|false|none|The log message category. Category can be a string of choice but typically contain a logging category set by a logging framework like NLog or Serilog.<br>When logging through a logging framework, this field will be provided by the framework and not something that needs to be set manually.|
|code|string|false|none|Code can be used to include source code related to the log message. The code will typically span from a few lines before the line causing the log message<br>to a few lines after. For now, all lines above 21 will be removed. This makes room for showing 10 lines before the logging line, the logging line, and<br>10 lines after the logging line. Don't include a very large string in this property since that will quickly make the entire messages exceed the max limit<br>of 256 kb.|
|cookies|[[Item](#schemaitem)]|false|none|A key/value pair of cookies. This property only makes sense for logging messages related to web requests.|
|correlationId|string|false|none|CorrelationId can be used to group similar log messages together into a single discoverable batch. A correlation ID could be a session ID from ASP.NET Core,<br>a unique string spanning multiple microsservices handling the same request, or similar.|
|data|[[Item](#schemaitem)]|false|none|A key/value pair of user-defined fields and their values. When logging an exception, the Data dictionary of<br>the exception is copied to this property. You can add additional key/value pairs, by modifying the Data<br>dictionary on the exception or by supplying additional key/values to this API.|
|dateTime|string(date-time)|false|none|The date and time in UTC of the message. If you don't provide us with a value in dateTime, we will set the current date and time in UTC.|
|detail|string|false|none|A longer description of the message. For errors this could be a stacktrace, but it's really up to you what to log in there.|
|form|[[Item](#schemaitem)]|false|none|A key/value pair of form fields and their values. This property makes sense if logging message related to users inputting data in a form.|
|hostname|string|false|none|The hostname of the server logging the message.|
|method|string|false|none|If message relates to a HTTP request, you may send the HTTP method of that request. If you don't provide us with a method, we will try to find a key named REQUEST_METHOD in serverVariables.|
|queryString|[[Item](#schemaitem)]|false|none|A key/value pair of query string parameters. This property makes sense if logging message related to a HTTP request.|
|serverVariables|[[Item](#schemaitem)]|false|none|A key/value pair of server values. Server variables are typically related to handling requests in a webserver but could be used for other types of information as well.|
|severity|string|false|none|An enum value representing the severity of this message. The following values are allowed: Verbose, Debug, Information, Warning, Error, Fatal|
|source|string|false|none|The source of the code logging the message. This could be the assembly name.|
|statusCode|integer(int32)|false|none|If the message logged relates to a HTTP status code, you can put the code in this property. This would probably only be relevant for errors,<br>but could be used for logging successful status codes as well.|
|title|string|false|none|The textual title or headline of the message to log.|
|titleTemplate|string|false|none|The title template of the message to log. This property can be used from logging frameworks that supports<br>structured logging like: "{user} says {quote}". In the example, titleTemplate will be this string and title<br>will be "Gilfoyle says It's not magic. It's talent and sweat".|
|type|string|false|none|The type of message. If logging an error, the type of the exception would go into type but you can put anything in there, that makes sense for your domain.|
|url|string|false|none|If message relates to a HTTP request, you may send the URL of that request. If you don't provide us with an URL, we will try to find a key named URL in serverVariables.|
|user|string|false|none|An identification of the user triggering this message. You can put the users email address or your user key into this property.|
|version|string|false|none|Versions can be used to distinguish messages from different versions of your software. The value of version can be a SemVer compliant string or any other<br>syntax that you are using as your version numbering scheme.|

<h2 id="tocS_CreateMessageResult">CreateMessageResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatemessageresult"></a>
<a id="schema_CreateMessageResult"></a>
<a id="tocScreatemessageresult"></a>
<a id="tocscreatemessageresult"></a>

```json
{
  "location": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|string(uri)|false|none|The location of the created message.|

<h2 id="tocS_Deployment">Deployment</h2>
<!-- backwards compatibility -->
<a id="schemadeployment"></a>
<a id="schema_Deployment"></a>
<a id="tocSdeployment"></a>
<a id="tocsdeployment"></a>

```json
{
  "created": "1970-01-01T00:00:00Z",
  "createdBy": "string",
  "description": "string",
  "id": "string",
  "logId": "string",
  "userEmail": "string",
  "userName": "string",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|false|none|When was this deployment created.|
|createdBy|string|false|none|The elmah.io id of the user creating this deployment. Since deployments are created on a subscription,<br>the CreatedBy will contain the id of the user with the subscription.|
|description|string|false|none|Sescription of this deployment in markdown or clear text.|
|id|string|false|none|The ID of this deployment.|
|logId|string|false|none|If the deployment is attached a single log, this property is set to the ID of that log.<br>If null, the deployment is attached all logs on the organization.|
|userEmail|string|false|none|The email of the person responsible for creating this deployment.|
|userName|string|false|none|The name of the person responsible for creating this deployment.|
|version|string|false|none|The version number of this deployment. The value of version can be a SemVer compliant string or any other<br>syntax that you are using as your version numbering scheme.|

<h2 id="tocS_Item">Item</h2>
<!-- backwards compatibility -->
<a id="schemaitem"></a>
<a id="schema_Item"></a>
<a id="tocSitem"></a>
<a id="tocsitem"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

Represents a key value pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|The key of the item.|
|value|string|false|none|The value of the item.|

<h2 id="tocS_Log">Log</h2>
<!-- backwards compatibility -->
<a id="schemalog"></a>
<a id="schema_Log"></a>
<a id="tocSlog"></a>
<a id="tocslog"></a>

```json
{
  "color": "string",
  "disabled": true,
  "environmentName": "string",
  "id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|string|false|none|Color of the log. The color will always be one of the following (green being the default):<br>green, lightgreen, lime, yellow, orange, deeporange, red, pink, purple, deeppurple, blue, lightblue|
|disabled|boolean|false|none|Returns true if the log is currently disabled. A log can be disabled either through the API<br>or in the elmah.io UI.|
|environmentName|string|false|none|Environment name this log is in or "Other" if not in an environment.<br>"Other" is chosen over null to mimic the experience in the elmah.io UI.|
|id|string|false|none|ID of the log.|
|name|string|false|none|Name of the log.|

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
{
  "application": "string",
  "breadcrumbs": [
    {
      "action": "string",
      "dateTime": "1970-01-01T00:00:00Z",
      "message": "string",
      "severity": "string"
    }
  ],
  "category": "string",
  "code": "string",
  "cookies": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "correlationId": "string",
  "data": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "dateTime": "1970-01-01T00:00:00Z",
  "detail": "string",
  "form": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "hostname": "string",
  "id": "string",
  "method": "string",
  "queryString": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "serverVariables": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "severity": "string",
  "source": "string",
  "statusCode": 0,
  "title": "string",
  "titleTemplate": "string",
  "type": "string",
  "url": "string",
  "user": "string",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application|string|false|none|Used to identify which application logged this message. You can use this if you have multiple applications and services logging to the same log|
|breadcrumbs|[[Breadcrumb](#schemabreadcrumb)]|false|none|A list of breadcrumbs preceding this log message.|
|category|string|false|none|The log message category. Category can be a string of choice but typically contain a logging category set by a logging framework like NLog or Serilog.|
|code|string|false|none|Code can be used to include source code related to the log message. The code will typically span from a few lines before the line causing the log message<br>to a few lines after. For now, all lines above 21 will be removed. This makes room for showing 10 lines before the logging line, the logging line, and<br>10 lines after the logging line. Don't include a very large string in this property since that will quickly make the entire messages exceed the max limit<br>of 256 kb.|
|cookies|[[Item](#schemaitem)]|false|none|A key/value pair of cookies. This property only makes sense for logging messages related to web requests.|
|correlationId|string|false|none|CorrelationId can be used to group similar log messages together into a single discoverable batch. A correlation ID could be a session ID from ASP.NET Core,<br>a unique string spanning multiple microsservices handling the same request, or similar.|
|data|[[Item](#schemaitem)]|false|none|A key/value pair of user-defined fields and their values. When logging an exception, the Data dictionary of<br>the exception is copied to this property. You can add additional key/value pairs, by modifying the Data<br>dictionary on the exception or by supplying additional key/values to this API.|
|dateTime|string(date-time)|false|none|The date and time in UTC of the message. If you don't provide us with a value in dateTime, we will set the current date and time in UTC.|
|detail|string|false|none|A longer description of the message. For errors this could be a stacktrace, but it's really up to you what to log in there.|
|form|[[Item](#schemaitem)]|false|none|A key/value pair of form fields and their values. This property makes sense if logging message related to users inputting data in a form.|
|hostname|string|false|none|The hostname of the server logging the message.|
|id|string|false|none|The ID of this message.|
|method|string|false|none|If message relates to a HTTP request, you may send the HTTP method of that request. If you don't provide us with a method, we will try to find a key named REQUEST_METHOD in serverVariables.|
|queryString|[[Item](#schemaitem)]|false|none|A key/value pair of query string parameters. This property makes sense if logging message related to a HTTP request.|
|serverVariables|[[Item](#schemaitem)]|false|none|A key/value pair of server values. Server variables are typically related to handling requests in a webserver but could be used for other types of information as well.|
|severity|string|false|none|An enum value representing the severity of this message. The following values are allowed: Verbose, Debug, Information, Warning, Error, Fatal|
|source|string|false|none|The source of the code logging the message. This could be the assembly name.|
|statusCode|integer(int32)|false|none|If the message logged relates to a HTTP status code, you can put the code in this property. This would probably only be relevant for errors,<br>but could be used for logging successful status codes as well.|
|title|string|false|none|The textual title or headline of the message to log.|
|titleTemplate|string|false|none|The title template of the message to log. This property can be used from logging frameworks that supports<br>structured logging like: "{user} says {quote}". In the example, titleTemplate will be this string and title<br>will be "Gilfoyle says It's not magic. It's talent and sweat".|
|type|string|false|none|The type of message. If logging an error, the type of the exception would go into type but you can put anything in there, that makes sense for your domain.|
|url|string|false|none|If message relates to a HTTP request, you may send the URL of that request. If you don't provide us with an URL, we will try to find a key named URL in serverVariables.|
|user|string|false|none|An identification of the user triggering this message. You can put the users email address or your user key into this property.|
|version|string|false|none|Versions can be used to distinguish messages from different versions of your software. The value of version can be a SemVer compliant string or any other<br>syntax that you are using as your version numbering scheme.|

<h2 id="tocS_MessageOverview">MessageOverview</h2>
<!-- backwards compatibility -->
<a id="schemamessageoverview"></a>
<a id="schema_MessageOverview"></a>
<a id="tocSmessageoverview"></a>
<a id="tocsmessageoverview"></a>

```json
{
  "application": "string",
  "breadcrumbs": [
    {
      "action": "string",
      "dateTime": "1970-01-01T00:00:00Z",
      "message": "string",
      "severity": "string"
    }
  ],
  "category": "string",
  "code": "string",
  "cookies": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "correlationId": "string",
  "data": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "dateTime": "1970-01-01T00:00:00Z",
  "detail": "string",
  "form": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "hostname": "string",
  "id": "string",
  "method": "string",
  "queryString": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "serverVariables": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "severity": "string",
  "source": "string",
  "statusCode": 0,
  "title": "string",
  "titleTemplate": "string",
  "type": "string",
  "url": "string",
  "user": "string",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application|string|false|none|Used to identify which application logged this message. You can use this if you have multiple applications and services logging to the same log|
|breadcrumbs|[[Breadcrumb](#schemabreadcrumb)]|false|none|A list of breadcrumbs preceding this log message.|
|category|string|false|none|The log message category. Category can be a string of choice but typically contain a logging category set by a logging framework like NLog or Serilog.|
|code|string|false|none|Code can be used to include source code related to the log message. The code will typically span from a few lines before the line causing the log message<br>to a few lines after. For now, all lines above 21 will be removed. This makes room for showing 10 lines before the logging line, the logging line, and<br>10 lines after the logging line. Don't include a very large string in this property since that will quickly make the entire messages exceed the max limit<br>of 256 kb.|
|cookies|[[Item](#schemaitem)]|false|none|A key/value pair of cookies. This property only makes sense for logging messages related to web requests.|
|correlationId|string|false|none|CorrelationId can be used to group similar log messages together into a single discoverable batch. A correlation ID could be a session ID from ASP.NET Core,<br>a unique string spanning multiple microsservices handling the same request, or similar.|
|data|[[Item](#schemaitem)]|false|none|A key/value pair of user-defined fields and their values. When logging an exception, the Data dictionary of<br>the exception is copied to this property. You can add additional key/value pairs, by modifying the Data<br>dictionary on the exception or by supplying additional key/values to this API.|
|dateTime|string(date-time)|false|none|The date and time in UTC of the message. If you don't provide us with a value in dateTime, we will set the current date and time in UTC.|
|detail|string|false|none|A longer description of the message. For errors this could be a stacktrace, but it's really up to you what to log in there.|
|form|[[Item](#schemaitem)]|false|none|A key/value pair of form fields and their values. This property makes sense if logging message related to users inputting data in a form.|
|hostname|string|false|none|The hostname of the server logging the message.|
|id|string|false|none|The ID of this message.|
|method|string|false|none|If message relates to a HTTP request, you may send the HTTP method of that request. If you don't provide us with a method, we will try to find a key named REQUEST_METHOD in serverVariables.|
|queryString|[[Item](#schemaitem)]|false|none|A key/value pair of query string parameters. This property makes sense if logging message related to a HTTP request.|
|serverVariables|[[Item](#schemaitem)]|false|none|A key/value pair of server values. Server variables are typically related to handling requests in a webserver but could be used for other types of information as well.|
|severity|string|false|none|An enum value representing the severity of this message. The following values are allowed: Verbose, Debug, Information, Warning, Error, Fatal|
|source|string|false|none|The source of the code logging the message. This could be the assembly name.|
|statusCode|integer(int32)|false|none|If the message logged relates to a HTTP status code, you can put the code in this property. This would probably only be relevant for errors,<br>but could be used for logging successful status codes as well.|
|title|string|false|none|The textual title or headline of the message to log.|
|titleTemplate|string|false|none|The title template of the message to log. This property can be used from logging frameworks that supports<br>structured logging like: "{user} says {quote}". In the example, titleTemplate will be this string and title<br>will be "Gilfoyle says It's not magic. It's talent and sweat".|
|type|string|false|none|The type of message. If logging an error, the type of the exception would go into type but you can put anything in there, that makes sense for your domain.|
|url|string|false|none|If message relates to a HTTP request, you may send the URL of that request. If you don't provide us with an URL, we will try to find a key named URL in serverVariables.|
|user|string|false|none|An identification of the user triggering this message. You can put the users email address or your user key into this property.|
|version|string|false|none|Versions can be used to distinguish messages from different versions of your software. The value of version can be a SemVer compliant string or any other<br>syntax that you are using as your version numbering scheme.|

<h2 id="tocS_MessagesResult">MessagesResult</h2>
<!-- backwards compatibility -->
<a id="schemamessagesresult"></a>
<a id="schema_MessagesResult"></a>
<a id="tocSmessagesresult"></a>
<a id="tocsmessagesresult"></a>

```json
{
  "messages": [
    {
      "application": "string",
      "breadcrumbs": [
        {
          "action": "string",
          "dateTime": "1970-01-01T00:00:00Z",
          "message": "string",
          "severity": "string"
        }
      ],
      "category": "string",
      "code": "string",
      "cookies": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "correlationId": "string",
      "data": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "dateTime": "1970-01-01T00:00:00Z",
      "detail": "string",
      "form": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "hostname": "string",
      "id": "string",
      "method": "string",
      "queryString": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "serverVariables": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "severity": "string",
      "source": "string",
      "statusCode": 0,
      "title": "string",
      "titleTemplate": "string",
      "type": "string",
      "url": "string",
      "user": "string",
      "version": "string"
    }
  ],
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|[[MessageOverview](#schemamessageoverview)]|false|none|Log messages.|
|total|integer(int32)|false|none|The total number of log messages found.|

<h2 id="tocS_Search">Search</h2>
<!-- backwards compatibility -->
<a id="schemasearch"></a>
<a id="schema_Search"></a>
<a id="tocSsearch"></a>
<a id="tocssearch"></a>

```json
{
  "from": "1970-01-01T00:00:00Z",
  "query": "string",
  "to": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|string(date-time)|false|none|Search from this date.|
|query|string|false|none|Lucene query.|
|to|string(date-time)|false|none|Search to this date.|

<h2 id="tocS_UptimeCheck">UptimeCheck</h2>
<!-- backwards compatibility -->
<a id="schemauptimecheck"></a>
<a id="schema_UptimeCheck"></a>
<a id="tocSuptimecheck"></a>
<a id="tocsuptimecheck"></a>

```json
{
  "id": "string",
  "name": "string",
  "status": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|ID of the uptime check.|
|name|string|false|none|Name of the uptime check.|
|status|string|false|none|Current status of the uptime check.|
|url|string|false|none|Url of the uptime check.|
