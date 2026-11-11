<h1 id="integrations">Integrations v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://apiexplorer.support.rocket.chat">https://apiexplorer.support.rocket.chat</a>

<h1 id="integrations-integration">Integration</h1>

## Create Integration

<a id="opIdpost-api-v1-integrations-create"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/integrations.create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: 9HqLlyZOugD_0YdwAJF8V47U3QHXSq' \
  -H 'X-User-Id: aobEdbYhXfu5hkeqG' \
  -d '{
    "type": "webhook-incoming",
    "username": "test.cat",
    "channel": "#general",
    "scriptEnabled": true,
    "name": "test.cat",
    "enabled": true
  }'
```

`POST /api/v1/integrations.create`

Use this endpoint to create an incoming or outgoing integration. For details, see <a href='https://docs.rocket.chat/docs/integrations' target='_blank'>Integrations</a>.

From Rocket.Chat 9.0.0, scripts are stored and run as written, without Babel. Existing scripts keep their transpiled version until they're edited and saved on Rocket.Chat 9.0.0 or later. See <a href='https://docs.rocket.chat/docs/integrations#script-compatibility' target='_blank'>Script compatibility</a> for the script patterns that must be updated.

Permissions required to create incoming integrations:
* `manage-incoming-integrations`
* `manage-own-incoming-integrations`

Permissions required to create outgoing integrations:
* `manage-outgoing-integrations`
* `manage-own-outgoing-integrations`
### Changelog
| Version      | Description |
| ---------------- | ------------|
|9.0.0            | Removed `skipTranspile`.       |
|8.4.0            | Added `skipTranspile` field to opt-out of Babel transpilation |
|1.1.0            | Separate permissions in incoming and outgoing.       |
|0.49.0            | Added       |

> Body parameter

```json
{
  "type": "webhook-incoming",
  "username": "test.cat",
  "channel": "#general",
  "scriptEnabled": true,
  "name": "test.cat",
  "enabled": true
}
```

<h3 id="create-integration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authorization token of the user.|
|X-User-Id|header|string|true|The user ID of the user.|
|body|body|object|false|none|
|» type|body|string|true|The type of integration to create. The possible values are:<br>* `webhook-incoming`<br>* `webhook-outgoing`|
|» username|body|string|true|The username to post this the messages as.|
|» channel|body|string|true|The channel, group, or @username. The value can also be `all_public_channels`, `all_private_groups`, or `all_direct_messages`. Comma separated for more than one.|
|» scriptEnabled|body|boolean|true|Whether the script should be enabled.|
|» script|body|string|false|The script that is triggered when this integration is triggered.|
|» name|body|string|true|The name of the integration.|
|» enabled|body|boolean|true|Whether this integration should be enabled or not.|
|» alias|body|string|false|The alias which should be applied to messages when this integration is processed.|
|» avatar|body|string|false|The logo to apply to the messages that this integration sends. For example, http://res.guggy.com/logo_128.png|
|» emoji|body|string|false|The emoji which should be displayed as the avatar for messages from this integration.|
|» event|body|string|true|**Required for outgoing integrations.**<br><br>The type of event can be any of the following: <br>* `sendMessage`<br>* `fileUploaded`<br>* `roomArchived`<br>* `roomCreated`<br>* `roomJoined`<br>* `roomLeft`<br>* `userCreated`|
|» urls|body|[string]|true|**Required for outgoing integrations.**<br><br>The urls to call whenever this integration is triggered.|
|» triggerWords|body|string|false|This is an outgoing integration parameter.<br>Specific words, separated by commas, that should trigger this integration.|
|» token|body|string|false|This is an outgoing integration parameter.<br>If your integration requires a special token from the server (API key), use this parameter.|

> Example responses

> 200 Response

```json
{
  "integration": {
    "type": "webhook-incoming",
    "username": "test.cat",
    "channel": [
      "#general"
    ],
    "scriptEnabled": true,
    "name": "test.cat",
    "enabled": true,
    "scriptEngine": "isolated-vm",
    "overrideDestinationChannelEnabled": false,
    "token": "XuHp73MccmCvJ9m3fKdQK6HKW9tjhBcbTKKHCSSLsv7qn4fk",
    "userId": "CkCPNcvsvCDfmWLqC",
    "_createdAt": "2024-01-10T14:12:07.739Z",
    "_createdBy": {
      "_id": "CkCPNcvsvCDfmWLqC",
      "username": "test.cat"
    },
    "_id": "659ea5b72dd9f928ada3e43e"
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'type'\n must have required property 'type'\n must match exactly one schema in oneOf [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="create-integration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="create-integration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|integration|object|false|none|none|
|» type|string|false|none|none|
|» username|string|false|none|none|
|» channel|[string]|false|none|none|
|» scriptEnabled|boolean|false|none|none|
|» name|string|false|none|none|
|» enabled|boolean|false|none|none|
|» scriptEngine|string|false|none|none|
|» overrideDestinationChannelEnabled|boolean|false|none|none|
|» token|string|false|none|none|
|» userId|string|false|none|none|
|» _createdAt|string|false|none|none|
|» _createdBy|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» _id|string|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Integration

<a id="opIdget-api-v1-integrations-get"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/integrations.get?integrationId=ByehQjC44FwMeiLbX' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: 9HqLlyZOugD_0YdwAJF8V47U3QHXSq' \
  -H 'X-User-Id: aobEdbYhXfu5hkeqG'
```

`GET /api/v1/integrations.get`

Get the information of a specific incoming or outgoing integration.

Permissions required:
* `manage-incoming-integrations`
* `manage-own-incoming-integrations`
* `manage-outgoing-integrations`
* `manage-own-outgoing-integrations`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|2.4.0            | Added       |

<h3 id="get-integration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authorization token of the user.|
|X-User-Id|header|string|true|The user ID of the user.|
|integrationId|query|string|true|The integration ID.|
|createdBy|query|string|false|The user ID who created the integration.|

> Example responses

> 200 Response

```json
{
  "integration": {
    "_id": "659ea5e42dd9f928ada3e451",
    "type": "webhook-outgoing",
    "username": "test.cat",
    "channel": [
      "#general"
    ],
    "scriptEnabled": true,
    "name": "test.cat",
    "enabled": true,
    "event": "sendMessage",
    "urls": [
      "https://text2gif.guggy.com/guggify"
    ],
    "scriptEngine": "isolated-vm",
    "userId": "CkCPNcvsvCDfmWLqC",
    "_createdAt": "2024-01-10T14:12:52.201Z",
    "_createdBy": {
      "_id": "CkCPNcvsvCDfmWLqC",
      "username": "test.cat"
    },
    "_updatedAt": "2024-01-10T14:12:52.203Z"
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'integrationId' [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="get-integration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-integration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|integration|object|false|none|none|
|» _id|string|false|none|none|
|» type|string|false|none|none|
|» username|string|false|none|none|
|» channel|[string]|false|none|none|
|» scriptEnabled|boolean|false|none|none|
|» name|string|false|none|none|
|» enabled|boolean|false|none|none|
|» event|string|false|none|none|
|» urls|[string]|false|none|none|
|» scriptEngine|string|false|none|none|
|» userId|string|false|none|none|
|» _createdAt|string|false|none|none|
|» _createdBy|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» _updatedAt|string|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Integration History

<a id="opIdget-api-v1-integrations-history"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/integrations.history?id=nvdQuJQ6tE9HRFBzd' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: 9HqLlyZOugD_0YdwAJF8V47U3QHXSq' \
  -H 'X-User-Id: aobEdbYhXfu5hkeqG'
```

`GET /api/v1/integrations.history`

Any of the following permissions is required:
 * `manage-incoming-integrations`
 * `manage-own-incoming-integrations`
 * `manage-outgoing-integrations`
 * `manage-own-outgoing-integrations`
 
 The endpoint returns the integration history based on the user permissions.
 ### Changelog
 |Version      | Description | 
 | ---------------- | ------------|
 |9.0.0            | Removed the `fields` and `query` parameters.       |
 |1.1.0            | Separate permissions in incoming and outgoing.       |
 |0.53.0            | Added       |

<h3 id="get-integration-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authorization token of the user.|
|X-User-Id|header|string|true|The user ID of the user.|
|id|query|string|true|The integration ID.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object|false|List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, `{"value": -1, "_id": 1}`. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "history": [],
  "offset": 0,
  "items": 0,
  "total": 0,
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'id' [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="get-integration-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-integration-history-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|history|[object]|false|none|none|
|offset|integer|false|none|none|
|items|integer|false|none|none|
|total|integer|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Clear Integration History

<a id="opIdpost-api-v1-integrations.clearHistory"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/integrations.clearHistory \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: 9HqLlyZOugD_0YdwAJF8V47U3QHXSq' \
  -H 'X-User-Id: aobEdbYhXfu5hkeqG' \
  -d '{
    "integrationId": "nvdQuJQ6tE9HRFBzd"
  }'
```

`POST /api/v1/integrations.clearHistory`

Clear the history of an outgoing <a href='https://docs.rocket.chat/docs/integrations' target='_blank'>integration</a>. 

Any of the following permissions is required:
  * `manage-outgoing-integrations`
  * `manage-own-outgoing-integrations` (clears history only for integrations created by the calling user)

### Changelog
|Version      | Description |
| ---------------- | ------------|
|8.7.0            | Added       |

> Body parameter

```json
{
  "integrationId": "nvdQuJQ6tE9HRFBzd"
}
```

<h3 id="clear-integration-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authorization token of the user.|
|X-User-Id|header|string|true|The user ID of the user.|
|body|body|object|false|none|
|» integrationId|body|string|true|The ID of the integration whose history you want to clear.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'integrationId' [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="clear-integration-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="clear-integration-history-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Replay Outgoing Integration

<a id="opIdpost-api-v1-integrations.replayOutgoing"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/integrations.replayOutgoing \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: 9HqLlyZOugD_0YdwAJF8V47U3QHXSq' \
  -H 'X-User-Id: aobEdbYhXfu5hkeqG' \
  -d '{
    "integrationId": "nvdQuJQ6tE9HRFBzd",
    "historyId": "8G2GfBz3prSampleId"
  }'
```

`POST /api/v1/integrations.replayOutgoing`

Replay a history entry of an outgoing <a href='https://docs.rocket.chat/docs/integrations' target='_blank'>integration</a>, triggering the integration again with the recorded data. 

Any of the following permissions is required:
  * `manage-outgoing-integrations`
  * `manage-own-outgoing-integrations` (replays only integrations created by the calling user)

### Changelog
|Version      | Description |
| ---------------- | ------------|
|8.7.0            | Added       |

> Body parameter

```json
{
  "integrationId": "nvdQuJQ6tE9HRFBzd",
  "historyId": "8G2GfBz3prSampleId"
}
```

<h3 id="replay-outgoing-integration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authorization token of the user.|
|X-User-Id|header|string|true|The user ID of the user.|
|body|body|object|false|none|
|» integrationId|body|string|true|The ID of the outgoing integration.|
|» historyId|body|string|true|The ID of the integration history to replay. Use the <a href='https://developer.rocket.chat/apidocs/get-integration-history' target='_blank'>Get Integration History</a> endpoint to list history entries.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "errorType": "error-invalid-params",
  "error": "must have required property 'historyId'"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="replay-outgoing-integration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="replay-outgoing-integration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get List of Integrations

<a id="opIdget-api-v1-integrations-list"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/integrations.list \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: 9HqLlyZOugD_0YdwAJF8V47U3QHXSq' \
  -H 'X-User-Id: aobEdbYhXfu5hkeqG'
```

`GET /api/v1/integrations.list`

Any of the following permissions is required:
* `manage-incoming-integrations`
* `manage-own-incoming-integrations`
* `manage-outgoing-integrations`
* `manage-own-outgoing-integrations`

The endpoint returns the integrations based on the user permissions.
### Changelog
| Version      | Description | 
| ---------------- | ------------|
|9.0.0            | Removed the `fields` and `query` parameters.       |
|7.0.0            | Added `name` and `type` query parameters for filtering.       |
|1.1.0            | Separate permissions in incoming and outgoing.       |
|0.49.0            | Added       |

<h3 id="get-list-of-integrations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authorization token of the user.|
|X-User-Id|header|string|true|The user ID of the user.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|name|query|string|false|Filter list by the name of the integration.|
|type|query|string|false|Filter list by the type of the integration. It can be `webhook-outgoing` or `webhook-incoming`.|
|sort|query|object|false|Sort the results in ascending (`1`) or descending order (`-1`). By default, the results are sorted in descending order of timestamp (`{"ts": -1}`). The additional options for the sort parameter are:<br> * `name`: Sort by the integration name. `sort={"name": 1}` or `sort={"name": -1}`<br> * `channel`: Sort by target channel. `sort={"channel": 1}` or `sort={"channel": -1}`<br> * `_createdAt`: Sort by date of creation. `sort={"_createdAt": 1}` or `sort={"_createdAt": -1}`<br> * `_createdBy`: Sort by user who created the integration. `sort={"_createdBy": 1}` or `sort={"_createdBy": -1}`<br> * `username`: Sort by the value in the "post-as" username field. `sort={"username": 1}` or `sort={"username": -1}`<br> * You can also use multiple options for one sort query. For example, `sort={"_createdAt": -1, "name": 1}`. This sorts by creation date in descending order, then by name in ascending order.|

> Example responses

> 200 Response

```json
{
  "integrations": [
    {
      "_id": "WMQDChpnYTRmFre9h",
      "enabled": true,
      "username": "rocket.cat",
      "alias": "Guggy",
      "avatar": "https://image.crisp.im/avatar/website/17651a90-e082-43f6-b308-957cea6e323c/128",
      "name": "Guggy",
      "triggerWords": [
        "!guggy",
        "guggy",
        "gif+"
      ],
      "urls": [
        "http://text2gif.guggy.com/guggify"
      ],
      "token": "aobEdbYhXfu5hkeqG",
      "script": "...",
      "scriptEnabled": true,
      "impersonateUser": false,
      "scriptCompiled": "...",
      "scriptError": null,
      "type": "webhook-outgoing",
      "userId": "rocket.cat",
      "channel": [],
      "_createdAt": "2017-01-05T17:06:05.660Z",
      "_createdBy": {
        "username": "graywolf336",
        "_id": "R4jgcQaQhvvK6K3iY"
      },
      "_updatedAt": "2017-01-05T17:06:05.660Z"
    },
    {
      "_id": "3aazpZ2WzoBP8msi9",
      "type": "webhook-outgoing",
      "name": "Testing via REST API",
      "enabled": false,
      "username": "rocket.cat",
      "urls": [
        "http://text2gif.guggy.com/guggify"
      ],
      "scriptEnabled": false,
      "userId": "rocket.cat",
      "channel": [],
      "_createdAt": "2017-01-06T13:23:46.018Z",
      "_createdBy": {
        "username": "graywolf336",
        "_id": "R4jgcQaQhvvK6K3iY"
      },
      "_updatedAt": "2017-01-06T13:23:46.018Z"
    }
  ],
  "offset": 0,
  "items": 2,
  "total": 2,
  "success": true
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="get-list-of-integrations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-list-of-integrations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|integrations|[object]|false|none|none|
|» _id|string|false|none|none|
|» enabled|boolean|false|none|none|
|» username|string|false|none|none|
|» alias|string|false|none|none|
|» avatar|string|false|none|none|
|» name|string|false|none|none|
|» triggerWords|[string]|false|none|none|
|» urls|[string]|false|none|none|
|» token|string|false|none|none|
|» script|string|false|none|none|
|» scriptEnabled|boolean|false|none|none|
|» impersonateUser|boolean|false|none|none|
|» scriptCompiled|string|false|none|none|
|» scriptError|string|false|none|none|
|» type|string|false|none|none|
|» userId|string|false|none|none|
|» channel|[object]|false|none|none|
|» _createdAt|string|false|none|none|
|» _createdBy|object|false|none|none|
|» » username|string|false|none|none|
|» » _id|string|false|none|none|
|» _updatedAt|string|false|none|none|
|offset|integer|false|none|none|
|items|integer|false|none|none|
|total|integer|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Update Integration

<a id="opIdput-api-v1-integrations.update"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/integrations.update \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: 9HqLlyZOugD_0YdwAJF8V47U3QHXSq' \
  -H 'X-User-Id: aobEdbYhXfu5hkeqG' \
  -d '{
    "type": "webhook-incoming",
    "name": "Test",
    "enabled": false,
    "username": "rocket.cat",
    "scriptEnabled": false,
    "channel": "#test",
    "integrationId": "x3tPXa9XXRqW6Xp2M"
  }'
```

`PUT /api/v1/integrations.update`

Update an existing integration.

From Rocket.Chat 9.0.0, scripts are stored and run as written, without Babel. Existing scripts keep their transpiled version until they're edited and saved on Rocket.Chat 9.0.0 or later. See <a href='https://docs.rocket.chat/docs/integrations#script-compatibility' target='_blank'>Script compatibility</a> for the script patterns that must be updated.

Permissions required:
* `manage-incoming-integrations`
* `manage-own-incoming-integrations`
* `manage-outgoing-integrations`
* `manage-own-outgoing-integrations`

### Changelog
| Version      | Description | 
| ---------------- | ------------|
|9.0.0            | Removed `skipTranspile`.       |
|8.4.0   | Added `skipTranspile` field to opt-out of Babel transpilation |
|3.4.0            | Added       |

> Body parameter

```json
{
  "type": "webhook-incoming",
  "name": "Test",
  "enabled": false,
  "username": "rocket.cat",
  "scriptEnabled": false,
  "channel": "#test",
  "integrationId": "x3tPXa9XXRqW6Xp2M"
}
```

<h3 id="update-integration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authorization token of the user.|
|X-User-Id|header|string|true|The user ID of the user.|
|body|body|object|false|none|
|» type|body|string|true|The type of integration. The possible values are:<br>* `webhook-outgoing`<br>* `webhook-incoming`|
|» name|body|string|true|The name of the integration.|
|» enabled|body|boolean|true|Whether this integration should be enabled or not.|
|» username|body|string|true|The username to post this the messages as.|
|» scriptEnabled|body|boolean|true|Whether the script should be enabled.|
|» channel|body|string|true|The channel, group, or @username. The values can also be `all_public_channels`, `all_private_groups`, or `all_direct_messages`. Comma separated for more than one.|
|» integrationId|body|string|true|The integration ID.|
|» urls|body|[string]|false|The urls to call whenever this integration is triggered.|
|» event|body|string|false|This field is required only for outgoing integrations. <br>The type of event can be any of these: `sendMessage`, `fileUploaded`, `roomArchived`, `roomCreated`, `roomJoined`, `roomLeft`, `userCreated`.|
|» triggerWords|body|string|false|Specific words, separated by commas, which should trigger this integration.|
|» alias|body|string|false|The alias which should be applied to messages when this integration is processed.|
|» avatar|body|string|false|The logo to apply to the messages that this integration sends.|
|» emoji|body|string|false|The emoji which should be displayed as the avatar for messages from this integration.|
|» token|body|string|false|If your integration requires a special token from the server (API key), use this parameter.|
|» script|body|string|false|Script triggered when this integration is triggered.|
|» targetChannel|body|string|false|The channel where messages will be sent to.|
|» target_url|body|string|false|The target url to set.|

> Example responses

> 200 Response

```json
{
  "integration": {
    "_id": "x3tPXa9XXRqW6Xp2M",
    "enabled": false,
    "channel": [
      "#test"
    ],
    "username": "rodriq",
    "name": "Test",
    "alias": "Jim",
    "avatarUrl": "",
    "emoji": ":ghost:",
    "scriptEnabled": false,
    "script": "console.log(\"MANNNNN ---------------------------------------------------------\")",
    "type": "webhook-incoming",
    "token": "XYsrkngRr5PBkWhCqJWk5ZfKzQoxSv4QhxkK5trSgJENwbRL",
    "userId": "d26x6zSkaPSe5gCyy",
    "_createdAt": "2021-10-22T14:48:46.025Z",
    "_createdBy": {
      "_id": "d26x6zSkaPSe5gCyy",
      "username": "rod"
    },
    "_updatedAt": "2021-10-22T16:08:39.843Z",
    "_updatedBy": {
      "_id": "d26x6zSkaPSe5gCyy",
      "username": "rod"
    }
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'type'\n must have required property 'type'\n must match exactly one schema in oneOf [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="update-integration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="update-integration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|integration|object|false|none|none|
|» _id|string|false|none|none|
|» enabled|boolean|false|none|none|
|» channel|[string]|false|none|none|
|» username|string|false|none|none|
|» name|string|false|none|none|
|» alias|string|false|none|none|
|» avatarUrl|string|false|none|none|
|» emoji|string|false|none|none|
|» scriptEnabled|boolean|false|none|none|
|» script|string|false|none|none|
|» type|string|false|none|none|
|» token|string|false|none|none|
|» userId|string|false|none|none|
|» _createdAt|string|false|none|none|
|» _createdBy|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» _updatedBy|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Remove Integration

<a id="opIdpost-api-v1-integrations.remove"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/integrations.remove \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: 9HqLlyZOugD_0YdwAJF8V47U3QHXSq' \
  -H 'X-User-Id: aobEdbYhXfu5hkeqG' \
  -d '{
    "integrationId": "oNLthAt9RwMw39N2B",
    "type": "webhook-outgoing"
  }'
```

`POST /api/v1/integrations.remove`

Remove an integration from the workspace.

Any of the following permissions is required:
* `manage-incoming-integrations`
* `manage-own-incoming-integrations`
* `manage-outgoing-integrations`
* `manage-own-outgoing-integrations`
### Changelog
| Version      | Description |
| ---------------- | ------------|
|1.1.0            | Separate permissions in incoming and outgoing.       |
|0.49.0            | Added       |

> Body parameter

```json
{
  "integrationId": "oNLthAt9RwMw39N2B",
  "type": "webhook-outgoing"
}
```

<h3 id="remove-integration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authorization token of the user.|
|X-User-Id|header|string|true|The user ID of the user.|
|body|body|object|false|none|
|» integrationId|body|string|true|The integration ID to remove.|
|» type|body|string|true|The type of integration. The possible values are:<br>* `webhook-outgoing`<br>* `webhook-incoming`|

> Example responses

> 200 Response

```json
{
  "integration": {
    "type": "webhook-incoming",
    "username": "rocket.cat",
    "channel": false,
    "scriptEnabled": "sendMessage",
    "name": "sendMessage",
    "enabled": "sendMessage"
  }
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'type'\n must have required property 'type'\n must have required property 'type'\n must match exactly one schema in oneOf [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="remove-integration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="remove-integration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|integration|object|false|none|none|
|» type|string|false|none|none|
|» username|string|false|none|none|
|» channel|boolean|false|none|none|
|» scriptEnabled|string|false|none|none|
|» name|string|false|none|none|
|» enabled|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="integrations-oauth-apps">OAuth Apps</h1>

## Create OAuth App

<a id="opIdpost-api-v1-oauth-apps.create"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/oauth-apps.create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: 9HqLlyZOugD_0YdwAJF8V47U3QHXSq' \
  -H 'X-User-Id: aobEdbYhXfu5hkeqG' \
  -d '{
    "name": "test-oauth-app",
    "redirectUri": "https://testuri.com",
    "active": true
  }'
```

`POST /api/v1/oauth-apps.create`

Create an app to log in to third-party applications. For details, you can refer to the <a href='https://docs.rocket.chat/docs/third-party-login' target='_blank'> Third-party login user guide</a>. Permission required: `manage-oauth-apps`'

> Body parameter

```json
{
  "name": "test-oauth-app",
  "redirectUri": "https://testuri.com",
  "active": true
}
```

<h3 id="create-oauth-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authorization token of the user.|
|X-User-Id|header|string|true|The user ID of the user.|
|body|body|object|false|none|
|» name|body|string|true|Name of the app that you want to create.|
|» redirectUri|body|string|true|The URL to redirect the OAuth app.|
|» active|body|boolean|true|Whether the app will be active or not. Enter a boolean value, `true` or `false`.|

> Example responses

> 200 Response

```json
{
  "application": {
    "name": "test-oauth-app",
    "redirectUri": "https://testuri.com",
    "active": true,
    "clientId": "bN9D5TjY8Cv8GqWfE",
    "clientSecret": "l3HAl0lSr2VaTYZVED6EabyhNzovS8Je2JYmbjNT-V1",
    "_createdAt": "2024-01-17T13:30:41.521Z",
    "_updatedAt": "2024-01-17T13:30:41.521Z",
    "_createdBy": {
      "_id": "JFTcMhEAFbNPfnp49",
      "username": "math.bar"
    },
    "_id": "65a7d68142a7e12453052d56"
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'name' [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="create-oauth-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="create-oauth-app-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application|object|false|none|none|
|» name|string|false|none|none|
|» redirectUri|string|false|none|none|
|» active|boolean|false|none|none|
|» clientId|string|false|none|none|
|» clientSecret|string|false|none|none|
|» _createdAt|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» _createdBy|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» _id|string|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Update OAuth App

<a id="opIdpost-api-v1-oauth-apps.update"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/oauth-apps.update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: 9HqLlyZOugD_0YdwAJF8V47U3QHXSq' \
  -H 'X-User-Id: aobEdbYhXfu5hkeqG' \
  -d '{
    "name": "test-oauth-app",
    "redirectUri": "https://testuri.com",
    "active": true
  }'
```

`POST /api/v1/oauth-apps.update`

Update an existing app. Permission required: `manage-oauth-apps`

> Body parameter

```json
{
  "name": "test-oauth-app",
  "redirectUri": "https://testuri.com",
  "active": true
}
```

<h3 id="update-oauth-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authorization token of the user.|
|X-User-Id|header|string|true|The user ID of the user.|
|body|body|object|false|none|
|» name|body|string|true|Name of the app that you want to update.|
|» redirectUri|body|string|true|The URL to redirect the OAuth app.|
|» active|body|boolean|true|Whether the app will be active or not. Enter a boolean value, `true` or `false`.|
|» appId|body|string|true|The app ID. The app ID. This is created when you create an app. You can use the <a href='https://developer.rocket.chat/apidocs/get-list-of-oauth-apps' target='_blank'>Get List of OAuth Apps</a> endpoint to get the app ID.|

> Example responses

> 200 Response

```json
{
  "_id": "65a7d77142a7e12453052d59",
  "name": "test-oauth-app2",
  "redirectUri": "https://testuri2.com",
  "active": false,
  "clientId": "fxHAgLRjP3RswMe67",
  "clientSecret": "QwIAYE1_8M02p-Js8SHZyTPg7HpJm-1ZtbjuSp8bXpP",
  "_createdAt": "2024-01-17T13:34:41.445Z",
  "_updatedAt": "2024-01-17T13:37:16.966Z",
  "_createdBy": {
    "_id": "JFTcMhEAFbNPfnp49",
    "username": "math.bar"
  },
  "_updatedBy": {
    "_id": "JFTcMhEAFbNPfnp49",
    "username": "math.bar"
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'name' [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="update-oauth-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="update-oauth-app-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|false|none|none|
|name|string|false|none|none|
|redirectUri|string|false|none|none|
|active|boolean|false|none|none|
|clientId|string|false|none|none|
|clientSecret|string|false|none|none|
|_createdAt|string|false|none|none|
|_updatedAt|string|false|none|none|
|_createdBy|object|false|none|none|
|» _id|string|false|none|none|
|» username|string|false|none|none|
|_updatedBy|object|false|none|none|
|» _id|string|false|none|none|
|» username|string|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get List of OAuth Apps

<a id="opIdget-api-v1-oauth-apps.list"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/oauth-apps.list \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: 9HqLlyZOugD_0YdwAJF8V47U3QHXSq' \
  -H 'X-User-Id: aobEdbYhXfu5hkeqG'
```

`GET /api/v1/oauth-apps.list`

Use this endpoint to get the list of apps. Permission required: `manage-oauth-apps`
### Changelog
| Version      | Description |
| ---------------- | ------------|
|2.4.0            | Added       |

<h3 id="get-list-of-oauth-apps-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authorization token of the user.|
|X-User-Id|header|string|true|The user ID of the user.|

> Example responses

> 200 Response

```json
{
  "oauthApps": [
    {
      "_id": "zapier",
      "name": "Zapier",
      "active": true,
      "clientId": "zapier",
      "clientSecret": "RTK6TlndaCIolhQhZ7_KHIGOKj41RnlaOq_o-7JKwLr",
      "redirectUri": "https://zapier.com/dashboard/auth/oauth/return/RocketChatDevAPI/",
      "_createdAt": "2019-10-17T22:55:32.787Z",
      "_createdBy": {
        "_id": "system",
        "username": "system"
      },
      "_updatedAt": "2019-10-17T22:55:32.787Z"
    }
  ],
  "success": true
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="get-list-of-oauth-apps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-list-of-oauth-apps-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|oauthApps|[object]|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» active|boolean|false|none|none|
|» clientId|string|false|none|none|
|» clientSecret|string|false|none|none|
|» redirectUri|string|false|none|none|
|» _createdAt|string|false|none|none|
|» _createdBy|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» _updatedAt|string|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get OAuth App

<a id="opIdget-api-v1-oauth-apps.get"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/oauth-apps.get \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: 9HqLlyZOugD_0YdwAJF8V47U3QHXSq' \
  -H 'X-User-Id: aobEdbYhXfu5hkeqG'
```

`GET /api/v1/oauth-apps.get`

Retrieves an OAuth app by ID or client ID.

Permission required: `manage-oauth-apps`. The endpoint can be accessed even without this permission, but sensitive information (such as client secrets) will be filtered out.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|2.4.0            | Added       |

<h3 id="get-oauth-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authorization token of the user.|
|X-User-Id|header|string|true|The user ID of the user.|
|clientId|query|string|false|The client ID. This value is required if `_id` is not used.|
|_id|query|string|false|The app ID. This value is required if `clientId` is not used.|

> Example responses

> 200 Response

```json
{
  "oauthApp": {
    "_id": "zapier",
    "name": "Zapier",
    "active": true,
    "clientId": "zapier",
    "clientSecret": "RTK6TlndaCIolhQhZ7_KHIGOKj41RnlaOq_o-7JKwLr",
    "redirectUri": "https://zapier.com/dashboard/auth/oauth/return/RocketChatDevAPI/",
    "_createdAt": "2019-10-17T22:55:32.787Z",
    "_createdBy": {
      "_id": "system",
      "username": "system"
    },
    "_updatedAt": "2019-10-17T22:55:32.787Z"
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property '_id'\n must have required property 'clientId'\n must have required property 'appId'\n must match exactly one schema in oneOf [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="get-oauth-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-oauth-app-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|oauthApp|object|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» active|boolean|false|none|none|
|» clientId|string|false|none|none|
|» clientSecret|string|false|none|none|
|» redirectUri|string|false|none|none|
|» _createdAt|string|false|none|none|
|» _createdBy|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» _updatedAt|string|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Delete OAuth App

<a id="opIdpost-api-v1-oauth-apps.delete"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/oauth-apps.delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: 9HqLlyZOugD_0YdwAJF8V47U3QHXSq' \
  -H 'X-User-Id: aobEdbYhXfu5hkeqG' \
  -d '{
    "appId": "F7cWZ6mtSyxbCe3RJ"
  }'
```

`POST /api/v1/oauth-apps.delete`

Permission required: `manage-oauth-apps`

> Body parameter

```json
{
  "appId": "F7cWZ6mtSyxbCe3RJ"
}
```

<h3 id="delete-oauth-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authorization token of the user.|
|X-User-Id|header|string|true|The user ID of the user.|
|body|body|object|false|none|
|» appId|body|string|true|The OAuth app ID that you want to delete.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'appId' [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="delete-oauth-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="delete-oauth-app-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>
