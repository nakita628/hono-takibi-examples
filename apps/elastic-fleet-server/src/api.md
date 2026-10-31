<h1 id="fleet-server-api">fleet-server API v0000-00-00</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The fleet-server API that is used by agents when enrolled with fleet.

Note that the current implementations in the fleet-server and elastic-agent may have some difference specifically when it comes to some objects.

The implementation of fleet-server by default also includes a connection count limiter, as well as limiters for request body sizes.
If an agent attempts to make request but there are no remaining connections, the attempt will be blocked and the agent will get an error.
If an agent tries to send a body that is too large the fleet-server will respond with a 413 status code.

License: <a href="https://www.elastic.co/licensing/elastic-license">Elastic License 2.0</a>

# Authentication

* API Key (apiKey)
    - Parameter Name: **ApiKey**, in: header. API key security will check that the API key exists and is enabled, but will not check additional permissions

* API Key (agentApiKey)
    - Parameter Name: **ApiKey**, in: header. Agent API key security will check that the API key exists, is enabled, and is assigned to the agent

<h1 id="fleet-server-api-default">Default</h1>

## status

<a id="opIdstatus"></a>

> Code samples

```bash
curl http://localhost:8220/api/status \
  -H 'Accept: application/json'
```

`GET /api/status`

Return the fleet-server status.
The status code will either be 200 if healthy, or 503 if not.
Service is considered healthy if it has access to Elasticsearch, but the policies index
does not exist. This is equivalent to a deployment without any policy.
Authentication for this endpoint is optional, if not provided a shorter response body is returned.


<h3 id="status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Request-Id|header|string|false|The request tracking ID for APM.|
|elastic-api-version|header|string|false|The API version to use, format should be "YYYY-MM-DD"|

> Example responses

> 200 Response

```json
{
  "name": "fleet-server",
  "status": "healthy"
}
```

> 400 Response

```json
{
  "statusCode": 400,
  "error": "BadRequest"
}
```

> 429 Response

```json
{
  "statusCode": 429,
  "error": "TooManyRequests",
  "message": "too many requests"
}
```

> 503 Response

```json
{
  "name": "fleet-server",
  "status": "failed"
}
```

<h3 id="status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Healthy fleet-server response.|[statusResponse](#schemastatusresponse)|
|400|Bad Request|A 400 response for receiving an invalid User-Agent, Elastic-Api-Version header or version number (checkin and enroll endpoints).<br>In the case where an invalid or unsupported Elastic-Api-Version header is requested, the response will contain the default version number.<br>Or any other undefined error encounted by the fleet-server. May be returned by any endpoint except /api/fleet/status.<br>|Inline|
|429|Too Many Requests|429 rate limiting request.|Inline|
|503|Service Unavailable|Unhealthy fleet-server response.|[statusResponse](#schemastatusresponse)|

<h3 id="status-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Elastic-Api-Version|string||The API version the server is using to respond.|
|200|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|400|Elastic-Api-Version|string||The API version the server is using to respond.|
|400|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|429|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|503|Elastic-Api-Version|string||The API version the server is using to respond.|
|503|X-Request-Id|string||The X-Request-Id header used for tracing requests.|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
apiKey
</aside>

## agentEnroll

<a id="opIdagentEnroll"></a>

> Code samples

```bash
curl http://localhost:8220/api/fleet/agents/enroll \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "ApiKey: ${API_KEY}" \
  -H 'User-Agent: elastic agent 8.6.0' \
  -d '{
    "type": "PERMANENT",
    "metadata": {
      "local": {
        "elastic": {
          "agent": {
            "id": "",
            "version": "8.6.0",
            "snapshot": false
          }
        },
        "host": {
          "hostname": "test"
        }
      },
      "tags": [
        "us-west",
        "test"
      ]
    }
  }'
```

`POST /api/fleet/agents/enroll`

Enroll a new agent to fleet-server. The agent is enrolled in the policy encoded in the apiKey used.

> Body parameter

```json
{
  "type": "PERMANENT",
  "metadata": {
    "local": {
      "elastic": {
        "agent": {
          "id": "",
          "version": "8.6.0",
          "snapshot": false
        }
      },
      "host": {
        "hostname": "test"
      }
    },
    "tags": [
      "us-west",
      "test"
    ]
  }
}
```

<h3 id="agentenroll-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string|true|The user-agent header that is sent.<br>Must have the format "elastic agent X.Y.Z" where "X.Y.Z" indicates the agent version.<br>The agent version must not be greater than the version of the fleet-server.<br>|
|X-Request-Id|header|string|false|The request tracking ID for APM.|
|elastic-api-version|header|string|false|The API version to use, format should be "YYYY-MM-DD"|
|body|body|[enrollRequest](#schemaenrollrequest)|false|none|
|» id|body|string|false|The ID of the agent.<br>This is the ID that will be used to reference this agent, if no ID is passed one will be generated.<br>If another agent is enrolled with the same ID the other agent will no longer be able to communicate,<br>this new agent is considered a replacement of the other agent. The other agent will be able to continue<br>sending data to ES.<br>|
|» type|body|string|true|The enrollment type of the agent.<br>The agent only supports the PERMANENT value.<br>In the future the enrollment type may be used to indicate agents that use fleet for reporting and monitoring, but do not use policies.<br>|
|» replace_token|body|string|false|The replacement token of the agent.<br>Provided when an agent could replace an existing agent. This token must match the original enrollment of<br>that agent otherwise it will not be able to enroll.<br>|
|» enrollment_id|body|string|false|The enrollment ID of the agent.<br>To replace an agent on enroll fail.<br>The existing agent with a matching enrollment_id will be deleted if it never checked in. The new agent will be enrolled with the enrollment_id.<br>|
|» shared_id|body|string|false|**Deprecated.** The shared ID of the agent.<br>To support pre-existing installs.<br><br>Never implemented.<br>|
|» metadata|body|[enrollMetadata](#schemaenrollmetadata)|true|Metadata associated with the agent that is enrolling to fleet.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|PERMANENT|

> Example responses

> 200 Response

```json
{
  "action": "created",
  "item": {
    "id": "agent-test-id",
    "active": true,
    "policy_id": "agent-policy-id",
    "type": "PERMANENT",
    "enrolled_at": "2022-12-01T01:02:03Z",
    "user_provided_metadata": {},
    "local_metadata": {
      "elastic": {
        "agent": {
          "id": "agent-test-id",
          "version": "8.6.0",
          "snapshot": false
        }
      },
      "host": {
        "hostname": "test"
      }
    },
    "access_api_key_id": "api-key-id",
    "access_api_key": "api-key-token",
    "status": "online",
    "tags": [
      "us-west",
      "test"
    ]
  }
}
```

> 400 Response

```json
{
  "statusCode": 400,
  "error": "BadRequest"
}
```

> 401 Response

```json
{
  "statusCode": 401,
  "error": "Unauthorized",
  "message": "ApiKey not enabled"
}
```

> 403 Response

```json
{
  "statusCode": 403,
  "error": "ErrAgentIdentity",
  "message": "Agent header contains wrong identifier"
}
```

> 408 Response

```json
{
  "statusCode": 408,
  "error": "RequestTimeout",
  "message": "timeout on request"
}
```

> 413 Response

```json
{
  "statusCode": 413,
  "error": "ErrPayloadSizeTooLarge",
  "message": "the request body exceeds the maximum allowed size"
}
```

> 429 Response

```json
{
  "statusCode": 429,
  "error": "TooManyRequests",
  "message": "too many requests"
}
```

> 500 Response

```json
{
  "statusCode": 500,
  "error": "InternalServerError"
}
```

> 503 Response

```json
{
  "statusCode": 503,
  "error": "ServiceUnavailable",
  "message": "Fleet server unable to communicate with Elasticsearch"
}
```

<h3 id="agentenroll-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Agent enrolled successfully.|[enrollResponse](#schemaenrollresponse)|
|400|Bad Request|A 400 response for receiving an invalid User-Agent, Elastic-Api-Version header or version number (checkin and enroll endpoints).<br>In the case where an invalid or unsupported Elastic-Api-Version header is requested, the response will contain the default version number.<br>Or any other undefined error encounted by the fleet-server. May be returned by any endpoint except /api/fleet/status.<br>|Inline|
|401|Unauthorized|401 response when the API key is not enabled on any endpoint except /api/fleet/status. Or when there are issues updating an inactive agent on the ack endpoint.|Inline|
|403|Forbidden|403 response when the API key is valid but does not match the agent|Inline|
|408|Request Timeout|408 request timeout.|Inline|
|413|Payload Too Large|413 response when the request body exceeds the maximum allowed size.|Inline|
|429|Too Many Requests|429 rate limiting request.|Inline|
|500|Internal Server Error|A 500 response for encountering not expected bahavior.<br>|Inline|
|503|Service Unavailable|503 response when the server is not available for some reason.<br>Such as if a context is cancelled or the connection (to ES) is refused.<br>May be returned by any endpoint.<br>|Inline|

<h3 id="agentenroll-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **408**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **413**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Elastic-Api-Version|string||The API version the server is using to respond.|
|200|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|400|Elastic-Api-Version|string||The API version the server is using to respond.|
|400|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|401|Elastic-Api-Version|string||The API version the server is using to respond.|
|401|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|403|Elastic-Api-Version|string||The API version the server is using to respond.|
|403|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|408|Elastic-Api-Version|string||The API version the server is using to respond.|
|408|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|413|Elastic-Api-Version|string||The API version the server is using to respond.|
|413|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|429|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|500|Elastic-Api-Version|string||The API version the server is using to respond.|
|500|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|503|Elastic-Api-Version|string||The API version the server is using to respond.|
|503|X-Request-Id|string||The X-Request-Id header used for tracing requests.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## agentCheckin

<a id="opIdagentCheckin"></a>

> Code samples

```bash
curl http://localhost:8220/api/fleet/agents/string/checkin \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "ApiKey: ${API_KEY}" \
  -H 'User-Agent: elastic agent 8.6.0' \
  -d '{
    "status": "online",
    "message": "",
    "ack_token": "previous-token"
  }'
```

`POST /api/fleet/agents/{id}/checkin`

The agent checkin endpoint.
Clients will long-poll this endpoint.
A client may inform fleet-server of it's long-poll timeout in the request body.
The fleet-server will return a response if there is a new action for the agent, or if the polling timeout is reached.
The fleet-server may also use some jitter to offset the polling timeout, if specified a random amount of the jitter value may be subtracted from the polling timeout.
The fleet-sever polling timeout is short-circuited in cases of heavy load where setting up the checkin (ensuring the API key is authed etc) takes longer then the timeout value.
Fleet-server sets the poll timeout to 5m by default (with a 10m write timeout), for these values we assume that elastic-agent's request timeout is set to 10m and the cloud-proxy's timeout is longer than 10m.


> Body parameter

```json
{
  "status": "online",
  "message": "",
  "ack_token": "previous-token"
}
```

<h3 id="agentcheckin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The agent ID.|
|Accept-Encoding|header|string|false|Indicates encodings the agent can accept. The only encoding supported by the server currently is gzip.<br>Comma-separated directive lists and RFC 7231 quality values (e.g. "gzip;q=1.0, deflate;q=0.5") are both accepted.<br>|
|Content-Encoding|header|string|false|Signals that the request body has been compressed. Server currently only supports gzip compression.<br>|
|User-Agent|header|string|true|The user-agent header that is sent.<br>Must have the format "elastic agent X.Y.Z" where "X.Y.Z" indicates the agent version.<br>The agent version must not be greater than the version of the fleet-server.<br>|
|X-Request-Id|header|string|false|The request tracking ID for APM.|
|elastic-api-version|header|string|false|The API version to use, format should be "YYYY-MM-DD"|
|body|body|[checkinRequest](#schemacheckinrequest)|false|none|
|» status|body|string|true|The agent state, inferred from agent control protocol states.|
|» message|body|string|true|State message, may be overridden or use the error message of a failing component.|
|» ack_token|body|string|false|The ack_token form a previous response if the agent has checked in before.<br>Translated to a sequence number in fleet-server in order to retrieve any new actions for the agent from the last checkin.<br>|
|» local_metadata|body|string(application/json)|false|An embedded JSON object that holds meta-data values.<br>Defined in fleet-server as a `json.RawMessage`, defined as an object in the elastic-agent.<br>elastic-agent will populate the object with information from the binary and host/system environment.<br>fleet-server will update the agent record if a checkin response contains different data from the record.<br>|
|» components|body|string(application/json)|false|An embedded JSON object that holds component information that the agent is running.<br>Defined in fleet-server as a `json.RawMessage`, defined as an object in the elastic-agent.<br>fleet-server will update the components in an agent record if they differ from this object.<br>|
|» poll_timeout|body|string(duration)|false|An optional timeout value that informs fleet-server of when a client will time out on it's checkin request.<br>If not specified fleet-server will use the timeout values specified in the config (defaults to 5m polling and a 10m write timeout).<br>The value, if specified is expected to be a string that is parsable by [time.ParseDuration](https://pkg.go.dev/time#ParseDuration).<br>If specified fleet-server will set its poll timeout to `max(1m, poll_timeout-2m)` and its write timeout to `max(2m, poll_timout-1m)`.<br>|
|» upgrade_details|body|[upgrade_details](#schemaupgrade_details)|false|Additional details describing the status of an UPGRADE action delivered by the client (agent) on checkin.<br>|
|» agent_policy_id|body|string|false|The ID of the policy that the agent is currently running.<br>|
|» policy_revision_idx|body|integer(int64)|false|The revision of the policy that the agent is currently running.<br>|
|» upgrade|body|[upgrade_information](#schemaupgrade_information)|false|Container for upgrade information coming from agent<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Encoding|gzip|
|» status|online|
|» status|error|
|» status|degraded|
|» status|starting|
|» status|disconnected|

> Example responses

> 200 Response

```json
{
  "action": "checkin",
  "ack_token": "new-token",
  "actions": [
    {
      "agent_id": "test-agent",
      "created_at": "2022-12-01T01:02:03Z",
      "data": {
        "log_level": "debug"
      },
      "id": "test-action",
      "type": "SETTINGS"
    }
  ]
}
```

> 400 Response

```json
{
  "statusCode": 400,
  "error": "BadRequest"
}
```

> 401 Response

```json
{
  "statusCode": 401,
  "error": "Unauthorized",
  "message": "ApiKey not enabled"
}
```

> 403 Response

```json
{
  "statusCode": 403,
  "error": "ErrAgentIdentity",
  "message": "Agent header contains wrong identifier"
}
```

> 404 Response

```json
{
  "statusCode": 404,
  "error": "AgentNotFound",
  "message": "agent could not be found"
}
```

> 408 Response

```json
{
  "statusCode": 408,
  "error": "RequestTimeout",
  "message": "timeout on request"
}
```

> 413 Response

```json
{
  "statusCode": 413,
  "error": "ErrPayloadSizeTooLarge",
  "message": "the request body exceeds the maximum allowed size"
}
```

> 429 Response

```json
{
  "statusCode": 429,
  "error": "TooManyRequests",
  "message": "too many requests"
}
```

> 500 Response

```json
{
  "statusCode": 500,
  "error": "InternalServerError"
}
```

> 503 Response

```json
{
  "statusCode": 503,
  "error": "ServiceUnavailable",
  "message": "Fleet server unable to communicate with Elasticsearch"
}
```

<h3 id="agentcheckin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Agent checkin successful. May include actions.|[checkinResponse](#schemacheckinresponse)|
|400|Bad Request|A 400 response for receiving an invalid User-Agent, Elastic-Api-Version header or version number (checkin and enroll endpoints).<br>In the case where an invalid or unsupported Elastic-Api-Version header is requested, the response will contain the default version number.<br>Or any other undefined error encounted by the fleet-server. May be returned by any endpoint except /api/fleet/status.<br>|Inline|
|401|Unauthorized|401 response when the API key is not enabled on any endpoint except /api/fleet/status. Or when there are issues updating an inactive agent on the ack endpoint.|Inline|
|403|Forbidden|403 response when the API key is valid but does not match the agent|Inline|
|404|Not Found|404 response when the agent is not found. May be returned by checkin endpoint. or endpoints that use the agentApiKey auth scheme|Inline|
|408|Request Timeout|408 request timeout.|Inline|
|413|Payload Too Large|413 response when the request body exceeds the maximum allowed size.|Inline|
|429|Too Many Requests|429 rate limiting request.|Inline|
|500|Internal Server Error|A 500 response for encountering not expected bahavior.<br>|Inline|
|503|Service Unavailable|503 response when the server is not available for some reason.<br>Such as if a context is cancelled or the connection (to ES) is refused.<br>May be returned by any endpoint.<br>|Inline|

<h3 id="agentcheckin-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **408**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **413**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Content-Encoding|string||Present when fleet-server has gzip-compressed the response body.<br>Compression is applied when all three conditions are met: the serialised<br>response exceeds the configured compression threshold, the server compression<br>level is not NoCompression, and the request's Accept-Encoding header<br>advertises gzip support.<br>|
|200|Elastic-Api-Version|string||The API version the server is using to respond.|
|200|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|400|Elastic-Api-Version|string||The API version the server is using to respond.|
|400|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|401|Elastic-Api-Version|string||The API version the server is using to respond.|
|401|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|403|Elastic-Api-Version|string||The API version the server is using to respond.|
|403|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|404|Elastic-Api-Version|string||The API version the server is using to respond.|
|404|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|408|Elastic-Api-Version|string||The API version the server is using to respond.|
|408|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|413|Elastic-Api-Version|string||The API version the server is using to respond.|
|413|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|429|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|500|Elastic-Api-Version|string||The API version the server is using to respond.|
|500|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|503|Elastic-Api-Version|string||The API version the server is using to respond.|
|503|X-Request-Id|string||The X-Request-Id header used for tracing requests.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
agentApiKey
</aside>

## agentAcks

<a id="opIdagentAcks"></a>

> Code samples

```bash
curl http://localhost:8220/api/fleet/agents/string/acks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "ApiKey: ${API_KEY}" \
  -d '{
    "events": [
      {
        "type": "ACTION_RESULT",
        "subtype": "ACKNOWLEDGED",
        "agent_id": "test-agent",
        "action_id": "test-action",
        "timestamp": "2022-12-01T01:02:03.00004-07:00",
        "message": "Action '\''test-action'\'' of type '\''TEST'\'' acknowledged."
      }
    ]
  }'
```

`POST /api/fleet/agents/{id}/acks`

The endpoint that an agent uses to acknowledge (and inform fleet-server) of events that it has recieved/executed.
A single action may have multiple different events associated with it.
Also an action may not have any acks associated with it.

Note that using this endpoint for an `UPGRADE` action is deprecated behaviour.
`UPGRADE` status should use the `upgrade_details` attribute of the checkin request body.


> Body parameter

```json
{
  "events": [
    {
      "type": "ACTION_RESULT",
      "subtype": "ACKNOWLEDGED",
      "agent_id": "test-agent",
      "action_id": "test-action",
      "timestamp": "2022-12-01T01:02:03.00004-07:00",
      "message": "Action 'test-action' of type 'TEST' acknowledged."
    }
  ]
}
```

<h3 id="agentacks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The agent ID.|
|X-Request-Id|header|string|false|The request tracking ID for APM.|
|elastic-api-version|header|string|false|The API version to use, format should be "YYYY-MM-DD"|
|body|body|[ackRequest](#schemaackrequest)|false|none|
|» events|body|[[genericEvent](#schemagenericevent) \| [upgradeEvent](#schemaupgradeevent) \| [diagnosticsEvent](#schemadiagnosticsevent) \| [inputEvent](#schemainputevent)]|true|none|
|» » *anyOf*|body|[genericEvent](#schemagenericevent)|false|A generic ack event for an action. Includes an optional error attribute.|
|» » *anyOf*|body|[upgradeEvent](#schemaupgradeevent)|false|The ack event for an upgrade action|
|» » *anyOf*|body|[diagnosticsEvent](#schemadiagnosticsevent)|false|The ack event for a request diagnostics action.|
|» » *anyOf*|body|[inputEvent](#schemainputevent)|false|The ack event for an input action.|

> Example responses

> 200 Response

```json
{
  "action": "acks",
  "errors": false,
  "items": [
    {
      "status": 200,
      "message": "ok"
    }
  ]
}
```

> 400 Response

```json
{
  "statusCode": 400,
  "error": "BadRequest"
}
```

> 401 Response

```json
{
  "statusCode": 401,
  "error": "Unauthorized",
  "message": "ApiKey not enabled"
}
```

> 403 Response

```json
{
  "statusCode": 403,
  "error": "ErrAgentIdentity",
  "message": "Agent header contains wrong identifier"
}
```

> 404 Response

```json
{
  "statusCode": 404,
  "error": "AgentNotFound",
  "message": "agent could not be found"
}
```

> 408 Response

```json
{
  "statusCode": 408,
  "error": "RequestTimeout",
  "message": "timeout on request"
}
```

> 413 Response

```json
{
  "statusCode": 413,
  "error": "ErrPayloadSizeTooLarge",
  "message": "the request body exceeds the maximum allowed size"
}
```

> 429 Response

```json
{
  "statusCode": 429,
  "error": "TooManyRequests",
  "message": "too many requests"
}
```

> 500 Response

```json
{
  "statusCode": 500,
  "error": "InternalServerError"
}
```

> 503 Response

```json
{
  "statusCode": 503,
  "error": "ServiceUnavailable",
  "message": "Fleet server unable to communicate with Elasticsearch"
}
```

<h3 id="agentacks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Agent ack successfully received.|[ackResponse](#schemaackresponse)|
|400|Bad Request|A 400 response for receiving an invalid User-Agent, Elastic-Api-Version header or version number (checkin and enroll endpoints).<br>In the case where an invalid or unsupported Elastic-Api-Version header is requested, the response will contain the default version number.<br>Or any other undefined error encounted by the fleet-server. May be returned by any endpoint except /api/fleet/status.<br>|Inline|
|401|Unauthorized|401 response when the API key is not enabled on any endpoint except /api/fleet/status. Or when there are issues updating an inactive agent on the ack endpoint.|Inline|
|403|Forbidden|403 response when the API key is valid but does not match the agent|Inline|
|404|Not Found|404 response when the agent is not found. May be returned by checkin endpoint. or endpoints that use the agentApiKey auth scheme|Inline|
|408|Request Timeout|408 request timeout.|Inline|
|413|Payload Too Large|413 response when the request body exceeds the maximum allowed size.|Inline|
|429|Too Many Requests|429 rate limiting request.|Inline|
|500|Internal Server Error|A 500 response for encountering not expected bahavior.<br>|Inline|
|503|Service Unavailable|503 response when the server is not available for some reason.<br>Such as if a context is cancelled or the connection (to ES) is refused.<br>May be returned by any endpoint.<br>|Inline|

<h3 id="agentacks-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **408**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **413**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Elastic-Api-Version|string||The API version the server is using to respond.|
|200|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|400|Elastic-Api-Version|string||The API version the server is using to respond.|
|400|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|401|Elastic-Api-Version|string||The API version the server is using to respond.|
|401|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|403|Elastic-Api-Version|string||The API version the server is using to respond.|
|403|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|404|Elastic-Api-Version|string||The API version the server is using to respond.|
|404|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|408|Elastic-Api-Version|string||The API version the server is using to respond.|
|408|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|413|Elastic-Api-Version|string||The API version the server is using to respond.|
|413|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|429|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|500|Elastic-Api-Version|string||The API version the server is using to respond.|
|500|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|503|Elastic-Api-Version|string||The API version the server is using to respond.|
|503|X-Request-Id|string||The X-Request-Id header used for tracing requests.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
agentApiKey
</aside>

## artifact

<a id="opIdartifact"></a>

> Code samples

```bash
curl http://localhost:8220/api/fleet/artifacts/string/string \
  -H 'Accept: application/json' \
  -H "ApiKey: ${API_KEY}"
```

`GET /api/fleet/artifacts/{id}/{sha2}`

The route to retrieve an artifact from Elasticsearch.

<h3 id="artifact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The artifact record ID.|
|sha2|path|string|true|The decoded Sha256 associated with the artifact record.|
|X-Request-Id|header|string|false|The request tracking ID for APM.|
|elastic-api-version|header|string|false|The API version to use, format should be "YYYY-MM-DD"|

> Example responses

> 400 Response

```json
{
  "statusCode": 400,
  "error": "BadRequest"
}
```

> 401 Response

```json
{
  "statusCode": 401,
  "error": "Unauthorized",
  "message": "ApiKey not enabled"
}
```

> 403 Response

```json
{
  "statusCode": 403,
  "error": "ErrAgentIdentity",
  "message": "Agent header contains wrong identifier"
}
```

> 404 Response

```json
{
  "statusCode": 404,
  "error": "AgentNotFound",
  "message": "agent could not be found"
}
```

> 408 Response

```json
{
  "statusCode": 408,
  "error": "RequestTimeout",
  "message": "timeout on request"
}
```

> 429 Response

```json
{
  "statusCode": 429,
  "error": "TooManyRequests",
  "message": "too many requests"
}
```

> 500 Response

```json
{
  "statusCode": 500,
  "error": "InternalServerError"
}
```

> 503 Response

```json
{
  "statusCode": 503,
  "error": "ServiceUnavailable",
  "message": "Fleet server unable to communicate with Elasticsearch"
}
```

<h3 id="artifact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The artifact retrieved from ES.|Inline|
|400|Bad Request|A 400 response for receiving an invalid User-Agent, Elastic-Api-Version header or version number (checkin and enroll endpoints).<br>In the case where an invalid or unsupported Elastic-Api-Version header is requested, the response will contain the default version number.<br>Or any other undefined error encounted by the fleet-server. May be returned by any endpoint except /api/fleet/status.<br>|Inline|
|401|Unauthorized|401 response when the API key is not enabled on any endpoint except /api/fleet/status. Or when there are issues updating an inactive agent on the ack endpoint.|Inline|
|403|Forbidden|403 response when the API key is valid but does not match the agent|Inline|
|404|Not Found|404 response when the agent is not found. May be returned by checkin endpoint. or endpoints that use the agentApiKey auth scheme|Inline|
|408|Request Timeout|408 request timeout.|Inline|
|429|Too Many Requests|429 rate limiting request.|Inline|
|500|Internal Server Error|A 500 response for encountering not expected bahavior.<br>|Inline|
|503|Service Unavailable|503 response when the server is not available for some reason.<br>Such as if a context is cancelled or the connection (to ES) is refused.<br>May be returned by any endpoint.<br>|Inline|

<h3 id="artifact-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **408**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Elastic-Api-Version|string||The API version the server is using to respond.|
|200|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|400|Elastic-Api-Version|string||The API version the server is using to respond.|
|400|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|401|Elastic-Api-Version|string||The API version the server is using to respond.|
|401|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|403|Elastic-Api-Version|string||The API version the server is using to respond.|
|403|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|404|Elastic-Api-Version|string||The API version the server is using to respond.|
|404|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|408|Elastic-Api-Version|string||The API version the server is using to respond.|
|408|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|429|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|500|Elastic-Api-Version|string||The API version the server is using to respond.|
|500|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|503|Elastic-Api-Version|string||The API version the server is using to respond.|
|503|X-Request-Id|string||The X-Request-Id header used for tracing requests.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
agentApiKey
</aside>

## Initiate a file upload process

<a id="opIduploadBegin"></a>

> Code samples

```bash
curl http://localhost:8220/api/fleet/uploads \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "ApiKey: ${API_KEY}" \
  -d '{
    "file": {
      "Compression": "deflate",
      "hash": {
        "sha256": "04f81394bababa0fb31e6ad2d703c875eb46dc254527e39ff316564c0dc339e2"
      },
      "name": "yankees-stats.zip",
      "mime_type": "application/zip",
      "size": 8276748
    },
    "action_id": "2f440d31-2ea4-42f8-b0f2-4b6e98e8dc5e",
    "agent_id": "9347e918-5e00-48b0-b302-a09f9258a46d",
    "src": "endpoint"
  }'
```

`POST /api/fleet/uploads`

> Body parameter

```json
{
  "file": {
    "Compression": "deflate",
    "hash": {
      "sha256": "04f81394bababa0fb31e6ad2d703c875eb46dc254527e39ff316564c0dc339e2"
    },
    "name": "yankees-stats.zip",
    "mime_type": "application/zip",
    "size": 8276748
  },
  "action_id": "2f440d31-2ea4-42f8-b0f2-4b6e98e8dc5e",
  "agent_id": "9347e918-5e00-48b0-b302-a09f9258a46d",
  "src": "endpoint"
}
```

<h3 id="initiate-a-file-upload-process-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Request-Id|header|string|false|The request tracking ID for APM.|
|elastic-api-version|header|string|false|The API version to use, format should be "YYYY-MM-DD"|
|body|body|[uploadBeginRequest](#schemauploadbeginrequest)|true|Information about the file to be uploaded. Minimum required fields are marked as required. Additional fields may be specified and are allowed. For information about the file itself, ECS.file paths are recommended. For archived files, information about the archive should be placed in `file`. Information about the archive members may be placed in a `contents` array.|
|» file|body|object|true|none|
|» » Compression|body|string|false|The algorithm used to compress the file. Valid values: br,gzip,deflate,none|
|» » hash|body|object|false|Checksums on the file contents|
|» » » sha256|body|string|false|SHA256 of the contents|
|» » name|body|string|true|Name of the file including the extension, without the directory|
|» » mime_type|body|string|true|MIME type of the file|
|» » size|body|integer(int64)|true|Size of the file contents, in bytes|
|» action_id|body|string|true|ID of the action that requested this file|
|» agent_id|body|string|true|Identifier of the agent uploading. Matches the ID usually found in agent.id|
|» src|body|string|true|The source integration sending this file|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» src|endpoint|
|» src|agent|

> Example responses

> 200 Response

```json
{
  "upload_id": "fbc8e23c-055d-461e-87f7-b0d1b57f14b4",
  "chunk_size": 4194304
}
```

> 400 Response

```json
{
  "statusCode": 400,
  "error": "BadRequest"
}
```

> 401 Response

```json
{
  "statusCode": 401,
  "error": "Unauthorized",
  "message": "ApiKey not enabled"
}
```

> 403 Response

```json
{
  "statusCode": 403,
  "error": "ErrAgentIdentity",
  "message": "Agent header contains wrong identifier"
}
```

> 408 Response

```json
{
  "statusCode": 408,
  "error": "RequestTimeout",
  "message": "timeout on request"
}
```

> 413 Response

```json
{
  "statusCode": 413,
  "error": "ErrPayloadSizeTooLarge",
  "message": "the request body exceeds the maximum allowed size"
}
```

> 429 Response

```json
{
  "statusCode": 429,
  "error": "TooManyRequests",
  "message": "too many requests"
}
```

> 500 Response

```json
{
  "statusCode": 500,
  "error": "InternalServerError"
}
```

> 503 Response

```json
{
  "statusCode": 503,
  "error": "ServiceUnavailable",
  "message": "Fleet server unable to communicate with Elasticsearch"
}
```

<h3 id="initiate-a-file-upload-process-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Information about the upload procedure|[uploadBeginResponse](#schemauploadbeginresponse)|
|400|Bad Request|A 400 response for receiving an invalid User-Agent, Elastic-Api-Version header or version number (checkin and enroll endpoints).<br>In the case where an invalid or unsupported Elastic-Api-Version header is requested, the response will contain the default version number.<br>Or any other undefined error encounted by the fleet-server. May be returned by any endpoint except /api/fleet/status.<br>|Inline|
|401|Unauthorized|401 response when the API key is not enabled on any endpoint except /api/fleet/status. Or when there are issues updating an inactive agent on the ack endpoint.|Inline|
|403|Forbidden|403 response when the API key is valid but does not match the agent|Inline|
|408|Request Timeout|408 request timeout.|Inline|
|413|Payload Too Large|413 response when the request body exceeds the maximum allowed size.|Inline|
|429|Too Many Requests|429 rate limiting request.|Inline|
|500|Internal Server Error|A 500 response for encountering not expected bahavior.<br>|Inline|
|503|Service Unavailable|503 response when the server is not available for some reason.<br>Such as if a context is cancelled or the connection (to ES) is refused.<br>May be returned by any endpoint.<br>|Inline|

<h3 id="initiate-a-file-upload-process-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **408**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **413**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Elastic-Api-Version|string||The API version the server is using to respond.|
|200|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|400|Elastic-Api-Version|string||The API version the server is using to respond.|
|400|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|401|Elastic-Api-Version|string||The API version the server is using to respond.|
|401|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|403|Elastic-Api-Version|string||The API version the server is using to respond.|
|403|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|408|Elastic-Api-Version|string||The API version the server is using to respond.|
|408|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|413|Elastic-Api-Version|string||The API version the server is using to respond.|
|413|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|429|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|500|Elastic-Api-Version|string||The API version the server is using to respond.|
|500|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|503|Elastic-Api-Version|string||The API version the server is using to respond.|
|503|X-Request-Id|string||The X-Request-Id header used for tracing requests.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
agentApiKey
</aside>

## Upload a section of file data

<a id="opIduploadChunk"></a>

> Code samples

```bash
curl http://localhost:8220/api/fleet/uploads/ecb30383-6dd1-4b1d-bed0-2386b4e5df51/3 \
  -X PUT \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -H "ApiKey: ${API_KEY}" \
  -H 'X-Chunk-SHA2: 0c4a81b85a6b7ff00bde6c32e1e8be33b4b793b3b7b5cb03db93f77f7c9374d1' \
  --data-binary '@/path/to/file'
```

`PUT /api/fleet/uploads/{id}/{chunkNum}`

Upload portions of the intended file in a piecewise fashion. Chunks may be uploaded in any order, and may be uploaded in parallel. The body is the raw contents of the file at the given position matching the chunk number. The body must be the exact chunk size returned from the upload initiation response. All chunks must be this size except for the final one, which is naturally the file remainder.

<h3 id="upload-a-section-of-file-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The upload_id as returned in the Upload initiation response|
|chunkNum|path|integer|true|the positional index of the chunk within the file. The first chunk is 0, the next 1, etc.|
|X-Chunk-SHA2|header|string|true|the SHA256 hash of the body contents for this request|
|X-Request-Id|header|string|false|The request tracking ID for APM.|
|elastic-api-version|header|string|false|The API version to use, format should be "YYYY-MM-DD"|
|body|body|string(binary)|true|The chunk contents as bytes|

> Example responses

> 400 Response

```json
{
  "statusCode": 400,
  "error": "BadRequest"
}
```

> 401 Response

```json
{
  "statusCode": 401,
  "error": "Unauthorized",
  "message": "ApiKey not enabled"
}
```

> 403 Response

```json
{
  "statusCode": 403,
  "error": "ErrAgentIdentity",
  "message": "Agent header contains wrong identifier"
}
```

> 408 Response

```json
{
  "statusCode": 408,
  "error": "RequestTimeout",
  "message": "timeout on request"
}
```

> 413 Response

```json
{
  "statusCode": 413,
  "error": "ErrPayloadSizeTooLarge",
  "message": "the request body exceeds the maximum allowed size"
}
```

> 429 Response

```json
{
  "statusCode": 429,
  "error": "TooManyRequests",
  "message": "too many requests"
}
```

> 500 Response

```json
{
  "statusCode": 500,
  "error": "InternalServerError"
}
```

> 503 Response

```json
{
  "statusCode": 503,
  "error": "ServiceUnavailable",
  "message": "Fleet server unable to communicate with Elasticsearch"
}
```

<h3 id="upload-a-section-of-file-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful chunk upload|None|
|400|Bad Request|A 400 response for receiving an invalid User-Agent, Elastic-Api-Version header or version number (checkin and enroll endpoints).<br>In the case where an invalid or unsupported Elastic-Api-Version header is requested, the response will contain the default version number.<br>Or any other undefined error encounted by the fleet-server. May be returned by any endpoint except /api/fleet/status.<br>|Inline|
|401|Unauthorized|401 response when the API key is not enabled on any endpoint except /api/fleet/status. Or when there are issues updating an inactive agent on the ack endpoint.|Inline|
|403|Forbidden|403 response when the API key is valid but does not match the agent|Inline|
|408|Request Timeout|408 request timeout.|Inline|
|413|Payload Too Large|413 response when the request body exceeds the maximum allowed size.|Inline|
|429|Too Many Requests|429 rate limiting request.|Inline|
|500|Internal Server Error|A 500 response for encountering not expected bahavior.<br>|Inline|
|503|Service Unavailable|503 response when the server is not available for some reason.<br>Such as if a context is cancelled or the connection (to ES) is refused.<br>May be returned by any endpoint.<br>|Inline|

<h3 id="upload-a-section-of-file-data-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **408**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **413**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Elastic-Api-Version|string||The API version the server is using to respond.|
|200|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|400|Elastic-Api-Version|string||The API version the server is using to respond.|
|400|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|401|Elastic-Api-Version|string||The API version the server is using to respond.|
|401|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|403|Elastic-Api-Version|string||The API version the server is using to respond.|
|403|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|408|Elastic-Api-Version|string||The API version the server is using to respond.|
|408|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|413|Elastic-Api-Version|string||The API version the server is using to respond.|
|413|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|429|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|500|Elastic-Api-Version|string||The API version the server is using to respond.|
|500|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|503|Elastic-Api-Version|string||The API version the server is using to respond.|
|503|X-Request-Id|string||The X-Request-Id header used for tracing requests.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
agentApiKey
</aside>

## Complete a file upload process

<a id="opIduploadComplete"></a>

> Code samples

```bash
curl http://localhost:8220/api/fleet/uploads/ecb30383-6dd1-4b1d-bed0-2386b4e5df51 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "ApiKey: ${API_KEY}" \
  -d '{
    "transithash": {
      "sha256": "83810fdc61c44290778c212d7829d0c3f0232e81bd551d3943998a920025d14f"
    }
  }'
```

`POST /api/fleet/uploads/{id}`

> Body parameter

```json
{
  "transithash": {
    "sha256": "83810fdc61c44290778c212d7829d0c3f0232e81bd551d3943998a920025d14f"
  }
}
```

<h3 id="complete-a-file-upload-process-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The upload_id as returned in the Upload initiation response|
|X-Request-Id|header|string|false|The request tracking ID for APM.|
|elastic-api-version|header|string|false|The API version to use, format should be "YYYY-MM-DD"|
|body|body|[uploadCompleteRequest](#schemauploadcompleterequest)|true|none|
|» transithash|body|object|true|the transithash (sha256 of the concatenation of each in-order chunk hash) of the entire file contents|
|» » sha256|body|string|true|SHA256 hash|

> Example responses

> 200 Response

```json
{
  "status": "ok"
}
```

> 400 Response

```json
{
  "statusCode": 400,
  "error": "BadRequest"
}
```

> 401 Response

```json
{
  "statusCode": 401,
  "error": "Unauthorized",
  "message": "ApiKey not enabled"
}
```

> 403 Response

```json
{
  "statusCode": 403,
  "error": "ErrAgentIdentity",
  "message": "Agent header contains wrong identifier"
}
```

> 408 Response

```json
{
  "statusCode": 408,
  "error": "RequestTimeout",
  "message": "timeout on request"
}
```

> 500 Response

```json
{
  "statusCode": 500,
  "error": "InternalServerError"
}
```

> 503 Response

```json
{
  "statusCode": 503,
  "error": "ServiceUnavailable",
  "message": "Fleet server unable to communicate with Elasticsearch"
}
```

<h3 id="complete-a-file-upload-process-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success response|Inline|
|400|Bad Request|A 400 response for receiving an invalid User-Agent, Elastic-Api-Version header or version number (checkin and enroll endpoints).<br>In the case where an invalid or unsupported Elastic-Api-Version header is requested, the response will contain the default version number.<br>Or any other undefined error encounted by the fleet-server. May be returned by any endpoint except /api/fleet/status.<br>|Inline|
|401|Unauthorized|401 response when the API key is not enabled on any endpoint except /api/fleet/status. Or when there are issues updating an inactive agent on the ack endpoint.|Inline|
|403|Forbidden|403 response when the API key is valid but does not match the agent|Inline|
|408|Request Timeout|408 request timeout.|Inline|
|500|Internal Server Error|A 500 response for encountering not expected bahavior.<br>|Inline|
|503|Service Unavailable|503 response when the server is not available for some reason.<br>Such as if a context is cancelled or the connection (to ES) is refused.<br>May be returned by any endpoint.<br>|Inline|

<h3 id="complete-a-file-upload-process-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **408**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Elastic-Api-Version|string||The API version the server is using to respond.|
|200|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|400|Elastic-Api-Version|string||The API version the server is using to respond.|
|400|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|401|Elastic-Api-Version|string||The API version the server is using to respond.|
|401|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|403|Elastic-Api-Version|string||The API version the server is using to respond.|
|403|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|408|Elastic-Api-Version|string||The API version the server is using to respond.|
|408|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|500|Elastic-Api-Version|string||The API version the server is using to respond.|
|500|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|503|Elastic-Api-Version|string||The API version the server is using to respond.|
|503|X-Request-Id|string||The X-Request-Id header used for tracing requests.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
agentApiKey
</aside>

## retrieve stored file for integration

<a id="opIdgetFile"></a>

> Code samples

```bash
curl http://localhost:8220/api/fleet/file/ecb30383-6dd1-4b1d-bed0-2386b4e5df51 \
  -H 'Accept: application/json' \
  -H "ApiKey: ${API_KEY}"
```

`GET /api/fleet/file/{id}`

Stream out file contents to an agent or integration, provided there is a matching and authorized file stored in elasticsearch.

<h3 id="retrieve-stored-file-for-integration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The file_id as provided to the integration|
|source|query|string|false|Requests file from an alternate index pattern in elasticsearch. Requires specific integration support for creating the corresponding index and files. Supporting integration clients are allowlisted in fleet server.|
|elastic-api-version|header|string|false|The API version to use, format should be "YYYY-MM-DD"|
|X-Request-Id|header|string|false|The request tracking ID for APM.|

> Example responses

> 400 Response

```json
{
  "statusCode": 400,
  "error": "BadRequest"
}
```

> 401 Response

```json
{
  "statusCode": 401,
  "error": "Unauthorized",
  "message": "ApiKey not enabled"
}
```

> 403 Response

```json
{
  "statusCode": 403,
  "error": "Forbidden",
  "message": "Client is not authorized"
}
```

> 429 Response

```json
{
  "statusCode": 429,
  "error": "TooManyRequests",
  "message": "too many requests"
}
```

> 500 Response

```json
{
  "statusCode": 500,
  "error": "InternalServerError"
}
```

> 503 Response

```json
{
  "statusCode": 503,
  "error": "ServiceUnavailable",
  "message": "Fleet server unable to communicate with Elasticsearch"
}
```

<h3 id="retrieve-stored-file-for-integration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|File Contents.|Inline|
|206|Partial Content|Partial File Contents|None|
|400|Bad Request|A 400 response for receiving an invalid User-Agent, Elastic-Api-Version header or version number (checkin and enroll endpoints).<br>In the case where an invalid or unsupported Elastic-Api-Version header is requested, the response will contain the default version number.<br>Or any other undefined error encounted by the fleet-server. May be returned by any endpoint except /api/fleet/status.<br>|Inline|
|401|Unauthorized|401 response when the API key is not enabled on any endpoint except /api/fleet/status. Or when there are issues updating an inactive agent on the ack endpoint.|Inline|
|403|Forbidden|The requesting entity is not permitted to access the requested file|[error](#schemaerror)|
|404|Not Found|bad path, file not found|None|
|416|Range Not Satisfiable|Range Not Satisfiable|None|
|429|Too Many Requests|429 rate limiting request.|Inline|
|500|Internal Server Error|A 500 response for encountering not expected bahavior.<br>|Inline|
|503|Service Unavailable|503 response when the server is not available for some reason.<br>Such as if a context is cancelled or the connection (to ES) is refused.<br>May be returned by any endpoint.<br>|Inline|

<h3 id="retrieve-stored-file-for-integration-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-File-Sha2|string||SHA256 digest of the file contents. Only sent when the uploaded file contains a file.hash.sha256 value.|
|200|Elastic-Api-Version|string||The API version the server is using to respond.|
|200|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|206|Content-Range|string||Byte range of returned file section|
|206|Elastic-Api-Version|string||The API version the server is using to respond.|
|206|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|400|Elastic-Api-Version|string||The API version the server is using to respond.|
|400|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|401|Elastic-Api-Version|string||The API version the server is using to respond.|
|401|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|403|Elastic-Api-Version|string||The API version the server is using to respond.|
|403|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|404|Elastic-Api-Version|string||The API version the server is using to respond.|
|404|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|416|Elastic-Api-Version|string||The API version the server is using to respond.|
|416|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|429|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|500|Elastic-Api-Version|string||The API version the server is using to respond.|
|500|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|503|Elastic-Api-Version|string||The API version the server is using to respond.|
|503|X-Request-Id|string||The X-Request-Id header used for tracing requests.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
agentApiKey
</aside>

## retrieve a PGP key from the fleet-server's local storage.

<a id="opIdgetPGPKey"></a>

> Code samples

```bash
curl http://localhost:8220/api/agents/upgrades/0.0.0/pgp-public-key \
  -H 'Accept: application/json'
```

`GET /api/agents/upgrades/{major}.{minor}.{patch}/pgp-public-key`

Get a PGP key that can be used to verify agent upgrades. Key is stored on (fleet-server's) disk.

<h3 id="retrieve-a-pgp-key-from-the-fleet-servers-local-storage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|major|path|integer|true|The major version number.|
|minor|path|integer|true|The minor version number.|
|patch|path|integer|true|The patch version number.|
|elastic-api-version|header|string|false|The API version to use, format should be "YYYY-MM-DD"|
|X-Request-Id|header|string|false|The request tracking ID for APM.|

> Example responses

> 400 Response

```json
{
  "statusCode": 400,
  "error": "BadRequest"
}
```

> 429 Response

```json
{
  "statusCode": 429,
  "error": "TooManyRequests",
  "message": "too many requests"
}
```

<h3 id="retrieve-a-pgp-key-from-the-fleet-servers-local-storage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The PGP key bytes.|Inline|
|400|Bad Request|A 400 response for receiving an invalid User-Agent, Elastic-Api-Version header or version number (checkin and enroll endpoints).<br>In the case where an invalid or unsupported Elastic-Api-Version header is requested, the response will contain the default version number.<br>Or any other undefined error encounted by the fleet-server. May be returned by any endpoint except /api/fleet/status.<br>|Inline|
|429|Too Many Requests|429 rate limiting request.|Inline|
|500|Internal Server Error|The server has an error retrieving or reading the local key.|None|
|501|Not Implemented|The server will not serve the request without a TLS connection.|None|

<h3 id="retrieve-a-pgp-key-from-the-fleet-servers-local-storage-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Elastic-Api-Version|string||The API version the server is using to respond.|
|200|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|400|Elastic-Api-Version|string||The API version the server is using to respond.|
|400|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|429|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|500|Elastic-Api-Version|string||The API version the server is using to respond.|
|500|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|501|Elastic-Api-Version|string||The API version the server is using to respond.|
|501|X-Request-Id|string||The X-Request-Id header used for tracing requests.|

<aside class="success">
This operation does not require authentication
</aside>

## Annotate an agent with unenroll attributes.

<a id="opIdauditUnenroll"></a>

> Code samples

```bash
curl http://localhost:8220/api/fleet/agents/string/audit/unenroll \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "ApiKey: ${API_KEY}" \
  -d '{
    "reason": "uninstall",
    "timestamp": "2024-01-01T12:00:00.000Z"
  }'
```

`POST /api/fleet/agents/{id}/audit/unenroll`

Annotate an agent with unenroll attributes so the UI will show it as uninstalled or orphaned instead of offline.
API keys for an agent that is annotated will not be revoked by fleet-server.
If an agent checks in after the unenroll attributes are set, the attributes will be removed from the agent document.


> Body parameter

```json
{
  "reason": "uninstall",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

<h3 id="annotate-an-agent-with-unenroll-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The agent ID.|
|X-Request-Id|header|string|false|The request tracking ID for APM.|
|elastic-api-version|header|string|false|The API version to use, format should be "YYYY-MM-DD"|
|body|body|[auditUnenrollRequest](#schemaauditunenrollrequest)|true|none|
|» reason|body|string|true|The unenroll reason|
|» timestamp|body|string(date-time)|true|Agent timestamp of when the uninstall/unenroll action occured; may differ from fleet-server time due to retries.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» reason|uninstall|
|» reason|orphaned|
|» reason|key_revoked|
|» reason|migrated|

> Example responses

> 400 Response

```json
{
  "statusCode": 400,
  "error": "BadRequest"
}
```

> 401 Response

```json
{
  "statusCode": 401,
  "error": "Unauthorized",
  "message": "ApiKey not enabled"
}
```

> 403 Response

```json
{
  "statusCode": 403,
  "error": "ErrAgentIdentity",
  "message": "Agent header contains wrong identifier"
}
```

> 409 Response

```json
{
  "statusCode": 409,
  "error": "ErrAuditReasonConflict",
  "message": "agent document contains audit_unenroll_reason"
}
```

> 429 Response

```json
{
  "statusCode": 429,
  "error": "TooManyRequests",
  "message": "too many requests"
}
```

> 500 Response

```json
{
  "statusCode": 500,
  "error": "InternalServerError"
}
```

> 503 Response

```json
{
  "statusCode": 503,
  "error": "ServiceUnavailable",
  "message": "Fleet server unable to communicate with Elasticsearch"
}
```

<h3 id="annotate-an-agent-with-unenroll-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Audit attributes set in agent document.|None|
|400|Bad Request|A 400 response for receiving an invalid User-Agent, Elastic-Api-Version header or version number (checkin and enroll endpoints).<br>In the case where an invalid or unsupported Elastic-Api-Version header is requested, the response will contain the default version number.<br>Or any other undefined error encounted by the fleet-server. May be returned by any endpoint except /api/fleet/status.<br>|Inline|
|401|Unauthorized|401 response when the API key is not enabled on any endpoint except /api/fleet/status. Or when there are issues updating an inactive agent on the ack endpoint.|Inline|
|403|Forbidden|403 response when the API key is valid but does not match the agent|Inline|
|409|Conflict|409 conflict response.|Inline|
|429|Too Many Requests|429 rate limiting request.|Inline|
|500|Internal Server Error|A 500 response for encountering not expected bahavior.<br>|Inline|
|503|Service Unavailable|503 response when the server is not available for some reason.<br>Such as if a context is cancelled or the connection (to ES) is refused.<br>May be returned by any endpoint.<br>|Inline|

<h3 id="annotate-an-agent-with-unenroll-attributes-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Elastic-Api-Version|string||The API version the server is using to respond.|
|200|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|400|Elastic-Api-Version|string||The API version the server is using to respond.|
|400|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|401|Elastic-Api-Version|string||The API version the server is using to respond.|
|401|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|403|Elastic-Api-Version|string||The API version the server is using to respond.|
|403|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|409|Elastic-Api-Version|string||The API version the server is using to respond.|
|409|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|429|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|500|Elastic-Api-Version|string||The API version the server is using to respond.|
|500|X-Request-Id|string||The X-Request-Id header used for tracing requests.|
|503|Elastic-Api-Version|string||The API version the server is using to respond.|
|503|X-Request-Id|string||The X-Request-Id header used for tracing requests.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
agentApiKey
</aside>

# Schemas

<h2 id="tocS_error">error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "statusCode": 0,
  "error": "string",
  "message": "string"
}
```

Error processing request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer|true|none|The HTTP status code of the error.|
|error|string|true|none|Error type.|
|message|string|false|none|(optional) Error message.|

<h2 id="tocS_statusResponseVersion">statusResponseVersion</h2>
<!-- backwards compatibility -->
<a id="schemastatusresponseversion"></a>
<a id="schema_statusResponseVersion"></a>
<a id="tocSstatusresponseversion"></a>
<a id="tocsstatusresponseversion"></a>

```json
{
  "number": "string",
  "build_hash": "string",
  "build_time": "string"
}
```

Version information included in the response to an authorized status request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|number|string|false|none|The fleet-server version.|
|build_hash|string|false|none|The commit that the fleet-server was built from.|
|build_time|string|false|none|The date-time that the fleet-server binary was created.|

<h2 id="tocS_statusResponse">statusResponse</h2>
<!-- backwards compatibility -->
<a id="schemastatusresponse"></a>
<a id="schema_statusResponse"></a>
<a id="tocSstatusresponse"></a>
<a id="tocsstatusresponse"></a>

```json
{
  "name": "string",
  "status": "STARTING",
  "version": {
    "number": "string",
    "build_hash": "string",
    "build_time": "string"
  }
}
```

Status response information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Service name.|
|status|string|true|none|A Unit state that fleet-server may report.<br>Unit state is defined in the elastic-agent-client specification.<br>|
|version|[statusResponseVersion](#schemastatusresponseversion)|false|none|Version information included in the response to an authorized status request.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|STARTING|
|status|CONFIGURING|
|status|HEALTHY|
|status|DEGRADED|
|status|FAILED|
|status|STOPPING|
|status|STOPPED|
|status|UNKNOWN|

<h2 id="tocS_enrollMetadata">enrollMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaenrollmetadata"></a>
<a id="schema_enrollMetadata"></a>
<a id="tocSenrollmetadata"></a>
<a id="tocsenrollmetadata"></a>

```json
{
  "user_provided": "string",
  "local": "string",
  "tags": [
    "string"
  ]
}
```

Metadata associated with the agent that is enrolling to fleet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_provided|string(application/json)|true|none|**Deprecated.** An embedded JSON object that holds user-provided meta-data values.<br>Defined in fleet-server as a `json.RawMessage`.<br>fleet-server does not use these values on enrollment of an agent.<br><br>Defined in the elastic-agent as a `map[string]interface{}` with no way to specify any values.<br>|
|local|string(application/json)|true|none|An embedded JSON object that holds meta-data values.<br>Defined in fleet-server as a `json.RawMessage`, defined as an object in the elastic-agent.<br>elastic-agent will populate the object with information from the binary and host/system environment.<br>If not empty fleet-server will update the value of `local["elastic"]["agent"]["id"]` to the agent ID (assuming the keys exist).<br>The (possibly updated) value is sent by fleet-server when creating the record for a new agent.<br>|
|tags|[string]|false|none|User provided tags for the agent.<br>fleet-server will pass the tags to the agent record on enrollment.<br>|

<h2 id="tocS_enrollRequest">enrollRequest</h2>
<!-- backwards compatibility -->
<a id="schemaenrollrequest"></a>
<a id="schema_enrollRequest"></a>
<a id="tocSenrollrequest"></a>
<a id="tocsenrollrequest"></a>

```json
{
  "id": "string",
  "type": "PERMANENT",
  "replace_token": "string",
  "enrollment_id": "string",
  "shared_id": "string",
  "metadata": {
    "user_provided": "string",
    "local": "string",
    "tags": [
      "string"
    ]
  }
}
```

A request to enroll a new agent into fleet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the agent.<br>This is the ID that will be used to reference this agent, if no ID is passed one will be generated.<br>If another agent is enrolled with the same ID the other agent will no longer be able to communicate,<br>this new agent is considered a replacement of the other agent. The other agent will be able to continue<br>sending data to ES.<br>|
|type|string|true|none|The enrollment type of the agent.<br>The agent only supports the PERMANENT value.<br>In the future the enrollment type may be used to indicate agents that use fleet for reporting and monitoring, but do not use policies.<br>|
|replace_token|string|false|none|The replacement token of the agent.<br>Provided when an agent could replace an existing agent. This token must match the original enrollment of<br>that agent otherwise it will not be able to enroll.<br>|
|enrollment_id|string|false|none|The enrollment ID of the agent.<br>To replace an agent on enroll fail.<br>The existing agent with a matching enrollment_id will be deleted if it never checked in. The new agent will be enrolled with the enrollment_id.<br>|
|shared_id|string|false|none|**Deprecated.** The shared ID of the agent.<br>To support pre-existing installs.<br><br>Never implemented.<br>|
|metadata|[enrollMetadata](#schemaenrollmetadata)|true|none|Metadata associated with the agent that is enrolling to fleet.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|PERMANENT|

<h2 id="tocS_enrollResponseItem">enrollResponseItem</h2>
<!-- backwards compatibility -->
<a id="schemaenrollresponseitem"></a>
<a id="schema_enrollResponseItem"></a>
<a id="tocSenrollresponseitem"></a>
<a id="tocsenrollresponseitem"></a>

```json
{
  "id": "string",
  "active": true,
  "policy_id": "string",
  "type": "string",
  "enrolled_at": "string",
  "user_provided_metadata": "string",
  "local_metadata": "string",
  "actions": [
    {}
  ],
  "access_api_key_id": "string",
  "access_api_key": "password",
  "status": "string",
  "tags": [
    "string"
  ]
}
```

Response to a successful enrollment of an agent into fleet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The agent ID|
|active|boolean|true|none|**Deprecated.** If the agent is active in fleet.<br>Set to true upon enrollment.<br><br>Handling of other values never implemented.<br>|
|policy_id|string|true|none|The policy ID that the agent is enrolled with. Decoded from the API key used in the request.|
|type|string|true|none|**Deprecated.** The enrollment request type.<br><br>Handling of other values never implemented.<br>|
|enrolled_at|string|true|none|The RFC3339 timestamp that the agent was enrolled at.|
|user_provided_metadata|string(application/json)|true|none|**Deprecated.** A copy of the user provided metadata from the enrollment request.<br><br>Currently will be empty.<br>|
|local_metadata|string(application/json)|true|none|**Deprecated.** A copy of the (updated) local metadata provided in the enrollment request.<br><br>Never used by agent.<br>|
|actions|[object]|false|none|**Deprecated.** Defined in fleet-server and elastic-agent as `[]interface{}`.<br><br>Never used by agent.<br>|
|access_api_key_id|string|true|none|The id of the ApiKey that fleet-server has generated for the enrolling agent.|
|access_api_key|string(password)|true|none|The ApiKey token that fleet-server has generated for the enrolling agent.|
|status|string|true|none|**Deprecated.** Agent status from fleet-server.<br>fleet-ui may differ.<br><br>Never used by agent.<br>|
|tags|[string]|true|none|A copy of the tags that were sent with the enrollment request.|

<h2 id="tocS_enrollResponse">enrollResponse</h2>
<!-- backwards compatibility -->
<a id="schemaenrollresponse"></a>
<a id="schema_enrollResponse"></a>
<a id="tocSenrollresponse"></a>
<a id="tocsenrollresponse"></a>

```json
{
  "action": "string",
  "item": {
    "id": "string",
    "active": true,
    "policy_id": "string",
    "type": "string",
    "enrolled_at": "string",
    "user_provided_metadata": "string",
    "local_metadata": "string",
    "actions": [
      {}
    ],
    "access_api_key_id": "string",
    "access_api_key": "password",
    "status": "string",
    "tags": [
      "string"
    ]
  }
}
```

The enrollment action response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The action result. Will have the value "created".|
|item|[enrollResponseItem](#schemaenrollresponseitem)|true|none|Response to a successful enrollment of an agent into fleet.|

<h2 id="tocS_upgrade_metadata_scheduled">upgrade_metadata_scheduled</h2>
<!-- backwards compatibility -->
<a id="schemaupgrade_metadata_scheduled"></a>
<a id="schema_upgrade_metadata_scheduled"></a>
<a id="tocSupgrade_metadata_scheduled"></a>
<a id="tocsupgrade_metadata_scheduled"></a>

```json
{
  "scheduled_at": "1970-01-01T00:00:00Z"
}
```

Upgrade metadata for an upgrade that has been scheduled.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scheduled_at|string(date-time)|true|none|The RFC3339 timestamp the upgrade is scheduled to start at.|

<h2 id="tocS_upgrade_metadata_downloading">upgrade_metadata_downloading</h2>
<!-- backwards compatibility -->
<a id="schemaupgrade_metadata_downloading"></a>
<a id="schema_upgrade_metadata_downloading"></a>
<a id="tocSupgrade_metadata_downloading"></a>
<a id="tocsupgrade_metadata_downloading"></a>

```json
{
  "download_percent": 0,
  "download_rate": 0,
  "retry_error_msg": "string",
  "retry_until": "1970-01-01T00:00:00Z"
}
```

Upgrade metadata for an upgrade that is downloading.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|download_percent|number(double)|true|none|The artifact download progress as a percentage.|
|download_rate|number(double)|false|none|The artifact download rate as bytes per second.|
|retry_error_msg|string|false|none|The error message that is a result of a retryable upgrade download failure.|
|retry_until|string(date-time)|false|none|The RFC3339 timestamp of the deadline the upgrade download is retried until.|

<h2 id="tocS_upgrade_metadata_failed">upgrade_metadata_failed</h2>
<!-- backwards compatibility -->
<a id="schemaupgrade_metadata_failed"></a>
<a id="schema_upgrade_metadata_failed"></a>
<a id="tocSupgrade_metadata_failed"></a>
<a id="tocsupgrade_metadata_failed"></a>

```json
{
  "failed_state": "UPG_REQUESTED",
  "error_msg": "string"
}
```

Upgrade metadata for an upgrade that has failed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failed_state|string|true|none|The state where the upgrade failed.|
|error_msg|string|true|none|The error message associated with a failed state.|

#### Enumerated Values

|Property|Value|
|---|---|
|failed_state|UPG_REQUESTED|
|failed_state|UPG_SCHEDULED|
|failed_state|UPG_DOWNLOADING|
|failed_state|UPG_EXTRACTING|
|failed_state|UPG_REPLACING|
|failed_state|UPG_RESTARTING|
|failed_state|UPG_WATCHING|

<h2 id="tocS_upgrade_details">upgrade_details</h2>
<!-- backwards compatibility -->
<a id="schemaupgrade_details"></a>
<a id="schema_upgrade_details"></a>
<a id="tocSupgrade_details"></a>
<a id="tocsupgrade_details"></a>

```json
{
  "target_version": "string",
  "action_id": "string",
  "state": "UPG_REQUESTED",
  "metadata": {
    "scheduled_at": "1970-01-01T00:00:00Z"
  }
}
```

Additional details describing the status of an UPGRADE action delivered by the client (agent) on checkin.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|target_version|string|true|none|The version the agent should upgrade to.|
|action_id|string|true|none|The upgrade action ID the details are associated with.|
|state|string|true|none|The upgrade state.|
|metadata|[upgrade_metadata_scheduled](#schemaupgrade_metadata_scheduled) \| [upgrade_metadata_downloading](#schemaupgrade_metadata_downloading) \| [upgrade_metadata_failed](#schemaupgrade_metadata_failed)|false|none|Upgrade status metadata. Determined by state.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|UPG_REQUESTED|
|state|UPG_SCHEDULED|
|state|UPG_DOWNLOADING|
|state|UPG_EXTRACTING|
|state|UPG_REPLACING|
|state|UPG_RESTARTING|
|state|UPG_WATCHING|
|state|UPG_ROLLBACK|
|state|UPG_FAILED|

<h2 id="tocS_available_rollbacks">available_rollbacks</h2>
<!-- backwards compatibility -->
<a id="schemaavailable_rollbacks"></a>
<a id="schema_available_rollbacks"></a>
<a id="tocSavailable_rollbacks"></a>
<a id="tocsavailable_rollbacks"></a>

```json
[
  {
    "version": "string",
    "valid_until": "1970-01-01T00:00:00Z"
  }
]
```

Target versions available for a rollback

<h2 id="tocS_upgrade_information">upgrade_information</h2>
<!-- backwards compatibility -->
<a id="schemaupgrade_information"></a>
<a id="schema_upgrade_information"></a>
<a id="tocSupgrade_information"></a>
<a id="tocsupgrade_information"></a>

```json
{
  "rollbacks": [
    {
      "version": "string",
      "valid_until": "1970-01-01T00:00:00Z"
    }
  ]
}
```

Container for upgrade information coming from agent

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rollbacks|[available_rollbacks](#schemaavailable_rollbacks)|false|none|Target versions available for a rollback<br>|

<h2 id="tocS_checkinRequest">checkinRequest</h2>
<!-- backwards compatibility -->
<a id="schemacheckinrequest"></a>
<a id="schema_checkinRequest"></a>
<a id="tocScheckinrequest"></a>
<a id="tocscheckinrequest"></a>

```json
{
  "status": "online",
  "message": "string",
  "ack_token": "string",
  "local_metadata": "string",
  "components": "string",
  "poll_timeout": "string",
  "upgrade_details": {
    "target_version": "string",
    "action_id": "string",
    "state": "UPG_REQUESTED",
    "metadata": {
      "scheduled_at": "1970-01-01T00:00:00Z"
    }
  },
  "agent_policy_id": "string",
  "policy_revision_idx": 0,
  "upgrade": {
    "rollbacks": [
      {
        "version": "string",
        "valid_until": "1970-01-01T00:00:00Z"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|The agent state, inferred from agent control protocol states.|
|message|string|true|none|State message, may be overridden or use the error message of a failing component.|
|ack_token|string|false|none|The ack_token form a previous response if the agent has checked in before.<br>Translated to a sequence number in fleet-server in order to retrieve any new actions for the agent from the last checkin.<br>|
|local_metadata|string(application/json)|false|none|An embedded JSON object that holds meta-data values.<br>Defined in fleet-server as a `json.RawMessage`, defined as an object in the elastic-agent.<br>elastic-agent will populate the object with information from the binary and host/system environment.<br>fleet-server will update the agent record if a checkin response contains different data from the record.<br>|
|components|string(application/json)|false|none|An embedded JSON object that holds component information that the agent is running.<br>Defined in fleet-server as a `json.RawMessage`, defined as an object in the elastic-agent.<br>fleet-server will update the components in an agent record if they differ from this object.<br>|
|poll_timeout|string(duration)|false|none|An optional timeout value that informs fleet-server of when a client will time out on it's checkin request.<br>If not specified fleet-server will use the timeout values specified in the config (defaults to 5m polling and a 10m write timeout).<br>The value, if specified is expected to be a string that is parsable by [time.ParseDuration](https://pkg.go.dev/time#ParseDuration).<br>If specified fleet-server will set its poll timeout to `max(1m, poll_timeout-2m)` and its write timeout to `max(2m, poll_timout-1m)`.<br>|
|upgrade_details|[upgrade_details](#schemaupgrade_details)|false|none|Additional details describing the status of an UPGRADE action delivered by the client (agent) on checkin.<br>|
|agent_policy_id|string|false|none|The ID of the policy that the agent is currently running.<br>|
|policy_revision_idx|integer(int64)|false|none|The revision of the policy that the agent is currently running.<br>|
|upgrade|[upgrade_information](#schemaupgrade_information)|false|none|Container for upgrade information coming from agent<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|status|online|
|status|error|
|status|degraded|
|status|starting|
|status|disconnected|

<h2 id="tocS_actionSignature">actionSignature</h2>
<!-- backwards compatibility -->
<a id="schemaactionsignature"></a>
<a id="schema_actionSignature"></a>
<a id="tocSactionsignature"></a>
<a id="tocsactionsignature"></a>

```json
{
  "data": "string",
  "signature": "string"
}
```

Optional action signing data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string(base64)|true|none|The base64 encoded, UTF-8 JSON serialized action bytes that are signed.|
|signature|string(base64)|true|none|The base64 encoded signature.|

<h2 id="tocS_userInfo">userInfo</h2>
<!-- backwards compatibility -->
<a id="schemauserinfo"></a>
<a id="schema_userInfo"></a>
<a id="tocSuserinfo"></a>
<a id="tocsuserinfo"></a>

```json
{
  "username": "string",
  "password": "string",
  "groupname": "string"
}
```

Optional user info data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|false|none|Username of custom user used to run Elastic Agent.|
|password|string|false|none|Password for user specified by username.|
|groupname|string|false|none|Custom group used to access Elastic Agent files.|

<h2 id="tocS_action">action</h2>
<!-- backwards compatibility -->
<a id="schemaaction"></a>
<a id="schema_action"></a>
<a id="tocSaction"></a>
<a id="tocsaction"></a>

```json
{
  "agent_id": "string",
  "created_at": "string",
  "start_time": "string",
  "expiration": "string",
  "data": {
    "policy_id": "string"
  },
  "id": "string",
  "traceparent": "string",
  "type": "UPGRADE",
  "input_type": "string",
  "timeout": 0,
  "signed": {
    "data": "string",
    "signature": "string"
  }
}
```

An action for an elastic-agent.
The structure of the `data` attribute will vary between action types.
model/schema.json has a looser definition of actions and it define's fleet-server's interactions with Elasticsearch when retrieving actions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agent_id|string|true|none|The agent ID.|
|created_at|string|true|none|Time when the action was created.|
|start_time|string|false|none|The earliest execution time for the action. Agent will not execute the action before this time. Used for scheduled actions.|
|expiration|string|false|none|The latest start time for the action. Actions will be dropped by the agent if execution has not started by this time. Used for scheduled actions.|
|data|[actionPolicyReassign](#schemaactionpolicyreassign) \| [actionPolicyChange](#schemaactionpolicychange) \| [actionUpgrade](#schemaactionupgrade) \| [actionUnenroll](#schemaactionunenroll) \| [actionSettings](#schemaactionsettings) \| [actionCancel](#schemaactioncancel) \| [actionRequestDiagnostics](#schemaactionrequestdiagnostics) \| [actionInputAction](#schemaactioninputaction) \| [actionMigrate](#schemaactionmigrate) \| [actionPrivilegeLevelChange](#schemaactionprivilegelevelchange) \| [actionUninstall](#schemaactionuninstall) \| [actionRestart](#schemaactionrestart)|true|none|An embedded action-specific object.|
|id|string|true|none|The action ID.|
|traceparent|string|false|none|APM traceparent for the action.|
|type|string|true|none|The action type. If fleet-server encounters an action that does not have a type listed below it will be filtered out and an error will be logged.|
|input_type|string|true|none|The input type of the action for actions with type `INPUT_ACTION`.|
|timeout|integer(int64)|false|none|The timeout value (in seconds) for actions with type `INPUT_ACTION`.|
|signed|[actionSignature](#schemaactionsignature)|false|none|Optional action signing data.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|UPGRADE|
|type|UNENROLL|
|type|POLICY_CHANGE|
|type|POLICY_REASSIGN|
|type|SETTINGS|
|type|INPUT_ACTION|
|type|CANCEL|
|type|REQUEST_DIAGNOSTICS|
|type|MIGRATE|
|type|PRIVILEGE_LEVEL_CHANGE|
|type|UNINSTALL|
|type|RESTART|

<h2 id="tocS_policyData">policyData</h2>
<!-- backwards compatibility -->
<a id="schemapolicydata"></a>
<a id="schema_policyData"></a>
<a id="tocSpolicydata"></a>
<a id="tocspolicydata"></a>

```json
{
  "id": "string",
  "secret_paths": [
    "string"
  ],
  "outputs": {},
  "inputs": [
    {}
  ],
  "extensions": {},
  "receivers": {},
  "processors": {},
  "connectors": {},
  "exporters": {},
  "service": {
    "extensions": [
      "string"
    ],
    "pipelines": {
      "property1": {
        "exporters": [
          "string"
        ],
        "processors": [
          "string"
        ],
        "receivers": [
          "string"
        ]
      },
      "property2": {
        "exporters": [
          "string"
        ],
        "processors": [
          "string"
        ],
        "receivers": [
          "string"
        ]
      }
    }
  },
  "revision": 0,
  "agent": {},
  "signed": {
    "data": "string",
    "signature": "string"
  },
  "output_permissions": {},
  "fleet": {}
}
```

The full policy that an agent should run after combining with local configuration/env vars.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The policy's ID.|
|secret_paths|[string]|false|none|A list of keys that reference secret values that have been injected into the policy.|
|outputs|object|false|none|A map of all outputs that the agent running the policy can use to send data to.|
|inputs|[object]|false|none|A list of all inputs that the agent should run.|
|extensions|object|false|none|OTel collector extensions.|
|receivers|object|false|none|OTel collector receivers.|
|processors|object|false|none|OTel collector processors.|
|connectors|object|false|none|OTel collector connectors.|
|exporters|object|false|none|OTel collector exporters.|
|service|[otelConfigService](#schemaotelconfigservice)|false|none|OTel collector pipelines setup.|
|revision|integer|false|none|The revision number of the policy. Should match revision_idx.|
|agent|object|false|none|Agent configuration details associated with the policy. May include configuration toggling monitoring, uninstallation protection, etc.|
|signed|[actionSignature](#schemaactionsignature)|false|none|Optional action signing data.|
|output_permissions|object|false|none|Elasticsearch permissions that the agent requires in order to run the policy.|
|fleet|object|false|none|Agent configuration to describe how to connect to fleet-server.|

<h2 id="tocS_otelConfigService">otelConfigService</h2>
<!-- backwards compatibility -->
<a id="schemaotelconfigservice"></a>
<a id="schema_otelConfigService"></a>
<a id="tocSotelconfigservice"></a>
<a id="tocsotelconfigservice"></a>

```json
{
  "extensions": [
    "string"
  ],
  "pipelines": {
    "property1": {
      "exporters": [
        "string"
      ],
      "processors": [
        "string"
      ],
      "receivers": [
        "string"
      ]
    },
    "property2": {
      "exporters": [
        "string"
      ],
      "processors": [
        "string"
      ],
      "receivers": [
        "string"
      ]
    }
  }
}
```

OTel collector pipelines setup.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|extensions|[string]|false|none|List of enabled extensions.|
|pipelines|object|false|none|none|

<h2 id="tocS_actionUnenroll">actionUnenroll</h2>
<!-- backwards compatibility -->
<a id="schemaactionunenroll"></a>
<a id="schema_actionUnenroll"></a>
<a id="tocSactionunenroll"></a>
<a id="tocsactionunenroll"></a>

```json
null
```

The UNENROLL action data.

<h2 id="tocS_actionUninstall">actionUninstall</h2>
<!-- backwards compatibility -->
<a id="schemaactionuninstall"></a>
<a id="schema_actionUninstall"></a>
<a id="tocSactionuninstall"></a>
<a id="tocsactionuninstall"></a>

```json
null
```

The UNINSTALL action data.

<h2 id="tocS_actionRestart">actionRestart</h2>
<!-- backwards compatibility -->
<a id="schemaactionrestart"></a>
<a id="schema_actionRestart"></a>
<a id="tocSactionrestart"></a>
<a id="tocsactionrestart"></a>

```json
null
```

The RESTART action data.

<h2 id="tocS_actionRequestDiagnostics">actionRequestDiagnostics</h2>
<!-- backwards compatibility -->
<a id="schemaactionrequestdiagnostics"></a>
<a id="schema_actionRequestDiagnostics"></a>
<a id="tocSactionrequestdiagnostics"></a>
<a id="tocsactionrequestdiagnostics"></a>

```json
{
  "additional_metrics": [
    "CPU"
  ],
  "exclude_events_log": true
}
```

The REQUEST_DIAGNOSTICS action data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_metrics|[string]|false|none|list optional additional metrics.|
|exclude_events_log|boolean|false|none|Excludes the Events Log from the diagnostic collection.|

#### Enumerated Values

|Property|Value|
|---|---|
|additional_metrics|CPU|
|additional_metrics|CONN|

<h2 id="tocS_actionPolicyReassign">actionPolicyReassign</h2>
<!-- backwards compatibility -->
<a id="schemaactionpolicyreassign"></a>
<a id="schema_actionPolicyReassign"></a>
<a id="tocSactionpolicyreassign"></a>
<a id="tocsactionpolicyreassign"></a>

```json
{
  "policy_id": "string"
}
```

The POLICY_REASSIGN action data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy_id|string|true|none|none|

<h2 id="tocS_actionPolicyChange">actionPolicyChange</h2>
<!-- backwards compatibility -->
<a id="schemaactionpolicychange"></a>
<a id="schema_actionPolicyChange"></a>
<a id="tocSactionpolicychange"></a>
<a id="tocsactionpolicychange"></a>

```json
{
  "policy": {
    "id": "string",
    "secret_paths": [
      "string"
    ],
    "outputs": {},
    "inputs": [
      {}
    ],
    "extensions": {},
    "receivers": {},
    "processors": {},
    "connectors": {},
    "exporters": {},
    "service": {
      "extensions": [
        "string"
      ],
      "pipelines": {
        "property1": {
          "exporters": [
            "string"
          ],
          "processors": [
            "string"
          ],
          "receivers": [
            "string"
          ]
        },
        "property2": {
          "exporters": [
            "string"
          ],
          "processors": [
            "string"
          ],
          "receivers": [
            "string"
          ]
        }
      }
    },
    "revision": 0,
    "agent": {},
    "signed": {
      "data": "string",
      "signature": "string"
    },
    "output_permissions": {},
    "fleet": {}
  }
}
```

The POLICY_CHANGE action data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy|[policyData](#schemapolicydata)|true|none|The full policy that an agent should run after combining with local configuration/env vars.|

<h2 id="tocS_actionUpgrade">actionUpgrade</h2>
<!-- backwards compatibility -->
<a id="schemaactionupgrade"></a>
<a id="schema_actionUpgrade"></a>
<a id="tocSactionupgrade"></a>
<a id="tocsactionupgrade"></a>

```json
{
  "version": "string",
  "source_uri": "string",
  "sources": [
    "string"
  ],
  "rollback": true
}
```

the UPGRADE action data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|string|true|none|The version number that the agent should upgrade to.|
|source_uri|string|false|none|**Deprecated.** The source of the upgrade artifact.|
|sources|[string]|false|none|An ordered list of sources for the upgrade artifact.|
|rollback|boolean|false|none|Indicates if this version change should be performed as a rollback to a previous version.|

<h2 id="tocS_actionSettings">actionSettings</h2>
<!-- backwards compatibility -->
<a id="schemaactionsettings"></a>
<a id="schema_actionSettings"></a>
<a id="tocSactionsettings"></a>
<a id="tocsactionsettings"></a>

```json
{
  "log_level": "trace"
}
```

The SETTINGS action data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|log_level|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|log_level|trace|
|log_level|debug|
|log_level|info|
|log_level|warning|
|log_level|error|

<h2 id="tocS_actionCancel">actionCancel</h2>
<!-- backwards compatibility -->
<a id="schemaactioncancel"></a>
<a id="schema_actionCancel"></a>
<a id="tocSactioncancel"></a>
<a id="tocsactioncancel"></a>

```json
{
  "target_id": "string"
}
```

The CANCEL action data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|target_id|string|true|none|none|

<h2 id="tocS_actionInputAction">actionInputAction</h2>
<!-- backwards compatibility -->
<a id="schemaactioninputaction"></a>
<a id="schema_actionInputAction"></a>
<a id="tocSactioninputaction"></a>
<a id="tocsactioninputaction"></a>

```json
{}
```

The INPUT_ACTION action data.

<h2 id="tocS_actionMigrate">actionMigrate</h2>
<!-- backwards compatibility -->
<a id="schemaactionmigrate"></a>
<a id="schema_actionMigrate"></a>
<a id="tocSactionmigrate"></a>
<a id="tocsactionmigrate"></a>

```json
{
  "target_uri": "string",
  "enrollment_token": "string",
  "settings": "string"
}
```

The MIGRATE action data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|target_uri|string|true|none|URI of Fleet Server in a target cluster.|
|enrollment_token|string|true|none|Enrollment token used to enroll agent to a new cluster.|
|settings|string(application/json)|false|none|An embedded JSON object that holds user-provided settings like TLS.<br>Defined in fleet-server as a `json.RawMessage`.<br>|

<h2 id="tocS_actionPrivilegeLevelChange">actionPrivilegeLevelChange</h2>
<!-- backwards compatibility -->
<a id="schemaactionprivilegelevelchange"></a>
<a id="schema_actionPrivilegeLevelChange"></a>
<a id="tocSactionprivilegelevelchange"></a>
<a id="tocsactionprivilegelevelchange"></a>

```json
{
  "unprivileged": true,
  "user_info": {
    "username": "string",
    "password": "string",
    "groupname": "string"
  }
}
```

The PRIVILEGE_LEVEL_CHANGE action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unprivileged|boolean|true|none|Flag indicating whether target level is unprivileged. If not provided unprivileged is assumed.|
|user_info|[userInfo](#schemauserinfo)|false|none|Optional user info data.|

<h2 id="tocS_checkinResponse">checkinResponse</h2>
<!-- backwards compatibility -->
<a id="schemacheckinresponse"></a>
<a id="schema_checkinResponse"></a>
<a id="tocScheckinresponse"></a>
<a id="tocscheckinresponse"></a>

```json
{
  "ack_token": "string",
  "action": "string",
  "actions": [
    {
      "agent_id": "string",
      "created_at": "string",
      "start_time": "string",
      "expiration": "string",
      "data": {
        "policy_id": "string"
      },
      "id": "string",
      "traceparent": "string",
      "type": "UPGRADE",
      "input_type": "string",
      "timeout": 0,
      "signed": {
        "data": "string",
        "signature": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ack_token|string|false|none|The acknowlegment token used to indicate action delivery.|
|action|string|true|none|The action result. Set to "checkin".|
|actions|[[action](#schemaaction)]|false|none|A list of actions that the agent must execute.|

<h2 id="tocS_eventType">eventType</h2>
<!-- backwards compatibility -->
<a id="schemaeventtype"></a>
<a id="schema_eventType"></a>
<a id="tocSeventtype"></a>
<a id="tocseventtype"></a>

```json
"STATE"
```

The event type of the ack.
Currently the elastic-agent will only generate ACTION_RESULT events.

Not used by fleet-server.
Actions that have errored should use the error attribute to communicate an error status.
Additional action status information can be provided in the data attribute.

<h2 id="tocS_eventSubtype">eventSubtype</h2>
<!-- backwards compatibility -->
<a id="schemaeventsubtype"></a>
<a id="schema_eventSubtype"></a>
<a id="tocSeventsubtype"></a>
<a id="tocseventsubtype"></a>

```json
"RUNNING"
```

The subtype of the ack event.
The elastic-agent will only generate ACKNOWLEDGED events.

Not used by fleet-server.
Actions that have errored should use the error attribute to communicate an error status.
Additional action status information can be provided in the data attribute.

<h2 id="tocS_genericEvent">genericEvent</h2>
<!-- backwards compatibility -->
<a id="schemagenericevent"></a>
<a id="schema_genericEvent"></a>
<a id="tocSgenericevent"></a>
<a id="tocsgenericevent"></a>

```json
{
  "type": "STATE",
  "subtype": "RUNNING",
  "agent_id": "string",
  "action_id": "string",
  "message": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "error": "string"
}
```

A generic ack event for an action. Includes an optional error attribute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[eventType](#schemaeventtype)|true|none|**Deprecated.** The event type of the ack.<br>Currently the elastic-agent will only generate ACTION_RESULT events.<br><br>Not used by fleet-server.<br>Actions that have errored should use the error attribute to communicate an error status.<br>Additional action status information can be provided in the data attribute.<br>|
|subtype|[eventSubtype](#schemaeventsubtype)|true|none|**Deprecated.** The subtype of the ack event.<br>The elastic-agent will only generate ACKNOWLEDGED events.<br><br>Not used by fleet-server.<br>Actions that have errored should use the error attribute to communicate an error status.<br>Additional action status information can be provided in the data attribute.<br>|
|agent_id|string|true|none|The ID of the agent that executed the action.|
|action_id|string|true|none|The action ID.|
|message|string|true|none|An acknowlegement message. The elastic-agent inserts the action ID and action type into this message.|
|timestamp|string(date-time)|true|none|The timestamp of the acknowledgement event. Has the format of "2006-01-02T15:04:05.99999-07:00"|
|error|string|false|none|An error message.<br>If this is non-empty an error has occured when executing the action.<br>For some actions (such as UPGRADE actions) it may result in the action being marked as failed.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|STATE|
|type|ERROR|
|type|ACTION_RESULT|
|type|ACTION|
|subtype|RUNNING|
|subtype|STARTING|
|subtype|IN_PROGRESS|
|subtype|CONFIG|
|subtype|FAILED|
|subtype|STOPPING|
|subtype|STOPPED|
|subtype|DATA_DUMP|
|subtype|ACKNOWLEDGED|
|subtype|UNKNOWN|

<h2 id="tocS_upgradeEvent">upgradeEvent</h2>
<!-- backwards compatibility -->
<a id="schemaupgradeevent"></a>
<a id="schema_upgradeEvent"></a>
<a id="tocSupgradeevent"></a>
<a id="tocsupgradeevent"></a>

```json
{
  "type": "STATE",
  "subtype": "RUNNING",
  "agent_id": "string",
  "action_id": "string",
  "message": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "error": "string",
  "payload": {
    "retry": true,
    "retry_attempt": 0
  }
}
```

The ack event for an upgrade action

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[eventType](#schemaeventtype)|true|none|**Deprecated.** The event type of the ack.<br>Currently the elastic-agent will only generate ACTION_RESULT events.<br><br>Not used by fleet-server.<br>Actions that have errored should use the error attribute to communicate an error status.<br>Additional action status information can be provided in the data attribute.<br>|
|subtype|[eventSubtype](#schemaeventsubtype)|true|none|**Deprecated.** The subtype of the ack event.<br>The elastic-agent will only generate ACKNOWLEDGED events.<br><br>Not used by fleet-server.<br>Actions that have errored should use the error attribute to communicate an error status.<br>Additional action status information can be provided in the data attribute.<br>|
|agent_id|string|true|none|The ID of the agent that executed the action.|
|action_id|string|true|none|The action ID.|
|message|string|true|none|An acknowlegement message. The elastic-agent inserts the action ID and action type into this message.|
|timestamp|string(date-time)|true|none|The timestamp of the acknowledgement event. Has the format of "2006-01-02T15:04:05.99999-07:00"|
|error|string|false|none|An error message.<br>If this is non-empty an error has occured when executing the action.<br>For some actions (such as UPGRADE actions) it may result in the action being marked as failed.<br>|
|payload|object|false|none|**Deprecated.** If the payload is part of an upgrade event action ack it will include information about if the agent  will retry the upgrade.<br>Payload is only used by upgrade acks and has been replaced in more recent versions by the checkin's upgrade_details attribute.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|STATE|
|type|ERROR|
|type|ACTION_RESULT|
|type|ACTION|
|subtype|RUNNING|
|subtype|STARTING|
|subtype|IN_PROGRESS|
|subtype|CONFIG|
|subtype|FAILED|
|subtype|STOPPING|
|subtype|STOPPED|
|subtype|DATA_DUMP|
|subtype|ACKNOWLEDGED|
|subtype|UNKNOWN|

<h2 id="tocS_diagnosticsEvent">diagnosticsEvent</h2>
<!-- backwards compatibility -->
<a id="schemadiagnosticsevent"></a>
<a id="schema_diagnosticsEvent"></a>
<a id="tocSdiagnosticsevent"></a>
<a id="tocsdiagnosticsevent"></a>

```json
{
  "type": "STATE",
  "subtype": "RUNNING",
  "agent_id": "string",
  "action_id": "string",
  "message": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "error": "string",
  "data": {
    "upload_id": "string"
  }
}
```

The ack event for a request diagnostics action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[eventType](#schemaeventtype)|true|none|**Deprecated.** The event type of the ack.<br>Currently the elastic-agent will only generate ACTION_RESULT events.<br><br>Not used by fleet-server.<br>Actions that have errored should use the error attribute to communicate an error status.<br>Additional action status information can be provided in the data attribute.<br>|
|subtype|[eventSubtype](#schemaeventsubtype)|true|none|**Deprecated.** The subtype of the ack event.<br>The elastic-agent will only generate ACKNOWLEDGED events.<br><br>Not used by fleet-server.<br>Actions that have errored should use the error attribute to communicate an error status.<br>Additional action status information can be provided in the data attribute.<br>|
|agent_id|string|true|none|The ID of the agent that executed the action.|
|action_id|string|true|none|The action ID.|
|message|string|true|none|An acknowlegement message. The elastic-agent inserts the action ID and action type into this message.|
|timestamp|string(date-time)|true|none|The timestamp of the acknowledgement event. Has the format of "2006-01-02T15:04:05.99999-07:00"|
|error|string|false|none|An error message.<br>If this is non-empty an error has occured when executing the action.<br>For some actions (such as UPGRADE actions) it may result in the action being marked as failed.<br>|
|data|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|STATE|
|type|ERROR|
|type|ACTION_RESULT|
|type|ACTION|
|subtype|RUNNING|
|subtype|STARTING|
|subtype|IN_PROGRESS|
|subtype|CONFIG|
|subtype|FAILED|
|subtype|STOPPING|
|subtype|STOPPED|
|subtype|DATA_DUMP|
|subtype|ACKNOWLEDGED|
|subtype|UNKNOWN|

<h2 id="tocS_inputEvent">inputEvent</h2>
<!-- backwards compatibility -->
<a id="schemainputevent"></a>
<a id="schema_inputEvent"></a>
<a id="tocSinputevent"></a>
<a id="tocsinputevent"></a>

```json
{
  "type": "STATE",
  "subtype": "RUNNING",
  "agent_id": "string",
  "action_id": "string",
  "message": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "error": "string",
  "action_input_type": "string",
  "action_data": "string",
  "action_response": "string",
  "started_at": "1970-01-01T00:00:00Z",
  "completed_at": "1970-01-01T00:00:00Z"
}
```

The ack event for an input action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[eventType](#schemaeventtype)|true|none|**Deprecated.** The event type of the ack.<br>Currently the elastic-agent will only generate ACTION_RESULT events.<br><br>Not used by fleet-server.<br>Actions that have errored should use the error attribute to communicate an error status.<br>Additional action status information can be provided in the data attribute.<br>|
|subtype|[eventSubtype](#schemaeventsubtype)|true|none|**Deprecated.** The subtype of the ack event.<br>The elastic-agent will only generate ACKNOWLEDGED events.<br><br>Not used by fleet-server.<br>Actions that have errored should use the error attribute to communicate an error status.<br>Additional action status information can be provided in the data attribute.<br>|
|agent_id|string|true|none|The ID of the agent that executed the action.|
|action_id|string|true|none|The action ID.|
|message|string|true|none|An acknowlegement message. The elastic-agent inserts the action ID and action type into this message.|
|timestamp|string(date-time)|true|none|The timestamp of the acknowledgement event. Has the format of "2006-01-02T15:04:05.99999-07:00"|
|error|string|false|none|An error message.<br>If this is non-empty an error has occured when executing the action.<br>For some actions (such as UPGRADE actions) it may result in the action being marked as failed.<br>|
|action_input_type|string|true|none|The input_type of the action for input actions.|
|action_data|string(application/json)|true|none|The action data for the input action being acknowledged.|
|action_response|string(application/json)|true|none|The action response for the input action being acknowledged.|
|started_at|string(date-time)|true|none|The time at which the action was started.|
|completed_at|string(date-time)|true|none|The time at which the action was completed.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|STATE|
|type|ERROR|
|type|ACTION_RESULT|
|type|ACTION|
|subtype|RUNNING|
|subtype|STARTING|
|subtype|IN_PROGRESS|
|subtype|CONFIG|
|subtype|FAILED|
|subtype|STOPPING|
|subtype|STOPPED|
|subtype|DATA_DUMP|
|subtype|ACKNOWLEDGED|
|subtype|UNKNOWN|

<h2 id="tocS_ackRequest">ackRequest</h2>
<!-- backwards compatibility -->
<a id="schemaackrequest"></a>
<a id="schema_ackRequest"></a>
<a id="tocSackrequest"></a>
<a id="tocsackrequest"></a>

```json
{
  "events": [
    {
      "type": "STATE",
      "subtype": "RUNNING",
      "agent_id": "string",
      "action_id": "string",
      "message": "string",
      "timestamp": "1970-01-01T00:00:00Z",
      "error": "string"
    }
  ]
}
```

The request an elastic-agent sends to fleet-serve to acknowledge the execution of one or more actions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|events|[[genericEvent](#schemagenericevent) \| [upgradeEvent](#schemaupgradeevent) \| [diagnosticsEvent](#schemadiagnosticsevent) \| [inputEvent](#schemainputevent)]|true|none|none|

<h2 id="tocS_ackResponseItem">ackResponseItem</h2>
<!-- backwards compatibility -->
<a id="schemaackresponseitem"></a>
<a id="schema_ackResponseItem"></a>
<a id="tocSackresponseitem"></a>
<a id="tocsackresponseitem"></a>

```json
{
  "status": 0,
  "message": "string"
}
```

The results of processing an acknowledgement event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|integer|true|none|An HTTP status code that indicates if the event was processed successfully or not.|
|message|string|false|none|HTTP status text.|

<h2 id="tocS_ackResponse">ackResponse</h2>
<!-- backwards compatibility -->
<a id="schemaackresponse"></a>
<a id="schema_ackResponse"></a>
<a id="tocSackresponse"></a>
<a id="tocsackresponse"></a>

```json
{
  "action": "string",
  "errors": true,
  "items": [
    {
      "status": 0,
      "message": "string"
    }
  ]
}
```

Response to processing acknowledgement events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The action result. Will have the value "acks".|
|errors|boolean|false|none|A flag to indicate if one or more errors occured when proccessing events.|
|items|[[ackResponseItem](#schemaackresponseitem)]|false|none|The in-order list of results from processing events.|

<h2 id="tocS_uploadBeginRequest">uploadBeginRequest</h2>
<!-- backwards compatibility -->
<a id="schemauploadbeginrequest"></a>
<a id="schema_uploadBeginRequest"></a>
<a id="tocSuploadbeginrequest"></a>
<a id="tocsuploadbeginrequest"></a>

```json
{
  "file": {
    "Compression": "deflate",
    "hash": {
      "sha256": "04f81394bababa0fb31e6ad2d703c875eb46dc254527e39ff316564c0dc339e2"
    },
    "name": "yankees-stats.zip",
    "mime_type": "application/zip",
    "size": 8276748
  },
  "action_id": "2f440d31-2ea4-42f8-b0f2-4b6e98e8dc5e",
  "agent_id": "9347e918-5e00-48b0-b302-a09f9258a46d",
  "src": "endpoint"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|object|true|none|none|
|action_id|string|true|none|ID of the action that requested this file|
|agent_id|string|true|none|Identifier of the agent uploading. Matches the ID usually found in agent.id|
|src|string|true|none|The source integration sending this file|

#### Enumerated Values

|Property|Value|
|---|---|
|src|endpoint|
|src|agent|

<h2 id="tocS_uploadBeginResponse">uploadBeginResponse</h2>
<!-- backwards compatibility -->
<a id="schemauploadbeginresponse"></a>
<a id="schema_uploadBeginResponse"></a>
<a id="tocSuploadbeginresponse"></a>
<a id="tocsuploadbeginresponse"></a>

```json
{
  "upload_id": "fbc8e23c-055d-461e-87f7-b0d1b57f14b4",
  "chunk_size": 4194304
}
```

Response to initiating a file upload

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|upload_id|string|true|none|A unique identifier for the ensuing upload operation|
|chunk_size|integer(int64)|true|none|The required size (in bytes) that the file must be segmented into for each chunk|

<h2 id="tocS_uploadCompleteRequest">uploadCompleteRequest</h2>
<!-- backwards compatibility -->
<a id="schemauploadcompleterequest"></a>
<a id="schema_uploadCompleteRequest"></a>
<a id="tocSuploadcompleterequest"></a>
<a id="tocsuploadcompleterequest"></a>

```json
{
  "transithash": {
    "sha256": "83810fdc61c44290778c212d7829d0c3f0232e81bd551d3943998a920025d14f"
  }
}
```

Request to verify and finish an uploaded file

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transithash|object|true|none|the transithash (sha256 of the concatenation of each in-order chunk hash) of the entire file contents|

<h2 id="tocS_auditUnenrollRequest">auditUnenrollRequest</h2>
<!-- backwards compatibility -->
<a id="schemaauditunenrollrequest"></a>
<a id="schema_auditUnenrollRequest"></a>
<a id="tocSauditunenrollrequest"></a>
<a id="tocsauditunenrollrequest"></a>

```json
{
  "reason": "uninstall",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

Request to add unenroll audit information to an agent document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|true|none|The unenroll reason|
|timestamp|string(date-time)|true|none|Agent timestamp of when the uninstall/unenroll action occured; may differ from fleet-server time due to retries.|

#### Enumerated Values

|Property|Value|
|---|---|
|reason|uninstall|
|reason|orphaned|
|reason|key_revoked|
|reason|migrated|
