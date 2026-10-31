<h1 id="openfaas-api-gateway">OpenFaaS API Gateway v0.8.12</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

OpenFaaS API documentation

Base URLs:

* <a href="http://localhost:8080">http://localhost:8080</a> - Local server

Web: <a href="https://www.openfaas.com/support/">OpenFaaS Ltd</a> 
License: MIT

# Authentication

- HTTP Authentication, scheme: basic

<h1 id="openfaas-api-gateway-internal">internal</h1>

Internal use only

## Healthcheck

<a id="opIdhealthcheck"></a>

> Code samples

```bash
curl http://localhost:8080/healthz
```

`GET /healthz`

Healthcheck for the gateway, indicates if the gateway is running and available

<h3 id="healthcheck-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Healthy|None|
|500|Internal Server Error|Not healthy|None|

<aside class="success">
This operation does not require authentication
</aside>

## Prometheus metrics

<a id="opIdmetrics"></a>

> Code samples

```bash
curl http://localhost:8080/metrics
```

`GET /metrics`

Prometheus metrics for the gateway

<h3 id="prometheus-metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Prometheus metrics in text format|None|

<aside class="success">
This operation does not require authentication
</aside>

## Event-sink for AlertManager, for auto-scaling Internal use for AlertManager, requires valid AlertManager alert JSON

<a id="opIdScaleAlert"></a>

> Code samples

```bash
curl http://localhost:8080/system/alert \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "receiver": "scale-up",
    "status": "firing",
    "alerts": [
      {
        "status": "firing",
        "labels": {
          "alertname": "APIHighInvocationRate",
          "code": "200",
          "function_name": "func_nodeinfo",
          "instance": "gateway:8080",
          "job": "gateway",
          "monitor": "faas-monitor",
          "service": "gateway",
          "severity": "major",
          "value": "8.998200359928017"
        },
        "annotations": {
          "description": "High invocation total on gateway:8080",
          "summary": "High invocation total on gateway:8080"
        },
        "startsAt": "2017-03-15T15:52:57.805Z",
        "endsAt": "0001-01-01T00:00:00Z",
        "generatorURL": "http://4156cb797423:9090/graph?g0.expr=rate%28gateway_function_invocation_total%5B10s%5D%29+%3E+5&g0.tab=0"
      }
    ],
    "groupLabels": {
      "alertname": "APIHighInvocationRate",
      "service": "gateway"
    },
    "commonLabels": {
      "alertname": "APIHighInvocationRate",
      "code": "200",
      "function_name": "func_nodeinfo",
      "instance": "gateway:8080",
      "job": "gateway",
      "monitor": "faas-monitor",
      "service": "gateway",
      "severity": "major",
      "value": "8.998200359928017"
    },
    "commonAnnotations": {
      "description": "High invocation total on gateway:8080",
      "summary": "High invocation total on gateway:8080"
    },
    "externalURL": "http://f054879d97db:9093",
    "version": "3",
    "groupKey": 18195285354214865000
  }'
```

`POST /system/alert`

Scale a function based on an alert

> Body parameter

```json
{
  "receiver": "scale-up",
  "status": "firing",
  "alerts": [
    {
      "status": "firing",
      "labels": {
        "alertname": "APIHighInvocationRate",
        "code": "200",
        "function_name": "func_nodeinfo",
        "instance": "gateway:8080",
        "job": "gateway",
        "monitor": "faas-monitor",
        "service": "gateway",
        "severity": "major",
        "value": "8.998200359928017"
      },
      "annotations": {
        "description": "High invocation total on gateway:8080",
        "summary": "High invocation total on gateway:8080"
      },
      "startsAt": "2017-03-15T15:52:57.805Z",
      "endsAt": "0001-01-01T00:00:00Z",
      "generatorURL": "http://4156cb797423:9090/graph?g0.expr=rate%28gateway_function_invocation_total%5B10s%5D%29+%3E+5&g0.tab=0"
    }
  ],
  "groupLabels": {
    "alertname": "APIHighInvocationRate",
    "service": "gateway"
  },
  "commonLabels": {
    "alertname": "APIHighInvocationRate",
    "code": "200",
    "function_name": "func_nodeinfo",
    "instance": "gateway:8080",
    "job": "gateway",
    "monitor": "faas-monitor",
    "service": "gateway",
    "severity": "major",
    "value": "8.998200359928017"
  },
  "commonAnnotations": {
    "description": "High invocation total on gateway:8080",
    "summary": "High invocation total on gateway:8080"
  },
  "externalURL": "http://f054879d97db:9093",
  "version": "3",
  "groupKey": 18195285354214865000
}
```

<h3 id="event-sink-for-alertmanager-for-auto-scaling-internal-use-for-alertmanager-requires-valid-alertmanager-alert-json-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PrometheusAlert](#schemaprometheusalert)|false|Incoming alert|
|» status|body|string|true|The status of the alert|
|» receiver|body|string|true|The name of the receiver|
|» alerts|body|[[PrometheusInnerAlert](#schemaprometheusinneralert)]|true|The list of alerts|

<h3 id="event-sink-for-alertmanager-for-auto-scaling-internal-use-for-alertmanager-requires-valid-alertmanager-alert-json-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Alert handled successfully|None|
|500|Internal Server Error|Internal error with swarm or request JSON invalid|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="openfaas-api-gateway-system">system</h1>

System endpoints for managing functions and related objects

## Get info such as provider version number and provider orchestrator

<a id="opIdGetSystemInfo"></a>

> Code samples

```bash
curl http://localhost:8080/system/info \
  -H 'Accept: application/json'
```

`GET /system/info`

Get system provider information

> Example responses

> 200 Response

```json
{
  "provider": {
    "provider": "faas-netes",
    "orchestration": "kubernetes",
    "version": {
      "commit_message": "Sample Message",
      "sha": "7108418d9dd6b329ddff40e7393b3166f8160a88",
      "release": "0.8.9"
    }
  },
  "version": {
    "commit_message": "Sample Message",
    "sha": "7108418d9dd6b329ddff40e7393b3166f8160a88",
    "release": "0.8.9"
  },
  "arch": "x86_64"
}
```

<h3 id="get-info-such-as-provider-version-number-and-provider-orchestrator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Info result|[GatewayInfo](#schemagatewayinfo)|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get a list of deployed functions with: stats and image digest

<a id="opIdGetFunctions"></a>

> Code samples

```bash
curl http://localhost:8080/system/functions \
  -H 'Accept: application/json'
```

`GET /system/functions`

Get a list of deployed functions

> Example responses

> 200 Response

```json
[
  {
    "name": "nodeinfo",
    "image": "functions/nodeinfo:latest",
    "namespace": "openfaas-fn",
    "envProcess": "node main.js",
    "envVars": {
      "property1": "string",
      "property2": "string"
    },
    "constraints": [
      "node.platform.os == linux"
    ],
    "secrets": [
      "string"
    ],
    "labels": {
      "foo": "bar"
    },
    "annotations": {
      "topics": "awesome-kafka-topic",
      "foo": "bar"
    },
    "limits": {
      "memory": "128M",
      "cpu": "0.01"
    },
    "requests": {
      "memory": "128M",
      "cpu": "0.01"
    },
    "readOnlyRootFilesystem": true,
    "invocationCount": 1337,
    "replicas": 2,
    "availableReplicas": 2,
    "createdAt": "1970-01-01T00:00:00Z",
    "usage": {
      "cpu": 0.01,
      "totalMemoryBytes": 1337
    }
  }
]
```

<h3 id="get-a-list-of-deployed-functions-with-stats-and-image-digest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of deployed functions.|Inline|

<h3 id="get-a-list-of-deployed-functions-with-stats-and-image-digest-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[FunctionStatus](#schemafunctionstatus)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Update a function.

<a id="opIdUpdateFunction"></a>

> Code samples

```bash
curl http://localhost:8080/system/functions \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "service": "nodeinfo",
    "image": "functions/nodeinfo:latest",
    "namespace": "openfaas-fn",
    "envProcess": "node main.js",
    "constraints": [
      "node.platform.os == linux"
    ],
    "envVars": {
      "property1": "string",
      "property2": "string"
    },
    "secrets": [
      "secret-name-1"
    ],
    "labels": {
      "foo": "bar"
    },
    "annotations": {
      "topics": "awesome-kafka-topic",
      "foo": "bar"
    },
    "limits": {
      "memory": "128M",
      "cpu": "0.01"
    },
    "requests": {
      "memory": "128M",
      "cpu": "0.01"
    },
    "readOnlyRootFilesystem": true,
    "registryAuth": "dXNlcjpwYXNzd29yZA==",
    "network": "func_functions"
  }'
```

`PUT /system/functions`

update a function spec

> Body parameter

```json
{
  "service": "nodeinfo",
  "image": "functions/nodeinfo:latest",
  "namespace": "openfaas-fn",
  "envProcess": "node main.js",
  "constraints": [
    "node.platform.os == linux"
  ],
  "envVars": {
    "property1": "string",
    "property2": "string"
  },
  "secrets": [
    "secret-name-1"
  ],
  "labels": {
    "foo": "bar"
  },
  "annotations": {
    "topics": "awesome-kafka-topic",
    "foo": "bar"
  },
  "limits": {
    "memory": "128M",
    "cpu": "0.01"
  },
  "requests": {
    "memory": "128M",
    "cpu": "0.01"
  },
  "readOnlyRootFilesystem": true,
  "registryAuth": "dXNlcjpwYXNzd29yZA==",
  "network": "func_functions"
}
```

<h3 id="update-a-function-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FunctionDeployment](#schemafunctiondeployment)|true|Function to update|
|» service|body|string|true|Name of deployed function|
|» image|body|string|true|Docker image in accessible registry|
|» namespace|body|string|false|Namespace to deploy function to. When omitted, the default namespace is used, typically this is `openfaas-fn` but is configured by the provider.|
|» envProcess|body|string|false|Process for watchdog to fork, i.e. the command to start the function process.<br><br>This value configures the `fprocess` env variable.<br>|
|» constraints|body|[string]|false|none|
|» envVars|body|object|false|Overrides to environmental variables|
|» » **additionalProperties**|body|string|false|none|
|» secrets|body|[string]|false|none|
|» labels|body|object \| null|false|A map of labels for making scheduling or routing decisions|
|» » **additionalProperties**|body|string|false|none|
|» annotations|body|object \| null|false|A map of annotations for management, orchestration, events and build tasks|
|» » **additionalProperties**|body|string|false|none|
|» limits|body|object \| null|false|none|
|» » memory|body|string|false|The amount of memory that is allocated for the function|
|» » cpu|body|string|false|The amount of cpu that is allocated for the function|
|» requests|body|object \| null|false|none|
|» » memory|body|string|false|The amount of memory that is allocated for the function|
|» » cpu|body|string|false|The amount of cpu that is allocated for the function|
|» readOnlyRootFilesystem|body|boolean|false|Make the root filesystem of the function read-only|
|» registryAuth|body|string|false|**Deprecated.** Deprecated: Private registry base64-encoded basic auth (as present in ~/.docker/config.json)<br><br>Use a Kubernetes Secret with registry-auth secret type to provide this value instead.<br><br>This value is completely ignored.<br>|
|» network|body|string|false|**Deprecated.** Deprecated: Network, usually func_functions for Swarm.<br><br>This value is completely ignored.<br>|

<h3 id="update-a-function-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Accepted|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Deploy a new function.

<a id="opIdDeployFunction"></a>

> Code samples

```bash
curl http://localhost:8080/system/functions \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "service": "nodeinfo",
    "image": "functions/nodeinfo:latest",
    "namespace": "openfaas-fn",
    "envProcess": "node main.js",
    "constraints": [
      "node.platform.os == linux"
    ],
    "envVars": {
      "property1": "string",
      "property2": "string"
    },
    "secrets": [
      "secret-name-1"
    ],
    "labels": {
      "foo": "bar"
    },
    "annotations": {
      "topics": "awesome-kafka-topic",
      "foo": "bar"
    },
    "limits": {
      "memory": "128M",
      "cpu": "0.01"
    },
    "requests": {
      "memory": "128M",
      "cpu": "0.01"
    },
    "readOnlyRootFilesystem": true,
    "registryAuth": "dXNlcjpwYXNzd29yZA==",
    "network": "func_functions"
  }'
```

`POST /system/functions`

Deploy a new function.

> Body parameter

```json
{
  "service": "nodeinfo",
  "image": "functions/nodeinfo:latest",
  "namespace": "openfaas-fn",
  "envProcess": "node main.js",
  "constraints": [
    "node.platform.os == linux"
  ],
  "envVars": {
    "property1": "string",
    "property2": "string"
  },
  "secrets": [
    "secret-name-1"
  ],
  "labels": {
    "foo": "bar"
  },
  "annotations": {
    "topics": "awesome-kafka-topic",
    "foo": "bar"
  },
  "limits": {
    "memory": "128M",
    "cpu": "0.01"
  },
  "requests": {
    "memory": "128M",
    "cpu": "0.01"
  },
  "readOnlyRootFilesystem": true,
  "registryAuth": "dXNlcjpwYXNzd29yZA==",
  "network": "func_functions"
}
```

<h3 id="deploy-a-new-function-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FunctionDeployment](#schemafunctiondeployment)|true|Function to deploy|
|» service|body|string|true|Name of deployed function|
|» image|body|string|true|Docker image in accessible registry|
|» namespace|body|string|false|Namespace to deploy function to. When omitted, the default namespace is used, typically this is `openfaas-fn` but is configured by the provider.|
|» envProcess|body|string|false|Process for watchdog to fork, i.e. the command to start the function process.<br><br>This value configures the `fprocess` env variable.<br>|
|» constraints|body|[string]|false|none|
|» envVars|body|object|false|Overrides to environmental variables|
|» » **additionalProperties**|body|string|false|none|
|» secrets|body|[string]|false|none|
|» labels|body|object \| null|false|A map of labels for making scheduling or routing decisions|
|» » **additionalProperties**|body|string|false|none|
|» annotations|body|object \| null|false|A map of annotations for management, orchestration, events and build tasks|
|» » **additionalProperties**|body|string|false|none|
|» limits|body|object \| null|false|none|
|» » memory|body|string|false|The amount of memory that is allocated for the function|
|» » cpu|body|string|false|The amount of cpu that is allocated for the function|
|» requests|body|object \| null|false|none|
|» » memory|body|string|false|The amount of memory that is allocated for the function|
|» » cpu|body|string|false|The amount of cpu that is allocated for the function|
|» readOnlyRootFilesystem|body|boolean|false|Make the root filesystem of the function read-only|
|» registryAuth|body|string|false|**Deprecated.** Deprecated: Private registry base64-encoded basic auth (as present in ~/.docker/config.json)<br><br>Use a Kubernetes Secret with registry-auth secret type to provide this value instead.<br><br>This value is completely ignored.<br>|
|» network|body|string|false|**Deprecated.** Deprecated: Network, usually func_functions for Swarm.<br><br>This value is completely ignored.<br>|

<h3 id="deploy-a-new-function-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Remove a deployed function.

<a id="opIdDeleteFunction"></a>

> Code samples

```bash
curl http://localhost:8080/system/functions \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -d '{
    "functionName": "nodeinfo"
  }'
```

`DELETE /system/functions`

Remove a deployed function.

> Body parameter

```json
{
  "functionName": "nodeinfo"
}
```

<h3 id="remove-a-deployed-function-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DeleteFunctionRequest](#schemadeletefunctionrequest)|true|Function to delete|
|» functionName|body|string|true|Name of deployed function|

<h3 id="remove-a-deployed-function-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Scale a function to a specific replica count

<a id="opIdScaleFunction"></a>

> Code samples

```bash
curl http://localhost:8080/system/scale-function/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "serviceName": "nodeinfo",
    "namespace": "openfaas-fn",
    "replicas": 2
  }'
```

`POST /system/scale-function/{functionName}`

Scale a function

> Body parameter

```json
{
  "serviceName": "nodeinfo",
  "namespace": "openfaas-fn",
  "replicas": 2
}
```

<h3 id="scale-a-function-to-a-specific-replica-count-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|functionName|path|string|true|Function name|
|body|body|[ScaleServiceRequest](#schemascaleservicerequest)|false|none|
|» serviceName|body|string|true|Name of deployed function|
|» namespace|body|string|true|Namespace the function is deployed to.|
|» replicas|body|integer(int64)|true|Number of replicas to scale to|

<h3 id="scale-a-function-to-a-specific-replica-count-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Scaling OK|None|
|202|Accepted|Scaling OK|None|
|404|Not Found|Function not found|None|
|500|Internal Server Error|Error scaling function|None|

<aside class="success">
This operation does not require authentication
</aside>

## GetFunctionStatus

<a id="opIdGetFunctionStatus"></a>

> Code samples

```bash
curl http://localhost:8080/system/function/string
```

`GET /system/function/{functionName}`

Get the status of a function by name

<h3 id="getfunctionstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|functionName|path|string|true|Function name|
|namespace|query|string|false|Namespace of the function|

<h3 id="getfunctionstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Function Summary|[FunctionStatus](#schemafunctionstatus)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get a list of secret names and metadata from the provider

<a id="opIdListSecrets"></a>

> Code samples

```bash
curl http://localhost:8080/system/secrets \
  -H 'Accept: application/json'
```

`GET /system/secrets`

Get a list of secret names and metadata from the provider

> Example responses

> 200 Response

```json
{
  "name": "aws-key",
  "namespace": "openfaas-fn"
}
```

<h3 id="get-a-list-of-secret-names-and-metadata-from-the-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of submitted secrets.|[SecretDescription](#schemasecretdescription)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a secret, the value is replaced.

<a id="opIdUpdateSecret"></a>

> Code samples

```bash
curl http://localhost:8080/system/secrets \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "aws-key",
    "namespace": "openfaas-fn",
    "value": "changeme",
    "rawValue": "Y2hhbmdlbWU="
  }'
```

`PUT /system/secrets`

Update a secret.

> Body parameter

```json
{
  "name": "aws-key",
  "namespace": "openfaas-fn",
  "value": "changeme",
  "rawValue": "Y2hhbmdlbWU="
}
```

<h3 id="update-a-secret-the-value-is-replaced-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Secret](#schemasecret)|true|Secret to update|
|» name|body|string|true|Name of secret|
|» namespace|body|string|false|Namespace of secret|
|» value|body|string|false|Value of secret in plain-text|
|» rawValue|body|string(byte)|false|Value of secret in base64.<br><br>This can be used to provide raw binary data when the `value` field is omitted.<br>|

<h3 id="update-a-secret-the-value-is-replaced-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed. Secret update is not allowed in faas-swarm.|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## CreateSecret

<a id="opIdCreateSecret"></a>

> Code samples

```bash
curl http://localhost:8080/system/secrets \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "aws-key",
    "namespace": "openfaas-fn",
    "value": "changeme",
    "rawValue": "Y2hhbmdlbWU="
  }'
```

`POST /system/secrets`

Create a new secret.

> Body parameter

```json
{
  "name": "aws-key",
  "namespace": "openfaas-fn",
  "value": "changeme",
  "rawValue": "Y2hhbmdlbWU="
}
```

<h3 id="createsecret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Secret](#schemasecret)|true|A new secret to create|
|» name|body|string|true|Name of secret|
|» namespace|body|string|false|Namespace of secret|
|» value|body|string|false|Value of secret in plain-text|
|» rawValue|body|string(byte)|false|Value of secret in base64.<br><br>This can be used to provide raw binary data when the `value` field is omitted.<br>|

<h3 id="createsecret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## DeleteSecret

<a id="opIdDeleteSecret"></a>

> Code samples

```bash
curl http://localhost:8080/system/secrets \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "aws-key",
    "namespace": "openfaas-fn"
  }'
```

`DELETE /system/secrets`

Remove a secret.

> Body parameter

```json
{
  "name": "aws-key",
  "namespace": "openfaas-fn"
}
```

<h3 id="deletesecret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SecretDescription](#schemasecretdescription)|true|Secret to delete|
|» name|body|string|true|Name of secret|
|» namespace|body|string|false|Namespace of secret|

<h3 id="deletesecret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## GetFunctionLogs

<a id="opIdGetFunctionLogs"></a>

> Code samples

```bash
curl 'http://localhost:8080/system/logs?name=string'
```

`GET /system/logs`

Get a stream of the logs for a specific function

<h3 id="getfunctionlogs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|Function name|
|namespace|query|string|false|Namespace of the function|
|instance|query|string|false|Instance of the function|
|tail|query|integer|false|Sets the maximum number of log messages to return, <=0 means unlimited|
|follow|query|boolean|false|When true, the request will stream logs until the request timeout|
|since|query|string(date-time)|false|Only return logs after a specific date (RFC3339)|

<h3 id="getfunctionlogs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Newline delimited stream of log messages|[LogEntry](#schemalogentry)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## ListNamespaces

<a id="opIdListNamespaces"></a>

> Code samples

```bash
curl http://localhost:8080/system/namespaces \
  -H 'Accept: application/json'
```

`GET /system/namespaces`

Get a list of namespaces

> Example responses

> 200 Response

```json
[
  "openfaas-fn"
]
```

<h3 id="listnamespaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of namespaces|[ListNamespaceResponse](#schemalistnamespaceresponse)|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="openfaas-api-gateway-function">function</h1>

Endpoints for invoking functions

## Invoke a function asynchronously in the default OpenFaaS namespace Any additional path segments and query parameters will be passed to the function as is. See https://docs.openfaas.com/reference/async/.

<a id="opIdInvokeAsync"></a>

> Code samples

```bash
curl http://localhost:8080/async-function/string \
  -X POST \
  -H 'Content-Type: */*' \
  --data-binary '@/path/to/file'
```

`POST /async-function/{functionName}`

Invoke a function asynchronously

<h3 id="invoke-a-function-asynchronously-in-the-default-openfaas-namespace-any-additional-path-segments-and-query-parameters-will-be-passed-to-the-function-as-is-see-httpsdocsopenfaascomreferenceasync-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|functionName|path|string|true|Function name|
|body|body|string(binary)|false|(Optional) data to pass to function|

<h3 id="invoke-a-function-asynchronously-in-the-default-openfaas-namespace-any-additional-path-segments-and-query-parameters-will-be-passed-to-the-function-as-is-see-httpsdocsopenfaascomreferenceasync-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Request accepted and queued|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Invoke a function asynchronously in an OpenFaaS namespace. Any additional path segments and query parameters will be passed to the function as is. See https://docs.openfaas.com/reference/async/.

<a id="opIdInvokeAsyncNamespaced"></a>

> Code samples

```bash
curl http://localhost:8080/async-function/string.string \
  -X POST \
  -H 'Content-Type: */*' \
  --data-binary '@/path/to/file'
```

`POST /async-function/{functionName}.{namespace}`

Invoke a function asynchronously in an OpenFaaS namespace.

<h3 id="invoke-a-function-asynchronously-in-an-openfaas-namespace-any-additional-path-segments-and-query-parameters-will-be-passed-to-the-function-as-is-see-httpsdocsopenfaascomreferenceasync-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|functionName|path|string|true|Function name|
|namespace|path|string|true|Namespace of the function|
|body|body|string(binary)|false|(Optional) data to pass to function|

<h3 id="invoke-a-function-asynchronously-in-an-openfaas-namespace-any-additional-path-segments-and-query-parameters-will-be-passed-to-the-function-as-is-see-httpsdocsopenfaascomreferenceasync-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Request accepted and queued|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Synchronously invoke a function defined in te default OpenFaaS namespace. Any additional path segments and query parameters will be passed to the function as is.

<a id="opIdInvokeFunction"></a>

> Code samples

```bash
curl http://localhost:8080/function/string \
  -X POST \
  -H 'Content-Type: */*' \
  --data-binary '@/path/to/file'
```

`POST /function/{functionName}`

Invoke a function in the default OpenFaaS namespace.

<h3 id="synchronously-invoke-a-function-defined-in-te-default-openfaas-namespace-any-additional-path-segments-and-query-parameters-will-be-passed-to-the-function-as-is-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|functionName|path|string|true|Function name|
|body|body|string(binary)|false|(Optional) data to pass to function|

<h3 id="synchronously-invoke-a-function-defined-in-te-default-openfaas-namespace-any-additional-path-segments-and-query-parameters-will-be-passed-to-the-function-as-is-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Value returned from function|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Synchronously invoke a function defined in the specified namespace. Any additional path segments and query parameters will be passed to the function as is.

<a id="opIdInvokeFunctionNamespaced"></a>

> Code samples

```bash
curl http://localhost:8080/function/string.string \
  -X POST \
  -H 'Content-Type: */*' \
  --data-binary '@/path/to/file'
```

`POST /function/{functionName}.{namespace}`

Invoke a function in an OpenFaaS namespace.

<h3 id="synchronously-invoke-a-function-defined-in-the-specified-namespace-any-additional-path-segments-and-query-parameters-will-be-passed-to-the-function-as-is-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|functionName|path|string|true|Function name|
|namespace|path|string|true|Namespace of the function|
|body|body|string(binary)|false|(Optional) data to pass to function|

<h3 id="synchronously-invoke-a-function-defined-in-the-specified-namespace-any-additional-path-segments-and-query-parameters-will-be-passed-to-the-function-as-is-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Value returned from function|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_GatewayInfo">GatewayInfo</h2>
<!-- backwards compatibility -->
<a id="schemagatewayinfo"></a>
<a id="schema_GatewayInfo"></a>
<a id="tocSgatewayinfo"></a>
<a id="tocsgatewayinfo"></a>

```json
{
  "provider": {
    "provider": "faas-netes",
    "orchestration": "kubernetes",
    "version": {
      "commit_message": "Sample Message",
      "sha": "7108418d9dd6b329ddff40e7393b3166f8160a88",
      "release": "0.8.9"
    }
  },
  "version": {
    "commit_message": "Sample Message",
    "sha": "7108418d9dd6b329ddff40e7393b3166f8160a88",
    "release": "0.8.9"
  },
  "arch": "x86_64"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|provider|object \| null|true|none|none|
|version|object \| null|true|none|version of the gateway|
|arch|string|true|none|Platform architecture|

<h2 id="tocS_VersionInfo">VersionInfo</h2>
<!-- backwards compatibility -->
<a id="schemaversioninfo"></a>
<a id="schema_VersionInfo"></a>
<a id="tocSversioninfo"></a>
<a id="tocsversioninfo"></a>

```json
{
  "commit_message": "Sample Message",
  "sha": "7108418d9dd6b329ddff40e7393b3166f8160a88",
  "release": "0.8.9"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commit_message|string|false|none|none|
|sha|string|true|none|none|
|release|string(semver)|true|none|none|

<h2 id="tocS_ProviderInfo">ProviderInfo</h2>
<!-- backwards compatibility -->
<a id="schemaproviderinfo"></a>
<a id="schema_ProviderInfo"></a>
<a id="tocSproviderinfo"></a>
<a id="tocsproviderinfo"></a>

```json
{
  "provider": "faas-netes",
  "orchestration": "kubernetes",
  "version": {
    "commit_message": "Sample Message",
    "sha": "7108418d9dd6b329ddff40e7393b3166f8160a88",
    "release": "0.8.9"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|provider|string|true|none|The orchestration provider / implementation|
|orchestration|string|true|none|none|
|version|object \| null|true|none|The version of the provider|

<h2 id="tocS_PrometheusAlert">PrometheusAlert</h2>
<!-- backwards compatibility -->
<a id="schemaprometheusalert"></a>
<a id="schema_PrometheusAlert"></a>
<a id="tocSprometheusalert"></a>
<a id="tocsprometheusalert"></a>

```json
{
  "receiver": "scale-up",
  "status": "firing",
  "alerts": [
    {
      "status": "firing",
      "labels": {
        "alertname": "APIHighInvocationRate",
        "code": "200",
        "function_name": "func_nodeinfo",
        "instance": "gateway:8080",
        "job": "gateway",
        "monitor": "faas-monitor",
        "service": "gateway",
        "severity": "major",
        "value": "8.998200359928017"
      },
      "annotations": {
        "description": "High invocation total on gateway:8080",
        "summary": "High invocation total on gateway:8080"
      },
      "startsAt": "2017-03-15T15:52:57.805Z",
      "endsAt": "0001-01-01T00:00:00Z",
      "generatorURL": "http://4156cb797423:9090/graph?g0.expr=rate%28gateway_function_invocation_total%5B10s%5D%29+%3E+5&g0.tab=0"
    }
  ],
  "groupLabels": {
    "alertname": "APIHighInvocationRate",
    "service": "gateway"
  },
  "commonLabels": {
    "alertname": "APIHighInvocationRate",
    "code": "200",
    "function_name": "func_nodeinfo",
    "instance": "gateway:8080",
    "job": "gateway",
    "monitor": "faas-monitor",
    "service": "gateway",
    "severity": "major",
    "value": "8.998200359928017"
  },
  "commonAnnotations": {
    "description": "High invocation total on gateway:8080",
    "summary": "High invocation total on gateway:8080"
  },
  "externalURL": "http://f054879d97db:9093",
  "version": "3",
  "groupKey": 18195285354214865000
}
```

Prometheus alert produced by AlertManager. This is only a subset of the full alert payload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|The status of the alert|
|receiver|string|true|none|The name of the receiver|
|alerts|[[PrometheusInnerAlert](#schemaprometheusinneralert)]|true|none|The list of alerts|

<h2 id="tocS_PrometheusInnerAlert">PrometheusInnerAlert</h2>
<!-- backwards compatibility -->
<a id="schemaprometheusinneralert"></a>
<a id="schema_PrometheusInnerAlert"></a>
<a id="tocSprometheusinneralert"></a>
<a id="tocsprometheusinneralert"></a>

```json
{
  "status": "resolved",
  "labels": {
    "alertname": "string",
    "function_name": "nodeinfo"
  }
}
```

A single alert produced by Prometheus

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|The status of the alert|
|labels|[PrometheusInnerAlertLabel](#schemaprometheusinneralertlabel)|true|none|A single label of a Prometheus alert|

<h2 id="tocS_PrometheusInnerAlertLabel">PrometheusInnerAlertLabel</h2>
<!-- backwards compatibility -->
<a id="schemaprometheusinneralertlabel"></a>
<a id="schema_PrometheusInnerAlertLabel"></a>
<a id="tocSprometheusinneralertlabel"></a>
<a id="tocsprometheusinneralertlabel"></a>

```json
{
  "alertname": "string",
  "function_name": "nodeinfo"
}
```

A single label of a Prometheus alert

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alertname|string|true|none|The name of the alert|
|function_name|string|true|none|The name of the function|

<h2 id="tocS_FunctionDeployment">FunctionDeployment</h2>
<!-- backwards compatibility -->
<a id="schemafunctiondeployment"></a>
<a id="schema_FunctionDeployment"></a>
<a id="tocSfunctiondeployment"></a>
<a id="tocsfunctiondeployment"></a>

```json
{
  "service": "nodeinfo",
  "image": "functions/nodeinfo:latest",
  "namespace": "openfaas-fn",
  "envProcess": "node main.js",
  "constraints": [
    "node.platform.os == linux"
  ],
  "envVars": {
    "property1": "string",
    "property2": "string"
  },
  "secrets": [
    "secret-name-1"
  ],
  "labels": {
    "foo": "bar"
  },
  "annotations": {
    "topics": "awesome-kafka-topic",
    "foo": "bar"
  },
  "limits": {
    "memory": "128M",
    "cpu": "0.01"
  },
  "requests": {
    "memory": "128M",
    "cpu": "0.01"
  },
  "readOnlyRootFilesystem": true,
  "registryAuth": "dXNlcjpwYXNzd29yZA==",
  "network": "func_functions"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|service|string|true|none|Name of deployed function|
|image|string|true|none|Docker image in accessible registry|
|namespace|string|false|none|Namespace to deploy function to. When omitted, the default namespace is used, typically this is `openfaas-fn` but is configured by the provider.|
|envProcess|string|false|none|Process for watchdog to fork, i.e. the command to start the function process.<br><br>This value configures the `fprocess` env variable.<br>|
|constraints|[string]|false|none|none|
|envVars|object|false|none|Overrides to environmental variables|
|secrets|[string]|false|none|none|
|labels|object \| null|false|none|A map of labels for making scheduling or routing decisions|
|annotations|object \| null|false|none|A map of annotations for management, orchestration, events and build tasks|
|limits|object \| null|false|none|none|
|requests|object \| null|false|none|none|
|readOnlyRootFilesystem|boolean|false|none|Make the root filesystem of the function read-only|
|registryAuth|string|false|none|**Deprecated.** Deprecated: Private registry base64-encoded basic auth (as present in ~/.docker/config.json)<br><br>Use a Kubernetes Secret with registry-auth secret type to provide this value instead.<br><br>This value is completely ignored.<br>|
|network|string|false|none|**Deprecated.** Deprecated: Network, usually func_functions for Swarm.<br><br>This value is completely ignored.<br>|

<h2 id="tocS_FunctionStatus">FunctionStatus</h2>
<!-- backwards compatibility -->
<a id="schemafunctionstatus"></a>
<a id="schema_FunctionStatus"></a>
<a id="tocSfunctionstatus"></a>
<a id="tocsfunctionstatus"></a>

```json
{
  "name": "nodeinfo",
  "image": "functions/nodeinfo:latest",
  "namespace": "openfaas-fn",
  "envProcess": "node main.js",
  "envVars": {
    "property1": "string",
    "property2": "string"
  },
  "constraints": [
    "node.platform.os == linux"
  ],
  "secrets": [
    "string"
  ],
  "labels": {
    "foo": "bar"
  },
  "annotations": {
    "topics": "awesome-kafka-topic",
    "foo": "bar"
  },
  "limits": {
    "memory": "128M",
    "cpu": "0.01"
  },
  "requests": {
    "memory": "128M",
    "cpu": "0.01"
  },
  "readOnlyRootFilesystem": true,
  "invocationCount": 1337,
  "replicas": 2,
  "availableReplicas": 2,
  "createdAt": "1970-01-01T00:00:00Z",
  "usage": {
    "cpu": 0.01,
    "totalMemoryBytes": 1337
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the function|
|image|string|true|none|The fully qualified docker image name of the function|
|namespace|string|false|none|The namespace of the function|
|envProcess|string|false|none|Process for watchdog to fork|
|envVars|object|false|none|environment variables for the function runtime|
|constraints|[string]|false|none|none|
|secrets|[string]|false|none|none|
|labels|object \| null|false|none|A map of labels for making scheduling or routing decisions|
|annotations|object \| null|false|none|A map of annotations for management, orchestration, events and build tasks|
|limits|object \| null|false|none|none|
|requests|object \| null|false|none|none|
|readOnlyRootFilesystem|boolean|false|none|removes write-access from the root filesystem mount-point.|
|invocationCount|number(integer)|false|none|The amount of invocations for the specified function|
|replicas|number(integer)|false|none|Desired amount of replicas|
|availableReplicas|number(integer)|false|none|The current available amount of replicas|
|createdAt|string(date-time)|false|none|is the time read back from the faas backend's<br>data store for when the function or its container was created.<br>|
|usage|object \| null|false|none|none|

<h2 id="tocS_FunctionResources">FunctionResources</h2>
<!-- backwards compatibility -->
<a id="schemafunctionresources"></a>
<a id="schema_FunctionResources"></a>
<a id="tocSfunctionresources"></a>
<a id="tocsfunctionresources"></a>

```json
{
  "memory": "128M",
  "cpu": "0.01"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memory|string|false|none|The amount of memory that is allocated for the function|
|cpu|string|false|none|The amount of cpu that is allocated for the function|

<h2 id="tocS_FunctionUsage">FunctionUsage</h2>
<!-- backwards compatibility -->
<a id="schemafunctionusage"></a>
<a id="schema_FunctionUsage"></a>
<a id="tocSfunctionusage"></a>
<a id="tocsfunctionusage"></a>

```json
{
  "cpu": 0.01,
  "totalMemoryBytes": 1337
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cpu|number(double)|false|none|is the increase in CPU usage since the last measurement<br>equivalent to Kubernetes' concept of millicores.<br>|
|totalMemoryBytes|number(double)|false|none|is the total memory usage in bytes.|

<h2 id="tocS_DeleteFunctionRequest">DeleteFunctionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletefunctionrequest"></a>
<a id="schema_DeleteFunctionRequest"></a>
<a id="tocSdeletefunctionrequest"></a>
<a id="tocsdeletefunctionrequest"></a>

```json
{
  "functionName": "nodeinfo"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|functionName|string|true|none|Name of deployed function|

<h2 id="tocS_ScaleServiceRequest">ScaleServiceRequest</h2>
<!-- backwards compatibility -->
<a id="schemascaleservicerequest"></a>
<a id="schema_ScaleServiceRequest"></a>
<a id="tocSscaleservicerequest"></a>
<a id="tocsscaleservicerequest"></a>

```json
{
  "serviceName": "nodeinfo",
  "namespace": "openfaas-fn",
  "replicas": 2
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceName|string|true|none|Name of deployed function|
|namespace|string|true|none|Namespace the function is deployed to.|
|replicas|integer(int64)|true|none|Number of replicas to scale to|

<h2 id="tocS_SecretDescription">SecretDescription</h2>
<!-- backwards compatibility -->
<a id="schemasecretdescription"></a>
<a id="schema_SecretDescription"></a>
<a id="tocSsecretdescription"></a>
<a id="tocssecretdescription"></a>

```json
{
  "name": "aws-key",
  "namespace": "openfaas-fn"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of secret|
|namespace|string|false|none|Namespace of secret|

<h2 id="tocS_SecretValues">SecretValues</h2>
<!-- backwards compatibility -->
<a id="schemasecretvalues"></a>
<a id="schema_SecretValues"></a>
<a id="tocSsecretvalues"></a>
<a id="tocssecretvalues"></a>

```json
{
  "value": "changeme",
  "rawValue": "Y2hhbmdlbWU="
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|Value of secret in plain-text|
|rawValue|string(byte)|false|none|Value of secret in base64.<br><br>This can be used to provide raw binary data when the `value` field is omitted.<br>|

<h2 id="tocS_Secret">Secret</h2>
<!-- backwards compatibility -->
<a id="schemasecret"></a>
<a id="schema_Secret"></a>
<a id="tocSsecret"></a>
<a id="tocssecret"></a>

```json
{
  "name": "aws-key",
  "namespace": "openfaas-fn",
  "value": "changeme",
  "rawValue": "Y2hhbmdlbWU="
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of secret|
|namespace|string|false|none|Namespace of secret|
|value|string|false|none|Value of secret in plain-text|
|rawValue|string(byte)|false|none|Value of secret in base64.<br><br>This can be used to provide raw binary data when the `value` field is omitted.<br>|

<h2 id="tocS_LogEntry">LogEntry</h2>
<!-- backwards compatibility -->
<a id="schemalogentry"></a>
<a id="schema_LogEntry"></a>
<a id="tocSlogentry"></a>
<a id="tocslogentry"></a>

```json
{
  "name": "string",
  "namespace": "string",
  "instance": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|the function name|
|namespace|string|true|none|the namespace of the function|
|instance|string|true|none|the name/id of the specific function instance|
|timestamp|string(date-time)|true|none|the timestamp of when the log message was recorded|
|text|string|true|none|raw log message content|

<h2 id="tocS_ListNamespaceResponse">ListNamespaceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistnamespaceresponse"></a>
<a id="schema_ListNamespaceResponse"></a>
<a id="tocSlistnamespaceresponse"></a>
<a id="tocslistnamespaceresponse"></a>

```json
[
  "openfaas-fn"
]
```
