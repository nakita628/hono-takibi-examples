<h1 id="http-bridge-api-reference">HTTP Bridge API Reference v0.1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The HTTP Bridge provides a REST API for integrating HTTP based client applications with a Kafka cluster. You can use the API to create and manage consumers and send and receive records over HTTP rather than the native Kafka protocol.

<h1 id="http-bridge-api-reference-consumers">Consumers</h1>

Consumer operations to create consumers in your Kafka cluster and perform common actions, such as subscribing to topics, retrieving processed records, and committing offsets.

## createConsumer

<a id="opIdcreateConsumer"></a>

> Code samples

```bash
curl http://localhost:8080/consumers/string \
  -X POST \
  -H 'Content-Type: application/vnd.kafka.v2+json' \
  -H 'Accept: application/vnd.kafka.v2+json' \
  -d '{
    "name": "consumer1",
    "format": "binary",
    "auto.offset.reset": "earliest",
    "enable.auto.commit": false,
    "fetch.min.bytes": 512,
    "consumer.request.timeout.ms": 30000,
    "isolation.level": "read_committed"
  }'
```

`POST /consumers/{groupid}`

Creates a consumer instance in the given consumer group. You can optionally specify a consumer name and supported configuration options. It returns a base URI which must be used to construct URLs for subsequent requests against this consumer instance.

> Body parameter

```json
{
  "name": "consumer1",
  "format": "binary",
  "auto.offset.reset": "earliest",
  "enable.auto.commit": false,
  "fetch.min.bytes": 512,
  "consumer.request.timeout.ms": 30000,
  "isolation.level": "read_committed"
}
```

<h3 id="createconsumer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupid|path|string|true|ID of the consumer group in which to create the consumer.|
|body|body|[Consumer](#schemaconsumer)|false|Name and configuration of the consumer. The name is unique within the scope of the consumer group. If a name is not specified, a randomly generated name is assigned. All parameters are optional. The supported configuration options are shown in the following example.|
|» name|body|string|false|The unique name for the consumer instance. The name is unique within the scope of the consumer group. The name is used in URLs. If a name is not specified, a randomly generated name is assigned.|
|» format|body|string|false|The allowable message format for the consumer, which can be `binary` (default) or `json`. The messages are converted into a JSON format.|
|» auto.offset.reset|body|string|false|Resets the offset position for the consumer. If set to `latest` (default), messages are read from the latest offset. If set to `earliest`, messages are read from the first offset.|
|» fetch.min.bytes|body|integer|false|Sets the minimum amount of data, in bytes, for the consumer to receive. The broker waits until the data to send exceeds this amount. Default is `1` byte.|
|» consumer.request.timeout.ms|body|integer|false|Sets the maximum amount of time, in milliseconds, for the consumer to wait for messages for a request. If the timeout period is reached without a response, an error is returned. Default is `30000` (30 seconds).|
|» enable.auto.commit|body|boolean|false|If set to `true` (default), message offsets are committed automatically for the consumer. If set to `false`, message offsets must be committed manually.|
|» isolation.level|body|string|false|If set to `read_uncommitted` (default), all transaction records are retrieved, indpendent of any transaction outcome. If set to `read_committed`, the records from committed transactions are retrieved.|

> Example responses

> 200 Response

```json
{
  "instance_id": "consumer1",
  "base_uri": "http://localhost:8080/consumers/my-group/instances/consumer1"
}
```

> 409 Response

```json
{
  "error_code": 409,
  "message": "A consumer instance with the specified name already exists in the HTTP Bridge."
}
```

> 422 Response

```json
{
  "error_code": 422,
  "message": "One or more consumer configuration options have invalid values."
}
```

<h3 id="createconsumer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Consumer created successfully.|[CreatedConsumer](#schemacreatedconsumer)|
|409|Conflict|A consumer instance with the specified name already exists in the HTTP Bridge.|[Error](#schemaerror)|
|422|Unprocessable Entity|One or more consumer configuration options have invalid values.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## listSubscriptions

<a id="opIdlistSubscriptions"></a>

> Code samples

```bash
curl http://localhost:8080/consumers/string/instances/string/subscription \
  -H 'Accept: application/vnd.kafka.v2+json'
```

`GET /consumers/{groupid}/instances/{name}/subscription`

Retrieves a list of the topics to which the consumer is subscribed.

<h3 id="listsubscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupid|path|string|true|ID of the consumer group to which the subscribed consumer belongs.|
|name|path|string|true|Name of the subscribed consumer.|

> Example responses

> 200 Response

```json
{
  "topics": [
    "my-topic1",
    "my-topic2"
  ],
  "partitions": [
    {
      "my-topic1": [
        1,
        2,
        3
      ]
    },
    {
      "my-topic2": [
        1
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "The specified consumer instance was not found."
}
```

<h3 id="listsubscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of subscribed topics and partitions.|[SubscribedTopicList](#schemasubscribedtopiclist)|
|404|Not Found|The specified consumer instance was not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## subscribe

<a id="opIdsubscribe"></a>

> Code samples

```bash
curl http://localhost:8080/consumers/string/instances/string/subscription \
  -X POST \
  -H 'Content-Type: application/vnd.kafka.v2+json' \
  -H 'Accept: application/vnd.kafka.v2+json' \
  -d '{
    "topics": [
      "topic1",
      "topic2"
    ]
  }'
```

`POST /consumers/{groupid}/instances/{name}/subscription`

Subscribes a consumer to one or more topics. You can describe the topics to which the consumer will subscribe in a list (of `Topics` type) or as a `topic_pattern` field. Each call replaces the subscriptions for the subscriber.

> Body parameter

```json
{
  "topics": [
    "topic1",
    "topic2"
  ]
}
```

<h3 id="subscribe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupid|path|string|true|ID of the consumer group to which the subscribed consumer belongs.|
|name|path|string|true|Name of the consumer to subscribe to topics.|
|body|body|[Topics](#schematopics)|true|List of topics to which the consumer will subscribe.|
|» topics|body|[string]|false|List of topic names to subscribe to.|
|» topic_pattern|body|string|false|A regex topic pattern for matching multiple topics.|

> Example responses

> 404 Response

```json
{
  "error_code": 404,
  "message": "The specified consumer instance was not found."
}
```

> 409 Response

```json
{
  "error_code": 409,
  "message": "Subscriptions to topics, partitions, and patterns are mutually exclusive."
}
```

> 422 Response

```json
{
  "error_code": 422,
  "message": "A list (of Topics type) or a topic_pattern must be specified."
}
```

<h3 id="subscribe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Consumer subscribed successfully.|None|
|404|Not Found|The specified consumer instance was not found.|[Error](#schemaerror)|
|409|Conflict|Subscriptions to topics, partitions, and patterns are mutually exclusive.|[Error](#schemaerror)|
|422|Unprocessable Entity|A list (of `Topics` type) or a `topic_pattern` must be specified.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## unsubscribe

<a id="opIdunsubscribe"></a>

> Code samples

```bash
curl http://localhost:8080/consumers/string/instances/string/subscription \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /consumers/{groupid}/instances/{name}/subscription`

Unsubscribes a consumer from all topics.

<h3 id="unsubscribe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupid|path|string|true|ID of the consumer group to which the subscribed consumer belongs.|
|name|path|string|true|Name of the consumer to unsubscribe from topics.|

> Example responses

> 404 Response

```json
{
  "error_code": 404,
  "message": "The specified consumer instance was not found."
}
```

<h3 id="unsubscribe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Consumer unsubscribed successfully.|None|
|404|Not Found|The specified consumer instance was not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## assign

<a id="opIdassign"></a>

> Code samples

```bash
curl http://localhost:8080/consumers/string/instances/string/assignments \
  -X POST \
  -H 'Content-Type: application/vnd.kafka.v2+json' \
  -H 'Accept: application/vnd.kafka.v2+json' \
  -d '{
    "partitions": [
      {
        "topic": "topic",
        "partition": 0
      },
      {
        "topic": "topic",
        "partition": 1
      }
    ]
  }'
```

`POST /consumers/{groupid}/instances/{name}/assignments`

Assigns one or more topic partitions to a consumer.

> Body parameter

```json
{
  "partitions": [
    {
      "topic": "topic",
      "partition": 0
    },
    {
      "topic": "topic",
      "partition": 1
    }
  ]
}
```

<h3 id="assign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupid|path|string|true|ID of the consumer group to which the consumer belongs.|
|name|path|string|true|Name of the consumer to assign topic partitions to.|
|body|body|[Partitions](#schemapartitions)|true|List of topic partitions to assign to the consumer.|
|» partitions|body|[[Partition](#schemapartition)]|false|Array of topic partition identifiers.|

> Example responses

> 404 Response

```json
{
  "error_code": 404,
  "message": "The specified consumer instance was not found."
}
```

> 409 Response

```json
{
  "error_code": 409,
  "message": "Subscriptions to topics, partitions, and patterns are mutually exclusive."
}
```

<h3 id="assign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Partitions assigned successfully.|None|
|404|Not Found|The specified consumer instance was not found.|[Error](#schemaerror)|
|409|Conflict|Subscriptions to topics, partitions, and patterns are mutually exclusive.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## poll

<a id="opIdpoll"></a>

> Code samples

```bash
curl http://localhost:8080/consumers/string/instances/string/records \
  -H 'Accept: application/vnd.kafka.json.v2+json'
```

`GET /consumers/{groupid}/instances/{name}/records`

Retrieves records for a subscribed consumer, including message values, topics, and partitions. The request for this operation MUST use the base URL (including the host and port) returned in the response from the `POST` request to `/consumers/{groupid}` that was used to create this consumer.

<h3 id="poll-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupid|path|string|true|ID of the consumer group to which the subscribed consumer belongs.|
|name|path|string|true|Name of the subscribed consumer to retrieve records from.|
|timeout|query|integer|false|The maximum amount of time, in milliseconds, that the HTTP Bridge spends retrieving records before timing out the request.|
|max_bytes|query|integer|false|The maximum size, in bytes, of unencoded keys and values that can be included in the response. Otherwise, an error response with code 422 is returned.|

> Example responses

> 200 Response

```json
[
  {
    "topic": "topic",
    "key": "key1",
    "value": {
      "foo": "bar"
    },
    "partition": 0,
    "offset": 2,
    "timestamp": 1591897790000
  },
  {
    "topic": "topic",
    "key": "key2",
    "value": [
      "foo2",
      "bar2"
    ],
    "partition": 1,
    "offset": 3,
    "timestamp": 1591897790002
  }
]
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "resource not found"
}
```

> 406 Response

```json
{
  "error_code": 404,
  "message": "resource not found"
}
```

> 422 Response

```json
{
  "error_code": 404,
  "message": "resource not found"
}
```

<h3 id="poll-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Poll request executed successfully.|[ConsumerRecordList](#schemaconsumerrecordlist)|
|404|Not Found|The specified consumer instance was not found.|[Error](#schemaerror)|
|406|Not Acceptable|The `format` used in the consumer creation request does not match the embedded format in the Accept header of this request or the bridge got a message from the topic which is not JSON encoded.|[Error](#schemaerror)|
|422|Unprocessable Entity|Response exceeds the maximum number of bytes the consumer can receive.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## deleteConsumer

<a id="opIddeleteConsumer"></a>

> Code samples

```bash
curl http://localhost:8080/consumers/string/instances/string \
  -X DELETE \
  -H 'Accept: application/vnd.kafka.v2+json'
```

`DELETE /consumers/{groupid}/instances/{name}`

Deletes a specified consumer instance. The request for this operation MUST use the base URL (including the host and port) returned in the response from the `POST` request to `/consumers/{groupid}` that was used to create this consumer.

<h3 id="deleteconsumer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupid|path|string|true|ID of the consumer group to which the consumer belongs.|
|name|path|string|true|Name of the consumer to delete.|

> Example responses

> 404 Response

```json
{
  "error_code": 404,
  "message": "The specified consumer instance was not found."
}
```

<h3 id="deleteconsumer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Consumer removed successfully.|None|
|404|Not Found|The specified consumer instance was not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## commit

<a id="opIdcommit"></a>

> Code samples

```bash
curl http://localhost:8080/consumers/string/instances/string/offsets \
  -X POST \
  -H 'Content-Type: application/vnd.kafka.v2+json' \
  -H 'Accept: application/vnd.kafka.v2+json' \
  -d '{
    "offsets": [
      {
        "topic": "topic",
        "partition": 0,
        "offset": 15
      },
      {
        "topic": "topic",
        "partition": 1,
        "offset": 42
      }
    ]
  }'
```

`POST /consumers/{groupid}/instances/{name}/offsets`

Commits a list of consumer offsets. To commit offsets for all records fetched by the consumer, leave the request body empty.

> Body parameter

```json
{
  "offsets": [
    {
      "topic": "topic",
      "partition": 0,
      "offset": 15
    },
    {
      "topic": "topic",
      "partition": 1,
      "offset": 42
    }
  ]
}
```

<h3 id="commit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupid|path|string|true|ID of the consumer group to which the consumer belongs.|
|name|path|string|true|Name of the consumer.|
|body|body|[OffsetCommitSeekList](#schemaoffsetcommitseeklist)|false|List of consumer offsets to commit to the consumer offsets commit log. You can specify one or more topic partitions to commit offsets for.|
|» offsets|body|[[OffsetCommitSeek](#schemaoffsetcommitseek)]|false|Array of offset positions for topic partitions.|

> Example responses

> 404 Response

```json
{
  "error_code": 404,
  "message": "The specified consumer instance was not found."
}
```

<h3 id="commit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Commit made successfully.|None|
|404|Not Found|The specified consumer instance was not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="http-bridge-api-reference-topics">Topics</h1>

Topic operations to send messages to a specified topic or topic partition, optionally including message keys in requests. You can also retrieve topics and topic metadata.

## listTopics

<a id="opIdlistTopics"></a>

> Code samples

```bash
curl http://localhost:8080/topics \
  -H 'Accept: application/vnd.kafka.v2+json'
```

`GET /topics`

Retrieves a list of all topics.

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="listtopics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of topics.|Inline|

<h3 id="listtopics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getTopic

<a id="opIdgetTopic"></a>

> Code samples

```bash
curl http://localhost:8080/topics/string \
  -H 'Accept: application/vnd.kafka.v2+json'
```

`GET /topics/{topicname}`

Retrieves the metadata about a given topic.

<h3 id="gettopic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|topicname|path|string|true|Name of the topic to send records to or retrieve metadata from.|

> Example responses

> 200 Response

```json
{
  "name": "topic",
  "offset": 2,
  "configs": {
    "cleanup.policy": "compact"
  },
  "partitions": [
    {
      "partition": 1,
      "leader": 1,
      "replicas": [
        {
          "broker": 1,
          "leader": true,
          "in_sync": true
        },
        {
          "broker": 2,
          "leader": false,
          "in_sync": true
        }
      ]
    },
    {
      "partition": 2,
      "leader": 2,
      "replicas": [
        {
          "broker": 1,
          "leader": false,
          "in_sync": true
        },
        {
          "broker": 2,
          "leader": true,
          "in_sync": true
        }
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "The specified topic was not found."
}
```

<h3 id="gettopic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Topic metadata.|[TopicMetadata](#schematopicmetadata)|
|404|Not Found|The specified topic was not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## send

<a id="opIdsend"></a>

> Code samples

```bash
curl http://localhost:8080/topics/string \
  -X POST \
  -H 'Content-Type: application/vnd.kafka.json.v2+json' \
  -H 'Accept: application/vnd.kafka.v2+json' \
  -d '{
    "records": [
      {
        "key": "key1",
        "value": "value1"
      },
      {
        "value": "value2",
        "partition": 1
      },
      {
        "value": "value3"
      }
    ]
  }'
```

`POST /topics/{topicname}`

Sends one or more records to a given topic, optionally specifying a partition, key, or both.

> Body parameter

```json
{
  "records": [
    {
      "key": "key1",
      "value": "value1"
    },
    {
      "value": "value2",
      "partition": 1
    },
    {
      "value": "value3"
    }
  ]
}
```

<h3 id="send-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|async|query|boolean|false|Ignore metadata as result of the sending operation, not returning them to the client. If not specified it is false, metadata returned.|
|topicname|path|string|true|Name of the topic to send records to or retrieve metadata from.|
|body|body|[ProducerRecordList](#schemaproducerrecordlist)|true|none|
|» records|body|[[ProducerRecord](#schemaproducerrecord)]|false|Array of records to send.|

> Example responses

> 200 Response

```json
{
  "offsets": [
    {
      "partition": 2,
      "offset": 0
    },
    {
      "partition": 1,
      "offset": 1
    },
    {
      "partition": 2,
      "offset": 2
    }
  ]
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "The specified topic was not found."
}
```

> 422 Response

```json
{
  "error_code": 422,
  "message": "The record list contains invalid records."
}
```

<h3 id="send-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Records sent successfully.|[OffsetRecordSentList](#schemaoffsetrecordsentlist)|
|404|Not Found|The specified topic was not found.|[Error](#schemaerror)|
|422|Unprocessable Entity|The record list is not valid.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## createTopic

<a id="opIdcreateTopic"></a>

> Code samples

```bash
curl http://localhost:8080/admin/topics \
  -X POST \
  -H 'Content-Type: application/vnd.kafka.json.v2+json' \
  -d '{
    "topic_name": "my-topic",
    "partitions_count": 3,
    "replication_factor": 2
  }'
```

`POST /admin/topics`

Creates a topic with given name, partitions count, and replication factor.

> Body parameter

```json
{
  "topic_name": "my-topic",
  "partitions_count": 3,
  "replication_factor": 2
}
```

<h3 id="createtopic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NewTopic](#schemanewtopic)|true|Creates a topic with given name, partitions count, and replication factor.|
|» topic_name|body|string|true|Name of the topic to create.|
|» partitions_count|body|integer \| null|false|The number of partitions for the topic. If not specified, the broker default is used.|
|» replication_factor|body|integer \| null|false|The number of replicas for each partition. If not specified, the broker default is used.|

<h3 id="createtopic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created.|None|

<aside class="success">
This operation does not require authentication
</aside>

## listPartitions

<a id="opIdlistPartitions"></a>

> Code samples

```bash
curl http://localhost:8080/topics/string/partitions \
  -H 'Accept: application/vnd.kafka.v2+json'
```

`GET /topics/{topicname}/partitions`

Retrieves a list of partitions for the topic.

<h3 id="listpartitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|topicname|path|string|true|Name of the topic to send records to or retrieve metadata from.|

> Example responses

> 200 Response

```json
[
  {
    "partition": 1,
    "leader": 1,
    "replicas": [
      {
        "broker": 1,
        "leader": true,
        "in_sync": true
      },
      {
        "broker": 2,
        "leader": false,
        "in_sync": true
      }
    ]
  }
]
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "The specified topic was not found."
}
```

<h3 id="listpartitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of partitions.|Inline|
|404|Not Found|The specified topic was not found.|[Error](#schemaerror)|

<h3 id="listpartitions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PartitionMetadata](#schemapartitionmetadata)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getPartition

<a id="opIdgetPartition"></a>

> Code samples

```bash
curl http://localhost:8080/topics/string/partitions/0 \
  -H 'Accept: application/vnd.kafka.v2+json'
```

`GET /topics/{topicname}/partitions/{partitionid}`

Retrieves partition metadata for the topic partition.

<h3 id="getpartition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|topicname|path|string|true|Name of the topic to send records to or retrieve metadata from.|
|partitionid|path|integer|true|ID of the partition to send records to or retrieve metadata from.|

> Example responses

> 200 Response

```json
{
  "partition": 1,
  "leader": 1,
  "replicas": [
    {
      "broker": 1,
      "leader": true,
      "in_sync": true
    },
    {
      "broker": 2,
      "leader": false,
      "in_sync": true
    }
  ]
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "The specified partition was not found."
}
```

<h3 id="getpartition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Partition metadata.|[PartitionMetadata](#schemapartitionmetadata)|
|404|Not Found|The specified partition was not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## sendToPartition

<a id="opIdsendToPartition"></a>

> Code samples

```bash
curl http://localhost:8080/topics/string/partitions/0 \
  -X POST \
  -H 'Content-Type: application/vnd.kafka.json.v2+json' \
  -H 'Accept: application/vnd.kafka.v2+json' \
  -d '{
    "records": [
      {
        "key": "key1",
        "value": "value1"
      },
      {
        "value": "value2"
      }
    ]
  }'
```

`POST /topics/{topicname}/partitions/{partitionid}`

Sends one or more records to a given topic partition, optionally specifying a key.

> Body parameter

```json
{
  "records": [
    {
      "key": "key1",
      "value": "value1"
    },
    {
      "value": "value2"
    }
  ]
}
```

<h3 id="sendtopartition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|async|query|boolean|false|Whether to return immediately upon sending records, instead of waiting for metadata. No offsets will be returned if specified. Defaults to false.|
|topicname|path|string|true|Name of the topic to send records to or retrieve metadata from.|
|partitionid|path|integer|true|ID of the partition to send records to or retrieve metadata from.|
|body|body|[ProducerRecordToPartitionList](#schemaproducerrecordtopartitionlist)|true|List of records to send to a given topic partition, including a value (required) and a key (optional).|
|» records|body|[[ProducerRecordToPartition](#schemaproducerrecordtopartition)]|false|Array of records to send to the partition.|

> Example responses

> 200 Response

```json
{
  "offsets": [
    {
      "partition": 2,
      "offset": 0
    },
    {
      "partition": 1,
      "offset": 1
    },
    {
      "partition": 2,
      "offset": 2
    }
  ]
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "The specified topic partition was not found."
}
```

> 422 Response

```json
{
  "error_code": 422,
  "message": "The record is not valid."
}
```

<h3 id="sendtopartition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Records sent successfully.|[OffsetRecordSentList](#schemaoffsetrecordsentlist)|
|404|Not Found|The specified topic partition was not found.|[Error](#schemaerror)|
|422|Unprocessable Entity|The record is not valid.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## getOffsets

<a id="opIdgetOffsets"></a>

> Code samples

```bash
curl http://localhost:8080/topics/string/partitions/0/offsets \
  -H 'Accept: application/vnd.kafka.v2+json'
```

`GET /topics/{topicname}/partitions/{partitionid}/offsets`

Retrieves a summary of the offsets for the topic partition.

<h3 id="getoffsets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|topicname|path|string|true|Name of the topic containing the partition.|
|partitionid|path|integer|true|ID of the partition.|

> Example responses

> 200 Response

```json
{
  "beginning_offset": 10,
  "end_offset": 50
}
```

> 404 Response

```json
{
  "error_code": 404,
  "message": "The specified topic partition was not found."
}
```

<h3 id="getoffsets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A summary of the offsets of the topic partition.|[OffsetsSummary](#schemaoffsetssummary)|
|404|Not Found|The specified topic partition was not found.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="http-bridge-api-reference-seek">Seek</h1>

Seek operations that enable a consumer to begin receiving messages from a given offset position.

## seekToBeginning

<a id="opIdseekToBeginning"></a>

> Code samples

```bash
curl http://localhost:8080/consumers/string/instances/string/positions/beginning \
  -X POST \
  -H 'Content-Type: application/vnd.kafka.v2+json' \
  -H 'Accept: application/vnd.kafka.v2+json' \
  -d '{
    "partitions": [
      {
        "topic": "topic",
        "partition": 0
      },
      {
        "topic": "topic",
        "partition": 1
      }
    ]
  }'
```

`POST /consumers/{groupid}/instances/{name}/positions/beginning`

Configures a subscribed consumer to seek (and subsequently read from) the first offset in one or more given topic partitions.

> Body parameter

```json
{
  "partitions": [
    {
      "topic": "topic",
      "partition": 0
    },
    {
      "topic": "topic",
      "partition": 1
    }
  ]
}
```

<h3 id="seektobeginning-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupid|path|string|true|ID of the consumer group to which the subscribed consumer belongs.|
|name|path|string|true|Name of the subscribed consumer.|
|body|body|[Partitions](#schemapartitions)|true|List of topic partitions to which the consumer is subscribed. The consumer will seek the first offset in the specified partitions.|
|» partitions|body|[[Partition](#schemapartition)]|false|Array of topic partition identifiers.|

> Example responses

> 404 Response

```json
{
  "error_code": 404,
  "message": "The specified consumer instance was not found."
}
```

<h3 id="seektobeginning-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Seek to the beginning performed successfully.|None|
|404|Not Found|The specified consumer instance was not found, or the specified consumer instance did not have one of the specified partitions assigned.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## seekToEnd

<a id="opIdseekToEnd"></a>

> Code samples

```bash
curl http://localhost:8080/consumers/string/instances/string/positions/end \
  -X POST \
  -H 'Content-Type: application/vnd.kafka.v2+json' \
  -H 'Accept: application/vnd.kafka.v2+json' \
  -d '{
    "partitions": [
      {
        "topic": "topic",
        "partition": 0
      },
      {
        "topic": "topic",
        "partition": 1
      }
    ]
  }'
```

`POST /consumers/{groupid}/instances/{name}/positions/end`

Configures a subscribed consumer to seek (and subsequently read from) the offset at the end of one or more of the given topic partitions.

> Body parameter

```json
{
  "partitions": [
    {
      "topic": "topic",
      "partition": 0
    },
    {
      "topic": "topic",
      "partition": 1
    }
  ]
}
```

<h3 id="seektoend-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupid|path|string|true|ID of the consumer group to which the subscribed consumer belongs.|
|name|path|string|true|Name of the subscribed consumer.|
|body|body|[Partitions](#schemapartitions)|true|List of topic partitions to which the consumer is subscribed. The consumer will seek the last offset in the specified partitions.|
|» partitions|body|[[Partition](#schemapartition)]|false|Array of topic partition identifiers.|

> Example responses

> 404 Response

```json
{
  "error_code": 404,
  "message": "The specified consumer instance was not found."
}
```

<h3 id="seektoend-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Seek to the end performed successfully.|None|
|404|Not Found|The specified consumer instance was not found, or the specified consumer instance did not have one of the specified partitions assigned.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## seek

<a id="opIdseek"></a>

> Code samples

```bash
curl http://localhost:8080/consumers/string/instances/string/positions \
  -X POST \
  -H 'Content-Type: application/vnd.kafka.v2+json' \
  -H 'Accept: application/vnd.kafka.v2+json' \
  -d '{
    "offsets": [
      {
        "topic": "topic",
        "partition": 0,
        "offset": 15
      },
      {
        "topic": "topic",
        "partition": 1,
        "offset": 42
      }
    ]
  }'
```

`POST /consumers/{groupid}/instances/{name}/positions`

Configures a subscribed consumer to fetch offsets from a particular offset the next time it fetches a set of records from a given topic partition. This overrides the default fetch behavior for consumers. You can specify one or more topic partitions.

> Body parameter

```json
{
  "offsets": [
    {
      "topic": "topic",
      "partition": 0,
      "offset": 15
    },
    {
      "topic": "topic",
      "partition": 1,
      "offset": 42
    }
  ]
}
```

<h3 id="seek-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupid|path|string|true|ID of the consumer group to which the consumer belongs.|
|name|path|string|true|Name of the subscribed consumer.|
|body|body|[OffsetCommitSeekList](#schemaoffsetcommitseeklist)|true|List of partition offsets from which the subscribed consumer will next fetch records.|
|» offsets|body|[[OffsetCommitSeek](#schemaoffsetcommitseek)]|false|Array of offset positions for topic partitions.|

> Example responses

> 404 Response

```json
{
  "error_code": 404,
  "message": "The specified consumer instance was not found."
}
```

<h3 id="seek-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Seek performed successfully.|None|
|404|Not Found|The specified consumer instance was not found, or the specified consumer instance did not have one of the specified partitions assigned.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="http-bridge-api-reference-default">Default</h1>

## healthy

<a id="opIdhealthy"></a>

> Code samples

```bash
curl http://localhost:8080/healthy
```

`GET /healthy`

Check if the bridge is running. This does not necessarily imply that it is ready to accept requests.

<h3 id="healthy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The bridge is healthy.|None|
|500|Internal Server Error|The bridge is not healthy.|None|

<aside class="success">
This operation does not require authentication
</aside>

## ready

<a id="opIdready"></a>

> Code samples

```bash
curl http://localhost:8080/ready
```

`GET /ready`

Check if the bridge is ready and can accept requests.

<h3 id="ready-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The bridge is ready.|None|
|500|Internal Server Error|The bridge is not ready.|None|

<aside class="success">
This operation does not require authentication
</aside>

## openapi

<a id="opIdopenapi"></a>

> Code samples

```bash
curl http://localhost:8080/openapi \
  -H 'Accept: application/json'
```

`GET /openapi`

Retrieves the OpenAPI v3 specification in JSON format.

> Example responses

> 200 Response

```json
"string"
```

<h3 id="openapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OpenAPI v3 specification in JSON format retrieved successfully.|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## openapiv3

<a id="opIdopenapiv3"></a>

> Code samples

```bash
curl http://localhost:8080/openapi/v3 \
  -H 'Accept: application/json'
```

`GET /openapi/v3`

Retrieves the OpenAPI v3 specification in JSON format.

> Example responses

> 200 Response

```json
"string"
```

<h3 id="openapiv3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OpenAPI v3 specification in JSON format retrieved successfully.|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## metrics

<a id="opIdmetrics"></a>

> Code samples

```bash
curl http://localhost:8080/metrics
```

`GET /metrics`

Retrieves the bridge metrics in Prometheus format.

<h3 id="metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Metrics in Prometheus format retrieved successfully.|Inline|
|404|Not Found|The metrics endpoint is not enabled.|None|

<aside class="success">
This operation does not require authentication
</aside>

## info

<a id="opIdinfo"></a>

> Code samples

```bash
curl http://localhost:8080/ \
  -H 'Accept: application/json'
```

`GET /`

Retrieves information about the HTTP Bridge instance, in JSON format.

> Example responses

> 200 Response

```json
{
  "bridge_version": "0.16.0"
}
```

<h3 id="info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Information about HTTP Bridge instance.|[BridgeInfo](#schemabridgeinfo)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_KafkaHeader">KafkaHeader</h2>
<!-- backwards compatibility -->
<a id="schemakafkaheader"></a>
<a id="schema_KafkaHeader"></a>
<a id="tocSkafkaheader"></a>
<a id="tocskafkaheader"></a>

```json
{
  "key": "key1",
  "value": "dmFsdWUx"
}
```

A Kafka record header containing a key-value pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|Header key name.|
|value|string(byte)|true|none|The header value in binary format, encoded as Base64.|

<h2 id="tocS_KafkaHeaderList">KafkaHeaderList</h2>
<!-- backwards compatibility -->
<a id="schemakafkaheaderlist"></a>
<a id="schema_KafkaHeaderList"></a>
<a id="tocSkafkaheaderlist"></a>
<a id="tocskafkaheaderlist"></a>

```json
[
  {
    "key": "key1",
    "value": "dmFsdWUx"
  },
  {
    "key": "key2",
    "value": "dmFsdWUy"
  }
]
```

List of Kafka record headers.

<h2 id="tocS_ConsumerRecord">ConsumerRecord</h2>
<!-- backwards compatibility -->
<a id="schemaconsumerrecord"></a>
<a id="schema_ConsumerRecord"></a>
<a id="tocSconsumerrecord"></a>
<a id="tocsconsumerrecord"></a>

```json
{
  "key": "key1",
  "offset": 2,
  "partition": 0,
  "topic": "topic",
  "value": "value1",
  "timestamp": 1591897790000,
  "headers": [
    {
      "key": "key1",
      "value": "dmFsdWUx"
    },
    {
      "key": "key2",
      "value": "dmFsdWUy"
    }
  ]
}
```

A record consumed from a Kafka topic.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|topic|string|false|none|Topic name from which the record was consumed.|
|key|[RecordKey](#schemarecordkey)|false|none|Key representation for a record. It can be an array, a JSON object, or a string depending on the content type.|
|value|[RecordValue](#schemarecordvalue)|false|none|Value representation for a record. It can be an array, a JSON object, a string, or null depending on the content type.|
|partition|integer(int32)|false|none|Partition number from which the record was consumed.|
|offset|integer(int64)|false|none|Offset of the record in the partition.|
|timestamp|integer(int64)|false|none|The record timestamp, in milliseconds since the Unix epoch.|
|headers|[KafkaHeaderList](#schemakafkaheaderlist)|false|none|List of Kafka record headers.|

<h2 id="tocS_ConsumerRecordList">ConsumerRecordList</h2>
<!-- backwards compatibility -->
<a id="schemaconsumerrecordlist"></a>
<a id="schema_ConsumerRecordList"></a>
<a id="tocSconsumerrecordlist"></a>
<a id="tocsconsumerrecordlist"></a>

```json
[
  {
    "topic": "topic",
    "key": "key1",
    "value": "value1",
    "partition": 0,
    "offset": 2,
    "timestamp": 1591897790000
  },
  {
    "topic": "topic",
    "key": "key2",
    "value": "value2",
    "partition": 1,
    "offset": 3,
    "timestamp": 1591897790000
  }
]
```

List of records consumed from Kafka topics.

<h2 id="tocS_CreatedConsumer">CreatedConsumer</h2>
<!-- backwards compatibility -->
<a id="schemacreatedconsumer"></a>
<a id="schema_CreatedConsumer"></a>
<a id="tocScreatedconsumer"></a>
<a id="tocscreatedconsumer"></a>

```json
{
  "instance_id": "my-consumer",
  "base_uri": "http://localhost:8080/consumers/my-group/instances/my-consumer"
}
```

Response containing details of a newly created consumer instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instance_id|string|false|none|Unique ID for the consumer instance in the group.|
|base_uri|string|false|none|Base URI used to construct URIs for subsequent requests against this consumer instance.|

<h2 id="tocS_OffsetRecordSent">OffsetRecordSent</h2>
<!-- backwards compatibility -->
<a id="schemaoffsetrecordsent"></a>
<a id="schema_OffsetRecordSent"></a>
<a id="tocSoffsetrecordsent"></a>
<a id="tocsoffsetrecordsent"></a>

```json
{
  "partition": 31,
  "offset": 86
}
```

Offset information for a successfully sent record.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|partition|integer(int32)|false|none|Partition to which the record was sent.|
|offset|integer(int64)|false|none|Offset of the record in the partition.|

<h2 id="tocS_OffsetRecordSentList">OffsetRecordSentList</h2>
<!-- backwards compatibility -->
<a id="schemaoffsetrecordsentlist"></a>
<a id="schema_OffsetRecordSentList"></a>
<a id="tocSoffsetrecordsentlist"></a>
<a id="tocsoffsetrecordsentlist"></a>

```json
{
  "offsets": [
    {
      "partition": 92,
      "offset": 98
    },
    {
      "error_code": 404,
      "message": "Topic my-topic not present in metadata after 60000 ms."
    },
    {
      "partition": 65,
      "offset": 91
    }
  ]
}
```

List of offset information for sent records, which might include errors for individual records.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|offsets|[[OffsetRecordSent](#schemaoffsetrecordsent) \| [Error](#schemaerror)]|false|none|Array of offset information or errors for each record sent.|

<h2 id="tocS_OffsetsSummary">OffsetsSummary</h2>
<!-- backwards compatibility -->
<a id="schemaoffsetssummary"></a>
<a id="schema_OffsetsSummary"></a>
<a id="tocSoffsetssummary"></a>
<a id="tocsoffsetssummary"></a>

```json
{
  "beginning_offset": 10,
  "end_offset": 50
}
```

Summary of offset positions for a topic partition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|beginning_offset|integer(int64)|false|none|Earliest available offset in the partition.|
|end_offset|integer(int64)|false|none|Latest offset in the partition (offset of the next message to be appended).|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "error_code": 404,
  "message": "resource not found"
}
```

Error response returned by the HTTP Bridge.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error_code|integer(int32)|false|none|HTTP status code or Kafka error code.|
|message|string|false|none|Detailed error message.|
|validation_errors|[string]|false|none|List of validation errors (if applicable).|

<h2 id="tocS_Consumer">Consumer</h2>
<!-- backwards compatibility -->
<a id="schemaconsumer"></a>
<a id="schema_Consumer"></a>
<a id="tocSconsumer"></a>
<a id="tocsconsumer"></a>

```json
{
  "name": "consumer1",
  "format": "binary",
  "auto.offset.reset": "earliest",
  "enable.auto.commit": false,
  "fetch.min.bytes": 512,
  "consumer.request.timeout.ms": 30000,
  "isolation.level": "read_committed"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The unique name for the consumer instance. The name is unique within the scope of the consumer group. The name is used in URLs. If a name is not specified, a randomly generated name is assigned.|
|format|string|false|none|The allowable message format for the consumer, which can be `binary` (default) or `json`. The messages are converted into a JSON format.|
|auto.offset.reset|string|false|none|Resets the offset position for the consumer. If set to `latest` (default), messages are read from the latest offset. If set to `earliest`, messages are read from the first offset.|
|fetch.min.bytes|integer|false|none|Sets the minimum amount of data, in bytes, for the consumer to receive. The broker waits until the data to send exceeds this amount. Default is `1` byte.|
|consumer.request.timeout.ms|integer|false|none|Sets the maximum amount of time, in milliseconds, for the consumer to wait for messages for a request. If the timeout period is reached without a response, an error is returned. Default is `30000` (30 seconds).|
|enable.auto.commit|boolean|false|none|If set to `true` (default), message offsets are committed automatically for the consumer. If set to `false`, message offsets must be committed manually.|
|isolation.level|string|false|none|If set to `read_uncommitted` (default), all transaction records are retrieved, indpendent of any transaction outcome. If set to `read_committed`, the records from committed transactions are retrieved.|

<h2 id="tocS_OffsetCommitSeek">OffsetCommitSeek</h2>
<!-- backwards compatibility -->
<a id="schemaoffsetcommitseek"></a>
<a id="schema_OffsetCommitSeek"></a>
<a id="tocSoffsetcommitseek"></a>
<a id="tocsoffsetcommitseek"></a>

```json
{
  "topic": "topic",
  "partition": 43,
  "offset": 92
}
```

Offset position for committing or seeking to a specific offset in a topic partition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|topic|string|true|none|Topic name.|
|partition|integer(int32)|true|none|Partition number.|
|offset|integer(int64)|true|none|Offset position in the partition.|

<h2 id="tocS_OffsetCommitSeekList">OffsetCommitSeekList</h2>
<!-- backwards compatibility -->
<a id="schemaoffsetcommitseeklist"></a>
<a id="schema_OffsetCommitSeekList"></a>
<a id="tocSoffsetcommitseeklist"></a>
<a id="tocsoffsetcommitseeklist"></a>

```json
{
  "offsets": [
    {
      "topic": "topic",
      "partition": 0,
      "offset": 15
    },
    {
      "topic": "topic",
      "partition": 1,
      "offset": 42
    }
  ]
}
```

List of offset positions for committing or seeking across multiple topic partitions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|offsets|[[OffsetCommitSeek](#schemaoffsetcommitseek)]|false|none|Array of offset positions for topic partitions.|

<h2 id="tocS_Partition">Partition</h2>
<!-- backwards compatibility -->
<a id="schemapartition"></a>
<a id="schema_Partition"></a>
<a id="tocSpartition"></a>
<a id="tocspartition"></a>

```json
{
  "topic": "string",
  "partition": 0
}
```

A topic partition identifier.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|topic|string|false|none|Topic name|
|partition|integer(int32)|false|none|Partition number|

<h2 id="tocS_Partitions">Partitions</h2>
<!-- backwards compatibility -->
<a id="schemapartitions"></a>
<a id="schema_Partitions"></a>
<a id="tocSpartitions"></a>
<a id="tocspartitions"></a>

```json
{
  "partitions": [
    {
      "topic": "topic",
      "partition": 0
    },
    {
      "topic": "topic",
      "partition": 1
    }
  ]
}
```

List of topic partitions for assignment to a consumer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|partitions|[[Partition](#schemapartition)]|false|none|Array of topic partition identifiers.|

<h2 id="tocS_ProducerRecord">ProducerRecord</h2>
<!-- backwards compatibility -->
<a id="schemaproducerrecord"></a>
<a id="schema_ProducerRecord"></a>
<a id="tocSproducerrecord"></a>
<a id="tocsproducerrecord"></a>

```json
{
  "key": "key1",
  "partition": 0,
  "timestamp": 1591897790000,
  "value": "value1",
  "headers": [
    {
      "key": "key1",
      "value": "dmFsdWUx"
    },
    {
      "key": "key2",
      "value": "dmFsdWUy"
    }
  ]
}
```

A record to be sent to a Kafka topic.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|[RecordValue](#schemarecordvalue)|true|none|Value representation for a record. It can be an array, a JSON object, a string, or null depending on the content type.|
|key|[RecordKey](#schemarecordkey)|false|none|Key representation for a record. It can be an array, a JSON object, or a string depending on the content type.|
|partition|integer(int32)|false|none|The target partition for the record. If not specified, the partitioner determines the partition.|
|timestamp|integer(int64)|false|none|The record timestamp, in milliseconds since the Unix epoch. If not specified, the current time is used.|
|headers|[KafkaHeaderList](#schemakafkaheaderlist)|false|none|List of Kafka record headers.|

<h2 id="tocS_ProducerRecordList">ProducerRecordList</h2>
<!-- backwards compatibility -->
<a id="schemaproducerrecordlist"></a>
<a id="schema_ProducerRecordList"></a>
<a id="tocSproducerrecordlist"></a>
<a id="tocsproducerrecordlist"></a>

```json
{
  "records": [
    {
      "key": "key1",
      "value": "value1"
    },
    {
      "value": "value2",
      "partition": 1
    },
    {
      "value": "value3"
    }
  ]
}
```

List of records to be sent to a Kafka topic.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|records|[[ProducerRecord](#schemaproducerrecord)]|false|none|Array of records to send.|

<h2 id="tocS_ProducerRecordToPartition">ProducerRecordToPartition</h2>
<!-- backwards compatibility -->
<a id="schemaproducerrecordtopartition"></a>
<a id="schema_ProducerRecordToPartition"></a>
<a id="tocSproducerrecordtopartition"></a>
<a id="tocsproducerrecordtopartition"></a>

```json
{
  "value": {
    "v": 128
  },
  "key": {
    "k": "key"
  }
}
```

A record to be sent to a specific Kafka topic partition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|[RecordValue](#schemarecordvalue)|true|none|Value representation for a record. It can be an array, a JSON object, a string, or null depending on the content type.|
|key|[RecordKey](#schemarecordkey)|false|none|Key representation for a record. It can be an array, a JSON object, or a string depending on the content type.|
|headers|[KafkaHeaderList](#schemakafkaheaderlist)|false|none|List of Kafka record headers.|

<h2 id="tocS_ProducerRecordToPartitionList">ProducerRecordToPartitionList</h2>
<!-- backwards compatibility -->
<a id="schemaproducerrecordtopartitionlist"></a>
<a id="schema_ProducerRecordToPartitionList"></a>
<a id="tocSproducerrecordtopartitionlist"></a>
<a id="tocsproducerrecordtopartitionlist"></a>

```json
{
  "records": [
    {
      "key": "key1",
      "value": "value1"
    },
    {
      "value": "value2"
    }
  ]
}
```

List of records to be sent to a specific Kafka topic partition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|records|[[ProducerRecordToPartition](#schemaproducerrecordtopartition)]|false|none|Array of records to send to the partition.|

<h2 id="tocS_Topics">Topics</h2>
<!-- backwards compatibility -->
<a id="schematopics"></a>
<a id="schema_Topics"></a>
<a id="tocStopics"></a>
<a id="tocstopics"></a>

```json
{
  "topics": [
    "topic1",
    "topic2"
  ]
}
```

Topic subscription specification using either a list of topic names or a regex pattern.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|topics|[string]|false|none|List of topic names to subscribe to.|
|topic_pattern|string|false|none|A regex topic pattern for matching multiple topics.|

<h2 id="tocS_AssignedTopicPartitions">AssignedTopicPartitions</h2>
<!-- backwards compatibility -->
<a id="schemaassignedtopicpartitions"></a>
<a id="schema_AssignedTopicPartitions"></a>
<a id="tocSassignedtopicpartitions"></a>
<a id="tocsassignedtopicpartitions"></a>

```json
{
  "my-topic1": [
    1,
    2,
    3
  ]
}
```

Map of topic names to their assigned partition numbers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[integer(int32)]|false|none|Array of partition numbers for the topic.|

<h2 id="tocS_SubscribedTopicList">SubscribedTopicList</h2>
<!-- backwards compatibility -->
<a id="schemasubscribedtopiclist"></a>
<a id="schema_SubscribedTopicList"></a>
<a id="tocSsubscribedtopiclist"></a>
<a id="tocssubscribedtopiclist"></a>

```json
{
  "topics": [
    "my-topic1",
    "my-topic2"
  ],
  "partitions": [
    {
      "my-topic1": [
        1,
        2,
        3
      ]
    },
    {
      "my-topic2": [
        1
      ]
    }
  ]
}
```

List of topics and partitions to which a consumer is subscribed or assigned.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|topics|[Topics](#schematopics)|false|none|Topic subscription specification using either a list of topic names or a regex pattern.|
|partitions|[[AssignedTopicPartitions](#schemaassignedtopicpartitions)]|false|none|List of assigned topic partitions.|

<h2 id="tocS_TopicMetadata">TopicMetadata</h2>
<!-- backwards compatibility -->
<a id="schematopicmetadata"></a>
<a id="schema_TopicMetadata"></a>
<a id="tocStopicmetadata"></a>
<a id="tocstopicmetadata"></a>

```json
{
  "name": "topic",
  "offset": 2,
  "configs": {
    "cleanup.policy": "compact"
  },
  "partitions": [
    {
      "partition": 1,
      "leader": 1,
      "replicas": [
        {
          "broker": 1,
          "leader": true,
          "in_sync": true
        },
        {
          "broker": 2,
          "leader": false,
          "in_sync": true
        }
      ]
    },
    {
      "partition": 2,
      "leader": 2,
      "replicas": [
        {
          "broker": 1,
          "leader": false,
          "in_sync": true
        },
        {
          "broker": 2,
          "leader": true,
          "in_sync": true
        }
      ]
    }
  ]
}
```

Metadata information about a Kafka topic.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the topic.|
|configs|object|false|none|Per-topic configuration overrides.|
|partitions|[[PartitionMetadata](#schemapartitionmetadata)]|false|none|List of partition metadata for the topic.|

<h2 id="tocS_PartitionMetadata">PartitionMetadata</h2>
<!-- backwards compatibility -->
<a id="schemapartitionmetadata"></a>
<a id="schema_PartitionMetadata"></a>
<a id="tocSpartitionmetadata"></a>
<a id="tocspartitionmetadata"></a>

```json
{
  "partition": 1,
  "leader": 1,
  "replicas": [
    {
      "broker": 1,
      "leader": true,
      "in_sync": true
    },
    {
      "broker": 2,
      "leader": false,
      "in_sync": true
    }
  ]
}
```

Metadata information about a topic partition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|partition|integer(int32)|false|none|Partition number|
|leader|integer(int32)|false|none|Broker ID of the partition leader.|
|replicas|[[Replica](#schemareplica)]|false|none|List of replica information for the partition.|

<h2 id="tocS_Replica">Replica</h2>
<!-- backwards compatibility -->
<a id="schemareplica"></a>
<a id="schema_Replica"></a>
<a id="tocSreplica"></a>
<a id="tocsreplica"></a>

```json
{
  "broker": 1,
  "leader": true,
  "in_sync": true
}
```

Information about a partition replica.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|broker|integer(int32)|false|none|Broker ID hosting this replica.|
|leader|boolean|false|none|Indicates whether the replica is the partition leader.|
|in_sync|boolean|false|none|Indicates whether the replica is in-sync with the leader.|

<h2 id="tocS_BridgeInfo">BridgeInfo</h2>
<!-- backwards compatibility -->
<a id="schemabridgeinfo"></a>
<a id="schema_BridgeInfo"></a>
<a id="tocSbridgeinfo"></a>
<a id="tocsbridgeinfo"></a>

```json
{
  "bridge_version": "0.16.0"
}
```

Information about HTTP Bridge instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bridge_version|string|false|none|Version of the Strimzi Kafka Bridge.|

<h2 id="tocS_RecordKey">RecordKey</h2>
<!-- backwards compatibility -->
<a id="schemarecordkey"></a>
<a id="schema_RecordKey"></a>
<a id="tocSrecordkey"></a>
<a id="tocsrecordkey"></a>

```json
[
  null
]
```

Key representation for a record. It can be an array, a JSON object, or a string depending on the content type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[object]|false|none|Array representation of the key.|
|*oneOf*|object|false|none|JSON object representation of the key.|
|*oneOf*|string|false|none|String representation of the key (text or base64-encoded binary).|

<h2 id="tocS_RecordValue">RecordValue</h2>
<!-- backwards compatibility -->
<a id="schemarecordvalue"></a>
<a id="schema_RecordValue"></a>
<a id="tocSrecordvalue"></a>
<a id="tocsrecordvalue"></a>

```json
[
  null
]
```

Value representation for a record. It can be an array, a JSON object, a string, or null depending on the content type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[object]|false|none|Array representation of the value.|
|*oneOf*|object|false|none|JSON object representation of the value.|
|*oneOf*|string|false|none|String representation of the value (text or base64-encoded binary).|
|*oneOf*|null|false|none|Null value (tombstone record).|

<h2 id="tocS_NewTopic">NewTopic</h2>
<!-- backwards compatibility -->
<a id="schemanewtopic"></a>
<a id="schema_NewTopic"></a>
<a id="tocSnewtopic"></a>
<a id="tocsnewtopic"></a>

```json
{
  "topic_name": "my-topic",
  "partitions_count": 3,
  "replication_factor": 2
}
```

Specification for creating a new Kafka topic.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|topic_name|string|true|none|Name of the topic to create.|
|partitions_count|integer \| null|false|none|The number of partitions for the topic. If not specified, the broker default is used.|
|replication_factor|integer \| null|false|none|The number of replicas for each partition. If not specified, the broker default is used.|
