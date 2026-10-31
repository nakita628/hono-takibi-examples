<h1 id="rest-admin-api">REST Admin API v3.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="http://localhost:8082/v3">http://localhost:8082/v3</a> - Kafka REST Proxy. See https://docs.confluent.io/current/kafka-rest/index.html.

* <a href="http://localhost:8090/kafka/v3">http://localhost:8090/kafka/v3</a> - Kafka REST Proxy as part of Confluent Server.

* <a href="https://pkc-00000.region.provider.confluent.cloud/kafka/v3">https://pkc-00000.region.provider.confluent.cloud/kafka/v3</a> - Confluent Cloud REST Endpoint. For example https://pkc-00000.region.provider.confluent.cloud

Email: <a href="mailto:kafka-clients-proxy-team@confluent.io">Kafka REST Team</a> 
Web: <a href="https://confluent.slack.com/app_redirect?channel=kafka-rest-eng">Kafka REST Team</a> 

<h1 id="rest-admin-api-cluster-v3">Cluster (v3)</h1>

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

## List Clusters

<a id="opIdlistKafkaClusters"></a>

> Code samples

```bash
curl http://localhost:8082/v3/clusters \
  -H 'Accept: application/json'
```

`GET /clusters`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

'Return a list of known Kafka clusters. Currently both Kafka and Kafka REST
Proxy are only aware of the Kafka cluster pointed at by the
``bootstrap.servers`` configuration. Therefore only one Kafka cluster will be returned in the
response.'

> Example responses

> 200 Response

```json
{
  "kind": "KafkaClusterList",
  "metadata": {
    "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters",
    "next": null
  },
  "data": [
    {
      "kind": "KafkaCluster",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1",
        "resource_name": "crn:///kafka=cluster-1"
      },
      "cluster_id": "cluster-1",
      "controller": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1"
      },
      "acls": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/acls"
      },
      "brokers": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers"
      },
      "broker_configs": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/broker-configs"
      },
      "consumer_groups": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups"
      },
      "topics": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics"
      },
      "partition_reassignments": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/-/partitions/-/reassignment"
      }
    }
  ]
}
```

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="list-clusters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of Kafka clusters.|[ClusterDataList](#schemaclusterdatalist)|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Cluster

<a id="opIdgetKafkaCluster"></a>

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1 \
  -H 'Accept: application/json'
```

`GET /clusters/{cluster_id}`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Return the Kafka cluster with the specified ``cluster_id``.

<h3 id="get-cluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|

> Example responses

> 200 Response

```json
{
  "kind": "KafkaCluster",
  "metadata": {
    "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1",
    "resource_name": "crn:///kafka=cluster-1"
  },
  "cluster_id": "cluster-1",
  "controller": {
    "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1"
  },
  "acls": {
    "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/acls"
  },
  "brokers": {
    "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers"
  },
  "broker_configs": {
    "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/broker-configs"
  },
  "consumer_groups": {
    "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups"
  },
  "topics": {
    "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics"
  },
  "partition_reassignments": {
    "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/-/partitions/-/reassignment"
  }
}
```

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="get-cluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Kafka cluster.|[ClusterData](#schemaclusterdata)|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="rest-admin-api-configs-v3">Configs (v3)</h1>

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

## List Dynamic Broker Configs

<a id="opIdlistKafkaClusterConfigs"></a>

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/broker-configs \
  -H 'Accept: application/json'
```

`GET /clusters/{cluster_id}/broker-configs`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Return a list of dynamic cluster-wide broker configuration parameters for the specified Kafka
cluster. Returns an empty list if there are no dynamic cluster-wide broker configuration parameters.

<h3 id="list-dynamic-broker-configs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|

> Example responses

> 200 Response

```json
{
  "kind": "KafkaClusterConfigList",
  "metadata": {
    "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/broker-configs",
    "next": null
  },
  "data": [
    {
      "kind": "KafkaClusterConfig",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/broker-configs/max.connections",
        "resource_name": "crn:///kafka=cluster-1/broker-config=max.connections"
      },
      "cluster_id": "cluster-1",
      "config_type": "BROKER",
      "name": "max.connections",
      "value": "1000",
      "is_default": false,
      "is_read_only": false,
      "is_sensitive": false,
      "source": "DYNAMIC_DEFAULT_BROKER_CONFIG",
      "synonyms": [
        {
          "name": "max.connections",
          "value": "1000",
          "source": "DYNAMIC_DEFAULT_BROKER_CONFIG"
        },
        {
          "name": "max.connections",
          "value": "2147483647",
          "source": "DEFAULT_CONFIG"
        }
      ]
    },
    {
      "kind": "KafkaClusterConfig",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/broker-configs/compression.type",
        "resource_name": "crn:///kafka=cluster-1/broker-config=compression.type"
      },
      "cluster_id": "cluster-1",
      "config_type": "BROKER",
      "name": "compression.type",
      "value": "gzip",
      "is_default": false,
      "is_read_only": false,
      "is_sensitive": false,
      "source": "DYNAMIC_DEFAULT_BROKER_CONFIG",
      "synonyms": [
        {
          "name": "compression.type",
          "value": "gzip",
          "source": "DYNAMIC_DEFAULT_BROKER_CONFIG"
        },
        {
          "name": "compression.type",
          "value": "producer",
          "source": "DEFAULT_CONFIG"
        }
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="list-dynamic-broker-configs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of cluster configs.|[ClusterConfigDataList](#schemaclusterconfigdatalist)|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Batch Alter Dynamic Broker Configs

<a id="opIdupdateKafkaClusterConfigs"></a>

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/broker-configs:alter \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "data": [
      {
        "name": "max.connections",
        "operation": "DELETE"
      },
      {
        "name": "compression.type",
        "value": "gzip"
      }
    ]
  }'
```

`POST /clusters/{cluster_id}/broker-configs:alter`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Update or delete a set of dynamic cluster-wide broker configuration parameters.

> Body parameter

```json
{
  "data": [
    {
      "name": "max.connections",
      "operation": "DELETE"
    },
    {
      "name": "compression.type",
      "value": "gzip"
    }
  ]
}
```

<h3 id="batch-alter-dynamic-broker-configs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|
|body|body|[AlterConfigBatchRequestData](#schemaalterconfigbatchrequestdata)|false|The alter cluster configuration parameter batch request.|
|» data|body|[object]|true|none|
|» » name|body|string|true|none|
|» » value|body|string \| null|false|none|
|» » operation|body|string \| null|false|none|
|» validate_only|body|boolean|false|none|

> Example responses

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="batch-alter-dynamic-broker-configs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Dynamic Broker Config

<a id="opIdgetKafkaClusterConfig"></a>

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/broker-configs/compression.type \
  -H 'Accept: application/json'
```

`GET /clusters/{cluster_id}/broker-configs/{name}`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Return the dynamic cluster-wide broker configuration parameter specified by ``name``.

<h3 id="get-dynamic-broker-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|
|name|path|string|true|The configuration parameter name.|

> Example responses

> 200 Response

```json
{
  "kind": "KafkaClusterConfig",
  "metadata": {
    "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/broker-configs/compression.type",
    "resource_name": "crn:///kafka=cluster-1/broker-config=compression.type"
  },
  "cluster_id": "cluster-1",
  "config_type": "BROKER",
  "name": "compression.type",
  "value": "gzip",
  "is_default": false,
  "is_read_only": false,
  "is_sensitive": false,
  "source": "DYNAMIC_DEFAULT_BROKER_CONFIG",
  "synonyms": [
    {
      "name": "compression.type",
      "value": "gzip",
      "source": "DYNAMIC_DEFAULT_BROKER_CONFIG"
    },
    {
      "name": "compression.type",
      "value": "producer",
      "source": "DEFAULT_CONFIG"
    }
  ]
}
```

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="get-dynamic-broker-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The cluster configuration parameter.|[ClusterConfigData](#schemaclusterconfigdata)|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update Dynamic Broker Config

<a id="opIdupdateKafkaClusterConfig"></a>

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/broker-configs/compression.type \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "value": "gzip"
  }'
```

`PUT /clusters/{cluster_id}/broker-configs/{name}`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Update the dynamic cluster-wide broker configuration parameter specified by ``name``.

> Body parameter

```json
{
  "value": "gzip"
}
```

<h3 id="update-dynamic-broker-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|
|name|path|string|true|The configuration parameter name.|
|body|body|[UpdateConfigRequestData](#schemaupdateconfigrequestdata)|false|The cluster configuration parameter update request.|
|» value|body|string \| null|false|none|

> Example responses

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="update-dynamic-broker-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Reset Dynamic Broker Config

<a id="opIddeleteKafkaClusterConfig"></a>

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/broker-configs/compression.type \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /clusters/{cluster_id}/broker-configs/{name}`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Reset the configuration parameter specified by ``name`` to its
default value by deleting a dynamic cluster-wide configuration.

<h3 id="reset-dynamic-broker-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|
|name|path|string|true|The configuration parameter name.|

> Example responses

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="reset-dynamic-broker-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List Dynamic Broker Configs

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/brokers/-/configs \
  -H 'Accept: application/json'
```

`GET /clusters/{cluster_id}/brokers/-/configs`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Return the list of dynamic configuration parameters for all the brokers in the given Kafka cluster.

<h3 id="list-dynamic-broker-configs-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|

> Example responses

> 200 Response

```json
{
  "kind": "KafkaBrokerConfigList",
  "metadata": {
    "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1/configs",
    "next": null
  },
  "data": [
    {
      "kind": "KafkaBrokerConfig",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1/configs/max.connections",
        "resource_name": "crn:///kafka=cluster-1/broker=1/config=max.connections"
      },
      "cluster_id": "cluster-1",
      "broker_id": 1,
      "name": "max.connections",
      "value": "1000",
      "is_default": false,
      "is_read_only": false,
      "is_sensitive": false,
      "source": "DYNAMIC_BROKER_CONFIG",
      "synonyms": [
        {
          "name": "max.connections",
          "value": "1000",
          "source": "DYNAMIC_BROKER_CONFIG"
        },
        {
          "name": "max.connections",
          "value": "2147483647",
          "source": "DEFAULT_CONFIG"
        }
      ]
    },
    {
      "kind": "KafkaBrokerConfig",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1/configs/compression.type",
        "resource_name": "crn:///kafka=cluster-1/broker=1/config=compression.type"
      },
      "cluster_id": "cluster-1",
      "broker_id": 1,
      "name": "compression.type",
      "value": "gzip",
      "is_default": false,
      "is_read_only": false,
      "is_sensitive": false,
      "source": "DYNAMIC_BROKER_CONFIG",
      "synonyms": [
        {
          "name": "compression.type",
          "value": "gzip",
          "source": "DYNAMIC_BROKER_CONFIG"
        },
        {
          "name": "compression.type",
          "value": "producer",
          "source": "DEFAULT_CONFIG"
        }
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="list-dynamic-broker-configs-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of broker configs.|[BrokerConfigDataList](#schemabrokerconfigdatalist)|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List Broker Configs

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/brokers/1/configs \
  -H 'Accept: application/json'
```

`GET /clusters/{cluster_id}/brokers/{broker_id}/configs`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Return the list of configuration parameters that belong to the specified Kafka broker.

<h3 id="list-broker-configs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|
|broker_id|path|integer|true|The broker ID.|

> Example responses

> 200 Response

```json
{
  "kind": "KafkaBrokerConfigList",
  "metadata": {
    "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1/configs",
    "next": null
  },
  "data": [
    {
      "kind": "KafkaBrokerConfig",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1/configs/max.connections",
        "resource_name": "crn:///kafka=cluster-1/broker=1/config=max.connections"
      },
      "cluster_id": "cluster-1",
      "broker_id": 1,
      "name": "max.connections",
      "value": "1000",
      "is_default": false,
      "is_read_only": false,
      "is_sensitive": false,
      "source": "DYNAMIC_BROKER_CONFIG",
      "synonyms": [
        {
          "name": "max.connections",
          "value": "1000",
          "source": "DYNAMIC_BROKER_CONFIG"
        },
        {
          "name": "max.connections",
          "value": "2147483647",
          "source": "DEFAULT_CONFIG"
        }
      ]
    },
    {
      "kind": "KafkaBrokerConfig",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1/configs/compression.type",
        "resource_name": "crn:///kafka=cluster-1/broker=1/config=compression.type"
      },
      "cluster_id": "cluster-1",
      "broker_id": 1,
      "name": "compression.type",
      "value": "gzip",
      "is_default": false,
      "is_read_only": false,
      "is_sensitive": false,
      "source": "DYNAMIC_BROKER_CONFIG",
      "synonyms": [
        {
          "name": "compression.type",
          "value": "gzip",
          "source": "DYNAMIC_BROKER_CONFIG"
        },
        {
          "name": "compression.type",
          "value": "producer",
          "source": "DEFAULT_CONFIG"
        }
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="list-broker-configs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of broker configs.|[BrokerConfigDataList](#schemabrokerconfigdatalist)|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Batch Alter Broker Configs

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/brokers/1/configs:alter \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "data": [
      {
        "name": "max.connections",
        "operation": "DELETE"
      },
      {
        "name": "compression.type",
        "value": "gzip"
      }
    ]
  }'
```

`POST /clusters/{cluster_id}/brokers/{broker_id}/configs:alter`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Update or delete a set of broker configuration parameters.

> Body parameter

```json
{
  "data": [
    {
      "name": "max.connections",
      "operation": "DELETE"
    },
    {
      "name": "compression.type",
      "value": "gzip"
    }
  ]
}
```

<h3 id="batch-alter-broker-configs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|
|broker_id|path|integer|true|The broker ID.|
|body|body|[AlterConfigBatchRequestData](#schemaalterconfigbatchrequestdata)|false|The alter broker configuration parameter batch request.|
|» data|body|[object]|true|none|
|» » name|body|string|true|none|
|» » value|body|string \| null|false|none|
|» » operation|body|string \| null|false|none|
|» validate_only|body|boolean|false|none|

> Example responses

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="batch-alter-broker-configs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Broker Config

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/brokers/1/configs/compression.type \
  -H 'Accept: application/json'
```

`GET /clusters/{cluster_id}/brokers/{broker_id}/configs/{name}`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Return the configuration parameter specified by ``name``.

<h3 id="get-broker-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|
|broker_id|path|integer|true|The broker ID.|
|name|path|string|true|The configuration parameter name.|

> Example responses

> 200 Response

```json
{
  "kind": "KafkaBrokerConfig",
  "metadata": {
    "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1/configs/compression.type",
    "resource_name": "crn:///kafka=cluster-1/broker=1/config=compression.type"
  },
  "cluster_id": "cluster-1",
  "broker_id": 1,
  "name": "compression.type",
  "value": "gzip",
  "is_default": false,
  "is_read_only": false,
  "is_sensitive": false,
  "source": "DYNAMIC_BROKER_CONFIG",
  "synonyms": [
    {
      "name": "compression.type",
      "value": "gzip",
      "source": "DYNAMIC_BROKER_CONFIG"
    },
    {
      "name": "compression.type",
      "value": "producer",
      "source": "DEFAULT_CONFIG"
    }
  ]
}
```

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="get-broker-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The broker configuration parameter.|[BrokerConfigData](#schemabrokerconfigdata)|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update Broker Config

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/brokers/1/configs/compression.type \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "value": "gzip"
  }'
```

`PUT /clusters/{cluster_id}/brokers/{broker_id}/configs/{name}`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Update the configuration parameter specified by ``name``.

> Body parameter

```json
{
  "value": "gzip"
}
```

<h3 id="update-broker-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|
|broker_id|path|integer|true|The broker ID.|
|name|path|string|true|The configuration parameter name.|
|body|body|[UpdateConfigRequestData](#schemaupdateconfigrequestdata)|false|The broker configuration parameter update request.|
|» value|body|string \| null|false|none|

> Example responses

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="update-broker-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Reset Broker Config

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/brokers/1/configs/compression.type \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /clusters/{cluster_id}/brokers/{broker_id}/configs/{name}`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Reset the configuration parameter specified by ``name`` to its default value.

<h3 id="reset-broker-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|
|broker_id|path|integer|true|The broker ID.|
|name|path|string|true|The configuration parameter name.|

> Example responses

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="reset-broker-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List Topic Configs

<a id="opIdlistKafkaTopicConfigs"></a>

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/topics/topic-1/configs \
  -H 'Accept: application/json'
```

`GET /clusters/{cluster_id}/topics/{topic_name}/configs`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Return the list of configuration parameters that belong to the specified topic.

<h3 id="list-topic-configs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|
|topic_name|path|string|true|The topic name.|

> Example responses

> 200 Response

```json
{
  "kind": "KafkaTopicConfigList",
  "metadata": {
    "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/configs",
    "next": null
  },
  "data": [
    {
      "kind": "KafkaTopicConfig",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/configs/cleanup.policy",
        "resource_name": "crn:///kafka=cluster-1/topic=topic-1/config=cleanup.policy"
      },
      "cluster_id": "cluster-1",
      "topic_name": "topic-1",
      "name": "cleanup.policy",
      "value": "compact",
      "is_default": false,
      "is_read_only": false,
      "is_sensitive": false,
      "source": "DYNAMIC_TOPIC_CONFIG",
      "synonyms": [
        {
          "name": "cleanup.policy",
          "value": "compact",
          "source": "DYNAMIC_TOPIC_CONFIG"
        },
        {
          "name": "cleanup.policy",
          "value": "delete",
          "source": "DEFAULT_CONFIG"
        }
      ]
    },
    {
      "kind": "KafkaTopicConfig",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/configs/compression.type",
        "resource_name": "crn:///kafka=cluster-1/topic=topic-1/config=compression.type"
      },
      "cluster_id": "cluster-1",
      "topic_name": "topic-1",
      "name": "compression.type",
      "value": "gzip",
      "is_default": false,
      "is_read_only": false,
      "is_sensitive": false,
      "source": "DYNAMIC_TOPIC_CONFIG",
      "synonyms": [
        {
          "name": "compression.type",
          "value": "gzip",
          "source": "DYNAMIC_TOPIC_CONFIG"
        },
        {
          "name": "compression.type",
          "value": "producer",
          "source": "DEFAULT_CONFIG"
        }
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "HTTP 404 Not Found"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="list-topic-configs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of cluster configs.|[TopicConfigDataList](#schematopicconfigdatalist)|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|404|Not Found|Indicates attempted access to an unreachable or non-existing resource like e.g. an unknown topic or partition. GET requests to endpoints not allowed in the accesslists will also result in this response.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Batch Alter Topic Configs

<a id="opIdupdateKafkaTopicConfigBatch"></a>

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/topics/topic-1/configs:alter \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "data": [
      {
        "name": "cleanup.policy",
        "operation": "DELETE"
      },
      {
        "name": "compression.type",
        "value": "gzip"
      }
    ]
  }'
```

`POST /clusters/{cluster_id}/topics/{topic_name}/configs:alter`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Update or delete a set of topic configuration parameters.
Also supports a dry-run mode that only validates whether the operation would succeed if the
``validate_only`` request property is explicitly specified and set to true.

> Body parameter

```json
{
  "data": [
    {
      "name": "cleanup.policy",
      "operation": "DELETE"
    },
    {
      "name": "compression.type",
      "value": "gzip"
    }
  ]
}
```

<h3 id="batch-alter-topic-configs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|
|topic_name|path|string|true|The topic name.|
|body|body|[AlterConfigBatchRequestData](#schemaalterconfigbatchrequestdata)|false|The alter topic configuration parameter batch request.|
|» data|body|[object]|true|none|
|» » name|body|string|true|none|
|» » value|body|string \| null|false|none|
|» » operation|body|string \| null|false|none|
|» validate_only|body|boolean|false|none|

> Example responses

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "HTTP 404 Not Found"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="batch-alter-topic-configs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|404|Not Found|Indicates attempted access to an unreachable or non-existing resource like e.g. an unknown topic or partition. GET requests to endpoints not allowed in the accesslists will also result in this response.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Topic Config

<a id="opIdgetKafkaTopicConfig"></a>

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/topics/topic-1/configs/compression.type \
  -H 'Accept: application/json'
```

`GET /clusters/{cluster_id}/topics/{topic_name}/configs/{name}`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Return the configuration parameter with the given `name`.

<h3 id="get-topic-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|
|topic_name|path|string|true|The topic name.|
|name|path|string|true|The configuration parameter name.|

> Example responses

> 200 Response

```json
{
  "kind": "KafkaTopicConfig",
  "metadata": {
    "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/compression.type",
    "resource_name": "crn:///kafka=cluster-1/topic=topic-1/config=compression.type"
  },
  "cluster_id": "cluster-1",
  "topic_name": "topic-1",
  "name": "compression.type",
  "value": "gzip",
  "is_default": false,
  "is_read_only": false,
  "is_sensitive": false,
  "source": "DYNAMIC_TOPIC_CONFIG",
  "synonyms": [
    {
      "name": "compression.type",
      "value": "gzip",
      "source": "DYNAMIC_TOPIC_CONFIG"
    },
    {
      "name": "compression.type",
      "value": "producer",
      "source": "DEFAULT_CONFIG"
    }
  ]
}
```

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "HTTP 404 Not Found"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="get-topic-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The topic configuration parameter.|[TopicConfigData](#schematopicconfigdata)|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|404|Not Found|Indicates attempted access to an unreachable or non-existing resource like e.g. an unknown topic or partition. GET requests to endpoints not allowed in the accesslists will also result in this response.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update Topic Config

<a id="opIdupdateKafkaTopicConfig"></a>

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/topics/topic-1/configs/compression.type \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "value": "gzip"
  }'
```

`PUT /clusters/{cluster_id}/topics/{topic_name}/configs/{name}`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Update the configuration parameter with given `name`.

> Body parameter

```json
{
  "value": "gzip"
}
```

<h3 id="update-topic-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|
|topic_name|path|string|true|The topic name.|
|name|path|string|true|The configuration parameter name.|
|body|body|[UpdateConfigRequestData](#schemaupdateconfigrequestdata)|false|The topic configuration parameter update request.|
|» value|body|string \| null|false|none|

> Example responses

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "HTTP 404 Not Found"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="update-topic-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|404|Not Found|Indicates attempted access to an unreachable or non-existing resource like e.g. an unknown topic or partition. GET requests to endpoints not allowed in the accesslists will also result in this response.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Reset Topic Config

<a id="opIddeleteKafkaTopicConfig"></a>

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/topics/topic-1/configs/compression.type \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /clusters/{cluster_id}/topics/{topic_name}/configs/{name}`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Reset the configuration parameter with given `name` to its default value.

<h3 id="reset-topic-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|
|topic_name|path|string|true|The topic name.|
|name|path|string|true|The configuration parameter name.|

> Example responses

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "HTTP 404 Not Found"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="reset-topic-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|404|Not Found|Indicates attempted access to an unreachable or non-existing resource like e.g. an unknown topic or partition. GET requests to endpoints not allowed in the accesslists will also result in this response.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List All Topic Configs

<a id="opIdlistKafkaAllTopicConfigs"></a>

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/topics/-/configs \
  -H 'Accept: application/json'
```

`GET /clusters/{cluster_id}/topics/-/configs`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Return the list of configuration parameters for all topics hosted by the specified
cluster.

<h3 id="list-all-topic-configs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|

> Example responses

> 200 Response

```json
{
  "kind": "KafkaTopicConfigList",
  "metadata": {
    "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/configs",
    "next": null
  },
  "data": [
    {
      "kind": "KafkaTopicConfig",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/configs/cleanup.policy",
        "resource_name": "crn:///kafka=cluster-1/topic=topic-1/config=cleanup.policy"
      },
      "cluster_id": "cluster-1",
      "topic_name": "topic-1",
      "name": "cleanup.policy",
      "value": "compact",
      "is_default": false,
      "is_read_only": false,
      "is_sensitive": false,
      "source": "DYNAMIC_TOPIC_CONFIG",
      "synonyms": [
        {
          "name": "cleanup.policy",
          "value": "compact",
          "source": "DYNAMIC_TOPIC_CONFIG"
        },
        {
          "name": "cleanup.policy",
          "value": "delete",
          "source": "DEFAULT_CONFIG"
        }
      ]
    },
    {
      "kind": "KafkaTopicConfig",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/configs/compression.type",
        "resource_name": "crn:///kafka=cluster-1/topic=topic-1/config=compression.type"
      },
      "cluster_id": "cluster-1",
      "topic_name": "topic-1",
      "name": "compression.type",
      "value": "gzip",
      "is_default": false,
      "is_read_only": false,
      "is_sensitive": false,
      "source": "DYNAMIC_TOPIC_CONFIG",
      "synonyms": [
        {
          "name": "compression.type",
          "value": "gzip",
          "source": "DYNAMIC_TOPIC_CONFIG"
        },
        {
          "name": "compression.type",
          "value": "producer",
          "source": "DEFAULT_CONFIG"
        }
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="list-all-topic-configs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of cluster configs.|[TopicConfigDataList](#schematopicconfigdatalist)|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="rest-admin-api-broker-v3">Broker (v3)</h1>

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

## List Brokers

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/brokers \
  -H 'Accept: application/json'
```

`GET /clusters/{cluster_id}/brokers`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Return a list of brokers that belong to the specified
Kafka cluster.

<h3 id="list-brokers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|

> Example responses

> 200 Response

```json
{
  "kind": "KafkaBrokerList",
  "metadata": {
    "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers",
    "next": null
  },
  "data": [
    {
      "kind": "KafkaBroker",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1",
        "resource_name": "crn:///kafka=cluster-1/broker=1"
      },
      "cluster_id": "cluster-1",
      "broker_id": 1,
      "host": "localhost",
      "port": 9291,
      "configs": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1/configs"
      },
      "partition_replicas": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1/partition-replicas"
      }
    },
    {
      "kind": "KafkaBroker",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/2",
        "resource_name": "crn:///kafka=cluster-1/broker=2"
      },
      "cluster_id": "cluster-1",
      "broker_id": 2,
      "host": "localhost",
      "port": 9292,
      "configs": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/2/configs"
      },
      "partition_replicas": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/2/partition-replicas"
      }
    },
    {
      "kind": "KafkaBroker",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/3",
        "resource_name": "crn:///kafka=cluster-1/broker=3"
      },
      "cluster_id": "cluster-1",
      "broker_id": 3,
      "host": "localhost",
      "port": 9293,
      "configs": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/3/configs"
      },
      "partition_replicas": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/3/partition-replicas"
      }
    }
  ]
}
```

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="list-brokers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of brokers.|[BrokerDataList](#schemabrokerdatalist)|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Broker

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/brokers/1 \
  -H 'Accept: application/json'
```

`GET /clusters/{cluster_id}/brokers/{broker_id}`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Return the broker specified by ``broker_id``.

<h3 id="get-broker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|
|broker_id|path|integer|true|The broker ID.|

> Example responses

> 200 Response

```json
{
  "kind": "KafkaBroker",
  "metadata": {
    "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1",
    "resource_name": "crn:///kafka=cluster-1/broker=1"
  },
  "cluster_id": "cluster-1",
  "broker_id": 1,
  "host": "localhost",
  "port": 9291,
  "configs": {
    "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1/configs"
  },
  "partition_replicas": {
    "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1/partition-replicas"
  }
}
```

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="get-broker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The broker.|[BrokerData](#schemabrokerdata)|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List Replicas by Broker

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/brokers/1/partition-replicas \
  -H 'Accept: application/json'
```

`GET /clusters/{cluster_id}/brokers/{broker_id}/partition-replicas`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Return the list of replicas assigned to the specified broker.

<h3 id="list-replicas-by-broker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|
|broker_id|path|integer|true|The broker ID.|

> Example responses

> 200 Response

```json
{
  "kind": "KafkaReplicaList",
  "metadata": {
    "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1/partition-replicas",
    "next": null
  },
  "data": [
    {
      "kind": "KafkaReplica",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/2/replicas/1",
        "resource_name": "crn:///kafka=cluster-1/topic=topic-1/partition=2/replica=1"
      },
      "cluster_id": "cluster-1",
      "topic_name": "topic-1",
      "partition_id": 2,
      "broker_id": 1,
      "is_leader": true,
      "is_in_sync": true,
      "broker": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1"
      }
    },
    {
      "kind": "KafkaReplica",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-2/partitions/3/replicas/1",
        "resource_name": "crn:///kafka=cluster-1/topic=topic-3/partition=3/replica=1"
      },
      "cluster_id": "cluster-1",
      "topic_name": "topic-2",
      "partition_id": 3,
      "broker_id": 1,
      "is_leader": false,
      "is_in_sync": true,
      "broker": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1"
      }
    },
    {
      "kind": "KafkaReplica",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-3/partitions/1/replicas/1",
        "resource_name": "crn:///kafka=cluster-1/topic=topic-3/partition=1/replica=1"
      },
      "cluster_id": "cluster-1",
      "topic_name": "topic-3",
      "partition_id": 1,
      "broker_id": 1,
      "is_leader": false,
      "is_in_sync": false,
      "broker": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1"
      }
    }
  ]
}
```

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="list-replicas-by-broker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of replicas.|[ReplicaDataList](#schemareplicadatalist)|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="rest-admin-api-replica-v3">Replica (v3)</h1>

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

## List Replicas

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/topics/topic-1/partitions/1/replicas \
  -H 'Accept: application/json'
```

`GET /clusters/{cluster_id}/topics/{topic_name}/partitions/{partition_id}/replicas`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Return the list of replicas for the specified partition.

<h3 id="list-replicas-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|
|topic_name|path|string|true|The topic name.|
|partition_id|path|integer|true|The partition ID.|

> Example responses

> 200 Response

```json
{
  "kind": "KafkaReplicaList",
  "metadata": {
    "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1/replicas",
    "next": null
  },
  "data": [
    {
      "kind": "KafkaReplica",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1/replicas/1",
        "resource_name": "crn:///kafka=cluster-1/topic=topic-1/partition=1/replica=1"
      },
      "cluster_id": "cluster-1",
      "topic_name": "topic-1",
      "partition_id": 1,
      "broker_id": 1,
      "is_leader": true,
      "is_in_sync": true,
      "broker": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1"
      }
    },
    {
      "kind": "KafkaReplica",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1/replicas/2",
        "resource_name": "crn:///kafka=cluster-1/topic=topic-1/partition=1/replica=2"
      },
      "cluster_id": "cluster-1",
      "topic_name": "topic-1",
      "partition_id": 1,
      "broker_id": 2,
      "is_leader": false,
      "is_in_sync": true,
      "broker": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/2"
      }
    },
    {
      "kind": "KafkaReplica",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1/replicas/3",
        "resource_name": "crn:///kafka=cluster-1/topic=topic-1/partition=1/replica=3"
      },
      "cluster_id": "cluster-1",
      "topic_name": "topic-1",
      "partition_id": 1,
      "broker_id": 3,
      "is_leader": false,
      "is_in_sync": false,
      "broker": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/3"
      }
    }
  ]
}
```

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "HTTP 404 Not Found"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="list-replicas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of replicas.|[ReplicaDataList](#schemareplicadatalist)|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|404|Not Found|Indicates attempted access to an unreachable or non-existing resource like e.g. an unknown topic or partition. GET requests to endpoints not allowed in the accesslists will also result in this response.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Replica

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/topics/topic-1/partitions/1/replicas/1 \
  -H 'Accept: application/json'
```

`GET /clusters/{cluster_id}/topics/{topic_name}/partitions/{partition_id}/replicas/{broker_id}`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Return the replica for the specified partition assigned to the specified broker.

<h3 id="get-replica-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|
|topic_name|path|string|true|The topic name.|
|partition_id|path|integer|true|The partition ID.|
|broker_id|path|integer|true|The broker ID.|

> Example responses

> 200 Response

```json
{
  "kind": "KafkaReplica",
  "metadata": {
    "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1/replicas/1",
    "resource_name": "crn:///kafka=cluster-1/topic=topic-1/partition=1/replica=1"
  },
  "cluster_id": "cluster-1",
  "topic_name": "topic-1",
  "partition_id": 1,
  "broker_id": 1,
  "is_leader": true,
  "is_in_sync": true,
  "broker": {
    "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1"
  }
}
```

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "HTTP 404 Not Found"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="get-replica-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The replica.|[ReplicaData](#schemareplicadata)|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|404|Not Found|Indicates attempted access to an unreachable or non-existing resource like e.g. an unknown topic or partition. GET requests to endpoints not allowed in the accesslists will also result in this response.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="rest-admin-api-acl-v3">ACL (v3)</h1>

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

## Batch Create ACLs

<a id="opIdbatchCreateKafkaAcls"></a>

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/acls:batch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "data": [
      {
        "resource_type": "CLUSTER",
        "resource_name": "kafka-cluster",
        "pattern_type": "LITERAL",
        "principal": "principalType:principalName",
        "host": "*",
        "operation": "DESCRIBE",
        "permission": "DENY"
      },
      {
        "resource_type": "TOPIC",
        "resource_name": "kafka-cluster",
        "pattern_type": "LITERAL",
        "principal": "principalType:principalName",
        "host": "*",
        "operation": "READ",
        "permission": "ALLOW"
      }
    ]
  }'
```

`POST /clusters/{cluster_id}/acls:batch`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Create ACLs.

> Body parameter

```json
{
  "data": [
    {
      "resource_type": "CLUSTER",
      "resource_name": "kafka-cluster",
      "pattern_type": "LITERAL",
      "principal": "principalType:principalName",
      "host": "*",
      "operation": "DESCRIBE",
      "permission": "DENY"
    },
    {
      "resource_type": "TOPIC",
      "resource_name": "kafka-cluster",
      "pattern_type": "LITERAL",
      "principal": "principalType:principalName",
      "host": "*",
      "operation": "READ",
      "permission": "ALLOW"
    }
  ]
}
```

<h3 id="batch-create-acls-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|
|body|body|[CreateAclRequestDataList](#schemacreateaclrequestdatalist)|false|The batch ACL creation request.|
|» data|body|[[CreateAclRequestData](#schemacreateaclrequestdata)]|true|none|

> Example responses

> 400 Response

```json
{
  "error_code": 40002,
  "message": "The only valid name for the CLUSTER resource is kafka-cluster\""
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="batch-create-acls-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List ACLs

<a id="opIdgetKafkaAcls"></a>

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/acls \
  -H 'Accept: application/json'
```

`GET /clusters/{cluster_id}/acls`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Return a list of ACLs that match the search criteria.

<h3 id="list-acls-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource_type|query|[AclResourceType](#schemaaclresourcetype)|false|The ACL resource type.|
|resource_name|query|string|false|The ACL resource name.|
|pattern_type|query|[AclPatternType](#schemaaclpatterntype)|false|The ACL pattern type.|
|principal|query|string|false|The ACL principal.|
|host|query|string|false|The ACL host.|
|operation|query|[AclOperation](#schemaacloperation)|false|The ACL operation.|
|permission|query|[AclPermission](#schemaaclpermission)|false|The ACL permission.|
|cluster_id|path|string|true|The Kafka cluster ID.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|resource_type|UNKNOWN|
|resource_type|ANY|
|resource_type|TOPIC|
|resource_type|GROUP|
|resource_type|CLUSTER|
|resource_type|TRANSACTIONAL_ID|
|resource_type|DELEGATION_TOKEN|

> Example responses

> 200 Response

```json
{
  "kind": "KafkaAclList",
  "metadata": {
    "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/acls?principal=User%3Aalice"
  },
  "data": [
    {
      "kind": "KafkaAcl",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/acls?resource_type=TOPIC&resource_name=topic-&pattern_type=PREFIXED&principal=User%3Aalice&host=*&operation=ALL&permission=ALLOW"
      },
      "cluster_id": "cluster-1",
      "resource_type": "TOPIC",
      "resource_name": "topic-",
      "pattern_type": "PREFIXED",
      "principal": "User:alice",
      "host": "*",
      "operation": "ALL",
      "permission": "ALLOW"
    },
    {
      "kind": "KafkaAcl",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/acls?resource_type=CLUSTER&resource_name=kafka-cluster&pattern_type=LITERAL&principal=User%3Aalice&host=*&operation=DESCRIBE&permission=DENY"
      },
      "cluster_id": "cluster-1",
      "resource_type": "CLUSTER",
      "resource_name": "kafka-cluster",
      "pattern_type": "LITERAL",
      "principal": "User:alice",
      "host": "*",
      "operation": "DESCRIBE",
      "permission": "DENY"
    }
  ]
}
```

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="list-acls-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of ACLs.|[AclDataList](#schemaacldatalist)|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create an ACL

<a id="opIdcreateKafkaAcls"></a>

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/acls \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "resource_type": "CLUSTER",
    "resource_name": "kafka-cluster",
    "pattern_type": "LITERAL",
    "principal": "principalType:principalName",
    "host": "*",
    "operation": "DESCRIBE",
    "permission": "DENY"
  }'
```

`POST /clusters/{cluster_id}/acls`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Create an ACL.

> Body parameter

```json
{
  "resource_type": "CLUSTER",
  "resource_name": "kafka-cluster",
  "pattern_type": "LITERAL",
  "principal": "principalType:principalName",
  "host": "*",
  "operation": "DESCRIBE",
  "permission": "DENY"
}
```

<h3 id="create-an-acl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|
|body|body|[CreateAclRequestData](#schemacreateaclrequestdata)|false|The ACL creation request.|
|» resource_type|body|[AclResourceType](#schemaaclresourcetype)|true|none|
|» resource_name|body|string|true|none|
|» pattern_type|body|[AclPatternType](#schemaaclpatterntype)|true|none|
|» principal|body|string|true|none|
|» host|body|string|true|none|
|» operation|body|[AclOperation](#schemaacloperation)|true|none|
|» permission|body|[AclPermission](#schemaaclpermission)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» resource_type|UNKNOWN|
|» resource_type|ANY|
|» resource_type|TOPIC|
|» resource_type|GROUP|
|» resource_type|CLUSTER|
|» resource_type|TRANSACTIONAL_ID|
|» resource_type|DELEGATION_TOKEN|

> Example responses

> 400 Response

```json
{
  "error_code": 40002,
  "message": "The only valid name for the CLUSTER resource is kafka-cluster\""
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="create-an-acl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete ACLs

<a id="opIddeleteKafkaAcls"></a>

> Code samples

```bash
curl 'http://localhost:8082/v3/clusters/cluster-1/acls?resource_type=UNKNOWN&pattern_type=string&operation=string&permission=string' \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /clusters/{cluster_id}/acls`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Delete the ACLs that match the search criteria.

<h3 id="delete-acls-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource_type|query|[AclResourceType](#schemaaclresourcetype)|true|The ACL resource type.|
|resource_name|query|string|false|The ACL resource name.|
|pattern_type|query|[AclPatternType](#schemaaclpatterntype)|true|The ACL pattern type.|
|principal|query|string|false|The ACL principal.|
|host|query|string|false|The ACL host.|
|operation|query|[AclOperation](#schemaacloperation)|true|The ACL operation.|
|permission|query|[AclPermission](#schemaaclpermission)|true|The ACL permission.|
|cluster_id|path|string|true|The Kafka cluster ID.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|resource_type|UNKNOWN|
|resource_type|ANY|
|resource_type|TOPIC|
|resource_type|GROUP|
|resource_type|CLUSTER|
|resource_type|TRANSACTIONAL_ID|
|resource_type|DELEGATION_TOKEN|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "kind": "KafkaAcl",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/acls?resource_type=TOPIC&resource_name=topic-&pattern_type=PREFIXED&principal=User%3Aalice&host=*&operation=ALL&permission=ALLOW"
      },
      "cluster_id": "cluster-1",
      "resource_type": "TOPIC",
      "resource_name": "topic-",
      "pattern_type": "PREFIXED",
      "principal": "User:alice",
      "host": "*",
      "operation": "ALL",
      "permission": "ALLOW"
    },
    {
      "kind": "KafkaAcl",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/acls?resource_type=CLUSTER&resource_name=kafka-cluster&pattern_type=LITERAL&principal=User%3Aalice&host=*&operation=DESCRIBE&permission=DENY"
      },
      "cluster_id": "cluster-1",
      "resource_type": "CLUSTER",
      "resource_name": "kafka-cluster",
      "pattern_type": "LITERAL",
      "principal": "User:alice",
      "host": "*",
      "operation": "DESCRIBE",
      "permission": "DENY"
    }
  ]
}
```

> 400 Response

```json
{
  "error_code": 400,
  "message": "resource_type cannot be unspecified or UNKNOWN"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="delete-acls-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of deleted ACLs.|Inline|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<h3 id="delete-acls-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[AclData](#schemaacldata)]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="rest-admin-api-consumer-group-v3">Consumer Group (v3)</h1>

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

## List Consumer Groups

<a id="opIdlistKafkaConsumerGroups"></a>

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/consumer-groups \
  -H 'Accept: application/json'
```

`GET /clusters/{cluster_id}/consumer-groups`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Return the list of consumer groups that belong to the specified
Kafka cluster.

<h3 id="list-consumer-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|

> Example responses

> 200 Response

```json
{
  "kind": "KafkaConsumerGroupList",
  "metadata": {
    "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups",
    "next": null
  },
  "data": [
    {
      "kind": "KafkaConsumerGroup",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1",
        "resource_name": "crn:///kafka=cluster-1/consumer-group=consumer-group-1"
      },
      "cluster_id": "cluster-1",
      "consumer_group_id": "consumer-group-1",
      "is_simple": false,
      "partition_assignor": "org.apache.kafka.clients.consumer.RoundRobinAssignor",
      "state": "STABLE",
      "type": "CLASSIC",
      "is_mixed_consumer_group": false,
      "coordinator": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1"
      },
      "consumers": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers"
      },
      "lag_summary": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/lag-summary"
      }
    },
    {
      "kind": "KafkaConsumerGroup",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-2",
        "resource_name": "crn:///kafka=cluster-1/consumer-group=consumer-group-2"
      },
      "cluster_id": "cluster-1",
      "consumer_group_id": "consumer-group-2",
      "is_simple": false,
      "partition_assignor": "org.apache.kafka.clients.consumer.StickyAssignor",
      "state": "PREPARING_REBALANCE",
      "type": "CLASSIC",
      "is_mixed_consumer_group": false,
      "coordinator": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/2"
      },
      "consumers": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-2/consumers"
      },
      "lag_summary": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-2/lag-summary"
      }
    },
    {
      "kind": "KafkaConsumerGroup",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-3",
        "resource_name": "crn:///kafka=cluster-1/consumer-group=consumer-group-3"
      },
      "cluster_id": "cluster-1",
      "consumer_group_id": "consumer-group-3",
      "is_simple": false,
      "partition_assignor": "org.apache.kafka.clients.consumer.RangeAssignor",
      "state": "DEAD",
      "type": "CLASSIC",
      "is_mixed_consumer_group": false,
      "coordinator": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/3"
      },
      "consumers": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-3/consumers"
      },
      "lag_summary": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-3/lag-summary"
      }
    }
  ]
}
```

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="list-consumer-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of consumer groups.|[ConsumerGroupDataList](#schemaconsumergroupdatalist)|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Consumer Group

<a id="opIdgetKafkaConsumerGroup"></a>

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/consumer-groups/consumer-group-1 \
  -H 'Accept: application/json'
```

`GET /clusters/{cluster_id}/consumer-groups/{consumer_group_id}`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Return the consumer group specified by the ``consumer_group_id``.

<h3 id="get-consumer-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|
|consumer_group_id|path|string|true|The consumer group ID.|

> Example responses

> 200 Response

```json
{
  "kind": "KafkaConsumerGroup",
  "metadata": {
    "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1",
    "resource_name": "crn:///kafka=cluster-1/consumer-group=consumer-group-1"
  },
  "cluster_id": "cluster-1",
  "consumer_group_id": "consumer-group-1",
  "is_simple": false,
  "partition_assignor": "org.apache.kafka.clients.consumer.RoundRobinAssignor",
  "state": "STABLE",
  "type": "CLASSIC",
  "is_mixed_consumer_group": false,
  "coordinator": {
    "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/brokers/1"
  },
  "consumers": {
    "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers"
  },
  "lag_summary": {
    "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/lag-summary"
  }
}
```

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="get-consumer-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The consumer group.|[ConsumerGroupData](#schemaconsumergroupdata)|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List Consumers

<a id="opIdlistKafkaConsumers"></a>

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers \
  -H 'Accept: application/json'
```

`GET /clusters/{cluster_id}/consumer-groups/{consumer_group_id}/consumers`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Return a list of consumers that belong to the specified consumer
group.

<h3 id="list-consumers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|
|consumer_group_id|path|string|true|The consumer group ID.|

> Example responses

> 200 Response

```json
{
  "kind": "KafkaConsumerList",
  "metadata": {
    "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers",
    "next": null
  },
  "data": [
    {
      "kind": "KafkaConsumer",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-1",
        "resource_name": "crn:///kafka=cluster-1/consumer-group=consumer-group-1/consumer=consumer-1"
      },
      "cluster_id": "cluster-1",
      "consumer_group_id": "consumer-group-1",
      "consumer_id": "consumer-1",
      "instance_id": "consumer-instance-1",
      "client_id": "client-1",
      "assignments": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-1/assignments"
      }
    },
    {
      "kind": "KafkaConsumer",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-2",
        "resource_name": "crn:///kafka=cluster-1/consumer-group=consumer-group-1/consumer=consumer-2"
      },
      "cluster_id": "cluster-1",
      "consumer_group_id": "consumer-group-1",
      "consumer_id": "consumer-2",
      "instance_id": "consumer-instance-2",
      "client_id": "client-2",
      "assignments": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-2/assignments"
      }
    },
    {
      "kind": "KafkaConsumer",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-2",
        "resource_name": "crn:///kafka=cluster-1/consumer-group=consumer-group-1/consumer=consumer-2"
      },
      "cluster_id": "cluster-1",
      "consumer_group_id": "consumer-group-1",
      "consumer_id": "consumer-2",
      "instance_id": "consumer-instance-2",
      "client_id": "client-2",
      "assignments": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-2/assignments"
      }
    }
  ]
}
```

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="list-consumers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of consumers.|[ConsumerDataList](#schemaconsumerdatalist)|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Consumer Group Lag Summary

<a id="opIdgetKafkaConsumerGroupLagSummary"></a>

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/consumer-groups/consumer-group-1/lag-summary \
  -H 'Accept: application/json'
```

`GET /clusters/{cluster_id}/consumer-groups/{consumer_group_id}/lag-summary`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy) [![Available in dedicated clusters only](https://img.shields.io/badge/-Available%20in%20dedicated%20clusters%20only-%23bc8540)](https://docs.confluent.io/cloud/current/clusters/cluster-types.html#dedicated-cluster)

Return the maximum and total lag of the consumers belonging to the
specified consumer group.

<h3 id="get-consumer-group-lag-summary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|
|consumer_group_id|path|string|true|The consumer group ID.|

> Example responses

> 200 Response

```json
{
  "kind": "KafkaConsumerGroupLagSummary",
  "metadata": {
    "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/lag-summary",
    "resource_name": "crn:///kafka=cluster-1/consumer-groups=consumer-group-1/lag-summary"
  },
  "cluster_id": "cluster-1",
  "consumer_group_id": "consumer-group-1",
  "max_lag_consumer_id": "consumer-1",
  "max_lag_instance_id": "consumer-instance-1",
  "max_lag_client_id": "client-1",
  "max_lag_topic_name": "topic-1",
  "max_lag_partition_id": 1,
  "max_lag": 100,
  "total_lag": 110,
  "max_lag_consumer": {
    "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-1"
  },
  "max_lag_partition": {
    "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1"
  }
}
```

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="get-consumer-group-lag-summary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The max and total consumer lag in a consumer group.|[ConsumerGroupLagSummaryData](#schemaconsumergrouplagsummarydata)|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List Consumer Lags

<a id="opIdlistKafkaConsumerLags"></a>

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/consumer-groups/consumer-group-1/lags \
  -H 'Accept: application/json'
```

`GET /clusters/{cluster_id}/consumer-groups/{consumer_group_id}/lags`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy) [![Available in dedicated clusters only](https://img.shields.io/badge/-Available%20in%20dedicated%20clusters%20only-%23bc8540)](https://docs.confluent.io/cloud/current/clusters/cluster-types.html#dedicated-cluster)

Return a list of consumer lags of the consumers belonging to the
specified consumer group.

<h3 id="list-consumer-lags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|
|consumer_group_id|path|string|true|The consumer group ID.|

> Example responses

> 200 Response

```json
{
  "kind": "KafkaConsumerLagList",
  "metadata": {
    "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/lags",
    "next": null
  },
  "data": [
    {
      "kind": "KafkaConsumerLag",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/lags/topic-1/partitions/1",
        "resource_name": "crn:///kafka=cluster-1/consumer-group=consumer-group-1/lag=topic-1/partition=1"
      },
      "cluster_id": "cluster-1",
      "consumer_group_id": "consumer-group-1",
      "topic_name": "topic-1",
      "partition_id": 1,
      "consumer_id": "consumer-1",
      "instance_id": "consumer-instance-1",
      "client_id": "client-1",
      "current_offset": 1,
      "log_end_offset": 101,
      "lag": 100
    },
    {
      "kind": "KafkaConsumerLag",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/lags/topic-1/partitions/2",
        "resource_name": "crn:///kafka=cluster-1/consumer-group=consumer-group-1/lag=topic-1/partition=2"
      },
      "cluster_id": "cluster-1",
      "consumer_group_id": "consumer-group-1",
      "topic_name": "topic-1",
      "partition_id": 2,
      "consumer_id": "consumer-2",
      "instance_id": "consumer-instance-2",
      "client_id": "client-2",
      "current_offset": 1,
      "log_end_offset": 11,
      "lag": 10
    },
    {
      "kind": "KafkaConsumerLag",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/lags/topic-1/partitions/3",
        "resource_name": "crn:///kafka=cluster-1/consumer-group=consumer-group-1/lag=topic-1/partition=3"
      },
      "cluster_id": "cluster-1",
      "consumer_group_id": "consumer-group-1",
      "topic_name": "topic-1",
      "partition_id": 3,
      "consumer_id": "consumer-3",
      "instance_id": "consumer-instance-3",
      "client_id": "client-3",
      "current_offset": 1,
      "log_end_offset": 1,
      "lag": 0
    }
  ]
}
```

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="list-consumer-lags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of consumer lags.|[ConsumerLagDataList](#schemaconsumerlagdatalist)|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Consumer Lag

<a id="opIdgetKafkaConsumerLag"></a>

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/consumer-groups/consumer-group-1/lags/topic-1/partitions/1 \
  -H 'Accept: application/json'
```

`GET /clusters/{cluster_id}/consumer-groups/{consumer_group_id}/lags/{topic_name}/partitions/{partition_id}`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy) [![Available in dedicated clusters only](https://img.shields.io/badge/-Available%20in%20dedicated%20clusters%20only-%23bc8540)](https://docs.confluent.io/cloud/current/clusters/cluster-types.html#dedicated-cluster)

Return the consumer lag on a partition with the given `partition_id`.

<h3 id="get-consumer-lag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|
|consumer_group_id|path|string|true|The consumer group ID.|
|topic_name|path|string|true|The topic name.|
|partition_id|path|integer|true|The partition ID.|

> Example responses

> 200 Response

```json
{
  "kind": "KafkaConsumerLag",
  "metadata": {
    "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/lags/topic-1/partitions/1",
    "resource_name": "crn:///kafka=cluster-1/consumer-group=consumer-group-1/lag=topic-1/partition=1"
  },
  "cluster_id": "cluster-1",
  "consumer_group_id": "consumer-group-1",
  "topic_name": "topic-1",
  "partition_id": 1,
  "consumer_id": "consumer-1",
  "instance_id": "consumer-instance-1",
  "client_id": "client-1",
  "current_offset": 1,
  "log_end_offset": 101,
  "lag": 100
}
```

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="get-consumer-lag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The consumer lag.|[ConsumerLagData](#schemaconsumerlagdata)|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Consumer

<a id="opIdgetKafkaConsumer"></a>

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-1 \
  -H 'Accept: application/json'
```

`GET /clusters/{cluster_id}/consumer-groups/{consumer_group_id}/consumers/{consumer_id}`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Return the consumer specified by the ``consumer_id``.

<h3 id="get-consumer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|
|consumer_group_id|path|string|true|The consumer group ID.|
|consumer_id|path|string|true|The consumer ID.|

> Example responses

> 200 Response

```json
{
  "kind": "KafkaConsumer",
  "metadata": {
    "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-1",
    "resource_name": "crn:///kafka=cluster-1/consumer-group=consumer-group-1/consumer=consumer-1"
  },
  "cluster_id": "cluster-1",
  "consumer_group_id": "consumer-group-1",
  "consumer_id": "consumer-1",
  "instance_id": "consumer-instance-1",
  "client_id": "client-1",
  "assignments": {
    "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-1/assignments"
  }
}
```

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="get-consumer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The consumer.|[ConsumerData](#schemaconsumerdata)|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List Consumer Assignments

<a id="opIdlistKafkaConsumerAssignment"></a>

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-1/assignments \
  -H 'Accept: application/json'
```

`GET /clusters/{cluster_id}/consumer-groups/{consumer_group_id}/consumers/{consumer_id}/assignments`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Return a list of partition assignments for the specified consumer.

<h3 id="list-consumer-assignments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|
|consumer_group_id|path|string|true|The consumer group ID.|
|consumer_id|path|string|true|The consumer ID.|

> Example responses

> 200 Response

```json
{
  "kind": "KafkaConsumerAssignmentList",
  "metadata": {
    "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-1/assignments",
    "next": null
  },
  "data": [
    {
      "kind": "KafkaConsumerAssignment",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-1/assignments/topic-1/partitions/1",
        "resource_name": "crn:///kafka=cluster-1/consumer-group=consumer-group-1/consumer=consumer-1/assignment=topic=1/partition=1"
      },
      "cluster_id": "cluster-1",
      "consumer_group_id": "consumer-group-1",
      "consumer_id": "consumer-1",
      "topic_name": "topic-1",
      "partition_id": 1,
      "partition": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1"
      },
      "lag": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/lags/topic-1/partitions/1"
      }
    },
    {
      "kind": "KafkaConsumerAssignment",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-1/assignments/topic-2/partitions/2",
        "resource_name": "crn:///kafka=cluster-1/consumer-group=consumer-group-1/consumer=consumer-1/assignment=topic=2/partition=2"
      },
      "cluster_id": "cluster-1",
      "consumer_group_id": "consumer-group-1",
      "consumer_id": "consumer-1",
      "topic_name": "topic-2",
      "partition_id": 2,
      "partition": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-2/partitions/2"
      },
      "lag": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/lags/topic-2/partitions/2"
      }
    },
    {
      "kind": "KafkaConsumerAssignment",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-1/assignments/topic-3/partitions/3",
        "resource_name": "crn:///kafka=cluster-1/consumer-group=consumer-group-1/consumer=consumer-1/assignment=topic=3/partition=3"
      },
      "cluster_id": "cluster-1",
      "consumer_group_id": "consumer-group-1",
      "consumer_id": "consumer-1",
      "topic_name": "topic-3",
      "partition_id": 3,
      "partition": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-3/partitions/3"
      },
      "lag": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/lags/topic-3/partitions/3"
      }
    }
  ]
}
```

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="list-consumer-assignments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of consumer group assignments.|[ConsumerAssignmentDataList](#schemaconsumerassignmentdatalist)|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Consumer Assignment

<a id="opIdgetKafkaConsumerAssignment"></a>

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-1/assignments/topic-1/partitions/1 \
  -H 'Accept: application/json'
```

`GET /clusters/{cluster_id}/consumer-groups/{consumer_group_id}/consumers/{consumer_id}/assignments/{topic_name}/partitions/{partition_id}`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Return information about the assignment for the specified consumer
to the specified partition.

<h3 id="get-consumer-assignment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|
|consumer_group_id|path|string|true|The consumer group ID.|
|consumer_id|path|string|true|The consumer ID.|
|topic_name|path|string|true|The topic name.|
|partition_id|path|integer|true|The partition ID.|

> Example responses

> 200 Response

```json
{
  "kind": "KafkaConsumerAssignment",
  "metadata": {
    "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-1/assignments/topic-1/partitions/1",
    "resource_name": "crn:///kafka=cluster-1/consumer-group=consumer-group-1/consumer=consumer-1/assignment=topic=1/partition=1"
  },
  "cluster_id": "cluster-1",
  "consumer_group_id": "consumer-group-1",
  "consumer_id": "consumer-1",
  "topic_name": "topic-1",
  "partition_id": 1,
  "partition": {
    "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1"
  },
  "lag": {
    "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/consumer-groups/consumer-group-1/lags/topic-1/partitions/1"
  }
}
```

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="get-consumer-assignment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The consumer group assignment.|[ConsumerAssignmentData](#schemaconsumerassignmentdata)|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="rest-admin-api-partition-v3">Partition (v3)</h1>

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

## List Partition Offsets

<a id="opIdlistKafkaPartitionOffsets"></a>

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/topics/topic-1/partitions/1/offset \
  -H 'Accept: application/json'
```

`GET /clusters/{cluster_id}/topics/{topic_name}/partitions/{partition_id}/offset`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Return the earliest and latest offsets of a partition with the given `partition_id`.

<h3 id="list-partition-offsets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset_type|query|string|false|Specify the offset type to be fetched for a given partition|
|cluster_id|path|string|true|The Kafka cluster ID.|
|topic_name|path|string|true|The topic name.|
|partition_id|path|integer|true|The partition ID.|

> Example responses

> 200 Response

```json
{
  "kind": "KafkaPartitionWithOffsets",
  "metadata": {
    "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1/offset",
    "resource_name": "crn:///kafka=cluster-1/topic=topic-1/partition=1/offset"
  },
  "cluster_id": "cluster-1",
  "topic_name": "topic-1",
  "partition_id": 1,
  "earliest_offset": "10L",
  "latest_offset": "100L"
}
```

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "HTTP 404 Not Found"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="list-partition-offsets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The earliest and latest offsets of a partition|[PartitionWithOffsetsData](#schemapartitionwithoffsetsdata)|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|404|Not Found|Indicates attempted access to an unreachable or non-existing resource like e.g. an unknown topic or partition. GET requests to endpoints not allowed in the accesslists will also result in this response.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List Partitions

<a id="opIdlistKafkaPartitions"></a>

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/topics/topic-1/partitions \
  -H 'Accept: application/json'
```

`GET /clusters/{cluster_id}/topics/{topic_name}/partitions`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Return the list of partitions that belong to the specified topic.

<h3 id="list-partitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|
|topic_name|path|string|true|The topic name.|

> Example responses

> 200 Response

```json
{
  "kind": "KafkaPartitionList",
  "metadata": {
    "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions",
    "next": null
  },
  "data": [
    {
      "kind": "KafkaPartition",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1",
        "resource_name": "crn:///kafka=cluster-1/topic=topic-1/partition=1"
      },
      "cluster_id": "cluster-1",
      "topic_name": "topic-1",
      "partition_id": 1,
      "leader": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1/replicas/1"
      },
      "replicas": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1/replicas"
      },
      "reassignment": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1/reassignment"
      }
    },
    {
      "kind": "KafkaPartition",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/2",
        "resource_name": "crn:///kafka=cluster-1/topic=topic-1/partition=2"
      },
      "cluster_id": "cluster-1",
      "topic_name": "topic-1",
      "partition_id": 2,
      "leader": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/2/replicas/2"
      },
      "replicas": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/2/replicas"
      },
      "reassignment": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/2/reassignment"
      }
    },
    {
      "kind": "KafkaPartition",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/3",
        "resource_name": "crn:///kafka=cluster-1/topic=topic-1/partition=3"
      },
      "cluster_id": "cluster-1",
      "topic_name": "topic-1",
      "partition_id": 3,
      "leader": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/3/replicas/3"
      },
      "replicas": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/3/replicas"
      },
      "reassignment": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/3/reassignment"
      }
    }
  ]
}
```

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "HTTP 404 Not Found"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="list-partitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of partitions.|[PartitionDataList](#schemapartitiondatalist)|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|404|Not Found|Indicates attempted access to an unreachable or non-existing resource like e.g. an unknown topic or partition. GET requests to endpoints not allowed in the accesslists will also result in this response.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Partition

<a id="opIdgetKafkaPartition"></a>

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/topics/topic-1/partitions/1 \
  -H 'Accept: application/json'
```

`GET /clusters/{cluster_id}/topics/{topic_name}/partitions/{partition_id}`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Return the partition with the given `partition_id`.

<h3 id="get-partition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|
|topic_name|path|string|true|The topic name.|
|partition_id|path|integer|true|The partition ID.|

> Example responses

> 200 Response

```json
{
  "kind": "KafkaPartition",
  "metadata": {
    "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1",
    "resource_name": "crn:///kafka=cluster-1/topic=topic-1/partition=1"
  },
  "cluster_id": "cluster-1",
  "topic_name": "topic-1",
  "partition_id": 1,
  "leader": {
    "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1/replicas/1"
  },
  "replicas": {
    "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1/replicas"
  },
  "reassignment": {
    "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1/reassignment"
  }
}
```

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "HTTP 404 Not Found"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="get-partition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The partition|[PartitionData](#schemapartitiondata)|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|404|Not Found|Indicates attempted access to an unreachable or non-existing resource like e.g. an unknown topic or partition. GET requests to endpoints not allowed in the accesslists will also result in this response.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List All Replica Reassignments

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/topics/-/partitions/-/reassignment \
  -H 'Accept: application/json'
```

`GET /clusters/{cluster_id}/topics/-/partitions/-/reassignment`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Return the list of all ongoing replica reassignments in the given Kafka cluster.

<h3 id="list-all-replica-reassignments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|

> Example responses

> 200 Response

```json
{
  "kind": "KafkaReassignmentList",
  "metadata": {
    "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/-/partitions/-/reassignment",
    "next": null
  },
  "data": [
    {
      "kind": "KafkaReassignment",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1/reassignment",
        "resource_name": "crn:///kafka=cluster-1/topic=topic-1/partition=1/reassignment"
      },
      "cluster_id": "cluster-1",
      "topic_name": "topic-1",
      "partition_id": 1,
      "adding_replicas": [
        1,
        2
      ],
      "removing_replicas": [
        3
      ],
      "replicas": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1/replicas"
      }
    },
    {
      "kind": "KafkaReassignment",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-2/partitions/2/reassignment",
        "resource_name": "crn:///kafka=cluster-1/topic=topic-2/partition=2/reassignment"
      },
      "cluster_id": "cluster-1",
      "topic_name": "topic-2",
      "partition_id": 2,
      "adding_replicas": [
        1
      ],
      "removing_replicas": [
        2,
        3
      ],
      "replicas": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-2/partitions/2/replicas"
      }
    },
    {
      "kind": "KafkaReassignment",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-3/partitions/3/reassignment",
        "resource_name": "crn:///kafka=cluster-1/topic=topic-3/partition=3/reassignment"
      },
      "cluster_id": "cluster-1",
      "topic_name": "topic-3",
      "partition_id": 3,
      "adding_replicas": [
        3
      ],
      "removing_replicas": [
        1,
        2
      ],
      "replicas": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-3/partitions/3/replicas"
      }
    }
  ]
}
```

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "HTTP 404 Not Found"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="list-all-replica-reassignments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The ongoing replicas reassignments.|[ReassignmentDataList](#schemareassignmentdatalist)|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|404|Not Found|Indicates attempted access to an unreachable or non-existing resource like e.g. an unknown topic or partition. GET requests to endpoints not allowed in the accesslists will also result in this response.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List Replica Reassignments By Topic

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/topics/topic-1/partitions/-/reassignment \
  -H 'Accept: application/json'
```

`GET /clusters/{cluster_id}/topics/{topic_name}/partitions/-/reassignment`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Return the list of ongoing replica reassignments for the given topic.

<h3 id="list-replica-reassignments-by-topic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|
|topic_name|path|string|true|The topic name.|

> Example responses

> 200 Response

```json
{
  "kind": "KafkaReassignmentList",
  "metadata": {
    "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/-/partitions/-/reassignment",
    "next": null
  },
  "data": [
    {
      "kind": "KafkaReassignment",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1/reassignment",
        "resource_name": "crn:///kafka=cluster-1/topic=topic-1/partition=1/reassignment"
      },
      "cluster_id": "cluster-1",
      "topic_name": "topic-1",
      "partition_id": 1,
      "adding_replicas": [
        1,
        2
      ],
      "removing_replicas": [
        3
      ],
      "replicas": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1/replicas"
      }
    },
    {
      "kind": "KafkaReassignment",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/2/reassignment",
        "resource_name": "crn:///kafka=cluster-1/topic=topic-1/partition=2/reassignment"
      },
      "cluster_id": "cluster-1",
      "topic_name": "topic-1",
      "partition_id": 2,
      "adding_replicas": [
        1
      ],
      "removing_replicas": [
        2,
        3
      ],
      "replicas": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/2/replicas"
      }
    },
    {
      "kind": "KafkaReassignment",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/3/reassignment",
        "resource_name": "crn:///kafka=cluster-1/topic=topic-1/partition=3/reassignment"
      },
      "cluster_id": "cluster-1",
      "topic_name": "topic-1",
      "partition_id": 3,
      "adding_replicas": [
        3
      ],
      "removing_replicas": [
        1,
        2
      ],
      "replicas": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/3/replicas"
      }
    }
  ]
}
```

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "HTTP 404 Not Found"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="list-replica-reassignments-by-topic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The ongoing replicas reassignments.|[ReassignmentDataList](#schemareassignmentdatalist)|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|404|Not Found|Indicates attempted access to an unreachable or non-existing resource like e.g. an unknown topic or partition. GET requests to endpoints not allowed in the accesslists will also result in this response.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Replica Reassignments

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/topics/topic-1/partitions/1/reassignment \
  -H 'Accept: application/json'
```

`GET /clusters/{cluster_id}/topics/{topic_name}/partitions/{partition_id}/reassignment`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Return the list of ongoing replica reassignments for the given partition.

<h3 id="get-replica-reassignments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|
|topic_name|path|string|true|The topic name.|
|partition_id|path|integer|true|The partition ID.|

> Example responses

> 200 Response

```json
{
  "kind": "KafkaReassignment",
  "metadata": {
    "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1/reassignment",
    "resource_name": "crn:///kafka=cluster-1/topic=topic-1/partition=1/reassignment"
  },
  "cluster_id": "cluster-1",
  "topic_name": "topic-1",
  "partition_id": 1,
  "adding_replicas": [
    1,
    2
  ],
  "removing_replicas": [
    3
  ],
  "replicas": {
    "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/1/replicas"
  }
}
```

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "HTTP 404 Not Found"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="get-replica-reassignments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The ongoing replicas reassignments.|[ReassignmentData](#schemareassignmentdata)|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|404|Not Found|Indicates attempted access to an unreachable or non-existing resource like e.g. an unknown topic or partition. GET requests to endpoints not allowed in the accesslists will also result in this response.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="rest-admin-api-topic-v3">Topic (v3)</h1>

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

## List Topics

<a id="opIdlistKafkaTopics"></a>

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/topics \
  -H 'Accept: application/json'
```

`GET /clusters/{cluster_id}/topics`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Return the list of topics that belong to the specified Kafka cluster.

<h3 id="list-topics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|

> Example responses

> 200 Response

```json
{
  "kind": "KafkaTopicList",
  "metadata": {
    "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics",
    "next": null
  },
  "data": [
    {
      "kind": "KafkaTopic",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1",
        "resource_name": "crn:///kafka=cluster-1/topic=topic-1"
      },
      "cluster_id": "cluster-1",
      "topic_name": "topic-1",
      "is_internal": false,
      "replication_factor": 3,
      "partitions_count": 1,
      "partitions": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions"
      },
      "configs": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/configs"
      },
      "partition_reassignments": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/-/reassignments"
      }
    },
    {
      "kind": "KafkaTopic",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-2",
        "resource_name": "crn:///kafka=cluster-1/topic=topic-2"
      },
      "cluster_id": "cluster-1",
      "topic_name": "topic-2",
      "is_internal": true,
      "replication_factor": 4,
      "partitions_count": 1,
      "partitions": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-2/partitions"
      },
      "configs": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-2/configs"
      },
      "partition_reassignments": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-2/partitions/-/reassignments"
      }
    },
    {
      "kind": "KafkaTopic",
      "metadata": {
        "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-3",
        "resource_name": "crn:///kafka=cluster-1/topic=topic-3"
      },
      "cluster_id": "cluster-1",
      "topic_name": "topic-3",
      "is_internal": false,
      "replication_factor": 5,
      "partitions_count": 1,
      "partitions": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-3/partitions"
      },
      "configs": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-3/configs"
      },
      "partition_reassignments": {
        "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-3/partitions/-/reassignments"
      }
    }
  ]
}
```

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="list-topics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of topics.|[TopicDataList](#schematopicdatalist)|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create Topic

<a id="opIdcreateKafkaTopic"></a>

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/topics \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "topic_name": "topic-X",
    "partitions_count": 64,
    "replication_factor": 3,
    "configs": [
      {
        "name": "cleanup.policy",
        "value": "compact"
      },
      {
        "name": "compression.type",
        "value": "gzip"
      }
    ]
  }'
```

`POST /clusters/{cluster_id}/topics`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Create a topic.
Also supports a dry-run mode that only validates whether the topic creation would succeed
if the ``validate_only`` request property is explicitly specified and set to true.

> Body parameter

```json
{
  "topic_name": "topic-X",
  "partitions_count": 64,
  "replication_factor": 3,
  "configs": [
    {
      "name": "cleanup.policy",
      "value": "compact"
    },
    {
      "name": "compression.type",
      "value": "gzip"
    }
  ]
}
```

<h3 id="create-topic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|
|body|body|[CreateTopicRequestData](#schemacreatetopicrequestdata)|false|The topic creation request.|
|» topic_name|body|string|true|none|
|» partitions_count|body|integer|false|none|
|» replication_factor|body|integer|false|none|
|» replicas_assignments|body|object|false|none|
|» » **additionalProperties**|body|[integer]|false|none|
|» configs|body|[object]|false|none|
|» » name|body|string|true|none|
|» » value|body|string \| null|false|none|
|» validate_only|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "kind": "KafkaTopic",
  "metadata": {
    "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-X",
    "resource_name": "crn:///kafka=cluster-1/topic=topic-X"
  },
  "cluster_id": "cluster-1",
  "topic_name": "topic-X",
  "is_internal": false,
  "replication_factor": 3,
  "partitions_count": 1,
  "partitions": {
    "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-X/partitions"
  },
  "configs": {
    "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-X/configs"
  },
  "partition_reassignments": {
    "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-X/partitions/-/reassignments"
  }
}
```

> 201 Response

```json
{
  "kind": "KafkaTopic",
  "metadata": {
    "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-X",
    "resource_name": "crn:///kafka=cluster-1/topic=topic-X"
  },
  "cluster_id": "cluster-1",
  "topic_name": "topic-X",
  "is_internal": false,
  "replication_factor": 3,
  "partitions_count": 1,
  "partitions": {
    "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-X/partitions"
  },
  "configs": {
    "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-X/configs"
  },
  "partition_reassignments": {
    "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-X/partitions/-/reassignments"
  }
}
```

> 400 Response

```json
{
  "error_code": 40002,
  "message": "Topic 'my-topic' already exists."
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="create-topic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The created topic.|[TopicData](#schematopicdata)|
|201|Created|The created topic.|[TopicData](#schematopicdata)|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Topic

<a id="opIdgetKafkaTopic"></a>

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/topics/topic-1 \
  -H 'Accept: application/json'
```

`GET /clusters/{cluster_id}/topics/{topic_name}`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Return the topic with the given `topic_name`.

<h3 id="get-topic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|include_authorized_operations|query|boolean|false|Specify if authorized operations should be included in the response.|
|cluster_id|path|string|true|The Kafka cluster ID.|
|topic_name|path|string|true|The topic name.|

> Example responses

> 200 Response

```json
{
  "kind": "KafkaTopic",
  "metadata": {
    "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1",
    "resource_name": "crn:///kafka=cluster-1/topic=topic-1"
  },
  "cluster_id": "cluster-1",
  "topic_name": "topic-1",
  "is_internal": false,
  "replication_factor": 3,
  "partitions_count": 1,
  "partitions": {
    "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions"
  },
  "configs": {
    "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/configs"
  },
  "partition_reassignments": {
    "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/-/reassignments"
  }
}
```

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "HTTP 404 Not Found"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="get-topic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The topic.|[TopicData](#schematopicdata)|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|404|Not Found|Indicates attempted access to an unreachable or non-existing resource like e.g. an unknown topic or partition. GET requests to endpoints not allowed in the accesslists will also result in this response.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Topic

<a id="opIddeleteKafkaTopic"></a>

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/topics/topic-1 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /clusters/{cluster_id}/topics/{topic_name}`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Delete the topic with the given `topic_name`.

<h3 id="delete-topic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|
|topic_name|path|string|true|The topic name.|

> Example responses

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `java.lang.Integer` from String \"A\": not a valid `java.lang.Integer` value"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "HTTP 404 Not Found"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="delete-topic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|404|Not Found|Indicates attempted access to an unreachable or non-existing resource like e.g. an unknown topic or partition. GET requests to endpoints not allowed in the accesslists will also result in this response.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update Partition Count

<a id="opIdupdatePartitionCountKafkaTopic"></a>

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/topics/topic-1 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "partitions_count": 10
  }'
```

`PATCH /clusters/{cluster_id}/topics/{topic_name}`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Increase the number of partitions for a topic.  

> Body parameter

```json
{
  "partitions_count": 10
}
```

<h3 id="update-partition-count-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|
|topic_name|path|string|true|The topic name.|
|body|body|[UpdatePartitionCountRequestData](#schemaupdatepartitioncountrequestdata)|false|The number of partitions to increase the partition count to.|
|» partitions_count|body|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "kind": "KafkaTopic",
  "metadata": {
    "self": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1",
    "resource_name": "crn:///kafka=cluster-1/topic=topic-1"
  },
  "cluster_id": "cluster-1",
  "topic_name": "topic-1",
  "is_internal": false,
  "replication_factor": 3,
  "partitions_count": 1,
  "partitions": {
    "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions"
  },
  "configs": {
    "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/configs"
  },
  "partition_reassignments": {
    "related": "https://pkc-00000.region.provider.confluent.cloud/kafka/v3/clusters/cluster-1/topics/topic-1/partitions/-/reassignments"
  }
}
```

> 400 Response

```json
{
  "error_code": 40002,
  "message": "Topic already has 1 partitions."
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="update-partition-count-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The topic.|[TopicData](#schematopicdata)|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="rest-admin-api-records-v3">Records (v3)</h1>

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

## Produce Records

<a id="opIdproduceRecord"></a>

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/topics/topic-1/records \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "partition_id": 1,
    "headers": [
      {
        "name": "Header-1",
        "value": "SGVhZGVyLTE="
      },
      {
        "name": "Header-2",
        "value": "SGVhZGVyLTI="
      }
    ],
    "key": {
      "type": "BINARY",
      "data": "Zm9vYmFy"
    },
    "value": {
      "type": "JSON",
      "data": {
        "foo": "bar"
      }
    },
    "timestamp": "2021-02-05T19:14:42Z"
  }'
```

`POST /clusters/{cluster_id}/topics/{topic_name}/records`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Produce records to the given topic, returning delivery reports for each
            record produced. This API can be used in streaming mode by setting "Transfer-Encoding:
            chunked" header. For as long as the connection is kept open, the server will
            keep accepting records. Records are streamed to and from the server as Concatenated 
            JSON. For each record sent to the server, the server will
            asynchronously send back a delivery report, in the same order, each with its own
            error_code. An error_code of 200 indicates success. The HTTP status code will be HTTP 
            200 OK as long as the connection is successfully established. To identify records
            that have encountered an error, check the error_code of each delivery report.

Note that the cluster_id is validated only when running in Confluent
Cloud.

> Body parameter

```json
{
  "partition_id": 1,
  "headers": [
    {
      "name": "Header-1",
      "value": "SGVhZGVyLTE="
    },
    {
      "name": "Header-2",
      "value": "SGVhZGVyLTI="
    }
  ],
  "key": {
    "type": "BINARY",
    "data": "Zm9vYmFy"
  },
  "value": {
    "type": "JSON",
    "data": {
      "foo": "bar"
    }
  },
  "timestamp": "2021-02-05T19:14:42Z"
}
```

<h3 id="produce-records-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|
|topic_name|path|string|true|The topic name.|
|body|body|[ProduceRequest](#schemaproducerequest)|false|A single record to be produced to Kafka. To produce multiple records in the same request, simply concatenate the records. The delivery reports are concatenated in the same order as the records are sent.|
|» partition_id|body|integer(int32) \| null|false|none|
|» headers|body|[[ProduceRequestHeader](#schemaproducerequestheader)]|false|none|
|» key|body|[ProduceRequestData](#schemaproducerequestdata)|false|none|
|» value|body|[ProduceRequestData](#schemaproducerequestdata)|false|none|
|» timestamp|body|string(date-time) \| null|false|none|

> Example responses

> 200 Response

```json
{
  "error_code": 200,
  "cluster_id": "cluster-1",
  "topic_name": "topic-1",
  "partition_id": 1,
  "offset": 0,
  "timestamp": "2021-02-05T19:14:42Z",
  "key": {
    "type": "BINARY",
    "size": 7
  },
  "value": {
    "type": "JSON",
    "size": 15
  }
}
```

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `byte[]` from String \"\": Unexpected end of base64-encoded String: base64 variant 'MIME-NO-LINEFEEDS' expects padding (one or more '=' characters) at the end. This Base64Variant might have been incorrectly configured"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "HTTP 404 Not Found"
}
```

> 413 Response

```json
{
  "error_code": 413,
  "message": "The request included a message larger than the maximum message size the server can accept."
}
```

> 415 Response

```json
{
  "error_code": 415,
  "message": "HTTP 415 Unsupported Media Type"
}
```

> 422 Response

```json
{
  "error_code": 422,
  "message": "Payload error. Request body is empty. Data is required."
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="produce-records-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The response containing a delivery report for a record produced to a topic. In streaming mode,<br>for each record sent, a separate delivery report will be returned, in the same order,<br>each with its own error_code.|[ProduceResponse](#schemaproduceresponse)|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|404|Not Found|Indicates attempted access to an unreachable or non-existing resource like e.g. an unknown topic or partition. GET requests to endpoints not allowed in the accesslists will also result in this response.|[Error](#schemaerror)|
|413|Payload Too Large|This implies the client is sending a request payload that is larger than the maximum message size the server can accept.|[Error](#schemaerror)|
|415|Unsupported Media Type|This implies the client is sending the request payload format in an unsupported format.|[Error](#schemaerror)|
|422|Unprocessable Entity|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Produce Records Batch

<a id="opIdproduceRecordsBatch"></a>

> Code samples

```bash
curl http://localhost:8082/v3/clusters/cluster-1/topics/topic-1/records:batch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "entries": [
      {
        "id": "1",
        "value": {
          "type": "STRING",
          "data": "My first message"
        }
      },
      {
        "id": "2",
        "value": {
          "type": "STRING",
          "data": "My second message"
        }
      }
    ]
  }'
```

`POST /clusters/{cluster_id}/topics/{topic_name}/records:batch`

[![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)

Produce a batch of records to the given topic, returning delivery reports for each record produced.
To identify records that have encountered an error, check the error_code of each delivery report.

> Body parameter

```json
{
  "entries": [
    {
      "id": "1",
      "value": {
        "type": "STRING",
        "data": "My first message"
      }
    },
    {
      "id": "2",
      "value": {
        "type": "STRING",
        "data": "My second message"
      }
    }
  ]
}
```

<h3 id="produce-records-batch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster_id|path|string|true|The Kafka cluster ID.|
|topic_name|path|string|true|The topic name.|
|body|body|[ProduceBatchRequest](#schemaproducebatchrequest)|false|A batch of records to be produced to Kafka. The delivery reports are sent in the response in the same order as the records in the request.|
|» entries|body|[[ProduceBatchRequestEntry](#schemaproducebatchrequestentry)]|true|none|

> Example responses

> 207 Response

```json
{
  "successes": [
    {
      "id": "1",
      "cluster_id": "cluster-1",
      "topic_name": "topic-1",
      "partition_id": 1,
      "offset": 0,
      "timestamp": "2021-02-05T19:14:42Z",
      "key": {
        "type": "BINARY",
        "size": 7
      },
      "value": {
        "type": "JSON",
        "size": 15
      }
    },
    {
      "id": "2",
      "cluster_id": "cluster-1",
      "topic_name": "topic-1",
      "partition_id": 1,
      "offset": 1,
      "timestamp": "2021-02-05T19:14:43Z",
      "key": {
        "type": "BINARY",
        "size": 7
      },
      "value": {
        "type": "JSON",
        "size": 15
      }
    }
  ],
  "failures": []
}
```

> 400 Response

```json
{
  "error_code": 400,
  "message": "Cannot deserialize value of type `byte[]` from String \"\": Unexpected end of base64-encoded String: base64 variant 'MIME-NO-LINEFEEDS' expects padding (one or more '=' characters) at the end. This Base64Variant might have been incorrectly configured"
}
```

> 401 Response

```json
{
  "error_code": 40101,
  "message": "Authentication failed"
}
```

> 403 Response

```json
{
  "error_code": 40301,
  "message": "Request is not authorized"
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "HTTP 404 Not Found"
}
```

> 415 Response

```json
{
  "error_code": 415,
  "message": "HTTP 415 Unsupported Media Type"
}
```

> 429 Response

```json
{
  "description": "A sample response from Jetty's DoSFilter.",
  "value": "<html> <head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\"/> <title>Error 429 Too Many Requests</title> </head> <body> <h2>HTTP ERROR 429 Too Many Requests</h2> <table> <tr> <th>URI:</th> <td>/v3/clusters/my-cluster</td> </tr> <tr> <th>STATUS:</th> <td>429</td> </tr> <tr> <th>MESSAGE:</th> <td>Too Many Requests</td> </tr> <tr> <th>SERVLET:</th> <td>default</td> </tr> </table> </body> </html>"
}
```

> 5XX Response

```json
{
  "error_code": 500,
  "message": "Internal Server Error"
}
```

<h3 id="produce-records-batch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|207|Multi-Status|The response containing a delivery report for each record produced to a topic.<br>A separate delivery report will be returned, in the same order, each with its own error_code.|[ProduceBatchResponse](#schemaproducebatchresponse)|
|400|Bad Request|Indicates a bad request error. It could be caused by an unexpected request body format or other forms of request validation failure.|[Error](#schemaerror)|
|401|Unauthorized|Indicates a client authentication error. Kafka authentication failures will contain error code 40101 in the response body.|[Error](#schemaerror)|
|403|Forbidden|Indicates a client authorization error. Kafka authorization failures will contain error code 40301 in the response body.|[Error](#schemaerror)|
|404|Not Found|Indicates attempted access to an unreachable or non-existing resource like e.g. an unknown topic or partition. GET requests to endpoints not allowed in the accesslists will also result in this response.|[Error](#schemaerror)|
|415|Unsupported Media Type|This implies the client is sending the request payload format in an unsupported format.|[Error](#schemaerror)|
|429|Too Many Requests|Indicates that a rate limit threshold has been reached, and the client should retry again later.|Inline|
|5XX|Server Error|A server-side problem that might not be addressable from the client side. Retriable Kafka errors will contain error code 50003 in the response body.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AbstractConfigData">AbstractConfigData</h2>
<!-- backwards compatibility -->
<a id="schemaabstractconfigdata"></a>
<a id="schema_AbstractConfigData"></a>
<a id="tocSabstractconfigdata"></a>
<a id="tocsabstractconfigdata"></a>

```json
{
  "kind": "string",
  "metadata": {
    "self": "string",
    "resource_name": "string"
  },
  "cluster_id": "string",
  "name": "string",
  "value": "string",
  "is_default": true,
  "is_read_only": true,
  "is_sensitive": true,
  "source": "string",
  "synonyms": [
    {
      "name": "string",
      "value": "string",
      "source": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|true|none|none|
|metadata|[ResourceMetadata](#schemaresourcemetadata)|true|none|none|
|cluster_id|string|true|none|none|
|name|string|true|none|none|
|value|string \| null|false|none|none|
|is_default|boolean|true|none|none|
|is_read_only|boolean|true|none|none|
|is_sensitive|boolean|true|none|none|
|source|[ConfigSource](#schemaconfigsource)|true|none|none|
|synonyms|[[ConfigSynonymData](#schemaconfigsynonymdata)]|true|none|none|

<h2 id="tocS_AclData">AclData</h2>
<!-- backwards compatibility -->
<a id="schemaacldata"></a>
<a id="schema_AclData"></a>
<a id="tocSacldata"></a>
<a id="tocsacldata"></a>

```json
{
  "kind": "string",
  "metadata": {
    "self": "string",
    "resource_name": "string"
  },
  "cluster_id": "string",
  "resource_type": "UNKNOWN",
  "resource_name": "string",
  "pattern_type": "string",
  "principal": "string",
  "host": "string",
  "operation": "string",
  "permission": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|true|none|none|
|metadata|[ResourceMetadata](#schemaresourcemetadata)|true|none|none|
|cluster_id|string|true|none|none|
|resource_type|[AclResourceType](#schemaaclresourcetype)|true|none|none|
|resource_name|string|true|none|none|
|pattern_type|[AclPatternType](#schemaaclpatterntype)|true|none|none|
|principal|string|true|none|none|
|host|string|true|none|none|
|operation|[AclOperation](#schemaacloperation)|true|none|none|
|permission|[AclPermission](#schemaaclpermission)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|resource_type|UNKNOWN|
|resource_type|ANY|
|resource_type|TOPIC|
|resource_type|GROUP|
|resource_type|CLUSTER|
|resource_type|TRANSACTIONAL_ID|
|resource_type|DELEGATION_TOKEN|

<h2 id="tocS_AclDataList">AclDataList</h2>
<!-- backwards compatibility -->
<a id="schemaacldatalist"></a>
<a id="schema_AclDataList"></a>
<a id="tocSacldatalist"></a>
<a id="tocsacldatalist"></a>

```json
{
  "kind": "string",
  "metadata": {
    "self": "string",
    "next": "string"
  },
  "data": [
    {
      "kind": "string",
      "metadata": {
        "self": "string",
        "resource_name": "string"
      },
      "cluster_id": "string",
      "resource_type": "UNKNOWN",
      "resource_name": "string",
      "pattern_type": "string",
      "principal": "string",
      "host": "string",
      "operation": "string",
      "permission": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|true|none|none|
|metadata|[ResourceCollectionMetadata](#schemaresourcecollectionmetadata)|true|none|none|
|data|[[AclData](#schemaacldata)]|true|none|none|

<h2 id="tocS_AclOperation">AclOperation</h2>
<!-- backwards compatibility -->
<a id="schemaacloperation"></a>
<a id="schema_AclOperation"></a>
<a id="tocSacloperation"></a>
<a id="tocsacloperation"></a>

```json
"string"
```

<h2 id="tocS_AclPatternType">AclPatternType</h2>
<!-- backwards compatibility -->
<a id="schemaaclpatterntype"></a>
<a id="schema_AclPatternType"></a>
<a id="tocSaclpatterntype"></a>
<a id="tocsaclpatterntype"></a>

```json
"string"
```

<h2 id="tocS_AclPermission">AclPermission</h2>
<!-- backwards compatibility -->
<a id="schemaaclpermission"></a>
<a id="schema_AclPermission"></a>
<a id="tocSaclpermission"></a>
<a id="tocsaclpermission"></a>

```json
"string"
```

<h2 id="tocS_AclResourceType">AclResourceType</h2>
<!-- backwards compatibility -->
<a id="schemaaclresourcetype"></a>
<a id="schema_AclResourceType"></a>
<a id="tocSaclresourcetype"></a>
<a id="tocsaclresourcetype"></a>

```json
"UNKNOWN"
```

<h2 id="tocS_AlterConfigBatchRequestData">AlterConfigBatchRequestData</h2>
<!-- backwards compatibility -->
<a id="schemaalterconfigbatchrequestdata"></a>
<a id="schema_AlterConfigBatchRequestData"></a>
<a id="tocSalterconfigbatchrequestdata"></a>
<a id="tocsalterconfigbatchrequestdata"></a>

```json
{
  "data": [
    {
      "name": "string",
      "value": "string",
      "operation": "string"
    }
  ],
  "validate_only": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|
|validate_only|boolean|false|none|none|

<h2 id="tocS_AnyValue">AnyValue</h2>
<!-- backwards compatibility -->
<a id="schemaanyvalue"></a>
<a id="schema_AnyValue"></a>
<a id="tocSanyvalue"></a>
<a id="tocsanyvalue"></a>

```json
null
```

<h2 id="tocS_AuthorizedOperations">AuthorizedOperations</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizedoperations"></a>
<a id="schema_AuthorizedOperations"></a>
<a id="tocSauthorizedoperations"></a>
<a id="tocsauthorizedoperations"></a>

```json
[
  "string"
]
```

<h2 id="tocS_BrokerConfigData">BrokerConfigData</h2>
<!-- backwards compatibility -->
<a id="schemabrokerconfigdata"></a>
<a id="schema_BrokerConfigData"></a>
<a id="tocSbrokerconfigdata"></a>
<a id="tocsbrokerconfigdata"></a>

```json
{
  "kind": "string",
  "metadata": {
    "self": "string",
    "resource_name": "string"
  },
  "cluster_id": "string",
  "name": "string",
  "value": "string",
  "is_default": true,
  "is_read_only": true,
  "is_sensitive": true,
  "source": "string",
  "synonyms": [
    {
      "name": "string",
      "value": "string",
      "source": "string"
    }
  ],
  "broker_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|true|none|none|
|metadata|[ResourceMetadata](#schemaresourcemetadata)|true|none|none|
|cluster_id|string|true|none|none|
|name|string|true|none|none|
|value|string \| null|false|none|none|
|is_default|boolean|true|none|none|
|is_read_only|boolean|true|none|none|
|is_sensitive|boolean|true|none|none|
|source|[ConfigSource](#schemaconfigsource)|true|none|none|
|synonyms|[[ConfigSynonymData](#schemaconfigsynonymdata)]|true|none|none|
|broker_id|integer|true|none|none|

<h2 id="tocS_BrokerConfigDataList">BrokerConfigDataList</h2>
<!-- backwards compatibility -->
<a id="schemabrokerconfigdatalist"></a>
<a id="schema_BrokerConfigDataList"></a>
<a id="tocSbrokerconfigdatalist"></a>
<a id="tocsbrokerconfigdatalist"></a>

```json
{
  "kind": "string",
  "metadata": {
    "self": "string",
    "next": "string"
  },
  "data": [
    {
      "kind": "string",
      "metadata": {
        "self": "string",
        "resource_name": "string"
      },
      "cluster_id": "string",
      "name": "string",
      "value": "string",
      "is_default": true,
      "is_read_only": true,
      "is_sensitive": true,
      "source": "string",
      "synonyms": [
        {
          "name": "string",
          "value": "string",
          "source": "string"
        }
      ],
      "broker_id": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|true|none|none|
|metadata|[ResourceCollectionMetadata](#schemaresourcecollectionmetadata)|true|none|none|
|data|[[BrokerConfigData](#schemabrokerconfigdata)]|true|none|none|

<h2 id="tocS_BrokerData">BrokerData</h2>
<!-- backwards compatibility -->
<a id="schemabrokerdata"></a>
<a id="schema_BrokerData"></a>
<a id="tocSbrokerdata"></a>
<a id="tocsbrokerdata"></a>

```json
{
  "kind": "string",
  "metadata": {
    "self": "string",
    "resource_name": "string"
  },
  "cluster_id": "string",
  "broker_id": 0,
  "host": "string",
  "port": 0,
  "rack": "string",
  "configs": {
    "related": "string"
  },
  "partition_replicas": {
    "related": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|true|none|none|
|metadata|[ResourceMetadata](#schemaresourcemetadata)|true|none|none|
|cluster_id|string|true|none|none|
|broker_id|integer|true|none|none|
|host|string \| null|false|none|none|
|port|integer \| null|false|none|none|
|rack|string \| null|false|none|none|
|configs|[Relationship](#schemarelationship)|true|none|none|
|partition_replicas|[Relationship](#schemarelationship)|true|none|none|

<h2 id="tocS_BrokerDataList">BrokerDataList</h2>
<!-- backwards compatibility -->
<a id="schemabrokerdatalist"></a>
<a id="schema_BrokerDataList"></a>
<a id="tocSbrokerdatalist"></a>
<a id="tocsbrokerdatalist"></a>

```json
{
  "kind": "string",
  "metadata": {
    "self": "string",
    "next": "string"
  },
  "data": [
    {
      "kind": "string",
      "metadata": {
        "self": "string",
        "resource_name": "string"
      },
      "cluster_id": "string",
      "broker_id": 0,
      "host": "string",
      "port": 0,
      "rack": "string",
      "configs": {
        "related": "string"
      },
      "partition_replicas": {
        "related": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|true|none|none|
|metadata|[ResourceCollectionMetadata](#schemaresourcecollectionmetadata)|true|none|none|
|data|[[BrokerData](#schemabrokerdata)]|true|none|none|

<h2 id="tocS_ClusterConfigData">ClusterConfigData</h2>
<!-- backwards compatibility -->
<a id="schemaclusterconfigdata"></a>
<a id="schema_ClusterConfigData"></a>
<a id="tocSclusterconfigdata"></a>
<a id="tocsclusterconfigdata"></a>

```json
{
  "kind": "string",
  "metadata": {
    "self": "string",
    "resource_name": "string"
  },
  "cluster_id": "string",
  "name": "string",
  "value": "string",
  "is_default": true,
  "is_read_only": true,
  "is_sensitive": true,
  "source": "string",
  "synonyms": [
    {
      "name": "string",
      "value": "string",
      "source": "string"
    }
  ],
  "config_type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|true|none|none|
|metadata|[ResourceMetadata](#schemaresourcemetadata)|true|none|none|
|cluster_id|string|true|none|none|
|name|string|true|none|none|
|value|string \| null|false|none|none|
|is_default|boolean|true|none|none|
|is_read_only|boolean|true|none|none|
|is_sensitive|boolean|true|none|none|
|source|[ConfigSource](#schemaconfigsource)|true|none|none|
|synonyms|[[ConfigSynonymData](#schemaconfigsynonymdata)]|true|none|none|
|config_type|[ClusterConfigType](#schemaclusterconfigtype)|true|none|none|

<h2 id="tocS_ClusterConfigDataList">ClusterConfigDataList</h2>
<!-- backwards compatibility -->
<a id="schemaclusterconfigdatalist"></a>
<a id="schema_ClusterConfigDataList"></a>
<a id="tocSclusterconfigdatalist"></a>
<a id="tocsclusterconfigdatalist"></a>

```json
{
  "kind": "string",
  "metadata": {
    "self": "string",
    "next": "string"
  },
  "data": [
    {
      "kind": "string",
      "metadata": {
        "self": "string",
        "resource_name": "string"
      },
      "cluster_id": "string",
      "name": "string",
      "value": "string",
      "is_default": true,
      "is_read_only": true,
      "is_sensitive": true,
      "source": "string",
      "synonyms": [
        {
          "name": "string",
          "value": "string",
          "source": "string"
        }
      ],
      "config_type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|true|none|none|
|metadata|[ResourceCollectionMetadata](#schemaresourcecollectionmetadata)|true|none|none|
|data|[[ClusterConfigData](#schemaclusterconfigdata)]|true|none|none|

<h2 id="tocS_ClusterConfigType">ClusterConfigType</h2>
<!-- backwards compatibility -->
<a id="schemaclusterconfigtype"></a>
<a id="schema_ClusterConfigType"></a>
<a id="tocSclusterconfigtype"></a>
<a id="tocsclusterconfigtype"></a>

```json
"string"
```

<h2 id="tocS_ClusterData">ClusterData</h2>
<!-- backwards compatibility -->
<a id="schemaclusterdata"></a>
<a id="schema_ClusterData"></a>
<a id="tocSclusterdata"></a>
<a id="tocsclusterdata"></a>

```json
{
  "kind": "string",
  "metadata": {
    "self": "string",
    "resource_name": "string"
  },
  "cluster_id": "string",
  "controller": {
    "related": "string"
  },
  "acls": {
    "related": "string"
  },
  "brokers": {
    "related": "string"
  },
  "broker_configs": {
    "related": "string"
  },
  "consumer_groups": {
    "related": "string"
  },
  "topics": {
    "related": "string"
  },
  "partition_reassignments": {
    "related": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|true|none|none|
|metadata|[ResourceMetadata](#schemaresourcemetadata)|true|none|none|
|cluster_id|string|true|none|none|
|controller|[Relationship](#schemarelationship)|false|none|none|
|acls|[Relationship](#schemarelationship)|true|none|none|
|brokers|[Relationship](#schemarelationship)|true|none|none|
|broker_configs|[Relationship](#schemarelationship)|true|none|none|
|consumer_groups|[Relationship](#schemarelationship)|true|none|none|
|topics|[Relationship](#schemarelationship)|true|none|none|
|partition_reassignments|[Relationship](#schemarelationship)|true|none|none|

<h2 id="tocS_ClusterDataList">ClusterDataList</h2>
<!-- backwards compatibility -->
<a id="schemaclusterdatalist"></a>
<a id="schema_ClusterDataList"></a>
<a id="tocSclusterdatalist"></a>
<a id="tocsclusterdatalist"></a>

```json
{
  "kind": "string",
  "metadata": {
    "self": "string",
    "next": "string"
  },
  "data": [
    {
      "kind": "string",
      "metadata": {
        "self": "string",
        "resource_name": "string"
      },
      "cluster_id": "string",
      "controller": {
        "related": "string"
      },
      "acls": {
        "related": "string"
      },
      "brokers": {
        "related": "string"
      },
      "broker_configs": {
        "related": "string"
      },
      "consumer_groups": {
        "related": "string"
      },
      "topics": {
        "related": "string"
      },
      "partition_reassignments": {
        "related": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|true|none|none|
|metadata|[ResourceCollectionMetadata](#schemaresourcecollectionmetadata)|true|none|none|
|data|[[ClusterData](#schemaclusterdata)]|true|none|none|

<h2 id="tocS_CreateAclRequestData">CreateAclRequestData</h2>
<!-- backwards compatibility -->
<a id="schemacreateaclrequestdata"></a>
<a id="schema_CreateAclRequestData"></a>
<a id="tocScreateaclrequestdata"></a>
<a id="tocscreateaclrequestdata"></a>

```json
{
  "resource_type": "UNKNOWN",
  "resource_name": "string",
  "pattern_type": "string",
  "principal": "string",
  "host": "string",
  "operation": "string",
  "permission": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resource_type|[AclResourceType](#schemaaclresourcetype)|true|none|none|
|resource_name|string|true|none|none|
|pattern_type|[AclPatternType](#schemaaclpatterntype)|true|none|none|
|principal|string|true|none|none|
|host|string|true|none|none|
|operation|[AclOperation](#schemaacloperation)|true|none|none|
|permission|[AclPermission](#schemaaclpermission)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|resource_type|UNKNOWN|
|resource_type|ANY|
|resource_type|TOPIC|
|resource_type|GROUP|
|resource_type|CLUSTER|
|resource_type|TRANSACTIONAL_ID|
|resource_type|DELEGATION_TOKEN|

<h2 id="tocS_CreateAclRequestDataList">CreateAclRequestDataList</h2>
<!-- backwards compatibility -->
<a id="schemacreateaclrequestdatalist"></a>
<a id="schema_CreateAclRequestDataList"></a>
<a id="tocScreateaclrequestdatalist"></a>
<a id="tocscreateaclrequestdatalist"></a>

```json
{
  "data": [
    {
      "resource_type": "UNKNOWN",
      "resource_name": "string",
      "pattern_type": "string",
      "principal": "string",
      "host": "string",
      "operation": "string",
      "permission": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[CreateAclRequestData](#schemacreateaclrequestdata)]|true|none|none|

<h2 id="tocS_CreateTopicRequestData">CreateTopicRequestData</h2>
<!-- backwards compatibility -->
<a id="schemacreatetopicrequestdata"></a>
<a id="schema_CreateTopicRequestData"></a>
<a id="tocScreatetopicrequestdata"></a>
<a id="tocscreatetopicrequestdata"></a>

```json
{
  "topic_name": "string",
  "partitions_count": 0,
  "replication_factor": 0,
  "replicas_assignments": {
    "property1": [
      0
    ],
    "property2": [
      0
    ]
  },
  "configs": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "validate_only": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|topic_name|string|true|none|none|
|partitions_count|integer|false|none|none|
|replication_factor|integer|false|none|none|
|replicas_assignments|object|false|none|none|
|configs|[object]|false|none|none|
|validate_only|boolean|false|none|none|

<h2 id="tocS_ConfigSource">ConfigSource</h2>
<!-- backwards compatibility -->
<a id="schemaconfigsource"></a>
<a id="schema_ConfigSource"></a>
<a id="tocSconfigsource"></a>
<a id="tocsconfigsource"></a>

```json
"string"
```

<h2 id="tocS_ConfigSynonymData">ConfigSynonymData</h2>
<!-- backwards compatibility -->
<a id="schemaconfigsynonymdata"></a>
<a id="schema_ConfigSynonymData"></a>
<a id="tocSconfigsynonymdata"></a>
<a id="tocsconfigsynonymdata"></a>

```json
{
  "name": "string",
  "value": "string",
  "source": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|value|string \| null|false|none|none|
|source|[ConfigSource](#schemaconfigsource)|true|none|none|

<h2 id="tocS_ConsumerAssignmentData">ConsumerAssignmentData</h2>
<!-- backwards compatibility -->
<a id="schemaconsumerassignmentdata"></a>
<a id="schema_ConsumerAssignmentData"></a>
<a id="tocSconsumerassignmentdata"></a>
<a id="tocsconsumerassignmentdata"></a>

```json
{
  "kind": "string",
  "metadata": {
    "self": "string",
    "resource_name": "string"
  },
  "cluster_id": "string",
  "consumer_group_id": "string",
  "consumer_id": "string",
  "topic_name": "string",
  "partition_id": 0,
  "partition": {
    "related": "string"
  },
  "lag": {
    "related": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|true|none|none|
|metadata|[ResourceMetadata](#schemaresourcemetadata)|true|none|none|
|cluster_id|string|true|none|none|
|consumer_group_id|string|true|none|none|
|consumer_id|string|true|none|none|
|topic_name|string|true|none|none|
|partition_id|integer|true|none|none|
|partition|[Relationship](#schemarelationship)|true|none|none|
|lag|[Relationship](#schemarelationship)|true|none|none|

<h2 id="tocS_ConsumerAssignmentDataList">ConsumerAssignmentDataList</h2>
<!-- backwards compatibility -->
<a id="schemaconsumerassignmentdatalist"></a>
<a id="schema_ConsumerAssignmentDataList"></a>
<a id="tocSconsumerassignmentdatalist"></a>
<a id="tocsconsumerassignmentdatalist"></a>

```json
{
  "kind": "string",
  "metadata": {
    "self": "string",
    "next": "string"
  },
  "data": [
    {
      "kind": "string",
      "metadata": {
        "self": "string",
        "resource_name": "string"
      },
      "cluster_id": "string",
      "consumer_group_id": "string",
      "consumer_id": "string",
      "topic_name": "string",
      "partition_id": 0,
      "partition": {
        "related": "string"
      },
      "lag": {
        "related": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|true|none|none|
|metadata|[ResourceCollectionMetadata](#schemaresourcecollectionmetadata)|true|none|none|
|data|[[ConsumerAssignmentData](#schemaconsumerassignmentdata)]|true|none|none|

<h2 id="tocS_ConsumerData">ConsumerData</h2>
<!-- backwards compatibility -->
<a id="schemaconsumerdata"></a>
<a id="schema_ConsumerData"></a>
<a id="tocSconsumerdata"></a>
<a id="tocsconsumerdata"></a>

```json
{
  "kind": "string",
  "metadata": {
    "self": "string",
    "resource_name": "string"
  },
  "cluster_id": "string",
  "consumer_group_id": "string",
  "consumer_id": "string",
  "instance_id": "string",
  "client_id": "string",
  "assignments": {
    "related": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|true|none|none|
|metadata|[ResourceMetadata](#schemaresourcemetadata)|true|none|none|
|cluster_id|string|true|none|none|
|consumer_group_id|string|true|none|none|
|consumer_id|string|true|none|none|
|instance_id|string \| null|false|none|none|
|client_id|string|true|none|none|
|assignments|[Relationship](#schemarelationship)|true|none|none|

<h2 id="tocS_ConsumerDataList">ConsumerDataList</h2>
<!-- backwards compatibility -->
<a id="schemaconsumerdatalist"></a>
<a id="schema_ConsumerDataList"></a>
<a id="tocSconsumerdatalist"></a>
<a id="tocsconsumerdatalist"></a>

```json
{
  "kind": "string",
  "metadata": {
    "self": "string",
    "next": "string"
  },
  "data": [
    {
      "kind": "string",
      "metadata": {
        "self": "string",
        "resource_name": "string"
      },
      "cluster_id": "string",
      "consumer_group_id": "string",
      "consumer_id": "string",
      "instance_id": "string",
      "client_id": "string",
      "assignments": {
        "related": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|true|none|none|
|metadata|[ResourceCollectionMetadata](#schemaresourcecollectionmetadata)|true|none|none|
|data|[[ConsumerData](#schemaconsumerdata)]|true|none|none|

<h2 id="tocS_ConsumerGroupData">ConsumerGroupData</h2>
<!-- backwards compatibility -->
<a id="schemaconsumergroupdata"></a>
<a id="schema_ConsumerGroupData"></a>
<a id="tocSconsumergroupdata"></a>
<a id="tocsconsumergroupdata"></a>

```json
{
  "kind": "string",
  "metadata": {
    "self": "string",
    "resource_name": "string"
  },
  "cluster_id": "string",
  "consumer_group_id": "string",
  "is_simple": true,
  "partition_assignor": "string",
  "state": "string",
  "type": "string",
  "is_mixed_consumer_group": true,
  "coordinator": {
    "related": "string"
  },
  "consumers": {
    "related": "string"
  },
  "lag_summary": {
    "related": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|true|none|none|
|metadata|[ResourceMetadata](#schemaresourcemetadata)|true|none|none|
|cluster_id|string|true|none|none|
|consumer_group_id|string|true|none|none|
|is_simple|boolean|true|none|none|
|partition_assignor|string|true|none|none|
|state|[ConsumerGroupState](#schemaconsumergroupstate)|true|none|none|
|type|[ConsumerGroupType](#schemaconsumergrouptype)|true|none|none|
|is_mixed_consumer_group|boolean|true|none|none|
|coordinator|[Relationship](#schemarelationship)|true|none|none|
|consumers|[Relationship](#schemarelationship)|true|none|none|
|lag_summary|[Relationship](#schemarelationship)|true|none|none|

<h2 id="tocS_ConsumerGroupDataList">ConsumerGroupDataList</h2>
<!-- backwards compatibility -->
<a id="schemaconsumergroupdatalist"></a>
<a id="schema_ConsumerGroupDataList"></a>
<a id="tocSconsumergroupdatalist"></a>
<a id="tocsconsumergroupdatalist"></a>

```json
{
  "kind": "string",
  "metadata": {
    "self": "string",
    "next": "string"
  },
  "data": [
    {
      "kind": "string",
      "metadata": {
        "self": "string",
        "resource_name": "string"
      },
      "cluster_id": "string",
      "consumer_group_id": "string",
      "is_simple": true,
      "partition_assignor": "string",
      "state": "string",
      "type": "string",
      "is_mixed_consumer_group": true,
      "coordinator": {
        "related": "string"
      },
      "consumers": {
        "related": "string"
      },
      "lag_summary": {
        "related": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|true|none|none|
|metadata|[ResourceCollectionMetadata](#schemaresourcecollectionmetadata)|true|none|none|
|data|[[ConsumerGroupData](#schemaconsumergroupdata)]|true|none|none|

<h2 id="tocS_ConsumerGroupState">ConsumerGroupState</h2>
<!-- backwards compatibility -->
<a id="schemaconsumergroupstate"></a>
<a id="schema_ConsumerGroupState"></a>
<a id="tocSconsumergroupstate"></a>
<a id="tocsconsumergroupstate"></a>

```json
"string"
```

<h2 id="tocS_ConsumerGroupType">ConsumerGroupType</h2>
<!-- backwards compatibility -->
<a id="schemaconsumergrouptype"></a>
<a id="schema_ConsumerGroupType"></a>
<a id="tocSconsumergrouptype"></a>
<a id="tocsconsumergrouptype"></a>

```json
"string"
```

<h2 id="tocS_ConsumerLagData">ConsumerLagData</h2>
<!-- backwards compatibility -->
<a id="schemaconsumerlagdata"></a>
<a id="schema_ConsumerLagData"></a>
<a id="tocSconsumerlagdata"></a>
<a id="tocsconsumerlagdata"></a>

```json
{
  "kind": "string",
  "metadata": {
    "self": "string",
    "resource_name": "string"
  },
  "cluster_id": "string",
  "consumer_group_id": "string",
  "topic_name": "string",
  "partition_id": 0,
  "current_offset": 0,
  "log_end_offset": 0,
  "lag": 0,
  "consumer_id": "string",
  "instance_id": "string",
  "client_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|true|none|none|
|metadata|[ResourceMetadata](#schemaresourcemetadata)|true|none|none|
|cluster_id|string|true|none|none|
|consumer_group_id|string|true|none|none|
|topic_name|string|true|none|none|
|partition_id|integer|true|none|none|
|current_offset|integer(int64)|true|none|none|
|log_end_offset|integer(int64)|true|none|none|
|lag|integer(int64)|true|none|none|
|consumer_id|string|true|none|none|
|instance_id|string \| null|false|none|none|
|client_id|string|true|none|none|

<h2 id="tocS_ConsumerLagDataList">ConsumerLagDataList</h2>
<!-- backwards compatibility -->
<a id="schemaconsumerlagdatalist"></a>
<a id="schema_ConsumerLagDataList"></a>
<a id="tocSconsumerlagdatalist"></a>
<a id="tocsconsumerlagdatalist"></a>

```json
{
  "kind": "string",
  "metadata": {
    "self": "string",
    "next": "string"
  },
  "data": [
    {
      "kind": "string",
      "metadata": {
        "self": "string",
        "resource_name": "string"
      },
      "cluster_id": "string",
      "consumer_group_id": "string",
      "topic_name": "string",
      "partition_id": 0,
      "current_offset": 0,
      "log_end_offset": 0,
      "lag": 0,
      "consumer_id": "string",
      "instance_id": "string",
      "client_id": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|true|none|none|
|metadata|[ResourceCollectionMetadata](#schemaresourcecollectionmetadata)|true|none|none|
|data|[[ConsumerLagData](#schemaconsumerlagdata)]|true|none|none|

<h2 id="tocS_ConsumerGroupLagSummaryData">ConsumerGroupLagSummaryData</h2>
<!-- backwards compatibility -->
<a id="schemaconsumergrouplagsummarydata"></a>
<a id="schema_ConsumerGroupLagSummaryData"></a>
<a id="tocSconsumergrouplagsummarydata"></a>
<a id="tocsconsumergrouplagsummarydata"></a>

```json
{
  "kind": "string",
  "metadata": {
    "self": "string",
    "resource_name": "string"
  },
  "cluster_id": "string",
  "consumer_group_id": "string",
  "max_lag_consumer_id": "string",
  "max_lag_instance_id": "string",
  "max_lag_client_id": "string",
  "max_lag_topic_name": "string",
  "max_lag_partition_id": 0,
  "max_lag": 0,
  "total_lag": 0,
  "max_lag_consumer": {
    "related": "string"
  },
  "max_lag_partition": {
    "related": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|true|none|none|
|metadata|[ResourceMetadata](#schemaresourcemetadata)|true|none|none|
|cluster_id|string|true|none|none|
|consumer_group_id|string|true|none|none|
|max_lag_consumer_id|string|true|none|none|
|max_lag_instance_id|string \| null|false|none|none|
|max_lag_client_id|string|true|none|none|
|max_lag_topic_name|string|true|none|none|
|max_lag_partition_id|integer|true|none|none|
|max_lag|integer(int64)|true|none|none|
|total_lag|integer(int64)|true|none|none|
|max_lag_consumer|[Relationship](#schemarelationship)|true|none|none|
|max_lag_partition|[Relationship](#schemarelationship)|true|none|none|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "error_code": 0,
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error_code|integer(int32)|true|none|none|
|message|string \| null|true|none|none|

<h2 id="tocS_PartitionData">PartitionData</h2>
<!-- backwards compatibility -->
<a id="schemapartitiondata"></a>
<a id="schema_PartitionData"></a>
<a id="tocSpartitiondata"></a>
<a id="tocspartitiondata"></a>

```json
{
  "kind": "string",
  "metadata": {
    "self": "string",
    "resource_name": "string"
  },
  "cluster_id": "string",
  "topic_name": "string",
  "partition_id": 0,
  "leader": {
    "related": "string"
  },
  "replicas": {
    "related": "string"
  },
  "reassignment": {
    "related": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|true|none|none|
|metadata|[ResourceMetadata](#schemaresourcemetadata)|true|none|none|
|cluster_id|string|true|none|none|
|topic_name|string|true|none|none|
|partition_id|integer|true|none|none|
|leader|[Relationship](#schemarelationship)|false|none|none|
|replicas|[Relationship](#schemarelationship)|true|none|none|
|reassignment|[Relationship](#schemarelationship)|true|none|none|

<h2 id="tocS_PartitionDataList">PartitionDataList</h2>
<!-- backwards compatibility -->
<a id="schemapartitiondatalist"></a>
<a id="schema_PartitionDataList"></a>
<a id="tocSpartitiondatalist"></a>
<a id="tocspartitiondatalist"></a>

```json
{
  "kind": "string",
  "metadata": {
    "self": "string",
    "next": "string"
  },
  "data": [
    {
      "kind": "string",
      "metadata": {
        "self": "string",
        "resource_name": "string"
      },
      "cluster_id": "string",
      "topic_name": "string",
      "partition_id": 0,
      "leader": {
        "related": "string"
      },
      "replicas": {
        "related": "string"
      },
      "reassignment": {
        "related": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|true|none|none|
|metadata|[ResourceCollectionMetadata](#schemaresourcecollectionmetadata)|true|none|none|
|data|[[PartitionData](#schemapartitiondata)]|true|none|none|

<h2 id="tocS_PartitionWithOffsetsData">PartitionWithOffsetsData</h2>
<!-- backwards compatibility -->
<a id="schemapartitionwithoffsetsdata"></a>
<a id="schema_PartitionWithOffsetsData"></a>
<a id="tocSpartitionwithoffsetsdata"></a>
<a id="tocspartitionwithoffsetsdata"></a>

```json
{
  "kind": "string",
  "metadata": {
    "self": "string",
    "resource_name": "string"
  },
  "cluster_id": "string",
  "topic_name": "string",
  "partition_id": 0,
  "earliest_offset": null,
  "latest_offset": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|true|none|none|
|metadata|[ResourceMetadata](#schemaresourcemetadata)|true|none|none|
|cluster_id|string|true|none|none|
|topic_name|string|true|none|none|
|partition_id|integer|true|none|none|
|earliest_offset|int64|true|none|none|
|latest_offset|int64|true|none|none|

<h2 id="tocS_ProduceBatchResponse">ProduceBatchResponse</h2>
<!-- backwards compatibility -->
<a id="schemaproducebatchresponse"></a>
<a id="schema_ProduceBatchResponse"></a>
<a id="tocSproducebatchresponse"></a>
<a id="tocsproducebatchresponse"></a>

```json
{
  "successes": [
    {
      "id": "string",
      "cluster_id": "string",
      "topic_name": "string",
      "partition_id": 0,
      "offset": 0,
      "timestamp": "1970-01-01T00:00:00Z",
      "key": {
        "size": 0,
        "type": "string",
        "subject": "string",
        "schema_id": 0,
        "schema_version": 0
      },
      "value": {
        "size": 0,
        "type": "string",
        "subject": "string",
        "schema_id": 0,
        "schema_version": 0
      }
    }
  ],
  "failures": [
    {
      "id": "string",
      "error_code": 0,
      "message": "string"
    }
  ]
}
```

Response for producing a batch of records.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|successes|[[ProduceBatchResponseSuccessEntry](#schemaproducebatchresponsesuccessentry)]|false|none|Successful batch results.|
|failures|[[ProduceBatchResponseFailureEntry](#schemaproducebatchresponsefailureentry)]|false|none|Failed batch results.|

<h2 id="tocS_ProduceBatchResponseFailureEntry">ProduceBatchResponseFailureEntry</h2>
<!-- backwards compatibility -->
<a id="schemaproducebatchresponsefailureentry"></a>
<a id="schema_ProduceBatchResponseFailureEntry"></a>
<a id="tocSproducebatchresponsefailureentry"></a>
<a id="tocsproducebatchresponsefailureentry"></a>

```json
{
  "id": "string",
  "error_code": 0,
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Batch entry ID.|
|error_code|integer(int32)|true|none|Error code.|
|message|string|false|none|Error message.|

<h2 id="tocS_ProduceBatchResponseSuccessEntry">ProduceBatchResponseSuccessEntry</h2>
<!-- backwards compatibility -->
<a id="schemaproducebatchresponsesuccessentry"></a>
<a id="schema_ProduceBatchResponseSuccessEntry"></a>
<a id="tocSproducebatchresponsesuccessentry"></a>
<a id="tocsproducebatchresponsesuccessentry"></a>

```json
{
  "id": "string",
  "cluster_id": "string",
  "topic_name": "string",
  "partition_id": 0,
  "offset": 0,
  "timestamp": "1970-01-01T00:00:00Z",
  "key": {
    "size": 0,
    "type": "string",
    "subject": "string",
    "schema_id": 0,
    "schema_version": 0
  },
  "value": {
    "size": 0,
    "type": "string",
    "subject": "string",
    "schema_id": 0,
    "schema_version": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Batch entry ID.|
|cluster_id|string|false|none|none|
|topic_name|string|false|none|none|
|partition_id|integer(int32)|false|none|none|
|offset|integer(int64)|false|none|none|
|timestamp|string(date-time) \| null|false|none|none|
|key|[ProduceResponseData](#schemaproduceresponsedata)|false|none|none|
|value|[ProduceResponseData](#schemaproduceresponsedata)|false|none|none|

<h2 id="tocS_ProduceResponse">ProduceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaproduceresponse"></a>
<a id="schema_ProduceResponse"></a>
<a id="tocSproduceresponse"></a>
<a id="tocsproduceresponse"></a>

```json
{
  "error_code": 0,
  "message": "string",
  "cluster_id": "string",
  "topic_name": "string",
  "partition_id": 0,
  "offset": 0,
  "timestamp": "1970-01-01T00:00:00Z",
  "key": {
    "size": 0,
    "type": "string",
    "subject": "string",
    "schema_id": 0,
    "schema_version": 0
  },
  "value": {
    "size": 0,
    "type": "string",
    "subject": "string",
    "schema_id": 0,
    "schema_version": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error_code|integer(int32)|true|none|none|
|message|string|false|none|none|
|cluster_id|string|false|none|none|
|topic_name|string|false|none|none|
|partition_id|integer(int32)|false|none|none|
|offset|integer(int64)|false|none|none|
|timestamp|string(date-time) \| null|false|none|none|
|key|[ProduceResponseData](#schemaproduceresponsedata)|false|none|none|
|value|[ProduceResponseData](#schemaproduceresponsedata)|false|none|none|

<h2 id="tocS_ProduceResponseData">ProduceResponseData</h2>
<!-- backwards compatibility -->
<a id="schemaproduceresponsedata"></a>
<a id="schema_ProduceResponseData"></a>
<a id="tocSproduceresponsedata"></a>
<a id="tocsproduceresponsedata"></a>

```json
{
  "size": 0,
  "type": "string",
  "subject": "string",
  "schema_id": 0,
  "schema_version": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|size|integer(int64)|true|none|none|
|type|string \| null|true|none|none|
|subject|string \| null|false|none|none|
|schema_id|integer \| null|false|none|none|
|schema_version|integer \| null|false|none|none|

<h2 id="tocS_ProduceBatchRequest">ProduceBatchRequest</h2>
<!-- backwards compatibility -->
<a id="schemaproducebatchrequest"></a>
<a id="schema_ProduceBatchRequest"></a>
<a id="tocSproducebatchrequest"></a>
<a id="tocsproducebatchrequest"></a>

```json
{
  "entries": [
    {
      "id": "string",
      "partition_id": 0,
      "headers": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "key": {
        "type": "string",
        "subject": "string",
        "subject_name_strategy": "string",
        "schema_id": 0,
        "schema_version": 0,
        "schema": "string",
        "data": null
      },
      "value": {
        "type": "string",
        "subject": "string",
        "subject_name_strategy": "string",
        "schema_id": 0,
        "schema_version": 0,
        "schema": "string",
        "data": null
      },
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ]
}
```

Request for producing a batch of records.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[ProduceBatchRequestEntry](#schemaproducebatchrequestentry)]|true|none|none|

<h2 id="tocS_ProduceBatchRequestEntry">ProduceBatchRequestEntry</h2>
<!-- backwards compatibility -->
<a id="schemaproducebatchrequestentry"></a>
<a id="schema_ProduceBatchRequestEntry"></a>
<a id="tocSproducebatchrequestentry"></a>
<a id="tocsproducebatchrequestentry"></a>

```json
{
  "id": "string",
  "partition_id": 0,
  "headers": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "key": {
    "type": "string",
    "subject": "string",
    "subject_name_strategy": "string",
    "schema_id": 0,
    "schema_version": 0,
    "schema": "string",
    "data": null
  },
  "value": {
    "type": "string",
    "subject": "string",
    "subject_name_strategy": "string",
    "schema_id": 0,
    "schema_version": 0,
    "schema": "string",
    "data": null
  },
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Batch entry ID.|
|partition_id|integer(int32) \| null|false|none|none|
|headers|[[ProduceRequestHeader](#schemaproducerequestheader)]|false|none|none|
|key|[ProduceRequestData](#schemaproducerequestdata)|false|none|none|
|value|[ProduceRequestData](#schemaproducerequestdata)|false|none|none|
|timestamp|string(date-time) \| null|false|none|none|

<h2 id="tocS_ProduceRequest">ProduceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaproducerequest"></a>
<a id="schema_ProduceRequest"></a>
<a id="tocSproducerequest"></a>
<a id="tocsproducerequest"></a>

```json
{
  "partition_id": 0,
  "headers": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "key": {
    "type": "string",
    "subject": "string",
    "subject_name_strategy": "string",
    "schema_id": 0,
    "schema_version": 0,
    "schema": "string",
    "data": null
  },
  "value": {
    "type": "string",
    "subject": "string",
    "subject_name_strategy": "string",
    "schema_id": 0,
    "schema_version": 0,
    "schema": "string",
    "data": null
  },
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|partition_id|integer(int32) \| null|false|none|none|
|headers|[[ProduceRequestHeader](#schemaproducerequestheader)]|false|none|none|
|key|[ProduceRequestData](#schemaproducerequestdata)|false|none|none|
|value|[ProduceRequestData](#schemaproducerequestdata)|false|none|none|
|timestamp|string(date-time) \| null|false|none|none|

<h2 id="tocS_ProduceRequestData">ProduceRequestData</h2>
<!-- backwards compatibility -->
<a id="schemaproducerequestdata"></a>
<a id="schema_ProduceRequestData"></a>
<a id="tocSproducerequestdata"></a>
<a id="tocsproducerequestdata"></a>

```json
{
  "type": "string",
  "subject": "string",
  "subject_name_strategy": "string",
  "schema_id": 0,
  "schema_version": 0,
  "schema": "string",
  "data": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|subject|string \| null|false|none|none|
|subject_name_strategy|string \| null|false|none|none|
|schema_id|integer \| null|false|none|none|
|schema_version|integer \| null|false|none|none|
|schema|string \| null|false|none|none|
|data|[AnyValue](#schemaanyvalue)|false|none|none|

<h2 id="tocS_ProduceRequestHeader">ProduceRequestHeader</h2>
<!-- backwards compatibility -->
<a id="schemaproducerequestheader"></a>
<a id="schema_ProduceRequestHeader"></a>
<a id="tocSproducerequestheader"></a>
<a id="tocsproducerequestheader"></a>

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
|value|string(byte) \| null|false|none|none|

<h2 id="tocS_ReassignmentData">ReassignmentData</h2>
<!-- backwards compatibility -->
<a id="schemareassignmentdata"></a>
<a id="schema_ReassignmentData"></a>
<a id="tocSreassignmentdata"></a>
<a id="tocsreassignmentdata"></a>

```json
{
  "kind": "string",
  "metadata": {
    "self": "string",
    "resource_name": "string"
  },
  "cluster_id": "string",
  "topic_name": "string",
  "partition_id": 0,
  "adding_replicas": [
    0
  ],
  "removing_replicas": [
    0
  ],
  "replicas": {
    "related": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|true|none|none|
|metadata|[ResourceMetadata](#schemaresourcemetadata)|true|none|none|
|cluster_id|string|true|none|none|
|topic_name|string|true|none|none|
|partition_id|integer|true|none|none|
|adding_replicas|[integer]|true|none|none|
|removing_replicas|[integer]|true|none|none|
|replicas|[Relationship](#schemarelationship)|true|none|none|

<h2 id="tocS_ReassignmentDataList">ReassignmentDataList</h2>
<!-- backwards compatibility -->
<a id="schemareassignmentdatalist"></a>
<a id="schema_ReassignmentDataList"></a>
<a id="tocSreassignmentdatalist"></a>
<a id="tocsreassignmentdatalist"></a>

```json
{
  "kind": "string",
  "metadata": {
    "self": "string",
    "next": "string"
  },
  "data": [
    {
      "kind": "string",
      "metadata": {
        "self": "string",
        "resource_name": "string"
      },
      "cluster_id": "string",
      "topic_name": "string",
      "partition_id": 0,
      "adding_replicas": [
        0
      ],
      "removing_replicas": [
        0
      ],
      "replicas": {
        "related": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|true|none|none|
|metadata|[ResourceCollectionMetadata](#schemaresourcecollectionmetadata)|true|none|none|
|data|[[ReassignmentData](#schemareassignmentdata)]|true|none|none|

<h2 id="tocS_Relationship">Relationship</h2>
<!-- backwards compatibility -->
<a id="schemarelationship"></a>
<a id="schema_Relationship"></a>
<a id="tocSrelationship"></a>
<a id="tocsrelationship"></a>

```json
{
  "related": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|related|string|true|none|none|

<h2 id="tocS_ReplicaData">ReplicaData</h2>
<!-- backwards compatibility -->
<a id="schemareplicadata"></a>
<a id="schema_ReplicaData"></a>
<a id="tocSreplicadata"></a>
<a id="tocsreplicadata"></a>

```json
{
  "kind": "string",
  "metadata": {
    "self": "string",
    "resource_name": "string"
  },
  "cluster_id": "string",
  "topic_name": "string",
  "partition_id": 0,
  "broker_id": 0,
  "is_leader": true,
  "is_in_sync": true,
  "broker": {
    "related": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|true|none|none|
|metadata|[ResourceMetadata](#schemaresourcemetadata)|true|none|none|
|cluster_id|string|true|none|none|
|topic_name|string|true|none|none|
|partition_id|integer|true|none|none|
|broker_id|integer|true|none|none|
|is_leader|boolean|true|none|none|
|is_in_sync|boolean|true|none|none|
|broker|[Relationship](#schemarelationship)|true|none|none|

<h2 id="tocS_ReplicaDataList">ReplicaDataList</h2>
<!-- backwards compatibility -->
<a id="schemareplicadatalist"></a>
<a id="schema_ReplicaDataList"></a>
<a id="tocSreplicadatalist"></a>
<a id="tocsreplicadatalist"></a>

```json
{
  "kind": "string",
  "metadata": {
    "self": "string",
    "next": "string"
  },
  "data": [
    {
      "kind": "string",
      "metadata": {
        "self": "string",
        "resource_name": "string"
      },
      "cluster_id": "string",
      "topic_name": "string",
      "partition_id": 0,
      "broker_id": 0,
      "is_leader": true,
      "is_in_sync": true,
      "broker": {
        "related": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|true|none|none|
|metadata|[ResourceCollectionMetadata](#schemaresourcecollectionmetadata)|true|none|none|
|data|[[ReplicaData](#schemareplicadata)]|true|none|none|

<h2 id="tocS_Resource">Resource</h2>
<!-- backwards compatibility -->
<a id="schemaresource"></a>
<a id="schema_Resource"></a>
<a id="tocSresource"></a>
<a id="tocsresource"></a>

```json
{
  "kind": "string",
  "metadata": {
    "self": "string",
    "resource_name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|true|none|none|
|metadata|[ResourceMetadata](#schemaresourcemetadata)|true|none|none|

<h2 id="tocS_ResourceCollection">ResourceCollection</h2>
<!-- backwards compatibility -->
<a id="schemaresourcecollection"></a>
<a id="schema_ResourceCollection"></a>
<a id="tocSresourcecollection"></a>
<a id="tocsresourcecollection"></a>

```json
{
  "kind": "string",
  "metadata": {
    "self": "string",
    "next": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|true|none|none|
|metadata|[ResourceCollectionMetadata](#schemaresourcecollectionmetadata)|true|none|none|

<h2 id="tocS_ResourceCollectionMetadata">ResourceCollectionMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaresourcecollectionmetadata"></a>
<a id="schema_ResourceCollectionMetadata"></a>
<a id="tocSresourcecollectionmetadata"></a>
<a id="tocsresourcecollectionmetadata"></a>

```json
{
  "self": "string",
  "next": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|self|string|true|none|none|
|next|string \| null|false|none|none|

<h2 id="tocS_ResourceMetadata">ResourceMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaresourcemetadata"></a>
<a id="schema_ResourceMetadata"></a>
<a id="tocSresourcemetadata"></a>
<a id="tocsresourcemetadata"></a>

```json
{
  "self": "string",
  "resource_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|self|string|true|none|none|
|resource_name|string \| null|false|none|none|

<h2 id="tocS_TopicConfigData">TopicConfigData</h2>
<!-- backwards compatibility -->
<a id="schematopicconfigdata"></a>
<a id="schema_TopicConfigData"></a>
<a id="tocStopicconfigdata"></a>
<a id="tocstopicconfigdata"></a>

```json
{
  "kind": "string",
  "metadata": {
    "self": "string",
    "resource_name": "string"
  },
  "cluster_id": "string",
  "name": "string",
  "value": "string",
  "is_default": true,
  "is_read_only": true,
  "is_sensitive": true,
  "source": "string",
  "synonyms": [
    {
      "name": "string",
      "value": "string",
      "source": "string"
    }
  ],
  "topic_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|true|none|none|
|metadata|[ResourceMetadata](#schemaresourcemetadata)|true|none|none|
|cluster_id|string|true|none|none|
|name|string|true|none|none|
|value|string \| null|false|none|none|
|is_default|boolean|true|none|none|
|is_read_only|boolean|true|none|none|
|is_sensitive|boolean|true|none|none|
|source|[ConfigSource](#schemaconfigsource)|true|none|none|
|synonyms|[[ConfigSynonymData](#schemaconfigsynonymdata)]|true|none|none|
|topic_name|string|true|none|none|

<h2 id="tocS_TopicConfigDataList">TopicConfigDataList</h2>
<!-- backwards compatibility -->
<a id="schematopicconfigdatalist"></a>
<a id="schema_TopicConfigDataList"></a>
<a id="tocStopicconfigdatalist"></a>
<a id="tocstopicconfigdatalist"></a>

```json
{
  "kind": "string",
  "metadata": {
    "self": "string",
    "next": "string"
  },
  "data": [
    {
      "kind": "string",
      "metadata": {
        "self": "string",
        "resource_name": "string"
      },
      "cluster_id": "string",
      "name": "string",
      "value": "string",
      "is_default": true,
      "is_read_only": true,
      "is_sensitive": true,
      "source": "string",
      "synonyms": [
        {
          "name": "string",
          "value": "string",
          "source": "string"
        }
      ],
      "topic_name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|true|none|none|
|metadata|[ResourceCollectionMetadata](#schemaresourcecollectionmetadata)|true|none|none|
|data|[[TopicConfigData](#schematopicconfigdata)]|true|none|none|

<h2 id="tocS_TopicData">TopicData</h2>
<!-- backwards compatibility -->
<a id="schematopicdata"></a>
<a id="schema_TopicData"></a>
<a id="tocStopicdata"></a>
<a id="tocstopicdata"></a>

```json
{
  "kind": "string",
  "metadata": {
    "self": "string",
    "resource_name": "string"
  },
  "cluster_id": "string",
  "topic_name": "string",
  "is_internal": true,
  "replication_factor": 0,
  "partitions_count": 0,
  "partitions": {
    "related": "string"
  },
  "configs": {
    "related": "string"
  },
  "partition_reassignments": {
    "related": "string"
  },
  "authorized_operations": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|true|none|none|
|metadata|[ResourceMetadata](#schemaresourcemetadata)|true|none|none|
|cluster_id|string|true|none|none|
|topic_name|string|true|none|none|
|is_internal|boolean|true|none|none|
|replication_factor|integer|true|none|none|
|partitions_count|integer|true|none|none|
|partitions|[Relationship](#schemarelationship)|true|none|none|
|configs|[Relationship](#schemarelationship)|true|none|none|
|partition_reassignments|[Relationship](#schemarelationship)|true|none|none|
|authorized_operations|[AuthorizedOperations](#schemaauthorizedoperations)|false|none|none|

<h2 id="tocS_TopicDataList">TopicDataList</h2>
<!-- backwards compatibility -->
<a id="schematopicdatalist"></a>
<a id="schema_TopicDataList"></a>
<a id="tocStopicdatalist"></a>
<a id="tocstopicdatalist"></a>

```json
{
  "kind": "string",
  "metadata": {
    "self": "string",
    "next": "string"
  },
  "data": [
    {
      "kind": "string",
      "metadata": {
        "self": "string",
        "resource_name": "string"
      },
      "cluster_id": "string",
      "topic_name": "string",
      "is_internal": true,
      "replication_factor": 0,
      "partitions_count": 0,
      "partitions": {
        "related": "string"
      },
      "configs": {
        "related": "string"
      },
      "partition_reassignments": {
        "related": "string"
      },
      "authorized_operations": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|true|none|none|
|metadata|[ResourceCollectionMetadata](#schemaresourcecollectionmetadata)|true|none|none|
|data|[[TopicData](#schematopicdata)]|true|none|none|

<h2 id="tocS_UpdateConfigRequestData">UpdateConfigRequestData</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconfigrequestdata"></a>
<a id="schema_UpdateConfigRequestData"></a>
<a id="tocSupdateconfigrequestdata"></a>
<a id="tocsupdateconfigrequestdata"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string \| null|false|none|none|

<h2 id="tocS_UpdatePartitionCountRequestData">UpdatePartitionCountRequestData</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepartitioncountrequestdata"></a>
<a id="schema_UpdatePartitionCountRequestData"></a>
<a id="tocSupdatepartitioncountrequestdata"></a>
<a id="tocsupdatepartitioncountrequestdata"></a>

```json
{
  "partitions_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|partitions_count|integer(int32)|true|none|none|
