<h1 id="amazon-dynamodb-streams">Amazon DynamoDB Streams v2012-08-10</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Amazon DynamoDB</fullname> <p>Amazon DynamoDB Streams provides API actions for accessing streams and processing stream records. To learn more about application development with Streams, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.html">Capturing Table Activity with DynamoDB Streams</a> in the Amazon DynamoDB Developer Guide.</p>

Base URLs:

* <a href="http://streams.dynamodb.us-east-1.amazonaws.com">http://streams.dynamodb.us-east-1.amazonaws.com</a> - The Amazon DynamoDB Streams multi-region endpoint

* <a href="https://streams.dynamodb.us-east-1.amazonaws.com">https://streams.dynamodb.us-east-1.amazonaws.com</a> - The Amazon DynamoDB Streams multi-region endpoint

* <a href="http://streams.dynamodb.cn-north-1.amazonaws.com.cn">http://streams.dynamodb.cn-north-1.amazonaws.com.cn</a> - The Amazon DynamoDB Streams endpoint for China (Beijing) and China (Ningxia)

* <a href="https://streams.dynamodb.cn-north-1.amazonaws.com.cn">https://streams.dynamodb.cn-north-1.amazonaws.com.cn</a> - The Amazon DynamoDB Streams endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/dynamodb/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-dynamodb-streams-default">Default</h1>

## DescribeStream

<a id="opIdDescribeStream"></a>

> Code samples

```bash
curl 'https://streams-dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDBStreams_20120810.DescribeStream' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDBStreams_20120810.DescribeStream' \
  -d '{
    "StreamArn": {},
    "Limit": {},
    "ExclusiveStartShardId": {}
  }'
```

`POST /#X-Amz-Target=DynamoDBStreams_20120810.DescribeStream`

<p>Returns information about a stream, including the current status of the stream, its Amazon Resource Name (ARN), the composition of its shards, and its corresponding DynamoDB table.</p> <note> <p>You can call <code>DescribeStream</code> at a maximum rate of 10 times per second.</p> </note> <p>Each shard in the stream has a <code>SequenceNumberRange</code> associated with it. If the <code>SequenceNumberRange</code> has a <code>StartingSequenceNumber</code> but no <code>EndingSequenceNumber</code>, then the shard is still open (able to receive more stream records). If both <code>StartingSequenceNumber</code> and <code>EndingSequenceNumber</code> are present, then that shard is closed and can no longer receive more data.</p>

> Body parameter

```json
{
  "StreamArn": {},
  "Limit": {},
  "ExclusiveStartShardId": {}
}
```

<h3 id="describestream-parameters">Parameters</h3>

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
|body|body|[DescribeStreamInput](#schemadescribestreaminput)|true|none|
|» StreamArn|body|object|true|none|
|» Limit|body|object|false|none|
|» ExclusiveStartShardId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDBStreams_20120810.DescribeStream|

> Example responses

> 200 Response

```json
{
  "StreamDescription": {
    "CreationRequestDateTime": "Wed May 20 13:51:10 PDT 2015",
    "KeySchema": [
      {
        "AttributeName": "ForumName",
        "KeyType": "HASH"
      },
      {
        "AttributeName": "Subject",
        "KeyType": "RANGE"
      }
    ],
    "Shards": [
      {
        "SequenceNumberRange": {
          "EndingSequenceNumber": "20500000000000000910398",
          "StartingSequenceNumber": "20500000000000000910398"
        },
        "ShardId": "shardId-00000001414562045508-2bac9cd2"
      },
      {
        "ParentShardId": "shardId-00000001414562045508-2bac9cd2",
        "SequenceNumberRange": {
          "EndingSequenceNumber": "820400000000000001192334",
          "StartingSequenceNumber": "820400000000000001192334"
        },
        "ShardId": "shardId-00000001414576573621-f55eea83"
      },
      {
        "ParentShardId": "shardId-00000001414576573621-f55eea83",
        "SequenceNumberRange": {
          "EndingSequenceNumber": "1683700000000000001135967",
          "StartingSequenceNumber": "1683700000000000001135967"
        },
        "ShardId": "shardId-00000001414592258131-674fd923"
      },
      {
        "ParentShardId": "shardId-00000001414592258131-674fd923",
        "SequenceNumberRange": {
          "StartingSequenceNumber": "2574600000000000000935255"
        },
        "ShardId": "shardId-00000001414608446368-3a1afbaf"
      }
    ],
    "StreamArn": "arn:aws:dynamodb:us-west-2:111122223333:table/Forum/stream/2015-05-20T20:51:10.252",
    "StreamLabel": "2015-05-20T20:51:10.252",
    "StreamStatus": "ENABLED",
    "StreamViewType": "NEW_AND_OLD_IMAGES",
    "TableName": "Forum"
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

<h3 id="describestream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeStreamOutput](#schemadescribestreamoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRecords

<a id="opIdGetRecords"></a>

> Code samples

```bash
curl 'https://streams-dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDBStreams_20120810.GetRecords' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDBStreams_20120810.GetRecords' \
  -d '{
    "ShardIterator": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=DynamoDBStreams_20120810.GetRecords`

<p>Retrieves the stream records from a given shard.</p> <p>Specify a shard iterator using the <code>ShardIterator</code> parameter. The shard iterator specifies the position in the shard from which you want to start reading stream records sequentially. If there are no stream records available in the portion of the shard that the iterator points to, <code>GetRecords</code> returns an empty list. Note that it might take multiple calls to get to a portion of the shard that contains stream records.</p> <note> <p> <code>GetRecords</code> can retrieve a maximum of 1 MB of data or 1000 stream records, whichever comes first.</p> </note>

> Body parameter

```json
{
  "ShardIterator": {},
  "Limit": {}
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

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDBStreams_20120810.GetRecords|

> Example responses

> 200 Response

```json
{
  "NextShardIterator": "arn:aws:dynamodb:us-west-2:111122223333:table/Forum/stream/2015-05-20T20:51:10.252|1|AAAAAAAAAAGQBYshYDEe ... <remaining characters omitted> ...",
  "Records": [
    {
      "awsRegion": "us-west-2",
      "dynamodb": {
        "ApproximateCreationDateTime": "1.46480646E9",
        "Keys": {
          "ForumName": {
            "S": "DynamoDB"
          },
          "Subject": {
            "S": "DynamoDB Thread 3"
          }
        },
        "SequenceNumber": "300000000000000499659",
        "SizeBytes": 41,
        "StreamViewType": "KEYS_ONLY"
      },
      "eventID": "e2fd9c34eff2d779b297b26f5fef4206",
      "eventName": "INSERT",
      "eventSource": "aws:dynamodb",
      "eventVersion": "1.0"
    },
    {
      "awsRegion": "us-west-2",
      "dynamodb": {
        "ApproximateCreationDateTime": "1.46480527E9",
        "Keys": {
          "ForumName": {
            "S": "DynamoDB"
          },
          "Subject": {
            "S": "DynamoDB Thread 1"
          }
        },
        "SequenceNumber": "400000000000000499660",
        "SizeBytes": 41,
        "StreamViewType": "KEYS_ONLY"
      },
      "eventID": "4b25bd0da9a181a155114127e4837252",
      "eventName": "MODIFY",
      "eventSource": "aws:dynamodb",
      "eventVersion": "1.0"
    },
    {
      "awsRegion": "us-west-2",
      "dynamodb": {
        "ApproximateCreationDateTime": "1.46480646E9",
        "Keys": {
          "ForumName": {
            "S": "DynamoDB"
          },
          "Subject": {
            "S": "DynamoDB Thread 2"
          }
        },
        "SequenceNumber": "500000000000000499661",
        "SizeBytes": 41,
        "StreamViewType": "KEYS_ONLY"
      },
      "eventID": "740280c73a3df7842edab3548a1b08ad",
      "eventName": "REMOVE",
      "eventSource": "aws:dynamodb",
      "eventVersion": "1.0"
    }
  ]
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

<h3 id="getrecords-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRecordsOutput](#schemagetrecordsoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|
|483|483|ExpiredIteratorException|[ExpiredIteratorException](#schemaexpirediteratorexception)|
|484|484|TrimmedDataAccessException|[TrimmedDataAccessException](#schematrimmeddataaccessexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetShardIterator

<a id="opIdGetShardIterator"></a>

> Code samples

```bash
curl 'https://streams-dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDBStreams_20120810.GetShardIterator' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDBStreams_20120810.GetShardIterator' \
  -d '{
    "StreamArn": {},
    "ShardId": {},
    "ShardIteratorType": {},
    "SequenceNumber": {}
  }'
```

`POST /#X-Amz-Target=DynamoDBStreams_20120810.GetShardIterator`

<p>Returns a shard iterator. A shard iterator provides information about how to retrieve the stream records from within a shard. Use the shard iterator in a subsequent <code>GetRecords</code> request to read the stream records from the shard.</p> <note> <p>A shard iterator expires 15 minutes after it is returned to the requester.</p> </note>

> Body parameter

```json
{
  "StreamArn": {},
  "ShardId": {},
  "ShardIteratorType": {},
  "SequenceNumber": {}
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
|» StreamArn|body|object|true|none|
|» ShardId|body|object|true|none|
|» ShardIteratorType|body|object|true|none|
|» SequenceNumber|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDBStreams_20120810.GetShardIterator|

> Example responses

> 200 Response

```json
{
  "ShardIterator": "arn:aws:dynamodb:us-west-2:111122223333:table/Forum/stream/2015-05-20T20:51:10.252|1|AAAAAAAAAAEvJp6D+zaQ...  <remaining characters omitted> ..."
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

<h3 id="getsharditerator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetShardIteratorOutput](#schemagetsharditeratoroutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|
|482|482|TrimmedDataAccessException|[TrimmedDataAccessException](#schematrimmeddataaccessexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListStreams

<a id="opIdListStreams"></a>

> Code samples

```bash
curl 'https://streams-dynamodb.us-east-1.amazonaws.com/#X-Amz-Target=DynamoDBStreams_20120810.ListStreams' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: DynamoDBStreams_20120810.ListStreams' \
  -d '{
    "TableName": {},
    "Limit": {},
    "ExclusiveStartStreamArn": {}
  }'
```

`POST /#X-Amz-Target=DynamoDBStreams_20120810.ListStreams`

<p>Returns an array of stream ARNs associated with the current account and endpoint. If the <code>TableName</code> parameter is present, then <code>ListStreams</code> will return only the streams ARNs for that table.</p> <note> <p>You can call <code>ListStreams</code> at a maximum rate of 5 times per second.</p> </note>

> Body parameter

```json
{
  "TableName": {},
  "Limit": {},
  "ExclusiveStartStreamArn": {}
}
```

<h3 id="liststreams-parameters">Parameters</h3>

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
|body|body|[ListStreamsInput](#schemaliststreamsinput)|true|none|
|» TableName|body|object|false|none|
|» Limit|body|object|false|none|
|» ExclusiveStartStreamArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|DynamoDBStreams_20120810.ListStreams|

> Example responses

> 200 Response

```json
{
  "Streams": [
    {
      "StreamArn": "arn:aws:dynamodb:us-wesst-2:111122223333:table/Forum/stream/2015-05-20T20:51:10.252",
      "StreamLabel": "2015-05-20T20:51:10.252",
      "TableName": "Forum"
    },
    {
      "StreamArn": "arn:aws:dynamodb:us-west-2:111122223333:table/Forum/stream/2015-05-20T20:50:02.714",
      "StreamLabel": "2015-05-20T20:50:02.714",
      "TableName": "Forum"
    },
    {
      "StreamArn": "arn:aws:dynamodb:us-west-2:111122223333:table/Forum/stream/2015-05-19T23:03:50.641",
      "StreamLabel": "2015-05-19T23:03:50.641",
      "TableName": "Forum"
    }
  ]
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

<h3 id="liststreams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListStreamsOutput](#schemaliststreamsoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_DescribeStreamOutput">DescribeStreamOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribestreamoutput"></a>
<a id="schema_DescribeStreamOutput"></a>
<a id="tocSdescribestreamoutput"></a>
<a id="tocsdescribestreamoutput"></a>

```json
{
  "StreamDescription": {
    "CreationRequestDateTime": "Wed May 20 13:51:10 PDT 2015",
    "KeySchema": [
      {
        "AttributeName": "ForumName",
        "KeyType": "HASH"
      },
      {
        "AttributeName": "Subject",
        "KeyType": "RANGE"
      }
    ],
    "Shards": [
      {
        "SequenceNumberRange": {
          "EndingSequenceNumber": "20500000000000000910398",
          "StartingSequenceNumber": "20500000000000000910398"
        },
        "ShardId": "shardId-00000001414562045508-2bac9cd2"
      },
      {
        "ParentShardId": "shardId-00000001414562045508-2bac9cd2",
        "SequenceNumberRange": {
          "EndingSequenceNumber": "820400000000000001192334",
          "StartingSequenceNumber": "820400000000000001192334"
        },
        "ShardId": "shardId-00000001414576573621-f55eea83"
      },
      {
        "ParentShardId": "shardId-00000001414576573621-f55eea83",
        "SequenceNumberRange": {
          "EndingSequenceNumber": "1683700000000000001135967",
          "StartingSequenceNumber": "1683700000000000001135967"
        },
        "ShardId": "shardId-00000001414592258131-674fd923"
      },
      {
        "ParentShardId": "shardId-00000001414592258131-674fd923",
        "SequenceNumberRange": {
          "StartingSequenceNumber": "2574600000000000000935255"
        },
        "ShardId": "shardId-00000001414608446368-3a1afbaf"
      }
    ],
    "StreamArn": "arn:aws:dynamodb:us-west-2:111122223333:table/Forum/stream/2015-05-20T20:51:10.252",
    "StreamLabel": "2015-05-20T20:51:10.252",
    "StreamStatus": "ENABLED",
    "StreamViewType": "NEW_AND_OLD_IMAGES",
    "TableName": "Forum"
  }
}
```

Represents the output of a <code>DescribeStream</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamDescription|object|false|none|none|

<h2 id="tocS_DescribeStreamInput">DescribeStreamInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribestreaminput"></a>
<a id="schema_DescribeStreamInput"></a>
<a id="tocSdescribestreaminput"></a>
<a id="tocsdescribestreaminput"></a>

```json
{
  "StreamArn": {},
  "Limit": {},
  "ExclusiveStartShardId": {}
}
```

Represents the input of a <code>DescribeStream</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamArn|object|true|none|none|
|Limit|object|false|none|none|
|ExclusiveStartShardId|object|false|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_InternalServerError">InternalServerError</h2>
<!-- backwards compatibility -->
<a id="schemainternalservererror"></a>
<a id="schema_InternalServerError"></a>
<a id="tocSinternalservererror"></a>
<a id="tocsinternalservererror"></a>

```json
null
```

<h2 id="tocS_GetRecordsOutput">GetRecordsOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetrecordsoutput"></a>
<a id="schema_GetRecordsOutput"></a>
<a id="tocSgetrecordsoutput"></a>
<a id="tocsgetrecordsoutput"></a>

```json
{
  "NextShardIterator": "arn:aws:dynamodb:us-west-2:111122223333:table/Forum/stream/2015-05-20T20:51:10.252|1|AAAAAAAAAAGQBYshYDEe ... <remaining characters omitted> ...",
  "Records": [
    {
      "awsRegion": "us-west-2",
      "dynamodb": {
        "ApproximateCreationDateTime": "1.46480646E9",
        "Keys": {
          "ForumName": {
            "S": "DynamoDB"
          },
          "Subject": {
            "S": "DynamoDB Thread 3"
          }
        },
        "SequenceNumber": "300000000000000499659",
        "SizeBytes": 41,
        "StreamViewType": "KEYS_ONLY"
      },
      "eventID": "e2fd9c34eff2d779b297b26f5fef4206",
      "eventName": "INSERT",
      "eventSource": "aws:dynamodb",
      "eventVersion": "1.0"
    },
    {
      "awsRegion": "us-west-2",
      "dynamodb": {
        "ApproximateCreationDateTime": "1.46480527E9",
        "Keys": {
          "ForumName": {
            "S": "DynamoDB"
          },
          "Subject": {
            "S": "DynamoDB Thread 1"
          }
        },
        "SequenceNumber": "400000000000000499660",
        "SizeBytes": 41,
        "StreamViewType": "KEYS_ONLY"
      },
      "eventID": "4b25bd0da9a181a155114127e4837252",
      "eventName": "MODIFY",
      "eventSource": "aws:dynamodb",
      "eventVersion": "1.0"
    },
    {
      "awsRegion": "us-west-2",
      "dynamodb": {
        "ApproximateCreationDateTime": "1.46480646E9",
        "Keys": {
          "ForumName": {
            "S": "DynamoDB"
          },
          "Subject": {
            "S": "DynamoDB Thread 2"
          }
        },
        "SequenceNumber": "500000000000000499661",
        "SizeBytes": 41,
        "StreamViewType": "KEYS_ONLY"
      },
      "eventID": "740280c73a3df7842edab3548a1b08ad",
      "eventName": "REMOVE",
      "eventSource": "aws:dynamodb",
      "eventVersion": "1.0"
    }
  ]
}
```

Represents the output of a <code>GetRecords</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Records|object|false|none|none|
|NextShardIterator|object|false|none|none|

<h2 id="tocS_GetRecordsInput">GetRecordsInput</h2>
<!-- backwards compatibility -->
<a id="schemagetrecordsinput"></a>
<a id="schema_GetRecordsInput"></a>
<a id="tocSgetrecordsinput"></a>
<a id="tocsgetrecordsinput"></a>

```json
{
  "ShardIterator": {},
  "Limit": {}
}
```

Represents the input of a <code>GetRecords</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ShardIterator|object|true|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

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

<h2 id="tocS_TrimmedDataAccessException">TrimmedDataAccessException</h2>
<!-- backwards compatibility -->
<a id="schematrimmeddataaccessexception"></a>
<a id="schema_TrimmedDataAccessException"></a>
<a id="tocStrimmeddataaccessexception"></a>
<a id="tocstrimmeddataaccessexception"></a>

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
  "ShardIterator": "arn:aws:dynamodb:us-west-2:111122223333:table/Forum/stream/2015-05-20T20:51:10.252|1|AAAAAAAAAAEvJp6D+zaQ...  <remaining characters omitted> ..."
}
```

Represents the output of a <code>GetShardIterator</code> operation.

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
  "StreamArn": {},
  "ShardId": {},
  "ShardIteratorType": {},
  "SequenceNumber": {}
}
```

Represents the input of a <code>GetShardIterator</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamArn|object|true|none|none|
|ShardId|object|true|none|none|
|ShardIteratorType|object|true|none|none|
|SequenceNumber|object|false|none|none|

<h2 id="tocS_ListStreamsOutput">ListStreamsOutput</h2>
<!-- backwards compatibility -->
<a id="schemaliststreamsoutput"></a>
<a id="schema_ListStreamsOutput"></a>
<a id="tocSliststreamsoutput"></a>
<a id="tocsliststreamsoutput"></a>

```json
{
  "Streams": [
    {
      "StreamArn": "arn:aws:dynamodb:us-wesst-2:111122223333:table/Forum/stream/2015-05-20T20:51:10.252",
      "StreamLabel": "2015-05-20T20:51:10.252",
      "TableName": "Forum"
    },
    {
      "StreamArn": "arn:aws:dynamodb:us-west-2:111122223333:table/Forum/stream/2015-05-20T20:50:02.714",
      "StreamLabel": "2015-05-20T20:50:02.714",
      "TableName": "Forum"
    },
    {
      "StreamArn": "arn:aws:dynamodb:us-west-2:111122223333:table/Forum/stream/2015-05-19T23:03:50.641",
      "StreamLabel": "2015-05-19T23:03:50.641",
      "TableName": "Forum"
    }
  ]
}
```

Represents the output of a <code>ListStreams</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Streams|object|false|none|none|
|LastEvaluatedStreamArn|object|false|none|none|

<h2 id="tocS_ListStreamsInput">ListStreamsInput</h2>
<!-- backwards compatibility -->
<a id="schemaliststreamsinput"></a>
<a id="schema_ListStreamsInput"></a>
<a id="tocSliststreamsinput"></a>
<a id="tocsliststreamsinput"></a>

```json
{
  "TableName": {},
  "Limit": {},
  "ExclusiveStartStreamArn": {}
}
```

Represents the input of a <code>ListStreams</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableName|object|false|none|none|
|Limit|object|false|none|none|
|ExclusiveStartStreamArn|object|false|none|none|

<h2 id="tocS_AttributeValue">AttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemaattributevalue"></a>
<a id="schema_AttributeValue"></a>
<a id="tocSattributevalue"></a>
<a id="tocsattributevalue"></a>

```json
{
  "S": {},
  "N": {},
  "B": {},
  "SS": {},
  "NS": {},
  "BS": {},
  "M": {
    "property1": {},
    "property2": {}
  },
  "L": {},
  "NULL": {},
  "BOOL": {}
}
```

<p>Represents the data for an attribute.</p> <p>Each attribute value is described as a name-value pair. The name is the data type, and the value is the data itself.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes">Data Types</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S|object|false|none|none|
|N|object|false|none|none|
|B|object|false|none|none|
|SS|object|false|none|none|
|NS|object|false|none|none|
|BS|object|false|none|none|
|M|object|false|none|none|
|L|object|false|none|none|
|NULL|object|false|none|none|
|BOOL|object|false|none|none|

<h2 id="tocS_AttributeMap">AttributeMap</h2>
<!-- backwards compatibility -->
<a id="schemaattributemap"></a>
<a id="schema_AttributeMap"></a>
<a id="tocSattributemap"></a>
<a id="tocsattributemap"></a>

```json
{
  "property1": {
    "S": {},
    "N": {},
    "B": {},
    "SS": {},
    "NS": {},
    "BS": {},
    "M": {},
    "L": {},
    "NULL": {},
    "BOOL": {}
  },
  "property2": {
    "S": {},
    "N": {},
    "B": {},
    "SS": {},
    "NS": {},
    "BS": {},
    "M": {},
    "L": {},
    "NULL": {},
    "BOOL": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[AttributeValue](#schemaattributevalue)|false|none|<p>Represents the data for an attribute.</p> <p>Each attribute value is described as a name-value pair. The name is the data type, and the value is the data itself.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes">Data Types</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>|

<h2 id="tocS_AttributeName">AttributeName</h2>
<!-- backwards compatibility -->
<a id="schemaattributename"></a>
<a id="schema_AttributeName"></a>
<a id="tocSattributename"></a>
<a id="tocsattributename"></a>

```json
"string"
```

<h2 id="tocS_StringAttributeValue">StringAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemastringattributevalue"></a>
<a id="schema_StringAttributeValue"></a>
<a id="tocSstringattributevalue"></a>
<a id="tocsstringattributevalue"></a>

```json
"string"
```

<h2 id="tocS_NumberAttributeValue">NumberAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemanumberattributevalue"></a>
<a id="schema_NumberAttributeValue"></a>
<a id="tocSnumberattributevalue"></a>
<a id="tocsnumberattributevalue"></a>

```json
"string"
```

<h2 id="tocS_BinaryAttributeValue">BinaryAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemabinaryattributevalue"></a>
<a id="schema_BinaryAttributeValue"></a>
<a id="tocSbinaryattributevalue"></a>
<a id="tocsbinaryattributevalue"></a>

```json
"string"
```

<h2 id="tocS_StringSetAttributeValue">StringSetAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemastringsetattributevalue"></a>
<a id="schema_StringSetAttributeValue"></a>
<a id="tocSstringsetattributevalue"></a>
<a id="tocsstringsetattributevalue"></a>

```json
[
  "string"
]
```

<h2 id="tocS_NumberSetAttributeValue">NumberSetAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemanumbersetattributevalue"></a>
<a id="schema_NumberSetAttributeValue"></a>
<a id="tocSnumbersetattributevalue"></a>
<a id="tocsnumbersetattributevalue"></a>

```json
[
  "string"
]
```

<h2 id="tocS_BinarySetAttributeValue">BinarySetAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemabinarysetattributevalue"></a>
<a id="schema_BinarySetAttributeValue"></a>
<a id="tocSbinarysetattributevalue"></a>
<a id="tocsbinarysetattributevalue"></a>

```json
[
  "string"
]
```

<h2 id="tocS_MapAttributeValue">MapAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemamapattributevalue"></a>
<a id="schema_MapAttributeValue"></a>
<a id="tocSmapattributevalue"></a>
<a id="tocsmapattributevalue"></a>

```json
{
  "property1": {
    "S": {},
    "N": {},
    "B": {},
    "SS": {},
    "NS": {},
    "BS": {},
    "M": {},
    "L": {},
    "NULL": {},
    "BOOL": {}
  },
  "property2": {
    "S": {},
    "N": {},
    "B": {},
    "SS": {},
    "NS": {},
    "BS": {},
    "M": {},
    "L": {},
    "NULL": {},
    "BOOL": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[AttributeValue](#schemaattributevalue)|false|none|<p>Represents the data for an attribute.</p> <p>Each attribute value is described as a name-value pair. The name is the data type, and the value is the data itself.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes">Data Types</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>|

<h2 id="tocS_ListAttributeValue">ListAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemalistattributevalue"></a>
<a id="schema_ListAttributeValue"></a>
<a id="tocSlistattributevalue"></a>
<a id="tocslistattributevalue"></a>

```json
[
  {
    "S": {},
    "N": {},
    "B": {},
    "SS": {},
    "NS": {},
    "BS": {},
    "M": {},
    "L": {},
    "NULL": {},
    "BOOL": {}
  }
]
```

<h2 id="tocS_NullAttributeValue">NullAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemanullattributevalue"></a>
<a id="schema_NullAttributeValue"></a>
<a id="tocSnullattributevalue"></a>
<a id="tocsnullattributevalue"></a>

```json
true
```

<h2 id="tocS_BooleanAttributeValue">BooleanAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemabooleanattributevalue"></a>
<a id="schema_BooleanAttributeValue"></a>
<a id="tocSbooleanattributevalue"></a>
<a id="tocsbooleanattributevalue"></a>

```json
true
```

<h2 id="tocS_Date">Date</h2>
<!-- backwards compatibility -->
<a id="schemadate"></a>
<a id="schema_Date"></a>
<a id="tocSdate"></a>
<a id="tocsdate"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_StreamArn">StreamArn</h2>
<!-- backwards compatibility -->
<a id="schemastreamarn"></a>
<a id="schema_StreamArn"></a>
<a id="tocSstreamarn"></a>
<a id="tocsstreamarn"></a>

```json
"stringstringstringstringstringstrings"
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

<h2 id="tocS_ShardId">ShardId</h2>
<!-- backwards compatibility -->
<a id="schemashardid"></a>
<a id="schema_ShardId"></a>
<a id="tocSshardid"></a>
<a id="tocsshardid"></a>

```json
"stringstringstringstringstri"
```

<h2 id="tocS_StreamDescription">StreamDescription</h2>
<!-- backwards compatibility -->
<a id="schemastreamdescription"></a>
<a id="schema_StreamDescription"></a>
<a id="tocSstreamdescription"></a>
<a id="tocsstreamdescription"></a>

```json
{
  "StreamArn": {},
  "StreamLabel": {},
  "StreamStatus": {},
  "StreamViewType": {},
  "CreationRequestDateTime": {},
  "TableName": {},
  "KeySchema": {},
  "Shards": {},
  "LastEvaluatedShardId": {}
}
```

Represents all of the data describing a particular stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamArn|object|false|none|none|
|StreamLabel|object|false|none|none|
|StreamStatus|object|false|none|none|
|StreamViewType|object|false|none|none|
|CreationRequestDateTime|object|false|none|none|
|TableName|object|false|none|none|
|KeySchema|object|false|none|none|
|Shards|object|false|none|none|
|LastEvaluatedShardId|object|false|none|none|

<h2 id="tocS_ShardIterator">ShardIterator</h2>
<!-- backwards compatibility -->
<a id="schemasharditerator"></a>
<a id="schema_ShardIterator"></a>
<a id="tocSsharditerator"></a>
<a id="tocssharditerator"></a>

```json
"string"
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
    "eventID": {},
    "eventName": {},
    "eventVersion": {},
    "eventSource": {},
    "awsRegion": {},
    "dynamodb": {
      "ApproximateCreationDateTime": {},
      "Keys": {
        "property1": {
          "S": {},
          "N": {},
          "B": {},
          "SS": {},
          "NS": {},
          "BS": {},
          "M": {},
          "L": {},
          "NULL": {},
          "BOOL": {}
        },
        "property2": {
          "S": {},
          "N": {},
          "B": {},
          "SS": {},
          "NS": {},
          "BS": {},
          "M": {},
          "L": {},
          "NULL": {},
          "BOOL": {}
        }
      },
      "NewImage": {
        "property1": {
          "S": {},
          "N": {},
          "B": {},
          "SS": {},
          "NS": {},
          "BS": {},
          "M": {},
          "L": {},
          "NULL": {},
          "BOOL": {}
        },
        "property2": {
          "S": {},
          "N": {},
          "B": {},
          "SS": {},
          "NS": {},
          "BS": {},
          "M": {},
          "L": {},
          "NULL": {},
          "BOOL": {}
        }
      },
      "OldImage": {
        "property1": {
          "S": {},
          "N": {},
          "B": {},
          "SS": {},
          "NS": {},
          "BS": {},
          "M": {},
          "L": {},
          "NULL": {},
          "BOOL": {}
        },
        "property2": {
          "S": {},
          "N": {},
          "B": {},
          "SS": {},
          "NS": {},
          "BS": {},
          "M": {},
          "L": {},
          "NULL": {},
          "BOOL": {}
        }
      },
      "SequenceNumber": {},
      "SizeBytes": {},
      "StreamViewType": {}
    },
    "userIdentity": {
      "PrincipalId": {},
      "Type": {}
    }
  }
]
```

<h2 id="tocS_ShardIteratorType">ShardIteratorType</h2>
<!-- backwards compatibility -->
<a id="schemasharditeratortype"></a>
<a id="schema_ShardIteratorType"></a>
<a id="tocSsharditeratortype"></a>
<a id="tocssharditeratortype"></a>

```json
"TRIM_HORIZON"
```

<h2 id="tocS_SequenceNumber">SequenceNumber</h2>
<!-- backwards compatibility -->
<a id="schemasequencenumber"></a>
<a id="schema_SequenceNumber"></a>
<a id="tocSsequencenumber"></a>
<a id="tocssequencenumber"></a>

```json
"stringstringstringstr"
```

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_Identity">Identity</h2>
<!-- backwards compatibility -->
<a id="schemaidentity"></a>
<a id="schema_Identity"></a>
<a id="tocSidentity"></a>
<a id="tocsidentity"></a>

```json
{
  "PrincipalId": {},
  "Type": {}
}
```

Contains details about the type of identity that made the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PrincipalId|object|false|none|none|
|Type|object|false|none|none|

<h2 id="tocS_KeySchemaElement">KeySchemaElement</h2>
<!-- backwards compatibility -->
<a id="schemakeyschemaelement"></a>
<a id="schema_KeySchemaElement"></a>
<a id="tocSkeyschemaelement"></a>
<a id="tocskeyschemaelement"></a>

```json
{
  "AttributeName": {},
  "KeyType": {}
}
```

<p>Represents <i>a single element</i> of a key schema. A key schema specifies the attributes that make up the primary key of a table, or the key attributes of an index.</p> <p>A <code>KeySchemaElement</code> represents exactly one attribute of the primary key. For example, a simple primary key would be represented by one <code>KeySchemaElement</code> (for the partition key). A composite primary key would require one <code>KeySchemaElement</code> for the partition key, and another <code>KeySchemaElement</code> for the sort key.</p> <p>A <code>KeySchemaElement</code> must be a scalar, top-level attribute (not a nested attribute). The data type must be one of String, Number, or Binary. The attribute cannot be nested within a List or a Map.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttributeName|object|true|none|none|
|KeyType|object|true|none|none|

<h2 id="tocS_KeySchema">KeySchema</h2>
<!-- backwards compatibility -->
<a id="schemakeyschema"></a>
<a id="schema_KeySchema"></a>
<a id="tocSkeyschema"></a>
<a id="tocskeyschema"></a>

```json
[
  {
    "AttributeName": {},
    "KeyType": {}
  }
]
```

<h2 id="tocS_KeySchemaAttributeName">KeySchemaAttributeName</h2>
<!-- backwards compatibility -->
<a id="schemakeyschemaattributename"></a>
<a id="schema_KeySchemaAttributeName"></a>
<a id="tocSkeyschemaattributename"></a>
<a id="tocskeyschemaattributename"></a>

```json
"string"
```

<h2 id="tocS_KeyType">KeyType</h2>
<!-- backwards compatibility -->
<a id="schemakeytype"></a>
<a id="schema_KeyType"></a>
<a id="tocSkeytype"></a>
<a id="tocskeytype"></a>

```json
"HASH"
```

<h2 id="tocS_TableName">TableName</h2>
<!-- backwards compatibility -->
<a id="schematablename"></a>
<a id="schema_TableName"></a>
<a id="tocStablename"></a>
<a id="tocstablename"></a>

```json
"string"
```

<h2 id="tocS_StreamList">StreamList</h2>
<!-- backwards compatibility -->
<a id="schemastreamlist"></a>
<a id="schema_StreamList"></a>
<a id="tocSstreamlist"></a>
<a id="tocsstreamlist"></a>

```json
[
  {
    "StreamArn": {},
    "TableName": {},
    "StreamLabel": {}
  }
]
```

<h2 id="tocS_OperationType">OperationType</h2>
<!-- backwards compatibility -->
<a id="schemaoperationtype"></a>
<a id="schema_OperationType"></a>
<a id="tocSoperationtype"></a>
<a id="tocsoperationtype"></a>

```json
"INSERT"
```

<h2 id="tocS_PositiveLongObject">PositiveLongObject</h2>
<!-- backwards compatibility -->
<a id="schemapositivelongobject"></a>
<a id="schema_PositiveLongObject"></a>
<a id="tocSpositivelongobject"></a>
<a id="tocspositivelongobject"></a>

```json
1
```

<h2 id="tocS_StreamRecord">StreamRecord</h2>
<!-- backwards compatibility -->
<a id="schemastreamrecord"></a>
<a id="schema_StreamRecord"></a>
<a id="tocSstreamrecord"></a>
<a id="tocsstreamrecord"></a>

```json
{
  "ApproximateCreationDateTime": {},
  "Keys": {
    "property1": {
      "S": {},
      "N": {},
      "B": {},
      "SS": {},
      "NS": {},
      "BS": {},
      "M": {},
      "L": {},
      "NULL": {},
      "BOOL": {}
    },
    "property2": {
      "S": {},
      "N": {},
      "B": {},
      "SS": {},
      "NS": {},
      "BS": {},
      "M": {},
      "L": {},
      "NULL": {},
      "BOOL": {}
    }
  },
  "NewImage": {
    "property1": {
      "S": {},
      "N": {},
      "B": {},
      "SS": {},
      "NS": {},
      "BS": {},
      "M": {},
      "L": {},
      "NULL": {},
      "BOOL": {}
    },
    "property2": {
      "S": {},
      "N": {},
      "B": {},
      "SS": {},
      "NS": {},
      "BS": {},
      "M": {},
      "L": {},
      "NULL": {},
      "BOOL": {}
    }
  },
  "OldImage": {
    "property1": {
      "S": {},
      "N": {},
      "B": {},
      "SS": {},
      "NS": {},
      "BS": {},
      "M": {},
      "L": {},
      "NULL": {},
      "BOOL": {}
    },
    "property2": {
      "S": {},
      "N": {},
      "B": {},
      "SS": {},
      "NS": {},
      "BS": {},
      "M": {},
      "L": {},
      "NULL": {},
      "BOOL": {}
    }
  },
  "SequenceNumber": {},
  "SizeBytes": {},
  "StreamViewType": {}
}
```

A description of a single data modification that was performed on an item in a DynamoDB table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApproximateCreationDateTime|object|false|none|none|
|Keys|object|false|none|none|
|NewImage|object|false|none|none|
|OldImage|object|false|none|none|
|SequenceNumber|object|false|none|none|
|SizeBytes|object|false|none|none|
|StreamViewType|object|false|none|none|

<h2 id="tocS_Record">Record</h2>
<!-- backwards compatibility -->
<a id="schemarecord"></a>
<a id="schema_Record"></a>
<a id="tocSrecord"></a>
<a id="tocsrecord"></a>

```json
{
  "eventID": {},
  "eventName": {},
  "eventVersion": {},
  "eventSource": {},
  "awsRegion": {},
  "dynamodb": {
    "ApproximateCreationDateTime": {},
    "Keys": {
      "property1": {
        "S": {},
        "N": {},
        "B": {},
        "SS": {},
        "NS": {},
        "BS": {},
        "M": {},
        "L": {},
        "NULL": {},
        "BOOL": {}
      },
      "property2": {
        "S": {},
        "N": {},
        "B": {},
        "SS": {},
        "NS": {},
        "BS": {},
        "M": {},
        "L": {},
        "NULL": {},
        "BOOL": {}
      }
    },
    "NewImage": {
      "property1": {
        "S": {},
        "N": {},
        "B": {},
        "SS": {},
        "NS": {},
        "BS": {},
        "M": {},
        "L": {},
        "NULL": {},
        "BOOL": {}
      },
      "property2": {
        "S": {},
        "N": {},
        "B": {},
        "SS": {},
        "NS": {},
        "BS": {},
        "M": {},
        "L": {},
        "NULL": {},
        "BOOL": {}
      }
    },
    "OldImage": {
      "property1": {
        "S": {},
        "N": {},
        "B": {},
        "SS": {},
        "NS": {},
        "BS": {},
        "M": {},
        "L": {},
        "NULL": {},
        "BOOL": {}
      },
      "property2": {
        "S": {},
        "N": {},
        "B": {},
        "SS": {},
        "NS": {},
        "BS": {},
        "M": {},
        "L": {},
        "NULL": {},
        "BOOL": {}
      }
    },
    "SequenceNumber": {},
    "SizeBytes": {},
    "StreamViewType": {}
  },
  "userIdentity": {
    "PrincipalId": {},
    "Type": {}
  }
}
```

A description of a unique event within a stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventID|object|false|none|none|
|eventName|object|false|none|none|
|eventVersion|object|false|none|none|
|eventSource|object|false|none|none|
|awsRegion|object|false|none|none|
|dynamodb|object|false|none|none|
|userIdentity|object|false|none|none|

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

The beginning and ending sequence numbers for the stream records contained within a shard.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartingSequenceNumber|object|false|none|none|
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
  "SequenceNumberRange": {
    "StartingSequenceNumber": {},
    "EndingSequenceNumber": {}
  },
  "ParentShardId": {}
}
```

A uniquely identified group of stream records within a stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ShardId|object|false|none|none|
|SequenceNumberRange|object|false|none|none|
|ParentShardId|object|false|none|none|

<h2 id="tocS_ShardDescriptionList">ShardDescriptionList</h2>
<!-- backwards compatibility -->
<a id="schemasharddescriptionlist"></a>
<a id="schema_ShardDescriptionList"></a>
<a id="tocSsharddescriptionlist"></a>
<a id="tocssharddescriptionlist"></a>

```json
[
  {
    "ShardId": {},
    "SequenceNumberRange": {
      "StartingSequenceNumber": {},
      "EndingSequenceNumber": {}
    },
    "ParentShardId": {}
  }
]
```

<h2 id="tocS_Stream">Stream</h2>
<!-- backwards compatibility -->
<a id="schemastream"></a>
<a id="schema_Stream"></a>
<a id="tocSstream"></a>
<a id="tocsstream"></a>

```json
{
  "StreamArn": {},
  "TableName": {},
  "StreamLabel": {}
}
```

Represents all of the data describing a particular stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamArn|object|false|none|none|
|TableName|object|false|none|none|
|StreamLabel|object|false|none|none|

<h2 id="tocS_StreamStatus">StreamStatus</h2>
<!-- backwards compatibility -->
<a id="schemastreamstatus"></a>
<a id="schema_StreamStatus"></a>
<a id="tocSstreamstatus"></a>
<a id="tocsstreamstatus"></a>

```json
"ENABLING"
```

<h2 id="tocS_StreamViewType">StreamViewType</h2>
<!-- backwards compatibility -->
<a id="schemastreamviewtype"></a>
<a id="schema_StreamViewType"></a>
<a id="tocSstreamviewtype"></a>
<a id="tocsstreamviewtype"></a>

```json
"NEW_IMAGE"
```
