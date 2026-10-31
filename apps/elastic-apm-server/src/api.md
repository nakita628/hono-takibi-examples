<h1 id="observability-intake-apis">Observability Intake APIs v0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

OpenAPI schema for Observability Intake APIs

Base URLs:

* <a href="https://raw.githubusercontent.com/">https://raw.githubusercontent.com/</a>

License: <a href="https://www.elastic.co/licensing/elastic-license">Elastic License 2.0</a>

# Authentication

* API Key (apiKeyAuth)
    - Parameter Name: **Authorization**, in: header. e.g. Authorization: ApiKey base64AccessApiKey

- HTTP Authentication, scheme: bearer

<h1 id="observability-intake-apis-agent-config">agent config</h1>

APIs that query the APM Server for configuration changes.

## Get agent configuration changes

<a id="opIdgetAgentConfig"></a>

> Code samples

```bash
curl 'http://localhost:8200/config/v1/agents?service.name=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /config/v1/agents`

To configure authenticated access to the APM server, the instructions at [APM API key](https://www.elastic.co/guide/en/observability/current/api-key.html) or [APM Secret Token](https://www.elastic.co/guide/en/observability/current/secret-token.html) must be followed to configure the correct permissions for APM access.


<h3 id="get-agent-configuration-changes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|service.name|query|string|true|none|
|service.environment|query|string|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-agent-configuration-changes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response.|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyAuth, secretToken
</aside>

## Get agent configuration changes

<a id="opIdpostAgentConfig"></a>

> Code samples

```bash
curl http://localhost:8200/config/v1/agents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "CAPTURE_BODY": "off",
    "service": {
      "environment": "all",
      "name": "test-service"
    }
  }'
```

`POST /config/v1/agents`

To configure authenticated access to the APM server, the instructions at [APM API key](https://www.elastic.co/guide/en/observability/current/api-key.html) or [APM Secret Token](https://www.elastic.co/guide/en/observability/current/secret-token.html) must be followed to configure the correct permissions for APM access.


> Body parameter

```json
{
  "CAPTURE_BODY": "off",
  "service": {
    "environment": "all",
    "name": "test-service"
  }
}
```

<h3 id="get-agent-configuration-changes-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» CAPTURE_BODY|body|string|false|none|
|» service|body|object|true|none|
|» » environment|body|string|false|none|
|» » name|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "capture_body": "off",
  "transaction_max_spans": 500,
  "transaction_sample_rate": 0.3
}
```

<h3 id="get-agent-configuration-changes-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|403|Forbidden|APM Server is configured to fetch agent configuration from Elasticsearch but the configuration is invalid.|None|
|503|Service Unavailable|APM Server is starting up or Elasticsearch is unreachable.|None|

<h3 id="get-agent-configuration-changes-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capture_body|string|false|none|For transactions that are HTTP requests, the agent can optionally capture the request body (for example, POST variables). For transactions that are initiated by receiving a message from a message broker, the agent can capture the textual message body.<br>|
|transaction_max_spans|integer|false|none|The maximum number of spans that are recorded per transaction.|
|transaction_sample_rate|number(float)|false|none|The agent samples transactions at this rate.|

#### Enumerated Values

|Property|Value|
|---|---|
|capture_body|off|
|capture_body|errors|
|capture_body|transactions|
|capture_body|all|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyAuth, secretToken
</aside>

## Get RUM agent configuration changes

<a id="opIdgetRumAgentConfig"></a>

> Code samples

```bash
curl http://localhost:8200/config/v1/rum/agents \
  -H "Authorization: ${API_KEY}"
```

`GET /config/v1/rum/agents`

To configure authenticated access to the APM server, the instructions at [APM API key](https://www.elastic.co/guide/en/observability/current/api-key.html) or [APM Secret Token](https://www.elastic.co/guide/en/observability/current/secret-token.html) must be followed to configure the correct permissions for APM access.


<h3 id="get-rum-agent-configuration-changes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyAuth, secretToken
</aside>

<h1 id="observability-intake-apis-event-intake">event intake</h1>

The events intake API is the internal protocol that APM agents use to talk to the APM Server.

## Send APM agent events

<a id="opIdpostEventIntake"></a>

> Code samples

```bash
curl http://localhost:8200/intake/v2/events \
  -X POST \
  -H 'Content-Type: application/ndjson' \
  -H "Authorization: ${API_KEY}" \
  -d '{"metadata":{"process":{"pid":1234,"title":"/usr/lib/jvm/java-10-openjdk-amd64/bin/java","ppid":1,"argv":["-v"]},"system":{"architecture":"amd64","detected_hostname":"8ec7ceb99074","configured_hostname":"host1","platform":"Linux","container":{"id":"8ec7ceb990749e79b37f6dc6cd3628633618d6ce412553a552a0fa6b69419ad4"},"kubernetes":{"namespace":"default","pod":{"uid":"b17f231da0ad128dc6c6c0b2e82f6f303d3893e3","name":"instrumented-java-service"},"node":{"name":"node-name"}}},"service":{"name":"1234_service-12a3","version":"4.3.0","node":{"configured_name":"8ec7ceb990749e79b37f6dc6cd3628633618d6ce412553a552a0fa6b69419ad4"},"environment":"production","language":{"name":"Java","version":"10.0.2"},"agent":{"version":"1.10.0","name":"java","ephemeral_id":"e71be9ac-93b0-44b9-a997-5638f6ccfc36"},"framework":{"name":"spring","version":"5.0.0"},"runtime":{"name":"Java","version":"10.0.2"}},"labels":{"group":"experimental","ab_testing":true,"segment":5}}}'
```

`POST /intake/v2/events`

NOTE: Most users do not need to interact directly with the events intake API. Agents communicate with the APM Server by sending events--captured pieces of information--in an HTTP request. Events can be transactions, spans, errors, or metrics. Each event is sent as its own line in the HTTP request body, which is known as newline delimited JSON (NDJSON). With NDJSON, agents can open an HTTP POST request and use chunked encoding to stream events to the APM Server as soon as they are recorded in the agent. This makes it simple for agents to serialize each event to a stream of newline delimited JSON. The APM Server also treats the HTTP body as a compressed stream and thus reads and handles each event independently. See the [APM data model](https://www.elastic.co/guide/en/observability/current/apm-data-model.html) to learn more about the different types of events.


> Body parameter

```json
{
  "metadata": {
    "process": {
      "pid": 1234,
      "title": "/usr/lib/jvm/java-10-openjdk-amd64/bin/java",
      "ppid": 1,
      "argv": [
        "-v"
      ]
    },
    "system": {
      "architecture": "amd64",
      "detected_hostname": "8ec7ceb99074",
      "configured_hostname": "host1",
      "platform": "Linux",
      "container": {
        "id": "8ec7ceb990749e79b37f6dc6cd3628633618d6ce412553a552a0fa6b69419ad4"
      },
      "kubernetes": {
        "namespace": "default",
        "pod": {
          "uid": "b17f231da0ad128dc6c6c0b2e82f6f303d3893e3",
          "name": "instrumented-java-service"
        },
        "node": {
          "name": "node-name"
        }
      }
    },
    "service": {
      "name": "1234_service-12a3",
      "version": "4.3.0",
      "node": {
        "configured_name": "8ec7ceb990749e79b37f6dc6cd3628633618d6ce412553a552a0fa6b69419ad4"
      },
      "environment": "production",
      "language": {
        "name": "Java",
        "version": "10.0.2"
      },
      "agent": {
        "version": "1.10.0",
        "name": "java",
        "ephemeral_id": "e71be9ac-93b0-44b9-a997-5638f6ccfc36"
      },
      "framework": {
        "name": "spring",
        "version": "5.0.0"
      },
      "runtime": {
        "name": "Java",
        "version": "10.0.2"
      }
    },
    "labels": {
      "group": "experimental",
      "ab_testing": true,
      "segment": 5
    }
  }
}
```

<h3 id="send-apm-agent-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ErrorEvent](#schemaerrorevent) \| [MetadataEvent](#schemametadataevent) \| [MetricSetEvent](#schemametricsetevent) \| [SpanEvent](#schemaspanevent) \| [TransactionEvent](#schematransactionevent)|false|none|
|» *anyOf*|body|[ErrorEvent](#schemaerrorevent)|false|Errors are events that occur in a monitored service and correspond to an error or a logged message captured by an agent.<br>|
|» *anyOf*|body|[MetadataEvent](#schemametadataevent)|false|Every new connection to the APM Server starts with a metadata stanza. This provides general metadata concerning the other objects in the stream. Rather than send this metadata information from the agent multiple times, the APM Server hangs on to this information and applies it to other objects in the stream as necessary. TIP: Metadata is stored under context when viewing documents in Elasticsearch. APM agents automatically read Kubernetes data and send it to the APM Server. In most instances, agents are able to read this data from inside the container. If this is not the case, or if you wish to override this data, you can set environment variables for the agents to read. These environment variable are set via the Kubernetes Downward API. <br>|
|» *anyOf*|body|[MetricSetEvent](#schemametricsetevent)|false|Metric sets are events that contain application metric data captured by an APM agent. <br>|
|» *anyOf*|body|[SpanEvent](#schemaspanevent)|false|Spans are events captured by an agent occurring in a monitored service.<br>|
|» *anyOf*|body|[TransactionEvent](#schematransactionevent)|false|Transactions are events corresponding to an incoming request or similar task occurring in a monitored service.<br>|

<h3 id="send-apm-agent-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Successful response; all events succeeded.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyAuth, secretToken
</aside>

## Send RUM events

<a id="opIdpostRumEventIntakeV2"></a>

> Code samples

```bash
curl http://localhost:8200/intake/v2/rum/events \
  -X POST \
  -H 'Content-Type: application/ndjson' \
  -H "Authorization: ${API_KEY}" \
  -d '{"error":{"exception":{"message":"string","attributes":{},"cause":[{}],"code":"string","handled":true,"module":"string","stacktrace":[{"classname":"string","abs_path":"string","colno":0,"context_line":"string","filename":"string","function":"string","library_frame":true,"lineno":0,"module":"string","post_context":["string"],"pre_context":["string"],"vars":{}}],"type":"string"},"context":{"cloud":{"origin":{"account":{"id":"string"},"provider":"string","region":"string","service":{"name":"string"}}},"custom":{},"message":{"age":{"ms":0},"body":"string","headers":{},"queue":{"name":"string"},"routing_key":"string"},"page":{"referer":"string","url":"string"},"request":{"body":"string","cookies":{},"env":{},"headers":{},"http_version":"string","method":"string","socket":{"encrypted":true,"remote_address":"string"},"url":{"full":"string","hash":"string","hostname":"string","pathname":"string","port":"string","protocol":"string","raw":"string","search":"string"}},"response":{"decoded_body_size":0,"encoded_body_size":0,"finished":true,"headers":{},"headers_sent":true,"status_code":0,"transfer_size":0},"service":{"agent":{"ephemeral_id":"string","name":"string","version":"string"},"environment":"string","framework":{"name":"string","version":"string"},"id":"string","language":{"name":"string","version":"string"},"name":"string","node":{"configured_name":"string"},"origin":{"id":"string","name":"string","version":"string"},"runtime":{"name":"string","version":"string"},"target":{"type":"string","name":"string"},"version":"string"},"tags":{"property1":"string","property2":"string"},"user":{"domain":"string","email":"string","id":"string","username":"string"}},"culprit":"string","id":"string","log":{"level":"string","logger_name":"string","message":"string","param_message":"string","stacktrace":[{"classname":"string","abs_path":"string","colno":0,"context_line":"string","filename":"string","function":"string","library_frame":true,"lineno":0,"module":"string","post_context":["string"],"pre_context":["string"],"vars":{}}]},"parent_id":"string","timestamp":0,"trace_id":"string","transaction":{"name":"string","sampled":true,"type":"string"},"transaction_id":"string"}}'
```

`POST /intake/v2/rum/events`

NOTE: Most users do not need to interact directly with the events intake API.


> Body parameter

```json
{
  "error": {
    "exception": {
      "message": "string",
      "attributes": {},
      "cause": [
        {}
      ],
      "code": "string",
      "handled": true,
      "module": "string",
      "stacktrace": [
        {
          "classname": "string",
          "abs_path": "string",
          "colno": 0,
          "context_line": "string",
          "filename": "string",
          "function": "string",
          "library_frame": true,
          "lineno": 0,
          "module": "string",
          "post_context": [
            "string"
          ],
          "pre_context": [
            "string"
          ],
          "vars": {}
        }
      ],
      "type": "string"
    },
    "context": {
      "cloud": {
        "origin": {
          "account": {
            "id": "string"
          },
          "provider": "string",
          "region": "string",
          "service": {
            "name": "string"
          }
        }
      },
      "custom": {},
      "message": {
        "age": {
          "ms": 0
        },
        "body": "string",
        "headers": {},
        "queue": {
          "name": "string"
        },
        "routing_key": "string"
      },
      "page": {
        "referer": "string",
        "url": "string"
      },
      "request": {
        "body": "string",
        "cookies": {},
        "env": {},
        "headers": {},
        "http_version": "string",
        "method": "string",
        "socket": {
          "encrypted": true,
          "remote_address": "string"
        },
        "url": {
          "full": "string",
          "hash": "string",
          "hostname": "string",
          "pathname": "string",
          "port": "string",
          "protocol": "string",
          "raw": "string",
          "search": "string"
        }
      },
      "response": {
        "decoded_body_size": 0,
        "encoded_body_size": 0,
        "finished": true,
        "headers": {},
        "headers_sent": true,
        "status_code": 0,
        "transfer_size": 0
      },
      "service": {
        "agent": {
          "ephemeral_id": "string",
          "name": "string",
          "version": "string"
        },
        "environment": "string",
        "framework": {
          "name": "string",
          "version": "string"
        },
        "id": "string",
        "language": {
          "name": "string",
          "version": "string"
        },
        "name": "string",
        "node": {
          "configured_name": "string"
        },
        "origin": {
          "id": "string",
          "name": "string",
          "version": "string"
        },
        "runtime": {
          "name": "string",
          "version": "string"
        },
        "target": {
          "type": "string",
          "name": "string"
        },
        "version": "string"
      },
      "tags": {
        "property1": "string",
        "property2": "string"
      },
      "user": {
        "domain": "string",
        "email": "string",
        "id": "string",
        "username": "string"
      }
    },
    "culprit": "string",
    "id": "string",
    "log": {
      "level": "string",
      "logger_name": "string",
      "message": "string",
      "param_message": "string",
      "stacktrace": [
        {
          "classname": "string",
          "abs_path": "string",
          "colno": 0,
          "context_line": "string",
          "filename": "string",
          "function": "string",
          "library_frame": true,
          "lineno": 0,
          "module": "string",
          "post_context": [
            "string"
          ],
          "pre_context": [
            "string"
          ],
          "vars": {}
        }
      ]
    },
    "parent_id": "string",
    "timestamp": 0,
    "trace_id": "string",
    "transaction": {
      "name": "string",
      "sampled": true,
      "type": "string"
    },
    "transaction_id": "string"
  }
}
```

<h3 id="send-rum-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ErrorEvent](#schemaerrorevent) \| [MetadataEvent](#schemametadataevent) \| [MetricSetEvent](#schemametricsetevent) \| [SpanEvent](#schemaspanevent) \| [TransactionEvent](#schematransactionevent)|false|none|
|» *anyOf*|body|[ErrorEvent](#schemaerrorevent)|false|Errors are events that occur in a monitored service and correspond to an error or a logged message captured by an agent.<br>|
|» *anyOf*|body|[MetadataEvent](#schemametadataevent)|false|Every new connection to the APM Server starts with a metadata stanza. This provides general metadata concerning the other objects in the stream. Rather than send this metadata information from the agent multiple times, the APM Server hangs on to this information and applies it to other objects in the stream as necessary. TIP: Metadata is stored under context when viewing documents in Elasticsearch. APM agents automatically read Kubernetes data and send it to the APM Server. In most instances, agents are able to read this data from inside the container. If this is not the case, or if you wish to override this data, you can set environment variables for the agents to read. These environment variable are set via the Kubernetes Downward API. <br>|
|» *anyOf*|body|[MetricSetEvent](#schemametricsetevent)|false|Metric sets are events that contain application metric data captured by an APM agent. <br>|
|» *anyOf*|body|[SpanEvent](#schemaspanevent)|false|Spans are events captured by an agent occurring in a monitored service.<br>|
|» *anyOf*|body|[TransactionEvent](#schematransactionevent)|false|Transactions are events corresponding to an incoming request or similar task occurring in a monitored service.<br>|

<h3 id="send-rum-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Successful response; all events succeeded.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyAuth, secretToken
</aside>

## Send RUM events

<a id="opIdpostRumEventIntakeV3"></a>

> Code samples

```bash
curl http://localhost:8200/intake/v3/rum/events \
  -X POST \
  -H 'Content-Type: application/ndjson' \
  -H "Authorization: ${API_KEY}" \
  -d '{"error":{"ex":{"mg":"string","at":{},"ca":[{}],"cd":"string","hd":true,"mo":"string","st":[{"ap":"string","cli":"string","cn":"string","co":0,"f":"string","fn":"string","li":0,"mo":"string","poc":["string"],"prc":["string"]}],"t":"string"},"c":{"cu":{},"g":{"property1":"string","property2":"string"},"p":{"rf":"string","url":"string"},"q":{"en":{},"he":{},"hve":"string","mt":"string"},"r":{"dbs":0,"ebs":0,"he":{},"sc":0,"ts":0},"se":{"a":{"n":"string","ve":"string"},"en":"string","fw":{"n":"string","ve":"string"},"la":{"n":"string","ve":"string"},"n":"string","ru":{"n":"string","ve":"string"},"ve":"string"},"u":{"em":"string","id":"string","ud":"string","un":"string"}},"cl":"string","id":"string","log":{"ln":"string","lv":"string","mg":"string","pmg":"string","st":[{"ap":"string","cli":"string","cn":"string","co":0,"f":"string","fn":"string","li":0,"mo":"string","poc":["string"],"prc":["string"]}]},"pid":"string","tid":"string","timestamp":0,"x":{"n":"string","sm":true,"t":"string"},"xid":"string"}}'
```

`POST /intake/v3/rum/events`

NOTE: Most users do not need to interact directly with the events intake API.


> Body parameter

```json
{
  "error": {
    "ex": {
      "mg": "string",
      "at": {},
      "ca": [
        {}
      ],
      "cd": "string",
      "hd": true,
      "mo": "string",
      "st": [
        {
          "ap": "string",
          "cli": "string",
          "cn": "string",
          "co": 0,
          "f": "string",
          "fn": "string",
          "li": 0,
          "mo": "string",
          "poc": [
            "string"
          ],
          "prc": [
            "string"
          ]
        }
      ],
      "t": "string"
    },
    "c": {
      "cu": {},
      "g": {
        "property1": "string",
        "property2": "string"
      },
      "p": {
        "rf": "string",
        "url": "string"
      },
      "q": {
        "en": {},
        "he": {},
        "hve": "string",
        "mt": "string"
      },
      "r": {
        "dbs": 0,
        "ebs": 0,
        "he": {},
        "sc": 0,
        "ts": 0
      },
      "se": {
        "a": {
          "n": "string",
          "ve": "string"
        },
        "en": "string",
        "fw": {
          "n": "string",
          "ve": "string"
        },
        "la": {
          "n": "string",
          "ve": "string"
        },
        "n": "string",
        "ru": {
          "n": "string",
          "ve": "string"
        },
        "ve": "string"
      },
      "u": {
        "em": "string",
        "id": "string",
        "ud": "string",
        "un": "string"
      }
    },
    "cl": "string",
    "id": "string",
    "log": {
      "ln": "string",
      "lv": "string",
      "mg": "string",
      "pmg": "string",
      "st": [
        {
          "ap": "string",
          "cli": "string",
          "cn": "string",
          "co": 0,
          "f": "string",
          "fn": "string",
          "li": 0,
          "mo": "string",
          "poc": [
            "string"
          ],
          "prc": [
            "string"
          ]
        }
      ]
    },
    "pid": "string",
    "tid": "string",
    "timestamp": 0,
    "x": {
      "n": "string",
      "sm": true,
      "t": "string"
    },
    "xid": "string"
  }
}
```

<h3 id="send-rum-events-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ErrorEventv3](#schemaerroreventv3) \| [MetadataEventv3](#schemametadataeventv3) \| [SpanEventv3](#schemaspaneventv3) \| [TransactionEventv3](#schematransactioneventv3)|false|none|
|» *anyOf*|body|[ErrorEventv3](#schemaerroreventv3)|false|none|
|» *anyOf*|body|[MetadataEventv3](#schemametadataeventv3)|false|none|
|» *anyOf*|body|[SpanEventv3](#schemaspaneventv3)|false|none|
|» *anyOf*|body|[TransactionEventv3](#schematransactioneventv3)|false|none|

<h3 id="send-rum-events-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Successful response; all events succeeded.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyAuth, secretToken
</aside>

<h1 id="observability-intake-apis-opentelemetry-intake">opentelemetry intake</h1>

The OpenTelemetry intake API uses the OpenTelemetry Protocol (OTLP) to send traces, metrics, and logs to APM Server. OTLP is the default transfer protocol for OpenTelemetry and is supported natively by APM Server. APM Server supports two OTLP communication protocols on the same port: OTLP/HTTP (protobuf) and OTLP/gRPC.


## Send OTLP metrics

<a id="opIdpostOtlpGrpcMetrics"></a>

> Code samples

```bash
curl http://localhost:8200/opentelemetry.proto.collector.metrics.v1.MetricsService/Export \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{}'
```

`POST /opentelemetry.proto.collector.metrics.v1.MetricsService/Export`

APM Server supports receiving metrics over the OpenTelemetry Protocol (OTLP). This API uses the OTLP/gRPC communication protocol.


> Body parameter

```json
{}
```

<h3 id="send-otlp-metrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

<h3 id="send-otlp-metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyAuth, secretToken
</aside>

## Send OTLP traces

<a id="opIdpostOtlpGrpcTraces"></a>

> Code samples

```bash
curl http://localhost:8200/opentelemetry.proto.collector.trace.v1.TraceService/Export \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{}'
```

`POST /opentelemetry.proto.collector.trace.v1.TraceService/Export`

APM Server supports receiving traces over the OpenTelemetry Protocol (OTLP). This API uses the OTLP/gRPC communication protocol.


> Body parameter

```json
{}
```

<h3 id="send-otlp-traces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

<h3 id="send-otlp-traces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyAuth, secretToken
</aside>

## Send OTLP logs

<a id="opIdpostOtlpGrpcLogs"></a>

> Code samples

```bash
curl http://localhost:8200/opentelemetry.proto.collector.logs.v1.LogsService/Export \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{}'
```

`POST /opentelemetry.proto.collector.logs.v1.LogsService/Export`

APM Server supports receiving logs over the OpenTelemetry Protocol (OTLP). This API uses the OTLP/gRPC communication protocol.


> Body parameter

```json
{}
```

<h3 id="send-otlp-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

<h3 id="send-otlp-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyAuth, secretToken
</aside>

## Send OTLP metrics

<a id="opIdpostOtlpHttpMetrics"></a>

> Code samples

```bash
curl http://localhost:8200/v1/metrics \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{}'
```

`POST /v1/metrics`

APM Server supports receiving metrics over the OpenTelemetry Protocol (OTLP). This API uses the OTLP/HTTP (protobuf) communication protocol.


> Body parameter

```json
{}
```

<h3 id="send-otlp-metrics-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

<h3 id="send-otlp-metrics-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyAuth, secretToken
</aside>

## Send OTLP traces

<a id="opIdpostOtlpHttpTraces"></a>

> Code samples

```bash
curl http://localhost:8200/v1/traces \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{}'
```

`POST /v1/traces`

APM Server supports receiving traces over the OpenTelemetry Protocol (OTLP). This API uses the OTLP/HTTP (protobuf) communication protocol.


> Body parameter

```json
{}
```

<h3 id="send-otlp-traces-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

<h3 id="send-otlp-traces-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyAuth, secretToken
</aside>

## Send OTLP logs

<a id="opIdpostOtlpHttpLogs"></a>

> Code samples

```bash
curl http://localhost:8200/v1/logs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{}'
```

`POST /v1/logs`

APM Server supports receiving logs over the OpenTelemetry Protocol (OTLP). This API uses the OTLP/HTTP (protobuf) communication protocol.


> Body parameter

```json
{}
```

<h3 id="send-otlp-logs-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

<h3 id="send-otlp-logs-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyAuth, secretToken
</aside>

<h1 id="observability-intake-apis-server-info">server info</h1>

APIs that query general APM Server information.

## Get general server information

<a id="opIdgetServerHealth"></a>

> Code samples

```bash
curl http://localhost:8200/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /`

This lightweight endpoint is useful as a server up/down health check.
To configure authenticated access to the APM server, the instructions at [APM API key](https://www.elastic.co/guide/en/observability/current/api-key.html) or [APM Secret Token](https://www.elastic.co/guide/en/observability/current/secret-token.html) must be followed to configure the correct permissions for APM access.


> Example responses

> 200 Response

```json
{
  "build_date": "2021-12-18T19:59:06Z",
  "build_sha": "24fe620eeff5a19e2133c940c7e5ce1ceddb1445",
  "publish_ready": true,
  "version": "8.12.2"
}
```

<h3 id="get-general-server-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response indicates that the server is up.|Inline|

<h3 id="get-general-server-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|build_date|string(time-date)|false|none|none|
|build_sha|string|false|none|none|
|publish_ready|boolean|false|none|none|
|version|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyAuth, secretToken
</aside>

## Get general server information

<a id="opIdpostServerHealth"></a>

> Code samples

```bash
curl http://localhost:8200/ \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /`

> Example responses

> 200 Response

```json
{
  "build_date": "2021-12-18T19:59:06Z",
  "build_sha": "24fe620eeff5a19e2133c940c7e5ce1ceddb1445",
  "publish_ready": true,
  "version": "8.12.2"
}
```

<h3 id="get-general-server-information-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response indicates that the server is up.|Inline|

<h3 id="get-general-server-information-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|build_date|string(time-date)|false|none|none|
|build_sha|string|false|none|none|
|publish_ready|boolean|false|none|none|
|version|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyAuth, secretToken
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
  "exception": {
    "message": "string",
    "attributes": {},
    "cause": [
      {}
    ],
    "code": "string",
    "handled": true,
    "module": "string",
    "stacktrace": [
      {
        "classname": "string",
        "abs_path": "string",
        "colno": 0,
        "context_line": "string",
        "filename": "string",
        "function": "string",
        "library_frame": true,
        "lineno": 0,
        "module": "string",
        "post_context": [
          "string"
        ],
        "pre_context": [
          "string"
        ],
        "vars": {}
      }
    ],
    "type": "string"
  },
  "context": {
    "cloud": {
      "origin": {
        "account": {
          "id": "string"
        },
        "provider": "string",
        "region": "string",
        "service": {
          "name": "string"
        }
      }
    },
    "custom": {},
    "message": {
      "age": {
        "ms": 0
      },
      "body": "string",
      "headers": {},
      "queue": {
        "name": "string"
      },
      "routing_key": "string"
    },
    "page": {
      "referer": "string",
      "url": "string"
    },
    "request": {
      "body": "string",
      "cookies": {},
      "env": {},
      "headers": {},
      "http_version": "string",
      "method": "string",
      "socket": {
        "encrypted": true,
        "remote_address": "string"
      },
      "url": {
        "full": "string",
        "hash": "string",
        "hostname": "string",
        "pathname": "string",
        "port": "string",
        "protocol": "string",
        "raw": "string",
        "search": "string"
      }
    },
    "response": {
      "decoded_body_size": 0,
      "encoded_body_size": 0,
      "finished": true,
      "headers": {},
      "headers_sent": true,
      "status_code": 0,
      "transfer_size": 0
    },
    "service": {
      "agent": {
        "ephemeral_id": "string",
        "name": "string",
        "version": "string"
      },
      "environment": "string",
      "framework": {
        "name": "string",
        "version": "string"
      },
      "id": "string",
      "language": {
        "name": "string",
        "version": "string"
      },
      "name": "string",
      "node": {
        "configured_name": "string"
      },
      "origin": {
        "id": "string",
        "name": "string",
        "version": "string"
      },
      "runtime": {
        "name": "string",
        "version": "string"
      },
      "target": {
        "type": "string",
        "name": "string"
      },
      "version": "string"
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "user": {
      "domain": "string",
      "email": "string",
      "id": "string",
      "username": "string"
    }
  },
  "culprit": "string",
  "id": "string",
  "log": {
    "level": "string",
    "logger_name": "string",
    "message": "string",
    "param_message": "string",
    "stacktrace": [
      {
        "classname": "string",
        "abs_path": "string",
        "colno": 0,
        "context_line": "string",
        "filename": "string",
        "function": "string",
        "library_frame": true,
        "lineno": 0,
        "module": "string",
        "post_context": [
          "string"
        ],
        "pre_context": [
          "string"
        ],
        "vars": {}
      }
    ]
  },
  "parent_id": "string",
  "timestamp": 0,
  "trace_id": "string",
  "transaction": {
    "name": "string",
    "sampled": true,
    "type": "string"
  },
  "transaction_id": "string"
}
```

errorEvent represents an error or a logged error message, captured by an APM agent in a monitored service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|context|null \| object|false|none|Context holds arbitrary contextual information for the event.|
|culprit|null \| string|false|none|Culprit identifies the function call which was the primary perpetrator of this event.|
|exception|null \| object|false|none|Exception holds information about the original error. The information is language specific.|
|id|string|true|none|ID holds the hex encoded 128 random bits ID of the event.|
|log|null \| object|false|none|Log holds additional information added when the error is logged.|
|parent_id|null \| string|false|none|ParentID holds the hex encoded 64 random bits ID of the parent transaction or span.|
|timestamp|null \| integer|false|none|Timestamp holds the recorded time of the event, UTC based and formatted as microseconds since Unix epoch.|
|trace_id|null \| string|false|none|TraceID holds the hex encoded 128 random bits ID of the correlated trace.|
|transaction|null \| object|false|none|Transaction holds information about the correlated transaction.|
|transaction_id|null \| string|false|none|TransactionID holds the hex encoded 64 random bits ID of the correlated transaction.|
|*anyOf*|object|false|none|none|
|exception|object|true|none|none|
|*anyOf*|object|false|none|none|
|log|object|true|none|none|

<h2 id="tocS_ErrorEvent">ErrorEvent</h2>
<!-- backwards compatibility -->
<a id="schemaerrorevent"></a>
<a id="schema_ErrorEvent"></a>
<a id="tocSerrorevent"></a>
<a id="tocserrorevent"></a>

```json
{
  "error": {
    "exception": {
      "message": "string",
      "attributes": {},
      "cause": [
        {}
      ],
      "code": "string",
      "handled": true,
      "module": "string",
      "stacktrace": [
        {
          "classname": "string",
          "abs_path": "string",
          "colno": 0,
          "context_line": "string",
          "filename": "string",
          "function": "string",
          "library_frame": true,
          "lineno": 0,
          "module": "string",
          "post_context": [
            "string"
          ],
          "pre_context": [
            "string"
          ],
          "vars": {}
        }
      ],
      "type": "string"
    },
    "context": {
      "cloud": {
        "origin": {
          "account": {
            "id": "string"
          },
          "provider": "string",
          "region": "string",
          "service": {
            "name": "string"
          }
        }
      },
      "custom": {},
      "message": {
        "age": {
          "ms": 0
        },
        "body": "string",
        "headers": {},
        "queue": {
          "name": "string"
        },
        "routing_key": "string"
      },
      "page": {
        "referer": "string",
        "url": "string"
      },
      "request": {
        "body": "string",
        "cookies": {},
        "env": {},
        "headers": {},
        "http_version": "string",
        "method": "string",
        "socket": {
          "encrypted": true,
          "remote_address": "string"
        },
        "url": {
          "full": "string",
          "hash": "string",
          "hostname": "string",
          "pathname": "string",
          "port": "string",
          "protocol": "string",
          "raw": "string",
          "search": "string"
        }
      },
      "response": {
        "decoded_body_size": 0,
        "encoded_body_size": 0,
        "finished": true,
        "headers": {},
        "headers_sent": true,
        "status_code": 0,
        "transfer_size": 0
      },
      "service": {
        "agent": {
          "ephemeral_id": "string",
          "name": "string",
          "version": "string"
        },
        "environment": "string",
        "framework": {
          "name": "string",
          "version": "string"
        },
        "id": "string",
        "language": {
          "name": "string",
          "version": "string"
        },
        "name": "string",
        "node": {
          "configured_name": "string"
        },
        "origin": {
          "id": "string",
          "name": "string",
          "version": "string"
        },
        "runtime": {
          "name": "string",
          "version": "string"
        },
        "target": {
          "type": "string",
          "name": "string"
        },
        "version": "string"
      },
      "tags": {
        "property1": "string",
        "property2": "string"
      },
      "user": {
        "domain": "string",
        "email": "string",
        "id": "string",
        "username": "string"
      }
    },
    "culprit": "string",
    "id": "string",
    "log": {
      "level": "string",
      "logger_name": "string",
      "message": "string",
      "param_message": "string",
      "stacktrace": [
        {
          "classname": "string",
          "abs_path": "string",
          "colno": 0,
          "context_line": "string",
          "filename": "string",
          "function": "string",
          "library_frame": true,
          "lineno": 0,
          "module": "string",
          "post_context": [
            "string"
          ],
          "pre_context": [
            "string"
          ],
          "vars": {}
        }
      ]
    },
    "parent_id": "string",
    "timestamp": 0,
    "trace_id": "string",
    "transaction": {
      "name": "string",
      "sampled": true,
      "type": "string"
    },
    "transaction_id": "string"
  }
}
```

Errors are events that occur in a monitored service and correspond to an error or a logged message captured by an agent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[error](#schemaerror)|true|none|errorEvent represents an error or a logged error message, captured by an APM agent in a monitored service.|

<h2 id="tocS_metadata">metadata</h2>
<!-- backwards compatibility -->
<a id="schemametadata"></a>
<a id="schema_metadata"></a>
<a id="tocSmetadata"></a>
<a id="tocsmetadata"></a>

```json
{
  "cloud": {
    "account": {
      "id": "string",
      "name": "string"
    },
    "availability_zone": "string",
    "instance": {
      "id": "string",
      "name": "string"
    },
    "machine": {
      "type": "string"
    },
    "project": {
      "id": "string",
      "name": "string"
    },
    "provider": "string",
    "region": "string",
    "service": {
      "name": "string"
    }
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "network": {
    "connection": {
      "type": "string"
    }
  },
  "process": {
    "argv": [
      "string"
    ],
    "pid": 0,
    "ppid": 0,
    "title": "string"
  },
  "service": {
    "agent": {
      "activation_method": "string",
      "ephemeral_id": "string",
      "name": "string",
      "version": "string"
    },
    "environment": "string",
    "framework": {
      "name": "string",
      "version": "string"
    },
    "id": "string",
    "language": {
      "name": "string",
      "version": "string"
    },
    "name": "string",
    "node": {
      "configured_name": "string"
    },
    "runtime": {
      "name": "string",
      "version": "string"
    },
    "version": "string"
  },
  "system": {
    "architecture": "string",
    "configured_hostname": "string",
    "container": {
      "id": "string"
    },
    "detected_hostname": "string",
    "host_id": "string",
    "hostname": "string",
    "kubernetes": {
      "namespace": "string",
      "node": {
        "name": "string"
      },
      "pod": {
        "name": "string",
        "uid": "string"
      }
    },
    "platform": "string"
  },
  "user": {
    "domain": "string",
    "email": "string",
    "id": "string",
    "username": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloud|null \| object|false|none|Cloud metadata about where the monitored service is running.|
|labels|null \| object|false|none|Labels are a flat mapping of user-defined tags. Allowed value types are string, boolean and number values. Labels are indexed and searchable.|
|network|null \| object|false|none|Network holds information about the network over which the monitored service is communicating.|
|process|null \| object|false|none|Process metadata about the monitored service.|
|service|object|true|none|Service metadata about the monitored service.|
|system|null \| object|false|none|System metadata|
|user|null \| object|false|none|User metadata, which can be overwritten on a per event basis.|

<h2 id="tocS_MetadataEvent">MetadataEvent</h2>
<!-- backwards compatibility -->
<a id="schemametadataevent"></a>
<a id="schema_MetadataEvent"></a>
<a id="tocSmetadataevent"></a>
<a id="tocsmetadataevent"></a>

```json
{
  "metadata": {
    "cloud": {
      "account": {
        "id": "string",
        "name": "string"
      },
      "availability_zone": "string",
      "instance": {
        "id": "string",
        "name": "string"
      },
      "machine": {
        "type": "string"
      },
      "project": {
        "id": "string",
        "name": "string"
      },
      "provider": "string",
      "region": "string",
      "service": {
        "name": "string"
      }
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "network": {
      "connection": {
        "type": "string"
      }
    },
    "process": {
      "argv": [
        "string"
      ],
      "pid": 0,
      "ppid": 0,
      "title": "string"
    },
    "service": {
      "agent": {
        "activation_method": "string",
        "ephemeral_id": "string",
        "name": "string",
        "version": "string"
      },
      "environment": "string",
      "framework": {
        "name": "string",
        "version": "string"
      },
      "id": "string",
      "language": {
        "name": "string",
        "version": "string"
      },
      "name": "string",
      "node": {
        "configured_name": "string"
      },
      "runtime": {
        "name": "string",
        "version": "string"
      },
      "version": "string"
    },
    "system": {
      "architecture": "string",
      "configured_hostname": "string",
      "container": {
        "id": "string"
      },
      "detected_hostname": "string",
      "host_id": "string",
      "hostname": "string",
      "kubernetes": {
        "namespace": "string",
        "node": {
          "name": "string"
        },
        "pod": {
          "name": "string",
          "uid": "string"
        }
      },
      "platform": "string"
    },
    "user": {
      "domain": "string",
      "email": "string",
      "id": "string",
      "username": "string"
    }
  }
}
```

Every new connection to the APM Server starts with a metadata stanza. This provides general metadata concerning the other objects in the stream. Rather than send this metadata information from the agent multiple times, the APM Server hangs on to this information and applies it to other objects in the stream as necessary. TIP: Metadata is stored under context when viewing documents in Elasticsearch. APM agents automatically read Kubernetes data and send it to the APM Server. In most instances, agents are able to read this data from inside the container. If this is not the case, or if you wish to override this data, you can set environment variables for the agents to read. These environment variable are set via the Kubernetes Downward API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|[metadata](#schemametadata)|true|none|none|

<h2 id="tocS_metricset">metricset</h2>
<!-- backwards compatibility -->
<a id="schemametricset"></a>
<a id="schema_metricset"></a>
<a id="tocSmetricset"></a>
<a id="tocsmetricset"></a>

```json
{
  "faas": {
    "coldstart": true,
    "execution": "string",
    "id": "string",
    "name": "string",
    "trigger": {
      "request_id": "string",
      "type": "string"
    },
    "version": "string"
  },
  "samples": {},
  "service": {
    "name": "string",
    "version": "string"
  },
  "span": {
    "subtype": "string",
    "type": "string"
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "timestamp": 0,
  "transaction": {
    "name": "string",
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|faas|null \| object|false|none|FAAS holds fields related to Function as a Service events.|
|samples|object|true|none|Samples hold application metrics collected from the agent.|
|service|null \| object|false|none|Service holds selected information about the correlated service.|
|span|null \| object|false|none|Span holds selected information about the correlated transaction.|
|tags|null \| object|false|none|Tags are a flat mapping of user-defined tags. On the agent side, tags are called labels. Allowed value types are string, boolean and number values. Tags are indexed and searchable.|
|timestamp|null \| integer|false|none|Timestamp holds the recorded time of the event, UTC based and formatted as microseconds since Unix epoch|
|transaction|null \| object|false|none|Transaction holds selected information about the correlated transaction.|

<h2 id="tocS_MetricSetEvent">MetricSetEvent</h2>
<!-- backwards compatibility -->
<a id="schemametricsetevent"></a>
<a id="schema_MetricSetEvent"></a>
<a id="tocSmetricsetevent"></a>
<a id="tocsmetricsetevent"></a>

```json
{
  "metricset": {
    "faas": {
      "coldstart": true,
      "execution": "string",
      "id": "string",
      "name": "string",
      "trigger": {
        "request_id": "string",
        "type": "string"
      },
      "version": "string"
    },
    "samples": {},
    "service": {
      "name": "string",
      "version": "string"
    },
    "span": {
      "subtype": "string",
      "type": "string"
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "timestamp": 0,
    "transaction": {
      "name": "string",
      "type": "string"
    }
  }
}
```

Metric sets are events that contain application metric data captured by an APM agent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metricset|[metricset](#schemametricset)|true|none|none|

<h2 id="tocS_span">span</h2>
<!-- backwards compatibility -->
<a id="schemaspan"></a>
<a id="schema_span"></a>
<a id="tocSspan"></a>
<a id="tocsspan"></a>

```json
{
  "start": 0,
  "action": "string",
  "child_ids": [
    "string"
  ],
  "composite": {
    "compression_strategy": "string",
    "count": 2,
    "sum": 0
  },
  "context": {
    "db": {
      "instance": "string",
      "link": "string",
      "rows_affected": 0,
      "statement": "string",
      "type": "string",
      "user": "string"
    },
    "destination": {
      "address": "string",
      "port": 0,
      "service": {
        "name": "string",
        "resource": "string",
        "type": "string"
      }
    },
    "http": {
      "method": "string",
      "request": {
        "id": "string"
      },
      "response": {
        "decoded_body_size": 0,
        "encoded_body_size": 0,
        "headers": {},
        "status_code": 0,
        "transfer_size": 0
      },
      "status_code": 0,
      "url": "string"
    },
    "message": {
      "age": {
        "ms": 0
      },
      "body": "string",
      "headers": {},
      "queue": {
        "name": "string"
      },
      "routing_key": "string"
    },
    "service": {
      "agent": {
        "ephemeral_id": "string",
        "name": "string",
        "version": "string"
      },
      "environment": "string",
      "framework": {
        "name": "string",
        "version": "string"
      },
      "id": "string",
      "language": {
        "name": "string",
        "version": "string"
      },
      "name": "string",
      "node": {
        "configured_name": "string"
      },
      "origin": {
        "id": "string",
        "name": "string",
        "version": "string"
      },
      "runtime": {
        "name": "string",
        "version": "string"
      },
      "target": {
        "type": "string",
        "name": "string"
      },
      "version": "string"
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  },
  "duration": 0,
  "id": "string",
  "links": [
    {
      "span_id": "string",
      "trace_id": "string"
    }
  ],
  "name": "string",
  "otel": {
    "attributes": {},
    "span_kind": "string"
  },
  "outcome": "success",
  "parent_id": "string",
  "sample_rate": 0,
  "stacktrace": [
    {
      "classname": "string",
      "abs_path": "string",
      "colno": 0,
      "context_line": "string",
      "filename": "string",
      "function": "string",
      "library_frame": true,
      "lineno": 0,
      "module": "string",
      "post_context": [
        "string"
      ],
      "pre_context": [
        "string"
      ],
      "vars": {}
    }
  ],
  "subtype": "string",
  "sync": true,
  "timestamp": 0,
  "trace_id": "string",
  "transaction_id": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|null \| string|false|none|Action holds the specific kind of event within the sub-type represented by the span (e.g. query, connect)|
|child_ids|[string]|false|none|ChildIDs holds a list of successor transactions and/or spans.|
|composite|null \| object|false|none|Composite holds details on a group of spans represented by a single one.|
|context|null \| object|false|none|Context holds arbitrary contextual information for the event.|
|duration|number|true|none|Duration of the span in milliseconds. When the span is a composite one, duration is the gross duration, including "whitespace" in between spans.|
|id|string|true|none|ID holds the hex encoded 64 random bits ID of the event.|
|links|[object]|false|none|Links holds links to other spans, potentially in other traces.|
|name|string|true|none|Name is the generic designation of a span in the scope of a transaction.|
|otel|null \| object|false|none|OTel contains unmapped OpenTelemetry attributes.|
|outcome|null \| string|false|none|Outcome of the span: success, failure, or unknown. Outcome may be one of a limited set of permitted values describing the success or failure of the span. It can be used for calculating error rates for outgoing requests.|
|parent_id|string|true|none|ParentID holds the hex encoded 64 random bits ID of the parent transaction or span.|
|sample_rate|null \| number|false|none|SampleRate applied to the monitored service at the time where this span was recorded.|
|stacktrace|[object]|false|none|Stacktrace connected to this span event.|
|start|null \| number|false|none|Start is the offset relative to the transaction's timestamp identifying the start of the span, in milliseconds.|
|subtype|null \| string|false|none|Subtype is a further sub-division of the type (e.g. postgresql, elasticsearch)|
|sync|null \| boolean|false|none|Sync indicates whether the span was executed synchronously or asynchronously.|
|timestamp|null \| integer|false|none|Timestamp holds the recorded time of the event, UTC based and formatted as microseconds since Unix epoch|
|trace_id|string|true|none|TraceID holds the hex encoded 128 random bits ID of the correlated trace.|
|transaction_id|null \| string|false|none|TransactionID holds the hex encoded 64 random bits ID of the correlated transaction.|
|type|string|true|none|Type holds the span's type, and can have specific keywords within the service's domain (eg: 'request', 'backgroundjob', etc)|
|*anyOf*|object|false|none|none|
|start|number|true|none|none|
|*anyOf*|object|false|none|none|
|timestamp|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|outcome|success|
|outcome|failure|
|outcome|unknown|
|outcome|null|

<h2 id="tocS_SpanEvent">SpanEvent</h2>
<!-- backwards compatibility -->
<a id="schemaspanevent"></a>
<a id="schema_SpanEvent"></a>
<a id="tocSspanevent"></a>
<a id="tocsspanevent"></a>

```json
{
  "span": {
    "start": 0,
    "action": "string",
    "child_ids": [
      "string"
    ],
    "composite": {
      "compression_strategy": "string",
      "count": 2,
      "sum": 0
    },
    "context": {
      "db": {
        "instance": "string",
        "link": "string",
        "rows_affected": 0,
        "statement": "string",
        "type": "string",
        "user": "string"
      },
      "destination": {
        "address": "string",
        "port": 0,
        "service": {
          "name": "string",
          "resource": "string",
          "type": "string"
        }
      },
      "http": {
        "method": "string",
        "request": {
          "id": "string"
        },
        "response": {
          "decoded_body_size": 0,
          "encoded_body_size": 0,
          "headers": {},
          "status_code": 0,
          "transfer_size": 0
        },
        "status_code": 0,
        "url": "string"
      },
      "message": {
        "age": {
          "ms": 0
        },
        "body": "string",
        "headers": {},
        "queue": {
          "name": "string"
        },
        "routing_key": "string"
      },
      "service": {
        "agent": {
          "ephemeral_id": "string",
          "name": "string",
          "version": "string"
        },
        "environment": "string",
        "framework": {
          "name": "string",
          "version": "string"
        },
        "id": "string",
        "language": {
          "name": "string",
          "version": "string"
        },
        "name": "string",
        "node": {
          "configured_name": "string"
        },
        "origin": {
          "id": "string",
          "name": "string",
          "version": "string"
        },
        "runtime": {
          "name": "string",
          "version": "string"
        },
        "target": {
          "type": "string",
          "name": "string"
        },
        "version": "string"
      },
      "tags": {
        "property1": "string",
        "property2": "string"
      }
    },
    "duration": 0,
    "id": "string",
    "links": [
      {
        "span_id": "string",
        "trace_id": "string"
      }
    ],
    "name": "string",
    "otel": {
      "attributes": {},
      "span_kind": "string"
    },
    "outcome": "success",
    "parent_id": "string",
    "sample_rate": 0,
    "stacktrace": [
      {
        "classname": "string",
        "abs_path": "string",
        "colno": 0,
        "context_line": "string",
        "filename": "string",
        "function": "string",
        "library_frame": true,
        "lineno": 0,
        "module": "string",
        "post_context": [
          "string"
        ],
        "pre_context": [
          "string"
        ],
        "vars": {}
      }
    ],
    "subtype": "string",
    "sync": true,
    "timestamp": 0,
    "trace_id": "string",
    "transaction_id": "string",
    "type": "string"
  }
}
```

Spans are events captured by an agent occurring in a monitored service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|span|[span](#schemaspan)|true|none|none|

<h2 id="tocS_transaction">transaction</h2>
<!-- backwards compatibility -->
<a id="schematransaction"></a>
<a id="schema_transaction"></a>
<a id="tocStransaction"></a>
<a id="tocstransaction"></a>

```json
{
  "context": {
    "cloud": {
      "origin": {
        "account": {
          "id": "string"
        },
        "provider": "string",
        "region": "string",
        "service": {
          "name": "string"
        }
      }
    },
    "custom": {},
    "message": {
      "age": {
        "ms": 0
      },
      "body": "string",
      "headers": {},
      "queue": {
        "name": "string"
      },
      "routing_key": "string"
    },
    "page": {
      "referer": "string",
      "url": "string"
    },
    "request": {
      "body": "string",
      "cookies": {},
      "env": {},
      "headers": {},
      "http_version": "string",
      "method": "string",
      "socket": {
        "encrypted": true,
        "remote_address": "string"
      },
      "url": {
        "full": "string",
        "hash": "string",
        "hostname": "string",
        "pathname": "string",
        "port": "string",
        "protocol": "string",
        "raw": "string",
        "search": "string"
      }
    },
    "response": {
      "decoded_body_size": 0,
      "encoded_body_size": 0,
      "finished": true,
      "headers": {},
      "headers_sent": true,
      "status_code": 0,
      "transfer_size": 0
    },
    "service": {
      "agent": {
        "ephemeral_id": "string",
        "name": "string",
        "version": "string"
      },
      "environment": "string",
      "framework": {
        "name": "string",
        "version": "string"
      },
      "id": "string",
      "language": {
        "name": "string",
        "version": "string"
      },
      "name": "string",
      "node": {
        "configured_name": "string"
      },
      "origin": {
        "id": "string",
        "name": "string",
        "version": "string"
      },
      "runtime": {
        "name": "string",
        "version": "string"
      },
      "target": {
        "type": "string",
        "name": "string"
      },
      "version": "string"
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "user": {
      "domain": "string",
      "email": "string",
      "id": "string",
      "username": "string"
    }
  },
  "dropped_spans_stats": [
    {
      "destination_service_resource": "string",
      "duration": {
        "count": 1,
        "sum": {
          "us": 0
        }
      },
      "outcome": "success",
      "service_target_name": "string",
      "service_target_type": "string"
    }
  ],
  "duration": 0,
  "experience": {
    "cls": 0,
    "fid": 0,
    "longtask": {
      "count": 0,
      "max": 0,
      "sum": 0
    },
    "tbt": 0
  },
  "faas": {
    "coldstart": true,
    "execution": "string",
    "id": "string",
    "name": "string",
    "trigger": {
      "request_id": "string",
      "type": "string"
    },
    "version": "string"
  },
  "id": "string",
  "links": [
    {
      "span_id": "string",
      "trace_id": "string"
    }
  ],
  "marks": {
    "property1": {
      "property1": 0,
      "property2": 0
    },
    "property2": {
      "property1": 0,
      "property2": 0
    }
  },
  "name": "string",
  "otel": {
    "attributes": {},
    "span_kind": "string"
  },
  "outcome": "success",
  "parent_id": "string",
  "result": "string",
  "sample_rate": 0,
  "sampled": true,
  "session": {
    "id": "string",
    "sequence": 1
  },
  "span_count": {
    "dropped": 0,
    "started": 0
  },
  "timestamp": 0,
  "trace_id": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|context|null \| object|false|none|Context holds arbitrary contextual information for the event.|
|dropped_spans_stats|[object]|false|none|DroppedSpanStats holds information about spans that were dropped (for example due to transaction_max_spans or exit_span_min_duration).|
|duration|number|true|none|Duration how long the transaction took to complete, in milliseconds with 3 decimal points.|
|experience|null \| object|false|none|UserExperience holds metrics for measuring real user experience. This information is only sent by RUM agents.|
|faas|null \| object|false|none|FAAS holds fields related to Function as a Service events.|
|id|string|true|none|ID holds the hex encoded 64 random bits ID of the event.|
|links|[object]|false|none|Links holds links to other spans, potentially in other traces.|
|marks|null \| object|false|none|Marks capture the timing of a significant event during the lifetime of a transaction. Marks are organized into groups and can be set by the user or the agent. Marks are only reported by RUM agents.|
|name|null \| string|false|none|Name is the generic designation of a transaction in the scope of a single service, eg: 'GET /users/:id'.|
|otel|null \| object|false|none|OTel contains unmapped OpenTelemetry attributes.|
|outcome|null \| string|false|none|Outcome of the transaction with a limited set of permitted values, describing the success or failure of the transaction from the service's perspective. It is used for calculating error rates for incoming requests. Permitted values: success, failure, unknown.|
|parent_id|null \| string|false|none|ParentID holds the hex encoded 64 random bits ID of the parent transaction or span.|
|result|null \| string|false|none|Result of the transaction. For HTTP-related transactions, this should be the status code formatted like 'HTTP 2xx'.|
|sample_rate|null \| number|false|none|SampleRate applied to the monitored service at the time where this transaction was recorded. Allowed values are [0..1]. A SampleRate <1 indicates that not all spans are recorded.|
|sampled|null \| boolean|false|none|Sampled indicates whether or not the full information for a transaction is captured. If a transaction is unsampled no spans and less context information will be reported.|
|session|null \| object|false|none|Session holds optional transaction session information for RUM.|
|span_count|object|true|none|SpanCount counts correlated spans.|
|timestamp|null \| integer|false|none|Timestamp holds the recorded time of the event, UTC based and formatted as microseconds since Unix epoch|
|trace_id|string|true|none|TraceID holds the hex encoded 128 random bits ID of the correlated trace.|
|type|string|true|none|Type expresses the transaction's type as keyword that has specific relevance within the service's domain, eg: 'request', 'backgroundjob'.|

#### Enumerated Values

|Property|Value|
|---|---|
|outcome|success|
|outcome|failure|
|outcome|unknown|
|outcome|null|

<h2 id="tocS_TransactionEvent">TransactionEvent</h2>
<!-- backwards compatibility -->
<a id="schematransactionevent"></a>
<a id="schema_TransactionEvent"></a>
<a id="tocStransactionevent"></a>
<a id="tocstransactionevent"></a>

```json
{
  "transaction": {
    "context": {
      "cloud": {
        "origin": {
          "account": {
            "id": "string"
          },
          "provider": "string",
          "region": "string",
          "service": {
            "name": "string"
          }
        }
      },
      "custom": {},
      "message": {
        "age": {
          "ms": 0
        },
        "body": "string",
        "headers": {},
        "queue": {
          "name": "string"
        },
        "routing_key": "string"
      },
      "page": {
        "referer": "string",
        "url": "string"
      },
      "request": {
        "body": "string",
        "cookies": {},
        "env": {},
        "headers": {},
        "http_version": "string",
        "method": "string",
        "socket": {
          "encrypted": true,
          "remote_address": "string"
        },
        "url": {
          "full": "string",
          "hash": "string",
          "hostname": "string",
          "pathname": "string",
          "port": "string",
          "protocol": "string",
          "raw": "string",
          "search": "string"
        }
      },
      "response": {
        "decoded_body_size": 0,
        "encoded_body_size": 0,
        "finished": true,
        "headers": {},
        "headers_sent": true,
        "status_code": 0,
        "transfer_size": 0
      },
      "service": {
        "agent": {
          "ephemeral_id": "string",
          "name": "string",
          "version": "string"
        },
        "environment": "string",
        "framework": {
          "name": "string",
          "version": "string"
        },
        "id": "string",
        "language": {
          "name": "string",
          "version": "string"
        },
        "name": "string",
        "node": {
          "configured_name": "string"
        },
        "origin": {
          "id": "string",
          "name": "string",
          "version": "string"
        },
        "runtime": {
          "name": "string",
          "version": "string"
        },
        "target": {
          "type": "string",
          "name": "string"
        },
        "version": "string"
      },
      "tags": {
        "property1": "string",
        "property2": "string"
      },
      "user": {
        "domain": "string",
        "email": "string",
        "id": "string",
        "username": "string"
      }
    },
    "dropped_spans_stats": [
      {
        "destination_service_resource": "string",
        "duration": {
          "count": 1,
          "sum": {
            "us": 0
          }
        },
        "outcome": "success",
        "service_target_name": "string",
        "service_target_type": "string"
      }
    ],
    "duration": 0,
    "experience": {
      "cls": 0,
      "fid": 0,
      "longtask": {
        "count": 0,
        "max": 0,
        "sum": 0
      },
      "tbt": 0
    },
    "faas": {
      "coldstart": true,
      "execution": "string",
      "id": "string",
      "name": "string",
      "trigger": {
        "request_id": "string",
        "type": "string"
      },
      "version": "string"
    },
    "id": "string",
    "links": [
      {
        "span_id": "string",
        "trace_id": "string"
      }
    ],
    "marks": {
      "property1": {
        "property1": 0,
        "property2": 0
      },
      "property2": {
        "property1": 0,
        "property2": 0
      }
    },
    "name": "string",
    "otel": {
      "attributes": {},
      "span_kind": "string"
    },
    "outcome": "success",
    "parent_id": "string",
    "result": "string",
    "sample_rate": 0,
    "sampled": true,
    "session": {
      "id": "string",
      "sequence": 1
    },
    "span_count": {
      "dropped": 0,
      "started": 0
    },
    "timestamp": 0,
    "trace_id": "string",
    "type": "string"
  }
}
```

Transactions are events corresponding to an incoming request or similar task occurring in a monitored service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transaction|[transaction](#schematransaction)|true|none|none|

<h2 id="tocS_error-2">error-2</h2>
<!-- backwards compatibility -->
<a id="schemaerror-2"></a>
<a id="schema_error-2"></a>
<a id="tocSerror-2"></a>
<a id="tocserror-2"></a>

```json
{
  "ex": {
    "mg": "string",
    "at": {},
    "ca": [
      {}
    ],
    "cd": "string",
    "hd": true,
    "mo": "string",
    "st": [
      {
        "ap": "string",
        "cli": "string",
        "cn": "string",
        "co": 0,
        "f": "string",
        "fn": "string",
        "li": 0,
        "mo": "string",
        "poc": [
          "string"
        ],
        "prc": [
          "string"
        ]
      }
    ],
    "t": "string"
  },
  "c": {
    "cu": {},
    "g": {
      "property1": "string",
      "property2": "string"
    },
    "p": {
      "rf": "string",
      "url": "string"
    },
    "q": {
      "en": {},
      "he": {},
      "hve": "string",
      "mt": "string"
    },
    "r": {
      "dbs": 0,
      "ebs": 0,
      "he": {},
      "sc": 0,
      "ts": 0
    },
    "se": {
      "a": {
        "n": "string",
        "ve": "string"
      },
      "en": "string",
      "fw": {
        "n": "string",
        "ve": "string"
      },
      "la": {
        "n": "string",
        "ve": "string"
      },
      "n": "string",
      "ru": {
        "n": "string",
        "ve": "string"
      },
      "ve": "string"
    },
    "u": {
      "em": "string",
      "id": "string",
      "ud": "string",
      "un": "string"
    }
  },
  "cl": "string",
  "id": "string",
  "log": {
    "ln": "string",
    "lv": "string",
    "mg": "string",
    "pmg": "string",
    "st": [
      {
        "ap": "string",
        "cli": "string",
        "cn": "string",
        "co": 0,
        "f": "string",
        "fn": "string",
        "li": 0,
        "mo": "string",
        "poc": [
          "string"
        ],
        "prc": [
          "string"
        ]
      }
    ]
  },
  "pid": "string",
  "tid": "string",
  "timestamp": 0,
  "x": {
    "n": "string",
    "sm": true,
    "t": "string"
  },
  "xid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|c|null \| object|false|none|Context holds arbitrary contextual information for the event.|
|cl|null \| string|false|none|Culprit identifies the function call which was the primary perpetrator of this event.|
|ex|null \| object|false|none|Exception holds information about the original error. The information is language specific.|
|id|string|true|none|ID holds the hex encoded 128 random bits ID of the event.|
|log|null \| object|false|none|Log holds additional information added when the error is logged.|
|pid|null \| string|false|none|ParentID holds the hex encoded 64 random bits ID of the parent transaction or span.|
|tid|null \| string|false|none|TraceID holds the hex encoded 128 random bits ID of the correlated trace.|
|timestamp|null \| integer|false|none|Timestamp holds the recorded time of the event, UTC based and formatted as microseconds since Unix epoch.|
|x|null \| object|false|none|Transaction holds information about the correlated transaction.|
|xid|null \| string|false|none|TransactionID holds the hex encoded 64 random bits ID of the correlated transaction.|
|*anyOf*|object|false|none|none|
|ex|object|true|none|none|
|*anyOf*|object|false|none|none|
|log|object|true|none|none|

<h2 id="tocS_ErrorEventv3">ErrorEventv3</h2>
<!-- backwards compatibility -->
<a id="schemaerroreventv3"></a>
<a id="schema_ErrorEventv3"></a>
<a id="tocSerroreventv3"></a>
<a id="tocserroreventv3"></a>

```json
{
  "error": {
    "ex": {
      "mg": "string",
      "at": {},
      "ca": [
        {}
      ],
      "cd": "string",
      "hd": true,
      "mo": "string",
      "st": [
        {
          "ap": "string",
          "cli": "string",
          "cn": "string",
          "co": 0,
          "f": "string",
          "fn": "string",
          "li": 0,
          "mo": "string",
          "poc": [
            "string"
          ],
          "prc": [
            "string"
          ]
        }
      ],
      "t": "string"
    },
    "c": {
      "cu": {},
      "g": {
        "property1": "string",
        "property2": "string"
      },
      "p": {
        "rf": "string",
        "url": "string"
      },
      "q": {
        "en": {},
        "he": {},
        "hve": "string",
        "mt": "string"
      },
      "r": {
        "dbs": 0,
        "ebs": 0,
        "he": {},
        "sc": 0,
        "ts": 0
      },
      "se": {
        "a": {
          "n": "string",
          "ve": "string"
        },
        "en": "string",
        "fw": {
          "n": "string",
          "ve": "string"
        },
        "la": {
          "n": "string",
          "ve": "string"
        },
        "n": "string",
        "ru": {
          "n": "string",
          "ve": "string"
        },
        "ve": "string"
      },
      "u": {
        "em": "string",
        "id": "string",
        "ud": "string",
        "un": "string"
      }
    },
    "cl": "string",
    "id": "string",
    "log": {
      "ln": "string",
      "lv": "string",
      "mg": "string",
      "pmg": "string",
      "st": [
        {
          "ap": "string",
          "cli": "string",
          "cn": "string",
          "co": 0,
          "f": "string",
          "fn": "string",
          "li": 0,
          "mo": "string",
          "poc": [
            "string"
          ],
          "prc": [
            "string"
          ]
        }
      ]
    },
    "pid": "string",
    "tid": "string",
    "timestamp": 0,
    "x": {
      "n": "string",
      "sm": true,
      "t": "string"
    },
    "xid": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[error-2](#schemaerror-2)|true|none|none|

<h2 id="tocS_metadata-2">metadata-2</h2>
<!-- backwards compatibility -->
<a id="schemametadata-2"></a>
<a id="schema_metadata-2"></a>
<a id="tocSmetadata-2"></a>
<a id="tocsmetadata-2"></a>

```json
{
  "l": {
    "property1": "string",
    "property2": "string"
  },
  "n": {
    "c": {
      "t": "string"
    }
  },
  "se": {
    "a": {
      "n": "string",
      "ve": "string"
    },
    "en": "string",
    "fw": {
      "n": "string",
      "ve": "string"
    },
    "la": {
      "n": "string",
      "ve": "string"
    },
    "n": "string",
    "ru": {
      "n": "string",
      "ve": "string"
    },
    "ve": "string"
  },
  "u": {
    "em": "string",
    "id": "string",
    "ud": "string",
    "un": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|l|null \| object|false|none|Labels are a flat mapping of user-defined tags. Allowed value types are string, boolean and number values. Labels are indexed and searchable.|
|n|null \| object|false|none|Network holds information about the network over which the monitored service is communicating.|
|se|object|true|none|Service metadata about the monitored service.|
|u|null \| object|false|none|User metadata, which can be overwritten on a per event basis.|

<h2 id="tocS_MetadataEventv3">MetadataEventv3</h2>
<!-- backwards compatibility -->
<a id="schemametadataeventv3"></a>
<a id="schema_MetadataEventv3"></a>
<a id="tocSmetadataeventv3"></a>
<a id="tocsmetadataeventv3"></a>

```json
{
  "metadata": {
    "l": {
      "property1": "string",
      "property2": "string"
    },
    "n": {
      "c": {
        "t": "string"
      }
    },
    "se": {
      "a": {
        "n": "string",
        "ve": "string"
      },
      "en": "string",
      "fw": {
        "n": "string",
        "ve": "string"
      },
      "la": {
        "n": "string",
        "ve": "string"
      },
      "n": "string",
      "ru": {
        "n": "string",
        "ve": "string"
      },
      "ve": "string"
    },
    "u": {
      "em": "string",
      "id": "string",
      "ud": "string",
      "un": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|[metadata-2](#schemametadata-2)|true|none|none|

<h2 id="tocS_span-2">span-2</h2>
<!-- backwards compatibility -->
<a id="schemaspan-2"></a>
<a id="schema_span-2"></a>
<a id="tocSspan-2"></a>
<a id="tocsspan-2"></a>

```json
{
  "ac": "string",
  "c": {
    "dt": {
      "ad": "string",
      "po": 0,
      "se": {
        "n": "string",
        "rc": "string",
        "t": "string"
      }
    },
    "g": {
      "property1": "string",
      "property2": "string"
    },
    "h": {
      "mt": "string",
      "r": {
        "dbs": 0,
        "ebs": 0,
        "ts": 0
      },
      "sc": 0,
      "url": "string"
    },
    "se": {
      "a": {
        "n": "string",
        "ve": "string"
      },
      "n": "string"
    }
  },
  "d": 0,
  "id": "string",
  "n": "string",
  "o": "success",
  "pi": 0,
  "s": 0,
  "sr": 0,
  "st": [
    {
      "ap": "string",
      "cli": "string",
      "cn": "string",
      "co": 0,
      "f": "string",
      "fn": "string",
      "li": 0,
      "mo": "string",
      "poc": [
        "string"
      ],
      "prc": [
        "string"
      ]
    }
  ],
  "su": "string",
  "sy": true,
  "t": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ac|null \| string|false|none|Action holds the specific kind of event within the sub-type represented by the span (e.g. query, connect)|
|c|null \| object|false|none|Context holds arbitrary contextual information for the event.|
|d|number|true|none|Duration of the span in milliseconds|
|id|string|true|none|ID holds the hex encoded 64 random bits ID of the event.|
|n|string|true|none|Name is the generic designation of a span in the scope of a transaction.|
|o|null \| string|false|none|Outcome of the span: success, failure, or unknown. Outcome may be one of a limited set of permitted values describing the success or failure of the span. It can be used for calculating error rates for outgoing requests.|
|pi|null \| integer|false|none|ParentIndex is the index of the parent span in the list. Absent when the parent is a transaction.|
|s|number|true|none|Start is the offset relative to the transaction's timestamp identifying the start of the span, in milliseconds.|
|sr|null \| number|false|none|SampleRate applied to the monitored service at the time where this span was recorded.|
|st|[object]|false|none|Stacktrace connected to this span event.|
|su|null \| string|false|none|Subtype is a further sub-division of the type (e.g. postgresql, elasticsearch)|
|sy|null \| boolean|false|none|Sync indicates whether the span was executed synchronously or asynchronously.|
|t|string|true|none|Type holds the span's type, and can have specific keywords within the service's domain (eg: 'request', 'backgroundjob', etc)|

#### Enumerated Values

|Property|Value|
|---|---|
|o|success|
|o|failure|
|o|unknown|
|o|null|

<h2 id="tocS_SpanEventv3">SpanEventv3</h2>
<!-- backwards compatibility -->
<a id="schemaspaneventv3"></a>
<a id="schema_SpanEventv3"></a>
<a id="tocSspaneventv3"></a>
<a id="tocsspaneventv3"></a>

```json
{
  "span": {
    "ac": "string",
    "c": {
      "dt": {
        "ad": "string",
        "po": 0,
        "se": {
          "n": "string",
          "rc": "string",
          "t": "string"
        }
      },
      "g": {
        "property1": "string",
        "property2": "string"
      },
      "h": {
        "mt": "string",
        "r": {
          "dbs": 0,
          "ebs": 0,
          "ts": 0
        },
        "sc": 0,
        "url": "string"
      },
      "se": {
        "a": {
          "n": "string",
          "ve": "string"
        },
        "n": "string"
      }
    },
    "d": 0,
    "id": "string",
    "n": "string",
    "o": "success",
    "pi": 0,
    "s": 0,
    "sr": 0,
    "st": [
      {
        "ap": "string",
        "cli": "string",
        "cn": "string",
        "co": 0,
        "f": "string",
        "fn": "string",
        "li": 0,
        "mo": "string",
        "poc": [
          "string"
        ],
        "prc": [
          "string"
        ]
      }
    ],
    "su": "string",
    "sy": true,
    "t": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|span|[span-2](#schemaspan-2)|true|none|none|

<h2 id="tocS_transaction-2">transaction-2</h2>
<!-- backwards compatibility -->
<a id="schematransaction-2"></a>
<a id="schema_transaction-2"></a>
<a id="tocStransaction-2"></a>
<a id="tocstransaction-2"></a>

```json
{
  "c": {
    "cu": {},
    "g": {
      "property1": "string",
      "property2": "string"
    },
    "p": {
      "rf": "string",
      "url": "string"
    },
    "q": {
      "en": {},
      "he": {},
      "hve": "string",
      "mt": "string"
    },
    "r": {
      "dbs": 0,
      "ebs": 0,
      "he": {},
      "sc": 0,
      "ts": 0
    },
    "se": {
      "a": {
        "n": "string",
        "ve": "string"
      },
      "en": "string",
      "fw": {
        "n": "string",
        "ve": "string"
      },
      "la": {
        "n": "string",
        "ve": "string"
      },
      "n": "string",
      "ru": {
        "n": "string",
        "ve": "string"
      },
      "ve": "string"
    },
    "u": {
      "em": "string",
      "id": "string",
      "ud": "string",
      "un": "string"
    }
  },
  "d": 0,
  "exp": {
    "cls": 0,
    "fid": 0,
    "lt": {
      "count": 0,
      "max": 0,
      "sum": 0
    },
    "tbt": 0
  },
  "id": "string",
  "k": {
    "property1": {
      "property1": 0,
      "property2": 0
    },
    "property2": {
      "property1": 0,
      "property2": 0
    }
  },
  "me": [
    {
      "sa": {
        "ysc": {
          "v": 0
        },
        "yss": {
          "v": 0
        }
      },
      "y": {
        "su": "string",
        "t": "string"
      }
    }
  ],
  "n": "string",
  "o": "success",
  "pid": "string",
  "rt": "string",
  "ses": {
    "id": "string",
    "seq": 1
  },
  "sm": true,
  "sr": 0,
  "t": "string",
  "tid": "string",
  "y": [
    {
      "ac": "string",
      "c": {
        "dt": {
          "ad": "string",
          "po": 0,
          "se": {
            "n": "string",
            "rc": "string",
            "t": "string"
          }
        },
        "g": {
          "property1": "string",
          "property2": "string"
        },
        "h": {
          "mt": "string",
          "r": {
            "dbs": 0,
            "ebs": 0,
            "ts": 0
          },
          "sc": 0,
          "url": "string"
        },
        "se": {
          "a": {
            "n": "string",
            "ve": "string"
          },
          "n": "string"
        }
      },
      "d": 0,
      "id": "string",
      "n": "string",
      "o": "success",
      "pi": 0,
      "s": 0,
      "sr": 0,
      "st": [
        {
          "ap": "string",
          "cli": "string",
          "cn": "string",
          "co": 0,
          "f": "string",
          "fn": "string",
          "li": 0,
          "mo": "string",
          "poc": [
            "string"
          ],
          "prc": [
            "string"
          ]
        }
      ],
      "su": "string",
      "sy": true,
      "t": "string"
    }
  ],
  "yc": {
    "dd": 0,
    "sd": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|c|null \| object|false|none|Context holds arbitrary contextual information for the event.|
|d|number|true|none|Duration how long the transaction took to complete, in milliseconds with 3 decimal points.|
|exp|null \| object|false|none|UserExperience holds metrics for measuring real user experience. This information is only sent by RUM agents.|
|id|string|true|none|ID holds the hex encoded 64 random bits ID of the event.|
|k|null \| object|false|none|Marks capture the timing of a significant event during the lifetime of a transaction. Marks are organized into groups and can be set by the user or the agent. Marks are only reported by RUM agents.|
|me|[object]|false|none|Metricsets is a collection metrics related to this transaction.|
|n|null \| string|false|none|Name is the generic designation of a transaction in the scope of a single service, eg: 'GET /users/:id'.|
|o|null \| string|false|none|Outcome of the transaction with a limited set of permitted values, describing the success or failure of the transaction from the service's perspective. It is used for calculating error rates for incoming requests. Permitted values: success, failure, unknown.|
|pid|null \| string|false|none|ParentID holds the hex encoded 64 random bits ID of the parent transaction or span.|
|rt|null \| string|false|none|Result of the transaction. For HTTP-related transactions, this should be the status code formatted like 'HTTP 2xx'.|
|ses|null \| object|false|none|Session holds optional transaction session information for RUM.|
|sm|null \| boolean|false|none|Sampled indicates whether or not the full information for a transaction is captured. If a transaction is unsampled no spans and less context information will be reported.|
|sr|null \| number|false|none|SampleRate applied to the monitored service at the time where this transaction was recorded. Allowed values are [0..1]. A SampleRate <1 indicates that not all spans are recorded.|
|t|string|true|none|Type expresses the transaction's type as keyword that has specific relevance within the service's domain, eg: 'request', 'backgroundjob'.|
|tid|string|true|none|TraceID holds the hex encoded 128 random bits ID of the correlated trace.|
|y|[object]|false|none|Spans is a collection of spans related to this transaction.|
|yc|object|true|none|SpanCount counts correlated spans.|

#### Enumerated Values

|Property|Value|
|---|---|
|o|success|
|o|failure|
|o|unknown|
|o|null|

<h2 id="tocS_TransactionEventv3">TransactionEventv3</h2>
<!-- backwards compatibility -->
<a id="schematransactioneventv3"></a>
<a id="schema_TransactionEventv3"></a>
<a id="tocStransactioneventv3"></a>
<a id="tocstransactioneventv3"></a>

```json
{
  "transaction": {
    "c": {
      "cu": {},
      "g": {
        "property1": "string",
        "property2": "string"
      },
      "p": {
        "rf": "string",
        "url": "string"
      },
      "q": {
        "en": {},
        "he": {},
        "hve": "string",
        "mt": "string"
      },
      "r": {
        "dbs": 0,
        "ebs": 0,
        "he": {},
        "sc": 0,
        "ts": 0
      },
      "se": {
        "a": {
          "n": "string",
          "ve": "string"
        },
        "en": "string",
        "fw": {
          "n": "string",
          "ve": "string"
        },
        "la": {
          "n": "string",
          "ve": "string"
        },
        "n": "string",
        "ru": {
          "n": "string",
          "ve": "string"
        },
        "ve": "string"
      },
      "u": {
        "em": "string",
        "id": "string",
        "ud": "string",
        "un": "string"
      }
    },
    "d": 0,
    "exp": {
      "cls": 0,
      "fid": 0,
      "lt": {
        "count": 0,
        "max": 0,
        "sum": 0
      },
      "tbt": 0
    },
    "id": "string",
    "k": {
      "property1": {
        "property1": 0,
        "property2": 0
      },
      "property2": {
        "property1": 0,
        "property2": 0
      }
    },
    "me": [
      {
        "sa": {
          "ysc": {
            "v": 0
          },
          "yss": {
            "v": 0
          }
        },
        "y": {
          "su": "string",
          "t": "string"
        }
      }
    ],
    "n": "string",
    "o": "success",
    "pid": "string",
    "rt": "string",
    "ses": {
      "id": "string",
      "seq": 1
    },
    "sm": true,
    "sr": 0,
    "t": "string",
    "tid": "string",
    "y": [
      {
        "ac": "string",
        "c": {
          "dt": {
            "ad": "string",
            "po": 0,
            "se": {
              "n": "string",
              "rc": "string",
              "t": "string"
            }
          },
          "g": {
            "property1": "string",
            "property2": "string"
          },
          "h": {
            "mt": "string",
            "r": {
              "dbs": 0,
              "ebs": 0,
              "ts": 0
            },
            "sc": 0,
            "url": "string"
          },
          "se": {
            "a": {
              "n": "string",
              "ve": "string"
            },
            "n": "string"
          }
        },
        "d": 0,
        "id": "string",
        "n": "string",
        "o": "success",
        "pi": 0,
        "s": 0,
        "sr": 0,
        "st": [
          {
            "ap": "string",
            "cli": "string",
            "cn": "string",
            "co": 0,
            "f": "string",
            "fn": "string",
            "li": 0,
            "mo": "string",
            "poc": [
              "string"
            ],
            "prc": [
              "string"
            ]
          }
        ],
        "su": "string",
        "sy": true,
        "t": "string"
      }
    ],
    "yc": {
      "dd": 0,
      "sd": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transaction|[transaction-2](#schematransaction-2)|true|none|none|
