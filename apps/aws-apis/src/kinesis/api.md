<h1 id="amazon-kinesis">Amazon Kinesis v2013-12-02</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Amazon Kinesis Data Streams Service API Reference</fullname> <p>Amazon Kinesis Data Streams is a managed service that scales elastically for real-time processing of streaming big data.</p>

Base URLs:

* <a href="http://kinesis.us-east-1.amazonaws.com">http://kinesis.us-east-1.amazonaws.com</a> - The Kinesis multi-region endpoint

* <a href="https://kinesis.us-east-1.amazonaws.com">https://kinesis.us-east-1.amazonaws.com</a> - The Kinesis multi-region endpoint

* <a href="http://kinesis.cn-north-1.amazonaws.com.cn">http://kinesis.cn-north-1.amazonaws.com.cn</a> - The Kinesis endpoint for China (Beijing) and China (Ningxia)

* <a href="https://kinesis.cn-north-1.amazonaws.com.cn">https://kinesis.cn-north-1.amazonaws.com.cn</a> - The Kinesis endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/kinesis/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-kinesis-default">Default</h1>

## AddTagsToStream

<a id="opIdAddTagsToStream"></a>

> Code samples

```bash
curl 'https://kinesis.us-east-1.amazonaws.com/#X-Amz-Target=Kinesis_20131202.AddTagsToStream' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Kinesis_20131202.AddTagsToStream' \
  -d '{
    "StreamName": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "StreamARN": {}
  }'
```

`POST /#X-Amz-Target=Kinesis_20131202.AddTagsToStream`

<p>Adds or updates tags for the specified Kinesis data stream. You can assign up to 50 tags to a data stream.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p>If tags have already been assigned to the stream, <code>AddTagsToStream</code> overwrites any existing tags that correspond to the specified tag keys.</p> <p> <a>AddTagsToStream</a> has a limit of five transactions per second per account.</p>

> Body parameter

```json
{
  "StreamName": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "StreamARN": {}
}
```

<h3 id="addtagstostream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[AddTagsToStreamInput](#schemaaddtagstostreaminput)|true|none|
|» StreamName|body|object|false|none|
|» Tags|body|object|true|none|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» StreamARN|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Kinesis_20131202.AddTagsToStream|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="addtagstostream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateStream

<a id="opIdCreateStream"></a>

> Code samples

```bash
curl 'https://kinesis.us-east-1.amazonaws.com/#X-Amz-Target=Kinesis_20131202.CreateStream' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Kinesis_20131202.CreateStream' \
  -d '{
    "StreamName": {},
    "ShardCount": {},
    "StreamModeDetails": {
      "StreamMode": {}
    }
  }'
```

`POST /#X-Amz-Target=Kinesis_20131202.CreateStream`

<p>Creates a Kinesis data stream. A stream captures and transports data records that are continuously emitted from different data sources or <i>producers</i>. Scale-out within a stream is explicitly supported by means of shards, which are uniquely identified groups of data records in a stream.</p> <p>You can create your data stream using either on-demand or provisioned capacity mode. Data streams with an on-demand mode require no capacity planning and automatically scale to handle gigabytes of write and read throughput per minute. With the on-demand mode, Kinesis Data Streams automatically manages the shards in order to provide the necessary throughput. For the data streams with a provisioned mode, you must specify the number of shards for the data stream. Each shard can support reads up to five transactions per second, up to a maximum data read total of 2 MiB per second. Each shard can support writes up to 1,000 records per second, up to a maximum data write total of 1 MiB per second. If the amount of data input increases or decreases, you can add or remove shards.</p> <p>The stream name identifies the stream. The name is scoped to the Amazon Web Services account used by the application. It is also scoped by Amazon Web Services Region. That is, two streams in two different accounts can have the same name, and two streams in the same account, but in two different Regions, can have the same name.</p> <p> <code>CreateStream</code> is an asynchronous operation. Upon receiving a <code>CreateStream</code> request, Kinesis Data Streams immediately returns and sets the stream status to <code>CREATING</code>. After the stream is created, Kinesis Data Streams sets the stream status to <code>ACTIVE</code>. You should perform read and write operations only on an <code>ACTIVE</code> stream. </p> <p>You receive a <code>LimitExceededException</code> when making a <code>CreateStream</code> request when you try to do one of the following:</p> <ul> <li> <p>Have more than five streams in the <code>CREATING</code> state at any point in time.</p> </li> <li> <p>Create more shards than are authorized for your account.</p> </li> </ul> <p>For the default shard limit for an Amazon Web Services account, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/service-sizes-and-limits.html">Amazon Kinesis Data Streams Limits</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>. To increase this limit, <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">contact Amazon Web Services Support</a>.</p> <p>You can use <a>DescribeStreamSummary</a> to check the stream status, which is returned in <code>StreamStatus</code>.</p> <p> <a>CreateStream</a> has a limit of five transactions per second per account.</p>

> Body parameter

```json
{
  "StreamName": {},
  "ShardCount": {},
  "StreamModeDetails": {
    "StreamMode": {}
  }
}
```

<h3 id="createstream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateStreamInput](#schemacreatestreaminput)|true|none|
|» StreamName|body|object|true|none|
|» ShardCount|body|object|false|none|
|» StreamModeDetails|body|object|false|none|
|» » StreamMode|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Kinesis_20131202.CreateStream|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="createstream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DecreaseStreamRetentionPeriod

<a id="opIdDecreaseStreamRetentionPeriod"></a>

> Code samples

```bash
curl 'https://kinesis.us-east-1.amazonaws.com/#X-Amz-Target=Kinesis_20131202.DecreaseStreamRetentionPeriod' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Kinesis_20131202.DecreaseStreamRetentionPeriod' \
  -d '{
    "StreamName": {},
    "RetentionPeriodHours": {},
    "StreamARN": {}
  }'
```

`POST /#X-Amz-Target=Kinesis_20131202.DecreaseStreamRetentionPeriod`

<p>Decreases the Kinesis data stream's retention period, which is the length of time data records are accessible after they are added to the stream. The minimum value of a stream's retention period is 24 hours.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p>This operation may result in lost data. For example, if the stream's retention period is 48 hours and is decreased to 24 hours, any data already in the stream that is older than 24 hours is inaccessible.</p>

> Body parameter

```json
{
  "StreamName": {},
  "RetentionPeriodHours": {},
  "StreamARN": {}
}
```

<h3 id="decreasestreamretentionperiod-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DecreaseStreamRetentionPeriodInput](#schemadecreasestreamretentionperiodinput)|true|none|
|» StreamName|body|object|false|none|
|» RetentionPeriodHours|body|object|true|none|
|» StreamARN|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Kinesis_20131202.DecreaseStreamRetentionPeriod|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="decreasestreamretentionperiod-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteStream

<a id="opIdDeleteStream"></a>

> Code samples

```bash
curl 'https://kinesis.us-east-1.amazonaws.com/#X-Amz-Target=Kinesis_20131202.DeleteStream' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Kinesis_20131202.DeleteStream' \
  -d '{
    "StreamName": {},
    "EnforceConsumerDeletion": {},
    "StreamARN": {}
  }'
```

`POST /#X-Amz-Target=Kinesis_20131202.DeleteStream`

<p>Deletes a Kinesis data stream and all its shards and data. You must shut down any applications that are operating on the stream before you delete the stream. If an application attempts to operate on a deleted stream, it receives the exception <code>ResourceNotFoundException</code>.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p>If the stream is in the <code>ACTIVE</code> state, you can delete it. After a <code>DeleteStream</code> request, the specified stream is in the <code>DELETING</code> state until Kinesis Data Streams completes the deletion.</p> <p> <b>Note:</b> Kinesis Data Streams might continue to accept data read and write operations, such as <a>PutRecord</a>, <a>PutRecords</a>, and <a>GetRecords</a>, on a stream in the <code>DELETING</code> state until the stream deletion is complete.</p> <p>When you delete a stream, any shards in that stream are also deleted, and any tags are dissociated from the stream.</p> <p>You can use the <a>DescribeStreamSummary</a> operation to check the state of the stream, which is returned in <code>StreamStatus</code>.</p> <p> <a>DeleteStream</a> has a limit of five transactions per second per account.</p>

> Body parameter

```json
{
  "StreamName": {},
  "EnforceConsumerDeletion": {},
  "StreamARN": {}
}
```

<h3 id="deletestream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteStreamInput](#schemadeletestreaminput)|true|none|
|» StreamName|body|object|false|none|
|» EnforceConsumerDeletion|body|object|false|none|
|» StreamARN|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Kinesis_20131202.DeleteStream|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="deletestream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|483|483|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeregisterStreamConsumer

<a id="opIdDeregisterStreamConsumer"></a>

> Code samples

```bash
curl 'https://kinesis.us-east-1.amazonaws.com/#X-Amz-Target=Kinesis_20131202.DeregisterStreamConsumer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Kinesis_20131202.DeregisterStreamConsumer' \
  -d '{
    "StreamARN": {},
    "ConsumerName": {},
    "ConsumerARN": {}
  }'
```

`POST /#X-Amz-Target=Kinesis_20131202.DeregisterStreamConsumer`

<p>To deregister a consumer, provide its ARN. Alternatively, you can provide the ARN of the data stream and the name you gave the consumer when you registered it. You may also provide all three parameters, as long as they don't conflict with each other. If you don't know the name or ARN of the consumer that you want to deregister, you can use the <a>ListStreamConsumers</a> operation to get a list of the descriptions of all the consumers that are currently registered with a given data stream. The description of a consumer contains its name and ARN.</p> <p>This operation has a limit of five transactions per second per stream.</p>

> Body parameter

```json
{
  "StreamARN": {},
  "ConsumerName": {},
  "ConsumerARN": {}
}
```

<h3 id="deregisterstreamconsumer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeregisterStreamConsumerInput](#schemaderegisterstreamconsumerinput)|true|none|
|» StreamARN|body|object|false|none|
|» ConsumerName|body|object|false|none|
|» ConsumerARN|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Kinesis_20131202.DeregisterStreamConsumer|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="deregisterstreamconsumer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeLimits

<a id="opIdDescribeLimits"></a>

> Code samples

```bash
curl 'https://kinesis.us-east-1.amazonaws.com/#X-Amz-Target=Kinesis_20131202.DescribeLimits' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Kinesis_20131202.DescribeLimits' \
  -d '{}'
```

`POST /#X-Amz-Target=Kinesis_20131202.DescribeLimits`

<p>Describes the shard limits and usage for the account.</p> <p>If you update your account limits, the old limits might be returned for a few minutes.</p> <p>This operation has a limit of one transaction per second per account.</p>

> Body parameter

```json
{}
```

<h3 id="describelimits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeLimitsInput](#schemadescribelimitsinput)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Kinesis_20131202.DescribeLimits|

> Example responses

> 200 Response

```json
{
  "ShardLimit": {},
  "OpenShardCount": {},
  "OnDemandStreamCount": {},
  "OnDemandStreamCountLimit": {}
}
```

> 480 Response

```json
null
```

<h3 id="describelimits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLimitsOutput](#schemadescribelimitsoutput)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeStream

<a id="opIdDescribeStream"></a>

> Code samples

```bash
curl 'https://kinesis.us-east-1.amazonaws.com/#X-Amz-Target=Kinesis_20131202.DescribeStream' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Kinesis_20131202.DescribeStream' \
  -d '{
    "StreamName": {},
    "Limit": {},
    "ExclusiveStartShardId": {},
    "StreamARN": {}
  }'
```

`POST /#X-Amz-Target=Kinesis_20131202.DescribeStream`

<p>Describes the specified Kinesis data stream.</p> <note> <p>This API has been revised. It's highly recommended that you use the <a>DescribeStreamSummary</a> API to get a summarized description of the specified Kinesis data stream and the <a>ListShards</a> API to list the shards in a specified data stream and obtain information about each shard. </p> </note> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p>The information returned includes the stream name, Amazon Resource Name (ARN), creation time, enhanced metric configuration, and shard map. The shard map is an array of shard objects. For each shard object, there is the hash key and sequence number ranges that the shard spans, and the IDs of any earlier shards that played in a role in creating the shard. Every record ingested in the stream is identified by a sequence number, which is assigned when the record is put into the stream.</p> <p>You can limit the number of shards returned by each call. For more information, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/kinesis-using-sdk-java-retrieve-shards.html">Retrieving Shards from a Stream</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p> <p>There are no guarantees about the chronological order shards returned. To process shards in chronological order, use the ID of the parent shard to track the lineage to the oldest shard.</p> <p>This operation has a limit of 10 transactions per second per account.</p>

> Body parameter

```json
{
  "StreamName": {},
  "Limit": {},
  "ExclusiveStartShardId": {},
  "StreamARN": {}
}
```

<h3 id="describestream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|ExclusiveStartShardId|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeStreamInput](#schemadescribestreaminput)|true|none|
|» StreamName|body|object|false|none|
|» Limit|body|object|false|none|
|» ExclusiveStartShardId|body|object|false|none|
|» StreamARN|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Kinesis_20131202.DescribeStream|

> Example responses

> 200 Response

```json
{
  "StreamDescription": {
    "StreamName": {},
    "StreamARN": {},
    "StreamStatus": {},
    "StreamModeDetails": {
      "StreamMode": {}
    },
    "Shards": {},
    "HasMoreShards": {},
    "RetentionPeriodHours": {},
    "StreamCreationTimestamp": {},
    "EnhancedMonitoring": {},
    "EncryptionType": {},
    "KeyId": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="describestream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeStreamOutput](#schemadescribestreamoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeStreamConsumer

<a id="opIdDescribeStreamConsumer"></a>

> Code samples

```bash
curl 'https://kinesis.us-east-1.amazonaws.com/#X-Amz-Target=Kinesis_20131202.DescribeStreamConsumer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Kinesis_20131202.DescribeStreamConsumer' \
  -d '{
    "StreamARN": {},
    "ConsumerName": {},
    "ConsumerARN": {}
  }'
```

`POST /#X-Amz-Target=Kinesis_20131202.DescribeStreamConsumer`

<p>To get the description of a registered consumer, provide the ARN of the consumer. Alternatively, you can provide the ARN of the data stream and the name you gave the consumer when you registered it. You may also provide all three parameters, as long as they don't conflict with each other. If you don't know the name or ARN of the consumer that you want to describe, you can use the <a>ListStreamConsumers</a> operation to get a list of the descriptions of all the consumers that are currently registered with a given data stream.</p> <p>This operation has a limit of 20 transactions per second per stream.</p>

> Body parameter

```json
{
  "StreamARN": {},
  "ConsumerName": {},
  "ConsumerARN": {}
}
```

<h3 id="describestreamconsumer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeStreamConsumerInput](#schemadescribestreamconsumerinput)|true|none|
|» StreamARN|body|object|false|none|
|» ConsumerName|body|object|false|none|
|» ConsumerARN|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Kinesis_20131202.DescribeStreamConsumer|

> Example responses

> 200 Response

```json
{
  "ConsumerDescription": {
    "ConsumerName": {},
    "ConsumerARN": {},
    "ConsumerStatus": {},
    "ConsumerCreationTimestamp": {},
    "StreamARN": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="describestreamconsumer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeStreamConsumerOutput](#schemadescribestreamconsumeroutput)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeStreamSummary

<a id="opIdDescribeStreamSummary"></a>

> Code samples

```bash
curl 'https://kinesis.us-east-1.amazonaws.com/#X-Amz-Target=Kinesis_20131202.DescribeStreamSummary' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Kinesis_20131202.DescribeStreamSummary' \
  -d '{
    "StreamName": {},
    "StreamARN": {}
  }'
```

`POST /#X-Amz-Target=Kinesis_20131202.DescribeStreamSummary`

<p>Provides a summarized description of the specified Kinesis data stream without the shard list.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p>The information returned includes the stream name, Amazon Resource Name (ARN), status, record retention period, approximate creation time, monitoring, encryption details, and open shard count. </p> <p> <a>DescribeStreamSummary</a> has a limit of 20 transactions per second per account.</p>

> Body parameter

```json
{
  "StreamName": {},
  "StreamARN": {}
}
```

<h3 id="describestreamsummary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeStreamSummaryInput](#schemadescribestreamsummaryinput)|true|none|
|» StreamName|body|object|false|none|
|» StreamARN|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Kinesis_20131202.DescribeStreamSummary|

> Example responses

> 200 Response

```json
{
  "StreamDescriptionSummary": {
    "StreamName": {},
    "StreamARN": {},
    "StreamStatus": {},
    "StreamModeDetails": {
      "StreamMode": {}
    },
    "RetentionPeriodHours": {},
    "StreamCreationTimestamp": {},
    "EnhancedMonitoring": {},
    "EncryptionType": {},
    "KeyId": {},
    "OpenShardCount": {},
    "ConsumerCount": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="describestreamsummary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeStreamSummaryOutput](#schemadescribestreamsummaryoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisableEnhancedMonitoring

<a id="opIdDisableEnhancedMonitoring"></a>

> Code samples

```bash
curl 'https://kinesis.us-east-1.amazonaws.com/#X-Amz-Target=Kinesis_20131202.DisableEnhancedMonitoring' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Kinesis_20131202.DisableEnhancedMonitoring' \
  -d '{
    "StreamName": {},
    "ShardLevelMetrics": {},
    "StreamARN": {}
  }'
```

`POST /#X-Amz-Target=Kinesis_20131202.DisableEnhancedMonitoring`

<p>Disables enhanced monitoring.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note>

> Body parameter

```json
{
  "StreamName": {},
  "ShardLevelMetrics": {},
  "StreamARN": {}
}
```

<h3 id="disableenhancedmonitoring-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DisableEnhancedMonitoringInput](#schemadisableenhancedmonitoringinput)|true|none|
|» StreamName|body|object|false|none|
|» ShardLevelMetrics|body|object|true|none|
|» StreamARN|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Kinesis_20131202.DisableEnhancedMonitoring|

> Example responses

> 200 Response

```json
{
  "StreamName": {},
  "CurrentShardLevelMetrics": {},
  "DesiredShardLevelMetrics": {},
  "StreamARN": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="disableenhancedmonitoring-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EnhancedMonitoringOutput](#schemaenhancedmonitoringoutput)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## EnableEnhancedMonitoring

<a id="opIdEnableEnhancedMonitoring"></a>

> Code samples

```bash
curl 'https://kinesis.us-east-1.amazonaws.com/#X-Amz-Target=Kinesis_20131202.EnableEnhancedMonitoring' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Kinesis_20131202.EnableEnhancedMonitoring' \
  -d '{
    "StreamName": {},
    "ShardLevelMetrics": {},
    "StreamARN": {}
  }'
```

`POST /#X-Amz-Target=Kinesis_20131202.EnableEnhancedMonitoring`

<p>Enables enhanced Kinesis data stream monitoring for shard-level metrics.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note>

> Body parameter

```json
{
  "StreamName": {},
  "ShardLevelMetrics": {},
  "StreamARN": {}
}
```

<h3 id="enableenhancedmonitoring-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[EnableEnhancedMonitoringInput](#schemaenableenhancedmonitoringinput)|true|none|
|» StreamName|body|object|false|none|
|» ShardLevelMetrics|body|object|true|none|
|» StreamARN|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Kinesis_20131202.EnableEnhancedMonitoring|

> Example responses

> 200 Response

```json
{
  "StreamName": {},
  "CurrentShardLevelMetrics": {},
  "DesiredShardLevelMetrics": {},
  "StreamARN": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="enableenhancedmonitoring-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EnhancedMonitoringOutput](#schemaenhancedmonitoringoutput)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRecords

<a id="opIdGetRecords"></a>

> Code samples

```bash
curl 'https://kinesis.us-east-1.amazonaws.com/#X-Amz-Target=Kinesis_20131202.GetRecords' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Kinesis_20131202.GetRecords' \
  -d '{
    "ShardIterator": {},
    "Limit": {},
    "StreamARN": {}
  }'
```

`POST /#X-Amz-Target=Kinesis_20131202.GetRecords`

<p>Gets data records from a Kinesis data stream's shard.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter in addition to the <code>ShardIterator</code> parameter.</p> </note> <p>Specify a shard iterator using the <code>ShardIterator</code> parameter. The shard iterator specifies the position in the shard from which you want to start reading data records sequentially. If there are no records available in the portion of the shard that the iterator points to, <a>GetRecords</a> returns an empty list. It might take multiple calls to get to a portion of the shard that contains records.</p> <p>You can scale by provisioning multiple shards per stream while considering service limits (for more information, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/service-sizes-and-limits.html">Amazon Kinesis Data Streams Limits</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>). Your application should have one thread per shard, each reading continuously from its stream. To read from a stream continually, call <a>GetRecords</a> in a loop. Use <a>GetShardIterator</a> to get the shard iterator to specify in the first <a>GetRecords</a> call. <a>GetRecords</a> returns a new shard iterator in <code>NextShardIterator</code>. Specify the shard iterator returned in <code>NextShardIterator</code> in subsequent calls to <a>GetRecords</a>. If the shard has been closed, the shard iterator can't return more data and <a>GetRecords</a> returns <code>null</code> in <code>NextShardIterator</code>. You can terminate the loop when the shard is closed, or when the shard iterator reaches the record with the sequence number or other attribute that marks it as the last record to process.</p> <p>Each data record can be up to 1 MiB in size, and each shard can read up to 2 MiB per second. You can ensure that your calls don't exceed the maximum supported size or throughput by using the <code>Limit</code> parameter to specify the maximum number of records that <a>GetRecords</a> can return. Consider your average record size when determining this limit. The maximum number of records that can be returned per call is 10,000.</p> <p>The size of the data returned by <a>GetRecords</a> varies depending on the utilization of the shard. It is recommended that consumer applications retrieve records via the <code>GetRecords</code> command using the 5 TPS limit to remain caught up. Retrieving records less frequently can lead to consumer applications falling behind. The maximum size of data that <a>GetRecords</a> can return is 10 MiB. If a call returns this amount of data, subsequent calls made within the next 5 seconds throw <code>ProvisionedThroughputExceededException</code>. If there is insufficient provisioned throughput on the stream, subsequent calls made within the next 1 second throw <code>ProvisionedThroughputExceededException</code>. <a>GetRecords</a> doesn't return any data when it throws an exception. For this reason, we recommend that you wait 1 second between calls to <a>GetRecords</a>. However, it's possible that the application will get exceptions for longer than 1 second.</p> <p>To detect whether the application is falling behind in processing, you can use the <code>MillisBehindLatest</code> response attribute. You can also monitor the stream using CloudWatch metrics and other mechanisms (see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/monitoring.html">Monitoring</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>).</p> <p>Each Amazon Kinesis record includes a value, <code>ApproximateArrivalTimestamp</code>, that is set when a stream successfully receives and stores a record. This is commonly referred to as a server-side time stamp, whereas a client-side time stamp is set when a data producer creates or sends the record to a stream (a data producer is any data source putting data records into a stream, for example with <a>PutRecords</a>). The time stamp has millisecond precision. There are no guarantees about the time stamp accuracy, or that the time stamp is always increasing. For example, records in a shard or across a stream might have time stamps that are out of order.</p> <p>This operation has a limit of five transactions per second per shard.</p>

> Body parameter

```json
{
  "ShardIterator": {},
  "Limit": {},
  "StreamARN": {}
}
```

<h3 id="getrecords-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetRecordsInput](#schemagetrecordsinput)|true|none|
|» ShardIterator|body|object|true|none|
|» Limit|body|object|false|none|
|» StreamARN|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Kinesis_20131202.GetRecords|

> Example responses

> 200 Response

```json
{
  "Records": {},
  "NextShardIterator": {},
  "MillisBehindLatest": {},
  "ChildShards": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

> 489 Response

```json
null
```

> 490 Response

```json
null
```

<h3 id="getrecords-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRecordsOutput](#schemagetrecordsoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|482|482|ProvisionedThroughputExceededException|[ProvisionedThroughputExceededException](#schemaprovisionedthroughputexceededexception)|
|483|483|ExpiredIteratorException|[ExpiredIteratorException](#schemaexpirediteratorexception)|
|484|484|KMSDisabledException|[KMSDisabledException](#schemakmsdisabledexception)|
|485|485|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|
|486|486|KMSAccessDeniedException|[KMSAccessDeniedException](#schemakmsaccessdeniedexception)|
|487|487|KMSNotFoundException|[KMSNotFoundException](#schemakmsnotfoundexception)|
|488|488|KMSOptInRequired|[KMSOptInRequired](#schemakmsoptinrequired)|
|489|489|KMSThrottlingException|[KMSThrottlingException](#schemakmsthrottlingexception)|
|490|490|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetShardIterator

<a id="opIdGetShardIterator"></a>

> Code samples

```bash
curl 'https://kinesis.us-east-1.amazonaws.com/#X-Amz-Target=Kinesis_20131202.GetShardIterator' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Kinesis_20131202.GetShardIterator' \
  -d '{
    "StreamName": {},
    "ShardId": {},
    "ShardIteratorType": {},
    "StartingSequenceNumber": {},
    "Timestamp": {},
    "StreamARN": {}
  }'
```

`POST /#X-Amz-Target=Kinesis_20131202.GetShardIterator`

<p>Gets an Amazon Kinesis shard iterator. A shard iterator expires 5 minutes after it is returned to the requester.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p>A shard iterator specifies the shard position from which to start reading data records sequentially. The position is specified using the sequence number of a data record in a shard. A sequence number is the identifier associated with every record ingested in the stream, and is assigned when a record is put into the stream. Each stream has one or more shards.</p> <p>You must specify the shard iterator type. For example, you can set the <code>ShardIteratorType</code> parameter to read exactly from the position denoted by a specific sequence number by using the <code>AT_SEQUENCE_NUMBER</code> shard iterator type. Alternatively, the parameter can read right after the sequence number by using the <code>AFTER_SEQUENCE_NUMBER</code> shard iterator type, using sequence numbers returned by earlier calls to <a>PutRecord</a>, <a>PutRecords</a>, <a>GetRecords</a>, or <a>DescribeStream</a>. In the request, you can specify the shard iterator type <code>AT_TIMESTAMP</code> to read records from an arbitrary point in time, <code>TRIM_HORIZON</code> to cause <code>ShardIterator</code> to point to the last untrimmed record in the shard in the system (the oldest data record in the shard), or <code>LATEST</code> so that you always read the most recent data in the shard. </p> <p>When you read repeatedly from a stream, use a <a>GetShardIterator</a> request to get the first shard iterator for use in your first <a>GetRecords</a> request and for subsequent reads use the shard iterator returned by the <a>GetRecords</a> request in <code>NextShardIterator</code>. A new shard iterator is returned by every <a>GetRecords</a> request in <code>NextShardIterator</code>, which you use in the <code>ShardIterator</code> parameter of the next <a>GetRecords</a> request. </p> <p>If a <a>GetShardIterator</a> request is made too often, you receive a <code>ProvisionedThroughputExceededException</code>. For more information about throughput limits, see <a>GetRecords</a>, and <a href="https://docs.aws.amazon.com/kinesis/latest/dev/service-sizes-and-limits.html">Streams Limits</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p> <p>If the shard is closed, <a>GetShardIterator</a> returns a valid iterator for the last sequence number of the shard. A shard can be closed as a result of using <a>SplitShard</a> or <a>MergeShards</a>.</p> <p> <a>GetShardIterator</a> has a limit of five transactions per second per account per open shard.</p>

> Body parameter

```json
{
  "StreamName": {},
  "ShardId": {},
  "ShardIteratorType": {},
  "StartingSequenceNumber": {},
  "Timestamp": {},
  "StreamARN": {}
}
```

<h3 id="getsharditerator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetShardIteratorInput](#schemagetsharditeratorinput)|true|none|
|» StreamName|body|object|false|none|
|» ShardId|body|object|true|none|
|» ShardIteratorType|body|object|true|none|
|» StartingSequenceNumber|body|object|false|none|
|» Timestamp|body|object|false|none|
|» StreamARN|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Kinesis_20131202.GetShardIterator|

> Example responses

> 200 Response

```json
{
  "ShardIterator": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getsharditerator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetShardIteratorOutput](#schemagetsharditeratoroutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|482|482|ProvisionedThroughputExceededException|[ProvisionedThroughputExceededException](#schemaprovisionedthroughputexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## IncreaseStreamRetentionPeriod

<a id="opIdIncreaseStreamRetentionPeriod"></a>

> Code samples

```bash
curl 'https://kinesis.us-east-1.amazonaws.com/#X-Amz-Target=Kinesis_20131202.IncreaseStreamRetentionPeriod' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Kinesis_20131202.IncreaseStreamRetentionPeriod' \
  -d '{
    "StreamName": {},
    "RetentionPeriodHours": {},
    "StreamARN": {}
  }'
```

`POST /#X-Amz-Target=Kinesis_20131202.IncreaseStreamRetentionPeriod`

<p>Increases the Kinesis data stream's retention period, which is the length of time data records are accessible after they are added to the stream. The maximum value of a stream's retention period is 8760 hours (365 days).</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p>If you choose a longer stream retention period, this operation increases the time period during which records that have not yet expired are accessible. However, it does not make previous, expired data (older than the stream's previous retention period) accessible after the operation has been called. For example, if a stream's retention period is set to 24 hours and is increased to 168 hours, any data that is older than 24 hours remains inaccessible to consumer applications.</p>

> Body parameter

```json
{
  "StreamName": {},
  "RetentionPeriodHours": {},
  "StreamARN": {}
}
```

<h3 id="increasestreamretentionperiod-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[IncreaseStreamRetentionPeriodInput](#schemaincreasestreamretentionperiodinput)|true|none|
|» StreamName|body|object|false|none|
|» RetentionPeriodHours|body|object|true|none|
|» StreamARN|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Kinesis_20131202.IncreaseStreamRetentionPeriod|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="increasestreamretentionperiod-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListShards

<a id="opIdListShards"></a>

> Code samples

```bash
curl 'https://kinesis.us-east-1.amazonaws.com/#X-Amz-Target=Kinesis_20131202.ListShards' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Kinesis_20131202.ListShards' \
  -d '{
    "StreamName": {},
    "NextToken": {},
    "ExclusiveStartShardId": {},
    "MaxResults": {},
    "StreamCreationTimestamp": {},
    "ShardFilter": {
      "Type": {},
      "ShardId": {},
      "Timestamp": {}
    },
    "StreamARN": {}
  }'
```

`POST /#X-Amz-Target=Kinesis_20131202.ListShards`

<p>Lists the shards in a stream and provides information about each shard. This operation has a limit of 1000 transactions per second per data stream.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p>This action does not list expired shards. For information about expired shards, see <a href="https://docs.aws.amazon.com/streams/latest/dev/kinesis-using-sdk-java-after-resharding.html#kinesis-using-sdk-java-resharding-data-routing">Data Routing, Data Persistence, and Shard State after a Reshard</a>. </p> <important> <p>This API is a new operation that is used by the Amazon Kinesis Client Library (KCL). If you have a fine-grained IAM policy that only allows specific operations, you must update your policy to allow calls to this API. For more information, see <a href="https://docs.aws.amazon.com/streams/latest/dev/controlling-access.html">Controlling Access to Amazon Kinesis Data Streams Resources Using IAM</a>.</p> </important>

> Body parameter

```json
{
  "StreamName": {},
  "NextToken": {},
  "ExclusiveStartShardId": {},
  "MaxResults": {},
  "StreamCreationTimestamp": {},
  "ShardFilter": {
    "Type": {},
    "ShardId": {},
    "Timestamp": {}
  },
  "StreamARN": {}
}
```

<h3 id="listshards-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListShardsInput](#schemalistshardsinput)|true|none|
|» StreamName|body|object|false|none|
|» NextToken|body|object|false|none|
|» ExclusiveStartShardId|body|object|false|none|
|» MaxResults|body|object|false|none|
|» StreamCreationTimestamp|body|object|false|none|
|» ShardFilter|body|object|false|none|
|» » Type|body|object|true|none|
|» » ShardId|body|object|false|none|
|» » Timestamp|body|object|false|none|
|» StreamARN|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Kinesis_20131202.ListShards|

> Example responses

> 200 Response

```json
{
  "Shards": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="listshards-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListShardsOutput](#schemalistshardsoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ExpiredNextTokenException|[ExpiredNextTokenException](#schemaexpirednexttokenexception)|
|484|484|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListStreamConsumers

<a id="opIdListStreamConsumers"></a>

> Code samples

```bash
curl 'https://kinesis.us-east-1.amazonaws.com/#X-Amz-Target=Kinesis_20131202.ListStreamConsumers' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Kinesis_20131202.ListStreamConsumers' \
  -d '{
    "StreamARN": {},
    "NextToken": {},
    "MaxResults": {},
    "StreamCreationTimestamp": {}
  }'
```

`POST /#X-Amz-Target=Kinesis_20131202.ListStreamConsumers`

<p>Lists the consumers registered to receive data from a stream using enhanced fan-out, and provides information about each consumer.</p> <p>This operation has a limit of 5 transactions per second per stream.</p>

> Body parameter

```json
{
  "StreamARN": {},
  "NextToken": {},
  "MaxResults": {},
  "StreamCreationTimestamp": {}
}
```

<h3 id="liststreamconsumers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListStreamConsumersInput](#schemaliststreamconsumersinput)|true|none|
|» StreamARN|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» StreamCreationTimestamp|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Kinesis_20131202.ListStreamConsumers|

> Example responses

> 200 Response

```json
{
  "Consumers": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="liststreamconsumers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListStreamConsumersOutput](#schemaliststreamconsumersoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ExpiredNextTokenException|[ExpiredNextTokenException](#schemaexpirednexttokenexception)|
|484|484|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListStreams

<a id="opIdListStreams"></a>

> Code samples

```bash
curl 'https://kinesis.us-east-1.amazonaws.com/#X-Amz-Target=Kinesis_20131202.ListStreams' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Kinesis_20131202.ListStreams' \
  -d '{
    "Limit": {},
    "ExclusiveStartStreamName": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=Kinesis_20131202.ListStreams`

<p>Lists your Kinesis data streams.</p> <p>The number of streams may be too large to return from a single call to <code>ListStreams</code>. You can limit the number of returned streams using the <code>Limit</code> parameter. If you do not specify a value for the <code>Limit</code> parameter, Kinesis Data Streams uses the default limit, which is currently 100.</p> <p>You can detect if there are more streams available to list by using the <code>HasMoreStreams</code> flag from the returned output. If there are more streams available, you can request more streams by using the name of the last stream returned by the <code>ListStreams</code> request in the <code>ExclusiveStartStreamName</code> parameter in a subsequent request to <code>ListStreams</code>. The group of stream names returned by the subsequent request is then added to the list. You can continue this process until all the stream names have been collected in the list. </p> <p> <a>ListStreams</a> has a limit of five transactions per second per account.</p>

> Body parameter

```json
{
  "Limit": {},
  "ExclusiveStartStreamName": {},
  "NextToken": {}
}
```

<h3 id="liststreams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListStreamsInput](#schemaliststreamsinput)|true|none|
|» Limit|body|object|false|none|
|» ExclusiveStartStreamName|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Kinesis_20131202.ListStreams|

> Example responses

> 200 Response

```json
{
  "StreamNames": {},
  "HasMoreStreams": {},
  "NextToken": {},
  "StreamSummaries": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="liststreams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListStreamsOutput](#schemaliststreamsoutput)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|ExpiredNextTokenException|[ExpiredNextTokenException](#schemaexpirednexttokenexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForStream

<a id="opIdListTagsForStream"></a>

> Code samples

```bash
curl 'https://kinesis.us-east-1.amazonaws.com/#X-Amz-Target=Kinesis_20131202.ListTagsForStream' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Kinesis_20131202.ListTagsForStream' \
  -d '{
    "StreamName": {},
    "ExclusiveStartTagKey": {},
    "Limit": {},
    "StreamARN": {}
  }'
```

`POST /#X-Amz-Target=Kinesis_20131202.ListTagsForStream`

<p>Lists the tags for the specified Kinesis data stream. This operation has a limit of five transactions per second per account.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note>

> Body parameter

```json
{
  "StreamName": {},
  "ExclusiveStartTagKey": {},
  "Limit": {},
  "StreamARN": {}
}
```

<h3 id="listtagsforstream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListTagsForStreamInput](#schemalisttagsforstreaminput)|true|none|
|» StreamName|body|object|false|none|
|» ExclusiveStartTagKey|body|object|false|none|
|» Limit|body|object|false|none|
|» StreamARN|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Kinesis_20131202.ListTagsForStream|

> Example responses

> 200 Response

```json
{
  "Tags": {},
  "HasMoreTags": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="listtagsforstream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForStreamOutput](#schemalisttagsforstreamoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## MergeShards

<a id="opIdMergeShards"></a>

> Code samples

```bash
curl 'https://kinesis.us-east-1.amazonaws.com/#X-Amz-Target=Kinesis_20131202.MergeShards' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Kinesis_20131202.MergeShards' \
  -d '{
    "StreamName": {},
    "ShardToMerge": {},
    "AdjacentShardToMerge": {},
    "StreamARN": {}
  }'
```

`POST /#X-Amz-Target=Kinesis_20131202.MergeShards`

<p>Merges two adjacent shards in a Kinesis data stream and combines them into a single shard to reduce the stream's capacity to ingest and transport data. This API is only supported for the data streams with the provisioned capacity mode. Two shards are considered adjacent if the union of the hash key ranges for the two shards form a contiguous set with no gaps. For example, if you have two shards, one with a hash key range of 276...381 and the other with a hash key range of 382...454, then you could merge these two shards into a single shard that would have a hash key range of 276...454. After the merge, the single child shard receives data for all hash key values covered by the two parent shards.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p> <code>MergeShards</code> is called when there is a need to reduce the overall capacity of a stream because of excess capacity that is not being used. You must specify the shard to be merged and the adjacent shard for a stream. For more information about merging shards, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/kinesis-using-sdk-java-resharding-merge.html">Merge Two Shards</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p> <p>If the stream is in the <code>ACTIVE</code> state, you can call <code>MergeShards</code>. If a stream is in the <code>CREATING</code>, <code>UPDATING</code>, or <code>DELETING</code> state, <code>MergeShards</code> returns a <code>ResourceInUseException</code>. If the specified stream does not exist, <code>MergeShards</code> returns a <code>ResourceNotFoundException</code>. </p> <p>You can use <a>DescribeStreamSummary</a> to check the state of the stream, which is returned in <code>StreamStatus</code>.</p> <p> <code>MergeShards</code> is an asynchronous operation. Upon receiving a <code>MergeShards</code> request, Amazon Kinesis Data Streams immediately returns a response and sets the <code>StreamStatus</code> to <code>UPDATING</code>. After the operation is completed, Kinesis Data Streams sets the <code>StreamStatus</code> to <code>ACTIVE</code>. Read and write operations continue to work while the stream is in the <code>UPDATING</code> state. </p> <p>You use <a>DescribeStreamSummary</a> and the <a>ListShards</a> APIs to determine the shard IDs that are specified in the <code>MergeShards</code> request. </p> <p>If you try to operate on too many streams in parallel using <a>CreateStream</a>, <a>DeleteStream</a>, <code>MergeShards</code>, or <a>SplitShard</a>, you receive a <code>LimitExceededException</code>. </p> <p> <code>MergeShards</code> has a limit of five transactions per second per account.</p>

> Body parameter

```json
{
  "StreamName": {},
  "ShardToMerge": {},
  "AdjacentShardToMerge": {},
  "StreamARN": {}
}
```

<h3 id="mergeshards-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[MergeShardsInput](#schemamergeshardsinput)|true|none|
|» StreamName|body|object|false|none|
|» ShardToMerge|body|object|true|none|
|» AdjacentShardToMerge|body|object|true|none|
|» StreamARN|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Kinesis_20131202.MergeShards|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="mergeshards-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutRecord

<a id="opIdPutRecord"></a>

> Code samples

```bash
curl 'https://kinesis.us-east-1.amazonaws.com/#X-Amz-Target=Kinesis_20131202.PutRecord' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Kinesis_20131202.PutRecord' \
  -d '{
    "StreamName": {},
    "Data": {},
    "PartitionKey": {},
    "ExplicitHashKey": {},
    "SequenceNumberForOrdering": {},
    "StreamARN": {}
  }'
```

`POST /#X-Amz-Target=Kinesis_20131202.PutRecord`

<p>Writes a single data record into an Amazon Kinesis data stream. Call <code>PutRecord</code> to send data into the stream for real-time ingestion and subsequent processing, one record at a time. Each shard can support writes up to 1,000 records per second, up to a maximum data write total of 1 MiB per second.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p>You must specify the name of the stream that captures, stores, and transports the data; a partition key; and the data blob itself.</p> <p>The data blob can be any type of data; for example, a segment from a log file, geographic/location data, website clickstream data, and so on.</p> <p>The partition key is used by Kinesis Data Streams to distribute data across shards. Kinesis Data Streams segregates the data records that belong to a stream into multiple shards, using the partition key associated with each data record to determine the shard to which a given data record belongs.</p> <p>Partition keys are Unicode strings, with a maximum length limit of 256 characters for each key. An MD5 hash function is used to map partition keys to 128-bit integer values and to map associated data records to shards using the hash key ranges of the shards. You can override hashing the partition key to determine the shard by explicitly specifying a hash value using the <code>ExplicitHashKey</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/developing-producers-with-sdk.html#kinesis-using-sdk-java-add-data-to-stream">Adding Data to a Stream</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p> <p> <code>PutRecord</code> returns the shard ID of where the data record was placed and the sequence number that was assigned to the data record.</p> <p>Sequence numbers increase over time and are specific to a shard within a stream, not across all shards within a stream. To guarantee strictly increasing ordering, write serially to a shard and use the <code>SequenceNumberForOrdering</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/developing-producers-with-sdk.html#kinesis-using-sdk-java-add-data-to-stream">Adding Data to a Stream</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p> <important> <p>After you write a record to a stream, you cannot modify that record or its order within the stream.</p> </important> <p>If a <code>PutRecord</code> request cannot be processed because of insufficient provisioned throughput on the shard involved in the request, <code>PutRecord</code> throws <code>ProvisionedThroughputExceededException</code>. </p> <p>By default, data records are accessible for 24 hours from the time that they are added to a stream. You can use <a>IncreaseStreamRetentionPeriod</a> or <a>DecreaseStreamRetentionPeriod</a> to modify this retention period.</p>

> Body parameter

```json
{
  "StreamName": {},
  "Data": {},
  "PartitionKey": {},
  "ExplicitHashKey": {},
  "SequenceNumberForOrdering": {},
  "StreamARN": {}
}
```

<h3 id="putrecord-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutRecordInput](#schemaputrecordinput)|true|none|
|» StreamName|body|object|false|none|
|» Data|body|object|true|none|
|» PartitionKey|body|object|true|none|
|» ExplicitHashKey|body|object|false|none|
|» SequenceNumberForOrdering|body|object|false|none|
|» StreamARN|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Kinesis_20131202.PutRecord|

> Example responses

> 200 Response

```json
{
  "ShardId": {},
  "SequenceNumber": {},
  "EncryptionType": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

> 489 Response

```json
null
```

<h3 id="putrecord-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutRecordOutput](#schemaputrecordoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|482|482|ProvisionedThroughputExceededException|[ProvisionedThroughputExceededException](#schemaprovisionedthroughputexceededexception)|
|483|483|KMSDisabledException|[KMSDisabledException](#schemakmsdisabledexception)|
|484|484|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|
|485|485|KMSAccessDeniedException|[KMSAccessDeniedException](#schemakmsaccessdeniedexception)|
|486|486|KMSNotFoundException|[KMSNotFoundException](#schemakmsnotfoundexception)|
|487|487|KMSOptInRequired|[KMSOptInRequired](#schemakmsoptinrequired)|
|488|488|KMSThrottlingException|[KMSThrottlingException](#schemakmsthrottlingexception)|
|489|489|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutRecords

<a id="opIdPutRecords"></a>

> Code samples

```bash
curl 'https://kinesis.us-east-1.amazonaws.com/#X-Amz-Target=Kinesis_20131202.PutRecords' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Kinesis_20131202.PutRecords' \
  -d '{
    "Records": {},
    "StreamName": {},
    "StreamARN": {}
  }'
```

`POST /#X-Amz-Target=Kinesis_20131202.PutRecords`

<p>Writes multiple data records into a Kinesis data stream in a single call (also referred to as a <code>PutRecords</code> request). Use this operation to send data into the stream for data ingestion and processing. </p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p>Each <code>PutRecords</code> request can support up to 500 records. Each record in the request can be as large as 1 MiB, up to a limit of 5 MiB for the entire request, including partition keys. Each shard can support writes up to 1,000 records per second, up to a maximum data write total of 1 MiB per second.</p> <p>You must specify the name of the stream that captures, stores, and transports the data; and an array of request <code>Records</code>, with each record in the array requiring a partition key and data blob. The record size limit applies to the total size of the partition key and data blob.</p> <p>The data blob can be any type of data; for example, a segment from a log file, geographic/location data, website clickstream data, and so on.</p> <p>The partition key is used by Kinesis Data Streams as input to a hash function that maps the partition key and associated data to a specific shard. An MD5 hash function is used to map partition keys to 128-bit integer values and to map associated data records to shards. As a result of this hashing mechanism, all data records with the same partition key map to the same shard within the stream. For more information, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/developing-producers-with-sdk.html#kinesis-using-sdk-java-add-data-to-stream">Adding Data to a Stream</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p> <p>Each record in the <code>Records</code> array may include an optional parameter, <code>ExplicitHashKey</code>, which overrides the partition key to shard mapping. This parameter allows a data producer to determine explicitly the shard where the record is stored. For more information, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/developing-producers-with-sdk.html#kinesis-using-sdk-java-putrecords">Adding Multiple Records with PutRecords</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p> <p>The <code>PutRecords</code> response includes an array of response <code>Records</code>. Each record in the response array directly correlates with a record in the request array using natural ordering, from the top to the bottom of the request and response. The response <code>Records</code> array always includes the same number of records as the request array.</p> <p>The response <code>Records</code> array includes both successfully and unsuccessfully processed records. Kinesis Data Streams attempts to process all records in each <code>PutRecords</code> request. A single record failure does not stop the processing of subsequent records. As a result, PutRecords doesn't guarantee the ordering of records. If you need to read records in the same order they are written to the stream, use <a>PutRecord</a> instead of <code>PutRecords</code>, and write to the same shard.</p> <p>A successfully processed record includes <code>ShardId</code> and <code>SequenceNumber</code> values. The <code>ShardId</code> parameter identifies the shard in the stream where the record is stored. The <code>SequenceNumber</code> parameter is an identifier assigned to the put record, unique to all records in the stream.</p> <p>An unsuccessfully processed record includes <code>ErrorCode</code> and <code>ErrorMessage</code> values. <code>ErrorCode</code> reflects the type of error and can be one of the following values: <code>ProvisionedThroughputExceededException</code> or <code>InternalFailure</code>. <code>ErrorMessage</code> provides more detailed information about the <code>ProvisionedThroughputExceededException</code> exception including the account ID, stream name, and shard ID of the record that was throttled. For more information about partially successful responses, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/kinesis-using-sdk-java-add-data-to-stream.html#kinesis-using-sdk-java-putrecords">Adding Multiple Records with PutRecords</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p> <important> <p>After you write a record to a stream, you cannot modify that record or its order within the stream.</p> </important> <p>By default, data records are accessible for 24 hours from the time that they are added to a stream. You can use <a>IncreaseStreamRetentionPeriod</a> or <a>DecreaseStreamRetentionPeriod</a> to modify this retention period.</p>

> Body parameter

```json
{
  "Records": {},
  "StreamName": {},
  "StreamARN": {}
}
```

<h3 id="putrecords-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutRecordsInput](#schemaputrecordsinput)|true|none|
|» Records|body|object|true|none|
|» StreamName|body|object|false|none|
|» StreamARN|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Kinesis_20131202.PutRecords|

> Example responses

> 200 Response

```json
{
  "FailedRecordCount": {},
  "Records": {},
  "EncryptionType": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

> 489 Response

```json
null
```

<h3 id="putrecords-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutRecordsOutput](#schemaputrecordsoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|482|482|ProvisionedThroughputExceededException|[ProvisionedThroughputExceededException](#schemaprovisionedthroughputexceededexception)|
|483|483|KMSDisabledException|[KMSDisabledException](#schemakmsdisabledexception)|
|484|484|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|
|485|485|KMSAccessDeniedException|[KMSAccessDeniedException](#schemakmsaccessdeniedexception)|
|486|486|KMSNotFoundException|[KMSNotFoundException](#schemakmsnotfoundexception)|
|487|487|KMSOptInRequired|[KMSOptInRequired](#schemakmsoptinrequired)|
|488|488|KMSThrottlingException|[KMSThrottlingException](#schemakmsthrottlingexception)|
|489|489|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterStreamConsumer

<a id="opIdRegisterStreamConsumer"></a>

> Code samples

```bash
curl 'https://kinesis.us-east-1.amazonaws.com/#X-Amz-Target=Kinesis_20131202.RegisterStreamConsumer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Kinesis_20131202.RegisterStreamConsumer' \
  -d '{
    "StreamARN": {},
    "ConsumerName": {}
  }'
```

`POST /#X-Amz-Target=Kinesis_20131202.RegisterStreamConsumer`

<p>Registers a consumer with a Kinesis data stream. When you use this operation, the consumer you register can then call <a>SubscribeToShard</a> to receive data from the stream using enhanced fan-out, at a rate of up to 2 MiB per second for every shard you subscribe to. This rate is unaffected by the total number of consumers that read from the same stream.</p> <p>You can register up to 20 consumers per stream. A given consumer can only be registered with one stream at a time.</p> <p>For an example of how to use this operations, see <a href="/streams/latest/dev/building-enhanced-consumers-api.html">Enhanced Fan-Out Using the Kinesis Data Streams API</a>.</p> <p>The use of this operation has a limit of five transactions per second per account. Also, only 5 consumers can be created simultaneously. In other words, you cannot have more than 5 consumers in a <code>CREATING</code> status at the same time. Registering a 6th consumer while there are 5 in a <code>CREATING</code> status results in a <code>LimitExceededException</code>.</p>

> Body parameter

```json
{
  "StreamARN": {},
  "ConsumerName": {}
}
```

<h3 id="registerstreamconsumer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[RegisterStreamConsumerInput](#schemaregisterstreamconsumerinput)|true|none|
|» StreamARN|body|object|true|none|
|» ConsumerName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Kinesis_20131202.RegisterStreamConsumer|

> Example responses

> 200 Response

```json
{
  "Consumer": {
    "ConsumerName": {},
    "ConsumerARN": {},
    "ConsumerStatus": {},
    "ConsumerCreationTimestamp": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="registerstreamconsumer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterStreamConsumerOutput](#schemaregisterstreamconsumeroutput)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemoveTagsFromStream

<a id="opIdRemoveTagsFromStream"></a>

> Code samples

```bash
curl 'https://kinesis.us-east-1.amazonaws.com/#X-Amz-Target=Kinesis_20131202.RemoveTagsFromStream' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Kinesis_20131202.RemoveTagsFromStream' \
  -d '{
    "StreamName": {},
    "TagKeys": {},
    "StreamARN": {}
  }'
```

`POST /#X-Amz-Target=Kinesis_20131202.RemoveTagsFromStream`

<p>Removes tags from the specified Kinesis data stream. Removed tags are deleted and cannot be recovered after this operation successfully completes.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p>If you specify a tag that does not exist, it is ignored.</p> <p> <a>RemoveTagsFromStream</a> has a limit of five transactions per second per account.</p>

> Body parameter

```json
{
  "StreamName": {},
  "TagKeys": {},
  "StreamARN": {}
}
```

<h3 id="removetagsfromstream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[RemoveTagsFromStreamInput](#schemaremovetagsfromstreaminput)|true|none|
|» StreamName|body|object|false|none|
|» TagKeys|body|object|true|none|
|» StreamARN|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Kinesis_20131202.RemoveTagsFromStream|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="removetagsfromstream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SplitShard

<a id="opIdSplitShard"></a>

> Code samples

```bash
curl 'https://kinesis.us-east-1.amazonaws.com/#X-Amz-Target=Kinesis_20131202.SplitShard' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Kinesis_20131202.SplitShard' \
  -d '{
    "StreamName": {},
    "ShardToSplit": {},
    "NewStartingHashKey": {},
    "StreamARN": {}
  }'
```

`POST /#X-Amz-Target=Kinesis_20131202.SplitShard`

<p>Splits a shard into two new shards in the Kinesis data stream, to increase the stream's capacity to ingest and transport data. <code>SplitShard</code> is called when there is a need to increase the overall capacity of a stream because of an expected increase in the volume of data records being ingested. This API is only supported for the data streams with the provisioned capacity mode.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p>You can also use <code>SplitShard</code> when a shard appears to be approaching its maximum utilization; for example, the producers sending data into the specific shard are suddenly sending more than previously anticipated. You can also call <code>SplitShard</code> to increase stream capacity, so that more Kinesis Data Streams applications can simultaneously read data from the stream for real-time processing. </p> <p>You must specify the shard to be split and the new hash key, which is the position in the shard where the shard gets split in two. In many cases, the new hash key might be the average of the beginning and ending hash key, but it can be any hash key value in the range being mapped into the shard. For more information, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/kinesis-using-sdk-java-resharding-split.html">Split a Shard</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p> <p>You can use <a>DescribeStreamSummary</a> and the <a>ListShards</a> APIs to determine the shard ID and hash key values for the <code>ShardToSplit</code> and <code>NewStartingHashKey</code> parameters that are specified in the <code>SplitShard</code> request.</p> <p> <code>SplitShard</code> is an asynchronous operation. Upon receiving a <code>SplitShard</code> request, Kinesis Data Streams immediately returns a response and sets the stream status to <code>UPDATING</code>. After the operation is completed, Kinesis Data Streams sets the stream status to <code>ACTIVE</code>. Read and write operations continue to work while the stream is in the <code>UPDATING</code> state. </p> <p>You can use <a>DescribeStreamSummary</a> to check the status of the stream, which is returned in <code>StreamStatus</code>. If the stream is in the <code>ACTIVE</code> state, you can call <code>SplitShard</code>. </p> <p>If the specified stream does not exist, <a>DescribeStreamSummary</a> returns a <code>ResourceNotFoundException</code>. If you try to create more shards than are authorized for your account, you receive a <code>LimitExceededException</code>. </p> <p>For the default shard limit for an Amazon Web Services account, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/service-sizes-and-limits.html">Kinesis Data Streams Limits</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>. To increase this limit, <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">contact Amazon Web Services Support</a>.</p> <p>If you try to operate on too many streams simultaneously using <a>CreateStream</a>, <a>DeleteStream</a>, <a>MergeShards</a>, and/or <a>SplitShard</a>, you receive a <code>LimitExceededException</code>. </p> <p> <code>SplitShard</code> has a limit of five transactions per second per account.</p>

> Body parameter

```json
{
  "StreamName": {},
  "ShardToSplit": {},
  "NewStartingHashKey": {},
  "StreamARN": {}
}
```

<h3 id="splitshard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[SplitShardInput](#schemasplitshardinput)|true|none|
|» StreamName|body|object|false|none|
|» ShardToSplit|body|object|true|none|
|» NewStartingHashKey|body|object|true|none|
|» StreamARN|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Kinesis_20131202.SplitShard|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="splitshard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartStreamEncryption

<a id="opIdStartStreamEncryption"></a>

> Code samples

```bash
curl 'https://kinesis.us-east-1.amazonaws.com/#X-Amz-Target=Kinesis_20131202.StartStreamEncryption' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Kinesis_20131202.StartStreamEncryption' \
  -d '{
    "StreamName": {},
    "EncryptionType": {},
    "KeyId": {},
    "StreamARN": {}
  }'
```

`POST /#X-Amz-Target=Kinesis_20131202.StartStreamEncryption`

<p>Enables or updates server-side encryption using an Amazon Web Services KMS key for a specified stream. </p> <p>Starting encryption is an asynchronous operation. Upon receiving the request, Kinesis Data Streams returns immediately and sets the status of the stream to <code>UPDATING</code>. After the update is complete, Kinesis Data Streams sets the status of the stream back to <code>ACTIVE</code>. Updating or applying encryption normally takes a few seconds to complete, but it can take minutes. You can continue to read and write data to your stream while its status is <code>UPDATING</code>. Once the status of the stream is <code>ACTIVE</code>, encryption begins for records written to the stream. </p> <p>API Limits: You can successfully apply a new Amazon Web Services KMS key for server-side encryption 25 times in a rolling 24-hour period.</p> <p>Note: It can take up to 5 seconds after the stream is in an <code>ACTIVE</code> status before all records written to the stream are encrypted. After you enable encryption, you can verify that encryption is applied by inspecting the API response from <code>PutRecord</code> or <code>PutRecords</code>.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note>

> Body parameter

```json
{
  "StreamName": {},
  "EncryptionType": {},
  "KeyId": {},
  "StreamARN": {}
}
```

<h3 id="startstreamencryption-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[StartStreamEncryptionInput](#schemastartstreamencryptioninput)|true|none|
|» StreamName|body|object|false|none|
|» EncryptionType|body|object|true|none|
|» KeyId|body|object|true|none|
|» StreamARN|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Kinesis_20131202.StartStreamEncryption|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

> 489 Response

```json
null
```

> 490 Response

```json
null
```

<h3 id="startstreamencryption-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|KMSDisabledException|[KMSDisabledException](#schemakmsdisabledexception)|
|485|485|KMSInvalidStateException|[KMSInvalidStateException](#schemakmsinvalidstateexception)|
|486|486|KMSAccessDeniedException|[KMSAccessDeniedException](#schemakmsaccessdeniedexception)|
|487|487|KMSNotFoundException|[KMSNotFoundException](#schemakmsnotfoundexception)|
|488|488|KMSOptInRequired|[KMSOptInRequired](#schemakmsoptinrequired)|
|489|489|KMSThrottlingException|[KMSThrottlingException](#schemakmsthrottlingexception)|
|490|490|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopStreamEncryption

<a id="opIdStopStreamEncryption"></a>

> Code samples

```bash
curl 'https://kinesis.us-east-1.amazonaws.com/#X-Amz-Target=Kinesis_20131202.StopStreamEncryption' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Kinesis_20131202.StopStreamEncryption' \
  -d '{
    "StreamName": {},
    "EncryptionType": {},
    "KeyId": {},
    "StreamARN": {}
  }'
```

`POST /#X-Amz-Target=Kinesis_20131202.StopStreamEncryption`

<p>Disables server-side encryption for a specified stream. </p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p>Stopping encryption is an asynchronous operation. Upon receiving the request, Kinesis Data Streams returns immediately and sets the status of the stream to <code>UPDATING</code>. After the update is complete, Kinesis Data Streams sets the status of the stream back to <code>ACTIVE</code>. Stopping encryption normally takes a few seconds to complete, but it can take minutes. You can continue to read and write data to your stream while its status is <code>UPDATING</code>. Once the status of the stream is <code>ACTIVE</code>, records written to the stream are no longer encrypted by Kinesis Data Streams. </p> <p>API Limits: You can successfully disable server-side encryption 25 times in a rolling 24-hour period. </p> <p>Note: It can take up to 5 seconds after the stream is in an <code>ACTIVE</code> status before all records written to the stream are no longer subject to encryption. After you disabled encryption, you can verify that encryption is not applied by inspecting the API response from <code>PutRecord</code> or <code>PutRecords</code>.</p>

> Body parameter

```json
{
  "StreamName": {},
  "EncryptionType": {},
  "KeyId": {},
  "StreamARN": {}
}
```

<h3 id="stopstreamencryption-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[StopStreamEncryptionInput](#schemastopstreamencryptioninput)|true|none|
|» StreamName|body|object|false|none|
|» EncryptionType|body|object|true|none|
|» KeyId|body|object|true|none|
|» StreamARN|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Kinesis_20131202.StopStreamEncryption|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="stopstreamencryption-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateShardCount

<a id="opIdUpdateShardCount"></a>

> Code samples

```bash
curl 'https://kinesis.us-east-1.amazonaws.com/#X-Amz-Target=Kinesis_20131202.UpdateShardCount' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Kinesis_20131202.UpdateShardCount' \
  -d '{
    "StreamName": {},
    "TargetShardCount": {},
    "ScalingType": {},
    "StreamARN": {}
  }'
```

`POST /#X-Amz-Target=Kinesis_20131202.UpdateShardCount`

<p>Updates the shard count of the specified stream to the specified number of shards. This API is only supported for the data streams with the provisioned capacity mode.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p>Updating the shard count is an asynchronous operation. Upon receiving the request, Kinesis Data Streams returns immediately and sets the status of the stream to <code>UPDATING</code>. After the update is complete, Kinesis Data Streams sets the status of the stream back to <code>ACTIVE</code>. Depending on the size of the stream, the scaling action could take a few minutes to complete. You can continue to read and write data to your stream while its status is <code>UPDATING</code>.</p> <p>To update the shard count, Kinesis Data Streams performs splits or merges on individual shards. This can cause short-lived shards to be created, in addition to the final shards. These short-lived shards count towards your total shard limit for your account in the Region.</p> <p>When using this operation, we recommend that you specify a target shard count that is a multiple of 25% (25%, 50%, 75%, 100%). You can specify any target value within your shard limit. However, if you specify a target that isn't a multiple of 25%, the scaling action might take longer to complete. </p> <p>This operation has the following default limits. By default, you cannot do the following:</p> <ul> <li> <p>Scale more than ten times per rolling 24-hour period per stream</p> </li> <li> <p>Scale up to more than double your current shard count for a stream</p> </li> <li> <p>Scale down below half your current shard count for a stream</p> </li> <li> <p>Scale up to more than 10000 shards in a stream</p> </li> <li> <p>Scale a stream with more than 10000 shards down unless the result is less than 10000 shards</p> </li> <li> <p>Scale up to more than the shard limit for your account</p> </li> </ul> <p>For the default limits for an Amazon Web Services account, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/service-sizes-and-limits.html">Streams Limits</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>. To request an increase in the call rate limit, the shard limit for this API, or your overall shard limit, use the <a href="https://console.aws.amazon.com/support/v1#/case/create?issueType=service-limit-increase&amp;limitType=service-code-kinesis">limits form</a>.</p>

> Body parameter

```json
{
  "StreamName": {},
  "TargetShardCount": {},
  "ScalingType": {},
  "StreamARN": {}
}
```

<h3 id="updateshardcount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateShardCountInput](#schemaupdateshardcountinput)|true|none|
|» StreamName|body|object|false|none|
|» TargetShardCount|body|object|true|none|
|» ScalingType|body|object|true|none|
|» StreamARN|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Kinesis_20131202.UpdateShardCount|

> Example responses

> 200 Response

```json
{
  "StreamName": {},
  "CurrentShardCount": {},
  "TargetShardCount": {},
  "StreamARN": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="updateshardcount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateShardCountOutput](#schemaupdateshardcountoutput)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateStreamMode

<a id="opIdUpdateStreamMode"></a>

> Code samples

```bash
curl 'https://kinesis.us-east-1.amazonaws.com/#X-Amz-Target=Kinesis_20131202.UpdateStreamMode' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Kinesis_20131202.UpdateStreamMode' \
  -d '{
    "StreamARN": {},
    "StreamModeDetails": {
      "StreamMode": {}
    }
  }'
```

`POST /#X-Amz-Target=Kinesis_20131202.UpdateStreamMode`

 Updates the capacity mode of the data stream. Currently, in Kinesis Data Streams, you can choose between an <b>on-demand</b> capacity mode and a <b>provisioned</b> capacity mode for your data stream. 

> Body parameter

```json
{
  "StreamARN": {},
  "StreamModeDetails": {
    "StreamMode": {}
  }
}
```

<h3 id="updatestreammode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateStreamModeInput](#schemaupdatestreammodeinput)|true|none|
|» StreamARN|body|object|true|none|
|» StreamModeDetails|body|object|true|none|
|» » StreamMode|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Kinesis_20131202.UpdateStreamMode|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="updatestreammode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AddTagsToStreamInput">AddTagsToStreamInput</h2>
<!-- backwards compatibility -->
<a id="schemaaddtagstostreaminput"></a>
<a id="schema_AddTagsToStreamInput"></a>
<a id="tocSaddtagstostreaminput"></a>
<a id="tocsaddtagstostreaminput"></a>

```json
{
  "StreamName": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "StreamARN": {}
}
```

Represents the input for <code>AddTagsToStream</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|false|none|none|
|Tags|object|true|none|none|
|StreamARN|object|false|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_ResourceInUseException">ResourceInUseException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceinuseexception"></a>
<a id="schema_ResourceInUseException"></a>
<a id="tocSresourceinuseexception"></a>
<a id="tocsresourceinuseexception"></a>

```json
null
```

<h2 id="tocS_InvalidArgumentException">InvalidArgumentException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidargumentexception"></a>
<a id="schema_InvalidArgumentException"></a>
<a id="tocSinvalidargumentexception"></a>
<a id="tocsinvalidargumentexception"></a>

```json
null
```

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

```json
null
```

<h2 id="tocS_CreateStreamInput">CreateStreamInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatestreaminput"></a>
<a id="schema_CreateStreamInput"></a>
<a id="tocScreatestreaminput"></a>
<a id="tocscreatestreaminput"></a>

```json
{
  "StreamName": {},
  "ShardCount": {},
  "StreamModeDetails": {
    "StreamMode": {}
  }
}
```

Represents the input for <code>CreateStream</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|true|none|none|
|ShardCount|object|false|none|none|
|StreamModeDetails|object|false|none|none|

<h2 id="tocS_DecreaseStreamRetentionPeriodInput">DecreaseStreamRetentionPeriodInput</h2>
<!-- backwards compatibility -->
<a id="schemadecreasestreamretentionperiodinput"></a>
<a id="schema_DecreaseStreamRetentionPeriodInput"></a>
<a id="tocSdecreasestreamretentionperiodinput"></a>
<a id="tocsdecreasestreamretentionperiodinput"></a>

```json
{
  "StreamName": {},
  "RetentionPeriodHours": {},
  "StreamARN": {}
}
```

Represents the input for <a>DecreaseStreamRetentionPeriod</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|false|none|none|
|RetentionPeriodHours|object|true|none|none|
|StreamARN|object|false|none|none|

<h2 id="tocS_DeleteStreamInput">DeleteStreamInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletestreaminput"></a>
<a id="schema_DeleteStreamInput"></a>
<a id="tocSdeletestreaminput"></a>
<a id="tocsdeletestreaminput"></a>

```json
{
  "StreamName": {},
  "EnforceConsumerDeletion": {},
  "StreamARN": {}
}
```

Represents the input for <a>DeleteStream</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|false|none|none|
|EnforceConsumerDeletion|object|false|none|none|
|StreamARN|object|false|none|none|

<h2 id="tocS_DeregisterStreamConsumerInput">DeregisterStreamConsumerInput</h2>
<!-- backwards compatibility -->
<a id="schemaderegisterstreamconsumerinput"></a>
<a id="schema_DeregisterStreamConsumerInput"></a>
<a id="tocSderegisterstreamconsumerinput"></a>
<a id="tocsderegisterstreamconsumerinput"></a>

```json
{
  "StreamARN": {},
  "ConsumerName": {},
  "ConsumerARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamARN|object|false|none|none|
|ConsumerName|object|false|none|none|
|ConsumerARN|object|false|none|none|

<h2 id="tocS_DescribeLimitsOutput">DescribeLimitsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribelimitsoutput"></a>
<a id="schema_DescribeLimitsOutput"></a>
<a id="tocSdescribelimitsoutput"></a>
<a id="tocsdescribelimitsoutput"></a>

```json
{
  "ShardLimit": {},
  "OpenShardCount": {},
  "OnDemandStreamCount": {},
  "OnDemandStreamCountLimit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ShardLimit|object|true|none|none|
|OpenShardCount|object|true|none|none|
|OnDemandStreamCount|object|true|none|none|
|OnDemandStreamCountLimit|object|true|none|none|

<h2 id="tocS_DescribeLimitsInput">DescribeLimitsInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribelimitsinput"></a>
<a id="schema_DescribeLimitsInput"></a>
<a id="tocSdescribelimitsinput"></a>
<a id="tocsdescribelimitsinput"></a>

```json
{}
```

<h2 id="tocS_DescribeStreamOutput">DescribeStreamOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribestreamoutput"></a>
<a id="schema_DescribeStreamOutput"></a>
<a id="tocSdescribestreamoutput"></a>
<a id="tocsdescribestreamoutput"></a>

```json
{
  "StreamDescription": {
    "StreamName": {},
    "StreamARN": {},
    "StreamStatus": {},
    "StreamModeDetails": {
      "StreamMode": {}
    },
    "Shards": {},
    "HasMoreShards": {},
    "RetentionPeriodHours": {},
    "StreamCreationTimestamp": {},
    "EnhancedMonitoring": {},
    "EncryptionType": {},
    "KeyId": {}
  }
}
```

Represents the output for <code>DescribeStream</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamDescription|object|true|none|none|

<h2 id="tocS_DescribeStreamInput">DescribeStreamInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribestreaminput"></a>
<a id="schema_DescribeStreamInput"></a>
<a id="tocSdescribestreaminput"></a>
<a id="tocsdescribestreaminput"></a>

```json
{
  "StreamName": {},
  "Limit": {},
  "ExclusiveStartShardId": {},
  "StreamARN": {}
}
```

Represents the input for <code>DescribeStream</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|false|none|none|
|Limit|object|false|none|none|
|ExclusiveStartShardId|object|false|none|none|
|StreamARN|object|false|none|none|

<h2 id="tocS_DescribeStreamConsumerOutput">DescribeStreamConsumerOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribestreamconsumeroutput"></a>
<a id="schema_DescribeStreamConsumerOutput"></a>
<a id="tocSdescribestreamconsumeroutput"></a>
<a id="tocsdescribestreamconsumeroutput"></a>

```json
{
  "ConsumerDescription": {
    "ConsumerName": {},
    "ConsumerARN": {},
    "ConsumerStatus": {},
    "ConsumerCreationTimestamp": {},
    "StreamARN": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConsumerDescription|object|true|none|none|

<h2 id="tocS_DescribeStreamConsumerInput">DescribeStreamConsumerInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribestreamconsumerinput"></a>
<a id="schema_DescribeStreamConsumerInput"></a>
<a id="tocSdescribestreamconsumerinput"></a>
<a id="tocsdescribestreamconsumerinput"></a>

```json
{
  "StreamARN": {},
  "ConsumerName": {},
  "ConsumerARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamARN|object|false|none|none|
|ConsumerName|object|false|none|none|
|ConsumerARN|object|false|none|none|

<h2 id="tocS_DescribeStreamSummaryOutput">DescribeStreamSummaryOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribestreamsummaryoutput"></a>
<a id="schema_DescribeStreamSummaryOutput"></a>
<a id="tocSdescribestreamsummaryoutput"></a>
<a id="tocsdescribestreamsummaryoutput"></a>

```json
{
  "StreamDescriptionSummary": {
    "StreamName": {},
    "StreamARN": {},
    "StreamStatus": {},
    "StreamModeDetails": {
      "StreamMode": {}
    },
    "RetentionPeriodHours": {},
    "StreamCreationTimestamp": {},
    "EnhancedMonitoring": {},
    "EncryptionType": {},
    "KeyId": {},
    "OpenShardCount": {},
    "ConsumerCount": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamDescriptionSummary|object|true|none|none|

<h2 id="tocS_DescribeStreamSummaryInput">DescribeStreamSummaryInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribestreamsummaryinput"></a>
<a id="schema_DescribeStreamSummaryInput"></a>
<a id="tocSdescribestreamsummaryinput"></a>
<a id="tocsdescribestreamsummaryinput"></a>

```json
{
  "StreamName": {},
  "StreamARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|false|none|none|
|StreamARN|object|false|none|none|

<h2 id="tocS_EnhancedMonitoringOutput">EnhancedMonitoringOutput</h2>
<!-- backwards compatibility -->
<a id="schemaenhancedmonitoringoutput"></a>
<a id="schema_EnhancedMonitoringOutput"></a>
<a id="tocSenhancedmonitoringoutput"></a>
<a id="tocsenhancedmonitoringoutput"></a>

```json
{
  "StreamName": {},
  "CurrentShardLevelMetrics": {},
  "DesiredShardLevelMetrics": {},
  "StreamARN": {}
}
```

Represents the output for <a>EnableEnhancedMonitoring</a> and <a>DisableEnhancedMonitoring</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|false|none|none|
|CurrentShardLevelMetrics|object|false|none|none|
|DesiredShardLevelMetrics|object|false|none|none|
|StreamARN|object|false|none|none|

<h2 id="tocS_DisableEnhancedMonitoringInput">DisableEnhancedMonitoringInput</h2>
<!-- backwards compatibility -->
<a id="schemadisableenhancedmonitoringinput"></a>
<a id="schema_DisableEnhancedMonitoringInput"></a>
<a id="tocSdisableenhancedmonitoringinput"></a>
<a id="tocsdisableenhancedmonitoringinput"></a>

```json
{
  "StreamName": {},
  "ShardLevelMetrics": {},
  "StreamARN": {}
}
```

Represents the input for <a>DisableEnhancedMonitoring</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|false|none|none|
|ShardLevelMetrics|object|true|none|none|
|StreamARN|object|false|none|none|

<h2 id="tocS_EnableEnhancedMonitoringInput">EnableEnhancedMonitoringInput</h2>
<!-- backwards compatibility -->
<a id="schemaenableenhancedmonitoringinput"></a>
<a id="schema_EnableEnhancedMonitoringInput"></a>
<a id="tocSenableenhancedmonitoringinput"></a>
<a id="tocsenableenhancedmonitoringinput"></a>

```json
{
  "StreamName": {},
  "ShardLevelMetrics": {},
  "StreamARN": {}
}
```

Represents the input for <a>EnableEnhancedMonitoring</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|false|none|none|
|ShardLevelMetrics|object|true|none|none|
|StreamARN|object|false|none|none|

<h2 id="tocS_GetRecordsOutput">GetRecordsOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetrecordsoutput"></a>
<a id="schema_GetRecordsOutput"></a>
<a id="tocSgetrecordsoutput"></a>
<a id="tocsgetrecordsoutput"></a>

```json
{
  "Records": {},
  "NextShardIterator": {},
  "MillisBehindLatest": {},
  "ChildShards": {}
}
```

Represents the output for <a>GetRecords</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Records|object|true|none|none|
|NextShardIterator|object|false|none|none|
|MillisBehindLatest|object|false|none|none|
|ChildShards|object|false|none|none|

<h2 id="tocS_GetRecordsInput">GetRecordsInput</h2>
<!-- backwards compatibility -->
<a id="schemagetrecordsinput"></a>
<a id="schema_GetRecordsInput"></a>
<a id="tocSgetrecordsinput"></a>
<a id="tocsgetrecordsinput"></a>

```json
{
  "ShardIterator": {},
  "Limit": {},
  "StreamARN": {}
}
```

Represents the input for <a>GetRecords</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ShardIterator|object|true|none|none|
|Limit|object|false|none|none|
|StreamARN|object|false|none|none|

<h2 id="tocS_ProvisionedThroughputExceededException">ProvisionedThroughputExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionedthroughputexceededexception"></a>
<a id="schema_ProvisionedThroughputExceededException"></a>
<a id="tocSprovisionedthroughputexceededexception"></a>
<a id="tocsprovisionedthroughputexceededexception"></a>

```json
null
```

<h2 id="tocS_ExpiredIteratorException">ExpiredIteratorException</h2>
<!-- backwards compatibility -->
<a id="schemaexpirediteratorexception"></a>
<a id="schema_ExpiredIteratorException"></a>
<a id="tocSexpirediteratorexception"></a>
<a id="tocsexpirediteratorexception"></a>

```json
null
```

<h2 id="tocS_KMSDisabledException">KMSDisabledException</h2>
<!-- backwards compatibility -->
<a id="schemakmsdisabledexception"></a>
<a id="schema_KMSDisabledException"></a>
<a id="tocSkmsdisabledexception"></a>
<a id="tocskmsdisabledexception"></a>

```json
null
```

<h2 id="tocS_KMSInvalidStateException">KMSInvalidStateException</h2>
<!-- backwards compatibility -->
<a id="schemakmsinvalidstateexception"></a>
<a id="schema_KMSInvalidStateException"></a>
<a id="tocSkmsinvalidstateexception"></a>
<a id="tocskmsinvalidstateexception"></a>

```json
null
```

<h2 id="tocS_KMSAccessDeniedException">KMSAccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemakmsaccessdeniedexception"></a>
<a id="schema_KMSAccessDeniedException"></a>
<a id="tocSkmsaccessdeniedexception"></a>
<a id="tocskmsaccessdeniedexception"></a>

```json
null
```

<h2 id="tocS_KMSNotFoundException">KMSNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemakmsnotfoundexception"></a>
<a id="schema_KMSNotFoundException"></a>
<a id="tocSkmsnotfoundexception"></a>
<a id="tocskmsnotfoundexception"></a>

```json
null
```

<h2 id="tocS_KMSOptInRequired">KMSOptInRequired</h2>
<!-- backwards compatibility -->
<a id="schemakmsoptinrequired"></a>
<a id="schema_KMSOptInRequired"></a>
<a id="tocSkmsoptinrequired"></a>
<a id="tocskmsoptinrequired"></a>

```json
null
```

<h2 id="tocS_KMSThrottlingException">KMSThrottlingException</h2>
<!-- backwards compatibility -->
<a id="schemakmsthrottlingexception"></a>
<a id="schema_KMSThrottlingException"></a>
<a id="tocSkmsthrottlingexception"></a>
<a id="tocskmsthrottlingexception"></a>

```json
null
```

<h2 id="tocS_GetShardIteratorOutput">GetShardIteratorOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetsharditeratoroutput"></a>
<a id="schema_GetShardIteratorOutput"></a>
<a id="tocSgetsharditeratoroutput"></a>
<a id="tocsgetsharditeratoroutput"></a>

```json
{
  "ShardIterator": {}
}
```

Represents the output for <code>GetShardIterator</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ShardIterator|object|false|none|none|

<h2 id="tocS_GetShardIteratorInput">GetShardIteratorInput</h2>
<!-- backwards compatibility -->
<a id="schemagetsharditeratorinput"></a>
<a id="schema_GetShardIteratorInput"></a>
<a id="tocSgetsharditeratorinput"></a>
<a id="tocsgetsharditeratorinput"></a>

```json
{
  "StreamName": {},
  "ShardId": {},
  "ShardIteratorType": {},
  "StartingSequenceNumber": {},
  "Timestamp": {},
  "StreamARN": {}
}
```

Represents the input for <code>GetShardIterator</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|false|none|none|
|ShardId|object|true|none|none|
|ShardIteratorType|object|true|none|none|
|StartingSequenceNumber|object|false|none|none|
|Timestamp|object|false|none|none|
|StreamARN|object|false|none|none|

<h2 id="tocS_IncreaseStreamRetentionPeriodInput">IncreaseStreamRetentionPeriodInput</h2>
<!-- backwards compatibility -->
<a id="schemaincreasestreamretentionperiodinput"></a>
<a id="schema_IncreaseStreamRetentionPeriodInput"></a>
<a id="tocSincreasestreamretentionperiodinput"></a>
<a id="tocsincreasestreamretentionperiodinput"></a>

```json
{
  "StreamName": {},
  "RetentionPeriodHours": {},
  "StreamARN": {}
}
```

Represents the input for <a>IncreaseStreamRetentionPeriod</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|false|none|none|
|RetentionPeriodHours|object|true|none|none|
|StreamARN|object|false|none|none|

<h2 id="tocS_ListShardsOutput">ListShardsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistshardsoutput"></a>
<a id="schema_ListShardsOutput"></a>
<a id="tocSlistshardsoutput"></a>
<a id="tocslistshardsoutput"></a>

```json
{
  "Shards": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Shards|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListShardsInput">ListShardsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistshardsinput"></a>
<a id="schema_ListShardsInput"></a>
<a id="tocSlistshardsinput"></a>
<a id="tocslistshardsinput"></a>

```json
{
  "StreamName": {},
  "NextToken": {},
  "ExclusiveStartShardId": {},
  "MaxResults": {},
  "StreamCreationTimestamp": {},
  "ShardFilter": {
    "Type": {},
    "ShardId": {},
    "Timestamp": {}
  },
  "StreamARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|false|none|none|
|NextToken|object|false|none|none|
|ExclusiveStartShardId|object|false|none|none|
|MaxResults|object|false|none|none|
|StreamCreationTimestamp|object|false|none|none|
|ShardFilter|object|false|none|none|
|StreamARN|object|false|none|none|

<h2 id="tocS_ExpiredNextTokenException">ExpiredNextTokenException</h2>
<!-- backwards compatibility -->
<a id="schemaexpirednexttokenexception"></a>
<a id="schema_ExpiredNextTokenException"></a>
<a id="tocSexpirednexttokenexception"></a>
<a id="tocsexpirednexttokenexception"></a>

```json
null
```

<h2 id="tocS_ListStreamConsumersOutput">ListStreamConsumersOutput</h2>
<!-- backwards compatibility -->
<a id="schemaliststreamconsumersoutput"></a>
<a id="schema_ListStreamConsumersOutput"></a>
<a id="tocSliststreamconsumersoutput"></a>
<a id="tocsliststreamconsumersoutput"></a>

```json
{
  "Consumers": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Consumers|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListStreamConsumersInput">ListStreamConsumersInput</h2>
<!-- backwards compatibility -->
<a id="schemaliststreamconsumersinput"></a>
<a id="schema_ListStreamConsumersInput"></a>
<a id="tocSliststreamconsumersinput"></a>
<a id="tocsliststreamconsumersinput"></a>

```json
{
  "StreamARN": {},
  "NextToken": {},
  "MaxResults": {},
  "StreamCreationTimestamp": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamARN|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|StreamCreationTimestamp|object|false|none|none|

<h2 id="tocS_ListStreamsOutput">ListStreamsOutput</h2>
<!-- backwards compatibility -->
<a id="schemaliststreamsoutput"></a>
<a id="schema_ListStreamsOutput"></a>
<a id="tocSliststreamsoutput"></a>
<a id="tocsliststreamsoutput"></a>

```json
{
  "StreamNames": {},
  "HasMoreStreams": {},
  "NextToken": {},
  "StreamSummaries": {}
}
```

Represents the output for <code>ListStreams</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamNames|object|true|none|none|
|HasMoreStreams|object|true|none|none|
|NextToken|object|false|none|none|
|StreamSummaries|object|false|none|none|

<h2 id="tocS_ListStreamsInput">ListStreamsInput</h2>
<!-- backwards compatibility -->
<a id="schemaliststreamsinput"></a>
<a id="schema_ListStreamsInput"></a>
<a id="tocSliststreamsinput"></a>
<a id="tocsliststreamsinput"></a>

```json
{
  "Limit": {},
  "ExclusiveStartStreamName": {},
  "NextToken": {}
}
```

Represents the input for <code>ListStreams</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Limit|object|false|none|none|
|ExclusiveStartStreamName|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTagsForStreamOutput">ListTagsForStreamOutput</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforstreamoutput"></a>
<a id="schema_ListTagsForStreamOutput"></a>
<a id="tocSlisttagsforstreamoutput"></a>
<a id="tocslisttagsforstreamoutput"></a>

```json
{
  "Tags": {},
  "HasMoreTags": {}
}
```

Represents the output for <code>ListTagsForStream</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|true|none|none|
|HasMoreTags|object|true|none|none|

<h2 id="tocS_ListTagsForStreamInput">ListTagsForStreamInput</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforstreaminput"></a>
<a id="schema_ListTagsForStreamInput"></a>
<a id="tocSlisttagsforstreaminput"></a>
<a id="tocslisttagsforstreaminput"></a>

```json
{
  "StreamName": {},
  "ExclusiveStartTagKey": {},
  "Limit": {},
  "StreamARN": {}
}
```

Represents the input for <code>ListTagsForStream</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|false|none|none|
|ExclusiveStartTagKey|object|false|none|none|
|Limit|object|false|none|none|
|StreamARN|object|false|none|none|

<h2 id="tocS_MergeShardsInput">MergeShardsInput</h2>
<!-- backwards compatibility -->
<a id="schemamergeshardsinput"></a>
<a id="schema_MergeShardsInput"></a>
<a id="tocSmergeshardsinput"></a>
<a id="tocsmergeshardsinput"></a>

```json
{
  "StreamName": {},
  "ShardToMerge": {},
  "AdjacentShardToMerge": {},
  "StreamARN": {}
}
```

Represents the input for <code>MergeShards</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|false|none|none|
|ShardToMerge|object|true|none|none|
|AdjacentShardToMerge|object|true|none|none|
|StreamARN|object|false|none|none|

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

```json
null
```

<h2 id="tocS_PutRecordOutput">PutRecordOutput</h2>
<!-- backwards compatibility -->
<a id="schemaputrecordoutput"></a>
<a id="schema_PutRecordOutput"></a>
<a id="tocSputrecordoutput"></a>
<a id="tocsputrecordoutput"></a>

```json
{
  "ShardId": {},
  "SequenceNumber": {},
  "EncryptionType": {}
}
```

Represents the output for <code>PutRecord</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ShardId|object|true|none|none|
|SequenceNumber|object|true|none|none|
|EncryptionType|object|false|none|none|

<h2 id="tocS_PutRecordInput">PutRecordInput</h2>
<!-- backwards compatibility -->
<a id="schemaputrecordinput"></a>
<a id="schema_PutRecordInput"></a>
<a id="tocSputrecordinput"></a>
<a id="tocsputrecordinput"></a>

```json
{
  "StreamName": {},
  "Data": {},
  "PartitionKey": {},
  "ExplicitHashKey": {},
  "SequenceNumberForOrdering": {},
  "StreamARN": {}
}
```

Represents the input for <code>PutRecord</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|false|none|none|
|Data|object|true|none|none|
|PartitionKey|object|true|none|none|
|ExplicitHashKey|object|false|none|none|
|SequenceNumberForOrdering|object|false|none|none|
|StreamARN|object|false|none|none|

<h2 id="tocS_PutRecordsOutput">PutRecordsOutput</h2>
<!-- backwards compatibility -->
<a id="schemaputrecordsoutput"></a>
<a id="schema_PutRecordsOutput"></a>
<a id="tocSputrecordsoutput"></a>
<a id="tocsputrecordsoutput"></a>

```json
{
  "FailedRecordCount": {},
  "Records": {},
  "EncryptionType": {}
}
```

 <code>PutRecords</code> results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailedRecordCount|object|false|none|none|
|Records|object|true|none|none|
|EncryptionType|object|false|none|none|

<h2 id="tocS_PutRecordsInput">PutRecordsInput</h2>
<!-- backwards compatibility -->
<a id="schemaputrecordsinput"></a>
<a id="schema_PutRecordsInput"></a>
<a id="tocSputrecordsinput"></a>
<a id="tocsputrecordsinput"></a>

```json
{
  "Records": {},
  "StreamName": {},
  "StreamARN": {}
}
```

A <code>PutRecords</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Records|object|true|none|none|
|StreamName|object|false|none|none|
|StreamARN|object|false|none|none|

<h2 id="tocS_RegisterStreamConsumerOutput">RegisterStreamConsumerOutput</h2>
<!-- backwards compatibility -->
<a id="schemaregisterstreamconsumeroutput"></a>
<a id="schema_RegisterStreamConsumerOutput"></a>
<a id="tocSregisterstreamconsumeroutput"></a>
<a id="tocsregisterstreamconsumeroutput"></a>

```json
{
  "Consumer": {
    "ConsumerName": {},
    "ConsumerARN": {},
    "ConsumerStatus": {},
    "ConsumerCreationTimestamp": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Consumer|object|true|none|none|

<h2 id="tocS_RegisterStreamConsumerInput">RegisterStreamConsumerInput</h2>
<!-- backwards compatibility -->
<a id="schemaregisterstreamconsumerinput"></a>
<a id="schema_RegisterStreamConsumerInput"></a>
<a id="tocSregisterstreamconsumerinput"></a>
<a id="tocsregisterstreamconsumerinput"></a>

```json
{
  "StreamARN": {},
  "ConsumerName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamARN|object|true|none|none|
|ConsumerName|object|true|none|none|

<h2 id="tocS_RemoveTagsFromStreamInput">RemoveTagsFromStreamInput</h2>
<!-- backwards compatibility -->
<a id="schemaremovetagsfromstreaminput"></a>
<a id="schema_RemoveTagsFromStreamInput"></a>
<a id="tocSremovetagsfromstreaminput"></a>
<a id="tocsremovetagsfromstreaminput"></a>

```json
{
  "StreamName": {},
  "TagKeys": {},
  "StreamARN": {}
}
```

Represents the input for <code>RemoveTagsFromStream</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|false|none|none|
|TagKeys|object|true|none|none|
|StreamARN|object|false|none|none|

<h2 id="tocS_SplitShardInput">SplitShardInput</h2>
<!-- backwards compatibility -->
<a id="schemasplitshardinput"></a>
<a id="schema_SplitShardInput"></a>
<a id="tocSsplitshardinput"></a>
<a id="tocssplitshardinput"></a>

```json
{
  "StreamName": {},
  "ShardToSplit": {},
  "NewStartingHashKey": {},
  "StreamARN": {}
}
```

Represents the input for <code>SplitShard</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|false|none|none|
|ShardToSplit|object|true|none|none|
|NewStartingHashKey|object|true|none|none|
|StreamARN|object|false|none|none|

<h2 id="tocS_StartStreamEncryptionInput">StartStreamEncryptionInput</h2>
<!-- backwards compatibility -->
<a id="schemastartstreamencryptioninput"></a>
<a id="schema_StartStreamEncryptionInput"></a>
<a id="tocSstartstreamencryptioninput"></a>
<a id="tocsstartstreamencryptioninput"></a>

```json
{
  "StreamName": {},
  "EncryptionType": {},
  "KeyId": {},
  "StreamARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|false|none|none|
|EncryptionType|object|true|none|none|
|KeyId|object|true|none|none|
|StreamARN|object|false|none|none|

<h2 id="tocS_StopStreamEncryptionInput">StopStreamEncryptionInput</h2>
<!-- backwards compatibility -->
<a id="schemastopstreamencryptioninput"></a>
<a id="schema_StopStreamEncryptionInput"></a>
<a id="tocSstopstreamencryptioninput"></a>
<a id="tocsstopstreamencryptioninput"></a>

```json
{
  "StreamName": {},
  "EncryptionType": {},
  "KeyId": {},
  "StreamARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|false|none|none|
|EncryptionType|object|true|none|none|
|KeyId|object|true|none|none|
|StreamARN|object|false|none|none|

<h2 id="tocS_UpdateShardCountOutput">UpdateShardCountOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateshardcountoutput"></a>
<a id="schema_UpdateShardCountOutput"></a>
<a id="tocSupdateshardcountoutput"></a>
<a id="tocsupdateshardcountoutput"></a>

```json
{
  "StreamName": {},
  "CurrentShardCount": {},
  "TargetShardCount": {},
  "StreamARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|false|none|none|
|CurrentShardCount|object|false|none|none|
|TargetShardCount|object|false|none|none|
|StreamARN|object|false|none|none|

<h2 id="tocS_UpdateShardCountInput">UpdateShardCountInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateshardcountinput"></a>
<a id="schema_UpdateShardCountInput"></a>
<a id="tocSupdateshardcountinput"></a>
<a id="tocsupdateshardcountinput"></a>

```json
{
  "StreamName": {},
  "TargetShardCount": {},
  "ScalingType": {},
  "StreamARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|false|none|none|
|TargetShardCount|object|true|none|none|
|ScalingType|object|true|none|none|
|StreamARN|object|false|none|none|

<h2 id="tocS_UpdateStreamModeInput">UpdateStreamModeInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestreammodeinput"></a>
<a id="schema_UpdateStreamModeInput"></a>
<a id="tocSupdatestreammodeinput"></a>
<a id="tocsupdatestreammodeinput"></a>

```json
{
  "StreamARN": {},
  "StreamModeDetails": {
    "StreamMode": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamARN|object|true|none|none|
|StreamModeDetails|object|true|none|none|

<h2 id="tocS_StreamName">StreamName</h2>
<!-- backwards compatibility -->
<a id="schemastreamname"></a>
<a id="schema_StreamName"></a>
<a id="tocSstreamname"></a>
<a id="tocsstreamname"></a>

```json
"string"
```

<h2 id="tocS_TagMap">TagMap</h2>
<!-- backwards compatibility -->
<a id="schematagmap"></a>
<a id="schema_TagMap"></a>
<a id="tocStagmap"></a>
<a id="tocstagmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[TagValue](#schematagvalue)|false|none|none|

<h2 id="tocS_StreamARN">StreamARN</h2>
<!-- backwards compatibility -->
<a id="schemastreamarn"></a>
<a id="schema_StreamARN"></a>
<a id="tocSstreamarn"></a>
<a id="tocsstreamarn"></a>

```json
"string"
```

<h2 id="tocS_BooleanObject">BooleanObject</h2>
<!-- backwards compatibility -->
<a id="schemabooleanobject"></a>
<a id="schema_BooleanObject"></a>
<a id="tocSbooleanobject"></a>
<a id="tocsbooleanobject"></a>

```json
true
```

<h2 id="tocS_ShardId">ShardId</h2>
<!-- backwards compatibility -->
<a id="schemashardid"></a>
<a id="schema_ShardId"></a>
<a id="tocSshardid"></a>
<a id="tocsshardid"></a>

```json
"string"
```

<h2 id="tocS_ShardIdList">ShardIdList</h2>
<!-- backwards compatibility -->
<a id="schemashardidlist"></a>
<a id="schema_ShardIdList"></a>
<a id="tocSshardidlist"></a>
<a id="tocsshardidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_HashKeyRange">HashKeyRange</h2>
<!-- backwards compatibility -->
<a id="schemahashkeyrange"></a>
<a id="schema_HashKeyRange"></a>
<a id="tocShashkeyrange"></a>
<a id="tocshashkeyrange"></a>

```json
{
  "StartingHashKey": {},
  "EndingHashKey": {}
}
```

The range of possible hash key values for the shard, which is a set of ordered contiguous positive integers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartingHashKey|object|true|none|none|
|EndingHashKey|object|true|none|none|

<h2 id="tocS_ChildShard">ChildShard</h2>
<!-- backwards compatibility -->
<a id="schemachildshard"></a>
<a id="schema_ChildShard"></a>
<a id="tocSchildshard"></a>
<a id="tocschildshard"></a>

```json
{
  "ShardId": {},
  "ParentShards": {},
  "HashKeyRange": {
    "StartingHashKey": {},
    "EndingHashKey": {}
  }
}
```

Output parameter of the GetRecords API. The existing child shard of the current shard.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ShardId|object|true|none|none|
|ParentShards|object|true|none|none|
|HashKeyRange|[HashKeyRange](#schemahashkeyrange)|true|none|The range of possible hash key values for the shard, which is a set of ordered contiguous positive integers.|

<h2 id="tocS_ChildShardList">ChildShardList</h2>
<!-- backwards compatibility -->
<a id="schemachildshardlist"></a>
<a id="schema_ChildShardList"></a>
<a id="tocSchildshardlist"></a>
<a id="tocschildshardlist"></a>

```json
[
  {
    "ShardId": {},
    "ParentShards": {},
    "HashKeyRange": {
      "StartingHashKey": {},
      "EndingHashKey": {}
    }
  }
]
```

<h2 id="tocS_ConsumerName">ConsumerName</h2>
<!-- backwards compatibility -->
<a id="schemaconsumername"></a>
<a id="schema_ConsumerName"></a>
<a id="tocSconsumername"></a>
<a id="tocsconsumername"></a>

```json
"string"
```

<h2 id="tocS_ConsumerARN">ConsumerARN</h2>
<!-- backwards compatibility -->
<a id="schemaconsumerarn"></a>
<a id="schema_ConsumerARN"></a>
<a id="tocSconsumerarn"></a>
<a id="tocsconsumerarn"></a>

```json
"string"
```

<h2 id="tocS_ConsumerStatus">ConsumerStatus</h2>
<!-- backwards compatibility -->
<a id="schemaconsumerstatus"></a>
<a id="schema_ConsumerStatus"></a>
<a id="tocSconsumerstatus"></a>
<a id="tocsconsumerstatus"></a>

```json
"CREATING"
```

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_Consumer">Consumer</h2>
<!-- backwards compatibility -->
<a id="schemaconsumer"></a>
<a id="schema_Consumer"></a>
<a id="tocSconsumer"></a>
<a id="tocsconsumer"></a>

```json
{
  "ConsumerName": {},
  "ConsumerARN": {},
  "ConsumerStatus": {},
  "ConsumerCreationTimestamp": {}
}
```

An object that represents the details of the consumer you registered. This type of object is returned by <a>RegisterStreamConsumer</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConsumerName|object|true|none|none|
|ConsumerARN|object|true|none|none|
|ConsumerStatus|object|true|none|none|
|ConsumerCreationTimestamp|object|true|none|none|

<h2 id="tocS_ConsumerCountObject">ConsumerCountObject</h2>
<!-- backwards compatibility -->
<a id="schemaconsumercountobject"></a>
<a id="schema_ConsumerCountObject"></a>
<a id="tocSconsumercountobject"></a>
<a id="tocsconsumercountobject"></a>

```json
0
```

<h2 id="tocS_ConsumerDescription">ConsumerDescription</h2>
<!-- backwards compatibility -->
<a id="schemaconsumerdescription"></a>
<a id="schema_ConsumerDescription"></a>
<a id="tocSconsumerdescription"></a>
<a id="tocsconsumerdescription"></a>

```json
{
  "ConsumerName": {},
  "ConsumerARN": {},
  "ConsumerStatus": {},
  "ConsumerCreationTimestamp": {},
  "StreamARN": {}
}
```

An object that represents the details of a registered consumer. This type of object is returned by <a>DescribeStreamConsumer</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConsumerName|object|true|none|none|
|ConsumerARN|object|true|none|none|
|ConsumerStatus|object|true|none|none|
|ConsumerCreationTimestamp|object|true|none|none|
|StreamARN|object|true|none|none|

<h2 id="tocS_ConsumerList">ConsumerList</h2>
<!-- backwards compatibility -->
<a id="schemaconsumerlist"></a>
<a id="schema_ConsumerList"></a>
<a id="tocSconsumerlist"></a>
<a id="tocsconsumerlist"></a>

```json
[
  {
    "ConsumerName": {},
    "ConsumerARN": {},
    "ConsumerStatus": {},
    "ConsumerCreationTimestamp": {}
  }
]
```

<h2 id="tocS_PositiveIntegerObject">PositiveIntegerObject</h2>
<!-- backwards compatibility -->
<a id="schemapositiveintegerobject"></a>
<a id="schema_PositiveIntegerObject"></a>
<a id="tocSpositiveintegerobject"></a>
<a id="tocspositiveintegerobject"></a>

```json
1
```

<h2 id="tocS_StreamModeDetails">StreamModeDetails</h2>
<!-- backwards compatibility -->
<a id="schemastreammodedetails"></a>
<a id="schema_StreamModeDetails"></a>
<a id="tocSstreammodedetails"></a>
<a id="tocsstreammodedetails"></a>

```json
{
  "StreamMode": {}
}
```

 Specifies the capacity mode to which you want to set your data stream. Currently, in Kinesis Data Streams, you can choose between an <b>on-demand</b> capacity mode and a <b>provisioned</b> capacity mode for your data streams.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamMode|object|true|none|none|

<h2 id="tocS_Data">Data</h2>
<!-- backwards compatibility -->
<a id="schemadata"></a>
<a id="schema_Data"></a>
<a id="tocSdata"></a>
<a id="tocsdata"></a>

```json
"string"
```

<h2 id="tocS_RetentionPeriodHours">RetentionPeriodHours</h2>
<!-- backwards compatibility -->
<a id="schemaretentionperiodhours"></a>
<a id="schema_RetentionPeriodHours"></a>
<a id="tocSretentionperiodhours"></a>
<a id="tocsretentionperiodhours"></a>

```json
0
```

<h2 id="tocS_ShardCountObject">ShardCountObject</h2>
<!-- backwards compatibility -->
<a id="schemashardcountobject"></a>
<a id="schema_ShardCountObject"></a>
<a id="tocSshardcountobject"></a>
<a id="tocsshardcountobject"></a>

```json
0
```

<h2 id="tocS_OnDemandStreamCountObject">OnDemandStreamCountObject</h2>
<!-- backwards compatibility -->
<a id="schemaondemandstreamcountobject"></a>
<a id="schema_OnDemandStreamCountObject"></a>
<a id="tocSondemandstreamcountobject"></a>
<a id="tocsondemandstreamcountobject"></a>

```json
0
```

<h2 id="tocS_OnDemandStreamCountLimitObject">OnDemandStreamCountLimitObject</h2>
<!-- backwards compatibility -->
<a id="schemaondemandstreamcountlimitobject"></a>
<a id="schema_OnDemandStreamCountLimitObject"></a>
<a id="tocSondemandstreamcountlimitobject"></a>
<a id="tocsondemandstreamcountlimitobject"></a>

```json
0
```

<h2 id="tocS_DescribeStreamInputLimit">DescribeStreamInputLimit</h2>
<!-- backwards compatibility -->
<a id="schemadescribestreaminputlimit"></a>
<a id="schema_DescribeStreamInputLimit"></a>
<a id="tocSdescribestreaminputlimit"></a>
<a id="tocsdescribestreaminputlimit"></a>

```json
1
```

<h2 id="tocS_StreamDescription">StreamDescription</h2>
<!-- backwards compatibility -->
<a id="schemastreamdescription"></a>
<a id="schema_StreamDescription"></a>
<a id="tocSstreamdescription"></a>
<a id="tocsstreamdescription"></a>

```json
{
  "StreamName": {},
  "StreamARN": {},
  "StreamStatus": {},
  "StreamModeDetails": {
    "StreamMode": {}
  },
  "Shards": {},
  "HasMoreShards": {},
  "RetentionPeriodHours": {},
  "StreamCreationTimestamp": {},
  "EnhancedMonitoring": {},
  "EncryptionType": {},
  "KeyId": {}
}
```

Represents the output for <a>DescribeStream</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|true|none|none|
|StreamARN|object|true|none|none|
|StreamStatus|object|true|none|none|
|StreamModeDetails|object|false|none|none|
|Shards|object|true|none|none|
|HasMoreShards|object|true|none|none|
|RetentionPeriodHours|object|true|none|none|
|StreamCreationTimestamp|object|true|none|none|
|EnhancedMonitoring|object|true|none|none|
|EncryptionType|object|false|none|none|
|KeyId|object|false|none|none|

<h2 id="tocS_StreamDescriptionSummary">StreamDescriptionSummary</h2>
<!-- backwards compatibility -->
<a id="schemastreamdescriptionsummary"></a>
<a id="schema_StreamDescriptionSummary"></a>
<a id="tocSstreamdescriptionsummary"></a>
<a id="tocsstreamdescriptionsummary"></a>

```json
{
  "StreamName": {},
  "StreamARN": {},
  "StreamStatus": {},
  "StreamModeDetails": {
    "StreamMode": {}
  },
  "RetentionPeriodHours": {},
  "StreamCreationTimestamp": {},
  "EnhancedMonitoring": {},
  "EncryptionType": {},
  "KeyId": {},
  "OpenShardCount": {},
  "ConsumerCount": {}
}
```

Represents the output for <a>DescribeStreamSummary</a>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|true|none|none|
|StreamARN|object|true|none|none|
|StreamStatus|object|true|none|none|
|StreamModeDetails|object|false|none|none|
|RetentionPeriodHours|object|true|none|none|
|StreamCreationTimestamp|object|true|none|none|
|EnhancedMonitoring|object|true|none|none|
|EncryptionType|object|false|none|none|
|KeyId|object|false|none|none|
|OpenShardCount|object|true|none|none|
|ConsumerCount|object|false|none|none|

<h2 id="tocS_MetricsNameList">MetricsNameList</h2>
<!-- backwards compatibility -->
<a id="schemametricsnamelist"></a>
<a id="schema_MetricsNameList"></a>
<a id="tocSmetricsnamelist"></a>
<a id="tocsmetricsnamelist"></a>

```json
[
  "IncomingBytes"
]
```

<h2 id="tocS_EncryptionType">EncryptionType</h2>
<!-- backwards compatibility -->
<a id="schemaencryptiontype"></a>
<a id="schema_EncryptionType"></a>
<a id="tocSencryptiontype"></a>
<a id="tocsencryptiontype"></a>

```json
"NONE"
```

<h2 id="tocS_EnhancedMetrics">EnhancedMetrics</h2>
<!-- backwards compatibility -->
<a id="schemaenhancedmetrics"></a>
<a id="schema_EnhancedMetrics"></a>
<a id="tocSenhancedmetrics"></a>
<a id="tocsenhancedmetrics"></a>

```json
{
  "ShardLevelMetrics": {}
}
```

Represents enhanced metrics types.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ShardLevelMetrics|object|false|none|none|

<h2 id="tocS_EnhancedMonitoringList">EnhancedMonitoringList</h2>
<!-- backwards compatibility -->
<a id="schemaenhancedmonitoringlist"></a>
<a id="schema_EnhancedMonitoringList"></a>
<a id="tocSenhancedmonitoringlist"></a>
<a id="tocsenhancedmonitoringlist"></a>

```json
[
  {
    "ShardLevelMetrics": {}
  }
]
```

<h2 id="tocS_ErrorCode">ErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaerrorcode"></a>
<a id="schema_ErrorCode"></a>
<a id="tocSerrorcode"></a>
<a id="tocserrorcode"></a>

```json
"string"
```

<h2 id="tocS_ErrorMessage">ErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemaerrormessage"></a>
<a id="schema_ErrorMessage"></a>
<a id="tocSerrormessage"></a>
<a id="tocserrormessage"></a>

```json
"string"
```

<h2 id="tocS_ShardIterator">ShardIterator</h2>
<!-- backwards compatibility -->
<a id="schemasharditerator"></a>
<a id="schema_ShardIterator"></a>
<a id="tocSsharditerator"></a>
<a id="tocssharditerator"></a>

```json
"string"
```

<h2 id="tocS_GetRecordsInputLimit">GetRecordsInputLimit</h2>
<!-- backwards compatibility -->
<a id="schemagetrecordsinputlimit"></a>
<a id="schema_GetRecordsInputLimit"></a>
<a id="tocSgetrecordsinputlimit"></a>
<a id="tocsgetrecordsinputlimit"></a>

```json
1
```

<h2 id="tocS_RecordList">RecordList</h2>
<!-- backwards compatibility -->
<a id="schemarecordlist"></a>
<a id="schema_RecordList"></a>
<a id="tocSrecordlist"></a>
<a id="tocsrecordlist"></a>

```json
[
  {
    "SequenceNumber": {},
    "ApproximateArrivalTimestamp": {},
    "Data": {},
    "PartitionKey": {},
    "EncryptionType": {}
  }
]
```

<h2 id="tocS_MillisBehindLatest">MillisBehindLatest</h2>
<!-- backwards compatibility -->
<a id="schemamillisbehindlatest"></a>
<a id="schema_MillisBehindLatest"></a>
<a id="tocSmillisbehindlatest"></a>
<a id="tocsmillisbehindlatest"></a>

```json
0
```

<h2 id="tocS_ShardIteratorType">ShardIteratorType</h2>
<!-- backwards compatibility -->
<a id="schemasharditeratortype"></a>
<a id="schema_ShardIteratorType"></a>
<a id="tocSsharditeratortype"></a>
<a id="tocssharditeratortype"></a>

```json
"AT_SEQUENCE_NUMBER"
```

<h2 id="tocS_SequenceNumber">SequenceNumber</h2>
<!-- backwards compatibility -->
<a id="schemasequencenumber"></a>
<a id="schema_SequenceNumber"></a>
<a id="tocSsequencenumber"></a>
<a id="tocssequencenumber"></a>

```json
"string"
```

<h2 id="tocS_HashKey">HashKey</h2>
<!-- backwards compatibility -->
<a id="schemahashkey"></a>
<a id="schema_HashKey"></a>
<a id="tocShashkey"></a>
<a id="tocshashkey"></a>

```json
"string"
```

<h2 id="tocS_KeyId">KeyId</h2>
<!-- backwards compatibility -->
<a id="schemakeyid"></a>
<a id="schema_KeyId"></a>
<a id="tocSkeyid"></a>
<a id="tocskeyid"></a>

```json
"string"
```

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

```json
"string"
```

<h2 id="tocS_ListShardsInputLimit">ListShardsInputLimit</h2>
<!-- backwards compatibility -->
<a id="schemalistshardsinputlimit"></a>
<a id="schema_ListShardsInputLimit"></a>
<a id="tocSlistshardsinputlimit"></a>
<a id="tocslistshardsinputlimit"></a>

```json
1
```

<h2 id="tocS_ShardFilter">ShardFilter</h2>
<!-- backwards compatibility -->
<a id="schemashardfilter"></a>
<a id="schema_ShardFilter"></a>
<a id="tocSshardfilter"></a>
<a id="tocsshardfilter"></a>

```json
{
  "Type": {},
  "ShardId": {},
  "Timestamp": {}
}
```

The request parameter used to filter out the response of the <code>ListShards</code> API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|true|none|none|
|ShardId|object|false|none|none|
|Timestamp|object|false|none|none|

<h2 id="tocS_ShardList">ShardList</h2>
<!-- backwards compatibility -->
<a id="schemashardlist"></a>
<a id="schema_ShardList"></a>
<a id="tocSshardlist"></a>
<a id="tocsshardlist"></a>

```json
[
  {
    "ShardId": {},
    "ParentShardId": {},
    "AdjacentParentShardId": {},
    "HashKeyRange": {
      "StartingHashKey": {},
      "EndingHashKey": {}
    },
    "SequenceNumberRange": {
      "StartingSequenceNumber": {},
      "EndingSequenceNumber": {}
    }
  }
]
```

<h2 id="tocS_ListStreamConsumersInputLimit">ListStreamConsumersInputLimit</h2>
<!-- backwards compatibility -->
<a id="schemaliststreamconsumersinputlimit"></a>
<a id="schema_ListStreamConsumersInputLimit"></a>
<a id="tocSliststreamconsumersinputlimit"></a>
<a id="tocsliststreamconsumersinputlimit"></a>

```json
1
```

<h2 id="tocS_ListStreamsInputLimit">ListStreamsInputLimit</h2>
<!-- backwards compatibility -->
<a id="schemaliststreamsinputlimit"></a>
<a id="schema_ListStreamsInputLimit"></a>
<a id="tocSliststreamsinputlimit"></a>
<a id="tocsliststreamsinputlimit"></a>

```json
1
```

<h2 id="tocS_StreamNameList">StreamNameList</h2>
<!-- backwards compatibility -->
<a id="schemastreamnamelist"></a>
<a id="schema_StreamNameList"></a>
<a id="tocSstreamnamelist"></a>
<a id="tocsstreamnamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_StreamSummaryList">StreamSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemastreamsummarylist"></a>
<a id="schema_StreamSummaryList"></a>
<a id="tocSstreamsummarylist"></a>
<a id="tocsstreamsummarylist"></a>

```json
[
  {
    "StreamName": {},
    "StreamARN": {},
    "StreamStatus": {},
    "StreamModeDetails": {
      "StreamMode": {}
    },
    "StreamCreationTimestamp": {}
  }
]
```

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
```

<h2 id="tocS_ListTagsForStreamInputLimit">ListTagsForStreamInputLimit</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforstreaminputlimit"></a>
<a id="schema_ListTagsForStreamInputLimit"></a>
<a id="tocSlisttagsforstreaminputlimit"></a>
<a id="tocslisttagsforstreaminputlimit"></a>

```json
1
```

<h2 id="tocS_TagList">TagList</h2>
<!-- backwards compatibility -->
<a id="schemataglist"></a>
<a id="schema_TagList"></a>
<a id="tocStaglist"></a>
<a id="tocstaglist"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_MetricsName">MetricsName</h2>
<!-- backwards compatibility -->
<a id="schemametricsname"></a>
<a id="schema_MetricsName"></a>
<a id="tocSmetricsname"></a>
<a id="tocsmetricsname"></a>

```json
"IncomingBytes"
```

<h2 id="tocS_PartitionKey">PartitionKey</h2>
<!-- backwards compatibility -->
<a id="schemapartitionkey"></a>
<a id="schema_PartitionKey"></a>
<a id="tocSpartitionkey"></a>
<a id="tocspartitionkey"></a>

```json
"string"
```

<h2 id="tocS_PutRecordsRequestEntryList">PutRecordsRequestEntryList</h2>
<!-- backwards compatibility -->
<a id="schemaputrecordsrequestentrylist"></a>
<a id="schema_PutRecordsRequestEntryList"></a>
<a id="tocSputrecordsrequestentrylist"></a>
<a id="tocsputrecordsrequestentrylist"></a>

```json
[
  {
    "Data": {},
    "ExplicitHashKey": {},
    "PartitionKey": {}
  }
]
```

<h2 id="tocS_PutRecordsResultEntryList">PutRecordsResultEntryList</h2>
<!-- backwards compatibility -->
<a id="schemaputrecordsresultentrylist"></a>
<a id="schema_PutRecordsResultEntryList"></a>
<a id="tocSputrecordsresultentrylist"></a>
<a id="tocsputrecordsresultentrylist"></a>

```json
[
  {
    "SequenceNumber": {},
    "ShardId": {},
    "ErrorCode": {},
    "ErrorMessage": {}
  }
]
```

<h2 id="tocS_PutRecordsRequestEntry">PutRecordsRequestEntry</h2>
<!-- backwards compatibility -->
<a id="schemaputrecordsrequestentry"></a>
<a id="schema_PutRecordsRequestEntry"></a>
<a id="tocSputrecordsrequestentry"></a>
<a id="tocsputrecordsrequestentry"></a>

```json
{
  "Data": {},
  "ExplicitHashKey": {},
  "PartitionKey": {}
}
```

Represents the output for <code>PutRecords</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|ExplicitHashKey|object|false|none|none|
|PartitionKey|object|true|none|none|

<h2 id="tocS_PutRecordsResultEntry">PutRecordsResultEntry</h2>
<!-- backwards compatibility -->
<a id="schemaputrecordsresultentry"></a>
<a id="schema_PutRecordsResultEntry"></a>
<a id="tocSputrecordsresultentry"></a>
<a id="tocsputrecordsresultentry"></a>

```json
{
  "SequenceNumber": {},
  "ShardId": {},
  "ErrorCode": {},
  "ErrorMessage": {}
}
```

Represents the result of an individual record from a <code>PutRecords</code> request. A record that is successfully added to a stream includes <code>SequenceNumber</code> and <code>ShardId</code> in the result. A record that fails to be added to the stream includes <code>ErrorCode</code> and <code>ErrorMessage</code> in the result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SequenceNumber|object|false|none|none|
|ShardId|object|false|none|none|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|

<h2 id="tocS_Record">Record</h2>
<!-- backwards compatibility -->
<a id="schemarecord"></a>
<a id="schema_Record"></a>
<a id="tocSrecord"></a>
<a id="tocsrecord"></a>

```json
{
  "SequenceNumber": {},
  "ApproximateArrivalTimestamp": {},
  "Data": {},
  "PartitionKey": {},
  "EncryptionType": {}
}
```

The unit of data of the Kinesis data stream, which is composed of a sequence number, a partition key, and a data blob.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SequenceNumber|object|true|none|none|
|ApproximateArrivalTimestamp|object|false|none|none|
|Data|object|true|none|none|
|PartitionKey|object|true|none|none|
|EncryptionType|object|false|none|none|

<h2 id="tocS_TagKeyList">TagKeyList</h2>
<!-- backwards compatibility -->
<a id="schematagkeylist"></a>
<a id="schema_TagKeyList"></a>
<a id="tocStagkeylist"></a>
<a id="tocstagkeylist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ScalingType">ScalingType</h2>
<!-- backwards compatibility -->
<a id="schemascalingtype"></a>
<a id="schema_ScalingType"></a>
<a id="tocSscalingtype"></a>
<a id="tocsscalingtype"></a>

```json
"UNIFORM_SCALING"
```

<h2 id="tocS_SequenceNumberRange">SequenceNumberRange</h2>
<!-- backwards compatibility -->
<a id="schemasequencenumberrange"></a>
<a id="schema_SequenceNumberRange"></a>
<a id="tocSsequencenumberrange"></a>
<a id="tocssequencenumberrange"></a>

```json
{
  "StartingSequenceNumber": {},
  "EndingSequenceNumber": {}
}
```

The range of possible sequence numbers for the shard.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartingSequenceNumber|object|true|none|none|
|EndingSequenceNumber|object|false|none|none|

<h2 id="tocS_Shard">Shard</h2>
<!-- backwards compatibility -->
<a id="schemashard"></a>
<a id="schema_Shard"></a>
<a id="tocSshard"></a>
<a id="tocsshard"></a>

```json
{
  "ShardId": {},
  "ParentShardId": {},
  "AdjacentParentShardId": {},
  "HashKeyRange": {
    "StartingHashKey": {},
    "EndingHashKey": {}
  },
  "SequenceNumberRange": {
    "StartingSequenceNumber": {},
    "EndingSequenceNumber": {}
  }
}
```

A uniquely identified group of data records in a Kinesis data stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ShardId|object|true|none|none|
|ParentShardId|object|false|none|none|
|AdjacentParentShardId|object|false|none|none|
|HashKeyRange|object|true|none|none|
|SequenceNumberRange|object|true|none|none|

<h2 id="tocS_ShardFilterType">ShardFilterType</h2>
<!-- backwards compatibility -->
<a id="schemashardfiltertype"></a>
<a id="schema_ShardFilterType"></a>
<a id="tocSshardfiltertype"></a>
<a id="tocsshardfiltertype"></a>

```json
"AFTER_SHARD_ID"
```

<h2 id="tocS_StreamStatus">StreamStatus</h2>
<!-- backwards compatibility -->
<a id="schemastreamstatus"></a>
<a id="schema_StreamStatus"></a>
<a id="tocSstreamstatus"></a>
<a id="tocsstreamstatus"></a>

```json
"CREATING"
```

<h2 id="tocS_StreamMode">StreamMode</h2>
<!-- backwards compatibility -->
<a id="schemastreammode"></a>
<a id="schema_StreamMode"></a>
<a id="tocSstreammode"></a>
<a id="tocsstreammode"></a>

```json
"PROVISIONED"
```

<h2 id="tocS_StreamSummary">StreamSummary</h2>
<!-- backwards compatibility -->
<a id="schemastreamsummary"></a>
<a id="schema_StreamSummary"></a>
<a id="tocSstreamsummary"></a>
<a id="tocsstreamsummary"></a>

```json
{
  "StreamName": {},
  "StreamARN": {},
  "StreamStatus": {},
  "StreamModeDetails": {
    "StreamMode": {}
  },
  "StreamCreationTimestamp": {}
}
```

The summary of a stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamName|object|true|none|none|
|StreamARN|object|true|none|none|
|StreamStatus|object|true|none|none|
|StreamModeDetails|[StreamModeDetails](#schemastreammodedetails)|false|none| Specifies the capacity mode to which you want to set your data stream. Currently, in Kinesis Data Streams, you can choose between an <b>on-demand</b> capacity mode and a <b>provisioned</b> capacity mode for your data streams. |
|StreamCreationTimestamp|object|false|none|none|

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "Key": {},
  "Value": {}
}
```

Metadata assigned to the stream, consisting of a key-value pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|false|none|none|
