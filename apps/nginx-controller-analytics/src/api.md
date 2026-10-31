<h1 id="nginx-controller-analytics-rest-api">NGINX Controller Analytics REST API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Use the NGINX Controller Analytics API to get information about your system and application performance.

Base URLs:

* <a href="https://{{CONTROLLER_FQDN}}/api/v1">https://{{CONTROLLER_FQDN}}/api/v1</a> - NGINX Controller API

# Authentication

* API Key (cookieAuth)
    - Parameter Name: **session**, in: cookie.

<h1 id="nginx-controller-analytics-rest-api-alerts">Alerts</h1>

Use the Alerts API to manage the Alert Rule resources and retrieve information about the Alerts.

## List all Alert Rules

<a id="opIdlistAlertRules"></a>

> Code samples

```bash
curl https://controller.example.com/api/v1/analytics/alerts/rules \
  -H 'Accept: application/json'
```

`GET /analytics/alerts/rules`

Returns a list of all the Alert Rule resources.

> Example responses

> 200 Response

```json
[
  {
    "metadata": {
      "name": "resource-name",
      "displayName": "My Display Name",
      "description": "This is a sample description string. It provides information about the resource.",
      "kind": "<collection>-<object>",
      "uid": "d290f1ee-6c54-4b01-90e6-d701748f0851",
      "tags": [
        "production_public",
        "dev",
        "new_app",
        "us-west-1",
        "emea"
      ],
      "ref": "/services/environments/prod",
      "links": {
        "rel": "/api/v1/services/environments/prod"
      },
      "createTime": "2019-07-29T09:12:33.001Z",
      "updateTime": "2019-07-29T10:12:33.001Z"
    },
    "userEmail": "user@example.com",
    "metric": "upstream.network.latency.max",
    "aggregation": "string",
    "filter": "((app!='app1' OR app='app2') AND environment in ('dev', 'prod')) AND (tags!='*tag1*' AND interface='ens*')",
    "groupBy": "app,environment",
    "threshold": 0,
    "operator": "ge",
    "period": "1h",
    "notificationType": "email",
    "emailAddresses": [
      "user@example.com"
    ],
    "mute": false,
    "status": {
      "alertsCount": 0,
      "status": "ok",
      "lastStartedTimestamp": "2019-07-29T09:12:33.001Z",
      "lastExpiredTimestamp": "2019-07-29T09:12:33.001Z",
      "lastCheckedTimestamp": "2019-07-29T09:12:33.001Z"
    }
  }
]
```

> 400 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

> 500 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

<h3 id="list-all-alert-rules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved a list of all the Alert Rule resources.|Inline|
|400|Bad Request|Bad input parameter, or possibly a bad URI. Check the input for typos and try again.|[ErrorModel](#schemaerrormodel)|
|500|Internal Server Error|The request cannot be processed because of an internal server error.|[ErrorModel](#schemaerrormodel)|

<h3 id="list-all-alert-rules-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AlertRule](#schemaalertrule)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create an Alert Rule

<a id="opIdcreateAlertRule"></a>

> Code samples

```bash
curl https://controller.example.com/api/v1/analytics/alerts/rules \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "metadata": {
      "name": "resource-name",
      "displayName": "My Display Name",
      "description": "This is a sample description string. It provides information about the resource.",
      "kind": "<collection>-<object>",
      "uid": "d290f1ee-6c54-4b01-90e6-d701748f0851",
      "tags": [
        "production_public",
        "dev",
        "new_app",
        "us-west-1",
        "emea"
      ],
      "ref": "/services/environments/prod",
      "links": {
        "rel": "/api/v1/services/environments/prod"
      },
      "createTime": "2019-07-29T09:12:33.001Z",
      "updateTime": "2019-07-29T10:12:33.001Z"
    },
    "metric": "upstream.network.latency.max",
    "filter": "((app!='\''app1'\'' OR app='\''app2'\'') AND environment in ('\''dev'\'', '\''prod'\'')) AND (tags!='\''*tag1*'\'' AND interface='\''ens*'\'')",
    "groupBy": "app,environment",
    "threshold": 0,
    "operator": "ge",
    "period": "1h",
    "notificationType": "email",
    "emailAddresses": [
      "user@example.com"
    ],
    "mute": false
  }'
```

`POST /analytics/alerts/rules`

Creates a new Alert Rule resource.

> Body parameter

```json
{
  "metadata": {
    "name": "resource-name",
    "displayName": "My Display Name",
    "description": "This is a sample description string. It provides information about the resource.",
    "kind": "<collection>-<object>",
    "uid": "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "tags": [
      "production_public",
      "dev",
      "new_app",
      "us-west-1",
      "emea"
    ],
    "ref": "/services/environments/prod",
    "links": {
      "rel": "/api/v1/services/environments/prod"
    },
    "createTime": "2019-07-29T09:12:33.001Z",
    "updateTime": "2019-07-29T10:12:33.001Z"
  },
  "metric": "upstream.network.latency.max",
  "filter": "((app!='app1' OR app='app2') AND environment in ('dev', 'prod')) AND (tags!='*tag1*' AND interface='ens*')",
  "groupBy": "app,environment",
  "threshold": 0,
  "operator": "ge",
  "period": "1h",
  "notificationType": "email",
  "emailAddresses": [
    "user@example.com"
  ],
  "mute": false
}
```

<h3 id="create-an-alert-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AlertRule](#schemaalertrule)|false|Defines the Alert Rule resource to create.|
|» metadata|body|[ResourceMeta](#schemaresourcemeta)|true|none|
|» metric|body|string|true|A valid metric from the catalog.|
|» filter|body|string|false|The use of filter parameter limits the metrics data samples being taken into account for Alert Rule calculation<br>to those matching the filter expression.<br>Filter parameter syntax works the same as for `/analytics/metrics` API.<br><br>- An empty filter parameter indicates that all collected data is going to be taken into account for Alert Rule calculation<br>- `filter=app='myapp' AND (env='prod' or env='dev')` indicates that only samples related to desired app/env will be taken into account<br>|
|» groupBy|body|string|false|When `groupBy` is provided, alerts will be triggered for each distinct group of provided dimension(s).<br>GroupBy parameter syntax works the same as for `/analytics/metrics` API.<br>|
|» threshold|body|number|true|Threshold to which the metric value will be compared to.|
|» operator|body|string|true|Operator that defines which metric values will trigger an alert:<br><br>- `ge`: metric value must be greater than or equal to the threshold in order to trigger an alert<br>- `le`: metric value must be less than or equal to the threshold in order to trigger an alert<br>|
|» period|body|string|true|Period from which the metric aggregated value is calculated.<br><br>Must be a valid duration - a string starting with a number followed by a unit of time (`h`, `m` or `s`).<br><br>24h is the maximum allowed period.<br>|
|» notificationType|body|string|false|Defines how notifications about triggered Alerts will be delivered to the user.|
|» emailAddresses|body|[string(email)]|false|none|
|» mute|body|boolean|false|Indicates if the Alert Rule is muted. (Muted Alert Rules will not trigger notifications).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» operator|ge|
|» operator|le|
|» notificationType|email|

> Example responses

> 201 Response

```json
{
  "metadata": {
    "name": "resource-name",
    "displayName": "My Display Name",
    "description": "This is a sample description string. It provides information about the resource.",
    "kind": "<collection>-<object>",
    "uid": "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "tags": [
      "production_public",
      "dev",
      "new_app",
      "us-west-1",
      "emea"
    ],
    "ref": "/services/environments/prod",
    "links": {
      "rel": "/api/v1/services/environments/prod"
    },
    "createTime": "2019-07-29T09:12:33.001Z",
    "updateTime": "2019-07-29T10:12:33.001Z"
  },
  "userEmail": "user@example.com",
  "metric": "upstream.network.latency.max",
  "aggregation": "string",
  "filter": "((app!='app1' OR app='app2') AND environment in ('dev', 'prod')) AND (tags!='*tag1*' AND interface='ens*')",
  "groupBy": "app,environment",
  "threshold": 0,
  "operator": "ge",
  "period": "1h",
  "notificationType": "email",
  "emailAddresses": [
    "user@example.com"
  ],
  "mute": false,
  "status": {
    "alertsCount": 0,
    "status": "ok",
    "lastStartedTimestamp": "2019-07-29T09:12:33.001Z",
    "lastExpiredTimestamp": "2019-07-29T09:12:33.001Z",
    "lastCheckedTimestamp": "2019-07-29T09:12:33.001Z"
  }
}
```

> 400 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

> 409 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

> 500 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

<h3 id="create-an-alert-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successfully created the specified Alert Rule resource.|[AlertRule](#schemaalertrule)|
|400|Bad Request|Bad input parameter, or possibly a bad URI. Check the input for typos and try again.|[ErrorModel](#schemaerrormodel)|
|409|Conflict|The request failed due to a naming conflict with an existing resource.|[ErrorModel](#schemaerrormodel)|
|500|Internal Server Error|The request cannot be processed because of an internal server error.|[ErrorModel](#schemaerrormodel)|

<aside class="success">
This operation does not require authentication
</aside>

## Get an Alert Rule

<a id="opIdgetAlertRule"></a>

> Code samples

```bash
curl https://controller.example.com/api/v1/analytics/alerts/rules/string \
  -H 'Accept: application/json'
```

`GET /analytics/alerts/rules/{alertRuleName}`

Returns information for the specified Alert Rule.

<h3 id="get-an-alert-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alertRuleName|path|string|true|Identifies the Alert Rule resource.|

> Example responses

> 200 Response

```json
{
  "metadata": {
    "name": "resource-name",
    "displayName": "My Display Name",
    "description": "This is a sample description string. It provides information about the resource.",
    "kind": "<collection>-<object>",
    "uid": "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "tags": [
      "production_public",
      "dev",
      "new_app",
      "us-west-1",
      "emea"
    ],
    "ref": "/services/environments/prod",
    "links": {
      "rel": "/api/v1/services/environments/prod"
    },
    "createTime": "2019-07-29T09:12:33.001Z",
    "updateTime": "2019-07-29T10:12:33.001Z"
  },
  "userEmail": "user@example.com",
  "metric": "upstream.network.latency.max",
  "aggregation": "string",
  "filter": "((app!='app1' OR app='app2') AND environment in ('dev', 'prod')) AND (tags!='*tag1*' AND interface='ens*')",
  "groupBy": "app,environment",
  "threshold": 0,
  "operator": "ge",
  "period": "1h",
  "notificationType": "email",
  "emailAddresses": [
    "user@example.com"
  ],
  "mute": false,
  "status": {
    "alertsCount": 0,
    "status": "ok",
    "lastStartedTimestamp": "2019-07-29T09:12:33.001Z",
    "lastExpiredTimestamp": "2019-07-29T09:12:33.001Z",
    "lastCheckedTimestamp": "2019-07-29T09:12:33.001Z"
  }
}
```

> 400 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

> 404 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

> 500 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

<h3 id="get-an-alert-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the requested Alert Rule resource.|[AlertRule](#schemaalertrule)|
|400|Bad Request|Bad input parameter, or possibly a bad URI. Check the input for typos and try again.|[ErrorModel](#schemaerrormodel)|
|404|Not Found|The resource defined in the URI could not be found. Check the URI for errors and try again.|[ErrorModel](#schemaerrormodel)|
|500|Internal Server Error|The request cannot be processed because of an internal server error.|[ErrorModel](#schemaerrormodel)|

<aside class="success">
This operation does not require authentication
</aside>

## Upsert an Alert Rule

<a id="opIdupdateAlertRule"></a>

> Code samples

```bash
curl https://controller.example.com/api/v1/analytics/alerts/rules/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "metadata": {
      "name": "resource-name",
      "displayName": "My Display Name",
      "description": "This is a sample description string. It provides information about the resource.",
      "kind": "<collection>-<object>",
      "uid": "d290f1ee-6c54-4b01-90e6-d701748f0851",
      "tags": [
        "production_public",
        "dev",
        "new_app",
        "us-west-1",
        "emea"
      ],
      "ref": "/services/environments/prod",
      "links": {
        "rel": "/api/v1/services/environments/prod"
      },
      "createTime": "2019-07-29T09:12:33.001Z",
      "updateTime": "2019-07-29T10:12:33.001Z"
    },
    "metric": "upstream.network.latency.max",
    "filter": "((app!='\''app1'\'' OR app='\''app2'\'') AND environment in ('\''dev'\'', '\''prod'\'')) AND (tags!='\''*tag1*'\'' AND interface='\''ens*'\'')",
    "groupBy": "app,environment",
    "threshold": 0,
    "operator": "ge",
    "period": "1h",
    "notificationType": "email",
    "emailAddresses": [
      "user@example.com"
    ],
    "mute": false
  }'
```

`PUT /analytics/alerts/rules/{alertRuleName}`

Creates a new Alert Rule or updates an existing Alert Rule resource.

> Body parameter

```json
{
  "metadata": {
    "name": "resource-name",
    "displayName": "My Display Name",
    "description": "This is a sample description string. It provides information about the resource.",
    "kind": "<collection>-<object>",
    "uid": "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "tags": [
      "production_public",
      "dev",
      "new_app",
      "us-west-1",
      "emea"
    ],
    "ref": "/services/environments/prod",
    "links": {
      "rel": "/api/v1/services/environments/prod"
    },
    "createTime": "2019-07-29T09:12:33.001Z",
    "updateTime": "2019-07-29T10:12:33.001Z"
  },
  "metric": "upstream.network.latency.max",
  "filter": "((app!='app1' OR app='app2') AND environment in ('dev', 'prod')) AND (tags!='*tag1*' AND interface='ens*')",
  "groupBy": "app,environment",
  "threshold": 0,
  "operator": "ge",
  "period": "1h",
  "notificationType": "email",
  "emailAddresses": [
    "user@example.com"
  ],
  "mute": false
}
```

<h3 id="upsert-an-alert-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alertRuleName|path|string|true|Identifies the Alert Rule resource.|
|body|body|[AlertRule](#schemaalertrule)|false|Defines the Alert Rule resource to create or the updates to make.|
|» metadata|body|[ResourceMeta](#schemaresourcemeta)|true|none|
|» metric|body|string|true|A valid metric from the catalog.|
|» filter|body|string|false|The use of filter parameter limits the metrics data samples being taken into account for Alert Rule calculation<br>to those matching the filter expression.<br>Filter parameter syntax works the same as for `/analytics/metrics` API.<br><br>- An empty filter parameter indicates that all collected data is going to be taken into account for Alert Rule calculation<br>- `filter=app='myapp' AND (env='prod' or env='dev')` indicates that only samples related to desired app/env will be taken into account<br>|
|» groupBy|body|string|false|When `groupBy` is provided, alerts will be triggered for each distinct group of provided dimension(s).<br>GroupBy parameter syntax works the same as for `/analytics/metrics` API.<br>|
|» threshold|body|number|true|Threshold to which the metric value will be compared to.|
|» operator|body|string|true|Operator that defines which metric values will trigger an alert:<br><br>- `ge`: metric value must be greater than or equal to the threshold in order to trigger an alert<br>- `le`: metric value must be less than or equal to the threshold in order to trigger an alert<br>|
|» period|body|string|true|Period from which the metric aggregated value is calculated.<br><br>Must be a valid duration - a string starting with a number followed by a unit of time (`h`, `m` or `s`).<br><br>24h is the maximum allowed period.<br>|
|» notificationType|body|string|false|Defines how notifications about triggered Alerts will be delivered to the user.|
|» emailAddresses|body|[string(email)]|false|none|
|» mute|body|boolean|false|Indicates if the Alert Rule is muted. (Muted Alert Rules will not trigger notifications).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» operator|ge|
|» operator|le|
|» notificationType|email|

> Example responses

> 200 Response

```json
{
  "metadata": {
    "name": "resource-name",
    "displayName": "My Display Name",
    "description": "This is a sample description string. It provides information about the resource.",
    "kind": "<collection>-<object>",
    "uid": "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "tags": [
      "production_public",
      "dev",
      "new_app",
      "us-west-1",
      "emea"
    ],
    "ref": "/services/environments/prod",
    "links": {
      "rel": "/api/v1/services/environments/prod"
    },
    "createTime": "2019-07-29T09:12:33.001Z",
    "updateTime": "2019-07-29T10:12:33.001Z"
  },
  "userEmail": "user@example.com",
  "metric": "upstream.network.latency.max",
  "aggregation": "string",
  "filter": "((app!='app1' OR app='app2') AND environment in ('dev', 'prod')) AND (tags!='*tag1*' AND interface='ens*')",
  "groupBy": "app,environment",
  "threshold": 0,
  "operator": "ge",
  "period": "1h",
  "notificationType": "email",
  "emailAddresses": [
    "user@example.com"
  ],
  "mute": false,
  "status": {
    "alertsCount": 0,
    "status": "ok",
    "lastStartedTimestamp": "2019-07-29T09:12:33.001Z",
    "lastExpiredTimestamp": "2019-07-29T09:12:33.001Z",
    "lastCheckedTimestamp": "2019-07-29T09:12:33.001Z"
  }
}
```

> 201 Response

```json
{
  "metadata": {
    "name": "resource-name",
    "displayName": "My Display Name",
    "description": "This is a sample description string. It provides information about the resource.",
    "kind": "<collection>-<object>",
    "uid": "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "tags": [
      "production_public",
      "dev",
      "new_app",
      "us-west-1",
      "emea"
    ],
    "ref": "/services/environments/prod",
    "links": {
      "rel": "/api/v1/services/environments/prod"
    },
    "createTime": "2019-07-29T09:12:33.001Z",
    "updateTime": "2019-07-29T10:12:33.001Z"
  },
  "userEmail": "user@example.com",
  "metric": "upstream.network.latency.max",
  "aggregation": "string",
  "filter": "((app!='app1' OR app='app2') AND environment in ('dev', 'prod')) AND (tags!='*tag1*' AND interface='ens*')",
  "groupBy": "app,environment",
  "threshold": 0,
  "operator": "ge",
  "period": "1h",
  "notificationType": "email",
  "emailAddresses": [
    "user@example.com"
  ],
  "mute": false,
  "status": {
    "alertsCount": 0,
    "status": "ok",
    "lastStartedTimestamp": "2019-07-29T09:12:33.001Z",
    "lastExpiredTimestamp": "2019-07-29T09:12:33.001Z",
    "lastCheckedTimestamp": "2019-07-29T09:12:33.001Z"
  }
}
```

> 400 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

> 500 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

<h3 id="upsert-an-alert-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated the specified Alert Rule resource.|[AlertRule](#schemaalertrule)|
|201|Created|Successfully created the specified Alert Rule resource.|[AlertRule](#schemaalertrule)|
|400|Bad Request|Bad input parameter, or possibly a bad URI. Check the input for typos and try again.|[ErrorModel](#schemaerrormodel)|
|500|Internal Server Error|The request cannot be processed because of an internal server error.|[ErrorModel](#schemaerrormodel)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete an Alert Rule

<a id="opIddeleteAlertRule"></a>

> Code samples

```bash
curl https://controller.example.com/api/v1/analytics/alerts/rules/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /analytics/alerts/rules/{alertRuleName}`

Deletes the specified Alert Rule resource.

<h3 id="delete-an-alert-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alertRuleName|path|string|true|Identifies the Alert Rule resource.|

> Example responses

> 400 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

> 404 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

> 500 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

<h3 id="delete-an-alert-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully deleted the specified Alert Rule resource.|None|
|400|Bad Request|Bad input parameter, or possibly a bad URI. Check the input for typos and try again.|[ErrorModel](#schemaerrormodel)|
|404|Not Found|The resource defined in the URI could not be found. Check the URI for errors and try again.|[ErrorModel](#schemaerrormodel)|
|500|Internal Server Error|The request cannot be processed because of an internal server error.|[ErrorModel](#schemaerrormodel)|

<aside class="success">
This operation does not require authentication
</aside>

## Get ongoing Alerts

<a id="opIdgetAlerts"></a>

> Code samples

```bash
curl https://controller.example.com/api/v1/analytics/alerts/rules/string/alerts \
  -H 'Accept: application/json'
```

`GET /analytics/alerts/rules/{alertRuleName}/alerts`

Returns information about Alerts for the specified Alert Rule.

<h3 id="get-ongoing-alerts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alertRuleName|path|string|true|Identifies the Alert Rule resource.|

> Example responses

> 200 Response

```json
[
  {
    "uid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "dimensions": {
      "property1": "string",
      "property2": "string"
    },
    "startedTimestamp": "2019-07-29T09:12:33.001Z",
    "startedValue": 0,
    "lastCheckedTimestamp": "2019-07-29T09:12:33.001Z",
    "lastCheckedValue": 0
  }
]
```

> 400 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

> 404 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

> 500 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

<h3 id="get-ongoing-alerts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the requested Alerts.|Inline|
|400|Bad Request|Bad input parameter, or possibly a bad URI. Check the input for typos and try again.|[ErrorModel](#schemaerrormodel)|
|404|Not Found|The resource defined in the URI could not be found. Check the URI for errors and try again.|[ErrorModel](#schemaerrormodel)|
|500|Internal Server Error|The request cannot be processed because of an internal server error.|[ErrorModel](#schemaerrormodel)|

<h3 id="get-ongoing-alerts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Alert](#schemaalert)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Alert

<a id="opIdgetAlert"></a>

> Code samples

```bash
curl https://controller.example.com/api/v1/analytics/alerts/rules/string/alerts/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /analytics/alerts/rules/{alertRuleName}/alerts/{alertId}`

Returns information about the requested Alert for the specified Alert Rule.

<h3 id="get-alert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alertRuleName|path|string|true|Identifies the Alert Rule resource.|
|alertId|path|string(uuid)|true|Identifies the Alert resource.|

> Example responses

> 200 Response

```json
{
  "uid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "dimensions": {
    "property1": "string",
    "property2": "string"
  },
  "startedTimestamp": "2019-07-29T09:12:33.001Z",
  "startedValue": 0,
  "lastCheckedTimestamp": "2019-07-29T09:12:33.001Z",
  "lastCheckedValue": 0
}
```

> 400 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

> 404 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

> 500 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

<h3 id="get-alert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the requested Alert.|[Alert](#schemaalert)|
|400|Bad Request|Bad input parameter, or possibly a bad URI. Check the input for typos and try again.|[ErrorModel](#schemaerrormodel)|
|404|Not Found|The resource defined in the URI could not be found. Check the URI for errors and try again.|[ErrorModel](#schemaerrormodel)|
|500|Internal Server Error|The request cannot be processed because of an internal server error.|[ErrorModel](#schemaerrormodel)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nginx-controller-analytics-rest-api-catalogs">Catalogs</h1>

Use the Catalogs API to find out about the Metrics and Dimensions that you can use to refine your Analytics data queries.

## List the Metrics Catalog

<a id="opIdlistMetricsDescriptions"></a>

> Code samples

```bash
curl https://controller.example.com/api/v1/analytics/catalogs/metrics \
  -H 'Accept: application/json'
```

`GET /analytics/catalogs/metrics`

Lists all of the Metric resources in the Catalog.

The Metrics Catalog contains the definitions for all of the available NGINX and NGINX Controller Agent metrics.
You can use the Catalogs API to find information about the available Metrics, then use those Metrics to refine your Analytics data queries.


> Example responses

> 200 Response

```json
{
  "items": [
    {
      "metadata": {
        "name": "resource-name",
        "displayName": "My Display Name",
        "description": "This is a sample description string. It provides information about the resource.",
        "kind": "<collection>-<object>",
        "uid": "d290f1ee-6c54-4b01-90e6-d701748f0851",
        "tags": [
          "production_public",
          "dev",
          "new_app",
          "us-west-1",
          "emea"
        ],
        "ref": "/services/environments/prod",
        "links": {
          "rel": "/api/v1/services/environments/prod"
        },
        "createTime": "2019-07-29T09:12:33.001Z",
        "updateTime": "2019-07-29T10:12:33.001Z"
      },
      "currentStatus": {
        "name": "nginx.http.request.bytes_sent",
        "description": "Number of bytes sent to clients.",
        "unit": "bytes",
        "aggregations": [
          "AVG",
          "SUM"
        ],
        "type": "incremental",
        "categories": [
          "nginx",
          "apimgmt_environment",
          "apimgmt_definition",
          "apimgmt_entry_point"
        ],
        "dimensions": [
          {
            "ref": "/services/environments/prod",
            "links": {
              "rel": "/api/v1/services/environments/prod",
              "name": "production",
              "displayName": "Production Environment"
            }
          }
        ]
      }
    }
  ]
}
```

<h3 id="list-the-metrics-catalog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the Metrics Catalog list.|[ListMetricsDescriptionsResponse](#schemalistmetricsdescriptionsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a Metric Description

<a id="opIdgetMetricDescription"></a>

> Code samples

```bash
curl https://controller.example.com/api/v1/analytics/catalogs/metrics/string \
  -H 'Accept: application/json'
```

`GET /analytics/catalogs/metrics/{metricName}`

Gets the description of the specified Metric.


<h3 id="get-a-metric-description-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|metricName|path|string|true|Name of the Metric resource.|

> Example responses

> 200 Response

```json
{
  "metadata": {
    "name": "resource-name",
    "displayName": "My Display Name",
    "description": "This is a sample description string. It provides information about the resource.",
    "kind": "<collection>-<object>",
    "uid": "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "tags": [
      "production_public",
      "dev",
      "new_app",
      "us-west-1",
      "emea"
    ],
    "ref": "/services/environments/prod",
    "links": {
      "rel": "/api/v1/services/environments/prod"
    },
    "createTime": "2019-07-29T09:12:33.001Z",
    "updateTime": "2019-07-29T10:12:33.001Z"
  },
  "currentStatus": {
    "name": "nginx.http.request.bytes_sent",
    "description": "Number of bytes sent to clients.",
    "unit": "bytes",
    "aggregations": [
      "AVG",
      "SUM"
    ],
    "type": "incremental",
    "categories": [
      "nginx",
      "apimgmt_environment",
      "apimgmt_definition",
      "apimgmt_entry_point"
    ],
    "dimensions": [
      {
        "ref": "/services/environments/prod",
        "links": {
          "rel": "/api/v1/services/environments/prod",
          "name": "production",
          "displayName": "Production Environment"
        }
      }
    ]
  }
}
```

> 400 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

> 404 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

<h3 id="get-a-metric-description-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the requested Metric resource.|[MetricDescriptionRecord](#schemametricdescriptionrecord)|
|400|Bad Request|Bad input parameter, or possibly a bad URI. Check the input for typos and try again.|[ErrorModel](#schemaerrormodel)|
|404|Not Found|The specified Metric resource was not found.|[ErrorModel](#schemaerrormodel)|

<aside class="success">
This operation does not require authentication
</aside>

## List the Dimensions Catalog

<a id="opIdlistDimensionsDescriptions"></a>

> Code samples

```bash
curl https://controller.example.com/api/v1/analytics/catalogs/dimensions \
  -H 'Accept: application/json'
```

`GET /analytics/catalogs/dimensions`

Lists all of the Dimension resources in the Catalog.

Dimensions provide a means of refining the data returned by metrics and events queries.
You can use the List Dimensions Catalog endpoint to find out what Dimensions are available.
Then, use the Get a Dimension endpoint to find out more about a specific dimension.


> Example responses

> 200 Response

```json
{
  "items": [
    {
      "metadata": {
        "name": "resource-name",
        "displayName": "My Display Name",
        "description": "This is a sample description string. It provides information about the resource.",
        "kind": "<collection>-<object>",
        "uid": "d290f1ee-6c54-4b01-90e6-d701748f0851",
        "tags": [
          "production_public",
          "dev",
          "new_app",
          "us-west-1",
          "emea"
        ],
        "ref": "/services/environments/prod",
        "links": {
          "rel": "/api/v1/services/environments/prod"
        },
        "createTime": "2019-07-29T09:12:33.001Z",
        "updateTime": "2019-07-29T10:12:33.001Z"
      },
      "currentStatus": {
        "name": "instance",
        "description": "Instance name.",
        "type": "string",
        "metrics": [
          {
            "ref": "/services/environments/prod",
            "links": {
              "rel": "/api/v1/services/environments/prod",
              "name": "production",
              "displayName": "Production Environment"
            }
          }
        ]
      }
    }
  ]
}
```

<h3 id="list-the-dimensions-catalog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the requested Dimension resource.|[ListDimensionsDescriptionsResponse](#schemalistdimensionsdescriptionsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a Dimension Description

<a id="opIdgetDimensionDescription"></a>

> Code samples

```bash
curl https://controller.example.com/api/v1/analytics/catalogs/dimensions/string \
  -H 'Accept: application/json'
```

`GET /analytics/catalogs/dimensions/{dimensionName}`

Gets the description of the specified Dimension resource.


<h3 id="get-a-dimension-description-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dimensionName|path|string|true|Name of the Dimension|

> Example responses

> 200 Response

```json
{
  "metadata": {
    "name": "resource-name",
    "displayName": "My Display Name",
    "description": "This is a sample description string. It provides information about the resource.",
    "kind": "<collection>-<object>",
    "uid": "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "tags": [
      "production_public",
      "dev",
      "new_app",
      "us-west-1",
      "emea"
    ],
    "ref": "/services/environments/prod",
    "links": {
      "rel": "/api/v1/services/environments/prod"
    },
    "createTime": "2019-07-29T09:12:33.001Z",
    "updateTime": "2019-07-29T10:12:33.001Z"
  },
  "currentStatus": {
    "name": "instance",
    "description": "Instance name.",
    "type": "string",
    "metrics": [
      {
        "ref": "/services/environments/prod",
        "links": {
          "rel": "/api/v1/services/environments/prod",
          "name": "production",
          "displayName": "Production Environment"
        }
      }
    ]
  }
}
```

> 400 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

> 404 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

<h3 id="get-a-dimension-description-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the requested Dimension resource.|[DimensionDescriptionRecord](#schemadimensiondescriptionrecord)|
|400|Bad Request|Bad input parameter, or possibly a bad URI. Check the input for typos and try again.|[ErrorModel](#schemaerrormodel)|
|404|Not Found|The specified Dimension resource was not found.|[ErrorModel](#schemaerrormodel)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nginx-controller-analytics-rest-api-events">Events</h1>

Use the Events API to retrieve information about system Events.

## Get Events

<a id="opIdqueryEvents"></a>

> Code samples

```bash
curl https://controller.example.com/api/v1/analytics/events \
  -H 'Accept: application/json'
```

`GET /analytics/events`

Returns a list of system Events.

<h3 id="get-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|startTime|query|[Time](#schematime)|false|Indicates the start of the time window to include Events from (inclusive).<br><br>- Must be provided if `endTime` was specified.<br>- If you do not set 'startTime`, the most recent 100 Events will be returned.<br>- `startTime` and `endTime` can be formatted as Event IDs (UUID format). If you use this format for any boundary, the validity of that boundary (for example, if endTime is greater than startTime) will not be checked.<br>|
|endTime|query|[Time](#schematime)|false|Indicates the end of the time window to include Events from (non-inclusive).<br><br>- Must be greater than `startTime`.<br>- Must be provided if `startTime` was specified.<br>|
|filter|query|string|false|Filters results based on dimension values.<br><br>Consists of one or more predicates in the form  `<dimension><operator><dimension value>` where:<br>- `<dimension>` is the name of the dimension,<br>- `<operator>` is one of the supported operators (`=`, `!=`, `<`, `<=`, `>=` `>`, `in` or `not`)<br>- `<dimension value>` is the value of the dimension(s) that you want to filter on,<br>- `<dimension> and <dimension value>` are case sensitive.<br><br>For example: 'count > 100'<br><br>Predicates can be combined into logical expressions using `OR`, `AND`, and `(` `)`.<br>For matching values, wildcard (`*`) use is supported.<br><br>Wrapping predicates in single quotes is recommended to ensure that the full query string is processed correctly.<br>|
|orderBy|query|string|false|Indicates how the results will be ordered.<br><br>Consists of at most three comma-separated clauses in the form `<dimension><single space><sort order>` or `<dimension>` where:<br>- `<dimension>` is the name of the dimension.<br>- `<sort order>` is the order by which the specified dimension will be sorted. Valid sort order is either "ASC" for ascending order, or "DESC" for descending order. If no sort order is provided, the default one ("ASC") will be used.<br><br>Note that if no orderBy is provided, the default combination of descending "timestamp" and ascending "id" will be used regardless. If you provide different order for "timestamp" or "id" in orderBy, the default one will be overwritten.<br>|
|page|query|integer|false|page number|
|pageToken|query|string|false|Transactional token used for pagination.<br><br>The token ensures consistency of the query results across requests for various pages of data. It provides a snapshot of the database contents from the time at which the query was received.<br><br>If `pageToken` is not provided with a page request, a token is automatically generated and will be returned in the response metadata. You should include the token in subsequent requests for pages in the query results.<br><br>Sending a query without a `pageToken` refreshes the query results.<br>|
|pageSize|query|integer|false|Defines the number of returned items per page.<br><br>- The maximum value is 100. If value is greater, it is automatically set down to 100.<br>- If `pageSize`=0, pagination is disabled and all Events will be returned in response.<br>- The response size is limited to 10,000 results. If the number of results exceeds 10,000 a warning is returned.<br>|
|includeTotal|query|boolean|false|Defines if the Metadata should include the total count of events.<br>|

> Example responses

> 200 Response

```json
{
  "Metadata": {
    "pagination": {
      "pageToken": "1594048781",
      "links": {
        "next": {
          "rel": "/api/v1/services/environments/prod"
        },
        "prev": {
          "rel": "/api/v1/services/environments/prod"
        }
      },
      "total": 3600
    }
  },
  "items": [
    {
      "timestamp": "2019-08-07T09:57:36.088757764Z",
      "id": "00112233-4455-6677-8899-aabbccddeeff",
      "message": "nginx stub_status detected, https://127.0.0.1:443/basic_status",
      "count": 99,
      "category": "string",
      "level": "INFO",
      "hostname": "d0784771a503",
      "alias": "my_system",
      "status": "success",
      "error": "string",
      "local_id": "d23c85484ee760ee5f4619c0434e1968b5290964487541da0889964eb783613c",
      "root_uuid": "759e842f6b9f51a7803f57da1e9f5ae8",
      "tags": "[\"tag1\", \"tag2\"]",
      "instance": "2",
      "location": "unspecified",
      "correlationId": "e5f355e4de82edd0afcd74ef6c1ee6aa",
      "http.request_endpoint": "/services/environments/dev/apps/app/components/25",
      "http.request_method": "POST",
      "user": "admin@nginx.test",
      "environment": "dev-environment",
      "app": "finance-app",
      "component": "secure-component",
      "gateway": "dev-gateway",
      "request_outcome": "REJECTED",
      "request_outcome_reason": "SECURITY_WAF_FLAGGED",
      "http.response_code": 200,
      "http.hostname": "itay-108-117.f5net.com",
      "http.remote_addr": "127.0.0.1",
      "http.remote_port": 4000,
      "http.server_addr": "0.0.0.0",
      "http.server_port": 80,
      "http.request": "GET /test.exe HTTP/1.1\\r\\nUser-Agent: curl/7.29.0\\r\\nHost: localhost\\r\\nAccept: */*\\r\\n",
      "waf.support_id": "161339000577578694",
      "waf.signature_ids": "200001475,200000098",
      "waf.policy": "/Common/policy1",
      "waf.attack_types": "Non-browser Client,Abuse of Functionality,Cross Site Scripting (XSS)",
      "waf.violation_rating": "MOST_LIKELY_ATTACK",
      "waf.signature_names": "XSS script tag end (Parameter) (2),XSS script tag (Parameter)",
      "waf.is_truncated": "true",
      "waf.signature_cves": "CVE-2017-8759,CVE-2015-1641",
      "waf.sub_violations": "HTTP protocol compliance failed:Host header contains IP address",
      "waf.violations": "HTTP protocol compliance failed,Illegal meta character in value,Attack signature detected",
      "waf.x_forwarded_for_header_value": "87.233.120.158",
      "waf.bot_anomalies": "Search Engine Verification Failed",
      "waf.bot_category": "Search Engine",
      "waf.bot_client_class": "Malicious Bot",
      "waf.bot_signature_name": "Google",
      "waf.enforced_bot_anomalies": "Search Engine Verification Failed",
      "action_type": "login",
      "action_outcome": "success",
      "auth_provider.name": "local",
      "auth_provider.type": "BASIC",
      "resource_name": "datadog-forwarder",
      "big_ip_address": "https://87.233.120.158",
      "workload_health_state": "unhealthy"
    }
  ]
}
```

> 400 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

<h3 id="get-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the requested Events.|[EventQueryResult](#schemaeventqueryresult)|
|400|Bad Request|Bad input parameter, or possibly a bad URI. Check the input for typos and try again.|[ErrorModel](#schemaerrormodel)|

<aside class="success">
This operation does not require authentication
</aside>

## Get an Event

<a id="opIdqueryEventsById"></a>

> Code samples

```bash
curl https://controller.example.com/api/v1/analytics/events/00112233-4455-6677-8899-aabbccddeeff \
  -H 'Accept: application/json'
```

`GET /analytics/events/{id}`

Returns the specified Event.

<h3 id="get-an-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identifies the Event that you want to retrieve.|

> Example responses

> 200 Response

```json
{
  "timestamp": "2019-08-07T09:57:36.088757764Z",
  "id": "00112233-4455-6677-8899-aabbccddeeff",
  "message": "nginx stub_status detected, https://127.0.0.1:443/basic_status",
  "count": 99,
  "category": "string",
  "level": "INFO",
  "hostname": "d0784771a503",
  "alias": "my_system",
  "status": "success",
  "error": "string",
  "local_id": "d23c85484ee760ee5f4619c0434e1968b5290964487541da0889964eb783613c",
  "root_uuid": "759e842f6b9f51a7803f57da1e9f5ae8",
  "tags": "[\"tag1\", \"tag2\"]",
  "instance": "2",
  "location": "unspecified",
  "correlationId": "e5f355e4de82edd0afcd74ef6c1ee6aa",
  "http.request_endpoint": "/services/environments/dev/apps/app/components/25",
  "http.request_method": "POST",
  "user": "admin@nginx.test",
  "environment": "dev-environment",
  "app": "finance-app",
  "component": "secure-component",
  "gateway": "dev-gateway",
  "request_outcome": "REJECTED",
  "request_outcome_reason": "SECURITY_WAF_FLAGGED",
  "http.response_code": 200,
  "http.hostname": "itay-108-117.f5net.com",
  "http.remote_addr": "127.0.0.1",
  "http.remote_port": 4000,
  "http.server_addr": "0.0.0.0",
  "http.server_port": 80,
  "http.request": "GET /test.exe HTTP/1.1\\r\\nUser-Agent: curl/7.29.0\\r\\nHost: localhost\\r\\nAccept: */*\\r\\n",
  "waf.support_id": "161339000577578694",
  "waf.signature_ids": "200001475,200000098",
  "waf.policy": "/Common/policy1",
  "waf.attack_types": "Non-browser Client,Abuse of Functionality,Cross Site Scripting (XSS)",
  "waf.violation_rating": "MOST_LIKELY_ATTACK",
  "waf.signature_names": "XSS script tag end (Parameter) (2),XSS script tag (Parameter)",
  "waf.is_truncated": "true",
  "waf.signature_cves": "CVE-2017-8759,CVE-2015-1641",
  "waf.sub_violations": "HTTP protocol compliance failed:Host header contains IP address",
  "waf.violations": "HTTP protocol compliance failed,Illegal meta character in value,Attack signature detected",
  "waf.x_forwarded_for_header_value": "87.233.120.158",
  "waf.bot_anomalies": "Search Engine Verification Failed",
  "waf.bot_category": "Search Engine",
  "waf.bot_client_class": "Malicious Bot",
  "waf.bot_signature_name": "Google",
  "waf.enforced_bot_anomalies": "Search Engine Verification Failed",
  "action_type": "login",
  "action_outcome": "success",
  "auth_provider.name": "local",
  "auth_provider.type": "BASIC",
  "resource_name": "datadog-forwarder",
  "big_ip_address": "https://87.233.120.158",
  "workload_health_state": "unhealthy"
}
```

> 400 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

<h3 id="get-an-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the requested Event.|[Event](#schemaevent)|
|400|Bad Request|Bad input parameter, or possibly a bad URI. Check the input for typos and try again.|[ErrorModel](#schemaerrormodel)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nginx-controller-analytics-rest-api-forwarders">Forwarders</h1>

Use the Forwarders API to forward data (metrics, events) to external services.

## Get a list of Forwarders.

<a id="opIdlistForwarders"></a>

> Code samples

```bash
curl https://controller.example.com/api/v1/analytics/forwarders \
  -H 'Accept: application/json'
```

`GET /analytics/forwarders`

Returns a list of all Forwarder resources.

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "metadata": {
        "name": "splunk",
        "displayName": "Splunk - Metrics",
        "description": "Metrics forwarder going to Splunk HEC",
        "kind": "forwarder",
        "uid": "d290f1ee-6c54-4b01-90e6-d701748f0851",
        "links": {
          "rel": "/api/v1/analytics/forwarders/splunk"
        },
        "createTime": "2019-07-29T09:12:33.001Z",
        "updateTime": "2019-07-29T10:12:33.001Z"
      },
      "desiredState": {
        "collectorType": "SPLUNK",
        "integrationRef": {
          "ref": "/platform/integrations/splunk_hec"
        },
        "streams": [
          {
            "inputDataType": "METRICS",
            "outputFormat": "SPLUNK",
            "selector": "names=http.request.bytes_rcvd"
          },
          {
            "inputDataType": "METRICS",
            "outputFormat": "SPLUNK",
            "selector": "names=http.request.count"
          }
        ]
      },
      "currentStatus": {
        "state": {
          "selfConfigState": {
            "isConfigured": true,
            "isConfiguring": false,
            "isError": false,
            "isDeleting": false,
            "total": 1,
            "configured": 1,
            "configuring": 0,
            "error": 0,
            "deleting": 0
          },
          "conditions": [
            {
              "type": "error",
              "message": "integration reference not found"
            }
          ]
        },
        "collectorType": "SPLUNK",
        "integrationRef": {
          "ref": "/platform/integrations/splunk_hec"
        },
        "streams": [
          {
            "inputDataType": "METRICS",
            "outputFormat": "SPLUNK",
            "selector": "names=http.request.bytes_rcvd&filter=app='myapp'"
          },
          {
            "inputDataType": "METRICS",
            "outputFormat": "SPLUNK",
            "selector": "names=http.request.count&filter=app='myapp'"
          }
        ]
      }
    },
    {
      "metadata": {
        "name": "splunk",
        "displayName": "Splunk - Metrics",
        "description": "Metrics forwarder going to Splunk HEC",
        "kind": "forwarder",
        "uid": "d290f1ee-6c54-4b01-90e6-d701748f0851",
        "links": {
          "rel": "/api/v1/analytics/forwarders/splunk"
        },
        "createTime": "2019-07-29T09:12:33.001Z",
        "updateTime": "2019-07-29T10:12:33.001Z"
      },
      "desiredState": {
        "collectorType": "SPLUNK",
        "integrationRef": {
          "ref": "/platform/integrations/splunk_hec"
        },
        "streams": [
          {
            "inputDataType": "METRICS",
            "outputFormat": "SPLUNK",
            "selector": "names=http.request.bytes_rcvd&filter=app='myapp'"
          },
          {
            "inputDataType": "METRICS",
            "outputFormat": "SPLUNK",
            "selector": "names=http.request.count&filter=app='myapp'"
          }
        ]
      },
      "currentStatus": {
        "state": {
          "selfConfigState": {
            "isConfigured": true,
            "isConfiguring": false,
            "isError": false,
            "isDeleting": false,
            "total": 0,
            "configured": 1,
            "configuring": 0,
            "error": 0,
            "deleting": 0
          },
          "conditions": [
            {
              "type": "error",
              "message": "integration reference not found"
            }
          ]
        },
        "collectorType": "SPLUNK",
        "integrationRef": {
          "ref": "/platform/integrations/splunk_hec"
        },
        "streams": [
          {
            "inputDataType": "METRICS",
            "outputFormat": "SPLUNK",
            "selector": "names=http.request.bytes_rcvd&filter=app='myapp'"
          },
          {
            "inputDataType": "METRICS",
            "outputFormat": "SPLUNK",
            "selector": "names=http.request.count&filter=app='myapp'"
          }
        ]
      }
    }
  ]
}
```

> 401 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

> 403 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

> 500 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

<h3 id="get-a-list-of-forwarders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved a list of all Forwarder resources.|[ForwarderListResponse](#schemaforwarderlistresponse)|
|401|Unauthorized|User authentication is invalid or missing.<br>|[ErrorModel](#schemaerrormodel)|
|403|Forbidden|The request failed due to insufficient privileges.<br>|[ErrorModel](#schemaerrormodel)|
|500|Internal Server Error|The request cannot be processed because of an internal server error.<br>|[ErrorModel](#schemaerrormodel)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a Forwarder

<a id="opIdcreateForwarder"></a>

> Code samples

```bash
curl https://controller.example.com/api/v1/analytics/forwarders \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "metadata": {
      "name": "splunk",
      "displayName": "Splunk - Metrics",
      "description": "Metrics forwarder going to Splunk HEC",
      "kind": "forwarder",
      "uid": "d290f1ee-6c54-4b01-90e6-d701748f0851",
      "links": {
        "rel": "/api/v1/analytics/forwarders/splunk"
      },
      "createTime": "2019-07-29T09:12:33.001Z",
      "updateTime": "2019-07-29T10:12:33.001Z"
    },
    "desiredState": {
      "collectorType": "SPLUNK",
      "integrationRef": {
        "ref": "/platform/integrations/new_splunk_hec"
      },
      "streams": [
        {
          "inputDataType": "METRICS",
          "outputFormat": "SPLUNK",
          "selector": "names=http.request.bytes_rcvd&filter=app='\''myapp'\''"
        },
        {
          "inputDataType": "METRICS",
          "outputFormat": "SPLUNK",
          "selector": "names=http.request.count&filter=app='\''myapp'\''"
        }
      ]
    },
    "currentStatus": {
      "state": {
        "selfConfigState": {
          "isConfigured": false,
          "isConfiguring": true,
          "isError": false,
          "isDeleting": false,
          "total": 1,
          "configured": 0,
          "configuring": 1,
          "error": 0,
          "deleting": 0
        }
      },
      "collectorType": "SPLUNK",
      "integrationRef": {
        "ref": "/platform/integrations/splunk_hec"
      },
      "streams": [
        {
          "inputDataType": "METRICS",
          "outputFormat": "SPLUNK",
          "selector": "names=http.request.bytes_rcvd&filter=app='\''myapp'\''"
        },
        {
          "inputDataType": "METRICS",
          "outputFormat": "SPLUNK",
          "selector": "names=http.request.count&filter=app='\''myapp'\''"
        }
      ]
    }
  }'
```

`POST /analytics/forwarders`

Creates a new Forwarder resource.

> Body parameter

```json
{
  "metadata": {
    "name": "splunk",
    "displayName": "Splunk - Metrics",
    "description": "Metrics forwarder going to Splunk HEC",
    "kind": "forwarder",
    "uid": "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "links": {
      "rel": "/api/v1/analytics/forwarders/splunk"
    },
    "createTime": "2019-07-29T09:12:33.001Z",
    "updateTime": "2019-07-29T10:12:33.001Z"
  },
  "desiredState": {
    "collectorType": "SPLUNK",
    "integrationRef": {
      "ref": "/platform/integrations/new_splunk_hec"
    },
    "streams": [
      {
        "inputDataType": "METRICS",
        "outputFormat": "SPLUNK",
        "selector": "names=http.request.bytes_rcvd&filter=app='myapp'"
      },
      {
        "inputDataType": "METRICS",
        "outputFormat": "SPLUNK",
        "selector": "names=http.request.count&filter=app='myapp'"
      }
    ]
  },
  "currentStatus": {
    "state": {
      "selfConfigState": {
        "isConfigured": false,
        "isConfiguring": true,
        "isError": false,
        "isDeleting": false,
        "total": 1,
        "configured": 0,
        "configuring": 1,
        "error": 0,
        "deleting": 0
      }
    },
    "collectorType": "SPLUNK",
    "integrationRef": {
      "ref": "/platform/integrations/splunk_hec"
    },
    "streams": [
      {
        "inputDataType": "METRICS",
        "outputFormat": "SPLUNK",
        "selector": "names=http.request.bytes_rcvd&filter=app='myapp'"
      },
      {
        "inputDataType": "METRICS",
        "outputFormat": "SPLUNK",
        "selector": "names=http.request.count&filter=app='myapp'"
      }
    ]
  }
}
```

<h3 id="create-a-forwarder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Forwarder](#schemaforwarder)|false|Contains the desired settings for the Forwarder resource.|
|» metadata|body|[ResourceMeta](#schemaresourcemeta)|true|none|
|» desiredState|body|[DesiredState](#schemadesiredstate)|true|none|
|» currentStatus|body|[CurrentStatus](#schemacurrentstatus)|false|none|

> Example responses

> 202 Response

```json
{
  "metadata": {
    "name": "splunk",
    "displayName": "Splunk - Metrics",
    "description": "Metrics forwarder going to Splunk HEC",
    "kind": "forwarder",
    "uid": "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "links": {
      "rel": "/api/v1/analytics/forwarders/splunk"
    },
    "createTime": "2019-07-29T09:12:33.001Z",
    "updateTime": "2019-07-29T10:12:33.001Z"
  },
  "desiredState": {
    "collectorType": "SPLUNK",
    "integrationRef": {
      "ref": "/platform/integrations/new_splunk_hec"
    },
    "streams": [
      {
        "inputDataType": "METRICS",
        "outputFormat": "SPLUNK",
        "selector": "names=http.request.bytes_rcvd&filter=app='myapp'"
      },
      {
        "inputDataType": "METRICS",
        "outputFormat": "SPLUNK",
        "selector": "names=http.request.count&filter=app='myapp'"
      }
    ]
  },
  "currentStatus": {
    "state": {
      "selfConfigState": {
        "isConfigured": false,
        "isConfiguring": true,
        "isError": false,
        "isDeleting": false,
        "total": 1,
        "configured": 0,
        "configuring": 1,
        "error": 0,
        "deleting": 0
      }
    },
    "collectorType": "SPLUNK",
    "integrationRef": {
      "ref": "/platform/integrations/splunk_hec"
    },
    "streams": [
      {
        "inputDataType": "METRICS",
        "outputFormat": "SPLUNK",
        "selector": "names=http.request.bytes_rcvd&filter=app='myapp'"
      },
      {
        "inputDataType": "METRICS",
        "outputFormat": "SPLUNK",
        "selector": "names=http.request.count&filter=app='myapp'"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

> 401 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

> 403 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

> 409 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

> 500 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

<h3 id="create-a-forwarder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|The request to create a Forwarder resource succeeded. The resource will be created when the configuration is complete.|[Forwarder](#schemaforwarder)|
|400|Bad Request|Bad input parameter, or possibly a bad URI. Check the input for typos and try again.<br>|[ErrorModel](#schemaerrormodel)|
|401|Unauthorized|User authentication is invalid or missing.<br>|[ErrorModel](#schemaerrormodel)|
|403|Forbidden|The request failed due to insufficient privileges.<br>|[ErrorModel](#schemaerrormodel)|
|409|Conflict|The request failed due to a conflict with an existing resource.<br>|[ErrorModel](#schemaerrormodel)|
|500|Internal Server Error|The request cannot be processed because of an internal server error.<br>|[ErrorModel](#schemaerrormodel)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a Forwarder

<a id="opIdgetForwarder"></a>

> Code samples

```bash
curl https://controller.example.com/api/v1/analytics/forwarders/string \
  -H 'Accept: application/json'
```

`GET /analytics/forwarders/{forwarderName}`

Gets information about an existing Forwarder resource.

<h3 id="get-a-forwarder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|forwarderName|path|string|true|The name of the Forwarder resource.<br>|

> Example responses

> 200 Response

```json
{
  "metadata": {
    "name": "splunk",
    "displayName": "Splunk - Metrics",
    "description": "Metrics forwarder going to Splunk HEC",
    "kind": "forwarder",
    "uid": "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "links": {
      "rel": "/api/v1/analytics/forwarders/splunk"
    },
    "createTime": "2019-07-29T09:12:33.001Z",
    "updateTime": "2019-07-29T10:12:33.001Z"
  },
  "desiredState": {
    "collectorType": "SPLUNK",
    "integrationRef": {
      "ref": "/platform/integrations/new_splunk_hec"
    },
    "streams": [
      {
        "inputDataType": "METRICS",
        "outputFormat": "SPLUNK",
        "selector": "names=http.request.bytes_rcvd&filter=app='myapp'"
      },
      {
        "inputDataType": "METRICS",
        "outputFormat": "SPLUNK",
        "selector": "names=http.request.count&filter=app='myapp'"
      }
    ]
  },
  "currentStatus": {
    "state": {
      "selfConfigState": {
        "isConfigured": false,
        "isConfiguring": true,
        "isError": false,
        "isDeleting": false,
        "total": 1,
        "configured": 0,
        "configuring": 1,
        "error": 0,
        "deleting": 0
      }
    },
    "collectorType": "SPLUNK",
    "integrationRef": {
      "ref": "/platform/integrations/splunk_hec"
    },
    "streams": [
      {
        "inputDataType": "METRICS",
        "outputFormat": "SPLUNK",
        "selector": "names=http.request.bytes_rcvd&filter=app='myapp'"
      },
      {
        "inputDataType": "METRICS",
        "outputFormat": "SPLUNK",
        "selector": "names=http.request.count&filter=app='myapp'"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

> 403 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

> 404 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

> 500 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

<h3 id="get-a-forwarder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the requested Forwarder resource.|[Forwarder](#schemaforwarder)|
|401|Unauthorized|User authentication is invalid or missing.<br>|[ErrorModel](#schemaerrormodel)|
|403|Forbidden|The request failed due to insufficient privileges.<br>|[ErrorModel](#schemaerrormodel)|
|404|Not Found|The requested resource was not found or is unavailable.<br>|[ErrorModel](#schemaerrormodel)|
|500|Internal Server Error|The request cannot be processed because of an internal server error.<br>|[ErrorModel](#schemaerrormodel)|

<aside class="success">
This operation does not require authentication
</aside>

## Create or update a Forwarder

<a id="opIdupdateForwarder"></a>

> Code samples

```bash
curl https://controller.example.com/api/v1/analytics/forwarders/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "metadata": {
      "name": "splunk",
      "displayName": "Splunk - Metrics",
      "description": "Metrics forwarder going to Splunk HEC",
      "kind": "forwarder",
      "uid": "d290f1ee-6c54-4b01-90e6-d701748f0851",
      "links": {
        "rel": "/api/v1/analytics/forwarders/splunk"
      },
      "createTime": "2019-07-29T09:12:33.001Z",
      "updateTime": "2019-07-29T10:12:33.001Z"
    },
    "desiredState": {
      "collectorType": "SPLUNK",
      "integrationRef": {
        "ref": "/platform/integrations/new_splunk_hec"
      },
      "streams": [
        {
          "inputDataType": "METRICS",
          "outputFormat": "SPLUNK",
          "selector": "names=http.request.bytes_rcvd&filter=app='\''myapp'\''"
        },
        {
          "inputDataType": "METRICS",
          "outputFormat": "SPLUNK",
          "selector": "names=http.request.count&filter=app='\''myapp'\''"
        }
      ]
    },
    "currentStatus": {
      "state": {
        "selfConfigState": {
          "isConfigured": false,
          "isConfiguring": true,
          "isError": false,
          "isDeleting": false,
          "total": 1,
          "configured": 0,
          "configuring": 1,
          "error": 0,
          "deleting": 0
        }
      },
      "collectorType": "SPLUNK",
      "integrationRef": {
        "ref": "/platform/integrations/splunk_hec"
      },
      "streams": [
        {
          "inputDataType": "METRICS",
          "outputFormat": "SPLUNK",
          "selector": "names=http.request.bytes_rcvd&filter=app='\''myapp'\''"
        },
        {
          "inputDataType": "METRICS",
          "outputFormat": "SPLUNK",
          "selector": "names=http.request.count&filter=app='\''myapp'\''"
        }
      ]
    }
  }'
```

`PUT /analytics/forwarders/{forwarderName}`

Creates new or updates an existing Forwarder resource.

> Body parameter

```json
{
  "metadata": {
    "name": "splunk",
    "displayName": "Splunk - Metrics",
    "description": "Metrics forwarder going to Splunk HEC",
    "kind": "forwarder",
    "uid": "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "links": {
      "rel": "/api/v1/analytics/forwarders/splunk"
    },
    "createTime": "2019-07-29T09:12:33.001Z",
    "updateTime": "2019-07-29T10:12:33.001Z"
  },
  "desiredState": {
    "collectorType": "SPLUNK",
    "integrationRef": {
      "ref": "/platform/integrations/new_splunk_hec"
    },
    "streams": [
      {
        "inputDataType": "METRICS",
        "outputFormat": "SPLUNK",
        "selector": "names=http.request.bytes_rcvd&filter=app='myapp'"
      },
      {
        "inputDataType": "METRICS",
        "outputFormat": "SPLUNK",
        "selector": "names=http.request.count&filter=app='myapp'"
      }
    ]
  },
  "currentStatus": {
    "state": {
      "selfConfigState": {
        "isConfigured": false,
        "isConfiguring": true,
        "isError": false,
        "isDeleting": false,
        "total": 1,
        "configured": 0,
        "configuring": 1,
        "error": 0,
        "deleting": 0
      }
    },
    "collectorType": "SPLUNK",
    "integrationRef": {
      "ref": "/platform/integrations/splunk_hec"
    },
    "streams": [
      {
        "inputDataType": "METRICS",
        "outputFormat": "SPLUNK",
        "selector": "names=http.request.bytes_rcvd&filter=app='myapp'"
      },
      {
        "inputDataType": "METRICS",
        "outputFormat": "SPLUNK",
        "selector": "names=http.request.count&filter=app='myapp'"
      }
    ]
  }
}
```

<h3 id="create-or-update-a-forwarder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|forwarderName|path|string|true|The name of the Forwarder resource.<br>|
|body|body|[Forwarder](#schemaforwarder)|false|Contains the desired settings for the Forwarder resource.|
|» metadata|body|[ResourceMeta](#schemaresourcemeta)|true|none|
|» desiredState|body|[DesiredState](#schemadesiredstate)|true|none|
|» currentStatus|body|[CurrentStatus](#schemacurrentstatus)|false|none|

> Example responses

> 202 Response

```json
{
  "metadata": {
    "name": "splunk",
    "displayName": "Splunk - Metrics",
    "description": "Metrics forwarder going to Splunk HEC",
    "kind": "forwarder",
    "uid": "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "links": {
      "rel": "/api/v1/analytics/forwarders/splunk"
    },
    "createTime": "2019-07-29T09:12:33.001Z",
    "updateTime": "2019-07-29T10:12:33.001Z"
  },
  "desiredState": {
    "collectorType": "SPLUNK",
    "integrationRef": {
      "ref": "/platform/integrations/new_splunk_hec"
    },
    "streams": [
      {
        "inputDataType": "METRICS",
        "outputFormat": "SPLUNK",
        "selector": "names=http.request.bytes_rcvd&filter=app='myapp'"
      },
      {
        "inputDataType": "METRICS",
        "outputFormat": "SPLUNK",
        "selector": "names=http.request.count&filter=app='myapp'"
      }
    ]
  },
  "currentStatus": {
    "state": {
      "selfConfigState": {
        "isConfigured": false,
        "isConfiguring": true,
        "isError": false,
        "isDeleting": false,
        "total": 1,
        "configured": 0,
        "configuring": 1,
        "error": 0,
        "deleting": 0
      }
    },
    "collectorType": "SPLUNK",
    "integrationRef": {
      "ref": "/platform/integrations/splunk_hec"
    },
    "streams": [
      {
        "inputDataType": "METRICS",
        "outputFormat": "SPLUNK",
        "selector": "names=http.request.bytes_rcvd&filter=app='myapp'"
      },
      {
        "inputDataType": "METRICS",
        "outputFormat": "SPLUNK",
        "selector": "names=http.request.count&filter=app='myapp'"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

> 401 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

> 403 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

> 500 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

<h3 id="create-or-update-a-forwarder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Successfully initialized the update process of a Forwarder resource.|[Forwarder](#schemaforwarder)|
|400|Bad Request|Bad input parameter, or possibly a bad URI. Check the input for typos and try again.<br>|[ErrorModel](#schemaerrormodel)|
|401|Unauthorized|User authentication is invalid or missing.<br>|[ErrorModel](#schemaerrormodel)|
|403|Forbidden|The request failed due to insufficient privileges.<br>|[ErrorModel](#schemaerrormodel)|
|500|Internal Server Error|The request cannot be processed because of an internal server error.<br>|[ErrorModel](#schemaerrormodel)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a Forwarder

<a id="opIddeleteForwarder"></a>

> Code samples

```bash
curl https://controller.example.com/api/v1/analytics/forwarders/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /analytics/forwarders/{forwarderName}`

Deletes a Forwarder resource.

<h3 id="delete-a-forwarder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|forwarderName|path|string|true|The name of the Forwarder resource.<br>|

> Example responses

> 202 Response

```json
{
  "metadata": {
    "name": "splunk",
    "displayName": "Splunk - Metrics",
    "description": "Metrics forwarder going to Splunk HEC",
    "kind": "forwarder",
    "uid": "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "links": {
      "rel": "/api/v1/analytics/forwarders/splunk"
    },
    "createTime": "2019-07-29T09:12:33.001Z",
    "updateTime": "2019-07-29T10:12:33.001Z"
  },
  "desiredState": {
    "collectorType": "SPLUNK",
    "integrationRef": {
      "ref": "/platform/integrations/new_splunk_hec"
    },
    "streams": [
      {
        "inputDataType": "METRICS",
        "outputFormat": "SPLUNK",
        "selector": "names=http.request.bytes_rcvd&filter=app='myapp'"
      },
      {
        "inputDataType": "METRICS",
        "outputFormat": "SPLUNK",
        "selector": "names=http.request.count&filter=app='myapp'"
      }
    ]
  },
  "currentStatus": {
    "state": {
      "selfConfigState": {
        "isConfigured": false,
        "isConfiguring": true,
        "isError": false,
        "isDeleting": false,
        "total": 1,
        "configured": 0,
        "configuring": 1,
        "error": 0,
        "deleting": 0
      }
    },
    "collectorType": "SPLUNK",
    "integrationRef": {
      "ref": "/platform/integrations/splunk_hec"
    },
    "streams": [
      {
        "inputDataType": "METRICS",
        "outputFormat": "SPLUNK",
        "selector": "names=http.request.bytes_rcvd&filter=app='myapp'"
      },
      {
        "inputDataType": "METRICS",
        "outputFormat": "SPLUNK",
        "selector": "names=http.request.count&filter=app='myapp'"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

> 403 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

> 404 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

> 500 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

<h3 id="delete-a-forwarder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|The request to delete a Forwarder resource succeeded. The resource is marked for deletion.|[Forwarder](#schemaforwarder)|
|401|Unauthorized|User authentication is invalid or missing.<br>|[ErrorModel](#schemaerrormodel)|
|403|Forbidden|The request failed due to insufficient privileges.<br>|[ErrorModel](#schemaerrormodel)|
|404|Not Found|The requested resource was not found or is unavailable.<br>|[ErrorModel](#schemaerrormodel)|
|500|Internal Server Error|The request cannot be processed because of an internal server error.<br>|[ErrorModel](#schemaerrormodel)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nginx-controller-analytics-rest-api-metrics">Metrics</h1>

Use the Metrics API to retrieve system Metrics.

## Get Metrics

<a id="opIdqueryMetrics"></a>

> Code samples

```bash
curl 'https://controller.example.com/api/v1/analytics/metrics?names=AVG(controller.agent.cpu.system)%2CSUM(plus.upstream.bytes_rcvd)' \
  -H 'Accept: application/json'
```

`GET /analytics/metrics`

Returns system Metrics data based on the query parameters provided.

Supports filtering based on name and/or timestamp; aggregation over a configurable time span; and grouping by dimension.


<h3 id="get-metrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|names|query|string|true|Identifies the Metrics data that you want to receive.<br><br>- Provide multiple names as a comma-separated list.<br>- You can provide an aggregate function for each Metric (`AVG`, `SUM`, `COUNT`, `MAX`, `MIN`, or `RATE`).<br>- Combining non-aggregated and aggregated Metrics in a single query would apply any `groupBy` clause to only the latter.<br>- Metrics with aggregates require the `startTime` parameter.<br>|
|startTime|query|[Time](#schematime)|false|Indicates the start of the time window to include Metrics from (inclusive).<br><br>- If `startTime` is omitted, the last recorded value for the queried Metrics will be returned.<br>- For aggregated Metrics, you must provide `startTime` in order to calculate the resolution.<br>|
|endTime|query|[Time](#schematime)|false|Indicates the end of the time window to include Metrics from (non-inclusive).<br><br>- Must be greater than `startTime`.<br>- If `endTime` is not specified when `startTime` is present, `endTime` defaults to the current time.<br>|
|resolution|query|string|false|Changes the granularity of the returned data.<br><br>- Must be a valid duration -- a string starting with a number followed by a unit of time (`y`, `M`, `w`, `d`, `h`, `m` or `s`).<br>- When using a resolution, you must provide an aggregate function (or functions) in the `names` parameter and `startTime`.<br>- If you do not provide a resolution, the maximum available resolution will be returned (`endTime` - `startTime`).<br>|
|filter|query|string|false|Filters results based on dimension values.<br><br>Consists of one or more predicates in the form  `<dimension><operator><dimension value>` where:<br>- `<dimension>` is the name of the dimension.<br>- `<operator>` is one of the supported operators (`=`, `!=`, `<`, `<=`, `>=` `>`, `in` or `not`).<br>- `<dimension value>` is value of the dimension(s) that you want to filter on.<br>- `<dimension> and <dimension value>` is case sensitive.<br><br>For example: 'count > 100'<br><br>Predicates can be combined into logical expressions using `OR`, `AND`, and `(` `)`.<br>For matching values, wildcard (`*`) use is supported.<br><br>Wrapping predicates in single quotes is recommended to ensure that the full query string is processed correctly.<br><br>See the Dimensions [Catalog](#/tags/catalogs) to find out more about Dimensions.<br>|
|groupBy|query|string|false|Groups the results according to the specified dimension(s).<br><br>- Provide multiple dimension names as a comma-separated list.<br>- All Metric names that you pass into the `names` parameter must be aggregated for the `groupBy` to work.<br>|
|seriesLimit|query|integer|false|Sets an upper limit on the number of series returned.<br>Always returns additional series with dimension value named `all` (aggregating the values of all the metrics included in the results).<br>If the result does not include `all` stored dimensions values, the Metrics query returns series with dimension value named `other` (aggregating the values of all the metrics not included in the results).<br>Has to be used along with the `orderSeriesBy` parameter.<br><br>- Exactly one groupBy parameter must be provided in the query<br>- Cannot be used along with `dimensions` parameter.<br>|
|orderSeriesBy|query|string|false|Sorts the results according to the order specified. <br><br>Used along with the `seriesLimit` parameter.<br>|
|dimensions|query|string|false|List of dimensions that should be returned in the response for each metric series.<br><br>Dimensions not specified in this parameter will be hidden in the results.<br>This might result in series having exact same dimension set, but being visible as separate.<br><br>If the `aggregation` and `groupBy` parameters are provided for a metric, any dimension provided in<br>the `dimensions` query parameter also has to be provided in the `groupBy` parameter.<br><br>Dimensions provided in the `groupBy` query parameter do not have to be provided in the `dimensions` query parameter.<br><br>- To get a single series, provide the metric name with aggregation and the dimensions parameter with an empty value.<br>- Cannot be used along with `seriesLimit`.<br>|

> Example responses

> 200 Response

```json
{
  "queryMetadata": {
    "startTime": "2019-08-07T09:57:36.088757764Z",
    "endTime": "2019-08-07T09:57:36.088757764Z",
    "resolution": "30m"
  },
  "metrics": [
    {
      "name": "plus.upstream.response.count",
      "aggr": "AVG",
      "series": [
        {
          "dimensions": {
            "app": "app1",
            "env": "prod"
          },
          "timestamps": [
            "2019-08-07T09:57:30",
            "2019-08-07T09:57:35"
          ],
          "values": [
            4.2,
            4.4
          ]
        }
      ]
    }
  ],
  "responseMetadata": {
    "warning": "string"
  }
}
```

> 400 Response

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

<h3 id="get-metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the requested Metrics data.|[MetricQueryResult](#schemametricqueryresult)|
|400|Bad Request|Bad input parameter, or possibly a bad URI. Check the input for typos and try again.|[ErrorModel](#schemaerrormodel)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Alert">Alert</h2>
<!-- backwards compatibility -->
<a id="schemaalert"></a>
<a id="schema_Alert"></a>
<a id="tocSalert"></a>
<a id="tocsalert"></a>

```json
{
  "uid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "dimensions": {
    "property1": "string",
    "property2": "string"
  },
  "startedTimestamp": "2019-07-29T09:12:33.001Z",
  "startedValue": 0,
  "lastCheckedTimestamp": "2019-07-29T09:12:33.001Z",
  "lastCheckedValue": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string(uuid)|true|none|none|
|dimensions|object|true|none|none|
|startedTimestamp|string(date-time)|true|none|Timestamp when the Alert started.|
|startedValue|number|true|none|Value of the metric that caused the Alert to start.|
|lastCheckedTimestamp|string(date-time)|true|none|Timestamp when the Alert was last checked.|
|lastCheckedValue|number|true|none|Value of the metric when the Alert was last checked.|

<h2 id="tocS_AlertRuleStatus">AlertRuleStatus</h2>
<!-- backwards compatibility -->
<a id="schemaalertrulestatus"></a>
<a id="schema_AlertRuleStatus"></a>
<a id="tocSalertrulestatus"></a>
<a id="tocsalertrulestatus"></a>

```json
{
  "alertsCount": 0,
  "status": "ok",
  "lastStartedTimestamp": "2019-07-29T09:12:33.001Z",
  "lastExpiredTimestamp": "2019-07-29T09:12:33.001Z",
  "lastCheckedTimestamp": "2019-07-29T09:12:33.001Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alertsCount|integer|false|none|Number of times an Alert for the Alert Rule has been started since creation.|
|status|string|false|none|Alert Rule status:<br>- `ok`: All the Alerts have expired or have never started.<br>- `ongoing`: At least one Alert is currently ongoing.<br>|
|lastStartedTimestamp|string(date-time)|false|none|Timestamp when the Alert Rule transfered from 'ok' to 'ongoing' status.|
|lastExpiredTimestamp|string(date-time)|false|none|Timestamp when the Alert Rule transfered from 'ongoing' to 'ok' status.|
|lastCheckedTimestamp|string(date-time)|false|none|Timestamp of the last successful check of the Alert Rule.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ok|
|status|ongoing|

<h2 id="tocS_AlertRule">AlertRule</h2>
<!-- backwards compatibility -->
<a id="schemaalertrule"></a>
<a id="schema_AlertRule"></a>
<a id="tocSalertrule"></a>
<a id="tocsalertrule"></a>

```json
{
  "metadata": {
    "name": "resource-name",
    "displayName": "My Display Name",
    "description": "This is a sample description string. It provides information about the resource.",
    "kind": "<collection>-<object>",
    "uid": "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "tags": [
      "production_public",
      "dev",
      "new_app",
      "us-west-1",
      "emea"
    ],
    "ref": "/services/environments/prod",
    "links": {
      "rel": "/api/v1/services/environments/prod"
    },
    "createTime": "2019-07-29T09:12:33.001Z",
    "updateTime": "2019-07-29T10:12:33.001Z"
  },
  "userEmail": "user@example.com",
  "metric": "upstream.network.latency.max",
  "aggregation": "string",
  "filter": "((app!='app1' OR app='app2') AND environment in ('dev', 'prod')) AND (tags!='*tag1*' AND interface='ens*')",
  "groupBy": "app,environment",
  "threshold": 0,
  "operator": "ge",
  "period": "1h",
  "notificationType": "email",
  "emailAddresses": [
    "user@example.com"
  ],
  "mute": false,
  "status": {
    "alertsCount": 0,
    "status": "ok",
    "lastStartedTimestamp": "2019-07-29T09:12:33.001Z",
    "lastExpiredTimestamp": "2019-07-29T09:12:33.001Z",
    "lastCheckedTimestamp": "2019-07-29T09:12:33.001Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|[ResourceMeta](#schemaresourcemeta)|true|none|none|
|userEmail|string(email)|false|read-only|Email of the user who created the Alert Rule.|
|metric|string|true|none|A valid metric from the catalog.|
|aggregation|string|false|read-only|Aggregation of the metric over the configured period of time.|
|filter|string|false|none|The use of filter parameter limits the metrics data samples being taken into account for Alert Rule calculation<br>to those matching the filter expression.<br>Filter parameter syntax works the same as for `/analytics/metrics` API.<br><br>- An empty filter parameter indicates that all collected data is going to be taken into account for Alert Rule calculation<br>- `filter=app='myapp' AND (env='prod' or env='dev')` indicates that only samples related to desired app/env will be taken into account<br>|
|groupBy|string|false|none|When `groupBy` is provided, alerts will be triggered for each distinct group of provided dimension(s).<br>GroupBy parameter syntax works the same as for `/analytics/metrics` API.<br>|
|threshold|number|true|none|Threshold to which the metric value will be compared to.|
|operator|string|true|none|Operator that defines which metric values will trigger an alert:<br><br>- `ge`: metric value must be greater than or equal to the threshold in order to trigger an alert<br>- `le`: metric value must be less than or equal to the threshold in order to trigger an alert<br>|
|period|string|true|none|Period from which the metric aggregated value is calculated.<br><br>Must be a valid duration - a string starting with a number followed by a unit of time (`h`, `m` or `s`).<br><br>24h is the maximum allowed period.<br>|
|notificationType|string|false|none|Defines how notifications about triggered Alerts will be delivered to the user.|
|emailAddresses|[string(email)]|false|none|none|
|mute|boolean|false|none|Indicates if the Alert Rule is muted. (Muted Alert Rules will not trigger notifications).|
|status|[AlertRuleStatus](#schemaalertrulestatus)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|ge|
|operator|le|
|notificationType|email|

<h2 id="tocS_SelfLinks">SelfLinks</h2>
<!-- backwards compatibility -->
<a id="schemaselflinks"></a>
<a id="schema_SelfLinks"></a>
<a id="tocSselflinks"></a>
<a id="tocsselflinks"></a>

```json
{
  "rel": "/api/v1/services/environments/prod"
}
```

The SelfLinks object contains a link from the resource to itself.
This object is used only in responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rel|string|false|none|`rel` contains the complete path fragment of a URI and can be used<br>to construct a query to the object.<br>|

<h2 id="tocS_ResourceMeta">ResourceMeta</h2>
<!-- backwards compatibility -->
<a id="schemaresourcemeta"></a>
<a id="schema_ResourceMeta"></a>
<a id="tocSresourcemeta"></a>
<a id="tocsresourcemeta"></a>

```json
{
  "name": "resource-name",
  "displayName": "My Display Name",
  "description": "This is a sample description string. It provides information about the resource.",
  "kind": "<collection>-<object>",
  "uid": "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "tags": [
    "production_public",
    "dev",
    "new_app",
    "us-west-1",
    "emea"
  ],
  "ref": "/services/environments/prod",
  "links": {
    "rel": "/api/v1/services/environments/prod"
  },
  "createTime": "2019-07-29T09:12:33.001Z",
  "updateTime": "2019-07-29T10:12:33.001Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Resource name is a unique identifier for a resource within the context of a namespace.<br>Resource names must conform to [RFC 1738 Section 2.2](https://www.ietf.org/rfc/rfc1738.txt) and have a valid syntax for email addresses. The following rules are enforced:<br><br>- do not utilize URL encoding;<br>- do not include spaces;<br>- do not use uppercase characters, for example, 'A-Z'; extended character sets are supported;<br>- do not use the following characters: `"`, `*`, `:`, `;`, `/`, `\`, `%`, `?`, `hash`, `=`, `&`, `\|`, `~`, `^`, `{`, `}`, `[`, `]`, `<`, `>`;<br>- cannot start or end with an `@` sign;<br>- cannot be only `.` or `..`<br><br>For example: For a collection resource located at<br><br>`https://controller.example.com/api/v1/services/apps/shopping_@1`<br><br>the resource name is "shopping_@1".<br>|
|displayName|string|false|none|`displayName` is a user friendly resource name. It can be used to define <br>a longer, and less constrained, name for a resource.<br><br>Display names:<br><br>- are optional (defaults to an empty string if no value is provided),<br>- do not have to be unique, <br>- cannot be assigned by the server.<br>|
|description|string|false|none|`description` is a free-form text property. You can use it to provide information that helps <br>to identify the resource.<br><br>Descriptions:<br><br>- are optional (defaults to an empty string if no value is provided),<br>- do not have to be unique, <br>- cannot be assigned by the server.<br>|
|kind|string|false|none|Kind is a string representation of an API resource's data type.<br>It is assigned by the server and cannot be changed. <br><br>When creating a `kind`, the server uses hyphens to connect word segments; <br>singleton and collection item resources are not pluralized.<br>|
|uid|string(uuid)|false|none|Unique Identifier (UID)<br><br>UID is a unique identifier in time and space for a resource. <br>When you create a resource, the server assigns a UID to the resource.<br><br>Refer to [IETF RFC 4122](https://tools.ietf.org/html/rfc4122) for more information.<br>|
|tags|[string]|false|none|You can assign `tags` to a resource as a way to help map, scope, <br>and organize resources. <br><br>The system uses tag selectors to specify selection criteria that <br>match resources that have particular tags.<br>|
|ref|string|false|none|The `ref` field contains a reference to another NGINX Controller resource.<br>|
|links|[SelfLinks](#schemaselflinks)|false|none|The SelfLinks object contains a link from the resource to itself.<br>This object is used only in responses.<br>|
|createTime|string(date-time)|false|none|A timestamp that represents the server time when the resource was created.<br><br>Create time is not guaranteed to be set in "happens-before" order<br>across separate operations.<br><br>In JSON format, `create_time` type is encoded as a string in the<br>[RFC 3339](https://www.ietf.org/rfc/rfc3339.txt).<br><br>For example: 2018-04-01T01:30:15.01Z<br><br>Create Time is assigned by the server and cannot be changed.<br>|
|updateTime|string(date-time)|false|none|A timestamp that represents the server time when the resource was last modified.<br><br>Resources that have never been updated do not have an `update_time` stamp.<br><br>The default value for resources that have never been updated is the local <br>language-specific equivalent of "null".<br><br>In JSON format, `update_time` type is encoded as a string as described in <br>[RFC 3339](https://www.ietf.org/rfc/rfc3339.txt).<br>|

<h2 id="tocS_ErrorDetail">ErrorDetail</h2>
<!-- backwards compatibility -->
<a id="schemaerrordetail"></a>
<a id="schema_ErrorDetail"></a>
<a id="tocSerrordetail"></a>
<a id="tocserrordetail"></a>

```json
{
  "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|A detailed error message returned by the server. <br><br>These messages contain the following information, where applicable:<br><br>- What happened.<br>- Why it happened.<br>- What the consequences are (if any).<br>- Recommended action to take to resolve the issue.<br>|

<h2 id="tocS_ErrorModel">ErrorModel</h2>
<!-- backwards compatibility -->
<a id="schemaerrormodel"></a>
<a id="schema_ErrorModel"></a>
<a id="tocSerrormodel"></a>
<a id="tocserrormodel"></a>

```json
{
  "message": "Error doing <action>.",
  "code": 1234567,
  "details": [
    {
      "description": "Error doing <action>: <reason for error>. This can lead to <potential consequences>. Try <action> to resolve the issue."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|A human-readable message, in English, that describes the error.<br>|
|code|integer|true|none|A numeric error code that can be used to identify errors for support purposes.<br>|
|details|[[ErrorDetail](#schemaerrordetail)]|false|none|none|

<h2 id="tocS_Time">Time</h2>
<!-- backwards compatibility -->
<a id="schematime"></a>
<a id="schema_Time"></a>
<a id="tocStime"></a>
<a id="tocstime"></a>

```json
"2019-08-07T09:57:36.088757764Z"
```

Indicates a point in time.

You can provide time using ISO 8601 format or as an offset. An offset is a string that starts with `+` or `-`, followed by a number and a unit of time (`y`, `M`, `w`, `d`, `h`, `m` or `s`).
Examples: "2019-08-07T09:57:36.088757764Z", "now-3h"

<h2 id="tocS_MetricQueryResult">MetricQueryResult</h2>
<!-- backwards compatibility -->
<a id="schemametricqueryresult"></a>
<a id="schema_MetricQueryResult"></a>
<a id="tocSmetricqueryresult"></a>
<a id="tocsmetricqueryresult"></a>

```json
{
  "queryMetadata": {
    "startTime": "2019-08-07T09:57:36.088757764Z",
    "endTime": "2019-08-07T09:57:36.088757764Z",
    "resolution": "30m"
  },
  "metrics": [
    {
      "name": "plus.upstream.response.count",
      "aggr": "AVG",
      "series": [
        {
          "dimensions": {
            "app": "app1",
            "env": "prod"
          },
          "timestamps": [
            "2019-08-07T09:57:30",
            "2019-08-07T09:57:35"
          ],
          "values": [
            4.2,
            4.4
          ]
        }
      ]
    }
  ],
  "responseMetadata": {
    "warning": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queryMetadata|[MetricQueryMetadata](#schemametricquerymetadata)|false|none|none|
|metrics|[[Metric](#schemametric)]|false|none|none|
|responseMetadata|[MetricResponseMetadata](#schemametricresponsemetadata)|false|none|none|

<h2 id="tocS_MetricResponseMetadata">MetricResponseMetadata</h2>
<!-- backwards compatibility -->
<a id="schemametricresponsemetadata"></a>
<a id="schema_MetricResponseMetadata"></a>
<a id="tocSmetricresponsemetadata"></a>
<a id="tocsmetricresponsemetadata"></a>

```json
{
  "warning": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|warning|string|false|none|none|

<h2 id="tocS_MetricQueryMetadata">MetricQueryMetadata</h2>
<!-- backwards compatibility -->
<a id="schemametricquerymetadata"></a>
<a id="schema_MetricQueryMetadata"></a>
<a id="tocSmetricquerymetadata"></a>
<a id="tocsmetricquerymetadata"></a>

```json
{
  "startTime": "2019-08-07T09:57:36.088757764Z",
  "endTime": "2019-08-07T09:57:36.088757764Z",
  "resolution": "30m"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|startTime|string(date-time)|false|none|none|
|endTime|string(date-time)|false|none|none|
|resolution|string|false|none|none|

<h2 id="tocS_Metric">Metric</h2>
<!-- backwards compatibility -->
<a id="schemametric"></a>
<a id="schema_Metric"></a>
<a id="tocSmetric"></a>
<a id="tocsmetric"></a>

```json
{
  "name": "plus.upstream.response.count",
  "aggr": "AVG",
  "series": [
    {
      "dimensions": {
        "app": "app1",
        "env": "prod"
      },
      "timestamps": [
        "2019-08-07T09:57:30",
        "2019-08-07T09:57:35"
      ],
      "values": [
        4.2,
        4.4
      ]
    }
  ]
}
```

Metrics provide a means of measuring and analyzing the performance of your systems and of NGINX Controller.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|aggr|string|false|none|none|
|series|[[Series](#schemaseries)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|aggr|AVG|
|aggr|COUNT|
|aggr|SUM|
|aggr|MAX|
|aggr|MIN|
|aggr|RATE|

<h2 id="tocS_Series">Series</h2>
<!-- backwards compatibility -->
<a id="schemaseries"></a>
<a id="schema_Series"></a>
<a id="tocSseries"></a>
<a id="tocsseries"></a>

```json
{
  "dimensions": {
    "app": "app1",
    "env": "prod"
  },
  "timestamps": [
    "2019-08-07T09:57:30",
    "2019-08-07T09:57:35"
  ],
  "values": [
    4.2,
    4.4
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimensions|object|false|none|none|
|timestamps|[string(date-time)]|false|none|none|
|values|[number]|false|none|none|

<h2 id="tocS_ListMetricsDescriptionsResponse">ListMetricsDescriptionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmetricsdescriptionsresponse"></a>
<a id="schema_ListMetricsDescriptionsResponse"></a>
<a id="tocSlistmetricsdescriptionsresponse"></a>
<a id="tocslistmetricsdescriptionsresponse"></a>

```json
{
  "items": [
    {
      "metadata": {
        "name": "resource-name",
        "displayName": "My Display Name",
        "description": "This is a sample description string. It provides information about the resource.",
        "kind": "<collection>-<object>",
        "uid": "d290f1ee-6c54-4b01-90e6-d701748f0851",
        "tags": [
          "production_public",
          "dev",
          "new_app",
          "us-west-1",
          "emea"
        ],
        "ref": "/services/environments/prod",
        "links": {
          "rel": "/api/v1/services/environments/prod"
        },
        "createTime": "2019-07-29T09:12:33.001Z",
        "updateTime": "2019-07-29T10:12:33.001Z"
      },
      "currentStatus": {
        "name": "nginx.http.request.bytes_sent",
        "description": "Number of bytes sent to clients.",
        "unit": "bytes",
        "aggregations": [
          "AVG",
          "SUM"
        ],
        "type": "incremental",
        "categories": [
          "nginx",
          "apimgmt_environment",
          "apimgmt_definition",
          "apimgmt_entry_point"
        ],
        "dimensions": [
          {
            "ref": "/services/environments/prod",
            "links": {
              "rel": "/api/v1/services/environments/prod",
              "name": "production",
              "displayName": "Production Environment"
            }
          }
        ]
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[MetricDescriptionRecord](#schemametricdescriptionrecord)]|false|none|none|

<h2 id="tocS_MetricDescriptionResponse">MetricDescriptionResponse</h2>
<!-- backwards compatibility -->
<a id="schemametricdescriptionresponse"></a>
<a id="schema_MetricDescriptionResponse"></a>
<a id="tocSmetricdescriptionresponse"></a>
<a id="tocsmetricdescriptionresponse"></a>

```json
{
  "metadata": {
    "name": "resource-name",
    "displayName": "My Display Name",
    "description": "This is a sample description string. It provides information about the resource.",
    "kind": "<collection>-<object>",
    "uid": "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "tags": [
      "production_public",
      "dev",
      "new_app",
      "us-west-1",
      "emea"
    ],
    "ref": "/services/environments/prod",
    "links": {
      "rel": "/api/v1/services/environments/prod"
    },
    "createTime": "2019-07-29T09:12:33.001Z",
    "updateTime": "2019-07-29T10:12:33.001Z"
  },
  "currentStatus": {
    "name": "nginx.http.request.bytes_sent",
    "description": "Number of bytes sent to clients.",
    "unit": "bytes",
    "aggregations": [
      "AVG",
      "SUM"
    ],
    "type": "incremental",
    "categories": [
      "nginx",
      "apimgmt_environment",
      "apimgmt_definition",
      "apimgmt_entry_point"
    ],
    "dimensions": [
      {
        "ref": "/services/environments/prod",
        "links": {
          "rel": "/api/v1/services/environments/prod",
          "name": "production",
          "displayName": "Production Environment"
        }
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|[ResourceMeta](#schemaresourcemeta)|true|none|none|
|currentStatus|[MetricDescription](#schemametricdescription)|true|none|The information record for a Metrics Catalog resource.|

<h2 id="tocS_MetricDescriptionRecord">MetricDescriptionRecord</h2>
<!-- backwards compatibility -->
<a id="schemametricdescriptionrecord"></a>
<a id="schema_MetricDescriptionRecord"></a>
<a id="tocSmetricdescriptionrecord"></a>
<a id="tocsmetricdescriptionrecord"></a>

```json
{
  "metadata": {
    "name": "resource-name",
    "displayName": "My Display Name",
    "description": "This is a sample description string. It provides information about the resource.",
    "kind": "<collection>-<object>",
    "uid": "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "tags": [
      "production_public",
      "dev",
      "new_app",
      "us-west-1",
      "emea"
    ],
    "ref": "/services/environments/prod",
    "links": {
      "rel": "/api/v1/services/environments/prod"
    },
    "createTime": "2019-07-29T09:12:33.001Z",
    "updateTime": "2019-07-29T10:12:33.001Z"
  },
  "currentStatus": {
    "name": "nginx.http.request.bytes_sent",
    "description": "Number of bytes sent to clients.",
    "unit": "bytes",
    "aggregations": [
      "AVG",
      "SUM"
    ],
    "type": "incremental",
    "categories": [
      "nginx",
      "apimgmt_environment",
      "apimgmt_definition",
      "apimgmt_entry_point"
    ],
    "dimensions": [
      {
        "ref": "/services/environments/prod",
        "links": {
          "rel": "/api/v1/services/environments/prod",
          "name": "production",
          "displayName": "Production Environment"
        }
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|[ResourceMeta](#schemaresourcemeta)|true|none|none|
|currentStatus|[MetricDescription](#schemametricdescription)|true|none|The information record for a Metrics Catalog resource.|

<h2 id="tocS_MetricDescription">MetricDescription</h2>
<!-- backwards compatibility -->
<a id="schemametricdescription"></a>
<a id="schema_MetricDescription"></a>
<a id="tocSmetricdescription"></a>
<a id="tocsmetricdescription"></a>

```json
{
  "name": "nginx.http.request.bytes_sent",
  "description": "Number of bytes sent to clients.",
  "unit": "bytes",
  "aggregations": [
    "AVG",
    "SUM"
  ],
  "type": "incremental",
  "categories": [
    "nginx",
    "apimgmt_environment",
    "apimgmt_definition",
    "apimgmt_entry_point"
  ],
  "dimensions": [
    {
      "ref": "/services/environments/prod",
      "links": {
        "rel": "/api/v1/services/environments/prod",
        "name": "production",
        "displayName": "Production Environment"
      }
    }
  ]
}
```

The information record for a Metrics Catalog resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|description|string|false|none|none|
|unit|string|false|none|none|
|aggregations|[string]|false|none|none|
|type|string|false|none|none|
|categories|[string]|false|none|An array of freeform strings containing the category(ies) of a Metrics Catalog resource.|
|dimensions|[[ResourceRef](#schemaresourceref)]|false|none|An array of the Dimensions that apply to a Metrics Catalog resource.|

#### Enumerated Values

|Property|Value|
|---|---|
|aggregations|AVG|
|aggregations|COUNT|
|aggregations|SUM|
|aggregations|MAX|
|aggregations|MIN|
|type|counter|
|type|gauge|
|type|incremental|

<h2 id="tocS_ListDimensionsDescriptionsResponse">ListDimensionsDescriptionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdimensionsdescriptionsresponse"></a>
<a id="schema_ListDimensionsDescriptionsResponse"></a>
<a id="tocSlistdimensionsdescriptionsresponse"></a>
<a id="tocslistdimensionsdescriptionsresponse"></a>

```json
{
  "items": [
    {
      "metadata": {
        "name": "resource-name",
        "displayName": "My Display Name",
        "description": "This is a sample description string. It provides information about the resource.",
        "kind": "<collection>-<object>",
        "uid": "d290f1ee-6c54-4b01-90e6-d701748f0851",
        "tags": [
          "production_public",
          "dev",
          "new_app",
          "us-west-1",
          "emea"
        ],
        "ref": "/services/environments/prod",
        "links": {
          "rel": "/api/v1/services/environments/prod"
        },
        "createTime": "2019-07-29T09:12:33.001Z",
        "updateTime": "2019-07-29T10:12:33.001Z"
      },
      "currentStatus": {
        "name": "instance",
        "description": "Instance name.",
        "type": "string",
        "metrics": [
          {
            "ref": "/services/environments/prod",
            "links": {
              "rel": "/api/v1/services/environments/prod",
              "name": "production",
              "displayName": "Production Environment"
            }
          }
        ]
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[DimensionDescriptionRecord](#schemadimensiondescriptionrecord)]|false|none|none|

<h2 id="tocS_GetDimensionDescriptionResponse">GetDimensionDescriptionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdimensiondescriptionresponse"></a>
<a id="schema_GetDimensionDescriptionResponse"></a>
<a id="tocSgetdimensiondescriptionresponse"></a>
<a id="tocsgetdimensiondescriptionresponse"></a>

```json
{
  "metadata": {
    "name": "resource-name",
    "displayName": "My Display Name",
    "description": "This is a sample description string. It provides information about the resource.",
    "kind": "<collection>-<object>",
    "uid": "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "tags": [
      "production_public",
      "dev",
      "new_app",
      "us-west-1",
      "emea"
    ],
    "ref": "/services/environments/prod",
    "links": {
      "rel": "/api/v1/services/environments/prod"
    },
    "createTime": "2019-07-29T09:12:33.001Z",
    "updateTime": "2019-07-29T10:12:33.001Z"
  },
  "currentStatus": {
    "name": "instance",
    "description": "Instance name.",
    "type": "string",
    "metrics": [
      {
        "ref": "/services/environments/prod",
        "links": {
          "rel": "/api/v1/services/environments/prod",
          "name": "production",
          "displayName": "Production Environment"
        }
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|[ResourceMeta](#schemaresourcemeta)|true|none|none|
|currentStatus|[DimensionDescription](#schemadimensiondescription)|true|none|The information record for a Dimensions Catalog resource.|

<h2 id="tocS_DimensionDescriptionRecord">DimensionDescriptionRecord</h2>
<!-- backwards compatibility -->
<a id="schemadimensiondescriptionrecord"></a>
<a id="schema_DimensionDescriptionRecord"></a>
<a id="tocSdimensiondescriptionrecord"></a>
<a id="tocsdimensiondescriptionrecord"></a>

```json
{
  "metadata": {
    "name": "resource-name",
    "displayName": "My Display Name",
    "description": "This is a sample description string. It provides information about the resource.",
    "kind": "<collection>-<object>",
    "uid": "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "tags": [
      "production_public",
      "dev",
      "new_app",
      "us-west-1",
      "emea"
    ],
    "ref": "/services/environments/prod",
    "links": {
      "rel": "/api/v1/services/environments/prod"
    },
    "createTime": "2019-07-29T09:12:33.001Z",
    "updateTime": "2019-07-29T10:12:33.001Z"
  },
  "currentStatus": {
    "name": "instance",
    "description": "Instance name.",
    "type": "string",
    "metrics": [
      {
        "ref": "/services/environments/prod",
        "links": {
          "rel": "/api/v1/services/environments/prod",
          "name": "production",
          "displayName": "Production Environment"
        }
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|[ResourceMeta](#schemaresourcemeta)|true|none|none|
|currentStatus|[DimensionDescription](#schemadimensiondescription)|true|none|The information record for a Dimensions Catalog resource.|

<h2 id="tocS_DimensionDescription">DimensionDescription</h2>
<!-- backwards compatibility -->
<a id="schemadimensiondescription"></a>
<a id="schema_DimensionDescription"></a>
<a id="tocSdimensiondescription"></a>
<a id="tocsdimensiondescription"></a>

```json
{
  "name": "instance",
  "description": "Instance name.",
  "type": "string",
  "metrics": [
    {
      "ref": "/services/environments/prod",
      "links": {
        "rel": "/api/v1/services/environments/prod",
        "name": "production",
        "displayName": "Production Environment"
      }
    }
  ]
}
```

The information record for a Dimensions Catalog resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|description|string|false|none|none|
|type|string|false|none|none|
|metrics|[[ResourceRef](#schemaresourceref)]|false|none|An array of the Metrics that the Dimensions resource applies to.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|string|
|type|int|
|type|list|

<h2 id="tocS_NamedLinks">NamedLinks</h2>
<!-- backwards compatibility -->
<a id="schemanamedlinks"></a>
<a id="schema_NamedLinks"></a>
<a id="tocSnamedlinks"></a>
<a id="tocsnamedlinks"></a>

```json
{
  "rel": "/api/v1/services/environments/prod",
  "name": "production",
  "displayName": "Production Environment"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rel|string|false|none|`rel` contains the complete path fragment of a URI and can be used<br>to construct a query to the object.<br>|
|name|string|false|none|The name of the linked resource.<br>|
|displayName|string|false|none|A user friendly resource name.|

<h2 id="tocS_ResourceRef">ResourceRef</h2>
<!-- backwards compatibility -->
<a id="schemaresourceref"></a>
<a id="schema_ResourceRef"></a>
<a id="tocSresourceref"></a>
<a id="tocsresourceref"></a>

```json
{
  "ref": "/services/environments/prod",
  "links": {
    "rel": "/api/v1/services/environments/prod",
    "name": "production",
    "displayName": "Production Environment"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ref|string|true|none|A reference to another NGINX Controller resource.<br>|
|links|[NamedLinks](#schemanamedlinks)|false|none|none|

<h2 id="tocS_EventQueryResult">EventQueryResult</h2>
<!-- backwards compatibility -->
<a id="schemaeventqueryresult"></a>
<a id="schema_EventQueryResult"></a>
<a id="tocSeventqueryresult"></a>
<a id="tocseventqueryresult"></a>

```json
{
  "Metadata": {
    "pagination": {
      "pageToken": "1594048781",
      "links": {
        "next": {
          "rel": "/api/v1/services/environments/prod"
        },
        "prev": {
          "rel": "/api/v1/services/environments/prod"
        }
      },
      "total": 3600
    }
  },
  "items": [
    {
      "timestamp": "2019-08-07T09:57:36.088757764Z",
      "id": "00112233-4455-6677-8899-aabbccddeeff",
      "message": "nginx stub_status detected, https://127.0.0.1:443/basic_status",
      "count": 99,
      "category": "string",
      "level": "INFO",
      "hostname": "d0784771a503",
      "alias": "my_system",
      "status": "success",
      "error": "string",
      "local_id": "d23c85484ee760ee5f4619c0434e1968b5290964487541da0889964eb783613c",
      "root_uuid": "759e842f6b9f51a7803f57da1e9f5ae8",
      "tags": "[\"tag1\", \"tag2\"]",
      "instance": "2",
      "location": "unspecified",
      "correlationId": "e5f355e4de82edd0afcd74ef6c1ee6aa",
      "http.request_endpoint": "/services/environments/dev/apps/app/components/25",
      "http.request_method": "POST",
      "user": "admin@nginx.test",
      "environment": "dev-environment",
      "app": "finance-app",
      "component": "secure-component",
      "gateway": "dev-gateway",
      "request_outcome": "REJECTED",
      "request_outcome_reason": "SECURITY_WAF_FLAGGED",
      "http.response_code": 200,
      "http.hostname": "itay-108-117.f5net.com",
      "http.remote_addr": "127.0.0.1",
      "http.remote_port": 4000,
      "http.server_addr": "0.0.0.0",
      "http.server_port": 80,
      "http.request": "GET /test.exe HTTP/1.1\\r\\nUser-Agent: curl/7.29.0\\r\\nHost: localhost\\r\\nAccept: */*\\r\\n",
      "waf.support_id": "161339000577578694",
      "waf.signature_ids": "200001475,200000098",
      "waf.policy": "/Common/policy1",
      "waf.attack_types": "Non-browser Client,Abuse of Functionality,Cross Site Scripting (XSS)",
      "waf.violation_rating": "MOST_LIKELY_ATTACK",
      "waf.signature_names": "XSS script tag end (Parameter) (2),XSS script tag (Parameter)",
      "waf.is_truncated": "true",
      "waf.signature_cves": "CVE-2017-8759,CVE-2015-1641",
      "waf.sub_violations": "HTTP protocol compliance failed:Host header contains IP address",
      "waf.violations": "HTTP protocol compliance failed,Illegal meta character in value,Attack signature detected",
      "waf.x_forwarded_for_header_value": "87.233.120.158",
      "waf.bot_anomalies": "Search Engine Verification Failed",
      "waf.bot_category": "Search Engine",
      "waf.bot_client_class": "Malicious Bot",
      "waf.bot_signature_name": "Google",
      "waf.enforced_bot_anomalies": "Search Engine Verification Failed",
      "action_type": "login",
      "action_outcome": "success",
      "auth_provider.name": "local",
      "auth_provider.type": "BASIC",
      "resource_name": "datadog-forwarder",
      "big_ip_address": "https://87.233.120.158",
      "workload_health_state": "unhealthy"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Metadata|[Metadata](#schemametadata)|false|none|none|
|items|[[Event](#schemaevent)]|false|none|none|

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "timestamp": "2019-08-07T09:57:36.088757764Z",
  "id": "00112233-4455-6677-8899-aabbccddeeff",
  "message": "nginx stub_status detected, https://127.0.0.1:443/basic_status",
  "count": 99,
  "category": "string",
  "level": "INFO",
  "hostname": "d0784771a503",
  "alias": "my_system",
  "status": "success",
  "error": "string",
  "local_id": "d23c85484ee760ee5f4619c0434e1968b5290964487541da0889964eb783613c",
  "root_uuid": "759e842f6b9f51a7803f57da1e9f5ae8",
  "tags": "[\"tag1\", \"tag2\"]",
  "instance": "2",
  "location": "unspecified",
  "correlationId": "e5f355e4de82edd0afcd74ef6c1ee6aa",
  "http.request_endpoint": "/services/environments/dev/apps/app/components/25",
  "http.request_method": "POST",
  "user": "admin@nginx.test",
  "environment": "dev-environment",
  "app": "finance-app",
  "component": "secure-component",
  "gateway": "dev-gateway",
  "request_outcome": "REJECTED",
  "request_outcome_reason": "SECURITY_WAF_FLAGGED",
  "http.response_code": 200,
  "http.hostname": "itay-108-117.f5net.com",
  "http.remote_addr": "127.0.0.1",
  "http.remote_port": 4000,
  "http.server_addr": "0.0.0.0",
  "http.server_port": 80,
  "http.request": "GET /test.exe HTTP/1.1\\r\\nUser-Agent: curl/7.29.0\\r\\nHost: localhost\\r\\nAccept: */*\\r\\n",
  "waf.support_id": "161339000577578694",
  "waf.signature_ids": "200001475,200000098",
  "waf.policy": "/Common/policy1",
  "waf.attack_types": "Non-browser Client,Abuse of Functionality,Cross Site Scripting (XSS)",
  "waf.violation_rating": "MOST_LIKELY_ATTACK",
  "waf.signature_names": "XSS script tag end (Parameter) (2),XSS script tag (Parameter)",
  "waf.is_truncated": "true",
  "waf.signature_cves": "CVE-2017-8759,CVE-2015-1641",
  "waf.sub_violations": "HTTP protocol compliance failed:Host header contains IP address",
  "waf.violations": "HTTP protocol compliance failed,Illegal meta character in value,Attack signature detected",
  "waf.x_forwarded_for_header_value": "87.233.120.158",
  "waf.bot_anomalies": "Search Engine Verification Failed",
  "waf.bot_category": "Search Engine",
  "waf.bot_client_class": "Malicious Bot",
  "waf.bot_signature_name": "Google",
  "waf.enforced_bot_anomalies": "Search Engine Verification Failed",
  "action_type": "login",
  "action_outcome": "success",
  "auth_provider.name": "local",
  "auth_provider.type": "BASIC",
  "resource_name": "datadog-forwarder",
  "big_ip_address": "https://87.233.120.158",
  "workload_health_state": "unhealthy"
}
```

An Event is a system message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timestamp|string(date-time)|false|none|none|
|id|string(uuid)|false|none|none|
|message|string|false|none|none|
|count|integer|false|none|none|
|category|string|false|none|none|
|level|string|false|none|none|
|hostname|string|false|none|none|
|alias|string|false|none|none|
|status|string|false|none|none|
|error|string|false|none|none|
|local_id|string|false|none|none|
|root_uuid|string|false|none|none|
|tags|[string]|false|none|none|
|instance|string|false|none|none|
|location|string|false|none|none|
|correlationId|string|false|none|none|
|http.request_endpoint|string|false|none|none|
|http.request_method|string|false|none|none|
|user|string|false|none|none|
|environment|string|false|none|none|
|app|string|false|none|none|
|component|string|false|none|none|
|gateway|string|false|none|none|
|request_outcome|string|false|none|none|
|request_outcome_reason|string|false|none|none|
|http.response_code|integer|false|none|none|
|http.hostname|string|false|none|none|
|http.remote_addr|string|false|none|none|
|http.remote_port|integer|false|none|none|
|http.server_addr|string|false|none|none|
|http.server_port|integer|false|none|none|
|http.request|string|false|none|none|
|waf.support_id|string|false|none|none|
|waf.signature_ids|string|false|none|none|
|waf.policy|string|false|none|none|
|waf.attack_types|string|false|none|none|
|waf.violation_rating|string|false|none|none|
|waf.signature_names|string|false|none|none|
|waf.is_truncated|string|false|none|none|
|waf.signature_cves|string|false|none|none|
|waf.sub_violations|string|false|none|none|
|waf.violations|string|false|none|none|
|waf.x_forwarded_for_header_value|string|false|none|none|
|waf.bot_anomalies|string|false|none|none|
|waf.bot_category|string|false|none|none|
|waf.bot_client_class|string|false|none|none|
|waf.bot_signature_name|string|false|none|none|
|waf.enforced_bot_anomalies|string|false|none|none|
|action_type|string|false|none|none|
|action_outcome|string|false|none|none|
|auth_provider.name|string|false|none|none|
|auth_provider.type|string|false|none|none|
|resource_name|string|false|none|none|
|big_ip_address|string|false|none|none|
|workload_health_state|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|level|DEBUG|
|level|INFO|
|level|WARNING|
|level|ERROR|
|level|CRITICAL|
|request_outcome|REJECTED|
|request_outcome|PASSED|
|request_outcome_reason|SECURITY_WAF_OK|
|request_outcome_reason|SECURITY_WAF_VIOLATION|
|request_outcome_reason|SECURITY_WAF_FLAGGED|
|request_outcome_reason|SECURITY_WAF_BYPASS|
|request_outcome_reason|SECURITY_NGINX_VIOLATION|
|request_outcome_reason|SECURITY_WAF_VIOLATION_TRANSPARENT|
|waf.violation_rating|RISK_COULD_NOT_BE_DETERMINED|
|waf.violation_rating|POSSIBLE_ATTACK|
|waf.violation_rating|MOST_LIKELY_ATTACK|

<h2 id="tocS_Metadata">Metadata</h2>
<!-- backwards compatibility -->
<a id="schemametadata"></a>
<a id="schema_Metadata"></a>
<a id="tocSmetadata"></a>
<a id="tocsmetadata"></a>

```json
{
  "pagination": {
    "pageToken": "1594048781",
    "links": {
      "next": {
        "rel": "/api/v1/services/environments/prod"
      },
      "prev": {
        "rel": "/api/v1/services/environments/prod"
      }
    },
    "total": 3600
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[MetadataPagination](#schemametadatapagination)|false|none|none|

<h2 id="tocS_MetadataPagination">MetadataPagination</h2>
<!-- backwards compatibility -->
<a id="schemametadatapagination"></a>
<a id="schema_MetadataPagination"></a>
<a id="tocSmetadatapagination"></a>
<a id="tocsmetadatapagination"></a>

```json
{
  "pageToken": "1594048781",
  "links": {
    "next": {
      "rel": "/api/v1/services/environments/prod"
    },
    "prev": {
      "rel": "/api/v1/services/environments/prod"
    }
  },
  "total": 3600
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageToken|string|true|none|none|
|links|[PaginationLinks](#schemapaginationlinks)|false|none|none|
|total|integer|false|none|none|

<h2 id="tocS_PaginationLinks">PaginationLinks</h2>
<!-- backwards compatibility -->
<a id="schemapaginationlinks"></a>
<a id="schema_PaginationLinks"></a>
<a id="tocSpaginationlinks"></a>
<a id="tocspaginationlinks"></a>

```json
{
  "next": {
    "rel": "/api/v1/services/environments/prod"
  },
  "prev": {
    "rel": "/api/v1/services/environments/prod"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|[SelfLinks](#schemaselflinks)|false|none|The SelfLinks object contains a link from the resource to itself.<br>This object is used only in responses.<br>|
|prev|[SelfLinks](#schemaselflinks)|false|none|The SelfLinks object contains a link from the resource to itself.<br>This object is used only in responses.<br>|

<h2 id="tocS_Forwarder">Forwarder</h2>
<!-- backwards compatibility -->
<a id="schemaforwarder"></a>
<a id="schema_Forwarder"></a>
<a id="tocSforwarder"></a>
<a id="tocsforwarder"></a>

```json
{
  "metadata": {
    "name": "splunk",
    "displayName": "Splunk - Metrics",
    "description": "Metrics forwarder going to Splunk HEC",
    "kind": "forwarder",
    "uid": "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "links": {
      "rel": "/api/v1/analytics/forwarders/splunk"
    },
    "createTime": "2019-07-29T09:12:33.001Z",
    "updateTime": "2019-07-29T10:12:33.001Z"
  },
  "desiredState": {
    "collectorType": "SPLUNK",
    "integrationRef": {
      "ref": "/platform/integrations/new_splunk_hec"
    },
    "streams": [
      {
        "inputDataType": "METRICS",
        "outputFormat": "SPLUNK",
        "selector": "names=http.request.bytes_rcvd&filter=app='myapp'"
      },
      {
        "inputDataType": "METRICS",
        "outputFormat": "SPLUNK",
        "selector": "names=http.request.count&filter=app='myapp'"
      }
    ]
  },
  "currentStatus": {
    "state": {
      "selfConfigState": {
        "isConfigured": false,
        "isConfiguring": true,
        "isError": false,
        "isDeleting": false,
        "total": 1,
        "configured": 0,
        "configuring": 1,
        "error": 0,
        "deleting": 0
      }
    },
    "collectorType": "SPLUNK",
    "integrationRef": {
      "ref": "/platform/integrations/splunk_hec"
    },
    "streams": [
      {
        "inputDataType": "METRICS",
        "outputFormat": "SPLUNK",
        "selector": "names=http.request.bytes_rcvd&filter=app='myapp'"
      },
      {
        "inputDataType": "METRICS",
        "outputFormat": "SPLUNK",
        "selector": "names=http.request.count&filter=app='myapp'"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|[ResourceMeta](#schemaresourcemeta)|true|none|none|
|desiredState|[DesiredState](#schemadesiredstate)|true|none|none|
|currentStatus|[CurrentStatus](#schemacurrentstatus)|false|none|none|

<h2 id="tocS_CurrentStatus">CurrentStatus</h2>
<!-- backwards compatibility -->
<a id="schemacurrentstatus"></a>
<a id="schema_CurrentStatus"></a>
<a id="tocScurrentstatus"></a>
<a id="tocscurrentstatus"></a>

```json
{
  "state": {
    "selfConfigState": {
      "isConfigured": true,
      "isConfiguring": true,
      "isError": true,
      "isDeleting": true,
      "total": 0,
      "configured": 0,
      "configuring": 0,
      "error": 0,
      "deleting": 0
    },
    "childrenConfigState": {
      "isConfigured": true,
      "isConfiguring": true,
      "isError": true,
      "isDeleting": true,
      "total": 0,
      "configured": 0,
      "configuring": 0,
      "error": 0,
      "deleting": 0
    },
    "conditions": [
      {
        "type": "string",
        "message": "string"
      }
    ]
  },
  "integrationRef": {
    "ref": "/services/environments/prod",
    "links": {
      "rel": "/api/v1/services/environments/prod",
      "name": "production",
      "displayName": "Production Environment"
    }
  },
  "collectorType": "DATADOG",
  "streams": [
    {
      "outputFormat": "SPLUNK",
      "inputDataType": "METRICS",
      "selector": "names=http.request.count,http.request.*,*latency*&filter=((app!='app1' OR app='app2') AND environment in ('aa', 'bb')) AND (tags!='*tag1*' AND interface='ens*')"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|[ConfigState](#schemaconfigstate)|true|none|A representation of the resource's current configuration state <br>that comprises the status of the resource itself (`selfConfigState`) and any child <br>resources (`childrenConfigState`).<br><br>The conditions array provides additional information during configuration changes.<br>|
|integrationRef|[ResourceRef](#schemaresourceref)|true|none|none|
|collectorType|string|true|none|The type of Collector receiving forwarded data. The parameter sets the communication protocol<br>and how the Forwarder monitors the liveness of the Collector.<br>|
|streams|[[ForwarderStream](#schemaforwarderstream)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|collectorType|DATADOG|
|collectorType|SPLUNK|
|collectorType|SYSLOG|
|collectorType|OTLP_HTTP|
|collectorType|OTLP_GRPC|

<h2 id="tocS_DesiredState">DesiredState</h2>
<!-- backwards compatibility -->
<a id="schemadesiredstate"></a>
<a id="schema_DesiredState"></a>
<a id="tocSdesiredstate"></a>
<a id="tocsdesiredstate"></a>

```json
{
  "integrationRef": {
    "ref": "/services/environments/prod",
    "links": {
      "rel": "/api/v1/services/environments/prod",
      "name": "production",
      "displayName": "Production Environment"
    }
  },
  "collectorType": "DATADOG",
  "streams": [
    {
      "outputFormat": "SPLUNK",
      "inputDataType": "METRICS",
      "selector": "names=http.request.count,http.request.*,*latency*&filter=((app!='app1' OR app='app2') AND environment in ('aa', 'bb')) AND (tags!='*tag1*' AND interface='ens*')"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|integrationRef|[ResourceRef](#schemaresourceref)|true|none|none|
|collectorType|string|true|none|The type of Collector receiving forwarded data. The parameter sets the communication protocol<br>and how the Forwarder monitors the liveness of the Collector.<br>|
|streams|[[ForwarderStream](#schemaforwarderstream)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|collectorType|DATADOG|
|collectorType|SPLUNK|
|collectorType|SYSLOG|

<h2 id="tocS_ForwarderStream">ForwarderStream</h2>
<!-- backwards compatibility -->
<a id="schemaforwarderstream"></a>
<a id="schema_ForwarderStream"></a>
<a id="tocSforwarderstream"></a>
<a id="tocsforwarderstream"></a>

```json
{
  "outputFormat": "SPLUNK",
  "inputDataType": "METRICS",
  "selector": "names=http.request.count,http.request.*,*latency*&filter=((app!='app1' OR app='app2') AND environment in ('aa', 'bb')) AND (tags!='*tag1*' AND interface='ens*')"
}
```

There is no global limitation on number of streams.

When creating a Stream, be sure that the metrics you select are not already included in an existing Stream.
When you add the same metrics to multiple Streams -- which is known as "overlapping Streams" -- you may see significant performance degradation and data duplication. The duplicated data may not be interpreted correctly by the Collector.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outputFormat|string|true|none|The format in which you want to send data to the Collector.<br>|
|inputDataType|string|true|none|The type of data that the stream is processing.|
|selector|string|true|none|The selector object limits the amount of data sent from NGINX Controller to the desired Collector.<br>The format of this parameter depends on the `inputDataType` value (either `METRICS` or `EVENTS`).<br>An empty selector indicates that all collected data is going to be forwarded to the Collector.<br>Ensure sending all your data out of NGINX Controller does not cause additional charges.<br><br><br>Selector elements and rules for `inputDataType`=`METRICS`:<br>Allowed parameters: `excluded_names`, `names`, `filter`. The `filter` parameter and its behavior is not specific to `METRICS` `inputDataType`.<br><br>`excluded_names` parameter consists of zero or more metric names that should not be forwarded<br>`names` parameter consists of zero or more metric names that should be forwarded<br>The specific rules for these parameters are as follows:<br>- if no value is provided or the only value is a wildcard (`*`), then all metric names will be forwarded.<br>- if an explicit list of metric names is provided, all of these metrics will be forwarded.<br>- any metric name can contain wildcard (`*`) character(s), in which case it will be resolved to all valid metrics that match the pattern.<br>- `excluded_names` can be composed of metrics names and a wildcard (`*`) which should not be forwarded<br>- any metric resolved from a `names` wildcard can be removed by an explicit or wildcard metric from `excluded_names`<br>- any metric provided explicitly (full name without a wildcard) in the `names` parameter cannot be excluded by<br>  a wildcard or an explicit metric from the `excluded_names` parameter. That is, `names=system.cpu.idle&excluded_names=system.*`<br>  results in an error<br>- `excluded_names` parameter is always applied after the resolution of the metrics from `names` parameter<br><br>Make sure that all metrics provided in the `names` and `excluded_names` parameters resolve to an existing catalog metric or metrics.<br><br>Sample use:<br>- `names=http.request.count, http.request.bytes_sent` indicates that only samples of those two metrics will be forwarded<br>- `filter=app='myapp' & (env='prod' or env='dev')` indicates that only samples related to desired app/env will be forwarded,<br>also objects that does not contain filtered dimensions won't be sent<br>- `names=http.request.count, http.request.bytes_sent&filter=app='myapp' AND (env='prod' or env='dev')` combines both above<br>- `excluded_names=nginx.http.request.*` all metrics except matching `http.request.*` will be forwarded<br>- `excluded_names=nginx.http.request.time.*&names=nginx.http.request.*` `excluded_names` can be combined<br>  with the `names` parameter to exclude metrics that were selected with a wildcard in the `names` parameters<br><br><br>Filtering rules for `inputDataType`=`EVENTS`:<br>Allowed parameters: `filter`. The `filter` parameter and its behavior is not specific to `EVENTS` `inputDataType`.<br><br><br>Filter parameter:<br>Filter parameter is shared between all supported data types and has the same behavior when used with any of them.<br>It consists of one or more predicates in the form  `<dimension><operator><dimension value>` where:<br>- `<dimension>` is the name of the dimension,<br>- `<operator>` is one of the supported operators (`=`, `!=`, `<`, `<=`, `>=` `>`, `in` or `not`),<br>- `<dimension value>` is value of the dimension(s) that you want to filter on,<br>- `<dimension> and <dimension value>` is case sensitive.<br><br>For example: 'count > 100'.<br>Predicates can be combined into logical expressions using `OR`, `AND`, and `(` `)`.<br>Wrapping predicates in single quotes is recommended to ensure that the full query string is processed correctly.<br><br>For matching values, wildcard (`*`) use is supported.<br><br>Make sure that all dimensions provided in the `filter` parameters resolve to an existing catalog dimension.<br><br>Any expression with dimension not present in filtered metric/event will evaluate to `false`. This enables user<br>to create filter which will forward metric/event with dimension not valid for particular metric/event but as whole filter expression<br>will evaluate to true and only parts will evaluate to false. Example:<br>- `filter=file_path='/etc/hosts' OR instance='instance_name'` will forward `http.request.body_bytes_sent` as `file_path` dimension is invalid but whole expression will evaluate to true<br>- `filter=file_path='/etc/hosts' AND instance='instance_name'` will not forward `http.request.body_bytes_sent` as `file_path` dimension is invalid and whole expression will always evaluate to false, but will forward `sytem.disk.used` which has both dimensions<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|outputFormat|SPLUNK|
|outputFormat|DATADOG|
|outputFormat|SYSLOG|
|outputFormat|OTLP|
|inputDataType|METRICS|
|inputDataType|EVENTS|

<h2 id="tocS_ForwarderListResponse">ForwarderListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaforwarderlistresponse"></a>
<a id="schema_ForwarderListResponse"></a>
<a id="tocSforwarderlistresponse"></a>
<a id="tocsforwarderlistresponse"></a>

```json
{
  "items": [
    {
      "metadata": {
        "name": "splunk",
        "displayName": "Splunk - Metrics",
        "description": "Metrics forwarder going to Splunk HEC",
        "kind": "forwarder",
        "uid": "d290f1ee-6c54-4b01-90e6-d701748f0851",
        "links": {
          "rel": "/api/v1/analytics/forwarders/splunk"
        },
        "createTime": "2019-07-29T09:12:33.001Z",
        "updateTime": "2019-07-29T10:12:33.001Z"
      },
      "desiredState": {
        "collectorType": "SPLUNK",
        "integrationRef": {
          "ref": "/platform/integrations/splunk_hec"
        },
        "streams": [
          {
            "inputDataType": "METRICS",
            "outputFormat": "SPLUNK",
            "selector": "names=http.request.bytes_rcvd"
          },
          {
            "inputDataType": "METRICS",
            "outputFormat": "SPLUNK",
            "selector": "names=http.request.count"
          }
        ]
      },
      "currentStatus": {
        "state": {
          "selfConfigState": {
            "isConfigured": true,
            "isConfiguring": false,
            "isError": false,
            "isDeleting": false,
            "total": 1,
            "configured": 1,
            "configuring": 0,
            "error": 0,
            "deleting": 0
          },
          "conditions": [
            {
              "type": "error",
              "message": "integration reference not found"
            }
          ]
        },
        "collectorType": "SPLUNK",
        "integrationRef": {
          "ref": "/platform/integrations/splunk_hec"
        },
        "streams": [
          {
            "inputDataType": "METRICS",
            "outputFormat": "SPLUNK",
            "selector": "names=http.request.bytes_rcvd&filter=app='myapp'"
          },
          {
            "inputDataType": "METRICS",
            "outputFormat": "SPLUNK",
            "selector": "names=http.request.count&filter=app='myapp'"
          }
        ]
      }
    },
    {
      "metadata": {
        "name": "splunk",
        "displayName": "Splunk - Metrics",
        "description": "Metrics forwarder going to Splunk HEC",
        "kind": "forwarder",
        "uid": "d290f1ee-6c54-4b01-90e6-d701748f0851",
        "links": {
          "rel": "/api/v1/analytics/forwarders/splunk"
        },
        "createTime": "2019-07-29T09:12:33.001Z",
        "updateTime": "2019-07-29T10:12:33.001Z"
      },
      "desiredState": {
        "collectorType": "SPLUNK",
        "integrationRef": {
          "ref": "/platform/integrations/splunk_hec"
        },
        "streams": [
          {
            "inputDataType": "METRICS",
            "outputFormat": "SPLUNK",
            "selector": "names=http.request.bytes_rcvd&filter=app='myapp'"
          },
          {
            "inputDataType": "METRICS",
            "outputFormat": "SPLUNK",
            "selector": "names=http.request.count&filter=app='myapp'"
          }
        ]
      },
      "currentStatus": {
        "state": {
          "selfConfigState": {
            "isConfigured": true,
            "isConfiguring": false,
            "isError": false,
            "isDeleting": false,
            "total": 0,
            "configured": 1,
            "configuring": 0,
            "error": 0,
            "deleting": 0
          },
          "conditions": [
            {
              "type": "error",
              "message": "integration reference not found"
            }
          ]
        },
        "collectorType": "SPLUNK",
        "integrationRef": {
          "ref": "/platform/integrations/splunk_hec"
        },
        "streams": [
          {
            "inputDataType": "METRICS",
            "outputFormat": "SPLUNK",
            "selector": "names=http.request.bytes_rcvd&filter=app='myapp'"
          },
          {
            "inputDataType": "METRICS",
            "outputFormat": "SPLUNK",
            "selector": "names=http.request.count&filter=app='myapp'"
          }
        ]
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Forwarder](#schemaforwarder)]|false|none|List of Forwarder resources.|

<h2 id="tocS_ConfigStateTally">ConfigStateTally</h2>
<!-- backwards compatibility -->
<a id="schemaconfigstatetally"></a>
<a id="schema_ConfigStateTally"></a>
<a id="tocSconfigstatetally"></a>
<a id="tocsconfigstatetally"></a>

```json
{
  "isConfigured": true,
  "isConfiguring": true,
  "isError": true,
  "isDeleting": true,
  "total": 0,
  "configured": 0,
  "configuring": 0,
  "error": 0,
  "deleting": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isConfigured|boolean|false|none|The configuration operation is complete.|
|isConfiguring|boolean|false|none|The configuration of the resource, or of its child(ren), is in process.|
|isError|boolean|false|none|An error occurred while configuring the resource or its child(ren).|
|isDeleting|boolean|false|none|A delete operation is in progress for the resource or its child(ren).|
|total|integer|false|none|The total number of resources to which the configuration operation applies.|
|configured|integer|false|none|The number of resources that have a complete and valid configuration.|
|configuring|integer|false|none|The number of resources that are in the process of being configured.|
|error|integer|false|none|The number of resources that have encountered an error during the configuration process.|
|deleting|integer|false|none|The number of resources that are in the process of being deleted.|

<h2 id="tocS_ConfigCondition">ConfigCondition</h2>
<!-- backwards compatibility -->
<a id="schemaconfigcondition"></a>
<a id="schema_ConfigCondition"></a>
<a id="tocSconfigcondition"></a>
<a id="tocsconfigcondition"></a>

```json
{
  "type": "string",
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|The condition type.|
|message|string|false|none|A human-readable message that provides additional information about the configuration operation.|

<h2 id="tocS_ConfigState">ConfigState</h2>
<!-- backwards compatibility -->
<a id="schemaconfigstate"></a>
<a id="schema_ConfigState"></a>
<a id="tocSconfigstate"></a>
<a id="tocsconfigstate"></a>

```json
{
  "selfConfigState": {
    "isConfigured": true,
    "isConfiguring": true,
    "isError": true,
    "isDeleting": true,
    "total": 0,
    "configured": 0,
    "configuring": 0,
    "error": 0,
    "deleting": 0
  },
  "childrenConfigState": {
    "isConfigured": true,
    "isConfiguring": true,
    "isError": true,
    "isDeleting": true,
    "total": 0,
    "configured": 0,
    "configuring": 0,
    "error": 0,
    "deleting": 0
  },
  "conditions": [
    {
      "type": "string",
      "message": "string"
    }
  ]
}
```

A representation of the resource's current configuration state 
that comprises the status of the resource itself (`selfConfigState`) and any child 
resources (`childrenConfigState`).

The conditions array provides additional information during configuration changes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|selfConfigState|[ConfigStateTally](#schemaconfigstatetally)|false|none|none|
|childrenConfigState|[ConfigStateTally](#schemaconfigstatetally)|false|none|none|
|conditions|[[ConfigCondition](#schemaconfigcondition)]|false|none|none|
